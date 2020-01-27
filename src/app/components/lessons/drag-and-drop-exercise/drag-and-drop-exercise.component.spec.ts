import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropExerciseComponent } from './drag-and-drop-exercise.component';

describe('DragAndDropExerciseComponent', () => {
  let component: DragAndDropExerciseComponent;
  let fixture: ComponentFixture<DragAndDropExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
