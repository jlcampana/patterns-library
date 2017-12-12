import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import DropDown from './js/drop-down';
import { domready } from '../../js/domready';

class AXADropdown extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.dropDown = new DropDown(this, {
      containerClass: null,
    });
  }

  disconnectedCallback() {
    this.dropDown.destroy();
    delete this.dropDown;
  }

  render() {
    super.render();

    const inFlow = this.hasAttribute('in-flow');

    this.className = classnames(this.initialClassName, 'm-dropdown js-dropdown', {
      'm-dropdown--in-flow': inFlow,
    });
  }
}

domready(() => {
  window.customElements.define('axa-dropdown', AXADropdown);

  BaseComponentGlobal.appendGlobalStyles(styles);
});
