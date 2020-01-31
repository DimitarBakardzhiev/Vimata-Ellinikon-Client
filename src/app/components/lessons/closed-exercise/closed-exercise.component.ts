import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ClosedExercise } from '../../../models/closed-exercise';
import { SpeakerService } from '../../../services/speaker.service';
import { Exercise } from '../exercise';
import { ClosedExerciseOption } from '../../../models/closed-exercise-option';
import { ShufflerService } from '../../../services/shuffler.service';

@Component({
  selector: 'closed-exercise',
  templateUrl: './closed-exercise.component.html',
  styleUrls: ['./closed-exercise.component.scss'],
})
export class ClosedExerciseComponent implements OnInit, Exercise {

  @Input() exercise: ClosedExercise = new ClosedExercise(null, null, null, null, null, null, null);

  @Output() isDoneEvent = new EventEmitter<void>();

  hasMarkedAnswer: boolean = false;
  hasAnswered: boolean = false;

  constructor(
    private elem: ElementRef,
    private speakerService: SpeakerService,
    private shuffler: ShufflerService) {

    this.exercise.description = 'Преведете израза';
    this.exercise.content = 'Το γράμμα ν';
    this.exercise.isGreekContent = true;
    this.exercise.options = [
      new ClosedExerciseOption('Буквата фи'),
      new ClosedExerciseOption('Буквата ни'),
      new ClosedExerciseOption('Буквата вита')
    ];
    this.exercise.areOptionsInGreek = false;
    this.exercise.correctAnswer = 'Буквата ни';
    this.exercise.isHearingExercise = false;
  }

  ngOnInit() {
    this.exercise.options = this.shuffler.shuffle(this.exercise.options);
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

    if (selectedOption.content === this.exercise.correctAnswer) {
      this.markCorrect(markedHtmlOption);
    
      return true;
    } else {
      this.markWrong(markedHtmlOption);
      this.markCorrect(this.getCorrectOption());

      return false;
    }
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

  private getCorrectOption() {
    let options = this.elem.nativeElement.querySelectorAll('.exercise-option');
    let correct = {};
    options.forEach(element => {
      if (element.innerText === this.exercise.correctAnswer) {
        correct = element;
      }
    });

    return correct;
  }

  private nextExercise() {
    this.isDoneEvent.emit();
  }
}
