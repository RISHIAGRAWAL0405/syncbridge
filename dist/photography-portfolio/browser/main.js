import {
  AnimationService
} from "./chunk-A45UTPAL.js";
import {
  AuthService,
  StorageService
} from "./chunk-DQBTYOFC.js";
import "./chunk-2UTZUB6A.js";
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
} from "./chunk-RBKBNWPP.js";
import "./chunk-5BILWADD.js";
import {
  provideHttpClient,
  withInterceptors
} from "./chunk-WWIHBCUC.js";
import {
  isPlatformBrowser
} from "./chunk-URCQYAQL.js";
import {
  Component,
  HostListener,
  Injectable,
  PLATFORM_ID,
  catchError,
  computed,
  inject,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CQ3CZWR7.js";
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
var clientGuard = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  const user = storage.getCurrentUser();
  if (storage.isLoggedIn() && user?.userType === "CLIENT")
    return true;
  router.navigate(["/auth/login"]);
  return false;
};
var guestGuard = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  if (!storage.isLoggedIn())
    return true;
  router.navigate(["/"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  // Auth routes (public - no website content)
  {
    path: "auth",
    canActivate: [guestGuard],
    children: [
      {
        path: "login",
        loadComponent: () => import("./chunk-46O5BKKG.js").then((m) => m.LoginComponent),
        title: "Login | Sync Bridge"
      },
      {
        path: "forgot-password",
        loadComponent: () => import("./chunk-OUXHETVP.js").then((m) => m.ForgotPasswordComponent),
        title: "Forgot Password | Sync Bridge"
      },
      {
        path: "reset-password",
        loadComponent: () => import("./chunk-2OOFDJ2E.js").then((m) => m.ResetPasswordComponent),
        title: "Reset Password | Sync Bridge"
      },
      { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  },
  // Client routes (protected)
  {
    path: "client",
    loadComponent: () => import("./chunk-CC2HBONK.js").then((m) => m.ClientLayoutComponent),
    canActivate: [clientGuard],
    children: [
      {
        path: "calendar",
        loadComponent: () => import("./chunk-7BZ6IYHB.js").then((m) => m.ClientCalendarComponent),
        title: "My Calendar | Sync Bridge"
      },
      { path: "", redirectTo: "calendar", pathMatch: "full" }
    ]
  },
  // Admin routes (protected) - ONLY admin panel, NO website content
  {
    path: "admin",
    loadComponent: () => import("./chunk-JOEU65RZ.js").then((m) => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-ZG7UMPBR.js").then((m) => m.DashboardComponent),
        title: "Dashboard | Sync Bridge"
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-NB3VVFAW.js").then((m) => m.UsersComponent),
        title: "Users | Sync Bridge"
      },
      {
        path: "clients",
        loadComponent: () => import("./chunk-OFSZTOSQ.js").then((m) => m.ClientsComponent),
        title: "Clients | Sync Bridge"
      },
      {
        path: "projects",
        loadComponent: () => import("./chunk-YWUXM23I.js").then((m) => m.ProjectsComponent),
        title: "Projects | Sync Bridge"
      },
      {
        path: "projects/:projectId",
        loadComponent: () => import("./chunk-P2TWESSW.js").then((m) => m.ProjectProfileComponent),
        title: "Project Profile | Sync Bridge"
      },
      {
        path: "tasks",
        loadComponent: () => import("./chunk-7KMF32XT.js").then((m) => m.TasksComponent),
        title: "Tasks | Sync Bridge"
      },
      {
        path: "roles",
        loadComponent: () => import("./chunk-WGNVQIMB.js").then((m) => m.RolesComponent),
        title: "Roles | Sync Bridge"
      },
      {
        path: "workflow",
        loadComponent: () => import("./chunk-5H373VVB.js").then((m) => m.WorkflowComponent),
        title: "Workflow | Sync Bridge"
      },
      {
        path: "workflow/steps",
        loadComponent: () => import("./chunk-5H373VVB.js").then((m) => m.WorkflowComponent),
        title: "Workflow Steps | Sync Bridge"
      },
      {
        path: "workflow/templates",
        loadComponent: () => import("./chunk-5H373VVB.js").then((m) => m.WorkflowComponent),
        title: "Workflow Templates | Sync Bridge"
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-4F2FAVAK.js").then((m) => m.ProfileComponent),
        title: "Profile | Sync Bridge"
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  // Public visitor routes
  {
    path: "",
    loadComponent: () => import("./chunk-BSEHGF37.js").then((m) => m.HomeComponent),
    title: "Sync Bridge | Strategy \xB7 Branding \xB7 Digital Marketing"
  },
  {
    path: "about",
    loadComponent: () => import("./chunk-FGZCNGY4.js").then((m) => m.AboutComponent),
    title: "About Us | Sync Bridge"
  },
  {
    path: "services",
    loadComponent: () => import("./chunk-Y6HBUIEL.js").then((m) => m.ServicesComponent),
    title: "Our Services | Sync Bridge"
  },
  {
    path: "portfolio",
    loadComponent: () => import("./chunk-DRFMBMCH.js").then((m) => m.PortfolioComponent),
    title: "Our Work | Sync Bridge"
  },
  {
    path: "industries",
    loadComponent: () => import("./chunk-KHY6VYCF.js").then((m) => m.IndustriesComponent),
    title: "Industries We Serve | Sync Bridge"
  },
  {
    path: "blog",
    loadComponent: () => import("./chunk-3K2YUTRM.js").then((m) => m.BlogComponent),
    title: "Insights & Blog | Sync Bridge"
  },
  {
    path: "contact",
    loadComponent: () => import("./chunk-Y3DHZ5GC.js").then((m) => m.ContactComponent),
    title: "Contact Us | Sync Bridge"
  },
  {
    path: "pr-communication",
    loadComponent: () => import("./chunk-4PLD7TDH.js").then((m) => m.PrCommunicationComponent),
    title: "PR Communication | Sync Bridge"
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

// src/app/core/services/scroll.service.ts
var ScrollService = class _ScrollService {
  platformId = inject(PLATFORM_ID);
  scrollY = signal(0, ...ngDevMode ? [{ debugName: "scrollY" }] : (
    /* istanbul ignore next */
    []
  ));
  lenis;
  init() {
    if (!isPlatformBrowser(this.platformId))
      return;
    import("./chunk-KQ6P5GLP.js").then(({ default: Lenis }) => {
      this.lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8
      });
      this.lenis.on("scroll", ({ scroll }) => this.scrollY.set(scroll));
      const raf = (time) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });
  }
  scrollTo(target) {
    this.lenis?.scrollTo(target, { duration: 1.6 });
  }
  stop() {
    this.lenis?.stop();
  }
  start() {
    this.lenis?.start();
  }
  static \u0275fac = function ScrollService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScrollService, factory: _ScrollService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/navbar/navbar.component.ts
var _c0 = (a0) => ({ exact: a0 });
var _forTrack0 = ($index, $item) => $item.path;
function NavbarComponent_Conditional_0_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r3.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(3, _c0, link_r3.path === "/"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r3.label, " ");
  }
}
function NavbarComponent_Conditional_0_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 48);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_0_For_59_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r5 = ctx.$implicit;
    const \u0275$index_114_r6 = ctx.$index;
    \u0275\u0275styleProp("--i", \u0275$index_114_r6);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r5.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(6, _c0, link_r5.path === "/"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("0", \u0275$index_114_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r5.label, " ");
  }
}
function NavbarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 4);
    \u0275\u0275element(5, "path", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " +91-9377697676 ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "a", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 4);
    \u0275\u0275element(9, "path", 7)(10, "polyline", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " info@syncbridge.in ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 4);
    \u0275\u0275element(14, "path", 10)(15, "circle", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Ahmedabad \xB7 Surat \xB7 Vadodara \xB7 Rajkot ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 12)(18, "a", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 14);
    \u0275\u0275element(20, "path", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "a", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 4);
    \u0275\u0275element(23, "rect", 17)(24, "circle", 18)(25, "circle", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "a", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 14);
    \u0275\u0275element(28, "path", 21)(29, "rect", 22)(30, "circle", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "a", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 14);
    \u0275\u0275element(33, "path", 25);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "nav", 26)(35, "div", 27)(36, "a", 28);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_0_Template_a_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275elementStart(37, "span", 29);
    \u0275\u0275text(38, "SYNC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 30);
    \u0275\u0275text(40, " BRIDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "ul", 31);
    \u0275\u0275repeaterCreate(42, NavbarComponent_Conditional_0_For_43_Template, 3, 5, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 32)(45, "a", 33);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_0_Template_a_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 34);
    \u0275\u0275element(47, "path", 35)(48, "polyline", 36)(49, "line", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Login ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "button", 38);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_0_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMenu());
    });
    \u0275\u0275element(52, "span")(53, "span")(54, "span");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 39)(56, "div", 40)(57, "ul", 41);
    \u0275\u0275repeaterCreate(58, NavbarComponent_Conditional_0_For_59_Template, 5, 8, "li", 42, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 43)(61, "a", 33);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_0_Template_a_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 34);
    \u0275\u0275element(63, "path", 35)(64, "polyline", 36)(65, "line", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, " Login ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(67, "div", 44)(68, "a", 45);
    \u0275\u0275text(69, "+91-9377697676");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "a", 46);
    \u0275\u0275text(71, "info@syncbridge.in");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(34);
    \u0275\u0275classProp("scrolled", ctx_r1.scrolled())("menu-open", ctx_r1.menuOpen());
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.navLinks);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("active", ctx_r1.menuOpen());
    \u0275\u0275attribute("aria-expanded", ctx_r1.menuOpen());
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r1.menuOpen());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.navLinks);
  }
}
var NavbarComponent = class _NavbarComponent {
  platformId = inject(PLATFORM_ID);
  router = inject(Router);
  scroll = inject(ScrollService);
  menuOpen = signal(false, ...ngDevMode ? [{ debugName: "menuOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  scrolled = computed(() => this.scroll.scrollY() > 60, ...ngDevMode ? [{ debugName: "scrolled" }] : (
    /* istanbul ignore next */
    []
  ));
  navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Our Work", path: "/portfolio" },
    { label: "Industries", path: "/industries" },
    { label: "Insights", path: "/blog" },
    { label: "PR & Communication", path: "/pr-communication" },
    { label: "Contact", path: "/contact" }
  ];
  get isAdminRoute() {
    return this.router.url.startsWith("/admin") || this.router.url.startsWith("/auth");
  }
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
  }, decls: 1, vars: 1, consts: [["role", "banner", 1, "top-bar"], [1, "top-bar-inner"], [1, "top-bar-left"], ["href", "tel:+919377697676", "aria-label", "Call Sync Bridge", 1, "top-bar-item"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"], ["href", "mailto:info@syncbridge.in", "aria-label", "Email Sync Bridge", 1, "top-bar-item"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "top-bar-item", "top-bar-location"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "top-bar-right"], ["href", "https://www.facebook.com/syncbridge", "target", "_blank", "rel", "noopener", "aria-label", "Sync Bridge on Facebook", 1, "top-bar-social"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"], ["href", "https://www.instagram.com/syncbridge", "target", "_blank", "rel", "noopener", "aria-label", "Sync Bridge on Instagram", 1, "top-bar-social"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "1", "fill", "currentColor", "stroke", "none"], ["href", "https://www.linkedin.com/company/syncbridge", "target", "_blank", "rel", "noopener", "aria-label", "Sync Bridge on LinkedIn", 1, "top-bar-social"], ["d", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], ["x", "2", "y", "9", "width", "4", "height", "12"], ["cx", "4", "cy", "4", "r", "2"], ["href", "https://twitter.com/syncbridge", "target", "_blank", "rel", "noopener", "aria-label", "Sync Bridge on Twitter", 1, "top-bar-social"], ["d", "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"], ["role", "navigation", "aria-label", "Main navigation", 1, "navbar"], [1, "nav-inner"], ["routerLink", "/", "aria-label", "Sync Bridge Home", 1, "nav-logo", 3, "click"], [1, "logo-tz"], [1, "logo-zone"], ["role", "list", 1, "nav-links"], [1, "nav-actions"], ["routerLink", "/auth/login", 1, "nav-cta", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"], ["points", "10 17 15 12 10 7"], ["x1", "15", "y1", "12", "x2", "3", "y2", "12"], ["aria-label", "Toggle navigation menu", 1, "hamburger", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Navigation menu", 1, "mobile-menu"], [1, "mobile-menu-content"], ["role", "list", 1, "mobile-links"], [3, "--i"], [1, "mobile-footer"], [1, "mobile-contact"], ["href", "tel:+919377697676"], ["href", "mailto:info@syncbridge.in"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "mobile-link", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "mobile-link-num"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, NavbarComponent_Conditional_0_Template, 72, 9);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isAdminRoute ? 0 : -1);
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ["\n.top-bar[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green);\n  height: var(--nav-height);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1001;\n}\n@media (max-width: 768px) {\n  .top-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.top-bar-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 clamp(1.25rem, 4vw, 5rem);\n  max-width: 1320px;\n  margin: 0 auto;\n}\n.top-bar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.top-bar-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.7);\n  transition: color 0.2s ease;\n  white-space: nowrap;\n}\n.top-bar-item[_ngcontent-%COMP%]:hover {\n  color: var(--tz-lime);\n}\n.top-bar-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n@media (max-width: 1100px) {\n  .top-bar-location[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.top-bar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.top-bar-social[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.55);\n  border-radius: 4px;\n  transition: color 0.2s ease, background 0.2s ease;\n}\n.top-bar-social[_ngcontent-%COMP%]:hover {\n  color: var(--tz-lime);\n  background: rgba(79, 156, 249, 0.12);\n}\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: var(--nav-height);\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  height: var(--main-nav-height);\n  background: var(--tz-white);\n  border-bottom: 1px solid var(--tz-border);\n  transition: box-shadow 0.3s ease;\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n}\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    top: 0;\n  }\n}\n.nav-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0 clamp(1.25rem, 4vw, 5rem);\n  max-width: 1320px;\n  margin: 0 auto;\n}\n.nav-logo[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 800;\n  letter-spacing: -0.01em;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 10;\n  line-height: 1;\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-tz[_ngcontent-%COMP%] {\n  color: var(--tz-dark-green);\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-zone[_ngcontent-%COMP%] {\n  color: var(--tz-lime-dark);\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  flex: 1;\n  justify-content: center;\n}\n@media (max-width: 1024px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav-link[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--tz-text-muted);\n  padding: 0.4rem 0.65rem;\n  border-radius: 6px;\n  transition: color 0.2s ease, background 0.2s ease;\n  white-space: nowrap;\n  line-height: 1;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--tz-dark-green);\n  background: rgba(15, 31, 61, 0.05);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  color: var(--tz-dark-green);\n  font-weight: 600;\n  background: rgba(15, 31, 61, 0.06);\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n  z-index: 10;\n}\n.nav-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0 1rem;\n  height: 34px;\n  background: transparent;\n  color: var(--tz-dark-green);\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 600;\n  border-radius: 6px;\n  border: 1.5px solid var(--tz-dark-green);\n  transition: background 0.2s ease, color 0.2s ease;\n  white-space: nowrap;\n  line-height: 1;\n}\n.nav-cta[_ngcontent-%COMP%]:hover {\n  background: var(--tz-dark-green);\n  color: var(--tz-white);\n}\n.nav-cta[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 13px;\n  height: 13px;\n}\n@media (max-width: 1024px) {\n  .nav-cta[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  width: 34px;\n  height: 34px;\n  padding: 5px;\n  border-radius: 6px;\n  transition: background 0.2s ease;\n  flex-shrink: 0;\n}\n@media (max-width: 1024px) {\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.hamburger[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 31, 61, 0.06);\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 1.5px;\n  background: var(--tz-charcoal);\n  border-radius: 2px;\n  transition:\n    transform 0.35s cubic-bezier(0.87, 0, 0.13, 1),\n    opacity 0.25s ease,\n    width 0.35s ease;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  width: 18px;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  width: 13px;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  width: 16px;\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(6.5px) rotate(45deg);\n  width: 18px;\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n  transform: translateX(-8px);\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-6.5px) rotate(-45deg);\n  width: 18px;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  top: var(--main-nav-height);\n  z-index: 999;\n  background: var(--tz-white);\n  transform: translateX(100%);\n  transition: transform 0.4s cubic-bezier(0.87, 0, 0.13, 1);\n  overflow-y: auto;\n}\n@media (max-width: 768px) {\n  .mobile-menu[_ngcontent-%COMP%] {\n    top: var(--main-nav-height);\n  }\n}\n.mobile-menu.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.mobile-menu.open[_ngcontent-%COMP%]   .mobile-link[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.mobile-menu.open[_ngcontent-%COMP%]   .mobile-footer[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.mobile-menu-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  padding: 2rem clamp(1.25rem, 6vw, 3rem) 3rem;\n}\n.mobile-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  flex: 1;\n  padding-top: 1rem;\n}\n.mobile-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.875rem 0;\n  font-family: var(--font-heading);\n  font-size: clamp(1.5rem, 6vw, 2.25rem);\n  font-weight: 700;\n  color: var(--tz-charcoal);\n  border-bottom: 1px solid var(--tz-border);\n  opacity: 0;\n  transform: translateX(30px);\n  transition:\n    opacity 0.4s ease calc(var(--i) * 0.06s + 0.1s),\n    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) calc(var(--i) * 0.06s + 0.1s),\n    color 0.2s ease;\n}\n.mobile-link[_ngcontent-%COMP%]:hover {\n  color: var(--tz-dark-green);\n}\n.mobile-link.active[_ngcontent-%COMP%] {\n  color: var(--tz-dark-green);\n}\n.mobile-link-num[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  color: var(--tz-lime-dark);\n  min-width: 22px;\n}\n.mobile-footer[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  opacity: 0;\n  transform: translateY(16px);\n  transition: opacity 0.4s ease 0.5s, transform 0.4s ease 0.5s;\n}\n.mobile-footer[_ngcontent-%COMP%]   .nav-cta[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n  width: fit-content;\n  height: 40px;\n  padding: 0 1.5rem;\n}\n.mobile-contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.mobile-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--tz-text-muted);\n  transition: color 0.2s ease;\n}\n.mobile-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--tz-dark-green);\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [RouterLink, RouterLinkActive], template: `@if (!isAdminRoute) {\r
  <!-- Top Contact Bar -->\r
  <div class="top-bar" role="banner">\r
    <div class="top-bar-inner">\r
      <div class="top-bar-left">\r
        <a href="tel:+919377697676" class="top-bar-item" aria-label="Call Sync Bridge">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>\r
          +91-9377697676\r
        </a>\r
        <a href="mailto:info@syncbridge.in" class="top-bar-item" aria-label="Email Sync Bridge">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>\r
          info&#64;syncbridge.in\r
        </a>\r
        <span class="top-bar-item top-bar-location">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>\r
          Ahmedabad \xB7 Surat \xB7 Vadodara \xB7 Rajkot\r
        </span>\r
      </div>\r
      <div class="top-bar-right">\r
        <a href="https://www.facebook.com/syncbridge" target="_blank" rel="noopener" class="top-bar-social" aria-label="Sync Bridge on Facebook">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>\r
        </a>\r
        <a href="https://www.instagram.com/syncbridge" target="_blank" rel="noopener" class="top-bar-social" aria-label="Sync Bridge on Instagram">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>\r
        </a>\r
        <a href="https://www.linkedin.com/company/syncbridge" target="_blank" rel="noopener" class="top-bar-social" aria-label="Sync Bridge on LinkedIn">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>\r
        </a>\r
        <a href="https://twitter.com/syncbridge" target="_blank" rel="noopener" class="top-bar-social" aria-label="Sync Bridge on Twitter">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>\r
        </a>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Main Navigation -->\r
  <nav class="navbar" [class.scrolled]="scrolled()" [class.menu-open]="menuOpen()" role="navigation" aria-label="Main navigation">\r
    <div class="nav-inner">\r
      <!-- Logo -->\r
      <a routerLink="/" class="nav-logo" (click)="closeMenu()" aria-label="Sync Bridge Home">\r
        <span class="logo-tz">SYNC</span><span class="logo-zone"> BRIDGE</span>\r
      </a>\r
\r
      <!-- Desktop Links -->\r
      <ul class="nav-links" role="list">\r
        @for (link of navLinks; track link.path) {\r
          <li>\r
            <a [routerLink]="link.path" routerLinkActive="active" [routerLinkActiveOptions]="{exact: link.path === '/'}" class="nav-link">\r
              {{ link.label }}\r
            </a>\r
          </li>\r
        }\r
      </ul>\r
\r
      <!-- Login Button -->\r
      <div class="nav-actions">\r
        <a routerLink="/auth/login" class="nav-cta" (click)="closeMenu()">\r
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>\r
          Login\r
        </a>\r
\r
        <!-- Hamburger -->\r
        <button class="hamburger" [class.active]="menuOpen()" (click)="toggleMenu()"\r
                [attr.aria-expanded]="menuOpen()" aria-label="Toggle navigation menu">\r
          <span></span><span></span><span></span>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Mobile Menu -->\r
    <div class="mobile-menu" [class.open]="menuOpen()" role="dialog" aria-modal="true" aria-label="Navigation menu">\r
      <div class="mobile-menu-content">\r
        <ul class="mobile-links" role="list">\r
          @for (link of navLinks; track link.path; let i = $index) {\r
            <li [style.--i]="i">\r
              <a [routerLink]="link.path" routerLinkActive="active" [routerLinkActiveOptions]="{exact: link.path === '/'}"\r
                 class="mobile-link" (click)="closeMenu()">\r
                <span class="mobile-link-num">0{{ i + 1 }}</span>\r
                {{ link.label }}\r
              </a>\r
            </li>\r
          }\r
        </ul>\r
        <div class="mobile-footer">\r
          <a routerLink="/auth/login" class="nav-cta" (click)="closeMenu()">\r
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>\r
            Login\r
          </a>\r
          <div class="mobile-contact">\r
            <a href="tel:+919377697676">+91-9377697676</a>\r
            <a href="mailto:info@syncbridge.in">info&#64;syncbridge.in</a>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </nav>\r
}\r
`, styles: ["/* src/app/shared/components/navbar/navbar.component.scss */\n.top-bar {\n  background: var(--tz-dark-green);\n  height: var(--nav-height);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1001;\n}\n@media (max-width: 768px) {\n  .top-bar {\n    display: none;\n  }\n}\n.top-bar-inner {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 clamp(1.25rem, 4vw, 5rem);\n  max-width: 1320px;\n  margin: 0 auto;\n}\n.top-bar-left {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.top-bar-item {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.7);\n  transition: color 0.2s ease;\n  white-space: nowrap;\n}\n.top-bar-item:hover {\n  color: var(--tz-lime);\n}\n.top-bar-item svg {\n  flex-shrink: 0;\n}\n@media (max-width: 1100px) {\n  .top-bar-location {\n    display: none;\n  }\n}\n.top-bar-right {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.top-bar-social {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.55);\n  border-radius: 4px;\n  transition: color 0.2s ease, background 0.2s ease;\n}\n.top-bar-social:hover {\n  color: var(--tz-lime);\n  background: rgba(79, 156, 249, 0.12);\n}\n.navbar {\n  position: fixed;\n  top: var(--nav-height);\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  height: var(--main-nav-height);\n  background: var(--tz-white);\n  border-bottom: 1px solid var(--tz-border);\n  transition: box-shadow 0.3s ease;\n}\n.navbar.scrolled {\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n}\n@media (max-width: 768px) {\n  .navbar {\n    top: 0;\n  }\n}\n.nav-inner {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0 clamp(1.25rem, 4vw, 5rem);\n  max-width: 1320px;\n  margin: 0 auto;\n}\n.nav-logo {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 800;\n  letter-spacing: -0.01em;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 10;\n  line-height: 1;\n}\n.nav-logo .logo-tz {\n  color: var(--tz-dark-green);\n}\n.nav-logo .logo-zone {\n  color: var(--tz-lime-dark);\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  flex: 1;\n  justify-content: center;\n}\n@media (max-width: 1024px) {\n  .nav-links {\n    display: none;\n  }\n}\n.nav-link {\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--tz-text-muted);\n  padding: 0.4rem 0.65rem;\n  border-radius: 6px;\n  transition: color 0.2s ease, background 0.2s ease;\n  white-space: nowrap;\n  line-height: 1;\n}\n.nav-link:hover {\n  color: var(--tz-dark-green);\n  background: rgba(15, 31, 61, 0.05);\n}\n.nav-link.active {\n  color: var(--tz-dark-green);\n  font-weight: 600;\n  background: rgba(15, 31, 61, 0.06);\n}\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n  z-index: 10;\n}\n.nav-cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0 1rem;\n  height: 34px;\n  background: transparent;\n  color: var(--tz-dark-green);\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 600;\n  border-radius: 6px;\n  border: 1.5px solid var(--tz-dark-green);\n  transition: background 0.2s ease, color 0.2s ease;\n  white-space: nowrap;\n  line-height: 1;\n}\n.nav-cta:hover {\n  background: var(--tz-dark-green);\n  color: var(--tz-white);\n}\n.nav-cta svg {\n  flex-shrink: 0;\n  width: 13px;\n  height: 13px;\n}\n@media (max-width: 1024px) {\n  .nav-cta {\n    display: none;\n  }\n}\n.hamburger {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  width: 34px;\n  height: 34px;\n  padding: 5px;\n  border-radius: 6px;\n  transition: background 0.2s ease;\n  flex-shrink: 0;\n}\n@media (max-width: 1024px) {\n  .hamburger {\n    display: flex;\n  }\n}\n.hamburger:hover {\n  background: rgba(15, 31, 61, 0.06);\n}\n.hamburger span {\n  display: block;\n  height: 1.5px;\n  background: var(--tz-charcoal);\n  border-radius: 2px;\n  transition:\n    transform 0.35s cubic-bezier(0.87, 0, 0.13, 1),\n    opacity 0.25s ease,\n    width 0.35s ease;\n}\n.hamburger span:nth-child(1) {\n  width: 18px;\n}\n.hamburger span:nth-child(2) {\n  width: 13px;\n}\n.hamburger span:nth-child(3) {\n  width: 16px;\n}\n.hamburger.active span:nth-child(1) {\n  transform: translateY(6.5px) rotate(45deg);\n  width: 18px;\n}\n.hamburger.active span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(-8px);\n}\n.hamburger.active span:nth-child(3) {\n  transform: translateY(-6.5px) rotate(-45deg);\n  width: 18px;\n}\n.mobile-menu {\n  position: fixed;\n  inset: 0;\n  top: var(--main-nav-height);\n  z-index: 999;\n  background: var(--tz-white);\n  transform: translateX(100%);\n  transition: transform 0.4s cubic-bezier(0.87, 0, 0.13, 1);\n  overflow-y: auto;\n}\n@media (max-width: 768px) {\n  .mobile-menu {\n    top: var(--main-nav-height);\n  }\n}\n.mobile-menu.open {\n  transform: translateX(0);\n}\n.mobile-menu.open .mobile-link {\n  opacity: 1;\n  transform: translateX(0);\n}\n.mobile-menu.open .mobile-footer {\n  opacity: 1;\n  transform: translateY(0);\n}\n.mobile-menu-content {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  padding: 2rem clamp(1.25rem, 6vw, 3rem) 3rem;\n}\n.mobile-links {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  flex: 1;\n  padding-top: 1rem;\n}\n.mobile-link {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.875rem 0;\n  font-family: var(--font-heading);\n  font-size: clamp(1.5rem, 6vw, 2.25rem);\n  font-weight: 700;\n  color: var(--tz-charcoal);\n  border-bottom: 1px solid var(--tz-border);\n  opacity: 0;\n  transform: translateX(30px);\n  transition:\n    opacity 0.4s ease calc(var(--i) * 0.06s + 0.1s),\n    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) calc(var(--i) * 0.06s + 0.1s),\n    color 0.2s ease;\n}\n.mobile-link:hover {\n  color: var(--tz-dark-green);\n}\n.mobile-link.active {\n  color: var(--tz-dark-green);\n}\n.mobile-link-num {\n  font-family: var(--font-body);\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  color: var(--tz-lime-dark);\n  min-width: 22px;\n}\n.mobile-footer {\n  padding-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  opacity: 0;\n  transform: translateY(16px);\n  transition: opacity 0.4s ease 0.5s, transform 0.4s ease 0.5s;\n}\n.mobile-footer .nav-cta {\n  display: inline-flex !important;\n  width: fit-content;\n  height: 40px;\n  padding: 0 1.5rem;\n}\n.mobile-contact {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.mobile-contact a {\n  font-size: 0.85rem;\n  color: var(--tz-text-muted);\n  transition: color 0.2s ease;\n}\n.mobile-contact a:hover {\n  color: var(--tz-dark-green);\n}\n/*# sourceMappingURL=navbar.component.css.map */\n"] }]
  }], null, { onEscape: [{
    type: HostListener,
    args: ["window:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/components/navbar/navbar.component.ts", lineNumber: 13 });
})();

// src/app/shared/components/footer/footer.component.ts
var _forTrack02 = ($index, $item) => $item.path;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.city;
function FooterComponent_Conditional_0_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r1.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.label);
  }
}
function FooterComponent_Conditional_0_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 47);
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
function FooterComponent_Conditional_0_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 49)(3, "circle", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const office_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", office_r3.city, " ");
  }
}
function FooterComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
    \u0275\u0275text(6, "Let's Create History Together.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Start a story with Sync Bridge.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "a", 6);
    \u0275\u0275text(11, " Start a Project ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 7);
    \u0275\u0275element(13, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "a", 9);
    \u0275\u0275text(15, "Talk to Us");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 10)(17, "div", 2)(18, "div", 11)(19, "div", 12)(20, "a", 13)(21, "span", 14);
    \u0275\u0275text(22, "SYNC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 15);
    \u0275\u0275text(24, " BRIDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 16);
    \u0275\u0275text(26, "A full-service advertising and digital marketing agency combining strategy, creativity and technology to help brands grow and make an impact.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 17)(28, "a", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 19);
    \u0275\u0275element(30, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "a", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 22);
    \u0275\u0275element(33, "rect", 23)(34, "circle", 24)(35, "circle", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "a", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 19);
    \u0275\u0275element(38, "path", 27)(39, "rect", 28)(40, "circle", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "a", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 19);
    \u0275\u0275element(43, "path", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 32)(45, "h3", 33);
    \u0275\u0275text(46, "Quick Links");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ul");
    \u0275\u0275repeaterCreate(48, FooterComponent_Conditional_0_For_49_Template, 3, 2, "li", null, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 32)(51, "h3", 33);
    \u0275\u0275text(52, "Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ul");
    \u0275\u0275repeaterCreate(54, FooterComponent_Conditional_0_For_55_Template, 3, 2, "li", null, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 32)(57, "h3", 33);
    \u0275\u0275text(58, "Get In Touch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 34)(60, "a", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(61, "svg", 36);
    \u0275\u0275element(62, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " +91-9377697676 ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(64, "a", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(65, "svg", 36);
    \u0275\u0275element(66, "path", 39)(67, "polyline", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " info@syncbridge.in ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(69, "div", 41);
    \u0275\u0275repeaterCreate(70, FooterComponent_Conditional_0_For_71_Template, 5, 1, "div", 42, _forTrack2);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "div", 43)(73, "p", 44);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 45)(76, "a", 46);
    \u0275\u0275text(77, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "a", 46);
    \u0275\u0275text(79, "Legal Disclaimer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "a", 46);
    \u0275\u0275text(81, "Sitemap");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(48);
    \u0275\u0275repeater(ctx_r3.quickLinks);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r3.serviceLinks);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r3.offices);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\xA9 ", ctx_r3.year, " Sync Bridge. All rights reserved.");
  }
}
var FooterComponent = class _FooterComponent {
  router = inject(Router);
  year = (/* @__PURE__ */ new Date()).getFullYear();
  get isAdminRoute() {
    return this.router.url.startsWith("/admin") || this.router.url.startsWith("/auth");
  }
  quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Our Work", path: "/portfolio" },
    { label: "Industries", path: "/industries" },
    { label: "Insights", path: "/blog" },
    { label: "Contact", path: "/contact" }
  ];
  serviceLinks = [
    { label: "Strategy", path: "/services" },
    { label: "Branding", path: "/services" },
    { label: "Design", path: "/services" },
    { label: "Advertising", path: "/services" },
    { label: "Social Media", path: "/services" },
    { label: "SEO", path: "/services" },
    { label: "Digital Marketing", path: "/services" },
    { label: "Web Development", path: "/services" },
    { label: "Video Production", path: "/services" }
  ];
  offices = [
    { city: "Ahmedabad", address: "Head Office, Ahmedabad, Gujarat" },
    { city: "Surat", address: "Surat, Gujarat" },
    { city: "Vadodara", address: "Vadodara, Gujarat" },
    { city: "Rajkot", address: "Rajkot, Gujarat" }
  ];
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 1, vars: 1, consts: [["aria-label", "Site footer", 1, "footer"], [1, "footer-cta-band"], [1, "container"], [1, "footer-cta-inner"], [1, "footer-cta-text"], [1, "footer-cta-actions"], ["routerLink", "/contact", 1, "tz-btn-lime"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], ["href", "tel:+919377697676", 1, "tz-btn-outline-white"], [1, "footer-main"], [1, "footer-grid"], [1, "footer-brand"], ["routerLink", "/", "aria-label", "Sync Bridge Home", 1, "footer-logo"], [1, "logo-tz"], [1, "logo-zone"], [1, "footer-desc"], [1, "footer-social"], ["href", "https://www.facebook.com/syncbridge", "target", "_blank", "rel", "noopener", "aria-label", "Facebook", 1, "social-icon"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"], ["href", "https://www.instagram.com/syncbridge", "target", "_blank", "rel", "noopener", "aria-label", "Instagram", 1, "social-icon"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "1", "fill", "currentColor", "stroke", "none"], ["href", "https://www.linkedin.com/company/syncbridge", "target", "_blank", "rel", "noopener", "aria-label", "LinkedIn", 1, "social-icon"], ["d", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], ["x", "2", "y", "9", "width", "4", "height", "12"], ["cx", "4", "cy", "4", "r", "2"], ["href", "https://twitter.com/syncbridge", "target", "_blank", "rel", "noopener", "aria-label", "Twitter / X", 1, "social-icon"], ["d", "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"], [1, "footer-col"], [1, "footer-col-title"], [1, "footer-contact"], ["href", "tel:+919377697676", 1, "footer-contact-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"], ["href", "mailto:info@syncbridge.in", 1, "footer-contact-item"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "footer-offices"], [1, "footer-office"], [1, "footer-bottom"], [1, "footer-copy"], [1, "footer-legal"], ["href", "#", 1, "footer-link"], [1, "footer-link", 3, "routerLink"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, FooterComponent_Conditional_0_Template, 82, 1, "footer", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isAdminRoute ? 0 : -1);
    }
  }, dependencies: [RouterLink], styles: ['\n.footer-cta-band[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green);\n  padding: 5rem 0;\n  position: relative;\n  overflow: hidden;\n}\n.footer-cta-band[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -5%;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 230, 61, 0.07) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.footer-cta-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.footer-cta-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(1.75rem, 4vw, 3rem);\n  font-weight: 800;\n  color: var(--tz-white);\n  letter-spacing: -0.03em;\n  margin-bottom: 0.5rem;\n}\n.footer-cta-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.6);\n}\n.footer-cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.footer-main[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green-2);\n  padding: 5rem 0 0;\n}\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1.5fr;\n  gap: 3rem;\n  margin-bottom: 4rem;\n}\n@media (max-width: 1100px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 2.5rem;\n  }\n}\n@media (max-width: 600px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.footer-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  margin-bottom: 1.25rem;\n}\n.footer-logo[_ngcontent-%COMP%]   .logo-tz[_ngcontent-%COMP%] {\n  color: var(--tz-white);\n}\n.footer-logo[_ngcontent-%COMP%]   .logo-zone[_ngcontent-%COMP%] {\n  color: var(--tz-lime);\n}\n.footer-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.5);\n  line-height: 1.75;\n  margin-bottom: 1.75rem;\n  max-width: 300px;\n}\n.footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.social-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.25s ease;\n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  border-color: var(--tz-lime);\n  color: var(--tz-lime);\n  background: rgba(168, 230, 61, 0.08);\n}\n.footer-col-title[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--tz-lime);\n  margin-bottom: 1.5rem;\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.footer-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.5);\n  transition: color 0.2s ease;\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  color: var(--tz-white);\n}\n.footer-contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.footer-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.5);\n  transition: color 0.2s ease;\n}\n.footer-contact-item[_ngcontent-%COMP%]:hover {\n  color: var(--tz-lime);\n}\n.footer-contact-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.footer-offices[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  margin-top: 0.5rem;\n}\n.footer-office[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.footer-office[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.75rem 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.footer-copy[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.35);\n}\n.footer-legal[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n.footer-legal[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink], template: `@if (!isAdminRoute) {\r
<footer class="footer" aria-label="Site footer">\r
  <!-- CTA Band -->\r
  <div class="footer-cta-band">\r
    <div class="container">\r
      <div class="footer-cta-inner">\r
        <div class="footer-cta-text">\r
          <h2>Let's Create History Together.</h2>\r
          <p>Start a story with Sync Bridge.</p>\r
        </div>\r
        <div class="footer-cta-actions">\r
          <a routerLink="/contact" class="tz-btn-lime">\r
            Start a Project\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
          </a>\r
          <a href="tel:+919377697676" class="tz-btn-outline-white">Talk to Us</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Main Footer -->\r
  <div class="footer-main">\r
    <div class="container">\r
      <div class="footer-grid">\r
        <!-- Brand -->\r
        <div class="footer-brand">\r
          <a routerLink="/" class="footer-logo" aria-label="Sync Bridge Home">\r
            <span class="logo-tz">SYNC</span><span class="logo-zone"> BRIDGE</span>\r
          </a>\r
          <p class="footer-desc">A full-service advertising and digital marketing agency combining strategy, creativity and technology to help brands grow and make an impact.</p>\r
          <div class="footer-social">\r
            <a href="https://www.facebook.com/syncbridge" target="_blank" rel="noopener" class="social-icon" aria-label="Facebook">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>\r
            </a>\r
            <a href="https://www.instagram.com/syncbridge" target="_blank" rel="noopener" class="social-icon" aria-label="Instagram">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>\r
            </a>\r
            <a href="https://www.linkedin.com/company/syncbridge" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>\r
            </a>\r
            <a href="https://twitter.com/syncbridge" target="_blank" rel="noopener" class="social-icon" aria-label="Twitter / X">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>\r
            </a>\r
          </div>\r
        </div>\r
\r
        <!-- Quick Links -->\r
        <div class="footer-col">\r
          <h3 class="footer-col-title">Quick Links</h3>\r
          <ul>\r
            @for (link of quickLinks; track link.path) {\r
              <li><a [routerLink]="link.path" class="footer-link">{{ link.label }}</a></li>\r
            }\r
          </ul>\r
        </div>\r
\r
        <!-- Services -->\r
        <div class="footer-col">\r
          <h3 class="footer-col-title">Services</h3>\r
          <ul>\r
            @for (link of serviceLinks; track link.label) {\r
              <li><a [routerLink]="link.path" class="footer-link">{{ link.label }}</a></li>\r
            }\r
          </ul>\r
        </div>\r
\r
        <!-- Contact -->\r
        <div class="footer-col">\r
          <h3 class="footer-col-title">Get In Touch</h3>\r
          <div class="footer-contact">\r
            <a href="tel:+919377697676" class="footer-contact-item">\r
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>\r
              +91-9377697676\r
            </a>\r
            <a href="mailto:info@syncbridge.in" class="footer-contact-item">\r
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>\r
              info&#64;syncbridge.in\r
            </a>\r
            <div class="footer-offices">\r
              @for (office of offices; track office.city) {\r
                <div class="footer-office">\r
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>\r
                  {{ office.city }}\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Bottom Bar -->\r
      <div class="footer-bottom">\r
        <p class="footer-copy">&copy; {{ year }} Sync Bridge. All rights reserved.</p>\r
        <div class="footer-legal">\r
          <a href="#" class="footer-link">Privacy Policy</a>\r
          <a href="#" class="footer-link">Legal Disclaimer</a>\r
          <a href="#" class="footer-link">Sitemap</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</footer>\r
}\r
`, styles: ['/* src/app/shared/components/footer/footer.component.scss */\n.footer-cta-band {\n  background: var(--tz-dark-green);\n  padding: 5rem 0;\n  position: relative;\n  overflow: hidden;\n}\n.footer-cta-band::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -5%;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 230, 61, 0.07) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.footer-cta-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.footer-cta-text h2 {\n  font-family: var(--font-heading);\n  font-size: clamp(1.75rem, 4vw, 3rem);\n  font-weight: 800;\n  color: var(--tz-white);\n  letter-spacing: -0.03em;\n  margin-bottom: 0.5rem;\n}\n.footer-cta-text p {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.6);\n}\n.footer-cta-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.footer-main {\n  background: var(--tz-dark-green-2);\n  padding: 5rem 0 0;\n}\n.footer-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1.5fr;\n  gap: 3rem;\n  margin-bottom: 4rem;\n}\n@media (max-width: 1100px) {\n  .footer-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 2.5rem;\n  }\n}\n@media (max-width: 600px) {\n  .footer-grid {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.footer-logo {\n  display: inline-flex;\n  align-items: baseline;\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  margin-bottom: 1.25rem;\n}\n.footer-logo .logo-tz {\n  color: var(--tz-white);\n}\n.footer-logo .logo-zone {\n  color: var(--tz-lime);\n}\n.footer-desc {\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.5);\n  line-height: 1.75;\n  margin-bottom: 1.75rem;\n  max-width: 300px;\n}\n.footer-social {\n  display: flex;\n  gap: 0.75rem;\n}\n.social-icon {\n  width: 36px;\n  height: 36px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.25s ease;\n}\n.social-icon:hover {\n  border-color: var(--tz-lime);\n  color: var(--tz-lime);\n  background: rgba(168, 230, 61, 0.08);\n}\n.footer-col-title {\n  font-family: var(--font-body);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--tz-lime);\n  margin-bottom: 1.5rem;\n}\n.footer-col ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.footer-link {\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.5);\n  transition: color 0.2s ease;\n}\n.footer-link:hover {\n  color: var(--tz-white);\n}\n.footer-contact {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.footer-contact-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.5);\n  transition: color 0.2s ease;\n}\n.footer-contact-item:hover {\n  color: var(--tz-lime);\n}\n.footer-contact-item svg {\n  flex-shrink: 0;\n}\n.footer-offices {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  margin-top: 0.5rem;\n}\n.footer-office {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.footer-office svg {\n  flex-shrink: 0;\n}\n.footer-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.75rem 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.footer-copy {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.35);\n}\n.footer-legal {\n  display: flex;\n  gap: 1.5rem;\n}\n.footer-legal .footer-link {\n  font-size: 0.78rem;\n}\n/*# sourceMappingURL=footer.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/components/footer/footer.component.ts", lineNumber: 11 });
})();

// src/app/app.ts
function App_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-navbar");
    \u0275\u0275elementStart(2, "main", 1);
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-footer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 3);
    \u0275\u0275element(7, "path", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("transitioning", ctx_r0.transitioning());
  }
}
function App_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var App = class _App {
  platformId = inject(PLATFORM_ID);
  scroll = inject(ScrollService);
  anim = inject(AnimationService);
  router = inject(Router);
  transitioning = signal(false, ...ngDevMode ? [{ debugName: "transitioning" }] : (
    /* istanbul ignore next */
    []
  ));
  isPublicRoute = signal(true, ...ngDevMode ? [{ debugName: "isPublicRoute" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.transitioning.set(true);
        const url = e.url;
        this.isPublicRoute.set(!url.startsWith("/admin") && !url.startsWith("/auth"));
      }
      if (e instanceof NavigationEnd) {
        const url = e.urlAfterRedirects;
        this.isPublicRoute.set(!url.startsWith("/admin") && !url.startsWith("/auth"));
        window.scrollTo(0, 0);
        setTimeout(() => {
          this.transitioning.set(false);
          if (this.isPublicRoute())
            this.anim.observeAll();
        }, 100);
      }
    });
    if (this.isPublicRoute()) {
      this.scroll.init();
      this.anim.initReveal();
      setTimeout(() => this.anim.observeAll());
    }
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[1, "app-shell"], ["id", "main-content"], ["href", "https://wa.me/919377697676", "target", "_blank", "rel", "noopener", "aria-label", "Chat with Sync Bridge on WhatsApp", 1, "floating-whatsapp"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, App_Conditional_0_Template, 8, 2)(1, App_Conditional_1_Template, 1, 0, "router-outlet");
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isPublicRoute() ? 0 : 1);
    }
  }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], styles: ["\n.app-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--tz-white);\n}\n.app-shell.transitioning[_ngcontent-%COMP%] {\n  opacity: 0.96;\n  transition: opacity 0.2s ease;\n}\n.floating-whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  z-index: 900;\n  width: 52px;\n  height: 52px;\n  background: #25d366;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.floating-whatsapp[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 8px 28px rgba(37, 211, 102, 0.5);\n}\n@media (max-width: 480px) {\n  .floating-whatsapp[_ngcontent-%COMP%] {\n    bottom: 1.25rem;\n    right: 1.25rem;\n    width: 46px;\n    height: 46px;\n  }\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, NavbarComponent, FooterComponent], template: '@if (isPublicRoute()) {\r\n  <div class="app-shell" [class.transitioning]="transitioning()">\r\n    <app-navbar />\r\n    <main id="main-content">\r\n      <router-outlet />\r\n    </main>\r\n    <app-footer />\r\n  </div>\r\n  <!-- WhatsApp Floating CTA -->\r\n  <a href="https://wa.me/919377697676" target="_blank" rel="noopener" class="floating-whatsapp" aria-label="Chat with Sync Bridge on WhatsApp">\r\n    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>\r\n  </a>\r\n} @else {\r\n  <router-outlet />\r\n}\r\n', styles: ["/* src/app/app.scss */\n.app-shell {\n  min-height: 100vh;\n  background: var(--tz-white);\n}\n.app-shell.transitioning {\n  opacity: 0.96;\n  transition: opacity 0.2s ease;\n}\n.floating-whatsapp {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  z-index: 900;\n  width: 52px;\n  height: 52px;\n  background: #25d366;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.floating-whatsapp:hover {\n  transform: scale(1.1);\n  box-shadow: 0 8px 28px rgba(37, 211, 102, 0.5);\n}\n@media (max-width: 480px) {\n  .floating-whatsapp {\n    bottom: 1.25rem;\n    right: 1.25rem;\n    width: 46px;\n    height: 46px;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
