import { Component, OnInit, Input } from '@angular/core';
import { OpenExercise } from '../../../models/open-exercise';
import { Exercise } from '../exercise';

@Component({
  selector: 'open-exercise',
  templateUrl: './open-exercise.component.html',
  styleUrls: ['./open-exercise.component.scss']
})
export class OpenExerciseComponent implements OnInit, Exercise {

  exercise: OpenExercise = {};
  hasAnswered: boolean = false;
  isHearingExercise: boolean = false;

  constructor() {
    this.exercise.description = 'Преведете на български';
    this.exercise.content = 'Καφέ';
    this.exercise.isGreekContent = true;
    this.exercise.correctAnswer = 'кафе';
  }

  ngOnInit() {
  }

  isCorrectAnswer() : Boolean {
    return this.exercise.userAnswer.toLocaleLowerCase() === this.exercise.correctAnswer.toLocaleLowerCase();
  }

  checkAnswer() {
    this.hasAnswered = true;
    console.log(this.isCorrectAnswer());
  }
}
