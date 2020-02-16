import { Range, RangeType } from './range.interface';

export class DateRange implements Range {

  from: Date;
  to: Date;
  type?: RangeType;

  constructor(obj?: Range) {
    this.type = 'fixed';

    if (obj) {
      this.from = new Date(obj.from);
      this.to = new Date(obj.to);
    }
  }
}
