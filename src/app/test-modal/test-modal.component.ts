import { Component, OnInit } from '@angular/core';
import { GenericModalService } from '../generic-modal/generic-modal.service';
import { RangePickerComponent } from '../date-pickers/range-picker/range-picker.component';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {

  constructor(private modalService: GenericModalService) { }

  ngOnInit() {
  }

  setClass() {
    this.modalService.setClass('modal-sm');
  }

}
