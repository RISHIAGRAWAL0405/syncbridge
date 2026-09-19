import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { ProjectService } from '../../../core/services/project.service';

interface ProjectProfileResponse {
  project: {
    project_id: string;
    project_name: string;
    project_code: string;
    description: string;
    start_date: string | null;
    end_date: string | null;
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
    progress: {
      total_steps: number;
      completed_steps: number;
      percentage: number;
    };
    workflow_steps: Array<{
      task_workflow_step_id: string;
      step_name: string;
      display_order: number;
      status: string;
      start_date: string | null;
      end_date: string | null;
    }>;
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
  private fb = inject(FormBuilder);

  projectId: string = '';
  profile: ProjectProfileResponse | null = null;
  loading = true;
  error = '';
  showEditModal = false;
  showTaskModal = false;
  editingTask: any = null;
  expandedTaskId: string | null = null;
  taskForm: FormGroup;
  editForm: FormGroup;

  statusColors: { [key: string]: string } = {
    'COMPLETED': 'success',
    'IN_PROGRESS': 'warning',
    'NOT_STARTED': 'secondary',
    'SKIPPED': 'info'
  };

  constructor() {
    this.taskForm = this.fb.group({
      task_name: ['', Validators.required],
      task_code: [''],
      description: [''],
      start_date: [''],
      end_date: ['']
    });

    this.editForm = this.fb.group({
      project_name: ['', Validators.required],
      project_code: [''],
      description: [''],
      start_date: [''],
      end_date: [''],
      is_active: [true]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['projectId'];
      this.loadProfile();
    });
  }

  goBack(): void {
    this.router.navigate(['/admin/projects']);
  }

  loadProfile(): void {
    this.loading = true;
    this.error = '';
    this.projectService.getProjectProfile(this.projectId)
      .pipe(finalize(() => {
        this.loading = false;
        this.notifyView();
      }))
      .subscribe({
        next: (res: any) => {
          if (res.data) {
            this.profile = res.data as ProjectProfileResponse;
            if (this.profile?.project) {
              this.editForm.patchValue({
                ...this.profile.project,
                start_date: this.profile.project.start_date ? this.profile.project.start_date.substring(0, 10) : '',
                end_date: this.profile.project.end_date ? this.profile.project.end_date.substring(0, 10) : ''
              });
            }
          }
        },
        error: (err: any) => {
          this.error = err?.error?.errorMessage || 'Failed to load project profile';
        }
      });
  }

  getDurationDays(start: string | null, end: string | null): string {
    if (!start || !end) return '—';
    const sd = new Date(start);
    const ed = new Date(end);
    const days = Math.round((ed.getTime() - sd.getTime()) / (1000 * 60 * 60 * 24));
    return `${days} days`;
  }

  openEditProject(): void {
    this.showEditModal = true;
  }

  saveProjectEdit(): void {
    if (this.editForm.invalid) return;
    this.projectService.updateProject(this.projectId, this.editForm.value as any).subscribe({
      next: () => {
        this.showEditModal = false;
        this.loadProfile();
      }
    });
  }

  toggleProjectStatus(): void {
    if (!this.profile) return;
    this.projectService.setStatus(this.projectId, !this.profile.project.is_active).subscribe({
      next: () => this.loadProfile()
    });
  }

  toggleTaskExpand(taskId: string): void {
    this.expandedTaskId = this.expandedTaskId === taskId ? null : taskId;
  }

  openEditTask(task: any): void {
    this.editingTask = task;
    this.taskForm.patchValue({
      ...task,
      start_date: task.start_date ? task.start_date.substring(0, 10) : '',
      end_date: task.end_date ? task.end_date.substring(0, 10) : ''
    });
    this.showTaskModal = true;
  }

  saveTask(): void {
    if (this.editingTask && this.taskForm.valid) {
      // TODO: call task API
      // this.taskService.updateTask(this.editingTask.task_id, this.taskForm.value).subscribe({
      //     next: () => {
      //         this.showTaskModal = false;
      //         this.loadProfile();
      //     }
      // });
      this.showTaskModal = false;
      this.loadProfile();
    }
  }

  updateStepStatus(stepId: string, newStatus: string): void {
    if (!this.editingTask) return;
    // TODO: call task service
    // this.taskService.updateWorkflowStepStatus(this.editingTask?.task_id, stepId, newStatus).subscribe({
    //     next: () => this.loadProfile()
    // });
    this.loadProfile();
  }

  getStatusKey(status: string): string {
    return (status || 'not_started').toLowerCase().replace(/ /g, '_');
  }

  getProgressBarClass(percentage: number): string {
    if (percentage >= 75) return 'success';
    if (percentage >= 50) return 'info';
    if (percentage >= 25) return 'warning';
    return 'danger';
  }

  getStatusBadgeClass(status: string): string {
    return this.statusColors[status] || 'secondary';
  }

  formatDate(date: string | null): string {
    if (!date) return '—';
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  get f() { return this.editForm.controls; }
  get tf() { return this.taskForm.controls; }

  private notifyView(): void {
    this.cdr.markForCheck();
  }
}
