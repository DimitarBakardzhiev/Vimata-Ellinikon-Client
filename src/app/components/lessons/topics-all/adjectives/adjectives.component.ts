import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-adjectives',
  templateUrl: './adjectives.component.html',
  styleUrls: ['./adjectives.component.scss']
})
export class AdjectivesComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Прилагателни', '/прилагателни')];

  vocabulary: { word: string, translation: string }[] = [];
  
  constructor() {
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
  }

  ngOnInit() {
  }

}
