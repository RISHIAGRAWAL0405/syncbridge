import {
  AuthService
} from "./chunk-ZPKSFRP3.js";
import {
  Router,
  RouterLink
} from "./chunk-FPVJX4FZ.js";
import "./chunk-337B7NGF.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
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
  NgIf,
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
  ɵɵtextInterpolate1
} from "./chunk-U2WXL5OW.js";
import "./chunk-GOMI4DH3.js";

// src/app/auth/login/login.component.ts
function LoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 27);
    \u0275\u0275listener("click", function LoginComponent_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function LoginComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  auth;
  router;
  cdr = inject(ChangeDetectorRef);
  form;
  loading = false;
  error = "";
  showPassword = false;
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.form = this.fb.group({
      user_name: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    this.auth.login(this.form.value).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.statusCode === 200) {
          this.router.navigate(["/admin/dashboard"]);
        } else {
          this.error = res.errorMessage || "Login failed";
        }
        this.notifyView();
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.errorMessage || "Invalid credentials";
        this.notifyView();
      }
    });
  }
  get f() {
    return this.form.controls;
  }
  notifyView() {
    this.cdr.markForCheck();
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 37, vars: 14, consts: [[1, "auth-wrapper", "d-flex", "align-items-center", "justify-content-center", "min-vh-100"], [1, "auth-card", "card", "shadow-lg", "border-0", "p-4", "p-md-5"], [1, "text-center", "mb-4"], [1, "auth-logo", "mb-3"], [1, "bi", "bi-shield-lock-fill", "text-primary", 2, "font-size", "2.5rem"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small"], ["class", "alert alert-danger alert-dismissible py-2 small", "role", "alert", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label", "fw-semibold", "small"], [1, "input-group"], [1, "input-group-text", "bg-light", "border-end-0"], [1, "bi", "bi-person", "text-muted"], ["type", "text", "formControlName", "user_name", "placeholder", "Enter username", 1, "form-control", "border-start-0", "ps-0"], [1, "invalid-feedback"], [1, "mb-4"], [1, "bi", "bi-lock", "text-muted"], ["formControlName", "password", "placeholder", "Enter password", 1, "form-control", "border-start-0", "border-end-0", "ps-0", 3, "type"], ["type", "button", 1, "input-group-text", "bg-light", "border-start-0", 3, "click"], [1, "text-muted"], [1, "d-flex", "justify-content-end", "mb-3"], ["routerLink", "/auth/forgot-password", 1, "text-primary", "small", "text-decoration-none"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2", "fw-semibold", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "py-2", "small"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h4", 5);
      \u0275\u0275text(6, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Sign in to your account");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, LoginComponent_div_9_Template, 4, 1, "div", 7);
      \u0275\u0275elementStart(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(11, "div", 9)(12, "label", 10);
      \u0275\u0275text(13, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "span", 12);
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 14);
      \u0275\u0275elementStart(18, "div", 15);
      \u0275\u0275text(19, "Username is required");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 16)(21, "label", 10);
      \u0275\u0275text(22, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11)(24, "span", 12);
      \u0275\u0275element(25, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 18);
      \u0275\u0275elementStart(27, "button", 19);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_27_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275element(28, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 15);
      \u0275\u0275text(30, "Password is required");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 21)(32, "a", 22);
      \u0275\u0275text(33, "Forgot password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "button", 23);
      \u0275\u0275template(35, LoginComponent_span_35_Template, 1, 0, "span", 24);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["user_name"].invalid && ctx.f["user_name"].touched);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-invalid", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bi-eye", !ctx.showPassword)("bi-eye-slash", ctx.showPassword);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Signing in..." : "Sign In", " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="auth-wrapper d-flex align-items-center justify-content-center min-vh-100">\r
  <div class="auth-card card shadow-lg border-0 p-4 p-md-5">\r
    <div class="text-center mb-4">\r
      <div class="auth-logo mb-3">\r
        <i class="bi bi-shield-lock-fill text-primary" style="font-size:2.5rem"></i>\r
      </div>\r
      <h4 class="fw-bold mb-1">Welcome Back</h4>\r
      <p class="text-muted small">Sign in to your account</p>\r
    </div>\r
\r
    <div *ngIf="error" class="alert alert-danger alert-dismissible py-2 small" role="alert">\r
      <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ error }}\r
      <button type="button" class="btn-close btn-close-sm" (click)="error=''"></button>\r
    </div>\r
\r
    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>\r
      <div class="mb-3">\r
        <label class="form-label fw-semibold small">Username</label>\r
        <div class="input-group">\r
          <span class="input-group-text bg-light border-end-0">\r
            <i class="bi bi-person text-muted"></i>\r
          </span>\r
          <input type="text" class="form-control border-start-0 ps-0"\r
            formControlName="user_name" placeholder="Enter username"\r
            [class.is-invalid]="f['user_name'].invalid && f['user_name'].touched">\r
          <div class="invalid-feedback">Username is required</div>\r
        </div>\r
      </div>\r
\r
      <div class="mb-4">\r
        <label class="form-label fw-semibold small">Password</label>\r
        <div class="input-group">\r
          <span class="input-group-text bg-light border-end-0">\r
            <i class="bi bi-lock text-muted"></i>\r
          </span>\r
          <input [type]="showPassword ? 'text' : 'password'" class="form-control border-start-0 border-end-0 ps-0"\r
            formControlName="password" placeholder="Enter password"\r
            [class.is-invalid]="f['password'].invalid && f['password'].touched">\r
          <button type="button" class="input-group-text bg-light border-start-0" (click)="showPassword=!showPassword">\r
            <i class="bi" [class.bi-eye]="!showPassword" [class.bi-eye-slash]="showPassword" class="text-muted"></i>\r
          </button>\r
          <div class="invalid-feedback">Password is required</div>\r
        </div>\r
      </div>\r
\r
      <div class="d-flex justify-content-end mb-3">\r
        <a routerLink="/auth/forgot-password" class="text-primary small text-decoration-none">Forgot password?</a>\r
      </div>\r
\r
      <button type="submit" class="btn btn-primary w-100 py-2 fw-semibold" [disabled]="loading">\r
        <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
        {{ loading ? 'Signing in...' : 'Sign In' }}\r
      </button>\r
    </form>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 13 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-P7UYNCZQ.js.map
