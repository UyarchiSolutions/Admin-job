import { TestBed } from '@angular/core/testing';

import { ManageEnquiryService } from './manage-enquiry.service';

describe('ManageEnquiryService', () => {
  let service: ManageEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
