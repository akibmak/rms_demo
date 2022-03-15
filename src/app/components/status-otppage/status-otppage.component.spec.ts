import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOtppageComponent } from './status-otppage.component';

describe('StatusOtppageComponent', () => {
  let component: StatusOtppageComponent;
  let fixture: ComponentFixture<StatusOtppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOtppageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOtppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
