import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private platformId = inject(PLATFORM_ID);
  scrollY = signal(0);
  private lenis: any;

  init() {
    if (!isPlatformBrowser(this.platformId)) return;
    import('lenis').then(({ default: Lenis }) => {
      this.lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8,
      });
      this.lenis.on('scroll', ({ scroll }: any) => this.scrollY.set(scroll));
      const raf = (time: number) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });
  }

  scrollTo(target: string | number) {
    this.lenis?.scrollTo(target, { duration: 1.6 });
  }

  stop() { this.lenis?.stop(); }
  start() { this.lenis?.start(); }
}
