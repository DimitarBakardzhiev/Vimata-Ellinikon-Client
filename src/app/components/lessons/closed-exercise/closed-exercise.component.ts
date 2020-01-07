import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'closed-exercise',
  templateUrl: './closed-exercise.component.html',
  styleUrls: ['./closed-exercise.component.scss']
})
export class ClosedExerciseComponent implements OnInit {

  @Input() description: string;
  @Input() options: string[];
  @Input() answer: string;

  constructor() { }

  ngOnInit() {
  }
}
