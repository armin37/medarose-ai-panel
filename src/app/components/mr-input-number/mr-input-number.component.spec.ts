import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrInputNumberComponent } from './mr-input-number.component';

describe('MrInputNumberComponent', () => {
  let component: MrInputNumberComponent;
  let fixture: ComponentFixture<MrInputNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MrInputNumberComponent]
    });
    fixture = TestBed.createComponent(MrInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
