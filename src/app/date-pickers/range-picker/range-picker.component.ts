import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DateRange } from '../model/date-range.model';
import { FloatingRange } from '../model/floating-range.model';
import { RangeType } from '../model/range.interface';
import { UtilsService } from '../../shared/utils.service';

@Component({
  selector: 'app-range-picker',
  templateUrl: './range-picker.component.html',
  styleUrls: ['./range-picker.component.scss']
})
export class RangePickerComponent implements OnInit, OnDestroy {

  @Input() initialValue: FloatingRange | DateRange; // Todo: check the type and display range-picker component accordingly
  @Output() rangeChanged: EventEmitter<FloatingRange | DateRange>; // Todo convert and emit values

  currentValue: FloatingRange | DateRange;
  isFixedRangePicker: boolean;
  form: FormGroup;
  valueChangesSubcription: Subscription;

  constructor(private formBuilder: FormBuilder, private utilsService: UtilsService) {
    this.rangeChanged = new EventEmitter<FloatingRange | DateRange>();
  }

  ngOnInit() {
    this.isFixedRangePicker = true;
    this.currentValue = this.initialValue;
    this.form = this.createForm();
    this.valueChangesSubcription = this.subscribeToPickerTypeChanges();
  }

  ngOnDestroy() {
    this.valueChangesSubcription.unsubscribe();
  }

  private emitValueChange(date: FloatingRange | DateRange) {
    this.rangeChanged.emit(date);
  }

  updateCurrentValueAndEmitChange(newDate: FloatingRange | DateRange) {
    this.currentValue = newDate;
    this.emitValueChange(newDate);
  }

  convertToDateRange(date: FloatingRange | DateRange): DateRange | null {
    if (date) {
      if (this.utilsService.isFloatingRange(date)) {
        return this.utilsService.fromFloatingRangeToDateRange(date);
      }
      return date;
    }
    return null;
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      pickerType: ['fixed']
    });
  }

  private subscribeToPickerTypeChanges(): Subscription {
    return this.form.valueChanges.subscribe(
      ({ pickerType }: { pickerType: RangeType }) => {
        this.isFixedRangePicker = (pickerType === 'fixed');
      }
    );
  }

}
