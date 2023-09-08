import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndCodeStepComponent } from './data-and-code-step.component';

describe('DataAndCodeStepComponent', () => {
  let component: DataAndCodeStepComponent;
  let fixture: ComponentFixture<DataAndCodeStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DataAndCodeStepComponent]
    });
    fixture = TestBed.createComponent(DataAndCodeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
