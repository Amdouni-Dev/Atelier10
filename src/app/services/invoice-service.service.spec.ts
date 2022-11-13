import { TestBed } from '@angular/core/testing';

import { InvoiceServiceService } from './invoice-service.service';

describe('InvoiceServiceService', () => {
  let service: InvoiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
