import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { first } from 'rxjs/operators';
import { DRAGGABLE_ANCHOR_ID } from '../draggable-anchor.directive';
import { GenericModalOptions } from '../model/generic-modal-options';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContainerComponent implements AfterViewInit {

  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

  onHidden: EventEmitter<number>;
  modalId: number;
  config: GenericModalOptions;
  draggableAnchor: HTMLElement;
  draggableZone: HTMLElement;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.onHidden = new EventEmitter<number>();
  }

  ngAfterViewInit() {
    this.getDraggableZone();
    this.getDraggableAnchor();
    this.modal.onHidden.pipe(first()).subscribe(event => this.onHidden.emit(this.modalId));
  }

  private getDraggableZone() {
    this.draggableZone = document.body;
    this.changeDetector.detectChanges();
  }

  private getDraggableAnchor() {
    const draggableElement = document.getElementById(DRAGGABLE_ANCHOR_ID);
    this.draggableAnchor = draggableElement ? draggableElement : undefined;
    this.changeDetector.detectChanges();
  }

}
