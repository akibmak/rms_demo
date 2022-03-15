import { TestBed } from '@angular/core/testing';

import { HttpheaderAddingInterceptor } from './httpheader-adding.interceptor';

describe('HttpheaderAddingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpheaderAddingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpheaderAddingInterceptor = TestBed.inject(HttpheaderAddingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
