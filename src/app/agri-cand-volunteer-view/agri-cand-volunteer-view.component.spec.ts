import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriCandVolunteerViewComponent } from './agri-cand-volunteer-view.component';

describe('AgriCandVolunteerViewComponent', () => {
  let component: AgriCandVolunteerViewComponent;
  let fixture: ComponentFixture<AgriCandVolunteerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriCandVolunteerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriCandVolunteerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
