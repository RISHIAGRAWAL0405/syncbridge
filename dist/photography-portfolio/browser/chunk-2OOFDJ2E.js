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
  ActivatedRoute,
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

// src/app/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error, " ");
  }
}
function ResetPasswordComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.success, " ");
  }
}
function ResetPasswordComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Minimum 6 characters");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb;
  auth;
  router;
  route;
  cdr = inject(ChangeDetectorRef);
  form;
  loading = false;
  error = "";
  success = "";
  userId = "";
  constructor(fb, auth, router, route) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.route = route;
    this.form = this.fb.group({
      otp_code: ["", Validators.required],
      new_password: ["", [Validators.required, Validators.minLength(6)]],
      confirm_password: ["", Validators.required]
    }, { validators: this.passwordMatch });
  }
  ngOnInit() {
    this.userId = this.route.snapshot.queryParamMap.get("user_id") || "";
  }
  passwordMatch(group) {
    const p = group.get("new_password")?.value;
    const c = group.get("confirm_password")?.value;
    return p === c ? null : { mismatch: true };
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    this.auth.resetPassword({
      user_id: this.userId,
      otp_code: this.form.value.otp_code,
      new_password: this.form.value.new_password
    }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.statusCode === 200) {
          this.success = "Password reset successfully!";
          setTimeout(() => this.router.navigate(["/auth/login"]), 2e3);
        } else {
          this.error = res.errorMessage || "Reset failed";
        }
        this.notifyView();
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.errorMessage || "Invalid OTP or expired";
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
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 38, vars: 14, consts: [[1, "auth-wrapper", "d-flex", "align-items-center", "justify-content-center", "min-vh-100"], [1, "auth-card", "card", "shadow-lg", "border-0", "p-4", "p-md-5"], [1, "text-center", "mb-4"], [1, "auth-logo", "mb-3"], [1, "bi", "bi-key-fill", "text-primary", 2, "font-size", "2.5rem"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small"], ["class", "alert alert-danger py-2 small", 4, "ngIf"], ["class", "alert alert-success py-2 small", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label", "fw-semibold", "small"], ["type", "text", "formControlName", "otp_code", "placeholder", "Enter OTP", 1, "form-control"], [1, "invalid-feedback"], ["type", "password", "formControlName", "new_password", "placeholder", "Min 6 characters", 1, "form-control"], [4, "ngIf"], [1, "mb-4"], ["type", "password", "formControlName", "confirm_password", "placeholder", "Repeat password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "py-2", "fw-semibold", "mb-3", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "text-center"], ["routerLink", "/auth/login", 1, "text-muted", "small", "text-decoration-none"], [1, "bi", "bi-arrow-left", "me-1"], [1, "alert", "alert-danger", "py-2", "small"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], [1, "alert", "alert-success", "py-2", "small"], [1, "bi", "bi-check-circle-fill", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h4", 5);
      \u0275\u0275text(6, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Enter the OTP sent to your email");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ResetPasswordComponent_div_9_Template, 3, 1, "div", 7)(10, ResetPasswordComponent_div_10_Template, 3, 1, "div", 8);
      \u0275\u0275elementStart(11, "form", 9);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_11_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(12, "div", 10)(13, "label", 11);
      \u0275\u0275text(14, "OTP Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 12);
      \u0275\u0275elementStart(16, "div", 13);
      \u0275\u0275text(17, "OTP is required");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 10)(19, "label", 11);
      \u0275\u0275text(20, "New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 14);
      \u0275\u0275elementStart(22, "div", 13);
      \u0275\u0275template(23, ResetPasswordComponent_span_23_Template, 2, 0, "span", 15)(24, ResetPasswordComponent_span_24_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 16)(26, "label", 11);
      \u0275\u0275text(27, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 17);
      \u0275\u0275elementStart(29, "div", 13);
      \u0275\u0275text(30, "Passwords do not match");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "button", 18);
      \u0275\u0275template(32, ResetPasswordComponent_span_32_Template, 1, 0, "span", 19);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 20)(35, "a", 21);
      \u0275\u0275element(36, "i", 22);
      \u0275\u0275text(37, "Back to Login ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.f["otp_code"].invalid && ctx.f["otp_code"].touched);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-invalid", ctx.f["new_password"].invalid && ctx.f["new_password"].touched);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.f["new_password"].errors == null ? null : ctx.f["new_password"].errors["required"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["new_password"].errors == null ? null : ctx.f["new_password"].errors["minlength"]);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.f["confirm_password"].invalid && ctx.f["confirm_password"].touched || (ctx.form.errors == null ? null : ctx.form.errors["mismatch"]) && ctx.f["confirm_password"].touched);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Resetting..." : "Reset Password", " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="auth-wrapper d-flex align-items-center justify-content-center min-vh-100">\r
  <div class="auth-card card shadow-lg border-0 p-4 p-md-5">\r
    <div class="text-center mb-4">\r
      <div class="auth-logo mb-3">\r
        <i class="bi bi-key-fill text-primary" style="font-size:2.5rem"></i>\r
      </div>\r
      <h4 class="fw-bold mb-1">Reset Password</h4>\r
      <p class="text-muted small">Enter the OTP sent to your email</p>\r
    </div>\r
\r
    <div *ngIf="error" class="alert alert-danger py-2 small">\r
      <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ error }}\r
    </div>\r
    <div *ngIf="success" class="alert alert-success py-2 small">\r
      <i class="bi bi-check-circle-fill me-2"></i>{{ success }}\r
    </div>\r
\r
    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>\r
      <div class="mb-3">\r
        <label class="form-label fw-semibold small">OTP Code</label>\r
        <input type="text" class="form-control" formControlName="otp_code" placeholder="Enter OTP"\r
          [class.is-invalid]="f['otp_code'].invalid && f['otp_code'].touched">\r
        <div class="invalid-feedback">OTP is required</div>\r
      </div>\r
\r
      <div class="mb-3">\r
        <label class="form-label fw-semibold small">New Password</label>\r
        <input type="password" class="form-control" formControlName="new_password" placeholder="Min 6 characters"\r
          [class.is-invalid]="f['new_password'].invalid && f['new_password'].touched">\r
        <div class="invalid-feedback">\r
          <span *ngIf="f['new_password'].errors?.['required']">Password is required</span>\r
          <span *ngIf="f['new_password'].errors?.['minlength']">Minimum 6 characters</span>\r
        </div>\r
      </div>\r
\r
      <div class="mb-4">\r
        <label class="form-label fw-semibold small">Confirm Password</label>\r
        <input type="password" class="form-control" formControlName="confirm_password" placeholder="Repeat password"\r
          [class.is-invalid]="(f['confirm_password'].invalid && f['confirm_password'].touched) || (form.errors?.['mismatch'] && f['confirm_password'].touched)">\r
        <div class="invalid-feedback">Passwords do not match</div>\r
      </div>\r
\r
      <button type="submit" class="btn btn-primary w-100 py-2 fw-semibold mb-3" [disabled]="loading">\r
        <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
        {{ loading ? 'Resetting...' : 'Reset Password' }}\r
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
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/auth/reset-password/reset-password.component.ts", lineNumber: 13 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-2OOFDJ2E.js.map
