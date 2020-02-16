import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DatePickersModule } from './date-pickers/date-pickers.module';
import { RangePickerComponent } from './date-pickers/range-picker/range-picker.component';
import { GenericModalModule } from './generic-modal/generic-modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DatePickersModule,
    GenericModalModule.forRoot()
  ],
  entryComponents: [
    RangePickerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
