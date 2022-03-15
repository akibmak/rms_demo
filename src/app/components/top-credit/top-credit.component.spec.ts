import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCreditComponent } from './top-credit.component';

describe('TopCreditComponent', () => {
  let component: TopCreditComponent;
  let fixture: ComponentFixture<TopCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
