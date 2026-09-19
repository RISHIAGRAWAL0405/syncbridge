import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import {
  ApiResponse, UserDto, UpdateProfileDetailsRequest, ChangePasswordRequest
} from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private api: ApiService) {}

  getMyProfile(): Observable<ApiResponse<UserDto>> {
    return this.api.get<UserDto>(API_ENDPOINTS.MY_PROFILE.GET);
  }

  updateProfileDetails(request: UpdateProfileDetailsRequest): Observable<ApiResponse<UserDto>> {
    return this.api.put<UserDto>(API_ENDPOINTS.MY_PROFILE.UPDATE_DETAILS, request);
  }

  updateProfileImage(file: File | null): Observable<ApiResponse<{ profileUrl: string | null }>> {
    const formData = new FormData();
    if (file) formData.append('ProfileImage', file);
    return this.api.postFormData<{ profileUrl: string | null }>(API_ENDPOINTS.MY_PROFILE.UPDATE_IMAGE, formData);
  }

  updateProfileBanner(file: File | null): Observable<ApiResponse<{ profileUrl: string | null }>> {
    const formData = new FormData();
    if (file) formData.append('Profilebanner', file);
    return this.api.postFormData<{ profileUrl: string | null }>(API_ENDPOINTS.MY_PROFILE.UPDATE_BANNER, formData);
  }

  changePassword(request: ChangePasswordRequest): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.MY_PROFILE.CHANGE_PASSWORD, request);
  }

  updateOnlineStatus(status: string): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.MY_PROFILE.UPDATE_ONLINE_STATUS, { online_status: status });
  }

  updateStatusMessage(message: string): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.MY_PROFILE.UPDATE_STATUS_MESSAGE, { status_message: message });
  }
}
