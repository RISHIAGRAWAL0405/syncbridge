import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../../core/services/data.service';
import { CursorService } from '../../../../core/services/cursor.service';
import { PortfolioItem } from '../../../../core/models';

@Component({
  selector: 'app-featured-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-gallery.component.html',
  styleUrl: './featured-gallery.component.scss'
})
export class FeaturedGalleryComponent implements OnInit {
  data = inject(DataService);
  cursor = inject(CursorService);
  lightboxItem = signal<PortfolioItem | null>(null);

  featured: PortfolioItem[] = [];

  ngOnInit() {
    this.featured = this.data.portfolioItems.filter((i: PortfolioItem) => i.featured).slice(0, 6);
  }

  openLightbox(item: PortfolioItem) { this.lightboxItem.set(item); }
  closeLightbox() { this.lightboxItem.set(null); }
}
