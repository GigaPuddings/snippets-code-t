import { I as ko, g as Kr, e as jr, i as Ro, b as Gr, S as Gn, a as un, c as cn, t as Ao, d as Wn, f as Wr, h as q, j as Se, k as We, u as Po, l as Vr, m as Ur, _ as W, n as ce, o as Yr, p as Pt, q as Oe, r as F, s as Jt, v as qr, w as Je, x as Fo, y as Ne, E as U, z as Vn, A as Jr, B as Zr, C as Mo, D as $o, F as Qr, G as Xr, H as ea, J as Zt, K as ta, L as Ft, M as fn, N as na, O as oa, P as No, Q as Ct, R as Qt, T as ra } from "./index-BOqVfAxJ.js";
import { l as x, i as L, j as ft, y as p, h as T, r as O, v as $, a5 as he, t as ne, Z as j, J as P, O as N, P as dn, M as st, R as te, Q as it, W as Lo, X as Bo, I as Z, F as Bt, w as G, n as lt, H as se, a as xo, a6 as aa, q as be, a7 as sa, _ as oe, K as z, $ as nt, C as Do, N as Xt, a8 as ia, T as Ho, a9 as la, L as ke, z as ua, s as ca, G as et, aa as fa, ab as da, ac as pa, B as zo, ad as va, U as tt, ae as ha, af as ee, ag as ga, ah as ma, ai as ba, a0 as en, u as ya } from "./runtime-entry-jH2ytxGs.js";
const Un = ko("branch", !0, function(e) {
  return x("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [x("path", {
    d: "M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), x("path", {
    d: "M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), x("path", {
    d: "M9 44C11.2091 44 13 42.2091 13 40C13 37.7909 11.2091 36 9 36C6.79086 36 5 37.7909 5 40C5 42.2091 6.79086 44 9 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), x("path", {
    d: "M9 12V36V24.0083H36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wa = ko("loading", !0, function(e) {
  return x("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [x("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), x("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
});
function Ea(e) {
  return e;
}
function _a(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Sa = 800, Ta = 16, Ca = Date.now;
function Oa(e) {
  var t = 0, n = 0;
  return function() {
    var o = Ca(), r = Ta - (o - n);
    if (n = o, r > 0) {
      if (++t >= Sa)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ia(e) {
  return function() {
    return e;
  };
}
var Mt = function() {
  try {
    var e = Kr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ka = Mt ? function(e, t) {
  return Mt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ia(t),
    writable: !0
  });
} : Ea, Ra = Oa(ka), Aa = 9007199254740991, Pa = /^(?:0|[1-9]\d*)$/;
function Ko(e, t) {
  var n = typeof e;
  return t = t ?? Aa, !!t && (n == "number" || n != "symbol" && Pa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Fa(e, t, n) {
  t == "__proto__" && Mt ? Mt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Ma = Object.prototype, $a = Ma.hasOwnProperty;
function Na(e, t, n) {
  var o = e[t];
  (!($a.call(e, t) && jr(o, n)) || n === void 0 && !(t in e)) && Fa(e, t, n);
}
var Yn = Math.max;
function La(e, t, n) {
  return t = Yn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = Yn(o.length - t, 0), i = Array(a); ++r < a; )
      i[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(i), _a(e, this, s);
  };
}
var Ba = 9007199254740991;
function xa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ba;
}
var Da = "[object Arguments]";
function qn(e) {
  return Ro(e) && Gr(e) == Da;
}
var jo = Object.prototype, Ha = jo.hasOwnProperty, za = jo.propertyIsEnumerable, Go = qn(/* @__PURE__ */ function() {
  return arguments;
}()) ? qn : function(e) {
  return Ro(e) && Ha.call(e, "callee") && !za.call(e, "callee");
};
function Ka(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Jn = Gn ? Gn.isConcatSpreadable : void 0;
function ja(e) {
  return un(e) || Go(e) || !!(Jn && e && e[Jn]);
}
function Ga(e, t, n, o, r) {
  var a = -1, i = e.length;
  for (n || (n = ja), r || (r = []); ++a < i; ) {
    var s = e[a];
    n(s) ? Ka(r, s) : r[r.length] = s;
  }
  return r;
}
function Wa(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ga(e) : [];
}
function Va(e) {
  return Ra(La(e, void 0, Wa), e + "");
}
function Ua() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return un(e) ? e : [e];
}
function Ya(e, t) {
  return e != null && t in Object(e);
}
function qa(e, t, n) {
  t = cn(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var i = Ao(t[o]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && xa(r) && Ko(i, r) && (un(e) || Go(e)));
}
function Ja(e, t) {
  return e != null && qa(e, t, Ya);
}
function pn(e) {
  return e == null;
}
function Za(e) {
  return e === void 0;
}
function Qa(e, t, n, o) {
  if (!Wn(e))
    return e;
  t = cn(t, e);
  for (var r = -1, a = t.length, i = a - 1, s = e; s != null && ++r < a; ) {
    var l = Ao(t[r]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (r != i) {
      var f = s[l];
      u = void 0, u === void 0 && (u = Wn(f) ? f : Ko(t[r + 1]) ? [] : {});
    }
    Na(s, l, u), s = s[l];
  }
  return e;
}
function Xa(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var i = t[o], s = Wr(e, i);
    n(s, i) && Qa(a, cn(i, e), s);
  }
  return a;
}
function es(e, t) {
  return Xa(e, t, function(n, o) {
    return Ja(e, o);
  });
}
var ts = Va(function(e, t) {
  return e == null ? {} : es(e, t);
});
const ns = q({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), vn = (e) => ts(ns, e), hn = Symbol("formContextKey"), $t = Symbol("formItemContextKey"), tn = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, os = Symbol("elIdInjection"), Wo = () => ft() ? L(os, tn) : tn, gn = (e) => {
  const t = Wo();
  !Se && t === tn && We("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Po();
  return Vr(() => p(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, rs = () => {
  const e = L(hn, void 0), t = L($t, void 0);
  return {
    form: e,
    formItem: t
  };
}, Vo = (e) => {
  const t = ft();
  return T(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, Uo = (e, t = {}) => {
  const n = O(void 0), o = t.prop ? n : Vo("size"), r = t.global ? n : Ur(), a = t.form ? { size: void 0 } : L(hn, void 0), i = t.formItem ? { size: void 0 } : L($t, void 0);
  return T(() => o.value || p(e) || i?.size || a?.size || r.value || "");
}, Yo = (e) => {
  const t = Vo("disabled"), n = L(hn, void 0);
  return T(() => t.value || p(e) || n?.disabled || !1);
}, He = 4, as = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, ss = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), mn = Symbol("scrollbarContextKey"), is = q({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), ls = "Thumb", us = /* @__PURE__ */ $({
  __name: "thumb",
  props: is,
  setup(e) {
    const t = e, n = L(mn), o = ce("scrollbar");
    n || Yr(ls, "can not inject scrollbar context");
    const r = O(), a = O(), i = O({}), s = O(!1);
    let l = !1, u = !1, f = Se ? document.onselectstart : null;
    const d = T(() => as[t.vertical ? "vertical" : "horizontal"]), m = T(() => ss({
      size: t.size,
      move: t.move,
      bar: d.value
    })), h = T(() => r.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / a.value[d.value.offset]), c = (S) => {
      var C;
      if (S.stopPropagation(), S.ctrlKey || [1, 2].includes(S.button))
        return;
      (C = window.getSelection()) == null || C.removeAllRanges(), y(S);
      const k = S.currentTarget;
      k && (i.value[d.value.axis] = k[d.value.offset] - (S[d.value.client] - k.getBoundingClientRect()[d.value.direction]));
    }, v = (S) => {
      if (!a.value || !r.value || !n.wrapElement)
        return;
      const C = Math.abs(S.target.getBoundingClientRect()[d.value.direction] - S[d.value.client]), k = a.value[d.value.offset] / 2, A = (C - k) * 100 * h.value / r.value[d.value.offset];
      n.wrapElement[d.value.scroll] = A * n.wrapElement[d.value.scrollSize] / 100;
    }, y = (S) => {
      S.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", E), f = document.onselectstart, document.onselectstart = () => !1;
    }, g = (S) => {
      if (!r.value || !a.value || l === !1)
        return;
      const C = i.value[d.value.axis];
      if (!C)
        return;
      const k = (r.value.getBoundingClientRect()[d.value.direction] - S[d.value.client]) * -1, A = a.value[d.value.offset] - C, M = (k - A) * 100 * h.value / r.value[d.value.offset];
      n.wrapElement[d.value.scroll] = M * n.wrapElement[d.value.scrollSize] / 100;
    }, E = () => {
      l = !1, i.value[d.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", E), b(), u && (s.value = !1);
    }, R = () => {
      u = !1, s.value = !!t.size;
    }, w = () => {
      u = !0, s.value = l;
    };
    he(() => {
      b(), document.removeEventListener("mouseup", E);
    });
    const b = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Pt(ne(n, "scrollbarElement"), "mousemove", R), Pt(ne(n, "scrollbarElement"), "mouseleave", w), (S, C) => (P(), j(Bo, {
      name: p(o).b("fade"),
      persisted: ""
    }, {
      default: N(() => [
        dn(st("div", {
          ref_key: "instance",
          ref: r,
          class: te([p(o).e("bar"), p(o).is(p(d).key)]),
          onMousedown: v
        }, [
          st("div", {
            ref_key: "thumb",
            ref: a,
            class: te(p(o).e("thumb")),
            style: it(p(m)),
            onMousedown: c
          }, null, 38)
        ], 34), [
          [Lo, S.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Zn = /* @__PURE__ */ W(us, [["__file", "thumb.vue"]]);
const cs = q({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), fs = /* @__PURE__ */ $({
  __name: "bar",
  props: cs,
  setup(e, { expose: t }) {
    const n = e, o = L(mn), r = O(0), a = O(0), i = O(""), s = O(""), l = O(1), u = O(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const h = m.offsetHeight - He, c = m.offsetWidth - He;
          a.value = m.scrollTop * 100 / h * l.value, r.value = m.scrollLeft * 100 / c * u.value;
        }
      },
      update: () => {
        const m = o?.wrapElement;
        if (!m)
          return;
        const h = m.offsetHeight - He, c = m.offsetWidth - He, v = h ** 2 / m.scrollHeight, y = c ** 2 / m.scrollWidth, g = Math.max(v, n.minSize), E = Math.max(y, n.minSize);
        l.value = v / (h - v) / (g / (h - g)), u.value = y / (c - y) / (E / (c - E)), s.value = g + He < h ? `${g}px` : "", i.value = E + He < c ? `${E}px` : "";
      }
    }), (m, h) => (P(), Z(Bt, null, [
      x(Zn, {
        move: r.value,
        ratio: u.value,
        size: i.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      x(Zn, {
        move: a.value,
        ratio: l.value,
        size: s.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var ds = /* @__PURE__ */ W(fs, [["__file", "bar.vue"]]);
const ps = q({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: F([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  tabindex: {
    type: [String, Number],
    default: void 0
  },
  id: String,
  role: String,
  ...vn(["ariaLabel", "ariaOrientation"])
}), vs = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Oe)
}, nn = "ElScrollbar", hs = $({
  name: nn
}), gs = /* @__PURE__ */ $({
  ...hs,
  props: ps,
  emits: vs,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ce("scrollbar");
    let a, i, s = 0, l = 0;
    const u = O(), f = O(), d = O(), m = O(), h = T(() => {
      const b = {};
      return o.height && (b.height = Jt(o.height)), o.maxHeight && (b.maxHeight = Jt(o.maxHeight)), [o.wrapStyle, b];
    }), c = T(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), v = T(() => [r.e("view"), o.viewClass]), y = () => {
      var b;
      f.value && ((b = m.value) == null || b.handleScroll(f.value), s = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function g(b, S) {
      Do(b) ? f.value.scrollTo(b) : Oe(b) && Oe(S) && f.value.scrollTo(b, S);
    }
    const E = (b) => {
      if (!Oe(b)) {
        We(nn, "value must be a number");
        return;
      }
      f.value.scrollTop = b;
    }, R = (b) => {
      if (!Oe(b)) {
        We(nn, "value must be a number");
        return;
      }
      f.value.scrollLeft = b;
    }, w = () => {
      var b;
      (b = m.value) == null || b.update();
    };
    return G(() => o.noresize, (b) => {
      b ? (a?.(), i?.()) : ({ stop: a } = qr(d, w), i = Pt("resize", w));
    }, { immediate: !0 }), G(() => [o.maxHeight, o.height], () => {
      o.native || lt(() => {
        var b;
        w(), f.value && ((b = m.value) == null || b.handleScroll(f.value));
      });
    }), se(mn, xo({
      scrollbarElement: u,
      wrapElement: f
    })), aa(() => {
      f.value && (f.value.scrollTop = s, f.value.scrollLeft = l);
    }), be(() => {
      o.native || lt(() => {
        w();
      });
    }), sa(() => w()), t({
      wrapRef: f,
      update: w,
      scrollTo: g,
      setScrollTop: E,
      setScrollLeft: R,
      handleScroll: y
    }), (b, S) => (P(), Z("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: te(p(r).b())
    }, [
      st("div", {
        ref_key: "wrapRef",
        ref: f,
        class: te(p(c)),
        style: it(p(h)),
        tabindex: b.tabindex,
        onScroll: y
      }, [
        (P(), j(nt(b.tag), {
          id: b.id,
          ref_key: "resizeRef",
          ref: d,
          class: te(p(v)),
          style: it(b.viewStyle),
          role: b.role,
          "aria-label": b.ariaLabel,
          "aria-orientation": b.ariaOrientation
        }, {
          default: N(() => [
            z(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      b.native ? oe("v-if", !0) : (P(), j(ds, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: b.always,
        "min-size": b.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var ms = /* @__PURE__ */ W(gs, [["__file", "scrollbar.vue"]]);
const bs = Je(ms), bn = Symbol("popper"), qo = Symbol("popperContent"), Jo = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Zo = q({
  role: {
    type: String,
    values: Jo,
    default: "tooltip"
  }
}), ys = $({
  name: "ElPopper",
  inheritAttrs: !1
}), ws = /* @__PURE__ */ $({
  ...ys,
  props: Zo,
  setup(e, { expose: t }) {
    const n = e, o = O(), r = O(), a = O(), i = O(), s = T(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: i,
      role: s
    };
    return t(l), se(bn, l), (u, f) => z(u.$slots, "default");
  }
});
var Es = /* @__PURE__ */ W(ws, [["__file", "popper.vue"]]);
const Qo = q({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), _s = $({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Ss = /* @__PURE__ */ $({
  ..._s,
  props: Qo,
  setup(e, { expose: t }) {
    const n = e, o = ce("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: i } = L(qo, void 0);
    return G(() => n.arrowOffset, (s) => {
      r.value = s;
    }), he(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (s, l) => (P(), Z("span", {
      ref_key: "arrowRef",
      ref: a,
      class: te(p(o).e("arrow")),
      style: it(p(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Ts = /* @__PURE__ */ W(Ss, [["__file", "arrow.vue"]]);
const Xo = q({
  virtualRef: {
    type: F(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: F(Function)
  },
  onMouseleave: {
    type: F(Function)
  },
  onClick: {
    type: F(Function)
  },
  onKeydown: {
    type: F(Function)
  },
  onFocus: {
    type: F(Function)
  },
  onBlur: {
    type: F(Function)
  },
  onContextmenu: {
    type: F(Function)
  },
  id: String,
  open: Boolean
}), er = Symbol("elForwardRef"), Cs = (e) => {
  se(er, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Os = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), on = (e) => {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    return !0;
  if (e.tabIndex < 0 || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true")
    return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return !(e.type === "hidden" || e.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}, jt = "ElOnlyChild", tr = $({
  name: jt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = L(er), a = Os((o = r?.setForwardRef) != null ? o : Xt);
    return () => {
      var i;
      const s = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return We(jt, "requires exact only one valid child."), null;
      const l = nr(s);
      return l ? dn(ia(l, n), [[a]]) : (We(jt, "no valid child node found"), null);
    };
  }
});
function nr(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Do(n))
      switch (n.type) {
        case la:
          continue;
        case Ho:
        case "svg":
          return Qn(n);
        case Bt:
          return nr(n.children);
        default:
          return n;
      }
    return Qn(n);
  }
  return null;
}
function Qn(e) {
  const t = ce("only-child");
  return x("span", {
    class: t.e("content")
  }, [e]);
}
const Is = $({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), ks = /* @__PURE__ */ $({
  ...Is,
  props: Xo,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = L(bn, void 0);
    Cs(r);
    const a = T(() => s.value ? n.id : void 0), i = T(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = T(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = T(() => s.value ? `${n.open}` : void 0);
    let u;
    const f = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return be(() => {
      G(() => n.virtualRef, (d) => {
        d && (r.value = Fo(d));
      }, {
        immediate: !0
      }), G(r, (d, m) => {
        u?.(), u = void 0, Ne(d) && (f.forEach((h) => {
          var c;
          const v = n[h];
          v && (d.addEventListener(h.slice(2).toLowerCase(), v), (c = m?.removeEventListener) == null || c.call(m, h.slice(2).toLowerCase(), v));
        }), on(d) && (u = G([a, i, s, l], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((c, v) => {
            pn(h[v]) ? d.removeAttribute(c) : d.setAttribute(c, h[v]);
          });
        }, { immediate: !0 }))), Ne(m) && on(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => m.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), he(() => {
      if (u?.(), u = void 0, r.value && Ne(r.value)) {
        const d = r.value;
        f.forEach((m) => {
          const h = n[m];
          h && d.removeEventListener(m.slice(2).toLowerCase(), h);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (d, m) => d.virtualTriggering ? oe("v-if", !0) : (P(), j(p(tr), ke({ key: 0 }, d.$attrs, {
      "aria-controls": p(a),
      "aria-describedby": p(i),
      "aria-expanded": p(l),
      "aria-haspopup": p(s)
    }), {
      default: N(() => [
        z(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Rs = /* @__PURE__ */ W(ks, [["__file", "trigger.vue"]]);
const Gt = "focus-trap.focus-after-trapped", Wt = "focus-trap.focus-after-released", As = "focus-trap.focusout-prevented", Xn = {
  cancelable: !0,
  bubbles: !1
}, Ps = {
  cancelable: !0,
  bubbles: !1
}, eo = "focusAfterTrapped", to = "focusAfterReleased", or = Symbol("elFocusTrap"), yn = O(), xt = O(0), wn = O(0);
let mt = 0;
const rr = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, no = (e, t) => {
  for (const n of e)
    if (!Fs(n, t))
      return n;
}, Fs = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, Ms = (e) => {
  const t = rr(e), n = no(t, e), o = no(t.reverse(), e);
  return [n, o];
}, $s = (e) => e instanceof HTMLInputElement && "select" in e, _e = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Ne(e) && !on(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), wn.value = window.performance.now(), e !== n && $s(e) && t && e.select(), Ne(e) && o && e.removeAttribute("tabindex");
  }
};
function oo(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Ns = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = oo(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = oo(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, Ls = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (_e(o, t), document.activeElement !== n)
      return;
}, ro = Ns(), Bs = () => xt.value > wn.value, bt = () => {
  yn.value = "pointer", xt.value = window.performance.now();
}, ao = () => {
  yn.value = "keyboard", xt.value = window.performance.now();
}, xs = () => (be(() => {
  mt === 0 && (document.addEventListener("mousedown", bt), document.addEventListener("touchstart", bt), document.addEventListener("keydown", ao)), mt++;
}), he(() => {
  mt--, mt <= 0 && (document.removeEventListener("mousedown", bt), document.removeEventListener("touchstart", bt), document.removeEventListener("keydown", ao));
}), {
  focusReason: yn,
  lastUserFocusTimestamp: xt,
  lastAutomatedFocusTimestamp: wn
}), yt = (e) => new CustomEvent(As, {
  ...Ps,
  detail: e
});
let Ke = [];
const so = (e) => {
  e.code === U.esc && Ke.forEach((t) => t(e));
}, Ds = (e) => {
  be(() => {
    Ke.length === 0 && document.addEventListener("keydown", so), Se && Ke.push(e);
  }), he(() => {
    Ke = Ke.filter((t) => t !== e), Ke.length === 0 && Se && document.removeEventListener("keydown", so);
  });
}, Hs = $({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    eo,
    to,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = O();
    let o, r;
    const { focusReason: a } = xs();
    Ds((c) => {
      e.trapped && !i.paused && t("release-requested", c);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, s = (c) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { code: v, altKey: y, ctrlKey: g, metaKey: E, currentTarget: R, shiftKey: w } = c, { loop: b } = e, S = v === U.tab && !y && !g && !E, C = document.activeElement;
      if (S && C) {
        const k = R, [A, M] = Ms(k);
        if (A && M) {
          if (!w && C === M) {
            const B = yt({
              focusReason: a.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (c.preventDefault(), b && _e(A, !0));
          } else if (w && [A, k].includes(C)) {
            const B = yt({
              focusReason: a.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (c.preventDefault(), b && _e(M, !0));
          }
        } else if (C === k) {
          const B = yt({
            focusReason: a.value
          });
          t("focusout-prevented", B), B.defaultPrevented || c.preventDefault();
        }
      }
    };
    se(or, {
      focusTrapRef: n,
      onKeydown: s
    }), G(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), G([n], ([c], [v]) => {
      c && (c.addEventListener("keydown", s), c.addEventListener("focusin", f), c.addEventListener("focusout", d)), v && (v.removeEventListener("keydown", s), v.removeEventListener("focusin", f), v.removeEventListener("focusout", d));
    });
    const l = (c) => {
      t(eo, c);
    }, u = (c) => t(to, c), f = (c) => {
      const v = p(n);
      if (!v)
        return;
      const y = c.target, g = c.relatedTarget, E = y && v.contains(y);
      e.trapped || g && v.contains(g) || (o = g), E && t("focusin", c), !i.paused && e.trapped && (E ? r = y : _e(r, !0));
    }, d = (c) => {
      const v = p(n);
      if (!(i.paused || !v))
        if (e.trapped) {
          const y = c.relatedTarget;
          !pn(y) && !v.contains(y) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const g = yt({
                focusReason: a.value
              });
              t("focusout-prevented", g), g.defaultPrevented || _e(r, !0);
            }
          }, 0);
        } else {
          const y = c.target;
          y && v.contains(y) || t("focusout", c);
        }
    };
    async function m() {
      await lt();
      const c = p(n);
      if (c) {
        ro.push(i);
        const v = c.contains(document.activeElement) ? o : document.activeElement;
        if (o = v, !c.contains(v)) {
          const g = new Event(Gt, Xn);
          c.addEventListener(Gt, l), c.dispatchEvent(g), g.defaultPrevented || lt(() => {
            let E = e.focusStartEl;
            ua(E) || (_e(E), document.activeElement !== E && (E = "first")), E === "first" && Ls(rr(c), !0), (document.activeElement === v || E === "container") && _e(c);
          });
        }
      }
    }
    function h() {
      const c = p(n);
      if (c) {
        c.removeEventListener(Gt, l);
        const v = new CustomEvent(Wt, {
          ...Xn,
          detail: {
            focusReason: a.value
          }
        });
        c.addEventListener(Wt, u), c.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !Bs() || c.contains(document.activeElement)) && _e(o ?? document.body), c.removeEventListener(Wt, u), ro.remove(i);
      }
    }
    return be(() => {
      e.trapped && m(), G(() => e.trapped, (c) => {
        c ? m() : h();
      });
    }), he(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", s), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", d), n.value = void 0);
    }), {
      onKeydown: s
    };
  }
});
function zs(e, t, n, o, r, a) {
  return z(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Ks = /* @__PURE__ */ W(Hs, [["render", zs], ["__file", "focus-trap.vue"]]), re = "top", de = "bottom", pe = "right", ae = "left", En = "auto", dt = [re, de, pe, ae], Ve = "start", ut = "end", js = "clippingParents", ar = "viewport", Xe = "popper", Gs = "reference", io = dt.reduce(function(e, t) {
  return e.concat([t + "-" + Ve, t + "-" + ut]);
}, []), _n = [].concat(dt, [En]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ve, t + "-" + ut]);
}, []), Ws = "beforeRead", Vs = "read", Us = "afterRead", Ys = "beforeMain", qs = "main", Js = "afterMain", Zs = "beforeWrite", Qs = "write", Xs = "afterWrite", ei = [Ws, Vs, Us, Ys, qs, Js, Zs, Qs, Xs];
function me(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ue(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Be(e) {
  var t = ue(e).Element;
  return e instanceof t || e instanceof Element;
}
function fe(e) {
  var t = ue(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Sn(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ue(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ti(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !fe(a) || !me(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(i) {
      var s = r[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function ni(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !fe(r) || !me(r) || (Object.assign(r.style, s), Object.keys(a).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var sr = { name: "applyStyles", enabled: !0, phase: "write", fn: ti, effect: ni, requires: ["computeStyles"] };
function ge(e) {
  return e.split("-")[0];
}
var Le = Math.max, Nt = Math.min, Ue = Math.round;
function rn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ir() {
  return !/^((?!chrome|android).)*safari/i.test(rn());
}
function Ye(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  t && fe(e) && (r = e.offsetWidth > 0 && Ue(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ue(o.height) / e.offsetHeight || 1);
  var i = Be(e) ? ue(e) : window, s = i.visualViewport, l = !ir() && n, u = (o.left + (l && s ? s.offsetLeft : 0)) / r, f = (o.top + (l && s ? s.offsetTop : 0)) / a, d = o.width / r, m = o.height / a;
  return { width: d, height: m, top: f, right: u + d, bottom: f + m, left: u, x: u, y: f };
}
function Tn(e) {
  var t = Ye(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function lr(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Sn(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Te(e) {
  return ue(e).getComputedStyle(e);
}
function oi(e) {
  return ["table", "td", "th"].indexOf(me(e)) >= 0;
}
function Re(e) {
  return ((Be(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Dt(e) {
  return me(e) === "html" ? e : e.assignedSlot || e.parentNode || (Sn(e) ? e.host : null) || Re(e);
}
function lo(e) {
  return !fe(e) || Te(e).position === "fixed" ? null : e.offsetParent;
}
function ri(e) {
  var t = /firefox/i.test(rn()), n = /Trident/i.test(rn());
  if (n && fe(e)) {
    var o = Te(e);
    if (o.position === "fixed") return null;
  }
  var r = Dt(e);
  for (Sn(r) && (r = r.host); fe(r) && ["html", "body"].indexOf(me(r)) < 0; ) {
    var a = Te(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function pt(e) {
  for (var t = ue(e), n = lo(e); n && oi(n) && Te(n).position === "static"; ) n = lo(n);
  return n && (me(n) === "html" || me(n) === "body" && Te(n).position === "static") ? t : n || ri(e) || t;
}
function Cn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ot(e, t, n) {
  return Le(e, Nt(t, n));
}
function ai(e, t, n) {
  var o = ot(e, t, n);
  return o > n ? n : o;
}
function ur() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function cr(e) {
  return Object.assign({}, ur(), e);
}
function fr(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var si = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, cr(typeof e != "number" ? e : fr(e, dt));
};
function ii(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets, s = ge(n.placement), l = Cn(s), u = [ae, pe].indexOf(s) >= 0, f = u ? "height" : "width";
  if (!(!a || !i)) {
    var d = si(r.padding, n), m = Tn(a), h = l === "y" ? re : ae, c = l === "y" ? de : pe, v = n.rects.reference[f] + n.rects.reference[l] - i[l] - n.rects.popper[f], y = i[l] - n.rects.reference[l], g = pt(a), E = g ? l === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, R = v / 2 - y / 2, w = d[h], b = E - m[f] - d[c], S = E / 2 - m[f] / 2 + R, C = ot(w, S, b), k = l;
    n.modifiersData[o] = (t = {}, t[k] = C, t.centerOffset = C - S, t);
  }
}
function li(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || lr(t.elements.popper, r) && (t.elements.arrow = r));
}
var ui = { name: "arrow", enabled: !0, phase: "main", fn: ii, effect: li, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function qe(e) {
  return e.split("-")[1];
}
var ci = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function fi(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Ue(n * r) / r || 0, y: Ue(o * r) / r || 0 };
}
function uo(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, d = e.isFixed, m = i.x, h = m === void 0 ? 0 : m, c = i.y, v = c === void 0 ? 0 : c, y = typeof f == "function" ? f({ x: h, y: v }) : { x: h, y: v };
  h = y.x, v = y.y;
  var g = i.hasOwnProperty("x"), E = i.hasOwnProperty("y"), R = ae, w = re, b = window;
  if (u) {
    var S = pt(n), C = "clientHeight", k = "clientWidth";
    if (S === ue(n) && (S = Re(n), Te(S).position !== "static" && s === "absolute" && (C = "scrollHeight", k = "scrollWidth")), S = S, r === re || (r === ae || r === pe) && a === ut) {
      w = de;
      var A = d && S === b && b.visualViewport ? b.visualViewport.height : S[C];
      v -= A - o.height, v *= l ? 1 : -1;
    }
    if (r === ae || (r === re || r === de) && a === ut) {
      R = pe;
      var M = d && S === b && b.visualViewport ? b.visualViewport.width : S[k];
      h -= M - o.width, h *= l ? 1 : -1;
    }
  }
  var D = Object.assign({ position: s }, u && ci), B = f === !0 ? fi({ x: h, y: v }, ue(n)) : { x: h, y: v };
  if (h = B.x, v = B.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[w] = E ? "0" : "", H[R] = g ? "0" : "", H.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[w] = E ? v + "px" : "", t[R] = g ? h + "px" : "", t.transform = "", t));
}
function di(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, i = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = { placement: ge(t.placement), variation: qe(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, uo(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, uo(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var dr = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: di, data: {} }, wt = { passive: !0 };
function pi(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, s = i === void 0 ? !0 : i, l = ue(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, wt);
  }), s && l.addEventListener("resize", n.update, wt), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, wt);
    }), s && l.removeEventListener("resize", n.update, wt);
  };
}
var pr = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: pi, data: {} }, vi = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ot(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return vi[t];
  });
}
var hi = { start: "end", end: "start" };
function co(e) {
  return e.replace(/start|end/g, function(t) {
    return hi[t];
  });
}
function On(e) {
  var t = ue(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function In(e) {
  return Ye(Re(e)).left + On(e).scrollLeft;
}
function gi(e, t) {
  var n = ue(e), o = Re(e), r = n.visualViewport, a = o.clientWidth, i = o.clientHeight, s = 0, l = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = ir();
    (u || !u && t === "fixed") && (s = r.offsetLeft, l = r.offsetTop);
  }
  return { width: a, height: i, x: s + In(e), y: l };
}
function mi(e) {
  var t, n = Re(e), o = On(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = Le(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Le(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + In(e), l = -o.scrollTop;
  return Te(r || n).direction === "rtl" && (s += Le(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: i, x: s, y: l };
}
function kn(e) {
  var t = Te(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function vr(e) {
  return ["html", "body", "#document"].indexOf(me(e)) >= 0 ? e.ownerDocument.body : fe(e) && kn(e) ? e : vr(Dt(e));
}
function rt(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = vr(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ue(o), i = r ? [a].concat(a.visualViewport || [], kn(o) ? o : []) : o, s = t.concat(i);
  return r ? s : s.concat(rt(Dt(i)));
}
function an(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function bi(e, t) {
  var n = Ye(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function fo(e, t, n) {
  return t === ar ? an(gi(e, n)) : Be(t) ? bi(t, n) : an(mi(Re(e)));
}
function yi(e) {
  var t = rt(Dt(e)), n = ["absolute", "fixed"].indexOf(Te(e).position) >= 0, o = n && fe(e) ? pt(e) : e;
  return Be(o) ? t.filter(function(r) {
    return Be(r) && lr(r, o) && me(r) !== "body";
  }) : [];
}
function wi(e, t, n, o) {
  var r = t === "clippingParents" ? yi(e) : [].concat(t), a = [].concat(r, [n]), i = a[0], s = a.reduce(function(l, u) {
    var f = fo(e, u, o);
    return l.top = Le(f.top, l.top), l.right = Nt(f.right, l.right), l.bottom = Nt(f.bottom, l.bottom), l.left = Le(f.left, l.left), l;
  }, fo(e, i, o));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function hr(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? ge(o) : null, a = o ? qe(o) : null, i = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case re:
      l = { x: i, y: t.y - n.height };
      break;
    case de:
      l = { x: i, y: t.y + t.height };
      break;
    case pe:
      l = { x: t.x + t.width, y: s };
      break;
    case ae:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? Cn(r) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case Ve:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case ut:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function ct(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.strategy, i = a === void 0 ? e.strategy : a, s = n.boundary, l = s === void 0 ? js : s, u = n.rootBoundary, f = u === void 0 ? ar : u, d = n.elementContext, m = d === void 0 ? Xe : d, h = n.altBoundary, c = h === void 0 ? !1 : h, v = n.padding, y = v === void 0 ? 0 : v, g = cr(typeof y != "number" ? y : fr(y, dt)), E = m === Xe ? Gs : Xe, R = e.rects.popper, w = e.elements[c ? E : m], b = wi(Be(w) ? w : w.contextElement || Re(e.elements.popper), l, f, i), S = Ye(e.elements.reference), C = hr({ reference: S, element: R, placement: r }), k = an(Object.assign({}, R, C)), A = m === Xe ? k : S, M = { top: b.top - A.top + g.top, bottom: A.bottom - b.bottom + g.bottom, left: b.left - A.left + g.left, right: A.right - b.right + g.right }, D = e.modifiersData.offset;
  if (m === Xe && D) {
    var B = D[r];
    Object.keys(M).forEach(function(H) {
      var ie = [pe, de].indexOf(H) >= 0 ? 1 : -1, Y = [re, de].indexOf(H) >= 0 ? "y" : "x";
      M[H] += B[Y] * ie;
    });
  }
  return M;
}
function Ei(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, i = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? _n : l, f = qe(o), d = f ? s ? io : io.filter(function(c) {
    return qe(c) === f;
  }) : dt, m = d.filter(function(c) {
    return u.indexOf(c) >= 0;
  });
  m.length === 0 && (m = d);
  var h = m.reduce(function(c, v) {
    return c[v] = ct(e, { placement: v, boundary: r, rootBoundary: a, padding: i })[ge(v)], c;
  }, {});
  return Object.keys(h).sort(function(c, v) {
    return h[c] - h[v];
  });
}
function _i(e) {
  if (ge(e) === En) return [];
  var t = Ot(e);
  return [co(e), t, co(t)];
}
function Si(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, i = n.altAxis, s = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, f = n.boundary, d = n.rootBoundary, m = n.altBoundary, h = n.flipVariations, c = h === void 0 ? !0 : h, v = n.allowedAutoPlacements, y = t.options.placement, g = ge(y), E = g === y, R = l || (E || !c ? [Ot(y)] : _i(y)), w = [y].concat(R).reduce(function(Ae, we) {
      return Ae.concat(ge(we) === En ? Ei(t, { placement: we, boundary: f, rootBoundary: d, padding: u, flipVariations: c, allowedAutoPlacements: v }) : we);
    }, []), b = t.rects.reference, S = t.rects.popper, C = /* @__PURE__ */ new Map(), k = !0, A = w[0], M = 0; M < w.length; M++) {
      var D = w[M], B = ge(D), H = qe(D) === Ve, ie = [re, de].indexOf(B) >= 0, Y = ie ? "width" : "height", I = ct(t, { placement: D, boundary: f, rootBoundary: d, altBoundary: m, padding: u }), _ = ie ? H ? pe : ae : H ? de : re;
      b[Y] > S[Y] && (_ = Ot(_));
      var K = Ot(_), X = [];
      if (a && X.push(I[B] <= 0), s && X.push(I[_] <= 0, I[K] <= 0), X.every(function(Ae) {
        return Ae;
      })) {
        A = D, k = !1;
        break;
      }
      C.set(D, X);
    }
    if (k) for (var ye = c ? 3 : 1, xe = function(Ae) {
      var we = w.find(function(ht) {
        var Qe = C.get(ht);
        if (Qe) return Qe.slice(0, Ae).every(function(De) {
          return De;
        });
      });
      if (we) return A = we, "break";
    }, Ze = ye; Ze > 0; Ze--) {
      var vt = xe(Ze);
      if (vt === "break") break;
    }
    t.placement !== A && (t.modifiersData[o]._skip = !0, t.placement = A, t.reset = !0);
  }
}
var Ti = { name: "flip", enabled: !0, phase: "main", fn: Si, requiresIfExists: ["offset"], data: { _skip: !1 } };
function po(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function vo(e) {
  return [re, pe, de, ae].some(function(t) {
    return e[t] >= 0;
  });
}
function Ci(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, i = ct(t, { elementContext: "reference" }), s = ct(t, { altBoundary: !0 }), l = po(i, o), u = po(s, r, a), f = vo(l), d = vo(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": d });
}
var Oi = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Ci };
function Ii(e, t, n) {
  var o = ge(e), r = [ae, re].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * r, [ae, pe].indexOf(o) >= 0 ? { x: s, y: i } : { x: i, y: s };
}
function ki(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, i = _n.reduce(function(f, d) {
    return f[d] = Ii(d, t.rects, a), f;
  }, {}), s = i[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = i;
}
var Ri = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ki };
function Ai(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = hr({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var gr = { name: "popperOffsets", enabled: !0, phase: "read", fn: Ai, data: {} };
function Pi(e) {
  return e === "x" ? "y" : "x";
}
function Fi(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, i = n.altAxis, s = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, d = n.padding, m = n.tether, h = m === void 0 ? !0 : m, c = n.tetherOffset, v = c === void 0 ? 0 : c, y = ct(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: f }), g = ge(t.placement), E = qe(t.placement), R = !E, w = Cn(g), b = Pi(w), S = t.modifiersData.popperOffsets, C = t.rects.reference, k = t.rects.popper, A = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, M = typeof A == "number" ? { mainAxis: A, altAxis: A } : Object.assign({ mainAxis: 0, altAxis: 0 }, A), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var H, ie = w === "y" ? re : ae, Y = w === "y" ? de : pe, I = w === "y" ? "height" : "width", _ = S[w], K = _ + y[ie], X = _ - y[Y], ye = h ? -k[I] / 2 : 0, xe = E === Ve ? C[I] : k[I], Ze = E === Ve ? -k[I] : -C[I], vt = t.elements.arrow, Ae = h && vt ? Tn(vt) : { width: 0, height: 0 }, we = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ur(), ht = we[ie], Qe = we[Y], De = ot(0, C[I], Ae[I]), Nr = R ? C[I] / 2 - ye - De - ht - M.mainAxis : xe - De - ht - M.mainAxis, Lr = R ? -C[I] / 2 + ye + De + Qe + M.mainAxis : Ze + De + Qe + M.mainAxis, zt = t.elements.arrow && pt(t.elements.arrow), Br = zt ? w === "y" ? zt.clientTop || 0 : zt.clientLeft || 0 : 0, Nn = (H = D?.[w]) != null ? H : 0, xr = _ + Nr - Nn - Br, Dr = _ + Lr - Nn, Ln = ot(h ? Nt(K, xr) : K, _, h ? Le(X, Dr) : X);
      S[w] = Ln, B[w] = Ln - _;
    }
    if (s) {
      var Bn, Hr = w === "x" ? re : ae, zr = w === "x" ? de : pe, Pe = S[b], gt = b === "y" ? "height" : "width", xn = Pe + y[Hr], Dn = Pe - y[zr], Kt = [re, ae].indexOf(g) !== -1, Hn = (Bn = D?.[b]) != null ? Bn : 0, zn = Kt ? xn : Pe - C[gt] - k[gt] - Hn + M.altAxis, Kn = Kt ? Pe + C[gt] + k[gt] - Hn - M.altAxis : Dn, jn = h && Kt ? ai(zn, Pe, Kn) : ot(h ? zn : xn, Pe, h ? Kn : Dn);
      S[b] = jn, B[b] = jn - Pe;
    }
    t.modifiersData[o] = B;
  }
}
var Mi = { name: "preventOverflow", enabled: !0, phase: "main", fn: Fi, requiresIfExists: ["offset"] };
function $i(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Ni(e) {
  return e === ue(e) || !fe(e) ? On(e) : $i(e);
}
function Li(e) {
  var t = e.getBoundingClientRect(), n = Ue(t.width) / e.offsetWidth || 1, o = Ue(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Bi(e, t, n) {
  n === void 0 && (n = !1);
  var o = fe(t), r = fe(t) && Li(t), a = Re(t), i = Ye(e, r, n), s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((me(t) !== "body" || kn(a)) && (s = Ni(t)), fe(t) ? (l = Ye(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = In(a))), { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
function xi(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && r(l);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function Di(e) {
  var t = xi(e);
  return ei.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Hi(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function zi(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ho = { placement: "bottom", modifiers: [], strategy: "absolute" };
function go() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Rn(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? ho : r;
  return function(i, s, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ho, a), modifiersData: {}, elements: { reference: i, popper: s }, attributes: {}, styles: {} }, f = [], d = !1, m = { state: u, setOptions: function(v) {
      var y = typeof v == "function" ? v(u.options) : v;
      c(), u.options = Object.assign({}, a, u.options, y), u.scrollParents = { reference: Be(i) ? rt(i) : i.contextElement ? rt(i.contextElement) : [], popper: rt(s) };
      var g = Di(zi([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = g.filter(function(E) {
        return E.enabled;
      }), h(), m.update();
    }, forceUpdate: function() {
      if (!d) {
        var v = u.elements, y = v.reference, g = v.popper;
        if (go(y, g)) {
          u.rects = { reference: Bi(y, pt(g), u.options.strategy === "fixed"), popper: Tn(g) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(k) {
            return u.modifiersData[k.name] = Object.assign({}, k.data);
          });
          for (var E = 0; E < u.orderedModifiers.length; E++) {
            if (u.reset === !0) {
              u.reset = !1, E = -1;
              continue;
            }
            var R = u.orderedModifiers[E], w = R.fn, b = R.options, S = b === void 0 ? {} : b, C = R.name;
            typeof w == "function" && (u = w({ state: u, options: S, name: C, instance: m }) || u);
          }
        }
      }
    }, update: Hi(function() {
      return new Promise(function(v) {
        m.forceUpdate(), v(u);
      });
    }), destroy: function() {
      c(), d = !0;
    } };
    if (!go(i, s)) return m;
    m.setOptions(l).then(function(v) {
      !d && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function h() {
      u.orderedModifiers.forEach(function(v) {
        var y = v.name, g = v.options, E = g === void 0 ? {} : g, R = v.effect;
        if (typeof R == "function") {
          var w = R({ state: u, name: y, instance: m, options: E }), b = function() {
          };
          f.push(w || b);
        }
      });
    }
    function c() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return m;
  };
}
Rn();
var Ki = [pr, gr, dr, sr];
Rn({ defaultModifiers: Ki });
var ji = [pr, gr, dr, sr, Ri, Ti, Mi, ui, Oi], Gi = Rn({ defaultModifiers: ji });
const Wi = ["fixed", "absolute"], Vi = q({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: F(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: _n,
    default: "bottom"
  },
  popperOptions: {
    type: F(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Wi,
    default: "absolute"
  }
}), mr = q({
  ...Vi,
  id: String,
  style: {
    type: F([String, Array, Object])
  },
  className: {
    type: F([String, Array, Object])
  },
  effect: {
    type: F(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: F([String, Array, Object])
  },
  popperStyle: {
    type: F([String, Array, Object])
  },
  referenceEl: {
    type: F(Object)
  },
  triggerTargetEl: {
    type: F(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...vn(["ariaLabel"])
}), Ui = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Yi = (e, t) => {
  const n = O(!1), o = O();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, qi = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Zi(e), ...t]
  };
  return Qi(a, r?.modifiers), a;
}, Ji = (e) => {
  if (Se)
    return Fo(e);
};
function Zi(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function Qi(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Xi = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = el(l);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, r = T(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: d } = p(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...d || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = ca(), i = O({
    styles: {
      popper: {
        position: p(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return G(r, (l) => {
    const u = p(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), G([e, t], ([l, u]) => {
    s(), !(!l || !u) && (a.value = Gi(l, u, p(r)));
  }), he(() => {
    s();
  }), {
    state: T(() => {
      var l;
      return { ...((l = p(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: T(() => p(i).styles),
    attributes: T(() => p(i).attributes),
    update: () => {
      var l;
      return (l = p(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = p(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: T(() => p(a))
  };
};
function el(e) {
  const t = Object.keys(e.elements), n = Vn(t.map((r) => [r, e.styles[r] || {}])), o = Vn(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const tl = 0, nl = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = L(bn, void 0), a = O(), i = O(), s = T(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = T(() => {
    var g;
    const E = p(a), R = (g = p(i)) != null ? g : tl;
    return {
      name: "arrow",
      enabled: !Za(E),
      options: {
        element: E,
        padding: R
      }
    };
  }), u = T(() => ({
    onFirstUpdate: () => {
      c();
    },
    ...qi(e, [
      p(l),
      p(s)
    ])
  })), f = T(() => Ji(e.referenceEl) || p(o)), { attributes: d, state: m, styles: h, update: c, forceUpdate: v, instanceRef: y } = Xi(f, n, u);
  return G(y, (g) => t.value = g), be(() => {
    G(() => {
      var g;
      return (g = p(f)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      c();
    });
  }), {
    attributes: d,
    arrowRef: a,
    contentRef: n,
    instanceRef: y,
    state: m,
    styles: h,
    role: r,
    forceUpdate: v,
    update: c
  };
}, ol = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Jr(), a = ce("popper"), i = T(() => p(t).popper), s = O(Oe(e.zIndex) ? e.zIndex : r()), l = T(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = T(() => [
    { zIndex: p(s) },
    p(n).popper,
    e.popperStyle || {}
  ]), f = T(() => o.value === "dialog" ? "false" : void 0), d = T(() => p(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: d,
    contentAttrs: i,
    contentClass: l,
    contentStyle: u,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = Oe(e.zIndex) ? e.zIndex : r();
    }
  };
}, rl = $({
  name: "ElPopperContent"
}), al = /* @__PURE__ */ $({
  ...rl,
  props: mr,
  emits: Ui,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: s,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = Yi(o, n), { attributes: d, arrowRef: m, contentRef: h, styles: c, instanceRef: v, role: y, update: g } = nl(o), {
      ariaModal: E,
      arrowStyle: R,
      contentAttrs: w,
      contentClass: b,
      contentStyle: S,
      updateZIndex: C
    } = ol(o, {
      styles: c,
      attributes: d,
      role: y
    }), k = L($t, void 0), A = O();
    se(qo, {
      arrowStyle: R,
      arrowRef: m,
      arrowOffset: A
    }), k && se($t, {
      ...k,
      addInputId: Xt,
      removeInputId: Xt
    });
    let M;
    const D = (H = !0) => {
      g(), H && C();
    }, B = () => {
      D(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return be(() => {
      G(() => o.triggerTargetEl, (H, ie) => {
        M?.(), M = void 0;
        const Y = p(H || h.value), I = p(ie || h.value);
        Ne(Y) && (M = G([y, () => o.ariaLabel, E, () => o.id], (_) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((K, X) => {
            pn(_[X]) ? Y.removeAttribute(K) : Y.setAttribute(K, _[X]);
          });
        }, { immediate: !0 })), I !== Y && Ne(I) && ["role", "aria-label", "aria-modal", "id"].forEach((_) => {
          I.removeAttribute(_);
        });
      }, { immediate: !0 }), G(() => o.visible, B, { immediate: !0 });
    }), he(() => {
      M?.(), M = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: v,
      updatePopper: D,
      contentStyle: S
    }), (H, ie) => (P(), Z("div", ke({
      ref_key: "contentRef",
      ref: h
    }, p(w), {
      style: p(S),
      class: p(b),
      tabindex: "-1",
      onMouseenter: (Y) => H.$emit("mouseenter", Y),
      onMouseleave: (Y) => H.$emit("mouseleave", Y)
    }), [
      x(p(Ks), {
        trapped: p(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": p(h),
        "focus-start-el": p(r),
        onFocusAfterTrapped: p(s),
        onFocusAfterReleased: p(i),
        onFocusin: p(l),
        onFocusoutPrevented: p(u),
        onReleaseRequested: p(f)
      }, {
        default: N(() => [
          z(H.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var sl = /* @__PURE__ */ W(al, [["__file", "content.vue"]]);
const il = Je(Es), An = Symbol("elTooltip");
function mo() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Zr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const ll = q({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), ul = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: a } = mo(), {
    registerTimeout: i,
    cancelTimeout: s
  } = mo();
  return {
    onOpen: (f) => {
      a(() => {
        o(f);
        const d = p(n);
        Oe(d) && d > 0 && i(() => {
          r(f);
        }, d);
      }, p(e));
    },
    onClose: (f) => {
      s(), a(() => {
        r(f);
      }, p(t));
    }
  };
}, Lt = q({
  ...ll,
  ...mr,
  appendTo: {
    type: F([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: F(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...vn(["ariaLabel"])
}), Pn = q({
  ...Xo,
  disabled: Boolean,
  trigger: {
    type: F([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: F(Array),
    default: () => [U.enter, U.numpadEnter, U.space]
  }
}), cl = Mo({
  type: F(Boolean),
  default: null
}), fl = Mo({
  type: F(Function)
}), dl = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: cl,
    [n]: fl
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: s,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: d
    }) => {
      const m = ft(), { emit: h } = m, c = m.props, v = T(() => et(c[n])), y = T(() => c[e] === null), g = (C) => {
        i.value !== !0 && (i.value = !0, s && (s.value = C), et(f) && f(C));
      }, E = (C) => {
        i.value !== !1 && (i.value = !1, s && (s.value = C), et(d) && d(C));
      }, R = (C) => {
        if (c.disabled === !0 || et(u) && !u())
          return;
        const k = v.value && Se;
        k && h(t, !0), (y.value || !k) && g(C);
      }, w = (C) => {
        if (c.disabled === !0 || !Se)
          return;
        const k = v.value && Se;
        k && h(t, !1), (y.value || !k) && E(C);
      }, b = (C) => {
        $o(C) && (c.disabled && C ? v.value && h(t, !1) : i.value !== C && (C ? g() : E()));
      }, S = () => {
        i.value ? w() : R();
      };
      return G(() => c[e], b), l && m.appContext.config.globalProperties.$route !== void 0 && G(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && i.value && w();
      }), be(() => {
        b(c[e]);
      }), {
        hide: w,
        show: R,
        toggle: S,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: pl,
  useModelToggleEmits: vl,
  useModelToggle: hl
} = dl("visible"), gl = q({
  ...Zo,
  ...pl,
  ...Lt,
  ...Pn,
  ...Qo,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), ml = [
  ...vl,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], bl = (e, t) => fa(e) ? e.includes(t) : e === t, ze = (e, t, n) => (o) => {
  bl(p(e), t) && n(o);
}, V = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e?.(r);
  if (n === !1 || !a)
    return t?.(r);
}, bo = (e) => (t) => t.pointerType === "mouse" ? e(t) : void 0, yl = $({
  name: "ElTooltipTrigger"
}), wl = /* @__PURE__ */ $({
  ...yl,
  props: Pn,
  setup(e, { expose: t }) {
    const n = e, o = ce("tooltip"), { controlled: r, id: a, open: i, onOpen: s, onClose: l, onToggle: u } = L(An, void 0), f = O(null), d = () => {
      if (p(r) || n.disabled)
        return !0;
    }, m = ne(n, "trigger"), h = V(d, ze(m, "hover", s)), c = V(d, ze(m, "hover", l)), v = V(d, ze(m, "click", (w) => {
      w.button === 0 && u(w);
    })), y = V(d, ze(m, "focus", s)), g = V(d, ze(m, "focus", l)), E = V(d, ze(m, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), R = V(d, (w) => {
      const { code: b } = w;
      n.triggerKeys.includes(b) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: f
    }), (w, b) => (P(), j(p(Rs), {
      id: p(a),
      "virtual-ref": w.virtualRef,
      open: p(i),
      "virtual-triggering": w.virtualTriggering,
      class: te(p(o).e("trigger")),
      onBlur: p(g),
      onClick: p(v),
      onContextmenu: p(E),
      onFocus: p(y),
      onMouseenter: p(h),
      onMouseleave: p(c),
      onKeydown: p(R)
    }, {
      default: N(() => [
        z(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var El = /* @__PURE__ */ W(wl, [["__file", "trigger.vue"]]);
const _l = q({
  to: {
    type: F([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Sl = /* @__PURE__ */ $({
  __name: "teleport",
  props: _l,
  setup(e) {
    return (t, n) => t.disabled ? z(t.$slots, "default", { key: 0 }) : (P(), j(da, {
      key: 1,
      to: t.to
    }, [
      z(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Tl = /* @__PURE__ */ W(Sl, [["__file", "teleport.vue"]]);
const Cl = Je(Tl), br = () => {
  const e = Po(), t = Wo(), n = T(() => `${e.value}-popper-container-${t.prefix}`), o = T(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Ol = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Il = () => {
  const { id: e, selector: t } = br();
  return pa(() => {
    Se && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && Ol(e.value);
  }), {
    id: e,
    selector: t
  };
}, kl = $({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Rl = /* @__PURE__ */ $({
  ...kl,
  props: Lt,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = br(), r = ce("tooltip"), a = O();
    let i;
    const {
      controlled: s,
      id: l,
      open: u,
      trigger: f,
      onClose: d,
      onOpen: m,
      onShow: h,
      onHide: c,
      onBeforeShow: v,
      onBeforeHide: y
    } = L(An, void 0), g = T(() => n.transition || `${r.namespace.value}-fade-in-linear`), E = T(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    he(() => {
      i?.();
    });
    const R = T(() => p(E) ? !0 : p(u)), w = T(() => n.disabled ? !1 : p(u)), b = T(() => n.appendTo || o.value), S = T(() => {
      var _;
      return (_ = n.style) != null ? _ : {};
    }), C = O(!0), k = () => {
      c(), I() && _e(document.body), C.value = !0;
    }, A = () => {
      if (p(s))
        return !0;
    }, M = V(A, () => {
      n.enterable && p(f) === "hover" && m();
    }), D = V(A, () => {
      p(f) === "hover" && d();
    }), B = () => {
      var _, K;
      (K = (_ = a.value) == null ? void 0 : _.updatePopper) == null || K.call(_), v?.();
    }, H = () => {
      y?.();
    }, ie = () => {
      h(), i = Qr(T(() => {
        var _;
        return (_ = a.value) == null ? void 0 : _.popperContentRef;
      }), () => {
        if (p(s))
          return;
        p(f) !== "hover" && d();
      });
    }, Y = () => {
      n.virtualTriggering || d();
    }, I = (_) => {
      var K;
      const X = (K = a.value) == null ? void 0 : K.popperContentRef, ye = _?.relatedTarget || document.activeElement;
      return X?.contains(ye);
    };
    return G(() => p(u), (_) => {
      _ ? C.value = !1 : i?.();
    }, {
      flush: "post"
    }), G(() => n.content, () => {
      var _, K;
      (K = (_ = a.value) == null ? void 0 : _.updatePopper) == null || K.call(_);
    }), t({
      contentRef: a,
      isFocusInsideContent: I
    }), (_, K) => (P(), j(p(Cl), {
      disabled: !_.teleported,
      to: p(b)
    }, {
      default: N(() => [
        x(Bo, {
          name: p(g),
          onAfterLeave: k,
          onBeforeEnter: B,
          onAfterEnter: ie,
          onBeforeLeave: H
        }, {
          default: N(() => [
            p(R) ? dn((P(), j(p(sl), ke({
              key: 0,
              id: p(l),
              ref_key: "contentRef",
              ref: a
            }, _.$attrs, {
              "aria-label": _.ariaLabel,
              "aria-hidden": C.value,
              "boundaries-padding": _.boundariesPadding,
              "fallback-placements": _.fallbackPlacements,
              "gpu-acceleration": _.gpuAcceleration,
              offset: _.offset,
              placement: _.placement,
              "popper-options": _.popperOptions,
              strategy: _.strategy,
              effect: _.effect,
              enterable: _.enterable,
              pure: _.pure,
              "popper-class": _.popperClass,
              "popper-style": [_.popperStyle, p(S)],
              "reference-el": _.referenceEl,
              "trigger-target-el": _.triggerTargetEl,
              visible: p(w),
              "z-index": _.zIndex,
              onMouseenter: p(M),
              onMouseleave: p(D),
              onBlur: Y,
              onClose: p(d)
            }), {
              default: N(() => [
                z(_.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Lo, p(w)]
            ]) : oe("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Al = /* @__PURE__ */ W(Rl, [["__file", "content.vue"]]);
const Pl = $({
  name: "ElTooltip"
}), Fl = /* @__PURE__ */ $({
  ...Pl,
  props: gl,
  emits: ml,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Il();
    const r = gn(), a = O(), i = O(), s = () => {
      var g;
      const E = p(a);
      E && ((g = E.popperInstanceRef) == null || g.update());
    }, l = O(!1), u = O(), { show: f, hide: d, hasUpdateHandler: m } = hl({
      indicator: l,
      toggleReason: u
    }), { onOpen: h, onClose: c } = ul({
      showAfter: ne(o, "showAfter"),
      hideAfter: ne(o, "hideAfter"),
      autoClose: ne(o, "autoClose"),
      open: f,
      close: d
    }), v = T(() => $o(o.visible) && !m.value);
    se(An, {
      controlled: v,
      id: r,
      open: zo(l),
      trigger: ne(o, "trigger"),
      onOpen: (g) => {
        h(g);
      },
      onClose: (g) => {
        c(g);
      },
      onToggle: (g) => {
        p(l) ? c(g) : h(g);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: s
    }), G(() => o.disabled, (g) => {
      g && l.value && (l.value = !1);
    });
    const y = (g) => {
      var E;
      return (E = i.value) == null ? void 0 : E.isFocusInsideContent(g);
    };
    return va(() => l.value && d()), t({
      popperRef: a,
      contentRef: i,
      isFocusInsideContent: y,
      updatePopper: s,
      onOpen: h,
      onClose: c,
      hide: d
    }), (g, E) => (P(), j(p(il), {
      ref_key: "popperRef",
      ref: a,
      role: g.role
    }, {
      default: N(() => [
        x(El, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: N(() => [
            g.$slots.default ? z(g.$slots, "default", { key: 0 }) : oe("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        x(Al, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": g.ariaLabel,
          "boundaries-padding": g.boundariesPadding,
          content: g.content,
          disabled: g.disabled,
          effect: g.effect,
          enterable: g.enterable,
          "fallback-placements": g.fallbackPlacements,
          "hide-after": g.hideAfter,
          "gpu-acceleration": g.gpuAcceleration,
          offset: g.offset,
          persistent: g.persistent,
          "popper-class": g.popperClass,
          "popper-style": g.popperStyle,
          placement: g.placement,
          "popper-options": g.popperOptions,
          pure: g.pure,
          "raw-content": g.rawContent,
          "reference-el": g.referenceEl,
          "trigger-target-el": g.triggerTargetEl,
          "show-after": g.showAfter,
          strategy: g.strategy,
          teleported: g.teleported,
          transition: g.transition,
          "virtual-triggering": g.virtualTriggering,
          "z-index": g.zIndex,
          "append-to": g.appendTo
        }, {
          default: N(() => [
            z(g.$slots, "content", {}, () => [
              g.rawContent ? (P(), Z("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, ["innerHTML"])) : (P(), Z("span", { key: 1 }, tt(g.content), 1))
            ]),
            g.showArrow ? (P(), j(p(Ts), {
              key: 0,
              "arrow-offset": g.arrowOffset
            }, null, 8, ["arrow-offset"])) : oe("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Ml = /* @__PURE__ */ W(Fl, [["__file", "tooltip.vue"]]);
const $l = Je(Ml), yr = Symbol("buttonGroupContextKey"), Nl = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: a = "API" }, i) => {
  G(() => p(i), (s) => {
    s && We(n, `[${a}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, Ll = (e, t) => {
  Nl({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, T(() => e.type === "text"));
  const n = L(yr, void 0), o = Xr("button"), { form: r } = rs(), a = Uo(T(() => n?.size)), i = Yo(), s = O(), l = ha(), u = T(() => e.type || n?.type || ""), f = T(() => {
    var c, v, y;
    return (y = (v = e.autoInsertSpace) != null ? v : (c = o.value) == null ? void 0 : c.autoInsertSpace) != null ? y : !1;
  }), d = T(() => e.tag === "button" ? {
    ariaDisabled: i.value || e.loading,
    disabled: i.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), m = T(() => {
    var c;
    const v = (c = l.default) == null ? void 0 : c.call(l);
    if (f.value && v?.length === 1) {
      const y = v[0];
      if (y?.type === Ho) {
        const g = y.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(g.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: a,
    _type: u,
    _ref: s,
    _props: d,
    shouldAddSpace: m,
    handleClick: (c) => {
      if (i.value || e.loading) {
        c.stopPropagation();
        return;
      }
      e.nativeType === "reset" && r?.resetFields(), t("click", c);
    }
  };
}, Bl = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], xl = ["button", "submit", "reset"], sn = q({
  size: ta,
  disabled: Boolean,
  type: {
    type: String,
    values: Bl,
    default: ""
  },
  icon: {
    type: Zt
  },
  nativeType: {
    type: String,
    values: xl,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Zt,
    default: () => ea
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: F([String, Object]),
    default: "button"
  }
}), Dl = {
  click: (e) => e instanceof MouseEvent
};
function Q(e, t) {
  Hl(e) && (e = "100%");
  var n = zl(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Et(e) {
  return Math.min(1, Math.max(0, e));
}
function Hl(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function zl(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function wr(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function _t(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Fe(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Kl(e, t, n) {
  return {
    r: Q(e, 255) * 255,
    g: Q(t, 255) * 255,
    b: Q(n, 255) * 255
  };
}
function yo(e, t, n) {
  e = Q(e, 255), t = Q(t, 255), n = Q(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, i = 0, s = (o + r) / 2;
  if (o === r)
    i = 0, a = 0;
  else {
    var l = o - r;
    switch (i = s > 0.5 ? l / (2 - o - r) : l / (o + r), o) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l: s };
}
function Vt(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function jl(e, t, n) {
  var o, r, a;
  if (e = Q(e, 360), t = Q(t, 100), n = Q(n, 100), t === 0)
    r = n, a = n, o = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - i;
    o = Vt(s, i, e + 1 / 3), r = Vt(s, i, e), a = Vt(s, i, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: a * 255 };
}
function wo(e, t, n) {
  e = Q(e, 255), t = Q(t, 255), n = Q(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, i = o, s = o - r, l = o === 0 ? 0 : s / o;
  if (o === r)
    a = 0;
  else {
    switch (o) {
      case e:
        a = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / s + 2;
        break;
      case n:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: l, v: i };
}
function Gl(e, t, n) {
  e = Q(e, 360) * 6, t = Q(t, 100), n = Q(n, 100);
  var o = Math.floor(e), r = e - o, a = n * (1 - t), i = n * (1 - r * t), s = n * (1 - (1 - r) * t), l = o % 6, u = [n, i, a, a, s, n][l], f = [s, n, n, i, a, a][l], d = [a, a, s, n, n, i][l];
  return { r: u * 255, g: f * 255, b: d * 255 };
}
function Eo(e, t, n, o) {
  var r = [
    Fe(Math.round(e).toString(16)),
    Fe(Math.round(t).toString(16)),
    Fe(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function Wl(e, t, n, o, r) {
  var a = [
    Fe(Math.round(e).toString(16)),
    Fe(Math.round(t).toString(16)),
    Fe(Math.round(n).toString(16)),
    Fe(Vl(o))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Vl(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function _o(e) {
  return le(e) / 255;
}
function le(e) {
  return parseInt(e, 16);
}
function Ul(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var ln = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Yl(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, a = null, i = !1, s = !1;
  return typeof e == "string" && (e = Zl(e)), typeof e == "object" && (Ee(e.r) && Ee(e.g) && Ee(e.b) ? (t = Kl(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ee(e.h) && Ee(e.s) && Ee(e.v) ? (o = _t(e.s), r = _t(e.v), t = Gl(e.h, o, r), i = !0, s = "hsv") : Ee(e.h) && Ee(e.s) && Ee(e.l) && (o = _t(e.s), a = _t(e.l), t = jl(e.h, o, a), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = wr(n), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var ql = "[-\\+]?\\d+%?", Jl = "[-\\+]?\\d*\\.\\d+%?", Ie = "(?:".concat(Jl, ")|(?:").concat(ql, ")"), Ut = "[\\s|\\(]+(".concat(Ie, ")[,|\\s]+(").concat(Ie, ")[,|\\s]+(").concat(Ie, ")\\s*\\)?"), Yt = "[\\s|\\(]+(".concat(Ie, ")[,|\\s]+(").concat(Ie, ")[,|\\s]+(").concat(Ie, ")[,|\\s]+(").concat(Ie, ")\\s*\\)?"), ve = {
  CSS_UNIT: new RegExp(Ie),
  rgb: new RegExp("rgb" + Ut),
  rgba: new RegExp("rgba" + Yt),
  hsl: new RegExp("hsl" + Ut),
  hsla: new RegExp("hsla" + Yt),
  hsv: new RegExp("hsv" + Ut),
  hsva: new RegExp("hsva" + Yt),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Zl(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (ln[e])
    e = ln[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = ve.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = ve.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = ve.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = ve.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = ve.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = ve.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = ve.hex8.exec(e), n ? {
    r: le(n[1]),
    g: le(n[2]),
    b: le(n[3]),
    a: _o(n[4]),
    format: t ? "name" : "hex8"
  } : (n = ve.hex6.exec(e), n ? {
    r: le(n[1]),
    g: le(n[2]),
    b: le(n[3]),
    format: t ? "name" : "hex"
  } : (n = ve.hex4.exec(e), n ? {
    r: le(n[1] + n[1]),
    g: le(n[2] + n[2]),
    b: le(n[3] + n[3]),
    a: _o(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = ve.hex3.exec(e), n ? {
    r: le(n[1] + n[1]),
    g: le(n[2] + n[2]),
    b: le(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Ee(e) {
  return !!ve.CSS_UNIT.exec(String(e));
}
var Ql = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Ul(t)), this.originalInput = t;
      var r = Yl(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, a = t.r / 255, i = t.g / 255, s = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? o = i / 12.92 : o = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? r = s / 12.92 : r = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = wr(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = wo(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = wo(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = yo(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = yo(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Eo(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Wl(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Q(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Q(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Eo(this.r, this.g, this.b, !1), n = 0, o = Object.entries(ln); n < o.length; n++) {
        var r = o[n], a = r[0], i = r[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, a = !n && r && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Et(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Et(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Et(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Et(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), a = n / 100, i = {
        r: (r.r - o.r) * a + o.r,
        g: (r.g - o.g) * a + o.g,
        b: (r.b - o.b) * a + o.b,
        a: (r.a - o.a) * a + o.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, a = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, a.push(new e(o));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, a = n.v, i = [], s = 1 / t; t--; )
        i.push(new e({ h: o, s: r, v: a })), a = (a + s) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], a = 360 / t, i = 1; i < t; i++)
        r.push(new e({ h: (o + i * a) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function Ce(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Xl(e) {
  const t = Yo(), n = ce("button");
  return T(() => {
    let o = {}, r = e.color;
    if (r) {
      const a = r.match(/var\((.*?)\)/);
      a && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(a[1]));
      const i = new Ql(r), s = e.dark ? i.tint(20).toString() : Ce(i, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? Ce(i, 90) : i.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? Ce(i, 50) : i.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Ce(i, 90) : i.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? Ce(i, 50) : i.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? Ce(i, 80) : i.tint(80).toString());
      else {
        const l = e.dark ? Ce(i, 30) : i.tint(30).toString(), u = i.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": u,
          "border-color": r,
          "hover-bg-color": l,
          "hover-text-color": u,
          "hover-border-color": l,
          "active-bg-color": s,
          "active-border-color": s
        }), t.value) {
          const f = e.dark ? Ce(i, 50) : i.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = f, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = f;
        }
      }
    }
    return o;
  });
}
const eu = $({
  name: "ElButton"
}), tu = /* @__PURE__ */ $({
  ...eu,
  props: sn,
  emits: Dl,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Xl(o), a = ce("button"), { _ref: i, _size: s, _type: l, _disabled: u, _props: f, shouldAddSpace: d, handleClick: m } = Ll(o, n), h = T(() => [
      a.b(),
      a.m(l.value),
      a.m(s.value),
      a.is("disabled", u.value),
      a.is("loading", o.loading),
      a.is("plain", o.plain),
      a.is("round", o.round),
      a.is("circle", o.circle),
      a.is("text", o.text),
      a.is("link", o.link),
      a.is("has-bg", o.bg)
    ]);
    return t({
      ref: i,
      size: s,
      type: l,
      disabled: u,
      shouldAddSpace: d
    }), (c, v) => (P(), j(nt(c.tag), ke({
      ref_key: "_ref",
      ref: i
    }, p(f), {
      class: p(h),
      style: p(r),
      onClick: p(m)
    }), {
      default: N(() => [
        c.loading ? (P(), Z(Bt, { key: 0 }, [
          c.$slots.loading ? z(c.$slots, "loading", { key: 0 }) : (P(), j(p(Ft), {
            key: 1,
            class: te(p(a).is("loading"))
          }, {
            default: N(() => [
              (P(), j(nt(c.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : c.icon || c.$slots.icon ? (P(), j(p(Ft), { key: 1 }, {
          default: N(() => [
            c.icon ? (P(), j(nt(c.icon), { key: 0 })) : z(c.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : oe("v-if", !0),
        c.$slots.default ? (P(), Z("span", {
          key: 2,
          class: te({ [p(a).em("text", "expand")]: p(d) })
        }, [
          z(c.$slots, "default")
        ], 2)) : oe("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var nu = /* @__PURE__ */ W(tu, [["__file", "button.vue"]]);
const ou = {
  size: sn.size,
  type: sn.type
}, ru = $({
  name: "ElButtonGroup"
}), au = /* @__PURE__ */ $({
  ...ru,
  props: ou,
  setup(e) {
    const t = e;
    se(yr, xo({
      size: ne(t, "size"),
      type: ne(t, "type")
    }));
    const n = ce("button");
    return (o, r) => (P(), Z("div", {
      class: te(p(n).b("group"))
    }, [
      z(o.$slots, "default")
    ], 2));
  }
});
var Er = /* @__PURE__ */ W(au, [["__file", "button-group.vue"]]);
const _r = Je(nu, {
  ButtonGroup: Er
});
fn(Er);
const Sr = (...e) => (t) => {
  e.forEach((n) => {
    et(n) ? n(t) : n.value = t;
  });
}, su = /* @__PURE__ */ $({
  inheritAttrs: !1
});
function iu(e, t, n, o, r, a) {
  return z(e.$slots, "default");
}
var lu = /* @__PURE__ */ W(su, [["render", iu], ["__file", "collection.vue"]]);
const uu = /* @__PURE__ */ $({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function cu(e, t, n, o, r, a) {
  return z(e.$slots, "default");
}
var fu = /* @__PURE__ */ W(uu, [["render", cu], ["__file", "collection-item.vue"]]);
const Tr = "data-el-collection-item", Cr = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, o = Symbol(t), r = Symbol(n), a = {
    ...lu,
    name: t,
    setup() {
      const s = O(), l = /* @__PURE__ */ new Map();
      se(o, {
        itemMap: l,
        getItems: () => {
          const f = p(s);
          if (!f)
            return [];
          const d = Array.from(f.querySelectorAll(`[${Tr}]`));
          return [...l.values()].sort((h, c) => d.indexOf(h.ref) - d.indexOf(c.ref));
        },
        collectionRef: s
      });
    }
  }, i = {
    ...fu,
    name: n,
    setup(s, { attrs: l }) {
      const u = O(), f = L(o, void 0);
      se(r, {
        collectionItemRef: u
      }), be(() => {
        const d = p(u);
        d && f.itemMap.set(d, {
          ref: d,
          ...l
        });
      }), he(() => {
        const d = p(u);
        f.itemMap.delete(d);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: o,
    COLLECTION_ITEM_INJECTION_KEY: r,
    ElCollection: a,
    ElCollectionItem: i
  };
}, du = q({
  style: { type: F([String, Array, Object]) },
  currentTabId: {
    type: F(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: F(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
}), {
  ElCollection: pu,
  ElCollectionItem: vu,
  COLLECTION_INJECTION_KEY: Fn,
  COLLECTION_ITEM_INJECTION_KEY: hu
} = Cr("RovingFocusGroup"), Mn = Symbol("elRovingFocusGroup"), Or = Symbol("elRovingFocusGroupItem"), gu = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
}, mu = (e, t) => e, bu = (e, t, n) => {
  const o = mu(e.code);
  return gu[o];
}, yu = (e, t) => e.map((n, o) => e[(o + t) % e.length]), $n = (e) => {
  const { activeElement: t } = document;
  for (const n of e)
    if (n === t || (n.focus(), t !== document.activeElement))
      return;
}, So = "currentTabIdChange", To = "rovingFocusGroup.entryFocus", wu = { bubbles: !1, cancelable: !0 }, Eu = $({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: !1,
  props: du,
  emits: [So, "entryFocus"],
  setup(e, { emit: t }) {
    var n;
    const o = O((n = e.currentTabId || e.defaultCurrentTabId) != null ? n : null), r = O(!1), a = O(!1), i = O(), { getItems: s } = L(Fn, void 0), l = T(() => [
      {
        outline: "none"
      },
      e.style
    ]), u = (v) => {
      t(So, v);
    }, f = () => {
      r.value = !0;
    }, d = V((v) => {
      var y;
      (y = e.onMousedown) == null || y.call(e, v);
    }, () => {
      a.value = !0;
    }), m = V((v) => {
      var y;
      (y = e.onFocus) == null || y.call(e, v);
    }, (v) => {
      const y = !p(a), { target: g, currentTarget: E } = v;
      if (g === E && y && !p(r)) {
        const R = new Event(To, wu);
        if (E?.dispatchEvent(R), !R.defaultPrevented) {
          const w = s().filter((A) => A.focusable), b = w.find((A) => A.active), S = w.find((A) => A.id === p(o)), k = [b, S, ...w].filter(Boolean).map((A) => A.ref);
          $n(k);
        }
      }
      a.value = !1;
    }), h = V((v) => {
      var y;
      (y = e.onBlur) == null || y.call(e, v);
    }, () => {
      r.value = !1;
    }), c = (...v) => {
      t("entryFocus", ...v);
    };
    se(Mn, {
      currentTabbedId: zo(o),
      loop: ne(e, "loop"),
      tabIndex: T(() => p(r) ? -1 : 0),
      rovingFocusGroupRef: i,
      rovingFocusGroupRootStyle: l,
      orientation: ne(e, "orientation"),
      dir: ne(e, "dir"),
      onItemFocus: u,
      onItemShiftTab: f,
      onBlur: h,
      onFocus: m,
      onMousedown: d
    }), G(() => e.currentTabId, (v) => {
      o.value = v ?? null;
    }), Pt(i, To, c);
  }
});
function _u(e, t, n, o, r, a) {
  return z(e.$slots, "default");
}
var Su = /* @__PURE__ */ W(Eu, [["render", _u], ["__file", "roving-focus-group-impl.vue"]]);
const Tu = $({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: pu,
    ElRovingFocusGroupImpl: Su
  }
});
function Cu(e, t, n, o, r, a) {
  const i = ee("el-roving-focus-group-impl"), s = ee("el-focus-group-collection");
  return P(), j(s, null, {
    default: N(() => [
      x(i, ga(ma(e.$attrs)), {
        default: N(() => [
          z(e.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var Ou = /* @__PURE__ */ W(Tu, [["render", Cu], ["__file", "roving-focus-group.vue"]]);
const Iu = q({
  trigger: Pn.trigger,
  triggerKeys: {
    type: F(Array),
    default: () => [
      U.enter,
      U.numpadEnter,
      U.space,
      U.down
    ]
  },
  effect: {
    ...Lt.effect,
    default: "light"
  },
  type: {
    type: F(String)
  },
  placement: {
    type: F(String),
    default: "bottom"
  },
  popperOptions: {
    type: F(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: F([Number, String]),
    default: 0
  },
  maxHeight: {
    type: F([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  role: {
    type: String,
    values: Jo,
    default: "menu"
  },
  buttonProps: {
    type: F(Object)
  },
  teleported: Lt.teleported,
  persistent: {
    type: Boolean,
    default: !0
  }
}), Ir = q({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: Zt
  }
}), ku = q({
  onKeydown: { type: F(Function) }
}), Ru = [
  U.down,
  U.pageDown,
  U.home
], kr = [U.up, U.pageUp, U.end], Au = [...Ru, ...kr], {
  ElCollection: Pu,
  ElCollectionItem: Fu,
  COLLECTION_INJECTION_KEY: Mu,
  COLLECTION_ITEM_INJECTION_KEY: $u
} = Cr("Dropdown"), Ht = Symbol("elDropdown"), { ButtonGroup: Nu } = _r, Lu = $({
  name: "ElDropdown",
  components: {
    ElButton: _r,
    ElButtonGroup: Nu,
    ElScrollbar: bs,
    ElDropdownCollection: Pu,
    ElTooltip: $l,
    ElRovingFocusGroup: Ou,
    ElOnlyChild: tr,
    ElIcon: Ft,
    ArrowDown: na
  },
  props: Iu,
  emits: ["visible-change", "click", "command"],
  setup(e, { emit: t }) {
    const n = ft(), o = ce("dropdown"), { t: r } = oa(), a = O(), i = O(), s = O(), l = O(), u = O(null), f = O(null), d = O(!1), m = T(() => ({
      maxHeight: Jt(e.maxHeight)
    })), h = T(() => [o.m(w.value)]), c = T(() => Ua(e.trigger)), v = gn().value, y = T(() => e.id || v);
    G([a, c], ([I, _], [K]) => {
      var X, ye, xe;
      (X = K?.$el) != null && X.removeEventListener && K.$el.removeEventListener("pointerenter", S), (ye = I?.$el) != null && ye.removeEventListener && I.$el.removeEventListener("pointerenter", S), (xe = I?.$el) != null && xe.addEventListener && _.includes("hover") && I.$el.addEventListener("pointerenter", S);
    }, { immediate: !0 }), he(() => {
      var I, _;
      (_ = (I = a.value) == null ? void 0 : I.$el) != null && _.removeEventListener && a.value.$el.removeEventListener("pointerenter", S);
    });
    function g() {
      E();
    }
    function E() {
      var I;
      (I = s.value) == null || I.onClose();
    }
    function R() {
      var I;
      (I = s.value) == null || I.onOpen();
    }
    const w = Uo();
    function b(...I) {
      t("command", ...I);
    }
    function S() {
      var I, _;
      (_ = (I = a.value) == null ? void 0 : I.$el) == null || _.focus();
    }
    function C() {
    }
    function k() {
      const I = p(l);
      c.value.includes("hover") && I?.focus(), f.value = null;
    }
    function A(I) {
      f.value = I;
    }
    function M(I) {
      d.value || (I.preventDefault(), I.stopImmediatePropagation());
    }
    function D() {
      t("visible-change", !0);
    }
    function B(I) {
      var _;
      I?.type === "keydown" && ((_ = l.value) == null || _.focus());
    }
    function H() {
      t("visible-change", !1);
    }
    return se(Ht, {
      contentRef: l,
      role: T(() => e.role),
      triggerId: y,
      isUsingKeyboard: d,
      onItemEnter: C,
      onItemLeave: k
    }), se("elDropdown", {
      instance: n,
      dropdownSize: w,
      handleClick: g,
      commandHandler: b,
      trigger: ne(e, "trigger"),
      hideOnClick: ne(e, "hideOnClick")
    }), {
      t: r,
      ns: o,
      scrollbar: u,
      wrapStyle: m,
      dropdownTriggerKls: h,
      dropdownSize: w,
      triggerId: y,
      currentTabId: f,
      handleCurrentTabIdChange: A,
      handlerMainButtonClick: (I) => {
        t("click", I);
      },
      handleEntryFocus: M,
      handleClose: E,
      handleOpen: R,
      handleBeforeShowTooltip: D,
      handleShowTooltip: B,
      handleBeforeHideTooltip: H,
      onFocusAfterTrapped: (I) => {
        var _, K;
        I.preventDefault(), (K = (_ = l.value) == null ? void 0 : _.focus) == null || K.call(_, {
          preventScroll: !0
        });
      },
      popperRef: s,
      contentRef: l,
      triggeringElementRef: a,
      referenceElementRef: i
    };
  }
});
function Bu(e, t, n, o, r, a) {
  var i;
  const s = ee("el-dropdown-collection"), l = ee("el-roving-focus-group"), u = ee("el-scrollbar"), f = ee("el-only-child"), d = ee("el-tooltip"), m = ee("el-button"), h = ee("arrow-down"), c = ee("el-icon"), v = ee("el-button-group");
  return P(), Z("div", {
    class: te([e.ns.b(), e.ns.is("disabled", e.disabled)])
  }, [
    x(d, {
      ref: "popperRef",
      role: e.role,
      effect: e.effect,
      "fallback-placements": ["bottom", "top"],
      "popper-options": e.popperOptions,
      "gpu-acceleration": !1,
      "hide-after": e.trigger === "hover" ? e.hideTimeout : 0,
      "manual-mode": !0,
      placement: e.placement,
      "popper-class": [e.ns.e("popper"), e.popperClass],
      "reference-element": (i = e.referenceElementRef) == null ? void 0 : i.$el,
      trigger: e.trigger,
      "trigger-keys": e.triggerKeys,
      "trigger-target-el": e.contentRef,
      "show-after": e.trigger === "hover" ? e.showTimeout : 0,
      "stop-popper-mouse-event": !1,
      "virtual-ref": e.triggeringElementRef,
      "virtual-triggering": e.splitButton,
      disabled: e.disabled,
      transition: `${e.ns.namespace.value}-zoom-in-top`,
      teleported: e.teleported,
      pure: "",
      persistent: e.persistent,
      onBeforeShow: e.handleBeforeShowTooltip,
      onShow: e.handleShowTooltip,
      onBeforeHide: e.handleBeforeHideTooltip
    }, ba({
      content: N(() => [
        x(u, {
          ref: "scrollbar",
          "wrap-style": e.wrapStyle,
          tag: "div",
          "view-class": e.ns.e("list")
        }, {
          default: N(() => [
            x(l, {
              loop: e.loop,
              "current-tab-id": e.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: e.handleCurrentTabIdChange,
              onEntryFocus: e.handleEntryFocus
            }, {
              default: N(() => [
                x(s, null, {
                  default: N(() => [
                    z(e.$slots, "dropdown")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])
          ]),
          _: 3
        }, 8, ["wrap-style", "view-class"])
      ]),
      _: 2
    }, [
      e.splitButton ? void 0 : {
        name: "default",
        fn: N(() => [
          x(f, {
            id: e.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: e.tabindex
          }, {
            default: N(() => [
              z(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      }
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]),
    e.splitButton ? (P(), j(v, { key: 0 }, {
      default: N(() => [
        x(m, ke({ ref: "referenceElementRef" }, e.buttonProps, {
          size: e.dropdownSize,
          type: e.type,
          disabled: e.disabled,
          tabindex: e.tabindex,
          onClick: e.handlerMainButtonClick
        }), {
          default: N(() => [
            z(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        x(m, ke({
          id: e.triggerId,
          ref: "triggeringElementRef"
        }, e.buttonProps, {
          role: "button",
          size: e.dropdownSize,
          type: e.type,
          class: e.ns.e("caret-button"),
          disabled: e.disabled,
          tabindex: e.tabindex,
          "aria-label": e.t("el.dropdown.toggleDropdown")
        }), {
          default: N(() => [
            x(c, {
              class: te(e.ns.e("icon"))
            }, {
              default: N(() => [
                x(h)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : oe("v-if", !0)
  ], 2);
}
var xu = /* @__PURE__ */ W(Lu, [["render", Bu], ["__file", "dropdown.vue"]]);
const Du = $({
  components: {
    ElRovingFocusCollectionItem: vu
  },
  props: {
    focusable: {
      type: Boolean,
      default: !0
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["mousedown", "focus", "keydown"],
  setup(e, { emit: t }) {
    const { currentTabbedId: n, loop: o, onItemFocus: r, onItemShiftTab: a } = L(Mn, void 0), { getItems: i } = L(Fn, void 0), s = gn(), l = O(), u = V((h) => {
      t("mousedown", h);
    }, (h) => {
      e.focusable ? r(p(s)) : h.preventDefault();
    }), f = V((h) => {
      t("focus", h);
    }, () => {
      r(p(s));
    }), d = V((h) => {
      t("keydown", h);
    }, (h) => {
      const { code: c, shiftKey: v, target: y, currentTarget: g } = h;
      if (c === U.tab && v) {
        a();
        return;
      }
      if (y !== g)
        return;
      const E = bu(h);
      if (E) {
        h.preventDefault();
        let w = i().filter((b) => b.focusable).map((b) => b.ref);
        switch (E) {
          case "last": {
            w.reverse();
            break;
          }
          case "prev":
          case "next": {
            E === "prev" && w.reverse();
            const b = w.indexOf(g);
            w = o.value ? yu(w, b + 1) : w.slice(b + 1);
            break;
          }
        }
        lt(() => {
          $n(w);
        });
      }
    }), m = T(() => n.value === p(s));
    return se(Or, {
      rovingFocusGroupItemRef: l,
      tabIndex: T(() => p(m) ? 0 : -1),
      handleMousedown: u,
      handleFocus: f,
      handleKeydown: d
    }), {
      id: s,
      handleKeydown: d,
      handleFocus: f,
      handleMousedown: u
    };
  }
});
function Hu(e, t, n, o, r, a) {
  const i = ee("el-roving-focus-collection-item");
  return P(), j(i, {
    id: e.id,
    focusable: e.focusable,
    active: e.active
  }, {
    default: N(() => [
      z(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var zu = /* @__PURE__ */ W(Du, [["render", Hu], ["__file", "roving-focus-item.vue"]]);
const Ku = $({
  name: "DropdownItemImpl",
  components: {
    ElIcon: Ft
  },
  props: Ir,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(e, { emit: t }) {
    const n = ce("dropdown"), { role: o } = L(Ht, void 0), { collectionItemRef: r } = L($u, void 0), { collectionItemRef: a } = L(hu, void 0), {
      rovingFocusGroupItemRef: i,
      tabIndex: s,
      handleFocus: l,
      handleKeydown: u,
      handleMousedown: f
    } = L(Or, void 0), d = Sr(r, a, i), m = T(() => o.value === "menu" ? "menuitem" : o.value === "navigation" ? "link" : "button"), h = V((c) => {
      if ([U.enter, U.numpadEnter, U.space].includes(c.code))
        return c.preventDefault(), c.stopImmediatePropagation(), t("clickimpl", c), !0;
    }, u);
    return {
      ns: n,
      itemRef: d,
      dataset: {
        [Tr]: ""
      },
      role: m,
      tabIndex: s,
      handleFocus: l,
      handleKeydown: h,
      handleMousedown: f
    };
  }
});
function ju(e, t, n, o, r, a) {
  const i = ee("el-icon");
  return P(), Z(Bt, null, [
    e.divided ? (P(), Z("li", {
      key: 0,
      role: "separator",
      class: te(e.ns.bem("menu", "item", "divided"))
    }, null, 2)) : oe("v-if", !0),
    st("li", ke({ ref: e.itemRef }, { ...e.dataset, ...e.$attrs }, {
      "aria-disabled": e.disabled,
      class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)],
      tabindex: e.tabIndex,
      role: e.role,
      onClick: (s) => e.$emit("clickimpl", s),
      onFocus: e.handleFocus,
      onKeydown: en(e.handleKeydown, ["self"]),
      onMousedown: e.handleMousedown,
      onPointermove: (s) => e.$emit("pointermove", s),
      onPointerleave: (s) => e.$emit("pointerleave", s)
    }), [
      e.icon ? (P(), j(i, { key: 0 }, {
        default: N(() => [
          (P(), j(nt(e.icon)))
        ]),
        _: 1
      })) : oe("v-if", !0),
      z(e.$slots, "default")
    ], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])
  ], 64);
}
var Gu = /* @__PURE__ */ W(Ku, [["render", ju], ["__file", "dropdown-item-impl.vue"]]);
const Rr = () => {
  const e = L("elDropdown", {}), t = T(() => e?.dropdownSize);
  return {
    elDropdown: e,
    _elDropdownSize: t
  };
}, Wu = $({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: Fu,
    ElRovingFocusItem: zu,
    ElDropdownItemImpl: Gu
  },
  inheritAttrs: !1,
  props: Ir,
  emits: ["pointermove", "pointerleave", "click"],
  setup(e, { emit: t, attrs: n }) {
    const { elDropdown: o } = Rr(), r = ft(), a = O(null), i = T(() => {
      var h, c;
      return (c = (h = p(a)) == null ? void 0 : h.textContent) != null ? c : "";
    }), { onItemEnter: s, onItemLeave: l } = L(Ht, void 0), u = V((h) => (t("pointermove", h), h.defaultPrevented), bo((h) => {
      if (e.disabled) {
        l(h);
        return;
      }
      const c = h.currentTarget;
      c === document.activeElement || c.contains(document.activeElement) || (s(h), h.defaultPrevented || c?.focus());
    })), f = V((h) => (t("pointerleave", h), h.defaultPrevented), bo(l)), d = V((h) => {
      if (!e.disabled)
        return t("click", h), h.type !== "keydown" && h.defaultPrevented;
    }, (h) => {
      var c, v, y;
      if (e.disabled) {
        h.stopImmediatePropagation();
        return;
      }
      (c = o?.hideOnClick) != null && c.value && ((v = o.handleClick) == null || v.call(o)), (y = o.commandHandler) == null || y.call(o, e.command, r, h);
    }), m = T(() => ({ ...e, ...n }));
    return {
      handleClick: d,
      handlePointerMove: u,
      handlePointerLeave: f,
      textContent: i,
      propsAndAttrs: m
    };
  }
});
function Vu(e, t, n, o, r, a) {
  var i;
  const s = ee("el-dropdown-item-impl"), l = ee("el-roving-focus-item"), u = ee("el-dropdown-collection-item");
  return P(), j(u, {
    disabled: e.disabled,
    "text-value": (i = e.textValue) != null ? i : e.textContent
  }, {
    default: N(() => [
      x(l, {
        focusable: !e.disabled
      }, {
        default: N(() => [
          x(s, ke(e.propsAndAttrs, {
            onPointerleave: e.handlePointerLeave,
            onPointermove: e.handlePointerMove,
            onClickimpl: e.handleClick
          }), {
            default: N(() => [
              z(e.$slots, "default")
            ]),
            _: 3
          }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])
        ]),
        _: 3
      }, 8, ["focusable"])
    ]),
    _: 3
  }, 8, ["disabled", "text-value"]);
}
var Ar = /* @__PURE__ */ W(Wu, [["render", Vu], ["__file", "dropdown-item.vue"]]);
const Uu = $({
  name: "ElDropdownMenu",
  props: ku,
  setup(e) {
    const t = ce("dropdown"), { _elDropdownSize: n } = Rr(), o = n.value, { focusTrapRef: r, onKeydown: a } = L(or, void 0), { contentRef: i, role: s, triggerId: l } = L(Ht, void 0), { collectionRef: u, getItems: f } = L(Mu, void 0), {
      rovingFocusGroupRef: d,
      rovingFocusGroupRootStyle: m,
      tabIndex: h,
      onBlur: c,
      onFocus: v,
      onMousedown: y
    } = L(Mn, void 0), { collectionRef: g } = L(Fn, void 0), E = T(() => [t.b("menu"), t.bm("menu", o?.value)]), R = Sr(i, u, r, d, g), w = V((S) => {
      var C;
      (C = e.onKeydown) == null || C.call(e, S);
    }, (S) => {
      const { currentTarget: C, code: k, target: A } = S;
      if (C.contains(A), U.tab === k && S.stopImmediatePropagation(), S.preventDefault(), A !== p(i) || !Au.includes(k))
        return;
      const D = f().filter((B) => !B.disabled).map((B) => B.ref);
      kr.includes(k) && D.reverse(), $n(D);
    });
    return {
      size: o,
      rovingFocusGroupRootStyle: m,
      tabIndex: h,
      dropdownKls: E,
      role: s,
      triggerId: l,
      dropdownListWrapperRef: R,
      handleKeydown: (S) => {
        w(S), a(S);
      },
      onBlur: c,
      onFocus: v,
      onMousedown: y
    };
  }
});
function Yu(e, t, n, o, r, a) {
  return P(), Z("ul", {
    ref: e.dropdownListWrapperRef,
    class: te(e.dropdownKls),
    style: it(e.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: e.role,
    "aria-labelledby": e.triggerId,
    onBlur: e.onBlur,
    onFocus: e.onFocus,
    onKeydown: en(e.handleKeydown, ["self"]),
    onMousedown: en(e.onMousedown, ["self"])
  }, [
    z(e.$slots, "default")
  ], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var Pr = /* @__PURE__ */ W(Uu, [["render", Yu], ["__file", "dropdown-menu.vue"]]);
Je(xu, {
  DropdownItem: Ar,
  DropdownMenu: Pr
});
const qu = fn(Ar);
fn(Pr);
async function Ju() {
  try {
    return await No("get_git_settings_command");
  } catch (e) {
    throw new Error(`获取 Git 设置失败: ${e}`);
  }
}
async function Fr() {
  try {
    return await No("get_git_status_command");
  } catch (e) {
    throw new Error(`获取 Git 状态失败: ${e}`);
  }
}
const J = O("disabled"), je = O(null), Ge = O(null), St = O(null), Tt = O(!1);
let Me = null, $e = null;
const qt = O(!1), Mr = O(0), $r = O(Date.now());
let at = null, It = null, kt = null, Rt = null, At = null;
function Zu() {
  const e = T(() => !je.value || !je.value.is_repo ? 0 : je.value.changed_files.length), t = T(() => {
    if (Mr.value, !Ge.value) return "";
    const s = new Date(Ge.value), l = $r.value - s.getTime(), u = Math.floor(l / 6e4), f = Math.floor(u / 60), d = Math.floor(f / 24);
    return u < 1 ? "刚刚" : u < 60 ? `${u}分钟前` : f < 24 ? `${f}小时前` : d < 7 ? `${d}天前` : s.toLocaleDateString("zh-CN");
  }), n = T(() => {
    const s = St.value;
    if (!s || !s.enabled)
      return "Git 同步已禁用";
    if (e.value > 0)
      return `${e.value} 个文件待同步`;
    switch (J.value) {
      case "syncing":
        return "同步中...";
      case "synced":
        return t.value || "已同步";
      case "has_changes":
        return `${e.value} 个文件待同步`;
      case "error":
        return "同步出错";
      default:
        return t.value || "已同步";
    }
  }), o = async () => {
    if (Tt.value || J.value === "syncing") {
      qt.value = !0;
      return;
    }
    Tt.value = !0;
    try {
      const s = await Fr();
      je.value = s, !s.is_repo || !St.value?.enabled ? J.value = "disabled" : s.has_changes ? J.value = "has_changes" : J.value = "synced";
    } catch (s) {
      Qt.error("[GitStatus] 获取 Git 状态失败", s), J.value = "error";
    } finally {
      Tt.value = !1, qt.value && (qt.value = !1, setTimeout(() => o(), 100));
    }
  };
  return {
    syncState: J,
    gitStatus: je,
    pendingFilesCount: e,
    lastSyncTime: Ge,
    gitSettings: St,
    isLoading: Tt,
    refreshStatus: o,
    refreshSettings: async () => {
      try {
        const s = await Ju();
        St.value = s, s.enabled ? (J.value === "disabled" && (J.value = "idle"), s.last_sync_time && (Ge.value = s.last_sync_time)) : J.value = "disabled";
      } catch (s) {
        Qt.error("[GitStatus] 获取 Git 设置失败", s);
      }
    },
    formattedLastSyncTime: t,
    stateDescription: n,
    // 导出内部方法供外部调用
    _setSyncState: (s) => {
      J.value = s;
    },
    _setLastSyncTime: (s) => {
      Ge.value = s;
    }
  };
}
function Qu() {
  at || (at = setInterval(() => {
    $r.value = Date.now(), Mr.value += 1;
  }, 6e4)), Ct("git-pull-start", () => {
    J.value = "syncing";
  }).then((e) => {
    It = e;
  }), Ct("git-push-start", () => {
    J.value = "syncing";
  }).then((e) => {
    kt = e;
  }), Ct("git-sync-complete", (e) => {
    e.payload.success ? (J.value = "syncing", e.payload.last_sync_time && (Ge.value = e.payload.last_sync_time)) : J.value = "error", $e !== null && clearTimeout($e), $e = setTimeout(() => {
      $e = null, Fr().then((t) => {
        je.value = t, t.has_changes ? J.value = "has_changes" : J.value = "synced";
      }).catch((t) => {
        Qt.error("[GitStatus] git-sync-complete 后刷新状态失败", t), J.value = "error";
      });
    }, 1e3);
  }).then((e) => {
    Rt = e;
  });
}
function Xu(e, t = 300) {
  Ct("git-workspace-changed", () => {
    Me !== null && clearTimeout(Me), Me = setTimeout(async () => {
      Me = null, await e();
    }, t);
  }).then((n) => {
    At = n;
  });
}
function ec() {
  at && (clearInterval(at), at = null), Me && (clearTimeout(Me), Me = null), $e && (clearTimeout($e), $e = null), It && (It(), It = null), kt && (kt(), kt = null), Rt && (Rt(), Rt = null), At && (At(), At = null);
}
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var Co;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Co || (Co = {}));
var Oo;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Oo || (Oo = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Io;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Io || (Io = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const tc = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function nc() {
  return L(tc);
}
const oc = ["title"], rc = {
  key: 2,
  class: "git-badge"
}, ac = {
  key: 3,
  class: "git-time"
}, sc = { class: "ml-2" }, ic = {
  key: 0,
  class: "git-badge ml-1"
}, lc = /* @__PURE__ */ $({
  __name: "TitlebarGitStatus",
  props: {
    variant: { default: "inline" }
  },
  setup(e) {
    const t = nc(), {
      syncState: n,
      pendingFilesCount: o,
      formattedLastSyncTime: r,
      refreshStatus: a,
      refreshSettings: i,
      stateDescription: s,
      gitSettings: l
    } = Zu(), u = T(() => !!l.value?.enabled && n.value !== "error"), f = () => {
      t.push("/config/category/settings?tab=gitSync");
    };
    return be(async () => {
      Qu(), Xu(a), await i(), await a();
    }), ya(() => {
      ec();
    }), (d, m) => {
      const h = qu;
      return u.value && d.variant === "inline" ? (P(), Z("div", {
        key: 0,
        class: te(["git-status-indicator", `git-status-${p(n)}`]),
        title: p(s),
        onClick: f
      }, [
        p(n) === "syncing" ? (P(), j(p(wa), {
          key: 0,
          class: "icon git-sync-icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })) : (P(), j(p(Un), {
          key: 1,
          class: "icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })),
        p(n) === "has_changes" ? (P(), Z(
          "span",
          rc,
          tt(p(o)),
          1
          /* TEXT */
        )) : oe("v-if", !0),
        p(r) && p(n) !== "syncing" ? (P(), Z(
          "span",
          ac,
          tt(p(r)),
          1
          /* TEXT */
        )) : oe("v-if", !0)
      ], 10, oc)) : u.value ? (P(), j(h, {
        key: 1,
        onClick: f
      }, {
        default: N(() => [
          x(p(Un), {
            theme: "outline",
            size: "16",
            strokeWidth: 3,
            class: "align-middle"
          }),
          st(
            "span",
            sc,
            tt(d.$t("titlebar.gitSync")),
            1
            /* TEXT */
          ),
          p(n) === "has_changes" ? (P(), Z(
            "span",
            ic,
            tt(p(o)),
            1
            /* TEXT */
          )) : oe("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })) : oe("v-if", !0);
    };
  }
}), fc = /* @__PURE__ */ ra(lc, [["__scopeId", "data-v-1d1e7036"]]);
export {
  fc as default
};
