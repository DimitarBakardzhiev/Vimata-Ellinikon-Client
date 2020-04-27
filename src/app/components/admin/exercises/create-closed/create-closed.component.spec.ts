import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClosedComponent } from './create-closed.component';

describe('CreateClosedComponent', () => {
  let component: CreateClosedComponent;
  let fixture: ComponentFixture<CreateClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#isUserInputValid() should return false is everything is invalid', () => {
    expect(true).toBeFalsy();
  });
});
