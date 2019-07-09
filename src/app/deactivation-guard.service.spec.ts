import { TestBed } from '@angular/core/testing';

import { DeactivationGuardService } from './deactivation-guard.service';

describe('DeactivationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeactivationGuardService = TestBed.get(DeactivationGuardService);
    expect(service).toBeTruthy();
  });
});
