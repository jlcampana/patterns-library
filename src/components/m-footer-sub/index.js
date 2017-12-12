import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';
import { domready } from '../../js/domready';

class AXAFooterSub extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-footer-sub`;
  }
}

domready(() => {
  window.customElements.define('axa-footer-sub', AXAFooterSub);
});
