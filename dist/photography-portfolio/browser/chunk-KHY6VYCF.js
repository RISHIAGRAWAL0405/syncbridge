import {
  DataService
} from "./chunk-GJMBPRDX.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CQ3CZWR7.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/industries/industries.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function IndustriesComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
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
var IndustriesComponent = class _IndustriesComponent {
  data = inject(DataService);
  static \u0275fac = function IndustriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IndustriesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IndustriesComponent, selectors: [["app-industries"]], decls: 11, vars: 0, consts: [[1, "tz-page-hero"], [1, "container", "tz-page-hero-inner"], [1, "tz-eyebrow"], [1, "container", "industry-list"]], template: function IndustriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Industries");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h1");
      \u0275\u0275text(5, "Expertise that adapts to your market.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7, "We bring sector-specific insight to every engagement.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(8, "section", 3);
      \u0275\u0275repeaterCreate(9, IndustriesComponent_For_10_Template, 7, 3, "article", null, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.data.industries);
    }
  }, styles: ["\n.industry-list[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.industry-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border: 1px solid var(--tz-border);\n  border-radius: 12px;\n}\n.industry-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.industry-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin: 0.8rem 0;\n}\n.industry-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--tz-text-muted);\n}\n@media (max-width: 700px) {\n  .industry-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=industries.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndustriesComponent, [{
    type: Component,
    args: [{ selector: "app-industries", standalone: true, template: `<section class="tz-page-hero"><div class="container tz-page-hero-inner"><span class="tz-eyebrow">Industries</span><h1>Expertise that adapts to your market.</h1><p>We bring sector-specific insight to every engagement.</p></div></section><section class="container industry-list">@for (industry of data.industries; track industry.id) { <article><span>{{ industry.icon }}</span><h2>{{ industry.label }}</h2><p>{{ industry.description }}</p></article> }</section>`, styles: ["/* angular:styles/component:scss;087d33e91946432f63aff79c178bbc61395ab8fb42348a118862fbd1cd113492;c:/Users/Administrator/Desktop/syncbridge/MIT-FIrst/Photography-Portfolio-UI/src/app/features/industries/industries.component.ts */\n.industry-list {\n  padding: 5rem 0;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.industry-list article {\n  padding: 1.5rem;\n  border: 1px solid var(--tz-border);\n  border-radius: 12px;\n}\n.industry-list span {\n  font-size: 2rem;\n}\n.industry-list h2 {\n  font-size: 1.3rem;\n  margin: 0.8rem 0;\n}\n.industry-list p {\n  color: var(--tz-text-muted);\n}\n@media (max-width: 700px) {\n  .industry-list {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=industries.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IndustriesComponent, { className: "IndustriesComponent", filePath: "src/app/features/industries/industries.component.ts", lineNumber: 9 });
})();
export {
  IndustriesComponent
};
//# sourceMappingURL=chunk-KHY6VYCF.js.map
