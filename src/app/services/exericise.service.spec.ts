import { TestBed } from '@angular/core/testing';

import { ExericiseService } from './exericise.service';

describe('ExericiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExericiseService = TestBed.get(ExericiseService);
    expect(service).toBeTruthy();
  });
});
