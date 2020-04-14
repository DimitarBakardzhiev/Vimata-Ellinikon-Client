import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TopicModel } from '../../models/topic-model';
import { TopicServiceService } from '../../services/topic-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { OpenExercise } from '../../models/open-exercise';
import { ClosedExercise } from '../../models/closed-exercise';
import { DragAndDropExercise } from '../../models/drag-and-drop-exercise';
import { ClosedExerciseOption } from '../../models/closed-exercise-option';
import { BreadCrumb } from '../breadcrumb/bread-crumb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topics: TopicModel[];
  exercises: any[] = [];

  speech: any;
  recognition = new ((<any>window).SpeechRecognition || (<any>window).webkitSpeechRecognition || (<any>window).mozSpeechRecognition || (<any>window).msSpeechRecognition)();

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/')];

  constructor(private auth: AuthService, private topicService: TopicServiceService, private sanitizer: DomSanitizer) {
    // this.topicService.all().subscribe(data => {
    //   this.topics = data;
    //   this.topics.forEach(t => t.image = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + t.image))
    // });

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
    
    this.recognition.lang = 'el';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 5;

    this.recognition.onresult = (event) => {
      this.speech = event.results[0][0].transcript;
      console.log(this)
      console.log('You said: ', this.speech);
    };
  }

  ngOnInit() {}

  test() : void {
    this.auth.test().subscribe(res => console.log(res),
      err => console.log(err));
  }

  private hardcodedData() {
    this.topics = [new TopicModel('Азбука', 'data:image/png;base64,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'), 
    new TopicModel('Как се казваш', 'https://hr.cornell.edu/sites/default/files/pictures/dialog.png')];

    for (let i = 0; i < 10; i++) {
      this.topics.push(this.topics[i % 2]);
    }
  }

  private isOpenExercise(exercise: any): boolean {
    return exercise instanceof OpenExercise;
  }

  private isClosedExercise(exercise: any): boolean {
    return exercise instanceof ClosedExercise;
  }

  private isDragAndDropExercise(exercise: any): boolean {
    return exercise instanceof DragAndDropExercise;
  }

  listen() {
    this.recognition.start();
  }

  change() {
    this.speech = this.speech;
  }
}
