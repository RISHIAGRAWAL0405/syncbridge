import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface StepLinkDto {
  link_id: string;
  task_workflow_step_id: string;
  task_id: string;
  category: string;
  title: string;
  url: string;
  link_type: string;
  description?: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  status_note?: string;
  uploaded_by?: string;
  reviewed_by?: string;
  reviewed_at?: string;
  created_at: string;
}

export interface StepLinkCreateRequest {
  category: string;
  title: string;
  url: string;
  link_type: string;
  description?: string;
}

export interface StepLinkReviewRequest {
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  status_note?: string;
}

@Injectable({ providedIn: 'root' })
export class StepLinkService {
  private base = '/StepLinks';
  constructor(private api: ApiService) {}

  addLink(taskWorkflowStepId: string, request: StepLinkCreateRequest): Observable<any> {
    return this.api.post<any>(`${this.base}/by-step/${taskWorkflowStepId}`, request);
  }

  updateLink(linkId: string, request: Partial<StepLinkCreateRequest>): Observable<any> {
    return this.api.put<any>(`${this.base}/${linkId}`, request);
  }

  getLinksByStep(taskWorkflowStepId: string): Observable<any> {
    return this.api.get<StepLinkDto[]>(`${this.base}/by-step/${taskWorkflowStepId}`);
  }

  getLinksByTask(taskId: string): Observable<any> {
    return this.api.get<StepLinkDto[]>(`${this.base}/by-task/${taskId}`);
  }

  reviewLink(linkId: string, request: StepLinkReviewRequest): Observable<any> {
    return this.api.patch<any>(`${this.base}/${linkId}/review`, request);
  }

  deleteLink(linkId: string): Observable<any> {
    return this.api.delete<any>(`${this.base}/${linkId}`);
  }
}
