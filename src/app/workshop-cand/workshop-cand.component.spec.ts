import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopCandComponent } from './workshop-cand.component';

describe('WorkshopCandComponent', () => {
  let component: WorkshopCandComponent;
  let fixture: ComponentFixture<WorkshopCandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopCandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopCandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
