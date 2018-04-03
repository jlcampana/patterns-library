import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import styles from './index.scss';
import template from './_template';

class AXARadio extends BaseComponentGlobal {
  static get observedAttributes() { return ['input-id', 'error', 'value', 'name', 'checked', 'disabled']; }

  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    const { error, checked, disabled } = this;

    const radioClasses = classnames(this.initialClassName, 'a-radio', {
      'a-radio--error': error,
      'a-radio--checked': checked,
      'a-radio--disabled': disabled,
    });

    this.className = radioClasses;
  }
}

wcdomready(() => {
  window.customElements.define('axa-radio', AXARadio);
});

export default AXARadio;
