import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-reading-part2',
  templateUrl: './reading-part2.component.html',
  styleUrls: ['./reading-part2.component.scss']
})
export class ReadingPart2Component implements OnInit {

  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Четене 2', '/четене-2')];
  
  constructor() { }

  ngOnInit() {
  }

}
