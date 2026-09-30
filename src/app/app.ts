import { Component, OnInit, inject, signal, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ScrollService } from './core/services/scroll.service';
import { AnimationService } from './core/services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private scroll = inject(ScrollService);
  private anim = inject(AnimationService);
  private router = inject(Router);

  transitioning = signal(false);
  isPublicRoute = signal(true);

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.transitioning.set(true);
        const url = e.url;
        this.isPublicRoute.set(!url.startsWith('/admin') && !url.startsWith('/client') && !url.startsWith('/auth'));
      }
      if (e instanceof NavigationEnd) {
        const url = e.urlAfterRedirects;
        this.isPublicRoute.set(!url.startsWith('/admin') && !url.startsWith('/client') && !url.startsWith('/auth'));
        if (this.isPublicRoute()) {
          this.scroll.init();
          window.scrollTo(0, 0);
        } else {
          this.scroll.destroy();
        }
        setTimeout(() => {
          this.transitioning.set(false);
          if (this.isPublicRoute()) this.anim.observeAll();
        }, 100);
      }
    });

    if (this.isPublicRoute()) {
      this.scroll.init();
      this.anim.initReveal();
      setTimeout(() => this.anim.observeAll());
    } else {
      this.scroll.destroy();
    }
  }
}
