import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedExerciseComponent } from './closed-exercise.component';

describe('ClosedExerciseComponent', () => {
  let component: ClosedExerciseComponent;
  let fixture: ComponentFixture<ClosedExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
