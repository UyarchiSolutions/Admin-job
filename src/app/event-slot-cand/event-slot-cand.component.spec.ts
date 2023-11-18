import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSlotCandComponent } from './event-slot-cand.component';

describe('EventSlotCandComponent', () => {
  let component: EventSlotCandComponent;
  let fixture: ComponentFixture<EventSlotCandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSlotCandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSlotCandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
