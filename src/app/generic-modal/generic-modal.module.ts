import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalModule } from 'ngx-bootstrap/modal';
import { GenericModalService } from './generic-modal.service';
import { ModalContainerComponent } from './modal-container/modal-container.component';

@NgModule({
  declarations: [
    ModalContainerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ModalModule.forRoot()
  ],
  exports: [

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
