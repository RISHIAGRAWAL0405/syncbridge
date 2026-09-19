import {
  AuthService
} from "./chunk-DQBTYOFC.js";
import "./chunk-2UTZUB6A.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-RBKBNWPP.js";
import "./chunk-5BILWADD.js";
import "./chunk-WWIHBCUC.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-URCQYAQL.js";
import {
  Component,
  filter,
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
  ɵɵinterpolate2,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CQ3CZWR7.js";
import "./chunk-GOMI4DH3.js";

// src/app/admin/layout/admin-layout.component.ts
function AdminLayoutComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 26);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r1.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function AdminLayoutComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 26);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r2.route);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r2.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  auth;
  router;
  sidebarOpen = true;
  user;
  currentPageTitle = "Dashboard";
  mainNav = [
    { label: "Dashboard", icon: "bi-speedometer2", route: "/admin/dashboard" },
    { label: "Users", icon: "bi-people", route: "/admin/users" },
    { label: "Clients", icon: "bi-person-badge", route: "/admin/clients" },
    { label: "Projects", icon: "bi-kanban", route: "/admin/projects" },
    { label: "Tasks", icon: "bi-list-task", route: "/admin/tasks" },
    { label: "My Profile", icon: "bi-person-circle", route: "/admin/profile" }
  ];
  configNav = [
    { label: "Roles", icon: "bi-shield-check", route: "/admin/roles" },
    { label: "Workflow Steps", icon: "bi-diagram-3", route: "/admin/workflow/steps" },
    { label: "Workflow Templates", icon: "bi-layout-text-window", route: "/admin/workflow/templates" }
  ];
  allNav = [...this.mainNav, ...this.configNav];
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.user = this.auth.getCurrentUser();
  }
  ngOnInit() {
    this.updateTitle(this.router.url);
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.updateTitle(e.urlAfterRedirects);
    });
  }
  updateTitle(url) {
    const match = this.allNav.find((n) => url.startsWith(n.route));
    this.currentPageTitle = match ? match.label : "Admin";
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
    return new (__ngFactoryType__ || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 40, vars: 13, consts: [[1, "sb-layout"], [1, "sb-sidebar"], [1, "sb-brand"], [1, "sb-brand-icon"], [1, "bi", "bi-infinity"], [1, "sb-brand-name"], [1, "sb-nav"], [1, "sb-nav-section"], [1, "sb-nav-label"], [4, "ngFor", "ngForOf"], [1, "sb-user"], [1, "sb-user-avatar"], [1, "sb-user-info"], [1, "sb-user-name"], [1, "sb-user-role"], ["title", "Logout", 1, "sb-logout-btn", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "sb-main"], [1, "sb-topbar"], [1, "sb-toggle", 3, "click"], [1, "bi", "bi-list"], [1, "sb-breadcrumb"], [1, "sb-page-title"], [1, "sb-topbar-right"], [1, "sb-topbar-avatar", 3, "title"], [1, "sb-content"], ["routerLinkActive", "active", 1, "sb-nav-link", 3, "routerLink"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "Sync Bridge");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 6)(8, "div", 7)(9, "span", 8);
      \u0275\u0275text(10, "Main");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul");
      \u0275\u0275template(12, AdminLayoutComponent_li_12_Template, 5, 5, "li", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "span", 8);
      \u0275\u0275text(15, "Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ul");
      \u0275\u0275template(17, AdminLayoutComponent_li_17_Template, 5, 5, "li", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 10)(19, "div", 11);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 14);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 15);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_26_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 17)(29, "header", 18)(30, "button", 19);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_30_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(31, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 21)(33, "span", 22);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 23)(36, "div", 24);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "main", 25);
      \u0275\u0275element(39, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("sb-collapsed", !ctx.sidebarOpen);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.mainNav);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.configNav);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userInitials);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.userType);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.currentPageTitle);
      \u0275\u0275advance(2);
      \u0275\u0275property("title", \u0275\u0275interpolate2("", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.userInitials, " ");
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink, RouterLinkActive, RouterOutlet], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n  cursor: auto;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: auto;\n}\n.sb-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: #f4f6fb;\n}\n.sb-sidebar[_ngcontent-%COMP%] {\n  width: 248px;\n  min-width: 248px;\n  background: #0f1117;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.25s ease, min-width 0.25s ease;\n  overflow: hidden;\n  flex-shrink: 0;\n  z-index: 100;\n}\n.sb-brand[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0 1.25rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  flex-shrink: 0;\n}\n.sb-brand[_ngcontent-%COMP%]   .sb-brand-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: #4f6ef7;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sb-brand[_ngcontent-%COMP%]   .sb-brand-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n}\n.sb-brand[_ngcontent-%COMP%]   .sb-brand-name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  letter-spacing: -0.01em;\n}\n.sb-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 1rem 0.75rem;\n  scrollbar-width: none;\n}\n.sb-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.sb-nav-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.sb-nav-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.sb-nav-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.3);\n  padding: 0 0.5rem;\n  margin-bottom: 0.4rem;\n  white-space: nowrap;\n}\n.sb-nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 8px;\n  color: rgba(255, 255, 255, 0.55);\n  font-size: 0.83rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n  margin-bottom: 2px;\n}\n.sb-nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n  min-width: 1rem;\n}\n.sb-nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: #fff;\n}\n.sb-nav-link.active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.12);\n  color: #7b9bff;\n  font-weight: 600;\n}\n.sb-nav-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.sb-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  flex-shrink: 0;\n}\n.sb-user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  background: #4f6ef7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.sb-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  min-width: 0;\n}\n.sb-user-info[_ngcontent-%COMP%]   .sb-user-name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sb-user-info[_ngcontent-%COMP%]   .sb-user-role[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.sb-logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.35);\n  padding: 0.35rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.18s;\n  flex-shrink: 0;\n  cursor: pointer !important;\n}\n.sb-logout-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.sb-logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 53, 69, 0.15);\n  color: #ff6b6b;\n}\n.sb-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.sb-topbar[_ngcontent-%COMP%] {\n  height: 60px;\n  background: #fff;\n  border-bottom: 1px solid #e8ecf0;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 1.5rem;\n  flex-shrink: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.sb-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  font-size: 1.25rem;\n  padding: 0.25rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  cursor: pointer !important;\n  transition: all 0.18s;\n  flex-shrink: 0;\n}\n.sb-toggle[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  color: #4f6ef7;\n}\n.sb-breadcrumb[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-page-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1a1d23;\n}\n.sb-topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.sb-topbar-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: #4f6ef7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer !important;\n}\n.sb-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 1.75rem;\n  background: #f4f6fb;\n}\n.sb-collapsed[_ngcontent-%COMP%]   .sb-sidebar[_ngcontent-%COMP%] {\n  width: 64px;\n  min-width: 64px;\n}\n.sb-collapsed[_ngcontent-%COMP%]   .sb-brand-name[_ngcontent-%COMP%], \n.sb-collapsed[_ngcontent-%COMP%]   .sb-nav-label[_ngcontent-%COMP%], \n.sb-collapsed[_ngcontent-%COMP%]   .sb-nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.sb-collapsed[_ngcontent-%COMP%]   .sb-user-info[_ngcontent-%COMP%], \n.sb-collapsed[_ngcontent-%COMP%]   .sb-logout-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.sb-collapsed[_ngcontent-%COMP%]   .sb-nav-link[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0.6rem;\n}\n.sb-collapsed[_ngcontent-%COMP%]   .sb-nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: unset;\n}\n.sb-collapsed[_ngcontent-%COMP%]   .sb-user[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .sb-sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    height: 100vh;\n    z-index: 1030;\n  }\n  .sb-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=admin-layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-admin-layout", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], template: '<div class="sb-layout" [class.sb-collapsed]="!sidebarOpen">\r\n\r\n  <!-- Sidebar -->\r\n  <aside class="sb-sidebar">\r\n    <div class="sb-brand">\r\n      <div class="sb-brand-icon">\r\n        <i class="bi bi-infinity"></i>\r\n      </div>\r\n      <span class="sb-brand-name">Sync Bridge</span>\r\n    </div>\r\n\r\n    <nav class="sb-nav">\r\n      <div class="sb-nav-section">\r\n        <span class="sb-nav-label">Main</span>\r\n        <ul>\r\n          <li *ngFor="let item of mainNav">\r\n            <a class="sb-nav-link" [routerLink]="item.route" routerLinkActive="active">\r\n              <i class="bi {{ item.icon }}"></i>\r\n              <span>{{ item.label }}</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class="sb-nav-section">\r\n        <span class="sb-nav-label">Configuration</span>\r\n        <ul>\r\n          <li *ngFor="let item of configNav">\r\n            <a class="sb-nav-link" [routerLink]="item.route" routerLinkActive="active">\r\n              <i class="bi {{ item.icon }}"></i>\r\n              <span>{{ item.label }}</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n\r\n    <div class="sb-user">\r\n      <div class="sb-user-avatar">{{ userInitials }}</div>\r\n      <div class="sb-user-info">\r\n        <div class="sb-user-name">{{ user?.firstName }} {{ user?.lastName }}</div>\r\n        <div class="sb-user-role">{{ user?.userType }}</div>\r\n      </div>\r\n      <button class="sb-logout-btn" (click)="logout()" title="Logout">\r\n        <i class="bi bi-box-arrow-right"></i>\r\n      </button>\r\n    </div>\r\n  </aside>\r\n\r\n  <!-- Main -->\r\n  <div class="sb-main">\r\n    <!-- Topbar -->\r\n    <header class="sb-topbar">\r\n      <button class="sb-toggle" (click)="toggleSidebar()">\r\n        <i class="bi bi-list"></i>\r\n      </button>\r\n      <div class="sb-breadcrumb">\r\n        <span class="sb-page-title">{{ currentPageTitle }}</span>\r\n      </div>\r\n      <div class="sb-topbar-right">\r\n        <div class="sb-topbar-avatar" title="{{ user?.firstName }} {{ user?.lastName }}">\r\n          {{ userInitials }}\r\n        </div>\r\n      </div>\r\n    </header>\r\n\r\n    <!-- Content -->\r\n    <main class="sb-content">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/admin/layout/admin-layout.component.scss */\n:host {\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n  cursor: auto;\n}\n:host * {\n  cursor: auto;\n}\n.sb-layout {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: #f4f6fb;\n}\n.sb-sidebar {\n  width: 248px;\n  min-width: 248px;\n  background: #0f1117;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.25s ease, min-width 0.25s ease;\n  overflow: hidden;\n  flex-shrink: 0;\n  z-index: 100;\n}\n.sb-brand {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0 1.25rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  flex-shrink: 0;\n}\n.sb-brand .sb-brand-icon {\n  width: 32px;\n  height: 32px;\n  background: #4f6ef7;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sb-brand .sb-brand-icon i {\n  color: #fff;\n  font-size: 1rem;\n}\n.sb-brand .sb-brand-name {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  letter-spacing: -0.01em;\n}\n.sb-nav {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 1rem 0.75rem;\n  scrollbar-width: none;\n}\n.sb-nav::-webkit-scrollbar {\n  display: none;\n}\n.sb-nav-section {\n  margin-bottom: 1.5rem;\n}\n.sb-nav-section ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.sb-nav-label {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.3);\n  padding: 0 0.5rem;\n  margin-bottom: 0.4rem;\n  white-space: nowrap;\n}\n.sb-nav-link {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.55rem 0.75rem;\n  border-radius: 8px;\n  color: rgba(255, 255, 255, 0.55);\n  font-size: 0.83rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n  margin-bottom: 2px;\n}\n.sb-nav-link i {\n  font-size: 1rem;\n  flex-shrink: 0;\n  min-width: 1rem;\n}\n.sb-nav-link:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: #fff;\n}\n.sb-nav-link.active {\n  background: rgba(79, 110, 247, 0.12);\n  color: #7b9bff;\n  font-weight: 600;\n}\n.sb-nav-link.active i {\n  color: #4f6ef7;\n}\n.sb-user {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  flex-shrink: 0;\n}\n.sb-user-avatar {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  background: #4f6ef7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.sb-user-info {\n  flex: 1;\n  overflow: hidden;\n  min-width: 0;\n}\n.sb-user-info .sb-user-name {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sb-user-info .sb-user-role {\n  font-size: 0.68rem;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.sb-logout-btn {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.35);\n  padding: 0.35rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.18s;\n  flex-shrink: 0;\n  cursor: pointer !important;\n}\n.sb-logout-btn i {\n  font-size: 1rem;\n}\n.sb-logout-btn:hover {\n  background: rgba(220, 53, 69, 0.15);\n  color: #ff6b6b;\n}\n.sb-main {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.sb-topbar {\n  height: 60px;\n  background: #fff;\n  border-bottom: 1px solid #e8ecf0;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 1.5rem;\n  flex-shrink: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.sb-toggle {\n  background: none;\n  border: none;\n  color: #6c757d;\n  font-size: 1.25rem;\n  padding: 0.25rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  cursor: pointer !important;\n  transition: all 0.18s;\n  flex-shrink: 0;\n}\n.sb-toggle:hover {\n  background: #f0f4ff;\n  color: #4f6ef7;\n}\n.sb-breadcrumb {\n  flex: 1;\n}\n.sb-page-title {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1a1d23;\n}\n.sb-topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.sb-topbar-avatar {\n  width: 34px;\n  height: 34px;\n  background: #4f6ef7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer !important;\n}\n.sb-content {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 1.75rem;\n  background: #f4f6fb;\n}\n.sb-collapsed .sb-sidebar {\n  width: 64px;\n  min-width: 64px;\n}\n.sb-collapsed .sb-brand-name,\n.sb-collapsed .sb-nav-label,\n.sb-collapsed .sb-nav-link span,\n.sb-collapsed .sb-user-info,\n.sb-collapsed .sb-logout-btn {\n  display: none;\n}\n.sb-collapsed .sb-nav-link {\n  justify-content: center;\n  padding: 0.6rem;\n}\n.sb-collapsed .sb-nav-link i {\n  min-width: unset;\n}\n.sb-collapsed .sb-user {\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .sb-sidebar {\n    position: fixed;\n    height: 100vh;\n    z-index: 1030;\n  }\n  .sb-content {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=admin-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/admin/layout/admin-layout.component.ts", lineNumber: 16 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-JOEU65RZ.js.map
