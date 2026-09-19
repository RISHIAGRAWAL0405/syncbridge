import {
  DataService
} from "./chunk-X42UMOT4.js";
import {
  CursorService
} from "./chunk-ZLAS45UH.js";
import {
  RouterLink
} from "./chunk-FPVJX4FZ.js";
import "./chunk-Q3L5OJPP.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U2WXL5OW.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/services/services.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ServicesComponent_For_14_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "polyline", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r3, " ");
  }
}
function ServicesComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("mouseenter", function ServicesComponent_For_14_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cursor.setHover(true));
    })("mouseleave", function ServicesComponent_For_14_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cursor.setHover(false));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 12);
    \u0275\u0275repeaterCreate(8, ServicesComponent_For_14_For_9_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 13)(11, "span");
    \u0275\u0275text(12, "Inquire");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 14);
    \u0275\u0275element(14, "path", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r4 = ctx.$implicit;
    const \u0275$index_23_r5 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_23_r5 % 3 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(service_r4.features);
  }
}
var ServicesComponent = class _ServicesComponent {
  data = inject(DataService);
  cursor = inject(CursorService);
  static \u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], decls: 15, vars: 0, consts: [[1, "services-page"], [1, "services-header"], [1, "container"], [1, "section-label", "reveal"], [1, "services-title", "reveal", "reveal-delay-1"], [1, "services-sub", "reveal", "reveal-delay-2"], [1, "services-grid", "container"], [1, "service-card", "glass", "reveal", 3, "class"], [1, "service-card", "glass", "reveal", 3, "mouseenter", "mouseleave"], ["aria-hidden", "true", 1, "service-icon"], [1, "service-title"], [1, "service-desc"], [1, "service-features"], ["routerLink", "/contact", 1, "service-cta"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M5 12h14M12 5l7 7-7 7"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["points", "20 6 9 17 4 12"]], template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "What We Offer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "Our");
      \u0275\u0275element(7, "br");
      \u0275\u0275elementStart(8, "em");
      \u0275\u0275text(9, "Services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 5);
      \u0275\u0275text(11, "Every service is crafted with the same obsessive attention to detail and artistic vision.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275repeaterCreate(13, ServicesComponent_For_14_Template, 15, 5, "div", 7, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.data.services);
    }
  }, dependencies: [RouterLink], styles: ["\n.services-page[_ngcontent-%COMP%] {\n  padding-top: var(--nav-height);\n  min-height: 100vh;\n}\n.services-header[_ngcontent-%COMP%] {\n  padding: 5rem 0 4rem;\n}\n.services-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.services-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(3.5rem, 10vw, 8rem);\n  font-weight: 800;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n  margin: 1rem 0;\n}\n.services-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.services-sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  max-width: 480px;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  padding-bottom: 6rem;\n}\n@media (max-width: 1024px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.service-card[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: rgba(201, 169, 110, 0.2);\n}\n.service-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n.service-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--color-secondary);\n}\n.service-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n  flex: 1;\n}\n.service-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 0.5rem 0;\n}\n.service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  flex-shrink: 0;\n}\n.service-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  margin-top: auto;\n  transition: gap 0.3s ease;\n}\n.service-cta[_ngcontent-%COMP%]:hover {\n  gap: 0.9rem;\n}\n/*# sourceMappingURL=services.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesComponent, [{
    type: Component,
    args: [{ selector: "app-services", standalone: true, imports: [RouterLink], template: `<div class="services-page">\r
  <div class="services-header">\r
    <div class="container">\r
      <span class="section-label reveal">What We Offer</span>\r
      <h1 class="services-title reveal reveal-delay-1">Our<br><em>Services</em></h1>\r
      <p class="services-sub reveal reveal-delay-2">Every service is crafted with the same obsessive attention to detail and artistic vision.</p>\r
    </div>\r
  </div>\r
\r
  <div class="services-grid container">\r
    @for (service of data.services; track service.id; let i = $index) {\r
      <div class="service-card glass reveal" [class]="'reveal-delay-' + (i % 3 + 1)"\r
           (mouseenter)="cursor.setHover(true)" (mouseleave)="cursor.setHover(false)">\r
        <div class="service-icon" aria-hidden="true">{{ service.icon }}</div>\r
        <h3 class="service-title">{{ service.title }}</h3>\r
        <p class="service-desc">{{ service.description }}</p>\r
        <ul class="service-features">\r
          @for (f of service.features; track f) {\r
            <li>\r
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>\r
              {{ f }}\r
            </li>\r
          }\r
        </ul>\r
        <a routerLink="/contact" class="service-cta">\r
          <span>Inquire</span>\r
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
        </a>\r
      </div>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/services/services.component.scss */\n.services-page {\n  padding-top: var(--nav-height);\n  min-height: 100vh;\n}\n.services-header {\n  padding: 5rem 0 4rem;\n}\n.services-header .section-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.services-title {\n  font-family: var(--font-heading);\n  font-size: clamp(3.5rem, 10vw, 8rem);\n  font-weight: 800;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n  margin: 1rem 0;\n}\n.services-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.services-sub {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  max-width: 480px;\n}\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  padding-bottom: 6rem;\n}\n@media (max-width: 1024px) {\n  .services-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .services-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.service-card {\n  padding: 2.5rem;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease;\n}\n.service-card:hover {\n  transform: translateY(-6px);\n  border-color: rgba(201, 169, 110, 0.2);\n}\n.service-icon {\n  font-size: 2rem;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n.service-title {\n  font-family: var(--font-heading);\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--color-secondary);\n}\n.service-desc {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n  flex: 1;\n}\n.service-features {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 0.5rem 0;\n}\n.service-features li {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.service-features li svg {\n  color: var(--color-accent);\n  flex-shrink: 0;\n}\n.service-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  margin-top: auto;\n  transition: gap 0.3s ease;\n}\n.service-cta:hover {\n  gap: 0.9rem;\n}\n/*# sourceMappingURL=services.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src/app/features/services/services.component.ts", lineNumber: 13 });
})();
export {
  ServicesComponent
};
//# sourceMappingURL=chunk-W2YNQHPL.js.map
