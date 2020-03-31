import { Component, OnInit, Input } from '@angular/core';
import { TopicModel } from '../../../models/topic-model';

@Component({
  selector: 'topic-box',
  templateUrl: './topic-box.component.html',
  styleUrls: ['./topic-box.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() topic: TopicModel;

  constructor() { }

  ngOnInit() {
  }

}
