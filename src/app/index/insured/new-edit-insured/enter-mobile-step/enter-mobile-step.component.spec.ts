import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterMobileStepComponent } from './enter-mobile-step.component';

describe('EnterMobileStepComponent', () => {
  let component: EnterMobileStepComponent;
  let fixture: ComponentFixture<EnterMobileStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EnterMobileStepComponent]
    });
    fixture = TestBed.createComponent(EnterMobileStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
