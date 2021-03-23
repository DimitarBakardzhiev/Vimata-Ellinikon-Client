import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accusative',
  templateUrl: './accusative.component.html',
  styleUrls: ['./accusative.component.scss']
})
export class AccusativeComponent implements OnInit {

  title: string = 'Винителен падеж';
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, '/винителен-падеж')];

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
