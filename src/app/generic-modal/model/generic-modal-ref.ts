import { ComponentRef } from '@angular/core';

export interface IGenericModalRef {
  modalContainerNode: HTMLElement;
  modalContentNode: HTMLElement;
  modalContainerRef: ComponentRef<any>;
  modalContentRef: ComponentRef<any>;
}

export class GenericModalRef {

  private _modalContainerNode: HTMLElement;
  private _modalContentNode: HTMLElement;
  private _modalContainerRef: ComponentRef<any>;
  private _modalContentRef: ComponentRef<any>;

  get content(): ComponentRef<any> {
    return this._modalContentRef;
  }

  private constructor() { }

  static create(modalRef?: IGenericModalRef): GenericModalRef {
    const newModal = new GenericModalRef();
    if (modalRef) {
      newModal._modalContainerNode = modalRef.modalContainerNode;
      newModal._modalContentNode = modalRef.modalContentNode;
      newModal._modalContainerRef = modalRef.modalContainerRef;
      newModal._modalContentRef = modalRef.modalContentRef;
    }
    return newModal;
  }

}
