import {
  HttpClient,
  HttpParams
} from "./chunk-WWIHBCUC.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CQ3CZWR7.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiBaseUrl: "https://localhost:44354/api"
};

// src/app/core/constants/api-endpoints.ts
var API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: "/Auth/login",
    REFRESH: "/Auth/refresh",
    LOGOUT: "/Auth/logout",
    FORGOT_PASSWORD: "/Auth/forgot-password",
    RESET_PASSWORD: "/Auth/reset-password"
  },
  // Users
  USERS: {
    BASE: "/Users",
    BY_ID: (id) => `/Users/${id}`,
    GET_ALL: "/Users/GetAllUsersAsync",
    GET_ALL_ACTIVE: "/Users/GetAllActiveUsersAsync",
    GET_BY_TYPE: (type) => `/Users/GetAllActiveUsersByUserType?user_type=${type}`,
    CHECK_USERNAME: "/Users/check-username",
    ACTIVE_INACTIVE: "/Users/activeInactive",
    SEND_EMAIL_VERIFICATION: "/Users/send-email-verification",
    VERIFY_EMAIL: "/Users/verify-email"
  },
  // My Profile
  MY_PROFILE: {
    GET: "/MyProfile/getMyProfile",
    UPDATE_IMAGE: "/MyProfile/updateProfileImage",
    UPDATE_BANNER: "/MyProfile/updateProfilebanner",
    UPDATE_DETAILS: "/MyProfile/updateProfiledetails",
    CHANGE_PASSWORD: "/MyProfile/changePassword",
    UPDATE_ONLINE_STATUS: "/MyProfile/updateOnlineStatus",
    UPDATE_STATUS_MESSAGE: "/MyProfile/updateStatusMessage"
  },
  // Roles
  ROLES: {
    BASE: "/Roles",
    BY_ID: (id) => `/Roles/${id}`,
    PERMISSIONS: (id) => `/Roles/${id}/permissions`
  },
  // Permissions
  PERMISSIONS: {
    BASE: "/Permissions"
  },
  // Clients
  CLIENTS: {
    BASE: "/Clients",
    BY_ID: (id) => `/Clients/${id}`,
    ACTIVE: "/Clients/active",
    STATUS: (id) => `/Clients/${id}/status`
  },
  // Projects
  PROJECTS: {
    BASE: "/Projects",
    BY_ID: (id) => `/Projects/${id}`,
    BY_CLIENT: (clientId) => `/Projects/by-client/${clientId}`,
    STATUS: (id) => `/Projects/${id}/status`,
    PROFILE: (id) => `/Projects/${id}/profile`
  },
  // Tasks
  TASKS: {
    BASE: "/Tasks",
    BY_ID: (id) => `/Tasks/${id}`,
    BY_PROJECT: (projectId) => `/Tasks/by-project/${projectId}`,
    CALENDAR: (year, month) => `/Tasks/calendar?year=${year}&month=${month}`,
    WORKFLOW_STEP: (taskId, stepId) => `/Tasks/${taskId}/workflow-steps/${stepId}`,
    WORKFLOW_STEP_STATUS: (taskId, stepId) => `/Tasks/${taskId}/workflow-steps/${stepId}/status`,
    WORKFLOW_STEPS_SCHEDULE: (taskId) => `/Tasks/${taskId}/workflow-steps/schedule`
  },
  // Workflow Steps
  WORKFLOW_STEPS: {
    BASE: "/WorkflowSteps",
    BY_ID: (id) => `/WorkflowSteps/${id}`,
    ACTIVE: "/WorkflowSteps/active",
    STATUS: (id) => `/WorkflowSteps/${id}/status`
  },
  // Workflow Templates
  WORKFLOW_TEMPLATES: {
    BASE: "/WorkflowTemplates",
    BY_ID: (id) => `/WorkflowTemplates/${id}`,
    STATUS: (id) => `/WorkflowTemplates/${id}/status`,
    STEPS: (id) => `/WorkflowTemplates/${id}/steps`
  }
};

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  http;
  baseUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  get(endpoint, params) {
    let httpParams = new HttpParams();
    if (params)
      Object.entries(params).forEach(([k, v]) => httpParams = httpParams.set(k, v));
    return this.http.get(`${this.baseUrl}${endpoint}`, { params: httpParams });
  }
  post(endpoint, body) {
    return this.http.post(`${this.baseUrl}${endpoint}`, body);
  }
  put(endpoint, body) {
    return this.http.put(`${this.baseUrl}${endpoint}`, body);
  }
  patch(endpoint, body, params) {
    let httpParams = new HttpParams();
    if (params)
      Object.entries(params).forEach(([k, v]) => httpParams = httpParams.set(k, v));
    return this.http.patch(`${this.baseUrl}${endpoint}`, body ?? {}, { params: httpParams });
  }
  delete(endpoint) {
    return this.http.delete(`${this.baseUrl}${endpoint}`);
  }
  postFormData(endpoint, formData) {
    return this.http.post(`${this.baseUrl}${endpoint}`, formData);
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  API_ENDPOINTS,
  environment,
  ApiService
};
//# sourceMappingURL=chunk-5BILWADD.js.map
