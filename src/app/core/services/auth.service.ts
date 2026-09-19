import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import {
  LoginRequest, ForgotPasswordRequest, ResetPasswordRequest,
  AuthResponse, ApiResponse
} from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private api: ApiService,
    private storage: StorageService,
    private router: Router
  ) {}

  login(request: LoginRequest): Observable<ApiResponse<AuthResponse>> {
    return this.api.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, request).pipe(
      tap(res => {
        if (res.statusCode === 200 && res.data) {
          this.storage.setTokens(res.data.accessToken, res.data.refreshToken);
          this.storage.setCurrentUser(res.data.user);
        }
      })
    );
  }

  logout(): void {
    const refreshToken = this.storage.getRefreshToken();
    if (refreshToken) {
      this.api.post(API_ENDPOINTS.AUTH.LOGOUT, { refresh_token: refreshToken }).subscribe();
    }
    this.storage.clear();
    this.router.navigate(['/auth/login']);
  }

  forgotPassword(request: ForgotPasswordRequest): Observable<ApiResponse<{ user_id: string }>> {
    return this.api.post<{ user_id: string }>(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, request);
  }

  resetPassword(request: ResetPasswordRequest): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.AUTH.RESET_PASSWORD, request);
  }

  refreshToken(): Observable<ApiResponse<AuthResponse>> {
    const refreshToken = this.storage.getRefreshToken();
    return this.api.post<AuthResponse>(API_ENDPOINTS.AUTH.REFRESH, { refresh_token: refreshToken }).pipe(
      tap(res => {
        if (res.statusCode === 200 && res.data) {
          this.storage.setTokens(res.data.accessToken, res.data.refreshToken);
          this.storage.setCurrentUser(res.data.user);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return this.storage.isLoggedIn();
  }

  getCurrentUser() {
    return this.storage.getCurrentUser();
  }

  isAdmin(): boolean {
    return this.getCurrentUser()?.userType === 'ADMIN';
  }
}
