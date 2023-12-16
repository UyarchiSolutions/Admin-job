import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendedComponent } from './attended.component';

describe('AttendedComponent', () => {
  let component: AttendedComponent;
  let fixture: ComponentFixture<AttendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
