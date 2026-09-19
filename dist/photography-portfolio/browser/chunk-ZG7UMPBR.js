import {
  UserService
} from "./chunk-UBGL7ION.js";
import {
  ClientService
} from "./chunk-FBDTRO3B.js";
import {
  ProjectService
} from "./chunk-3XKYANS7.js";
import {
  AuthService
} from "./chunk-DQBTYOFC.js";
import "./chunk-2UTZUB6A.js";
import {
  RouterLink
} from "./chunk-RBKBNWPP.js";
import "./chunk-5BILWADD.js";
import "./chunk-WWIHBCUC.js";
import {
  CommonModule
} from "./chunk-URCQYAQL.js";
import {
  ChangeDetectorRef,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CQ3CZWR7.js";
import "./chunk-GOMI4DH3.js";

// src/app/admin/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  userService;
  clientService;
  projectService;
  auth;
  cdr = inject(ChangeDetectorRef);
  stats = { users: 0, clients: 0, projects: 0, activeProjects: 0 };
  loading = true;
  user;
  constructor(userService, clientService, projectService, auth) {
    this.userService = userService;
    this.clientService = clientService;
    this.projectService = projectService;
    this.auth = auth;
    this.user = this.auth.getCurrentUser();
  }
  ngOnInit() {
    this.loadStats();
  }
  loadStats() {
    this.userService.getAllUsers().subscribe((r) => {
      if (r.data)
        this.stats.users = r.data.length;
      this.notifyView();
    });
    this.clientService.getAllClients().subscribe((r) => {
      if (r.data)
        this.stats.clients = r.data.length;
      this.notifyView();
    });
    this.projectService.getAllProjects().subscribe((r) => {
      if (r.data) {
        this.stats.projects = r.data.length;
        this.stats.activeProjects = r.data.filter((p) => p.is_active).length;
      }
      this.loading = false;
      this.notifyView();
    });
  }
  notifyView() {
    this.cdr.markForCheck();
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ClientService), \u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 79, vars: 5, consts: [[1, "page-header", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-xl-3"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body", "d-flex", "align-items-center", "gap-3"], [1, "stat-icon", "bg-primary-subtle", "rounded-3", "p-3"], [1, "bi", "bi-people-fill", "text-primary", "fs-4"], [1, "h4", "fw-bold", "mb-0"], [1, "text-muted", "small"], [1, "stat-icon", "bg-success-subtle", "rounded-3", "p-3"], [1, "bi", "bi-person-badge-fill", "text-success", "fs-4"], [1, "stat-icon", "bg-info-subtle", "rounded-3", "p-3"], [1, "bi", "bi-kanban-fill", "text-info", "fs-4"], [1, "stat-icon", "bg-warning-subtle", "rounded-3", "p-3"], [1, "bi", "bi-activity", "text-warning", "fs-4"], [1, "row", "g-3"], [1, "col-md-6", "col-lg-3"], ["routerLink", "/admin/users", 1, "card", "border-0", "shadow-sm", "text-decoration-none", "quick-link-card"], [1, "card-body", "text-center", "py-4"], [1, "bi", "bi-people", "fs-2", "text-primary", "mb-2", "d-block"], [1, "fw-semibold"], ["routerLink", "/admin/clients", 1, "card", "border-0", "shadow-sm", "text-decoration-none", "quick-link-card"], [1, "bi", "bi-person-badge", "fs-2", "text-success", "mb-2", "d-block"], ["routerLink", "/admin/projects", 1, "card", "border-0", "shadow-sm", "text-decoration-none", "quick-link-card"], [1, "bi", "bi-kanban", "fs-2", "text-info", "mb-2", "d-block"], ["routerLink", "/admin/roles", 1, "card", "border-0", "shadow-sm", "text-decoration-none", "quick-link-card"], [1, "bi", "bi-shield-check", "fs-2", "text-warning", "mb-2", "d-block"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div")(12, "div", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10);
      \u0275\u0275text(15, "Total Users");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(16, "div", 4)(17, "div", 5)(18, "div", 6)(19, "div", 11);
      \u0275\u0275element(20, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div")(22, "div", 9);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 10);
      \u0275\u0275text(25, "Total Clients");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 4)(27, "div", 5)(28, "div", 6)(29, "div", 13);
      \u0275\u0275element(30, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div")(32, "div", 9);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 10);
      \u0275\u0275text(35, "Total Projects");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(36, "div", 4)(37, "div", 5)(38, "div", 6)(39, "div", 15);
      \u0275\u0275element(40, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div")(42, "div", 9);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 10);
      \u0275\u0275text(45, "Active Projects");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(46, "div", 17)(47, "div", 18)(48, "a", 19)(49, "div", 20);
      \u0275\u0275element(50, "i", 21);
      \u0275\u0275elementStart(51, "div", 22);
      \u0275\u0275text(52, "Manage Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 10);
      \u0275\u0275text(54, "Add, edit, activate users");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 18)(56, "a", 23)(57, "div", 20);
      \u0275\u0275element(58, "i", 24);
      \u0275\u0275elementStart(59, "div", 22);
      \u0275\u0275text(60, "Manage Clients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 10);
      \u0275\u0275text(62, "View and manage clients");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "div", 18)(64, "a", 25)(65, "div", 20);
      \u0275\u0275element(66, "i", 26);
      \u0275\u0275elementStart(67, "div", 22);
      \u0275\u0275text(68, "Manage Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 10);
      \u0275\u0275text(70, "Track all projects");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 18)(72, "a", 27)(73, "div", 20);
      \u0275\u0275element(74, "i", 28);
      \u0275\u0275elementStart(75, "div", 22);
      \u0275\u0275text(76, "Manage Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 10);
      \u0275\u0275text(78, "Roles & permissions");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Welcome back, ", ctx.user == null ? null : ctx.user.firstName, "!");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.stats.users);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.stats.clients);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.stats.projects);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.stats.activeProjects);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterLink], template: '<div class="page-header mb-4">\r\n  <h5 class="fw-bold mb-0">Dashboard</h5>\r\n  <p class="text-muted small mb-0">Welcome back, {{ user?.firstName }}!</p>\r\n</div>\r\n\r\n<div class="row g-3 mb-4">\r\n  <div class="col-sm-6 col-xl-3">\r\n    <div class="card border-0 shadow-sm h-100">\r\n      <div class="card-body d-flex align-items-center gap-3">\r\n        <div class="stat-icon bg-primary-subtle rounded-3 p-3">\r\n          <i class="bi bi-people-fill text-primary fs-4"></i>\r\n        </div>\r\n        <div>\r\n          <div class="h4 fw-bold mb-0">{{ stats.users }}</div>\r\n          <div class="text-muted small">Total Users</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="col-sm-6 col-xl-3">\r\n    <div class="card border-0 shadow-sm h-100">\r\n      <div class="card-body d-flex align-items-center gap-3">\r\n        <div class="stat-icon bg-success-subtle rounded-3 p-3">\r\n          <i class="bi bi-person-badge-fill text-success fs-4"></i>\r\n        </div>\r\n        <div>\r\n          <div class="h4 fw-bold mb-0">{{ stats.clients }}</div>\r\n          <div class="text-muted small">Total Clients</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="col-sm-6 col-xl-3">\r\n    <div class="card border-0 shadow-sm h-100">\r\n      <div class="card-body d-flex align-items-center gap-3">\r\n        <div class="stat-icon bg-info-subtle rounded-3 p-3">\r\n          <i class="bi bi-kanban-fill text-info fs-4"></i>\r\n        </div>\r\n        <div>\r\n          <div class="h4 fw-bold mb-0">{{ stats.projects }}</div>\r\n          <div class="text-muted small">Total Projects</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="col-sm-6 col-xl-3">\r\n    <div class="card border-0 shadow-sm h-100">\r\n      <div class="card-body d-flex align-items-center gap-3">\r\n        <div class="stat-icon bg-warning-subtle rounded-3 p-3">\r\n          <i class="bi bi-activity text-warning fs-4"></i>\r\n        </div>\r\n        <div>\r\n          <div class="h4 fw-bold mb-0">{{ stats.activeProjects }}</div>\r\n          <div class="text-muted small">Active Projects</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row g-3">\r\n  <div class="col-md-6 col-lg-3">\r\n    <a routerLink="/admin/users" class="card border-0 shadow-sm text-decoration-none quick-link-card">\r\n      <div class="card-body text-center py-4">\r\n        <i class="bi bi-people fs-2 text-primary mb-2 d-block"></i>\r\n        <div class="fw-semibold">Manage Users</div>\r\n        <div class="text-muted small">Add, edit, activate users</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class="col-md-6 col-lg-3">\r\n    <a routerLink="/admin/clients" class="card border-0 shadow-sm text-decoration-none quick-link-card">\r\n      <div class="card-body text-center py-4">\r\n        <i class="bi bi-person-badge fs-2 text-success mb-2 d-block"></i>\r\n        <div class="fw-semibold">Manage Clients</div>\r\n        <div class="text-muted small">View and manage clients</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class="col-md-6 col-lg-3">\r\n    <a routerLink="/admin/projects" class="card border-0 shadow-sm text-decoration-none quick-link-card">\r\n      <div class="card-body text-center py-4">\r\n        <i class="bi bi-kanban fs-2 text-info mb-2 d-block"></i>\r\n        <div class="fw-semibold">Manage Projects</div>\r\n        <div class="text-muted small">Track all projects</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class="col-md-6 col-lg-3">\r\n    <a routerLink="/admin/roles" class="card border-0 shadow-sm text-decoration-none quick-link-card">\r\n      <div class="card-body text-center py-4">\r\n        <i class="bi bi-shield-check fs-2 text-warning mb-2 d-block"></i>\r\n        <div class="fw-semibold">Manage Roles</div>\r\n        <div class="text-muted small">Roles & permissions</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n' }]
  }], () => [{ type: UserService }, { type: ClientService }, { type: ProjectService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/admin/dashboard/dashboard.component.ts", lineNumber: 15 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-ZG7UMPBR.js.map
