import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorHeaderComponent } from './distributor-header.component';

describe('DistributorHeaderComponent', () => {
  let component: DistributorHeaderComponent;
  let fixture: ComponentFixture<DistributorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
