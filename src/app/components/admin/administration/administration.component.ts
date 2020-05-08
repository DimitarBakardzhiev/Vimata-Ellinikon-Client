import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../breadcrumb/bread-crumb';
import { Router } from '@angular/router';
import { ExerciseType } from '../../../models/exercise-type';
import { ExericiseService } from '../../../services/exericise.service';
import { ExerciseSearchCriteria } from '../../../models/exercise-search-criteria';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Администрация', '/администрация')];

  lessons: string[];
  criteria: ExerciseSearchCriteria = new ExerciseSearchCriteria();
  exercises: { exerciseId: number, description: string, content: string, lesson: string, type: ExerciseType }[];
  
  constructor(private router: Router,
    private exerciseService: ExericiseService) {

    this.exerciseService.getAllLessons().subscribe(data => { 
    this.lessons = data;
    this.lessons.unshift('');
    },
    err => console.error(err));

    this.exerciseService.searchExercisesBy(this.criteria).subscribe(data => this.exercises = data, err => console.error(err));
  }

  ngOnInit() {
  }

  editRedirect() {
    this.router.navigate(['/администрация/упражнения/редактиране'], { queryParams: { exerciseId: 10, exerciseType: ExerciseType.Closed } });
  }

  search() {
    this.exerciseService.searchExercisesBy(this.criteria).subscribe(data => this.exercises = data, err => console.error(err));
  }

  clear() {
    this.criteria.content = '';
    this.criteria.description = '';
    this.criteria.lesson = this.lessons[0];
  }

  delete(exercise: { exerciseId: number, description: string, content: string, lesson: string, type: ExerciseType }) {
    if (confirm('Наистина ли искате да изтриете това упражнение?')) {
      console.log('confirmed');

      switch (exercise.type) {
        case ExerciseType.Closed:
          this.exerciseService.removeClosedExercise(exercise.exerciseId).subscribe(
            data => this.exercises.filter(e => e.exerciseId === exercise.exerciseId && e.type === exercise.type),
            err => console.error(err));
          break;
      
        case ExerciseType.Open:
          this.exerciseService.removeOpenExercise(exercise.exerciseId).subscribe(
            data => this.exercises.filter(e => e.exerciseId === exercise.exerciseId && e.type === exercise.type),
            err => console.error(err));
          break;

        case ExerciseType.DragAndDrop:
          this.exerciseService.removeDragAndDropExercise(exercise.exerciseId).subscribe(
            data => this.exercises.filter(e => e.exerciseId === exercise.exerciseId && e.type === exercise.type),
            err => console.error(err));
          break;

        case ExerciseType.Speaking:
          this.exerciseService.removeSpeakingExercise(exercise.exerciseId).subscribe(
            data =>this.exercises.filter(e => e.exerciseId === exercise.exerciseId && e.type === exercise.type),
            err => console.error(err));
          break;

        default:
          console.log('yok');
          break;
      }
    }
  }
}
