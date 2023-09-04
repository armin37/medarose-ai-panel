import { TestBed } from '@angular/core/testing';

import { InsuranceEmployeeService } from './insurance-employee.service';

describe('InsuranceEmployeeService', () => {
  let service: InsuranceEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
