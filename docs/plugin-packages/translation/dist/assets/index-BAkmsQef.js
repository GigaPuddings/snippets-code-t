import { i as H, T as re, b as Ue, U as ne, V as fe, W as Fe, X as Oe, Y as We, _ as je, Z as He, u as Re, $ as Ke, a as ce, a0 as we, a1 as Ze, a2 as Ye, a3 as qe, a4 as Xe, v as $e, a5 as Je, a6 as Qe, a7 as et, w as tt, k as ke, E as Be, j as xe, e as st, l as O, m as P } from "./_plugin-vue_export-helper-CKv_N83a.js";
import { I as De, c as V, d as le, r as F, G as nt, k as x, w as ae, f as Ae, a5 as at, a as S, o as c, a1 as Ne, e as p, u as e, ag as de, n as R, g as me, v as D, b as W, an as lt, ac as ge, A as it, q as l, s as d, x as ue, F as j, h as ye, R as q, a3 as ot, a9 as rt } from "./runtime-entry-DtonpMUQ.js";
import { C as pe } from "./index-B8KhMUii.js";
import { C as ut } from "./CommonDialog-Cm6GvLRI.js";
import { u as ct, r as dt, s as ze, g as mt, a as Ge, b as Ie, c as Te, d as ft, e as gt } from "./useGitStatus-D6elna5O.js";
import { L as yt } from "./Loading-pBEcsFTC.js";
import { E as pt, i as vt } from "./index-CBrV9NHe.js";
import { v as Ee } from "./index-DBpMcFed.js";
import { C as ht } from "./CloseSmall-CWp-d5xH.js";
const bt = De("attention", !0, function(a) {
  return V("svg", {
    width: a.size,
    height: a.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [V("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: a.colors[1],
    stroke: a.colors[0],
    "stroke-width": a.strokeWidth,
    "stroke-linejoin": a.strokeLinejoin
  }, null), V("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z",
    fill: a.colors[2]
  }, null), V("path", {
    d: "M24 12V28",
    stroke: a.colors[2],
    "stroke-width": a.strokeWidth,
    "stroke-linecap": a.strokeLinecap,
    "stroke-linejoin": a.strokeLinejoin
  }, null)]);
}), _t = De("check-one", !0, function(a) {
  return V("svg", {
    width: a.size,
    height: a.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [V("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: a.colors[1],
    stroke: a.colors[0],
    "stroke-width": a.strokeWidth,
    "stroke-linejoin": a.strokeLinejoin
  }, null), V("path", {
    d: "M16 24L22 30L34 18",
    stroke: a.colors[2],
    "stroke-width": a.strokeWidth,
    "stroke-linecap": a.strokeLinecap,
    "stroke-linejoin": a.strokeLinejoin
  }, null)]);
}), St = Ue({
  id: {
    type: String,
    default: void 0
  },
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: Boolean,
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY
  },
  modelValue: Number,
  readonly: Boolean,
  disabled: Boolean,
  size: We,
  controls: {
    type: Boolean,
    default: !0
  },
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  valueOnClear: {
    type: [String, Number, null],
    validator: (a) => a === null || H(a) || ["min", "max"].includes(a),
    default: null
  },
  name: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (a) => a >= 0 && a === Number.parseInt(`${a}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...Oe(["ariaLabel"])
}), wt = {
  [Fe]: (a, n) => n !== a,
  blur: (a) => a instanceof FocusEvent,
  focus: (a) => a instanceof FocusEvent,
  [fe]: (a) => H(a) || re(a),
  [ne]: (a) => H(a) || re(a)
}, Vt = le({
  name: "ElInputNumber"
}), kt = /* @__PURE__ */ le({
  ...Vt,
  props: St,
  emits: wt,
  setup(a, { expose: n, emit: m }) {
    const o = a, { t: I } = He(), u = Re("input-number"), w = F(), v = nt({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: A } = Ke(), b = x(() => H(o.modelValue) && o.modelValue <= o.min), h = x(() => H(o.modelValue) && o.modelValue >= o.max), k = x(() => {
      const s = B(o.step);
      return ce(o.precision) ? Math.max(B(o.modelValue), s) : (s > o.precision && we("InputNumber", "precision should not be less than the decimal places of step"), o.precision);
    }), T = x(() => o.controls && o.controlsPosition === "right"), y = Ze(), $ = Ye(), G = x(() => {
      if (v.userInput !== null)
        return v.userInput;
      let s = v.currentValue;
      if (re(s))
        return "";
      if (H(s)) {
        if (Number.isNaN(s))
          return "";
        ce(o.precision) || (s = s.toFixed(o.precision));
      }
      return s;
    }), N = (s, r) => {
      if (ce(r) && (r = k.value), r === 0)
        return Math.round(s);
      let f = String(s);
      const _ = f.indexOf(".");
      if (_ === -1 || !f.replace(".", "").split("")[_ + r])
        return s;
      const te = f.length;
      return f.charAt(te - 1) === "5" && (f = `${f.slice(0, Math.max(0, te - 1))}6`), Number.parseFloat(Number(f).toFixed(r));
    }, B = (s) => {
      if (re(s))
        return 0;
      const r = s.toString(), f = r.indexOf(".");
      let _ = 0;
      return f !== -1 && (_ = r.length - f - 1), _;
    }, K = (s, r = 1) => H(s) ? N(s + o.step * r) : v.currentValue, L = () => {
      if (o.readonly || $.value || h.value)
        return;
      const s = Number(G.value) || 0, r = K(s);
      Q(r), m(fe, v.currentValue), ee();
    }, Z = () => {
      if (o.readonly || $.value || b.value)
        return;
      const s = Number(G.value) || 0, r = K(s, -1);
      Q(r), m(fe, v.currentValue), ee();
    }, X = (s, r) => {
      const { max: f, min: _, step: C, precision: M, stepStrictly: te, valueOnClear: se } = o;
      f < _ && et("InputNumber", "min should not be greater than max.");
      let E = Number(s);
      if (re(s) || Number.isNaN(E))
        return null;
      if (s === "") {
        if (se === null)
          return null;
        E = it(se) ? { min: _, max: f }[se] : se;
      }
      return te && (E = N(Math.round(E / C) * C, M), E !== s && r && m(ne, E)), ce(M) || (E = N(E, M)), (E > f || E < _) && (E = E > f ? f : _, r && m(ne, E)), E;
    }, Q = (s, r = !0) => {
      var f;
      const _ = v.currentValue, C = X(s);
      if (!r) {
        m(ne, C);
        return;
      }
      _ === C && s || (v.userInput = null, m(ne, C), _ !== C && m(Fe, C, _), o.validateEvent && ((f = A?.validate) == null || f.call(A, "change").catch((M) => we(M))), v.currentValue = C);
    }, ve = (s) => {
      v.userInput = s;
      const r = s === "" ? null : Number(s);
      m(fe, r), Q(r, !1);
    }, he = (s) => {
      const r = s !== "" ? Number(s) : "";
      (H(r) && !Number.isNaN(r) || s === "") && Q(r), ee(), v.userInput = null;
    }, J = () => {
      var s, r;
      (r = (s = w.value) == null ? void 0 : s.focus) == null || r.call(s);
    }, ie = () => {
      var s, r;
      (r = (s = w.value) == null ? void 0 : s.blur) == null || r.call(s);
    }, be = (s) => {
      m("focus", s);
    }, _e = (s) => {
      var r, f;
      v.userInput = null, vt() && v.currentValue === null && ((r = w.value) != null && r.input) && (w.value.input.value = ""), m("blur", s), o.validateEvent && ((f = A?.validate) == null || f.call(A, "blur").catch((_) => we(_)));
    }, ee = () => {
      v.currentValue !== o.modelValue && (v.currentValue = o.modelValue);
    }, Se = (s) => {
      document.activeElement === s.target && s.preventDefault();
    };
    return ae(() => o.modelValue, (s, r) => {
      const f = X(s, !0);
      v.userInput === null && f !== r && (v.currentValue = f);
    }, { immediate: !0 }), Ae(() => {
      var s;
      const { min: r, max: f, modelValue: _ } = o, C = (s = w.value) == null ? void 0 : s.input;
      if (C.setAttribute("role", "spinbutton"), Number.isFinite(f) ? C.setAttribute("aria-valuemax", String(f)) : C.removeAttribute("aria-valuemax"), Number.isFinite(r) ? C.setAttribute("aria-valuemin", String(r)) : C.removeAttribute("aria-valuemin"), C.setAttribute("aria-valuenow", v.currentValue || v.currentValue === 0 ? String(v.currentValue) : ""), C.setAttribute("aria-disabled", String($.value)), !H(_) && _ != null) {
        let M = Number(_);
        Number.isNaN(M) && (M = null), m(ne, M);
      }
      C.addEventListener("wheel", Se, { passive: !1 });
    }), at(() => {
      var s, r;
      const f = (s = w.value) == null ? void 0 : s.input;
      f?.setAttribute("aria-valuenow", `${(r = v.currentValue) != null ? r : ""}`);
    }), n({
      focus: J,
      blur: ie
    }), (s, r) => (c(), S("div", {
      class: R([
        e(u).b(),
        e(u).m(e(y)),
        e(u).is("disabled", e($)),
        e(u).is("without-controls", !s.controls),
        e(u).is("controls-right", e(T))
      ]),
      onDragstart: ge(() => {
      }, ["prevent"])
    }, [
      s.controls ? Ne((c(), S("span", {
        key: 0,
        role: "button",
        "aria-label": e(I)("el.inputNumber.decrease"),
        class: R([e(u).e("decrease"), e(u).is("disabled", e(b))]),
        onKeydown: de(Z, ["enter"])
      }, [
        me(s.$slots, "decrease-icon", {}, () => [
          V(e($e), null, {
            default: D(() => [
              e(T) ? (c(), W(e(qe), { key: 0 })) : (c(), W(e(Xe), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [e(Ee), Z]
      ]) : p("v-if", !0),
      s.controls ? Ne((c(), S("span", {
        key: 1,
        role: "button",
        "aria-label": e(I)("el.inputNumber.increase"),
        class: R([e(u).e("increase"), e(u).is("disabled", e(h))]),
        onKeydown: de(L, ["enter"])
      }, [
        me(s.$slots, "increase-icon", {}, () => [
          V(e($e), null, {
            default: D(() => [
              e(T) ? (c(), W(e(Je), { key: 0 })) : (c(), W(e(Qe), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [e(Ee), L]
      ]) : p("v-if", !0),
      V(e(pt), {
        id: s.id,
        ref_key: "input",
        ref: w,
        type: "number",
        step: s.step,
        "model-value": e(G),
        placeholder: s.placeholder,
        readonly: s.readonly,
        disabled: e($),
        size: e(y),
        max: s.max,
        min: s.min,
        name: s.name,
        "aria-label": s.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          de(ge(L, ["prevent"]), ["up"]),
          de(ge(Z, ["prevent"]), ["down"])
        ],
        onBlur: _e,
        onFocus: be,
        onInput: ve,
        onChange: he
      }, lt({
        _: 2
      }, [
        s.$slots.prefix ? {
          name: "prefix",
          fn: D(() => [
            me(s.$slots, "prefix")
          ])
        } : void 0,
        s.$slots.suffix ? {
          name: "suffix",
          fn: D(() => [
            me(s.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Ct = /* @__PURE__ */ je(kt, [["__file", "input-number.vue"]]);
const $t = tt(Ct), Nt = /* @__PURE__ */ le({
  name: "CustomSwitch",
  __name: "CustomSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: "#4b94f8"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: n }) {
    const m = a, o = n, I = () => {
      if (m.disabled) return;
      const u = !m.modelValue;
      o("update:modelValue", u), o("change", u);
    };
    return (u, w) => (c(), S(
      "div",
      {
        class: R(["custom-switch", {
          "custom-switch--active": a.modelValue,
          "custom-switch--disabled": a.disabled
        }]),
        onClick: I
      },
      [
        a.activeText || a.inactiveText ? (c(), S(
          "span",
          {
            key: 0,
            class: R(["custom-switch__text", { "custom-switch__text--active": a.modelValue }])
          },
          d(a.modelValue ? a.activeText : a.inactiveText),
          3
          /* TEXT, CLASS */
        )) : p("v-if", !0),
        w[0] || (w[0] = l(
          "div",
          { class: "custom-switch__core" },
          [
            l("div", { class: "custom-switch__handle" })
          ],
          -1
          /* HOISTED */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), Ve = /* @__PURE__ */ ke(Nt, [["__scopeId", "data-v-09573d1e"]]), zt = { class: "select-confirm-content" }, Gt = { class: "mb-4" }, It = { class: "select-confirm-footer" }, Tt = /* @__PURE__ */ le({
  __name: "SelectConfirmDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "提示" },
    message: { default: "" },
    options: { default: () => [] },
    defaultValue: { default: "" },
    selectPlaceholder: { default: "请选择" },
    width: { default: "420px" },
    center: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    confirmText: { default: "确定" },
    cancelText: { default: "取消" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "confirm", "cancel"],
  setup(a, { expose: n, emit: m }) {
    const o = a, I = m, u = F(o.modelValue), w = F(o.defaultValue);
    ae(
      () => o.modelValue,
      (b) => {
        u.value = b, b && (w.value = o.defaultValue);
      }
    ), ae(
      () => o.defaultValue,
      (b) => {
        u.value && (w.value = b);
      }
    ), ae(u, (b) => {
      I("update:modelValue", b);
    });
    const v = () => {
      I("confirm", w.value);
    }, A = () => {
      u.value = !1, I("cancel");
    };
    return n({
      open: () => {
        u.value = !0, w.value = o.defaultValue;
      },
      close: () => {
        u.value = !1;
      }
    }), (b, h) => {
      const k = xe, T = Be;
      return c(), W(ut, {
        modelValue: e(u),
        "onUpdate:modelValue": h[1] || (h[1] = (y) => ue(u) ? u.value = y : null),
        title: b.title,
        width: b.width,
        center: b.center,
        "show-close": b.showClose
      }, {
        footer: D(() => [
          l("div", It, [
            V(pe, {
              type: "default",
              onClick: A
            }, {
              default: D(() => [
                q(
                  d(b.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            V(pe, {
              type: "primary",
              loading: b.loading,
              onClick: v
            }, {
              default: D(() => [
                q(
                  d(b.confirmText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        default: D(() => [
          l("div", zt, [
            l(
              "div",
              Gt,
              d(b.message),
              1
              /* TEXT */
            ),
            V(T, {
              modelValue: e(w),
              "onUpdate:modelValue": h[0] || (h[0] = (y) => ue(w) ? w.value = y : null),
              class: "w-full",
              placeholder: b.selectPlaceholder
            }, {
              default: D(() => [
                (c(!0), S(
                  j,
                  null,
                  ye(b.options, (y) => (c(), W(k, {
                    key: y.value,
                    label: y.label,
                    value: y.value
                  }, null, 8, ["label", "value"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "placeholder"])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "title", "width", "center", "show-close"]);
    };
  }
}), Et = /* @__PURE__ */ ke(Tt, [["__scopeId", "data-v-bd31799c"]]), Pt = { class: "confirm-header" }, Ft = { class: "header-title" }, Bt = { class: "confirm-body" }, xt = { class: "message-text" }, Dt = {
  key: 0,
  class: "hint-list"
}, At = { class: "confirm-footer" }, Lt = /* @__PURE__ */ le({
  __name: "ConfirmChoiceDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "" },
    message: { default: "" },
    primaryText: { default: "确定" },
    secondaryText: { default: "取消" },
    type: { default: "info" }
  },
  emits: ["update:modelValue", "primary", "secondary", "close"],
  setup(a, { expose: n, emit: m }) {
    const o = a, I = m, u = F(o.modelValue), w = x(() => {
      switch (o.type) {
        case "warning":
          return "⚠";
        case "danger":
          return "!";
        default:
          return "?";
      }
    }), v = x(() => `icon-${o.type}`), A = x(() => {
      const y = o.message || "", $ = y.split(`
`).filter(Boolean), G = [];
      for (const N of $) {
        const B = N.trim();
        if (/^[•·\-]\s*/.test(B)) break;
        B && G.push(N);
      }
      return G.join(`
`) || $[0] || y;
    }), b = x(() => {
      const $ = (o.message || "").split(`
`).filter(Boolean), G = [];
      for (const N of $) {
        const K = N.trim().match(/^[•·\-]\s*(.+)$/);
        K && G.push(K[1].trim());
      }
      return G;
    });
    ae(
      () => o.modelValue,
      (y) => {
        u.value = y;
      }
    ), ae(u, (y) => {
      I("update:modelValue", y);
    });
    function h() {
      u.value = !1, I("primary");
    }
    function k() {
      u.value = !1, I("secondary");
    }
    function T() {
      u.value = !1, I("close");
    }
    return n({
      open: () => {
        u.value = !0;
      },
      close: () => {
        u.value = !1;
      }
    }), (y, $) => (c(), W(rt, { to: "body" }, [
      V(ot, { name: "confirm-fade" }, {
        default: D(() => [
          e(u) ? (c(), S("div", {
            key: 0,
            class: "confirm-overlay",
            onClick: ge(T, ["self"])
          }, [
            l(
              "div",
              {
                class: R(["confirm-dialog", [`type-${y.type}`]])
              },
              [
                p(" 顶栏 "),
                l("div", Pt, [
                  l("div", Ft, [
                    l(
                      "span",
                      {
                        class: R(["header-icon", e(v)])
                      },
                      d(e(w)),
                      3
                      /* TEXT, CLASS */
                    ),
                    l(
                      "span",
                      null,
                      d(y.title),
                      1
                      /* TEXT */
                    )
                  ]),
                  l("button", {
                    class: "header-close",
                    onClick: T,
                    title: "×"
                  }, $[0] || ($[0] = [
                    l(
                      "span",
                      null,
                      "×",
                      -1
                      /* HOISTED */
                    )
                  ]))
                ]),
                p(" 内容区 "),
                l("div", Bt, [
                  l(
                    "div",
                    xt,
                    d(e(A)),
                    1
                    /* TEXT */
                  ),
                  e(b).length ? (c(), S("div", Dt, [
                    (c(!0), S(
                      j,
                      null,
                      ye(e(b), (G, N) => (c(), S("div", {
                        key: N,
                        class: "hint-item"
                      }, [
                        $[1] || ($[1] = l(
                          "span",
                          { class: "hint-dot" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        l(
                          "span",
                          null,
                          d(G),
                          1
                          /* TEXT */
                        )
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : p("v-if", !0)
                ]),
                p(" 底栏 "),
                l("div", At, [
                  y.secondaryText ? (c(), S(
                    "button",
                    {
                      key: 0,
                      class: "footer-btn secondary",
                      onClick: k
                    },
                    d(y.secondaryText),
                    1
                    /* TEXT */
                  )) : p("v-if", !0),
                  l(
                    "button",
                    {
                      class: R(["footer-btn primary", { danger: y.type === "danger" }]),
                      onClick: h
                    },
                    d(y.primaryText),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ],
              2
              /* CLASS */
            )
          ])) : p("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), Pe = /* @__PURE__ */ ke(Lt, [["__scopeId", "data-v-e42cf928"]]);
function Mt(a) {
  const n = String(a).toLowerCase();
  return n.includes("network") || n.includes("connection") || n.includes("tcp") || n.includes("无法连接") || n.includes("连接失败") || n.includes("网络") ? {
    type: "network",
    title: "网络连接失败",
    message: "无法连接到远程仓库，请检查网络连接",
    suggestions: [
      "检查网络连接是否正常",
      "确认是否需要代理才能访问 GitHub",
      "尝试使用 SSH 方式连接",
      "检查防火墙是否阻止了 Git 连接"
    ]
  } : n.includes("authentication") || n.includes("auth") || n.includes("token") || n.includes("credential") || n.includes("认证") || n.includes("权限") || n.includes("token") || n.includes("密码") || n.includes("身份验证") ? {
    type: "auth",
    title: "认证失败",
    message: "Git 认证失败，请检查 Token 是否正确",
    suggestions: [
      "确认 GitHub Personal Access Token 是否有效",
      "检查 Token 是否具有 repo 权限",
      "确认 Token 是否已过期",
      "尝试重新生成 Token 并更新设置"
    ]
  } : n.includes("conflict") || n.includes("冲突") || n.includes("merge") ? {
    type: "conflict",
    title: "合并冲突",
    message: "本地与远程存在冲突，需要手动解决",
    suggestions: [
      '点击"手动合并"逐个解决冲突',
      '或选择"强制拉取"以远程为准',
      '或选择"强制推送"以本地为准'
    ]
  } : n.includes("not found") || n.includes("repository") || n.includes("不存在") || n.includes("仓库") || n.includes("404") ? {
    type: "not_found",
    title: "仓库不存在",
    message: "远程仓库不存在或已被删除",
    suggestions: [
      "确认远程仓库 URL 是否正确",
      "检查仓库是否已被删除或重命名",
      "可以在 GitHub 上确认仓库是否存在",
      "如需重新创建仓库，请重新配置"
    ]
  } : n.includes("permission") || n.includes("access denied") || n.includes("访问被拒绝") || n.includes("权限不足") ? {
    type: "permission",
    title: "权限不足",
    message: "没有足够的权限访问或推送到此仓库",
    suggestions: [
      "确认 Token 具有仓库的写入权限",
      "检查是否被邀请加入仓库",
      "确认仓库是否是私有仓库"
    ]
  } : n.includes("git is not installed") || n.includes("git not found") || n.includes("git 未安装") || n.includes("找不到 git") ? {
    type: "git_not_installed",
    title: "Git 未安装",
    message: "系统未安装 Git，请先安装 Git",
    suggestions: [
      "下载并安装 Git: https://git-scm.com",
      "安装完成后重启应用程序",
      "确认 git 命令可以在终端中运行"
    ]
  } : n.includes("not a git repository") || n.includes("不是 git 仓库") || n.includes("不是有效的仓库") ? {
    type: "not_a_repo",
    title: "不是 Git 仓库",
    message: "当前目录不是 Git 仓库",
    suggestions: [
      "需要先初始化 Git 仓库",
      "或重新配置指向已有的 Git 仓库"
    ]
  } : n.includes("no remote") || n.includes("没有远程") || n.includes("未配置远程") ? {
    type: "no_remote",
    title: "未配置远程仓库",
    message: "未配置远程仓库地址",
    suggestions: [
      "在设置中配置远程仓库 URL",
      "确认 GitHub 仓库已创建",
      "使用 HTTPS 或 SSH 方式添加远程仓库"
    ]
  } : {
    type: "unknown",
    title: "未知错误",
    message: "发生了未知错误，请查看详细日志",
    suggestions: [
      "尝试重启应用程序",
      "检查 Git 设置是否正确",
      "查看控制台日志获取更多信息",
      "如问题持续，请提交问题反馈"
    ]
  };
}
function Ut(a) {
  switch (a) {
    case "network":
      return "🌐";
    case "auth":
      return "🔐";
    case "conflict":
      return "⚔️";
    case "not_found":
      return "🔍";
    case "permission":
      return "🚫";
    case "git_not_installed":
      return "📦";
    case "not_a_repo":
      return "📁";
    case "no_remote":
      return "☁️";
    default:
      return "❓";
  }
}
const Ot = { class: "settings-panel" }, Wt = { class: "panel-header" }, jt = { class: "panel-title" }, Ht = { class: "panel-content" }, Rt = { class: "sync-status-panel__left" }, Kt = { class: "sync-status-icon" }, Zt = { class: "sync-status-info" }, Yt = { class: "sync-status-label" }, qt = { class: "sync-status-detail" }, Xt = {
  key: 1,
  class: "pending-count"
}, Jt = { class: "sync-status-panel__right" }, Qt = { class: "sync-pending-files-header" }, es = { class: "sync-pending-files-list" }, ts = { class: "file-name" }, ss = { class: "settings-section-title" }, ns = { class: "summarize-section" }, as = { class: "summarize-label" }, ls = { class: "summarize-label-title" }, is = { class: "summarize-label-desc" }, os = { class: "summarize-input-wrapper" }, rs = {
  key: 0,
  class: "summarize-section"
}, us = { class: "summarize-input-wrapper" }, cs = { class: "summarize-section" }, ds = { class: "summarize-label" }, ms = { class: "summarize-label-title" }, fs = { class: "summarize-label-desc" }, gs = { class: "summarize-input-wrapper" }, ys = { class: "summarize-section" }, ps = { class: "summarize-label" }, vs = { class: "summarize-label-title" }, hs = { class: "summarize-label-desc" }, bs = { class: "summarize-input-wrapper" }, _s = {
  key: 1,
  class: "summarize-section transparent-input"
}, Ss = { class: "summarize-label" }, ws = { class: "summarize-label-title" }, Vs = { class: "summarize-label-desc" }, ks = { class: "summarize-input-wrapper" }, Cs = { class: "ml-2 text-sm text-panel" }, $s = { class: "settings-section-title" }, Ns = { class: "summarize-section" }, zs = { class: "summarize-label" }, Gs = { class: "summarize-label-title" }, Is = { class: "summarize-label-desc" }, Ts = { class: "summarize-input-wrapper flex gap-2" }, Us = /* @__PURE__ */ le({
  name: "GitSync",
  __name: "index",
  setup(a) {
    const { t: n } = st(), {
      syncState: m,
      pendingFilesCount: o,
      formattedLastSyncTime: I,
      gitStatus: u,
      refreshStatus: w,
      refreshSettings: v
    } = ct(), A = x(() => u.value?.changed_files ? u.value.changed_files : []), b = (t) => {
      switch (t) {
        case "syncing":
          return n("settings.gitSync.status.syncing") || "同步中";
        case "synced":
          return n("settings.gitSync.status.synced") || "已同步";
        case "has_changes":
          return n("settings.gitSync.status.hasChanges") || "有待同步";
        case "error":
          return n("settings.gitSync.status.error") || "同步出错";
        case "idle":
          return n("settings.gitSync.status.idle") || "空闲";
        case "disabled":
          return n("settings.gitSync.status.ready") || "就绪";
        default:
          return n("settings.gitSync.status.ready") || "就绪";
      }
    }, h = F({
      enabled: !1,
      user_name: "",
      user_email: "",
      token: "",
      remote_url: "",
      pull_on_start: !0,
      auto_sync: !1,
      auto_sync_delay: 1
    }), k = F(!1), T = F(!1), y = F(!1), $ = F(!1), G = F({
      title: "",
      message: "",
      primaryText: "",
      secondaryText: "",
      type: "info"
    }), N = F(!1), B = F(null), K = F("main"), L = F(!1), Z = F(""), X = F([]), Q = x(() => (B.value?.available_branches?.length ? B.value.available_branches : ["main"]).map((i) => ({
      label: i === "main" ? `${i}（主分支）` : i,
      value: i
    }))), ve = x(() => B.value ? `${B.value.reason}
当前分支：${B.value.current_branch || "未知"}；建议选择：${B.value.recommended_branch}` : "请选择要同步的分支"), he = x(() => {
      const t = X.value.map((i) => `- ${i}`).join(`
`);
      return `目标分支会覆盖以下未跟踪文件。选择“使用目标分支文件”会先删除这些本地未跟踪文件，再切换到 ${Z.value || "目标"} 分支。

${t}`;
    }), J = (t) => {
      const i = Mt(t), z = Ut(i.type), U = String(t).replace(/^Error:\s*/, "");
      let Y = `${z} ${i.title}

${i.message}`;
      U && !i.message.includes(U) && (Y += `

详情: ${U.slice(0, 100)}${U.length > 100 ? "..." : ""}`), P.msg(Y, "error", "top-right"), console.group(`🔧 Git 错误解决建议 - ${i.title}`), console.log(U), console.log("建议步骤:"), i.suggestions.forEach((g, Ce) => {
        console.log(`${Ce + 1}. ${g}`);
      }), console.groupEnd();
    }, ie = (t) => {
      $.value = !1;
    }, be = (t) => {
      B.value = t, K.value = t.recommended_branch || "main", N.value = !0;
    }, _e = (t) => {
      const i = String(t), z = "would be overwritten by checkout:", U = i.indexOf(z);
      if (U < 0) return [];
      const Y = i.slice(U + z.length), g = Y.search(/Please move|Aborting|Error:/);
      return (g >= 0 ? Y.slice(0, g) : Y).split(/\r?\n/).map((oe) => oe.trim()).filter((oe) => oe && !oe.startsWith("Please ") && !oe.startsWith("Aborting"));
    }, ee = async (t) => {
      try {
        return await ze(t), await w(), P.msg(`已切换到 ${t} 分支`, "success", "bottom-right"), !0;
      } catch (i) {
        const z = _e(i);
        if (z.length > 0)
          return Z.value = t, X.value = z, N.value = !1, L.value = !0, !1;
        throw i;
      }
    }, Se = async (t) => {
      k.value = !0;
      try {
        await ee(t);
      } catch (i) {
        O.error("[GitSync] 切换分支失败", i), J(i);
      } finally {
        k.value = !1;
      }
    }, s = async () => {
      const t = Z.value, i = [...X.value];
      if (!t || i.length === 0) {
        L.value = !1;
        return;
      }
      k.value = !0;
      try {
        for (const z of i)
          await dt(z);
        L.value = !1, X.value = [], Z.value = "", await ze(t), await w(), P.msg(`已切换到 ${t} 分支`, "success", "bottom-right");
      } catch (z) {
        O.error("[GitSync] 处理未跟踪文件后切换分支失败", z), J(z);
      } finally {
        k.value = !1;
      }
    }, r = (t) => {
      if (t.branch_selection) {
        be(t.branch_selection);
        return;
      }
      t.success ? t.has_conflicts ? O.info("[GitSync] Pull 检测到冲突，由全局对话框处理") : t.files_updated === 0 ? P.msg(n("settings.gitSync.alreadyUpToDate"), "success", "bottom-right") : P.msg(n("settings.gitSync.pullSuccess", { count: t.files_updated }), "success", "bottom-right") : P.msg(n("settings.gitSync.pullFailed"), "error", "top-right");
    }, f = async () => {
      try {
        O.info("[GitSync] 开始加载 Git 设置");
        const t = await mt();
        h.value = t, O.info("[GitSync] Git 设置加载成功", t);
      } catch (t) {
        O.error("[GitSync] 加载 Git 设置失败", t), P.msg(n("settings.gitSync.loadFailed"), "error", "top-right");
      }
    }, _ = async () => {
      try {
        await gt(h.value);
      } catch (t) {
        throw O.error("[GitSync] 保存 Git 设置失败", t), t;
      }
    }, C = async (t) => {
      k.value = !0;
      try {
        await _(), P.msg(n(t ? "settings.gitSync.enabledSuccess" : "settings.gitSync.disabledSuccess"), "success", "bottom-right");
      } catch {
        P.msg(n("settings.gitSync.saveFailed"), "error", "top-right"), h.value.enabled = !t;
      } finally {
        k.value = !1;
      }
    }, M = async (t) => {
      k.value = !0;
      try {
        await _(), P.msg(n(t ? "settings.gitSync.pullOnStartEnabled" : "settings.gitSync.pullOnStartDisabled"), "success", "bottom-right");
      } catch {
        P.msg(n("settings.gitSync.saveFailed"), "error", "top-right"), h.value.pull_on_start = !t;
      } finally {
        k.value = !1;
      }
    }, te = async (t) => {
      k.value = !0;
      try {
        await _(), t ? await Ge() : await Ie(), P.msg(n(t ? "settings.gitSync.autoSyncEnabled" : "settings.gitSync.autoSyncDisabled"), "success", "bottom-right");
      } catch {
        P.msg(n("settings.gitSync.saveFailed"), "error", "top-right"), h.value.auto_sync = !t;
      } finally {
        k.value = !1;
      }
    }, se = async () => {
      k.value = !0;
      try {
        await _(), h.value.auto_sync && (await Ie(), await Ge());
      } catch {
        P.msg(n("settings.gitSync.saveFailed"), "error", "top-right");
      } finally {
        k.value = !1;
      }
    }, E = async () => {
      O.info("[GitSync] 手动 Pull 开始"), T.value = !0;
      try {
        const t = await Te();
        r(t);
      } catch (t) {
        O.error("[GitSync] 手动 Pull 失败", t), J(t);
      } finally {
        T.value = !1;
      }
    }, Le = async (t) => {
      const i = String(t || "main");
      T.value = !0;
      try {
        if (!await ee(i)) return;
        N.value = !1;
        const U = await Te();
        r(U);
      } catch (z) {
        O.error("[GitSync] 切换分支后 Pull 失败", z), J(z);
      } finally {
        T.value = !1;
      }
    }, Me = async () => {
      O.info("[GitSync] 手动 Push 开始"), y.value = !0;
      try {
        const t = await ft("Manual sync");
        t.success ? P.msg(n("settings.gitSync.pushSuccess", { count: t.files_pushed }), "success", "bottom-right") : P.msg(n("settings.gitSync.pushFailed"), "error", "top-right");
      } catch (t) {
        O.error("[GitSync] 手动 Push 失败", t), J(t);
      } finally {
        y.value = !1;
      }
    };
    return Ae(async () => {
      await f(), await v(), await w();
    }), (t, i) => {
      const z = xe, U = Be, Y = $t;
      return c(), S("div", Ot, [
        p(" 固定标题 "),
        l("div", Wt, [
          l(
            "h3",
            jt,
            d(t.$t("settings.gitSync.title")),
            1
            /* TEXT */
          )
        ]),
        p(" 可滚动内容 "),
        l("main", Ht, [
          p(" 当前同步状态：同面板内左右分栏 "),
          e(h).enabled ? (c(), S(
            "div",
            {
              key: 0,
              class: R(["sync-status-panel", `sync-status-panel--${e(m)}`])
            },
            [
              p(" 左侧：状态摘要 "),
              l("div", Rt, [
                l("div", Kt, [
                  e(m) === "syncing" ? (c(), W(e(yt), {
                    key: 0,
                    class: "git-sync-icon",
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : e(m) === "synced" || e(m) === "idle" || e(m) === "disabled" ? (c(), W(e(_t), {
                    key: 1,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : e(m) === "has_changes" ? (c(), W(e(bt), {
                    key: 2,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : e(m) === "error" ? (c(), W(e(ht), {
                    key: 3,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : p("v-if", !0)
                ]),
                l("div", Zt, [
                  l(
                    "div",
                    Yt,
                    d(b(e(m))),
                    1
                    /* TEXT */
                  ),
                  l("div", qt, [
                    e(m) === "syncing" ? (c(), S(
                      j,
                      { key: 0 },
                      [
                        q(
                          d(t.$t("settings.gitSync.status.syncing")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : e(m) === "has_changes" ? (c(), S(
                      "span",
                      Xt,
                      d(e(o)) + " " + d(t.$t("settings.gitSync.status.pendingFiles")),
                      1
                      /* TEXT */
                    )) : e(m) === "synced" || e(m) === "idle" ? (c(), S(
                      j,
                      { key: 2 },
                      [
                        q(
                          d(e(I) ? `${t.$t("settings.gitSync.status.lastSync")}: ${e(I)}` : t.$t("settings.gitSync.status.waitingSync")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : e(m) === "error" ? (c(), S(
                      j,
                      { key: 3 },
                      [
                        q(
                          d(t.$t("settings.gitSync.status.error")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : e(m) === "disabled" ? (c(), S(
                      j,
                      { key: 4 },
                      [
                        q(
                          d(t.$t("settings.gitSync.status.checking")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : p("v-if", !0)
                  ])
                ])
              ]),
              p(" 右侧：待同步文件列表（仅在有变更时显示） "),
              e(m) === "has_changes" && e(o) > 0 ? (c(), S(
                j,
                { key: 0 },
                [
                  i[13] || (i[13] = l(
                    "div",
                    { class: "sync-status-panel__divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  l("div", Jt, [
                    l(
                      "div",
                      Qt,
                      d(t.$t("settings.gitSync.status.pendingFilesTitle")) + " (" + d(e(o)) + ") ",
                      1
                      /* TEXT */
                    ),
                    l("div", es, [
                      (c(!0), S(
                        j,
                        null,
                        ye(e(A), (g) => (c(), S("div", {
                          key: g,
                          class: "sync-pending-file-item"
                        }, [
                          l(
                            "span",
                            ts,
                            d(g),
                            1
                            /* TEXT */
                          )
                        ]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : p("v-if", !0)
            ],
            2
            /* CLASS */
          )) : p("v-if", !0),
          p(" 第一部分：Git 配置 "),
          l(
            "div",
            ss,
            d(t.$t("settings.gitSync.status.section.config")),
            1
            /* TEXT */
          ),
          p(" 启用 Git 同步 "),
          l("section", ns, [
            l("div", as, [
              l(
                "div",
                ls,
                d(t.$t("settings.gitSync.enabled")),
                1
                /* TEXT */
              ),
              l(
                "div",
                is,
                d(t.$t("settings.gitSync.enabledDesc")),
                1
                /* TEXT */
              )
            ]),
            l("div", os, [
              V(e(Ve), {
                modelValue: e(h).enabled,
                "onUpdate:modelValue": i[0] || (i[0] = (g) => e(h).enabled = g),
                "active-text": t.$t("common.on"),
                "inactive-text": t.$t("common.off"),
                disabled: e(k),
                onChange: C
              }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
            ])
          ]),
          p(" 同步选项（Git 必要配置在个人中心填写，此处仅保留开关与同步操作） "),
          e(h).enabled ? (c(), S(
            j,
            { key: 1 },
            [
              e(u)?.available_branches?.length ? (c(), S("section", rs, [
                i[14] || (i[14] = l(
                  "div",
                  { class: "summarize-label" },
                  [
                    l("div", { class: "summarize-label-title" }, "同步分支"),
                    l("div", { class: "summarize-label-desc" }, " 主分支固定为 main，检测到其他分支时可在这里切换 ")
                  ],
                  -1
                  /* HOISTED */
                )),
                l("div", us, [
                  V(U, {
                    "model-value": e(u).branch || "main",
                    class: "summarize-input !w-40",
                    disabled: e(k) || e(T) || e(y),
                    onChange: Se
                  }, {
                    default: D(() => [
                      (c(!0), S(
                        j,
                        null,
                        ye(e(u).available_branches, (g) => (c(), W(z, {
                          key: g,
                          label: g === "main" ? `${g}（主分支）` : g,
                          value: g
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["model-value", "disabled"])
                ])
              ])) : p("v-if", !0),
              p(" 启动时自动拉取 "),
              l("section", cs, [
                l("div", ds, [
                  l(
                    "div",
                    ms,
                    d(t.$t("settings.gitSync.pullOnStart")),
                    1
                    /* TEXT */
                  ),
                  l(
                    "div",
                    fs,
                    d(t.$t("settings.gitSync.pullOnStartDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                l("div", gs, [
                  V(e(Ve), {
                    modelValue: e(h).pull_on_start,
                    "onUpdate:modelValue": i[1] || (i[1] = (g) => e(h).pull_on_start = g),
                    "active-text": t.$t("common.on"),
                    "inactive-text": t.$t("common.off"),
                    disabled: e(k),
                    onChange: M
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              p(" 自动同步 "),
              l("section", ys, [
                l("div", ps, [
                  l(
                    "div",
                    vs,
                    d(t.$t("settings.gitSync.autoSync")),
                    1
                    /* TEXT */
                  ),
                  l(
                    "div",
                    hs,
                    d(t.$t("settings.gitSync.autoSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                l("div", bs, [
                  V(e(Ve), {
                    modelValue: e(h).auto_sync,
                    "onUpdate:modelValue": i[2] || (i[2] = (g) => e(h).auto_sync = g),
                    "active-text": t.$t("common.on"),
                    "inactive-text": t.$t("common.off"),
                    disabled: e(k),
                    onChange: te
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              p(" 自动同步延迟（仅在启用自动同步时显示） "),
              e(h).auto_sync ? (c(), S("section", _s, [
                l("div", Ss, [
                  l(
                    "div",
                    ws,
                    d(t.$t("settings.gitSync.autoSyncDelay")),
                    1
                    /* TEXT */
                  ),
                  l(
                    "div",
                    Vs,
                    d(t.$t("settings.gitSync.autoSyncDelayDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                l("div", ks, [
                  V(Y, {
                    modelValue: e(h).auto_sync_delay,
                    "onUpdate:modelValue": i[3] || (i[3] = (g) => e(h).auto_sync_delay = g),
                    min: 1,
                    max: 60,
                    disabled: e(k),
                    onChange: se,
                    class: "!w-32"
                  }, null, 8, ["modelValue", "disabled"]),
                  l(
                    "span",
                    Cs,
                    d(t.$t("settings.gitSync.minutes")),
                    1
                    /* TEXT */
                  )
                ])
              ])) : p("v-if", !0),
              p(" 第二部分：同步操作 "),
              l(
                "div",
                $s,
                d(t.$t("settings.gitSync.status.section.sync") || "同步操作"),
                1
                /* TEXT */
              ),
              p(" 手动同步按钮 "),
              l("section", Ns, [
                l("div", zs, [
                  l(
                    "div",
                    Gs,
                    d(t.$t("settings.gitSync.manualSync")),
                    1
                    /* TEXT */
                  ),
                  l(
                    "div",
                    Is,
                    d(t.$t("settings.gitSync.manualSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                l("div", Ts, [
                  V(e(pe), {
                    type: "primary",
                    size: "small",
                    loading: e(T),
                    onClick: E
                  }, {
                    default: D(() => [
                      q(
                        d(t.$t("settings.gitSync.pull")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"]),
                  V(e(pe), {
                    type: "primary",
                    size: "small",
                    loading: e(y),
                    onClick: Me
                  }, {
                    default: D(() => [
                      q(
                        d(t.$t("settings.gitSync.push")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : p("v-if", !0)
        ]),
        p(" 自定义确认框 "),
        V(Pe, {
          modelValue: e($),
          "onUpdate:modelValue": i[4] || (i[4] = (g) => ue($) ? $.value = g : null),
          title: e(G).title,
          message: e(G).message,
          "primary-text": e(G).primaryText,
          "secondary-text": e(G).secondaryText,
          type: e(G).type,
          onPrimary: i[5] || (i[5] = (g) => ie()),
          onSecondary: i[6] || (i[6] = (g) => ie()),
          onClose: i[7] || (i[7] = (g) => ie())
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "type"]),
        V(e(Et), {
          modelValue: e(N),
          "onUpdate:modelValue": i[8] || (i[8] = (g) => ue(N) ? N.value = g : null),
          title: "选择同步分支",
          message: e(ve),
          options: e(Q),
          "default-value": e(K),
          "confirm-text": "切换并同步",
          "cancel-text": "取消",
          loading: e(T),
          onConfirm: Le,
          onCancel: i[9] || (i[9] = (g) => N.value = !1)
        }, null, 8, ["modelValue", "message", "options", "default-value", "loading"]),
        V(Pe, {
          modelValue: e(L),
          "onUpdate:modelValue": i[10] || (i[10] = (g) => ue(L) ? L.value = g : null),
          title: "切换分支前需要处理未跟踪文件",
          message: e(he),
          "primary-text": "使用目标分支文件",
          "secondary-text": "取消",
          type: "warning",
          onPrimary: s,
          onSecondary: i[11] || (i[11] = (g) => L.value = !1),
          onClose: i[12] || (i[12] = (g) => L.value = !1)
        }, null, 8, ["modelValue", "message"])
      ]);
    };
  }
});
export {
  Us as default
};
