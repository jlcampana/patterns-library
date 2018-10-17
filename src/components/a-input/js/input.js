import { EVENTS, AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import fire from '../../../js/fire';

export default class Input {
  constructor(wcNode) {
    this.wcNode = wcNode;
  }

  init() {
    this.iconButton = this.wcNode.querySelector('.js-input__icon__button');
    this.inputfield = this.wcNode.querySelector('.js-input__input');
    this.listenToButtons();
    this.listenToInputChange();
    fire(this.inputfield, AXA_EVENTS.AXA_LOAD, this.inputfield.value, { bubbles: true, cancelable: true, composed: true });
  }

  listenToButtons() {
    this.offListenToButtons();
    this.unIconButtonListenerEnd = on(this.iconButton, EVENTS.CLICK, () => {
      fire(this.iconButton, AXA_EVENTS.AXA_CLICK, this.inputfield.value, { bubbles: true, cancelable: true, composed: true });
    });
  }

  offListenToButtons() {
    if (this.unIconButtonListenerEnd) {
      this.unIconButtonListenerEnd();
    }
  }

  listenToInputChange() {
    this.offListenToInputChange();
    this.unInputListenerEnd = on(this.inputfield, EVENTS.INPUT, () => {
      fire(this.inputfield, AXA_EVENTS.AXA_CHANGE, this.inputfield.value, { bubbles: true, cancelable: true, composed: true });
    });
  }

  offListenToInputChange() {
    if (this.unInputListenerEnd) {
      this.unInputListenerEnd();
    }
  }

  destroy() {
    this.offListenToInputChange();
    this.offListenToButtons();
  }
}