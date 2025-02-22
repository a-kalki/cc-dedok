import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import type { TabContentWidget } from './tab-content-widget';
import type { TabChangedEvent } from './types';

@customElement('app-widget')
export class AppWidget extends LitElement {
  static styles = css`
    :host {
      font-size: 18px;
      font-family: 'Lato', sans-serif;
      display: block;
      padding-top: 40px;
    }

    footer {
      background-color: #f5f5f5;
      padding: 20px;
      font-size: 14px;
      color: #333;
      border-top: 1px solid #ddd;
      position: relative;
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      align-items: center;
      gap: 10px;
      max-width: 1200px;
      margin: 0 auto;
      padding-right: 60px;
    }

    footer p {
      margin: 0;
      line-height: 1.6;
      text-align: left;
    }

    .logo {
      width: 175px;
      height: auto;
    }

    @media (max-width: 470px) {
      .logo {
        width: clamp(100px, 30vw, 175px);
      }
      footer {
        font-size: clamp(12px, 2.5vw, 14px)
      }
    }

    .to-top-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background-color: #ccc;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: background-color 0.2s ease;
    }

    .to-top-btn:hover {
      background-color: #555;
    }

    .to-top-btn svg {
      width: 24px;
      height: 24px;
      fill: white;
    }
  `;

  @property({ type: String })
  currentTabName: string = 'home';

  private tabTitles: Record<string, string> = {
    home:  'Главное',
    hobbist:  'Хоббист',
    master:  'Мастер',
    mentor:  'Ментор',
    partner:  'Партнер',
    sponsor:  'Спонсор',
  };

  private tabs: Map<string, TabContentWidget> = new Map();
  private scrollPositions: Map<string, { top: number; left: number }> = new Map();

  render() {
    return html`
      <tabs-bar-widget
        .tabs=${this.tabTitles}
        .currentTab=${this.currentTabName}
        @tab-change="${(e: CustomEvent) => this.switchTab(e.detail)}"
      ></tabs-bar-widget>

      ${this.getTabComponent(this.currentTabName)}

    <footer>
      <p>Коворкинг-мастерская<br>г.Уральск, ул.Айтиева, 24<br>тел.: +7 777 287 8182</p>
      <img class="logo" src="images/logo_full.svg" alt="Логотип">
      <button class="to-top-btn" @click="${() => window.scrollTo({ top: 0, behavior: 'smooth' })}">
        <svg viewBox="0 0 24 24">
          <path d="M12 4l-8 8h5v8h6v-8h5z"/>
        </svg>
      </button>
    </footer>
    `;
  }

  private switchTab(e: TabChangedEvent) {
    // Сохраняем текущую позицию прокрутки
    if (this.currentTabName && this.tabs.has(this.currentTabName)) {
      this.scrollPositions.set(this.currentTabName, {
        top: e.top,
        left: e.left,
      });
    }

    this.currentTabName = e.name;

    // Восстанавливаем позицию прокрутки для новой вкладки
    const scrollPosition = this.scrollPositions.get(e.name) || { top: 0, left: 0 };
    setTimeout(() => window.scrollTo(scrollPosition.left, scrollPosition.top), 0);
  }

  private getTabComponent(tabName: string) {
    if (!this.tabs.has(tabName)) {
      const tabElement = document.createElement(`${tabName}-tab-widget`) as TabContentWidget;
      tabElement.name = tabName;

      this.tabs.set(tabName, tabElement);
    }
    return this.tabs.get(tabName)!;
  }
}
