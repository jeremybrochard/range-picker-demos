import { Injectable } from '@angular/core';
import { FloatingRange } from 'src/app/model/floating-range.model';
import { DateRange } from 'src/app/model/date-range.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  fromDateRangeToFloatingRange(date: DateRange): FloatingRange {
    // Todo: convert using moment js
    return new FloatingRange();
  }

  fromFloatingRangeToDateRange(date: FloatingRange): DateRange {
    // Todo: convert using moment js
    return new DateRange();
  }

}
