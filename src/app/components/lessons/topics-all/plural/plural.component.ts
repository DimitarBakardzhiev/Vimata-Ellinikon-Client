import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';
import { LessonTitles } from 'src/app/infrastructure/lesson-titles';
import { LessonTitleLessonRouteMapping } from 'src/app/infrastructure/lesson-title-lesson-route-mapping';

@Component({
  selector: 'app-plural',
  templateUrl: './plural.component.html',
  styleUrls: ['./plural.component.scss']
})
export class PluralComponent implements OnInit {

  title: string = LessonTitles.Plural;
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, `/${LessonTitleLessonRouteMapping.Routes.get(this.title)}`)];

  vocabulary: { word: string, translation: string }[] = [];

  constructor(private titleService: Title) {
    this.vocabulary = [
      { word: 'χυμός', translation: 'сок' },
      { word: 'αναπτήρας', translation: 'запалка' },
      { word: 'υπολογιστής', translation: 'компютър' },
      { word: 'μπύρα', translation: 'бира' },
      { word: 'σκηνή', translation: 'сцена, палатка' },
      { word: 'ψωμί', translation: 'хляб' },
    ];

    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
