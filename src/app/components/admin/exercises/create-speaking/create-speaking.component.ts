import { Component, OnInit } from '@angular/core';
import { ExericiseService } from '../../../../services/exericise.service';
import { CreateSpeakingExercise } from '../../../../models/create-exercise/create-speaking-exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-speaking',
  templateUrl: './create-speaking.component.html',
  styleUrls: ['./create-speaking.component.scss']
})
export class CreateSpeakingComponent implements OnInit {

  lessons: string[];
  exercise: CreateSpeakingExercise = new CreateSpeakingExercise('', '', '', '', false);

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
    if (!this.isUserInputValid()) {
      alert('Попълнете полетата правилно!');
      return;
    }

    console.log(this.exercise);
    this.exerciseService.createSpeakingExercise(this.exercise).subscribe(data => this.router.navigate(['/администрация']), err => console.error(err));
  }

  isUserInputValid() : boolean {
    return this.exercise.isDescriptionValid() &&
    this.exercise.isContentValid() &&
    this.exercise.isLessonValid() &&
    this.exercise.isCorrectAnswerValid();
  }
}
