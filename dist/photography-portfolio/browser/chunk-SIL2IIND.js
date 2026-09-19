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

// src/app/core/services/user.service.ts
var UserService = class _UserService {
  api;
  constructor(api) {
    this.api = api;
  }
  createUser(request) {
    return this.api.post(API_ENDPOINTS.USERS.BASE, request);
  }
  updateUser(userId, request) {
    return this.api.put(API_ENDPOINTS.USERS.BY_ID(userId), request);
  }
  getUserById(userId) {
    return this.api.get(API_ENDPOINTS.USERS.BY_ID(userId));
  }
  getAllUsers() {
    return this.api.get(API_ENDPOINTS.USERS.GET_ALL);
  }
  getAllActiveUsers() {
    return this.api.get(API_ENDPOINTS.USERS.GET_ALL_ACTIVE);
  }
  getUsersByType(userType) {
    return this.api.get(API_ENDPOINTS.USERS.GET_BY_TYPE(userType));
  }
  checkUsername(username) {
    return this.api.post(API_ENDPOINTS.USERS.CHECK_USERNAME, { username });
  }
  setActiveInactive(userId, isActive) {
    return this.api.post(API_ENDPOINTS.USERS.ACTIVE_INACTIVE, { user_id: userId, is_active: isActive });
  }
  sendEmailVerification(userId) {
    return this.api.post(API_ENDPOINTS.USERS.SEND_EMAIL_VERIFICATION, { user_id: userId });
  }
  verifyEmail(userId, otpCode) {
    return this.api.post(API_ENDPOINTS.USERS.VERIFY_EMAIL, { user_id: userId, otp_code: otpCode });
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  UserService
};
//# sourceMappingURL=chunk-SIL2IIND.js.map
