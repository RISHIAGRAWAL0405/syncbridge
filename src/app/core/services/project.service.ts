import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import {
  ApiResponse, ProjectDto, CreateProjectRequest, UpdateProjectRequest
} from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  constructor(private api: ApiService) {}

  createProject(request: CreateProjectRequest): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.PROJECTS.BASE, request);
  }

  updateProject(projectId: string, request: UpdateProjectRequest): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.PROJECTS.BY_ID(projectId), request);
  }

  getProjectById(projectId: string): Observable<ApiResponse<ProjectDto>> {
    return this.api.get<ProjectDto>(API_ENDPOINTS.PROJECTS.BY_ID(projectId));
  }

  getAllProjects(): Observable<ApiResponse<ProjectDto[]>> {
    return this.api.get<ProjectDto[]>(API_ENDPOINTS.PROJECTS.BASE);
  }

  getProjectsByClient(clientId: string): Observable<ApiResponse<ProjectDto[]>> {
    return this.api.get<ProjectDto[]>(API_ENDPOINTS.PROJECTS.BY_CLIENT(clientId));
  }

  setStatus(projectId: string, isActive: boolean): Observable<ApiResponse<null>> {
    return this.api.patch<null>(API_ENDPOINTS.PROJECTS.STATUS(projectId), undefined, { is_active: String(isActive) });
  }

  getProjectProfile(projectId: string): Observable<ApiResponse<any>> {
    return this.api.get<any>(API_ENDPOINTS.PROJECTS.PROFILE(projectId));
  }
}
