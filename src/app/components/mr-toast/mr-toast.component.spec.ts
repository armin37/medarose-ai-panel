import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrToastComponent } from './mr-toast.component';

describe('MrToastComponent', () => {
  let component: MrToastComponent;
  let fixture: ComponentFixture<MrToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MrToastComponent]
    });
    fixture = TestBed.createComponent(MrToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
