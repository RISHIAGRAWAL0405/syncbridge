import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { StepLinkService } from '../../core/services/step-link.service';
import { ClientDashboardService, ClientDashboardDto, PendingLinkItem } from '../../core/services/client-dashboard.service';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {
  user: any = null;
  loading = true;
  data: ClientDashboardDto | null = null;

  // Donut chart
  readonly RADIUS = 54;
  readonly CIRC = 2 * Math.PI * this.RADIUS;

  constructor(
    private authService: AuthService,
    private dashService: ClientDashboardService,
    private stepLinkService: StepLinkService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.load();
  }

  load(): void {
    this.loading = true;
    this.dashService.getDashboard()
      .pipe(finalize(() => { this.loading = false; this.cdr.detectChanges(); }))
      .subscribe({
        next: res => { if (res.statusCode === 200) { this.data = res.data; } }
      });
  }

  // Donut segments: completed (green), in-progress (blue), overdue (red), not-started (gray)
  get donutSegments(): { color: string; dash: number; offset: number; label: string; count: number }[] {
    if (!this.data) return [];
    const total = this.data.totalTasks || 1;
    const segments = [
      { label: 'Completed', count: this.data.completedTasks, color: '#22c55e' },
      { label: 'In Progress', count: this.data.inProgressTasks, color: '#4f6ef7' },
      { label: 'Overdue', count: this.data.overdueTasks, color: '#ef4444' },
      { label: 'Not Started', count: Math.max(0, total - this.data.completedTasks - this.data.inProgressTasks - this.data.overdueTasks), color: '#cbd5e1' }
    ];
    let offset = 0;
    return segments.map(s => {
      const dash = (s.count / total) * this.CIRC;
      const seg = { ...s, dash, offset: this.CIRC - offset };
      offset += dash;
      return seg;
    });
  }

  get greeting(): string {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  }

  formatDate(d: string | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  statusLabel(s: string): string {
    return s?.replace(/_/g, ' ') || '—';
  }

  statusClass(s: string): string {
    const map: Record<string, string> = {
      COMPLETED: 'status-done', IN_PROGRESS: 'status-active',
      NEW: 'status-new', ON_HOLD: 'status-hold', CANCELLED: 'status-cancelled'
    };
    return map[s] || 'status-new';
  }

  linkTypeIcon(t: string): string {
    const map: Record<string, string> = {
      VIDEO: 'bi-play-circle-fill', IMAGE: 'bi-image-fill',
      FILE: 'bi-file-earmark-fill', OTHER: 'bi-link-45deg'
    };
    return map[t?.toUpperCase()] || 'bi-link-45deg';
  }

  approve(link: PendingLinkItem): void {
    this.stepLinkService.reviewLink(link.linkId, { status: 'APPROVED' }).subscribe({ next: () => this.load() });
  }

  reject(link: PendingLinkItem): void {
    const note = prompt('Reason for rejection (optional):') ?? '';
    this.stepLinkService.reviewLink(link.linkId, { status: 'REJECTED', status_note: note }).subscribe({ next: () => this.load() });
  }

  get initials(): string {
    return `${this.user?.firstName?.charAt(0) || ''}${this.user?.lastName?.charAt(0) || ''}`.toUpperCase() || 'C';
  }
}
