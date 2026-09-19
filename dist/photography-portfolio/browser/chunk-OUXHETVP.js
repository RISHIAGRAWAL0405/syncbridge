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
} from "./chunk-DSYNY4LS.js";
import {
  AuthService
} from "./chunk-DQBTYOFC.js";
import "./chunk-2UTZUB6A.js";
import {
  Router,
  RouterLink
} from "./chunk-RBKBNWPP.js";
import "./chunk-5BILWADD.js";
import "./chunk-WWIHBCUC.js";
import {
  CommonModule,
  NgIf
} from "./chunk-URCQYAQL.js";
import {
  ChangeDetectorRef,
  Component,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CQ3CZWR7.js";
import "./chunk-GOMI4DH3.js";

// src/app/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error, " ");
  }
}
function ForgotPasswordComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb;
  auth;
  router;
  cdr = inject(ChangeDetectorRef);
  form;
  loading = false;
  error = "";
  success = "";
  userId = "";
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.form = this.fb.group({ user_name: ["", Validators.required] });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    this.auth.forgotPassword(this.form.value).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.statusCode === 200 && res.data) {
          this.userId = res.data.user_id;
          this.router.navigate(["/auth/reset-password"], { queryParams: { user_id: this.userId } });
        } else {
          this.error = res.errorMessage || "Failed to send OTP";
        }
        this.notifyView();
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.errorMessage || "User not found";
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
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 27, vars: 7, consts: [[1, "auth-wrapper", "d-flex", "align-items-center", "justify-content-center", "min-vh-100"], [1, "auth-card", "card", "shadow-lg", "border-0", "p-4", "p-md-5"], [1, "text-center", "mb-4"], [1, "auth-logo", "mb-3"], [1, "bi", "bi-envelope-lock-fill", "text-primary", 2, "font-size", "2.5rem"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small"], ["class", "alert alert-danger py-2 small", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-4"], [1, "form-label", "fw-semibold", "small"], [1, "input-group"], [1, "input-group-text", "bg-light", "border-end-0"], [1, "bi", "bi-person", "text-muted"], ["type", "text", "formControlName", "user_name", "placeholder", "Enter your username", 1, "form-control", "border-start-0", "ps-0"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2", "fw-semibold", "mb-3", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "text-center"], ["routerLink", "/auth/login", 1, "text-muted", "small", "text-decoration-none"], [1, "bi", "bi-arrow-left", "me-1"], [1, "alert", "alert-danger", "py-2", "small"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h4", 5);
      \u0275\u0275text(6, "Forgot Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Enter your username to receive a reset OTP");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ForgotPasswordComponent_div_9_Template, 3, 1, "div", 7);
      \u0275\u0275elementStart(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_10_listener() {
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
      \u0275\u0275elementStart(20, "button", 16);
      \u0275\u0275template(21, ForgotPasswordComponent_span_21_Template, 1, 0, "span", 17);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 18)(24, "a", 19);
      \u0275\u0275element(25, "i", 20);
      \u0275\u0275text(26, "Back to Login ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["user_name"].invalid && ctx.f["user_name"].touched);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Sending OTP..." : "Send OTP", " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="auth-wrapper d-flex align-items-center justify-content-center min-vh-100">\r
  <div class="auth-card card shadow-lg border-0 p-4 p-md-5">\r
    <div class="text-center mb-4">\r
      <div class="auth-logo mb-3">\r
        <i class="bi bi-envelope-lock-fill text-primary" style="font-size:2.5rem"></i>\r
      </div>\r
      <h4 class="fw-bold mb-1">Forgot Password</h4>\r
      <p class="text-muted small">Enter your username to receive a reset OTP</p>\r
    </div>\r
\r
    <div *ngIf="error" class="alert alert-danger py-2 small">\r
      <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ error }}\r
    </div>\r
\r
    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>\r
      <div class="mb-4">\r
        <label class="form-label fw-semibold small">Username</label>\r
        <div class="input-group">\r
          <span class="input-group-text bg-light border-end-0">\r
            <i class="bi bi-person text-muted"></i>\r
          </span>\r
          <input type="text" class="form-control border-start-0 ps-0"\r
            formControlName="user_name" placeholder="Enter your username"\r
            [class.is-invalid]="f['user_name'].invalid && f['user_name'].touched">\r
          <div class="invalid-feedback">Username is required</div>\r
        </div>\r
      </div>\r
\r
      <button type="submit" class="btn btn-primary w-100 py-2 fw-semibold mb-3" [disabled]="loading">\r
        <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
        {{ loading ? 'Sending OTP...' : 'Send OTP' }}\r
      </button>\r
\r
      <div class="text-center">\r
        <a routerLink="/auth/login" class="text-muted small text-decoration-none">\r
          <i class="bi bi-arrow-left me-1"></i>Back to Login\r
        </a>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/auth/forgot-password/forgot-password.component.ts", lineNumber: 13 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-OUXHETVP.js.map
