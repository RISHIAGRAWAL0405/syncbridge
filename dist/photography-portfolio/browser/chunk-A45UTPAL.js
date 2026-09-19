import {
  isPlatformBrowser
} from "./chunk-URCQYAQL.js";
import {
  Injectable,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CQ3CZWR7.js";

// src/app/core/services/animation.service.ts
var AnimationService = class _AnimationService {
  platformId = inject(PLATFORM_ID);
  observer;
  initReveal() {
    if (!isPlatformBrowser(this.platformId))
      return;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    this.observeAll();
  }
  observeAll() {
    if (!isPlatformBrowser(this.platformId))
      return;
    document.querySelectorAll(".reveal, .img-mask").forEach((el) => {
      this.observer?.observe(el);
    });
  }
  observe(el) {
    this.observer?.observe(el);
  }
  static \u0275fac = function AnimationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnimationService, factory: _AnimationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AnimationService
};
//# sourceMappingURL=chunk-A45UTPAL.js.map
