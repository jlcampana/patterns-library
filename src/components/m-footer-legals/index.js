import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import { domready } from '../../js/domready';

class FooterLegals extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }

  connectedCallback() {
    super.connectedCallback();
    const bottom = getAttribute(this, 'bottom');

    this.className = classnames('m-footer-legals', {
      'm-footer-legals--bottom': bottom,
    });
  }
}

domready(() => {
  window.customElements.define('axa-footer-legals', FooterLegals);
});
