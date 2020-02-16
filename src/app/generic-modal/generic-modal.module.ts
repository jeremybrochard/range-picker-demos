import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularDraggableModule } from 'angular2-draggable';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DraggableAnchorDirective } from './draggable-anchor.directive';
import { GenericModalService } from './generic-modal.service';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ModalContainerComponent,
    ModalComponent,
    DraggableAnchorDirective
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ModalModule.forRoot(),
    AngularDraggableModule
  ],
  exports: [
    ModalComponent,
    DraggableAnchorDirective
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
