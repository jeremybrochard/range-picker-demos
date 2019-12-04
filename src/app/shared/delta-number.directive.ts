import { Directive, AfterViewInit, ElementRef, OnChanges, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDeltaNumber]'
})
export class DeltaNumberDirective implements OnChanges {

  @Input() input: any;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.input) {
      // Todo: replace date selection by floating number
      // Use utils service
    }
  }


}
