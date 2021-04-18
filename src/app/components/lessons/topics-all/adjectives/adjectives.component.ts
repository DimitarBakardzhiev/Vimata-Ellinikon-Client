import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';
import { LessonTitles } from 'src/app/infrastructure/lesson-titles';
import { LessonTitleLessonRouteMapping } from 'src/app/infrastructure/lesson-title-lesson-route-mapping';

@Component({
  selector: 'app-adjectives',
  templateUrl: './adjectives.component.html',
  styleUrls: ['./adjectives.component.scss']
})
export class AdjectivesComponent implements OnInit {

  title: string = LessonTitles.Adjectives;
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, `/${LessonTitleLessonRouteMapping.Routes.get(this.title)}`)];

  vocabulary: { word: string, translation: string }[] = [];
  
  constructor(private titleService: Title) {
    this.vocabulary = [
      { word: 'καλός', translation: 'добър' },
      { word: 'κακός', translation: 'лош' },
      { word: 'ακριβός', translation: 'скъп' },
      { word: 'φτηνός', translation: 'евтин' },
      { word: 'νέος', translation: 'нов, млад' },
      { word: 'παλιός', translation: 'стар' },
      { word: 'ωραίος', translation: 'хубав, красив' },
      { word: 'καινούργιος', translation: 'нов (за предмет)' },
    ];

    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
