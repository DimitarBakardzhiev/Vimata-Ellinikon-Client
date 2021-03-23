import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../breadcrumb/bread-crumb';
import { Router } from '@angular/router';
import { ExerciseType } from '../../../models/exercise-type';
import { ExericiseService } from '../../../services/exericise.service';
import { ExerciseSearchCriteria } from '../../../models/exercise-search-criteria';
import { Title } from '@angular/platform-browser';

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

  errorMessage: string;
  
  constructor(private router: Router,
    private exerciseService: ExericiseService,
    private titleService: Title) {

    this.exerciseService.getAllLessons().subscribe(data => { 
    this.lessons = data;
    this.lessons.unshift({ id: null, title: null });
    },
    err => this.errorMessage = 'Възникна непозната грешка! Моля, свържете се с администратор!');

    this.exerciseService.searchExercisesBy(this.criteria).subscribe(
      data => this.exercises = data,
      err => this.errorMessage = 'Възникна непозната грешка! Моля, свържете се с администратор!');

    this.titleService.setTitle('Vimata Ellinikon - Администрация');
  }

  ngOnInit() {
  }

  editRedirect() {
    this.router.navigate(['/администрация/упражнения/редактиране'], { queryParams: { exerciseId: 10, exerciseType: ExerciseType.Closed } });
  }

  search() {
    this.criteria.lessonId = Number(this.criteria.lessonId);
    this.exerciseService.searchExercisesBy(this.criteria).subscribe(
      data => this.exercises = data,
      err => this.errorMessage = 'Възникна непозната грешка! Моля, свържете се с администратор!');
  }

  clear() {
    this.criteria.content = '';
    this.criteria.description = '';
    this.criteria.lessonId = null;
  }

  delete(exerciseId: number) {
    if (confirm('Наистина ли искате да изтриете това упражнение?')) {

      this.exerciseService.removeExercise(exerciseId).subscribe(
        data => this.exercises = this.exercises.filter(e => e.exerciseId !== exerciseId),
        err => this.errorMessage = 'Възникна непозната грешка! Моля, свържете се с администратор!');
    }
  }
}
