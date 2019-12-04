import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingRangePickerComponent } from './floating-range-picker.component';

describe('FloatingRangePickerComponent', () => {
  let component: FloatingRangePickerComponent;
  let fixture: ComponentFixture<FloatingRangePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingRangePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
