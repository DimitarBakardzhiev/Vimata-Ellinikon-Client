import { Component, OnInit, Input } from '@angular/core';
import { OpenExercise } from '../../../models/open-exercise';
import { ClosedExercise } from '../../../models/closed-exercise';
import { DragAndDropExercise } from '../../../models/drag-and-drop-exercise';
import { Topic } from '../../../models/topic';
import { ClosedExerciseOption } from '../../../models/closed-exercise-option';
import { ShufflerService } from '../../../services/shuffler.service';
import { SpeakingExercise } from '../../../models/speaking-exercise';
import { trigger, style, animate, transition } from '@angular/animations';
import { ExericiseService } from '../../../services/exericise.service';

@Component({
  selector: 'app-exercises',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  @Input() lesson: string = 'азбука';

  exercises: any[] = [];
  currentExerciseIndex: number = 0;

  correctAnswers: number = 0;
  result: number = 55;
  show: boolean = true;

  isLoading: boolean = true;
  sessionId: string;

  constructor(private shuffler: ShufflerService,
    private exerciseService: ExericiseService) {

    this.sessionId = localStorage.getItem(this.lesson);

    debugger;
    if (this.sessionId) {
      this.getExistingSession(this.sessionId);
    } else {
      this.startNewExerciseSession();
    }

    //this.startNewExerciseSession();
  
  }

  ngOnInit() {
    // this.exerciseService.test().subscribe(data => {
    //   var exercise = new OpenExercise(null, null, null, null, null, null);
    //   Object.assign(exercise, data);
    //   console.log(exercise);
    //   console.log(this.isSpeakingExercise(exercise));
    // }, err => console.error(err));
    this.exercises = this.shuffler.shuffle(this.exercises);
  }

  private getExistingSession(sessionId: string) {
    this.exerciseService.getExerciseSession(sessionId).subscribe(data => {
      if (data) {
        this.isLoading = false;
        console.log('populating from existing');
        this.populateExercisesFromSession(data);
      } else {
        console.log('populating from new session');
        this.startNewExerciseSession();
      }
    }, err => console.error(err));
  }

  private startNewExerciseSession() {
    this.exerciseService.startExerciseSession(this.lesson).subscribe(data => {
      localStorage.setItem(this.lesson, data.id);
      this.sessionId = data.id;
      
      this.isLoading = false;
      this.populateExercisesFromSession(data);
    }, err => {
      console.error(err);
      this.isLoading = false;
    });
  }

  private populateExercisesFromSession(session: any) : void {
    for (const exercise of session.closedExercises) {
      let closed: ClosedExercise = Object.create(ClosedExercise.prototype);
      exercise.options = exercise.options.map(o => new ClosedExerciseOption(o));
      Object.assign(closed, exercise);
      this.exercises.push(closed);
    }

    for (const exercise of session.openExercises) {
      let open: OpenExercise = Object.create(OpenExercise.prototype);
      Object.assign(open, exercise);
      this.exercises.push(open);
    }

    for (const exercise of session.dragAndDropExercises) {
      let dragAndDrop: DragAndDropExercise = Object.create(DragAndDropExercise.prototype);
      Object.assign(dragAndDrop, exercise);
      this.exercises.push(dragAndDrop);
    }

    for (const exercise of session.speakingExercises) {
      let speaking: SpeakingExercise = Object.create(SpeakingExercise.prototype);
      Object.assign(speaking, exercise);
      this.exercises.push(speaking);
    }
  }

  private isOpenExercise(exercise: any): boolean {
    return exercise instanceof OpenExercise;
  }

  private isClosedExercise(exercise: any): boolean {
    return exercise instanceof ClosedExercise;
  }

  private isDragAndDropExercise(exercise: any): boolean {
    return exercise instanceof DragAndDropExercise;
  }

  private isSpeakingExercise(exercise: any): boolean {
    return exercise instanceof SpeakingExercise;
  }

  private test() {
    console.log(this.currentExerciseIndex);
  }

  private previous() {
    this.currentExerciseIndex--;
  }

  private next() {
    this.currentExerciseIndex++;
  }

  private nextExercise(wasCorrectAnswer: Boolean) {
    this.currentExerciseIndex++;
    if (wasCorrectAnswer === true) {
      this.correctAnswers++;
    }

    if (this.currentExerciseIndex === this.exercises.length) {
      this.result = this.correctAnswers / this.exercises.length * 100;
      console.log(`${this.result} %`);
      // send result to server
      return;
    }
  }

  private showToggle() {
    this.show = !this.show;
  }

  private nextMedal() {
    switch (this.result) {
      case 55:
        this.result = 88;
        break;
      case 88:
        this.result = 100;
        break;
      default:
        this.result = 55;
        break;
    }
  }

  check() {
    console.log(this.exercises);
  }
  
  testId: string;

  testSet() {
    this.exerciseService.startExerciseSession('азбука').subscribe(data => this.testId = data.id, err => console.error(err));
  }

  testGet() {
    this.exerciseService.getExerciseSession(this.testId).subscribe(data => console.log(data), err => console.error(err));
  }
}
