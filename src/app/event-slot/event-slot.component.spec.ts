import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSlotComponent } from './event-slot.component';

describe('EventSlotComponent', () => {
  let component: EventSlotComponent;
  let fixture: ComponentFixture<EventSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
