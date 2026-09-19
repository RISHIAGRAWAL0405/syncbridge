import {
  RoleService
} from "./chunk-3PDJREYD.js";
import {
  UserType
} from "./chunk-337B7NGF.js";
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
} from "./chunk-WRIZPPGJ.js";
import {
  UserService
} from "./chunk-SIL2IIND.js";
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U2WXL5OW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/admin/users/users.component.ts
var _c0 = () => ({ standalone: true });
function UsersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function UsersComponent_div_9_Template_button_click_3_listener() {
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
function UsersComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_18_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25)(2, "div", 29)(3, "div", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 34);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 26)(21, "button", 36);
    \u0275\u0275listener("click", function UsersComponent_div_18_tr_17_Template_button_click_21_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(user_r4));
    });
    \u0275\u0275element(22, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 38);
    \u0275\u0275listener("click", function UsersComponent_div_18_tr_17_Template_button_click_23_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(user_r4));
    });
    \u0275\u0275element(24, "i", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", user_r4.first_name.charAt(0), "", user_r4.last_name.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.full_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.user_name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-primary", user_r4.user_type === "ADMIN")("bg-secondary", user_r4.user_type !== "ADMIN");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.user_type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.role_name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success-subtle", user_r4.is_active)("text-success", user_r4.is_active)("bg-danger-subtle", !user_r4.is_active)("text-danger", !user_r4.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.is_active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-outline-danger", user_r4.is_active)("btn-outline-success", !user_r4.is_active);
    \u0275\u0275property("title", user_r4.is_active ? "Deactivate" : "Activate");
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-toggle-on", user_r4.is_active)("bi-toggle-off", !user_r4.is_active);
  }
}
function UsersComponent_div_18_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "No users found");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead", 24)(3, "tr")(4, "th", 25);
    \u0275\u0275text(5, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, UsersComponent_div_18_tr_17_Template, 25, 29, "tr", 27)(18, UsersComponent_div_18_tr_18_Template, 3, 0, "tr", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.filteredUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredUsers.length === 0);
  }
}
function UsersComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function UsersComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function UsersComponent_div_20_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "label", 50);
    \u0275\u0275text(2, "Username *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 68);
    \u0275\u0275elementStart(4, "div", 52);
    \u0275\u0275text(5, "Required");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["user_name"].invalid && ctx_r1.f["user_name"].touched);
  }
}
function UsersComponent_div_20_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275property("value", t_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7);
  }
}
function UsersComponent_div_20_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275property("value", r_r8.role_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r8.role_name);
  }
}
function UsersComponent_div_20_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "label", 50);
    \u0275\u0275text(2, "Password *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 69);
    \u0275\u0275elementStart(4, "div", 52);
    \u0275\u0275text(5, "Required");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["password"].invalid && ctx_r1.f["password"].touched);
  }
}
function UsersComponent_div_20_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 70);
  }
}
function UsersComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "h6", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 44);
    \u0275\u0275listener("click", function UsersComponent_div_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 45);
    \u0275\u0275template(6, UsersComponent_div_20_div_6_Template, 2, 1, "div", 46);
    \u0275\u0275elementStart(7, "form", 47);
    \u0275\u0275listener("ngSubmit", function UsersComponent_div_20_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(8, "div", 48)(9, "div", 49)(10, "label", 50);
    \u0275\u0275text(11, "First Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 51);
    \u0275\u0275elementStart(13, "div", 52);
    \u0275\u0275text(14, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 49)(16, "label", 50);
    \u0275\u0275text(17, "Last Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 53);
    \u0275\u0275elementStart(19, "div", 52);
    \u0275\u0275text(20, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, UsersComponent_div_20_div_21_Template, 6, 2, "div", 54);
    \u0275\u0275elementStart(22, "div", 49)(23, "label", 50);
    \u0275\u0275text(24, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 55);
    \u0275\u0275elementStart(26, "div", 52);
    \u0275\u0275text(27, "Valid email required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 49)(29, "label", 50);
    \u0275\u0275text(30, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 49)(33, "label", 50);
    \u0275\u0275text(34, "User Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 57);
    \u0275\u0275template(36, UsersComponent_div_20_option_36_Template, 2, 2, "option", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 49)(38, "label", 50);
    \u0275\u0275text(39, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 59)(41, "option", 60);
    \u0275\u0275text(42, "\u2014 None \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, UsersComponent_div_20_option_43_Template, 2, 2, "option", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, UsersComponent_div_20_div_44_Template, 6, 2, "div", 54);
    \u0275\u0275elementStart(45, "div", 49)(46, "label", 50);
    \u0275\u0275text(47, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 49)(50, "label", 50);
    \u0275\u0275text(51, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 63)(54, "button", 64);
    \u0275\u0275listener("click", function UsersComponent_div_20_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(55, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 65);
    \u0275\u0275template(57, UsersComponent_div_20_span_57_Template, 1, 0, "span", 66);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingUser ? "Edit User" : "Add User");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["first_name"].invalid && ctx_r1.f["first_name"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["last_name"].invalid && ctx_r1.f["last_name"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.editingUser);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["email"].invalid && ctx_r1.f["email"].touched);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.userTypes);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.editingUser);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Saving..." : "Save", " ");
  }
}
var UsersComponent = class _UsersComponent {
  userService;
  roleService;
  fb;
  cdr = inject(ChangeDetectorRef);
  users = [];
  roles = [];
  loading = true;
  saving = false;
  error = "";
  success = "";
  showModal = false;
  editingUser = null;
  form;
  userTypes = Object.values(UserType);
  searchTerm = "";
  constructor(userService, roleService, fb) {
    this.userService = userService;
    this.roleService = roleService;
    this.fb = fb;
    this.form = this.fb.group({
      user_name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      mobile: [""],
      user_type: [UserType.USER, Validators.required],
      password: ["", Validators.required],
      designation_name: [""],
      department_name: [""],
      role_id: [null]
    });
  }
  ngOnInit() {
    this.loadUsers();
    this.roleService.getAllRoles().subscribe((r) => {
      if (r.data)
        this.roles = r.data;
      this.notifyView();
    });
  }
  loadUsers() {
    this.loading = true;
    this.userService.getAllUsers().pipe(finalize(() => this.finishLoading())).subscribe({
      next: (r) => {
        if (r.data)
          this.users = r.data;
        this.notifyView();
      }
    });
  }
  openCreate() {
    this.editingUser = null;
    this.form.reset({ user_type: UserType.USER });
    this.form.get("password")?.setValidators(Validators.required);
    this.form.get("password")?.updateValueAndValidity();
    this.showModal = true;
    this.error = "";
  }
  openEdit(user) {
    this.editingUser = user;
    this.form.patchValue(__spreadProps(__spreadValues({}, user), { role_id: user.role?.role_id || null }));
    this.form.get("password")?.clearValidators();
    this.form.get("password")?.updateValueAndValidity();
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
    const obs = this.editingUser ? this.userService.updateUser(this.editingUser.user_id, this.form.value) : this.userService.createUser(this.form.value);
    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = `User ${this.editingUser ? "updated" : "created"} successfully`;
          this.showModal = false;
          this.loadUsers();
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
  toggleStatus(user) {
    this.userService.setActiveInactive(user.user_id, !user.is_active).subscribe({
      next: () => this.loadUsers()
    });
  }
  get filteredUsers() {
    if (!this.searchTerm)
      return this.users;
    const t = this.searchTerm.toLowerCase();
    return this.users.filter((u) => u.full_name?.toLowerCase().includes(t) || u.email?.toLowerCase().includes(t) || u.user_name?.toLowerCase().includes(t));
  }
  get f() {
    return this.form.controls;
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
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 21, vars: 8, consts: [[1, "page-header", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], ["class", "alert alert-success alert-dismissible py-2 small", 4, "ngIf"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "bg-white", "border-bottom", "py-3"], [1, "input-group", "input-group-sm", 2, "max-width", "300px"], [1, "input-group-text", "bg-light", "border-end-0"], [1, "bi", "bi-search", "text-muted"], ["type", "text", "placeholder", "Search users...", 1, "form-control", "border-start-0", "ps-0", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "card-body", "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], ["class", "modal-panel card shadow-lg border-0", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "py-2", "small"], [1, "bi", "bi-check-circle-fill", "me-2"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", "spinner-border-sm"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "ps-4"], [1, "text-end", "pe-4"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2"], [1, "avatar-sm", "bg-primary-subtle", "text-primary", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "fw-bold", "small"], [1, "fw-semibold", "small"], [1, "text-muted", 2, "font-size", "0.75rem"], [1, "small"], [1, "badge"], [1, "small", "text-muted"], ["title", "Edit", 1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", 3, "click", "title"], [1, "bi"], ["colspan", "6", 1, "text-center", "text-muted", "py-4", "small"], [1, "modal-backdrop-custom", 3, "click"], [1, "modal-panel", "card", "shadow-lg", "border-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "py-3"], [1, "btn-close", 3, "click"], [1, "card-body", "overflow-auto"], ["class", "alert alert-danger py-2 small mb-3", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-6"], [1, "form-label", "small", "fw-semibold"], ["type", "text", "formControlName", "first_name", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], ["type", "text", "formControlName", "last_name", 1, "form-control", "form-control-sm"], ["class", "col-6", 4, "ngIf"], ["type", "email", "formControlName", "email", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "mobile", 1, "form-control", "form-control-sm"], ["formControlName", "user_type", 1, "form-select", "form-select-sm"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "role_id", 1, "form-select", "form-select-sm"], [3, "value"], ["type", "text", "formControlName", "designation_name", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "department_name", 1, "form-control", "form-control-sm"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], ["type", "text", "formControlName", "user_name", 1, "form-control", "form-control-sm"], ["type", "password", "formControlName", "password", 1, "form-control", "form-control-sm"], [1, "spinner-border", "spinner-border-sm", "me-1"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h5", 1);
      \u0275\u0275text(3, "Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Manage system users");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_6_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "Add User ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, UsersComponent_div_9_Template, 4, 1, "div", 5);
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "span", 9);
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275template(17, UsersComponent_div_17_Template, 2, 0, "div", 13)(18, UsersComponent_div_18_Template, 19, 2, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, UsersComponent_div_19_Template, 1, 0, "div", 15)(20, UsersComponent_div_20_Template, 59, 17, "div", 16);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="page-header d-flex align-items-center justify-content-between mb-4">\r
  <div>\r
    <h5 class="fw-bold mb-0">Users</h5>\r
    <p class="text-muted small mb-0">Manage system users</p>\r
  </div>\r
  <button class="btn btn-primary btn-sm" (click)="openCreate()">\r
    <i class="bi bi-plus-lg me-1"></i>Add User\r
  </button>\r
</div>\r
\r
<div *ngIf="success" class="alert alert-success alert-dismissible py-2 small">\r
  <i class="bi bi-check-circle-fill me-2"></i>{{ success }}\r
  <button type="button" class="btn-close btn-close-sm" (click)="success=''"></button>\r
</div>\r
\r
<div class="card border-0 shadow-sm">\r
  <div class="card-header bg-white border-bottom py-3">\r
    <div class="input-group input-group-sm" style="max-width:300px">\r
      <span class="input-group-text bg-light border-end-0"><i class="bi bi-search text-muted"></i></span>\r
      <input type="text" class="form-control border-start-0 ps-0" placeholder="Search users..."\r
        [(ngModel)]="searchTerm" [ngModelOptions]="{standalone:true}">\r
    </div>\r
  </div>\r
  <div class="card-body p-0">\r
    <div *ngIf="loading" class="text-center py-5">\r
      <div class="spinner-border text-primary spinner-border-sm"></div>\r
    </div>\r
    <div class="table-responsive" *ngIf="!loading">\r
      <table class="table table-hover align-middle mb-0">\r
        <thead class="table-light">\r
          <tr>\r
            <th class="ps-4">User</th>\r
            <th>Username</th>\r
            <th>Type</th>\r
            <th>Role</th>\r
            <th>Status</th>\r
            <th class="text-end pe-4">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let user of filteredUsers">\r
            <td class="ps-4">\r
              <div class="d-flex align-items-center gap-2">\r
                <div class="avatar-sm bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold small">\r
                  {{ user.first_name.charAt(0) }}{{ user.last_name.charAt(0) }}\r
                </div>\r
                <div>\r
                  <div class="fw-semibold small">{{ user.full_name }}</div>\r
                  <div class="text-muted" style="font-size:0.75rem">{{ user.email }}</div>\r
                </div>\r
              </div>\r
            </td>\r
            <td class="small">{{ user.user_name }}</td>\r
            <td>\r
              <span class="badge" [class.bg-primary]="user.user_type==='ADMIN'" [class.bg-secondary]="user.user_type!=='ADMIN'">\r
                {{ user.user_type }}\r
              </span>\r
            </td>\r
            <td class="small text-muted">{{ user.role_name || '\u2014' }}</td>\r
            <td>\r
              <span class="badge" [class.bg-success-subtle]="user.is_active" [class.text-success]="user.is_active"\r
                [class.bg-danger-subtle]="!user.is_active" [class.text-danger]="!user.is_active">\r
                {{ user.is_active ? 'Active' : 'Inactive' }}\r
              </span>\r
            </td>\r
            <td class="text-end pe-4">\r
              <button class="btn btn-sm btn-outline-primary me-1" (click)="openEdit(user)" title="Edit">\r
                <i class="bi bi-pencil"></i>\r
              </button>\r
              <button class="btn btn-sm" [class.btn-outline-danger]="user.is_active" [class.btn-outline-success]="!user.is_active"\r
                (click)="toggleStatus(user)" [title]="user.is_active ? 'Deactivate' : 'Activate'">\r
                <i class="bi" [class.bi-toggle-on]="user.is_active" [class.bi-toggle-off]="!user.is_active"></i>\r
              </button>\r
            </td>\r
          </tr>\r
          <tr *ngIf="filteredUsers.length === 0">\r
            <td colspan="6" class="text-center text-muted py-4 small">No users found</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal -->\r
<div class="modal-backdrop-custom" *ngIf="showModal" (click)="showModal=false"></div>\r
<div class="modal-panel card shadow-lg border-0" *ngIf="showModal">\r
  <div class="card-header d-flex align-items-center justify-content-between py-3">\r
    <h6 class="fw-bold mb-0">{{ editingUser ? 'Edit User' : 'Add User' }}</h6>\r
    <button class="btn-close" (click)="showModal=false"></button>\r
  </div>\r
  <div class="card-body overflow-auto">\r
    <div *ngIf="error" class="alert alert-danger py-2 small mb-3">{{ error }}</div>\r
    <form [formGroup]="form" (ngSubmit)="save()" novalidate>\r
      <div class="row g-3">\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">First Name *</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="first_name"\r
            [class.is-invalid]="f['first_name'].invalid && f['first_name'].touched">\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">Last Name *</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="last_name"\r
            [class.is-invalid]="f['last_name'].invalid && f['last_name'].touched">\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-6" *ngIf="!editingUser">\r
          <label class="form-label small fw-semibold">Username *</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="user_name"\r
            [class.is-invalid]="f['user_name'].invalid && f['user_name'].touched">\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">Email *</label>\r
          <input type="email" class="form-control form-control-sm" formControlName="email"\r
            [class.is-invalid]="f['email'].invalid && f['email'].touched">\r
          <div class="invalid-feedback">Valid email required</div>\r
        </div>\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">Mobile</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="mobile">\r
        </div>\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">User Type *</label>\r
          <select class="form-select form-select-sm" formControlName="user_type">\r
            <option *ngFor="let t of userTypes" [value]="t">{{ t }}</option>\r
          </select>\r
        </div>\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">Role</label>\r
          <select class="form-select form-select-sm" formControlName="role_id">\r
            <option [value]="null">\u2014 None \u2014</option>\r
            <option *ngFor="let r of roles" [value]="r.role_id">{{ r.role_name }}</option>\r
          </select>\r
        </div>\r
        <div class="col-6" *ngIf="!editingUser">\r
          <label class="form-label small fw-semibold">Password *</label>\r
          <input type="password" class="form-control form-control-sm" formControlName="password"\r
            [class.is-invalid]="f['password'].invalid && f['password'].touched">\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">Designation</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="designation_name">\r
        </div>\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">Department</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="department_name">\r
        </div>\r
      </div>\r
      <div class="d-flex justify-content-end gap-2 mt-4">\r
        <button type="button" class="btn btn-sm btn-outline-secondary" (click)="showModal=false">Cancel</button>\r
        <button type="submit" class="btn btn-sm btn-primary" [disabled]="saving">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>\r
          {{ saving ? 'Saving...' : 'Save' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: UserService }, { type: RoleService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/admin/users/users.component.ts", lineNumber: 16 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-URQ7FHO5.js.map
