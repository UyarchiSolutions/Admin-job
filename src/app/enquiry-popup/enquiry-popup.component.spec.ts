import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryPopupComponent } from './enquiry-popup.component';

describe('EnquiryPopupComponent', () => {
  let component: EnquiryPopupComponent;
  let fixture: ComponentFixture<EnquiryPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
