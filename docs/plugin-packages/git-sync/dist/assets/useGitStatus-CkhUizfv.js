import { I as wa, c as de, g as he, M as F, r as S, a as _, m as h, i as Kt, a9 as Tn, ac as Ea, P as Sa, s as so, K as Oa, o as be, n as pt, w as N, O as Ta, C as qt, ad as cr, ae as Ca, b as Pe, Q as Oe, af as xa, N as zt, d as P, f as B, h as A, p as K, y as mt, k as H, t as ce, a6 as Pa, L as Ce, q as Y, v as J, D as Cn, l as pe, B as Ht, G as io, T as lo, F as xn, S as uo, ag as Aa, U as Ia, j as He, x as kt, ah as Ra, a7 as co, ai as ka, H as Ma, a8 as Na, aj as $a, ak as La, A as Fa, e as Ba } from "./runtime-entry-BKrRpQHZ.js";
const od = wa("loading", !0, function(e) {
  return de("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [de("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), de("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fo = Symbol(), Mt = "el", Da = "is-", Ne = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, po = Symbol("namespaceContextKey"), Pn = (e) => {
  const t = e || (he() ? F(po, S(Mt)) : S(Mt));
  return _(() => h(t) || Mt);
}, le = (e, t) => {
  const n = Pn(t);
  return {
    namespace: n,
    b: (d = "") => Ne(n.value, e, d, "", ""),
    e: (d) => d ? Ne(n.value, e, "", d, "") : "",
    m: (d) => d ? Ne(n.value, e, "", "", d) : "",
    be: (d, b) => d && b ? Ne(n.value, e, d, b, "") : "",
    em: (d, b) => d && b ? Ne(n.value, e, "", d, b) : "",
    bm: (d, b) => d && b ? Ne(n.value, e, d, "", b) : "",
    bem: (d, b, v) => d && b && v ? Ne(n.value, e, d, b, v) : "",
    is: (d, ...b) => {
      const v = b.length >= 1 ? b[0] : !0;
      return d && v ? `${Da}${d}` : "";
    },
    cssVar: (d) => {
      const b = {};
      for (const v in d)
        d[v] && (b[`--${n.value}-${v}`] = d[v]);
      return b;
    },
    cssVarName: (d) => `--${n.value}-${d}`,
    cssVarBlock: (d) => {
      const b = {};
      for (const v in d)
        d[v] && (b[`--${n.value}-${e}-${v}`] = d[v]);
      return b;
    },
    cssVarBlockName: (d) => `--${n.value}-${e}-${d}`
  };
};
var za = typeof global == "object" && global && global.Object === Object && global, Ha = typeof self == "object" && self && self.Object === Object && self, An = za || Ha || Function("return this")(), Ie = An.Symbol, vo = Object.prototype, ja = vo.hasOwnProperty, Va = vo.toString, it = Ie ? Ie.toStringTag : void 0;
function Wa(e) {
  var t = ja.call(e, it), n = e[it];
  try {
    e[it] = void 0;
    var r = !0;
  } catch {
  }
  var o = Va.call(e);
  return r && (t ? e[it] = n : delete e[it]), o;
}
var Ua = Object.prototype, Ga = Ua.toString;
function Ka(e) {
  return Ga.call(e);
}
var qa = "[object Null]", Ya = "[object Undefined]", fr = Ie ? Ie.toStringTag : void 0;
function In(e) {
  return e == null ? e === void 0 ? Ya : qa : fr && fr in Object(e) ? Wa(e) : Ka(e);
}
function Rn(e) {
  return e != null && typeof e == "object";
}
var Za = "[object Symbol]";
function kn(e) {
  return typeof e == "symbol" || Rn(e) && In(e) == Za;
}
function Ja(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var nt = Array.isArray, dr = Ie ? Ie.prototype : void 0, pr = dr ? dr.toString : void 0;
function ho(e) {
  if (typeof e == "string")
    return e;
  if (nt(e))
    return Ja(e, ho) + "";
  if (kn(e))
    return pr ? pr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function jt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Qa(e) {
  return e;
}
var Xa = "[object AsyncFunction]", es = "[object Function]", ts = "[object GeneratorFunction]", ns = "[object Proxy]";
function rs(e) {
  if (!jt(e))
    return !1;
  var t = In(e);
  return t == es || t == ts || t == Xa || t == ns;
}
var an = An["__core-js_shared__"], vr = function() {
  var e = /[^.]+$/.exec(an && an.keys && an.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function os(e) {
  return !!vr && vr in e;
}
var as = Function.prototype, ss = as.toString;
function is(e) {
  if (e != null) {
    try {
      return ss.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ls = /[\\^$.*+?()[\]{}|]/g, us = /^\[object .+?Constructor\]$/, cs = Function.prototype, fs = Object.prototype, ds = cs.toString, ps = fs.hasOwnProperty, vs = RegExp(
  "^" + ds.call(ps).replace(ls, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function hs(e) {
  if (!jt(e) || os(e))
    return !1;
  var t = rs(e) ? vs : us;
  return t.test(is(e));
}
function gs(e, t) {
  return e?.[t];
}
function Mn(e, t) {
  var n = gs(e, t);
  return hs(n) ? n : void 0;
}
function ms(e, t, n) {
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
var bs = 800, ys = 16, _s = Date.now;
function ws(e) {
  var t = 0, n = 0;
  return function() {
    var r = _s(), o = ys - (r - n);
    if (n = r, o > 0) {
      if (++t >= bs)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Es(e) {
  return function() {
    return e;
  };
}
var Vt = function() {
  try {
    var e = Mn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ss = Vt ? function(e, t) {
  return Vt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Es(t),
    writable: !0
  });
} : Qa, Os = ws(Ss), Ts = 9007199254740991, Cs = /^(?:0|[1-9]\d*)$/;
function go(e, t) {
  var n = typeof e;
  return t = t ?? Ts, !!t && (n == "number" || n != "symbol" && Cs.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function xs(e, t, n) {
  t == "__proto__" && Vt ? Vt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function mo(e, t) {
  return e === t || e !== e && t !== t;
}
var Ps = Object.prototype, As = Ps.hasOwnProperty;
function Is(e, t, n) {
  var r = e[t];
  (!(As.call(e, t) && mo(r, n)) || n === void 0 && !(t in e)) && xs(e, t, n);
}
var hr = Math.max;
function Rs(e, t, n) {
  return t = hr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = hr(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(i), ms(e, this, s);
  };
}
var ks = 9007199254740991;
function Ms(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ks;
}
var Ns = "[object Arguments]";
function gr(e) {
  return Rn(e) && In(e) == Ns;
}
var bo = Object.prototype, $s = bo.hasOwnProperty, Ls = bo.propertyIsEnumerable, yo = gr(/* @__PURE__ */ function() {
  return arguments;
}()) ? gr : function(e) {
  return Rn(e) && $s.call(e, "callee") && !Ls.call(e, "callee");
}, Fs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bs = /^\w*$/;
function Ds(e, t) {
  if (nt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || kn(e) ? !0 : Bs.test(e) || !Fs.test(e) || t != null && e in Object(t);
}
var vt = Mn(Object, "create");
function zs() {
  this.__data__ = vt ? vt(null) : {}, this.size = 0;
}
function Hs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var js = "__lodash_hash_undefined__", Vs = Object.prototype, Ws = Vs.hasOwnProperty;
function Us(e) {
  var t = this.__data__;
  if (vt) {
    var n = t[e];
    return n === js ? void 0 : n;
  }
  return Ws.call(t, e) ? t[e] : void 0;
}
var Gs = Object.prototype, Ks = Gs.hasOwnProperty;
function qs(e) {
  var t = this.__data__;
  return vt ? t[e] !== void 0 : Ks.call(t, e);
}
var Ys = "__lodash_hash_undefined__";
function Zs(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = vt && t === void 0 ? Ys : t, this;
}
function je(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
je.prototype.clear = zs;
je.prototype.delete = Hs;
je.prototype.get = Us;
je.prototype.has = qs;
je.prototype.set = Zs;
function Js() {
  this.__data__ = [], this.size = 0;
}
function Yt(e, t) {
  for (var n = e.length; n--; )
    if (mo(e[n][0], t))
      return n;
  return -1;
}
var Qs = Array.prototype, Xs = Qs.splice;
function ei(e) {
  var t = this.__data__, n = Yt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Xs.call(t, n, 1), --this.size, !0;
}
function ti(e) {
  var t = this.__data__, n = Yt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ni(e) {
  return Yt(this.__data__, e) > -1;
}
function ri(e, t) {
  var n = this.__data__, r = Yt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = Js;
rt.prototype.delete = ei;
rt.prototype.get = ti;
rt.prototype.has = ni;
rt.prototype.set = ri;
var oi = Mn(An, "Map");
function ai() {
  this.size = 0, this.__data__ = {
    hash: new je(),
    map: new (oi || rt)(),
    string: new je()
  };
}
function si(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Zt(e, t) {
  var n = e.__data__;
  return si(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ii(e) {
  var t = Zt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function li(e) {
  return Zt(this, e).get(e);
}
function ui(e) {
  return Zt(this, e).has(e);
}
function ci(e, t) {
  var n = Zt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function We(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
We.prototype.clear = ai;
We.prototype.delete = ii;
We.prototype.get = li;
We.prototype.has = ui;
We.prototype.set = ci;
var fi = "Expected a function";
function Nn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(fi);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (Nn.Cache || We)(), n;
}
Nn.Cache = We;
var di = 500;
function pi(e) {
  var t = Nn(e, function(r) {
    return n.size === di && n.clear(), r;
  }), n = t.cache;
  return t;
}
var vi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hi = /\\(\\)?/g, gi = pi(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(vi, function(n, r, o, a) {
    t.push(o ? a.replace(hi, "$1") : r || n);
  }), t;
});
function mi(e) {
  return e == null ? "" : ho(e);
}
function Jt(e, t) {
  return nt(e) ? e : Ds(e, t) ? [e] : gi(mi(e));
}
function $n(e) {
  if (typeof e == "string" || kn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function _o(e, t) {
  t = Jt(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[$n(t[n++])];
  return n && n == r ? e : void 0;
}
function bi(e, t, n) {
  var r = e == null ? void 0 : _o(e, t);
  return r === void 0 ? n : r;
}
function yi(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var mr = Ie ? Ie.isConcatSpreadable : void 0;
function _i(e) {
  return nt(e) || yo(e) || !!(mr && e && e[mr]);
}
function wi(e, t, n, r, o) {
  var a = -1, i = e.length;
  for (n || (n = _i), o || (o = []); ++a < i; ) {
    var s = e[a];
    n(s) ? yi(o, s) : o[o.length] = s;
  }
  return o;
}
function Ei(e) {
  var t = e == null ? 0 : e.length;
  return t ? wi(e) : [];
}
function Si(e) {
  return Os(Rs(e, void 0, Ei), e + "");
}
function ad() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return nt(e) ? e : [e];
}
function Oi(e, t) {
  return e != null && t in Object(e);
}
function Ti(e, t, n) {
  t = Jt(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var i = $n(t[r]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Ms(o) && go(i, o) && (nt(e) || yo(e)));
}
function Ci(e, t) {
  return e != null && Ti(e, t, Oi);
}
function hn(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Ln(e) {
  return e == null;
}
function xi(e) {
  return e === void 0;
}
function Pi(e, t, n, r) {
  if (!jt(e))
    return e;
  t = Jt(t, e);
  for (var o = -1, a = t.length, i = a - 1, s = e; s != null && ++o < a; ) {
    var l = $n(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != i) {
      var c = s[l];
      u = void 0, u === void 0 && (u = jt(c) ? c : go(t[o + 1]) ? [] : {});
    }
    Is(s, l, u), s = s[l];
  }
  return e;
}
function Ai(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var i = t[r], s = _o(e, i);
    n(s, i) && Pi(a, Jt(i, e), s);
  }
  return a;
}
function Ii(e, t) {
  return Ai(e, t, function(n, r) {
    return Ci(e, r);
  });
}
var Ri = Si(function(e, t) {
  return e == null ? {} : Ii(e, t);
});
const ki = (e) => e === void 0, wo = (e) => typeof e == "boolean", fe = (e) => typeof e == "number", De = (e) => typeof Element > "u" ? !1 : e instanceof Element, Mi = (e) => Kt(e) ? !Number.isNaN(Number(e)) : !1;
var Ni = Object.defineProperty, $i = Object.defineProperties, Li = Object.getOwnPropertyDescriptors, br = Object.getOwnPropertySymbols, Fi = Object.prototype.hasOwnProperty, Bi = Object.prototype.propertyIsEnumerable, yr = (e, t, n) => t in e ? Ni(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Di = (e, t) => {
  for (var n in t || (t = {}))
    Fi.call(t, n) && yr(e, n, t[n]);
  if (br)
    for (var n of br(t))
      Bi.call(t, n) && yr(e, n, t[n]);
  return e;
}, zi = (e, t) => $i(e, Li(t));
function Hi(e, t) {
  var n;
  const r = so();
  return Oa(() => {
    r.value = e();
  }, zi(Di({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Tn(r);
}
var _r;
const Q = typeof window < "u", ji = (e) => typeof e == "string", Eo = () => {
}, Vi = Q && ((_r = window?.navigator) == null ? void 0 : _r.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Fn(e) {
  return typeof e == "function" ? e() : h(e);
}
function Wi(e) {
  return e;
}
function bt(e) {
  return Ea() ? (Sa(e), !0) : !1;
}
function Ui(e, t = !0) {
  he() ? be(e) : t ? e() : pt(e);
}
function sd(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = S(!1);
  let a = null;
  function i() {
    a && (clearTimeout(a), a = null);
  }
  function s() {
    o.value = !1, i();
  }
  function l(...u) {
    i(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...u);
    }, Fn(t));
  }
  return r && (o.value = !0, Q && l()), bt(s), {
    isPending: Tn(o),
    start: l,
    stop: s
  };
}
function Se(e) {
  var t;
  const n = Fn(e);
  return (t = n?.$el) != null ? t : n;
}
const Qt = Q ? window : void 0;
function Je(...e) {
  let t, n, r, o;
  if (ji(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Qt) : [t, n, r, o] = e, !t)
    return Eo;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], i = () => {
    a.forEach((c) => c()), a.length = 0;
  }, s = (c, p, g, m) => (c.addEventListener(p, g, m), () => c.removeEventListener(p, g, m)), l = N(() => [Se(t), Fn(o)], ([c, p]) => {
    i(), c && a.push(...n.flatMap((g) => r.map((m) => s(c, g, m, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), i();
  };
  return bt(u), u;
}
let wr = !1;
function Gi(e, t, n = {}) {
  const { window: r = Qt, ignore: o = [], capture: a = !0, detectIframe: i = !1 } = n;
  if (!r)
    return;
  Vi && !wr && (wr = !0, Array.from(r.document.body.children).forEach((g) => g.addEventListener("click", Eo)));
  let s = !0;
  const l = (g) => o.some((m) => {
    if (typeof m == "string")
      return Array.from(r.document.querySelectorAll(m)).some((f) => f === g.target || g.composedPath().includes(f));
    {
      const f = Se(m);
      return f && (g.target === f || g.composedPath().includes(f));
    }
  }), c = [
    Je(r, "click", (g) => {
      const m = Se(e);
      if (!(!m || m === g.target || g.composedPath().includes(m))) {
        if (g.detail === 0 && (s = !l(g)), !s) {
          s = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: a }),
    Je(r, "pointerdown", (g) => {
      const m = Se(e);
      m && (s = !g.composedPath().includes(m) && !l(g));
    }, { passive: !0 }),
    i && Je(r, "blur", (g) => {
      var m;
      const f = Se(e);
      ((m = r.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !f?.contains(r.document.activeElement) && t(g);
    })
  ].filter(Boolean);
  return () => c.forEach((g) => g());
}
function So(e, t = !1) {
  const n = S(), r = () => n.value = !!e();
  return r(), Ui(r, t), n;
}
const Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Sr = "__vueuse_ssr_handlers__";
Er[Sr] = Er[Sr] || {};
var Or = Object.getOwnPropertySymbols, Ki = Object.prototype.hasOwnProperty, qi = Object.prototype.propertyIsEnumerable, Yi = (e, t) => {
  var n = {};
  for (var r in e)
    Ki.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Or)
    for (var r of Or(e))
      t.indexOf(r) < 0 && qi.call(e, r) && (n[r] = e[r]);
  return n;
};
function Zi(e, t, n = {}) {
  const r = n, { window: o = Qt } = r, a = Yi(r, ["window"]);
  let i;
  const s = So(() => o && "ResizeObserver" in o), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = N(() => Se(e), (p) => {
    l(), s.value && o && p && (i = new ResizeObserver(t), i.observe(p, a));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), u();
  };
  return bt(c), {
    isSupported: s,
    stop: c
  };
}
var Tr = Object.getOwnPropertySymbols, Ji = Object.prototype.hasOwnProperty, Qi = Object.prototype.propertyIsEnumerable, Xi = (e, t) => {
  var n = {};
  for (var r in e)
    Ji.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Tr)
    for (var r of Tr(e))
      t.indexOf(r) < 0 && Qi.call(e, r) && (n[r] = e[r]);
  return n;
};
function id(e, t, n = {}) {
  const r = n, { window: o = Qt } = r, a = Xi(r, ["window"]);
  let i;
  const s = So(() => o && "MutationObserver" in o), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = N(() => Se(e), (p) => {
    l(), s.value && o && p && (i = new MutationObserver(t), i.observe(p, a));
  }, { immediate: !0 }), c = () => {
    l(), u();
  };
  return bt(c), {
    isSupported: s,
    stop: c
  };
}
var Cr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Cr || (Cr = {}));
var el = Object.defineProperty, xr = Object.getOwnPropertySymbols, tl = Object.prototype.hasOwnProperty, nl = Object.prototype.propertyIsEnumerable, Pr = (e, t, n) => t in e ? el(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rl = (e, t) => {
  for (var n in t || (t = {}))
    tl.call(t, n) && Pr(e, n, t[n]);
  if (xr)
    for (var n of xr(t))
      nl.call(t, n) && Pr(e, n, t[n]);
  return e;
};
const ol = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
rl({
  linear: Wi
}, ol);
class Oo extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function al(e, t) {
  throw new Oo(`[${e}] ${t}`);
}
function ge(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Kt(e) ? new Oo(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Ar = {
  current: 0
}, Ir = S(0), To = 2e3, Rr = Symbol("elZIndexContextKey"), Co = Symbol("zIndexContextKey"), xo = (e) => {
  const t = he() ? F(Rr, Ar) : Ar, n = e || (he() ? F(Co, void 0) : void 0), r = _(() => {
    const i = h(n);
    return fe(i) ? i : To;
  }), o = _(() => r.value + Ir.value), a = () => (t.current++, Ir.value = t.current, o.value);
  return !Q && !F(Rr) && ge("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var sl = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const il = (e) => (t, n) => ll(t, n, h(e)), ll = (e, t, n) => bi(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), ul = (e) => {
  const t = _(() => h(e).name), n = Ta(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: il(e)
  };
}, Po = Symbol("localeContextKey"), cl = (e) => {
  const t = e || F(Po, S());
  return ul(_(() => t.value || sl));
}, Ao = "__epPropKey", M = (e) => e, fl = (e) => qt(e) && !!e[Ao], Xt = (e, t) => {
  if (!qt(e) || fl(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: i } = e, l = {
    type: a,
    required: !!r,
    validator: n || i ? (u) => {
      let c = !1, p = [];
      if (n && (p = Array.from(n), cr(e, "default") && p.push(o), c || (c = p.includes(u))), i && (c || (c = i(u))), !c && p.length > 0) {
        const g = [...new Set(p)].map((m) => JSON.stringify(m)).join(", ");
        Ca(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return c;
    } : void 0,
    [Ao]: !0
  };
  return cr(e, "default") && (l.default = o), l;
}, G = (e) => hn(Object.entries(e).map(([t, n]) => [
  t,
  Xt(n, t)
])), dl = ["", "default", "small", "large"], pl = Xt({
  type: String,
  values: dl,
  required: !1
}), Io = Symbol("size"), vl = () => {
  const e = F(Io, {});
  return _(() => h(e.size) || "");
}, Ro = Symbol("emptyValuesContextKey"), hl = "use-empty-values", gl = ["", void 0, null], ml = void 0, ld = G({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Pe(e) ? !e() : !e
  }
}), ud = (e, t) => {
  const n = he() ? F(Ro, S({})) : S({}), r = _(() => e.emptyValues || n.value.emptyValues || gl), o = _(() => Pe(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Pe(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : ml), a = (i) => r.value.includes(i);
  return r.value.includes(o.value) || ge(hl, "value-on-clear should be a value of empty-values"), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, kr = (e) => Object.keys(e), Wt = S();
function Bn(e, t = void 0) {
  const n = he() ? F(fo, Wt) : Wt;
  return e ? _(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
function cd(e, t) {
  const n = Bn(), r = le(e, _(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.namespace) || Mt;
  })), o = cl(_(() => {
    var s;
    return (s = n.value) == null ? void 0 : s.locale;
  })), a = xo(_(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.zIndex) || To;
  })), i = _(() => {
    var s;
    return h(t) || ((s = n.value) == null ? void 0 : s.size) || "";
  });
  return bl(_(() => h(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: i
  };
}
const bl = (e, t, n = !1) => {
  var r;
  const o = !!he(), a = o ? Bn() : void 0, i = (r = void 0) != null ? r : o ? Oe : void 0;
  if (!i) {
    ge("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const s = _(() => {
    const l = h(e);
    return a?.value ? yl(a.value, l) : l;
  });
  return i(fo, s), i(Po, _(() => s.value.locale)), i(po, _(() => s.value.namespace)), i(Co, _(() => s.value.zIndex)), i(Io, {
    size: _(() => s.value.size || "")
  }), i(Ro, _(() => ({
    emptyValues: s.value.emptyValues,
    valueOnClear: s.value.valueOnClear
  }))), (n || !Wt.value) && (Wt.value = s.value), s;
}, yl = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...kr(e), ...kr(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
};
var Z = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const _l = "utils/dom/style", ko = (e = "") => e.split(" ").filter((t) => !!t.trim()), fd = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, dd = (e, t) => {
  !e || !t.trim() || e.classList.add(...ko(t));
}, pd = (e, t) => {
  !e || !t.trim() || e.classList.remove(...ko(t));
}, vd = (e, t) => {
  var n;
  if (!Q || !e)
    return "";
  let r = xa(t);
  r === "float" && (r = "cssFloat");
  try {
    const o = e.style[r];
    if (o)
      return o;
    const a = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return a ? a[r] : "";
  } catch {
    return e.style[r];
  }
};
function gn(e, t = "px") {
  if (!e)
    return "";
  if (fe(e) || Mi(e))
    return `${e}${t}`;
  if (Kt(e))
    return e;
  ge(_l, "binding value must be a string or number");
}
const ot = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, hd = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), wl = (e) => (e.install = zt, e), El = G({
  size: {
    type: M([Number, String])
  },
  color: {
    type: String
  }
}), Sl = P({
  name: "ElIcon",
  inheritAttrs: !1
}), Ol = /* @__PURE__ */ P({
  ...Sl,
  props: El,
  setup(e) {
    const t = e, n = le("icon"), r = _(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: ki(o) ? void 0 : gn(o),
        "--color": a
      };
    });
    return (o, a) => (A(), B("i", mt({
      class: h(n).b(),
      style: h(r)
    }, o.$attrs), [
      K(o.$slots, "default")
    ], 16));
  }
});
var Tl = /* @__PURE__ */ Z(Ol, [["__file", "icon.vue"]]);
const Mr = ot(Tl);
/*! Element Plus Icons Vue v2.3.1 */
var Cl = /* @__PURE__ */ P({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), gd = Cl, xl = /* @__PURE__ */ P({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), md = xl, Pl = /* @__PURE__ */ P({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      H("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Al = Pl, Il = /* @__PURE__ */ P({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Rl = Il, kl = /* @__PURE__ */ P({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      H("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Ml = kl, Nl = /* @__PURE__ */ P({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Mo = Nl, $l = /* @__PURE__ */ P({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      H("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), bd = $l, Ll = /* @__PURE__ */ P({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Fl = Ll, Bl = /* @__PURE__ */ P({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), No = Bl, Dl = /* @__PURE__ */ P({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), yd = Dl, zl = /* @__PURE__ */ P({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), _d = zl, Hl = /* @__PURE__ */ P({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), jl = Hl, Vl = /* @__PURE__ */ P({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), wd = Vl, Wl = /* @__PURE__ */ P({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ul = Wl;
const Nr = M([
  String,
  Object,
  Function
]), Ed = {
  Close: Mo
}, Sd = {
  Close: Mo
}, Od = {
  success: jl,
  warning: Ul,
  error: Rl,
  info: Fl
}, Td = {
  validating: No,
  success: Al,
  error: Ml
}, Gl = G({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Dn = (e) => Ri(Gl, e), zn = Symbol("formContextKey"), Ut = Symbol("formItemContextKey"), mn = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Kl = Symbol("elIdInjection"), $o = () => he() ? F(Kl, mn) : mn, Lo = (e) => {
  const t = $o();
  !Q && t === mn && ge("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Pn();
  return Hi(() => h(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, ql = () => {
  const e = F(zn, void 0), t = F(Ut, void 0);
  return {
    form: e,
    formItem: t
  };
}, Cd = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = S(!1)), r || (r = S(!1));
  const o = S();
  let a;
  const i = _(() => {
    var s;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return be(() => {
    a = N([ce(e, "id"), n], ([s, l]) => {
      const u = s ?? (l ? void 0 : Lo().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Pa(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: i,
    inputId: o
  };
}, Fo = (e) => {
  const t = he();
  return _(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Yl = (e, t = {}) => {
  const n = S(void 0), r = t.prop ? n : Fo("size"), o = t.global ? n : vl(), a = t.form ? { size: void 0 } : F(zn, void 0), i = t.formItem ? { size: void 0 } : F(Ut, void 0);
  return _(() => r.value || h(e) || i?.size || a?.size || o.value || "");
}, Bo = (e) => {
  const t = Fo("disabled"), n = F(zn, void 0);
  return _(() => t.value || h(e) || n?.disabled || !1);
}, Ke = 4, Zl = {
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
}, Jl = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Hn = Symbol("scrollbarContextKey"), Ql = G({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Xl = "Thumb", eu = /* @__PURE__ */ P({
  __name: "thumb",
  props: Ql,
  setup(e) {
    const t = e, n = F(Hn), r = le("scrollbar");
    n || al(Xl, "can not inject scrollbar context");
    const o = S(), a = S(), i = S({}), s = S(!1);
    let l = !1, u = !1, c = Q ? document.onselectstart : null;
    const p = _(() => Zl[t.vertical ? "vertical" : "horizontal"]), g = _(() => Jl({
      size: t.size,
      move: t.move,
      bar: p.value
    })), m = _(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), f = (C) => {
      var T;
      if (C.stopPropagation(), C.ctrlKey || [1, 2].includes(C.button))
        return;
      (T = window.getSelection()) == null || T.removeAllRanges(), b(C);
      const x = C.currentTarget;
      x && (i.value[p.value.axis] = x[p.value.offset] - (C[p.value.client] - x.getBoundingClientRect()[p.value.direction]));
    }, d = (C) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const T = Math.abs(C.target.getBoundingClientRect()[p.value.direction] - C[p.value.client]), x = a.value[p.value.offset] / 2, k = (T - x) * 100 * m.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = k * n.wrapElement[p.value.scrollSize] / 100;
    }, b = (C) => {
      C.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", v), document.addEventListener("mouseup", E), c = document.onselectstart, document.onselectstart = () => !1;
    }, v = (C) => {
      if (!o.value || !a.value || l === !1)
        return;
      const T = i.value[p.value.axis];
      if (!T)
        return;
      const x = (o.value.getBoundingClientRect()[p.value.direction] - C[p.value.client]) * -1, k = a.value[p.value.offset] - T, R = (x - k) * 100 * m.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = R * n.wrapElement[p.value.scrollSize] / 100;
    }, E = () => {
      l = !1, i.value[p.value.axis] = 0, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", E), y(), u && (s.value = !1);
    }, I = () => {
      u = !1, s.value = !!t.size;
    }, w = () => {
      u = !0, s.value = l;
    };
    Ce(() => {
      y(), document.removeEventListener("mouseup", E);
    });
    const y = () => {
      document.onselectstart !== c && (document.onselectstart = c);
    };
    return Je(ce(n, "scrollbarElement"), "mousemove", I), Je(ce(n, "scrollbarElement"), "mouseleave", w), (C, T) => (A(), Y(lo, {
      name: h(r).b("fade"),
      persisted: ""
    }, {
      default: J(() => [
        Cn(H("div", {
          ref_key: "instance",
          ref: o,
          class: pe([h(r).e("bar"), h(r).is(h(p).key)]),
          onMousedown: d
        }, [
          H("div", {
            ref_key: "thumb",
            ref: a,
            class: pe(h(r).e("thumb")),
            style: Ht(h(g)),
            onMousedown: f
          }, null, 38)
        ], 34), [
          [io, C.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var $r = /* @__PURE__ */ Z(eu, [["__file", "thumb.vue"]]);
const tu = G({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), nu = /* @__PURE__ */ P({
  __name: "bar",
  props: tu,
  setup(e, { expose: t }) {
    const n = e, r = F(Hn), o = S(0), a = S(0), i = S(""), s = S(""), l = S(1), u = S(1);
    return t({
      handleScroll: (g) => {
        if (g) {
          const m = g.offsetHeight - Ke, f = g.offsetWidth - Ke;
          a.value = g.scrollTop * 100 / m * l.value, o.value = g.scrollLeft * 100 / f * u.value;
        }
      },
      update: () => {
        const g = r?.wrapElement;
        if (!g)
          return;
        const m = g.offsetHeight - Ke, f = g.offsetWidth - Ke, d = m ** 2 / g.scrollHeight, b = f ** 2 / g.scrollWidth, v = Math.max(d, n.minSize), E = Math.max(b, n.minSize);
        l.value = d / (m - d) / (v / (m - v)), u.value = b / (f - b) / (E / (f - E)), s.value = v + Ke < m ? `${v}px` : "", i.value = E + Ke < f ? `${E}px` : "";
      }
    }), (g, m) => (A(), B(xn, null, [
      de($r, {
        move: o.value,
        ratio: u.value,
        size: i.value,
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      de($r, {
        move: a.value,
        ratio: l.value,
        size: s.value,
        vertical: "",
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var ru = /* @__PURE__ */ Z(nu, [["__file", "bar.vue"]]);
const ou = G({
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
    type: M([String, Object, Array]),
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
  ...Dn(["ariaLabel", "ariaOrientation"])
}), au = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(fe)
}, bn = "ElScrollbar", su = P({
  name: bn
}), iu = /* @__PURE__ */ P({
  ...su,
  props: ou,
  emits: au,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = le("scrollbar");
    let a, i, s = 0, l = 0;
    const u = S(), c = S(), p = S(), g = S(), m = _(() => {
      const y = {};
      return r.height && (y.height = gn(r.height)), r.maxHeight && (y.maxHeight = gn(r.maxHeight)), [r.wrapStyle, y];
    }), f = _(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), d = _(() => [o.e("view"), r.viewClass]), b = () => {
      var y;
      c.value && ((y = g.value) == null || y.handleScroll(c.value), s = c.value.scrollTop, l = c.value.scrollLeft, n("scroll", {
        scrollTop: c.value.scrollTop,
        scrollLeft: c.value.scrollLeft
      }));
    };
    function v(y, C) {
      qt(y) ? c.value.scrollTo(y) : fe(y) && fe(C) && c.value.scrollTo(y, C);
    }
    const E = (y) => {
      if (!fe(y)) {
        ge(bn, "value must be a number");
        return;
      }
      c.value.scrollTop = y;
    }, I = (y) => {
      if (!fe(y)) {
        ge(bn, "value must be a number");
        return;
      }
      c.value.scrollLeft = y;
    }, w = () => {
      var y;
      (y = g.value) == null || y.update();
    };
    return N(() => r.noresize, (y) => {
      y ? (a?.(), i?.()) : ({ stop: a } = Zi(p, w), i = Je("resize", w));
    }, { immediate: !0 }), N(() => [r.maxHeight, r.height], () => {
      r.native || pt(() => {
        var y;
        w(), c.value && ((y = g.value) == null || y.handleScroll(c.value));
      });
    }), Oe(Hn, uo({
      scrollbarElement: u,
      wrapElement: c
    })), Aa(() => {
      c.value && (c.value.scrollTop = s, c.value.scrollLeft = l);
    }), be(() => {
      r.native || pt(() => {
        w();
      });
    }), Ia(() => w()), t({
      wrapRef: c,
      update: w,
      scrollTo: v,
      setScrollTop: E,
      setScrollLeft: I,
      handleScroll: b
    }), (y, C) => (A(), B("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: pe(h(o).b())
    }, [
      H("div", {
        ref_key: "wrapRef",
        ref: c,
        class: pe(h(f)),
        style: Ht(h(m)),
        tabindex: y.tabindex,
        onScroll: b
      }, [
        (A(), Y(kt(y.tag), {
          id: y.id,
          ref_key: "resizeRef",
          ref: p,
          class: pe(h(d)),
          style: Ht(y.viewStyle),
          role: y.role,
          "aria-label": y.ariaLabel,
          "aria-orientation": y.ariaOrientation
        }, {
          default: J(() => [
            K(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      y.native ? He("v-if", !0) : (A(), Y(ru, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: y.always,
        "min-size": y.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var lu = /* @__PURE__ */ Z(iu, [["__file", "scrollbar.vue"]]);
const xd = ot(lu), jn = Symbol("popper"), Do = Symbol("popperContent"), uu = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], zo = G({
  role: {
    type: String,
    values: uu,
    default: "tooltip"
  }
}), cu = P({
  name: "ElPopper",
  inheritAttrs: !1
}), fu = /* @__PURE__ */ P({
  ...cu,
  props: zo,
  setup(e, { expose: t }) {
    const n = e, r = S(), o = S(), a = S(), i = S(), s = _(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: i,
      role: s
    };
    return t(l), Oe(jn, l), (u, c) => K(u.$slots, "default");
  }
});
var du = /* @__PURE__ */ Z(fu, [["__file", "popper.vue"]]);
const Ho = G({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), pu = P({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), vu = /* @__PURE__ */ P({
  ...pu,
  props: Ho,
  setup(e, { expose: t }) {
    const n = e, r = le("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: i } = F(Do, void 0);
    return N(() => n.arrowOffset, (s) => {
      o.value = s;
    }), Ce(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (s, l) => (A(), B("span", {
      ref_key: "arrowRef",
      ref: a,
      class: pe(h(r).e("arrow")),
      style: Ht(h(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var hu = /* @__PURE__ */ Z(vu, [["__file", "arrow.vue"]]);
const jo = G({
  virtualRef: {
    type: M(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: M(Function)
  },
  onMouseleave: {
    type: M(Function)
  },
  onClick: {
    type: M(Function)
  },
  onKeydown: {
    type: M(Function)
  },
  onFocus: {
    type: M(Function)
  },
  onBlur: {
    type: M(Function)
  },
  onContextmenu: {
    type: M(Function)
  },
  id: String,
  open: Boolean
}), Vo = Symbol("elForwardRef"), gu = (e) => {
  Oe(Vo, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, mu = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), yn = (e) => {
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
}, sn = "ElOnlyChild", bu = P({
  name: sn,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = F(Vo), a = mu((r = o?.setForwardRef) != null ? r : zt);
    return () => {
      var i;
      const s = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return ge(sn, "requires exact only one valid child."), null;
      const l = Wo(s);
      return l ? Cn(Ra(l, n), [[a]]) : (ge(sn, "no valid child node found"), null);
    };
  }
});
function Wo(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (qt(n))
      switch (n.type) {
        case ka:
          continue;
        case co:
        case "svg":
          return Lr(n);
        case xn:
          return Wo(n.children);
        default:
          return n;
      }
    return Lr(n);
  }
  return null;
}
function Lr(e) {
  const t = le("only-child");
  return de("span", {
    class: t.e("content")
  }, [e]);
}
const yu = P({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), _u = /* @__PURE__ */ P({
  ...yu,
  props: jo,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = F(jn, void 0);
    gu(o);
    const a = _(() => s.value ? n.id : void 0), i = _(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = _(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = _(() => s.value ? `${n.open}` : void 0);
    let u;
    const c = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return be(() => {
      N(() => n.virtualRef, (p) => {
        p && (o.value = Se(p));
      }, {
        immediate: !0
      }), N(o, (p, g) => {
        u?.(), u = void 0, De(p) && (c.forEach((m) => {
          var f;
          const d = n[m];
          d && (p.addEventListener(m.slice(2).toLowerCase(), d), (f = g?.removeEventListener) == null || f.call(g, m.slice(2).toLowerCase(), d));
        }), yn(p) && (u = N([a, i, s, l], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((f, d) => {
            Ln(m[d]) ? p.removeAttribute(f) : p.setAttribute(f, m[d]);
          });
        }, { immediate: !0 }))), De(g) && yn(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => g.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), Ce(() => {
      if (u?.(), u = void 0, o.value && De(o.value)) {
        const p = o.value;
        c.forEach((g) => {
          const m = n[g];
          m && p.removeEventListener(g.slice(2).toLowerCase(), m);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, g) => p.virtualTriggering ? He("v-if", !0) : (A(), Y(h(bu), mt({ key: 0 }, p.$attrs, {
      "aria-controls": h(a),
      "aria-describedby": h(i),
      "aria-expanded": h(l),
      "aria-haspopup": h(s)
    }), {
      default: J(() => [
        K(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var wu = /* @__PURE__ */ Z(_u, [["__file", "trigger.vue"]]);
const ln = "focus-trap.focus-after-trapped", un = "focus-trap.focus-after-released", Eu = "focus-trap.focusout-prevented", Fr = {
  cancelable: !0,
  bubbles: !1
}, Su = {
  cancelable: !0,
  bubbles: !1
}, Br = "focusAfterTrapped", Dr = "focusAfterReleased", Ou = Symbol("elFocusTrap"), Vn = S(), en = S(0), Wn = S(0);
let Ot = 0;
const Uo = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, zr = (e, t) => {
  for (const n of e)
    if (!Tu(n, t))
      return n;
}, Tu = (e, t) => {
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
}, Cu = (e) => {
  const t = Uo(e), n = zr(t, e), r = zr(t.reverse(), e);
  return [n, r];
}, xu = (e) => e instanceof HTMLInputElement && "select" in e, we = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    De(e) && !yn(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Wn.value = window.performance.now(), e !== n && xu(e) && t && e.select(), De(e) && r && e.removeAttribute("tabindex");
  }
};
function Hr(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const Pu = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Hr(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Hr(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, Au = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (we(r, t), document.activeElement !== n)
      return;
}, jr = Pu(), Iu = () => en.value > Wn.value, Tt = () => {
  Vn.value = "pointer", en.value = window.performance.now();
}, Vr = () => {
  Vn.value = "keyboard", en.value = window.performance.now();
}, Ru = () => (be(() => {
  Ot === 0 && (document.addEventListener("mousedown", Tt), document.addEventListener("touchstart", Tt), document.addEventListener("keydown", Vr)), Ot++;
}), Ce(() => {
  Ot--, Ot <= 0 && (document.removeEventListener("mousedown", Tt), document.removeEventListener("touchstart", Tt), document.removeEventListener("keydown", Vr));
}), {
  focusReason: Vn,
  lastUserFocusTimestamp: en,
  lastAutomatedFocusTimestamp: Wn
}), Ct = (e) => new CustomEvent(Eu, {
  ...Su,
  detail: e
}), ut = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
let Ye = [];
const Wr = (e) => {
  e.code === ut.esc && Ye.forEach((t) => t(e));
}, ku = (e) => {
  be(() => {
    Ye.length === 0 && document.addEventListener("keydown", Wr), Q && Ye.push(e);
  }), Ce(() => {
    Ye = Ye.filter((t) => t !== e), Ye.length === 0 && Q && document.removeEventListener("keydown", Wr);
  });
}, Mu = P({
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
    Br,
    Dr,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = S();
    let r, o;
    const { focusReason: a } = Ru();
    ku((f) => {
      e.trapped && !i.paused && t("release-requested", f);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, s = (f) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { code: d, altKey: b, ctrlKey: v, metaKey: E, currentTarget: I, shiftKey: w } = f, { loop: y } = e, C = d === ut.tab && !b && !v && !E, T = document.activeElement;
      if (C && T) {
        const x = I, [k, R] = Cu(x);
        if (k && R) {
          if (!w && T === R) {
            const L = Ct({
              focusReason: a.value
            });
            t("focusout-prevented", L), L.defaultPrevented || (f.preventDefault(), y && we(k, !0));
          } else if (w && [k, x].includes(T)) {
            const L = Ct({
              focusReason: a.value
            });
            t("focusout-prevented", L), L.defaultPrevented || (f.preventDefault(), y && we(R, !0));
          }
        } else if (T === x) {
          const L = Ct({
            focusReason: a.value
          });
          t("focusout-prevented", L), L.defaultPrevented || f.preventDefault();
        }
      }
    };
    Oe(Ou, {
      focusTrapRef: n,
      onKeydown: s
    }), N(() => e.focusTrapEl, (f) => {
      f && (n.value = f);
    }, { immediate: !0 }), N([n], ([f], [d]) => {
      f && (f.addEventListener("keydown", s), f.addEventListener("focusin", c), f.addEventListener("focusout", p)), d && (d.removeEventListener("keydown", s), d.removeEventListener("focusin", c), d.removeEventListener("focusout", p));
    });
    const l = (f) => {
      t(Br, f);
    }, u = (f) => t(Dr, f), c = (f) => {
      const d = h(n);
      if (!d)
        return;
      const b = f.target, v = f.relatedTarget, E = b && d.contains(b);
      e.trapped || v && d.contains(v) || (r = v), E && t("focusin", f), !i.paused && e.trapped && (E ? o = b : we(o, !0));
    }, p = (f) => {
      const d = h(n);
      if (!(i.paused || !d))
        if (e.trapped) {
          const b = f.relatedTarget;
          !Ln(b) && !d.contains(b) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const v = Ct({
                focusReason: a.value
              });
              t("focusout-prevented", v), v.defaultPrevented || we(o, !0);
            }
          }, 0);
        } else {
          const b = f.target;
          b && d.contains(b) || t("focusout", f);
        }
    };
    async function g() {
      await pt();
      const f = h(n);
      if (f) {
        jr.push(i);
        const d = f.contains(document.activeElement) ? r : document.activeElement;
        if (r = d, !f.contains(d)) {
          const v = new Event(ln, Fr);
          f.addEventListener(ln, l), f.dispatchEvent(v), v.defaultPrevented || pt(() => {
            let E = e.focusStartEl;
            Kt(E) || (we(E), document.activeElement !== E && (E = "first")), E === "first" && Au(Uo(f), !0), (document.activeElement === d || E === "container") && we(f);
          });
        }
      }
    }
    function m() {
      const f = h(n);
      if (f) {
        f.removeEventListener(ln, l);
        const d = new CustomEvent(un, {
          ...Fr,
          detail: {
            focusReason: a.value
          }
        });
        f.addEventListener(un, u), f.dispatchEvent(d), !d.defaultPrevented && (a.value == "keyboard" || !Iu() || f.contains(document.activeElement)) && we(r ?? document.body), f.removeEventListener(un, u), jr.remove(i);
      }
    }
    return be(() => {
      e.trapped && g(), N(() => e.trapped, (f) => {
        f ? g() : m();
      });
    }), Ce(() => {
      e.trapped && m(), n.value && (n.value.removeEventListener("keydown", s), n.value.removeEventListener("focusin", c), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: s
    };
  }
});
function Nu(e, t, n, r, o, a) {
  return K(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var $u = /* @__PURE__ */ Z(Mu, [["render", Nu], ["__file", "focus-trap.vue"]]), X = "top", se = "bottom", ie = "right", ee = "left", Un = "auto", yt = [X, se, ie, ee], Qe = "start", ht = "end", Lu = "clippingParents", Go = "viewport", lt = "popper", Fu = "reference", Ur = yt.reduce(function(e, t) {
  return e.concat([t + "-" + Qe, t + "-" + ht]);
}, []), Gn = [].concat(yt, [Un]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qe, t + "-" + ht]);
}, []), Bu = "beforeRead", Du = "read", zu = "afterRead", Hu = "beforeMain", ju = "main", Vu = "afterMain", Wu = "beforeWrite", Uu = "write", Gu = "afterWrite", Ku = [Bu, Du, zu, Hu, ju, Vu, Wu, Uu, Gu];
function me(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function re(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ve(e) {
  var t = re(e).Element;
  return e instanceof t || e instanceof Element;
}
function ae(e) {
  var t = re(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Kn(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function qu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !ae(a) || !me(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function Yu(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !ae(o) || !me(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Ko = { name: "applyStyles", enabled: !0, phase: "write", fn: qu, effect: Yu, requires: ["computeStyles"] };
function ve(e) {
  return e.split("-")[0];
}
var ze = Math.max, Gt = Math.min, Xe = Math.round;
function _n() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function qo() {
  return !/^((?!chrome|android).)*safari/i.test(_n());
}
function et(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && ae(e) && (o = e.offsetWidth > 0 && Xe(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Xe(r.height) / e.offsetHeight || 1);
  var i = Ve(e) ? re(e) : window, s = i.visualViewport, l = !qo() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / a, p = r.width / o, g = r.height / a;
  return { width: p, height: g, top: c, right: u + p, bottom: c + g, left: u, x: u, y: c };
}
function qn(e) {
  var t = et(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Yo(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Kn(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Te(e) {
  return re(e).getComputedStyle(e);
}
function Zu(e) {
  return ["table", "td", "th"].indexOf(me(e)) >= 0;
}
function Re(e) {
  return ((Ve(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function tn(e) {
  return me(e) === "html" ? e : e.assignedSlot || e.parentNode || (Kn(e) ? e.host : null) || Re(e);
}
function Gr(e) {
  return !ae(e) || Te(e).position === "fixed" ? null : e.offsetParent;
}
function Ju(e) {
  var t = /firefox/i.test(_n()), n = /Trident/i.test(_n());
  if (n && ae(e)) {
    var r = Te(e);
    if (r.position === "fixed") return null;
  }
  var o = tn(e);
  for (Kn(o) && (o = o.host); ae(o) && ["html", "body"].indexOf(me(o)) < 0; ) {
    var a = Te(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function _t(e) {
  for (var t = re(e), n = Gr(e); n && Zu(n) && Te(n).position === "static"; ) n = Gr(n);
  return n && (me(n) === "html" || me(n) === "body" && Te(n).position === "static") ? t : n || Ju(e) || t;
}
function Yn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ct(e, t, n) {
  return ze(e, Gt(t, n));
}
function Qu(e, t, n) {
  var r = ct(e, t, n);
  return r > n ? n : r;
}
function Zo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Jo(e) {
  return Object.assign({}, Zo(), e);
}
function Qo(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Xu = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Jo(typeof e != "number" ? e : Qo(e, yt));
};
function ec(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets, s = ve(n.placement), l = Yn(s), u = [ee, ie].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!a || !i)) {
    var p = Xu(o.padding, n), g = qn(a), m = l === "y" ? X : ee, f = l === "y" ? se : ie, d = n.rects.reference[c] + n.rects.reference[l] - i[l] - n.rects.popper[c], b = i[l] - n.rects.reference[l], v = _t(a), E = v ? l === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, I = d / 2 - b / 2, w = p[m], y = E - g[c] - p[f], C = E / 2 - g[c] / 2 + I, T = ct(w, C, y), x = l;
    n.modifiersData[r] = (t = {}, t[x] = T, t.centerOffset = T - C, t);
  }
}
function tc(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Yo(t.elements.popper, o) && (t.elements.arrow = o));
}
var nc = { name: "arrow", enabled: !0, phase: "main", fn: ec, effect: tc, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function tt(e) {
  return e.split("-")[1];
}
var rc = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function oc(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Xe(n * o) / o || 0, y: Xe(r * o) / o || 0 };
}
function Kr(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, g = i.x, m = g === void 0 ? 0 : g, f = i.y, d = f === void 0 ? 0 : f, b = typeof c == "function" ? c({ x: m, y: d }) : { x: m, y: d };
  m = b.x, d = b.y;
  var v = i.hasOwnProperty("x"), E = i.hasOwnProperty("y"), I = ee, w = X, y = window;
  if (u) {
    var C = _t(n), T = "clientHeight", x = "clientWidth";
    if (C === re(n) && (C = Re(n), Te(C).position !== "static" && s === "absolute" && (T = "scrollHeight", x = "scrollWidth")), C = C, o === X || (o === ee || o === ie) && a === ht) {
      w = se;
      var k = p && C === y && y.visualViewport ? y.visualViewport.height : C[T];
      d -= k - r.height, d *= l ? 1 : -1;
    }
    if (o === ee || (o === X || o === se) && a === ht) {
      I = ie;
      var R = p && C === y && y.visualViewport ? y.visualViewport.width : C[x];
      m -= R - r.width, m *= l ? 1 : -1;
    }
  }
  var D = Object.assign({ position: s }, u && rc), L = c === !0 ? oc({ x: m, y: d }, re(n)) : { x: m, y: d };
  if (m = L.x, d = L.y, l) {
    var $;
    return Object.assign({}, D, ($ = {}, $[w] = E ? "0" : "", $[I] = v ? "0" : "", $.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + d + "px)" : "translate3d(" + m + "px, " + d + "px, 0)", $));
  }
  return Object.assign({}, D, (t = {}, t[w] = E ? d + "px" : "", t[I] = v ? m + "px" : "", t.transform = "", t));
}
function ac(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, i = a === void 0 ? !0 : a, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = { placement: ve(t.placement), variation: tt(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Kr(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Kr(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Xo = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: ac, data: {} }, xt = { passive: !0 };
function sc(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, i = r.resize, s = i === void 0 ? !0 : i, l = re(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, xt);
  }), s && l.addEventListener("resize", n.update, xt), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, xt);
    }), s && l.removeEventListener("resize", n.update, xt);
  };
}
var ea = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: sc, data: {} }, ic = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Nt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ic[t];
  });
}
var lc = { start: "end", end: "start" };
function qr(e) {
  return e.replace(/start|end/g, function(t) {
    return lc[t];
  });
}
function Zn(e) {
  var t = re(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Jn(e) {
  return et(Re(e)).left + Zn(e).scrollLeft;
}
function uc(e, t) {
  var n = re(e), r = Re(e), o = n.visualViewport, a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var u = qo();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: i, x: s + Jn(e), y: l };
}
function cc(e) {
  var t, n = Re(e), r = Zn(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = ze(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = ze(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Jn(e), l = -r.scrollTop;
  return Te(o || n).direction === "rtl" && (s += ze(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: i, x: s, y: l };
}
function Qn(e) {
  var t = Te(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function ta(e) {
  return ["html", "body", "#document"].indexOf(me(e)) >= 0 ? e.ownerDocument.body : ae(e) && Qn(e) ? e : ta(tn(e));
}
function ft(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ta(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = re(r), i = o ? [a].concat(a.visualViewport || [], Qn(r) ? r : []) : r, s = t.concat(i);
  return o ? s : s.concat(ft(tn(i)));
}
function wn(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function fc(e, t) {
  var n = et(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Yr(e, t, n) {
  return t === Go ? wn(uc(e, n)) : Ve(t) ? fc(t, n) : wn(cc(Re(e)));
}
function dc(e) {
  var t = ft(tn(e)), n = ["absolute", "fixed"].indexOf(Te(e).position) >= 0, r = n && ae(e) ? _t(e) : e;
  return Ve(r) ? t.filter(function(o) {
    return Ve(o) && Yo(o, r) && me(o) !== "body";
  }) : [];
}
function pc(e, t, n, r) {
  var o = t === "clippingParents" ? dc(e) : [].concat(t), a = [].concat(o, [n]), i = a[0], s = a.reduce(function(l, u) {
    var c = Yr(e, u, r);
    return l.top = ze(c.top, l.top), l.right = Gt(c.right, l.right), l.bottom = Gt(c.bottom, l.bottom), l.left = ze(c.left, l.left), l;
  }, Yr(e, i, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function na(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ve(r) : null, a = r ? tt(r) : null, i = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case X:
      l = { x: i, y: t.y - n.height };
      break;
    case se:
      l = { x: i, y: t.y + t.height };
      break;
    case ie:
      l = { x: t.x + t.width, y: s };
      break;
    case ee:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Yn(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Qe:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case ht:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function gt(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, i = a === void 0 ? e.strategy : a, s = n.boundary, l = s === void 0 ? Lu : s, u = n.rootBoundary, c = u === void 0 ? Go : u, p = n.elementContext, g = p === void 0 ? lt : p, m = n.altBoundary, f = m === void 0 ? !1 : m, d = n.padding, b = d === void 0 ? 0 : d, v = Jo(typeof b != "number" ? b : Qo(b, yt)), E = g === lt ? Fu : lt, I = e.rects.popper, w = e.elements[f ? E : g], y = pc(Ve(w) ? w : w.contextElement || Re(e.elements.popper), l, c, i), C = et(e.elements.reference), T = na({ reference: C, element: I, placement: o }), x = wn(Object.assign({}, I, T)), k = g === lt ? x : C, R = { top: y.top - k.top + v.top, bottom: k.bottom - y.bottom + v.bottom, left: y.left - k.left + v.left, right: k.right - y.right + v.right }, D = e.modifiersData.offset;
  if (g === lt && D) {
    var L = D[o];
    Object.keys(R).forEach(function($) {
      var oe = [ie, se].indexOf($) >= 0 ? 1 : -1, V = [X, se].indexOf($) >= 0 ? "y" : "x";
      R[$] += L[V] * oe;
    });
  }
  return R;
}
function vc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, i = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Gn : l, c = tt(r), p = c ? s ? Ur : Ur.filter(function(f) {
    return tt(f) === c;
  }) : yt, g = p.filter(function(f) {
    return u.indexOf(f) >= 0;
  });
  g.length === 0 && (g = p);
  var m = g.reduce(function(f, d) {
    return f[d] = gt(e, { placement: d, boundary: o, rootBoundary: a, padding: i })[ve(d)], f;
  }, {});
  return Object.keys(m).sort(function(f, d) {
    return m[f] - m[d];
  });
}
function hc(e) {
  if (ve(e) === Un) return [];
  var t = Nt(e);
  return [qr(e), t, qr(t)];
}
function gc(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, i = n.altAxis, s = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, g = n.altBoundary, m = n.flipVariations, f = m === void 0 ? !0 : m, d = n.allowedAutoPlacements, b = t.options.placement, v = ve(b), E = v === b, I = l || (E || !f ? [Nt(b)] : hc(b)), w = [b].concat(I).reduce(function(ke, ye) {
      return ke.concat(ve(ye) === Un ? vc(t, { placement: ye, boundary: c, rootBoundary: p, padding: u, flipVariations: f, allowedAutoPlacements: d }) : ye);
    }, []), y = t.rects.reference, C = t.rects.popper, T = /* @__PURE__ */ new Map(), x = !0, k = w[0], R = 0; R < w.length; R++) {
      var D = w[R], L = ve(D), $ = tt(D) === Qe, oe = [X, se].indexOf(L) >= 0, V = oe ? "width" : "height", z = gt(t, { placement: D, boundary: c, rootBoundary: p, altBoundary: g, padding: u }), O = oe ? $ ? ie : ee : $ ? se : X;
      y[V] > C[V] && (O = Nt(O));
      var W = Nt(O), te = [];
      if (a && te.push(z[L] <= 0), s && te.push(z[O] <= 0, z[W] <= 0), te.every(function(ke) {
        return ke;
      })) {
        k = D, x = !1;
        break;
      }
      T.set(D, te);
    }
    if (x) for (var Ue = f ? 3 : 1, nn = function(ke) {
      var ye = w.find(function(Et) {
        var st = T.get(Et);
        if (st) return st.slice(0, ke).every(function(Ge) {
          return Ge;
        });
      });
      if (ye) return k = ye, "break";
    }, at = Ue; at > 0; at--) {
      var wt = nn(at);
      if (wt === "break") break;
    }
    t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0);
  }
}
var mc = { name: "flip", enabled: !0, phase: "main", fn: gc, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Zr(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Jr(e) {
  return [X, ie, se, ee].some(function(t) {
    return e[t] >= 0;
  });
}
function bc(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = gt(t, { elementContext: "reference" }), s = gt(t, { altBoundary: !0 }), l = Zr(i, r), u = Zr(s, o, a), c = Jr(l), p = Jr(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: c, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": p });
}
var yc = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: bc };
function _c(e, t, n) {
  var r = ve(e), o = [ee, X].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [ee, ie].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s };
}
function wc(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, i = Gn.reduce(function(c, p) {
    return c[p] = _c(p, t.rects, a), c;
  }, {}), s = i[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
var Ec = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: wc };
function Sc(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = na({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var ra = { name: "popperOffsets", enabled: !0, phase: "read", fn: Sc, data: {} };
function Oc(e) {
  return e === "x" ? "y" : "x";
}
function Tc(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, i = n.altAxis, s = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, g = n.tether, m = g === void 0 ? !0 : g, f = n.tetherOffset, d = f === void 0 ? 0 : f, b = gt(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: c }), v = ve(t.placement), E = tt(t.placement), I = !E, w = Yn(v), y = Oc(w), C = t.modifiersData.popperOffsets, T = t.rects.reference, x = t.rects.popper, k = typeof d == "function" ? d(Object.assign({}, t.rects, { placement: t.placement })) : d, R = typeof k == "number" ? { mainAxis: k, altAxis: k } : Object.assign({ mainAxis: 0, altAxis: 0 }, k), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = { x: 0, y: 0 };
  if (C) {
    if (a) {
      var $, oe = w === "y" ? X : ee, V = w === "y" ? se : ie, z = w === "y" ? "height" : "width", O = C[w], W = O + b[oe], te = O - b[V], Ue = m ? -x[z] / 2 : 0, nn = E === Qe ? T[z] : x[z], at = E === Qe ? -x[z] : -T[z], wt = t.elements.arrow, ke = m && wt ? qn(wt) : { width: 0, height: 0 }, ye = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Zo(), Et = ye[oe], st = ye[V], Ge = ct(0, T[z], ke[z]), va = I ? T[z] / 2 - Ue - Ge - Et - R.mainAxis : nn - Ge - Et - R.mainAxis, ha = I ? -T[z] / 2 + Ue + Ge + st + R.mainAxis : at + Ge + st + R.mainAxis, rn = t.elements.arrow && _t(t.elements.arrow), ga = rn ? w === "y" ? rn.clientTop || 0 : rn.clientLeft || 0 : 0, tr = ($ = D?.[w]) != null ? $ : 0, ma = O + va - tr - ga, ba = O + ha - tr, nr = ct(m ? Gt(W, ma) : W, O, m ? ze(te, ba) : te);
      C[w] = nr, L[w] = nr - O;
    }
    if (s) {
      var rr, ya = w === "x" ? X : ee, _a = w === "x" ? se : ie, Me = C[y], St = y === "y" ? "height" : "width", or = Me + b[ya], ar = Me - b[_a], on = [X, ee].indexOf(v) !== -1, sr = (rr = D?.[y]) != null ? rr : 0, ir = on ? or : Me - T[St] - x[St] - sr + R.altAxis, lr = on ? Me + T[St] + x[St] - sr - R.altAxis : ar, ur = m && on ? Qu(ir, Me, lr) : ct(m ? ir : or, Me, m ? lr : ar);
      C[y] = ur, L[y] = ur - Me;
    }
    t.modifiersData[r] = L;
  }
}
var Cc = { name: "preventOverflow", enabled: !0, phase: "main", fn: Tc, requiresIfExists: ["offset"] };
function xc(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Pc(e) {
  return e === re(e) || !ae(e) ? Zn(e) : xc(e);
}
function Ac(e) {
  var t = e.getBoundingClientRect(), n = Xe(t.width) / e.offsetWidth || 1, r = Xe(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Ic(e, t, n) {
  n === void 0 && (n = !1);
  var r = ae(t), o = ae(t) && Ac(t), a = Re(t), i = et(e, o, n), s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((me(t) !== "body" || Qn(a)) && (s = Pc(t)), ae(t) ? (l = et(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Jn(a))), { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
function Rc(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function kc(e) {
  var t = Rc(e);
  return Ku.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Mc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Nc(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Qr = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Xr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Xn(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Qr : o;
  return function(i, s, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Qr, a), modifiersData: {}, elements: { reference: i, popper: s }, attributes: {}, styles: {} }, c = [], p = !1, g = { state: u, setOptions: function(d) {
      var b = typeof d == "function" ? d(u.options) : d;
      f(), u.options = Object.assign({}, a, u.options, b), u.scrollParents = { reference: Ve(i) ? ft(i) : i.contextElement ? ft(i.contextElement) : [], popper: ft(s) };
      var v = kc(Nc([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = v.filter(function(E) {
        return E.enabled;
      }), m(), g.update();
    }, forceUpdate: function() {
      if (!p) {
        var d = u.elements, b = d.reference, v = d.popper;
        if (Xr(b, v)) {
          u.rects = { reference: Ic(b, _t(v), u.options.strategy === "fixed"), popper: qn(v) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
            return u.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var E = 0; E < u.orderedModifiers.length; E++) {
            if (u.reset === !0) {
              u.reset = !1, E = -1;
              continue;
            }
            var I = u.orderedModifiers[E], w = I.fn, y = I.options, C = y === void 0 ? {} : y, T = I.name;
            typeof w == "function" && (u = w({ state: u, options: C, name: T, instance: g }) || u);
          }
        }
      }
    }, update: Mc(function() {
      return new Promise(function(d) {
        g.forceUpdate(), d(u);
      });
    }), destroy: function() {
      f(), p = !0;
    } };
    if (!Xr(i, s)) return g;
    g.setOptions(l).then(function(d) {
      !p && l.onFirstUpdate && l.onFirstUpdate(d);
    });
    function m() {
      u.orderedModifiers.forEach(function(d) {
        var b = d.name, v = d.options, E = v === void 0 ? {} : v, I = d.effect;
        if (typeof I == "function") {
          var w = I({ state: u, name: b, instance: g, options: E }), y = function() {
          };
          c.push(w || y);
        }
      });
    }
    function f() {
      c.forEach(function(d) {
        return d();
      }), c = [];
    }
    return g;
  };
}
Xn();
var $c = [ea, ra, Xo, Ko];
Xn({ defaultModifiers: $c });
var Lc = [ea, ra, Xo, Ko, Ec, mc, Cc, nc, yc], Fc = Xn({ defaultModifiers: Lc });
const Bc = ["fixed", "absolute"], Dc = G({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: M(Array),
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
    values: Gn,
    default: "bottom"
  },
  popperOptions: {
    type: M(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Bc,
    default: "absolute"
  }
}), oa = G({
  ...Dc,
  id: String,
  style: {
    type: M([String, Array, Object])
  },
  className: {
    type: M([String, Array, Object])
  },
  effect: {
    type: M(String),
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
    type: M([String, Array, Object])
  },
  popperStyle: {
    type: M([String, Array, Object])
  },
  referenceEl: {
    type: M(Object)
  },
  triggerTargetEl: {
    type: M(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Dn(["ariaLabel"])
}), zc = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Hc = (e, t) => {
  const n = S(!1), r = S();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var c;
      ((c = u.detail) == null ? void 0 : c.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (r.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, jc = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Wc(e), ...t]
  };
  return Uc(a, o?.modifiers), a;
}, Vc = (e) => {
  if (Q)
    return Se(e);
};
function Wc(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
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
        fallbackPlacements: r
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
function Uc(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Gc = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = Kc(l);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, o = _(() => {
    const { onFirstUpdate: l, placement: u, strategy: c, modifiers: p } = h(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: c || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = so(), i = S({
    styles: {
      popper: {
        position: h(o).strategy,
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
  return N(o, (l) => {
    const u = h(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), N([e, t], ([l, u]) => {
    s(), !(!l || !u) && (a.value = Fc(l, u, h(o)));
  }), Ce(() => {
    s();
  }), {
    state: _(() => {
      var l;
      return { ...((l = h(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: _(() => h(i).styles),
    attributes: _(() => h(i).attributes),
    update: () => {
      var l;
      return (l = h(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = h(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: _(() => h(a))
  };
};
function Kc(e) {
  const t = Object.keys(e.elements), n = hn(t.map((o) => [o, e.styles[o] || {}])), r = hn(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const qc = 0, Yc = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = F(jn, void 0), a = S(), i = S(), s = _(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = _(() => {
    var v;
    const E = h(a), I = (v = h(i)) != null ? v : qc;
    return {
      name: "arrow",
      enabled: !xi(E),
      options: {
        element: E,
        padding: I
      }
    };
  }), u = _(() => ({
    onFirstUpdate: () => {
      f();
    },
    ...jc(e, [
      h(l),
      h(s)
    ])
  })), c = _(() => Vc(e.referenceEl) || h(r)), { attributes: p, state: g, styles: m, update: f, forceUpdate: d, instanceRef: b } = Gc(c, n, u);
  return N(b, (v) => t.value = v), be(() => {
    N(() => {
      var v;
      return (v = h(c)) == null ? void 0 : v.getBoundingClientRect();
    }, () => {
      f();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: b,
    state: g,
    styles: m,
    role: o,
    forceUpdate: d,
    update: f
  };
}, Zc = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = xo(), a = le("popper"), i = _(() => h(t).popper), s = S(fe(e.zIndex) ? e.zIndex : o()), l = _(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = _(() => [
    { zIndex: h(s) },
    h(n).popper,
    e.popperStyle || {}
  ]), c = _(() => r.value === "dialog" ? "false" : void 0), p = _(() => h(n).arrow || {});
  return {
    ariaModal: c,
    arrowStyle: p,
    contentAttrs: i,
    contentClass: l,
    contentStyle: u,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = fe(e.zIndex) ? e.zIndex : o();
    }
  };
}, Jc = P({
  name: "ElPopperContent"
}), Qc = /* @__PURE__ */ P({
  ...Jc,
  props: oa,
  emits: zc,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: s,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: c
    } = Hc(r, n), { attributes: p, arrowRef: g, contentRef: m, styles: f, instanceRef: d, role: b, update: v } = Yc(r), {
      ariaModal: E,
      arrowStyle: I,
      contentAttrs: w,
      contentClass: y,
      contentStyle: C,
      updateZIndex: T
    } = Zc(r, {
      styles: f,
      attributes: p,
      role: b
    }), x = F(Ut, void 0), k = S();
    Oe(Do, {
      arrowStyle: I,
      arrowRef: g,
      arrowOffset: k
    }), x && Oe(Ut, {
      ...x,
      addInputId: zt,
      removeInputId: zt
    });
    let R;
    const D = ($ = !0) => {
      v(), $ && T();
    }, L = () => {
      D(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return be(() => {
      N(() => r.triggerTargetEl, ($, oe) => {
        R?.(), R = void 0;
        const V = h($ || m.value), z = h(oe || m.value);
        De(V) && (R = N([b, () => r.ariaLabel, E, () => r.id], (O) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((W, te) => {
            Ln(O[te]) ? V.removeAttribute(W) : V.setAttribute(W, O[te]);
          });
        }, { immediate: !0 })), z !== V && De(z) && ["role", "aria-label", "aria-modal", "id"].forEach((O) => {
          z.removeAttribute(O);
        });
      }, { immediate: !0 }), N(() => r.visible, L, { immediate: !0 });
    }), Ce(() => {
      R?.(), R = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: d,
      updatePopper: D,
      contentStyle: C
    }), ($, oe) => (A(), B("div", mt({
      ref_key: "contentRef",
      ref: m
    }, h(w), {
      style: h(C),
      class: h(y),
      tabindex: "-1",
      onMouseenter: (V) => $.$emit("mouseenter", V),
      onMouseleave: (V) => $.$emit("mouseleave", V)
    }), [
      de(h($u), {
        trapped: h(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": h(m),
        "focus-start-el": h(o),
        onFocusAfterTrapped: h(s),
        onFocusAfterReleased: h(i),
        onFocusin: h(l),
        onFocusoutPrevented: h(u),
        onReleaseRequested: h(c)
      }, {
        default: J(() => [
          K($.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Xc = /* @__PURE__ */ Z(Qc, [["__file", "content.vue"]]);
const ef = ot(du), er = Symbol("elTooltip");
function eo() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return bt(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const tf = G({
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
}), nf = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = eo(), {
    registerTimeout: i,
    cancelTimeout: s
  } = eo();
  return {
    onOpen: (c) => {
      a(() => {
        r(c);
        const p = h(n);
        fe(p) && p > 0 && i(() => {
          o(c);
        }, p);
      }, h(e));
    },
    onClose: (c) => {
      s(), a(() => {
        o(c);
      }, h(t));
    }
  };
}, aa = G({
  ...tf,
  ...oa,
  appendTo: {
    type: M([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: M(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Dn(["ariaLabel"])
}), sa = G({
  ...jo,
  disabled: Boolean,
  trigger: {
    type: M([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: M(Array),
    default: () => [ut.enter, ut.numpadEnter, ut.space]
  }
}), rf = Xt({
  type: M(Boolean),
  default: null
}), of = Xt({
  type: M(Function)
}), af = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: rf,
    [n]: of
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: s,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: c,
      onHide: p
    }) => {
      const g = he(), { emit: m } = g, f = g.props, d = _(() => Pe(f[n])), b = _(() => f[e] === null), v = (T) => {
        i.value !== !0 && (i.value = !0, s && (s.value = T), Pe(c) && c(T));
      }, E = (T) => {
        i.value !== !1 && (i.value = !1, s && (s.value = T), Pe(p) && p(T));
      }, I = (T) => {
        if (f.disabled === !0 || Pe(u) && !u())
          return;
        const x = d.value && Q;
        x && m(t, !0), (b.value || !x) && v(T);
      }, w = (T) => {
        if (f.disabled === !0 || !Q)
          return;
        const x = d.value && Q;
        x && m(t, !1), (b.value || !x) && E(T);
      }, y = (T) => {
        wo(T) && (f.disabled && T ? d.value && m(t, !1) : i.value !== T && (T ? v() : E()));
      }, C = () => {
        i.value ? w() : I();
      };
      return N(() => f[e], y), l && g.appContext.config.globalProperties.$route !== void 0 && N(() => ({
        ...g.proxy.$route
      }), () => {
        l.value && i.value && w();
      }), be(() => {
        y(f[e]);
      }), {
        hide: w,
        show: I,
        toggle: C,
        hasUpdateHandler: d
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: sf,
  useModelToggleEmits: lf,
  useModelToggle: uf
} = af("visible"), cf = G({
  ...zo,
  ...sf,
  ...aa,
  ...sa,
  ...Ho,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), ff = [
  ...lf,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], df = (e, t) => Ma(e) ? e.includes(t) : e === t, qe = (e, t, n) => (r) => {
  df(h(e), t) && n(r);
}, Ee = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, Pd = (e) => (t) => t.pointerType === "mouse" ? e(t) : void 0, pf = P({
  name: "ElTooltipTrigger"
}), vf = /* @__PURE__ */ P({
  ...pf,
  props: sa,
  setup(e, { expose: t }) {
    const n = e, r = le("tooltip"), { controlled: o, id: a, open: i, onOpen: s, onClose: l, onToggle: u } = F(er, void 0), c = S(null), p = () => {
      if (h(o) || n.disabled)
        return !0;
    }, g = ce(n, "trigger"), m = Ee(p, qe(g, "hover", s)), f = Ee(p, qe(g, "hover", l)), d = Ee(p, qe(g, "click", (w) => {
      w.button === 0 && u(w);
    })), b = Ee(p, qe(g, "focus", s)), v = Ee(p, qe(g, "focus", l)), E = Ee(p, qe(g, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), I = Ee(p, (w) => {
      const { code: y } = w;
      n.triggerKeys.includes(y) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: c
    }), (w, y) => (A(), Y(h(wu), {
      id: h(a),
      "virtual-ref": w.virtualRef,
      open: h(i),
      "virtual-triggering": w.virtualTriggering,
      class: pe(h(r).e("trigger")),
      onBlur: h(v),
      onClick: h(d),
      onContextmenu: h(E),
      onFocus: h(b),
      onMouseenter: h(m),
      onMouseleave: h(f),
      onKeydown: h(I)
    }, {
      default: J(() => [
        K(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var hf = /* @__PURE__ */ Z(vf, [["__file", "trigger.vue"]]);
const gf = G({
  to: {
    type: M([String, Object]),
    required: !0
  },
  disabled: Boolean
}), mf = /* @__PURE__ */ P({
  __name: "teleport",
  props: gf,
  setup(e) {
    return (t, n) => t.disabled ? K(t.$slots, "default", { key: 0 }) : (A(), Y(Na, {
      key: 1,
      to: t.to
    }, [
      K(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var bf = /* @__PURE__ */ Z(mf, [["__file", "teleport.vue"]]);
const yf = ot(bf), ia = () => {
  const e = Pn(), t = $o(), n = _(() => `${e.value}-popper-container-${t.prefix}`), r = _(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, _f = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, wf = () => {
  const { id: e, selector: t } = ia();
  return $a(() => {
    Q && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && _f(e.value);
  }), {
    id: e,
    selector: t
  };
}, Ef = P({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Sf = /* @__PURE__ */ P({
  ...Ef,
  props: aa,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = ia(), o = le("tooltip"), a = S();
    let i;
    const {
      controlled: s,
      id: l,
      open: u,
      trigger: c,
      onClose: p,
      onOpen: g,
      onShow: m,
      onHide: f,
      onBeforeShow: d,
      onBeforeHide: b
    } = F(er, void 0), v = _(() => n.transition || `${o.namespace.value}-fade-in-linear`), E = _(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Ce(() => {
      i?.();
    });
    const I = _(() => h(E) ? !0 : h(u)), w = _(() => n.disabled ? !1 : h(u)), y = _(() => n.appendTo || r.value), C = _(() => {
      var O;
      return (O = n.style) != null ? O : {};
    }), T = S(!0), x = () => {
      f(), z() && we(document.body), T.value = !0;
    }, k = () => {
      if (h(s))
        return !0;
    }, R = Ee(k, () => {
      n.enterable && h(c) === "hover" && g();
    }), D = Ee(k, () => {
      h(c) === "hover" && p();
    }), L = () => {
      var O, W;
      (W = (O = a.value) == null ? void 0 : O.updatePopper) == null || W.call(O), d?.();
    }, $ = () => {
      b?.();
    }, oe = () => {
      m(), i = Gi(_(() => {
        var O;
        return (O = a.value) == null ? void 0 : O.popperContentRef;
      }), () => {
        if (h(s))
          return;
        h(c) !== "hover" && p();
      });
    }, V = () => {
      n.virtualTriggering || p();
    }, z = (O) => {
      var W;
      const te = (W = a.value) == null ? void 0 : W.popperContentRef, Ue = O?.relatedTarget || document.activeElement;
      return te?.contains(Ue);
    };
    return N(() => h(u), (O) => {
      O ? T.value = !1 : i?.();
    }, {
      flush: "post"
    }), N(() => n.content, () => {
      var O, W;
      (W = (O = a.value) == null ? void 0 : O.updatePopper) == null || W.call(O);
    }), t({
      contentRef: a,
      isFocusInsideContent: z
    }), (O, W) => (A(), Y(h(yf), {
      disabled: !O.teleported,
      to: h(y)
    }, {
      default: J(() => [
        de(lo, {
          name: h(v),
          onAfterLeave: x,
          onBeforeEnter: L,
          onAfterEnter: oe,
          onBeforeLeave: $
        }, {
          default: J(() => [
            h(I) ? Cn((A(), Y(h(Xc), mt({
              key: 0,
              id: h(l),
              ref_key: "contentRef",
              ref: a
            }, O.$attrs, {
              "aria-label": O.ariaLabel,
              "aria-hidden": T.value,
              "boundaries-padding": O.boundariesPadding,
              "fallback-placements": O.fallbackPlacements,
              "gpu-acceleration": O.gpuAcceleration,
              offset: O.offset,
              placement: O.placement,
              "popper-options": O.popperOptions,
              strategy: O.strategy,
              effect: O.effect,
              enterable: O.enterable,
              pure: O.pure,
              "popper-class": O.popperClass,
              "popper-style": [O.popperStyle, h(C)],
              "reference-el": O.referenceEl,
              "trigger-target-el": O.triggerTargetEl,
              visible: h(w),
              "z-index": O.zIndex,
              onMouseenter: h(R),
              onMouseleave: h(D),
              onBlur: V,
              onClose: h(p)
            }), {
              default: J(() => [
                K(O.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [io, h(w)]
            ]) : He("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Of = /* @__PURE__ */ Z(Sf, [["__file", "content.vue"]]);
const Tf = P({
  name: "ElTooltip"
}), Cf = /* @__PURE__ */ P({
  ...Tf,
  props: cf,
  emits: ff,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    wf();
    const o = Lo(), a = S(), i = S(), s = () => {
      var v;
      const E = h(a);
      E && ((v = E.popperInstanceRef) == null || v.update());
    }, l = S(!1), u = S(), { show: c, hide: p, hasUpdateHandler: g } = uf({
      indicator: l,
      toggleReason: u
    }), { onOpen: m, onClose: f } = nf({
      showAfter: ce(r, "showAfter"),
      hideAfter: ce(r, "hideAfter"),
      autoClose: ce(r, "autoClose"),
      open: c,
      close: p
    }), d = _(() => wo(r.visible) && !g.value);
    Oe(er, {
      controlled: d,
      id: o,
      open: Tn(l),
      trigger: ce(r, "trigger"),
      onOpen: (v) => {
        m(v);
      },
      onClose: (v) => {
        f(v);
      },
      onToggle: (v) => {
        h(l) ? f(v) : m(v);
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
    }), N(() => r.disabled, (v) => {
      v && l.value && (l.value = !1);
    });
    const b = (v) => {
      var E;
      return (E = i.value) == null ? void 0 : E.isFocusInsideContent(v);
    };
    return La(() => l.value && p()), t({
      popperRef: a,
      contentRef: i,
      isFocusInsideContent: b,
      updatePopper: s,
      onOpen: m,
      onClose: f,
      hide: p
    }), (v, E) => (A(), Y(h(ef), {
      ref_key: "popperRef",
      ref: a,
      role: v.role
    }, {
      default: J(() => [
        de(hf, {
          disabled: v.disabled,
          trigger: v.trigger,
          "trigger-keys": v.triggerKeys,
          "virtual-ref": v.virtualRef,
          "virtual-triggering": v.virtualTriggering
        }, {
          default: J(() => [
            v.$slots.default ? K(v.$slots, "default", { key: 0 }) : He("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        de(Of, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": v.ariaLabel,
          "boundaries-padding": v.boundariesPadding,
          content: v.content,
          disabled: v.disabled,
          effect: v.effect,
          enterable: v.enterable,
          "fallback-placements": v.fallbackPlacements,
          "hide-after": v.hideAfter,
          "gpu-acceleration": v.gpuAcceleration,
          offset: v.offset,
          persistent: v.persistent,
          "popper-class": v.popperClass,
          "popper-style": v.popperStyle,
          placement: v.placement,
          "popper-options": v.popperOptions,
          pure: v.pure,
          "raw-content": v.rawContent,
          "reference-el": v.referenceEl,
          "trigger-target-el": v.triggerTargetEl,
          "show-after": v.showAfter,
          strategy: v.strategy,
          teleported: v.teleported,
          transition: v.transition,
          "virtual-triggering": v.virtualTriggering,
          "z-index": v.zIndex,
          "append-to": v.appendTo
        }, {
          default: J(() => [
            K(v.$slots, "content", {}, () => [
              v.rawContent ? (A(), B("span", {
                key: 0,
                innerHTML: v.content
              }, null, 8, ["innerHTML"])) : (A(), B("span", { key: 1 }, Fa(v.content), 1))
            ]),
            v.showArrow ? (A(), Y(h(hu), {
              key: 0,
              "arrow-offset": v.arrowOffset
            }, null, 8, ["arrow-offset"])) : He("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var xf = /* @__PURE__ */ Z(Cf, [["__file", "tooltip.vue"]]);
const Ad = ot(xf), la = Symbol("buttonGroupContextKey"), Pf = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: a = "API" }, i) => {
  N(() => h(i), (s) => {
    s && ge(n, `[${a}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Af = (e, t) => {
  Pf({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, _(() => e.type === "text"));
  const n = F(la, void 0), r = Bn("button"), { form: o } = ql(), a = Yl(_(() => n?.size)), i = Bo(), s = S(), l = Ba(), u = _(() => e.type || n?.type || ""), c = _(() => {
    var f, d, b;
    return (b = (d = e.autoInsertSpace) != null ? d : (f = r.value) == null ? void 0 : f.autoInsertSpace) != null ? b : !1;
  }), p = _(() => e.tag === "button" ? {
    ariaDisabled: i.value || e.loading,
    disabled: i.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), g = _(() => {
    var f;
    const d = (f = l.default) == null ? void 0 : f.call(l);
    if (c.value && d?.length === 1) {
      const b = d[0];
      if (b?.type === co) {
        const v = b.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(v.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: a,
    _type: u,
    _ref: s,
    _props: p,
    shouldAddSpace: g,
    handleClick: (f) => {
      if (i.value || e.loading) {
        f.stopPropagation();
        return;
      }
      e.nativeType === "reset" && o?.resetFields(), t("click", f);
    }
  };
}, If = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Rf = ["button", "submit", "reset"], En = G({
  size: pl,
  disabled: Boolean,
  type: {
    type: String,
    values: If,
    default: ""
  },
  icon: {
    type: Nr
  },
  nativeType: {
    type: String,
    values: Rf,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Nr,
    default: () => No
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
    type: M([String, Object]),
    default: "button"
  }
}), kf = {
  click: (e) => e instanceof MouseEvent
};
function U(e, t) {
  Mf(e) && (e = "100%");
  var n = Nf(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Pt(e) {
  return Math.min(1, Math.max(0, e));
}
function Mf(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Nf(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ua(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function At(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Le(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function $f(e, t, n) {
  return {
    r: U(e, 255) * 255,
    g: U(t, 255) * 255,
    b: U(n, 255) * 255
  };
}
function to(e, t, n) {
  e = U(e, 255), t = U(t, 255), n = U(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = 0, s = (r + o) / 2;
  if (r === o)
    i = 0, a = 0;
  else {
    var l = r - o;
    switch (i = s > 0.5 ? l / (2 - r - o) : l / (r + o), r) {
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
function cn(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Lf(e, t, n) {
  var r, o, a;
  if (e = U(e, 360), t = U(t, 100), n = U(n, 100), t === 0)
    o = n, a = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - i;
    r = cn(s, i, e + 1 / 3), o = cn(s, i, e), a = cn(s, i, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function no(e, t, n) {
  e = U(e, 255), t = U(t, 255), n = U(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = r, s = r - o, l = r === 0 ? 0 : s / r;
  if (r === o)
    a = 0;
  else {
    switch (r) {
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
function Ff(e, t, n) {
  e = U(e, 360) * 6, t = U(t, 100), n = U(n, 100);
  var r = Math.floor(e), o = e - r, a = n * (1 - t), i = n * (1 - o * t), s = n * (1 - (1 - o) * t), l = r % 6, u = [n, i, a, a, s, n][l], c = [s, n, n, i, a, a][l], p = [a, a, s, n, n, i][l];
  return { r: u * 255, g: c * 255, b: p * 255 };
}
function ro(e, t, n, r) {
  var o = [
    Le(Math.round(e).toString(16)),
    Le(Math.round(t).toString(16)),
    Le(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Bf(e, t, n, r, o) {
  var a = [
    Le(Math.round(e).toString(16)),
    Le(Math.round(t).toString(16)),
    Le(Math.round(n).toString(16)),
    Le(Df(r))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Df(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function oo(e) {
  return ne(e) / 255;
}
function ne(e) {
  return parseInt(e, 16);
}
function zf(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Sn = {
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
function Hf(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, a = null, i = !1, s = !1;
  return typeof e == "string" && (e = Wf(e)), typeof e == "object" && (_e(e.r) && _e(e.g) && _e(e.b) ? (t = $f(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : _e(e.h) && _e(e.s) && _e(e.v) ? (r = At(e.s), o = At(e.v), t = Ff(e.h, r, o), i = !0, s = "hsv") : _e(e.h) && _e(e.s) && _e(e.l) && (r = At(e.s), a = At(e.l), t = Lf(e.h, r, a), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = ua(n), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var jf = "[-\\+]?\\d+%?", Vf = "[-\\+]?\\d*\\.\\d+%?", Ae = "(?:".concat(Vf, ")|(?:").concat(jf, ")"), fn = "[\\s|\\(]+(".concat(Ae, ")[,|\\s]+(").concat(Ae, ")[,|\\s]+(").concat(Ae, ")\\s*\\)?"), dn = "[\\s|\\(]+(".concat(Ae, ")[,|\\s]+(").concat(Ae, ")[,|\\s]+(").concat(Ae, ")[,|\\s]+(").concat(Ae, ")\\s*\\)?"), ue = {
  CSS_UNIT: new RegExp(Ae),
  rgb: new RegExp("rgb" + fn),
  rgba: new RegExp("rgba" + dn),
  hsl: new RegExp("hsl" + fn),
  hsla: new RegExp("hsla" + dn),
  hsv: new RegExp("hsv" + fn),
  hsva: new RegExp("hsva" + dn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Wf(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Sn[e])
    e = Sn[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = ue.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = ue.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = ue.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = ue.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = ue.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = ue.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = ue.hex8.exec(e), n ? {
    r: ne(n[1]),
    g: ne(n[2]),
    b: ne(n[3]),
    a: oo(n[4]),
    format: t ? "name" : "hex8"
  } : (n = ue.hex6.exec(e), n ? {
    r: ne(n[1]),
    g: ne(n[2]),
    b: ne(n[3]),
    format: t ? "name" : "hex"
  } : (n = ue.hex4.exec(e), n ? {
    r: ne(n[1] + n[1]),
    g: ne(n[2] + n[2]),
    b: ne(n[3] + n[3]),
    a: oo(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = ue.hex3.exec(e), n ? {
    r: ne(n[1] + n[1]),
    g: ne(n[2] + n[2]),
    b: ne(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function _e(e) {
  return !!ue.CSS_UNIT.exec(String(e));
}
var Uf = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = zf(t)), this.originalInput = t;
      var o = Hf(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, a = t.r / 255, i = t.g / 255, s = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = ua(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = no(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = no(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = to(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = to(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), ro(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Bf(this.r, this.g, this.b, this.a, t);
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
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(U(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(U(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + ro(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Sn); n < r.length; n++) {
        var o = r[n], a = o[0], i = o[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, a = !n && o && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Pt(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Pt(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Pt(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Pt(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), a = n / 100, i = {
        r: (o.r - r.r) * a + r.r,
        g: (o.g - r.g) * a + r.g,
        b: (o.b - r.b) * a + r.b,
        a: (o.a - r.a) * a + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, a = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, a.push(new e(r));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], s = 1 / t; t--; )
        i.push(new e({ h: r, s: o, v: a })), a = (a + s) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function xe(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Gf(e) {
  const t = Bo(), n = le("button");
  return _(() => {
    let r = {}, o = e.color;
    if (o) {
      const a = o.match(/var\((.*?)\)/);
      a && (o = window.getComputedStyle(window.document.documentElement).getPropertyValue(a[1]));
      const i = new Uf(o), s = e.dark ? i.tint(20).toString() : xe(i, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? xe(i, 90) : i.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? xe(i, 50) : i.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? xe(i, 90) : i.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? xe(i, 50) : i.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? xe(i, 80) : i.tint(80).toString());
      else {
        const l = e.dark ? xe(i, 30) : i.tint(30).toString(), u = i.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": o,
          "text-color": u,
          "border-color": o,
          "hover-bg-color": l,
          "hover-text-color": u,
          "hover-border-color": l,
          "active-bg-color": s,
          "active-border-color": s
        }), t.value) {
          const c = e.dark ? xe(i, 50) : i.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = c, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = c;
        }
      }
    }
    return r;
  });
}
const Kf = P({
  name: "ElButton"
}), qf = /* @__PURE__ */ P({
  ...Kf,
  props: En,
  emits: kf,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Gf(r), a = le("button"), { _ref: i, _size: s, _type: l, _disabled: u, _props: c, shouldAddSpace: p, handleClick: g } = Af(r, n), m = _(() => [
      a.b(),
      a.m(l.value),
      a.m(s.value),
      a.is("disabled", u.value),
      a.is("loading", r.loading),
      a.is("plain", r.plain),
      a.is("round", r.round),
      a.is("circle", r.circle),
      a.is("text", r.text),
      a.is("link", r.link),
      a.is("has-bg", r.bg)
    ]);
    return t({
      ref: i,
      size: s,
      type: l,
      disabled: u,
      shouldAddSpace: p
    }), (f, d) => (A(), Y(kt(f.tag), mt({
      ref_key: "_ref",
      ref: i
    }, h(c), {
      class: h(m),
      style: h(o),
      onClick: h(g)
    }), {
      default: J(() => [
        f.loading ? (A(), B(xn, { key: 0 }, [
          f.$slots.loading ? K(f.$slots, "loading", { key: 0 }) : (A(), Y(h(Mr), {
            key: 1,
            class: pe(h(a).is("loading"))
          }, {
            default: J(() => [
              (A(), Y(kt(f.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : f.icon || f.$slots.icon ? (A(), Y(h(Mr), { key: 1 }, {
          default: J(() => [
            f.icon ? (A(), Y(kt(f.icon), { key: 0 })) : K(f.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : He("v-if", !0),
        f.$slots.default ? (A(), B("span", {
          key: 2,
          class: pe({ [h(a).em("text", "expand")]: h(p) })
        }, [
          K(f.$slots, "default")
        ], 2)) : He("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Yf = /* @__PURE__ */ Z(qf, [["__file", "button.vue"]]);
const Zf = {
  size: En.size,
  type: En.type
}, Jf = P({
  name: "ElButtonGroup"
}), Qf = /* @__PURE__ */ P({
  ...Jf,
  props: Zf,
  setup(e) {
    const t = e;
    Oe(la, uo({
      size: ce(t, "size"),
      type: ce(t, "type")
    }));
    const n = le("button");
    return (r, o) => (A(), B("div", {
      class: pe(h(n).b("group"))
    }, [
      K(r.$slots, "default")
    ], 2));
  }
});
var ca = /* @__PURE__ */ Z(Qf, [["__file", "button-group.vue"]]);
const Id = ot(Yf, {
  ButtonGroup: ca
});
wl(ca);
const Rd = (...e) => (t) => {
  e.forEach((n) => {
    Pe(n) ? n(t) : n.value = t;
  });
}, kd = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Xf(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function q(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var ao;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ao || (ao = {}));
async function ed(e, t) {
  await q("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function $t(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return q("plugin:event|listen", {
    event: e,
    target: o,
    handler: Xf(t)
  }).then((a) => async () => ed(e, a));
}
const On = {
  info: (e, t, ...n) => {
    q("frontend_log", {
      level: "info",
      message: e,
      data: t === void 0 ? null : pn(t)
    }).catch(() => {
    });
  },
  error: (e, t) => {
    q("frontend_log", {
      level: "error",
      message: e,
      data: t === void 0 ? null : pn(t)
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    q("frontend_log", {
      level: "warn",
      message: e,
      data: t === void 0 ? null : pn(t)
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
};
function pn(e) {
  if (e instanceof Error)
    return `${e.name}: ${e.message}
${e.stack || ""}`.trim();
  if (typeof e == "string")
    return e;
  try {
    return JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
}
async function td() {
  try {
    return await q("get_git_settings_command");
  } catch (e) {
    throw new Error(`获取 Git 设置失败: ${e}`);
  }
}
async function Md(e) {
  try {
    await q("update_git_settings_command", { settings: e });
  } catch (t) {
    throw new Error(`更新 Git 设置失败: ${t}`);
  }
}
async function fa() {
  try {
    return await q("get_git_status_command");
  } catch (e) {
    throw new Error(`获取 Git 状态失败: ${e}`);
  }
}
async function Nd(e = 10) {
  try {
    return await q("get_git_records_command", { limit: e });
  } catch (t) {
    throw new Error(`获取 Git 记录失败: ${t}`);
  }
}
async function $d(e, t) {
  try {
    await q("restore_git_record_file_command", { commitHash: e, filePath: t });
  } catch (n) {
    throw new Error(`恢复 Git 记录文件失败: ${n}`);
  }
}
async function Ld() {
  try {
    return await q("git_pull_command");
  } catch (e) {
    throw new Error(`Git pull 失败: ${e}`);
  }
}
async function Fd(e) {
  try {
    await q("switch_git_branch_command", { branch: e });
  } catch (t) {
    throw new Error(`切换 Git 分支失败: ${t}`);
  }
}
async function Bd(e) {
  try {
    await q("remove_untracked_file_command", { filePath: e });
  } catch (t) {
    throw new Error(`删除未跟踪文件失败: ${t}`);
  }
}
async function Dd(e) {
  try {
    return await q("git_push_command", { message: e });
  } catch (t) {
    throw new Error(`Git push 失败: ${t}`);
  }
}
async function zd() {
  try {
    await q("start_auto_sync_command");
  } catch (e) {
    throw new Error(`启动自动同步失败: ${e}`);
  }
}
async function Hd() {
  try {
    await q("stop_auto_sync_command");
  } catch (e) {
    throw new Error(`停止自动同步失败: ${e}`);
  }
}
const j = S("disabled"), $e = S(null), Ze = S(null), It = S(null), Rt = S(!1);
let Fe = null, Be = null;
const vn = S(!1), da = S(0), pa = S(Date.now());
let dt = null, Lt = null, Ft = null, Bt = null, Dt = null;
const nd = (e) => {
  const n = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return [
    "工作区未设置",
    "工作区未配置",
    "workspace not set",
    "workspace is not set",
    "workspace root"
  ].some((r) => n.includes(r.toLowerCase()));
};
function jd() {
  const e = _(() => !$e.value || !$e.value.is_repo ? 0 : $e.value.changed_files.length), t = _(() => {
    if (da.value, !Ze.value) return "";
    const s = new Date(Ze.value), l = pa.value - s.getTime(), u = Math.floor(l / 6e4), c = Math.floor(u / 60), p = Math.floor(c / 24);
    return u < 1 ? "刚刚" : u < 60 ? `${u}分钟前` : c < 24 ? `${c}小时前` : p < 7 ? `${p}天前` : s.toLocaleDateString("zh-CN");
  }), n = _(() => {
    const s = It.value;
    if (!s || !s.enabled)
      return "Git 同步已禁用";
    if (e.value > 0)
      return `${e.value} 个文件待同步`;
    switch (j.value) {
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
  }), r = async () => {
    if (Rt.value || j.value === "syncing") {
      vn.value = !0;
      return;
    }
    Rt.value = !0;
    try {
      const s = await fa();
      $e.value = s, !s.is_repo || !It.value?.enabled ? j.value = "disabled" : s.has_changes ? j.value = "has_changes" : j.value = "synced";
    } catch (s) {
      if (nd(s)) {
        $e.value = null, j.value = "disabled";
        return;
      }
      On.error("[GitStatus] 获取 Git 状态失败", s), j.value = "error";
    } finally {
      Rt.value = !1, vn.value && (vn.value = !1, setTimeout(() => r(), 100));
    }
  };
  return {
    syncState: j,
    gitStatus: $e,
    pendingFilesCount: e,
    lastSyncTime: Ze,
    gitSettings: It,
    isLoading: Rt,
    refreshStatus: r,
    refreshSettings: async () => {
      try {
        const s = await td();
        It.value = s, s.enabled ? (j.value === "disabled" && (j.value = "idle"), s.last_sync_time && (Ze.value = s.last_sync_time)) : j.value = "disabled";
      } catch (s) {
        On.error("[GitStatus] 获取 Git 设置失败", s);
      }
    },
    formattedLastSyncTime: t,
    stateDescription: n,
    // 导出内部方法供外部调用
    _setSyncState: (s) => {
      j.value = s;
    },
    _setLastSyncTime: (s) => {
      Ze.value = s;
    }
  };
}
function Vd() {
  dt || (dt = setInterval(() => {
    pa.value = Date.now(), da.value += 1;
  }, 6e4)), $t("git-pull-start", () => {
    j.value = "syncing";
  }).then((e) => {
    Lt = e;
  }), $t("git-push-start", () => {
    j.value = "syncing";
  }).then((e) => {
    Ft = e;
  }), $t("git-sync-complete", (e) => {
    e.payload.success ? (j.value = "syncing", e.payload.last_sync_time && (Ze.value = e.payload.last_sync_time)) : j.value = "error", Be !== null && clearTimeout(Be), Be = setTimeout(() => {
      Be = null, fa().then((t) => {
        $e.value = t, t.has_changes ? j.value = "has_changes" : j.value = "synced";
      }).catch((t) => {
        On.error("[GitStatus] git-sync-complete 后刷新状态失败", t), j.value = "error";
      });
    }, 1e3);
  }).then((e) => {
    Bt = e;
  });
}
function Wd(e, t = 300) {
  $t("git-workspace-changed", () => {
    Fe !== null && clearTimeout(Fe), Fe = setTimeout(async () => {
      Fe = null, await e();
    }, t);
  }).then((n) => {
    Dt = n;
  });
}
function Ud() {
  dt && (clearInterval(dt), dt = null), Fe && (clearTimeout(Fe), Fe = null), Be && (clearTimeout(Be), Be = null), Lt && (Lt(), Lt = null), Ft && (Ft(), Ft = null), Bt && (Bt(), Bt = null), Dt && (Dt(), Dt = null);
}
export {
  cl as $,
  M as A,
  Nr as B,
  pl as C,
  ge as D,
  hn as E,
  Je as F,
  De as G,
  le as H,
  Yl as I,
  Bo as J,
  ql as K,
  rt as L,
  oi as M,
  Cd as N,
  wd as O,
  bd as P,
  Ln as Q,
  Zi as R,
  Ie as S,
  Mr as T,
  Ml as U,
  Td as V,
  ot as W,
  gn as X,
  dl as Y,
  Mo as Z,
  Z as _,
  jt as a,
  Rd as a0,
  Ed as a1,
  Ou as a2,
  wo as a3,
  al as a4,
  fd as a5,
  dd as a6,
  vd as a7,
  pd as a8,
  xo as a9,
  Sd as aA,
  hd as aB,
  kd as aC,
  Id as aD,
  jd as aE,
  On as aF,
  Bd as aG,
  Fd as aH,
  Nd as aI,
  $d as aJ,
  td as aK,
  zd as aL,
  Hd as aM,
  Ld as aN,
  Dd as aO,
  Md as aP,
  od as aQ,
  Ee as aR,
  uu as aS,
  sa as aT,
  bu as aU,
  Pd as aV,
  Vd as aW,
  Wd as aX,
  Ud as aY,
  Lo as aa,
  Bn as ab,
  Mt as ac,
  xi as ad,
  sd as ae,
  Pf as af,
  $u as ag,
  yf as ah,
  ki as ai,
  gd as aj,
  yd as ak,
  md as al,
  _d as am,
  ad as an,
  ud as ao,
  Vi as ap,
  ut as aq,
  ld as ar,
  Gn as as,
  aa as at,
  Ad as au,
  xd as av,
  id as aw,
  wl as ax,
  cd as ay,
  Od as az,
  Ms as b,
  rs as c,
  Rn as d,
  In as e,
  za as f,
  Mn as g,
  yo as h,
  kn as i,
  go as j,
  nt as k,
  We as l,
  yi as m,
  mo as n,
  Ds as o,
  $n as p,
  bi as q,
  An as r,
  Ci as s,
  is as t,
  _o as u,
  Qa as v,
  Q as w,
  fe as x,
  G as y,
  Dn as z
};
