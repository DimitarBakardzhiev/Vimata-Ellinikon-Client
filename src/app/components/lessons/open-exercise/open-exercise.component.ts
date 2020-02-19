import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OpenExercise } from '../../../models/open-exercise';
import { Exercise } from '../exercise';

@Component({
  selector: 'open-exercise',
  templateUrl: './open-exercise.component.html',
  styleUrls: ['./open-exercise.component.scss']
})
export class OpenExerciseComponent implements OnInit, Exercise {

  @Input() exercise: OpenExercise = new OpenExercise(null, null, null, null, null);

  @Output() isDoneEvent = new EventEmitter<Boolean>();
  
  hasAnswered: boolean = false;
  userAnswer: string = '';
  hasAnsweredCorrectly: boolean = null;

  constructor() {
    this.exercise.description = 'Преведете на български';
    this.exercise.content = 'Καφέ';
    this.exercise.isGreekContent = true;
    this.exercise.correctAnswer = 'кафе';
    this.exercise.isHearingExercise = false;
  }

  ngOnInit() {
  }

  isCorrectAnswer() : Boolean {
    this.hasAnsweredCorrectly = this.userAnswer.toLocaleLowerCase() === this.exercise.correctAnswer.toLocaleLowerCase();
    return this.hasAnsweredCorrectly;
  }

  checkAnswer() {
    this.hasAnswered = true;
    console.log(this.isCorrectAnswer());
  }

  nextExercise() {
    this.isDoneEvent.emit(this.hasAnsweredCorrectly);
  }
}
