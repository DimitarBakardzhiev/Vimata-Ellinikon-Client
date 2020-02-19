import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DragAndDropExercise } from '../../../models/drag-and-drop-exercise';
import { SpeakerService } from '../../../services/speaker.service';
import { Exercise } from '../exercise';
import { ShufflerService } from '../../../services/shuffler.service';

@Component({
  selector: 'drag-and-drop-exercise',
  templateUrl: './drag-and-drop-exercise.component.html',
  styleUrls: ['./drag-and-drop-exercise.component.scss']
})
export class DragAndDropExerciseComponent implements OnInit, Exercise {

  @Input() exercise: DragAndDropExercise = new DragAndDropExercise(null, null, null, null, null, null, null);

  @Output() isDoneEvent = new EventEmitter<Boolean>();

  answer: string[] = [];
  hasAnswered: boolean = false;
  hasAnsweredCorrectly: boolean = null;

  constructor(
    private speakerService: SpeakerService,
    private shuffler: ShufflerService) {

    this.exercise.description = 'Преведете на гръцки';
    this.exercise.content = 'буквата кси';
    this.exercise.isGreekContent = false;
    this.exercise.correctAnswer = 'το γράμμα ξ';
    this.exercise.pieces = ['ξ', 'ω', 'σ', 'το', 'γράμμα', 'άλφα', 'λέξη', 'η', 'χ'];
    this.exercise.arePiecesInGreek = true;
  }

  ngOnInit() {
    this.exercise.pieces = this.shuffler.shuffle(this.exercise.pieces);
  }

  addAnswer(piece: string) {
    if (this.exercise.arePiecesInGreek) {
      this.speakerService.speak(piece);
    }
    
    this.answer.push(piece);
    this.removeFromArray(this.exercise.pieces, piece);
  }

  removeAnswer(piece: string) {
    this.exercise.pieces.push(piece);
    this.removeFromArray(this.answer, piece);
  }

  checkAnswer() {
    this.hasAnswered = true;
    const answer = this.answer.join(' ').trim()
    if (answer.toLocaleLowerCase() === this.exercise.correctAnswer.toLocaleLowerCase()) {
      console.log(true);
      this.hasAnsweredCorrectly = true;
    } else {
      console.log(false);
      this.hasAnsweredCorrectly = false;
    }
  }

  nextExercise() {
    this.isDoneEvent.emit(this.hasAnsweredCorrectly);
  }
  
  private removeFromArray(array: any[], element: any) {
    const index = array.indexOf(element);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

}
