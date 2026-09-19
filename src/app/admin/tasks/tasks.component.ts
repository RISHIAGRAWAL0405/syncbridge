import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { TaskService } from '../../core/services/task.service';
import { ProjectService } from '../../core/services/project.service';
import { WorkflowService } from '../../core/services/workflow.service';
import { ProjectDto, TaskDto, TaskWorkflowStepDto, WorkflowTemplateDto } from '../../core/models/api.models';

type TaskPanelMode = 'create' | 'edit';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  tasks: TaskDto[] = [];
  projects: ProjectDto[] = [];
  templates: WorkflowTemplateDto[] = [];
  selectedTask: TaskDto | null = null;
  scheduleSteps: TaskWorkflowStepDto[] = [];

  loading = true;
  saving = false;
  scheduleSaving = false;
  deletingTaskId = '';
  error = '';
  success = '';
  searchTerm = '';
  showTaskPanel = false;
  showSchedulePanel = false;
  panelMode: TaskPanelMode = 'create';
  editingTask: TaskDto | null = null;
  form: FormGroup;

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private workflowService: WorkflowService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      project_id: ['', Validators.required],
      workflow_template_id: ['', Validators.required],
      task_name: ['', Validators.required],
      task_code: ['', Validators.required],
      description: [''],
      start_date: [''],
      end_date: ['']
    });
  }

  ngOnInit(): void {
    this.loadTasks();
    this.loadLookups();
  }

  loadTasks(): void {
    this.loading = true;
    this.taskService.getAllTasks()
      .pipe(finalize(() => this.finishLoading()))
      .subscribe({
        next: r => {
          if (r.data) this.tasks = r.data;
          this.notifyView();
        },
        error: err => {
          this.error = err?.error?.errorMessage || 'Failed to load tasks';
          this.notifyView();
        }
      });
  }

  loadLookups(): void {
    this.projectService.getAllProjects().subscribe(r => {
      if (r.data) this.projects = r.data.filter(p => p.is_active);
      this.notifyView();
    });
    this.workflowService.getAllTemplates().subscribe(r => {
      if (r.data) this.templates = r.data.filter(t => t.is_active);
      this.notifyView();
    });
  }

  openCreate(): void {
    this.panelMode = 'create';
    this.editingTask = null;
    this.form.reset();
    this.form.get('project_id')?.enable();
    this.form.get('workflow_template_id')?.enable();
    this.error = '';
    this.showTaskPanel = true;
  }

  openEdit(task: TaskDto): void {
    this.panelMode = 'edit';
    this.editingTask = task;
    this.form.patchValue({
      ...task,
      start_date: this.toDateInput(task.start_date),
      end_date: this.toDateInput(task.end_date)
    });
    this.form.get('project_id')?.disable();
    this.form.get('workflow_template_id')?.disable();
    this.error = '';
    this.showTaskPanel = true;
  }

  save(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    this.error = '';
    const value = this.form.getRawValue();
    const obs = this.editingTask
      ? this.taskService.updateTask(this.editingTask.task_id, {
          task_name: value.task_name,
          task_code: value.task_code,
          description: value.description,
          start_date: value.start_date,
          end_date: value.end_date
        })
      : this.taskService.createTask(value);

    obs.subscribe({
      next: res => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = `Task ${this.editingTask ? 'updated' : 'created'} successfully`;
          this.showTaskPanel = false;
          this.loadTasks();
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || 'Operation failed';
        }
        this.notifyView();
      },
      error: err => {
        this.saving = false;
        this.error = err?.error?.errorMessage || 'Operation failed';
        this.notifyView();
      }
    });
  }

  openSchedule(task: TaskDto): void {
    this.selectedTask = task;
    this.scheduleSteps = [];
    this.showSchedulePanel = true;
    this.error = '';
    this.taskService.getTaskById(task.task_id).subscribe({
      next: r => {
        if (r.data) {
          this.selectedTask = r.data;
          this.scheduleSteps = (r.data.workflow_steps || []).map(s => ({
            ...s,
            start_date: this.toDateInput(s.start_date),
            end_date: this.toDateInput(s.end_date)
          }));
        }
        this.notifyView();
      },
      error: err => {
        this.error = err?.error?.errorMessage || 'Failed to load task workflow';
        this.notifyView();
      }
    });
  }

  saveSchedule(): void {
    if (!this.selectedTask) return;
    this.scheduleSaving = true;
    this.error = '';
    this.taskService.updateWorkflowStepsSchedule(this.selectedTask.task_id, {
      steps: this.scheduleSteps.map(s => ({
        task_workflow_step_id: s.task_workflow_step_id,
        start_date: s.start_date || null,
        end_date: s.end_date || null,
        notes: s.notes || null
      }))
    }).subscribe({
      next: res => {
        this.scheduleSaving = false;
        if (res.statusCode === 200) {
          this.success = 'Workflow schedule updated';
          this.showSchedulePanel = false;
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || 'Schedule update failed';
        }
        this.notifyView();
      },
      error: err => {
        this.scheduleSaving = false;
        this.error = err?.error?.errorMessage || 'Schedule update failed';
        this.notifyView();
      }
    });
  }

  deleteTask(task: TaskDto): void {
    if (!confirm(`Delete task "${task.task_name}"? This will also remove its workflow steps.`)) return;
    this.deletingTaskId = task.task_id;
    this.error = '';
    this.taskService.deleteTask(task.task_id).subscribe({
      next: res => {
        this.deletingTaskId = '';
        if (res.statusCode === 200) {
          this.success = 'Task deleted';
          this.loadTasks();
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || 'Delete failed';
        }
        this.notifyView();
      },
      error: err => {
        this.deletingTaskId = '';
        this.error = err?.error?.errorMessage || 'Delete failed';
        this.notifyView();
      }
    });
  }

  get filteredTasks(): TaskDto[] {
    if (!this.searchTerm) return this.tasks;
    const t = this.searchTerm.toLowerCase();
    return this.tasks.filter(task =>
      task.task_name?.toLowerCase().includes(t) ||
      task.task_code?.toLowerCase().includes(t) ||
      task.project_name?.toLowerCase().includes(t) ||
      task.workflow_template_name?.toLowerCase().includes(t)
    );
  }

  get f() { return this.form.controls; }

  private toDateInput(value: string | null | undefined): string {
    return value ? value.substring(0, 10) : '';
  }

  private finishLoading(): void {
    queueMicrotask(() => {
      this.loading = false;
      this.notifyView();
    });
  }

  private clearSuccessLater(): void {
    setTimeout(() => {
      this.success = '';
      this.notifyView();
    }, 3000);
  }

  private notifyView(): void {
    this.cdr.markForCheck();
  }
}
