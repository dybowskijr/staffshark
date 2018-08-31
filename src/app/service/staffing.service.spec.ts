import { TestBed, inject } from '@angular/core/testing';

import { StaffingService } from './staffing.service';

describe('StaffingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffingService]
    });
  });

  it('should be created', inject([StaffingService], (service: StaffingService) => {
    expect(service).toBeTruthy();
  }));
});
