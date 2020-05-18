import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DragAndDropExercise } from '../../../../models/drag-and-drop-exercise';
import { SpeakerService } from '../../../../services/speaker.service';
import { Exercise } from '../../exercise';
import { ShufflerService } from '../../../../services/shuffler.service';
import { ExericiseService } from '../../../../services/exericise.service';

@Component({
  selector: 'drag-and-drop-exercise',
  templateUrl: './drag-and-drop-exercise.component.html',
  styleUrls: ['./drag-and-drop-exercise.component.scss']
})
export class DragAndDropExerciseComponent implements OnInit, Exercise {

  @Input() exercise: DragAndDropExercise = new DragAndDropExercise(null, null, null, null, null, null, null, null);

  @Output() isDoneEvent = new EventEmitter<Boolean>();

  answer: string[] = [];
  hasAnswered: boolean = false;
  hasAnsweredCorrectly: boolean = null;

  @Input() sessionId: string;

  constructor(
    private speakerService: SpeakerService,
    private shuffler: ShufflerService,
    private exerciseService: ExericiseService) {

    this.exercise.description = 'Преведете на гръцки';
    this.exercise.content = 'буквата кси';
    this.exercise.textToSpeechContent = false;
    this.exercise.options = ['ξ', 'ω', 'σ', 'το', 'γράμμα', 'άλφα', 'λέξη', 'η', 'χ'];
    this.exercise.textToSpeechOptions = true;
  }

  ngOnInit() {
    this.exercise.options = this.shuffler.shuffle(this.exercise.options);
  }

  addAnswer(option: string) {
    if (this.exercise.textToSpeechOptions) {
      this.speakerService.speak(option);
    }
    
    this.answer.push(option);
    this.removeFromArray(this.exercise.options, option);
  }

  removeAnswer(option: string) {
    this.exercise.options.push(option);
    this.removeFromArray(this.answer, option);
  }

  checkAnswer() {
    this.hasAnswered = true;
    const answer = this.answer.join(' ').trim();

    this.exerciseService.checkDragAndDropExercise({ exerciseId: this.exercise.id, answer: answer, sessionId: this.sessionId }).subscribe(data => {
      if (data.isCorrect) {
        this.hasAnsweredCorrectly = true;
      } else {
        this.hasAnsweredCorrectly = false;
        this.exercise.correctAnswer = data.correctAnswer;
      }
    },
    err => console.error(err));
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
