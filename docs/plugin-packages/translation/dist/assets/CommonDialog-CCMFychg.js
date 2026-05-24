import { b as J, u as Q, d as K, bc as pe, b6 as F, _ as se, a0 as ye, bk as Ce, z as be, bi as ge, a_ as Ee, W as ne, a9 as he, bl as ae, as as x, bm as Te, bn as we, ap as Se, bo as ke, bp as De, b4 as ee, bq as Be, br as Le, bs as Me, bt as oe, bu as Ae, bv as Ie, w as Oe, q as $e } from "./_plugin-vue_export-helper-BxX7cX_q.js";
import "./index-DHOB4Bdo.js";
import { $ as G, d as z, c as N, Q as Ne, g, f as re, U as Ye, a0 as _e, C as te, k as S, a as W, o as $, q as Y, e as j, n as T, u as o, s as Z, v as b, b as q, y as Re, B as ie, x as de, w as P, N as Ve, D as ze, r as w, l as He, ar as Ue, Z as Pe, a3 as Xe, a1 as Ke, m as qe, an as ue, a2 as Ge, R as le } from "./runtime-entry-C62Reu10.js";
import { c as We, u as Fe, E as je } from "./refs-CubZlacf.js";
var X = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(X || {});
const ce = (e) => {
  if (!e)
    return { onClick: G, onMousedown: G, onMouseup: G };
  let n = !1, r = !1;
  return { onClick: (d) => {
    n && r && e(d), n = r = !1;
  }, onMousedown: (d) => {
    n = d.target === d.currentTarget;
  }, onMouseup: (d) => {
    r = d.target === d.currentTarget;
  } };
}, Ze = J({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: K([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: K([String, Number])
  }
}), Je = {
  click: (e) => e instanceof MouseEvent
}, Qe = "overlay";
var xe = z({
  name: "ElOverlay",
  props: Ze,
  emits: Je,
  setup(e, { slots: n, emit: r }) {
    const c = Q(Qe), s = (i) => {
      r("click", i);
    }, { onClick: a, onMousedown: d, onMouseup: f } = ce(e.customMaskEvent ? void 0 : s);
    return () => e.mask ? N("div", {
      class: [c.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: a,
      onMousedown: d,
      onMouseup: f
    }, [g(n, "default")], X.STYLE | X.CLASS | X.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Ne("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [g(n, "default")]);
  }
});
const eo = xe, fe = Symbol("dialogInjectionKey"), me = J({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: pe
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
}), oo = {
  close: () => !0
}, to = (e, n, r, c) => {
  let s = {
    offsetX: 0,
    offsetY: 0
  };
  const a = (t) => {
    const v = t.clientX, y = t.clientY, { offsetX: C, offsetY: m } = s, p = e.value.getBoundingClientRect(), h = p.left, u = p.top, _ = p.width, k = p.height, H = document.documentElement.clientWidth, U = document.documentElement.clientHeight, R = -h + C, D = -u + m, B = H - h - _ + C, L = U - u - k + m, M = (l) => {
      let I = C + l.clientX - v, V = m + l.clientY - y;
      c?.value || (I = Math.min(Math.max(I, R), B), V = Math.min(Math.max(V, D), L)), s = {
        offsetX: I,
        offsetY: V
      }, e.value && (e.value.style.transform = `translate(${F(I)}, ${F(V)})`);
    }, A = () => {
      document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", A);
    };
    document.addEventListener("mousemove", M), document.addEventListener("mouseup", A);
  }, d = () => {
    n.value && e.value && n.value.addEventListener("mousedown", a);
  }, f = () => {
    n.value && e.value && n.value.removeEventListener("mousedown", a);
  }, i = () => {
    s = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return re(() => {
    Ye(() => {
      r.value ? d() : f();
    });
  }), _e(() => {
    f();
  }), {
    resetPosition: i
  };
}, lo = z({ name: "ElDialogContent" }), so = /* @__PURE__ */ z({
  ...lo,
  props: me,
  emits: oo,
  setup(e, { expose: n }) {
    const r = e, { t: c } = ye(), { Close: s } = Ce, { dialogRef: a, headerRef: d, bodyId: f, ns: i, style: t } = te(fe), { focusTrapRef: v } = te(ge), y = S(() => [
      i.b(),
      i.is("fullscreen", r.fullscreen),
      i.is("draggable", r.draggable),
      i.is("align-center", r.alignCenter),
      { [i.m("center")]: r.center }
    ]), C = We(v, a), m = S(() => r.draggable), p = S(() => r.overflow), { resetPosition: h } = to(a, d, m, p);
    return n({
      resetPosition: h
    }), (u, _) => ($(), W("div", {
      ref: o(C),
      class: T(o(y)),
      style: ie(o(t)),
      tabindex: "-1"
    }, [
      Y("header", {
        ref_key: "headerRef",
        ref: d,
        class: T([o(i).e("header"), u.headerClass, { "show-close": u.showClose }])
      }, [
        g(u.$slots, "header", {}, () => [
          Y("span", {
            role: "heading",
            "aria-level": u.ariaLevel,
            class: T(o(i).e("title"))
          }, Z(u.title), 11, ["aria-level"])
        ]),
        u.showClose ? ($(), W("button", {
          key: 0,
          "aria-label": o(c)("el.dialog.close"),
          class: T(o(i).e("headerbtn")),
          type: "button",
          onClick: (k) => u.$emit("close")
        }, [
          N(o(be), {
            class: T(o(i).e("close"))
          }, {
            default: b(() => [
              ($(), q(Re(u.closeIcon || o(s))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : j("v-if", !0)
      ], 2),
      Y("div", {
        id: o(f),
        class: T([o(i).e("body"), u.bodyClass])
      }, [
        g(u.$slots, "default")
      ], 10, ["id"]),
      u.$slots.footer ? ($(), W("footer", {
        key: 0,
        class: T([o(i).e("footer"), u.footerClass])
      }, [
        g(u.$slots, "footer")
      ], 2)) : j("v-if", !0)
    ], 6));
  }
});
var no = /* @__PURE__ */ se(so, [["__file", "dialog-content.vue"]]);
const ao = J({
  ...me,
  appendToBody: Boolean,
  appendTo: {
    type: K([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: K(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), ro = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [ne]: (e) => Ee(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, io = (e, n = {}) => {
  de(e) || he("[useLockscreen]", "You need to pass a ref param to this function");
  const r = n.ns || Q("popup"), c = S(() => r.bm("parent", "hidden"));
  if (!ae || x(document.body, c.value))
    return;
  let s = 0, a = !1, d = "0";
  const f = () => {
    setTimeout(() => {
      typeof document > "u" || a && document && (document.body.style.width = d, ke(document.body, c.value));
    }, 200);
  };
  P(e, (i) => {
    if (!i) {
      f();
      return;
    }
    a = !x(document.body, c.value), a && (d = document.body.style.width, Te(document.body, c.value)), s = we(r.namespace.value);
    const t = document.documentElement.clientHeight < document.body.scrollHeight, v = Se(document.body, "overflowY");
    s > 0 && (t || v === "scroll") && a && (document.body.style.width = `calc(100% - ${s}px)`);
  }), Ve(() => f());
}, uo = (e, n) => {
  var r;
  const s = ze().emit, { nextZIndex: a } = De();
  let d = "";
  const f = ee(), i = ee(), t = w(!1), v = w(!1), y = w(!1), C = w((r = e.zIndex) != null ? r : a());
  let m, p;
  const h = Be("namespace", Le), u = S(() => {
    const E = {}, O = `--${h.value}-dialog`;
    return e.fullscreen || (e.top && (E[`${O}-margin-top`] = e.top), e.width && (E[`${O}-width`] = F(e.width))), E;
  }), _ = S(() => e.alignCenter ? { display: "flex" } : {});
  function k() {
    s("opened");
  }
  function H() {
    s("closed"), s(ne, !1), e.destroyOnClose && (y.value = !1);
  }
  function U() {
    s("close");
  }
  function R() {
    p?.(), m?.(), e.openDelay && e.openDelay > 0 ? { stop: m } = oe(() => M(), e.openDelay) : M();
  }
  function D() {
    m?.(), p?.(), e.closeDelay && e.closeDelay > 0 ? { stop: p } = oe(() => A(), e.closeDelay) : A();
  }
  function B() {
    function E(O) {
      O || (v.value = !0, t.value = !1);
    }
    e.beforeClose ? e.beforeClose(E) : D();
  }
  function L() {
    e.closeOnClickModal && B();
  }
  function M() {
    ae && (t.value = !0);
  }
  function A() {
    t.value = !1;
  }
  function l() {
    s("openAutoFocus");
  }
  function I() {
    s("closeAutoFocus");
  }
  function V(E) {
    var O;
    ((O = E.detail) == null ? void 0 : O.focusReason) === "pointer" && E.preventDefault();
  }
  e.lockScroll && io(t);
  function ve() {
    e.closeOnPressEscape && B();
  }
  return P(() => e.modelValue, (E) => {
    E ? (v.value = !1, R(), y.value = !0, C.value = Me(e.zIndex) ? a() : C.value++, He(() => {
      s("open"), n.value && (n.value.parentElement.scrollTop = 0, n.value.parentElement.scrollLeft = 0, n.value.scrollTop = 0);
    })) : t.value && D();
  }), P(() => e.fullscreen, (E) => {
    n.value && (E ? (d = n.value.style.transform, n.value.style.transform = "") : n.value.style.transform = d);
  }), re(() => {
    e.modelValue && (t.value = !0, y.value = !0, R());
  }), {
    afterEnter: k,
    afterLeave: H,
    beforeLeave: U,
    handleClose: B,
    onModalClick: L,
    close: D,
    doClose: A,
    onOpenAutoFocus: l,
    onCloseAutoFocus: I,
    onCloseRequested: ve,
    onFocusoutPrevented: V,
    titleId: f,
    bodyId: i,
    closed: v,
    style: u,
    overlayDialogStyle: _,
    rendered: y,
    visible: t,
    zIndex: C
  };
}, co = z({
  name: "ElDialog",
  inheritAttrs: !1
}), fo = /* @__PURE__ */ z({
  ...co,
  props: ao,
  emits: ro,
  setup(e, { expose: n }) {
    const r = e, c = Ue();
    Fe({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, S(() => !!c.title));
    const s = Q("dialog"), a = w(), d = w(), f = w(), {
      visible: i,
      titleId: t,
      bodyId: v,
      style: y,
      overlayDialogStyle: C,
      rendered: m,
      zIndex: p,
      afterEnter: h,
      afterLeave: u,
      beforeLeave: _,
      handleClose: k,
      onModalClick: H,
      onOpenAutoFocus: U,
      onCloseAutoFocus: R,
      onCloseRequested: D,
      onFocusoutPrevented: B
    } = uo(r, a);
    Pe(fe, {
      dialogRef: a,
      headerRef: d,
      bodyId: v,
      ns: s,
      rendered: m,
      style: y
    });
    const L = ce(H), M = S(() => r.draggable && !r.fullscreen);
    return n({
      visible: i,
      dialogContentRef: f,
      resetPosition: () => {
        var l;
        (l = f.value) == null || l.resetPosition();
      }
    }), (l, I) => ($(), q(o(Ie), {
      to: l.appendTo,
      disabled: l.appendTo !== "body" ? !1 : !l.appendToBody
    }, {
      default: b(() => [
        N(Xe, {
          name: "dialog-fade",
          onAfterEnter: o(h),
          onAfterLeave: o(u),
          onBeforeLeave: o(_),
          persisted: ""
        }, {
          default: b(() => [
            Ke(N(o(eo), {
              "custom-mask-event": "",
              mask: l.modal,
              "overlay-class": l.modalClass,
              "z-index": o(p)
            }, {
              default: b(() => [
                Y("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": l.title || void 0,
                  "aria-labelledby": l.title ? void 0 : o(t),
                  "aria-describedby": o(v),
                  class: T(`${o(s).namespace.value}-overlay-dialog`),
                  style: ie(o(C)),
                  onClick: o(L).onClick,
                  onMousedown: o(L).onMousedown,
                  onMouseup: o(L).onMouseup
                }, [
                  N(o(Ae), {
                    loop: "",
                    trapped: o(i),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: o(U),
                    onFocusAfterReleased: o(R),
                    onFocusoutPrevented: o(B),
                    onReleaseRequested: o(D)
                  }, {
                    default: b(() => [
                      o(m) ? ($(), q(no, qe({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: f
                      }, l.$attrs, {
                        center: l.center,
                        "align-center": l.alignCenter,
                        "close-icon": l.closeIcon,
                        draggable: o(M),
                        overflow: l.overflow,
                        fullscreen: l.fullscreen,
                        "header-class": l.headerClass,
                        "body-class": l.bodyClass,
                        "footer-class": l.footerClass,
                        "show-close": l.showClose,
                        title: l.title,
                        "aria-level": l.headerAriaLevel,
                        onClose: o(k)
                      }), ue({
                        header: b(() => [
                          l.$slots.title ? g(l.$slots, "title", { key: 1 }) : g(l.$slots, "header", {
                            key: 0,
                            close: o(k),
                            titleId: o(t),
                            titleClass: o(s).e("title")
                          })
                        ]),
                        default: b(() => [
                          g(l.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        l.$slots.footer ? {
                          name: "footer",
                          fn: b(() => [
                            g(l.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : j("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [Ge, o(i)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var mo = /* @__PURE__ */ se(fo, [["__file", "dialog.vue"]]);
const vo = Oe(mo), po = { class: "dialog-footer-default" }, yo = { class: "footer-left" }, Co = { class: "footer-right" }, bo = /* @__PURE__ */ z({
  __name: "CommonDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "" },
    width: { default: "540px" },
    closeOnClickModal: { type: Boolean, default: !1 },
    draggable: { type: Boolean, default: !0 },
    center: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    showDefaultFooter: { type: Boolean, default: !1 },
    confirmText: { default: "确定" },
    cancelText: { default: "取消" },
    loading: { type: Boolean, default: !1 },
    customClass: { default: "" }
  },
  emits: ["update:modelValue", "confirm", "cancel", "close"],
  setup(e, { expose: n, emit: r }) {
    const c = e, s = r, a = w(c.modelValue);
    P(
      () => c.modelValue,
      (t) => {
        a.value = t;
      }
    ), P(a, (t) => {
      s("update:modelValue", t);
    });
    const d = () => {
      s("close");
    }, f = () => {
      s("confirm");
    }, i = () => {
      a.value = !1, s("cancel");
    };
    return n({
      open: () => {
        a.value = !0;
      },
      close: () => {
        a.value = !1;
      }
    }), (t, v) => {
      const y = je, C = vo;
      return $(), q(C, {
        modelValue: o(a),
        "onUpdate:modelValue": v[0] || (v[0] = (m) => de(a) ? a.value = m : null),
        title: t.title,
        width: t.width,
        "close-on-click-modal": t.closeOnClickModal,
        draggable: t.draggable,
        center: t.center,
        "show-close": t.showClose,
        "custom-class": t.customClass,
        onClose: d
      }, ue({
        default: b(() => [
          g(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        t.$slots.header ? {
          name: "header",
          fn: b(() => [
            g(t.$slots, "header", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        t.$slots.footer || t.showDefaultFooter ? {
          name: "footer",
          fn: b(() => [
            g(t.$slots, "footer", {}, () => [
              Y("div", po, [
                Y("div", yo, [
                  g(t.$slots, "footer-left", {}, void 0, !0)
                ]),
                Y("div", Co, [
                  N(y, { onClick: i }, {
                    default: b(() => [
                      le(
                        Z(t.cancelText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  N(y, {
                    type: "primary",
                    loading: t.loading,
                    onClick: f
                  }, {
                    default: b(() => [
                      le(
                        Z(t.confirmText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ])
            ], !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["modelValue", "title", "width", "close-on-click-modal", "draggable", "center", "show-close", "custom-class"]);
    };
  }
}), wo = /* @__PURE__ */ $e(bo, [["__scopeId", "data-v-b43b7f03"]]);
export {
  wo as C
};
