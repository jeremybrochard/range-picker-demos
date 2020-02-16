import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularDraggableModule } from 'angular2-draggable';
import { ModalModule } from 'ngx-bootstrap/modal';
import { GenericModalService } from './generic-modal.service';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ModalContainerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ModalModule.forRoot(),
    AngularDraggableModule
  ],
  exports: [
    ModalComponent
  ],
  entryComponents: [
    ModalContainerComponent,
    ModalComponent
  ]
})
export class GenericModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GenericModalModule,
      providers: [
        GenericModalService
      ]
    };
  }
}
