import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpeakingComponent } from './create-speaking.component';

describe('CreateSpeakingComponent', () => {
  let component: CreateSpeakingComponent;
  let fixture: ComponentFixture<CreateSpeakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpeakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpeakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
