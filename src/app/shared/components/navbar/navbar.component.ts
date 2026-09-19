import { Component, inject, signal, computed, PLATFORM_ID, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  scroll = inject(ScrollService);

  menuOpen = signal(false);
  scrolled = computed(() => this.scroll.scrollY() > 60);

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/portfolio' },
    { label: 'Industries', path: '/industries' },
    { label: 'Insights', path: '/blog' },
    { label: 'PR & Communication', path: '/pr-communication' },
    { label: 'Contact', path: '/contact' },
  ];

  get isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin') || this.router.url.startsWith('/auth');
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    }
  }

  closeMenu() {
    this.menuOpen.set(false);
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = '';
  }

  @HostListener('window:keydown.escape')
  onEscape() { this.closeMenu(); }
}
