import {
  isPlatformBrowser
} from "./chunk-URCQYAQL.js";
import {
  Injectable,
  NgZone,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-CQ3CZWR7.js";

// src/app/core/services/cursor.service.ts
var CursorService = class _CursorService {
  platformId = inject(PLATFORM_ID);
  zone = inject(NgZone);
  initialized = false;
  frameId = null;
  nextX = 0;
  nextY = 0;
  x = signal(0, ...ngDevMode ? [{ debugName: "x" }] : (
    /* istanbul ignore next */
    []
  ));
  y = signal(0, ...ngDevMode ? [{ debugName: "y" }] : (
    /* istanbul ignore next */
    []
  ));
  isHovering = signal(false, ...ngDevMode ? [{ debugName: "isHovering" }] : (
    /* istanbul ignore next */
    []
  ));
  isHidden = signal(false, ...ngDevMode ? [{ debugName: "isHidden" }] : (
    /* istanbul ignore next */
    []
  ));
  label = signal("", ...ngDevMode ? [{ debugName: "label" }] : (
    /* istanbul ignore next */
    []
  ));
  init() {
    if (!isPlatformBrowser(this.platformId) || this.initialized)
      return;
    this.initialized = true;
    this.zone.runOutsideAngular(() => {
      window.addEventListener("mousemove", (e) => {
        this.nextX = e.clientX;
        this.nextY = e.clientY;
        if (this.frameId !== null)
          return;
        this.frameId = requestAnimationFrame(() => {
          this.frameId = null;
          this.x.set(this.nextX);
          this.y.set(this.nextY);
        });
      });
      window.addEventListener("mouseleave", () => this.isHidden.set(true));
      window.addEventListener("mouseenter", () => this.isHidden.set(false));
    });
  }
  setHover(state, label = "") {
    this.isHovering.set(state);
    this.label.set(label);
  }
  static \u0275fac = function CursorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CursorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CursorService, factory: _CursorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CursorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CursorService
};
//# sourceMappingURL=chunk-7TA23TU3.js.map
