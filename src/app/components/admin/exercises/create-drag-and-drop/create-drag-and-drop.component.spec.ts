import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDragAndDropComponent } from './create-drag-and-drop.component';

describe('CreateDragAndDropComponent', () => {
  let component: CreateDragAndDropComponent;
  let fixture: ComponentFixture<CreateDragAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDragAndDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
