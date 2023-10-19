import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrWidgetComponent } from './mr-widget.component';

describe('MrWidgetComponent', () => {
  let component: MrWidgetComponent;
  let fixture: ComponentFixture<MrWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MrWidgetComponent]
    });
    fixture = TestBed.createComponent(MrWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
