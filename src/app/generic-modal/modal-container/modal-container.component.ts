import { Component, OnInit } from '@angular/core';
import { ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {

  config: ModalOptions;

  constructor() { }

  ngOnInit() {
  }

}
