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

// src/app/core/services/workflow.service.ts
var WorkflowService = class _WorkflowService {
  api;
  constructor(api) {
    this.api = api;
  }
  // Steps
  createStep(request) {
    return this.api.post(API_ENDPOINTS.WORKFLOW_STEPS.BASE, request);
  }
  updateStep(stepId, request) {
    return this.api.put(API_ENDPOINTS.WORKFLOW_STEPS.BY_ID(stepId), request);
  }
  getAllSteps() {
    return this.api.get(API_ENDPOINTS.WORKFLOW_STEPS.BASE);
  }
  getActiveSteps() {
    return this.api.get(API_ENDPOINTS.WORKFLOW_STEPS.ACTIVE);
  }
  setStepStatus(stepId, isActive) {
    return this.api.patch(API_ENDPOINTS.WORKFLOW_STEPS.STATUS(stepId), void 0, { is_active: String(isActive) });
  }
  // Templates
  createTemplate(request) {
    return this.api.post(API_ENDPOINTS.WORKFLOW_TEMPLATES.BASE, request);
  }
  updateTemplate(templateId, request) {
    return this.api.put(API_ENDPOINTS.WORKFLOW_TEMPLATES.BY_ID(templateId), request);
  }
  getTemplateById(templateId) {
    return this.api.get(API_ENDPOINTS.WORKFLOW_TEMPLATES.BY_ID(templateId));
  }
  getAllTemplates() {
    return this.api.get(API_ENDPOINTS.WORKFLOW_TEMPLATES.BASE);
  }
  setTemplateStatus(templateId, isActive) {
    return this.api.patch(API_ENDPOINTS.WORKFLOW_TEMPLATES.STATUS(templateId), void 0, { is_active: String(isActive) });
  }
  updateTemplateSteps(templateId, steps) {
    return this.api.put(API_ENDPOINTS.WORKFLOW_TEMPLATES.STEPS(templateId), steps);
  }
  static \u0275fac = function WorkflowService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkflowService, factory: _WorkflowService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  WorkflowService
};
//# sourceMappingURL=chunk-WA6QADDJ.js.map
