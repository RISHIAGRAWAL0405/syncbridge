import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WorkflowService } from '../../core/services/workflow.service';
import { WorkflowStepDto, WorkflowTemplateDto } from '../../core/models/api.models';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './workflow.component.html'
})
export class WorkflowComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  activeTab: 'steps' | 'templates' = 'steps';
  steps: WorkflowStepDto[] = [];
  templates: WorkflowTemplateDto[] = [];
  loading = false;
  saving = false;
  error = '';
  success = '';
  showStepModal = false;
  showTemplateModal = false;
  editingStep: WorkflowStepDto | null = null;
  editingTemplate: WorkflowTemplateDto | null = null;
  stepForm: FormGroup;
  templateForm: FormGroup;
  templateSteps: { workflow_step_id: string; display_order: number; is_required: boolean }[] = [];

  constructor(private workflowService: WorkflowService, private fb: FormBuilder) {
    this.stepForm = this.fb.group({
      workflow_step_name: ['', Validators.required],
      workflow_step_code: ['', Validators.required],
      description: ['']
    });
    this.templateForm = this.fb.group({
      workflow_template_name: ['', Validators.required],
      workflow_template_code: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.loadSteps();
    this.loadTemplates();
  }

  loadSteps(): void {
    this.workflowService.getAllSteps().subscribe(r => {
      if (r.data) this.steps = r.data;
      this.notifyView();
    });
  }

  loadTemplates(): void {
    this.workflowService.getAllTemplates().subscribe(r => {
      if (r.data) this.templates = r.data;
      this.notifyView();
    });
  }

  openCreateStep(): void {
    this.editingStep = null;
    this.stepForm.reset();
    this.showStepModal = true;
    this.error = '';
  }

  openEditStep(step: WorkflowStepDto): void {
    this.editingStep = step;
    this.stepForm.patchValue(step);
    this.showStepModal = true;
    this.error = '';
  }

  saveStep(): void {
    if (this.stepForm.invalid) { this.stepForm.markAllAsTouched(); return; }
    this.saving = true;
    const obs = this.editingStep
      ? this.workflowService.updateStep(this.editingStep.workflow_step_id, this.stepForm.value)
      : this.workflowService.createStep(this.stepForm.value);
    obs.subscribe({
      next: res => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = 'Step saved'; this.showStepModal = false; this.loadSteps();
          this.clearSuccessLater();
        } else { this.error = res.errorMessage || 'Failed'; }
        this.notifyView();
      },
      error: err => { this.saving = false; this.error = err?.error?.errorMessage || 'Failed'; this.notifyView(); }
    });
  }

  toggleStepStatus(step: WorkflowStepDto): void {
    this.workflowService.setStepStatus(step.workflow_step_id, !step.is_active).subscribe(() => {
      this.loadSteps();
      this.notifyView();
    });
  }

  openCreateTemplate(): void {
    this.editingTemplate = null;
    this.templateForm.reset();
    this.templateSteps = [];
    this.showTemplateModal = true;
    this.error = '';
  }

  openEditTemplate(template: WorkflowTemplateDto): void {
    this.editingTemplate = template;
    this.templateForm.patchValue(template);
    this.workflowService.getTemplateById(template.workflow_template_id).subscribe(r => {
      if (r.data) {
        this.templateSteps = r.data.steps.map(s => ({
          workflow_step_id: s.workflow_step_id,
          display_order: s.display_order,
          is_required: s.is_required
        }));
      }
      this.notifyView();
    });
    this.showTemplateModal = true;
    this.error = '';
  }

  addTemplateStep(): void {
    this.templateSteps.push({ workflow_step_id: '', display_order: this.templateSteps.length + 1, is_required: true });
  }

  removeTemplateStep(i: number): void {
    this.templateSteps.splice(i, 1);
    this.templateSteps.forEach((s, idx) => s.display_order = idx + 1);
  }

  saveTemplate(): void {
    if (this.templateForm.invalid) { this.templateForm.markAllAsTouched(); return; }
    this.saving = true;
    const obs = this.editingTemplate
      ? this.workflowService.updateTemplate(this.editingTemplate.workflow_template_id, this.templateForm.value)
      : this.workflowService.createTemplate({ ...this.templateForm.value, steps: this.templateSteps });
    obs.subscribe({
      next: res => {
        this.saving = false;
        if (res.statusCode === 200) {
          if (this.editingTemplate) {
            this.workflowService.updateTemplateSteps(this.editingTemplate.workflow_template_id, this.templateSteps)
              .subscribe(() => this.notifyView());
          }
          this.success = 'Template saved'; this.showTemplateModal = false; this.loadTemplates();
          this.clearSuccessLater();
        } else { this.error = res.errorMessage || 'Failed'; }
        this.notifyView();
      },
      error: err => { this.saving = false; this.error = err?.error?.errorMessage || 'Failed'; this.notifyView(); }
    });
  }

  toggleTemplateStatus(template: WorkflowTemplateDto): void {
    this.workflowService.setTemplateStatus(template.workflow_template_id, !template.is_active).subscribe(() => {
      this.loadTemplates();
      this.notifyView();
    });
  }

  getStepName(id: string): string {
    return this.steps.find(s => s.workflow_step_id === id)?.workflow_step_name || id;
  }

  get sf() { return this.stepForm.controls; }
  get tf() { return this.templateForm.controls; }

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
