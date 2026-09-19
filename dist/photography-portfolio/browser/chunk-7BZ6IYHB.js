import {
  TaskService
} from "./chunk-JFBCO3PX.js";
import "./chunk-5BILWADD.js";
import "./chunk-WWIHBCUC.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-URCQYAQL.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-CQ3CZWR7.js";
import "./chunk-GOMI4DH3.js";

// src/app/client/calendar/calendar.component.ts
function ClientCalendarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading tasks...");
    \u0275\u0275elementEnd()();
  }
}
function ClientCalendarComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1);
  }
}
function ClientCalendarComponent_div_17_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function ClientCalendarComponent_div_17_div_4_div_4_Template_div_click_0_listener() {
      const task_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openTask(task_r3));
    });
    \u0275\u0275element(1, "span", 28);
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    \u0275\u0275classMap("status-" + task_r3.status.toLowerCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r3.task_name);
  }
}
function ClientCalendarComponent_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275template(4, ClientCalendarComponent_div_17_div_4_div_4_Template, 4, 3, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("other-month", !day_r5.isCurrentMonth)("today", ctx_r3.isToday(day_r5.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r5.date.getDate());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", day_r5.tasks);
  }
}
function ClientCalendarComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275template(2, ClientCalendarComponent_div_17_div_2_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275template(4, ClientCalendarComponent_div_17_div_4_Template, 5, 6, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.dayNames);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.calendarDays);
  }
}
function ClientCalendarComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function ClientCalendarComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeTask());
    });
    \u0275\u0275elementEnd();
  }
}
function ClientCalendarComponent_div_19_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, ctx_r3.selectedTask.start_date, "mediumDate"));
  }
}
function ClientCalendarComponent_div_19_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, ctx_r3.selectedTask.end_date, "mediumDate"));
  }
}
function ClientCalendarComponent_div_19_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.selectedTask.description);
  }
}
function ClientCalendarComponent_div_19_div_28_div_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, step_r8.start_date, "MMM d"));
  }
}
function ClientCalendarComponent_div_19_div_28_div_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2013 ");
    \u0275\u0275elementEnd();
  }
}
function ClientCalendarComponent_div_19_div_28_div_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, step_r8.end_date, "MMM d"));
  }
}
function ClientCalendarComponent_div_19_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275template(1, ClientCalendarComponent_div_19_div_28_div_6_span_1_Template, 3, 4, "span", 62)(2, ClientCalendarComponent_div_19_div_28_div_6_span_2_Template, 2, 0, "span", 62)(3, ClientCalendarComponent_div_19_div_28_div_6_span_3_Template, 3, 4, "span", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r8.start_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r8.start_date && step_r8.end_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r8.end_date);
  }
}
function ClientCalendarComponent_div_19_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55);
    \u0275\u0275element(2, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57)(4, "div", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ClientCalendarComponent_div_19_div_28_div_6_Template, 4, 3, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 60);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("step-" + (step_r8.status == null ? null : step_r8.status.toLowerCase()));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.stepIcon(step_r8.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r8.step_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r8.start_date || step_r8.end_date);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.statusBadge(step_r8.status || "NOT_STARTED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((step_r8.status || "NOT_STARTED").replace("_", " "));
  }
}
function ClientCalendarComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div")(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275element(6, "i", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 36);
    \u0275\u0275listener("click", function ClientCalendarComponent_div_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeTask());
    });
    \u0275\u0275element(9, "i", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 38)(11, "div", 39)(12, "span", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ClientCalendarComponent_div_19_span_14_Template, 4, 4, "span", 41)(15, ClientCalendarComponent_div_19_span_15_Template, 4, 4, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ClientCalendarComponent_div_19_div_16_Template, 2, 1, "div", 42);
    \u0275\u0275elementStart(17, "div", 43)(18, "div", 44)(19, "span");
    \u0275\u0275text(20, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 45);
    \u0275\u0275element(24, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 47);
    \u0275\u0275text(26, "Workflow Steps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 48);
    \u0275\u0275template(28, ClientCalendarComponent_div_19_div_28_Template, 9, 9, "div", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.selectedTask.task_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.selectedTask.project_name);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r3.statusBadge(ctx_r3.selectedTask.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.selectedTask.status.replace("_", " "));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTask.start_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTask.end_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTask.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r3.selectedTask.completed_steps, "/", ctx_r3.selectedTask.total_steps, " steps");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.progressPct(ctx_r3.selectedTask), "%");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.selectedTask.workflow_steps);
  }
}
var ClientCalendarComponent = class _ClientCalendarComponent {
  taskService;
  dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  calendarDays = [];
  tasks = [];
  loading = false;
  selectedTask = null;
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  currentMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  constructor(taskService) {
    this.taskService = taskService;
  }
  ngOnInit() {
    this.loadTasks();
  }
  get monthLabel() {
    return new Date(this.currentYear, this.currentMonth - 1, 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  }
  loadTasks() {
    this.loading = true;
    this.taskService.getCalendarTasks(this.currentYear, this.currentMonth).subscribe({
      next: (res) => {
        this.tasks = res.data || [];
        this.buildCalendar();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.buildCalendar();
      }
    });
  }
  buildCalendar() {
    const year = this.currentYear;
    const month = this.currentMonth;
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const days = [];
    for (let i = 0; i < firstDay.getDay(); i++) {
      const d = new Date(year, month - 1, -firstDay.getDay() + i + 1);
      days.push({ date: d, isCurrentMonth: false, tasks: [] });
    }
    for (let d = 1; d <= lastDay.getDate(); d++) {
      const date = new Date(year, month - 1, d);
      days.push({ date, isCurrentMonth: true, tasks: this.getTasksForDay(date) });
    }
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(year, month, i);
      days.push({ date: d, isCurrentMonth: false, tasks: [] });
    }
    this.calendarDays = days;
  }
  getTasksForDay(date) {
    return this.tasks.filter((t) => {
      if (!t.start_date || !t.end_date)
        return false;
      const start = new Date(t.start_date);
      const end = new Date(t.end_date);
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
      return date >= start && date <= end;
    });
  }
  isToday(date) {
    const today = /* @__PURE__ */ new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  }
  prevMonth() {
    if (this.currentMonth === 1) {
      this.currentMonth = 12;
      this.currentYear--;
    } else
      this.currentMonth--;
    this.loadTasks();
  }
  nextMonth() {
    if (this.currentMonth === 12) {
      this.currentMonth = 1;
      this.currentYear++;
    } else
      this.currentMonth++;
    this.loadTasks();
  }
  goToday() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.currentMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
    this.loadTasks();
  }
  openTask(task) {
    this.selectedTask = task;
  }
  closeTask() {
    this.selectedTask = null;
  }
  progressPct(task) {
    return task.total_steps === 0 ? 0 : Math.floor(task.completed_steps / task.total_steps * 100);
  }
  statusBadge(status) {
    const map = {
      "NOT_STARTED": "bg-secondary",
      "IN_PROGRESS": "bg-warning text-dark",
      "COMPLETED": "bg-success",
      "SKIPPED": "bg-light text-muted"
    };
    return map[status] || "bg-secondary";
  }
  stepIcon(status) {
    const map = {
      "NOT_STARTED": "bi-circle",
      "IN_PROGRESS": "bi-arrow-clockwise text-warning",
      "COMPLETED": "bi-check-circle-fill text-success",
      "SKIPPED": "bi-dash-circle text-muted"
    };
    return map[status || "NOT_STARTED"] || "bi-circle";
  }
  static \u0275fac = function ClientCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientCalendarComponent)(\u0275\u0275directiveInject(TaskService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientCalendarComponent, selectors: [["app-client-calendar"]], decls: 20, vars: 5, consts: [[1, "cal-page"], [1, "cal-header"], [1, "cal-title"], [1, "mb-0"], [1, "cal-subtitle"], [1, "cal-nav"], [1, "cal-nav-btn", 3, "click"], [1, "bi", "bi-chevron-left"], [1, "cal-month-label"], [1, "bi", "bi-chevron-right"], [1, "cal-today-btn", 3, "click"], ["class", "cal-loading", 4, "ngIf"], ["class", "cal-grid-wrap", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], ["class", "cal-modal", 4, "ngIf"], [1, "cal-loading"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "cal-grid-wrap"], [1, "cal-day-headers"], ["class", "cal-day-header", 4, "ngFor", "ngForOf"], [1, "cal-grid"], ["class", "cal-cell", 3, "other-month", "today", 4, "ngFor", "ngForOf"], [1, "cal-day-header"], [1, "cal-cell"], [1, "cal-date-num"], [1, "cal-tasks"], ["class", "cal-task-chip", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "cal-task-chip", 3, "click"], [1, "chip-dot"], [1, "chip-name"], [1, "modal-backdrop-custom", 3, "click"], [1, "cal-modal"], [1, "cal-modal-header"], [1, "cal-modal-title"], [1, "cal-modal-project"], [1, "bi", "bi-kanban", "me-1"], [1, "cal-modal-close", 3, "click"], [1, "bi", "bi-x-lg"], [1, "cal-modal-body"], [1, "cal-modal-meta"], [1, "badge"], ["class", "cal-meta-item", 4, "ngIf"], ["class", "cal-modal-desc", 4, "ngIf"], [1, "cal-progress-wrap"], [1, "cal-progress-label"], [1, "progress", 2, "height", "6px"], [1, "progress-bar", "bg-primary"], [1, "cal-steps-title"], [1, "cal-steps"], ["class", "cal-step", 3, "class", 4, "ngFor", "ngForOf"], [1, "cal-meta-item"], [1, "bi", "bi-calendar-event", "me-1"], [1, "bi", "bi-calendar-check", "me-1"], [1, "cal-modal-desc"], [1, "cal-step"], [1, "step-icon"], [1, "bi"], [1, "step-info"], [1, "step-name"], ["class", "step-dates", 4, "ngIf"], [1, "step-badge", "badge"], [1, "step-dates"], [4, "ngIf"]], template: function ClientCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
      \u0275\u0275text(4, "My Task Calendar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "View your ongoing tasks by date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function ClientCalendarComponent_Template_button_click_8_listener() {
        return ctx.prevMonth();
      });
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 6);
      \u0275\u0275listener("click", function ClientCalendarComponent_Template_button_click_12_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275listener("click", function ClientCalendarComponent_Template_button_click_14_listener() {
        return ctx.goToday();
      });
      \u0275\u0275text(15, "Today");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, ClientCalendarComponent_div_16_Template, 4, 0, "div", 11)(17, ClientCalendarComponent_div_17_Template, 5, 2, "div", 12)(18, ClientCalendarComponent_div_18_Template, 1, 0, "div", 13)(19, ClientCalendarComponent_div_19_Template, 29, 13, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.monthLabel);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedTask);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedTask);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe], styles: ["\n.cal-page[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  min-height: 100vh;\n  background: #f8f9fb;\n}\n.cal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.cal-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #212529;\n}\n.cal-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n}\n.cal-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.cal-nav-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer !important;\n  color: #495057;\n}\n.cal-nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  color: #0d6efd;\n}\n.cal-month-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212529;\n  min-width: 140px;\n  text-align: center;\n}\n.cal-today-btn[_ngcontent-%COMP%] {\n  background: #0d6efd;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 0.3rem 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer !important;\n}\n.cal-today-btn[_ngcontent-%COMP%]:hover {\n  background: #0b5ed7;\n}\n.cal-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6c757d;\n  padding: 2rem;\n}\n.cal-grid-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n  overflow: hidden;\n}\n.cal-day-headers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: #f8f9fb;\n  border-bottom: 1px solid #e9ecef;\n}\n.cal-day-header[_ngcontent-%COMP%] {\n  padding: 0.6rem;\n  text-align: center;\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n}\n.cal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.cal-cell[_ngcontent-%COMP%] {\n  min-height: 110px;\n  border-right: 1px solid #f0f0f0;\n  border-bottom: 1px solid #f0f0f0;\n  padding: 0.4rem;\n}\n.cal-cell[_ngcontent-%COMP%]:nth-child(7n) {\n  border-right: none;\n}\n.cal-cell.other-month[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.cal-cell.other-month[_ngcontent-%COMP%]   .cal-date-num[_ngcontent-%COMP%] {\n  color: #ced4da;\n}\n.cal-cell.today[_ngcontent-%COMP%] {\n  background: #f0f4ff;\n}\n.cal-cell.today[_ngcontent-%COMP%]   .cal-date-num[_ngcontent-%COMP%] {\n  background: #0d6efd;\n  color: #fff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cal-date-num[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.3rem;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cal-tasks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cal-task-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 500;\n  cursor: pointer !important;\n  transition: opacity 0.15s;\n  overflow: hidden;\n}\n.cal-task-chip[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.chip-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.chip-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-not_started[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n}\n.status-not_started[_ngcontent-%COMP%]   .chip-dot[_ngcontent-%COMP%] {\n  background: #adb5bd;\n}\n.status-in_progress[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-in_progress[_ngcontent-%COMP%]   .chip-dot[_ngcontent-%COMP%] {\n  background: #ffc107;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #0a3622;\n}\n.status-completed[_ngcontent-%COMP%]   .chip-dot[_ngcontent-%COMP%] {\n  background: #198754;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1040;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.cal-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 420px;\n  background: #fff;\n  z-index: 1050;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);\n}\n.cal-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1.25rem 1.25rem 1rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.cal-modal-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #212529;\n}\n.cal-modal-project[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-top: 0.2rem;\n}\n.cal-modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  font-size: 1rem;\n  cursor: pointer !important;\n  padding: 0.25rem;\n}\n.cal-modal-close[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.cal-modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.25rem;\n}\n.cal-modal-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.75rem;\n}\n.cal-meta-item[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #6c757d;\n}\n.cal-modal-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #495057;\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-bottom: 1rem;\n}\n.cal-progress-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.cal-progress-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.78rem;\n  color: #6c757d;\n  margin-bottom: 0.4rem;\n}\n.cal-steps-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n  margin-bottom: 0.75rem;\n}\n.cal-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.cal-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: 8px;\n  background: #f8f9fa;\n  border-left: 3px solid #dee2e6;\n}\n.cal-step.step-in_progress[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  border-left-color: #ffc107;\n}\n.cal-step.step-completed[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-left-color: #198754;\n}\n.cal-step.step-skipped[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-left-color: #adb5bd;\n  opacity: 0.7;\n}\n.step-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e9ecef;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.step-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.step-name[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 500;\n  color: #212529;\n}\n.step-dates[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6c757d;\n  margin-top: 1px;\n}\n.step-badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n}\n@media (max-width: 768px) {\n  .cal-modal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=calendar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientCalendarComponent, [{
    type: Component,
    args: [{ selector: "app-client-calendar", standalone: true, imports: [CommonModule], template: `
    <div class="cal-page">
      <!-- Header -->
      <div class="cal-header">
        <div class="cal-title">
          <h5 class="mb-0">My Task Calendar</h5>
          <span class="cal-subtitle">View your ongoing tasks by date</span>
        </div>
        <div class="cal-nav">
          <button class="cal-nav-btn" (click)="prevMonth()"><i class="bi bi-chevron-left"></i></button>
          <span class="cal-month-label">{{ monthLabel }}</span>
          <button class="cal-nav-btn" (click)="nextMonth()"><i class="bi bi-chevron-right"></i></button>
          <button class="cal-today-btn" (click)="goToday()">Today</button>
        </div>
      </div>

      <!-- Loading -->
      <div *ngIf="loading" class="cal-loading">
        <div class="spinner-border spinner-border-sm text-primary"></div>
        <span>Loading tasks...</span>
      </div>

      <!-- Calendar Grid -->
      <div *ngIf="!loading" class="cal-grid-wrap">
        <!-- Day headers -->
        <div class="cal-day-headers">
          <div *ngFor="let d of dayNames" class="cal-day-header">{{ d }}</div>
        </div>
        <!-- Weeks -->
        <div class="cal-grid">
          <div *ngFor="let day of calendarDays"
               class="cal-cell"
               [class.other-month]="!day.isCurrentMonth"
               [class.today]="isToday(day.date)">
            <div class="cal-date-num">{{ day.date.getDate() }}</div>
            <div class="cal-tasks">
              <div *ngFor="let task of day.tasks"
                   class="cal-task-chip"
                   [class]="'status-' + task.status.toLowerCase()"
                   (click)="openTask(task)">
                <span class="chip-dot"></span>
                <span class="chip-name">{{ task.task_name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Task Detail Modal -->
      <div *ngIf="selectedTask" class="modal-backdrop-custom" (click)="closeTask()"></div>
      <div *ngIf="selectedTask" class="cal-modal">
        <div class="cal-modal-header">
          <div>
            <div class="cal-modal-title">{{ selectedTask.task_name }}</div>
            <div class="cal-modal-project"><i class="bi bi-kanban me-1"></i>{{ selectedTask.project_name }}</div>
          </div>
          <button class="cal-modal-close" (click)="closeTask()"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="cal-modal-body">
          <div class="cal-modal-meta">
            <span class="badge" [class]="statusBadge(selectedTask.status)">{{ selectedTask.status.replace('_', ' ') }}</span>
            <span class="cal-meta-item" *ngIf="selectedTask.start_date"><i class="bi bi-calendar-event me-1"></i>{{ selectedTask.start_date | date:'mediumDate' }}</span>
            <span class="cal-meta-item" *ngIf="selectedTask.end_date"><i class="bi bi-calendar-check me-1"></i>{{ selectedTask.end_date | date:'mediumDate' }}</span>
          </div>
          <div *ngIf="selectedTask.description" class="cal-modal-desc">{{ selectedTask.description }}</div>

          <!-- Progress -->
          <div class="cal-progress-wrap">
            <div class="cal-progress-label">
              <span>Progress</span>
              <span>{{ selectedTask.completed_steps }}/{{ selectedTask.total_steps }} steps</span>
            </div>
            <div class="progress" style="height:6px">
              <div class="progress-bar bg-primary" [style.width.%]="progressPct(selectedTask)"></div>
            </div>
          </div>

          <!-- Workflow Steps -->
          <div class="cal-steps-title">Workflow Steps</div>
          <div class="cal-steps">
            <div *ngFor="let step of selectedTask.workflow_steps" class="cal-step" [class]="'step-' + step.status?.toLowerCase()">
              <div class="step-icon">
                <i class="bi" [class]="stepIcon(step.status)"></i>
              </div>
              <div class="step-info">
                <div class="step-name">{{ step.step_name }}</div>
                <div class="step-dates" *ngIf="step.start_date || step.end_date">
                  <span *ngIf="step.start_date">{{ step.start_date | date:'MMM d' }}</span>
                  <span *ngIf="step.start_date && step.end_date"> \u2013 </span>
                  <span *ngIf="step.end_date">{{ step.end_date | date:'MMM d' }}</span>
                </div>
              </div>
              <span class="step-badge badge" [class]="statusBadge(step.status || 'NOT_STARTED')">{{ (step.status || 'NOT_STARTED').replace('_', ' ') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;fa87585cdcff3243a7ebc4d237b6502d973869860e61ddd200bcd52b5fa9ea57;c:/Users/Administrator/Desktop/syncbridge/MIT-FIrst/Photography-Portfolio-UI/src/app/client/calendar/calendar.component.ts */\n.cal-page {\n  padding: 1.5rem;\n  min-height: 100vh;\n  background: #f8f9fb;\n}\n.cal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.cal-title h5 {\n  font-weight: 700;\n  color: #212529;\n}\n.cal-subtitle {\n  font-size: 0.8rem;\n  color: #6c757d;\n}\n.cal-nav {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.cal-nav-btn {\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer !important;\n  color: #495057;\n}\n.cal-nav-btn:hover {\n  background: #f0f4ff;\n  color: #0d6efd;\n}\n.cal-month-label {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212529;\n  min-width: 140px;\n  text-align: center;\n}\n.cal-today-btn {\n  background: #0d6efd;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 0.3rem 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer !important;\n}\n.cal-today-btn:hover {\n  background: #0b5ed7;\n}\n.cal-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6c757d;\n  padding: 2rem;\n}\n.cal-grid-wrap {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n  overflow: hidden;\n}\n.cal-day-headers {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: #f8f9fb;\n  border-bottom: 1px solid #e9ecef;\n}\n.cal-day-header {\n  padding: 0.6rem;\n  text-align: center;\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n}\n.cal-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.cal-cell {\n  min-height: 110px;\n  border-right: 1px solid #f0f0f0;\n  border-bottom: 1px solid #f0f0f0;\n  padding: 0.4rem;\n}\n.cal-cell:nth-child(7n) {\n  border-right: none;\n}\n.cal-cell.other-month {\n  background: #fafafa;\n}\n.cal-cell.other-month .cal-date-num {\n  color: #ced4da;\n}\n.cal-cell.today {\n  background: #f0f4ff;\n}\n.cal-cell.today .cal-date-num {\n  background: #0d6efd;\n  color: #fff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cal-date-num {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.3rem;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cal-tasks {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cal-task-chip {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 500;\n  cursor: pointer !important;\n  transition: opacity 0.15s;\n  overflow: hidden;\n}\n.cal-task-chip:hover {\n  opacity: 0.8;\n}\n.chip-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.chip-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-not_started {\n  background: #f8f9fa;\n  color: #6c757d;\n}\n.status-not_started .chip-dot {\n  background: #adb5bd;\n}\n.status-in_progress {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-in_progress .chip-dot {\n  background: #ffc107;\n}\n.status-completed {\n  background: #d1e7dd;\n  color: #0a3622;\n}\n.status-completed .chip-dot {\n  background: #198754;\n}\n.modal-backdrop-custom {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1040;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.cal-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 420px;\n  background: #fff;\n  z-index: 1050;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);\n}\n.cal-modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1.25rem 1.25rem 1rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.cal-modal-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #212529;\n}\n.cal-modal-project {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-top: 0.2rem;\n}\n.cal-modal-close {\n  background: none;\n  border: none;\n  color: #6c757d;\n  font-size: 1rem;\n  cursor: pointer !important;\n  padding: 0.25rem;\n}\n.cal-modal-close:hover {\n  color: #212529;\n}\n.cal-modal-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.25rem;\n}\n.cal-modal-meta {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.75rem;\n}\n.cal-meta-item {\n  font-size: 0.78rem;\n  color: #6c757d;\n}\n.cal-modal-desc {\n  font-size: 0.85rem;\n  color: #495057;\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-bottom: 1rem;\n}\n.cal-progress-wrap {\n  margin-bottom: 1.25rem;\n}\n.cal-progress-label {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.78rem;\n  color: #6c757d;\n  margin-bottom: 0.4rem;\n}\n.cal-steps-title {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n  margin-bottom: 0.75rem;\n}\n.cal-steps {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.cal-step {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: 8px;\n  background: #f8f9fa;\n  border-left: 3px solid #dee2e6;\n}\n.cal-step.step-in_progress {\n  background: #fff8e1;\n  border-left-color: #ffc107;\n}\n.cal-step.step-completed {\n  background: #f0fdf4;\n  border-left-color: #198754;\n}\n.cal-step.step-skipped {\n  background: #f8f9fa;\n  border-left-color: #adb5bd;\n  opacity: 0.7;\n}\n.step-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e9ecef;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.step-info {\n  flex: 1;\n  min-width: 0;\n}\n.step-name {\n  font-size: 0.83rem;\n  font-weight: 500;\n  color: #212529;\n}\n.step-dates {\n  font-size: 0.72rem;\n  color: #6c757d;\n  margin-top: 1px;\n}\n.step-badge {\n  font-size: 0.65rem;\n}\n@media (max-width: 768px) {\n  .cal-modal {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=calendar.component.css.map */\n"] }]
  }], () => [{ type: TaskService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientCalendarComponent, { className: "ClientCalendarComponent", filePath: "src/app/client/calendar/calendar.component.ts", lineNumber: 172 });
})();
export {
  ClientCalendarComponent
};
//# sourceMappingURL=chunk-7BZ6IYHB.js.map
