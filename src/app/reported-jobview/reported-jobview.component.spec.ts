import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedJobviewComponent } from './reported-jobview.component';

describe('ReportedJobviewComponent', () => {
  let component: ReportedJobviewComponent;
  let fixture: ComponentFixture<ReportedJobviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportedJobviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedJobviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
