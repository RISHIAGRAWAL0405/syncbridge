import { Injectable, NgZone, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CursorService {
  private platformId = inject(PLATFORM_ID);
  private zone = inject(NgZone);
  private initialized = false;
  private frameId: number | null = null;
  private nextX = 0;
  private nextY = 0;
  x = signal(0);
  y = signal(0);
  isHovering = signal(false);
  isHidden = signal(false);
  label = signal('');

  init() {
    if (!isPlatformBrowser(this.platformId) || this.initialized) return;
    this.initialized = true;

    this.zone.runOutsideAngular(() => {
      window.addEventListener('mousemove', (e) => {
        this.nextX = e.clientX;
        this.nextY = e.clientY;

        if (this.frameId !== null) return;
        this.frameId = requestAnimationFrame(() => {
          this.frameId = null;
          this.x.set(this.nextX);
          this.y.set(this.nextY);
        });
      });
      window.addEventListener('mouseleave', () => this.isHidden.set(true));
      window.addEventListener('mouseenter', () => this.isHidden.set(false));
    });
  }

  setHover(state: boolean, label = '') {
    this.isHovering.set(state);
    this.label.set(label);
  }
}
