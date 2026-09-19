import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="cl-layout">
      <aside class="cl-sidebar">
        <div class="cl-brand">
          <i class="bi bi-infinity"></i>
          <span>Sync Bridge</span>
        </div>
        <nav class="cl-nav">
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
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .cl-layout { display: flex; height: 100vh; background: #f8f9fb; font-family: 'Inter', sans-serif; cursor: auto; * { cursor: auto; } }
    .cl-sidebar { width: 220px; min-width: 220px; background: #fff; border-right: 1px solid #e9ecef; display: flex; flex-direction: column; padding: 1.25rem 0; }
    .cl-brand { display: flex; align-items: center; gap: 0.6rem; padding: 0 1.25rem 1.5rem; font-weight: 700; font-size: 1rem; color: #0d6efd; i { font-size: 1.3rem; } }
    .cl-nav { flex: 1; padding: 0 0.75rem; }
    .cl-nav-link { display: flex; align-items: center; gap: 0.65rem; padding: 0.6rem 0.75rem; border-radius: 8px; color: #6c757d; font-size: 0.85rem; font-weight: 500; text-decoration: none; transition: all 0.2s; i { font-size: 1rem; } &:hover { background: #f0f4ff; color: #0d6efd; } &.active { background: #e8f0fe; color: #0d6efd; font-weight: 600; } }
    .cl-user { display: flex; align-items: center; gap: 0.6rem; padding: 1rem 1.25rem 0; border-top: 1px solid #e9ecef; }
    .cl-avatar { width: 32px; height: 32px; border-radius: 50%; background: #0d6efd; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; flex-shrink: 0; }
    .cl-user-info { flex: 1; min-width: 0; }
    .cl-user-name { font-size: 0.8rem; font-weight: 600; color: #212529; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .cl-user-role { font-size: 0.7rem; color: #6c757d; }
    .cl-logout { background: none; border: none; color: #6c757d; padding: 0.25rem; cursor: pointer !important; &:hover { color: #dc3545; } }
    .cl-main { flex: 1; overflow-y: auto; }
  `]
})
export class ClientLayoutComponent {
  user: ReturnType<AuthService['getCurrentUser']>;

  constructor(private auth: AuthService) {
    this.user = this.auth.getCurrentUser();
  }

  logout() { this.auth.logout(); }

  get initials(): string {
    const u = this.user;
    return `${u?.firstName?.charAt(0) || ''}${u?.lastName?.charAt(0) || ''}`.toUpperCase() || 'C';
  }
}
