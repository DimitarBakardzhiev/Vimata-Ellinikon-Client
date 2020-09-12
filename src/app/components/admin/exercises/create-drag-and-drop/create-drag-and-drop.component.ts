import { Component, OnInit, Input } from '@angular/core';
import { ExericiseService } from '../../../../services/exericise.service';
import { CreateDragAndDropExercise } from '../../../../models/create-exercise/create-drag-and-drop-exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-drag-and-drop',
  templateUrl: './create-drag-and-drop.component.html',
  styleUrls: ['./create-drag-and-drop.component.scss']
})
export class CreateDragAndDropComponent implements OnInit {

  lessons: { id: number, title: string }[];
  exercise: CreateDragAndDropExercise = new CreateDragAndDropExercise('', '', '', [], 0, false, false, false);

  options: { value: string }[] = [{ value: '' }, { value: '' }];

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
      this.exercise = new CreateDragAndDropExercise(
        this.editModel.description,
        this.editModel.content,
        this.editModel.correctAnswer,
        [],
        this.editModel.lessonId,
        this.editModel.textToSpeechContent,
        this.editModel.textToSpeechOptions,
        this.editModel.isHearingExercise
      );
      
      this.options = this.editModel.options.map(o => { return { value: o } });
    }
  }

  add() {
    this.options.push({ value: '' });
  }

  remove(index: number) {
    console.log(index);
    this.options.splice(index, 1);
  }

  submit() {
    if (!this.isUserInputValid()) {
      alert('Попълнете полетата правилно!');
      return;
    }

    this.exercise.options = this.options.map(p => p.value);
    this.exercise.lessonId = Number(this.exercise.lessonId);
    this.exerciseService.createDragAndDropExercise(this.exercise).subscribe(data => this.router.navigate(['/администрация']), err => console.error(err));
  }

  edit() {
    if (!this.isUserInputValid()) {
      alert('Попълнете полетата правилно!');
      return;
    }

    this.exercise.options = this.options.map(p => p.value);
    this.exercise.lessonId = Number(this.exercise.lessonId);
    this.exerciseService.editDragAndDropExercise(this.editId, this.exercise).subscribe(data => this.router.navigate(['/администрация']), err => console.error(err));
  }

  isUserInputValid() : boolean {
    return this.exercise.isDescriptionValid() &&
    this.exercise.isContentValid() &&
    this.exercise.isLessonValid() &&
    this.exercise.isCorrectAnswerValid() &&
    this.allOptionsAreValid();
  }

  private allOptionsAreValid() : boolean {
    if (this.options.length < 2) {
      return false;
    }

    for (const option of this.options) {
      if (option.value.length < 1) {
        return false;
      }
    }

    return true;
  }

  private isEditMode() : boolean {
    return this.editId != undefined && this.editModel != undefined;
  }
}
