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
    overflow-x: auto;
    background-color: black;
    color: white;
    z-index: 1000;
    scrollbar-width: none;
  }
  .tab-bar::-webkit-scrollbar {
    display: none;
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
  }
  .tab-bar button:hover {
    background-color: #888;
    color: black;
  }
  .active {
    background-color: white;
    color: black;
  }
  @media (max-width: 750px) {
    .tab-bar {
      justify-content: flex-start;
    }
    .btn {
      font-size: clamp(12px, 3vw, 16px);
      padding: 0 8px;
    }
  }
`;

  render() {
    return html`
    <div class="tab-bar">
        ${Object.entries(this.tabs).map(([name, title]) => html`
          <button
            class="btn ${this.currentTab === name ? 'active' : ''}"
            @click="${() => this.switchTab(name)}"
          >
            ${title.charAt(0).toUpperCase() + title.slice(1)}
          </button>
        `)}
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
