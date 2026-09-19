import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { ProjectService } from '../../core/services/project.service';
import { ClientService } from '../../core/services/client.service';
import { ProjectDto, ClientDto } from '../../core/models/api.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  projects: ProjectDto[] = [];
  clients: ClientDto[] = [];
  loading = true;
  saving = false;
  error = '';
  success = '';
  showModal = false;
  editingProject: ProjectDto | null = null;
  form: FormGroup;
  searchTerm = '';

  constructor(private projectService: ProjectService, private clientService: ClientService, private fb: FormBuilder) {
    this.form = this.fb.group({
      client_id: ['', Validators.required],
      project_name: ['', Validators.required],
      project_code: [''],
      description: [''],
      start_date: [''],
      end_date: ['']
    });
  }

  ngOnInit(): void {
    this.loadProjects();
    this.clientService.getActiveClients().subscribe(r => {
      if (r.data) this.clients = r.data;
      this.notifyView();
    });
  }

  loadProjects(): void {
    this.loading = true;
    this.projectService.getAllProjects()
      .pipe(finalize(() => this.finishLoading()))
      .subscribe({
        next: r => {
          if (r.data) this.projects = r.data;
          this.notifyView();
        }
      });
  }

  openCreate(): void {
    this.editingProject = null;
    this.form.reset();
    this.form.get('client_id')?.enable();
    this.showModal = true;
    this.error = '';
  }

  openEdit(project: ProjectDto): void {
    this.editingProject = project;
    this.form.patchValue({
      ...project,
      start_date: project.start_date?.substring(0, 10),
      end_date: project.end_date?.substring(0, 10)
    });
    this.form.get('client_id')?.disable();
    this.showModal = true;
    this.error = '';
  }

  save(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    this.error = '';
    const obs = this.editingProject
      ? this.projectService.updateProject(this.editingProject.project_id, this.form.value)
      : this.projectService.createProject(this.form.value);

    obs.subscribe({
      next: res => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = `Project ${this.editingProject ? 'updated' : 'created'} successfully`;
          this.showModal = false;
          this.loadProjects();
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

  toggleStatus(project: ProjectDto): void {
    this.projectService.setStatus(project.project_id, !project.is_active).subscribe({
      next: () => this.loadProjects()
    });
  }

  get filteredProjects(): ProjectDto[] {
    if (!this.searchTerm) return this.projects;
    const t = this.searchTerm.toLowerCase();
    return this.projects.filter(p =>
      p.project_name?.toLowerCase().includes(t) ||
      p.client_name?.toLowerCase().includes(t) ||
      p.project_code?.toLowerCase().includes(t)
    );
  }

  get f() { return this.form.controls; }

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
