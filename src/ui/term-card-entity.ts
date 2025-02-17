import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import type { TermCardContent } from './types';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('term-card-entity')
export class TermCardEntity extends LitElement {

  @property({ type: Object })
  card: TermCardContent = { title: '', body: '' };

  @property({ type: Boolean })
  isBlack: boolean = false;

  static styles = css`
    .term-card {
      display: flex;
      flex-direction: column;
      padding: 16px 8px;
      box-sizing: border-box;
      align-items: stretch;
      height: 100%;
    }

    .term-card-title {
      background-color: #555;
      color: white;
      text-align: center;
      padding: 16px;
      font-size: 24px;
    }

    .term-card-body {
      font-size: 18px;
      background-color: #f5f5f5;
      padding: 16px;
      flex-grow: 1;
      color: black;
    }

    .center {
      text-align: center;
    }

    @media (max-width: 768px) {
      :host {
        width: 100%;
      }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
    .pulse {
        animation: pulse 1.5s infinite;
    }
  `;

  render() {
    const pulse = this.card.isPulsed ? 'pulse' : '';
    const center = this.card.isCentered ?? true ? 'center' : '';
    return html`
      <div class="term-card">
        <div class="term-card-title"> <div class="${pulse}">${unsafeHTML(this.card.title)}</div> </div>
        <div class="term-card-body ${center}"><div>${unsafeHTML(this.card.body)}</div></div>
      </div>
    `;
  }
}
