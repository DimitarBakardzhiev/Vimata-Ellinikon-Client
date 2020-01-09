import { Component, OnInit, Input } from '@angular/core';

declare var responsiveVoice: any;
@Component({
  selector: 'speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.scss']
})
export class SpeakComponent implements OnInit {

  @Input() content: string;
  @Input() voice: string;

  constructor() {
    console.log(this.content);
  }

  ngOnInit() {
  }

  speak() {
    responsiveVoice.speak(this.content, `Greek ${this.voice || 'Female'}`, {
      pitch: 1,
      volume: 1,
      rate: 1
    });
  }
}
