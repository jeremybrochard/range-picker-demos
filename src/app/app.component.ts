import { Component } from '@angular/core';
import { DateRange } from './model/date-range.model';
import { FloatingRange } from './model/floating-range.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: FloatingRange | DateRange;
  title = 'range-picker-demos';

  initialDateValue: DateRange = new DateRange({
    from: new Date(2019, 10, 5),
    to: new Date(2019, 11, 3)
  });

  initialFloatingValue: FloatingRange = new FloatingRange({
    from: -10,
    to: 20,
  });

  updateDisplayedValue(newDate: FloatingRange | DateRange) {
    this.value = newDate;
  }
}
