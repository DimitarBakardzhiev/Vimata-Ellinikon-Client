import { Component, OnInit } from '@angular/core';

declare var responsiveVoice: any;
@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  topic: { title: string, content: string } = { title: 'Το ελληνικό αλφάβητο', content: null }

  constructor() {
    console.log(responsiveVoice);
  }

  ngOnInit() {
  }
}