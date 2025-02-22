import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { type TabChangedEvent } from './types';

@customElement('tabs-bar-widget')
export class TabsBarWidget extends LitElement {
  @property({ type: Array })
  tabs: Record<string, string> = {};

  @property({ type: String })
  currentTab: string = '';

  static styles = css`
    .tab-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: black;
      color: white;
      z-index: 1000;
      scrollbar-width: none;
    }
    .tab-bar::-webkit-scrollbar {
      display: none;
    }
    .tab-buttons {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .logo {
      height: 30px;
      width: auto;
      filter: invert(1);
      padding-right: 16px;
    }
    .btn {
      flex-shrink: 0;
      font-family: 'Lato', sans-serif;
      font-size: 18px;
      background-color: black;
      color: white;
      border: none;
      padding: 0px 16px;
      margin: 0;
      cursor: pointer;
      white-space: nowrap;
      transition: font-size 0.2s ease;
      height: 100%;
    }
    .tab-bar button:hover {
      background-color: #888;
      color: black;
    }
    .active {
      background-color: white;
      color: black;
    }
    @media (max-width: 768px) {
      .tab-bar {
        justify-content: space-between;
      }
      .btn {
        font-size: clamp(10px, 2.5vw, 16px);
        padding: 0 8px;
      }
    }
    @media (max-width: 500px) {
      .logo {
        content: url('images/logo_short.svg');
      }
    }
  `;

  render() {
    return html`
      <div class="tab-bar">
        <div class="tab-buttons">
          ${Object.entries(this.tabs).map(([name, title]) => html`
            <button
              class="btn ${this.currentTab === name ? 'active' : ''}"
              @click="${() => this.switchTab(name)}"
            >
              ${title.charAt(0).toUpperCase() + title.slice(1)}
            </button>
          `)}
        </div>
        <img src="images/logo_full.svg" alt="Логотип" class="logo">
      </div>
    `;
  }

  private switchTab(tab: string) {
    this.dispatchEvent(new CustomEvent<TabChangedEvent>('tab-change', { detail: {
      name: tab,
      top: window.scrollY || document.documentElement.scrollTop,
      left: window.scrollX || document.documentElement.scrollLeft,
    }}));
  }
}
