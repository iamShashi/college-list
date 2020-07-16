import { TestBed } from '@angular/core/testing';

import { CollegeServiceService } from './college-service.service';

describe('CollegeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegeServiceService = TestBed.get(CollegeServiceService);
    expect(service).toBeTruthy();
  });
});
