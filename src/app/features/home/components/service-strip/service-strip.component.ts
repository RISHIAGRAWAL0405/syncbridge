import { Component } from '@angular/core';

@Component({
  selector: 'app-service-strip',
  standalone: true,
  template: `
    <div class="service-strip" aria-label="Our services" role="marquee">
      <div class="strip-track">
        @for (item of items.concat(items); track $index) {
          <span class="strip-item">{{ item }}</span>
          <span class="strip-sep" aria-hidden="true">✦</span>
        }
      </div>
    </div>
  `,
  styleUrl: './service-strip.component.scss'
})
export class ServiceStripComponent {
  items = ['Strategy', 'Branding', 'Design', 'Advertising', 'Social Media', 'SEO', 'Digital Marketing', 'Web Development', 'Video Production'];
}
