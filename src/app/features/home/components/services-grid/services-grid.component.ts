import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.scss'
})
export class ServicesGridComponent {
  data = inject(DataService);
}
