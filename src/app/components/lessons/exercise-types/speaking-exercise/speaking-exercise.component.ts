import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild } from '@angular/core';
import { SpeakingExercise } from '../../../../models/speaking-exercise';
import { ExericiseService } from '../../../../services/exericise.service';

@Component({
  selector: 'speaking-exercise',
  templateUrl: './speaking-exercise.component.html',
  styleUrls: ['./speaking-exercise.component.scss']
})
export class SpeakingExerciseComponent implements OnInit {

  @Input() exercise: SpeakingExercise = new SpeakingExercise(null, null, null, null);

  @Output() isDoneEvent = new EventEmitter<Boolean>();

  hasGivenAnswer: boolean = false;
  hasAnswered: boolean = false;
  hasAnsweredCorrectly: boolean = null;
  recognition = new ((<any>window).SpeechRecognition || (<any>window).webkitSpeechRecognition || (<any>window).mozSpeechRecognition || (<any>window).msSpeechRecognition)();
  speech: any;

  @Input() sessionId: string;

  errorMessage: string;

  constructor(private exerciseService: ExericiseService, private renderer2: Renderer2) {
    this.prepareSpeechRecognition();
  }

  ngOnInit() {
  }

  checkAnswer() {
    if (this.speech === undefined) {
      return;
    }

    this.hasAnswered = true;
    this.exerciseService.checkExercise({ exerciseId: this.exercise.id, answer: this.speech, sessionId: this.sessionId }).subscribe(data => {
      this.hasAnsweredCorrectly = data.isCorrect;
    },
    err => this.errorMessage = 'Възникна непозната грешка! Моля, свържете се с администратор!');
  }

  listen() {
    this.recognition.start();
    let microphone = document.getElementsByClassName('microphone-icon')[0];
    this.renderer2.setStyle(microphone, 'background-color', 'red');

    setTimeout((initialColor) => {
      this.hasGivenAnswer = true;
      this.renderer2.setStyle(microphone, 'background-color', '#2FA4E7');
    }, 3000);
  }

  private prepareSpeechRecognition() {
    this.recognition.lang = 'el';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 5;

    this.recognition.onresult = (event) => {
      this.speech = event.results[0][0].transcript;
      console.log('You said: ', this.speech);
      console.log(event);
    };
  }

  private nextExercise() {
    this.isDoneEvent.emit(this.hasAnsweredCorrectly);
  }
}
