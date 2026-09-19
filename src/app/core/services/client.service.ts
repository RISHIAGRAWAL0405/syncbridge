import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import {
  ApiResponse, ClientDto, CreateClientRequest, UpdateClientRequest
} from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private api: ApiService) {}

  createClient(request: CreateClientRequest): Observable<ApiResponse<null>> {
    return this.api.post<null>(API_ENDPOINTS.CLIENTS.BASE, request);
  }

  updateClient(clientId: string, request: UpdateClientRequest): Observable<ApiResponse<null>> {
    return this.api.put<null>(API_ENDPOINTS.CLIENTS.BY_ID(clientId), request);
  }

  getClientById(clientId: string): Observable<ApiResponse<ClientDto>> {
    return this.api.get<ClientDto>(API_ENDPOINTS.CLIENTS.BY_ID(clientId));
  }

  getAllClients(): Observable<ApiResponse<ClientDto[]>> {
    return this.api.get<ClientDto[]>(API_ENDPOINTS.CLIENTS.BASE);
  }

  getActiveClients(): Observable<ApiResponse<ClientDto[]>> {
    return this.api.get<ClientDto[]>(API_ENDPOINTS.CLIENTS.ACTIVE);
  }

  setStatus(clientId: string, isActive: boolean): Observable<ApiResponse<null>> {
    return this.api.patch<null>(API_ENDPOINTS.CLIENTS.STATUS(clientId), undefined, { is_active: String(isActive) });
  }
}
