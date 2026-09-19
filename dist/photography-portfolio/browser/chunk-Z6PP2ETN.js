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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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

// src/app/features/pricing/pricing.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PricingComponent_For_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Most Popular");
    \u0275\u0275elementEnd();
  }
}
function PricingComponent_For_14_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "polyline", 22);
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
function PricingComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("mouseenter", function PricingComponent_For_14_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cursor.setHover(true));
    })("mouseleave", function PricingComponent_For_14_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cursor.setHover(false));
    });
    \u0275\u0275conditionalCreate(1, PricingComponent_For_14_Conditional_1_Template, 2, 0, "div", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "h3", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15)(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ul", 19);
    \u0275\u0275repeaterCreate(15, PricingComponent_For_14_For_16_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 20)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r4 = ctx.$implicit;
    const \u0275$index_23_r5 = ctx.$index;
    \u0275\u0275classMap("reveal reveal-delay-" + (\u0275$index_23_r5 + 1));
    \u0275\u0275classProp("highlighted", plan_r4.highlighted);
    \u0275\u0275advance();
    \u0275\u0275conditional(plan_r4.highlighted ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r4.currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r4.price.toLocaleString());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", plan_r4.period);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(plan_r4.features);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", plan_r4.highlighted)("btn-outline", !plan_r4.highlighted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r4.highlighted ? "Book Now" : plan_r4.cta);
  }
}
var PricingComponent = class _PricingComponent {
  data = inject(DataService);
  cursor = inject(CursorService);
  static \u0275fac = function PricingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingComponent, selectors: [["app-pricing"]], decls: 21, vars: 0, consts: [[1, "pricing-page"], [1, "pricing-header"], [1, "container"], [1, "section-label", "reveal"], [1, "pricing-title", "reveal", "reveal-delay-1"], [1, "pricing-sub", "reveal", "reveal-delay-2"], [1, "pricing-grid", "container"], [1, "pricing-card", 3, "highlighted", "class"], [1, "pricing-note", "container", "reveal"], ["routerLink", "/contact"], [1, "pricing-card", 3, "mouseenter", "mouseleave"], [1, "pricing-badge"], [1, "pricing-top"], [1, "plan-name"], [1, "plan-desc"], [1, "plan-price"], [1, "price-currency"], [1, "price-amount"], [1, "price-period"], [1, "plan-features"], ["routerLink", "/contact", 1, "plan-cta"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["points", "20 6 9 17 4 12"]], template: function PricingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Investment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "Transparent");
      \u0275\u0275element(7, "br");
      \u0275\u0275elementStart(8, "em");
      \u0275\u0275text(9, "Pricing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 5);
      \u0275\u0275text(11, "Every package is a promise of excellence, crafted to deliver extraordinary value.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275repeaterCreate(13, PricingComponent_For_14_Template, 20, 15, "div", 7, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "p");
      \u0275\u0275text(17, "All packages include a complimentary consultation. Custom packages available for unique requirements. ");
      \u0275\u0275elementStart(18, "a", 9);
      \u0275\u0275text(19, "Contact us");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " to discuss your vision.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.data.pricingPlans);
    }
  }, dependencies: [RouterLink], styles: ["\n.pricing-page[_ngcontent-%COMP%] {\n  padding-top: var(--nav-height);\n  min-height: 100vh;\n}\n.pricing-header[_ngcontent-%COMP%] {\n  padding: 5rem 0 4rem;\n}\n.pricing-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(3.5rem, 10vw, 8rem);\n  font-weight: 800;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n  margin: 1rem 0;\n}\n.pricing-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.pricing-sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  max-width: 480px;\n}\n.pricing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  padding-bottom: 4rem;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .pricing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 480px;\n  }\n}\n.pricing-card[_ngcontent-%COMP%] {\n  background: var(--color-card);\n  border: 1px solid var(--color-border);\n  padding: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  position: relative;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease;\n}\n.pricing-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n}\n.pricing-card.highlighted[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(201, 169, 110, 0.08) 0%,\n      rgba(201, 169, 110, 0.02) 100%);\n  transform: scale(1.02);\n}\n.pricing-card.highlighted[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02) translateY(-8px);\n}\n.pricing-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -1px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--color-accent);\n  color: var(--color-bg);\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  padding: 0.35rem 1rem;\n}\n.plan-name[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-secondary);\n  margin-bottom: 0.5rem;\n}\n.plan-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n  line-height: 1.6;\n}\n.plan-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.25rem;\n  padding: 1.5rem 0;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n}\n.price-currency[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  color: var(--color-accent);\n}\n.price-amount[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 3rem;\n  font-weight: 800;\n  color: var(--color-secondary);\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n.price-period[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.plan-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  flex-shrink: 0;\n}\n.plan-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  text-align: center;\n  transition: all 0.35s ease;\n}\n.plan-cta.btn-primary[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  color: var(--color-bg);\n}\n.plan-cta.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent-light);\n}\n.plan-cta.btn-outline[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  color: var(--color-secondary);\n}\n.plan-cta.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.pricing-note[_ngcontent-%COMP%] {\n  padding-bottom: 6rem;\n  text-align: center;\n}\n.pricing-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.pricing-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n/*# sourceMappingURL=pricing.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingComponent, [{
    type: Component,
    args: [{ selector: "app-pricing", standalone: true, imports: [RouterLink], template: `<div class="pricing-page">\r
  <div class="pricing-header">\r
    <div class="container">\r
      <span class="section-label reveal">Investment</span>\r
      <h1 class="pricing-title reveal reveal-delay-1">Transparent<br><em>Pricing</em></h1>\r
      <p class="pricing-sub reveal reveal-delay-2">Every package is a promise of excellence, crafted to deliver extraordinary value.</p>\r
    </div>\r
  </div>\r
\r
  <div class="pricing-grid container">\r
    @for (plan of data.pricingPlans; track plan.id; let i = $index) {\r
      <div class="pricing-card" [class.highlighted]="plan.highlighted"\r
           [class]="'reveal reveal-delay-' + (i + 1)"\r
           (mouseenter)="cursor.setHover(true)" (mouseleave)="cursor.setHover(false)">\r
        @if (plan.highlighted) {\r
          <div class="pricing-badge">Most Popular</div>\r
        }\r
        <div class="pricing-top">\r
          <h3 class="plan-name">{{ plan.name }}</h3>\r
          <p class="plan-desc">{{ plan.description }}</p>\r
        </div>\r
        <div class="plan-price">\r
          <span class="price-currency">{{ plan.currency }}</span>\r
          <span class="price-amount">{{ plan.price.toLocaleString() }}</span>\r
          <span class="price-period">/ {{ plan.period }}</span>\r
        </div>\r
        <ul class="plan-features">\r
          @for (f of plan.features; track f) {\r
            <li>\r
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>\r
              {{ f }}\r
            </li>\r
          }\r
        </ul>\r
        <a routerLink="/contact" class="plan-cta" [class.btn-primary]="plan.highlighted" [class.btn-outline]="!plan.highlighted">\r
          <span>{{ plan.highlighted ? 'Book Now' : plan.cta }}</span>\r
        </a>\r
      </div>\r
    }\r
  </div>\r
\r
  <div class="pricing-note container reveal">\r
    <p>All packages include a complimentary consultation. Custom packages available for unique requirements. <a routerLink="/contact">Contact us</a> to discuss your vision.</p>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/pricing/pricing.component.scss */\n.pricing-page {\n  padding-top: var(--nav-height);\n  min-height: 100vh;\n}\n.pricing-header {\n  padding: 5rem 0 4rem;\n}\n.pricing-title {\n  font-family: var(--font-heading);\n  font-size: clamp(3.5rem, 10vw, 8rem);\n  font-weight: 800;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n  margin: 1rem 0;\n}\n.pricing-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.pricing-sub {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  max-width: 480px;\n}\n.pricing-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  padding-bottom: 4rem;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .pricing-grid {\n    grid-template-columns: 1fr;\n    max-width: 480px;\n  }\n}\n.pricing-card {\n  background: var(--color-card);\n  border: 1px solid var(--color-border);\n  padding: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  position: relative;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease;\n}\n.pricing-card:hover {\n  transform: translateY(-8px);\n}\n.pricing-card.highlighted {\n  border-color: var(--color-accent);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(201, 169, 110, 0.08) 0%,\n      rgba(201, 169, 110, 0.02) 100%);\n  transform: scale(1.02);\n}\n.pricing-card.highlighted:hover {\n  transform: scale(1.02) translateY(-8px);\n}\n.pricing-badge {\n  position: absolute;\n  top: -1px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--color-accent);\n  color: var(--color-bg);\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  padding: 0.35rem 1rem;\n}\n.plan-name {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-secondary);\n  margin-bottom: 0.5rem;\n}\n.plan-desc {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n  line-height: 1.6;\n}\n.plan-price {\n  display: flex;\n  align-items: baseline;\n  gap: 0.25rem;\n  padding: 1.5rem 0;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n}\n.price-currency {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  color: var(--color-accent);\n}\n.price-amount {\n  font-family: var(--font-heading);\n  font-size: 3rem;\n  font-weight: 800;\n  color: var(--color-secondary);\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n.price-period {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\n.plan-features {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.plan-features li {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.plan-features li svg {\n  color: var(--color-accent);\n  flex-shrink: 0;\n}\n.plan-cta {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  text-align: center;\n  transition: all 0.35s ease;\n}\n.plan-cta.btn-primary {\n  background: var(--color-accent);\n  color: var(--color-bg);\n}\n.plan-cta.btn-primary:hover {\n  background: var(--color-accent-light);\n}\n.plan-cta.btn-outline {\n  border: 1px solid var(--color-border);\n  color: var(--color-secondary);\n}\n.plan-cta.btn-outline:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.pricing-note {\n  padding-bottom: 6rem;\n  text-align: center;\n}\n.pricing-note p {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.pricing-note p a {\n  color: var(--color-accent);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n/*# sourceMappingURL=pricing.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingComponent, { className: "PricingComponent", filePath: "src/app/features/pricing/pricing.component.ts", lineNumber: 13 });
})();
export {
  PricingComponent
};
//# sourceMappingURL=chunk-Z6PP2ETN.js.map
