import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import {
  ApiResponse, WorkflowStepDto, CreateWorkflowStepRequest,
  WorkflowTemplateDto, CreateWorkflowTemplateRequest
} from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class WorkflowService {
  constructor(private api: ApiService) {}

  // Steps
  createStep(request: CreateWorkflowStepRequest): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.WORKFLOW_STEPS.BASE, request);
  }

  updateStep(stepId: string, request: Partial<CreateWorkflowStepRequest>): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.WORKFLOW_STEPS.BY_ID(stepId), request);
  }

  getAllSteps(): Observable<ApiResponse<WorkflowStepDto[]>> {
    return this.api.get<WorkflowStepDto[]>(API_ENDPOINTS.WORKFLOW_STEPS.BASE);
  }

  getActiveSteps(): Observable<ApiResponse<WorkflowStepDto[]>> {
    return this.api.get<WorkflowStepDto[]>(API_ENDPOINTS.WORKFLOW_STEPS.ACTIVE);
  }

  setStepStatus(stepId: string, isActive: boolean): Observable<ApiResponse<null>> {
    return this.api.patch<null>(API_ENDPOINTS.WORKFLOW_STEPS.STATUS(stepId), undefined, { is_active: String(isActive) });
  }

  // Templates
  createTemplate(request: CreateWorkflowTemplateRequest): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.WORKFLOW_TEMPLATES.BASE, request);
  }

  updateTemplate(templateId: string, request: Partial<CreateWorkflowTemplateRequest>): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.WORKFLOW_TEMPLATES.BY_ID(templateId), request);
  }

  getTemplateById(templateId: string): Observable<ApiResponse<WorkflowTemplateDto>> {
    return this.api.get<WorkflowTemplateDto>(API_ENDPOINTS.WORKFLOW_TEMPLATES.BY_ID(templateId));
  }

  getAllTemplates(): Observable<ApiResponse<WorkflowTemplateDto[]>> {
    return this.api.get<WorkflowTemplateDto[]>(API_ENDPOINTS.WORKFLOW_TEMPLATES.BASE);
  }

  setTemplateStatus(templateId: string, isActive: boolean): Observable<ApiResponse<null>> {
    return this.api.patch<null>(API_ENDPOINTS.WORKFLOW_TEMPLATES.STATUS(templateId), undefined, { is_active: String(isActive) });
  }

  updateTemplateSteps(templateId: string, steps: { workflow_step_id: string; display_order: number; is_required: boolean }[]): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.WORKFLOW_TEMPLATES.STEPS(templateId), steps);
  }
}
