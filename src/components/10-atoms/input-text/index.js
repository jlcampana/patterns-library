import { html, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
import { FilledTickAnimatedSvg } from '@axa-ch/materials/icons';
import NoShadowDOM from '../../../utils/no-shadow';
/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import createRefId from '../../../utils/create-ref-id';
import styles from './index.scss';

class AXAInputText extends NoShadowDOM {
  static get tagName() {
    return 'axa-input-text';
  }

  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      placeholder: { type: String },
      value: { type: String },
      type: { type: String },
      error: { type: String },
      valid: { type: Boolean },
      validation: { type: Boolean },
      inputFocus: { type: Boolean },
      wasFocused: { type: Boolean },
      wasBlured: { type: Boolean },
      required: { type: Boolean },
      disabled: { type: Boolean },
      isReact: { type: Boolean },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.label = '';
    this.placeholder = '';
    // text, email, password
    this.type = 'text';
    this.error = '';
    this.validation = false;
    this.required = false;
    this.valid = true;
    this.disabled = false;
    this.isReact = false;
    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};

    // internal properties
    this.inputFocus = false;
    this.wasFocused = false;
    this.wasBlurred = false;
    this.nativeInput = { value: '' };
    this.modelValue = '';
    this.isControlled = false;
    this.refId = this.id || `input-text-${createRefId()}`;
  }

  set value(val) {
    const { isControlled } = this;
    if (!isControlled && val !== undefined) {
      this.isControlled = true;
    }
    const oldVal = this.modelValue;
    this.modelValue = val;
    this.requestUpdate('value', oldVal);
  }

  get value() {
    const {
      isControlled,
      modelValue,
      nativeInput: { value: nativeValue },
    } = this;

    return isControlled ? modelValue : nativeValue;
  }

  get isRequiredError() {
    return this.required && !this.value;
  }

  get isInvalid() {
    return !this.valid || this.isRequiredError;
  }

  get showInputError() {
    return this.isInvalid && this.wasBlured && this.wasFocused;
  }

  get hideCheckIcon() {
    if (!this.wasBlured && !this.wasFocused) {
      return true;
    }

    if (this.inputFocus) {
      return true;
    }

    return this.isInvalid;
  }

  get hideErrorMessage() {
    return !this.error || !this.showInputError;
  }

  get showValidation() {
    return this.validation || this.required;
  }

  handleFocus = ev => {
    this.onFocus(ev);
    this.inputFocus = true;

    if (!this.wasFocused) {
      this.wasFocused = true;
    }
  };

  handleBlur = ev => {
    // Validation should be on blur or submit
    this.onBlur(ev);
    this.inputFocus = false;

    if (!this.wasBlured) {
      this.wasBlured = true;
    }
  };

  handleInput = ev => {
    this.onChange(ev);

    // are we a 'controlled' input in the React sense?
    if (this.isControlled) {
      // yes, set UI from model state
      this.nativeInput.value = this.modelValue;
    }
  };

  firstUpdated() {
    this.nativeInput = this.querySelector('input');
  }

  render() {
    const {
      name,
      required,
      value,
      label = '',
      error = '',
      type = '',
      placeholder,
      disabled,
      isReact,

      isControlled,
      refId,
    } = this;

    this.isControlled = isControlled && isReact;

    const inputErrorClass = {
      'a-input-text__input--error': this.showInputError,
    };

    const hideCheckClass = {
      'a-input-text__check--hidden': this.hideCheckIcon,
    };

    const hideErrorMessageClass = {
      'a-input-text__error--hidden': this.hideErrorMessage,
    };

    return html`
      <div class="a-input-text__wrapper">
        ${label &&
          html`
            <label for="${refId}" class="a-input-text__label">
              ${label}
              ${required
                ? html`
                    *
                  `
                : ''}
            </label>
          `}
        <div class="a-input-text__input-wrapper">
          <input
            @input="${this.handleInput}"
            @focus="${this.handleFocus}"
            @blur="${this.handleBlur}"
            id="${refId}"
            type="${type}"
            class="a-input-text__input ${classMap(inputErrorClass)}"
            autocomplete="off"
            name="${name}"
            value="${value}"
            placeholder="${placeholder}"
            ?disabled="${disabled}"
            aria-required="${required}"
          />

          ${this.showValidation
            ? html`
                <span class="a-input-text__check ${classMap(hideCheckClass)}">
                  ${svg([FilledTickAnimatedSvg])}
                </span>
              `
            : ''}
        </div>
        <span class="a-input-text__error ${classMap(hideErrorMessageClass)}"
          >${error}</span
        >
      </div>
    `;
  }
}

defineOnce(AXAInputText.tagName, AXAInputText);

export default AXAInputText;