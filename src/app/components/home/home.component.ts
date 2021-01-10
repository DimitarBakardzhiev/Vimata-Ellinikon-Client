import { Component, OnInit } from '@angular/core';
import { TopicModel } from '../../models/topic-model';
import { BreadCrumb } from '../breadcrumb/bread-crumb';
import { LessonService } from '../../services/lesson.service';
import { MedalType } from '../../models/medal-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topics: TopicModel[];
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/')];
  errorMessage: string;

  constructor(private lessonService: LessonService) {

    this.topics = [
      new TopicModel('Азбука', '../../../assets/imgs/lessons/alfa_omega.png', '/азбука'),
      new TopicModel('Четене', '../../../assets/imgs/lessons/book.png', '/четене'),
      new TopicModel('Глагол съм', '../../../assets/imgs/lessons/to-be.png', '/съм'),
      new TopicModel('Поздрави', '../../../assets/imgs/lessons/greetings.png', '/поздрави'),
      new TopicModel('Числа', '../../../assets/imgs/lessons/numbers.png', '/числа'),
      new TopicModel('Изрази', '../../../assets/imgs/lessons/greetings.png', '/изрази'),
      new TopicModel('Четене 2', '../../../assets/imgs/lessons/book.png', '/четене-2'),
      new TopicModel('Първо спрежение', '../../../assets/imgs/lessons/conjugation1.png', '/спрежение-1'),
      new TopicModel('Родове и членуване', '../../../assets/imgs/lessons/genders.png', '/родове'),
      new TopicModel('Винителен падеж', '../../../assets/imgs/lessons/accusative.png', '/винителен-падеж'),
      new TopicModel('Второ спрежение', '../../../assets/imgs/lessons/conjugation2.png', '/спрежение-2'),
      new TopicModel('Отрицание', '../../../assets/imgs/lessons/yes-no.png', '/отрицание'),
      new TopicModel('Притежание', '../../../assets/imgs/lessons/possessive.png', '/притежание'),
      new TopicModel('Часовник', '../../../assets/imgs/lessons/clocks/5.jpg', '/часовник'),
      new TopicModel('Глаголи изключения', '../../../assets/imgs/lessons/leo.png', '/глаголи-изключения'),
      new TopicModel('На пазар', '../../../assets/imgs/lessons/shopping-icon.webp', '/на-пазар'),
      new TopicModel('Множествено число', '../../../assets/imgs/lessons/plural.png', '/множествено-число'),
      new TopicModel('Прилагателни', '../../../assets/imgs/lessons/good-bad.png', '/прилагателни')
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
  }

  ngOnInit() {}
}
