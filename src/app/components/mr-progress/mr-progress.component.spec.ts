import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrProgressComponent } from './mr-progress.component';

describe('MrProgressComponent', () => {
  let component: MrProgressComponent;
  let fixture: ComponentFixture<MrProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MrProgressComponent]
    });
    fixture = TestBed.createComponent(MrProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
