import { Component, OnInit, ElementRef } from '@angular/core';
import { ClosedExercise } from '../../../models/closed-exercise';
import { SpeakerService } from '../../../services/speaker.service';
import { Exercise } from '../exercise';

@Component({
  selector: 'closed-exercise',
  templateUrl: './closed-exercise.component.html',
  styleUrls: ['./closed-exercise.component.scss']
})
export class ClosedExerciseComponent implements OnInit, Exercise {

  public exercise: ClosedExercise = new ClosedExercise(null, null, null, null, null, null);
  hasMarkedAnswer: boolean = false;
  hasAnswered: boolean = false;
  isHearingExercise: boolean = false;

  constructor(
    private elem: ElementRef,
    private speakerService: SpeakerService) {

    this.exercise.description = 'Преведете израза';
    this.exercise.content = 'Το γράμμα ν';
    this.exercise.isGreekContent = true;
    this.exercise.options = [
      { content: 'Буквата фи', isMarked: false}, 
      { content: 'Буквата ни', isMarked: false}, 
      { content: 'Буквата вита', isMarked: false }
    ];
    this.exercise.areOptionsInGreek = false;
    this.exercise.correctAnswer = 'Буквата ни';
  }

  ngOnInit() {
  }

  mark(option) {
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
}
