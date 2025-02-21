import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import type { TermCardContent } from './types';

@customElement('term-cards-widget')
export class TermCardsWidget extends LitElement {
  static styles = css`
    .term-cards {
      display: grid;
      grid-template-columns: repeat(var(--columns, 3), 1fr);
      gap: 16px;
      width: 100%;
      grid-auto-rows: minmax(100px, auto);
      min-width: 0;
      padding: 0 16px;
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      .term-cards {
        grid-template-columns: 1fr;
      }
    }
  `;

  @property({ type: Array })
  cards: Array<TermCardContent> = [];

  @property({ type: Boolean })
  isBlack: boolean = false;

  @property({ type: Number })
  columns: number = 3;

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty('--columns', String(this.columns));
  }

  render() {
    return html`
      <div class="term-cards">
        ${this.cards.map(card => html`
          <term-card-entity
            .card=${card}
            .isBlack=${this.isBlack}
          ></term-card-entity>
        `)}
      </div>
    `;
  }
}
