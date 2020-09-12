import { Component, OnInit, Input } from '@angular/core';
import { ExericiseService } from '../../../../services/exericise.service';
import { CreateSpeakingExercise } from '../../../../models/create-exercise/create-speaking-exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-speaking',
  templateUrl: './create-speaking.component.html',
  styleUrls: ['./create-speaking.component.scss']
})
export class CreateSpeakingComponent implements OnInit {

  lessons: { id: number, title: string}[];
  exercise: CreateSpeakingExercise = new CreateSpeakingExercise('', '', '', 0, false);

  @Input() editId: number;
  @Input() editModel: any;

  constructor(private exerciseService: ExericiseService,
    private router: Router) {
    this.exerciseService.getAllLessons().subscribe(data => { 
      this.lessons = data;
    },
    err => console.error(err));
  }

  ngOnInit() {
    if (this.isEditMode()) {
      this.exercise = new CreateSpeakingExercise(
        this.editModel.description,
        this.editModel.content,
        this.editModel.correctAnswer,
        this.editModel.lessonId,
        this.editModel.isHearingExercise);
    }
  }

  submit() {
    if (!this.isUserInputValid()) {
      alert('Попълнете полетата правилно!');
      return;
    }

    this.exercise.lessonId = Number(this.exercise.lessonId);
    this.exerciseService.createSpeakingExercise(this.exercise).subscribe(data => this.router.navigate(['/администрация']), err => console.error(err));
  }

  edit() {
    if (!this.isUserInputValid()) {
      alert('Попълнете полетата правилно!');
      return;
    }

    this.exercise.lessonId = Number(this.exercise.lessonId);
    this.exerciseService.editSpeakingExercise(this.editId, this.exercise).subscribe(data => this.router.navigate(['/администрация']), err => console.error(err));
  }

  isUserInputValid() : boolean {
    return this.exercise.isDescriptionValid() &&
    this.exercise.isContentValid() &&
    this.exercise.isLessonValid() &&
    this.exercise.isCorrectAnswerValid();
  }

  private isEditMode() : boolean {
    return this.editId != undefined && this.editModel != undefined;
  }
}
