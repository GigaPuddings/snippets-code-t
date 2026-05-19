import { A as S, d as W, k as d, r as T, w as O, f as Z, a as v, o as i, q as E, e as c, ag as _, u as a, n as u, b as r, v as p, y as b, s as C, g as L, c as x, B as ee, ac as ae, l as ie, az as U } from "./runtime-entry-BlsNyzIU.js";
import { aY as te, aX as V, i as N, b as ne, V as P, W as B, U as A, X as se, d as oe, b9 as I, _ as le, $ as ce, a1 as re, u as ue, b5 as de, a2 as ve, b3 as fe, a0 as $, v as m, bg as pe, a7 as me, w as he } from "./_plugin-vue_export-helper-Dr9QzqbK.js";
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
    type: I
  },
  activeActionIcon: {
    type: I
  },
  activeIcon: {
    type: I
  },
  inactiveIcon: {
    type: I
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
  [A]: (o) => V(o) || S(o) || N(o),
  [B]: (o) => V(o) || S(o) || N(o),
  [P]: (o) => V(o) || S(o) || N(o)
}, z = "ElSwitch", ge = W({
  name: z
}), Ie = /* @__PURE__ */ W({
  ...ge,
  props: ye,
  emits: ke,
  setup(o, { expose: X, emit: f }) {
    const n = o, { formItem: y } = ce(), q = re(), t = ue("switch"), { inputId: G } = de(n, {
      formItemContext: y
    }), k = ve(d(() => n.loading)), D = T(n.modelValue !== !1), h = T(), H = T(), R = d(() => [
      t.b(),
      t.m(q.value),
      t.is("disabled", k.value),
      t.is("checked", s.value)
    ]), Y = d(() => [
      t.e("label"),
      t.em("label", "left"),
      t.is("active", !s.value)
    ]), j = d(() => [
      t.e("label"),
      t.em("label", "right"),
      t.is("active", s.value)
    ]), J = d(() => ({
      width: fe(n.width)
    }));
    O(() => n.modelValue, () => {
      D.value = !0;
    });
    const K = d(() => D.value ? n.modelValue : !1), s = d(() => K.value === n.activeValue);
    [n.activeValue, n.inactiveValue].includes(K.value) || (f(A, n.inactiveValue), f(B, n.inactiveValue), f(P, n.inactiveValue)), O(s, (e) => {
      var l;
      h.value.checked = e, n.validateEvent && ((l = y?.validate) == null || l.call(y, "change").catch((M) => $(M)));
    });
    const g = () => {
      const e = s.value ? n.inactiveValue : n.activeValue;
      f(A, e), f(B, e), f(P, e), ie(() => {
        h.value.checked = s.value;
      });
    }, F = () => {
      if (k.value)
        return;
      const { beforeChange: e } = n;
      if (!e) {
        g();
        return;
      }
      const l = e();
      [
        U(l),
        V(l)
      ].includes(!0) || me(z, "beforeChange must return type `Promise<boolean>` or `boolean`"), U(l) ? l.then((w) => {
        w && g();
      }).catch((w) => {
        $(z, `some error occurred: ${w}`);
      }) : l && g();
    }, Q = () => {
      var e, l;
      (l = (e = h.value) == null ? void 0 : e.focus) == null || l.call(e);
    };
    return Z(() => {
      h.value.checked = s.value;
    }), X({
      focus: Q,
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
        onChange: g,
        onKeydown: _(F, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !e.inlinePrompt && (e.inactiveIcon || e.inactiveText) ? (i(), v("span", {
        key: 0,
        class: u(a(Y))
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
        style: ee(a(J))
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
        class: u(a(j))
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
var Ve = /* @__PURE__ */ le(Ie, [["__file", "switch.vue"]]);
const Te = he(Ve);
export {
  Te as E
};
