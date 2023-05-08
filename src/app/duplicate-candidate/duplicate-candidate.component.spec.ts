import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateCandidateComponent } from './duplicate-candidate.component';

describe('DuplicateCandidateComponent', () => {
  let component: DuplicateCandidateComponent;
  let fixture: ComponentFixture<DuplicateCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
