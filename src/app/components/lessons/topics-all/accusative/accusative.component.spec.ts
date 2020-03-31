import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccusativeComponent } from './accusative.component';

describe('AccusativeComponent', () => {
  let component: AccusativeComponent;
  let fixture: ComponentFixture<AccusativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccusativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccusativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
