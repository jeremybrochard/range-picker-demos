import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UtilsService } from './utils.service';

@Directive({
  selector: '[appDeltaNumber]'
})
export class DeltaNumberDirective implements OnChanges {

  @Input() input: Date;

  constructor(private el: ElementRef, private utilsService: UtilsService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.input.currentValue) {
      const floatingValue = this.utilsService.fromDateToFloating(changes.input.currentValue);
      const displayValue = floatingValue >= 0 ? `D+${floatingValue}` : `D${floatingValue}`;
      this.el.nativeElement.value = displayValue;
    }
  }


}
