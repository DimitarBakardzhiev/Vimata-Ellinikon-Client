import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Администрация', '/администрация')];
  
  constructor() { }

  ngOnInit() {
  }

}
