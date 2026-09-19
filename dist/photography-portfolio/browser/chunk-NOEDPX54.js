import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-WRIZPPGJ.js";
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U2WXL5OW.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/contact/contact.component.ts
function ContactComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 20);
    \u0275\u0275text(2, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Message Received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Thank you for reaching out. We'll be in touch within 24 hours.");
    \u0275\u0275elementEnd()();
  }
}
function ContactComponent_Conditional_43_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3);
  }
}
function ContactComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 21, 0);
    \u0275\u0275listener("ngSubmit", function ContactComponent_Conditional_43_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "h2", 22);
    \u0275\u0275text(3, "Send a Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23)(5, "div", 24)(6, "label", 25);
    \u0275\u0275text(7, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_43_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 24)(10, "label", 27);
    \u0275\u0275text(11, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_43_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 24)(14, "label", 29);
    \u0275\u0275text(15, "Service Interested In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_43_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.service, $event) || (ctx_r1.form.service = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 31);
    \u0275\u0275text(18, "Select a service...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, ContactComponent_Conditional_43_For_20_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 24)(22, "label", 33);
    \u0275\u0275text(23, "Your Message *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 34);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_43_Template_textarea_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.message, $event) || (ctx_r1.form.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 35)(26, "span");
    \u0275\u0275text(27, "Send Message");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 36);
    \u0275\u0275element(29, "path", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.service);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.services);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.message);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !f_r4.valid);
  }
}
var ContactComponent = class _ContactComponent {
  submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : (
    /* istanbul ignore next */
    []
  ));
  form = { name: "", email: "", service: "", message: "" };
  services = ["Wedding Photography", "Portrait Session", "Fashion Editorial", "Commercial Photography", "Travel Photography", "Drone Aerial", "Other"];
  onSubmit() {
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 4e3);
    this.form = { name: "", email: "", service: "", message: "" };
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 44, vars: 1, consts: [["f", "ngForm"], [1, "contact-page"], [1, "contact-split"], [1, "contact-info"], [1, "contact-info-inner"], [1, "section-label", "reveal"], [1, "contact-title", "reveal", "reveal-delay-1"], [1, "contact-desc", "reveal", "reveal-delay-2"], [1, "contact-details", "reveal", "reveal-delay-3"], [1, "contact-detail"], [1, "detail-label"], ["href", "mailto:hello@lumierestudio.com", 1, "detail-value"], ["href", "tel:+15550100", 1, "detail-value"], [1, "detail-value"], ["href", "https://wa.me/15550100", "target", "_blank", "rel", "noopener", 1, "whatsapp-btn", "reveal", "reveal-delay-4"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"], [1, "contact-form-wrap"], [1, "form-success"], [1, "contact-form", "reveal"], [1, "success-icon"], [1, "contact-form", "reveal", 3, "ngSubmit"], [1, "form-title"], [1, "form-row"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "name", "name", "placeholder", "Your name", "required", "", 3, "ngModelChange", "ngModel"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "placeholder", "your@email.com", "required", "", 3, "ngModelChange", "ngModel"], ["for", "service"], ["id", "service", "name", "service", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "message"], ["id", "message", "name", "message", "rows", "5", "placeholder", "Tell us about your vision, event date, location...", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary", "form-submit", 3, "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M5 12h14M12 5l7 7-7 7"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "span", 5);
      \u0275\u0275text(5, "Get In Touch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7, "Let's Create");
      \u0275\u0275element(8, "br");
      \u0275\u0275elementStart(9, "em");
      \u0275\u0275text(10, "Something");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "br");
      \u0275\u0275text(12, "Beautiful");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 7);
      \u0275\u0275text(14, "Every great photograph begins with a conversation. Tell us your vision and we'll bring it to life.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "span", 10);
      \u0275\u0275text(18, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 11);
      \u0275\u0275text(20, "hello@lumierestudio.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9)(22, "span", 10);
      \u0275\u0275text(23, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 12);
      \u0275\u0275text(25, "+1 (555) 010-0100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 9)(27, "span", 10);
      \u0275\u0275text(28, "Studio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 13);
      \u0275\u0275text(30, "123 Art District, New York, NY 10001");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 9)(32, "span", 10);
      \u0275\u0275text(33, "Hours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 13);
      \u0275\u0275text(35, "Mon\u2013Sat, 9am\u20137pm EST");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "a", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 15);
      \u0275\u0275element(38, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "Chat on WhatsApp");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 17);
      \u0275\u0275conditionalCreate(42, ContactComponent_Conditional_42_Template, 7, 0, "div", 18)(43, ContactComponent_Conditional_43_Template, 30, 5, "form", 19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(42);
      \u0275\u0275conditional(ctx.submitted() ? 42 : 43);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n.contact-page[_ngcontent-%COMP%] {\n  padding-top: var(--nav-height);\n  min-height: 100vh;\n}\n.contact-split[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: calc(100vh - var(--nav-height));\n}\n@media (max-width: 900px) {\n  .contact-split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.contact-info[_ngcontent-%COMP%] {\n  background: var(--color-bg-2);\n  border-right: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  padding: 5rem clamp(2rem, 6vw, 5rem);\n}\n@media (max-width: 900px) {\n  .contact-info[_ngcontent-%COMP%] {\n    padding: 4rem clamp(1.5rem, 5vw, 3rem);\n  }\n}\n.contact-info-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 480px;\n}\n.contact-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.04em;\n}\n.contact-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.contact-desc[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.contact-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.contact-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-secondary);\n  transition: color 0.3s ease;\n}\na[_ngcontent-%COMP%]:hover   .detail-value[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.whatsapp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1.75rem;\n  background: #25D366;\n  color: white;\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  border-radius: 2px;\n  transition: background 0.3s ease, transform 0.3s ease;\n  width: fit-content;\n}\n.whatsapp-btn[_ngcontent-%COMP%]:hover {\n  background: #1ebe5d;\n  transform: translateY(-2px);\n}\n.contact-form-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5rem clamp(2rem, 6vw, 5rem);\n}\n@media (max-width: 900px) {\n  .contact-form-wrap[_ngcontent-%COMP%] {\n    padding: 4rem clamp(1.5rem, 5vw, 3rem);\n  }\n}\n.contact-form[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-secondary);\n  margin-bottom: 0.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 560px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: var(--color-card);\n  border: 1px solid var(--color-border);\n  color: var(--color-secondary);\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  padding: 0.875rem 1rem;\n  outline: none;\n  transition: border-color 0.3s ease;\n  width: 100%;\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n}\n.form-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 1.1rem;\n  font-size: 0.8rem;\n}\n.form-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.form-success[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n  animation: _ngcontent-%COMP%_successIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes _ngcontent-%COMP%_successIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--color-accent);\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  color: var(--color-secondary);\n}\n.form-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n  max-width: 300px;\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{ selector: "app-contact", standalone: true, imports: [FormsModule], template: `<div class="contact-page">\r
  <div class="contact-split">\r
    <!-- Left: Info -->\r
    <div class="contact-info">\r
      <div class="contact-info-inner">\r
        <span class="section-label reveal">Get In Touch</span>\r
        <h1 class="contact-title reveal reveal-delay-1">Let's Create<br><em>Something</em><br>Beautiful</h1>\r
        <p class="contact-desc reveal reveal-delay-2">Every great photograph begins with a conversation. Tell us your vision and we'll bring it to life.</p>\r
\r
        <div class="contact-details reveal reveal-delay-3">\r
          <div class="contact-detail">\r
            <span class="detail-label">Email</span>\r
            <a href="mailto:hello@lumierestudio.com" class="detail-value">hello&#64;lumierestudio.com</a>\r
          </div>\r
          <div class="contact-detail">\r
            <span class="detail-label">Phone</span>\r
            <a href="tel:+15550100" class="detail-value">+1 (555) 010-0100</a>\r
          </div>\r
          <div class="contact-detail">\r
            <span class="detail-label">Studio</span>\r
            <span class="detail-value">123 Art District, New York, NY 10001</span>\r
          </div>\r
          <div class="contact-detail">\r
            <span class="detail-label">Hours</span>\r
            <span class="detail-value">Mon\u2013Sat, 9am\u20137pm EST</span>\r
          </div>\r
        </div>\r
\r
        <!-- WhatsApp -->\r
        <a href="https://wa.me/15550100" target="_blank" rel="noopener" class="whatsapp-btn reveal reveal-delay-4">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>\r
          <span>Chat on WhatsApp</span>\r
        </a>\r
      </div>\r
    </div>\r
\r
    <!-- Right: Form -->\r
    <div class="contact-form-wrap">\r
      @if (submitted()) {\r
        <div class="form-success">\r
          <div class="success-icon">\u2726</div>\r
          <h3>Message Received</h3>\r
          <p>Thank you for reaching out. We'll be in touch within 24 hours.</p>\r
        </div>\r
      } @else {\r
        <form class="contact-form reveal" (ngSubmit)="onSubmit()" #f="ngForm">\r
          <h2 class="form-title">Send a Message</h2>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label for="name">Full Name *</label>\r
              <input id="name" type="text" [(ngModel)]="form.name" name="name" placeholder="Your name" required>\r
            </div>\r
            <div class="form-group">\r
              <label for="email">Email Address *</label>\r
              <input id="email" type="email" [(ngModel)]="form.email" name="email" placeholder="your@email.com" required>\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="service">Service Interested In</label>\r
            <select id="service" [(ngModel)]="form.service" name="service">\r
              <option value="">Select a service...</option>\r
              @for (s of services; track s) {\r
                <option [value]="s">{{ s }}</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="message">Your Message *</label>\r
            <textarea id="message" [(ngModel)]="form.message" name="message" rows="5" placeholder="Tell us about your vision, event date, location..." required></textarea>\r
          </div>\r
\r
          <button type="submit" class="btn-primary form-submit" [disabled]="!f.valid">\r
            <span>Send Message</span>\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>\r
          </button>\r
        </form>\r
      }\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/contact/contact.component.scss */\n.contact-page {\n  padding-top: var(--nav-height);\n  min-height: 100vh;\n}\n.contact-split {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: calc(100vh - var(--nav-height));\n}\n@media (max-width: 900px) {\n  .contact-split {\n    grid-template-columns: 1fr;\n  }\n}\n.contact-info {\n  background: var(--color-bg-2);\n  border-right: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  padding: 5rem clamp(2rem, 6vw, 5rem);\n}\n@media (max-width: 900px) {\n  .contact-info {\n    padding: 4rem clamp(1.5rem, 5vw, 3rem);\n  }\n}\n.contact-info-inner {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 480px;\n}\n.contact-title {\n  font-family: var(--font-heading);\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.04em;\n}\n.contact-title em {\n  font-style: italic;\n  color: var(--color-accent);\n}\n.contact-desc {\n  font-size: 0.95rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.contact-details {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.contact-detail {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.detail-label {\n  font-family: var(--font-body);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n}\n.detail-value {\n  font-size: 0.9rem;\n  color: var(--color-secondary);\n  transition: color 0.3s ease;\n}\na:hover .detail-value {\n  color: var(--color-accent);\n}\n.whatsapp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1.75rem;\n  background: #25D366;\n  color: white;\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  border-radius: 2px;\n  transition: background 0.3s ease, transform 0.3s ease;\n  width: fit-content;\n}\n.whatsapp-btn:hover {\n  background: #1ebe5d;\n  transform: translateY(-2px);\n}\n.contact-form-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5rem clamp(2rem, 6vw, 5rem);\n}\n@media (max-width: 900px) {\n  .contact-form-wrap {\n    padding: 4rem clamp(1.5rem, 5vw, 3rem);\n  }\n}\n.contact-form {\n  width: 100%;\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-title {\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-secondary);\n  margin-bottom: 0.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 560px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group label {\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  background: var(--color-card);\n  border: 1px solid var(--color-border);\n  color: var(--color-secondary);\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  padding: 0.875rem 1rem;\n  outline: none;\n  transition: border-color 0.3s ease;\n  width: 100%;\n  resize: vertical;\n}\n.form-group input::placeholder,\n.form-group select::placeholder,\n.form-group textarea::placeholder {\n  color: var(--color-text-muted);\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  border-color: var(--color-accent);\n}\n.form-group input option,\n.form-group select option,\n.form-group textarea option {\n  background: var(--color-bg);\n}\n.form-submit {\n  width: 100%;\n  justify-content: center;\n  padding: 1.1rem;\n  font-size: 0.8rem;\n}\n.form-submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.form-success {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n  animation: successIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes successIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.success-icon {\n  font-size: 3rem;\n  color: var(--color-accent);\n  animation: spin 2s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-success h3 {\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  color: var(--color-secondary);\n}\n.form-success p {\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n  max-width: 300px;\n}\n/*# sourceMappingURL=contact.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/features/contact/contact.component.ts", lineNumber: 11 });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-NOEDPX54.js.map
