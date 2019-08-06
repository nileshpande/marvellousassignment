import { TestBed } from '@angular/core/testing';

import { ArithmaticService } from './arithmatic.service';

describe('ArithmaticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArithmaticService = TestBed.get(ArithmaticService);
    expect(service).toBeTruthy();
  });
});
