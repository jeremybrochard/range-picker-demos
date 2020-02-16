import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GenericModalService } from '../generic-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {

  @Input() title: string;

  constructor(private modalService: GenericModalService) {

  }

  closeModal() {
    this.modalService.close();
  }

}
