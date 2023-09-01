import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrInputComponent } from './mr-input.component';

describe('MrInputComponent', () => {
  let component: MrInputComponent;
  let fixture: ComponentFixture<MrInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MrInputComponent]
    });
    fixture = TestBed.createComponent(MrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
