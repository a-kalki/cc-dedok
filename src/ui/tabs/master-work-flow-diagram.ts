import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('master-work-flow-diagram')
export class MasterWorkFlowDiagram extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: #f4f4f4;
    }

    .flow-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      justify-items: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: black;
    }

    .column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    term-card-entity {
      width: auto;
      height: auto;
      max-width: 300px;
      max-height: 200px;
    }

    @media (max-width: 850px) {
      .flow-container {
        grid-template-columns: 1fr;
        grid-auto-flow: row;
      }

      .column {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 100%;
      }

      .column:first-child {
        flex-direction: row;
      }
    }
  `;

  private cards = [
    { title: 'Шаг 1.1', body: 'Заказ поступает в мастерскую и мы предлагаем его тебе на исполнение.' },
    { title: 'Шаг 1.2', body: 'Ты находишь заказ, перед началом "регистрируешь" у нас.' },
    { title: 'Шаг 2', body: 'Определяем параметры выполнения заказа.' },
    { title: 'Шаг 3', body: 'Ты выполняешь заказ, пользуясь инфраструктурой мастерской.' },
    { title: 'Шаг 4', body: 'После выполнения заказа "распределяем" доход.' }
  ]

  render() {
    return html`
      <div class="flow-container">
        <!-- Столбец 1 (Шаги 1.1 и 1.2) -->
        <div class="column">
          <term-card-entity class="card1"
            .card=${this.cards[0]}
            .isBlack=${true}></term-card-entity>
          <term-card-entity class="card2"
            .card=${this.cards[1]}
            .isBlack=${true}></term-card-entity>
        </div>

        <!-- Столбец 2 (Шаг 2) -->
        <div class="column">
          <term-card-entity class="card3"
            .card=${this.cards[2]}
            .isBlack=${true}></term-card-entity>
        </div>

        <!-- Столбец 3 (Шаг 3) -->
        <div class="column">
          <term-card-entity class="card4"
            .card=${this.cards[3]}
            .isBlack=${true}></term-card-entity>
        </div>

        <!-- Столбец 4 (Шаг 4) -->
        <div class="column">
          <term-card-entity class="card5"
            .card=${this.cards[4]}
            .isBlack=${true}></term-card-entity>
        </div>
      </div>
    `;
  }
}
