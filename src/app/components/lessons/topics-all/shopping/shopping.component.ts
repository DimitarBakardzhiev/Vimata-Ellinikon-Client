import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('На пазар', '/на-пазар')];

  vocabulary: { word: string, translation: string }[] = [];
  
  constructor() {
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
  }

  ngOnInit() {
  }

}
