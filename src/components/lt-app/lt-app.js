import { LitElement, html } from 'lit-element';

export class LTApp extends LitElement {
  firstUpdated() {
    const playground = this.shadowRoot.querySelector('lt-playground');

    playground.supports = [
      'Customizing your <code class="code">tailwind.config.js</code> file',
      'Extracting classes with <code class="code">@apply</code>',
      'Code completion with instant preview'
    ];
  }

  render() {
    return html`
      <link href="/tailwind.css" rel="stylesheet">
      <lt-playground logo="/images/tailwind.svg"></lt-playground>
      <div class="starter-app">
        <p class="p-4">LitElement + Tailwind (LT)</p>
        <a class="button" href="http://hasanirogers.me">Starter App By: Hasani Rogers</a>
      </div>

    `;
  }
}

window.customElements.define('lt-app', LTApp);
