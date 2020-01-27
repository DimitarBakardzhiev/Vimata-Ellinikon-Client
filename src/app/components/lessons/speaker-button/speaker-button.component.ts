import { Component, OnInit, Input } from '@angular/core';
import { SpeakerService } from '../../../services/speaker.service';

@Component({
  selector: 'speaker-button',
  templateUrl: './speaker-button.component.html',
  styleUrls: ['./speaker-button.component.scss']
})
export class SpeakerButtonComponent implements OnInit {

  @Input() text: string;

  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
  }

  speak() {
    this.speakerService.speak(this.text);
  }
}
