import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { first } from 'rxjs/operators';
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

  constructor() {
    this.onHidden = new EventEmitter<number>();
  }

  ngAfterViewInit() {
    this.modal.onHidden.pipe(first()).subscribe(event => this.onHidden.emit(this.modalId));
  }

}
