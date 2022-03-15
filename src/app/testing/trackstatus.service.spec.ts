import { TestBed } from '@angular/core/testing';

import { TrackstatusService } from '../services/trackstatus.service';

describe('TrackstatusService', () => {
  let service: TrackstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
