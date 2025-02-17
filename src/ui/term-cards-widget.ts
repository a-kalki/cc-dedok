import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import type { TermCardContent } from './types';

@customElement('term-cards-widget')
export class TermCardsWidget extends LitElement {
  @property({ type: Array })
  cards: Array<TermCardContent> = [];

  @property({ type: Boolean })
  isBlack: boolean = false;

  static styles = css`
    .term-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      width: 100%;
      grid-auto-rows: minmax(100px, auto);
    }

    .term-cards[data-cards="4"] {
      grid-template-columns: repeat(4, 1fr);
    }

    .term-cards[data-cards="5"] {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1024px) {
      .term-cards {
        grid-template-columns: repeat(2, 1fr);
      }

      .term-cards[data-cards="5"] {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .term-cards {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    const cardsCount = this.cards.length;
    return html`
      <div class="term-cards" data-cards="${cardsCount}">
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
