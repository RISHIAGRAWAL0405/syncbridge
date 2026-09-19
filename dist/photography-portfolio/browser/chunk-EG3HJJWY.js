import {
  DataService
} from "./chunk-X42UMOT4.js";
import {
  ScrollService
} from "./chunk-CA6OOJ42.js";
import {
  CursorService
} from "./chunk-ZLAS45UH.js";
import {
  RouterLink
} from "./chunk-FPVJX4FZ.js";
import "./chunk-Q3L5OJPP.js";
import {
  Component,
  PLATFORM_ID,
  ViewChild,
  inject,
  isPlatformBrowser,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-U2WXL5OW.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/home/components/hero/hero.component.ts
var _c0 = ["heroRef"];
var _c1 = ["reelVideo"];
var _forTrack0 = ($index, $item) => $item.image;
function HeroComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "img", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const \u0275$index_13_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.currentSlide() === \u0275$index_13_r2);
    \u0275\u0275attribute("aria-hidden", ctx_r2.currentSlide() !== \u0275$index_13_r2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", slide_r1.image, \u0275\u0275sanitizeUrl)("alt", slide_r1.label + " photography by Lumi\xE8re Studio");
  }
}
function HeroComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u275A\u275A ");
  }
}
function HeroComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25B6 ");
  }
}
function HeroComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function HeroComponent_For_62_Template_button_click_0_listener() {
      const \u0275$index_111_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSlide(\u0275$index_111_r5));
    });
    \u0275\u0275element(1, "span", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_111_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.currentSlide() === \u0275$index_111_r5);
    \u0275\u0275attribute("aria-selected", ctx_r2.currentSlide() === \u0275$index_111_r5)("aria-label", "Go to slide " + (\u0275$index_111_r5 + 1));
  }
}
var HeroComponent = class _HeroComponent {
  heroRef;
  reelVideo;
  platformId = inject(PLATFORM_ID);
  cursor = inject(CursorService);
  scroll = inject(ScrollService);
  currentSlide = signal(0, ...ngDevMode ? [{ debugName: "currentSlide" }] : (
    /* istanbul ignore next */
    []
  ));
  videoPlaying = signal(true, ...ngDevMode ? [{ debugName: "videoPlaying" }] : (
    /* istanbul ignore next */
    []
  ));
  interval;
  onPointerMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelectorAll(".hero-parallax").forEach((el) => {
      const speed = Number(el.dataset["speed"] || "1");
      el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  };
  slides = [
    { image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=85", label: "Wedding", title: "Where Love", subtitle: "Becomes Art" },
    { image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1920&q=85", label: "Portrait", title: "Timeless", subtitle: "Elegance" },
    { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85", label: "Fashion", title: "Cinematic", subtitle: "Vision" }
  ];
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    this.interval = setInterval(() => {
      this.currentSlide.update((v) => (v + 1) % this.slides.length);
    }, 5500);
    this.initParallax();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
    if (isPlatformBrowser(this.platformId))
      window.removeEventListener("mousemove", this.onPointerMove);
  }
  initParallax() {
    window.addEventListener("mousemove", this.onPointerMove, { passive: true });
  }
  goToSlide(i) {
    this.currentSlide.set(i);
  }
  toggleVideo() {
    const video = this.reelVideo?.nativeElement;
    if (!video)
      return;
    if (video.paused) {
      video.play().then(() => this.videoPlaying.set(true)).catch(() => this.videoPlaying.set(false));
    } else {
      video.pause();
      this.videoPlaying.set(false);
    }
  }
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], viewQuery: function HeroComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.heroRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reelVideo = _t.first);
    }
  }, decls: 91, vars: 7, consts: [["heroRef", ""], ["reelVideo", ""], ["aria-label", "Hero section", 1, "hero"], ["aria-hidden", "true", 1, "hero-reel"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "poster", "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=85", 3, "play", "pause"], ["src", "https://videos.pexels.com/video-files/853800/853800-hd_1920_1080_30fps.mp4", "type", "video/mp4"], ["aria-hidden", "true", 1, "hero-aurora"], ["aria-hidden", "true", 1, "hero-grain"], [1, "hero-slide", 3, "active"], [1, "hero-content"], [1, "hero-kicker"], [1, "live-dot"], [1, "hero-meta"], [1, "hero-label"], [1, "hero-divider"], [1, "hero-year"], [1, "hero-title"], [1, "hero-title-line"], [1, "hero-title-line", "accent"], [1, "hero-desc"], [1, "hero-actions"], ["routerLink", "/portfolio", 1, "btn-primary", 3, "mouseenter", "mouseleave"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M5 12h14M12 5l7 7-7 7"], ["routerLink", "/about", 1, "btn-outline", 3, "mouseenter", "mouseleave"], ["aria-label", "Featured visual story", 1, "hero-editorial-card"], [1, "editorial-card-top"], [1, "editorial-card-index"], [1, "editorial-card-rule"], [1, "editorial-card-bottom"], [1, "editorial-orbit"], ["aria-hidden", "true", 1, "hero-frame"], [1, "frame-corner", "top-left"], [1, "frame-corner", "top-right"], [1, "frame-corner", "bottom-left"], [1, "frame-corner", "bottom-right"], ["type", "button", 1, "reel-control", 3, "click"], [1, "reel-control-icon"], ["role", "tablist", "aria-label", "Hero slides", 1, "hero-indicators"], ["role", "tab", 1, "indicator", 3, "active"], ["role", "button", "tabindex", "0", "aria-label", "Scroll down", 1, "scroll-hint", 3, "click"], [1, "scroll-line"], [1, "hero-stats"], [1, "stat"], [1, "stat-num"], [1, "stat-label"], [1, "stat-sep"], [1, "hero-slide"], ["data-speed", "0.5", 1, "hero-img-wrap", "hero-parallax"], ["loading", "eager", "fetchpriority", "high", "width", "1920", "height", "1080", 1, "hero-img", 3, "src", "alt"], [1, "hero-overlay"], ["role", "tab", 1, "indicator", 3, "click"], [1, "indicator-fill"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 2, 0)(2, "div", 3)(3, "video", 4, 1);
      \u0275\u0275listener("play", function HeroComponent_Template_video_play_3_listener() {
        return ctx.videoPlaying.set(true);
      })("pause", function HeroComponent_Template_video_pause_3_listener() {
        return ctx.videoPlaying.set(false);
      });
      \u0275\u0275element(5, "source", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(6, "div", 6)(7, "div", 7);
      \u0275\u0275repeaterCreate(8, HeroComponent_For_9_Template, 4, 5, "div", 8, _forTrack0);
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10);
      \u0275\u0275element(12, "span", 11);
      \u0275\u0275text(13, " Now booking 2026 stories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 12)(15, "span", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "span", 14);
      \u0275\u0275elementStart(18, "span", 15);
      \u0275\u0275text(19, "Est. 2015");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "h1", 16)(21, "span", 17);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 18);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "p", 19);
      \u0275\u0275text(26, "Award-winning photography studio crafting cinematic stories that transcend time.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 20)(28, "a", 21);
      \u0275\u0275listener("mouseenter", function HeroComponent_Template_a_mouseenter_28_listener() {
        return ctx.cursor.setHover(true, "View");
      })("mouseleave", function HeroComponent_Template_a_mouseleave_28_listener() {
        return ctx.cursor.setHover(false);
      });
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Explore Work");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 22);
      \u0275\u0275element(32, "path", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "a", 24);
      \u0275\u0275listener("mouseenter", function HeroComponent_Template_a_mouseenter_33_listener() {
        return ctx.cursor.setHover(true);
      })("mouseleave", function HeroComponent_Template_a_mouseleave_33_listener() {
        return ctx.cursor.setHover(false);
      });
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "Our Story");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "aside", 25)(37, "div", 26)(38, "span");
      \u0275\u0275text(39, "Featured reel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 27);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(42, "div", 28);
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, "Light, movement, and the moments in between.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 29);
      \u0275\u0275element(46, "span", 30);
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "Scroll to discover");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 31);
      \u0275\u0275element(50, "span", 32)(51, "span", 33)(52, "span", 34)(53, "span", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "button", 36);
      \u0275\u0275listener("click", function HeroComponent_Template_button_click_54_listener() {
        return ctx.toggleVideo();
      });
      \u0275\u0275elementStart(55, "span", 37);
      \u0275\u0275conditionalCreate(56, HeroComponent_Conditional_56_Template, 1, 0)(57, HeroComponent_Conditional_57_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 38);
      \u0275\u0275repeaterCreate(61, HeroComponent_For_62_Template, 2, 4, "button", 39, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 40);
      \u0275\u0275listener("click", function HeroComponent_Template_div_click_63_listener() {
        return ctx.scroll.scrollTo("#categories");
      });
      \u0275\u0275element(64, "div", 41);
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "Scroll");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 42)(68, "div", 43)(69, "span", 44);
      \u0275\u0275text(70, "10+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span", 45);
      \u0275\u0275text(72, "Years");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(73, "div", 46);
      \u0275\u0275elementStart(74, "div", 43)(75, "span", 44);
      \u0275\u0275text(76, "500+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span", 45);
      \u0275\u0275text(78, "Clients");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(79, "div", 46);
      \u0275\u0275elementStart(80, "div", 43)(81, "span", 44);
      \u0275\u0275text(82, "40+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 45);
      \u0275\u0275text(84, "Countries");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(85, "div", 46);
      \u0275\u0275elementStart(86, "div", 43)(87, "span", 44);
      \u0275\u0275text(88, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "span", 45);
      \u0275\u0275text(90, "Awards");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.slides);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.slides[ctx.currentSlide()].label);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.slides[ctx.currentSlide()].title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.slides[ctx.currentSlide()].subtitle);
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate1("0", ctx.currentSlide() + 1, " / 03");
      \u0275\u0275advance(13);
      \u0275\u0275attribute("aria-label", ctx.videoPlaying() ? "Pause background film" : "Play background film");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.videoPlaying() ? 56 : 57);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.videoPlaying() ? "Pause film" : "Play film");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.slides);
    }
  }, dependencies: [RouterLink], styles: [`
.hero[_ngcontent-%COMP%] {
  position: relative;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #080914;
}
.hero-reel[_ngcontent-%COMP%], 
.hero-reel[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.hero-reel[_ngcontent-%COMP%] {
  overflow: hidden;
}
.hero-reel[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {
  object-fit: cover;
  opacity: 0.52;
  filter: saturate(0.7) contrast(1.08) brightness(0.6);
  transform: scale(1.04);
  animation: _ngcontent-%COMP%_filmDrift 16s ease-in-out infinite alternate;
}
.hero-aurora[_ngcontent-%COMP%] {
  position: absolute;
  z-index: 1;
  inset: -35%;
  pointer-events: none;
  background:
    radial-gradient(
      circle at 25% 45%,
      rgba(99, 83, 255, 0.28),
      transparent 24%),
    radial-gradient(
      circle at 75% 30%,
      rgba(255, 112, 157, 0.2),
      transparent 20%),
    radial-gradient(
      circle at 55% 72%,
      rgba(255, 183, 102, 0.14),
      transparent 26%);
  filter: blur(18px);
  animation: _ngcontent-%COMP%_auroraShift 14s ease-in-out infinite alternate;
}
.hero-grain[_ngcontent-%COMP%] {
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
  opacity: 0.16;
  mix-blend-mode: soft-light;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
}
.hero-slide[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.hero-slide.active[_ngcontent-%COMP%] {
  opacity: 1;
}
.hero-slide.active[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {
  transform: scale(1.06);
}
.hero-img-wrap[_ngcontent-%COMP%] {
  position: absolute;
  inset: -5%;
  will-change: transform;
}
.hero-img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.12);
  transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.hero-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      rgba(5, 6, 17, 0.88) 0%,
      rgba(8, 10, 30, 0.38) 50%,
      rgba(5, 5, 15, 0.76) 100%);
}
.hero-content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  padding: 0 clamp(1.5rem, 8vw, 8rem);
  max-width: 900px;
  animation: _ngcontent-%COMP%_heroContentIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
}
.hero-kicker[_ngcontent-%COMP%] {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 1.25rem;
  padding: 0.45rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 99px;
  background: rgba(7, 8, 20, 0.34);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.live-dot[_ngcontent-%COMP%] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff7bac;
  box-shadow: 0 0 0 0 rgba(255, 123, 172, 0.7);
  animation: _ngcontent-%COMP%_livePulse 1.8s infinite;
}
@keyframes _ngcontent-%COMP%_heroContentIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-meta[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.hero-label[_ngcontent-%COMP%] {
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-accent);
}
.hero-divider[_ngcontent-%COMP%] {
  display: block;
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}
.hero-year[_ngcontent-%COMP%] {
  font-family: var(--font-body);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.4);
}
.hero-title[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: clamp(3.5rem, 10vw, 9rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}
.hero-title-line[_ngcontent-%COMP%] {
  display: block;
  transition: opacity 0.5s ease;
}
.hero-title-line.accent[_ngcontent-%COMP%] {
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.64);
  font-style: italic;
}
.reel-control[_ngcontent-%COMP%] {
  position: absolute;
  right: clamp(1.5rem, 5vw, 4rem);
  top: 50%;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0.85rem 0.55rem 0.55rem;
  color: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(8, 9, 24, 0.36);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition:
    border-color 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease;
}
.reel-control[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  border-color: var(--color-accent);
  background: rgba(8, 9, 24, 0.65);
}
.hero-editorial-card[_ngcontent-%COMP%] {
  position: absolute;
  top: 28%;
  right: clamp(5.5rem, 12vw, 13rem);
  z-index: 3;
  width: min(250px, 21vw);
  padding: 1.15rem 1.15rem 1rem;
  color: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 3px;
  background:
    linear-gradient(
      145deg,
      rgba(20, 20, 48, 0.56),
      rgba(7, 7, 19, 0.22));
  box-shadow: 0 20px 65px rgba(0, 0, 0, 0.16);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  animation: _ngcontent-%COMP%_cardFloat 7s ease-in-out infinite;
}
.hero-editorial-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  max-width: 13ch;
  margin: 0.85rem 0 2.5rem;
  font-family: var(--font-heading);
  font-size: clamp(1.05rem, 1.5vw, 1.35rem);
  font-style: italic;
  line-height: 1.25;
}
.editorial-card-top[_ngcontent-%COMP%], 
.editorial-card-bottom[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.56rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.editorial-card-top[_ngcontent-%COMP%] {
  color: var(--color-accent-light);
}
.editorial-card-index[_ngcontent-%COMP%] {
  color: rgba(255, 255, 255, 0.52);
}
.editorial-card-rule[_ngcontent-%COMP%] {
  width: 100%;
  height: 1px;
  margin-top: 0.8rem;
  background:
    linear-gradient(
      90deg,
      var(--color-accent),
      transparent);
}
.editorial-card-bottom[_ngcontent-%COMP%] {
  justify-content: flex-start;
  color: rgba(255, 255, 255, 0.5);
}
.editorial-orbit[_ngcontent-%COMP%] {
  display: block;
  width: 13px;
  height: 13px;
  border: 1px solid var(--color-accent);
  border-radius: 50%;
  box-shadow: inset 0 0 0 3px rgba(233, 169, 106, 0.18);
}
.hero-frame[_ngcontent-%COMP%] {
  position: absolute;
  z-index: 2;
  inset: 1.25rem;
  pointer-events: none;
  opacity: 0.55;
}
.frame-corner[_ngcontent-%COMP%] {
  position: absolute;
  width: 36px;
  height: 36px;
  border-color: rgba(255, 255, 255, 0.36);
}
.top-left[_ngcontent-%COMP%] {
  top: 0;
  left: 0;
  border-top: 1px solid;
  border-left: 1px solid;
}
.top-right[_ngcontent-%COMP%] {
  top: 0;
  right: 0;
  border-top: 1px solid;
  border-right: 1px solid;
}
.bottom-left[_ngcontent-%COMP%] {
  bottom: 0;
  left: 0;
  border-bottom: 1px solid;
  border-left: 1px solid;
}
.bottom-right[_ngcontent-%COMP%] {
  right: 0;
  bottom: 0;
  border-right: 1px solid;
  border-bottom: 1px solid;
}
.reel-control-icon[_ngcontent-%COMP%] {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-accent);
  color: #111022;
  letter-spacing: 0;
  font-size: 0.62rem;
}
.hero-desc[_ngcontent-%COMP%] {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  max-width: 420px;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}
.hero-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}
.hero-indicators[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 8rem;
  right: clamp(1.5rem, 5vw, 4rem);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.indicator[_ngcontent-%COMP%] {
  width: 2px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}
.indicator.active[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.1);
}
.indicator-fill[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background: var(--color-accent);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
}
.active[_ngcontent-%COMP%]   .indicator-fill[_ngcontent-%COMP%] {
  transform: scaleY(1);
  transition: transform 5.5s linear;
}
.scroll-hint[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: none;
  animation: _ngcontent-%COMP%_scrollBounce 2s ease-in-out infinite;
}
.scroll-hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-family: var(--font-body);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}
.scroll-line[_ngcontent-%COMP%] {
  width: 1px;
  height: 48px;
  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.4),
      transparent);
  animation: _ngcontent-%COMP%_scrollLine 1.8s ease-in-out infinite;
}
@keyframes _ngcontent-%COMP%_scrollLine {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  51% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}
@keyframes _ngcontent-%COMP%_scrollBounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(6px);
  }
}
.hero-stats[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: rgba(11, 11, 11, 0.6);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.25rem 2rem;
}
@media (max-width: 480px) {
  .hero-stats[_ngcontent-%COMP%] {
    display: none;
  }
}
.stat[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.5rem;
}
.stat-num[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: -0.02em;
}
.stat-label[_ngcontent-%COMP%] {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-top: 0.2rem;
}
.stat-sep[_ngcontent-%COMP%] {
  width: 1px;
  height: 32px;
  background: var(--color-border);
}
@keyframes _ngcontent-%COMP%_filmDrift {
  from {
    transform: scale(1.04) translate3d(-1%, -1%, 0);
  }
  to {
    transform: scale(1.12) translate3d(1%, 1%, 0);
  }
}
@keyframes _ngcontent-%COMP%_auroraShift {
  from {
    transform: rotate(-8deg) scale(1);
  }
  to {
    transform: rotate(9deg) scale(1.15);
  }
}
@keyframes _ngcontent-%COMP%_livePulse {
  70% {
    box-shadow: 0 0 0 8px rgba(255, 123, 172, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 123, 172, 0);
  }
}
@keyframes _ngcontent-%COMP%_cardFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@media (max-width: 768px) {
  .reel-control[_ngcontent-%COMP%] {
    top: auto;
    bottom: 7rem;
    right: 1.5rem;
  }
  .reel-control[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {
    display: none;
  }
  .hero-editorial-card[_ngcontent-%COMP%], 
   .hero-frame[_ngcontent-%COMP%] {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-reel[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], 
   .hero-aurora[_ngcontent-%COMP%], 
   .live-dot[_ngcontent-%COMP%], 
   .hero-content[_ngcontent-%COMP%], 
   .hero-editorial-card[_ngcontent-%COMP%], 
   .scroll-hint[_ngcontent-%COMP%], 
   .scroll-line[_ngcontent-%COMP%] {
    animation: none !important;
  }
}
/*# sourceMappingURL=hero.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "app-hero", standalone: true, imports: [RouterLink], template: `<section class="hero" #heroRef aria-label="Hero section">\r
  <div class="hero-reel" aria-hidden="true">\r
    <video #reelVideo autoplay muted loop playsinline (play)="videoPlaying.set(true)" (pause)="videoPlaying.set(false)" poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=85">\r
      <source src="https://videos.pexels.com/video-files/853800/853800-hd_1920_1080_30fps.mp4" type="video/mp4">\r
    </video>\r
  </div>\r
  <div class="hero-aurora" aria-hidden="true"></div>\r
  <div class="hero-grain" aria-hidden="true"></div>\r
  <!-- Slides -->\r
  @for (slide of slides; track slide.image; let i = $index) {\r
    <div class="hero-slide" [class.active]="currentSlide() === i" [attr.aria-hidden]="currentSlide() !== i">\r
      <div class="hero-img-wrap hero-parallax" data-speed="0.5">\r
        <img [src]="slide.image" [alt]="slide.label + ' photography by Lumi\xE8re Studio'" class="hero-img" loading="eager" fetchpriority="high" width="1920" height="1080">\r
      </div>\r
      <div class="hero-overlay"></div>\r
    </div>\r
  }\r
\r
  <!-- Content -->\r
  <div class="hero-content">\r
    <div class="hero-kicker"><span class="live-dot"></span> Now booking 2026 stories</div>\r
    <div class="hero-meta">\r
      <span class="hero-label">{{ slides[currentSlide()].label }}</span>\r
      <span class="hero-divider"></span>\r
      <span class="hero-year">Est. 2015</span>\r
    </div>\r
\r
    <h1 class="hero-title">\r
      <span class="hero-title-line">{{ slides[currentSlide()].title }}</span>\r
      <span class="hero-title-line accent">{{ slides[currentSlide()].subtitle }}</span>\r
    </h1>\r
\r
    <p class="hero-desc">Award-winning photography studio crafting cinematic stories that transcend time.</p>\r
\r
    <div class="hero-actions">\r
      <a routerLink="/portfolio" class="btn-primary"\r
         (mouseenter)="cursor.setHover(true, 'View')" (mouseleave)="cursor.setHover(false)">\r
        <span>Explore Work</span>\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
      </a>\r
      <a routerLink="/about" class="btn-outline"\r
         (mouseenter)="cursor.setHover(true)" (mouseleave)="cursor.setHover(false)">\r
        <span>Our Story</span>\r
      </a>\r
    </div>\r
  </div>\r
\r
  <aside class="hero-editorial-card" aria-label="Featured visual story">\r
    <div class="editorial-card-top">\r
      <span>Featured reel</span>\r
      <span class="editorial-card-index">0{{ currentSlide() + 1 }} / 03</span>\r
    </div>\r
    <div class="editorial-card-rule"></div>\r
    <p>Light, movement, and the moments in between.</p>\r
    <div class="editorial-card-bottom">\r
      <span class="editorial-orbit"></span>\r
      <span>Scroll to discover</span>\r
    </div>\r
  </aside>\r
\r
  <div class="hero-frame" aria-hidden="true">\r
    <span class="frame-corner top-left"></span><span class="frame-corner top-right"></span>\r
    <span class="frame-corner bottom-left"></span><span class="frame-corner bottom-right"></span>\r
  </div>\r
\r
  <button class="reel-control" type="button" (click)="toggleVideo()" [attr.aria-label]="videoPlaying() ? 'Pause background film' : 'Play background film'">\r
    <span class="reel-control-icon">@if (videoPlaying()) { \u275A\u275A } @else { \u25B6 }</span>\r
    <span>{{ videoPlaying() ? 'Pause film' : 'Play film' }}</span>\r
  </button>\r
\r
  <!-- Slide Indicators -->\r
  <div class="hero-indicators" role="tablist" aria-label="Hero slides">\r
    @for (slide of slides; track slide.image; let i = $index) {\r
      <button class="indicator" [class.active]="currentSlide() === i"\r
              (click)="goToSlide(i)" role="tab" [attr.aria-selected]="currentSlide() === i"\r
              [attr.aria-label]="'Go to slide ' + (i + 1)">\r
        <span class="indicator-fill"></span>\r
      </button>\r
    }\r
  </div>\r
\r
  <!-- Scroll Indicator -->\r
  <div class="scroll-hint" (click)="scroll.scrollTo('#categories')" role="button" tabindex="0" aria-label="Scroll down">\r
    <div class="scroll-line"></div>\r
    <span>Scroll</span>\r
  </div>\r
\r
  <!-- Stats Bar -->\r
  <div class="hero-stats">\r
    <div class="stat">\r
      <span class="stat-num">10+</span>\r
      <span class="stat-label">Years</span>\r
    </div>\r
    <div class="stat-sep"></div>\r
    <div class="stat">\r
      <span class="stat-num">500+</span>\r
      <span class="stat-label">Clients</span>\r
    </div>\r
    <div class="stat-sep"></div>\r
    <div class="stat">\r
      <span class="stat-num">40+</span>\r
      <span class="stat-label">Countries</span>\r
    </div>\r
    <div class="stat-sep"></div>\r
    <div class="stat">\r
      <span class="stat-num">12</span>\r
      <span class="stat-label">Awards</span>\r
    </div>\r
  </div>\r
</section>\r
`, styles: [`/* src/app/features/home/components/hero/hero.component.scss */
.hero {
  position: relative;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #080914;
}
.hero-reel,
.hero-reel video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.hero-reel {
  overflow: hidden;
}
.hero-reel video {
  object-fit: cover;
  opacity: 0.52;
  filter: saturate(0.7) contrast(1.08) brightness(0.6);
  transform: scale(1.04);
  animation: filmDrift 16s ease-in-out infinite alternate;
}
.hero-aurora {
  position: absolute;
  z-index: 1;
  inset: -35%;
  pointer-events: none;
  background:
    radial-gradient(
      circle at 25% 45%,
      rgba(99, 83, 255, 0.28),
      transparent 24%),
    radial-gradient(
      circle at 75% 30%,
      rgba(255, 112, 157, 0.2),
      transparent 20%),
    radial-gradient(
      circle at 55% 72%,
      rgba(255, 183, 102, 0.14),
      transparent 26%);
  filter: blur(18px);
  animation: auroraShift 14s ease-in-out infinite alternate;
}
.hero-grain {
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
  opacity: 0.16;
  mix-blend-mode: soft-light;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
}
.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.hero-slide.active {
  opacity: 1;
}
.hero-slide.active .hero-img {
  transform: scale(1.06);
}
.hero-img-wrap {
  position: absolute;
  inset: -5%;
  will-change: transform;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.12);
  transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      rgba(5, 6, 17, 0.88) 0%,
      rgba(8, 10, 30, 0.38) 50%,
      rgba(5, 5, 15, 0.76) 100%);
}
.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 clamp(1.5rem, 8vw, 8rem);
  max-width: 900px;
  animation: heroContentIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
}
.hero-kicker {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 1.25rem;
  padding: 0.45rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 99px;
  background: rgba(7, 8, 20, 0.34);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff7bac;
  box-shadow: 0 0 0 0 rgba(255, 123, 172, 0.7);
  animation: livePulse 1.8s infinite;
}
@keyframes heroContentIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.hero-label {
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-accent);
}
.hero-divider {
  display: block;
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}
.hero-year {
  font-family: var(--font-body);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.4);
}
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(3.5rem, 10vw, 9rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}
.hero-title-line {
  display: block;
  transition: opacity 0.5s ease;
}
.hero-title-line.accent {
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.64);
  font-style: italic;
}
.reel-control {
  position: absolute;
  right: clamp(1.5rem, 5vw, 4rem);
  top: 50%;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0.85rem 0.55rem 0.55rem;
  color: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(8, 9, 24, 0.36);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition:
    border-color 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease;
}
.reel-control:hover {
  transform: translateY(-3px);
  border-color: var(--color-accent);
  background: rgba(8, 9, 24, 0.65);
}
.hero-editorial-card {
  position: absolute;
  top: 28%;
  right: clamp(5.5rem, 12vw, 13rem);
  z-index: 3;
  width: min(250px, 21vw);
  padding: 1.15rem 1.15rem 1rem;
  color: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 3px;
  background:
    linear-gradient(
      145deg,
      rgba(20, 20, 48, 0.56),
      rgba(7, 7, 19, 0.22));
  box-shadow: 0 20px 65px rgba(0, 0, 0, 0.16);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  animation: cardFloat 7s ease-in-out infinite;
}
.hero-editorial-card p {
  max-width: 13ch;
  margin: 0.85rem 0 2.5rem;
  font-family: var(--font-heading);
  font-size: clamp(1.05rem, 1.5vw, 1.35rem);
  font-style: italic;
  line-height: 1.25;
}
.editorial-card-top,
.editorial-card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.56rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.editorial-card-top {
  color: var(--color-accent-light);
}
.editorial-card-index {
  color: rgba(255, 255, 255, 0.52);
}
.editorial-card-rule {
  width: 100%;
  height: 1px;
  margin-top: 0.8rem;
  background:
    linear-gradient(
      90deg,
      var(--color-accent),
      transparent);
}
.editorial-card-bottom {
  justify-content: flex-start;
  color: rgba(255, 255, 255, 0.5);
}
.editorial-orbit {
  display: block;
  width: 13px;
  height: 13px;
  border: 1px solid var(--color-accent);
  border-radius: 50%;
  box-shadow: inset 0 0 0 3px rgba(233, 169, 106, 0.18);
}
.hero-frame {
  position: absolute;
  z-index: 2;
  inset: 1.25rem;
  pointer-events: none;
  opacity: 0.55;
}
.frame-corner {
  position: absolute;
  width: 36px;
  height: 36px;
  border-color: rgba(255, 255, 255, 0.36);
}
.top-left {
  top: 0;
  left: 0;
  border-top: 1px solid;
  border-left: 1px solid;
}
.top-right {
  top: 0;
  right: 0;
  border-top: 1px solid;
  border-right: 1px solid;
}
.bottom-left {
  bottom: 0;
  left: 0;
  border-bottom: 1px solid;
  border-left: 1px solid;
}
.bottom-right {
  right: 0;
  bottom: 0;
  border-right: 1px solid;
  border-bottom: 1px solid;
}
.reel-control-icon {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-accent);
  color: #111022;
  letter-spacing: 0;
  font-size: 0.62rem;
}
.hero-desc {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  max-width: 420px;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}
.hero-actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}
.hero-indicators {
  position: absolute;
  bottom: 8rem;
  right: clamp(1.5rem, 5vw, 4rem);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.indicator {
  width: 2px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}
.indicator.active {
  background: rgba(255, 255, 255, 0.1);
}
.indicator-fill {
  position: absolute;
  inset: 0;
  background: var(--color-accent);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
}
.active .indicator-fill {
  transform: scaleY(1);
  transition: transform 5.5s linear;
}
.scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: none;
  animation: scrollBounce 2s ease-in-out infinite;
}
.scroll-hint span {
  font-family: var(--font-body);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}
