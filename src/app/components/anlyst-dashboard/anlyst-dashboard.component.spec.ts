import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnlystDashboardComponent } from './anlyst-dashboard.component';

describe('AnlystDashboardComponent', () => {
  let component: AnlystDashboardComponent;
  let fixture: ComponentFixture<AnlystDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnlystDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnlystDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
