import { Component, OnInit } from '@angular/core';
import { OpenExercise } from '../../../models/open-exercise';
import { ClosedExercise } from '../../../models/closed-exercise';
import { DragAndDropExercise } from '../../../models/drag-and-drop-exercise';
import { Topic } from '../../../models/topic';
import { ClosedExerciseOption } from '../../../models/closed-exercise-option';
import { ShufflerService } from '../../../services/shuffler.service';
import { SpeakingExercise } from '../../../models/speaking-exercise';
import { trigger, style, animate, transition } from '@angular/animations';

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

  exercises: any[] = [];
  currentExerciseIndex: number = 0;

  correctAnswers: number = 0;
  result: number = 55;
  show: boolean = true;

  constructor(private shuffler: ShufflerService) {
    // this.exercises.push(new ClosedExercise(
    //   'Преведете на гръцки',
    //   'Буквата вита', [
    //     new ClosedExerciseOption('το γράμμα β'),
    //     new ClosedExerciseOption('το γράμμα φ'),
    //     new ClosedExerciseOption('το γράμμα ν'),
    //     new ClosedExerciseOption('το γράμμα γ'),
    //   ],
    //   'το γράμμα β',
    //   false,
    //   true,
    //   false));

    // this.exercises.push(new ClosedExercise(
    //   'Преведете на гръцки',
    //   'Буквата зита', [
    //     new ClosedExerciseOption('το γράμμα σ'),
    //     new ClosedExerciseOption('το γράμμα ζ'),
    //     new ClosedExerciseOption('το γράμμα μ'),
    //     new ClosedExerciseOption('το γράμμα γ'),
    //   ],
    //   'το γράμμα ζ',
    //   false,
    //   true,
    //   false));

    // this.exercises.push(new ClosedExercise(
    //   'Преведете на български',
    //   'το γράμμα ω', [
    //     new ClosedExerciseOption('буквата омега'),
    //     new ClosedExerciseOption('буквата йота'),
    //     new ClosedExerciseOption('буквата омикрон'),
    //     new ClosedExerciseOption('буквата сигма'),
    //   ],
    //   'буквата омега', 
    //   true,
    //   false,
    //   false));

    // this.exercises.push(new OpenExercise('Преведете на български', 'ωκεανός', true, 'океан', false));
    // this.exercises.push(new OpenExercise('Преведете на български', 'εγωισμός', true, 'егоизъм', false));
    // this.exercises.push(new OpenExercise('Напишете на гръцки', 'Τουρκία', true, 'Τουρκία', true));

    // this.exercises.push(new DragAndDropExercise(
    //   'Преведете на български',
    //   'Με λένε Μαρία',
    //   ['казвам', 'се', 'Мария', 'аз', 'съм', 'не', 'тя', 'е', 'здравей'],
    //   'Казвам се Мария',
    //   true, false, false));

    // this.exercises.push(new SpeakingExercise('Прочетете изречението', 'Με λένε Γιώργο', 'Με λένε Γιώργο', false));
    // this.exercises.push(new SpeakingExercise('Повторете', 'Το γράμμα ξ', 'Το γράμμα ξ', true));
    this.exercises.push(new SpeakingExercise('Повторете', 'Είμαι καλά', 'Είμαι καλά', true));

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
}
