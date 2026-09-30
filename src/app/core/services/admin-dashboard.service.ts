import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { ApiResponse } from '../models/api.models';

export interface StatusCount { status: string; count: number; }

export interface RecentProjectItem {
  projectId: string;
  projectName: string;
  projectCode: string;
  clientName: string;
  status: string;
  progress: number;
  totalTasks: number;
  completedTasks: number;
  endDate: string | null;
}

export interface AdminPendingLink {
  linkId: string;
  title: string;
  url: string;
  linkType: string;
  stepName: string;
  taskName: string;
  projectName: string;
  clientName: string;
  projectId: string;
  createdAt: string;
}

export interface AdminDashboardDto {
  totalUsers: number;
  activeUsers: number;
  totalClients: number;
  activeClients: number;
  totalProjects: number;
  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  overdueTasks: number;
  pendingLinks: number;
  overallProgress: number;
  projectsByStatus: StatusCount[];
  tasksByStatus: StatusCount[];
  recentProjects: RecentProjectItem[];
  pendingLinkItems: AdminPendingLink[];
}

@Injectable({ providedIn: 'root' })
export class AdminDashboardService {
  constructor(private api: ApiService) {}
  get(): Observable<ApiResponse<AdminDashboardDto>> {
    return this.api.get<AdminDashboardDto>(API_ENDPOINTS.ADMIN_DASHBOARD.GET);
  }
}
