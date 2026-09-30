import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ApiResponse, CalendarTaskDto } from '../models/api.models';

export interface DashboardData {
  projectsCount: number;
  upcomingTasks: number;
  completedTasks: number;
  recentTasks: CalendarTaskDto[]; // reuse task DTO
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor(private api: ApiService) {}

  getDashboardData(): Observable<ApiResponse<DashboardData>> {
    return this.api.get<DashboardData>('/ClientDashboard');
  }
}
