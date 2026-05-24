import { i as Z, T as me, b as Ye, U as ie, V as be, W as xe, X as Xe, Y as Je, _ as Qe, Z as et, u as tt, $ as st, a as pe, a0 as Ce, a1 as nt, a2 as at, a3 as lt, a4 as it, v as Ge, a5 as ot, a6 as rt, a7 as ut, w as ct, k as Se, E as Be, j as De, e as dt, l as B, m as T } from "./_plugin-vue_export-helper-BykmhDAa.js";
import { I as Le, c as _, d as ce, r as $, G as mt, k as D, w as ue, f as Ae, a5 as gt, a as y, o as d, a1 as ze, e as p, u as e, ag as ve, n as j, g as he, v as L, b as W, an as ft, ac as _e, A as yt, q as a, s as c, x as oe, F as R, h as re, R as K, a3 as pt, a9 as vt } from "./runtime-entry-yPFnsQUl.js";
import { C as ge } from "./index-B4rGDAfW.js";
import { C as ht } from "./CommonDialog-BAryWL-2.js";
import { u as bt, r as _t, s as Ie, g as St, a as wt, b as Vt, c as Te, d as Pe, e as Ee, f as kt, h as Ct } from "./useGitStatus-DJ9X1ELP.js";
import { L as $t } from "./Loading-DJVgRatg.js";
import { E as Nt, i as Gt } from "./index-CXiGhJMN.js";
import { v as Fe } from "./index-f4nIXQfV.js";
import { C as zt } from "./CloseSmall-BzhtyOZ6.js";
const It = Le("attention", !0, function(i) {
  return _("svg", {
    width: i.size,
    height: i.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: i.colors[1],
    stroke: i.colors[0],
    "stroke-width": i.strokeWidth,
    "stroke-linejoin": i.strokeLinejoin
  }, null), _("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z",
    fill: i.colors[2]
  }, null), _("path", {
    d: "M24 12V28",
    stroke: i.colors[2],
    "stroke-width": i.strokeWidth,
    "stroke-linecap": i.strokeLinecap,
    "stroke-linejoin": i.strokeLinejoin
  }, null)]);
}), Tt = Le("check-one", !0, function(i) {
  return _("svg", {
    width: i.size,
    height: i.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: i.colors[1],
    stroke: i.colors[0],
    "stroke-width": i.strokeWidth,
    "stroke-linejoin": i.strokeLinejoin
  }, null), _("path", {
    d: "M16 24L22 30L34 18",
    stroke: i.colors[2],
    "stroke-width": i.strokeWidth,
    "stroke-linecap": i.strokeLinecap,
    "stroke-linejoin": i.strokeLinejoin
  }, null)]);
}), Pt = Ye({
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
  size: Je,
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
    validator: (i) => i === null || Z(i) || ["min", "max"].includes(i),
    default: null
  },
  name: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (i) => i >= 0 && i === Number.parseInt(`${i}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...Xe(["ariaLabel"])
}), Et = {
  [xe]: (i, l) => l !== i,
  blur: (i) => i instanceof FocusEvent,
  focus: (i) => i instanceof FocusEvent,
  [be]: (i) => Z(i) || me(i),
  [ie]: (i) => Z(i) || me(i)
}, Ft = ce({
  name: "ElInputNumber"
}), xt = /* @__PURE__ */ ce({
  ...Ft,
  props: Pt,
  emits: Et,
  setup(i, { expose: l, emit: g }) {
    const u = i, { t: P } = et(), m = tt("input-number"), S = $(), h = mt({
      currentValue: u.modelValue,
      userInput: null
    }), { formItem: A } = st(), w = D(() => Z(u.modelValue) && u.modelValue <= u.min), b = D(() => Z(u.modelValue) && u.modelValue >= u.max), V = D(() => {
      const s = x(u.step);
      return pe(u.precision) ? Math.max(x(u.modelValue), s) : (s > u.precision && Ce("InputNumber", "precision should not be less than the decimal places of step"), u.precision);
    }), E = D(() => u.controls && u.controlsPosition === "right"), v = nt(), N = at(), I = D(() => {
      if (h.userInput !== null)
        return h.userInput;
      let s = h.currentValue;
      if (me(s))
        return "";
      if (Z(s)) {
        if (Number.isNaN(s))
          return "";
        pe(u.precision) || (s = s.toFixed(u.precision));
      }
      return s;
    }), G = (s, r) => {
      if (pe(r) && (r = V.value), r === 0)
        return Math.round(s);
      let f = String(s);
      const k = f.indexOf(".");
      if (k === -1 || !f.replace(".", "").split("")[k + r])
        return s;
      const ae = f.length;
      return f.charAt(ae - 1) === "5" && (f = `${f.slice(0, Math.max(0, ae - 1))}6`), Number.parseFloat(Number(f).toFixed(r));
    }, x = (s) => {
      if (me(s))
        return 0;
      const r = s.toString(), f = r.indexOf(".");
      let k = 0;
      return f !== -1 && (k = r.length - f - 1), k;
    }, q = (s, r = 1) => Z(s) ? G(s + u.step * r) : h.currentValue, M = () => {
      if (u.readonly || N.value || b.value)
        return;
      const s = Number(I.value) || 0, r = q(s);
      X(r), g(be, h.currentValue), de();
    }, Y = () => {
      if (u.readonly || N.value || w.value)
        return;
      const s = Number(I.value) || 0, r = q(s, -1);
      X(r), g(be, h.currentValue), de();
    }, ee = (s, r) => {
      const { max: f, min: k, step: C, precision: U, stepStrictly: ae, valueOnClear: te } = u;
      f < k && ut("InputNumber", "min should not be greater than max.");
      let F = Number(s);
      if (me(s) || Number.isNaN(F))
        return null;
      if (s === "") {
        if (te === null)
          return null;
        F = yt(te) ? { min: k, max: f }[te] : te;
      }
      return ae && (F = G(Math.round(F / C) * C, U), F !== s && r && g(ie, F)), pe(U) || (F = G(F, U)), (F > f || F < k) && (F = F > f ? f : k, r && g(ie, F)), F;
    }, X = (s, r = !0) => {
      var f;
      const k = h.currentValue, C = ee(s);
      if (!r) {
        g(ie, C);
        return;
      }
      k === C && s || (h.userInput = null, g(ie, C), k !== C && g(xe, C, k), u.validateEvent && ((f = A?.validate) == null || f.call(A, "change").catch((U) => Ce(U))), h.currentValue = C);
    }, se = (s) => {
      h.userInput = s;
      const r = s === "" ? null : Number(s);
      g(be, r), X(r, !1);
    }, fe = (s) => {
      const r = s !== "" ? Number(s) : "";
      (Z(r) && !Number.isNaN(r) || s === "") && X(r), de(), h.userInput = null;
    }, J = () => {
      var s, r;
      (r = (s = S.value) == null ? void 0 : s.focus) == null || r.call(s);
    }, ne = () => {
      var s, r;
      (r = (s = S.value) == null ? void 0 : s.blur) == null || r.call(s);
    }, we = (s) => {
      g("focus", s);
    }, Ve = (s) => {
      var r, f;
      h.userInput = null, Gt() && h.currentValue === null && ((r = S.value) != null && r.input) && (S.value.input.value = ""), g("blur", s), u.validateEvent && ((f = A?.validate) == null || f.call(A, "blur").catch((k) => Ce(k)));
    }, de = () => {
      h.currentValue !== u.modelValue && (h.currentValue = u.modelValue);
    }, ke = (s) => {
      document.activeElement === s.target && s.preventDefault();
    };
    return ue(() => u.modelValue, (s, r) => {
      const f = ee(s, !0);
      h.userInput === null && f !== r && (h.currentValue = f);
    }, { immediate: !0 }), Ae(() => {
      var s;
      const { min: r, max: f, modelValue: k } = u, C = (s = S.value) == null ? void 0 : s.input;
      if (C.setAttribute("role", "spinbutton"), Number.isFinite(f) ? C.setAttribute("aria-valuemax", String(f)) : C.removeAttribute("aria-valuemax"), Number.isFinite(r) ? C.setAttribute("aria-valuemin", String(r)) : C.removeAttribute("aria-valuemin"), C.setAttribute("aria-valuenow", h.currentValue || h.currentValue === 0 ? String(h.currentValue) : ""), C.setAttribute("aria-disabled", String(N.value)), !Z(k) && k != null) {
        let U = Number(k);
        Number.isNaN(U) && (U = null), g(ie, U);
      }
      C.addEventListener("wheel", ke, { passive: !1 });
    }), gt(() => {
      var s, r;
      const f = (s = S.value) == null ? void 0 : s.input;
      f?.setAttribute("aria-valuenow", `${(r = h.currentValue) != null ? r : ""}`);
    }), l({
      focus: J,
      blur: ne
    }), (s, r) => (d(), y("div", {
      class: j([
        e(m).b(),
        e(m).m(e(v)),
        e(m).is("disabled", e(N)),
        e(m).is("without-controls", !s.controls),
        e(m).is("controls-right", e(E))
      ]),
      onDragstart: _e(() => {
      }, ["prevent"])
    }, [
      s.controls ? ze((d(), y("span", {
        key: 0,
        role: "button",
        "aria-label": e(P)("el.inputNumber.decrease"),
        class: j([e(m).e("decrease"), e(m).is("disabled", e(w))]),
        onKeydown: ve(Y, ["enter"])
      }, [
        he(s.$slots, "decrease-icon", {}, () => [
          _(e(Ge), null, {
            default: L(() => [
              e(E) ? (d(), W(e(lt), { key: 0 })) : (d(), W(e(it), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [e(Fe), Y]
      ]) : p("v-if", !0),
      s.controls ? ze((d(), y("span", {
        key: 1,
        role: "button",
        "aria-label": e(P)("el.inputNumber.increase"),
        class: j([e(m).e("increase"), e(m).is("disabled", e(b))]),
        onKeydown: ve(M, ["enter"])
      }, [
        he(s.$slots, "increase-icon", {}, () => [
          _(e(Ge), null, {
            default: L(() => [
              e(E) ? (d(), W(e(ot), { key: 0 })) : (d(), W(e(rt), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [e(Fe), M]
      ]) : p("v-if", !0),
      _(e(Nt), {
        id: s.id,
        ref_key: "input",
        ref: S,
        type: "number",
        step: s.step,
        "model-value": e(I),
        placeholder: s.placeholder,
        readonly: s.readonly,
        disabled: e(N),
        size: e(v),
        max: s.max,
        min: s.min,
        name: s.name,
        "aria-label": s.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          ve(_e(M, ["prevent"]), ["up"]),
          ve(_e(Y, ["prevent"]), ["down"])
        ],
        onBlur: Ve,
        onFocus: we,
        onInput: se,
        onChange: fe
      }, ft({
        _: 2
      }, [
        s.$slots.prefix ? {
          name: "prefix",
          fn: L(() => [
            he(s.$slots, "prefix")
          ])
        } : void 0,
        s.$slots.suffix ? {
          name: "suffix",
          fn: L(() => [
            he(s.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Bt = /* @__PURE__ */ Qe(xt, [["__file", "input-number.vue"]]);
const Dt = ct(Bt), Lt = /* @__PURE__ */ ce({
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
  setup(i, { emit: l }) {
    const g = i, u = l, P = () => {
      if (g.disabled) return;
      const m = !g.modelValue;
      u("update:modelValue", m), u("change", m);
    };
    return (m, S) => (d(), y(
      "div",
      {
        class: j(["custom-switch", {
          "custom-switch--active": i.modelValue,
          "custom-switch--disabled": i.disabled
        }]),
        onClick: P
      },
      [
        i.activeText || i.inactiveText ? (d(), y(
          "span",
          {
            key: 0,
            class: j(["custom-switch__text", { "custom-switch__text--active": i.modelValue }])
          },
          c(i.modelValue ? i.activeText : i.inactiveText),
          3
          /* TEXT, CLASS */
        )) : p("v-if", !0),
        S[0] || (S[0] = a(
          "div",
          { class: "custom-switch__core" },
          [
            a("div", { class: "custom-switch__handle" })
          ],
          -1
          /* HOISTED */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), $e = /* @__PURE__ */ Se(Lt, [["__scopeId", "data-v-09573d1e"]]), At = { class: "select-confirm-content" }, Mt = { class: "mb-4" }, Ut = { class: "select-confirm-footer" }, Ot = /* @__PURE__ */ ce({
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
  setup(i, { expose: l, emit: g }) {
    const u = i, P = g, m = $(u.modelValue), S = $(u.defaultValue);
    ue(
      () => u.modelValue,
      (w) => {
        m.value = w, w && (S.value = u.defaultValue);
      }
    ), ue(
      () => u.defaultValue,
      (w) => {
        m.value && (S.value = w);
      }
    ), ue(m, (w) => {
      P("update:modelValue", w);
    });
    const h = () => {
      P("confirm", S.value);
    }, A = () => {
      m.value = !1, P("cancel");
    };
    return l({
      open: () => {
        m.value = !0, S.value = u.defaultValue;
      },
      close: () => {
        m.value = !1;
      }
    }), (w, b) => {
      const V = De, E = Be;
      return d(), W(ht, {
        modelValue: e(m),
        "onUpdate:modelValue": b[1] || (b[1] = (v) => oe(m) ? m.value = v : null),
        title: w.title,
        width: w.width,
        center: w.center,
        "show-close": w.showClose
      }, {
        footer: L(() => [
          a("div", Ut, [
            _(ge, {
              type: "default",
              onClick: A
            }, {
              default: L(() => [
                K(
                  c(w.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            _(ge, {
              type: "primary",
              loading: w.loading,
              onClick: h
            }, {
              default: L(() => [
                K(
                  c(w.confirmText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        default: L(() => [
          a("div", At, [
            a(
              "div",
              Mt,
              c(w.message),
              1
              /* TEXT */
            ),
            _(E, {
              modelValue: e(S),
              "onUpdate:modelValue": b[0] || (b[0] = (v) => oe(S) ? S.value = v : null),
              class: "w-full",
              placeholder: w.selectPlaceholder
            }, {
              default: L(() => [
                (d(!0), y(
                  R,
                  null,
                  re(w.options, (v) => (d(), W(V, {
                    key: v.value,
                    label: v.label,
                    value: v.value
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
}), Rt = /* @__PURE__ */ Se(Ot, [["__scopeId", "data-v-bd31799c"]]), Wt = { class: "confirm-header" }, jt = { class: "header-title" }, Ht = { class: "confirm-body" }, Kt = { class: "message-text" }, Zt = {
  key: 0,
  class: "hint-list"
}, qt = { class: "confirm-footer" }, Yt = /* @__PURE__ */ ce({
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
  setup(i, { expose: l, emit: g }) {
    const u = i, P = g, m = $(u.modelValue), S = D(() => {
      switch (u.type) {
        case "warning":
          return "⚠";
        case "danger":
          return "!";
        default:
          return "?";
      }
    }), h = D(() => `icon-${u.type}`), A = D(() => {
      const v = u.message || "", N = v.split(`
`).filter(Boolean), I = [];
      for (const G of N) {
        const x = G.trim();
        if (/^[•·\-]\s*/.test(x)) break;
        x && I.push(G);
      }
      return I.join(`
`) || N[0] || v;
    }), w = D(() => {
      const N = (u.message || "").split(`
`).filter(Boolean), I = [];
      for (const G of N) {
        const q = G.trim().match(/^[•·\-]\s*(.+)$/);
        q && I.push(q[1].trim());
      }
      return I;
    });
    ue(
      () => u.modelValue,
      (v) => {
        m.value = v;
      }
    ), ue(m, (v) => {
      P("update:modelValue", v);
    });
    function b() {
      m.value = !1, P("primary");
    }
    function V() {
      m.value = !1, P("secondary");
    }
    function E() {
      m.value = !1, P("close");
    }
    return l({
      open: () => {
        m.value = !0;
      },
      close: () => {
        m.value = !1;
      }
    }), (v, N) => (d(), W(vt, { to: "body" }, [
      _(pt, { name: "confirm-fade" }, {
        default: L(() => [
          e(m) ? (d(), y("div", {
            key: 0,
            class: "confirm-overlay",
            onClick: _e(E, ["self"])
          }, [
            a(
              "div",
              {
                class: j(["confirm-dialog", [`type-${v.type}`]])
              },
              [
                p(" 顶栏 "),
                a("div", Wt, [
                  a("div", jt, [
                    a(
                      "span",
                      {
                        class: j(["header-icon", e(h)])
                      },
                      c(e(S)),
                      3
                      /* TEXT, CLASS */
                    ),
                    a(
                      "span",
                      null,
                      c(v.title),
                      1
                      /* TEXT */
                    )
                  ]),
                  a("button", {
                    class: "header-close",
                    onClick: E,
                    title: "×"
                  }, N[0] || (N[0] = [
                    a(
                      "span",
                      null,
                      "×",
                      -1
                      /* HOISTED */
                    )
                  ]))
                ]),
                p(" 内容区 "),
                a("div", Ht, [
                  a(
                    "div",
                    Kt,
                    c(e(A)),
                    1
                    /* TEXT */
                  ),
                  e(w).length ? (d(), y("div", Zt, [
                    (d(!0), y(
                      R,
                      null,
                      re(e(w), (I, G) => (d(), y("div", {
                        key: G,
                        class: "hint-item"
                      }, [
                        N[1] || (N[1] = a(
                          "span",
                          { class: "hint-dot" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        a(
                          "span",
                          null,
                          c(I),
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
                a("div", qt, [
                  v.secondaryText ? (d(), y(
                    "button",
                    {
                      key: 0,
                      class: "footer-btn secondary",
                      onClick: V
                    },
                    c(v.secondaryText),
                    1
                    /* TEXT */
                  )) : p("v-if", !0),
                  a(
                    "button",
                    {
                      class: j(["footer-btn primary", { danger: v.type === "danger" }]),
                      onClick: b
                    },
                    c(v.primaryText),
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
}), Ne = /* @__PURE__ */ Se(Yt, [["__scopeId", "data-v-e42cf928"]]);
function Xt(i) {
  const l = String(i).toLowerCase();
  return l.includes("network") || l.includes("connection") || l.includes("tcp") || l.includes("无法连接") || l.includes("连接失败") || l.includes("网络") ? {
    type: "network",
    title: "网络连接失败",
    message: "无法连接到远程仓库，请检查网络连接",
    suggestions: [
      "检查网络连接是否正常",
      "确认是否需要代理才能访问 GitHub",
      "尝试使用 SSH 方式连接",
      "检查防火墙是否阻止了 Git 连接"
    ]
  } : l.includes("authentication") || l.includes("auth") || l.includes("token") || l.includes("credential") || l.includes("认证") || l.includes("权限") || l.includes("token") || l.includes("密码") || l.includes("身份验证") ? {
    type: "auth",
    title: "认证失败",
    message: "Git 认证失败，请检查 Token 是否正确",
    suggestions: [
      "确认 GitHub Personal Access Token 是否有效",
      "检查 Token 是否具有 repo 权限",
      "确认 Token 是否已过期",
      "尝试重新生成 Token 并更新设置"
    ]
  } : l.includes("conflict") || l.includes("冲突") || l.includes("merge") ? {
    type: "conflict",
    title: "合并冲突",
    message: "本地与远程存在冲突，需要手动解决",
    suggestions: [
      '点击"手动合并"逐个解决冲突',
      '或选择"强制拉取"以远程为准',
      '或选择"强制推送"以本地为准'
    ]
  } : l.includes("not found") || l.includes("repository") || l.includes("不存在") || l.includes("仓库") || l.includes("404") ? {
    type: "not_found",
    title: "仓库不存在",
    message: "远程仓库不存在或已被删除",
    suggestions: [
      "确认远程仓库 URL 是否正确",
      "检查仓库是否已被删除或重命名",
      "可以在 GitHub 上确认仓库是否存在",
      "如需重新创建仓库，请重新配置"
    ]
  } : l.includes("permission") || l.includes("access denied") || l.includes("访问被拒绝") || l.includes("权限不足") ? {
    type: "permission",
    title: "权限不足",
    message: "没有足够的权限访问或推送到此仓库",
    suggestions: [
      "确认 Token 具有仓库的写入权限",
      "检查是否被邀请加入仓库",
      "确认仓库是否是私有仓库"
    ]
  } : l.includes("git is not installed") || l.includes("git not found") || l.includes("git 未安装") || l.includes("找不到 git") ? {
    type: "git_not_installed",
    title: "Git 未安装",
    message: "系统未安装 Git，请先安装 Git",
    suggestions: [
      "下载并安装 Git: https://git-scm.com",
      "安装完成后重启应用程序",
      "确认 git 命令可以在终端中运行"
    ]
  } : l.includes("not a git repository") || l.includes("不是 git 仓库") || l.includes("不是有效的仓库") ? {
    type: "not_a_repo",
    title: "不是 Git 仓库",
    message: "当前目录不是 Git 仓库",
    suggestions: [
      "需要先初始化 Git 仓库",
      "或重新配置指向已有的 Git 仓库"
    ]
  } : l.includes("no remote") || l.includes("没有远程") || l.includes("未配置远程") ? {
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
function Jt(i) {
  switch (i) {
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
const Qt = { class: "settings-panel" }, es = { class: "panel-header" }, ts = { class: "panel-title" }, ss = { class: "panel-content" }, ns = { class: "sync-status-panel__left" }, as = { class: "sync-status-icon" }, ls = { class: "sync-status-info" }, is = { class: "sync-status-label" }, os = { class: "sync-status-detail" }, rs = {
  key: 1,
  class: "pending-count"
}, us = { class: "sync-status-panel__right" }, cs = { class: "sync-pending-files-header" }, ds = { class: "sync-pending-files-list" }, ms = { class: "file-name" }, gs = { class: "settings-section-title" }, fs = { class: "summarize-section" }, ys = { class: "summarize-label" }, ps = { class: "summarize-label-title" }, vs = { class: "summarize-label-desc" }, hs = { class: "summarize-input-wrapper" }, bs = {
  key: 0,
  class: "summarize-section"
}, _s = { class: "summarize-input-wrapper" }, Ss = { class: "summarize-section" }, ws = { class: "summarize-label" }, Vs = { class: "summarize-label-title" }, ks = { class: "summarize-label-desc" }, Cs = { class: "summarize-input-wrapper" }, $s = { class: "summarize-section" }, Ns = { class: "summarize-label" }, Gs = { class: "summarize-label-title" }, zs = { class: "summarize-label-desc" }, Is = { class: "summarize-input-wrapper" }, Ts = {
  key: 1,
  class: "summarize-section transparent-input"
}, Ps = { class: "summarize-label" }, Es = { class: "summarize-label-title" }, Fs = { class: "summarize-label-desc" }, xs = { class: "summarize-input-wrapper" }, Bs = { class: "ml-2 text-sm text-panel" }, Ds = { class: "settings-section-title" }, Ls = { class: "summarize-section" }, As = { class: "summarize-label" }, Ms = { class: "summarize-label-title" }, Us = { class: "summarize-label-desc" }, Os = { class: "summarize-input-wrapper flex gap-2" }, Rs = { class: "git-records-section" }, Ws = { class: "git-records-head" }, js = {
  key: 0,
  class: "git-records-list"
}, Hs = { class: "git-record-main" }, Ks = ["title"], Zs = { class: "git-record-time" }, qs = { class: "git-record-meta" }, Ys = {
  key: 0,
  class: "git-record-files"
}, Xs = ["title", "onClick"], Js = { class: "git-record-file-status" }, Qs = { class: "git-record-file-name" }, en = {
  key: 0,
  class: "git-record-more"
}, tn = {
  key: 1,
  class: "git-records-empty"
}, sn = /* @__PURE__ */ ce({
  name: "GitSync",
  __name: "index",
  setup(i) {
    const { t: l } = dt(), {
      syncState: g,
      pendingFilesCount: u,
      formattedLastSyncTime: P,
      gitStatus: m,
      refreshStatus: S,
      refreshSettings: h
    } = bt(), A = D(() => m.value?.changed_files ? m.value.changed_files : []), w = (t) => {
      switch (t) {
        case "syncing":
          return l("settings.gitSync.status.syncing") || "同步中";
        case "synced":
          return l("settings.gitSync.status.synced") || "已同步";
        case "has_changes":
          return l("settings.gitSync.status.hasChanges") || "有待同步";
        case "error":
          return l("settings.gitSync.status.error") || "同步出错";
        case "idle":
          return l("settings.gitSync.status.idle") || "空闲";
        case "disabled":
          return l("settings.gitSync.status.ready") || "就绪";
        default:
          return l("settings.gitSync.status.ready") || "就绪";
      }
    }, b = $({
      enabled: !1,
      user_name: "",
      user_email: "",
      token: "",
      remote_url: "",
      pull_on_start: !0,
      auto_sync: !1,
      auto_sync_delay: 1
    }), V = $(!1), E = $(!1), v = $(!1), N = $(!1), I = $({
      title: "",
      message: "",
      primaryText: "",
      secondaryText: "",
      type: "info"
    }), G = $(!1), x = $(null), q = $("main"), M = $(!1), Y = $(""), ee = $([]), X = $([]), se = $(!1), fe = $(!1), J = $(!1), ne = $(null), we = D(() => (x.value?.available_branches?.length ? x.value.available_branches : ["main"]).map((n) => ({
      label: n === "main" ? `${n}（主分支）` : n,
      value: n
    }))), Ve = D(() => x.value ? `${x.value.reason}
当前分支：${x.value.current_branch || "未知"}；建议选择：${x.value.recommended_branch}` : "请选择要同步的分支"), de = D(() => {
      const t = ee.value.map((n) => `- ${n}`).join(`
`);
      return `目标分支会覆盖以下未跟踪文件。选择“使用目标分支文件”会先删除这些本地未跟踪文件，再切换到 ${Y.value || "目标"} 分支。

${t}`;
    }), ke = D(() => {
      const t = ne.value;
      return t ? `确认将文件恢复到这条记录之前的版本？

- 文件：${t.file.file_path}
- 记录：${t.record.short_hash} ${t.record.message}

当前文件内容会被覆盖，恢复后会出现在待同步列表中。` : "";
    }), s = (t) => {
      const n = Xt(t), z = Jt(n.type), O = String(t).replace(/^Error:\s*/, "");
      let Q = `${z} ${n.title}

${n.message}`;
      O && !n.message.includes(O) && (Q += `

详情: ${O.slice(0, 100)}${O.length > 100 ? "..." : ""}`), T.msg(Q, "error", "top-right"), console.group(`🔧 Git 错误解决建议 - ${n.title}`), console.log(O), console.log("建议步骤:"), n.suggestions.forEach((o, H) => {
        console.log(`${H + 1}. ${o}`);
      }), console.groupEnd();
    }, r = (t) => {
      N.value = !1;
    }, f = (t) => {
      x.value = t, q.value = t.recommended_branch || "main", G.value = !0;
    }, k = (t) => {
      const n = String(t), z = "would be overwritten by checkout:", O = n.indexOf(z);
      if (O < 0) return [];
      const Q = n.slice(O + z.length), o = Q.search(/Please move|Aborting|Error:/);
      return (o >= 0 ? Q.slice(0, o) : Q).split(/\r?\n/).map((le) => le.trim()).filter((le) => le && !le.startsWith("Please ") && !le.startsWith("Aborting"));
    }, C = async (t) => {
      try {
        return await Ie(t), await S(), T.msg(`已切换到 ${t} 分支`, "success", "bottom-right"), !0;
      } catch (n) {
        const z = k(n);
        if (z.length > 0)
          return Y.value = t, ee.value = z, G.value = !1, M.value = !0, !1;
        throw n;
      }
    }, U = async (t) => {
      V.value = !0;
      try {
        await C(t);
      } catch (n) {
        B.error("[GitSync] 切换分支失败", n), s(n);
      } finally {
        V.value = !1;
      }
    }, ae = async () => {
      const t = Y.value, n = [...ee.value];
      if (!t || n.length === 0) {
        M.value = !1;
        return;
      }
      V.value = !0;
      try {
        for (const z of n)
          await _t(z);
        M.value = !1, ee.value = [], Y.value = "", await Ie(t), await S(), T.msg(`已切换到 ${t} 分支`, "success", "bottom-right");
      } catch (z) {
        B.error("[GitSync] 处理未跟踪文件后切换分支失败", z), s(z);
      } finally {
        V.value = !1;
      }
    }, te = (t) => {
      if (t.branch_selection) {
        f(t.branch_selection);
        return;
      }
      t.success ? t.has_conflicts ? B.info("[GitSync] Pull 检测到冲突，由全局对话框处理") : t.files_updated === 0 ? T.msg(l("settings.gitSync.alreadyUpToDate"), "success", "bottom-right") : T.msg(l("settings.gitSync.pullSuccess", { count: t.files_updated }), "success", "bottom-right") : T.msg(l("settings.gitSync.pullFailed"), "error", "top-right");
    }, F = async () => {
      se.value = !0;
      try {
        X.value = await St(10), fe.value = !0;
      } catch (t) {
        B.error("[GitSync] 加载 Git 记录失败", t), s(t);
      } finally {
        se.value = !1;
      }
    }, Me = (t, n) => {
      ne.value = { record: t, file: n }, J.value = !0;
    }, Ue = async () => {
      const t = ne.value;
      if (t)
        try {
          await wt(t.record.commit_hash, t.file.file_path), T.msg("文件已恢复，请检查待同步记录后再推送", "success", "bottom-right"), ne.value = null, await S();
        } catch (n) {
          B.error("[GitSync] 恢复 Git 文件失败", n), s(n);
        }
    }, Oe = async () => {
      try {
        B.info("[GitSync] 开始加载 Git 设置");
        const t = await Vt();
        b.value = t, B.info("[GitSync] Git 设置加载成功", t);
      } catch (t) {
        B.error("[GitSync] 加载 Git 设置失败", t), T.msg(l("settings.gitSync.loadFailed"), "error", "top-right");
      }
    }, ye = async () => {
      try {
        await Ct(b.value);
      } catch (t) {
        throw B.error("[GitSync] 保存 Git 设置失败", t), t;
      }
    }, Re = async (t) => {
      V.value = !0;
      try {
        await ye(), T.msg(l(t ? "settings.gitSync.enabledSuccess" : "settings.gitSync.disabledSuccess"), "success", "bottom-right");
      } catch {
        T.msg(l("settings.gitSync.saveFailed"), "error", "top-right"), b.value.enabled = !t;
      } finally {
        V.value = !1;
      }
    }, We = async (t) => {
      V.value = !0;
      try {
        await ye(), T.msg(l(t ? "settings.gitSync.pullOnStartEnabled" : "settings.gitSync.pullOnStartDisabled"), "success", "bottom-right");
      } catch {
        T.msg(l("settings.gitSync.saveFailed"), "error", "top-right"), b.value.pull_on_start = !t;
      } finally {
        V.value = !1;
      }
    }, je = async (t) => {
      V.value = !0;
      try {
        await ye(), t ? await Te() : await Pe(), T.msg(l(t ? "settings.gitSync.autoSyncEnabled" : "settings.gitSync.autoSyncDisabled"), "success", "bottom-right");
      } catch {
        T.msg(l("settings.gitSync.saveFailed"), "error", "top-right"), b.value.auto_sync = !t;
      } finally {
        V.value = !1;
      }
    }, He = async () => {
      V.value = !0;
      try {
        await ye(), b.value.auto_sync && (await Pe(), await Te());
      } catch {
        T.msg(l("settings.gitSync.saveFailed"), "error", "top-right");
      } finally {
        V.value = !1;
      }
    }, Ke = async () => {
      B.info("[GitSync] 手动 Pull 开始"), E.value = !0;
      try {
        const t = await Ee();
        te(t);
      } catch (t) {
        B.error("[GitSync] 手动 Pull 失败", t), s(t);
      } finally {
        E.value = !1;
      }
    }, Ze = async (t) => {
      const n = String(t || "main");
      E.value = !0;
      try {
        if (!await C(n)) return;
        G.value = !1;
        const O = await Ee();
        te(O);
      } catch (z) {
        B.error("[GitSync] 切换分支后 Pull 失败", z), s(z);
      } finally {
        E.value = !1;
      }
    }, qe = async () => {
      B.info("[GitSync] 手动 Push 开始"), v.value = !0;
      try {
        const t = await kt("Manual sync");
        t.success ? T.msg(l("settings.gitSync.pushSuccess", { count: t.files_pushed }), "success", "bottom-right") : T.msg(l("settings.gitSync.pushFailed"), "error", "top-right");
      } catch (t) {
        B.error("[GitSync] 手动 Push 失败", t), s(t);
      } finally {
        v.value = !1;
      }
    };
    return Ae(async () => {
      await Oe(), await h(), await S();
    }), (t, n) => {
      const z = De, O = Be, Q = Dt;
      return d(), y("div", Qt, [
        p(" 固定标题 "),
        a("div", es, [
          a(
            "h3",
            ts,
            c(t.$t("settings.gitSync.title")),
            1
            /* TEXT */
          )
        ]),
        p(" 可滚动内容 "),
        a("main", ss, [
          p(" 当前同步状态：同面板内左右分栏 "),
          e(b).enabled ? (d(), y(
            "div",
            {
              key: 0,
              class: j(["sync-status-panel", `sync-status-panel--${e(g)}`])
            },
            [
              p(" 左侧：状态摘要 "),
              a("div", ns, [
                a("div", as, [
                  e(g) === "syncing" ? (d(), W(e($t), {
                    key: 0,
                    class: "git-sync-icon",
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : e(g) === "synced" || e(g) === "idle" || e(g) === "disabled" ? (d(), W(e(Tt), {
                    key: 1,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : e(g) === "has_changes" ? (d(), W(e(It), {
                    key: 2,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : e(g) === "error" ? (d(), W(e(zt), {
                    key: 3,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : p("v-if", !0)
                ]),
                a("div", ls, [
                  a(
                    "div",
                    is,
                    c(w(e(g))),
                    1
                    /* TEXT */
                  ),
                  a("div", os, [
                    e(g) === "syncing" ? (d(), y(
                      R,
                      { key: 0 },
                      [
                        K(
                          c(t.$t("settings.gitSync.status.syncing")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : e(g) === "has_changes" ? (d(), y(
                      "span",
                      rs,
                      c(e(u)) + " " + c(t.$t("settings.gitSync.status.pendingFiles")),
                      1
                      /* TEXT */
                    )) : e(g) === "synced" || e(g) === "idle" ? (d(), y(
                      R,
                      { key: 2 },
                      [
                        K(
                          c(e(P) ? `${t.$t("settings.gitSync.status.lastSync")}: ${e(P)}` : t.$t("settings.gitSync.status.waitingSync")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : e(g) === "error" ? (d(), y(
                      R,
                      { key: 3 },
                      [
                        K(
                          c(t.$t("settings.gitSync.status.error")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : e(g) === "disabled" ? (d(), y(
                      R,
                      { key: 4 },
                      [
                        K(
                          c(t.$t("settings.gitSync.status.checking")),
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
              e(g) === "has_changes" && e(u) > 0 ? (d(), y(
                R,
                { key: 0 },
                [
                  n[16] || (n[16] = a(
                    "div",
                    { class: "sync-status-panel__divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  a("div", us, [
                    a(
                      "div",
                      cs,
                      c(t.$t("settings.gitSync.status.pendingFilesTitle")) + " (" + c(e(u)) + ") ",
                      1
                      /* TEXT */
                    ),
                    a("div", ds, [
                      (d(!0), y(
                        R,
                        null,
                        re(e(A), (o) => (d(), y("div", {
                          key: o,
                          class: "sync-pending-file-item"
                        }, [
                          a(
                            "span",
                            ms,
                            c(o),
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
          a(
            "div",
            gs,
            c(t.$t("settings.gitSync.status.section.config")),
            1
            /* TEXT */
          ),
          p(" 启用 Git 同步 "),
          a("section", fs, [
            a("div", ys, [
              a(
                "div",
                ps,
                c(t.$t("settings.gitSync.enabled")),
                1
                /* TEXT */
              ),
              a(
                "div",
                vs,
                c(t.$t("settings.gitSync.enabledDesc")),
                1
                /* TEXT */
              )
            ]),
            a("div", hs, [
              _(e($e), {
                modelValue: e(b).enabled,
                "onUpdate:modelValue": n[0] || (n[0] = (o) => e(b).enabled = o),
                "active-text": t.$t("common.on"),
                "inactive-text": t.$t("common.off"),
                disabled: e(V),
                onChange: Re
              }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
            ])
          ]),
          p(" 同步选项（Git 必要配置在个人中心填写，此处仅保留开关与同步操作） "),
          e(b).enabled ? (d(), y(
            R,
            { key: 1 },
            [
              e(m)?.available_branches?.length ? (d(), y("section", bs, [
                n[17] || (n[17] = a(
                  "div",
                  { class: "summarize-label" },
                  [
                    a("div", { class: "summarize-label-title" }, "同步分支"),
                    a("div", { class: "summarize-label-desc" }, " 主分支固定为 main，检测到其他分支时可在这里切换 ")
                  ],
                  -1
                  /* HOISTED */
                )),
                a("div", _s, [
                  _(O, {
                    "model-value": e(m).branch || "main",
                    class: "summarize-input !w-40",
                    disabled: e(V) || e(E) || e(v),
                    onChange: U
                  }, {
                    default: L(() => [
                      (d(!0), y(
                        R,
                        null,
                        re(e(m).available_branches, (o) => (d(), W(z, {
                          key: o,
                          label: o === "main" ? `${o}（主分支）` : o,
                          value: o
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
              a("section", Ss, [
                a("div", ws, [
                  a(
                    "div",
                    Vs,
                    c(t.$t("settings.gitSync.pullOnStart")),
                    1
                    /* TEXT */
                  ),
                  a(
                    "div",
                    ks,
                    c(t.$t("settings.gitSync.pullOnStartDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", Cs, [
                  _(e($e), {
                    modelValue: e(b).pull_on_start,
                    "onUpdate:modelValue": n[1] || (n[1] = (o) => e(b).pull_on_start = o),
                    "active-text": t.$t("common.on"),
                    "inactive-text": t.$t("common.off"),
                    disabled: e(V),
                    onChange: We
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              p(" 自动同步 "),
              a("section", $s, [
                a("div", Ns, [
                  a(
                    "div",
                    Gs,
                    c(t.$t("settings.gitSync.autoSync")),
                    1
                    /* TEXT */
                  ),
                  a(
                    "div",
                    zs,
                    c(t.$t("settings.gitSync.autoSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", Is, [
                  _(e($e), {
                    modelValue: e(b).auto_sync,
                    "onUpdate:modelValue": n[2] || (n[2] = (o) => e(b).auto_sync = o),
                    "active-text": t.$t("common.on"),
                    "inactive-text": t.$t("common.off"),
                    disabled: e(V),
                    onChange: je
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              p(" 自动同步延迟（仅在启用自动同步时显示） "),
              e(b).auto_sync ? (d(), y("section", Ts, [
                a("div", Ps, [
                  a(
                    "div",
                    Es,
                    c(t.$t("settings.gitSync.autoSyncDelay")),
                    1
                    /* TEXT */
                  ),
                  a(
                    "div",
                    Fs,
                    c(t.$t("settings.gitSync.autoSyncDelayDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", xs, [
                  _(Q, {
                    modelValue: e(b).auto_sync_delay,
                    "onUpdate:modelValue": n[3] || (n[3] = (o) => e(b).auto_sync_delay = o),
                    min: 1,
                    max: 60,
                    disabled: e(V),
                    onChange: He,
                    class: "!w-32"
                  }, null, 8, ["modelValue", "disabled"]),
                  a(
                    "span",
                    Bs,
                    c(t.$t("settings.gitSync.minutes")),
                    1
                    /* TEXT */
                  )
                ])
              ])) : p("v-if", !0),
              p(" 第二部分：同步操作 "),
              a(
                "div",
                Ds,
                c(t.$t("settings.gitSync.status.section.sync") || "同步操作"),
                1
                /* TEXT */
              ),
              p(" 手动同步按钮 "),
              a("section", Ls, [
                a("div", As, [
                  a(
                    "div",
                    Ms,
                    c(t.$t("settings.gitSync.manualSync")),
                    1
                    /* TEXT */
                  ),
                  a(
                    "div",
                    Us,
                    c(t.$t("settings.gitSync.manualSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", Os, [
                  _(e(ge), {
                    type: "primary",
                    size: "small",
                    loading: e(E),
                    onClick: Ke
                  }, {
                    default: L(() => [
                      K(
                        c(t.$t("settings.gitSync.pull")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"]),
                  _(e(ge), {
                    type: "primary",
                    size: "small",
                    loading: e(v),
                    onClick: qe
                  }, {
                    default: L(() => [
                      K(
                        c(t.$t("settings.gitSync.push")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ]),
              a("section", Rs, [
                a("div", Ws, [
                  n[19] || (n[19] = a(
                    "div",
                    null,
                    [
                      a("div", { class: "summarize-label-title" }, "Git 记录"),
                      a("div", { class: "summarize-label-desc" }, "最近 10 条提交，可查看同步状态并恢复单个文件")
                    ],
                    -1
                    /* HOISTED */
                  )),
                  _(e(ge), {
                    size: "small",
                    loading: e(se),
                    onClick: F
                  }, {
                    default: L(() => n[18] || (n[18] = [
                      K(" 刷新 ")
                    ])),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ]),
                e(X).length ? (d(), y("div", js, [
                  (d(!0), y(
                    R,
                    null,
                    re(e(X), (o) => (d(), y("div", {
                      key: o.commit_hash,
                      class: "git-record-item"
                    }, [
                      a("div", Hs, [
                        a(
                          "span",
                          {
                            class: j(["git-record-state", { synced: o.synced }])
                          },
                          c(o.synced ? "已同步" : "待推送"),
                          3
                          /* TEXT, CLASS */
                        ),
                        a("span", {
                          class: "git-record-message",
                          title: o.message
                        }, c(o.message), 9, Ks),
                        a(
                          "span",
                          Zs,
                          c(o.time),
                          1
                          /* TEXT */
                        )
                      ]),
                      a("div", qs, [
                        a(
                          "span",
                          null,
                          c(o.short_hash),
                          1
                          /* TEXT */
                        ),
                        a(
                          "span",
                          null,
                          c(o.author),
                          1
                          /* TEXT */
                        )
                      ]),
                      o.files.length ? (d(), y("div", Ys, [
                        (d(!0), y(
                          R,
                          null,
                          re(o.files.slice(0, 6), (H) => (d(), y("button", {
                            key: `${o.commit_hash}-${H.file_path}`,
                            class: "git-record-file",
                            type: "button",
                            title: `${H.status} ${H.file_path}`,
                            onClick: (le) => Me(o, H)
                          }, [
                            a(
                              "span",
                              Js,
                              c(H.status),
                              1
                              /* TEXT */
                            ),
                            a(
                              "span",
                              Qs,
                              c(H.file_name),
                              1
                              /* TEXT */
                            )
                          ], 8, Xs))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        o.files.length > 6 ? (d(), y(
                          "span",
                          en,
                          " +" + c(o.files.length - 6),
                          1
                          /* TEXT */
                        )) : p("v-if", !0)
                      ])) : p("v-if", !0)
                    ]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (d(), y(
                  "div",
                  tn,
                  c(e(se) ? "正在加载记录..." : e(fe) ? "暂无 Git 记录" : "点击刷新查看最近 10 条提交"),
                  1
                  /* TEXT */
                ))
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : p("v-if", !0)
        ]),
        p(" 自定义确认框 "),
        _(Ne, {
          modelValue: e(N),
          "onUpdate:modelValue": n[4] || (n[4] = (o) => oe(N) ? N.value = o : null),
          title: e(I).title,
          message: e(I).message,
          "primary-text": e(I).primaryText,
          "secondary-text": e(I).secondaryText,
          type: e(I).type,
          onPrimary: n[5] || (n[5] = (o) => r()),
          onSecondary: n[6] || (n[6] = (o) => r()),
          onClose: n[7] || (n[7] = (o) => r())
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "type"]),
        _(e(Rt), {
          modelValue: e(G),
          "onUpdate:modelValue": n[8] || (n[8] = (o) => oe(G) ? G.value = o : null),
          title: "选择同步分支",
          message: e(Ve),
          options: e(we),
          "default-value": e(q),
          "confirm-text": "切换并同步",
          "cancel-text": "取消",
          loading: e(E),
          onConfirm: Ze,
          onCancel: n[9] || (n[9] = (o) => G.value = !1)
        }, null, 8, ["modelValue", "message", "options", "default-value", "loading"]),
        _(Ne, {
          modelValue: e(M),
          "onUpdate:modelValue": n[10] || (n[10] = (o) => oe(M) ? M.value = o : null),
          title: "切换分支前需要处理未跟踪文件",
          message: e(de),
          "primary-text": "使用目标分支文件",
          "secondary-text": "取消",
          type: "warning",
          onPrimary: ae,
          onSecondary: n[11] || (n[11] = (o) => M.value = !1),
          onClose: n[12] || (n[12] = (o) => M.value = !1)
        }, null, 8, ["modelValue", "message"]),
        _(Ne, {
          modelValue: e(J),
          "onUpdate:modelValue": n[13] || (n[13] = (o) => oe(J) ? J.value = o : null),
          title: "恢复文件",
          message: e(ke),
          "primary-text": "确认恢复",
          "secondary-text": "取消",
          type: "warning",
          onPrimary: Ue,
          onSecondary: n[14] || (n[14] = (o) => J.value = !1),
          onClose: n[15] || (n[15] = (o) => J.value = !1)
        }, null, 8, ["modelValue", "message"])
      ]);
    };
  }
}), gn = /* @__PURE__ */ Se(sn, [["__scopeId", "data-v-3ce37232"]]);
export {
  gn as default
};
