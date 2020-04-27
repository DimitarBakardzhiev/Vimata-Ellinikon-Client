import { Component, OnInit } from '@angular/core';
import { ExericiseService } from '../../../../services/exericise.service';
import { CreateOpenExercise } from '../../../../models/create-exercise/create-open-exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-open',
  templateUrl: './create-open.component.html',
  styleUrls: ['./create-open.component.scss']
})
export class CreateOpenComponent implements OnInit {

  lessons: string[];

  exercise: CreateOpenExercise = new CreateOpenExercise('', '', '', '', false, false, []);

  alternativeAnswers: { value: string }[] = [];

  constructor(private exerciseService: ExericiseService,
    private router: Router) {
    this.exerciseService.getAllLessons().subscribe(data => { 
      this.lessons = data;
      this.exercise.lesson = this.lessons[0];
    },
    err => console.error(err));
  }

  ngOnInit() {
  }

  submit() {
    if (!this.isUserInputValid) {
      alert('Попълнете полетата правилно!');
      return;
    }
    this.exercise.alternativeAnswers = this.alternativeAnswers.map(a => a.value);
    console.log(this.exercise);
    this.exerciseService.createOpenExercise(this.exercise).subscribe(data => this.router.navigate(['/администрация']), err => console.error(err));
  }

  isUserInputValid() : boolean {
    return this.exercise.isDescriptionValid() &&
    this.exercise.isContentValid() &&
    this.exercise.isLessonValid() &&
    this.exercise.isCorrectAnswerValid() &&
    this.exercise.areAlternativeAnswersValid();
  }

  add() {
    this.alternativeAnswers.push({ value: '' });
  }

  remove(index: number) {
    this.alternativeAnswers.splice(index, 1);
  }
}
