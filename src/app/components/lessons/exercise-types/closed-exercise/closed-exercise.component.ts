import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ClosedExercise } from '../../../../models/closed-exercise';
import { SpeakerService } from '../../../../services/speaker.service';
import { Exercise } from '../../exercise';
import { ClosedExerciseOption } from '../../../../models/closed-exercise-option';
import { ShufflerService } from '../../../../services/shuffler.service';
import { ExericiseService } from '../../../../services/exericise.service';

@Component({
  selector: 'closed-exercise',
  templateUrl: './closed-exercise.component.html',
  styleUrls: ['./closed-exercise.component.scss'],
})
export class ClosedExerciseComponent implements OnInit, Exercise {

  @Input() exercise: ClosedExercise = new ClosedExercise(null, null, null, null, null, null, null, null);

  @Output() isDoneEvent = new EventEmitter<Boolean>();

  hasMarkedAnswer: boolean = false;
  hasAnswered: boolean = false;
  hasAnsweredCorrectly: boolean = null;

  @Input() sessionId: string;

  constructor(
    private elem: ElementRef,
    private speakerService: SpeakerService,
    private shuffler: ShufflerService,
    private exerciseService: ExericiseService) {
      console.log(this.exercise);
  }

  ngOnInit() {
    this.exercise.options = this.shuffler.shuffle(this.exercise.options);
    console.log(this.exercise);
  }

  mark(option: ClosedExerciseOption) {
    this.exercise.options.forEach(option => option.isMarked = false);
    option.isMarked = true;
    this.hasMarkedAnswer = true;
  }

  checkAnswer() {
    this.hasAnswered = true;
    let selectedOption = this.exercise.options.find(option => option.isMarked);
    let markedHtmlOption = this.elem.nativeElement.querySelector('.marked');

    this.exerciseService.checkExercise({ exerciseId: this.exercise.id, answer: selectedOption.content, sessionId: this.sessionId }).subscribe(data => {
      if (data.isCorrect) {
        this.hasAnsweredCorrectly = true;
        this.markCorrect(markedHtmlOption);
      } else {
        this.hasAnsweredCorrectly = false;
        this.markWrong(markedHtmlOption);
        this.markCorrect(this.getCorrectOption(data.correctAnswer));
        this.exercise.correctAnswer = data.correctAnswer;
      }
    },
    err => console.error(err));
  }

  speak(text: string) {
    this.speakerService.speak(text);
  }

  private markWrong(element) {
    element.style['background-color'] = 'red';
    element.style['color'] = 'white';
  }

  private markCorrect(element) {
    element.style['background-color'] = 'green';
    element.style['color'] = 'white';
  }

  private getCorrectOption(correctAnswer: string) {
    let options = this.elem.nativeElement.querySelectorAll('.exercise-option');
    let correct = {};
    options.forEach(element => {
      if (element.innerText === correctAnswer) {
        correct = element;
      }
    });

    return correct;
  }

  private nextExercise() {
    this.isDoneEvent.emit(this.hasAnsweredCorrectly);
  }
}
