import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FloatingRange } from 'src/app/model/floating-range.model';
import { UtilsService } from 'src/app/shared/utils.service';
import { Range } from '../../model/range.interface';
import { DateRange } from 'src/app/model/date-range.model';

@Component({
  selector: 'app-floating-range-picker',
  templateUrl: './floating-range-picker.component.html',
  styleUrls: ['./floating-range-picker.component.scss']
})
export class FloatingRangePickerComponent implements OnInit, OnDestroy {

  @Input() initialValue: FloatingRange | DateRange;
  @Input() datePickerConfig = { dateInputFormat: 'YYYY-MM-DD' };

  @Output() valueChanges: EventEmitter<FloatingRange>;

  form: FormGroup;
  valueChangesSubcription: Subscription;

  constructor(private formBuilder: FormBuilder, private utilsService: UtilsService) {
    this.valueChanges = new EventEmitter<FloatingRange>();
  }

  ngOnInit() {
    const initialValue = this.toDateRange(this.initialValue);
    this.form = this.createForm(initialValue);

    this.valueChangesSubcription = this.subscribeToValueChanges(this.form);
  }

  ngOnDestroy() {
    this.valueChangesSubcription.unsubscribe();
  }

  private toDateRange(range: FloatingRange | DateRange): DateRange | null {
    if (range) {
      if (this.utilsService.isFloatingRange(range)) {
        return this.utilsService.fromFloatingRangeToDateRange(range);
      }
      return range;
    }
    return null;
  }

  private createEmptyForm(): FormGroup {
    return this.formBuilder.group({
      from: [''],
      to: ['']
    });
  }

  private createForm(initialValue?: DateRange): FormGroup {
    const form = this.createEmptyForm();

    if (initialValue) {
      form.patchValue(initialValue);
    }

    return form;
  }

  private emitNewValue(date: Range) {
    const floatingRange = this.utilsService.fromDateRangeToFloatingRange(new DateRange(date));
    this.valueChanges.emit(floatingRange);
  }

  private subscribeToValueChanges(formGroup: FormGroup): Subscription {
    return formGroup.valueChanges.subscribe((newValue: Range) => {
      this.emitNewValue(newValue);
    });
  }

}
