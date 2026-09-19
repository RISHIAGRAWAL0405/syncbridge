import {
  CursorService
} from "./chunk-7TA23TU3.js";
import {
  DataService
} from "./chunk-GJMBPRDX.js";
import {
  AnimationService
} from "./chunk-A45UTPAL.js";
import {
  ActivatedRoute
} from "./chunk-RBKBNWPP.js";
import "./chunk-WWIHBCUC.js";
import {
  isPlatformBrowser
} from "./chunk-URCQYAQL.js";
import {
  Component,
  PLATFORM_ID,
  computed,
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
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CQ3CZWR7.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/portfolio/portfolio.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PortfolioComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 12);
    \u0275\u0275domListener("click", function PortfolioComponent_For_16_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(f_r2.id));
    })("mouseenter", function PortfolioComponent_For_16_Template_button_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cursor.setHover(true));
    })("mouseleave", function PortfolioComponent_For_16_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cursor.setHover(false));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeFilter() === f_r2.id);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeFilter() === f_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function PortfolioComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 13);
    \u0275\u0275domListener("click", function PortfolioComponent_For_19_Template_div_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openLightbox(item_r5));
    })("mouseenter", function PortfolioComponent_For_19_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cursor.setHover(true, "View"));
    })("mouseleave", function PortfolioComponent_For_19_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cursor.setHover(false));
    });
    \u0275\u0275domElementStart(1, "div", 14);
    \u0275\u0275domElement(2, "img", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 16)(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "h3", 18);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const \u0275$index_33_r6 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_33_r6 % 4 + 1));
    \u0275\u0275attribute("data-category", item_r5.category);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", item_r5.image, \u0275\u0275sanitizeUrl)("alt", item_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.title);
  }
}
function PortfolioComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 19);
    \u0275\u0275domListener("keydown.escape", function PortfolioComponent_Conditional_20_Template_div_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    })("keydown.arrowleft", function PortfolioComponent_Conditional_20_Template_div_keydown_arrowleft_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevItem());
    })("keydown.arrowright", function PortfolioComponent_Conditional_20_Template_div_keydown_arrowright_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextItem());
    });
    \u0275\u0275domElementStart(1, "div", 20);
    \u0275\u0275domListener("click", function PortfolioComponent_Conditional_20_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 21);
    \u0275\u0275domListener("click", function PortfolioComponent_Conditional_20_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(3, "svg", 22);
    \u0275\u0275domElement(4, "path", 23);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "button", 24);
    \u0275\u0275domListener("click", function PortfolioComponent_Conditional_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevItem());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(6, "svg", 22);
    \u0275\u0275domElement(7, "path", 25);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(8, "div", 26);
    \u0275\u0275domElement(9, "img", 27);
    \u0275\u0275domElementStart(10, "div", 28)(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "h3", 30);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 31);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(17, "button", 32);
    \u0275\u0275domListener("click", function PortfolioComponent_Conditional_20_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextItem());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(18, "svg", 22);
    \u0275\u0275domElement(19, "path", 33);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r2.lightboxItem().title);
    \u0275\u0275advance(9);
    \u0275\u0275domProperty("src", ctx_r2.lightboxItem().image, \u0275\u0275sanitizeUrl)("alt", ctx_r2.lightboxItem().title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.lightboxItem().category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.lightboxItem().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.lightboxIndex() + 1, " / ", ctx_r2.filtered().length);
  }
}
var PortfolioComponent = class _PortfolioComponent {
  platformId = inject(PLATFORM_ID);
  data = inject(DataService);
  cursor = inject(CursorService);
  anim = inject(AnimationService);
  route = inject(ActivatedRoute);
  activeFilter = signal("all", ...ngDevMode ? [{ debugName: "activeFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  lightboxItem = signal(null, ...ngDevMode ? [{ debugName: "lightboxItem" }] : (
    /* istanbul ignore next */
    []
  ));
  lightboxIndex = signal(0, ...ngDevMode ? [{ debugName: "lightboxIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  filters = [
    { id: "all", label: "All Work" },
    { id: "wedding", label: "Wedding" },
    { id: "portrait", label: "Portrait" },
    { id: "fashion", label: "Fashion" },
    { id: "travel", label: "Travel" },
    { id: "commercial", label: "Commercial" },
    { id: "nature", label: "Nature" }
  ];
  filtered = computed(() => this.activeFilter() === "all" ? this.data.portfolioItems : this.data.portfolioItems.filter((i) => i.category === this.activeFilter()), ...ngDevMode ? [{ debugName: "filtered" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.route.queryParams.subscribe((p) => {
      if (p["category"])
        this.activeFilter.set(p["category"]);
    });
    setTimeout(() => this.anim.observeAll(), 100);
  }
  setFilter(id) {
    this.activeFilter.set(id);
    setTimeout(() => this.anim.observeAll(), 50);
  }
  openLightbox(item) {
    this.lightboxItem.set(item);
    this.lightboxIndex.set(this.filtered().findIndex(({ id }) => id === item.id));
    if (isPlatformBrowser(this.platformId))
      document.body.style.overflow = "hidden";
  }
  closeLightbox() {
    this.lightboxItem.set(null);
    if (isPlatformBrowser(this.platformId))
      document.body.style.overflow = "";
  }
  prevItem() {
    const items = this.filtered();
    const idx = (this.lightboxIndex() - 1 + items.length) % items.length;
    this.lightboxIndex.set(idx);
    this.lightboxItem.set(items[idx]);
  }
  nextItem() {
    const items = this.filtered();
    const idx = (this.lightboxIndex() + 1) % items.length;
    this.lightboxIndex.set(idx);
    this.lightboxItem.set(items[idx]);
  }
  static \u0275fac = function PortfolioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioComponent, selectors: [["app-portfolio"]], decls: 21, vars: 1, consts: [[1, "portfolio-page"], [1, "portfolio-header"], [1, "container"], [1, "section-label", "reveal"], [1, "portfolio-title", "reveal", "reveal-delay-1"], [1, "portfolio-sub", "reveal", "reveal-delay-2"], [1, "portfolio-filters", "reveal", "reveal-delay-3"], ["role", "tablist", "aria-label", "Portfolio filters", 1, "filters-wrap"], ["role", "tab", 1, "filter-btn", 3, "active"], [1, "portfolio-grid", "container"], [1, "portfolio-item", "reveal", 3, "class"], ["role", "dialog", "aria-modal", "true", "tabindex", "0", 1, "lightbox"], ["role", "tab", 1, "filter-btn", 3, "click", "mouseenter", "mouseleave"], [1, "portfolio-item", "reveal", 3, "click", "mouseenter", "mouseleave"], [1, "portfolio-img-wrap", "img-mask"], ["loading", "lazy", "width", "900", "height", "600", 3, "src", "alt"], [1, "portfolio-item-overlay"], [1, "portfolio-item-cat"], [1, "portfolio-item-title"], ["role", "dialog", "aria-modal", "true", "tabindex", "0", 1, "lightbox", 3, "keydown.escape", "keydown.arrowleft", "keydown.arrowright"], [1, "lightbox-backdrop", 3, "click"], ["aria-label", "Close", 1, "lb-close", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M18 6L6 18M6 6l12 12"], ["aria-label", "Previous image", 1, "lb-nav", "lb-prev", 3, "click"], ["d", "M19 12H5M12 19l-7-7 7-7"], [1, "lb-content"], ["loading", "lazy", 3, "src", "alt"], [1, "lb-info"], [1, "lb-cat"], [1, "lb-title"], [1, "lb-counter"], ["aria-label", "Next image", 1, "lb-nav", "lb-next", 3, "click"], ["d", "M5 12h14M12 5l7 7-7 7"]], template: function PortfolioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Portfolio");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h1", 4);
      \u0275\u0275text(6, "Visual");
      \u0275\u0275domElement(7, "br");
      \u0275\u0275domElementStart(8, "em");
      \u0275\u0275text(9, "Stories");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "p", 5);
      \u0275\u0275text(11, "A curated collection of our finest work across every discipline.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(12, "div", 6)(13, "div", 2)(14, "div", 7);
      \u0275\u0275repeaterCreate(15, PortfolioComponent_For_16_Template, 2, 4, "button", 8, _forTrack0);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(17, "div", 9);
      \u0275\u0275repeaterCreate(18, PortfolioComponent_For_19_Template, 8, 7, "div", 10, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(20, PortfolioComponent_Conditional_20_Template, 20, 7, "div", 11);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.filters);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.filtered());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.lightboxItem() ? 20 : -1);
    }
  }, styles: ["\n.portfolio-page[_ngcontent-%COMP%] {\n  padding-top: var(--nav-height);\n  min-height: 100vh;\n}\n.portfolio-header[_ngcontent-%COMP%] {\n  padding: 5rem 0 3rem;\n}\n.portfolio-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.portfolio-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(3.5rem, 10vw, 8rem);\n  font-weight: 800;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n  margin: 1rem 0;\n}\n.portfolio-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.portfolio-sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  max-width: 400px;\n}\n.portfolio-filters[_ngcontent-%COMP%] {\n  padding: 2rem 0 3rem;\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: 3rem;\n}\n.filters-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.6rem 1.25rem;\n  border: 1px solid var(--color-border);\n  color: var(--color-text-muted);\n  transition: all 0.3s ease;\n  cursor: none;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  border-color: var(--color-accent);\n  color: var(--color-bg);\n}\n.portfolio-grid[_ngcontent-%COMP%] {\n  columns: 3;\n  column-gap: 1rem;\n  padding-bottom: 6rem;\n}\n@media (max-width: 900px) {\n  .portfolio-grid[_ngcontent-%COMP%] {\n    columns: 2;\n  }\n}\n@media (max-width: 560px) {\n  .portfolio-grid[_ngcontent-%COMP%] {\n    columns: 1;\n  }\n}\n.portfolio-item[_ngcontent-%COMP%] {\n  break-inside: avoid;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  cursor: none;\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.portfolio-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  transform: scale(1.04);\n  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.portfolio-item-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(11, 11, 11, 0.88) 0%,\n      transparent 55%);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 1.5rem;\n}\n.portfolio-item-cat[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  margin-bottom: 0.3rem;\n}\n.portfolio-item-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-secondary);\n}\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_lbIn 0.35s ease;\n  outline: none;\n}\n@keyframes _ngcontent-%COMP%_lbIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.lightbox-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(11, 11, 11, 0.97);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.lb-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 1;\n  width: 48px;\n  height: 48px;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-secondary);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.lb-close[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.lb-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  width: 52px;\n  height: 52px;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-secondary);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.lb-nav[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.lb-nav.lb-prev[_ngcontent-%COMP%] {\n  left: 1.5rem;\n}\n.lb-nav.lb-next[_ngcontent-%COMP%] {\n  right: 1.5rem;\n}\n@media (max-width: 640px) {\n  .lb-nav[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 5rem;\n    transform: none;\n  }\n  .lb-nav.lb-prev[_ngcontent-%COMP%] {\n    left: 50%;\n    transform: translateX(calc(-100% - 0.5rem));\n  }\n  .lb-nav.lb-next[_ngcontent-%COMP%] {\n    right: auto;\n    left: 50%;\n    transform: translateX(0.5rem);\n  }\n}\n.lb-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  max-width: min(90vw, 1000px);\n  animation: _ngcontent-%COMP%_lbContentIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.lb-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 80vh;\n  max-width: 100%;\n  object-fit: contain;\n}\n@keyframes _ngcontent-%COMP%_lbContentIn {\n  from {\n    transform: scale(0.92);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.lb-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  width: 100%;\n}\n.lb-cat[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n}\n.lb-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  color: var(--color-secondary);\n  flex: 1;\n}\n.lb-counter[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.1em;\n}\n/*# sourceMappingURL=portfolio.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortfolioComponent, [{
    type: Component,
    args: [{ selector: "app-portfolio", standalone: true, template: `<div class="portfolio-page">\r
  <!-- Header -->\r
  <div class="portfolio-header">\r
    <div class="container">\r
      <span class="section-label reveal">Portfolio</span>\r
      <h1 class="portfolio-title reveal reveal-delay-1">Visual<br><em>Stories</em></h1>\r
      <p class="portfolio-sub reveal reveal-delay-2">A curated collection of our finest work across every discipline.</p>\r
    </div>\r
  </div>\r
\r
  <!-- Filters -->\r
  <div class="portfolio-filters reveal reveal-delay-3">\r
    <div class="container">\r
      <div class="filters-wrap" role="tablist" aria-label="Portfolio filters">\r
        @for (f of filters; track f.id) {\r
          <button class="filter-btn" [class.active]="activeFilter() === f.id"\r
                  (click)="setFilter(f.id)" role="tab" [attr.aria-selected]="activeFilter() === f.id"\r
                  (mouseenter)="cursor.setHover(true)" (mouseleave)="cursor.setHover(false)">\r
            {{ f.label }}\r
          </button>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Grid -->\r
  <div class="portfolio-grid container">\r
    @for (item of filtered(); track item.id; let i = $index) {\r
      <div class="portfolio-item reveal" [class]="'reveal-delay-' + (i % 4 + 1)"\r
           [attr.data-category]="item.category"\r
           (click)="openLightbox(item)"\r
           (mouseenter)="cursor.setHover(true, 'View')" (mouseleave)="cursor.setHover(false)">\r
        <div class="portfolio-img-wrap img-mask">\r
          <img [src]="item.image" [alt]="item.title" loading="lazy" width="900" height="600">\r
        </div>\r
        <div class="portfolio-item-overlay">\r
          <span class="portfolio-item-cat">{{ item.category }}</span>\r
          <h3 class="portfolio-item-title">{{ item.title }}</h3>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- Lightbox -->\r
  @if (lightboxItem()) {\r
    <div class="lightbox" role="dialog" aria-modal="true" [attr.aria-label]="lightboxItem()!.title"\r
         (keydown.escape)="closeLightbox()" (keydown.arrowleft)="prevItem()" (keydown.arrowright)="nextItem()" tabindex="0">\r
      <div class="lightbox-backdrop" (click)="closeLightbox()"></div>\r
\r
      <button class="lb-close" (click)="closeLightbox()" aria-label="Close">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>\r
      </button>\r
\r
      <button class="lb-nav lb-prev" (click)="prevItem()" aria-label="Previous image">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>\r
      </button>\r
\r
      <div class="lb-content">\r
        <img [src]="lightboxItem()!.image" [alt]="lightboxItem()!.title" loading="lazy">\r
        <div class="lb-info">\r
          <span class="lb-cat">{{ lightboxItem()!.category }}</span>\r
          <h3 class="lb-title">{{ lightboxItem()!.title }}</h3>\r
          <span class="lb-counter">{{ lightboxIndex() + 1 }} / {{ filtered().length }}</span>\r
        </div>\r
      </div>\r
\r
      <button class="lb-nav lb-next" (click)="nextItem()" aria-label="Next image">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
      </button>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/portfolio/portfolio.component.scss */\n.portfolio-page {\n  padding-top: var(--nav-height);\n  min-height: 100vh;\n}\n.portfolio-header {\n  padding: 5rem 0 3rem;\n}\n.portfolio-header .section-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.portfolio-title {\n  font-family: var(--font-heading);\n  font-size: clamp(3.5rem, 10vw, 8rem);\n  font-weight: 800;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n  margin: 1rem 0;\n}\n.portfolio-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.portfolio-sub {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  max-width: 400px;\n}\n.portfolio-filters {\n  padding: 2rem 0 3rem;\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: 3rem;\n}\n.filters-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.filter-btn {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.6rem 1.25rem;\n  border: 1px solid var(--color-border);\n  color: var(--color-text-muted);\n  transition: all 0.3s ease;\n  cursor: none;\n}\n.filter-btn:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.filter-btn.active {\n  background: var(--color-accent);\n  border-color: var(--color-accent);\n  color: var(--color-bg);\n}\n.portfolio-grid {\n  columns: 3;\n  column-gap: 1rem;\n  padding-bottom: 6rem;\n}\n@media (max-width: 900px) {\n  .portfolio-grid {\n    columns: 2;\n  }\n}\n@media (max-width: 560px) {\n  .portfolio-grid {\n    columns: 1;\n  }\n}\n.portfolio-item {\n  break-inside: avoid;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  cursor: none;\n}\n.portfolio-item:hover .portfolio-img-wrap img {\n  transform: scale(1.06);\n}\n.portfolio-item:hover .portfolio-item-overlay {\n  opacity: 1;\n}\n.portfolio-img-wrap img {\n  width: 100%;\n  height: auto;\n  display: block;\n  transform: scale(1.04);\n  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.portfolio-item-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(11, 11, 11, 0.88) 0%,\n      transparent 55%);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 1.5rem;\n}\n.portfolio-item-cat {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  margin-bottom: 0.3rem;\n}\n.portfolio-item-title {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-secondary);\n}\n.lightbox {\n  position: fixed;\n  inset: 0;\n  z-index: 9000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: lbIn 0.35s ease;\n  outline: none;\n}\n@keyframes lbIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.lightbox-backdrop {\n  position: absolute;\n  inset: 0;\n  background: rgba(11, 11, 11, 0.97);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.lb-close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 1;\n  width: 48px;\n  height: 48px;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-secondary);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.lb-close:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.lb-nav {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  width: 52px;\n  height: 52px;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-secondary);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.lb-nav:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.lb-nav.lb-prev {\n  left: 1.5rem;\n}\n.lb-nav.lb-next {\n  right: 1.5rem;\n}\n@media (max-width: 640px) {\n  .lb-nav {\n    top: auto;\n    bottom: 5rem;\n    transform: none;\n  }\n  .lb-nav.lb-prev {\n    left: 50%;\n    transform: translateX(calc(-100% - 0.5rem));\n  }\n  .lb-nav.lb-next {\n    right: auto;\n    left: 50%;\n    transform: translateX(0.5rem);\n  }\n}\n.lb-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  max-width: min(90vw, 1000px);\n  animation: lbContentIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.lb-content img {\n  max-height: 80vh;\n  max-width: 100%;\n  object-fit: contain;\n}\n@keyframes lbContentIn {\n  from {\n    transform: scale(0.92);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.lb-info {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  width: 100%;\n}\n.lb-cat {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n}\n.lb-title {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  color: var(--color-secondary);\n  flex: 1;\n}\n.lb-counter {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.1em;\n}\n/*# sourceMappingURL=portfolio.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioComponent, { className: "PortfolioComponent", filePath: "src/app/features/portfolio/portfolio.component.ts", lineNumber: 15 });
})();
export {
  PortfolioComponent
};
//# sourceMappingURL=chunk-DRFMBMCH.js.map
