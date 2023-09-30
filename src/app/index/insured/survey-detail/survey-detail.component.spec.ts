import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDetailComponent } from './survey-detail.component';

describe('SurveyDetailComponent', () => {
  let component: SurveyDetailComponent;
  let fixture: ComponentFixture<SurveyDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SurveyDetailComponent]
    });
    fixture = TestBed.createComponent(SurveyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
