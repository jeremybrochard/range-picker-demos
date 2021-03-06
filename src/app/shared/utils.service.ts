import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DateRange } from '../date-pickers/model/date-range.model';
import { FloatingRange } from '../date-pickers/model/floating-range.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  fromDateToFloating(date: Date): number {
    const dateInMoment = moment(date);
    const now = moment();

    return dateInMoment.diff(now, 'days');
  }

  fromFloatingToDate(floatingNumber: number): Date {
    const now = moment();

    return now.add(floatingNumber, 'days').toDate();
  }

  fromDateRangeToFloatingRange(date: DateRange): FloatingRange | null {
    if (date) {
      const fromDelta = this.fromDateToFloating(date.from);
      const toDelta = this.fromDateToFloating(date.to);

      return new FloatingRange({ from: fromDelta, to: toDelta });
    }
    return null;
  }

  fromFloatingRangeToDateRange(date: FloatingRange): DateRange | null {
    if (date) {
      const fromDate = this.fromFloatingToDate(date.from);
      const toDate = this.fromFloatingToDate(date.to + 1);

      return new DateRange({ from: fromDate, to: toDate });
    }
    return null;
  }

  isFloatingRange(range: any): range is FloatingRange {
    return range.type === 'floating';
  }

  isDateRange(range: any): range is DateRange {
    return range.type === 'fixed';
  }

}
