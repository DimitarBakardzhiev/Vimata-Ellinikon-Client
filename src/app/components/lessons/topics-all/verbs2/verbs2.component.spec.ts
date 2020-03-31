import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Verbs2Component } from './verbs2.component';

describe('Verbs2Component', () => {
  let component: Verbs2Component;
  let fixture: ComponentFixture<Verbs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Verbs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Verbs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
