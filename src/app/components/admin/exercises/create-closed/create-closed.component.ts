import { Component, OnInit, Input } from '@angular/core';
import { ExericiseService } from '../../../../services/exericise.service';
import { CreateClosedExercise } from '../../../../models/create-exercise/create-closed-exercise';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-closed',
  templateUrl: './create-closed.component.html',
  styleUrls: ['./create-closed.component.scss']
})
export class CreateClosedComponent implements OnInit {

  lessons: string[];
  options: { value: string }[] = [{value: ''}, {value: ''}];
  optionsRadios: number = -1;

  exercise: CreateClosedExercise = new CreateClosedExercise('', '', '', [], '', false, false, false);

  @Input() editId: number;
  @Input() editModel: any;

  constructor(private exerciseService: ExericiseService,
    private router: Router) {
    this.exerciseService.getAllLessons().subscribe(data => { 
      this.lessons = data;
    }, 
    err => console.error(err));

  }

  ngOnInit() {
    if (this.editModel != undefined) {

      console.log(this.editModel);

      this.exercise = new CreateClosedExercise(
        this.editModel.description,
        this.editModel.content,
        '',
        [],
        this.editModel.lesson,
        this.editModel.textToSpeechContent,
        this.editModel.textToSpeechOptions,
        this.editModel.isHearingExercise
      );

      console.log(this.exercise.lesson)
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
    console.log(this.exercise);
    console.log(this.optionsRadios);
    console.log(this.options);
  }

  add() {
    this.options.push({ value: '' });
  }

  remove(index: number) {
    console.log(index);
    this.options.splice(index, 1);
  }

  submit() {
    if (!this.isUserInputValid()) {
      alert('Попълнете полетата правилно!');
      return;
    }

    this.exercise.options = this.options.map(o => o.value);
    this.exercise.correctAnswer = this.options[this.optionsRadios].value;
    console.log(this.exercise);
    this.exerciseService.createClosedExercise(this.exercise).subscribe(data => this.router.navigate(['/администрация']), err => console.error(err));
  }

  edit() {
    if (!this.isUserInputValid()) {
      alert('Попълнете полетата правилно!');
      return;
    }

    this.exercise.options = this.options.map(o => o.value);
    this.exercise.correctAnswer = this.options[this.optionsRadios].value;
    this.exerciseService.editClosedExercise(this.editId, this.exercise).subscribe(data => this.router.navigate(['/администрация']), err => console.error(err));
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
