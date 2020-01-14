import { Component, OnInit, Input } from '@angular/core';

declare var responsiveVoice: any;
@Component({
  selector: 'speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.scss']
})
export class SpeakComponent implements OnInit {

  @Input() text: string;
  @Input() voice: string;

  constructor() {
  }

  ngOnInit() {
  }

  speak() {
    responsiveVoice.speak(this.text, `Greek ${this.voice || 'Female'}`, {
      pitch: 1,
      volume: 1,
      rate: 1
    });
  }
}
