import {
  ScrollService
} from "./chunk-CA6OOJ42.js";
import {
  AnimationService
} from "./chunk-MSU7NZUK.js";
import {
  CursorService
} from "./chunk-ZLAS45UH.js";
import {
  AuthService,
  StorageService
} from "./chunk-ZPKSFRP3.js";
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions
} from "./chunk-FPVJX4FZ.js";
import "./chunk-337B7NGF.js";
import "./chunk-XLVCVILN.js";
import {
  provideHttpClient,
  withInterceptors
} from "./chunk-Q3L5OJPP.js";
import {
  Component,
  HostListener,
  Injectable,
  Output,
  PLATFORM_ID,
  catchError,
  computed,
  inject,
  isPlatformBrowser,
  output,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  signal,
  switchMap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U2WXL5OW.js";
import "./chunk-GOMI4DH3.js";

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  if (storage.isLoggedIn())
    return true;
  router.navigate(["/auth/login"]);
  return false;
};
var guestGuard = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  if (!storage.isLoggedIn())
    return true;
  const user = storage.getCurrentUser();
  router.navigate(user?.userType === "ADMIN" ? ["/admin/dashboard"] : ["/admin/dashboard"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  // Auth routes (public)
  {
    path: "auth",
    canActivate: [guestGuard],
    children: [
      {
        path: "login",
        loadComponent: () => import("./chunk-P7UYNCZQ.js").then((m) => m.LoginComponent),
        title: "Login | Sync Bridge"
      },
      {
        path: "forgot-password",
        loadComponent: () => import("./chunk-QOQFSRCJ.js").then((m) => m.ForgotPasswordComponent),
        title: "Forgot Password | Sync Bridge"
      },
      {
        path: "reset-password",
        loadComponent: () => import("./chunk-BWTBJ5LY.js").then((m) => m.ResetPasswordComponent),
        title: "Reset Password | Sync Bridge"
      },
      { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  },
  // Admin routes (protected)
  {
    path: "admin",
    loadComponent: () => import("./chunk-ITYJIVR4.js").then((m) => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-FXYXNAAH.js").then((m) => m.DashboardComponent),
        title: "Dashboard | Sync Bridge"
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-URQ7FHO5.js").then((m) => m.UsersComponent),
        title: "Users | Sync Bridge"
      },
      {
        path: "clients",
        loadComponent: () => import("./chunk-UDLPOR7V.js").then((m) => m.ClientsComponent),
        title: "Clients | Sync Bridge"
      },
      {
        path: "projects",
        loadComponent: () => import("./chunk-SSCTTOBH.js").then((m) => m.ProjectsComponent),
        title: "Projects | Sync Bridge"
      },
      {
        path: "tasks",
        loadComponent: () => import("./chunk-OK2B4BEK.js").then((m) => m.TasksComponent),
        title: "Tasks | Sync Bridge"
      },
      {
        path: "roles",
        loadComponent: () => import("./chunk-7W2WXQ7Z.js").then((m) => m.RolesComponent),
        title: "Roles | Sync Bridge"
      },
      {
        path: "workflow",
        loadComponent: () => import("./chunk-ISSQ3TNU.js").then((m) => m.WorkflowComponent),
        title: "Workflow | Sync Bridge"
      },
      {
        path: "workflow/steps",
        loadComponent: () => import("./chunk-ISSQ3TNU.js").then((m) => m.WorkflowComponent),
        title: "Workflow Steps | Sync Bridge"
      },
      {
        path: "workflow/templates",
        loadComponent: () => import("./chunk-ISSQ3TNU.js").then((m) => m.WorkflowComponent),
        title: "Workflow Templates | Sync Bridge"
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-7YAG4C7V.js").then((m) => m.ProfileComponent),
        title: "Profile | Sync Bridge"
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  // Public portfolio routes
  {
    path: "",
    loadComponent: () => import("./chunk-EG3HJJWY.js").then((m) => m.HomeComponent),
    title: "Lumi\xE8re Studio | Award-Winning Photography"
  },
  {
    path: "portfolio",
    loadComponent: () => import("./chunk-WIOHZ6YE.js").then((m) => m.PortfolioComponent),
    title: "Portfolio | Lumi\xE8re Studio"
  },
  {
    path: "about",
    loadComponent: () => import("./chunk-H6KRLWEW.js").then((m) => m.AboutComponent),
    title: "About | Lumi\xE8re Studio"
  },
  {
    path: "services",
    loadComponent: () => import("./chunk-W2YNQHPL.js").then((m) => m.ServicesComponent),
    title: "Services | Lumi\xE8re Studio"
  },
  {
    path: "pricing",
    loadComponent: () => import("./chunk-Z6PP2ETN.js").then((m) => m.PricingComponent),
    title: "Pricing | Lumi\xE8re Studio"
  },
  {
    path: "blog",
    loadComponent: () => import("./chunk-SWSOICF7.js").then((m) => m.BlogComponent),
    title: "Journal | Lumi\xE8re Studio"
  },
  {
    path: "contact",
    loadComponent: () => import("./chunk-NOEDPX54.js").then((m) => m.ContactComponent),
    title: "Contact | Lumi\xE8re Studio"
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const storage = inject(StorageService);
  const router = inject(Router);
  const authService = inject(AuthService);
  const token = storage.getAccessToken();
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401 && storage.getRefreshToken()) {
      return authService.refreshToken().pipe(switchMap((res) => {
        if (res.statusCode === 200 && res.data) {
          const retryReq = req.clone({ setHeaders: { Authorization: `Bearer ${res.data.accessToken}` } });
          return next(retryReq);
        }
        storage.clear();
        router.navigate(["/auth/login"]);
        return throwError(() => error);
      }), catchError((err) => {
        storage.clear();
        router.navigate(["/auth/login"]);
        return throwError(() => err);
      }));
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions(), withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  platformId = inject(PLATFORM_ID);
  isDark = signal(true, ...ngDevMode ? [{ debugName: "isDark" }] : (
    /* istanbul ignore next */
    []
  ));
  toggle() {
    this.isDark.update((v) => !v);
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute("data-theme", this.isDark() ? "dark" : "light");
    }
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/navbar/navbar.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function NavbarComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 23);
    \u0275\u0275listener("mouseenter", function NavbarComponent_For_9_Template_a_mouseenter_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cursor.setHover(true));
    })("mouseleave", function NavbarComponent_For_9_Template_a_mouseleave_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cursor.setHover(false));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r3.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r3.label, " ");
  }
}
function NavbarComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "circle", 24)(2, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 26);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 27);
    \u0275\u0275listener("click", function NavbarComponent_For_26_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r5 = ctx.$implicit;
    const \u0275$index_58_r6 = ctx.$index;
    \u0275\u0275styleProp("--i", \u0275$index_58_r6);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r5.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("0", \u0275$index_58_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r5.label, " ");
  }
}
var NavbarComponent = class _NavbarComponent {
  platformId = inject(PLATFORM_ID);
  theme = inject(ThemeService);
  scroll = inject(ScrollService);
  cursor = inject(CursorService);
  menuOpen = signal(false, ...ngDevMode ? [{ debugName: "menuOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  scrolled = computed(() => this.scroll.scrollY() > 60, ...ngDevMode ? [{ debugName: "scrolled" }] : (
    /* istanbul ignore next */
    []
  ));
  get scrollProgress() {
    if (!isPlatformBrowser(this.platformId))
      return "scaleX(0)";
    const max = document.body.scrollHeight - window.innerHeight;
    return `scaleX(${max > 0 ? this.scroll.scrollY() / max : 0})`;
  }
  navLinks = [
    { label: "Work", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Journal", path: "/blog" },
    { label: "Contact", path: "/contact" }
  ];
  toggleMenu() {
    this.menuOpen.update((v) => !v);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.menuOpen() ? "hidden" : "";
    }
  }
  closeMenu() {
    this.menuOpen.set(false);
    if (isPlatformBrowser(this.platformId))
      document.body.style.overflow = "";
  }
  onEscape() {
    this.closeMenu();
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function NavbarComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 39, vars: 13, consts: [["role", "navigation", "aria-label", "Main navigation", 1, "navbar"], [1, "nav-inner"], ["routerLink", "/", "aria-label", "Lumi\xE8re Studio Home", 1, "nav-logo", 3, "click"], [1, "logo-mark"], [1, "logo-name"], ["role", "list", 1, "nav-links"], [1, "nav-actions"], [1, "theme-toggle", 3, "click", "mouseenter", "mouseleave"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["routerLink", "/contact", 1, "nav-cta", "btn-primary", 3, "mouseenter", "mouseleave"], ["aria-label", "Toggle menu", 1, "hamburger", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "mobile-menu"], [1, "mobile-menu-bg"], [1, "mobile-menu-content"], ["role", "list", 1, "mobile-links"], [3, "--i"], [1, "mobile-footer"], ["routerLink", "/contact", 1, "btn-primary", 3, "click"], [1, "mobile-social"], ["href", "#", "aria-label", "Instagram"], ["href", "#", "aria-label", "Facebook"], ["href", "#", "aria-label", "Pinterest"], [1, "scroll-progress"], ["routerLinkActive", "active", 1, "nav-link", 3, "mouseenter", "mouseleave", "routerLink"], ["cx", "12", "cy", "12", "r", "5"], ["d", "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], ["routerLinkActive", "active", 1, "mobile-link", 3, "click", "routerLink"], [1, "mobile-link-num"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_2_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4, "L");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "umi\xE8re");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "ul", 5);
      \u0275\u0275repeaterCreate(8, NavbarComponent_For_9_Template, 3, 2, "li", null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_11_listener() {
        return ctx.theme.toggle();
      })("mouseenter", function NavbarComponent_Template_button_mouseenter_11_listener() {
        return ctx.cursor.setHover(true);
      })("mouseleave", function NavbarComponent_Template_button_mouseleave_11_listener() {
        return ctx.cursor.setHover(false);
      });
      \u0275\u0275conditionalCreate(12, NavbarComponent_Conditional_12_Template, 3, 0, ":svg:svg", 8)(13, NavbarComponent_Conditional_13_Template, 2, 0, ":svg:svg", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 9);
      \u0275\u0275listener("mouseenter", function NavbarComponent_Template_a_mouseenter_14_listener() {
        return ctx.cursor.setHover(true);
      })("mouseleave", function NavbarComponent_Template_a_mouseleave_14_listener() {
        return ctx.cursor.setHover(false);
      });
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16, "Book Session");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_17_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(18, "span")(19, "span")(20, "span");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 11);
      \u0275\u0275element(22, "div", 12);
      \u0275\u0275elementStart(23, "div", 13)(24, "ul", 14);
      \u0275\u0275repeaterCreate(25, NavbarComponent_For_26_Template, 5, 5, "li", 15, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 16)(28, "a", 17);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_28_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Book a Session");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 18)(32, "a", 19);
      \u0275\u0275text(33, "IG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "a", 20);
      \u0275\u0275text(35, "FB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 21);
      \u0275\u0275text(37, "PT");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(38, "div", 22);
    }
    if (rf & 2) {
      \u0275\u0275classProp("scrolled", ctx.scrolled())("menu-open", ctx.menuOpen());
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.navLinks);
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", ctx.theme.isDark() ? "Switch to light mode" : "Switch to dark mode");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.theme.isDark() ? 12 : 13);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.menuOpen());
      \u0275\u0275attribute("aria-expanded", ctx.menuOpen());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("open", ctx.menuOpen());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.navLinks);
      \u0275\u0275advance(13);
      \u0275\u0275styleProp("transform", ctx.scrollProgress);
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ['\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  height: var(--nav-height);\n  transition:\n    background 0.5s ease,\n    backdrop-filter 0.5s ease,\n    border-color 0.5s ease;\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n  background: rgba(9, 10, 24, 0.82);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-bottom: 1px solid var(--color-border);\n}\n.nav-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 clamp(1.5rem, 5vw, 4rem);\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.nav-logo[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: baseline;\n  gap: 0.05em;\n  z-index: 10;\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-mark[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-style: italic;\n  font-size: 1.8rem;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2.5rem;\n}\n@media (max-width: 900px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav-link[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  position: relative;\n  transition: color 0.3s ease;\n}\n.nav-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background: var(--color-accent);\n  transition: width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.nav-link[_ngcontent-%COMP%]:hover, \n.nav-link.active[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n.nav-link[_ngcontent-%COMP%]:hover::after, \n.nav-link.active[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  z-index: 10;\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  border-radius: 50%;\n  transition: color 0.3s ease, background 0.3s ease;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent);\n  background: rgba(201, 169, 110, 0.1);\n}\n.nav-cta[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.7rem 1.5rem;\n}\n@media (max-width: 640px) {\n  .nav-cta[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 36px;\n  height: 36px;\n  padding: 4px;\n}\n@media (max-width: 900px) {\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  background: var(--color-secondary);\n  transition:\n    transform 0.4s cubic-bezier(0.87, 0, 0.13, 1),\n    opacity 0.3s ease,\n    width 0.4s ease;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  width: 100%;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  width: 70%;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  width: 85%;\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(6px) rotate(45deg);\n  width: 100%;\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n  transform: translateX(-10px);\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-6px) rotate(-45deg);\n  width: 100%;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9;\n  pointer-events: none;\n  visibility: hidden;\n  transition: visibility 0s 0.6s;\n}\n.mobile-menu.open[_ngcontent-%COMP%] {\n  pointer-events: all;\n  visibility: visible;\n  transition: visibility 0s;\n}\n.mobile-menu.open[_ngcontent-%COMP%]   .mobile-menu-bg[_ngcontent-%COMP%] {\n  transform: scaleY(1);\n}\n.mobile-menu.open[_ngcontent-%COMP%]   .mobile-link[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.mobile-menu.open[_ngcontent-%COMP%]   .mobile-footer[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.mobile-menu-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--color-bg);\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);\n}\n.mobile-menu-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: calc(var(--nav-height) + 2rem) clamp(1.5rem, 8vw, 4rem) 3rem;\n}\n.mobile-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n  justify-content: center;\n}\n.mobile-link[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2.5rem, 10vw, 5rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--color-secondary);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  opacity: 0;\n  transform: translateY(40px);\n  transition:\n    opacity 0.5s ease calc(var(--i) * 0.08s + 0.2s),\n    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) calc(var(--i) * 0.08s + 0.2s),\n    color 0.3s ease;\n}\n.mobile-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent);\n}\n.mobile-link-num[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  color: var(--color-accent);\n  margin-top: 0.5rem;\n}\n.mobile-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 0.5s ease 0.55s, transform 0.5s ease 0.55s;\n}\n.mobile-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n.mobile-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.15em;\n  color: var(--color-text-muted);\n  transition: color 0.3s ease;\n}\n.mobile-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent);\n}\n.scroll-progress[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-accent),\n      var(--color-accent-light));\n  transform-origin: left;\n  z-index: 1001;\n  transform: scaleX(0);\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [RouterLink, RouterLinkActive], template: `<nav class="navbar" [class.scrolled]="scrolled()" [class.menu-open]="menuOpen()" role="navigation" aria-label="Main navigation">\r
  <div class="nav-inner">\r
    <!-- Logo -->\r
    <a routerLink="/" class="nav-logo" (click)="closeMenu()" aria-label="Lumi\xE8re Studio Home">\r
      <span class="logo-mark">L</span>\r
      <span class="logo-name">umi\xE8re</span>\r
    </a>\r
\r
    <!-- Desktop Links -->\r
    <ul class="nav-links" role="list">\r
      @for (link of navLinks; track link.path) {\r
        <li>\r
          <a [routerLink]="link.path" routerLinkActive="active" class="nav-link"\r
             (mouseenter)="cursor.setHover(true)" (mouseleave)="cursor.setHover(false)">\r
            {{ link.label }}\r
          </a>\r
        </li>\r
      }\r
    </ul>\r
\r
    <!-- Right Actions -->\r
    <div class="nav-actions">\r
      <button class="theme-toggle" (click)="theme.toggle()" [attr.aria-label]="theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"\r
              (mouseenter)="cursor.setHover(true)" (mouseleave)="cursor.setHover(false)">\r
        @if (theme.isDark()) {\r
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>\r
        } @else {\r
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>\r
        }\r
      </button>\r
\r
      <a routerLink="/contact" class="nav-cta btn-primary" (mouseenter)="cursor.setHover(true)" (mouseleave)="cursor.setHover(false)">\r
        <span>Book Session</span>\r
      </a>\r
\r
      <!-- Hamburger -->\r
      <button class="hamburger" [class.active]="menuOpen()" (click)="toggleMenu()"\r
              [attr.aria-expanded]="menuOpen()" aria-label="Toggle menu">\r
        <span></span><span></span><span></span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Mobile Menu -->\r
  <div class="mobile-menu" [class.open]="menuOpen()" role="dialog" aria-modal="true">\r
    <div class="mobile-menu-bg"></div>\r
    <div class="mobile-menu-content">\r
      <ul class="mobile-links" role="list">\r
        @for (link of navLinks; track link.path; let i = $index) {\r
          <li [style.--i]="i">\r
            <a [routerLink]="link.path" routerLinkActive="active" class="mobile-link" (click)="closeMenu()">\r
              <span class="mobile-link-num">0{{ i + 1 }}</span>\r
              {{ link.label }}\r
            </a>\r
          </li>\r
        }\r
      </ul>\r
      <div class="mobile-footer">\r
        <a routerLink="/contact" class="btn-primary" (click)="closeMenu()"><span>Book a Session</span></a>\r
        <div class="mobile-social">\r
          <a href="#" aria-label="Instagram">IG</a>\r
          <a href="#" aria-label="Facebook">FB</a>\r
          <a href="#" aria-label="Pinterest">PT</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</nav>\r
\r
<!-- Scroll Progress -->\r
<div class="scroll-progress" [style.transform]="scrollProgress"></div>\r
`, styles: ['/* src/app/shared/components/navbar/navbar.component.scss */\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  height: var(--nav-height);\n  transition:\n    background 0.5s ease,\n    backdrop-filter 0.5s ease,\n    border-color 0.5s ease;\n}\n.navbar.scrolled {\n  background: rgba(9, 10, 24, 0.82);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border-bottom: 1px solid var(--color-border);\n}\n.nav-inner {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 clamp(1.5rem, 5vw, 4rem);\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.nav-logo {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  display: flex;\n  align-items: baseline;\n  gap: 0.05em;\n  z-index: 10;\n}\n.nav-logo .logo-mark {\n  color: var(--color-accent);\n  font-style: italic;\n  font-size: 1.8rem;\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 2.5rem;\n}\n@media (max-width: 900px) {\n  .nav-links {\n    display: none;\n  }\n}\n.nav-link {\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  position: relative;\n  transition: color 0.3s ease;\n}\n.nav-link::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background: var(--color-accent);\n  transition: width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.nav-link:hover,\n.nav-link.active {\n  color: var(--color-secondary);\n}\n.nav-link:hover::after,\n.nav-link.active::after {\n  width: 100%;\n}\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  z-index: 10;\n}\n.theme-toggle {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  border-radius: 50%;\n  transition: color 0.3s ease, background 0.3s ease;\n}\n.theme-toggle:hover {\n  color: var(--color-accent);\n  background: rgba(201, 169, 110, 0.1);\n}\n.nav-cta {\n  font-size: 0.7rem;\n  padding: 0.7rem 1.5rem;\n}\n@media (max-width: 640px) {\n  .nav-cta {\n    display: none;\n  }\n}\n.hamburger {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 36px;\n  height: 36px;\n  padding: 4px;\n}\n@media (max-width: 900px) {\n  .hamburger {\n    display: flex;\n  }\n}\n.hamburger span {\n  display: block;\n  height: 1px;\n  background: var(--color-secondary);\n  transition:\n    transform 0.4s cubic-bezier(0.87, 0, 0.13, 1),\n    opacity 0.3s ease,\n    width 0.4s ease;\n}\n.hamburger span:nth-child(1) {\n  width: 100%;\n}\n.hamburger span:nth-child(2) {\n  width: 70%;\n}\n.hamburger span:nth-child(3) {\n  width: 85%;\n}\n.hamburger.active span:nth-child(1) {\n  transform: translateY(6px) rotate(45deg);\n  width: 100%;\n}\n.hamburger.active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(-10px);\n}\n.hamburger.active span:nth-child(3) {\n  transform: translateY(-6px) rotate(-45deg);\n  width: 100%;\n}\n.mobile-menu {\n  position: fixed;\n  inset: 0;\n  z-index: 9;\n  pointer-events: none;\n  visibility: hidden;\n  transition: visibility 0s 0.6s;\n}\n.mobile-menu.open {\n  pointer-events: all;\n  visibility: visible;\n  transition: visibility 0s;\n}\n.mobile-menu.open .mobile-menu-bg {\n  transform: scaleY(1);\n}\n.mobile-menu.open .mobile-link {\n  opacity: 1;\n  transform: translateY(0);\n}\n.mobile-menu.open .mobile-footer {\n  opacity: 1;\n  transform: translateY(0);\n}\n.mobile-menu-bg {\n  position: absolute;\n  inset: 0;\n  background: var(--color-bg);\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);\n}\n.mobile-menu-content {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: calc(var(--nav-height) + 2rem) clamp(1.5rem, 8vw, 4rem) 3rem;\n}\n.mobile-links {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n  justify-content: center;\n}\n.mobile-link {\n  font-family: var(--font-heading);\n  font-size: clamp(2.5rem, 10vw, 5rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--color-secondary);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  opacity: 0;\n  transform: translateY(40px);\n  transition:\n    opacity 0.5s ease calc(var(--i) * 0.08s + 0.2s),\n    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) calc(var(--i) * 0.08s + 0.2s),\n    color 0.3s ease;\n}\n.mobile-link:hover {\n  color: var(--color-accent);\n}\n.mobile-link-num {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  color: var(--color-accent);\n  margin-top: 0.5rem;\n}\n.mobile-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 0.5s ease 0.55s, transform 0.5s ease 0.55s;\n}\n.mobile-social {\n  display: flex;\n  gap: 1.5rem;\n}\n.mobile-social a {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.15em;\n  color: var(--color-text-muted);\n  transition: color 0.3s ease;\n}\n.mobile-social a:hover {\n  color: var(--color-accent);\n}\n.scroll-progress {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-accent),\n      var(--color-accent-light));\n  transform-origin: left;\n  z-index: 1001;\n  transform: scaleX(0);\n}\n/*# sourceMappingURL=navbar.component.css.map */\n'] }]
  }], null, { onEscape: [{
    type: HostListener,
    args: ["window:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/components/navbar/navbar.component.ts", lineNumber: 15 });
})();

// src/app/shared/components/footer/footer.component.ts
var _forTrack02 = ($index, $item) => $item.path;
function FooterComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 38);
    \u0275\u0275element(4, "rect", 17)(5, "circle", 18)(6, "circle", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", post_r1, \u0275\u0275sanitizeUrl);
  }
}
function FooterComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r2.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r2.label);
  }
}
function FooterComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r3.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r3.label);
  }
}
var FooterComponent = class _FooterComponent {
  year = (/* @__PURE__ */ new Date()).getFullYear();
  instagramPosts = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80"
  ];
  links = {
    work: [
      { label: "Portfolio", path: "/portfolio" },
      { label: "Wedding", path: "/portfolio" },
      { label: "Portrait", path: "/portfolio" },
      { label: "Fashion", path: "/portfolio" },
      { label: "Commercial", path: "/portfolio" }
    ],
    studio: [
      { label: "About", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Pricing", path: "/pricing" },
      { label: "Journal", path: "/blog" },
      { label: "Contact", path: "/contact" }
    ]
  };
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 62, vars: 1, consts: [[1, "footer"], [1, "footer-instagram"], [1, "insta-header"], [1, "section-label"], ["href", "https://instagram.com", "target", "_blank", "rel", "noopener", 1, "insta-handle"], [1, "insta-grid"], ["href", "https://instagram.com", "target", "_blank", "rel", "noopener", 1, "insta-item"], [1, "footer-main"], [1, "container"], [1, "footer-grid"], [1, "footer-brand"], ["routerLink", "/", 1, "footer-logo"], [1, "logo-mark"], [1, "footer-tagline"], [1, "footer-social"], ["href", "#", "aria-label", "Instagram", 1, "social-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "1", "fill", "currentColor", "stroke", "none"], ["href", "#", "aria-label", "Facebook", 1, "social-link"], ["d", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"], ["href", "#", "aria-label", "Pinterest", 1, "social-link"], ["d", "M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.82-.23.94-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.84 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.66 5.59-.91 0-1.77-.47-2.06-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.85.26 1.75.4 2.68.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"], [1, "footer-links-group"], [1, "footer-links-title"], [1, "footer-newsletter"], [1, "newsletter-form", 3, "submit"], ["type", "email", "placeholder", "Your email address", "aria-label", "Email for newsletter"], ["type", "submit", "aria-label", "Subscribe"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "footer-bottom"], [1, "footer-copy"], [1, "footer-legal"], ["href", "#", 1, "footer-link"], ["alt", "Instagram post", "loading", "lazy", "width", "300", "height", "300", 3, "src"], [1, "insta-overlay"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], [1, "footer-link", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Follow the Journey");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 4);
      \u0275\u0275text(6, "@lumierestudio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275repeaterCreate(8, FooterComponent_For_9_Template, 7, 1, "a", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "a", 11)(15, "span", 12);
      \u0275\u0275text(16, "L");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, "umi\xE8re ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 13);
      \u0275\u0275text(19, "Capturing the extraordinary in every ordinary moment. Photography that transcends time.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14)(21, "a", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 16);
      \u0275\u0275element(23, "rect", 17)(24, "circle", 18)(25, "circle", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "a", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 16);
      \u0275\u0275element(28, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "a", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 16);
      \u0275\u0275element(31, "path", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "div", 24)(33, "h4", 25);
      \u0275\u0275text(34, "Work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "ul");
      \u0275\u0275repeaterCreate(36, FooterComponent_For_37_Template, 3, 2, "li", null, _forTrack02);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 24)(39, "h4", 25);
      \u0275\u0275text(40, "Studio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "ul");
      \u0275\u0275repeaterCreate(42, FooterComponent_For_43_Template, 3, 2, "li", null, _forTrack02);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 26)(45, "h4", 25);
      \u0275\u0275text(46, "Stay Inspired");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p");
      \u0275\u0275text(48, "Join our community and receive curated photography insights.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "form", 27);
      \u0275\u0275listener("submit", function FooterComponent_Template_form_submit_49_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275element(50, "input", 28);
      \u0275\u0275elementStart(51, "button", 29);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 30);
      \u0275\u0275element(53, "path", 31);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "div", 32)(55, "p", 33);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 34)(58, "a", 35);
      \u0275\u0275text(59, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 35);
      \u0275\u0275text(61, "Terms of Service");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.instagramPosts);
      \u0275\u0275advance(28);
      \u0275\u0275repeater(ctx.links.work);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.links.studio);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Lumi\xE8re Studio. All rights reserved.");
    }
  }, dependencies: [RouterLink], styles: ["\n.footer[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n}\n.footer-instagram[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding: 4rem 0 0;\n}\n.insta-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 clamp(1.5rem, 5vw, 6rem);\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.insta-handle[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  color: var(--color-accent);\n  transition: opacity 0.3s ease;\n}\n.insta-handle[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.insta-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 0;\n}\n@media (max-width: 900px) {\n  .insta-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .insta-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.insta-item[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  overflow: hidden;\n}\n.insta-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.insta-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.insta-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(11, 11, 11, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.insta-item[_ngcontent-%COMP%]:hover   .insta-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.footer-main[_ngcontent-%COMP%] {\n  padding: 5rem 0 2rem;\n  border-top: 1px solid var(--color-border);\n  margin-top: 4rem;\n}\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 2fr;\n  gap: 4rem;\n  margin-bottom: 4rem;\n}\n@media (max-width: 1024px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 3rem;\n  }\n}\n@media (max-width: 600px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.footer-logo[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  display: block;\n  margin-bottom: 1.25rem;\n}\n.footer-logo[_ngcontent-%COMP%]   .logo-mark[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-style: italic;\n}\n.footer-tagline[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n  margin-bottom: 1.75rem;\n  max-width: 280px;\n}\n.footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.social-link[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: all 0.3s ease;\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n  background: rgba(201, 169, 110, 0.08);\n}\n.footer-links-title[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-secondary);\n  margin-bottom: 1.5rem;\n}\n.footer-links-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.footer-links-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.6;\n  margin-bottom: 1.25rem;\n}\n.footer-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  transition: color 0.3s ease;\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent);\n}\n.newsletter-form[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--color-border);\n  overflow: hidden;\n  transition: border-color 0.3s ease;\n}\n.newsletter-form[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--color-accent);\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  padding: 0.875rem 1rem;\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  color: var(--color-secondary);\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  background: var(--color-accent);\n  color: var(--color-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.3s ease;\n}\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent-light);\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n  border-top: 1px solid var(--color-border);\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.footer-copy[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.footer-legal[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink], template: '<footer class="footer">\r\n  <!-- Instagram Feed -->\r\n  <div class="footer-instagram">\r\n    <div class="insta-header">\r\n      <span class="section-label">Follow the Journey</span>\r\n      <a href="https://instagram.com" target="_blank" rel="noopener" class="insta-handle">&#64;lumierestudio</a>\r\n    </div>\r\n    <div class="insta-grid">\r\n      @for (post of instagramPosts; track post) {\r\n        <a href="https://instagram.com" target="_blank" rel="noopener" class="insta-item">\r\n          <img [src]="post" alt="Instagram post" loading="lazy" width="300" height="300">\r\n          <div class="insta-overlay">\r\n            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>\r\n          </div>\r\n        </a>\r\n      }\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Main Footer -->\r\n  <div class="footer-main">\r\n    <div class="container">\r\n      <div class="footer-grid">\r\n        <!-- Brand -->\r\n        <div class="footer-brand">\r\n          <a routerLink="/" class="footer-logo">\r\n            <span class="logo-mark">L</span>umi\xE8re\r\n          </a>\r\n          <p class="footer-tagline">Capturing the extraordinary in every ordinary moment. Photography that transcends time.</p>\r\n          <div class="footer-social">\r\n            <a href="#" aria-label="Instagram" class="social-link">\r\n              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>\r\n            </a>\r\n            <a href="#" aria-label="Facebook" class="social-link">\r\n              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>\r\n            </a>\r\n            <a href="#" aria-label="Pinterest" class="social-link">\r\n              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.82-.23.94-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.84 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.66 5.59-.91 0-1.77-.47-2.06-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.85.26 1.75.4 2.68.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Links -->\r\n        <div class="footer-links-group">\r\n          <h4 class="footer-links-title">Work</h4>\r\n          <ul>\r\n            @for (link of links.work; track link.path) {\r\n              <li><a [routerLink]="link.path" class="footer-link">{{ link.label }}</a></li>\r\n            }\r\n          </ul>\r\n        </div>\r\n\r\n        <div class="footer-links-group">\r\n          <h4 class="footer-links-title">Studio</h4>\r\n          <ul>\r\n            @for (link of links.studio; track link.path) {\r\n              <li><a [routerLink]="link.path" class="footer-link">{{ link.label }}</a></li>\r\n            }\r\n          </ul>\r\n        </div>\r\n\r\n        <!-- Newsletter -->\r\n        <div class="footer-newsletter">\r\n          <h4 class="footer-links-title">Stay Inspired</h4>\r\n          <p>Join our community and receive curated photography insights.</p>\r\n          <form class="newsletter-form" (submit)="$event.preventDefault()">\r\n            <input type="email" placeholder="Your email address" aria-label="Email for newsletter">\r\n            <button type="submit" aria-label="Subscribe">\r\n              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Bottom Bar -->\r\n      <div class="footer-bottom">\r\n        <p class="footer-copy">&copy; {{ year }} Lumi\xE8re Studio. All rights reserved.</p>\r\n        <div class="footer-legal">\r\n          <a href="#" class="footer-link">Privacy Policy</a>\r\n          <a href="#" class="footer-link">Terms of Service</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n', styles: ["/* src/app/shared/components/footer/footer.component.scss */\n.footer {\n  background: var(--color-bg);\n}\n.footer-instagram {\n  border-top: 1px solid var(--color-border);\n  padding: 4rem 0 0;\n}\n.insta-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 clamp(1.5rem, 5vw, 6rem);\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.insta-handle {\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  color: var(--color-accent);\n  transition: opacity 0.3s ease;\n}\n.insta-handle:hover {\n  opacity: 0.7;\n}\n.insta-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 0;\n}\n@media (max-width: 900px) {\n  .insta-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .insta-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.insta-item {\n  position: relative;\n  aspect-ratio: 1;\n  overflow: hidden;\n}\n.insta-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.insta-item:hover img {\n  transform: scale(1.08);\n}\n.insta-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(11, 11, 11, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.insta-item:hover .insta-overlay {\n  opacity: 1;\n}\n.footer-main {\n  padding: 5rem 0 2rem;\n  border-top: 1px solid var(--color-border);\n  margin-top: 4rem;\n}\n.footer-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 2fr;\n  gap: 4rem;\n  margin-bottom: 4rem;\n}\n@media (max-width: 1024px) {\n  .footer-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 3rem;\n  }\n}\n@media (max-width: 600px) {\n  .footer-grid {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.footer-logo {\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  display: block;\n  margin-bottom: 1.25rem;\n}\n.footer-logo .logo-mark {\n  color: var(--color-accent);\n  font-style: italic;\n}\n.footer-tagline {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n  margin-bottom: 1.75rem;\n  max-width: 280px;\n}\n.footer-social {\n  display: flex;\n  gap: 1rem;\n}\n.social-link {\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  transition: all 0.3s ease;\n}\n.social-link:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n  background: rgba(201, 169, 110, 0.08);\n}\n.footer-links-title {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-secondary);\n  margin-bottom: 1.5rem;\n}\n.footer-links-group ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.footer-links-group p {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.6;\n  margin-bottom: 1.25rem;\n}\n.footer-link {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  transition: color 0.3s ease;\n}\n.footer-link:hover {\n  color: var(--color-accent);\n}\n.newsletter-form {\n  display: flex;\n  border: 1px solid var(--color-border);\n  overflow: hidden;\n  transition: border-color 0.3s ease;\n}\n.newsletter-form:focus-within {\n  border-color: var(--color-accent);\n}\n.newsletter-form input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  padding: 0.875rem 1rem;\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  color: var(--color-secondary);\n}\n.newsletter-form input::placeholder {\n  color: var(--color-text-muted);\n}\n.newsletter-form button {\n  padding: 0.875rem 1.25rem;\n  background: var(--color-accent);\n  color: var(--color-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.3s ease;\n}\n.newsletter-form button:hover {\n  background: var(--color-accent-light);\n}\n.footer-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n  border-top: 1px solid var(--color-border);\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.footer-copy {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.footer-legal {\n  display: flex;\n  gap: 2rem;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/components/footer/footer.component.ts", lineNumber: 11 });
})();

// src/app/shared/components/cursor/cursor.component.ts
function CursorComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cursor.label());
  }
}
var CursorComponent = class _CursorComponent {
  cursor = inject(CursorService);
  platformId = inject(PLATFORM_ID);
  ngOnInit() {
    if (isPlatformBrowser(this.platformId))
      this.cursor.init();
  }
  static \u0275fac = function CursorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CursorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CursorComponent, selectors: [["app-cursor"]], decls: 3, vars: 17, consts: [[1, "cursor-dot"], [1, "cursor-ring"], [1, "cursor-label"]], template: function CursorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "div", 0);
      \u0275\u0275domElementStart(1, "div", 1);
      \u0275\u0275conditionalCreate(2, CursorComponent_Conditional_2_Template, 2, 1, "span", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("left", ctx.cursor.x(), "px")("top", ctx.cursor.y(), "px");
      \u0275\u0275classProp("hidden", ctx.cursor.isHidden())("hovering", ctx.cursor.isHovering());
      \u0275\u0275advance();
      \u0275\u0275styleProp("left", ctx.cursor.x(), "px")("top", ctx.cursor.y(), "px");
      \u0275\u0275classProp("hidden", ctx.cursor.isHidden())("hovering", ctx.cursor.isHovering());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cursor.label() ? 2 : -1);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  pointer-events: none;\n}\n.cursor-dot[_ngcontent-%COMP%], \n.cursor-ring[_ngcontent-%COMP%] {\n  position: fixed;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 99999;\n  transform: translate(-50%, -50%);\n  transition: opacity 0.3s ease;\n}\n.cursor-dot.hidden[_ngcontent-%COMP%], \n.cursor-ring.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cursor-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: var(--color-accent);\n  transition:\n    transform 0.1s ease,\n    opacity 0.3s ease,\n    width 0.3s ease,\n    height 0.3s ease;\n}\n.hovering[_ngcontent-%COMP%]   .cursor-dot[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(0);\n}\n.cursor-ring[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1.5px solid rgba(201, 169, 110, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),\n    height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),\n    border-color 0.3s ease,\n    background 0.3s ease,\n    opacity 0.3s ease;\n}\n.cursor-ring.hovering[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: rgba(201, 169, 110, 0.12);\n  border-color: var(--color-accent);\n}\n.cursor-label[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.55rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .cursor-dot[_ngcontent-%COMP%], \n   .cursor-ring[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=cursor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CursorComponent, [{
    type: Component,
    args: [{ selector: "app-cursor", standalone: true, template: `
    <div class="cursor-dot" [style.left.px]="cursor.x()" [style.top.px]="cursor.y()"
         [class.hidden]="cursor.isHidden()" [class.hovering]="cursor.isHovering()"></div>
    <div class="cursor-ring" [style.left.px]="cursor.x()" [style.top.px]="cursor.y()"
         [class.hidden]="cursor.isHidden()" [class.hovering]="cursor.isHovering()">
      @if (cursor.label()) {
        <span class="cursor-label">{{ cursor.label() }}</span>
      }
    </div>
  `, styles: ["/* src/app/shared/components/cursor/cursor.component.scss */\n:host {\n  pointer-events: none;\n}\n.cursor-dot,\n.cursor-ring {\n  position: fixed;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 99999;\n  transform: translate(-50%, -50%);\n  transition: opacity 0.3s ease;\n}\n.cursor-dot.hidden,\n.cursor-ring.hidden {\n  opacity: 0;\n}\n.cursor-dot {\n  width: 6px;\n  height: 6px;\n  background: var(--color-accent);\n  transition:\n    transform 0.1s ease,\n    opacity 0.3s ease,\n    width 0.3s ease,\n    height 0.3s ease;\n}\n.hovering .cursor-dot {\n  transform: translate(-50%, -50%) scale(0);\n}\n.cursor-ring {\n  width: 36px;\n  height: 36px;\n  border: 1.5px solid rgba(201, 169, 110, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),\n    height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),\n    border-color 0.3s ease,\n    background 0.3s ease,\n    opacity 0.3s ease;\n}\n.cursor-ring.hovering {\n  width: 72px;\n  height: 72px;\n  background: rgba(201, 169, 110, 0.12);\n  border-color: var(--color-accent);\n}\n.cursor-label {\n  font-family: var(--font-body);\n  font-size: 0.55rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .cursor-dot,\n  .cursor-ring {\n    display: none;\n  }\n}\n/*# sourceMappingURL=cursor.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CursorComponent, { className: "CursorComponent", filePath: "src/app/shared/components/cursor/cursor.component.ts", lineNumber: 20 });
})();

// src/app/shared/components/loader/loader.component.ts
var LoaderComponent = class _LoaderComponent {
  done = output();
  progress = signal(0, ...ngDevMode ? [{ debugName: "progress" }] : (
    /* istanbul ignore next */
    []
  ));
  hiding = signal(false, ...ngDevMode ? [{ debugName: "hiding" }] : (
    /* istanbul ignore next */
    []
  ));
  platformId = inject(PLATFORM_ID);
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.done.emit();
      return;
    }
    const interval = setInterval(() => {
      this.progress.update((v) => {
        const next = v + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            this.hiding.set(true);
            setTimeout(() => this.done.emit(), 800);
          }, 300);
          return 100;
        }
        return Math.round(next);
      });
    }, 120);
  }
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], outputs: { done: "done" }, decls: 12, vars: 5, consts: [[1, "loader"], [1, "loader-bg"], [1, "loader-content"], [1, "loader-logo"], [1, "logo-l"], [1, "logo-text"], [1, "loader-bar-wrap"], [1, "loader-bar"], [1, "loader-percent"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "div", 1);
      \u0275\u0275domElementStart(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "L");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "span", 5);
      \u0275\u0275text(7, "umi\xE8re");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "div", 6);
      \u0275\u0275domElement(9, "div", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("hide", ctx.hiding());
      \u0275\u0275advance(9);
      \u0275\u0275styleProp("width", ctx.progress(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.progress(), "%");
    }
  }, styles: ["\n.loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 100000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.8s cubic-bezier(0.87, 0, 0.13, 1), transform 0.8s cubic-bezier(0.87, 0, 0.13, 1);\n}\n.loader.hide[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-100%);\n  pointer-events: none;\n}\n.loader-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--color-bg);\n}\n.loader-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n.loader-logo[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2.5rem, 8vw, 5rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--color-secondary);\n  display: flex;\n  align-items: baseline;\n  gap: 0.1em;\n  animation: _ngcontent-%COMP%_logoReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n.logo-l[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-style: italic;\n}\n@keyframes _ngcontent-%COMP%_logoReveal {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n    filter: blur(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    filter: blur(0);\n  }\n}\n.loader-bar-wrap[_ngcontent-%COMP%] {\n  width: clamp(200px, 30vw, 320px);\n  height: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  overflow: hidden;\n}\n.loader-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-accent),\n      var(--color-accent-light));\n  transition: width 0.15s ease;\n}\n.loader-percent[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: 0.2em;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=loader.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", standalone: true, template: `
    <div class="loader" [class.hide]="hiding()">
      <div class="loader-bg"></div>
      <div class="loader-content">
        <div class="loader-logo">
          <span class="logo-l">L</span>
          <span class="logo-text">umi\xE8re</span>
        </div>
        <div class="loader-bar-wrap">
          <div class="loader-bar" [style.width.%]="progress()"></div>
        </div>
        <span class="loader-percent">{{ progress() }}%</span>
      </div>
    </div>
  `, styles: ["/* src/app/shared/components/loader/loader.component.scss */\n.loader {\n  position: fixed;\n  inset: 0;\n  z-index: 100000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.8s cubic-bezier(0.87, 0, 0.13, 1), transform 0.8s cubic-bezier(0.87, 0, 0.13, 1);\n}\n.loader.hide {\n  opacity: 0;\n  transform: translateY(-100%);\n  pointer-events: none;\n}\n.loader-bg {\n  position: absolute;\n  inset: 0;\n  background: var(--color-bg);\n}\n.loader-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n.loader-logo {\n  font-family: var(--font-heading);\n  font-size: clamp(2.5rem, 8vw, 5rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--color-secondary);\n  display: flex;\n  align-items: baseline;\n  gap: 0.1em;\n  animation: logoReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n.logo-l {\n  color: var(--color-accent);\n  font-style: italic;\n}\n@keyframes logoReveal {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n    filter: blur(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    filter: blur(0);\n  }\n}\n.loader-bar-wrap {\n  width: clamp(200px, 30vw, 320px);\n  height: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  overflow: hidden;\n}\n.loader-bar {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-accent),\n      var(--color-accent-light));\n  transition: width 0.15s ease;\n}\n.loader-percent {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: 0.2em;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=loader.component.css.map */\n"] }]
  }], null, { done: [{ type: Output, args: ["done"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/shared/components/loader/loader.component.ts", lineNumber: 24 });
})();

// src/app/app.ts
function App_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-loader", 6);
    \u0275\u0275listener("done", function App_Conditional_0_Template_app_loader_done_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLoaderDone());
    });
    \u0275\u0275elementEnd();
  }
}
var App = class _App {
  platformId = inject(PLATFORM_ID);
  scroll = inject(ScrollService);
  anim = inject(AnimationService);
  router = inject(Router);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  transitioning = signal(false, ...ngDevMode ? [{ debugName: "transitioning" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart)
        this.transitioning.set(true);
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.transitioning.set(false);
          this.anim.observeAll();
        }, 100);
      }
    });
  }
  onLoaderDone() {
    this.loading.set(false);
    this.scroll.init();
    this.anim.initReveal();
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 11, vars: 3, consts: [["aria-hidden", "true", 1, "noise-overlay"], [1, "app-shell"], ["id", "main-content"], ["href", "https://wa.me/15550100", "target", "_blank", "rel", "noopener", "aria-label", "Chat on WhatsApp", 1, "floating-cta"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"], [3, "done"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, App_Conditional_0_Template, 1, 0, "app-loader");
      \u0275\u0275element(1, "div", 0)(2, "app-cursor");
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275element(4, "app-navbar");
      \u0275\u0275elementStart(5, "main", 2);
      \u0275\u0275element(6, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "app-footer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 4);
      \u0275\u0275element(10, "path", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("transitioning", ctx.transitioning());
    }
  }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent, CursorComponent, LoaderComponent], styles: ["\n.app-shell[_ngcontent-%COMP%] {\n  transition: opacity 0.3s ease;\n}\n.app-shell.transitioning[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.floating-cta[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  z-index: 500;\n  width: 56px;\n  height: 56px;\n  background: #25D366;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.35);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;\n}\n.floating-cta[_ngcontent-%COMP%]:hover {\n  transform: scale(1.12);\n  box-shadow: 0 12px 40px rgba(37, 211, 102, 0.5);\n}\n@media (max-width: 768px) {\n  .floating-cta[_ngcontent-%COMP%] {\n    bottom: 1.25rem;\n    right: 1.25rem;\n    width: 48px;\n    height: 48px;\n  }\n}\n[_ngcontent-%COMP%]::view-transition-old(root) {\n  animation: _ngcontent-%COMP%_fadeOut 0.3s ease forwards;\n}\n[_ngcontent-%COMP%]::view-transition-new(root) {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeOut {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, NavbarComponent, FooterComponent, CursorComponent, LoaderComponent], template: '@if (loading()) {\r\n  <app-loader (done)="onLoaderDone()" />\r\n}\r\n\r\n<div class="noise-overlay" aria-hidden="true"></div>\r\n<app-cursor />\r\n\r\n<div class="app-shell" [class.transitioning]="transitioning()">\r\n  <app-navbar />\r\n  <main id="main-content">\r\n    <router-outlet />\r\n  </main>\r\n  <app-footer />\r\n</div>\r\n\r\n<!-- Floating CTA -->\r\n<a href="https://wa.me/15550100" target="_blank" rel="noopener" class="floating-cta" aria-label="Chat on WhatsApp">\r\n  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>\r\n</a>\r\n', styles: ["/* src/app/app.scss */\n.app-shell {\n  transition: opacity 0.3s ease;\n}\n.app-shell.transitioning {\n  opacity: 0.6;\n}\nmain {\n  min-height: 100vh;\n}\n.floating-cta {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  z-index: 500;\n  width: 56px;\n  height: 56px;\n  background: #25D366;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.35);\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;\n}\n.floating-cta:hover {\n  transform: scale(1.12);\n  box-shadow: 0 12px 40px rgba(37, 211, 102, 0.5);\n}\n@media (max-width: 768px) {\n  .floating-cta {\n    bottom: 1.25rem;\n    right: 1.25rem;\n    width: 48px;\n    height: 48px;\n  }\n}\n::view-transition-old(root) {\n  animation: fadeOut 0.3s ease forwards;\n}\n::view-transition-new(root) {\n  animation: fadeIn 0.4s ease forwards;\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 18 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
