import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.component.html',
  styleUrls: ['./expressions.component.scss']
})
export class ExpressionsComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Изрази', '/изрази')];
  vocabulary: { expression: string, translation: string }[] = [];

  constructor() {
    this.vocabulary = [
      { expression: 'Κάνω', translation: 'Правя' },
      { expression: 'Μένω', translation: 'Живея (пребивавам)' },
      { expression: 'Τι κάνεις;', translation: 'Как си?' },
      { expression: 'Πώς είσαι;', translation: 'Как си?' },
      { expression: 'Πώς περνάς;', translation: 'Как я караш?' },
      { expression: 'Μια χαρά', translation: 'Идеално' },
      { expression: 'Καλά', translation: 'Добре' },
      { expression: 'Έτσι κι έτσι', translation: 'Горе-долу' },
      { expression: 'Χάλια', translation: 'Ужасно' },
      { expression: 'Πού μένεις;', translation: 'Къде живееш?' },
      { expression: 'Μένω στην Αθήνα', translation: 'Живея в Атина' },
    ];
  }

  ngOnInit() {
  }

}
