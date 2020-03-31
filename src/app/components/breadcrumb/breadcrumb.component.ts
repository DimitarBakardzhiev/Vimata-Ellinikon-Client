import { Component, OnInit, Input } from '@angular/core';
import { BreadCrumb } from './bread-crumb';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  
  @Input() public breadcrumbs: BreadCrumb[];

  constructor() {
  }

  ngOnInit() {
  }

}
