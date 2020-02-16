import { AfterViewInit, Component, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective, ModalOptions } from 'ngx-bootstrap/modal';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements AfterViewInit {

  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

  onHidden: EventEmitter<number>;
  modalId: number;
  config: ModalOptions;

  constructor() {
    this.onHidden = new EventEmitter<number>();
  }

  ngAfterViewInit() {
    this.modal.onHidden.pipe(first()).subscribe(event => this.onHidden.emit(this.modalId));
  }

}
