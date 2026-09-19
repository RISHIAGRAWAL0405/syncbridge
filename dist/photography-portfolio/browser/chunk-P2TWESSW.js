import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DSYNY4LS.js";
import {
  ProjectService
} from "./chunk-3XKYANS7.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-RBKBNWPP.js";
import "./chunk-5BILWADD.js";
import "./chunk-WWIHBCUC.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-URCQYAQL.js";
import {
  ChangeDetectorRef,
  Component,
  finalize,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CQ3CZWR7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/admin/projects/project-profile/project-profile.component.ts
function ProjectProfileComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function ProjectProfileComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ProjectProfileComponent_div_0_ng_container_15_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.profile.project.description);
  }
}
function ProjectProfileComponent_div_0_ng_container_15_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r1.profile.client.company_name);
  }
}
function ProjectProfileComponent_div_0_ng_container_15_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 75);
    \u0275\u0275element(2, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "div", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 46);
    \u0275\u0275text(7, "Overdue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile.summary.overdue_tasks);
  }
}
function ProjectProfileComponent_div_0_ng_container_15_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.profile.summary.overdue_tasks, " overdue");
  }
}
function ProjectProfileComponent_div_0_ng_container_15_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No tasks yet");
    \u0275\u0275elementEnd()();
  }
}
function ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 119);
  }
}
function ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatDate(step_r5.start_date), " \u2014 ", ctx_r1.formatDate(step_r5.end_date), " ");
  }
}
function ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const step_r5 = \u0275\u0275nextContext().$implicit;
      const task_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.updateStepStatus(step_r5.task_workflow_step_id, "IN_PROGRESS");
      return \u0275\u0275resetView(ctx_r1.editingTask = task_r4);
    });
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275text(2, " Start ");
    \u0275\u0275elementEnd();
  }
}
function ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 123);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const step_r5 = \u0275\u0275nextContext().$implicit;
      const task_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.updateStepStatus(step_r5.task_workflow_step_id, "COMPLETED");
      return \u0275\u0275resetView(ctx_r1.editingTask = task_r4);
    });
    \u0275\u0275element(1, "i", 124);
    \u0275\u0275text(2, " Mark Complete ");
    \u0275\u0275elementEnd();
  }
}
function ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107)(2, "div", 108);
    \u0275\u0275element(3, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_div_4_Template, 1, 0, "div", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 110)(6, "div", 111)(7, "span", 112);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 113);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 114);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_div_13_Template, 3, 2, "div", 115);
    \u0275\u0275elementStart(14, "div", 116);
    \u0275\u0275template(15, ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_button_15_Template, 3, 0, "button", 117)(16, ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_button_16_Template, 3, 0, "button", 118);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const last_r8 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("last", last_r8);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("dot-" + ctx_r1.getStatusKey(step_r5.status));
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-lg", step_r5.status === "COMPLETED")("bi-play-fill", step_r5.status === "IN_PROGRESS")("bi-dash-lg", step_r5.status === "SKIPPED")("bi-clock", step_r5.status === "NOT_STARTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(step_r5.display_order);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.step_name);
    \u0275\u0275advance();
    \u0275\u0275classMap("pill-" + ctx_r1.getStatusKey(step_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r5.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r5.start_date || step_r5.end_date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", step_r5.status === "NOT_STARTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r5.status === "IN_PROGRESS");
  }
}
function ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103);
    \u0275\u0275text(2, "Workflow Steps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 104);
    \u0275\u0275template(4, ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_div_4_Template, 17, 21, "div", 105);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", task_r4.workflow_steps);
  }
}
function ProjectProfileComponent_div_0_ng_container_15_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_ng_container_15_div_97_Template_div_click_1_listener() {
      const task_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleTaskExpand(task_r4.task_id));
    });
    \u0275\u0275elementStart(2, "div", 83);
    \u0275\u0275element(3, "div", 84);
    \u0275\u0275elementStart(4, "div")(5, "div", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 86)(8, "span", 87);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 88);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 89)(13, "div", 90)(14, "span", 91);
    \u0275\u0275text(15, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 92);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 93)(19, "div", 94);
    \u0275\u0275element(20, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 96);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "span", 97);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 98);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_ng_container_15_div_97_Template_button_click_25_listener($event) {
      const task_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.openEditTask(task_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(26, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "i", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, ProjectProfileComponent_div_0_ng_container_15_div_97_div_28_Template, 5, 1, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("expanded", ctx_r1.expandedTaskId === task_r4.task_id);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("dot-" + ctx_r1.getStatusKey(task_r4.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r4.task_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r4.task_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r4.workflow_template_name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(task_r4.current_stage || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("fill-" + ctx_r1.getStatusKey(task_r4.status));
    \u0275\u0275styleProp("width", task_r4.progress.percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", task_r4.progress.percentage, "%");
    \u0275\u0275advance();
    \u0275\u0275classMap("pill-" + ctx_r1.getStatusKey(task_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r4.status);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bi-chevron-down", ctx_r1.expandedTaskId !== task_r4.task_id)("bi-chevron-up", ctx_r1.expandedTaskId === task_r4.task_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expandedTaskId === task_r4.task_id);
  }
}
function ProjectProfileComponent_div_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "div", 19)(3, "div", 20);
    \u0275\u0275element(4, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProjectProfileComponent_div_0_ng_container_15_p_10_Template, 2, 1, "p", 24);
    \u0275\u0275elementStart(11, "div", 25)(12, "span", 26);
    \u0275\u0275element(13, "i", 27);
    \u0275\u0275text(14);
    \u0275\u0275template(15, ProjectProfileComponent_div_0_ng_container_15_span_15_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 26);
    \u0275\u0275element(17, "i", 29);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 26);
    \u0275\u0275element(20, "i", 30);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 31)(23, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 33);
    \u0275\u0275element(25, "circle", 34)(26, "circle", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 36)(28, "span", 37);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 38);
    \u0275\u0275text(31, "Done");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "span", 39);
    \u0275\u0275element(33, "i", 7);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 40)(36, "div", 41)(37, "div", 42);
    \u0275\u0275element(38, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 44)(40, "div", 45);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 46);
    \u0275\u0275text(43, "Total Tasks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 41)(45, "div", 47);
    \u0275\u0275element(46, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 44)(48, "div", 49);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 46);
    \u0275\u0275text(51, "Completed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 41)(53, "div", 50);
    \u0275\u0275element(54, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 44)(56, "div", 52);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 46);
    \u0275\u0275text(59, "In Progress");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 41)(61, "div", 53);
    \u0275\u0275element(62, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 44)(64, "div", 45);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 46);
    \u0275\u0275text(67, "Not Started");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(68, ProjectProfileComponent_div_0_ng_container_15_div_68_Template, 8, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 56)(70, "div", 57)(71, "span", 58);
    \u0275\u0275text(72, "Overall Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 59);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 60);
    \u0275\u0275element(76, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 62)(78, "span");
    \u0275\u0275element(79, "span", 63);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span");
    \u0275\u0275element(82, "span", 64);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span");
    \u0275\u0275element(85, "span", 65);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(87, ProjectProfileComponent_div_0_ng_container_15_span_87_Template, 3, 1, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 66)(89, "div", 67)(90, "h2", 68);
    \u0275\u0275element(91, "i", 43);
    \u0275\u0275text(92, " Tasks ");
    \u0275\u0275elementStart(93, "span", 69);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(95, ProjectProfileComponent_div_0_ng_container_15_div_95_Template, 4, 0, "div", 70);
    \u0275\u0275elementStart(96, "div", 71);
    \u0275\u0275template(97, ProjectProfileComponent_div_0_ng_container_15_div_97_Template, 29, 21, "div", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.profile.project.project_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profile.project.project_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.profile.project.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.profile.client.client_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.profile.client.company_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatDate(ctx_r1.profile.project.start_date), " \u2014 ", ctx_r1.formatDate(ctx_r1.profile.project.end_date), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDurationDays(ctx_r1.profile.project.start_date, ctx_r1.profile.project.end_date), " ");
    \u0275\u0275advance(5);
    \u0275\u0275attribute("stroke", ctx_r1.profile.summary.overall_progress >= 75 ? "#22c55e" : ctx_r1.profile.summary.overall_progress >= 50 ? "#4f6ef7" : ctx_r1.profile.summary.overall_progress >= 25 ? "#f59e0b" : "#ef4444")("stroke-dasharray", 213.6)("stroke-dashoffset", 213.6 - 213.6 * ctx_r1.profile.summary.overall_progress / 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.profile.summary.overall_progress, "%");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.profile.project.is_active);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r1.profile.project.is_active)("bi-x-circle-fill", !ctx_r1.profile.project.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.profile.project.is_active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.profile.summary.total_tasks);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.profile.summary.completed_tasks);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.profile.summary.in_progress_tasks);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.profile.summary.not_started_tasks);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.profile.summary.overdue_tasks > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.profile.summary.overall_progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.profile.summary.overall_progress, "%")("background", ctx_r1.profile.summary.overall_progress >= 75 ? "#22c55e" : ctx_r1.profile.summary.overall_progress >= 50 ? "#4f6ef7" : ctx_r1.profile.summary.overall_progress >= 25 ? "#f59e0b" : "#ef4444");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.profile.summary.completed_tasks, " completed");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.profile.summary.in_progress_tasks, " in progress");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.profile.summary.not_started_tasks, " not started");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.profile.summary.overdue_tasks > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.profile.tasks.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.profile.tasks.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.profile.tasks);
  }
}
function ProjectProfileComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showEditModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function ProjectProfileComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127)(2, "h5");
    \u0275\u0275text(3, "Edit Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 128);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_div_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showEditModal = false);
    });
    \u0275\u0275element(5, "i", 129);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 130)(7, "form", 131);
    \u0275\u0275listener("ngSubmit", function ProjectProfileComponent_div_0_div_17_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveProjectEdit());
    });
    \u0275\u0275elementStart(8, "div", 132)(9, "div", 133)(10, "label");
    \u0275\u0275text(11, "Project Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 135)(14, "label");
    \u0275\u0275text(15, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 136);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 137)(18, "label");
    \u0275\u0275text(19, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "textarea", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 132)(22, "div", 139)(23, "label");
    \u0275\u0275text(24, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 139)(27, "label");
    \u0275\u0275text(28, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 141);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 142);
    \u0275\u0275element(31, "input", 143);
    \u0275\u0275elementStart(32, "label", 144);
    \u0275\u0275text(33, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 145)(35, "button", 146);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_div_17_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showEditModal = false);
    });
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 147);
    \u0275\u0275text(38, "Save Changes");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
  }
}
function ProjectProfileComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTaskModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function ProjectProfileComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127)(2, "h5");
    \u0275\u0275text(3, "Edit Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 128);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTaskModal = false);
    });
    \u0275\u0275element(5, "i", 129);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 130)(7, "form", 131);
    \u0275\u0275listener("ngSubmit", function ProjectProfileComponent_div_0_div_19_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveTask());
    });
    \u0275\u0275elementStart(8, "div", 132)(9, "div", 133)(10, "label");
    \u0275\u0275text(11, "Task Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 135)(14, "label");
    \u0275\u0275text(15, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 149);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 137)(18, "label");
    \u0275\u0275text(19, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "textarea", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 132)(22, "div", 139)(23, "label");
    \u0275\u0275text(24, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 139)(27, "label");
    \u0275\u0275text(28, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 141);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 145)(31, "button", 146);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_div_19_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTaskModal = false);
    });
    \u0275\u0275text(32, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 147);
    \u0275\u0275text(34, "Save Changes");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.taskForm);
  }
}
function ProjectProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(3, "i", 4);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "button", 6);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleProjectStatus());
    });
    \u0275\u0275element(8, "i", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function ProjectProfileComponent_div_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditProject());
    });
    \u0275\u0275element(11, "i", 9);
    \u0275\u0275text(12, " Edit Project ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, ProjectProfileComponent_div_0_div_13_Template, 2, 0, "div", 10)(14, ProjectProfileComponent_div_0_div_14_Template, 2, 1, "div", 11)(15, ProjectProfileComponent_div_0_ng_container_15_Template, 98, 36, "ng-container", 12)(16, ProjectProfileComponent_div_0_div_16_Template, 1, 0, "div", 13)(17, ProjectProfileComponent_div_0_div_17_Template, 39, 1, "div", 14)(18, ProjectProfileComponent_div_0_div_18_Template, 1, 0, "div", 13)(19, ProjectProfileComponent_div_0_div_19_Template, 35, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("bi-toggle-on", ctx_r1.profile == null ? null : ctx_r1.profile.project == null ? null : ctx_r1.profile.project.is_active)("bi-toggle-off", !(ctx_r1.profile == null ? null : ctx_r1.profile.project == null ? null : ctx_r1.profile.project.is_active));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.profile == null ? null : ctx_r1.profile.project == null ? null : ctx_r1.profile.project.is_active) ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.profile && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showEditModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showEditModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showTaskModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showTaskModal);
  }
}
var ProjectProfileComponent = class _ProjectProfileComponent {
  cdr = inject(ChangeDetectorRef);
  route = inject(ActivatedRoute);
  router = inject(Router);
  projectService = inject(ProjectService);
  fb = inject(FormBuilder);
  projectId = "";
  profile = null;
  loading = true;
  error = "";
  showEditModal = false;
  showTaskModal = false;
  editingTask = null;
  expandedTaskId = null;
  taskForm;
  editForm;
  statusColors = {
    "COMPLETED": "success",
    "IN_PROGRESS": "warning",
    "NOT_STARTED": "secondary",
    "SKIPPED": "info"
  };
  constructor() {
    this.taskForm = this.fb.group({
      task_name: ["", Validators.required],
      task_code: [""],
      description: [""],
      start_date: [""],
      end_date: [""]
    });
    this.editForm = this.fb.group({
      project_name: ["", Validators.required],
      project_code: [""],
      description: [""],
      start_date: [""],
      end_date: [""],
      is_active: [true]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.projectId = params["projectId"];
      this.loadProfile();
    });
  }
  goBack() {
    this.router.navigate(["/admin/projects"]);
  }
  loadProfile() {
    this.loading = true;
    this.error = "";
    this.projectService.getProjectProfile(this.projectId).pipe(finalize(() => {
      this.loading = false;
      this.notifyView();
    })).subscribe({
      next: (res) => {
        if (res.data) {
          this.profile = res.data;
          if (this.profile?.project) {
            this.editForm.patchValue(__spreadProps(__spreadValues({}, this.profile.project), {
              start_date: this.profile.project.start_date ? this.profile.project.start_date.substring(0, 10) : "",
              end_date: this.profile.project.end_date ? this.profile.project.end_date.substring(0, 10) : ""
            }));
          }
        }
      },
      error: (err) => {
        this.error = err?.error?.errorMessage || "Failed to load project profile";
      }
    });
  }
  getDurationDays(start, end) {
    if (!start || !end)
      return "\u2014";
    const sd = new Date(start);
    const ed = new Date(end);
    const days = Math.round((ed.getTime() - sd.getTime()) / (1e3 * 60 * 60 * 24));
    return `${days} days`;
  }
  openEditProject() {
    this.showEditModal = true;
  }
  saveProjectEdit() {
    if (this.editForm.invalid)
      return;
    this.projectService.updateProject(this.projectId, this.editForm.value).subscribe({
      next: () => {
        this.showEditModal = false;
        this.loadProfile();
      }
    });
  }
  toggleProjectStatus() {
    if (!this.profile)
      return;
    this.projectService.setStatus(this.projectId, !this.profile.project.is_active).subscribe({
      next: () => this.loadProfile()
    });
  }
  toggleTaskExpand(taskId) {
    this.expandedTaskId = this.expandedTaskId === taskId ? null : taskId;
  }
  openEditTask(task) {
    this.editingTask = task;
    this.taskForm.patchValue(__spreadProps(__spreadValues({}, task), {
      start_date: task.start_date ? task.start_date.substring(0, 10) : "",
      end_date: task.end_date ? task.end_date.substring(0, 10) : ""
    }));
    this.showTaskModal = true;
  }
  saveTask() {
    if (this.editingTask && this.taskForm.valid) {
      this.showTaskModal = false;
      this.loadProfile();
    }
  }
  updateStepStatus(stepId, newStatus) {
    if (!this.editingTask)
      return;
    this.loadProfile();
  }
  getStatusKey(status) {
    return (status || "not_started").toLowerCase().replace(/ /g, "_");
  }
  getProgressBarClass(percentage) {
    if (percentage >= 75)
      return "success";
    if (percentage >= 50)
      return "info";
    if (percentage >= 25)
      return "warning";
    return "danger";
  }
  getStatusBadgeClass(status) {
    return this.statusColors[status] || "secondary";
  }
  formatDate(date) {
    if (!date)
      return "\u2014";
    return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  get f() {
    return this.editForm.controls;
  }
  get tf() {
    return this.taskForm.controls;
  }
  notifyView() {
    this.cdr.markForCheck();
  }
  static \u0275fac = function ProjectProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectProfileComponent, selectors: [["app-project-profile"]], decls: 1, vars: 1, consts: [["class", "pp-root", 4, "ngIf"], [1, "pp-root"], [1, "pp-topbar"], [1, "pp-back-btn", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "pp-topbar-actions"], [1, "pp-btn", "pp-btn-ghost", 3, "click"], [1, "bi"], [1, "pp-btn", "pp-btn-primary", 3, "click"], [1, "bi", "bi-pencil-square"], ["class", "pp-loading", 4, "ngIf"], ["class", "alert alert-danger mx-0", 4, "ngIf"], [4, "ngIf"], ["class", "pp-modal-overlay", 3, "click", 4, "ngIf"], ["class", "pp-modal", 4, "ngIf"], [1, "pp-loading"], [1, "spinner-border", "text-primary"], [1, "alert", "alert-danger", "mx-0"], [1, "pp-hero"], [1, "pp-hero-left"], [1, "pp-project-icon"], [1, "bi", "bi-kanban-fill"], [1, "pp-project-code"], [1, "pp-project-name"], ["class", "pp-project-desc", 4, "ngIf"], [1, "pp-hero-meta"], [1, "pp-meta-chip"], [1, "bi", "bi-person-badge"], ["class", "pp-meta-sub", 4, "ngIf"], [1, "bi", "bi-calendar3"], [1, "bi", "bi-clock"], [1, "pp-hero-right"], [1, "pp-progress-ring-wrap"], ["viewBox", "0 0 80 80", 1, "pp-ring"], ["cx", "40", "cy", "40", "r", "34", "fill", "none", "stroke", "#e8ecf0", "stroke-width", "7"], ["cx", "40", "cy", "40", "r", "34", "fill", "none", "stroke-width", "7", "stroke-linecap", "round", "transform", "rotate(-90 40 40)"], [1, "pp-ring-label"], [1, "pp-ring-pct"], [1, "pp-ring-sub"], [1, "pp-status-badge"], [1, "pp-stats"], [1, "pp-stat-card"], [1, "pp-stat-icon", 2, "background", "#eff6ff", "color", "#4f6ef7"], [1, "bi", "bi-list-task"], [1, "pp-stat-body"], [1, "pp-stat-value"], [1, "pp-stat-label"], [1, "pp-stat-icon", 2, "background", "#f0fdf4", "color", "#22c55e"], [1, "bi", "bi-check2-circle"], [1, "pp-stat-value", 2, "color", "#22c55e"], [1, "pp-stat-icon", 2, "background", "#fffbeb", "color", "#f59e0b"], [1, "bi", "bi-hourglass-split"], [1, "pp-stat-value", 2, "color", "#f59e0b"], [1, "pp-stat-icon", 2, "background", "#f8f9fa", "color", "#6c757d"], [1, "bi", "bi-circle"], ["class", "pp-stat-card", 4, "ngIf"], [1, "pp-progress-bar-card"], [1, "pp-progress-bar-header"], [1, "pp-progress-bar-title"], [1, "pp-progress-bar-pct"], [1, "pp-progress-track"], [1, "pp-progress-fill"], [1, "pp-progress-legend"], [1, "pp-dot", 2, "background", "#22c55e"], [1, "pp-dot", 2, "background", "#f59e0b"], [1, "pp-dot", 2, "background", "#cbd5e1"], [1, "pp-section"], [1, "pp-section-header"], [1, "pp-section-title"], [1, "pp-count-badge"], ["class", "pp-empty", 4, "ngIf"], [1, "pp-task-list"], ["class", "pp-task-card", 3, "expanded", 4, "ngFor", "ngForOf"], [1, "pp-project-desc"], [1, "pp-meta-sub"], [1, "pp-stat-icon", 2, "background", "#fff1f2", "color", "#ef4444"], [1, "bi", "bi-exclamation-triangle"], [1, "pp-stat-value", 2, "color", "#ef4444"], [1, "pp-dot", 2, "background", "#ef4444"], [1, "pp-empty"], [1, "bi", "bi-inbox"], [1, "pp-task-card"], [1, "pp-task-header", 3, "click"], [1, "pp-task-left"], [1, "pp-task-status-dot"], [1, "pp-task-name"], [1, "pp-task-meta"], [1, "pp-task-code"], [1, "pp-task-template"], [1, "pp-task-right"], [1, "pp-task-stage"], [1, "pp-stage-label"], [1, "pp-stage-value"], [1, "pp-task-progress-wrap"], [1, "pp-task-progress-track"], [1, "pp-task-progress-fill"], [1, "pp-task-pct"], [1, "pp-status-pill"], ["title", "Edit task", 1, "pp-edit-btn", 3, "click"], [1, "bi", "bi-pencil"], [1, "bi", "pp-chevron"], ["class", "pp-timeline", 4, "ngIf"], [1, "pp-timeline"], [1, "pp-timeline-title"], [1, "pp-timeline-list"], ["class", "pp-timeline-item", 3, "last", 4, "ngFor", "ngForOf"], [1, "pp-timeline-item"], [1, "pp-tl-indicator"], [1, "pp-tl-dot"], ["class", "pp-tl-line", 4, "ngIf"], [1, "pp-tl-body"], [1, "pp-tl-header"], [1, "pp-tl-order"], [1, "pp-tl-name"], [1, "pp-status-pill", "pp-status-pill-sm"], ["class", "pp-tl-dates", 4, "ngIf"], [1, "pp-tl-actions"], ["class", "pp-action-btn pp-action-start", 3, "click", 4, "ngIf"], ["class", "pp-action-btn pp-action-complete", 3, "click", 4, "ngIf"], [1, "pp-tl-line"], [1, "pp-tl-dates"], [1, "pp-action-btn", "pp-action-start", 3, "click"], [1, "bi", "bi-play-fill"], [1, "pp-action-btn", "pp-action-complete", 3, "click"], [1, "bi", "bi-check-lg"], [1, "pp-modal-overlay", 3, "click"], [1, "pp-modal"], [1, "pp-modal-header"], [1, "pp-modal-close", 3, "click"], [1, "bi", "bi-x-lg"], [1, "pp-modal-body"], [3, "ngSubmit", "formGroup"], [1, "pp-form-row"], [1, "pp-form-group", "pp-col-8"], ["type", "text", "formControlName", "project_name", 1, "form-control", "form-control-sm"], [1, "pp-form-group", "pp-col-4"], ["type", "text", "formControlName", "project_code", 1, "form-control", "form-control-sm"], [1, "pp-form-group"], ["formControlName", "description", "rows", "3", 1, "form-control", "form-control-sm"], [1, "pp-form-group", "pp-col-6"], ["type", "date", "formControlName", "start_date", 1, "form-control", "form-control-sm"], ["type", "date", "formControlName", "end_date", 1, "form-control", "form-control-sm"], [1, "pp-form-check"], ["type", "checkbox", "formControlName", "is_active", "id", "pp_is_active", 1, "form-check-input"], ["for", "pp_is_active"], [1, "pp-modal-footer"], ["type", "button", 1, "pp-btn", "pp-btn-ghost", 3, "click"], ["type", "submit", 1, "pp-btn", "pp-btn-primary"], ["type", "text", "formControlName", "task_name", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "task_code", 1, "form-control", "form-control-sm"]], template: function ProjectProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProjectProfileComponent_div_0_Template, 20, 12, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.pp-root[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n}\n.pp-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 4rem 0;\n}\n.pp-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.pp-back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: none;\n  border: 1px solid #e8ecf0;\n  border-radius: 8px;\n  padding: 0.4rem 0.85rem;\n  font-size: 0.82rem;\n  font-weight: 500;\n  color: #6c757d;\n  cursor: pointer !important;\n  transition: all 0.18s;\n}\n.pp-back-btn[_ngcontent-%COMP%]:hover {\n  border-color: #4f6ef7;\n  color: #4f6ef7;\n  background: #eff6ff;\n}\n.pp-topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.pp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 1rem;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer !important;\n  transition: all 0.18s;\n  border: none;\n}\n.pp-btn.pp-btn-primary[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n  color: #fff;\n}\n.pp-btn.pp-btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(39.9739130435, 77.847826087, 245.2260869565);\n}\n.pp-btn.pp-btn-ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  color: #6c757d;\n}\n.pp-btn.pp-btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: #4f6ef7;\n  color: #4f6ef7;\n  background: #eff6ff;\n}\n.pp-hero[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  padding: 1.75rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 1.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.pp-hero-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.25rem;\n  flex: 1;\n  min-width: 0;\n}\n.pp-project-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  min-width: 52px;\n  background: #eff6ff;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-project-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #4f6ef7;\n}\n.pp-project-code[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #4f6ef7;\n  margin-bottom: 0.2rem;\n}\n.pp-project-name[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #1a1d23;\n  margin: 0 0 0.35rem;\n  line-height: 1.2;\n}\n.pp-project-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n  margin: 0 0 0.75rem;\n  line-height: 1.5;\n}\n.pp-hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.pp-meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: #f8f9fb;\n  border: 1px solid #e8ecf0;\n  border-radius: 20px;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.78rem;\n  color: #6c757d;\n}\n.pp-meta-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.pp-meta-chip[_ngcontent-%COMP%]   .pp-meta-sub[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.pp-hero-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.pp-progress-ring-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.pp-ring[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n.pp-ring[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  transition: stroke-dashoffset 0.6s ease;\n}\n.pp-ring-label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.pp-ring-pct[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a1d23;\n  line-height: 1;\n}\n.pp-ring-sub[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pp-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.3rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #fff1f2;\n  color: #ef4444;\n  border: 1px solid #fecaca;\n}\n.pp-status-badge.active[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #22c55e;\n  border-color: #bbf7d0;\n}\n.pp-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.pp-stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  padding: 1.1rem 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.pp-stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.pp-stat-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1a1d23;\n  line-height: 1;\n}\n.pp-stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.2rem;\n}\n.pp-progress-bar-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  padding: 1.25rem 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.pp-progress-bar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.pp-progress-bar-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1d23;\n}\n.pp-progress-bar-pct[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1a1d23;\n}\n.pp-progress-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e8ecf0;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 0.75rem;\n}\n.pp-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.6s ease;\n}\n.pp-progress-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.78rem;\n  color: #6c757d;\n}\n.pp-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 0.3rem;\n}\n.pp-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.pp-section-header[_ngcontent-%COMP%] {\n  padding: 1.1rem 1.5rem;\n  border-bottom: 1px solid #e8ecf0;\n}\n.pp-section-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1a1d23;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pp-section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.pp-count-badge[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #4f6ef7;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.15rem 0.5rem;\n  border-radius: 20px;\n}\n.pp-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #6c757d;\n}\n.pp-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 0.5rem;\n  opacity: 0.4;\n}\n.pp-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  margin: 0;\n}\n.pp-task-list[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.pp-task-card[_ngcontent-%COMP%] {\n  border: 1px solid #e8ecf0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: box-shadow 0.18s;\n}\n.pp-task-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n}\n.pp-task-card.expanded[_ngcontent-%COMP%] {\n  border-color: rgb(200.9565217391, 210.4755434783, 252.5434782609);\n}\n.pp-task-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.9rem 1.1rem;\n  cursor: pointer !important;\n  background: #fff;\n  gap: 1rem;\n  transition: background 0.15s;\n}\n.pp-task-header[_ngcontent-%COMP%]:hover {\n  background: #fafbff;\n}\n.pp-task-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n  min-width: 0;\n}\n.pp-task-status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  min-width: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.pp-task-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #1a1d23;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pp-task-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.15rem;\n}\n.pp-task-code[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  background: #f1f3f5;\n  color: #6c757d;\n  padding: 0.1rem 0.4rem;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.pp-task-template[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6c757d;\n}\n.pp-task-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n.pp-task-stage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  min-width: 80px;\n}\n.pp-stage-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pp-stage-value[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #1a1d23;\n}\n.pp-task-progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 100px;\n}\n.pp-task-progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e8ecf0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.pp-task-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.4s ease;\n}\n.pp-task-pct[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n.pp-edit-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #e8ecf0;\n  border-radius: 6px;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  cursor: pointer !important;\n  transition: all 0.18s;\n  flex-shrink: 0;\n}\n.pp-edit-btn[_ngcontent-%COMP%]:hover {\n  border-color: #4f6ef7;\n  color: #4f6ef7;\n  background: #eff6ff;\n}\n.pp-edit-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.pp-chevron[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.pp-status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.pp-status-pill.pp-status-pill-sm[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  padding: 0.15rem 0.45rem;\n}\n.dot-completed[_ngcontent-%COMP%], \n.fill-completed[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.dot-in_progress[_ngcontent-%COMP%], \n.fill-in_progress[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.dot-not_started[_ngcontent-%COMP%], \n.fill-not_started[_ngcontent-%COMP%] {\n  background: #cbd5e1;\n}\n.dot-skipped[_ngcontent-%COMP%], \n.fill-skipped[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.dot-overdue[_ngcontent-%COMP%], \n.fill-overdue[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.pill-completed[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #22c55e;\n}\n.pill-in_progress[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.pill-not_started[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #94a3b8;\n}\n.pill-skipped[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.pill-overdue[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  color: #ef4444;\n}\n.pp-timeline[_ngcontent-%COMP%] {\n  background: #f8f9fb;\n  border-top: 1px solid #e8ecf0;\n  padding: 1.25rem 1.5rem;\n}\n.pp-timeline-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #6c757d;\n  margin-bottom: 1rem;\n}\n.pp-timeline-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pp-timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding-bottom: 1.25rem;\n}\n.pp-timeline-item.last[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.pp-tl-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n}\n.pp-tl-dot[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n  z-index: 1;\n}\n.pp-tl-line[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 2px;\n  background: #e8ecf0;\n  margin: 4px 0;\n  min-height: 20px;\n}\n.pp-tl-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 0.2rem;\n}\n.pp-tl-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.35rem;\n}\n.pp-tl-order[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: #e8ecf0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #6c757d;\n  flex-shrink: 0;\n}\n.pp-tl-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1d23;\n  flex: 1;\n}\n.pp-tl-dates[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-bottom: 0.5rem;\n}\n.pp-tl-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.pp-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.3rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer !important;\n  border: none;\n  transition: all 0.18s;\n}\n.pp-action-btn.pp-action-start[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #4f6ef7;\n}\n.pp-action-btn.pp-action-start[_ngcontent-%COMP%]:hover {\n  background: #4f6ef7;\n  color: #fff;\n}\n.pp-action-btn.pp-action-complete[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #22c55e;\n}\n.pp-action-btn.pp-action-complete[_ngcontent-%COMP%]:hover {\n  background: #22c55e;\n  color: #fff;\n}\n.pp-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1040;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.pp-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1050;\n  width: min(600px, 95vw);\n  max-height: 90vh;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.pp-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.1rem 1.5rem;\n  border-bottom: 1px solid #e8ecf0;\n  flex-shrink: 0;\n}\n.pp-modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1a1d23;\n  margin: 0;\n}\n.pp-modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer !important;\n  padding: 0.25rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  transition: all 0.18s;\n}\n.pp-modal-close[_ngcontent-%COMP%]:hover {\n  background: #f1f3f5;\n  color: #1a1d23;\n}\n.pp-modal-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.pp-modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  overflow-y: auto;\n  flex: 1;\n}\n.pp-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 0;\n}\n.pp-col-4[_ngcontent-%COMP%] {\n  flex: 4;\n}\n.pp-col-6[_ngcontent-%COMP%] {\n  flex: 6;\n}\n.pp-col-8[_ngcontent-%COMP%] {\n  flex: 8;\n}\n.pp-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.pp-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #1a1d23;\n  margin-bottom: 0.35rem;\n}\n.pp-form-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.pp-form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #1a1d23;\n  cursor: pointer !important;\n}\n.pp-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e8ecf0;\n  margin-top: 0.5rem;\n}\n@media (max-width: 768px) {\n  .pp-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pp-hero-right[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n  }\n  .pp-task-right[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .pp-task-stage[_ngcontent-%COMP%], \n   .pp-task-progress-wrap[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pp-form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=project-profile.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectProfileComponent, [{
    type: Component,
    args: [{ selector: "app-project-profile", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="pp-root" *ngIf="!loading && !error">\r
\r
  <!-- Page Header Bar -->\r
  <div class="pp-topbar">\r
    <button class="pp-back-btn" (click)="goBack()">\r
      <i class="bi bi-arrow-left"></i>\r
      <span>Projects</span>\r
    </button>\r
    <div class="pp-topbar-actions">\r
      <button class="pp-btn pp-btn-ghost" (click)="toggleProjectStatus()">\r
        <i class="bi" [class.bi-toggle-on]="profile?.project?.is_active" [class.bi-toggle-off]="!profile?.project?.is_active"></i>\r
        {{ profile?.project?.is_active ? 'Active' : 'Inactive' }}\r
      </button>\r
      <button class="pp-btn pp-btn-primary" (click)="openEditProject()">\r
        <i class="bi bi-pencil-square"></i>\r
        Edit Project\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="pp-loading">\r
    <div class="spinner-border text-primary"></div>\r
  </div>\r
\r
  <!-- Error -->\r
  <div *ngIf="error && !loading" class="alert alert-danger mx-0">{{ error }}</div>\r
\r
  <ng-container *ngIf="profile && !loading">\r
\r
    <!-- Hero Section -->\r
    <div class="pp-hero">\r
      <div class="pp-hero-left">\r
        <div class="pp-project-icon">\r
          <i class="bi bi-kanban-fill"></i>\r
        </div>\r
        <div>\r
          <div class="pp-project-code">{{ profile.project.project_code }}</div>\r
          <h1 class="pp-project-name">{{ profile.project.project_name }}</h1>\r
          <p class="pp-project-desc" *ngIf="profile.project.description">{{ profile.project.description }}</p>\r
          <div class="pp-hero-meta">\r
            <span class="pp-meta-chip">\r
              <i class="bi bi-person-badge"></i>\r
              {{ profile.client.client_name }}\r
              <span *ngIf="profile.client.company_name" class="pp-meta-sub">\xB7 {{ profile.client.company_name }}</span>\r
            </span>\r
            <span class="pp-meta-chip">\r
              <i class="bi bi-calendar3"></i>\r
              {{ formatDate(profile.project.start_date) }} \u2014 {{ formatDate(profile.project.end_date) }}\r
            </span>\r
            <span class="pp-meta-chip">\r
              <i class="bi bi-clock"></i>\r
              {{ getDurationDays(profile.project.start_date, profile.project.end_date) }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="pp-hero-right">\r
        <div class="pp-progress-ring-wrap">\r
          <svg class="pp-ring" viewBox="0 0 80 80">\r
            <circle cx="40" cy="40" r="34" fill="none" stroke="#e8ecf0" stroke-width="7"/>\r
            <circle cx="40" cy="40" r="34" fill="none"\r
              [attr.stroke]="profile.summary.overall_progress >= 75 ? '#22c55e' : profile.summary.overall_progress >= 50 ? '#4f6ef7' : profile.summary.overall_progress >= 25 ? '#f59e0b' : '#ef4444'"\r
              stroke-width="7" stroke-linecap="round"\r
              [attr.stroke-dasharray]="213.6"\r
              [attr.stroke-dashoffset]="213.6 - (213.6 * profile.summary.overall_progress / 100)"\r
              transform="rotate(-90 40 40)"/>\r
          </svg>\r
          <div class="pp-ring-label">\r
            <span class="pp-ring-pct">{{ profile.summary.overall_progress }}%</span>\r
            <span class="pp-ring-sub">Done</span>\r
          </div>\r
        </div>\r
        <span class="pp-status-badge" [class.active]="profile.project.is_active">\r
          <i class="bi" [class.bi-check-circle-fill]="profile.project.is_active" [class.bi-x-circle-fill]="!profile.project.is_active"></i>\r
          {{ profile.project.is_active ? 'Active' : 'Inactive' }}\r
        </span>\r
      </div>\r
    </div>\r
\r
    <!-- Stat Cards -->\r
    <div class="pp-stats">\r
      <div class="pp-stat-card">\r
        <div class="pp-stat-icon" style="background:#eff6ff;color:#4f6ef7">\r
          <i class="bi bi-list-task"></i>\r
        </div>\r
        <div class="pp-stat-body">\r
          <div class="pp-stat-value">{{ profile.summary.total_tasks }}</div>\r
          <div class="pp-stat-label">Total Tasks</div>\r
        </div>\r
      </div>\r
      <div class="pp-stat-card">\r
        <div class="pp-stat-icon" style="background:#f0fdf4;color:#22c55e">\r
          <i class="bi bi-check2-circle"></i>\r
        </div>\r
        <div class="pp-stat-body">\r
          <div class="pp-stat-value" style="color:#22c55e">{{ profile.summary.completed_tasks }}</div>\r
          <div class="pp-stat-label">Completed</div>\r
        </div>\r
      </div>\r
      <div class="pp-stat-card">\r
        <div class="pp-stat-icon" style="background:#fffbeb;color:#f59e0b">\r
          <i class="bi bi-hourglass-split"></i>\r
        </div>\r
        <div class="pp-stat-body">\r
          <div class="pp-stat-value" style="color:#f59e0b">{{ profile.summary.in_progress_tasks }}</div>\r
          <div class="pp-stat-label">In Progress</div>\r
        </div>\r
      </div>\r
      <div class="pp-stat-card">\r
        <div class="pp-stat-icon" style="background:#f8f9fa;color:#6c757d">\r
          <i class="bi bi-circle"></i>\r
        </div>\r
        <div class="pp-stat-body">\r
          <div class="pp-stat-value">{{ profile.summary.not_started_tasks }}</div>\r
          <div class="pp-stat-label">Not Started</div>\r
        </div>\r
      </div>\r
      <div class="pp-stat-card" *ngIf="profile.summary.overdue_tasks > 0">\r
        <div class="pp-stat-icon" style="background:#fff1f2;color:#ef4444">\r
          <i class="bi bi-exclamation-triangle"></i>\r
        </div>\r
        <div class="pp-stat-body">\r
          <div class="pp-stat-value" style="color:#ef4444">{{ profile.summary.overdue_tasks }}</div>\r
          <div class="pp-stat-label">Overdue</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Progress Bar -->\r
    <div class="pp-progress-bar-card">\r
      <div class="pp-progress-bar-header">\r
        <span class="pp-progress-bar-title">Overall Progress</span>\r
        <span class="pp-progress-bar-pct">{{ profile.summary.overall_progress }}%</span>\r
      </div>\r
      <div class="pp-progress-track">\r
        <div class="pp-progress-fill"\r
          [style.width.%]="profile.summary.overall_progress"\r
          [style.background]="profile.summary.overall_progress >= 75 ? '#22c55e' : profile.summary.overall_progress >= 50 ? '#4f6ef7' : profile.summary.overall_progress >= 25 ? '#f59e0b' : '#ef4444'">\r
        </div>\r
      </div>\r
      <div class="pp-progress-legend">\r
        <span><span class="pp-dot" style="background:#22c55e"></span>{{ profile.summary.completed_tasks }} completed</span>\r
        <span><span class="pp-dot" style="background:#f59e0b"></span>{{ profile.summary.in_progress_tasks }} in progress</span>\r
        <span><span class="pp-dot" style="background:#cbd5e1"></span>{{ profile.summary.not_started_tasks }} not started</span>\r
        <span *ngIf="profile.summary.overdue_tasks > 0"><span class="pp-dot" style="background:#ef4444"></span>{{ profile.summary.overdue_tasks }} overdue</span>\r
      </div>\r
    </div>\r
\r
    <!-- Tasks Section -->\r
    <div class="pp-section">\r
      <div class="pp-section-header">\r
        <h2 class="pp-section-title">\r
          <i class="bi bi-list-task"></i>\r
          Tasks\r
          <span class="pp-count-badge">{{ profile.tasks.length }}</span>\r
        </h2>\r
      </div>\r
\r
      <div class="pp-empty" *ngIf="profile.tasks.length === 0">\r
        <i class="bi bi-inbox"></i>\r
        <p>No tasks yet</p>\r
      </div>\r
\r
      <div class="pp-task-list">\r
        <div class="pp-task-card" *ngFor="let task of profile.tasks" [class.expanded]="expandedTaskId === task.task_id">\r
\r
          <!-- Task Header -->\r
          <div class="pp-task-header" (click)="toggleTaskExpand(task.task_id)">\r
            <div class="pp-task-left">\r
              <div class="pp-task-status-dot" [class]="'dot-' + getStatusKey(task.status)"></div>\r
              <div>\r
                <div class="pp-task-name">{{ task.task_name }}</div>\r
                <div class="pp-task-meta">\r
                  <span class="pp-task-code">{{ task.task_code }}</span>\r
                  <span class="pp-task-template">{{ task.workflow_template_name }}</span>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="pp-task-right">\r
              <div class="pp-task-stage">\r
                <span class="pp-stage-label">Stage</span>\r
                <span class="pp-stage-value">{{ task.current_stage || '\u2014' }}</span>\r
              </div>\r
              <div class="pp-task-progress-wrap">\r
                <div class="pp-task-progress-track">\r
                  <div class="pp-task-progress-fill" [style.width.%]="task.progress.percentage"\r
                    [class]="'fill-' + getStatusKey(task.status)"></div>\r
                </div>\r
                <span class="pp-task-pct">{{ task.progress.percentage }}%</span>\r
              </div>\r
              <span class="pp-status-pill" [class]="'pill-' + getStatusKey(task.status)">{{ task.status }}</span>\r
              <button class="pp-edit-btn" (click)="openEditTask(task); $event.stopPropagation()" title="Edit task">\r
                <i class="bi bi-pencil"></i>\r
              </button>\r
              <i class="bi pp-chevron" [class.bi-chevron-down]="expandedTaskId !== task.task_id" [class.bi-chevron-up]="expandedTaskId === task.task_id"></i>\r
            </div>\r
          </div>\r
\r
          <!-- Workflow Steps Timeline -->\r
          <div class="pp-timeline" *ngIf="expandedTaskId === task.task_id">\r
            <div class="pp-timeline-title">Workflow Steps</div>\r
            <div class="pp-timeline-list">\r
              <div class="pp-timeline-item" *ngFor="let step of task.workflow_steps; let last = last" [class.last]="last">\r
                <div class="pp-tl-indicator">\r
                  <div class="pp-tl-dot" [class]="'dot-' + getStatusKey(step.status)">\r
                    <i class="bi"\r
                      [class.bi-check-lg]="step.status === 'COMPLETED'"\r
                      [class.bi-play-fill]="step.status === 'IN_PROGRESS'"\r
                      [class.bi-dash-lg]="step.status === 'SKIPPED'"\r
                      [class.bi-clock]="step.status === 'NOT_STARTED'"></i>\r
                  </div>\r
                  <div class="pp-tl-line" *ngIf="!last"></div>\r
                </div>\r
                <div class="pp-tl-body">\r
                  <div class="pp-tl-header">\r
                    <span class="pp-tl-order">{{ step.display_order }}</span>\r
                    <span class="pp-tl-name">{{ step.step_name }}</span>\r
                    <span class="pp-status-pill pp-status-pill-sm" [class]="'pill-' + getStatusKey(step.status)">{{ step.status }}</span>\r
                  </div>\r
                  <div class="pp-tl-dates" *ngIf="step.start_date || step.end_date">\r
                    <i class="bi bi-calendar3"></i>\r
                    {{ formatDate(step.start_date) }} \u2014 {{ formatDate(step.end_date) }}\r
                  </div>\r
                  <div class="pp-tl-actions">\r
                    <button class="pp-action-btn pp-action-start" *ngIf="step.status === 'NOT_STARTED'"\r
                      (click)="updateStepStatus(step.task_workflow_step_id, 'IN_PROGRESS'); editingTask = task">\r
                      <i class="bi bi-play-fill"></i> Start\r
                    </button>\r
                    <button class="pp-action-btn pp-action-complete" *ngIf="step.status === 'IN_PROGRESS'"\r
                      (click)="updateStepStatus(step.task_workflow_step_id, 'COMPLETED'); editingTask = task">\r
                      <i class="bi bi-check-lg"></i> Mark Complete\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- Edit Project Modal -->\r
  <div class="pp-modal-overlay" *ngIf="showEditModal" (click)="showEditModal=false"></div>\r
  <div class="pp-modal" *ngIf="showEditModal">\r
    <div class="pp-modal-header">\r
      <h5>Edit Project</h5>\r
      <button class="pp-modal-close" (click)="showEditModal=false"><i class="bi bi-x-lg"></i></button>\r
    </div>\r
    <div class="pp-modal-body">\r
      <form [formGroup]="editForm" (ngSubmit)="saveProjectEdit()">\r
        <div class="pp-form-row">\r
          <div class="pp-form-group pp-col-8">\r
            <label>Project Name *</label>\r
            <input type="text" class="form-control form-control-sm" formControlName="project_name">\r
          </div>\r
          <div class="pp-form-group pp-col-4">\r
            <label>Code</label>\r
            <input type="text" class="form-control form-control-sm" formControlName="project_code">\r
          </div>\r
        </div>\r
        <div class="pp-form-group">\r
          <label>Description</label>\r
          <textarea class="form-control form-control-sm" formControlName="description" rows="3"></textarea>\r
        </div>\r
        <div class="pp-form-row">\r
          <div class="pp-form-group pp-col-6">\r
            <label>Start Date</label>\r
            <input type="date" class="form-control form-control-sm" formControlName="start_date">\r
          </div>\r
          <div class="pp-form-group pp-col-6">\r
            <label>End Date</label>\r
            <input type="date" class="form-control form-control-sm" formControlName="end_date">\r
          </div>\r
        </div>\r
        <div class="pp-form-check">\r
          <input type="checkbox" class="form-check-input" formControlName="is_active" id="pp_is_active">\r
          <label for="pp_is_active">Active</label>\r
        </div>\r
        <div class="pp-modal-footer">\r
          <button type="button" class="pp-btn pp-btn-ghost" (click)="showEditModal=false">Cancel</button>\r
          <button type="submit" class="pp-btn pp-btn-primary">Save Changes</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
\r
  <!-- Edit Task Modal -->\r
  <div class="pp-modal-overlay" *ngIf="showTaskModal" (click)="showTaskModal=false"></div>\r
  <div class="pp-modal" *ngIf="showTaskModal">\r
    <div class="pp-modal-header">\r
      <h5>Edit Task</h5>\r
      <button class="pp-modal-close" (click)="showTaskModal=false"><i class="bi bi-x-lg"></i></button>\r
    </div>\r
    <div class="pp-modal-body">\r
      <form [formGroup]="taskForm" (ngSubmit)="saveTask()">\r
        <div class="pp-form-row">\r
          <div class="pp-form-group pp-col-8">\r
            <label>Task Name *</label>\r
            <input type="text" class="form-control form-control-sm" formControlName="task_name">\r
          </div>\r
          <div class="pp-form-group pp-col-4">\r
            <label>Code</label>\r
            <input type="text" class="form-control form-control-sm" formControlName="task_code">\r
          </div>\r
        </div>\r
        <div class="pp-form-group">\r
          <label>Description</label>\r
          <textarea class="form-control form-control-sm" formControlName="description" rows="3"></textarea>\r
        </div>\r
        <div class="pp-form-row">\r
          <div class="pp-form-group pp-col-6">\r
            <label>Start Date</label>\r
            <input type="date" class="form-control form-control-sm" formControlName="start_date">\r
          </div>\r
          <div class="pp-form-group pp-col-6">\r
            <label>End Date</label>\r
            <input type="date" class="form-control form-control-sm" formControlName="end_date">\r
          </div>\r
        </div>\r
        <div class="pp-modal-footer">\r
          <button type="button" class="pp-btn pp-btn-ghost" (click)="showTaskModal=false">Cancel</button>\r
          <button type="submit" class="pp-btn pp-btn-primary">Save Changes</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
\r
</div>\r
`, styles: ['/* src/app/admin/projects/project-profile/project-profile.component.scss */\n:host {\n  display: block;\n}\n.pp-root {\n  max-width: 1100px;\n  margin: 0 auto;\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n}\n.pp-loading {\n  display: flex;\n  justify-content: center;\n  padding: 4rem 0;\n}\n.pp-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.pp-back-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: none;\n  border: 1px solid #e8ecf0;\n  border-radius: 8px;\n  padding: 0.4rem 0.85rem;\n  font-size: 0.82rem;\n  font-weight: 500;\n  color: #6c757d;\n  cursor: pointer !important;\n  transition: all 0.18s;\n}\n.pp-back-btn:hover {\n  border-color: #4f6ef7;\n  color: #4f6ef7;\n  background: #eff6ff;\n}\n.pp-topbar-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.pp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 1rem;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer !important;\n  transition: all 0.18s;\n  border: none;\n}\n.pp-btn.pp-btn-primary {\n  background: #4f6ef7;\n  color: #fff;\n}\n.pp-btn.pp-btn-primary:hover {\n  background: rgb(39.9739130435, 77.847826087, 245.2260869565);\n}\n.pp-btn.pp-btn-ghost {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  color: #6c757d;\n}\n.pp-btn.pp-btn-ghost:hover {\n  border-color: #4f6ef7;\n  color: #4f6ef7;\n  background: #eff6ff;\n}\n.pp-hero {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  padding: 1.75rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 1.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.pp-hero-left {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.25rem;\n  flex: 1;\n  min-width: 0;\n}\n.pp-project-icon {\n  width: 52px;\n  height: 52px;\n  min-width: 52px;\n  background: #eff6ff;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-project-icon i {\n  font-size: 1.5rem;\n  color: #4f6ef7;\n}\n.pp-project-code {\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #4f6ef7;\n  margin-bottom: 0.2rem;\n}\n.pp-project-name {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #1a1d23;\n  margin: 0 0 0.35rem;\n  line-height: 1.2;\n}\n.pp-project-desc {\n  font-size: 0.85rem;\n  color: #6c757d;\n  margin: 0 0 0.75rem;\n  line-height: 1.5;\n}\n.pp-hero-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.pp-meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: #f8f9fb;\n  border: 1px solid #e8ecf0;\n  border-radius: 20px;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.78rem;\n  color: #6c757d;\n}\n.pp-meta-chip i {\n  font-size: 0.8rem;\n}\n.pp-meta-chip .pp-meta-sub {\n  color: #adb5bd;\n}\n.pp-hero-right {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.pp-progress-ring-wrap {\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.pp-ring {\n  width: 80px;\n  height: 80px;\n}\n.pp-ring circle {\n  transition: stroke-dashoffset 0.6s ease;\n}\n.pp-ring-label {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.pp-ring-pct {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a1d23;\n  line-height: 1;\n}\n.pp-ring-sub {\n  font-size: 0.65rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pp-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.3rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #fff1f2;\n  color: #ef4444;\n  border: 1px solid #fecaca;\n}\n.pp-status-badge.active {\n  background: #f0fdf4;\n  color: #22c55e;\n  border-color: #bbf7d0;\n}\n.pp-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.pp-stat-card {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  padding: 1.1rem 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.pp-stat-icon {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-stat-icon i {\n  font-size: 1.2rem;\n}\n.pp-stat-value {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1a1d23;\n  line-height: 1;\n}\n.pp-stat-label {\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.2rem;\n}\n.pp-progress-bar-card {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  padding: 1.25rem 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.pp-progress-bar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.pp-progress-bar-title {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1d23;\n}\n.pp-progress-bar-pct {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1a1d23;\n}\n.pp-progress-track {\n  height: 8px;\n  background: #e8ecf0;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 0.75rem;\n}\n.pp-progress-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.6s ease;\n}\n.pp-progress-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.78rem;\n  color: #6c757d;\n}\n.pp-dot {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 0.3rem;\n}\n.pp-section {\n  background: #fff;\n  border: 1px solid #e8ecf0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n}\n.pp-section-header {\n  padding: 1.1rem 1.5rem;\n  border-bottom: 1px solid #e8ecf0;\n}\n.pp-section-title {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1a1d23;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pp-section-title i {\n  color: #4f6ef7;\n}\n.pp-count-badge {\n  background: #eff6ff;\n  color: #4f6ef7;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.15rem 0.5rem;\n  border-radius: 20px;\n}\n.pp-empty {\n  text-align: center;\n  padding: 3rem;\n  color: #6c757d;\n}\n.pp-empty i {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 0.5rem;\n  opacity: 0.4;\n}\n.pp-empty p {\n  font-size: 0.85rem;\n  margin: 0;\n}\n.pp-task-list {\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.pp-task-card {\n  border: 1px solid #e8ecf0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: box-shadow 0.18s;\n}\n.pp-task-card:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n}\n.pp-task-card.expanded {\n  border-color: rgb(200.9565217391, 210.4755434783, 252.5434782609);\n}\n.pp-task-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.9rem 1.1rem;\n  cursor: pointer !important;\n  background: #fff;\n  gap: 1rem;\n  transition: background 0.15s;\n}\n.pp-task-header:hover {\n  background: #fafbff;\n}\n.pp-task-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n  min-width: 0;\n}\n.pp-task-status-dot {\n  width: 10px;\n  height: 10px;\n  min-width: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.pp-task-name {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #1a1d23;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pp-task-meta {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.15rem;\n}\n.pp-task-code {\n  font-size: 0.72rem;\n  background: #f1f3f5;\n  color: #6c757d;\n  padding: 0.1rem 0.4rem;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.pp-task-template {\n  font-size: 0.72rem;\n  color: #6c757d;\n}\n.pp-task-right {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n.pp-task-stage {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  min-width: 80px;\n}\n.pp-stage-label {\n  font-size: 0.68rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pp-stage-value {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #1a1d23;\n}\n.pp-task-progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 100px;\n}\n.pp-task-progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e8ecf0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.pp-task-progress-fill {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.4s ease;\n}\n.pp-task-pct {\n  font-size: 0.72rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n.pp-edit-btn {\n  background: none;\n  border: 1px solid #e8ecf0;\n  border-radius: 6px;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  cursor: pointer !important;\n  transition: all 0.18s;\n  flex-shrink: 0;\n}\n.pp-edit-btn:hover {\n  border-color: #4f6ef7;\n  color: #4f6ef7;\n  background: #eff6ff;\n}\n.pp-edit-btn i {\n  font-size: 0.75rem;\n}\n.pp-chevron {\n  color: #6c757d;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.pp-status-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.pp-status-pill.pp-status-pill-sm {\n  font-size: 0.65rem;\n  padding: 0.15rem 0.45rem;\n}\n.dot-completed,\n.fill-completed {\n  background: #22c55e;\n}\n.dot-in_progress,\n.fill-in_progress {\n  background: #f59e0b;\n}\n.dot-not_started,\n.fill-not_started {\n  background: #cbd5e1;\n}\n.dot-skipped,\n.fill-skipped {\n  background: #94a3b8;\n}\n.dot-overdue,\n.fill-overdue {\n  background: #ef4444;\n}\n.pill-completed {\n  background: #f0fdf4;\n  color: #22c55e;\n}\n.pill-in_progress {\n  background: #fffbeb;\n  color: #d97706;\n}\n.pill-not_started {\n  background: #f8fafc;\n  color: #94a3b8;\n}\n.pill-skipped {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.pill-overdue {\n  background: #fff1f2;\n  color: #ef4444;\n}\n.pp-timeline {\n  background: #f8f9fb;\n  border-top: 1px solid #e8ecf0;\n  padding: 1.25rem 1.5rem;\n}\n.pp-timeline-title {\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #6c757d;\n  margin-bottom: 1rem;\n}\n.pp-timeline-list {\n  display: flex;\n  flex-direction: column;\n}\n.pp-timeline-item {\n  display: flex;\n  gap: 1rem;\n  padding-bottom: 1.25rem;\n}\n.pp-timeline-item.last {\n  padding-bottom: 0;\n}\n.pp-tl-indicator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n}\n.pp-tl-dot {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n  z-index: 1;\n}\n.pp-tl-line {\n  flex: 1;\n  width: 2px;\n  background: #e8ecf0;\n  margin: 4px 0;\n  min-height: 20px;\n}\n.pp-tl-body {\n  flex: 1;\n  padding-top: 0.2rem;\n}\n.pp-tl-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.35rem;\n}\n.pp-tl-order {\n  width: 20px;\n  height: 20px;\n  background: #e8ecf0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #6c757d;\n  flex-shrink: 0;\n}\n.pp-tl-name {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a1d23;\n  flex: 1;\n}\n.pp-tl-dates {\n  font-size: 0.75rem;\n  color: #6c757d;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-bottom: 0.5rem;\n}\n.pp-tl-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.pp-action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.3rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer !important;\n  border: none;\n  transition: all 0.18s;\n}\n.pp-action-btn.pp-action-start {\n  background: #eff6ff;\n  color: #4f6ef7;\n}\n.pp-action-btn.pp-action-start:hover {\n  background: #4f6ef7;\n  color: #fff;\n}\n.pp-action-btn.pp-action-complete {\n  background: #f0fdf4;\n  color: #22c55e;\n}\n.pp-action-btn.pp-action-complete:hover {\n  background: #22c55e;\n  color: #fff;\n}\n.pp-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1040;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.pp-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1050;\n  width: min(600px, 95vw);\n  max-height: 90vh;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.pp-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.1rem 1.5rem;\n  border-bottom: 1px solid #e8ecf0;\n  flex-shrink: 0;\n}\n.pp-modal-header h5 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1a1d23;\n  margin: 0;\n}\n.pp-modal-close {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer !important;\n  padding: 0.25rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  transition: all 0.18s;\n}\n.pp-modal-close:hover {\n  background: #f1f3f5;\n  color: #1a1d23;\n}\n.pp-modal-close i {\n  font-size: 0.9rem;\n}\n.pp-modal-body {\n  padding: 1.5rem;\n  overflow-y: auto;\n  flex: 1;\n}\n.pp-form-row {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 0;\n}\n.pp-col-4 {\n  flex: 4;\n}\n.pp-col-6 {\n  flex: 6;\n}\n.pp-col-8 {\n  flex: 8;\n}\n.pp-form-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.pp-form-group label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #1a1d23;\n  margin-bottom: 0.35rem;\n}\n.pp-form-check {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.pp-form-check label {\n  font-size: 0.82rem;\n  color: #1a1d23;\n  cursor: pointer !important;\n}\n.pp-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e8ecf0;\n  margin-top: 0.5rem;\n}\n@media (max-width: 768px) {\n  .pp-hero {\n    flex-direction: column;\n  }\n  .pp-hero-right {\n    flex-direction: row;\n    align-items: center;\n  }\n  .pp-task-right {\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .pp-task-stage,\n  .pp-task-progress-wrap {\n    display: none;\n  }\n  .pp-form-row {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=project-profile.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectProfileComponent, { className: "ProjectProfileComponent", filePath: "src/app/admin/projects/project-profile/project-profile.component.ts", lineNumber: 63 });
})();
export {
  ProjectProfileComponent
};
//# sourceMappingURL=chunk-P2TWESSW.js.map
