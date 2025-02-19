import { LitElement, html, css, type PropertyValueMap } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { ImageContent } from './types';

const TIMING = 4; // Интервал переключения слайдов в секундах
const VISIBILITY_TIMING = 50; // Интервал управления видимостью в миллисекундах

@customElement('image-slider-entity')
export class ImageContentEntity extends LitElement {
  static styles = css`
    .slides {
      position: relative;
      width: 100%;
      overflow: hidden;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .full-screen-image {
      object-fit: contain;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .description-container {
      position: absolute;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: clamp(14px, 3vw, 24px);
      opacity: 0; /* Начальное состояние — невидимо */
      transition: opacity 0.3s ease-in-out;
    }
    .description {
      border-radius: 16px;
      padding: 0px 32px;
      color: #333;
      background: rgba(255, 255, 255, 0.50);
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

    @media (max-aspect-ratio: 19/6) {
      .full-screen-image {
        height: calc(100vh - 40px);
        width: auto;
      }
    }

    @media (min-aspect-ratio: 19/6) {
      .full-screen-image {
        width: 100%;
        height: auto;
      }
    }
  `;

  @property({ type: Number })
  private currentSlideIndex = 0;

  @state()
  private isDescriptionVisible = false; // Состояние видимости описания

  private images: ImageContent[] = [];
  private observer!: IntersectionObserver;
  private intervalId: number | null = null;
  private visibilityIntervalId: number | null = null;

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
            this.startVisibilityControl();
          } else {
            this.stopSlideshow();
            this.stopVisibilityControl();
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
    }, TIMING * 1000);
  }

  private stopSlideshow() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private startVisibilityControl() {
    if (this.visibilityIntervalId !== null) return;
    this.visibilityIntervalId = window.setInterval(() => {
      this.updateDescriptionVisibility();
    }, VISIBILITY_TIMING);
  }

  private stopVisibilityControl() {
    if (this.visibilityIntervalId !== null) {
      clearInterval(this.visibilityIntervalId);
      this.visibilityIntervalId = null;
    }
  }

  private updateDescriptionVisibility() {
    const elapsedTime = (performance.now() / 1000) % TIMING; // Время в секундах
    const visibilityPhase = elapsedTime / TIMING; // Фаза видимости от 0 до 1

    // Логика видимости:
    // - Видимо с 5% до 25% времени
    // - Невидимо с 75% до 100% времени
    if (visibilityPhase >= 0.05 && visibilityPhase <= 0.25) {
      this.isDescriptionVisible = true;
    } else if (visibilityPhase >= 0.75 || visibilityPhase <= 0.05) {
      this.isDescriptionVisible = false;
    }
  }

  render() {
    const imageContent = this.images[this.currentSlideIndex];
    return html`
      <div class="slides">
        <img class="full-screen-image" src="${imageContent?.src}" />
        <div class="description-container" style="opacity: ${this.isDescriptionVisible ? 1 : 0}">
          <div class="description">
            ${imageContent?.description}
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