.scroll-line {
  width: 1px;
  height: 48px;
  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.4),
      transparent);
  animation: scrollLine 1.8s ease-in-out infinite;
}
@keyframes scrollLine {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  51% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}
@keyframes scrollBounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(6px);
  }
}
.hero-stats {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: rgba(11, 11, 11, 0.6);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.25rem 2rem;
}
@media (max-width: 480px) {
  .hero-stats {
    display: none;
  }
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.5rem;
}
.stat-num {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: -0.02em;
}
.stat-label {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-top: 0.2rem;
}
.stat-sep {
  width: 1px;
  height: 32px;
  background: var(--color-border);
}
@keyframes filmDrift {
  from {
    transform: scale(1.04) translate3d(-1%, -1%, 0);
  }
  to {
    transform: scale(1.12) translate3d(1%, 1%, 0);
  }
}
@keyframes auroraShift {
  from {
    transform: rotate(-8deg) scale(1);
  }
  to {
    transform: rotate(9deg) scale(1.15);
  }
}
@keyframes livePulse {
  70% {
    box-shadow: 0 0 0 8px rgba(255, 123, 172, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 123, 172, 0);
  }
}
@keyframes cardFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@media (max-width: 768px) {
  .reel-control {
    top: auto;
    bottom: 7rem;
    right: 1.5rem;
  }
  .reel-control > span:last-child {
    display: none;
  }
  .hero-editorial-card,
  .hero-frame {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-reel video,
  .hero-aurora,
  .live-dot,
  .hero-content,
  .hero-editorial-card,
  .scroll-hint,
  .scroll-line {
    animation: none !important;
  }
}
/*# sourceMappingURL=hero.component.css.map */
`] }]
  }], null, { heroRef: [{
    type: ViewChild,
    args: ["heroRef"]
  }], reelVideo: [{
    type: ViewChild,
    args: ["reelVideo"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/features/home/components/hero/hero.component.ts", lineNumber: 14 });
})();

// src/app/features/home/components/categories/categories.component.ts
var _c02 = () => ["/portfolio"];
var _c12 = (a0) => ({ category: a0 });
var _forTrack02 = ($index, $item) => $item.id;
function CategoriesComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275listener("mouseenter", function CategoriesComponent_For_12_Template_a_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cursor.setHover(true, "Explore"));
    })("mouseleave", function CategoriesComponent_For_12_Template_a_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cursor.setHover(false));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 10);
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12)(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "h3", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 17);
    \u0275\u0275element(13, "path", 18);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const \u0275$index_20_r4 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_20_r4 % 4 + 1));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c02))("queryParams", \u0275\u0275pureFunction1(9, _c12, cat_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", cat_r3.image, \u0275\u0275sanitizeUrl)("alt", cat_r3.label + " photography");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", cat_r3.count, " works");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r3.label);
  }
}
var CategoriesComponent = class _CategoriesComponent {
  data = inject(DataService);
  cursor = inject(CursorService);
  static \u0275fac = function CategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], decls: 13, vars: 0, consts: [["id", "categories", "aria-label", "Photography categories", 1, "categories"], [1, "container"], [1, "categories-header", "reveal"], [1, "section-label"], [1, "section-title"], [1, "categories-grid"], [1, "cat-card", "reveal", 3, "routerLink", "queryParams", "class"], [1, "cat-card", "reveal", 3, "mouseenter", "mouseleave", "routerLink", "queryParams"], [1, "cat-img-wrap", "img-mask"], ["loading", "lazy", "width", "800", "height", "600", 3, "src", "alt"], [1, "cat-overlay"], [1, "cat-content"], [1, "cat-top"], [1, "cat-count"], [1, "cat-bottom"], [1, "cat-title"], [1, "cat-arrow"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M5 12h14M12 5l7 7-7 7"]], template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Specializations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Every Story");
      \u0275\u0275element(7, "br");
      \u0275\u0275elementStart(8, "em");
      \u0275\u0275text(9, "Deserves a Master");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275repeaterCreate(11, CategoriesComponent_For_12_Template, 14, 11, "a", 6, _forTrack02);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.data.categories);
    }
  }, dependencies: [RouterLink], styles: ['\n.categories[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n  overflow: hidden;\n}\n.categories-header[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.categories-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto auto;\n  gap: 1.5px;\n}\n@media (max-width: 900px) {\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cat-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  aspect-ratio: 4/5;\n  isolation: isolate;\n}\n.cat-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  z-index: 2;\n  inset: 0;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      115deg,\n      transparent 35%,\n      rgba(255, 255, 255, 0.22) 48%,\n      transparent 61%);\n  transform: translateX(-130%);\n  transition: transform 0.9s var(--transition-smooth);\n}\n.cat-card[_ngcontent-%COMP%]:nth-child(1) {\n  aspect-ratio: 3/4;\n}\n.cat-card[_ngcontent-%COMP%]:nth-child(4) {\n  aspect-ratio: 16/9;\n  grid-column: span 2;\n}\n@media (max-width: 900px) {\n  .cat-card[_ngcontent-%COMP%]:nth-child(4) {\n    grid-column: span 1;\n    aspect-ratio: 4/5;\n  }\n}\n.cat-card[_ngcontent-%COMP%]:hover   .cat-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.cat-card[_ngcontent-%COMP%]:hover   .cat-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cat-card[_ngcontent-%COMP%]:hover   .cat-arrow[_ngcontent-%COMP%] {\n  transform: translateX(6px);\n}\n.cat-card[_ngcontent-%COMP%]:hover   .cat-title[_ngcontent-%COMP%] {\n  transform: translateY(-4px);\n}\n.cat-card[_ngcontent-%COMP%]:hover::after {\n  transform: translateX(130%);\n}\n.cat-img-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.cat-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.04);\n  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.cat-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(11, 11, 11, 0.9) 0%,\n      rgba(11, 11, 11, 0.2) 50%,\n      transparent 100%);\n  opacity: 0.7;\n  transition: opacity 0.4s ease;\n}\n.cat-content[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  z-index: 3;\n}\n.cat-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.cat-count[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  padding: 0.4rem 0.8rem;\n  border-radius: 2px;\n}\n.cat-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.cat-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(1.5rem, 3vw, 2.25rem);\n  font-weight: 700;\n  color: var(--color-secondary);\n  letter-spacing: -0.02em;\n  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.cat-arrow[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease;\n}\n.cat-card[_ngcontent-%COMP%]:hover   .cat-arrow[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n/*# sourceMappingURL=categories.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-categories", standalone: true, imports: [RouterLink], template: `<section class="categories" id="categories" aria-label="Photography categories">\r
  <div class="container">\r
    <div class="categories-header reveal">\r
      <span class="section-label">Specializations</span>\r
      <h2 class="section-title">Every Story<br><em>Deserves a Master</em></h2>\r
    </div>\r
  </div>\r
\r
  <div class="categories-grid">\r
    @for (cat of data.categories; track cat.id; let i = $index) {\r
      <a [routerLink]="['/portfolio']" [queryParams]="{category: cat.id}" class="cat-card reveal"\r
         [class]="'reveal-delay-' + (i % 4 + 1)"\r
         (mouseenter)="cursor.setHover(true, 'Explore')" (mouseleave)="cursor.setHover(false)">\r
        <div class="cat-img-wrap img-mask">\r
          <img [src]="cat.image" [alt]="cat.label + ' photography'" loading="lazy" width="800" height="600">\r
        </div>\r
        <div class="cat-overlay"></div>\r
        <div class="cat-content">\r
          <div class="cat-top">\r
            <span class="cat-count">{{ cat.count }} works</span>\r
          </div>\r
          <div class="cat-bottom">\r
            <h3 class="cat-title">{{ cat.label }}</h3>\r
            <div class="cat-arrow">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
            </div>\r
          </div>\r
        </div>\r
      </a>\r
    }\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/home/components/categories/categories.component.scss */\n.categories {\n  padding: 8rem 0;\n  overflow: hidden;\n}\n.categories-header {\n  margin-bottom: 4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.categories-header .section-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.categories-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto auto;\n  gap: 1.5px;\n}\n@media (max-width: 900px) {\n  .categories-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .categories-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.cat-card {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  aspect-ratio: 4/5;\n  isolation: isolate;\n}\n.cat-card::after {\n  content: "";\n  position: absolute;\n  z-index: 2;\n  inset: 0;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      115deg,\n      transparent 35%,\n      rgba(255, 255, 255, 0.22) 48%,\n      transparent 61%);\n  transform: translateX(-130%);\n  transition: transform 0.9s var(--transition-smooth);\n}\n.cat-card:nth-child(1) {\n  aspect-ratio: 3/4;\n}\n.cat-card:nth-child(4) {\n  aspect-ratio: 16/9;\n  grid-column: span 2;\n}\n@media (max-width: 900px) {\n  .cat-card:nth-child(4) {\n    grid-column: span 1;\n    aspect-ratio: 4/5;\n  }\n}\n.cat-card:hover .cat-img-wrap img {\n  transform: scale(1.08);\n}\n.cat-card:hover .cat-overlay {\n  opacity: 1;\n}\n.cat-card:hover .cat-arrow {\n  transform: translateX(6px);\n}\n.cat-card:hover .cat-title {\n  transform: translateY(-4px);\n}\n.cat-card:hover::after {\n  transform: translateX(130%);\n}\n.cat-img-wrap {\n  position: absolute;\n  inset: 0;\n}\n.cat-img-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.04);\n  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.cat-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(11, 11, 11, 0.9) 0%,\n      rgba(11, 11, 11, 0.2) 50%,\n      transparent 100%);\n  opacity: 0.7;\n  transition: opacity 0.4s ease;\n}\n.cat-content {\n  position: absolute;\n  inset: 0;\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  z-index: 3;\n}\n.cat-top {\n  display: flex;\n  justify-content: flex-end;\n}\n.cat-count {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  padding: 0.4rem 0.8rem;\n  border-radius: 2px;\n}\n.cat-bottom {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.cat-title {\n  font-family: var(--font-heading);\n  font-size: clamp(1.5rem, 3vw, 2.25rem);\n  font-weight: 700;\n  color: var(--color-secondary);\n  letter-spacing: -0.02em;\n  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.cat-arrow {\n  width: 44px;\n  height: 44px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease;\n}\n.cat-card:hover .cat-arrow {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n/*# sourceMappingURL=categories.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src/app/features/home/components/categories/categories.component.ts", lineNumber: 13 });
})();

// src/app/features/home/components/marquee/marquee.component.ts
function MarqueeComponent_For_3_Template(rf, ctx) {
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
var MarqueeComponent = class _MarqueeComponent {
  items = ["Wedding Photography", "Portrait Sessions", "Fashion Editorial", "Commercial Work", "Travel Stories", "Fine Art Prints", "Drone Aerial", "Luxury Events"];
  static \u0275fac = function MarqueeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarqueeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MarqueeComponent, selectors: [["app-marquee"]], decls: 4, vars: 0, consts: [["aria-hidden", "true", 1, "marquee-section"], [1, "marquee-track"], [1, "marquee-item"], [1, "marquee-dot"]], template: function MarqueeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, MarqueeComponent_For_3_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.items.concat(ctx.items));
    }
  }, styles: ["\n.marquee-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1.25rem 0;\n  background: var(--color-bg-2);\n}\n.marquee-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  width: max-content;\n  animation: _ngcontent-%COMP%_marquee 30s linear infinite;\n}\n.marquee-track[_ngcontent-%COMP%]:hover {\n  animation-play-state: paused;\n}\n.marquee-item[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  font-weight: 400;\n  font-style: italic;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  transition: color 0.3s ease;\n}\n.marquee-item[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent);\n}\n.marquee-dot[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-size: 0.5rem;\n  opacity: 0.6;\n}\n@keyframes _ngcontent-%COMP%_marquee {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=marquee.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarqueeComponent, [{
    type: Component,
    args: [{ selector: "app-marquee", standalone: true, template: `
    <div class="marquee-section" aria-hidden="true">
      <div class="marquee-track">
        @for (item of items.concat(items); track $index) {
          <span class="marquee-item">{{ item }}</span>
          <span class="marquee-dot">\u2726</span>
        }
      </div>
    </div>
  `, styles: ["/* src/app/features/home/components/marquee/marquee.component.scss */\n.marquee-section {\n  overflow: hidden;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1.25rem 0;\n  background: var(--color-bg-2);\n}\n.marquee-track {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  width: max-content;\n  animation: marquee 30s linear infinite;\n}\n.marquee-track:hover {\n  animation-play-state: paused;\n}\n.marquee-item {\n  font-family: var(--font-heading);\n  font-size: clamp(1rem, 2vw, 1.25rem);\n  font-weight: 400;\n  font-style: italic;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  transition: color 0.3s ease;\n}\n.marquee-item:hover {\n  color: var(--color-accent);\n}\n.marquee-dot {\n  color: var(--color-accent);\n  font-size: 0.5rem;\n  opacity: 0.6;\n}\n@keyframes marquee {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=marquee.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MarqueeComponent, { className: "MarqueeComponent", filePath: "src/app/features/home/components/marquee/marquee.component.ts", lineNumber: 18 });
})();

// src/app/features/home/components/featured-gallery/featured-gallery.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function FeaturedGalleryComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function FeaturedGalleryComponent_For_18_Template_div_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openLightbox(item_r2));
    })("mouseenter", function FeaturedGalleryComponent_For_18_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cursor.setHover(true, "View"));
    })("mouseleave", function FeaturedGalleryComponent_For_18_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cursor.setHover(false));
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 20);
    \u0275\u0275element(11, "path", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_31_r4 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_31_r4 % 3 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r2.image, \u0275\u0275sanitizeUrl)("alt", item_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.title);
  }
}
function FeaturedGalleryComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function FeaturedGalleryComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275elementStart(1, "button", 23);
    \u0275\u0275listener("click", function FeaturedGalleryComponent_Conditional_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 24);
    \u0275\u0275element(3, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 26);
    \u0275\u0275listener("click", function FeaturedGalleryComponent_Conditional_19_Template_div_click_4_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(5, "img", 27);
    \u0275\u0275elementStart(6, "div", 28)(7, "span", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r2.lightboxItem().title);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r2.lightboxItem().image, \u0275\u0275sanitizeUrl)("alt", ctx_r2.lightboxItem().title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.lightboxItem().category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.lightboxItem().title);
  }
}
var FeaturedGalleryComponent = class _FeaturedGalleryComponent {
  data = inject(DataService);
  cursor = inject(CursorService);
  lightboxItem = signal(null, ...ngDevMode ? [{ debugName: "lightboxItem" }] : (
    /* istanbul ignore next */
    []
  ));
  featured = [];
  ngOnInit() {
    this.featured = this.data.portfolioItems.filter((i) => i.featured).slice(0, 6);
  }
  openLightbox(item) {
    this.lightboxItem.set(item);
  }
  closeLightbox() {
    this.lightboxItem.set(null);
  }
  static \u0275fac = function FeaturedGalleryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturedGalleryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturedGalleryComponent, selectors: [["app-featured-gallery"]], decls: 20, vars: 1, consts: [["aria-label", "Featured gallery", 1, "featured-gallery"], [1, "container"], [1, "gallery-header"], [1, "reveal"], [1, "section-label"], [1, "section-title"], ["routerLink", "/portfolio", 1, "btn-outline", "reveal", "reveal-delay-2", 3, "mouseenter", "mouseleave"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "gallery-masonry"], [1, "gallery-item", "reveal", 3, "class"], ["role", "dialog", "aria-modal", "true", 1, "lightbox"], [1, "gallery-item", "reveal", 3, "click", "mouseenter", "mouseleave"], [1, "gallery-img-wrap", "img-mask"], ["loading", "lazy", "width", "900", "height", "600", 3, "src", "alt"], [1, "gallery-item-overlay"], [1, "gallery-item-info"], [1, "gallery-item-cat"], [1, "gallery-item-title"], [1, "gallery-item-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"], ["role", "dialog", "aria-modal", "true", 1, "lightbox", 3, "click"], ["aria-label", "Close lightbox", 1, "lightbox-close", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M18 6L6 18M6 6l12 12"], [1, "lightbox-content", 3, "click"], ["loading", "lazy", 3, "src", "alt"], [1, "lightbox-info"], [1, "lightbox-cat"], [1, "lightbox-title"]], template: function FeaturedGalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "Selected Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 5);
      \u0275\u0275text(7, "Featured");
      \u0275\u0275element(8, "br");
      \u0275\u0275elementStart(9, "em");
      \u0275\u0275text(10, "Portfolio");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "a", 6);
      \u0275\u0275listener("mouseenter", function FeaturedGalleryComponent_Template_a_mouseenter_11_listener() {
        return ctx.cursor.setHover(true);
      })("mouseleave", function FeaturedGalleryComponent_Template_a_mouseleave_11_listener() {
        return ctx.cursor.setHover(false);
      });
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "View All Work");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 7);
      \u0275\u0275element(15, "path", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275repeaterCreate(17, FeaturedGalleryComponent_For_18_Template, 12, 6, "div", 10, _forTrack03);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, FeaturedGalleryComponent_Conditional_19_Template, 11, 5, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.featured);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.lightboxItem() ? 19 : -1);
    }
  }, dependencies: [RouterLink], styles: ["\n.featured-gallery[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.gallery-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 4rem;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n.gallery-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.gallery-masonry[_ngcontent-%COMP%] {\n  columns: 3;\n  column-gap: 1.5px;\n  padding: 0 clamp(1.5rem, 5vw, 6rem);\n}\n@media (max-width: 900px) {\n  .gallery-masonry[_ngcontent-%COMP%] {\n    columns: 2;\n  }\n}\n@media (max-width: 560px) {\n  .gallery-masonry[_ngcontent-%COMP%] {\n    columns: 1;\n  }\n}\n.gallery-item[_ngcontent-%COMP%] {\n  break-inside: avoid;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 1.5px;\n  cursor: none;\n  background: var(--color-bg-2);\n}\n.gallery-item[_ngcontent-%COMP%]:hover   .gallery-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-icon[_ngcontent-%COMP%] {\n  transform: translateY(-4px) rotate(45deg);\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.gallery-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  transform: scale(1.04);\n  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.gallery-item-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(6, 7, 22, 0.93) 0%,\n      rgba(14, 13, 35, 0.14) 65%);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 1.5rem;\n}\n.gallery-item-cat[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  display: block;\n  margin-bottom: 0.4rem;\n}\n.gallery-item-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-secondary);\n}\n.gallery-item-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n  align-self: flex-end;\n  transition:\n    transform 0.4s var(--transition-spring),\n    border-color 0.3s ease,\n    color 0.3s ease;\n}\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9000;\n  background: rgba(11, 11, 11, 0.96);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  animation: _ngcontent-%COMP%_lightboxIn 0.4s ease;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n@keyframes _ngcontent-%COMP%_lightboxIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  width: 48px;\n  height: 48px;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-secondary);\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.lightbox-close[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.lightbox-content[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  animation: _ngcontent-%COMP%_lightboxContentIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.lightbox-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 80vh;\n  object-fit: contain;\n  border-radius: 2px;\n}\n@keyframes _ngcontent-%COMP%_lightboxContentIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.lightbox-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.lightbox-cat[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n}\n.lightbox-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.25rem;\n  color: var(--color-secondary);\n}\n/*# sourceMappingURL=featured-gallery.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturedGalleryComponent, [{
    type: Component,
    args: [{ selector: "app-featured-gallery", standalone: true, imports: [RouterLink], template: `<section class="featured-gallery" aria-label="Featured gallery">\r
  <div class="container">\r
    <div class="gallery-header">\r
      <div class="reveal">\r
        <span class="section-label">Selected Works</span>\r
        <h2 class="section-title">Featured<br><em>Portfolio</em></h2>\r
      </div>\r
      <a routerLink="/portfolio" class="btn-outline reveal reveal-delay-2"\r
         (mouseenter)="cursor.setHover(true)" (mouseleave)="cursor.setHover(false)">\r
        <span>View All Work</span>\r
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
      </a>\r
    </div>\r
  </div>\r
\r
  <div class="gallery-masonry">\r
    @for (item of featured; track item.id; let i = $index) {\r
      <div class="gallery-item reveal" [class]="'reveal-delay-' + (i % 3 + 1)"\r
           (click)="openLightbox(item)"\r
           (mouseenter)="cursor.setHover(true, 'View')" (mouseleave)="cursor.setHover(false)">\r
        <div class="gallery-img-wrap img-mask">\r
          <img [src]="item.image" [alt]="item.title" loading="lazy" width="900" height="600">\r
        </div>\r
        <div class="gallery-item-overlay">\r
          <div class="gallery-item-info">\r
            <span class="gallery-item-cat">{{ item.category }}</span>\r
            <h3 class="gallery-item-title">{{ item.title }}</h3>\r
          </div>\r
          <div class="gallery-item-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>\r
          </div>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- Lightbox -->\r
  @if (lightboxItem()) {\r
    <div class="lightbox" (click)="closeLightbox()" role="dialog" aria-modal="true" [attr.aria-label]="lightboxItem()!.title">\r
      <button class="lightbox-close" (click)="closeLightbox()" aria-label="Close lightbox">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>\r
      </button>\r
      <div class="lightbox-content" (click)="$event.stopPropagation()">\r
        <img [src]="lightboxItem()!.image" [alt]="lightboxItem()!.title" loading="lazy">\r
        <div class="lightbox-info">\r
          <span class="lightbox-cat">{{ lightboxItem()!.category }}</span>\r
          <h3 class="lightbox-title">{{ lightboxItem()!.title }}</h3>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</section>\r
`, styles: ["/* src/app/features/home/components/featured-gallery/featured-gallery.component.scss */\n.featured-gallery {\n  padding: 8rem 0;\n}\n.gallery-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 4rem;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n.gallery-header .section-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.gallery-masonry {\n  columns: 3;\n  column-gap: 1.5px;\n  padding: 0 clamp(1.5rem, 5vw, 6rem);\n}\n@media (max-width: 900px) {\n  .gallery-masonry {\n    columns: 2;\n  }\n}\n@media (max-width: 560px) {\n  .gallery-masonry {\n    columns: 1;\n  }\n}\n.gallery-item {\n  break-inside: avoid;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 1.5px;\n  cursor: none;\n  background: var(--color-bg-2);\n}\n.gallery-item:hover .gallery-img-wrap img {\n  transform: scale(1.06);\n}\n.gallery-item:hover .gallery-item-overlay {\n  opacity: 1;\n}\n.gallery-item:hover .gallery-item-icon {\n  transform: translateY(-4px) rotate(45deg);\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.gallery-img-wrap img {\n  width: 100%;\n  height: auto;\n  display: block;\n  transform: scale(1.04);\n  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.gallery-item-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(6, 7, 22, 0.93) 0%,\n      rgba(14, 13, 35, 0.14) 65%);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 1.5rem;\n}\n.gallery-item-cat {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  display: block;\n  margin-bottom: 0.4rem;\n}\n.gallery-item-title {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-secondary);\n}\n.gallery-item-icon {\n  width: 44px;\n  height: 44px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n  align-self: flex-end;\n  transition:\n    transform 0.4s var(--transition-spring),\n    border-color 0.3s ease,\n    color 0.3s ease;\n}\n.lightbox {\n  position: fixed;\n  inset: 0;\n  z-index: 9000;\n  background: rgba(11, 11, 11, 0.96);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  animation: lightboxIn 0.4s ease;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n@keyframes lightboxIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.lightbox-close {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  width: 48px;\n  height: 48px;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-secondary);\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.lightbox-close:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.lightbox-content {\n  max-width: 90vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  animation: lightboxContentIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.lightbox-content img {\n  max-width: 100%;\n  max-height: 80vh;\n  object-fit: contain;\n  border-radius: 2px;\n}\n@keyframes lightboxContentIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.lightbox-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.lightbox-cat {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n}\n.lightbox-title {\n  font-family: var(--font-heading);\n  font-size: 1.25rem;\n  color: var(--color-secondary);\n}\n/*# sourceMappingURL=featured-gallery.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturedGalleryComponent, { className: "FeaturedGalleryComponent", filePath: "src/app/features/home/components/featured-gallery/featured-gallery.component.ts", lineNumber: 14 });
})();

// src/app/features/home/components/testimonials/testimonials.component.ts
var _c03 = () => [1, 2, 3, 4, 5];
var _forTrack04 = ($index, $item) => $item.id;
function TestimonialsComponent_For_14_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 21);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("filled", s_r1 <= t_r2.rating);
  }
}
function TestimonialsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3, '"');
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "blockquote", 12);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 13)(7, "div", 14);
    \u0275\u0275domElement(8, "img", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 16)(10, "cite", 17);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span", 18);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "div", 19);
    \u0275\u0275repeaterCreate(15, TestimonialsComponent_For_14_For_16_Template, 2, 2, "span", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2.quote);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("src", t_r2.image, \u0275\u0275sanitizeUrl)("alt", t_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.role);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r2.rating + " out of 5 stars");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(6, _c03));
  }
}
var TestimonialsComponent = class _TestimonialsComponent {
  platformId = inject(PLATFORM_ID);
  data = inject(DataService);
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    import("./chunk-6PW3FAS2.js").then(({ default: Swiper }) => {
      import("./chunk-NLTDRSX3.js").then(({ Autoplay, Pagination }) => {
        new Swiper(".testimonials-swiper", {
          modules: [Autoplay, Pagination],
          loop: true,
          speed: 800,
          autoplay: { delay: 5e3, disableOnInteraction: false },
          pagination: { el: ".swiper-pagination", clickable: true },
          slidesPerView: 1,
          spaceBetween: 0
        });
      });
    });
  }
  static \u0275fac = function TestimonialsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestimonialsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialsComponent, selectors: [["app-testimonials"]], decls: 16, vars: 0, consts: [["aria-label", "Client testimonials", 1, "testimonials"], [1, "testimonials-bg"], [1, "container"], [1, "testimonials-header", "reveal"], [1, "section-label"], [1, "section-title"], [1, "swiper", "testimonials-swiper", "reveal", "reveal-delay-2"], [1, "swiper-wrapper"], [1, "swiper-slide"], [1, "swiper-pagination"], [1, "testimonial-card", "glass"], ["aria-hidden", "true", 1, "testimonial-quote-icon"], [1, "testimonial-quote"], [1, "testimonial-author"], [1, "author-img-wrap"], ["loading", "lazy", "width", "64", "height", "64", 3, "src", "alt"], [1, "author-info"], [1, "author-name"], [1, "author-role"], [1, "author-stars"], [1, "star", 3, "filled"], [1, "star"]], template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0);
      \u0275\u0275domElement(1, "div", 1);
      \u0275\u0275domElementStart(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "Testimonials");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "h2", 5);
      \u0275\u0275text(7, "Words From");
      \u0275\u0275domElement(8, "br");
      \u0275\u0275domElementStart(9, "em");
      \u0275\u0275text(10, "Our Clients");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(11, "div", 6)(12, "div", 7);
      \u0275\u0275repeaterCreate(13, TestimonialsComponent_For_14_Template, 17, 7, "div", 8, _forTrack04);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(15, "div", 9);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.data.testimonials);
    }
  }, styles: ['\n[_ngcontent-%COMP%]:root {\n  --swiper-theme-color: #007aff;\n}\n[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.swiper-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], \n.swiper-ios[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], \n.swiper-wrapper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n.swiper-vertical[_ngcontent-%COMP%] {\n  touch-action: pan-x;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.swiper-autoheight[_ngcontent-%COMP%], \n.swiper-autoheight[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  height: auto;\n}\n.swiper-autoheight[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  backface-visibility: hidden;\n}\n.swiper-3d.swiper-css-mode[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-3d[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%]:first-child {\n  margin-inline-start: var(--swiper-slides-offset-before);\n  scroll-margin-inline-start: var(--swiper-slides-offset-before);\n}\n.swiper-css-mode.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%]:last-child {\n  margin-inline-end: var(--swiper-slides-offset-after);\n}\n.swiper-css-mode.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%]:first-child {\n  margin-block-start: var(--swiper-slides-offset-before);\n  scroll-margin-block-start: var(--swiper-slides-offset-before);\n}\n.swiper-css-mode.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%]:last-child {\n  margin-block-end: var(--swiper-slides-offset-after);\n}\n.swiper-css-mode.swiper-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::before {\n  content: "";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%]:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%]:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to left,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n:is(.swiper[_ngcontent-%COMP%]:not(.swiper-watch-progress), .swiper-watch-progress[_ngcontent-%COMP%]   .swiper-slide-visible[_ngcontent-%COMP%])   .swiper-lazy-preloader[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white[_ngcontent-%COMP%] {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black[_ngcontent-%COMP%] {\n  --swiper-preloader-color: #000;\n}\n@keyframes _ngcontent-%COMP%_swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.testimonials[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 8rem 0;\n  overflow: hidden;\n}\n.testimonials-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 50% 50%,\n      rgba(201, 169, 110, 0.04) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.testimonials-header[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n.testimonials-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.testimonials-swiper[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  padding: clamp(2rem, 5vw, 3.5rem);\n  border-radius: 2px;\n  position: relative;\n}\n.testimonial-quote-icon[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 8rem;\n  line-height: 0.6;\n  color: var(--color-accent);\n  opacity: 0.15;\n  position: absolute;\n  top: 2rem;\n  right: 2.5rem;\n  font-style: italic;\n  pointer-events: none;\n}\n.testimonial-quote[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(1.1rem, 2.5vw, 1.4rem);\n  font-weight: 400;\n  font-style: italic;\n  line-height: 1.65;\n  color: var(--color-secondary);\n  margin-bottom: 2.5rem;\n  position: relative;\n}\n.testimonial-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n}\n.author-img-wrap[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid var(--color-accent);\n  flex-shrink: 0;\n}\n.author-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.author-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.author-name[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1rem;\n  font-weight: 600;\n  font-style: normal;\n  color: var(--color-secondary);\n}\n.author-role[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.05em;\n}\n.author-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.2rem;\n  margin-left: auto;\n}\n.star[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-border);\n  transition: color 0.2s ease;\n}\n.star.filled[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n[_nghost-%COMP%]     .swiper-pagination {\n  margin-top: 2.5rem;\n  position: static;\n  display: flex;\n  justify-content: flex-start;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=testimonials.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialsComponent, [{
    type: Component,
    args: [{ selector: "app-testimonials", standalone: true, template: `<section class="testimonials" aria-label="Client testimonials">\r
  <div class="testimonials-bg"></div>\r
  <div class="container">\r
    <div class="testimonials-header reveal">\r
      <span class="section-label">Testimonials</span>\r
      <h2 class="section-title">Words From<br><em>Our Clients</em></h2>\r
    </div>\r
\r
    <div class="swiper testimonials-swiper reveal reveal-delay-2">\r
      <div class="swiper-wrapper">\r
        @for (t of data.testimonials; track t.id) {\r
          <div class="swiper-slide">\r
            <div class="testimonial-card glass">\r
              <div class="testimonial-quote-icon" aria-hidden="true">"</div>\r
              <blockquote class="testimonial-quote">{{ t.quote }}</blockquote>\r
              <div class="testimonial-author">\r
                <div class="author-img-wrap">\r
                  <img [src]="t.image" [alt]="t.name" loading="lazy" width="64" height="64">\r
                </div>\r
                <div class="author-info">\r
                  <cite class="author-name">{{ t.name }}</cite>\r
                  <span class="author-role">{{ t.role }}</span>\r
                </div>\r
                <div class="author-stars" [attr.aria-label]="t.rating + ' out of 5 stars'">\r
                  @for (s of [1,2,3,4,5]; track s) {\r
                    <span class="star" [class.filled]="s <= t.rating">\u2605</span>\r
                  }\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
      <div class="swiper-pagination"></div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/home/components/testimonials/testimonials.component.scss */\n:root {\n  --swiper-theme-color: #007aff;\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  backface-visibility: hidden;\n}\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-slides-offset-before);\n  scroll-margin-inline-start: var(--swiper-slides-offset-before);\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper > .swiper-slide:last-child {\n  margin-inline-end: var(--swiper-slides-offset-after);\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-slides-offset-before);\n  scroll-margin-block-start: var(--swiper-slides-offset-before);\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper > .swiper-slide:last-child {\n  margin-block-end: var(--swiper-slides-offset-after);\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: "";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image:\n    linear-gradient(\n      to left,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image:\n    linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n:is(.swiper:not(.swiper-watch-progress), .swiper-watch-progress .swiper-slide-visible) .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.testimonials {\n  position: relative;\n  padding: 8rem 0;\n  overflow: hidden;\n}\n.testimonials-bg {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 50% 50%,\n      rgba(201, 169, 110, 0.04) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.testimonials-header {\n  margin-bottom: 4rem;\n}\n.testimonials-header .section-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.testimonials-swiper {\n  max-width: 800px;\n}\n.testimonial-card {\n  padding: clamp(2rem, 5vw, 3.5rem);\n  border-radius: 2px;\n  position: relative;\n}\n.testimonial-quote-icon {\n  font-family: var(--font-heading);\n  font-size: 8rem;\n  line-height: 0.6;\n  color: var(--color-accent);\n  opacity: 0.15;\n  position: absolute;\n  top: 2rem;\n  right: 2.5rem;\n  font-style: italic;\n  pointer-events: none;\n}\n.testimonial-quote {\n  font-family: var(--font-heading);\n  font-size: clamp(1.1rem, 2.5vw, 1.4rem);\n  font-weight: 400;\n  font-style: italic;\n  line-height: 1.65;\n  color: var(--color-secondary);\n  margin-bottom: 2.5rem;\n  position: relative;\n}\n.testimonial-author {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n}\n.author-img-wrap {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid var(--color-accent);\n  flex-shrink: 0;\n}\n.author-img-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.author-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.author-name {\n  font-family: var(--font-heading);\n  font-size: 1rem;\n  font-weight: 600;\n  font-style: normal;\n  color: var(--color-secondary);\n}\n.author-role {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.05em;\n}\n.author-stars {\n  display: flex;\n  gap: 0.2rem;\n  margin-left: auto;\n}\n.star {\n  font-size: 0.9rem;\n  color: var(--color-border);\n  transition: color 0.2s ease;\n}\n.star.filled {\n  color: var(--color-accent);\n}\n:host ::ng-deep .swiper-pagination {\n  margin-top: 2.5rem;\n  position: static;\n  display: flex;\n  justify-content: flex-start;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=testimonials.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialsComponent, { className: "TestimonialsComponent", filePath: "src/app/features/home/components/testimonials/testimonials.component.ts", lineNumber: 11 });
})();

// src/app/features/home/components/process/process.component.ts
var _forTrack05 = ($index, $item) => $item.num;
function ProcessComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(3, "div", 9);
    \u0275\u0275domElementStart(4, "div", 10)(5, "h3", 11);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 12);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const \u0275$index_20_r2 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_20_r2 % 3 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.num);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(step_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.desc);
  }
}
var ProcessComponent = class _ProcessComponent {
  steps = [
    { num: "01", title: "Consultation", desc: "We begin with an in-depth conversation to understand your vision, style preferences, and the story you want to tell." },
    { num: "02", title: "Planning", desc: "Together we craft a detailed creative brief, scout locations, plan lighting, and prepare every element for perfection." },
    { num: "03", title: "Photoshoot", desc: "On the day, our team creates a relaxed, inspiring atmosphere where authentic moments unfold naturally." },
    { num: "04", title: "Editing", desc: "Each image is meticulously retouched with our signature cinematic style, ensuring every frame is gallery-worthy." },
    { num: "05", title: "Delivery", desc: "Your curated collection is delivered through a private online gallery with full print rights and archival quality files." }
  ];
  static \u0275fac = function ProcessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProcessComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProcessComponent, selectors: [["app-process"]], decls: 13, vars: 0, consts: [["aria-label", "Our process", 1, "process"], [1, "container"], [1, "process-header", "reveal"], [1, "section-label"], [1, "section-title"], [1, "process-steps"], [1, "process-step", "reveal", 3, "class"], [1, "process-step", "reveal"], [1, "step-num"], ["aria-hidden", "true", 1, "step-line"], [1, "step-content"], [1, "step-title"], [1, "step-desc"]], template: function ProcessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "How We Work");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h2", 4);
      \u0275\u0275text(6, "The Lumi\xE8re");
      \u0275\u0275domElement(7, "br");
      \u0275\u0275domElementStart(8, "em");
      \u0275\u0275text(9, "Experience");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "div", 5);
      \u0275\u0275repeaterCreate(11, ProcessComponent_For_12_Template, 9, 5, "div", 6, _forTrack05);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.steps);
    }
  }, styles: ["\n.process[_ngcontent-%COMP%] {\n  padding: 8rem 0;\n}\n.process-header[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n}\n.process-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.process-steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0;\n  position: relative;\n}\n@media (max-width: 1024px) {\n  .process-steps[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 3rem 0;\n  }\n}\n@media (max-width: 640px) {\n  .process-steps[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.process-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0 2rem 0 0;\n  position: relative;\n}\n.process-step[_ngcontent-%COMP%]:not(:last-child)   .step-line[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 640px) {\n  .process-step[_ngcontent-%COMP%]:not(:last-child)   .step-line[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.step-num[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 3.5rem;\n  font-weight: 800;\n  color: transparent;\n  -webkit-text-stroke: 1px rgba(201, 169, 110, 0.3);\n  letter-spacing: -0.04em;\n  line-height: 1;\n  margin-bottom: 1.5rem;\n}\n.step-line[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 1.75rem;\n  right: 0;\n  width: calc(100% - 3rem);\n  height: 1px;\n  background:\n    linear-gradient(\n      to right,\n      var(--color-accent),\n      transparent);\n  opacity: 0.3;\n}\n.step-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-secondary);\n  margin-bottom: 0.75rem;\n}\n.step-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n/*# sourceMappingURL=process.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProcessComponent, [{
    type: Component,
    args: [{ selector: "app-process", standalone: true, template: `<section class="process" aria-label="Our process">\r
  <div class="container">\r
    <div class="process-header reveal">\r
      <span class="section-label">How We Work</span>\r
      <h2 class="section-title">The Lumi\xE8re<br><em>Experience</em></h2>\r
    </div>\r
\r
    <div class="process-steps">\r
      @for (step of steps; track step.num; let i = $index) {\r
        <div class="process-step reveal" [class]="'reveal-delay-' + (i % 3 + 1)">\r
          <div class="step-num">{{ step.num }}</div>\r
          <div class="step-line" aria-hidden="true"></div>\r
          <div class="step-content">\r
            <h3 class="step-title">{{ step.title }}</h3>\r
            <p class="step-desc">{{ step.desc }}</p>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/features/home/components/process/process.component.scss */\n.process {\n  padding: 8rem 0;\n}\n.process-header {\n  margin-bottom: 5rem;\n}\n.process-header .section-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.process-steps {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0;\n  position: relative;\n}\n@media (max-width: 1024px) {\n  .process-steps {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 3rem 0;\n  }\n}\n@media (max-width: 640px) {\n  .process-steps {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.process-step {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0 2rem 0 0;\n  position: relative;\n}\n.process-step:not(:last-child) .step-line {\n  display: block;\n}\n@media (max-width: 640px) {\n  .process-step:not(:last-child) .step-line {\n    display: none;\n  }\n}\n.step-num {\n  font-family: var(--font-heading);\n  font-size: 3.5rem;\n  font-weight: 800;\n  color: transparent;\n  -webkit-text-stroke: 1px rgba(201, 169, 110, 0.3);\n  letter-spacing: -0.04em;\n  line-height: 1;\n  margin-bottom: 1.5rem;\n}\n.step-line {\n  display: none;\n  position: absolute;\n  top: 1.75rem;\n  right: 0;\n  width: calc(100% - 3rem);\n  height: 1px;\n  background:\n    linear-gradient(\n      to right,\n      var(--color-accent),\n      transparent);\n  opacity: 0.3;\n}\n.step-title {\n  font-family: var(--font-heading);\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-secondary);\n  margin-bottom: 0.75rem;\n}\n.step-desc {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n/*# sourceMappingURL=process.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProcessComponent, { className: "ProcessComponent", filePath: "src/app/features/home/components/process/process.component.ts", lineNumber: 9 });
})();

// src/app/features/home/components/showreel/showreel.component.ts
var _c04 = ["showreelVideo"];
var ShowreelComponent = class _ShowreelComponent {
  showreelVideo;
  isPlaying = signal(true, ...ngDevMode ? [{ debugName: "isPlaying" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleVideo() {
    const video = this.showreelVideo?.nativeElement;
    if (!video)
      return;
    if (video.paused) {
      video.play().then(() => this.isPlaying.set(true)).catch(() => this.isPlaying.set(false));
    } else {
      video.pause();
      this.isPlaying.set(false);
    }
  }
  static \u0275fac = function ShowreelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowreelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowreelComponent, selectors: [["app-showreel"]], viewQuery: function ShowreelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.showreelVideo = _t.first);
    }
  }, decls: 27, vars: 3, consts: [["showreelVideo", ""], ["aria-label", "Studio showreel", 1, "showreel"], [1, "showreel-video-wrap"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "poster", "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=85", 3, "play", "pause"], ["src", "https://videos.pexels.com/video-files/3129595/3129595-hd_1920_1080_25fps.mp4", "type", "video/mp4"], ["aria-hidden", "true", 1, "showreel-wash"], [1, "showreel-content", "container"], [1, "showreel-copy", "reveal"], [1, "section-label"], ["type", "button", 1, "showreel-play", 3, "click"], [1, "play-ring"], ["aria-hidden", "true", 1, "showreel-meta"]], template: function ShowreelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 1)(1, "div", 2)(2, "video", 3, 0);
      \u0275\u0275domListener("play", function ShowreelComponent_Template_video_play_2_listener() {
        return ctx.isPlaying.set(true);
      })("pause", function ShowreelComponent_Template_video_pause_2_listener() {
        return ctx.isPlaying.set(false);
      });
      \u0275\u0275domElement(4, "source", 4);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(5, "div", 5);
      \u0275\u0275domElementStart(6, "div", 6)(7, "div", 7)(8, "span", 8);
      \u0275\u0275text(9, "The moving image");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "h2");
      \u0275\u0275text(11, "Moments that");
      \u0275\u0275domElement(12, "br");
      \u0275\u0275domElementStart(13, "em");
      \u0275\u0275text(14, "move with you.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "p");
      \u0275\u0275text(16, "Still photography with the pulse of cinema\u2014made for the milestones you want to relive.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "button", 9);
      \u0275\u0275domListener("click", function ShowreelComponent_Template_button_click_17_listener() {
        return ctx.toggleVideo();
      });
      \u0275\u0275domElementStart(18, "span", 10);
      \u0275\u0275text(19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "span");
      \u0275\u0275text(21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 11)(23, "span");
      \u0275\u0275text(24, "04:12");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "span");
      \u0275\u0275text(26, "Motion studies / 2026");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275attribute("aria-label", ctx.isPlaying() ? "Pause showreel" : "Play showreel");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isPlaying() ? "II" : "\u25B6");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isPlaying() ? "Pause showreel" : "Play showreel");
    }
  }, styles: ["\n.showreel[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: min(74vw, 780px);\n  display: grid;\n  align-items: center;\n  overflow: hidden;\n  isolation: isolate;\n  background: #0b0d20;\n}\n.showreel-video-wrap[_ngcontent-%COMP%], \n.showreel-video-wrap[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.showreel-video-wrap[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  object-fit: cover;\n  filter: saturate(0.72) contrast(1.08) brightness(0.68);\n  transform: scale(1.03);\n}\n.showreel-wash[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(5, 7, 22, 0.9) 0%,\n      rgba(8, 11, 30, 0.5) 48%,\n      rgba(5, 6, 17, 0.18) 100%),\n    linear-gradient(\n      0deg,\n      rgba(5, 6, 18, 0.45),\n      transparent 38%);\n}\n.showreel-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  min-height: min(74vw, 780px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.showreel-copy[_ngcontent-%COMP%] {\n  max-width: 630px;\n}\n.showreel-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 1.25rem 0;\n  font-size: clamp(3rem, 7vw, 6.7rem);\n  line-height: 0.94;\n  letter-spacing: -0.05em;\n  color: #fff;\n}\n.showreel-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: transparent;\n  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.72);\n  font-style: italic;\n}\n.showreel-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 390px;\n  color: rgba(255, 255, 255, 0.67);\n  font-size: clamp(0.9rem, 1.3vw, 1.05rem);\n}\n.showreel-play[_ngcontent-%COMP%] {\n  position: absolute;\n  right: clamp(1.5rem, 8vw, 8rem);\n  top: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.8rem;\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n}\n.play-ring[_ngcontent-%COMP%] {\n  width: 86px;\n  height: 86px;\n  display: grid;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.58);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: var(--color-accent-light);\n  font-size: 1rem;\n  transition: transform 0.4s var(--transition-spring), background 0.3s ease;\n}\n.showreel-play[_ngcontent-%COMP%]:hover   .play-ring[_ngcontent-%COMP%] {\n  transform: scale(1.12) rotate(8deg);\n  background: var(--color-accent);\n  color: #19111b;\n}\n.showreel-meta[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: clamp(1.5rem, 5vw, 6rem);\n  right: clamp(1.5rem, 5vw, 6rem);\n  display: flex;\n  justify-content: space-between;\n  color: rgba(255, 255, 255, 0.53);\n  font-size: 0.6rem;\n  font-weight: 600;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n}\n@media (max-width: 700px) {\n  .showreel[_ngcontent-%COMP%] {\n    min-height: 600px;\n  }\n  .showreel-content[_ngcontent-%COMP%] {\n    min-height: 600px;\n  }\n  .showreel-play[_ngcontent-%COMP%] {\n    position: static;\n    align-self: flex-start;\n    flex-direction: row;\n    margin-top: 2.2rem;\n  }\n  .play-ring[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 52px;\n  }\n  .showreel-meta[_ngcontent-%COMP%] {\n    bottom: 1.25rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .showreel-video-wrap[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=showreel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowreelComponent, [{
    type: Component,
    args: [{ selector: "app-showreel", standalone: true, template: `<section class="showreel" aria-label="Studio showreel">\r
  <div class="showreel-video-wrap">\r
    <video #showreelVideo autoplay muted loop playsinline (play)="isPlaying.set(true)" (pause)="isPlaying.set(false)" poster="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=85">\r
      <source src="https://videos.pexels.com/video-files/3129595/3129595-hd_1920_1080_25fps.mp4" type="video/mp4">\r
    </video>\r
  </div>\r
  <div class="showreel-wash" aria-hidden="true"></div>\r
  <div class="showreel-content container">\r
    <div class="showreel-copy reveal">\r
      <span class="section-label">The moving image</span>\r
      <h2>Moments that<br><em>move with you.</em></h2>\r
      <p>Still photography with the pulse of cinema\u2014made for the milestones you want to relive.</p>\r
    </div>\r
    <button type="button" class="showreel-play" (click)="toggleVideo()" [attr.aria-label]="isPlaying() ? 'Pause showreel' : 'Play showreel'">\r
      <span class="play-ring">{{ isPlaying() ? 'II' : '\u25B6' }}</span>\r
      <span>{{ isPlaying() ? 'Pause showreel' : 'Play showreel' }}</span>\r
    </button>\r
    <div class="showreel-meta" aria-hidden="true"><span>04:12</span><span>Motion studies / 2026</span></div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/features/home/components/showreel/showreel.component.scss */\n.showreel {\n  position: relative;\n  min-height: min(74vw, 780px);\n  display: grid;\n  align-items: center;\n  overflow: hidden;\n  isolation: isolate;\n  background: #0b0d20;\n}\n.showreel-video-wrap,\n.showreel-video-wrap video {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.showreel-video-wrap video {\n  object-fit: cover;\n  filter: saturate(0.72) contrast(1.08) brightness(0.68);\n  transform: scale(1.03);\n}\n.showreel-wash {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(5, 7, 22, 0.9) 0%,\n      rgba(8, 11, 30, 0.5) 48%,\n      rgba(5, 6, 17, 0.18) 100%),\n    linear-gradient(\n      0deg,\n      rgba(5, 6, 18, 0.45),\n      transparent 38%);\n}\n.showreel-content {\n  position: relative;\n  z-index: 2;\n  min-height: min(74vw, 780px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.showreel-copy {\n  max-width: 630px;\n}\n.showreel-copy h2 {\n  margin: 1.25rem 0;\n  font-size: clamp(3rem, 7vw, 6.7rem);\n  line-height: 0.94;\n  letter-spacing: -0.05em;\n  color: #fff;\n}\n.showreel-copy h2 em {\n  color: transparent;\n  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.72);\n  font-style: italic;\n}\n.showreel-copy p {\n  max-width: 390px;\n  color: rgba(255, 255, 255, 0.67);\n  font-size: clamp(0.9rem, 1.3vw, 1.05rem);\n}\n.showreel-play {\n  position: absolute;\n  right: clamp(1.5rem, 8vw, 8rem);\n  top: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.8rem;\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n}\n.play-ring {\n  width: 86px;\n  height: 86px;\n  display: grid;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.58);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: var(--color-accent-light);\n  font-size: 1rem;\n  transition: transform 0.4s var(--transition-spring), background 0.3s ease;\n}\n.showreel-play:hover .play-ring {\n  transform: scale(1.12) rotate(8deg);\n  background: var(--color-accent);\n  color: #19111b;\n}\n.showreel-meta {\n  position: absolute;\n  bottom: 2rem;\n  left: clamp(1.5rem, 5vw, 6rem);\n  right: clamp(1.5rem, 5vw, 6rem);\n  display: flex;\n  justify-content: space-between;\n  color: rgba(255, 255, 255, 0.53);\n  font-size: 0.6rem;\n  font-weight: 600;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n}\n@media (max-width: 700px) {\n  .showreel {\n    min-height: 600px;\n  }\n  .showreel-content {\n    min-height: 600px;\n  }\n  .showreel-play {\n    position: static;\n    align-self: flex-start;\n    flex-direction: row;\n    margin-top: 2.2rem;\n  }\n  .play-ring {\n    width: 52px;\n    height: 52px;\n  }\n  .showreel-meta {\n    bottom: 1.25rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .showreel-video-wrap video {\n    display: none;\n  }\n}\n/*# sourceMappingURL=showreel.component.css.map */\n"] }]
  }], null, { showreelVideo: [{
    type: ViewChild,
    args: ["showreelVideo"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowreelComponent, { className: "ShowreelComponent", filePath: "src/app/features/home/components/showreel/showreel.component.ts", lineNumber: 9 });
})();

// src/app/features/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-hero")(1, "app-marquee")(2, "app-categories")(3, "app-showreel")(4, "app-featured-gallery")(5, "app-process")(6, "app-testimonials");
    }
  }, dependencies: [HeroComponent, CategoriesComponent, MarqueeComponent, FeaturedGalleryComponent, TestimonialsComponent, ProcessComponent, ShowreelComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{
      selector: "app-home",
      standalone: true,
      imports: [HeroComponent, CategoriesComponent, MarqueeComponent, FeaturedGalleryComponent, TestimonialsComponent, ProcessComponent, ShowreelComponent],
      template: `
    <app-hero />
    <app-marquee />
    <app-categories />
    <app-showreel />
    <app-featured-gallery />
    <app-process />
    <app-testimonials />
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 24 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-EG3HJJWY.js.map
