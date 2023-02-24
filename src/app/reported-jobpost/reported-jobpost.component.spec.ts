import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedJobpostComponent } from './reported-jobpost.component';

describe('ReportedJobpostComponent', () => {
  let component: ReportedJobpostComponent;
  let fixture: ComponentFixture<ReportedJobpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportedJobpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportedJobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
