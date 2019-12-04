import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { DateRangePickerComponent } from './range-picker/date-range-picker/date-range-picker.component';
import { FloatingRangePickerComponent } from './range-picker/floating-range-picker/floating-range-picker.component';
import { RangePickerComponent } from './range-picker/range-picker.component';
import { DeltaNumberDirective } from './shared/delta-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    RangePickerComponent,
    DateRangePickerComponent,
    FloatingRangePickerComponent,
    DeltaNumberDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
