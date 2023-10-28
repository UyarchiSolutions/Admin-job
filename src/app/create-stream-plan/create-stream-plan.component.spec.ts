import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStreamPlanComponent } from './create-stream-plan.component';

describe('CreateStreamPlanComponent', () => {
  let component: CreateStreamPlanComponent;
  let fixture: ComponentFixture<CreateStreamPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStreamPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStreamPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
