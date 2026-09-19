import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import {
  ApiResponse,
  CalendarTaskDto,
  CreateTaskRequest,
  TaskDto,
  UpdateTaskRequest,
  UpdateTaskWorkflowStepRequest,
  UpdateTaskWorkflowStepsScheduleRequest
} from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private api: ApiService) {}

  createTask(request: CreateTaskRequest): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.TASKS.BASE, request);
  }

  updateTask(taskId: string, request: UpdateTaskRequest): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.TASKS.BY_ID(taskId), request);
  }

  getTaskById(taskId: string): Observable<ApiResponse<TaskDto>> {
    return this.api.get<TaskDto>(API_ENDPOINTS.TASKS.BY_ID(taskId));
  }

  getAllTasks(): Observable<ApiResponse<TaskDto[]>> {
    return this.api.get<TaskDto[]>(API_ENDPOINTS.TASKS.BASE);
  }

  deleteTask(taskId: string): Observable<ApiResponse<null>> {
    return this.api.delete<null>(API_ENDPOINTS.TASKS.BY_ID(taskId));
  }

  updateWorkflowStep(taskId: string, stepId: string, request: UpdateTaskWorkflowStepRequest): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.TASKS.WORKFLOW_STEP(taskId, stepId), request);
  }

  updateWorkflowStepStatus(taskId: string, stepId: string, status: string): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.TASKS.WORKFLOW_STEP_STATUS(taskId, stepId), { status });
  }

  updateWorkflowStepsSchedule(taskId: string, request: UpdateTaskWorkflowStepsScheduleRequest): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.TASKS.WORKFLOW_STEPS_SCHEDULE(taskId), request);
  }

  getCalendarTasks(year: number, month: number): Observable<ApiResponse<CalendarTaskDto[]>> {
    return this.api.get<CalendarTaskDto[]>(API_ENDPOINTS.TASKS.CALENDAR(year, month));
  }
}
