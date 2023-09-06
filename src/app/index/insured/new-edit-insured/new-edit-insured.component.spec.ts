import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditInsuredComponent } from './new-edit-insured.component';

describe('NewEditInsuredComponent', () => {
  let component: NewEditInsuredComponent;
  let fixture: ComponentFixture<NewEditInsuredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewEditInsuredComponent]
    });
    fixture = TestBed.createComponent(NewEditInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
