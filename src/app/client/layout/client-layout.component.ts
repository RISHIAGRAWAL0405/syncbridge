import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="cl-layout">
      <aside class="cl-sidebar">
        <div class="cl-brand">
          <div class="cl-brand-icon"><i class="bi bi-infinity"></i></div>
          <span class="cl-brand-name">Sync Bridge</span>
        </div>
        <nav class="cl-nav">
          <span class="cl-nav-label">Main</span>
          <a class="cl-nav-link" routerLink="/client/dashboard" routerLinkActive="active">
            <i class="bi bi-speedometer2"></i><span>Dashboard</span>
          </a>
          <a class="cl-nav-link" routerLink="/client/calendar" routerLinkActive="active">
            <i class="bi bi-calendar3"></i><span>My Calendar</span>
          </a>
        </nav>
        <div class="cl-user">
          <div class="cl-avatar">{{ initials }}</div>
          <div class="cl-user-info">
            <div class="cl-user-name">{{ user?.firstName }} {{ user?.lastName }}</div>
            <div class="cl-user-role">Client</div>
          </div>
          <button class="cl-logout" (click)="logout()" title="Logout">
            <i class="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </aside>
      <div class="cl-main">
        <header class="cl-topbar">
          <span class="cl-page-title">{{ pageTitle }}</span>
          <div class="cl-topbar-avatar" title="{{ user?.firstName }} {{ user?.lastName }}">{{ initials }}</div>
        </header>
        <div class="cl-content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [
    `:host { display: block; height: 100vh; overflow: hidden; font-family: 'Inter', system-ui, sans-serif; cursor: auto; * { cursor: auto; } }
    .cl-layout { display: flex; height: 100vh; overflow: hidden; background: #f4f6fb; }
    .cl-sidebar { width: 248px; min-width: 248px; background: #0f1117; display: flex; flex-direction: column; overflow: hidden; flex-shrink: 0; }
    .cl-brand { height: 60px; display: flex; align-items: center; gap: 0.75rem; padding: 0 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }
    .cl-brand-icon { width: 32px; height: 32px; background: #4f6ef7; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; i { color: #fff; font-size: 1rem; } }
    .cl-brand-name { font-size: 0.95rem; font-weight: 700; color: #fff; white-space: nowrap; }
    .cl-nav { flex: 1; overflow-y: auto; padding: 1rem 0.75rem; }
    .cl-nav-label { display: block; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.3); padding: 0 0.5rem; margin-bottom: 0.4rem; }
    .cl-nav-link { display: flex; align-items: center; gap: 0.75rem; padding: 0.55rem 0.75rem; border-radius: 8px; color: rgba(255,255,255,0.55); font-size: 0.83rem; font-weight: 500; text-decoration: none; transition: all 0.18s ease; white-space: nowrap; i { font-size: 1rem; min-width: 1rem; } &:hover { background: rgba(255,255,255,0.07); color: #fff; } &.active { background: rgba(79,110,247,0.12); color: #7b9bff; font-weight: 600; i { color: #4f6ef7; } } }
    .cl-user { display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; border-top: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }
    .cl-avatar, .cl-topbar-avatar { width: 34px; height: 34px; border-radius: 50%; background: #4f6ef7; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; }
    .cl-user-info { flex: 1; min-width: 0; overflow: hidden; }
    .cl-user-name { font-size: 0.8rem; font-weight: 600; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .cl-user-role { font-size: 0.68rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.05em; }
    .cl-logout { background: none; border: none; color: rgba(255,255,255,0.35); padding: 0.35rem; border-radius: 6px; display: flex; cursor: pointer !important; &:hover { background: rgba(220,53,69,0.15); color: #ff6b6b; } }
    .cl-main { flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden; }
    .cl-topbar { height: 60px; background: #fff; border-bottom: 1px solid #e8ecf0; display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .cl-page-title { font-size: 0.95rem; font-weight: 600; color: #1d2330; }
    .cl-topbar-avatar { width: 32px; height: 32px; font-size: 0.7rem; }
    .cl-content { flex: 1; min-height: 0; overflow-y: auto; }
    router-outlet + * { flex: 1; min-height: 0; overflow-y: auto; }
    @media (max-width: 768px) { .cl-sidebar { width: 64px; min-width: 64px; } .cl-brand { padding: 0 1rem; } .cl-brand-name, .cl-nav-label, .cl-nav-link span, .cl-user-info, .cl-logout { display: none; } .cl-nav-link { justify-content: center; padding: 0.65rem; } .cl-user { justify-content: center; padding: 0.875rem 0.5rem; } }`
  ]
})
export class ClientLayoutComponent {
  user: ReturnType<AuthService['getCurrentUser']>;
  pageTitle = 'Dashboard';

  constructor(private auth: AuthService, private router: Router) {
    this.user = this.auth.getCurrentUser();
    // Update page title on navigation
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const url = this.router.url;
      if (url.includes('/client/dashboard')) this.pageTitle = 'Dashboard';
      else if (url.includes('/client/calendar')) this.pageTitle = 'My Calendar';
      else this.pageTitle = '';
    });
  }

  logout() { this.auth.logout(); }

  get initials(): string {
    const u = this.user;
    return `${u?.firstName?.charAt(0) || ''}${u?.lastName?.charAt(0) || ''}`.toUpperCase() || 'C';
  }
}
