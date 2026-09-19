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

// src/app/core/services/client.service.ts
var ClientService = class _ClientService {
  api;
  constructor(api) {
    this.api = api;
  }
  createClient(request) {
    return this.api.post(API_ENDPOINTS.CLIENTS.BASE, request);
  }
  updateClient(clientId, request) {
    return this.api.put(API_ENDPOINTS.CLIENTS.BY_ID(clientId), request);
  }
  getClientById(clientId) {
    return this.api.get(API_ENDPOINTS.CLIENTS.BY_ID(clientId));
  }
  getAllClients() {
    return this.api.get(API_ENDPOINTS.CLIENTS.BASE);
  }
  getActiveClients() {
    return this.api.get(API_ENDPOINTS.CLIENTS.ACTIVE);
  }
  setStatus(clientId, isActive) {
    return this.api.patch(API_ENDPOINTS.CLIENTS.STATUS(clientId), void 0, { is_active: String(isActive) });
  }
  static \u0275fac = function ClientService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientService, factory: _ClientService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  ClientService
};
//# sourceMappingURL=chunk-VGHZUBLD.js.map
