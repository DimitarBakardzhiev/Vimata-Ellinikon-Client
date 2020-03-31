import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossessivePronounsComponent } from './possessive-pronouns.component';

describe('PossessivePronounsComponent', () => {
  let component: PossessivePronounsComponent;
  let fixture: ComponentFixture<PossessivePronounsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossessivePronounsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessivePronounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
