import { Component, OnInit } from '@angular/core';
import { TopicModel } from '../../models/topic-model';
import { BreadCrumb } from '../breadcrumb/bread-crumb';
import { LessonService } from '../../services/lesson.service';
import { Title } from '@angular/platform-browser';
import { LessonTitles } from 'src/app/infrastructure/lesson-titles';
import { LessonTitleLessonRouteMapping } from 'src/app/infrastructure/lesson-title-lesson-route-mapping';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topics: TopicModel[];
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/')];
  errorMessage: string;

  constructor(private lessonService: LessonService, private titleService: Title) {

    this.topics = [
      new TopicModel(LessonTitles.Alphabet, '../../../assets/imgs/lessons/alfa_omega.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Alphabet)}`),
      new TopicModel(LessonTitles.Reading, '../../../assets/imgs/lessons/book.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Reading)}`),
      new TopicModel(LessonTitles.VerbToBe, '../../../assets/imgs/lessons/to-be.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.VerbToBe)}`),
      new TopicModel(LessonTitles.Greetings, '../../../assets/imgs/lessons/greetings.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Greetings)}`),
      new TopicModel(LessonTitles.Numbers, '../../../assets/imgs/lessons/numbers.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Numbers)}`),
      new TopicModel(LessonTitles.Expressions, '../../../assets/imgs/lessons/greetings.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Expressions)}`),
      new TopicModel(LessonTitles.Reading2, '../../../assets/imgs/lessons/book.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Reading2)}`),
      new TopicModel(LessonTitles.Verbs1, '../../../assets/imgs/lessons/conjugation1.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Verbs1)}`),
      new TopicModel(LessonTitles.GenderAndArticles, '../../../assets/imgs/lessons/genders.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.GenderAndArticles)}`),
      new TopicModel(LessonTitles.Accusative, '../../../assets/imgs/lessons/accusative.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Accusative)}`),
      new TopicModel(LessonTitles.Verbs2, '../../../assets/imgs/lessons/conjugation2.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Verbs2)}`),
      new TopicModel(LessonTitles.Negation, '../../../assets/imgs/lessons/yes-no.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Negation)}`),
      new TopicModel(LessonTitles.Genitive, '../../../assets/imgs/lessons/possessive.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Genitive)}`),
      new TopicModel(LessonTitles.Clock, '../../../assets/imgs/lessons/clocks/5.jpg', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Clock)}`),
      new TopicModel(LessonTitles.VerbExceptions, '../../../assets/imgs/lessons/leo.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.VerbExceptions)}`),
      new TopicModel(LessonTitles.Shopping, '../../../assets/imgs/lessons/shopping-icon.webp', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Shopping)}`),
      new TopicModel(LessonTitles.Plural, '../../../assets/imgs/lessons/plural.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Plural)}`),
      new TopicModel(LessonTitles.Adjectives, '../../../assets/imgs/lessons/good-bad.png', `/${LessonTitleLessonRouteMapping.Routes.get(LessonTitles.Adjectives)}`)
    ];

    this.lessonService.getMedals().subscribe(data => {
      for (var lessonMedal of data) {
        for (var topic of this.topics) {
          if (topic.title === lessonMedal.lesson) {
            topic.medal = lessonMedal.medal;
            break;
          }
        }
      }
    }, err => this.errorMessage = 'Възникна проблем при свързването със сървъра. Медалите не могат да се визуализират в момента.');

    this.titleService.setTitle('Vimata Ellinikon');
  }

  ngOnInit() {}
}
