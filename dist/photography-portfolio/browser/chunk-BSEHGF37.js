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
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CQ3CZWR7.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/home/components/hero/hero.component.ts
var HeroComponent = class _HeroComponent {
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], decls: 61, vars: 0, consts: [["aria-label", "Sync Bridge hero section", 1, "hero"], [1, "container"], [1, "hero-inner"], [1, "hero-content"], [1, "hero-eyebrow", "reveal"], [1, "tz-eyebrow"], [1, "hero-title", "reveal", "reveal-delay-1"], [1, "hero-title-accent"], [1, "hero-desc", "reveal", "reveal-delay-2"], [1, "hero-actions", "reveal", "reveal-delay-3"], ["routerLink", "/contact", 1, "tz-btn-lime"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], ["routerLink", "/services", 1, "tz-btn-outline-dark"], [1, "hero-stats", "reveal", "reveal-delay-4"], [1, "hero-stat"], [1, "hero-stat-num"], [1, "hero-stat-label"], ["aria-hidden", "true", 1, "hero-stat-sep"], ["aria-hidden", "true", 1, "hero-visual", "reveal", "reveal-delay-2"], [1, "hero-img-main", "img-mask"], ["src", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", "alt", "Sync Bridge team at work", "loading", "eager", "width", "600", "height", "700"], [1, "hero-img-accent", "img-mask"], ["src", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80", "alt", "Digital marketing analytics", "loading", "eager", "width", "300", "height", "220"], [1, "hero-badge"], [1, "hero-badge-num"], [1, "hero-badge-text"], ["aria-hidden", "true", 1, "hero-dot-grid"], ["aria-hidden", "true", 1, "hero-circle-accent"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "Strategy \u2022 Branding \u2022 Digital");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, " Building Brands");
      \u0275\u0275element(9, "br");
      \u0275\u0275text(10, " That Make");
      \u0275\u0275element(11, "br");
      \u0275\u0275elementStart(12, "span", 7);
      \u0275\u0275text(13, "an Impact.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p", 8);
      \u0275\u0275text(15, " Sync Bridge combines strategy, creativity, branding, advertising and digital marketing to help businesses grow, connect and lead in their markets. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "a", 10);
      \u0275\u0275text(18, " Start a Project ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 11);
      \u0275\u0275element(20, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "a", 13);
      \u0275\u0275text(22, " Explore Our Services ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 14)(24, "div", 15)(25, "span", 16);
      \u0275\u0275text(26, "17+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 17);
      \u0275\u0275text(28, "Years");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(29, "div", 18);
      \u0275\u0275elementStart(30, "div", 15)(31, "span", 16);
      \u0275\u0275text(32, "200+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 17);
      \u0275\u0275text(34, "Clients");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "div", 18);
      \u0275\u0275elementStart(36, "div", 15)(37, "span", 16);
      \u0275\u0275text(38, "2500+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 17);
      \u0275\u0275text(40, "Campaigns");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(41, "div", 18);
      \u0275\u0275elementStart(42, "div", 15)(43, "span", 16);
      \u0275\u0275text(44, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 17);
      \u0275\u0275text(46, "Offices");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 19)(48, "div", 20);
      \u0275\u0275element(49, "img", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 22);
      \u0275\u0275element(51, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 24)(53, "span", 25);
      \u0275\u0275text(54, "17+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 26);
      \u0275\u0275text(56, "Years of");
      \u0275\u0275element(57, "br");
      \u0275\u0275text(58, "Excellence");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(59, "div", 27)(60, "div", 28);
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink], styles: ['\n.hero[_ngcontent-%COMP%] {\n  background: var(--tz-white);\n  padding-top: calc(var(--nav-height) + var(--main-nav-height) + 4rem);\n  padding-bottom: 5rem;\n  overflow: hidden;\n  position: relative;\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50%;\n  height: 100%;\n  background: var(--tz-off-white);\n  border-radius: 0 0 0 80px;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding-top: calc(var(--main-nav-height) + 3rem);\n    padding-bottom: 3rem;\n  }\n  .hero[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    gap: 3rem;\n  }\n}\n@media (max-width: 768px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  display: flex;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2.75rem, 6vw, 5rem);\n  font-weight: 800;\n  line-height: 1.05;\n  letter-spacing: -0.03em;\n  color: var(--tz-charcoal);\n}\n.hero-title-accent[_ngcontent-%COMP%] {\n  color: var(--tz-dark-green);\n  position: relative;\n}\n.hero-title-accent[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--tz-lime);\n  border-radius: 2px;\n}\n.hero-desc[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--tz-text-muted);\n  line-height: 1.75;\n  max-width: 480px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding-top: 0.5rem;\n  flex-wrap: wrap;\n}\n.hero-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.hero-stat-num[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--tz-dark-green);\n  line-height: 1;\n}\n.hero-stat-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: var(--tz-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.hero-stat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: var(--tz-border);\n}\n.hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  height: 520px;\n}\n@media (max-width: 768px) {\n  .hero-visual[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n.hero-img-main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 75%;\n  height: 100%;\n  border-radius: 20px;\n  box-shadow: var(--tz-shadow-lg);\n}\n.hero-img-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .hero-img-main[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 100%;\n  }\n}\n.hero-img-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2rem;\n  left: 0;\n  width: 48%;\n  height: 200px;\n  border-radius: 16px;\n  box-shadow: var(--tz-shadow-lg);\n  border: 4px solid var(--tz-white);\n  z-index: 2;\n}\n.hero-img-accent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .hero-img-accent[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2rem;\n  left: 0;\n  z-index: 3;\n  background: var(--tz-dark-green);\n  color: var(--tz-white);\n  border-radius: 16px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: var(--tz-shadow);\n  border: 3px solid var(--tz-white);\n}\n@media (max-width: 768px) {\n  .hero-badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-badge-num[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: var(--tz-lime);\n  line-height: 1;\n}\n.hero-badge-text[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 0.25rem;\n}\n.hero-dot-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  right: -1rem;\n  width: 80px;\n  height: 80px;\n  background-image:\n    radial-gradient(\n      circle,\n      var(--tz-lime) 1.5px,\n      transparent 1.5px);\n  background-size: 12px 12px;\n  opacity: 0.5;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .hero-dot-grid[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-circle-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -1.5rem;\n  right: -1.5rem;\n  width: 80px;\n  height: 80px;\n  border: 3px solid var(--tz-lime);\n  border-radius: 50%;\n  opacity: 0.3;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .hero-circle-accent[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "app-hero", standalone: true, imports: [RouterLink], template: '<section class="hero" aria-label="Sync Bridge hero section">\r\n  <div class="container">\r\n    <div class="hero-inner">\r\n      <!-- Left: Content -->\r\n      <div class="hero-content">\r\n        <div class="hero-eyebrow reveal">\r\n          <span class="tz-eyebrow">Strategy &bull; Branding &bull; Digital</span>\r\n        </div>\r\n        <h1 class="hero-title reveal reveal-delay-1">\r\n          Building Brands<br>\r\n          That Make<br>\r\n          <span class="hero-title-accent">an Impact.</span>\r\n        </h1>\r\n        <p class="hero-desc reveal reveal-delay-2">\r\n          Sync Bridge combines strategy, creativity, branding, advertising and digital marketing to help businesses grow, connect and lead in their markets.\r\n        </p>\r\n        <div class="hero-actions reveal reveal-delay-3">\r\n          <a routerLink="/contact" class="tz-btn-lime">\r\n            Start a Project\r\n            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r\n          </a>\r\n          <a routerLink="/services" class="tz-btn-outline-dark">\r\n            Explore Our Services\r\n          </a>\r\n        </div>\r\n        <div class="hero-stats reveal reveal-delay-4">\r\n          <div class="hero-stat">\r\n            <span class="hero-stat-num">17+</span>\r\n            <span class="hero-stat-label">Years</span>\r\n          </div>\r\n          <div class="hero-stat-sep" aria-hidden="true"></div>\r\n          <div class="hero-stat">\r\n            <span class="hero-stat-num">200+</span>\r\n            <span class="hero-stat-label">Clients</span>\r\n          </div>\r\n          <div class="hero-stat-sep" aria-hidden="true"></div>\r\n          <div class="hero-stat">\r\n            <span class="hero-stat-num">2500+</span>\r\n            <span class="hero-stat-label">Campaigns</span>\r\n          </div>\r\n          <div class="hero-stat-sep" aria-hidden="true"></div>\r\n          <div class="hero-stat">\r\n            <span class="hero-stat-num">4</span>\r\n            <span class="hero-stat-label">Offices</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Right: Image Composition -->\r\n      <div class="hero-visual reveal reveal-delay-2" aria-hidden="true">\r\n        <div class="hero-img-main img-mask">\r\n          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"\r\n               alt="Sync Bridge team at work" loading="eager" width="600" height="700">\r\n        </div>\r\n        <div class="hero-img-accent img-mask">\r\n          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80"\r\n               alt="Digital marketing analytics" loading="eager" width="300" height="220">\r\n        </div>\r\n        <div class="hero-badge">\r\n          <span class="hero-badge-num">17+</span>\r\n          <span class="hero-badge-text">Years of<br>Excellence</span>\r\n        </div>\r\n        <div class="hero-dot-grid" aria-hidden="true"></div>\r\n        <div class="hero-circle-accent" aria-hidden="true"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n', styles: ['/* src/app/features/home/components/hero/hero.component.scss */\n.hero {\n  background: var(--tz-white);\n  padding-top: calc(var(--nav-height) + var(--main-nav-height) + 4rem);\n  padding-bottom: 5rem;\n  overflow: hidden;\n  position: relative;\n}\n.hero::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50%;\n  height: 100%;\n  background: var(--tz-off-white);\n  border-radius: 0 0 0 80px;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .hero {\n    padding-top: calc(var(--main-nav-height) + 3rem);\n    padding-bottom: 3rem;\n  }\n  .hero::before {\n    display: none;\n  }\n}\n.hero-inner {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .hero-inner {\n    gap: 3rem;\n  }\n}\n@media (max-width: 768px) {\n  .hero-inner {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.hero-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n}\n.hero-eyebrow {\n  display: flex;\n}\n.hero-title {\n  font-family: var(--font-heading);\n  font-size: clamp(2.75rem, 6vw, 5rem);\n  font-weight: 800;\n  line-height: 1.05;\n  letter-spacing: -0.03em;\n  color: var(--tz-charcoal);\n}\n.hero-title-accent {\n  color: var(--tz-dark-green);\n  position: relative;\n}\n.hero-title-accent::after {\n  content: "";\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--tz-lime);\n  border-radius: 2px;\n}\n.hero-desc {\n  font-size: 1.05rem;\n  color: var(--tz-text-muted);\n  line-height: 1.75;\n  max-width: 480px;\n}\n.hero-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.hero-stats {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding-top: 0.5rem;\n  flex-wrap: wrap;\n}\n.hero-stat {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.hero-stat-num {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--tz-dark-green);\n  line-height: 1;\n}\n.hero-stat-label {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: var(--tz-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.hero-stat-sep {\n  width: 1px;\n  height: 32px;\n  background: var(--tz-border);\n}\n.hero-visual {\n  position: relative;\n  height: 520px;\n}\n@media (max-width: 768px) {\n  .hero-visual {\n    height: 320px;\n  }\n}\n.hero-img-main {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 75%;\n  height: 100%;\n  border-radius: 20px;\n  box-shadow: var(--tz-shadow-lg);\n}\n.hero-img-main img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .hero-img-main {\n    width: 80%;\n    height: 100%;\n  }\n}\n.hero-img-accent {\n  position: absolute;\n  bottom: -2rem;\n  left: 0;\n  width: 48%;\n  height: 200px;\n  border-radius: 16px;\n  box-shadow: var(--tz-shadow-lg);\n  border: 4px solid var(--tz-white);\n  z-index: 2;\n}\n.hero-img-accent img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .hero-img-accent {\n    display: none;\n  }\n}\n.hero-badge {\n  position: absolute;\n  top: 2rem;\n  left: 0;\n  z-index: 3;\n  background: var(--tz-dark-green);\n  color: var(--tz-white);\n  border-radius: 16px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: var(--tz-shadow);\n  border: 3px solid var(--tz-white);\n}\n@media (max-width: 768px) {\n  .hero-badge {\n    display: none;\n  }\n}\n.hero-badge-num {\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: var(--tz-lime);\n  line-height: 1;\n}\n.hero-badge-text {\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 0.25rem;\n}\n.hero-dot-grid {\n  position: absolute;\n  bottom: 1rem;\n  right: -1rem;\n  width: 80px;\n  height: 80px;\n  background-image:\n    radial-gradient(\n      circle,\n      var(--tz-lime) 1.5px,\n      transparent 1.5px);\n  background-size: 12px 12px;\n  opacity: 0.5;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .hero-dot-grid {\n    display: none;\n  }\n}\n.hero-circle-accent {\n  position: absolute;\n  top: -1.5rem;\n  right: -1.5rem;\n  width: 80px;\n  height: 80px;\n  border: 3px solid var(--tz-lime);\n  border-radius: 50%;\n  opacity: 0.3;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .hero-circle-accent {\n    display: none;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/features/home/components/hero/hero.component.ts", lineNumber: 11 });
})();

// src/app/features/home/components/service-strip/service-strip.component.ts
function ServiceStripComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 3);
    \u0275\u0275text(3, "\u2726");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
var ServiceStripComponent = class _ServiceStripComponent {
  items = ["Strategy", "Branding", "Design", "Advertising", "Social Media", "SEO", "Digital Marketing", "Web Development", "Video Production"];
  static \u0275fac = function ServiceStripComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceStripComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceStripComponent, selectors: [["app-service-strip"]], decls: 4, vars: 0, consts: [["aria-label", "Our services", "role", "marquee", 1, "service-strip"], [1, "strip-track"], [1, "strip-item"], ["aria-hidden", "true", 1, "strip-sep"]], template: function ServiceStripComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, ServiceStripComponent_For_3_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.items.concat(ctx.items));
    }
  }, styles: ["\n.service-strip[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green);\n  padding: 1.1rem 0;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.strip-track[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.5rem;\n  animation: _ngcontent-%COMP%_strip-scroll 28s linear infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .strip-track[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.strip-item[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.75);\n  white-space: nowrap;\n  transition: color 0.2s ease;\n}\n.strip-item[_ngcontent-%COMP%]:hover {\n  color: var(--tz-lime);\n}\n.strip-sep[_ngcontent-%COMP%] {\n  color: var(--tz-lime);\n  font-size: 0.6rem;\n  opacity: 0.7;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_strip-scroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=service-strip.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceStripComponent, [{
    type: Component,
    args: [{ selector: "app-service-strip", standalone: true, template: `
    <div class="service-strip" aria-label="Our services" role="marquee">
      <div class="strip-track">
        @for (item of items.concat(items); track $index) {
          <span class="strip-item">{{ item }}</span>
          <span class="strip-sep" aria-hidden="true">\u2726</span>
        }
      </div>
    </div>
  `, styles: ["/* src/app/features/home/components/service-strip/service-strip.component.scss */\n.service-strip {\n  background: var(--tz-dark-green);\n  padding: 1.1rem 0;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.strip-track {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.5rem;\n  animation: strip-scroll 28s linear infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .strip-track {\n    animation: none;\n  }\n}\n.strip-item {\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.75);\n  white-space: nowrap;\n  transition: color 0.2s ease;\n}\n.strip-item:hover {\n  color: var(--tz-lime);\n}\n.strip-sep {\n  color: var(--tz-lime);\n  font-size: 0.6rem;\n  opacity: 0.7;\n  flex-shrink: 0;\n}\n@keyframes strip-scroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=service-strip.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceStripComponent, { className: "ServiceStripComponent", filePath: "src/app/features/home/components/service-strip/service-strip.component.ts", lineNumber: 18 });
})();

// src/app/features/home/components/about-intro/about-intro.component.ts
function AboutIntroComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "polyline", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cap_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cap_r1, " ");
  }
}
var AboutIntroComponent = class _AboutIntroComponent {
  capabilities = [
    "Strategy & Planning",
    "Brand Identity",
    "Creative Design",
    "Advertising Campaigns",
    "Digital Marketing",
    "Social Media Management",
    "Search Engine Optimisation",
    "Web Development",
    "Video Production"
  ];
  static \u0275fac = function AboutIntroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutIntroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutIntroComponent, selectors: [["app-about-intro"]], decls: 34, vars: 0, consts: [["aria-label", "About Sync Bridge", 1, "about-intro"], [1, "container"], [1, "about-inner"], [1, "about-images", "reveal"], [1, "about-img-main", "img-mask"], ["src", "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80", "alt", "Sync Bridge office", "loading", "lazy", "width", "500", "height", "600"], [1, "about-img-secondary", "img-mask"], ["src", "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80", "alt", "Sync Bridge team collaboration", "loading", "lazy", "width", "320", "height", "240"], [1, "about-img-stat"], [1, "about-stat-num"], [1, "about-stat-label"], [1, "about-text"], [1, "tz-eyebrow", "tz-eyebrow-dark", "reveal"], [1, "tz-section-title", "reveal", "reveal-delay-1"], [1, "about-desc", "reveal", "reveal-delay-2"], [1, "about-desc", "reveal", "reveal-delay-3"], [1, "about-capabilities", "reveal", "reveal-delay-3"], [1, "capability-tag"], [1, "about-actions", "reveal", "reveal-delay-4"], ["routerLink", "/about", 1, "tz-btn-lime"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], ["width", "10", "height", "10", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "aria-hidden", "true"], ["points", "20 6 9 17 4 12"]], template: function AboutIntroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
      \u0275\u0275text(10, "17+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 10);
      \u0275\u0275text(12, "Years of");
      \u0275\u0275element(13, "br");
      \u0275\u0275text(14, "Excellence");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 11)(16, "span", 12);
      \u0275\u0275text(17, "About Sync Bridge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "h2", 13);
      \u0275\u0275text(19, " A Full-Service Agency");
      \u0275\u0275element(20, "br");
      \u0275\u0275text(21, "Built for Growth. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 14);
      \u0275\u0275text(23, " Sync Bridge is a full-service advertising and digital marketing agency with over 17 years of experience helping brands across India grow, connect and lead in their markets. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 15);
      \u0275\u0275text(25, " From strategy and branding to digital marketing, web development and video production \u2014 we bring together creative thinking and data-driven execution to deliver campaigns that make a real impact. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16);
      \u0275\u0275repeaterCreate(27, AboutIntroComponent_For_28_Template, 4, 1, "span", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 18)(30, "a", 19);
      \u0275\u0275text(31, " Know More About Us ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 20);
      \u0275\u0275element(33, "path", 21);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(27);
      \u0275\u0275repeater(ctx.capabilities);
    }
  }, dependencies: [RouterLink], styles: ["\n.about-intro[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n  background: var(--tz-white);\n}\n.about-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .about-inner[_ngcontent-%COMP%] {\n    gap: 3.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .about-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.about-images[_ngcontent-%COMP%] {\n  position: relative;\n  height: 520px;\n}\n@media (max-width: 768px) {\n  .about-images[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n.about-img-main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 72%;\n  height: 100%;\n  border-radius: 20px;\n  box-shadow: var(--tz-shadow-lg);\n}\n.about-img-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about-img-secondary[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2rem;\n  right: 0;\n  width: 50%;\n  height: 200px;\n  border-radius: 16px;\n  box-shadow: var(--tz-shadow-lg);\n  border: 4px solid var(--tz-white);\n  z-index: 2;\n}\n.about-img-secondary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .about-img-secondary[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.about-img-stat[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2rem;\n  right: 0;\n  z-index: 3;\n  background: var(--tz-dark-green);\n  color: var(--tz-white);\n  border-radius: 16px;\n  padding: 1.25rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: var(--tz-shadow);\n  border: 3px solid var(--tz-white);\n}\n@media (max-width: 768px) {\n  .about-img-stat[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.about-stat-num[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--tz-lime);\n  line-height: 1;\n}\n.about-stat-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.65);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 0.3rem;\n}\n.about-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.about-desc[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--tz-text-muted);\n  line-height: 1.8;\n}\n.about-capabilities[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.capability-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: var(--tz-dark-green);\n  background: rgba(13, 43, 30, 0.06);\n  border: 1px solid rgba(13, 43, 30, 0.1);\n  padding: 0.3rem 0.75rem;\n  border-radius: 100px;\n}\n.capability-tag[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--tz-lime-dark);\n  flex-shrink: 0;\n}\n.about-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=about-intro.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutIntroComponent, [{
    type: Component,
    args: [{ selector: "app-about-intro", standalone: true, imports: [RouterLink], template: '<section class="about-intro" aria-label="About Sync Bridge">\r\n  <div class="container">\r\n    <div class="about-inner">\r\n      <!-- Image Collage -->\r\n      <div class="about-images reveal">\r\n        <div class="about-img-main img-mask">\r\n          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"\r\n               alt="Sync Bridge office" loading="lazy" width="500" height="600">\r\n        </div>\r\n        <div class="about-img-secondary img-mask">\r\n          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80"\r\n               alt="Sync Bridge team collaboration" loading="lazy" width="320" height="240">\r\n        </div>\r\n        <div class="about-img-stat">\r\n          <span class="about-stat-num">17+</span>\r\n          <span class="about-stat-label">Years of<br>Excellence</span>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Text -->\r\n      <div class="about-text">\r\n        <span class="tz-eyebrow tz-eyebrow-dark reveal">About Sync Bridge</span>\r\n        <h2 class="tz-section-title reveal reveal-delay-1">\r\n          A Full-Service Agency<br>Built for Growth.\r\n        </h2>\r\n        <p class="about-desc reveal reveal-delay-2">\r\n          Sync Bridge is a full-service advertising and digital marketing agency with over 17 years of experience helping brands across India grow, connect and lead in their markets.\r\n        </p>\r\n        <p class="about-desc reveal reveal-delay-3">\r\n          From strategy and branding to digital marketing, web development and video production \u2014 we bring together creative thinking and data-driven execution to deliver campaigns that make a real impact.\r\n        </p>\r\n\r\n        <div class="about-capabilities reveal reveal-delay-3">\r\n          @for (cap of capabilities; track cap) {\r\n            <span class="capability-tag">\r\n              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>\r\n              {{ cap }}\r\n            </span>\r\n          }\r\n        </div>\r\n\r\n        <div class="about-actions reveal reveal-delay-4">\r\n          <a routerLink="/about" class="tz-btn-lime">\r\n            Know More About Us\r\n            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n', styles: ["/* src/app/features/home/components/about-intro/about-intro.component.scss */\n.about-intro {\n  padding: 7rem 0;\n  background: var(--tz-white);\n}\n.about-inner {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .about-inner {\n    gap: 3.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .about-inner {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.about-images {\n  position: relative;\n  height: 520px;\n}\n@media (max-width: 768px) {\n  .about-images {\n    height: 300px;\n  }\n}\n.about-img-main {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 72%;\n  height: 100%;\n  border-radius: 20px;\n  box-shadow: var(--tz-shadow-lg);\n}\n.about-img-main img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about-img-secondary {\n  position: absolute;\n  bottom: -2rem;\n  right: 0;\n  width: 50%;\n  height: 200px;\n  border-radius: 16px;\n  box-shadow: var(--tz-shadow-lg);\n  border: 4px solid var(--tz-white);\n  z-index: 2;\n}\n.about-img-secondary img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .about-img-secondary {\n    display: none;\n  }\n}\n.about-img-stat {\n  position: absolute;\n  top: 2rem;\n  right: 0;\n  z-index: 3;\n  background: var(--tz-dark-green);\n  color: var(--tz-white);\n  border-radius: 16px;\n  padding: 1.25rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: var(--tz-shadow);\n  border: 3px solid var(--tz-white);\n}\n@media (max-width: 768px) {\n  .about-img-stat {\n    display: none;\n  }\n}\n.about-stat-num {\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--tz-lime);\n  line-height: 1;\n}\n.about-stat-label {\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.65);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 0.3rem;\n}\n.about-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.about-desc {\n  font-size: 1rem;\n  color: var(--tz-text-muted);\n  line-height: 1.8;\n}\n.about-capabilities {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.capability-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: var(--tz-dark-green);\n  background: rgba(13, 43, 30, 0.06);\n  border: 1px solid rgba(13, 43, 30, 0.1);\n  padding: 0.3rem 0.75rem;\n  border-radius: 100px;\n}\n.capability-tag svg {\n  color: var(--tz-lime-dark);\n  flex-shrink: 0;\n}\n.about-actions {\n  display: flex;\n}\n/*# sourceMappingURL=about-intro.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutIntroComponent, { className: "AboutIntroComponent", filePath: "src/app/features/home/components/about-intro/about-intro.component.ts", lineNumber: 11 });
})();

// src/app/features/home/components/services-grid/services-grid.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ServicesGridComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "div", 12);
    \u0275\u0275element(2, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275element(4, "div", 15);
    \u0275\u0275elementStart(5, "h3", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10, " Know More ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 19);
    \u0275\u0275element(12, "path", 10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const svc_r1 = ctx.$implicit;
    const \u0275$index_18_r2 = ctx.$index;
    \u0275\u0275classMap("reveal reveal-delay-" + (\u0275$index_18_r2 % 3 + 1));
    \u0275\u0275classProp("sg-card--featured", svc_r1.featured);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", svc_r1.image, \u0275\u0275sanitizeUrl)("alt", svc_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", svc_r1.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r1.description);
  }
}
var ServicesGridComponent = class _ServicesGridComponent {
  data = inject(DataService);
  static \u0275fac = function ServicesGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesGridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesGridComponent, selectors: [["app-services-grid"]], decls: 17, vars: 0, consts: [["aria-label", "What we do", 1, "services-grid-section"], [1, "container"], [1, "sg-header", "reveal"], [1, "tz-eyebrow", "tz-eyebrow-dark"], [1, "tz-section-title", "reveal", "reveal-delay-1"], [1, "sg-grid"], ["routerLink", "/services", 1, "sg-card", 3, "sg-card--featured", "class"], [1, "sg-footer", "reveal"], ["routerLink", "/services", 1, "tz-btn-lime"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], ["routerLink", "/services", 1, "sg-card"], [1, "sg-card-img", "img-mask"], ["loading", "lazy", "width", "600", "height", "400", 3, "src", "alt"], [1, "sg-card-body"], ["aria-hidden", "true", 1, "sg-card-icon", 3, "innerHTML"], [1, "sg-card-title"], [1, "sg-card-desc"], [1, "sg-card-cta"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"]], template: function ServicesGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "What We Do");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Full-Service Capabilities");
      \u0275\u0275element(7, "br");
      \u0275\u0275text(8, "Under One Roof.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275repeaterCreate(10, ServicesGridComponent_For_11_Template, 13, 9, "a", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "a", 8);
      \u0275\u0275text(14, " View All Services ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 9);
      \u0275\u0275element(16, "path", 10);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.data.services);
    }
  }, dependencies: [RouterLink], styles: ["\n.services-grid-section[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n  background: var(--tz-off-white);\n}\n.sg-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3.5rem;\n  max-width: 560px;\n}\n.sg-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .sg-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .sg-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.sg-card[_ngcontent-%COMP%] {\n  background: var(--tz-white);\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid var(--tz-border);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.sg-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--tz-shadow-lg);\n}\n.sg-card[_ngcontent-%COMP%]:hover   .sg-card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.sg-card[_ngcontent-%COMP%]:hover   .sg-card-cta[_ngcontent-%COMP%] {\n  color: var(--tz-lime-dark);\n  gap: 0.75rem;\n}\n.sg-card--featured[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n@media (max-width: 600px) {\n  .sg-card--featured[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.sg-card--featured[_ngcontent-%COMP%]   .sg-card-img[_ngcontent-%COMP%] {\n  height: 260px;\n}\n.sg-card-img[_ngcontent-%COMP%] {\n  height: 200px;\n  border-radius: 0;\n  flex-shrink: 0;\n}\n.sg-card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.sg-card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.sg-card-icon[_ngcontent-%COMP%] {\n  color: var(--tz-dark-green);\n  display: flex;\n}\n.sg-card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--tz-charcoal);\n}\n.sg-card-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--tz-text-muted);\n  line-height: 1.7;\n  flex: 1;\n}\n.sg-card-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--tz-dark-green);\n  transition: gap 0.2s ease, color 0.2s ease;\n  margin-top: auto;\n}\n.sg-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=services-grid.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesGridComponent, [{
    type: Component,
    args: [{ selector: "app-services-grid", standalone: true, imports: [RouterLink], template: `<section class="services-grid-section" aria-label="What we do">\r
  <div class="container">\r
    <div class="sg-header reveal">\r
      <span class="tz-eyebrow tz-eyebrow-dark">What We Do</span>\r
      <h2 class="tz-section-title reveal reveal-delay-1">Full-Service Capabilities<br>Under One Roof.</h2>\r
    </div>\r
\r
    <div class="sg-grid">\r
      @for (svc of data.services; track svc.id; let i = $index) {\r
        <a routerLink="/services" class="sg-card" [class.sg-card--featured]="svc.featured" [class]="'reveal reveal-delay-' + (i % 3 + 1)">\r
          <div class="sg-card-img img-mask">\r
            <img [src]="svc.image" [alt]="svc.title" loading="lazy" width="600" height="400">\r
          </div>\r
          <div class="sg-card-body">\r
            <div class="sg-card-icon" [innerHTML]="svc.icon" aria-hidden="true"></div>\r
            <h3 class="sg-card-title">{{ svc.title }}</h3>\r
            <p class="sg-card-desc">{{ svc.description }}</p>\r
            <span class="sg-card-cta">\r
              Know More\r
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
            </span>\r
          </div>\r
        </a>\r
      }\r
    </div>\r
\r
    <div class="sg-footer reveal">\r
      <a routerLink="/services" class="tz-btn-lime">\r
        View All Services\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/features/home/components/services-grid/services-grid.component.scss */\n.services-grid-section {\n  padding: 7rem 0;\n  background: var(--tz-off-white);\n}\n.sg-header {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3.5rem;\n  max-width: 560px;\n}\n.sg-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .sg-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .sg-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.sg-card {\n  background: var(--tz-white);\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid var(--tz-border);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.sg-card:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--tz-shadow-lg);\n}\n.sg-card:hover .sg-card-img img {\n  transform: scale(1.05);\n}\n.sg-card:hover .sg-card-cta {\n  color: var(--tz-lime-dark);\n  gap: 0.75rem;\n}\n.sg-card--featured {\n  grid-column: span 2;\n}\n@media (max-width: 600px) {\n  .sg-card--featured {\n    grid-column: span 1;\n  }\n}\n.sg-card--featured .sg-card-img {\n  height: 260px;\n}\n.sg-card-img {\n  height: 200px;\n  border-radius: 0;\n  flex-shrink: 0;\n}\n.sg-card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.sg-card-body {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.sg-card-icon {\n  color: var(--tz-dark-green);\n  display: flex;\n}\n.sg-card-title {\n  font-family: var(--font-heading);\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--tz-charcoal);\n}\n.sg-card-desc {\n  font-size: 0.875rem;\n  color: var(--tz-text-muted);\n  line-height: 1.7;\n  flex: 1;\n}\n.sg-card-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--tz-dark-green);\n  transition: gap 0.2s ease, color 0.2s ease;\n  margin-top: auto;\n}\n.sg-footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=services-grid.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesGridComponent, { className: "ServicesGridComponent", filePath: "src/app/features/home/components/services-grid/services-grid.component.ts", lineNumber: 12 });
})();

// src/app/features/home/components/featured-services/featured-services.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function FeaturedServicesComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12)(1, "div", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275element(4, "div", 16);
    \u0275\u0275elementStart(5, "h3", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10, " Learn More ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 20);
    \u0275\u0275element(12, "path", 11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const svc_r1 = ctx.$implicit;
    const \u0275$index_21_r2 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_21_r2 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", svc_r1.image, \u0275\u0275sanitizeUrl)("alt", svc_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", svc_r1.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r1.description);
  }
}
var FeaturedServicesComponent = class _FeaturedServicesComponent {
  data = inject(DataService);
  featured = this.data.services.filter((s) => s.featured);
  static \u0275fac = function FeaturedServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturedServicesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturedServicesComponent, selectors: [["app-featured-services"]], decls: 19, vars: 0, consts: [["aria-label", "Featured services", 1, "featured-services"], [1, "container"], [1, "fs-header", "reveal"], [1, "tz-eyebrow"], [1, "tz-section-title", "tz-section-title-white", "reveal", "reveal-delay-1"], [1, "fs-sub", "reveal", "reveal-delay-2"], [1, "fs-grid"], ["routerLink", "/services", 1, "fs-card", "reveal", 3, "class"], [1, "fs-footer", "reveal"], ["routerLink", "/services", 1, "tz-btn-lime"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], ["routerLink", "/services", 1, "fs-card", "reveal"], [1, "fs-card-img", "img-mask"], ["loading", "lazy", "width", "600", "height", "360", 3, "src", "alt"], [1, "fs-card-body"], ["aria-hidden", "true", 1, "fs-card-icon", 3, "innerHTML"], [1, "fs-card-title"], [1, "fs-card-desc"], [1, "fs-card-cta"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"]], template: function FeaturedServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Our Expertise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, " Grow Your Brand");
      \u0275\u0275element(7, "br");
      \u0275\u0275text(8, "With Our Expertise. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10, " From performance marketing to brand building \u2014 we deliver measurable results across every channel. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275repeaterCreate(12, FeaturedServicesComponent_For_13_Template, 13, 7, "a", 7, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8)(15, "a", 9);
      \u0275\u0275text(16, " View All Services ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 10);
      \u0275\u0275element(18, "path", 11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.featured);
    }
  }, dependencies: [RouterLink], styles: ['\n.featured-services[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green);\n  padding: 7rem 0;\n  position: relative;\n  overflow: hidden;\n}\n.featured-services[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -30%;\n  right: -10%;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 230, 61, 0.06) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.fs-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3.5rem;\n  max-width: 600px;\n}\n.fs-sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.55);\n  line-height: 1.7;\n}\n.fs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .fs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .fs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.fs-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: background 0.3s ease, transform 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.fs-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.09);\n  transform: translateY(-4px);\n}\n.fs-card[_ngcontent-%COMP%]:hover   .fs-card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.fs-card[_ngcontent-%COMP%]:hover   .fs-card-cta[_ngcontent-%COMP%] {\n  color: var(--tz-lime);\n  gap: 0.75rem;\n}\n.fs-card-img[_ngcontent-%COMP%] {\n  height: 200px;\n  border-radius: 0;\n  flex-shrink: 0;\n}\n.fs-card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.fs-card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.fs-card-icon[_ngcontent-%COMP%] {\n  color: var(--tz-lime);\n  display: flex;\n}\n.fs-card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--tz-white);\n}\n.fs-card-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.5);\n  line-height: 1.7;\n  flex: 1;\n}\n.fs-card-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n  transition: gap 0.2s ease, color 0.2s ease;\n  margin-top: auto;\n}\n.fs-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=featured-services.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturedServicesComponent, [{
    type: Component,
    args: [{ selector: "app-featured-services", standalone: true, imports: [RouterLink], template: `<section class="featured-services" aria-label="Featured services">\r
  <div class="container">\r
    <div class="fs-header reveal">\r
      <span class="tz-eyebrow">Our Expertise</span>\r
      <h2 class="tz-section-title tz-section-title-white reveal reveal-delay-1">\r
        Grow Your Brand<br>With Our Expertise.\r
      </h2>\r
      <p class="fs-sub reveal reveal-delay-2">\r
        From performance marketing to brand building \u2014 we deliver measurable results across every channel.\r
      </p>\r
    </div>\r
\r
    <div class="fs-grid">\r
      @for (svc of featured; track svc.id; let i = $index) {\r
        <a routerLink="/services" class="fs-card reveal" [class]="'reveal-delay-' + (i + 1)">\r
          <div class="fs-card-img img-mask">\r
            <img [src]="svc.image" [alt]="svc.title" loading="lazy" width="600" height="360">\r
          </div>\r
          <div class="fs-card-body">\r
            <div class="fs-card-icon" [innerHTML]="svc.icon" aria-hidden="true"></div>\r
            <h3 class="fs-card-title">{{ svc.title }}</h3>\r
            <p class="fs-card-desc">{{ svc.description }}</p>\r
            <span class="fs-card-cta">\r
              Learn More\r
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
            </span>\r
          </div>\r
        </a>\r
      }\r
    </div>\r
\r
    <div class="fs-footer reveal">\r
      <a routerLink="/services" class="tz-btn-lime">\r
        View All Services\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/home/components/featured-services/featured-services.component.scss */\n.featured-services {\n  background: var(--tz-dark-green);\n  padding: 7rem 0;\n  position: relative;\n  overflow: hidden;\n}\n.featured-services::before {\n  content: "";\n  position: absolute;\n  top: -30%;\n  right: -10%;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 230, 61, 0.06) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.fs-header {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3.5rem;\n  max-width: 600px;\n}\n.fs-sub {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.55);\n  line-height: 1.7;\n}\n.fs-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .fs-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .fs-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.fs-card {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: background 0.3s ease, transform 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.fs-card:hover {\n  background: rgba(255, 255, 255, 0.09);\n  transform: translateY(-4px);\n}\n.fs-card:hover .fs-card-img img {\n  transform: scale(1.05);\n}\n.fs-card:hover .fs-card-cta {\n  color: var(--tz-lime);\n  gap: 0.75rem;\n}\n.fs-card-img {\n  height: 200px;\n  border-radius: 0;\n  flex-shrink: 0;\n}\n.fs-card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.fs-card-body {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.fs-card-icon {\n  color: var(--tz-lime);\n  display: flex;\n}\n.fs-card-title {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--tz-white);\n}\n.fs-card-desc {\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.5);\n  line-height: 1.7;\n  flex: 1;\n}\n.fs-card-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n  transition: gap 0.2s ease, color 0.2s ease;\n  margin-top: auto;\n}\n.fs-footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=featured-services.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturedServicesComponent, { className: "FeaturedServicesComponent", filePath: "src/app/features/home/components/featured-services/featured-services.component.ts", lineNumber: 12 });
})();

// src/app/features/home/components/why-trizone/why-trizone.component.ts
var _forTrack03 = ($index, $item) => $item.title;
function WhyTrizoneComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275domElement(1, "div", 8);
    \u0275\u0275domElementStart(2, "h3", 9);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 10);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const \u0275$index_15_r2 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_15_r2 % 3 + 1));
    \u0275\u0275advance();
    \u0275\u0275domProperty("innerHTML", r_r1.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.desc);
  }
}
var WhyTrizoneComponent = class _WhyTrizoneComponent {
  reasons = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 20h20M6 20V10l6-6 6 6v10"/></svg>`,
      title: "Strategy-Led Thinking",
      desc: "Every campaign starts with a clear strategy. We align your business goals with market insights before a single creative is produced."
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
      title: "Creative Excellence",
      desc: "Our creative team brings ideas to life with precision and originality \u2014 from brand identity to full-scale advertising campaigns."
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: "Data-Driven Results",
      desc: "We combine creativity with analytics. Every digital campaign is tracked, optimised and reported to maximise your return on investment."
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
      title: "17+ Years of Experience",
      desc: "With over 17 years in the industry and 200+ clients served, Sync Bridge brings deep market knowledge and proven execution to every project."
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: "Full-Service Capabilities",
      desc: "From strategy to execution \u2014 branding, advertising, digital, social, SEO, web and video \u2014 all under one roof for seamless delivery."
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      title: "Regional Market Expertise",
      desc: "With offices across Gujarat and deep roots in the Indian market, we understand regional audiences and how to connect with them effectively."
    }
  ];
  static \u0275fac = function WhyTrizoneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhyTrizoneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhyTrizoneComponent, selectors: [["app-why-trizone"]], decls: 10, vars: 0, consts: [["aria-label", "Why choose Sync Bridge", 1, "why-syncbridge"], [1, "container"], [1, "wt-header", "reveal"], [1, "tz-eyebrow", "tz-eyebrow-dark"], [1, "tz-section-title", "reveal", "reveal-delay-1"], [1, "wt-grid"], [1, "wt-card", "reveal", 3, "class"], [1, "wt-card", "reveal"], ["aria-hidden", "true", 1, "wt-icon", 3, "innerHTML"], [1, "wt-title"], [1, "wt-desc"]], template: function WhyTrizoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Why Sync Bridge");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h2", 4);
      \u0275\u0275text(6, "What Sets Us Apart.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 5);
      \u0275\u0275repeaterCreate(8, WhyTrizoneComponent_For_9_Template, 6, 5, "div", 6, _forTrack03);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.reasons);
    }
  }, styles: ["\n.why-syncbridge[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n  background: var(--tz-white);\n}\n.wt-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3.5rem;\n  max-width: 500px;\n}\n.wt-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 1024px) {\n  .wt-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .wt-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.wt-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border: 1px solid var(--tz-border);\n  border-radius: 16px;\n  background: var(--tz-white);\n  transition:\n    border-color 0.3s ease,\n    box-shadow 0.3s ease,\n    transform 0.3s ease;\n}\n.wt-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--tz-lime);\n  box-shadow: 0 8px 32px rgba(168, 230, 61, 0.12);\n  transform: translateY(-4px);\n}\n.wt-card[_ngcontent-%COMP%]:hover   .wt-icon[_ngcontent-%COMP%] {\n  background: var(--tz-lime);\n  color: var(--tz-dark-green);\n}\n.wt-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background: rgba(13, 43, 30, 0.06);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--tz-dark-green);\n  margin-bottom: 1.25rem;\n  transition: background 0.3s ease, color 0.3s ease;\n}\n.wt-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--tz-charcoal);\n  margin-bottom: 0.75rem;\n}\n.wt-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--tz-text-muted);\n  line-height: 1.75;\n}\n/*# sourceMappingURL=why-trizone.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhyTrizoneComponent, [{
    type: Component,
    args: [{ selector: "app-why-trizone", standalone: true, template: `<section class="why-syncbridge" aria-label="Why choose Sync Bridge">\r
  <div class="container">\r
    <div class="wt-header reveal">\r
      <span class="tz-eyebrow tz-eyebrow-dark">Why Sync Bridge</span>\r
      <h2 class="tz-section-title reveal reveal-delay-1">What Sets Us Apart.</h2>\r
    </div>\r
    <div class="wt-grid">\r
      @for (r of reasons; track r.title; let i = $index) {\r
        <div class="wt-card reveal" [class]="'reveal-delay-' + (i % 3 + 1)">\r
          <div class="wt-icon" [innerHTML]="r.icon" aria-hidden="true"></div>\r
          <h3 class="wt-title">{{ r.title }}</h3>\r
          <p class="wt-desc">{{ r.desc }}</p>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/features/home/components/why-trizone/why-trizone.component.scss */\n.why-syncbridge {\n  padding: 7rem 0;\n  background: var(--tz-white);\n}\n.wt-header {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3.5rem;\n  max-width: 500px;\n}\n.wt-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 1024px) {\n  .wt-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .wt-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.wt-card {\n  padding: 2rem;\n  border: 1px solid var(--tz-border);\n  border-radius: 16px;\n  background: var(--tz-white);\n  transition:\n    border-color 0.3s ease,\n    box-shadow 0.3s ease,\n    transform 0.3s ease;\n}\n.wt-card:hover {\n  border-color: var(--tz-lime);\n  box-shadow: 0 8px 32px rgba(168, 230, 61, 0.12);\n  transform: translateY(-4px);\n}\n.wt-card:hover .wt-icon {\n  background: var(--tz-lime);\n  color: var(--tz-dark-green);\n}\n.wt-icon {\n  width: 52px;\n  height: 52px;\n  background: rgba(13, 43, 30, 0.06);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--tz-dark-green);\n  margin-bottom: 1.25rem;\n  transition: background 0.3s ease, color 0.3s ease;\n}\n.wt-title {\n  font-family: var(--font-heading);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--tz-charcoal);\n  margin-bottom: 0.75rem;\n}\n.wt-desc {\n  font-size: 0.875rem;\n  color: var(--tz-text-muted);\n  line-height: 1.75;\n}\n/*# sourceMappingURL=why-trizone.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhyTrizoneComponent, { className: "WhyTrizoneComponent", filePath: "src/app/features/home/components/why-trizone/why-trizone.component.ts", lineNumber: 9 });
})();

// src/app/features/home/components/industries-preview/industries-preview.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function IndustriesPreviewComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const industry_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(industry_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(industry_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(industry_r1.description);
  }
}
var IndustriesPreviewComponent = class _IndustriesPreviewComponent {
  data = inject(DataService);
  static \u0275fac = function IndustriesPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IndustriesPreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IndustriesPreviewComponent, selectors: [["app-industries-preview"]], decls: 8, vars: 0, consts: [[1, "industries", "container"], [1, "tz-eyebrow", "tz-eyebrow-dark"], [1, "tz-section-title"], [1, "industry-grid"], ["routerLink", "/industries"]], template: function IndustriesPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "span", 1);
      \u0275\u0275text(2, "Industries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h2", 2);
      \u0275\u0275text(4, "Experience across sectors.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275repeaterCreate(6, IndustriesPreviewComponent_For_7_Template, 7, 3, "a", 4, _forTrack04);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.data.industries.slice(0, 6));
    }
  }, dependencies: [RouterLink], styles: ["\n.industries[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n}\n.industries[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.8rem 0 2rem;\n}\n.industry-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.industry-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border: 1px solid var(--tz-border);\n  border-radius: 10px;\n  display: grid;\n  gap: 0.5rem;\n}\n.industry-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.industry-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--tz-text-muted);\n}\n@media (max-width: 700px) {\n  .industry-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=industries-preview.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndustriesPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-industries-preview", standalone: true, imports: [RouterLink], template: `<section class="industries container"><span class="tz-eyebrow tz-eyebrow-dark">Industries</span><h2 class="tz-section-title">Experience across sectors.</h2><div class="industry-grid">@for (industry of data.industries.slice(0, 6); track industry.id) { <a routerLink="/industries"><span>{{ industry.icon }}</span><strong>{{ industry.label }}</strong><small>{{ industry.description }}</small></a> }</div></section>`, styles: ["/* angular:styles/component:scss;8617ca833edf74c6b23aa92f1c064660ee29adf09f266894d7279acc3615d71a;c:/Users/Administrator/Desktop/syncbridge/MIT-FIrst/Photography-Portfolio-UI/src/app/features/home/components/industries-preview/industries-preview.component.ts */\n.industries {\n  padding: 6rem 0;\n}\n.industries h2 {\n  margin: 0.8rem 0 2rem;\n}\n.industry-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.industry-grid a {\n  padding: 1.5rem;\n  border: 1px solid var(--tz-border);\n  border-radius: 10px;\n  display: grid;\n  gap: 0.5rem;\n}\n.industry-grid a > span {\n  font-size: 1.5rem;\n}\n.industry-grid small {\n  color: var(--tz-text-muted);\n}\n@media (max-width: 700px) {\n  .industry-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=industries-preview.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IndustriesPreviewComponent, { className: "IndustriesPreviewComponent", filePath: "src/app/features/home/components/industries-preview/industries-preview.component.ts", lineNumber: 10 });
})();

// src/app/features/home/components/work-preview/work-preview.component.ts
var _forTrack05 = ($index, $item) => $item.id;
function WorkPreviewComponent_For_16_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function WorkPreviewComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "div", 12);
    \u0275\u0275element(2, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275repeaterCreate(10, WorkPreviewComponent_For_16_For_11_Template, 2, 1, "span", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 20);
    \u0275\u0275text(13, " View Case Study ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 7);
    \u0275\u0275element(15, "path", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const \u0275$index_27_r3 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_27_r3 % 3 + 1));
    \u0275\u0275classProp("wp-card--large", \u0275$index_27_r3 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", project_r2.image, \u0275\u0275sanitizeUrl)("alt", project_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r2.industry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(project_r2.services.slice(0, 3));
  }
}
var WorkPreviewComponent = class _WorkPreviewComponent {
  data = inject(DataService);
  preview = this.data.projects.slice(0, 4);
  static \u0275fac = function WorkPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkPreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkPreviewComponent, selectors: [["app-work-preview"]], decls: 17, vars: 0, consts: [["aria-label", "Our work", 1, "work-preview"], [1, "container"], [1, "wp-header"], [1, "reveal"], [1, "tz-eyebrow", "tz-eyebrow-dark"], [1, "tz-section-title", "reveal", "reveal-delay-1"], ["routerLink", "/portfolio", 1, "tz-btn-outline-dark", "reveal", "reveal-delay-2"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "wp-grid"], ["routerLink", "/portfolio", 1, "wp-card", "reveal", 3, "wp-card--large", "class"], ["routerLink", "/portfolio", 1, "wp-card", "reveal"], [1, "wp-card-img", "img-mask"], ["loading", "lazy", "width", "800", "height", "600", 3, "src", "alt"], [1, "wp-card-overlay"], [1, "wp-card-info"], [1, "wp-card-industry"], [1, "wp-card-title"], [1, "wp-card-services"], [1, "wp-tag"], [1, "wp-card-cta"]], template: function WorkPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "Our Work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 5);
      \u0275\u0275text(7, "Work That Speaks");
      \u0275\u0275element(8, "br");
      \u0275\u0275text(9, "For Itself.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "a", 6);
      \u0275\u0275text(11, " View All Work ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 7);
      \u0275\u0275element(13, "path", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275repeaterCreate(15, WorkPreviewComponent_For_16_Template, 16, 8, "a", 10, _forTrack05);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.preview);
    }
  }, dependencies: [RouterLink], styles: ["\n.work-preview[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n  background: var(--tz-off-white);\n}\n.wp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 3rem;\n  flex-wrap: wrap;\n}\n.wp-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.wp-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .wp-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.wp-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  display: block;\n  background: var(--tz-charcoal);\n}\n.wp-card--large[_ngcontent-%COMP%] {\n  grid-row: span 2;\n}\n.wp-card[_ngcontent-%COMP%]:hover   .wp-card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.wp-card[_ngcontent-%COMP%]:hover   .wp-card-overlay[_ngcontent-%COMP%] {\n  background: rgba(13, 43, 30, 0.75);\n}\n.wp-card[_ngcontent-%COMP%]:hover   .wp-card-cta[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.wp-card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 260px;\n  border-radius: 0;\n}\n.wp-card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s ease;\n  min-height: 260px;\n}\n.wp-card-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(13, 43, 30, 0.9) 0%,\n      rgba(13, 43, 30, 0.2) 60%,\n      transparent 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 1.75rem;\n  transition: background 0.3s ease;\n}\n.wp-card-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.wp-card-industry[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--tz-lime);\n}\n.wp-card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--tz-white);\n}\n.wp-card-services[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.25rem;\n}\n.wp-tag[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.65);\n  background: rgba(255, 255, 255, 0.1);\n  padding: 0.2rem 0.6rem;\n  border-radius: 100px;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.wp-card-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--tz-lime);\n  margin-top: 0.75rem;\n  opacity: 0;\n  transform: translateY(8px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n/*# sourceMappingURL=work-preview.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-work-preview", standalone: true, imports: [RouterLink], template: `<section class="work-preview" aria-label="Our work">\r
  <div class="container">\r
    <div class="wp-header">\r
      <div class="reveal">\r
        <span class="tz-eyebrow tz-eyebrow-dark">Our Work</span>\r
        <h2 class="tz-section-title reveal reveal-delay-1">Work That Speaks<br>For Itself.</h2>\r
      </div>\r
      <a routerLink="/portfolio" class="tz-btn-outline-dark reveal reveal-delay-2">\r
        View All Work\r
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
      </a>\r
    </div>\r
\r
    <div class="wp-grid">\r
      @for (project of preview; track project.id; let i = $index) {\r
        <a routerLink="/portfolio" class="wp-card reveal" [class.wp-card--large]="i === 0" [class]="'reveal-delay-' + (i % 3 + 1)">\r
          <div class="wp-card-img img-mask">\r
            <img [src]="project.image" [alt]="project.title" loading="lazy" width="800" height="600">\r
          </div>\r
          <div class="wp-card-overlay">\r
            <div class="wp-card-info">\r
              <span class="wp-card-industry">{{ project.industry }}</span>\r
              <h3 class="wp-card-title">{{ project.title }}</h3>\r
              <div class="wp-card-services">\r
                @for (s of project.services.slice(0,3); track s) {\r
                  <span class="wp-tag">{{ s }}</span>\r
                }\r
              </div>\r
            </div>\r
            <span class="wp-card-cta">\r
              View Case Study\r
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
            </span>\r
          </div>\r
        </a>\r
      }\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/features/home/components/work-preview/work-preview.component.scss */\n.work-preview {\n  padding: 7rem 0;\n  background: var(--tz-off-white);\n}\n.wp-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 3rem;\n  flex-wrap: wrap;\n}\n.wp-header > div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.wp-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .wp-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.wp-card {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  display: block;\n  background: var(--tz-charcoal);\n}\n.wp-card--large {\n  grid-row: span 2;\n}\n.wp-card:hover .wp-card-img img {\n  transform: scale(1.06);\n}\n.wp-card:hover .wp-card-overlay {\n  background: rgba(13, 43, 30, 0.75);\n}\n.wp-card:hover .wp-card-cta {\n  opacity: 1;\n  transform: translateY(0);\n}\n.wp-card-img {\n  width: 100%;\n  height: 100%;\n  min-height: 260px;\n  border-radius: 0;\n}\n.wp-card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s ease;\n  min-height: 260px;\n}\n.wp-card-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(13, 43, 30, 0.9) 0%,\n      rgba(13, 43, 30, 0.2) 60%,\n      transparent 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 1.75rem;\n  transition: background 0.3s ease;\n}\n.wp-card-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.wp-card-industry {\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--tz-lime);\n}\n.wp-card-title {\n  font-family: var(--font-heading);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--tz-white);\n}\n.wp-card-services {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.25rem;\n}\n.wp-tag {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.65);\n  background: rgba(255, 255, 255, 0.1);\n  padding: 0.2rem 0.6rem;\n  border-radius: 100px;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.wp-card-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--tz-lime);\n  margin-top: 0.75rem;\n  opacity: 0;\n  transform: translateY(8px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n/*# sourceMappingURL=work-preview.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkPreviewComponent, { className: "WorkPreviewComponent", filePath: "src/app/features/home/components/work-preview/work-preview.component.ts", lineNumber: 12 });
})();

// src/app/features/home/components/stats/stats.component.ts
var _forTrack06 = ($index, $item) => $item.label;
function StatsComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", stat_r1.num, "", stat_r1.suffix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
var StatsComponent = class _StatsComponent {
  data = inject(DataService);
  static \u0275fac = function StatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatsComponent, selectors: [["app-stats"]], decls: 5, vars: 0, consts: [[1, "stats"], [1, "container"], [1, "stats-grid"]], template: function StatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275repeaterCreate(3, StatsComponent_For_4_Template, 5, 3, "div", null, _forTrack06);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.data.stats);
    }
  }, styles: ["\n.stats[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green);\n  padding: 3.5rem 0;\n  color: var(--tz-white);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  text-align: center;\n}\n.stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--tz-lime);\n  font-size: clamp(2rem, 5vw, 3.5rem);\n}\n.stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n@media (max-width: 700px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=stats.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatsComponent, [{
    type: Component,
    args: [{ selector: "app-stats", standalone: true, template: `<section class="stats"><div class="container"><div class="stats-grid">@for (stat of data.stats; track stat.label) { <div><strong>{{ stat.num }}{{ stat.suffix }}</strong><span>{{ stat.label }}</span></div> }</div></div></section>`, styles: ["/* angular:styles/component:scss;bfc3a31fa51e6554dce2c37e0b08936c4d54a224b53fa1682d5241ccfe0440ba;c:/Users/Administrator/Desktop/syncbridge/MIT-FIrst/Photography-Portfolio-UI/src/app/features/home/components/stats/stats.component.ts */\n.stats {\n  background: var(--tz-dark-green);\n  padding: 3.5rem 0;\n  color: var(--tz-white);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  text-align: center;\n}\n.stats strong {\n  display: block;\n  color: var(--tz-lime);\n  font-size: clamp(2rem, 5vw, 3.5rem);\n}\n.stats span {\n  color: rgba(255, 255, 255, 0.7);\n}\n@media (max-width: 700px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=stats.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatsComponent, { className: "StatsComponent", filePath: "src/app/features/home/components/stats/stats.component.ts", lineNumber: 10 });
})();

