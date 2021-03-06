/* global document */
import { storiesOf } from '@storybook/html';
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import withNoBorder from '../../../../.storybook/addons/no-border';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

storiesOf('Components|Molecules/Footer Small', module)
  .addDecorator(withNoBorder)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Footer Small', () => {
    const language1 = text('First language', `DE`);
    const language2 = text('Second language', `FR`);
    const language3 = text('Third language', `IT`);
    const language4 = text('Fourth language', `EN`);
    const termsOfUse = text('Terms of use', `Terms of use`);
    const dataProtection = text('Data protection', `Data protection`);

    const wrapper = document.createElement('div');

    const template = html`
      <axa-footer-small>
        <a
          slot="language-item"
          href="https://axa.ch/de/privatkunden.html"
          class="m-footer-small__link--active"
        >
          ${language1}
        </a>
        <a slot="language-item" href="https://axa.ch/fr/particuliers.html">
          ${language2}
        </a>
        <a slot="language-item" href="https://axa.ch/it/clienti-privati.html">
          ${language3}
        </a>
        <a slot="language-item" href="https://axa.ch/en/private-customers.html">
          ${language4}
        </a>
        <a
          slot="disclaimer-item"
          href="https://axa.ch/en/information/terms-of-use.html"
        >
          ${termsOfUse}
        </a>
        <a
          slot="disclaimer-item"
          href="https://axa.ch/en/information/data-protection.html"
        >
          ${dataProtection}
        </a>
        <span slot="copyright">&copy; 2019 AXA Insurance Ltd.</span>
      </axa-footer-small>
    `;

    render(template, wrapper);
    return wrapper;
  });
