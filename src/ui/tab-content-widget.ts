import { LitElement, css, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ImageContent } from './types';

const styles = css`
    :host {
      display: block;
    }

    .content, .container, .tab-content {
      max-width: 100%;
      box-sizing: border-box;
    }

    .content {
      max-width: 980px;
      padding: 0 8px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 16px;
      font-size: 16px;
    }

    .black {
      background-color: black;
      color: white;
    }

    .container {
      padding: 0 16px;
    }

    .padding-64 {
      padding-top: 64px;
      padding-bottom: 64px;
    }

    .center {
      text-align: center;
      margin: 0 auto;
    }

    .section {
      padding: 20px;
      margin: 10px 0;
    }

    .section:nth-child(even) {
      background-color: black;
      color: white;
    }

    .section:nth-child(odd) {
      background-color: white;
      color: black;
    }

    h1 {
      font-size: 28px;
      font-family: 'Segoe UI', Arial, sans-serif;
      font-weight: 400;
      margin: 10px 0;
      text-align: center;
      letter-spacing: 4px;
    }

    p {
      mapgin: 18px 0;
      line-height: 1.5;
    }

    .list-container {
      margin: 0;
    }

    .list-container p {
      margin-bottom: 0; /* Убирает отступ снизу у параграфа */
    }

    .list-container ol {
      margin-top: 0; /* Убирает отступ сверху у списка */
      padding-left: 20px; /* Отступ для списка слева */
    }

    blockquote {
      margin: 16px 0;
      padding: 16px 48px;
      border-left: 6px solid #999;
      background-color: #ddd;
      color: #333;
      font-size: 20px;
      position: relative;
    }

    blockquote::before {
      content: "❝";
      font-size: 2rem;
      color: #999;
      position: absolute;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
    }

    code {
        background-color: #888;
        color: #333;
        padding: 2px;
        border-radius: 4px;
        font-family: "Courier New", monospace;
    }

    a {
      font-size: 16px;
      border-radius: 4px;
      color: #ccc;
      background-color: #444;
      text-decoration: underline;
      padding: 4px;
      transition: color 0.2s, text-shadow 0.2s;
    }

    a:hover,
    a:focus {
      color: #fff;
      text-decoration: underline;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
    }

    @media (hover: none) {
      a:active {
        color: #ddd;
        text-decoration: underline;
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      }
    }
  `;

@customElement('tab-content-widget')
export abstract class TabContentWidget extends LitElement {
  static styles = styles;

  abstract imageSliderContents: ImageContent[]

  @property({ type: String })
  name = 'Default tab';

  render() {
    return html`
      <div class="tab-content">
        ${html`<image-slider-entity
          .images=${this.imageSliderContents}
          .currentSlideIndex=${0}
        ></image-slider-entity>`}

        ${this.renderContent()}

        ${html`<image-slider-entity
          .images=${this.imageSliderContents}
          .currentSlideIndex=${0}
          .descriptionPosition=${'bottom'}
        ></image-slider-entity>`}
      </div>
    `;
  }

  renderContent(): TemplateResult<1> {
    return html`<h1 class="padding-64">Content of ${this.name} is not implemented</h1>`;
  }
}