// src/app/features/home/components/testimonials/testimonials.component.ts
var _forTrack07 = ($index, $item) => $item.id;
function TestimonialsComponent_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 20);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("src", t_r1.image, \u0275\u0275sanitizeUrl)("alt", t_r1.name);
  }
}
function TestimonialsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3, '"');
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "blockquote", 18);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 19);
    \u0275\u0275conditionalCreate(7, TestimonialsComponent_For_9_Conditional_7_Template, 1, 2, "img", 20);
    \u0275\u0275domElementStart(8, "div", 21)(9, "cite", 22);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span", 23);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const \u0275$index_15_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.active() === \u0275$index_15_r2);
    \u0275\u0275attribute("aria-hidden", ctx_r2.active() !== \u0275$index_15_r2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r1.quote);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(t_r1.image ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r1.role, ", ", t_r1.company);
  }
}
function TestimonialsComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 24);
    \u0275\u0275domListener("click", function TestimonialsComponent_For_16_Template_button_click_0_listener() {
      const \u0275$index_49_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(\u0275$index_49_r5));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const \u0275$index_49_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.active() === \u0275$index_49_r5);
    \u0275\u0275attribute("aria-selected", ctx_r2.active() === \u0275$index_49_r5)("aria-label", "Testimonial " + (\u0275$index_49_r5 + 1));
  }
}
var TestimonialsComponent = class _TestimonialsComponent {
  data = inject(DataService);
  active = signal(0, ...ngDevMode ? [{ debugName: "active" }] : (
    /* istanbul ignore next */
    []
  ));
  prev() {
    this.active.update((v) => (v - 1 + this.data.testimonials.length) % this.data.testimonials.length);
  }
  next() {
    this.active.update((v) => (v + 1) % this.data.testimonials.length);
  }
  goTo(i) {
    this.active.set(i);
  }
  static \u0275fac = function TestimonialsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestimonialsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialsComponent, selectors: [["app-testimonials"]], decls: 20, vars: 0, consts: [["aria-label", "Client testimonials", 1, "testimonials"], [1, "container"], [1, "t-header", "reveal"], [1, "tz-eyebrow", "tz-eyebrow-dark"], [1, "tz-section-title", "reveal", "reveal-delay-1"], [1, "t-carousel", "reveal", "reveal-delay-2"], [1, "t-slide", 3, "active"], [1, "t-controls"], ["aria-label", "Previous testimonial", 1, "t-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M19 12H5M12 19l-7-7 7-7"], ["role", "tablist", 1, "t-dots"], ["role", "tab", 1, "t-dot", 3, "active"], ["aria-label", "Next testimonial", 1, "t-btn", 3, "click"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "t-slide"], [1, "t-card"], ["aria-hidden", "true", 1, "t-quote-mark"], [1, "t-quote"], [1, "t-author"], ["loading", "lazy", "width", "52", "height", "52", 1, "t-avatar", 3, "src", "alt"], [1, "t-author-info"], [1, "t-name"], [1, "t-role"], ["role", "tab", 1, "t-dot", 3, "click"]], template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Testimonials");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h2", 4);
      \u0275\u0275text(6, "What Our Clients Say.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 5);
      \u0275\u0275repeaterCreate(8, TestimonialsComponent_For_9_Template, 13, 8, "div", 6, _forTrack07);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 7)(11, "button", 8);
      \u0275\u0275domListener("click", function TestimonialsComponent_Template_button_click_11_listener() {
        return ctx.prev();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(12, "svg", 9);
      \u0275\u0275domElement(13, "path", 10);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(14, "div", 11);
      \u0275\u0275repeaterCreate(15, TestimonialsComponent_For_16_Template, 1, 4, "button", 12, _forTrack07);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "button", 13);
      \u0275\u0275domListener("click", function TestimonialsComponent_Template_button_click_17_listener() {
        return ctx.next();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(18, "svg", 9);
      \u0275\u0275domElement(19, "path", 14);
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.data.testimonials);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.data.testimonials);
    }
  }, styles: ["\n.testimonials[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n  background: var(--tz-white);\n}\n.t-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3rem;\n  max-width: 480px;\n}\n.t-carousel[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 280px;\n}\n.t-slide[_ngcontent-%COMP%] {\n  display: none;\n}\n.t-slide.active[_ngcontent-%COMP%] {\n  display: block;\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.t-card[_ngcontent-%COMP%] {\n  background: var(--tz-off-white);\n  border: 1px solid var(--tz-border);\n  border-radius: 20px;\n  padding: 3rem;\n  position: relative;\n  max-width: 860px;\n}\n@media (max-width: 600px) {\n  .t-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n}\n.t-quote-mark[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 6rem;\n  line-height: 1;\n  color: var(--tz-lime);\n  position: absolute;\n  top: 1.5rem;\n  left: 2.5rem;\n  opacity: 0.4;\n  pointer-events: none;\n}\n.t-quote[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  font-weight: 500;\n  color: var(--tz-charcoal);\n  line-height: 1.7;\n  font-style: normal;\n  margin-bottom: 2rem;\n  padding-top: 1.5rem;\n}\n.t-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.t-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 2px solid var(--tz-lime);\n}\n.t-name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-heading);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--tz-charcoal);\n  font-style: normal;\n}\n.t-role[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--tz-text-muted);\n}\n.t-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.t-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 1.5px solid var(--tz-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--tz-charcoal);\n  transition: all 0.25s ease;\n  flex-shrink: 0;\n}\n.t-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--tz-dark-green);\n  background: var(--tz-dark-green);\n  color: var(--tz-white);\n}\n.t-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.t-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--tz-border);\n  transition: all 0.25s ease;\n}\n.t-dot.active[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green);\n  width: 24px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=testimonials.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialsComponent, [{
    type: Component,
    args: [{ selector: "app-testimonials", standalone: true, template: `<section class="testimonials" aria-label="Client testimonials">\r
  <div class="container">\r
    <div class="t-header reveal">\r
      <span class="tz-eyebrow tz-eyebrow-dark">Testimonials</span>\r
      <h2 class="tz-section-title reveal reveal-delay-1">What Our Clients Say.</h2>\r
    </div>\r
\r
    <div class="t-carousel reveal reveal-delay-2">\r
      @for (t of data.testimonials; track t.id; let i = $index) {\r
        <div class="t-slide" [class.active]="active() === i" [attr.aria-hidden]="active() !== i">\r
          <div class="t-card">\r
            <div class="t-quote-mark" aria-hidden="true">"</div>\r
            <blockquote class="t-quote">{{ t.quote }}</blockquote>\r
            <div class="t-author">\r
              @if (t.image) {\r
                <img [src]="t.image" [alt]="t.name" loading="lazy" width="52" height="52" class="t-avatar">\r
              }\r
              <div class="t-author-info">\r
                <cite class="t-name">{{ t.name }}</cite>\r
                <span class="t-role">{{ t.role }}, {{ t.company }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
\r
    <div class="t-controls">\r
      <button class="t-btn" (click)="prev()" aria-label="Previous testimonial">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>\r
      </button>\r
      <div class="t-dots" role="tablist">\r
        @for (t of data.testimonials; track t.id; let i = $index) {\r
          <button class="t-dot" [class.active]="active() === i" (click)="goTo(i)"\r
                  role="tab" [attr.aria-selected]="active() === i" [attr.aria-label]="'Testimonial ' + (i+1)">\r
          </button>\r
        }\r
      </div>\r
      <button class="t-btn" (click)="next()" aria-label="Next testimonial">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
      </button>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/features/home/components/testimonials/testimonials.component.scss */\n.testimonials {\n  padding: 7rem 0;\n  background: var(--tz-white);\n}\n.t-header {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3rem;\n  max-width: 480px;\n}\n.t-carousel {\n  position: relative;\n  min-height: 280px;\n}\n.t-slide {\n  display: none;\n}\n.t-slide.active {\n  display: block;\n  animation: fadeUp 0.4s ease;\n}\n@keyframes fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.t-card {\n  background: var(--tz-off-white);\n  border: 1px solid var(--tz-border);\n  border-radius: 20px;\n  padding: 3rem;\n  position: relative;\n  max-width: 860px;\n}\n@media (max-width: 600px) {\n  .t-card {\n    padding: 2rem 1.5rem;\n  }\n}\n.t-quote-mark {\n  font-family: var(--font-heading);\n  font-size: 6rem;\n  line-height: 1;\n  color: var(--tz-lime);\n  position: absolute;\n  top: 1.5rem;\n  left: 2.5rem;\n  opacity: 0.4;\n  pointer-events: none;\n}\n.t-quote {\n  font-family: var(--font-heading);\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  font-weight: 500;\n  color: var(--tz-charcoal);\n  line-height: 1.7;\n  font-style: normal;\n  margin-bottom: 2rem;\n  padding-top: 1.5rem;\n}\n.t-author {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.t-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 2px solid var(--tz-lime);\n}\n.t-name {\n  display: block;\n  font-family: var(--font-heading);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--tz-charcoal);\n  font-style: normal;\n}\n.t-role {\n  font-size: 0.8rem;\n  color: var(--tz-text-muted);\n}\n.t-controls {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.t-btn {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 1.5px solid var(--tz-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--tz-charcoal);\n  transition: all 0.25s ease;\n  flex-shrink: 0;\n}\n.t-btn:hover {\n  border-color: var(--tz-dark-green);\n  background: var(--tz-dark-green);\n  color: var(--tz-white);\n}\n.t-dots {\n  display: flex;\n  gap: 0.5rem;\n}\n.t-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--tz-border);\n  transition: all 0.25s ease;\n}\n.t-dot.active {\n  background: var(--tz-dark-green);\n  width: 24px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=testimonials.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialsComponent, { className: "TestimonialsComponent", filePath: "src/app/features/home/components/testimonials/testimonials.component.ts", lineNumber: 10 });
})();

// src/app/features/home/components/cta-band/cta-band.component.ts
var CtaBandComponent = class _CtaBandComponent {
  static \u0275fac = function CtaBandComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CtaBandComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CtaBandComponent, selectors: [["app-cta-band"]], decls: 9, vars: 0, consts: [[1, "cta"], [1, "container"], ["routerLink", "/contact", 1, "tz-btn-lime"]], template: function CtaBandComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "span");
      \u0275\u0275text(4, "Let's create something meaningful");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6, "Ready to grow your brand?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 2);
      \u0275\u0275text(8, "Start a conversation");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterLink], styles: ["\n.cta[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: var(--tz-dark-green);\n}\n.cta[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n}\n.cta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--tz-lime);\n  font-weight: 600;\n}\n.cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--tz-white);\n  margin-top: 0.5rem;\n}\n@media (max-width: 700px) {\n  .cta[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=cta-band.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CtaBandComponent, [{
    type: Component,
    args: [{ selector: "app-cta-band", standalone: true, imports: [RouterLink], template: `<section class="cta"><div class="container"><div><span>Let's create something meaningful</span><h2>Ready to grow your brand?</h2></div><a routerLink="/contact" class="tz-btn-lime">Start a conversation</a></div></section>`, styles: ["/* angular:styles/component:scss;ed777d03ca9dc7df7df7e6f072fb9c009ffc227ad10e50021fecee05b391316a;c:/Users/Administrator/Desktop/syncbridge/MIT-FIrst/Photography-Portfolio-UI/src/app/features/home/components/cta-band/cta-band.component.ts */\n.cta {\n  padding: 4rem 0;\n  background: var(--tz-dark-green);\n}\n.cta .container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n}\n.cta span {\n  color: var(--tz-lime);\n  font-weight: 600;\n}\n.cta h2 {\n  color: var(--tz-white);\n  margin-top: 0.5rem;\n}\n@media (max-width: 700px) {\n  .cta .container {\n    align-items: start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=cta-band.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CtaBandComponent, { className: "CtaBandComponent", filePath: "src/app/features/home/components/cta-band/cta-band.component.ts", lineNumber: 9 });
})();

// src/app/features/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-hero")(1, "app-service-strip")(2, "app-about-intro")(3, "app-services-grid")(4, "app-featured-services")(5, "app-why-trizone")(6, "app-work-preview")(7, "app-stats")(8, "app-industries-preview")(9, "app-testimonials")(10, "app-cta-band");
    }
  }, dependencies: [
    HeroComponent,
    ServiceStripComponent,
    AboutIntroComponent,
    ServicesGridComponent,
    FeaturedServicesComponent,
    WhyTrizoneComponent,
    IndustriesPreviewComponent,
    WorkPreviewComponent,
    StatsComponent,
    TestimonialsComponent,
    CtaBandComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{
      selector: "app-home",
      standalone: true,
      imports: [
        HeroComponent,
        ServiceStripComponent,
        AboutIntroComponent,
        ServicesGridComponent,
        FeaturedServicesComponent,
        WhyTrizoneComponent,
        IndustriesPreviewComponent,
        WorkPreviewComponent,
        StatsComponent,
        TestimonialsComponent,
        CtaBandComponent
      ],
      template: `
    <app-hero />
    <app-service-strip />
    <app-about-intro />
    <app-services-grid />
    <app-featured-services />
    <app-why-trizone />
    <app-work-preview />
    <app-stats />
    <app-industries-preview />
    <app-testimonials />
    <app-cta-band />
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 44 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-BSEHGF37.js.map
