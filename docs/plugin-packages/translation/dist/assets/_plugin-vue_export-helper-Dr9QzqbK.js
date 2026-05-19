import { D as We, C as ue, r as F, k as L, u as T, A as It, S as ft, i as dt, T as hr, U as Ml, V as sa, M as Yu, N as Xu, f as De, l as je, w as q, W as qu, x as Ju, X as Ka, Y as Zu, z as Ae, Z as Lt, _ as Qu, $ as Br, d as x, a as z, o as M, g as te, m as oo, q as H, t as ln, p as kl, a0 as Dt, b as ae, v as ee, a1 as nt, n as W, B as Ge, a2 as Gt, a3 as Kn, c as _e, F as un, G as $n, a4 as ec, a5 as tc, e as le, y as Fn, a6 as nc, a7 as Fl, a8 as rc, a9 as oc, aa as ac, ab as sc, s as ze, R as Do, ac as He, L as lc, O as la, ad as ic, ae as gn, af as uc, h as Ga, ag as Jn, ah as cc, ai as fc, aj as dc, ak as lr, al as Wr, am as Ya, Q as $l } from "./runtime-entry-BlsNyzIU.js";
const Ul = Symbol(), $r = "el", pc = "is-", _n = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Vl = Symbol("namespaceContextKey"), ia = (e) => {
  const t = e || (We() ? ue(Vl, F($r)) : F($r));
  return L(() => T(t) || $r);
}, Ue = (e, t) => {
  const n = ia(t);
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
      return m && c ? `${pc}${m}` : "";
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
var xl = typeof global == "object" && global && global.Object === Object && global, mc = typeof self == "object" && self && self.Object === Object && self, Mt = xl || mc || Function("return this")(), At = Mt.Symbol, Bl = Object.prototype, vc = Bl.hasOwnProperty, gc = Bl.toString, Zn = At ? At.toStringTag : void 0;
function _c(e) {
  var t = vc.call(e, Zn), n = e[Zn];
  try {
    e[Zn] = void 0;
    var r = !0;
  } catch {
  }
  var o = gc.call(e);
  return r && (t ? e[Zn] = n : delete e[Zn]), o;
}
var hc = Object.prototype, yc = hc.toString;
function bc(e) {
  return yc.call(e);
}
var Ec = "[object Null]", Oc = "[object Undefined]", Xa = At ? At.toStringTag : void 0;
function Gn(e) {
  return e == null ? e === void 0 ? Oc : Ec : Xa && Xa in Object(e) ? _c(e) : bc(e);
}
function Un(e) {
  return e != null && typeof e == "object";
}
var Tc = "[object Symbol]";
function ao(e) {
  return typeof e == "symbol" || Un(e) && Gn(e) == Tc;
}
function wc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var gt = Array.isArray, qa = At ? At.prototype : void 0, Ja = qa ? qa.toString : void 0;
function Wl(e) {
  if (typeof e == "string")
    return e;
  if (gt(e))
    return wc(e, Wl) + "";
  if (ao(e))
    return Ja ? Ja.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Cc = /\s/;
function Nc(e) {
  for (var t = e.length; t-- && Cc.test(e.charAt(t)); )
    ;
  return t;
}
var Sc = /^\s+/;
function Ic(e) {
  return e && e.slice(0, Nc(e) + 1).replace(Sc, "");
}
function cn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Za = NaN, Lc = /^[-+]0x[0-9a-f]+$/i, Ac = /^0b[01]+$/i, Pc = /^0o[0-7]+$/i, Rc = parseInt;
function Qa(e) {
  if (typeof e == "number")
    return e;
  if (ao(e))
    return Za;
  if (cn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = cn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ic(e);
  var n = Ac.test(e);
  return n || Pc.test(e) ? Rc(e.slice(2), n ? 2 : 8) : Lc.test(e) ? Za : +e;
}
function Hl(e) {
  return e;
}
var Dc = "[object AsyncFunction]", Mc = "[object Function]", kc = "[object GeneratorFunction]", Fc = "[object Proxy]";
function jl(e) {
  if (!cn(e))
    return !1;
  var t = Gn(e);
  return t == Mc || t == kc || t == Dc || t == Fc;
}
var To = Mt["__core-js_shared__"], es = function() {
  var e = /[^.]+$/.exec(To && To.keys && To.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $c(e) {
  return !!es && es in e;
}
var Uc = Function.prototype, Vc = Uc.toString;
function Nn(e) {
  if (e != null) {
    try {
      return Vc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xc = /[\\^$.*+?()[\]{}|]/g, Bc = /^\[object .+?Constructor\]$/, Wc = Function.prototype, Hc = Object.prototype, jc = Wc.toString, zc = Hc.hasOwnProperty, Kc = RegExp(
  "^" + jc.call(zc).replace(xc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gc(e) {
  if (!cn(e) || $c(e))
    return !1;
  var t = jl(e) ? Kc : Bc;
  return t.test(Nn(e));
}
function Yc(e, t) {
  return e?.[t];
}
function Sn(e, t) {
  var n = Yc(e, t);
  return Gc(n) ? n : void 0;
}
var Mo = Sn(Mt, "WeakMap");
function Xc(e, t, n) {
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
var qc = 800, Jc = 16, Zc = Date.now;
function Qc(e) {
  var t = 0, n = 0;
  return function() {
    var r = Zc(), o = Jc - (r - n);
    if (n = r, o > 0) {
      if (++t >= qc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ef(e) {
  return function() {
    return e;
  };
}
var Hr = function() {
  try {
    var e = Sn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), tf = Hr ? function(e, t) {
  return Hr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ef(t),
    writable: !0
  });
} : Hl, nf = Qc(tf);
function rf(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var of = 9007199254740991, af = /^(?:0|[1-9]\d*)$/;
function ua(e, t) {
  var n = typeof e;
  return t = t ?? of, !!t && (n == "number" || n != "symbol" && af.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function sf(e, t, n) {
  t == "__proto__" && Hr ? Hr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ca(e, t) {
  return e === t || e !== e && t !== t;
}
var lf = Object.prototype, uf = lf.hasOwnProperty;
function cf(e, t, n) {
  var r = e[t];
  (!(uf.call(e, t) && ca(r, n)) || n === void 0 && !(t in e)) && sf(e, t, n);
}
var ts = Math.max;
function ff(e, t, n) {
  return t = ts(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ts(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(s), Xc(e, this, l);
  };
}
var df = 9007199254740991;
function fa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= df;
}
function pf(e) {
  return e != null && fa(e.length) && !jl(e);
}
var mf = Object.prototype;
function vf(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || mf;
  return e === n;
}
function gf(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var _f = "[object Arguments]";
function ns(e) {
  return Un(e) && Gn(e) == _f;
}
var zl = Object.prototype, hf = zl.hasOwnProperty, yf = zl.propertyIsEnumerable, da = ns(/* @__PURE__ */ function() {
  return arguments;
}()) ? ns : function(e) {
  return Un(e) && hf.call(e, "callee") && !yf.call(e, "callee");
};
function bf() {
  return !1;
}
var Kl = typeof exports == "object" && exports && !exports.nodeType && exports, rs = Kl && typeof module == "object" && module && !module.nodeType && module, Ef = rs && rs.exports === Kl, os = Ef ? Mt.Buffer : void 0, Of = os ? os.isBuffer : void 0, ko = Of || bf, Tf = "[object Arguments]", wf = "[object Array]", Cf = "[object Boolean]", Nf = "[object Date]", Sf = "[object Error]", If = "[object Function]", Lf = "[object Map]", Af = "[object Number]", Pf = "[object Object]", Rf = "[object RegExp]", Df = "[object Set]", Mf = "[object String]", kf = "[object WeakMap]", Ff = "[object ArrayBuffer]", $f = "[object DataView]", Uf = "[object Float32Array]", Vf = "[object Float64Array]", xf = "[object Int8Array]", Bf = "[object Int16Array]", Wf = "[object Int32Array]", Hf = "[object Uint8Array]", jf = "[object Uint8ClampedArray]", zf = "[object Uint16Array]", Kf = "[object Uint32Array]", pe = {};
pe[Uf] = pe[Vf] = pe[xf] = pe[Bf] = pe[Wf] = pe[Hf] = pe[jf] = pe[zf] = pe[Kf] = !0;
pe[Tf] = pe[wf] = pe[Ff] = pe[Cf] = pe[$f] = pe[Nf] = pe[Sf] = pe[If] = pe[Lf] = pe[Af] = pe[Pf] = pe[Rf] = pe[Df] = pe[Mf] = pe[kf] = !1;
function Gf(e) {
  return Un(e) && fa(e.length) && !!pe[Gn(e)];
}
function Yf(e) {
  return function(t) {
    return e(t);
  };
}
var Gl = typeof exports == "object" && exports && !exports.nodeType && exports, nr = Gl && typeof module == "object" && module && !module.nodeType && module, Xf = nr && nr.exports === Gl, wo = Xf && xl.process, as = function() {
  try {
    var e = nr && nr.require && nr.require("util").types;
    return e || wo && wo.binding && wo.binding("util");
  } catch {
  }
}(), ss = as && as.isTypedArray, Yl = ss ? Yf(ss) : Gf, qf = Object.prototype, Jf = qf.hasOwnProperty;
function Zf(e, t) {
  var n = gt(e), r = !n && da(e), o = !n && !r && ko(e), a = !n && !r && !o && Yl(e), s = n || r || o || a, l = s ? gf(e.length, String) : [], i = l.length;
  for (var u in e)
    (t || Jf.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ua(u, i))) && l.push(u);
  return l;
}
function Qf(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ed = Qf(Object.keys, Object), td = Object.prototype, nd = td.hasOwnProperty;
function rd(e) {
  if (!vf(e))
    return ed(e);
  var t = [];
  for (var n in Object(e))
    nd.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Xl(e) {
  return pf(e) ? Zf(e) : rd(e);
}
var od = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ad = /^\w*$/;
function pa(e, t) {
  if (gt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ao(e) ? !0 : ad.test(e) || !od.test(e) || t != null && e in Object(t);
}
var ir = Sn(Object, "create");
function sd() {
  this.__data__ = ir ? ir(null) : {}, this.size = 0;
}
function ld(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var id = "__lodash_hash_undefined__", ud = Object.prototype, cd = ud.hasOwnProperty;
function fd(e) {
  var t = this.__data__;
  if (ir) {
    var n = t[e];
    return n === id ? void 0 : n;
  }
  return cd.call(t, e) ? t[e] : void 0;
}
var dd = Object.prototype, pd = dd.hasOwnProperty;
function md(e) {
  var t = this.__data__;
  return ir ? t[e] !== void 0 : pd.call(t, e);
}
var vd = "__lodash_hash_undefined__";
function gd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ir && t === void 0 ? vd : t, this;
}
function En(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
En.prototype.clear = sd;
En.prototype.delete = ld;
En.prototype.get = fd;
En.prototype.has = md;
En.prototype.set = gd;
function _d() {
  this.__data__ = [], this.size = 0;
}
function so(e, t) {
  for (var n = e.length; n--; )
    if (ca(e[n][0], t))
      return n;
  return -1;
}
var hd = Array.prototype, yd = hd.splice;
function bd(e) {
  var t = this.__data__, n = so(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : yd.call(t, n, 1), --this.size, !0;
}
function Ed(e) {
  var t = this.__data__, n = so(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Od(e) {
  return so(this.__data__, e) > -1;
}
function Td(e, t) {
  var n = this.__data__, r = so(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function qt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qt.prototype.clear = _d;
qt.prototype.delete = bd;
qt.prototype.get = Ed;
qt.prototype.has = Od;
qt.prototype.set = Td;
var ur = Sn(Mt, "Map");
function wd() {
  this.size = 0, this.__data__ = {
    hash: new En(),
    map: new (ur || qt)(),
    string: new En()
  };
}
function Cd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function lo(e, t) {
  var n = e.__data__;
  return Cd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Nd(e) {
  var t = lo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Sd(e) {
  return lo(this, e).get(e);
}
function Id(e) {
  return lo(this, e).has(e);
}
function Ld(e, t) {
  var n = lo(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Jt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Jt.prototype.clear = wd;
Jt.prototype.delete = Nd;
Jt.prototype.get = Sd;
Jt.prototype.has = Id;
Jt.prototype.set = Ld;
var Ad = "Expected a function";
function ma(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ad);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (ma.Cache || Jt)(), n;
}
ma.Cache = Jt;
var Pd = 500;
function Rd(e) {
  var t = ma(e, function(r) {
    return n.size === Pd && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Dd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Md = /\\(\\)?/g, kd = Rd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Dd, function(n, r, o, a) {
    t.push(o ? a.replace(Md, "$1") : r || n);
  }), t;
});
function Fd(e) {
  return e == null ? "" : Wl(e);
}
function io(e, t) {
  return gt(e) ? e : pa(e, t) ? [e] : kd(Fd(e));
}
function yr(e) {
  if (typeof e == "string" || ao(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function va(e, t) {
  t = io(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[yr(t[n++])];
  return n && n == r ? e : void 0;
}
function Wt(e, t, n) {
  var r = e == null ? void 0 : va(e, t);
  return r === void 0 ? n : r;
}
function ql(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var ls = At ? At.isConcatSpreadable : void 0;
function $d(e) {
  return gt(e) || da(e) || !!(ls && e && e[ls]);
}
function Ud(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = $d), o || (o = []); ++a < s; ) {
    var l = e[a];
    n(l) ? ql(o, l) : o[o.length] = l;
  }
  return o;
}
function Vd(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ud(e) : [];
}
function xd(e) {
  return nf(ff(e, void 0, Vd), e + "");
}
function sn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return gt(e) ? e : [e];
}
function Bd() {
  this.__data__ = new qt(), this.size = 0;
}
function Wd(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Hd(e) {
  return this.__data__.get(e);
}
function jd(e) {
  return this.__data__.has(e);
}
var zd = 200;
function Kd(e, t) {
  var n = this.__data__;
  if (n instanceof qt) {
    var r = n.__data__;
    if (!ur || r.length < zd - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Jt(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Kt(e) {
  var t = this.__data__ = new qt(e);
  this.size = t.size;
}
Kt.prototype.clear = Bd;
Kt.prototype.delete = Wd;
Kt.prototype.get = Hd;
Kt.prototype.has = jd;
Kt.prototype.set = Kd;
function Gd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function Yd() {
  return [];
}
var Xd = Object.prototype, qd = Xd.propertyIsEnumerable, is = Object.getOwnPropertySymbols, Jd = is ? function(e) {
  return e == null ? [] : (e = Object(e), Gd(is(e), function(t) {
    return qd.call(e, t);
  }));
} : Yd;
function Zd(e, t, n) {
  var r = t(e);
  return gt(e) ? r : ql(r, n(e));
}
function us(e) {
  return Zd(e, Xl, Jd);
}
var Fo = Sn(Mt, "DataView"), $o = Sn(Mt, "Promise"), Uo = Sn(Mt, "Set"), cs = "[object Map]", Qd = "[object Object]", fs = "[object Promise]", ds = "[object Set]", ps = "[object WeakMap]", ms = "[object DataView]", ep = Nn(Fo), tp = Nn(ur), np = Nn($o), rp = Nn(Uo), op = Nn(Mo), an = Gn;
(Fo && an(new Fo(new ArrayBuffer(1))) != ms || ur && an(new ur()) != cs || $o && an($o.resolve()) != fs || Uo && an(new Uo()) != ds || Mo && an(new Mo()) != ps) && (an = function(e) {
  var t = Gn(e), n = t == Qd ? e.constructor : void 0, r = n ? Nn(n) : "";
  if (r)
    switch (r) {
      case ep:
        return ms;
      case tp:
        return cs;
      case np:
        return fs;
      case rp:
        return ds;
      case op:
        return ps;
    }
  return t;
});
var vs = Mt.Uint8Array, ap = "__lodash_hash_undefined__";
function sp(e) {
  return this.__data__.set(e, ap), this;
}
function lp(e) {
  return this.__data__.has(e);
}
function jr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Jt(); ++t < n; )
    this.add(e[t]);
}
jr.prototype.add = jr.prototype.push = sp;
jr.prototype.has = lp;
function ip(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function up(e, t) {
  return e.has(t);
}
var cp = 1, fp = 2;
function Jl(e, t, n, r, o, a) {
  var s = n & cp, l = e.length, i = t.length;
  if (l != i && !(s && i > l))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, d = !0, v = n & fp ? new jr() : void 0;
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
      if (!ip(t, function(c, h) {
        if (!up(v, h) && (g === c || o(g, c, n, r, a)))
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
function dp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function pp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var mp = 1, vp = 2, gp = "[object Boolean]", _p = "[object Date]", hp = "[object Error]", yp = "[object Map]", bp = "[object Number]", Ep = "[object RegExp]", Op = "[object Set]", Tp = "[object String]", wp = "[object Symbol]", Cp = "[object ArrayBuffer]", Np = "[object DataView]", gs = At ? At.prototype : void 0, Co = gs ? gs.valueOf : void 0;
function Sp(e, t, n, r, o, a, s) {
  switch (n) {
    case Np:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Cp:
      return !(e.byteLength != t.byteLength || !a(new vs(e), new vs(t)));
    case gp:
    case _p:
    case bp:
      return ca(+e, +t);
    case hp:
      return e.name == t.name && e.message == t.message;
    case Ep:
    case Tp:
      return e == t + "";
    case yp:
      var l = dp;
    case Op:
      var i = r & mp;
      if (l || (l = pp), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= vp, s.set(e, t);
      var f = Jl(l(e), l(t), r, o, a, s);
      return s.delete(e), f;
    case wp:
      if (Co)
        return Co.call(e) == Co.call(t);
  }
  return !1;
}
var Ip = 1, Lp = Object.prototype, Ap = Lp.hasOwnProperty;
function Pp(e, t, n, r, o, a) {
  var s = n & Ip, l = us(e), i = l.length, u = us(t), f = u.length;
  if (i != f && !s)
    return !1;
  for (var p = i; p--; ) {
    var d = l[p];
    if (!(s ? d in t : Ap.call(t, d)))
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
var Rp = 1, _s = "[object Arguments]", hs = "[object Array]", Ir = "[object Object]", Dp = Object.prototype, ys = Dp.hasOwnProperty;
function Mp(e, t, n, r, o, a) {
  var s = gt(e), l = gt(t), i = s ? hs : an(e), u = l ? hs : an(t);
  i = i == _s ? Ir : i, u = u == _s ? Ir : u;
  var f = i == Ir, p = u == Ir, d = i == u;
  if (d && ko(e)) {
    if (!ko(t))
      return !1;
    s = !0, f = !1;
  }
  if (d && !f)
    return a || (a = new Kt()), s || Yl(e) ? Jl(e, t, n, r, o, a) : Sp(e, t, i, n, r, o, a);
  if (!(n & Rp)) {
    var v = f && ys.call(e, "__wrapped__"), g = p && ys.call(t, "__wrapped__");
    if (v || g) {
      var m = v ? e.value() : e, O = g ? t.value() : t;
      return a || (a = new Kt()), o(m, O, n, r, a);
    }
  }
  return d ? (a || (a = new Kt()), Pp(e, t, n, r, o, a)) : !1;
}
function uo(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Un(e) && !Un(t) ? e !== e && t !== t : Mp(e, t, n, r, uo, o);
}
var kp = 1, Fp = 2;
function $p(e, t, n, r) {
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
      if (!(p === void 0 ? uo(u, i, kp | Fp, r, f) : p))
        return !1;
    }
  }
  return !0;
}
function Zl(e) {
  return e === e && !cn(e);
}
function Up(e) {
  for (var t = Xl(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Zl(o)];
  }
  return t;
}
function Ql(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Vp(e) {
  var t = Up(e);
  return t.length == 1 && t[0][2] ? Ql(t[0][0], t[0][1]) : function(n) {
    return n === e || $p(n, e, t);
  };
}
function xp(e, t) {
  return e != null && t in Object(e);
}
function Bp(e, t, n) {
  t = io(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = yr(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && fa(o) && ua(s, o) && (gt(e) || da(e)));
}
function ei(e, t) {
  return e != null && Bp(e, t, xp);
}
var Wp = 1, Hp = 2;
function jp(e, t) {
  return pa(e) && Zl(t) ? Ql(yr(e), t) : function(n) {
    var r = Wt(n, e);
    return r === void 0 && r === t ? ei(n, e) : uo(t, r, Wp | Hp);
  };
}
function zp(e) {
  return function(t) {
    return t?.[e];
  };
}
function Kp(e) {
  return function(t) {
    return va(t, e);
  };
}
function Gp(e) {
  return pa(e) ? zp(yr(e)) : Kp(e);
}
function Yp(e) {
  return typeof e == "function" ? e : e == null ? Hl : typeof e == "object" ? gt(e) ? jp(e[0], e[1]) : Vp(e) : Gp(e);
}
var No = function() {
  return Mt.Date.now();
}, Xp = "Expected a function", qp = Math.max, Jp = Math.min;
function Zp(e, t, n) {
  var r, o, a, s, l, i, u = 0, f = !1, p = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Xp);
  t = Qa(t) || 0, cn(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? qp(Qa(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d);
  function v(N) {
    var E = r, R = o;
    return r = o = void 0, u = N, s = e.apply(R, E), s;
  }
  function g(N) {
    return u = N, l = setTimeout(c, t), f ? v(N) : s;
  }
  function m(N) {
    var E = N - i, R = N - u, D = t - E;
    return p ? Jp(D, a - R) : D;
  }
  function O(N) {
    var E = N - i, R = N - u;
    return i === void 0 || E >= t || E < 0 || p && R >= a;
  }
  function c() {
    var N = No();
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
    return l === void 0 ? s : h(No());
  }
  function w() {
    var N = No(), E = O(N);
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
function Qp(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return rf(e, Yp(t), o);
}
function Vo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function rr(e, t) {
  return uo(e, t);
}
function ga(e) {
  return e == null;
}
function em(e) {
  return e === void 0;
}
function ti(e, t, n, r) {
  if (!cn(e))
    return e;
  t = io(t, e);
  for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
    var i = yr(t[o]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (o != s) {
      var f = l[i];
      u = void 0, u === void 0 && (u = cn(f) ? f : ua(t[o + 1]) ? [] : {});
    }
    cf(l, i, u), l = l[i];
  }
  return e;
}
function tm(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], l = va(e, s);
    n(l, s) && ti(a, io(s, e), l);
  }
  return a;
}
function nm(e, t) {
  return tm(e, t, function(n, r) {
    return ei(e, r);
  });
}
var rm = xd(function(e, t) {
  return e == null ? {} : nm(e, t);
});
function om(e, t, n) {
  return e == null ? e : ti(e, t, n);
}
const kn = (e) => e === void 0, zr = (e) => typeof e == "boolean", $e = (e) => typeof e == "number", Kb = (e) => !e && e !== 0 || ft(e) && e.length === 0 || dt(e) && !Object.keys(e).length, rt = (e) => typeof Element > "u" ? !1 : e instanceof Element, am = (e) => It(e) ? !Number.isNaN(Number(e)) : !1;
var sm = Object.defineProperty, lm = Object.defineProperties, im = Object.getOwnPropertyDescriptors, bs = Object.getOwnPropertySymbols, um = Object.prototype.hasOwnProperty, cm = Object.prototype.propertyIsEnumerable, Es = (e, t, n) => t in e ? sm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fm = (e, t) => {
  for (var n in t || (t = {}))
    um.call(t, n) && Es(e, n, t[n]);
  if (bs)
    for (var n of bs(t))
      cm.call(t, n) && Es(e, n, t[n]);
  return e;
}, dm = (e, t) => lm(e, im(t));
function pm(e, t) {
  var n;
  const r = hr();
  return Ml(() => {
    r.value = e();
  }, dm(fm({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), sa(r);
}
var Os;
const Oe = typeof window < "u", Ts = (e) => typeof e == "function", mm = (e) => typeof e == "string", Kr = () => {
}, xo = Oe && ((Os = window?.navigator) == null ? void 0 : Os.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function cr(e) {
  return typeof e == "function" ? e() : T(e);
}
function vm(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
function gm(e, t = {}) {
  let n, r, o = Kr;
  const a = (l) => {
    clearTimeout(l), o(), o = Kr;
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
function _m(e) {
  return e;
}
function hm(e, t) {
  let n, r, o;
  const a = F(!0), s = () => {
    a.value = !0, o();
  };
  q(e, s, { flush: "sync" });
  const l = Ts(t) ? t : t.get, i = Ts(t) ? void 0 : t.set, u = qu((f, p) => (r = f, o = p, {
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
  return Yu() ? (Xu(e), !0) : !1;
}
function ym(e, t = 200, n = {}) {
  return vm(gm(t, n), e);
}
function Gb(e, t = 200, n = {}) {
  const r = F(e.value), o = ym(() => {
    r.value = e.value;
  }, t, n);
  return q(e, () => o()), r;
}
function bm(e, t = !0) {
  We() ? De(e) : t ? e() : je(e);
}
function ni(e, t, n = {}) {
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
  return r && (o.value = !0, Oe && i()), br(l), {
    isPending: sa(o),
    start: i,
    stop: l
  };
}
function Ht(e) {
  var t;
  const n = cr(e);
  return (t = n?.$el) != null ? t : n;
}
const Er = Oe ? window : void 0;
function Be(...e) {
  let t, n, r, o;
  if (mm(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Er) : [t, n, r, o] = e, !t)
    return Kr;
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
let ws = !1;
function Em(e, t, n = {}) {
  const { window: r = Er, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  xo && !ws && (ws = !0, Array.from(r.document.body.children).forEach((d) => d.addEventListener("click", Kr)));
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
function Yb(e = {}) {
  var t;
  const { window: n = Er } = e, r = (t = e.document) != null ? t : n?.document, o = hm(() => null, () => r?.activeElement);
  return n && (Be(n, "blur", (a) => {
    a.relatedTarget === null && o.trigger();
  }, !0), Be(n, "focus", o.trigger, !0)), o;
}
function ri(e, t = !1) {
  const n = F(), r = () => n.value = !!e();
  return r(), bm(r, t), n;
}
const Cs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ns = "__vueuse_ssr_handlers__";
Cs[Ns] = Cs[Ns] || {};
var Ss = Object.getOwnPropertySymbols, Om = Object.prototype.hasOwnProperty, Tm = Object.prototype.propertyIsEnumerable, wm = (e, t) => {
  var n = {};
  for (var r in e)
    Om.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ss)
    for (var r of Ss(e))
      t.indexOf(r) < 0 && Tm.call(e, r) && (n[r] = e[r]);
  return n;
};
function Bt(e, t, n = {}) {
  const r = n, { window: o = Er } = r, a = wm(r, ["window"]);
  let s;
  const l = ri(() => o && "ResizeObserver" in o), i = () => {
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
var Is = Object.getOwnPropertySymbols, Cm = Object.prototype.hasOwnProperty, Nm = Object.prototype.propertyIsEnumerable, Sm = (e, t) => {
  var n = {};
  for (var r in e)
    Cm.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Is)
    for (var r of Is(e))
      t.indexOf(r) < 0 && Nm.call(e, r) && (n[r] = e[r]);
  return n;
};
function Im(e, t, n = {}) {
  const r = n, { window: o = Er } = r, a = Sm(r, ["window"]);
  let s;
  const l = ri(() => o && "MutationObserver" in o), i = () => {
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
var Ls;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ls || (Ls = {}));
var Lm = Object.defineProperty, As = Object.getOwnPropertySymbols, Am = Object.prototype.hasOwnProperty, Pm = Object.prototype.propertyIsEnumerable, Ps = (e, t, n) => t in e ? Lm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Rm = (e, t) => {
  for (var n in t || (t = {}))
    Am.call(t, n) && Ps(e, n, t[n]);
  if (As)
    for (var n of As(t))
      Pm.call(t, n) && Ps(e, n, t[n]);
  return e;
};
const Dm = {
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
Rm({
  linear: _m
}, Dm);
class oi extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Mm(e, t) {
  throw new oi(`[${e}] ${t}`);
}
function at(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = It(e) ? new oi(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Rs = {
  current: 0
}, Ds = F(0), ai = 2e3, Ms = Symbol("elZIndexContextKey"), si = Symbol("zIndexContextKey"), li = (e) => {
  const t = We() ? ue(Ms, Rs) : Rs, n = e || (We() ? ue(si, void 0) : void 0), r = L(() => {
    const s = T(n);
    return $e(s) ? s : ai;
  }), o = L(() => r.value + Ds.value), a = () => (t.current++, Ds.value = t.current, o.value);
  return !Oe && !ue(Ms) && at("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var km = {
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
const Fm = (e) => (t, n) => $m(t, n, T(e)), $m = (e, t, n) => Wt(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Um = (e) => {
  const t = L(() => T(e).name), n = Ju(e) ? e : F(e);
  return {
    lang: t,
    locale: n,
    t: Fm(e)
  };
}, ii = Symbol("localeContextKey"), ui = (e) => {
  const t = e || ue(ii, F());
  return Um(L(() => t.value || km));
}, ci = "__epPropKey", G = (e) => e, Vm = (e) => dt(e) && !!e[ci], co = (e, t) => {
  if (!dt(e) || Vm(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, i = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), Ka(e, "default") && p.push(o), f || (f = p.includes(u))), s && (f || (f = s(u))), !f && p.length > 0) {
        const d = [...new Set(p)].map((v) => JSON.stringify(v)).join(", ");
        Zu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${d}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [ci]: !0
  };
  return Ka(e, "default") && (i.default = o), i;
}, he = (e) => Vo(Object.entries(e).map(([t, n]) => [
  t,
  co(n, t)
])), fi = ["", "default", "small", "large"], di = co({
  type: String,
  values: fi,
  required: !1
}), pi = Symbol("size"), xm = () => {
  const e = ue(pi, {});
  return L(() => T(e.size) || "");
}, mi = Symbol("emptyValuesContextKey"), Bm = "use-empty-values", Wm = ["", void 0, null], Hm = void 0, vi = he({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ae(e) ? !e() : !e
  }
}), jm = (e, t) => {
  const n = We() ? ue(mi, F({})) : F({}), r = L(() => e.emptyValues || n.value.emptyValues || Wm), o = L(() => Ae(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ae(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : t !== void 0 ? t : Hm), a = (s) => r.value.includes(s);
  return r.value.includes(o.value) || at(Bm, "value-on-clear should be a value of empty-values"), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, ks = (e) => Object.keys(e), Xb = (e, t, n) => ({
  get value() {
    return Wt(e, t, n);
  },
  set value(r) {
    om(e, t, r);
  }
}), Gr = F();
function gi(e, t = void 0) {
  const n = We() ? ue(Ul, Gr) : Gr;
  return e ? L(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
function _i(e, t) {
  const n = gi(), r = Ue(e, L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || $r;
  })), o = ui(L(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), a = li(L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || ai;
  })), s = L(() => {
    var l;
    return T(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return hi(L(() => T(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const hi = (e, t, n = !1) => {
  var r;
  const o = !!We(), a = o ? gi() : void 0, s = (r = void 0) != null ? r : o ? Lt : void 0;
  if (!s) {
    at("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = L(() => {
    const i = T(e);
    return a?.value ? zm(a.value, i) : i;
  });
  return s(Ul, l), s(ii, L(() => l.value.locale)), s(Vl, L(() => l.value.namespace)), s(si, L(() => l.value.zIndex)), s(pi, {
    size: L(() => l.value.size || "")
  }), s(mi, L(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Gr.value) && (Gr.value = l.value), l;
}, zm = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...ks(e), ...ks(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Pn = "update:modelValue", yi = "change", qb = "input";
var Te = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Km = "utils/dom/style", bi = (e = "") => e.split(" ").filter((t) => !!t.trim()), Jb = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Zb = (e, t) => {
  !e || !t.trim() || e.classList.add(...bi(t));
}, Qb = (e, t) => {
  !e || !t.trim() || e.classList.remove(...bi(t));
}, eE = (e, t) => {
  var n;
  if (!Oe || !e || !t)
    return "";
  let r = Qu(t);
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
  if ($e(e) || am(e))
    return `${e}${t}`;
  if (It(e))
    return e;
  at(Km, "binding value must be a string or number");
}
let Lr;
const tE = (e) => {
  var t;
  if (!Oe)
    return 0;
  if (Lr !== void 0)
    return Lr;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const r = n.offsetWidth;
  n.style.overflow = "scroll";
  const o = document.createElement("div");
  o.style.width = "100%", n.appendChild(o);
  const a = o.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Lr = r - a, Lr;
};
function Gm(e, t) {
  if (!Oe)
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
}, Ei = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Oi = (e) => (e.install = Br, e), Ym = he({
  size: {
    type: G([Number, String])
  },
  color: {
    type: String
  }
}), Xm = x({
  name: "ElIcon",
  inheritAttrs: !1
}), qm = /* @__PURE__ */ x({
  ...Xm,
  props: Ym,
  setup(e) {
    const t = e, n = Ue("icon"), r = L(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: kn(o) ? void 0 : fr(o),
        "--color": a
      };
    });
    return (o, a) => (M(), z("i", oo({
      class: T(n).b(),
      style: T(r)
    }, o.$attrs), [
      te(o.$slots, "default")
    ], 16));
  }
});
var Jm = /* @__PURE__ */ Te(qm, [["__file", "icon.vue"]]);
const On = fn(Jm);
/*! Element Plus Icons Vue v2.3.1 */
var Zm = /* @__PURE__ */ x({
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
}), Qm = Zm, ev = /* @__PURE__ */ x({
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
}), nE = ev, tv = /* @__PURE__ */ x({
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
}), rE = tv, nv = /* @__PURE__ */ x({
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
}), oE = nv, rv = /* @__PURE__ */ x({
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
}), aE = rv, ov = /* @__PURE__ */ x({
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
}), sE = ov, av = /* @__PURE__ */ x({
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
}), sv = av, lv = /* @__PURE__ */ x({
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
}), iv = lv, uv = /* @__PURE__ */ x({
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
}), Ti = uv, cv = /* @__PURE__ */ x({
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
}), lE = cv, fv = /* @__PURE__ */ x({
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
}), Yr = fv, dv = /* @__PURE__ */ x({
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
}), iE = dv, pv = /* @__PURE__ */ x({
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
}), uE = pv, mv = /* @__PURE__ */ x({
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
}), cE = mv, vv = /* @__PURE__ */ x({
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
}), gv = vv, _v = /* @__PURE__ */ x({
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
}), hv = _v, yv = /* @__PURE__ */ x({
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
}), fE = yv, bv = /* @__PURE__ */ x({
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
}), dE = bv, Ev = /* @__PURE__ */ x({
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
}), pE = Ev, Ov = /* @__PURE__ */ x({
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
}), Tv = Ov, wv = /* @__PURE__ */ x({
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
}), mE = wv, Cv = /* @__PURE__ */ x({
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
}), Nv = Cv;
const Xr = G([
  String,
  Object,
  Function
]), Sv = {
  Close: Yr
}, Iv = {
  Close: Yr
}, qr = {
  success: Tv,
  warning: Nv,
  error: iv,
  info: gv
}, Lv = {
  validating: hv,
  success: sv,
  error: Ti
}, Av = (e) => e, Pv = he({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), fo = (e) => rm(Pv, e), _a = Symbol("formContextKey"), Jr = Symbol("formItemContextKey"), Bo = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Rv = Symbol("elIdInjection"), wi = () => We() ? ue(Rv, Bo) : Bo, po = (e) => {
  const t = wi();
  !Oe && t === Bo && at("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = ia();
  return pm(() => T(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Dv = () => {
  const e = ue(_a, void 0), t = ue(Jr, void 0);
  return {
    form: e,
    formItem: t
  };
}, Mv = (e, {
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
  return De(() => {
    a = q([ln(e, "id"), n], ([l, i]) => {
      const u = l ?? (i ? void 0 : po().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !i && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), kl(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, Ci = (e) => {
  const t = We();
  return L(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Ni = (e, t = {}) => {
  const n = F(void 0), r = t.prop ? n : Ci("size"), o = t.global ? n : xm(), a = t.form ? { size: void 0 } : ue(_a, void 0), s = t.formItem ? { size: void 0 } : ue(Jr, void 0);
  return L(() => r.value || T(e) || s?.size || a?.size || o.value || "");
}, vE = (e) => {
  const t = Ci("disabled"), n = ue(_a, void 0);
  return L(() => t.value || T(e) || n?.disabled || !1);
};
function kv(e, {
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
const Fv = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function $v({
  afterComposition: e,
  emit: t
}) {
  const n = F(!1), r = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, o = (l) => {
    var i;
    t?.("compositionupdate", l);
    const u = (i = l.target) == null ? void 0 : i.value, f = u[u.length - 1] || "";
    n.value = !Fv(f);
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
const Ln = 4, Uv = {
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
}, Vv = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ha = Symbol("scrollbarContextKey"), xv = he({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Bv = "Thumb", Wv = /* @__PURE__ */ x({
  __name: "thumb",
  props: xv,
  setup(e) {
    const t = e, n = ue(ha), r = Ue("scrollbar");
    n || Mm(Bv, "can not inject scrollbar context");
    const o = F(), a = F(), s = F({}), l = F(!1);
    let i = !1, u = !1, f = Oe ? document.onselectstart : null;
    const p = L(() => Uv[t.vertical ? "vertical" : "horizontal"]), d = L(() => Vv({
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
    Dt(() => {
      w(), document.removeEventListener("mouseup", h);
    });
    const w = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Be(ln(n, "scrollbarElement"), "mousemove", C), Be(ln(n, "scrollbarElement"), "mouseleave", b), (N, E) => (M(), ae(Kn, {
      name: T(r).b("fade"),
      persisted: ""
    }, {
      default: ee(() => [
        nt(H("div", {
          ref_key: "instance",
          ref: o,
          class: W([T(r).e("bar"), T(r).is(T(p).key)]),
          onMousedown: m
        }, [
          H("div", {
            ref_key: "thumb",
            ref: a,
            class: W(T(r).e("thumb")),
            style: Ge(T(d)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [Gt, N.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Fs = /* @__PURE__ */ Te(Wv, [["__file", "thumb.vue"]]);
const Hv = he({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), jv = /* @__PURE__ */ x({
  __name: "bar",
  props: Hv,
  setup(e, { expose: t }) {
    const n = e, r = ue(ha), o = F(0), a = F(0), s = F(""), l = F(""), i = F(1), u = F(1);
    return t({
      handleScroll: (d) => {
        if (d) {
          const v = d.offsetHeight - Ln, g = d.offsetWidth - Ln;
          a.value = d.scrollTop * 100 / v * i.value, o.value = d.scrollLeft * 100 / g * u.value;
        }
      },
      update: () => {
        const d = r?.wrapElement;
        if (!d)
          return;
        const v = d.offsetHeight - Ln, g = d.offsetWidth - Ln, m = v ** 2 / d.scrollHeight, O = g ** 2 / d.scrollWidth, c = Math.max(m, n.minSize), h = Math.max(O, n.minSize);
        i.value = m / (v - m) / (c / (v - c)), u.value = O / (g - O) / (h / (g - h)), l.value = c + Ln < v ? `${c}px` : "", s.value = h + Ln < g ? `${h}px` : "";
      }
    }), (d, v) => (M(), z(un, null, [
      _e(Fs, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      _e(Fs, {
        move: a.value,
        ratio: i.value,
        size: l.value,
        vertical: "",
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var zv = /* @__PURE__ */ Te(jv, [["__file", "bar.vue"]]);
const Kv = he({
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
  ...fo(["ariaLabel", "ariaOrientation"])
}), Gv = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every($e)
}, Wo = "ElScrollbar", Yv = x({
  name: Wo
}), Xv = /* @__PURE__ */ x({
  ...Yv,
  props: Kv,
  emits: Gv,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Ue("scrollbar");
    let a, s, l = 0, i = 0;
    const u = F(), f = F(), p = F(), d = F(), v = L(() => {
      const w = {};
      return r.height && (w.height = fr(r.height)), r.maxHeight && (w.maxHeight = fr(r.maxHeight)), [r.wrapStyle, w];
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
      dt(w) ? f.value.scrollTo(w) : $e(w) && $e(N) && f.value.scrollTo(w, N);
    }
    const h = (w) => {
      if (!$e(w)) {
        at(Wo, "value must be a number");
        return;
      }
      f.value.scrollTop = w;
    }, C = (w) => {
      if (!$e(w)) {
        at(Wo, "value must be a number");
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
    }), Lt(ha, $n({
      scrollbarElement: u,
      wrapElement: f
    })), ec(() => {
      f.value && (f.value.scrollTop = l, f.value.scrollLeft = i);
    }), De(() => {
      r.native || je(() => {
        b();
      });
    }), tc(() => b()), t({
      wrapRef: f,
      update: b,
      scrollTo: c,
      setScrollTop: h,
      setScrollLeft: C,
      handleScroll: O
    }), (w, N) => (M(), z("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: W(T(o).b())
    }, [
      H("div", {
        ref_key: "wrapRef",
        ref: f,
        class: W(T(g)),
        style: Ge(T(v)),
        tabindex: w.tabindex,
        onScroll: O
      }, [
        (M(), ae(Fn(w.tag), {
          id: w.id,
          ref_key: "resizeRef",
          ref: p,
          class: W(T(m)),
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
      w.native ? le("v-if", !0) : (M(), ae(zv, {
        key: 0,
        ref_key: "barRef",
        ref: d,
        always: w.always,
        "min-size": w.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var qv = /* @__PURE__ */ Te(Xv, [["__file", "scrollbar.vue"]]);
const Jv = fn(qv), ya = Symbol("popper"), Si = Symbol("popperContent"), Zv = [
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
    values: Zv,
    default: "tooltip"
  }
}), Qv = x({
  name: "ElPopper",
  inheritAttrs: !1
}), eg = /* @__PURE__ */ x({
  ...Qv,
  props: Ii,
  setup(e, { expose: t }) {
    const n = e, r = F(), o = F(), a = F(), s = F(), l = L(() => n.role), i = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: l
    };
    return t(i), Lt(ya, i), (u, f) => te(u.$slots, "default");
  }
});
var tg = /* @__PURE__ */ Te(eg, [["__file", "popper.vue"]]);
const Li = he({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), ng = x({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), rg = /* @__PURE__ */ x({
  ...ng,
  props: Li,
  setup(e, { expose: t }) {
    const n = e, r = Ue("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = ue(Si, void 0);
    return q(() => n.arrowOffset, (l) => {
      o.value = l;
    }), Dt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (l, i) => (M(), z("span", {
      ref_key: "arrowRef",
      ref: a,
      class: W(T(r).e("arrow")),
      style: Ge(T(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var og = /* @__PURE__ */ Te(rg, [["__file", "arrow.vue"]]);
const Ai = he({
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
}), Pi = Symbol("elForwardRef"), ag = (e) => {
  Lt(Pi, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, sg = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Ho = (e) => {
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
}, So = "ElOnlyChild", lg = x({
  name: So,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = ue(Pi), a = sg((r = o?.setForwardRef) != null ? r : Br);
    return () => {
      var s;
      const l = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!l)
        return null;
      if (l.length > 1)
        return at(So, "requires exact only one valid child."), null;
      const i = Ri(l);
      return i ? nt(nc(i, n), [[a]]) : (at(So, "no valid child node found"), null);
    };
  }
});
function Ri(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (dt(n))
      switch (n.type) {
        case rc:
          continue;
        case Fl:
        case "svg":
          return $s(n);
        case un:
          return Ri(n.children);
        default:
          return n;
      }
    return $s(n);
  }
  return null;
}
function $s(e) {
  const t = Ue("only-child");
  return _e("span", {
    class: t.e("content")
  }, [e]);
}
const ig = x({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), ug = /* @__PURE__ */ x({
  ...ig,
  props: Ai,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = ue(ya, void 0);
    ag(o);
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
        }), Ho(p) && (u = q([a, s, l, i], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, m) => {
            ga(v[m]) ? p.removeAttribute(g) : p.setAttribute(g, v[m]);
          });
        }, { immediate: !0 }))), rt(d) && Ho(d) && [
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
    }), (p, d) => p.virtualTriggering ? le("v-if", !0) : (M(), ae(T(lg), oo({ key: 0 }, p.$attrs, {
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
var cg = /* @__PURE__ */ Te(ug, [["__file", "trigger.vue"]]);
const Io = "focus-trap.focus-after-trapped", Lo = "focus-trap.focus-after-released", fg = "focus-trap.focusout-prevented", Us = {
  cancelable: !0,
  bubbles: !1
}, dg = {
  cancelable: !0,
  bubbles: !1
}, Vs = "focusAfterTrapped", xs = "focusAfterReleased", pg = Symbol("elFocusTrap"), ba = F(), mo = F(0), Ea = F(0);
let Ar = 0;
const Di = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Bs = (e, t) => {
  for (const n of e)
    if (!mg(n, t))
      return n;
}, mg = (e, t) => {
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
}, vg = (e) => {
  const t = Di(e), n = Bs(t, e), r = Bs(t.reverse(), e);
  return [n, r];
}, gg = (e) => e instanceof HTMLInputElement && "select" in e, Vt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    rt(e) && !Ho(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Ea.value = window.performance.now(), e !== n && gg(e) && t && e.select(), rt(e) && r && e.removeAttribute("tabindex");
  }
};
function Ws(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const _g = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Ws(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Ws(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, hg = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Vt(r, t), document.activeElement !== n)
      return;
}, Hs = _g(), yg = () => mo.value > Ea.value, Pr = () => {
  ba.value = "pointer", mo.value = window.performance.now();
}, js = () => {
  ba.value = "keyboard", mo.value = window.performance.now();
}, bg = () => (De(() => {
  Ar === 0 && (document.addEventListener("mousedown", Pr), document.addEventListener("touchstart", Pr), document.addEventListener("keydown", js)), Ar++;
}), Dt(() => {
  Ar--, Ar <= 0 && (document.removeEventListener("mousedown", Pr), document.removeEventListener("touchstart", Pr), document.removeEventListener("keydown", js));
}), {
  focusReason: ba,
  lastUserFocusTimestamp: mo,
  lastAutomatedFocusTimestamp: Ea
}), Rr = (e) => new CustomEvent(fg, {
  ...dg,
  detail: e
}), Nt = {
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
const zs = (e) => {
  e.code === Nt.esc && Rn.forEach((t) => t(e));
}, Eg = (e) => {
  De(() => {
    Rn.length === 0 && document.addEventListener("keydown", zs), Oe && Rn.push(e);
  }), Dt(() => {
    Rn = Rn.filter((t) => t !== e), Rn.length === 0 && Oe && document.removeEventListener("keydown", zs);
  });
}, Og = x({
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
    xs,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = F();
    let r, o;
    const { focusReason: a } = bg();
    Eg((g) => {
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
      const { code: m, altKey: O, ctrlKey: c, metaKey: h, currentTarget: C, shiftKey: b } = g, { loop: w } = e, N = m === Nt.tab && !O && !c && !h, E = document.activeElement;
      if (N && E) {
        const R = C, [D, B] = vg(R);
        if (D && B) {
          if (!b && E === B) {
            const j = Rr({
              focusReason: a.value
            });
            t("focusout-prevented", j), j.defaultPrevented || (g.preventDefault(), w && Vt(D, !0));
          } else if (b && [D, R].includes(E)) {
            const j = Rr({
              focusReason: a.value
            });
            t("focusout-prevented", j), j.defaultPrevented || (g.preventDefault(), w && Vt(B, !0));
          }
        } else if (E === R) {
          const j = Rr({
            focusReason: a.value
          });
          t("focusout-prevented", j), j.defaultPrevented || g.preventDefault();
        }
      }
    };
    Lt(pg, {
      focusTrapRef: n,
      onKeydown: l
    }), q(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), q([n], ([g], [m]) => {
      g && (g.addEventListener("keydown", l), g.addEventListener("focusin", f), g.addEventListener("focusout", p)), m && (m.removeEventListener("keydown", l), m.removeEventListener("focusin", f), m.removeEventListener("focusout", p));
    });
    const i = (g) => {
      t(Vs, g);
    }, u = (g) => t(xs, g), f = (g) => {
      const m = T(n);
      if (!m)
        return;
      const O = g.target, c = g.relatedTarget, h = O && m.contains(O);
      e.trapped || c && m.contains(c) || (r = c), h && t("focusin", g), !s.paused && e.trapped && (h ? o = O : Vt(o, !0));
    }, p = (g) => {
      const m = T(n);
      if (!(s.paused || !m))
        if (e.trapped) {
          const O = g.relatedTarget;
          !ga(O) && !m.contains(O) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const c = Rr({
                focusReason: a.value
              });
              t("focusout-prevented", c), c.defaultPrevented || Vt(o, !0);
            }
          }, 0);
        } else {
          const O = g.target;
          O && m.contains(O) || t("focusout", g);
        }
    };
    async function d() {
      await je();
      const g = T(n);
      if (g) {
        Hs.push(s);
        const m = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = m, !g.contains(m)) {
          const c = new Event(Io, Us);
          g.addEventListener(Io, i), g.dispatchEvent(c), c.defaultPrevented || je(() => {
            let h = e.focusStartEl;
            It(h) || (Vt(h), document.activeElement !== h && (h = "first")), h === "first" && hg(Di(g), !0), (document.activeElement === m || h === "container") && Vt(g);
          });
        }
      }
    }
    function v() {
      const g = T(n);
      if (g) {
        g.removeEventListener(Io, i);
        const m = new CustomEvent(Lo, {
          ...Us,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(Lo, u), g.dispatchEvent(m), !m.defaultPrevented && (a.value == "keyboard" || !yg() || g.contains(document.activeElement)) && Vt(r ?? document.body), g.removeEventListener(Lo, u), Hs.remove(s);
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
function Tg(e, t, n, r, o, a) {
  return te(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var wg = /* @__PURE__ */ Te(Og, [["render", Tg], ["__file", "focus-trap.vue"]]), Ye = "top", st = "bottom", lt = "right", Xe = "left", Oa = "auto", Or = [Ye, st, lt, Xe], Vn = "start", dr = "end", Cg = "clippingParents", Mi = "viewport", Qn = "popper", Ng = "reference", Ks = Or.reduce(function(e, t) {
  return e.concat([t + "-" + Vn, t + "-" + dr]);
}, []), vo = [].concat(Or, [Oa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Vn, t + "-" + dr]);
}, []), Sg = "beforeRead", Ig = "read", Lg = "afterRead", Ag = "beforeMain", Pg = "main", Rg = "afterMain", Dg = "beforeWrite", Mg = "write", kg = "afterWrite", Fg = [Sg, Ig, Lg, Ag, Pg, Rg, Dg, Mg, kg];
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
function Tn(e) {
  var t = Qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function ot(e) {
  var t = Qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ta(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function $g(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !ot(a) || !Pt(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Ug(e) {
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
var ki = { name: "applyStyles", enabled: !0, phase: "write", fn: $g, effect: Ug, requires: ["computeStyles"] };
function St(e) {
  return e.split("-")[0];
}
var yn = Math.max, Zr = Math.min, xn = Math.round;
function jo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Fi() {
  return !/^((?!chrome|android).)*safari/i.test(jo());
}
function Bn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && ot(e) && (o = e.offsetWidth > 0 && xn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && xn(r.height) / e.offsetHeight || 1);
  var s = Tn(e) ? Qe(e) : window, l = s.visualViewport, i = !Fi() && n, u = (r.left + (i && l ? l.offsetLeft : 0)) / o, f = (r.top + (i && l ? l.offsetTop : 0)) / a, p = r.width / o, d = r.height / a;
  return { width: p, height: d, top: f, right: u + p, bottom: f + d, left: u, x: u, y: f };
}
function wa(e) {
  var t = Bn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function $i(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ta(n)) {
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
function Vg(e) {
  return ["table", "td", "th"].indexOf(Pt(e)) >= 0;
}
function dn(e) {
  return ((Tn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function go(e) {
  return Pt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ta(e) ? e.host : null) || dn(e);
}
function Gs(e) {
  return !ot(e) || Yt(e).position === "fixed" ? null : e.offsetParent;
}
function xg(e) {
  var t = /firefox/i.test(jo()), n = /Trident/i.test(jo());
  if (n && ot(e)) {
    var r = Yt(e);
    if (r.position === "fixed") return null;
  }
  var o = go(e);
  for (Ta(o) && (o = o.host); ot(o) && ["html", "body"].indexOf(Pt(o)) < 0; ) {
    var a = Yt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Tr(e) {
  for (var t = Qe(e), n = Gs(e); n && Vg(n) && Yt(n).position === "static"; ) n = Gs(n);
  return n && (Pt(n) === "html" || Pt(n) === "body" && Yt(n).position === "static") ? t : n || xg(e) || t;
}
function Ca(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function or(e, t, n) {
  return yn(e, Zr(t, n));
}
function Bg(e, t, n) {
  var r = or(e, t, n);
  return r > n ? n : r;
}
function Ui() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Vi(e) {
  return Object.assign({}, Ui(), e);
}
function xi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Wg = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Vi(typeof e != "number" ? e : xi(e, Or));
};
function Hg(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = St(n.placement), i = Ca(l), u = [Xe, lt].indexOf(l) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = Wg(o.padding, n), d = wa(a), v = i === "y" ? Ye : Xe, g = i === "y" ? st : lt, m = n.rects.reference[f] + n.rects.reference[i] - s[i] - n.rects.popper[f], O = s[i] - n.rects.reference[i], c = Tr(a), h = c ? i === "y" ? c.clientHeight || 0 : c.clientWidth || 0 : 0, C = m / 2 - O / 2, b = p[v], w = h - d[f] - p[g], N = h / 2 - d[f] / 2 + C, E = or(b, N, w), R = i;
    n.modifiersData[r] = (t = {}, t[R] = E, t.centerOffset = E - N, t);
  }
}
function jg(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || $i(t.elements.popper, o) && (t.elements.arrow = o));
}
var zg = { name: "arrow", enabled: !0, phase: "main", fn: Hg, effect: jg, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Wn(e) {
  return e.split("-")[1];
}
var Kg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Gg(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: xn(n * o) / o || 0, y: xn(r * o) / o || 0 };
}
function Ys(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, l = e.position, i = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, d = s.x, v = d === void 0 ? 0 : d, g = s.y, m = g === void 0 ? 0 : g, O = typeof f == "function" ? f({ x: v, y: m }) : { x: v, y: m };
  v = O.x, m = O.y;
  var c = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), C = Xe, b = Ye, w = window;
  if (u) {
    var N = Tr(n), E = "clientHeight", R = "clientWidth";
    if (N === Qe(n) && (N = dn(n), Yt(N).position !== "static" && l === "absolute" && (E = "scrollHeight", R = "scrollWidth")), N = N, o === Ye || (o === Xe || o === lt) && a === dr) {
      b = st;
      var D = p && N === w && w.visualViewport ? w.visualViewport.height : N[E];
      m -= D - r.height, m *= i ? 1 : -1;
    }
    if (o === Xe || (o === Ye || o === st) && a === dr) {
      C = lt;
      var B = p && N === w && w.visualViewport ? w.visualViewport.width : N[R];
      v -= B - r.width, v *= i ? 1 : -1;
    }
  }
  var X = Object.assign({ position: l }, u && Kg), j = f === !0 ? Gg({ x: v, y: m }, Qe(n)) : { x: v, y: m };
  if (v = j.x, m = j.y, i) {
    var Q;
    return Object.assign({}, X, (Q = {}, Q[b] = h ? "0" : "", Q[C] = c ? "0" : "", Q.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", Q));
  }
  return Object.assign({}, X, (t = {}, t[b] = h ? m + "px" : "", t[C] = c ? v + "px" : "", t.transform = "", t));
}
function Yg(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, i = l === void 0 ? !0 : l, u = { placement: St(t.placement), variation: Wn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ys(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ys(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Bi = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Yg, data: {} }, Dr = { passive: !0 };
function Xg(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, i = Qe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Dr);
  }), l && i.addEventListener("resize", n.update, Dr), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Dr);
    }), l && i.removeEventListener("resize", n.update, Dr);
  };
}
var Wi = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Xg, data: {} }, qg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ur(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return qg[t];
  });
}
var Jg = { start: "end", end: "start" };
function Xs(e) {
  return e.replace(/start|end/g, function(t) {
    return Jg[t];
  });
}
function Na(e) {
  var t = Qe(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Sa(e) {
  return Bn(dn(e)).left + Na(e).scrollLeft;
}
function Zg(e, t) {
  var n = Qe(e), r = dn(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, i = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Fi();
    (u || !u && t === "fixed") && (l = o.offsetLeft, i = o.offsetTop);
  }
  return { width: a, height: s, x: l + Sa(e), y: i };
}
function Qg(e) {
  var t, n = dn(e), r = Na(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = yn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = yn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Sa(e), i = -r.scrollTop;
  return Yt(o || n).direction === "rtl" && (l += yn(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: l, y: i };
}
function Ia(e) {
  var t = Yt(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Hi(e) {
  return ["html", "body", "#document"].indexOf(Pt(e)) >= 0 ? e.ownerDocument.body : ot(e) && Ia(e) ? e : Hi(go(e));
}
function ar(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Hi(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Qe(r), s = o ? [a].concat(a.visualViewport || [], Ia(r) ? r : []) : r, l = t.concat(s);
  return o ? l : l.concat(ar(go(s)));
}
function zo(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function e_(e, t) {
  var n = Bn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function qs(e, t, n) {
  return t === Mi ? zo(Zg(e, n)) : Tn(t) ? e_(t, n) : zo(Qg(dn(e)));
}
function t_(e) {
  var t = ar(go(e)), n = ["absolute", "fixed"].indexOf(Yt(e).position) >= 0, r = n && ot(e) ? Tr(e) : e;
  return Tn(r) ? t.filter(function(o) {
    return Tn(o) && $i(o, r) && Pt(o) !== "body";
  }) : [];
}
function n_(e, t, n, r) {
  var o = t === "clippingParents" ? t_(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], l = a.reduce(function(i, u) {
    var f = qs(e, u, r);
    return i.top = yn(f.top, i.top), i.right = Zr(f.right, i.right), i.bottom = Zr(f.bottom, i.bottom), i.left = yn(f.left, i.left), i;
  }, qs(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ji(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? St(r) : null, a = r ? Wn(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, i;
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
  var u = o ? Ca(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case Vn:
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, i = l === void 0 ? Cg : l, u = n.rootBoundary, f = u === void 0 ? Mi : u, p = n.elementContext, d = p === void 0 ? Qn : p, v = n.altBoundary, g = v === void 0 ? !1 : v, m = n.padding, O = m === void 0 ? 0 : m, c = Vi(typeof O != "number" ? O : xi(O, Or)), h = d === Qn ? Ng : Qn, C = e.rects.popper, b = e.elements[g ? h : d], w = n_(Tn(b) ? b : b.contextElement || dn(e.elements.popper), i, f, s), N = Bn(e.elements.reference), E = ji({ reference: N, element: C, placement: o }), R = zo(Object.assign({}, C, E)), D = d === Qn ? R : N, B = { top: w.top - D.top + c.top, bottom: D.bottom - w.bottom + c.bottom, left: w.left - D.left + c.left, right: D.right - w.right + c.right }, X = e.modifiersData.offset;
  if (d === Qn && X) {
    var j = X[o];
    Object.keys(B).forEach(function(Q) {
      var Ie = [lt, st].indexOf(Q) >= 0 ? 1 : -1, me = [Ye, st].indexOf(Q) >= 0 ? "y" : "x";
      B[Q] += j[me] * Ie;
    });
  }
  return B;
}
function r_(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? vo : i, f = Wn(r), p = f ? l ? Ks : Ks.filter(function(g) {
    return Wn(g) === f;
  }) : Or, d = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  d.length === 0 && (d = p);
  var v = d.reduce(function(g, m) {
    return g[m] = pr(e, { placement: m, boundary: o, rootBoundary: a, padding: s })[St(m)], g;
  }, {});
  return Object.keys(v).sort(function(g, m) {
    return v[g] - v[m];
  });
}
function o_(e) {
  if (St(e) === Oa) return [];
  var t = Ur(e);
  return [Xs(e), t, Xs(t)];
}
function a_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, i = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, d = n.altBoundary, v = n.flipVariations, g = v === void 0 ? !0 : v, m = n.allowedAutoPlacements, O = t.options.placement, c = St(O), h = c === O, C = i || (h || !g ? [Ur(O)] : o_(O)), b = [O].concat(C).reduce(function(qe, Ve) {
      return qe.concat(St(Ve) === Oa ? r_(t, { placement: Ve, boundary: f, rootBoundary: p, padding: u, flipVariations: g, allowedAutoPlacements: m }) : Ve);
    }, []), w = t.rects.reference, N = t.rects.popper, E = /* @__PURE__ */ new Map(), R = !0, D = b[0], B = 0; B < b.length; B++) {
      var X = b[B], j = St(X), Q = Wn(X) === Vn, Ie = [Ye, st].indexOf(j) >= 0, me = Ie ? "width" : "height", oe = pr(t, { placement: X, boundary: f, rootBoundary: p, altBoundary: d, padding: u }), V = Ie ? Q ? lt : Xe : Q ? st : Ye;
      w[me] > N[me] && (V = Ur(V));
      var ge = Ur(V), we = [];
      if (a && we.push(oe[j] <= 0), l && we.push(oe[V] <= 0, oe[ge] <= 0), we.every(function(qe) {
        return qe;
      })) {
        D = X, R = !1;
        break;
      }
      E.set(X, we);
    }
    if (R) for (var Ce = g ? 3 : 1, it = function(qe) {
      var Ve = b.find(function(kt) {
        var xe = E.get(kt);
        if (xe) return xe.slice(0, qe).every(function(fe) {
          return fe;
        });
      });
      if (Ve) return D = Ve, "break";
    }, et = Ce; et > 0; et--) {
      var _t = it(et);
      if (_t === "break") break;
    }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
var s_ = { name: "flip", enabled: !0, phase: "main", fn: a_, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Js(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Zs(e) {
  return [Ye, lt, st, Xe].some(function(t) {
    return e[t] >= 0;
  });
}
function l_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = pr(t, { elementContext: "reference" }), l = pr(t, { altBoundary: !0 }), i = Js(s, r), u = Js(l, o, a), f = Zs(i), p = Zs(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var i_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: l_ };
function u_(e, t, n) {
  var r = St(e), o = [Xe, Ye].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * o, [Xe, lt].indexOf(r) >= 0 ? { x: l, y: s } : { x: s, y: l };
}
function c_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = vo.reduce(function(f, p) {
    return f[p] = u_(p, t.rects, a), f;
  }, {}), l = s[t.placement], i = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var f_ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: c_ };
function d_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ji({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var zi = { name: "popperOffsets", enabled: !0, phase: "read", fn: d_, data: {} };
function p_(e) {
  return e === "x" ? "y" : "x";
}
function m_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, i = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, d = n.tether, v = d === void 0 ? !0 : d, g = n.tetherOffset, m = g === void 0 ? 0 : g, O = pr(t, { boundary: i, rootBoundary: u, padding: p, altBoundary: f }), c = St(t.placement), h = Wn(t.placement), C = !h, b = Ca(c), w = p_(b), N = t.modifiersData.popperOffsets, E = t.rects.reference, R = t.rects.popper, D = typeof m == "function" ? m(Object.assign({}, t.rects, { placement: t.placement })) : m, B = typeof D == "number" ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D), X = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = { x: 0, y: 0 };
  if (N) {
    if (a) {
      var Q, Ie = b === "y" ? Ye : Xe, me = b === "y" ? st : lt, oe = b === "y" ? "height" : "width", V = N[b], ge = V + O[Ie], we = V - O[me], Ce = v ? -R[oe] / 2 : 0, it = h === Vn ? E[oe] : R[oe], et = h === Vn ? -R[oe] : -E[oe], _t = t.elements.arrow, qe = v && _t ? wa(_t) : { width: 0, height: 0 }, Ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ui(), kt = Ve[Ie], xe = Ve[me], fe = or(0, E[oe], qe[oe]), vn = C ? E[oe] / 2 - Ce - fe - kt - B.mainAxis : it - fe - kt - B.mainAxis, Qt = C ? -E[oe] / 2 + Ce + fe + xe + B.mainAxis : et + fe + xe + B.mainAxis, ht = t.elements.arrow && Tr(t.elements.arrow), en = ht ? b === "y" ? ht.clientTop || 0 : ht.clientLeft || 0 : 0, yt = (Q = X?.[b]) != null ? Q : 0, Ft = V + vn - yt - en, ut = V + Qt - yt, bt = or(v ? Zr(ge, Ft) : ge, V, v ? yn(we, ut) : we);
      N[b] = bt, j[b] = bt - V;
    }
    if (l) {
      var tn, _ = b === "x" ? Ye : Xe, y = b === "x" ? st : lt, A = N[w], $ = w === "y" ? "height" : "width", se = A + O[_], de = A - O[y], J = [Ye, Xe].indexOf(c) !== -1, I = (tn = X?.[w]) != null ? tn : 0, P = J ? se : A - E[$] - R[$] - I + B.altAxis, Z = J ? A + E[$] + R[$] - I - B.altAxis : de, ce = v && J ? Bg(P, A, Z) : or(v ? P : se, A, v ? Z : de);
      N[w] = ce, j[w] = ce - A;
    }
    t.modifiersData[r] = j;
  }
}
var v_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: m_, requiresIfExists: ["offset"] };
function g_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function __(e) {
  return e === Qe(e) || !ot(e) ? Na(e) : g_(e);
}
function h_(e) {
  var t = e.getBoundingClientRect(), n = xn(t.width) / e.offsetWidth || 1, r = xn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function y_(e, t, n) {
  n === void 0 && (n = !1);
  var r = ot(t), o = ot(t) && h_(t), a = dn(t), s = Bn(e, o, n), l = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (r || !r && !n) && ((Pt(t) !== "body" || Ia(a)) && (l = __(t)), ot(t) ? (i = Bn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : a && (i.x = Sa(a))), { x: s.left + l.scrollLeft - i.x, y: s.top + l.scrollTop - i.y, width: s.width, height: s.height };
}
function b_(e) {
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
function E_(e) {
  var t = b_(e);
  return Fg.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function O_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function T_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Qs = { placement: "bottom", modifiers: [], strategy: "absolute" };
function el() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function La(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Qs : o;
  return function(s, l, i) {
    i === void 0 && (i = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Qs, a), modifiersData: {}, elements: { reference: s, popper: l }, attributes: {}, styles: {} }, f = [], p = !1, d = { state: u, setOptions: function(m) {
      var O = typeof m == "function" ? m(u.options) : m;
      g(), u.options = Object.assign({}, a, u.options, O), u.scrollParents = { reference: Tn(s) ? ar(s) : s.contextElement ? ar(s.contextElement) : [], popper: ar(l) };
      var c = E_(T_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = c.filter(function(h) {
        return h.enabled;
      }), v(), d.update();
    }, forceUpdate: function() {
      if (!p) {
        var m = u.elements, O = m.reference, c = m.popper;
        if (el(O, c)) {
          u.rects = { reference: y_(O, Tr(c), u.options.strategy === "fixed"), popper: wa(c) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(R) {
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
    }, update: O_(function() {
      return new Promise(function(m) {
        d.forceUpdate(), m(u);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!el(s, l)) return d;
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
La();
var w_ = [Wi, zi, Bi, ki];
La({ defaultModifiers: w_ });
var C_ = [Wi, zi, Bi, ki, f_, s_, v_, zg, i_], N_ = La({ defaultModifiers: C_ });
const S_ = ["fixed", "absolute"], I_ = he({
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
    values: vo,
    default: "bottom"
  },
  popperOptions: {
    type: G(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: S_,
    default: "absolute"
  }
}), Ki = he({
  ...I_,
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
  ...fo(["ariaLabel"])
}), L_ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, A_ = (e, t) => {
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
}, P_ = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...D_(e), ...t]
  };
  return M_(a, o?.modifiers), a;
}, R_ = (e) => {
  if (Oe)
    return Ht(e);
};
function D_(e) {
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
function M_(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const k_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = F_(i);
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
  }), a = hr(), s = F({
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
  return q(o, (i) => {
    const u = T(a);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), q([e, t], ([i, u]) => {
    l(), !(!i || !u) && (a.value = N_(i, u, T(o)));
  }), Dt(() => {
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
function F_(e) {
  const t = Object.keys(e.elements), n = Vo(t.map((o) => [o, e.styles[o] || {}])), r = Vo(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const $_ = 0, U_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = ue(ya, void 0), a = F(), s = F(), l = L(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = L(() => {
    var c;
    const h = T(a), C = (c = T(s)) != null ? c : $_;
    return {
      name: "arrow",
      enabled: !em(h),
      options: {
        element: h,
        padding: C
      }
    };
  }), u = L(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...P_(e, [
      T(i),
      T(l)
    ])
  })), f = L(() => R_(e.referenceEl) || T(r)), { attributes: p, state: d, styles: v, update: g, forceUpdate: m, instanceRef: O } = k_(f, n, u);
  return q(O, (c) => t.value = c), De(() => {
    q(() => {
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
}, V_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = li(), a = Ue("popper"), s = L(() => T(t).popper), l = F($e(e.zIndex) ? e.zIndex : o()), i = L(() => [
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
      l.value = $e(e.zIndex) ? e.zIndex : o();
    }
  };
}, x_ = x({
  name: "ElPopperContent"
}), B_ = /* @__PURE__ */ x({
  ...x_,
  props: Ki,
  emits: L_,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: l,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = A_(r, n), { attributes: p, arrowRef: d, contentRef: v, styles: g, instanceRef: m, role: O, update: c } = U_(r), {
      ariaModal: h,
      arrowStyle: C,
      contentAttrs: b,
      contentClass: w,
      contentStyle: N,
      updateZIndex: E
    } = V_(r, {
      styles: g,
      attributes: p,
      role: O
    }), R = ue(Jr, void 0), D = F();
    Lt(Si, {
      arrowStyle: C,
      arrowRef: d,
      arrowOffset: D
    }), R && Lt(Jr, {
      ...R,
      addInputId: Br,
      removeInputId: Br
    });
    let B;
    const X = (Q = !0) => {
      c(), Q && E();
    }, j = () => {
      X(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return De(() => {
      q(() => r.triggerTargetEl, (Q, Ie) => {
        B?.(), B = void 0;
        const me = T(Q || v.value), oe = T(Ie || v.value);
        rt(me) && (B = q([O, () => r.ariaLabel, h, () => r.id], (V) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ge, we) => {
            ga(V[we]) ? me.removeAttribute(ge) : me.setAttribute(ge, V[we]);
          });
        }, { immediate: !0 })), oe !== me && rt(oe) && ["role", "aria-label", "aria-modal", "id"].forEach((V) => {
          oe.removeAttribute(V);
        });
      }, { immediate: !0 }), q(() => r.visible, j, { immediate: !0 });
    }), Dt(() => {
      B?.(), B = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: m,
      updatePopper: X,
      contentStyle: N
    }), (Q, Ie) => (M(), z("div", oo({
      ref_key: "contentRef",
      ref: v
    }, T(b), {
      style: T(N),
      class: T(w),
      tabindex: "-1",
      onMouseenter: (me) => Q.$emit("mouseenter", me),
      onMouseleave: (me) => Q.$emit("mouseleave", me)
    }), [
      _e(T(wg), {
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
var W_ = /* @__PURE__ */ Te(B_, [["__file", "content.vue"]]);
const H_ = fn(tg), Aa = Symbol("elTooltip");
function tl() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return br(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const j_ = he({
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
}), z_ = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = tl(), {
    registerTimeout: s,
    cancelTimeout: l
  } = tl();
  return {
    onOpen: (f) => {
      a(() => {
        r(f);
        const p = T(n);
        $e(p) && p > 0 && s(() => {
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
}, Pa = he({
  ...j_,
  ...Ki,
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
  ...fo(["ariaLabel"])
}), Gi = he({
  ...Ai,
  disabled: Boolean,
  trigger: {
    type: G([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: G(Array),
    default: () => [Nt.enter, Nt.numpadEnter, Nt.space]
  }
}), K_ = co({
  type: G(Boolean),
  default: null
}), G_ = co({
  type: G(Function)
}), Y_ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: K_,
    [n]: G_
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
      const d = We(), { emit: v } = d, g = d.props, m = L(() => Ae(g[n])), O = L(() => g[e] === null), c = (E) => {
        s.value !== !0 && (s.value = !0, l && (l.value = E), Ae(f) && f(E));
      }, h = (E) => {
        s.value !== !1 && (s.value = !1, l && (l.value = E), Ae(p) && p(E));
      }, C = (E) => {
        if (g.disabled === !0 || Ae(u) && !u())
          return;
        const R = m.value && Oe;
        R && v(t, !0), (O.value || !R) && c(E);
      }, b = (E) => {
        if (g.disabled === !0 || !Oe)
          return;
        const R = m.value && Oe;
        R && v(t, !1), (O.value || !R) && h(E);
      }, w = (E) => {
        zr(E) && (g.disabled && E ? m.value && v(t, !1) : s.value !== E && (E ? c() : h()));
      }, N = () => {
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
        toggle: N,
        hasUpdateHandler: m
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: X_,
  useModelToggleEmits: q_,
  useModelToggle: J_
} = Y_("visible"), Z_ = he({
  ...Ii,
  ...X_,
  ...Pa,
  ...Gi,
  ...Li,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Q_ = [
  ...q_,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], e0 = (e, t) => ft(e) ? e.includes(t) : e === t, An = (e, t, n) => (r) => {
  e0(T(e), t) && n(r);
}, xt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, gE = (e) => (t) => t.pointerType === "mouse" ? e(t) : void 0, t0 = x({
  name: "ElTooltipTrigger"
}), n0 = /* @__PURE__ */ x({
  ...t0,
  props: Gi,
  setup(e, { expose: t }) {
    const n = e, r = Ue("tooltip"), { controlled: o, id: a, open: s, onOpen: l, onClose: i, onToggle: u } = ue(Aa, void 0), f = F(null), p = () => {
      if (T(o) || n.disabled)
        return !0;
    }, d = ln(n, "trigger"), v = xt(p, An(d, "hover", l)), g = xt(p, An(d, "hover", i)), m = xt(p, An(d, "click", (b) => {
      b.button === 0 && u(b);
    })), O = xt(p, An(d, "focus", l)), c = xt(p, An(d, "focus", i)), h = xt(p, An(d, "contextmenu", (b) => {
      b.preventDefault(), u(b);
    })), C = xt(p, (b) => {
      const { code: w } = b;
      n.triggerKeys.includes(w) && (b.preventDefault(), u(b));
    });
    return t({
      triggerRef: f
    }), (b, w) => (M(), ae(T(cg), {
      id: T(a),
      "virtual-ref": b.virtualRef,
      open: T(s),
      "virtual-triggering": b.virtualTriggering,
      class: W(T(r).e("trigger")),
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
var r0 = /* @__PURE__ */ Te(n0, [["__file", "trigger.vue"]]);
const o0 = he({
  to: {
    type: G([String, Object]),
    required: !0
  },
  disabled: Boolean
}), a0 = /* @__PURE__ */ x({
  __name: "teleport",
  props: o0,
  setup(e) {
    return (t, n) => t.disabled ? te(t.$slots, "default", { key: 0 }) : (M(), ae(oc, {
      key: 1,
      to: t.to
    }, [
      te(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var s0 = /* @__PURE__ */ Te(a0, [["__file", "teleport.vue"]]);
const l0 = fn(s0), Yi = () => {
  const e = ia(), t = wi(), n = L(() => `${e.value}-popper-container-${t.prefix}`), r = L(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, i0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, u0 = () => {
  const { id: e, selector: t } = Yi();
  return ac(() => {
    Oe && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && i0(e.value);
  }), {
    id: e,
    selector: t
  };
}, c0 = x({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), f0 = /* @__PURE__ */ x({
  ...c0,
  props: Pa,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Yi(), o = Ue("tooltip"), a = F();
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
    } = ue(Aa, void 0), c = L(() => n.transition || `${o.namespace.value}-fade-in-linear`), h = L(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Dt(() => {
      s?.();
    });
    const C = L(() => T(h) ? !0 : T(u)), b = L(() => n.disabled ? !1 : T(u)), w = L(() => n.appendTo || r.value), N = L(() => {
      var V;
      return (V = n.style) != null ? V : {};
    }), E = F(!0), R = () => {
      g(), oe() && Vt(document.body), E.value = !0;
    }, D = () => {
      if (T(l))
        return !0;
    }, B = xt(D, () => {
      n.enterable && T(f) === "hover" && d();
    }), X = xt(D, () => {
      T(f) === "hover" && p();
    }), j = () => {
      var V, ge;
      (ge = (V = a.value) == null ? void 0 : V.updatePopper) == null || ge.call(V), m?.();
    }, Q = () => {
      O?.();
    }, Ie = () => {
      v(), s = Em(L(() => {
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
      const we = (ge = a.value) == null ? void 0 : ge.popperContentRef, Ce = V?.relatedTarget || document.activeElement;
      return we?.contains(Ce);
    };
    return q(() => T(u), (V) => {
      V ? E.value = !1 : s?.();
    }, {
      flush: "post"
    }), q(() => n.content, () => {
      var V, ge;
      (ge = (V = a.value) == null ? void 0 : V.updatePopper) == null || ge.call(V);
    }), t({
      contentRef: a,
      isFocusInsideContent: oe
    }), (V, ge) => (M(), ae(T(l0), {
      disabled: !V.teleported,
      to: T(w)
    }, {
      default: ee(() => [
        _e(Kn, {
          name: T(c),
          onAfterLeave: R,
          onBeforeEnter: j,
          onAfterEnter: Ie,
          onBeforeLeave: Q
        }, {
          default: ee(() => [
            T(C) ? nt((M(), ae(T(W_), oo({
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
              onMouseleave: T(X),
              onBlur: me,
              onClose: T(p)
            }), {
              default: ee(() => [
                te(V.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Gt, T(b)]
            ]) : le("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var d0 = /* @__PURE__ */ Te(f0, [["__file", "content.vue"]]);
const p0 = x({
  name: "ElTooltip"
}), m0 = /* @__PURE__ */ x({
  ...p0,
  props: Z_,
  emits: Q_,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    u0();
    const o = po(), a = F(), s = F(), l = () => {
      var c;
      const h = T(a);
      h && ((c = h.popperInstanceRef) == null || c.update());
    }, i = F(!1), u = F(), { show: f, hide: p, hasUpdateHandler: d } = J_({
      indicator: i,
      toggleReason: u
    }), { onOpen: v, onClose: g } = z_({
      showAfter: ln(r, "showAfter"),
      hideAfter: ln(r, "hideAfter"),
      autoClose: ln(r, "autoClose"),
      open: f,
      close: p
    }), m = L(() => zr(r.visible) && !d.value);
    Lt(Aa, {
      controlled: m,
      id: o,
      open: sa(i),
      trigger: ln(r, "trigger"),
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
    }), q(() => r.disabled, (c) => {
      c && i.value && (i.value = !1);
    });
    const O = (c) => {
      var h;
      return (h = s.value) == null ? void 0 : h.isFocusInsideContent(c);
    };
    return sc(() => i.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: O,
      updatePopper: l,
      onOpen: v,
      onClose: g,
      hide: p
    }), (c, h) => (M(), ae(T(H_), {
      ref_key: "popperRef",
      ref: a,
      role: c.role
    }, {
      default: ee(() => [
        _e(r0, {
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
        _e(d0, {
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
            c.showArrow ? (M(), ae(T(og), {
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
var v0 = /* @__PURE__ */ Te(m0, [["__file", "tooltip.vue"]]);
const g0 = fn(v0), _0 = he({
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
}), h0 = x({
  name: "ElBadge"
}), y0 = /* @__PURE__ */ x({
  ...h0,
  props: _0,
  setup(e, { expose: t }) {
    const n = e, r = Ue("badge"), o = L(() => n.isDot ? "" : $e(n.value) && $e(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = L(() => {
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
      class: W(T(r).b())
    }, [
      te(s.$slots, "default"),
      _e(Kn, {
        name: `${T(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ee(() => [
          nt(H("sup", {
            class: W([
              T(r).e("content"),
              T(r).em("content", s.type),
              T(r).is("fixed", !!s.$slots.default),
              T(r).is("dot", s.isDot),
              T(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Ge(T(a))
          }, [
            te(s.$slots, "content", { value: T(o) }, () => [
              Do(ze(T(o)), 1)
            ])
          ], 6), [
            [Gt, !s.hidden && (T(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var b0 = /* @__PURE__ */ Te(y0, [["__file", "badge.vue"]]);
const E0 = fn(b0), O0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ko = he({
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
    values: fi
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), T0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, w0 = x({
  name: "ElTag"
}), C0 = /* @__PURE__ */ x({
  ...w0,
  props: Ko,
  emits: T0,
  setup(e, { emit: t }) {
    const n = e, r = Ni(), o = Ue("tag"), a = L(() => {
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
      class: W(T(a)),
      style: Ge({ backgroundColor: u.color }),
      onClick: l
    }, [
      H("span", {
        class: W(T(o).e("content"))
      }, [
        te(u.$slots, "default")
      ], 2),
      u.closable ? (M(), ae(T(On), {
        key: 0,
        class: W(T(o).e("close")),
        onClick: He(s, ["stop"])
      }, {
        default: ee(() => [
          _e(T(Yr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : le("v-if", !0)
    ], 6)) : (M(), ae(Kn, {
      key: 1,
      name: `${T(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: i
    }, {
      default: ee(() => [
        H("span", {
          class: W(T(a)),
          style: Ge({ backgroundColor: u.color }),
          onClick: l
        }, [
          H("span", {
            class: W(T(o).e("content"))
          }, [
            te(u.$slots, "default")
          ], 2),
          u.closable ? (M(), ae(T(On), {
            key: 0,
            class: W(T(o).e("close")),
            onClick: He(s, ["stop"])
          }, {
            default: ee(() => [
              _e(T(Yr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : le("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var N0 = /* @__PURE__ */ Te(C0, [["__file", "tag.vue"]]);
const S0 = fn(N0), on = /* @__PURE__ */ new Map();
if (Oe) {
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
function nl(e, t) {
  let n = [];
  return ft(t.arg) ? n = t.arg : rt(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, l = o?.target, i = !t || !t.instance, u = !s || !l, f = e.contains(s) || e.contains(l), p = e === s, d = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(l), v = a && (a.contains(s) || a.contains(l));
    i || u || f || p || d || v || t.value(r, o);
  };
}
const I0 = {
  beforeMount(e, t) {
    on.has(e) || on.set(e, []), on.get(e).push({
      documentHandler: nl(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    on.has(e) || on.set(e, []);
    const n = on.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: nl(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    on.delete(e);
  }
}, L0 = he({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: G(Object)
  },
  size: di,
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
  ...vi
}), ct = {}, _E = x({
  name: "ElConfigProvider",
  props: L0,
  setup(e, { slots: t }) {
    q(() => e.message, (r) => {
      Object.assign(ct, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = hi(e);
    return () => te(t, "default", { config: n?.value });
  }
});
function A0() {
  const e = hr(), t = F(0), n = 11, r = L(() => ({
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
const Xi = Symbol("ElSelectGroup"), _o = Symbol("ElSelect");
function P0(e, t) {
  const n = ue(_o), r = ue(Xi, { disabled: !1 }), o = L(() => f(sn(n.props.modelValue), e.value)), a = L(() => {
    var v;
    if (n.props.multiple) {
      const g = sn((v = n.props.modelValue) != null ? v : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = L(() => e.label || (dt(e.value) ? "" : e.value)), l = L(() => e.value || e.label || ""), i = L(() => e.disabled || t.groupDisabled || a.value), u = We(), f = (v = [], g) => {
    if (dt(e.value)) {
      const m = n.props.valueKey;
      return v && v.some((O) => lc(Wt(O, m)) === Wt(g, m));
    } else
      return v && v.includes(g);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, d = (v) => {
    const g = new RegExp(O0(v), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return q(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), q(() => e.value, (v, g) => {
    const { remote: m, valueKey: O } = n.props;
    if ((m ? v !== g : !rr(v, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !m) {
      if (O && dt(v) && dt(g) && v[O] === g[O])
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
const R0 = x({
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
    const t = Ue("select"), n = po(), r = L(() => [
      t.be("dropdown", "item"),
      t.is("disabled", T(l)),
      t.is("selected", T(s)),
      t.is("hovering", T(d))
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
    } = P0(e, o), { visible: p, hover: d } = la(o), v = We().proxy;
    i.onOptionCreate(v), Dt(() => {
      const m = v.value, { selected: O } = i.states, c = O.some((h) => h.value === v.value);
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
function D0(e, t, n, r, o, a) {
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
var Ra = /* @__PURE__ */ Te(R0, [["render", D0], ["__file", "option.vue"]]);
const M0 = x({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ue(_o), t = Ue("select"), n = L(() => e.props.popperClass), r = L(() => e.props.multiple), o = L(() => e.props.fitInputWidth), a = F("");
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
function k0(e, t, n, r, o, a) {
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
var F0 = /* @__PURE__ */ Te(M0, [["render", k0], ["__file", "select-dropdown.vue"]]);
const $0 = (e, t) => {
  const { t: n } = ui(), r = po(), o = Ue("select"), a = Ue("input"), s = $n({
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
  } = $v({
    afterComposition: (S) => ce(S)
  }), { wrapperRef: N, isFocused: E, handleBlur: R } = kv(p, {
    beforeFocus() {
      return oe.value;
    },
    afterFocus() {
      e.automaticDropdown && !D.value && (D.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(S) {
      var k, Y;
      return ((k = u.value) == null ? void 0 : k.isFocusInsideContent(S)) || ((Y = f.value) == null ? void 0 : Y.isFocusInsideContent(S));
    },
    afterBlur() {
      D.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), D = F(!1), B = F(), { form: X, formItem: j } = Dv(), { inputId: Q } = Mv(e, {
    formItemContext: j
  }), { valueOnClear: Ie, isEmptyValue: me } = jm(e), oe = L(() => e.disabled || X?.disabled), V = L(() => ft(e.modelValue) ? e.modelValue.length > 0 : !me(e.modelValue)), ge = L(() => {
    var S;
    return (S = X?.statusIcon) != null ? S : !1;
  }), we = L(() => e.clearable && !oe.value && s.inputHovering && V.value), Ce = L(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), it = L(() => o.is("reverse", Ce.value && D.value)), et = L(() => j?.validateState || ""), _t = L(() => Lv[et.value]), qe = L(() => e.remote ? 300 : 0), Ve = L(() => e.remote && !s.inputValue && s.options.size === 0), kt = L(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && xe.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), xe = L(() => fe.value.filter((S) => S.visible).length), fe = L(() => {
    const S = Array.from(s.options.values()), k = [];
    return s.optionValues.forEach((Y) => {
      const Ne = S.findIndex((Je) => Je.value === Y);
      Ne > -1 && k.push(S[Ne]);
    }), k.length >= S.length ? k : S;
  }), vn = L(() => Array.from(s.cachedOptions.values())), Qt = L(() => {
    const S = fe.value.filter((k) => !k.created).some((k) => k.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !S;
  }), ht = () => {
    e.filterable && Ae(e.filterMethod) || e.filterable && e.remote && Ae(e.remoteMethod) || fe.value.forEach((S) => {
      var k;
      (k = S.updateOption) == null || k.call(S, s.inputValue);
    });
  }, en = Ni(), yt = L(() => ["small"].includes(en.value) ? "small" : "default"), Ft = L({
    get() {
      return D.value && !Ve.value;
    },
    set(S) {
      D.value = S;
    }
  }), ut = L(() => {
    if (e.multiple && !kn(e.modelValue))
      return sn(e.modelValue).length === 0 && !s.inputValue;
    const S = ft(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || kn(S) ? !s.inputValue : !0;
  }), bt = L(() => {
    var S;
    const k = (S = e.placeholder) != null ? S : n("el.select.placeholder");
    return e.multiple || !V.value ? k : s.selectedLabel;
  }), tn = L(() => xo ? null : "mouseenter");
  q(() => e.modelValue, (S, k) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", _("")), A(), !rr(S, k) && e.validateEvent && j?.validate("change").catch((Y) => at(Y));
  }, {
    flush: "post",
    deep: !0
  }), q(() => D.value, (S) => {
    S ? _(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", S);
  }), q(() => s.options.entries(), () => {
    Oe && (A(), e.defaultFirstOption && (e.filterable || e.remote) && xe.value && y());
  }, {
    flush: "post"
  }), q([() => s.hoveringIndex, fe], ([S]) => {
    $e(S) && S > -1 ? B.value = fe.value[S] || {} : B.value = {}, fe.value.forEach((k) => {
      k.hover = B.value === k;
    });
  }), Ml(() => {
    s.isBeforeHide || ht();
  });
  const _ = (S) => {
    s.previousQuery === S || h.value || (s.previousQuery = S, e.filterable && Ae(e.filterMethod) ? e.filterMethod(S) : e.filterable && e.remote && Ae(e.remoteMethod) && e.remoteMethod(S), e.defaultFirstOption && (e.filterable || e.remote) && xe.value ? je(y) : je(se));
  }, y = () => {
    const S = fe.value.filter((Je) => Je.visible && !Je.disabled && !Je.states.groupDisabled), k = S.find((Je) => Je.created), Y = S[0], Ne = fe.value.map((Je) => Je.value);
    s.hoveringIndex = Ha(Ne, k || Y);
  }, A = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const k = ft(e.modelValue) ? e.modelValue[0] : e.modelValue, Y = $(k);
      s.selectedLabel = Y.currentLabel, s.selected = [Y];
      return;
    }
    const S = [];
    kn(e.modelValue) || sn(e.modelValue).forEach((k) => {
      S.push($(k));
    }), s.selected = S;
  }, $ = (S) => {
    let k;
    const Y = ic(S);
    for (let In = s.cachedOptions.size - 1; In >= 0; In--) {
      const rn = vn.value[In];
      if (Y ? Wt(rn.value, e.valueKey) === Wt(S, e.valueKey) : rn.value === S) {
        k = {
          value: S,
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
    const Ne = Y ? S.label : S ?? "";
    return {
      value: S,
      currentLabel: Ne
    };
  }, se = () => {
    s.hoveringIndex = fe.value.findIndex((S) => s.selected.some((k) => Nr(k) === Nr(S)));
  }, de = () => {
    s.selectionWidth = i.value.getBoundingClientRect().width;
  }, J = () => {
    s.collapseItemWidth = O.value.getBoundingClientRect().width;
  }, I = () => {
    var S, k;
    (k = (S = u.value) == null ? void 0 : S.updatePopper) == null || k.call(S);
  }, P = () => {
    var S, k;
    (k = (S = f.value) == null ? void 0 : S.updatePopper) == null || k.call(S);
  }, Z = () => {
    s.inputValue.length > 0 && !D.value && (D.value = !0), _(s.inputValue);
  }, ce = (S) => {
    if (s.inputValue = S.target.value, e.remote)
      Et();
    else
      return Z();
  }, Et = Zp(() => {
    Z();
  }, qe.value), Ot = (S) => {
    rr(e.modelValue, S) || t(yi, S);
  }, nn = (S) => Qp(S, (k) => {
    const Y = s.cachedOptions.get(k);
    return Y && !Y.disabled && !Y.states.groupDisabled;
  }), $t = (S) => {
    if (e.multiple && S.code !== Nt.delete && S.target.value.length <= 0) {
      const k = sn(e.modelValue).slice(), Y = nn(k);
      if (Y < 0)
        return;
      const Ne = k[Y];
      k.splice(Y, 1), t(Pn, k), Ot(k), t("remove-tag", Ne);
    }
  }, Oo = (S, k) => {
    const Y = s.selected.indexOf(k);
    if (Y > -1 && !oe.value) {
      const Ne = sn(e.modelValue).slice();
      Ne.splice(Y, 1), t(Pn, Ne), Ot(Ne), t("remove-tag", k.value);
    }
    S.stopPropagation(), Cr();
  }, Xn = (S) => {
    S.stopPropagation();
    const k = e.multiple ? [] : Ie.value;
    if (e.multiple)
      for (const Y of s.selected)
        Y.isDisabled && k.push(Y.value);
    t(Pn, k), Ot(k), s.hoveringIndex = -1, D.value = !1, t("clear"), Cr();
  }, Wa = (S) => {
    var k;
    if (e.multiple) {
      const Y = sn((k = e.modelValue) != null ? k : []).slice(), Ne = Ha(Y, S);
      Ne > -1 ? Y.splice(Ne, 1) : (e.multipleLimit <= 0 || Y.length < e.multipleLimit) && Y.push(S.value), t(Pn, Y), Ot(Y), S.created && _(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Pn, S.value), Ot(S.value), D.value = !1;
    Cr(), !D.value && je(() => {
      wr(S);
    });
  }, Ha = (S = [], k) => kn(k) ? -1 : dt(k.value) ? S.findIndex((Y) => rr(Wt(Y, e.valueKey), Nr(k))) : S.indexOf(k.value), wr = (S) => {
    var k, Y, Ne, Je, In;
    const rn = ft(S) ? S[0] : S;
    let Sr = null;
    if (rn?.value) {
      const qn = fe.value.filter((Gu) => Gu.value === rn.value);
      qn.length > 0 && (Sr = qn[0].$el);
    }
    if (u.value && Sr) {
      const qn = (Je = (Ne = (Y = (k = u.value) == null ? void 0 : k.popperRef) == null ? void 0 : Y.contentRef) == null ? void 0 : Ne.querySelector) == null ? void 0 : Je.call(Ne, `.${o.be("dropdown", "wrap")}`);
      qn && Gm(qn, Sr);
    }
    (In = c.value) == null || In.handleScroll();
  }, Pu = (S) => {
    s.options.set(S.value, S), s.cachedOptions.set(S.value, S);
  }, Ru = (S, k) => {
    s.options.get(S) === k && s.options.delete(S);
  }, Du = L(() => {
    var S, k;
    return (k = (S = u.value) == null ? void 0 : S.popperRef) == null ? void 0 : k.contentRef;
  }), Mu = () => {
    s.isBeforeHide = !1, je(() => {
      var S;
      (S = c.value) == null || S.update(), wr(s.selected);
    });
  }, Cr = () => {
    var S;
    (S = p.value) == null || S.focus();
  }, ku = () => {
    var S;
    if (D.value) {
      D.value = !1, je(() => {
        var k;
        return (k = p.value) == null ? void 0 : k.blur();
      });
      return;
    }
    (S = p.value) == null || S.blur();
  }, Fu = (S) => {
    Xn(S);
  }, $u = (S) => {
    if (D.value = !1, E.value) {
      const k = new FocusEvent("focus", S);
      je(() => R(k));
    }
  }, Uu = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : D.value = !1;
  }, ja = () => {
    oe.value || (xo && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : D.value = !D.value);
  }, Vu = () => {
    if (!D.value)
      ja();
    else {
      const S = fe.value[s.hoveringIndex];
      S && !S.isDisabled && Wa(S);
    }
  }, Nr = (S) => dt(S.value) ? Wt(S.value, e.valueKey) : S.value, xu = L(() => fe.value.filter((S) => S.visible).every((S) => S.isDisabled)), Bu = L(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Wu = L(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), za = (S) => {
    if (!D.value) {
      D.value = !0;
      return;
    }
    if (!(s.options.size === 0 || xe.value === 0 || h.value) && !xu.value) {
      S === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : S === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const k = fe.value[s.hoveringIndex];
      (k.isDisabled || !k.visible) && za(S), je(() => wr(B.value));
    }
  }, Hu = () => {
    if (!i.value)
      return 0;
    const S = window.getComputedStyle(i.value);
    return Number.parseFloat(S.gap || "6px");
  }, ju = L(() => {
    const S = Hu();
    return { maxWidth: `${O.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - S : s.selectionWidth}px` };
  }), zu = L(() => ({ maxWidth: `${s.selectionWidth}px` })), Ku = (S) => {
    t("popup-scroll", S);
  };
  return Bt(i, de), Bt(g, I), Bt(N, I), Bt(m, P), Bt(O, J), De(() => {
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
    filteredOptionsCount: xe,
    updateTooltip: I,
    updateTagTooltip: P,
    debouncedOnInputChange: Et,
    onInput: ce,
    deletePrevTag: $t,
    deleteTag: Oo,
    deleteSelected: Xn,
    handleOptionSelect: Wa,
    scrollToOption: wr,
    hasModelValue: V,
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
    onOptionCreate: Pu,
    onOptionDestroy: Ru,
    handleMenuEnter: Mu,
    focus: Cr,
    blur: ku,
    handleClearClick: Fu,
    handleClickOutside: $u,
    handleEsc: Uu,
    toggleMenu: ja,
    selectOption: Vu,
    getValueKey: Nr,
    navigateOptions: za,
    dropdownMenuVisible: Ft,
    showTagList: Bu,
    collapseTagList: Wu,
    popupScroll: Ku,
    tagStyle: ju,
    collapseTagStyle: zu,
    popperRef: Du,
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
var U0 = x({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ue(_o);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function i(u) {
        ft(u) && u.forEach((f) => {
          var p, d, v, g;
          const m = (p = f?.type || {}) == null ? void 0 : p.name;
          m === "ElOptionGroup" ? i(!It(f.children) && !ft(f.children) && Ae((d = f.children) == null ? void 0 : d.default) ? (v = f.children) == null ? void 0 : v.default() : f.children) : m === "ElOption" ? l.push((g = f.props) == null ? void 0 : g.value) : ft(f.children) && i(f.children);
        });
      }
      return s.length && i((a = s[0]) == null ? void 0 : a.children), rr(l, r) || (r = l, n && (n.states.optionValues = l)), s;
    };
  }
});
const V0 = he({
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
  size: di,
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
  teleported: Pa.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Xr,
    default: Ti
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Xr,
    default: Qm
  },
  tagType: { ...Ko.type, default: "info" },
  tagEffect: { ...Ko.effect, default: "light" },
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
    values: vo,
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
  ...vi,
  ...fo(["ariaLabel"])
}), rl = "ElSelect", x0 = x({
  name: rl,
  componentName: rl,
  components: {
    ElSelectMenu: F0,
    ElOption: Ra,
    ElOptions: U0,
    ElTag: S0,
    ElScrollbar: Jv,
    ElTooltip: g0,
    ElIcon: On
  },
  directives: { ClickOutside: I0 },
  props: V0,
  emits: [
    Pn,
    yi,
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
      return ft(i) ? u ? i : f : u ? f : i;
    }), r = $n({
      ...la(e),
      modelValue: n
    }), o = $0(r, t), { calculatorRef: a, inputStyle: s } = A0();
    Lt(_o, $n({
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
function B0(e, t, n, r, o, a) {
  const s = gn("el-tag"), l = gn("el-tooltip"), i = gn("el-icon"), u = gn("el-option"), f = gn("el-options"), p = gn("el-scrollbar"), d = gn("el-select-menu"), v = uc("click-outside");
  return nt((M(), z("div", {
    ref: "selectRef",
    class: W([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [fc(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
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
                (M(!0), z(un, null, Ga(e.showTagList, (m) => (M(), z("div", {
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
                    onClose: (O) => e.deleteTag(O, m)
                  }, {
                    default: ee(() => [
                      H("span", {
                        class: W(e.nsSelect.e("tags-text"))
                      }, [
                        te(e.$slots, "label", {
                          label: m.currentLabel,
                          value: m.value
                        }, () => [
                          Do(ze(m.currentLabel), 1)
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
                      (M(!0), z(un, null, Ga(e.collapseTagList, (m) => (M(), z("div", {
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
                          onClose: (O) => e.deleteTag(O, m)
                        }, {
                          default: ee(() => [
                            H("span", {
                              class: W(e.nsSelect.e("tags-text"))
                            }, [
                              te(e.$slots, "label", {
                                label: m.currentLabel,
                                value: m.value
                              }, () => [
                                Do(ze(m.currentLabel), 1)
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
                  [cc, e.states.inputValue]
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
var W0 = /* @__PURE__ */ Te(x0, [["render", B0], ["__file", "select.vue"]]);
const H0 = x({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Ue("select"), n = F(null), r = We(), o = F([]);
    Lt(Xi, $n({
      ...la(e)
    }));
    const a = L(() => o.value.some((u) => u.visible === !0)), s = (u) => {
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
    }), Im(n, i, {
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
function j0(e, t, n, r, o, a) {
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
var qi = /* @__PURE__ */ Te(H0, [["render", j0], ["__file", "option-group.vue"]]);
const hE = fn(W0, {
  Option: Ra,
  OptionGroup: qi
}), yE = Oi(Ra);
Oi(qi);
const Ji = ["success", "info", "warning", "error"], Me = Av({
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
  appendTo: Oe ? document.body : void 0
}), z0 = he({
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
    type: Xr,
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
    values: Ji,
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
}), K0 = {
  destroy: () => !0
}, pt = dc([]), G0 = (e) => {
  const t = pt.findIndex((o) => o.id === e), n = pt[t];
  let r;
  return t > 0 && (r = pt[t - 1]), { current: n, prev: r };
}, Y0 = (e) => {
  const { prev: t } = G0(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, X0 = (e, t) => pt.findIndex((r) => r.id === e) > 0 ? 16 : t, q0 = x({
  name: "ElMessage"
}), J0 = /* @__PURE__ */ x({
  ...q0,
  props: z0,
  emits: K0,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Iv, { ns: o, zIndex: a } = _i("message"), { currentZIndex: s, nextZIndex: l } = a, i = F(), u = F(!1), f = F(0);
    let p;
    const d = L(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = L(() => {
      const E = n.type;
      return { [o.bm("icon", E)]: E && qr[E] };
    }), g = L(() => n.icon || qr[n.type] || ""), m = L(() => Y0(n.id)), O = L(() => X0(n.id, n.offset) + m.value), c = L(() => f.value + O.value), h = L(() => ({
      top: `${O.value}px`,
      zIndex: s.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: p } = ni(() => {
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
      E === Nt.esc && w();
    }
    return De(() => {
      C(), l(), u.value = !0;
    }), q(() => n.repeatNum, () => {
      b(), C();
    }), Be(document, "keydown", N), Bt(i, () => {
      f.value = i.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: c,
      close: w
    }), (E, R) => (M(), ae(Kn, {
      name: T(o).b("fade"),
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
            T(o).b(),
            { [T(o).m(E.type)]: E.type },
            T(o).is("center", E.center),
            T(o).is("closable", E.showClose),
            T(o).is("plain", E.plain),
            E.customClass
          ]),
          style: Ge(T(h)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: C
        }, [
          E.repeatNum > 1 ? (M(), ae(T(E0), {
            key: 0,
            value: E.repeatNum,
            type: T(d),
            class: W(T(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : le("v-if", !0),
          T(g) ? (M(), ae(T(On), {
            key: 1,
            class: W([T(o).e("icon"), T(v)])
          }, {
            default: ee(() => [
              (M(), ae(Fn(T(g))))
            ]),
            _: 1
          }, 8, ["class"])) : le("v-if", !0),
          te(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (M(), z(un, { key: 1 }, [
              le(" Caution here, message could've been compromised, never use user's input as message "),
              H("p", {
                class: W(T(o).e("content")),
                innerHTML: E.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (M(), z("p", {
              key: 0,
              class: W(T(o).e("content"))
            }, ze(E.message), 3))
          ]),
          E.showClose ? (M(), ae(T(On), {
            key: 2,
            class: W(T(o).e("closeBtn")),
            onClick: He(w, ["stop"])
          }, {
            default: ee(() => [
              _e(T(r))
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
var Z0 = /* @__PURE__ */ Te(J0, [["__file", "message.vue"]]);
let Q0 = 1;
const Zi = (e) => {
  const t = !e || It(e) || lr(e) || Ae(e) ? { message: e } : e, n = {
    ...Me,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (It(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    rt(r) || (at("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), r = document.body), n.appendTo = r;
  }
  return zr(ct.grouping) && !n.grouping && (n.grouping = ct.grouping), $e(ct.duration) && n.duration === 3e3 && (n.duration = ct.duration), $e(ct.offset) && n.offset === 16 && (n.offset = ct.offset), zr(ct.showClose) && !n.showClose && (n.showClose = ct.showClose), n;
}, eh = (e) => {
  const t = pt.indexOf(e);
  if (t === -1)
    return;
  pt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, th = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Q0++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), eh(f);
    },
    onDestroy: () => {
      Wr(null, a);
    }
  }, l = _e(Z0, s, Ae(s.message) || lr(s.message) ? {
    default: Ae(s.message) ? s.message : () => s.message
  } : null);
  l.appContext = n || Hn._context, Wr(l, a), e.appendChild(a.firstElementChild);
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
  if (!Oe)
    return { close: () => {
    } };
  const n = Zi(e);
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
  const r = th(n, t);
  return pt.push(r), r.handler;
};
Ji.forEach((e) => {
  Hn[e] = (t = {}, n) => {
    const r = Zi(t);
    return Hn({ ...r, type: e }, n);
  };
});
function nh(e) {
  for (const t of pt)
    (!e || e === t.props.type) && t.handler.close();
}
Hn.closeAll = nh;
Hn._context = null;
const rh = Ei(Hn, "$message"), Qi = [
  "success",
  "info",
  "warning",
  "error"
], oh = he({
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
    type: Xr
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
    values: [...Qi, ""],
    default: ""
  },
  zIndex: Number
}), ah = {
  destroy: () => !0
}, sh = x({
  name: "ElNotification"
}), lh = /* @__PURE__ */ x({
  ...sh,
  props: oh,
  emits: ah,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = _i("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: l } = Sv, i = F(!1);
    let u;
    const f = L(() => {
      const C = n.type;
      return C && qr[n.type] ? r.m(C) : "";
    }), p = L(() => n.type && qr[n.type] || n.icon), d = L(() => n.position.endsWith("right") ? "right" : "left"), v = L(() => n.position.startsWith("top") ? "top" : "bottom"), g = L(() => {
      var C;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : s.value
      };
    });
    function m() {
      n.duration > 0 && ({ stop: u } = ni(() => {
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
      C === Nt.delete || C === Nt.backspace ? O() : C === Nt.esc ? i.value && c() : m();
    }
    return De(() => {
      m(), a(), i.value = !0;
    }), Be(document, "keydown", h), t({
      visible: i,
      close: c
    }), (C, b) => (M(), ae(Kn, {
      name: T(r).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (w) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        nt(H("div", {
          id: C.id,
          class: W([T(r).b(), C.customClass, T(d)]),
          style: Ge(T(g)),
          role: "alert",
          onMouseenter: O,
          onMouseleave: m,
          onClick: C.onClick
        }, [
          T(p) ? (M(), ae(T(On), {
            key: 0,
            class: W([T(r).e("icon"), T(f)])
          }, {
            default: ee(() => [
              (M(), ae(Fn(T(p))))
            ]),
            _: 1
          }, 8, ["class"])) : le("v-if", !0),
          H("div", {
            class: W(T(r).e("group"))
          }, [
            H("h2", {
              class: W(T(r).e("title")),
              textContent: ze(C.title)
            }, null, 10, ["textContent"]),
            nt(H("div", {
              class: W(T(r).e("content")),
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
            C.showClose ? (M(), ae(T(On), {
              key: 0,
              class: W(T(r).e("closeBtn")),
              onClick: He(c, ["stop"])
            }, {
              default: ee(() => [
                _e(T(l))
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
var ih = /* @__PURE__ */ Te(lh, [["__file", "notification.vue"]]);
const Qr = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Go = 16;
let uh = 1;
const jn = function(e = {}, t) {
  if (!Oe)
    return { close: () => {
    } };
  (It(e) || lr(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Qr[n].forEach(({ vm: f }) => {
    var p;
    r += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + Go;
  }), r += Go;
  const o = `notification_${uh++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      ch(o, n, a);
    }
  };
  let l = document.body;
  rt(e.appendTo) ? l = e.appendTo : It(e.appendTo) && (l = document.querySelector(e.appendTo)), rt(l) || (at("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), l = document.body);
  const i = document.createElement("div"), u = _e(ih, s, Ae(s.message) ? s.message : lr(s.message) ? () => s.message : null);
  return u.appContext = kn(t) ? jn._context : t, u.props.onDestroy = () => {
    Wr(null, i);
  }, Wr(u, i), Qr[n].push({ vm: u }), l.appendChild(i.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Qi.forEach((e) => {
  jn[e] = (t = {}, n) => ((It(t) || lr(t)) && (t = {
    message: t
  }), jn({ ...t, type: e }, n));
});
function ch(e, t, n) {
  const r = Qr[t], o = r.findIndex(({ vm: u }) => {
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
      const { el: f, component: p } = r[u].vm, d = Number.parseInt(f.style[l], 10) - s - Go;
      p.props.offset = d;
    }
}
function fh() {
  for (const e of Object.values(Qr))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
jn.closeAll = fh;
jn._context = null;
const dh = Ei(jn, "$notify");
function ph(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function mh(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Vr;
const bE = "__TAURI_TO_IPC_KEY__";
function vh(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Se(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function gh(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class EE {
  get rid() {
    return ph(this, Vr, "f");
  }
  constructor(t) {
    Vr.set(this, void 0), mh(this, Vr, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return Se("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Vr = /* @__PURE__ */ new WeakMap();
var ol;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ol || (ol = {}));
async function eu(e, t) {
  await Se("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function _h(e, t, n) {
  var r;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return Se("plugin:event|listen", {
    event: e,
    target: o,
    handler: vh(t)
  }).then((a) => async () => eu(e, a));
}
async function OE(e, t, n) {
  return _h(e, (r) => {
    eu(e, r.id), t(r);
  }, n);
}
async function TE(e, t) {
  await Se("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function wE(e, t, n) {
  await Se("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
const CE = {
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
    r === "center" ? rh({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0
    }) : dh({
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
const al = {};
function hh(e) {
  al[e] || (al[e] = !0, Rt(e));
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
const yh = /\{([0-9a-zA-Z]+)\}/g;
function ho(e, ...t) {
  return t.length === 1 && re(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(yh, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Zt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), bh = (e, t, n) => Eh({ l: e, k: t, s: n }), Eh = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Le = (e) => typeof e == "number" && isFinite(e), Oh = (e) => Da(e) === "[object Date]", eo = (e) => Da(e) === "[object RegExp]", yo = (e) => ne(e) && Object.keys(e).length === 0, Pe = Object.assign, Th = Object.create, ie = (e = null) => Th(e);
let sl;
const hn = () => sl || (sl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ie());
function ll(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function il(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function wh(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${il(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${il(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && Rt("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Ch = Object.prototype.hasOwnProperty;
function mt(e, t) {
  return Ch.call(e, t);
}
const Ee = Array.isArray, ve = (e) => typeof e == "function", U = (e) => typeof e == "string", ye = (e) => typeof e == "boolean", re = (e) => e !== null && typeof e == "object", Nh = (e) => re(e) && ve(e.then) && ve(e.catch), tu = Object.prototype.toString, Da = (e) => tu.call(e), ne = (e) => Da(e) === "[object Object]", Sh = (e) => e == null ? "" : Ee(e) || ne(e) && e.toString === tu ? JSON.stringify(e, null, 2) : String(e);
function Ma(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const ul = 2;
function Ih(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let o = 0;
  const a = [];
  for (let s = 0; s < r.length; s++)
    if (o += r[s].length + 1, o >= t) {
      for (let l = s - ul; l <= s + ul || n > o; l++) {
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
function Lh() {
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
function xr(e, t) {
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
function Ah(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Yo(e, t, n) {
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
}, Ph = 17, Rh = {
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
  const { domain: r, messages: o, args: a } = n, s = process.env.NODE_ENV !== "production" ? ho((o || Rh)[e] || "", ...a || []) : e, l = new SyntaxError(String(s));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function Dh(e) {
  throw e;
}
const Mh = /<\/?[\w\s="/.':;#-\/]+>/, kh = (e) => Mh.test(e), Tt = " ", Fh = "\r", ke = `
`, $h = "\u2028", Uh = "\u2029";
function Vh(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (E) => t[E] === Fh && t[E + 1] === ke, l = (E) => t[E] === ke, i = (E) => t[E] === Uh, u = (E) => t[E] === $h, f = (E) => s(E) || l(E) || i(E) || u(E), p = () => n, d = () => r, v = () => o, g = () => a, m = (E) => s(E) || i(E) || u(E) ? ke : t[E], O = () => m(n), c = () => m(n + a);
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
const Ut = void 0, xh = ".", cl = "'", Bh = "tokenizer";
function Wh(e, t = {}) {
  const n = t.location !== !1, r = Vh(e), o = () => r.index(), a = () => Ah(r.line(), r.column(), r.index()), s = a(), l = o(), i = {
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
      const de = n ? Yo(se.startLoc, y) : null, J = Yn(_, de, {
        domain: Bh,
        args: $
      });
      f(J);
    }
  }
  function d(_, y, A) {
    _.endLoc = a(), _.currentType = y;
    const $ = { type: y };
    return n && ($.loc = Yo(_.startLoc, _.endLoc)), A != null && ($.value = A), $;
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
    for (; _.currentPeek() === Tt || _.currentPeek() === ke; )
      y += _.currentPeek(), _.peek();
    return y;
  }
  function O(_) {
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
    const $ = _.currentPeek() === cl;
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
      return de === "{" ? c(_.peek()) : de === "@" || de === "|" || de === ":" || de === "." || de === Tt || !de ? !1 : de === ke ? (_.peek(), $()) : X(_, !1);
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
      return J === "{" || J === "@" || !J ? se : J === "|" ? !(de === Tt || de === ke) : J === Tt ? (_.peek(), A(!0, Tt)) : J === ke ? (_.peek(), A(!0, ke)) : !0;
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
  function Ie(_) {
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
  function V(_) {
    const y = _.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function ge(_) {
    return j(_, V);
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
      if (A === Tt || A === ke)
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
    O(_);
    let y = "", A = "";
    for (; y = oe(_); )
      A += y;
    const $ = _.currentChar();
    if ($ && $ !== "}" && $ !== Ut && $ !== Tt && $ !== ke && $ !== "　") {
      const se = Qt(_);
      return p(K.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, A + se), A + se;
    }
    return _.currentChar() === Ut && p(K.UNTERMINATED_CLOSING_BRACE, a(), 0), A;
  }
  function qe(_) {
    O(_);
    let y = "";
    return _.currentChar() === "-" ? (_.next(), y += `-${it(_)}`) : y += it(_), _.currentChar() === Ut && p(K.UNTERMINATED_CLOSING_BRACE, a(), 0), y;
  }
  function Ve(_) {
    return _ !== cl && _ !== ke;
  }
  function kt(_) {
    O(_), g(_, "'");
    let y = "", A = "";
    for (; y = j(_, Ve); )
      y === "\\" ? A += xe(_) : A += y;
    const $ = _.currentChar();
    return $ === ke || $ === Ut ? (p(K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), $ === ke && (_.next(), g(_, "'")), A) : (g(_, "'"), A);
  }
  function xe(_) {
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
    return _ !== "{" && _ !== "}" && _ !== Tt && _ !== ke;
  }
  function Qt(_) {
    O(_);
    let y = "", A = "";
    for (; y = j(_, vn); )
      A += y;
    return A;
  }
  function ht(_) {
    let y = "", A = "";
    for (; y = Ie(_); )
      A += y;
    return A;
  }
  function en(_) {
    const y = (A) => {
      const $ = _.currentChar();
      return $ === "{" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === Tt ? A : (A += $, _.next(), y(A));
    };
    return y("");
  }
  function yt(_) {
    O(_);
    const y = g(
      _,
      "|"
      /* TokenChars.Pipe */
    );
    return O(_), y;
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
        ), O(_), y.braceNest++, A;
      case "}":
        return y.braceNest > 0 && y.currentType === 2 && p(K.EMPTY_PLACEHOLDER, a(), 0), _.next(), A = d(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), y.braceNest--, y.braceNest > 0 && O(_), y.inLinked && y.braceNest === 0 && (y.inLinked = !1), A;
      case "@":
        return y.braceNest > 0 && p(K.UNTERMINATED_CLOSING_BRACE, a(), 0), A = ut(_, y) || v(y), y.braceNest = 0, A;
      default: {
        let se = !0, de = !0, J = !0;
        if (B(_))
          return y.braceNest > 0 && p(K.UNTERMINATED_CLOSING_BRACE, a(), 0), A = d(y, 1, yt(_)), y.braceNest = 0, y.inLinked = !1, A;
        if (y.braceNest > 0 && (y.currentType === 4 || y.currentType === 5 || y.currentType === 6))
          return p(K.UNTERMINATED_CLOSING_BRACE, a(), 0), y.braceNest = 0, bt(_, y);
        if (se = C(_, y))
          return A = d(y, 4, _t(_)), O(_), A;
        if (de = b(_, y))
          return A = d(y, 5, qe(_)), O(_), A;
        if (J = w(_, y))
          return A = d(y, 6, kt(_)), O(_), A;
        if (!se && !de && !J)
          return A = d(y, 12, Qt(_)), p(K.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, A.value), O(_), A;
        break;
      }
    }
    return A;
  }
  function ut(_, y) {
    const { currentType: A } = y;
    let $ = null;
    const se = _.currentChar();
    switch ((A === 7 || A === 8 || A === 11 || A === 9) && (se === ke || se === Tt) && p(K.INVALID_LINKED_FORMAT, a(), 0), se) {
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
        return B(_) ? ($ = d(y, 1, yt(_)), y.braceNest = 0, y.inLinked = !1, $) : N(_, y) || R(_, y) ? (O(_), ut(_, y)) : E(_, y) ? (O(_), d(y, 11, ht(_))) : D(_, y) ? (O(_), se === "{" ? Ft(_, y) || $ : d(y, 10, en(_))) : (A === 7 && p(K.INVALID_LINKED_FORMAT, a(), 0), y.braceNest = 0, y.inLinked = !1, bt(_, y));
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
const Hh = "parser", jh = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function zh(e, t, n) {
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
function Kh(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(c, h, C, b, ...w) {
    const N = c.currentPosition();
    if (N.offset += b, N.column += b, n) {
      const E = t ? Yo(C, N) : null, R = Yn(h, E, {
        domain: Hh,
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
    return N.value = h.replace(jh, zh), c.nextToken(), a(N, c.currentOffset(), c.currentPosition()), N;
  }
  function f(c) {
    const h = c.nextToken(), C = c.context(), { lastOffset: b, lastStartLoc: w } = C, N = o(8, b, w);
    return h.type !== 11 ? (r(c, K.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0), N.value = "", a(N, b, w), {
      nextConsumeToken: h,
      node: N
    }) : (h.value == null && r(c, K.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, wt(h)), N.value = h.value || "", a(N, c.currentOffset(), c.currentPosition()), {
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
    return N && r(c, K.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0), a(E, c.currentOffset(), c.currentPosition()), E;
  }
  function m(c) {
    const h = c.context(), { offset: C, startLoc: b } = h, w = v(c);
    return h.currentType === 13 ? w : g(c, C, b, w);
  }
  function O(c) {
    const h = Wh(c, Pe({}, e)), C = h.context(), b = o(0, C.offset, C.startLoc);
    return t && b.loc && (b.loc.source = c), b.body = m(h), e.onCacheKey && (b.cacheKey = e.onCacheKey(c)), C.currentType !== 13 && r(h, K.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, c[C.offset] || ""), a(b, h.currentOffset(), h.currentPosition()), b;
  }
  return { parse: O };
}
function wt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Gh(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function fl(e, t) {
  for (let n = 0; n < e.length; n++)
    ka(e[n], t);
}
function ka(e, t) {
  switch (e.type) {
    case 1:
      fl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      fl(e.items, t);
      break;
    case 6: {
      ka(e.key, t), t.helper(
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
function Yh(e, t = {}) {
  const n = Gh(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ka(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Xh(e) {
  const t = e.body;
  return t.type === 2 ? dl(t) : t.cases.forEach((n) => dl(n)), e;
}
function dl(e) {
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
      e.static = Ma(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const qh = "minifier";
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
          domain: qh,
          args: [e.type]
        });
  }
  delete e.type;
}
const Jh = "parser";
function Zh(e, t) {
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
function Qh(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), zn(e, t.key), t.modifier ? (e.push(", "), zn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ey(e, t) {
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
function ty(e, t) {
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
function ny(e, t) {
  t.body ? zn(e, t.body) : e.push("null");
}
function zn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ny(e, t);
      break;
    case 1:
      ty(e, t);
      break;
    case 2:
      ey(e, t);
      break;
    case 6:
      Qh(e, t);
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
          domain: Jh,
          args: [t.type]
        });
  }
}
const ry = (e, t = {}) => {
  const n = U(t.mode) ? t.mode : "normal", r = U(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], l = Zh(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), s.length > 0 && (l.push(`const { ${Ma(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), zn(l, e), l.deindent(a), l.push("}"), delete e.helpers;
  const { code: i, map: u } = l.context();
  return {
    ast: e,
    code: i,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function oy(e, t = {}) {
  const n = Pe({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, l = Kh(n).parse(e);
  return r ? (a && Xh(l), o && Dn(l), { ast: l, code: "" }) : (Yh(l, n), ry(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ay() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (hn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (hn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function vt(e) {
  return re(e) && Fa(e) === 0 && (mt(e, "b") || mt(e, "body"));
}
const nu = ["b", "body"];
function sy(e) {
  return pn(e, nu);
}
const ru = ["c", "cases"];
function ly(e) {
  return pn(e, ru, []);
}
const ou = ["s", "static"];
function iy(e) {
  return pn(e, ou);
}
const au = ["i", "items"];
function uy(e) {
  return pn(e, au, []);
}
const su = ["t", "type"];
function Fa(e) {
  return pn(e, su);
}
const lu = ["v", "value"];
function kr(e, t) {
  const n = pn(e, lu);
  if (n != null)
    return n;
  throw mr(t);
}
const iu = ["m", "modifier"];
function cy(e) {
  return pn(e, iu);
}
const uu = ["k", "key"];
function fy(e) {
  const t = pn(e, uu);
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
const cu = [
  ...nu,
  ...ru,
  ...ou,
  ...au,
  ...uu,
  ...iu,
  ...lu,
  ...su
];
function mr(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Ao(e) {
  return (n) => dy(n, e);
}
function dy(e, t) {
  const n = sy(t);
  if (n == null)
    throw mr(
      0
      /* NodeTypes.Resource */
    );
  if (Fa(n) === 1) {
    const a = ly(n);
    return e.plural(a.reduce((s, l) => [
      ...s,
      pl(e, l)
    ], []));
  } else
    return pl(e, n);
}
function pl(e, t) {
  const n = iy(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = uy(t).reduce((o, a) => [...o, Xo(e, a)], []);
    return e.normalize(r);
  }
}
function Xo(e, t) {
  const n = Fa(t);
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
      if (mt(r, "i") && Le(r.i))
        return e.interpolate(e.list(r.i));
      if (mt(r, "index") && Le(r.index))
        return e.interpolate(e.list(r.index));
      throw mr(n);
    }
    case 6: {
      const r = t, o = cy(r), a = fy(r);
      return e.linked(Xo(e, a), o ? Xo(e, o) : void 0, e.type);
    }
    case 7:
      return kr(t, n);
    case 8:
      return kr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const py = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function my(e, t) {
  t && kh(e) && Rt(ho(py, { source: e }));
}
const vy = (e) => e;
let Fr = ie();
function gy(e, t = {}) {
  let n = !1;
  const r = t.onError || Dh;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...oy(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function _y(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && U(e)) {
    const n = ye(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && my(e, n);
    const o = (t.onCacheKey || vy)(e), a = Fr[o];
    if (a)
      return a;
    const { ast: s, detectError: l } = gy(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), i = Ao(s);
    return l ? i : Fr[o] = i;
  } else {
    if (process.env.NODE_ENV !== "production" && !vt(e))
      return Rt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = Fr[n];
      return r || (Fr[n] = Ao(e));
    } else
      return Ao(e);
  }
}
let vr = null;
function hy(e) {
  vr = e;
}
function yy(e, t, n) {
  vr && vr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const by = /* @__PURE__ */ Ey("function:translate");
function Ey(e) {
  return (t) => vr && vr.emit(e, t);
}
const Fe = {
  INVALID_ARGUMENT: Ph,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Oy = 24;
function jt(e) {
  return Yn(e, null, process.env.NODE_ENV !== "production" ? { messages: Ty } : void 0);
}
const Ty = {
  [Fe.INVALID_ARGUMENT]: "Invalid arguments",
  [Fe.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Fe.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Fe.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Fe.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Fe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Fe.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function $a(e, t) {
  return t.locale != null ? ml(t.locale) : ml(e.locale);
}
let Po;
function ml(e) {
  if (U(e))
    return e;
  if (ve(e)) {
    if (e.resolvedOnce && Po != null)
      return Po;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Nh(t))
        throw jt(Fe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Po = t;
    } else
      throw jt(Fe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw jt(Fe.NOT_SUPPORT_LOCALE_TYPE);
}
function wy(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ee(t) ? t : re(t) ? Object.keys(t) : U(t) ? [t] : [n]
  ])];
}
function fu(e, t, n) {
  const r = U(n) ? n : to, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; Ee(s); )
      s = vl(a, s, t);
    const l = Ee(t) || !ne(t) ? t : t.default ? t.default : null;
    s = U(l) ? [l] : l, Ee(s) && vl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function vl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ye(r); o++) {
    const a = t[o];
    U(a) && (r = Cy(e, t[o], n));
  }
  return r;
}
function Cy(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Ny(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Ny(e, t, n) {
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
const Sy = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Iy(e) {
  return Sy.test(e);
}
function Ly(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ay(e) {
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
function Py(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Iy(t) ? Ly(t) : "*" + t;
}
function Ry(e) {
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
      if (o = 0, s === void 0 || (s = Py(s), s === !1))
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
      if (i = Ay(a), p = mn[r], u = p[i] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = d[u[1]], f && (l = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const gl = /* @__PURE__ */ new Map();
function Dy(e, t) {
  return re(e) ? e[t] : null;
}
function My(e, t) {
  if (!re(e))
    return null;
  let n = gl.get(t);
  if (n || (n = Ry(t), n && gl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (cu.includes(s) && vt(o))
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
}, ky = 8, Fy = {
  [Ke.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ke.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ke.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ke.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ke.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ke.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Ke.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Cn(e, ...t) {
  return ho(Fy[e], ...t);
}
const $y = "11.2.2", bo = -1, to = "en-US", no = "", _l = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Uy() {
  return {
    upper: (e, t) => t === "text" && U(e) ? e.toUpperCase() : t === "vnode" && re(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && U(e) ? e.toLowerCase() : t === "vnode" && re(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && U(e) ? _l(e) : t === "vnode" && re(e) && "__v_isVNode" in e ? _l(e.children) : e
  };
}
let du;
function Vy(e) {
  du = e;
}
let pu;
function xy(e) {
  pu = e;
}
let mu;
function By(e) {
  mu = e;
}
let vu = null;
const Wy = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  vu = e;
}, Hy = /* @__NO_SIDE_EFFECTS__ */ () => vu;
let gu = null;
const hl = (e) => {
  gu = e;
}, jy = () => gu;
let yl = 0;
function zy(e = {}) {
  const t = ve(e.onWarn) ? e.onWarn : Rt, n = U(e.version) ? e.version : $y, r = U(e.locale) || ve(e.locale) ? e.locale : to, o = ve(r) ? to : r, a = Ee(e.fallbackLocale) || ne(e.fallbackLocale) || U(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = ne(e.messages) ? e.messages : Ro(o), l = ne(e.datetimeFormats) ? e.datetimeFormats : Ro(o), i = ne(e.numberFormats) ? e.numberFormats : Ro(o), u = Pe(ie(), e.modifiers, Uy()), f = e.pluralRules || ie(), p = ve(e.missing) ? e.missing : null, d = ye(e.missingWarn) || eo(e.missingWarn) ? e.missingWarn : !0, v = ye(e.fallbackWarn) || eo(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, m = !!e.unresolving, O = ve(e.postTranslation) ? e.postTranslation : null, c = ne(e.processor) ? e.processor : null, h = ye(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter, b = ve(e.messageCompiler) ? e.messageCompiler : du;
  process.env.NODE_ENV !== "production" && ve(e.messageCompiler) && hh(Cn(Ke.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const w = ve(e.messageResolver) ? e.messageResolver : pu || Dy, N = ve(e.localeFallbacker) ? e.localeFallbacker : mu || wy, E = re(e.fallbackContext) ? e.fallbackContext : void 0, R = e, D = re(R.__datetimeFormatters) ? R.__datetimeFormatters : /* @__PURE__ */ new Map(), B = re(R.__numberFormatters) ? R.__numberFormatters : /* @__PURE__ */ new Map(), X = re(R.__meta) ? R.__meta : {};
  yl++;
  const j = {
    version: n,
    cid: yl,
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
    __meta: X
  };
  return j.datetimeFormats = l, j.numberFormats = i, j.__datetimeFormatters = D, j.__numberFormatters = B, process.env.NODE_ENV !== "production" && (j.__v_emitter = R.__v_emitter != null ? R.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && yy(j, n, X), j;
}
const Ro = (e) => ({ [e]: ie() });
function Eo(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function _u(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Ua(e, t, n, r, o) {
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
    return process.env.NODE_ENV !== "production" && _u(r, t) && s(Cn(Ke.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function er(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function hu(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Ky(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (hu(e, t[r]))
      return !0;
  return !1;
}
const bl = typeof Intl < "u", yu = {
  dateTimeFormat: bl && typeof Intl.DateTimeFormat < "u",
  numberFormat: bl && typeof Intl.NumberFormat < "u"
};
function El(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !yu.dateTimeFormat)
    return a(Cn(Ke.CANNOT_FORMAT_DATE)), no;
  const [i, u, f, p] = qo(...t), d = ye(f.missingWarn) ? f.missingWarn : e.missingWarn, v = ye(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, g = !!f.part, m = $a(e, f), O = s(
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
    if (h = w = O[D], process.env.NODE_ENV !== "production" && m !== h && Eo(v, i) && a(Cn(Ke.FALLBACK_TO_DATE_FORMAT, {
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
    Ua(e, i, h, d, N), b = w;
  }
  if (!ne(C) || !U(h))
    return r ? bo : i;
  let E = `${h}__${i}`;
  yo(p) || (E = `${E}__${JSON.stringify(p)}`);
  let R = l.get(E);
  return R || (R = new Intl.DateTimeFormat(h, Pe({}, C, p)), l.set(E, R)), g ? R.formatToParts(u) : R.format(u);
}
const bu = [
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
function qo(...e) {
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
  } else if (Oh(t)) {
    if (isNaN(t.getTime()))
      throw jt(Fe.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (Le(t))
    l = t;
  else
    throw jt(Fe.INVALID_ARGUMENT);
  return U(n) ? a.key = n : ne(n) && Object.keys(n).forEach((i) => {
    bu.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), U(r) ? a.locale = r : ne(r) && (s = r), ne(o) && (s = o), [a.key || "", l, a, s];
}
function Ol(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Tl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !yu.numberFormat)
    return a(Cn(Ke.CANNOT_FORMAT_NUMBER)), no;
  const [i, u, f, p] = Jo(...t), d = ye(f.missingWarn) ? f.missingWarn : e.missingWarn, v = ye(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, g = !!f.part, m = $a(e, f), O = s(
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
    if (h = w = O[D], process.env.NODE_ENV !== "production" && m !== h && Eo(v, i) && a(Cn(Ke.FALLBACK_TO_NUMBER_FORMAT, {
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
    Ua(e, i, h, d, N), b = w;
  }
  if (!ne(C) || !U(h))
    return r ? bo : i;
  let E = `${h}__${i}`;
  yo(p) || (E = `${E}__${JSON.stringify(p)}`);
  let R = l.get(E);
  return R || (R = new Intl.NumberFormat(h, Pe({}, C, p)), l.set(E, R)), g ? R.formatToParts(u) : R.format(u);
}
const Eu = [
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
function Jo(...e) {
  const [t, n, r, o] = e, a = ie();
  let s = ie();
  if (!Le(t))
    throw jt(Fe.INVALID_ARGUMENT);
  const l = t;
  return U(n) ? a.key = n : ne(n) && Object.keys(n).forEach((i) => {
    Eu.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), U(r) ? a.locale = r : ne(r) && (s = r), ne(o) && (s = o), [a.key || "", l, a, s];
}
function wl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Gy = (e) => e, Yy = (e) => "", Xy = "text", qy = (e) => e.length === 0 ? "" : Ma(e), Jy = Sh;
function Cl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Zy(e) {
  const t = Le(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Le(e.named.count) || Le(e.named.n)) ? Le(e.named.count) ? e.named.count : Le(e.named.n) ? e.named.n : t : t;
}
function Qy(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function eb(e = {}) {
  const t = e.locale, n = Zy(e), r = re(e.pluralRules) && U(t) && ve(e.pluralRules[t]) ? e.pluralRules[t] : Cl, o = re(e.pluralRules) && U(t) && ve(e.pluralRules[t]) ? Cl : void 0, a = (c) => c[r(n, c.length, o)], s = e.list || [], l = (c) => s[c], i = e.named || ie();
  Le(e.pluralIndex) && Qy(n, i);
  const u = (c) => i[c];
  function f(c, h) {
    const C = ve(e.messages) ? e.messages(c, !!h) : re(e.messages) ? e.messages[c] : !1;
    return C || (e.parent ? e.parent.message(c) : Yy);
  }
  const p = (c) => e.modifiers ? e.modifiers[c] : Gy, d = ne(e.processor) && ve(e.processor.normalize) ? e.processor.normalize : qy, v = ne(e.processor) && ve(e.processor.interpolate) ? e.processor.interpolate : Jy, g = ne(e.processor) && U(e.processor.type) ? e.processor.type : Xy, O = {
    list: l,
    named: u,
    plural: a,
    linked: (c, ...h) => {
      const [C, b] = h;
      let w = "text", N = "";
      h.length === 1 ? re(C) ? (N = C.modifier || N, w = C.type || w) : U(C) && (N = C || N) : h.length === 2 && (U(C) && (N = C || N), U(b) && (w = b || w));
      const E = f(c, !0)(O), R = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        w === "vnode" && Ee(E) && N ? E[0] : E
      );
      return N ? p(N)(R, w) : R;
    },
    message: f,
    type: g,
    interpolate: v,
    normalize: d,
    values: Pe(ie(), s, i)
  };
  return O;
}
const Nl = () => "", tt = (e) => ve(e);
function Sl(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: l } = e, [i, u] = Zo(...t), f = ye(u.missingWarn) ? u.missingWarn : e.missingWarn, p = ye(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, d = ye(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, v = !!u.resolvedMessage, g = U(u.default) || ye(u.default) ? ye(u.default) ? a ? i : () => i : u.default : n ? a ? i : () => i : null, m = n || g != null && (U(g) || ve(g)), O = $a(e, u);
  d && tb(u);
  let [c, h, C] = v ? [
    i,
    O,
    l[O] || ie()
  ] : Ou(e, i, O, s, p, f), b = c, w = i;
  if (!v && !(U(b) || vt(b) || tt(b)) && m && (b = g, w = b), !v && (!(U(b) || vt(b) || tt(b)) || !U(h)))
    return o ? bo : i;
  if (process.env.NODE_ENV !== "production" && U(b) && e.messageCompiler == null)
    return Rt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${i}'.`), i;
  let N = !1;
  const E = () => {
    N = !0;
  }, R = tt(b) ? b : Tu(e, i, h, b, w, E);
  if (N)
    return b;
  const D = ab(e, h, C, u), B = eb(D), X = nb(e, R, B);
  let j = r ? r(X, i) : X;
  if (d && U(j) && (j = wh(j)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Q = {
      timestamp: Date.now(),
      key: U(i) ? i : tt(b) ? b.key : "",
      locale: h || (tt(b) ? b.locale : ""),
      format: U(b) ? b : tt(b) ? b.source : "",
      message: j
    };
    Q.meta = Pe({}, e.__meta, /* @__PURE__ */ Hy() || {}), by(Q);
  }
  return j;
}
function tb(e) {
  Ee(e.list) ? e.list = e.list.map((t) => U(t) ? ll(t) : t) : re(e.named) && Object.keys(e.named).forEach((t) => {
    U(e.named[t]) && (e.named[t] = ll(e.named[t]));
  });
}
function Ou(e, t, n, r, o, a) {
  const { messages: s, onWarn: l, messageResolver: i, localeFallbacker: u } = e, f = u(e, r, n);
  let p = ie(), d, v = null, g = n, m = null;
  const O = "translate";
  for (let c = 0; c < f.length; c++) {
    if (d = m = f[c], process.env.NODE_ENV !== "production" && n !== d && !hu(n, d) && Eo(o, t) && l(Cn(Ke.FALLBACK_TO_TRANSLATE, {
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
    if (process.env.NODE_ENV !== "production" && Xt && (h = window.performance.now(), C = "intlify-message-resolve-start", b = "intlify-message-resolve-end", Ze && Ze(C)), (v = i(p, t)) === null && (v = p[t]), process.env.NODE_ENV !== "production" && Xt) {
      const w = window.performance.now(), N = e.__v_emitter;
      N && h && v && N.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: v,
        time: w - h,
        groupId: `${O}:${t}`
      }), C && b && Ze && wn && (Ze(b), wn("intlify message resolve", C, b));
    }
    if (U(v) || vt(v) || tt(v))
      break;
    if (!Ky(d, f)) {
      const w = Ua(
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
function Tu(e, t, n, r, o, a) {
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
  const p = s(r, rb(e, n, o, r, l, a));
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
function nb(e, t, n) {
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
function Zo(...e) {
  const [t, n, r] = e, o = ie();
  if (!U(t) && !Le(t) && !tt(t) && !vt(t))
    throw jt(Fe.INVALID_ARGUMENT);
  const a = Le(t) ? String(t) : (tt(t), t);
  return Le(n) ? o.plural = n : U(n) ? o.default = n : ne(n) && !yo(n) ? o.named = n : Ee(n) && (o.list = n), Le(r) ? o.plural = r : U(r) ? o.default = r : ne(r) && Pe(o, r), [a, o];
}
function rb(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      if (a && a(s), process.env.NODE_ENV !== "production") {
        const l = ob(r), i = `Message compilation error: ${s.message}`, u = s.location && l && Ih(l, s.location.start.offset, s.location.end.offset), f = e.__v_emitter;
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
    onCacheKey: (s) => bh(t, n, s)
  };
}
function ob(e) {
  if (U(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function ab(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: l, fallbackWarn: i, missingWarn: u, fallbackContext: f } = e, d = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (v, g) => {
      let m = s(n, v);
      if (m == null && (f || g)) {
        const [, , O] = Ou(
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
      if (U(m) || vt(m)) {
        let O = !1;
        const h = Tu(e, v, t, m, v, () => {
          O = !0;
        });
        return O ? Nl : h;
      } else return tt(m) ? m : Nl;
    }
  };
  return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), Le(r.plural) && (d.pluralIndex = r.plural), d;
}
ay();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const sb = "11.2.2";
function lb() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (hn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (hn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (hn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (hn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Re = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Oy,
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
  return Yn(e, null, process.env.NODE_ENV !== "production" ? { messages: ib, args: t } : void 0);
}
const ib = {
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
}, Qo = /* @__PURE__ */ Zt("__translateVNode"), ea = /* @__PURE__ */ Zt("__datetimeParts"), ta = /* @__PURE__ */ Zt("__numberParts"), na = /* @__PURE__ */ Zt("__enableEmitter"), ra = /* @__PURE__ */ Zt("__disableEmitter"), ub = Zt("__setPluralRules"), wu = /* @__PURE__ */ Zt("__injectWithOption"), oa = /* @__PURE__ */ Zt("__dispose"), Ct = {
  FALLBACK_TO_ROOT: ky,
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
}, cb = {
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
function ro(e, ...t) {
  return ho(cb[e], ...t);
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
            process.env.NODE_ENV !== "production" && Rt(ro(Ct.IGNORE_OBJ_FLATTEN, {
              key: n[s]
            })), a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (vt(o) ? cu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !vt(o)) {
          const s = o[n[r]];
          re(s) && _r(s);
        }
      }
  return e;
}
function Cu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = ne(n) ? n : Ee(r) ? ie() : { [e]: ie() };
  if (Ee(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: i, resource: u } = l;
      i ? (s[i] = s[i] || ie(), xr(u, s[i])) : xr(u, s);
    } else
      U(l) && xr(JSON.parse(l), s);
  }), o == null && a)
    for (const l in s)
      mt(s, l) && _r(s[l]);
  return s;
}
function Nu(e) {
  return e.type;
}
function fb(e, t, n) {
  let r = re(t.messages) ? t.messages : ie();
  "__i18nGlobal" in n && (r = Cu(e.locale.value, {
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
  return _e(Fl, null, e, 0);
}
function Va() {
  return "currentInstance" in Ya ? Ya["currentInstance"] : We();
}
const Ll = "__INTLIFY_META__", Al = () => [], db = () => !1;
let Pl = 0;
function Rl(e) {
  return (t, n, r, o) => e(n, r, Va() || void 0, o);
}
const pb = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Va();
  let t = null;
  return e && (t = Nu(e)[Ll]) ? { [Ll]: t } : null;
};
function mb(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Xt ? F : hr;
  let s = ye(e.inheritLocale) ? e.inheritLocale : !0;
  const l = a(
    // prettier-ignore
    t && s ? t.locale.value : U(e.locale) ? e.locale : to
  ), i = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : U(e.fallbackLocale) || Ee(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), u = a(Cu(l.value, e)), f = a(ne(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), p = a(ne(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let d = t ? t.missingWarn : ye(e.missingWarn) || eo(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : ye(e.fallbackWarn) || eo(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : ye(e.fallbackRoot) ? e.fallbackRoot : !0, m = !!e.fallbackFormat, O = ve(e.missing) ? e.missing : null, c = ve(e.missing) ? Rl(e.missing) : null, h = ve(e.postTranslation) ? e.postTranslation : null, C = t ? t.warnHtmlMessage : ye(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter;
  const w = t ? t.modifiers : ne(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || t && t.pluralRules, E;
  E = (() => {
    r && hl(null);
    const I = {
      version: sb,
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
    const P = zy(I);
    return r && hl(P), P;
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
  const B = L({
    get: () => l.value,
    set: (I) => {
      E.locale = I, l.value = I;
    }
  }), X = L({
    get: () => i.value,
    set: (I) => {
      E.fallbackLocale = I, i.value = I, er(E, l.value, I);
    }
  }), j = L(() => u.value), Q = /* @__PURE__ */ L(() => f.value), Ie = /* @__PURE__ */ L(() => p.value);
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
    I !== null && (c = Rl(I)), O = I, E.missing = c;
  }
  function we(I, P) {
    return I !== "translate" || !P.resolvedMessage;
  }
  const Ce = (I, P, Z, ce, Et, Ot) => {
    D();
    let nn;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = t ? jy() : void 0), nn = I(E);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = void 0);
    }
    if (Z !== "translate exists" && // for not `te` (e.g `t`)
    Le(nn) && nn === bo || Z === "translate exists" && !nn) {
      const [$t, Oo] = P();
      if (process.env.NODE_ENV !== "production" && t && U($t) && we(Z, Oo) && (g && (Eo(v, $t) || _u(d, $t)) && Rt(ro(Ct.FALLBACK_TO_ROOT, {
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
      if (Ot(nn))
        return nn;
      throw gr(Re.UNEXPECTED_RETURN_TYPE);
    }
  };
  function it(...I) {
    return Ce((P) => Reflect.apply(Sl, null, [P, ...I]), () => Zo(...I), "translate", (P) => Reflect.apply(P.t, P, [...I]), (P) => P, (P) => U(P));
  }
  function et(...I) {
    const [P, Z, ce] = I;
    if (ce && !re(ce))
      throw gr(Re.INVALID_ARGUMENT);
    return it(P, Z, Pe({ resolvedMessage: !0 }, ce || {}));
  }
  function _t(...I) {
    return Ce((P) => Reflect.apply(El, null, [P, ...I]), () => qo(...I), "datetime format", (P) => Reflect.apply(P.d, P, [...I]), () => no, (P) => U(P) || Ee(P));
  }
  function qe(...I) {
    return Ce((P) => Reflect.apply(Tl, null, [P, ...I]), () => Jo(...I), "number format", (P) => Reflect.apply(P.n, P, [...I]), () => no, (P) => U(P) || Ee(P));
  }
  function Ve(I) {
    return I.map((P) => U(P) || Le(P) || ye(P) ? Il(String(P)) : P);
  }
  const xe = {
    normalize: Ve,
    interpolate: (I) => I,
    type: "vnode"
  };
  function fe(...I) {
    return Ce((P) => {
      let Z;
      const ce = P;
      try {
        ce.processor = xe, Z = Reflect.apply(Sl, null, [ce, ...I]);
      } finally {
        ce.processor = null;
      }
      return Z;
    }, () => Zo(...I), "translate", (P) => P[Qo](...I), (P) => [Il(P)], (P) => Ee(P));
  }
  function vn(...I) {
    return Ce((P) => Reflect.apply(Tl, null, [P, ...I]), () => Jo(...I), "number format", (P) => P[ta](...I), Al, (P) => U(P) || Ee(P));
  }
  function Qt(...I) {
    return Ce((P) => Reflect.apply(El, null, [P, ...I]), () => qo(...I), "datetime format", (P) => P[ea](...I), Al, (P) => U(P) || Ee(P));
  }
  function ht(I) {
    N = I, E.pluralRules = N;
  }
  function en(I, P) {
    return Ce(() => {
      if (!I)
        return !1;
      const Z = U(P) ? P : l.value, ce = ut(Z), Et = E.messageResolver(ce, I);
      return vt(Et) || tt(Et) || U(Et);
    }, () => [I], "translate exists", (Z) => Reflect.apply(Z.te, Z, [I, P]), db, (Z) => ye(Z));
  }
  function yt(I) {
    let P = null;
    const Z = fu(E, i.value, l.value);
    for (let ce = 0; ce < Z.length; ce++) {
      const Et = u.value[Z[ce]] || {}, Ot = E.messageResolver(Et, I);
      if (Ot != null) {
        P = Ot;
        break;
      }
    }
    return P;
  }
  function Ft(I) {
    const P = yt(I);
    return P ?? (t ? t.tm(I) || {} : {});
  }
  function ut(I) {
    return u.value[I] || {};
  }
  function bt(I, P) {
    if (o) {
      const Z = { [I]: P };
      for (const ce in Z)
        mt(Z, ce) && _r(Z[ce]);
      P = Z[I];
    }
    u.value[I] = P, E.messages = u.value;
  }
  function tn(I, P) {
    u.value[I] = u.value[I] || {};
    const Z = { [I]: P };
    if (o)
      for (const ce in Z)
        mt(Z, ce) && _r(Z[ce]);
    P = Z[I], xr(P, u.value[I]), E.messages = u.value;
  }
  function _(I) {
    return f.value[I] || {};
  }
  function y(I, P) {
    f.value[I] = P, E.datetimeFormats = f.value, Ol(E, I, P);
  }
  function A(I, P) {
    f.value[I] = Pe(f.value[I] || {}, P), E.datetimeFormats = f.value, Ol(E, I, P);
  }
  function $(I) {
    return p.value[I] || {};
  }
  function se(I, P) {
    p.value[I] = P, E.numberFormats = p.value, wl(E, I, P);
  }
  function de(I, P) {
    p.value[I] = Pe(p.value[I] || {}, P), E.numberFormats = p.value, wl(E, I, P);
  }
  Pl++, t && Xt && (q(t.locale, (I) => {
    s && (l.value = I, E.locale = I, er(E, l.value, i.value));
  }), q(t.fallbackLocale, (I) => {
    s && (i.value = I, E.fallbackLocale = I, er(E, l.value, i.value));
  }));
  const J = {
    id: Pl,
    locale: B,
    fallbackLocale: X,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(I) {
      s = I, I && t && (l.value = t.locale.value, i.value = t.fallbackLocale.value, er(E, l.value, i.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: j,
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
    t: it,
    getLocaleMessage: ut,
    setLocaleMessage: bt,
    mergeLocaleMessage: tn,
    getPostTranslationHandler: me,
    setPostTranslationHandler: oe,
    getMissingHandler: V,
    setMissingHandler: ge,
    [ub]: ht
  };
  return J.datetimeFormats = Q, J.numberFormats = Ie, J.rt = et, J.te = en, J.tm = Ft, J.d = _t, J.n = qe, J.getDateTimeFormat = _, J.setDateTimeFormat = y, J.mergeDateTimeFormat = A, J.getNumberFormat = $, J.setNumberFormat = se, J.mergeNumberFormat = de, J[wu] = n, J[Qo] = fe, J[ea] = Qt, J[ta] = vn, process.env.NODE_ENV !== "production" && (J[na] = (I) => {
    E.__v_emitter = I;
  }, J[ra] = () => {
    E.__v_emitter = void 0;
  }), J;
}
function Dl(e, t) {
}
const xa = {
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
function vb({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === un ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, ie());
}
function Su() {
  return un;
}
Pe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Le(e) || !isNaN(e)
  }
}, xa);
function gb(e) {
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
      return gb(m) && (m[0].key = `${d.type}-${v}`), m;
    }) : U(i) && (u = [i]);
    const f = Pe(ie(), a), p = U(e.tag) || re(e.tag) ? e.tag : Su();
    return $l(p, f, u);
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
}, xa);
const _b = /* @__PURE__ */ Zt("global-vue-i18n");
function Ba(e = {}) {
  const t = Va();
  if (t == null)
    throw gr(Re.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw gr(Re.NOT_INSTALLED);
  const n = hb(t), r = bb(n), o = Nu(t), a = yb(e, o);
  if (a === "global")
    return fb(r, e, o), r;
  if (a === "parent") {
    let i = Eb(n, t, e.__useComponent);
    return i == null && (process.env.NODE_ENV !== "production" && Rt(ro(Ct.NOT_FOUND_PARENT_SCOPE)), i = r), i;
  }
  const s = n;
  let l = s.__getInstance(t);
  if (l == null) {
    const i = Pe({}, e);
    "__i18n" in o && (i.__i18n = o.__i18n), r && (i.__root = r), l = mb(i), s.__composerExtend && (l[oa] = s.__composerExtend(l)), Tb(s, t, l), s.__setInstance(t, l);
  } else
    process.env.NODE_ENV !== "production" && a === "local" && Rt(ro(Ct.DUPLICATE_USE_I18N_CALLING));
  return l;
}
function hb(e) {
  const t = ue(e.isCE ? _b : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw gr(e.isCE ? Re.NOT_INSTALLED_WITH_PROVIDE : Re.UNEXPECTED_ERROR);
  return t;
}
function yb(e, t) {
  return yo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function bb(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Eb(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = Ob(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = s.__getInstance(a);
      l != null && (r = l.__composer, n && r && !r[wu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function Ob(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Tb(e, t, n) {
  let r = null;
  De(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = n, r = Lh();
      const o = n;
      o[na] && o[na](r), r.on("*", Dl);
    }
  }, t), kl(() => {
    const o = n;
    process.env.NODE_ENV !== "production" && (r && r.off("*", Dl), o[ra] && o[ra](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const a = o[oa];
    a && (a(), delete o[oa]);
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
}, xa);
lb();
Vy(_y);
xy(My);
By(fu);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = hn();
  e.__INTLIFY__ = !0, hy(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const be = {
  info: (e, t, ...n) => {
    Se("frontend_log", {
      level: "info",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  error: (e, t) => {
    Se("frontend_log", {
      level: "error",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    Se("frontend_log", {
      level: "warn",
      message: e,
      data: t ? JSON.stringify(t, null, 2) : null
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
}, NE = {
  log: (e, t) => {
    Se("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : wb(t)
    }).catch(() => {
    });
  }
};
function wb(e) {
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
const SE = "https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/codex/plugin-system-refactor/docs/plugin-marketplace/marketplace.json";
async function IE() {
  return await Se("get_plugin_states");
}
async function LE() {
  return await Se("get_installed_plugin_manifests");
}
async function AE(e, t = !1) {
  return await Se("install_local_plugin_package", {
    sourcePath: e,
    overwrite: t
  });
}
async function PE(e, t = !1, n, r) {
  return await Se("install_plugin_package_from_url", {
    expectedSizeBytes: r,
    packageUrl: e,
    packageSubdir: n,
    overwrite: t
  });
}
async function RE(e) {
  return await Se("fetch_plugin_marketplace", {
    marketplaceUrl: e
  });
}
async function DE(e) {
  await Se("uninstall_local_plugin_package", { pluginId: e });
}
async function ME(e, t) {
  await Se("set_plugin_enabled", { pluginId: e, enabled: t });
}
async function kE() {
  return await Se("get_rapidocr_resource_status");
}
async function Cb(e, t) {
  return await Se("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
async function FE() {
  await Se("install_translation_offline_runtime_resources");
}
const Nb = "resources/transformers/transformers.min.js", Sb = ["translation-offline-runtime", "translation"];
let tr = null;
async function Ib() {
  return tr || (tr = (async () => {
    for (const e of Sb) {
      const t = await Cb(e, Nb);
      if (!t) continue;
      const r = await import(gh(t));
      return r.env.useBrowserCache = !0, r.env.allowRemoteModels = !0, be.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`), r;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw tr = null, e;
  }), tr);
}
let zt = null, sr = !1, Mn = null, bn = null, aa = null;
const Lb = "Xenova/opus-mt-en-zh", Ab = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Pb = 3e5;
function Rb(e) {
  aa = e;
}
function Db() {
  return Ab;
}
function Mb(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (r, o) => setTimeout(() => o(new Error(n)), t)
    )
  ]);
}
async function Lu() {
  return zt || Mn || (sr = !0, be.info("[离线翻译] 正在加载翻译模型..."), Mn = (async () => {
    try {
      const { pipeline: e, env: t } = await Ib();
      t.useBrowserCache = !0, t.allowRemoteModels = !0;
      let n = "";
      const r = e("translation", Lb, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        progress_callback: (a) => {
          a.status === "done" && a.file && a.file !== n && (n = a.file, be.info(`[离线翻译] 已加载: ${a.file}`)), aa && aa({
            status: a.status,
            progress: a.progress,
            file: a.file
          });
        }
      });
      return zt = await Mb(
        r,
        Pb,
        "模型加载超时，请检查网络连接后重试"
      ), be.info("[离线翻译] 翻译模型加载完成"), sr = !1, zt;
    } catch (e) {
      throw sr = !1, Mn = null, be.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Mn);
}
async function kb(e) {
  if (!e?.trim()) return e;
  bn = new AbortController();
  const t = bn.signal;
  try {
    const n = await Lu();
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
function Fb() {
  bn && (bn.abort(), bn = null, be.info("[离线翻译] 已发送取消信号"));
}
function $b() {
  return bn !== null;
}
async function Ub() {
  await Lu();
}
function Vb() {
  return zt !== null;
}
function xb() {
  return sr;
}
async function Au() {
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
async function Bb() {
  return (await Au()).isCached;
}
function Wb() {
  return zt !== null;
}
async function Hb() {
  if (zt)
    try {
      await zt.dispose?.();
    } catch {
    }
  zt = null, Mn = null, sr = !1, be.info("[离线翻译] 翻译器已释放");
}
async function jb() {
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
const $E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: Wb,
  cancelOfflineTranslation: Fb,
  clearModelCache: jb,
  disposeOfflineTranslator: Hb,
  getModelCacheInfo: Au,
  getModelFiles: Db,
  isModelCached: Bb,
  isOfflineTranslatorInitializing: xb,
  isOfflineTranslatorReady: Vb,
  isTranslationInProgress: $b,
  setProgressCallback: Rb,
  translateOffline: kb,
  warmupOfflineTranslator: Ub
}, Symbol.toStringTag, { value: "Module" })), UE = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
export {
  Dv as $,
  Cb as A,
  ME as B,
  DE as C,
  PE as D,
  hE as E,
  AE as F,
  LE as G,
  IE as H,
  Au as I,
  Vb as J,
  xb as K,
  RE as L,
  SE as M,
  FE as N,
  Ub as O,
  Hb as P,
  jb as Q,
  Db as R,
  Rb as S,
  ga as T,
  Pn as U,
  qb as V,
  yi as W,
  fo as X,
  di as Y,
  ui as Z,
  Te as _,
  kn as a,
  Bt as a$,
  at as a0,
  Ni as a1,
  vE as a2,
  Qm as a3,
  fE as a4,
  oE as a5,
  pE as a6,
  Mm as a7,
  NE as a8,
  Kb as a9,
  ol as aA,
  cn as aB,
  sf as aC,
  cf as aD,
  vf as aE,
  Zf as aF,
  pf as aG,
  Qf as aH,
  Xl as aI,
  Mt as aJ,
  Jd as aK,
  Yd as aL,
  ql as aM,
  vs as aN,
  At as aO,
  Un as aP,
  an as aQ,
  Yf as aR,
  as as aS,
  ko as aT,
  Kt as aU,
  us as aV,
  gt as aW,
  zr as aX,
  fi as aY,
  sn as aZ,
  _a as a_,
  _E as aa,
  vi as ab,
  vo as ac,
  kv as ad,
  jm as ae,
  rr as af,
  lE as ag,
  aE as ah,
  Em as ai,
  Ht as aj,
  Nt as ak,
  Zp as al,
  eE as am,
  Jv as an,
  Vd as ao,
  Jb as ap,
  I0 as aq,
  iE as ar,
  nE as as,
  rE as at,
  uE as au,
  Aa as av,
  bE as aw,
  EE as ax,
  OE as ay,
  wE as az,
  he as b,
  Jr as b0,
  po as b1,
  Gb as b2,
  fr as b3,
  Xb as b4,
  Mv as b5,
  Yb as b6,
  xt as b7,
  Be as b8,
  Xr as b9,
  Pa as ba,
  Zv as bb,
  Gi as bc,
  lg as bd,
  gE as be,
  pg as bf,
  hv as bg,
  Sv as bh,
  Oe as bi,
  Zb as bj,
  tE as bk,
  Qb as bl,
  li as bm,
  gi as bn,
  $r as bo,
  em as bp,
  ni as bq,
  wg as br,
  l0 as bs,
  Av as bt,
  Vo as bu,
  Lv as bv,
  mE as bw,
  cE as bx,
  $v as by,
  $E as bz,
  Oi as c,
  G as d,
  Ba as e,
  Se as f,
  g0 as g,
  _h as h,
  $e as i,
  yE as j,
  UE as k,
  be as l,
  CE as m,
  Nv as n,
  sv as o,
  dE as p,
  Ti as q,
  sE as r,
  Yr as s,
  kb as t,
  Ue as u,
  On as v,
  fn as w,
  TE as x,
  gh as y,
  kE as z
};
