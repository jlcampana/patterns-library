import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import FooterLinks from './js/footer-links';

class AXAFooterLinks extends BaseComponentGlobal {
  static tagName = 'axa-footer-links'

  static get observedAttributes() { return ['cols', 'items', 'title']; }

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
  }

  willRenderCallback() {
    const { cols } = this;

    this.className = classnames(this.initialClassName, 'm-footer-links', {
      'm-footer-links--cols': cols,
      [`m-footer-links--cols-${cols}`]: cols,
    });
  }

  didRenderCallback() {
    if (this.footerLinks) {
      this.footerLinks.destroy();
    }

    this.footerLinks = new FooterLinks(this);
  }

  disconnectedCallback() {
    if (this.footerLinks) {
      this.footerLinks.destroy();
      delete this.footerLinks;
    }
  }
}

window.customElements.define(AXAFooterLinks.tagName, AXAFooterLinks);

export default AXAFooterLinks;
