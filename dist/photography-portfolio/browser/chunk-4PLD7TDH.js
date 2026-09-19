import {
  AnimationService
} from "./chunk-A45UTPAL.js";
import {
  RouterLink
} from "./chunk-RBKBNWPP.js";
import "./chunk-WWIHBCUC.js";
import {
  CommonModule,
  isPlatformBrowser
} from "./chunk-URCQYAQL.js";
import {
  Component,
  Injectable,
  PLATFORM_ID,
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
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/features/pr-communication/pr-data.service.ts
var PR_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "Exhibitions", label: "Exhibitions" },
  { id: "Conferences", label: "Conferences" },
  { id: "Events", label: "Events" },
  { id: "Industry Connect", label: "Industry Connect" },
  { id: "Corporate", label: "Corporate" },
  { id: "Announcements", label: "Announcements" }
];
var PR_STATS = [
  { num: "17", suffix: "+", label: "Years of Excellence" },
  { num: "50", suffix: "+", label: "Industry Events" },
  { num: "100", suffix: "+", label: "Client Engagements" },
  { num: "20", suffix: "+", label: "Industry Verticals" }
];
var PR_EVENTS = [
  {
    id: 1,
    slug: "evoke-expo",
    title: "EVOKE Expo",
    category: "Exhibitions",
    categoryLabel: "Exhibition \u2022 Event",
    date: "March 2026",
    year: "2026",
    location: "Ahmedabad, India",
    industry: "Multi-Industry",
    shortDescription: "Connecting with industry leaders, innovators and partners at EVOKE Expo \u2014 showcasing ideas, technology and solutions that create meaningful business impact.",
    description: "EVOKE Expo brought together the brightest minds across industries under one roof. Sync Bridge participated as a key exhibitor, showcasing our full-service capabilities in branding, digital marketing, advertising and web development. The event provided an unparalleled platform to connect with potential clients, industry peers and technology partners, reinforcing our commitment to innovation and growth.",
    highlights: [
      "Showcased integrated brand and digital marketing solutions",
      "Connected with 200+ industry professionals and decision-makers",
      "Demonstrated live campaign analytics and performance dashboards",
      "Participated in panel discussions on the future of digital advertising",
      "Established new partnerships with technology and media companies"
    ],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85",
    accentImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80"
    ]
  },
  {
    id: 2,
    slug: "industry-connect-summit",
    title: "Industry Connect Summit",
    category: "Conferences",
    categoryLabel: "Conference \u2022 Networking",
    date: "January 2026",
    year: "2026",
    location: "Surat, India",
    industry: "Marketing & Advertising",
    shortDescription: "A premier gathering of marketing and advertising professionals exploring the intersection of creativity, technology and business strategy.",
    description: "The Industry Connect Summit brought together marketing leaders, brand managers and agency professionals for a day of insightful conversations, workshops and networking. Sync Bridge led a keynote session on integrated marketing strategies and the evolving role of digital in brand building.",
    highlights: [
      "Keynote presentation on integrated marketing in 2026",
      "Workshop on performance marketing and ROI measurement",
      "Networking with 150+ marketing professionals",
      "Panel discussion on brand building in the digital age"
    ],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=85",
    accentImage: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80"
    ]
  },
  {
    id: 3,
    slug: "technology-showcase-2025",
    title: "Technology Showcase 2025",
    category: "Events",
    categoryLabel: "Event \u2022 Technology",
    date: "November 2025",
    year: "2025",
    location: "Vadodara, India",
    industry: "Technology",
    shortDescription: "Exploring the latest in marketing technology, automation and AI-driven solutions that are reshaping how brands communicate with their audiences.",
    description: "Technology Showcase 2025 was a landmark event for the marketing technology ecosystem. Sync Bridge demonstrated our proprietary campaign management tools and AI-assisted content strategies, drawing significant interest from enterprise clients and startups alike.",
    highlights: [
      "Demonstrated AI-assisted content creation workflows",
      "Showcased campaign automation and analytics tools",
      "Connected with 80+ technology and marketing professionals",
      "Explored partnerships with MarTech solution providers"
    ],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80"
    ]
  },
  {
    id: 4,
    slug: "partner-meet-2025",
    title: "Partner Meet 2025",
    category: "Corporate",
    categoryLabel: "Corporate \u2022 Partnership",
    date: "September 2025",
    year: "2025",
    location: "Ahmedabad, India",
    industry: "Multi-Industry",
    shortDescription: "An exclusive gathering of Sync Bridge's strategic partners, celebrating shared successes and charting the course for future collaborations.",
    description: "The annual Partner Meet brought together our most valued strategic partners for an evening of recognition, collaboration and forward planning. The event celebrated joint achievements and laid the groundwork for exciting new initiatives in the coming year.",
    highlights: [
      "Recognised top-performing partner agencies and vendors",
      "Announced new co-marketing initiatives for 2026",
      "Facilitated cross-industry networking and collaboration",
      "Presented the Sync Bridge Partner Excellence Awards"
    ],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80"
    ]
  },
  {
    id: 5,
    slug: "innovation-summit-2025",
    title: "Innovation Summit 2025",
    category: "Conferences",
    categoryLabel: "Conference \u2022 Innovation",
    date: "July 2025",
    year: "2025",
    location: "Rajkot, India",
    industry: "Business & Innovation",
    shortDescription: "A forward-looking conference exploring innovation in business, marketing and brand strategy for the next decade.",
    description: "Innovation Summit 2025 gathered entrepreneurs, business leaders and creative professionals to explore the future of business and brand communication. Sync Bridge contributed thought leadership on creative strategy and the role of storytelling in modern brand building.",
    highlights: [
      "Thought leadership session on brand storytelling",
      "Workshop on creative strategy for emerging markets",
      "Networking with 120+ business leaders and entrepreneurs",
      "Explored innovation in advertising and media"
    ],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80"
    ]
  },
  {
    id: 6,
    slug: "brand-india-expo",
    title: "Brand India Expo",
    category: "Exhibitions",
    categoryLabel: "Exhibition \u2022 Branding",
    date: "April 2025",
    year: "2025",
    location: "Ahmedabad, India",
    industry: "Branding & Design",
    shortDescription: "Celebrating the best of Indian branding, design and creative communication at one of the country's premier brand exhibitions.",
    description: "Brand India Expo showcased the finest examples of Indian brand identity, packaging design and creative communication. Sync Bridge exhibited a curated portfolio of our most impactful branding projects, demonstrating our expertise in creating brands that resonate across cultures and markets.",
    highlights: [
      "Exhibited 15+ award-worthy branding projects",
      "Participated in the Brand Excellence Awards jury",
      "Conducted a live brand identity workshop",
      "Connected with 200+ brand managers and designers"
    ],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80"
    ]
  }
];
var PrDataService = class _PrDataService {
  events = PR_EVENTS;
  categories = PR_CATEGORIES;
  stats = PR_STATS;
  getAll() {
    return this.events;
  }
  getFeatured() {
    return this.events.filter((e) => e.featured);
  }
  getByCategory(cat) {
    if (cat === "all")
      return this.events;
    return this.events.filter((e) => e.category === cat);
  }
  getBySlug(slug) {
    return this.events.find((e) => e.slug === slug);
  }
  static \u0275fac = function PrDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PrDataService, factory: _PrDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrDataService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/pr-communication/pr-communication.component.ts
var _c0 = (a0) => ["/pr-communication", a0];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
function PrCommunicationComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 45)(1, "div", 46);
    \u0275\u0275element(2, "img", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50)(9, "span", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 52);
    \u0275\u0275element(11, "rect", 53)(12, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 52);
    \u0275\u0275element(16, "path", 55)(17, "circle", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "p", 57);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 58);
    \u0275\u0275text(22, " Explore Event ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 11);
    \u0275\u0275element(24, "path", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const \u0275$index_82_r2 = ctx.$index;
    \u0275\u0275classProp("pr-feature-row--reverse", \u0275$index_82_r2 % 2 !== 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", event_r1.coverImage, \u0275\u0275sanitizeUrl)("alt", event_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r1.categoryLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r1.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", event_r1.date, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", event_r1.location, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r1.shortDescription);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, event_r1.slug));
  }
}
function PrCommunicationComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", stat_r3.num, "", stat_r3.suffix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r3.label);
  }
}
function PrCommunicationComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function PrCommunicationComponent_For_65_Template_button_click_0_listener() {
      const cat_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setCategory(cat_r5.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r5.activeCategory() === cat_r5.id);
    \u0275\u0275attribute("aria-selected", ctx_r5.activeCategory() === cat_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r5.label, " ");
  }
}
function PrCommunicationComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 62)(1, "a", 63);
    \u0275\u0275element(2, "img", 64);
    \u0275\u0275elementStart(3, "span", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 66)(6, "div", 67)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 68);
    \u0275\u0275text(10, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "h3", 69)(14, "a", 70);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 71);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 72);
    \u0275\u0275text(19, " Explore Event ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 73);
    \u0275\u0275element(21, "path", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const \u0275$index_165_r8 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_165_r8 % 3 + 1));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, event_r7.slug));
    \u0275\u0275attribute("aria-label", "View " + event_r7.title);
    \u0275\u0275advance();
    \u0275\u0275property("src", event_r7.coverImage, \u0275\u0275sanitizeUrl)("alt", event_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r7.category);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r7.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r7.year);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, event_r7.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r7.shortDescription);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, event_r7.slug));
    \u0275\u0275attribute("aria-label", "Explore " + event_r7.title);
  }
}
function PrCommunicationComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "p");
    \u0275\u0275text(2, "No events found in this category.");
    \u0275\u0275elementEnd()();
  }
}
var PrCommunicationComponent = class _PrCommunicationComponent {
  platformId = inject(PLATFORM_ID);
  anim = inject(AnimationService);
  prData = inject(PrDataService);
  categories = PR_CATEGORIES;
  activeCategory = signal("all", ...ngDevMode ? [{ debugName: "activeCategory" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredEvents = signal([], ...ngDevMode ? [{ debugName: "filteredEvents" }] : (
    /* istanbul ignore next */
    []
  ));
  featuredEvents = [];
  // Lightbox
  lightboxOpen = signal(false, ...ngDevMode ? [{ debugName: "lightboxOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  lightboxImages = [];
  lightboxIndex = signal(0, ...ngDevMode ? [{ debugName: "lightboxIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  // Counter animation
  counters = signal([], ...ngDevMode ? [{ debugName: "counters" }] : (
    /* istanbul ignore next */
    []
  ));
  countersDone = false;
  observer;
  ngOnInit() {
    this.featuredEvents = this.prData.getFeatured();
    this.filteredEvents.set(this.prData.getAll());
    this.counters.set(this.prData.stats.map((s) => __spreadProps(__spreadValues({}, s), { num: "0" })));
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.anim.observeAll();
        this.initCounterObserver();
      }, 100);
    }
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  setCategory(id) {
    this.activeCategory.set(id);
    this.filteredEvents.set(this.prData.getByCategory(id));
    setTimeout(() => this.anim.observeAll(), 50);
  }
  openLightbox(images, index) {
    this.lightboxImages = images;
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    if (isPlatformBrowser(this.platformId))
      document.body.style.overflow = "hidden";
  }
  closeLightbox() {
    this.lightboxOpen.set(false);
    if (isPlatformBrowser(this.platformId))
      document.body.style.overflow = "";
  }
  prevLightbox() {
    this.lightboxIndex.update((i) => (i - 1 + this.lightboxImages.length) % this.lightboxImages.length);
  }
  nextLightbox() {
    this.lightboxIndex.update((i) => (i + 1) % this.lightboxImages.length);
  }
  onKeydown(e) {
    if (e.key === "Escape")
      this.closeLightbox();
    if (e.key === "ArrowLeft")
      this.prevLightbox();
    if (e.key === "ArrowRight")
      this.nextLightbox();
  }
  initCounterObserver() {
    const statsEl = document.querySelector(".pr-stats-section");
    if (!statsEl)
      return;
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.countersDone) {
        this.countersDone = true;
        this.animateCounters();
      }
    }, { threshold: 0.3 });
    this.observer.observe(statsEl);
  }
  animateCounters() {
    const targets = this.prData.stats;
    const duration = 1800;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      this.counters.set(targets.map((s) => __spreadProps(__spreadValues({}, s), {
        num: Math.floor(ease * parseInt(s.num)).toString()
      })));
      if (progress < 1)
        requestAnimationFrame(tick);
      else
        this.counters.set(targets.map((s) => __spreadValues({}, s)));
    };
    requestAnimationFrame(tick);
  }
  static \u0275fac = function PrCommunicationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrCommunicationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrCommunicationComponent, selectors: [["app-pr-communication"]], decls: 88, vars: 1, consts: [["aria-label", "PR Communication hero", 1, "pr-hero"], [1, "container"], [1, "pr-hero-inner"], [1, "pr-hero-content"], [1, "reveal"], [1, "tz-eyebrow"], [1, "pr-hero-title", "reveal", "reveal-delay-1"], [1, "pr-hero-accent"], [1, "pr-hero-desc", "reveal", "reveal-delay-2"], [1, "pr-hero-actions", "reveal", "reveal-delay-3"], ["routerLink", "/contact", 1, "tz-btn-lime"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], ["routerLink", "/about", 1, "tz-btn-outline-dark"], ["aria-hidden", "true", 1, "pr-hero-visual", "reveal", "reveal-delay-2"], [1, "pr-hero-img-main", "img-mask"], ["src", "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", "alt", "EVOKE Expo event", "loading", "eager", "width", "600", "height", "700"], [1, "pr-hero-img-accent", "img-mask"], ["src", "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&q=80", "alt", "Industry conference", "loading", "eager", "width", "300", "height", "220"], [1, "pr-hero-badge"], [1, "pr-hero-badge-num"], [1, "pr-hero-badge-text"], ["aria-hidden", "true", 1, "pr-hero-dot-grid"], ["aria-hidden", "true", 1, "pr-hero-circle"], ["aria-label", "Featured moments", 1, "pr-moments"], [1, "pr-section-head", "reveal"], [1, "tz-eyebrow", "tz-eyebrow-dark"], [1, "tz-section-title", "reveal", "reveal-delay-1"], [1, "pr-section-sub", "reveal", "reveal-delay-2"], [1, "pr-feature-row", "reveal", 3, "pr-feature-row--reverse"], ["aria-label", "Impact statistics", 1, "pr-stats-section"], [1, "pr-stats-grid"], [1, "pr-stat-item"], ["aria-label", "Latest PR and events", 1, "pr-events-section"], ["role", "tablist", "aria-label", "Filter events by category", 1, "pr-filter", "reveal", "reveal-delay-2"], ["role", "tab", 1, "pr-filter-btn", 3, "active"], [1, "pr-events-grid"], [1, "pr-event-card", "reveal", 3, "class"], [1, "pr-empty-state"], ["aria-label", "Call to action", 1, "pr-cta-section"], [1, "pr-cta-inner", "reveal"], [1, "pr-cta-text"], [1, "pr-cta-accent"], [1, "pr-cta-actions"], ["href", "tel:+919377697676", 1, "tz-btn-outline-white"], [1, "pr-feature-row", "reveal"], [1, "pr-feature-img"], ["loading", "lazy", "width", "700", "height", "480", 3, "src", "alt"], [1, "pr-feature-content"], [1, "pr-feature-title"], [1, "pr-feature-meta"], [1, "pr-meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["d", "M16 2v4M8 2v4M3 10h18"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "pr-feature-desc"], [1, "pr-feature-cta", 3, "routerLink"], [1, "pr-stat-num"], [1, "pr-stat-label"], ["role", "tab", 1, "pr-filter-btn", 3, "click"], [1, "pr-event-card", "reveal"], [1, "pr-card-img-wrap", 3, "routerLink"], ["loading", "lazy", "width", "600", "height", "380", 3, "src", "alt"], [1, "pr-card-cat-badge"], [1, "pr-card-body"], [1, "pr-card-meta"], [1, "pr-card-meta-sep"], [1, "pr-card-title"], [3, "routerLink"], [1, "pr-card-desc"], [1, "pr-card-cta", 3, "routerLink"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"]], template: function PrCommunicationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "span", 5);
      \u0275\u0275text(7, "PR \u2022 Events \u2022 Communication");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "h1", 6);
      \u0275\u0275text(9, " Connecting Ideas,");
      \u0275\u0275element(10, "br");
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "Creating Impact.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p", 8);
      \u0275\u0275text(14, " Explore the events, exhibitions, conferences and industry engagements where Sync Bridge connects with people, ideas and opportunities that shape the future. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "a", 10);
      \u0275\u0275text(17, " Start a Project ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 11);
      \u0275\u0275element(19, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "a", 13);
      \u0275\u0275text(21, "About Us");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 14)(23, "div", 15);
      \u0275\u0275element(24, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17);
      \u0275\u0275element(26, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 19)(28, "span", 20);
      \u0275\u0275text(29, "50+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 21);
      \u0275\u0275text(31, "Industry");
      \u0275\u0275element(32, "br");
      \u0275\u0275text(33, "Events");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(34, "div", 22)(35, "div", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "section", 24)(37, "div", 1)(38, "div", 25)(39, "span", 26);
      \u0275\u0275text(40, "Moments Worth Sharing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h2", 27);
      \u0275\u0275text(42, "Where Our Work");
      \u0275\u0275element(43, "br");
      \u0275\u0275text(44, "Meets the World.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 28);
      \u0275\u0275text(46, "From industry exhibitions to meaningful conversations, these are the moments that represent our journey, collaboration and growth.");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(47, PrCommunicationComponent_For_48_Template, 25, 12, "article", 29, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "section", 30)(50, "div", 1)(51, "div", 31);
      \u0275\u0275repeaterCreate(52, PrCommunicationComponent_For_53_Template, 5, 3, "div", 32, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "section", 33)(55, "div", 1)(56, "div", 25)(57, "span", 26);
      \u0275\u0275text(58, "Latest PR & Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h2", 27);
      \u0275\u0275text(60, "Featured Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p", 28);
      \u0275\u0275text(62, "Moments that connect us with people, ideas and industries.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 34);
      \u0275\u0275repeaterCreate(64, PrCommunicationComponent_For_65_Template, 2, 4, "button", 35, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 36);
      \u0275\u0275repeaterCreate(67, PrCommunicationComponent_For_68_Template, 22, 20, "article", 37, _forTrack0);
      \u0275\u0275conditionalCreate(69, PrCommunicationComponent_Conditional_69_Template, 3, 0, "div", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "section", 39)(71, "div", 1)(72, "div", 40)(73, "div", 41)(74, "h2");
      \u0275\u0275text(75, "Let's Create Something");
      \u0275\u0275element(76, "br");
      \u0275\u0275elementStart(77, "span", 42);
      \u0275\u0275text(78, "Worth Talking About.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "p");
      \u0275\u0275text(80, "Have a project, partnership or idea you'd like to explore? Let's start a conversation.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 43)(82, "a", 10);
      \u0275\u0275text(83, " Start a Project ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(84, "svg", 11);
      \u0275\u0275element(85, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(86, "a", 44);
      \u0275\u0275text(87, "Talk to Us");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(47);
      \u0275\u0275repeater(ctx.featuredEvents);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.counters());
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.filteredEvents());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filteredEvents().length === 0 ? 69 : -1);
    }
  }, dependencies: [CommonModule, RouterLink], styles: ['\n.pr-hero[_ngcontent-%COMP%] {\n  background: var(--tz-white);\n  padding-top: calc(var(--nav-height) + var(--main-nav-height) + 4rem);\n  padding-bottom: 5rem;\n  overflow: hidden;\n  position: relative;\n}\n.pr-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50%;\n  height: 100%;\n  background: var(--tz-off-white);\n  border-radius: 0 0 0 80px;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .pr-hero[_ngcontent-%COMP%] {\n    padding-top: calc(var(--main-nav-height) + 3rem);\n    padding-bottom: 3rem;\n  }\n  .pr-hero[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n.pr-hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .pr-hero-inner[_ngcontent-%COMP%] {\n    gap: 3rem;\n  }\n}\n@media (max-width: 768px) {\n  .pr-hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.pr-hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n}\n.pr-hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2.75rem, 6vw, 5rem);\n  font-weight: 800;\n  line-height: 1.05;\n  letter-spacing: -0.03em;\n  color: var(--tz-charcoal);\n}\n.pr-hero-accent[_ngcontent-%COMP%] {\n  color: var(--tz-dark-green);\n  position: relative;\n}\n.pr-hero-accent[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--tz-lime);\n  border-radius: 2px;\n}\n.pr-hero-desc[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--tz-text-muted);\n  line-height: 1.75;\n  max-width: 480px;\n}\n.pr-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.pr-hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  height: 520px;\n}\n@media (max-width: 768px) {\n  .pr-hero-visual[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n.pr-hero-img-main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 75%;\n  height: 100%;\n  border-radius: 20px;\n  box-shadow: var(--tz-shadow-lg);\n}\n.pr-hero-img-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .pr-hero-img-main[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.pr-hero-img-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2rem;\n  left: 0;\n  width: 48%;\n  height: 200px;\n  border-radius: 16px;\n  box-shadow: var(--tz-shadow-lg);\n  border: 4px solid var(--tz-white);\n  z-index: 2;\n}\n.pr-hero-img-accent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .pr-hero-img-accent[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.pr-hero-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2rem;\n  left: 0;\n  z-index: 3;\n  background: var(--tz-dark-green);\n  color: var(--tz-white);\n  border-radius: 16px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: var(--tz-shadow);\n  border: 3px solid var(--tz-white);\n}\n@media (max-width: 768px) {\n  .pr-hero-badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.pr-hero-badge-num[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: var(--tz-lime);\n  line-height: 1;\n}\n.pr-hero-badge-text[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 0.25rem;\n}\n.pr-hero-dot-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  right: -1rem;\n  width: 80px;\n  height: 80px;\n  background-image:\n    radial-gradient(\n      circle,\n      var(--tz-lime) 1.5px,\n      transparent 1.5px);\n  background-size: 12px 12px;\n  opacity: 0.5;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .pr-hero-dot-grid[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.pr-hero-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -1.5rem;\n  right: -1.5rem;\n  width: 80px;\n  height: 80px;\n  border: 3px solid var(--tz-lime);\n  border-radius: 50%;\n  opacity: 0.3;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .pr-hero-circle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.pr-section-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3.5rem;\n  max-width: 640px;\n}\n.pr-section-sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--tz-text-muted);\n  line-height: 1.75;\n}\n.pr-moments[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n  background: var(--tz-white);\n}\n.pr-feature-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n  margin-bottom: 5rem;\n}\n.pr-feature-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.pr-feature-row--reverse[_ngcontent-%COMP%]   .pr-feature-img[_ngcontent-%COMP%] {\n  order: 2;\n}\n.pr-feature-row--reverse[_ngcontent-%COMP%]   .pr-feature-content[_ngcontent-%COMP%] {\n  order: 1;\n}\n@media (max-width: 900px) {\n  .pr-feature-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .pr-feature-row--reverse[_ngcontent-%COMP%]   .pr-feature-img[_ngcontent-%COMP%], \n   .pr-feature-row--reverse[_ngcontent-%COMP%]   .pr-feature-content[_ngcontent-%COMP%] {\n    order: unset;\n  }\n}\n.pr-feature-img[_ngcontent-%COMP%] {\n  height: 420px;\n  border-radius: 20px;\n  box-shadow: var(--tz-shadow-lg);\n  overflow: hidden;\n}\n.pr-feature-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s var(--transition-smooth);\n}\n.pr-feature-img[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n@media (max-width: 900px) {\n  .pr-feature-img[_ngcontent-%COMP%] {\n    height: 280px;\n  }\n}\n.pr-feature-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.pr-feature-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(1.75rem, 3.5vw, 2.5rem);\n  font-weight: 800;\n  color: var(--tz-charcoal);\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.pr-feature-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n}\n.pr-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: var(--tz-text-muted);\n  font-weight: 500;\n}\n.pr-meta-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--tz-dark-green);\n  flex-shrink: 0;\n}\n.pr-feature-desc[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--tz-text-muted);\n  line-height: 1.8;\n}\n.pr-feature-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--tz-dark-green);\n  transition: gap 0.2s ease, color 0.2s ease;\n}\n.pr-feature-cta[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.pr-feature-cta[_ngcontent-%COMP%]:hover {\n  color: var(--tz-lime-dark);\n  gap: 0.85rem;\n}\n.pr-feature-cta[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.pr-stats-section[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green);\n  padding: 4rem 0;\n}\n.pr-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .pr-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.pr-stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.pr-stat-num[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2rem, 5vw, 3.5rem);\n  font-weight: 800;\n  color: var(--tz-lime);\n  line-height: 1;\n}\n.pr-stat-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.pr-events-section[_ngcontent-%COMP%] {\n  padding: 7rem 0;\n  background: var(--tz-off-white);\n}\n.pr-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-bottom: 3rem;\n}\n@media (max-width: 600px) {\n  .pr-filter[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n    padding-bottom: 0.5rem;\n    scrollbar-width: none;\n  }\n  .pr-filter[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n}\n.pr-filter-btn[_ngcontent-%COMP%] {\n  padding: 0.45rem 1.1rem;\n  border-radius: 100px;\n  border: 1.5px solid var(--tz-border);\n  background: var(--tz-white);\n  color: var(--tz-text-muted);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.pr-filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--tz-dark-green);\n  color: var(--tz-dark-green);\n}\n.pr-filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green);\n  border-color: var(--tz-dark-green);\n  color: var(--tz-lime);\n}\n.pr-events-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.75rem;\n}\n@media (max-width: 1024px) {\n  .pr-events-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .pr-events-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pr-event-card[_ngcontent-%COMP%] {\n  background: var(--tz-white);\n  border: 1px solid var(--tz-border);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.pr-event-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--tz-shadow-lg);\n}\n.pr-event-card[_ngcontent-%COMP%]:hover   .pr-card-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.pr-event-card[_ngcontent-%COMP%]:hover   .pr-card-cta[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.pr-card-img-wrap[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  height: 220px;\n  border-radius: 0;\n  overflow: hidden;\n}\n.pr-card-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.pr-card-cat-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: var(--tz-dark-green);\n  color: var(--tz-lime);\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  padding: 0.3rem 0.75rem;\n  border-radius: 100px;\n}\n.pr-card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.pr-card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.75rem;\n  color: var(--tz-text-muted);\n  font-weight: 500;\n}\n.pr-card-meta-sep[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.pr-card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--tz-charcoal);\n  line-height: 1.3;\n}\n.pr-card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  transition: color 0.2s ease;\n}\n.pr-card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--tz-dark-green);\n}\n.pr-card-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--tz-text-muted);\n  line-height: 1.7;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.pr-card-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--tz-dark-green);\n  margin-top: 0.25rem;\n  transition: gap 0.2s ease, color 0.2s ease;\n}\n.pr-card-cta[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.pr-card-cta[_ngcontent-%COMP%]:hover {\n  color: var(--tz-lime-dark);\n  gap: 0.65rem;\n}\n.pr-empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 4rem;\n  color: var(--tz-text-muted);\n  font-size: 0.95rem;\n}\n.pr-cta-section[_ngcontent-%COMP%] {\n  background: var(--tz-dark-green);\n  padding: 6rem 0;\n  position: relative;\n  overflow: hidden;\n}\n.pr-cta-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -40%;\n  right: -10%;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 230, 61, 0.07) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.pr-cta-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.pr-cta-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(1.75rem, 4vw, 3rem);\n  font-weight: 800;\n  color: var(--tz-white);\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n  margin-bottom: 0.75rem;\n}\n.pr-cta-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.6);\n  max-width: 480px;\n  line-height: 1.7;\n}\n.pr-cta-accent[_ngcontent-%COMP%] {\n  color: var(--tz-lime);\n}\n.pr-cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=pr-communication.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrCommunicationComponent, [{
    type: Component,
    args: [{ selector: "app-pr-communication", standalone: true, imports: [CommonModule, RouterLink], template: `<main>
  <!-- \u2500\u2500 HERO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="pr-hero" aria-label="PR Communication hero">
    <div class="container">
      <div class="pr-hero-inner">
        <div class="pr-hero-content">
          <div class="reveal">
            <span class="tz-eyebrow">PR &bull; Events &bull; Communication</span>
          </div>
          <h1 class="pr-hero-title reveal reveal-delay-1">
            Connecting Ideas,<br>
            <span class="pr-hero-accent">Creating Impact.</span>
          </h1>
          <p class="pr-hero-desc reveal reveal-delay-2">
            Explore the events, exhibitions, conferences and industry engagements where Sync Bridge connects with people, ideas and opportunities that shape the future.
          </p>
          <div class="pr-hero-actions reveal reveal-delay-3">
            <a routerLink="/contact" class="tz-btn-lime">
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a routerLink="/about" class="tz-btn-outline-dark">About Us</a>
          </div>
        </div>

        <div class="pr-hero-visual reveal reveal-delay-2" aria-hidden="true">
          <div class="pr-hero-img-main img-mask">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                 alt="EVOKE Expo event" loading="eager" width="600" height="700">
          </div>
          <div class="pr-hero-img-accent img-mask">
            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&q=80"
                 alt="Industry conference" loading="eager" width="300" height="220">
          </div>
          <div class="pr-hero-badge">
            <span class="pr-hero-badge-num">50+</span>
            <span class="pr-hero-badge-text">Industry<br>Events</span>
          </div>
          <div class="pr-hero-dot-grid" aria-hidden="true"></div>
          <div class="pr-hero-circle" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- \u2500\u2500 MOMENTS WORTH SHARING \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="pr-moments" aria-label="Featured moments">
    <div class="container">
      <div class="pr-section-head reveal">
        <span class="tz-eyebrow tz-eyebrow-dark">Moments Worth Sharing</span>
        <h2 class="tz-section-title reveal reveal-delay-1">Where Our Work<br>Meets the World.</h2>
        <p class="pr-section-sub reveal reveal-delay-2">From industry exhibitions to meaningful conversations, these are the moments that represent our journey, collaboration and growth.</p>
      </div>

      @for (event of featuredEvents; track event.id; let i = $index) {
        <article class="pr-feature-row reveal" [class.pr-feature-row--reverse]="i % 2 !== 0">
          <div class="pr-feature-img">
            <img [src]="event.coverImage" [alt]="event.title" loading="lazy" width="700" height="480">
          </div>
          <div class="pr-feature-content">
            <span class="tz-eyebrow tz-eyebrow-dark">{{ event.categoryLabel }}</span>
            <h3 class="pr-feature-title">{{ event.title }}</h3>
            <div class="pr-feature-meta">
              <span class="pr-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                {{ event.date }}
              </span>
              <span class="pr-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ event.location }}
              </span>
            </div>
            <p class="pr-feature-desc">{{ event.shortDescription }}</p>
            <a [routerLink]="['/pr-communication', event.slug]" class="pr-feature-cta">
              Explore Event
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>
      }
    </div>
  </section>

  <!-- \u2500\u2500 STATS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="pr-stats-section" aria-label="Impact statistics">
    <div class="container">
      <div class="pr-stats-grid">
        @for (stat of counters(); track stat.label) {
          <div class="pr-stat-item">
            <span class="pr-stat-num">{{ stat.num }}{{ stat.suffix }}</span>
            <span class="pr-stat-label">{{ stat.label }}</span>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- \u2500\u2500 LATEST PR & EVENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="pr-events-section" aria-label="Latest PR and events">
    <div class="container">
      <div class="pr-section-head reveal">
        <span class="tz-eyebrow tz-eyebrow-dark">Latest PR &amp; Events</span>
        <h2 class="tz-section-title reveal reveal-delay-1">Featured Events</h2>
        <p class="pr-section-sub reveal reveal-delay-2">Moments that connect us with people, ideas and industries.</p>
      </div>

      <div class="pr-filter reveal reveal-delay-2" role="tablist" aria-label="Filter events by category">
        @for (cat of categories; track cat.id) {
          <button class="pr-filter-btn" [class.active]="activeCategory() === cat.id"
                  (click)="setCategory(cat.id)" role="tab"
                  [attr.aria-selected]="activeCategory() === cat.id">
            {{ cat.label }}
          </button>
        }
      </div>

      <div class="pr-events-grid">
        @for (event of filteredEvents(); track event.id; let i = $index) {
          <article class="pr-event-card reveal" [class]="'reveal-delay-' + (i % 3 + 1)">
            <a [routerLink]="['/pr-communication', event.slug]" class="pr-card-img-wrap" [attr.aria-label]="'View ' + event.title">
              <img [src]="event.coverImage" [alt]="event.title" loading="lazy" width="600" height="380">
              <span class="pr-card-cat-badge">{{ event.category }}</span>
            </a>
            <div class="pr-card-body">
              <div class="pr-card-meta">
                <span>{{ event.location }}</span>
                <span class="pr-card-meta-sep">\u2022</span>
                <span>{{ event.year }}</span>
              </div>
              <h3 class="pr-card-title">
                <a [routerLink]="['/pr-communication', event.slug]">{{ event.title }}</a>
              </h3>
              <p class="pr-card-desc">{{ event.shortDescription }}</p>
              <a [routerLink]="['/pr-communication', event.slug]" class="pr-card-cta" [attr.aria-label]="'Explore ' + event.title">
                Explore Event
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        }
        @if (filteredEvents().length === 0) {
          <div class="pr-empty-state">
            <p>No events found in this category.</p>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- \u2500\u2500 CTA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="pr-cta-section" aria-label="Call to action">
    <div class="container">
      <div class="pr-cta-inner reveal">
        <div class="pr-cta-text">
          <h2>Let's Create Something<br><span class="pr-cta-accent">Worth Talking About.</span></h2>
          <p>Have a project, partnership or idea you'd like to explore? Let's start a conversation.</p>
        </div>
        <div class="pr-cta-actions">
          <a routerLink="/contact" class="tz-btn-lime">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="tel:+919377697676" class="tz-btn-outline-white">Talk to Us</a>
        </div>
      </div>
    </div>
  </section>
</main>
`, styles: ['/* src/app/features/pr-communication/pr-communication.component.scss */\n.pr-hero {\n  background: var(--tz-white);\n  padding-top: calc(var(--nav-height) + var(--main-nav-height) + 4rem);\n  padding-bottom: 5rem;\n  overflow: hidden;\n  position: relative;\n}\n.pr-hero::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50%;\n  height: 100%;\n  background: var(--tz-off-white);\n  border-radius: 0 0 0 80px;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .pr-hero {\n    padding-top: calc(var(--main-nav-height) + 3rem);\n    padding-bottom: 3rem;\n  }\n  .pr-hero::before {\n    display: none;\n  }\n}\n.pr-hero-inner {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .pr-hero-inner {\n    gap: 3rem;\n  }\n}\n@media (max-width: 768px) {\n  .pr-hero-inner {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.pr-hero-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n}\n.pr-hero-title {\n  font-family: var(--font-heading);\n  font-size: clamp(2.75rem, 6vw, 5rem);\n  font-weight: 800;\n  line-height: 1.05;\n  letter-spacing: -0.03em;\n  color: var(--tz-charcoal);\n}\n.pr-hero-accent {\n  color: var(--tz-dark-green);\n  position: relative;\n}\n.pr-hero-accent::after {\n  content: "";\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--tz-lime);\n  border-radius: 2px;\n}\n.pr-hero-desc {\n  font-size: 1.05rem;\n  color: var(--tz-text-muted);\n  line-height: 1.75;\n  max-width: 480px;\n}\n.pr-hero-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.pr-hero-visual {\n  position: relative;\n  height: 520px;\n}\n@media (max-width: 768px) {\n  .pr-hero-visual {\n    height: 300px;\n  }\n}\n.pr-hero-img-main {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 75%;\n  height: 100%;\n  border-radius: 20px;\n  box-shadow: var(--tz-shadow-lg);\n}\n.pr-hero-img-main img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .pr-hero-img-main {\n    width: 80%;\n  }\n}\n.pr-hero-img-accent {\n  position: absolute;\n  bottom: -2rem;\n  left: 0;\n  width: 48%;\n  height: 200px;\n  border-radius: 16px;\n  box-shadow: var(--tz-shadow-lg);\n  border: 4px solid var(--tz-white);\n  z-index: 2;\n}\n.pr-hero-img-accent img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .pr-hero-img-accent {\n    display: none;\n  }\n}\n.pr-hero-badge {\n  position: absolute;\n  top: 2rem;\n  left: 0;\n  z-index: 3;\n  background: var(--tz-dark-green);\n  color: var(--tz-white);\n  border-radius: 16px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: var(--tz-shadow);\n  border: 3px solid var(--tz-white);\n}\n@media (max-width: 768px) {\n  .pr-hero-badge {\n    display: none;\n  }\n}\n.pr-hero-badge-num {\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: var(--tz-lime);\n  line-height: 1;\n}\n.pr-hero-badge-text {\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 0.25rem;\n}\n.pr-hero-dot-grid {\n  position: absolute;\n  bottom: 1rem;\n  right: -1rem;\n  width: 80px;\n  height: 80px;\n  background-image:\n    radial-gradient(\n      circle,\n      var(--tz-lime) 1.5px,\n      transparent 1.5px);\n  background-size: 12px 12px;\n  opacity: 0.5;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .pr-hero-dot-grid {\n    display: none;\n  }\n}\n.pr-hero-circle {\n  position: absolute;\n  top: -1.5rem;\n  right: -1.5rem;\n  width: 80px;\n  height: 80px;\n  border: 3px solid var(--tz-lime);\n  border-radius: 50%;\n  opacity: 0.3;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .pr-hero-circle {\n    display: none;\n  }\n}\n.pr-section-head {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3.5rem;\n  max-width: 640px;\n}\n.pr-section-sub {\n  font-size: 1rem;\n  color: var(--tz-text-muted);\n  line-height: 1.75;\n}\n.pr-moments {\n  padding: 7rem 0;\n  background: var(--tz-white);\n}\n.pr-feature-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n  margin-bottom: 5rem;\n}\n.pr-feature-row:last-child {\n  margin-bottom: 0;\n}\n.pr-feature-row--reverse .pr-feature-img {\n  order: 2;\n}\n.pr-feature-row--reverse .pr-feature-content {\n  order: 1;\n}\n@media (max-width: 900px) {\n  .pr-feature-row {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .pr-feature-row--reverse .pr-feature-img,\n  .pr-feature-row--reverse .pr-feature-content {\n    order: unset;\n  }\n}\n.pr-feature-img {\n  height: 420px;\n  border-radius: 20px;\n  box-shadow: var(--tz-shadow-lg);\n  overflow: hidden;\n}\n.pr-feature-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s var(--transition-smooth);\n}\n.pr-feature-img:hover img {\n  transform: scale(1.04);\n}\n@media (max-width: 900px) {\n  .pr-feature-img {\n    height: 280px;\n  }\n}\n.pr-feature-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.pr-feature-title {\n  font-family: var(--font-heading);\n  font-size: clamp(1.75rem, 3.5vw, 2.5rem);\n  font-weight: 800;\n  color: var(--tz-charcoal);\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.pr-feature-meta {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n}\n.pr-meta-item {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: var(--tz-text-muted);\n  font-weight: 500;\n}\n.pr-meta-item svg {\n  color: var(--tz-dark-green);\n  flex-shrink: 0;\n}\n.pr-feature-desc {\n  font-size: 1rem;\n  color: var(--tz-text-muted);\n  line-height: 1.8;\n}\n.pr-feature-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--tz-dark-green);\n  transition: gap 0.2s ease, color 0.2s ease;\n}\n.pr-feature-cta svg {\n  transition: transform 0.2s ease;\n}\n.pr-feature-cta:hover {\n  color: var(--tz-lime-dark);\n  gap: 0.85rem;\n}\n.pr-feature-cta:hover svg {\n  transform: translateX(4px);\n}\n.pr-stats-section {\n  background: var(--tz-dark-green);\n  padding: 4rem 0;\n}\n.pr-stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .pr-stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.pr-stat-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.pr-stat-num {\n  font-family: var(--font-heading);\n  font-size: clamp(2rem, 5vw, 3.5rem);\n  font-weight: 800;\n  color: var(--tz-lime);\n  line-height: 1;\n}\n.pr-stat-label {\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.pr-events-section {\n  padding: 7rem 0;\n  background: var(--tz-off-white);\n}\n.pr-filter {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-bottom: 3rem;\n}\n@media (max-width: 600px) {\n  .pr-filter {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n    padding-bottom: 0.5rem;\n    scrollbar-width: none;\n  }\n  .pr-filter::-webkit-scrollbar {\n    display: none;\n  }\n}\n.pr-filter-btn {\n  padding: 0.45rem 1.1rem;\n  border-radius: 100px;\n  border: 1.5px solid var(--tz-border);\n  background: var(--tz-white);\n  color: var(--tz-text-muted);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.pr-filter-btn:hover {\n  border-color: var(--tz-dark-green);\n  color: var(--tz-dark-green);\n}\n.pr-filter-btn.active {\n  background: var(--tz-dark-green);\n  border-color: var(--tz-dark-green);\n  color: var(--tz-lime);\n}\n.pr-events-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.75rem;\n}\n@media (max-width: 1024px) {\n  .pr-events-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .pr-events-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.pr-event-card {\n  background: var(--tz-white);\n  border: 1px solid var(--tz-border);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.pr-event-card:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--tz-shadow-lg);\n}\n.pr-event-card:hover .pr-card-img-wrap img {\n  transform: scale(1.05);\n}\n.pr-event-card:hover .pr-card-cta svg {\n  transform: translateX(4px);\n}\n.pr-card-img-wrap {\n  display: block;\n  position: relative;\n  height: 220px;\n  border-radius: 0;\n  overflow: hidden;\n}\n.pr-card-img-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.pr-card-cat-badge {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: var(--tz-dark-green);\n  color: var(--tz-lime);\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  padding: 0.3rem 0.75rem;\n  border-radius: 100px;\n}\n.pr-card-body {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.pr-card-meta {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.75rem;\n  color: var(--tz-text-muted);\n  font-weight: 500;\n}\n.pr-card-meta-sep {\n  opacity: 0.4;\n}\n.pr-card-title {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--tz-charcoal);\n  line-height: 1.3;\n}\n.pr-card-title a {\n  color: inherit;\n  transition: color 0.2s ease;\n}\n.pr-card-title a:hover {\n  color: var(--tz-dark-green);\n}\n.pr-card-desc {\n  font-size: 0.85rem;\n  color: var(--tz-text-muted);\n  line-height: 1.7;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.pr-card-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--tz-dark-green);\n  margin-top: 0.25rem;\n  transition: gap 0.2s ease, color 0.2s ease;\n}\n.pr-card-cta svg {\n  transition: transform 0.2s ease;\n}\n.pr-card-cta:hover {\n  color: var(--tz-lime-dark);\n  gap: 0.65rem;\n}\n.pr-empty-state {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 4rem;\n  color: var(--tz-text-muted);\n  font-size: 0.95rem;\n}\n.pr-cta-section {\n  background: var(--tz-dark-green);\n  padding: 6rem 0;\n  position: relative;\n  overflow: hidden;\n}\n.pr-cta-section::before {\n  content: "";\n  position: absolute;\n  top: -40%;\n  right: -10%;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 230, 61, 0.07) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.pr-cta-inner {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.pr-cta-text h2 {\n  font-family: var(--font-heading);\n  font-size: clamp(1.75rem, 4vw, 3rem);\n  font-weight: 800;\n  color: var(--tz-white);\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n  margin-bottom: 0.75rem;\n}\n.pr-cta-text p {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.6);\n  max-width: 480px;\n  line-height: 1.7;\n}\n.pr-cta-accent {\n  color: var(--tz-lime);\n}\n.pr-cta-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=pr-communication.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrCommunicationComponent, { className: "PrCommunicationComponent", filePath: "src/app/features/pr-communication/pr-communication.component.ts", lineNumber: 14 });
})();
export {
  PrCommunicationComponent
};
//# sourceMappingURL=chunk-4PLD7TDH.js.map
