import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlanUsageComponent } from './manage-plan-usage.component';

describe('ManagePlanUsageComponent', () => {
  let component: ManagePlanUsageComponent;
  let fixture: ComponentFixture<ManagePlanUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePlanUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlanUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
