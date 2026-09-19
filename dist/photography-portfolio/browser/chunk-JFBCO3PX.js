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

// src/app/core/services/task.service.ts
var TaskService = class _TaskService {
  api;
  constructor(api) {
    this.api = api;
  }
  createTask(request) {
    return this.api.post(API_ENDPOINTS.TASKS.BASE, request);
  }
  updateTask(taskId, request) {
    return this.api.put(API_ENDPOINTS.TASKS.BY_ID(taskId), request);
  }
  getTaskById(taskId) {
    return this.api.get(API_ENDPOINTS.TASKS.BY_ID(taskId));
  }
  getAllTasks() {
    return this.api.get(API_ENDPOINTS.TASKS.BASE);
  }
  deleteTask(taskId) {
    return this.api.delete(API_ENDPOINTS.TASKS.BY_ID(taskId));
  }
  updateWorkflowStep(taskId, stepId, request) {
    return this.api.put(API_ENDPOINTS.TASKS.WORKFLOW_STEP(taskId, stepId), request);
  }
  updateWorkflowStepStatus(taskId, stepId, status) {
    return this.api.put(API_ENDPOINTS.TASKS.WORKFLOW_STEP_STATUS(taskId, stepId), { status });
  }
  updateWorkflowStepsSchedule(taskId, request) {
    return this.api.put(API_ENDPOINTS.TASKS.WORKFLOW_STEPS_SCHEDULE(taskId), request);
  }
  getCalendarTasks(year, month) {
    return this.api.get(API_ENDPOINTS.TASKS.CALENDAR(year, month));
  }
  static \u0275fac = function TaskService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  TaskService
};
//# sourceMappingURL=chunk-JFBCO3PX.js.map
