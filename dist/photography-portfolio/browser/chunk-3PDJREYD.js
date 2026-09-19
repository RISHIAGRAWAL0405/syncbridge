import {
  API_ENDPOINTS,
  ApiService
} from "./chunk-XLVCVILN.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U2WXL5OW.js";

// src/app/core/services/role.service.ts
var RoleService = class _RoleService {
  api;
  constructor(api) {
    this.api = api;
  }
  createRole(request) {
    return this.api.post(API_ENDPOINTS.ROLES.BASE, request);
  }
  updateRole(roleId, request) {
    return this.api.put(API_ENDPOINTS.ROLES.BY_ID(roleId), request);
  }
  getRoleById(roleId) {
    return this.api.get(API_ENDPOINTS.ROLES.BY_ID(roleId));
  }
  getAllRoles() {
    return this.api.get(API_ENDPOINTS.ROLES.BASE);
  }
  getRolePermissions(roleId) {
    return this.api.get(API_ENDPOINTS.ROLES.PERMISSIONS(roleId));
  }
  updateRolePermissions(roleId, request) {
    return this.api.put(API_ENDPOINTS.ROLES.PERMISSIONS(roleId), request);
  }
  getAllPermissions() {
    return this.api.get(API_ENDPOINTS.PERMISSIONS.BASE);
  }
  static \u0275fac = function RoleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleService, factory: _RoleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  RoleService
};
//# sourceMappingURL=chunk-3PDJREYD.js.map
