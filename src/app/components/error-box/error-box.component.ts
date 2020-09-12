import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss']
})
export class ErrorBoxComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
