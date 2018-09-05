import { TestBed, inject } from '@angular/core/testing';

import { SubVenueService } from './sub-venue.service';

describe('SubVenueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubVenueService]
    });
  });

  it('should be created', inject([SubVenueService], (service: SubVenueService) => {
    expect(service).toBeTruthy();
  }));
});
