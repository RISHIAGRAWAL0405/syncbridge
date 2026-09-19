import {
  ProjectService
} from "./chunk-VUT77BWS.js";
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
import "./chunk-XLVCVILN.js";
import "./chunk-Q3L5OJPP.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  SlicePipe,
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
  ɵɵpipeBind3,
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

// src/app/admin/projects/projects.component.ts
var _c0 = () => ({ standalone: true });
function ProjectsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function ProjectsComponent_div_9_Template_button_click_3_listener() {
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
function ProjectsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_div_18_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 32);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 31);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 31);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 33);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 26)(22, "button", 34);
    \u0275\u0275listener("click", function ProjectsComponent_div_18_tr_19_Template_button_click_22_listener() {
      const project_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(project_r4));
    });
    \u0275\u0275element(23, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 36);
    \u0275\u0275listener("click", function ProjectsComponent_div_18_tr_19_Template_button_click_24_listener() {
      const project_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(project_r4));
    });
    \u0275\u0275element(25, "i", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r4.project_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(6, 24, project_r4.description || "", 0, 40), "", (project_r4.description || "").length > 40 ? "..." : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r4.client_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r4.project_code || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r4.start_date ? \u0275\u0275pipeBind2(14, 28, project_r4.start_date, "mediumDate") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r4.end_date ? \u0275\u0275pipeBind2(17, 31, project_r4.end_date, "mediumDate") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success-subtle", project_r4.is_active)("text-success", project_r4.is_active)("bg-danger-subtle", !project_r4.is_active)("text-danger", !project_r4.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", project_r4.is_active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-outline-danger", project_r4.is_active)("btn-outline-success", !project_r4.is_active);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-toggle-on", project_r4.is_active)("bi-toggle-off", !project_r4.is_active);
  }
}
function ProjectsComponent_div_18_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "No projects found");
    \u0275\u0275elementEnd()();
  }
}
function ProjectsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead", 24)(3, "tr")(4, "th", 25);
    \u0275\u0275text(5, "Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, ProjectsComponent_div_18_tr_19_Template, 26, 34, "tr", 27)(20, ProjectsComponent_div_18_tr_20_Template, 3, 0, "tr", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.filteredProjects);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredProjects.length === 0);
  }
}
function ProjectsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function ProjectsComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_div_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ProjectsComponent_div_20_div_9_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("value", c_r7.client_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.client_name);
  }
}
function ProjectsComponent_div_20_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "label", 49);
    \u0275\u0275text(2, "Client *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 64)(4, "option", 65);
    \u0275\u0275text(5, "\u2014 Select Client \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProjectsComponent_div_20_div_9_option_6_Template, 2, 2, "option", 66);
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
    \u0275\u0275property("ngForOf", ctx_r1.clients);
  }
}
function ProjectsComponent_div_20_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 68);
  }
}
function ProjectsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h6", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function ProjectsComponent_div_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 43);
    \u0275\u0275template(6, ProjectsComponent_div_20_div_6_Template, 2, 1, "div", 44);
    \u0275\u0275elementStart(7, "form", 45);
    \u0275\u0275listener("ngSubmit", function ProjectsComponent_div_20_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(8, "div", 46);
    \u0275\u0275template(9, ProjectsComponent_div_20_div_9_Template, 9, 3, "div", 47);
    \u0275\u0275elementStart(10, "div", 48)(11, "label", 49);
    \u0275\u0275text(12, "Project Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 50);
    \u0275\u0275elementStart(14, "div", 51);
    \u0275\u0275text(15, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 52)(17, "label", 49);
    \u0275\u0275text(18, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 54)(21, "label", 49);
    \u0275\u0275text(22, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "textarea", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 56)(25, "label", 49);
    \u0275\u0275text(26, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 56)(29, "label", 49);
    \u0275\u0275text(30, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 59)(33, "button", 60);
    \u0275\u0275listener("click", function ProjectsComponent_div_20_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(34, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 61);
    \u0275\u0275template(36, ProjectsComponent_div_20_span_36_Template, 1, 0, "span", 62);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editingProject ? "Edit Project" : "Add Project");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.editingProject);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["project_name"].invalid && ctx_r1.f["project_name"].touched);
    \u0275\u0275advance(22);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Saving..." : "Save", " ");
  }
}
var ProjectsComponent = class _ProjectsComponent {
  projectService;
  clientService;
  fb;
  cdr = inject(ChangeDetectorRef);
  projects = [];
  clients = [];
  loading = true;
  saving = false;
  error = "";
  success = "";
  showModal = false;
  editingProject = null;
  form;
  searchTerm = "";
  constructor(projectService, clientService, fb) {
    this.projectService = projectService;
    this.clientService = clientService;
    this.fb = fb;
    this.form = this.fb.group({
      client_id: ["", Validators.required],
      project_name: ["", Validators.required],
      project_code: [""],
      description: [""],
      start_date: [""],
      end_date: [""]
    });
  }
  ngOnInit() {
    this.loadProjects();
    this.clientService.getActiveClients().subscribe((r) => {
      if (r.data)
        this.clients = r.data;
      this.notifyView();
    });
  }
  loadProjects() {
    this.loading = true;
    this.projectService.getAllProjects().pipe(finalize(() => this.finishLoading())).subscribe({
      next: (r) => {
        if (r.data)
          this.projects = r.data;
        this.notifyView();
      }
    });
  }
  openCreate() {
    this.editingProject = null;
    this.form.reset();
    this.form.get("client_id")?.enable();
    this.showModal = true;
    this.error = "";
  }
  openEdit(project) {
    this.editingProject = project;
    this.form.patchValue(__spreadProps(__spreadValues({}, project), {
      start_date: project.start_date?.substring(0, 10),
      end_date: project.end_date?.substring(0, 10)
    }));
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
    const obs = this.editingProject ? this.projectService.updateProject(this.editingProject.project_id, this.form.value) : this.projectService.createProject(this.form.value);
    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = `Project ${this.editingProject ? "updated" : "created"} successfully`;
          this.showModal = false;
          this.loadProjects();
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
  toggleStatus(project) {
    this.projectService.setStatus(project.project_id, !project.is_active).subscribe({
      next: () => this.loadProjects()
    });
  }
  get filteredProjects() {
    if (!this.searchTerm)
      return this.projects;
    const t = this.searchTerm.toLowerCase();
    return this.projects.filter((p) => p.project_name?.toLowerCase().includes(t) || p.client_name?.toLowerCase().includes(t) || p.project_code?.toLowerCase().includes(t));
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
  static \u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectsComponent)(\u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], decls: 21, vars: 8, consts: [[1, "page-header", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], ["class", "alert alert-success alert-dismissible py-2 small", 4, "ngIf"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "bg-white", "border-bottom", "py-3"], [1, "input-group", "input-group-sm", 2, "max-width", "300px"], [1, "input-group-text", "bg-light", "border-end-0"], [1, "bi", "bi-search", "text-muted"], ["type", "text", "placeholder", "Search projects...", 1, "form-control", "border-start-0", "ps-0", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "card-body", "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], ["class", "modal-panel card shadow-lg border-0", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "py-2", "small"], [1, "bi", "bi-check-circle-fill", "me-2"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", "spinner-border-sm"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "ps-4"], [1, "text-end", "pe-4"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "fw-semibold", "small"], [1, "text-muted", 2, "font-size", "0.75rem"], [1, "small", "text-muted"], [1, "badge", "bg-secondary-subtle", "text-secondary"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", 3, "click"], [1, "bi"], ["colspan", "7", 1, "text-center", "text-muted", "py-4", "small"], [1, "modal-backdrop-custom", 3, "click"], [1, "modal-panel", "card", "shadow-lg", "border-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "py-3"], [1, "btn-close", 3, "click"], [1, "card-body", "overflow-auto"], ["class", "alert alert-danger py-2 small mb-3", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row", "g-3"], ["class", "col-12", 4, "ngIf"], [1, "col-8"], [1, "form-label", "small", "fw-semibold"], ["type", "text", "formControlName", "project_name", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], [1, "col-4"], ["type", "text", "formControlName", "project_code", 1, "form-control", "form-control-sm"], [1, "col-12"], ["formControlName", "description", "rows", "2", 1, "form-control", "form-control-sm"], [1, "col-6"], ["type", "date", "formControlName", "start_date", 1, "form-control", "form-control-sm"], ["type", "date", "formControlName", "end_date", 1, "form-control", "form-control-sm"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], ["formControlName", "client_id", 1, "form-select", "form-select-sm"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "spinner-border", "spinner-border-sm", "me-1"]], template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h5", 1);
      \u0275\u0275text(3, "Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Manage all projects");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function ProjectsComponent_Template_button_click_6_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "Add Project ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ProjectsComponent_div_9_Template, 4, 1, "div", 5);
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "span", 9);
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275template(17, ProjectsComponent_div_17_Template, 2, 0, "div", 13)(18, ProjectsComponent_div_18_Template, 21, 2, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, ProjectsComponent_div_19_Template, 1, 0, "div", 15)(20, ProjectsComponent_div_20_Template, 38, 9, "div", 16);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, SlicePipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsComponent, [{
    type: Component,
    args: [{ selector: "app-projects", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="page-header d-flex align-items-center justify-content-between mb-4">\r
  <div>\r
    <h5 class="fw-bold mb-0">Projects</h5>\r
    <p class="text-muted small mb-0">Manage all projects</p>\r
  </div>\r
  <button class="btn btn-primary btn-sm" (click)="openCreate()">\r
    <i class="bi bi-plus-lg me-1"></i>Add Project\r
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
      <input type="text" class="form-control border-start-0 ps-0" placeholder="Search projects..."\r
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
            <th class="ps-4">Project</th>\r
            <th>Client</th>\r
            <th>Code</th>\r
            <th>Start Date</th>\r
            <th>End Date</th>\r
            <th>Status</th>\r
            <th class="text-end pe-4">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let project of filteredProjects">\r
            <td class="ps-4">\r
              <div class="fw-semibold small">{{ project.project_name }}</div>\r
              <div class="text-muted" style="font-size:0.75rem">{{ (project.description || '') | slice:0:40 }}{{ (project.description || '').length > 40 ? '...' : '' }}</div>\r
            </td>\r
            <td class="small text-muted">{{ project.client_name }}</td>\r
            <td><span class="badge bg-secondary-subtle text-secondary">{{ project.project_code || '\u2014' }}</span></td>\r
            <td class="small text-muted">{{ project.start_date ? (project.start_date | date:'mediumDate') : '\u2014' }}</td>\r
            <td class="small text-muted">{{ project.end_date ? (project.end_date | date:'mediumDate') : '\u2014' }}</td>\r
            <td>\r
              <span class="badge" [class.bg-success-subtle]="project.is_active" [class.text-success]="project.is_active"\r
                [class.bg-danger-subtle]="!project.is_active" [class.text-danger]="!project.is_active">\r
                {{ project.is_active ? 'Active' : 'Inactive' }}\r
              </span>\r
            </td>\r
            <td class="text-end pe-4">\r
              <button class="btn btn-sm btn-outline-primary me-1" (click)="openEdit(project)">\r
                <i class="bi bi-pencil"></i>\r
              </button>\r
              <button class="btn btn-sm" [class.btn-outline-danger]="project.is_active" [class.btn-outline-success]="!project.is_active"\r
                (click)="toggleStatus(project)">\r
                <i class="bi" [class.bi-toggle-on]="project.is_active" [class.bi-toggle-off]="!project.is_active"></i>\r
              </button>\r
            </td>\r
          </tr>\r
          <tr *ngIf="filteredProjects.length === 0">\r
            <td colspan="7" class="text-center text-muted py-4 small">No projects found</td>\r
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
    <h6 class="fw-bold mb-0">{{ editingProject ? 'Edit Project' : 'Add Project' }}</h6>\r
    <button class="btn-close" (click)="showModal=false"></button>\r
  </div>\r
  <div class="card-body overflow-auto">\r
    <div *ngIf="error" class="alert alert-danger py-2 small mb-3">{{ error }}</div>\r
    <form [formGroup]="form" (ngSubmit)="save()" novalidate>\r
      <div class="row g-3">\r
        <div class="col-12" *ngIf="!editingProject">\r
          <label class="form-label small fw-semibold">Client *</label>\r
          <select class="form-select form-select-sm" formControlName="client_id"\r
            [class.is-invalid]="f['client_id'].invalid && f['client_id'].touched">\r
            <option value="">\u2014 Select Client \u2014</option>\r
            <option *ngFor="let c of clients" [value]="c.client_id">{{ c.client_name }}</option>\r
          </select>\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-8">\r
          <label class="form-label small fw-semibold">Project Name *</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="project_name"\r
            [class.is-invalid]="f['project_name'].invalid && f['project_name'].touched">\r
          <div class="invalid-feedback">Required</div>\r
        </div>\r
        <div class="col-4">\r
          <label class="form-label small fw-semibold">Code</label>\r
          <input type="text" class="form-control form-control-sm" formControlName="project_code">\r
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
  }], () => [{ type: ProjectService }, { type: ClientService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/admin/projects/projects.component.ts", lineNumber: 15 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=chunk-SSCTTOBH.js.map
