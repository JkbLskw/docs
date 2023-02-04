import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vaadin/button';
import '@vaadin/email-field';
import '@vaadin/form-layout';
import '@vaadin/horizontal-layout';
import '@vaadin/text-field';
import '@vaadin/vertical-layout';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('button-form')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-vertical-layout theme="spacing">
        <vaadin-form-layout .responsiveSteps="${[{ columns: 2 }]}">
          <vaadin-text-field label="First name" value="John"></vaadin-text-field>
          <vaadin-text-field label="Last name" value="Smith"></vaadin-text-field>
          <vaadin-email-field
            label="Email address"
            value="john.smith@example.com"
            colspan="2"
          ></vaadin-email-field>
        </vaadin-form-layout>

        <vaadin-horizontal-layout theme="spacing">
          <vaadin-button theme="primary">Create account</vaadin-button>
          <vaadin-button theme="secondary">Cancel</vaadin-button>
        </vaadin-horizontal-layout>
      </vaadin-vertical-layout>
      <!-- end::snippet[] -->
    `;
  }
}
