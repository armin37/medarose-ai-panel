import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrSelectComponent } from './mr-select.component';

describe('MrSelectComponent', () => {
  let component: MrSelectComponent;
  let fixture: ComponentFixture<MrSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MrSelectComponent]
    });
    fixture = TestBed.createComponent(MrSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
