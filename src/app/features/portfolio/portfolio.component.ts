import { Component, inject, signal, computed, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { CursorService } from '../../core/services/cursor.service';
import { AnimationService } from '../../core/services/animation.service';
import { PortfolioItem } from '../../core/models';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  data = inject(DataService);
  cursor = inject(CursorService);
  anim = inject(AnimationService);
  route = inject(ActivatedRoute);

  activeFilter = signal('all');
  lightboxItem = signal<PortfolioItem | null>(null);
  lightboxIndex = signal(0);

  filters = [
    { id: 'all', label: 'All Work' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'travel', label: 'Travel' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'nature', label: 'Nature' },
  ];

  filtered = computed(() =>
    this.activeFilter() === 'all'
      ? this.data.portfolioItems
      : this.data.portfolioItems.filter(i => i.category === this.activeFilter())
  );

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      if (p['category']) this.activeFilter.set(p['category']);
    });
    setTimeout(() => this.anim.observeAll(), 100);
  }

  setFilter(id: string) {
    this.activeFilter.set(id);
    setTimeout(() => this.anim.observeAll(), 50);
  }

  openLightbox(item: PortfolioItem) {
    this.lightboxItem.set(item);
    this.lightboxIndex.set(this.filtered().findIndex(({ id }) => id === item.id));
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxItem.set(null);
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = '';
  }

  prevItem() {
    const items = this.filtered();
    const idx = (this.lightboxIndex() - 1 + items.length) % items.length;
    this.lightboxIndex.set(idx);
    this.lightboxItem.set(items[idx]);
  }

  nextItem() {
    const items = this.filtered();
    const idx = (this.lightboxIndex() + 1) % items.length;
    this.lightboxIndex.set(idx);
    this.lightboxItem.set(items[idx]);
  }
}
