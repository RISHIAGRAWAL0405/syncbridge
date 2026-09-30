import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { ApiResponse } from '../models/api.models';

export interface ClientProjectSummary {
  projectId: string;
  projectName: string;
  projectCode: string;
  status: string;
  startDate: string | null;
  endDate: string | null;
  totalTasks: number;
  completedTasks: number;
  progress: number;
}

export interface PendingLinkItem {
  linkId: string;
  title: string;
  url: string;
  linkType: string;
  category: string;
  stepName: string;
  taskName: string;
  projectName: string;
  projectId: string;
  createdAt: string;
}

export interface ClientDashboardDto {
  totalProjects: number;
  activeProjects: number;
  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  overdueTasks: number;
  pendingApprovals: number;
  overallProgress: number;
  projects: ClientProjectSummary[];
  pendingLinks: PendingLinkItem[];
}

@Injectable({ providedIn: 'root' })
export class ClientDashboardService {
  constructor(private api: ApiService) {}

  getDashboard(): Observable<ApiResponse<ClientDashboardDto>> {
    return this.api.get<ClientDashboardDto>(API_ENDPOINTS.CLIENT_DASHBOARD.GET);
  }
}
