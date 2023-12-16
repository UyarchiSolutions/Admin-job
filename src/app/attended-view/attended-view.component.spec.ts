import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendedViewComponent } from './attended-view.component';

describe('AttendedViewComponent', () => {
  let component: AttendedViewComponent;
  let fixture: ComponentFixture<AttendedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
