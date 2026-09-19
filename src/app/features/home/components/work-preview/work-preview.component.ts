import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-work-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './work-preview.component.html',
  styleUrl: './work-preview.component.scss'
})
export class WorkPreviewComponent {
  data = inject(DataService);
  preview = this.data.projects.slice(0, 4);
}
