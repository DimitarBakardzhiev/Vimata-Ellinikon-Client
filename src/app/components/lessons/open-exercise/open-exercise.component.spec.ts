import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenExerciseComponent } from './open-exercise.component';

describe('OpenExerciseComponent', () => {
  let component: OpenExerciseComponent;
  let fixture: ComponentFixture<OpenExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
