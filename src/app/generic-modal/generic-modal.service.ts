import { Injectable, Type } from '@angular/core';
import { GenericModalOptions } from './model/generic-modal-options';
import { GenericModalRef } from './model/generic-modal-ref';

@Injectable()
export class GenericModalService {

  constructor() { }

  open<T = any>(componentRef: Type<T>, config?: GenericModalOptions): GenericModalRef {
    const newModalRef = GenericModalRef.create();

    return newModalRef;
  }

  close() {

  }


}
