import { Component, OnInit } from '@angular/core';
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

  constructor(private exerciseService: ExericiseService,
    private router: Router) {
    this.exerciseService.getAllLessons().subscribe(data => { 
      this.lessons = data;
      this.exercise.lesson = this.lessons[0];
    }, 
    err => console.error(err));
  }

  ngOnInit() {
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
}
