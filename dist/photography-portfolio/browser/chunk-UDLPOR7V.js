import {
  ClientService
} from "./chunk-VGHZUBLD.js";
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
import "./chunk-GOMI4DH3.js";

// src/app/admin/clients/clients.component.ts
var _c0 = () => ({ standalone: true });
function ClientsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function ClientsComponent_div_9_Template_button_click_3_listener() {
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
function ClientsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_18_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 33);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 26)(17, "button", 34);
    \u0275\u0275listener("click", function ClientsComponent_div_18_tr_17_Template_button_click_17_listener() {
      const client_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(client_r4));
    });
    \u0275\u0275element(18, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 36);
    \u0275\u0275listener("click", function ClientsComponent_div_18_tr_17_Template_button_click_19_listener() {
      const client_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(client_r4));
    });
    \u0275\u0275element(20, "i", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const client_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r4.client_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r4.company_name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r4.mobile || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r4.project_count);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success-subtle", client_r4.is_active)("text-success", client_r4.is_active)("bg-danger-subtle", !client_r4.is_active)("text-danger", !client_r4.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", client_r4.is_active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-outline-danger", client_r4.is_active)("btn-outline-success", !client_r4.is_active);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-toggle-on", client_r4.is_active)("bi-toggle-off", !client_r4.is_active);
  }
}
function ClientsComponent_div_18_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "No clients found");
    \u0275\u0275elementEnd()();
  }
}
function ClientsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead", 24)(3, "tr")(4, "th", 25);
    \u0275\u0275text(5, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, ClientsComponent_div_18_tr_17_Template, 21, 22, "tr", 27)(18, ClientsComponent_div_18_tr_18_Template, 3, 0, "tr", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.filteredClients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredClients.length === 0);
  }
}
function ClientsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function ClientsComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ClientsComponent_div_20_div_9_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r7 = ctx.$implicit;
    \u0275\u0275property("value", u_r7.user_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", u_r7.full_name, " (", u_r7.email, ")");
  }
}
function ClientsComponent_div_20_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "label", 49);
    \u0275\u0275text(2, "Link to User *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 62)(4, "option", 63);
    \u0275\u0275text(5, "\u2014 Select User \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ClientsComponent_div_20_div_9_option_6_Template, 2, 3, "option", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 51);
    \u0275\u0275text(8, "Required");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["client_id"].invalid && ctx_r1.f["client_id"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.users);
  }
}
function ClientsComponent_div_20_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 66);
  }
}
function ClientsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h6", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function ClientsComponent_div_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 43);
    \u0275\u0275template(6, ClientsComponent_div_20_div_6_Template, 2, 1, "div", 44);
    \u0275\u0275elementStart(7, "form", 45);
    \u0275\u0275listener("ngSubmit", function ClientsComponent_div_20_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(8, "div", 46);
    \u0275\u0275template(9, ClientsComponent_div_20_div_9_Template, 9, 3, "div", 47);
    \u0275\u0275elementStart(10, "div", 48)(11, "label", 49);
    \u0275\u0275text(12, "Client Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 50);
    \u0275\u0275elementStart(14, "div", 51);
    \u0275\u0275text(15, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 52)(17, "label", 49);
    \u0275\u0275text(18, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 53);
    \u0275\u0275elementStart(20, "div", 51);
    \u0275\u0275text(21, "Valid email required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 52)(23, "label", 49);
    \u0275\u0275text(24, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 52)(27, "label", 49);
    \u0275\u0275text(28, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 52)(31, "label", 49);
    \u0275\u0275text(32, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 57)(35, "button", 58);
    \u0275\u0275listener("click", function ClientsComponent_div_20_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 59);
    \u0275\u0275template(38, ClientsComponent_div_20_span_38_Template, 1, 0, "span", 60);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingClient ? "Edit Client" : "Add Client");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.editingClient);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["client_name"].invalid && ctx_r1.f["client_name"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["email"].invalid && ctx_r1.f["email"].touched);
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Saving..." : "Save", " ");
  }
}
var ClientsComponent = class _ClientsComponent {
  clientService;
  userService;
  fb;
  cdr = inject(ChangeDetectorRef);
  clients = [];
  users = [];
  loading = true;
  saving = false;
  error = "";
  success = "";
  showModal = false;
  editingClient = null;
  form;
  searchTerm = "";
  constructor(clientService, userService, fb) {
    this.clientService = clientService;
    this.userService = userService;
    this.fb = fb;
    this.form = this.fb.group({
      client_id: ["", Validators.required],
      client_name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobile: [""],
      company_name: [""],
      address: [""]
    });
  }
  ngOnInit() {
    this.loadClients();
    this.userService.getUsersByType("USER").subscribe((r) => {
      if (r.data)
        this.users = r.data;
      this.notifyView();
    });
  }
  loadClients() {
    this.loading = true;
    this.clientService.getAllClients().pipe(finalize(() => this.finishLoading())).subscribe({
      next: (r) => {
        if (r.data)
          this.clients = r.data;
        this.notifyView();
      }
    });
  }
  openCreate() {
    this.editingClient = null;
    this.form.reset();
    this.form.get("client_id")?.enable();
    this.showModal = true;
    this.error = "";
  }
  openEdit(client) {
    this.editingClient = client;
    this.form.patchValue(client);
    this.form.get("client_id")?.disable();
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
    const obs = this.editingClient ? this.clientService.updateClient(this.editingClient.client_id, this.form.value) : this.clientService.createClient(this.form.value);
    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = `Client ${this.editingClient ? "updated" : "created"} successfully`;
          this.showModal = false;
          this.loadClients();
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
  toggleStatus(client) {
    this.clientService.setStatus(client.client_id, !client.is_active).subscribe({
      next: () => this.loadClients()
    });
  }
  get filteredClients() {
    if (!this.searchTerm)
      return this.clients;
    const t = this.searchTerm.toLowerCase();
    return this.clients.filter((c) => c.client_name?.toLowerCase().includes(t) || c.email?.toLowerCase().includes(t) || c.company_name?.toLowerCase().includes(t));
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
  static \u0275fac = function ClientsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsComponent)(\u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientsComponent, selectors: [["app-clients"]], decls: 21, vars: 8, consts: [[1, "page-header", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], ["class", "alert alert-success alert-dismissible py-2 small", 4, "ngIf"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "bg-white", "border-bottom", "py-3"], [1, "input-group", "input-group-sm", 2, "max-width", "300px"], [1, "input-group-text", "bg-light", "border-end-0"], [1, "bi", "bi-search", "text-muted"], ["type", "text", "placeholder", "Search clients...", 1, "form-control", "border-start-0", "ps-0", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "card-body", "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], ["class", "modal-panel card shadow-lg border-0", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "py-2", "small"], [1, "bi", "bi-check-circle-fill", "me-2"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", "spinner-border-sm"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "ps-4"], [1, "text-end", "pe-4"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "fw-semibold", "small"], [1, "text-muted", 2, "font-size", "0.75rem"], [1, "small", "text-muted"], [1, "badge", "bg-info-subtle", "text-info"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", 3, "click"], [1, "bi"], ["colspan", "6", 1, "text-center", "text-muted", "py-4", "small"], [1, "modal-backdrop-custom", 3, "click"], [1, "modal-panel", "card", "shadow-lg", "border-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "py-3"], [1, "btn-close", 3, "click"], [1, "card-body", "overflow-auto"], ["class", "alert alert-danger py-2 small mb-3", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row", "g-3"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], [1, "form-label", "small", "fw-semibold"], ["type", "text", "formControlName", "client_name", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], [1, "col-6"], ["type", "email", "formControlName", "email", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "mobile", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "company_name", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "address", 1, "form-control", "form-control-sm"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], ["formControlName", "client_id", 1, "form-select", "form-select-sm"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "spinner-border", "spinner-border-sm", "me-1"]], template: function ClientsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h5", 1);
      \u0275\u0275text(3, "Clients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Manage client accounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function ClientsComponent_Template_button_click_6_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "Add Client ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ClientsComponent_div_9_Template, 4, 1, "div", 5);
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "span", 9);
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275template(17, ClientsComponent_div_17_Template, 2, 0, "div", 13)(18, ClientsComponent_div_18_Template, 19, 2, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, ClientsComponent_div_19_Template, 1, 0, "div", 15)(20, ClientsComponent_div_20_Template, 40, 11, "div", 16);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientsComponent, [{
    type: Component,
    args: [{ selector: "app-clients", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="page-header d-flex align-items-center justify-content-between mb-4">\r
  <div>\r
    <h5 class="fw-bold mb-0">Clients</h5>\r
    <p class="text-muted small mb-0">Manage client accounts</p>\r
  </div>\r
  <button class="btn btn-primary btn-sm" (click)="openCreate()">\r
    <i class="bi bi-plus-lg me-1"></i>Add Client\r
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
      <input type="text" class="form-control border-start-0 ps-0" placeholder="Search clients..."\r
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
            <th class="ps-4">Client</th>\r
            <th>Company</th>\r
            <th>Mobile</th>\r
            <th>Projects</th>\r
            <th>Status</th>\r
            <th class="text-end pe-4">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let client of filteredClients">\r
            <td class="ps-4">\r
              <div class="fw-semibold small">{{ client.client_name }}</div>\r
              <div class="text-muted" style="font-size:0.75rem">{{ client.email }}</div>\r
            </td>\r
            <td class="small text-muted">{{ client.company_name || '\u2014' }}</td>\r
            <td class="small text-muted">{{ client.mobile || '\u2014' }}</td>\r
            <td><span class="badge bg-info-subtle text-info">{{ client.project_count }}</span></td>\r
            <td>\r
              <span class="badge" [class.bg-success-subtle]="client.is_active" [class.text-success]="client.is_active"\r
                [class.bg-danger-subtle]="!client.is_active" [class.text-danger]="!client.is_active">\r
                {{ client.is_active ? 'Active' : 'Inactive' }}\r
              </span>\r
            </td>\r
            <td class="text-end pe-4">\r
              <button class="btn btn-sm btn-outline-primary me-1" (click)="openEdit(client)">\r
                <i class="bi bi-pencil"></i>\r
              </button>\r
              <button class="btn btn-sm" [class.btn-outline-danger]="client.is_active" [class.btn-outline-success]="!client.is_active"\r
                (click)="toggleStatus(client)">\r
                <i class="bi" [class.bi-toggle-on]="client.is_active" [class.bi-toggle-off]="!client.is_active"></i>\r
              </button>\r
            </td>\r
          </tr>\r
          <tr *ngIf="filteredClients.length === 0">\r
            <td colspan="6" class="text-center text-muted py-4 small">No clients found</td>\r
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
    <h6 class="fw-bold mb-0">{{ editingClient ? 'Edit Client' : 'Add Client' }}</h6>\r
    <button class="btn-close" (click)="showModal=false"></button>\r
  </div>\r
  <div class="card-body overflow-auto">\r
    <div *ngIf="error" class="alert alert-danger py-2 small mb-3">{{ error }}</div>\r
    <form [formGroup]="form" (ngSubmit)="save()" novalidate>\r
      <div class="row g-3">\r
        <div class="col-12" *ngIf="!editingClient">\r
          <label class="form-label small fw-semibold">Link to User *</label>\r
          <select class="form-select form-select-sm" formControlName="client_id"\r
            [class.is-invalid]="f['client_id'].invalid && f['client_id'].touched">\r
            <option value="">\u2014 Select User \u2014</option>\r
            <option *ngFor="let u of users" [value]="u.user_id">{{ u.full_name }} ({{ u.email }})</option>\r
          </select>\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-12">\r
          <label class="form-label small fw-semibold">Client Name *</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="client_name"\r
            [class.is-invalid]="f['client_name'].invalid && f['client_name'].touched">\r
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
          <label class="form-label small fw-semibold">Company</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="company_name">\r
        </div>\r
        <div class="col-6">\r
          <label class="form-label small fw-semibold">Address</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="address">\r
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
  }], () => [{ type: ClientService }, { type: UserService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientsComponent, { className: "ClientsComponent", filePath: "src/app/admin/clients/clients.component.ts", lineNumber: 15 });
})();
export {
  ClientsComponent
};
//# sourceMappingURL=chunk-UDLPOR7V.js.map
