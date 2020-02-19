import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss']
})
export class ResultBoxComponent implements OnInit {

  @Input() hasAnsweredCorrectly: boolean;
  @Input() hasAnswered: boolean;
  @Input() correctAnswer: string;
  @Input() hasAnswer: boolean;
  @Input() isSpeakingExercise: boolean = false;
  
  @Output() isDoneEvent = new EventEmitter<void>();
  @Output() checkAnswerEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  nextExercise() {
    this.isDoneEvent.emit();
  }

  checkAnswer() {
    this.checkAnswerEvent.emit();
  }
}
