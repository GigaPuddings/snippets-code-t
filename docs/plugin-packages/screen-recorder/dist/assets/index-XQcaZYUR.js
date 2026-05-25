/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function fr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const se = {}, Gt = [], Ue = () => {
}, Wl = () => !1, gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), dr = (e) => e.startsWith("onUpdate:"), ve = Object.assign, pr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Bl = Object.prototype.hasOwnProperty, q = (e, t) => Bl.call(e, t), F = Array.isArray, qt = (e) => Rn(e) === "[object Map]", ms = (e) => Rn(e) === "[object Set]", zr = (e) => Rn(e) === "[object Date]", W = (e) => typeof e == "function", ne = (e) => typeof e == "string", Ge = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Ki = (e) => (ee(e) || W(e)) && W(e.then) && W(e.catch), Gi = Object.prototype.toString, Rn = (e) => Gi.call(e), jl = (e) => Rn(e).slice(8, -1), qi = (e) => Rn(e) === "[object Object]", hr = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, yn = /* @__PURE__ */ fr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ys = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, kl = /-(\w)/g, Be = ys(
  (e) => e.replace(kl, (t, n) => n ? n.toUpperCase() : "")
), Vl = /\B([A-Z])/g, Wt = ys(
  (e) => e.replace(Vl, "-$1").toLowerCase()
), _s = ys((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ms = ys(
  (e) => e ? `on${_s(e)}` : ""
), wt = (e, t) => !Object.is(e, t), qn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ji = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Zi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ul = (e) => {
  const t = ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Hr;
const vs = () => Hr || (Hr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $t(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ne(s) ? Jl(s) : $t(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ne(e) || ee(e))
    return e;
}
const Kl = /;(?![^(]*\))/g, Gl = /:([^]+)/, ql = /\/\*[^]*?\*\//g;
function Jl(e) {
  const t = {};
  return e.replace(ql, "").split(Kl).forEach((n) => {
    if (n) {
      const s = n.split(Gl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function de(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = de(e[n]);
      s && (t += s + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Zl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yl = /* @__PURE__ */ fr(Zl);
function Yi(e) {
  return !!e || e === "";
}
function Ql(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = bs(e[s], t[s]);
  return n;
}
function bs(e, t) {
  if (e === t) return !0;
  let n = zr(e), s = zr(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ge(e), s = Ge(t), n || s)
    return e === t;
  if (n = F(e), s = F(t), n || s)
    return n && s ? Ql(e, t) : !1;
  if (n = ee(e), s = ee(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !bs(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xl(e, t) {
  return e.findIndex((n) => bs(n, t));
}
const Qi = (e) => !!(e && e.__v_isRef === !0), Se = (e) => ne(e) ? e : e == null ? "" : F(e) || ee(e) && (e.toString === Gi || !W(e.toString)) ? Qi(e) ? Se(e.value) : JSON.stringify(e, Xi, 2) : String(e), Xi = (e, t) => Qi(t) ? Xi(e, t.value) : qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Ds(s, i) + " =>"] = r, n),
    {}
  )
} : ms(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ds(n))
} : Ge(t) ? Ds(t) : ee(t) && !F(t) && !qi(t) ? String(t) : t, Ds = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ge(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ee;
class ea {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ee, !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ee = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ee = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function eo() {
  return Ee;
}
function ta(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let le;
const Rs = /* @__PURE__ */ new WeakSet();
class to {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && Ee.active && Ee.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rs.has(this) && (Rs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || so(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Wr(this), ro(this);
    const t = le, n = Ke;
    le = this, Ke = !0;
    try {
      return this.fn();
    } finally {
      io(this), le = t, Ke = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        yr(t);
      this.deps = this.depsTail = void 0, Wr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Js(this) && this.run();
  }
  get dirty() {
    return Js(this);
  }
}
let no = 0, _n, vn;
function so(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = vn, vn = e;
    return;
  }
  e.next = _n, _n = e;
}
function gr() {
  no++;
}
function mr() {
  if (--no > 0)
    return;
  if (vn) {
    let t = vn;
    for (vn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; _n; ) {
    let t = _n;
    for (_n = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ro(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function io(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), yr(s), na(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Js(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (oo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function oo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Tn))
    return;
  e.globalVersion = Tn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Js(e)) {
    e.flags &= -3;
    return;
  }
  const n = le, s = Ke;
  le = e, Ke = !0;
  try {
    ro(e);
    const r = e.fn(e._value);
    (t.version === 0 || wt(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    le = n, Ke = s, io(e), e.flags &= -3;
  }
}
function yr(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      yr(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function na(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ke = !0;
const lo = [];
function xt() {
  lo.push(Ke), Ke = !1;
}
function Tt() {
  const e = lo.pop();
  Ke = e === void 0 ? !0 : e;
}
function Wr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = le;
    le = void 0;
    try {
      t();
    } finally {
      le = n;
    }
  }
}
let Tn = 0;
class sa {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class _r {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!le || !Ke || le === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== le)
      n = this.activeLink = new sa(le, this), le.deps ? (n.prevDep = le.depsTail, le.depsTail.nextDep = n, le.depsTail = n) : le.deps = le.depsTail = n, ao(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = le.depsTail, n.nextDep = void 0, le.depsTail.nextDep = n, le.depsTail = n, le.deps === n && (le.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Tn++, this.notify(t);
  }
  notify(t) {
    gr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      mr();
    }
  }
}
function ao(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ao(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Zs = /* @__PURE__ */ new WeakMap(), Rt = Symbol(
  ""
), Ys = Symbol(
  ""
), On = Symbol(
  ""
);
function xe(e, t, n) {
  if (Ke && le) {
    let s = Zs.get(e);
    s || Zs.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new _r()), r.map = s, r.key = n), r.track();
  }
}
function dt(e, t, n, s, r, i) {
  const o = Zs.get(e);
  if (!o) {
    Tn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (gr(), t === "clear")
    o.forEach(l);
  else {
    const a = F(e), d = a && hr(n);
    if (a && n === "length") {
      const c = Number(s);
      o.forEach((p, g) => {
        (g === "length" || g === On || !Ge(g) && g >= c) && l(p);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(On)), t) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(Rt)), qt(e) && l(o.get(Ys)));
          break;
        case "delete":
          a || (l(o.get(Rt)), qt(e) && l(o.get(Ys)));
          break;
        case "set":
          qt(e) && l(o.get(Rt));
          break;
      }
  }
  mr();
}
function Vt(e) {
  const t = J(e);
  return t === e ? t : (xe(t, "iterate", On), We(e) ? t : t.map(Te));
}
function ws(e) {
  return xe(e = J(e), "iterate", On), e;
}
const ra = {
  __proto__: null,
  [Symbol.iterator]() {
    return $s(this, Symbol.iterator, Te);
  },
  concat(...e) {
    return Vt(this).concat(
      ...e.map((t) => F(t) ? Vt(t) : t)
    );
  },
  entries() {
    return $s(this, "entries", (e) => (e[1] = Te(e[1]), e));
  },
  every(e, t) {
    return ct(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ct(this, "filter", e, t, (n) => n.map(Te), arguments);
  },
  find(e, t) {
    return ct(this, "find", e, t, Te, arguments);
  },
  findIndex(e, t) {
    return ct(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ct(this, "findLast", e, t, Te, arguments);
  },
  findLastIndex(e, t) {
    return ct(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ct(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ls(this, "includes", e);
  },
  indexOf(...e) {
    return Ls(this, "indexOf", e);
  },
  join(e) {
    return Vt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ls(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ct(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return dn(this, "pop");
  },
  push(...e) {
    return dn(this, "push", e);
  },
  reduce(e, ...t) {
    return Br(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Br(this, "reduceRight", e, t);
  },
  shift() {
    return dn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ct(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return dn(this, "splice", e);
  },
  toReversed() {
    return Vt(this).toReversed();
  },
  toSorted(e) {
    return Vt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Vt(this).toSpliced(...e);
  },
  unshift(...e) {
    return dn(this, "unshift", e);
  },
  values() {
    return $s(this, "values", Te);
  }
};
function $s(e, t, n) {
  const s = ws(e), r = s[t]();
  return s !== e && !We(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const ia = Array.prototype;
function ct(e, t, n, s, r, i) {
  const o = ws(e), l = o !== e && !We(e), a = o[t];
  if (a !== ia[t]) {
    const p = a.apply(e, i);
    return l ? Te(p) : p;
  }
  let d = n;
  o !== e && (l ? d = function(p, g) {
    return n.call(this, Te(p), g, e);
  } : n.length > 2 && (d = function(p, g) {
    return n.call(this, p, g, e);
  }));
  const c = a.call(o, d, s);
  return l && r ? r(c) : c;
}
function Br(e, t, n, s) {
  const r = ws(e);
  let i = n;
  return r !== e && (We(e) ? n.length > 3 && (i = function(o, l, a) {
    return n.call(this, o, l, a, e);
  }) : i = function(o, l, a) {
    return n.call(this, o, Te(l), a, e);
  }), r[t](i, ...s);
}
function Ls(e, t, n) {
  const s = J(e);
  xe(s, "iterate", On);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Sr(n[0]) ? (n[0] = J(n[0]), s[t](...n)) : r;
}
function dn(e, t, n = []) {
  xt(), gr();
  const s = J(e)[t].apply(e, n);
  return mr(), Tt(), s;
}
const oa = /* @__PURE__ */ fr("__proto__,__v_isRef,__isVue"), co = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ge)
);
function la(e) {
  Ge(e) || (e = String(e));
  const t = J(this);
  return xe(t, "has", e), t.hasOwnProperty(e);
}
class uo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? ya : go : i ? ho : po).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = F(t);
    if (!r) {
      let a;
      if (o && (a = ra[n]))
        return a;
      if (n === "hasOwnProperty")
        return la;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      we(t) ? t : s
    );
    return (Ge(n) ? co.has(n) : oa(n)) || (r || xe(t, "get", n), i) ? l : we(l) ? o && hr(n) ? l : l.value : ee(l) ? r ? wr(l) : br(l) : l;
  }
}
class fo extends uo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = Lt(i);
      if (!We(s) && !Lt(s) && (i = J(i), s = J(s)), !F(t) && we(i) && !we(s))
        return a ? !1 : (i.value = s, !0);
    }
    const o = F(t) && hr(n) ? Number(n) < t.length : q(t, n), l = Reflect.set(
      t,
      n,
      s,
      we(t) ? t : r
    );
    return t === J(r) && (o ? wt(s, i) && dt(t, "set", n, s) : dt(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = q(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && dt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ge(n) || !co.has(n)) && xe(t, "has", n), s;
  }
  ownKeys(t) {
    return xe(
      t,
      "iterate",
      F(t) ? "length" : Rt
    ), Reflect.ownKeys(t);
  }
}
class aa extends uo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const ca = /* @__PURE__ */ new fo(), ua = /* @__PURE__ */ new aa(), fa = /* @__PURE__ */ new fo(!0);
const Qs = (e) => e, zn = (e) => Reflect.getPrototypeOf(e);
function da(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = J(r), o = qt(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, d = r[e](...s), c = n ? Qs : t ? Xs : Te;
    return !t && xe(
      i,
      "iterate",
      a ? Ys : Rt
    ), {
      // iterator protocol
      next() {
        const { value: p, done: g } = d.next();
        return g ? { value: p, done: g } : {
          value: l ? [c(p[0]), c(p[1])] : c(p),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Hn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function pa(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = J(i), l = J(r);
      e || (wt(r, l) && xe(o, "get", r), xe(o, "get", l));
      const { has: a } = zn(o), d = t ? Qs : e ? Xs : Te;
      if (a.call(o, r))
        return d(i.get(r));
      if (a.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && xe(J(r), "iterate", Rt), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = J(i), l = J(r);
      return e || (wt(r, l) && xe(o, "has", r), xe(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = J(l), d = t ? Qs : e ? Xs : Te;
      return !e && xe(a, "iterate", Rt), l.forEach((c, p) => r.call(i, d(c), d(p), o));
    }
  };
  return ve(
    n,
    e ? {
      add: Hn("add"),
      set: Hn("set"),
      delete: Hn("delete"),
      clear: Hn("clear")
    } : {
      add(r) {
        !t && !We(r) && !Lt(r) && (r = J(r));
        const i = J(this);
        return zn(i).has.call(i, r) || (i.add(r), dt(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !We(i) && !Lt(i) && (i = J(i));
        const o = J(this), { has: l, get: a } = zn(o);
        let d = l.call(o, r);
        d || (r = J(r), d = l.call(o, r));
        const c = a.call(o, r);
        return o.set(r, i), d ? wt(i, c) && dt(o, "set", r, i) : dt(o, "add", r, i), this;
      },
      delete(r) {
        const i = J(this), { has: o, get: l } = zn(i);
        let a = o.call(i, r);
        a || (r = J(r), a = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return a && dt(i, "delete", r, void 0), d;
      },
      clear() {
        const r = J(this), i = r.size !== 0, o = r.clear();
        return i && dt(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = da(r, e, t);
  }), n;
}
function vr(e, t) {
  const n = pa(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    q(n, r) && r in s ? n : s,
    r,
    i
  );
}
const ha = {
  get: /* @__PURE__ */ vr(!1, !1)
}, ga = {
  get: /* @__PURE__ */ vr(!1, !0)
}, ma = {
  get: /* @__PURE__ */ vr(!0, !1)
};
const po = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap(), ya = /* @__PURE__ */ new WeakMap();
function _a(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function va(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _a(jl(e));
}
function br(e) {
  return Lt(e) ? e : Cr(
    e,
    !1,
    ca,
    ha,
    po
  );
}
function mo(e) {
  return Cr(
    e,
    !1,
    fa,
    ga,
    ho
  );
}
function wr(e) {
  return Cr(
    e,
    !0,
    ua,
    ma,
    go
  );
}
function Cr(e, t, n, s, r) {
  if (!ee(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = va(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
function Jt(e) {
  return Lt(e) ? Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Lt(e) {
  return !!(e && e.__v_isReadonly);
}
function We(e) {
  return !!(e && e.__v_isShallow);
}
function Sr(e) {
  return e ? !!e.__v_raw : !1;
}
function J(e) {
  const t = e && e.__v_raw;
  return t ? J(t) : e;
}
function ba(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && Ji(e, "__v_skip", !0), e;
}
const Te = (e) => ee(e) ? br(e) : e, Xs = (e) => ee(e) ? wr(e) : e;
function we(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ue(e) {
  return wa(e, !1);
}
function wa(e, t) {
  return we(e) ? e : new Ca(e, t);
}
class Ca {
  constructor(t, n) {
    this.dep = new _r(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : J(t), this._value = n ? t : Te(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || We(t) || Lt(t);
    t = s ? t : J(t), wt(t, n) && (this._rawValue = t, this._value = s ? t : Te(t), this.dep.trigger());
  }
}
function x(e) {
  return we(e) ? e.value : e;
}
const Sa = {
  get: (e, t, n) => t === "__v_raw" ? e : x(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return we(r) && !we(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function yo(e) {
  return Jt(e) ? e : new Proxy(e, Sa);
}
class xa {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new _r(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Tn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    le !== this)
      return so(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return oo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ta(e, t, n = !1) {
  let s, r;
  return W(e) ? s = e : (s = e.get, r = e.set), new xa(s, r, n);
}
const Wn = {}, es = /* @__PURE__ */ new WeakMap();
let Mt;
function Oa(e, t = !1, n = Mt) {
  if (n) {
    let s = es.get(n);
    s || es.set(n, s = []), s.push(e);
  }
}
function Ea(e, t, n = se) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, d = (I) => r ? I : We(I) || r === !1 || r === 0 ? pt(I, 1) : pt(I);
  let c, p, g, w, R = !1, C = !1;
  if (we(e) ? (p = () => e.value, R = We(e)) : Jt(e) ? (p = () => d(e), R = !0) : F(e) ? (C = !0, R = e.some((I) => Jt(I) || We(I)), p = () => e.map((I) => {
    if (we(I))
      return I.value;
    if (Jt(I))
      return d(I);
    if (W(I))
      return a ? a(I, 2) : I();
  })) : W(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (g) {
      xt();
      try {
        g();
      } finally {
        Tt();
      }
    }
    const I = Mt;
    Mt = c;
    try {
      return a ? a(e, 3, [w]) : e(w);
    } finally {
      Mt = I;
    }
  } : p = Ue, t && r) {
    const I = p, V = r === !0 ? 1 / 0 : r;
    p = () => pt(I(), V);
  }
  const L = eo(), D = () => {
    c.stop(), L && L.active && pr(L.effects, c);
  };
  if (i && t) {
    const I = t;
    t = (...V) => {
      I(...V), D();
    };
  }
  let U = C ? new Array(e.length).fill(Wn) : Wn;
  const A = (I) => {
    if (!(!(c.flags & 1) || !c.dirty && !I))
      if (t) {
        const V = c.run();
        if (r || R || (C ? V.some((re, k) => wt(re, U[k])) : wt(V, U))) {
          g && g();
          const re = Mt;
          Mt = c;
          try {
            const k = [
              V,
              // pass undefined as the old value when it's changed for the first time
              U === Wn ? void 0 : C && U[0] === Wn ? [] : U,
              w
            ];
            a ? a(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            ), U = V;
          } finally {
            Mt = re;
          }
        }
      } else
        c.run();
  };
  return l && l(A), c = new to(p), c.scheduler = o ? () => o(A, !1) : A, w = (I) => Oa(I, !1, c), g = c.onStop = () => {
    const I = es.get(c);
    if (I) {
      if (a)
        a(I, 4);
      else
        for (const V of I) V();
      es.delete(c);
    }
  }, t ? s ? A(!0) : U = c.run() : o ? o(A.bind(null, !0), !0) : c.run(), D.pause = c.pause.bind(c), D.resume = c.resume.bind(c), D.stop = D, D;
}
function pt(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, we(e))
    pt(e.value, t, n);
  else if (F(e))
    for (let s = 0; s < e.length; s++)
      pt(e[s], t, n);
  else if (ms(e) || qt(e))
    e.forEach((s) => {
      pt(s, t, n);
    });
  else if (qi(e)) {
    for (const s in e)
      pt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && pt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function $n(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Cs(r, t, n);
  }
}
function qe(e, t, n, s) {
  if (W(e)) {
    const r = $n(e, t, n, s);
    return r && Ki(r) && r.catch((i) => {
      Cs(i, t, n);
    }), r;
  }
  if (F(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(qe(e[i], t, n, s));
    return r;
  }
}
function Cs(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || se;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let p = 0; p < c.length; p++)
          if (c[p](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      xt(), $n(i, null, 10, [
        e,
        a,
        d
      ]), Tt();
      return;
    }
  }
  Ia(e, n, r, s, o);
}
function Ia(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Ie = [];
let et = -1;
const Zt = [];
let _t = null, Kt = 0;
const _o = /* @__PURE__ */ Promise.resolve();
let ts = null;
function Yt(e) {
  const t = ts || _o;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Pa(e) {
  let t = et + 1, n = Ie.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Ie[s], i = En(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function xr(e) {
  if (!(e.flags & 1)) {
    const t = En(e), n = Ie[Ie.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= En(n) ? Ie.push(e) : Ie.splice(Pa(t), 0, e), e.flags |= 1, vo();
  }
}
function vo() {
  ts || (ts = _o.then(wo));
}
function Aa(e) {
  F(e) ? Zt.push(...e) : _t && e.id === -1 ? _t.splice(Kt + 1, 0, e) : e.flags & 1 || (Zt.push(e), e.flags |= 1), vo();
}
function jr(e, t, n = et + 1) {
  for (; n < Ie.length; n++) {
    const s = Ie[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ie.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function bo(e) {
  if (Zt.length) {
    const t = [...new Set(Zt)].sort(
      (n, s) => En(n) - En(s)
    );
    if (Zt.length = 0, _t) {
      _t.push(...t);
      return;
    }
    for (_t = t, Kt = 0; Kt < _t.length; Kt++) {
      const n = _t[Kt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    _t = null, Kt = 0;
  }
}
const En = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wo(e) {
  try {
    for (et = 0; et < Ie.length; et++) {
      const t = Ie[et];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), $n(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; et < Ie.length; et++) {
      const t = Ie[et];
      t && (t.flags &= -2);
    }
    et = -1, Ie.length = 0, bo(), ts = null, (Ie.length || Zt.length) && wo();
  }
}
let _e = null, Co = null;
function ns(e) {
  const t = _e;
  return _e = e, Co = e && e.type.__scopeId || null, t;
}
function Ct(e, t = _e, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Xr(-1);
    const i = ns(t);
    let o;
    try {
      o = e(...r);
    } finally {
      ns(i), s._d && Xr(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function nn(e, t) {
  if (_e === null)
    return e;
  const n = Is(_e), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = se] = t[r];
    i && (W(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && pt(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Et(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (xt(), qe(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Tt());
  }
}
const Na = Symbol("_vte"), So = (e) => e.__isTeleport, vt = Symbol("_leaveCb"), Bn = Symbol("_enterCb");
function Ma() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ln(() => {
    e.isMounted = !0;
  }), No(() => {
    e.isUnmounting = !0;
  }), e;
}
const ze = [Function, Array], xo = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ze,
  onEnter: ze,
  onAfterEnter: ze,
  onEnterCancelled: ze,
  // leave
  onBeforeLeave: ze,
  onLeave: ze,
  onAfterLeave: ze,
  onLeaveCancelled: ze,
  // appear
  onBeforeAppear: ze,
  onAppear: ze,
  onAfterAppear: ze,
  onAppearCancelled: ze
}, To = (e) => {
  const t = e.subTree;
  return t.component ? To(t.component) : t;
}, Da = {
  name: "BaseTransition",
  props: xo,
  setup(e, { slots: t }) {
    const n = Ft(), s = Ma();
    return () => {
      const r = t.default && Io(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = Oo(r), o = J(e), { mode: l } = o;
      if (s.isLeaving)
        return Fs(i);
      const a = kr(i);
      if (!a)
        return Fs(i);
      let d = er(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => d = p
      );
      a.type !== Pe && In(a, d);
      let c = n.subTree && kr(n.subTree);
      if (c && c.type !== Pe && !Dt(a, c) && To(n).type !== Pe) {
        let p = er(
          c,
          o,
          s,
          n
        );
        if (In(c, p), l === "out-in" && a.type !== Pe)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, c = void 0;
          }, Fs(i);
        l === "in-out" && a.type !== Pe ? p.delayLeave = (g, w, R) => {
          const C = Eo(
            s,
            c
          );
          C[String(c.key)] = c, g[vt] = () => {
            w(), g[vt] = void 0, delete d.delayedLeave, c = void 0;
          }, d.delayedLeave = () => {
            R(), delete d.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function Oo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Pe) {
        t = n;
        break;
      }
  }
  return t;
}
const Ra = Da;
function Eo(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function er(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: d,
    onAfterEnter: c,
    onEnterCancelled: p,
    onBeforeLeave: g,
    onLeave: w,
    onAfterLeave: R,
    onLeaveCancelled: C,
    onBeforeAppear: L,
    onAppear: D,
    onAfterAppear: U,
    onAppearCancelled: A
  } = t, I = String(e.key), V = Eo(n, e), re = (B, Y) => {
    B && qe(
      B,
      s,
      9,
      Y
    );
  }, k = (B, Y) => {
    const ae = Y[1];
    re(B, Y), F(B) ? B.every((P) => P.length <= 1) && ae() : B.length <= 1 && ae();
  }, pe = {
    mode: o,
    persisted: l,
    beforeEnter(B) {
      let Y = a;
      if (!n.isMounted)
        if (i)
          Y = L || a;
        else
          return;
      B[vt] && B[vt](
        !0
        /* cancelled */
      );
      const ae = V[I];
      ae && Dt(e, ae) && ae.el[vt] && ae.el[vt](), re(Y, [B]);
    },
    enter(B) {
      let Y = d, ae = c, P = p;
      if (!n.isMounted)
        if (i)
          Y = D || d, ae = U || c, P = A || p;
        else
          return;
      let ie = !1;
      const me = B[Bn] = (ke) => {
        ie || (ie = !0, ke ? re(P, [B]) : re(ae, [B]), pe.delayedLeave && pe.delayedLeave(), B[Bn] = void 0);
      };
      Y ? k(Y, [B, me]) : me();
    },
    leave(B, Y) {
      const ae = String(e.key);
      if (B[Bn] && B[Bn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Y();
      re(g, [B]);
      let P = !1;
      const ie = B[vt] = (me) => {
        P || (P = !0, Y(), me ? re(C, [B]) : re(R, [B]), B[vt] = void 0, V[ae] === e && delete V[ae]);
      };
      V[ae] = e, w ? k(w, [B, ie]) : ie();
    },
    clone(B) {
      const Y = er(
        B,
        t,
        n,
        s,
        r
      );
      return r && r(Y), Y;
    }
  };
  return pe;
}
function Fs(e) {
  if (Ss(e))
    return e = St(e), e.children = null, e;
}
function kr(e) {
  if (!Ss(e))
    return So(e.type) && e.children ? Oo(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && W(n.default))
      return n.default();
  }
}
function In(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, In(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Io(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === ye ? (o.patchFlag & 128 && r++, s = s.concat(
      Io(o.children, t, l)
    )) : (t || o.type !== Pe) && s.push(l != null ? St(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ne(e, t) {
  return W(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ve({ name: e.name }, t, { setup: e })
  ) : e;
}
function Po(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ss(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach(
      (R, C) => ss(
        R,
        t && (F(t) ? t[C] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Qt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && ss(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Is(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e, d = t && t.r, c = l.refs === se ? l.refs = {} : l.refs, p = l.setupState, g = J(p), w = p === se ? () => !1 : (R) => q(g, R);
  if (d != null && d !== a && (ne(d) ? (c[d] = null, w(d) && (p[d] = null)) : we(d) && (d.value = null)), W(a))
    $n(a, l, 12, [o, c]);
  else {
    const R = ne(a), C = we(a);
    if (R || C) {
      const L = () => {
        if (e.f) {
          const D = R ? w(a) ? p[a] : c[a] : a.value;
          r ? F(D) && pr(D, i) : F(D) ? D.includes(i) || D.push(i) : R ? (c[a] = [i], w(a) && (p[a] = c[a])) : (a.value = [i], e.k && (c[e.k] = a.value));
        } else R ? (c[a] = o, w(a) && (p[a] = o)) : C && (a.value = o, e.k && (c[e.k] = o));
      };
      o ? (L.id = -1, Re(L, n)) : L();
    }
  }
}
vs().requestIdleCallback;
vs().cancelIdleCallback;
const Qt = (e) => !!e.type.__asyncLoader, Ss = (e) => e.type.__isKeepAlive;
function $a(e, t) {
  Ao(e, "a", t);
}
function La(e, t) {
  Ao(e, "da", t);
}
function Ao(e, t, n = be) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (xs(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Ss(r.parent.vnode) && Fa(s, t, n, r), r = r.parent;
  }
}
function Fa(e, t, n, s) {
  const r = xs(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ts(() => {
    pr(s[t], r);
  }, n);
}
function xs(e, t, n = be, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      xt();
      const l = Ln(n), a = qe(t, n, e, o);
      return l(), Tt(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const mt = (e) => (t, n = be) => {
  (!Nn || e === "sp") && xs(e, (...s) => t(...s), n);
}, za = mt("bm"), ln = mt("m"), Ha = mt(
  "bu"
), Wa = mt("u"), No = mt(
  "bum"
), Ts = mt("um"), Ba = mt(
  "sp"
), ja = mt("rtg"), ka = mt("rtc");
function Va(e, t = be) {
  xs("ec", e, t);
}
const Ua = "components", Mo = Symbol.for("v-ndc");
function Do(e) {
  return ne(e) ? Ka(Ua, e, !1) || e : e || Mo;
}
function Ka(e, t, n = !0, s = !1) {
  const r = _e || be;
  if (r) {
    const i = r.type;
    {
      const l = Mc(
        i,
        !1
      );
      if (l && (l === t || l === Be(t) || l === _s(Be(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Vr(r[e] || i[e], t) || // global registration
      Vr(r.appContext[e], t)
    );
    return !o && s ? i : o;
  }
}
function Vr(e, t) {
  return e && (e[t] || e[Be(t)] || e[_s(Be(t))]);
}
function Ga(e, t, n, s) {
  let r;
  const i = n, o = F(e);
  if (o || ne(e)) {
    const l = o && Jt(e);
    let a = !1;
    l && (a = !We(e), e = ws(e)), r = new Array(e.length);
    for (let d = 0, c = e.length; d < c; d++)
      r[d] = t(
        a ? Te(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (ee(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const c = l[a];
        r[a] = t(e[c], c, a, i);
      }
    }
  else
    r = [];
  return r;
}
function Pn(e, t, n = {}, s, r) {
  if (_e.ce || _e.parent && Qt(_e.parent) && _e.parent.ce)
    return t !== "default" && (n.name = t), Z(), He(
      ye,
      null,
      [ge("slot", n, s && s())],
      64
    );
  let i = e[t];
  i && i._c && (i._d = !1), Z();
  const o = i && Ro(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, a = He(
    ye,
    {
      key: (l && !Ge(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && s ? "_fb" : "")
    },
    o || (s ? s() : []),
    o && e._ === 1 ? 64 : -2
  );
  return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
}
function Ro(e) {
  return e.some((t) => it(t) ? !(t.type === Pe || t.type === ye && !Ro(t.children)) : !0) ? e : null;
}
const tr = (e) => e ? sl(e) ? Is(e) : tr(e.parent) : null, bn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ve(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => tr(e.parent),
    $root: (e) => tr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Lo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      xr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Yt.bind(e.proxy)),
    $watch: (e) => hc.bind(e)
  })
), zs = (e, t) => e !== se && !e.__isScriptSetup && q(e, t), qa = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: a } = e;
    let d;
    if (t[0] !== "$") {
      const w = o[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (zs(s, t))
          return o[t] = 1, s[t];
        if (r !== se && q(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && q(d, t)
        )
          return o[t] = 3, i[t];
        if (n !== se && q(n, t))
          return o[t] = 4, n[t];
        nr && (o[t] = 0);
      }
    }
    const c = bn[t];
    let p, g;
    if (c)
      return t === "$attrs" && xe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== se && q(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      g = a.config.globalProperties, q(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return zs(r, t) ? (r[t] = n, !0) : s !== se && q(s, t) ? (s[t] = n, !0) : q(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i }
  }, o) {
    let l;
    return !!n[o] || e !== se && q(e, o) || zs(t, o) || (l = i[0]) && q(l, o) || q(s, o) || q(bn, o) || q(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ur(e) {
  return F(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let nr = !0;
function Ja(e) {
  const t = Lo(e), n = e.proxy, s = e.ctx;
  nr = !1, t.beforeCreate && Kr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: c,
    beforeMount: p,
    mounted: g,
    beforeUpdate: w,
    updated: R,
    activated: C,
    deactivated: L,
    beforeDestroy: D,
    beforeUnmount: U,
    destroyed: A,
    unmounted: I,
    render: V,
    renderTracked: re,
    renderTriggered: k,
    errorCaptured: pe,
    serverPrefetch: B,
    // public API
    expose: Y,
    inheritAttrs: ae,
    // assets
    components: P,
    directives: ie,
    filters: me
  } = t;
  if (d && Za(d, s, null), o)
    for (const ce in o) {
      const te = o[ce];
      W(te) && (s[ce] = te.bind(n));
    }
  if (r) {
    const ce = r.call(n, n);
    ee(ce) && (e.data = br(ce));
  }
  if (nr = !0, i)
    for (const ce in i) {
      const te = i[ce], ot = W(te) ? te.bind(n, n) : W(te.get) ? te.get.bind(n, n) : Ue, Ot = !W(te) && W(te.set) ? te.set.bind(n) : Ue, lt = G({
        get: ot,
        set: Ot
      });
      Object.defineProperty(s, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => lt.value,
        set: (Fe) => lt.value = Fe
      });
    }
  if (l)
    for (const ce in l)
      $o(l[ce], s, n, ce);
  if (a) {
    const ce = W(a) ? a.call(n) : a;
    Reflect.ownKeys(ce).forEach((te) => {
      zo(te, ce[te]);
    });
  }
  c && Kr(c, e, "c");
  function fe(ce, te) {
    F(te) ? te.forEach((ot) => ce(ot.bind(n))) : te && ce(te.bind(n));
  }
  if (fe(za, p), fe(ln, g), fe(Ha, w), fe(Wa, R), fe($a, C), fe(La, L), fe(Va, pe), fe(ka, re), fe(ja, k), fe(No, U), fe(Ts, I), fe(Ba, B), F(Y))
    if (Y.length) {
      const ce = e.exposed || (e.exposed = {});
      Y.forEach((te) => {
        Object.defineProperty(ce, te, {
          get: () => n[te],
          set: (ot) => n[te] = ot
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === Ue && (e.render = V), ae != null && (e.inheritAttrs = ae), P && (e.components = P), ie && (e.directives = ie), B && Po(e);
}
function Za(e, t, n = Ue) {
  F(e) && (e = sr(e));
  for (const s in e) {
    const r = e[s];
    let i;
    ee(r) ? "default" in r ? i = rt(
      r.from || s,
      r.default,
      !0
    ) : i = rt(r.from || s) : i = rt(r), we(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function Kr(e, t, n) {
  qe(
    F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function $o(e, t, n, s) {
  let r = s.includes(".") ? Yo(n, s) : () => n[s];
  if (ne(e)) {
    const i = t[e];
    W(i) && en(r, i);
  } else if (W(e))
    en(r, e.bind(n));
  else if (ee(e))
    if (F(e))
      e.forEach((i) => $o(i, t, n, s));
    else {
      const i = W(e.handler) ? e.handler.bind(n) : t[e.handler];
      W(i) && en(r, i, e);
    }
}
function Lo(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (d) => rs(a, d, o, !0)
  ), rs(a, t, o)), ee(t) && i.set(t, a), a;
}
function rs(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && rs(e, i, n, !0), r && r.forEach(
    (o) => rs(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Ya[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Ya = {
  data: Gr,
  props: qr,
  emits: qr,
  // objects
  methods: mn,
  computed: mn,
  // lifecycle
  beforeCreate: Oe,
  created: Oe,
  beforeMount: Oe,
  mounted: Oe,
  beforeUpdate: Oe,
  updated: Oe,
  beforeDestroy: Oe,
  beforeUnmount: Oe,
  destroyed: Oe,
  unmounted: Oe,
  activated: Oe,
  deactivated: Oe,
  errorCaptured: Oe,
  serverPrefetch: Oe,
  // assets
  components: mn,
  directives: mn,
  // watch
  watch: Xa,
  // provide / inject
  provide: Gr,
  inject: Qa
};
function Gr(e, t) {
  return t ? e ? function() {
    return ve(
      W(e) ? e.call(this, this) : e,
      W(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qa(e, t) {
  return mn(sr(e), sr(t));
}
function sr(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function mn(e, t) {
  return e ? ve(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qr(e, t) {
  return e ? F(e) && F(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ve(
    /* @__PURE__ */ Object.create(null),
    Ur(e),
    Ur(t ?? {})
  ) : t;
}
function Xa(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ve(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Oe(e[s], t[s]);
  return n;
}
function Fo() {
  return {
    app: null,
    config: {
      isNativeTag: Wl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ec = 0;
function tc(e, t) {
  return function(s, r = null) {
    W(s) || (s = ve({}, s)), r != null && !ee(r) && (r = null);
    const i = Fo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = i.app = {
      _uid: ec++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: $c,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...p) {
        return o.has(c) || (c && W(c.install) ? (o.add(c), c.install(d, ...p)) : W(c) && (o.add(c), c(d, ...p))), d;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), d;
      },
      component(c, p) {
        return p ? (i.components[c] = p, d) : i.components[c];
      },
      directive(c, p) {
        return p ? (i.directives[c] = p, d) : i.directives[c];
      },
      mount(c, p, g) {
        if (!a) {
          const w = d._ceVNode || ge(s, r);
          return w.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(w, c, g), a = !0, d._container = c, c.__vue_app__ = d, Is(w.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (qe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(c, p) {
        return i.provides[c] = p, d;
      },
      runWithContext(c) {
        const p = Xt;
        Xt = d;
        try {
          return c();
        } finally {
          Xt = p;
        }
      }
    };
    return d;
  };
}
let Xt = null;
function zo(e, t) {
  if (be) {
    let n = be.provides;
    const s = be.parent && be.parent.provides;
    s === n && (n = be.provides = Object.create(s)), n[e] = t;
  }
}
function rt(e, t, n = !1) {
  const s = be || _e;
  if (s || Xt) {
    const r = Xt ? Xt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && W(t) ? t.call(s && s.proxy) : t;
  }
}
const Ho = {}, Wo = () => Object.create(Ho), Bo = (e) => Object.getPrototypeOf(e) === Ho;
function nc(e, t, n, s = !1) {
  const r = {}, i = Wo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), jo(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : mo(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function sc(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = J(r), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        let g = c[p];
        if (Os(e.emitsOptions, g))
          continue;
        const w = t[g];
        if (a)
          if (q(i, g))
            w !== i[g] && (i[g] = w, d = !0);
          else {
            const R = Be(g);
            r[R] = rr(
              a,
              l,
              R,
              w,
              e,
              !1
            );
          }
        else
          w !== i[g] && (i[g] = w, d = !0);
      }
    }
  } else {
    jo(e, t, r, i) && (d = !0);
    let c;
    for (const p in l)
      (!t || // for camelCase
      !q(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Wt(p)) === p || !q(t, c))) && (a ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[p] = rr(
        a,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!t || !q(t, p)) && (delete i[p], d = !0);
  }
  d && dt(e.attrs, "set", "");
}
function jo(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (yn(a))
        continue;
      const d = t[a];
      let c;
      r && q(r, c = Be(a)) ? !i || !i.includes(c) ? n[c] = d : (l || (l = {}))[c] = d : Os(e.emitsOptions, a) || (!(a in s) || d !== s[a]) && (s[a] = d, o = !0);
    }
  if (i) {
    const a = J(n), d = l || se;
    for (let c = 0; c < i.length; c++) {
      const p = i[c];
      n[p] = rr(
        r,
        a,
        p,
        d[p],
        e,
        !q(d, p)
      );
    }
  }
  return o;
}
function rr(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = q(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && W(a)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const c = Ln(r);
          s = d[n] = a.call(
            null,
            t
          ), c();
        }
      } else
        s = a;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Wt(n)) && (s = !0));
  }
  return s;
}
const rc = /* @__PURE__ */ new WeakMap();
function ko(e, t, n = !1) {
  const s = n ? rc : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let a = !1;
  if (!W(e)) {
    const c = (p) => {
      a = !0;
      const [g, w] = ko(p, t, !0);
      ve(o, g), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !a)
    return ee(e) && s.set(e, Gt), Gt;
  if (F(i))
    for (let c = 0; c < i.length; c++) {
      const p = Be(i[c]);
      Jr(p) && (o[p] = se);
    }
  else if (i)
    for (const c in i) {
      const p = Be(c);
      if (Jr(p)) {
        const g = i[c], w = o[p] = F(g) || W(g) ? { type: g } : ve({}, g), R = w.type;
        let C = !1, L = !0;
        if (F(R))
          for (let D = 0; D < R.length; ++D) {
            const U = R[D], A = W(U) && U.name;
            if (A === "Boolean") {
              C = !0;
              break;
            } else A === "String" && (L = !1);
          }
        else
          C = W(R) && R.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = C, w[
          1
          /* shouldCastTrue */
        ] = L, (C || q(w, "default")) && l.push(p);
      }
    }
  const d = [o, l];
  return ee(e) && s.set(e, d), d;
}
function Jr(e) {
  return e[0] !== "$" && !yn(e);
}
const Vo = (e) => e[0] === "_" || e === "$stable", Tr = (e) => F(e) ? e.map(nt) : [nt(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ct((...r) => Tr(t(...r)), n);
  return s._c = !1, s;
}, Uo = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Vo(r)) continue;
    const i = e[r];
    if (W(i))
      t[r] = ic(r, i, s);
    else if (i != null) {
      const o = Tr(i);
      t[r] = () => o;
    }
  }
}, Ko = (e, t) => {
  const n = Tr(t);
  e.slots.default = () => n;
}, Go = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, oc = (e, t, n) => {
  const s = e.slots = Wo();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Go(s, t, n), n && Ji(s, "_", r, !0)) : Uo(t, s);
  } else t && Ko(e, t);
}, lc = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = se;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Go(r, t, n) : (i = !t.$stable, Uo(t, r)), o = t;
  } else t && (Ko(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Vo(l) && o[l] == null && delete r[l];
}, Re = wc;
function ac(e) {
  return cc(e);
}
function cc(e, t) {
  const n = vs();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: c,
    parentNode: p,
    nextSibling: g,
    setScopeId: w = Ue,
    insertStaticContent: R
  } = e, C = (u, f, h, v = null, m = null, y = null, O = void 0, T = null, S = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Dt(u, f) && (v = Je(u), Fe(u, m, y, !0), u = null), f.patchFlag === -2 && (S = !1, f.dynamicChildren = null);
    const { type: b, ref: z, shapeFlag: E } = f;
    switch (b) {
      case Es:
        L(u, f, h, v);
        break;
      case Pe:
        D(u, f, h, v);
        break;
      case Ws:
        u == null && U(f, h, v, O);
        break;
      case ye:
        P(
          u,
          f,
          h,
          v,
          m,
          y,
          O,
          T,
          S
        );
        break;
      default:
        E & 1 ? V(
          u,
          f,
          h,
          v,
          m,
          y,
          O,
          T,
          S
        ) : E & 6 ? ie(
          u,
          f,
          h,
          v,
          m,
          y,
          O,
          T,
          S
        ) : (E & 64 || E & 128) && b.process(
          u,
          f,
          h,
          v,
          m,
          y,
          O,
          T,
          S,
          un
        );
    }
    z != null && m && ss(z, u && u.ref, y, f || u, !f);
  }, L = (u, f, h, v) => {
    if (u == null)
      s(
        f.el = l(f.children),
        h,
        v
      );
    else {
      const m = f.el = u.el;
      f.children !== u.children && d(m, f.children);
    }
  }, D = (u, f, h, v) => {
    u == null ? s(
      f.el = a(f.children || ""),
      h,
      v
    ) : f.el = u.el;
  }, U = (u, f, h, v) => {
    [u.el, u.anchor] = R(
      u.children,
      f,
      h,
      v,
      u.el,
      u.anchor
    );
  }, A = ({ el: u, anchor: f }, h, v) => {
    let m;
    for (; u && u !== f; )
      m = g(u), s(u, h, v), u = m;
    s(f, h, v);
  }, I = ({ el: u, anchor: f }) => {
    let h;
    for (; u && u !== f; )
      h = g(u), r(u), u = h;
    r(f);
  }, V = (u, f, h, v, m, y, O, T, S) => {
    f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), u == null ? re(
      f,
      h,
      v,
      m,
      y,
      O,
      T,
      S
    ) : B(
      u,
      f,
      m,
      y,
      O,
      T,
      S
    );
  }, re = (u, f, h, v, m, y, O, T) => {
    let S, b;
    const { props: z, shapeFlag: E, transition: $, dirs: j } = u;
    if (S = u.el = o(
      u.type,
      y,
      z && z.is,
      z
    ), E & 8 ? c(S, u.children) : E & 16 && pe(
      u.children,
      S,
      null,
      v,
      m,
      Hs(u, y),
      O,
      T
    ), j && Et(u, null, v, "created"), k(S, u, u.scopeId, O, v), z) {
      for (const oe in z)
        oe !== "value" && !yn(oe) && i(S, oe, null, z[oe], y, v);
      "value" in z && i(S, "value", null, z.value, y), (b = z.onVnodeBeforeMount) && Xe(b, v, u);
    }
    j && Et(u, null, v, "beforeMount");
    const K = uc(m, $);
    K && $.beforeEnter(S), s(S, f, h), ((b = z && z.onVnodeMounted) || K || j) && Re(() => {
      b && Xe(b, v, u), K && $.enter(S), j && Et(u, null, v, "mounted");
    }, m);
  }, k = (u, f, h, v, m) => {
    if (h && w(u, h), v)
      for (let y = 0; y < v.length; y++)
        w(u, v[y]);
    if (m) {
      let y = m.subTree;
      if (f === y || Xo(y.type) && (y.ssContent === f || y.ssFallback === f)) {
        const O = m.vnode;
        k(
          u,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, pe = (u, f, h, v, m, y, O, T, S = 0) => {
    for (let b = S; b < u.length; b++) {
      const z = u[b] = T ? bt(u[b]) : nt(u[b]);
      C(
        null,
        z,
        f,
        h,
        v,
        m,
        y,
        O,
        T
      );
    }
  }, B = (u, f, h, v, m, y, O) => {
    const T = f.el = u.el;
    let { patchFlag: S, dynamicChildren: b, dirs: z } = f;
    S |= u.patchFlag & 16;
    const E = u.props || se, $ = f.props || se;
    let j;
    if (h && It(h, !1), (j = $.onVnodeBeforeUpdate) && Xe(j, h, f, u), z && Et(f, u, h, "beforeUpdate"), h && It(h, !0), (E.innerHTML && $.innerHTML == null || E.textContent && $.textContent == null) && c(T, ""), b ? Y(
      u.dynamicChildren,
      b,
      T,
      h,
      v,
      Hs(f, m),
      y
    ) : O || te(
      u,
      f,
      T,
      null,
      h,
      v,
      Hs(f, m),
      y,
      !1
    ), S > 0) {
      if (S & 16)
        ae(T, E, $, h, m);
      else if (S & 2 && E.class !== $.class && i(T, "class", null, $.class, m), S & 4 && i(T, "style", E.style, $.style, m), S & 8) {
        const K = f.dynamicProps;
        for (let oe = 0; oe < K.length; oe++) {
          const X = K[oe], Me = E[X], Ae = $[X];
          (Ae !== Me || X === "value") && i(T, X, Me, Ae, m, h);
        }
      }
      S & 1 && u.children !== f.children && c(T, f.children);
    } else !O && b == null && ae(T, E, $, h, m);
    ((j = $.onVnodeUpdated) || z) && Re(() => {
      j && Xe(j, h, f, u), z && Et(f, u, h, "updated");
    }, v);
  }, Y = (u, f, h, v, m, y, O) => {
    for (let T = 0; T < f.length; T++) {
      const S = u[T], b = f[T], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Dt(S, b) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 70) ? p(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      C(
        S,
        b,
        z,
        null,
        v,
        m,
        y,
        O,
        !0
      );
    }
  }, ae = (u, f, h, v, m) => {
    if (f !== h) {
      if (f !== se)
        for (const y in f)
          !yn(y) && !(y in h) && i(
            u,
            y,
            f[y],
            null,
            m,
            v
          );
      for (const y in h) {
        if (yn(y)) continue;
        const O = h[y], T = f[y];
        O !== T && y !== "value" && i(u, y, T, O, m, v);
      }
      "value" in h && i(u, "value", f.value, h.value, m);
    }
  }, P = (u, f, h, v, m, y, O, T, S) => {
    const b = f.el = u ? u.el : l(""), z = f.anchor = u ? u.anchor : l("");
    let { patchFlag: E, dynamicChildren: $, slotScopeIds: j } = f;
    j && (T = T ? T.concat(j) : j), u == null ? (s(b, h, v), s(z, h, v), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      z,
      m,
      y,
      O,
      T,
      S
    )) : E > 0 && E & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (Y(
      u.dynamicChildren,
      $,
      h,
      m,
      y,
      O,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || m && f === m.subTree) && qo(
      u,
      f,
      !0
      /* shallow */
    )) : te(
      u,
      f,
      h,
      z,
      m,
      y,
      O,
      T,
      S
    );
  }, ie = (u, f, h, v, m, y, O, T, S) => {
    f.slotScopeIds = T, u == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      h,
      v,
      O,
      S
    ) : me(
      f,
      h,
      v,
      m,
      y,
      O,
      S
    ) : ke(u, f, S);
  }, me = (u, f, h, v, m, y, O) => {
    const T = u.component = Ec(
      u,
      v,
      m
    );
    if (Ss(u) && (T.ctx.renderer = un), Ic(T, !1, O), T.asyncDep) {
      if (m && m.registerDep(T, fe, O), !u.el) {
        const S = T.subTree = ge(Pe);
        D(null, S, f, h);
      }
    } else
      fe(
        T,
        u,
        f,
        h,
        m,
        y,
        O
      );
  }, ke = (u, f, h) => {
    const v = f.component = u.component;
    if (vc(u, f, h))
      if (v.asyncDep && !v.asyncResolved) {
        ce(v, f, h);
        return;
      } else
        v.next = f, v.update();
    else
      f.el = u.el, v.vnode = f;
  }, fe = (u, f, h, v, m, y, O) => {
    const T = () => {
      if (u.isMounted) {
        let { next: E, bu: $, u: j, parent: K, vnode: oe } = u;
        {
          const Ye = Jo(u);
          if (Ye) {
            E && (E.el = oe.el, ce(u, E, O)), Ye.asyncDep.then(() => {
              u.isUnmounted || T();
            });
            return;
          }
        }
        let X = E, Me;
        It(u, !1), E ? (E.el = oe.el, ce(u, E, O)) : E = oe, $ && qn($), (Me = E.props && E.props.onVnodeBeforeUpdate) && Xe(Me, K, E, oe), It(u, !0);
        const Ae = Yr(u), Ze = u.subTree;
        u.subTree = Ae, C(
          Ze,
          Ae,
          // parent may have changed if it's in a teleport
          p(Ze.el),
          // anchor may have changed if it's in a fragment
          Je(Ze),
          u,
          m,
          y
        ), E.el = Ae.el, X === null && bc(u, Ae.el), j && Re(j, m), (Me = E.props && E.props.onVnodeUpdated) && Re(
          () => Xe(Me, K, E, oe),
          m
        );
      } else {
        let E;
        const { el: $, props: j } = f, { bm: K, m: oe, parent: X, root: Me, type: Ae } = u, Ze = Qt(f);
        It(u, !1), K && qn(K), !Ze && (E = j && j.onVnodeBeforeMount) && Xe(E, X, f), It(u, !0);
        {
          Me.ce && Me.ce._injectChildStyle(Ae);
          const Ye = u.subTree = Yr(u);
          C(
            null,
            Ye,
            h,
            v,
            u,
            m,
            y
          ), f.el = Ye.el;
        }
        if (oe && Re(oe, m), !Ze && (E = j && j.onVnodeMounted)) {
          const Ye = f;
          Re(
            () => Xe(E, X, Ye),
            m
          );
        }
        (f.shapeFlag & 256 || X && Qt(X.vnode) && X.vnode.shapeFlag & 256) && u.a && Re(u.a, m), u.isMounted = !0, f = h = v = null;
      }
    };
    u.scope.on();
    const S = u.effect = new to(T);
    u.scope.off();
    const b = u.update = S.run.bind(S), z = u.job = S.runIfDirty.bind(S);
    z.i = u, z.id = u.uid, S.scheduler = () => xr(z), It(u, !0), b();
  }, ce = (u, f, h) => {
    f.component = u;
    const v = u.vnode.props;
    u.vnode = f, u.next = null, sc(u, f.props, v, h), lc(u, f.children, h), xt(), jr(u), Tt();
  }, te = (u, f, h, v, m, y, O, T, S = !1) => {
    const b = u && u.children, z = u ? u.shapeFlag : 0, E = f.children, { patchFlag: $, shapeFlag: j } = f;
    if ($ > 0) {
      if ($ & 128) {
        Ot(
          b,
          E,
          h,
          v,
          m,
          y,
          O,
          T,
          S
        );
        return;
      } else if ($ & 256) {
        ot(
          b,
          E,
          h,
          v,
          m,
          y,
          O,
          T,
          S
        );
        return;
      }
    }
    j & 8 ? (z & 16 && Q(b, m, y), E !== b && c(h, E)) : z & 16 ? j & 16 ? Ot(
      b,
      E,
      h,
      v,
      m,
      y,
      O,
      T,
      S
    ) : Q(b, m, y, !0) : (z & 8 && c(h, ""), j & 16 && pe(
      E,
      h,
      v,
      m,
      y,
      O,
      T,
      S
    ));
  }, ot = (u, f, h, v, m, y, O, T, S) => {
    u = u || Gt, f = f || Gt;
    const b = u.length, z = f.length, E = Math.min(b, z);
    let $;
    for ($ = 0; $ < E; $++) {
      const j = f[$] = S ? bt(f[$]) : nt(f[$]);
      C(
        u[$],
        j,
        h,
        null,
        m,
        y,
        O,
        T,
        S
      );
    }
    b > z ? Q(
      u,
      m,
      y,
      !0,
      !1,
      E
    ) : pe(
      f,
      h,
      v,
      m,
      y,
      O,
      T,
      S,
      E
    );
  }, Ot = (u, f, h, v, m, y, O, T, S) => {
    let b = 0;
    const z = f.length;
    let E = u.length - 1, $ = z - 1;
    for (; b <= E && b <= $; ) {
      const j = u[b], K = f[b] = S ? bt(f[b]) : nt(f[b]);
      if (Dt(j, K))
        C(
          j,
          K,
          h,
          null,
          m,
          y,
          O,
          T,
          S
        );
      else
        break;
      b++;
    }
    for (; b <= E && b <= $; ) {
      const j = u[E], K = f[$] = S ? bt(f[$]) : nt(f[$]);
      if (Dt(j, K))
        C(
          j,
          K,
          h,
          null,
          m,
          y,
          O,
          T,
          S
        );
      else
        break;
      E--, $--;
    }
    if (b > E) {
      if (b <= $) {
        const j = $ + 1, K = j < z ? f[j].el : v;
        for (; b <= $; )
          C(
            null,
            f[b] = S ? bt(f[b]) : nt(f[b]),
            h,
            K,
            m,
            y,
            O,
            T,
            S
          ), b++;
      }
    } else if (b > $)
      for (; b <= E; )
        Fe(u[b], m, y, !0), b++;
    else {
      const j = b, K = b, oe = /* @__PURE__ */ new Map();
      for (b = K; b <= $; b++) {
        const De = f[b] = S ? bt(f[b]) : nt(f[b]);
        De.key != null && oe.set(De.key, b);
      }
      let X, Me = 0;
      const Ae = $ - K + 1;
      let Ze = !1, Ye = 0;
      const fn = new Array(Ae);
      for (b = 0; b < Ae; b++) fn[b] = 0;
      for (b = j; b <= E; b++) {
        const De = u[b];
        if (Me >= Ae) {
          Fe(De, m, y, !0);
          continue;
        }
        let Qe;
        if (De.key != null)
          Qe = oe.get(De.key);
        else
          for (X = K; X <= $; X++)
            if (fn[X - K] === 0 && Dt(De, f[X])) {
              Qe = X;
              break;
            }
        Qe === void 0 ? Fe(De, m, y, !0) : (fn[Qe - K] = b + 1, Qe >= Ye ? Ye = Qe : Ze = !0, C(
          De,
          f[Qe],
          h,
          null,
          m,
          y,
          O,
          T,
          S
        ), Me++);
      }
      const Lr = Ze ? fc(fn) : Gt;
      for (X = Lr.length - 1, b = Ae - 1; b >= 0; b--) {
        const De = K + b, Qe = f[De], Fr = De + 1 < z ? f[De + 1].el : v;
        fn[b] === 0 ? C(
          null,
          Qe,
          h,
          Fr,
          m,
          y,
          O,
          T,
          S
        ) : Ze && (X < 0 || b !== Lr[X] ? lt(Qe, h, Fr, 2) : X--);
      }
    }
  }, lt = (u, f, h, v, m = null) => {
    const { el: y, type: O, transition: T, children: S, shapeFlag: b } = u;
    if (b & 6) {
      lt(u.component.subTree, f, h, v);
      return;
    }
    if (b & 128) {
      u.suspense.move(f, h, v);
      return;
    }
    if (b & 64) {
      O.move(u, f, h, un);
      return;
    }
    if (O === ye) {
      s(y, f, h);
      for (let E = 0; E < S.length; E++)
        lt(S[E], f, h, v);
      s(u.anchor, f, h);
      return;
    }
    if (O === Ws) {
      A(u, f, h);
      return;
    }
    if (v !== 2 && b & 1 && T)
      if (v === 0)
        T.beforeEnter(y), s(y, f, h), Re(() => T.enter(y), m);
      else {
        const { leave: E, delayLeave: $, afterLeave: j } = T, K = () => s(y, f, h), oe = () => {
          E(y, () => {
            K(), j && j();
          });
        };
        $ ? $(y, K, oe) : oe();
      }
    else
      s(y, f, h);
  }, Fe = (u, f, h, v = !1, m = !1) => {
    const {
      type: y,
      props: O,
      ref: T,
      children: S,
      dynamicChildren: b,
      shapeFlag: z,
      patchFlag: E,
      dirs: $,
      cacheIndex: j
    } = u;
    if (E === -2 && (m = !1), T != null && ss(T, null, h, u, !0), j != null && (f.renderCache[j] = void 0), z & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const K = z & 1 && $, oe = !Qt(u);
    let X;
    if (oe && (X = O && O.onVnodeBeforeUnmount) && Xe(X, f, u), z & 6)
      M(u.component, h, v);
    else {
      if (z & 128) {
        u.suspense.unmount(h, v);
        return;
      }
      K && Et(u, null, f, "beforeUnmount"), z & 64 ? u.type.remove(
        u,
        f,
        h,
        un,
        v
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== ye || E > 0 && E & 64) ? Q(
        b,
        f,
        h,
        !1,
        !0
      ) : (y === ye && E & 384 || !m && z & 16) && Q(S, f, h), v && cn(u);
    }
    (oe && (X = O && O.onVnodeUnmounted) || K) && Re(() => {
      X && Xe(X, f, u), K && Et(u, null, f, "unmounted");
    }, h);
  }, cn = (u) => {
    const { type: f, el: h, anchor: v, transition: m } = u;
    if (f === ye) {
      H(h, v);
      return;
    }
    if (f === Ws) {
      I(u);
      return;
    }
    const y = () => {
      r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (u.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: T } = m, S = () => O(h, y);
      T ? T(u.el, y, S) : S();
    } else
      y();
  }, H = (u, f) => {
    let h;
    for (; u !== f; )
      h = g(u), r(u), u = h;
    r(f);
  }, M = (u, f, h) => {
    const { bum: v, scope: m, job: y, subTree: O, um: T, m: S, a: b } = u;
    Zr(S), Zr(b), v && qn(v), m.stop(), y && (y.flags |= 8, Fe(O, u, f, h)), T && Re(T, f), Re(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Q = (u, f, h, v = !1, m = !1, y = 0) => {
    for (let O = y; O < u.length; O++)
      Fe(u[O], f, h, v, m);
  }, Je = (u) => {
    if (u.shapeFlag & 6)
      return Je(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = g(u.anchor || u.el), h = f && f[Na];
    return h ? g(h) : f;
  };
  let at = !1;
  const kt = (u, f, h) => {
    u == null ? f._vnode && Fe(f._vnode, null, null, !0) : C(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = u, at || (at = !0, jr(), bo(), at = !1);
  }, un = {
    p: C,
    um: Fe,
    m: lt,
    r: cn,
    mt: me,
    mc: pe,
    pc: te,
    pbc: Y,
    n: Je,
    o: e
  };
  return {
    render: kt,
    hydrate: void 0,
    createApp: tc(kt)
  };
}
function Hs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function It({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function qo(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (F(s) && F(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = bt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && qo(o, l)), l.type === Es && (l.el = o.el);
    }
}
function fc(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < d ? i = l + 1 : o = l;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Jo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jo(t);
}
function Zr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const dc = Symbol.for("v-scx"), pc = () => rt(dc);
function en(e, t, n) {
  return Zo(e, t, n);
}
function Zo(e, t, n = se) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = ve({}, n), a = t && s || !t && i !== "post";
  let d;
  if (Nn) {
    if (i === "sync") {
      const w = pc();
      d = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!a) {
      const w = () => {
      };
      return w.stop = Ue, w.resume = Ue, w.pause = Ue, w;
    }
  }
  const c = be;
  l.call = (w, R, C) => qe(w, c, R, C);
  let p = !1;
  i === "post" ? l.scheduler = (w) => {
    Re(w, c && c.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (w, R) => {
    R ? w() : xr(w);
  }), l.augmentJob = (w) => {
    t && (w.flags |= 4), p && (w.flags |= 2, c && (w.id = c.uid, w.i = c));
  };
  const g = Ea(e, t, l);
  return Nn && (d ? d.push(g) : a && g()), g;
}
function hc(e, t, n) {
  const s = this.proxy, r = ne(e) ? e.includes(".") ? Yo(s, e) : () => s[e] : e.bind(s, s);
  let i;
  W(t) ? i = t : (i = t.handler, n = t);
  const o = Ln(this), l = Zo(r, i.bind(s), n);
  return o(), l;
}
function Yo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const gc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${Wt(t)}Modifiers`];
function mc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || se;
  let r = n;
  const i = t.startsWith("update:"), o = i && gc(s, t.slice(7));
  o && (o.trim && (r = n.map((c) => ne(c) ? c.trim() : c)), o.number && (r = n.map(Zi)));
  let l, a = s[l = Ms(t)] || // also try camelCase event handler (#2249)
  s[l = Ms(Be(t))];
  !a && i && (a = s[l = Ms(Wt(t))]), a && qe(
    a,
    e,
    6,
    r
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, qe(
      d,
      e,
      6,
      r
    );
  }
}
function Qo(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!W(e)) {
    const a = (d) => {
      const c = Qo(d, t, !0);
      c && (l = !0, ve(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (ee(e) && s.set(e, null), null) : (F(i) ? i.forEach((a) => o[a] = null) : ve(o, i), ee(e) && s.set(e, o), o);
}
function Os(e, t) {
  return !e || !gs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Wt(t)) || q(e, t));
}
function Yr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: a,
    render: d,
    renderCache: c,
    props: p,
    data: g,
    setupState: w,
    ctx: R,
    inheritAttrs: C
  } = e, L = ns(e);
  let D, U;
  try {
    if (n.shapeFlag & 4) {
      const I = r || s, V = I;
      D = nt(
        d.call(
          V,
          I,
          c,
          p,
          w,
          g,
          R
        )
      ), U = l;
    } else {
      const I = t;
      D = nt(
        I.length > 1 ? I(
          p,
          { attrs: l, slots: o, emit: a }
        ) : I(
          p,
          null
        )
      ), U = t.props ? l : yc(l);
    }
  } catch (I) {
    wn.length = 0, Cs(I, e, 1), D = ge(Pe);
  }
  let A = D;
  if (U && C !== !1) {
    const I = Object.keys(U), { shapeFlag: V } = A;
    I.length && V & 7 && (i && I.some(dr) && (U = _c(
      U,
      i
    )), A = St(A, U, !1, !0));
  }
  return n.dirs && (A = St(A, null, !1, !0), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && In(A, n.transition), D = A, ns(L), D;
}
const yc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, _c = (e, t) => {
  const n = {};
  for (const s in e)
    (!dr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function vc(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Qr(s, o, d) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        const g = c[p];
        if (o[g] !== s[g] && !Os(d, g))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Qr(s, o, d) : !0 : !!o;
  return !1;
}
function Qr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !Os(n, i))
      return !0;
  }
  return !1;
}
function bc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Xo = (e) => e.__isSuspense;
function wc(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : Aa(e);
}
const ye = Symbol.for("v-fgt"), Es = Symbol.for("v-txt"), Pe = Symbol.for("v-cmt"), Ws = Symbol.for("v-stc"), wn = [];
let Le = null;
function Z(e = !1) {
  wn.push(Le = e ? null : []);
}
function Cc() {
  wn.pop(), Le = wn[wn.length - 1] || null;
}
let An = 1;
function Xr(e, t = !1) {
  An += e, e < 0 && Le && t && (Le.hasOnce = !0);
}
function el(e) {
  return e.dynamicChildren = An > 0 ? Le || Gt : null, Cc(), An > 0 && Le && Le.push(e), e;
}
function he(e, t, n, s, r, i) {
  return el(
    N(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function He(e, t, n, s, r) {
  return el(
    ge(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function it(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Dt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const tl = ({ key: e }) => e ?? null, Jn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || we(e) || W(e) ? { i: _e, r: e, k: t, f: !!n } : e : null);
function N(e, t = null, n = null, s = 0, r = null, i = e === ye ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && tl(t),
    ref: t && Jn(t),
    scopeId: Co,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: _e
  };
  return l ? (Er(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ne(n) ? 8 : 16), An > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Le.push(a), a;
}
const ge = Sc;
function Sc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Mo) && (e = Pe), it(e)) {
    const l = St(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Er(l, n), An > 0 && !i && Le && (l.shapeFlag & 6 ? Le[Le.indexOf(e)] = l : Le.push(l)), l.patchFlag = -2, l;
  }
  if (Dc(e) && (e = e.__vccOpts), t) {
    t = xc(t);
    let { class: l, style: a } = t;
    l && !ne(l) && (t.class = de(l)), ee(a) && (Sr(a) && !F(a) && (a = ve({}, a)), t.style = $t(a));
  }
  const o = ne(e) ? 1 : Xo(e) ? 128 : So(e) ? 64 : ee(e) ? 4 : W(e) ? 2 : 0;
  return N(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function xc(e) {
  return e ? Sr(e) || Bo(e) ? ve({}, e) : e : null;
}
function St(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, d = t ? nl(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && tl(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? F(i) ? i.concat(Jn(t)) : [i, Jn(t)] : Jn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && St(e.ssContent),
    ssFallback: e.ssFallback && St(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && In(
    c,
    a.clone(c)
  ), c;
}
function Or(e = " ", t = 0) {
  return ge(Es, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (Z(), He(Pe, null, e)) : ge(Pe, null, e);
}
function nt(e) {
  return e == null || typeof e == "boolean" ? ge(Pe) : F(e) ? ge(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : it(e) ? bt(e) : ge(Es, null, String(e));
}
function bt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : St(e);
}
function Er(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (F(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Er(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Bo(t) ? t._ctx = _e : r === 3 && _e && (_e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else W(t) ? (t = { default: t, _ctx: _e }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Or(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function nl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = de([t.class, s.class]));
      else if (r === "style")
        t.style = $t([t.style, s.style]);
      else if (gs(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(F(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Xe(e, t, n, s = null) {
  qe(e, t, 7, [
    n,
    s
  ]);
}
const Tc = Fo();
let Oc = 0;
function Ec(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Tc, i = {
    uid: Oc++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ea(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ko(s, r),
    emitsOptions: Qo(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: se,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: se,
    data: se,
    props: se,
    attrs: se,
    slots: se,
    refs: se,
    setupState: se,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = mc.bind(null, i), e.ce && e.ce(i), i;
}
let be = null;
const Ft = () => be || _e;
let is, ir;
{
  const e = vs(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  is = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => be = n
  ), ir = t(
    "__VUE_SSR_SETTERS__",
    (n) => Nn = n
  );
}
const Ln = (e) => {
  const t = be;
  return is(e), e.scope.on(), () => {
    e.scope.off(), is(t);
  };
}, ei = () => {
  be && be.scope.off(), is(null);
};
function sl(e) {
  return e.vnode.shapeFlag & 4;
}
let Nn = !1;
function Ic(e, t = !1, n = !1) {
  t && ir(t);
  const { props: s, children: r } = e.vnode, i = sl(e);
  nc(e, s, i, t), oc(e, r, n);
  const o = i ? Pc(e, t) : void 0;
  return t && ir(!1), o;
}
function Pc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, qa);
  const { setup: s } = n;
  if (s) {
    xt();
    const r = e.setupContext = s.length > 1 ? Nc(e) : null, i = Ln(e), o = $n(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Ki(o);
    if (Tt(), i(), (l || e.sp) && !Qt(e) && Po(e), l) {
      if (o.then(ei, ei), t)
        return o.then((a) => {
          ti(e, a);
        }).catch((a) => {
          Cs(a, e, 0);
        });
      e.asyncDep = o;
    } else
      ti(e, o);
  } else
    rl(e);
}
function ti(e, t, n) {
  W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) && (e.setupState = yo(t)), rl(e);
}
function rl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ue);
  {
    const r = Ln(e);
    xt();
    try {
      Ja(e);
    } finally {
      Tt(), r();
    }
  }
}
const Ac = {
  get(e, t) {
    return xe(e, "get", ""), e[t];
  }
};
function Nc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ac),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Is(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yo(ba(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in bn)
        return bn[n](e);
    },
    has(t, n) {
      return n in t || n in bn;
    }
  })) : e.proxy;
}
function Mc(e, t = !0) {
  return W(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dc(e) {
  return W(e) && "__vccOpts" in e;
}
const G = (e, t) => Ta(e, t, Nn);
function Rc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ee(t) && !F(t) ? it(t) ? ge(e, null, [t]) : ge(e, t) : ge(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && it(n) && (n = [n]), ge(e, t, n));
}
const $c = "3.5.13", Lc = Ue;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let or;
const ni = typeof window < "u" && window.trustedTypes;
if (ni)
  try {
    or = /* @__PURE__ */ ni.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const il = or ? (e) => or.createHTML(e) : (e) => e, Fc = "http://www.w3.org/2000/svg", zc = "http://www.w3.org/1998/Math/MathML", ft = typeof document < "u" ? document : null, si = ft && /* @__PURE__ */ ft.createElement("template"), Hc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? ft.createElementNS(Fc, e) : t === "mathml" ? ft.createElementNS(zc, e) : n ? ft.createElement(e, { is: n }) : ft.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ft.createTextNode(e),
  createComment: (e) => ft.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ft.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      si.innerHTML = il(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = si.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, yt = "transition", pn = "animation", Mn = Symbol("_vtc"), ol = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Wc = /* @__PURE__ */ ve(
  {},
  xo,
  ol
), Bc = (e) => (e.displayName = "Transition", e.props = Wc, e), Ir = /* @__PURE__ */ Bc(
  (e, { slots: t }) => Rc(Ra, jc(e), t)
), Pt = (e, t = []) => {
  F(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ri = (e) => e ? F(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function jc(e) {
  const t = {};
  for (const P in e)
    P in ol || (t[P] = e[P]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: d = o,
    appearToClass: c = l,
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: w = `${n}-leave-to`
  } = e, R = kc(r), C = R && R[0], L = R && R[1], {
    onBeforeEnter: D,
    onEnter: U,
    onEnterCancelled: A,
    onLeave: I,
    onLeaveCancelled: V,
    onBeforeAppear: re = D,
    onAppear: k = U,
    onAppearCancelled: pe = A
  } = t, B = (P, ie, me, ke) => {
    P._enterCancelled = ke, At(P, ie ? c : l), At(P, ie ? d : o), me && me();
  }, Y = (P, ie) => {
    P._isLeaving = !1, At(P, p), At(P, w), At(P, g), ie && ie();
  }, ae = (P) => (ie, me) => {
    const ke = P ? k : U, fe = () => B(ie, P, me);
    Pt(ke, [ie, fe]), ii(() => {
      At(ie, P ? a : i), ut(ie, P ? c : l), ri(ke) || oi(ie, s, C, fe);
    });
  };
  return ve(t, {
    onBeforeEnter(P) {
      Pt(D, [P]), ut(P, i), ut(P, o);
    },
    onBeforeAppear(P) {
      Pt(re, [P]), ut(P, a), ut(P, d);
    },
    onEnter: ae(!1),
    onAppear: ae(!0),
    onLeave(P, ie) {
      P._isLeaving = !0;
      const me = () => Y(P, ie);
      ut(P, p), P._enterCancelled ? (ut(P, g), ci()) : (ci(), ut(P, g)), ii(() => {
        P._isLeaving && (At(P, p), ut(P, w), ri(I) || oi(P, s, L, me));
      }), Pt(I, [P, me]);
    },
    onEnterCancelled(P) {
      B(P, !1, void 0, !0), Pt(A, [P]);
    },
    onAppearCancelled(P) {
      B(P, !0, void 0, !0), Pt(pe, [P]);
    },
    onLeaveCancelled(P) {
      Y(P), Pt(V, [P]);
    }
  });
}
function kc(e) {
  if (e == null)
    return null;
  if (ee(e))
    return [Bs(e.enter), Bs(e.leave)];
  {
    const t = Bs(e);
    return [t, t];
  }
}
function Bs(e) {
  return Ul(e);
}
function ut(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Mn] || (e[Mn] = /* @__PURE__ */ new Set())).add(t);
}
function At(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Mn];
  n && (n.delete(t), n.size || (e[Mn] = void 0));
}
function ii(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Vc = 0;
function oi(e, t, n, s) {
  const r = e._endId = ++Vc, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: a } = Uc(e, t);
  if (!o)
    return s();
  const d = o + "end";
  let c = 0;
  const p = () => {
    e.removeEventListener(d, g), i();
  }, g = (w) => {
    w.target === e && ++c >= a && p();
  };
  setTimeout(() => {
    c < a && p();
  }, l + 1), e.addEventListener(d, g);
}
function Uc(e, t) {
  const n = window.getComputedStyle(e), s = (R) => (n[R] || "").split(", "), r = s(`${yt}Delay`), i = s(`${yt}Duration`), o = li(r, i), l = s(`${pn}Delay`), a = s(`${pn}Duration`), d = li(l, a);
  let c = null, p = 0, g = 0;
  t === yt ? o > 0 && (c = yt, p = o, g = i.length) : t === pn ? d > 0 && (c = pn, p = d, g = a.length) : (p = Math.max(o, d), c = p > 0 ? o > d ? yt : pn : null, g = c ? c === yt ? i.length : a.length : 0);
  const w = c === yt && /\b(transform|all)(,|$)/.test(
    s(`${yt}Property`).toString()
  );
  return {
    type: c,
    timeout: p,
    propCount: g,
    hasTransform: w
  };
}
function li(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ai(n) + ai(e[s])));
}
function ai(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ci() {
  return document.body.offsetHeight;
}
function Kc(e, t, n) {
  const s = e[Mn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const os = Symbol("_vod"), ll = Symbol("_vsh"), ls = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[os] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : hn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), hn(e, !0), s.enter(e)) : s.leave(e, () => {
      hn(e, !1);
    }) : hn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    hn(e, t);
  }
};
function hn(e, t) {
  e.style.display = t ? e[os] : "none", e[ll] = !t;
}
const Gc = Symbol(""), qc = /(^|;)\s*display\s*:/;
function Jc(e, t, n) {
  const s = e.style, r = ne(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ne(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Zn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Zn(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), Zn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Gc];
      o && (n += ";" + o), s.cssText = n, i = qc.test(n);
    }
  } else t && e.removeAttribute("style");
  os in e && (e[os] = i ? s.display : "", e[ll] && (s.display = "none"));
}
const ui = /\s*!important$/;
function Zn(e, t, n) {
  if (F(n))
    n.forEach((s) => Zn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Zc(e, t);
    ui.test(n) ? e.setProperty(
      Wt(s),
      n.replace(ui, ""),
      "important"
    ) : e[s] = n;
  }
}
const fi = ["Webkit", "Moz", "ms"], js = {};
function Zc(e, t) {
  const n = js[t];
  if (n)
    return n;
  let s = Be(t);
  if (s !== "filter" && s in e)
    return js[t] = s;
  s = _s(s);
  for (let r = 0; r < fi.length; r++) {
    const i = fi[r] + s;
    if (i in e)
      return js[t] = i;
  }
  return t;
}
const di = "http://www.w3.org/1999/xlink";
function pi(e, t, n, s, r, i = Yl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(di, t.slice(6, t.length)) : e.setAttributeNS(di, t, n) : n == null || i && !Yi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ge(n) ? String(n) : n
  );
}
function hi(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? il(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Yi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function al(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Yc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const gi = Symbol("_vei");
function Qc(e, t, n, s, r = null) {
  const i = e[gi] || (e[gi] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = Xc(t);
    if (s) {
      const d = i[t] = nu(
        s,
        r
      );
      al(e, l, d, a);
    } else o && (Yc(e, l, o, a), i[t] = void 0);
  }
}
const mi = /(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t;
  if (mi.test(e)) {
    t = {};
    let s;
    for (; s = e.match(mi); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Wt(e.slice(2)), t];
}
let ks = 0;
const eu = /* @__PURE__ */ Promise.resolve(), tu = () => ks || (eu.then(() => ks = 0), ks = Date.now());
function nu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    qe(
      su(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = tu(), n;
}
function su(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const yi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ru = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Kc(e, s, o) : t === "style" ? Jc(e, n, s) : gs(t) ? dr(t) || Qc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : iu(e, t, s, o)) ? (hi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pi(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(s)) ? hi(e, Be(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), pi(e, t, s, o));
};
function iu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yi(t) && W(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return yi(t) && ne(n) ? !1 : t in e;
}
const _i = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return F(t) ? (n) => qn(t, n) : t;
}, Vs = Symbol("_assign"), vi = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = ms(t);
    al(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Zi(as(o)) : as(o)
      );
      e[Vs](
        e.multiple ? r ? new Set(i) : i : i[0]
      ), e._assigning = !0, Yt(() => {
        e._assigning = !1;
      });
    }), e[Vs] = _i(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    bi(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Vs] = _i(n);
  },
  updated(e, { value: t }) {
    e._assigning || bi(e, t);
  }
};
function bi(e, t) {
  const n = e.multiple, s = F(t);
  if (!(n && !s && !ms(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r], l = as(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((d) => String(d) === String(l)) : o.selected = Xl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (bs(as(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function as(e) {
  return "_value" in e ? e._value : e.value;
}
const ou = ["ctrl", "shift", "alt", "meta"], lu = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => ou.some((n) => e[`${n}Key`] && !t.includes(n))
}, Cn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = lu[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  });
}, au = /* @__PURE__ */ ve({ patchProp: ru }, Hc);
let wi;
function cu() {
  return wi || (wi = ac(au));
}
const cs = (...e) => {
  cu().render(...e);
};
function uu(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function fu(e, t, n, s, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Yn;
const je = "__TAURI_TO_IPC_KEY__";
function du(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function _(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class pu {
  get rid() {
    return uu(this, Yn, "f");
  }
  constructor(t) {
    Yn.set(this, void 0), fu(this, Yn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return _("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Yn = /* @__PURE__ */ new WeakMap();
class Sn {
  constructor(...t) {
    this.type = "Logical", t.length === 1 ? "Logical" in t[0] ? (this.width = t[0].Logical.width, this.height = t[0].Logical.height) : (this.width = t[0].width, this.height = t[0].height) : (this.width = t[0], this.height = t[1]);
  }
  /**
   * Converts the logical size to a physical one.
   * @example
   * ```typescript
   * import { LogicalSize } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = new LogicalSize(400, 500);
   * const physical = size.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(t) {
    return new tn(this.width * t, this.height * t);
  }
  [je]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[je]();
  }
}
class tn {
  constructor(...t) {
    this.type = "Physical", t.length === 1 ? "Physical" in t[0] ? (this.width = t[0].Physical.width, this.height = t[0].Physical.height) : (this.width = t[0].width, this.height = t[0].height) : (this.width = t[0], this.height = t[1]);
  }
  /**
   * Converts the physical size to a logical one.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = await appWindow.innerSize(); // PhysicalSize
   * const logical = size.toLogical(factor);
   * ```
   */
  toLogical(t) {
    return new Sn(this.width / t, this.height / t);
  }
  [je]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[je]();
  }
}
class Ut {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Sn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof tn ? this.size : this.size.toPhysical(t);
  }
  [je]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[je]();
  }
}
class cl {
  constructor(...t) {
    this.type = "Logical", t.length === 1 ? "Logical" in t[0] ? (this.x = t[0].Logical.x, this.y = t[0].Logical.y) : (this.x = t[0].x, this.y = t[0].y) : (this.x = t[0], this.y = t[1]);
  }
  /**
   * Converts the logical position to a physical one.
   * @example
   * ```typescript
   * import { LogicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new LogicalPosition(400, 500);
   * const physical = position.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(t) {
    return new st(this.x * t, this.y * t);
  }
  [je]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[je]();
  }
}
class st {
  constructor(...t) {
    this.type = "Physical", t.length === 1 ? "Physical" in t[0] ? (this.x = t[0].Physical.x, this.y = t[0].Physical.y) : (this.x = t[0].x, this.y = t[0].y) : (this.x = t[0], this.y = t[1]);
  }
  /**
   * Converts the physical position to a logical one.
   * @example
   * ```typescript
   * import { PhysicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new PhysicalPosition(400, 500);
   * const physical = position.toLogical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toLogical(t) {
    return new cl(this.x / t, this.y / t);
  }
  [je]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[je]();
  }
}
class jn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof cl ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof st ? this.position : this.position.toPhysical(t);
  }
  [je]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[je]();
  }
}
var $e;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})($e || ($e = {}));
async function ul(e, t) {
  await _("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function fl(e, t, n) {
  var s;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return _("plugin:event|listen", {
    event: e,
    target: r,
    handler: du(t)
  }).then((i) => async () => ul(e, i));
}
async function hu(e, t, n) {
  return fl(e, (s) => {
    ul(e, s.id), t(s);
  }, n);
}
async function gu(e, t) {
  await _("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function mu(e, t, n) {
  await _("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class xn extends pu {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, s) {
    return _("plugin:image|new", {
      rgba: us(t),
      width: n,
      height: s
    }).then((r) => new xn(r));
  }
  /**
   * Creates a new image using the provided bytes by inferring the file format.
   * If the format is known, prefer [@link Image.fromPngBytes] or [@link Image.fromIcoBytes].
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static async fromBytes(t) {
    return _("plugin:image|from_bytes", {
      bytes: us(t)
    }).then((n) => new xn(n));
  }
  /**
   * Creates a new image using the provided path.
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static async fromPath(t) {
    return _("plugin:image|from_path", { path: t }).then((n) => new xn(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return _("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return _("plugin:image|size", { rid: this.rid });
  }
}
function us(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof xn ? e.rid : e;
}
var lr;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(lr || (lr = {}));
class yu {
  constructor(t) {
    this._preventDefault = !1, this.event = t.event, this.id = t.id;
  }
  preventDefault() {
    this._preventDefault = !0;
  }
  isPreventDefault() {
    return this._preventDefault;
  }
}
var Ci;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ci || (Ci = {}));
function dl() {
  return new pl(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Us() {
  return _("plugin:window|get_all_windows").then((e) => e.map((t) => new pl(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Ks = ["tauri://created", "tauri://error"];
class pl {
  /**
   * Creates a new Window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const appWindow = new Window('my-label');
   * appWindow.once('tauri://created', function () {
   *  // window successfully created
   * });
   * appWindow.once('tauri://error', function (e) {
   *  // an error happened creating the window
   * });
   * ```
   *
   * @param label The unique window label. Must be alphanumeric: `a-zA-Z-/:_`.
   * @returns The {@link Window} instance to communicate with the window.
   */
  constructor(t, n = {}) {
    var s;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || _("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (s = n.parent) === null || s === void 0 ? void 0 : s.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (r) => this.emit("tauri://error", r));
  }
  /**
   * Gets the Window associated with the given label.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const mainWindow = Window.getByLabel('main');
   * ```
   *
   * @param label The window label.
   * @returns The Window instance to communicate with the window or null if the window doesn't exist.
   */
  static async getByLabel(t) {
    var n;
    return (n = (await Us()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return dl();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Us();
  }
  /**
   *  Gets the focused window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const focusedWindow = Window.getFocusedWindow();
   * ```
   *
   * @returns The Window instance or `undefined` if there is not any focused window.
   */
  static async getFocusedWindow() {
    for (const t of await Us())
      if (await t.isFocused())
        return t;
    return null;
  }
  /**
   * Listen to an emitted event on this window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().listen<string>('state-changed', (event) => {
   *   console.log(`Got error: ${payload}`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async listen(t, n) {
    return this._handleTauriEvent(t, n) ? () => {
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : fl(t, n, {
      target: { kind: "Window", label: this.label }
    });
  }
  /**
   * Listen to an emitted event on this window only once.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().once<null>('initialized', (event) => {
   *   console.log(`Window initialized!`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async once(t, n) {
    return this._handleTauriEvent(t, n) ? () => {
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : hu(t, n, {
      target: { kind: "Window", label: this.label }
    });
  }
  /**
   * Emits an event to all {@link EventTarget|targets}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  async emit(t, n) {
    if (Ks.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return gu(t, n);
  }
  /**
   * Emits an event to all {@link EventTarget|targets} matching the given target.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('main', 'window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   * @param target Label of the target Window/Webview/WebviewWindow or raw {@link EventTarget} object.
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  async emitTo(t, n, s) {
    if (Ks.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return mu(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Ks.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
  }
  // Getters
  /**
   * The scale factor that can be used to map physical pixels to logical pixels.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const factor = await getCurrentWindow().scaleFactor();
   * ```
   *
   * @returns The window's monitor scale factor.
   */
  async scaleFactor() {
    return _("plugin:window|scale_factor", {
      label: this.label
    });
  }
  /**
   * The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().innerPosition();
   * ```
   *
   * @returns The window's inner position.
   */
  async innerPosition() {
    return _("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new st(t));
  }
  /**
   * The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().outerPosition();
   * ```
   *
   * @returns The window's outer position.
   */
  async outerPosition() {
    return _("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new st(t));
  }
  /**
   * The physical size of the window's client area.
   * The client area is the content of the window, excluding the title bar and borders.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().innerSize();
   * ```
   *
   * @returns The window's inner size.
   */
  async innerSize() {
    return _("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new tn(t));
  }
  /**
   * The physical size of the entire window.
   * These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().outerSize();
   * ```
   *
   * @returns The window's outer size.
   */
  async outerSize() {
    return _("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new tn(t));
  }
  /**
   * Gets the window's current fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const fullscreen = await getCurrentWindow().isFullscreen();
   * ```
   *
   * @returns Whether the window is in fullscreen mode or not.
   */
  async isFullscreen() {
    return _("plugin:window|is_fullscreen", {
      label: this.label
    });
  }
  /**
   * Gets the window's current minimized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimized = await getCurrentWindow().isMinimized();
   * ```
   */
  async isMinimized() {
    return _("plugin:window|is_minimized", {
      label: this.label
    });
  }
  /**
   * Gets the window's current maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximized = await getCurrentWindow().isMaximized();
   * ```
   *
   * @returns Whether the window is maximized or not.
   */
  async isMaximized() {
    return _("plugin:window|is_maximized", {
      label: this.label
    });
  }
  /**
   * Gets the window's current focus state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const focused = await getCurrentWindow().isFocused();
   * ```
   *
   * @returns Whether the window is focused or not.
   */
  async isFocused() {
    return _("plugin:window|is_focused", {
      label: this.label
    });
  }
  /**
   * Gets the window's current decorated state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const decorated = await getCurrentWindow().isDecorated();
   * ```
   *
   * @returns Whether the window is decorated or not.
   */
  async isDecorated() {
    return _("plugin:window|is_decorated", {
      label: this.label
    });
  }
  /**
   * Gets the window's current resizable state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const resizable = await getCurrentWindow().isResizable();
   * ```
   *
   * @returns Whether the window is resizable or not.
   */
  async isResizable() {
    return _("plugin:window|is_resizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native maximize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximizable = await getCurrentWindow().isMaximizable();
   * ```
   *
   * @returns Whether the window's native maximize button is enabled or not.
   */
  async isMaximizable() {
    return _("plugin:window|is_maximizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native minimize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimizable = await getCurrentWindow().isMinimizable();
   * ```
   *
   * @returns Whether the window's native minimize button is enabled or not.
   */
  async isMinimizable() {
    return _("plugin:window|is_minimizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native close button state.
   *
   * #### Platform-specific
   *
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const closable = await getCurrentWindow().isClosable();
   * ```
   *
   * @returns Whether the window's native close button is enabled or not.
   */
  async isClosable() {
    return _("plugin:window|is_closable", {
      label: this.label
    });
  }
  /**
   * Gets the window's current visible state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const visible = await getCurrentWindow().isVisible();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  async isVisible() {
    return _("plugin:window|is_visible", {
      label: this.label
    });
  }
  /**
   * Gets the window's current title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const title = await getCurrentWindow().title();
   * ```
   */
  async title() {
    return _("plugin:window|title", {
      label: this.label
    });
  }
  /**
   * Gets the window's current theme.
   *
   * #### Platform-specific
   *
   * - **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const theme = await getCurrentWindow().theme();
   * ```
   *
   * @returns The window theme.
   */
  async theme() {
    return _("plugin:window|theme", {
      label: this.label
    });
  }
  /**
   * Whether the window is configured to be always on top of other windows or not.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const alwaysOnTop = await getCurrentWindow().isAlwaysOnTop();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  async isAlwaysOnTop() {
    return _("plugin:window|is_always_on_top", {
      label: this.label
    });
  }
  // Setters
  /**
   * Centers the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().center();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async center() {
    return _("plugin:window|center", {
      label: this.label
    });
  }
  /**
   *  Requests user attention to the window, this has no effect if the application
   * is already focused. How requesting for user attention manifests is platform dependent,
   * see `UserAttentionType` for details.
   *
   * Providing `null` will unset the request for user attention. Unsetting the request for
   * user attention might not be done automatically by the WM when the window receives input.
   *
   * #### Platform-specific
   *
   * - **macOS:** `null` has no effect.
   * - **Linux:** Urgency levels have the same effect.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().requestUserAttention();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async requestUserAttention(t) {
    let n = null;
    return t && (t === lr.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), _("plugin:window|request_user_attention", {
      label: this.label,
      value: n
    });
  }
  /**
   * Updates the window resizable flag.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setResizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setResizable(t) {
    return _("plugin:window|set_resizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Enable or disable the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  async setEnabled(t) {
    return _("plugin:window|set_enabled", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether the window is enabled or disabled.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  async isEnabled() {
    return _("plugin:window|is_enabled", {
      label: this.label
    });
  }
  /**
   * Sets whether the window's native maximize button is enabled or not.
   * If resizable is set to false, this setting is ignored.
   *
   * #### Platform-specific
   *
   * - **macOS:** Disables the "zoom" button in the window titlebar, which is also used to enter fullscreen mode.
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaximizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMaximizable(t) {
    return _("plugin:window|set_maximizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window's native minimize button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinimizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMinimizable(t) {
    return _("plugin:window|set_minimizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window's native close button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux:** GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setClosable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setClosable(t) {
    return _("plugin:window|set_closable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the window title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setTitle('Tauri');
   * ```
   *
   * @param title The new title
   * @returns A promise indicating the success or failure of the operation.
   */
  async setTitle(t) {
    return _("plugin:window|set_title", {
      label: this.label,
      value: t
    });
  }
  /**
   * Maximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().maximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async maximize() {
    return _("plugin:window|maximize", {
      label: this.label
    });
  }
  /**
   * Unmaximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unmaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async unmaximize() {
    return _("plugin:window|unmaximize", {
      label: this.label
    });
  }
  /**
   * Toggles the window maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().toggleMaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async toggleMaximize() {
    return _("plugin:window|toggle_maximize", {
      label: this.label
    });
  }
  /**
   * Minimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().minimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async minimize() {
    return _("plugin:window|minimize", {
      label: this.label
    });
  }
  /**
   * Unminimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unminimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async unminimize() {
    return _("plugin:window|unminimize", {
      label: this.label
    });
  }
  /**
   * Sets the window visibility to true.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().show();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async show() {
    return _("plugin:window|show", {
      label: this.label
    });
  }
  /**
   * Sets the window visibility to false.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().hide();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async hide() {
    return _("plugin:window|hide", {
      label: this.label
    });
  }
  /**
   * Closes the window.
   *
   * Note this emits a closeRequested event so you can intercept it. To force window close, use {@link Window.destroy}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().close();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async close() {
    return _("plugin:window|close", {
      label: this.label
    });
  }
  /**
   * Destroys the window. Behaves like {@link Window.close} but forces the window close instead of emitting a closeRequested event.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().destroy();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async destroy() {
    return _("plugin:window|destroy", {
      label: this.label
    });
  }
  /**
   * Whether the window should have borders and bars.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setDecorations(false);
   * ```
   *
   * @param decorations Whether the window should have borders and bars.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setDecorations(t) {
    return _("plugin:window|set_decorations", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether or not the window should have shadow.
   *
   * #### Platform-specific
   *
   * - **Windows:**
   *   - `false` has no effect on decorated window, shadows are always ON.
   *   - `true` will make undecorated window have a 1px white border,
   * and on Windows 11, it will have a rounded corners.
   * - **Linux:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setShadow(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setShadow(t) {
    return _("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return _("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return _("plugin:window|set_effects", {
      label: this.label,
      value: null
    });
  }
  /**
   * Whether the window should always be on top of other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnTop(true);
   * ```
   *
   * @param alwaysOnTop Whether the window should always be on top of other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setAlwaysOnTop(t) {
    return _("plugin:window|set_always_on_top", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether the window should always be below other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnBottom(true);
   * ```
   *
   * @param alwaysOnBottom Whether the window should always be below other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setAlwaysOnBottom(t) {
    return _("plugin:window|set_always_on_bottom", {
      label: this.label,
      value: t
    });
  }
  /**
   * Prevents the window contents from being captured by other apps.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setContentProtected(true);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setContentProtected(t) {
    return _("plugin:window|set_content_protected", {
      label: this.label,
      value: t
    });
  }
  /**
   * Resizes the window with a new inner size.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSize(t) {
    return _("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Ut ? t : new Ut(t)
    });
  }
  /**
   * Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, PhysicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinSize(new PhysicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMinSize(t) {
    return _("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Ut ? t : t ? new Ut(t) : null
    });
  }
  /**
   * Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaxSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMaxSize(t) {
    return _("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Ut ? t : t ? new Ut(t) : null
    });
  }
  /**
   * Sets the window inner size constraints.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSizeConstraints({ minWidth: 300 });
   * ```
   *
   * @param constraints The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSizeConstraints(t) {
    function n(s) {
      return s ? { Logical: s } : null;
    }
    return _("plugin:window|set_size_constraints", {
      label: this.label,
      value: {
        minWidth: n(t?.minWidth),
        minHeight: n(t?.minHeight),
        maxWidth: n(t?.maxWidth),
        maxHeight: n(t?.maxHeight)
      }
    });
  }
  /**
   * Sets the window outer position.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setPosition(new LogicalPosition(600, 500));
   * ```
   *
   * @param position The new position, in logical or physical pixels.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setPosition(t) {
    return _("plugin:window|set_position", {
      label: this.label,
      value: t instanceof jn ? t : new jn(t)
    });
  }
  /**
   * Sets the window fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFullscreen(true);
   * ```
   *
   * @param fullscreen Whether the window should go to fullscreen or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setFullscreen(t) {
    return _("plugin:window|set_fullscreen", {
      label: this.label,
      value: t
    });
  }
  /**
   * Bring the window to front and focus.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFocus();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setFocus() {
    return _("plugin:window|set_focus", {
      label: this.label
    });
  }
  /**
   * Sets the window icon.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIcon('/tauri/awesome.png');
   * ```
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @param icon Icon bytes or path to the icon file.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setIcon(t) {
    return _("plugin:window|set_icon", {
      label: this.label,
      value: us(t)
    });
  }
  /**
   * Whether the window icon should be hidden from the taskbar or not.
   *
   * #### Platform-specific
   *
   * - **macOS:** Unsupported.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSkipTaskbar(true);
   * ```
   *
   * @param skip true to hide window icon, false to show it.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSkipTaskbar(t) {
    return _("plugin:window|set_skip_taskbar", {
      label: this.label,
      value: t
    });
  }
  /**
   * Grabs the cursor, preventing it from leaving the window.
   *
   * There's no guarantee that the cursor will be hidden. You should
   * hide it by yourself if you want so.
   *
   * #### Platform-specific
   *
   * - **Linux:** Unsupported.
   * - **macOS:** This locks the cursor in a fixed location, which looks visually awkward.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorGrab(true);
   * ```
   *
   * @param grab `true` to grab the cursor icon, `false` to release it.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorGrab(t) {
    return _("plugin:window|set_cursor_grab", {
      label: this.label,
      value: t
    });
  }
  /**
   * Modifies the cursor's visibility.
   *
   * #### Platform-specific
   *
   * - **Windows:** The cursor is only hidden within the confines of the window.
   * - **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
   *   outside of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorVisible(false);
   * ```
   *
   * @param visible If `false`, this will hide the cursor. If `true`, this will show the cursor.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorVisible(t) {
    return _("plugin:window|set_cursor_visible", {
      label: this.label,
      value: t
    });
  }
  /**
   * Modifies the cursor icon of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorIcon('help');
   * ```
   *
   * @param icon The new cursor icon.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorIcon(t) {
    return _("plugin:window|set_cursor_icon", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the window background color.
   *
   * #### Platform-specific:
   *
   * - **Windows:** alpha channel is ignored.
   * - **iOS / Android:** Unsupported.
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.1.0
   */
  async setBackgroundColor(t) {
    return _("plugin:window|set_background_color", { color: t });
  }
  /**
   * Changes the position of the cursor in window coordinates.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorPosition(new LogicalPosition(600, 300));
   * ```
   *
   * @param position The new cursor position.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorPosition(t) {
    return _("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof jn ? t : new jn(t)
    });
  }
  /**
   * Changes the cursor events behavior.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIgnoreCursorEvents(true);
   * ```
   *
   * @param ignore `true` to ignore the cursor events; `false` to process them as usual.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setIgnoreCursorEvents(t) {
    return _("plugin:window|set_ignore_cursor_events", {
      label: this.label,
      value: t
    });
  }
  /**
   * Starts dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async startDragging() {
    return _("plugin:window|start_dragging", {
      label: this.label
    });
  }
  /**
   * Starts resize-dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startResizeDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async startResizeDragging(t) {
    return _("plugin:window|start_resize_dragging", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the badge count. It is app wide and not specific to this window.
   *
   * #### Platform-specific
   *
   * - **Windows**: Unsupported. Use @{linkcode Window.setOverlayIcon} instead.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeCount(5);
   * ```
   *
   * @param count The badge count. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  async setBadgeCount(t) {
    return _("plugin:window|set_badge_count", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the badge cont **macOS only**.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeLabel("Hello");
   * ```
   *
   * @param label The badge label. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  async setBadgeLabel(t) {
    return _("plugin:window|set_badge_label", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the overlay icon. **Windows only**
   * The overlay icon can be set for every window.
   *
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   *
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setOverlayIcon("/tauri/awesome.png");
   * ```
   *
   * @param icon Icon bytes or path to the icon file. Use `undefined` to remove the overlay icon.
   * @return A promise indicating the success or failure of the operation.
   */
  async setOverlayIcon(t) {
    return _("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? us(t) : void 0
    });
  }
  /**
   * Sets the taskbar progress state.
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Progress bar is app-wide and not specific to this window.
   * - **Linux**: Only supported desktop environments with `libunity` (e.g. GNOME).
   *
   * @example
   * ```typescript
   * import { getCurrentWindow, ProgressBarStatus } from '@tauri-apps/api/window';
   * await getCurrentWindow().setProgressBar({
   *   status: ProgressBarStatus.Normal,
   *   progress: 50,
   * });
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async setProgressBar(t) {
    return _("plugin:window|set_progress_bar", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window should be visible on all workspaces or virtual desktops.
   *
   * #### Platform-specific
   *
   * - **Windows / iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  async setVisibleOnAllWorkspaces(t) {
    return _("plugin:window|set_visible_on_all_workspaces", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the title bar style. **macOS only**.
   *
   * @since 2.0.0
   */
  async setTitleBarStyle(t) {
    return _("plugin:window|set_title_bar_style", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window theme, pass in `null` or `undefined` to follow system theme
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Theme is app-wide and not specific to this window.
   * - **iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  async setTheme(t) {
    return _("plugin:window|set_theme", {
      label: this.label,
      value: t
    });
  }
  // Listeners
  /**
   * Listen to window resize.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onResized(({ payload: size }) => {
   *  console.log('Window resized', size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onResized(t) {
    return this.listen($e.WINDOW_RESIZED, (n) => {
      n.payload = new tn(n.payload), t(n);
    });
  }
  /**
   * Listen to window move.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onMoved(({ payload: position }) => {
   *  console.log('Window moved', position);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onMoved(t) {
    return this.listen($e.WINDOW_MOVED, (n) => {
      n.payload = new st(n.payload), t(n);
    });
  }
  /**
   * Listen to window close requested. Emitted when the user requests to closes the window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * import { confirm } from '@tauri-apps/api/dialog';
   * const unlisten = await getCurrentWindow().onCloseRequested(async (event) => {
   *   const confirmed = await confirm('Are you sure?');
   *   if (!confirmed) {
   *     // user did not confirm closing the window; let's prevent it
   *     event.preventDefault();
   *   }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onCloseRequested(t) {
    return this.listen($e.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new yu(n);
      await t(s), s.isPreventDefault() || await this.destroy();
    });
  }
  /**
   * Listen to a file drop event.
   * The listener is triggered when the user hovers the selected files on the webview,
   * drops the files or cancels the operation.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/webview";
   * const unlisten = await getCurrentWindow().onDragDropEvent((event) => {
   *  if (event.payload.type === 'over') {
   *    console.log('User hovering', event.payload.position);
   *  } else if (event.payload.type === 'drop') {
   *    console.log('User dropped', event.payload.paths);
   *  } else {
   *    console.log('File drop cancelled');
   *  }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onDragDropEvent(t) {
    const n = await this.listen($e.DRAG_ENTER, (o) => {
      t({
        ...o,
        payload: {
          type: "enter",
          paths: o.payload.paths,
          position: new st(o.payload.position)
        }
      });
    }), s = await this.listen($e.DRAG_OVER, (o) => {
      t({
        ...o,
        payload: {
          type: "over",
          position: new st(o.payload.position)
        }
      });
    }), r = await this.listen($e.DRAG_DROP, (o) => {
      t({
        ...o,
        payload: {
          type: "drop",
          paths: o.payload.paths,
          position: new st(o.payload.position)
        }
      });
    }), i = await this.listen($e.DRAG_LEAVE, (o) => {
      t({ ...o, payload: { type: "leave" } });
    });
    return () => {
      n(), r(), s(), i();
    };
  }
  /**
   * Listen to window focus change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onFocusChanged(({ payload: focused }) => {
   *  console.log('Focus changed, window is focused? ' + focused);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onFocusChanged(t) {
    const n = await this.listen($e.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), s = await this.listen($e.WINDOW_BLUR, (r) => {
      t({ ...r, payload: !1 });
    });
    return () => {
      n(), s();
    };
  }
  /**
   * Listen to window scale change. Emitted when the window's scale factor has changed.
   * The following user actions can cause DPI changes:
   * - Changing the display's resolution.
   * - Changing the display's scale factor (e.g. in Control Panel on Windows).
   * - Moving the window to a display with a different scale factor.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onScaleChanged(({ payload }) => {
   *  console.log('Scale changed', payload.scaleFactor, payload.size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onScaleChanged(t) {
    return this.listen($e.WINDOW_SCALE_FACTOR_CHANGED, t);
  }
  /**
   * Listen to the system theme change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onThemeChanged(({ payload: theme }) => {
   *  console.log('New theme: ' + theme);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onThemeChanged(t) {
    return this.listen($e.WINDOW_THEME_CHANGED, t);
  }
}
var Si;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Si || (Si = {}));
var xi;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(xi || (xi = {}));
var Ti;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Ti || (Ti = {}));
function _u(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new st(e.position),
    size: new tn(e.size)
  };
}
async function vu(e, t) {
  return _("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(_u);
}
const hl = Symbol(), Qn = "el", bu = "is-", Nt = (e, t, n, s, r) => {
  let i = `${e}-${t}`;
  return n && (i += `-${n}`), s && (i += `__${s}`), r && (i += `--${r}`), i;
}, gl = Symbol("namespaceContextKey"), wu = (e) => {
  const t = e || (Ft() ? rt(gl, ue(Qn)) : ue(Qn));
  return G(() => x(t) || Qn);
}, Pr = (e, t) => {
  const n = wu(t);
  return {
    namespace: n,
    b: (C = "") => Nt(n.value, e, C, "", ""),
    e: (C) => C ? Nt(n.value, e, "", C, "") : "",
    m: (C) => C ? Nt(n.value, e, "", "", C) : "",
    be: (C, L) => C && L ? Nt(n.value, e, C, L, "") : "",
    em: (C, L) => C && L ? Nt(n.value, e, "", C, L) : "",
    bm: (C, L) => C && L ? Nt(n.value, e, C, "", L) : "",
    bem: (C, L, D) => C && L && D ? Nt(n.value, e, C, L, D) : "",
    is: (C, ...L) => {
      const D = L.length >= 1 ? L[0] : !0;
      return C && D ? `${bu}${C}` : "";
    },
    cssVar: (C) => {
      const L = {};
      for (const D in C)
        C[D] && (L[`--${n.value}-${D}`] = C[D]);
      return L;
    },
    cssVarName: (C) => `--${n.value}-${C}`,
    cssVarBlock: (C) => {
      const L = {};
      for (const D in C)
        C[D] && (L[`--${n.value}-${e}-${D}`] = C[D]);
      return L;
    },
    cssVarBlockName: (C) => `--${n.value}-${e}-${C}`
  };
};
var Cu = typeof global == "object" && global && global.Object === Object && global, Su = typeof self == "object" && self && self.Object === Object && self, Ar = Cu || Su || Function("return this")(), sn = Ar.Symbol, ml = Object.prototype, xu = ml.hasOwnProperty, Tu = ml.toString, gn = sn ? sn.toStringTag : void 0;
function Ou(e) {
  var t = xu.call(e, gn), n = e[gn];
  try {
    e[gn] = void 0;
    var s = !0;
  } catch {
  }
  var r = Tu.call(e);
  return s && (t ? e[gn] = n : delete e[gn]), r;
}
var Eu = Object.prototype, Iu = Eu.toString;
function Pu(e) {
  return Iu.call(e);
}
var Au = "[object Null]", Nu = "[object Undefined]", Oi = sn ? sn.toStringTag : void 0;
function yl(e) {
  return e == null ? e === void 0 ? Nu : Au : Oi && Oi in Object(e) ? Ou(e) : Pu(e);
}
function Mu(e) {
  return e != null && typeof e == "object";
}
var Du = "[object Symbol]";
function Nr(e) {
  return typeof e == "symbol" || Mu(e) && yl(e) == Du;
}
function Ru(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, r = Array(s); ++n < s; )
    r[n] = t(e[n], n, e);
  return r;
}
var Mr = Array.isArray, Ei = sn ? sn.prototype : void 0, Ii = Ei ? Ei.toString : void 0;
function _l(e) {
  if (typeof e == "string")
    return e;
  if (Mr(e))
    return Ru(e, _l) + "";
  if (Nr(e))
    return Ii ? Ii.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function vl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var $u = "[object AsyncFunction]", Lu = "[object Function]", Fu = "[object GeneratorFunction]", zu = "[object Proxy]";
function Hu(e) {
  if (!vl(e))
    return !1;
  var t = yl(e);
  return t == Lu || t == Fu || t == $u || t == zu;
}
var Gs = Ar["__core-js_shared__"], Pi = function() {
  var e = /[^.]+$/.exec(Gs && Gs.keys && Gs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wu(e) {
  return !!Pi && Pi in e;
}
var Bu = Function.prototype, ju = Bu.toString;
function ku(e) {
  if (e != null) {
    try {
      return ju.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vu = /[\\^$.*+?()[\]{}|]/g, Uu = /^\[object .+?Constructor\]$/, Ku = Function.prototype, Gu = Object.prototype, qu = Ku.toString, Ju = Gu.hasOwnProperty, Zu = RegExp(
  "^" + qu.call(Ju).replace(Vu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yu(e) {
  if (!vl(e) || Wu(e))
    return !1;
  var t = Hu(e) ? Zu : Uu;
  return t.test(ku(e));
}
function Qu(e, t) {
  return e?.[t];
}
function bl(e, t) {
  var n = Qu(e, t);
  return Yu(n) ? n : void 0;
}
function Xu(e, t) {
  return e === t || e !== e && t !== t;
}
var ef = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tf = /^\w*$/;
function nf(e, t) {
  if (Mr(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Nr(e) ? !0 : tf.test(e) || !ef.test(e) || t != null && e in Object(t);
}
var Dn = bl(Object, "create");
function sf() {
  this.__data__ = Dn ? Dn(null) : {}, this.size = 0;
}
function rf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var of = "__lodash_hash_undefined__", lf = Object.prototype, af = lf.hasOwnProperty;
function cf(e) {
  var t = this.__data__;
  if (Dn) {
    var n = t[e];
    return n === of ? void 0 : n;
  }
  return af.call(t, e) ? t[e] : void 0;
}
var uf = Object.prototype, ff = uf.hasOwnProperty;
function df(e) {
  var t = this.__data__;
  return Dn ? t[e] !== void 0 : ff.call(t, e);
}
var pf = "__lodash_hash_undefined__";
function hf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Dn && t === void 0 ? pf : t, this;
}
function zt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
zt.prototype.clear = sf;
zt.prototype.delete = rf;
zt.prototype.get = cf;
zt.prototype.has = df;
zt.prototype.set = hf;
function gf() {
  this.__data__ = [], this.size = 0;
}
function Ps(e, t) {
  for (var n = e.length; n--; )
    if (Xu(e[n][0], t))
      return n;
  return -1;
}
var mf = Array.prototype, yf = mf.splice;
function _f(e) {
  var t = this.__data__, n = Ps(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : yf.call(t, n, 1), --this.size, !0;
}
function vf(e) {
  var t = this.__data__, n = Ps(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function bf(e) {
  return Ps(this.__data__, e) > -1;
}
function wf(e, t) {
  var n = this.__data__, s = Ps(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function an(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
an.prototype.clear = gf;
an.prototype.delete = _f;
an.prototype.get = vf;
an.prototype.has = bf;
an.prototype.set = wf;
var Cf = bl(Ar, "Map");
function Sf() {
  this.size = 0, this.__data__ = {
    hash: new zt(),
    map: new (Cf || an)(),
    string: new zt()
  };
}
function xf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function As(e, t) {
  var n = e.__data__;
  return xf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Tf(e) {
  var t = As(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Of(e) {
  return As(this, e).get(e);
}
function Ef(e) {
  return As(this, e).has(e);
}
function If(e, t) {
  var n = As(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function Bt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Bt.prototype.clear = Sf;
Bt.prototype.delete = Tf;
Bt.prototype.get = Of;
Bt.prototype.has = Ef;
Bt.prototype.set = If;
var Pf = "Expected a function";
function Dr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Pf);
  var n = function() {
    var s = arguments, r = t ? t.apply(this, s) : s[0], i = n.cache;
    if (i.has(r))
      return i.get(r);
    var o = e.apply(this, s);
    return n.cache = i.set(r, o) || i, o;
  };
  return n.cache = new (Dr.Cache || Bt)(), n;
}
Dr.Cache = Bt;
var Af = 500;
function Nf(e) {
  var t = Dr(e, function(s) {
    return n.size === Af && n.clear(), s;
  }), n = t.cache;
  return t;
}
var Mf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Df = /\\(\\)?/g, Rf = Nf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Mf, function(n, s, r, i) {
    t.push(r ? i.replace(Df, "$1") : s || n);
  }), t;
});
function $f(e) {
  return e == null ? "" : _l(e);
}
function Lf(e, t) {
  return Mr(e) ? e : nf(e, t) ? [e] : Rf($f(e));
}
function Ff(e) {
  if (typeof e == "string" || Nr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function zf(e, t) {
  t = Lf(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[Ff(t[n++])];
  return n && n == s ? e : void 0;
}
function Hf(e, t, n) {
  var s = e == null ? void 0 : zf(e, t);
  return s === void 0 ? n : s;
}
function Wf(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var r = e[t];
    s[r[0]] = r[1];
  }
  return s;
}
const wl = (e) => e === void 0, Ai = (e) => typeof e == "boolean", Ht = (e) => typeof e == "number", ar = (e) => typeof Element > "u" ? !1 : e instanceof Element, Bf = (e) => ne(e) ? !Number.isNaN(Number(e)) : !1;
var Ni;
const jt = typeof window < "u", jf = (e) => typeof e == "string", kf = () => {
};
jt && ((Ni = window?.navigator) != null && Ni.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Rr(e) {
  return typeof e == "function" ? e() : x(e);
}
function Vf(e) {
  return e;
}
function $r(e) {
  return eo() ? (ta(e), !0) : !1;
}
function Uf(e, t = !0) {
  Ft() ? ln(e) : t ? e() : Yt(e);
}
function Cl(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, r = ue(!1);
  let i = null;
  function o() {
    i && (clearTimeout(i), i = null);
  }
  function l() {
    r.value = !1, o();
  }
  function a(...d) {
    o(), r.value = !0, i = setTimeout(() => {
      r.value = !1, i = null, e(...d);
    }, Rr(t));
  }
  return s && (r.value = !0, jt && a()), $r(l), {
    isPending: wr(r),
    start: a,
    stop: l
  };
}
function Sl(e) {
  var t;
  const n = Rr(e);
  return (t = n?.$el) != null ? t : n;
}
const xl = jt ? window : void 0;
function Tl(...e) {
  let t, n, s, r;
  if (jf(e[0]) || Array.isArray(e[0]) ? ([n, s, r] = e, t = xl) : [t, n, s, r] = e, !t)
    return kf;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const i = [], o = () => {
    i.forEach((c) => c()), i.length = 0;
  }, l = (c, p, g, w) => (c.addEventListener(p, g, w), () => c.removeEventListener(p, g, w)), a = en(() => [Sl(t), Rr(r)], ([c, p]) => {
    o(), c && i.push(...n.flatMap((g) => s.map((w) => l(c, g, w, p))));
  }, { immediate: !0, flush: "post" }), d = () => {
    a(), o();
  };
  return $r(d), d;
}
function Kf(e, t = !1) {
  const n = ue(), s = () => n.value = !!e();
  return s(), Uf(s, t), n;
}
const Mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Di = "__vueuse_ssr_handlers__";
Mi[Di] = Mi[Di] || {};
var Ri = Object.getOwnPropertySymbols, Gf = Object.prototype.hasOwnProperty, qf = Object.prototype.propertyIsEnumerable, Jf = (e, t) => {
  var n = {};
  for (var s in e)
    Gf.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Ri)
    for (var s of Ri(e))
      t.indexOf(s) < 0 && qf.call(e, s) && (n[s] = e[s]);
  return n;
};
function Zf(e, t, n = {}) {
  const s = n, { window: r = xl } = s, i = Jf(s, ["window"]);
  let o;
  const l = Kf(() => r && "ResizeObserver" in r), a = () => {
    o && (o.disconnect(), o = void 0);
  }, d = en(() => Sl(e), (p) => {
    a(), l.value && r && p && (o = new ResizeObserver(t), o.observe(p, i));
  }, { immediate: !0, flush: "post" }), c = () => {
    a(), d();
  };
  return $r(c), {
    isSupported: l,
    stop: c
  };
}
var $i;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})($i || ($i = {}));
var Yf = Object.defineProperty, Li = Object.getOwnPropertySymbols, Qf = Object.prototype.hasOwnProperty, Xf = Object.prototype.propertyIsEnumerable, Fi = (e, t, n) => t in e ? Yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ed = (e, t) => {
  for (var n in t || (t = {}))
    Qf.call(t, n) && Fi(e, n, t[n]);
  if (Li)
    for (var n of Li(t))
      Xf.call(t, n) && Fi(e, n, t[n]);
  return e;
};
const td = {
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
ed({
  linear: Vf
}, td);
const zi = {
  current: 0
}, Hi = ue(0), Ol = 2e3, Wi = Symbol("elZIndexContextKey"), El = Symbol("zIndexContextKey"), nd = (e) => {
  const t = Ft() ? rt(Wi, zi) : zi, n = e || (Ft() ? rt(El, void 0) : void 0), s = G(() => {
    const o = x(n);
    return Ht(o) ? o : Ol;
  }), r = G(() => s.value + Hi.value), i = () => (t.current++, Hi.value = t.current, r.value);
  return !jt && rt(Wi), {
    initialZIndex: s,
    currentZIndex: r,
    nextZIndex: i
  };
};
var sd = {
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
const rd = (e) => (t, n) => id(t, n, x(e)), id = (e, t, n) => Hf(n, e, e).replace(/\{(\w+)\}/g, (s, r) => {
  var i;
  return `${(i = t?.[r]) != null ? i : `{${r}}`}`;
}), od = (e) => {
  const t = G(() => x(e).name), n = we(e) ? e : ue(e);
  return {
    lang: t,
    locale: n,
    t: rd(e)
  };
}, Il = Symbol("localeContextKey"), ld = (e) => {
  const t = e || rt(Il, ue());
  return od(G(() => t.value || sd));
}, Pl = "__epPropKey", gt = (e) => e, ad = (e) => ee(e) && !!e[Pl], Al = (e, t) => {
  if (!ee(e) || ad(e))
    return e;
  const { values: n, required: s, default: r, type: i, validator: o } = e, a = {
    type: i,
    required: !!s,
    validator: n || o ? (d) => {
      let c = !1, p = [];
      if (n && (p = Array.from(n), q(e, "default") && p.push(r), c || (c = p.includes(d))), o && (c || (c = o(d))), !c && p.length > 0) {
        const g = [...new Set(p)].map((w) => JSON.stringify(w)).join(", ");
        Lc(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(d)}.`);
      }
      return c;
    } : void 0,
    [Pl]: !0
  };
  return q(e, "default") && (a.default = r), a;
}, Fn = (e) => Wf(Object.entries(e).map(([t, n]) => [
  t,
  Al(n, t)
])), cd = ["", "default", "small", "large"], Lp = Al({
  type: String,
  values: cd,
  required: !1
}), ud = Symbol("size"), fd = Symbol("emptyValuesContextKey"), Fp = Fn({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => W(e) ? !e() : !e
  }
}), Bi = (e) => Object.keys(e), fs = ue();
function Nl(e, t = void 0) {
  return Ft() ? rt(hl, fs) : fs;
}
function Ml(e, t) {
  const n = Nl(), s = Pr(e, G(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Qn;
  })), r = ld(G(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), i = nd(G(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Ol;
  })), o = G(() => {
    var l;
    return x(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return dd(G(() => x(n) || {})), {
    ns: s,
    locale: r,
    zIndex: i,
    size: o
  };
}
const dd = (e, t, n = !1) => {
  var s;
  const r = !!Ft(), i = r ? Nl() : void 0, o = (s = void 0) != null ? s : r ? zo : void 0;
  if (!o)
    return;
  const l = G(() => {
    const a = x(e);
    return i?.value ? pd(i.value, a) : a;
  });
  return o(hl, l), o(Il, G(() => l.value.locale)), o(gl, G(() => l.value.namespace)), o(El, G(() => l.value.zIndex)), o(ud, {
    size: G(() => l.value.size || "")
  }), o(fd, G(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !fs.value) && (fs.value = l.value), l;
}, pd = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Bi(e), ...Bi(t)])], s = {};
  for (const r of n)
    s[r] = t[r] !== void 0 ? t[r] : e[r];
  return s;
};
var Ns = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
};
function cr(e, t = "px") {
  if (!e)
    return "";
  if (Ht(e) || Bf(e))
    return `${e}${t}`;
  if (ne(e))
    return e;
}
const Dl = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), Rl = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), hd = Fn({
  size: {
    type: gt([Number, String])
  },
  color: {
    type: String
  }
}), gd = /* @__PURE__ */ Ne({
  name: "ElIcon",
  inheritAttrs: !1
}), md = /* @__PURE__ */ Ne({
  ...gd,
  props: hd,
  setup(e) {
    const t = e, n = Pr("icon"), s = G(() => {
      const { size: r, color: i } = t;
      return !r && !i ? {} : {
        fontSize: wl(r) ? void 0 : cr(r),
        "--color": i
      };
    });
    return (r, i) => (Z(), he("i", nl({
      class: x(n).b(),
      style: x(s)
    }, r.$attrs), [
      Pn(r.$slots, "default")
    ], 16));
  }
});
var yd = /* @__PURE__ */ Ns(md, [["__file", "icon.vue"]]);
const ds = Dl(yd);
/*! Element Plus Icons Vue v2.3.1 */
var _d = /* @__PURE__ */ Ne({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (Z(), he("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), vd = _d, bd = /* @__PURE__ */ Ne({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (Z(), he("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), $l = bd, wd = /* @__PURE__ */ Ne({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (Z(), he("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Cd = wd, Sd = /* @__PURE__ */ Ne({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (Z(), he("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), xd = Sd, Td = /* @__PURE__ */ Ne({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (Z(), he("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Od = Td;
const Ll = gt([
  String,
  Object,
  Function
]), Ed = {
  Close: $l
}, Id = {
  Close: $l
}, ps = {
  success: xd,
  warning: Od,
  error: vd,
  info: Cd
}, Pd = (e) => e, Xn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ad = Fn({
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
    type: gt([String, Object, Array])
  },
  offset: {
    type: gt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Nd = /* @__PURE__ */ Ne({
  name: "ElBadge"
}), Md = /* @__PURE__ */ Ne({
  ...Nd,
  props: Ad,
  setup(e, { expose: t }) {
    const n = e, s = Pr("badge"), r = G(() => n.isDot ? "" : Ht(n.value) && Ht(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), i = G(() => {
      var o, l, a, d, c;
      return [
        {
          backgroundColor: n.color,
          marginRight: cr(-((l = (o = n.offset) == null ? void 0 : o[0]) != null ? l : 0)),
          marginTop: cr((d = (a = n.offset) == null ? void 0 : a[1]) != null ? d : 0)
        },
        (c = n.badgeStyle) != null ? c : {}
      ];
    });
    return t({
      content: r
    }), (o, l) => (Z(), he("div", {
      class: de(x(s).b())
    }, [
      Pn(o.$slots, "default"),
      ge(Ir, {
        name: `${x(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Ct(() => [
          nn(N("sup", {
            class: de([
              x(s).e("content"),
              x(s).em("content", o.type),
              x(s).is("fixed", !!o.$slots.default),
              x(s).is("dot", o.isDot),
              x(s).is("hide-zero", !o.showZero && n.value === 0),
              o.badgeClass
            ]),
            style: $t(x(i))
          }, [
            Pn(o.$slots, "content", { value: x(r) }, () => [
              Or(Se(x(r)), 1)
            ])
          ], 6), [
            [ls, !o.hidden && (x(r) || o.isDot || o.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Dd = /* @__PURE__ */ Ns(Md, [["__file", "badge.vue"]]);
const Rd = Dl(Dd), tt = {}, Fl = ["success", "info", "warning", "error"], Ce = Pd({
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
  appendTo: jt ? document.body : void 0
}), $d = Fn({
  customClass: {
    type: String,
    default: Ce.customClass
  },
  center: {
    type: Boolean,
    default: Ce.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ce.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ce.duration
  },
  icon: {
    type: Ll,
    default: Ce.icon
  },
  id: {
    type: String,
    default: Ce.id
  },
  message: {
    type: gt([
      String,
      Object,
      Function
    ]),
    default: Ce.message
  },
  onClose: {
    type: gt(Function),
    default: Ce.onClose
  },
  showClose: {
    type: Boolean,
    default: Ce.showClose
  },
  type: {
    type: String,
    values: Fl,
    default: Ce.type
  },
  plain: {
    type: Boolean,
    default: Ce.plain
  },
  offset: {
    type: Number,
    default: Ce.offset
  },
  zIndex: {
    type: Number,
    default: Ce.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ce.grouping
  },
  repeatNum: {
    type: Number,
    default: Ce.repeatNum
  }
}), Ld = {
  destroy: () => !0
}, Ve = mo([]), Fd = (e) => {
  const t = Ve.findIndex((r) => r.id === e), n = Ve[t];
  let s;
  return t > 0 && (s = Ve[t - 1]), { current: n, prev: s };
}, zd = (e) => {
  const { prev: t } = Fd(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Hd = (e, t) => Ve.findIndex((s) => s.id === e) > 0 ? 16 : t, Wd = /* @__PURE__ */ Ne({
  name: "ElMessage"
}), Bd = /* @__PURE__ */ Ne({
  ...Wd,
  props: $d,
  emits: Ld,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = Id, { ns: r, zIndex: i } = Ml("message"), { currentZIndex: o, nextZIndex: l } = i, a = ue(), d = ue(!1), c = ue(0);
    let p;
    const g = G(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = G(() => {
      const k = n.type;
      return { [r.bm("icon", k)]: k && ps[k] };
    }), R = G(() => n.icon || ps[n.type] || ""), C = G(() => zd(n.id)), L = G(() => Hd(n.id, n.offset) + C.value), D = G(() => c.value + L.value), U = G(() => ({
      top: `${L.value}px`,
      zIndex: o.value
    }));
    function A() {
      n.duration !== 0 && ({ stop: p } = Cl(() => {
        V();
      }, n.duration));
    }
    function I() {
      p?.();
    }
    function V() {
      d.value = !1;
    }
    function re({ code: k }) {
      k === Xn.esc && V();
    }
    return ln(() => {
      A(), l(), d.value = !0;
    }), en(() => n.repeatNum, () => {
      I(), A();
    }), Tl(document, "keydown", re), Zf(a, () => {
      c.value = a.value.getBoundingClientRect().height;
    }), t({
      visible: d,
      bottom: D,
      close: V
    }), (k, pe) => (Z(), He(Ir, {
      name: x(r).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (B) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: Ct(() => [
        nn(N("div", {
          id: k.id,
          ref_key: "messageRef",
          ref: a,
          class: de([
            x(r).b(),
            { [x(r).m(k.type)]: k.type },
            x(r).is("center", k.center),
            x(r).is("closable", k.showClose),
            x(r).is("plain", k.plain),
            k.customClass
          ]),
          style: $t(x(U)),
          role: "alert",
          onMouseenter: I,
          onMouseleave: A
        }, [
          k.repeatNum > 1 ? (Z(), He(x(Rd), {
            key: 0,
            value: k.repeatNum,
            type: x(g),
            class: de(x(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ht("v-if", !0),
          x(R) ? (Z(), He(x(ds), {
            key: 1,
            class: de([x(r).e("icon"), x(w)])
          }, {
            default: Ct(() => [
              (Z(), He(Do(x(R))))
            ]),
            _: 1
          }, 8, ["class"])) : ht("v-if", !0),
          Pn(k.$slots, "default", {}, () => [
            k.dangerouslyUseHTMLString ? (Z(), he(ye, { key: 1 }, [
              ht(" Caution here, message could've been compromised, never use user's input as message "),
              N("p", {
                class: de(x(r).e("content")),
                innerHTML: k.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (Z(), he("p", {
              key: 0,
              class: de(x(r).e("content"))
            }, Se(k.message), 3))
          ]),
          k.showClose ? (Z(), He(x(ds), {
            key: 2,
            class: de(x(r).e("closeBtn")),
            onClick: Cn(V, ["stop"])
          }, {
            default: Ct(() => [
              ge(x(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ht("v-if", !0)
        ], 46, ["id"]), [
          [ls, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var jd = /* @__PURE__ */ Ns(Bd, [["__file", "message.vue"]]);
let kd = 1;
const zl = (e) => {
  const t = !e || ne(e) || it(e) || W(e) ? { message: e } : e, n = {
    ...Ce,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ne(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    ar(s) || (s = document.body), n.appendTo = s;
  }
  return Ai(tt.grouping) && !n.grouping && (n.grouping = tt.grouping), Ht(tt.duration) && n.duration === 3e3 && (n.duration = tt.duration), Ht(tt.offset) && n.offset === 16 && (n.offset = tt.offset), Ai(tt.showClose) && !n.showClose && (n.showClose = tt.showClose), n;
}, Vd = (e) => {
  const t = Ve.indexOf(e);
  if (t === -1)
    return;
  Ve.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Ud = ({ appendTo: e, ...t }, n) => {
  const s = `message_${kd++}`, r = t.onClose, i = document.createElement("div"), o = {
    ...t,
    id: s,
    onClose: () => {
      r?.(), Vd(c);
    },
    onDestroy: () => {
      cs(null, i);
    }
  }, l = ge(jd, o, W(o.message) || it(o.message) ? {
    default: W(o.message) ? o.message : () => o.message
  } : null);
  l.appContext = n || rn._context, cs(l, i), e.appendChild(i.firstElementChild);
  const a = l.component, c = {
    id: s,
    vnode: l,
    vm: a,
    handler: {
      close: () => {
        a.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return c;
}, rn = (e = {}, t) => {
  if (!jt)
    return { close: () => {
    } };
  const n = zl(e);
  if (n.grouping && Ve.length) {
    const r = Ve.find(({ vnode: i }) => {
      var o;
      return ((o = i.props) == null ? void 0 : o.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (Ht(tt.max) && Ve.length >= tt.max)
    return { close: () => {
    } };
  const s = Ud(n, t);
  return Ve.push(s), s.handler;
};
Fl.forEach((e) => {
  rn[e] = (t = {}, n) => {
    const s = zl(t);
    return rn({ ...s, type: e }, n);
  };
});
function Kd(e) {
  for (const t of Ve)
    (!e || e === t.props.type) && t.handler.close();
}
rn.closeAll = Kd;
rn._context = null;
const Gd = Rl(rn, "$message"), Hl = [
  "success",
  "info",
  "warning",
  "error"
], qd = Fn({
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
    type: Ll
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: gt([
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
    type: gt(Function),
    default: () => {
    }
  },
  onClose: {
    type: gt(Function),
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
    values: [...Hl, ""],
    default: ""
  },
  zIndex: Number
}), Jd = {
  destroy: () => !0
}, Zd = /* @__PURE__ */ Ne({
  name: "ElNotification"
}), Yd = /* @__PURE__ */ Ne({
  ...Zd,
  props: qd,
  emits: Jd,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: r } = Ml("notification"), { nextZIndex: i, currentZIndex: o } = r, { Close: l } = Ed, a = ue(!1);
    let d;
    const c = G(() => {
      const A = n.type;
      return A && ps[n.type] ? s.m(A) : "";
    }), p = G(() => n.type && ps[n.type] || n.icon), g = G(() => n.position.endsWith("right") ? "right" : "left"), w = G(() => n.position.startsWith("top") ? "top" : "bottom"), R = G(() => {
      var A;
      return {
        [w.value]: `${n.offset}px`,
        zIndex: (A = n.zIndex) != null ? A : o.value
      };
    });
    function C() {
      n.duration > 0 && ({ stop: d } = Cl(() => {
        a.value && D();
      }, n.duration));
    }
    function L() {
      d?.();
    }
    function D() {
      a.value = !1;
    }
    function U({ code: A }) {
      A === Xn.delete || A === Xn.backspace ? L() : A === Xn.esc ? a.value && D() : C();
    }
    return ln(() => {
      C(), i(), a.value = !0;
    }), Tl(document, "keydown", U), t({
      visible: a,
      close: D
    }), (A, I) => (Z(), He(Ir, {
      name: x(s).b("fade"),
      onBeforeLeave: A.onClose,
      onAfterLeave: (V) => A.$emit("destroy"),
      persisted: ""
    }, {
      default: Ct(() => [
        nn(N("div", {
          id: A.id,
          class: de([x(s).b(), A.customClass, x(g)]),
          style: $t(x(R)),
          role: "alert",
          onMouseenter: L,
          onMouseleave: C,
          onClick: A.onClick
        }, [
          x(p) ? (Z(), He(x(ds), {
            key: 0,
            class: de([x(s).e("icon"), x(c)])
          }, {
            default: Ct(() => [
              (Z(), He(Do(x(p))))
            ]),
            _: 1
          }, 8, ["class"])) : ht("v-if", !0),
          N("div", {
            class: de(x(s).e("group"))
          }, [
            N("h2", {
              class: de(x(s).e("title")),
              textContent: Se(A.title)
            }, null, 10, ["textContent"]),
            nn(N("div", {
              class: de(x(s).e("content")),
              style: $t(A.title ? void 0 : { margin: 0 })
            }, [
              Pn(A.$slots, "default", {}, () => [
                A.dangerouslyUseHTMLString ? (Z(), he(ye, { key: 1 }, [
                  ht(" Caution here, message could've been compromised, never use user's input as message "),
                  N("p", { innerHTML: A.message }, null, 8, ["innerHTML"])
                ], 2112)) : (Z(), he("p", { key: 0 }, Se(A.message), 1))
              ])
            ], 6), [
              [ls, A.message]
            ]),
            A.showClose ? (Z(), He(x(ds), {
              key: 0,
              class: de(x(s).e("closeBtn")),
              onClick: Cn(D, ["stop"])
            }, {
              default: Ct(() => [
                ge(x(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ht("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [ls, a.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Qd = /* @__PURE__ */ Ns(Yd, [["__file", "notification.vue"]]);
const hs = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ur = 16;
let Xd = 1;
const on = function(e = {}, t) {
  if (!jt)
    return { close: () => {
    } };
  (ne(e) || it(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  hs[n].forEach(({ vm: c }) => {
    var p;
    s += (((p = c.el) == null ? void 0 : p.offsetHeight) || 0) + ur;
  }), s += ur;
  const r = `notification_${Xd++}`, i = e.onClose, o = {
    ...e,
    offset: s,
    id: r,
    onClose: () => {
      ep(r, n, i);
    }
  };
  let l = document.body;
  ar(e.appendTo) ? l = e.appendTo : ne(e.appendTo) && (l = document.querySelector(e.appendTo)), ar(l) || (l = document.body);
  const a = document.createElement("div"), d = ge(Qd, o, W(o.message) ? o.message : it(o.message) ? () => o.message : null);
  return d.appContext = wl(t) ? on._context : t, d.props.onDestroy = () => {
    cs(null, a);
  }, cs(d, a), hs[n].push({ vm: d }), l.appendChild(a.firstElementChild), {
    close: () => {
      d.component.exposed.visible.value = !1;
    }
  };
};
Hl.forEach((e) => {
  on[e] = (t = {}, n) => ((ne(t) || it(t)) && (t = {
    message: t
  }), on({ ...t, type: e }, n));
});
function ep(e, t, n) {
  const s = hs[t], r = s.findIndex(({ vm: d }) => {
    var c;
    return ((c = d.component) == null ? void 0 : c.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: i } = s[r];
  if (!i)
    return;
  n?.(i);
  const o = i.el.offsetHeight, l = t.split("-")[0];
  s.splice(r, 1);
  const a = s.length;
  if (!(a < 1))
    for (let d = r; d < a; d++) {
      const { el: c, component: p } = s[d].vm, g = Number.parseInt(c.style[l], 10) - o - ur;
      p.props.offset = g;
    }
}
function tp() {
  for (const e of Object.values(hs))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
on.closeAll = tp;
on._context = null;
const np = Rl(on, "$notify"), qs = {
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
      duration: r = 3e3,
      showClose: i = !1
    } = e;
    s === "center" ? Gd({
      message: t,
      type: n,
      duration: r,
      showClose: i,
      grouping: !0
    }) : np({
      message: t,
      type: n,
      position: s,
      duration: r,
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
}, sp = () => _("screen_recorder_get_ffmpeg_status"), kn = (e) => _("screen_recorder_set_capture_excluded", { excluded: e }), Vn = (e) => _("screen_recorder_set_passthrough_region", { region: e }), rp = () => _("screen_recorder_pick_target_window"), ip = () => _("screen_recorder_close_window"), op = (e, t) => _("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio
}), lp = () => _("screen_recorder_pause_recording"), ap = (e, t) => _("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio
}), cp = () => _("screen_recorder_stop_recording"), up = () => _("screen_recorder_cancel_recording"), fp = (e) => _("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), ji = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
});
function dp() {
  const e = ue("selecting"), t = ue(ji()), n = ue(null), s = ue(null), r = ue(""), i = ue(null), o = ue(0), l = ue(0), a = ue(null), d = () => {
    l.value = e.value === "recording" && i.value !== null ? o.value + Date.now() - i.value : o.value;
  }, c = () => {
    a.value !== null && (window.clearInterval(a.value), a.value = null);
  }, p = () => {
    c(), d(), a.value = window.setInterval(() => {
      d();
    }, 250);
  }, g = async () => (n.value = await sp(), n.value), w = async (I) => {
    r.value = "", s.value = null;
    const V = n.value ?? await g();
    if (!V.available)
      throw new Error(V.message || "FFmpeg unavailable");
    await op(I, t.value), e.value = "recording", o.value = 0, l.value = 0, i.value = Date.now(), p();
  }, R = async () => {
    e.value === "recording" && (d(), o.value = l.value, i.value = null, c(), await lp(), e.value = "paused");
  }, C = async (I) => {
    e.value === "paused" && (await ap(I, t.value), e.value = "recording", i.value = Date.now(), p());
  }, L = async () => {
    e.value !== "recording" && e.value !== "paused" || (d(), o.value = l.value, i.value = null, c(), await cp(), e.value = "exporting");
  }, D = async () => (e.value = "exporting", s.value = await fp(t.value), e.value = "completed", s.value), U = async () => {
    c(), await up(), e.value = "selecting", i.value = null, o.value = 0, l.value = 0, s.value = null;
  }, A = () => {
    e.value = "selecting", i.value = null, o.value = 0, l.value = 0, s.value = null, r.value = "", t.value = ji();
  };
  return Ts(() => {
    c();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: r,
    elapsedMs: l,
    refreshFfmpegStatus: g,
    begin: w,
    pause: R,
    resume: C,
    stop: L,
    exportFile: D,
    cancel: U,
    reset: A
  };
}
const pp = { class: "screen-recorder" }, hp = ["onMousedown"], gp = { class: "window-title" }, mp = { class: "capture-viewport" }, yp = { class: "capture-frame" }, _p = { class: "control-strip" }, vp = ["disabled"], bp = ["disabled"], wp = { class: "dimension" }, Cp = ["value"], Sp = { class: "dimension" }, xp = ["value"], Tp = { class: "time" }, Op = {
  key: 2,
  class: "save-status"
}, Ep = ["title"], Ip = ["disabled"], Pp = {
  key: 0,
  class: "warning"
}, Un = 80, Ap = 468, Np = 300, ki = 468, Vi = 260, Ui = 38, Mp = 56, Kn = 8, Gn = 1, Dp = /* @__PURE__ */ Ne({
  __name: "index",
  setup(e) {
    const t = dl(), n = ue(null), s = ue({ width: 0, height: 0 });
    let r = null, i = null;
    const o = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: l,
      settings: a,
      ffmpegStatus: d,
      result: c,
      elapsedMs: p,
      refreshFfmpegStatus: g,
      begin: w,
      pause: R,
      resume: C,
      stop: L,
      exportFile: D,
      cancel: U,
      reset: A
    } = dp(), I = G(() => l.value === "recording" || l.value === "paused" || l.value === "exporting"), V = G(() => {
      const H = Math.floor(p.value / 1e3), M = Math.floor(H / 60).toString().padStart(2, "0"), Q = (H % 60).toString().padStart(2, "0");
      return `${M}:${Q}`;
    }), re = async (H) => {
      try {
        await H();
      } catch (M) {
        qs.msg(M?.message || String(M), "error");
      }
    }, k = (H) => Math.max(2, Math.floor(Math.round(H) / 2) * 2), pe = async () => {
      const H = n.value;
      if (!H)
        throw new Error("录制视口尚未准备好");
      const M = H.getBoundingClientRect(), Q = await t.scaleFactor(), Je = await t.innerPosition(), at = k(M.width * Q), kt = k(M.height * Q);
      if (at < Un || kt < Un)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: M.left,
        y: M.top,
        width: at / Q,
        height: kt / Q,
        screenX: Math.round(Je.x + M.left * Q),
        screenY: Math.round(Je.y + M.top * Q),
        physicalWidth: at,
        physicalHeight: kt,
        scale: Q
      };
    }, B = async () => {
      try {
        const H = await pe();
        s.value = {
          width: H.physicalWidth,
          height: H.physicalHeight
        }, await Vn({
          x: Math.round(H.x * H.scale),
          y: Math.round(H.y * H.scale),
          width: H.physicalWidth,
          height: H.physicalHeight
        }).catch(() => {
        });
      } catch {
        s.value = { width: 0, height: 0 }, await Vn(null).catch(() => {
        });
      }
    }, Y = async (H) => {
      H.button !== 0 || I.value || await t.startDragging().catch((M) => {
        qs.msg(M?.message || String(M), "error");
      });
    }, ae = async (H) => {
      I.value || await t.startResizeDragging(H).catch((M) => {
        qs.msg(M?.message || String(M), "error");
      });
    }, P = () => re(async () => {
      await kn(!0).catch(() => {
      }), await B(), await w(await pe());
    }), ie = () => re(R), me = () => re(async () => {
      await C(await pe());
    }), ke = () => re(async () => {
      await L(), await D();
    }), fe = () => {
      A(), l.value = "ready", c.value = null, t.setSize(new Sn(Ap, Np)), Yt(B);
    }, ce = async (H) => {
      const Q = (await vu(H.screenX, H.screenY))?.scaleFactor || await t.scaleFactor(), Je = Math.max(
        ki,
        H.physicalWidth / Q + Kn * 2 + Gn * 2
      ), at = Math.max(
        Vi,
        H.physicalHeight / Q + Ui + Mp + Kn * 2 + Gn * 2
      );
      await t.setPosition(new st(
        Math.round(H.screenX - (Kn + Gn) * Q),
        Math.round(H.screenY - (Ui + Kn + Gn) * Q)
      )), await t.setSize(new Sn(Math.round(Je), Math.round(at))), await Yt(), await B();
    }, te = () => re(async () => {
      const H = await rp();
      await ce(H);
    }), ot = async () => {
      await t.minimize();
    }, Ot = async () => {
      try {
        await U(), await Vn(null).catch(() => {
        }), await kn(!1).catch(() => {
        });
      } catch {
      }
      await ip();
    }, lt = async () => {
      c.value && await _("open_file_with_default_app", { filePath: c.value.path });
    }, Fe = async () => {
      c.value && await _("show_file_in_folder", { filePath: c.value.path });
    }, cn = (H) => {
      H.key === "Escape" && (H.preventDefault(), Ot());
    };
    return ln(async () => {
      l.value = "ready", await t.setMinSize(new Sn(ki, Vi)).catch(() => {
      }), await kn(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await g().catch(() => {
      }), await Yt(), await B(), n.value && (r = new ResizeObserver(() => {
        B();
      }), r.observe(n.value)), i = await t.onMoved(() => {
        B();
      }).catch(() => null), window.addEventListener("resize", B), window.addEventListener("keydown", cn);
    }), Ts(() => {
      r?.disconnect(), i?.(), window.removeEventListener("resize", B), window.removeEventListener("keydown", cn), Vn(null).catch(() => {
      }), kn(!1).catch(() => {
      });
    }), (H, M) => (Z(), he("div", pp, [
      N(
        "div",
        {
          class: de(["recorder-shell", { recording: x(l) === "recording", paused: x(l) === "paused" }])
        },
        [
          (Z(), he(
            ye,
            null,
            Ga(o, (Q) => N("span", {
              key: Q.className,
              class: de(["resize-zone", Q.className]),
              onMousedown: Cn((Je) => ae(Q.direction), ["prevent"])
            }, null, 42, hp)),
            64
            /* STABLE_FRAGMENT */
          )),
          N(
            "header",
            {
              class: "title-bar",
              onMousedown: Y
            },
            [
              N(
                "span",
                gp,
                Se(H.$t("screenRecorder.title") || "自定义录屏"),
                1
                /* TEXT */
              ),
              N(
                "div",
                {
                  class: "window-actions",
                  onMousedown: M[0] || (M[0] = Cn(() => {
                  }, ["stop"]))
                },
                [
                  N("button", {
                    class: "title-button",
                    title: "最小化",
                    onClick: ot
                  }, "_"),
                  N("button", {
                    class: "title-button close",
                    title: "关闭",
                    onClick: Ot
                  }, "×")
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            32
            /* NEED_HYDRATION */
          ),
          N("main", mp, [
            M[8] || (M[8] = N(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            M[9] || (M[9] = N(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            M[10] || (M[10] = N(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            M[11] || (M[11] = N(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            N("div", yp, [
              N(
                "div",
                {
                  ref_key: "captureHoleRef",
                  ref: n,
                  class: "capture-hole"
                },
                null,
                512
                /* NEED_PATCH */
              ),
              M[4] || (M[4] = N(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              M[5] || (M[5] = N(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              M[6] || (M[6] = N(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              M[7] || (M[7] = N(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          N("footer", _p, [
            N(
              "span",
              {
                class: de(["status-dot", { active: x(l) === "recording", paused: x(l) === "paused" }])
              },
              null,
              2
              /* CLASS */
            ),
            nn(N("select", {
              "onUpdate:modelValue": M[1] || (M[1] = (Q) => x(a).fps = Q),
              disabled: I.value
            }, M[12] || (M[12] = [
              N(
                "option",
                { value: 15 },
                "15",
                -1
                /* HOISTED */
              ),
              N(
                "option",
                { value: 24 },
                "24",
                -1
                /* HOISTED */
              ),
              N(
                "option",
                { value: 30 },
                "30",
                -1
                /* HOISTED */
              ),
              N(
                "option",
                { value: 60 },
                "60",
                -1
                /* HOISTED */
              )
            ]), 8, vp), [
              [vi, x(a).fps]
            ]),
            M[15] || (M[15] = N(
              "span",
              { class: "unit" },
              "fps",
              -1
              /* HOISTED */
            )),
            nn(N("select", {
              "onUpdate:modelValue": M[2] || (M[2] = (Q) => x(a).format = Q),
              disabled: I.value
            }, M[13] || (M[13] = [
              N(
                "option",
                { value: "mp4" },
                "MP4",
                -1
                /* HOISTED */
              ),
              N(
                "option",
                { value: "gif" },
                "GIF",
                -1
                /* HOISTED */
              )
            ]), 8, bp), [
              [vi, x(a).format]
            ]),
            N("label", wp, [
              N("input", {
                value: s.value.width,
                readonly: ""
              }, null, 8, Cp)
            ]),
            M[16] || (M[16] = N(
              "span",
              { class: "multiply" },
              "×",
              -1
              /* HOISTED */
            )),
            N("label", Sp, [
              N("input", {
                value: s.value.height,
                readonly: ""
              }, null, 8, xp)
            ]),
            M[17] || (M[17] = N(
              "span",
              { class: "unit" },
              "px",
              -1
              /* HOISTED */
            )),
            x(l) === "ready" || x(l) === "completed" ? (Z(), he(
              "button",
              {
                key: 0,
                class: "icon-control",
                title: "拖到目标窗口并松开以对齐",
                onMousedown: Cn(te, ["prevent"])
              },
              " ◎ ",
              32
              /* NEED_HYDRATION */
            )) : ht("v-if", !0),
            x(l) === "recording" || x(l) === "paused" ? (Z(), he(
              ye,
              { key: 1 },
              [
                N(
                  "span",
                  Tp,
                  Se(V.value),
                  1
                  /* TEXT */
                ),
                N(
                  "button",
                  {
                    class: "control-button",
                    onClick: M[3] || (M[3] = (Q) => x(l) === "paused" ? me() : ie())
                  },
                  Se(x(l) === "paused" ? H.$t("screenRecorder.resume") : H.$t("screenRecorder.pause")),
                  1
                  /* TEXT */
                ),
                N(
                  "button",
                  {
                    class: "control-button danger",
                    onClick: ke
                  },
                  Se(H.$t("screenRecorder.stop")),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : x(l) === "exporting" ? (Z(), he(
              "span",
              Op,
              Se(H.$t("screenRecorder.exporting") || "正在导出..."),
              1
              /* TEXT */
            )) : x(l) === "completed" && x(c) ? (Z(), he(
              ye,
              { key: 3 },
              [
                N("span", {
                  class: "save-status",
                  title: x(c).path
                }, Se(H.$t("screenRecorder.exportDone") || "已保存"), 9, Ep),
                N(
                  "button",
                  {
                    class: "control-button",
                    onClick: lt
                  },
                  Se(H.$t("screenRecorder.openFile") || "打开"),
                  1
                  /* TEXT */
                ),
                N(
                  "button",
                  {
                    class: "control-button",
                    onClick: Fe
                  },
                  Se(H.$t("screenRecorder.openFolder") || "定位"),
                  1
                  /* TEXT */
                ),
                N(
                  "button",
                  {
                    class: "control-button",
                    onClick: fe
                  },
                  Se(H.$t("screenRecorder.recordAgain") || "重录"),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (Z(), he("button", {
              key: 4,
              class: "record-button",
              disabled: x(d)?.available === !1 || s.value.width < Un || s.value.height < Un,
              onClick: P
            }, [
              M[14] || (M[14] = N(
                "span",
                null,
                null,
                -1
                /* HOISTED */
              )),
              Or(
                " " + Se(H.$t("screenRecorder.start")),
                1
                /* TEXT */
              )
            ], 8, Ip))
          ])
        ],
        2
        /* CLASS */
      ),
      x(d) && !x(d).available ? (Z(), he(
        "p",
        Pp,
        Se(x(d).message || H.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : ht("v-if", !0)
    ]));
  }
}), Rp = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, zp = /* @__PURE__ */ Rp(Dp, [["__scopeId", "data-v-4939f0a7"]]);
export {
  zp as default
};
