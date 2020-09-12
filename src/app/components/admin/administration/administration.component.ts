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

  lessons: { id: number, title: string }[];
  criteria: ExerciseSearchCriteria = new ExerciseSearchCriteria();
  exercises: { exerciseId: number, description: string, content: string, lesson: string, type: ExerciseType }[];
  
  constructor(private router: Router,
    private exerciseService: ExericiseService) {

    this.exerciseService.getAllLessons().subscribe(data => { 
    this.lessons = data;
    this.lessons.unshift({ id: null, title: null });
    },
    err => console.error(err));

    this.exerciseService.searchExercisesBy(this.criteria).subscribe(data => this.exercises = data, err => console.error(err));
  }

  ngOnInit() {
  }

  check() {
    console.log(this.criteria);
  }

  editRedirect() {
    this.router.navigate(['/администрация/упражнения/редактиране'], { queryParams: { exerciseId: 10, exerciseType: ExerciseType.Closed } });
  }

  search() {
    this.criteria.lessonId = Number(this.criteria.lessonId);
    this.exerciseService.searchExercisesBy(this.criteria).subscribe(data => this.exercises = data, err => console.error(err));
  }

  clear() {
    this.criteria.content = '';
    this.criteria.description = '';
    this.criteria.lessonId = null;
  }

  delete(exerciseId: number) {
    if (confirm('Наистина ли искате да изтриете това упражнение?')) {
      console.log('confirmed');

      this.exerciseService.removeExercise(exerciseId).subscribe(
        data => this.exercises = this.exercises.filter(e => e.exerciseId !== exerciseId),
        err => console.error(err));
    }
  }
}
