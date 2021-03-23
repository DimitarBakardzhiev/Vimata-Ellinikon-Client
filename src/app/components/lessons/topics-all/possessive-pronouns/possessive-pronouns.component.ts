import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-possessive-pronouns',
  templateUrl: './possessive-pronouns.component.html',
  styleUrls: ['./possessive-pronouns.component.scss']
})
export class PossessivePronounsComponent implements OnInit {

  title: string = 'Притежание';
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, '/притежание')];
  
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
