import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AnimationService {
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  initReveal() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    this.observeAll();
  }

  observeAll() {
    if (!isPlatformBrowser(this.platformId)) return;
    document.querySelectorAll('.reveal, .img-mask').forEach(el => {
      this.observer?.observe(el);
    });
  }

  observe(el: Element) {
    this.observer?.observe(el);
  }
}
