import { i as Bt, a as Ne, b as Wt, u as Ds, d as Ge, c as Qt, e as ws, f as Xe, g as Ca, h as ut, j as en, _ as Ht, k as tn, l as Rs, m as Ms, n as Fs, o as Sa, V as La, v as Ia, p as Oa, q as St, r as Vs, E as ke, s as Aa, w as Rn, t as jn, x as ka, y as Mt, z as Pa, A as Da, B as wa, C as Ra, D as Ma, F as Us, T as nn, G as Fa, H as $s, I as qt, J as zn, K as xs, L as Va, M as Mn, N as Ua, O as Ye, P as $a, Q as Xn, R as Jn, S as xa, U as Ga, W as Ba, X as Wa } from "./useGitStatus-Daud9_Rl.js";
import { I as Fn, c as ee, i as Je, a as $, g as Vn, s as Ft, r as me, w as Be, o as _t, b as st, n as bt, d as Ee, u as Ha, e as Ya, t as Ka, f as K, h as R, j as V, F as be, k as w, l as Y, m as u, p as Ie, q as ae, v as de, x as Ct, y as qn, z as dt, N as ja, A as H, B as It, C as Zn, D as Ot, E as ct, G as sn, T as dn, H as za, J as Xa, K as jt, L as Ja, M as qa, O as Vt, P as an, V as Qn, Q as Za, R as Qa, S as Gs, U as eo, W as to, X as Bs, Y as no } from "./runtime-entry-B9tN6Kl6.js";
const so = Fn("attention", !0, function(e) {
  return ee("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [ee("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), ee("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z",
    fill: e.colors[2]
  }, null), ee("path", {
    d: "M24 12V28",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ao = Fn("check-one", !0, function(e) {
  return ee("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [ee("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), ee("path", {
    d: "M16 24L22 30L34 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), oo = Fn("close-small", !1, function(e) {
  return ee("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [ee("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), ee("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), je = "update:modelValue", on = "change", Lt = "input", Ws = () => Bt && /firefox/i.test(window.navigator.userAgent);
let Ce;
const ro = {
  height: "0",
  visibility: "hidden",
  overflow: Ws() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, io = [
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
function lo(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), s = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), a = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: io.map((r) => [
    r,
    t.getPropertyValue(r)
  ]), paddingSize: s, borderSize: a, boxSizing: n };
}
function es(e, t = 1, n) {
  var s;
  Ce || (Ce = document.createElement("textarea"), document.body.appendChild(Ce));
  const { paddingSize: a, borderSize: o, boxSizing: r, contextStyle: i } = lo(e);
  i.forEach(([N, g]) => Ce?.style.setProperty(N, g)), Object.entries(ro).forEach(([N, g]) => Ce?.style.setProperty(N, g, "important")), Ce.value = e.value || e.placeholder || "";
  let l = Ce.scrollHeight;
  const p = {};
  r === "border-box" ? l = l + o : r === "content-box" && (l = l - a), Ce.value = "";
  const _ = Ce.scrollHeight - a;
  if (Ne(t)) {
    let N = _ * t;
    r === "border-box" && (N = N + a + o), l = Math.max(N, l), p.minHeight = `${N}px`;
  }
  if (Ne(n)) {
    let N = _ * n;
    r === "border-box" && (N = N + a + o), l = Math.min(N, l);
  }
  return p.height = `${l}px`, (s = Ce.parentNode) == null || s.removeChild(Ce), Ce = void 0, p;
}
const Hs = (e) => e, co = Wt({
  id: {
    type: String,
    default: void 0
  },
  size: ws,
  disabled: Boolean,
  modelValue: {
    type: Ge([
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
    type: Ge([Boolean, Object]),
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
    type: Qt
  },
  prefixIcon: {
    type: Qt
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
    type: Ge([Object, Array, String]),
    default: () => Hs({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Ds(["ariaLabel"])
}), uo = {
  [je]: (e) => Je(e),
  input: (e) => Je(e),
  change: (e) => Je(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, fo = ["class", "style"], mo = /^on[A-Z]/, po = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, s = $(() => (n?.value || []).concat(fo)), a = Vn();
  return a ? $(() => {
    var o;
    return Ca(Object.entries((o = a.proxy) == null ? void 0 : o.$attrs).filter(([r]) => !s.value.includes(r) && !(t && mo.test(r))));
  }) : (Xe("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), $(() => ({})));
};
function _o(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: s,
  afterBlur: a
} = {}) {
  const o = Vn(), { emit: r } = o, i = Ft(), l = me(!1), p = (g) => {
    st(t) && t(g) || l.value || (l.value = !0, r("focus", g), n?.());
  }, _ = (g) => {
    var S;
    st(s) && s(g) || g.relatedTarget && ((S = i.value) != null && S.contains(g.relatedTarget)) || (l.value = !1, r("blur", g), a?.());
  }, N = () => {
    var g, S;
    (g = i.value) != null && g.contains(document.activeElement) && i.value !== document.activeElement || (S = e.value) == null || S.focus();
  };
  return Be(i, (g) => {
    g && g.setAttribute("tabindex", "-1");
  }), ut(i, "focus", p, !0), ut(i, "blur", _, !0), ut(i, "click", N, !0), process.env.NODE_ENV === "test" && _t(() => {
    const g = en(e.value) ? e.value : document.querySelector("input,textarea");
    g && (ut(g, "focus", p, !0), ut(g, "blur", _, !0));
  }), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: p,
    handleBlur: _
  };
}
const go = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Eo({
  afterComposition: e,
  emit: t
}) {
  const n = me(!1), s = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, a = (i) => {
    var l;
    t?.("compositionupdate", i);
    const p = (l = i.target) == null ? void 0 : l.value, _ = p[p.length - 1] || "";
    n.value = !go(_);
  }, o = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, bt(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? o(i) : a(i);
    },
    handleCompositionStart: s,
    handleCompositionUpdate: a,
    handleCompositionEnd: o
  };
}
function vo(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: a, selectionEnd: o, value: r } = e.value;
    if (a == null || o == null)
      return;
    const i = r.slice(0, Math.max(0, a)), l = r.slice(Math.max(0, o));
    t = {
      selectionStart: a,
      selectionEnd: o,
      value: r,
      beforeTxt: i,
      afterTxt: l
    };
  }
  function s() {
    if (e.value == null || t == null)
      return;
    const { value: a } = e.value, { beforeTxt: o, afterTxt: r, selectionStart: i } = t;
    if (o == null || r == null || i == null)
      return;
    let l = a.length;
    if (a.endsWith(r))
      l = a.length - r.length;
    else if (a.startsWith(o))
      l = o.length;
    else {
      const p = o[i - 1], _ = a.indexOf(p, i - 1);
      _ !== -1 && (l = _ + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, s];
}
const Ys = "ElInput", yo = Ee({
  name: Ys,
  inheritAttrs: !1
}), ho = /* @__PURE__ */ Ee({
  ...yo,
  props: co,
  emits: uo,
  setup(e, { expose: t, emit: n }) {
    const s = e, a = Ha(), o = po(), r = Ya(), i = $(() => [
      s.type === "textarea" ? O.b() : T.b(),
      T.m(g.value),
      T.is("disabled", S.value),
      T.is("exceed", Me.value),
      {
        [T.b("group")]: r.prepend || r.append,
        [T.m("prefix")]: r.prefix || s.prefixIcon,
        [T.m("suffix")]: r.suffix || s.suffixIcon || s.clearable || s.showPassword,
        [T.bm("suffix", "password-clear")]: Q.value && ne.value,
        [T.b("hidden")]: s.type === "hidden"
      },
      a.class
    ]), l = $(() => [
      T.e("wrapper"),
      T.is("focus", G.value)
    ]), { form: p, formItem: _ } = Fs(), { inputId: N } = Sa(s, {
      formItemContext: _
    }), g = Rs(), S = Ms(), T = tn("input"), O = tn("textarea"), D = Ft(), d = Ft(), y = me(!1), E = me(!1), h = me(), k = Ft(s.inputStyle), P = $(() => D.value || d.value), { wrapperRef: v, isFocused: G, handleFocus: j, handleBlur: I } = _o(P, {
      beforeFocus() {
        return S.value;
      },
      afterBlur() {
        var b;
        s.validateEvent && ((b = _?.validate) == null || b.call(_, "blur").catch((m) => Xe(m)));
      }
    }), B = $(() => {
      var b;
      return (b = p?.statusIcon) != null ? b : !1;
    }), X = $(() => _?.validateState || ""), z = $(() => X.value && La[X.value]), Re = $(() => E.value ? Ia : Oa), A = $(() => [
      a.style
    ]), U = $(() => [
      s.inputStyle,
      k.value,
      { resize: s.resize }
    ]), W = $(() => St(s.modelValue) ? "" : String(s.modelValue)), Q = $(() => s.clearable && !S.value && !s.readonly && !!W.value && (G.value || y.value)), ne = $(() => s.showPassword && !S.value && !!W.value && (!!W.value || G.value)), se = $(() => s.showWordLimit && !!s.maxlength && (s.type === "text" || s.type === "textarea") && !S.value && !s.readonly && !s.showPassword), Te = $(() => W.value.length), Me = $(() => !!se.value && Te.value > Number(s.maxlength)), fe = $(() => !!r.suffix || !!s.suffixIcon || Q.value || s.showPassword || se.value || !!X.value && B.value), [gt, Et] = vo(D);
    Vs(d, (b) => {
      if (vt(), !se.value || s.resize !== "both")
        return;
      const m = b[0], { width: L } = m.contentRect;
      h.value = {
        right: `calc(100% - ${L + 15 + 6}px)`
      };
    });
    const Qe = () => {
      const { type: b, autosize: m } = s;
      if (!(!Bt || b !== "textarea" || !d.value))
        if (m) {
          const L = Zn(m) ? m.minRows : void 0, J = Zn(m) ? m.maxRows : void 0, ie = es(d.value, L, J);
          k.value = {
            overflowY: "hidden",
            ...ie
          }, bt(() => {
            d.value.offsetHeight, k.value = ie;
          });
        } else
          k.value = {
            minHeight: es(d.value).minHeight
          };
    }, vt = ((b) => {
      let m = !1;
      return () => {
        var L;
        if (m || !s.autosize)
          return;
        ((L = d.value) == null ? void 0 : L.offsetParent) === null || (b(), m = !0);
      };
    })(Qe), He = () => {
      const b = P.value, m = s.formatter ? s.formatter(W.value) : W.value;
      !b || b.value === m || (b.value = m);
    }, et = async (b) => {
      gt();
      let { value: m } = b.target;
      if (s.formatter && s.parser && (m = s.parser(m)), !ht.value) {
        if (m === W.value) {
          He();
          return;
        }
        n(je, m), n(Lt, m), await bt(), He(), Et();
      }
    }, yt = (b) => {
      let { value: m } = b.target;
      s.formatter && s.parser && (m = s.parser(m)), n(on, m);
    }, {
      isComposing: ht,
      handleCompositionStart: tt,
      handleCompositionUpdate: nt,
      handleCompositionEnd: Fe
    } = Eo({ emit: n, afterComposition: et }), rt = () => {
      gt(), E.value = !E.value, setTimeout(Et);
    }, wt = () => {
      var b;
      return (b = P.value) == null ? void 0 : b.focus();
    }, c = () => {
      var b;
      return (b = P.value) == null ? void 0 : b.blur();
    }, f = (b) => {
      y.value = !1, n("mouseleave", b);
    }, C = (b) => {
      y.value = !0, n("mouseenter", b);
    }, F = (b) => {
      n("keydown", b);
    }, oe = () => {
      var b;
      (b = P.value) == null || b.select();
    }, re = () => {
      n(je, ""), n(on, ""), n("clear"), n(Lt, "");
    };
    return Be(() => s.modelValue, () => {
      var b;
      bt(() => Qe()), s.validateEvent && ((b = _?.validate) == null || b.call(_, "change").catch((m) => Xe(m)));
    }), Be(W, () => He()), Be(() => s.type, async () => {
      await bt(), He(), Qe();
    }), _t(() => {
      !s.formatter && s.parser && Xe(Ys, "If you set the parser, you also need to set the formatter."), He(), bt(Qe);
    }), t({
      input: D,
      textarea: d,
      ref: P,
      textareaStyle: U,
      autosize: Ka(s, "autosize"),
      isComposing: ht,
      focus: wt,
      blur: c,
      select: oe,
      clear: re,
      resizeTextarea: Qe
    }), (b, m) => (R(), K("div", {
      class: Y([
        u(i),
        {
          [u(T).bm("group", "append")]: b.$slots.append,
          [u(T).bm("group", "prepend")]: b.$slots.prepend
        }
      ]),
      style: It(u(A)),
      onMouseenter: C,
      onMouseleave: f
    }, [
      V(" input "),
      b.type !== "textarea" ? (R(), K(be, { key: 0 }, [
        V(" prepend slot "),
        b.$slots.prepend ? (R(), K("div", {
          key: 0,
          class: Y(u(T).be("group", "prepend"))
        }, [
          Ie(b.$slots, "prepend")
        ], 2)) : V("v-if", !0),
        w("div", {
          ref_key: "wrapperRef",
          ref: v,
          class: Y(u(l))
        }, [
          V(" prefix slot "),
          b.$slots.prefix || b.prefixIcon ? (R(), K("span", {
            key: 0,
            class: Y(u(T).e("prefix"))
          }, [
            w("span", {
              class: Y(u(T).e("prefix-inner"))
            }, [
              Ie(b.$slots, "prefix"),
              b.prefixIcon ? (R(), ae(u(ke), {
                key: 0,
                class: Y(u(T).e("icon"))
              }, {
                default: de(() => [
                  (R(), ae(Ct(b.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : V("v-if", !0)
            ], 2)
          ], 2)) : V("v-if", !0),
          w("input", qn({
            id: u(N),
            ref_key: "input",
            ref: D,
            class: u(T).e("inner")
          }, u(o), {
            minlength: b.minlength,
            maxlength: b.maxlength,
            type: b.showPassword ? E.value ? "text" : "password" : b.type,
            disabled: u(S),
            readonly: b.readonly,
            autocomplete: b.autocomplete,
            tabindex: b.tabindex,
            "aria-label": b.ariaLabel,
            placeholder: b.placeholder,
            style: b.inputStyle,
            form: b.form,
            autofocus: b.autofocus,
            role: b.containerRole,
            onCompositionstart: u(tt),
            onCompositionupdate: u(nt),
            onCompositionend: u(Fe),
            onInput: et,
            onChange: yt,
            onKeydown: F
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          V(" suffix slot "),
          u(fe) ? (R(), K("span", {
            key: 1,
            class: Y(u(T).e("suffix"))
          }, [
            w("span", {
              class: Y(u(T).e("suffix-inner"))
            }, [
              !u(Q) || !u(ne) || !u(se) ? (R(), K(be, { key: 0 }, [
                Ie(b.$slots, "suffix"),
                b.suffixIcon ? (R(), ae(u(ke), {
                  key: 0,
                  class: Y(u(T).e("icon"))
                }, {
                  default: de(() => [
                    (R(), ae(Ct(b.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : V("v-if", !0)
              ], 64)) : V("v-if", !0),
              u(Q) ? (R(), ae(u(ke), {
                key: 1,
                class: Y([u(T).e("icon"), u(T).e("clear")]),
                onMousedown: dt(u(ja), ["prevent"]),
                onClick: re
              }, {
                default: de(() => [
                  ee(u(Aa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : V("v-if", !0),
              u(ne) ? (R(), ae(u(ke), {
                key: 2,
                class: Y([u(T).e("icon"), u(T).e("password")]),
                onClick: rt
              }, {
                default: de(() => [
                  (R(), ae(Ct(u(Re))))
                ]),
                _: 1
              }, 8, ["class"])) : V("v-if", !0),
              u(se) ? (R(), K("span", {
                key: 3,
                class: Y(u(T).e("count"))
              }, [
                w("span", {
                  class: Y(u(T).e("count-inner"))
                }, H(u(Te)) + " / " + H(b.maxlength), 3)
              ], 2)) : V("v-if", !0),
              u(X) && u(z) && u(B) ? (R(), ae(u(ke), {
                key: 4,
                class: Y([
                  u(T).e("icon"),
                  u(T).e("validateIcon"),
                  u(T).is("loading", u(X) === "validating")
                ])
              }, {
                default: de(() => [
                  (R(), ae(Ct(u(z))))
                ]),
                _: 1
              }, 8, ["class"])) : V("v-if", !0)
            ], 2)
          ], 2)) : V("v-if", !0)
        ], 2),
        V(" append slot "),
        b.$slots.append ? (R(), K("div", {
          key: 1,
          class: Y(u(T).be("group", "append"))
        }, [
          Ie(b.$slots, "append")
        ], 2)) : V("v-if", !0)
      ], 64)) : (R(), K(be, { key: 1 }, [
        V(" textarea "),
        w("textarea", qn({
          id: u(N),
          ref_key: "textarea",
          ref: d,
          class: [u(O).e("inner"), u(T).is("focus", u(G))]
        }, u(o), {
          minlength: b.minlength,
          maxlength: b.maxlength,
          tabindex: b.tabindex,
          disabled: u(S),
          readonly: b.readonly,
          autocomplete: b.autocomplete,
          style: u(U),
          "aria-label": b.ariaLabel,
          placeholder: b.placeholder,
          form: b.form,
          autofocus: b.autofocus,
          rows: b.rows,
          role: b.containerRole,
          onCompositionstart: u(tt),
          onCompositionupdate: u(nt),
          onCompositionend: u(Fe),
          onInput: et,
          onFocus: u(j),
          onBlur: u(I),
          onChange: yt,
          onKeydown: F
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        u(se) ? (R(), K("span", {
          key: 0,
          style: It(h.value),
          class: Y(u(T).e("count"))
        }, H(u(Te)) + " / " + H(b.maxlength), 7)) : V("v-if", !0)
      ], 64))
    ], 38));
  }
});
var No = /* @__PURE__ */ Ht(ho, [["__file", "input.vue"]]);
const bo = Rn(No), To = Wt({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: !0
  },
  color: String,
  badgeStyle: {
    type: Ge([String, Object, Array])
  },
  offset: {
    type: Ge(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Co = Ee({
  name: "ElBadge"
}), So = /* @__PURE__ */ Ee({
  ...Co,
  props: To,
  setup(e, { expose: t }) {
    const n = e, s = tn("badge"), a = $(() => n.isDot ? "" : Ne(n.value) && Ne(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = $(() => {
      var r, i, l, p, _;
      return [
        {
          backgroundColor: n.color,
          marginRight: jn(-((i = (r = n.offset) == null ? void 0 : r[0]) != null ? i : 0)),
          marginTop: jn((p = (l = n.offset) == null ? void 0 : l[1]) != null ? p : 0)
        },
        (_ = n.badgeStyle) != null ? _ : {}
      ];
    });
    return t({
      content: a
    }), (r, i) => (R(), K("div", {
      class: Y(u(s).b())
    }, [
      Ie(r.$slots, "default"),
      ee(dn, {
        name: `${u(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: de(() => [
          Ot(w("sup", {
            class: Y([
              u(s).e("content"),
              u(s).em("content", r.type),
              u(s).is("fixed", !!r.$slots.default),
              u(s).is("dot", r.isDot),
              u(s).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: It(u(o))
          }, [
            Ie(r.$slots, "content", { value: u(a) }, () => [
              ct(H(u(a)), 1)
            ])
          ], 6), [
            [sn, !r.hidden && (u(a) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Lo = /* @__PURE__ */ Ht(So, [["__file", "badge.vue"]]);
const Io = Rn(Lo), $e = {}, Oo = 100, Ao = 600, ts = {
  beforeMount(e, t) {
    const n = t.value, { interval: s = Oo, delay: a = Ao } = st(n) ? {} : n;
    let o, r;
    const i = () => st(n) ? n() : n.handler(), l = () => {
      r && (clearTimeout(r), r = void 0), o && (clearInterval(o), o = void 0);
    };
    e.addEventListener("mousedown", (p) => {
      p.button === 0 && (l(), i(), document.addEventListener("mouseup", () => l(), {
        once: !0
      }), r = setTimeout(() => {
        o = setInterval(() => {
          i();
        }, s);
      }, a));
    });
  }
}, ko = Wt({
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
  size: ws,
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
    validator: (e) => e === null || Ne(e) || ["min", "max"].includes(e),
    default: null
  },
  name: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (e) => e >= 0 && e === Number.parseInt(`${e}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...Ds(["ariaLabel"])
}), Po = {
  [on]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Lt]: (e) => Ne(e) || St(e),
  [je]: (e) => Ne(e) || St(e)
}, Do = Ee({
  name: "ElInputNumber"
}), wo = /* @__PURE__ */ Ee({
  ...Do,
  props: ko,
  emits: Po,
  setup(e, { expose: t, emit: n }) {
    const s = e, { t: a } = ka(), o = tn("input-number"), r = me(), i = za({
      currentValue: s.modelValue,
      userInput: null
    }), { formItem: l } = Fs(), p = $(() => Ne(s.modelValue) && s.modelValue <= s.min), _ = $(() => Ne(s.modelValue) && s.modelValue >= s.max), N = $(() => {
      const A = d(s.step);
      return Mt(s.precision) ? Math.max(d(s.modelValue), A) : (A > s.precision && Xe("InputNumber", "precision should not be less than the decimal places of step"), s.precision);
    }), g = $(() => s.controls && s.controlsPosition === "right"), S = Rs(), T = Ms(), O = $(() => {
      if (i.userInput !== null)
        return i.userInput;
      let A = i.currentValue;
      if (St(A))
        return "";
      if (Ne(A)) {
        if (Number.isNaN(A))
          return "";
        Mt(s.precision) || (A = A.toFixed(s.precision));
      }
      return A;
    }), D = (A, U) => {
      if (Mt(U) && (U = N.value), U === 0)
        return Math.round(A);
      let W = String(A);
      const Q = W.indexOf(".");
      if (Q === -1 || !W.replace(".", "").split("")[Q + U])
        return A;
      const Te = W.length;
      return W.charAt(Te - 1) === "5" && (W = `${W.slice(0, Math.max(0, Te - 1))}6`), Number.parseFloat(Number(W).toFixed(U));
    }, d = (A) => {
      if (St(A))
        return 0;
      const U = A.toString(), W = U.indexOf(".");
      let Q = 0;
      return W !== -1 && (Q = U.length - W - 1), Q;
    }, y = (A, U = 1) => Ne(A) ? D(A + s.step * U) : i.currentValue, E = () => {
      if (s.readonly || T.value || _.value)
        return;
      const A = Number(O.value) || 0, U = y(A);
      P(U), n(Lt, i.currentValue), z();
    }, h = () => {
      if (s.readonly || T.value || p.value)
        return;
      const A = Number(O.value) || 0, U = y(A, -1);
      P(U), n(Lt, i.currentValue), z();
    }, k = (A, U) => {
      const { max: W, min: Q, step: ne, precision: se, stepStrictly: Te, valueOnClear: Me } = s;
      W < Q && Ma("InputNumber", "min should not be greater than max.");
      let fe = Number(A);
      if (St(A) || Number.isNaN(fe))
        return null;
      if (A === "") {
        if (Me === null)
          return null;
        fe = Je(Me) ? { min: Q, max: W }[Me] : Me;
      }
      return Te && (fe = D(Math.round(fe / ne) * ne, se), fe !== A && U && n(je, fe)), Mt(se) || (fe = D(fe, se)), (fe > W || fe < Q) && (fe = fe > W ? W : Q, U && n(je, fe)), fe;
    }, P = (A, U = !0) => {
      var W;
      const Q = i.currentValue, ne = k(A);
      if (!U) {
        n(je, ne);
        return;
      }
      Q === ne && A || (i.userInput = null, n(je, ne), Q !== ne && n(on, ne, Q), s.validateEvent && ((W = l?.validate) == null || W.call(l, "change").catch((se) => Xe(se))), i.currentValue = ne);
    }, v = (A) => {
      i.userInput = A;
      const U = A === "" ? null : Number(A);
      n(Lt, U), P(U, !1);
    }, G = (A) => {
      const U = A !== "" ? Number(A) : "";
      (Ne(U) && !Number.isNaN(U) || A === "") && P(U), z(), i.userInput = null;
    }, j = () => {
      var A, U;
      (U = (A = r.value) == null ? void 0 : A.focus) == null || U.call(A);
    }, I = () => {
      var A, U;
      (U = (A = r.value) == null ? void 0 : A.blur) == null || U.call(A);
    }, B = (A) => {
      n("focus", A);
    }, X = (A) => {
      var U, W;
      i.userInput = null, Ws() && i.currentValue === null && ((U = r.value) != null && U.input) && (r.value.input.value = ""), n("blur", A), s.validateEvent && ((W = l?.validate) == null || W.call(l, "blur").catch((Q) => Xe(Q)));
    }, z = () => {
      i.currentValue !== s.modelValue && (i.currentValue = s.modelValue);
    }, Re = (A) => {
      document.activeElement === A.target && A.preventDefault();
    };
    return Be(() => s.modelValue, (A, U) => {
      const W = k(A, !0);
      i.userInput === null && W !== U && (i.currentValue = W);
    }, { immediate: !0 }), _t(() => {
      var A;
      const { min: U, max: W, modelValue: Q } = s, ne = (A = r.value) == null ? void 0 : A.input;
      if (ne.setAttribute("role", "spinbutton"), Number.isFinite(W) ? ne.setAttribute("aria-valuemax", String(W)) : ne.removeAttribute("aria-valuemax"), Number.isFinite(U) ? ne.setAttribute("aria-valuemin", String(U)) : ne.removeAttribute("aria-valuemin"), ne.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), ne.setAttribute("aria-disabled", String(T.value)), !Ne(Q) && Q != null) {
        let se = Number(Q);
        Number.isNaN(se) && (se = null), n(je, se);
      }
      ne.addEventListener("wheel", Re, { passive: !1 });
    }), Xa(() => {
      var A, U;
      const W = (A = r.value) == null ? void 0 : A.input;
      W?.setAttribute("aria-valuenow", `${(U = i.currentValue) != null ? U : ""}`);
    }), t({
      focus: j,
      blur: I
    }), (A, U) => (R(), K("div", {
      class: Y([
        u(o).b(),
        u(o).m(u(S)),
        u(o).is("disabled", u(T)),
        u(o).is("without-controls", !A.controls),
        u(o).is("controls-right", u(g))
      ]),
      onDragstart: dt(() => {
      }, ["prevent"])
    }, [
      A.controls ? Ot((R(), K("span", {
        key: 0,
        role: "button",
        "aria-label": u(a)("el.inputNumber.decrease"),
        class: Y([u(o).e("decrease"), u(o).is("disabled", u(p))]),
        onKeydown: jt(h, ["enter"])
      }, [
        Ie(A.$slots, "decrease-icon", {}, () => [
          ee(u(ke), null, {
            default: de(() => [
              u(g) ? (R(), ae(u(Pa), { key: 0 })) : (R(), ae(u(Da), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [u(ts), h]
      ]) : V("v-if", !0),
      A.controls ? Ot((R(), K("span", {
        key: 1,
        role: "button",
        "aria-label": u(a)("el.inputNumber.increase"),
        class: Y([u(o).e("increase"), u(o).is("disabled", u(_))]),
        onKeydown: jt(E, ["enter"])
      }, [
        Ie(A.$slots, "increase-icon", {}, () => [
          ee(u(ke), null, {
            default: de(() => [
              u(g) ? (R(), ae(u(wa), { key: 0 })) : (R(), ae(u(Ra), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [u(ts), E]
      ]) : V("v-if", !0),
      ee(u(bo), {
        id: A.id,
        ref_key: "input",
        ref: r,
        type: "number",
        step: A.step,
        "model-value": u(O),
        placeholder: A.placeholder,
        readonly: A.readonly,
        disabled: u(T),
        size: u(S),
        max: A.max,
        min: A.min,
        name: A.name,
        "aria-label": A.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          jt(dt(E, ["prevent"]), ["up"]),
          jt(dt(h, ["prevent"]), ["down"])
        ],
        onBlur: X,
        onFocus: B,
        onInput: v,
        onChange: G
      }, Ja({
        _: 2
      }, [
        A.$slots.prefix ? {
          name: "prefix",
          fn: de(() => [
            Ie(A.$slots, "prefix")
          ])
        } : void 0,
        A.$slots.suffix ? {
          name: "suffix",
          fn: de(() => [
            Ie(A.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Ro = /* @__PURE__ */ Ht(wo, [["__file", "input-number.vue"]]);
const Mo = Rn(Ro), Ks = ["success", "info", "warning", "error"], ve = Hs({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  plain: !1,
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: Bt ? document.body : void 0
}), Fo = Wt({
  customClass: {
    type: String,
    default: ve.customClass
  },
  center: {
    type: Boolean,
    default: ve.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: ve.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: ve.duration
  },
  icon: {
    type: Qt,
    default: ve.icon
  },
  id: {
    type: String,
    default: ve.id
  },
  message: {
    type: Ge([
      String,
      Object,
      Function
    ]),
    default: ve.message
  },
  onClose: {
    type: Ge(Function),
    default: ve.onClose
  },
  showClose: {
    type: Boolean,
    default: ve.showClose
  },
  type: {
    type: String,
    values: Ks,
    default: ve.type
  },
  plain: {
    type: Boolean,
    default: ve.plain
  },
  offset: {
    type: Number,
    default: ve.offset
  },
  zIndex: {
    type: Number,
    default: ve.zIndex
  },
  grouping: {
    type: Boolean,
    default: ve.grouping
  },
  repeatNum: {
    type: Number,
    default: ve.repeatNum
  }
}), Vo = {
  destroy: () => !0
}, Pe = qa([]), Uo = (e) => {
  const t = Pe.findIndex((a) => a.id === e), n = Pe[t];
  let s;
  return t > 0 && (s = Pe[t - 1]), { current: n, prev: s };
}, $o = (e) => {
  const { prev: t } = Uo(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, xo = (e, t) => Pe.findIndex((s) => s.id === e) > 0 ? 16 : t, Go = Ee({
  name: "ElMessage"
}), Bo = /* @__PURE__ */ Ee({
  ...Go,
  props: Fo,
  emits: Vo,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = Fa, { ns: a, zIndex: o } = Us("message"), { currentZIndex: r, nextZIndex: i } = o, l = me(), p = me(!1), _ = me(0);
    let N;
    const g = $(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), S = $(() => {
      const v = n.type;
      return { [a.bm("icon", v)]: v && nn[v] };
    }), T = $(() => n.icon || nn[n.type] || ""), O = $(() => $o(n.id)), D = $(() => xo(n.id, n.offset) + O.value), d = $(() => _.value + D.value), y = $(() => ({
      top: `${D.value}px`,
      zIndex: r.value
    }));
    function E() {
      n.duration !== 0 && ({ stop: N } = $s(() => {
        k();
      }, n.duration));
    }
    function h() {
      N?.();
    }
    function k() {
      p.value = !1;
    }
    function P({ code: v }) {
      v === qt.esc && k();
    }
    return _t(() => {
      E(), i(), p.value = !0;
    }), Be(() => n.repeatNum, () => {
      h(), E();
    }), ut(document, "keydown", P), Vs(l, () => {
      _.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: p,
      bottom: d,
      close: k
    }), (v, G) => (R(), ae(dn, {
      name: u(a).b("fade"),
      onBeforeLeave: v.onClose,
      onAfterLeave: (j) => v.$emit("destroy"),
      persisted: ""
    }, {
      default: de(() => [
        Ot(w("div", {
          id: v.id,
          ref_key: "messageRef",
          ref: l,
          class: Y([
            u(a).b(),
            { [u(a).m(v.type)]: v.type },
            u(a).is("center", v.center),
            u(a).is("closable", v.showClose),
            u(a).is("plain", v.plain),
            v.customClass
          ]),
          style: It(u(y)),
          role: "alert",
          onMouseenter: h,
          onMouseleave: E
        }, [
          v.repeatNum > 1 ? (R(), ae(u(Io), {
            key: 0,
            value: v.repeatNum,
            type: u(g),
            class: Y(u(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : V("v-if", !0),
          u(T) ? (R(), ae(u(ke), {
            key: 1,
            class: Y([u(a).e("icon"), u(S)])
          }, {
            default: de(() => [
              (R(), ae(Ct(u(T))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          Ie(v.$slots, "default", {}, () => [
            v.dangerouslyUseHTMLString ? (R(), K(be, { key: 1 }, [
              V(" Caution here, message could've been compromised, never use user's input as message "),
              w("p", {
                class: Y(u(a).e("content")),
                innerHTML: v.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), K("p", {
              key: 0,
              class: Y(u(a).e("content"))
            }, H(v.message), 3))
          ]),
          v.showClose ? (R(), ae(u(ke), {
            key: 2,
            class: Y(u(a).e("closeBtn")),
            onClick: dt(k, ["stop"])
          }, {
            default: de(() => [
              ee(u(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 46, ["id"]), [
          [sn, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Wo = /* @__PURE__ */ Ht(Bo, [["__file", "message.vue"]]);
let Ho = 1;
const js = (e) => {
  const t = !e || Je(e) || Vt(e) || st(e) ? { message: e } : e, n = {
    ...ve,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Je(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    en(s) || (Xe("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), s = document.body), n.appendTo = s;
  }
  return zn($e.grouping) && !n.grouping && (n.grouping = $e.grouping), Ne($e.duration) && n.duration === 3e3 && (n.duration = $e.duration), Ne($e.offset) && n.offset === 16 && (n.offset = $e.offset), zn($e.showClose) && !n.showClose && (n.showClose = $e.showClose), n;
}, Yo = (e) => {
  const t = Pe.indexOf(e);
  if (t === -1)
    return;
  Pe.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Ko = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Ho++}`, a = t.onClose, o = document.createElement("div"), r = {
    ...t,
    id: s,
    onClose: () => {
      a?.(), Yo(_);
    },
    onDestroy: () => {
      an(null, o);
    }
  }, i = ee(Wo, r, st(r.message) || Vt(r.message) ? {
    default: st(r.message) ? r.message : () => r.message
  } : null);
  i.appContext = n || At._context, an(i, o), e.appendChild(o.firstElementChild);
  const l = i.component, _ = {
    id: s,
    vnode: i,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return _;
}, At = (e = {}, t) => {
  if (!Bt)
    return { close: () => {
    } };
  const n = js(e);
  if (n.grouping && Pe.length) {
    const a = Pe.find(({ vnode: o }) => {
      var r;
      return ((r = o.props) == null ? void 0 : r.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (Ne($e.max) && Pe.length >= $e.max)
    return { close: () => {
    } };
  const s = Ko(n, t);
  return Pe.push(s), s.handler;
};
Ks.forEach((e) => {
  At[e] = (t = {}, n) => {
    const s = js(t);
    return At({ ...s, type: e }, n);
  };
});
function jo(e) {
  for (const t of Pe)
    (!e || e === t.props.type) && t.handler.close();
}
At.closeAll = jo;
At._context = null;
const zo = xs(At, "$message"), zs = [
  "success",
  "info",
  "warning",
  "error"
], Xo = Wt({
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: Boolean,
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: Qt
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Ge([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: Ge(Function),
    default: () => {
    }
  },
  onClose: {
    type: Ge(Function),
    required: !0
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: [...zs, ""],
    default: ""
  },
  zIndex: Number
}), Jo = {
  destroy: () => !0
}, qo = Ee({
  name: "ElNotification"
}), Zo = /* @__PURE__ */ Ee({
  ...qo,
  props: Xo,
  emits: Jo,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: a } = Us("notification"), { nextZIndex: o, currentZIndex: r } = a, { Close: i } = Va, l = me(!1);
    let p;
    const _ = $(() => {
      const E = n.type;
      return E && nn[n.type] ? s.m(E) : "";
    }), N = $(() => n.type && nn[n.type] || n.icon), g = $(() => n.position.endsWith("right") ? "right" : "left"), S = $(() => n.position.startsWith("top") ? "top" : "bottom"), T = $(() => {
      var E;
      return {
        [S.value]: `${n.offset}px`,
        zIndex: (E = n.zIndex) != null ? E : r.value
      };
    });
    function O() {
      n.duration > 0 && ({ stop: p } = $s(() => {
        l.value && d();
      }, n.duration));
    }
    function D() {
      p?.();
    }
    function d() {
      l.value = !1;
    }
    function y({ code: E }) {
      E === qt.delete || E === qt.backspace ? D() : E === qt.esc ? l.value && d() : O();
    }
    return _t(() => {
      O(), o(), l.value = !0;
    }), ut(document, "keydown", y), t({
      visible: l,
      close: d
    }), (E, h) => (R(), ae(dn, {
      name: u(s).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (k) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: de(() => [
        Ot(w("div", {
          id: E.id,
          class: Y([u(s).b(), E.customClass, u(g)]),
          style: It(u(T)),
          role: "alert",
          onMouseenter: D,
          onMouseleave: O,
          onClick: E.onClick
        }, [
          u(N) ? (R(), ae(u(ke), {
            key: 0,
            class: Y([u(s).e("icon"), u(_)])
          }, {
            default: de(() => [
              (R(), ae(Ct(u(N))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          w("div", {
            class: Y(u(s).e("group"))
          }, [
            w("h2", {
              class: Y(u(s).e("title")),
              textContent: H(E.title)
            }, null, 10, ["textContent"]),
            Ot(w("div", {
              class: Y(u(s).e("content")),
              style: It(E.title ? void 0 : { margin: 0 })
            }, [
              Ie(E.$slots, "default", {}, () => [
                E.dangerouslyUseHTMLString ? (R(), K(be, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  w("p", { innerHTML: E.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), K("p", { key: 0 }, H(E.message), 1))
              ])
            ], 6), [
              [sn, E.message]
            ]),
            E.showClose ? (R(), ae(u(ke), {
              key: 0,
              class: Y(u(s).e("closeBtn")),
              onClick: dt(d, ["stop"])
            }, {
              default: de(() => [
                ee(u(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [sn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Qo = /* @__PURE__ */ Ht(Zo, [["__file", "notification.vue"]]);
const rn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, bn = 16;
let er = 1;
const kt = function(e = {}, t) {
  if (!Bt)
    return { close: () => {
    } };
  (Je(e) || Vt(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  rn[n].forEach(({ vm: _ }) => {
    var N;
    s += (((N = _.el) == null ? void 0 : N.offsetHeight) || 0) + bn;
  }), s += bn;
  const a = `notification_${er++}`, o = e.onClose, r = {
    ...e,
    offset: s,
    id: a,
    onClose: () => {
      tr(a, n, o);
    }
  };
  let i = document.body;
  en(e.appendTo) ? i = e.appendTo : Je(e.appendTo) && (i = document.querySelector(e.appendTo)), en(i) || (Xe("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), i = document.body);
  const l = document.createElement("div"), p = ee(Qo, r, st(r.message) ? r.message : Vt(r.message) ? () => r.message : null);
  return p.appContext = Mt(t) ? kt._context : t, p.props.onDestroy = () => {
    an(null, l);
  }, an(p, l), rn[n].push({ vm: p }), i.appendChild(l.firstElementChild), {
    close: () => {
      p.component.exposed.visible.value = !1;
    }
  };
};
zs.forEach((e) => {
  kt[e] = (t = {}, n) => ((Je(t) || Vt(t)) && (t = {
    message: t
  }), kt({ ...t, type: e }, n));
});
function tr(e, t, n) {
  const s = rn[t], a = s.findIndex(({ vm: p }) => {
    var _;
    return ((_ = p.component) == null ? void 0 : _.props.id) === e;
  });
  if (a === -1)
    return;
  const { vm: o } = s[a];
  if (!o)
    return;
  n?.(o);
  const r = o.el.offsetHeight, i = t.split("-")[0];
  s.splice(a, 1);
  const l = s.length;
  if (!(l < 1))
    for (let p = a; p < l; p++) {
      const { el: _, component: N } = s[p].vm, g = Number.parseInt(_.style[i], 10) - r - bn;
      N.props.offset = g;
    }
}
function nr() {
  for (const e of Object.values(rn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
kt.closeAll = nr;
kt._context = null;
const sr = xs(kt, "$notify");
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function We(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ns = {};
function ar(e) {
  ns[e] || (ns[e] = !0, We(e));
}
const qe = typeof window < "u";
let Oe, mt;
if (process.env.NODE_ENV !== "production") {
  const e = qe && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Oe = (t) => {
    e.mark(t);
  }, mt = (t, n, s) => {
    e.measure(t, n, s), e.clearMarks(n), e.clearMarks(s);
  });
}
const or = /\{([0-9a-zA-Z]+)\}/g;
function mn(e, ...t) {
  return t.length === 1 && Z(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(or, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const Ze = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), rr = (e, t, n) => ir({ l: e, k: t, s: n }), ir = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), pe = (e) => typeof e == "number" && isFinite(e), lr = (e) => Un(e) === "[object Date]", ln = (e) => Un(e) === "[object RegExp]", pn = (e) => q(e) && Object.keys(e).length === 0, _e = Object.assign, cr = Object.create, te = (e = null) => cr(e);
let ss;
const ft = () => ss || (ss = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : te());
function as(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function os(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ur(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (s, a, o) => `${a}="${os(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (s, a, o) => `${a}='${os(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && We("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((s) => {
    e = e.replace(s, "$1javascript&#58;");
  }), e;
}
const fr = Object.prototype.hasOwnProperty;
function De(e, t) {
  return fr.call(e, t);
}
const ue = Array.isArray, le = (e) => typeof e == "function", M = (e) => typeof e == "string", ce = (e) => typeof e == "boolean", Z = (e) => e !== null && typeof e == "object", dr = (e) => Z(e) && le(e.then) && le(e.catch), Xs = Object.prototype.toString, Un = (e) => Xs.call(e), q = (e) => Un(e) === "[object Object]", mr = (e) => e == null ? "" : ue(e) || q(e) && e.toString === Xs ? JSON.stringify(e, null, 2) : String(e);
function $n(e, t = "") {
  return e.reduce((n, s, a) => a === 0 ? n + s : n + t + s, "");
}
const rs = 2;
function pr(e, t = 0, n = e.length) {
  const s = e.split(/\r?\n/);
  let a = 0;
  const o = [];
  for (let r = 0; r < s.length; r++)
    if (a += s[r].length + 1, a >= t) {
      for (let i = r - rs; i <= r + rs || n > a; i++) {
        if (i < 0 || i >= s.length)
          continue;
        const l = i + 1;
        o.push(`${l}${" ".repeat(3 - String(l).length)}|  ${s[i]}`);
        const p = s[i].length;
        if (i === r) {
          const _ = t - (a - p) + 1, N = Math.max(1, n > a ? p - _ : n - t);
          o.push("   |  " + " ".repeat(_) + "^".repeat(N));
        } else if (i > r) {
          if (n > a) {
            const _ = Math.max(Math.min(n - a, p), 1);
            o.push("   |  " + "^".repeat(_));
          }
          a += p + 1;
        }
      }
      break;
    }
  return o.join(`
`);
}
function _r() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, s) {
      const a = e.get(n);
      a && a.push(s) || e.set(n, [s]);
    },
    off(n, s) {
      const a = e.get(n);
      a && a.splice(a.indexOf(s) >>> 0, 1);
    },
    emit(n, s) {
      (e.get(n) || []).slice().map((a) => a(s)), (e.get("*") || []).slice().map((a) => a(n, s));
    }
  };
}
const zt = (e) => !Z(e) || ue(e);
function Zt(e, t) {
  if (zt(e) || zt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: a } = n.pop();
    Object.keys(s).forEach((o) => {
      o !== "__proto__" && (Z(s[o]) && !Z(a[o]) && (a[o] = Array.isArray(s[o]) ? [] : te()), zt(a[o]) || zt(s[o]) ? a[o] = s[o] : n.push({ src: s[o], des: a[o] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function gr(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Tn(e, t, n) {
  return { start: e, end: t };
}
const x = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
}, Er = 17, vr = {
  // tokenizer error messages
  [x.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [x.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [x.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [x.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [x.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [x.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [x.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [x.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [x.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [x.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [x.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [x.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [x.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [x.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [x.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Dt(e, t, n = {}) {
  const { domain: s, messages: a, args: o } = n, r = process.env.NODE_ENV !== "production" ? mn((a || vr)[e] || "", ...o || []) : e, i = new SyntaxError(String(r));
  return i.code = e, t && (i.location = t), i.domain = s, i;
}
function yr(e) {
  throw e;
}
const hr = /<\/?[\w\s="/.':;#-\/]+>/, Nr = (e) => hr.test(e), Ve = " ", br = "\r", ye = `
`, Tr = "\u2028", Cr = "\u2029";
function Sr(e) {
  const t = e;
  let n = 0, s = 1, a = 1, o = 0;
  const r = (v) => t[v] === br && t[v + 1] === ye, i = (v) => t[v] === ye, l = (v) => t[v] === Cr, p = (v) => t[v] === Tr, _ = (v) => r(v) || i(v) || l(v) || p(v), N = () => n, g = () => s, S = () => a, T = () => o, O = (v) => r(v) || l(v) || p(v) ? ye : t[v], D = () => O(n), d = () => O(n + o);
  function y() {
    return o = 0, _(n) && (s++, a = 0), r(n) && n++, n++, a++, t[n];
  }
  function E() {
    return r(n + o) && o++, o++, t[n + o];
  }
  function h() {
    n = 0, s = 1, a = 1, o = 0;
  }
  function k(v = 0) {
    o = v;
  }
  function P() {
    const v = n + o;
    for (; v !== n; )
      y();
    o = 0;
  }
  return {
    index: N,
    line: g,
    column: S,
    peekOffset: T,
    charAt: O,
    currentChar: D,
    currentPeek: d,
    next: y,
    peek: E,
    reset: h,
    resetPeek: k,
    skipToPeek: P
  };
}
const Ke = void 0, Lr = ".", is = "'", Ir = "tokenizer";
function Or(e, t = {}) {
  const n = t.location !== !1, s = Sr(e), a = () => s.index(), o = () => gr(s.line(), s.column(), s.index()), r = o(), i = a(), l = {
    currentType: 13,
    offset: i,
    startLoc: r,
    endLoc: r,
    lastType: 13,
    lastOffset: i,
    lastStartLoc: r,
    lastEndLoc: r,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, p = () => l, { onError: _ } = t;
  function N(c, f, C, ...F) {
    const oe = p();
    if (f.column += C, f.offset += C, _) {
      const re = n ? Tn(oe.startLoc, f) : null, b = Dt(c, re, {
        domain: Ir,
        args: F
      });
      _(b);
    }
  }
  function g(c, f, C) {
    c.endLoc = o(), c.currentType = f;
    const F = { type: f };
    return n && (F.loc = Tn(c.startLoc, c.endLoc)), C != null && (F.value = C), F;
  }
  const S = (c) => g(
    c,
    13
    /* TokenTypes.EOF */
  );
  function T(c, f) {
    return c.currentChar() === f ? (c.next(), f) : (N(x.EXPECTED_TOKEN, o(), 0, f), "");
  }
  function O(c) {
    let f = "";
    for (; c.currentPeek() === Ve || c.currentPeek() === ye; )
      f += c.currentPeek(), c.peek();
    return f;
  }
  function D(c) {
    const f = O(c);
    return c.skipToPeek(), f;
  }
  function d(c) {
    if (c === Ke)
      return !1;
    const f = c.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f === 95;
  }
  function y(c) {
    if (c === Ke)
      return !1;
    const f = c.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function E(c, f) {
    const { currentType: C } = f;
    if (C !== 2)
      return !1;
    O(c);
    const F = d(c.currentPeek());
    return c.resetPeek(), F;
  }
  function h(c, f) {
    const { currentType: C } = f;
    if (C !== 2)
      return !1;
    O(c);
    const F = c.currentPeek() === "-" ? c.peek() : c.currentPeek(), oe = y(F);
    return c.resetPeek(), oe;
  }
  function k(c, f) {
    const { currentType: C } = f;
    if (C !== 2)
      return !1;
    O(c);
    const F = c.currentPeek() === is;
    return c.resetPeek(), F;
  }
  function P(c, f) {
    const { currentType: C } = f;
    if (C !== 7)
      return !1;
    O(c);
    const F = c.currentPeek() === ".";
    return c.resetPeek(), F;
  }
  function v(c, f) {
    const { currentType: C } = f;
    if (C !== 8)
      return !1;
    O(c);
    const F = d(c.currentPeek());
    return c.resetPeek(), F;
  }
  function G(c, f) {
    const { currentType: C } = f;
    if (!(C === 7 || C === 11))
      return !1;
    O(c);
    const F = c.currentPeek() === ":";
    return c.resetPeek(), F;
  }
  function j(c, f) {
    const { currentType: C } = f;
    if (C !== 9)
      return !1;
    const F = () => {
      const re = c.currentPeek();
      return re === "{" ? d(c.peek()) : re === "@" || re === "|" || re === ":" || re === "." || re === Ve || !re ? !1 : re === ye ? (c.peek(), F()) : B(c, !1);
    }, oe = F();
    return c.resetPeek(), oe;
  }
  function I(c) {
    O(c);
    const f = c.currentPeek() === "|";
    return c.resetPeek(), f;
  }
  function B(c, f = !0) {
    const C = (oe = !1, re = "") => {
      const b = c.currentPeek();
      return b === "{" || b === "@" || !b ? oe : b === "|" ? !(re === Ve || re === ye) : b === Ve ? (c.peek(), C(!0, Ve)) : b === ye ? (c.peek(), C(!0, ye)) : !0;
    }, F = C();
    return f && c.resetPeek(), F;
  }
  function X(c, f) {
    const C = c.currentChar();
    return C === Ke ? Ke : f(C) ? (c.next(), C) : null;
  }
  function z(c) {
    const f = c.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36;
  }
  function Re(c) {
    return X(c, z);
  }
  function A(c) {
    const f = c.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36 || // $
    f === 45;
  }
  function U(c) {
    return X(c, A);
  }
  function W(c) {
    const f = c.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function Q(c) {
    return X(c, W);
  }
  function ne(c) {
    const f = c.charCodeAt(0);
    return f >= 48 && f <= 57 || // 0-9
    f >= 65 && f <= 70 || // A-F
    f >= 97 && f <= 102;
  }
  function se(c) {
    return X(c, ne);
  }
  function Te(c) {
    let f = "", C = "";
    for (; f = Q(c); )
      C += f;
    return C;
  }
  function Me(c) {
    let f = "";
    for (; ; ) {
      const C = c.currentChar();
      if (C === "{" || C === "}" || C === "@" || C === "|" || !C)
        break;
      if (C === Ve || C === ye)
        if (B(c))
          f += C, c.next();
        else {
          if (I(c))
            break;
          f += C, c.next();
        }
      else
        f += C, c.next();
    }
    return f;
  }
  function fe(c) {
    D(c);
    let f = "", C = "";
    for (; f = U(c); )
      C += f;
    const F = c.currentChar();
    if (F && F !== "}" && F !== Ke && F !== Ve && F !== ye && F !== "　") {
      const oe = et(c);
      return N(x.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, C + oe), C + oe;
    }
    return c.currentChar() === Ke && N(x.UNTERMINATED_CLOSING_BRACE, o(), 0), C;
  }
  function gt(c) {
    D(c);
    let f = "";
    return c.currentChar() === "-" ? (c.next(), f += `-${Te(c)}`) : f += Te(c), c.currentChar() === Ke && N(x.UNTERMINATED_CLOSING_BRACE, o(), 0), f;
  }
  function Et(c) {
    return c !== is && c !== ye;
  }
  function Qe(c) {
    D(c), T(c, "'");
    let f = "", C = "";
    for (; f = X(c, Et); )
      f === "\\" ? C += Yt(c) : C += f;
    const F = c.currentChar();
    return F === ye || F === Ke ? (N(x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), F === ye && (c.next(), T(c, "'")), C) : (T(c, "'"), C);
  }
  function Yt(c) {
    const f = c.currentChar();
    switch (f) {
      case "\\":
      case "'":
        return c.next(), `\\${f}`;
      case "u":
        return vt(c, f, 4);
      case "U":
        return vt(c, f, 6);
      default:
        return N(x.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, f), "";
    }
  }
  function vt(c, f, C) {
    T(c, f);
    let F = "";
    for (let oe = 0; oe < C; oe++) {
      const re = se(c);
      if (!re) {
        N(x.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${f}${F}${c.currentChar()}`);
        break;
      }
      F += re;
    }
    return `\\${f}${F}`;
  }
  function He(c) {
    return c !== "{" && c !== "}" && c !== Ve && c !== ye;
  }
  function et(c) {
    D(c);
    let f = "", C = "";
    for (; f = X(c, He); )
      C += f;
    return C;
  }
  function yt(c) {
    let f = "", C = "";
    for (; f = Re(c); )
      C += f;
    return C;
  }
  function ht(c) {
    const f = (C) => {
      const F = c.currentChar();
      return F === "{" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Ve ? C : (C += F, c.next(), f(C));
    };
    return f("");
  }
  function tt(c) {
    D(c);
    const f = T(
      c,
      "|"
      /* TokenChars.Pipe */
    );
    return D(c), f;
  }
  function nt(c, f) {
    let C = null;
    switch (c.currentChar()) {
      case "{":
        return f.braceNest >= 1 && N(x.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), c.next(), C = g(
          f,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), D(c), f.braceNest++, C;
      case "}":
        return f.braceNest > 0 && f.currentType === 2 && N(x.EMPTY_PLACEHOLDER, o(), 0), c.next(), C = g(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), f.braceNest--, f.braceNest > 0 && D(c), f.inLinked && f.braceNest === 0 && (f.inLinked = !1), C;
      case "@":
        return f.braceNest > 0 && N(x.UNTERMINATED_CLOSING_BRACE, o(), 0), C = Fe(c, f) || S(f), f.braceNest = 0, C;
      default: {
        let oe = !0, re = !0, b = !0;
        if (I(c))
          return f.braceNest > 0 && N(x.UNTERMINATED_CLOSING_BRACE, o(), 0), C = g(f, 1, tt(c)), f.braceNest = 0, f.inLinked = !1, C;
        if (f.braceNest > 0 && (f.currentType === 4 || f.currentType === 5 || f.currentType === 6))
          return N(x.UNTERMINATED_CLOSING_BRACE, o(), 0), f.braceNest = 0, rt(c, f);
        if (oe = E(c, f))
          return C = g(f, 4, fe(c)), D(c), C;
        if (re = h(c, f))
          return C = g(f, 5, gt(c)), D(c), C;
        if (b = k(c, f))
          return C = g(f, 6, Qe(c)), D(c), C;
        if (!oe && !re && !b)
          return C = g(f, 12, et(c)), N(x.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, C.value), D(c), C;
        break;
      }
    }
    return C;
  }
  function Fe(c, f) {
    const { currentType: C } = f;
    let F = null;
    const oe = c.currentChar();
    switch ((C === 7 || C === 8 || C === 11 || C === 9) && (oe === ye || oe === Ve) && N(x.INVALID_LINKED_FORMAT, o(), 0), oe) {
      case "@":
        return c.next(), F = g(
          f,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), f.inLinked = !0, F;
      case ".":
        return D(c), c.next(), g(
          f,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return D(c), c.next(), g(
          f,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return I(c) ? (F = g(f, 1, tt(c)), f.braceNest = 0, f.inLinked = !1, F) : P(c, f) || G(c, f) ? (D(c), Fe(c, f)) : v(c, f) ? (D(c), g(f, 11, yt(c))) : j(c, f) ? (D(c), oe === "{" ? nt(c, f) || F : g(f, 10, ht(c))) : (C === 7 && N(x.INVALID_LINKED_FORMAT, o(), 0), f.braceNest = 0, f.inLinked = !1, rt(c, f));
    }
  }
  function rt(c, f) {
    let C = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (f.braceNest > 0)
      return nt(c, f) || S(f);
    if (f.inLinked)
      return Fe(c, f) || S(f);
    switch (c.currentChar()) {
      case "{":
        return nt(c, f) || S(f);
      case "}":
        return N(x.UNBALANCED_CLOSING_BRACE, o(), 0), c.next(), g(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Fe(c, f) || S(f);
      default: {
        if (I(c))
          return C = g(f, 1, tt(c)), f.braceNest = 0, f.inLinked = !1, C;
        if (B(c))
          return g(f, 0, Me(c));
        break;
      }
    }
    return C;
  }
  function wt() {
    const { currentType: c, offset: f, startLoc: C, endLoc: F } = l;
    return l.lastType = c, l.lastOffset = f, l.lastStartLoc = C, l.lastEndLoc = F, l.offset = a(), l.startLoc = o(), s.currentChar() === Ke ? g(
      l,
      13
      /* TokenTypes.EOF */
    ) : rt(s, l);
  }
  return {
    nextToken: wt,
    currentOffset: a,
    currentPosition: o,
    context: p
  };
}
const Ar = "parser", kr = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Pr(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const s = parseInt(t || n, 16);
      return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�";
    }
  }
}
function Dr(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function s(d, y, E, h, ...k) {
    const P = d.currentPosition();
    if (P.offset += h, P.column += h, n) {
      const v = t ? Tn(E, P) : null, G = Dt(y, v, {
        domain: Ar,
        args: k
      });
      n(G);
    }
  }
  function a(d, y, E) {
    const h = { type: d };
    return t && (h.start = y, h.end = y, h.loc = { start: E, end: E }), h;
  }
  function o(d, y, E, h) {
    t && (d.end = y, d.loc && (d.loc.end = E));
  }
  function r(d, y) {
    const E = d.context(), h = a(3, E.offset, E.startLoc);
    return h.value = y, o(h, d.currentOffset(), d.currentPosition()), h;
  }
  function i(d, y) {
    const E = d.context(), { lastOffset: h, lastStartLoc: k } = E, P = a(5, h, k);
    return P.index = parseInt(y, 10), d.nextToken(), o(P, d.currentOffset(), d.currentPosition()), P;
  }
  function l(d, y) {
    const E = d.context(), { lastOffset: h, lastStartLoc: k } = E, P = a(4, h, k);
    return P.key = y, d.nextToken(), o(P, d.currentOffset(), d.currentPosition()), P;
  }
  function p(d, y) {
    const E = d.context(), { lastOffset: h, lastStartLoc: k } = E, P = a(9, h, k);
    return P.value = y.replace(kr, Pr), d.nextToken(), o(P, d.currentOffset(), d.currentPosition()), P;
  }
  function _(d) {
    const y = d.nextToken(), E = d.context(), { lastOffset: h, lastStartLoc: k } = E, P = a(8, h, k);
    return y.type !== 11 ? (s(d, x.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), P.value = "", o(P, h, k), {
      nextConsumeToken: y,
      node: P
    }) : (y.value == null && s(d, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ue(y)), P.value = y.value || "", o(P, d.currentOffset(), d.currentPosition()), {
      node: P
    });
  }
  function N(d, y) {
    const E = d.context(), h = a(7, E.offset, E.startLoc);
    return h.value = y, o(h, d.currentOffset(), d.currentPosition()), h;
  }
  function g(d) {
    const y = d.context(), E = a(6, y.offset, y.startLoc);
    let h = d.nextToken();
    if (h.type === 8) {
      const k = _(d);
      E.modifier = k.node, h = k.nextConsumeToken || d.nextToken();
    }
    switch (h.type !== 9 && s(d, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ue(h)), h = d.nextToken(), h.type === 2 && (h = d.nextToken()), h.type) {
      case 10:
        h.value == null && s(d, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ue(h)), E.key = N(d, h.value || "");
        break;
      case 4:
        h.value == null && s(d, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ue(h)), E.key = l(d, h.value || "");
        break;
      case 5:
        h.value == null && s(d, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ue(h)), E.key = i(d, h.value || "");
        break;
      case 6:
        h.value == null && s(d, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ue(h)), E.key = p(d, h.value || "");
        break;
      default: {
        s(d, x.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const k = d.context(), P = a(7, k.offset, k.startLoc);
        return P.value = "", o(P, k.offset, k.startLoc), E.key = P, o(E, k.offset, k.startLoc), {
          nextConsumeToken: h,
          node: E
        };
      }
    }
    return o(E, d.currentOffset(), d.currentPosition()), {
      node: E
    };
  }
  function S(d) {
    const y = d.context(), E = y.currentType === 1 ? d.currentOffset() : y.offset, h = y.currentType === 1 ? y.endLoc : y.startLoc, k = a(2, E, h);
    k.items = [];
    let P = null;
    do {
      const j = P || d.nextToken();
      switch (P = null, j.type) {
        case 0:
          j.value == null && s(d, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ue(j)), k.items.push(r(d, j.value || ""));
          break;
        case 5:
          j.value == null && s(d, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ue(j)), k.items.push(i(d, j.value || ""));
          break;
        case 4:
          j.value == null && s(d, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ue(j)), k.items.push(l(d, j.value || ""));
          break;
        case 6:
          j.value == null && s(d, x.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ue(j)), k.items.push(p(d, j.value || ""));
          break;
        case 7: {
          const I = g(d);
          k.items.push(I.node), P = I.nextConsumeToken || null;
          break;
        }
      }
    } while (y.currentType !== 13 && y.currentType !== 1);
    const v = y.currentType === 1 ? y.lastOffset : d.currentOffset(), G = y.currentType === 1 ? y.lastEndLoc : d.currentPosition();
    return o(k, v, G), k;
  }
  function T(d, y, E, h) {
    const k = d.context();
    let P = h.items.length === 0;
    const v = a(1, y, E);
    v.cases = [], v.cases.push(h);
    do {
      const G = S(d);
      P || (P = G.items.length === 0), v.cases.push(G);
    } while (k.currentType !== 13);
    return P && s(d, x.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), o(v, d.currentOffset(), d.currentPosition()), v;
  }
  function O(d) {
    const y = d.context(), { offset: E, startLoc: h } = y, k = S(d);
    return y.currentType === 13 ? k : T(d, E, h, k);
  }
  function D(d) {
    const y = Or(d, _e({}, e)), E = y.context(), h = a(0, E.offset, E.startLoc);
    return t && h.loc && (h.loc.source = d), h.body = O(y), e.onCacheKey && (h.cacheKey = e.onCacheKey(d)), E.currentType !== 13 && s(y, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, d[E.offset] || ""), o(h, y.currentOffset(), y.currentPosition()), h;
  }
  return { parse: D };
}
function Ue(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function wr(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function ls(e, t) {
  for (let n = 0; n < e.length; n++)
    xn(e[n], t);
}
function xn(e, t) {
  switch (e.type) {
    case 1:
      ls(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ls(e.items, t);
      break;
    case 6: {
      xn(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function Rr(e, t = {}) {
  const n = wr(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && xn(e.body, n);
  const s = n.context();
  e.helpers = Array.from(s.helpers);
}
function Mr(e) {
  const t = e.body;
  return t.type === 2 ? cs(t) : t.cases.forEach((n) => cs(n)), e;
}
function cs(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const s = e.items[n];
      if (!(s.type === 3 || s.type === 9) || s.value == null)
        break;
      t.push(s.value);
    }
    if (t.length === e.items.length) {
      e.static = $n(t);
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n];
        (s.type === 3 || s.type === 9) && delete s.value;
      }
    }
  }
}
const Fr = "minifier";
function Tt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Tt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let s = 0; s < n.length; s++)
        Tt(n[s]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let s = 0; s < n.length; s++)
        Tt(n[s]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      Tt(t.key), t.k = t.key, delete t.key, t.modifier && (Tt(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      if (process.env.NODE_ENV !== "production")
        throw Dt(x.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: Fr,
          args: [e.type]
        });
  }
  delete e.type;
}
const Vr = "parser";
function Ur(e, t) {
  const { filename: n, breakLineCode: s, needIndent: a } = t, o = t.location !== !1, r = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: a,
    indentLevel: 0
  };
  o && e.loc && (r.source = e.loc.source);
  const i = () => r;
  function l(O, D) {
    r.code += O;
  }
  function p(O, D = !0) {
    const d = D ? s : "";
    l(a ? d + "  ".repeat(O) : d);
  }
  function _(O = !0) {
    const D = ++r.indentLevel;
    O && p(D);
  }
  function N(O = !0) {
    const D = --r.indentLevel;
    O && p(D);
  }
  function g() {
    p(r.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: _,
    deindent: N,
    newline: g,
    helper: (O) => `_${O}`,
    needIndent: () => r.needIndent
  };
}
function $r(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Pt(e, t.key), t.modifier ? (e.push(", "), Pt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function xr(e, t) {
  const { helper: n, needIndent: s } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(s());
  const a = t.items.length;
  for (let o = 0; o < a && (Pt(e, t.items[o]), o !== a - 1); o++)
    e.push(", ");
  e.deindent(s()), e.push("])");
}
function Gr(e, t) {
  const { helper: n, needIndent: s } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(s());
    const a = t.cases.length;
    for (let o = 0; o < a && (Pt(e, t.cases[o]), o !== a - 1); o++)
      e.push(", ");
    e.deindent(s()), e.push("])");
  }
}
function Br(e, t) {
  t.body ? Pt(e, t.body) : e.push("null");
}
function Pt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Br(e, t);
      break;
    case 1:
      Gr(e, t);
      break;
    case 2:
      xr(e, t);
      break;
    case 6:
      $r(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw Dt(x.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: Vr,
          args: [t.type]
        });
  }
}
const Wr = (e, t = {}) => {
  const n = M(t.mode) ? t.mode : "normal", s = M(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", r = e.helpers || [], i = Ur(e, {
    filename: s,
    breakLineCode: a,
    needIndent: o
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(o), r.length > 0 && (i.push(`const { ${$n(r.map((_) => `${_}: _${_}`), ", ")} } = ctx`), i.newline()), i.push("return "), Pt(i, e), i.deindent(o), i.push("}"), delete e.helpers;
  const { code: l, map: p } = i.context();
  return {
    ast: e,
    code: l,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Hr(e, t = {}) {
  const n = _e({}, t), s = !!n.jit, a = !!n.minify, o = n.optimize == null ? !0 : n.optimize, i = Dr(n).parse(e);
  return s ? (o && Mr(i), a && Tt(i), { ast: i, code: "" }) : (Rr(i, n), Wr(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Yr() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ft().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ft().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function we(e) {
  return Z(e) && Gn(e) === 0 && (De(e, "b") || De(e, "body"));
}
const Js = ["b", "body"];
function Kr(e) {
  return at(e, Js);
}
const qs = ["c", "cases"];
function jr(e) {
  return at(e, qs, []);
}
const Zs = ["s", "static"];
function zr(e) {
  return at(e, Zs);
}
const Qs = ["i", "items"];
function Xr(e) {
  return at(e, Qs, []);
}
const ea = ["t", "type"];
function Gn(e) {
  return at(e, ea);
}
const ta = ["v", "value"];
function Xt(e, t) {
  const n = at(e, ta);
  if (n != null)
    return n;
  throw Ut(t);
}
const na = ["m", "modifier"];
function Jr(e) {
  return at(e, na);
}
const sa = ["k", "key"];
function qr(e) {
  const t = at(e, sa);
  if (t)
    return t;
  throw Ut(
    6
    /* NodeTypes.Linked */
  );
}
function at(e, t, n) {
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    if (De(e, a) && e[a] != null)
      return e[a];
  }
  return n;
}
const aa = [
  ...Js,
  ...qs,
  ...Zs,
  ...Qs,
  ...sa,
  ...na,
  ...ta,
  ...ea
];
function Ut(e) {
  return new Error(`unhandled node type: ${e}`);
}
function vn(e) {
  return (n) => Zr(n, e);
}
function Zr(e, t) {
  const n = Kr(t);
  if (n == null)
    throw Ut(
      0
      /* NodeTypes.Resource */
    );
  if (Gn(n) === 1) {
    const o = jr(n);
    return e.plural(o.reduce((r, i) => [
      ...r,
      us(e, i)
    ], []));
  } else
    return us(e, n);
}
function us(e, t) {
  const n = zr(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const s = Xr(t).reduce((a, o) => [...a, Cn(e, o)], []);
    return e.normalize(s);
  }
}
function Cn(e, t) {
  const n = Gn(t);
  switch (n) {
    case 3:
      return Xt(t, n);
    case 9:
      return Xt(t, n);
    case 4: {
      const s = t;
      if (De(s, "k") && s.k)
        return e.interpolate(e.named(s.k));
      if (De(s, "key") && s.key)
        return e.interpolate(e.named(s.key));
      throw Ut(n);
    }
    case 5: {
      const s = t;
      if (De(s, "i") && pe(s.i))
        return e.interpolate(e.list(s.i));
      if (De(s, "index") && pe(s.index))
        return e.interpolate(e.list(s.index));
      throw Ut(n);
    }
    case 6: {
      const s = t, a = Jr(s), o = qr(s);
      return e.linked(Cn(e, o), a ? Cn(e, a) : void 0, e.type);
    }
    case 7:
      return Xt(t, n);
    case 8:
      return Xt(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Qr = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function ei(e, t) {
  t && Nr(e) && We(mn(Qr, { source: e }));
}
const ti = (e) => e;
let Jt = te();
function ni(e, t = {}) {
  let n = !1;
  const s = t.onError || yr;
  return t.onError = (a) => {
    n = !0, s(a);
  }, { ...Hr(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function si(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && M(e)) {
    const n = ce(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && ei(e, n);
    const a = (t.onCacheKey || ti)(e), o = Jt[a];
    if (o)
      return o;
    const { ast: r, detectError: i } = ni(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = vn(r);
    return i ? l : Jt[a] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !we(e))
      return We(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const s = Jt[n];
      return s || (Jt[n] = vn(e));
    } else
      return vn(e);
  }
}
let $t = null;
function ai(e) {
  $t = e;
}
function oi(e, t, n) {
  $t && $t.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const ri = /* @__PURE__ */ ii("function:translate");
function ii(e) {
  return (t) => $t && $t.emit(e, t);
}
const he = {
  INVALID_ARGUMENT: Er,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, li = 24;
function ze(e) {
  return Dt(e, null, process.env.NODE_ENV !== "production" ? { messages: ci } : void 0);
}
const ci = {
  [he.INVALID_ARGUMENT]: "Invalid arguments",
  [he.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [he.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [he.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [he.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [he.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [he.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Bn(e, t) {
  return t.locale != null ? fs(t.locale) : fs(e.locale);
}
let yn;
function fs(e) {
  if (M(e))
    return e;
  if (le(e)) {
    if (e.resolvedOnce && yn != null)
      return yn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (dr(t))
        throw ze(he.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return yn = t;
    } else
      throw ze(he.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw ze(he.NOT_SUPPORT_LOCALE_TYPE);
}
function ui(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ue(t) ? t : Z(t) ? Object.keys(t) : M(t) ? [t] : [n]
  ])];
}
function oa(e, t, n) {
  const s = M(n) ? n : cn, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let o = a.__localeChainCache.get(s);
  if (!o) {
    o = [];
    let r = [n];
    for (; ue(r); )
      r = ds(o, r, t);
    const i = ue(t) || !q(t) ? t : t.default ? t.default : null;
    r = M(i) ? [i] : i, ue(r) && ds(o, r, !1), a.__localeChainCache.set(s, o);
  }
  return o;
}
function ds(e, t, n) {
  let s = !0;
  for (let a = 0; a < t.length && ce(s); a++) {
    const o = t[a];
    M(o) && (s = fi(e, t[a], n));
  }
  return s;
}
function fi(e, t, n) {
  let s;
  const a = t.split("-");
  do {
    const o = a.join("-");
    s = di(e, o, n), a.splice(-1, 1);
  } while (a.length && s === !0);
  return s;
}
function di(e, t, n) {
  let s = !1;
  if (!e.includes(t) && (s = !0, t)) {
    s = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (ue(n) || q(n)) && n[a] && (s = n[a]);
  }
  return s;
}
const ot = [];
ot[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
ot[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
ot[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
ot[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
ot[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
ot[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
ot[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const mi = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function pi(e) {
  return mi.test(e);
}
function _i(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function gi(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function Ei(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : pi(t) ? _i(t) : "*" + t;
}
function vi(e) {
  const t = [];
  let n = -1, s = 0, a = 0, o, r, i, l, p, _, N;
  const g = [];
  g[
    0
    /* Actions.APPEND */
  ] = () => {
    r === void 0 ? r = i : r += i;
  }, g[
    1
    /* Actions.PUSH */
  ] = () => {
    r !== void 0 && (t.push(r), r = void 0);
  }, g[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    g[
      0
      /* Actions.APPEND */
    ](), a++;
  }, g[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, s = 4, g[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (a = 0, r === void 0 || (r = Ei(r), r === !1))
        return !1;
      g[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function S() {
    const T = e[n + 1];
    if (s === 5 && T === "'" || s === 6 && T === '"')
      return n++, i = "\\" + T, g[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; s !== null; )
    if (n++, o = e[n], !(o === "\\" && S())) {
      if (l = gi(o), N = ot[s], p = N[l] || N.l || 8, p === 8 || (s = p[0], p[1] !== void 0 && (_ = g[p[1]], _ && (i = o, _() === !1))))
        return;
      if (s === 7)
        return t;
    }
}
const ms = /* @__PURE__ */ new Map();
function yi(e, t) {
  return Z(e) ? e[t] : null;
}
function hi(e, t) {
  if (!Z(e))
    return null;
  let n = ms.get(t);
  if (n || (n = vi(t), n && ms.set(t, n)), !n)
    return null;
  const s = n.length;
  let a = e, o = 0;
  for (; o < s; ) {
    const r = n[o];
    if (aa.includes(r) && we(a))
      return null;
    const i = a[r];
    if (i === void 0 || le(a))
      return null;
    a = i, o++;
  }
  return a;
}
const Le = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Ni = 8, bi = {
  [Le.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Le.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Le.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Le.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Le.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Le.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Le.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function pt(e, ...t) {
  return mn(bi[e], ...t);
}
const Ti = "11.2.2", _n = -1, cn = "en-US", un = "", ps = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ci() {
  return {
    upper: (e, t) => t === "text" && M(e) ? e.toUpperCase() : t === "vnode" && Z(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && M(e) ? e.toLowerCase() : t === "vnode" && Z(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && M(e) ? ps(e) : t === "vnode" && Z(e) && "__v_isVNode" in e ? ps(e.children) : e
  };
}
let ra;
function Si(e) {
  ra = e;
}
let ia;
function Li(e) {
  ia = e;
}
let la;
function Ii(e) {
  la = e;
}
let ca = null;
const Oi = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  ca = e;
}, Ai = /* @__NO_SIDE_EFFECTS__ */ () => ca;
let ua = null;
const _s = (e) => {
  ua = e;
}, ki = () => ua;
let gs = 0;
function Pi(e = {}) {
  const t = le(e.onWarn) ? e.onWarn : We, n = M(e.version) ? e.version : Ti, s = M(e.locale) || le(e.locale) ? e.locale : cn, a = le(s) ? cn : s, o = ue(e.fallbackLocale) || q(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, r = q(e.messages) ? e.messages : hn(a), i = q(e.datetimeFormats) ? e.datetimeFormats : hn(a), l = q(e.numberFormats) ? e.numberFormats : hn(a), p = _e(te(), e.modifiers, Ci()), _ = e.pluralRules || te(), N = le(e.missing) ? e.missing : null, g = ce(e.missingWarn) || ln(e.missingWarn) ? e.missingWarn : !0, S = ce(e.fallbackWarn) || ln(e.fallbackWarn) ? e.fallbackWarn : !0, T = !!e.fallbackFormat, O = !!e.unresolving, D = le(e.postTranslation) ? e.postTranslation : null, d = q(e.processor) ? e.processor : null, y = ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, h = le(e.messageCompiler) ? e.messageCompiler : ra;
  process.env.NODE_ENV !== "production" && le(e.messageCompiler) && ar(pt(Le.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const k = le(e.messageResolver) ? e.messageResolver : ia || yi, P = le(e.localeFallbacker) ? e.localeFallbacker : la || ui, v = Z(e.fallbackContext) ? e.fallbackContext : void 0, G = e, j = Z(G.__datetimeFormatters) ? G.__datetimeFormatters : /* @__PURE__ */ new Map(), I = Z(G.__numberFormatters) ? G.__numberFormatters : /* @__PURE__ */ new Map(), B = Z(G.__meta) ? G.__meta : {};
  gs++;
  const X = {
    version: n,
    cid: gs,
    locale: s,
    fallbackLocale: o,
    messages: r,
    modifiers: p,
    pluralRules: _,
    missing: N,
    missingWarn: g,
    fallbackWarn: S,
    fallbackFormat: T,
    unresolving: O,
    postTranslation: D,
    processor: d,
    warnHtmlMessage: y,
    escapeParameter: E,
    messageCompiler: h,
    messageResolver: k,
    localeFallbacker: P,
    fallbackContext: v,
    onWarn: t,
    __meta: B
  };
  return X.datetimeFormats = i, X.numberFormats = l, X.__datetimeFormatters = j, X.__numberFormatters = I, process.env.NODE_ENV !== "production" && (X.__v_emitter = G.__v_emitter != null ? G.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && oi(X, n, B), X;
}
const hn = (e) => ({ [e]: te() });
function gn(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function fa(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Wn(e, t, n, s, a) {
  const { missing: o, onWarn: r } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (o !== null) {
    const i = o(e, n, t, a);
    return M(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && fa(s, t) && r(pt(Le.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Rt(e, t, n) {
  const s = e;
  s.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function da(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Di(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let s = n + 1; s < t.length; s++)
    if (da(e, t[s]))
      return !0;
  return !1;
}
const Es = typeof Intl < "u", ma = {
  dateTimeFormat: Es && typeof Intl.DateTimeFormat < "u",
  numberFormat: Es && typeof Intl.NumberFormat < "u"
};
function vs(e, ...t) {
  const { datetimeFormats: n, unresolving: s, fallbackLocale: a, onWarn: o, localeFallbacker: r } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !ma.dateTimeFormat)
    return o(pt(Le.CANNOT_FORMAT_DATE)), un;
  const [l, p, _, N] = Sn(...t), g = ce(_.missingWarn) ? _.missingWarn : e.missingWarn, S = ce(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, T = !!_.part, O = Bn(e, _), D = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    O
  );
  if (!M(l) || l === "")
    return new Intl.DateTimeFormat(O, N).format(p);
  let d = {}, y, E = null, h = O, k = null;
  const P = "datetime format";
  for (let j = 0; j < D.length; j++) {
    if (y = k = D[j], process.env.NODE_ENV !== "production" && O !== y && gn(S, l) && o(pt(Le.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: y
    })), process.env.NODE_ENV !== "production" && O !== y) {
      const I = e.__v_emitter;
      I && I.emit("fallback", {
        type: P,
        key: l,
        from: h,
        to: k,
        groupId: `${P}:${l}`
      });
    }
    if (d = n[y] || {}, E = d[l], q(E))
      break;
    Wn(e, l, y, g, P), h = k;
  }
  if (!q(E) || !M(y))
    return s ? _n : l;
  let v = `${y}__${l}`;
  pn(N) || (v = `${v}__${JSON.stringify(N)}`);
  let G = i.get(v);
  return G || (G = new Intl.DateTimeFormat(y, _e({}, E, N)), i.set(v, G)), T ? G.formatToParts(p) : G.format(p);
}
const pa = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Sn(...e) {
  const [t, n, s, a] = e, o = te();
  let r = te(), i;
  if (M(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw ze(he.INVALID_ISO_DATE_ARGUMENT);
    const p = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(p);
    try {
      i.toISOString();
    } catch {
      throw ze(he.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (lr(t)) {
    if (isNaN(t.getTime()))
      throw ze(he.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (pe(t))
    i = t;
  else
    throw ze(he.INVALID_ARGUMENT);
  return M(n) ? o.key = n : q(n) && Object.keys(n).forEach((l) => {
    pa.includes(l) ? r[l] = n[l] : o[l] = n[l];
  }), M(s) ? o.locale = s : q(s) && (r = s), q(a) && (r = a), [o.key || "", i, o, r];
}
function ys(e, t, n) {
  const s = e;
  for (const a in n) {
    const o = `${t}__${a}`;
    s.__datetimeFormatters.has(o) && s.__datetimeFormatters.delete(o);
  }
}
function hs(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: a, onWarn: o, localeFallbacker: r } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !ma.numberFormat)
    return o(pt(Le.CANNOT_FORMAT_NUMBER)), un;
  const [l, p, _, N] = Ln(...t), g = ce(_.missingWarn) ? _.missingWarn : e.missingWarn, S = ce(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, T = !!_.part, O = Bn(e, _), D = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    O
  );
  if (!M(l) || l === "")
    return new Intl.NumberFormat(O, N).format(p);
  let d = {}, y, E = null, h = O, k = null;
  const P = "number format";
  for (let j = 0; j < D.length; j++) {
    if (y = k = D[j], process.env.NODE_ENV !== "production" && O !== y && gn(S, l) && o(pt(Le.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: y
    })), process.env.NODE_ENV !== "production" && O !== y) {
      const I = e.__v_emitter;
      I && I.emit("fallback", {
        type: P,
        key: l,
        from: h,
        to: k,
        groupId: `${P}:${l}`
      });
    }
    if (d = n[y] || {}, E = d[l], q(E))
      break;
    Wn(e, l, y, g, P), h = k;
  }
  if (!q(E) || !M(y))
    return s ? _n : l;
  let v = `${y}__${l}`;
  pn(N) || (v = `${v}__${JSON.stringify(N)}`);
  let G = i.get(v);
  return G || (G = new Intl.NumberFormat(y, _e({}, E, N)), i.set(v, G)), T ? G.formatToParts(p) : G.format(p);
}
const _a = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Ln(...e) {
  const [t, n, s, a] = e, o = te();
  let r = te();
  if (!pe(t))
    throw ze(he.INVALID_ARGUMENT);
  const i = t;
  return M(n) ? o.key = n : q(n) && Object.keys(n).forEach((l) => {
    _a.includes(l) ? r[l] = n[l] : o[l] = n[l];
  }), M(s) ? o.locale = s : q(s) && (r = s), q(a) && (r = a), [o.key || "", i, o, r];
}
function Ns(e, t, n) {
  const s = e;
  for (const a in n) {
    const o = `${t}__${a}`;
    s.__numberFormatters.has(o) && s.__numberFormatters.delete(o);
  }
}
const wi = (e) => e, Ri = (e) => "", Mi = "text", Fi = (e) => e.length === 0 ? "" : $n(e), Vi = mr;
function bs(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ui(e) {
  const t = pe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (pe(e.named.count) || pe(e.named.n)) ? pe(e.named.count) ? e.named.count : pe(e.named.n) ? e.named.n : t : t;
}
function $i(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function xi(e = {}) {
  const t = e.locale, n = Ui(e), s = Z(e.pluralRules) && M(t) && le(e.pluralRules[t]) ? e.pluralRules[t] : bs, a = Z(e.pluralRules) && M(t) && le(e.pluralRules[t]) ? bs : void 0, o = (d) => d[s(n, d.length, a)], r = e.list || [], i = (d) => r[d], l = e.named || te();
  pe(e.pluralIndex) && $i(n, l);
  const p = (d) => l[d];
  function _(d, y) {
    const E = le(e.messages) ? e.messages(d, !!y) : Z(e.messages) ? e.messages[d] : !1;
    return E || (e.parent ? e.parent.message(d) : Ri);
  }
  const N = (d) => e.modifiers ? e.modifiers[d] : wi, g = q(e.processor) && le(e.processor.normalize) ? e.processor.normalize : Fi, S = q(e.processor) && le(e.processor.interpolate) ? e.processor.interpolate : Vi, T = q(e.processor) && M(e.processor.type) ? e.processor.type : Mi, D = {
    list: i,
    named: p,
    plural: o,
    linked: (d, ...y) => {
      const [E, h] = y;
      let k = "text", P = "";
      y.length === 1 ? Z(E) ? (P = E.modifier || P, k = E.type || k) : M(E) && (P = E || P) : y.length === 2 && (M(E) && (P = E || P), M(h) && (k = h || k));
      const v = _(d, !0)(D), G = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        k === "vnode" && ue(v) && P ? v[0] : v
      );
      return P ? N(P)(G, k) : G;
    },
    message: _,
    type: T,
    interpolate: S,
    normalize: g,
    values: _e(te(), r, l)
  };
  return D;
}
const Ts = () => "", Ae = (e) => le(e);
function Cs(e, ...t) {
  const { fallbackFormat: n, postTranslation: s, unresolving: a, messageCompiler: o, fallbackLocale: r, messages: i } = e, [l, p] = In(...t), _ = ce(p.missingWarn) ? p.missingWarn : e.missingWarn, N = ce(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, g = ce(p.escapeParameter) ? p.escapeParameter : e.escapeParameter, S = !!p.resolvedMessage, T = M(p.default) || ce(p.default) ? ce(p.default) ? o ? l : () => l : p.default : n ? o ? l : () => l : null, O = n || T != null && (M(T) || le(T)), D = Bn(e, p);
  g && Gi(p);
  let [d, y, E] = S ? [
    l,
    D,
    i[D] || te()
  ] : ga(e, l, D, r, N, _), h = d, k = l;
  if (!S && !(M(h) || we(h) || Ae(h)) && O && (h = T, k = h), !S && (!(M(h) || we(h) || Ae(h)) || !M(y)))
    return a ? _n : l;
  if (process.env.NODE_ENV !== "production" && M(h) && e.messageCompiler == null)
    return We(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let P = !1;
  const v = () => {
    P = !0;
  }, G = Ae(h) ? h : Ea(e, l, y, h, k, v);
  if (P)
    return h;
  const j = Yi(e, y, E, p), I = xi(j), B = Bi(e, G, I);
  let X = s ? s(B, l) : B;
  if (g && M(X) && (X = ur(X)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const z = {
      timestamp: Date.now(),
      key: M(l) ? l : Ae(h) ? h.key : "",
      locale: y || (Ae(h) ? h.locale : ""),
      format: M(h) ? h : Ae(h) ? h.source : "",
      message: X
    };
    z.meta = _e({}, e.__meta, /* @__PURE__ */ Ai() || {}), ri(z);
  }
  return X;
}
function Gi(e) {
  ue(e.list) ? e.list = e.list.map((t) => M(t) ? as(t) : t) : Z(e.named) && Object.keys(e.named).forEach((t) => {
    M(e.named[t]) && (e.named[t] = as(e.named[t]));
  });
}
function ga(e, t, n, s, a, o) {
  const { messages: r, onWarn: i, messageResolver: l, localeFallbacker: p } = e, _ = p(e, s, n);
  let N = te(), g, S = null, T = n, O = null;
  const D = "translate";
  for (let d = 0; d < _.length; d++) {
    if (g = O = _[d], process.env.NODE_ENV !== "production" && n !== g && !da(n, g) && gn(a, t) && i(pt(Le.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: g
    })), process.env.NODE_ENV !== "production" && n !== g) {
      const k = e.__v_emitter;
      k && k.emit("fallback", {
        type: D,
        key: t,
        from: T,
        to: O,
        groupId: `${D}:${t}`
      });
    }
    N = r[g] || te();
    let y = null, E, h;
    if (process.env.NODE_ENV !== "production" && qe && (y = window.performance.now(), E = "intlify-message-resolve-start", h = "intlify-message-resolve-end", Oe && Oe(E)), (S = l(N, t)) === null && (S = N[t]), process.env.NODE_ENV !== "production" && qe) {
      const k = window.performance.now(), P = e.__v_emitter;
      P && y && S && P.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: S,
        time: k - y,
        groupId: `${D}:${t}`
      }), E && h && Oe && mt && (Oe(h), mt("intlify message resolve", E, h));
    }
    if (M(S) || we(S) || Ae(S))
      break;
    if (!Di(g, _)) {
      const k = Wn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        g,
        o,
        D
      );
      k !== t && (S = k);
    }
    T = O;
  }
  return [S, g, N];
}
function Ea(e, t, n, s, a, o) {
  const { messageCompiler: r, warnHtmlMessage: i } = e;
  if (Ae(s)) {
    const g = s;
    return g.locale = g.locale || n, g.key = g.key || t, g;
  }
  if (r == null) {
    const g = () => s;
    return g.locale = n, g.key = t, g;
  }
  let l = null, p, _;
  process.env.NODE_ENV !== "production" && qe && (l = window.performance.now(), p = "intlify-message-compilation-start", _ = "intlify-message-compilation-end", Oe && Oe(p));
  const N = r(s, Wi(e, n, a, s, i, o));
  if (process.env.NODE_ENV !== "production" && qe) {
    const g = window.performance.now(), S = e.__v_emitter;
    S && l && S.emit("message-compilation", {
      type: "message-compilation",
      message: s,
      time: g - l,
      groupId: `translate:${t}`
    }), p && _ && Oe && mt && (Oe(_), mt("intlify message compilation", p, _));
  }
  return N.locale = n, N.key = t, N.source = s, N;
}
function Bi(e, t, n) {
  let s = null, a, o;
  process.env.NODE_ENV !== "production" && qe && (s = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", Oe && Oe(a));
  const r = t(n);
  if (process.env.NODE_ENV !== "production" && qe) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && s && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: r,
      time: i - s,
      groupId: `translate:${t.key}`
    }), a && o && Oe && mt && (Oe(o), mt("intlify message evaluation", a, o));
  }
  return r;
}
function In(...e) {
  const [t, n, s] = e, a = te();
  if (!M(t) && !pe(t) && !Ae(t) && !we(t))
    throw ze(he.INVALID_ARGUMENT);
  const o = pe(t) ? String(t) : (Ae(t), t);
  return pe(n) ? a.plural = n : M(n) ? a.default = n : q(n) && !pn(n) ? a.named = n : ue(n) && (a.list = n), pe(s) ? a.plural = s : M(s) ? a.default = s : q(s) && _e(a, s), [o, a];
}
function Wi(e, t, n, s, a, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (r) => {
      if (o && o(r), process.env.NODE_ENV !== "production") {
        const i = Hi(s), l = `Message compilation error: ${r.message}`, p = r.location && i && pr(i, r.location.start.offset, r.location.end.offset), _ = e.__v_emitter;
        _ && i && _.emit("compile-error", {
          message: i,
          error: r.message,
          start: r.location && r.location.start.offset,
          end: r.location && r.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(p ? `${l}
${p}` : l);
      } else
        throw r;
    },
    onCacheKey: (r) => rr(t, n, r)
  };
}
function Hi(e) {
  if (M(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Yi(e, t, n, s) {
  const { modifiers: a, pluralRules: o, messageResolver: r, fallbackLocale: i, fallbackWarn: l, missingWarn: p, fallbackContext: _ } = e, g = {
    locale: t,
    modifiers: a,
    pluralRules: o,
    messages: (S, T) => {
      let O = r(n, S);
      if (O == null && (_ || T)) {
        const [, , D] = ga(
          _ || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          S,
          t,
          i,
          l,
          p
        );
        O = r(D, S);
      }
      if (M(O) || we(O)) {
        let D = !1;
        const y = Ea(e, S, t, O, S, () => {
          D = !0;
        });
        return D ? Ts : y;
      } else return Ae(O) ? O : Ts;
    }
  };
  return e.processor && (g.processor = e.processor), s.list && (g.list = s.list), s.named && (g.named = s.named), pe(s.plural) && (g.pluralIndex = s.plural), g;
}
Yr();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ki = "11.2.2";
function ji() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ft().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ft().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ft().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ft().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const ge = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: li,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function xt(e, ...t) {
  return Dt(e, null, process.env.NODE_ENV !== "production" ? { messages: zi, args: t } : void 0);
}
const zi = {
  [ge.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [ge.INVALID_ARGUMENT]: "Invalid argument",
  [ge.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [ge.NOT_INSTALLED]: "Need to install with `app.use` function",
  [ge.UNEXPECTED_ERROR]: "Unexpected error",
  [ge.REQUIRED_VALUE]: "Required in value: {0}",
  [ge.INVALID_VALUE]: "Invalid value",
  [ge.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [ge.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [ge.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [ge.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, On = /* @__PURE__ */ Ze("__translateVNode"), An = /* @__PURE__ */ Ze("__datetimeParts"), kn = /* @__PURE__ */ Ze("__numberParts"), Pn = /* @__PURE__ */ Ze("__enableEmitter"), Dn = /* @__PURE__ */ Ze("__disableEmitter"), Xi = Ze("__setPluralRules"), va = /* @__PURE__ */ Ze("__injectWithOption"), wn = /* @__PURE__ */ Ze("__dispose"), xe = {
  FALLBACK_TO_ROOT: Ni,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_LEGACY_MODE: 11,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 12,
  // duplicate `useI18n` calling
  DUPLICATE_USE_I18N_CALLING: 13
}, Ji = {
  [xe.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [xe.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [xe.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [xe.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [xe.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [xe.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function fn(e, ...t) {
  return mn(Ji[e], ...t);
}
function Gt(e) {
  if (!Z(e) || we(e))
    return e;
  for (const t in e)
    if (De(e, t))
      if (!t.includes("."))
        Z(e[t]) && Gt(e[t]);
      else {
        const n = t.split("."), s = n.length - 1;
        let a = e, o = !1;
        for (let r = 0; r < s; r++) {
          if (n[r] === "__proto__")
            throw new Error(`unsafe key: ${n[r]}`);
          if (n[r] in a || (a[n[r]] = te()), !Z(a[n[r]])) {
            process.env.NODE_ENV !== "production" && We(fn(xe.IGNORE_OBJ_FLATTEN, {
              key: n[r]
            })), o = !0;
            break;
          }
          a = a[n[r]];
        }
        if (o || (we(a) ? aa.includes(n[s]) || delete e[t] : (a[n[s]] = e[t], delete e[t])), !we(a)) {
          const r = a[n[s]];
          Z(r) && Gt(r);
        }
      }
  return e;
}
function ya(e, t) {
  const { messages: n, __i18n: s, messageResolver: a, flatJson: o } = t, r = q(n) ? n : ue(s) ? te() : { [e]: te() };
  if (ue(s) && s.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: p } = i;
      l ? (r[l] = r[l] || te(), Zt(p, r[l])) : Zt(p, r);
    } else
      M(i) && Zt(JSON.parse(i), r);
  }), a == null && o)
    for (const i in r)
      De(r, i) && Gt(r[i]);
  return r;
}
function ha(e) {
  return e.type;
}
function qi(e, t, n) {
  let s = Z(t.messages) ? t.messages : te();
  "__i18nGlobal" in n && (s = ya(e.locale.value, {
    messages: s,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(s);
  a.length && a.forEach((o) => {
    e.mergeLocaleMessage(o, s[o]);
  });
  {
    if (Z(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((r) => {
        e.mergeDateTimeFormat(r, t.datetimeFormats[r]);
      });
    }
    if (Z(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((r) => {
        e.mergeNumberFormat(r, t.numberFormats[r]);
      });
    }
  }
}
function Ss(e) {
  return ee(eo, null, e, 0);
}
function Hn() {
  return "currentInstance" in Qn ? Qn["currentInstance"] : Vn();
}
const Ls = "__INTLIFY_META__", Is = () => [], Zi = () => !1;
let Os = 0;
function As(e) {
  return (t, n, s, a) => e(n, s, Hn() || void 0, a);
}
const Qi = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Hn();
  let t = null;
  return e && (t = ha(e)[Ls]) ? { [Ls]: t } : null;
};
function el(e = {}) {
  const { __root: t, __injectWithOption: n } = e, s = t === void 0, a = e.flatJson, o = qe ? me : Ft;
  let r = ce(e.inheritLocale) ? e.inheritLocale : !0;
  const i = o(
    // prettier-ignore
    t && r ? t.locale.value : M(e.locale) ? e.locale : cn
  ), l = o(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : M(e.fallbackLocale) || ue(e.fallbackLocale) || q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), p = o(ya(i.value, e)), _ = o(q(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), N = o(q(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let g = t ? t.missingWarn : ce(e.missingWarn) || ln(e.missingWarn) ? e.missingWarn : !0, S = t ? t.fallbackWarn : ce(e.fallbackWarn) || ln(e.fallbackWarn) ? e.fallbackWarn : !0, T = t ? t.fallbackRoot : ce(e.fallbackRoot) ? e.fallbackRoot : !0, O = !!e.fallbackFormat, D = le(e.missing) ? e.missing : null, d = le(e.missing) ? As(e.missing) : null, y = le(e.postTranslation) ? e.postTranslation : null, E = t ? t.warnHtmlMessage : ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, h = !!e.escapeParameter;
  const k = t ? t.modifiers : q(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || t && t.pluralRules, v;
  v = (() => {
    s && _s(null);
    const m = {
      version: Ki,
      locale: i.value,
      fallbackLocale: l.value,
      messages: p.value,
      modifiers: k,
      pluralRules: P,
      missing: d === null ? void 0 : d,
      missingWarn: g,
      fallbackWarn: S,
      fallbackFormat: O,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: E,
      escapeParameter: h,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    m.datetimeFormats = _.value, m.numberFormats = N.value, m.__datetimeFormatters = q(v) ? v.__datetimeFormatters : void 0, m.__numberFormatters = q(v) ? v.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (m.__v_emitter = q(v) ? v.__v_emitter : void 0);
    const L = Pi(m);
    return s && _s(L), L;
  })(), Rt(v, i.value, l.value);
  function j() {
    return [
      i.value,
      l.value,
      p.value,
      _.value,
      N.value
    ];
  }
  const I = $({
    get: () => i.value,
    set: (m) => {
      v.locale = m, i.value = m;
    }
  }), B = $({
    get: () => l.value,
    set: (m) => {
      v.fallbackLocale = m, l.value = m, Rt(v, i.value, m);
    }
  }), X = $(() => p.value), z = /* @__PURE__ */ $(() => _.value), Re = /* @__PURE__ */ $(() => N.value);
  function A() {
    return le(y) ? y : null;
  }
  function U(m) {
    y = m, v.postTranslation = m;
  }
  function W() {
    return D;
  }
  function Q(m) {
    m !== null && (d = As(m)), D = m, v.missing = d;
  }
  function ne(m, L) {
    return m !== "translate" || !L.resolvedMessage;
  }
  const se = (m, L, J, ie, it, Kt) => {
    j();
    let Nt;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (v.fallbackContext = t ? ki() : void 0), Nt = m(v);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (v.fallbackContext = void 0);
    }
    if (J !== "translate exists" && // for not `te` (e.g `t`)
    pe(Nt) && Nt === _n || J === "translate exists" && !Nt) {
      const [lt, Ta] = L();
      if (process.env.NODE_ENV !== "production" && t && M(lt) && ne(J, Ta) && (T && (gn(S, lt) || fa(g, lt)) && We(fn(xe.FALLBACK_TO_ROOT, {
        key: lt,
        type: J
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Kn } = v;
        Kn && T && Kn.emit("fallback", {
          type: J,
          key: lt,
          to: "global",
          groupId: `${J}:${lt}`
        });
      }
      return t && T ? ie(t) : it(lt);
    } else {
      if (Kt(Nt))
        return Nt;
      throw xt(ge.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Te(...m) {
    return se((L) => Reflect.apply(Cs, null, [L, ...m]), () => In(...m), "translate", (L) => Reflect.apply(L.t, L, [...m]), (L) => L, (L) => M(L));
  }
  function Me(...m) {
    const [L, J, ie] = m;
    if (ie && !Z(ie))
      throw xt(ge.INVALID_ARGUMENT);
    return Te(L, J, _e({ resolvedMessage: !0 }, ie || {}));
  }
  function fe(...m) {
    return se((L) => Reflect.apply(vs, null, [L, ...m]), () => Sn(...m), "datetime format", (L) => Reflect.apply(L.d, L, [...m]), () => un, (L) => M(L) || ue(L));
  }
  function gt(...m) {
    return se((L) => Reflect.apply(hs, null, [L, ...m]), () => Ln(...m), "number format", (L) => Reflect.apply(L.n, L, [...m]), () => un, (L) => M(L) || ue(L));
  }
  function Et(m) {
    return m.map((L) => M(L) || pe(L) || ce(L) ? Ss(String(L)) : L);
  }
  const Yt = {
    normalize: Et,
    interpolate: (m) => m,
    type: "vnode"
  };
  function vt(...m) {
    return se((L) => {
      let J;
      const ie = L;
      try {
        ie.processor = Yt, J = Reflect.apply(Cs, null, [ie, ...m]);
      } finally {
        ie.processor = null;
      }
      return J;
    }, () => In(...m), "translate", (L) => L[On](...m), (L) => [Ss(L)], (L) => ue(L));
  }
  function He(...m) {
    return se((L) => Reflect.apply(hs, null, [L, ...m]), () => Ln(...m), "number format", (L) => L[kn](...m), Is, (L) => M(L) || ue(L));
  }
  function et(...m) {
    return se((L) => Reflect.apply(vs, null, [L, ...m]), () => Sn(...m), "datetime format", (L) => L[An](...m), Is, (L) => M(L) || ue(L));
  }
  function yt(m) {
    P = m, v.pluralRules = P;
  }
  function ht(m, L) {
    return se(() => {
      if (!m)
        return !1;
      const J = M(L) ? L : i.value, ie = Fe(J), it = v.messageResolver(ie, m);
      return we(it) || Ae(it) || M(it);
    }, () => [m], "translate exists", (J) => Reflect.apply(J.te, J, [m, L]), Zi, (J) => ce(J));
  }
  function tt(m) {
    let L = null;
    const J = oa(v, l.value, i.value);
    for (let ie = 0; ie < J.length; ie++) {
      const it = p.value[J[ie]] || {}, Kt = v.messageResolver(it, m);
      if (Kt != null) {
        L = Kt;
        break;
      }
    }
    return L;
  }
  function nt(m) {
    const L = tt(m);
    return L ?? (t ? t.tm(m) || {} : {});
  }
  function Fe(m) {
    return p.value[m] || {};
  }
  function rt(m, L) {
    if (a) {
      const J = { [m]: L };
      for (const ie in J)
        De(J, ie) && Gt(J[ie]);
      L = J[m];
    }
    p.value[m] = L, v.messages = p.value;
  }
  function wt(m, L) {
    p.value[m] = p.value[m] || {};
    const J = { [m]: L };
    if (a)
      for (const ie in J)
        De(J, ie) && Gt(J[ie]);
    L = J[m], Zt(L, p.value[m]), v.messages = p.value;
  }
  function c(m) {
    return _.value[m] || {};
  }
  function f(m, L) {
    _.value[m] = L, v.datetimeFormats = _.value, ys(v, m, L);
  }
  function C(m, L) {
    _.value[m] = _e(_.value[m] || {}, L), v.datetimeFormats = _.value, ys(v, m, L);
  }
  function F(m) {
    return N.value[m] || {};
  }
  function oe(m, L) {
    N.value[m] = L, v.numberFormats = N.value, Ns(v, m, L);
  }
  function re(m, L) {
    N.value[m] = _e(N.value[m] || {}, L), v.numberFormats = N.value, Ns(v, m, L);
  }
  Os++, t && qe && (Be(t.locale, (m) => {
    r && (i.value = m, v.locale = m, Rt(v, i.value, l.value));
  }), Be(t.fallbackLocale, (m) => {
    r && (l.value = m, v.fallbackLocale = m, Rt(v, i.value, l.value));
  }));
  const b = {
    id: Os,
    locale: I,
    fallbackLocale: B,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(m) {
      r = m, m && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Rt(v, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(p.value).sort();
    },
    messages: X,
    get modifiers() {
      return k;
    },
    get pluralRules() {
      return P || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return g;
    },
    set missingWarn(m) {
      g = m, v.missingWarn = g;
    },
    get fallbackWarn() {
      return S;
    },
    set fallbackWarn(m) {
      S = m, v.fallbackWarn = S;
    },
    get fallbackRoot() {
      return T;
    },
    set fallbackRoot(m) {
      T = m;
    },
    get fallbackFormat() {
      return O;
    },
    set fallbackFormat(m) {
      O = m, v.fallbackFormat = O;
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(m) {
      E = m, v.warnHtmlMessage = m;
    },
    get escapeParameter() {
      return h;
    },
    set escapeParameter(m) {
      h = m, v.escapeParameter = m;
    },
    t: Te,
    getLocaleMessage: Fe,
    setLocaleMessage: rt,
    mergeLocaleMessage: wt,
    getPostTranslationHandler: A,
    setPostTranslationHandler: U,
    getMissingHandler: W,
    setMissingHandler: Q,
    [Xi]: yt
  };
  return b.datetimeFormats = z, b.numberFormats = Re, b.rt = Me, b.te = ht, b.tm = nt, b.d = fe, b.n = gt, b.getDateTimeFormat = c, b.setDateTimeFormat = f, b.mergeDateTimeFormat = C, b.getNumberFormat = F, b.setNumberFormat = oe, b.mergeNumberFormat = re, b[va] = n, b[On] = vt, b[An] = et, b[kn] = He, process.env.NODE_ENV !== "production" && (b[Pn] = (m) => {
    v.__v_emitter = m;
  }, b[Dn] = () => {
    v.__v_emitter = void 0;
  }), b;
}
function ks(e, t) {
}
const Yn = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function tl({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, a) => [
    ...s,
    // prettier-ignore
    ...a.type === be ? a.children : [a]
  ], []) : t.reduce((n, s) => {
    const a = e[s];
    return a && (n[s] = a()), n;
  }, te());
}
function Na() {
  return be;
}
_e({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => pe(e) || !isNaN(e)
  }
}, Yn);
function nl(e) {
  return ue(e) && !M(e[0]);
}
function ba(e, t, n, s) {
  const { slots: a, attrs: o } = t;
  return () => {
    const r = { part: !0 };
    let i = te();
    e.locale && (r.locale = e.locale), M(e.format) ? r.key = e.format : Z(e.format) && (M(e.format.key) && (r.key = e.format.key), i = Object.keys(e.format).reduce((g, S) => n.includes(S) ? _e(te(), g, { [S]: e.format[S] }) : g, te()));
    const l = s(e.value, r, i);
    let p = [r.key];
    ue(l) ? p = l.map((g, S) => {
      const T = a[g.type], O = T ? T({ [g.type]: g.value, index: S, parts: l }) : [g.value];
      return nl(O) && (O[0].key = `${g.type}-${S}`), O;
    }) : M(l) && (p = [l]);
    const _ = _e(te(), o), N = M(e.tag) || Z(e.tag) ? e.tag : Na();
    return Gs(N, _, p);
  };
}
_e({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Yn);
const sl = /* @__PURE__ */ Ze("global-vue-i18n");
function En(e = {}) {
  const t = Hn();
  if (t == null)
    throw xt(ge.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw xt(ge.NOT_INSTALLED);
  const n = al(t), s = rl(n), a = ha(t), o = ol(e, a);
  if (o === "global")
    return qi(s, e, a), s;
  if (o === "parent") {
    let l = il(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && We(fn(xe.NOT_FOUND_PARENT_SCOPE)), l = s), l;
  }
  const r = n;
  let i = r.__getInstance(t);
  if (i == null) {
    const l = _e({}, e);
    "__i18n" in a && (l.__i18n = a.__i18n), s && (l.__root = s), i = el(l), r.__composerExtend && (i[wn] = r.__composerExtend(i)), cl(r, t, i), r.__setInstance(t, i);
  } else
    process.env.NODE_ENV !== "production" && o === "local" && We(fn(xe.DUPLICATE_USE_I18N_CALLING));
  return i;
}
function al(e) {
  const t = Za(e.isCE ? sl : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw xt(e.isCE ? ge.NOT_INSTALLED_WITH_PROVIDE : ge.UNEXPECTED_ERROR);
  return t;
}
function ol(e, t) {
  return pn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function rl(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function il(e, t, n = !1) {
  let s = null;
  const a = t.root;
  let o = ll(t, n);
  for (; o != null; ) {
    const r = e;
    if (e.mode === "composition")
      s = r.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = r.__getInstance(o);
      i != null && (s = i.__composer, n && s && !s[va] && (s = null));
    }
    if (s != null || a === o)
      break;
    o = o.parent;
  }
  return s;
}
function ll(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function cl(e, t, n) {
  let s = null;
  _t(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = n, s = _r();
      const a = n;
      a[Pn] && a[Pn](s), s.on("*", ks);
    }
  }, t), Qa(() => {
    const a = n;
    process.env.NODE_ENV !== "production" && (s && s.off("*", ks), a[Dn] && a[Dn](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const o = a[wn];
    o && (o(), delete a[wn]);
  }, t);
}
_e({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Yn);
ji();
Si(si);
Li(hi);
Ii(oa);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = ft();
  e.__INTLIFY__ = !0, ai(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const ul = ["disabled"], fl = {
  key: 0,
  class: "custom-button__loading"
}, dl = /* @__PURE__ */ Ee({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "success", "danger", "warning", "text"].includes(e)
    },
    size: {
      type: String,
      default: "",
      validator: (e) => ["", "small", "large"].includes(e)
    },
    circle: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    plain: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e) {
    const t = e;
    return (n, s) => (R(), K("button", {
      class: Y([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: s[0] || (s[0] = (a) => n.$emit("click", a))
    }, [
      e.loading ? (R(), K("div", fl, s[1] || (s[1] = [
        w(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            w("circle", {
              class: "path",
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
              "stroke-width": "5"
            })
          ],
          -1
          /* HOISTED */
        )
      ]))) : V("v-if", !0),
      Ie(n.$slots, "default", {}, void 0, !0)
    ], 10, ul));
  }
}), Ps = /* @__PURE__ */ Mn(dl, [["__scopeId", "data-v-9497085f"]]), ml = /* @__PURE__ */ Ee({
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
  setup(e, { emit: t }) {
    const n = e, s = t, a = () => {
      if (n.disabled) return;
      const o = !n.modelValue;
      s("update:modelValue", o), s("change", o);
    };
    return (o, r) => (R(), K(
      "div",
      {
        class: Y(["custom-switch", {
          "custom-switch--active": e.modelValue,
          "custom-switch--disabled": e.disabled
        }]),
        onClick: a
      },
      [
        e.activeText || e.inactiveText ? (R(), K(
          "span",
          {
            key: 0,
            class: Y(["custom-switch__text", { "custom-switch__text--active": e.modelValue }])
          },
          H(e.modelValue ? e.activeText : e.inactiveText),
          3
          /* TEXT, CLASS */
        )) : V("v-if", !0),
        r[0] || (r[0] = w(
          "div",
          { class: "custom-switch__core" },
          [
            w("div", { class: "custom-switch__handle" })
          ],
          -1
          /* HOISTED */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), Nn = /* @__PURE__ */ Mn(ml, [["__scopeId", "data-v-09573d1e"]]), Se = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", s) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: s
    });
  },
  /**
   * 显示消息提示（完整版）
   * @param options 消息选项
   */
  message(e) {
    const {
      message: t,
      type: n = "success",
      position: s = "center",
      duration: a = 3e3,
      showClose: o = !1
    } = e;
    s === "center" ? zo({
      message: t,
      type: n,
      duration: a,
      showClose: o,
      grouping: !0
    }) : sr({
      message: t,
      type: n,
      position: s,
      duration: a,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: "custom-notification"
      // 自定义样式类
    });
  },
  /**
   * 显示成功消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  success(e, t = "center", n) {
    this.msg(e, "success", t, n);
  },
  /**
   * 显示警告消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  warning(e, t = "center", n) {
    this.msg(e, "warning", t, n);
  },
  /**
   * 显示信息消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  info(e, t = "center", n) {
    this.msg(e, "info", t, n);
  },
  /**
   * 显示错误消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  error(e, t = "center", n) {
    this.msg(e, "error", t, n);
  }
}, pl = { class: "confirm-header" }, _l = { class: "header-title" }, gl = { class: "confirm-body" }, El = { class: "message-text" }, vl = {
  key: 0,
  class: "hint-list"
}, yl = { class: "confirm-footer" }, hl = /* @__PURE__ */ Ee({
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
  setup(e, { expose: t, emit: n }) {
    const s = e, a = n, o = me(s.modelValue), r = $(() => {
      switch (s.type) {
        case "warning":
          return "⚠";
        case "danger":
          return "!";
        default:
          return "?";
      }
    }), i = $(() => `icon-${s.type}`), l = $(() => {
      const S = s.message || "", T = S.split(`
`).filter(Boolean), O = [];
      for (const D of T) {
        const d = D.trim();
        if (/^[•·\-]\s*/.test(d)) break;
        d && O.push(D);
      }
      return O.join(`
`) || T[0] || S;
    }), p = $(() => {
      const T = (s.message || "").split(`
`).filter(Boolean), O = [];
      for (const D of T) {
        const y = D.trim().match(/^[•·\-]\s*(.+)$/);
        y && O.push(y[1].trim());
      }
      return O;
    });
    Be(
      () => s.modelValue,
      (S) => {
        o.value = S;
      }
    ), Be(o, (S) => {
      a("update:modelValue", S);
    });
    function _() {
      o.value = !1, a("primary");
    }
    function N() {
      o.value = !1, a("secondary");
    }
    function g() {
      o.value = !1, a("close");
    }
    return t({
      open: () => {
        o.value = !0;
      },
      close: () => {
        o.value = !1;
      }
    }), (S, T) => (R(), ae(to, { to: "body" }, [
      ee(dn, { name: "confirm-fade" }, {
        default: de(() => [
          u(o) ? (R(), K("div", {
            key: 0,
            class: "confirm-overlay",
            onClick: dt(g, ["self"])
          }, [
            w(
              "div",
              {
                class: Y(["confirm-dialog", [`type-${S.type}`]])
              },
              [
                V(" 顶栏 "),
                w("div", pl, [
                  w("div", _l, [
                    w(
                      "span",
                      {
                        class: Y(["header-icon", u(i)])
                      },
                      H(u(r)),
                      3
                      /* TEXT, CLASS */
                    ),
                    w(
                      "span",
                      null,
                      H(S.title),
                      1
                      /* TEXT */
                    )
                  ]),
                  w("button", {
                    class: "header-close",
                    onClick: g,
                    title: "×"
                  }, T[0] || (T[0] = [
                    w(
                      "span",
                      null,
                      "×",
                      -1
                      /* HOISTED */
                    )
                  ]))
                ]),
                V(" 内容区 "),
                w("div", gl, [
                  w(
                    "div",
                    El,
                    H(u(l)),
                    1
                    /* TEXT */
                  ),
                  u(p).length ? (R(), K("div", vl, [
                    (R(!0), K(
                      be,
                      null,
                      Bs(u(p), (O, D) => (R(), K("div", {
                        key: D,
                        class: "hint-item"
                      }, [
                        T[1] || (T[1] = w(
                          "span",
                          { class: "hint-dot" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        w(
                          "span",
                          null,
                          H(O),
                          1
                          /* TEXT */
                        )
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : V("v-if", !0)
                ]),
                V(" 底栏 "),
                w("div", yl, [
                  S.secondaryText ? (R(), K(
                    "button",
                    {
                      key: 0,
                      class: "footer-btn secondary",
                      onClick: N
                    },
                    H(S.secondaryText),
                    1
                    /* TEXT */
                  )) : V("v-if", !0),
                  w(
                    "button",
                    {
                      class: Y(["footer-btn primary", { danger: S.type === "danger" }]),
                      onClick: _
                    },
                    H(S.primaryText),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ],
              2
              /* CLASS */
            )
          ])) : V("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), Nl = /* @__PURE__ */ Mn(hl, [["__scopeId", "data-v-e42cf928"]]);
function bl(e) {
  const t = String(e).toLowerCase();
  return t.includes("network") || t.includes("connection") || t.includes("tcp") || t.includes("无法连接") || t.includes("连接失败") || t.includes("网络") ? {
    type: "network",
    title: "网络连接失败",
    message: "无法连接到远程仓库，请检查网络连接",
    suggestions: [
      "检查网络连接是否正常",
      "确认是否需要代理才能访问 GitHub",
      "尝试使用 SSH 方式连接",
      "检查防火墙是否阻止了 Git 连接"
    ]
  } : t.includes("authentication") || t.includes("auth") || t.includes("token") || t.includes("credential") || t.includes("认证") || t.includes("权限") || t.includes("token") || t.includes("密码") || t.includes("身份验证") ? {
    type: "auth",
    title: "认证失败",
    message: "Git 认证失败，请检查 Token 是否正确",
    suggestions: [
      "确认 GitHub Personal Access Token 是否有效",
      "检查 Token 是否具有 repo 权限",
      "确认 Token 是否已过期",
      "尝试重新生成 Token 并更新设置"
    ]
  } : t.includes("conflict") || t.includes("冲突") || t.includes("merge") ? {
    type: "conflict",
    title: "合并冲突",
    message: "本地与远程存在冲突，需要手动解决",
    suggestions: [
      '点击"手动合并"逐个解决冲突',
      '或选择"强制拉取"以远程为准',
      '或选择"强制推送"以本地为准'
    ]
  } : t.includes("not found") || t.includes("repository") || t.includes("不存在") || t.includes("仓库") || t.includes("404") ? {
    type: "not_found",
    title: "仓库不存在",
    message: "远程仓库不存在或已被删除",
    suggestions: [
      "确认远程仓库 URL 是否正确",
      "检查仓库是否已被删除或重命名",
      "可以在 GitHub 上确认仓库是否存在",
      "如需重新创建仓库，请重新配置"
    ]
  } : t.includes("permission") || t.includes("access denied") || t.includes("访问被拒绝") || t.includes("权限不足") ? {
    type: "permission",
    title: "权限不足",
    message: "没有足够的权限访问或推送到此仓库",
    suggestions: [
      "确认 Token 具有仓库的写入权限",
      "检查是否被邀请加入仓库",
      "确认仓库是否是私有仓库"
    ]
  } : t.includes("git is not installed") || t.includes("git not found") || t.includes("git 未安装") || t.includes("找不到 git") ? {
    type: "git_not_installed",
    title: "Git 未安装",
    message: "系统未安装 Git，请先安装 Git",
    suggestions: [
      "下载并安装 Git: https://git-scm.com",
      "安装完成后重启应用程序",
      "确认 git 命令可以在终端中运行"
    ]
  } : t.includes("not a git repository") || t.includes("不是 git 仓库") || t.includes("不是有效的仓库") ? {
    type: "not_a_repo",
    title: "不是 Git 仓库",
    message: "当前目录不是 Git 仓库",
    suggestions: [
      "需要先初始化 Git 仓库",
      "或重新配置指向已有的 Git 仓库"
    ]
  } : t.includes("no remote") || t.includes("没有远程") || t.includes("未配置远程") ? {
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
function Tl(e) {
  switch (e) {
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
const Cl = { class: "settings-panel" }, Sl = { class: "panel-header" }, Ll = { class: "panel-title" }, Il = { class: "panel-content" }, Ol = { class: "sync-status-panel__left" }, Al = { class: "sync-status-icon" }, kl = { class: "sync-status-info" }, Pl = { class: "sync-status-label" }, Dl = { class: "sync-status-detail" }, wl = {
  key: 1,
  class: "pending-count"
}, Rl = { class: "sync-status-panel__right" }, Ml = { class: "sync-pending-files-header" }, Fl = { class: "sync-pending-files-list" }, Vl = { class: "file-name" }, Ul = { class: "settings-section-title" }, $l = { class: "summarize-section" }, xl = { class: "summarize-label" }, Gl = { class: "summarize-label-title" }, Bl = { class: "summarize-label-desc" }, Wl = { class: "summarize-input-wrapper" }, Hl = { class: "summarize-section" }, Yl = { class: "summarize-label" }, Kl = { class: "summarize-label-title" }, jl = { class: "summarize-label-desc" }, zl = { class: "summarize-input-wrapper" }, Xl = { class: "summarize-section" }, Jl = { class: "summarize-label" }, ql = { class: "summarize-label-title" }, Zl = { class: "summarize-label-desc" }, Ql = { class: "summarize-input-wrapper" }, ec = {
  key: 0,
  class: "summarize-section transparent-input"
}, tc = { class: "summarize-label" }, nc = { class: "summarize-label-title" }, sc = { class: "summarize-label-desc" }, ac = { class: "summarize-input-wrapper" }, oc = { class: "ml-2 text-sm text-panel" }, rc = { class: "settings-section-title" }, ic = { class: "summarize-section" }, lc = { class: "summarize-label" }, cc = { class: "summarize-label-title" }, uc = { class: "summarize-label-desc" }, fc = { class: "summarize-input-wrapper flex gap-2" }, pc = /* @__PURE__ */ Ee({
  name: "GitSync",
  __name: "index",
  setup(e) {
    const { t } = En(), {
      syncState: n,
      pendingFilesCount: s,
      formattedLastSyncTime: a,
      gitStatus: o,
      refreshStatus: r,
      refreshSettings: i
    } = Ua(), l = $(() => o.value?.changed_files ? o.value.changed_files : []), p = (I) => {
      switch (I) {
        case "syncing":
          return t("settings.gitSync.status.syncing") || "同步中";
        case "synced":
          return t("settings.gitSync.status.synced") || "已同步";
        case "has_changes":
          return t("settings.gitSync.status.hasChanges") || "有待同步";
        case "error":
          return t("settings.gitSync.status.error") || "同步出错";
        case "idle":
          return t("settings.gitSync.status.idle") || "空闲";
        case "disabled":
          return t("settings.gitSync.status.ready") || "就绪";
        default:
          return t("settings.gitSync.status.ready") || "就绪";
      }
    }, _ = me({
      enabled: !1,
      user_name: "",
      user_email: "",
      token: "",
      remote_url: "",
      pull_on_start: !0,
      auto_sync: !1,
      auto_sync_delay: 1
    }), N = me(!1), g = me(!1), S = me(!1), T = me(!1), O = me({
      title: "",
      message: "",
      primaryText: "",
      secondaryText: "",
      type: "info"
    }), D = (I) => {
      const B = bl(I), X = Tl(B.type), z = String(I).replace(/^Error:\s*/, "");
      let Re = `${X} ${B.title}

${B.message}`;
      z && !B.message.includes(z) && (Re += `

详情: ${z.slice(0, 100)}${z.length > 100 ? "..." : ""}`), Se.msg(Re, "error", "top-right"), console.group(`🔧 Git 错误解决建议 - ${B.title}`), console.log(z), console.log("建议步骤:"), B.suggestions.forEach((A, U) => {
        console.log(`${U + 1}. ${A}`);
      }), console.groupEnd();
    }, d = (I) => {
      T.value = !1;
    }, y = async () => {
      try {
        Ye.info("[GitSync] 开始加载 Git 设置");
        const I = await $a();
        _.value = I, Ye.info("[GitSync] Git 设置加载成功", I);
      } catch (I) {
        Ye.error("[GitSync] 加载 Git 设置失败", I), Se.msg(t("settings.gitSync.loadFailed"), "error", "top-right");
      }
    }, E = async () => {
      try {
        await Ba(_.value);
      } catch (I) {
        throw Ye.error("[GitSync] 保存 Git 设置失败", I), I;
      }
    }, h = async (I) => {
      N.value = !0;
      try {
        await E(), Se.msg(t(I ? "settings.gitSync.enabledSuccess" : "settings.gitSync.disabledSuccess"), "success", "bottom-right");
      } catch {
        Se.msg(t("settings.gitSync.saveFailed"), "error", "top-right"), _.value.enabled = !I;
      } finally {
        N.value = !1;
      }
    }, k = async (I) => {
      N.value = !0;
      try {
        await E(), Se.msg(t(I ? "settings.gitSync.pullOnStartEnabled" : "settings.gitSync.pullOnStartDisabled"), "success", "bottom-right");
      } catch {
        Se.msg(t("settings.gitSync.saveFailed"), "error", "top-right"), _.value.pull_on_start = !I;
      } finally {
        N.value = !1;
      }
    }, P = async (I) => {
      N.value = !0;
      try {
        await E(), I ? await Xn() : await Jn(), Se.msg(t(I ? "settings.gitSync.autoSyncEnabled" : "settings.gitSync.autoSyncDisabled"), "success", "bottom-right");
      } catch {
        Se.msg(t("settings.gitSync.saveFailed"), "error", "top-right"), _.value.auto_sync = !I;
      } finally {
        N.value = !1;
      }
    }, v = async () => {
      N.value = !0;
      try {
        await E(), _.value.auto_sync && (await Jn(), await Xn());
      } catch {
        Se.msg(t("settings.gitSync.saveFailed"), "error", "top-right");
      } finally {
        N.value = !1;
      }
    }, G = async () => {
      Ye.info("[GitSync] 手动 Pull 开始"), g.value = !0;
      try {
        const I = await xa();
        I.success ? I.has_conflicts ? Ye.info("[GitSync] Pull 检测到冲突，由全局对话框处理") : I.files_updated === 0 ? Se.msg(t("settings.gitSync.alreadyUpToDate"), "success", "bottom-right") : Se.msg(t("settings.gitSync.pullSuccess", { count: I.files_updated }), "success", "bottom-right") : Se.msg(t("settings.gitSync.pullFailed"), "error", "top-right");
      } catch (I) {
        Ye.error("[GitSync] 手动 Pull 失败", I), D(I);
      } finally {
        g.value = !1;
      }
    }, j = async () => {
      Ye.info("[GitSync] 手动 Push 开始"), S.value = !0;
      try {
        const I = await Ga("Manual sync");
        I.success ? Se.msg(t("settings.gitSync.pushSuccess", { count: I.files_pushed }), "success", "bottom-right") : Se.msg(t("settings.gitSync.pushFailed"), "error", "top-right");
      } catch (I) {
        Ye.error("[GitSync] 手动 Push 失败", I), D(I);
      } finally {
        S.value = !1;
      }
    };
    return _t(async () => {
      await y(), await i(), await r();
    }), (I, B) => {
      const X = Mo;
      return R(), K("div", Cl, [
        V(" 固定标题 "),
        w("div", Sl, [
          w(
            "h3",
            Ll,
            H(I.$t("settings.gitSync.title")),
            1
            /* TEXT */
          )
        ]),
        V(" 可滚动内容 "),
        w("main", Il, [
          V(" 当前同步状态：同面板内左右分栏 "),
          u(_).enabled ? (R(), K(
            "div",
            {
              key: 0,
              class: Y(["sync-status-panel", `sync-status-panel--${u(n)}`])
            },
            [
              V(" 左侧：状态摘要 "),
              w("div", Ol, [
                w("div", Al, [
                  u(n) === "syncing" ? (R(), ae(u(Wa), {
                    key: 0,
                    class: "git-sync-icon",
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : u(n) === "synced" || u(n) === "idle" || u(n) === "disabled" ? (R(), ae(u(ao), {
                    key: 1,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : u(n) === "has_changes" ? (R(), ae(u(so), {
                    key: 2,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : u(n) === "error" ? (R(), ae(u(oo), {
                    key: 3,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : V("v-if", !0)
                ]),
                w("div", kl, [
                  w(
                    "div",
                    Pl,
                    H(p(u(n))),
                    1
                    /* TEXT */
                  ),
                  w("div", Dl, [
                    u(n) === "syncing" ? (R(), K(
                      be,
                      { key: 0 },
                      [
                        ct(
                          H(I.$t("settings.gitSync.status.syncing")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : u(n) === "has_changes" ? (R(), K(
                      "span",
                      wl,
                      H(u(s)) + " " + H(I.$t("settings.gitSync.status.pendingFiles")),
                      1
                      /* TEXT */
                    )) : u(n) === "synced" || u(n) === "idle" ? (R(), K(
                      be,
                      { key: 2 },
                      [
                        ct(
                          H(u(a) ? `${I.$t("settings.gitSync.status.lastSync")}: ${u(a)}` : I.$t("settings.gitSync.status.waitingSync")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : u(n) === "error" ? (R(), K(
                      be,
                      { key: 3 },
                      [
                        ct(
                          H(I.$t("settings.gitSync.status.error")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : u(n) === "disabled" ? (R(), K(
                      be,
                      { key: 4 },
                      [
                        ct(
                          H(I.$t("settings.gitSync.status.checking")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : V("v-if", !0)
                  ])
                ])
              ]),
              V(" 右侧：待同步文件列表（仅在有变更时显示） "),
              u(n) === "has_changes" && u(s) > 0 ? (R(), K(
                be,
                { key: 0 },
                [
                  B[8] || (B[8] = w(
                    "div",
                    { class: "sync-status-panel__divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w("div", Rl, [
                    w(
                      "div",
                      Ml,
                      H(I.$t("settings.gitSync.status.pendingFilesTitle")) + " (" + H(u(s)) + ") ",
                      1
                      /* TEXT */
                    ),
                    w("div", Fl, [
                      (R(!0), K(
                        be,
                        null,
                        Bs(u(l), (z) => (R(), K("div", {
                          key: z,
                          class: "sync-pending-file-item"
                        }, [
                          w(
                            "span",
                            Vl,
                            H(z),
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
              )) : V("v-if", !0)
            ],
            2
            /* CLASS */
          )) : V("v-if", !0),
          V(" 第一部分：Git 配置 "),
          w(
            "div",
            Ul,
            H(I.$t("settings.gitSync.status.section.config")),
            1
            /* TEXT */
          ),
          V(" 启用 Git 同步 "),
          w("section", $l, [
            w("div", xl, [
              w(
                "div",
                Gl,
                H(I.$t("settings.gitSync.enabled")),
                1
                /* TEXT */
              ),
              w(
                "div",
                Bl,
                H(I.$t("settings.gitSync.enabledDesc")),
                1
                /* TEXT */
              )
            ]),
            w("div", Wl, [
              ee(u(Nn), {
                modelValue: u(_).enabled,
                "onUpdate:modelValue": B[0] || (B[0] = (z) => u(_).enabled = z),
                "active-text": I.$t("common.on"),
                "inactive-text": I.$t("common.off"),
                disabled: u(N),
                onChange: h
              }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
            ])
          ]),
          V(" 同步选项（Git 必要配置在个人中心填写，此处仅保留开关与同步操作） "),
          u(_).enabled ? (R(), K(
            be,
            { key: 1 },
            [
              V(" 启动时自动拉取 "),
              w("section", Hl, [
                w("div", Yl, [
                  w(
                    "div",
                    Kl,
                    H(I.$t("settings.gitSync.pullOnStart")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "div",
                    jl,
                    H(I.$t("settings.gitSync.pullOnStartDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                w("div", zl, [
                  ee(u(Nn), {
                    modelValue: u(_).pull_on_start,
                    "onUpdate:modelValue": B[1] || (B[1] = (z) => u(_).pull_on_start = z),
                    "active-text": I.$t("common.on"),
                    "inactive-text": I.$t("common.off"),
                    disabled: u(N),
                    onChange: k
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              V(" 自动同步 "),
              w("section", Xl, [
                w("div", Jl, [
                  w(
                    "div",
                    ql,
                    H(I.$t("settings.gitSync.autoSync")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "div",
                    Zl,
                    H(I.$t("settings.gitSync.autoSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                w("div", Ql, [
                  ee(u(Nn), {
                    modelValue: u(_).auto_sync,
                    "onUpdate:modelValue": B[2] || (B[2] = (z) => u(_).auto_sync = z),
                    "active-text": I.$t("common.on"),
                    "inactive-text": I.$t("common.off"),
                    disabled: u(N),
                    onChange: P
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              V(" 自动同步延迟（仅在启用自动同步时显示） "),
              u(_).auto_sync ? (R(), K("section", ec, [
                w("div", tc, [
                  w(
                    "div",
                    nc,
                    H(I.$t("settings.gitSync.autoSyncDelay")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "div",
                    sc,
                    H(I.$t("settings.gitSync.autoSyncDelayDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                w("div", ac, [
                  ee(X, {
                    modelValue: u(_).auto_sync_delay,
                    "onUpdate:modelValue": B[3] || (B[3] = (z) => u(_).auto_sync_delay = z),
                    min: 1,
                    max: 60,
                    disabled: u(N),
                    onChange: v,
                    class: "!w-32"
                  }, null, 8, ["modelValue", "disabled"]),
                  w(
                    "span",
                    oc,
                    H(I.$t("settings.gitSync.minutes")),
                    1
                    /* TEXT */
                  )
                ])
              ])) : V("v-if", !0),
              V(" 第二部分：同步操作 "),
              w(
                "div",
                rc,
                H(I.$t("settings.gitSync.status.section.sync") || "同步操作"),
                1
                /* TEXT */
              ),
              V(" 手动同步按钮 "),
              w("section", ic, [
                w("div", lc, [
                  w(
                    "div",
                    cc,
                    H(I.$t("settings.gitSync.manualSync")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "div",
                    uc,
                    H(I.$t("settings.gitSync.manualSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                w("div", fc, [
                  ee(u(Ps), {
                    type: "primary",
                    size: "small",
                    loading: u(g),
                    onClick: G
                  }, {
                    default: de(() => [
                      ct(
                        H(I.$t("settings.gitSync.pull")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"]),
                  ee(u(Ps), {
                    type: "primary",
                    size: "small",
                    loading: u(S),
                    onClick: j
                  }, {
                    default: de(() => [
                      ct(
                        H(I.$t("settings.gitSync.push")),
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
          )) : V("v-if", !0)
        ]),
        V(" 自定义确认框 "),
        ee(Nl, {
          modelValue: u(T),
          "onUpdate:modelValue": B[4] || (B[4] = (z) => no(T) ? T.value = z : null),
          title: u(O).title,
          message: u(O).message,
          "primary-text": u(O).primaryText,
          "secondary-text": u(O).secondaryText,
          type: u(O).type,
          onPrimary: B[5] || (B[5] = (z) => d()),
          onSecondary: B[6] || (B[6] = (z) => d()),
          onClose: B[7] || (B[7] = (z) => d())
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "type"])
      ]);
    };
  }
});
export {
  pc as default
};
