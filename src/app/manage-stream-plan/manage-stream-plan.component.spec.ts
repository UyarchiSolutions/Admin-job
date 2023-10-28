import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStreamPlanComponent } from './manage-stream-plan.component';

describe('ManageStreamPlanComponent', () => {
  let component: ManageStreamPlanComponent;
  let fixture: ComponentFixture<ManageStreamPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageStreamPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageStreamPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
