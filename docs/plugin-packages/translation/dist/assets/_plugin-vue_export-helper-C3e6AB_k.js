import { g as Be, K as ue, r as F, a as L, l as T, i as St, s as gr, L as Pl, M as ra, O as xu, P as Wu, o as Re, n as We, w as Z, G as Hu, B as Tt, Q as ja, R as ju, H as Le, S as It, N as $r, d as H, e as z, f as k, m as te, x as Qr, j as K, t as sn, E as Rl, T as Rt, p as ae, q as ee, U as tt, k as x, A as Ke, V as zt, W as Kn, c as _e, F as un, X as Fn, Y as Ku, Z as zu, h as le, v as kn, _ as Gu, $ as Dl, a0 as Yu, a1 as wt, a2 as Xu, a3 as qu, a4 as Ju, z as He, J as Ao, y as xe, a5 as Zu, a6 as oa, a7 as Qu, a8 as gn, a9 as ec, C as Ka, aa as qn, ab as tc, ac as nc, ad as rc, ae as sr, af as Ur, ag as za, ah as Ml } from "./runtime-entry-BYS4P8M5.js";
const kl = Symbol(), Dr = "el", oc = "is-", _n = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Fl = Symbol("namespaceContextKey"), aa = (e) => {
  const t = e || (Be() ? ue(Fl, F(Dr)) : F(Dr));
  return L(() => T(t) || Dr);
}, $e = (e, t) => {
  const n = aa(t);
  return {
    namespace: n,
    b: (m = "") => _n(n.value, e, m, "", ""),
    e: (m) => m ? _n(n.value, e, "", m, "") : "",
    m: (m) => m ? _n(n.value, e, "", "", m) : "",
    be: (m, O) => m && O ? _n(n.value, e, m, O, "") : "",
    em: (m, O) => m && O ? _n(n.value, e, "", m, O) : "",
    bm: (m, O) => m && O ? _n(n.value, e, m, "", O) : "",
    bem: (m, O, c) => m && O && c ? _n(n.value, e, m, O, c) : "",
    is: (m, ...O) => {
      const c = O.length >= 1 ? O[0] : !0;
      return m && c ? `${oc}${m}` : "";
    },
    cssVar: (m) => {
      const O = {};
      for (const c in m)
        m[c] && (O[`--${n.value}-${c}`] = m[c]);
      return O;
    },
    cssVarName: (m) => `--${n.value}-${m}`,
    cssVarBlock: (m) => {
      const O = {};
      for (const c in m)
        m[c] && (O[`--${n.value}-${e}-${c}`] = m[c]);
      return O;
    },
    cssVarBlockName: (m) => `--${n.value}-${e}-${m}`
  };
};
var $l = typeof global == "object" && global && global.Object === Object && global, ac = typeof self == "object" && self && self.Object === Object && self, Dt = $l || ac || Function("return this")(), Lt = Dt.Symbol, Ul = Object.prototype, sc = Ul.hasOwnProperty, lc = Ul.toString, Jn = Lt ? Lt.toStringTag : void 0;
function ic(e) {
  var t = sc.call(e, Jn), n = e[Jn];
  try {
    e[Jn] = void 0;
    var r = !0;
  } catch {
  }
  var o = lc.call(e);
  return r && (t ? e[Jn] = n : delete e[Jn]), o;
}
var uc = Object.prototype, cc = uc.toString;
function fc(e) {
  return cc.call(e);
}
var dc = "[object Null]", pc = "[object Undefined]", Ga = Lt ? Lt.toStringTag : void 0;
function zn(e) {
  return e == null ? e === void 0 ? pc : dc : Ga && Ga in Object(e) ? ic(e) : fc(e);
}
function $n(e) {
  return e != null && typeof e == "object";
}
var mc = "[object Symbol]";
function eo(e) {
  return typeof e == "symbol" || $n(e) && zn(e) == mc;
}
function vc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var dt = Array.isArray, Ya = Lt ? Lt.prototype : void 0, Xa = Ya ? Ya.toString : void 0;
function Vl(e) {
  if (typeof e == "string")
    return e;
  if (dt(e))
    return vc(e, Vl) + "";
  if (eo(e))
    return Xa ? Xa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var gc = /\s/;
function _c(e) {
  for (var t = e.length; t-- && gc.test(e.charAt(t)); )
    ;
  return t;
}
var hc = /^\s+/;
function yc(e) {
  return e && e.slice(0, _c(e) + 1).replace(hc, "");
}
function cn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qa = NaN, bc = /^[-+]0x[0-9a-f]+$/i, Ec = /^0b[01]+$/i, Oc = /^0o[0-7]+$/i, Tc = parseInt;
function Ja(e) {
  if (typeof e == "number")
    return e;
  if (eo(e))
    return qa;
  if (cn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = cn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = yc(e);
  var n = Ec.test(e);
  return n || Oc.test(e) ? Tc(e.slice(2), n ? 2 : 8) : bc.test(e) ? qa : +e;
}
function Bl(e) {
  return e;
}
var wc = "[object AsyncFunction]", Cc = "[object Function]", Nc = "[object GeneratorFunction]", Sc = "[object Proxy]";
function xl(e) {
  if (!cn(e))
    return !1;
  var t = zn(e);
  return t == Cc || t == Nc || t == wc || t == Sc;
}
var yo = Dt["__core-js_shared__"], Za = function() {
  var e = /[^.]+$/.exec(yo && yo.keys && yo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ic(e) {
  return !!Za && Za in e;
}
var Lc = Function.prototype, Ac = Lc.toString;
function Cn(e) {
  if (e != null) {
    try {
      return Ac.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Pc = /[\\^$.*+?()[\]{}|]/g, Rc = /^\[object .+?Constructor\]$/, Dc = Function.prototype, Mc = Object.prototype, kc = Dc.toString, Fc = Mc.hasOwnProperty, $c = RegExp(
  "^" + kc.call(Fc).replace(Pc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uc(e) {
  if (!cn(e) || Ic(e))
    return !1;
  var t = xl(e) ? $c : Rc;
  return t.test(Cn(e));
}
function Vc(e, t) {
  return e?.[t];
}
function Nn(e, t) {
  var n = Vc(e, t);
  return Uc(n) ? n : void 0;
}
var Po = Nn(Dt, "WeakMap");
function Bc(e, t, n) {
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
var xc = 800, Wc = 16, Hc = Date.now;
function jc(e) {
  var t = 0, n = 0;
  return function() {
    var r = Hc(), o = Wc - (r - n);
    if (n = r, o > 0) {
      if (++t >= xc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Kc(e) {
  return function() {
    return e;
  };
}
var Vr = function() {
  try {
    var e = Nn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), zc = Vr ? function(e, t) {
  return Vr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kc(t),
    writable: !0
  });
} : Bl, Gc = jc(zc);
function Yc(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Xc = 9007199254740991, qc = /^(?:0|[1-9]\d*)$/;
function sa(e, t) {
  var n = typeof e;
  return t = t ?? Xc, !!t && (n == "number" || n != "symbol" && qc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Jc(e, t, n) {
  t == "__proto__" && Vr ? Vr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function la(e, t) {
  return e === t || e !== e && t !== t;
}
var Zc = Object.prototype, Qc = Zc.hasOwnProperty;
function ef(e, t, n) {
  var r = e[t];
  (!(Qc.call(e, t) && la(r, n)) || n === void 0 && !(t in e)) && Jc(e, t, n);
}
var Qa = Math.max;
function tf(e, t, n) {
  return t = Qa(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Qa(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(s), Bc(e, this, l);
  };
}
var nf = 9007199254740991;
function ia(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= nf;
}
function rf(e) {
  return e != null && ia(e.length) && !xl(e);
}
var of = Object.prototype;
function af(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || of;
  return e === n;
}
function sf(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var lf = "[object Arguments]";
function es(e) {
  return $n(e) && zn(e) == lf;
}
var Wl = Object.prototype, uf = Wl.hasOwnProperty, cf = Wl.propertyIsEnumerable, ua = es(/* @__PURE__ */ function() {
  return arguments;
}()) ? es : function(e) {
  return $n(e) && uf.call(e, "callee") && !cf.call(e, "callee");
};
function ff() {
  return !1;
}
var Hl = typeof exports == "object" && exports && !exports.nodeType && exports, ts = Hl && typeof module == "object" && module && !module.nodeType && module, df = ts && ts.exports === Hl, ns = df ? Dt.Buffer : void 0, pf = ns ? ns.isBuffer : void 0, Ro = pf || ff, mf = "[object Arguments]", vf = "[object Array]", gf = "[object Boolean]", _f = "[object Date]", hf = "[object Error]", yf = "[object Function]", bf = "[object Map]", Ef = "[object Number]", Of = "[object Object]", Tf = "[object RegExp]", wf = "[object Set]", Cf = "[object String]", Nf = "[object WeakMap]", Sf = "[object ArrayBuffer]", If = "[object DataView]", Lf = "[object Float32Array]", Af = "[object Float64Array]", Pf = "[object Int8Array]", Rf = "[object Int16Array]", Df = "[object Int32Array]", Mf = "[object Uint8Array]", kf = "[object Uint8ClampedArray]", Ff = "[object Uint16Array]", $f = "[object Uint32Array]", pe = {};
pe[Lf] = pe[Af] = pe[Pf] = pe[Rf] = pe[Df] = pe[Mf] = pe[kf] = pe[Ff] = pe[$f] = !0;
pe[mf] = pe[vf] = pe[Sf] = pe[gf] = pe[If] = pe[_f] = pe[hf] = pe[yf] = pe[bf] = pe[Ef] = pe[Of] = pe[Tf] = pe[wf] = pe[Cf] = pe[Nf] = !1;
function Uf(e) {
  return $n(e) && ia(e.length) && !!pe[zn(e)];
}
function Vf(e) {
  return function(t) {
    return e(t);
  };
}
var jl = typeof exports == "object" && exports && !exports.nodeType && exports, tr = jl && typeof module == "object" && module && !module.nodeType && module, Bf = tr && tr.exports === jl, bo = Bf && $l.process, rs = function() {
  try {
    var e = tr && tr.require && tr.require("util").types;
    return e || bo && bo.binding && bo.binding("util");
  } catch {
  }
}(), os = rs && rs.isTypedArray, Kl = os ? Vf(os) : Uf, xf = Object.prototype, Wf = xf.hasOwnProperty;
function Hf(e, t) {
  var n = dt(e), r = !n && ua(e), o = !n && !r && Ro(e), a = !n && !r && !o && Kl(e), s = n || r || o || a, l = s ? sf(e.length, String) : [], i = l.length;
  for (var u in e)
    Wf.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    sa(u, i))) && l.push(u);
  return l;
}
function jf(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Kf = jf(Object.keys, Object), zf = Object.prototype, Gf = zf.hasOwnProperty;
function Yf(e) {
  if (!af(e))
    return Kf(e);
  var t = [];
  for (var n in Object(e))
    Gf.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function zl(e) {
  return rf(e) ? Hf(e) : Yf(e);
}
var Xf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qf = /^\w*$/;
function ca(e, t) {
  if (dt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || eo(e) ? !0 : qf.test(e) || !Xf.test(e) || t != null && e in Object(t);
}
var lr = Nn(Object, "create");
function Jf() {
  this.__data__ = lr ? lr(null) : {}, this.size = 0;
}
function Zf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qf = "__lodash_hash_undefined__", ed = Object.prototype, td = ed.hasOwnProperty;
function nd(e) {
  var t = this.__data__;
  if (lr) {
    var n = t[e];
    return n === Qf ? void 0 : n;
  }
  return td.call(t, e) ? t[e] : void 0;
}
var rd = Object.prototype, od = rd.hasOwnProperty;
function ad(e) {
  var t = this.__data__;
  return lr ? t[e] !== void 0 : od.call(t, e);
}
var sd = "__lodash_hash_undefined__";
function ld(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = lr && t === void 0 ? sd : t, this;
}
function bn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
bn.prototype.clear = Jf;
bn.prototype.delete = Zf;
bn.prototype.get = nd;
bn.prototype.has = ad;
bn.prototype.set = ld;
function id() {
  this.__data__ = [], this.size = 0;
}
function to(e, t) {
  for (var n = e.length; n--; )
    if (la(e[n][0], t))
      return n;
  return -1;
}
var ud = Array.prototype, cd = ud.splice;
function fd(e) {
  var t = this.__data__, n = to(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : cd.call(t, n, 1), --this.size, !0;
}
function dd(e) {
  var t = this.__data__, n = to(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function pd(e) {
  return to(this.__data__, e) > -1;
}
function md(e, t) {
  var n = this.__data__, r = to(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Xt.prototype.clear = id;
Xt.prototype.delete = fd;
Xt.prototype.get = dd;
Xt.prototype.has = pd;
Xt.prototype.set = md;
var ir = Nn(Dt, "Map");
function vd() {
  this.size = 0, this.__data__ = {
    hash: new bn(),
    map: new (ir || Xt)(),
    string: new bn()
  };
}
function gd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function no(e, t) {
  var n = e.__data__;
  return gd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function _d(e) {
  var t = no(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function hd(e) {
  return no(this, e).get(e);
}
function yd(e) {
  return no(this, e).has(e);
}
function bd(e, t) {
  var n = no(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function qt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qt.prototype.clear = vd;
qt.prototype.delete = _d;
qt.prototype.get = hd;
qt.prototype.has = yd;
qt.prototype.set = bd;
var Ed = "Expected a function";
function fa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ed);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (fa.Cache || qt)(), n;
}
fa.Cache = qt;
var Od = 500;
function Td(e) {
  var t = fa(e, function(r) {
    return n.size === Od && n.clear(), r;
  }), n = t.cache;
  return t;
}
var wd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Cd = /\\(\\)?/g, Nd = Td(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(wd, function(n, r, o, a) {
    t.push(o ? a.replace(Cd, "$1") : r || n);
  }), t;
});
function Sd(e) {
  return e == null ? "" : Vl(e);
}
function ro(e, t) {
  return dt(e) ? e : ca(e, t) ? [e] : Nd(Sd(e));
}
function _r(e) {
  if (typeof e == "string" || eo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function da(e, t) {
  t = ro(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[_r(t[n++])];
  return n && n == r ? e : void 0;
}
function ln(e, t, n) {
  var r = e == null ? void 0 : da(e, t);
  return r === void 0 ? n : r;
}
function Gl(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var as = Lt ? Lt.isConcatSpreadable : void 0;
function Id(e) {
  return dt(e) || ua(e) || !!(as && e && e[as]);
}
function Ld(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Id), o || (o = []); ++a < s; ) {
    var l = e[a];
    n(l) ? Gl(o, l) : o[o.length] = l;
  }
  return o;
}
function Ad(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ld(e) : [];
}
function Pd(e) {
  return Gc(tf(e, void 0, Ad), e + "");
}
function an() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return dt(e) ? e : [e];
}
function Rd() {
  this.__data__ = new Xt(), this.size = 0;
}
function Dd(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Md(e) {
  return this.__data__.get(e);
}
function kd(e) {
  return this.__data__.has(e);
}
var Fd = 200;
function $d(e, t) {
  var n = this.__data__;
  if (n instanceof Xt) {
    var r = n.__data__;
    if (!ir || r.length < Fd - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new qt(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function jt(e) {
  var t = this.__data__ = new Xt(e);
  this.size = t.size;
}
jt.prototype.clear = Rd;
jt.prototype.delete = Dd;
jt.prototype.get = Md;
jt.prototype.has = kd;
jt.prototype.set = $d;
function Ud(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function Vd() {
  return [];
}
var Bd = Object.prototype, xd = Bd.propertyIsEnumerable, ss = Object.getOwnPropertySymbols, Wd = ss ? function(e) {
  return e == null ? [] : (e = Object(e), Ud(ss(e), function(t) {
    return xd.call(e, t);
  }));
} : Vd;
function Hd(e, t, n) {
  var r = t(e);
  return dt(e) ? r : Gl(r, n(e));
}
function ls(e) {
  return Hd(e, zl, Wd);
}
var Do = Nn(Dt, "DataView"), Mo = Nn(Dt, "Promise"), ko = Nn(Dt, "Set"), is = "[object Map]", jd = "[object Object]", us = "[object Promise]", cs = "[object Set]", fs = "[object WeakMap]", ds = "[object DataView]", Kd = Cn(Do), zd = Cn(ir), Gd = Cn(Mo), Yd = Cn(ko), Xd = Cn(Po), on = zn;
(Do && on(new Do(new ArrayBuffer(1))) != ds || ir && on(new ir()) != is || Mo && on(Mo.resolve()) != us || ko && on(new ko()) != cs || Po && on(new Po()) != fs) && (on = function(e) {
  var t = zn(e), n = t == jd ? e.constructor : void 0, r = n ? Cn(n) : "";
  if (r)
    switch (r) {
      case Kd:
        return ds;
      case zd:
        return is;
      case Gd:
        return us;
      case Yd:
        return cs;
      case Xd:
        return fs;
    }
  return t;
});
var ps = Dt.Uint8Array, qd = "__lodash_hash_undefined__";
function Jd(e) {
  return this.__data__.set(e, qd), this;
}
function Zd(e) {
  return this.__data__.has(e);
}
function Br(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new qt(); ++t < n; )
    this.add(e[t]);
}
Br.prototype.add = Br.prototype.push = Jd;
Br.prototype.has = Zd;
function Qd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ep(e, t) {
  return e.has(t);
}
var tp = 1, np = 2;
function Yl(e, t, n, r, o, a) {
  var s = n & tp, l = e.length, i = t.length;
  if (l != i && !(s && i > l))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, d = !0, v = n & np ? new Br() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < l; ) {
    var g = e[p], m = t[p];
    if (r)
      var O = s ? r(m, g, p, t, e, a) : r(g, m, p, e, t, a);
    if (O !== void 0) {
      if (O)
        continue;
      d = !1;
      break;
    }
    if (v) {
      if (!Qd(t, function(c, h) {
        if (!ep(v, h) && (g === c || o(g, c, n, r, a)))
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
function rp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function op(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ap = 1, sp = 2, lp = "[object Boolean]", ip = "[object Date]", up = "[object Error]", cp = "[object Map]", fp = "[object Number]", dp = "[object RegExp]", pp = "[object Set]", mp = "[object String]", vp = "[object Symbol]", gp = "[object ArrayBuffer]", _p = "[object DataView]", ms = Lt ? Lt.prototype : void 0, Eo = ms ? ms.valueOf : void 0;
function hp(e, t, n, r, o, a, s) {
  switch (n) {
    case _p:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case gp:
      return !(e.byteLength != t.byteLength || !a(new ps(e), new ps(t)));
    case lp:
    case ip:
    case fp:
      return la(+e, +t);
    case up:
      return e.name == t.name && e.message == t.message;
    case dp:
    case mp:
      return e == t + "";
    case cp:
      var l = rp;
    case pp:
      var i = r & ap;
      if (l || (l = op), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= sp, s.set(e, t);
      var f = Yl(l(e), l(t), r, o, a, s);
      return s.delete(e), f;
    case vp:
      if (Eo)
        return Eo.call(e) == Eo.call(t);
  }
  return !1;
}
var yp = 1, bp = Object.prototype, Ep = bp.hasOwnProperty;
function Op(e, t, n, r, o, a) {
  var s = n & yp, l = ls(e), i = l.length, u = ls(t), f = u.length;
  if (i != f && !s)
    return !1;
  for (var p = i; p--; ) {
    var d = l[p];
    if (!(s ? d in t : Ep.call(t, d)))
      return !1;
  }
  var v = a.get(e), g = a.get(t);
  if (v && g)
    return v == t && g == e;
  var m = !0;
  a.set(e, t), a.set(t, e);
  for (var O = s; ++p < i; ) {
    d = l[p];
    var c = e[d], h = t[d];
    if (r)
      var C = s ? r(h, c, d, t, e, a) : r(c, h, d, e, t, a);
    if (!(C === void 0 ? c === h || o(c, h, n, r, a) : C)) {
      m = !1;
      break;
    }
    O || (O = d == "constructor");
  }
  if (m && !O) {
    var b = e.constructor, w = t.constructor;
    b != w && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof w == "function" && w instanceof w) && (m = !1);
  }
  return a.delete(e), a.delete(t), m;
}
var Tp = 1, vs = "[object Arguments]", gs = "[object Array]", Cr = "[object Object]", wp = Object.prototype, _s = wp.hasOwnProperty;
function Cp(e, t, n, r, o, a) {
  var s = dt(e), l = dt(t), i = s ? gs : on(e), u = l ? gs : on(t);
  i = i == vs ? Cr : i, u = u == vs ? Cr : u;
  var f = i == Cr, p = u == Cr, d = i == u;
  if (d && Ro(e)) {
    if (!Ro(t))
      return !1;
    s = !0, f = !1;
  }
  if (d && !f)
    return a || (a = new jt()), s || Kl(e) ? Yl(e, t, n, r, o, a) : hp(e, t, i, n, r, o, a);
  if (!(n & Tp)) {
    var v = f && _s.call(e, "__wrapped__"), g = p && _s.call(t, "__wrapped__");
    if (v || g) {
      var m = v ? e.value() : e, O = g ? t.value() : t;
      return a || (a = new jt()), o(m, O, n, r, a);
    }
  }
  return d ? (a || (a = new jt()), Op(e, t, n, r, o, a)) : !1;
}
function oo(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !$n(e) && !$n(t) ? e !== e && t !== t : Cp(e, t, n, r, oo, o);
}
var Np = 1, Sp = 2;
function Ip(e, t, n, r) {
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
      var f = new jt(), p;
      if (!(p === void 0 ? oo(u, i, Np | Sp, r, f) : p))
        return !1;
    }
  }
  return !0;
}
function Xl(e) {
  return e === e && !cn(e);
}
function Lp(e) {
  for (var t = zl(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Xl(o)];
  }
  return t;
}
function ql(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Ap(e) {
  var t = Lp(e);
  return t.length == 1 && t[0][2] ? ql(t[0][0], t[0][1]) : function(n) {
    return n === e || Ip(n, e, t);
  };
}
function Pp(e, t) {
  return e != null && t in Object(e);
}
function Rp(e, t, n) {
  t = ro(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = _r(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && ia(o) && sa(s, o) && (dt(e) || ua(e)));
}
function Jl(e, t) {
  return e != null && Rp(e, t, Pp);
}
var Dp = 1, Mp = 2;
function kp(e, t) {
  return ca(e) && Xl(t) ? ql(_r(e), t) : function(n) {
    var r = ln(n, e);
    return r === void 0 && r === t ? Jl(n, e) : oo(t, r, Dp | Mp);
  };
}
function Fp(e) {
  return function(t) {
    return t?.[e];
  };
}
function $p(e) {
  return function(t) {
    return da(t, e);
  };
}
function Up(e) {
  return ca(e) ? Fp(_r(e)) : $p(e);
}
function Vp(e) {
  return typeof e == "function" ? e : e == null ? Bl : typeof e == "object" ? dt(e) ? kp(e[0], e[1]) : Ap(e) : Up(e);
}
var Oo = function() {
  return Dt.Date.now();
}, Bp = "Expected a function", xp = Math.max, Wp = Math.min;
function Hp(e, t, n) {
  var r, o, a, s, l, i, u = 0, f = !1, p = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Bp);
  t = Ja(t) || 0, cn(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? xp(Ja(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d);
  function v(N) {
    var E = r, R = o;
    return r = o = void 0, u = N, s = e.apply(R, E), s;
  }
  function g(N) {
    return u = N, l = setTimeout(c, t), f ? v(N) : s;
  }
  function m(N) {
    var E = N - i, R = N - u, D = t - E;
    return p ? Wp(D, a - R) : D;
  }
  function O(N) {
    var E = N - i, R = N - u;
    return i === void 0 || E >= t || E < 0 || p && R >= a;
  }
  function c() {
    var N = Oo();
    if (O(N))
      return h(N);
    l = setTimeout(c, m(N));
  }
  function h(N) {
    return l = void 0, d && r ? v(N) : (r = o = void 0, s);
  }
  function C() {
    l !== void 0 && clearTimeout(l), u = 0, r = i = o = l = void 0;
  }
  function b() {
    return l === void 0 ? s : h(Oo());
  }
  function w() {
    var N = Oo(), E = O(N);
    if (r = arguments, o = this, i = N, E) {
      if (l === void 0)
        return g(i);
      if (p)
        return clearTimeout(l), l = setTimeout(c, t), v(i);
    }
    return l === void 0 && (l = setTimeout(c, t)), s;
  }
  return w.cancel = C, w.flush = b, w;
}
function jp(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Yc(e, Vp(t), o);
}
function Fo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function nr(e, t) {
  return oo(e, t);
}
function pa(e) {
  return e == null;
}
function Kp(e) {
  return e === void 0;
}
function zp(e, t, n, r) {
  if (!cn(e))
    return e;
  t = ro(t, e);
  for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
    var i = _r(t[o]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (o != s) {
      var f = l[i];
      u = void 0, u === void 0 && (u = cn(f) ? f : sa(t[o + 1]) ? [] : {});
    }
    ef(l, i, u), l = l[i];
  }
  return e;
}
function Gp(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], l = da(e, s);
    n(l, s) && zp(a, ro(s, e), l);
  }
  return a;
}
function Yp(e, t) {
  return Gp(e, t, function(n, r) {
    return Jl(e, r);
  });
}
var Xp = Pd(function(e, t) {
  return e == null ? {} : Yp(e, t);
});
const Mn = (e) => e === void 0, xr = (e) => typeof e == "boolean", Fe = (e) => typeof e == "number", nt = (e) => typeof Element > "u" ? !1 : e instanceof Element, qp = (e) => St(e) ? !Number.isNaN(Number(e)) : !1;
var Jp = Object.defineProperty, Zp = Object.defineProperties, Qp = Object.getOwnPropertyDescriptors, hs = Object.getOwnPropertySymbols, em = Object.prototype.hasOwnProperty, tm = Object.prototype.propertyIsEnumerable, ys = (e, t, n) => t in e ? Jp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nm = (e, t) => {
  for (var n in t || (t = {}))
    em.call(t, n) && ys(e, n, t[n]);
  if (hs)
    for (var n of hs(t))
      tm.call(t, n) && ys(e, n, t[n]);
  return e;
}, rm = (e, t) => Zp(e, Qp(t));
function om(e, t) {
  var n;
  const r = gr();
  return Pl(() => {
    r.value = e();
  }, rm(nm({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), ra(r);
}
var bs;
const Ne = typeof window < "u", am = (e) => typeof e == "string", Zl = () => {
}, $o = Ne && ((bs = window?.navigator) == null ? void 0 : bs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ma(e) {
  return typeof e == "function" ? e() : T(e);
}
function sm(e) {
  return e;
}
function hr(e) {
  return xu() ? (Wu(e), !0) : !1;
}
function lm(e, t = !0) {
  Be() ? Re(e) : t ? e() : We(e);
}
function Ql(e, t, n = {}) {
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
    }, ma(t));
  }
  return r && (o.value = !0, Ne && i()), hr(l), {
    isPending: ra(o),
    start: i,
    stop: l
  };
}
function xt(e) {
  var t;
  const n = ma(e);
  return (t = n?.$el) != null ? t : n;
}
const ao = Ne ? window : void 0;
function qe(...e) {
  let t, n, r, o;
  if (am(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = ao) : [t, n, r, o] = e, !t)
    return Zl;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, l = (f, p, d, v) => (f.addEventListener(p, d, v), () => f.removeEventListener(p, d, v)), i = Z(() => [xt(t), ma(o)], ([f, p]) => {
    s(), f && a.push(...n.flatMap((d) => r.map((v) => l(f, d, v, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), s();
  };
  return hr(u), u;
}
let Es = !1;
function im(e, t, n = {}) {
  const { window: r = ao, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  $o && !Es && (Es = !0, Array.from(r.document.body.children).forEach((d) => d.addEventListener("click", Zl)));
  let l = !0;
  const i = (d) => o.some((v) => {
    if (typeof v == "string")
      return Array.from(r.document.querySelectorAll(v)).some((g) => g === d.target || d.composedPath().includes(g));
    {
      const g = xt(v);
      return g && (d.target === g || d.composedPath().includes(g));
    }
  }), f = [
    qe(r, "click", (d) => {
      const v = xt(e);
      if (!(!v || v === d.target || d.composedPath().includes(v))) {
        if (d.detail === 0 && (l = !i(d)), !l) {
          l = !0;
          return;
        }
        t(d);
      }
    }, { passive: !0, capture: a }),
    qe(r, "pointerdown", (d) => {
      const v = xt(e);
      v && (l = !d.composedPath().includes(v) && !i(d));
    }, { passive: !0 }),
    s && qe(r, "blur", (d) => {
      var v;
      const g = xt(e);
      ((v = r.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(d);
    })
  ].filter(Boolean);
  return () => f.forEach((d) => d());
}
function ei(e, t = !1) {
  const n = F(), r = () => n.value = !!e();
  return r(), lm(r, t), n;
}
const Os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ts = "__vueuse_ssr_handlers__";
Os[Ts] = Os[Ts] || {};
var ws = Object.getOwnPropertySymbols, um = Object.prototype.hasOwnProperty, cm = Object.prototype.propertyIsEnumerable, fm = (e, t) => {
  var n = {};
  for (var r in e)
    um.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ws)
    for (var r of ws(e))
      t.indexOf(r) < 0 && cm.call(e, r) && (n[r] = e[r]);
  return n;
};
function Bt(e, t, n = {}) {
  const r = n, { window: o = ao } = r, a = fm(r, ["window"]);
  let s;
  const l = ei(() => o && "ResizeObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Z(() => xt(e), (p) => {
    i(), l.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    i(), u();
  };
  return hr(f), {
    isSupported: l,
    stop: f
  };
}
var Cs = Object.getOwnPropertySymbols, dm = Object.prototype.hasOwnProperty, pm = Object.prototype.propertyIsEnumerable, mm = (e, t) => {
  var n = {};
  for (var r in e)
    dm.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Cs)
    for (var r of Cs(e))
      t.indexOf(r) < 0 && pm.call(e, r) && (n[r] = e[r]);
  return n;
};
function vm(e, t, n = {}) {
  const r = n, { window: o = ao } = r, a = mm(r, ["window"]);
  let s;
  const l = ei(() => o && "MutationObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Z(() => xt(e), (p) => {
    i(), l.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), f = () => {
    i(), u();
  };
  return hr(f), {
    isSupported: l,
    stop: f
  };
}
var Ns;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ns || (Ns = {}));
var gm = Object.defineProperty, Ss = Object.getOwnPropertySymbols, _m = Object.prototype.hasOwnProperty, hm = Object.prototype.propertyIsEnumerable, Is = (e, t, n) => t in e ? gm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ym = (e, t) => {
  for (var n in t || (t = {}))
    _m.call(t, n) && Is(e, n, t[n]);
  if (Ss)
    for (var n of Ss(t))
      hm.call(t, n) && Is(e, n, t[n]);
  return e;
};
const bm = {
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
ym({
  linear: sm
}, bm);
class ti extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Em(e, t) {
  throw new ti(`[${e}] ${t}`);
}
function ot(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = St(e) ? new ti(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Ls = {
  current: 0
}, As = F(0), ni = 2e3, Ps = Symbol("elZIndexContextKey"), ri = Symbol("zIndexContextKey"), oi = (e) => {
  const t = Be() ? ue(Ps, Ls) : Ls, n = e || (Be() ? ue(ri, void 0) : void 0), r = L(() => {
    const s = T(n);
    return Fe(s) ? s : ni;
  }), o = L(() => r.value + As.value), a = () => (t.current++, As.value = t.current, o.value);
  return !Ne && !ue(Ps) && ot("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var Om = {
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
const Tm = (e) => (t, n) => wm(t, n, T(e)), wm = (e, t, n) => ln(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Cm = (e) => {
  const t = L(() => T(e).name), n = Hu(e) ? e : F(e);
  return {
    lang: t,
    locale: n,
    t: Tm(e)
  };
}, ai = Symbol("localeContextKey"), si = (e) => {
  const t = e || ue(ai, F());
  return Cm(L(() => t.value || Om));
}, li = "__epPropKey", q = (e) => e, Nm = (e) => Tt(e) && !!e[li], so = (e, t) => {
  if (!Tt(e) || Nm(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, i = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), ja(e, "default") && p.push(o), f || (f = p.includes(u))), s && (f || (f = s(u))), !f && p.length > 0) {
        const d = [...new Set(p)].map((v) => JSON.stringify(v)).join(", ");
        ju(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${d}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [li]: !0
  };
  return ja(e, "default") && (i.default = o), i;
}, be = (e) => Fo(Object.entries(e).map(([t, n]) => [
  t,
  so(n, t)
])), ii = ["", "default", "small", "large"], Sm = so({
  type: String,
  values: ii,
  required: !1
}), ui = Symbol("size"), Im = () => {
  const e = ue(ui, {});
  return L(() => T(e.size) || "");
}, ci = Symbol("emptyValuesContextKey"), Lm = "use-empty-values", Am = ["", void 0, null], Pm = void 0, Rm = be({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Le(e) ? !e() : !e
  }
}), Dm = (e, t) => {
  const n = Be() ? ue(ci, F({})) : F({}), r = L(() => e.emptyValues || n.value.emptyValues || Am), o = L(() => Le(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Le(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Pm), a = (s) => r.value.includes(s);
  return r.value.includes(o.value) || ot(Lm, "value-on-clear should be a value of empty-values"), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Rs = (e) => Object.keys(e), Wr = F();
function fi(e, t = void 0) {
  return Be() ? ue(kl, Wr) : Wr;
}
function di(e, t) {
  const n = fi(), r = $e(e, L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Dr;
  })), o = si(L(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), a = oi(L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || ni;
  })), s = L(() => {
    var l;
    return T(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return Mm(L(() => T(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Mm = (e, t, n = !1) => {
  var r;
  const o = !!Be(), a = o ? fi() : void 0, s = (r = void 0) != null ? r : o ? It : void 0;
  if (!s) {
    ot("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = L(() => {
    const i = T(e);
    return a?.value ? km(a.value, i) : i;
  });
  return s(kl, l), s(ai, L(() => l.value.locale)), s(Fl, L(() => l.value.namespace)), s(ri, L(() => l.value.zIndex)), s(ui, {
    size: L(() => l.value.size || "")
  }), s(ci, L(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Wr.value) && (Wr.value = l.value), l;
}, km = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Rs(e), ...Rs(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, An = "update:modelValue", pi = "change", Tb = "input";
var Ee = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Fm = "utils/dom/style";
function ur(e, t = "px") {
  if (!e)
    return "";
  if (Fe(e) || qp(e))
    return `${e}${t}`;
  if (St(e))
    return e;
  ot(Fm, "binding value must be a string or number");
}
function $m(e, t) {
  if (!Ne)
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
}, mi = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), vi = (e) => (e.install = $r, e), Um = be({
  size: {
    type: q([Number, String])
  },
  color: {
    type: String
  }
}), Vm = H({
  name: "ElIcon",
  inheritAttrs: !1
}), Bm = /* @__PURE__ */ H({
  ...Vm,
  props: Um,
  setup(e) {
    const t = e, n = $e("icon"), r = L(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Mn(o) ? void 0 : ur(o),
        "--color": a
      };
    });
    return (o, a) => (k(), z("i", Qr({
      class: T(n).b(),
      style: T(r)
    }, o.$attrs), [
      te(o.$slots, "default")
    ], 16));
  }
});
var xm = /* @__PURE__ */ Ee(Bm, [["__file", "icon.vue"]]);
const En = fn(xm);
/*! Element Plus Icons Vue v2.3.1 */
var Wm = /* @__PURE__ */ H({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Hm = Wm, jm = /* @__PURE__ */ H({
  name: "Check",
  __name: "check",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), wb = jm, Km = /* @__PURE__ */ H({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      K("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), zm = Km, Gm = /* @__PURE__ */ H({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ym = Gm, Xm = /* @__PURE__ */ H({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      K("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), gi = Xm, qm = /* @__PURE__ */ H({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Hr = qm, Jm = /* @__PURE__ */ H({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      K("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Cb = Jm, Zm = /* @__PURE__ */ H({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Qm = Zm, ev = /* @__PURE__ */ H({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), tv = ev, nv = /* @__PURE__ */ H({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), Nb = nv, rv = /* @__PURE__ */ H({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ov = rv, av = /* @__PURE__ */ H({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Sb = av, sv = /* @__PURE__ */ H({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), lv = sv;
const jr = q([
  String,
  Object,
  Function
]), iv = {
  Close: Hr
}, uv = {
  Close: Hr
}, Kr = {
  success: ov,
  warning: lv,
  error: Ym,
  info: Qm
}, cv = {
  validating: tv,
  success: zm,
  error: gi
}, fv = (e) => e, dv = be({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), lo = (e) => Xp(dv, e), va = Symbol("formContextKey"), zr = Symbol("formItemContextKey"), Uo = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, pv = Symbol("elIdInjection"), _i = () => Be() ? ue(pv, Uo) : Uo, io = (e) => {
  const t = _i();
  !Ne && t === Uo && ot("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = aa();
  return om(() => T(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, mv = () => {
  const e = ue(va, void 0), t = ue(zr, void 0);
  return {
    form: e,
    formItem: t
  };
}, vv = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = F(!1)), r || (r = F(!1));
  const o = F();
  let a;
  const s = L(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return Re(() => {
    a = Z([sn(e, "id"), n], ([l, i]) => {
      const u = l ?? (i ? void 0 : io().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !i && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Rl(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, hi = (e) => {
  const t = Be();
  return L(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, yi = (e, t = {}) => {
  const n = F(void 0), r = t.prop ? n : hi("size"), o = t.global ? n : Im(), a = t.form ? { size: void 0 } : ue(va, void 0), s = t.formItem ? { size: void 0 } : ue(zr, void 0);
  return L(() => r.value || T(e) || s?.size || a?.size || o.value || "");
}, Ib = (e) => {
  const t = hi("disabled"), n = ue(va, void 0);
  return L(() => t.value || T(e) || n?.disabled || !1);
};
function gv(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Be(), { emit: s } = a, l = gr(), i = F(!1), u = (d) => {
    Le(t) && t(d) || i.value || (i.value = !0, s("focus", d), n?.());
  }, f = (d) => {
    var v;
    Le(r) && r(d) || d.relatedTarget && ((v = l.value) != null && v.contains(d.relatedTarget)) || (i.value = !1, s("blur", d), o?.());
  }, p = () => {
    var d, v;
    (d = l.value) != null && d.contains(document.activeElement) && l.value !== document.activeElement || (v = e.value) == null || v.focus();
  };
  return Z(l, (d) => {
    d && d.setAttribute("tabindex", "-1");
  }), qe(l, "focus", u, !0), qe(l, "blur", f, !0), qe(l, "click", p, !0), process.env.NODE_ENV === "test" && Re(() => {
    const d = nt(e.value) ? e.value : document.querySelector("input,textarea");
    d && (qe(d, "focus", u, !0), qe(d, "blur", f, !0));
  }), {
    isFocused: i,
    wrapperRef: l,
    handleFocus: u,
    handleBlur: f
  };
}
const _v = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function hv({
  afterComposition: e,
  emit: t
}) {
  const n = F(!1), r = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, o = (l) => {
    var i;
    t?.("compositionupdate", l);
    const u = (i = l.target) == null ? void 0 : i.value, f = u[u.length - 1] || "";
    n.value = !_v(f);
  }, a = (l) => {
    t?.("compositionend", l), n.value && (n.value = !1, We(() => e(l)));
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
const In = 4, yv = {
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
}, bv = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ga = Symbol("scrollbarContextKey"), Ev = be({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ov = "Thumb", Tv = /* @__PURE__ */ H({
  __name: "thumb",
  props: Ev,
  setup(e) {
    const t = e, n = ue(ga), r = $e("scrollbar");
    n || Em(Ov, "can not inject scrollbar context");
    const o = F(), a = F(), s = F({}), l = F(!1);
    let i = !1, u = !1, f = Ne ? document.onselectstart : null;
    const p = L(() => yv[t.vertical ? "vertical" : "horizontal"]), d = L(() => bv({
      size: t.size,
      move: t.move,
      bar: p.value
    })), v = L(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), g = (N) => {
      var E;
      if (N.stopPropagation(), N.ctrlKey || [1, 2].includes(N.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), O(N);
      const R = N.currentTarget;
      R && (s.value[p.value.axis] = R[p.value.offset] - (N[p.value.client] - R.getBoundingClientRect()[p.value.direction]));
    }, m = (N) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const E = Math.abs(N.target.getBoundingClientRect()[p.value.direction] - N[p.value.client]), R = a.value[p.value.offset] / 2, D = (E - R) * 100 * v.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = D * n.wrapElement[p.value.scrollSize] / 100;
    }, O = (N) => {
      N.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", c), document.addEventListener("mouseup", h), f = document.onselectstart, document.onselectstart = () => !1;
    }, c = (N) => {
      if (!o.value || !a.value || i === !1)
        return;
      const E = s.value[p.value.axis];
      if (!E)
        return;
      const R = (o.value.getBoundingClientRect()[p.value.direction] - N[p.value.client]) * -1, D = a.value[p.value.offset] - E, B = (R - D) * 100 * v.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = B * n.wrapElement[p.value.scrollSize] / 100;
    }, h = () => {
      i = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", h), w(), u && (l.value = !1);
    }, C = () => {
      u = !1, l.value = !!t.size;
    }, b = () => {
      u = !0, l.value = i;
    };
    Rt(() => {
      w(), document.removeEventListener("mouseup", h);
    });
    const w = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return qe(sn(n, "scrollbarElement"), "mousemove", C), qe(sn(n, "scrollbarElement"), "mouseleave", b), (N, E) => (k(), ae(Kn, {
      name: T(r).b("fade"),
      persisted: ""
    }, {
      default: ee(() => [
        tt(K("div", {
          ref_key: "instance",
          ref: o,
          class: x([T(r).e("bar"), T(r).is(T(p).key)]),
          onMousedown: m
        }, [
          K("div", {
            ref_key: "thumb",
            ref: a,
            class: x(T(r).e("thumb")),
            style: Ke(T(d)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [zt, N.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Ds = /* @__PURE__ */ Ee(Tv, [["__file", "thumb.vue"]]);
const wv = be({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Cv = /* @__PURE__ */ H({
  __name: "bar",
  props: wv,
  setup(e, { expose: t }) {
    const n = e, r = ue(ga), o = F(0), a = F(0), s = F(""), l = F(""), i = F(1), u = F(1);
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
        const v = d.offsetHeight - In, g = d.offsetWidth - In, m = v ** 2 / d.scrollHeight, O = g ** 2 / d.scrollWidth, c = Math.max(m, n.minSize), h = Math.max(O, n.minSize);
        i.value = m / (v - m) / (c / (v - c)), u.value = O / (g - O) / (h / (g - h)), l.value = c + In < v ? `${c}px` : "", s.value = h + In < g ? `${h}px` : "";
      }
    }), (d, v) => (k(), z(un, null, [
      _e(Ds, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      _e(Ds, {
        move: a.value,
        ratio: i.value,
        size: l.value,
        vertical: "",
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Nv = /* @__PURE__ */ Ee(Cv, [["__file", "bar.vue"]]);
const Sv = be({
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
    type: q([String, Object, Array]),
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
  ...lo(["ariaLabel", "ariaOrientation"])
}), Iv = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Fe)
}, Vo = "ElScrollbar", Lv = H({
  name: Vo
}), Av = /* @__PURE__ */ H({
  ...Lv,
  props: Sv,
  emits: Iv,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = $e("scrollbar");
    let a, s, l = 0, i = 0;
    const u = F(), f = F(), p = F(), d = F(), v = L(() => {
      const w = {};
      return r.height && (w.height = ur(r.height)), r.maxHeight && (w.maxHeight = ur(r.maxHeight)), [r.wrapStyle, w];
    }), g = L(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), m = L(() => [o.e("view"), r.viewClass]), O = () => {
      var w;
      f.value && ((w = d.value) == null || w.handleScroll(f.value), l = f.value.scrollTop, i = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function c(w, N) {
      Tt(w) ? f.value.scrollTo(w) : Fe(w) && Fe(N) && f.value.scrollTo(w, N);
    }
    const h = (w) => {
      if (!Fe(w)) {
        ot(Vo, "value must be a number");
        return;
      }
      f.value.scrollTop = w;
    }, C = (w) => {
      if (!Fe(w)) {
        ot(Vo, "value must be a number");
        return;
      }
      f.value.scrollLeft = w;
    }, b = () => {
      var w;
      (w = d.value) == null || w.update();
    };
    return Z(() => r.noresize, (w) => {
      w ? (a?.(), s?.()) : ({ stop: a } = Bt(p, b), s = qe("resize", b));
    }, { immediate: !0 }), Z(() => [r.maxHeight, r.height], () => {
      r.native || We(() => {
        var w;
        b(), f.value && ((w = d.value) == null || w.handleScroll(f.value));
      });
    }), It(ga, Fn({
      scrollbarElement: u,
      wrapElement: f
    })), Ku(() => {
      f.value && (f.value.scrollTop = l, f.value.scrollLeft = i);
    }), Re(() => {
      r.native || We(() => {
        b();
      });
    }), zu(() => b()), t({
      wrapRef: f,
      update: b,
      scrollTo: c,
      setScrollTop: h,
      setScrollLeft: C,
      handleScroll: O
    }), (w, N) => (k(), z("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: x(T(o).b())
    }, [
      K("div", {
        ref_key: "wrapRef",
        ref: f,
        class: x(T(g)),
        style: Ke(T(v)),
        tabindex: w.tabindex,
        onScroll: O
      }, [
        (k(), ae(kn(w.tag), {
          id: w.id,
          ref_key: "resizeRef",
          ref: p,
          class: x(T(m)),
          style: Ke(w.viewStyle),
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
      w.native ? le("v-if", !0) : (k(), ae(Nv, {
        key: 0,
        ref_key: "barRef",
        ref: d,
        always: w.always,
        "min-size": w.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Pv = /* @__PURE__ */ Ee(Av, [["__file", "scrollbar.vue"]]);
const Rv = fn(Pv), _a = Symbol("popper"), bi = Symbol("popperContent"), Dv = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Ei = be({
  role: {
    type: String,
    values: Dv,
    default: "tooltip"
  }
}), Mv = H({
  name: "ElPopper",
  inheritAttrs: !1
}), kv = /* @__PURE__ */ H({
  ...Mv,
  props: Ei,
  setup(e, { expose: t }) {
    const n = e, r = F(), o = F(), a = F(), s = F(), l = L(() => n.role), i = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: l
    };
    return t(i), It(_a, i), (u, f) => te(u.$slots, "default");
  }
});
var Fv = /* @__PURE__ */ Ee(kv, [["__file", "popper.vue"]]);
const Oi = be({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), $v = H({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Uv = /* @__PURE__ */ H({
  ...$v,
  props: Oi,
  setup(e, { expose: t }) {
    const n = e, r = $e("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = ue(bi, void 0);
    return Z(() => n.arrowOffset, (l) => {
      o.value = l;
    }), Rt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (l, i) => (k(), z("span", {
      ref_key: "arrowRef",
      ref: a,
      class: x(T(r).e("arrow")),
      style: Ke(T(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Vv = /* @__PURE__ */ Ee(Uv, [["__file", "arrow.vue"]]);
const Ti = be({
  virtualRef: {
    type: q(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: q(Function)
  },
  onMouseleave: {
    type: q(Function)
  },
  onClick: {
    type: q(Function)
  },
  onKeydown: {
    type: q(Function)
  },
  onFocus: {
    type: q(Function)
  },
  onBlur: {
    type: q(Function)
  },
  onContextmenu: {
    type: q(Function)
  },
  id: String,
  open: Boolean
}), wi = Symbol("elForwardRef"), Bv = (e) => {
  It(wi, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, xv = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Bo = (e) => {
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
}, To = "ElOnlyChild", Wv = H({
  name: To,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = ue(wi), a = xv((r = o?.setForwardRef) != null ? r : $r);
    return () => {
      var s;
      const l = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!l)
        return null;
      if (l.length > 1)
        return ot(To, "requires exact only one valid child."), null;
      const i = Ci(l);
      return i ? tt(Gu(i, n), [[a]]) : (ot(To, "no valid child node found"), null);
    };
  }
});
function Ci(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Tt(n))
      switch (n.type) {
        case Yu:
          continue;
        case Dl:
        case "svg":
          return Ms(n);
        case un:
          return Ci(n.children);
        default:
          return n;
      }
    return Ms(n);
  }
  return null;
}
function Ms(e) {
  const t = $e("only-child");
  return _e("span", {
    class: t.e("content")
  }, [e]);
}
const Hv = H({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), jv = /* @__PURE__ */ H({
  ...Hv,
  props: Ti,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = ue(_a, void 0);
    Bv(o);
    const a = L(() => l.value ? n.id : void 0), s = L(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = L(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), i = L(() => l.value ? `${n.open}` : void 0);
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
    return Re(() => {
      Z(() => n.virtualRef, (p) => {
        p && (o.value = xt(p));
      }, {
        immediate: !0
      }), Z(o, (p, d) => {
        u?.(), u = void 0, nt(p) && (f.forEach((v) => {
          var g;
          const m = n[v];
          m && (p.addEventListener(v.slice(2).toLowerCase(), m), (g = d?.removeEventListener) == null || g.call(d, v.slice(2).toLowerCase(), m));
        }), Bo(p) && (u = Z([a, s, l, i], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, m) => {
            pa(v[m]) ? p.removeAttribute(g) : p.setAttribute(g, v[m]);
          });
        }, { immediate: !0 }))), nt(d) && Bo(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => d.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), Rt(() => {
      if (u?.(), u = void 0, o.value && nt(o.value)) {
        const p = o.value;
        f.forEach((d) => {
          const v = n[d];
          v && p.removeEventListener(d.slice(2).toLowerCase(), v);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, d) => p.virtualTriggering ? le("v-if", !0) : (k(), ae(T(Wv), Qr({ key: 0 }, p.$attrs, {
      "aria-controls": T(a),
      "aria-describedby": T(s),
      "aria-expanded": T(i),
      "aria-haspopup": T(l)
    }), {
      default: ee(() => [
        te(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Kv = /* @__PURE__ */ Ee(jv, [["__file", "trigger.vue"]]);
const wo = "focus-trap.focus-after-trapped", Co = "focus-trap.focus-after-released", zv = "focus-trap.focusout-prevented", ks = {
  cancelable: !0,
  bubbles: !1
}, Gv = {
  cancelable: !0,
  bubbles: !1
}, Fs = "focusAfterTrapped", $s = "focusAfterReleased", Yv = Symbol("elFocusTrap"), ha = F(), uo = F(0), ya = F(0);
let Nr = 0;
const Ni = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Us = (e, t) => {
  for (const n of e)
    if (!Xv(n, t))
      return n;
}, Xv = (e, t) => {
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
}, qv = (e) => {
  const t = Ni(e), n = Us(t, e), r = Us(t.reverse(), e);
  return [n, r];
}, Jv = (e) => e instanceof HTMLInputElement && "select" in e, Ut = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    nt(e) && !Bo(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), ya.value = window.performance.now(), e !== n && Jv(e) && t && e.select(), nt(e) && r && e.removeAttribute("tabindex");
  }
};
function Vs(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const Zv = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Vs(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Vs(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, Qv = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Ut(r, t), document.activeElement !== n)
      return;
}, Bs = Zv(), eg = () => uo.value > ya.value, Sr = () => {
  ha.value = "pointer", uo.value = window.performance.now();
}, xs = () => {
  ha.value = "keyboard", uo.value = window.performance.now();
}, tg = () => (Re(() => {
  Nr === 0 && (document.addEventListener("mousedown", Sr), document.addEventListener("touchstart", Sr), document.addEventListener("keydown", xs)), Nr++;
}), Rt(() => {
  Nr--, Nr <= 0 && (document.removeEventListener("mousedown", Sr), document.removeEventListener("touchstart", Sr), document.removeEventListener("keydown", xs));
}), {
  focusReason: ha,
  lastUserFocusTimestamp: uo,
  lastAutomatedFocusTimestamp: ya
}), Ir = (e) => new CustomEvent(zv, {
  ...Gv,
  detail: e
}), Ct = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Pn = [];
const Ws = (e) => {
  e.code === Ct.esc && Pn.forEach((t) => t(e));
}, ng = (e) => {
  Re(() => {
    Pn.length === 0 && document.addEventListener("keydown", Ws), Ne && Pn.push(e);
  }), Rt(() => {
    Pn = Pn.filter((t) => t !== e), Pn.length === 0 && Ne && document.removeEventListener("keydown", Ws);
  });
}, rg = H({
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
    Fs,
    $s,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = F();
    let r, o;
    const { focusReason: a } = tg();
    ng((g) => {
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
      const { code: m, altKey: O, ctrlKey: c, metaKey: h, currentTarget: C, shiftKey: b } = g, { loop: w } = e, N = m === Ct.tab && !O && !c && !h, E = document.activeElement;
      if (N && E) {
        const R = C, [D, B] = qv(R);
        if (D && B) {
          if (!b && E === B) {
            const W = Ir({
              focusReason: a.value
            });
            t("focusout-prevented", W), W.defaultPrevented || (g.preventDefault(), w && Ut(D, !0));
          } else if (b && [D, R].includes(E)) {
            const W = Ir({
              focusReason: a.value
            });
            t("focusout-prevented", W), W.defaultPrevented || (g.preventDefault(), w && Ut(B, !0));
          }
        } else if (E === R) {
          const W = Ir({
            focusReason: a.value
          });
          t("focusout-prevented", W), W.defaultPrevented || g.preventDefault();
        }
      }
    };
    It(Yv, {
      focusTrapRef: n,
      onKeydown: l
    }), Z(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), Z([n], ([g], [m]) => {
      g && (g.addEventListener("keydown", l), g.addEventListener("focusin", f), g.addEventListener("focusout", p)), m && (m.removeEventListener("keydown", l), m.removeEventListener("focusin", f), m.removeEventListener("focusout", p));
    });
    const i = (g) => {
      t(Fs, g);
    }, u = (g) => t($s, g), f = (g) => {
      const m = T(n);
      if (!m)
        return;
      const O = g.target, c = g.relatedTarget, h = O && m.contains(O);
      e.trapped || c && m.contains(c) || (r = c), h && t("focusin", g), !s.paused && e.trapped && (h ? o = O : Ut(o, !0));
    }, p = (g) => {
      const m = T(n);
      if (!(s.paused || !m))
        if (e.trapped) {
          const O = g.relatedTarget;
          !pa(O) && !m.contains(O) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const c = Ir({
                focusReason: a.value
              });
              t("focusout-prevented", c), c.defaultPrevented || Ut(o, !0);
            }
          }, 0);
        } else {
          const O = g.target;
          O && m.contains(O) || t("focusout", g);
        }
    };
    async function d() {
      await We();
      const g = T(n);
      if (g) {
        Bs.push(s);
        const m = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = m, !g.contains(m)) {
          const c = new Event(wo, ks);
          g.addEventListener(wo, i), g.dispatchEvent(c), c.defaultPrevented || We(() => {
            let h = e.focusStartEl;
            St(h) || (Ut(h), document.activeElement !== h && (h = "first")), h === "first" && Qv(Ni(g), !0), (document.activeElement === m || h === "container") && Ut(g);
          });
        }
      }
    }
    function v() {
      const g = T(n);
      if (g) {
        g.removeEventListener(wo, i);
        const m = new CustomEvent(Co, {
          ...ks,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(Co, u), g.dispatchEvent(m), !m.defaultPrevented && (a.value == "keyboard" || !eg() || g.contains(document.activeElement)) && Ut(r ?? document.body), g.removeEventListener(Co, u), Bs.remove(s);
      }
    }
    return Re(() => {
      e.trapped && d(), Z(() => e.trapped, (g) => {
        g ? d() : v();
      });
    }), Rt(() => {
      e.trapped && v(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function og(e, t, n, r, o, a) {
  return te(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var ag = /* @__PURE__ */ Ee(rg, [["render", og], ["__file", "focus-trap.vue"]]), ze = "top", at = "bottom", st = "right", Ge = "left", ba = "auto", yr = [ze, at, st, Ge], Un = "start", cr = "end", sg = "clippingParents", Si = "viewport", Zn = "popper", lg = "reference", Hs = yr.reduce(function(e, t) {
  return e.concat([t + "-" + Un, t + "-" + cr]);
}, []), co = [].concat(yr, [ba]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Un, t + "-" + cr]);
}, []), ig = "beforeRead", ug = "read", cg = "afterRead", fg = "beforeMain", dg = "main", pg = "afterMain", mg = "beforeWrite", vg = "write", gg = "afterWrite", _g = [ig, ug, cg, fg, dg, pg, mg, vg, gg];
function At(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ze(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function On(e) {
  var t = Ze(e).Element;
  return e instanceof t || e instanceof Element;
}
function rt(e) {
  var t = Ze(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ea(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function hg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !rt(a) || !At(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function yg(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !rt(o) || !At(o) || (Object.assign(o.style, l), Object.keys(a).forEach(function(i) {
        o.removeAttribute(i);
      }));
    });
  };
}
var Ii = { name: "applyStyles", enabled: !0, phase: "write", fn: hg, effect: yg, requires: ["computeStyles"] };
function Nt(e) {
  return e.split("-")[0];
}
var yn = Math.max, Gr = Math.min, Vn = Math.round;
function xo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Li() {
  return !/^((?!chrome|android).)*safari/i.test(xo());
}
function Bn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && rt(e) && (o = e.offsetWidth > 0 && Vn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Vn(r.height) / e.offsetHeight || 1);
  var s = On(e) ? Ze(e) : window, l = s.visualViewport, i = !Li() && n, u = (r.left + (i && l ? l.offsetLeft : 0)) / o, f = (r.top + (i && l ? l.offsetTop : 0)) / a, p = r.width / o, d = r.height / a;
  return { width: p, height: d, top: f, right: u + p, bottom: f + d, left: u, x: u, y: f };
}
function Oa(e) {
  var t = Bn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Ai(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ea(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Gt(e) {
  return Ze(e).getComputedStyle(e);
}
function bg(e) {
  return ["table", "td", "th"].indexOf(At(e)) >= 0;
}
function dn(e) {
  return ((On(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function fo(e) {
  return At(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ea(e) ? e.host : null) || dn(e);
}
function js(e) {
  return !rt(e) || Gt(e).position === "fixed" ? null : e.offsetParent;
}
function Eg(e) {
  var t = /firefox/i.test(xo()), n = /Trident/i.test(xo());
  if (n && rt(e)) {
    var r = Gt(e);
    if (r.position === "fixed") return null;
  }
  var o = fo(e);
  for (Ea(o) && (o = o.host); rt(o) && ["html", "body"].indexOf(At(o)) < 0; ) {
    var a = Gt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function br(e) {
  for (var t = Ze(e), n = js(e); n && bg(n) && Gt(n).position === "static"; ) n = js(n);
  return n && (At(n) === "html" || At(n) === "body" && Gt(n).position === "static") ? t : n || Eg(e) || t;
}
function Ta(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function rr(e, t, n) {
  return yn(e, Gr(t, n));
}
function Og(e, t, n) {
  var r = rr(e, t, n);
  return r > n ? n : r;
}
function Pi() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ri(e) {
  return Object.assign({}, Pi(), e);
}
function Di(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Tg = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ri(typeof e != "number" ? e : Di(e, yr));
};
function wg(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Nt(n.placement), i = Ta(l), u = [Ge, st].indexOf(l) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = Tg(o.padding, n), d = Oa(a), v = i === "y" ? ze : Ge, g = i === "y" ? at : st, m = n.rects.reference[f] + n.rects.reference[i] - s[i] - n.rects.popper[f], O = s[i] - n.rects.reference[i], c = br(a), h = c ? i === "y" ? c.clientHeight || 0 : c.clientWidth || 0 : 0, C = m / 2 - O / 2, b = p[v], w = h - d[f] - p[g], N = h / 2 - d[f] / 2 + C, E = rr(b, N, w), R = i;
    n.modifiersData[r] = (t = {}, t[R] = E, t.centerOffset = E - N, t);
  }
}
function Cg(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ai(t.elements.popper, o) && (t.elements.arrow = o));
}
var Ng = { name: "arrow", enabled: !0, phase: "main", fn: wg, effect: Cg, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function xn(e) {
  return e.split("-")[1];
}
var Sg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ig(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Vn(n * o) / o || 0, y: Vn(r * o) / o || 0 };
}
function Ks(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, l = e.position, i = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, d = s.x, v = d === void 0 ? 0 : d, g = s.y, m = g === void 0 ? 0 : g, O = typeof f == "function" ? f({ x: v, y: m }) : { x: v, y: m };
  v = O.x, m = O.y;
  var c = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), C = Ge, b = ze, w = window;
  if (u) {
    var N = br(n), E = "clientHeight", R = "clientWidth";
    if (N === Ze(n) && (N = dn(n), Gt(N).position !== "static" && l === "absolute" && (E = "scrollHeight", R = "scrollWidth")), N = N, o === ze || (o === Ge || o === st) && a === cr) {
      b = at;
      var D = p && N === w && w.visualViewport ? w.visualViewport.height : N[E];
      m -= D - r.height, m *= i ? 1 : -1;
    }
    if (o === Ge || (o === ze || o === at) && a === cr) {
      C = st;
      var B = p && N === w && w.visualViewport ? w.visualViewport.width : N[R];
      v -= B - r.width, v *= i ? 1 : -1;
    }
  }
  var Y = Object.assign({ position: l }, u && Sg), W = f === !0 ? Ig({ x: v, y: m }, Ze(n)) : { x: v, y: m };
  if (v = W.x, m = W.y, i) {
    var Q;
    return Object.assign({}, Y, (Q = {}, Q[b] = h ? "0" : "", Q[C] = c ? "0" : "", Q.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", Q));
  }
  return Object.assign({}, Y, (t = {}, t[b] = h ? m + "px" : "", t[C] = c ? v + "px" : "", t.transform = "", t));
}
function Lg(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, i = l === void 0 ? !0 : l, u = { placement: Nt(t.placement), variation: xn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ks(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ks(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Mi = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Lg, data: {} }, Lr = { passive: !0 };
function Ag(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, i = Ze(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Lr);
  }), l && i.addEventListener("resize", n.update, Lr), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Lr);
    }), l && i.removeEventListener("resize", n.update, Lr);
  };
}
var ki = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Ag, data: {} }, Pg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Mr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Pg[t];
  });
}
var Rg = { start: "end", end: "start" };
function zs(e) {
  return e.replace(/start|end/g, function(t) {
    return Rg[t];
  });
}
function wa(e) {
  var t = Ze(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Ca(e) {
  return Bn(dn(e)).left + wa(e).scrollLeft;
}
function Dg(e, t) {
  var n = Ze(e), r = dn(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, i = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Li();
    (u || !u && t === "fixed") && (l = o.offsetLeft, i = o.offsetTop);
  }
  return { width: a, height: s, x: l + Ca(e), y: i };
}
function Mg(e) {
  var t, n = dn(e), r = wa(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = yn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = yn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Ca(e), i = -r.scrollTop;
  return Gt(o || n).direction === "rtl" && (l += yn(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: l, y: i };
}
function Na(e) {
  var t = Gt(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Fi(e) {
  return ["html", "body", "#document"].indexOf(At(e)) >= 0 ? e.ownerDocument.body : rt(e) && Na(e) ? e : Fi(fo(e));
}
function or(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Fi(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ze(r), s = o ? [a].concat(a.visualViewport || [], Na(r) ? r : []) : r, l = t.concat(s);
  return o ? l : l.concat(or(fo(s)));
}
function Wo(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function kg(e, t) {
  var n = Bn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Gs(e, t, n) {
  return t === Si ? Wo(Dg(e, n)) : On(t) ? kg(t, n) : Wo(Mg(dn(e)));
}
function Fg(e) {
  var t = or(fo(e)), n = ["absolute", "fixed"].indexOf(Gt(e).position) >= 0, r = n && rt(e) ? br(e) : e;
  return On(r) ? t.filter(function(o) {
    return On(o) && Ai(o, r) && At(o) !== "body";
  }) : [];
}
function $g(e, t, n, r) {
  var o = t === "clippingParents" ? Fg(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], l = a.reduce(function(i, u) {
    var f = Gs(e, u, r);
    return i.top = yn(f.top, i.top), i.right = Gr(f.right, i.right), i.bottom = Gr(f.bottom, i.bottom), i.left = yn(f.left, i.left), i;
  }, Gs(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function $i(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Nt(r) : null, a = r ? xn(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, i;
  switch (o) {
    case ze:
      i = { x: s, y: t.y - n.height };
      break;
    case at:
      i = { x: s, y: t.y + t.height };
      break;
    case st:
      i = { x: t.x + t.width, y: l };
      break;
    case Ge:
      i = { x: t.x - n.width, y: l };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = o ? Ta(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case Un:
        i[u] = i[u] - (t[f] / 2 - n[f] / 2);
        break;
      case cr:
        i[u] = i[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return i;
}
function fr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, i = l === void 0 ? sg : l, u = n.rootBoundary, f = u === void 0 ? Si : u, p = n.elementContext, d = p === void 0 ? Zn : p, v = n.altBoundary, g = v === void 0 ? !1 : v, m = n.padding, O = m === void 0 ? 0 : m, c = Ri(typeof O != "number" ? O : Di(O, yr)), h = d === Zn ? lg : Zn, C = e.rects.popper, b = e.elements[g ? h : d], w = $g(On(b) ? b : b.contextElement || dn(e.elements.popper), i, f, s), N = Bn(e.elements.reference), E = $i({ reference: N, element: C, placement: o }), R = Wo(Object.assign({}, C, E)), D = d === Zn ? R : N, B = { top: w.top - D.top + c.top, bottom: D.bottom - w.bottom + c.bottom, left: w.left - D.left + c.left, right: D.right - w.right + c.right }, Y = e.modifiersData.offset;
  if (d === Zn && Y) {
    var W = Y[o];
    Object.keys(B).forEach(function(Q) {
      var Se = [st, at].indexOf(Q) >= 0 ? 1 : -1, me = [ze, at].indexOf(Q) >= 0 ? "y" : "x";
      B[Q] += W[me] * Se;
    });
  }
  return B;
}
function Ug(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? co : i, f = xn(r), p = f ? l ? Hs : Hs.filter(function(g) {
    return xn(g) === f;
  }) : yr, d = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  d.length === 0 && (d = p);
  var v = d.reduce(function(g, m) {
    return g[m] = fr(e, { placement: m, boundary: o, rootBoundary: a, padding: s })[Nt(m)], g;
  }, {});
  return Object.keys(v).sort(function(g, m) {
    return v[g] - v[m];
  });
}
function Vg(e) {
  if (Nt(e) === ba) return [];
  var t = Mr(e);
  return [zs(e), t, zs(t)];
}
function Bg(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, i = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, d = n.altBoundary, v = n.flipVariations, g = v === void 0 ? !0 : v, m = n.allowedAutoPlacements, O = t.options.placement, c = Nt(O), h = c === O, C = i || (h || !g ? [Mr(O)] : Vg(O)), b = [O].concat(C).reduce(function(Ye, Ue) {
      return Ye.concat(Nt(Ue) === ba ? Ug(t, { placement: Ue, boundary: f, rootBoundary: p, padding: u, flipVariations: g, allowedAutoPlacements: m }) : Ue);
    }, []), w = t.rects.reference, N = t.rects.popper, E = /* @__PURE__ */ new Map(), R = !0, D = b[0], B = 0; B < b.length; B++) {
      var Y = b[B], W = Nt(Y), Q = xn(Y) === Un, Se = [ze, at].indexOf(W) >= 0, me = Se ? "width" : "height", oe = fr(t, { placement: Y, boundary: f, rootBoundary: p, altBoundary: d, padding: u }), V = Se ? Q ? st : Ge : Q ? at : ze;
      w[me] > N[me] && (V = Mr(V));
      var ge = Mr(V), Te = [];
      if (a && Te.push(oe[W] <= 0), l && Te.push(oe[V] <= 0, oe[ge] <= 0), Te.every(function(Ye) {
        return Ye;
      })) {
        D = Y, R = !1;
        break;
      }
      E.set(Y, Te);
    }
    if (R) for (var we = g ? 3 : 1, lt = function(Ye) {
      var Ue = b.find(function(Mt) {
        var Ve = E.get(Mt);
        if (Ve) return Ve.slice(0, Ye).every(function(fe) {
          return fe;
        });
      });
      if (Ue) return D = Ue, "break";
    }, Qe = we; Qe > 0; Qe--) {
      var pt = lt(Qe);
      if (pt === "break") break;
    }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
var xg = { name: "flip", enabled: !0, phase: "main", fn: Bg, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Ys(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Xs(e) {
  return [ze, st, at, Ge].some(function(t) {
    return e[t] >= 0;
  });
}
function Wg(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = fr(t, { elementContext: "reference" }), l = fr(t, { altBoundary: !0 }), i = Ys(s, r), u = Ys(l, o, a), f = Xs(i), p = Xs(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var Hg = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Wg };
function jg(e, t, n) {
  var r = Nt(e), o = [Ge, ze].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * o, [Ge, st].indexOf(r) >= 0 ? { x: l, y: s } : { x: s, y: l };
}
function Kg(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = co.reduce(function(f, p) {
    return f[p] = jg(p, t.rects, a), f;
  }, {}), l = s[t.placement], i = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var zg = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Kg };
function Gg(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = $i({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Ui = { name: "popperOffsets", enabled: !0, phase: "read", fn: Gg, data: {} };
function Yg(e) {
  return e === "x" ? "y" : "x";
}
function Xg(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, i = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, d = n.tether, v = d === void 0 ? !0 : d, g = n.tetherOffset, m = g === void 0 ? 0 : g, O = fr(t, { boundary: i, rootBoundary: u, padding: p, altBoundary: f }), c = Nt(t.placement), h = xn(t.placement), C = !h, b = Ta(c), w = Yg(b), N = t.modifiersData.popperOffsets, E = t.rects.reference, R = t.rects.popper, D = typeof m == "function" ? m(Object.assign({}, t.rects, { placement: t.placement })) : m, B = typeof D == "number" ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D), Y = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = { x: 0, y: 0 };
  if (N) {
    if (a) {
      var Q, Se = b === "y" ? ze : Ge, me = b === "y" ? at : st, oe = b === "y" ? "height" : "width", V = N[b], ge = V + O[Se], Te = V - O[me], we = v ? -R[oe] / 2 : 0, lt = h === Un ? E[oe] : R[oe], Qe = h === Un ? -R[oe] : -E[oe], pt = t.elements.arrow, Ye = v && pt ? Oa(pt) : { width: 0, height: 0 }, Ue = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Pi(), Mt = Ue[Se], Ve = Ue[me], fe = rr(0, E[oe], Ye[oe]), vn = C ? E[oe] / 2 - we - fe - Mt - B.mainAxis : lt - fe - Mt - B.mainAxis, Zt = C ? -E[oe] / 2 + we + fe + Ve + B.mainAxis : Qe + fe + Ve + B.mainAxis, mt = t.elements.arrow && br(t.elements.arrow), Qt = mt ? b === "y" ? mt.clientTop || 0 : mt.clientLeft || 0 : 0, vt = (Q = Y?.[b]) != null ? Q : 0, kt = V + vn - vt - Qt, it = V + Zt - vt, gt = rr(v ? Gr(ge, kt) : ge, V, v ? yn(Te, it) : Te);
      N[b] = gt, W[b] = gt - V;
    }
    if (l) {
      var en, _ = b === "x" ? ze : Ge, y = b === "x" ? at : st, A = N[w], $ = w === "y" ? "height" : "width", se = A + O[_], de = A - O[y], X = [ze, Ge].indexOf(c) !== -1, I = (en = Y?.[w]) != null ? en : 0, P = X ? se : A - E[$] - R[$] - I + B.altAxis, J = X ? A + E[$] + R[$] - I - B.altAxis : de, ce = v && X ? Og(P, A, J) : rr(v ? P : se, A, v ? J : de);
      N[w] = ce, W[w] = ce - A;
    }
    t.modifiersData[r] = W;
  }
}
var qg = { name: "preventOverflow", enabled: !0, phase: "main", fn: Xg, requiresIfExists: ["offset"] };
function Jg(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Zg(e) {
  return e === Ze(e) || !rt(e) ? wa(e) : Jg(e);
}
function Qg(e) {
  var t = e.getBoundingClientRect(), n = Vn(t.width) / e.offsetWidth || 1, r = Vn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function e_(e, t, n) {
  n === void 0 && (n = !1);
  var r = rt(t), o = rt(t) && Qg(t), a = dn(t), s = Bn(e, o, n), l = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (r || !r && !n) && ((At(t) !== "body" || Na(a)) && (l = Zg(t)), rt(t) ? (i = Bn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : a && (i.x = Ca(a))), { x: s.left + l.scrollLeft - i.x, y: s.top + l.scrollTop - i.y, width: s.width, height: s.height };
}
function t_(e) {
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
function n_(e) {
  var t = t_(e);
  return _g.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function r_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function o_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var qs = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Js() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Sa(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? qs : o;
  return function(s, l, i) {
    i === void 0 && (i = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, qs, a), modifiersData: {}, elements: { reference: s, popper: l }, attributes: {}, styles: {} }, f = [], p = !1, d = { state: u, setOptions: function(m) {
      var O = typeof m == "function" ? m(u.options) : m;
      g(), u.options = Object.assign({}, a, u.options, O), u.scrollParents = { reference: On(s) ? or(s) : s.contextElement ? or(s.contextElement) : [], popper: or(l) };
      var c = n_(o_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = c.filter(function(h) {
        return h.enabled;
      }), v(), d.update();
    }, forceUpdate: function() {
      if (!p) {
        var m = u.elements, O = m.reference, c = m.popper;
        if (Js(O, c)) {
          u.rects = { reference: e_(O, br(c), u.options.strategy === "fixed"), popper: Oa(c) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(R) {
            return u.modifiersData[R.name] = Object.assign({}, R.data);
          });
          for (var h = 0; h < u.orderedModifiers.length; h++) {
            if (u.reset === !0) {
              u.reset = !1, h = -1;
              continue;
            }
            var C = u.orderedModifiers[h], b = C.fn, w = C.options, N = w === void 0 ? {} : w, E = C.name;
            typeof b == "function" && (u = b({ state: u, options: N, name: E, instance: d }) || u);
          }
        }
      }
    }, update: r_(function() {
      return new Promise(function(m) {
        d.forceUpdate(), m(u);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!Js(s, l)) return d;
    d.setOptions(i).then(function(m) {
      !p && i.onFirstUpdate && i.onFirstUpdate(m);
    });
    function v() {
      u.orderedModifiers.forEach(function(m) {
        var O = m.name, c = m.options, h = c === void 0 ? {} : c, C = m.effect;
        if (typeof C == "function") {
          var b = C({ state: u, name: O, instance: d, options: h }), w = function() {
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
Sa();
var a_ = [ki, Ui, Mi, Ii];
Sa({ defaultModifiers: a_ });
var s_ = [ki, Ui, Mi, Ii, zg, xg, qg, Ng, Hg], l_ = Sa({ defaultModifiers: s_ });
const i_ = ["fixed", "absolute"], u_ = be({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: q(Array),
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
    values: co,
    default: "bottom"
  },
  popperOptions: {
    type: q(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: i_,
    default: "absolute"
  }
}), Vi = be({
  ...u_,
  id: String,
  style: {
    type: q([String, Array, Object])
  },
  className: {
    type: q([String, Array, Object])
  },
  effect: {
    type: q(String),
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
    type: q([String, Array, Object])
  },
  popperStyle: {
    type: q([String, Array, Object])
  },
  referenceEl: {
    type: q(Object)
  },
  triggerTargetEl: {
    type: q(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...lo(["ariaLabel"])
}), c_ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, f_ = (e, t) => {
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
}, d_ = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...m_(e), ...t]
  };
  return v_(a, o?.modifiers), a;
}, p_ = (e) => {
  if (Ne)
    return xt(e);
};
function m_(e) {
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
function v_(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const g_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = __(i);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = L(() => {
    const { onFirstUpdate: i, placement: u, strategy: f, modifiers: p } = T(n);
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
  }), a = gr(), s = F({
    styles: {
      popper: {
        position: T(o).strategy,
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
  return Z(o, (i) => {
    const u = T(a);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), Z([e, t], ([i, u]) => {
    l(), !(!i || !u) && (a.value = l_(i, u, T(o)));
  }), Rt(() => {
    l();
  }), {
    state: L(() => {
      var i;
      return { ...((i = T(a)) == null ? void 0 : i.state) || {} };
    }),
    styles: L(() => T(s).styles),
    attributes: L(() => T(s).attributes),
    update: () => {
      var i;
      return (i = T(a)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = T(a)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: L(() => T(a))
  };
};
function __(e) {
  const t = Object.keys(e.elements), n = Fo(t.map((o) => [o, e.styles[o] || {}])), r = Fo(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const h_ = 0, y_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = ue(_a, void 0), a = F(), s = F(), l = L(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = L(() => {
    var c;
    const h = T(a), C = (c = T(s)) != null ? c : h_;
    return {
      name: "arrow",
      enabled: !Kp(h),
      options: {
        element: h,
        padding: C
      }
    };
  }), u = L(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...d_(e, [
      T(i),
      T(l)
    ])
  })), f = L(() => p_(e.referenceEl) || T(r)), { attributes: p, state: d, styles: v, update: g, forceUpdate: m, instanceRef: O } = g_(f, n, u);
  return Z(O, (c) => t.value = c), Re(() => {
    Z(() => {
      var c;
      return (c = T(f)) == null ? void 0 : c.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: O,
    state: d,
    styles: v,
    role: o,
    forceUpdate: m,
    update: g
  };
}, b_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = oi(), a = $e("popper"), s = L(() => T(t).popper), l = F(Fe(e.zIndex) ? e.zIndex : o()), i = L(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = L(() => [
    { zIndex: T(l) },
    T(n).popper,
    e.popperStyle || {}
  ]), f = L(() => r.value === "dialog" ? "false" : void 0), p = L(() => T(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: i,
    contentStyle: u,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = Fe(e.zIndex) ? e.zIndex : o();
    }
  };
}, E_ = H({
  name: "ElPopperContent"
}), O_ = /* @__PURE__ */ H({
  ...E_,
  props: Vi,
  emits: c_,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: l,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = f_(r, n), { attributes: p, arrowRef: d, contentRef: v, styles: g, instanceRef: m, role: O, update: c } = y_(r), {
      ariaModal: h,
      arrowStyle: C,
      contentAttrs: b,
      contentClass: w,
      contentStyle: N,
      updateZIndex: E
    } = b_(r, {
      styles: g,
      attributes: p,
      role: O
    }), R = ue(zr, void 0), D = F();
    It(bi, {
      arrowStyle: C,
      arrowRef: d,
      arrowOffset: D
    }), R && It(zr, {
      ...R,
      addInputId: $r,
      removeInputId: $r
    });
    let B;
    const Y = (Q = !0) => {
      c(), Q && E();
    }, W = () => {
      Y(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return Re(() => {
      Z(() => r.triggerTargetEl, (Q, Se) => {
        B?.(), B = void 0;
        const me = T(Q || v.value), oe = T(Se || v.value);
        nt(me) && (B = Z([O, () => r.ariaLabel, h, () => r.id], (V) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ge, Te) => {
            pa(V[Te]) ? me.removeAttribute(ge) : me.setAttribute(ge, V[Te]);
          });
        }, { immediate: !0 })), oe !== me && nt(oe) && ["role", "aria-label", "aria-modal", "id"].forEach((V) => {
          oe.removeAttribute(V);
        });
      }, { immediate: !0 }), Z(() => r.visible, W, { immediate: !0 });
    }), Rt(() => {
      B?.(), B = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: m,
      updatePopper: Y,
      contentStyle: N
    }), (Q, Se) => (k(), z("div", Qr({
      ref_key: "contentRef",
      ref: v
    }, T(b), {
      style: T(N),
      class: T(w),
      tabindex: "-1",
      onMouseenter: (me) => Q.$emit("mouseenter", me),
      onMouseleave: (me) => Q.$emit("mouseleave", me)
    }), [
      _e(T(ag), {
        trapped: T(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": T(v),
        "focus-start-el": T(o),
        onFocusAfterTrapped: T(l),
        onFocusAfterReleased: T(s),
        onFocusin: T(i),
        onFocusoutPrevented: T(u),
        onReleaseRequested: T(f)
      }, {
        default: ee(() => [
          te(Q.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var T_ = /* @__PURE__ */ Ee(O_, [["__file", "content.vue"]]);
const w_ = fn(Fv), Ia = Symbol("elTooltip");
function Zs() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return hr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const C_ = be({
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
}), N_ = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Zs(), {
    registerTimeout: s,
    cancelTimeout: l
  } = Zs();
  return {
    onOpen: (f) => {
      a(() => {
        r(f);
        const p = T(n);
        Fe(p) && p > 0 && s(() => {
          o(f);
        }, p);
      }, T(e));
    },
    onClose: (f) => {
      l(), a(() => {
        o(f);
      }, T(t));
    }
  };
}, La = be({
  ...C_,
  ...Vi,
  appendTo: {
    type: q([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: q(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...lo(["ariaLabel"])
}), Bi = be({
  ...Ti,
  disabled: Boolean,
  trigger: {
    type: q([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: q(Array),
    default: () => [Ct.enter, Ct.numpadEnter, Ct.space]
  }
}), S_ = so({
  type: q(Boolean),
  default: null
}), I_ = so({
  type: q(Function)
}), L_ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: S_,
    [n]: I_
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
      const d = Be(), { emit: v } = d, g = d.props, m = L(() => Le(g[n])), O = L(() => g[e] === null), c = (E) => {
        s.value !== !0 && (s.value = !0, l && (l.value = E), Le(f) && f(E));
      }, h = (E) => {
        s.value !== !1 && (s.value = !1, l && (l.value = E), Le(p) && p(E));
      }, C = (E) => {
        if (g.disabled === !0 || Le(u) && !u())
          return;
        const R = m.value && Ne;
        R && v(t, !0), (O.value || !R) && c(E);
      }, b = (E) => {
        if (g.disabled === !0 || !Ne)
          return;
        const R = m.value && Ne;
        R && v(t, !1), (O.value || !R) && h(E);
      }, w = (E) => {
        xr(E) && (g.disabled && E ? m.value && v(t, !1) : s.value !== E && (E ? c() : h()));
      }, N = () => {
        s.value ? b() : C();
      };
      return Z(() => g[e], w), i && d.appContext.config.globalProperties.$route !== void 0 && Z(() => ({
        ...d.proxy.$route
      }), () => {
        i.value && s.value && b();
      }), Re(() => {
        w(g[e]);
      }), {
        hide: b,
        show: C,
        toggle: N,
        hasUpdateHandler: m
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: A_,
  useModelToggleEmits: P_,
  useModelToggle: R_
} = L_("visible"), D_ = be({
  ...Ei,
  ...A_,
  ...La,
  ...Bi,
  ...Oi,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), M_ = [
  ...P_,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], k_ = (e, t) => wt(e) ? e.includes(t) : e === t, Ln = (e, t, n) => (r) => {
  k_(T(e), t) && n(r);
}, Vt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, F_ = H({
  name: "ElTooltipTrigger"
}), $_ = /* @__PURE__ */ H({
  ...F_,
  props: Bi,
  setup(e, { expose: t }) {
    const n = e, r = $e("tooltip"), { controlled: o, id: a, open: s, onOpen: l, onClose: i, onToggle: u } = ue(Ia, void 0), f = F(null), p = () => {
      if (T(o) || n.disabled)
        return !0;
    }, d = sn(n, "trigger"), v = Vt(p, Ln(d, "hover", l)), g = Vt(p, Ln(d, "hover", i)), m = Vt(p, Ln(d, "click", (b) => {
      b.button === 0 && u(b);
    })), O = Vt(p, Ln(d, "focus", l)), c = Vt(p, Ln(d, "focus", i)), h = Vt(p, Ln(d, "contextmenu", (b) => {
      b.preventDefault(), u(b);
    })), C = Vt(p, (b) => {
      const { code: w } = b;
      n.triggerKeys.includes(w) && (b.preventDefault(), u(b));
    });
    return t({
      triggerRef: f
    }), (b, w) => (k(), ae(T(Kv), {
      id: T(a),
      "virtual-ref": b.virtualRef,
      open: T(s),
      "virtual-triggering": b.virtualTriggering,
      class: x(T(r).e("trigger")),
      onBlur: T(c),
      onClick: T(m),
      onContextmenu: T(h),
      onFocus: T(O),
      onMouseenter: T(v),
      onMouseleave: T(g),
      onKeydown: T(C)
    }, {
      default: ee(() => [
        te(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var U_ = /* @__PURE__ */ Ee($_, [["__file", "trigger.vue"]]);
const V_ = be({
  to: {
    type: q([String, Object]),
    required: !0
  },
  disabled: Boolean
}), B_ = /* @__PURE__ */ H({
  __name: "teleport",
  props: V_,
  setup(e) {
    return (t, n) => t.disabled ? te(t.$slots, "default", { key: 0 }) : (k(), ae(Xu, {
      key: 1,
      to: t.to
    }, [
      te(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var x_ = /* @__PURE__ */ Ee(B_, [["__file", "teleport.vue"]]);
const W_ = fn(x_), xi = () => {
  const e = aa(), t = _i(), n = L(() => `${e.value}-popper-container-${t.prefix}`), r = L(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, H_ = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, j_ = () => {
  const { id: e, selector: t } = xi();
  return qu(() => {
    Ne && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && H_(e.value);
  }), {
    id: e,
    selector: t
  };
}, K_ = H({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), z_ = /* @__PURE__ */ H({
  ...K_,
  props: La,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = xi(), o = $e("tooltip"), a = F();
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
      onBeforeHide: O
    } = ue(Ia, void 0), c = L(() => n.transition || `${o.namespace.value}-fade-in-linear`), h = L(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Rt(() => {
      s?.();
    });
    const C = L(() => T(h) ? !0 : T(u)), b = L(() => n.disabled ? !1 : T(u)), w = L(() => n.appendTo || r.value), N = L(() => {
      var V;
      return (V = n.style) != null ? V : {};
    }), E = F(!0), R = () => {
      g(), oe() && Ut(document.body), E.value = !0;
    }, D = () => {
      if (T(l))
        return !0;
    }, B = Vt(D, () => {
      n.enterable && T(f) === "hover" && d();
    }), Y = Vt(D, () => {
      T(f) === "hover" && p();
    }), W = () => {
      var V, ge;
      (ge = (V = a.value) == null ? void 0 : V.updatePopper) == null || ge.call(V), m?.();
    }, Q = () => {
      O?.();
    }, Se = () => {
      v(), s = im(L(() => {
        var V;
        return (V = a.value) == null ? void 0 : V.popperContentRef;
      }), () => {
        if (T(l))
          return;
        T(f) !== "hover" && p();
      });
    }, me = () => {
      n.virtualTriggering || p();
    }, oe = (V) => {
      var ge;
      const Te = (ge = a.value) == null ? void 0 : ge.popperContentRef, we = V?.relatedTarget || document.activeElement;
      return Te?.contains(we);
    };
    return Z(() => T(u), (V) => {
      V ? E.value = !1 : s?.();
    }, {
      flush: "post"
    }), Z(() => n.content, () => {
      var V, ge;
      (ge = (V = a.value) == null ? void 0 : V.updatePopper) == null || ge.call(V);
    }), t({
      contentRef: a,
      isFocusInsideContent: oe
    }), (V, ge) => (k(), ae(T(W_), {
      disabled: !V.teleported,
      to: T(w)
    }, {
      default: ee(() => [
        _e(Kn, {
          name: T(c),
          onAfterLeave: R,
          onBeforeEnter: W,
          onAfterEnter: Se,
          onBeforeLeave: Q
        }, {
          default: ee(() => [
            T(C) ? tt((k(), ae(T(T_), Qr({
              key: 0,
              id: T(i),
              ref_key: "contentRef",
              ref: a
            }, V.$attrs, {
              "aria-label": V.ariaLabel,
              "aria-hidden": E.value,
              "boundaries-padding": V.boundariesPadding,
              "fallback-placements": V.fallbackPlacements,
              "gpu-acceleration": V.gpuAcceleration,
              offset: V.offset,
              placement: V.placement,
              "popper-options": V.popperOptions,
              strategy: V.strategy,
              effect: V.effect,
              enterable: V.enterable,
              pure: V.pure,
              "popper-class": V.popperClass,
              "popper-style": [V.popperStyle, T(N)],
              "reference-el": V.referenceEl,
              "trigger-target-el": V.triggerTargetEl,
              visible: T(b),
              "z-index": V.zIndex,
              onMouseenter: T(B),
              onMouseleave: T(Y),
              onBlur: me,
              onClose: T(p)
            }), {
              default: ee(() => [
                te(V.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [zt, T(b)]
            ]) : le("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var G_ = /* @__PURE__ */ Ee(z_, [["__file", "content.vue"]]);
const Y_ = H({
  name: "ElTooltip"
}), X_ = /* @__PURE__ */ H({
  ...Y_,
  props: D_,
  emits: M_,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    j_();
    const o = io(), a = F(), s = F(), l = () => {
      var c;
      const h = T(a);
      h && ((c = h.popperInstanceRef) == null || c.update());
    }, i = F(!1), u = F(), { show: f, hide: p, hasUpdateHandler: d } = R_({
      indicator: i,
      toggleReason: u
    }), { onOpen: v, onClose: g } = N_({
      showAfter: sn(r, "showAfter"),
      hideAfter: sn(r, "hideAfter"),
      autoClose: sn(r, "autoClose"),
      open: f,
      close: p
    }), m = L(() => xr(r.visible) && !d.value);
    It(Ia, {
      controlled: m,
      id: o,
      open: ra(i),
      trigger: sn(r, "trigger"),
      onOpen: (c) => {
        v(c);
      },
      onClose: (c) => {
        g(c);
      },
      onToggle: (c) => {
        T(i) ? g(c) : v(c);
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
    }), Z(() => r.disabled, (c) => {
      c && i.value && (i.value = !1);
    });
    const O = (c) => {
      var h;
      return (h = s.value) == null ? void 0 : h.isFocusInsideContent(c);
    };
    return Ju(() => i.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: O,
      updatePopper: l,
      onOpen: v,
      onClose: g,
      hide: p
    }), (c, h) => (k(), ae(T(w_), {
      ref_key: "popperRef",
      ref: a,
      role: c.role
    }, {
      default: ee(() => [
        _e(U_, {
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
        _e(G_, {
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
              c.rawContent ? (k(), z("span", {
                key: 0,
                innerHTML: c.content
              }, null, 8, ["innerHTML"])) : (k(), z("span", { key: 1 }, He(c.content), 1))
            ]),
            c.showArrow ? (k(), ae(T(Vv), {
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
var q_ = /* @__PURE__ */ Ee(X_, [["__file", "tooltip.vue"]]);
const J_ = fn(q_), Z_ = be({
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
    type: q([String, Object, Array])
  },
  offset: {
    type: q(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Q_ = H({
  name: "ElBadge"
}), eh = /* @__PURE__ */ H({
  ...Q_,
  props: Z_,
  setup(e, { expose: t }) {
    const n = e, r = $e("badge"), o = L(() => n.isDot ? "" : Fe(n.value) && Fe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = L(() => {
      var s, l, i, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: ur(-((l = (s = n.offset) == null ? void 0 : s[0]) != null ? l : 0)),
          marginTop: ur((u = (i = n.offset) == null ? void 0 : i[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (s, l) => (k(), z("div", {
      class: x(T(r).b())
    }, [
      te(s.$slots, "default"),
      _e(Kn, {
        name: `${T(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ee(() => [
          tt(K("sup", {
            class: x([
              T(r).e("content"),
              T(r).em("content", s.type),
              T(r).is("fixed", !!s.$slots.default),
              T(r).is("dot", s.isDot),
              T(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Ke(T(a))
          }, [
            te(s.$slots, "content", { value: T(o) }, () => [
              Ao(He(T(o)), 1)
            ])
          ], 6), [
            [zt, !s.hidden && (T(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var th = /* @__PURE__ */ Ee(eh, [["__file", "badge.vue"]]);
const nh = fn(th), rh = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ho = be({
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
    values: ii
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), oh = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, ah = H({
  name: "ElTag"
}), sh = /* @__PURE__ */ H({
  ...ah,
  props: Ho,
  emits: oh,
  setup(e, { emit: t }) {
    const n = e, r = yi(), o = $e("tag"), a = L(() => {
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
    return (u, f) => u.disableTransitions ? (k(), z("span", {
      key: 0,
      class: x(T(a)),
      style: Ke({ backgroundColor: u.color }),
      onClick: l
    }, [
      K("span", {
        class: x(T(o).e("content"))
      }, [
        te(u.$slots, "default")
      ], 2),
      u.closable ? (k(), ae(T(En), {
        key: 0,
        class: x(T(o).e("close")),
        onClick: xe(s, ["stop"])
      }, {
        default: ee(() => [
          _e(T(Hr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : le("v-if", !0)
    ], 6)) : (k(), ae(Kn, {
      key: 1,
      name: `${T(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: i
    }, {
      default: ee(() => [
        K("span", {
          class: x(T(a)),
          style: Ke({ backgroundColor: u.color }),
          onClick: l
        }, [
          K("span", {
            class: x(T(o).e("content"))
          }, [
            te(u.$slots, "default")
          ], 2),
          u.closable ? (k(), ae(T(En), {
            key: 0,
            class: x(T(o).e("close")),
            onClick: xe(s, ["stop"])
          }, {
            default: ee(() => [
              _e(T(Hr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : le("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var lh = /* @__PURE__ */ Ee(sh, [["__file", "tag.vue"]]);
const ih = fn(lh), rn = /* @__PURE__ */ new Map();
if (Ne) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of rn.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function Qs(e, t) {
  let n = [];
  return wt(t.arg) ? n = t.arg : nt(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, l = o?.target, i = !t || !t.instance, u = !s || !l, f = e.contains(s) || e.contains(l), p = e === s, d = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(l), v = a && (a.contains(s) || a.contains(l));
    i || u || f || p || d || v || t.value(r, o);
  };
}
const uh = {
  beforeMount(e, t) {
    rn.has(e) || rn.set(e, []), rn.get(e).push({
      documentHandler: Qs(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    rn.has(e) || rn.set(e, []);
    const n = rn.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Qs(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    rn.delete(e);
  }
}, Et = {};
function ch() {
  const e = gr(), t = F(0), n = 11, r = L(() => ({
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
const Wi = Symbol("ElSelectGroup"), po = Symbol("ElSelect");
function fh(e, t) {
  const n = ue(po), r = ue(Wi, { disabled: !1 }), o = L(() => f(an(n.props.modelValue), e.value)), a = L(() => {
    var v;
    if (n.props.multiple) {
      const g = an((v = n.props.modelValue) != null ? v : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = L(() => e.label || (Tt(e.value) ? "" : e.value)), l = L(() => e.value || e.label || ""), i = L(() => e.disabled || t.groupDisabled || a.value), u = Be(), f = (v = [], g) => {
    if (Tt(e.value)) {
      const m = n.props.valueKey;
      return v && v.some((O) => Zu(ln(O, m)) === ln(g, m));
    } else
      return v && v.includes(g);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, d = (v) => {
    const g = new RegExp(rh(v), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return Z(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Z(() => e.value, (v, g) => {
    const { remote: m, valueKey: O } = n.props;
    if ((m ? v !== g : !nr(v, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !m) {
      if (O && Tt(v) && Tt(g) && v[O] === g[O])
        return;
      n.setSelected();
    }
  }), Z(() => r.disabled, () => {
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
const dh = H({
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
    const t = $e("select"), n = io(), r = L(() => [
      t.be("dropdown", "item"),
      t.is("disabled", T(l)),
      t.is("selected", T(s)),
      t.is("hovering", T(d))
    ]), o = Fn({
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
    } = fh(e, o), { visible: p, hover: d } = oa(o), v = Be().proxy;
    i.onOptionCreate(v), Rt(() => {
      const m = v.value, { selected: O } = i.states, c = O.some((h) => h.value === v.value);
      We(() => {
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
function ph(e, t, n, r, o, a) {
  return tt((k(), z("li", {
    id: e.id,
    class: x(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: xe(e.selectOptionClick, ["stop"])
  }, [
    te(e.$slots, "default", {}, () => [
      K("span", null, He(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [zt, e.visible]
  ]);
}
var Aa = /* @__PURE__ */ Ee(dh, [["render", ph], ["__file", "option.vue"]]);
const mh = H({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ue(po), t = $e("select"), n = L(() => e.props.popperClass), r = L(() => e.props.multiple), o = L(() => e.props.fitInputWidth), a = F("");
    function s() {
      var l;
      a.value = `${(l = e.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return Re(() => {
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
function vh(e, t, n, r, o, a) {
  return k(), z("div", {
    class: x([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ke({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (k(), z("div", {
      key: 0,
      class: x(e.ns.be("dropdown", "header"))
    }, [
      te(e.$slots, "header")
    ], 2)) : le("v-if", !0),
    te(e.$slots, "default"),
    e.$slots.footer ? (k(), z("div", {
      key: 1,
      class: x(e.ns.be("dropdown", "footer"))
    }, [
      te(e.$slots, "footer")
    ], 2)) : le("v-if", !0)
  ], 6);
}
var gh = /* @__PURE__ */ Ee(mh, [["render", vh], ["__file", "select-dropdown.vue"]]);
const _h = (e, t) => {
  const { t: n } = si(), r = io(), o = $e("select"), a = $e("input"), s = Fn({
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
  }), l = F(null), i = F(null), u = F(null), f = F(null), p = F(null), d = F(null), v = F(null), g = F(null), m = F(null), O = F(null), c = F(null), {
    isComposing: h,
    handleCompositionStart: C,
    handleCompositionUpdate: b,
    handleCompositionEnd: w
  } = hv({
    afterComposition: (S) => ce(S)
  }), { wrapperRef: N, isFocused: E, handleBlur: R } = gv(p, {
    beforeFocus() {
      return oe.value;
    },
    afterFocus() {
      e.automaticDropdown && !D.value && (D.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(S) {
      var M, G;
      return ((M = u.value) == null ? void 0 : M.isFocusInsideContent(S)) || ((G = f.value) == null ? void 0 : G.isFocusInsideContent(S));
    },
    afterBlur() {
      D.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), D = F(!1), B = F(), { form: Y, formItem: W } = mv(), { inputId: Q } = vv(e, {
    formItemContext: W
  }), { valueOnClear: Se, isEmptyValue: me } = Dm(e), oe = L(() => e.disabled || Y?.disabled), V = L(() => wt(e.modelValue) ? e.modelValue.length > 0 : !me(e.modelValue)), ge = L(() => {
    var S;
    return (S = Y?.statusIcon) != null ? S : !1;
  }), Te = L(() => e.clearable && !oe.value && s.inputHovering && V.value), we = L(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), lt = L(() => o.is("reverse", we.value && D.value)), Qe = L(() => W?.validateState || ""), pt = L(() => cv[Qe.value]), Ye = L(() => e.remote ? 300 : 0), Ue = L(() => e.remote && !s.inputValue && s.options.size === 0), Mt = L(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ve.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ve = L(() => fe.value.filter((S) => S.visible).length), fe = L(() => {
    const S = Array.from(s.options.values()), M = [];
    return s.optionValues.forEach((G) => {
      const Ce = S.findIndex((Xe) => Xe.value === G);
      Ce > -1 && M.push(S[Ce]);
    }), M.length >= S.length ? M : S;
  }), vn = L(() => Array.from(s.cachedOptions.values())), Zt = L(() => {
    const S = fe.value.filter((M) => !M.created).some((M) => M.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !S;
  }), mt = () => {
    e.filterable && Le(e.filterMethod) || e.filterable && e.remote && Le(e.remoteMethod) || fe.value.forEach((S) => {
      var M;
      (M = S.updateOption) == null || M.call(S, s.inputValue);
    });
  }, Qt = yi(), vt = L(() => ["small"].includes(Qt.value) ? "small" : "default"), kt = L({
    get() {
      return D.value && !Ue.value;
    },
    set(S) {
      D.value = S;
    }
  }), it = L(() => {
    if (e.multiple && !Mn(e.modelValue))
      return an(e.modelValue).length === 0 && !s.inputValue;
    const S = wt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Mn(S) ? !s.inputValue : !0;
  }), gt = L(() => {
    var S;
    const M = (S = e.placeholder) != null ? S : n("el.select.placeholder");
    return e.multiple || !V.value ? M : s.selectedLabel;
  }), en = L(() => $o ? null : "mouseenter");
  Z(() => e.modelValue, (S, M) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", _("")), A(), !nr(S, M) && e.validateEvent && W?.validate("change").catch((G) => ot(G));
  }, {
    flush: "post",
    deep: !0
  }), Z(() => D.value, (S) => {
    S ? _(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", S);
  }), Z(() => s.options.entries(), () => {
    Ne && (A(), e.defaultFirstOption && (e.filterable || e.remote) && Ve.value && y());
  }, {
    flush: "post"
  }), Z([() => s.hoveringIndex, fe], ([S]) => {
    Fe(S) && S > -1 ? B.value = fe.value[S] || {} : B.value = {}, fe.value.forEach((M) => {
      M.hover = B.value === M;
    });
  }), Pl(() => {
    s.isBeforeHide || mt();
  });
  const _ = (S) => {
    s.previousQuery === S || h.value || (s.previousQuery = S, e.filterable && Le(e.filterMethod) ? e.filterMethod(S) : e.filterable && e.remote && Le(e.remoteMethod) && e.remoteMethod(S), e.defaultFirstOption && (e.filterable || e.remote) && Ve.value ? We(y) : We(se));
  }, y = () => {
    const S = fe.value.filter((Xe) => Xe.visible && !Xe.disabled && !Xe.states.groupDisabled), M = S.find((Xe) => Xe.created), G = S[0], Ce = fe.value.map((Xe) => Xe.value);
    s.hoveringIndex = xa(Ce, M || G);
  }, A = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const M = wt(e.modelValue) ? e.modelValue[0] : e.modelValue, G = $(M);
      s.selectedLabel = G.currentLabel, s.selected = [G];
      return;
    }
    const S = [];
    Mn(e.modelValue) || an(e.modelValue).forEach((M) => {
      S.push($(M));
    }), s.selected = S;
  }, $ = (S) => {
    let M;
    const G = Qu(S);
    for (let Sn = s.cachedOptions.size - 1; Sn >= 0; Sn--) {
      const nn = vn.value[Sn];
      if (G ? ln(nn.value, e.valueKey) === ln(S, e.valueKey) : nn.value === S) {
        M = {
          value: S,
          currentLabel: nn.currentLabel,
          get isDisabled() {
            return nn.isDisabled;
          }
        };
        break;
      }
    }
    if (M)
      return M;
    const Ce = G ? S.label : S ?? "";
    return {
      value: S,
      currentLabel: Ce
    };
  }, se = () => {
    s.hoveringIndex = fe.value.findIndex((S) => s.selected.some((M) => Tr(M) === Tr(S)));
  }, de = () => {
    s.selectionWidth = i.value.getBoundingClientRect().width;
  }, X = () => {
    s.collapseItemWidth = O.value.getBoundingClientRect().width;
  }, I = () => {
    var S, M;
    (M = (S = u.value) == null ? void 0 : S.updatePopper) == null || M.call(S);
  }, P = () => {
    var S, M;
    (M = (S = f.value) == null ? void 0 : S.updatePopper) == null || M.call(S);
  }, J = () => {
    s.inputValue.length > 0 && !D.value && (D.value = !0), _(s.inputValue);
  }, ce = (S) => {
    if (s.inputValue = S.target.value, e.remote)
      _t();
    else
      return J();
  }, _t = Hp(() => {
    J();
  }, Ye.value), ht = (S) => {
    nr(e.modelValue, S) || t(pi, S);
  }, tn = (S) => jp(S, (M) => {
    const G = s.cachedOptions.get(M);
    return G && !G.disabled && !G.states.groupDisabled;
  }), Ft = (S) => {
    if (e.multiple && S.code !== Ct.delete && S.target.value.length <= 0) {
      const M = an(e.modelValue).slice(), G = tn(M);
      if (G < 0)
        return;
      const Ce = M[G];
      M.splice(G, 1), t(An, M), ht(M), t("remove-tag", Ce);
    }
  }, ho = (S, M) => {
    const G = s.selected.indexOf(M);
    if (G > -1 && !oe.value) {
      const Ce = an(e.modelValue).slice();
      Ce.splice(G, 1), t(An, Ce), ht(Ce), t("remove-tag", M.value);
    }
    S.stopPropagation(), Or();
  }, Yn = (S) => {
    S.stopPropagation();
    const M = e.multiple ? [] : Se.value;
    if (e.multiple)
      for (const G of s.selected)
        G.isDisabled && M.push(G.value);
    t(An, M), ht(M), s.hoveringIndex = -1, D.value = !1, t("clear"), Or();
  }, Ba = (S) => {
    var M;
    if (e.multiple) {
      const G = an((M = e.modelValue) != null ? M : []).slice(), Ce = xa(G, S);
      Ce > -1 ? G.splice(Ce, 1) : (e.multipleLimit <= 0 || G.length < e.multipleLimit) && G.push(S.value), t(An, G), ht(G), S.created && _(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(An, S.value), ht(S.value), D.value = !1;
    Or(), !D.value && We(() => {
      Er(S);
    });
  }, xa = (S = [], M) => Mn(M) ? -1 : Tt(M.value) ? S.findIndex((G) => nr(ln(G, e.valueKey), Tr(M))) : S.indexOf(M.value), Er = (S) => {
    var M, G, Ce, Xe, Sn;
    const nn = wt(S) ? S[0] : S;
    let wr = null;
    if (nn?.value) {
      const Xn = fe.value.filter((Bu) => Bu.value === nn.value);
      Xn.length > 0 && (wr = Xn[0].$el);
    }
    if (u.value && wr) {
      const Xn = (Xe = (Ce = (G = (M = u.value) == null ? void 0 : M.popperRef) == null ? void 0 : G.contentRef) == null ? void 0 : Ce.querySelector) == null ? void 0 : Xe.call(Ce, `.${o.be("dropdown", "wrap")}`);
      Xn && $m(Xn, wr);
    }
    (Sn = c.value) == null || Sn.handleScroll();
  }, wu = (S) => {
    s.options.set(S.value, S), s.cachedOptions.set(S.value, S);
  }, Cu = (S, M) => {
    s.options.get(S) === M && s.options.delete(S);
  }, Nu = L(() => {
    var S, M;
    return (M = (S = u.value) == null ? void 0 : S.popperRef) == null ? void 0 : M.contentRef;
  }), Su = () => {
    s.isBeforeHide = !1, We(() => {
      var S;
      (S = c.value) == null || S.update(), Er(s.selected);
    });
  }, Or = () => {
    var S;
    (S = p.value) == null || S.focus();
  }, Iu = () => {
    var S;
    if (D.value) {
      D.value = !1, We(() => {
        var M;
        return (M = p.value) == null ? void 0 : M.blur();
      });
      return;
    }
    (S = p.value) == null || S.blur();
  }, Lu = (S) => {
    Yn(S);
  }, Au = (S) => {
    if (D.value = !1, E.value) {
      const M = new FocusEvent("focus", S);
      We(() => R(M));
    }
  }, Pu = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : D.value = !1;
  }, Wa = () => {
    oe.value || ($o && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : D.value = !D.value);
  }, Ru = () => {
    if (!D.value)
      Wa();
    else {
      const S = fe.value[s.hoveringIndex];
      S && !S.isDisabled && Ba(S);
    }
  }, Tr = (S) => Tt(S.value) ? ln(S.value, e.valueKey) : S.value, Du = L(() => fe.value.filter((S) => S.visible).every((S) => S.isDisabled)), Mu = L(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), ku = L(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Ha = (S) => {
    if (!D.value) {
      D.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ve.value === 0 || h.value) && !Du.value) {
      S === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : S === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const M = fe.value[s.hoveringIndex];
      (M.isDisabled || !M.visible) && Ha(S), We(() => Er(B.value));
    }
  }, Fu = () => {
    if (!i.value)
      return 0;
    const S = window.getComputedStyle(i.value);
    return Number.parseFloat(S.gap || "6px");
  }, $u = L(() => {
    const S = Fu();
    return { maxWidth: `${O.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - S : s.selectionWidth}px` };
  }), Uu = L(() => ({ maxWidth: `${s.selectionWidth}px` })), Vu = (S) => {
    t("popup-scroll", S);
  };
  return Bt(i, de), Bt(g, I), Bt(N, I), Bt(m, P), Bt(O, X), Re(() => {
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
    selectSize: Qt,
    filteredOptionsCount: Ve,
    updateTooltip: I,
    updateTagTooltip: P,
    debouncedOnInputChange: _t,
    onInput: ce,
    deletePrevTag: Ft,
    deleteTag: ho,
    deleteSelected: Yn,
    handleOptionSelect: Ba,
    scrollToOption: Er,
    hasModelValue: V,
    shouldShowPlaceholder: it,
    currentPlaceholder: gt,
    mouseEnterEventName: en,
    needStatusIcon: ge,
    showClose: Te,
    iconComponent: we,
    iconReverse: lt,
    validateState: Qe,
    validateIcon: pt,
    showNewOption: Zt,
    updateOptions: mt,
    collapseTagSize: vt,
    setSelected: A,
    selectDisabled: oe,
    emptyText: Mt,
    handleCompositionStart: C,
    handleCompositionUpdate: b,
    handleCompositionEnd: w,
    onOptionCreate: wu,
    onOptionDestroy: Cu,
    handleMenuEnter: Su,
    focus: Or,
    blur: Iu,
    handleClearClick: Lu,
    handleClickOutside: Au,
    handleEsc: Pu,
    toggleMenu: Wa,
    selectOption: Ru,
    getValueKey: Tr,
    navigateOptions: Ha,
    dropdownMenuVisible: kt,
    showTagList: Mu,
    collapseTagList: ku,
    popupScroll: Vu,
    tagStyle: $u,
    collapseTagStyle: Uu,
    popperRef: Nu,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: d,
    suffixRef: v,
    selectRef: l,
    wrapperRef: N,
    selectionRef: i,
    scrollbarRef: c,
    menuRef: g,
    tagMenuRef: m,
    collapseItemRef: O
  };
};
var hh = H({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ue(po);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function i(u) {
        wt(u) && u.forEach((f) => {
          var p, d, v, g;
          const m = (p = f?.type || {}) == null ? void 0 : p.name;
          m === "ElOptionGroup" ? i(!St(f.children) && !wt(f.children) && Le((d = f.children) == null ? void 0 : d.default) ? (v = f.children) == null ? void 0 : v.default() : f.children) : m === "ElOption" ? l.push((g = f.props) == null ? void 0 : g.value) : wt(f.children) && i(f.children);
        });
      }
      return s.length && i((a = s[0]) == null ? void 0 : a.children), nr(l, r) || (r = l, n && (n.states.optionValues = l)), s;
    };
  }
});
const yh = be({
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
  size: Sm,
  effect: {
    type: q(String),
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
    type: q(Object),
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
  teleported: La.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: jr,
    default: gi
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: jr,
    default: Hm
  },
  tagType: { ...Ho.type, default: "info" },
  tagEffect: { ...Ho.effect, default: "light" },
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
    type: q(String),
    values: co,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: q(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Rm,
  ...lo(["ariaLabel"])
}), el = "ElSelect", bh = H({
  name: el,
  componentName: el,
  components: {
    ElSelectMenu: gh,
    ElOption: Aa,
    ElOptions: hh,
    ElTag: ih,
    ElScrollbar: Rv,
    ElTooltip: J_,
    ElIcon: En
  },
  directives: { ClickOutside: uh },
  props: yh,
  emits: [
    An,
    pi,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = L(() => {
      const { modelValue: i, multiple: u } = e, f = u ? [] : void 0;
      return wt(i) ? u ? i : f : u ? f : i;
    }), r = Fn({
      ...oa(e),
      modelValue: n
    }), o = _h(r, t), { calculatorRef: a, inputStyle: s } = ch();
    It(po, Fn({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const l = L(() => e.multiple ? o.states.selected.map((i) => i.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: l,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function Eh(e, t, n, r, o, a) {
  const s = gn("el-tag"), l = gn("el-tooltip"), i = gn("el-icon"), u = gn("el-option"), f = gn("el-options"), p = gn("el-scrollbar"), d = gn("el-select-menu"), v = ec("click-outside");
  return tt((k(), z("div", {
    ref: "selectRef",
    class: x([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [nc(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
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
          K("div", {
            ref: "wrapperRef",
            class: x([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: xe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (k(), z("div", {
              key: 0,
              ref: "prefixRef",
              class: x(e.nsSelect.e("prefix"))
            }, [
              te(e.$slots, "prefix")
            ], 2)) : le("v-if", !0),
            K("div", {
              ref: "selectionRef",
              class: x([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? te(e.$slots, "tag", { key: 0 }, () => [
                (k(!0), z(un, null, Ka(e.showTagList, (m) => (k(), z("div", {
                  key: e.getValueKey(m),
                  class: x(e.nsSelect.e("selected-item"))
                }, [
                  _e(s, {
                    closable: !e.selectDisabled && !m.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ke(e.tagStyle),
                    onClose: (O) => e.deleteTag(O, m)
                  }, {
                    default: ee(() => [
                      K("span", {
                        class: x(e.nsSelect.e("tags-text"))
                      }, [
                        te(e.$slots, "label", {
                          label: m.currentLabel,
                          value: m.value
                        }, () => [
                          Ao(He(m.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (k(), ae(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ee(() => [
                    K("div", {
                      ref: "collapseItemRef",
                      class: x(e.nsSelect.e("selected-item"))
                    }, [
                      _e(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ke(e.collapseTagStyle)
                      }, {
                        default: ee(() => [
                          K("span", {
                            class: x(e.nsSelect.e("tags-text"))
                          }, " + " + He(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ee(() => [
                    K("div", {
                      ref: "tagMenuRef",
                      class: x(e.nsSelect.e("selection"))
                    }, [
                      (k(!0), z(un, null, Ka(e.collapseTagList, (m) => (k(), z("div", {
                        key: e.getValueKey(m),
                        class: x(e.nsSelect.e("selected-item"))
                      }, [
                        _e(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !m.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (O) => e.deleteTag(O, m)
                        }, {
                          default: ee(() => [
                            K("span", {
                              class: x(e.nsSelect.e("tags-text"))
                            }, [
                              te(e.$slots, "label", {
                                label: m.currentLabel,
                                value: m.value
                              }, () => [
                                Ao(He(m.currentLabel), 1)
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
              K("div", {
                class: x([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                tt(K("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (m) => e.states.inputValue = m,
                  type: "text",
                  name: e.name,
                  class: x([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ke(e.inputStyle),
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
                    qn(xe((m) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    qn(xe((m) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    qn(xe(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    qn(xe(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    qn(xe(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: xe(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [tc, e.states.inputValue]
                ]),
                e.filterable ? (k(), z("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: x(e.nsSelect.e("input-calculator")),
                  textContent: He(e.states.inputValue)
                }, null, 10, ["textContent"])) : le("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (k(), z("div", {
                key: 1,
                class: x([
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
                  K("span", null, He(e.currentPlaceholder), 1)
                ]) : (k(), z("span", { key: 1 }, He(e.currentPlaceholder), 1))
              ], 2)) : le("v-if", !0)
            ], 2),
            K("div", {
              ref: "suffixRef",
              class: x(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (k(), ae(i, {
                key: 0,
                class: x([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ee(() => [
                  (k(), ae(kn(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : le("v-if", !0),
              e.showClose && e.clearIcon ? (k(), ae(i, {
                key: 1,
                class: x([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ee(() => [
                  (k(), ae(kn(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : le("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (k(), ae(i, {
                key: 2,
                class: x([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ee(() => [
                  (k(), ae(kn(e.validateIcon)))
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
            e.$slots.header ? (k(), z("div", {
              key: 0,
              class: x(e.nsSelect.be("dropdown", "header")),
              onClick: xe(() => {
              }, ["stop"])
            }, [
              te(e.$slots, "header")
            ], 10, ["onClick"])) : le("v-if", !0),
            tt(_e(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: x([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: ee(() => [
                e.showNewOption ? (k(), ae(u, {
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
              [zt, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (k(), z("div", {
              key: 1,
              class: x(e.nsSelect.be("dropdown", "loading"))
            }, [
              te(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (k(), z("div", {
              key: 2,
              class: x(e.nsSelect.be("dropdown", "empty"))
            }, [
              te(e.$slots, "empty", {}, () => [
                K("span", null, He(e.emptyText), 1)
              ])
            ], 2)) : le("v-if", !0),
            e.$slots.footer ? (k(), z("div", {
              key: 3,
              class: x(e.nsSelect.be("dropdown", "footer")),
              onClick: xe(() => {
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
var Oh = /* @__PURE__ */ Ee(bh, [["render", Eh], ["__file", "select.vue"]]);
const Th = H({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = $e("select"), n = F(null), r = Be(), o = F([]);
    It(Wi, Fn({
      ...oa(e)
    }));
    const a = L(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, p;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, l = (u) => {
      const f = an(u), p = [];
      return f.forEach((d) => {
        var v, g;
        s(d) ? p.push(d.component.proxy) : (v = d.children) != null && v.length ? p.push(...l(d.children)) : (g = d.component) != null && g.subTree && p.push(...l(d.component.subTree));
      }), p;
    }, i = () => {
      o.value = l(r.subTree);
    };
    return Re(() => {
      i();
    }), vm(n, i, {
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
function wh(e, t, n, r, o, a) {
  return tt((k(), z("ul", {
    ref: "groupRef",
    class: x(e.ns.be("group", "wrap"))
  }, [
    K("li", {
      class: x(e.ns.be("group", "title"))
    }, He(e.label), 3),
    K("li", null, [
      K("ul", {
        class: x(e.ns.b("group"))
      }, [
        te(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [zt, e.visible]
  ]);
}
var Hi = /* @__PURE__ */ Ee(Th, [["render", wh], ["__file", "option-group.vue"]]);
const Lb = fn(Oh, {
  Option: Aa,
  OptionGroup: Hi
}), Ab = vi(Aa);
vi(Hi);
const ji = ["success", "info", "warning", "error"], De = fv({
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
  appendTo: Ne ? document.body : void 0
}), Ch = be({
  customClass: {
    type: String,
    default: De.customClass
  },
  center: {
    type: Boolean,
    default: De.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: De.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: De.duration
  },
  icon: {
    type: jr,
    default: De.icon
  },
  id: {
    type: String,
    default: De.id
  },
  message: {
    type: q([
      String,
      Object,
      Function
    ]),
    default: De.message
  },
  onClose: {
    type: q(Function),
    default: De.onClose
  },
  showClose: {
    type: Boolean,
    default: De.showClose
  },
  type: {
    type: String,
    values: ji,
    default: De.type
  },
  plain: {
    type: Boolean,
    default: De.plain
  },
  offset: {
    type: Number,
    default: De.offset
  },
  zIndex: {
    type: Number,
    default: De.zIndex
  },
  grouping: {
    type: Boolean,
    default: De.grouping
  },
  repeatNum: {
    type: Number,
    default: De.repeatNum
  }
}), Nh = {
  destroy: () => !0
}, ut = rc([]), Sh = (e) => {
  const t = ut.findIndex((o) => o.id === e), n = ut[t];
  let r;
  return t > 0 && (r = ut[t - 1]), { current: n, prev: r };
}, Ih = (e) => {
  const { prev: t } = Sh(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Lh = (e, t) => ut.findIndex((r) => r.id === e) > 0 ? 16 : t, Ah = H({
  name: "ElMessage"
}), Ph = /* @__PURE__ */ H({
  ...Ah,
  props: Ch,
  emits: Nh,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = uv, { ns: o, zIndex: a } = di("message"), { currentZIndex: s, nextZIndex: l } = a, i = F(), u = F(!1), f = F(0);
    let p;
    const d = L(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = L(() => {
      const E = n.type;
      return { [o.bm("icon", E)]: E && Kr[E] };
    }), g = L(() => n.icon || Kr[n.type] || ""), m = L(() => Ih(n.id)), O = L(() => Lh(n.id, n.offset) + m.value), c = L(() => f.value + O.value), h = L(() => ({
      top: `${O.value}px`,
      zIndex: s.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: p } = Ql(() => {
        w();
      }, n.duration));
    }
    function b() {
      p?.();
    }
    function w() {
      u.value = !1;
    }
    function N({ code: E }) {
      E === Ct.esc && w();
    }
    return Re(() => {
      C(), l(), u.value = !0;
    }), Z(() => n.repeatNum, () => {
      b(), C();
    }), qe(document, "keydown", N), Bt(i, () => {
      f.value = i.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: c,
      close: w
    }), (E, R) => (k(), ae(Kn, {
      name: T(o).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (D) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        tt(K("div", {
          id: E.id,
          ref_key: "messageRef",
          ref: i,
          class: x([
            T(o).b(),
            { [T(o).m(E.type)]: E.type },
            T(o).is("center", E.center),
            T(o).is("closable", E.showClose),
            T(o).is("plain", E.plain),
            E.customClass
          ]),
          style: Ke(T(h)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: C
        }, [
          E.repeatNum > 1 ? (k(), ae(T(nh), {
            key: 0,
            value: E.repeatNum,
            type: T(d),
            class: x(T(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : le("v-if", !0),
          T(g) ? (k(), ae(T(En), {
            key: 1,
            class: x([T(o).e("icon"), T(v)])
          }, {
            default: ee(() => [
              (k(), ae(kn(T(g))))
            ]),
            _: 1
          }, 8, ["class"])) : le("v-if", !0),
          te(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (k(), z(un, { key: 1 }, [
              le(" Caution here, message could've been compromised, never use user's input as message "),
              K("p", {
                class: x(T(o).e("content")),
                innerHTML: E.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), z("p", {
              key: 0,
              class: x(T(o).e("content"))
            }, He(E.message), 3))
          ]),
          E.showClose ? (k(), ae(T(En), {
            key: 2,
            class: x(T(o).e("closeBtn")),
            onClick: xe(w, ["stop"])
          }, {
            default: ee(() => [
              _e(T(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : le("v-if", !0)
        ], 46, ["id"]), [
          [zt, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Rh = /* @__PURE__ */ Ee(Ph, [["__file", "message.vue"]]);
let Dh = 1;
const Ki = (e) => {
  const t = !e || St(e) || sr(e) || Le(e) ? { message: e } : e, n = {
    ...De,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (St(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    nt(r) || (ot("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), r = document.body), n.appendTo = r;
  }
  return xr(Et.grouping) && !n.grouping && (n.grouping = Et.grouping), Fe(Et.duration) && n.duration === 3e3 && (n.duration = Et.duration), Fe(Et.offset) && n.offset === 16 && (n.offset = Et.offset), xr(Et.showClose) && !n.showClose && (n.showClose = Et.showClose), n;
}, Mh = (e) => {
  const t = ut.indexOf(e);
  if (t === -1)
    return;
  ut.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, kh = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Dh++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), Mh(f);
    },
    onDestroy: () => {
      Ur(null, a);
    }
  }, l = _e(Rh, s, Le(s.message) || sr(s.message) ? {
    default: Le(s.message) ? s.message : () => s.message
  } : null);
  l.appContext = n || Wn._context, Ur(l, a), e.appendChild(a.firstElementChild);
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
}, Wn = (e = {}, t) => {
  if (!Ne)
    return { close: () => {
    } };
  const n = Ki(e);
  if (n.grouping && ut.length) {
    const o = ut.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Fe(Et.max) && ut.length >= Et.max)
    return { close: () => {
    } };
  const r = kh(n, t);
  return ut.push(r), r.handler;
};
ji.forEach((e) => {
  Wn[e] = (t = {}, n) => {
    const r = Ki(t);
    return Wn({ ...r, type: e }, n);
  };
});
function Fh(e) {
  for (const t of ut)
    (!e || e === t.props.type) && t.handler.close();
}
Wn.closeAll = Fh;
Wn._context = null;
const $h = mi(Wn, "$message"), zi = [
  "success",
  "info",
  "warning",
  "error"
], Uh = be({
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
    type: jr
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: q([
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
    type: q(Function),
    default: () => {
    }
  },
  onClose: {
    type: q(Function),
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
    values: [...zi, ""],
    default: ""
  },
  zIndex: Number
}), Vh = {
  destroy: () => !0
}, Bh = H({
  name: "ElNotification"
}), xh = /* @__PURE__ */ H({
  ...Bh,
  props: Uh,
  emits: Vh,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = di("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: l } = iv, i = F(!1);
    let u;
    const f = L(() => {
      const C = n.type;
      return C && Kr[n.type] ? r.m(C) : "";
    }), p = L(() => n.type && Kr[n.type] || n.icon), d = L(() => n.position.endsWith("right") ? "right" : "left"), v = L(() => n.position.startsWith("top") ? "top" : "bottom"), g = L(() => {
      var C;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : s.value
      };
    });
    function m() {
      n.duration > 0 && ({ stop: u } = Ql(() => {
        i.value && c();
      }, n.duration));
    }
    function O() {
      u?.();
    }
    function c() {
      i.value = !1;
    }
    function h({ code: C }) {
      C === Ct.delete || C === Ct.backspace ? O() : C === Ct.esc ? i.value && c() : m();
    }
    return Re(() => {
      m(), a(), i.value = !0;
    }), qe(document, "keydown", h), t({
      visible: i,
      close: c
    }), (C, b) => (k(), ae(Kn, {
      name: T(r).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (w) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        tt(K("div", {
          id: C.id,
          class: x([T(r).b(), C.customClass, T(d)]),
          style: Ke(T(g)),
          role: "alert",
          onMouseenter: O,
          onMouseleave: m,
          onClick: C.onClick
        }, [
          T(p) ? (k(), ae(T(En), {
            key: 0,
            class: x([T(r).e("icon"), T(f)])
          }, {
            default: ee(() => [
              (k(), ae(kn(T(p))))
            ]),
            _: 1
          }, 8, ["class"])) : le("v-if", !0),
          K("div", {
            class: x(T(r).e("group"))
          }, [
            K("h2", {
              class: x(T(r).e("title")),
              textContent: He(C.title)
            }, null, 10, ["textContent"]),
            tt(K("div", {
              class: x(T(r).e("content")),
              style: Ke(C.title ? void 0 : { margin: 0 })
            }, [
              te(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (k(), z(un, { key: 1 }, [
                  le(" Caution here, message could've been compromised, never use user's input as message "),
                  K("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), z("p", { key: 0 }, He(C.message), 1))
              ])
            ], 6), [
              [zt, C.message]
            ]),
            C.showClose ? (k(), ae(T(En), {
              key: 0,
              class: x(T(r).e("closeBtn")),
              onClick: xe(c, ["stop"])
            }, {
              default: ee(() => [
                _e(T(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : le("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [zt, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Wh = /* @__PURE__ */ Ee(xh, [["__file", "notification.vue"]]);
const Yr = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, jo = 16;
let Hh = 1;
const Hn = function(e = {}, t) {
  if (!Ne)
    return { close: () => {
    } };
  (St(e) || sr(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Yr[n].forEach(({ vm: f }) => {
    var p;
    r += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + jo;
  }), r += jo;
  const o = `notification_${Hh++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      jh(o, n, a);
    }
  };
  let l = document.body;
  nt(e.appendTo) ? l = e.appendTo : St(e.appendTo) && (l = document.querySelector(e.appendTo)), nt(l) || (ot("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), l = document.body);
  const i = document.createElement("div"), u = _e(Wh, s, Le(s.message) ? s.message : sr(s.message) ? () => s.message : null);
  return u.appContext = Mn(t) ? Hn._context : t, u.props.onDestroy = () => {
    Ur(null, i);
  }, Ur(u, i), Yr[n].push({ vm: u }), l.appendChild(i.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
zi.forEach((e) => {
  Hn[e] = (t = {}, n) => ((St(t) || sr(t)) && (t = {
    message: t
  }), Hn({ ...t, type: e }, n));
});
function jh(e, t, n) {
  const r = Yr[t], o = r.findIndex(({ vm: u }) => {
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
      const { el: f, component: p } = r[u].vm, d = Number.parseInt(f.style[l], 10) - s - jo;
      p.props.offset = d;
    }
}
function Kh() {
  for (const e of Object.values(Yr))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Hn.closeAll = Kh;
Hn._context = null;
const zh = mi(Hn, "$notify");
function Gh(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Yh(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var kr;
const Pb = "__TAURI_TO_IPC_KEY__";
function Xh(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Kt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function qh(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Rb {
  get rid() {
    return Gh(this, kr, "f");
  }
  constructor(t) {
    kr.set(this, void 0), Yh(this, kr, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return Kt("plugin:resources|close", {
      rid: this.rid
    });
  }
}
kr = /* @__PURE__ */ new WeakMap();
var tl;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(tl || (tl = {}));
async function Gi(e, t) {
  await Kt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Jh(e, t, n) {
  var r;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return Kt("plugin:event|listen", {
    event: e,
    target: o,
    handler: Xh(t)
  }).then((a) => async () => Gi(e, a));
}
async function Db(e, t, n) {
  return Jh(e, (r) => {
    Gi(e, r.id), t(r);
  }, n);
}
async function Mb(e, t) {
  await Kt("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function kb(e, t, n) {
  await Kt("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
const Fb = {
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
    r === "center" ? $h({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0
    }) : zh({
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
function Pt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const nl = {};
function Zh(e) {
  nl[e] || (nl[e] = !0, Pt(e));
}
const Yt = typeof window < "u";
let Je, Tn;
if (process.env.NODE_ENV !== "production") {
  const e = Yt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Je = (t) => {
    e.mark(t);
  }, Tn = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const Qh = /\{([0-9a-zA-Z]+)\}/g;
function mo(e, ...t) {
  return t.length === 1 && re(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Qh, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Jt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), e0 = (e, t, n) => t0({ l: e, k: t, s: n }), t0 = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ie = (e) => typeof e == "number" && isFinite(e), n0 = (e) => Pa(e) === "[object Date]", Xr = (e) => Pa(e) === "[object RegExp]", vo = (e) => ne(e) && Object.keys(e).length === 0, Ae = Object.assign, r0 = Object.create, ie = (e = null) => r0(e);
let rl;
const hn = () => rl || (rl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ie());
function ol(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function al(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function o0(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${al(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${al(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && Pt("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const a0 = Object.prototype.hasOwnProperty;
function ct(e, t) {
  return a0.call(e, t);
}
const ye = Array.isArray, ve = (e) => typeof e == "function", U = (e) => typeof e == "string", he = (e) => typeof e == "boolean", re = (e) => e !== null && typeof e == "object", s0 = (e) => re(e) && ve(e.then) && ve(e.catch), Yi = Object.prototype.toString, Pa = (e) => Yi.call(e), ne = (e) => Pa(e) === "[object Object]", l0 = (e) => e == null ? "" : ye(e) || ne(e) && e.toString === Yi ? JSON.stringify(e, null, 2) : String(e);
function Ra(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const sl = 2;
function i0(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let o = 0;
  const a = [];
  for (let s = 0; s < r.length; s++)
    if (o += r[s].length + 1, o >= t) {
      for (let l = s - sl; l <= s + sl || n > o; l++) {
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
function u0() {
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
const Ar = (e) => !re(e) || ye(e);
function Fr(e, t) {
  if (Ar(e) || Ar(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (re(r[a]) && !re(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : ie()), Ar(o[a]) || Ar(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function c0(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ko(e, t, n) {
  return { start: e, end: t };
}
const j = {
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
}, f0 = 17, d0 = {
  // tokenizer error messages
  [j.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [j.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [j.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [j.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [j.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [j.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [j.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [j.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [j.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [j.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [j.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [j.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [j.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [j.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [j.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [j.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Gn(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = process.env.NODE_ENV !== "production" ? mo((o || d0)[e] || "", ...a || []) : e, l = new SyntaxError(String(s));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function p0(e) {
  throw e;
}
const m0 = /<\/?[\w\s="/.':;#-\/]+>/, v0 = (e) => m0.test(e), yt = " ", g0 = "\r", Me = `
`, _0 = "\u2028", h0 = "\u2029";
function y0(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (E) => t[E] === g0 && t[E + 1] === Me, l = (E) => t[E] === Me, i = (E) => t[E] === h0, u = (E) => t[E] === _0, f = (E) => s(E) || l(E) || i(E) || u(E), p = () => n, d = () => r, v = () => o, g = () => a, m = (E) => s(E) || i(E) || u(E) ? Me : t[E], O = () => m(n), c = () => m(n + a);
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
  function N() {
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
    currentChar: O,
    currentPeek: c,
    next: h,
    peek: C,
    reset: b,
    resetPeek: w,
    skipToPeek: N
  };
}
const $t = void 0, b0 = ".", ll = "'", E0 = "tokenizer";
function O0(e, t = {}) {
  const n = t.location !== !1, r = y0(e), o = () => r.index(), a = () => c0(r.line(), r.column(), r.index()), s = a(), l = o(), i = {
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
      const de = n ? Ko(se.startLoc, y) : null, X = Gn(_, de, {
        domain: E0,
        args: $
      });
      f(X);
    }
  }
  function d(_, y, A) {
    _.endLoc = a(), _.currentType = y;
    const $ = { type: y };
    return n && ($.loc = Ko(_.startLoc, _.endLoc)), A != null && ($.value = A), $;
  }
  const v = (_) => d(
    _,
    13
    /* TokenTypes.EOF */
  );
  function g(_, y) {
    return _.currentChar() === y ? (_.next(), y) : (p(j.EXPECTED_TOKEN, a(), 0, y), "");
  }
  function m(_) {
    let y = "";
    for (; _.currentPeek() === yt || _.currentPeek() === Me; )
      y += _.currentPeek(), _.peek();
    return y;
  }
  function O(_) {
    const y = m(_);
    return _.skipToPeek(), y;
  }
  function c(_) {
    if (_ === $t)
      return !1;
    const y = _.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y === 95;
  }
  function h(_) {
    if (_ === $t)
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
    const $ = _.currentPeek() === ll;
    return _.resetPeek(), $;
  }
  function N(_, y) {
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
      return de === "{" ? c(_.peek()) : de === "@" || de === "|" || de === ":" || de === "." || de === yt || !de ? !1 : de === Me ? (_.peek(), $()) : Y(_, !1);
    }, se = $();
    return _.resetPeek(), se;
  }
  function B(_) {
    m(_);
    const y = _.currentPeek() === "|";
    return _.resetPeek(), y;
  }
  function Y(_, y = !0) {
    const A = (se = !1, de = "") => {
      const X = _.currentPeek();
      return X === "{" || X === "@" || !X ? se : X === "|" ? !(de === yt || de === Me) : X === yt ? (_.peek(), A(!0, yt)) : X === Me ? (_.peek(), A(!0, Me)) : !0;
    }, $ = A();
    return y && _.resetPeek(), $;
  }
  function W(_, y) {
    const A = _.currentChar();
    return A === $t ? $t : y(A) ? (_.next(), A) : null;
  }
  function Q(_) {
    const y = _.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y >= 48 && y <= 57 || // 0-9
    y === 95 || // _
    y === 36;
  }
  function Se(_) {
    return W(_, Q);
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
    return W(_, me);
  }
  function V(_) {
    const y = _.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function ge(_) {
    return W(_, V);
  }
  function Te(_) {
    const y = _.charCodeAt(0);
    return y >= 48 && y <= 57 || // 0-9
    y >= 65 && y <= 70 || // A-F
    y >= 97 && y <= 102;
  }
  function we(_) {
    return W(_, Te);
  }
  function lt(_) {
    let y = "", A = "";
    for (; y = ge(_); )
      A += y;
    return A;
  }
  function Qe(_) {
    let y = "";
    for (; ; ) {
      const A = _.currentChar();
      if (A === "{" || A === "}" || A === "@" || A === "|" || !A)
        break;
      if (A === yt || A === Me)
        if (Y(_))
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
  function pt(_) {
    O(_);
    let y = "", A = "";
    for (; y = oe(_); )
      A += y;
    const $ = _.currentChar();
    if ($ && $ !== "}" && $ !== $t && $ !== yt && $ !== Me && $ !== "　") {
      const se = Zt(_);
      return p(j.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, A + se), A + se;
    }
    return _.currentChar() === $t && p(j.UNTERMINATED_CLOSING_BRACE, a(), 0), A;
  }
  function Ye(_) {
    O(_);
    let y = "";
    return _.currentChar() === "-" ? (_.next(), y += `-${lt(_)}`) : y += lt(_), _.currentChar() === $t && p(j.UNTERMINATED_CLOSING_BRACE, a(), 0), y;
  }
  function Ue(_) {
    return _ !== ll && _ !== Me;
  }
  function Mt(_) {
    O(_), g(_, "'");
    let y = "", A = "";
    for (; y = W(_, Ue); )
      y === "\\" ? A += Ve(_) : A += y;
    const $ = _.currentChar();
    return $ === Me || $ === $t ? (p(j.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), $ === Me && (_.next(), g(_, "'")), A) : (g(_, "'"), A);
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
        return p(j.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, y), "";
    }
  }
  function fe(_, y, A) {
    g(_, y);
    let $ = "";
    for (let se = 0; se < A; se++) {
      const de = we(_);
      if (!de) {
        p(j.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${y}${$}${_.currentChar()}`);
        break;
      }
      $ += de;
    }
    return `\\${y}${$}`;
  }
  function vn(_) {
    return _ !== "{" && _ !== "}" && _ !== yt && _ !== Me;
  }
  function Zt(_) {
    O(_);
    let y = "", A = "";
    for (; y = W(_, vn); )
      A += y;
    return A;
  }
  function mt(_) {
    let y = "", A = "";
    for (; y = Se(_); )
      A += y;
    return A;
  }
  function Qt(_) {
    const y = (A) => {
      const $ = _.currentChar();
      return $ === "{" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === yt ? A : (A += $, _.next(), y(A));
    };
    return y("");
  }
  function vt(_) {
    O(_);
    const y = g(
      _,
      "|"
      /* TokenChars.Pipe */
    );
    return O(_), y;
  }
  function kt(_, y) {
    let A = null;
    switch (_.currentChar()) {
      case "{":
        return y.braceNest >= 1 && p(j.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), _.next(), A = d(
          y,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), O(_), y.braceNest++, A;
      case "}":
        return y.braceNest > 0 && y.currentType === 2 && p(j.EMPTY_PLACEHOLDER, a(), 0), _.next(), A = d(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), y.braceNest--, y.braceNest > 0 && O(_), y.inLinked && y.braceNest === 0 && (y.inLinked = !1), A;
      case "@":
        return y.braceNest > 0 && p(j.UNTERMINATED_CLOSING_BRACE, a(), 0), A = it(_, y) || v(y), y.braceNest = 0, A;
      default: {
        let se = !0, de = !0, X = !0;
        if (B(_))
          return y.braceNest > 0 && p(j.UNTERMINATED_CLOSING_BRACE, a(), 0), A = d(y, 1, vt(_)), y.braceNest = 0, y.inLinked = !1, A;
        if (y.braceNest > 0 && (y.currentType === 4 || y.currentType === 5 || y.currentType === 6))
          return p(j.UNTERMINATED_CLOSING_BRACE, a(), 0), y.braceNest = 0, gt(_, y);
        if (se = C(_, y))
          return A = d(y, 4, pt(_)), O(_), A;
        if (de = b(_, y))
          return A = d(y, 5, Ye(_)), O(_), A;
        if (X = w(_, y))
          return A = d(y, 6, Mt(_)), O(_), A;
        if (!se && !de && !X)
          return A = d(y, 12, Zt(_)), p(j.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, A.value), O(_), A;
        break;
      }
    }
    return A;
  }
  function it(_, y) {
    const { currentType: A } = y;
    let $ = null;
    const se = _.currentChar();
    switch ((A === 7 || A === 8 || A === 11 || A === 9) && (se === Me || se === yt) && p(j.INVALID_LINKED_FORMAT, a(), 0), se) {
      case "@":
        return _.next(), $ = d(
          y,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), y.inLinked = !0, $;
      case ".":
        return O(_), _.next(), d(
          y,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return O(_), _.next(), d(
          y,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return B(_) ? ($ = d(y, 1, vt(_)), y.braceNest = 0, y.inLinked = !1, $) : N(_, y) || R(_, y) ? (O(_), it(_, y)) : E(_, y) ? (O(_), d(y, 11, mt(_))) : D(_, y) ? (O(_), se === "{" ? kt(_, y) || $ : d(y, 10, Qt(_))) : (A === 7 && p(j.INVALID_LINKED_FORMAT, a(), 0), y.braceNest = 0, y.inLinked = !1, gt(_, y));
    }
  }
  function gt(_, y) {
    let A = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (y.braceNest > 0)
      return kt(_, y) || v(y);
    if (y.inLinked)
      return it(_, y) || v(y);
    switch (_.currentChar()) {
      case "{":
        return kt(_, y) || v(y);
      case "}":
        return p(j.UNBALANCED_CLOSING_BRACE, a(), 0), _.next(), d(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return it(_, y) || v(y);
      default: {
        if (B(_))
          return A = d(y, 1, vt(_)), y.braceNest = 0, y.inLinked = !1, A;
        if (Y(_))
          return d(y, 0, Qe(_));
        break;
      }
    }
    return A;
  }
  function en() {
    const { currentType: _, offset: y, startLoc: A, endLoc: $ } = i;
    return i.lastType = _, i.lastOffset = y, i.lastStartLoc = A, i.lastEndLoc = $, i.offset = o(), i.startLoc = a(), r.currentChar() === $t ? d(
      i,
      13
      /* TokenTypes.EOF */
    ) : gt(r, i);
  }
  return {
    nextToken: en,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const T0 = "parser", w0 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function C0(e, t, n) {
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
function N0(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(c, h, C, b, ...w) {
    const N = c.currentPosition();
    if (N.offset += b, N.column += b, n) {
      const E = t ? Ko(C, N) : null, R = Gn(h, E, {
        domain: T0,
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
    const C = c.context(), { lastOffset: b, lastStartLoc: w } = C, N = o(5, b, w);
    return N.index = parseInt(h, 10), c.nextToken(), a(N, c.currentOffset(), c.currentPosition()), N;
  }
  function i(c, h) {
    const C = c.context(), { lastOffset: b, lastStartLoc: w } = C, N = o(4, b, w);
    return N.key = h, c.nextToken(), a(N, c.currentOffset(), c.currentPosition()), N;
  }
  function u(c, h) {
    const C = c.context(), { lastOffset: b, lastStartLoc: w } = C, N = o(9, b, w);
    return N.value = h.replace(w0, C0), c.nextToken(), a(N, c.currentOffset(), c.currentPosition()), N;
  }
  function f(c) {
    const h = c.nextToken(), C = c.context(), { lastOffset: b, lastStartLoc: w } = C, N = o(8, b, w);
    return h.type !== 11 ? (r(c, j.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0), N.value = "", a(N, b, w), {
      nextConsumeToken: h,
      node: N
    }) : (h.value == null && r(c, j.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(h)), N.value = h.value || "", a(N, c.currentOffset(), c.currentPosition()), {
      node: N
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
    switch (b.type !== 9 && r(c, j.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, bt(b)), b = c.nextToken(), b.type === 2 && (b = c.nextToken()), b.type) {
      case 10:
        b.value == null && r(c, j.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, bt(b)), C.key = p(c, b.value || "");
        break;
      case 4:
        b.value == null && r(c, j.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, bt(b)), C.key = i(c, b.value || "");
        break;
      case 5:
        b.value == null && r(c, j.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, bt(b)), C.key = l(c, b.value || "");
        break;
      case 6:
        b.value == null && r(c, j.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, bt(b)), C.key = u(c, b.value || "");
        break;
      default: {
        r(c, j.UNEXPECTED_EMPTY_LINKED_KEY, h.lastStartLoc, 0);
        const w = c.context(), N = o(7, w.offset, w.startLoc);
        return N.value = "", a(N, w.offset, w.startLoc), C.key = N, a(C, w.offset, w.startLoc), {
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
    let N = null;
    do {
      const D = N || c.nextToken();
      switch (N = null, D.type) {
        case 0:
          D.value == null && r(c, j.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, bt(D)), w.items.push(s(c, D.value || ""));
          break;
        case 5:
          D.value == null && r(c, j.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, bt(D)), w.items.push(l(c, D.value || ""));
          break;
        case 4:
          D.value == null && r(c, j.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, bt(D)), w.items.push(i(c, D.value || ""));
          break;
        case 6:
          D.value == null && r(c, j.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, bt(D)), w.items.push(u(c, D.value || ""));
          break;
        case 7: {
          const B = d(c);
          w.items.push(B.node), N = B.nextConsumeToken || null;
          break;
        }
      }
    } while (h.currentType !== 13 && h.currentType !== 1);
    const E = h.currentType === 1 ? h.lastOffset : c.currentOffset(), R = h.currentType === 1 ? h.lastEndLoc : c.currentPosition();
    return a(w, E, R), w;
  }
  function g(c, h, C, b) {
    const w = c.context();
    let N = b.items.length === 0;
    const E = o(1, h, C);
    E.cases = [], E.cases.push(b);
    do {
      const R = v(c);
      N || (N = R.items.length === 0), E.cases.push(R);
    } while (w.currentType !== 13);
    return N && r(c, j.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0), a(E, c.currentOffset(), c.currentPosition()), E;
  }
  function m(c) {
    const h = c.context(), { offset: C, startLoc: b } = h, w = v(c);
    return h.currentType === 13 ? w : g(c, C, b, w);
  }
  function O(c) {
    const h = O0(c, Ae({}, e)), C = h.context(), b = o(0, C.offset, C.startLoc);
    return t && b.loc && (b.loc.source = c), b.body = m(h), e.onCacheKey && (b.cacheKey = e.onCacheKey(c)), C.currentType !== 13 && r(h, j.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, c[C.offset] || ""), a(b, h.currentOffset(), h.currentPosition()), b;
  }
  return { parse: O };
}
function bt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function S0(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function il(e, t) {
  for (let n = 0; n < e.length; n++)
    Da(e[n], t);
}
function Da(e, t) {
  switch (e.type) {
    case 1:
      il(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      il(e.items, t);
      break;
    case 6: {
      Da(e.key, t), t.helper(
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
function I0(e, t = {}) {
  const n = S0(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Da(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function L0(e) {
  const t = e.body;
  return t.type === 2 ? ul(t) : t.cases.forEach((n) => ul(n)), e;
}
function ul(e) {
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
      e.static = Ra(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const A0 = "minifier";
function Rn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Rn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Rn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Rn(n[r]);
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
      Rn(t.key), t.k = t.key, delete t.key, t.modifier && (Rn(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw Gn(j.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: A0,
          args: [e.type]
        });
  }
  delete e.type;
}
const P0 = "parser";
function R0(e, t) {
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
  function i(m, O) {
    s.code += m;
  }
  function u(m, O = !0) {
    const c = O ? r : "";
    i(o ? c + "  ".repeat(m) : c);
  }
  function f(m = !0) {
    const O = ++s.indentLevel;
    m && u(O);
  }
  function p(m = !0) {
    const O = --s.indentLevel;
    m && u(O);
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
function D0(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), jn(e, t.key), t.modifier ? (e.push(", "), jn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function M0(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (jn(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function k0(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (jn(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function F0(e, t) {
  t.body ? jn(e, t.body) : e.push("null");
}
function jn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      F0(e, t);
      break;
    case 1:
      k0(e, t);
      break;
    case 2:
      M0(e, t);
      break;
    case 6:
      D0(e, t);
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
        throw Gn(j.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: P0,
          args: [t.type]
        });
  }
}
const $0 = (e, t = {}) => {
  const n = U(t.mode) ? t.mode : "normal", r = U(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], l = R0(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), s.length > 0 && (l.push(`const { ${Ra(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), jn(l, e), l.deindent(a), l.push("}"), delete e.helpers;
  const { code: i, map: u } = l.context();
  return {
    ast: e,
    code: i,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function U0(e, t = {}) {
  const n = Ae({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, l = N0(n).parse(e);
  return r ? (a && L0(l), o && Rn(l), { ast: l, code: "" }) : (I0(l, n), $0(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function V0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (hn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (hn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function ft(e) {
  return re(e) && Ma(e) === 0 && (ct(e, "b") || ct(e, "body"));
}
const Xi = ["b", "body"];
function B0(e) {
  return pn(e, Xi);
}
const qi = ["c", "cases"];
function x0(e) {
  return pn(e, qi, []);
}
const Ji = ["s", "static"];
function W0(e) {
  return pn(e, Ji);
}
const Zi = ["i", "items"];
function H0(e) {
  return pn(e, Zi, []);
}
const Qi = ["t", "type"];
function Ma(e) {
  return pn(e, Qi);
}
const eu = ["v", "value"];
function Pr(e, t) {
  const n = pn(e, eu);
  if (n != null)
    return n;
  throw dr(t);
}
const tu = ["m", "modifier"];
function j0(e) {
  return pn(e, tu);
}
const nu = ["k", "key"];
function K0(e) {
  const t = pn(e, nu);
  if (t)
    return t;
  throw dr(
    6
    /* NodeTypes.Linked */
  );
}
function pn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (ct(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const ru = [
  ...Xi,
  ...qi,
  ...Ji,
  ...Zi,
  ...nu,
  ...tu,
  ...eu,
  ...Qi
];
function dr(e) {
  return new Error(`unhandled node type: ${e}`);
}
function No(e) {
  return (n) => z0(n, e);
}
function z0(e, t) {
  const n = B0(t);
  if (n == null)
    throw dr(
      0
      /* NodeTypes.Resource */
    );
  if (Ma(n) === 1) {
    const a = x0(n);
    return e.plural(a.reduce((s, l) => [
      ...s,
      cl(e, l)
    ], []));
  } else
    return cl(e, n);
}
function cl(e, t) {
  const n = W0(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = H0(t).reduce((o, a) => [...o, zo(e, a)], []);
    return e.normalize(r);
  }
}
function zo(e, t) {
  const n = Ma(t);
  switch (n) {
    case 3:
      return Pr(t, n);
    case 9:
      return Pr(t, n);
    case 4: {
      const r = t;
      if (ct(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (ct(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw dr(n);
    }
    case 5: {
      const r = t;
      if (ct(r, "i") && Ie(r.i))
        return e.interpolate(e.list(r.i));
      if (ct(r, "index") && Ie(r.index))
        return e.interpolate(e.list(r.index));
      throw dr(n);
    }
    case 6: {
      const r = t, o = j0(r), a = K0(r);
      return e.linked(zo(e, a), o ? zo(e, o) : void 0, e.type);
    }
    case 7:
      return Pr(t, n);
    case 8:
      return Pr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const G0 = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Y0(e, t) {
  t && v0(e) && Pt(mo(G0, { source: e }));
}
const X0 = (e) => e;
let Rr = ie();
function q0(e, t = {}) {
  let n = !1;
  const r = t.onError || p0;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...U0(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function J0(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && U(e)) {
    const n = he(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Y0(e, n);
    const o = (t.onCacheKey || X0)(e), a = Rr[o];
    if (a)
      return a;
    const { ast: s, detectError: l } = q0(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), i = No(s);
    return l ? i : Rr[o] = i;
  } else {
    if (process.env.NODE_ENV !== "production" && !ft(e))
      return Pt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = Rr[n];
      return r || (Rr[n] = No(e));
    } else
      return No(e);
  }
}
let pr = null;
function Z0(e) {
  pr = e;
}
function Q0(e, t, n) {
  pr && pr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const ey = /* @__PURE__ */ ty("function:translate");
function ty(e) {
  return (t) => pr && pr.emit(e, t);
}
const ke = {
  INVALID_ARGUMENT: f0,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ny = 24;
function Wt(e) {
  return Gn(e, null, process.env.NODE_ENV !== "production" ? { messages: ry } : void 0);
}
const ry = {
  [ke.INVALID_ARGUMENT]: "Invalid arguments",
  [ke.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ke.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ke.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ke.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ke.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ke.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function ka(e, t) {
  return t.locale != null ? fl(t.locale) : fl(e.locale);
}
let So;
function fl(e) {
  if (U(e))
    return e;
  if (ve(e)) {
    if (e.resolvedOnce && So != null)
      return So;
    if (e.constructor.name === "Function") {
      const t = e();
      if (s0(t))
        throw Wt(ke.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return So = t;
    } else
      throw Wt(ke.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Wt(ke.NOT_SUPPORT_LOCALE_TYPE);
}
function oy(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ye(t) ? t : re(t) ? Object.keys(t) : U(t) ? [t] : [n]
  ])];
}
function ou(e, t, n) {
  const r = U(n) ? n : qr, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; ye(s); )
      s = dl(a, s, t);
    const l = ye(t) || !ne(t) ? t : t.default ? t.default : null;
    s = U(l) ? [l] : l, ye(s) && dl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function dl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && he(r); o++) {
    const a = t[o];
    U(a) && (r = ay(e, t[o], n));
  }
  return r;
}
function ay(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = sy(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function sy(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (ye(n) || ne(n)) && n[o] && (r = n[o]);
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
const ly = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function iy(e) {
  return ly.test(e);
}
function uy(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function cy(e) {
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
function fy(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : iy(t) ? uy(t) : "*" + t;
}
function dy(e) {
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
      if (o = 0, s === void 0 || (s = fy(s), s === !1))
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
      if (i = cy(a), p = mn[r], u = p[i] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = d[u[1]], f && (l = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const pl = /* @__PURE__ */ new Map();
function py(e, t) {
  return re(e) ? e[t] : null;
}
function my(e, t) {
  if (!re(e))
    return null;
  let n = pl.get(t);
  if (n || (n = dy(t), n && pl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (ru.includes(s) && ft(o))
      return null;
    const l = o[s];
    if (l === void 0 || ve(o))
      return null;
    o = l, a++;
  }
  return o;
}
const je = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, vy = 8, gy = {
  [je.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [je.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [je.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [je.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [je.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [je.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [je.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function wn(e, ...t) {
  return mo(gy[e], ...t);
}
const _y = "11.2.2", go = -1, qr = "en-US", Jr = "", ml = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function hy() {
  return {
    upper: (e, t) => t === "text" && U(e) ? e.toUpperCase() : t === "vnode" && re(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && U(e) ? e.toLowerCase() : t === "vnode" && re(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && U(e) ? ml(e) : t === "vnode" && re(e) && "__v_isVNode" in e ? ml(e.children) : e
  };
}
let au;
function yy(e) {
  au = e;
}
let su;
function by(e) {
  su = e;
}
let lu;
function Ey(e) {
  lu = e;
}
let iu = null;
const Oy = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  iu = e;
}, Ty = /* @__NO_SIDE_EFFECTS__ */ () => iu;
let uu = null;
const vl = (e) => {
  uu = e;
}, wy = () => uu;
let gl = 0;
function Cy(e = {}) {
  const t = ve(e.onWarn) ? e.onWarn : Pt, n = U(e.version) ? e.version : _y, r = U(e.locale) || ve(e.locale) ? e.locale : qr, o = ve(r) ? qr : r, a = ye(e.fallbackLocale) || ne(e.fallbackLocale) || U(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = ne(e.messages) ? e.messages : Io(o), l = ne(e.datetimeFormats) ? e.datetimeFormats : Io(o), i = ne(e.numberFormats) ? e.numberFormats : Io(o), u = Ae(ie(), e.modifiers, hy()), f = e.pluralRules || ie(), p = ve(e.missing) ? e.missing : null, d = he(e.missingWarn) || Xr(e.missingWarn) ? e.missingWarn : !0, v = he(e.fallbackWarn) || Xr(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, m = !!e.unresolving, O = ve(e.postTranslation) ? e.postTranslation : null, c = ne(e.processor) ? e.processor : null, h = he(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter, b = ve(e.messageCompiler) ? e.messageCompiler : au;
  process.env.NODE_ENV !== "production" && ve(e.messageCompiler) && Zh(wn(je.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const w = ve(e.messageResolver) ? e.messageResolver : su || py, N = ve(e.localeFallbacker) ? e.localeFallbacker : lu || oy, E = re(e.fallbackContext) ? e.fallbackContext : void 0, R = e, D = re(R.__datetimeFormatters) ? R.__datetimeFormatters : /* @__PURE__ */ new Map(), B = re(R.__numberFormatters) ? R.__numberFormatters : /* @__PURE__ */ new Map(), Y = re(R.__meta) ? R.__meta : {};
  gl++;
  const W = {
    version: n,
    cid: gl,
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
    postTranslation: O,
    processor: c,
    warnHtmlMessage: h,
    escapeParameter: C,
    messageCompiler: b,
    messageResolver: w,
    localeFallbacker: N,
    fallbackContext: E,
    onWarn: t,
    __meta: Y
  };
  return W.datetimeFormats = l, W.numberFormats = i, W.__datetimeFormatters = D, W.__numberFormatters = B, process.env.NODE_ENV !== "production" && (W.__v_emitter = R.__v_emitter != null ? R.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Q0(W, n, Y), W;
}
const Io = (e) => ({ [e]: ie() });
function _o(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function cu(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Fa(e, t, n, r, o) {
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
    return process.env.NODE_ENV !== "production" && cu(r, t) && s(wn(je.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Qn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function fu(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Ny(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (fu(e, t[r]))
      return !0;
  return !1;
}
const _l = typeof Intl < "u", du = {
  dateTimeFormat: _l && typeof Intl.DateTimeFormat < "u",
  numberFormat: _l && typeof Intl.NumberFormat < "u"
};
function hl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !du.dateTimeFormat)
    return a(wn(je.CANNOT_FORMAT_DATE)), Jr;
  const [i, u, f, p] = Go(...t), d = he(f.missingWarn) ? f.missingWarn : e.missingWarn, v = he(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, g = !!f.part, m = ka(e, f), O = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    m
  );
  if (!U(i) || i === "")
    return new Intl.DateTimeFormat(m, p).format(u);
  let c = {}, h, C = null, b = m, w = null;
  const N = "datetime format";
  for (let D = 0; D < O.length; D++) {
    if (h = w = O[D], process.env.NODE_ENV !== "production" && m !== h && _o(v, i) && a(wn(je.FALLBACK_TO_DATE_FORMAT, {
      key: i,
      target: h
    })), process.env.NODE_ENV !== "production" && m !== h) {
      const B = e.__v_emitter;
      B && B.emit("fallback", {
        type: N,
        key: i,
        from: b,
        to: w,
        groupId: `${N}:${i}`
      });
    }
    if (c = n[h] || {}, C = c[i], ne(C))
      break;
    Fa(e, i, h, d, N), b = w;
  }
  if (!ne(C) || !U(h))
    return r ? go : i;
  let E = `${h}__${i}`;
  vo(p) || (E = `${E}__${JSON.stringify(p)}`);
  let R = l.get(E);
  return R || (R = new Intl.DateTimeFormat(h, Ae({}, C, p)), l.set(E, R)), g ? R.formatToParts(u) : R.format(u);
}
const pu = [
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
function Go(...e) {
  const [t, n, r, o] = e, a = ie();
  let s = ie(), l;
  if (U(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw Wt(ke.INVALID_ISO_DATE_ARGUMENT);
    const u = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    l = new Date(u);
    try {
      l.toISOString();
    } catch {
      throw Wt(ke.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (n0(t)) {
    if (isNaN(t.getTime()))
      throw Wt(ke.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (Ie(t))
    l = t;
  else
    throw Wt(ke.INVALID_ARGUMENT);
  return U(n) ? a.key = n : ne(n) && Object.keys(n).forEach((i) => {
    pu.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), U(r) ? a.locale = r : ne(r) && (s = r), ne(o) && (s = o), [a.key || "", l, a, s];
}
function yl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function bl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !du.numberFormat)
    return a(wn(je.CANNOT_FORMAT_NUMBER)), Jr;
  const [i, u, f, p] = Yo(...t), d = he(f.missingWarn) ? f.missingWarn : e.missingWarn, v = he(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, g = !!f.part, m = ka(e, f), O = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    m
  );
  if (!U(i) || i === "")
    return new Intl.NumberFormat(m, p).format(u);
  let c = {}, h, C = null, b = m, w = null;
  const N = "number format";
  for (let D = 0; D < O.length; D++) {
    if (h = w = O[D], process.env.NODE_ENV !== "production" && m !== h && _o(v, i) && a(wn(je.FALLBACK_TO_NUMBER_FORMAT, {
      key: i,
      target: h
    })), process.env.NODE_ENV !== "production" && m !== h) {
      const B = e.__v_emitter;
      B && B.emit("fallback", {
        type: N,
        key: i,
        from: b,
        to: w,
        groupId: `${N}:${i}`
      });
    }
    if (c = n[h] || {}, C = c[i], ne(C))
      break;
    Fa(e, i, h, d, N), b = w;
  }
  if (!ne(C) || !U(h))
    return r ? go : i;
  let E = `${h}__${i}`;
  vo(p) || (E = `${E}__${JSON.stringify(p)}`);
  let R = l.get(E);
  return R || (R = new Intl.NumberFormat(h, Ae({}, C, p)), l.set(E, R)), g ? R.formatToParts(u) : R.format(u);
}
const mu = [
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
function Yo(...e) {
  const [t, n, r, o] = e, a = ie();
  let s = ie();
  if (!Ie(t))
    throw Wt(ke.INVALID_ARGUMENT);
  const l = t;
  return U(n) ? a.key = n : ne(n) && Object.keys(n).forEach((i) => {
    mu.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), U(r) ? a.locale = r : ne(r) && (s = r), ne(o) && (s = o), [a.key || "", l, a, s];
}
function El(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Sy = (e) => e, Iy = (e) => "", Ly = "text", Ay = (e) => e.length === 0 ? "" : Ra(e), Py = l0;
function Ol(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ry(e) {
  const t = Ie(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ie(e.named.count) || Ie(e.named.n)) ? Ie(e.named.count) ? e.named.count : Ie(e.named.n) ? e.named.n : t : t;
}
function Dy(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function My(e = {}) {
  const t = e.locale, n = Ry(e), r = re(e.pluralRules) && U(t) && ve(e.pluralRules[t]) ? e.pluralRules[t] : Ol, o = re(e.pluralRules) && U(t) && ve(e.pluralRules[t]) ? Ol : void 0, a = (c) => c[r(n, c.length, o)], s = e.list || [], l = (c) => s[c], i = e.named || ie();
  Ie(e.pluralIndex) && Dy(n, i);
  const u = (c) => i[c];
  function f(c, h) {
    const C = ve(e.messages) ? e.messages(c, !!h) : re(e.messages) ? e.messages[c] : !1;
    return C || (e.parent ? e.parent.message(c) : Iy);
  }
  const p = (c) => e.modifiers ? e.modifiers[c] : Sy, d = ne(e.processor) && ve(e.processor.normalize) ? e.processor.normalize : Ay, v = ne(e.processor) && ve(e.processor.interpolate) ? e.processor.interpolate : Py, g = ne(e.processor) && U(e.processor.type) ? e.processor.type : Ly, O = {
    list: l,
    named: u,
    plural: a,
    linked: (c, ...h) => {
      const [C, b] = h;
      let w = "text", N = "";
      h.length === 1 ? re(C) ? (N = C.modifier || N, w = C.type || w) : U(C) && (N = C || N) : h.length === 2 && (U(C) && (N = C || N), U(b) && (w = b || w));
      const E = f(c, !0)(O), R = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        w === "vnode" && ye(E) && N ? E[0] : E
      );
      return N ? p(N)(R, w) : R;
    },
    message: f,
    type: g,
    interpolate: v,
    normalize: d,
    values: Ae(ie(), s, i)
  };
  return O;
}
const Tl = () => "", et = (e) => ve(e);
function wl(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: l } = e, [i, u] = Xo(...t), f = he(u.missingWarn) ? u.missingWarn : e.missingWarn, p = he(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, d = he(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, v = !!u.resolvedMessage, g = U(u.default) || he(u.default) ? he(u.default) ? a ? i : () => i : u.default : n ? a ? i : () => i : null, m = n || g != null && (U(g) || ve(g)), O = ka(e, u);
  d && ky(u);
  let [c, h, C] = v ? [
    i,
    O,
    l[O] || ie()
  ] : vu(e, i, O, s, p, f), b = c, w = i;
  if (!v && !(U(b) || ft(b) || et(b)) && m && (b = g, w = b), !v && (!(U(b) || ft(b) || et(b)) || !U(h)))
    return o ? go : i;
  if (process.env.NODE_ENV !== "production" && U(b) && e.messageCompiler == null)
    return Pt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${i}'.`), i;
  let N = !1;
  const E = () => {
    N = !0;
  }, R = et(b) ? b : gu(e, i, h, b, w, E);
  if (N)
    return b;
  const D = Vy(e, h, C, u), B = My(D), Y = Fy(e, R, B);
  let W = r ? r(Y, i) : Y;
  if (d && U(W) && (W = o0(W)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Q = {
      timestamp: Date.now(),
      key: U(i) ? i : et(b) ? b.key : "",
      locale: h || (et(b) ? b.locale : ""),
      format: U(b) ? b : et(b) ? b.source : "",
      message: W
    };
    Q.meta = Ae({}, e.__meta, /* @__PURE__ */ Ty() || {}), ey(Q);
  }
  return W;
}
function ky(e) {
  ye(e.list) ? e.list = e.list.map((t) => U(t) ? ol(t) : t) : re(e.named) && Object.keys(e.named).forEach((t) => {
    U(e.named[t]) && (e.named[t] = ol(e.named[t]));
  });
}
function vu(e, t, n, r, o, a) {
  const { messages: s, onWarn: l, messageResolver: i, localeFallbacker: u } = e, f = u(e, r, n);
  let p = ie(), d, v = null, g = n, m = null;
  const O = "translate";
  for (let c = 0; c < f.length; c++) {
    if (d = m = f[c], process.env.NODE_ENV !== "production" && n !== d && !fu(n, d) && _o(o, t) && l(wn(je.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: d
    })), process.env.NODE_ENV !== "production" && n !== d) {
      const w = e.__v_emitter;
      w && w.emit("fallback", {
        type: O,
        key: t,
        from: g,
        to: m,
        groupId: `${O}:${t}`
      });
    }
    p = s[d] || ie();
    let h = null, C, b;
    if (process.env.NODE_ENV !== "production" && Yt && (h = window.performance.now(), C = "intlify-message-resolve-start", b = "intlify-message-resolve-end", Je && Je(C)), (v = i(p, t)) === null && (v = p[t]), process.env.NODE_ENV !== "production" && Yt) {
      const w = window.performance.now(), N = e.__v_emitter;
      N && h && v && N.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: v,
        time: w - h,
        groupId: `${O}:${t}`
      }), C && b && Je && Tn && (Je(b), Tn("intlify message resolve", C, b));
    }
    if (U(v) || ft(v) || et(v))
      break;
    if (!Ny(d, f)) {
      const w = Fa(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        d,
        a,
        O
      );
      w !== t && (v = w);
    }
    g = m;
  }
  return [v, d, p];
}
function gu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: l } = e;
  if (et(r)) {
    const d = r;
    return d.locale = d.locale || n, d.key = d.key || t, d;
  }
  if (s == null) {
    const d = () => r;
    return d.locale = n, d.key = t, d;
  }
  let i = null, u, f;
  process.env.NODE_ENV !== "production" && Yt && (i = window.performance.now(), u = "intlify-message-compilation-start", f = "intlify-message-compilation-end", Je && Je(u));
  const p = s(r, $y(e, n, o, r, l, a));
  if (process.env.NODE_ENV !== "production" && Yt) {
    const d = window.performance.now(), v = e.__v_emitter;
    v && i && v.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: d - i,
      groupId: `translate:${t}`
    }), u && f && Je && Tn && (Je(f), Tn("intlify message compilation", u, f));
  }
  return p.locale = n, p.key = t, p.source = r, p;
}
function Fy(e, t, n) {
  let r = null, o, a;
  process.env.NODE_ENV !== "production" && Yt && (r = window.performance.now(), o = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", Je && Je(o));
  const s = t(n);
  if (process.env.NODE_ENV !== "production" && Yt) {
    const l = window.performance.now(), i = e.__v_emitter;
    i && r && i.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: l - r,
      groupId: `translate:${t.key}`
    }), o && a && Je && Tn && (Je(a), Tn("intlify message evaluation", o, a));
  }
  return s;
}
function Xo(...e) {
  const [t, n, r] = e, o = ie();
  if (!U(t) && !Ie(t) && !et(t) && !ft(t))
    throw Wt(ke.INVALID_ARGUMENT);
  const a = Ie(t) ? String(t) : (et(t), t);
  return Ie(n) ? o.plural = n : U(n) ? o.default = n : ne(n) && !vo(n) ? o.named = n : ye(n) && (o.list = n), Ie(r) ? o.plural = r : U(r) ? o.default = r : ne(r) && Ae(o, r), [a, o];
}
function $y(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      if (a && a(s), process.env.NODE_ENV !== "production") {
        const l = Uy(r), i = `Message compilation error: ${s.message}`, u = s.location && l && i0(l, s.location.start.offset, s.location.end.offset), f = e.__v_emitter;
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
    onCacheKey: (s) => e0(t, n, s)
  };
}
function Uy(e) {
  if (U(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Vy(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: l, fallbackWarn: i, missingWarn: u, fallbackContext: f } = e, d = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (v, g) => {
      let m = s(n, v);
      if (m == null && (f || g)) {
        const [, , O] = vu(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          v,
          t,
          l,
          i,
          u
        );
        m = s(O, v);
      }
      if (U(m) || ft(m)) {
        let O = !1;
        const h = gu(e, v, t, m, v, () => {
          O = !0;
        });
        return O ? Tl : h;
      } else return et(m) ? m : Tl;
    }
  };
  return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), Ie(r.plural) && (d.pluralIndex = r.plural), d;
}
V0();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const By = "11.2.2";
function xy() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (hn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (hn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (hn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (hn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Pe = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ny,
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
function mr(e, ...t) {
  return Gn(e, null, process.env.NODE_ENV !== "production" ? { messages: Wy, args: t } : void 0);
}
const Wy = {
  [Pe.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Pe.INVALID_ARGUMENT]: "Invalid argument",
  [Pe.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Pe.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Pe.UNEXPECTED_ERROR]: "Unexpected error",
  [Pe.REQUIRED_VALUE]: "Required in value: {0}",
  [Pe.INVALID_VALUE]: "Invalid value",
  [Pe.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Pe.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Pe.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Pe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, qo = /* @__PURE__ */ Jt("__translateVNode"), Jo = /* @__PURE__ */ Jt("__datetimeParts"), Zo = /* @__PURE__ */ Jt("__numberParts"), Qo = /* @__PURE__ */ Jt("__enableEmitter"), ea = /* @__PURE__ */ Jt("__disableEmitter"), Hy = Jt("__setPluralRules"), _u = /* @__PURE__ */ Jt("__injectWithOption"), ta = /* @__PURE__ */ Jt("__dispose"), Ot = {
  FALLBACK_TO_ROOT: vy,
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
}, jy = {
  [Ot.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Ot.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Ot.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [Ot.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [Ot.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [Ot.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Zr(e, ...t) {
  return mo(jy[e], ...t);
}
function vr(e) {
  if (!re(e) || ft(e))
    return e;
  for (const t in e)
    if (ct(e, t))
      if (!t.includes("."))
        re(e[t]) && vr(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = ie()), !re(o[n[s]])) {
            process.env.NODE_ENV !== "production" && Pt(Zr(Ot.IGNORE_OBJ_FLATTEN, {
              key: n[s]
            })), a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (ft(o) ? ru.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !ft(o)) {
          const s = o[n[r]];
          re(s) && vr(s);
        }
      }
  return e;
}
function hu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = ne(n) ? n : ye(r) ? ie() : { [e]: ie() };
  if (ye(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: i, resource: u } = l;
      i ? (s[i] = s[i] || ie(), Fr(u, s[i])) : Fr(u, s);
    } else
      U(l) && Fr(JSON.parse(l), s);
  }), o == null && a)
    for (const l in s)
      ct(s, l) && vr(s[l]);
  return s;
}
function yu(e) {
  return e.type;
}
function Ky(e, t, n) {
  let r = re(t.messages) ? t.messages : ie();
  "__i18nGlobal" in n && (r = hu(e.locale.value, {
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
function Cl(e) {
  return _e(Dl, null, e, 0);
}
function $a() {
  return "currentInstance" in za ? za["currentInstance"] : Be();
}
const Nl = "__INTLIFY_META__", Sl = () => [], zy = () => !1;
let Il = 0;
function Ll(e) {
  return (t, n, r, o) => e(n, r, $a() || void 0, o);
}
const Gy = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = $a();
  let t = null;
  return e && (t = yu(e)[Nl]) ? { [Nl]: t } : null;
};
function Yy(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Yt ? F : gr;
  let s = he(e.inheritLocale) ? e.inheritLocale : !0;
  const l = a(
    // prettier-ignore
    t && s ? t.locale.value : U(e.locale) ? e.locale : qr
  ), i = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : U(e.fallbackLocale) || ye(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), u = a(hu(l.value, e)), f = a(ne(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), p = a(ne(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let d = t ? t.missingWarn : he(e.missingWarn) || Xr(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : he(e.fallbackWarn) || Xr(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : he(e.fallbackRoot) ? e.fallbackRoot : !0, m = !!e.fallbackFormat, O = ve(e.missing) ? e.missing : null, c = ve(e.missing) ? Ll(e.missing) : null, h = ve(e.postTranslation) ? e.postTranslation : null, C = t ? t.warnHtmlMessage : he(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter;
  const w = t ? t.modifiers : ne(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || t && t.pluralRules, E;
  E = (() => {
    r && vl(null);
    const I = {
      version: By,
      locale: l.value,
      fallbackLocale: i.value,
      messages: u.value,
      modifiers: w,
      pluralRules: N,
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
    I.datetimeFormats = f.value, I.numberFormats = p.value, I.__datetimeFormatters = ne(E) ? E.__datetimeFormatters : void 0, I.__numberFormatters = ne(E) ? E.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (I.__v_emitter = ne(E) ? E.__v_emitter : void 0);
    const P = Cy(I);
    return r && vl(P), P;
  })(), Qn(E, l.value, i.value);
  function D() {
    return [
      l.value,
      i.value,
      u.value,
      f.value,
      p.value
    ];
  }
  const B = L({
    get: () => l.value,
    set: (I) => {
      E.locale = I, l.value = I;
    }
  }), Y = L({
    get: () => i.value,
    set: (I) => {
      E.fallbackLocale = I, i.value = I, Qn(E, l.value, I);
    }
  }), W = L(() => u.value), Q = /* @__PURE__ */ L(() => f.value), Se = /* @__PURE__ */ L(() => p.value);
  function me() {
    return ve(h) ? h : null;
  }
  function oe(I) {
    h = I, E.postTranslation = I;
  }
  function V() {
    return O;
  }
  function ge(I) {
    I !== null && (c = Ll(I)), O = I, E.missing = c;
  }
  function Te(I, P) {
    return I !== "translate" || !P.resolvedMessage;
  }
  const we = (I, P, J, ce, _t, ht) => {
    D();
    let tn;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = t ? wy() : void 0), tn = I(E);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = void 0);
    }
    if (J !== "translate exists" && // for not `te` (e.g `t`)
    Ie(tn) && tn === go || J === "translate exists" && !tn) {
      const [Ft, ho] = P();
      if (process.env.NODE_ENV !== "production" && t && U(Ft) && Te(J, ho) && (g && (_o(v, Ft) || cu(d, Ft)) && Pt(Zr(Ot.FALLBACK_TO_ROOT, {
        key: Ft,
        type: J
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Yn } = E;
        Yn && g && Yn.emit("fallback", {
          type: J,
          key: Ft,
          to: "global",
          groupId: `${J}:${Ft}`
        });
      }
      return t && g ? ce(t) : _t(Ft);
    } else {
      if (ht(tn))
        return tn;
      throw mr(Pe.UNEXPECTED_RETURN_TYPE);
    }
  };
  function lt(...I) {
    return we((P) => Reflect.apply(wl, null, [P, ...I]), () => Xo(...I), "translate", (P) => Reflect.apply(P.t, P, [...I]), (P) => P, (P) => U(P));
  }
  function Qe(...I) {
    const [P, J, ce] = I;
    if (ce && !re(ce))
      throw mr(Pe.INVALID_ARGUMENT);
    return lt(P, J, Ae({ resolvedMessage: !0 }, ce || {}));
  }
  function pt(...I) {
    return we((P) => Reflect.apply(hl, null, [P, ...I]), () => Go(...I), "datetime format", (P) => Reflect.apply(P.d, P, [...I]), () => Jr, (P) => U(P) || ye(P));
  }
  function Ye(...I) {
    return we((P) => Reflect.apply(bl, null, [P, ...I]), () => Yo(...I), "number format", (P) => Reflect.apply(P.n, P, [...I]), () => Jr, (P) => U(P) || ye(P));
  }
  function Ue(I) {
    return I.map((P) => U(P) || Ie(P) || he(P) ? Cl(String(P)) : P);
  }
  const Ve = {
    normalize: Ue,
    interpolate: (I) => I,
    type: "vnode"
  };
  function fe(...I) {
    return we((P) => {
      let J;
      const ce = P;
      try {
        ce.processor = Ve, J = Reflect.apply(wl, null, [ce, ...I]);
      } finally {
        ce.processor = null;
      }
      return J;
    }, () => Xo(...I), "translate", (P) => P[qo](...I), (P) => [Cl(P)], (P) => ye(P));
  }
  function vn(...I) {
    return we((P) => Reflect.apply(bl, null, [P, ...I]), () => Yo(...I), "number format", (P) => P[Zo](...I), Sl, (P) => U(P) || ye(P));
  }
  function Zt(...I) {
    return we((P) => Reflect.apply(hl, null, [P, ...I]), () => Go(...I), "datetime format", (P) => P[Jo](...I), Sl, (P) => U(P) || ye(P));
  }
  function mt(I) {
    N = I, E.pluralRules = N;
  }
  function Qt(I, P) {
    return we(() => {
      if (!I)
        return !1;
      const J = U(P) ? P : l.value, ce = it(J), _t = E.messageResolver(ce, I);
      return ft(_t) || et(_t) || U(_t);
    }, () => [I], "translate exists", (J) => Reflect.apply(J.te, J, [I, P]), zy, (J) => he(J));
  }
  function vt(I) {
    let P = null;
    const J = ou(E, i.value, l.value);
    for (let ce = 0; ce < J.length; ce++) {
      const _t = u.value[J[ce]] || {}, ht = E.messageResolver(_t, I);
      if (ht != null) {
        P = ht;
        break;
      }
    }
    return P;
  }
  function kt(I) {
    const P = vt(I);
    return P ?? (t ? t.tm(I) || {} : {});
  }
  function it(I) {
    return u.value[I] || {};
  }
  function gt(I, P) {
    if (o) {
      const J = { [I]: P };
      for (const ce in J)
        ct(J, ce) && vr(J[ce]);
      P = J[I];
    }
    u.value[I] = P, E.messages = u.value;
  }
  function en(I, P) {
    u.value[I] = u.value[I] || {};
    const J = { [I]: P };
    if (o)
      for (const ce in J)
        ct(J, ce) && vr(J[ce]);
    P = J[I], Fr(P, u.value[I]), E.messages = u.value;
  }
  function _(I) {
    return f.value[I] || {};
  }
  function y(I, P) {
    f.value[I] = P, E.datetimeFormats = f.value, yl(E, I, P);
  }
  function A(I, P) {
    f.value[I] = Ae(f.value[I] || {}, P), E.datetimeFormats = f.value, yl(E, I, P);
  }
  function $(I) {
    return p.value[I] || {};
  }
  function se(I, P) {
    p.value[I] = P, E.numberFormats = p.value, El(E, I, P);
  }
  function de(I, P) {
    p.value[I] = Ae(p.value[I] || {}, P), E.numberFormats = p.value, El(E, I, P);
  }
  Il++, t && Yt && (Z(t.locale, (I) => {
    s && (l.value = I, E.locale = I, Qn(E, l.value, i.value));
  }), Z(t.fallbackLocale, (I) => {
    s && (i.value = I, E.fallbackLocale = I, Qn(E, l.value, i.value));
  }));
  const X = {
    id: Il,
    locale: B,
    fallbackLocale: Y,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(I) {
      s = I, I && t && (l.value = t.locale.value, i.value = t.fallbackLocale.value, Qn(E, l.value, i.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: W,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return N || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(I) {
      d = I, E.missingWarn = d;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(I) {
      v = I, E.fallbackWarn = v;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(I) {
      g = I;
    },
    get fallbackFormat() {
      return m;
    },
    set fallbackFormat(I) {
      m = I, E.fallbackFormat = m;
    },
    get warnHtmlMessage() {
      return C;
    },
    set warnHtmlMessage(I) {
      C = I, E.warnHtmlMessage = I;
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(I) {
      b = I, E.escapeParameter = I;
    },
    t: lt,
    getLocaleMessage: it,
    setLocaleMessage: gt,
    mergeLocaleMessage: en,
    getPostTranslationHandler: me,
    setPostTranslationHandler: oe,
    getMissingHandler: V,
    setMissingHandler: ge,
    [Hy]: mt
  };
  return X.datetimeFormats = Q, X.numberFormats = Se, X.rt = Qe, X.te = Qt, X.tm = kt, X.d = pt, X.n = Ye, X.getDateTimeFormat = _, X.setDateTimeFormat = y, X.mergeDateTimeFormat = A, X.getNumberFormat = $, X.setNumberFormat = se, X.mergeNumberFormat = de, X[_u] = n, X[qo] = fe, X[Jo] = Zt, X[Zo] = vn, process.env.NODE_ENV !== "production" && (X[Qo] = (I) => {
    E.__v_emitter = I;
  }, X[ea] = () => {
    E.__v_emitter = void 0;
  }), X;
}
function Al(e, t) {
}
const Ua = {
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
function Xy({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === un ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, ie());
}
function bu() {
  return un;
}
Ae({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ie(e) || !isNaN(e)
  }
}, Ua);
function qy(e) {
  return ye(e) && !U(e[0]);
}
function Eu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let l = ie();
    e.locale && (s.locale = e.locale), U(e.format) ? s.key = e.format : re(e.format) && (U(e.format.key) && (s.key = e.format.key), l = Object.keys(e.format).reduce((d, v) => n.includes(v) ? Ae(ie(), d, { [v]: e.format[v] }) : d, ie()));
    const i = r(e.value, s, l);
    let u = [s.key];
    ye(i) ? u = i.map((d, v) => {
      const g = o[d.type], m = g ? g({ [d.type]: d.value, index: v, parts: i }) : [d.value];
      return qy(m) && (m[0].key = `${d.type}-${v}`), m;
    }) : U(i) && (u = [i]);
    const f = Ae(ie(), a), p = U(e.tag) || re(e.tag) ? e.tag : bu();
    return Ml(p, f, u);
  };
}
Ae({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ua);
const Jy = /* @__PURE__ */ Jt("global-vue-i18n");
function Va(e = {}) {
  const t = $a();
  if (t == null)
    throw mr(Pe.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw mr(Pe.NOT_INSTALLED);
  const n = Zy(t), r = eb(n), o = yu(t), a = Qy(e, o);
  if (a === "global")
    return Ky(r, e, o), r;
  if (a === "parent") {
    let i = tb(n, t, e.__useComponent);
    return i == null && (process.env.NODE_ENV !== "production" && Pt(Zr(Ot.NOT_FOUND_PARENT_SCOPE)), i = r), i;
  }
  const s = n;
  let l = s.__getInstance(t);
  if (l == null) {
    const i = Ae({}, e);
    "__i18n" in o && (i.__i18n = o.__i18n), r && (i.__root = r), l = Yy(i), s.__composerExtend && (l[ta] = s.__composerExtend(l)), rb(s, t, l), s.__setInstance(t, l);
  } else
    process.env.NODE_ENV !== "production" && a === "local" && Pt(Zr(Ot.DUPLICATE_USE_I18N_CALLING));
  return l;
}
function Zy(e) {
  const t = ue(e.isCE ? Jy : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw mr(e.isCE ? Pe.NOT_INSTALLED_WITH_PROVIDE : Pe.UNEXPECTED_ERROR);
  return t;
}
function Qy(e, t) {
  return vo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function eb(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function tb(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = nb(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = s.__getInstance(a);
      l != null && (r = l.__composer, n && r && !r[_u] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function nb(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function rb(e, t, n) {
  let r = null;
  Re(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = n, r = u0();
      const o = n;
      o[Qo] && o[Qo](r), r.on("*", Al);
    }
  }, t), Rl(() => {
    const o = n;
    process.env.NODE_ENV !== "production" && (r && r.off("*", Al), o[ea] && o[ea](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const a = o[ta];
    a && (a(), delete o[ta]);
  }, t);
}
Ae({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ua);
xy();
yy(J0);
by(my);
Ey(ou);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = hn();
  e.__INTLIFY__ = !0, Z0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Oe = {
  info: (e, t, ...n) => {
    Kt("frontend_log", {
      level: "info",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  error: (e, t) => {
    Kt("frontend_log", {
      level: "error",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    Kt("frontend_log", {
      level: "warn",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
};
async function ob(e, t) {
  return await Kt("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const ab = "resources/transformers/transformers.min.js", sb = ["translation-offline-runtime", "translation"];
let er = null;
async function lb() {
  return er || (er = (async () => {
    for (const e of sb) {
      const t = await ob(e, ab);
      if (!t) continue;
      const r = await import(qh(t));
      return r.env.useBrowserCache = !0, r.env.allowRemoteModels = !0, Oe.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`), r;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw er = null, e;
  }), er);
}
let Ht = null, ar = !1, Dn = null, Lo = null, na = null;
const ib = "Xenova/opus-mt-en-zh", ub = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], cb = 3e5;
function fb(e) {
  na = e;
}
function db() {
  return ub;
}
function pb(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (r, o) => setTimeout(() => o(new Error(n)), t)
    )
  ]);
}
async function Ou() {
  return Ht || Dn || (ar = !0, Oe.info("[离线翻译] 正在加载翻译模型..."), Dn = (async () => {
    try {
      const { pipeline: e, env: t } = await lb();
      t.useBrowserCache = !0, t.allowRemoteModels = !0;
      let n = "";
      const r = e("translation", ib, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        progress_callback: (a) => {
          a.status === "done" && a.file && a.file !== n && (n = a.file, Oe.info(`[离线翻译] 已加载: ${a.file}`)), na && na({
            status: a.status,
            progress: a.progress,
            file: a.file
          });
        }
      });
      return Ht = await pb(
        r,
        cb,
        "模型加载超时，请检查网络连接后重试"
      ), Oe.info("[离线翻译] 翻译模型加载完成"), ar = !1, Ht;
    } catch (e) {
      throw ar = !1, Dn = null, Oe.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Dn);
}
async function mb(e) {
  if (!e?.trim()) return e;
  Lo = new AbortController();
  const t = Lo.signal;
  try {
    const n = await Ou();
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
    throw n instanceof Error && n.message === "翻译已取消" ? (Oe.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (Oe.warn("[离线翻译] 运行时资源未安装"), n) : (Oe.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    Lo = null;
  }
}
async function vb() {
  await Ou();
}
function gb() {
  return Ht !== null;
}
function _b() {
  return ar;
}
async function Tu() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      Oe.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const o = await (await caches.open(n)).keys();
          if (Oe.info(`[离线翻译] Cache "${n}" 包含 ${o.length} 个文件`), o.some(
            (s) => s.url.includes("opus-mt-en-zh") || s.url.includes("Xenova")
          )) {
            const s = o.some((l) => l.url.includes(".onnx"));
            if (Oe.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${s}`), s)
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
    Oe.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return Oe.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return Oe.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return Oe.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function hb() {
  return (await Tu()).isCached;
}
function yb() {
  return Ht !== null;
}
async function bb() {
  if (Ht)
    try {
      await Ht.dispose?.();
    } catch {
    }
  Ht = null, Dn = null, ar = !1, Oe.info("[离线翻译] 翻译器已释放");
}
async function Eb() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), Oe.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), Oe.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    Oe.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw Oe.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const $b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: yb,
  clearModelCache: Eb,
  disposeOfflineTranslator: bb,
  getModelCacheInfo: Tu,
  getModelFiles: db,
  isModelCached: hb,
  isOfflineTranslatorInitializing: _b,
  isOfflineTranslatorReady: gb,
  setProgressCallback: fb,
  translateOffline: mb,
  warmupOfflineTranslator: vb
}, Symbol.toStringTag, { value: "Module" })), Ub = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
export {
  gb as $,
  Kt as A,
  Jh as B,
  pi as C,
  Db as D,
  En as E,
  Mb as F,
  kb as G,
  Va as H,
  Tb as I,
  Oe as J,
  Lb as K,
  J_ as L,
  mb as M,
  Ab as N,
  Fb as O,
  Ub as P,
  lv as Q,
  Rb as R,
  Pb as S,
  tl as T,
  An as U,
  cv as V,
  zm as W,
  wb as X,
  Hr as Y,
  Tu as Z,
  Ee as _,
  Fe as a,
  _b as a0,
  vb as a1,
  bb as a2,
  Eb as a3,
  db as a4,
  fb as a5,
  $b as a6,
  be as b,
  jr as c,
  q as d,
  Sm as e,
  ot as f,
  Fo as g,
  $e as h,
  Ne as i,
  yi as j,
  Ib as k,
  gv as l,
  fv as m,
  mv as n,
  vv as o,
  Cb as p,
  pa as q,
  Bt as r,
  hv as s,
  gi as t,
  lo as u,
  Sb as v,
  fn as w,
  Nb as x,
  Mn as y,
  vi as z
};
