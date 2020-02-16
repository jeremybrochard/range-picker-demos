import { Directive, ElementRef, OnInit } from '@angular/core';

export const DRAGGABLE_ANCHOR_ID = 'draggable-anchor';

@Directive({
  selector: '[appDraggableAnchor]'
})
export class DraggableAnchorDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.addDraggableId(this.el.nativeElement);
    this.addDraggableStyle(this.el.nativeElement);
  }

  private addDraggableId(element: HTMLElement) {
    element.id = DRAGGABLE_ANCHOR_ID;
  }

  private addDraggableStyle(element: HTMLElement) {
    element.style.cursor = 'grab';
  }

}
