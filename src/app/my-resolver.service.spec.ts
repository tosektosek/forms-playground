import { TestBed } from '@angular/core/testing';

import { MyResolverService } from './my-resolver.service';

describe('MyResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyResolverService = TestBed.get(MyResolverService);
    expect(service).toBeTruthy();
  });
});
