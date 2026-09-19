import {
  WorkflowService
} from "./chunk-EJP44BUO.js";
import {
  CheckboxControlValueAccessor,
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
import "./chunk-5BILWADD.js";
import "./chunk-WWIHBCUC.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-URCQYAQL.js";
import {
  ChangeDetectorRef,
  Component,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
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

// src/app/admin/workflow/workflow.component.ts
var _c0 = () => ({ standalone: true });
function WorkflowComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275listener("click", function WorkflowComponent_div_6_Template_button_click_3_listener() {
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
function WorkflowComponent_div_16_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 25)(12, "button", 31);
    \u0275\u0275listener("click", function WorkflowComponent_div_16_tr_22_Template_button_click_12_listener() {
      const step_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditStep(step_r5));
    });
    \u0275\u0275element(13, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 33);
    \u0275\u0275listener("click", function WorkflowComponent_div_16_tr_22_Template_button_click_14_listener() {
      const step_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStepStatus(step_r5));
    });
    \u0275\u0275element(15, "i", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.workflow_step_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r5.workflow_step_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success-subtle", step_r5.is_active)("text-success", step_r5.is_active)("bg-danger-subtle", !step_r5.is_active)("text-danger", !step_r5.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r5.is_active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-outline-danger", step_r5.is_active)("btn-outline-success", !step_r5.is_active);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-toggle-on", step_r5.is_active)("bi-toggle-off", !step_r5.is_active);
  }
}
function WorkflowComponent_div_16_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "No steps found");
    \u0275\u0275elementEnd()();
  }
}
function WorkflowComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 16)(2, "button", 17);
    \u0275\u0275listener("click", function WorkflowComponent_div_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateStep());
    });
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275text(4, "Add Step ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 19)(6, "div", 20)(7, "div", 21)(8, "table", 22)(9, "thead", 23)(10, "tr")(11, "th", 24);
    \u0275\u0275text(12, "Step Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 25);
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, WorkflowComponent_div_16_tr_22_Template, 16, 20, "tr", 26)(23, WorkflowComponent_div_16_tr_23_Template, 3, 0, "tr", 9);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.steps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.steps.length === 0);
  }
}
function WorkflowComponent_div_17_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 25)(12, "button", 31);
    \u0275\u0275listener("click", function WorkflowComponent_div_17_tr_22_Template_button_click_12_listener() {
      const tmpl_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditTemplate(tmpl_r8));
    });
    \u0275\u0275element(13, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 33);
    \u0275\u0275listener("click", function WorkflowComponent_div_17_tr_22_Template_button_click_14_listener() {
      const tmpl_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTemplateStatus(tmpl_r8));
    });
    \u0275\u0275element(15, "i", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tmpl_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tmpl_r8.workflow_template_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tmpl_r8.workflow_template_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tmpl_r8.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success-subtle", tmpl_r8.is_active)("text-success", tmpl_r8.is_active)("bg-danger-subtle", !tmpl_r8.is_active)("text-danger", !tmpl_r8.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tmpl_r8.is_active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-outline-danger", tmpl_r8.is_active)("btn-outline-success", !tmpl_r8.is_active);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-toggle-on", tmpl_r8.is_active)("bi-toggle-off", !tmpl_r8.is_active);
  }
}
function WorkflowComponent_div_17_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "No templates found");
    \u0275\u0275elementEnd()();
  }
}
function WorkflowComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 16)(2, "button", 17);
    \u0275\u0275listener("click", function WorkflowComponent_div_17_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateTemplate());
    });
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275text(4, "Add Template ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 19)(6, "div", 20)(7, "div", 21)(8, "table", 22)(9, "thead", 23)(10, "tr")(11, "th", 24);
    \u0275\u0275text(12, "Template Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 25);
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, WorkflowComponent_div_17_tr_22_Template, 16, 20, "tr", 26)(23, WorkflowComponent_div_17_tr_23_Template, 3, 0, "tr", 9);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.templates);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.templates.length === 0);
  }
}
function WorkflowComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function WorkflowComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStepModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function WorkflowComponent_div_19_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function WorkflowComponent_div_19_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
function WorkflowComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "h6", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function WorkflowComponent_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStepModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275template(6, WorkflowComponent_div_19_div_6_Template, 2, 1, "div", 41);
    \u0275\u0275elementStart(7, "form", 42);
    \u0275\u0275listener("ngSubmit", function WorkflowComponent_div_19_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveStep());
    });
    \u0275\u0275elementStart(8, "div", 43)(9, "label", 44);
    \u0275\u0275text(10, "Step Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 45);
    \u0275\u0275elementStart(12, "div", 46);
    \u0275\u0275text(13, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 43)(15, "label", 44);
    \u0275\u0275text(16, "Step Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 47);
    \u0275\u0275elementStart(18, "div", 46);
    \u0275\u0275text(19, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 48)(21, "label", 44);
    \u0275\u0275text(22, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "textarea", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 50)(25, "button", 51);
    \u0275\u0275listener("click", function WorkflowComponent_div_19_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStepModal = false);
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 52);
    \u0275\u0275template(28, WorkflowComponent_div_19_span_28_Template, 1, 0, "span", 53);
    \u0275\u0275text(29, "Save ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingStep ? "Edit Step" : "Add Step");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.stepForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.sf["workflow_step_name"].invalid && ctx_r1.sf["workflow_step_name"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.sf["workflow_step_code"].invalid && ctx_r1.sf["workflow_step_code"].touched);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
  }
}
function WorkflowComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function WorkflowComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTemplateModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function WorkflowComponent_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function WorkflowComponent_div_21_div_31_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    \u0275\u0275property("value", s_r15.workflow_step_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r15.workflow_step_name);
  }
}
function WorkflowComponent_div_21_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function WorkflowComponent_div_21_div_31_Template_select_ngModelChange_3_listener($event) {
      const ts_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(ts_r14.workflow_step_id, $event) || (ts_r14.workflow_step_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 71);
    \u0275\u0275text(5, "\u2014 Select Step \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, WorkflowComponent_div_21_div_31_option_6_Template, 2, 2, "option", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 73)(8, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function WorkflowComponent_div_21_div_31_Template_input_ngModelChange_8_listener($event) {
      const ts_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(ts_r14.is_required, $event) || (ts_r14.is_required = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 75);
    \u0275\u0275text(10, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 76);
    \u0275\u0275listener("click", function WorkflowComponent_div_21_div_31_Template_button_click_11_listener() {
      const i_r16 = \u0275\u0275restoreView(_r13).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeTemplateStep(i_r16));
    });
    \u0275\u0275element(12, "i", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ts_r14 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r16 + 1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ts_r14.workflow_step_id);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.steps);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("req", i_r16));
    \u0275\u0275twoWayProperty("ngModel", ts_r14.is_required);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("for", "req" + i_r16);
  }
}
function WorkflowComponent_div_21_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
function WorkflowComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 38)(2, "h6", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 39);
    \u0275\u0275listener("click", function WorkflowComponent_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTemplateModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 57);
    \u0275\u0275template(6, WorkflowComponent_div_21_div_6_Template, 2, 1, "div", 41);
    \u0275\u0275elementStart(7, "form", 42);
    \u0275\u0275listener("ngSubmit", function WorkflowComponent_div_21_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveTemplate());
    });
    \u0275\u0275elementStart(8, "div", 58)(9, "div", 59)(10, "label", 44);
    \u0275\u0275text(11, "Template Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 60);
    \u0275\u0275elementStart(13, "div", 46);
    \u0275\u0275text(14, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 61)(16, "label", 44);
    \u0275\u0275text(17, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 62);
    \u0275\u0275elementStart(19, "div", 46);
    \u0275\u0275text(20, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 63)(22, "label", 44);
    \u0275\u0275text(23, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "textarea", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 64)(26, "label", 65);
    \u0275\u0275text(27, "Steps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 66);
    \u0275\u0275listener("click", function WorkflowComponent_div_21_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addTemplateStep());
    });
    \u0275\u0275element(29, "i", 18);
    \u0275\u0275text(30, "Add Step ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, WorkflowComponent_div_21_div_31_Template, 13, 11, "div", 67);
    \u0275\u0275elementStart(32, "div", 68)(33, "button", 51);
    \u0275\u0275listener("click", function WorkflowComponent_div_21_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTemplateModal = false);
    });
    \u0275\u0275text(34, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 52);
    \u0275\u0275template(36, WorkflowComponent_div_21_span_36_Template, 1, 0, "span", 53);
    \u0275\u0275text(37, "Save ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingTemplate ? "Edit Template" : "Add Template");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.templateForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.tf["workflow_template_name"].invalid && ctx_r1.tf["workflow_template_name"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.tf["workflow_template_code"].invalid && ctx_r1.tf["workflow_template_code"].touched);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.templateSteps);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
  }
}
var WorkflowComponent = class _WorkflowComponent {
  workflowService;
  fb;
  cdr = inject(ChangeDetectorRef);
  activeTab = "steps";
  steps = [];
  templates = [];
  loading = false;
  saving = false;
  error = "";
  success = "";
  showStepModal = false;
  showTemplateModal = false;
  editingStep = null;
  editingTemplate = null;
  stepForm;
  templateForm;
  templateSteps = [];
  constructor(workflowService, fb) {
    this.workflowService = workflowService;
    this.fb = fb;
    this.stepForm = this.fb.group({
      workflow_step_name: ["", Validators.required],
      workflow_step_code: ["", Validators.required],
      description: [""]
    });
    this.templateForm = this.fb.group({
      workflow_template_name: ["", Validators.required],
      workflow_template_code: ["", Validators.required],
      description: [""]
    });
  }
  ngOnInit() {
    this.loadSteps();
    this.loadTemplates();
  }
  loadSteps() {
    this.workflowService.getAllSteps().subscribe((r) => {
      if (r.data)
        this.steps = r.data;
      this.notifyView();
    });
  }
  loadTemplates() {
    this.workflowService.getAllTemplates().subscribe((r) => {
      if (r.data)
        this.templates = r.data;
      this.notifyView();
    });
  }
  openCreateStep() {
    this.editingStep = null;
    this.stepForm.reset();
    this.showStepModal = true;
    this.error = "";
  }
  openEditStep(step) {
    this.editingStep = step;
    this.stepForm.patchValue(step);
    this.showStepModal = true;
    this.error = "";
  }
  saveStep() {
    if (this.stepForm.invalid) {
      this.stepForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    const obs = this.editingStep ? this.workflowService.updateStep(this.editingStep.workflow_step_id, this.stepForm.value) : this.workflowService.createStep(this.stepForm.value);
    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = "Step saved";
          this.showStepModal = false;
          this.loadSteps();
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || "Failed";
        }
        this.notifyView();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.errorMessage || "Failed";
        this.notifyView();
      }
    });
  }
  toggleStepStatus(step) {
    this.workflowService.setStepStatus(step.workflow_step_id, !step.is_active).subscribe(() => {
      this.loadSteps();
      this.notifyView();
    });
  }
  openCreateTemplate() {
    this.editingTemplate = null;
    this.templateForm.reset();
    this.templateSteps = [];
    this.showTemplateModal = true;
    this.error = "";
  }
  openEditTemplate(template) {
    this.editingTemplate = template;
    this.templateForm.patchValue(template);
    this.workflowService.getTemplateById(template.workflow_template_id).subscribe((r) => {
      if (r.data) {
        this.templateSteps = r.data.steps.map((s) => ({
          workflow_step_id: s.workflow_step_id,
          display_order: s.display_order,
          is_required: s.is_required
        }));
      }
      this.notifyView();
    });
    this.showTemplateModal = true;
    this.error = "";
  }
  addTemplateStep() {
    this.templateSteps.push({ workflow_step_id: "", display_order: this.templateSteps.length + 1, is_required: true });
  }
  removeTemplateStep(i) {
    this.templateSteps.splice(i, 1);
    this.templateSteps.forEach((s, idx) => s.display_order = idx + 1);
  }
  saveTemplate() {
    if (this.templateForm.invalid) {
      this.templateForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    const obs = this.editingTemplate ? this.workflowService.updateTemplate(this.editingTemplate.workflow_template_id, this.templateForm.value) : this.workflowService.createTemplate(__spreadProps(__spreadValues({}, this.templateForm.value), { steps: this.templateSteps }));
    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (res.statusCode === 200) {
          if (this.editingTemplate) {
            this.workflowService.updateTemplateSteps(this.editingTemplate.workflow_template_id, this.templateSteps).subscribe(() => this.notifyView());
          }
          this.success = "Template saved";
          this.showTemplateModal = false;
          this.loadTemplates();
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || "Failed";
        }
        this.notifyView();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.errorMessage || "Failed";
        this.notifyView();
      }
    });
  }
  toggleTemplateStatus(template) {
    this.workflowService.setTemplateStatus(template.workflow_template_id, !template.is_active).subscribe(() => {
      this.loadTemplates();
      this.notifyView();
    });
  }
  getStepName(id) {
    return this.steps.find((s) => s.workflow_step_id === id)?.workflow_step_name || id;
  }
  get sf() {
    return this.stepForm.controls;
  }
  get tf() {
    return this.templateForm.controls;
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
  static \u0275fac = function WorkflowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowComponent)(\u0275\u0275directiveInject(WorkflowService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkflowComponent, selectors: [["app-workflow"]], decls: 22, vars: 11, consts: [[1, "page-header", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], ["class", "alert alert-success alert-dismissible py-2 small", 4, "ngIf"], [1, "nav", "nav-tabs", "mb-4"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "bi", "bi-diagram-3", "me-1"], [1, "bi", "bi-layout-text-window", "me-1"], [4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], ["class", "modal-panel card shadow-lg border-0", 4, "ngIf"], ["class", "modal-panel modal-panel-lg card shadow-lg border-0", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "py-2", "small"], [1, "bi", "bi-check-circle-fill", "me-2"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "d-flex", "justify-content-end", "mb-3"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "ps-4"], [1, "text-end", "pe-4"], [4, "ngFor", "ngForOf"], [1, "ps-4", "fw-semibold", "small"], [1, "badge", "bg-secondary-subtle", "text-secondary"], [1, "small", "text-muted"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", 3, "click"], [1, "bi"], ["colspan", "5", 1, "text-center", "text-muted", "py-4", "small"], [1, "modal-backdrop-custom", 3, "click"], [1, "modal-panel", "card", "shadow-lg", "border-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "py-3"], [1, "btn-close", 3, "click"], [1, "card-body"], ["class", "alert alert-danger py-2 small mb-3", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label", "small", "fw-semibold"], ["type", "text", "formControlName", "workflow_step_name", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], ["type", "text", "formControlName", "workflow_step_code", 1, "form-control", "form-control-sm"], [1, "mb-4"], ["formControlName", "description", "rows", "2", 1, "form-control", "form-control-sm"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-panel", "modal-panel-lg", "card", "shadow-lg", "border-0"], [1, "card-body", "overflow-auto"], [1, "row", "g-3", "mb-3"], [1, "col-8"], ["type", "text", "formControlName", "workflow_template_name", 1, "form-control", "form-control-sm"], [1, "col-4"], ["type", "text", "formControlName", "workflow_template_code", 1, "form-control", "form-control-sm"], [1, "col-12"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "form-label", "small", "fw-semibold", "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["class", "d-flex align-items-center gap-2 mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "form-select", "form-select-sm", "flex-grow-1", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-check", "mb-0"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel", "ngModelOptions", "id"], [1, "form-check-label", "small", 3, "for"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [3, "value"]], template: function WorkflowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h5", 1);
      \u0275\u0275text(3, "Workflow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Manage workflow steps and templates");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(6, WorkflowComponent_div_6_Template, 4, 1, "div", 3);
      \u0275\u0275elementStart(7, "ul", 4)(8, "li", 5)(9, "button", 6);
      \u0275\u0275listener("click", function WorkflowComponent_Template_button_click_9_listener() {
        return ctx.activeTab = "steps";
      });
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, "Steps ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 5)(13, "button", 6);
      \u0275\u0275listener("click", function WorkflowComponent_Template_button_click_13_listener() {
        return ctx.activeTab = "templates";
      });
      \u0275\u0275element(14, "i", 8);
      \u0275\u0275text(15, "Templates ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, WorkflowComponent_div_16_Template, 24, 2, "div", 9)(17, WorkflowComponent_div_17_Template, 24, 2, "div", 9)(18, WorkflowComponent_div_18_Template, 1, 0, "div", 10)(19, WorkflowComponent_div_19_Template, 30, 9, "div", 11)(20, WorkflowComponent_div_20_Template, 1, 0, "div", 10)(21, WorkflowComponent_div_21_Template, 38, 10, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "steps");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "templates");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.activeTab === "steps");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "templates");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStepModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStepModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTemplateModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTemplateModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowComponent, [{
    type: Component,
    args: [{ selector: "app-workflow", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="page-header d-flex align-items-center justify-content-between mb-4">\r
  <div>\r
    <h5 class="fw-bold mb-0">Workflow</h5>\r
    <p class="text-muted small mb-0">Manage workflow steps and templates</p>\r
  </div>\r
</div>\r
\r
<div *ngIf="success" class="alert alert-success alert-dismissible py-2 small">\r
  <i class="bi bi-check-circle-fill me-2"></i>{{ success }}\r
  <button type="button" class="btn-close btn-close-sm" (click)="success=''"></button>\r
</div>\r
\r
<!-- Tabs -->\r
<ul class="nav nav-tabs mb-4">\r
  <li class="nav-item">\r
    <button class="nav-link" [class.active]="activeTab==='steps'" (click)="activeTab='steps'">\r
      <i class="bi bi-diagram-3 me-1"></i>Steps\r
    </button>\r
  </li>\r
  <li class="nav-item">\r
    <button class="nav-link" [class.active]="activeTab==='templates'" (click)="activeTab='templates'">\r
      <i class="bi bi-layout-text-window me-1"></i>Templates\r
    </button>\r
  </li>\r
</ul>\r
\r
<!-- Steps Tab -->\r
<div *ngIf="activeTab==='steps'">\r
  <div class="d-flex justify-content-end mb-3">\r
    <button class="btn btn-primary btn-sm" (click)="openCreateStep()">\r
      <i class="bi bi-plus-lg me-1"></i>Add Step\r
    </button>\r
  </div>\r
  <div class="card border-0 shadow-sm">\r
    <div class="card-body p-0">\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0">\r
          <thead class="table-light">\r
            <tr>\r
              <th class="ps-4">Step Name</th>\r
              <th>Code</th>\r
              <th>Description</th>\r
              <th>Status</th>\r
              <th class="text-end pe-4">Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let step of steps">\r
              <td class="ps-4 fw-semibold small">{{ step.workflow_step_name }}</td>\r
              <td><span class="badge bg-secondary-subtle text-secondary">{{ step.workflow_step_code }}</span></td>\r
              <td class="small text-muted">{{ step.description || '\u2014' }}</td>\r
              <td>\r
                <span class="badge" [class.bg-success-subtle]="step.is_active" [class.text-success]="step.is_active"\r
                  [class.bg-danger-subtle]="!step.is_active" [class.text-danger]="!step.is_active">\r
                  {{ step.is_active ? 'Active' : 'Inactive' }}\r
                </span>\r
              </td>\r
              <td class="text-end pe-4">\r
                <button class="btn btn-sm btn-outline-primary me-1" (click)="openEditStep(step)"><i class="bi bi-pencil"></i></button>\r
                <button class="btn btn-sm" [class.btn-outline-danger]="step.is_active" [class.btn-outline-success]="!step.is_active"\r
                  (click)="toggleStepStatus(step)">\r
                  <i class="bi" [class.bi-toggle-on]="step.is_active" [class.bi-toggle-off]="!step.is_active"></i>\r
                </button>\r
              </td>\r
            </tr>\r
            <tr *ngIf="steps.length===0">\r
              <td colspan="5" class="text-center text-muted py-4 small">No steps found</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Templates Tab -->\r
<div *ngIf="activeTab==='templates'">\r
  <div class="d-flex justify-content-end mb-3">\r
    <button class="btn btn-primary btn-sm" (click)="openCreateTemplate()">\r
      <i class="bi bi-plus-lg me-1"></i>Add Template\r
    </button>\r
  </div>\r
  <div class="card border-0 shadow-sm">\r
    <div class="card-body p-0">\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0">\r
          <thead class="table-light">\r
            <tr>\r
              <th class="ps-4">Template Name</th>\r
              <th>Code</th>\r
              <th>Description</th>\r
              <th>Status</th>\r
              <th class="text-end pe-4">Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let tmpl of templates">\r
              <td class="ps-4 fw-semibold small">{{ tmpl.workflow_template_name }}</td>\r
              <td><span class="badge bg-secondary-subtle text-secondary">{{ tmpl.workflow_template_code }}</span></td>\r
              <td class="small text-muted">{{ tmpl.description || '\u2014' }}</td>\r
              <td>\r
                <span class="badge" [class.bg-success-subtle]="tmpl.is_active" [class.text-success]="tmpl.is_active"\r
                  [class.bg-danger-subtle]="!tmpl.is_active" [class.text-danger]="!tmpl.is_active">\r
                  {{ tmpl.is_active ? 'Active' : 'Inactive' }}\r
                </span>\r
              </td>\r
              <td class="text-end pe-4">\r
                <button class="btn btn-sm btn-outline-primary me-1" (click)="openEditTemplate(tmpl)"><i class="bi bi-pencil"></i></button>\r
                <button class="btn btn-sm" [class.btn-outline-danger]="tmpl.is_active" [class.btn-outline-success]="!tmpl.is_active"\r
                  (click)="toggleTemplateStatus(tmpl)">\r
                  <i class="bi" [class.bi-toggle-on]="tmpl.is_active" [class.bi-toggle-off]="!tmpl.is_active"></i>\r
                </button>\r
              </td>\r
            </tr>\r
            <tr *ngIf="templates.length===0">\r
              <td colspan="5" class="text-center text-muted py-4 small">No templates found</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Step Modal -->\r
<div class="modal-backdrop-custom" *ngIf="showStepModal" (click)="showStepModal=false"></div>\r
<div class="modal-panel card shadow-lg border-0" *ngIf="showStepModal">\r
  <div class="card-header d-flex align-items-center justify-content-between py-3">\r
    <h6 class="fw-bold mb-0">{{ editingStep ? 'Edit Step' : 'Add Step' }}</h6>\r
    <button class="btn-close" (click)="showStepModal=false"></button>\r
  </div>\r
  <div class="card-body">\r
    <div *ngIf="error" class="alert alert-danger py-2 small mb-3">{{ error }}</div>\r
    <form [formGroup]="stepForm" (ngSubmit)="saveStep()" novalidate>\r
      <div class="mb-3">\r
        <label class="form-label small fw-semibold">Step Name *</label>\r
        <input type="text" class="form-control form-control-sm" formControlName="workflow_step_name"\r
          [class.is-invalid]="sf['workflow_step_name'].invalid && sf['workflow_step_name'].touched">\r
        <div class="invalid-feedback">Required</div>\r
      </div>\r
      <div class="mb-3">\r
        <label class="form-label small fw-semibold">Step Code *</label>\r
        <input type="text" class="form-control form-control-sm" formControlName="workflow_step_code"\r
          [class.is-invalid]="sf['workflow_step_code'].invalid && sf['workflow_step_code'].touched">\r
        <div class="invalid-feedback">Required</div>\r
      </div>\r
      <div class="mb-4">\r
        <label class="form-label small fw-semibold">Description</label>\r
        <textarea class="form-control form-control-sm" formControlName="description" rows="2"></textarea>\r
      </div>\r
      <div class="d-flex justify-content-end gap-2">\r
        <button type="button" class="btn btn-sm btn-outline-secondary" (click)="showStepModal=false">Cancel</button>\r
        <button type="submit" class="btn btn-sm btn-primary" [disabled]="saving">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>Save\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
<!-- Template Modal -->\r
<div class="modal-backdrop-custom" *ngIf="showTemplateModal" (click)="showTemplateModal=false"></div>\r
<div class="modal-panel modal-panel-lg card shadow-lg border-0" *ngIf="showTemplateModal">\r
  <div class="card-header d-flex align-items-center justify-content-between py-3">\r
    <h6 class="fw-bold mb-0">{{ editingTemplate ? 'Edit Template' : 'Add Template' }}</h6>\r
    <button class="btn-close" (click)="showTemplateModal=false"></button>\r
  </div>\r
  <div class="card-body overflow-auto">\r
    <div *ngIf="error" class="alert alert-danger py-2 small mb-3">{{ error }}</div>\r
    <form [formGroup]="templateForm" (ngSubmit)="saveTemplate()" novalidate>\r
      <div class="row g-3 mb-3">\r
        <div class="col-8">\r
          <label class="form-label small fw-semibold">Template Name *</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="workflow_template_name"\r
            [class.is-invalid]="tf['workflow_template_name'].invalid && tf['workflow_template_name'].touched">\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-4">\r
          <label class="form-label small fw-semibold">Code *</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="workflow_template_code"\r
            [class.is-invalid]="tf['workflow_template_code'].invalid && tf['workflow_template_code'].touched">\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-12">\r
          <label class="form-label small fw-semibold">Description</label>\r
          <textarea class="form-control form-control-sm" formControlName="description" rows="2"></textarea>\r
        </div>\r
      </div>\r
\r
      <div class="d-flex align-items-center justify-content-between mb-2">\r
        <label class="form-label small fw-semibold mb-0">Steps</label>\r
        <button type="button" class="btn btn-sm btn-outline-primary" (click)="addTemplateStep()">\r
          <i class="bi bi-plus-lg me-1"></i>Add Step\r
        </button>\r
      </div>\r
      <div *ngFor="let ts of templateSteps; let i=index" class="d-flex align-items-center gap-2 mb-2">\r
        <span class="badge bg-secondary-subtle text-secondary">{{ i+1 }}</span>\r
        <select class="form-select form-select-sm flex-grow-1" [(ngModel)]="ts.workflow_step_id" [ngModelOptions]="{standalone:true}">\r
          <option value="">\u2014 Select Step \u2014</option>\r
          <option *ngFor="let s of steps" [value]="s.workflow_step_id">{{ s.workflow_step_name }}</option>\r
        </select>\r
        <div class="form-check mb-0">\r
          <input type="checkbox" class="form-check-input" [(ngModel)]="ts.is_required" [ngModelOptions]="{standalone:true}" id="req{{i}}">\r
          <label class="form-check-label small" [for]="'req'+i">Required</label>\r
        </div>\r
        <button type="button" class="btn btn-sm btn-outline-danger" (click)="removeTemplateStep(i)">\r
          <i class="bi bi-trash"></i>\r
        </button>\r
      </div>\r
\r
      <div class="d-flex justify-content-end gap-2 mt-4">\r
        <button type="button" class="btn btn-sm btn-outline-secondary" (click)="showTemplateModal=false">Cancel</button>\r
        <button type="submit" class="btn btn-sm btn-primary" [disabled]="saving">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>Save\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: WorkflowService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkflowComponent, { className: "WorkflowComponent", filePath: "src/app/admin/workflow/workflow.component.ts", lineNumber: 13 });
})();
export {
  WorkflowComponent
};
//# sourceMappingURL=chunk-5H373VVB.js.map
