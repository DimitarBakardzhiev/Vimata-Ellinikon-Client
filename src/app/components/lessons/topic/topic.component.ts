import { Component, OnInit, Input } from '@angular/core';
import { TopicModel } from '../../../models/topic-model';

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() topic: TopicModel;

  constructor() { }

  ngOnInit() {
  }

}
