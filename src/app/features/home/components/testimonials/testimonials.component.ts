import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  data = inject(DataService);
  active = signal(0);

  prev() { this.active.update(v => (v - 1 + this.data.testimonials.length) % this.data.testimonials.length); }
  next() { this.active.update(v => (v + 1) % this.data.testimonials.length); }
  goTo(i: number) { this.active.set(i); }
}
