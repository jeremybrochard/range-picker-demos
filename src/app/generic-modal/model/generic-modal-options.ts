import { ModalOptions } from 'ngx-bootstrap/modal';

export class GenericModalOptions extends ModalOptions {

  /**
   * Includes a modal-backdrop element. Alternatively,
   * specify static for a backdrop which doesn't close the modal on click.
   */
  backdrop?: boolean | 'static';
  /**
   * Closes the modal when escape key is pressed.
   */
  keyboard?: boolean;
  focus?: boolean;
  /**
   * Shows the modal when initialized.
   */
  show?: boolean;
  /**
   * Ignore the backdrop click
   */
  ignoreBackdropClick?: boolean;
  /**
   * Css class for opened modal
   */
  class?: string;
  /**
   * Toggle animation
   */
  animated?: boolean;
  /**
   * Modal data
   */
  initialState?: object;
  /**
   * Activate draggable on modal
   */
  enableDraggable?: boolean;

  constructor() {
    super();
  }

}
