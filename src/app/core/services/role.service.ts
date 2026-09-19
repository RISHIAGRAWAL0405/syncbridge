import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import {
  ApiResponse, RoleDto, CreateRoleRequest, UpdateRoleRequest,
  PermissionDto, UpdateRolePermissionsRequest
} from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class RoleService {
  constructor(private api: ApiService) {}

  createRole(request: CreateRoleRequest): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.ROLES.BASE, request);
  }

  updateRole(roleId: string, request: UpdateRoleRequest): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.ROLES.BY_ID(roleId), request);
  }

  getRoleById(roleId: string): Observable<ApiResponse<RoleDto>> {
    return this.api.get<RoleDto>(API_ENDPOINTS.ROLES.BY_ID(roleId));
  }

  getAllRoles(): Observable<ApiResponse<RoleDto[]>> {
    return this.api.get<RoleDto[]>(API_ENDPOINTS.ROLES.BASE);
  }

  getRolePermissions(roleId: string): Observable<ApiResponse<PermissionDto[]>> {
    return this.api.get<PermissionDto[]>(API_ENDPOINTS.ROLES.PERMISSIONS(roleId));
  }

  updateRolePermissions(roleId: string, request: UpdateRolePermissionsRequest): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.ROLES.PERMISSIONS(roleId), request);
  }

  getAllPermissions(): Observable<ApiResponse<PermissionDto[]>> {
    return this.api.get<PermissionDto[]>(API_ENDPOINTS.PERMISSIONS.BASE);
  }
}
