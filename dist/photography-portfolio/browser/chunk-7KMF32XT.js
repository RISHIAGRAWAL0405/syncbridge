import {
  WorkflowService
} from "./chunk-EJP44BUO.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DSYNY4LS.js";
import {
  TaskService
} from "./chunk-JFBCO3PX.js";
import {
  ProjectService
} from "./chunk-3XKYANS7.js";
import "./chunk-5BILWADD.js";
import "./chunk-WWIHBCUC.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-URCQYAQL.js";
import {
  ChangeDetectorRef,
  Component,
  finalize,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CQ3CZWR7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/admin/tasks/tasks.component.ts
var _c0 = () => ({ standalone: true });
function TasksComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275listener("click", function TasksComponent_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.success = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.success, " ");
  }
}
function TasksComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275listener("click", function TasksComponent_div_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function TasksComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_div_21_tr_17_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
}
function TasksComponent_div_21_tr_17_i_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 46);
  }
}
function TasksComponent_div_21_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 30)(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 36);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 36);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 31)(18, "button", 38);
    \u0275\u0275listener("click", function TasksComponent_div_21_tr_17_Template_button_click_18_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSchedule(task_r5));
    });
    \u0275\u0275element(19, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 40);
    \u0275\u0275listener("click", function TasksComponent_div_21_tr_17_Template_button_click_20_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(task_r5));
    });
    \u0275\u0275element(21, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 42);
    \u0275\u0275listener("click", function TasksComponent_div_21_tr_17_Template_button_click_22_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteTask(task_r5));
    });
    \u0275\u0275template(23, TasksComponent_div_21_tr_17_span_23_Template, 1, 0, "span", 43)(24, TasksComponent_div_21_tr_17_i_24_Template, 1, 0, "i", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r5.task_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.task_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.project_name || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r5.workflow_template_name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.start_date ? \u0275\u0275pipeBind2(13, 9, task_r5.start_date, "mediumDate") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r5.end_date ? \u0275\u0275pipeBind2(16, 12, task_r5.end_date, "mediumDate") : "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.deletingTaskId === task_r5.task_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletingTaskId === task_r5.task_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletingTaskId !== task_r5.task_id);
  }
}
function TasksComponent_div_21_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2, "No tasks found");
    \u0275\u0275elementEnd()();
  }
}
function TasksComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 28)(2, "thead", 29)(3, "tr")(4, "th", 30);
    \u0275\u0275text(5, "Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Start");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "End");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 31);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, TasksComponent_div_21_tr_17_Template, 25, 15, "tr", 32)(18, TasksComponent_div_21_tr_18_Template, 3, 0, "tr", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.filteredTasks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredTasks.length === 0);
  }
}
function TasksComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function TasksComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTaskPanel = false);
    });
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_div_23_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function TasksComponent_div_23_div_9_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r8 = ctx.$implicit;
    \u0275\u0275property("value", project_r8.project_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(project_r8.project_name);
  }
}
function TasksComponent_div_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "label", 58);
    \u0275\u0275text(2, "Project *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 73)(4, "option", 74);
    \u0275\u0275text(5, "\u2014 Select Project \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TasksComponent_div_23_div_9_option_6_Template, 2, 2, "option", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 60);
    \u0275\u0275text(8, "Required");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["project_id"].invalid && ctx_r1.f["project_id"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.projects);
  }
}
function TasksComponent_div_23_div_10_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r9 = ctx.$implicit;
    \u0275\u0275property("value", template_r9.workflow_template_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(template_r9.workflow_template_name);
  }
}
function TasksComponent_div_23_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "label", 58);
    \u0275\u0275text(2, "Workflow Template *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 77)(4, "option", 74);
    \u0275\u0275text(5, "\u2014 Select Template \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TasksComponent_div_23_div_10_option_6_Template, 2, 2, "option", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 60);
    \u0275\u0275text(8, "Required");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["workflow_template_id"].invalid && ctx_r1.f["workflow_template_id"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.templates);
  }
}
function TasksComponent_div_23_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 78);
  }
}
function TasksComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "h6", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function TasksComponent_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTaskPanel = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 52);
    \u0275\u0275template(6, TasksComponent_div_23_div_6_Template, 2, 1, "div", 53);
    \u0275\u0275elementStart(7, "form", 54);
    \u0275\u0275listener("ngSubmit", function TasksComponent_div_23_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(8, "div", 55);
    \u0275\u0275template(9, TasksComponent_div_23_div_9_Template, 9, 3, "div", 56)(10, TasksComponent_div_23_div_10_Template, 9, 3, "div", 56);
    \u0275\u0275elementStart(11, "div", 57)(12, "label", 58);
    \u0275\u0275text(13, "Task Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 59);
    \u0275\u0275elementStart(15, "div", 60);
    \u0275\u0275text(16, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 61)(18, "label", 58);
    \u0275\u0275text(19, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 62);
    \u0275\u0275elementStart(21, "div", 60);
    \u0275\u0275text(22, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 63)(24, "label", 58);
    \u0275\u0275text(25, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "textarea", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 65)(28, "label", 58);
    \u0275\u0275text(29, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 65)(32, "label", 58);
    \u0275\u0275text(33, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 68)(36, "button", 69);
    \u0275\u0275listener("click", function TasksComponent_div_23_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTaskPanel = false);
    });
    \u0275\u0275text(37, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 70);
    \u0275\u0275template(39, TasksComponent_div_23_span_39_Template, 1, 0, "span", 71);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.panelMode === "edit" ? "Edit Task" : "Add Task");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.panelMode === "create");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.panelMode === "create");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["task_name"].invalid && ctx_r1.f["task_name"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["task_code"].invalid && ctx_r1.f["task_code"].touched);
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Saving..." : "Save", " ");
  }
}
function TasksComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function TasksComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showSchedulePanel = false);
    });
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_div_25_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function TasksComponent_div_25_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 85);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function TasksComponent_div_25_tr_25_Template_input_ngModelChange_10_listener($event) {
      const step_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(step_r13.start_date, $event) || (step_r13.start_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function TasksComponent_div_25_tr_25_Template_input_ngModelChange_12_listener($event) {
      const step_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(step_r13.end_date, $event) || (step_r13.end_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function TasksComponent_div_25_tr_25_Template_input_ngModelChange_14_listener($event) {
      const step_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(step_r13.notes, $event) || (step_r13.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r13.display_order || i_r14 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r13.step_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r13.step_code);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", step_r13.start_date);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", step_r13.end_date);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", step_r13.notes);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
  }
}
function TasksComponent_div_25_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 88);
    \u0275\u0275text(2, "No workflow steps found");
    \u0275\u0275elementEnd()();
  }
}
function TasksComponent_div_25_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 78);
  }
}
function TasksComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 50)(2, "div")(3, "h6", 1);
    \u0275\u0275text(4, "Workflow Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function TasksComponent_div_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showSchedulePanel = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 52);
    \u0275\u0275template(9, TasksComponent_div_25_div_9_Template, 2, 1, "div", 53);
    \u0275\u0275elementStart(10, "div", 27)(11, "table", 80)(12, "thead", 29)(13, "tr")(14, "th", 81);
    \u0275\u0275text(15, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Step");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 82);
    \u0275\u0275text(19, "Start");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 82);
    \u0275\u0275text(21, "End");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Notes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, TasksComponent_div_25_tr_25_Template, 15, 12, "tr", 32)(26, TasksComponent_div_25_tr_26_Template, 3, 0, "tr", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 83)(28, "button", 69);
    \u0275\u0275listener("click", function TasksComponent_div_25_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showSchedulePanel = false);
    });
    \u0275\u0275text(29, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 84);
    \u0275\u0275listener("click", function TasksComponent_div_25_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSchedule());
    });
    \u0275\u0275template(31, TasksComponent_div_25_span_31_Template, 1, 0, "span", 71);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedTask == null ? null : ctx_r1.selectedTask.task_name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.scheduleSteps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.scheduleSteps.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.scheduleSaving || ctx_r1.scheduleSteps.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.scheduleSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.scheduleSaving ? "Saving..." : "Save Schedule", " ");
  }
}
var TasksComponent = class _TasksComponent {
  taskService;
  projectService;
  workflowService;
  fb;
  cdr = inject(ChangeDetectorRef);
  tasks = [];
  projects = [];
  templates = [];
  selectedTask = null;
  scheduleSteps = [];
  loading = true;
  saving = false;
  scheduleSaving = false;
  deletingTaskId = "";
  error = "";
  success = "";
  searchTerm = "";
  showTaskPanel = false;
  showSchedulePanel = false;
  panelMode = "create";
  editingTask = null;
  form;
  constructor(taskService, projectService, workflowService, fb) {
    this.taskService = taskService;
    this.projectService = projectService;
    this.workflowService = workflowService;
    this.fb = fb;
    this.form = this.fb.group({
      project_id: ["", Validators.required],
      workflow_template_id: ["", Validators.required],
      task_name: ["", Validators.required],
      task_code: ["", Validators.required],
      description: [""],
      start_date: [""],
      end_date: [""]
    });
  }
  ngOnInit() {
    this.loadTasks();
    this.loadLookups();
  }
  loadTasks() {
    this.loading = true;
    this.taskService.getAllTasks().pipe(finalize(() => this.finishLoading())).subscribe({
      next: (r) => {
        if (r.data)
          this.tasks = r.data;
        this.notifyView();
      },
      error: (err) => {
        this.error = err?.error?.errorMessage || "Failed to load tasks";
        this.notifyView();
      }
    });
  }
  loadLookups() {
    this.projectService.getAllProjects().subscribe((r) => {
      if (r.data)
        this.projects = r.data.filter((p) => p.is_active);
      this.notifyView();
    });
    this.workflowService.getAllTemplates().subscribe((r) => {
      if (r.data)
        this.templates = r.data.filter((t) => t.is_active);
      this.notifyView();
    });
  }
  openCreate() {
    this.panelMode = "create";
    this.editingTask = null;
    this.form.reset();
    this.form.get("project_id")?.enable();
    this.form.get("workflow_template_id")?.enable();
    this.error = "";
    this.showTaskPanel = true;
  }
  openEdit(task) {
    this.panelMode = "edit";
    this.editingTask = task;
    this.form.patchValue(__spreadProps(__spreadValues({}, task), {
      start_date: this.toDateInput(task.start_date),
      end_date: this.toDateInput(task.end_date)
    }));
    this.form.get("project_id")?.disable();
    this.form.get("workflow_template_id")?.disable();
    this.error = "";
    this.showTaskPanel = true;
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.error = "";
    const value = this.form.getRawValue();
    const obs = this.editingTask ? this.taskService.updateTask(this.editingTask.task_id, {
      task_name: value.task_name,
      task_code: value.task_code,
      description: value.description,
      start_date: value.start_date,
      end_date: value.end_date
    }) : this.taskService.createTask(value);
    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = `Task ${this.editingTask ? "updated" : "created"} successfully`;
          this.showTaskPanel = false;
          this.loadTasks();
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || "Operation failed";
        }
        this.notifyView();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.errorMessage || "Operation failed";
        this.notifyView();
      }
    });
  }
  openSchedule(task) {
    this.selectedTask = task;
    this.scheduleSteps = [];
    this.showSchedulePanel = true;
    this.error = "";
    this.taskService.getTaskById(task.task_id).subscribe({
      next: (r) => {
        if (r.data) {
          this.selectedTask = r.data;
          this.scheduleSteps = (r.data.workflow_steps || []).map((s) => __spreadProps(__spreadValues({}, s), {
            start_date: this.toDateInput(s.start_date),
            end_date: this.toDateInput(s.end_date)
          }));
        }
        this.notifyView();
      },
      error: (err) => {
        this.error = err?.error?.errorMessage || "Failed to load task workflow";
        this.notifyView();
      }
    });
  }
  saveSchedule() {
    if (!this.selectedTask)
      return;
    this.scheduleSaving = true;
    this.error = "";
    this.taskService.updateWorkflowStepsSchedule(this.selectedTask.task_id, {
      steps: this.scheduleSteps.map((s) => ({
        task_workflow_step_id: s.task_workflow_step_id,
        start_date: s.start_date || null,
        end_date: s.end_date || null,
        notes: s.notes || null
      }))
    }).subscribe({
      next: (res) => {
        this.scheduleSaving = false;
        if (res.statusCode === 200) {
          this.success = "Workflow schedule updated";
          this.showSchedulePanel = false;
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || "Schedule update failed";
        }
        this.notifyView();
      },
      error: (err) => {
        this.scheduleSaving = false;
        this.error = err?.error?.errorMessage || "Schedule update failed";
        this.notifyView();
      }
    });
  }
  deleteTask(task) {
    if (!confirm(`Delete task "${task.task_name}"? This will also remove its workflow steps.`))
      return;
    this.deletingTaskId = task.task_id;
    this.error = "";
    this.taskService.deleteTask(task.task_id).subscribe({
      next: (res) => {
        this.deletingTaskId = "";
        if (res.statusCode === 200) {
          this.success = "Task deleted";
          this.loadTasks();
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || "Delete failed";
        }
        this.notifyView();
      },
      error: (err) => {
        this.deletingTaskId = "";
        this.error = err?.error?.errorMessage || "Delete failed";
        this.notifyView();
      }
    });
  }
  get filteredTasks() {
    if (!this.searchTerm)
      return this.tasks;
    const t = this.searchTerm.toLowerCase();
    return this.tasks.filter((task) => task.task_name?.toLowerCase().includes(t) || task.task_code?.toLowerCase().includes(t) || task.project_name?.toLowerCase().includes(t) || task.workflow_template_name?.toLowerCase().includes(t));
  }
  get f() {
    return this.form.controls;
  }
  toDateInput(value) {
    return value ? value.substring(0, 10) : "";
  }
  finishLoading() {
    queueMicrotask(() => {
      this.loading = false;
      this.notifyView();
    });
  }
  clearSuccessLater() {
    setTimeout(() => {
      this.success = "";
      this.notifyView();
    }, 3e3);
  }
  notifyView() {
    this.cdr.markForCheck();
  }
  static \u0275fac = function TasksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksComponent)(\u0275\u0275directiveInject(TaskService), \u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(WorkflowService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], decls: 26, vars: 12, consts: [[1, "page-header", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], ["class", "alert alert-success alert-dismissible py-2 small", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible py-2 small", 4, "ngIf"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "bg-white", "border-bottom", "py-3", "d-flex", "align-items-center", "justify-content-between", "gap-3"], [1, "input-group", "input-group-sm", 2, "max-width", "320px"], [1, "input-group-text", "bg-light", "border-end-0"], [1, "bi", "bi-search", "text-muted"], ["type", "text", "placeholder", "Search tasks...", 1, "form-control", "border-start-0", "ps-0", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "badge", "bg-secondary-subtle", "text-secondary"], [1, "card-body", "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], ["class", "modal-panel card shadow-lg border-0", 4, "ngIf"], ["class", "modal-panel modal-panel-lg card shadow-lg border-0", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "py-2", "small"], [1, "bi", "bi-check-circle-fill", "me-2"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "py-2", "small"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", "spinner-border-sm"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "ps-4"], [1, "text-end", "pe-4"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "fw-semibold", "small"], [1, "text-muted", 2, "font-size", "0.75rem"], [1, "small", "text-muted"], [1, "badge", "bg-info-subtle", "text-info"], ["title", "Workflow Schedule", 1, "btn", "btn-sm", "btn-outline-secondary", "me-1", 3, "click"], [1, "bi", "bi-calendar-check"], ["title", "Edit", 1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], ["class", "bi bi-trash", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-trash"], ["colspan", "6", 1, "text-center", "text-muted", "py-4", "small"], [1, "modal-backdrop-custom", 3, "click"], [1, "modal-panel", "card", "shadow-lg", "border-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "py-3"], [1, "btn-close", 3, "click"], [1, "card-body", "overflow-auto"], ["class", "alert alert-danger py-2 small mb-3", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row", "g-3"], ["class", "col-12", 4, "ngIf"], [1, "col-8"], [1, "form-label", "small", "fw-semibold"], ["type", "text", "formControlName", "task_name", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], [1, "col-4"], ["type", "text", "formControlName", "task_code", 1, "form-control", "form-control-sm"], [1, "col-12"], ["formControlName", "description", "rows", "2", 1, "form-control", "form-control-sm"], [1, "col-6"], ["type", "date", "formControlName", "start_date", 1, "form-control", "form-control-sm"], ["type", "date", "formControlName", "end_date", 1, "form-control", "form-control-sm"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], ["formControlName", "project_id", 1, "form-select", "form-select-sm"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "workflow_template_id", 1, "form-select", "form-select-sm"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-panel", "modal-panel-lg", "card", "shadow-lg", "border-0"], [1, "table", "table-sm", "align-middle"], [2, "width", "48px"], [2, "width", "145px"], [1, "d-flex", "justify-content-end", "gap-2", "mt-3"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled"], [1, "text-muted", 2, "font-size", "0.72rem"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["colspan", "5", 1, "text-center", "text-muted", "py-4", "small"]], template: function TasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h5", 1);
      \u0275\u0275text(3, "Tasks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Manage project tasks and workflow schedules");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_6_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "Add Task ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, TasksComponent_div_9_Template, 4, 1, "div", 5)(10, TasksComponent_div_10_Template, 4, 1, "div", 6);
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "span", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function TasksComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "span", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275template(20, TasksComponent_div_20_Template, 2, 0, "div", 15)(21, TasksComponent_div_21_Template, 19, 2, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, TasksComponent_div_22_Template, 1, 0, "div", 17)(23, TasksComponent_div_23_Template, 41, 12, "div", 18)(24, TasksComponent_div_24_Template, 1, 0, "div", 17)(25, TasksComponent_div_25_Template, 33, 7, "div", 19);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.showTaskPanel && !ctx.showSchedulePanel);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.filteredTasks.length, " Tasks");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTaskPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTaskPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSchedulePanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSchedulePanel);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksComponent, [{
    type: Component,
    args: [{ selector: "app-tasks", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="page-header d-flex align-items-center justify-content-between mb-4">\r
  <div>\r
    <h5 class="fw-bold mb-0">Tasks</h5>\r
    <p class="text-muted small mb-0">Manage project tasks and workflow schedules</p>\r
  </div>\r
  <button class="btn btn-primary btn-sm" (click)="openCreate()">\r
    <i class="bi bi-plus-lg me-1"></i>Add Task\r
  </button>\r
</div>\r
\r
<div *ngIf="success" class="alert alert-success alert-dismissible py-2 small">\r
  <i class="bi bi-check-circle-fill me-2"></i>{{ success }}\r
  <button type="button" class="btn-close btn-close-sm" (click)="success=''"></button>\r
</div>\r
\r
<div *ngIf="error && !showTaskPanel && !showSchedulePanel" class="alert alert-danger alert-dismissible py-2 small">\r
  <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ error }}\r
  <button type="button" class="btn-close btn-close-sm" (click)="error=''"></button>\r
</div>\r
\r
<div class="card border-0 shadow-sm">\r
  <div class="card-header bg-white border-bottom py-3 d-flex align-items-center justify-content-between gap-3">\r
    <div class="input-group input-group-sm" style="max-width:320px">\r
      <span class="input-group-text bg-light border-end-0"><i class="bi bi-search text-muted"></i></span>\r
      <input type="text" class="form-control border-start-0 ps-0" placeholder="Search tasks..."\r
        [(ngModel)]="searchTerm" [ngModelOptions]="{standalone:true}">\r
    </div>\r
    <span class="badge bg-secondary-subtle text-secondary">{{ filteredTasks.length }} Tasks</span>\r
  </div>\r
  <div class="card-body p-0">\r
    <div *ngIf="loading" class="text-center py-5">\r
      <div class="spinner-border text-primary spinner-border-sm"></div>\r
    </div>\r
    <div class="table-responsive" *ngIf="!loading">\r
      <table class="table table-hover align-middle mb-0">\r
        <thead class="table-light">\r
          <tr>\r
            <th class="ps-4">Task</th>\r
            <th>Project</th>\r
            <th>Template</th>\r
            <th>Start</th>\r
            <th>End</th>\r
            <th class="text-end pe-4">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let task of filteredTasks">\r
            <td class="ps-4">\r
              <div class="fw-semibold small">{{ task.task_name }}</div>\r
              <div class="text-muted" style="font-size:0.75rem">{{ task.task_code }}</div>\r
            </td>\r
            <td class="small text-muted">{{ task.project_name || '\u2014' }}</td>\r
            <td><span class="badge bg-info-subtle text-info">{{ task.workflow_template_name || '\u2014' }}</span></td>\r
            <td class="small text-muted">{{ task.start_date ? (task.start_date | date:'mediumDate') : '\u2014' }}</td>\r
            <td class="small text-muted">{{ task.end_date ? (task.end_date | date:'mediumDate') : '\u2014' }}</td>\r
            <td class="text-end pe-4">\r
              <button class="btn btn-sm btn-outline-secondary me-1" (click)="openSchedule(task)" title="Workflow Schedule">\r
                <i class="bi bi-calendar-check"></i>\r
              </button>\r
              <button class="btn btn-sm btn-outline-primary me-1" (click)="openEdit(task)" title="Edit">\r
                <i class="bi bi-pencil"></i>\r
              </button>\r
              <button class="btn btn-sm btn-outline-danger" (click)="deleteTask(task)" [disabled]="deletingTaskId === task.task_id" title="Delete">\r
                <span *ngIf="deletingTaskId === task.task_id" class="spinner-border spinner-border-sm"></span>\r
                <i *ngIf="deletingTaskId !== task.task_id" class="bi bi-trash"></i>\r
              </button>\r
            </td>\r
          </tr>\r
          <tr *ngIf="filteredTasks.length === 0">\r
            <td colspan="6" class="text-center text-muted py-4 small">No tasks found</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Task Modal -->\r
<div class="modal-backdrop-custom" *ngIf="showTaskPanel" (click)="showTaskPanel=false"></div>\r
<div class="modal-panel card shadow-lg border-0" *ngIf="showTaskPanel">\r
  <div class="card-header d-flex align-items-center justify-content-between py-3">\r
    <h6 class="fw-bold mb-0">{{ panelMode === 'edit' ? 'Edit Task' : 'Add Task' }}</h6>\r
    <button class="btn-close" (click)="showTaskPanel=false"></button>\r
  </div>\r
  <div class="card-body overflow-auto">\r
    <div *ngIf="error" class="alert alert-danger py-2 small mb-3">{{ error }}</div>\r
    <form [formGroup]="form" (ngSubmit)="save()" novalidate>\r
      <div class="row g-3">\r
        <div class="col-12" *ngIf="panelMode === 'create'">\r
          <label class="form-label small fw-semibold">Project *</label>\r
          <select class="form-select form-select-sm" formControlName="project_id"\r
            [class.is-invalid]="f['project_id'].invalid && f['project_id'].touched">\r
            <option value="">\u2014 Select Project \u2014</option>\r
            <option *ngFor="let project of projects" [value]="project.project_id">{{ project.project_name }}</option>\r
          </select>\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-12" *ngIf="panelMode === 'create'">\r
          <label class="form-label small fw-semibold">Workflow Template *</label>\r
          <select class="form-select form-select-sm" formControlName="workflow_template_id"\r
            [class.is-invalid]="f['workflow_template_id'].invalid && f['workflow_template_id'].touched">\r
            <option value="">\u2014 Select Template \u2014</option>\r
            <option *ngFor="let template of templates" [value]="template.workflow_template_id">{{ template.workflow_template_name }}</option>\r
          </select>\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-8">\r
          <label class="form-label small fw-semibold">Task Name *</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="task_name"\r
            [class.is-invalid]="f['task_name'].invalid && f['task_name'].touched">\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-4">\r
          <label class="form-label small fw-semibold">Code *</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="task_code"\r
            [class.is-invalid]="f['task_code'].invalid && f['task_code'].touched">\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-12">\r
          <label class="form-label small fw-semibold">Description</label>\r
          <textarea class="form-control form-control-sm" formControlName="description" rows="2"></textarea>\r
        </div>\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">Start Date</label>\r
          <input type="date" class="form-control form-control-sm" formControlName="start_date">\r
        </div>\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">End Date</label>\r
          <input type="date" class="form-control form-control-sm" formControlName="end_date">\r
        </div>\r
      </div>\r
      <div class="d-flex justify-content-end gap-2 mt-4">\r
        <button type="button" class="btn btn-sm btn-outline-secondary" (click)="showTaskPanel=false">Cancel</button>\r
        <button type="submit" class="btn btn-sm btn-primary" [disabled]="saving">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>\r
          {{ saving ? 'Saving...' : 'Save' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
<!-- Schedule Modal -->\r
<div class="modal-backdrop-custom" *ngIf="showSchedulePanel" (click)="showSchedulePanel=false"></div>\r
<div class="modal-panel modal-panel-lg card shadow-lg border-0" *ngIf="showSchedulePanel">\r
  <div class="card-header d-flex align-items-center justify-content-between py-3">\r
    <div>\r
      <h6 class="fw-bold mb-0">Workflow Schedule</h6>\r
      <div class="text-muted" style="font-size:0.75rem">{{ selectedTask?.task_name }}</div>\r
    </div>\r
    <button class="btn-close" (click)="showSchedulePanel=false"></button>\r
  </div>\r
  <div class="card-body overflow-auto">\r
    <div *ngIf="error" class="alert alert-danger py-2 small mb-3">{{ error }}</div>\r
    <div class="table-responsive">\r
      <table class="table table-sm align-middle">\r
        <thead class="table-light">\r
          <tr>\r
            <th style="width:48px">#</th>\r
            <th>Step</th>\r
            <th style="width:145px">Start</th>\r
            <th style="width:145px">End</th>\r
            <th>Notes</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let step of scheduleSteps; let i=index">\r
            <td><span class="badge bg-secondary-subtle text-secondary">{{ step.display_order || i + 1 }}</span></td>\r
            <td>\r
              <div class="fw-semibold small">{{ step.step_name }}</div>\r
              <div class="text-muted" style="font-size:0.72rem">{{ step.step_code }}</div>\r
            </td>\r
            <td><input type="date" class="form-control form-control-sm" [(ngModel)]="step.start_date" [ngModelOptions]="{standalone:true}"></td>\r
            <td><input type="date" class="form-control form-control-sm" [(ngModel)]="step.end_date" [ngModelOptions]="{standalone:true}"></td>\r
            <td><input type="text" class="form-control form-control-sm" [(ngModel)]="step.notes" [ngModelOptions]="{standalone:true}"></td>\r
          </tr>\r
          <tr *ngIf="scheduleSteps.length === 0">\r
            <td colspan="5" class="text-center text-muted py-4 small">No workflow steps found</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
    <div class="d-flex justify-content-end gap-2 mt-3">\r
      <button type="button" class="btn btn-sm btn-outline-secondary" (click)="showSchedulePanel=false">Cancel</button>\r
      <button type="button" class="btn btn-sm btn-primary" (click)="saveSchedule()" [disabled]="scheduleSaving || scheduleSteps.length === 0">\r
        <span *ngIf="scheduleSaving" class="spinner-border spinner-border-sm me-1"></span>\r
        {{ scheduleSaving ? 'Saving...' : 'Save Schedule' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: TaskService }, { type: ProjectService }, { type: WorkflowService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/admin/tasks/tasks.component.ts", lineNumber: 18 });
})();
export {
  TasksComponent
};
//# sourceMappingURL=chunk-7KMF32XT.js.map
