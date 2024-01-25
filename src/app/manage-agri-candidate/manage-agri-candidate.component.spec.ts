import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAgriCandidateComponent } from './manage-agri-candidate.component';

describe('ManageAgriCandidateComponent', () => {
  let component: ManageAgriCandidateComponent;
  let fixture: ComponentFixture<ManageAgriCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAgriCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAgriCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
