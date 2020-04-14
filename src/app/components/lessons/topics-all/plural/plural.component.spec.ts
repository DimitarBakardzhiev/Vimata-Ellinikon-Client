import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluralComponent } from './plural.component';

describe('PluralComponent', () => {
  let component: PluralComponent;
  let fixture: ComponentFixture<PluralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
