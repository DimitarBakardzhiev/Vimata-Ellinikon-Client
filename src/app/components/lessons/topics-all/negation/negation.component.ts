import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-negation',
  templateUrl: './negation.component.html',
  styleUrls: ['./negation.component.scss']
})
export class NegationComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Отрицание', '/отрицание')];

  vocabulary: { expression: string, translation: string }[] = [];
  
  constructor() {
    this.vocabulary = [
      { expression: 'ναι', translation: 'да' },
      { expression: 'όχι', translation: 'не' },
      { expression: 'ξέρω', translation: 'знам, познавам' },
      { expression: 'καταλαβαίνω', translation: 'разбирам' }
    ];
  }

  ngOnInit() {
  }

}
