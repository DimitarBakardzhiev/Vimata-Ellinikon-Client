import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {

  @Input() text: string;
  @Input() isAnswer: boolean = false;
  @Input() isTranslation: boolean = false;

  constructor() { }

  ngOnInit() { }
}
