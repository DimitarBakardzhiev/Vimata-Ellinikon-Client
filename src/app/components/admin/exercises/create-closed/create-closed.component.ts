import { Component, OnInit, Input, Attribute } from '@angular/core';
import { ExericiseService } from '../../../../services/exericise.service';
import { CreateClosedExercise } from '../../../../models/create-exercise/create-closed-exercise';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-closed',
  templateUrl: './create-closed.component.html',
  styleUrls: ['./create-closed.component.scss']
})
export class CreateClosedComponent implements OnInit {

  lessons: { id: number, title: string }[];
  options: { value: string }[] = [{value: ''}, {value: ''}];
  optionsRadios: number = -1;

  exercise: CreateClosedExercise = new CreateClosedExercise('', '', '', [], 0, false, false, false);

  @Input() editId: number;
  @Input() editModel: any;

  errorMessage: string;

  constructor(private exerciseService: ExericiseService,
    private router: Router) {
    this.exerciseService.getAllLessons().subscribe(data => { 
      this.lessons = data;
    }, 
    err => this.errorMessage = 'Възникна непозната грешка! Моля, свържете се с администратор!');
  }

  ngOnInit() {
    if (this.editModel != undefined) {

      console.log(this.editModel);

      this.exercise = new CreateClosedExercise(
        this.editModel.description,
        this.editModel.content,
        '',
        [],
        this.editModel.lessonId,
        this.editModel.textToSpeechContent,
        this.editModel.textToSpeechOptions,
        this.editModel.isHearingExercise
      );

      this.options = this.editModel.options.map(o => { return { value: o } });
      for (let i = 0; i < this.editModel.options.length; i++) {
        if (this.editModel.options[i] == this.editModel.correctAnswer) {
          this.optionsRadios = i;
          break;
        }
      }
      
      console.log(this.optionsRadios)
    }
  }

  check() {
    var asd = document.querySelector('input[type="radio"]');
    console.log(this.optionsRadios);
    console.log(asd);
    
  }

  add() {
    this.options.push({ value: '' });
  }

  remove(index: number) {
    console.log(index);
    this.options.splice(index, 1);

    // reset radio button when marked answer is removed
    if (this.optionsRadios == index) {
      this.optionsRadios = -1;
    }
  }

  submit() {
    if (!this.isUserInputValid()) {
      alert('Попълнете полетата правилно!');
      return;
    }

    this.exercise.options = this.options.map(o => o.value);
    this.exercise.correctAnswer = this.options[this.optionsRadios].value;
    this.exercise.lessonId = Number(this.exercise.lessonId);
    this.exerciseService.createClosedExercise(this.exercise).subscribe(
      data => this.router.navigate(['/администрация']),
      err => this.errorMessage = 'Възникна непозната грешка! Моля, свържете се с администратор!');
  }

  edit() {
    if (!this.isUserInputValid()) {
      alert('Попълнете полетата правилно!');
      return;
    }

    this.exercise.options = this.options.map(o => o.value);
    this.exercise.correctAnswer = this.options[this.optionsRadios].value;
    this.exercise.lessonId = Number(this.exercise.lessonId);
    this.exerciseService.editClosedExercise(this.editId, this.exercise).subscribe(
      data => this.router.navigate(['/администрация']),
      err => this.errorMessage = 'Възникна непозната грешка! Моля, свържете се с администратор!');
  }

  isUserInputValid() : boolean {
    return this.exercise.isDescriptionValid() && 
    this.exercise.isContentValid() && 
    this.exercise.isLessonValid() && 
    this.optionsRadios >= 0 &&
    this.allOptionsAreValid();
  }

  private allOptionsAreValid() : boolean {
    if (this.options.length < 2) {
      return false;
    }

    for (const option of this.options) {
      if (option.value.length < 1) {
        return false;
      }
    }

    return true;
  }

  private isEditMode() : boolean {
    return this.editId != undefined && this.editModel != undefined;
  }
}
