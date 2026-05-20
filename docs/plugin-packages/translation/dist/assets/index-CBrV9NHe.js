import { A as G, k as p, D as Ue, d as Pe, aq as Ye, ar as Xe, T as Z, r as J, w as Q, l as B, f as _e, t as qe, a as g, o as c, e as f, F as ee, q as T, n as m, u as t, g as K, b as S, v as R, y as W, m as ge, c as Ge, ac as Ze, $ as Je, s as j, B as xe, i as we } from "./runtime-entry-DtonpMUQ.js";
import { bi as Te, i as Se, b as Qe, U as oe, X as et, bt as tt, d as te, b9 as Ce, Y as ot, a0 as U, bu as at, _ as nt, u as Ee, a1 as st, a2 as lt, ad as rt, $ as it, b5 as ut, bv as dt, bw as ct, bx as pt, T as ft, a$ as vt, by as mt, v as $, q as ht, V as Ie, W as ze, w as yt } from "./_plugin-vue_export-helper-CKv_N83a.js";
const bt = () => Te && /firefox/i.test(window.navigator.userAgent);
let b;
const gt = {
  height: "0",
  visibility: "hidden",
  overflow: bt() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, xt = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function wt(a) {
  const v = window.getComputedStyle(a), i = v.getPropertyValue("box-sizing"), o = Number.parseFloat(v.getPropertyValue("padding-bottom")) + Number.parseFloat(v.getPropertyValue("padding-top")), r = Number.parseFloat(v.getPropertyValue("border-bottom-width")) + Number.parseFloat(v.getPropertyValue("border-top-width"));
  return { contextStyle: xt.map((l) => [
    l,
    v.getPropertyValue(l)
  ]), paddingSize: o, borderSize: r, boxSizing: i };
}
function Ne(a, v = 1, i) {
  var o;
  b || (b = document.createElement("textarea"), document.body.appendChild(b));
  const { paddingSize: r, borderSize: u, boxSizing: l, contextStyle: x } = wt(a);
  x.forEach(([y, V]) => b?.style.setProperty(y, V)), Object.entries(gt).forEach(([y, V]) => b?.style.setProperty(y, V, "important")), b.value = a.value || a.placeholder || "";
  let d = b.scrollHeight;
  const C = {};
  l === "border-box" ? d = d + u : l === "content-box" && (d = d - r), b.value = "";
  const h = b.scrollHeight - r;
  if (Se(v)) {
    let y = h * v;
    l === "border-box" && (y = y + r + u), d = Math.max(y, d), C.minHeight = `${y}px`;
  }
  if (Se(i)) {
    let y = h * i;
    l === "border-box" && (y = y + r + u), d = Math.min(y, d);
  }
  return C.height = `${d}px`, (o = b.parentNode) == null || o.removeChild(b), b = void 0, C;
}
const St = Qe({
  id: {
    type: String,
    default: void 0
  },
  size: ot,
  disabled: Boolean,
  modelValue: {
    type: te([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: te([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  showWordLimit: Boolean,
  suffixIcon: {
    type: Ce
  },
  prefixIcon: {
    type: Ce
  },
  containerRole: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: te([Object, Array, String]),
    default: () => tt({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...et(["ariaLabel"])
}), Ct = {
  [oe]: (a) => G(a),
  input: (a) => G(a),
  change: (a) => G(a),
  focus: (a) => a instanceof FocusEvent,
  blur: (a) => a instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (a) => a instanceof MouseEvent,
  mouseenter: (a) => a instanceof MouseEvent,
  keydown: (a) => a instanceof Event,
  compositionstart: (a) => a instanceof CompositionEvent,
  compositionupdate: (a) => a instanceof CompositionEvent,
  compositionend: (a) => a instanceof CompositionEvent
}, Et = ["class", "style"], It = /^on[A-Z]/, zt = (a = {}) => {
  const { excludeListeners: v = !1, excludeKeys: i } = a, o = p(() => (i?.value || []).concat(Et)), r = Ue();
  return r ? p(() => {
    var u;
    return at(Object.entries((u = r.proxy) == null ? void 0 : u.$attrs).filter(([l]) => !o.value.includes(l) && !(v && It.test(l))));
  }) : (U("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), p(() => ({})));
};
function Nt(a) {
  let v;
  function i() {
    if (a.value == null)
      return;
    const { selectionStart: r, selectionEnd: u, value: l } = a.value;
    if (r == null || u == null)
      return;
    const x = l.slice(0, Math.max(0, r)), d = l.slice(Math.max(0, u));
    v = {
      selectionStart: r,
      selectionEnd: u,
      value: l,
      beforeTxt: x,
      afterTxt: d
    };
  }
  function o() {
    if (a.value == null || v == null)
      return;
    const { value: r } = a.value, { beforeTxt: u, afterTxt: l, selectionStart: x } = v;
    if (u == null || l == null || x == null)
      return;
    let d = r.length;
    if (r.endsWith(l))
      d = r.length - l.length;
    else if (r.startsWith(u))
      d = u.length;
    else {
      const C = u[x - 1], h = r.indexOf(C, x - 1);
      h !== -1 && (d = h + 1);
    }
    a.value.setSelectionRange(d, d);
  }
  return [i, o];
}
const Ve = "ElInput", Pt = Pe({
  name: Ve,
  inheritAttrs: !1
}), Tt = /* @__PURE__ */ Pe({
  ...Pt,
  props: St,
  emits: Ct,
  setup(a, { expose: v, emit: i }) {
    const o = a, r = Ye(), u = zt(), l = Xe(), x = p(() => [
      o.type === "textarea" ? ae.b() : n.b(),
      n.m(V.value),
      n.is("disabled", I.value),
      n.is("exceed", $e.value),
      {
        [n.b("group")]: l.prepend || l.append,
        [n.m("prefix")]: l.prefix || o.prefixIcon,
        [n.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [n.bm("suffix", "password-clear")]: D.value && X.value,
        [n.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), d = p(() => [
      n.e("wrapper"),
      n.is("focus", H.value)
    ]), { form: C, formItem: h } = it(), { inputId: y } = ut(o, {
      formItemContext: h
    }), V = st(), I = lt(), n = Ee("input"), ae = Ee("textarea"), L = Z(), w = Z(), Y = J(!1), O = J(!1), ne = J(), A = Z(o.inputStyle), z = p(() => L.value || w.value), { wrapperRef: ke, isFocused: H, handleFocus: Fe, handleBlur: Me } = rt(z, {
      beforeFocus() {
        return I.value;
      },
      afterBlur() {
        var e;
        o.validateEvent && ((e = h?.validate) == null || e.call(h, "blur").catch((s) => U(s)));
      }
    }), se = p(() => {
      var e;
      return (e = C?.statusIcon) != null ? e : !1;
    }), k = p(() => h?.validateState || ""), le = p(() => k.value && dt[k.value]), Be = p(() => O.value ? ct : pt), Re = p(() => [
      r.style
    ]), re = p(() => [
      o.inputStyle,
      A.value,
      { resize: o.resize }
    ]), E = p(() => ft(o.modelValue) ? "" : String(o.modelValue)), D = p(() => o.clearable && !I.value && !o.readonly && !!E.value && (H.value || Y.value)), X = p(() => o.showPassword && !I.value && !!E.value && (!!E.value || H.value)), N = p(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !I.value && !o.readonly && !o.showPassword), _ = p(() => E.value.length), $e = p(() => !!N.value && _.value > Number(o.maxlength)), Le = p(() => !!l.suffix || !!o.suffixIcon || D.value || o.showPassword || N.value || !!k.value && se.value), [ie, ue] = Nt(L);
    vt(w, (e) => {
      if (Oe(), !N.value || o.resize !== "both")
        return;
      const s = e[0], { width: P } = s.contentRect;
      ne.value = {
        right: `calc(100% - ${P + 15 + 6}px)`
      };
    });
    const F = () => {
      const { type: e, autosize: s } = o;
      if (!(!Te || e !== "textarea" || !w.value))
        if (s) {
          const P = we(s) ? s.minRows : void 0, ye = we(s) ? s.maxRows : void 0, be = Ne(w.value, P, ye);
          A.value = {
            overflowY: "hidden",
            ...be
          }, B(() => {
            w.value.offsetHeight, A.value = be;
          });
        } else
          A.value = {
            minHeight: Ne(w.value).minHeight
          };
    }, Oe = ((e) => {
      let s = !1;
      return () => {
        var P;
        if (s || !o.autosize)
          return;
        ((P = w.value) == null ? void 0 : P.offsetParent) === null || (e(), s = !0);
      };
    })(F), M = () => {
      const e = z.value, s = o.formatter ? o.formatter(E.value) : E.value;
      !e || e.value === s || (e.value = s);
    }, q = async (e) => {
      ie();
      let { value: s } = e.target;
      if (o.formatter && o.parser && (s = o.parser(s)), !ce.value) {
        if (s === E.value) {
          M();
          return;
        }
        i(oe, s), i(Ie, s), await B(), M(), ue();
      }
    }, de = (e) => {
      let { value: s } = e.target;
      o.formatter && o.parser && (s = o.parser(s)), i(ze, s);
    }, {
      isComposing: ce,
      handleCompositionStart: pe,
      handleCompositionUpdate: fe,
      handleCompositionEnd: ve
    } = mt({ emit: i, afterComposition: q }), Ae = () => {
      ie(), O.value = !O.value, setTimeout(ue);
    }, He = () => {
      var e;
      return (e = z.value) == null ? void 0 : e.focus();
    }, De = () => {
      var e;
      return (e = z.value) == null ? void 0 : e.blur();
    }, Ke = (e) => {
      Y.value = !1, i("mouseleave", e);
    }, We = (e) => {
      Y.value = !0, i("mouseenter", e);
    }, me = (e) => {
      i("keydown", e);
    }, je = () => {
      var e;
      (e = z.value) == null || e.select();
    }, he = () => {
      i(oe, ""), i(ze, ""), i("clear"), i(Ie, "");
    };
    return Q(() => o.modelValue, () => {
      var e;
      B(() => F()), o.validateEvent && ((e = h?.validate) == null || e.call(h, "change").catch((s) => U(s)));
    }), Q(E, () => M()), Q(() => o.type, async () => {
      await B(), M(), F();
    }), _e(() => {
      !o.formatter && o.parser && U(Ve, "If you set the parser, you also need to set the formatter."), M(), B(F);
    }), v({
      input: L,
      textarea: w,
      ref: z,
      textareaStyle: re,
      autosize: qe(o, "autosize"),
      isComposing: ce,
      focus: He,
      blur: De,
      select: je,
      clear: he,
      resizeTextarea: F
    }), (e, s) => (c(), g("div", {
      class: m([
        t(x),
        {
          [t(n).bm("group", "append")]: e.$slots.append,
          [t(n).bm("group", "prepend")]: e.$slots.prepend
        }
      ]),
      style: xe(t(Re)),
      onMouseenter: We,
      onMouseleave: Ke
    }, [
      f(" input "),
      e.type !== "textarea" ? (c(), g(ee, { key: 0 }, [
        f(" prepend slot "),
        e.$slots.prepend ? (c(), g("div", {
          key: 0,
          class: m(t(n).be("group", "prepend"))
        }, [
          K(e.$slots, "prepend")
        ], 2)) : f("v-if", !0),
        T("div", {
          ref_key: "wrapperRef",
          ref: ke,
          class: m(t(d))
        }, [
          f(" prefix slot "),
          e.$slots.prefix || e.prefixIcon ? (c(), g("span", {
            key: 0,
            class: m(t(n).e("prefix"))
          }, [
            T("span", {
              class: m(t(n).e("prefix-inner"))
            }, [
              K(e.$slots, "prefix"),
              e.prefixIcon ? (c(), S(t($), {
                key: 0,
                class: m(t(n).e("icon"))
              }, {
                default: R(() => [
                  (c(), S(W(e.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : f("v-if", !0)
            ], 2)
          ], 2)) : f("v-if", !0),
          T("input", ge({
            id: t(y),
            ref_key: "input",
            ref: L,
            class: t(n).e("inner")
          }, t(u), {
            minlength: e.minlength,
            maxlength: e.maxlength,
            type: e.showPassword ? O.value ? "text" : "password" : e.type,
            disabled: t(I),
            readonly: e.readonly,
            autocomplete: e.autocomplete,
            tabindex: e.tabindex,
            "aria-label": e.ariaLabel,
            placeholder: e.placeholder,
            style: e.inputStyle,
            form: e.form,
            autofocus: e.autofocus,
            role: e.containerRole,
            onCompositionstart: t(pe),
            onCompositionupdate: t(fe),
            onCompositionend: t(ve),
            onInput: q,
            onChange: de,
            onKeydown: me
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          f(" suffix slot "),
          t(Le) ? (c(), g("span", {
            key: 1,
            class: m(t(n).e("suffix"))
          }, [
            T("span", {
              class: m(t(n).e("suffix-inner"))
            }, [
              !t(D) || !t(X) || !t(N) ? (c(), g(ee, { key: 0 }, [
                K(e.$slots, "suffix"),
                e.suffixIcon ? (c(), S(t($), {
                  key: 0,
                  class: m(t(n).e("icon"))
                }, {
                  default: R(() => [
                    (c(), S(W(e.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : f("v-if", !0)
              ], 64)) : f("v-if", !0),
              t(D) ? (c(), S(t($), {
                key: 1,
                class: m([t(n).e("icon"), t(n).e("clear")]),
                onMousedown: Ze(t(Je), ["prevent"]),
                onClick: he
              }, {
                default: R(() => [
                  Ge(t(ht))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : f("v-if", !0),
              t(X) ? (c(), S(t($), {
                key: 2,
                class: m([t(n).e("icon"), t(n).e("password")]),
                onClick: Ae
              }, {
                default: R(() => [
                  (c(), S(W(t(Be))))
                ]),
                _: 1
              }, 8, ["class"])) : f("v-if", !0),
              t(N) ? (c(), g("span", {
                key: 3,
                class: m(t(n).e("count"))
              }, [
                T("span", {
                  class: m(t(n).e("count-inner"))
                }, j(t(_)) + " / " + j(e.maxlength), 3)
              ], 2)) : f("v-if", !0),
              t(k) && t(le) && t(se) ? (c(), S(t($), {
                key: 4,
                class: m([
                  t(n).e("icon"),
                  t(n).e("validateIcon"),
                  t(n).is("loading", t(k) === "validating")
                ])
              }, {
                default: R(() => [
                  (c(), S(W(t(le))))
                ]),
                _: 1
              }, 8, ["class"])) : f("v-if", !0)
            ], 2)
          ], 2)) : f("v-if", !0)
        ], 2),
        f(" append slot "),
        e.$slots.append ? (c(), g("div", {
          key: 1,
          class: m(t(n).be("group", "append"))
        }, [
          K(e.$slots, "append")
        ], 2)) : f("v-if", !0)
      ], 64)) : (c(), g(ee, { key: 1 }, [
        f(" textarea "),
        T("textarea", ge({
          id: t(y),
          ref_key: "textarea",
          ref: w,
          class: [t(ae).e("inner"), t(n).is("focus", t(H))]
        }, t(u), {
          minlength: e.minlength,
          maxlength: e.maxlength,
          tabindex: e.tabindex,
          disabled: t(I),
          readonly: e.readonly,
          autocomplete: e.autocomplete,
          style: t(re),
          "aria-label": e.ariaLabel,
          placeholder: e.placeholder,
          form: e.form,
          autofocus: e.autofocus,
          rows: e.rows,
          role: e.containerRole,
          onCompositionstart: t(pe),
          onCompositionupdate: t(fe),
          onCompositionend: t(ve),
          onInput: q,
          onFocus: t(Fe),
          onBlur: t(Me),
          onChange: de,
          onKeydown: me
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        t(N) ? (c(), g("span", {
          key: 0,
          style: xe(ne.value),
          class: m(t(n).e("count"))
        }, j(t(_)) + " / " + j(e.maxlength), 7)) : f("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Vt = /* @__PURE__ */ nt(Tt, [["__file", "input.vue"]]);
const Bt = yt(Vt);
export {
  Bt as E,
  bt as i,
  zt as u
};
