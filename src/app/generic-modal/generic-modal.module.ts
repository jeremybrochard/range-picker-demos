import { ModuleWithProviders, NgModule } from '@angular/core';
import { GenericModalService } from './generic-modal.service';

@NgModule({
  declarations: [

  ],
  imports: [

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
