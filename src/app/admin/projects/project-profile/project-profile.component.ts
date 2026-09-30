import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { ProjectService } from '../../../core/services/project.service';
import { TaskService } from '../../../core/services/task.service';
import { WorkflowService } from '../../../core/services/workflow.service';
import { StepLinkService, StepLinkDto } from '../../../core/services/step-link.service';
import { ProjectStatus, WorkflowTemplateDto } from '../../../core/models/api.models';

interface WorkflowStep {
  task_workflow_step_id: string;
  step_name: string;
  display_order: number;
  status: string;
  start_date: string | null;
  end_date: string | null;
  notes?: string;
  links?: StepLinkDto[];
}

interface ProjectProfileResponse {
  project: {
    project_id: string;
    project_name: string;
    project_code: string;
    description: string;
    start_date: string | null;
    end_date: string | null;
    status?: ProjectStatus;
    is_active: boolean;
  };
  client: {
    client_id: string;
    client_name: string;
    company_name: string;
  };
  summary: {
    total_tasks: number;
    completed_tasks: number;
    in_progress_tasks: number;
    not_started_tasks: number;
    overdue_tasks: number;
    overall_progress: number;
  };
  tasks: Array<{
    task_id: string;
    task_name: string;
    task_code: string;
    workflow_template_name: string;
    start_date: string | null;
    end_date: string | null;
    current_stage: string;
    status: string;
    progress: { total_steps: number; completed_steps: number; percentage: number; };
    workflow_steps: WorkflowStep[];
  }>;
}

