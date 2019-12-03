import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateRange } from '../model/date-range.model';
import { FloatingRange } from '../model/floating-range.model';

@Component({
  selector: 'app-range-picker',
  templateUrl: './range-picker.component.html',
  styleUrls: ['./range-picker.component.scss']
})
export class RangePickerComponent implements OnInit {

  @Input() initialValue: FloatingRange | DateRange;
  @Output() rangeChanged: EventEmitter<FloatingRange | DateRange>;

  value: Range;

  dateValue: DateRange = new DateRange({
    from: new Date(2019, 10, 5),
    to: new Date(2019, 11, 3)
  });

  constructor() {
    this.rangeChanged = new EventEmitter<FloatingRange | DateRange>();
  }

  ngOnInit() {
  }

  updateDisplayedValue(newDate: Range) {
    this.value = newDate;
  }

}
