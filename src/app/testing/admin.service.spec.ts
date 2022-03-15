import { TestBed } from '@angular/core/testing';
import{AdminService} from '../services/admin.service'

describe('AdminserviceService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
