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

  @Input() lesson: string;

  exercises: any[] = [];
  currentExerciseIndex: number = 0;

  correctAnswers: number = 0;
  result: number = 55;
  show: boolean = true;

  constructor(private shuffler: ShufflerService,
    private exerciseService: ExericiseService) {
    // this.exercises.push(new SpeakingExercise(0, 'Повторете', 'Είμαι καλά', true));
    this.exerciseService.getClosedExercises('азбука').subscribe(data => {
      data.forEach(exercise => {
        this.exercises.push(new ClosedExercise(exercise.id,
          exercise.description,
          exercise.content,
          exercise.options.map(o => new ClosedExerciseOption(o)),
          exercise.isGreekContent,
          exercise.areOptionsInGreek,
          exercise.isHearingExercise))
      });
    }, err => console.error(err));

    // this.exerciseService.getOpenExercises('азбука').subscribe(data => {
    //   data.forEach(exercise => {
    //     this.exercises.push(new OpenExercise(exercise.id,
    //       exercise.description,
    //       exercise.content,
    //       exercise.isGreekContent,
    //       exercise.IsHearingExercise));
    //   });
    // });

    // this.exerciseService.getDragAndDropExercises('азбука').subscribe(data => {
    //   data.forEach(exercise => {
    //     this.exercises.push(new DragAndDropExercise(exercise.id,
    //       exercise.description,
    //       exercise.content,
    //       exercise.options,
    //       exercise.isGreekContent,
    //       exercise.areOptionsInGreek,
    //       exercise.IsHearingExercise));
    //   });
    // });

    // this.exerciseService.getSpeakingExercises('азбука').subscribe(data => {
    //   data.forEach(exercise => {
    //     this.exercises.push(new SpeakingExercise(exercise.id,
    //       exercise.description,
    //       exercise.content,
    //       exercise.IsHearingExercise));
    //   });
    // });

    this.exercises = this.shuffler.shuffle(this.exercises);
  }

  ngOnInit() {
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
}
