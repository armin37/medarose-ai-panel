import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrKnobComponent } from './mr-knob.component';

describe('MrKnobComponent', () => {
  let component: MrKnobComponent;
  let fixture: ComponentFixture<MrKnobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MrKnobComponent]
    });
    fixture = TestBed.createComponent(MrKnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
