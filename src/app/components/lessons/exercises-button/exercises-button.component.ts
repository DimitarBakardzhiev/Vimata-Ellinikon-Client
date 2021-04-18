import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';
import { BreadCrumb } from '../../breadcrumb/bread-crumb';

@Component({
  selector: 'exercises-button',
  templateUrl: './exercises-button.component.html',
  styleUrls: ['./exercises-button.component.scss']
})
export class ExercisesButtonComponent implements OnInit {

  @Input() lesson: string;
  @Input() breadcrumbs: BreadCrumb[];

  constructor(private router: Router, private stateService: StateService) { }

  ngOnInit() {
  }

  toExercises() {
    this.stateService.data = { lesson: this.lesson, breadcrumbs: this.breadcrumbs };
    this.router.navigate(['/exercises', { lesson: this.lesson }]);
  }
}
