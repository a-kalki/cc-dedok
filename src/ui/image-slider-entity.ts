import { LitElement, html, css, type PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ImageContent } from './types';

@customElement('image-slider-entity')
export class ImageContentEntity extends LitElement {
  static styles = css`
    .slides {
      position: relative;
      width: 100%;
    }
    .full-screen-image {
      width: 100%;
      height: 800px;
      object-fit: cover;
      display: block;
    }
    .description-container {
      position: absolute;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .description {
      border-radius: 16px;
      padding: 0px 32px;
      color: #333;
      background: rgba(255, 255, 255, 0.66);
      white-space: nowrap;
    }
    .indicator {
      margin-top: 8px;
      display: flex;
      gap: 8px;
    }
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      transition: background 0.3s;
    }
    .dot.active {
      background: white;
    }
  `;

  @property({ type: Number })
  private currentSlideIndex = 0;

  private images: ImageContent[] = [];
  private observer!: IntersectionObserver;
  private intervalId: number | null = null;

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(_changedProperties);
    this.setupObserver();
  }

  private setupObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            this.startSlideshow();
          } else {
            this.stopSlideshow();
          }
        });
      },
      { threshold: [0.5] }
    );
    this.observer.observe(this);
  }

  private startSlideshow() {
    if (this.intervalId !== null) return;
    this.intervalId = window.setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    }, 4000);
  }

  private stopSlideshow() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  render() {
    const imageContent = this.images[this.currentSlideIndex];
    return html`
      <div class="slides">
        <img class="full-screen-image" src="${imageContent?.src}" />
        <div class="description-container">
          <div class="description">
            <h3>${imageContent?.description}</h3>
          </div>
          <div class="indicator">
            ${this.images.map(
              (_, i) => html`<div class="dot ${i === this.currentSlideIndex ? 'active' : ''}"></div>`
            )}
          </div>
        </div>
      </div>
    `;
  }
}
