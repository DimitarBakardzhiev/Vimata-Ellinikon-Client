import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpenComponent } from './create-open.component';

describe('CreateOpenComponent', () => {
  let component: CreateOpenComponent;
  let fixture: ComponentFixture<CreateOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
