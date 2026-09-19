import {
  DataService
} from "./chunk-X42UMOT4.js";
import {
  CursorService
} from "./chunk-ZLAS45UH.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U2WXL5OW.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/blog/blog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BlogComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "article", 8);
    \u0275\u0275domListener("mouseenter", function BlogComponent_For_14_Template_article_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cursor.setHover(true, "Read"));
    })("mouseleave", function BlogComponent_For_14_Template_article_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cursor.setHover(false));
    });
    \u0275\u0275domElementStart(1, "div", 9);
    \u0275\u0275domElement(2, "img", 10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 11)(4, "div", 12)(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 14);
    \u0275\u0275text(8, "\xB7");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "time");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span", 14);
    \u0275\u0275text(12, "\xB7");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "h2", 15);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "p", 16);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "a", 17)(20, "span");
    \u0275\u0275text(21, "Read Article");
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(22, "svg", 18);
    \u0275\u0275domElement(23, "path", 19);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const post_r3 = ctx.$implicit;
    const \u0275$index_23_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_23_r4 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", post_r3.image, \u0275\u0275sanitizeUrl)("alt", post_r3.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(post_r3.category);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("datetime", post_r3.date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatDate(post_r3.date));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", post_r3.readTime, " min read");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r3.excerpt);
  }
}
var BlogComponent = class _BlogComponent {
  data = inject(DataService);
  cursor = inject(CursorService);
  formatDate(d) {
    return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  static \u0275fac = function BlogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog"]], decls: 15, vars: 0, consts: [[1, "blog-page"], [1, "blog-header"], [1, "container"], [1, "section-label", "reveal"], [1, "blog-title", "reveal", "reveal-delay-1"], [1, "blog-sub", "reveal", "reveal-delay-2"], [1, "blog-grid", "container"], [1, "blog-card", "reveal", 3, "class"], [1, "blog-card", "reveal", 3, "mouseenter", "mouseleave"], [1, "blog-img-wrap", "img-mask"], ["loading", "lazy", "width", "800", "height", "500", 3, "src", "alt"], [1, "blog-content"], [1, "blog-meta"], [1, "blog-cat"], [1, "blog-sep"], [1, "blog-card-title"], [1, "blog-excerpt"], ["href", "#", 1, "blog-read-more"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M5 12h14M12 5l7 7-7 7"]], template: function BlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Journal");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h1", 4);
      \u0275\u0275text(6, "Stories &");
      \u0275\u0275domElement(7, "br");
      \u0275\u0275domElementStart(8, "em");
      \u0275\u0275text(9, "Insights");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "p", 5);
      \u0275\u0275text(11, "Behind the lens \u2014 thoughts on craft, light, and the art of seeing.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(12, "div", 6);
      \u0275\u0275repeaterCreate(13, BlogComponent_For_14_Template, 24, 10, "article", 7, _forTrack0);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.data.blogPosts);
    }
  }, styles: ["\n.blog-page[_ngcontent-%COMP%] {\n  padding-top: var(--nav-height);\n  min-height: 100vh;\n}\n.blog-header[_ngcontent-%COMP%] {\n  padding: 5rem 0 4rem;\n}\n.blog-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(3.5rem, 10vw, 8rem);\n  font-weight: 800;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n  margin: 1rem 0;\n}\n.blog-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.blog-sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  max-width: 480px;\n}\n.blog-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  padding-bottom: 6rem;\n}\n@media (max-width: 1024px) {\n  .blog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .blog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.blog-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  cursor: none;\n}\n.blog-card[_ngcontent-%COMP%]:hover   .blog-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.blog-card[_ngcontent-%COMP%]:hover   .blog-read-more[_ngcontent-%COMP%] {\n  gap: 0.9rem;\n}\n.blog-img-wrap[_ngcontent-%COMP%] {\n  overflow: hidden;\n  aspect-ratio: 16/10;\n}\n.blog-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.04);\n  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.blog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.blog-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.05em;\n}\n.blog-cat[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.blog-sep[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.blog-card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--color-secondary);\n  line-height: 1.25;\n  letter-spacing: -0.02em;\n  transition: color 0.3s ease;\n}\n.blog-card[_ngcontent-%COMP%]:hover   .blog-card-title[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.blog-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.blog-read-more[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  margin-top: 0.5rem;\n  transition: gap 0.3s ease;\n}\n/*# sourceMappingURL=blog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogComponent, [{
    type: Component,
    args: [{ selector: "app-blog", standalone: true, imports: [], template: `<div class="blog-page">\r
  <div class="blog-header">\r
    <div class="container">\r
      <span class="section-label reveal">Journal</span>\r
      <h1 class="blog-title reveal reveal-delay-1">Stories &<br><em>Insights</em></h1>\r
      <p class="blog-sub reveal reveal-delay-2">Behind the lens \u2014 thoughts on craft, light, and the art of seeing.</p>\r
    </div>\r
  </div>\r
\r
  <div class="blog-grid container">\r
    @for (post of data.blogPosts; track post.id; let i = $index) {\r
      <article class="blog-card reveal" [class]="'reveal-delay-' + (i + 1)"\r
               (mouseenter)="cursor.setHover(true, 'Read')" (mouseleave)="cursor.setHover(false)">\r
        <div class="blog-img-wrap img-mask">\r
          <img [src]="post.image" [alt]="post.title" loading="lazy" width="800" height="500">\r
        </div>\r
        <div class="blog-content">\r
          <div class="blog-meta">\r
            <span class="blog-cat">{{ post.category }}</span>\r
            <span class="blog-sep">\xB7</span>\r
            <time [attr.datetime]="post.date">{{ formatDate(post.date) }}</time>\r
            <span class="blog-sep">\xB7</span>\r
            <span>{{ post.readTime }} min read</span>\r
          </div>\r
          <h2 class="blog-card-title">{{ post.title }}</h2>\r
          <p class="blog-excerpt">{{ post.excerpt }}</p>\r
          <a href="#" class="blog-read-more">\r
            <span>Read Article</span>\r
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
          </a>\r
        </div>\r
      </article>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/blog/blog.component.scss */\n.blog-page {\n  padding-top: var(--nav-height);\n  min-height: 100vh;\n}\n.blog-header {\n  padding: 5rem 0 4rem;\n}\n.blog-title {\n  font-family: var(--font-heading);\n  font-size: clamp(3.5rem, 10vw, 8rem);\n  font-weight: 800;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n  margin: 1rem 0;\n}\n.blog-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.blog-sub {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  max-width: 480px;\n}\n.blog-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  padding-bottom: 6rem;\n}\n@media (max-width: 1024px) {\n  .blog-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .blog-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.blog-card {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  cursor: none;\n}\n.blog-card:hover .blog-img-wrap img {\n  transform: scale(1.06);\n}\n.blog-card:hover .blog-read-more {\n  gap: 0.9rem;\n}\n.blog-img-wrap {\n  overflow: hidden;\n  aspect-ratio: 16/10;\n}\n.blog-img-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.04);\n  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.blog-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.blog-meta {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.05em;\n}\n.blog-cat {\n  color: var(--color-accent);\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.blog-sep {\n  opacity: 0.4;\n}\n.blog-card-title {\n  font-family: var(--font-heading);\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--color-secondary);\n  line-height: 1.25;\n  letter-spacing: -0.02em;\n  transition: color 0.3s ease;\n}\n.blog-card:hover .blog-card-title {\n  color: var(--color-accent);\n}\n.blog-excerpt {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.blog-read-more {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  margin-top: 0.5rem;\n  transition: gap 0.3s ease;\n}\n/*# sourceMappingURL=blog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src/app/features/blog/blog.component.ts", lineNumber: 12 });
})();
export {
  BlogComponent
};
//# sourceMappingURL=chunk-SWSOICF7.js.map
