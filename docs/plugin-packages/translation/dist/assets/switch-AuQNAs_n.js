import { A as S, d as W, k as d, r as T, w as O, f as Q, a as v, o as i, q as E, e as c, ag as _, u as a, n as u, b as r, v as p, y as b, s as C, g as L, c as x, B as ee, ac as ae, l as ie, az as $ } from "./runtime-entry-C62Reu10.js";
import { a$ as te, a_ as w, i as N, b as ne, X as P, Y as B, W as A, Z as se, d as oe, bc as g, _ as le, a1 as ce, a3 as re, u as ue, b8 as de, a4 as ve, b6 as fe, a2 as U, z as m, bj as pe, a9 as me, w as he } from "./_plugin-vue_export-helper-BxX7cX_q.js";
const be = (o) => ["", ...te].includes(o), ye = ne({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: be
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: g
  },
  activeActionIcon: {
    type: g
  },
  activeIcon: {
    type: g
  },
  inactiveIcon: {
    type: g
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: !0
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  beforeChange: {
    type: oe(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...se(["ariaLabel"])
}), ke = {
  [A]: (o) => w(o) || S(o) || N(o),
  [B]: (o) => w(o) || S(o) || N(o),
  [P]: (o) => w(o) || S(o) || N(o)
}, z = "ElSwitch", Ie = W({
  name: z
}), ge = /* @__PURE__ */ W({
  ...Ie,
  props: ye,
  emits: ke,
  setup(o, { expose: j, emit: f }) {
    const n = o, { formItem: y } = ce(), q = re(), t = ue("switch"), { inputId: G } = de(n, {
      formItemContext: y
    }), k = ve(d(() => n.loading)), D = T(n.modelValue !== !1), h = T(), H = T(), R = d(() => [
      t.b(),
      t.m(q.value),
      t.is("disabled", k.value),
      t.is("checked", s.value)
    ]), X = d(() => [
      t.e("label"),
      t.em("label", "left"),
      t.is("active", !s.value)
    ]), Y = d(() => [
      t.e("label"),
      t.em("label", "right"),
      t.is("active", s.value)
    ]), Z = d(() => ({
      width: fe(n.width)
    }));
    O(() => n.modelValue, () => {
      D.value = !0;
    });
    const K = d(() => D.value ? n.modelValue : !1), s = d(() => K.value === n.activeValue);
    [n.activeValue, n.inactiveValue].includes(K.value) || (f(A, n.inactiveValue), f(B, n.inactiveValue), f(P, n.inactiveValue)), O(s, (e) => {
      var l;
      h.value.checked = e, n.validateEvent && ((l = y?.validate) == null || l.call(y, "change").catch((M) => U(M)));
    });
    const I = () => {
      const e = s.value ? n.inactiveValue : n.activeValue;
      f(A, e), f(B, e), f(P, e), ie(() => {
        h.value.checked = s.value;
      });
    }, F = () => {
      if (k.value)
        return;
      const { beforeChange: e } = n;
      if (!e) {
        I();
        return;
      }
      const l = e();
      [
        $(l),
        w(l)
      ].includes(!0) || me(z, "beforeChange must return type `Promise<boolean>` or `boolean`"), $(l) ? l.then((V) => {
        V && I();
      }).catch((V) => {
        U(z, `some error occurred: ${V}`);
      }) : l && I();
    }, J = () => {
      var e, l;
      (l = (e = h.value) == null ? void 0 : e.focus) == null || l.call(e);
    };
    return Q(() => {
      h.value.checked = s.value;
    }), j({
      focus: J,
      checked: s
    }), (e, l) => (i(), v("div", {
      class: u(a(R)),
      onClick: ae(F, ["prevent"])
    }, [
      E("input", {
        id: a(G),
        ref_key: "input",
        ref: h,
        class: u(a(t).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": a(s),
        "aria-disabled": a(k),
        "aria-label": e.ariaLabel,
        name: e.name,
        "true-value": e.activeValue,
        "false-value": e.inactiveValue,
        disabled: a(k),
        tabindex: e.tabindex,
        onChange: I,
        onKeydown: _(F, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !e.inlinePrompt && (e.inactiveIcon || e.inactiveText) ? (i(), v("span", {
        key: 0,
        class: u(a(X))
      }, [
        e.inactiveIcon ? (i(), r(a(m), { key: 0 }, {
          default: p(() => [
            (i(), r(b(e.inactiveIcon)))
          ]),
          _: 1
        })) : c("v-if", !0),
        !e.inactiveIcon && e.inactiveText ? (i(), v("span", {
          key: 1,
          "aria-hidden": a(s)
        }, C(e.inactiveText), 9, ["aria-hidden"])) : c("v-if", !0)
      ], 2)) : c("v-if", !0),
      E("span", {
        ref_key: "core",
        ref: H,
        class: u(a(t).e("core")),
        style: ee(a(Z))
      }, [
        e.inlinePrompt ? (i(), v("div", {
          key: 0,
          class: u(a(t).e("inner"))
        }, [
          e.activeIcon || e.inactiveIcon ? (i(), r(a(m), {
            key: 0,
            class: u(a(t).is("icon"))
          }, {
            default: p(() => [
              (i(), r(b(a(s) ? e.activeIcon : e.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : e.activeText || e.inactiveText ? (i(), v("span", {
            key: 1,
            class: u(a(t).is("text")),
            "aria-hidden": !a(s)
          }, C(a(s) ? e.activeText : e.inactiveText), 11, ["aria-hidden"])) : c("v-if", !0)
        ], 2)) : c("v-if", !0),
        E("div", {
          class: u(a(t).e("action"))
        }, [
          e.loading ? (i(), r(a(m), {
            key: 0,
            class: u(a(t).is("loading"))
          }, {
            default: p(() => [
              x(a(pe))
            ]),
            _: 1
          }, 8, ["class"])) : a(s) ? L(e.$slots, "active-action", { key: 1 }, () => [
            e.activeActionIcon ? (i(), r(a(m), { key: 0 }, {
              default: p(() => [
                (i(), r(b(e.activeActionIcon)))
              ]),
              _: 1
            })) : c("v-if", !0)
          ]) : a(s) ? c("v-if", !0) : L(e.$slots, "inactive-action", { key: 2 }, () => [
            e.inactiveActionIcon ? (i(), r(a(m), { key: 0 }, {
              default: p(() => [
                (i(), r(b(e.inactiveActionIcon)))
              ]),
              _: 1
            })) : c("v-if", !0)
          ])
        ], 2)
      ], 6),
      !e.inlinePrompt && (e.activeIcon || e.activeText) ? (i(), v("span", {
        key: 1,
        class: u(a(Y))
      }, [
        e.activeIcon ? (i(), r(a(m), { key: 0 }, {
          default: p(() => [
            (i(), r(b(e.activeIcon)))
          ]),
          _: 1
        })) : c("v-if", !0),
        !e.activeIcon && e.activeText ? (i(), v("span", {
          key: 1,
          "aria-hidden": !a(s)
        }, C(e.activeText), 9, ["aria-hidden"])) : c("v-if", !0)
      ], 2)) : c("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var we = /* @__PURE__ */ le(ge, [["__file", "switch.vue"]]);
const Te = he(we);
export {
  Te as E
};
