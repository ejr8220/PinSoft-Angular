import { TestBed } from '@angular/core/testing';

import { PaisServiceService } from './pais-service.service';

describe('PaisServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaisServiceService = TestBed.get(PaisServiceService);
    expect(service).toBeTruthy();
  });
});
