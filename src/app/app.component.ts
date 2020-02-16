import { Component } from '@angular/core';
import { DateRange } from './date-pickers/model/date-range.model';
import { FloatingRange } from './date-pickers/model/floating-range.model';
import { GenericModalService } from './generic-modal/generic-modal.service';
import { RangePickerComponent } from './date-pickers/range-picker/range-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: FloatingRange | DateRange;
  title = 'components-demos';

  initialDateValue: DateRange = new DateRange({
    from: new Date(2019, 10, 5),
    to: new Date(2019, 11, 3)
  });

  initialFloatingValue: FloatingRange = new FloatingRange({
    from: -10,
    to: 20,
  });

  constructor(private modalService: GenericModalService) {

  }

  updateDisplayedValue(newDate: FloatingRange | DateRange) {
    this.value = newDate;
  }

  createModal() {
    const modalRef = this.modalService.open(
      RangePickerComponent,
      {
        class: 'modal-lg',
        initialState: {
          initialValue: this.initialDateValue
        },
        enableDraggable: true
      }
    );
    console.log(modalRef);
  }
}
