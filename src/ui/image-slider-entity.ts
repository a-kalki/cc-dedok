import { LitElement, html, css, type PropertyValueMap } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { ImageContent } from './types';

const TIMING = 4; // Интервал переключения слайдов в секундах
const VISIBILITY_DURATION = 2; // Длительность видимости описания в секундах

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
        width: 100%;
        height: auto;
      }
    }

    @media (min-aspect-ratio: 19/6) {
      .full-screen-image {
        height: calc(100vh - 40px);
        width: auto;
      }
    }
  `;

  @property({ type: Number })
  private currentSlideIndex = 0;

  @property({ type: String, reflect: true })
  descriptionPosition: 'top' | 'bottom' = 'top';

  @state()
  private isDescriptionVisible = false;

  private images: ImageContent[] = [];
  private observer!: IntersectionObserver;
  private intervalId: number | null = null;

  protected async firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    super.firstUpdated(_changedProperties);
    this.currentSlideIndex = 0;
    await this.preloadImages();
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

  private async startSlideshow() {
    if (this.intervalId !== null) return;
    this.intervalId = window.setInterval(() => {
      this.updateSlideAndDescription();
    }, TIMING * 1000);
    this.updateSlideAndDescription();
  }

  private stopSlideshow() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private preloadImages(): Promise<void[]> {
    const promises = this.images.map((image) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => resolve();
      });
    });

    return Promise.all(promises);
  }

  private updateSlideAndDescription() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;

    this.isDescriptionVisible = true;
    setTimeout(() => {
      this.isDescriptionVisible = false;
    }, VISIBILITY_DURATION * 1000);
  }

  render() {
    const imageContent = this.images[this.currentSlideIndex];
    const descriptionStyle = `
      opacity: ${this.isDescriptionVisible && imageContent?.src ? 1 : 0};
      top: ${this.descriptionPosition === 'top' ? '16px' : 'auto'};
      bottom: ${this.descriptionPosition === 'bottom' ? '16px' : 'auto'};
    `;
    return html`
      <div class="slides">
        <img class="full-screen-image" src="${imageContent?.src}" />
        <div class="description-container" style="${descriptionStyle}">
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
