import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-accusative',
  templateUrl: './accusative.component.html',
  styleUrls: ['./accusative.component.scss']
})
export class AccusativeComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Винителен падеж', '/винителен-падеж')];

  constructor() { }

  ngOnInit() {
  }

}
