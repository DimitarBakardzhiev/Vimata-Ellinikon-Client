import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'exercises-button',
  templateUrl: './exercises-button.component.html',
  styleUrls: ['./exercises-button.component.scss']
})
export class ExercisesButtonComponent implements OnInit {

  @Input() lesson: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toExercises() {
    this.router.navigate(['/exercises', { lesson: this.lesson }]);
  }
}
