import { Range, RangeType } from './range.interface';

export class FloatingRange implements Range {

  from: number;
  to: number;
  type?: RangeType;

  constructor(obj?: Range) {
    this.type = 'floating';

    if (obj) {
      this.from = Number(obj.from);
      this.to = Number(obj.to);
    }
  }
}
