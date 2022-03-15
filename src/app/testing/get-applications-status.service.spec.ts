import { TestBed } from '@angular/core/testing';

import { GetApplicationsStatusService } from '../services/get-applications-status.service';

describe('GetApplicationsStatusService', () => {
  let service: GetApplicationsStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApplicationsStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
