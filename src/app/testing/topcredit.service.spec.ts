import { TestBed } from '@angular/core/testing';

import { TopcreditService } from '../services/topcredit.service';

describe('TopcreditService', () => {
  let service: TopcreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopcreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
