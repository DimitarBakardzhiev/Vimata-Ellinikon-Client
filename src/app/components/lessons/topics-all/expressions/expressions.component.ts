import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';
import { LessonTitles } from 'src/app/infrastructure/lesson-titles';
import { LessonTitleLessonRouteMapping } from 'src/app/infrastructure/lesson-title-lesson-route-mapping';

@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.component.html',
  styleUrls: ['./expressions.component.scss']
})
export class ExpressionsComponent implements OnInit {

  title: string = LessonTitles.Expressions;
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, `/${LessonTitleLessonRouteMapping.Routes.get(this.title)}`)];
  vocabulary: { expression: string, translation: string }[] = [];

  constructor(private titleService: Title) {
    this.vocabulary = [
      { expression: 'Κάνω', translation: 'Правя' },
      { expression: 'Μένω', translation: 'Живея (пребивавам)' },
      { expression: 'Τι κάνεις;', translation: 'Как си?' },
      { expression: 'Πώς είσαι;', translation: 'Как си?' },
      { expression: 'Πώς περνάς;', translation: 'Как я караш?' },
      { expression: 'Μια χαρά', translation: 'Идеално' },
      { expression: 'Καλά', translation: 'Добре' },
      { expression: 'Έτσι κι έτσι', translation: 'Горе-долу' },
      { expression: 'Χάλια', translation: 'Ужасно' },
      { expression: 'Πού μένεις;', translation: 'Къде живееш?' },
      { expression: 'Μένω στην Αθήνα', translation: 'Живея в Атина' },
    ];

    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
