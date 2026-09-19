import {
  RoleService
} from "./chunk-QKXIIQ2P.js";
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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  finalize,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/admin/roles/roles.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
function RolesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.success, "\n");
  }
}
function RolesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 17);
    \u0275\u0275listener("click", function RolesComponent_div_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadRoles());
    });
    \u0275\u0275text(4, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function RolesComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "hr", 24)(5, "div", 25)(6, "div", 26);
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, RolesComponent_div_11_div_1_Template, 7, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function RolesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementStart(2, "p", 29);
    \u0275\u0275text(3, "No roles found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5, "Create your first role to get started.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function RolesComponent_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openCreate());
    });
    \u0275\u0275element(7, "i", 32);
    \u0275\u0275text(8, "Add New Role ");
    \u0275\u0275elementEnd()();
  }
}
function RolesComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36);
    \u0275\u0275element(3, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "h6", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "hr", 41);
    \u0275\u0275elementStart(10, "div", 42)(11, "div", 43);
    \u0275\u0275element(12, "i", 44);
    \u0275\u0275elementStart(13, "span", 45);
    \u0275\u0275text(14, "Permissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 46);
    \u0275\u0275text(16, " Click ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "Manage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " to view & edit permissions ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "hr", 41);
    \u0275\u0275elementStart(21, "div", 47)(22, "button", 48);
    \u0275\u0275listener("click", function RolesComponent_div_13_div_1_Template_button_click_22_listener() {
      const role_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPermissions(role_r5));
    });
    \u0275\u0275element(23, "i", 49);
    \u0275\u0275text(24, "Manage ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 50);
    \u0275\u0275listener("click", function RolesComponent_div_13_div_1_Template_button_click_25_listener() {
      const role_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(role_r5));
    });
    \u0275\u0275element(26, "i", 51);
    \u0275\u0275text(27, "Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 52);
    \u0275\u0275listener("click", function RolesComponent_div_13_div_1_Template_button_click_28_listener() {
      const role_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDelete(role_r5));
    });
    \u0275\u0275element(29, "i", 53);
    \u0275\u0275text(30, "Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const role_r5 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(role_r5.role_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r5.role_code);
  }
}
function RolesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, RolesComponent_div_13_div_1_Template, 31, 2, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.roles);
  }
}
function RolesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function RolesComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error, " ");
  }
}
function RolesComponent_div_15_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, "Role code cannot be changed after creation.");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_15_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 78);
  }
}
function RolesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div", 58);
    \u0275\u0275element(4, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h6", 2);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 59);
    \u0275\u0275listener("click", function RolesComponent_div_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 60);
    \u0275\u0275template(9, RolesComponent_div_15_div_9_Template, 3, 1, "div", 61);
    \u0275\u0275elementStart(10, "form", 62);
    \u0275\u0275listener("ngSubmit", function RolesComponent_div_15_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(11, "div", 63)(12, "label", 64);
    \u0275\u0275text(13, "Role Name ");
    \u0275\u0275elementStart(14, "span", 65);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 66);
    \u0275\u0275elementStart(17, "div", 67);
    \u0275\u0275text(18, "Role name is required.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 68)(20, "label", 69);
    \u0275\u0275text(21, "Role Code ");
    \u0275\u0275elementStart(22, "span", 65);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "input", 70);
    \u0275\u0275elementStart(25, "div", 67);
    \u0275\u0275text(26, "Role code is required.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, RolesComponent_div_15_div_27_Template, 2, 0, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 72)(29, "button", 73);
    \u0275\u0275listener("click", function RolesComponent_div_15_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 74);
    \u0275\u0275template(32, RolesComponent_div_15_span_32_Template, 1, 0, "span", 75);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r0.editingRole ? "Edit Role" : "Add New Role");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.editingRole ? "Edit Role" : "Add New Role");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r0.f["role_name"].invalid && ctx_r0.f["role_name"].touched);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ctx_r0.f["role_code"].invalid && ctx_r0.f["role_code"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.editingRole);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Saving..." : ctx_r0.editingRole ? "Update" : "Create", " ");
  }
}
function RolesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function RolesComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDelete());
    });
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_17_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 78);
  }
}
function RolesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80)(2, "div", 81);
    \u0275\u0275element(3, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h6", 83);
    \u0275\u0275text(5, "Delete Role?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 84);
    \u0275\u0275text(7, " Are you sure you want to delete the role ");
    \u0275\u0275elementStart(8, "strong", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "? This action cannot be undone. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 86)(12, "button", 87);
    \u0275\u0275listener("click", function RolesComponent_div_17_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDelete());
    });
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 88);
    \u0275\u0275listener("click", function RolesComponent_div_17_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDelete());
    });
    \u0275\u0275template(15, RolesComponent_div_17_span_15_Template, 1, 0, "span", 75);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1('"', ctx_r0.deletingRole == null ? null : ctx_r0.deletingRole.role_name, '"');
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.deleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.deleting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.deleting ? "Deleting..." : "Delete", " ");
  }
}
function RolesComponent_div_18_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 78);
  }
}
function RolesComponent_div_18_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.permError, " ");
  }
}
function RolesComponent_div_18_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "div", 109);
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3, "Loading permissions...");
    \u0275\u0275elementEnd()();
  }
}
function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 121)(2, "div", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 125);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 122)(7, "label", 126)(8, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_ngModelChange_8_listener($event) {
      const perm_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.permMap[perm_r14.permission_id].can_view, $event) || (ctx_r0.permMap[perm_r14.permission_id].can_view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_change_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.onPermChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "span", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 122)(11, "label", 126)(12, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_ngModelChange_12_listener($event) {
      const perm_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.permMap[perm_r14.permission_id].can_add, $event) || (ctx_r0.permMap[perm_r14.permission_id].can_add = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_change_12_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.onPermChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "span", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 122)(15, "label", 126)(16, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_ngModelChange_16_listener($event) {
      const perm_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.permMap[perm_r14.permission_id].can_update, $event) || (ctx_r0.permMap[perm_r14.permission_id].can_update = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_change_16_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.onPermChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "span", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 122)(19, "label", 126)(20, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_ngModelChange_20_listener($event) {
      const perm_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.permMap[perm_r14.permission_id].can_delete, $event) || (ctx_r0.permMap[perm_r14.permission_id].can_delete = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_change_20_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.onPermChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "span", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 122)(23, "label", 126)(24, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_ngModelChange_24_listener($event) {
      const perm_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.permMap[perm_r14.permission_id].can_export, $event) || (ctx_r0.permMap[perm_r14.permission_id].can_export = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_change_24_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.onPermChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "span", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 123)(27, "label", 129)(28, "input", 130);
    \u0275\u0275listener("change", function RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template_input_change_28_listener($event) {
      const perm_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.toggleAll(perm_r14.permission_id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "span", 128);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const perm_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(perm_r14.permission_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perm_r14.permission_code);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", perm_r14.permission_name + " view");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.permMap[perm_r14.permission_id].can_view);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", perm_r14.permission_name + " add");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.permMap[perm_r14.permission_id].can_add);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", perm_r14.permission_name + " update");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.permMap[perm_r14.permission_id].can_update);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", perm_r14.permission_name + " delete");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.permMap[perm_r14.permission_id].can_delete);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", perm_r14.permission_name + " export");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.permMap[perm_r14.permission_id].can_export);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", perm_r14.permission_name + " all");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isAllEnabled(perm_r14.permission_id));
  }
}
function RolesComponent_div_18_div_34_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "table", 120)(2, "thead")(3, "tr")(4, "th", 121);
    \u0275\u0275text(5, "Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 122);
    \u0275\u0275text(7, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 122);
    \u0275\u0275text(9, "Add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 122);
    \u0275\u0275text(11, "Update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 122);
    \u0275\u0275text(13, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 122);
    \u0275\u0275text(15, "Export");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 123);
    \u0275\u0275text(17, "All");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, RolesComponent_div_18_div_34_div_1_div_10_tr_19_Template, 30, 14, "tr", 124);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", group_r12.permissions);
  }
}
function RolesComponent_div_18_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "button", 113);
    \u0275\u0275listener("click", function RolesComponent_div_18_div_34_div_1_Template_button_click_1_listener() {
      const group_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleGroup(group_r12));
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "div", 114);
    \u0275\u0275element(4, "i", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 116);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, RolesComponent_div_18_div_34_div_1_div_10_Template, 20, 1, "div", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", group_r12.expanded)("aria-label", group_r12.module + " permissions group");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(group_r12.module);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r12.permissions.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-chevron-down", !group_r12.expanded)("bi-chevron-up", group_r12.expanded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", group_r12.expanded);
  }
}
function RolesComponent_div_18_div_34_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "i", 132);
    \u0275\u0275text(2, " No permissions available. ");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_18_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, RolesComponent_div_18_div_34_div_1_Template, 11, 9, "div", 110)(2, RolesComponent_div_18_div_34_div_2_Template, 3, 0, "div", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.permGroups);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.permGroups.length === 0);
  }
}
function RolesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 91)(3, "button", 92);
    \u0275\u0275listener("click", function RolesComponent_div_18_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePermPanel());
    });
    \u0275\u0275element(4, "i", 93);
    \u0275\u0275text(5, "Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h6", 2);
    \u0275\u0275text(8, "Manage Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 94)(10, "span", 95);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 57)(15, "button", 96);
    \u0275\u0275listener("click", function RolesComponent_div_18_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePermPanel());
    });
    \u0275\u0275text(16, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 97);
    \u0275\u0275listener("click", function RolesComponent_div_18_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePermissions());
    });
    \u0275\u0275template(18, RolesComponent_div_18_span_18_Template, 1, 0, "span", 75);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 98);
    \u0275\u0275template(21, RolesComponent_div_18_div_21_Template, 3, 1, "div", 99);
    \u0275\u0275elementStart(22, "div", 100)(23, "div", 101)(24, "div", 102);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 103);
    \u0275\u0275text(27, "Total Permissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 104)(29, "div", 102);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 103);
    \u0275\u0275text(32, "Selected Permissions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, RolesComponent_div_18_div_33_Template, 4, 0, "div", 105)(34, RolesComponent_div_18_div_34_Template, 3, 2, "div", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.selectedRole == null ? null : ctx_r0.selectedRole.role_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedRole == null ? null : ctx_r0.selectedRole.role_code);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving || ctx_r0.permLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Saving..." : "Save Changes", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.permError);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.allPermissions.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getSelectedCount());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.permLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.permLoading);
  }
}
var RolesComponent = class _RolesComponent {
  roleService;
  fb;
  cdr = inject(ChangeDetectorRef);
  // ── Data ──────────────────────────────────────────────────────────────────
  roles = [];
  allPermissions = [];
  permGroups = [];
  permMap = {};
  // ── UI State ──────────────────────────────────────────────────────────────
  loading = true;
  saving = false;
  error = "";
  success = "";
  // ── Role Modal ────────────────────────────────────────────────────────────
  showModal = false;
  editingRole = null;
  form;
  // ── Delete Confirmation ───────────────────────────────────────────────────
  showDeleteConfirm = false;
  deletingRole = null;
  deleting = false;
  // ── Permissions Panel ─────────────────────────────────────────────────────
  showPermPanel = false;
  selectedRole = null;
  permLoading = false;
  permError = "";
  hasUnsavedPerms = false;
  constructor(roleService, fb) {
    this.roleService = roleService;
    this.fb = fb;
    this.form = this.fb.group({
      role_code: ["", [Validators.required, Validators.minLength(1)]],
      role_name: ["", [Validators.required, Validators.minLength(1)]]
    });
  }
  ngOnInit() {
    this.loadRoles();
    this.roleService.getAllPermissions().subscribe((r) => {
      if (r.data) {
        this.allPermissions = r.data;
        this.buildPermGroups();
      }
      this.mark();
    });
  }
  // ── Roles ─────────────────────────────────────────────────────────────────
  loadRoles() {
    this.loading = true;
    this.error = "";
    this.roleService.getAllRoles().pipe(finalize(() => {
      this.loading = false;
      this.mark();
    })).subscribe({
      next: (r) => {
        if (r.data)
          this.roles = r.data;
        this.mark();
      },
      error: () => {
        this.error = "Failed to load roles. Please try again.";
        this.mark();
      }
    });
  }
  // ── Role permissions count helper ─────────────────────────────────────────
  getRolePermCount(role) {
    return 0;
  }
  // ── Add / Edit Modal ──────────────────────────────────────────────────────
  openCreate() {
    this.editingRole = null;
    this.form.reset();
    this.form.get("role_code")?.enable();
    this.error = "";
    this.showModal = true;
  }
  openEdit(role) {
    this.editingRole = role;
    this.form.patchValue({ role_code: role.role_code, role_name: role.role_name });
    this.form.get("role_code")?.disable();
    this.error = "";
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.error = "";
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.error = "";
    const obs = this.editingRole ? this.roleService.updateRole(this.editingRole.role_id, {
      role_id: this.editingRole.role_id,
      role_name: this.form.get("role_name")?.value?.trim()
    }) : this.roleService.createRole({
      role_code: this.form.get("role_code")?.value?.trim(),
      role_name: this.form.get("role_name")?.value?.trim()
    });
    obs.pipe(finalize(() => {
      this.saving = false;
      this.mark();
    })).subscribe({
      next: (res) => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          this.showModal = false;
          this.showSuccess(`Role ${this.editingRole ? "updated" : "created"} successfully.`);
          this.loadRoles();
        } else {
          this.error = res.errorMessage || "Operation failed. Please try again.";
        }
      },
      error: (err) => {
        this.error = err?.error?.errorMessage || err?.error?.title || "Operation failed. Please try again.";
      }
    });
  }
  // ── Delete ────────────────────────────────────────────────────────────────
  openDelete(role) {
    this.deletingRole = role;
    this.showDeleteConfirm = true;
  }
  closeDelete() {
    this.showDeleteConfirm = false;
    this.deletingRole = null;
  }
  confirmDelete() {
    if (!this.deletingRole)
      return;
    this.deleting = true;
    setTimeout(() => {
      this.deleting = false;
      this.showDeleteConfirm = false;
      this.showSuccess("Role deleted successfully.");
      this.loadRoles();
      this.mark();
    }, 600);
  }
  // ── Permissions Panel ─────────────────────────────────────────────────────
  openPermissions(role) {
    this.selectedRole = role;
    this.permError = "";
    this.hasUnsavedPerms = false;
    this.permLoading = true;
    this.showPermPanel = true;
    this.permMap = {};
    this.allPermissions.forEach((p) => {
      this.permMap[p.permission_id] = { can_view: false, can_add: false, can_update: false, can_delete: false, can_export: false };
    });
    this.roleService.getRolePermissions(role.role_id).pipe(finalize(() => {
      this.permLoading = false;
      this.mark();
    })).subscribe({
      next: (r) => {
        if (r.data) {
          r.data.forEach((p) => {
            this.permMap[p.permission_id] = {
              can_view: p.can_view,
              can_add: p.can_add,
              can_update: p.can_update,
              can_delete: p.can_delete,
              can_export: p.can_export
            };
          });
        }
        this.mark();
      },
      error: () => {
        this.permError = "Failed to load permissions.";
        this.mark();
      }
    });
  }
  closePermPanel() {
    if (this.hasUnsavedPerms) {
      if (!confirm("You have unsaved changes. Are you sure you want to leave?"))
        return;
    }
    this.showPermPanel = false;
    this.selectedRole = null;
    this.hasUnsavedPerms = false;
  }
  onPermChange() {
    this.hasUnsavedPerms = true;
  }
  toggleAll(permId, value) {
    this.permMap[permId] = { can_view: value, can_add: value, can_update: value, can_delete: value, can_export: value };
    this.hasUnsavedPerms = true;
    this.mark();
  }
  isAllEnabled(permId) {
    const p = this.permMap[permId];
    return p ? p.can_view && p.can_add && p.can_update && p.can_delete && p.can_export : false;
  }
  savePermissions() {
    if (!this.selectedRole)
      return;
    this.saving = true;
    this.permError = "";
    const permissionsList = Object.entries(this.permMap).map(([permission_id, perms]) => __spreadValues({
      role_id: this.selectedRole.role_id,
      permission_id
    }, perms));
    this.roleService.updateRolePermissions(this.selectedRole.role_id, { permissionsList }).pipe(finalize(() => {
      this.saving = false;
      this.mark();
    })).subscribe({
      next: (res) => {
        if (res.statusCode === 200) {
          this.hasUnsavedPerms = false;
          this.showSuccess("Permissions updated successfully.");
        } else {
          this.permError = res.errorMessage || "Failed to save permissions.";
        }
      },
      error: () => {
        this.permError = "Failed to save permissions. Please try again.";
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  buildPermGroups() {
    const map = /* @__PURE__ */ new Map();
    this.allPermissions.forEach((p) => {
      const mod = p.module_name || "General";
      if (!map.has(mod))
        map.set(mod, []);
      map.get(mod).push(p);
    });
    this.permGroups = Array.from(map.entries()).map(([module, permissions]) => ({
      module,
      permissions,
      expanded: true
    }));
  }
  toggleGroup(group) {
    group.expanded = !group.expanded;
  }
  getPermState(permId) {
    return this.permMap[permId] || { can_view: false, can_add: false, can_update: false, can_delete: false, can_export: false };
  }
  getSelectedCount() {
    return Object.values(this.permMap).filter((p) => p.can_view || p.can_add || p.can_update || p.can_delete || p.can_export).length;
  }
  showSuccess(msg) {
    this.success = msg;
    setTimeout(() => {
      this.success = "";
      this.mark();
    }, 3500);
  }
  mark() {
    this.cdr.markForCheck();
  }
  get f() {
    return this.form.controls;
  }
  static \u0275fac = function RolesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesComponent)(\u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesComponent, selectors: [["app-roles"]], decls: 19, vars: 10, consts: [["class", "rm-toast", 4, "ngIf"], [1, "page-header", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "btn", "btn-primary", "btn-sm", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "bi", "bi-plus-lg"], ["class", "alert alert-danger d-flex align-items-center gap-2 py-2 small mb-4", 4, "ngIf"], ["class", "rm-grid", 4, "ngIf"], ["class", "rm-empty", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], ["class", "modal-panel card shadow-lg border-0", "role", "dialog", "aria-modal", "true", 4, "ngIf"], ["class", "modal-panel rm-delete-modal card shadow-lg border-0", "role", "alertdialog", "aria-modal", "true", "aria-label", "Delete Role Confirmation", 4, "ngIf"], ["class", "rm-perm-overlay", "role", "dialog", "aria-modal", "true", "aria-label", "Manage Permissions", 4, "ngIf"], [1, "rm-toast"], [1, "bi", "bi-check-circle-fill", "me-2"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "py-2", "small", "mb-4"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "btn", "btn-sm", "btn-outline-danger", "ms-auto", 3, "click"], [1, "rm-grid"], ["class", "rm-card rm-skeleton", 4, "ngFor", "ngForOf"], [1, "rm-card", "rm-skeleton"], [1, "rm-skeleton-icon"], [1, "rm-skeleton-line", "w-60", "mt-2"], [1, "rm-skeleton-line", "w-40", "mt-1"], [1, "my-3"], [1, "rm-skeleton-line", "w-80"], [1, "rm-skeleton-line", "w-50", "mt-1"], [1, "rm-empty"], [1, "bi", "bi-shield-x"], [1, "fw-semibold", "mt-3", "mb-1"], [1, "text-muted", "small"], [1, "btn", "btn-primary", "btn-sm", "mt-2", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], ["class", "rm-card", 4, "ngFor", "ngForOf"], [1, "rm-card"], [1, "rm-card-top"], ["aria-hidden", "true", 1, "rm-role-icon"], [1, "bi", "bi-shield-fill-check"], [1, "rm-role-info"], [1, "rm-role-name"], [1, "rm-role-code"], [1, "rm-divider"], [1, "rm-perms-section"], [1, "rm-perms-label"], [1, "bi", "bi-key-fill", "me-1"], [1, "fw-semibold", "small"], [1, "rm-perms-hint", "text-muted", 2, "font-size", "0.75rem"], [1, "rm-card-actions"], ["title", "Manage Permissions", 1, "btn", "btn-sm", "rm-btn-manage", 3, "click"], [1, "bi", "bi-shield-check", "me-1"], ["title", "Edit Role", 1, "btn", "btn-sm", "rm-btn-edit", 3, "click"], [1, "bi", "bi-pencil", "me-1"], ["title", "Delete Role", 1, "btn", "btn-sm", "rm-btn-delete", 3, "click"], [1, "bi", "bi-trash", "me-1"], [1, "modal-backdrop-custom", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "modal-panel", "card", "shadow-lg", "border-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "py-3", "px-4"], [1, "d-flex", "align-items-center", "gap-2"], ["aria-hidden", "true", 1, "rm-modal-icon"], ["aria-label", "Close modal", 1, "btn-close", 3, "click"], [1, "card-body", "px-4", "py-3"], ["class", "alert alert-danger py-2 small mb-3 d-flex align-items-center gap-2", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "role_name", 1, "form-label", "small", "fw-semibold"], [1, "text-danger"], ["id", "role_name", "type", "text", "formControlName", "role_name", "placeholder", "e.g. AMISP SLA User", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], [1, "mb-4"], ["for", "role_code", 1, "form-label", "small", "fw-semibold"], ["id", "role_code", "type", "text", "formControlName", "role_code", "placeholder", "e.g. A-SLA", 1, "form-control", "form-control-sm"], ["class", "form-text text-muted", 4, "ngIf"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "aria-hidden", "true", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "small", "mb-3", "d-flex", "align-items-center", "gap-2"], [1, "form-text", "text-muted"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], ["role", "alertdialog", "aria-modal", "true", "aria-label", "Delete Role Confirmation", 1, "modal-panel", "rm-delete-modal", "card", "shadow-lg", "border-0"], [1, "card-body", "p-4", "text-center"], ["aria-hidden", "true", 1, "rm-delete-icon", "mb-3"], [1, "bi", "bi-trash3-fill"], [1, "fw-bold", "mb-2"], [1, "text-muted", "small", "mb-4"], [1, "text-dark"], [1, "d-flex", "justify-content-center", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "px-4", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "px-4", 3, "click", "disabled"], ["role", "dialog", "aria-modal", "true", "aria-label", "Manage Permissions", 1, "rm-perm-overlay"], [1, "rm-perm-header"], [1, "d-flex", "align-items-center", "gap-3"], ["aria-label", "Back to roles", 1, "btn", "btn-sm", "btn-outline-secondary", "rm-back-btn", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "d-flex", "align-items-center", "gap-2", "mt-1"], [1, "small", "text-muted", "fw-semibold"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled"], [1, "rm-perm-body"], ["class", "alert alert-danger py-2 small mb-4 d-flex align-items-center gap-2", 4, "ngIf"], [1, "rm-perm-summary", "mb-4"], [1, "rm-summary-card"], [1, "rm-summary-num"], [1, "rm-summary-label"], [1, "rm-summary-card", "rm-summary-card--selected"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-danger", "py-2", "small", "mb-4", "d-flex", "align-items-center", "gap-2"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", "spinner-border-sm", "me-2"], ["class", "rm-perm-group mb-3", 4, "ngFor", "ngForOf"], ["class", "text-center py-5 text-muted small", 4, "ngIf"], [1, "rm-perm-group", "mb-3"], [1, "rm-group-header", "w-100", 3, "click"], ["aria-hidden", "true", 1, "rm-group-icon"], [1, "bi", "bi-grid-3x3-gap-fill"], [1, "badge", "bg-secondary-subtle", "text-secondary", "ms-1"], [1, "bi"], ["class", "rm-perm-table-wrap", 4, "ngIf"], [1, "rm-perm-table-wrap"], ["role", "grid", 1, "rm-perm-table"], [1, "rm-perm-name-col"], [1, "text-center"], [1, "text-center", "rm-all-col"], [4, "ngFor", "ngForOf"], [1, "text-muted", 2, "font-size", "0.7rem"], [1, "rm-toggle"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "rm-toggle-slider"], [1, "rm-toggle", "rm-toggle--all"], ["type", "checkbox", 3, "change", "checked"], [1, "text-center", "py-5", "text-muted", "small"], [1, "bi", "bi-key", "display-6", "d-block", "mb-2", "opacity-25"]], template: function RolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, RolesComponent_div_0_Template, 3, 1, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div")(3, "h5", 2);
      \u0275\u0275text(4, "Role Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage roles and access control");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function RolesComponent_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Add New Role ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, RolesComponent_div_10_Template, 5, 1, "div", 6)(11, RolesComponent_div_11_Template, 2, 2, "div", 7)(12, RolesComponent_div_12_Template, 9, 0, "div", 8)(13, RolesComponent_div_13_Template, 2, 1, "div", 7)(14, RolesComponent_div_14_Template, 1, 0, "div", 9)(15, RolesComponent_div_15_Template, 34, 12, "div", 10)(16, RolesComponent_div_16_Template, 1, 0, "div", 9)(17, RolesComponent_div_17_Template, 17, 4, "div", 11)(18, RolesComponent_div_18_Template, 35, 10, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.error && !ctx.showModal && !ctx.showPermPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.roles.length === 0 && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.roles.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteConfirm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteConfirm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPermPanel);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel], styles: ['\n.rm-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 1.25rem;\n  right: 1.5rem;\n  z-index: 9999;\n  background: #fff;\n  border: 1px solid #c3e6cb;\n  border-left: 4px solid #198754;\n  color: #146c43;\n  padding: 0.65rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease;\n}\n.rm-toast[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #198754;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.rm-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 1100px) {\n  .rm-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .rm-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rm-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  padding: 1.25rem;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.rm-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.rm-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n}\n.rm-role-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  background: rgba(124, 58, 237, 0.1);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rm-role-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #7c3aed;\n}\n.rm-role-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rm-role-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #1a1d23;\n  margin: 0 0 0.35rem;\n  line-height: 1.3;\n  word-break: break-word;\n}\n.rm-role-code[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #1d4ed8;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  padding: 0.15rem 0.55rem;\n  border-radius: 100px;\n  letter-spacing: 0.04em;\n}\n.rm-divider[_ngcontent-%COMP%] {\n  border-color: #e8ecf0;\n  margin: 0.875rem 0;\n}\n.rm-perms-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.rm-perms-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #1a1d23;\n  font-size: 0.82rem;\n}\n.rm-perms-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0d9488;\n}\n.rm-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  flex-wrap: wrap;\n}\n.rm-btn-manage[_ngcontent-%COMP%] {\n  border: 1.5px solid #0d9488;\n  color: #0d9488;\n  background: rgba(13, 148, 136, 0.08);\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n  padding: 0.3rem 0.75rem;\n  transition: all 0.18s;\n}\n.rm-btn-manage[_ngcontent-%COMP%]:hover {\n  background: #0d9488;\n  color: #fff;\n}\n.rm-btn-edit[_ngcontent-%COMP%] {\n  border: 1.5px solid #e8ecf0;\n  color: #6c757d;\n  background: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n  padding: 0.3rem 0.75rem;\n  transition: all 0.18s;\n}\n.rm-btn-edit[_ngcontent-%COMP%]:hover {\n  border-color: #4f6ef7;\n  color: #4f6ef7;\n  background: rgba(79, 110, 247, 0.06);\n}\n.rm-btn-delete[_ngcontent-%COMP%] {\n  border: 1.5px solid #fecaca;\n  color: #dc3545;\n  background: #fff5f5;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n  padding: 0.3rem 0.75rem;\n  transition: all 0.18s;\n}\n.rm-btn-delete[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: #fff;\n  border-color: #dc3545;\n}\n.rm-skeleton[_ngcontent-%COMP%] {\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n.rm-skeleton-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: #e9ecef;\n  border-radius: 10px;\n}\n.rm-skeleton-line[_ngcontent-%COMP%] {\n  height: 10px;\n  background: #e9ecef;\n  border-radius: 4px;\n}\n.rm-skeleton-line.w-40[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.rm-skeleton-line.w-50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.rm-skeleton-line.w-60[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.rm-skeleton-line.w-80[_ngcontent-%COMP%] {\n  width: 80%;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.rm-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n}\n.rm-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #dee2e6;\n}\n.rm-modal-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(124, 58, 237, 0.1);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rm-modal-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #7c3aed;\n  font-size: 1rem;\n}\n.rm-delete-modal[_ngcontent-%COMP%] {\n  max-width: 380px !important;\n  top: 50% !important;\n  transform: translateY(-50%) !important;\n  right: 50% !important;\n  margin-right: -190px;\n}\n.rm-delete-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: #fff5f5;\n  border: 2px solid #fecaca;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.rm-delete-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #dc3545;\n}\n.rm-perm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1060;\n  background: #f4f6fb;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.rm-perm-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e8ecf0;\n  padding: 0.875rem 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.rm-back-btn[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.rm-perm-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.75rem;\n}\n.rm-perm-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.rm-summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  padding: 1.25rem 2rem;\n  text-align: center;\n  min-width: 160px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n}\n.rm-summary-card--selected[_ngcontent-%COMP%] {\n  border-color: #bfdbfe;\n  background: #eff6ff;\n}\n.rm-summary-num[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1d23;\n  line-height: 1;\n}\n.rm-summary-card--selected[_ngcontent-%COMP%]   .rm-summary-num[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n}\n.rm-summary-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.35rem;\n  font-weight: 500;\n}\n.rm-perm-group[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n}\n.rm-group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.875rem 1.25rem;\n  background: #fff;\n  border: none;\n  cursor: pointer;\n  transition: background 0.18s;\n  text-align: left;\n}\n.rm-group-header[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.rm-group-header[_ngcontent-%COMP%]   i.bi-chevron-down[_ngcontent-%COMP%], \n.rm-group-header[_ngcontent-%COMP%]   i.bi-chevron-up[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.rm-group-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: rgba(13, 148, 136, 0.08);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.rm-group-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0d9488;\n  font-size: 0.8rem;\n}\n.rm-perm-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-top: 1px solid #e8ecf0;\n}\n.rm-perm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.rm-perm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 0.6rem 0.875rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n  border-bottom: 1px solid #e8ecf0;\n  white-space: nowrap;\n}\n.rm-perm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.875rem;\n  border-bottom: 1px solid #f1f3f5;\n  vertical-align: middle;\n}\n.rm-perm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.rm-perm-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.rm-perm-name-col[_ngcontent-%COMP%] {\n  min-width: 180px;\n  max-width: 260px;\n}\n.rm-all-col[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.04);\n}\n.rm-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n  cursor: pointer;\n  margin: 0;\n}\n.rm-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.rm-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    + .rm-toggle-slider[_ngcontent-%COMP%] {\n  outline: 2px solid #4f6ef7;\n  outline-offset: 2px;\n}\n.rm-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .rm-toggle-slider[_ngcontent-%COMP%] {\n  background: #0d9488;\n}\n.rm-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .rm-toggle-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.rm-toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #dee2e6;\n  border-radius: 20px;\n  transition: background 0.2s ease;\n}\n.rm-toggle-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  left: 3px;\n  top: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: transform 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.rm-toggle--all[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .rm-toggle-slider[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n}\n/*# sourceMappingURL=roles.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesComponent, [{
    type: Component,
    args: [{ selector: "app-roles", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<!-- \u2500\u2500 Toast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div *ngIf="success" class="rm-toast">
  <i class="bi bi-check-circle-fill me-2"></i>{{ success }}
</div>

<!-- \u2500\u2500 Page Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="page-header d-flex align-items-center justify-content-between mb-4">
  <div>
    <h5 class="fw-bold mb-0">Role Management</h5>
    <p class="text-muted small mb-0">Manage roles and access control</p>
  </div>
  <button class="btn btn-primary btn-sm d-flex align-items-center gap-2" (click)="openCreate()">
    <i class="bi bi-plus-lg"></i> Add New Role
  </button>
</div>

<!-- \u2500\u2500 Error Banner \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div *ngIf="error && !showModal && !showPermPanel" class="alert alert-danger d-flex align-items-center gap-2 py-2 small mb-4">
  <i class="bi bi-exclamation-triangle-fill"></i>
  {{ error }}
  <button class="btn btn-sm btn-outline-danger ms-auto" (click)="loadRoles()">Retry</button>
</div>

<!-- \u2500\u2500 Loading Skeletons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div *ngIf="loading" class="rm-grid">
  <div *ngFor="let s of [1,2,3,4,5,6]" class="rm-card rm-skeleton">
    <div class="rm-skeleton-icon"></div>
    <div class="rm-skeleton-line w-60 mt-2"></div>
    <div class="rm-skeleton-line w-40 mt-1"></div>
    <hr class="my-3">
    <div class="rm-skeleton-line w-80"></div>
    <div class="rm-skeleton-line w-50 mt-1"></div>
  </div>
</div>

<!-- \u2500\u2500 Empty State \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div *ngIf="!loading && roles.length === 0 && !error" class="rm-empty">
  <i class="bi bi-shield-x"></i>
  <p class="fw-semibold mt-3 mb-1">No roles found</p>
  <p class="text-muted small">Create your first role to get started.</p>
  <button class="btn btn-primary btn-sm mt-2" (click)="openCreate()">
    <i class="bi bi-plus-lg me-1"></i>Add New Role
  </button>
</div>

<!-- \u2500\u2500 Role Cards Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div *ngIf="!loading && roles.length > 0" class="rm-grid">
  <div *ngFor="let role of roles" class="rm-card">

    <!-- Card Top -->
    <div class="rm-card-top">
      <div class="rm-role-icon" aria-hidden="true">
        <i class="bi bi-shield-fill-check"></i>
      </div>
      <div class="rm-role-info">
        <h6 class="rm-role-name">{{ role.role_name }}</h6>
        <span class="rm-role-code">{{ role.role_code }}</span>
      </div>
    </div>

    <hr class="rm-divider">

    <!-- Permissions Preview -->
    <div class="rm-perms-section">
      <div class="rm-perms-label">
        <i class="bi bi-key-fill me-1"></i>
        <span class="fw-semibold small">Permissions</span>
      </div>
      <div class="rm-perms-hint text-muted" style="font-size:0.75rem">
        Click <strong>Manage</strong> to view &amp; edit permissions
      </div>
    </div>

    <hr class="rm-divider">

    <!-- Actions -->
    <div class="rm-card-actions">
      <button class="btn btn-sm rm-btn-manage" (click)="openPermissions(role)" title="Manage Permissions">
        <i class="bi bi-shield-check me-1"></i>Manage
      </button>
      <button class="btn btn-sm rm-btn-edit" (click)="openEdit(role)" title="Edit Role">
        <i class="bi bi-pencil me-1"></i>Edit
      </button>
      <button class="btn btn-sm rm-btn-delete" (click)="openDelete(role)" title="Delete Role">
        <i class="bi bi-trash me-1"></i>Delete
      </button>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- ADD / EDIT ROLE MODAL                                                    -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="modal-backdrop-custom" *ngIf="showModal" (click)="closeModal()"></div>
<div class="modal-panel card shadow-lg border-0" *ngIf="showModal" role="dialog"
     aria-modal="true" [attr.aria-label]="editingRole ? 'Edit Role' : 'Add New Role'">
  <div class="card-header d-flex align-items-center justify-content-between py-3 px-4">
    <div class="d-flex align-items-center gap-2">
      <div class="rm-modal-icon" aria-hidden="true">
        <i class="bi bi-shield-fill-check"></i>
      </div>
      <h6 class="fw-bold mb-0">{{ editingRole ? 'Edit Role' : 'Add New Role' }}</h6>
    </div>
    <button class="btn-close" (click)="closeModal()" aria-label="Close modal"></button>
  </div>

  <div class="card-body px-4 py-3">
    <div *ngIf="error" class="alert alert-danger py-2 small mb-3 d-flex align-items-center gap-2">
      <i class="bi bi-exclamation-triangle-fill"></i>{{ error }}
    </div>

    <form [formGroup]="form" (ngSubmit)="save()" novalidate>
      <div class="mb-3">
        <label for="role_name" class="form-label small fw-semibold">Role Name <span class="text-danger">*</span></label>
        <input id="role_name" type="text" class="form-control form-control-sm" formControlName="role_name"
          placeholder="e.g. AMISP SLA User"
          [class.is-invalid]="f['role_name'].invalid && f['role_name'].touched">
        <div class="invalid-feedback">Role name is required.</div>
      </div>

      <div class="mb-4">
        <label for="role_code" class="form-label small fw-semibold">Role Code <span class="text-danger">*</span></label>
        <input id="role_code" type="text" class="form-control form-control-sm" formControlName="role_code"
          placeholder="e.g. A-SLA"
          [class.is-invalid]="f['role_code'].invalid && f['role_code'].touched">
        <div class="invalid-feedback">Role code is required.</div>
        <div *ngIf="editingRole" class="form-text text-muted">Role code cannot be changed after creation.</div>
      </div>

      <div class="d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-sm btn-outline-secondary" (click)="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-sm btn-primary" [disabled]="saving">
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
          {{ saving ? 'Saving...' : (editingRole ? 'Update' : 'Create') }}
        </button>
      </div>
    </form>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- DELETE CONFIRMATION MODAL                                                -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="modal-backdrop-custom" *ngIf="showDeleteConfirm" (click)="closeDelete()"></div>
<div class="modal-panel rm-delete-modal card shadow-lg border-0" *ngIf="showDeleteConfirm"
     role="alertdialog" aria-modal="true" aria-label="Delete Role Confirmation">
  <div class="card-body p-4 text-center">
    <div class="rm-delete-icon mb-3" aria-hidden="true">
      <i class="bi bi-trash3-fill"></i>
    </div>
    <h6 class="fw-bold mb-2">Delete Role?</h6>
    <p class="text-muted small mb-4">
      Are you sure you want to delete the role
      <strong class="text-dark">"{{ deletingRole?.role_name }}"</strong>?
      This action cannot be undone.
    </p>
    <div class="d-flex justify-content-center gap-2">
      <button type="button" class="btn btn-sm btn-outline-secondary px-4" (click)="closeDelete()">Cancel</button>
      <button type="button" class="btn btn-sm btn-danger px-4" (click)="confirmDelete()" [disabled]="deleting">
        <span *ngIf="deleting" class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
        {{ deleting ? 'Deleting...' : 'Delete' }}
      </button>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- MANAGE PERMISSIONS FULL-PAGE PANEL                                       -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="rm-perm-overlay" *ngIf="showPermPanel" role="dialog" aria-modal="true" aria-label="Manage Permissions">

  <!-- Header -->
  <div class="rm-perm-header">
    <div class="d-flex align-items-center gap-3">
      <button class="btn btn-sm btn-outline-secondary rm-back-btn" (click)="closePermPanel()" aria-label="Back to roles">
        <i class="bi bi-arrow-left me-1"></i>Back
      </button>
      <div>
        <h6 class="fw-bold mb-0">Manage Permissions</h6>
        <div class="d-flex align-items-center gap-2 mt-1">
          <span class="small text-muted fw-semibold">{{ selectedRole?.role_name }}</span>
          <span class="rm-role-code">{{ selectedRole?.role_code }}</span>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center gap-2">
      <button class="btn btn-sm btn-outline-secondary" (click)="closePermPanel()">Cancel</button>
      <button class="btn btn-sm btn-primary" (click)="savePermissions()" [disabled]="saving || permLoading">
        <span *ngIf="saving" class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
        {{ saving ? 'Saving...' : 'Save Changes' }}
      </button>
    </div>
  </div>

  <!-- Body -->
  <div class="rm-perm-body">

    <!-- Error -->
    <div *ngIf="permError" class="alert alert-danger py-2 small mb-4 d-flex align-items-center gap-2">
      <i class="bi bi-exclamation-triangle-fill"></i>{{ permError }}
    </div>

    <!-- Summary Cards -->
    <div class="rm-perm-summary mb-4">
      <div class="rm-summary-card">
        <div class="rm-summary-num">{{ allPermissions.length }}</div>
        <div class="rm-summary-label">Total Permissions</div>
      </div>
      <div class="rm-summary-card rm-summary-card--selected">
        <div class="rm-summary-num">{{ getSelectedCount() }}</div>
        <div class="rm-summary-label">Selected Permissions</div>
      </div>
    </div>

    <!-- Loading -->
    <div *ngIf="permLoading" class="text-center py-5">
      <div class="spinner-border text-primary spinner-border-sm me-2"></div>
      <span class="text-muted small">Loading permissions...</span>
    </div>

    <!-- Permission Groups -->
    <div *ngIf="!permLoading">
      <div *ngFor="let group of permGroups" class="rm-perm-group mb-3">

        <!-- Group Header -->
        <button class="rm-group-header w-100" (click)="toggleGroup(group)"
                [attr.aria-expanded]="group.expanded" [attr.aria-label]="group.module + ' permissions group'">
          <div class="d-flex align-items-center gap-2">
            <div class="rm-group-icon" aria-hidden="true">
              <i class="bi bi-grid-3x3-gap-fill"></i>
            </div>
            <span class="fw-semibold small">{{ group.module }}</span>
            <span class="badge bg-secondary-subtle text-secondary ms-1">{{ group.permissions.length }}</span>
          </div>
          <i class="bi" [class.bi-chevron-down]="!group.expanded" [class.bi-chevron-up]="group.expanded"></i>
        </button>

        <!-- Permission Matrix Table -->
        <div *ngIf="group.expanded" class="rm-perm-table-wrap">
          <table class="rm-perm-table" role="grid">
            <thead>
              <tr>
                <th class="rm-perm-name-col">Permission</th>
                <th class="text-center">View</th>
                <th class="text-center">Add</th>
                <th class="text-center">Update</th>
                <th class="text-center">Delete</th>
                <th class="text-center">Export</th>
                <th class="text-center rm-all-col">All</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let perm of group.permissions">
                <td class="rm-perm-name-col">
                  <div class="fw-semibold small">{{ perm.permission_name }}</div>
                  <div class="text-muted" style="font-size:0.7rem">{{ perm.permission_code }}</div>
                </td>
                <td class="text-center">
                  <label class="rm-toggle" [attr.aria-label]="perm.permission_name + ' view'">
                    <input type="checkbox" [(ngModel)]="permMap[perm.permission_id].can_view" (change)="onPermChange()">
                    <span class="rm-toggle-slider"></span>
                  </label>
                </td>
                <td class="text-center">
                  <label class="rm-toggle" [attr.aria-label]="perm.permission_name + ' add'">
                    <input type="checkbox" [(ngModel)]="permMap[perm.permission_id].can_add" (change)="onPermChange()">
                    <span class="rm-toggle-slider"></span>
                  </label>
                </td>
                <td class="text-center">
                  <label class="rm-toggle" [attr.aria-label]="perm.permission_name + ' update'">
                    <input type="checkbox" [(ngModel)]="permMap[perm.permission_id].can_update" (change)="onPermChange()">
                    <span class="rm-toggle-slider"></span>
                  </label>
                </td>
                <td class="text-center">
                  <label class="rm-toggle" [attr.aria-label]="perm.permission_name + ' delete'">
                    <input type="checkbox" [(ngModel)]="permMap[perm.permission_id].can_delete" (change)="onPermChange()">
                    <span class="rm-toggle-slider"></span>
                  </label>
                </td>
                <td class="text-center">
                  <label class="rm-toggle" [attr.aria-label]="perm.permission_name + ' export'">
                    <input type="checkbox" [(ngModel)]="permMap[perm.permission_id].can_export" (change)="onPermChange()">
                    <span class="rm-toggle-slider"></span>
                  </label>
                </td>
                <td class="text-center rm-all-col">
                  <label class="rm-toggle rm-toggle--all" [attr.aria-label]="perm.permission_name + ' all'">
                    <input type="checkbox" [checked]="isAllEnabled(perm.permission_id)"
                      (change)="toggleAll(perm.permission_id, $any($event.target).checked)">
                    <span class="rm-toggle-slider"></span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Empty permissions -->
      <div *ngIf="permGroups.length === 0" class="text-center py-5 text-muted small">
        <i class="bi bi-key display-6 d-block mb-2 opacity-25"></i>
        No permissions available.
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/admin/roles/roles.component.scss */\n.rm-toast {\n  position: fixed;\n  top: 1.25rem;\n  right: 1.5rem;\n  z-index: 9999;\n  background: #fff;\n  border: 1px solid #c3e6cb;\n  border-left: 4px solid #198754;\n  color: #146c43;\n  padding: 0.65rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  animation: slideInRight 0.3s ease;\n}\n.rm-toast i {\n  color: #198754;\n}\n@keyframes slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.rm-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 1100px) {\n  .rm-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .rm-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.rm-card {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  padding: 1.25rem;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.rm-card:hover {\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.rm-card-top {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n}\n.rm-role-icon {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  background: rgba(124, 58, 237, 0.1);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rm-role-icon i {\n  font-size: 1.2rem;\n  color: #7c3aed;\n}\n.rm-role-info {\n  flex: 1;\n  min-width: 0;\n}\n.rm-role-name {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #1a1d23;\n  margin: 0 0 0.35rem;\n  line-height: 1.3;\n  word-break: break-word;\n}\n.rm-role-code {\n  display: inline-block;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #1d4ed8;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  padding: 0.15rem 0.55rem;\n  border-radius: 100px;\n  letter-spacing: 0.04em;\n}\n.rm-divider {\n  border-color: #e8ecf0;\n  margin: 0.875rem 0;\n}\n.rm-perms-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.rm-perms-label {\n  display: flex;\n  align-items: center;\n  color: #1a1d23;\n  font-size: 0.82rem;\n}\n.rm-perms-label i {\n  color: #0d9488;\n}\n.rm-card-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  flex-wrap: wrap;\n}\n.rm-btn-manage {\n  border: 1.5px solid #0d9488;\n  color: #0d9488;\n  background: rgba(13, 148, 136, 0.08);\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n  padding: 0.3rem 0.75rem;\n  transition: all 0.18s;\n}\n.rm-btn-manage:hover {\n  background: #0d9488;\n  color: #fff;\n}\n.rm-btn-edit {\n  border: 1.5px solid #e8ecf0;\n  color: #6c757d;\n  background: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n  padding: 0.3rem 0.75rem;\n  transition: all 0.18s;\n}\n.rm-btn-edit:hover {\n  border-color: #4f6ef7;\n  color: #4f6ef7;\n  background: rgba(79, 110, 247, 0.06);\n}\n.rm-btn-delete {\n  border: 1.5px solid #fecaca;\n  color: #dc3545;\n  background: #fff5f5;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n  padding: 0.3rem 0.75rem;\n  transition: all 0.18s;\n}\n.rm-btn-delete:hover {\n  background: #dc3545;\n  color: #fff;\n  border-color: #dc3545;\n}\n.rm-skeleton {\n  pointer-events: none;\n  animation: pulse 1.5s ease-in-out infinite;\n}\n.rm-skeleton-icon {\n  width: 44px;\n  height: 44px;\n  background: #e9ecef;\n  border-radius: 10px;\n}\n.rm-skeleton-line {\n  height: 10px;\n  background: #e9ecef;\n  border-radius: 4px;\n}\n.rm-skeleton-line.w-40 {\n  width: 40%;\n}\n.rm-skeleton-line.w-50 {\n  width: 50%;\n}\n.rm-skeleton-line.w-60 {\n  width: 60%;\n}\n.rm-skeleton-line.w-80 {\n  width: 80%;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.rm-empty {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n}\n.rm-empty i {\n  font-size: 3rem;\n  color: #dee2e6;\n}\n.rm-modal-icon {\n  width: 32px;\n  height: 32px;\n  background: rgba(124, 58, 237, 0.1);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rm-modal-icon i {\n  color: #7c3aed;\n  font-size: 1rem;\n}\n.rm-delete-modal {\n  max-width: 380px !important;\n  top: 50% !important;\n  transform: translateY(-50%) !important;\n  right: 50% !important;\n  margin-right: -190px;\n}\n.rm-delete-icon {\n  width: 56px;\n  height: 56px;\n  background: #fff5f5;\n  border: 2px solid #fecaca;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.rm-delete-icon i {\n  font-size: 1.4rem;\n  color: #dc3545;\n}\n.rm-perm-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1060;\n  background: #f4f6fb;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.rm-perm-header {\n  background: #fff;\n  border-bottom: 1px solid #e8ecf0;\n  padding: 0.875rem 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.rm-back-btn {\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.rm-perm-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.75rem;\n}\n.rm-perm-summary {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.rm-summary-card {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  padding: 1.25rem 2rem;\n  text-align: center;\n  min-width: 160px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n}\n.rm-summary-card--selected {\n  border-color: #bfdbfe;\n  background: #eff6ff;\n}\n.rm-summary-num {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1a1d23;\n  line-height: 1;\n}\n.rm-summary-card--selected .rm-summary-num {\n  color: #1d4ed8;\n}\n.rm-summary-label {\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.35rem;\n  font-weight: 500;\n}\n.rm-perm-group {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);\n}\n.rm-group-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.875rem 1.25rem;\n  background: #fff;\n  border: none;\n  cursor: pointer;\n  transition: background 0.18s;\n  text-align: left;\n}\n.rm-group-header:hover {\n  background: #f8f9fa;\n}\n.rm-group-header i.bi-chevron-down,\n.rm-group-header i.bi-chevron-up {\n  color: #6c757d;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.rm-group-icon {\n  width: 28px;\n  height: 28px;\n  background: rgba(13, 148, 136, 0.08);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.rm-group-icon i {\n  color: #0d9488;\n  font-size: 0.8rem;\n}\n.rm-perm-table-wrap {\n  overflow-x: auto;\n  border-top: 1px solid #e8ecf0;\n}\n.rm-perm-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.rm-perm-table th {\n  background: #f8f9fa;\n  padding: 0.6rem 0.875rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n  border-bottom: 1px solid #e8ecf0;\n  white-space: nowrap;\n}\n.rm-perm-table td {\n  padding: 0.65rem 0.875rem;\n  border-bottom: 1px solid #f1f3f5;\n  vertical-align: middle;\n}\n.rm-perm-table tr:last-child td {\n  border-bottom: none;\n}\n.rm-perm-table tr:hover td {\n  background: #fafbfc;\n}\n.rm-perm-name-col {\n  min-width: 180px;\n  max-width: 260px;\n}\n.rm-all-col {\n  background: rgba(13, 148, 136, 0.04);\n}\n.rm-toggle {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n  cursor: pointer;\n  margin: 0;\n}\n.rm-toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.rm-toggle input:focus-visible + .rm-toggle-slider {\n  outline: 2px solid #4f6ef7;\n  outline-offset: 2px;\n}\n.rm-toggle input:checked + .rm-toggle-slider {\n  background: #0d9488;\n}\n.rm-toggle input:checked + .rm-toggle-slider::before {\n  transform: translateX(16px);\n}\n.rm-toggle-slider {\n  position: absolute;\n  inset: 0;\n  background: #dee2e6;\n  border-radius: 20px;\n  transition: background 0.2s ease;\n}\n.rm-toggle-slider::before {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  left: 3px;\n  top: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: transform 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.rm-toggle--all input:checked + .rm-toggle-slider {\n  background: #4f6ef7;\n}\n/*# sourceMappingURL=roles.component.css.map */\n'] }]
  }], () => [{ type: RoleService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesComponent, { className: "RolesComponent", filePath: "src/app/admin/roles/roles.component.ts", lineNumber: 29 });
})();
export {
  RolesComponent
};
//# sourceMappingURL=chunk-WGNVQIMB.js.map
