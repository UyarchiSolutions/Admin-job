import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbEventCandidatesComponent } from './climb-event-candidates.component';

describe('ClimbEventCandidatesComponent', () => {
  let component: ClimbEventCandidatesComponent;
  let fixture: ComponentFixture<ClimbEventCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbEventCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimbEventCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
