import 'Frontend/demo/init'; // hidden-source-line
import { html, LitElement } from 'lit-element';
import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-lumo-styles/icons';
import '@vaadin/vaadin-notification/vaadin-notification';
import { applyTheme } from 'Frontend/generated/theme';

export class Example extends LitElement {
  constructor() {
    super();
    applyTheme(this.shadowRoot);
  }

  render() {
    return html`
      <vaadin-notification-card theme="error" slot="middle">
        <div>Failed to generate report</div>
        <div style="width: 2em"></div>
        <vaadin-button theme="tertiary-inline">Retry</vaadin-button>
        <vaadin-button theme="tertiary-inline">
          <iron-icon icon="lumo:cross"></iron-icon>
        </vaadin-button>
      </vaadin-notification-card>
    `;
  }
}