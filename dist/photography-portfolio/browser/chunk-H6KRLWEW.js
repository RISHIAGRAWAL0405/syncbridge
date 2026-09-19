import {
  RouterLink
} from "./chunk-FPVJX4FZ.js";
import "./chunk-Q3L5OJPP.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-U2WXL5OW.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/about/about.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.year;
var _forTrack2 = ($index, $item) => $item.title;
function AboutComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    const \u0275$index_71_r2 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_71_r2 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.num);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function AboutComponent_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "div", 38)(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_99_r4 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_99_r4 % 3 + 1));
    \u0275\u0275classProp("right", \u0275$index_99_r4 % 2 !== 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.event);
  }
}
function AboutComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "h3", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 46);
    \u0275\u0275text(9, "\u2726");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const award_r5 = ctx.$implicit;
    const \u0275$index_131_r6 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_131_r6 % 3 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(award_r5.year);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(award_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(award_r5.org);
  }
}
var AboutComponent = class _AboutComponent {
  stats = [
    { num: "10+", label: "Years Experience" },
    { num: "500+", label: "Happy Clients" },
    { num: "1200+", label: "Projects Done" },
    { num: "40+", label: "Countries" }
  ];
  awards = [
    { year: "2024", title: "Best Wedding Photographer", org: "International Photography Awards" },
    { year: "2023", title: "Excellence in Fashion Photography", org: "Vogue Photography Summit" },
    { year: "2022", title: "Top Commercial Studio", org: "Advertising Photography Guild" },
    { year: "2021", title: "Portrait Photographer of the Year", org: "World Photography Organisation" }
  ];
  timeline = [
    { year: "2015", event: "Founded Lumi\xE8re Studio in New York with a vision to redefine luxury photography." },
    { year: "2017", event: "Expanded to international markets, shooting campaigns across Europe and Asia." },
    { year: "2019", event: "Launched our signature cinematic wedding collection, booked 18 months in advance." },
    { year: "2021", event: "Opened our flagship studio in Manhattan's Art District." },
    { year: "2023", event: "Recognized as one of the world's top 10 photography studios by Vogue." },
    { year: "2025", event: "Celebrating a decade of capturing extraordinary stories worldwide." }
  ];
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 68, vars: 0, consts: [[1, "about-hero"], [1, "about-hero-img", "img-mask"], ["src", "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&q=85", "alt", "Lumi\xE8re Studio photographer at work", "loading", "eager", "width", "1920", "height", "1080"], [1, "about-hero-overlay"], [1, "about-hero-content"], [1, "section-label", "reveal"], [1, "about-hero-title", "reveal", "reveal-delay-1"], [1, "about-hero-sub", "reveal", "reveal-delay-2"], [1, "about-story"], [1, "container"], [1, "story-grid"], [1, "story-img-col", "reveal"], [1, "story-img-main", "img-mask"], ["src", "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80", "alt", "Photographer with camera", "loading", "lazy", "width", "800", "height", "1000"], [1, "story-img-accent", "img-mask"], ["src", "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80", "alt", "Photography equipment", "loading", "lazy", "width", "600", "height", "400"], [1, "story-text-col"], [1, "section-title", "reveal", "reveal-delay-1"], [1, "story-text", "reveal", "reveal-delay-2"], [1, "story-text", "reveal", "reveal-delay-3"], ["routerLink", "/portfolio", 1, "btn-primary", "reveal", "reveal-delay-4"], [1, "about-stats"], [1, "stats-grid"], [1, "stat-item", "reveal", 3, "class"], [1, "about-timeline"], [1, "reveal"], [1, "section-label"], [1, "section-title", "reveal-delay-1"], [1, "timeline"], [1, "timeline-item", "reveal", 3, "class", "right"], [1, "about-awards"], [1, "awards-list"], [1, "award-item", "reveal", 3, "class"], [1, "stat-item", "reveal"], [1, "stat-number"], [1, "stat-label"], [1, "timeline-item", "reveal"], [1, "timeline-dot"], [1, "timeline-content", "glass"], [1, "timeline-year"], [1, "timeline-event"], [1, "award-item", "reveal"], [1, "award-year"], [1, "award-info"], [1, "award-title"], [1, "award-org"], ["aria-hidden", "true", 1, "award-icon"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "Our Story");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, "We Don't Just");
      \u0275\u0275element(9, "br");
      \u0275\u0275elementStart(10, "em");
      \u0275\u0275text(11, "Take Photos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p", 7);
      \u0275\u0275text(13, "We craft visual legacies that outlive moments.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "section", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12);
      \u0275\u0275element(19, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275element(21, "img", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 16)(23, "span", 5);
      \u0275\u0275text(24, "The Vision");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "h2", 17);
      \u0275\u0275text(26, "A Decade of");
      \u0275\u0275element(27, "br");
      \u0275\u0275elementStart(28, "em");
      \u0275\u0275text(29, "Cinematic Artistry");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "p", 18);
      \u0275\u0275text(31, "Founded in 2015 by award-winning photographer Alexandre Moreau, Lumi\xE8re Studio was born from a singular belief: that photography is not merely documentation \u2014 it is the art of freezing emotion, light, and truth into a single, eternal frame.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 19);
      \u0275\u0275text(33, "From intimate weddings in Tuscany to high-fashion campaigns in Tokyo, our work spans continents and cultures, united by an unwavering commitment to excellence and a deeply personal approach to every story we tell.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "a", 20)(35, "span");
      \u0275\u0275text(36, "See Our Work");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(37, "section", 21)(38, "div", 9)(39, "div", 22);
      \u0275\u0275repeaterCreate(40, AboutComponent_For_41_Template, 5, 4, "div", 23, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "section", 24)(43, "div", 9)(44, "div", 25)(45, "span", 26);
      \u0275\u0275text(46, "Our Journey");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h2", 27);
      \u0275\u0275text(48, "Milestones That");
      \u0275\u0275element(49, "br");
      \u0275\u0275elementStart(50, "em");
      \u0275\u0275text(51, "Shaped Us");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 28);
      \u0275\u0275repeaterCreate(53, AboutComponent_For_54_Template, 7, 6, "div", 29, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "section", 30)(56, "div", 9)(57, "div", 25)(58, "span", 26);
      \u0275\u0275text(59, "Recognition");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h2", 27);
      \u0275\u0275text(61, "Awards &");
      \u0275\u0275element(62, "br");
      \u0275\u0275elementStart(63, "em");
      \u0275\u0275text(64, "Achievements");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 31);
      \u0275\u0275repeaterCreate(66, AboutComponent_For_67_Template, 10, 5, "div", 32, _forTrack2);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(40);
      \u0275\u0275repeater(ctx.stats);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.timeline);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.awards);
    }
  }, dependencies: [RouterLink], styles: ['\n.about-hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 70vh;\n  min-height: 500px;\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 5rem;\n  overflow: hidden;\n}\n.about-hero-img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.about-hero-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about-hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(11, 11, 11, 0.9) 0%,\n      rgba(11, 11, 11, 0.3) 100%);\n}\n.about-hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 0 clamp(1.5rem, 8vw, 8rem);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.about-hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(3rem, 8vw, 7rem);\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.04em;\n  color: var(--color-secondary);\n}\n.about-hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.about-hero-sub[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  color: rgba(255, 255, 255, 0.6);\n  font-style: italic;\n  font-family: var(--font-heading);\n}\n.about-story[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.story-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6rem;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .story-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.story-img-col[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto auto;\n  gap: 1rem;\n}\n.story-img-main[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.story-img-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n}\n.story-img-accent[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n.story-img-accent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.story-text-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.story-text-col[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.story-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--color-text-muted);\n  line-height: 1.8;\n}\n.about-stats[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-bg-2);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0.5rem;\n  padding: 2rem;\n  border-right: 1px solid var(--color-border);\n}\n.stat-item[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n@media (max-width: 768px) {\n  .stat-item[_ngcontent-%COMP%] {\n    border-right: none;\n  }\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  font-weight: 800;\n  color: var(--color-accent);\n  letter-spacing: -0.04em;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n}\n.about-timeline[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.about-timeline[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.about-timeline[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background: var(--color-border);\n  transform: translateX(-50%);\n}\n@media (max-width: 768px) {\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 1rem;\n  }\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-right: calc(50% + 2rem);\n  position: relative;\n}\n.timeline-item.right[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  padding-right: 0;\n  padding-left: calc(50% + 2rem);\n}\n@media (max-width: 768px) {\n  .timeline-item[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 3.5rem;\n  }\n  .timeline-item.right[_ngcontent-%COMP%] {\n    padding-left: 3.5rem;\n  }\n}\n.timeline-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 1.5rem;\n  width: 10px;\n  height: 10px;\n  background: var(--color-accent);\n  border-radius: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 0 4px rgba(201, 169, 110, 0.15);\n}\n@media (max-width: 768px) {\n  .timeline-dot[_ngcontent-%COMP%] {\n    left: 1rem;\n  }\n}\n.timeline-content[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  max-width: 380px;\n  border-radius: 2px;\n}\n.timeline-year[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-accent);\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.timeline-event[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.about-awards[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n  background: var(--color-bg-2);\n}\n.about-awards[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.about-awards[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n.awards-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.award-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem 0;\n  border-bottom: 1px solid var(--color-border);\n  transition: background 0.3s ease;\n}\n.award-item[_ngcontent-%COMP%]:hover {\n  background: rgba(201, 169, 110, 0.03);\n}\n.award-year[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--color-accent);\n  min-width: 80px;\n}\n.award-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.award-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-secondary);\n  margin-bottom: 0.25rem;\n}\n.award-org[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.05em;\n}\n.award-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-size: 1rem;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=about.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", standalone: true, imports: [RouterLink], template: `<!-- Page Hero -->\r
<section class="about-hero">\r
  <div class="about-hero-img img-mask">\r
    <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&q=85" alt="Lumi\xE8re Studio photographer at work" loading="eager" width="1920" height="1080">\r
  </div>\r
  <div class="about-hero-overlay"></div>\r
  <div class="about-hero-content">\r
    <span class="section-label reveal">Our Story</span>\r
    <h1 class="about-hero-title reveal reveal-delay-1">We Don't Just<br><em>Take Photos</em></h1>\r
    <p class="about-hero-sub reveal reveal-delay-2">We craft visual legacies that outlive moments.</p>\r
  </div>\r
</section>\r
\r
<!-- Story Section -->\r
<section class="about-story">\r
  <div class="container">\r
    <div class="story-grid">\r
      <div class="story-img-col reveal">\r
        <div class="story-img-main img-mask">\r
          <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80" alt="Photographer with camera" loading="lazy" width="800" height="1000">\r
        </div>\r
        <div class="story-img-accent img-mask">\r
          <img src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80" alt="Photography equipment" loading="lazy" width="600" height="400">\r
        </div>\r
      </div>\r
      <div class="story-text-col">\r
        <span class="section-label reveal">The Vision</span>\r
        <h2 class="section-title reveal reveal-delay-1">A Decade of<br><em>Cinematic Artistry</em></h2>\r
        <p class="story-text reveal reveal-delay-2">Founded in 2015 by award-winning photographer Alexandre Moreau, Lumi\xE8re Studio was born from a singular belief: that photography is not merely documentation \u2014 it is the art of freezing emotion, light, and truth into a single, eternal frame.</p>\r
        <p class="story-text reveal reveal-delay-3">From intimate weddings in Tuscany to high-fashion campaigns in Tokyo, our work spans continents and cultures, united by an unwavering commitment to excellence and a deeply personal approach to every story we tell.</p>\r
        <a routerLink="/portfolio" class="btn-primary reveal reveal-delay-4"><span>See Our Work</span></a>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Stats -->\r
<section class="about-stats">\r
  <div class="container">\r
    <div class="stats-grid">\r
      @for (stat of stats; track stat.label; let i = $index) {\r
        <div class="stat-item reveal" [class]="'reveal-delay-' + (i + 1)">\r
          <span class="stat-number">{{ stat.num }}</span>\r
          <span class="stat-label">{{ stat.label }}</span>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Timeline -->\r
<section class="about-timeline">\r
  <div class="container">\r
    <div class="reveal">\r
      <span class="section-label">Our Journey</span>\r
      <h2 class="section-title reveal-delay-1">Milestones That<br><em>Shaped Us</em></h2>\r
    </div>\r
    <div class="timeline">\r
      @for (item of timeline; track item.year; let i = $index) {\r
        <div class="timeline-item reveal" [class]="'reveal-delay-' + (i % 3 + 1)" [class.right]="i % 2 !== 0">\r
          <div class="timeline-dot"></div>\r
          <div class="timeline-content glass">\r
            <span class="timeline-year">{{ item.year }}</span>\r
            <p class="timeline-event">{{ item.event }}</p>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Awards -->\r
<section class="about-awards">\r
  <div class="container">\r
    <div class="reveal">\r
      <span class="section-label">Recognition</span>\r
      <h2 class="section-title reveal-delay-1">Awards &<br><em>Achievements</em></h2>\r
    </div>\r
    <div class="awards-list">\r
      @for (award of awards; track award.title; let i = $index) {\r
        <div class="award-item reveal" [class]="'reveal-delay-' + (i % 3 + 1)">\r
          <span class="award-year">{{ award.year }}</span>\r
          <div class="award-info">\r
            <h3 class="award-title">{{ award.title }}</h3>\r
            <span class="award-org">{{ award.org }}</span>\r
          </div>\r
          <div class="award-icon" aria-hidden="true">\u2726</div>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/about/about.component.scss */\n.about-hero {\n  position: relative;\n  height: 70vh;\n  min-height: 500px;\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 5rem;\n  overflow: hidden;\n}\n.about-hero-img {\n  position: absolute;\n  inset: 0;\n}\n.about-hero-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about-hero-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(11, 11, 11, 0.9) 0%,\n      rgba(11, 11, 11, 0.3) 100%);\n}\n.about-hero-content {\n  position: relative;\n  z-index: 1;\n  padding: 0 clamp(1.5rem, 8vw, 8rem);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.about-hero-title {\n  font-family: var(--font-heading);\n  font-size: clamp(3rem, 8vw, 7rem);\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.04em;\n  color: var(--color-secondary);\n}\n.about-hero-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.about-hero-sub {\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  color: rgba(255, 255, 255, 0.6);\n  font-style: italic;\n  font-family: var(--font-heading);\n}\n.about-story {\n  padding: 8rem 0;\n}\n.story-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6rem;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .story-grid {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.story-img-col {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto auto;\n  gap: 1rem;\n}\n.story-img-main {\n  grid-column: 1/-1;\n}\n.story-img-main img {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n}\n.story-img-accent {\n  grid-column: 2;\n}\n.story-img-accent img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.story-text-col {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.story-text-col .section-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.story-text {\n  font-size: 0.95rem;\n  color: var(--color-text-muted);\n  line-height: 1.8;\n}\n.about-stats {\n  padding: 5rem 0;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-bg-2);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0.5rem;\n  padding: 2rem;\n  border-right: 1px solid var(--color-border);\n}\n.stat-item:last-child {\n  border-right: none;\n}\n@media (max-width: 768px) {\n  .stat-item {\n    border-right: none;\n  }\n}\n.stat-number {\n  font-family: var(--font-heading);\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  font-weight: 800;\n  color: var(--color-accent);\n  letter-spacing: -0.04em;\n}\n.stat-label {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n}\n.about-timeline {\n  padding: 8rem 0;\n}\n.about-timeline .section-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.about-timeline > .container > div {\n  margin-bottom: 4rem;\n}\n.timeline {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.timeline::before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background: var(--color-border);\n  transform: translateX(-50%);\n}\n@media (max-width: 768px) {\n  .timeline::before {\n    left: 1rem;\n  }\n}\n.timeline-item {\n  display: flex;\n  justify-content: flex-end;\n  padding-right: calc(50% + 2rem);\n  position: relative;\n}\n.timeline-item.right {\n  justify-content: flex-start;\n  padding-right: 0;\n  padding-left: calc(50% + 2rem);\n}\n@media (max-width: 768px) {\n  .timeline-item {\n    padding-right: 0;\n    padding-left: 3.5rem;\n  }\n  .timeline-item.right {\n    padding-left: 3.5rem;\n  }\n}\n.timeline-dot {\n  position: absolute;\n  left: 50%;\n  top: 1.5rem;\n  width: 10px;\n  height: 10px;\n  background: var(--color-accent);\n  border-radius: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 0 4px rgba(201, 169, 110, 0.15);\n}\n@media (max-width: 768px) {\n  .timeline-dot {\n    left: 1rem;\n  }\n}\n.timeline-content {\n  padding: 1.5rem 2rem;\n  max-width: 380px;\n  border-radius: 2px;\n}\n.timeline-year {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-accent);\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.timeline-event {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.about-awards {\n  padding: 8rem 0;\n  background: var(--color-bg-2);\n}\n.about-awards .section-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.about-awards > .container > div {\n  margin-bottom: 4rem;\n}\n.awards-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.award-item {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem 0;\n  border-bottom: 1px solid var(--color-border);\n  transition: background 0.3s ease;\n}\n.award-item:hover {\n  background: rgba(201, 169, 110, 0.03);\n}\n.award-year {\n  font-family: var(--font-heading);\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--color-accent);\n  min-width: 80px;\n}\n.award-info {\n  flex: 1;\n}\n.award-title {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-secondary);\n  margin-bottom: 0.25rem;\n}\n.award-org {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.05em;\n}\n.award-icon {\n  color: var(--color-accent);\n  font-size: 1rem;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=about.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/features/about/about.component.ts", lineNumber: 11 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-H6KRLWEW.js.map
