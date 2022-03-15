import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnalystsComponent } from './add-analysts.component';

describe('AddAnalystsComponent', () => {
  let component: AddAnalystsComponent;
  let fixture: ComponentFixture<AddAnalystsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnalystsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnalystsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
