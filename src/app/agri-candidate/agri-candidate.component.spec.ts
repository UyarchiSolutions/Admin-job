import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriCandidateComponent } from './agri-candidate.component';

describe('AgriCandidateComponent', () => {
  let component: AgriCandidateComponent;
  let fixture: ComponentFixture<AgriCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
