import { Component, OnInit } from '@angular/core';
import { OpenExercise } from '../../../models/open-exercise';
import { ClosedExercise } from '../../../models/closed-exercise';
import { DragAndDropExercise } from '../../../models/drag-and-drop-exercise';
import { Topic } from '../../../models/topic';
import { ClosedExerciseOption } from '../../../models/closed-exercise-option';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exercises: any[] = [];
  currentExerciseIndex: number = 0;

  constructor() {
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

    this.exercises.push(new DragAndDropExercise(
      'Преведете на български',
      'Με λένε Μαρία',
      ['казвам', 'се', 'Мария', 'аз', 'съм', 'не', 'тя', 'е', 'здравей'],
      'Казвам се Мария',
      true, false, true));
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

  private test() {
    console.log(this.currentExerciseIndex);
  }

  private previous() {
    this.currentExerciseIndex--;
  }

  private next() {
    this.currentExerciseIndex++;
  }

  private nextExercise() {
    this.currentExerciseIndex++;
  }
}
