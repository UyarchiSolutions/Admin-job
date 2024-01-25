import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotWorkshopComponent } from './slot-workshop.component';

describe('SlotWorkshopComponent', () => {
  let component: SlotWorkshopComponent;
  let fixture: ComponentFixture<SlotWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotWorkshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
