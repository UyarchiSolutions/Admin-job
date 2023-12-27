import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriCandVolunteerComponent } from './agri-cand-volunteer.component';

describe('AgriCandVolunteerComponent', () => {
  let component: AgriCandVolunteerComponent;
  let fixture: ComponentFixture<AgriCandVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriCandVolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriCandVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