@Component({
  selector: 'app-project-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.scss']
})
export class ProjectProfileComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projectService = inject(ProjectService);
  private taskService = inject(TaskService);
  private workflowService = inject(WorkflowService);
  private stepLinkService = inject(StepLinkService);
  private fb = inject(FormBuilder);

  // ── State ──────────────────────────────────────────────────────────────────
  projectId = '';
  profile: ProjectProfileResponse | null = null;
  loading = true;
  error = '';

  // Modals
  showEditModal = false;
  showTaskModal = false;
  showStepModal = false;
  showLinkModal = false;

  // Editing targets
  editingTask: any = null;
  editingStep: WorkflowStep | null = null;
  editingLink: StepLinkDto | null = null;
  linkStep: WorkflowStep | null = null;
  linkTask: any = null;

  // Saving / error per modal
  taskSaving = false;
  stepSaving = false;
  linkSaving = false;
  taskError = '';
  stepError = '';
  linkError = '';

  // Misc
  workflowTemplates: WorkflowTemplateDto[] = [];
  expandedTaskId: string | null = null;
  selectedProjectStatus: ProjectStatus = 'NEW';

  readonly projectStatuses: ProjectStatus[] = ['NEW', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETED', 'CANCELLED'];
  readonly stepStatuses = ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'SKIPPED'];
  readonly linkTypes = ['VIDEO', 'IMAGE', 'FILE', 'OTHER'];
  readonly linkTypeIcons: Record<string, string> = {
    VIDEO: 'bi-play-circle-fill',
    IMAGE: 'bi-image-fill',
    FILE:  'bi-file-earmark-fill',
    OTHER: 'bi-link-45deg'
  };

  // ── Forms ──────────────────────────────────────────────────────────────────
  editForm!: FormGroup;
  taskForm!: FormGroup;
  stepForm!: FormGroup;
  linkForm!: FormGroup;

  constructor() {
    this.editForm = this.fb.group({
      project_name: ['', Validators.required],
      project_code: [''],
      description: [''],
      start_date: [''],
      end_date: [''],
      status: ['NEW', Validators.required]
    });

    this.taskForm = this.fb.group({
      workflow_template_id: ['', Validators.required],
      task_name: ['', Validators.required],
      task_code: [''],
      description: [''],
      start_date: [''],
      end_date: ['']
    });

    this.stepForm = this.fb.group({
      start_date: [''],
      end_date: [''],
      notes: ['']
    });

    this.linkForm = this.fb.group({
      category:    ['', Validators.required],
      title:       ['', Validators.required],
      url:         ['', Validators.required],
      link_type:   ['VIDEO', Validators.required],
      description: ['']
    });
  }

  // ── Lifecycle ──────────────────────────────────────────────────────────────
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.projectId = p['projectId'];
      this.loadProfile();
    });
    this.workflowService.getAllTemplates().subscribe({
      next: res => {
        this.workflowTemplates = (res.data || []).filter((t: any) => t.is_active);
        this.notifyView();
      }
    });
  }

  // ── Profile ────────────────────────────────────────────────────────────────
  goBack() { this.router.navigate(['/admin/projects']); }

  loadProfile(): void {
    this.loading = true;
    this.error = '';
    this.projectService.getProjectProfile(this.projectId)
      .pipe(finalize(() => { this.loading = false; this.notifyView(); }))
      .subscribe({
        next: (res: any) => {
          if (res.data) {
            this.profile = res.data as ProjectProfileResponse;
            this.selectedProjectStatus = this.profile.project.status || 'NEW';
            this.editForm.patchValue({
              ...this.profile.project,
              start_date: this.profile.project.start_date?.substring(0, 10) ?? '',
              end_date:   this.profile.project.end_date?.substring(0, 10) ?? ''
            });
          }
        },
        error: (err: any) => { this.error = err?.error?.errorMessage || 'Failed to load project'; }
      });
  }

  // ── Project edit ───────────────────────────────────────────────────────────
  openEditProject() { this.showEditModal = true; }

  saveProjectEdit(): void {
    if (this.editForm.invalid) return;
    this.projectService.updateProject(this.projectId, this.editForm.value as any).subscribe({
      next: () => { this.showEditModal = false; this.loadProfile(); }
    });
  }

  toggleProjectStatus(): void {
    if (!this.profile) return;
    this.projectService.setStatus(this.projectId, !this.profile.project.is_active)
      .subscribe({ next: () => this.loadProfile() });
  }

  isStatusLocked(): boolean {
    const s = this.profile?.project?.status;
    return s === 'COMPLETED' || s === 'CANCELLED';
  }

  onStatusChange(event: Event): void {
    const el = event.target as HTMLSelectElement;
    const next = el.value as ProjectStatus;
    const prev = this.profile?.project?.status || 'NEW';
    if (this.isStatusLocked()) { el.value = prev; return; }
    if ((next === 'COMPLETED' || next === 'CANCELLED') &&
        !confirm(`Mark as ${next}? This cannot be undone.`)) {
      el.value = prev; this.selectedProjectStatus = prev; return;
    }
    this.selectedProjectStatus = next;
    this.projectService.updateProjectStatus(this.projectId, { status: next }).subscribe({
      next: res => { if (res.statusCode === 200) this.loadProfile(); else { el.value = prev; this.selectedProjectStatus = prev; } },
      error: () => { el.value = prev; this.selectedProjectStatus = prev; }
    });
  }

  // ── Task ───────────────────────────────────────────────────────────────────
  toggleTaskExpand(taskId: string) {
    this.expandedTaskId = this.expandedTaskId === taskId ? null : taskId;
  }

  openCreateTask(): void {
    this.editingTask = null; this.taskError = '';
    this.taskForm.reset({ workflow_template_id: '', task_name: '', task_code: '', description: '', start_date: '', end_date: '' });
    this.showTaskModal = true;
  }

  openEditTask(task: any): void {
    this.editingTask = task; this.taskError = '';
    this.taskForm.patchValue({ ...task, start_date: task.start_date?.substring(0, 10) ?? '', end_date: task.end_date?.substring(0, 10) ?? '' });
    this.showTaskModal = true;
  }

  saveTask(): void {
    if (this.taskForm.invalid) { this.taskForm.markAllAsTouched(); return; }
    this.taskSaving = true; this.taskError = '';
    const v = this.taskForm.getRawValue();
    if (!this.editingTask) {
      this.taskService.createTask({ project_id: this.projectId, ...v, start_date: v.start_date || null, end_date: v.end_date || null }).subscribe({
        next: res => { this.taskSaving = false; if (res.statusCode === 200) { this.showTaskModal = false; this.loadProfile(); } else this.taskError = res.errorMessage || 'Failed'; this.notifyView(); },
        error: err => { this.taskSaving = false; this.taskError = err?.error?.errorMessage || 'Failed'; this.notifyView(); }
      });
    } else {
      this.taskSaving = false; this.showTaskModal = false; this.loadProfile();
    }
  }

  // ── Step ───────────────────────────────────────────────────────────────────
  isTaskLocked(task: any) { return task?.status === 'COMPLETED' || task?.status === 'CANCELLED'; }

  onStepStatusChange(task: any, step: WorkflowStep, event: Event): void {
    const el = event.target as HTMLSelectElement;
    const next = el.value, prev = step.status || 'NOT_STARTED';
    if (this.isTaskLocked(task)) { el.value = prev; return; }
    if (next === 'COMPLETED' && !confirm('Mark step as COMPLETED? This cannot be undone.')) { el.value = prev; step.status = prev; return; }
    step.status = next;
    this.taskService.updateWorkflowStepStatus(task.task_id, step.task_workflow_step_id, next).subscribe({
      next: res => { if (res.statusCode === 200) this.loadProfile(); else { el.value = prev; step.status = prev; this.notifyView(); } },
      error: () => { el.value = prev; step.status = prev; this.notifyView(); }
    });
  }

  openEditStep(task: any, step: WorkflowStep): void {
    this.editingTask = task; this.editingStep = step; this.stepError = '';
    this.stepForm.patchValue({ start_date: step.start_date?.substring(0, 10) ?? '', end_date: step.end_date?.substring(0, 10) ?? '', notes: step.notes || '' });
    this.showStepModal = true;
  }

  saveStep(): void {
    if (!this.editingTask || !this.editingStep) return;
    this.stepSaving = true; this.stepError = '';
    const v = this.stepForm.getRawValue();
    this.taskService.updateWorkflowStepsSchedule(this.editingTask.task_id, {
      steps: [{ task_workflow_step_id: this.editingStep.task_workflow_step_id, start_date: v.start_date || null, end_date: v.end_date || null, notes: v.notes || null }]
    }).subscribe({
      next: res => { this.stepSaving = false; if (res.statusCode === 200) { this.showStepModal = false; this.loadProfile(); } else this.stepError = res.errorMessage || 'Failed'; this.notifyView(); },
      error: err => { this.stepSaving = false; this.stepError = err?.error?.errorMessage || 'Failed'; this.notifyView(); }
    });
  }

  // ── Links ──────────────────────────────────────────────────────────────────
  openAddLink(task: any, step: WorkflowStep): void {
    this.linkTask = task;
    this.linkStep = step;
    this.editingLink = null;
    this.linkError = '';
    this.linkForm.reset({ category: step.step_name, title: '', url: '', link_type: 'VIDEO', description: '' });
    this.showLinkModal = true;
  }

  openEditLink(task: any, step: WorkflowStep, link: StepLinkDto): void {
    this.linkTask = task;
    this.linkStep = step;
    this.editingLink = link;
    this.linkError = '';
    this.linkForm.patchValue({ category: link.category, title: link.title, url: link.url, link_type: link.link_type, description: link.description || '' });
    this.showLinkModal = true;
  }

  saveLink(): void {
    if (this.linkForm.invalid) { this.linkForm.markAllAsTouched(); return; }
    if (!this.linkStep) return;
    this.linkSaving = true; this.linkError = '';
    const v = this.linkForm.getRawValue();

    if (!this.editingLink) {
      this.stepLinkService.addLink(this.linkStep.task_workflow_step_id, v).subscribe({
        next: res => {
          this.linkSaving = false;
          if (res.statusCode === 200) { this.showLinkModal = false; this.loadProfile(); }
          else this.linkError = res.errorMessage || 'Failed to add link';
          this.notifyView();
        },
        error: err => { this.linkSaving = false; this.linkError = err?.error?.errorMessage || 'Failed'; this.notifyView(); }
      });
    } else {
      this.stepLinkService.updateLink(this.editingLink.link_id, v).subscribe({
        next: res => {
          this.linkSaving = false;
          if (res.statusCode === 200) { this.showLinkModal = false; this.loadProfile(); }
          else this.linkError = res.errorMessage || 'Failed to update link';
          this.notifyView();
        },
        error: err => { this.linkSaving = false; this.linkError = err?.error?.errorMessage || 'Failed'; this.notifyView(); }
      });
    }
  }

  reviewLink(link: StepLinkDto, status: 'APPROVED' | 'REJECTED' | 'PENDING'): void {
    const note = status === 'REJECTED' ? (prompt('Reason for rejection (optional):') ?? '') : undefined;
    this.stepLinkService.reviewLink(link.link_id, { status, status_note: note }).subscribe({
      next: () => this.loadProfile(),
      error: () => {}
    });
  }

  deleteLink(link: StepLinkDto): void {
    if (!confirm('Delete this link?')) return;
    this.stepLinkService.deleteLink(link.link_id).subscribe({ next: () => this.loadProfile() });
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  getStatusKey(status: string): string {
    return (status || 'not_started').toLowerCase().replace(/ /g, '_');
  }

  getLinkStatusKey(status: string): string {
    return (status || 'pending').toLowerCase();
  }

  getLinkTypeIcon(type: string): string {
    return this.linkTypeIcons[type?.toUpperCase()] || 'bi-link-45deg';
  }

  getDurationDays(start: string | null, end: string | null): string {
    if (!start || !end) return '—';
    const days = Math.round((new Date(end).getTime() - new Date(start).getTime()) / 86400000);
    return `${days} days`;
  }

  formatDate(date: string | null): string {
    if (!date) return '—';
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  get f() { return this.editForm.controls; }

  private notifyView() { this.cdr.markForCheck(); }
}
