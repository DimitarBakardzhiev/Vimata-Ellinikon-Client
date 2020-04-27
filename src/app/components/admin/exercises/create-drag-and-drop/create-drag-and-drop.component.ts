import { Component, OnInit } from '@angular/core';
import { ExericiseService } from '../../../../services/exericise.service';
import { CreateDragAndDropExercise } from '../../../../models/create-exercise/create-drag-and-drop-exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-drag-and-drop',
  templateUrl: './create-drag-and-drop.component.html',
  styleUrls: ['./create-drag-and-drop.component.scss']
})
export class CreateDragAndDropComponent implements OnInit {

  lessons: string[];
  exercise: CreateDragAndDropExercise = new CreateDragAndDropExercise('', '', '', [], '', false, false, false);

  options: { value: string }[] = [{ value: '' }, { value: '' }];

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
    console.log(this.exercise);
    this.exerciseService.createDragAndDropExercise(this.exercise).subscribe(data => this.router.navigate(['/администрация']), err => console.error(err));
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
}
