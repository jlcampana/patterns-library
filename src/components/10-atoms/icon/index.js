import { LitElement, svg } from 'lit-element';

// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import {
  ArrowRightSvg,
  CollapseSvg,
  DownloadSvg,
  EmailSvg,
  ExpandSvg,
  PhoneSvg,
  PlusSvg,
  SearchSvg,
  UploadSvg
} from '@axa-ch/materials';

class AXAIcon extends LitElement {
  static tagName = 'axa-icon';
  static iconsMapping = {
    'arrow-right': ArrowRightSvg,
    'collapse': CollapseSvg,
    'download': DownloadSvg,
    'email': EmailSvg,
    'expand': ExpandSvg,
    'phone': PhoneSvg,
    'plus': PlusSvg,
    'search': SearchSvg,
    'upload': UploadSvg
  };

  static get properties() {
    return {
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.icon = '';
  }

  connectedCallback() {
    super.connectedCallback();

    if (/\.svg/.test(this.icon)) {
      const req = new XMLHttpRequest();
      req.open('GET', this.icon);
      req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
          this.shadowRoot.innerHTML = req.response;
        }
      };

      req.send();
    }
  }

  render() {
    return svg([AXAIcon.iconsMapping[this.icon] || '']) ;
  }
}

customElements.define(AXAIcon.tagName, AXAIcon);

export default AXAIcon;