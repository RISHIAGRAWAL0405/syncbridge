import { Component, OnInit, OnDestroy, inject, signal, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PrDataService, PrEvent, PR_CATEGORIES } from './pr-data.service';
import { AnimationService } from '../../core/services/animation.service';

export interface ReelItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
  tag: string;
  caption: string;
}

@Component({
  selector: 'app-pr-communication',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pr-communication.component.html',
  styleUrl: './pr-communication.component.scss'
})
export class PrCommunicationComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private anim = inject(AnimationService);
  private prData = inject(PrDataService);

  @ViewChild('reelSection') reelSectionRef?: ElementRef<HTMLElement>;

  categories = PR_CATEGORIES;
  activeCategory = signal('all');
  filteredEvents = signal<PrEvent[]>([]);
  featuredEvents: PrEvent[] = [];

  // Lightbox
  lightboxOpen = signal(false);
  lightboxImages: string[] = [];
  lightboxIndex = signal(0);

  // Counter animation
  counters = signal<{ num: string; suffix: string; label: string }[]>([]);
  private countersDone = false;
  private observer?: IntersectionObserver;

  // Reel
  reelPaused = false;
  readonly reelItems: ReelItem[] = [
    {
      id: 1,
      type: 'video',
      src: 'https://assets.mixkit.co/videos/4010/4010-720.mp4',
      poster: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
      alt: 'EVOKE Expo event',
      tag: 'Events',
      caption: 'EVOKE Expo — Connecting ideas that shape the future.'
    },
    {
      id: 2,
      type: 'video',
      src: 'https://assets.mixkit.co/videos/5765/5765-720.mp4',
      poster: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
      alt: 'Industry Connect Summit',
      tag: 'Conferences',
      caption: 'Industry Connect Summit — Where strategy meets opportunity.'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://assets.mixkit.co/videos/5498/5498-720.mp4',
      poster: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
      alt: 'Brand storytelling session',
      tag: 'PR',
      caption: 'Stories that move people — crafted with purpose.'
    },
    {
      id: 4,
      type: 'video',
      src: 'https://assets.mixkit.co/videos/3367/3367-720.mp4',
      poster: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
      alt: 'Partner Meet 2025',
      tag: 'Corporate',
      caption: 'Partner Meet 2025 — Celebrating shared success.'
    },
  ];

  ngOnInit(): void {
    this.featuredEvents = this.prData.getFeatured();
    this.filteredEvents.set(this.prData.getAll());
    this.counters.set(this.prData.stats.map(s => ({ ...s, num: '0' })));

    if (isPlatformBrowser(this.platformId)) {
      // Respect reduced-motion preference
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) this.reelPaused = true;

      setTimeout(() => {
        this.anim.observeAll();
        this.initCounterObserver();
      }, 100);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  setCategory(id: string): void {
    this.activeCategory.set(id);
    this.filteredEvents.set(this.prData.getByCategory(id));
    setTimeout(() => this.anim.observeAll(), 50);
  }

  openLightbox(images: string[], index: number): void {
    this.lightboxImages = images;
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = '';
  }

  prevLightbox(): void {
    this.lightboxIndex.update(i => (i - 1 + this.lightboxImages.length) % this.lightboxImages.length);
  }

  nextLightbox(): void {
    this.lightboxIndex.update(i => (i + 1) % this.lightboxImages.length);
  }

  onKeydown(e: KeyboardEvent): void {
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowLeft') this.prevLightbox();
    if (e.key === 'ArrowRight') this.nextLightbox();
  }

  private initCounterObserver(): void {
    const statsEl = document.querySelector('.pr-stats-section');
    if (!statsEl) return;
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !this.countersDone) {
        this.countersDone = true;
        this.animateCounters();
      }
    }, { threshold: 0.3 });
    this.observer.observe(statsEl);
  }

  private animateCounters(): void {
    const targets = this.prData.stats;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      this.counters.set(targets.map(s => ({
        ...s,
        num: Math.floor(ease * parseInt(s.num)).toString()
      })));
      if (progress < 1) requestAnimationFrame(tick);
      else this.counters.set(targets.map(s => ({ ...s })));
    };
    requestAnimationFrame(tick);
  }
}
