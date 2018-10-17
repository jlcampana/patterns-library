import PropTypes from 'prop-types';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import localePropType from '../../js/prop-types/locale-prop-type';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

import Datepicker from './js/datepicker';

class AXADatepicker extends BaseComponentGlobal {
  static tagName = 'axa-datepicker'
  static propTypes = {
    classes: PropTypes.string,
    locale: localePropType,
    open: PropTypes.bool,
    lowerEndYear: PropTypes.number,
    higherEndYear: PropTypes.number,
    value: PropTypes.string,
  }

  constructor() {
    super({ styles, template });

    this.datepicker = new Datepicker(this);
    // does this provide context (See docs for context) ?
    // this.provideContext()

    // or do you want to consume a specific context
    // this.consumeContext('axa-context-provider');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-datepicker`;
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }

  // You have some special logic? Or need to update the web-components DOM node itself?
  // Then don't forget to make sure that incremental rendering works properly.

  disconnectedCallback() {
    super.disconnectedCallback();

    this.datepicker.destroy();
  }

  didRenderCallback() {
    this.datepicker.init();
  }
  // Do you consume context?
  // contextCallback(contextNode) {
  //   contextNode is now available.
  // }
}

defineOnce(AXADatepicker.tagName, AXADatepicker);

export default AXADatepicker;