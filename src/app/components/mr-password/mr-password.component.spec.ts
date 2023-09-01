import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrPasswordComponent } from './mr-password.component';

describe('MrPasswordComponent', () => {
  let component: MrPasswordComponent;
  let fixture: ComponentFixture<MrPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MrPasswordComponent]
    });
    fixture = TestBed.createComponent(MrPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
