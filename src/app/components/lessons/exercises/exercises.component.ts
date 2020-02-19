import { Component, OnInit } from '@angular/core';
import { OpenExercise } from '../../../models/open-exercise';
import { ClosedExercise } from '../../../models/closed-exercise';
import { DragAndDropExercise } from '../../../models/drag-and-drop-exercise';
import { Topic } from '../../../models/topic';
import { ClosedExerciseOption } from '../../../models/closed-exercise-option';
import { ShufflerService } from '../../../services/shuffler.service';
import { SpeakingExercise } from '../../../models/speaking-exercise';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exercises: any[] = [];
  currentExerciseIndex: number = 0;

  correctAnswers: number = 0;

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

    this.exercises.push(new DragAndDropExercise(
      'Преведете на български',
      'Με λένε Μαρία',
      ['казвам', 'се', 'Мария', 'аз', 'съм', 'не', 'тя', 'е', 'здравей'],
      'Казвам се Мария',
      true, false, true));

    this.exercises.push(new SpeakingExercise('Прочетете изречението', 'Με λένε Γιώργο', 'Με λένε Γιώργο', false));
    this.exercises.push(new SpeakingExercise('Повторете', 'Το γράμμα ξ', 'Το γράμμα ξ', true));
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
      console.log(`${this.correctAnswers / this.exercises.length * 100} %`);
      // send result to server
      return;
    }
  }
}
