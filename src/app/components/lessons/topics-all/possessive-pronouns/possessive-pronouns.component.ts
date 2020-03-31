import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-possessive-pronouns',
  templateUrl: './possessive-pronouns.component.html',
  styleUrls: ['./possessive-pronouns.component.scss']
})
export class PossessivePronounsComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Притежание', '/притежание')];
  
  constructor() { }

  ngOnInit() {
  }

}
