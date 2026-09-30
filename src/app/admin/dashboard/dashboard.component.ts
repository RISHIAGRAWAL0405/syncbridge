import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { StepLinkService } from '../../core/services/step-link.service';
import { AdminDashboardService, AdminDashboardDto, AdminPendingLink, StatusCount } from '../../core/services/admin-dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  user: ReturnType<AuthService['getCurrentUser']>;
  data: AdminDashboardDto | null = null;
  loading = true;

  // Donut chart constants
  readonly R = 54;
  readonly CIRC = 2 * Math.PI * this.R; // ≈ 339.3

  constructor(
    private auth: AuthService,
    private dashService: AdminDashboardService,
    private stepLinkService: StepLinkService
  ) {
    this.user = this.auth.getCurrentUser();
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.dashService.get().subscribe({
      next: res => { this.data = res.data; this.loading = false; this.cdr.markForCheck(); },
      error: () => { this.loading = false; this.cdr.markForCheck(); }
    });
  }

  // ── Task donut segments ────────────────────────────────────────────────────
  get taskDonutSegments(): { color: string; dash: number; offset: number; label: string; count: number }[] {
    if (!this.data) return [];
    const total = this.data.totalTasks || 1;
    const notStarted = Math.max(0, total - this.data.completedTasks - this.data.inProgressTasks - this.data.overdueTasks);
    const segs = [
      { label: 'Completed',   count: this.data.completedTasks,  color: '#22c55e' },
      { label: 'In Progress', count: this.data.inProgressTasks, color: '#4f6ef7' },
      { label: 'Overdue',     count: this.data.overdueTasks,    color: '#ef4444' },
      { label: 'Not Started', count: notStarted,                color: '#cbd5e1' },
    ];
    let offset = 0;
    return segs.map(s => {
      const dash = (s.count / total) * this.CIRC;
      const seg = { ...s, dash, offset: this.CIRC - offset };
      offset += dash;
      return seg;
    });
  }

  // ── Project status bar chart ───────────────────────────────────────────────
  get projectBars(): { label: string; count: number; pct: number; color: string }[] {
    if (!this.data?.projectsByStatus?.length) return [];
    const max = Math.max(...this.data.projectsByStatus.map(s => s.count), 1);
    const colors: Record<string, string> = {
      NEW: '#94a3b8', IN_PROGRESS: '#4f6ef7', ON_HOLD: '#f59e0b',
      COMPLETED: '#22c55e', CANCELLED: '#ef4444'
    };
    return this.data.projectsByStatus.map(s => ({
      label: s.status.replace(/_/g, ' '),
      count: s.count,
      pct: Math.round((s.count / max) * 100),
      color: colors[s.status] || '#94a3b8'
    }));
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  getStatusCount(status: string): number {
    return this.data?.projectsByStatus?.find(s => s.status === status)?.count ?? 0;
  }

  statusClass(s: string): string {
    const m: Record<string, string> = {
      COMPLETED: 'st-done', IN_PROGRESS: 'st-active',
      NEW: 'st-new', ON_HOLD: 'st-hold', CANCELLED: 'st-cancelled'
    };
    return m[s] || 'st-new';
  }

  linkTypeIcon(t: string): string {
    const m: Record<string, string> = {
      VIDEO: 'bi-play-circle-fill', IMAGE: 'bi-image-fill',
      FILE: 'bi-file-earmark-fill', OTHER: 'bi-link-45deg'
    };
    return m[t?.toUpperCase()] || 'bi-link-45deg';
  }

  formatDate(d: string | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  isOverdue(endDate: string | null): boolean {
    return !!endDate && new Date(endDate) < new Date();
  }

  reviewLink(link: AdminPendingLink, status: 'APPROVED' | 'REJECTED'): void {
    const note = status === 'REJECTED' ? (prompt('Rejection reason (optional):') ?? '') : undefined;
    this.stepLinkService.reviewLink(link.linkId, { status, status_note: note }).subscribe({ next: () => this.load() });
  }

  get greeting(): string {
    const h = new Date().getHours();
    return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  }

  get initials(): string {
    return `${this.user?.firstName?.charAt(0) || ''}${this.user?.lastName?.charAt(0) || ''}`.toUpperCase() || 'A';
  }
}
