import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FloatingRange } from 'src/app/model/floating-range.model';
import { Range } from '../../model/range.interface';

@Component({
  selector: 'app-floating-range-picker',
  templateUrl: './floating-range-picker.component.html',
  styleUrls: ['./floating-range-picker.component.scss']
})
export class FloatingRangePickerComponent implements OnInit, OnDestroy {

  @Input() initialValue: FloatingRange; // Todo: allow floating and date ranges (for convenience)
  @Input() datePickerConfig = { dateInputFormat: 'YYYY-MM-DD' };

  @Output() valueChanges: EventEmitter<FloatingRange>;

  form: FormGroup;
  valueChangesSubcription: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.valueChanges = new EventEmitter<FloatingRange>();
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

  private createForm(initialValue?: FloatingRange): FormGroup {
    const form = this.createEmptyForm();

    if (initialValue) {
      form.patchValue(initialValue);
    }

    return form;
  }

  private emitNewValue(date: Range) {
    // Todo: do conversion from dateRange to floatingRange before
    this.valueChanges.emit(new FloatingRange(date));
  }

  private subscribeToValueChanges(formGroup: FormGroup): Subscription {
    return formGroup.valueChanges.subscribe((newValue: Range) => {
      this.emitNewValue(newValue);
    });
  }

}
