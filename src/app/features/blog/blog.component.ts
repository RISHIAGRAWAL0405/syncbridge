import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { CursorService } from '../../core/services/cursor.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  data = inject(DataService);
  cursor = inject(CursorService);

  formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
