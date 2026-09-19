import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { filter } from 'rxjs/operators';

interface NavItem { label: string; icon: string; route: string; }

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent implements OnInit {
  sidebarOpen = true;
  user: ReturnType<AuthService['getCurrentUser']>;
  currentPageTitle = 'Dashboard';

  mainNav: NavItem[] = [
    { label: 'Dashboard',  icon: 'bi-speedometer2',    route: '/admin/dashboard' },
    { label: 'Users',      icon: 'bi-people',          route: '/admin/users' },
    { label: 'Clients',    icon: 'bi-person-badge',    route: '/admin/clients' },
    { label: 'Projects',   icon: 'bi-kanban',          route: '/admin/projects' },
    { label: 'Tasks',      icon: 'bi-list-task',       route: '/admin/tasks' },
    { label: 'My Profile', icon: 'bi-person-circle',   route: '/admin/profile' },
  ];

  configNav: NavItem[] = [
    { label: 'Roles',               icon: 'bi-shield-check',       route: '/admin/roles' },
    { label: 'Workflow Steps',      icon: 'bi-diagram-3',          route: '/admin/workflow/steps' },
    { label: 'Workflow Templates',  icon: 'bi-layout-text-window', route: '/admin/workflow/templates' },
  ];

  private allNav = [...this.mainNav, ...this.configNav];

  constructor(private auth: AuthService, private router: Router) {
    this.user = this.auth.getCurrentUser();
  }

  ngOnInit() {
    this.updateTitle(this.router.url);
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.updateTitle(e.urlAfterRedirects);
    });
  }

  private updateTitle(url: string) {
    const match = this.allNav.find(n => url.startsWith(n.route));
    this.currentPageTitle = match ? match.label : 'Admin';
  }

  toggleSidebar() { this.sidebarOpen = !this.sidebarOpen; }
  logout() { this.auth.logout(); }

  get userInitials(): string {
    const u = this.user;
    if (!u) return 'U';
    return `${u.firstName?.charAt(0) || ''}${u.lastName?.charAt(0) || ''}`.toUpperCase();
  }
}
