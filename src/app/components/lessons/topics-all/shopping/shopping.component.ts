import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  title: string = 'На пазар';
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, '/на-пазар')];

  vocabulary: { word: string, translation: string }[] = [];
  
  constructor(private titleService: Title) {
    this.vocabulary = [
      { word: 'θέλω', translation: 'искам' },
      { word: 'παρακαλώ', translation: 'моля' },
      { word: 'ευχαριστώ', translation: 'благодаря' },
      { word: 'νερό', translation: 'вода' },
      { word: 'παγωτό', translation: 'сладолед' },
      { word: 'περίπτερο', translation: 'павильон' },
      { word: 'πόσο κάνει;', translation: 'колко струва' },
      { word: 'ορίστε', translation: 'заповядайте' },
      { word: 'κάτι', translation: 'нещо' },
      { word: 'άλλο', translation: 'друго' },
    ];

    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
