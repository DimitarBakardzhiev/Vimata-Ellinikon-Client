import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegationComponent } from './negation.component';

describe('NegationComponent', () => {
  let component: NegationComponent;
  let fixture: ComponentFixture<NegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});