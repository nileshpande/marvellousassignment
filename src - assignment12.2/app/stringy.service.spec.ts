import { TestBed } from '@angular/core/testing';

import { StringyService } from './stringy.service';

describe('StringyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StringyService = TestBed.get(StringyService);
    expect(service).toBeTruthy();
  });
});
