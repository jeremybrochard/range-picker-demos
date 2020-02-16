import { ComponentRef } from '@angular/core';

export interface IGenericModalRef {
  modalContainerNode: HTMLElement;
  modalContentNode: HTMLElement;
  modalContainerRef: ComponentRef<any>;
  modalContentRef: ComponentRef<any>;
}

export class GenericModalRef {

  id: number;

  private _modalContainerNode: HTMLElement;
  private _modalContentNode: HTMLElement;
  private _modalContainerRef: ComponentRef<any>;
  private _modalContentRef: ComponentRef<any>;

  get modalContainerNode(): HTMLElement {
    return this._modalContainerNode;
  }

  get modalContentNode(): HTMLElement {
    return this._modalContentNode;
  }

  get modalContainerRef(): ComponentRef<any> {
    return this._modalContainerRef;
  }

  get modalContentRef(): ComponentRef<any> {
    return this._modalContentRef;
  }

  private constructor(id: number) {
    this.id = id;
  }

  static create(id: number, modalRef?: IGenericModalRef): GenericModalRef {
    const newModal = new GenericModalRef(id);
    if (modalRef) {
      newModal._modalContainerNode = modalRef.modalContainerNode;
      newModal._modalContentNode = modalRef.modalContentNode;
      newModal._modalContainerRef = modalRef.modalContainerRef;
      newModal._modalContentRef = modalRef.modalContentRef;
    }
    return newModal;
  }

}
