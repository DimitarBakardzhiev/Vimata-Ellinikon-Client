import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-plural',
  templateUrl: './plural.component.html',
  styleUrls: ['./plural.component.scss']
})
export class PluralComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Множествено число', '/множествено-число')];

  vocabulary: { word: string, translation: string }[] = [];

  constructor() {
    this.vocabulary = [
      { word: 'χυμός', translation: 'сок' },
      { word: 'αναπτήρας', translation: 'запалка' },
      { word: 'υπολογιστής', translation: 'компютър' },
      { word: 'μπύρα', translation: 'бира' },
      { word: 'σκηνή', translation: 'сцена, палатка' },
      { word: 'ψωμί', translation: 'хляб' },
    ];
  }

  ngOnInit() {
  }

}
