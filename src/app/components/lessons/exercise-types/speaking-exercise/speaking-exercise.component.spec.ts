import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingExerciseComponent } from './speaking-exercise.component';

describe('SpeakingExerciseComponent', () => {
  let component: SpeakingExerciseComponent;
  let fixture: ComponentFixture<SpeakingExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakingExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});