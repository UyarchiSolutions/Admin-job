import { TestBed } from '@angular/core/testing';

import { ManageFaqServiceService } from './manage-faq-service.service';

describe('ManageFaqServiceService', () => {
  let service: ManageFaqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageFaqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
