import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePoliciesComponent } from './update-policies.component';

describe('UpdatePoliciesComponent', () => {
  let component: UpdatePoliciesComponent;
  let fixture: ComponentFixture<UpdatePoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
