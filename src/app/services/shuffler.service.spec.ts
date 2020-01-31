import { TestBed } from '@angular/core/testing';

import { ShufflerService } from './shuffler.service';

describe('ShufflerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShufflerService = TestBed.get(ShufflerService);
    expect(service).toBeTruthy();
  });
});
