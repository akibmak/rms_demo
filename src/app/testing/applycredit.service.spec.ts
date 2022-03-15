import { TestBed } from '@angular/core/testing';

import { ApplycreditService } from '../services/applycredit.service';

describe('ApplycreditService', () => {
  let service: ApplycreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplycreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
