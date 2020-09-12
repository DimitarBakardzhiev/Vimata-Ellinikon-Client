import { Component, OnInit, Input } from '@angular/core';
import { ExerciseType } from '../../../../models/exercise-type';
import { ActivatedRoute, Router } from '@angular/router';
import { ExericiseService } from '../../../../services/exericise.service';
import { CreateClosedExercise } from '../../../../models/create-exercise/create-closed-exercise';
import { CreateOpenExercise } from '../../../../models/create-exercise/create-open-exercise';
import { CreateDragAndDropExercise } from '../../../../models/create-exercise/create-drag-and-drop-exercise';
import { CreateSpeakingExercise } from '../../../../models/create-exercise/create-speaking-exercise';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.scss']
})
export class EditExerciseComponent implements OnInit {
  
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb('Администрация', '/администрация')];

  @Input() exerciseId: number;
  @Input() exerciseType: ExerciseType;

  exercise: any;

  constructor(private route: ActivatedRoute,
    private exerciseService: ExericiseService) {

    this.route.queryParams.subscribe(params => {
      this.exerciseId = params.exerciseId;
      this.exerciseType = params.exerciseType;

      this.exerciseService.getExerciseForEdition(this.exerciseId).subscribe(data => {

        switch (this.exerciseType.toLocaleString()) {
          case ExerciseType.Closed.toLocaleString():
              this.exercise = <CreateClosedExercise>data;
            break;
          case ExerciseType.Open.toLocaleString():
              this.exercise = <CreateOpenExercise>data;
            break;
          case ExerciseType.DragAndDrop.toLocaleString():
              this.exercise = <CreateDragAndDropExercise>data;
            break;
          case ExerciseType.Speaking.toLocaleString():
              this.exercise = <CreateSpeakingExercise>data;
            break;
        
          default:
              console.error('Invalid exercise type');
            break;
        }
      });
    });
  }

  ngOnInit() {
  }

  afterviewinit() {
    this.breadcrumbs.push(new BreadCrumb('Редактиране', `/администрация/упражнения/редактиране?exerciseId=${this.exerciseId}&exerciseType=${this.exerciseType}`));
  }
}
