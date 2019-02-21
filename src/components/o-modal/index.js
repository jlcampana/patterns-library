import PropTypes from '../../js/prop-types';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAModal extends BaseComponentGlobal {
  static tagName = 'axa-modal';
  static propTypes = {
    open: PropTypes.bool
  };

  init() {
    super.init({ styles, template });
  }

  static get observedAttributes() {
    return ['open'];
  }

  connectedCallback() {
    super.connectedCallback();

    const axaButtons = document.querySelectorAll(
      'axa-button[data-modal-close]'
    );
    if (axaButtons && axaButtons.length) {
      axaButtons.forEach(button => {
        button.onclick = this.closeModal;
      });
    }
  }

  closeModal() {
    var modal = document.getElementById('modal-wrapper');
    modal.classList.add('is-hidden');
  }

  set open(value) {
    this.setAttribute('open', value);
  }

  get open() {
    return this.getAttribute('open');
  }
}

defineOnce(AXAModal.tagName, AXAModal);

export default AXAModal;
