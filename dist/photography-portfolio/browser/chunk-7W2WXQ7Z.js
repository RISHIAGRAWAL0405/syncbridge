import {
  RoleService
} from "./chunk-3PDJREYD.js";
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
} from "./chunk-WRIZPPGJ.js";
import "./chunk-XLVCVILN.js";
import "./chunk-Q3L5OJPP.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U2WXL5OW.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/admin/roles/roles.component.ts
function RolesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275listener("click", function RolesComponent_div_9_Template_button_click_3_listener() {
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
function RolesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_13_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 22)(10, "button", 28);
    \u0275\u0275listener("click", function RolesComponent_div_13_tr_13_Template_button_click_10_listener() {
      const role_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPermissions(role_r4));
    });
    \u0275\u0275element(11, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 30);
    \u0275\u0275listener("click", function RolesComponent_div_13_tr_13_Template_button_click_12_listener() {
      const role_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(role_r4));
    });
    \u0275\u0275element(13, "i", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r4.role_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r4.role_code);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success-subtle", role_r4.is_assignable)("text-success", role_r4.is_assignable)("bg-secondary-subtle", !role_r4.is_assignable)("text-secondary", !role_r4.is_assignable);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r4.is_assignable ? "Yes" : "No", " ");
  }
}
function RolesComponent_div_13_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "No roles found");
    \u0275\u0275elementEnd()();
  }
}
function RolesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "table", 19)(2, "thead", 20)(3, "tr")(4, "th", 21);
    \u0275\u0275text(5, "Role Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Assignable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 22);
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, RolesComponent_div_13_tr_13_Template, 14, 11, "tr", 23)(14, RolesComponent_div_13_tr_14_Template, 3, 0, "tr", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.roles.length === 0);
  }
}
function RolesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function RolesComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function RolesComponent_div_15_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function RolesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h6", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function RolesComponent_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275template(6, RolesComponent_div_15_div_6_Template, 2, 1, "div", 38);
    \u0275\u0275elementStart(7, "form", 39);
    \u0275\u0275listener("ngSubmit", function RolesComponent_div_15_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(8, "div", 40)(9, "label", 41);
    \u0275\u0275text(10, "Role Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 42);
    \u0275\u0275elementStart(12, "div", 43);
    \u0275\u0275text(13, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 44)(15, "label", 41);
    \u0275\u0275text(16, "Role Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 45);
    \u0275\u0275elementStart(18, "div", 43);
    \u0275\u0275text(19, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 46)(21, "button", 47);
    \u0275\u0275listener("click", function RolesComponent_div_15_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 48);
    \u0275\u0275template(24, RolesComponent_div_15_span_24_Template, 1, 0, "span", 49);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingRole ? "Edit Role" : "Add Role");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["role_code"].invalid && ctx_r1.f["role_code"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["role_name"].invalid && ctx_r1.f["role_name"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Saving..." : "Save", " ");
  }
}
function RolesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function RolesComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPermModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_div_17_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 55)(6, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_17_tr_25_Template_input_ngModelChange_6_listener($event) {
      const entry_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(entry_r10[1].can_view, $event) || (entry_r10[1].can_view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 55)(8, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_17_tr_25_Template_input_ngModelChange_8_listener($event) {
      const entry_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(entry_r10[1].can_add, $event) || (entry_r10[1].can_add = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 55)(10, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_17_tr_25_Template_input_ngModelChange_10_listener($event) {
      const entry_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(entry_r10[1].can_update, $event) || (entry_r10[1].can_update = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 55)(12, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_17_tr_25_Template_input_ngModelChange_12_listener($event) {
      const entry_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(entry_r10[1].can_delete, $event) || (entry_r10[1].can_delete = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 55)(14, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_div_17_tr_25_Template_input_ngModelChange_14_listener($event) {
      const entry_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(entry_r10[1].can_export, $event) || (entry_r10[1].can_export = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const entry_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.getPermission(entry_r10[0])) == null ? null : tmp_3_0.permission_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.getPermission(entry_r10[0])) == null ? null : tmp_4_0.module_name);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", entry_r10[1].can_view);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", entry_r10[1].can_add);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", entry_r10[1].can_update);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", entry_r10[1].can_delete);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", entry_r10[1].can_export);
  }
}
function RolesComponent_div_17_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function RolesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 35)(2, "h6", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function RolesComponent_div_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPermModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 53)(6, "div", 18)(7, "table", 54)(8, "thead", 20)(9, "tr")(10, "th");
    \u0275\u0275text(11, "Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 55);
    \u0275\u0275text(15, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 55);
    \u0275\u0275text(17, "Add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 55);
    \u0275\u0275text(19, "Update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 55);
    \u0275\u0275text(21, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 55);
    \u0275\u0275text(23, "Export");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, RolesComponent_div_17_tr_25_Template, 15, 7, "tr", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 56)(27, "button", 47);
    \u0275\u0275listener("click", function RolesComponent_div_17_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPermModal = false);
    });
    \u0275\u0275text(28, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 57);
    \u0275\u0275listener("click", function RolesComponent_div_17_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePermissions());
    });
    \u0275\u0275template(30, RolesComponent_div_17_span_30_Template, 1, 0, "span", 49);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Permissions \u2014 ", ctx_r1.selectedRole == null ? null : ctx_r1.selectedRole.role_name);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.permEntries);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Saving..." : "Save Permissions", " ");
  }
}
var RolesComponent = class _RolesComponent {
  roleService;
  fb;
  cdr = inject(ChangeDetectorRef);
  roles = [];
  allPermissions = [];
  rolePermissions = [];
  loading = true;
  saving = false;
  error = "";
  success = "";
  showModal = false;
  showPermModal = false;
  editingRole = null;
  selectedRole = null;
  form;
  permMap = {};
  constructor(roleService, fb) {
    this.roleService = roleService;
    this.fb = fb;
    this.form = this.fb.group({
      role_code: ["", Validators.required],
      role_name: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.loadRoles();
    this.roleService.getAllPermissions().subscribe((r) => {
      if (r.data)
        this.allPermissions = r.data;
      this.notifyView();
    });
  }
  loadRoles() {
    this.loading = true;
    this.roleService.getAllRoles().pipe(finalize(() => this.finishLoading())).subscribe({
      next: (r) => {
        if (r.data)
          this.roles = r.data;
        this.notifyView();
      }
    });
  }
  openCreate() {
    this.editingRole = null;
    this.form.reset();
    this.form.get("role_code")?.enable();
    this.showModal = true;
    this.error = "";
  }
  openEdit(role) {
    this.editingRole = role;
    this.form.patchValue(role);
    this.form.get("role_code")?.disable();
    this.showModal = true;
    this.error = "";
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.error = "";
    const obs = this.editingRole ? this.roleService.updateRole(this.editingRole.role_id, { role_id: this.editingRole.role_id, role_name: this.form.value.role_name }) : this.roleService.createRole(this.form.value);
    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = `Role ${this.editingRole ? "updated" : "created"} successfully`;
          this.showModal = false;
          this.loadRoles();
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
  openPermissions(role) {
    this.selectedRole = role;
    this.permMap = {};
    this.allPermissions.forEach((p) => {
      this.permMap[p.permission_id] = { can_view: false, can_add: false, can_update: false, can_delete: false, can_export: false };
    });
    this.roleService.getRolePermissions(role.role_id).subscribe((r) => {
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
      this.notifyView();
    });
    this.showPermModal = true;
  }
  savePermissions() {
    if (!this.selectedRole)
      return;
    this.saving = true;
    const permissionsList = Object.entries(this.permMap).map(([permission_id, perms]) => __spreadValues({
      role_id: this.selectedRole.role_id,
      permission_id
    }, perms));
    this.roleService.updateRolePermissions(this.selectedRole.role_id, { permissionsList }).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = "Permissions updated";
          this.showPermModal = false;
          this.clearSuccessLater();
        }
        this.notifyView();
      },
      error: () => {
        this.saving = false;
        this.notifyView();
      }
    });
  }
  get f() {
    return this.form.controls;
  }
  get permEntries() {
    return Object.entries(this.permMap);
  }
  getPermission(id) {
    return this.allPermissions.find((p) => p.permission_id === id);
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
  static \u0275fac = function RolesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesComponent)(\u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesComponent, selectors: [["app-roles"]], decls: 18, vars: 7, consts: [[1, "page-header", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], ["class", "alert alert-success alert-dismissible py-2 small", 4, "ngIf"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], ["class", "modal-panel card shadow-lg border-0", 4, "ngIf"], ["class", "modal-panel modal-panel-lg card shadow-lg border-0", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "py-2", "small"], [1, "bi", "bi-check-circle-fill", "me-2"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", "spinner-border-sm"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "ps-4"], [1, "text-end", "pe-4"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ps-4", "fw-semibold", "small"], [1, "badge", "bg-secondary-subtle", "text-secondary"], [1, "badge"], ["title", "Permissions", 1, "btn", "btn-sm", "btn-outline-secondary", "me-1", 3, "click"], [1, "bi", "bi-shield-check"], ["title", "Edit", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-pencil"], ["colspan", "4", 1, "text-center", "text-muted", "py-4", "small"], [1, "modal-backdrop-custom", 3, "click"], [1, "modal-panel", "card", "shadow-lg", "border-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "py-3"], [1, "btn-close", 3, "click"], [1, "card-body"], ["class", "alert alert-danger py-2 small mb-3", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label", "small", "fw-semibold"], ["type", "text", "formControlName", "role_code", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], [1, "mb-4"], ["type", "text", "formControlName", "role_name", 1, "form-control", "form-control-sm"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-panel", "modal-panel-lg", "card", "shadow-lg", "border-0"], [1, "card-body", "overflow-auto"], [1, "table", "table-sm", "align-middle"], [1, "text-center"], [1, "d-flex", "justify-content-end", "gap-2", "mt-3"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled"], [1, "small", "fw-semibold"], [1, "small", "text-muted"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"]], template: function RolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h5", 1);
      \u0275\u0275text(3, "Roles & Permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Manage roles and access control");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function RolesComponent_Template_button_click_6_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "Add Role ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, RolesComponent_div_9_Template, 4, 1, "div", 5);
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
      \u0275\u0275template(12, RolesComponent_div_12_Template, 2, 0, "div", 8)(13, RolesComponent_div_13_Template, 15, 2, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, RolesComponent_div_14_Template, 1, 0, "div", 10)(15, RolesComponent_div_15_Template, 26, 10, "div", 11)(16, RolesComponent_div_16_Template, 1, 0, "div", 10)(17, RolesComponent_div_17_Template, 32, 5, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPermModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPermModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesComponent, [{
    type: Component,
    args: [{ selector: "app-roles", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="page-header d-flex align-items-center justify-content-between mb-4">\r
  <div>\r
    <h5 class="fw-bold mb-0">Roles & Permissions</h5>\r
    <p class="text-muted small mb-0">Manage roles and access control</p>\r
  </div>\r
  <button class="btn btn-primary btn-sm" (click)="openCreate()">\r
    <i class="bi bi-plus-lg me-1"></i>Add Role\r
  </button>\r
</div>\r
\r
<div *ngIf="success" class="alert alert-success alert-dismissible py-2 small">\r
  <i class="bi bi-check-circle-fill me-2"></i>{{ success }}\r
  <button type="button" class="btn-close btn-close-sm" (click)="success=''"></button>\r
</div>\r
\r
<div class="card border-0 shadow-sm">\r
  <div class="card-body p-0">\r
    <div *ngIf="loading" class="text-center py-5">\r
      <div class="spinner-border text-primary spinner-border-sm"></div>\r
    </div>\r
    <div class="table-responsive" *ngIf="!loading">\r
      <table class="table table-hover align-middle mb-0">\r
        <thead class="table-light">\r
          <tr>\r
            <th class="ps-4">Role Name</th>\r
            <th>Code</th>\r
            <th>Assignable</th>\r
            <th class="text-end pe-4">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let role of roles">\r
            <td class="ps-4 fw-semibold small">{{ role.role_name }}</td>\r
            <td><span class="badge bg-secondary-subtle text-secondary">{{ role.role_code }}</span></td>\r
            <td>\r
              <span class="badge" [class.bg-success-subtle]="role.is_assignable" [class.text-success]="role.is_assignable"\r
                [class.bg-secondary-subtle]="!role.is_assignable" [class.text-secondary]="!role.is_assignable">\r
                {{ role.is_assignable ? 'Yes' : 'No' }}\r
              </span>\r
            </td>\r
            <td class="text-end pe-4">\r
              <button class="btn btn-sm btn-outline-secondary me-1" (click)="openPermissions(role)" title="Permissions">\r
                <i class="bi bi-shield-check"></i>\r
              </button>\r
              <button class="btn btn-sm btn-outline-primary" (click)="openEdit(role)" title="Edit">\r
                <i class="bi bi-pencil"></i>\r
              </button>\r
            </td>\r
          </tr>\r
          <tr *ngIf="roles.length === 0">\r
            <td colspan="4" class="text-center text-muted py-4 small">No roles found</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Role Modal -->\r
<div class="modal-backdrop-custom" *ngIf="showModal" (click)="showModal=false"></div>\r
<div class="modal-panel card shadow-lg border-0" *ngIf="showModal">\r
  <div class="card-header d-flex align-items-center justify-content-between py-3">\r
    <h6 class="fw-bold mb-0">{{ editingRole ? 'Edit Role' : 'Add Role' }}</h6>\r
    <button class="btn-close" (click)="showModal=false"></button>\r
  </div>\r
  <div class="card-body">\r
    <div *ngIf="error" class="alert alert-danger py-2 small mb-3">{{ error }}</div>\r
    <form [formGroup]="form" (ngSubmit)="save()" novalidate>\r
      <div class="mb-3">\r
        <label class="form-label small fw-semibold">Role Code *</label>\r
        <input type="text" class="form-control form-control-sm" formControlName="role_code"\r
          [class.is-invalid]="f['role_code'].invalid && f['role_code'].touched">\r
        <div class="invalid-feedback">Required</div>\r
      </div>\r
      <div class="mb-4">\r
        <label class="form-label small fw-semibold">Role Name *</label>\r
        <input type="text" class="form-control form-control-sm" formControlName="role_name"\r
          [class.is-invalid]="f['role_name'].invalid && f['role_name'].touched">\r
        <div class="invalid-feedback">Required</div>\r
      </div>\r
      <div class="d-flex justify-content-end gap-2">\r
        <button type="button" class="btn btn-sm btn-outline-secondary" (click)="showModal=false">Cancel</button>\r
        <button type="submit" class="btn btn-sm btn-primary" [disabled]="saving">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>\r
          {{ saving ? 'Saving...' : 'Save' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
<!-- Permissions Modal -->\r
<div class="modal-backdrop-custom" *ngIf="showPermModal" (click)="showPermModal=false"></div>\r
<div class="modal-panel modal-panel-lg card shadow-lg border-0" *ngIf="showPermModal">\r
  <div class="card-header d-flex align-items-center justify-content-between py-3">\r
    <h6 class="fw-bold mb-0">Permissions \u2014 {{ selectedRole?.role_name }}</h6>\r
    <button class="btn-close" (click)="showPermModal=false"></button>\r
  </div>\r
  <div class="card-body overflow-auto">\r
    <div class="table-responsive">\r
      <table class="table table-sm align-middle">\r
        <thead class="table-light">\r
          <tr>\r
            <th>Permission</th>\r
            <th>Module</th>\r
            <th class="text-center">View</th>\r
            <th class="text-center">Add</th>\r
            <th class="text-center">Update</th>\r
            <th class="text-center">Delete</th>\r
            <th class="text-center">Export</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let entry of permEntries">\r
            <td class="small fw-semibold">{{ getPermission(entry[0])?.permission_name }}</td>\r
            <td class="small text-muted">{{ getPermission(entry[0])?.module_name }}</td>\r
            <td class="text-center"><input type="checkbox" class="form-check-input" [(ngModel)]="entry[1].can_view"></td>\r
            <td class="text-center"><input type="checkbox" class="form-check-input" [(ngModel)]="entry[1].can_add"></td>\r
            <td class="text-center"><input type="checkbox" class="form-check-input" [(ngModel)]="entry[1].can_update"></td>\r
            <td class="text-center"><input type="checkbox" class="form-check-input" [(ngModel)]="entry[1].can_delete"></td>\r
            <td class="text-center"><input type="checkbox" class="form-check-input" [(ngModel)]="entry[1].can_export"></td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
    <div class="d-flex justify-content-end gap-2 mt-3">\r
      <button type="button" class="btn btn-sm btn-outline-secondary" (click)="showPermModal=false">Cancel</button>\r
      <button type="button" class="btn btn-sm btn-primary" (click)="savePermissions()" [disabled]="saving">\r
        <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>\r
        {{ saving ? 'Saving...' : 'Save Permissions' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: RoleService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesComponent, { className: "RolesComponent", filePath: "src/app/admin/roles/roles.component.ts", lineNumber: 14 });
})();
export {
  RolesComponent
};
//# sourceMappingURL=chunk-7W2WXQ7Z.js.map
