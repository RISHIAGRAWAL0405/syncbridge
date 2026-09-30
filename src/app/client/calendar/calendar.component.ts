import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { TaskService } from '../../core/services/task.service';
import { StepLinkService } from '../../core/services/step-link.service';
import { CalendarTaskDto, TaskWorkflowStepDto, StepLinkDto } from '../../core/models/api.models';

interface CalendarEntry {
  task: CalendarTaskDto;
  step?: TaskWorkflowStepDto;
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  entries: CalendarEntry[];
}

@Component({
  selector: 'app-client-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cal-page">
      <!-- Header -->
      <div class="cal-header">
        <div class="cal-title">
          <h5 class="mb-0"><i class="bi bi-calendar3-week me-2"></i>My Task Calendar</h5>
          <span class="cal-subtitle">Track workflow step progress across your projects</span>
        </div>
        <div class="cal-nav">
          <button class="cal-nav-btn" (click)="prevMonth()"><i class="bi bi-chevron-left"></i></button>
          <span class="cal-month-label">{{ monthLabel }}</span>
          <button class="cal-nav-btn" (click)="nextMonth()"><i class="bi bi-chevron-right"></i></button>
          <button class="cal-today-btn" (click)="goToday()">Today</button>
        </div>
      </div>

      <!-- Legend -->
      <div class="cal-legend">
        <span class="legend-item"><i class="bi bi-circle-fill legend-not_started"></i>Not Started</span>
        <span class="legend-item"><i class="bi bi-arrow-repeat legend-in_progress"></i>In Progress</span>
        <span class="legend-item"><i class="bi bi-check-circle-fill legend-completed"></i>Completed</span>
        <span class="legend-item"><i class="bi bi-pause-circle-fill legend-on_hold"></i>On Hold</span>
        <span class="legend-item"><i class="bi bi-dash-circle-fill legend-skipped"></i>Skipped</span>
        <span class="legend-item"><i class="bi bi-x-circle-fill legend-cancelled"></i>Cancelled</span>
      </div>

      <!-- Loading -->
      <div *ngIf="loading" class="cal-loading">
        <div class="spinner-border spinner-border-sm text-primary"></div>
        <span>Loading tasks...</span>
      </div>

      <!-- Calendar Grid -->
      <div *ngIf="!loading" class="cal-grid-wrap">
        <!-- Day headers -->
        <div class="cal-day-headers">
          <div *ngFor="let d of dayNames" class="cal-day-header">{{ d }}</div>
        </div>
        <!-- Weeks -->
        <div class="cal-grid">
          <div *ngFor="let day of calendarDays"
               class="cal-cell"
               [class.other-month]="!day.isCurrentMonth"
               [class.today]="isToday(day.date)">
            <div class="cal-date-num">{{ day.date.getDate() }}</div>
            <div class="cal-tasks">
              <div *ngFor="let entry of day.entries | slice:0:3"
                   class="cal-task-chip"
                   [class]="'status-' + getStatusKey(entry.step?.status || entry.task.status)">
                <div class="chip-main" (click)="openTask(entry.task)">
                  <i class="bi chip-icon" [class]="statusIcon(entry.step?.status || entry.task.status)"></i>
                  <div class="chip-text">
                    <span class="chip-task">{{ entry.task.task_name }}</span>
                    <span *ngIf="entry.step?.step_name" class="chip-step">{{ entry.step?.step_name }}</span>
                  </div>
                </div>
                <button *ngIf="entry.step && (linkCountMap[entry.step.task_workflow_step_id] ?? 0) > 0"
                        class="chip-link-btn has-links"
                        (click)="openLinksModal(entry.step!); $event.stopPropagation()"
                        [title]="linkCountMap[entry.step.task_workflow_step_id] + ' attachment(s)'">
                  <i class="bi bi-paperclip"></i>
                  <span class="chip-link-count">{{ linkCountMap[entry.step.task_workflow_step_id] }}</span>
                </button>
              </div>
              <div class="cal-more" *ngIf="day.entries.length > 3" (click)="openDayOverflow(day)">
                +{{ day.entries.length - 3 }} more
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Task Detail Modal -->
      <div *ngIf="selectedTask" class="modal-backdrop-custom" (click)="closeTask()"></div>
      <div *ngIf="selectedTask" class="cal-modal">
        <div class="cal-modal-header">
          <div>
            <div class="cal-modal-title">{{ selectedTask.task_name }}</div>
            <div class="cal-modal-project"><i class="bi bi-kanban me-1"></i>{{ selectedTask.project_name }}</div>
          </div>
          <button class="cal-modal-close" (click)="closeTask()"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="cal-modal-body">
          <div class="cal-modal-meta">
            <span class="badge status-badge" [class]="'badge-' + getStatusKey(selectedTask.status)">
              <i class="bi" [class]="statusIcon(selectedTask.status)"></i>
              {{ selectedTask.status.replace('_', ' ') }}
            </span>
            <span class="cal-meta-item" *ngIf="selectedTask.start_date"><i class="bi bi-calendar-event me-1"></i>{{ selectedTask.start_date | date:'mediumDate' }}</span>
            <span class="cal-meta-item" *ngIf="selectedTask.end_date"><i class="bi bi-calendar-check me-1"></i>{{ selectedTask.end_date | date:'mediumDate' }}</span>
          </div>
          <div *ngIf="selectedTask.description" class="cal-modal-desc">{{ selectedTask.description }}</div>

          <!-- Progress -->
          <div class="cal-progress-wrap">
            <div class="cal-progress-label">
              <span>Progress</span>
              <span>{{ selectedTask.completed_steps }}/{{ selectedTask.total_steps }} steps</span>
            </div>
            <div class="progress" style="height:6px">
              <div class="progress-bar" [class]="'progress-' + getStatusKey(selectedTask.status)" [style.width.%]="progressPct(selectedTask)"></div>
            </div>
          </div>

          <!-- Workflow Steps -->
          <div class="cal-steps-title">Workflow Steps</div>
          <div class="cal-steps">
            <div *ngFor="let step of selectedTask.workflow_steps" class="cal-step" [class]="'step-' + getStatusKey(step.status)">
              <div class="step-icon" [class]="'step-icon-' + getStatusKey(step.status)">
                <i class="bi" [class]="statusIcon(step.status)"></i>
              </div>
              <div class="step-info">
                <div class="step-name">{{ step.step_name }}</div>
                <div class="step-dates" *ngIf="step.start_date || step.end_date">
                  <span *ngIf="step.start_date">{{ step.start_date | date:'MMM d' }}</span>
                  <span *ngIf="step.start_date && step.end_date"> – </span>
                  <span *ngIf="step.end_date">{{ step.end_date | date:'MMM d' }}</span>
                </div>
              </div>
              <button *ngIf="step.links && step.links.length > 0"
                      class="step-links-btn"
                      (click)="openLinksModal(step); $event.stopPropagation()">
                <i class="bi bi-paperclip"></i> {{ step.links.length }}
              </button>
              <span class="step-badge badge" [class]="'badge-' + getStatusKey(step.status)">{{ (step.status || 'NOT_STARTED').replace('_', ' ') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Links Modal -->
      <div *ngIf="linksModalStep" class="modal-backdrop-custom links-backdrop" (click)="closeLinksModal()"></div>
      <div *ngIf="linksModalStep" class="cal-modal links-panel">
        <div class="cal-modal-header">
          <div>
            <div class="cal-modal-title"><i class="bi bi-paperclip me-2 text-primary"></i>Attachments</div>
            <div class="cal-modal-project">{{ linksModalStep.step_name }}</div>
          </div>
          <button class="cal-modal-close" (click)="closeLinksModal()"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="cal-modal-body">
          <div *ngIf="linksLoading" class="links-loading">
            <div class="spinner-border spinner-border-sm text-primary"></div>
            <span>Loading...</span>
          </div>
          <div *ngIf="!linksLoading && (!linksModalStep.links || linksModalStep.links.length === 0)" class="links-empty">
            <i class="bi bi-inbox"></i><span>No attachments for this step</span>
          </div>
          <div class="links-list">
            <div *ngFor="let link of linksModalStep.links" class="link-item"
                 [class.link-item-approval]="link.category === 'Approval'">
              <div class="link-type-icon" [class]="'link-type-' + link.link_type.toLowerCase()">
                <i class="bi" [class]="getLinkTypeIcon(link.link_type)"></i>
              </div>
              <div class="link-info">
                <div class="link-title-row">
                  <span class="link-title">{{ link.title }}</span>
                  <span *ngIf="link.category" class="link-category-tag">{{ link.category }}</span>
                </div>
                <div *ngIf="link.description" class="link-desc">{{ link.description }}</div>
                <a [href]="link.url" target="_blank" rel="noopener" class="link-url">
                  <i class="bi bi-box-arrow-up-right me-1"></i>Open Link
                </a>
                <div *ngIf="link.category === 'Approval'" class="link-review-actions">
                  <button class="link-action-btn approve"
                          [class.active]="link.status === 'APPROVED'"
                          (click)="reviewLink(link, 'APPROVED')"
                          [disabled]="reviewingLinkId === link.link_id || link.status === 'APPROVED'">
                    <i class="bi bi-check-lg"></i> Approve
                  </button>
                  <button class="link-action-btn reject"
                          [class.active]="link.status === 'REJECTED'"
                          (click)="reviewLink(link, 'REJECTED')"
                          [disabled]="reviewingLinkId === link.link_id || link.status === 'REJECTED'">
                    <i class="bi bi-x-lg"></i> Reject
                  </button>
                </div>
              </div>
              <span class="link-status-badge" [class]="'link-status-' + link.status.toLowerCase()">
                <i class="bi"
                   [class.bi-clock]="link.status === 'PENDING'"
                   [class.bi-check-circle-fill]="link.status === 'APPROVED'"
                   [class.bi-x-circle-fill]="link.status === 'REJECTED'"></i>
                {{ link.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cal-page { padding: 1.5rem; min-height: 100vh; background: #f8f9fb; overflow-y: auto; max-height: 100vh; }

    .cal-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem; }
    .cal-title h5 { font-weight: 700; color: #212529; display: flex; align-items: center; }
    .cal-title h5 i { color: #4f6ef7; }
    .cal-subtitle { font-size: 0.8rem; color: #6c757d; }
    .cal-nav { display: flex; align-items: center; gap: 0.5rem; }
    .cal-nav-btn { background: #fff; border: 1px solid #dee2e6; border-radius: 6px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer !important; color: #495057; &:hover { background: #f0f4ff; color: #0d6efd; } }
    .cal-month-label { font-weight: 600; font-size: 0.95rem; color: #212529; min-width: 140px; text-align: center; }
    .cal-today-btn { background: #0d6efd; color: #fff; border: none; border-radius: 6px; padding: 0.3rem 0.75rem; font-size: 0.8rem; font-weight: 500; cursor: pointer !important; &:hover { background: #0b5ed7; } }

    .cal-legend { display: flex; flex-wrap: wrap; gap: 1rem; background: #fff; border: 1px solid #e9ecef; border-radius: 10px; padding: 0.6rem 1rem; margin-bottom: 1rem; }
    .legend-item { display: flex; align-items: center; gap: 0.35rem; font-size: 0.74rem; color: #495057; font-weight: 500; }
    .legend-item i { font-size: 0.7rem; }
    .legend-not_started { color: #94a3b8; }
    .legend-in_progress { color: #d97706; }
    .legend-completed { color: #22c55e; }
    .legend-on_hold { color: #a855f7; }
    .legend-skipped { color: #64748b; }
    .legend-cancelled { color: #ef4444; }

    .cal-loading { display: flex; align-items: center; gap: 0.5rem; color: #6c757d; padding: 2rem; }

    .cal-grid-wrap { background: #fff; border-radius: 12px; border: 1px solid #e9ecef; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.03); }
    .cal-day-headers { display: grid; grid-template-columns: repeat(7, 1fr); background: #f8f9fb; border-bottom: 1px solid #e9ecef; }
    .cal-day-header { padding: 0.6rem; text-align: center; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6c757d; }
    .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
    .cal-cell { min-height: 118px; border-right: 1px solid #f0f0f0; border-bottom: 1px solid #f0f0f0; padding: 0.4rem; transition: background 0.15s; &:nth-child(7n) { border-right: none; } &:hover { background: #fafbff; } }
    .cal-cell.other-month { background: #fafafa; .cal-date-num { color: #ced4da; } }
    .cal-cell.today { background: #f0f4ff; .cal-date-num { background: #0d6efd; color: #fff; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; } }
    .cal-date-num { font-size: 0.8rem; font-weight: 600; color: #495057; margin-bottom: 0.3rem; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; }
    .cal-tasks { display: flex; flex-direction: column; gap: 3px; }
    .cal-task-chip { display: flex; align-items: center; gap: 2px; border-radius: 5px; font-size: 0.7rem; font-weight: 600; transition: all 0.15s; border-left: 2.5px solid transparent; overflow: hidden; }
    .chip-main { display: flex; align-items: center; gap: 4px; padding: 3px 5px; flex: 1; min-width: 0; cursor: pointer !important; &:hover { filter: brightness(0.94); } }
    .chip-icon { font-size: 0.68rem; flex-shrink: 0; }
    .chip-text { display: flex; flex-direction: column; min-width: 0; }
    .chip-task { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.68rem; font-weight: 600; line-height: 1.2; }
    .chip-step { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.62rem; font-weight: 400; opacity: 0.8; line-height: 1.2; }
    .chip-link-btn { display: inline-flex; align-items: center; gap: 2px; padding: 2px 4px; background: transparent; border: none; border-left: 1px solid rgba(0,0,0,0.08); color: #94a3b8; font-size: 0.62rem; cursor: pointer !important; flex-shrink: 0; transition: all 0.15s; align-self: stretch; &:hover { color: #4f6ef7; background: rgba(79,110,247,0.08); } &.has-links { color: #4f6ef7; } }
    .chip-link-count { font-size: 0.6rem; font-weight: 700; }
    .cal-more { font-size: 0.66rem; font-weight: 600; color: #6c757d; padding: 1px 6px; cursor: pointer !important; &:hover { color: #0d6efd; text-decoration: underline; } }

    // Unified status palette (steps: NOT_STARTED/IN_PROGRESS/COMPLETED/SKIPPED, tasks: NEW/IN_PROGRESS/ON_HOLD/COMPLETED/CANCELLED)
    .status-not_started, .status-new { background: #f8f9fa; color: #64748b; border-left-color: #94a3b8; }
    .status-in_progress { background: #fff8e1; color: #92650c; border-left-color: #d97706; }
    .status-completed { background: #f0fdf4; color: #15803d; border-left-color: #22c55e; }
    .status-on_hold { background: #faf5ff; color: #7e22ce; border-left-color: #a855f7; }
    .status-cancelled { background: #fff1f2; color: #be123c; border-left-color: #ef4444; }
    .status-skipped { background: #f1f5f9; color: #475569; border-left-color: #94a3b8; }

    /* Modal */
    .modal-backdrop-custom { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 1040; backdrop-filter: blur(2px); }
    .cal-modal { position: fixed; top: 0; right: 0; height: 100vh; width: 420px; background: #fff; z-index: 1050; display: flex; flex-direction: column; box-shadow: -4px 0 24px rgba(0,0,0,0.12); }
    .cal-modal-header { display: flex; align-items: flex-start; justify-content: space-between; padding: 1.25rem 1.25rem 1rem; border-bottom: 1px solid #e9ecef; }
    .cal-modal-title { font-size: 1rem; font-weight: 700; color: #212529; }
    .cal-modal-project { font-size: 0.8rem; color: #6c757d; margin-top: 0.2rem; }
    .cal-modal-close { background: none; border: none; color: #6c757d; font-size: 1rem; cursor: pointer !important; padding: 0.25rem; &:hover { color: #212529; } }
    .cal-modal-body { flex: 1; overflow-y: auto; padding: 1.25rem; }
    .cal-modal-meta { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
    .cal-meta-item { font-size: 0.78rem; color: #6c757d; }
    .cal-modal-desc { font-size: 0.85rem; color: #495057; background: #f8f9fa; border-radius: 8px; padding: 0.75rem; margin-bottom: 1rem; }
    .cal-progress-wrap { margin-bottom: 1.25rem; }
    .cal-progress-label { display: flex; justify-content: space-between; font-size: 0.78rem; color: #6c757d; margin-bottom: 0.4rem; }
    .cal-steps-title { font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6c757d; margin-bottom: 0.75rem; }
    .cal-steps { display: flex; flex-direction: column; gap: 0.5rem; max-height: 400px; overflow-y: auto; }
    .cal-step { display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 0.75rem; border-radius: 8px; background: #f8f9fa; border-left: 3px solid #dee2e6; }
    .cal-step.step-in_progress { background: #fff8e1; border-left-color: #d97706; }
    .cal-step.step-completed { background: #f0fdf4; border-left-color: #22c55e; }
    .cal-step.step-skipped { background: #f8f9fa; border-left-color: #94a3b8; opacity: 0.7; }
    .step-icon { width: 28px; height: 28px; border-radius: 50%; background: #e9ecef; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; flex-shrink: 0; color: #6c757d; }
    .step-icon-in_progress { background: #fff3cd; color: #d97706; }
    .step-icon-completed { background: #dcfce7; color: #22c55e; }
    .step-icon-skipped { background: #e2e8f0; color: #64748b; }
    .step-info { flex: 1; min-width: 0; }
    .step-name { font-size: 0.83rem; font-weight: 500; color: #212529; }
    .step-dates { font-size: 0.72rem; color: #6c757d; margin-top: 1px; }
    .step-badge { font-size: 0.65rem; }

    .status-badge { display: inline-flex; align-items: center; gap: 0.3rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.03em; padding: 0.3rem 0.6rem; }
    .badge-not_started, .badge-new { background: #f1f5f9 !important; color: #64748b !important; }
    .badge-in_progress { background: #fff3cd !important; color: #92650c !important; }
    .badge-completed { background: #dcfce7 !important; color: #15803d !important; }
    .badge-on_hold { background: #f3e8ff !important; color: #7e22ce !important; }
    .badge-cancelled { background: #ffe4e6 !important; color: #be123c !important; }
    .badge-skipped { background: #e2e8f0 !important; color: #475569 !important; }

    .progress-not_started, .progress-new { background: #94a3b8; }
    .progress-in_progress { background: #d97706; }
    .progress-completed { background: #22c55e; }
    .progress-on_hold { background: #a855f7; }
    .progress-cancelled { background: #ef4444; }

    @media (max-width: 768px) { .cal-modal { width: 100%; } }

    .chip-link-icon { font-size: 0.62rem; opacity: 0.7; flex-shrink: 0; margin-left: auto; }
    .step-links-btn { display: inline-flex; align-items: center; gap: 3px; background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 5px; color: #4f6ef7; font-size: 0.7rem; font-weight: 600; padding: 2px 7px; cursor: pointer !important; margin-right: 4px; transition: all 0.15s; &:hover { background: #4f6ef7; color: #fff; border-color: #4f6ef7; } }
    .links-backdrop { z-index: 1060; }
    .links-panel { z-index: 1070 !important; }
    .links-list { display: flex; flex-direction: column; gap: 0.5rem; }
    .links-loading { display: flex; align-items: center; gap: 0.5rem; color: #6c757d; padding: 1rem 0; }
    .links-empty { display: flex; flex-direction: column; align-items: center; gap: 0.4rem; color: #adb5bd; padding: 2rem 0; font-size: 0.85rem; i { font-size: 1.8rem; } }
    .links-modal { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 460px; max-width: 95vw; max-height: 80vh; background: #fff; border-radius: 14px; z-index: 1070; display: flex; flex-direction: column; box-shadow: 0 8px 40px rgba(0,0,0,0.18); }
    .links-modal-header { display: flex; align-items: flex-start; justify-content: space-between; padding: 1rem 1.25rem 0.85rem; border-bottom: 1px solid #e9ecef; }
    .links-modal-title { font-size: 0.95rem; font-weight: 700; color: #212529; display: flex; align-items: center; }
    .links-modal-step { font-size: 0.78rem; color: #6c757d; margin-top: 0.15rem; }
    .links-modal-body { flex: 1; overflow-y: auto; padding: 1rem 1.25rem; display: flex; flex-direction: column; gap: 0.6rem; }
    .links-loading { display: flex; align-items: center; gap: 0.5rem; color: #6c757d; padding: 1rem 0; }
    .links-empty { display: flex; align-items: center; gap: 0.5rem; color: #adb5bd; padding: 1.5rem 0; font-size: 0.85rem; justify-content: center; }
    .link-item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.85rem; border-radius: 10px; border: 1px solid #e9ecef; background: #fafafa; }
    .link-item-approval { border-color: #c7d2fe; background: #f5f7ff; }
    .link-type-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
    .link-type-video { background: #fff1f2; color: #ef4444; }
    .link-type-image { background: #f0fdf4; color: #22c55e; }
    .link-type-file { background: #fffbeb; color: #d97706; }
    .link-type-other { background: #eff6ff; color: #3b82f6; }
    .link-info { flex: 1; min-width: 0; }
    .link-title-row { display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 0.2rem; }
    .link-title { font-size: 0.85rem; font-weight: 600; color: #212529; }
    .link-category-tag { font-size: 0.62rem; font-weight: 700; background: #eef2ff; color: #4f6ef7; border: 1px solid #c7d2fe; border-radius: 20px; padding: 1px 7px; }
    .link-desc { font-size: 0.75rem; color: #6c757d; margin-bottom: 0.25rem; }
    .link-url { display: inline-flex; align-items: center; font-size: 0.75rem; color: #4f6ef7; text-decoration: none; &:hover { text-decoration: underline; } }
    .link-review-actions { display: flex; gap: 0.4rem; margin-top: 0.5rem; }
    .link-action-btn { display: inline-flex; align-items: center; gap: 4px; border-radius: 6px; font-size: 0.73rem; font-weight: 600; padding: 4px 11px; cursor: pointer !important; transition: all 0.15s; border: 1px solid transparent; &.approve { background: #f0fdf4; color: #15803d; border-color: #86efac; &:hover:not(:disabled):not(.active) { background: #22c55e; color: #fff; } &.active { background: #22c55e; color: #fff; border-color: #22c55e; } } &.reject { background: #fff1f2; color: #be123c; border-color: #fca5a5; &:hover:not(:disabled):not(.active) { background: #ef4444; color: #fff; } &.active { background: #ef4444; color: #fff; border-color: #ef4444; } } &:disabled { opacity: 0.45; cursor: not-allowed !important; } }
    .link-status-badge { display: inline-flex; align-items: center; gap: 3px; font-size: 0.65rem; font-weight: 700; padding: 3px 8px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.04em; align-self: flex-start; flex-shrink: 0; white-space: nowrap; }
    .link-status-pending { background: #fff3cd; color: #92650c; }
    .link-status-approved { background: #dcfce7; color: #15803d; }
    .link-status-rejected { background: #ffe4e6; color: #be123c; }
  `]
})
export class ClientCalendarComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  private stepLinkService = inject(StepLinkService);

  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: CalendarDay[] = [];
  tasks: CalendarTaskDto[] = [];
  loading = false;
  selectedTask: CalendarTaskDto | null = null;
  linksModalStep: TaskWorkflowStepDto | null = null;
  linksLoading = false;
  reviewingLinkId: string | null = null;
  linkCountMap: Record<string, number> = {};

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth() + 1;

  constructor(private taskService: TaskService) {}

  ngOnInit() { this.loadTasks(); }

  get monthLabel(): string {
    return new Date(this.currentYear, this.currentMonth - 1, 1)
      .toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  loadTasks() {
    this.loading = true;
    this.taskService.getCalendarTasks(this.currentYear, this.currentMonth)
      .pipe(finalize(() => this.finishLoading()))
      .subscribe({
        next: res => {
          this.tasks = Array.isArray(res.data) ? res.data : [];
          this.buildCalendar();
          this.loadLinkCounts();
          this.notifyView();
        },
        error: () => {
          this.buildCalendar();
          this.notifyView();
        }
      });
  }

  private finishLoading(): void {
    queueMicrotask(() => {
      this.loading = false;
      this.notifyView();
    });
  }

  private notifyView(): void {
    this.cdr.markForCheck();
  }

  buildCalendar() {
    const year = this.currentYear;
    const month = this.currentMonth;
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const days: CalendarDay[] = [];

    // Fill leading days from prev month
    for (let i = 0; i < firstDay.getDay(); i++) {
      const d = new Date(year, month - 1, -firstDay.getDay() + i + 1);
      days.push({ date: d, isCurrentMonth: false, entries: [] });
    }

    // Current month days
    for (let d = 1; d <= lastDay.getDate(); d++) {
      const date = new Date(year, month - 1, d);
      days.push({ date, isCurrentMonth: true, entries: this.getEntriesForDay(date) });
    }

    // Fill trailing days
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(year, month, i);
      days.push({ date: d, isCurrentMonth: false, entries: [] });
    }

    this.calendarDays = days;
  }

  // Prefer showing individual workflow steps (each has its own date range); fall back to the
  // task's own start/end when it has no dated steps.
  getEntriesForDay(date: Date): CalendarEntry[] {
    const entries: CalendarEntry[] = [];
    for (const task of this.tasks) {
      const datedSteps = (task.workflow_steps || []).filter(s => s.start_date && s.end_date);
      if (datedSteps.length > 0) {
        for (const step of datedSteps) {
          if (this.isDateInRange(date, step.start_date, step.end_date)) {
            entries.push({ task, step });
          }
        }
      } else if (this.isDateInRange(date, task.start_date, task.end_date)) {
        entries.push({ task });
      }
    }
    return entries;
  }

  private isDateInRange(date: Date, startStr: string | null, endStr: string | null): boolean {
    if (!startStr || !endStr) return false;
    const start = new Date(startStr);
    const end = new Date(endStr);
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    return date >= start && date <= end;
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  prevMonth() {
    if (this.currentMonth === 1) { this.currentMonth = 12; this.currentYear--; }
    else this.currentMonth--;
    this.loadTasks();
  }

  nextMonth() {
    if (this.currentMonth === 12) { this.currentMonth = 1; this.currentYear++; }
    else this.currentMonth++;
    this.loadTasks();
  }

  goToday() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth() + 1;
    this.loadTasks();
  }

  openTask(task: CalendarTaskDto) { this.selectedTask = task; }
  closeTask() { this.selectedTask = null; this.linksModalStep = null; }

  loadLinkCounts() {
    const stepIds = this.tasks.flatMap(t => (t.workflow_steps || []).map(s => s.task_workflow_step_id));
    const unique = [...new Set(stepIds)];
    unique.forEach(stepId => {
      this.stepLinkService.getLinksByStep(stepId).subscribe({
        next: res => {
          const count = Array.isArray(res.data) ? res.data.length : 0;
          if (count > 0) {
            this.linkCountMap = { ...this.linkCountMap, [stepId]: count };
            this.notifyView();
          }
        }
      });
    });
  }

  openLinksModal(step: TaskWorkflowStepDto) {
    this.linksModalStep = step;
    this.linksLoading = true;
    this.stepLinkService.getLinksByStep(step.task_workflow_step_id)
      .pipe(finalize(() => { this.linksLoading = false; this.cdr.markForCheck(); }))
      .subscribe({ next: res => { step.links = Array.isArray(res.data) ? res.data : []; this.cdr.markForCheck(); } });
  }

  closeLinksModal() { this.linksModalStep = null; }

  reviewLink(link: StepLinkDto, status: 'APPROVED' | 'REJECTED') {
    this.reviewingLinkId = link.link_id;
    this.stepLinkService.reviewLink(link.link_id, { status })
      .pipe(finalize(() => { this.reviewingLinkId = null; this.cdr.markForCheck(); }))
      .subscribe({
        next: () => {
          link.status = status;
          this.cdr.markForCheck();
        }
      });
  }

  openDayOverflow(day: CalendarDay) {
    if (day.entries.length > 0) this.openTask(day.entries[0].task);
  }

  progressPct(task: CalendarTaskDto): number {
    return task.total_steps === 0 ? 0 : Math.floor((task.completed_steps / task.total_steps) * 100);
  }

  getStatusKey(status?: string): string {
    return (status || 'not_started').toLowerCase();
  }

  statusIcon(status?: string): string {
    const map: Record<string, string> = {
      'NOT_STARTED': 'bi-circle',
      'NEW': 'bi-circle',
      'IN_PROGRESS': 'bi-arrow-repeat',
      'COMPLETED': 'bi-check-circle-fill',
      'ON_HOLD': 'bi-pause-circle-fill',
      'CANCELLED': 'bi-x-circle-fill',
      'SKIPPED': 'bi-dash-circle-fill'
    };
    return map[status || 'NOT_STARTED'] || 'bi-circle';
  }

  getLinkTypeIcon(type: string): string {
    const map: Record<string, string> = {
      VIDEO: 'bi-play-circle-fill',
      IMAGE: 'bi-image-fill',
      FILE: 'bi-file-earmark-fill',
      OTHER: 'bi-link-45deg'
    };
    return map[type] || 'bi-link-45deg';
  }
}
