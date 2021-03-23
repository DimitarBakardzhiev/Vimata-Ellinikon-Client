import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-verbs2',
  templateUrl: './verbs2.component.html',
  styleUrls: ['./verbs2.component.scss']
})
export class Verbs2Component implements OnInit {

  title: string = 'Второ спрежение';
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, '/спрежение-2')];
  
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
