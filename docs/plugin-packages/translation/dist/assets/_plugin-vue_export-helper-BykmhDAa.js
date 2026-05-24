import { D as We, C as ue, r as F, k as I, u as O, A as Lt, S as ft, i as dt, T as hr, U as kl, V as la, M as qu, N as Ju, f as De, l as je, w as q, W as Zu, x as Qu, X as Ga, Y as ec, z as Ae, Z as It, _ as tc, $ as Wr, d as V, a as z, o as M, g as te, m as ao, q as H, t as ln, p as Fl, a0 as Dt, b as ae, v as ee, a1 as nt, n as W, B as Ge, a2 as Gt, a3 as Kn, c as _e, F as un, G as $n, a4 as nc, a5 as rc, e as le, y as Fn, a6 as oc, a7 as $l, a8 as ac, a9 as sc, aa as lc, ab as ic, s as ze, R as Mo, ac as He, L as uc, O as ia, ad as cc, ae as gn, af as fc, h as Ya, ag as Jn, ah as dc, ai as pc, aj as mc, ak as lr, al as Hr, am as Xa, Q as Ul } from "./runtime-entry-yPFnsQUl.js";
const xl = Symbol(), $r = "el", vc = "is-", _n = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Vl = Symbol("namespaceContextKey"), ua = (e) => {
  const t = e || (We() ? ue(Vl, F($r)) : F($r));
  return I(() => O(t) || $r);
}, Ue = (e, t) => {
  const n = ua(t);
  return {
    namespace: n,
    b: (m = "") => _n(n.value, e, m, "", ""),
    e: (m) => m ? _n(n.value, e, "", m, "") : "",
    m: (m) => m ? _n(n.value, e, "", "", m) : "",
    be: (m, T) => m && T ? _n(n.value, e, m, T, "") : "",
    em: (m, T) => m && T ? _n(n.value, e, "", m, T) : "",
    bm: (m, T) => m && T ? _n(n.value, e, m, "", T) : "",
    bem: (m, T, c) => m && T && c ? _n(n.value, e, m, T, c) : "",
    is: (m, ...T) => {
      const c = T.length >= 1 ? T[0] : !0;
      return m && c ? `${vc}${m}` : "";
    },
    cssVar: (m) => {
      const T = {};
      for (const c in m)
        m[c] && (T[`--${n.value}-${c}`] = m[c]);
      return T;
    },
    cssVarName: (m) => `--${n.value}-${m}`,
    cssVarBlock: (m) => {
      const T = {};
      for (const c in m)
        m[c] && (T[`--${n.value}-${e}-${c}`] = m[c]);
      return T;
    },
    cssVarBlockName: (m) => `--${n.value}-${e}-${m}`
  };
};
var Bl = typeof global == "object" && global && global.Object === Object && global, gc = typeof self == "object" && self && self.Object === Object && self, Mt = Bl || gc || Function("return this")(), At = Mt.Symbol, Wl = Object.prototype, _c = Wl.hasOwnProperty, hc = Wl.toString, Zn = At ? At.toStringTag : void 0;
function yc(e) {
  var t = _c.call(e, Zn), n = e[Zn];
  try {
    e[Zn] = void 0;
    var r = !0;
  } catch {
  }
  var o = hc.call(e);
  return r && (t ? e[Zn] = n : delete e[Zn]), o;
}
var bc = Object.prototype, Ec = bc.toString;
function Tc(e) {
  return Ec.call(e);
}
var Oc = "[object Null]", wc = "[object Undefined]", qa = At ? At.toStringTag : void 0;
function Gn(e) {
  return e == null ? e === void 0 ? wc : Oc : qa && qa in Object(e) ? yc(e) : Tc(e);
}
function Un(e) {
  return e != null && typeof e == "object";
}
var Cc = "[object Symbol]";
function so(e) {
  return typeof e == "symbol" || Un(e) && Gn(e) == Cc;
}
function Sc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var gt = Array.isArray, Ja = At ? At.prototype : void 0, Za = Ja ? Ja.toString : void 0;
function Hl(e) {
  if (typeof e == "string")
    return e;
  if (gt(e))
    return Sc(e, Hl) + "";
  if (so(e))
    return Za ? Za.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Nc = /\s/;
function Lc(e) {
  for (var t = e.length; t-- && Nc.test(e.charAt(t)); )
    ;
  return t;
}
var Ic = /^\s+/;
function Ac(e) {
  return e && e.slice(0, Lc(e) + 1).replace(Ic, "");
}
function cn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Qa = NaN, Pc = /^[-+]0x[0-9a-f]+$/i, Rc = /^0b[01]+$/i, Dc = /^0o[0-7]+$/i, Mc = parseInt;
function es(e) {
  if (typeof e == "number")
    return e;
  if (so(e))
    return Qa;
  if (cn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = cn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ac(e);
  var n = Rc.test(e);
  return n || Dc.test(e) ? Mc(e.slice(2), n ? 2 : 8) : Pc.test(e) ? Qa : +e;
}
function jl(e) {
  return e;
}
var kc = "[object AsyncFunction]", Fc = "[object Function]", $c = "[object GeneratorFunction]", Uc = "[object Proxy]";
function zl(e) {
  if (!cn(e))
    return !1;
  var t = Gn(e);
  return t == Fc || t == $c || t == kc || t == Uc;
}
var wo = Mt["__core-js_shared__"], ts = function() {
  var e = /[^.]+$/.exec(wo && wo.keys && wo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xc(e) {
  return !!ts && ts in e;
}
var Vc = Function.prototype, Bc = Vc.toString;
function Sn(e) {
  if (e != null) {
    try {
      return Bc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Wc = /[\\^$.*+?()[\]{}|]/g, Hc = /^\[object .+?Constructor\]$/, jc = Function.prototype, zc = Object.prototype, Kc = jc.toString, Gc = zc.hasOwnProperty, Yc = RegExp(
  "^" + Kc.call(Gc).replace(Wc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xc(e) {
  if (!cn(e) || xc(e))
    return !1;
  var t = zl(e) ? Yc : Hc;
  return t.test(Sn(e));
}
function qc(e, t) {
  return e?.[t];
}
function Nn(e, t) {
  var n = qc(e, t);
  return Xc(n) ? n : void 0;
}
var ko = Nn(Mt, "WeakMap");
function Jc(e, t, n) {
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
var Zc = 800, Qc = 16, ef = Date.now;
function tf(e) {
  var t = 0, n = 0;
  return function() {
    var r = ef(), o = Qc - (r - n);
    if (n = r, o > 0) {
      if (++t >= Zc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function nf(e) {
  return function() {
    return e;
  };
}
var jr = function() {
  try {
    var e = Nn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), rf = jr ? function(e, t) {
  return jr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: nf(t),
    writable: !0
  });
} : jl, of = tf(rf);
function af(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var sf = 9007199254740991, lf = /^(?:0|[1-9]\d*)$/;
function ca(e, t) {
  var n = typeof e;
  return t = t ?? sf, !!t && (n == "number" || n != "symbol" && lf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function uf(e, t, n) {
  t == "__proto__" && jr ? jr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function fa(e, t) {
  return e === t || e !== e && t !== t;
}
var cf = Object.prototype, ff = cf.hasOwnProperty;
function df(e, t, n) {
  var r = e[t];
  (!(ff.call(e, t) && fa(r, n)) || n === void 0 && !(t in e)) && uf(e, t, n);
}
var ns = Math.max;
function pf(e, t, n) {
  return t = ns(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ns(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(s), Jc(e, this, l);
  };
}
var mf = 9007199254740991;
function da(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mf;
}
function vf(e) {
  return e != null && da(e.length) && !zl(e);
}
var gf = Object.prototype;
function _f(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || gf;
  return e === n;
}
function hf(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var yf = "[object Arguments]";
function rs(e) {
  return Un(e) && Gn(e) == yf;
}
var Kl = Object.prototype, bf = Kl.hasOwnProperty, Ef = Kl.propertyIsEnumerable, pa = rs(/* @__PURE__ */ function() {
  return arguments;
}()) ? rs : function(e) {
  return Un(e) && bf.call(e, "callee") && !Ef.call(e, "callee");
};
function Tf() {
  return !1;
}
var Gl = typeof exports == "object" && exports && !exports.nodeType && exports, os = Gl && typeof module == "object" && module && !module.nodeType && module, Of = os && os.exports === Gl, as = Of ? Mt.Buffer : void 0, wf = as ? as.isBuffer : void 0, Fo = wf || Tf, Cf = "[object Arguments]", Sf = "[object Array]", Nf = "[object Boolean]", Lf = "[object Date]", If = "[object Error]", Af = "[object Function]", Pf = "[object Map]", Rf = "[object Number]", Df = "[object Object]", Mf = "[object RegExp]", kf = "[object Set]", Ff = "[object String]", $f = "[object WeakMap]", Uf = "[object ArrayBuffer]", xf = "[object DataView]", Vf = "[object Float32Array]", Bf = "[object Float64Array]", Wf = "[object Int8Array]", Hf = "[object Int16Array]", jf = "[object Int32Array]", zf = "[object Uint8Array]", Kf = "[object Uint8ClampedArray]", Gf = "[object Uint16Array]", Yf = "[object Uint32Array]", pe = {};
pe[Vf] = pe[Bf] = pe[Wf] = pe[Hf] = pe[jf] = pe[zf] = pe[Kf] = pe[Gf] = pe[Yf] = !0;
pe[Cf] = pe[Sf] = pe[Uf] = pe[Nf] = pe[xf] = pe[Lf] = pe[If] = pe[Af] = pe[Pf] = pe[Rf] = pe[Df] = pe[Mf] = pe[kf] = pe[Ff] = pe[$f] = !1;
function Xf(e) {
  return Un(e) && da(e.length) && !!pe[Gn(e)];
}
function qf(e) {
  return function(t) {
    return e(t);
  };
}
var Yl = typeof exports == "object" && exports && !exports.nodeType && exports, nr = Yl && typeof module == "object" && module && !module.nodeType && module, Jf = nr && nr.exports === Yl, Co = Jf && Bl.process, ss = function() {
  try {
    var e = nr && nr.require && nr.require("util").types;
    return e || Co && Co.binding && Co.binding("util");
  } catch {
  }
}(), ls = ss && ss.isTypedArray, Xl = ls ? qf(ls) : Xf, Zf = Object.prototype, Qf = Zf.hasOwnProperty;
function ed(e, t) {
  var n = gt(e), r = !n && pa(e), o = !n && !r && Fo(e), a = !n && !r && !o && Xl(e), s = n || r || o || a, l = s ? hf(e.length, String) : [], i = l.length;
  for (var u in e)
    (t || Qf.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ca(u, i))) && l.push(u);
  return l;
}
function td(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var nd = td(Object.keys, Object), rd = Object.prototype, od = rd.hasOwnProperty;
function ad(e) {
  if (!_f(e))
    return nd(e);
  var t = [];
  for (var n in Object(e))
    od.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ql(e) {
  return vf(e) ? ed(e) : ad(e);
}
var sd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ld = /^\w*$/;
function ma(e, t) {
  if (gt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || so(e) ? !0 : ld.test(e) || !sd.test(e) || t != null && e in Object(t);
}
var ir = Nn(Object, "create");
function id() {
  this.__data__ = ir ? ir(null) : {}, this.size = 0;
}
function ud(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var cd = "__lodash_hash_undefined__", fd = Object.prototype, dd = fd.hasOwnProperty;
function pd(e) {
  var t = this.__data__;
  if (ir) {
    var n = t[e];
    return n === cd ? void 0 : n;
  }
  return dd.call(t, e) ? t[e] : void 0;
}
var md = Object.prototype, vd = md.hasOwnProperty;
function gd(e) {
  var t = this.__data__;
  return ir ? t[e] !== void 0 : vd.call(t, e);
}
var _d = "__lodash_hash_undefined__";
function hd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ir && t === void 0 ? _d : t, this;
}
function En(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
En.prototype.clear = id;
En.prototype.delete = ud;
En.prototype.get = pd;
En.prototype.has = gd;
En.prototype.set = hd;
function yd() {
  this.__data__ = [], this.size = 0;
}
function lo(e, t) {
  for (var n = e.length; n--; )
    if (fa(e[n][0], t))
      return n;
  return -1;
}
var bd = Array.prototype, Ed = bd.splice;
function Td(e) {
  var t = this.__data__, n = lo(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Ed.call(t, n, 1), --this.size, !0;
}
function Od(e) {
  var t = this.__data__, n = lo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function wd(e) {
  return lo(this.__data__, e) > -1;
}
function Cd(e, t) {
  var n = this.__data__, r = lo(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function qt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qt.prototype.clear = yd;
qt.prototype.delete = Td;
qt.prototype.get = Od;
qt.prototype.has = wd;
qt.prototype.set = Cd;
var ur = Nn(Mt, "Map");
function Sd() {
  this.size = 0, this.__data__ = {
    hash: new En(),
    map: new (ur || qt)(),
    string: new En()
  };
}
function Nd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function io(e, t) {
  var n = e.__data__;
  return Nd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ld(e) {
  var t = io(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Id(e) {
  return io(this, e).get(e);
}
function Ad(e) {
  return io(this, e).has(e);
}
function Pd(e, t) {
  var n = io(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Jt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Jt.prototype.clear = Sd;
Jt.prototype.delete = Ld;
Jt.prototype.get = Id;
Jt.prototype.has = Ad;
Jt.prototype.set = Pd;
var Rd = "Expected a function";
function va(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Rd);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (va.Cache || Jt)(), n;
}
va.Cache = Jt;
var Dd = 500;
function Md(e) {
  var t = va(e, function(r) {
    return n.size === Dd && n.clear(), r;
  }), n = t.cache;
  return t;
}
var kd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fd = /\\(\\)?/g, $d = Md(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(kd, function(n, r, o, a) {
    t.push(o ? a.replace(Fd, "$1") : r || n);
  }), t;
});
function Ud(e) {
  return e == null ? "" : Hl(e);
}
function uo(e, t) {
  return gt(e) ? e : ma(e, t) ? [e] : $d(Ud(e));
}
function yr(e) {
  if (typeof e == "string" || so(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ga(e, t) {
  t = uo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[yr(t[n++])];
  return n && n == r ? e : void 0;
}
function Wt(e, t, n) {
  var r = e == null ? void 0 : ga(e, t);
  return r === void 0 ? n : r;
}
function Jl(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var is = At ? At.isConcatSpreadable : void 0;
function xd(e) {
  return gt(e) || pa(e) || !!(is && e && e[is]);
}
function Vd(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = xd), o || (o = []); ++a < s; ) {
    var l = e[a];
    n(l) ? Jl(o, l) : o[o.length] = l;
  }
  return o;
}
function Bd(e) {
  var t = e == null ? 0 : e.length;
  return t ? Vd(e) : [];
}
function Wd(e) {
  return of(pf(e, void 0, Bd), e + "");
}
function sn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return gt(e) ? e : [e];
}
function Hd() {
  this.__data__ = new qt(), this.size = 0;
}
function jd(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function zd(e) {
  return this.__data__.get(e);
}
function Kd(e) {
  return this.__data__.has(e);
}
var Gd = 200;
function Yd(e, t) {
  var n = this.__data__;
  if (n instanceof qt) {
    var r = n.__data__;
    if (!ur || r.length < Gd - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Jt(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Kt(e) {
  var t = this.__data__ = new qt(e);
  this.size = t.size;
}
Kt.prototype.clear = Hd;
Kt.prototype.delete = jd;
Kt.prototype.get = zd;
Kt.prototype.has = Kd;
Kt.prototype.set = Yd;
function Xd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function qd() {
  return [];
}
var Jd = Object.prototype, Zd = Jd.propertyIsEnumerable, us = Object.getOwnPropertySymbols, Qd = us ? function(e) {
  return e == null ? [] : (e = Object(e), Xd(us(e), function(t) {
    return Zd.call(e, t);
  }));
} : qd;
function ep(e, t, n) {
  var r = t(e);
  return gt(e) ? r : Jl(r, n(e));
}
function cs(e) {
  return ep(e, ql, Qd);
}
var $o = Nn(Mt, "DataView"), Uo = Nn(Mt, "Promise"), xo = Nn(Mt, "Set"), fs = "[object Map]", tp = "[object Object]", ds = "[object Promise]", ps = "[object Set]", ms = "[object WeakMap]", vs = "[object DataView]", np = Sn($o), rp = Sn(ur), op = Sn(Uo), ap = Sn(xo), sp = Sn(ko), an = Gn;
($o && an(new $o(new ArrayBuffer(1))) != vs || ur && an(new ur()) != fs || Uo && an(Uo.resolve()) != ds || xo && an(new xo()) != ps || ko && an(new ko()) != ms) && (an = function(e) {
  var t = Gn(e), n = t == tp ? e.constructor : void 0, r = n ? Sn(n) : "";
  if (r)
    switch (r) {
      case np:
        return vs;
      case rp:
        return fs;
      case op:
        return ds;
      case ap:
        return ps;
      case sp:
        return ms;
    }
  return t;
});
var gs = Mt.Uint8Array, lp = "__lodash_hash_undefined__";
function ip(e) {
  return this.__data__.set(e, lp), this;
}
function up(e) {
  return this.__data__.has(e);
}
function zr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Jt(); ++t < n; )
    this.add(e[t]);
}
zr.prototype.add = zr.prototype.push = ip;
zr.prototype.has = up;
function cp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function fp(e, t) {
  return e.has(t);
}
var dp = 1, pp = 2;
function Zl(e, t, n, r, o, a) {
  var s = n & dp, l = e.length, i = t.length;
  if (l != i && !(s && i > l))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, d = !0, v = n & pp ? new zr() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < l; ) {
    var g = e[p], m = t[p];
    if (r)
      var T = s ? r(m, g, p, t, e, a) : r(g, m, p, e, t, a);
    if (T !== void 0) {
      if (T)
        continue;
      d = !1;
      break;
    }
    if (v) {
      if (!cp(t, function(c, h) {
        if (!fp(v, h) && (g === c || o(g, c, n, r, a)))
          return v.push(h);
      })) {
        d = !1;
        break;
      }
    } else if (!(g === m || o(g, m, n, r, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
function mp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function vp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var gp = 1, _p = 2, hp = "[object Boolean]", yp = "[object Date]", bp = "[object Error]", Ep = "[object Map]", Tp = "[object Number]", Op = "[object RegExp]", wp = "[object Set]", Cp = "[object String]", Sp = "[object Symbol]", Np = "[object ArrayBuffer]", Lp = "[object DataView]", _s = At ? At.prototype : void 0, So = _s ? _s.valueOf : void 0;
function Ip(e, t, n, r, o, a, s) {
  switch (n) {
    case Lp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Np:
      return !(e.byteLength != t.byteLength || !a(new gs(e), new gs(t)));
    case hp:
    case yp:
    case Tp:
      return fa(+e, +t);
    case bp:
      return e.name == t.name && e.message == t.message;
    case Op:
    case Cp:
      return e == t + "";
    case Ep:
      var l = mp;
    case wp:
      var i = r & gp;
      if (l || (l = vp), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= _p, s.set(e, t);
      var f = Zl(l(e), l(t), r, o, a, s);
      return s.delete(e), f;
    case Sp:
      if (So)
        return So.call(e) == So.call(t);
  }
  return !1;
}
var Ap = 1, Pp = Object.prototype, Rp = Pp.hasOwnProperty;
function Dp(e, t, n, r, o, a) {
  var s = n & Ap, l = cs(e), i = l.length, u = cs(t), f = u.length;
  if (i != f && !s)
    return !1;
  for (var p = i; p--; ) {
    var d = l[p];
    if (!(s ? d in t : Rp.call(t, d)))
      return !1;
  }
  var v = a.get(e), g = a.get(t);
  if (v && g)
    return v == t && g == e;
  var m = !0;
  a.set(e, t), a.set(t, e);
  for (var T = s; ++p < i; ) {
    d = l[p];
    var c = e[d], h = t[d];
    if (r)
      var C = s ? r(h, c, d, t, e, a) : r(c, h, d, e, t, a);
    if (!(C === void 0 ? c === h || o(c, h, n, r, a) : C)) {
      m = !1;
      break;
    }
    T || (T = d == "constructor");
  }
  if (m && !T) {
    var b = e.constructor, w = t.constructor;
    b != w && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof w == "function" && w instanceof w) && (m = !1);
  }
  return a.delete(e), a.delete(t), m;
}
var Mp = 1, hs = "[object Arguments]", ys = "[object Array]", Lr = "[object Object]", kp = Object.prototype, bs = kp.hasOwnProperty;
function Fp(e, t, n, r, o, a) {
  var s = gt(e), l = gt(t), i = s ? ys : an(e), u = l ? ys : an(t);
  i = i == hs ? Lr : i, u = u == hs ? Lr : u;
  var f = i == Lr, p = u == Lr, d = i == u;
  if (d && Fo(e)) {
    if (!Fo(t))
      return !1;
    s = !0, f = !1;
  }
  if (d && !f)
    return a || (a = new Kt()), s || Xl(e) ? Zl(e, t, n, r, o, a) : Ip(e, t, i, n, r, o, a);
  if (!(n & Mp)) {
    var v = f && bs.call(e, "__wrapped__"), g = p && bs.call(t, "__wrapped__");
    if (v || g) {
      var m = v ? e.value() : e, T = g ? t.value() : t;
      return a || (a = new Kt()), o(m, T, n, r, a);
    }
  }
  return d ? (a || (a = new Kt()), Dp(e, t, n, r, o, a)) : !1;
}
function co(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Un(e) && !Un(t) ? e !== e && t !== t : Fp(e, t, n, r, co, o);
}
var $p = 1, Up = 2;
function xp(e, t, n, r) {
  var o = n.length, a = o;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var s = n[o];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    s = n[o];
    var l = s[0], i = e[l], u = s[1];
    if (s[2]) {
      if (i === void 0 && !(l in e))
        return !1;
    } else {
      var f = new Kt(), p;
      if (!(p === void 0 ? co(u, i, $p | Up, r, f) : p))
        return !1;
    }
  }
  return !0;
}
function Ql(e) {
  return e === e && !cn(e);
}
function Vp(e) {
  for (var t = ql(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Ql(o)];
  }
  return t;
}
function ei(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Bp(e) {
  var t = Vp(e);
  return t.length == 1 && t[0][2] ? ei(t[0][0], t[0][1]) : function(n) {
    return n === e || xp(n, e, t);
  };
}
function Wp(e, t) {
  return e != null && t in Object(e);
}
function Hp(e, t, n) {
  t = uo(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = yr(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && da(o) && ca(s, o) && (gt(e) || pa(e)));
}
function ti(e, t) {
  return e != null && Hp(e, t, Wp);
}
var jp = 1, zp = 2;
function Kp(e, t) {
  return ma(e) && Ql(t) ? ei(yr(e), t) : function(n) {
    var r = Wt(n, e);
    return r === void 0 && r === t ? ti(n, e) : co(t, r, jp | zp);
  };
}
function Gp(e) {
  return function(t) {
    return t?.[e];
  };
}
function Yp(e) {
  return function(t) {
    return ga(t, e);
  };
}
function Xp(e) {
  return ma(e) ? Gp(yr(e)) : Yp(e);
}
function qp(e) {
  return typeof e == "function" ? e : e == null ? jl : typeof e == "object" ? gt(e) ? Kp(e[0], e[1]) : Bp(e) : Xp(e);
}
var No = function() {
  return Mt.Date.now();
}, Jp = "Expected a function", Zp = Math.max, Qp = Math.min;
function em(e, t, n) {
  var r, o, a, s, l, i, u = 0, f = !1, p = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Jp);
  t = es(t) || 0, cn(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? Zp(es(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d);
  function v(S) {
    var E = r, R = o;
    return r = o = void 0, u = S, s = e.apply(R, E), s;
  }
  function g(S) {
    return u = S, l = setTimeout(c, t), f ? v(S) : s;
  }
  function m(S) {
    var E = S - i, R = S - u, D = t - E;
    return p ? Qp(D, a - R) : D;
  }
  function T(S) {
    var E = S - i, R = S - u;
    return i === void 0 || E >= t || E < 0 || p && R >= a;
  }
  function c() {
    var S = No();
    if (T(S))
      return h(S);
    l = setTimeout(c, m(S));
  }
  function h(S) {
    return l = void 0, d && r ? v(S) : (r = o = void 0, s);
  }
  function C() {
    l !== void 0 && clearTimeout(l), u = 0, r = i = o = l = void 0;
  }
  function b() {
    return l === void 0 ? s : h(No());
  }
  function w() {
    var S = No(), E = T(S);
    if (r = arguments, o = this, i = S, E) {
      if (l === void 0)
        return g(i);
      if (p)
        return clearTimeout(l), l = setTimeout(c, t), v(i);
    }
    return l === void 0 && (l = setTimeout(c, t)), s;
  }
  return w.cancel = C, w.flush = b, w;
}
function tm(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return af(e, qp(t), o);
}
function Vo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function rr(e, t) {
  return co(e, t);
}
function _a(e) {
  return e == null;
}
function nm(e) {
  return e === void 0;
}
function ni(e, t, n, r) {
  if (!cn(e))
    return e;
  t = uo(t, e);
  for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
    var i = yr(t[o]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (o != s) {
      var f = l[i];
      u = void 0, u === void 0 && (u = cn(f) ? f : ca(t[o + 1]) ? [] : {});
    }
    df(l, i, u), l = l[i];
  }
  return e;
}
function rm(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], l = ga(e, s);
    n(l, s) && ni(a, uo(s, e), l);
  }
  return a;
}
function om(e, t) {
  return rm(e, t, function(n, r) {
    return ti(e, r);
  });
}
var am = Wd(function(e, t) {
  return e == null ? {} : om(e, t);
});
function sm(e, t, n) {
  return e == null ? e : ni(e, t, n);
}
const kn = (e) => e === void 0, Kr = (e) => typeof e == "boolean", $e = (e) => typeof e == "number", Qb = (e) => !e && e !== 0 || ft(e) && e.length === 0 || dt(e) && !Object.keys(e).length, rt = (e) => typeof Element > "u" ? !1 : e instanceof Element, lm = (e) => Lt(e) ? !Number.isNaN(Number(e)) : !1;
var im = Object.defineProperty, um = Object.defineProperties, cm = Object.getOwnPropertyDescriptors, Es = Object.getOwnPropertySymbols, fm = Object.prototype.hasOwnProperty, dm = Object.prototype.propertyIsEnumerable, Ts = (e, t, n) => t in e ? im(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pm = (e, t) => {
  for (var n in t || (t = {}))
    fm.call(t, n) && Ts(e, n, t[n]);
  if (Es)
    for (var n of Es(t))
      dm.call(t, n) && Ts(e, n, t[n]);
  return e;
}, mm = (e, t) => um(e, cm(t));
function vm(e, t) {
  var n;
  const r = hr();
  return kl(() => {
    r.value = e();
  }, mm(pm({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), la(r);
}
var Os;
const Te = typeof window < "u", ws = (e) => typeof e == "function", gm = (e) => typeof e == "string", Gr = () => {
}, Bo = Te && ((Os = window?.navigator) == null ? void 0 : Os.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function cr(e) {
  return typeof e == "function" ? e() : O(e);
}
function _m(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
function hm(e, t = {}) {
  let n, r, o = Gr;
  const a = (l) => {
    clearTimeout(l), o(), o = Gr;
  };
  return (l) => {
    const i = cr(e), u = cr(t.maxWait);
    return n && a(n), i <= 0 || u !== void 0 && u <= 0 ? (r && (a(r), r = null), Promise.resolve(l())) : new Promise((f, p) => {
      o = t.rejectOnCancel ? p : f, u && !r && (r = setTimeout(() => {
        n && a(n), r = null, f(l());
      }, u)), n = setTimeout(() => {
        r && a(r), r = null, f(l());
      }, i);
    });
  };
}
function ym(e) {
  return e;
}
function bm(e, t) {
  let n, r, o;
  const a = F(!0), s = () => {
    a.value = !0, o();
  };
  q(e, s, { flush: "sync" });
  const l = ws(t) ? t : t.get, i = ws(t) ? void 0 : t.set, u = Zu((f, p) => (r = f, o = p, {
    get() {
      return a.value && (n = l(), a.value = !1), r(), n;
    },
    set(d) {
      i?.(d);
    }
  }));
  return Object.isExtensible(u) && (u.trigger = s), u;
}
function br(e) {
  return qu() ? (Ju(e), !0) : !1;
}
function Em(e, t = 200, n = {}) {
  return _m(hm(t, n), e);
}
function eE(e, t = 200, n = {}) {
  const r = F(e.value), o = Em(() => {
    r.value = e.value;
  }, t, n);
  return q(e, () => o()), r;
}
function Tm(e, t = !0) {
  We() ? De(e) : t ? e() : je(e);
}
function ri(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = F(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function l() {
    o.value = !1, s();
  }
  function i(...u) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...u);
    }, cr(t));
  }
  return r && (o.value = !0, Te && i()), br(l), {
    isPending: la(o),
    start: i,
    stop: l
  };
}
function Ht(e) {
  var t;
  const n = cr(e);
  return (t = n?.$el) != null ? t : n;
}
const Er = Te ? window : void 0;
function Be(...e) {
  let t, n, r, o;
  if (gm(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Er) : [t, n, r, o] = e, !t)
    return Gr;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, l = (f, p, d, v) => (f.addEventListener(p, d, v), () => f.removeEventListener(p, d, v)), i = q(() => [Ht(t), cr(o)], ([f, p]) => {
    s(), f && a.push(...n.flatMap((d) => r.map((v) => l(f, d, v, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), s();
  };
  return br(u), u;
}
let Cs = !1;
function Om(e, t, n = {}) {
  const { window: r = Er, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Bo && !Cs && (Cs = !0, Array.from(r.document.body.children).forEach((d) => d.addEventListener("click", Gr)));
  let l = !0;
  const i = (d) => o.some((v) => {
    if (typeof v == "string")
      return Array.from(r.document.querySelectorAll(v)).some((g) => g === d.target || d.composedPath().includes(g));
    {
      const g = Ht(v);
      return g && (d.target === g || d.composedPath().includes(g));
    }
  }), f = [
    Be(r, "click", (d) => {
      const v = Ht(e);
      if (!(!v || v === d.target || d.composedPath().includes(v))) {
        if (d.detail === 0 && (l = !i(d)), !l) {
          l = !0;
          return;
        }
        t(d);
      }
    }, { passive: !0, capture: a }),
    Be(r, "pointerdown", (d) => {
      const v = Ht(e);
      v && (l = !d.composedPath().includes(v) && !i(d));
    }, { passive: !0 }),
    s && Be(r, "blur", (d) => {
      var v;
      const g = Ht(e);
      ((v = r.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(d);
    })
  ].filter(Boolean);
  return () => f.forEach((d) => d());
}
function tE(e = {}) {
  var t;
  const { window: n = Er } = e, r = (t = e.document) != null ? t : n?.document, o = bm(() => null, () => r?.activeElement);
  return n && (Be(n, "blur", (a) => {
    a.relatedTarget === null && o.trigger();
  }, !0), Be(n, "focus", o.trigger, !0)), o;
}
function oi(e, t = !1) {
  const n = F(), r = () => n.value = !!e();
  return r(), Tm(r, t), n;
}
const Ss = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ns = "__vueuse_ssr_handlers__";
Ss[Ns] = Ss[Ns] || {};
var Ls = Object.getOwnPropertySymbols, wm = Object.prototype.hasOwnProperty, Cm = Object.prototype.propertyIsEnumerable, Sm = (e, t) => {
  var n = {};
  for (var r in e)
    wm.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ls)
    for (var r of Ls(e))
      t.indexOf(r) < 0 && Cm.call(e, r) && (n[r] = e[r]);
  return n;
};
function Bt(e, t, n = {}) {
  const r = n, { window: o = Er } = r, a = Sm(r, ["window"]);
  let s;
  const l = oi(() => o && "ResizeObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = q(() => Ht(e), (p) => {
    i(), l.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    i(), u();
  };
  return br(f), {
    isSupported: l,
    stop: f
  };
}
var Is = Object.getOwnPropertySymbols, Nm = Object.prototype.hasOwnProperty, Lm = Object.prototype.propertyIsEnumerable, Im = (e, t) => {
  var n = {};
  for (var r in e)
    Nm.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Is)
    for (var r of Is(e))
      t.indexOf(r) < 0 && Lm.call(e, r) && (n[r] = e[r]);
  return n;
};
function Am(e, t, n = {}) {
  const r = n, { window: o = Er } = r, a = Im(r, ["window"]);
  let s;
  const l = oi(() => o && "MutationObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = q(() => Ht(e), (p) => {
    i(), l.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), f = () => {
    i(), u();
  };
  return br(f), {
    isSupported: l,
    stop: f
  };
}
var As;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(As || (As = {}));
var Pm = Object.defineProperty, Ps = Object.getOwnPropertySymbols, Rm = Object.prototype.hasOwnProperty, Dm = Object.prototype.propertyIsEnumerable, Rs = (e, t, n) => t in e ? Pm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Mm = (e, t) => {
  for (var n in t || (t = {}))
    Rm.call(t, n) && Rs(e, n, t[n]);
  if (Ps)
    for (var n of Ps(t))
      Dm.call(t, n) && Rs(e, n, t[n]);
  return e;
};
const km = {
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
Mm({
  linear: ym
}, km);
class ai extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Fm(e, t) {
  throw new ai(`[${e}] ${t}`);
}
function at(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Lt(e) ? new ai(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Ds = {
  current: 0
}, Ms = F(0), si = 2e3, ks = Symbol("elZIndexContextKey"), li = Symbol("zIndexContextKey"), ii = (e) => {
  const t = We() ? ue(ks, Ds) : Ds, n = e || (We() ? ue(li, void 0) : void 0), r = I(() => {
    const s = O(n);
    return $e(s) ? s : si;
  }), o = I(() => r.value + Ms.value), a = () => (t.current++, Ms.value = t.current, o.value);
  return !Te && !ue(ks) && at("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var $m = {
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
const Um = (e) => (t, n) => xm(t, n, O(e)), xm = (e, t, n) => Wt(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Vm = (e) => {
  const t = I(() => O(e).name), n = Qu(e) ? e : F(e);
  return {
    lang: t,
    locale: n,
    t: Um(e)
  };
}, ui = Symbol("localeContextKey"), ci = (e) => {
  const t = e || ue(ui, F());
  return Vm(I(() => t.value || $m));
}, fi = "__epPropKey", G = (e) => e, Bm = (e) => dt(e) && !!e[fi], fo = (e, t) => {
  if (!dt(e) || Bm(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, i = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), Ga(e, "default") && p.push(o), f || (f = p.includes(u))), s && (f || (f = s(u))), !f && p.length > 0) {
        const d = [...new Set(p)].map((v) => JSON.stringify(v)).join(", ");
        ec(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${d}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [fi]: !0
  };
  return Ga(e, "default") && (i.default = o), i;
}, he = (e) => Vo(Object.entries(e).map(([t, n]) => [
  t,
  fo(n, t)
])), di = ["", "default", "small", "large"], pi = fo({
  type: String,
  values: di,
  required: !1
}), mi = Symbol("size"), Wm = () => {
  const e = ue(mi, {});
  return I(() => O(e.size) || "");
}, vi = Symbol("emptyValuesContextKey"), Hm = "use-empty-values", jm = ["", void 0, null], zm = void 0, gi = he({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ae(e) ? !e() : !e
  }
}), Km = (e, t) => {
  const n = We() ? ue(vi, F({})) : F({}), r = I(() => e.emptyValues || n.value.emptyValues || jm), o = I(() => Ae(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ae(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : t !== void 0 ? t : zm), a = (s) => r.value.includes(s);
  return r.value.includes(o.value) || at(Hm, "value-on-clear should be a value of empty-values"), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Fs = (e) => Object.keys(e), nE = (e, t, n) => ({
  get value() {
    return Wt(e, t, n);
  },
  set value(r) {
    sm(e, t, r);
  }
}), Yr = F();
function _i(e, t = void 0) {
  const n = We() ? ue(xl, Yr) : Yr;
  return e ? I(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
function hi(e, t) {
  const n = _i(), r = Ue(e, I(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || $r;
  })), o = ci(I(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), a = ii(I(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || si;
  })), s = I(() => {
    var l;
    return O(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return yi(I(() => O(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const yi = (e, t, n = !1) => {
  var r;
  const o = !!We(), a = o ? _i() : void 0, s = (r = void 0) != null ? r : o ? It : void 0;
  if (!s) {
    at("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = I(() => {
    const i = O(e);
    return a?.value ? Gm(a.value, i) : i;
  });
  return s(xl, l), s(ui, I(() => l.value.locale)), s(Vl, I(() => l.value.namespace)), s(li, I(() => l.value.zIndex)), s(mi, {
    size: I(() => l.value.size || "")
  }), s(vi, I(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Yr.value) && (Yr.value = l.value), l;
}, Gm = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Fs(e), ...Fs(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Pn = "update:modelValue", bi = "change", rE = "input";
var Oe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Ym = "utils/dom/style", Ei = (e = "") => e.split(" ").filter((t) => !!t.trim()), oE = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, aE = (e, t) => {
  !e || !t.trim() || e.classList.add(...Ei(t));
}, sE = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Ei(t));
}, lE = (e, t) => {
  var n;
  if (!Te || !e || !t)
    return "";
  let r = tc(t);
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
function fr(e, t = "px") {
  if (!e)
    return "";
  if ($e(e) || lm(e))
    return `${e}${t}`;
  if (Lt(e))
    return e;
  at(Ym, "binding value must be a string or number");
}
let Ir;
const iE = (e) => {
  var t;
  if (!Te)
    return 0;
  if (Ir !== void 0)
    return Ir;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const r = n.offsetWidth;
  n.style.overflow = "scroll";
  const o = document.createElement("div");
  o.style.width = "100%", n.appendChild(o);
  const a = o.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Ir = r - a, Ir;
};
function Xm(e, t) {
  if (!Te)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const o = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), a = o + t.offsetHeight, s = e.scrollTop, l = s + e.clientHeight;
  o < s ? e.scrollTop = o : a > l && (e.scrollTop = a - e.clientHeight);
}
const fn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Ti = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Oi = (e) => (e.install = Wr, e), qm = he({
  size: {
    type: G([Number, String])
  },
  color: {
    type: String
  }
}), Jm = V({
  name: "ElIcon",
  inheritAttrs: !1
}), Zm = /* @__PURE__ */ V({
  ...Jm,
  props: qm,
  setup(e) {
    const t = e, n = Ue("icon"), r = I(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: kn(o) ? void 0 : fr(o),
        "--color": a
      };
    });
    return (o, a) => (M(), z("i", ao({
      class: O(n).b(),
      style: O(r)
    }, o.$attrs), [
      te(o.$slots, "default")
    ], 16));
  }
});
var Qm = /* @__PURE__ */ Oe(Zm, [["__file", "icon.vue"]]);
const Tn = fn(Qm);
/*! Element Plus Icons Vue v2.3.1 */
var ev = /* @__PURE__ */ V({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), tv = ev, nv = /* @__PURE__ */ V({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), uE = nv, rv = /* @__PURE__ */ V({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), cE = rv, ov = /* @__PURE__ */ V({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), fE = ov, av = /* @__PURE__ */ V({
  name: "Calendar",
  __name: "calendar",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64"
      })
    ]));
  }
}), dE = av, sv = /* @__PURE__ */ V({
  name: "Check",
  __name: "check",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), pE = sv, lv = /* @__PURE__ */ V({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (M(), z("svg", {
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
}), iv = lv, uv = /* @__PURE__ */ V({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), cv = uv, fv = /* @__PURE__ */ V({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (M(), z("svg", {
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
}), wi = fv, dv = /* @__PURE__ */ V({
  name: "Clock",
  __name: "clock",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      H("path", {
        fill: "currentColor",
        d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      }),
      H("path", {
        fill: "currentColor",
        d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"
      })
    ]));
  }
}), mE = dv, pv = /* @__PURE__ */ V({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Xr = pv, mv = /* @__PURE__ */ V({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
}), vE = mv, vv = /* @__PURE__ */ V({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
}), gE = vv, gv = /* @__PURE__ */ V({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (M(), z("svg", {
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
}), _E = gv, _v = /* @__PURE__ */ V({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), hv = _v, yv = /* @__PURE__ */ V({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), bv = yv, Ev = /* @__PURE__ */ V({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), hE = Ev, Tv = /* @__PURE__ */ V({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), yE = Tv, Ov = /* @__PURE__ */ V({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), bE = Ov, wv = /* @__PURE__ */ V({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Cv = wv, Sv = /* @__PURE__ */ V({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), EE = Sv, Nv = /* @__PURE__ */ V({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (M(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      H("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Lv = Nv;
const qr = G([
  String,
  Object,
  Function
]), Iv = {
  Close: Xr
}, Av = {
  Close: Xr
}, Jr = {
  success: Cv,
  warning: Lv,
  error: cv,
  info: hv
}, Pv = {
  validating: bv,
  success: iv,
  error: wi
}, Rv = (e) => e, Dv = he({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), po = (e) => am(Dv, e), ha = Symbol("formContextKey"), Zr = Symbol("formItemContextKey"), Wo = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Mv = Symbol("elIdInjection"), Ci = () => We() ? ue(Mv, Wo) : Wo, mo = (e) => {
  const t = Ci();
  !Te && t === Wo && at("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = ua();
  return vm(() => O(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, kv = () => {
  const e = ue(ha, void 0), t = ue(Zr, void 0);
  return {
    form: e,
    formItem: t
  };
}, Fv = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = F(!1)), r || (r = F(!1));
  const o = F();
  let a;
  const s = I(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return De(() => {
    a = q([ln(e, "id"), n], ([l, i]) => {
      const u = l ?? (i ? void 0 : mo().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !i && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Fl(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, Si = (e) => {
  const t = We();
  return I(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Ni = (e, t = {}) => {
  const n = F(void 0), r = t.prop ? n : Si("size"), o = t.global ? n : Wm(), a = t.form ? { size: void 0 } : ue(ha, void 0), s = t.formItem ? { size: void 0 } : ue(Zr, void 0);
  return I(() => r.value || O(e) || s?.size || a?.size || o.value || "");
}, TE = (e) => {
  const t = Si("disabled"), n = ue(ha, void 0);
  return I(() => t.value || O(e) || n?.disabled || !1);
};
function $v(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = We(), { emit: s } = a, l = hr(), i = F(!1), u = (d) => {
    Ae(t) && t(d) || i.value || (i.value = !0, s("focus", d), n?.());
  }, f = (d) => {
    var v;
    Ae(r) && r(d) || d.relatedTarget && ((v = l.value) != null && v.contains(d.relatedTarget)) || (i.value = !1, s("blur", d), o?.());
  }, p = () => {
    var d, v;
    (d = l.value) != null && d.contains(document.activeElement) && l.value !== document.activeElement || (v = e.value) == null || v.focus();
  };
  return q(l, (d) => {
    d && d.setAttribute("tabindex", "-1");
  }), Be(l, "focus", u, !0), Be(l, "blur", f, !0), Be(l, "click", p, !0), process.env.NODE_ENV === "test" && De(() => {
    const d = rt(e.value) ? e.value : document.querySelector("input,textarea");
    d && (Be(d, "focus", u, !0), Be(d, "blur", f, !0));
  }), {
    isFocused: i,
    wrapperRef: l,
    handleFocus: u,
    handleBlur: f
  };
}
const Uv = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function xv({
  afterComposition: e,
  emit: t
}) {
  const n = F(!1), r = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, o = (l) => {
    var i;
    t?.("compositionupdate", l);
    const u = (i = l.target) == null ? void 0 : i.value, f = u[u.length - 1] || "";
    n.value = !Uv(f);
  }, a = (l) => {
    t?.("compositionend", l), n.value && (n.value = !1, je(() => e(l)));
  };
  return {
    isComposing: n,
    handleComposition: (l) => {
      l.type === "compositionend" ? a(l) : o(l);
    },
    handleCompositionStart: r,
    handleCompositionUpdate: o,
    handleCompositionEnd: a
  };
}
const In = 4, Vv = {
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
}, Bv = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ya = Symbol("scrollbarContextKey"), Wv = he({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Hv = "Thumb", jv = /* @__PURE__ */ V({
  __name: "thumb",
  props: Wv,
  setup(e) {
    const t = e, n = ue(ya), r = Ue("scrollbar");
    n || Fm(Hv, "can not inject scrollbar context");
    const o = F(), a = F(), s = F({}), l = F(!1);
    let i = !1, u = !1, f = Te ? document.onselectstart : null;
    const p = I(() => Vv[t.vertical ? "vertical" : "horizontal"]), d = I(() => Bv({
      size: t.size,
      move: t.move,
      bar: p.value
    })), v = I(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), g = (S) => {
      var E;
      if (S.stopPropagation(), S.ctrlKey || [1, 2].includes(S.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), T(S);
      const R = S.currentTarget;
      R && (s.value[p.value.axis] = R[p.value.offset] - (S[p.value.client] - R.getBoundingClientRect()[p.value.direction]));
    }, m = (S) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const E = Math.abs(S.target.getBoundingClientRect()[p.value.direction] - S[p.value.client]), R = a.value[p.value.offset] / 2, D = (E - R) * 100 * v.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = D * n.wrapElement[p.value.scrollSize] / 100;
    }, T = (S) => {
      S.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", c), document.addEventListener("mouseup", h), f = document.onselectstart, document.onselectstart = () => !1;
    }, c = (S) => {
      if (!o.value || !a.value || i === !1)
        return;
      const E = s.value[p.value.axis];
      if (!E)
        return;
      const R = (o.value.getBoundingClientRect()[p.value.direction] - S[p.value.client]) * -1, D = a.value[p.value.offset] - E, B = (R - D) * 100 * v.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = B * n.wrapElement[p.value.scrollSize] / 100;
    }, h = () => {
      i = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h), w(), u && (l.value = !1);
    }, C = () => {
      u = !1, l.value = !!t.size;
    }, b = () => {
      u = !0, l.value = i;
    };
    Dt(() => {
      w(), document.removeEventListener("mouseup", h);
    });
    const w = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Be(ln(n, "scrollbarElement"), "mousemove", C), Be(ln(n, "scrollbarElement"), "mouseleave", b), (S, E) => (M(), ae(Kn, {
      name: O(r).b("fade"),
      persisted: ""
    }, {
      default: ee(() => [
        nt(H("div", {
          ref_key: "instance",
          ref: o,
          class: W([O(r).e("bar"), O(r).is(O(p).key)]),
          onMousedown: m
        }, [
          H("div", {
            ref_key: "thumb",
            ref: a,
            class: W(O(r).e("thumb")),
            style: Ge(O(d)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [Gt, S.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var $s = /* @__PURE__ */ Oe(jv, [["__file", "thumb.vue"]]);
const zv = he({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Kv = /* @__PURE__ */ V({
  __name: "bar",
  props: zv,
  setup(e, { expose: t }) {
    const n = e, r = ue(ya), o = F(0), a = F(0), s = F(""), l = F(""), i = F(1), u = F(1);
    return t({
      handleScroll: (d) => {
        if (d) {
          const v = d.offsetHeight - In, g = d.offsetWidth - In;
          a.value = d.scrollTop * 100 / v * i.value, o.value = d.scrollLeft * 100 / g * u.value;
        }
      },
      update: () => {
        const d = r?.wrapElement;
        if (!d)
          return;
        const v = d.offsetHeight - In, g = d.offsetWidth - In, m = v ** 2 / d.scrollHeight, T = g ** 2 / d.scrollWidth, c = Math.max(m, n.minSize), h = Math.max(T, n.minSize);
        i.value = m / (v - m) / (c / (v - c)), u.value = T / (g - T) / (h / (g - h)), l.value = c + In < v ? `${c}px` : "", s.value = h + In < g ? `${h}px` : "";
      }
    }), (d, v) => (M(), z(un, null, [
      _e($s, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      _e($s, {
        move: a.value,
        ratio: i.value,
        size: l.value,
        vertical: "",
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Gv = /* @__PURE__ */ Oe(Kv, [["__file", "bar.vue"]]);
const Yv = he({
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
    type: G([String, Object, Array]),
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
  ...po(["ariaLabel", "ariaOrientation"])
}), Xv = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every($e)
}, Ho = "ElScrollbar", qv = V({
  name: Ho
}), Jv = /* @__PURE__ */ V({
  ...qv,
  props: Yv,
  emits: Xv,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Ue("scrollbar");
    let a, s, l = 0, i = 0;
    const u = F(), f = F(), p = F(), d = F(), v = I(() => {
      const w = {};
      return r.height && (w.height = fr(r.height)), r.maxHeight && (w.maxHeight = fr(r.maxHeight)), [r.wrapStyle, w];
    }), g = I(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), m = I(() => [o.e("view"), r.viewClass]), T = () => {
      var w;
      f.value && ((w = d.value) == null || w.handleScroll(f.value), l = f.value.scrollTop, i = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function c(w, S) {
      dt(w) ? f.value.scrollTo(w) : $e(w) && $e(S) && f.value.scrollTo(w, S);
    }
    const h = (w) => {
      if (!$e(w)) {
        at(Ho, "value must be a number");
        return;
      }
      f.value.scrollTop = w;
    }, C = (w) => {
      if (!$e(w)) {
        at(Ho, "value must be a number");
        return;
      }
      f.value.scrollLeft = w;
    }, b = () => {
      var w;
      (w = d.value) == null || w.update();
    };
    return q(() => r.noresize, (w) => {
      w ? (a?.(), s?.()) : ({ stop: a } = Bt(p, b), s = Be("resize", b));
    }, { immediate: !0 }), q(() => [r.maxHeight, r.height], () => {
      r.native || je(() => {
        var w;
        b(), f.value && ((w = d.value) == null || w.handleScroll(f.value));
      });
    }), It(ya, $n({
      scrollbarElement: u,
      wrapElement: f
    })), nc(() => {
      f.value && (f.value.scrollTop = l, f.value.scrollLeft = i);
    }), De(() => {
      r.native || je(() => {
        b();
      });
    }), rc(() => b()), t({
      wrapRef: f,
      update: b,
      scrollTo: c,
      setScrollTop: h,
      setScrollLeft: C,
      handleScroll: T
    }), (w, S) => (M(), z("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: W(O(o).b())
    }, [
      H("div", {
        ref_key: "wrapRef",
        ref: f,
        class: W(O(g)),
        style: Ge(O(v)),
        tabindex: w.tabindex,
        onScroll: T
      }, [
        (M(), ae(Fn(w.tag), {
          id: w.id,
          ref_key: "resizeRef",
          ref: p,
          class: W(O(m)),
          style: Ge(w.viewStyle),
          role: w.role,
          "aria-label": w.ariaLabel,
          "aria-orientation": w.ariaOrientation
        }, {
          default: ee(() => [
            te(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      w.native ? le("v-if", !0) : (M(), ae(Gv, {
        key: 0,
        ref_key: "barRef",
        ref: d,
        always: w.always,
        "min-size": w.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Zv = /* @__PURE__ */ Oe(Jv, [["__file", "scrollbar.vue"]]);
const Qv = fn(Zv), ba = Symbol("popper"), Li = Symbol("popperContent"), eg = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Ii = he({
  role: {
    type: String,
    values: eg,
    default: "tooltip"
  }
}), tg = V({
  name: "ElPopper",
  inheritAttrs: !1
}), ng = /* @__PURE__ */ V({
  ...tg,
  props: Ii,
  setup(e, { expose: t }) {
    const n = e, r = F(), o = F(), a = F(), s = F(), l = I(() => n.role), i = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: l
    };
    return t(i), It(ba, i), (u, f) => te(u.$slots, "default");
  }
});
var rg = /* @__PURE__ */ Oe(ng, [["__file", "popper.vue"]]);
const Ai = he({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), og = V({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), ag = /* @__PURE__ */ V({
  ...og,
  props: Ai,
  setup(e, { expose: t }) {
    const n = e, r = Ue("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = ue(Li, void 0);
    return q(() => n.arrowOffset, (l) => {
      o.value = l;
    }), Dt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (l, i) => (M(), z("span", {
      ref_key: "arrowRef",
      ref: a,
      class: W(O(r).e("arrow")),
      style: Ge(O(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var sg = /* @__PURE__ */ Oe(ag, [["__file", "arrow.vue"]]);
const Pi = he({
  virtualRef: {
    type: G(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: G(Function)
  },
  onMouseleave: {
    type: G(Function)
  },
  onClick: {
    type: G(Function)
  },
  onKeydown: {
    type: G(Function)
  },
  onFocus: {
    type: G(Function)
  },
  onBlur: {
    type: G(Function)
  },
  onContextmenu: {
    type: G(Function)
  },
  id: String,
  open: Boolean
}), Ri = Symbol("elForwardRef"), lg = (e) => {
  It(Ri, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, ig = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), jo = (e) => {
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
}, Lo = "ElOnlyChild", ug = V({
  name: Lo,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = ue(Ri), a = ig((r = o?.setForwardRef) != null ? r : Wr);
    return () => {
      var s;
      const l = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!l)
        return null;
      if (l.length > 1)
        return at(Lo, "requires exact only one valid child."), null;
      const i = Di(l);
      return i ? nt(oc(i, n), [[a]]) : (at(Lo, "no valid child node found"), null);
    };
  }
});
function Di(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (dt(n))
      switch (n.type) {
        case ac:
          continue;
        case $l:
        case "svg":
          return Us(n);
        case un:
          return Di(n.children);
        default:
          return n;
      }
    return Us(n);
  }
  return null;
}
function Us(e) {
  const t = Ue("only-child");
  return _e("span", {
    class: t.e("content")
  }, [e]);
}
const cg = V({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), fg = /* @__PURE__ */ V({
  ...cg,
  props: Pi,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = ue(ba, void 0);
    lg(o);
    const a = I(() => l.value ? n.id : void 0), s = I(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = I(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), i = I(() => l.value ? `${n.open}` : void 0);
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
    return De(() => {
      q(() => n.virtualRef, (p) => {
        p && (o.value = Ht(p));
      }, {
        immediate: !0
      }), q(o, (p, d) => {
        u?.(), u = void 0, rt(p) && (f.forEach((v) => {
          var g;
          const m = n[v];
          m && (p.addEventListener(v.slice(2).toLowerCase(), m), (g = d?.removeEventListener) == null || g.call(d, v.slice(2).toLowerCase(), m));
        }), jo(p) && (u = q([a, s, l, i], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, m) => {
            _a(v[m]) ? p.removeAttribute(g) : p.setAttribute(g, v[m]);
          });
        }, { immediate: !0 }))), rt(d) && jo(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => d.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), Dt(() => {
      if (u?.(), u = void 0, o.value && rt(o.value)) {
        const p = o.value;
        f.forEach((d) => {
          const v = n[d];
          v && p.removeEventListener(d.slice(2).toLowerCase(), v);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, d) => p.virtualTriggering ? le("v-if", !0) : (M(), ae(O(ug), ao({ key: 0 }, p.$attrs, {
      "aria-controls": O(a),
      "aria-describedby": O(s),
      "aria-expanded": O(i),
      "aria-haspopup": O(l)
    }), {
      default: ee(() => [
        te(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var dg = /* @__PURE__ */ Oe(fg, [["__file", "trigger.vue"]]);
const Io = "focus-trap.focus-after-trapped", Ao = "focus-trap.focus-after-released", pg = "focus-trap.focusout-prevented", xs = {
  cancelable: !0,
  bubbles: !1
}, mg = {
  cancelable: !0,
  bubbles: !1
}, Vs = "focusAfterTrapped", Bs = "focusAfterReleased", vg = Symbol("elFocusTrap"), Ea = F(), vo = F(0), Ta = F(0);
let Ar = 0;
const Mi = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ws = (e, t) => {
  for (const n of e)
    if (!gg(n, t))
      return n;
}, gg = (e, t) => {
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
}, _g = (e) => {
  const t = Mi(e), n = Ws(t, e), r = Ws(t.reverse(), e);
  return [n, r];
}, hg = (e) => e instanceof HTMLInputElement && "select" in e, xt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    rt(e) && !jo(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Ta.value = window.performance.now(), e !== n && hg(e) && t && e.select(), rt(e) && r && e.removeAttribute("tabindex");
  }
};
function Hs(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const yg = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Hs(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Hs(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, bg = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (xt(r, t), document.activeElement !== n)
      return;
}, js = yg(), Eg = () => vo.value > Ta.value, Pr = () => {
  Ea.value = "pointer", vo.value = window.performance.now();
}, zs = () => {
  Ea.value = "keyboard", vo.value = window.performance.now();
}, Tg = () => (De(() => {
  Ar === 0 && (document.addEventListener("mousedown", Pr), document.addEventListener("touchstart", Pr), document.addEventListener("keydown", zs)), Ar++;
}), Dt(() => {
  Ar--, Ar <= 0 && (document.removeEventListener("mousedown", Pr), document.removeEventListener("touchstart", Pr), document.removeEventListener("keydown", zs));
}), {
  focusReason: Ea,
  lastUserFocusTimestamp: vo,
  lastAutomatedFocusTimestamp: Ta
}), Rr = (e) => new CustomEvent(pg, {
  ...mg,
  detail: e
}), St = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
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
let Rn = [];
const Ks = (e) => {
  e.code === St.esc && Rn.forEach((t) => t(e));
}, Og = (e) => {
  De(() => {
    Rn.length === 0 && document.addEventListener("keydown", Ks), Te && Rn.push(e);
  }), Dt(() => {
    Rn = Rn.filter((t) => t !== e), Rn.length === 0 && Te && document.removeEventListener("keydown", Ks);
  });
}, wg = V({
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
    Vs,
    Bs,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = F();
    let r, o;
    const { focusReason: a } = Tg();
    Og((g) => {
      e.trapped && !s.paused && t("release-requested", g);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (g) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: m, altKey: T, ctrlKey: c, metaKey: h, currentTarget: C, shiftKey: b } = g, { loop: w } = e, S = m === St.tab && !T && !c && !h, E = document.activeElement;
      if (S && E) {
        const R = C, [D, B] = _g(R);
        if (D && B) {
          if (!b && E === B) {
            const j = Rr({
              focusReason: a.value
            });
            t("focusout-prevented", j), j.defaultPrevented || (g.preventDefault(), w && xt(D, !0));
          } else if (b && [D, R].includes(E)) {
            const j = Rr({
              focusReason: a.value
            });
            t("focusout-prevented", j), j.defaultPrevented || (g.preventDefault(), w && xt(B, !0));
          }
        } else if (E === R) {
          const j = Rr({
            focusReason: a.value
          });
          t("focusout-prevented", j), j.defaultPrevented || g.preventDefault();
        }
      }
    };
    It(vg, {
      focusTrapRef: n,
      onKeydown: l
    }), q(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), q([n], ([g], [m]) => {
      g && (g.addEventListener("keydown", l), g.addEventListener("focusin", f), g.addEventListener("focusout", p)), m && (m.removeEventListener("keydown", l), m.removeEventListener("focusin", f), m.removeEventListener("focusout", p));
    });
    const i = (g) => {
      t(Vs, g);
    }, u = (g) => t(Bs, g), f = (g) => {
      const m = O(n);
      if (!m)
        return;
      const T = g.target, c = g.relatedTarget, h = T && m.contains(T);
      e.trapped || c && m.contains(c) || (r = c), h && t("focusin", g), !s.paused && e.trapped && (h ? o = T : xt(o, !0));
    }, p = (g) => {
      const m = O(n);
      if (!(s.paused || !m))
        if (e.trapped) {
          const T = g.relatedTarget;
          !_a(T) && !m.contains(T) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const c = Rr({
                focusReason: a.value
              });
              t("focusout-prevented", c), c.defaultPrevented || xt(o, !0);
            }
          }, 0);
        } else {
          const T = g.target;
          T && m.contains(T) || t("focusout", g);
        }
    };
    async function d() {
      await je();
      const g = O(n);
      if (g) {
        js.push(s);
        const m = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = m, !g.contains(m)) {
          const c = new Event(Io, xs);
          g.addEventListener(Io, i), g.dispatchEvent(c), c.defaultPrevented || je(() => {
            let h = e.focusStartEl;
            Lt(h) || (xt(h), document.activeElement !== h && (h = "first")), h === "first" && bg(Mi(g), !0), (document.activeElement === m || h === "container") && xt(g);
          });
        }
      }
    }
    function v() {
      const g = O(n);
      if (g) {
        g.removeEventListener(Io, i);
        const m = new CustomEvent(Ao, {
          ...xs,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(Ao, u), g.dispatchEvent(m), !m.defaultPrevented && (a.value == "keyboard" || !Eg() || g.contains(document.activeElement)) && xt(r ?? document.body), g.removeEventListener(Ao, u), js.remove(s);
      }
    }
    return De(() => {
      e.trapped && d(), q(() => e.trapped, (g) => {
        g ? d() : v();
      });
    }), Dt(() => {
      e.trapped && v(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function Cg(e, t, n, r, o, a) {
  return te(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Sg = /* @__PURE__ */ Oe(wg, [["render", Cg], ["__file", "focus-trap.vue"]]), Ye = "top", st = "bottom", lt = "right", Xe = "left", Oa = "auto", Tr = [Ye, st, lt, Xe], xn = "start", dr = "end", Ng = "clippingParents", ki = "viewport", Qn = "popper", Lg = "reference", Gs = Tr.reduce(function(e, t) {
  return e.concat([t + "-" + xn, t + "-" + dr]);
}, []), go = [].concat(Tr, [Oa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + xn, t + "-" + dr]);
}, []), Ig = "beforeRead", Ag = "read", Pg = "afterRead", Rg = "beforeMain", Dg = "main", Mg = "afterMain", kg = "beforeWrite", Fg = "write", $g = "afterWrite", Ug = [Ig, Ag, Pg, Rg, Dg, Mg, kg, Fg, $g];
function Pt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Qe(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function On(e) {
  var t = Qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function ot(e) {
  var t = Qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function wa(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function xg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !ot(a) || !Pt(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Vg(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !ot(o) || !Pt(o) || (Object.assign(o.style, l), Object.keys(a).forEach(function(i) {
        o.removeAttribute(i);
      }));
    });
  };
}
var Fi = { name: "applyStyles", enabled: !0, phase: "write", fn: xg, effect: Vg, requires: ["computeStyles"] };
function Nt(e) {
  return e.split("-")[0];
}
var yn = Math.max, Qr = Math.min, Vn = Math.round;
function zo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function $i() {
  return !/^((?!chrome|android).)*safari/i.test(zo());
}
function Bn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && ot(e) && (o = e.offsetWidth > 0 && Vn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Vn(r.height) / e.offsetHeight || 1);
  var s = On(e) ? Qe(e) : window, l = s.visualViewport, i = !$i() && n, u = (r.left + (i && l ? l.offsetLeft : 0)) / o, f = (r.top + (i && l ? l.offsetTop : 0)) / a, p = r.width / o, d = r.height / a;
  return { width: p, height: d, top: f, right: u + p, bottom: f + d, left: u, x: u, y: f };
}
function Ca(e) {
  var t = Bn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Ui(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && wa(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Yt(e) {
  return Qe(e).getComputedStyle(e);
}
function Bg(e) {
  return ["table", "td", "th"].indexOf(Pt(e)) >= 0;
}
function dn(e) {
  return ((On(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function _o(e) {
  return Pt(e) === "html" ? e : e.assignedSlot || e.parentNode || (wa(e) ? e.host : null) || dn(e);
}
function Ys(e) {
  return !ot(e) || Yt(e).position === "fixed" ? null : e.offsetParent;
}
function Wg(e) {
  var t = /firefox/i.test(zo()), n = /Trident/i.test(zo());
  if (n && ot(e)) {
    var r = Yt(e);
    if (r.position === "fixed") return null;
  }
  var o = _o(e);
  for (wa(o) && (o = o.host); ot(o) && ["html", "body"].indexOf(Pt(o)) < 0; ) {
    var a = Yt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Or(e) {
  for (var t = Qe(e), n = Ys(e); n && Bg(n) && Yt(n).position === "static"; ) n = Ys(n);
  return n && (Pt(n) === "html" || Pt(n) === "body" && Yt(n).position === "static") ? t : n || Wg(e) || t;
}
function Sa(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function or(e, t, n) {
  return yn(e, Qr(t, n));
}
function Hg(e, t, n) {
  var r = or(e, t, n);
  return r > n ? n : r;
}
function xi() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Vi(e) {
  return Object.assign({}, xi(), e);
}
function Bi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var jg = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Vi(typeof e != "number" ? e : Bi(e, Tr));
};
function zg(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Nt(n.placement), i = Sa(l), u = [Xe, lt].indexOf(l) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = jg(o.padding, n), d = Ca(a), v = i === "y" ? Ye : Xe, g = i === "y" ? st : lt, m = n.rects.reference[f] + n.rects.reference[i] - s[i] - n.rects.popper[f], T = s[i] - n.rects.reference[i], c = Or(a), h = c ? i === "y" ? c.clientHeight || 0 : c.clientWidth || 0 : 0, C = m / 2 - T / 2, b = p[v], w = h - d[f] - p[g], S = h / 2 - d[f] / 2 + C, E = or(b, S, w), R = i;
    n.modifiersData[r] = (t = {}, t[R] = E, t.centerOffset = E - S, t);
  }
}
function Kg(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ui(t.elements.popper, o) && (t.elements.arrow = o));
}
var Gg = { name: "arrow", enabled: !0, phase: "main", fn: zg, effect: Kg, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Wn(e) {
  return e.split("-")[1];
}
var Yg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Xg(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Vn(n * o) / o || 0, y: Vn(r * o) / o || 0 };
}
function Xs(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, l = e.position, i = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, d = s.x, v = d === void 0 ? 0 : d, g = s.y, m = g === void 0 ? 0 : g, T = typeof f == "function" ? f({ x: v, y: m }) : { x: v, y: m };
  v = T.x, m = T.y;
  var c = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), C = Xe, b = Ye, w = window;
  if (u) {
    var S = Or(n), E = "clientHeight", R = "clientWidth";
    if (S === Qe(n) && (S = dn(n), Yt(S).position !== "static" && l === "absolute" && (E = "scrollHeight", R = "scrollWidth")), S = S, o === Ye || (o === Xe || o === lt) && a === dr) {
      b = st;
      var D = p && S === w && w.visualViewport ? w.visualViewport.height : S[E];
      m -= D - r.height, m *= i ? 1 : -1;
    }
    if (o === Xe || (o === Ye || o === st) && a === dr) {
      C = lt;
      var B = p && S === w && w.visualViewport ? w.visualViewport.width : S[R];
      v -= B - r.width, v *= i ? 1 : -1;
    }
  }
  var X = Object.assign({ position: l }, u && Yg), j = f === !0 ? Xg({ x: v, y: m }, Qe(n)) : { x: v, y: m };
  if (v = j.x, m = j.y, i) {
    var Q;
    return Object.assign({}, X, (Q = {}, Q[b] = h ? "0" : "", Q[C] = c ? "0" : "", Q.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", Q));
  }
  return Object.assign({}, X, (t = {}, t[b] = h ? m + "px" : "", t[C] = c ? v + "px" : "", t.transform = "", t));
}
function qg(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, i = l === void 0 ? !0 : l, u = { placement: Nt(t.placement), variation: Wn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Xs(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xs(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Wi = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: qg, data: {} }, Dr = { passive: !0 };
function Jg(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, i = Qe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Dr);
  }), l && i.addEventListener("resize", n.update, Dr), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Dr);
    }), l && i.removeEventListener("resize", n.update, Dr);
  };
}
var Hi = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Jg, data: {} }, Zg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ur(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Zg[t];
  });
}
var Qg = { start: "end", end: "start" };
function qs(e) {
  return e.replace(/start|end/g, function(t) {
    return Qg[t];
  });
}
function Na(e) {
  var t = Qe(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function La(e) {
  return Bn(dn(e)).left + Na(e).scrollLeft;
}
function e_(e, t) {
  var n = Qe(e), r = dn(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, i = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = $i();
    (u || !u && t === "fixed") && (l = o.offsetLeft, i = o.offsetTop);
  }
  return { width: a, height: s, x: l + La(e), y: i };
}
function t_(e) {
  var t, n = dn(e), r = Na(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = yn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = yn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + La(e), i = -r.scrollTop;
  return Yt(o || n).direction === "rtl" && (l += yn(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: l, y: i };
}
function Ia(e) {
  var t = Yt(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function ji(e) {
  return ["html", "body", "#document"].indexOf(Pt(e)) >= 0 ? e.ownerDocument.body : ot(e) && Ia(e) ? e : ji(_o(e));
}
function ar(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ji(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Qe(r), s = o ? [a].concat(a.visualViewport || [], Ia(r) ? r : []) : r, l = t.concat(s);
  return o ? l : l.concat(ar(_o(s)));
}
function Ko(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function n_(e, t) {
  var n = Bn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Js(e, t, n) {
  return t === ki ? Ko(e_(e, n)) : On(t) ? n_(t, n) : Ko(t_(dn(e)));
}
function r_(e) {
  var t = ar(_o(e)), n = ["absolute", "fixed"].indexOf(Yt(e).position) >= 0, r = n && ot(e) ? Or(e) : e;
  return On(r) ? t.filter(function(o) {
    return On(o) && Ui(o, r) && Pt(o) !== "body";
  }) : [];
}
function o_(e, t, n, r) {
  var o = t === "clippingParents" ? r_(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], l = a.reduce(function(i, u) {
    var f = Js(e, u, r);
    return i.top = yn(f.top, i.top), i.right = Qr(f.right, i.right), i.bottom = Qr(f.bottom, i.bottom), i.left = yn(f.left, i.left), i;
  }, Js(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function zi(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Nt(r) : null, a = r ? Wn(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, i;
  switch (o) {
    case Ye:
      i = { x: s, y: t.y - n.height };
      break;
    case st:
      i = { x: s, y: t.y + t.height };
      break;
    case lt:
      i = { x: t.x + t.width, y: l };
      break;
    case Xe:
      i = { x: t.x - n.width, y: l };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = o ? Sa(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case xn:
        i[u] = i[u] - (t[f] / 2 - n[f] / 2);
        break;
      case dr:
        i[u] = i[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return i;
}
function pr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, i = l === void 0 ? Ng : l, u = n.rootBoundary, f = u === void 0 ? ki : u, p = n.elementContext, d = p === void 0 ? Qn : p, v = n.altBoundary, g = v === void 0 ? !1 : v, m = n.padding, T = m === void 0 ? 0 : m, c = Vi(typeof T != "number" ? T : Bi(T, Tr)), h = d === Qn ? Lg : Qn, C = e.rects.popper, b = e.elements[g ? h : d], w = o_(On(b) ? b : b.contextElement || dn(e.elements.popper), i, f, s), S = Bn(e.elements.reference), E = zi({ reference: S, element: C, placement: o }), R = Ko(Object.assign({}, C, E)), D = d === Qn ? R : S, B = { top: w.top - D.top + c.top, bottom: D.bottom - w.bottom + c.bottom, left: w.left - D.left + c.left, right: D.right - w.right + c.right }, X = e.modifiersData.offset;
  if (d === Qn && X) {
    var j = X[o];
    Object.keys(B).forEach(function(Q) {
      var Le = [lt, st].indexOf(Q) >= 0 ? 1 : -1, me = [Ye, st].indexOf(Q) >= 0 ? "y" : "x";
      B[Q] += j[me] * Le;
    });
  }
  return B;
}
function a_(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? go : i, f = Wn(r), p = f ? l ? Gs : Gs.filter(function(g) {
    return Wn(g) === f;
  }) : Tr, d = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  d.length === 0 && (d = p);
  var v = d.reduce(function(g, m) {
    return g[m] = pr(e, { placement: m, boundary: o, rootBoundary: a, padding: s })[Nt(m)], g;
  }, {});
  return Object.keys(v).sort(function(g, m) {
    return v[g] - v[m];
  });
}
function s_(e) {
  if (Nt(e) === Oa) return [];
  var t = Ur(e);
  return [qs(e), t, qs(t)];
}
function l_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, i = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, d = n.altBoundary, v = n.flipVariations, g = v === void 0 ? !0 : v, m = n.allowedAutoPlacements, T = t.options.placement, c = Nt(T), h = c === T, C = i || (h || !g ? [Ur(T)] : s_(T)), b = [T].concat(C).reduce(function(qe, xe) {
      return qe.concat(Nt(xe) === Oa ? a_(t, { placement: xe, boundary: f, rootBoundary: p, padding: u, flipVariations: g, allowedAutoPlacements: m }) : xe);
    }, []), w = t.rects.reference, S = t.rects.popper, E = /* @__PURE__ */ new Map(), R = !0, D = b[0], B = 0; B < b.length; B++) {
      var X = b[B], j = Nt(X), Q = Wn(X) === xn, Le = [Ye, st].indexOf(j) >= 0, me = Le ? "width" : "height", oe = pr(t, { placement: X, boundary: f, rootBoundary: p, altBoundary: d, padding: u }), x = Le ? Q ? lt : Xe : Q ? st : Ye;
      w[me] > S[me] && (x = Ur(x));
      var ge = Ur(x), we = [];
      if (a && we.push(oe[j] <= 0), l && we.push(oe[x] <= 0, oe[ge] <= 0), we.every(function(qe) {
        return qe;
      })) {
        D = X, R = !1;
        break;
      }
      E.set(X, we);
    }
    if (R) for (var Ce = g ? 3 : 1, it = function(qe) {
      var xe = b.find(function(kt) {
        var Ve = E.get(kt);
        if (Ve) return Ve.slice(0, qe).every(function(fe) {
          return fe;
        });
      });
      if (xe) return D = xe, "break";
    }, et = Ce; et > 0; et--) {
      var _t = it(et);
      if (_t === "break") break;
    }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
var i_ = { name: "flip", enabled: !0, phase: "main", fn: l_, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Zs(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Qs(e) {
  return [Ye, lt, st, Xe].some(function(t) {
    return e[t] >= 0;
  });
}
function u_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = pr(t, { elementContext: "reference" }), l = pr(t, { altBoundary: !0 }), i = Zs(s, r), u = Zs(l, o, a), f = Qs(i), p = Qs(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var c_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: u_ };
function f_(e, t, n) {
  var r = Nt(e), o = [Xe, Ye].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * o, [Xe, lt].indexOf(r) >= 0 ? { x: l, y: s } : { x: s, y: l };
}
function d_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = go.reduce(function(f, p) {
    return f[p] = f_(p, t.rects, a), f;
  }, {}), l = s[t.placement], i = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var p_ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: d_ };
function m_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = zi({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Ki = { name: "popperOffsets", enabled: !0, phase: "read", fn: m_, data: {} };
function v_(e) {
  return e === "x" ? "y" : "x";
}
function g_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, i = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, d = n.tether, v = d === void 0 ? !0 : d, g = n.tetherOffset, m = g === void 0 ? 0 : g, T = pr(t, { boundary: i, rootBoundary: u, padding: p, altBoundary: f }), c = Nt(t.placement), h = Wn(t.placement), C = !h, b = Sa(c), w = v_(b), S = t.modifiersData.popperOffsets, E = t.rects.reference, R = t.rects.popper, D = typeof m == "function" ? m(Object.assign({}, t.rects, { placement: t.placement })) : m, B = typeof D == "number" ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D), X = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var Q, Le = b === "y" ? Ye : Xe, me = b === "y" ? st : lt, oe = b === "y" ? "height" : "width", x = S[b], ge = x + T[Le], we = x - T[me], Ce = v ? -R[oe] / 2 : 0, it = h === xn ? E[oe] : R[oe], et = h === xn ? -R[oe] : -E[oe], _t = t.elements.arrow, qe = v && _t ? Ca(_t) : { width: 0, height: 0 }, xe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : xi(), kt = xe[Le], Ve = xe[me], fe = or(0, E[oe], qe[oe]), vn = C ? E[oe] / 2 - Ce - fe - kt - B.mainAxis : it - fe - kt - B.mainAxis, Qt = C ? -E[oe] / 2 + Ce + fe + Ve + B.mainAxis : et + fe + Ve + B.mainAxis, ht = t.elements.arrow && Or(t.elements.arrow), en = ht ? b === "y" ? ht.clientTop || 0 : ht.clientLeft || 0 : 0, yt = (Q = X?.[b]) != null ? Q : 0, Ft = x + vn - yt - en, ut = x + Qt - yt, bt = or(v ? Qr(ge, Ft) : ge, x, v ? yn(we, ut) : we);
      S[b] = bt, j[b] = bt - x;
    }
    if (l) {
      var tn, _ = b === "x" ? Ye : Xe, y = b === "x" ? st : lt, A = S[w], $ = w === "y" ? "height" : "width", se = A + T[_], de = A - T[y], J = [Ye, Xe].indexOf(c) !== -1, L = (tn = X?.[w]) != null ? tn : 0, P = J ? se : A - E[$] - R[$] - L + B.altAxis, Z = J ? A + E[$] + R[$] - L - B.altAxis : de, ce = v && J ? Hg(P, A, Z) : or(v ? P : se, A, v ? Z : de);
      S[w] = ce, j[w] = ce - A;
    }
    t.modifiersData[r] = j;
  }
}
var __ = { name: "preventOverflow", enabled: !0, phase: "main", fn: g_, requiresIfExists: ["offset"] };
function h_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function y_(e) {
  return e === Qe(e) || !ot(e) ? Na(e) : h_(e);
}
function b_(e) {
  var t = e.getBoundingClientRect(), n = Vn(t.width) / e.offsetWidth || 1, r = Vn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function E_(e, t, n) {
  n === void 0 && (n = !1);
  var r = ot(t), o = ot(t) && b_(t), a = dn(t), s = Bn(e, o, n), l = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (r || !r && !n) && ((Pt(t) !== "body" || Ia(a)) && (l = y_(t)), ot(t) ? (i = Bn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : a && (i.x = La(a))), { x: s.left + l.scrollLeft - i.x, y: s.top + l.scrollTop - i.y, width: s.width, height: s.height };
}
function T_(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var i = t.get(l);
        i && o(i);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function O_(e) {
  var t = T_(e);
  return Ug.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function w_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function C_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var el = { placement: "bottom", modifiers: [], strategy: "absolute" };
function tl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Aa(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? el : o;
  return function(s, l, i) {
    i === void 0 && (i = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, el, a), modifiersData: {}, elements: { reference: s, popper: l }, attributes: {}, styles: {} }, f = [], p = !1, d = { state: u, setOptions: function(m) {
      var T = typeof m == "function" ? m(u.options) : m;
      g(), u.options = Object.assign({}, a, u.options, T), u.scrollParents = { reference: On(s) ? ar(s) : s.contextElement ? ar(s.contextElement) : [], popper: ar(l) };
      var c = O_(C_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = c.filter(function(h) {
        return h.enabled;
      }), v(), d.update();
    }, forceUpdate: function() {
      if (!p) {
        var m = u.elements, T = m.reference, c = m.popper;
        if (tl(T, c)) {
          u.rects = { reference: E_(T, Or(c), u.options.strategy === "fixed"), popper: Ca(c) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(R) {
            return u.modifiersData[R.name] = Object.assign({}, R.data);
          });
          for (var h = 0; h < u.orderedModifiers.length; h++) {
            if (u.reset === !0) {
              u.reset = !1, h = -1;
              continue;
            }
            var C = u.orderedModifiers[h], b = C.fn, w = C.options, S = w === void 0 ? {} : w, E = C.name;
            typeof b == "function" && (u = b({ state: u, options: S, name: E, instance: d }) || u);
          }
        }
      }
    }, update: w_(function() {
      return new Promise(function(m) {
        d.forceUpdate(), m(u);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!tl(s, l)) return d;
    d.setOptions(i).then(function(m) {
      !p && i.onFirstUpdate && i.onFirstUpdate(m);
    });
    function v() {
      u.orderedModifiers.forEach(function(m) {
        var T = m.name, c = m.options, h = c === void 0 ? {} : c, C = m.effect;
        if (typeof C == "function") {
          var b = C({ state: u, name: T, instance: d, options: h }), w = function() {
          };
          f.push(b || w);
        }
      });
    }
    function g() {
      f.forEach(function(m) {
        return m();
      }), f = [];
    }
    return d;
  };
}
Aa();
var S_ = [Hi, Ki, Wi, Fi];
Aa({ defaultModifiers: S_ });
var N_ = [Hi, Ki, Wi, Fi, p_, i_, __, Gg, c_], L_ = Aa({ defaultModifiers: N_ });
const I_ = ["fixed", "absolute"], A_ = he({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: G(Array),
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
    values: go,
    default: "bottom"
  },
  popperOptions: {
    type: G(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: I_,
    default: "absolute"
  }
}), Gi = he({
  ...A_,
  id: String,
  style: {
    type: G([String, Array, Object])
  },
  className: {
    type: G([String, Array, Object])
  },
  effect: {
    type: G(String),
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
    type: G([String, Array, Object])
  },
  popperStyle: {
    type: G([String, Array, Object])
  },
  referenceEl: {
    type: G(Object)
  },
  triggerTargetEl: {
    type: G(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...po(["ariaLabel"])
}), P_ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, R_ = (e, t) => {
  const n = F(!1), r = F();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (r.value = "first", t("blur"));
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
}, D_ = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...k_(e), ...t]
  };
  return F_(a, o?.modifiers), a;
}, M_ = (e) => {
  if (Te)
    return Ht(e);
};
function k_(e) {
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
function F_(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const $_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = U_(i);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = I(() => {
    const { onFirstUpdate: i, placement: u, strategy: f, modifiers: p } = O(n);
    return {
      onFirstUpdate: i,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = hr(), s = F({
    styles: {
      popper: {
        position: O(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), l = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return q(o, (i) => {
    const u = O(a);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), q([e, t], ([i, u]) => {
    l(), !(!i || !u) && (a.value = L_(i, u, O(o)));
  }), Dt(() => {
    l();
  }), {
    state: I(() => {
      var i;
      return { ...((i = O(a)) == null ? void 0 : i.state) || {} };
    }),
    styles: I(() => O(s).styles),
    attributes: I(() => O(s).attributes),
    update: () => {
      var i;
      return (i = O(a)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = O(a)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: I(() => O(a))
  };
};
function U_(e) {
  const t = Object.keys(e.elements), n = Vo(t.map((o) => [o, e.styles[o] || {}])), r = Vo(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const x_ = 0, V_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = ue(ba, void 0), a = F(), s = F(), l = I(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = I(() => {
    var c;
    const h = O(a), C = (c = O(s)) != null ? c : x_;
    return {
      name: "arrow",
      enabled: !nm(h),
      options: {
        element: h,
        padding: C
      }
    };
  }), u = I(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...D_(e, [
      O(i),
      O(l)
    ])
  })), f = I(() => M_(e.referenceEl) || O(r)), { attributes: p, state: d, styles: v, update: g, forceUpdate: m, instanceRef: T } = $_(f, n, u);
  return q(T, (c) => t.value = c), De(() => {
    q(() => {
      var c;
      return (c = O(f)) == null ? void 0 : c.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: T,
    state: d,
    styles: v,
    role: o,
    forceUpdate: m,
    update: g
  };
}, B_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = ii(), a = Ue("popper"), s = I(() => O(t).popper), l = F($e(e.zIndex) ? e.zIndex : o()), i = I(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = I(() => [
    { zIndex: O(l) },
    O(n).popper,
    e.popperStyle || {}
  ]), f = I(() => r.value === "dialog" ? "false" : void 0), p = I(() => O(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: i,
    contentStyle: u,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = $e(e.zIndex) ? e.zIndex : o();
    }
  };
}, W_ = V({
  name: "ElPopperContent"
}), H_ = /* @__PURE__ */ V({
  ...W_,
  props: Gi,
  emits: P_,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: l,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = R_(r, n), { attributes: p, arrowRef: d, contentRef: v, styles: g, instanceRef: m, role: T, update: c } = V_(r), {
      ariaModal: h,
      arrowStyle: C,
      contentAttrs: b,
      contentClass: w,
      contentStyle: S,
      updateZIndex: E
    } = B_(r, {
      styles: g,
      attributes: p,
      role: T
    }), R = ue(Zr, void 0), D = F();
    It(Li, {
      arrowStyle: C,
      arrowRef: d,
      arrowOffset: D
    }), R && It(Zr, {
      ...R,
      addInputId: Wr,
      removeInputId: Wr
    });
    let B;
    const X = (Q = !0) => {
      c(), Q && E();
    }, j = () => {
      X(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return De(() => {
      q(() => r.triggerTargetEl, (Q, Le) => {
        B?.(), B = void 0;
        const me = O(Q || v.value), oe = O(Le || v.value);
        rt(me) && (B = q([T, () => r.ariaLabel, h, () => r.id], (x) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ge, we) => {
            _a(x[we]) ? me.removeAttribute(ge) : me.setAttribute(ge, x[we]);
          });
        }, { immediate: !0 })), oe !== me && rt(oe) && ["role", "aria-label", "aria-modal", "id"].forEach((x) => {
          oe.removeAttribute(x);
        });
      }, { immediate: !0 }), q(() => r.visible, j, { immediate: !0 });
    }), Dt(() => {
      B?.(), B = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: m,
      updatePopper: X,
      contentStyle: S
    }), (Q, Le) => (M(), z("div", ao({
      ref_key: "contentRef",
      ref: v
    }, O(b), {
      style: O(S),
      class: O(w),
      tabindex: "-1",
      onMouseenter: (me) => Q.$emit("mouseenter", me),
      onMouseleave: (me) => Q.$emit("mouseleave", me)
    }), [
      _e(O(Sg), {
        trapped: O(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": O(v),
        "focus-start-el": O(o),
        onFocusAfterTrapped: O(l),
        onFocusAfterReleased: O(s),
        onFocusin: O(i),
        onFocusoutPrevented: O(u),
        onReleaseRequested: O(f)
      }, {
        default: ee(() => [
          te(Q.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var j_ = /* @__PURE__ */ Oe(H_, [["__file", "content.vue"]]);
const z_ = fn(rg), Pa = Symbol("elTooltip");
function nl() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return br(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const K_ = he({
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
}), G_ = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = nl(), {
    registerTimeout: s,
    cancelTimeout: l
  } = nl();
  return {
    onOpen: (f) => {
      a(() => {
        r(f);
        const p = O(n);
        $e(p) && p > 0 && s(() => {
          o(f);
        }, p);
      }, O(e));
    },
    onClose: (f) => {
      l(), a(() => {
        o(f);
      }, O(t));
    }
  };
}, Ra = he({
  ...K_,
  ...Gi,
  appendTo: {
    type: G([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: G(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...po(["ariaLabel"])
}), Yi = he({
  ...Pi,
  disabled: Boolean,
  trigger: {
    type: G([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: G(Array),
    default: () => [St.enter, St.numpadEnter, St.space]
  }
}), Y_ = fo({
  type: G(Boolean),
  default: null
}), X_ = fo({
  type: G(Function)
}), q_ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Y_,
    [n]: X_
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: l,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: f,
      onHide: p
    }) => {
      const d = We(), { emit: v } = d, g = d.props, m = I(() => Ae(g[n])), T = I(() => g[e] === null), c = (E) => {
        s.value !== !0 && (s.value = !0, l && (l.value = E), Ae(f) && f(E));
      }, h = (E) => {
        s.value !== !1 && (s.value = !1, l && (l.value = E), Ae(p) && p(E));
      }, C = (E) => {
        if (g.disabled === !0 || Ae(u) && !u())
          return;
        const R = m.value && Te;
        R && v(t, !0), (T.value || !R) && c(E);
      }, b = (E) => {
        if (g.disabled === !0 || !Te)
          return;
        const R = m.value && Te;
        R && v(t, !1), (T.value || !R) && h(E);
      }, w = (E) => {
        Kr(E) && (g.disabled && E ? m.value && v(t, !1) : s.value !== E && (E ? c() : h()));
      }, S = () => {
        s.value ? b() : C();
      };
      return q(() => g[e], w), i && d.appContext.config.globalProperties.$route !== void 0 && q(() => ({
        ...d.proxy.$route
      }), () => {
        i.value && s.value && b();
      }), De(() => {
        w(g[e]);
      }), {
        hide: b,
        show: C,
        toggle: S,
        hasUpdateHandler: m
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: J_,
  useModelToggleEmits: Z_,
  useModelToggle: Q_
} = q_("visible"), e0 = he({
  ...Ii,
  ...J_,
  ...Ra,
  ...Yi,
  ...Ai,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), t0 = [
  ...Z_,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], n0 = (e, t) => ft(e) ? e.includes(t) : e === t, An = (e, t, n) => (r) => {
  n0(O(e), t) && n(r);
}, Vt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, OE = (e) => (t) => t.pointerType === "mouse" ? e(t) : void 0, r0 = V({
  name: "ElTooltipTrigger"
}), o0 = /* @__PURE__ */ V({
  ...r0,
  props: Yi,
  setup(e, { expose: t }) {
    const n = e, r = Ue("tooltip"), { controlled: o, id: a, open: s, onOpen: l, onClose: i, onToggle: u } = ue(Pa, void 0), f = F(null), p = () => {
      if (O(o) || n.disabled)
        return !0;
    }, d = ln(n, "trigger"), v = Vt(p, An(d, "hover", l)), g = Vt(p, An(d, "hover", i)), m = Vt(p, An(d, "click", (b) => {
      b.button === 0 && u(b);
    })), T = Vt(p, An(d, "focus", l)), c = Vt(p, An(d, "focus", i)), h = Vt(p, An(d, "contextmenu", (b) => {
      b.preventDefault(), u(b);
    })), C = Vt(p, (b) => {
      const { code: w } = b;
      n.triggerKeys.includes(w) && (b.preventDefault(), u(b));
    });
    return t({
      triggerRef: f
    }), (b, w) => (M(), ae(O(dg), {
      id: O(a),
      "virtual-ref": b.virtualRef,
      open: O(s),
      "virtual-triggering": b.virtualTriggering,
      class: W(O(r).e("trigger")),
      onBlur: O(c),
      onClick: O(m),
      onContextmenu: O(h),
      onFocus: O(T),
      onMouseenter: O(v),
      onMouseleave: O(g),
      onKeydown: O(C)
    }, {
      default: ee(() => [
        te(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var a0 = /* @__PURE__ */ Oe(o0, [["__file", "trigger.vue"]]);
const s0 = he({
  to: {
    type: G([String, Object]),
    required: !0
  },
  disabled: Boolean
}), l0 = /* @__PURE__ */ V({
  __name: "teleport",
  props: s0,
  setup(e) {
    return (t, n) => t.disabled ? te(t.$slots, "default", { key: 0 }) : (M(), ae(sc, {
      key: 1,
      to: t.to
    }, [
      te(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var i0 = /* @__PURE__ */ Oe(l0, [["__file", "teleport.vue"]]);
const u0 = fn(i0), Xi = () => {
  const e = ua(), t = Ci(), n = I(() => `${e.value}-popper-container-${t.prefix}`), r = I(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, c0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, f0 = () => {
  const { id: e, selector: t } = Xi();
  return lc(() => {
    Te && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && c0(e.value);
  }), {
    id: e,
    selector: t
  };
}, d0 = V({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), p0 = /* @__PURE__ */ V({
  ...d0,
  props: Ra,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Xi(), o = Ue("tooltip"), a = F();
    let s;
    const {
      controlled: l,
      id: i,
      open: u,
      trigger: f,
      onClose: p,
      onOpen: d,
      onShow: v,
      onHide: g,
      onBeforeShow: m,
      onBeforeHide: T
    } = ue(Pa, void 0), c = I(() => n.transition || `${o.namespace.value}-fade-in-linear`), h = I(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Dt(() => {
      s?.();
    });
    const C = I(() => O(h) ? !0 : O(u)), b = I(() => n.disabled ? !1 : O(u)), w = I(() => n.appendTo || r.value), S = I(() => {
      var x;
      return (x = n.style) != null ? x : {};
    }), E = F(!0), R = () => {
      g(), oe() && xt(document.body), E.value = !0;
    }, D = () => {
      if (O(l))
        return !0;
    }, B = Vt(D, () => {
      n.enterable && O(f) === "hover" && d();
    }), X = Vt(D, () => {
      O(f) === "hover" && p();
    }), j = () => {
      var x, ge;
      (ge = (x = a.value) == null ? void 0 : x.updatePopper) == null || ge.call(x), m?.();
    }, Q = () => {
      T?.();
    }, Le = () => {
      v(), s = Om(I(() => {
        var x;
        return (x = a.value) == null ? void 0 : x.popperContentRef;
      }), () => {
        if (O(l))
          return;
        O(f) !== "hover" && p();
      });
    }, me = () => {
      n.virtualTriggering || p();
    }, oe = (x) => {
      var ge;
      const we = (ge = a.value) == null ? void 0 : ge.popperContentRef, Ce = x?.relatedTarget || document.activeElement;
      return we?.contains(Ce);
    };
    return q(() => O(u), (x) => {
      x ? E.value = !1 : s?.();
    }, {
      flush: "post"
    }), q(() => n.content, () => {
      var x, ge;
      (ge = (x = a.value) == null ? void 0 : x.updatePopper) == null || ge.call(x);
    }), t({
      contentRef: a,
      isFocusInsideContent: oe
    }), (x, ge) => (M(), ae(O(u0), {
      disabled: !x.teleported,
      to: O(w)
    }, {
      default: ee(() => [
        _e(Kn, {
          name: O(c),
          onAfterLeave: R,
          onBeforeEnter: j,
          onAfterEnter: Le,
          onBeforeLeave: Q
        }, {
          default: ee(() => [
            O(C) ? nt((M(), ae(O(j_), ao({
              key: 0,
              id: O(i),
              ref_key: "contentRef",
              ref: a
            }, x.$attrs, {
              "aria-label": x.ariaLabel,
              "aria-hidden": E.value,
              "boundaries-padding": x.boundariesPadding,
              "fallback-placements": x.fallbackPlacements,
              "gpu-acceleration": x.gpuAcceleration,
              offset: x.offset,
              placement: x.placement,
              "popper-options": x.popperOptions,
              strategy: x.strategy,
              effect: x.effect,
              enterable: x.enterable,
              pure: x.pure,
              "popper-class": x.popperClass,
              "popper-style": [x.popperStyle, O(S)],
              "reference-el": x.referenceEl,
              "trigger-target-el": x.triggerTargetEl,
              visible: O(b),
              "z-index": x.zIndex,
              onMouseenter: O(B),
              onMouseleave: O(X),
              onBlur: me,
              onClose: O(p)
            }), {
              default: ee(() => [
                te(x.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Gt, O(b)]
            ]) : le("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var m0 = /* @__PURE__ */ Oe(p0, [["__file", "content.vue"]]);
const v0 = V({
  name: "ElTooltip"
}), g0 = /* @__PURE__ */ V({
  ...v0,
  props: e0,
  emits: t0,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    f0();
    const o = mo(), a = F(), s = F(), l = () => {
      var c;
      const h = O(a);
      h && ((c = h.popperInstanceRef) == null || c.update());
    }, i = F(!1), u = F(), { show: f, hide: p, hasUpdateHandler: d } = Q_({
      indicator: i,
      toggleReason: u
    }), { onOpen: v, onClose: g } = G_({
      showAfter: ln(r, "showAfter"),
      hideAfter: ln(r, "hideAfter"),
      autoClose: ln(r, "autoClose"),
      open: f,
      close: p
    }), m = I(() => Kr(r.visible) && !d.value);
    It(Pa, {
      controlled: m,
      id: o,
      open: la(i),
      trigger: ln(r, "trigger"),
      onOpen: (c) => {
        v(c);
      },
      onClose: (c) => {
        g(c);
      },
      onToggle: (c) => {
        O(i) ? g(c) : v(c);
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
      updatePopper: l
    }), q(() => r.disabled, (c) => {
      c && i.value && (i.value = !1);
    });
    const T = (c) => {
      var h;
      return (h = s.value) == null ? void 0 : h.isFocusInsideContent(c);
    };
    return ic(() => i.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: T,
      updatePopper: l,
      onOpen: v,
      onClose: g,
      hide: p
    }), (c, h) => (M(), ae(O(z_), {
      ref_key: "popperRef",
      ref: a,
      role: c.role
    }, {
      default: ee(() => [
        _e(a0, {
          disabled: c.disabled,
          trigger: c.trigger,
          "trigger-keys": c.triggerKeys,
          "virtual-ref": c.virtualRef,
          "virtual-triggering": c.virtualTriggering
        }, {
          default: ee(() => [
            c.$slots.default ? te(c.$slots, "default", { key: 0 }) : le("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        _e(m0, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": c.ariaLabel,
          "boundaries-padding": c.boundariesPadding,
          content: c.content,
          disabled: c.disabled,
          effect: c.effect,
          enterable: c.enterable,
          "fallback-placements": c.fallbackPlacements,
          "hide-after": c.hideAfter,
          "gpu-acceleration": c.gpuAcceleration,
          offset: c.offset,
          persistent: c.persistent,
          "popper-class": c.popperClass,
          "popper-style": c.popperStyle,
          placement: c.placement,
          "popper-options": c.popperOptions,
          pure: c.pure,
          "raw-content": c.rawContent,
          "reference-el": c.referenceEl,
          "trigger-target-el": c.triggerTargetEl,
          "show-after": c.showAfter,
          strategy: c.strategy,
          teleported: c.teleported,
          transition: c.transition,
          "virtual-triggering": c.virtualTriggering,
          "z-index": c.zIndex,
          "append-to": c.appendTo
        }, {
          default: ee(() => [
            te(c.$slots, "content", {}, () => [
              c.rawContent ? (M(), z("span", {
                key: 0,
                innerHTML: c.content
              }, null, 8, ["innerHTML"])) : (M(), z("span", { key: 1 }, ze(c.content), 1))
            ]),
            c.showArrow ? (M(), ae(O(sg), {
              key: 0,
              "arrow-offset": c.arrowOffset
            }, null, 8, ["arrow-offset"])) : le("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var _0 = /* @__PURE__ */ Oe(g0, [["__file", "tooltip.vue"]]);
const h0 = fn(_0), y0 = he({
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
    type: G([String, Object, Array])
  },
  offset: {
    type: G(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), b0 = V({
  name: "ElBadge"
}), E0 = /* @__PURE__ */ V({
  ...b0,
  props: y0,
  setup(e, { expose: t }) {
    const n = e, r = Ue("badge"), o = I(() => n.isDot ? "" : $e(n.value) && $e(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = I(() => {
      var s, l, i, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: fr(-((l = (s = n.offset) == null ? void 0 : s[0]) != null ? l : 0)),
          marginTop: fr((u = (i = n.offset) == null ? void 0 : i[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (s, l) => (M(), z("div", {
      class: W(O(r).b())
    }, [
      te(s.$slots, "default"),
      _e(Kn, {
        name: `${O(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ee(() => [
          nt(H("sup", {
            class: W([
              O(r).e("content"),
              O(r).em("content", s.type),
              O(r).is("fixed", !!s.$slots.default),
              O(r).is("dot", s.isDot),
              O(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Ge(O(a))
          }, [
            te(s.$slots, "content", { value: O(o) }, () => [
              Mo(ze(O(o)), 1)
            ])
          ], 6), [
            [Gt, !s.hidden && (O(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var T0 = /* @__PURE__ */ Oe(E0, [["__file", "badge.vue"]]);
const O0 = fn(T0), w0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Go = he({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: di
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), C0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, S0 = V({
  name: "ElTag"
}), N0 = /* @__PURE__ */ V({
  ...S0,
  props: Go,
  emits: C0,
  setup(e, { emit: t }) {
    const n = e, r = Ni(), o = Ue("tag"), a = I(() => {
      const { type: u, hit: f, effect: p, closable: d, round: v } = n;
      return [
        o.b(),
        o.is("closable", d),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(p),
        o.is("hit", f),
        o.is("round", v)
      ];
    }), s = (u) => {
      t("close", u);
    }, l = (u) => {
      t("click", u);
    }, i = (u) => {
      var f, p, d;
      (d = (p = (f = u?.component) == null ? void 0 : f.subTree) == null ? void 0 : p.component) != null && d.bum && (u.component.subTree.component.bum = null);
    };
    return (u, f) => u.disableTransitions ? (M(), z("span", {
      key: 0,
      class: W(O(a)),
      style: Ge({ backgroundColor: u.color }),
      onClick: l
    }, [
      H("span", {
        class: W(O(o).e("content"))
      }, [
        te(u.$slots, "default")
      ], 2),
      u.closable ? (M(), ae(O(Tn), {
        key: 0,
        class: W(O(o).e("close")),
        onClick: He(s, ["stop"])
      }, {
        default: ee(() => [
          _e(O(Xr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : le("v-if", !0)
    ], 6)) : (M(), ae(Kn, {
      key: 1,
      name: `${O(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: i
    }, {
      default: ee(() => [
        H("span", {
          class: W(O(a)),
          style: Ge({ backgroundColor: u.color }),
          onClick: l
        }, [
          H("span", {
            class: W(O(o).e("content"))
          }, [
            te(u.$slots, "default")
          ], 2),
          u.closable ? (M(), ae(O(Tn), {
            key: 0,
            class: W(O(o).e("close")),
            onClick: He(s, ["stop"])
          }, {
            default: ee(() => [
              _e(O(Xr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : le("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var L0 = /* @__PURE__ */ Oe(N0, [["__file", "tag.vue"]]);
const I0 = fn(L0), on = /* @__PURE__ */ new Map();
if (Te) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of on.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function rl(e, t) {
  let n = [];
  return ft(t.arg) ? n = t.arg : rt(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, l = o?.target, i = !t || !t.instance, u = !s || !l, f = e.contains(s) || e.contains(l), p = e === s, d = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(l), v = a && (a.contains(s) || a.contains(l));
    i || u || f || p || d || v || t.value(r, o);
  };
}
const A0 = {
  beforeMount(e, t) {
    on.has(e) || on.set(e, []), on.get(e).push({
      documentHandler: rl(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    on.has(e) || on.set(e, []);
    const n = on.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: rl(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    on.delete(e);
  }
}, P0 = he({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: G(Object)
  },
  size: pi,
  button: {
    type: G(Object)
  },
  experimentalFeatures: {
    type: G(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: G(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...gi
}), ct = {}, wE = V({
  name: "ElConfigProvider",
  props: P0,
  setup(e, { slots: t }) {
    q(() => e.message, (r) => {
      Object.assign(ct, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = yi(e);
    return () => te(t, "default", { config: n?.value });
  }
});
function R0() {
  const e = hr(), t = F(0), n = 11, r = I(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Bt(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const qi = Symbol("ElSelectGroup"), ho = Symbol("ElSelect");
function D0(e, t) {
  const n = ue(ho), r = ue(qi, { disabled: !1 }), o = I(() => f(sn(n.props.modelValue), e.value)), a = I(() => {
    var v;
    if (n.props.multiple) {
      const g = sn((v = n.props.modelValue) != null ? v : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = I(() => e.label || (dt(e.value) ? "" : e.value)), l = I(() => e.value || e.label || ""), i = I(() => e.disabled || t.groupDisabled || a.value), u = We(), f = (v = [], g) => {
    if (dt(e.value)) {
      const m = n.props.valueKey;
      return v && v.some((T) => uc(Wt(T, m)) === Wt(g, m));
    } else
      return v && v.includes(g);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, d = (v) => {
    const g = new RegExp(w0(v), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return q(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), q(() => e.value, (v, g) => {
    const { remote: m, valueKey: T } = n.props;
    if ((m ? v !== g : !rr(v, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !m) {
      if (T && dt(v) && dt(g) && v[T] === g[T])
        return;
      n.setSelected();
    }
  }), q(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: l,
    itemSelected: o,
    isDisabled: i,
    hoverItem: p,
    updateOption: d
  };
}
const M0 = V({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = Ue("select"), n = mo(), r = I(() => [
      t.be("dropdown", "item"),
      t.is("disabled", O(l)),
      t.is("selected", O(s)),
      t.is("hovering", O(d))
    ]), o = $n({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: l,
      select: i,
      hoverItem: u,
      updateOption: f
    } = D0(e, o), { visible: p, hover: d } = ia(o), v = We().proxy;
    i.onOptionCreate(v), Dt(() => {
      const m = v.value, { selected: T } = i.states, c = T.some((h) => h.value === v.value);
      je(() => {
        i.states.cachedOptions.get(m) === v && !c && i.states.cachedOptions.delete(m);
      }), i.onOptionDestroy(m, v);
    });
    function g() {
      l.value || i.handleOptionSelect(v);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: a,
      itemSelected: s,
      isDisabled: l,
      select: i,
      hoverItem: u,
      updateOption: f,
      visible: p,
      hover: d,
      selectOptionClick: g,
      states: o
    };
  }
});
function k0(e, t, n, r, o, a) {
  return nt((M(), z("li", {
    id: e.id,
    class: W(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: He(e.selectOptionClick, ["stop"])
  }, [
    te(e.$slots, "default", {}, () => [
      H("span", null, ze(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Gt, e.visible]
  ]);
}
var Da = /* @__PURE__ */ Oe(M0, [["render", k0], ["__file", "option.vue"]]);
const F0 = V({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ue(ho), t = Ue("select"), n = I(() => e.props.popperClass), r = I(() => e.props.multiple), o = I(() => e.props.fitInputWidth), a = F("");
    function s() {
      var l;
      a.value = `${(l = e.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return De(() => {
      s(), Bt(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function $0(e, t, n, r, o, a) {
  return M(), z("div", {
    class: W([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ge({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (M(), z("div", {
      key: 0,
      class: W(e.ns.be("dropdown", "header"))
    }, [
      te(e.$slots, "header")
    ], 2)) : le("v-if", !0),
    te(e.$slots, "default"),
    e.$slots.footer ? (M(), z("div", {
      key: 1,
      class: W(e.ns.be("dropdown", "footer"))
    }, [
      te(e.$slots, "footer")
    ], 2)) : le("v-if", !0)
  ], 6);
}
var U0 = /* @__PURE__ */ Oe(F0, [["render", $0], ["__file", "select-dropdown.vue"]]);
const x0 = (e, t) => {
  const { t: n } = ci(), r = mo(), o = Ue("select"), a = Ue("input"), s = $n({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: [],
    selectionWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: !1,
    menuVisibleOnFocus: !1,
    isBeforeHide: !1
  }), l = F(null), i = F(null), u = F(null), f = F(null), p = F(null), d = F(null), v = F(null), g = F(null), m = F(null), T = F(null), c = F(null), {
    isComposing: h,
    handleCompositionStart: C,
    handleCompositionUpdate: b,
    handleCompositionEnd: w
  } = xv({
    afterComposition: (N) => ce(N)
  }), { wrapperRef: S, isFocused: E, handleBlur: R } = $v(p, {
    beforeFocus() {
      return oe.value;
    },
    afterFocus() {
      e.automaticDropdown && !D.value && (D.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(N) {
      var k, Y;
      return ((k = u.value) == null ? void 0 : k.isFocusInsideContent(N)) || ((Y = f.value) == null ? void 0 : Y.isFocusInsideContent(N));
    },
    afterBlur() {
      D.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), D = F(!1), B = F(), { form: X, formItem: j } = kv(), { inputId: Q } = Fv(e, {
    formItemContext: j
  }), { valueOnClear: Le, isEmptyValue: me } = Km(e), oe = I(() => e.disabled || X?.disabled), x = I(() => ft(e.modelValue) ? e.modelValue.length > 0 : !me(e.modelValue)), ge = I(() => {
    var N;
    return (N = X?.statusIcon) != null ? N : !1;
  }), we = I(() => e.clearable && !oe.value && s.inputHovering && x.value), Ce = I(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), it = I(() => o.is("reverse", Ce.value && D.value)), et = I(() => j?.validateState || ""), _t = I(() => Pv[et.value]), qe = I(() => e.remote ? 300 : 0), xe = I(() => e.remote && !s.inputValue && s.options.size === 0), kt = I(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ve.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ve = I(() => fe.value.filter((N) => N.visible).length), fe = I(() => {
    const N = Array.from(s.options.values()), k = [];
    return s.optionValues.forEach((Y) => {
      const Se = N.findIndex((Je) => Je.value === Y);
      Se > -1 && k.push(N[Se]);
    }), k.length >= N.length ? k : N;
  }), vn = I(() => Array.from(s.cachedOptions.values())), Qt = I(() => {
    const N = fe.value.filter((k) => !k.created).some((k) => k.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !N;
  }), ht = () => {
    e.filterable && Ae(e.filterMethod) || e.filterable && e.remote && Ae(e.remoteMethod) || fe.value.forEach((N) => {
      var k;
      (k = N.updateOption) == null || k.call(N, s.inputValue);
    });
  }, en = Ni(), yt = I(() => ["small"].includes(en.value) ? "small" : "default"), Ft = I({
    get() {
      return D.value && !xe.value;
    },
    set(N) {
      D.value = N;
    }
  }), ut = I(() => {
    if (e.multiple && !kn(e.modelValue))
      return sn(e.modelValue).length === 0 && !s.inputValue;
    const N = ft(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || kn(N) ? !s.inputValue : !0;
  }), bt = I(() => {
    var N;
    const k = (N = e.placeholder) != null ? N : n("el.select.placeholder");
    return e.multiple || !x.value ? k : s.selectedLabel;
  }), tn = I(() => Bo ? null : "mouseenter");
  q(() => e.modelValue, (N, k) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", _("")), A(), !rr(N, k) && e.validateEvent && j?.validate("change").catch((Y) => at(Y));
  }, {
    flush: "post",
    deep: !0
  }), q(() => D.value, (N) => {
    N ? _(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", N);
  }), q(() => s.options.entries(), () => {
    Te && (A(), e.defaultFirstOption && (e.filterable || e.remote) && Ve.value && y());
  }, {
    flush: "post"
  }), q([() => s.hoveringIndex, fe], ([N]) => {
    $e(N) && N > -1 ? B.value = fe.value[N] || {} : B.value = {}, fe.value.forEach((k) => {
      k.hover = B.value === k;
    });
  }), kl(() => {
    s.isBeforeHide || ht();
  });
  const _ = (N) => {
    s.previousQuery === N || h.value || (s.previousQuery = N, e.filterable && Ae(e.filterMethod) ? e.filterMethod(N) : e.filterable && e.remote && Ae(e.remoteMethod) && e.remoteMethod(N), e.defaultFirstOption && (e.filterable || e.remote) && Ve.value ? je(y) : je(se));
  }, y = () => {
    const N = fe.value.filter((Je) => Je.visible && !Je.disabled && !Je.states.groupDisabled), k = N.find((Je) => Je.created), Y = N[0], Se = fe.value.map((Je) => Je.value);
    s.hoveringIndex = ja(Se, k || Y);
  }, A = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const k = ft(e.modelValue) ? e.modelValue[0] : e.modelValue, Y = $(k);
      s.selectedLabel = Y.currentLabel, s.selected = [Y];
      return;
    }
    const N = [];
    kn(e.modelValue) || sn(e.modelValue).forEach((k) => {
      N.push($(k));
    }), s.selected = N;
  }, $ = (N) => {
    let k;
    const Y = cc(N);
    for (let Ln = s.cachedOptions.size - 1; Ln >= 0; Ln--) {
      const rn = vn.value[Ln];
      if (Y ? Wt(rn.value, e.valueKey) === Wt(N, e.valueKey) : rn.value === N) {
        k = {
          value: N,
          currentLabel: rn.currentLabel,
          get isDisabled() {
            return rn.isDisabled;
          }
        };
        break;
      }
    }
    if (k)
      return k;
    const Se = Y ? N.label : N ?? "";
    return {
      value: N,
      currentLabel: Se
    };
  }, se = () => {
    s.hoveringIndex = fe.value.findIndex((N) => s.selected.some((k) => Sr(k) === Sr(N)));
  }, de = () => {
    s.selectionWidth = i.value.getBoundingClientRect().width;
  }, J = () => {
    s.collapseItemWidth = T.value.getBoundingClientRect().width;
  }, L = () => {
    var N, k;
    (k = (N = u.value) == null ? void 0 : N.updatePopper) == null || k.call(N);
  }, P = () => {
    var N, k;
    (k = (N = f.value) == null ? void 0 : N.updatePopper) == null || k.call(N);
  }, Z = () => {
    s.inputValue.length > 0 && !D.value && (D.value = !0), _(s.inputValue);
  }, ce = (N) => {
    if (s.inputValue = N.target.value, e.remote)
      Et();
    else
      return Z();
  }, Et = em(() => {
    Z();
  }, qe.value), Tt = (N) => {
    rr(e.modelValue, N) || t(bi, N);
  }, nn = (N) => tm(N, (k) => {
    const Y = s.cachedOptions.get(k);
    return Y && !Y.disabled && !Y.states.groupDisabled;
  }), $t = (N) => {
    if (e.multiple && N.code !== St.delete && N.target.value.length <= 0) {
      const k = sn(e.modelValue).slice(), Y = nn(k);
      if (Y < 0)
        return;
      const Se = k[Y];
      k.splice(Y, 1), t(Pn, k), Tt(k), t("remove-tag", Se);
    }
  }, Oo = (N, k) => {
    const Y = s.selected.indexOf(k);
    if (Y > -1 && !oe.value) {
      const Se = sn(e.modelValue).slice();
      Se.splice(Y, 1), t(Pn, Se), Tt(Se), t("remove-tag", k.value);
    }
    N.stopPropagation(), Cr();
  }, Xn = (N) => {
    N.stopPropagation();
    const k = e.multiple ? [] : Le.value;
    if (e.multiple)
      for (const Y of s.selected)
        Y.isDisabled && k.push(Y.value);
    t(Pn, k), Tt(k), s.hoveringIndex = -1, D.value = !1, t("clear"), Cr();
  }, Ha = (N) => {
    var k;
    if (e.multiple) {
      const Y = sn((k = e.modelValue) != null ? k : []).slice(), Se = ja(Y, N);
      Se > -1 ? Y.splice(Se, 1) : (e.multipleLimit <= 0 || Y.length < e.multipleLimit) && Y.push(N.value), t(Pn, Y), Tt(Y), N.created && _(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Pn, N.value), Tt(N.value), D.value = !1;
    Cr(), !D.value && je(() => {
      wr(N);
    });
  }, ja = (N = [], k) => kn(k) ? -1 : dt(k.value) ? N.findIndex((Y) => rr(Wt(Y, e.valueKey), Sr(k))) : N.indexOf(k.value), wr = (N) => {
    var k, Y, Se, Je, Ln;
    const rn = ft(N) ? N[0] : N;
    let Nr = null;
    if (rn?.value) {
      const qn = fe.value.filter((Xu) => Xu.value === rn.value);
      qn.length > 0 && (Nr = qn[0].$el);
    }
    if (u.value && Nr) {
      const qn = (Je = (Se = (Y = (k = u.value) == null ? void 0 : k.popperRef) == null ? void 0 : Y.contentRef) == null ? void 0 : Se.querySelector) == null ? void 0 : Je.call(Se, `.${o.be("dropdown", "wrap")}`);
      qn && Xm(qn, Nr);
    }
    (Ln = c.value) == null || Ln.handleScroll();
  }, Du = (N) => {
    s.options.set(N.value, N), s.cachedOptions.set(N.value, N);
  }, Mu = (N, k) => {
    s.options.get(N) === k && s.options.delete(N);
  }, ku = I(() => {
    var N, k;
    return (k = (N = u.value) == null ? void 0 : N.popperRef) == null ? void 0 : k.contentRef;
  }), Fu = () => {
    s.isBeforeHide = !1, je(() => {
      var N;
      (N = c.value) == null || N.update(), wr(s.selected);
    });
  }, Cr = () => {
    var N;
    (N = p.value) == null || N.focus();
  }, $u = () => {
    var N;
    if (D.value) {
      D.value = !1, je(() => {
        var k;
        return (k = p.value) == null ? void 0 : k.blur();
      });
      return;
    }
    (N = p.value) == null || N.blur();
  }, Uu = (N) => {
    Xn(N);
  }, xu = (N) => {
    if (D.value = !1, E.value) {
      const k = new FocusEvent("focus", N);
      je(() => R(k));
    }
  }, Vu = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : D.value = !1;
  }, za = () => {
    oe.value || (Bo && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : D.value = !D.value);
  }, Bu = () => {
    if (!D.value)
      za();
    else {
      const N = fe.value[s.hoveringIndex];
      N && !N.isDisabled && Ha(N);
    }
  }, Sr = (N) => dt(N.value) ? Wt(N.value, e.valueKey) : N.value, Wu = I(() => fe.value.filter((N) => N.visible).every((N) => N.isDisabled)), Hu = I(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), ju = I(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Ka = (N) => {
    if (!D.value) {
      D.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ve.value === 0 || h.value) && !Wu.value) {
      N === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : N === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const k = fe.value[s.hoveringIndex];
      (k.isDisabled || !k.visible) && Ka(N), je(() => wr(B.value));
    }
  }, zu = () => {
    if (!i.value)
      return 0;
    const N = window.getComputedStyle(i.value);
    return Number.parseFloat(N.gap || "6px");
  }, Ku = I(() => {
    const N = zu();
    return { maxWidth: `${T.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - N : s.selectionWidth}px` };
  }), Gu = I(() => ({ maxWidth: `${s.selectionWidth}px` })), Yu = (N) => {
    t("popup-scroll", N);
  };
  return Bt(i, de), Bt(g, L), Bt(S, L), Bt(m, P), Bt(T, J), De(() => {
    A();
  }), {
    inputId: Q,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: E,
    expanded: D,
    optionsArray: fe,
    hoverOption: B,
    selectSize: en,
    filteredOptionsCount: Ve,
    updateTooltip: L,
    updateTagTooltip: P,
    debouncedOnInputChange: Et,
    onInput: ce,
    deletePrevTag: $t,
    deleteTag: Oo,
    deleteSelected: Xn,
    handleOptionSelect: Ha,
    scrollToOption: wr,
    hasModelValue: x,
    shouldShowPlaceholder: ut,
    currentPlaceholder: bt,
    mouseEnterEventName: tn,
    needStatusIcon: ge,
    showClose: we,
    iconComponent: Ce,
    iconReverse: it,
    validateState: et,
    validateIcon: _t,
    showNewOption: Qt,
    updateOptions: ht,
    collapseTagSize: yt,
    setSelected: A,
    selectDisabled: oe,
    emptyText: kt,
    handleCompositionStart: C,
    handleCompositionUpdate: b,
    handleCompositionEnd: w,
    onOptionCreate: Du,
    onOptionDestroy: Mu,
    handleMenuEnter: Fu,
    focus: Cr,
    blur: $u,
    handleClearClick: Uu,
    handleClickOutside: xu,
    handleEsc: Vu,
    toggleMenu: za,
    selectOption: Bu,
    getValueKey: Sr,
    navigateOptions: Ka,
    dropdownMenuVisible: Ft,
    showTagList: Hu,
    collapseTagList: ju,
    popupScroll: Yu,
    tagStyle: Ku,
    collapseTagStyle: Gu,
    popperRef: ku,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: d,
    suffixRef: v,
    selectRef: l,
    wrapperRef: S,
    selectionRef: i,
    scrollbarRef: c,
    menuRef: g,
    tagMenuRef: m,
    collapseItemRef: T
  };
};
var V0 = V({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ue(ho);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function i(u) {
        ft(u) && u.forEach((f) => {
          var p, d, v, g;
          const m = (p = f?.type || {}) == null ? void 0 : p.name;
          m === "ElOptionGroup" ? i(!Lt(f.children) && !ft(f.children) && Ae((d = f.children) == null ? void 0 : d.default) ? (v = f.children) == null ? void 0 : v.default() : f.children) : m === "ElOption" ? l.push((g = f.props) == null ? void 0 : g.value) : ft(f.children) && i(f.children);
        });
      }
      return s.length && i((a = s[0]) == null ? void 0 : a.children), rr(l, r) || (r = l, n && (n.states.optionValues = l)), s;
    };
  }
});
const B0 = he({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: pi,
  effect: {
    type: G(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: G(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: !0
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: Ra.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: qr,
    default: wi
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: qr,
    default: tv
  },
  tagType: { ...Go.type, default: "info" },
  tagEffect: { ...Go.effect, default: "light" },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  remoteShowSuffix: Boolean,
  showArrow: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: G(String),
    values: go,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: G(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...gi,
  ...po(["ariaLabel"])
}), ol = "ElSelect", W0 = V({
  name: ol,
  componentName: ol,
  components: {
    ElSelectMenu: U0,
    ElOption: Da,
    ElOptions: V0,
    ElTag: I0,
    ElScrollbar: Qv,
    ElTooltip: h0,
    ElIcon: Tn
  },
  directives: { ClickOutside: A0 },
  props: B0,
  emits: [
    Pn,
    bi,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = I(() => {
      const { modelValue: i, multiple: u } = e, f = u ? [] : void 0;
      return ft(i) ? u ? i : f : u ? f : i;
    }), r = $n({
      ...ia(e),
      modelValue: n
    }), o = x0(r, t), { calculatorRef: a, inputStyle: s } = R0();
    It(ho, $n({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const l = I(() => e.multiple ? o.states.selected.map((i) => i.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: l,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function H0(e, t, n, r, o, a) {
  const s = gn("el-tag"), l = gn("el-tooltip"), i = gn("el-icon"), u = gn("el-option"), f = gn("el-options"), p = gn("el-scrollbar"), d = gn("el-select-menu"), v = fc("click-outside");
  return nt((M(), z("div", {
    ref: "selectRef",
    class: W([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [pc(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
    onMouseleave: (g) => e.states.inputHovering = !1
  }, [
    _e(l, {
      ref: "tooltipRef",
      visible: e.dropdownMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": e.fallbackPlacements,
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      "append-to": e.appendTo,
      "show-arrow": e.showArrow,
      offset: e.offset,
      onBeforeShow: e.handleMenuEnter,
      onHide: (g) => e.states.isBeforeHide = !1
    }, {
      default: ee(() => {
        var g;
        return [
          H("div", {
            ref: "wrapperRef",
            class: W([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: He(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (M(), z("div", {
              key: 0,
              ref: "prefixRef",
              class: W(e.nsSelect.e("prefix"))
            }, [
              te(e.$slots, "prefix")
            ], 2)) : le("v-if", !0),
            H("div", {
              ref: "selectionRef",
              class: W([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? te(e.$slots, "tag", { key: 0 }, () => [
                (M(!0), z(un, null, Ya(e.showTagList, (m) => (M(), z("div", {
                  key: e.getValueKey(m),
                  class: W(e.nsSelect.e("selected-item"))
                }, [
                  _e(s, {
                    closable: !e.selectDisabled && !m.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ge(e.tagStyle),
                    onClose: (T) => e.deleteTag(T, m)
                  }, {
                    default: ee(() => [
                      H("span", {
                        class: W(e.nsSelect.e("tags-text"))
                      }, [
                        te(e.$slots, "label", {
                          label: m.currentLabel,
                          value: m.value
                        }, () => [
                          Mo(ze(m.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (M(), ae(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ee(() => [
                    H("div", {
                      ref: "collapseItemRef",
                      class: W(e.nsSelect.e("selected-item"))
                    }, [
                      _e(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ge(e.collapseTagStyle)
                      }, {
                        default: ee(() => [
                          H("span", {
                            class: W(e.nsSelect.e("tags-text"))
                          }, " + " + ze(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ee(() => [
                    H("div", {
                      ref: "tagMenuRef",
                      class: W(e.nsSelect.e("selection"))
                    }, [
                      (M(!0), z(un, null, Ya(e.collapseTagList, (m) => (M(), z("div", {
                        key: e.getValueKey(m),
                        class: W(e.nsSelect.e("selected-item"))
                      }, [
                        _e(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !m.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (T) => e.deleteTag(T, m)
                        }, {
                          default: ee(() => [
                            H("span", {
                              class: W(e.nsSelect.e("tags-text"))
                            }, [
                              te(e.$slots, "label", {
                                label: m.currentLabel,
                                value: m.value
                              }, () => [
                                Mo(ze(m.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : le("v-if", !0)
              ]) : le("v-if", !0),
              H("div", {
                class: W([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                nt(H("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (m) => e.states.inputValue = m,
                  type: "text",
                  name: e.name,
                  class: W([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ge(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((g = e.hoverOption) == null ? void 0 : g.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    Jn(He((m) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Jn(He((m) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Jn(He(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Jn(He(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Jn(He(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: He(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [dc, e.states.inputValue]
                ]),
                e.filterable ? (M(), z("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: W(e.nsSelect.e("input-calculator")),
                  textContent: ze(e.states.inputValue)
                }, null, 10, ["textContent"])) : le("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (M(), z("div", {
                key: 1,
                class: W([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? te(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  H("span", null, ze(e.currentPlaceholder), 1)
                ]) : (M(), z("span", { key: 1 }, ze(e.currentPlaceholder), 1))
              ], 2)) : le("v-if", !0)
            ], 2),
            H("div", {
              ref: "suffixRef",
              class: W(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (M(), ae(i, {
                key: 0,
                class: W([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ee(() => [
                  (M(), ae(Fn(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : le("v-if", !0),
              e.showClose && e.clearIcon ? (M(), ae(i, {
                key: 1,
                class: W([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ee(() => [
                  (M(), ae(Fn(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : le("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (M(), ae(i, {
                key: 2,
                class: W([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ee(() => [
                  (M(), ae(Fn(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : le("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ee(() => [
        _e(d, { ref: "menuRef" }, {
          default: ee(() => [
            e.$slots.header ? (M(), z("div", {
              key: 0,
              class: W(e.nsSelect.be("dropdown", "header")),
              onClick: He(() => {
              }, ["stop"])
            }, [
              te(e.$slots, "header")
            ], 10, ["onClick"])) : le("v-if", !0),
            nt(_e(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: W([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: ee(() => [
                e.showNewOption ? (M(), ae(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : le("v-if", !0),
                _e(f, null, {
                  default: ee(() => [
                    te(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Gt, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (M(), z("div", {
              key: 1,
              class: W(e.nsSelect.be("dropdown", "loading"))
            }, [
              te(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (M(), z("div", {
              key: 2,
              class: W(e.nsSelect.be("dropdown", "empty"))
            }, [
              te(e.$slots, "empty", {}, () => [
                H("span", null, ze(e.emptyText), 1)
              ])
            ], 2)) : le("v-if", !0),
            e.$slots.footer ? (M(), z("div", {
              key: 3,
              class: W(e.nsSelect.be("dropdown", "footer")),
              onClick: He(() => {
              }, ["stop"])
            }, [
              te(e.$slots, "footer")
            ], 10, ["onClick"])) : le("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [v, e.handleClickOutside, e.popperRef]
  ]);
}
var j0 = /* @__PURE__ */ Oe(W0, [["render", H0], ["__file", "select.vue"]]);
const z0 = V({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Ue("select"), n = F(null), r = We(), o = F([]);
    It(qi, $n({
      ...ia(e)
    }));
    const a = I(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, p;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, l = (u) => {
      const f = sn(u), p = [];
      return f.forEach((d) => {
        var v, g;
        s(d) ? p.push(d.component.proxy) : (v = d.children) != null && v.length ? p.push(...l(d.children)) : (g = d.component) != null && g.subTree && p.push(...l(d.component.subTree));
      }), p;
    }, i = () => {
      o.value = l(r.subTree);
    };
    return De(() => {
      i();
    }), Am(n, i, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: a,
      ns: t
    };
  }
});
function K0(e, t, n, r, o, a) {
  return nt((M(), z("ul", {
    ref: "groupRef",
    class: W(e.ns.be("group", "wrap"))
  }, [
    H("li", {
      class: W(e.ns.be("group", "title"))
    }, ze(e.label), 3),
    H("li", null, [
      H("ul", {
        class: W(e.ns.b("group"))
      }, [
        te(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Gt, e.visible]
  ]);
}
var Ji = /* @__PURE__ */ Oe(z0, [["render", K0], ["__file", "option-group.vue"]]);
const CE = fn(j0, {
  Option: Da,
  OptionGroup: Ji
}), SE = Oi(Da);
Oi(Ji);
const Zi = ["success", "info", "warning", "error"], Me = Rv({
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
  appendTo: Te ? document.body : void 0
}), G0 = he({
  customClass: {
    type: String,
    default: Me.customClass
  },
  center: {
    type: Boolean,
    default: Me.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Me.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Me.duration
  },
  icon: {
    type: qr,
    default: Me.icon
  },
  id: {
    type: String,
    default: Me.id
  },
  message: {
    type: G([
      String,
      Object,
      Function
    ]),
    default: Me.message
  },
  onClose: {
    type: G(Function),
    default: Me.onClose
  },
  showClose: {
    type: Boolean,
    default: Me.showClose
  },
  type: {
    type: String,
    values: Zi,
    default: Me.type
  },
  plain: {
    type: Boolean,
    default: Me.plain
  },
  offset: {
    type: Number,
    default: Me.offset
  },
  zIndex: {
    type: Number,
    default: Me.zIndex
  },
  grouping: {
    type: Boolean,
    default: Me.grouping
  },
  repeatNum: {
    type: Number,
    default: Me.repeatNum
  }
}), Y0 = {
  destroy: () => !0
}, pt = mc([]), X0 = (e) => {
  const t = pt.findIndex((o) => o.id === e), n = pt[t];
  let r;
  return t > 0 && (r = pt[t - 1]), { current: n, prev: r };
}, q0 = (e) => {
  const { prev: t } = X0(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, J0 = (e, t) => pt.findIndex((r) => r.id === e) > 0 ? 16 : t, Z0 = V({
  name: "ElMessage"
}), Q0 = /* @__PURE__ */ V({
  ...Z0,
  props: G0,
  emits: Y0,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Av, { ns: o, zIndex: a } = hi("message"), { currentZIndex: s, nextZIndex: l } = a, i = F(), u = F(!1), f = F(0);
    let p;
    const d = I(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = I(() => {
      const E = n.type;
      return { [o.bm("icon", E)]: E && Jr[E] };
    }), g = I(() => n.icon || Jr[n.type] || ""), m = I(() => q0(n.id)), T = I(() => J0(n.id, n.offset) + m.value), c = I(() => f.value + T.value), h = I(() => ({
      top: `${T.value}px`,
      zIndex: s.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: p } = ri(() => {
        w();
      }, n.duration));
    }
    function b() {
      p?.();
    }
    function w() {
      u.value = !1;
    }
    function S({ code: E }) {
      E === St.esc && w();
    }
    return De(() => {
      C(), l(), u.value = !0;
    }), q(() => n.repeatNum, () => {
      b(), C();
    }), Be(document, "keydown", S), Bt(i, () => {
      f.value = i.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: c,
      close: w
    }), (E, R) => (M(), ae(Kn, {
      name: O(o).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (D) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        nt(H("div", {
          id: E.id,
          ref_key: "messageRef",
          ref: i,
          class: W([
            O(o).b(),
            { [O(o).m(E.type)]: E.type },
            O(o).is("center", E.center),
            O(o).is("closable", E.showClose),
            O(o).is("plain", E.plain),
            E.customClass
          ]),
          style: Ge(O(h)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: C
        }, [
          E.repeatNum > 1 ? (M(), ae(O(O0), {
            key: 0,
            value: E.repeatNum,
            type: O(d),
            class: W(O(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : le("v-if", !0),
          O(g) ? (M(), ae(O(Tn), {
            key: 1,
            class: W([O(o).e("icon"), O(v)])
          }, {
            default: ee(() => [
              (M(), ae(Fn(O(g))))
            ]),
            _: 1
          }, 8, ["class"])) : le("v-if", !0),
          te(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (M(), z(un, { key: 1 }, [
              le(" Caution here, message could've been compromised, never use user's input as message "),
              H("p", {
                class: W(O(o).e("content")),
                innerHTML: E.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (M(), z("p", {
              key: 0,
              class: W(O(o).e("content"))
            }, ze(E.message), 3))
          ]),
          E.showClose ? (M(), ae(O(Tn), {
            key: 2,
            class: W(O(o).e("closeBtn")),
            onClick: He(w, ["stop"])
          }, {
            default: ee(() => [
              _e(O(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : le("v-if", !0)
        ], 46, ["id"]), [
          [Gt, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var eh = /* @__PURE__ */ Oe(Q0, [["__file", "message.vue"]]);
let th = 1;
const Qi = (e) => {
  const t = !e || Lt(e) || lr(e) || Ae(e) ? { message: e } : e, n = {
    ...Me,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Lt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    rt(r) || (at("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), r = document.body), n.appendTo = r;
  }
  return Kr(ct.grouping) && !n.grouping && (n.grouping = ct.grouping), $e(ct.duration) && n.duration === 3e3 && (n.duration = ct.duration), $e(ct.offset) && n.offset === 16 && (n.offset = ct.offset), Kr(ct.showClose) && !n.showClose && (n.showClose = ct.showClose), n;
}, nh = (e) => {
  const t = pt.indexOf(e);
  if (t === -1)
    return;
  pt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, rh = ({ appendTo: e, ...t }, n) => {
  const r = `message_${th++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), nh(f);
    },
    onDestroy: () => {
      Hr(null, a);
    }
  }, l = _e(eh, s, Ae(s.message) || lr(s.message) ? {
    default: Ae(s.message) ? s.message : () => s.message
  } : null);
  l.appContext = n || Hn._context, Hr(l, a), e.appendChild(a.firstElementChild);
  const i = l.component, f = {
    id: r,
    vnode: l,
    vm: i,
    handler: {
      close: () => {
        i.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return f;
}, Hn = (e = {}, t) => {
  if (!Te)
    return { close: () => {
    } };
  const n = Qi(e);
  if (n.grouping && pt.length) {
    const o = pt.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if ($e(ct.max) && pt.length >= ct.max)
    return { close: () => {
    } };
  const r = rh(n, t);
  return pt.push(r), r.handler;
};
Zi.forEach((e) => {
  Hn[e] = (t = {}, n) => {
    const r = Qi(t);
    return Hn({ ...r, type: e }, n);
  };
});
function oh(e) {
  for (const t of pt)
    (!e || e === t.props.type) && t.handler.close();
}
Hn.closeAll = oh;
Hn._context = null;
const ah = Ti(Hn, "$message"), eu = [
  "success",
  "info",
  "warning",
  "error"
], sh = he({
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
    type: qr
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: G([
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
    type: G(Function),
    default: () => {
    }
  },
  onClose: {
    type: G(Function),
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
    values: [...eu, ""],
    default: ""
  },
  zIndex: Number
}), lh = {
  destroy: () => !0
}, ih = V({
  name: "ElNotification"
}), uh = /* @__PURE__ */ V({
  ...ih,
  props: sh,
  emits: lh,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = hi("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: l } = Iv, i = F(!1);
    let u;
    const f = I(() => {
      const C = n.type;
      return C && Jr[n.type] ? r.m(C) : "";
    }), p = I(() => n.type && Jr[n.type] || n.icon), d = I(() => n.position.endsWith("right") ? "right" : "left"), v = I(() => n.position.startsWith("top") ? "top" : "bottom"), g = I(() => {
      var C;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : s.value
      };
    });
    function m() {
      n.duration > 0 && ({ stop: u } = ri(() => {
        i.value && c();
      }, n.duration));
    }
    function T() {
      u?.();
    }
    function c() {
      i.value = !1;
    }
    function h({ code: C }) {
      C === St.delete || C === St.backspace ? T() : C === St.esc ? i.value && c() : m();
    }
    return De(() => {
      m(), a(), i.value = !0;
    }), Be(document, "keydown", h), t({
      visible: i,
      close: c
    }), (C, b) => (M(), ae(Kn, {
      name: O(r).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (w) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        nt(H("div", {
          id: C.id,
          class: W([O(r).b(), C.customClass, O(d)]),
          style: Ge(O(g)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: m,
          onClick: C.onClick
        }, [
          O(p) ? (M(), ae(O(Tn), {
            key: 0,
            class: W([O(r).e("icon"), O(f)])
          }, {
            default: ee(() => [
              (M(), ae(Fn(O(p))))
            ]),
            _: 1
          }, 8, ["class"])) : le("v-if", !0),
          H("div", {
            class: W(O(r).e("group"))
          }, [
            H("h2", {
              class: W(O(r).e("title")),
              textContent: ze(C.title)
            }, null, 10, ["textContent"]),
            nt(H("div", {
              class: W(O(r).e("content")),
              style: Ge(C.title ? void 0 : { margin: 0 })
            }, [
              te(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (M(), z(un, { key: 1 }, [
                  le(" Caution here, message could've been compromised, never use user's input as message "),
                  H("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (M(), z("p", { key: 0 }, ze(C.message), 1))
              ])
            ], 6), [
              [Gt, C.message]
            ]),
            C.showClose ? (M(), ae(O(Tn), {
              key: 0,
              class: W(O(r).e("closeBtn")),
              onClick: He(c, ["stop"])
            }, {
              default: ee(() => [
                _e(O(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : le("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Gt, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ch = /* @__PURE__ */ Oe(uh, [["__file", "notification.vue"]]);
const eo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Yo = 16;
let fh = 1;
const jn = function(e = {}, t) {
  if (!Te)
    return { close: () => {
    } };
  (Lt(e) || lr(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  eo[n].forEach(({ vm: f }) => {
    var p;
    r += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + Yo;
  }), r += Yo;
  const o = `notification_${fh++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      dh(o, n, a);
    }
  };
  let l = document.body;
  rt(e.appendTo) ? l = e.appendTo : Lt(e.appendTo) && (l = document.querySelector(e.appendTo)), rt(l) || (at("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), l = document.body);
  const i = document.createElement("div"), u = _e(ch, s, Ae(s.message) ? s.message : lr(s.message) ? () => s.message : null);
  return u.appContext = kn(t) ? jn._context : t, u.props.onDestroy = () => {
    Hr(null, i);
  }, Hr(u, i), eo[n].push({ vm: u }), l.appendChild(i.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
eu.forEach((e) => {
  jn[e] = (t = {}, n) => ((Lt(t) || lr(t)) && (t = {
    message: t
  }), jn({ ...t, type: e }, n));
});
function dh(e, t, n) {
  const r = eo[t], o = r.findIndex(({ vm: u }) => {
    var f;
    return ((f = u.component) == null ? void 0 : f.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: a } = r[o];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, l = t.split("-")[0];
  r.splice(o, 1);
  const i = r.length;
  if (!(i < 1))
    for (let u = o; u < i; u++) {
      const { el: f, component: p } = r[u].vm, d = Number.parseInt(f.style[l], 10) - s - Yo;
      p.props.offset = d;
    }
}
function ph() {
  for (const e of Object.values(eo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
jn.closeAll = ph;
jn._context = null;
const mh = Ti(jn, "$notify");
function vh(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function gh(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var xr;
const NE = "__TAURI_TO_IPC_KEY__";
function _h(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Ne(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function hh(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class LE {
  get rid() {
    return vh(this, xr, "f");
  }
  constructor(t) {
    xr.set(this, void 0), gh(this, xr, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return Ne("plugin:resources|close", {
      rid: this.rid
    });
  }
}
xr = /* @__PURE__ */ new WeakMap();
var al;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(al || (al = {}));
async function tu(e, t) {
  await Ne("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function yh(e, t, n) {
  var r;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return Ne("plugin:event|listen", {
    event: e,
    target: o,
    handler: _h(t)
  }).then((a) => async () => tu(e, a));
}
async function IE(e, t, n) {
  return yh(e, (r) => {
    tu(e, r.id), t(r);
  }, n);
}
async function AE(e, t) {
  await Ne("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function PE(e, t, n) {
  await Ne("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
const RE = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", r) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: r
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
      position: r = "center",
      duration: o = 3e3,
      showClose: a = !1
    } = e;
    r === "center" ? ah({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0
    }) : mh({
      message: t,
      type: n,
      position: r,
      duration: o,
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
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Rt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const sl = {};
function bh(e) {
  sl[e] || (sl[e] = !0, Rt(e));
}
const Xt = typeof window < "u";
let Ze, wn;
if (process.env.NODE_ENV !== "production") {
  const e = Xt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ze = (t) => {
    e.mark(t);
  }, wn = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const Eh = /\{([0-9a-zA-Z]+)\}/g;
function yo(e, ...t) {
  return t.length === 1 && re(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Eh, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Zt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Th = (e, t, n) => Oh({ l: e, k: t, s: n }), Oh = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ie = (e) => typeof e == "number" && isFinite(e), wh = (e) => Ma(e) === "[object Date]", to = (e) => Ma(e) === "[object RegExp]", bo = (e) => ne(e) && Object.keys(e).length === 0, Pe = Object.assign, Ch = Object.create, ie = (e = null) => Ch(e);
let ll;
const hn = () => ll || (ll = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ie());
function il(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ul(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Sh(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${ul(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${ul(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && Rt("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Nh = Object.prototype.hasOwnProperty;
function mt(e, t) {
  return Nh.call(e, t);
}
const Ee = Array.isArray, ve = (e) => typeof e == "function", U = (e) => typeof e == "string", ye = (e) => typeof e == "boolean", re = (e) => e !== null && typeof e == "object", Lh = (e) => re(e) && ve(e.then) && ve(e.catch), nu = Object.prototype.toString, Ma = (e) => nu.call(e), ne = (e) => Ma(e) === "[object Object]", Ih = (e) => e == null ? "" : Ee(e) || ne(e) && e.toString === nu ? JSON.stringify(e, null, 2) : String(e);
function ka(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const cl = 2;
function Ah(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let o = 0;
  const a = [];
  for (let s = 0; s < r.length; s++)
    if (o += r[s].length + 1, o >= t) {
      for (let l = s - cl; l <= s + cl || n > o; l++) {
        if (l < 0 || l >= r.length)
          continue;
        const i = l + 1;
        a.push(`${i}${" ".repeat(3 - String(i).length)}|  ${r[l]}`);
        const u = r[l].length;
        if (l === s) {
          const f = t - (o - u) + 1, p = Math.max(1, n > o ? u - f : n - t);
          a.push("   |  " + " ".repeat(f) + "^".repeat(p));
        } else if (l > s) {
          if (n > o) {
            const f = Math.max(Math.min(n - o, u), 1);
            a.push("   |  " + "^".repeat(f));
          }
          o += u + 1;
        }
      }
      break;
    }
  return a.join(`
`);
}
function Ph() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const o = e.get(n);
      o && o.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const o = e.get(n);
      o && o.splice(o.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((o) => o(r)), (e.get("*") || []).slice().map((o) => o(n, r));
    }
  };
}
const Mr = (e) => !re(e) || Ee(e);
function Vr(e, t) {
  if (Mr(e) || Mr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (re(r[a]) && !re(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : ie()), Mr(o[a]) || Mr(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Rh(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Xo(e, t, n) {
  return { start: e, end: t };
}
const K = {
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
}, Dh = 17, Mh = {
  // tokenizer error messages
  [K.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [K.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [K.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [K.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [K.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [K.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [K.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [K.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [K.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [K.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [K.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [K.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [K.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [K.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [K.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Yn(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = process.env.NODE_ENV !== "production" ? yo((o || Mh)[e] || "", ...a || []) : e, l = new SyntaxError(String(s));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function kh(e) {
  throw e;
}
const Fh = /<\/?[\w\s="/.':;#-\/]+>/, $h = (e) => Fh.test(e), Ot = " ", Uh = "\r", ke = `
`, xh = "\u2028", Vh = "\u2029";
function Bh(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (E) => t[E] === Uh && t[E + 1] === ke, l = (E) => t[E] === ke, i = (E) => t[E] === Vh, u = (E) => t[E] === xh, f = (E) => s(E) || l(E) || i(E) || u(E), p = () => n, d = () => r, v = () => o, g = () => a, m = (E) => s(E) || i(E) || u(E) ? ke : t[E], T = () => m(n), c = () => m(n + a);
  function h() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function C() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function b() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function w(E = 0) {
    a = E;
  }
  function S() {
    const E = n + a;
    for (; E !== n; )
      h();
    a = 0;
  }
  return {
    index: p,
    line: d,
    column: v,
    peekOffset: g,
    charAt: m,
    currentChar: T,
    currentPeek: c,
    next: h,
    peek: C,
    reset: b,
    resetPeek: w,
    skipToPeek: S
  };
}
const Ut = void 0, Wh = ".", fl = "'", Hh = "tokenizer";
function jh(e, t = {}) {
  const n = t.location !== !1, r = Bh(e), o = () => r.index(), a = () => Rh(r.line(), r.column(), r.index()), s = a(), l = o(), i = {
    currentType: 13,
    offset: l,
    startLoc: s,
    endLoc: s,
    lastType: 13,
    lastOffset: l,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => i, { onError: f } = t;
  function p(_, y, A, ...$) {
    const se = u();
    if (y.column += A, y.offset += A, f) {
      const de = n ? Xo(se.startLoc, y) : null, J = Yn(_, de, {
        domain: Hh,
        args: $
      });
      f(J);
    }
  }
  function d(_, y, A) {
    _.endLoc = a(), _.currentType = y;
    const $ = { type: y };
    return n && ($.loc = Xo(_.startLoc, _.endLoc)), A != null && ($.value = A), $;
  }
  const v = (_) => d(
    _,
    13
    /* TokenTypes.EOF */
  );
  function g(_, y) {
    return _.currentChar() === y ? (_.next(), y) : (p(K.EXPECTED_TOKEN, a(), 0, y), "");
  }
  function m(_) {
    let y = "";
    for (; _.currentPeek() === Ot || _.currentPeek() === ke; )
      y += _.currentPeek(), _.peek();
    return y;
  }
  function T(_) {
    const y = m(_);
    return _.skipToPeek(), y;
  }
  function c(_) {
    if (_ === Ut)
      return !1;
    const y = _.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y === 95;
  }
  function h(_) {
    if (_ === Ut)
      return !1;
    const y = _.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function C(_, y) {
    const { currentType: A } = y;
    if (A !== 2)
      return !1;
    m(_);
    const $ = c(_.currentPeek());
    return _.resetPeek(), $;
  }
  function b(_, y) {
    const { currentType: A } = y;
    if (A !== 2)
      return !1;
    m(_);
    const $ = _.currentPeek() === "-" ? _.peek() : _.currentPeek(), se = h($);
    return _.resetPeek(), se;
  }
  function w(_, y) {
    const { currentType: A } = y;
    if (A !== 2)
      return !1;
    m(_);
    const $ = _.currentPeek() === fl;
    return _.resetPeek(), $;
  }
  function S(_, y) {
    const { currentType: A } = y;
    if (A !== 7)
      return !1;
    m(_);
    const $ = _.currentPeek() === ".";
    return _.resetPeek(), $;
  }
  function E(_, y) {
    const { currentType: A } = y;
    if (A !== 8)
      return !1;
    m(_);
    const $ = c(_.currentPeek());
    return _.resetPeek(), $;
  }
  function R(_, y) {
    const { currentType: A } = y;
    if (!(A === 7 || A === 11))
      return !1;
    m(_);
    const $ = _.currentPeek() === ":";
    return _.resetPeek(), $;
  }
  function D(_, y) {
    const { currentType: A } = y;
    if (A !== 9)
      return !1;
    const $ = () => {
      const de = _.currentPeek();
      return de === "{" ? c(_.peek()) : de === "@" || de === "|" || de === ":" || de === "." || de === Ot || !de ? !1 : de === ke ? (_.peek(), $()) : X(_, !1);
    }, se = $();
    return _.resetPeek(), se;
  }
  function B(_) {
    m(_);
    const y = _.currentPeek() === "|";
    return _.resetPeek(), y;
  }
  function X(_, y = !0) {
    const A = (se = !1, de = "") => {
      const J = _.currentPeek();
      return J === "{" || J === "@" || !J ? se : J === "|" ? !(de === Ot || de === ke) : J === Ot ? (_.peek(), A(!0, Ot)) : J === ke ? (_.peek(), A(!0, ke)) : !0;
    }, $ = A();
    return y && _.resetPeek(), $;
  }
  function j(_, y) {
    const A = _.currentChar();
    return A === Ut ? Ut : y(A) ? (_.next(), A) : null;
  }
  function Q(_) {
    const y = _.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y >= 48 && y <= 57 || // 0-9
    y === 95 || // _
    y === 36;
  }
  function Le(_) {
    return j(_, Q);
  }
  function me(_) {
    const y = _.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y >= 48 && y <= 57 || // 0-9
    y === 95 || // _
    y === 36 || // $
    y === 45;
  }
  function oe(_) {
    return j(_, me);
  }
  function x(_) {
    const y = _.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function ge(_) {
    return j(_, x);
  }
  function we(_) {
    const y = _.charCodeAt(0);
    return y >= 48 && y <= 57 || // 0-9
    y >= 65 && y <= 70 || // A-F
    y >= 97 && y <= 102;
  }
  function Ce(_) {
    return j(_, we);
  }
  function it(_) {
    let y = "", A = "";
    for (; y = ge(_); )
      A += y;
    return A;
  }
  function et(_) {
    let y = "";
    for (; ; ) {
      const A = _.currentChar();
      if (A === "{" || A === "}" || A === "@" || A === "|" || !A)
        break;
      if (A === Ot || A === ke)
        if (X(_))
          y += A, _.next();
        else {
          if (B(_))
            break;
          y += A, _.next();
        }
      else
        y += A, _.next();
    }
    return y;
  }
  function _t(_) {
    T(_);
    let y = "", A = "";
    for (; y = oe(_); )
      A += y;
    const $ = _.currentChar();
    if ($ && $ !== "}" && $ !== Ut && $ !== Ot && $ !== ke && $ !== "　") {
      const se = Qt(_);
      return p(K.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, A + se), A + se;
    }
    return _.currentChar() === Ut && p(K.UNTERMINATED_CLOSING_BRACE, a(), 0), A;
  }
  function qe(_) {
    T(_);
    let y = "";
    return _.currentChar() === "-" ? (_.next(), y += `-${it(_)}`) : y += it(_), _.currentChar() === Ut && p(K.UNTERMINATED_CLOSING_BRACE, a(), 0), y;
  }
  function xe(_) {
    return _ !== fl && _ !== ke;
  }
  function kt(_) {
    T(_), g(_, "'");
    let y = "", A = "";
    for (; y = j(_, xe); )
      y === "\\" ? A += Ve(_) : A += y;
    const $ = _.currentChar();
    return $ === ke || $ === Ut ? (p(K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), $ === ke && (_.next(), g(_, "'")), A) : (g(_, "'"), A);
  }
  function Ve(_) {
    const y = _.currentChar();
    switch (y) {
      case "\\":
      case "'":
        return _.next(), `\\${y}`;
      case "u":
        return fe(_, y, 4);
      case "U":
        return fe(_, y, 6);
      default:
        return p(K.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, y), "";
    }
  }
  function fe(_, y, A) {
    g(_, y);
    let $ = "";
    for (let se = 0; se < A; se++) {
      const de = Ce(_);
      if (!de) {
        p(K.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${y}${$}${_.currentChar()}`);
        break;
      }
      $ += de;
    }
    return `\\${y}${$}`;
  }
  function vn(_) {
    return _ !== "{" && _ !== "}" && _ !== Ot && _ !== ke;
  }
  function Qt(_) {
    T(_);
    let y = "", A = "";
    for (; y = j(_, vn); )
      A += y;
    return A;
  }
  function ht(_) {
    let y = "", A = "";
    for (; y = Le(_); )
      A += y;
    return A;
  }
  function en(_) {
    const y = (A) => {
      const $ = _.currentChar();
      return $ === "{" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === Ot ? A : (A += $, _.next(), y(A));
    };
    return y("");
  }
  function yt(_) {
    T(_);
    const y = g(
      _,
      "|"
      /* TokenChars.Pipe */
    );
    return T(_), y;
  }
  function Ft(_, y) {
    let A = null;
    switch (_.currentChar()) {
      case "{":
        return y.braceNest >= 1 && p(K.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), _.next(), A = d(
          y,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), T(_), y.braceNest++, A;
      case "}":
        return y.braceNest > 0 && y.currentType === 2 && p(K.EMPTY_PLACEHOLDER, a(), 0), _.next(), A = d(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), y.braceNest--, y.braceNest > 0 && T(_), y.inLinked && y.braceNest === 0 && (y.inLinked = !1), A;
      case "@":
        return y.braceNest > 0 && p(K.UNTERMINATED_CLOSING_BRACE, a(), 0), A = ut(_, y) || v(y), y.braceNest = 0, A;
      default: {
        let se = !0, de = !0, J = !0;
        if (B(_))
          return y.braceNest > 0 && p(K.UNTERMINATED_CLOSING_BRACE, a(), 0), A = d(y, 1, yt(_)), y.braceNest = 0, y.inLinked = !1, A;
        if (y.braceNest > 0 && (y.currentType === 4 || y.currentType === 5 || y.currentType === 6))
          return p(K.UNTERMINATED_CLOSING_BRACE, a(), 0), y.braceNest = 0, bt(_, y);
        if (se = C(_, y))
          return A = d(y, 4, _t(_)), T(_), A;
        if (de = b(_, y))
          return A = d(y, 5, qe(_)), T(_), A;
        if (J = w(_, y))
          return A = d(y, 6, kt(_)), T(_), A;
        if (!se && !de && !J)
          return A = d(y, 12, Qt(_)), p(K.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, A.value), T(_), A;
        break;
      }
    }
    return A;
  }
  function ut(_, y) {
    const { currentType: A } = y;
    let $ = null;
    const se = _.currentChar();
    switch ((A === 7 || A === 8 || A === 11 || A === 9) && (se === ke || se === Ot) && p(K.INVALID_LINKED_FORMAT, a(), 0), se) {
      case "@":
        return _.next(), $ = d(
          y,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), y.inLinked = !0, $;
      case ".":
        return T(_), _.next(), d(
          y,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return T(_), _.next(), d(
          y,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return B(_) ? ($ = d(y, 1, yt(_)), y.braceNest = 0, y.inLinked = !1, $) : S(_, y) || R(_, y) ? (T(_), ut(_, y)) : E(_, y) ? (T(_), d(y, 11, ht(_))) : D(_, y) ? (T(_), se === "{" ? Ft(_, y) || $ : d(y, 10, en(_))) : (A === 7 && p(K.INVALID_LINKED_FORMAT, a(), 0), y.braceNest = 0, y.inLinked = !1, bt(_, y));
    }
  }
  function bt(_, y) {
    let A = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (y.braceNest > 0)
      return Ft(_, y) || v(y);
    if (y.inLinked)
      return ut(_, y) || v(y);
    switch (_.currentChar()) {
      case "{":
        return Ft(_, y) || v(y);
      case "}":
        return p(K.UNBALANCED_CLOSING_BRACE, a(), 0), _.next(), d(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return ut(_, y) || v(y);
      default: {
        if (B(_))
          return A = d(y, 1, yt(_)), y.braceNest = 0, y.inLinked = !1, A;
        if (X(_))
          return d(y, 0, et(_));
        break;
      }
    }
    return A;
  }
  function tn() {
    const { currentType: _, offset: y, startLoc: A, endLoc: $ } = i;
    return i.lastType = _, i.lastOffset = y, i.lastStartLoc = A, i.lastEndLoc = $, i.offset = o(), i.startLoc = a(), r.currentChar() === Ut ? d(
      i,
      13
      /* TokenTypes.EOF */
    ) : bt(r, i);
  }
  return {
    nextToken: tn,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const zh = "parser", Kh = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Gh(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function Yh(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(c, h, C, b, ...w) {
    const S = c.currentPosition();
    if (S.offset += b, S.column += b, n) {
      const E = t ? Xo(C, S) : null, R = Yn(h, E, {
        domain: zh,
        args: w
      });
      n(R);
    }
  }
  function o(c, h, C) {
    const b = { type: c };
    return t && (b.start = h, b.end = h, b.loc = { start: C, end: C }), b;
  }
  function a(c, h, C, b) {
    t && (c.end = h, c.loc && (c.loc.end = C));
  }
  function s(c, h) {
    const C = c.context(), b = o(3, C.offset, C.startLoc);
    return b.value = h, a(b, c.currentOffset(), c.currentPosition()), b;
  }
  function l(c, h) {
    const C = c.context(), { lastOffset: b, lastStartLoc: w } = C, S = o(5, b, w);
    return S.index = parseInt(h, 10), c.nextToken(), a(S, c.currentOffset(), c.currentPosition()), S;
  }
  function i(c, h) {
    const C = c.context(), { lastOffset: b, lastStartLoc: w } = C, S = o(4, b, w);
    return S.key = h, c.nextToken(), a(S, c.currentOffset(), c.currentPosition()), S;
  }
  function u(c, h) {
    const C = c.context(), { lastOffset: b, lastStartLoc: w } = C, S = o(9, b, w);
    return S.value = h.replace(Kh, Gh), c.nextToken(), a(S, c.currentOffset(), c.currentPosition()), S;
  }
  function f(c) {
    const h = c.nextToken(), C = c.context(), { lastOffset: b, lastStartLoc: w } = C, S = o(8, b, w);
    return h.type !== 11 ? (r(c, K.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0), S.value = "", a(S, b, w), {
      nextConsumeToken: h,
      node: S
    }) : (h.value == null && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, wt(h)), S.value = h.value || "", a(S, c.currentOffset(), c.currentPosition()), {
      node: S
    });
  }
  function p(c, h) {
    const C = c.context(), b = o(7, C.offset, C.startLoc);
    return b.value = h, a(b, c.currentOffset(), c.currentPosition()), b;
  }
  function d(c) {
    const h = c.context(), C = o(6, h.offset, h.startLoc);
    let b = c.nextToken();
    if (b.type === 8) {
      const w = f(c);
      C.modifier = w.node, b = w.nextConsumeToken || c.nextToken();
    }
    switch (b.type !== 9 && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, wt(b)), b = c.nextToken(), b.type === 2 && (b = c.nextToken()), b.type) {
      case 10:
        b.value == null && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, wt(b)), C.key = p(c, b.value || "");
        break;
      case 4:
        b.value == null && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, wt(b)), C.key = i(c, b.value || "");
        break;
      case 5:
        b.value == null && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, wt(b)), C.key = l(c, b.value || "");
        break;
      case 6:
        b.value == null && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, wt(b)), C.key = u(c, b.value || "");
        break;
      default: {
        r(c, K.UNEXPECTED_EMPTY_LINKED_KEY, h.lastStartLoc, 0);
        const w = c.context(), S = o(7, w.offset, w.startLoc);
        return S.value = "", a(S, w.offset, w.startLoc), C.key = S, a(C, w.offset, w.startLoc), {
          nextConsumeToken: b,
          node: C
        };
      }
    }
    return a(C, c.currentOffset(), c.currentPosition()), {
      node: C
    };
  }
  function v(c) {
    const h = c.context(), C = h.currentType === 1 ? c.currentOffset() : h.offset, b = h.currentType === 1 ? h.endLoc : h.startLoc, w = o(2, C, b);
    w.items = [];
    let S = null;
    do {
      const D = S || c.nextToken();
      switch (S = null, D.type) {
        case 0:
          D.value == null && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, wt(D)), w.items.push(s(c, D.value || ""));
          break;
        case 5:
          D.value == null && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, wt(D)), w.items.push(l(c, D.value || ""));
          break;
        case 4:
          D.value == null && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, wt(D)), w.items.push(i(c, D.value || ""));
          break;
        case 6:
          D.value == null && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, wt(D)), w.items.push(u(c, D.value || ""));
          break;
        case 7: {
          const B = d(c);
          w.items.push(B.node), S = B.nextConsumeToken || null;
          break;
        }
      }
    } while (h.currentType !== 13 && h.currentType !== 1);
    const E = h.currentType === 1 ? h.lastOffset : c.currentOffset(), R = h.currentType === 1 ? h.lastEndLoc : c.currentPosition();
    return a(w, E, R), w;
  }
  function g(c, h, C, b) {
    const w = c.context();
    let S = b.items.length === 0;
    const E = o(1, h, C);
    E.cases = [], E.cases.push(b);
    do {
      const R = v(c);
      S || (S = R.items.length === 0), E.cases.push(R);
    } while (w.currentType !== 13);
    return S && r(c, K.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0), a(E, c.currentOffset(), c.currentPosition()), E;
  }
  function m(c) {
    const h = c.context(), { offset: C, startLoc: b } = h, w = v(c);
    return h.currentType === 13 ? w : g(c, C, b, w);
  }
  function T(c) {
    const h = jh(c, Pe({}, e)), C = h.context(), b = o(0, C.offset, C.startLoc);
    return t && b.loc && (b.loc.source = c), b.body = m(h), e.onCacheKey && (b.cacheKey = e.onCacheKey(c)), C.currentType !== 13 && r(h, K.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, c[C.offset] || ""), a(b, h.currentOffset(), h.currentPosition()), b;
  }
  return { parse: T };
}
function wt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Xh(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function dl(e, t) {
  for (let n = 0; n < e.length; n++)
    Fa(e[n], t);
}
function Fa(e, t) {
  switch (e.type) {
    case 1:
      dl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      dl(e.items, t);
      break;
    case 6: {
      Fa(e.key, t), t.helper(
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
function qh(e, t = {}) {
  const n = Xh(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Fa(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Jh(e) {
  const t = e.body;
  return t.type === 2 ? pl(t) : t.cases.forEach((n) => pl(n)), e;
}
function pl(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = ka(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const Zh = "minifier";
function Dn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Dn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Dn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Dn(n[r]);
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
      Dn(t.key), t.k = t.key, delete t.key, t.modifier && (Dn(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw Yn(K.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: Zh,
          args: [e.type]
        });
  }
  delete e.type;
}
const Qh = "parser";
function ey(e, t) {
  const { filename: n, breakLineCode: r, needIndent: o } = t, a = t.location !== !1, s = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: o,
    indentLevel: 0
  };
  a && e.loc && (s.source = e.loc.source);
  const l = () => s;
  function i(m, T) {
    s.code += m;
  }
  function u(m, T = !0) {
    const c = T ? r : "";
    i(o ? c + "  ".repeat(m) : c);
  }
  function f(m = !0) {
    const T = ++s.indentLevel;
    m && u(T);
  }
  function p(m = !0) {
    const T = --s.indentLevel;
    m && u(T);
  }
  function d() {
    u(s.indentLevel);
  }
  return {
    context: l,
    push: i,
    indent: f,
    deindent: p,
    newline: d,
    helper: (m) => `_${m}`,
    needIndent: () => s.needIndent
  };
}
function ty(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), zn(e, t.key), t.modifier ? (e.push(", "), zn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ny(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (zn(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function ry(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (zn(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function oy(e, t) {
  t.body ? zn(e, t.body) : e.push("null");
}
function zn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      oy(e, t);
      break;
    case 1:
      ry(e, t);
      break;
    case 2:
      ny(e, t);
      break;
    case 6:
      ty(e, t);
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
        throw Yn(K.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: Qh,
          args: [t.type]
        });
  }
}
const ay = (e, t = {}) => {
  const n = U(t.mode) ? t.mode : "normal", r = U(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], l = ey(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), s.length > 0 && (l.push(`const { ${ka(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), zn(l, e), l.deindent(a), l.push("}"), delete e.helpers;
  const { code: i, map: u } = l.context();
  return {
    ast: e,
    code: i,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function sy(e, t = {}) {
  const n = Pe({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, l = Yh(n).parse(e);
  return r ? (a && Jh(l), o && Dn(l), { ast: l, code: "" }) : (qh(l, n), ay(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ly() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (hn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (hn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function vt(e) {
  return re(e) && $a(e) === 0 && (mt(e, "b") || mt(e, "body"));
}
const ru = ["b", "body"];
function iy(e) {
  return pn(e, ru);
}
const ou = ["c", "cases"];
function uy(e) {
  return pn(e, ou, []);
}
const au = ["s", "static"];
function cy(e) {
  return pn(e, au);
}
const su = ["i", "items"];
function fy(e) {
  return pn(e, su, []);
}
const lu = ["t", "type"];
function $a(e) {
  return pn(e, lu);
}
const iu = ["v", "value"];
function kr(e, t) {
  const n = pn(e, iu);
  if (n != null)
    return n;
  throw mr(t);
}
const uu = ["m", "modifier"];
function dy(e) {
  return pn(e, uu);
}
const cu = ["k", "key"];
function py(e) {
  const t = pn(e, cu);
  if (t)
    return t;
  throw mr(
    6
    /* NodeTypes.Linked */
  );
}
function pn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (mt(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const fu = [
  ...ru,
  ...ou,
  ...au,
  ...su,
  ...cu,
  ...uu,
  ...iu,
  ...lu
];
function mr(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Po(e) {
  return (n) => my(n, e);
}
function my(e, t) {
  const n = iy(t);
  if (n == null)
    throw mr(
      0
      /* NodeTypes.Resource */
    );
  if ($a(n) === 1) {
    const a = uy(n);
    return e.plural(a.reduce((s, l) => [
      ...s,
      ml(e, l)
    ], []));
  } else
    return ml(e, n);
}
function ml(e, t) {
  const n = cy(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = fy(t).reduce((o, a) => [...o, qo(e, a)], []);
    return e.normalize(r);
  }
}
function qo(e, t) {
  const n = $a(t);
  switch (n) {
    case 3:
      return kr(t, n);
    case 9:
      return kr(t, n);
    case 4: {
      const r = t;
      if (mt(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (mt(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw mr(n);
    }
    case 5: {
      const r = t;
      if (mt(r, "i") && Ie(r.i))
        return e.interpolate(e.list(r.i));
      if (mt(r, "index") && Ie(r.index))
        return e.interpolate(e.list(r.index));
      throw mr(n);
    }
    case 6: {
      const r = t, o = dy(r), a = py(r);
      return e.linked(qo(e, a), o ? qo(e, o) : void 0, e.type);
    }
    case 7:
      return kr(t, n);
    case 8:
      return kr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const vy = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function gy(e, t) {
  t && $h(e) && Rt(yo(vy, { source: e }));
}
const _y = (e) => e;
let Fr = ie();
function hy(e, t = {}) {
  let n = !1;
  const r = t.onError || kh;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...sy(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function yy(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && U(e)) {
    const n = ye(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && gy(e, n);
    const o = (t.onCacheKey || _y)(e), a = Fr[o];
    if (a)
      return a;
    const { ast: s, detectError: l } = hy(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), i = Po(s);
    return l ? i : Fr[o] = i;
  } else {
    if (process.env.NODE_ENV !== "production" && !vt(e))
      return Rt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = Fr[n];
      return r || (Fr[n] = Po(e));
    } else
      return Po(e);
  }
}
let vr = null;
function by(e) {
  vr = e;
}
function Ey(e, t, n) {
  vr && vr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Ty = /* @__PURE__ */ Oy("function:translate");
function Oy(e) {
  return (t) => vr && vr.emit(e, t);
}
const Fe = {
  INVALID_ARGUMENT: Dh,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, wy = 24;
function jt(e) {
  return Yn(e, null, process.env.NODE_ENV !== "production" ? { messages: Cy } : void 0);
}
const Cy = {
  [Fe.INVALID_ARGUMENT]: "Invalid arguments",
  [Fe.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Fe.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Fe.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Fe.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Fe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Fe.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Ua(e, t) {
  return t.locale != null ? vl(t.locale) : vl(e.locale);
}
let Ro;
function vl(e) {
  if (U(e))
    return e;
  if (ve(e)) {
    if (e.resolvedOnce && Ro != null)
      return Ro;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Lh(t))
        throw jt(Fe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ro = t;
    } else
      throw jt(Fe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw jt(Fe.NOT_SUPPORT_LOCALE_TYPE);
}
function Sy(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ee(t) ? t : re(t) ? Object.keys(t) : U(t) ? [t] : [n]
  ])];
}
function du(e, t, n) {
  const r = U(n) ? n : no, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; Ee(s); )
      s = gl(a, s, t);
    const l = Ee(t) || !ne(t) ? t : t.default ? t.default : null;
    s = U(l) ? [l] : l, Ee(s) && gl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function gl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ye(r); o++) {
    const a = t[o];
    U(a) && (r = Ny(e, t[o], n));
  }
  return r;
}
function Ny(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Ly(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Ly(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Ee(n) || ne(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const mn = [];
mn[
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
mn[
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
mn[
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
mn[
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
mn[
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
mn[
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
mn[
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
const Iy = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ay(e) {
  return Iy.test(e);
}
function Py(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ry(e) {
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
function Dy(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ay(t) ? Py(t) : "*" + t;
}
function My(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, l, i, u, f, p;
  const d = [];
  d[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = l : s += l;
  }, d[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, d[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    d[
      0
      /* Actions.APPEND */
    ](), o++;
  }, d[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, r = 4, d[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, s === void 0 || (s = Dy(s), s === !1))
        return !1;
      d[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function v() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"')
      return n++, l = "\\" + g, d[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && v())) {
      if (i = Ry(a), p = mn[r], u = p[i] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = d[u[1]], f && (l = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const _l = /* @__PURE__ */ new Map();
function ky(e, t) {
  return re(e) ? e[t] : null;
}
function Fy(e, t) {
  if (!re(e))
    return null;
  let n = _l.get(t);
  if (n || (n = My(t), n && _l.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (fu.includes(s) && vt(o))
      return null;
    const l = o[s];
    if (l === void 0 || ve(o))
      return null;
    o = l, a++;
  }
  return o;
}
const Ke = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, $y = 8, Uy = {
  [Ke.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ke.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ke.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ke.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ke.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ke.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Ke.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Cn(e, ...t) {
  return yo(Uy[e], ...t);
}
const xy = "11.2.2", Eo = -1, no = "en-US", ro = "", hl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Vy() {
  return {
    upper: (e, t) => t === "text" && U(e) ? e.toUpperCase() : t === "vnode" && re(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && U(e) ? e.toLowerCase() : t === "vnode" && re(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && U(e) ? hl(e) : t === "vnode" && re(e) && "__v_isVNode" in e ? hl(e.children) : e
  };
}
let pu;
function By(e) {
  pu = e;
}
let mu;
function Wy(e) {
  mu = e;
}
let vu;
function Hy(e) {
  vu = e;
}
let gu = null;
const jy = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  gu = e;
}, zy = /* @__NO_SIDE_EFFECTS__ */ () => gu;
let _u = null;
const yl = (e) => {
  _u = e;
}, Ky = () => _u;
let bl = 0;
function Gy(e = {}) {
  const t = ve(e.onWarn) ? e.onWarn : Rt, n = U(e.version) ? e.version : xy, r = U(e.locale) || ve(e.locale) ? e.locale : no, o = ve(r) ? no : r, a = Ee(e.fallbackLocale) || ne(e.fallbackLocale) || U(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = ne(e.messages) ? e.messages : Do(o), l = ne(e.datetimeFormats) ? e.datetimeFormats : Do(o), i = ne(e.numberFormats) ? e.numberFormats : Do(o), u = Pe(ie(), e.modifiers, Vy()), f = e.pluralRules || ie(), p = ve(e.missing) ? e.missing : null, d = ye(e.missingWarn) || to(e.missingWarn) ? e.missingWarn : !0, v = ye(e.fallbackWarn) || to(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, m = !!e.unresolving, T = ve(e.postTranslation) ? e.postTranslation : null, c = ne(e.processor) ? e.processor : null, h = ye(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter, b = ve(e.messageCompiler) ? e.messageCompiler : pu;
  process.env.NODE_ENV !== "production" && ve(e.messageCompiler) && bh(Cn(Ke.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const w = ve(e.messageResolver) ? e.messageResolver : mu || ky, S = ve(e.localeFallbacker) ? e.localeFallbacker : vu || Sy, E = re(e.fallbackContext) ? e.fallbackContext : void 0, R = e, D = re(R.__datetimeFormatters) ? R.__datetimeFormatters : /* @__PURE__ */ new Map(), B = re(R.__numberFormatters) ? R.__numberFormatters : /* @__PURE__ */ new Map(), X = re(R.__meta) ? R.__meta : {};
  bl++;
  const j = {
    version: n,
    cid: bl,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: f,
    missing: p,
    missingWarn: d,
    fallbackWarn: v,
    fallbackFormat: g,
    unresolving: m,
    postTranslation: T,
    processor: c,
    warnHtmlMessage: h,
    escapeParameter: C,
    messageCompiler: b,
    messageResolver: w,
    localeFallbacker: S,
    fallbackContext: E,
    onWarn: t,
    __meta: X
  };
  return j.datetimeFormats = l, j.numberFormats = i, j.__datetimeFormatters = D, j.__numberFormatters = B, process.env.NODE_ENV !== "production" && (j.__v_emitter = R.__v_emitter != null ? R.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Ey(j, n, X), j;
}
const Do = (e) => ({ [e]: ie() });
function To(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function hu(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function xa(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const l = e.__v_emitter;
    l && l.emit("missing", {
      locale: n,
      key: t,
      type: o,
      groupId: `${o}:${t}`
    });
  }
  if (a !== null) {
    const l = a(e, n, t, o);
    return U(l) ? l : t;
  } else
    return process.env.NODE_ENV !== "production" && hu(r, t) && s(Cn(Ke.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function er(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function yu(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Yy(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (yu(e, t[r]))
      return !0;
  return !1;
}
const El = typeof Intl < "u", bu = {
  dateTimeFormat: El && typeof Intl.DateTimeFormat < "u",
  numberFormat: El && typeof Intl.NumberFormat < "u"
};
function Tl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !bu.dateTimeFormat)
    return a(Cn(Ke.CANNOT_FORMAT_DATE)), ro;
  const [i, u, f, p] = Jo(...t), d = ye(f.missingWarn) ? f.missingWarn : e.missingWarn, v = ye(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, g = !!f.part, m = Ua(e, f), T = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    m
  );
  if (!U(i) || i === "")
    return new Intl.DateTimeFormat(m, p).format(u);
  let c = {}, h, C = null, b = m, w = null;
  const S = "datetime format";
  for (let D = 0; D < T.length; D++) {
    if (h = w = T[D], process.env.NODE_ENV !== "production" && m !== h && To(v, i) && a(Cn(Ke.FALLBACK_TO_DATE_FORMAT, {
      key: i,
      target: h
    })), process.env.NODE_ENV !== "production" && m !== h) {
      const B = e.__v_emitter;
      B && B.emit("fallback", {
        type: S,
        key: i,
        from: b,
        to: w,
        groupId: `${S}:${i}`
      });
    }
    if (c = n[h] || {}, C = c[i], ne(C))
      break;
    xa(e, i, h, d, S), b = w;
  }
  if (!ne(C) || !U(h))
    return r ? Eo : i;
  let E = `${h}__${i}`;
  bo(p) || (E = `${E}__${JSON.stringify(p)}`);
  let R = l.get(E);
  return R || (R = new Intl.DateTimeFormat(h, Pe({}, C, p)), l.set(E, R)), g ? R.formatToParts(u) : R.format(u);
}
const Eu = [
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
function Jo(...e) {
  const [t, n, r, o] = e, a = ie();
  let s = ie(), l;
  if (U(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw jt(Fe.INVALID_ISO_DATE_ARGUMENT);
    const u = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    l = new Date(u);
    try {
      l.toISOString();
    } catch {
      throw jt(Fe.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (wh(t)) {
    if (isNaN(t.getTime()))
      throw jt(Fe.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (Ie(t))
    l = t;
  else
    throw jt(Fe.INVALID_ARGUMENT);
  return U(n) ? a.key = n : ne(n) && Object.keys(n).forEach((i) => {
    Eu.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), U(r) ? a.locale = r : ne(r) && (s = r), ne(o) && (s = o), [a.key || "", l, a, s];
}
function Ol(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function wl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !bu.numberFormat)
    return a(Cn(Ke.CANNOT_FORMAT_NUMBER)), ro;
  const [i, u, f, p] = Zo(...t), d = ye(f.missingWarn) ? f.missingWarn : e.missingWarn, v = ye(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, g = !!f.part, m = Ua(e, f), T = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    m
  );
  if (!U(i) || i === "")
    return new Intl.NumberFormat(m, p).format(u);
  let c = {}, h, C = null, b = m, w = null;
  const S = "number format";
  for (let D = 0; D < T.length; D++) {
    if (h = w = T[D], process.env.NODE_ENV !== "production" && m !== h && To(v, i) && a(Cn(Ke.FALLBACK_TO_NUMBER_FORMAT, {
      key: i,
      target: h
    })), process.env.NODE_ENV !== "production" && m !== h) {
      const B = e.__v_emitter;
      B && B.emit("fallback", {
        type: S,
        key: i,
        from: b,
        to: w,
        groupId: `${S}:${i}`
      });
    }
    if (c = n[h] || {}, C = c[i], ne(C))
      break;
    xa(e, i, h, d, S), b = w;
  }
  if (!ne(C) || !U(h))
    return r ? Eo : i;
  let E = `${h}__${i}`;
  bo(p) || (E = `${E}__${JSON.stringify(p)}`);
  let R = l.get(E);
  return R || (R = new Intl.NumberFormat(h, Pe({}, C, p)), l.set(E, R)), g ? R.formatToParts(u) : R.format(u);
}
const Tu = [
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
function Zo(...e) {
  const [t, n, r, o] = e, a = ie();
  let s = ie();
  if (!Ie(t))
    throw jt(Fe.INVALID_ARGUMENT);
  const l = t;
  return U(n) ? a.key = n : ne(n) && Object.keys(n).forEach((i) => {
    Tu.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), U(r) ? a.locale = r : ne(r) && (s = r), ne(o) && (s = o), [a.key || "", l, a, s];
}
function Cl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Xy = (e) => e, qy = (e) => "", Jy = "text", Zy = (e) => e.length === 0 ? "" : ka(e), Qy = Ih;
function Sl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function eb(e) {
  const t = Ie(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ie(e.named.count) || Ie(e.named.n)) ? Ie(e.named.count) ? e.named.count : Ie(e.named.n) ? e.named.n : t : t;
}
function tb(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function nb(e = {}) {
  const t = e.locale, n = eb(e), r = re(e.pluralRules) && U(t) && ve(e.pluralRules[t]) ? e.pluralRules[t] : Sl, o = re(e.pluralRules) && U(t) && ve(e.pluralRules[t]) ? Sl : void 0, a = (c) => c[r(n, c.length, o)], s = e.list || [], l = (c) => s[c], i = e.named || ie();
  Ie(e.pluralIndex) && tb(n, i);
  const u = (c) => i[c];
  function f(c, h) {
    const C = ve(e.messages) ? e.messages(c, !!h) : re(e.messages) ? e.messages[c] : !1;
    return C || (e.parent ? e.parent.message(c) : qy);
  }
  const p = (c) => e.modifiers ? e.modifiers[c] : Xy, d = ne(e.processor) && ve(e.processor.normalize) ? e.processor.normalize : Zy, v = ne(e.processor) && ve(e.processor.interpolate) ? e.processor.interpolate : Qy, g = ne(e.processor) && U(e.processor.type) ? e.processor.type : Jy, T = {
    list: l,
    named: u,
    plural: a,
    linked: (c, ...h) => {
      const [C, b] = h;
      let w = "text", S = "";
      h.length === 1 ? re(C) ? (S = C.modifier || S, w = C.type || w) : U(C) && (S = C || S) : h.length === 2 && (U(C) && (S = C || S), U(b) && (w = b || w));
      const E = f(c, !0)(T), R = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        w === "vnode" && Ee(E) && S ? E[0] : E
      );
      return S ? p(S)(R, w) : R;
    },
    message: f,
    type: g,
    interpolate: v,
    normalize: d,
    values: Pe(ie(), s, i)
  };
  return T;
}
const Nl = () => "", tt = (e) => ve(e);
function Ll(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: l } = e, [i, u] = Qo(...t), f = ye(u.missingWarn) ? u.missingWarn : e.missingWarn, p = ye(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, d = ye(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, v = !!u.resolvedMessage, g = U(u.default) || ye(u.default) ? ye(u.default) ? a ? i : () => i : u.default : n ? a ? i : () => i : null, m = n || g != null && (U(g) || ve(g)), T = Ua(e, u);
  d && rb(u);
  let [c, h, C] = v ? [
    i,
    T,
    l[T] || ie()
  ] : Ou(e, i, T, s, p, f), b = c, w = i;
  if (!v && !(U(b) || vt(b) || tt(b)) && m && (b = g, w = b), !v && (!(U(b) || vt(b) || tt(b)) || !U(h)))
    return o ? Eo : i;
  if (process.env.NODE_ENV !== "production" && U(b) && e.messageCompiler == null)
    return Rt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${i}'.`), i;
  let S = !1;
  const E = () => {
    S = !0;
  }, R = tt(b) ? b : wu(e, i, h, b, w, E);
  if (S)
    return b;
  const D = lb(e, h, C, u), B = nb(D), X = ob(e, R, B);
  let j = r ? r(X, i) : X;
  if (d && U(j) && (j = Sh(j)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Q = {
      timestamp: Date.now(),
      key: U(i) ? i : tt(b) ? b.key : "",
      locale: h || (tt(b) ? b.locale : ""),
      format: U(b) ? b : tt(b) ? b.source : "",
      message: j
    };
    Q.meta = Pe({}, e.__meta, /* @__PURE__ */ zy() || {}), Ty(Q);
  }
  return j;
}
function rb(e) {
  Ee(e.list) ? e.list = e.list.map((t) => U(t) ? il(t) : t) : re(e.named) && Object.keys(e.named).forEach((t) => {
    U(e.named[t]) && (e.named[t] = il(e.named[t]));
  });
}
function Ou(e, t, n, r, o, a) {
  const { messages: s, onWarn: l, messageResolver: i, localeFallbacker: u } = e, f = u(e, r, n);
  let p = ie(), d, v = null, g = n, m = null;
  const T = "translate";
  for (let c = 0; c < f.length; c++) {
    if (d = m = f[c], process.env.NODE_ENV !== "production" && n !== d && !yu(n, d) && To(o, t) && l(Cn(Ke.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: d
    })), process.env.NODE_ENV !== "production" && n !== d) {
      const w = e.__v_emitter;
      w && w.emit("fallback", {
        type: T,
        key: t,
        from: g,
        to: m,
        groupId: `${T}:${t}`
      });
    }
    p = s[d] || ie();
    let h = null, C, b;
    if (process.env.NODE_ENV !== "production" && Xt && (h = window.performance.now(), C = "intlify-message-resolve-start", b = "intlify-message-resolve-end", Ze && Ze(C)), (v = i(p, t)) === null && (v = p[t]), process.env.NODE_ENV !== "production" && Xt) {
      const w = window.performance.now(), S = e.__v_emitter;
      S && h && v && S.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: v,
        time: w - h,
        groupId: `${T}:${t}`
      }), C && b && Ze && wn && (Ze(b), wn("intlify message resolve", C, b));
    }
    if (U(v) || vt(v) || tt(v))
      break;
    if (!Yy(d, f)) {
      const w = xa(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        d,
        a,
        T
      );
      w !== t && (v = w);
    }
    g = m;
  }
  return [v, d, p];
}
function wu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: l } = e;
  if (tt(r)) {
    const d = r;
    return d.locale = d.locale || n, d.key = d.key || t, d;
  }
  if (s == null) {
    const d = () => r;
    return d.locale = n, d.key = t, d;
  }
  let i = null, u, f;
  process.env.NODE_ENV !== "production" && Xt && (i = window.performance.now(), u = "intlify-message-compilation-start", f = "intlify-message-compilation-end", Ze && Ze(u));
  const p = s(r, ab(e, n, o, r, l, a));
  if (process.env.NODE_ENV !== "production" && Xt) {
    const d = window.performance.now(), v = e.__v_emitter;
    v && i && v.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: d - i,
      groupId: `translate:${t}`
    }), u && f && Ze && wn && (Ze(f), wn("intlify message compilation", u, f));
  }
  return p.locale = n, p.key = t, p.source = r, p;
}
function ob(e, t, n) {
  let r = null, o, a;
  process.env.NODE_ENV !== "production" && Xt && (r = window.performance.now(), o = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", Ze && Ze(o));
  const s = t(n);
  if (process.env.NODE_ENV !== "production" && Xt) {
    const l = window.performance.now(), i = e.__v_emitter;
    i && r && i.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: l - r,
      groupId: `translate:${t.key}`
    }), o && a && Ze && wn && (Ze(a), wn("intlify message evaluation", o, a));
  }
  return s;
}
function Qo(...e) {
  const [t, n, r] = e, o = ie();
  if (!U(t) && !Ie(t) && !tt(t) && !vt(t))
    throw jt(Fe.INVALID_ARGUMENT);
  const a = Ie(t) ? String(t) : (tt(t), t);
  return Ie(n) ? o.plural = n : U(n) ? o.default = n : ne(n) && !bo(n) ? o.named = n : Ee(n) && (o.list = n), Ie(r) ? o.plural = r : U(r) ? o.default = r : ne(r) && Pe(o, r), [a, o];
}
function ab(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      if (a && a(s), process.env.NODE_ENV !== "production") {
        const l = sb(r), i = `Message compilation error: ${s.message}`, u = s.location && l && Ah(l, s.location.start.offset, s.location.end.offset), f = e.__v_emitter;
        f && l && f.emit("compile-error", {
          message: l,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(u ? `${i}
${u}` : i);
      } else
        throw s;
    },
    onCacheKey: (s) => Th(t, n, s)
  };
}
function sb(e) {
  if (U(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function lb(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: l, fallbackWarn: i, missingWarn: u, fallbackContext: f } = e, d = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (v, g) => {
      let m = s(n, v);
      if (m == null && (f || g)) {
        const [, , T] = Ou(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          v,
          t,
          l,
          i,
          u
        );
        m = s(T, v);
      }
      if (U(m) || vt(m)) {
        let T = !1;
        const h = wu(e, v, t, m, v, () => {
          T = !0;
        });
        return T ? Nl : h;
      } else return tt(m) ? m : Nl;
    }
  };
  return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), Ie(r.plural) && (d.pluralIndex = r.plural), d;
}
ly();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const ib = "11.2.2";
function ub() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (hn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (hn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (hn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (hn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Re = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: wy,
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
function gr(e, ...t) {
  return Yn(e, null, process.env.NODE_ENV !== "production" ? { messages: cb, args: t } : void 0);
}
const cb = {
  [Re.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Re.INVALID_ARGUMENT]: "Invalid argument",
  [Re.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Re.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Re.UNEXPECTED_ERROR]: "Unexpected error",
  [Re.REQUIRED_VALUE]: "Required in value: {0}",
  [Re.INVALID_VALUE]: "Invalid value",
  [Re.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Re.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Re.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Re.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, ea = /* @__PURE__ */ Zt("__translateVNode"), ta = /* @__PURE__ */ Zt("__datetimeParts"), na = /* @__PURE__ */ Zt("__numberParts"), ra = /* @__PURE__ */ Zt("__enableEmitter"), oa = /* @__PURE__ */ Zt("__disableEmitter"), fb = Zt("__setPluralRules"), Cu = /* @__PURE__ */ Zt("__injectWithOption"), aa = /* @__PURE__ */ Zt("__dispose"), Ct = {
  FALLBACK_TO_ROOT: $y,
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
}, db = {
  [Ct.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Ct.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Ct.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [Ct.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [Ct.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [Ct.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function oo(e, ...t) {
  return yo(db[e], ...t);
}
function _r(e) {
  if (!re(e) || vt(e))
    return e;
  for (const t in e)
    if (mt(e, t))
      if (!t.includes("."))
        re(e[t]) && _r(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = ie()), !re(o[n[s]])) {
            process.env.NODE_ENV !== "production" && Rt(oo(Ct.IGNORE_OBJ_FLATTEN, {
              key: n[s]
            })), a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (vt(o) ? fu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !vt(o)) {
          const s = o[n[r]];
          re(s) && _r(s);
        }
      }
  return e;
}
function Su(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = ne(n) ? n : Ee(r) ? ie() : { [e]: ie() };
  if (Ee(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: i, resource: u } = l;
      i ? (s[i] = s[i] || ie(), Vr(u, s[i])) : Vr(u, s);
    } else
      U(l) && Vr(JSON.parse(l), s);
  }), o == null && a)
    for (const l in s)
      mt(s, l) && _r(s[l]);
  return s;
}
function Nu(e) {
  return e.type;
}
function pb(e, t, n) {
  let r = re(t.messages) ? t.messages : ie();
  "__i18nGlobal" in n && (r = Su(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (re(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (re(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Il(e) {
  return _e($l, null, e, 0);
}
function Va() {
  return "currentInstance" in Xa ? Xa["currentInstance"] : We();
}
const Al = "__INTLIFY_META__", Pl = () => [], mb = () => !1;
let Rl = 0;
function Dl(e) {
  return (t, n, r, o) => e(n, r, Va() || void 0, o);
}
const vb = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Va();
  let t = null;
  return e && (t = Nu(e)[Al]) ? { [Al]: t } : null;
};
function gb(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Xt ? F : hr;
  let s = ye(e.inheritLocale) ? e.inheritLocale : !0;
  const l = a(
    // prettier-ignore
    t && s ? t.locale.value : U(e.locale) ? e.locale : no
  ), i = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : U(e.fallbackLocale) || Ee(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), u = a(Su(l.value, e)), f = a(ne(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), p = a(ne(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let d = t ? t.missingWarn : ye(e.missingWarn) || to(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : ye(e.fallbackWarn) || to(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : ye(e.fallbackRoot) ? e.fallbackRoot : !0, m = !!e.fallbackFormat, T = ve(e.missing) ? e.missing : null, c = ve(e.missing) ? Dl(e.missing) : null, h = ve(e.postTranslation) ? e.postTranslation : null, C = t ? t.warnHtmlMessage : ye(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter;
  const w = t ? t.modifiers : ne(e.modifiers) ? e.modifiers : {};
  let S = e.pluralRules || t && t.pluralRules, E;
  E = (() => {
    r && yl(null);
    const L = {
      version: ib,
      locale: l.value,
      fallbackLocale: i.value,
      messages: u.value,
      modifiers: w,
      pluralRules: S,
      missing: c === null ? void 0 : c,
      missingWarn: d,
      fallbackWarn: v,
      fallbackFormat: m,
      unresolving: !0,
      postTranslation: h === null ? void 0 : h,
      warnHtmlMessage: C,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    L.datetimeFormats = f.value, L.numberFormats = p.value, L.__datetimeFormatters = ne(E) ? E.__datetimeFormatters : void 0, L.__numberFormatters = ne(E) ? E.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (L.__v_emitter = ne(E) ? E.__v_emitter : void 0);
    const P = Gy(L);
    return r && yl(P), P;
  })(), er(E, l.value, i.value);
  function D() {
    return [
      l.value,
      i.value,
      u.value,
      f.value,
      p.value
    ];
  }
  const B = I({
    get: () => l.value,
    set: (L) => {
      E.locale = L, l.value = L;
    }
  }), X = I({
    get: () => i.value,
    set: (L) => {
      E.fallbackLocale = L, i.value = L, er(E, l.value, L);
    }
  }), j = I(() => u.value), Q = /* @__PURE__ */ I(() => f.value), Le = /* @__PURE__ */ I(() => p.value);
  function me() {
    return ve(h) ? h : null;
  }
  function oe(L) {
    h = L, E.postTranslation = L;
  }
  function x() {
    return T;
  }
  function ge(L) {
    L !== null && (c = Dl(L)), T = L, E.missing = c;
  }
  function we(L, P) {
    return L !== "translate" || !P.resolvedMessage;
  }
  const Ce = (L, P, Z, ce, Et, Tt) => {
    D();
    let nn;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = t ? Ky() : void 0), nn = L(E);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = void 0);
    }
    if (Z !== "translate exists" && // for not `te` (e.g `t`)
    Ie(nn) && nn === Eo || Z === "translate exists" && !nn) {
      const [$t, Oo] = P();
      if (process.env.NODE_ENV !== "production" && t && U($t) && we(Z, Oo) && (g && (To(v, $t) || hu(d, $t)) && Rt(oo(Ct.FALLBACK_TO_ROOT, {
        key: $t,
        type: Z
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Xn } = E;
        Xn && g && Xn.emit("fallback", {
          type: Z,
          key: $t,
          to: "global",
          groupId: `${Z}:${$t}`
        });
      }
      return t && g ? ce(t) : Et($t);
    } else {
      if (Tt(nn))
        return nn;
      throw gr(Re.UNEXPECTED_RETURN_TYPE);
    }
  };
  function it(...L) {
    return Ce((P) => Reflect.apply(Ll, null, [P, ...L]), () => Qo(...L), "translate", (P) => Reflect.apply(P.t, P, [...L]), (P) => P, (P) => U(P));
  }
  function et(...L) {
    const [P, Z, ce] = L;
    if (ce && !re(ce))
      throw gr(Re.INVALID_ARGUMENT);
    return it(P, Z, Pe({ resolvedMessage: !0 }, ce || {}));
  }
  function _t(...L) {
    return Ce((P) => Reflect.apply(Tl, null, [P, ...L]), () => Jo(...L), "datetime format", (P) => Reflect.apply(P.d, P, [...L]), () => ro, (P) => U(P) || Ee(P));
  }
  function qe(...L) {
    return Ce((P) => Reflect.apply(wl, null, [P, ...L]), () => Zo(...L), "number format", (P) => Reflect.apply(P.n, P, [...L]), () => ro, (P) => U(P) || Ee(P));
  }
  function xe(L) {
    return L.map((P) => U(P) || Ie(P) || ye(P) ? Il(String(P)) : P);
  }
  const Ve = {
    normalize: xe,
    interpolate: (L) => L,
    type: "vnode"
  };
  function fe(...L) {
    return Ce((P) => {
      let Z;
      const ce = P;
      try {
        ce.processor = Ve, Z = Reflect.apply(Ll, null, [ce, ...L]);
      } finally {
        ce.processor = null;
      }
      return Z;
    }, () => Qo(...L), "translate", (P) => P[ea](...L), (P) => [Il(P)], (P) => Ee(P));
  }
  function vn(...L) {
    return Ce((P) => Reflect.apply(wl, null, [P, ...L]), () => Zo(...L), "number format", (P) => P[na](...L), Pl, (P) => U(P) || Ee(P));
  }
  function Qt(...L) {
    return Ce((P) => Reflect.apply(Tl, null, [P, ...L]), () => Jo(...L), "datetime format", (P) => P[ta](...L), Pl, (P) => U(P) || Ee(P));
  }
  function ht(L) {
    S = L, E.pluralRules = S;
  }
  function en(L, P) {
    return Ce(() => {
      if (!L)
        return !1;
      const Z = U(P) ? P : l.value, ce = ut(Z), Et = E.messageResolver(ce, L);
      return vt(Et) || tt(Et) || U(Et);
    }, () => [L], "translate exists", (Z) => Reflect.apply(Z.te, Z, [L, P]), mb, (Z) => ye(Z));
  }
  function yt(L) {
    let P = null;
    const Z = du(E, i.value, l.value);
    for (let ce = 0; ce < Z.length; ce++) {
      const Et = u.value[Z[ce]] || {}, Tt = E.messageResolver(Et, L);
      if (Tt != null) {
        P = Tt;
        break;
      }
    }
    return P;
  }
  function Ft(L) {
    const P = yt(L);
    return P ?? (t ? t.tm(L) || {} : {});
  }
  function ut(L) {
    return u.value[L] || {};
  }
  function bt(L, P) {
    if (o) {
      const Z = { [L]: P };
      for (const ce in Z)
        mt(Z, ce) && _r(Z[ce]);
      P = Z[L];
    }
    u.value[L] = P, E.messages = u.value;
  }
  function tn(L, P) {
    u.value[L] = u.value[L] || {};
    const Z = { [L]: P };
    if (o)
      for (const ce in Z)
        mt(Z, ce) && _r(Z[ce]);
    P = Z[L], Vr(P, u.value[L]), E.messages = u.value;
  }
  function _(L) {
    return f.value[L] || {};
  }
  function y(L, P) {
    f.value[L] = P, E.datetimeFormats = f.value, Ol(E, L, P);
  }
  function A(L, P) {
    f.value[L] = Pe(f.value[L] || {}, P), E.datetimeFormats = f.value, Ol(E, L, P);
  }
  function $(L) {
    return p.value[L] || {};
  }
  function se(L, P) {
    p.value[L] = P, E.numberFormats = p.value, Cl(E, L, P);
  }
  function de(L, P) {
    p.value[L] = Pe(p.value[L] || {}, P), E.numberFormats = p.value, Cl(E, L, P);
  }
  Rl++, t && Xt && (q(t.locale, (L) => {
    s && (l.value = L, E.locale = L, er(E, l.value, i.value));
  }), q(t.fallbackLocale, (L) => {
    s && (i.value = L, E.fallbackLocale = L, er(E, l.value, i.value));
  }));
  const J = {
    id: Rl,
    locale: B,
    fallbackLocale: X,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(L) {
      s = L, L && t && (l.value = t.locale.value, i.value = t.fallbackLocale.value, er(E, l.value, i.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: j,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return S || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(L) {
      d = L, E.missingWarn = d;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(L) {
      v = L, E.fallbackWarn = v;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(L) {
      g = L;
    },
    get fallbackFormat() {
      return m;
    },
    set fallbackFormat(L) {
      m = L, E.fallbackFormat = m;
    },
    get warnHtmlMessage() {
      return C;
    },
    set warnHtmlMessage(L) {
      C = L, E.warnHtmlMessage = L;
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(L) {
      b = L, E.escapeParameter = L;
    },
    t: it,
    getLocaleMessage: ut,
    setLocaleMessage: bt,
    mergeLocaleMessage: tn,
    getPostTranslationHandler: me,
    setPostTranslationHandler: oe,
    getMissingHandler: x,
    setMissingHandler: ge,
    [fb]: ht
  };
  return J.datetimeFormats = Q, J.numberFormats = Le, J.rt = et, J.te = en, J.tm = Ft, J.d = _t, J.n = qe, J.getDateTimeFormat = _, J.setDateTimeFormat = y, J.mergeDateTimeFormat = A, J.getNumberFormat = $, J.setNumberFormat = se, J.mergeNumberFormat = de, J[Cu] = n, J[ea] = fe, J[ta] = Qt, J[na] = vn, process.env.NODE_ENV !== "production" && (J[ra] = (L) => {
    E.__v_emitter = L;
  }, J[oa] = () => {
    E.__v_emitter = void 0;
  }), J;
}
function Ml(e, t) {
}
const Ba = {
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
function _b({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === un ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, ie());
}
function Lu() {
  return un;
}
Pe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ie(e) || !isNaN(e)
  }
}, Ba);
function hb(e) {
  return Ee(e) && !U(e[0]);
}
function Iu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let l = ie();
    e.locale && (s.locale = e.locale), U(e.format) ? s.key = e.format : re(e.format) && (U(e.format.key) && (s.key = e.format.key), l = Object.keys(e.format).reduce((d, v) => n.includes(v) ? Pe(ie(), d, { [v]: e.format[v] }) : d, ie()));
    const i = r(e.value, s, l);
    let u = [s.key];
    Ee(i) ? u = i.map((d, v) => {
      const g = o[d.type], m = g ? g({ [d.type]: d.value, index: v, parts: i }) : [d.value];
      return hb(m) && (m[0].key = `${d.type}-${v}`), m;
    }) : U(i) && (u = [i]);
    const f = Pe(ie(), a), p = U(e.tag) || re(e.tag) ? e.tag : Lu();
    return Ul(p, f, u);
  };
}
Pe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ba);
const yb = /* @__PURE__ */ Zt("global-vue-i18n");
function Wa(e = {}) {
  const t = Va();
  if (t == null)
    throw gr(Re.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw gr(Re.NOT_INSTALLED);
  const n = bb(t), r = Tb(n), o = Nu(t), a = Eb(e, o);
  if (a === "global")
    return pb(r, e, o), r;
  if (a === "parent") {
    let i = Ob(n, t, e.__useComponent);
    return i == null && (process.env.NODE_ENV !== "production" && Rt(oo(Ct.NOT_FOUND_PARENT_SCOPE)), i = r), i;
  }
  const s = n;
  let l = s.__getInstance(t);
  if (l == null) {
    const i = Pe({}, e);
    "__i18n" in o && (i.__i18n = o.__i18n), r && (i.__root = r), l = gb(i), s.__composerExtend && (l[aa] = s.__composerExtend(l)), Cb(s, t, l), s.__setInstance(t, l);
  } else
    process.env.NODE_ENV !== "production" && a === "local" && Rt(oo(Ct.DUPLICATE_USE_I18N_CALLING));
  return l;
}
function bb(e) {
  const t = ue(e.isCE ? yb : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw gr(e.isCE ? Re.NOT_INSTALLED_WITH_PROVIDE : Re.UNEXPECTED_ERROR);
  return t;
}
function Eb(e, t) {
  return bo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Tb(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Ob(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = wb(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = s.__getInstance(a);
      l != null && (r = l.__composer, n && r && !r[Cu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function wb(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Cb(e, t, n) {
  let r = null;
  De(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = n, r = Ph();
      const o = n;
      o[ra] && o[ra](r), r.on("*", Ml);
    }
  }, t), Fl(() => {
    const o = n;
    process.env.NODE_ENV !== "production" && (r && r.off("*", Ml), o[oa] && o[oa](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const a = o[aa];
    a && (a(), delete o[aa]);
  }, t);
}
Pe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ba);
ub();
By(yy);
Wy(Fy);
Hy(du);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = hn();
  e.__INTLIFY__ = !0, by(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const be = {
  info: (e, t, ...n) => {
    Ne("frontend_log", {
      level: "info",
      message: e,
      data: t === void 0 ? null : Br(t)
    }).catch(() => {
    });
  },
  error: (e, t) => {
    Ne("frontend_log", {
      level: "error",
      message: e,
      data: t === void 0 ? null : Br(t)
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    Ne("frontend_log", {
      level: "warn",
      message: e,
      data: t === void 0 ? null : Br(t)
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
}, DE = {
  log: (e, t) => {
    Ne("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : Br(t)
    }).catch(() => {
    });
  }
};
function Br(e) {
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
const ME = "https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/docs/plugin-marketplace/marketplace.json";
async function kE() {
  return await Ne("get_plugin_states");
}
async function FE() {
  return await Ne("get_installed_plugin_manifests");
}
async function $E(e, t = !1) {
  return await Ne("install_local_plugin_package", {
    sourcePath: e,
    overwrite: t
  });
}
async function UE(e, t = !1, n, r) {
  return await Ne("install_plugin_package_from_url", {
    expectedSizeBytes: r,
    packageUrl: e,
    packageSubdir: n,
    overwrite: t
  });
}
async function xE(e) {
  return await Ne("fetch_plugin_marketplace", {
    marketplaceUrl: e
  });
}
async function VE(e) {
  await Ne("uninstall_local_plugin_package", { pluginId: e });
}
async function BE(e, t) {
  await Ne("set_plugin_enabled", { pluginId: e, enabled: t });
}
async function WE() {
  return await Ne("get_rapidocr_resource_status");
}
async function Sb(e, t) {
  return await Ne("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
async function HE() {
  await Ne("install_translation_offline_runtime_resources");
}
const Nb = "resources/transformers/transformers.min.js", Lb = ["translation-offline-runtime", "translation"], Ib = "https://huggingface.co/", Ab = "{model}/resolve/{revision}/", Pb = "/__snippets_code_disabled_transformers_local_models__/", Rb = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let tr = null;
const Db = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e;
  return n.slice(0, n.lastIndexOf("/") + 1);
}, Mb = (e) => {
  const t = Db(e);
  return Object.fromEntries(
    Rb.map((n) => [n, `${t}${n}`])
  );
}, Au = (e, t) => {
  var n, r;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = Ib, e.remotePathTemplate = Ab, e.allowLocalModels = !1, e.localModelPath = Pb, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (r = e.backends.onnx).wasm ?? (r.wasm = {}), e.backends.onnx.wasm.wasmPaths = Mb(t), e.backends.onnx.wasm.numThreads = 1);
};
async function kb() {
  return tr || (tr = (async () => {
    for (const e of Lb) {
      const t = await Sb(e, Nb);
      if (!t) continue;
      const n = hh(t), r = await import(
        /* @vite-ignore */
        n
      );
      return Au(r.env, n), be.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
        wasmPaths: r.env.backends?.onnx?.wasm?.wasmPaths,
        numThreads: r.env.backends?.onnx?.wasm?.numThreads,
        remoteHost: r.env.remoteHost,
        remotePathTemplate: r.env.remotePathTemplate,
        allowLocalModels: r.env.allowLocalModels,
        localModelPath: r.env.localModelPath
      }), r;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw tr = null, e;
  }), tr);
}
let zt = null, sr = !1, Mn = null, bn = null, sa = null;
const Fb = "Xenova/opus-mt-en-zh", $b = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Ub = 3e5;
function xb(e) {
  sa = e;
}
function Vb() {
  return $b;
}
function Bb(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (r, o) => setTimeout(() => o(new Error(n)), t)
    )
  ]);
}
async function Pu() {
  return zt || Mn || (sr = !0, be.info("[离线翻译] 正在加载翻译模型..."), Mn = (async () => {
    try {
      const { pipeline: e, env: t } = await kb();
      Au(t);
      let n = "";
      const r = e("translation", Fb, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (a) => {
          a.status === "done" && a.file && a.file !== n && (n = a.file, be.info(`[离线翻译] 已加载: ${a.file}`)), sa && sa({
            status: a.status,
            progress: a.progress,
            file: a.file
          });
        }
      });
      return zt = await Bb(
        r,
        Ub,
        "模型加载超时，请检查网络连接后重试"
      ), be.info("[离线翻译] 翻译模型加载完成"), sr = !1, zt;
    } catch (e) {
      throw sr = !1, Mn = null, be.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Mn);
}
async function Wb(e) {
  if (!e?.trim()) return e;
  bn = new AbortController();
  const t = bn.signal;
  try {
    const n = await Pu();
    if (t.aborted)
      throw new Error("翻译已取消");
    const r = e.split(`
`), o = [];
    for (const a of r) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const s = a.trim();
      if (!s) {
        o.push("");
        continue;
      }
      const l = await n(s);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(l) && l.length > 0) {
        const i = l[0].translation_text || s;
        o.push(i);
      } else
        o.push(s);
    }
    return o.join(`
`);
  } catch (n) {
    throw n instanceof Error && n.message === "翻译已取消" ? (be.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (be.warn("[离线翻译] 运行时资源未安装"), n) : (be.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    bn = null;
  }
}
function Hb() {
  bn && (bn.abort(), bn = null, be.info("[离线翻译] 已发送取消信号"));
}
function jb() {
  return bn !== null;
}
async function zb() {
  await Pu();
}
function Kb() {
  return zt !== null;
}
function Gb() {
  return sr;
}
async function Ru() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      be.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const o = await (await caches.open(n)).keys();
          if (be.info(`[离线翻译] Cache "${n}" 包含 ${o.length} 个文件`), o.some(
            (s) => s.url.includes("opus-mt-en-zh") || s.url.includes("Xenova")
          )) {
            const s = o.some((l) => l.url.includes(".onnx"));
            if (be.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${s}`), s)
              return {
                isCached: !0,
                cacheType: "cache-storage",
                cacheName: n,
                estimatedSize: "~300MB"
              };
          }
        }
    }
    const e = await indexedDB.databases();
    be.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return be.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return be.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return be.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function Yb() {
  return (await Ru()).isCached;
}
function Xb() {
  return zt !== null;
}
async function qb() {
  if (zt)
    try {
      await zt.dispose?.();
    } catch {
    }
  zt = null, Mn = null, sr = !1, be.info("[离线翻译] 翻译器已释放");
}
async function Jb() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), be.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), be.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    be.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw be.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const jE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: Xb,
  cancelOfflineTranslation: Hb,
  clearModelCache: Jb,
  disposeOfflineTranslator: qb,
  getModelCacheInfo: Ru,
  getModelFiles: Vb,
  isModelCached: Yb,
  isOfflineTranslatorInitializing: Gb,
  isOfflineTranslatorReady: Kb,
  isTranslationInProgress: jb,
  setProgressCallback: xb,
  translateOffline: Wb,
  warmupOfflineTranslator: zb
}, Symbol.toStringTag, { value: "Module" })), zE = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
export {
  kv as $,
  Sb as A,
  BE as B,
  VE as C,
  UE as D,
  CE as E,
  $E as F,
  FE as G,
  kE as H,
  Ru as I,
  Kb as J,
  Gb as K,
  xE as L,
  ME as M,
  HE as N,
  zb as O,
  qb as P,
  Jb as Q,
  Vb as R,
  xb as S,
  _a as T,
  Pn as U,
  rE as V,
  bi as W,
  po as X,
  pi as Y,
  ci as Z,
  Oe as _,
  kn as a,
  Bt as a$,
  at as a0,
  Ni as a1,
  TE as a2,
  tv as a3,
  hE as a4,
  fE as a5,
  bE as a6,
  Fm as a7,
  DE as a8,
  Qb as a9,
  al as aA,
  cn as aB,
  uf as aC,
  df as aD,
  _f as aE,
  ed as aF,
  vf as aG,
  td as aH,
  ql as aI,
  Mt as aJ,
  Qd as aK,
  qd as aL,
  Jl as aM,
  gs as aN,
  At as aO,
  Un as aP,
  an as aQ,
  qf as aR,
  ss as aS,
  Fo as aT,
  Kt as aU,
  cs as aV,
  gt as aW,
  Kr as aX,
  di as aY,
  sn as aZ,
  ha as a_,
  wE as aa,
  gi as ab,
  go as ac,
  $v as ad,
  Km as ae,
  rr as af,
  mE as ag,
  dE as ah,
  Om as ai,
  Ht as aj,
  St as ak,
  em as al,
  lE as am,
  Qv as an,
  Bd as ao,
  oE as ap,
  A0 as aq,
  vE as ar,
  uE as as,
  cE as at,
  gE as au,
  Pa as av,
  NE as aw,
  LE as ax,
  IE as ay,
  PE as az,
  he as b,
  Zr as b0,
  mo as b1,
  eE as b2,
  fr as b3,
  nE as b4,
  Fv as b5,
  tE as b6,
  Vt as b7,
  Be as b8,
  qr as b9,
  Ra as ba,
  eg as bb,
  Yi as bc,
  ug as bd,
  OE as be,
  vg as bf,
  bv as bg,
  Iv as bh,
  Te as bi,
  aE as bj,
  iE as bk,
  sE as bl,
  ii as bm,
  _i as bn,
  $r as bo,
  nm as bp,
  ri as bq,
  Sg as br,
  u0 as bs,
  Rv as bt,
  Vo as bu,
  Pv as bv,
  EE as bw,
  _E as bx,
  xv as by,
  jE as bz,
  Oi as c,
  G as d,
  Wa as e,
  Ne as f,
  h0 as g,
  yh as h,
  $e as i,
  SE as j,
  zE as k,
  be as l,
  RE as m,
  Lv as n,
  iv as o,
  yE as p,
  wi as q,
  pE as r,
  Xr as s,
  Wb as t,
  Ue as u,
  Tn as v,
  fn as w,
  AE as x,
  hh as y,
  WE as z
};
