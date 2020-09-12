import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OpenExercise } from '../../../../models/open-exercise';
import { Exercise } from '../../exercise';
import { ExericiseService } from '../../../../services/exericise.service';

@Component({
  selector: 'open-exercise',
  templateUrl: './open-exercise.component.html',
  styleUrls: ['./open-exercise.component.scss']
})
export class OpenExerciseComponent implements OnInit, Exercise {

  @Input() exercise: OpenExercise = new OpenExercise(null, null, null, null, null, null);

  @Output() isDoneEvent = new EventEmitter<Boolean>();
  
  hasAnswered: boolean = false;
  userAnswer: string = '';
  hasAnsweredCorrectly: boolean = null;

  @Input() sessionId: string;

  constructor(private exerciseService: ExericiseService) {
    this.exercise.description = 'Преведете на български';
    this.exercise.content = 'Καφέ';
    this.exercise.textToSpeechContent = true;
    this.exercise.isHearingExercise = false;
  }

  ngOnInit() {
  }

  checkAnswer() {
    this.hasAnswered = true;
    
    this.exerciseService.checkExercise({ exerciseId: this.exercise.id, answer: this.userAnswer, sessionId: this.sessionId }).subscribe(data => {
      this.hasAnsweredCorrectly = data.isCorrect;
      this.exercise.correctAnswer = data.correctAnswer;
    },
    err => console.error(err));
  }

  nextExercise() {
    this.isDoneEvent.emit(this.hasAnsweredCorrectly);
  }
}
