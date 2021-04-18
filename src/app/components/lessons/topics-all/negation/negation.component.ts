import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';
import { LessonTitles } from 'src/app/infrastructure/lesson-titles';
import { LessonTitleLessonRouteMapping } from 'src/app/infrastructure/lesson-title-lesson-route-mapping';

@Component({
  selector: 'app-negation',
  templateUrl: './negation.component.html',
  styleUrls: ['./negation.component.scss']
})
export class NegationComponent implements OnInit {

  title: string = LessonTitles.Negation;
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, `/${LessonTitleLessonRouteMapping.Routes.get(this.title)}`)];

  vocabulary: { expression: string, translation: string }[] = [];
  
  constructor(private titleService: Title) {
    this.vocabulary = [
      { expression: 'ναι', translation: 'да' },
      { expression: 'όχι', translation: 'не' },
      { expression: 'ξέρω', translation: 'знам, познавам' },
      { expression: 'καταλαβαίνω', translation: 'разбирам' }
    ];

    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
