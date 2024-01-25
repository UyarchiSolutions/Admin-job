import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopBookedCandComponent } from './workshop-booked-cand.component';

describe('WorkshopBookedCandComponent', () => {
  let component: WorkshopBookedCandComponent;
  let fixture: ComponentFixture<WorkshopBookedCandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopBookedCandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopBookedCandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
