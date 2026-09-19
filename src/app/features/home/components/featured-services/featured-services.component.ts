import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-featured-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-services.component.html',
  styleUrl: './featured-services.component.scss'
})
export class FeaturedServicesComponent {
  data = inject(DataService);
  featured = this.data.services.filter(s => s.featured);
}
