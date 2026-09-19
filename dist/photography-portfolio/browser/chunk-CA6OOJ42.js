import {
  Injectable,
  PLATFORM_ID,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-U2WXL5OW.js";

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

export {
  ScrollService
};
//# sourceMappingURL=chunk-CA6OOJ42.js.map
