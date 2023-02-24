import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobpostAppliesComponent } from './manage-jobpost-applies.component';

describe('ManageJobpostAppliesComponent', () => {
  let component: ManageJobpostAppliesComponent;
  let fixture: ComponentFixture<ManageJobpostAppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageJobpostAppliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobpostAppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
