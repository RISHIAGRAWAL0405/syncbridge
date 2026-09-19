import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../core/services/task.service';
import { CalendarTaskDto, TaskWorkflowStepDto } from '../../core/models/api.models';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  tasks: CalendarTaskDto[];
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
          <h5 class="mb-0">My Task Calendar</h5>
          <span class="cal-subtitle">View your ongoing tasks by date</span>
        </div>
        <div class="cal-nav">
          <button class="cal-nav-btn" (click)="prevMonth()"><i class="bi bi-chevron-left"></i></button>
          <span class="cal-month-label">{{ monthLabel }}</span>
          <button class="cal-nav-btn" (click)="nextMonth()"><i class="bi bi-chevron-right"></i></button>
          <button class="cal-today-btn" (click)="goToday()">Today</button>
        </div>
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
              <div *ngFor="let task of day.tasks"
                   class="cal-task-chip"
                   [class]="'status-' + task.status.toLowerCase()"
                   (click)="openTask(task)">
                <span class="chip-dot"></span>
                <span class="chip-name">{{ task.task_name }}</span>
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
            <span class="badge" [class]="statusBadge(selectedTask.status)">{{ selectedTask.status.replace('_', ' ') }}</span>
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
              <div class="progress-bar bg-primary" [style.width.%]="progressPct(selectedTask)"></div>
            </div>
          </div>

          <!-- Workflow Steps -->
          <div class="cal-steps-title">Workflow Steps</div>
          <div class="cal-steps">
            <div *ngFor="let step of selectedTask.workflow_steps" class="cal-step" [class]="'step-' + step.status?.toLowerCase()">
              <div class="step-icon">
                <i class="bi" [class]="stepIcon(step.status)"></i>
              </div>
              <div class="step-info">
                <div class="step-name">{{ step.step_name }}</div>
                <div class="step-dates" *ngIf="step.start_date || step.end_date">
                  <span *ngIf="step.start_date">{{ step.start_date | date:'MMM d' }}</span>
                  <span *ngIf="step.start_date && step.end_date"> – </span>
                  <span *ngIf="step.end_date">{{ step.end_date | date:'MMM d' }}</span>
                </div>
              </div>
              <span class="step-badge badge" [class]="statusBadge(step.status || 'NOT_STARTED')">{{ (step.status || 'NOT_STARTED').replace('_', ' ') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cal-page { padding: 1.5rem; min-height: 100vh; background: #f8f9fb; }

    .cal-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem; }
    .cal-title h5 { font-weight: 700; color: #212529; }
    .cal-subtitle { font-size: 0.8rem; color: #6c757d; }
    .cal-nav { display: flex; align-items: center; gap: 0.5rem; }
    .cal-nav-btn { background: #fff; border: 1px solid #dee2e6; border-radius: 6px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer !important; color: #495057; &:hover { background: #f0f4ff; color: #0d6efd; } }
    .cal-month-label { font-weight: 600; font-size: 0.95rem; color: #212529; min-width: 140px; text-align: center; }
    .cal-today-btn { background: #0d6efd; color: #fff; border: none; border-radius: 6px; padding: 0.3rem 0.75rem; font-size: 0.8rem; font-weight: 500; cursor: pointer !important; &:hover { background: #0b5ed7; } }

    .cal-loading { display: flex; align-items: center; gap: 0.5rem; color: #6c757d; padding: 2rem; }

    .cal-grid-wrap { background: #fff; border-radius: 12px; border: 1px solid #e9ecef; overflow: hidden; }
    .cal-day-headers { display: grid; grid-template-columns: repeat(7, 1fr); background: #f8f9fb; border-bottom: 1px solid #e9ecef; }
    .cal-day-header { padding: 0.6rem; text-align: center; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6c757d; }
    .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
    .cal-cell { min-height: 110px; border-right: 1px solid #f0f0f0; border-bottom: 1px solid #f0f0f0; padding: 0.4rem; &:nth-child(7n) { border-right: none; } }
    .cal-cell.other-month { background: #fafafa; .cal-date-num { color: #ced4da; } }
    .cal-cell.today { background: #f0f4ff; .cal-date-num { background: #0d6efd; color: #fff; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; } }
    .cal-date-num { font-size: 0.8rem; font-weight: 600; color: #495057; margin-bottom: 0.3rem; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; }
    .cal-tasks { display: flex; flex-direction: column; gap: 2px; }
    .cal-task-chip { display: flex; align-items: center; gap: 4px; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: 500; cursor: pointer !important; transition: opacity 0.15s; overflow: hidden; &:hover { opacity: 0.8; } }
    .chip-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
    .chip-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .status-not_started { background: #f8f9fa; color: #6c757d; .chip-dot { background: #adb5bd; } }
    .status-in_progress { background: #fff3cd; color: #856404; .chip-dot { background: #ffc107; } }
    .status-completed { background: #d1e7dd; color: #0a3622; .chip-dot { background: #198754; } }

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
    .cal-steps { display: flex; flex-direction: column; gap: 0.5rem; }
    .cal-step { display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 0.75rem; border-radius: 8px; background: #f8f9fa; border-left: 3px solid #dee2e6; }
    .cal-step.step-in_progress { background: #fff8e1; border-left-color: #ffc107; }
    .cal-step.step-completed { background: #f0fdf4; border-left-color: #198754; }
    .cal-step.step-skipped { background: #f8f9fa; border-left-color: #adb5bd; opacity: 0.7; }
    .step-icon { width: 28px; height: 28px; border-radius: 50%; background: #e9ecef; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; flex-shrink: 0; }
    .step-info { flex: 1; min-width: 0; }
    .step-name { font-size: 0.83rem; font-weight: 500; color: #212529; }
    .step-dates { font-size: 0.72rem; color: #6c757d; margin-top: 1px; }
    .step-badge { font-size: 0.65rem; }

    @media (max-width: 768px) { .cal-modal { width: 100%; } }
  `]
})
export class ClientCalendarComponent implements OnInit {
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: CalendarDay[] = [];
  tasks: CalendarTaskDto[] = [];
  loading = false;
  selectedTask: CalendarTaskDto | null = null;

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
    this.taskService.getCalendarTasks(this.currentYear, this.currentMonth).subscribe({
      next: res => {
        this.tasks = res.data || [];
        this.buildCalendar();
        this.loading = false;
      },
      error: () => { this.loading = false; this.buildCalendar(); }
    });
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
      days.push({ date: d, isCurrentMonth: false, tasks: [] });
    }

    // Current month days
    for (let d = 1; d <= lastDay.getDate(); d++) {
      const date = new Date(year, month - 1, d);
      days.push({ date, isCurrentMonth: true, tasks: this.getTasksForDay(date) });
    }

    // Fill trailing days
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(year, month, i);
      days.push({ date: d, isCurrentMonth: false, tasks: [] });
    }

    this.calendarDays = days;
  }

  getTasksForDay(date: Date): CalendarTaskDto[] {
    return this.tasks.filter(t => {
      if (!t.start_date || !t.end_date) return false;
      const start = new Date(t.start_date);
      const end = new Date(t.end_date);
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
      return date >= start && date <= end;
    });
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
  closeTask() { this.selectedTask = null; }

  progressPct(task: CalendarTaskDto): number {
    return task.total_steps === 0 ? 0 : Math.floor((task.completed_steps / task.total_steps) * 100);
  }

  statusBadge(status: string): string {
    const map: Record<string, string> = {
      'NOT_STARTED': 'bg-secondary',
      'IN_PROGRESS': 'bg-warning text-dark',
      'COMPLETED': 'bg-success',
      'SKIPPED': 'bg-light text-muted'
    };
    return map[status] || 'bg-secondary';
  }

  stepIcon(status?: string): string {
    const map: Record<string, string> = {
      'NOT_STARTED': 'bi-circle',
      'IN_PROGRESS': 'bi-arrow-clockwise text-warning',
      'COMPLETED': 'bi-check-circle-fill text-success',
      'SKIPPED': 'bi-dash-circle text-muted'
    };
    return map[status || 'NOT_STARTED'] || 'bi-circle';
  }
}
