import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesButtonComponent } from './exercises-button.component';

describe('ExercisesButtonComponent', () => {
  let component: ExercisesButtonComponent;
  let fixture: ComponentFixture<ExercisesButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
