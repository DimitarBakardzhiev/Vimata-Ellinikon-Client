import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';
import { LessonTitles } from 'src/app/infrastructure/lesson-titles';
import { LessonTitleLessonRouteMapping } from 'src/app/infrastructure/lesson-title-lesson-route-mapping';

@Component({
  selector: 'app-genders',
  templateUrl: './genders.component.html',
  styleUrls: ['./genders.component.scss']
})
export class GendersComponent implements OnInit {

  title: string = LessonTitles.GenderAndArticles;
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, `/${LessonTitleLessonRouteMapping.Routes.get(this.title)}`)];

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
