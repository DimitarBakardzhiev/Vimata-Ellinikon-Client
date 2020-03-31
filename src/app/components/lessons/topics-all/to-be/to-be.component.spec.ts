import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeComponent } from './to-be.component';

describe('ToBeComponent', () => {
  let component: ToBeComponent;
  let fixture: ComponentFixture<ToBeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToBeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
