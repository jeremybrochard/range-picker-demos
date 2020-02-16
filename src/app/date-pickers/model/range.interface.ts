export type RangeType = 'floating' | 'fixed';

export interface Range {
    type?: RangeType;
    from: Date | number;
    to: Date | number;
}
