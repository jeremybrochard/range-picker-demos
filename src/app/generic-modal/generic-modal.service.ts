import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, Type } from '@angular/core';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { GenericModalOptions } from './model/generic-modal-options';
import { GenericModalRef } from './model/generic-modal-ref';
import { first } from 'rxjs/operators';

@Injectable()
export class GenericModalService {

  private _modalCounts: number;
  private _openedModal: GenericModalRef[];

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {
    this._modalCounts = 0;
    this._openedModal = new Array<GenericModalRef>();
  }

  /**
   * Create and open a new modal
   * @param componentRef
   * @param config
   */
  open<T = any>(componentRef: Type<T>, config?: GenericModalOptions): { content: any, modalId: number } {
    const modal = this.createModal(componentRef, config);
    this.addToOpenedModal(modal);
    return { content: modal.modalContentRef, modalId: modal.id };
  }

  /**
   * Close modal (by default, close last opened one)
   */
  close(modalId?: number) {
    if (modalId) {
      const modal = this._openedModal.find(m => m.id === modalId);
      this.closeModal(modal);
    } else {
      const length = this._openedModal.length;
      if (length > 0) {
        const lastOne = this._openedModal[length - 1];
        this.closeModal(lastOne);
      }
    }
  }

  /**
   * Close all opened modals
   */
  closeAllModals() {
    for (const modal of this._openedModal) {
      this.close(modal.id);
    }
  }

  /**
   * Change modal class (by default, update last opened one)
   * @param className
   * @param modalId
   */
  setClass(className: string, modalId?: number) {
    if (className) {
      if (modalId) {
        const modal = this._openedModal.find(m => m.id === modalId);
        this.setModalClass(modal, className);
      } else {
        const length = this._openedModal.length;
        if (length > 0) {
          const lastOne = this._openedModal[length - 1];
          this.setModalClass(lastOne, className);
        }
      }
    }
  }

  private addToOpenedModal(modal: GenericModalRef) {
    this._openedModal.push(modal);
    this._modalCounts = this._modalCounts++;
  }

  private createModal<T = any>(componentRef: Type<T>, config?: GenericModalOptions): GenericModalRef {

    // Create modal id
    const modalId = this._modalCounts++;

    const modalContainerNode = document.createElement('div');
    modalContainerNode.id = `modal-container-${modalId}`;
    document.body.appendChild(modalContainerNode);

    const modalContentNode = document.createElement('div');
    modalContentNode.id = `modal-content-${modalId}`;

    const modalContentFactory = this.cfr.resolveComponentFactory(componentRef);
    const modalContentRef = modalContentFactory.create(this.injector, [], modalContentNode);
    if (config) {
      Object.assign(modalContentRef.instance, config.initialState);
    }

    const modalFactory = this.cfr.resolveComponentFactory(ModalContainerComponent);
    const modalContainerRef = modalFactory.create(this.injector, [[modalContentNode]], modalContainerNode);

    modalContainerRef.instance.config = new GenericModalOptions(config);
    modalContainerRef.instance.modalId = modalId;
    modalContainerRef.instance.onHidden.pipe(first()).subscribe(id => this.close(id));

    this.appRef.attachView(modalContentRef.hostView);
    this.appRef.attachView(modalContainerRef.hostView);


    const genericModalRef = GenericModalRef.create(modalId, {
      modalContainerNode,
      modalContainerRef,
      modalContentNode,
      modalContentRef
    });

    return genericModalRef;
  }

  private closeModal(modal: GenericModalRef) {
    if (modal) {
      this.appRef.detachView(modal.modalContentRef.hostView);
      this.appRef.detachView(modal.modalContainerRef.hostView);
      modal.modalContentRef.destroy();
      modal.modalContainerRef.destroy();

      // Remove from opened modals list
      const modalToClose = this._openedModal.findIndex(m => m.id === modal.id);
      this._openedModal.splice(modalToClose, 1);
    } else {
      console.warn('no modal to close');
    }
  }

  private setModalClass(modal: GenericModalRef, className: string) {
    if (modal) {
      modal.modalContainerRef.instance.config.class = className;
    } else {
      console.warn('no modal to add class');
    }
  }
}
