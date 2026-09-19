import {
  AuthService
} from "./chunk-ZPKSFRP3.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-FPVJX4FZ.js";
import "./chunk-337B7NGF.js";
import "./chunk-XLVCVILN.js";
import "./chunk-Q3L5OJPP.js";
import {
  CommonModule,
  Component,
  NgForOf,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-U2WXL5OW.js";
import "./chunk-GOMI4DH3.js";

// src/app/admin/layout/admin-layout.component.ts
function AdminLayoutComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "a", 25);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r1.icon, " nav-icon"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  auth;
  sidebarOpen = true;
  user;
  navItems = [
    { label: "Dashboard", icon: "bi-speedometer2", route: "/admin/dashboard" },
    { label: "Users", icon: "bi-people", route: "/admin/users" },
    { label: "Clients", icon: "bi-person-badge", route: "/admin/clients" },
    { label: "Projects", icon: "bi-kanban", route: "/admin/projects" },
    { label: "Tasks", icon: "bi-list-task", route: "/admin/tasks" },
    { label: "Roles", icon: "bi-shield-check", route: "/admin/roles" },
    { label: "Workflow Steps", icon: "bi-diagram-3", route: "/admin/workflow/steps" },
    { label: "Workflow Templates", icon: "bi-layout-text-window", route: "/admin/workflow/templates" },
    { label: "My Profile", icon: "bi-person-circle", route: "/admin/profile" }
  ];
  constructor(auth) {
    this.auth = auth;
    this.user = this.auth.getCurrentUser();
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  logout() {
    this.auth.logout();
  }
  get userInitials() {
    const u = this.user;
    if (!u)
      return "U";
    return `${u.firstName?.charAt(0) || ""}${u.lastName?.charAt(0) || ""}`.toUpperCase();
  }
  static \u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 32, vars: 9, consts: [[1, "admin-wrapper"], [1, "admin-sidebar", "d-flex", "flex-column"], [1, "sidebar-brand", "d-flex", "align-items-center", "px-3", "py-3", "border-bottom"], [1, "bi", "bi-shield-lock-fill", "text-primary", "me-2", "fs-5"], [1, "brand-text", "fw-bold"], [1, "sidebar-nav", "flex-grow-1", "py-2", "overflow-auto"], [1, "nav", "flex-column", "px-2"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "sidebar-footer", "border-top", "p-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "avatar-sm", "bg-primary", "text-white", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "fw-bold"], [1, "flex-grow-1", "overflow-hidden", "nav-label"], [1, "small", "fw-semibold", "text-truncate"], [1, "text-muted", 2, "font-size", "0.7rem"], ["title", "Logout", 1, "btn", "btn-sm", "btn-outline-danger", "nav-label", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "admin-main", "d-flex", "flex-column"], [1, "admin-topbar", "d-flex", "align-items-center", "px-3", "px-md-4", "border-bottom"], [1, "btn", "btn-sm", "btn-light", "me-3", 3, "click"], [1, "bi", "bi-list", "fs-5"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "gap-3"], [1, "badge", "bg-primary-subtle", "text-primary"], [1, "admin-content", "flex-grow-1", "overflow-auto", "p-3", "p-md-4"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", "d-flex", "align-items-center", "gap-2", "rounded-2", "py-2", "px-3", "mb-1", 3, "routerLink"], [1, "nav-label"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5, "Sync Bridge");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "ul", 6);
      \u0275\u0275template(8, AdminLayoutComponent_li_8_Template, 5, 5, "li", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 14);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_18_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "div", 16)(21, "header", 17)(22, "button", 18);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_22_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(23, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "div", 20);
      \u0275\u0275elementStart(25, "div", 21)(26, "span", 22);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 10);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "main", 23);
      \u0275\u0275element(31, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("sidebar-collapsed", !ctx.sidebarOpen);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.navItems);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.userInitials, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.userType);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.userType);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.userInitials, " ");
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink, RouterLinkActive, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-admin-layout", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], template: '<div class="admin-wrapper" [class.sidebar-collapsed]="!sidebarOpen">\r\n  <!-- Sidebar -->\r\n  <nav class="admin-sidebar d-flex flex-column">\r\n    <div class="sidebar-brand d-flex align-items-center px-3 py-3 border-bottom">\r\n      <i class="bi bi-shield-lock-fill text-primary me-2 fs-5"></i>\r\n      <span class="brand-text fw-bold">Sync Bridge</span>\r\n    </div>\r\n\r\n    <div class="sidebar-nav flex-grow-1 py-2 overflow-auto">\r\n      <ul class="nav flex-column px-2">\r\n        <li class="nav-item" *ngFor="let item of navItems">\r\n          <a class="nav-link d-flex align-items-center gap-2 rounded-2 py-2 px-3 mb-1"\r\n            [routerLink]="item.route" routerLinkActive="active">\r\n            <i class="bi {{ item.icon }} nav-icon"></i>\r\n            <span class="nav-label">{{ item.label }}</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class="sidebar-footer border-top p-3">\r\n      <div class="d-flex align-items-center gap-2">\r\n        <div class="avatar-sm bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold">\r\n          {{ userInitials }}\r\n        </div>\r\n        <div class="flex-grow-1 overflow-hidden nav-label">\r\n          <div class="small fw-semibold text-truncate">{{ user?.firstName }} {{ user?.lastName }}</div>\r\n          <div class="text-muted" style="font-size:0.7rem">{{ user?.userType }}</div>\r\n        </div>\r\n        <button class="btn btn-sm btn-outline-danger nav-label" (click)="logout()" title="Logout">\r\n          <i class="bi bi-box-arrow-right"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <!-- Main Content -->\r\n  <div class="admin-main d-flex flex-column">\r\n    <!-- Topbar -->\r\n    <header class="admin-topbar d-flex align-items-center px-3 px-md-4 border-bottom">\r\n      <button class="btn btn-sm btn-light me-3" (click)="toggleSidebar()">\r\n        <i class="bi bi-list fs-5"></i>\r\n      </button>\r\n      <div class="flex-grow-1"></div>\r\n      <div class="d-flex align-items-center gap-3">\r\n        <span class="badge bg-primary-subtle text-primary">{{ user?.userType }}</span>\r\n        <div class="avatar-sm bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold">\r\n          {{ userInitials }}\r\n        </div>\r\n      </div>\r\n    </header>\r\n\r\n    <!-- Page Content -->\r\n    <main class="admin-content flex-grow-1 overflow-auto p-3 p-md-4">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </div>\r\n</div>\r\n' }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/admin/layout/admin-layout.component.ts", lineNumber: 18 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-ITYJIVR4.js.map
