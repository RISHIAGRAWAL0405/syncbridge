import {
  AuthService
} from "./chunk-DQBTYOFC.js";
import "./chunk-2UTZUB6A.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-RBKBNWPP.js";
import "./chunk-5BILWADD.js";
import "./chunk-WWIHBCUC.js";
import {
  CommonModule
} from "./chunk-URCQYAQL.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-CQ3CZWR7.js";
import "./chunk-GOMI4DH3.js";

// src/app/client/layout/client-layout.component.ts
var ClientLayoutComponent = class _ClientLayoutComponent {
  auth;
  user;
  constructor(auth) {
    this.auth = auth;
    this.user = this.auth.getCurrentUser();
  }
  logout() {
    this.auth.logout();
  }
  get initials() {
    const u = this.user;
    return `${u?.firstName?.charAt(0) || ""}${u?.lastName?.charAt(0) || ""}`.toUpperCase() || "C";
  }
  static \u0275fac = function ClientLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientLayoutComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientLayoutComponent, selectors: [["app-client-layout"]], decls: 23, vars: 3, consts: [[1, "cl-layout"], [1, "cl-sidebar"], [1, "cl-brand"], [1, "bi", "bi-infinity"], [1, "cl-nav"], ["routerLink", "/client/calendar", "routerLinkActive", "active", 1, "cl-nav-link"], [1, "bi", "bi-calendar3"], [1, "cl-user"], [1, "cl-avatar"], [1, "cl-user-info"], [1, "cl-user-name"], [1, "cl-user-role"], ["title", "Logout", 1, "cl-logout", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "cl-main"]], template: function ClientLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "Sync Bridge");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "nav", 4)(7, "a", 5);
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "My Calendar");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275text(18, "Client");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275listener("click", function ClientLayoutComponent_Template_button_click_19_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275element(22, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.initials);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], styles: ['\n.cl-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  background: #f8f9fb;\n  font-family: "Inter", sans-serif;\n  cursor: auto;\n}\n.cl-layout[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: auto;\n}\n.cl-sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  min-width: 220px;\n  background: #fff;\n  border-right: 1px solid #e9ecef;\n  display: flex;\n  flex-direction: column;\n  padding: 1.25rem 0;\n}\n.cl-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0 1.25rem 1.5rem;\n  font-weight: 700;\n  font-size: 1rem;\n  color: #0d6efd;\n}\n.cl-brand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.cl-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 0.75rem;\n}\n.cl-nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: 8px;\n  color: #6c757d;\n  font-size: 0.85rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.cl-nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.cl-nav-link[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  color: #0d6efd;\n}\n.cl-nav-link.active[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #0d6efd;\n  font-weight: 600;\n}\n.cl-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 1rem 1.25rem 0;\n  border-top: 1px solid #e9ecef;\n}\n.cl-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #0d6efd;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.cl-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cl-user-name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #212529;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cl-user-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #6c757d;\n}\n.cl-logout[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  padding: 0.25rem;\n  cursor: pointer !important;\n}\n.cl-logout[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.cl-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=client-layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-client-layout", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], template: `
    <div class="cl-layout">
      <aside class="cl-sidebar">
        <div class="cl-brand">
          <i class="bi bi-infinity"></i>
          <span>Sync Bridge</span>
        </div>
        <nav class="cl-nav">
          <a class="cl-nav-link" routerLink="/client/calendar" routerLinkActive="active">
            <i class="bi bi-calendar3"></i><span>My Calendar</span>
          </a>
        </nav>
        <div class="cl-user">
          <div class="cl-avatar">{{ initials }}</div>
          <div class="cl-user-info">
            <div class="cl-user-name">{{ user?.firstName }} {{ user?.lastName }}</div>
            <div class="cl-user-role">Client</div>
          </div>
          <button class="cl-logout" (click)="logout()" title="Logout">
            <i class="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </aside>
      <div class="cl-main">
        <router-outlet></router-outlet>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:scss;d419212e942cf6cceec4b9e561fb1962d94024adf32098126248a81d0d708b1a;c:/Users/Administrator/Desktop/syncbridge/MIT-FIrst/Photography-Portfolio-UI/src/app/client/layout/client-layout.component.ts */\n.cl-layout {\n  display: flex;\n  height: 100vh;\n  background: #f8f9fb;\n  font-family: "Inter", sans-serif;\n  cursor: auto;\n}\n.cl-layout * {\n  cursor: auto;\n}\n.cl-sidebar {\n  width: 220px;\n  min-width: 220px;\n  background: #fff;\n  border-right: 1px solid #e9ecef;\n  display: flex;\n  flex-direction: column;\n  padding: 1.25rem 0;\n}\n.cl-brand {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0 1.25rem 1.5rem;\n  font-weight: 700;\n  font-size: 1rem;\n  color: #0d6efd;\n}\n.cl-brand i {\n  font-size: 1.3rem;\n}\n.cl-nav {\n  flex: 1;\n  padding: 0 0.75rem;\n}\n.cl-nav-link {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: 8px;\n  color: #6c757d;\n  font-size: 0.85rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.cl-nav-link i {\n  font-size: 1rem;\n}\n.cl-nav-link:hover {\n  background: #f0f4ff;\n  color: #0d6efd;\n}\n.cl-nav-link.active {\n  background: #e8f0fe;\n  color: #0d6efd;\n  font-weight: 600;\n}\n.cl-user {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 1rem 1.25rem 0;\n  border-top: 1px solid #e9ecef;\n}\n.cl-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #0d6efd;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.cl-user-info {\n  flex: 1;\n  min-width: 0;\n}\n.cl-user-name {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #212529;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cl-user-role {\n  font-size: 0.7rem;\n  color: #6c757d;\n}\n.cl-logout {\n  background: none;\n  border: none;\n  color: #6c757d;\n  padding: 0.25rem;\n  cursor: pointer !important;\n}\n.cl-logout:hover {\n  color: #dc3545;\n}\n.cl-main {\n  flex: 1;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=client-layout.component.css.map */\n'] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientLayoutComponent, { className: "ClientLayoutComponent", filePath: "src/app/client/layout/client-layout.component.ts", lineNumber: 53 });
})();
export {
  ClientLayoutComponent
};
//# sourceMappingURL=chunk-CC2HBONK.js.map
