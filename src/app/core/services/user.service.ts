import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import {
  ApiResponse, UserDto, CreateUserRequest, UpdateUserRequest
} from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private api: ApiService) {}

  createUser(request: CreateUserRequest): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.USERS.BASE, request);
  }

  updateUser(userId: string, request: UpdateUserRequest): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.USERS.BY_ID(userId), request);
  }

  getUserById(userId: string): Observable<ApiResponse<UserDto>> {
    return this.api.get<UserDto>(API_ENDPOINTS.USERS.BY_ID(userId));
  }

  getAllUsers(): Observable<ApiResponse<UserDto[]>> {
    return this.api.get<UserDto[]>(API_ENDPOINTS.USERS.GET_ALL);
  }

  getAllActiveUsers(): Observable<ApiResponse<UserDto[]>> {
    return this.api.get<UserDto[]>(API_ENDPOINTS.USERS.GET_ALL_ACTIVE);
  }

  getUsersByType(userType: string): Observable<ApiResponse<UserDto[]>> {
    return this.api.get<UserDto[]>(API_ENDPOINTS.USERS.GET_BY_TYPE(userType));
  }

  checkUsername(username: string): Observable<ApiResponse<{ exists: boolean; message: string }>> {
    return this.api.post<{ exists: boolean; message: string }>(API_ENDPOINTS.USERS.CHECK_USERNAME, { username });
  }

  setActiveInactive(userId: string, isActive: boolean): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.USERS.ACTIVE_INACTIVE, { user_id: userId, is_active: isActive });
  }

  sendEmailVerification(userId: string): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.USERS.SEND_EMAIL_VERIFICATION, { user_id: userId });
  }

  verifyEmail(userId: string, otpCode: string): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.USERS.VERIFY_EMAIL, { user_id: userId, otp_code: otpCode });
  }
}
