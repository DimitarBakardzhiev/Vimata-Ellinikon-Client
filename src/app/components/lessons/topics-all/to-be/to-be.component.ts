import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';
import { LessonTitles } from 'src/app/infrastructure/lesson-titles';
import { LessonTitleLessonRouteMapping } from 'src/app/infrastructure/lesson-title-lesson-route-mapping';

@Component({
  selector: 'app-to-be',
  templateUrl: './to-be.component.html',
  styleUrls: ['./to-be.component.scss']
})
export class ToBeComponent implements OnInit {

  title: string = LessonTitles.VerbToBe;
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, `/${LessonTitleLessonRouteMapping.Routes.get(this.title)}`)];
  forms: { pronoun: string, verbForm: string, example: string, translation: string }[] = [];

  constructor(private titleService: Title) {
    this.forms = [
      { pronoun: 'Εγώ', verbForm: 'είμαι', example: 'ο Στυλιανός', translation: 'Аз съм Стилианос' },
      { pronoun: 'Εσύ', verbForm: 'είσαι', example: 'η Ελένη', translation: 'Ти си Елени' },
      { pronoun: 'Αυτός', verbForm: 'είναι', example: 'ο Στέφανος', translation: 'Той е Стефанос' },
      { pronoun: 'Αυτή', verbForm: 'είναι', example: 'η Μαρία', translation: 'Тя е Мария' },
      { pronoun: 'Αυτό', verbForm: 'είναι', example: 'το παιδί', translation: 'То е детето' },
      { pronoun: 'Εμείς', verbForm: 'είμαστε', example: 'ο Κώστας και η Ζωή', translation: 'Ние сме Костас и Зои' },
      { pronoun: 'Εσείς', verbForm: 'είσαστε / είστε', example: 'η Σοφία και ο Γιάννης', translation: 'Вие сте София и Янис' },
      { pronoun: 'Αυτοί', verbForm: 'είναι', example: 'ο Μάκης και η Στέλλα', translation: 'Те са Макис и Стела' },
      { pronoun: 'Αυτές', verbForm: 'είναι', example: 'η Λιάνα και η Ελένη', translation: 'Те са Лиана и Елени' },
      { pronoun: 'Αυτά', verbForm: 'είναι', example: 'τα παιδιά', translation: 'Те са децата' },
    ];

    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
