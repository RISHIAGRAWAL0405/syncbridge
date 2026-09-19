import { Component, OnInit, output, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div class="loader" [class.hide]="hiding()">
      <div class="loader-bg"></div>
      <div class="loader-content">
        <div class="loader-logo">
          <span class="logo-l">L</span>
          <span class="logo-text">umière</span>
        </div>
        <div class="loader-bar-wrap">
          <div class="loader-bar" [style.width.%]="progress()"></div>
        </div>
        <span class="loader-percent">{{ progress() }}%</span>
      </div>
    </div>
  `,
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  done = output<void>();
  progress = signal(0);
  hiding = signal(false);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) { this.done.emit(); return; }
    const interval = setInterval(() => {
      this.progress.update(v => {
        const next = v + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            this.hiding.set(true);
            setTimeout(() => this.done.emit(), 800);
          }, 300);
          return 100;
        }
        return Math.round(next);
      });
    }, 120);
  }
}
