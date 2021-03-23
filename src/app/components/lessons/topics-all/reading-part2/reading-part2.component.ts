import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reading-part2',
  templateUrl: './reading-part2.component.html',
  styleUrls: ['./reading-part2.component.scss']
})
export class ReadingPart2Component implements OnInit {

  title: string = 'Четене 2';
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, '/четене-2')];
  
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
