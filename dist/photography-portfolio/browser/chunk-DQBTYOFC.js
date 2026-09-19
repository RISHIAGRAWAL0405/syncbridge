import {
  STORAGE_KEYS
} from "./chunk-2UTZUB6A.js";
import {
  Router
} from "./chunk-RBKBNWPP.js";
import {
  API_ENDPOINTS,
  ApiService
} from "./chunk-5BILWADD.js";
import {
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CQ3CZWR7.js";

// src/app/core/services/storage.service.ts
var StorageService = class _StorageService {
  getAccessToken() {
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  }
  getRefreshToken() {
    return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  }
  getCurrentUser() {
    const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return user ? JSON.parse(user) : null;
  }
  setTokens(accessToken, refreshToken) {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  }
  setCurrentUser(user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  }
  clear() {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
  isLoggedIn() {
    return !!this.getAccessToken();
  }
  static \u0275fac = function StorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StorageService, factory: _StorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  api;
  storage;
  router;
  constructor(api, storage, router) {
    this.api = api;
    this.storage = storage;
    this.router = router;
  }
  login(request) {
    return this.api.post(API_ENDPOINTS.AUTH.LOGIN, request).pipe(tap((res) => {
      if (res.statusCode === 200 && res.data) {
        this.storage.setTokens(res.data.accessToken, res.data.refreshToken);
        this.storage.setCurrentUser(res.data.user);
      }
    }));
  }
  logout() {
    const refreshToken = this.storage.getRefreshToken();
    if (refreshToken) {
      this.api.post(API_ENDPOINTS.AUTH.LOGOUT, { refresh_token: refreshToken }).subscribe();
    }
    this.storage.clear();
    this.router.navigate(["/auth/login"]);
  }
  forgotPassword(request) {
    return this.api.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, request);
  }
  resetPassword(request) {
    return this.api.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, request);
  }
  refreshToken() {
    const refreshToken = this.storage.getRefreshToken();
    return this.api.post(API_ENDPOINTS.AUTH.REFRESH, { refresh_token: refreshToken }).pipe(tap((res) => {
      if (res.statusCode === 200 && res.data) {
        this.storage.setTokens(res.data.accessToken, res.data.refreshToken);
        this.storage.setCurrentUser(res.data.user);
      }
    }));
  }
  isLoggedIn() {
    return this.storage.isLoggedIn();
  }
  getCurrentUser() {
    return this.storage.getCurrentUser();
  }
  isAdmin() {
    return this.getCurrentUser()?.userType === "ADMIN";
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(StorageService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }, { type: StorageService }, { type: Router }], null);
})();

export {
  StorageService,
  AuthService
};
//# sourceMappingURL=chunk-DQBTYOFC.js.map
