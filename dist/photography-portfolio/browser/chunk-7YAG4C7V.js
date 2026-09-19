import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-WRIZPPGJ.js";
import {
  API_ENDPOINTS,
  ApiService,
  environment
} from "./chunk-XLVCVILN.js";
import "./chunk-Q3L5OJPP.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  Injectable,
  NgIf,
  finalize,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-U2WXL5OW.js";
import "./chunk-GOMI4DH3.js";

// src/app/core/services/profile.service.ts
var ProfileService = class _ProfileService {
  api;
  constructor(api) {
    this.api = api;
  }
  getMyProfile() {
    return this.api.get(API_ENDPOINTS.MY_PROFILE.GET);
  }
  updateProfileDetails(request) {
    return this.api.put(API_ENDPOINTS.MY_PROFILE.UPDATE_DETAILS, request);
  }
  updateProfileImage(file) {
    const formData = new FormData();
    if (file)
      formData.append("ProfileImage", file);
    return this.api.postFormData(API_ENDPOINTS.MY_PROFILE.UPDATE_IMAGE, formData);
  }
  updateProfileBanner(file) {
    const formData = new FormData();
    if (file)
      formData.append("Profilebanner", file);
    return this.api.postFormData(API_ENDPOINTS.MY_PROFILE.UPDATE_BANNER, formData);
  }
  changePassword(request) {
    return this.api.post(API_ENDPOINTS.MY_PROFILE.CHANGE_PASSWORD, request);
  }
  updateOnlineStatus(status) {
    return this.api.put(API_ENDPOINTS.MY_PROFILE.UPDATE_ONLINE_STATUS, { online_status: status });
  }
  updateStatusMessage(message) {
    return this.api.put(API_ENDPOINTS.MY_PROFILE.UPDATE_STATUS_MESSAGE, { status_message: message });
  }
  static \u0275fac = function ProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

// src/app/admin/profile/profile.component.ts
function ProfileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function ProfileComponent_div_5_Template_button_click_3_listener() {
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
function ProfileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function ProfileComponent_div_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
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
function ProfileComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initials, " ");
  }
}
function ProfileComponent_div_8_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.baseUrl + ctx_r1.profile.profile_img_url, \u0275\u0275sanitizeUrl);
  }
}
function ProfileComponent_div_8_form_35_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 52);
  }
}
function ProfileComponent_div_8_form_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 40);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_div_8_form_35_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveDetails());
    });
    \u0275\u0275elementStart(1, "div", 41)(2, "div", 42)(3, "label", 43);
    \u0275\u0275text(4, "First Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 44);
    \u0275\u0275elementStart(6, "div", 45);
    \u0275\u0275text(7, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "label", 43);
    \u0275\u0275text(10, "Last Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 46);
    \u0275\u0275elementStart(12, "div", 45);
    \u0275\u0275text(13, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 42)(15, "label", 43);
    \u0275\u0275text(16, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 47);
    \u0275\u0275elementStart(18, "div", 45);
    \u0275\u0275text(19, "Valid email required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 42)(21, "label", 43);
    \u0275\u0275text(22, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 49)(25, "button", 50);
    \u0275\u0275template(26, ProfileComponent_div_8_form_35_span_26_Template, 1, 0, "span", 51);
    \u0275\u0275text(27, "Save Changes ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.detailsForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.df["first_name"].invalid && ctx_r1.df["first_name"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.df["last_name"].invalid && ctx_r1.df["last_name"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.df["email"].invalid && ctx_r1.df["email"].touched);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
  }
}
function ProfileComponent_div_8_form_36_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 52);
  }
}
function ProfileComponent_div_8_form_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 40);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_div_8_form_36_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePassword());
    });
    \u0275\u0275elementStart(1, "div", 53)(2, "div", 54)(3, "label", 43);
    \u0275\u0275text(4, "Current Password *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 55);
    \u0275\u0275elementStart(6, "div", 45);
    \u0275\u0275text(7, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 54)(9, "label", 43);
    \u0275\u0275text(10, "New Password *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 56);
    \u0275\u0275elementStart(12, "div", 45);
    \u0275\u0275text(13, "Min 6 characters");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 54)(15, "label", 43);
    \u0275\u0275text(16, "Confirm Password *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 57);
    \u0275\u0275elementStart(18, "div", 45);
    \u0275\u0275text(19, "Passwords do not match");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 49)(21, "button", 50);
    \u0275\u0275template(22, ProfileComponent_div_8_form_36_span_22_Template, 1, 0, "span", 51);
    \u0275\u0275text(23, "Change Password ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.passwordForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.pf["old_password"].invalid && ctx_r1.pf["old_password"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.pf["new_password"].invalid && ctx_r1.pf["new_password"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.pf["confirm_password"].touched && (ctx_r1.passwordForm.errors == null ? null : ctx_r1.passwordForm.errors["mismatch"]));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
  }
}
function ProfileComponent_div_8_form_37_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 52);
  }
}
function ProfileComponent_div_8_form_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 40);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_div_8_form_37_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateStatus());
    });
    \u0275\u0275elementStart(1, "div", 53)(2, "div", 54)(3, "label", 43);
    \u0275\u0275text(4, "Online Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 58)(6, "option", 59);
    \u0275\u0275text(7, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 60);
    \u0275\u0275text(9, "Away");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 61);
    \u0275\u0275text(11, "Busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 62);
    \u0275\u0275text(13, "Offline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 54)(15, "label", 43);
    \u0275\u0275text(16, "Status Message");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 49)(19, "button", 50);
    \u0275\u0275template(20, ProfileComponent_div_8_form_37_span_20_Template, 1, 0, "span", 51);
    \u0275\u0275text(21, "Update Status ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.statusForm);
    \u0275\u0275advance(19);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
  }
}
function ProfileComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275template(4, ProfileComponent_div_8_div_4_Template, 2, 1, "div", 18)(5, ProfileComponent_div_8_img_5_Template, 1, 1, "img", 19);
    \u0275\u0275elementStart(6, "label", 20);
    \u0275\u0275element(7, "i", 21);
    \u0275\u0275elementStart(8, "input", 22);
    \u0275\u0275listener("change", function ProfileComponent_div_8_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "h6", 1);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24)(14, "span", 25);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 26);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 27)(19, "div", 28)(20, "div", 29)(21, "ul", 30)(22, "li", 31)(23, "button", 32);
    \u0275\u0275listener("click", function ProfileComponent_div_8_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "details");
    });
    \u0275\u0275element(24, "i", 33);
    \u0275\u0275text(25, "Details ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li", 31)(27, "button", 32);
    \u0275\u0275listener("click", function ProfileComponent_div_8_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "password");
    });
    \u0275\u0275element(28, "i", 34);
    \u0275\u0275text(29, "Password ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li", 31)(31, "button", 32);
    \u0275\u0275listener("click", function ProfileComponent_div_8_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "status");
    });
    \u0275\u0275element(32, "i", 35);
    \u0275\u0275text(33, "Status ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 36);
    \u0275\u0275template(35, ProfileComponent_div_8_form_35_Template, 28, 9, "form", 37)(36, ProfileComponent_div_8_form_36_Template, 24, 9, "form", 37)(37, ProfileComponent_div_8_form_37_Template, 22, 3, "form", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.profile.profile_img_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.profile.profile_img_url);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.profile.first_name, " ", ctx_r1.profile.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profile.user_type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.profile.online_status || "ONLINE");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profile.email);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "details");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "password");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "status");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "details");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "password");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "status");
  }
}
var ProfileComponent = class _ProfileComponent {
  profileService;
  fb;
  cdr = inject(ChangeDetectorRef);
  profile = null;
  loading = true;
  saving = false;
  error = "";
  success = "";
  activeTab = "details";
  detailsForm;
  passwordForm;
  statusForm;
  baseUrl = environment.apiBaseUrl.replace("/api", "");
  constructor(profileService, fb) {
    this.profileService = profileService;
    this.fb = fb;
    this.detailsForm = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobile: [""],
      profile_url: [""]
    });
    this.passwordForm = this.fb.group({
      old_password: ["", Validators.required],
      new_password: ["", [Validators.required, Validators.minLength(6)]],
      confirm_password: ["", Validators.required]
    }, { validators: this.passwordMatch });
    this.statusForm = this.fb.group({
      online_status: [""],
      status_message: [""]
    });
  }
  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    this.loading = true;
    this.profileService.getMyProfile().pipe(finalize(() => this.finishLoading())).subscribe({
      next: (r) => {
        if (r.data) {
          this.profile = r.data;
          this.detailsForm.patchValue(r.data);
          this.statusForm.patchValue(r.data);
        }
        this.notifyView();
      }
    });
  }
  saveDetails() {
    if (this.detailsForm.invalid) {
      this.detailsForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.profileService.updateProfileDetails(this.detailsForm.value).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = "Profile updated";
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || "Failed";
        }
        this.notifyView();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.errorMessage || "Failed";
        this.notifyView();
      }
    });
  }
  changePassword() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.profileService.changePassword({
      old_password: this.passwordForm.value.old_password,
      new_password: this.passwordForm.value.new_password
    }).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.statusCode === 200) {
          this.success = "Password changed";
          this.passwordForm.reset();
          this.clearSuccessLater();
        } else {
          this.error = res.errorMessage || "Failed";
        }
        this.notifyView();
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.errorMessage || "Failed";
        this.notifyView();
      }
    });
  }
  updateStatus() {
    this.saving = true;
    const { online_status, status_message } = this.statusForm.value;
    const obs1 = this.profileService.updateOnlineStatus(online_status);
    const obs2 = this.profileService.updateStatusMessage(status_message);
    obs1.subscribe();
    obs2.subscribe({
      next: () => {
        this.saving = false;
        this.success = "Status updated";
        this.clearSuccessLater();
        this.notifyView();
      },
      error: () => {
        this.saving = false;
        this.notifyView();
      }
    });
  }
  onImageChange(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.profileService.updateProfileImage(file).subscribe({
      next: (res) => {
        if (res.data?.profileUrl)
          this.loadProfile();
        this.notifyView();
      }
    });
  }
  passwordMatch(group) {
    const p = group.get("new_password")?.value;
    const c = group.get("confirm_password")?.value;
    return p === c ? null : { mismatch: true };
  }
  get initials() {
    if (!this.profile)
      return "U";
    return `${this.profile.first_name?.charAt(0) || ""}${this.profile.last_name?.charAt(0) || ""}`.toUpperCase();
  }
  get df() {
    return this.detailsForm.controls;
  }
  get pf() {
    return this.passwordForm.controls;
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
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 9, vars: 4, consts: [[1, "page-header", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], ["class", "alert alert-success alert-dismissible py-2 small", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible py-2 small", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "py-2", "small"], [1, "bi", "bi-check-circle-fill", "me-2"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "py-2", "small"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", "spinner-border-sm"], [1, "row", "g-4"], [1, "col-md-3"], [1, "card", "border-0", "shadow-sm", "text-center", "p-4"], [1, "position-relative", "d-inline-block", "mx-auto", "mb-3"], ["class", "avatar-lg bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-3 mx-auto", 4, "ngIf"], ["class", "rounded-circle avatar-lg object-fit-cover", "alt", "Profile", 3, "src", 4, "ngIf"], [1, "btn", "btn-sm", "btn-primary", "position-absolute", "bottom-0", "end-0", "rounded-circle", "p-1", 2, "width", "28px", "height", "28px", "cursor", "pointer"], [1, "bi", "bi-camera-fill", 2, "font-size", "0.7rem"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], [1, "text-muted", "small"], [1, "mt-2"], [1, "badge", "bg-success-subtle", "text-success", "small"], [1, "mt-2", "text-muted", "small"], [1, "col-md-9"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "bg-white", "border-bottom"], [1, "nav", "nav-tabs", "card-header-tabs"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "bi", "bi-person", "me-1"], [1, "bi", "bi-lock", "me-1"], [1, "bi", "bi-circle-fill", "me-1"], [1, "card-body"], ["novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "avatar-lg", "bg-primary", "text-white", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "fw-bold", "fs-3", "mx-auto"], ["alt", "Profile", 1, "rounded-circle", "avatar-lg", "object-fit-cover", 3, "src"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-6"], [1, "form-label", "small", "fw-semibold"], ["type", "text", "formControlName", "first_name", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], ["type", "text", "formControlName", "last_name", 1, "form-control", "form-control-sm"], ["type", "email", "formControlName", "email", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "mobile", 1, "form-control", "form-control-sm"], [1, "d-flex", "justify-content-end", "mt-4"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "row", "g-3", 2, "max-width", "400px"], [1, "col-12"], ["type", "password", "formControlName", "old_password", 1, "form-control", "form-control-sm"], ["type", "password", "formControlName", "new_password", 1, "form-control", "form-control-sm"], ["type", "password", "formControlName", "confirm_password", 1, "form-control", "form-control-sm"], ["formControlName", "online_status", 1, "form-select", "form-select-sm"], ["value", "ONLINE"], ["value", "AWAY"], ["value", "BUSY"], ["value", "OFFLINE"], ["type", "text", "formControlName", "status_message", "placeholder", "What are you up to?", 1, "form-control", "form-control-sm"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "My Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Manage your account settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, ProfileComponent_div_5_Template, 4, 1, "div", 3)(6, ProfileComponent_div_6_Template, 4, 1, "div", 4)(7, ProfileComponent_div_7_Template, 2, 0, "div", 5)(8, ProfileComponent_div_8_Template, 38, 16, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.profile);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="page-header mb-4">\r
  <h5 class="fw-bold mb-0">My Profile</h5>\r
  <p class="text-muted small mb-0">Manage your account settings</p>\r
</div>\r
\r
<div *ngIf="success" class="alert alert-success alert-dismissible py-2 small">\r
  <i class="bi bi-check-circle-fill me-2"></i>{{ success }}\r
  <button type="button" class="btn-close btn-close-sm" (click)="success=''"></button>\r
</div>\r
<div *ngIf="error" class="alert alert-danger alert-dismissible py-2 small">\r
  <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ error }}\r
  <button type="button" class="btn-close btn-close-sm" (click)="error=''"></button>\r
</div>\r
\r
<div *ngIf="loading" class="text-center py-5">\r
  <div class="spinner-border text-primary spinner-border-sm"></div>\r
</div>\r
\r
<div *ngIf="!loading && profile" class="row g-4">\r
  <!-- Profile Card -->\r
  <div class="col-md-3">\r
    <div class="card border-0 shadow-sm text-center p-4">\r
      <div class="position-relative d-inline-block mx-auto mb-3">\r
        <div *ngIf="!profile.profile_img_url" class="avatar-lg bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-3 mx-auto">\r
          {{ initials }}\r
        </div>\r
        <img *ngIf="profile.profile_img_url" [src]="baseUrl + profile.profile_img_url" class="rounded-circle avatar-lg object-fit-cover" alt="Profile">\r
        <label class="btn btn-sm btn-primary position-absolute bottom-0 end-0 rounded-circle p-1" style="width:28px;height:28px;cursor:pointer">\r
          <i class="bi bi-camera-fill" style="font-size:0.7rem"></i>\r
          <input type="file" class="d-none" accept="image/*" (change)="onImageChange($event)">\r
        </label>\r
      </div>\r
      <h6 class="fw-bold mb-0">{{ profile.first_name }} {{ profile.last_name }}</h6>\r
      <div class="text-muted small">{{ profile.user_type }}</div>\r
      <div class="mt-2">\r
        <span class="badge bg-success-subtle text-success small">{{ profile.online_status || 'ONLINE' }}</span>\r
      </div>\r
      <div class="mt-2 text-muted small">{{ profile.email }}</div>\r
    </div>\r
  </div>\r
\r
  <!-- Tabs -->\r
  <div class="col-md-9">\r
    <div class="card border-0 shadow-sm">\r
      <div class="card-header bg-white border-bottom">\r
        <ul class="nav nav-tabs card-header-tabs">\r
          <li class="nav-item">\r
            <button class="nav-link" [class.active]="activeTab==='details'" (click)="activeTab='details'">\r
              <i class="bi bi-person me-1"></i>Details\r
            </button>\r
          </li>\r
          <li class="nav-item">\r
            <button class="nav-link" [class.active]="activeTab==='password'" (click)="activeTab='password'">\r
              <i class="bi bi-lock me-1"></i>Password\r
            </button>\r
          </li>\r
          <li class="nav-item">\r
            <button class="nav-link" [class.active]="activeTab==='status'" (click)="activeTab='status'">\r
              <i class="bi bi-circle-fill me-1"></i>Status\r
            </button>\r
          </li>\r
        </ul>\r
      </div>\r
      <div class="card-body">\r
\r
        <!-- Details Tab -->\r
        <form *ngIf="activeTab==='details'" [formGroup]="detailsForm" (ngSubmit)="saveDetails()" novalidate>\r
          <div class="row g-3">\r
            <div class="col-6">\r
              <label class="form-label small fw-semibold">First Name *</label>\r
              <input type="text" class="form-control form-control-sm" formControlName="first_name"\r
                [class.is-invalid]="df['first_name'].invalid && df['first_name'].touched">\r
              <div class="invalid-feedback">Required</div>\r
            </div>\r
            <div class="col-6">\r
              <label class="form-label small fw-semibold">Last Name *</label>\r
              <input type="text" class="form-control form-control-sm" formControlName="last_name"\r
                [class.is-invalid]="df['last_name'].invalid && df['last_name'].touched">\r
              <div class="invalid-feedback">Required</div>\r
            </div>\r
            <div class="col-6">\r
              <label class="form-label small fw-semibold">Email *</label>\r
              <input type="email" class="form-control form-control-sm" formControlName="email"\r
                [class.is-invalid]="df['email'].invalid && df['email'].touched">\r
              <div class="invalid-feedback">Valid email required</div>\r
            </div>\r
            <div class="col-6">\r
              <label class="form-label small fw-semibold">Mobile</label>\r
              <input type="text" class="form-control form-control-sm" formControlName="mobile">\r
            </div>\r
          </div>\r
          <div class="d-flex justify-content-end mt-4">\r
            <button type="submit" class="btn btn-sm btn-primary" [disabled]="saving">\r
              <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>Save Changes\r
            </button>\r
          </div>\r
        </form>\r
\r
        <!-- Password Tab -->\r
        <form *ngIf="activeTab==='password'" [formGroup]="passwordForm" (ngSubmit)="changePassword()" novalidate>\r
          <div class="row g-3" style="max-width:400px">\r
            <div class="col-12">\r
              <label class="form-label small fw-semibold">Current Password *</label>\r
              <input type="password" class="form-control form-control-sm" formControlName="old_password"\r
                [class.is-invalid]="pf['old_password'].invalid && pf['old_password'].touched">\r
              <div class="invalid-feedback">Required</div>\r
            </div>\r
            <div class="col-12">\r
              <label class="form-label small fw-semibold">New Password *</label>\r
              <input type="password" class="form-control form-control-sm" formControlName="new_password"\r
                [class.is-invalid]="pf['new_password'].invalid && pf['new_password'].touched">\r
              <div class="invalid-feedback">Min 6 characters</div>\r
            </div>\r
            <div class="col-12">\r
              <label class="form-label small fw-semibold">Confirm Password *</label>\r
              <input type="password" class="form-control form-control-sm" formControlName="confirm_password"\r
                [class.is-invalid]="(pf['confirm_password'].touched && passwordForm.errors?.['mismatch'])">\r
              <div class="invalid-feedback">Passwords do not match</div>\r
            </div>\r
          </div>\r
          <div class="d-flex justify-content-end mt-4">\r
            <button type="submit" class="btn btn-sm btn-primary" [disabled]="saving">\r
              <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>Change Password\r
            </button>\r
          </div>\r
        </form>\r
\r
        <!-- Status Tab -->\r
        <form *ngIf="activeTab==='status'" [formGroup]="statusForm" (ngSubmit)="updateStatus()" novalidate>\r
          <div class="row g-3" style="max-width:400px">\r
            <div class="col-12">\r
              <label class="form-label small fw-semibold">Online Status</label>\r
              <select class="form-select form-select-sm" formControlName="online_status">\r
                <option value="ONLINE">Online</option>\r
                <option value="AWAY">Away</option>\r
                <option value="BUSY">Busy</option>\r
                <option value="OFFLINE">Offline</option>\r
              </select>\r
            </div>\r
            <div class="col-12">\r
              <label class="form-label small fw-semibold">Status Message</label>\r
              <input type="text" class="form-control form-control-sm" formControlName="status_message" placeholder="What are you up to?">\r
            </div>\r
          </div>\r
          <div class="d-flex justify-content-end mt-4">\r
            <button type="submit" class="btn btn-sm btn-primary" [disabled]="saving">\r
              <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>Update Status\r
            </button>\r
          </div>\r
        </form>\r
\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: ProfileService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/admin/profile/profile.component.ts", lineNumber: 15 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-7YAG4C7V.js.map
