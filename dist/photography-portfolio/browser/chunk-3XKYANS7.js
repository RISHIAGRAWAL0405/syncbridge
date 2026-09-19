import {
  API_ENDPOINTS,
  ApiService
} from "./chunk-5BILWADD.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CQ3CZWR7.js";

// src/app/core/services/project.service.ts
var ProjectService = class _ProjectService {
  api;
  constructor(api) {
    this.api = api;
  }
  createProject(request) {
    return this.api.post(API_ENDPOINTS.PROJECTS.BASE, request);
  }
  updateProject(projectId, request) {
    return this.api.put(API_ENDPOINTS.PROJECTS.BY_ID(projectId), request);
  }
  getProjectById(projectId) {
    return this.api.get(API_ENDPOINTS.PROJECTS.BY_ID(projectId));
  }
  getAllProjects() {
    return this.api.get(API_ENDPOINTS.PROJECTS.BASE);
  }
  getProjectsByClient(clientId) {
    return this.api.get(API_ENDPOINTS.PROJECTS.BY_CLIENT(clientId));
  }
  setStatus(projectId, isActive) {
    return this.api.patch(API_ENDPOINTS.PROJECTS.STATUS(projectId), void 0, { is_active: String(isActive) });
  }
  getProjectProfile(projectId) {
    return this.api.get(API_ENDPOINTS.PROJECTS.PROFILE(projectId));
  }
  static \u0275fac = function ProjectService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectService, factory: _ProjectService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  ProjectService
};
//# sourceMappingURL=chunk-3XKYANS7.js.map
