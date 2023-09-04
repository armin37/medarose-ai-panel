import { TestBed } from '@angular/core/testing';

import { InsuranceEmployeeInfoService } from './insurance-employee-info.service';

describe('InsuranceEmployeeInfoService', () => {
  let service: InsuranceEmployeeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceEmployeeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
