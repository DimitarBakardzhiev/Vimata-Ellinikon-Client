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
import { MedalType } from '../../../models/medal-type';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

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

  lesson: string;

  exercises: any[] = [];
  currentExerciseIndex: number = 0;

  correctAnswers: number = 0;
  result: number = 55;
  show: boolean = true;

  isLoading: boolean = true;
  sessionId: string;

  medal: MedalType;

  errorMessage: string;

  constructor(private shuffler: ShufflerService,
    private exerciseService: ExericiseService,
    private route: ActivatedRoute) {

    this.route.paramMap.subscribe(data => {
      this.lesson = data.get('lesson');

      if (this.lesson === undefined) {
        console.error('Lesson undefined');
      }
    });
    this.sessionId = localStorage.getItem(this.lesson);
    
    if (this.sessionId) {
      this.getExistingSession(this.sessionId);
    } else {
      this.startNewExerciseSession();
    }

  }

  ngOnInit() {
  }

  private getExistingSession(sessionId: string) {
    this.exerciseService.getExerciseSession(sessionId).subscribe(data => {
      if (data) {
        this.isLoading = false;
        this.populateExercisesFromSession(data);
      } else {
        this.startNewExerciseSession();
      }
    }, err => this.startNewExerciseSession());
  }

  private startNewExerciseSession() {
    this.exerciseService.startExerciseSession(this.lesson).subscribe(data => {
      localStorage.setItem(this.lesson, data.id);
      this.sessionId = data.id;
      
      this.isLoading = false;
      this.populateExercisesFromSession(data);
    }, err => {
      this.errorMessage = 'Поради грешка на сървъра упражненията не могат да се заредят! Моля, свържете се с администратор!'
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
    
    this.exercises = this.shuffler.shuffle(this.exercises);
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

  private nextExercise(wasCorrectAnswer: Boolean) {
    this.currentExerciseIndex++;

    if (this.currentExerciseIndex === this.exercises.length) {

      this.exerciseService.endSession(this.sessionId).subscribe(data => {
        this.medal = <MedalType>data;
      }, err => {
        switch ((err as HttpErrorResponse).status) {
          case 404:
            this.errorMessage = 'Сесията не е намерена! Моля, свържете се с администратор!';
            break;
          case 400:
            this.errorMessage = 'Сесията не е завършена! Моля, свържете се с администратор!';
            break;
          default:
            this.errorMessage = 'Възникна непозната грешка! Моля, свържете се с администратор!';
            break;
        }
      });
    }
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

  private isGold() : boolean {
    return this.medal === MedalType.Gold;
  } 
  
  private isSilver() : boolean {
    return this.medal === MedalType.Silver;
  }
  
  private isBronze() : boolean {
    return this.medal === MedalType.Bronze;
  }

  private isFailed() : boolean {
    return this.medal === MedalType.Failed;
  }
}
