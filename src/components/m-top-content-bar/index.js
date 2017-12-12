import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class AXATopContentBar extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');


    this.className = `${this.initialClassName} m-top-content-bar m-top-content-bar--${type}`;
  }
}

domready(() => {
  window.customElements.define('axa-top-content-bar', AXATopContentBar);
});
