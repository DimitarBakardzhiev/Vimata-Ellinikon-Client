import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjectivesComponent } from './adjectives.component';

describe('AdjectivesComponent', () => {
  let component: AdjectivesComponent;
  let fixture: ComponentFixture<AdjectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
