import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-to-be',
  templateUrl: './to-be.component.html',
  styleUrls: ['./to-be.component.scss']
})
export class ToBeComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Глагол съм', '/съм')];

  forms: { pronoun: string, verbForm: string, example: string, translation: string }[] = [];

  constructor() {
    this.forms = [
      { pronoun: 'Εγώ', verbForm: 'είμαι', example: 'ο Στυλιανός', translation: 'Аз съм Стилианос' },
      { pronoun: 'Εσύ', verbForm: 'είσαι', example: 'η Ελένη', translation: 'Ти си Елени' },
      { pronoun: 'Αυτός', verbForm: 'είναι', example: 'ο Στέφανος', translation: 'Той е Стефанос' },
      { pronoun: 'Αυτή', verbForm: 'είναι', example: 'η Μαρία', translation: 'Тя е Мария' },
      { pronoun: 'Αυτό', verbForm: 'είναι', example: 'το παιδί', translation: 'То е детето' },
      { pronoun: 'Εμείς', verbForm: 'είμαστε', example: 'ο Κώστας και η Ζωή', translation: 'Ние сме Костас и Зои' },
      { pronoun: 'Εσείς', verbForm: 'είσαστε / είστε', example: 'η Σοφία και ο Γιάννης', translation: 'Вие сте София и Янис' },
      { pronoun: 'Αυτοί', verbForm: 'είναι', example: 'ο Μάκης και η Στέλλα', translation: 'Те са Макис и Стела' },
      { pronoun: 'Αυτές', verbForm: 'είναι', example: 'η Λιάνα και η Ελένη', translation: 'Те са Лиана и Елени' },
      { pronoun: 'Αυτά', verbForm: 'είναι', example: 'τα παιδιά', translation: 'Те са децата' },
    ]
  }

  ngOnInit() {
  }

}