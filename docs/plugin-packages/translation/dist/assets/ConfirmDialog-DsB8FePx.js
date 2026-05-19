import { $ as W, d as Y, c as D, Q as Ce, g, f as ae, U as be, a0 as ge, C as oe, k as E, a as Z, o as w, q as S, e as q, n as B, u as o, s as H, v, b as X, y as he, B as re, x as Q, w as _, N as Ee, D as we, r as T, l as Te, ar as Se, Z as ke, a3 as Be, a1 as De, m as Le, an as ie, a2 as Me, R as j } from "./runtime-entry-kBP_wtmk.js";
import { b as x, u as ee, d as F, b9 as Ae, b3 as J, _ as de, Z as Ie, bh as $e, v as Oe, bf as Ne, aX as Ve, U as ue, a7 as _e, bi as ce, ap as te, bj as Ye, bk as Re, am as ze, bl as Ue, bm as He, b1 as le, bn as Xe, bo as Pe, bp as Ke, bq as se, br as je, bs as Ge, w as qe, k as fe } from "./_plugin-vue_export-helper-Bux2Si-R.js";
import { C as ne } from "./index-CloiE8PS.js";
import { c as Fe, u as We, E as Ze } from "./refs-DHH6g95I.js";
var G = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(G || {});
const me = (e) => {
  if (!e)
    return { onClick: W, onMousedown: W, onMouseup: W };
  let r = !1, i = !1;
  return { onClick: (u) => {
    r && i && e(u), r = i = !1;
  }, onMousedown: (u) => {
    r = u.target === u.currentTarget;
  }, onMouseup: (u) => {
    i = u.target === u.currentTarget;
  } };
}, Je = x({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: F([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: F([String, Number])
  }
}), Qe = {
  click: (e) => e instanceof MouseEvent
}, xe = "overlay";
var eo = Y({
  name: "ElOverlay",
  props: Je,
  emits: Qe,
  setup(e, { slots: r, emit: i }) {
    const c = ee(xe), n = (d) => {
      i("click", d);
    }, { onClick: l, onMousedown: u, onMouseup: m } = me(e.customMaskEvent ? void 0 : n);
    return () => e.mask ? D("div", {
      class: [c.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: l,
      onMousedown: u,
      onMouseup: m
    }, [g(r, "default")], G.STYLE | G.CLASS | G.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Ce("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [g(r, "default")]);
  }
});
const oo = eo, ve = Symbol("dialogInjectionKey"), pe = x({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: Ae
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
}), to = {
  close: () => !0
}, lo = (e, r, i, c) => {
  let n = {
    offsetX: 0,
    offsetY: 0
  };
  const l = (t) => {
    const s = t.clientX, p = t.clientY, { offsetX: C, offsetY: y } = n, b = e.value.getBoundingClientRect(), k = b.left, f = b.top, R = b.width, L = b.height, P = document.documentElement.clientWidth, K = document.documentElement.clientHeight, z = -k + C, M = -f + y, A = P - k - R + C, I = K - f - L + y, $ = (a) => {
      let N = C + a.clientX - s, U = y + a.clientY - p;
      c?.value || (N = Math.min(Math.max(N, z), A), U = Math.min(Math.max(U, M), I)), n = {
        offsetX: N,
        offsetY: U
      }, e.value && (e.value.style.transform = `translate(${J(N)}, ${J(U)})`);
    }, O = () => {
      document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", O);
    };
    document.addEventListener("mousemove", $), document.addEventListener("mouseup", O);
  }, u = () => {
    r.value && e.value && r.value.addEventListener("mousedown", l);
  }, m = () => {
    r.value && e.value && r.value.removeEventListener("mousedown", l);
  }, d = () => {
    n = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return ae(() => {
    be(() => {
      i.value ? u() : m();
    });
  }), ge(() => {
    m();
  }), {
    resetPosition: d
  };
}, so = Y({ name: "ElDialogContent" }), no = /* @__PURE__ */ Y({
  ...so,
  props: pe,
  emits: to,
  setup(e, { expose: r }) {
    const i = e, { t: c } = Ie(), { Close: n } = $e, { dialogRef: l, headerRef: u, bodyId: m, ns: d, style: t } = oe(ve), { focusTrapRef: s } = oe(Ne), p = E(() => [
      d.b(),
      d.is("fullscreen", i.fullscreen),
      d.is("draggable", i.draggable),
      d.is("align-center", i.alignCenter),
      { [d.m("center")]: i.center }
    ]), C = Fe(s, l), y = E(() => i.draggable), b = E(() => i.overflow), { resetPosition: k } = lo(l, u, y, b);
    return r({
      resetPosition: k
    }), (f, R) => (w(), Z("div", {
      ref: o(C),
      class: B(o(p)),
      style: re(o(t)),
      tabindex: "-1"
    }, [
      S("header", {
        ref_key: "headerRef",
        ref: u,
        class: B([o(d).e("header"), f.headerClass, { "show-close": f.showClose }])
      }, [
        g(f.$slots, "header", {}, () => [
          S("span", {
            role: "heading",
            "aria-level": f.ariaLevel,
            class: B(o(d).e("title"))
          }, H(f.title), 11, ["aria-level"])
        ]),
        f.showClose ? (w(), Z("button", {
          key: 0,
          "aria-label": o(c)("el.dialog.close"),
          class: B(o(d).e("headerbtn")),
          type: "button",
          onClick: (L) => f.$emit("close")
        }, [
          D(o(Oe), {
            class: B(o(d).e("close"))
          }, {
            default: v(() => [
              (w(), X(he(f.closeIcon || o(n))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : q("v-if", !0)
      ], 2),
      S("div", {
        id: o(m),
        class: B([o(d).e("body"), f.bodyClass])
      }, [
        g(f.$slots, "default")
      ], 10, ["id"]),
      f.$slots.footer ? (w(), Z("footer", {
        key: 0,
        class: B([o(d).e("footer"), f.footerClass])
      }, [
        g(f.$slots, "footer")
      ], 2)) : q("v-if", !0)
    ], 6));
  }
});
var ao = /* @__PURE__ */ de(no, [["__file", "dialog-content.vue"]]);
const ro = x({
  ...pe,
  appendToBody: Boolean,
  appendTo: {
    type: F([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: F(Function)
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
}), io = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [ue]: (e) => Ve(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, uo = (e, r = {}) => {
  Q(e) || _e("[useLockscreen]", "You need to pass a ref param to this function");
  const i = r.ns || ee("popup"), c = E(() => i.bm("parent", "hidden"));
  if (!ce || te(document.body, c.value))
    return;
  let n = 0, l = !1, u = "0";
  const m = () => {
    setTimeout(() => {
      typeof document > "u" || l && document && (document.body.style.width = u, Ue(document.body, c.value));
    }, 200);
  };
  _(e, (d) => {
    if (!d) {
      m();
      return;
    }
    l = !te(document.body, c.value), l && (u = document.body.style.width, Ye(document.body, c.value)), n = Re(i.namespace.value);
    const t = document.documentElement.clientHeight < document.body.scrollHeight, s = ze(document.body, "overflowY");
    n > 0 && (t || s === "scroll") && l && (document.body.style.width = `calc(100% - ${n}px)`);
  }), Ee(() => m());
}, co = (e, r) => {
  var i;
  const n = we().emit, { nextZIndex: l } = He();
  let u = "";
  const m = le(), d = le(), t = T(!1), s = T(!1), p = T(!1), C = T((i = e.zIndex) != null ? i : l());
  let y, b;
  const k = Xe("namespace", Pe), f = E(() => {
    const h = {}, V = `--${k.value}-dialog`;
    return e.fullscreen || (e.top && (h[`${V}-margin-top`] = e.top), e.width && (h[`${V}-width`] = J(e.width))), h;
  }), R = E(() => e.alignCenter ? { display: "flex" } : {});
  function L() {
    n("opened");
  }
  function P() {
    n("closed"), n(ue, !1), e.destroyOnClose && (p.value = !1);
  }
  function K() {
    n("close");
  }
  function z() {
    b?.(), y?.(), e.openDelay && e.openDelay > 0 ? { stop: y } = se(() => $(), e.openDelay) : $();
  }
  function M() {
    y?.(), b?.(), e.closeDelay && e.closeDelay > 0 ? { stop: b } = se(() => O(), e.closeDelay) : O();
  }
  function A() {
    function h(V) {
      V || (s.value = !0, t.value = !1);
    }
    e.beforeClose ? e.beforeClose(h) : M();
  }
  function I() {
    e.closeOnClickModal && A();
  }
  function $() {
    ce && (t.value = !0);
  }
  function O() {
    t.value = !1;
  }
  function a() {
    n("openAutoFocus");
  }
  function N() {
    n("closeAutoFocus");
  }
  function U(h) {
    var V;
    ((V = h.detail) == null ? void 0 : V.focusReason) === "pointer" && h.preventDefault();
  }
  e.lockScroll && uo(t);
  function ye() {
    e.closeOnPressEscape && A();
  }
  return _(() => e.modelValue, (h) => {
    h ? (s.value = !1, z(), p.value = !0, C.value = Ke(e.zIndex) ? l() : C.value++, Te(() => {
      n("open"), r.value && (r.value.parentElement.scrollTop = 0, r.value.parentElement.scrollLeft = 0, r.value.scrollTop = 0);
    })) : t.value && M();
  }), _(() => e.fullscreen, (h) => {
    r.value && (h ? (u = r.value.style.transform, r.value.style.transform = "") : r.value.style.transform = u);
  }), ae(() => {
    e.modelValue && (t.value = !0, p.value = !0, z());
  }), {
    afterEnter: L,
    afterLeave: P,
    beforeLeave: K,
    handleClose: A,
    onModalClick: I,
    close: M,
    doClose: O,
    onOpenAutoFocus: a,
    onCloseAutoFocus: N,
    onCloseRequested: ye,
    onFocusoutPrevented: U,
    titleId: m,
    bodyId: d,
    closed: s,
    style: f,
    overlayDialogStyle: R,
    rendered: p,
    visible: t,
    zIndex: C
  };
}, fo = Y({
  name: "ElDialog",
  inheritAttrs: !1
}), mo = /* @__PURE__ */ Y({
  ...fo,
  props: ro,
  emits: io,
  setup(e, { expose: r }) {
    const i = e, c = Se();
    We({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, E(() => !!c.title));
    const n = ee("dialog"), l = T(), u = T(), m = T(), {
      visible: d,
      titleId: t,
      bodyId: s,
      style: p,
      overlayDialogStyle: C,
      rendered: y,
      zIndex: b,
      afterEnter: k,
      afterLeave: f,
      beforeLeave: R,
      handleClose: L,
      onModalClick: P,
      onOpenAutoFocus: K,
      onCloseAutoFocus: z,
      onCloseRequested: M,
      onFocusoutPrevented: A
    } = co(i, l);
    ke(ve, {
      dialogRef: l,
      headerRef: u,
      bodyId: s,
      ns: n,
      rendered: y,
      style: p
    });
    const I = me(P), $ = E(() => i.draggable && !i.fullscreen);
    return r({
      visible: d,
      dialogContentRef: m,
      resetPosition: () => {
        var a;
        (a = m.value) == null || a.resetPosition();
      }
    }), (a, N) => (w(), X(o(Ge), {
      to: a.appendTo,
      disabled: a.appendTo !== "body" ? !1 : !a.appendToBody
    }, {
      default: v(() => [
        D(Be, {
          name: "dialog-fade",
          onAfterEnter: o(k),
          onAfterLeave: o(f),
          onBeforeLeave: o(R),
          persisted: ""
        }, {
          default: v(() => [
            De(D(o(oo), {
              "custom-mask-event": "",
              mask: a.modal,
              "overlay-class": a.modalClass,
              "z-index": o(b)
            }, {
              default: v(() => [
                S("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": a.title || void 0,
                  "aria-labelledby": a.title ? void 0 : o(t),
                  "aria-describedby": o(s),
                  class: B(`${o(n).namespace.value}-overlay-dialog`),
                  style: re(o(C)),
                  onClick: o(I).onClick,
                  onMousedown: o(I).onMousedown,
                  onMouseup: o(I).onMouseup
                }, [
                  D(o(je), {
                    loop: "",
                    trapped: o(d),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: o(K),
                    onFocusAfterReleased: o(z),
                    onFocusoutPrevented: o(A),
                    onReleaseRequested: o(M)
                  }, {
                    default: v(() => [
                      o(y) ? (w(), X(ao, Le({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: m
                      }, a.$attrs, {
                        center: a.center,
                        "align-center": a.alignCenter,
                        "close-icon": a.closeIcon,
                        draggable: o($),
                        overflow: a.overflow,
                        fullscreen: a.fullscreen,
                        "header-class": a.headerClass,
                        "body-class": a.bodyClass,
                        "footer-class": a.footerClass,
                        "show-close": a.showClose,
                        title: a.title,
                        "aria-level": a.headerAriaLevel,
                        onClose: o(L)
                      }), ie({
                        header: v(() => [
                          a.$slots.title ? g(a.$slots, "title", { key: 1 }) : g(a.$slots, "header", {
                            key: 0,
                            close: o(L),
                            titleId: o(t),
                            titleClass: o(n).e("title")
                          })
                        ]),
                        default: v(() => [
                          g(a.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        a.$slots.footer ? {
                          name: "footer",
                          fn: v(() => [
                            g(a.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : q("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [Me, o(d)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var vo = /* @__PURE__ */ de(mo, [["__file", "dialog.vue"]]);
const po = qe(vo), yo = { class: "dialog-footer-default" }, Co = { class: "footer-left" }, bo = { class: "footer-right" }, go = /* @__PURE__ */ Y({
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
  setup(e, { expose: r, emit: i }) {
    const c = e, n = i, l = T(c.modelValue);
    _(
      () => c.modelValue,
      (t) => {
        l.value = t;
      }
    ), _(l, (t) => {
      n("update:modelValue", t);
    });
    const u = () => {
      n("close");
    }, m = () => {
      n("confirm");
    }, d = () => {
      l.value = !1, n("cancel");
    };
    return r({
      open: () => {
        l.value = !0;
      },
      close: () => {
        l.value = !1;
      }
    }), (t, s) => {
      const p = Ze, C = po;
      return w(), X(C, {
        modelValue: o(l),
        "onUpdate:modelValue": s[0] || (s[0] = (y) => Q(l) ? l.value = y : null),
        title: t.title,
        width: t.width,
        "close-on-click-modal": t.closeOnClickModal,
        draggable: t.draggable,
        center: t.center,
        "show-close": t.showClose,
        "custom-class": t.customClass,
        onClose: u
      }, ie({
        default: v(() => [
          g(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        t.$slots.header ? {
          name: "header",
          fn: v(() => [
            g(t.$slots, "header", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        t.$slots.footer || t.showDefaultFooter ? {
          name: "footer",
          fn: v(() => [
            g(t.$slots, "footer", {}, () => [
              S("div", yo, [
                S("div", Co, [
                  g(t.$slots, "footer-left", {}, void 0, !0)
                ]),
                S("div", bo, [
                  D(p, { onClick: d }, {
                    default: v(() => [
                      j(
                        H(t.cancelText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  D(p, {
                    type: "primary",
                    loading: t.loading,
                    onClick: m
                  }, {
                    default: v(() => [
                      j(
                        H(t.confirmText),
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
}), ho = /* @__PURE__ */ fe(go, [["__scopeId", "data-v-b43b7f03"]]), Eo = { class: "confirm-content" }, wo = { class: "confirm-footer" }, To = /* @__PURE__ */ Y({
  __name: "ConfirmDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "提示" },
    message: { default: "" },
    width: { default: "420px" },
    center: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    showCancelButton: { type: Boolean, default: !0 },
    confirmText: { default: "确定" },
    cancelText: { default: "取消" },
    loading: { type: Boolean, default: !1 },
    type: { default: "info" }
  },
  emits: ["update:modelValue", "confirm", "cancel"],
  setup(e, { expose: r, emit: i }) {
    const c = e, n = i, l = T(c.modelValue), u = E(() => {
      const s = ["confirm-dialog"];
      return c.type === "warning" ? s.push("warning-dialog") : c.type === "danger" && s.push("delete-dialog"), s.join(" ");
    }), m = E(() => c.type === "danger" ? "danger" : c.type === "warning" ? "warning" : "primary");
    _(
      () => c.modelValue,
      (s) => {
        l.value = s;
      }
    ), _(l, (s) => {
      n("update:modelValue", s);
    });
    const d = () => {
      n("confirm");
    }, t = () => {
      l.value = !1, n("cancel");
    };
    return r({
      open: () => {
        l.value = !0;
      },
      close: () => {
        l.value = !1;
      }
    }), (s, p) => (w(), X(ho, {
      modelValue: o(l),
      "onUpdate:modelValue": p[0] || (p[0] = (C) => Q(l) ? l.value = C : null),
      title: s.title,
      width: s.width,
      center: s.center,
      "show-close": s.showClose,
      "custom-class": o(u)
    }, {
      footer: v(() => [
        S("div", wo, [
          s.showCancelButton ? (w(), X(ne, {
            key: 0,
            type: "default",
            onClick: t
          }, {
            default: v(() => [
              j(
                H(s.cancelText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : q("v-if", !0),
          D(ne, {
            type: o(m),
            loading: s.loading,
            onClick: d
          }, {
            default: v(() => [
              j(
                H(s.confirmText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type", "loading"])
        ])
      ]),
      default: v(() => [
        S("div", Eo, [
          g(s.$slots, "default", {}, () => [
            j(
              H(s.message),
              1
              /* TEXT */
            )
          ], !0)
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["modelValue", "title", "width", "center", "show-close", "custom-class"]));
  }
}), Lo = /* @__PURE__ */ fe(To, [["__scopeId", "data-v-a7cd89fa"]]);
export {
  ho as C,
  Lo as a
};
