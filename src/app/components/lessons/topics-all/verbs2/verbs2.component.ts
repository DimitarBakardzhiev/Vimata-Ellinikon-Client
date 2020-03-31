import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-verbs2',
  templateUrl: './verbs2.component.html',
  styleUrls: ['./verbs2.component.scss']
})
export class Verbs2Component implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Второ спрежение', '/спрежение-2')];
  
  constructor() { }

  ngOnInit() {
  }

}
