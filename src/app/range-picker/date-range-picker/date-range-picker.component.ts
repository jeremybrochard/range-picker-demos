import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DateRange } from 'src/app/model/date-range.model';
import { Range } from '../../model/range.interface';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent implements OnInit, OnDestroy {

  @Input() initialValue: DateRange;
  @Input() datePickerConfig = { dateInputFormat: 'YYYY-MM-DD' };

  @Output() valueChanges: EventEmitter<DateRange>;

  form: FormGroup;
  valueChangesSubcription: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.valueChanges = new EventEmitter<DateRange>();
  }

  ngOnInit() {
    this.form = this.createForm(this.initialValue);
    this.valueChangesSubcription = this.subscribeToValueChanges(this.form);
  }

  ngOnDestroy() {
    this.valueChangesSubcription.unsubscribe();
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
    this.valueChanges.emit(new DateRange(date));
  }

  private subscribeToValueChanges(formGroup: FormGroup): Subscription {
    return formGroup.valueChanges.subscribe((newValue: Range) => {
      this.emitNewValue(newValue);
    });
  }

}
