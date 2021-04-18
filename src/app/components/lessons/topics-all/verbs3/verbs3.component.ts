import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';
import { LessonTitles } from 'src/app/infrastructure/lesson-titles';
import { LessonTitleLessonRouteMapping } from 'src/app/infrastructure/lesson-title-lesson-route-mapping';

@Component({
  selector: 'app-verbs3',
  templateUrl: './verbs3.component.html',
  styleUrls: ['./verbs3.component.scss']
})
export class Verbs3Component implements OnInit {
  
  title: string = LessonTitles.VerbExceptions;
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, `/${LessonTitleLessonRouteMapping.Routes.get(this.title)}`)];

  vocabulary: { word: string, translation: string }[] = [];

  constructor(private titleService: Title) {
    this.vocabulary = [
      { word: 'λέω', translation: 'казвам, наричам' },
      { word: 'πάω', translation: 'ходя, отивам' },
      { word: 'τρώω', translation: 'ям' },
      { word: 'καίω', translation: 'горя' },
      { word: 'κλαίω', translation: 'плача' },
      { word: 'φταίω', translation: 'виновен съм' },
      { word: 'ακούω', translation: 'чувам' },
    ];

    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
