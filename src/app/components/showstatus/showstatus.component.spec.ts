import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstatusComponent } from './showstatus.component';

describe('ShowstatusComponent', () => {
  let component: ShowstatusComponent;
  let fixture: ComponentFixture<ShowstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
