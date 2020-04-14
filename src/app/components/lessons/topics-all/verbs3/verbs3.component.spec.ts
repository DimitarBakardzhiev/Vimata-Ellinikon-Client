import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Verbs3Component } from './verbs3.component';

describe('Verbs3Component', () => {
  let component: Verbs3Component;
  let fixture: ComponentFixture<Verbs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Verbs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Verbs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
