import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {

  title: string = 'Поздрави'
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, '/поздрави')];

  vocabulary: { expression: string, translation: string }[] = [];

  constructor(private titleService: Title) {
    this.vocabulary = [
      { expression: 'Γεια σου', translation: 'Здравей'},
      { expression: 'Γεια σας', translation: 'Здравейте'},
      { expression: 'Καλημέρα', translation: 'Добро утро'},
      { expression: 'Καλησπέρα', translation: 'Добър ден'},
      { expression: 'Πώς σε λένε;', translation: 'Как се казваш?'},
      { expression: 'Με λένε...', translation: 'Казвам се...'},
      { expression: 'Από πού είσαι;', translation: 'Откъде си?'},
      { expression: 'Είμαι από την Βουλγαρία', translation: 'Аз съм от България'},
      { expression: 'Χαίρω πολύ', translation: 'Приятно ми е (да се запознаем)'}
    ];

    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
