import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-negation',
  templateUrl: './negation.component.html',
  styleUrls: ['./negation.component.scss']
})
export class NegationComponent implements OnInit {

  title: string = 'Отрицание';
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, '/отрицание')];

  vocabulary: { expression: string, translation: string }[] = [];
  
  constructor(private titleService: Title) {
    this.vocabulary = [
      { expression: 'ναι', translation: 'да' },
      { expression: 'όχι', translation: 'не' },
      { expression: 'ξέρω', translation: 'знам, познавам' },
      { expression: 'καταλαβαίνω', translation: 'разбирам' }
    ];

    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
