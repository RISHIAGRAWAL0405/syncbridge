import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  template: `
    <div class="marquee-section" aria-hidden="true">
      <div class="marquee-track">
        @for (item of items.concat(items); track $index) {
          <span class="marquee-item">{{ item }}</span>
          <span class="marquee-dot">✦</span>
        }
      </div>
    </div>
  `,
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {
  items = ['Wedding Photography', 'Portrait Sessions', 'Fashion Editorial', 'Commercial Work', 'Travel Stories', 'Fine Art Prints', 'Drone Aerial', 'Luxury Events'];
}
