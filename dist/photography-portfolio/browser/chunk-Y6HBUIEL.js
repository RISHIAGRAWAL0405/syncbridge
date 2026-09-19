import {
  DataService
} from "./chunk-GJMBPRDX.js";
import {
  RouterLink
} from "./chunk-RBKBNWPP.js";
import "./chunk-WWIHBCUC.js";
import "./chunk-URCQYAQL.js";
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
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CQ3CZWR7.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/services/services.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ServicesComponent_For_14_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "polyline", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r1, " ");
  }
}
function ServicesComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 14)(1, "div", 15);
    \u0275\u0275element(2, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275element(4, "div", 18);
    \u0275\u0275elementStart(5, "h2", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul", 21);
    \u0275\u0275repeaterCreate(10, ServicesComponent_For_14_For_11_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 22);
    \u0275\u0275text(13, " Get Started ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 23);
    \u0275\u0275element(15, "path", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const svc_r2 = ctx.$implicit;
    const \u0275$index_23_r3 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_23_r3 % 3 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", svc_r2.image, \u0275\u0275sanitizeUrl)("alt", svc_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", svc_r2.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(svc_r2.features);
  }
}
var ServicesComponent = class _ServicesComponent {
  data = inject(DataService);
  static \u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], decls: 26, vars: 0, consts: [[1, "tz-page-hero"], [1, "container", "tz-page-hero-inner"], [1, "tz-eyebrow", "reveal"], [1, "reveal", "reveal-delay-1"], [1, "reveal", "reveal-delay-2"], [1, "services-page"], [1, "container"], [1, "svc-grid"], [1, "svc-card", "reveal", 3, "class"], [1, "svc-bottom-cta"], [1, "svc-cta-inner", "reveal"], ["routerLink", "/contact", 1, "tz-btn-lime"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "svc-card", "reveal"], [1, "svc-card-img", "img-mask"], ["loading", "lazy", "width", "600", "height", "360", 3, "src", "alt"], [1, "svc-card-body"], ["aria-hidden", "true", 1, "svc-icon", 3, "innerHTML"], [1, "svc-title"], [1, "svc-desc"], [1, "svc-features"], ["routerLink", "/contact", 1, "svc-cta"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "aria-hidden", "true"], ["points", "20 6 9 17 4 12"]], template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Our Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 3);
      \u0275\u0275text(5, "Full-Service Capabilities");
      \u0275\u0275element(6, "br");
      \u0275\u0275text(7, "Under One Roof.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, "From strategy and branding to digital marketing, web development and video production \u2014 everything your brand needs to grow.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "section", 5)(11, "div", 6)(12, "div", 7);
      \u0275\u0275repeaterCreate(13, ServicesComponent_For_14_Template, 16, 7, "article", 8, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "section", 9)(16, "div", 6)(17, "div", 10)(18, "h2");
      \u0275\u0275text(19, "Not Sure Which Service You Need?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p");
      \u0275\u0275text(21, "Talk to us \u2014 we'll help you figure out the right approach for your brand and goals.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 11);
      \u0275\u0275text(23, " Talk to Us ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 12);
      \u0275\u0275element(25, "path", 13);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.data.services);
    }
  }, dependencies: [RouterLink], styles: ['\n.services-page[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n  background: var(--tz-white);\n}\n.svc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 1024px) {\n  .svc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .svc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.svc-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--tz-border);\n  border-radius: 16px;\n  overflow: hidden;\n  background: var(--tz-white);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.svc-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--tz-shadow-lg);\n}\n.svc-card[_ngcontent-%COMP%]:hover   .svc-card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.svc-card[_ngcontent-%COMP%]:hover   .svc-cta[_ngcontent-%COMP%] {\n  color: var(--tz-lime-dark);\n  gap: 0.75rem;\n}\n.svc-card-img[_ngcontent-%COMP%] {\n  height: 200px;\n  border-radius: 0;\n  flex-shrink: 0;\n}\n.svc-card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.svc-card-body[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.svc-icon[_ngcontent-%COMP%] {\n  color: var(--tz-dark-green);\n  display: flex;\n  align-items: center;\n}\n.svc-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--tz-charcoal);\n}\n.svc-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--tz-text-muted);\n  line-height: 1.75;\n  flex: 1;\n}\n.svc-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.svc-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  color: var(--tz-text-muted);\n}\n.svc-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--tz-lime-dark);\n  flex-shrink: 0;\n}\n.svc-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--tz-dark-green);\n  margin-top: 0.5rem;\n  transition: gap 0.2s ease, color 0.2s ease;\n}\n.svc-bottom-cta[_ngcontent-%COMP%] {\n  padding: 0 0 7rem;\n  background: var(--tz-white);\n}\n.svc-cta-inner[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green);\n  border-radius: 24px;\n  padding: 4rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  position: relative;\n  overflow: hidden;\n}\n.svc-cta-inner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -40%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 230, 61, 0.08) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.svc-cta-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 3vw, 2.25rem);\n  font-weight: 800;\n  color: var(--tz-white);\n  position: relative;\n}\n.svc-cta-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 1rem;\n  position: relative;\n}\n@media (max-width: 600px) {\n  .svc-cta-inner[_ngcontent-%COMP%] {\n    padding: 2.5rem 1.5rem;\n  }\n}\n/*# sourceMappingURL=services.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesComponent, [{
    type: Component,
    args: [{ selector: "app-services", standalone: true, imports: [RouterLink], template: `<!-- Page Hero -->\r
<div class="tz-page-hero">\r
  <div class="container tz-page-hero-inner">\r
    <span class="tz-eyebrow reveal">Our Services</span>\r
    <h1 class="reveal reveal-delay-1">Full-Service Capabilities<br>Under One Roof.</h1>\r
    <p class="reveal reveal-delay-2">From strategy and branding to digital marketing, web development and video production \u2014 everything your brand needs to grow.</p>\r
  </div>\r
</div>\r
\r
<!-- Services Grid -->\r
<section class="services-page">\r
  <div class="container">\r
    <div class="svc-grid">\r
      @for (svc of data.services; track svc.id; let i = $index) {\r
        <article class="svc-card reveal" [class]="'reveal-delay-' + (i % 3 + 1)">\r
          <div class="svc-card-img img-mask">\r
            <img [src]="svc.image" [alt]="svc.title" loading="lazy" width="600" height="360">\r
          </div>\r
          <div class="svc-card-body">\r
            <div class="svc-icon" [innerHTML]="svc.icon" aria-hidden="true"></div>\r
            <h2 class="svc-title">{{ svc.title }}</h2>\r
            <p class="svc-desc">{{ svc.description }}</p>\r
            <ul class="svc-features">\r
              @for (f of svc.features; track f) {\r
                <li>\r
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>\r
                  {{ f }}\r
                </li>\r
              }\r
            </ul>\r
            <a routerLink="/contact" class="svc-cta">\r
              Get Started\r
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
            </a>\r
          </div>\r
        </article>\r
      }\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Bottom CTA -->\r
<section class="svc-bottom-cta">\r
  <div class="container">\r
    <div class="svc-cta-inner reveal">\r
      <h2>Not Sure Which Service You Need?</h2>\r
      <p>Talk to us \u2014 we'll help you figure out the right approach for your brand and goals.</p>\r
      <a routerLink="/contact" class="tz-btn-lime">\r
        Talk to Us\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/services/services.component.scss */\n.services-page {\n  padding: 7rem 0;\n  background: var(--tz-white);\n}\n.svc-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 1024px) {\n  .svc-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .svc-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.svc-card {\n  border: 1px solid var(--tz-border);\n  border-radius: 16px;\n  overflow: hidden;\n  background: var(--tz-white);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.svc-card:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--tz-shadow-lg);\n}\n.svc-card:hover .svc-card-img img {\n  transform: scale(1.05);\n}\n.svc-card:hover .svc-cta {\n  color: var(--tz-lime-dark);\n  gap: 0.75rem;\n}\n.svc-card-img {\n  height: 200px;\n  border-radius: 0;\n  flex-shrink: 0;\n}\n.svc-card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.svc-card-body {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.svc-icon {\n  color: var(--tz-dark-green);\n  display: flex;\n  align-items: center;\n}\n.svc-title {\n  font-family: var(--font-heading);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--tz-charcoal);\n}\n.svc-desc {\n  font-size: 0.875rem;\n  color: var(--tz-text-muted);\n  line-height: 1.75;\n  flex: 1;\n}\n.svc-features {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.svc-features li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  color: var(--tz-text-muted);\n}\n.svc-features li svg {\n  color: var(--tz-lime-dark);\n  flex-shrink: 0;\n}\n.svc-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--tz-dark-green);\n  margin-top: 0.5rem;\n  transition: gap 0.2s ease, color 0.2s ease;\n}\n.svc-bottom-cta {\n  padding: 0 0 7rem;\n  background: var(--tz-white);\n}\n.svc-cta-inner {\n  background: var(--tz-dark-green);\n  border-radius: 24px;\n  padding: 4rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  position: relative;\n  overflow: hidden;\n}\n.svc-cta-inner::before {\n  content: "";\n  position: absolute;\n  top: -40%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 230, 61, 0.08) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.svc-cta-inner h2 {\n  font-size: clamp(1.5rem, 3vw, 2.25rem);\n  font-weight: 800;\n  color: var(--tz-white);\n  position: relative;\n}\n.svc-cta-inner p {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 1rem;\n  position: relative;\n}\n@media (max-width: 600px) {\n  .svc-cta-inner {\n    padding: 2.5rem 1.5rem;\n  }\n}\n/*# sourceMappingURL=services.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src/app/features/services/services.component.ts", lineNumber: 12 });
})();
export {
  ServicesComponent
};
//# sourceMappingURL=chunk-Y6HBUIEL.js.map
