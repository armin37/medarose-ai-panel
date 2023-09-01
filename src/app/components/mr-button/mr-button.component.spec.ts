import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrButtonComponent } from './mr-button.component';

describe('MrButtonComponent', () => {
  let component: MrButtonComponent;
  let fixture: ComponentFixture<MrButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MrButtonComponent]
    });
    fixture = TestBed.createComponent(MrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
