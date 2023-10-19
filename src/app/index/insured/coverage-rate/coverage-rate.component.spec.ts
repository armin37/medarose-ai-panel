import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageRateComponent } from './coverage-rate.component';

describe('CoverageRateComponent', () => {
  let component: CoverageRateComponent;
  let fixture: ComponentFixture<CoverageRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoverageRateComponent]
    });
    fixture = TestBed.createComponent(CoverageRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
