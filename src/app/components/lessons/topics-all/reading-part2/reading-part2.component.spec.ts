import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingPart2Component } from './reading-part2.component';

describe('ReadingPart2Component', () => {
  let component: ReadingPart2Component;
  let fixture: ComponentFixture<ReadingPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
