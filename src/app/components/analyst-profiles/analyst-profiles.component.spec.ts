import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystProfilesComponent } from './analyst-profiles.component';

describe('AnalystProfilesComponent', () => {
  let component: AnalystProfilesComponent;
  let fixture: ComponentFixture<AnalystProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalystProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
