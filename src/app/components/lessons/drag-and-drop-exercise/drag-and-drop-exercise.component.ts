import { Component, OnInit } from '@angular/core';
import { DragAndDropExercise } from '../../../models/drag-and-drop-exercise';
import { SpeakerService } from '../../../services/speaker.service';
import { Exercise } from '../exercise';

@Component({
  selector: 'drag-and-drop-exercise',
  templateUrl: './drag-and-drop-exercise.component.html',
  styleUrls: ['./drag-and-drop-exercise.component.scss']
})
export class DragAndDropExerciseComponent implements OnInit, Exercise {

  exercise: DragAndDropExercise = new DragAndDropExercise(null, null, null, null, null, null);
  answer: string[] = [];
  hasAnswered: boolean = false;

  constructor(private speakerService: SpeakerService) {
    this.exercise.description = 'Преведете на гръцки';
    this.exercise.content = 'буквата кси';
    this.exercise.isGreekContent = false;
    this.exercise.correctAnswer = 'το γράμμα ξ';
    this.exercise.pieces = ['ξ', 'ω', 'σ', 'το', 'γράμμα', 'άλφα', 'λέξη', 'η', 'χ'];
    this.exercise.arePiecesInGreek = true;

    this.exercise.pieces = this.shuffle(this.exercise.pieces);
  }

  ngOnInit() {
  }

  private shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
  }

  addAnswer(piece: string) {
    this.speakerService.speak(piece);
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
    if (answer === this.exercise.correctAnswer) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  private removeFromArray(array: any[], element: any) {
    const index = array.indexOf(element);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}
