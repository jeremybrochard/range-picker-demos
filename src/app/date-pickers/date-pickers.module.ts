import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { DeltaNumberDirective } from './delta-number.directive';
import { FloatingRangePickerComponent } from './floating-range-picker/floating-range-picker.component';
import { RangePickerComponent } from './range-picker/range-picker.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RangePickerComponent,
    DateRangePickerComponent,
    FloatingRangePickerComponent,
    DeltaNumberDirective
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BsDatepickerModule,
    ButtonsModule,
    ReactiveFormsModule
  ],
  exports: [
    RangePickerComponent,
    DateRangePickerComponent,
    FloatingRangePickerComponent,
    DeltaNumberDirective
  ]
})
export class DatePickersModule { }
