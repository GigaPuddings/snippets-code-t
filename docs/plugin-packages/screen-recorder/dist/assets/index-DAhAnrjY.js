/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function En(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const re = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, fn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ee = () => {
}, Ba = () => !1, Xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ts = (e) => e.startsWith("onUpdate:"), pe = Object.assign, qo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ua = Object.prototype.hasOwnProperty, J = (e, t) => Ua.call(e, t), A = Array.isArray, Ut = (e) => es(e) === "[object Map]", Js = (e) => es(e) === "[object Set]", Cr = (e) => es(e) === "[object Date]", L = (e) => typeof e == "function", te = (e) => typeof e == "string", Xe = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", Jo = (e) => (X(e) || L(e)) && L(e.then) && L(e.catch), ki = Object.prototype.toString, es = (e) => ki.call(e), Yo = (e) => es(e).slice(8, -1), zi = (e) => es(e) === "[object Object]", Zo = (e) => te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Rn = /* @__PURE__ */ En(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ka = /* @__PURE__ */ En(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ys = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ga = /-(\w)/g, Ae = Ys(
  (e) => e.replace(Ga, (t, n) => n ? n.toUpperCase() : "")
), qa = /\B([A-Z])/g, Pt = Ys(
  (e) => e.replace(qa, "-$1").toLowerCase()
), Yt = Ys((e) => e.charAt(0).toUpperCase() + e.slice(1)), zt = Ys(
  (e) => e ? `on${Yt(e)}` : ""
), It = (e, t) => !Object.is(e, t), cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Vs = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Wi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ja = (e) => {
  const t = te(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Dr;
const ts = () => Dr || (Dr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Zt(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = te(s) ? Xa(s) : Zt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (te(e) || X(e))
    return e;
}
const Ya = /;(?![^(]*\))/g, Za = /:([^]+)/, Qa = /\/\*[^]*?\*\//g;
function Xa(e) {
  const t = {};
  return e.replace(Qa, "").split(Ya).forEach((n) => {
    if (n) {
      const s = n.split(Za);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ve(e) {
  let t = "";
  if (te(e))
    t = e;
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const s = ve(e[n]);
      s && (t += s + " ");
    }
  else if (X(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ec = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tc = /* @__PURE__ */ En(ec);
function Bi(e) {
  return !!e || e === "";
}
function nc(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Zs(e[s], t[s]);
  return n;
}
function Zs(e, t) {
  if (e === t) return !0;
  let n = Cr(e), s = Cr(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Xe(e), s = Xe(t), n || s)
    return e === t;
  if (n = A(e), s = A(t), n || s)
    return n && s ? nc(e, t) : !1;
  if (n = X(e), s = X(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !Zs(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function sc(e, t) {
  return e.findIndex((n) => Zs(n, t));
}
const Ui = (e) => !!(e && e.__v_isRef === !0), Se = (e) => te(e) ? e : e == null ? "" : A(e) || X(e) && (e.toString === ki || !L(e.toString)) ? Ui(e) ? Se(e.value) : JSON.stringify(e, Ki, 2) : String(e), Ki = (e, t) => Ui(t) ? Ki(e, t.value) : Ut(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[uo(s, r) + " =>"] = o, n),
    {}
  )
} : Js(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => uo(n))
} : Xe(t) ? uo(t) : X(t) && !A(t) && !zi(t) ? String(t) : t, uo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function et(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let $e;
class oc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = $e, !t && $e && (this.index = ($e.scopes || ($e.scopes = [])).push(
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
      const n = $e;
      try {
        return $e = this, t();
      } finally {
        $e = n;
      }
    } else process.env.NODE_ENV !== "production" && et("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    $e = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    $e = this.parent;
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Gi() {
  return $e;
}
function rc(e, t = !1) {
  $e ? $e.cleanups.push(e) : process.env.NODE_ENV !== "production" && !t && et(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let oe;
const fo = /* @__PURE__ */ new WeakSet();
class qi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, $e && $e.active && $e.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fo.has(this) && (fo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Yi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xr(this), Zi(this);
    const t = oe, n = Qe;
    oe = this, Qe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && oe !== this && et(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Qi(this), oe = t, Qe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        er(t);
      this.deps = this.depsTail = void 0, xr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    So(this) && this.run();
  }
  get dirty() {
    return So(this);
  }
}
let Ji = 0, Fn, Ln;
function Yi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ln, Ln = e;
    return;
  }
  e.next = Fn, Fn = e;
}
function Qo() {
  Ji++;
}
function Xo() {
  if (--Ji > 0)
    return;
  if (Ln) {
    let t = Ln;
    for (Ln = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Fn; ) {
    let t = Fn;
    for (Fn = void 0; t; ) {
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
function Zi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Qi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), er(s), ic(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function So(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wn))
    return;
  e.globalVersion = Wn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !So(e)) {
    e.flags &= -3;
    return;
  }
  const n = oe, s = Qe;
  oe = e, Qe = !0;
  try {
    Zi(e);
    const o = e.fn(e._value);
    (t.version === 0 || It(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    oe = n, Qe = s, Qi(e), e.flags &= -3;
  }
}
function er(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      er(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ic(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Qe = !0;
const el = [];
function Et() {
  el.push(Qe), Qe = !1;
}
function Nt() {
  const e = el.pop();
  Qe = e === void 0 ? !0 : e;
}
function xr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = oe;
    oe = void 0;
    try {
      t();
    } finally {
      oe = n;
    }
  }
}
let Wn = 0;
class lc {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class tr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!oe || !Qe || oe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== oe)
      n = this.activeLink = new lc(oe, this), oe.deps ? (n.prevDep = oe.depsTail, oe.depsTail.nextDep = n, oe.depsTail = n) : oe.deps = oe.depsTail = n, tl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = oe.depsTail, n.nextDep = void 0, oe.depsTail.nextDep = n, oe.depsTail = n, oe.deps === n && (oe.deps = s);
    }
    return process.env.NODE_ENV !== "production" && oe.onTrack && oe.onTrack(
      pe(
        {
          effect: oe
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Wn++, this.notify(t);
  }
  notify(t) {
    Qo();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            pe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Xo();
    }
  }
}
function tl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        tl(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const To = /* @__PURE__ */ new WeakMap(), Kt = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Vo = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Bn = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function be(e, t, n) {
  if (Qe && oe) {
    let s = To.get(e);
    s || To.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new tr()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function ut(e, t, n, s, o, r) {
  const i = To.get(e);
  if (!i) {
    Wn++;
    return;
  }
  const l = (a) => {
    a && (process.env.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : a.trigger());
  };
  if (Qo(), t === "clear")
    i.forEach(l);
  else {
    const a = A(e), d = a && Zo(n);
    if (a && n === "length") {
      const u = Number(s);
      i.forEach((f, h) => {
        (h === "length" || h === Bn || !Xe(h) && h >= u) && l(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(Bn)), t) {
        case "add":
          a ? d && l(i.get("length")) : (l(i.get(Kt)), Ut(e) && l(i.get(Vo)));
          break;
        case "delete":
          a || (l(i.get(Kt)), Ut(e) && l(i.get(Vo)));
          break;
        case "set":
          Ut(e) && l(i.get(Kt));
          break;
      }
  }
  Xo();
}
function on(e) {
  const t = U(e);
  return t === e ? t : (be(t, "iterate", Bn), Me(e) ? t : t.map(Te));
}
function Qs(e) {
  return be(e = U(e), "iterate", Bn), e;
}
const ac = {
  __proto__: null,
  [Symbol.iterator]() {
    return po(this, Symbol.iterator, Te);
  },
  concat(...e) {
    return on(this).concat(
      ...e.map((t) => A(t) ? on(t) : t)
    );
  },
  entries() {
    return po(this, "entries", (e) => (e[1] = Te(e[1]), e));
  },
  every(e, t) {
    return gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return gt(this, "filter", e, t, (n) => n.map(Te), arguments);
  },
  find(e, t) {
    return gt(this, "find", e, t, Te, arguments);
  },
  findIndex(e, t) {
    return gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return gt(this, "findLast", e, t, Te, arguments);
  },
  findLastIndex(e, t) {
    return gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ho(this, "includes", e);
  },
  indexOf(...e) {
    return ho(this, "indexOf", e);
  },
  join(e) {
    return on(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ho(this, "lastIndexOf", e);
  },
  map(e, t) {
    return gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Tn(this, "pop");
  },
  push(...e) {
    return Tn(this, "push", e);
  },
  reduce(e, ...t) {
    return Sr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Sr(this, "reduceRight", e, t);
  },
  shift() {
    return Tn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Tn(this, "splice", e);
  },
  toReversed() {
    return on(this).toReversed();
  },
  toSorted(e) {
    return on(this).toSorted(e);
  },
  toSpliced(...e) {
    return on(this).toSpliced(...e);
  },
  unshift(...e) {
    return Tn(this, "unshift", e);
  },
  values() {
    return po(this, "values", Te);
  }
};
function po(e, t, n) {
  const s = Qs(e), o = s[t]();
  return s !== e && !Me(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const cc = Array.prototype;
function gt(e, t, n, s, o, r) {
  const i = Qs(e), l = i !== e && !Me(e), a = i[t];
  if (a !== cc[t]) {
    const f = a.apply(e, r);
    return l ? Te(f) : f;
  }
  let d = n;
  i !== e && (l ? d = function(f, h) {
    return n.call(this, Te(f), h, e);
  } : n.length > 2 && (d = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const u = a.call(i, d, s);
  return l && o ? o(u) : u;
}
function Sr(e, t, n, s) {
  const o = Qs(e);
  let r = n;
  return o !== e && (Me(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, Te(l), a, e);
  }), o[t](r, ...s);
}
function ho(e, t, n) {
  const s = U(e);
  be(s, "iterate", Bn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Is(n[0]) ? (n[0] = U(n[0]), s[t](...n)) : o;
}
function Tn(e, t, n = []) {
  Et(), Qo();
  const s = U(e)[t].apply(e, n);
  return Xo(), Nt(), s;
}
const uc = /* @__PURE__ */ En("__proto__,__v_isRef,__isVue"), nl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xe)
);
function fc(e) {
  Xe(e) || (e = String(e));
  const t = U(this);
  return be(t, "has", e), t.hasOwnProperty(e);
}
class sl {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? cl : al : r ? ll : il).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = A(t);
    if (!o) {
      let a;
      if (i && (a = ac[n]))
        return a;
      if (n === "hasOwnProperty")
        return fc;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ge(t) ? t : s
    );
    return (Xe(n) ? nl.has(n) : uc(n)) || (o || be(t, "get", n), r) ? l : ge(l) ? i && Zo(n) ? l : l.value : X(l) ? o ? sr(l) : nr(l) : l;
  }
}
class ol extends sl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = wt(r);
      if (!Me(s) && !wt(s) && (r = U(r), s = U(s)), !A(t) && ge(r) && !ge(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = A(t) && Zo(n) ? Number(n) < t.length : J(t, n), l = Reflect.set(
      t,
      n,
      s,
      ge(t) ? t : o
    );
    return t === U(o) && (i ? It(s, r) && ut(t, "set", n, s, r) : ut(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = J(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && ut(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Xe(n) || !nl.has(n)) && be(t, "has", n), s;
  }
  ownKeys(t) {
    return be(
      t,
      "iterate",
      A(t) ? "length" : Kt
    ), Reflect.ownKeys(t);
  }
}
class rl extends sl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && et(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && et(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const dc = /* @__PURE__ */ new ol(), pc = /* @__PURE__ */ new rl(), hc = /* @__PURE__ */ new ol(!0), gc = /* @__PURE__ */ new rl(!0), Io = (e) => e, cs = (e) => Reflect.getPrototypeOf(e);
function vc(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = U(o), i = Ut(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, d = o[e](...s), u = n ? Io : t ? $o : Te;
    return !t && be(
      r,
      "iterate",
      a ? Vo : Kt
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = d.next();
        return h ? { value: f, done: h } : {
          value: l ? [u(f[0]), u(f[1])] : u(f),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function us(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      et(
        `${Yt(e)} operation ${n}failed: target is readonly.`,
        U(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function mc(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = U(r), l = U(o);
      e || (It(o, l) && be(i, "get", o), be(i, "get", l));
      const { has: a } = cs(i), d = t ? Io : e ? $o : Te;
      if (a.call(i, o))
        return d(r.get(o));
      if (a.call(i, l))
        return d(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && be(U(o), "iterate", Kt), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = U(r), l = U(o);
      return e || (It(o, l) && be(i, "has", o), be(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = U(l), d = t ? Io : e ? $o : Te;
      return !e && be(a, "iterate", Kt), l.forEach((u, f) => o.call(r, d(u), d(f), i));
    }
  };
  return pe(
    n,
    e ? {
      add: us("add"),
      set: us("set"),
      delete: us("delete"),
      clear: us("clear")
    } : {
      add(o) {
        !t && !Me(o) && !wt(o) && (o = U(o));
        const r = U(this);
        return cs(r).has.call(r, o) || (r.add(o), ut(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !Me(r) && !wt(r) && (r = U(r));
        const i = U(this), { has: l, get: a } = cs(i);
        let d = l.call(i, o);
        d ? process.env.NODE_ENV !== "production" && Tr(i, l, o) : (o = U(o), d = l.call(i, o));
        const u = a.call(i, o);
        return i.set(o, r), d ? It(r, u) && ut(i, "set", o, r, u) : ut(i, "add", o, r), this;
      },
      delete(o) {
        const r = U(this), { has: i, get: l } = cs(r);
        let a = i.call(r, o);
        a ? process.env.NODE_ENV !== "production" && Tr(r, i, o) : (o = U(o), a = i.call(r, o));
        const d = l ? l.call(r, o) : void 0, u = r.delete(o);
        return a && ut(r, "delete", o, void 0, d), u;
      },
      clear() {
        const o = U(this), r = o.size !== 0, i = process.env.NODE_ENV !== "production" ? Ut(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return r && ut(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = vc(o, e, t);
  }), n;
}
function Xs(e, t) {
  const n = mc(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    J(n, o) && o in s ? n : s,
    o,
    r
  );
}
const _c = {
  get: /* @__PURE__ */ Xs(!1, !1)
}, yc = {
  get: /* @__PURE__ */ Xs(!1, !0)
}, bc = {
  get: /* @__PURE__ */ Xs(!0, !1)
}, wc = {
  get: /* @__PURE__ */ Xs(!0, !0)
};
function Tr(e, t, n) {
  const s = U(n);
  if (s !== n && t.call(e, s)) {
    const o = Yo(e);
    et(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const il = /* @__PURE__ */ new WeakMap(), ll = /* @__PURE__ */ new WeakMap(), al = /* @__PURE__ */ new WeakMap(), cl = /* @__PURE__ */ new WeakMap();
function Ec(e) {
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
function Nc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ec(Yo(e));
}
function nr(e) {
  return wt(e) ? e : eo(
    e,
    !1,
    dc,
    _c,
    il
  );
}
function ul(e) {
  return eo(
    e,
    !1,
    hc,
    yc,
    ll
  );
}
function sr(e) {
  return eo(
    e,
    !0,
    pc,
    bc,
    al
  );
}
function ft(e) {
  return eo(
    e,
    !0,
    gc,
    wc,
    cl
  );
}
function eo(e, t, n, s, o) {
  if (!X(e))
    return process.env.NODE_ENV !== "production" && et(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const i = Nc(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
function Gt(e) {
  return wt(e) ? Gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wt(e) {
  return !!(e && e.__v_isReadonly);
}
function Me(e) {
  return !!(e && e.__v_isShallow);
}
function Is(e) {
  return e ? !!e.__v_raw : !1;
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function Oc(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && Vs(e, "__v_skip", !0), e;
}
const Te = (e) => X(e) ? nr(e) : e, $o = (e) => X(e) ? sr(e) : e;
function ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function de(e) {
  return Cc(e, !1);
}
function Cc(e, t) {
  return ge(e) ? e : new Dc(e, t);
}
class Dc {
  constructor(t, n) {
    this.dep = new tr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : U(t), this._value = n ? t : Te(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Me(t) || wt(t);
    t = s ? t : U(t), It(t, n) && (this._rawValue = t, this._value = s ? t : Te(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function x(e) {
  return ge(e) ? e.value : e;
}
const xc = {
  get: (e, t, n) => t === "__v_raw" ? e : x(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return ge(o) && !ge(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function fl(e) {
  return Gt(e) ? e : new Proxy(e, xc);
}
class Sc {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new tr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    oe !== this)
      return Yi(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Xi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && et("Write operation failed: computed value is readonly");
  }
}
function Tc(e, t, n = !1) {
  let s, o;
  L(e) ? s = e : (s = e.get, o = e.set);
  const r = new Sc(s, o, n);
  return process.env.NODE_ENV, r;
}
const fs = {}, $s = /* @__PURE__ */ new WeakMap();
let Wt;
function Vc(e, t = !1, n = Wt) {
  if (n) {
    let s = $s.get(n);
    s || $s.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && et(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ic(e, t, n = re) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, d = (V) => {
    (n.onWarn || et)(
      "Invalid watch source: ",
      V,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (V) => o ? V : Me(V) || o === !1 || o === 0 ? _t(V, 1) : _t(V);
  let f, h, v, T, E = !1, j = !1;
  if (ge(e) ? (h = () => e.value, E = Me(e)) : Gt(e) ? (h = () => u(e), E = !0) : A(e) ? (j = !0, E = e.some((V) => Gt(V) || Me(V)), h = () => e.map((V) => {
    if (ge(V))
      return V.value;
    if (Gt(V))
      return u(V);
    if (L(V))
      return a ? a(V, 2) : V();
    process.env.NODE_ENV !== "production" && d(V);
  })) : L(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (v) {
      Et();
      try {
        v();
      } finally {
        Nt();
      }
    }
    const V = Wt;
    Wt = f;
    try {
      return a ? a(e, 3, [T]) : e(T);
    } finally {
      Wt = V;
    }
  } : (h = Ee, process.env.NODE_ENV !== "production" && d(e)), t && o) {
    const V = h, G = o === !0 ? 1 / 0 : o;
    h = () => _t(V(), G);
  }
  const F = Gi(), Y = () => {
    f.stop(), F && F.active && qo(F.effects, f);
  };
  if (r && t) {
    const V = t;
    t = (...G) => {
      V(...G), Y();
    };
  }
  let $ = j ? new Array(e.length).fill(fs) : fs;
  const ne = (V) => {
    if (!(!(f.flags & 1) || !f.dirty && !V))
      if (t) {
        const G = f.run();
        if (o || E || (j ? G.some((B, ae) => It(B, $[ae])) : It(G, $))) {
          v && v();
          const B = Wt;
          Wt = f;
          try {
            const ae = [
              G,
              // pass undefined as the old value when it's changed for the first time
              $ === fs ? void 0 : j && $[0] === fs ? [] : $,
              T
            ];
            a ? a(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            ), $ = G;
          } finally {
            Wt = B;
          }
        }
      } else
        f.run();
  };
  return l && l(ne), f = new qi(h), f.scheduler = i ? () => i(ne, !1) : ne, T = (V) => Vc(V, !1, f), v = f.onStop = () => {
    const V = $s.get(f);
    if (V) {
      if (a)
        a(V, 4);
      else
        for (const G of V) G();
      $s.delete(f);
    }
  }, process.env.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? s ? ne(!0) : $ = f.run() : i ? i(ne.bind(null, !0), !0) : f.run(), Y.pause = f.pause.bind(f), Y.resume = f.resume.bind(f), Y.stop = Y, Y;
}
function _t(e, t = 1 / 0, n) {
  if (t <= 0 || !X(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ge(e))
    _t(e.value, t, n);
  else if (A(e))
    for (let s = 0; s < e.length; s++)
      _t(e[s], t, n);
  else if (Js(e) || Ut(e))
    e.forEach((s) => {
      _t(s, t, n);
    });
  else if (zi(e)) {
    for (const s in e)
      _t(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && _t(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const qt = [];
function ys(e) {
  qt.push(e);
}
function bs() {
  qt.pop();
}
let go = !1;
function N(e, ...t) {
  if (go) return;
  go = !0, Et();
  const n = qt.length ? qt[qt.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = $c();
  if (s)
    Nn(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${io(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Pc(o)), console.warn(...r);
  }
  Nt(), go = !1;
}
function $c() {
  let e = qt[qt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Pc(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Ac(n));
  }), t;
}
function Ac({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${io(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Mc(e.props), r] : [o + r];
}
function Mc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...dl(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function dl(e, t, n) {
  return te(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ge(t) ? (t = dl(e, U(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = U(t), n ? t : [`${e}=`, t]);
}
function Rc(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? N(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && N(`${t} is NaN - the duration expression might be incorrect.`));
}
const or = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Nn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    ns(o, t, n);
  }
}
function tt(e, t, n, s) {
  if (L(e)) {
    const o = Nn(e, t, n, s);
    return o && Jo(o) && o.catch((r) => {
      ns(r, t, n);
    }), o;
  }
  if (A(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(tt(e[r], t, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && N(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function ns(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || re;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = process.env.NODE_ENV !== "production" ? or[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Et(), Nn(r, null, 10, [
        e,
        a,
        d
      ]), Nt();
      return;
    }
  }
  Fc(e, n, o, s, i);
}
function Fc(e, t, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = or[t];
    if (n && ys(n), N(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && bs(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const Pe = [];
let lt = -1;
const dn = [];
let xt = null, un = 0;
const pl = /* @__PURE__ */ Promise.resolve();
let Ps = null;
const Lc = 100;
function pn(e) {
  const t = Ps || pl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hc(e) {
  let t = lt + 1, n = Pe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Pe[s], r = Un(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function to(e) {
  if (!(e.flags & 1)) {
    const t = Un(e), n = Pe[Pe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Un(n) ? Pe.push(e) : Pe.splice(Hc(t), 0, e), e.flags |= 1, hl();
  }
}
function hl() {
  Ps || (Ps = pl.then(ml));
}
function gl(e) {
  A(e) ? dn.push(...e) : xt && e.id === -1 ? xt.splice(un + 1, 0, e) : e.flags & 1 || (dn.push(e), e.flags |= 1), hl();
}
function Vr(e, t, n = lt + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Pe.length; n++) {
    const s = Pe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || process.env.NODE_ENV !== "production" && rr(t, s))
        continue;
      Pe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function vl(e) {
  if (dn.length) {
    const t = [...new Set(dn)].sort(
      (n, s) => Un(n) - Un(s)
    );
    if (dn.length = 0, xt) {
      xt.push(...t);
      return;
    }
    for (xt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), un = 0; un < xt.length; un++) {
      const n = xt[un];
      process.env.NODE_ENV !== "production" && rr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    xt = null, un = 0;
  }
}
const Un = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ml(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => rr(e, n) : Ee;
  try {
    for (lt = 0; lt < Pe.length; lt++) {
      const n = Pe[lt];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Nn(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; lt < Pe.length; lt++) {
      const n = Pe[lt];
      n && (n.flags &= -2);
    }
    lt = -1, Pe.length = 0, vl(e), Ps = null, (Pe.length || dn.length) && ml(e);
  }
}
function rr(e, t) {
  const n = e.get(t) || 0;
  if (n > Lc) {
    const s = t.i, o = s && pr(s.type);
    return ns(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let dt = !1;
const ws = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (ts().__VUE_HMR_RUNTIME__ = {
  createRecord: vo(_l),
  rerender: vo(zc),
  reload: vo(Wc)
});
const Qt = /* @__PURE__ */ new Map();
function jc(e) {
  const t = e.type.__hmrId;
  let n = Qt.get(t);
  n || (_l(t, e.type), n = Qt.get(t)), n.instances.add(e);
}
function kc(e) {
  Qt.get(e.type.__hmrId).instances.delete(e);
}
function _l(e, t) {
  return Qt.has(e) ? !1 : (Qt.set(e, {
    initialDef: As(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function As(e) {
  return aa(e) ? e.__vccOpts : e;
}
function zc(e, t) {
  const n = Qt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, As(s.type).render = t), s.renderCache = [], dt = !0, s.update(), dt = !1;
  }));
}
function Wc(e, t) {
  const n = Qt.get(e);
  if (!n) return;
  t = As(t), Ir(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = As(r.type);
    let l = ws.get(i);
    l || (i !== n.initialDef && Ir(i, t), ws.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? to(() => {
      dt = !0, r.parent.update(), dt = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  gl(() => {
    ws.clear();
  });
}
function Ir(e, t) {
  pe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function vo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ye, An = [], Po = !1;
function ss(e, ...t) {
  Ye ? Ye.emit(e, ...t) : Po || An.push({ event: e, args: t });
}
function ir(e, t) {
  var n, s;
  Ye = e, Ye ? (Ye.enabled = !0, An.forEach(({ event: o, args: r }) => Ye.emit(o, ...r)), An = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    ir(r, t);
  }), setTimeout(() => {
    Ye || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Po = !0, An = []);
  }, 3e3)) : (Po = !0, An = []);
}
function Bc(e, t) {
  ss("app:init", e, t, {
    Fragment: we,
    Text: rs,
    Comment: he,
    Static: Ns
  });
}
function Uc(e) {
  ss("app:unmount", e);
}
const Kc = /* @__PURE__ */ lr(
  "component:added"
  /* COMPONENT_ADDED */
), yl = /* @__PURE__ */ lr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Gc = /* @__PURE__ */ lr(
  "component:removed"
  /* COMPONENT_REMOVED */
), qc = (e) => {
  Ye && typeof Ye.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ye.cleanupBuffer(e) && Gc(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function lr(e) {
  return (t) => {
    ss(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Jc = /* @__PURE__ */ bl(
  "perf:start"
  /* PERFORMANCE_START */
), Yc = /* @__PURE__ */ bl(
  "perf:end"
  /* PERFORMANCE_END */
);
function bl(e) {
  return (t, n, s) => {
    ss(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Zc(e, t, n) {
  ss(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let me = null, wl = null;
function Ms(e) {
  const t = me;
  return me = e, wl = e && e.type.__scopeId || null, t;
}
function $t(e, t = me, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ur(-1);
    const r = Ms(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Ms(r), s._d && Ur(1);
    }
    return process.env.NODE_ENV !== "production" && yl(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function El(e) {
  Ka(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function _n(e, t) {
  if (me === null)
    return process.env.NODE_ENV !== "production" && N("withDirectives can only be used inside render functions."), e;
  const n = ro(me), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, a = re] = t[o];
    r && (L(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && _t(i), s.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Ft(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (Et(), tt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Nt());
  }
}
const Qc = Symbol("_vte"), Nl = (e) => e.__isTeleport, St = Symbol("_leaveCb"), ds = Symbol("_enterCb");
function Xc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return On(() => {
    e.isMounted = !0;
  }), Il(() => {
    e.isUnmounting = !0;
  }), e;
}
const We = [Function, Array], Ol = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: We,
  onEnter: We,
  onAfterEnter: We,
  onEnterCancelled: We,
  // leave
  onBeforeLeave: We,
  onLeave: We,
  onAfterLeave: We,
  onLeaveCancelled: We,
  // appear
  onBeforeAppear: We,
  onAppear: We,
  onAfterAppear: We,
  onAppearCancelled: We
}, Cl = (e) => {
  const t = e.subTree;
  return t.component ? Cl(t.component) : t;
}, eu = {
  name: "BaseTransition",
  props: Ol,
  setup(e, { slots: t }) {
    const n = At(), s = Xc();
    return () => {
      const o = t.default && Sl(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Dl(o), i = U(e), { mode: l } = i;
      if (process.env.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && N(`invalid <transition> mode: ${l}`), s.isLeaving)
        return mo(r);
      const a = $r(r);
      if (!a)
        return mo(r);
      let d = Ao(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => d = f
      );
      a.type !== he && Kn(a, d);
      let u = n.subTree && $r(n.subTree);
      if (u && u.type !== he && !Bt(a, u) && Cl(n).type !== he) {
        let f = Ao(
          u,
          i,
          s,
          n
        );
        if (Kn(u, f), l === "out-in" && a.type !== he)
          return s.isLeaving = !0, f.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, u = void 0;
          }, mo(r);
        l === "in-out" && a.type !== he ? f.delayLeave = (h, v, T) => {
          const E = xl(
            s,
            u
          );
          E[String(u.key)] = u, h[St] = () => {
            v(), h[St] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            T(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Dl(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== he) {
        if (process.env.NODE_ENV !== "production" && n) {
          N(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, process.env.NODE_ENV === "production") break;
      }
  }
  return t;
}
const tu = eu;
function xl(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Ao(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: v,
    onAfterLeave: T,
    onLeaveCancelled: E,
    onBeforeAppear: j,
    onAppear: F,
    onAfterAppear: Y,
    onAppearCancelled: $
  } = t, ne = String(e.key), V = xl(n, e), G = (M, ee) => {
    M && tt(
      M,
      s,
      9,
      ee
    );
  }, B = (M, ee) => {
    const le = ee[1];
    G(M, ee), A(M) ? M.every((I) => I.length <= 1) && le() : M.length <= 1 && le();
  }, ae = {
    mode: i,
    persisted: l,
    beforeEnter(M) {
      let ee = a;
      if (!n.isMounted)
        if (r)
          ee = j || a;
        else
          return;
      M[St] && M[St](
        !0
        /* cancelled */
      );
      const le = V[ne];
      le && Bt(e, le) && le.el[St] && le.el[St](), G(ee, [M]);
    },
    enter(M) {
      let ee = d, le = u, I = f;
      if (!n.isMounted)
        if (r)
          ee = F || d, le = Y || u, I = $ || f;
        else
          return;
      let ue = !1;
      const Ce = M[ds] = (De) => {
        ue || (ue = !0, De ? G(I, [M]) : G(le, [M]), ae.delayedLeave && ae.delayedLeave(), M[ds] = void 0);
      };
      ee ? B(ee, [M, Ce]) : Ce();
    },
    leave(M, ee) {
      const le = String(e.key);
      if (M[ds] && M[ds](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return ee();
      G(h, [M]);
      let I = !1;
      const ue = M[St] = (Ce) => {
        I || (I = !0, ee(), Ce ? G(E, [M]) : G(T, [M]), M[St] = void 0, V[le] === e && delete V[le]);
      };
      V[le] = e, v ? B(v, [M, ue]) : ue();
    },
    clone(M) {
      const ee = Ao(
        M,
        t,
        n,
        s,
        o
      );
      return o && o(ee), ee;
    }
  };
  return ae;
}
function mo(e) {
  if (os(e))
    return e = ht(e), e.children = null, e;
}
function $r(e) {
  if (!os(e))
    return Nl(e.type) && e.children ? Dl(e.children) : e;
  if (process.env.NODE_ENV !== "production" && e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && L(n.default))
      return n.default();
  }
}
function Kn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Sl(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === we ? (i.patchFlag & 128 && o++, s = s.concat(
      Sl(i.children, t, l)
    )) : (t || i.type !== he) && s.push(l != null ? ht(i, { key: l }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fe(e, t) {
  return L(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Tl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const nu = /* @__PURE__ */ new WeakSet();
function Rs(e, t, n, s, o = !1) {
  if (A(e)) {
    e.forEach(
      (T, E) => Rs(
        T,
        t && (A(t) ? t[E] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (hn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Rs(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? ro(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    N(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, u = l.refs === re ? l.refs = {} : l.refs, f = l.setupState, h = U(f), v = f === re ? () => !1 : (T) => process.env.NODE_ENV !== "production" && (J(h, T) && !ge(h[T]) && N(
    `Template ref "${T}" used on a non-ref value. It will not work in the production build.`
  ), nu.has(h[T])) ? !1 : J(h, T);
  if (d != null && d !== a && (te(d) ? (u[d] = null, v(d) && (f[d] = null)) : ge(d) && (d.value = null)), L(a))
    Nn(a, l, 12, [i, u]);
  else {
    const T = te(a), E = ge(a);
    if (T || E) {
      const j = () => {
        if (e.f) {
          const F = T ? v(a) ? f[a] : u[a] : a.value;
          o ? A(F) && qo(F, r) : A(F) ? F.includes(r) || F.push(r) : T ? (u[a] = [r], v(a) && (f[a] = u[a])) : (a.value = [r], e.k && (u[e.k] = a.value));
        } else T ? (u[a] = i, v(a) && (f[a] = i)) : E ? (a.value = i, e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && N("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (j.id = -1, He(j, n)) : j();
    } else process.env.NODE_ENV !== "production" && N("Invalid template ref type:", a, `(${typeof a})`);
  }
}
ts().requestIdleCallback;
ts().cancelIdleCallback;
const hn = (e) => !!e.type.__asyncLoader, os = (e) => e.type.__isKeepAlive;
function su(e, t) {
  Vl(e, "a", t);
}
function ou(e, t) {
  Vl(e, "da", t);
}
function Vl(e, t, n = Ne) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (no(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      os(o.parent.vnode) && ru(s, t, n, o), o = o.parent;
  }
}
function ru(e, t, n, s) {
  const o = no(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  so(() => {
    qo(s[t], o);
  }, n);
}
function no(e, t, n = Ne, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Et();
      const l = is(n), a = tt(t, n, e, i);
      return l(), Nt(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const o = zt(or[e].replace(/ hook$/, ""));
    N(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ot = (e) => (t, n = Ne) => {
  (!Jn || e === "sp") && no(e, (...s) => t(...s), n);
}, iu = Ot("bm"), On = Ot("m"), lu = Ot(
  "bu"
), au = Ot("u"), Il = Ot(
  "bum"
), so = Ot("um"), cu = Ot(
  "sp"
), uu = Ot("rtg"), fu = Ot("rtc");
function du(e, t = Ne) {
  no("ec", e, t);
}
const pu = "components", $l = Symbol.for("v-ndc");
function Pl(e) {
  return te(e) ? hu(pu, e, !1) || e : e || $l;
}
function hu(e, t, n = !0, s = !1) {
  const o = me || Ne;
  if (o) {
    const r = o.type;
    {
      const l = pr(
        r,
        !1
      );
      if (l && (l === t || l === Ae(t) || l === Yt(Ae(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Pr(o[e] || r[e], t) || // global registration
      Pr(o.appContext[e], t)
    );
    return !i && s ? r : (process.env.NODE_ENV !== "production" && n && !i && N(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), i);
  } else process.env.NODE_ENV !== "production" && N(
    `resolve${Yt(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Pr(e, t) {
  return e && (e[t] || e[Ae(t)] || e[Yt(Ae(t))]);
}
function gu(e, t, n, s) {
  let o;
  const r = n, i = A(e);
  if (i || te(e)) {
    const l = i && Gt(e);
    let a = !1;
    l && (a = !Me(e), e = Qs(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? Te(e[d]) : e[d],
        d,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && N(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (X(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const u = l[a];
        o[a] = t(e[u], u, a, r);
      }
    }
  else
    o = [];
  return o;
}
function Gn(e, t, n = {}, s, o) {
  if (me.ce || me.parent && hn(me.parent) && me.parent.ce)
    return t !== "default" && (n.name = t), se(), Be(
      we,
      null,
      [Oe("slot", n, s && s())],
      64
    );
  let r = e[t];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (N(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), se();
  const i = r && Al(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = Be(
    we,
    {
      key: (l && !Xe(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), r && r._c && (r._d = !0), a;
}
function Al(e) {
  return e.some((t) => Ue(t) ? !(t.type === he || t.type === we && !Al(t.children)) : !0) ? e : null;
}
const Mo = (e) => e ? ia(e) ? ro(e) : Mo(e.parent) : null, Jt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? ft(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? ft(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? ft(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? ft(e.refs) : e.refs,
    $parent: (e) => Mo(e.parent),
    $root: (e) => Mo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      to(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pn.bind(e.proxy)),
    $watch: (e) => Gu.bind(e)
  })
), ar = (e) => e === "_" || e === "$", _o = (e, t) => e !== re && !e.__isScriptSetup && J(e, t), Ml = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const v = i[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (_o(s, t))
          return i[t] = 1, s[t];
        if (o !== re && J(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && J(d, t)
        )
          return i[t] = 3, r[t];
        if (n !== re && J(n, t))
          return i[t] = 4, n[t];
        Ro && (i[t] = 0);
      }
    }
    const u = Jt[t];
    let f, h;
    if (u)
      return t === "$attrs" ? (be(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Hs()) : process.env.NODE_ENV !== "production" && t === "$slots" && be(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== re && J(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, J(h, t)
    )
      return h[t];
    process.env.NODE_ENV !== "production" && me && (!te(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== re && ar(t[0]) && J(o, t) ? N(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === me && N(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return _o(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && J(o, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== re && J(s, t) ? (s[t] = n, !0) : J(e.props, t) ? (process.env.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && N(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== re && J(e, i) || _o(t, i) || (l = r[0]) && J(l, i) || J(s, i) || J(Jt, i) || J(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Ml.ownKeys = (e) => (N(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function vu(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Jt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Jt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Ee
    });
  }), t;
}
function mu(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: Ee
    });
  });
}
function _u(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(U(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (ar(s[0])) {
        N(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: Ee
      });
    }
  });
}
function Ar(e) {
  return A(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function yu() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? N(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ro = !0;
function bu(e) {
  const t = Fl(e), n = e.proxy, s = e.ctx;
  Ro = !1, t.beforeCreate && Mr(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: v,
    updated: T,
    activated: E,
    deactivated: j,
    beforeDestroy: F,
    beforeUnmount: Y,
    destroyed: $,
    unmounted: ne,
    render: V,
    renderTracked: G,
    renderTriggered: B,
    errorCaptured: ae,
    serverPrefetch: M,
    // public API
    expose: ee,
    inheritAttrs: le,
    // assets
    components: I,
    directives: ue,
    filters: Ce
  } = t, De = process.env.NODE_ENV !== "production" ? yu() : null;
  if (process.env.NODE_ENV !== "production") {
    const [q] = e.propsOptions;
    if (q)
      for (const K in q)
        De("Props", K);
  }
  if (d && wu(d, s, De), i)
    for (const q in i) {
      const K = i[q];
      L(K) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(s, q, {
        value: K.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[q] = K.bind(n), process.env.NODE_ENV !== "production" && De("Methods", q)) : process.env.NODE_ENV !== "production" && N(
        `Method "${q}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !L(o) && N(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const q = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && Jo(q) && N(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !X(q))
      process.env.NODE_ENV !== "production" && N("data() should return an object.");
    else if (e.data = nr(q), process.env.NODE_ENV !== "production")
      for (const K in q)
        De("Data", K), ar(K[0]) || Object.defineProperty(s, K, {
          configurable: !0,
          enumerable: !0,
          get: () => q[K],
          set: Ee
        });
  }
  if (Ro = !0, r)
    for (const q in r) {
      const K = r[q], ze = L(K) ? K.bind(n, n) : L(K.get) ? K.get.bind(n, n) : Ee;
      process.env.NODE_ENV !== "production" && ze === Ee && N(`Computed property "${q}" has no getter.`);
      const sn = !L(K) && L(K.set) ? K.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        N(
          `Write operation failed: computed property "${q}" is readonly.`
        );
      } : Ee, Mt = Q({
        get: ze,
        set: sn
      });
      Object.defineProperty(s, q, {
        enumerable: !0,
        configurable: !0,
        get: () => Mt.value,
        set: (Ct) => Mt.value = Ct
      }), process.env.NODE_ENV !== "production" && De("Computed", q);
    }
  if (l)
    for (const q in l)
      Rl(l[q], s, n, q);
  if (a) {
    const q = L(a) ? a.call(n) : a;
    Reflect.ownKeys(q).forEach((K) => {
      Hl(K, q[K]);
    });
  }
  u && Mr(u, e, "c");
  function _e(q, K) {
    A(K) ? K.forEach((ze) => q(ze.bind(n))) : K && q(K.bind(n));
  }
  if (_e(iu, f), _e(On, h), _e(lu, v), _e(au, T), _e(su, E), _e(ou, j), _e(du, ae), _e(fu, G), _e(uu, B), _e(Il, Y), _e(so, ne), _e(cu, M), A(ee))
    if (ee.length) {
      const q = e.exposed || (e.exposed = {});
      ee.forEach((K) => {
        Object.defineProperty(q, K, {
          get: () => n[K],
          set: (ze) => n[K] = ze
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === Ee && (e.render = V), le != null && (e.inheritAttrs = le), I && (e.components = I), ue && (e.directives = ue), M && Tl(e);
}
function wu(e, t, n = Ee) {
  A(e) && (e = Fo(e));
  for (const s in e) {
    const o = e[s];
    let r;
    X(o) ? "default" in o ? r = pt(
      o.from || s,
      o.default,
      !0
    ) : r = pt(o.from || s) : r = pt(o), ge(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Mr(e, t, n) {
  tt(
    A(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Rl(e, t, n, s) {
  let o = s.includes(".") ? Zl(n, s) : () => n[s];
  if (te(e)) {
    const r = t[e];
    L(r) ? vn(o, r) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e}"`, r);
  } else if (L(e))
    vn(o, e.bind(n));
  else if (X(e))
    if (A(e))
      e.forEach((r) => Rl(r, t, n, s));
    else {
      const r = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(r) ? vn(o, r, e) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && N(`Invalid watch option: "${s}"`, e);
}
function Fl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (d) => Fs(a, d, i, !0)
  ), Fs(a, t, i)), X(t) && r.set(t, a), a;
}
function Fs(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Fs(e, r, n, !0), o && o.forEach(
    (i) => Fs(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && N(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Eu[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Eu = {
  data: Rr,
  props: Fr,
  emits: Fr,
  // objects
  methods: Mn,
  computed: Mn,
  // lifecycle
  beforeCreate: Ie,
  created: Ie,
  beforeMount: Ie,
  mounted: Ie,
  beforeUpdate: Ie,
  updated: Ie,
  beforeDestroy: Ie,
  beforeUnmount: Ie,
  destroyed: Ie,
  unmounted: Ie,
  activated: Ie,
  deactivated: Ie,
  errorCaptured: Ie,
  serverPrefetch: Ie,
  // assets
  components: Mn,
  directives: Mn,
  // watch
  watch: Ou,
  // provide / inject
  provide: Rr,
  inject: Nu
};
function Rr(e, t) {
  return t ? e ? function() {
    return pe(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nu(e, t) {
  return Mn(Fo(e), Fo(t));
}
function Fo(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mn(e, t) {
  return e ? pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fr(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pe(
    /* @__PURE__ */ Object.create(null),
    Ar(e),
    Ar(t ?? {})
  ) : t;
}
function Ou(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = pe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ie(e[s], t[s]);
  return n;
}
function Ll() {
  return {
    app: null,
    config: {
      isNativeTag: Ba,
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
let Cu = 0;
function Du(e, t) {
  return function(s, o = null) {
    L(s) || (s = pe({}, s)), o != null && !X(o) && (process.env.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), o = null);
    const r = Ll(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = r.app = {
      _uid: Cu++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Jr,
      get config() {
        return r.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && N(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : u && L(u.install) ? (i.add(u), u.install(d, ...f)) : L(u) ? (i.add(u), u(d, ...f)) : process.env.NODE_ENV !== "production" && N(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(u) {
        return r.mixins.includes(u) ? process.env.NODE_ENV !== "production" && N(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), d;
      },
      component(u, f) {
        return process.env.NODE_ENV !== "production" && zo(u, r.config), f ? (process.env.NODE_ENV !== "production" && r.components[u] && N(`Component "${u}" has already been registered in target app.`), r.components[u] = f, d) : r.components[u];
      },
      directive(u, f) {
        return process.env.NODE_ENV !== "production" && El(u), f ? (process.env.NODE_ENV !== "production" && r.directives[u] && N(`Directive "${u}" has already been registered in target app.`), r.directives[u] = f, d) : r.directives[u];
      },
      mount(u, f, h) {
        if (a)
          process.env.NODE_ENV !== "production" && N(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && N(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const v = d._ceVNode || Oe(s, o);
          return v.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(
              ht(v),
              u,
              h
            );
          }), e(v, u, h), a = !0, d._container = u, u.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = v.component, Bc(d, Jr)), ro(v.component);
        }
      },
      onUnmount(u) {
        process.env.NODE_ENV !== "production" && typeof u != "function" && N(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), l.push(u);
      },
      unmount() {
        a ? (tt(
          l,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, Uc(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return process.env.NODE_ENV !== "production" && u in r.provides && N(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), r.provides[u] = f, d;
      },
      runWithContext(u) {
        const f = gn;
        gn = d;
        try {
          return u();
        } finally {
          gn = f;
        }
      }
    };
    return d;
  };
}
let gn = null;
function Hl(e, t) {
  if (!Ne)
    process.env.NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let n = Ne.provides;
    const s = Ne.parent && Ne.parent.provides;
    s === n && (n = Ne.provides = Object.create(s)), n[e] = t;
  }
}
function pt(e, t, n = !1) {
  const s = Ne || me;
  if (s || gn) {
    const o = gn ? gn._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
const jl = {}, kl = () => Object.create(jl), zl = (e) => Object.getPrototypeOf(e) === jl;
function xu(e, t, n, s = !1) {
  const o = {}, r = kl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Wl(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && Ul(t || {}, o, e), n ? e.props = s ? o : ul(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function Su(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Tu(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = U(o), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Su(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (oo(e.emitsOptions, h))
          continue;
        const v = t[h];
        if (a)
          if (J(r, h))
            v !== r[h] && (r[h] = v, d = !0);
          else {
            const T = Ae(h);
            o[T] = Lo(
              a,
              l,
              T,
              v,
              e,
              !1
            );
          }
        else
          v !== r[h] && (r[h] = v, d = !0);
      }
    }
  } else {
    Wl(e, t, o, r) && (d = !0);
    let u;
    for (const f in l)
      (!t || // for camelCase
      !J(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Pt(f)) === f || !J(t, u))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[f] = Lo(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (r !== l)
      for (const f in r)
        (!t || !J(t, f)) && (delete r[f], d = !0);
  }
  d && ut(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Ul(t || {}, o, e);
}
function Wl(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (Rn(a))
        continue;
      const d = t[a];
      let u;
      o && J(o, u = Ae(a)) ? !r || !r.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : oo(e.emitsOptions, a) || (!(a in s) || d !== s[a]) && (s[a] = d, i = !0);
    }
  if (r) {
    const a = U(n), d = l || re;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      n[f] = Lo(
        o,
        a,
        f,
        d[f],
        e,
        !J(d, f)
      );
    }
  }
  return i;
}
function Lo(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = J(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && L(a)) {
        const { propsDefaults: d } = o;
        if (n in d)
          s = d[n];
        else {
          const u = is(o);
          s = d[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Pt(n)) && (s = !0));
  }
  return s;
}
const Vu = /* @__PURE__ */ new WeakMap();
function Bl(e, t, n = !1) {
  const s = n ? Vu : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!L(e)) {
    const u = (f) => {
      a = !0;
      const [h, v] = Bl(f, t, !0);
      pe(i, h), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return X(e) && s.set(e, fn), fn;
  if (A(r))
    for (let u = 0; u < r.length; u++) {
      process.env.NODE_ENV !== "production" && !te(r[u]) && N("props must be strings when using array syntax.", r[u]);
      const f = Ae(r[u]);
      Lr(f) && (i[f] = re);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !X(r) && N("invalid props options", r);
    for (const u in r) {
      const f = Ae(u);
      if (Lr(f)) {
        const h = r[u], v = i[f] = A(h) || L(h) ? { type: h } : pe({}, h), T = v.type;
        let E = !1, j = !0;
        if (A(T))
          for (let F = 0; F < T.length; ++F) {
            const Y = T[F], $ = L(Y) && Y.name;
            if ($ === "Boolean") {
              E = !0;
              break;
            } else $ === "String" && (j = !1);
          }
        else
          E = L(T) && T.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = E, v[
          1
          /* shouldCastTrue */
        ] = j, (E || J(v, "default")) && l.push(f);
      }
    }
  }
  const d = [i, l];
  return X(e) && s.set(e, d), d;
}
function Lr(e) {
  return e[0] !== "$" && !Rn(e) ? !0 : (process.env.NODE_ENV !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Iu(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ul(e, t, n) {
  const s = U(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Ae(i));
  for (const i in o) {
    let l = o[i];
    l != null && $u(
      i,
      s[i],
      l,
      process.env.NODE_ENV !== "production" ? ft(s) : s,
      !r.includes(i)
    );
  }
}
function $u(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let d = !1;
      const u = A(r) ? r : [r], f = [];
      for (let h = 0; h < u.length && !d; h++) {
        const { valid: v, expectedType: T } = Au(t, u[h]);
        f.push(T || ""), d = v;
      }
      if (!d) {
        N(Mu(e, t, f));
        return;
      }
    }
    l && !l(t, s) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Pu = /* @__PURE__ */ En(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Au(e, t) {
  let n;
  const s = Iu(t);
  if (s === "null")
    n = e === null;
  else if (Pu(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = X(e) : s === "Array" ? n = A(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Mu(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Yt).join(" | ")}`;
  const o = n[0], r = Yo(t), i = Hr(t, o), l = Hr(t, r);
  return n.length === 1 && jr(o) && !Ru(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, jr(r) && (s += `with value ${l}.`), s;
}
function Hr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function jr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ru(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Kl = (e) => e[0] === "_" || e === "$stable", cr = (e) => A(e) ? e.map(Je) : [Je(e)], Fu = (e, t, n) => {
  if (t._n)
    return t;
  const s = $t((...o) => (process.env.NODE_ENV !== "production" && Ne && (!n || n.root === Ne.root) && N(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), cr(t(...o))), n);
  return s._c = !1, s;
}, Gl = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Kl(o)) continue;
    const r = e[o];
    if (L(r))
      t[o] = Fu(o, r, s);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && N(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = cr(r);
      t[o] = () => i;
    }
  }
}, ql = (e, t) => {
  process.env.NODE_ENV !== "production" && !os(e.vnode) && N(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = cr(t);
  e.slots.default = () => n;
}, Ho = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, Lu = (e, t, n) => {
  const s = e.slots = kl();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Ho(s, t, n), n && Vs(s, "_", o, !0)) : Gl(t, s);
  } else t && ql(e, t);
}, Hu = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = re;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && dt ? (Ho(o, t, n), ut(e, "set", "$slots")) : n && l === 1 ? r = !1 : Ho(o, t, n) : (r = !t.$stable, Gl(t, o)), i = t;
  } else t && (ql(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !Kl(l) && i[l] == null && delete o[l];
};
let Vn, Vt;
function rn(e, t) {
  e.appContext.config.performance && Ls() && Vt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Jc(e, t, Ls() ? Vt.now() : Date.now());
}
function ln(e, t) {
  if (e.appContext.config.performance && Ls()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Vt.mark(s), Vt.measure(
      `<${io(e, e.type)}> ${t}`,
      n,
      s
    ), Vt.clearMarks(n), Vt.clearMarks(s);
  }
  process.env.NODE_ENV !== "production" && Yc(e, t, Ls() ? Vt.now() : Date.now());
}
function Ls() {
  return Vn !== void 0 || (typeof window < "u" && window.performance ? (Vn = !0, Vt = window.performance) : Vn = !1), Vn;
}
function ju() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const He = ef;
function ku(e) {
  return zu(e);
}
function zu(e, t) {
  ju();
  const n = ts();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && ir(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: u,
    parentNode: f,
    nextSibling: h,
    setScopeId: v = Ee,
    insertStaticContent: T
  } = e, E = (c, p, g, y = null, m = null, _ = null, D = void 0, C = null, O = process.env.NODE_ENV !== "production" && dt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Bt(c, p) && (y = nt(c), Ge(c, m, _, !0), c = null), p.patchFlag === -2 && (O = !1, p.dynamicChildren = null);
    const { type: b, ref: z, shapeFlag: S } = p;
    switch (b) {
      case rs:
        j(c, p, g, y);
        break;
      case he:
        F(c, p, g, y);
        break;
      case Ns:
        c == null ? Y(p, g, y, D) : process.env.NODE_ENV !== "production" && $(c, p, g, D);
        break;
      case we:
        ue(
          c,
          p,
          g,
          y,
          m,
          _,
          D,
          C,
          O
        );
        break;
      default:
        S & 1 ? G(
          c,
          p,
          g,
          y,
          m,
          _,
          D,
          C,
          O
        ) : S & 6 ? Ce(
          c,
          p,
          g,
          y,
          m,
          _,
          D,
          C,
          O
        ) : S & 64 || S & 128 ? b.process(
          c,
          p,
          g,
          y,
          m,
          _,
          D,
          C,
          O,
          xn
        ) : process.env.NODE_ENV !== "production" && N("Invalid VNode type:", b, `(${typeof b})`);
    }
    z != null && m && Rs(z, c && c.ref, _, p || c, !p);
  }, j = (c, p, g, y) => {
    if (c == null)
      s(
        p.el = l(p.children),
        g,
        y
      );
    else {
      const m = p.el = c.el;
      p.children !== c.children && d(m, p.children);
    }
  }, F = (c, p, g, y) => {
    c == null ? s(
      p.el = a(p.children || ""),
      g,
      y
    ) : p.el = c.el;
  }, Y = (c, p, g, y) => {
    [c.el, c.anchor] = T(
      c.children,
      p,
      g,
      y,
      c.el,
      c.anchor
    );
  }, $ = (c, p, g, y) => {
    if (p.children !== c.children) {
      const m = h(c.anchor);
      V(c), [p.el, p.anchor] = T(
        p.children,
        g,
        m,
        y
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, ne = ({ el: c, anchor: p }, g, y) => {
    let m;
    for (; c && c !== p; )
      m = h(c), s(c, g, y), c = m;
    s(p, g, y);
  }, V = ({ el: c, anchor: p }) => {
    let g;
    for (; c && c !== p; )
      g = h(c), o(c), c = g;
    o(p);
  }, G = (c, p, g, y, m, _, D, C, O) => {
    p.type === "svg" ? D = "svg" : p.type === "math" && (D = "mathml"), c == null ? B(
      p,
      g,
      y,
      m,
      _,
      D,
      C,
      O
    ) : ee(
      c,
      p,
      m,
      _,
      D,
      C,
      O
    );
  }, B = (c, p, g, y, m, _, D, C) => {
    let O, b;
    const { props: z, shapeFlag: S, transition: H, dirs: W } = c;
    if (O = c.el = i(
      c.type,
      _,
      z && z.is,
      z
    ), S & 8 ? u(O, c.children) : S & 16 && M(
      c.children,
      O,
      null,
      y,
      m,
      yo(c, _),
      D,
      C
    ), W && Ft(c, null, y, "created"), ae(O, c, c.scopeId, D, y), z) {
      for (const ce in z)
        ce !== "value" && !Rn(ce) && r(O, ce, null, z[ce], _, y);
      "value" in z && r(O, "value", null, z.value, _), (b = z.onVnodeBeforeMount) && it(b, y, c);
    }
    process.env.NODE_ENV !== "production" && (Vs(O, "__vnode", c, !0), Vs(O, "__vueParentComponent", y, !0)), W && Ft(c, null, y, "beforeMount");
    const Z = Wu(m, H);
    Z && H.beforeEnter(O), s(O, p, g), ((b = z && z.onVnodeMounted) || Z || W) && He(() => {
      b && it(b, y, c), Z && H.enter(O), W && Ft(c, null, y, "mounted");
    }, m);
  }, ae = (c, p, g, y, m) => {
    if (g && v(c, g), y)
      for (let _ = 0; _ < y.length; _++)
        v(c, y[_]);
    if (m) {
      let _ = m.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = ur(_.children) || _), p === _ || ea(_.type) && (_.ssContent === p || _.ssFallback === p)) {
        const D = m.vnode;
        ae(
          c,
          D,
          D.scopeId,
          D.slotScopeIds,
          m.parent
        );
      }
    }
  }, M = (c, p, g, y, m, _, D, C, O = 0) => {
    for (let b = O; b < c.length; b++) {
      const z = c[b] = C ? Tt(c[b]) : Je(c[b]);
      E(
        null,
        z,
        p,
        g,
        y,
        m,
        _,
        D,
        C
      );
    }
  }, ee = (c, p, g, y, m, _, D) => {
    const C = p.el = c.el;
    process.env.NODE_ENV !== "production" && (C.__vnode = p);
    let { patchFlag: O, dynamicChildren: b, dirs: z } = p;
    O |= c.patchFlag & 16;
    const S = c.props || re, H = p.props || re;
    let W;
    if (g && Lt(g, !1), (W = H.onVnodeBeforeUpdate) && it(W, g, p, c), z && Ft(p, c, g, "beforeUpdate"), g && Lt(g, !0), process.env.NODE_ENV !== "production" && dt && (O = 0, D = !1, b = null), (S.innerHTML && H.innerHTML == null || S.textContent && H.textContent == null) && u(C, ""), b ? (le(
      c.dynamicChildren,
      b,
      C,
      g,
      y,
      yo(p, m),
      _
    ), process.env.NODE_ENV !== "production" && Es(c, p)) : D || ze(
      c,
      p,
      C,
      null,
      g,
      y,
      yo(p, m),
      _,
      !1
    ), O > 0) {
      if (O & 16)
        I(C, S, H, g, m);
      else if (O & 2 && S.class !== H.class && r(C, "class", null, H.class, m), O & 4 && r(C, "style", S.style, H.style, m), O & 8) {
        const Z = p.dynamicProps;
        for (let ce = 0; ce < Z.length; ce++) {
          const ie = Z[ce], Le = S[ie], Re = H[ie];
          (Re !== Le || ie === "value") && r(C, ie, Le, Re, m, g);
        }
      }
      O & 1 && c.children !== p.children && u(C, p.children);
    } else !D && b == null && I(C, S, H, g, m);
    ((W = H.onVnodeUpdated) || z) && He(() => {
      W && it(W, g, p, c), z && Ft(p, c, g, "updated");
    }, y);
  }, le = (c, p, g, y, m, _, D) => {
    for (let C = 0; C < p.length; C++) {
      const O = c[C], b = p[C], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bt(O, b) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? f(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      E(
        O,
        b,
        z,
        null,
        y,
        m,
        _,
        D,
        !0
      );
    }
  }, I = (c, p, g, y, m) => {
    if (p !== g) {
      if (p !== re)
        for (const _ in p)
          !Rn(_) && !(_ in g) && r(
            c,
            _,
            p[_],
            null,
            m,
            y
          );
      for (const _ in g) {
        if (Rn(_)) continue;
        const D = g[_], C = p[_];
        D !== C && _ !== "value" && r(c, _, C, D, m, y);
      }
      "value" in g && r(c, "value", p.value, g.value, m);
    }
  }, ue = (c, p, g, y, m, _, D, C, O) => {
    const b = p.el = c ? c.el : l(""), z = p.anchor = c ? c.anchor : l("");
    let { patchFlag: S, dynamicChildren: H, slotScopeIds: W } = p;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (dt || S & 2048) && (S = 0, O = !1, H = null), W && (C = C ? C.concat(W) : W), c == null ? (s(b, g, y), s(z, g, y), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      g,
      z,
      m,
      _,
      D,
      C,
      O
    )) : S > 0 && S & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (le(
      c.dynamicChildren,
      H,
      g,
      m,
      _,
      D,
      C
    ), process.env.NODE_ENV !== "production" ? Es(c, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || m && p === m.subTree) && Es(
        c,
        p,
        !0
        /* shallow */
      )
    )) : ze(
      c,
      p,
      g,
      z,
      m,
      _,
      D,
      C,
      O
    );
  }, Ce = (c, p, g, y, m, _, D, C, O) => {
    p.slotScopeIds = C, c == null ? p.shapeFlag & 512 ? m.ctx.activate(
      p,
      g,
      y,
      D,
      O
    ) : De(
      p,
      g,
      y,
      m,
      _,
      D,
      O
    ) : _e(c, p, O);
  }, De = (c, p, g, y, m, _, D) => {
    const C = c.component = lf(
      c,
      y,
      m
    );
    if (process.env.NODE_ENV !== "production" && C.type.__hmrId && jc(C), process.env.NODE_ENV !== "production" && (ys(c), rn(C, "mount")), os(c) && (C.ctx.renderer = xn), process.env.NODE_ENV !== "production" && rn(C, "init"), cf(C, !1, D), process.env.NODE_ENV !== "production" && ln(C, "init"), C.asyncDep) {
      if (process.env.NODE_ENV !== "production" && dt && (c.el = null), m && m.registerDep(C, q, D), !c.el) {
        const O = C.subTree = Oe(he);
        F(null, O, p, g);
      }
    } else
      q(
        C,
        c,
        p,
        g,
        m,
        _,
        D
      );
    process.env.NODE_ENV !== "production" && (bs(), ln(C, "mount"));
  }, _e = (c, p, g) => {
    const y = p.component = c.component;
    if (Qu(c, p, g))
      if (y.asyncDep && !y.asyncResolved) {
        process.env.NODE_ENV !== "production" && ys(p), K(y, p, g), process.env.NODE_ENV !== "production" && bs();
        return;
      } else
        y.next = p, y.update();
    else
      p.el = c.el, y.vnode = p;
  }, q = (c, p, g, y, m, _, D) => {
    const C = () => {
      if (c.isMounted) {
        let { next: S, bu: H, u: W, parent: Z, vnode: ce } = c;
        {
          const ot = Jl(c);
          if (ot) {
            S && (S.el = ce.el, K(c, S, D)), ot.asyncDep.then(() => {
              c.isUnmounted || C();
            });
            return;
          }
        }
        let ie = S, Le;
        process.env.NODE_ENV !== "production" && ys(S || c.vnode), Lt(c, !1), S ? (S.el = ce.el, K(c, S, D)) : S = ce, H && cn(H), (Le = S.props && S.props.onVnodeBeforeUpdate) && it(Le, Z, S, ce), Lt(c, !0), process.env.NODE_ENV !== "production" && rn(c, "render");
        const Re = zr(c);
        process.env.NODE_ENV !== "production" && ln(c, "render");
        const st = c.subTree;
        c.subTree = Re, process.env.NODE_ENV !== "production" && rn(c, "patch"), E(
          st,
          Re,
          // parent may have changed if it's in a teleport
          f(st.el),
          // anchor may have changed if it's in a fragment
          nt(st),
          c,
          m,
          _
        ), process.env.NODE_ENV !== "production" && ln(c, "patch"), S.el = Re.el, ie === null && Xu(c, Re.el), W && He(W, m), (Le = S.props && S.props.onVnodeUpdated) && He(
          () => it(Le, Z, S, ce),
          m
        ), process.env.NODE_ENV !== "production" && yl(c), process.env.NODE_ENV !== "production" && bs();
      } else {
        let S;
        const { el: H, props: W } = p, { bm: Z, m: ce, parent: ie, root: Le, type: Re } = c, st = hn(p);
        Lt(c, !1), Z && cn(Z), !st && (S = W && W.onVnodeBeforeMount) && it(S, ie, p), Lt(c, !0);
        {
          Le.ce && Le.ce._injectChildStyle(Re), process.env.NODE_ENV !== "production" && rn(c, "render");
          const ot = c.subTree = zr(c);
          process.env.NODE_ENV !== "production" && ln(c, "render"), process.env.NODE_ENV !== "production" && rn(c, "patch"), E(
            null,
            ot,
            g,
            y,
            c,
            m,
            _
          ), process.env.NODE_ENV !== "production" && ln(c, "patch"), p.el = ot.el;
        }
        if (ce && He(ce, m), !st && (S = W && W.onVnodeMounted)) {
          const ot = p;
          He(
            () => it(S, ie, ot),
            m
          );
        }
        (p.shapeFlag & 256 || ie && hn(ie.vnode) && ie.vnode.shapeFlag & 256) && c.a && He(c.a, m), c.isMounted = !0, process.env.NODE_ENV !== "production" && Kc(c), p = g = y = null;
      }
    };
    c.scope.on();
    const O = c.effect = new qi(C);
    c.scope.off();
    const b = c.update = O.run.bind(O), z = c.job = O.runIfDirty.bind(O);
    z.i = c, z.id = c.uid, O.scheduler = () => to(z), Lt(c, !0), process.env.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (S) => cn(c.rtc, S) : void 0, O.onTrigger = c.rtg ? (S) => cn(c.rtg, S) : void 0), b();
  }, K = (c, p, g) => {
    p.component = c;
    const y = c.vnode.props;
    c.vnode = p, c.next = null, Tu(c, p.props, y, g), Hu(c, p.children, g), Et(), Vr(c), Nt();
  }, ze = (c, p, g, y, m, _, D, C, O = !1) => {
    const b = c && c.children, z = c ? c.shapeFlag : 0, S = p.children, { patchFlag: H, shapeFlag: W } = p;
    if (H > 0) {
      if (H & 128) {
        Mt(
          b,
          S,
          g,
          y,
          m,
          _,
          D,
          C,
          O
        );
        return;
      } else if (H & 256) {
        sn(
          b,
          S,
          g,
          y,
          m,
          _,
          D,
          C,
          O
        );
        return;
      }
    }
    W & 8 ? (z & 16 && qe(b, m, _), S !== b && u(g, S)) : z & 16 ? W & 16 ? Mt(
      b,
      S,
      g,
      y,
      m,
      _,
      D,
      C,
      O
    ) : qe(b, m, _, !0) : (z & 8 && u(g, ""), W & 16 && M(
      S,
      g,
      y,
      m,
      _,
      D,
      C,
      O
    ));
  }, sn = (c, p, g, y, m, _, D, C, O) => {
    c = c || fn, p = p || fn;
    const b = c.length, z = p.length, S = Math.min(b, z);
    let H;
    for (H = 0; H < S; H++) {
      const W = p[H] = O ? Tt(p[H]) : Je(p[H]);
      E(
        c[H],
        W,
        g,
        null,
        m,
        _,
        D,
        C,
        O
      );
    }
    b > z ? qe(
      c,
      m,
      _,
      !0,
      !1,
      S
    ) : M(
      p,
      g,
      y,
      m,
      _,
      D,
      C,
      O,
      S
    );
  }, Mt = (c, p, g, y, m, _, D, C, O) => {
    let b = 0;
    const z = p.length;
    let S = c.length - 1, H = z - 1;
    for (; b <= S && b <= H; ) {
      const W = c[b], Z = p[b] = O ? Tt(p[b]) : Je(p[b]);
      if (Bt(W, Z))
        E(
          W,
          Z,
          g,
          null,
          m,
          _,
          D,
          C,
          O
        );
      else
        break;
      b++;
    }
    for (; b <= S && b <= H; ) {
      const W = c[S], Z = p[H] = O ? Tt(p[H]) : Je(p[H]);
      if (Bt(W, Z))
        E(
          W,
          Z,
          g,
          null,
          m,
          _,
          D,
          C,
          O
        );
      else
        break;
      S--, H--;
    }
    if (b > S) {
      if (b <= H) {
        const W = H + 1, Z = W < z ? p[W].el : y;
        for (; b <= H; )
          E(
            null,
            p[b] = O ? Tt(p[b]) : Je(p[b]),
            g,
            Z,
            m,
            _,
            D,
            C,
            O
          ), b++;
      }
    } else if (b > H)
      for (; b <= S; )
        Ge(c[b], m, _, !0), b++;
    else {
      const W = b, Z = b, ce = /* @__PURE__ */ new Map();
      for (b = Z; b <= H; b++) {
        const Ve = p[b] = O ? Tt(p[b]) : Je(p[b]);
        Ve.key != null && (process.env.NODE_ENV !== "production" && ce.has(Ve.key) && N(
          "Duplicate keys found during update:",
          JSON.stringify(Ve.key),
          "Make sure keys are unique."
        ), ce.set(Ve.key, b));
      }
      let ie, Le = 0;
      const Re = H - Z + 1;
      let st = !1, ot = 0;
      const Sn = new Array(Re);
      for (b = 0; b < Re; b++) Sn[b] = 0;
      for (b = W; b <= S; b++) {
        const Ve = c[b];
        if (Le >= Re) {
          Ge(Ve, m, _, !0);
          continue;
        }
        let rt;
        if (Ve.key != null)
          rt = ce.get(Ve.key);
        else
          for (ie = Z; ie <= H; ie++)
            if (Sn[ie - Z] === 0 && Bt(Ve, p[ie])) {
              rt = ie;
              break;
            }
        rt === void 0 ? Ge(Ve, m, _, !0) : (Sn[rt - Z] = b + 1, rt >= ot ? ot = rt : st = !0, E(
          Ve,
          p[rt],
          g,
          null,
          m,
          _,
          D,
          C,
          O
        ), Le++);
      }
      const Nr = st ? Bu(Sn) : fn;
      for (ie = Nr.length - 1, b = Re - 1; b >= 0; b--) {
        const Ve = Z + b, rt = p[Ve], Or = Ve + 1 < z ? p[Ve + 1].el : y;
        Sn[b] === 0 ? E(
          null,
          rt,
          g,
          Or,
          m,
          _,
          D,
          C,
          O
        ) : st && (ie < 0 || b !== Nr[ie] ? Ct(rt, g, Or, 2) : ie--);
      }
    }
  }, Ct = (c, p, g, y, m = null) => {
    const { el: _, type: D, transition: C, children: O, shapeFlag: b } = c;
    if (b & 6) {
      Ct(c.component.subTree, p, g, y);
      return;
    }
    if (b & 128) {
      c.suspense.move(p, g, y);
      return;
    }
    if (b & 64) {
      D.move(c, p, g, xn);
      return;
    }
    if (D === we) {
      s(_, p, g);
      for (let S = 0; S < O.length; S++)
        Ct(O[S], p, g, y);
      s(c.anchor, p, g);
      return;
    }
    if (D === Ns) {
      ne(c, p, g);
      return;
    }
    if (y !== 2 && b & 1 && C)
      if (y === 0)
        C.beforeEnter(_), s(_, p, g), He(() => C.enter(_), m);
      else {
        const { leave: S, delayLeave: H, afterLeave: W } = C, Z = () => s(_, p, g), ce = () => {
          S(_, () => {
            Z(), W && W();
          });
        };
        H ? H(_, Z, ce) : ce();
      }
    else
      s(_, p, g);
  }, Ge = (c, p, g, y = !1, m = !1) => {
    const {
      type: _,
      props: D,
      ref: C,
      children: O,
      dynamicChildren: b,
      shapeFlag: z,
      patchFlag: S,
      dirs: H,
      cacheIndex: W
    } = c;
    if (S === -2 && (m = !1), C != null && Rs(C, null, g, c, !0), W != null && (p.renderCache[W] = void 0), z & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const Z = z & 1 && H, ce = !hn(c);
    let ie;
    if (ce && (ie = D && D.onVnodeBeforeUnmount) && it(ie, p, c), z & 6)
      fe(c.component, g, y);
    else {
      if (z & 128) {
        c.suspense.unmount(g, y);
        return;
      }
      Z && Ft(c, null, p, "beforeUnmount"), z & 64 ? c.type.remove(
        c,
        p,
        g,
        xn,
        y
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== we || S > 0 && S & 64) ? qe(
        b,
        p,
        g,
        !1,
        !0
      ) : (_ === we && S & 384 || !m && z & 16) && qe(O, p, g), y && k(c);
    }
    (ce && (ie = D && D.onVnodeUnmounted) || Z) && He(() => {
      ie && it(ie, p, c), Z && Ft(c, null, p, "unmounted");
    }, g);
  }, k = (c) => {
    const { type: p, el: g, anchor: y, transition: m } = c;
    if (p === we) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && m && !m.persisted ? c.children.forEach((D) => {
        D.type === he ? o(D.el) : k(D);
      }) : R(g, y);
      return;
    }
    if (p === Ns) {
      V(c);
      return;
    }
    const _ = () => {
      o(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: D, delayLeave: C } = m, O = () => D(g, _);
      C ? C(c.el, _, O) : O();
    } else
      _();
  }, R = (c, p) => {
    let g;
    for (; c !== p; )
      g = h(c), o(c), c = g;
    o(p);
  }, fe = (c, p, g) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && kc(c);
    const { bum: y, scope: m, job: _, subTree: D, um: C, m: O, a: b } = c;
    kr(O), kr(b), y && cn(y), m.stop(), _ && (_.flags |= 8, Ge(D, c, p, g)), C && He(C, p), He(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), process.env.NODE_ENV !== "production" && qc(c);
  }, qe = (c, p, g, y = !1, m = !1, _ = 0) => {
    for (let D = _; D < c.length; D++)
      Ge(c[D], p, g, y, m);
  }, nt = (c) => {
    if (c.shapeFlag & 6)
      return nt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = h(c.anchor || c.el), g = p && p[Qc];
    return g ? h(g) : p;
  };
  let Rt = !1;
  const Er = (c, p, g) => {
    c == null ? p._vnode && Ge(p._vnode, null, null, !0) : E(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      g
    ), p._vnode = c, Rt || (Rt = !0, Vr(), vl(), Rt = !1);
  }, xn = {
    p: E,
    um: Ge,
    m: Ct,
    r: k,
    mt: De,
    mc: M,
    pc: ze,
    pbc: le,
    n: nt,
    o: e
  };
  return {
    render: Er,
    hydrate: void 0,
    createApp: Du(Er)
  };
}
function yo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Es(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (A(s) && A(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = Tt(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && Es(i, l)), l.type === rs && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === he && !l.el && (l.el = i.el);
    }
}
function Bu(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const d = e[s];
    if (d !== 0) {
      if (o = n[n.length - 1], e[o] < d) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < d ? r = l + 1 : i = l;
      d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Jl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jl(t);
}
function kr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Uu = Symbol.for("v-scx"), Ku = () => {
  {
    const e = pt(Uu);
    return e || process.env.NODE_ENV !== "production" && N(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function vn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !L(t) && N(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Yl(e, t, n);
}
function Yl(e, t, n = re) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && N(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && N(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && N(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = pe({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = N);
  const a = t && s || !t && r !== "post";
  let d;
  if (Jn) {
    if (r === "sync") {
      const v = Ku();
      d = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!a) {
      const v = () => {
      };
      return v.stop = Ee, v.resume = Ee, v.pause = Ee, v;
    }
  }
  const u = Ne;
  l.call = (v, T, E) => tt(v, u, T, E);
  let f = !1;
  r === "post" ? l.scheduler = (v) => {
    He(v, u && u.suspense);
  } : r !== "sync" && (f = !0, l.scheduler = (v, T) => {
    T ? v() : to(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), f && (v.flags |= 2, u && (v.id = u.uid, v.i = u));
  };
  const h = Ic(e, t, l);
  return Jn && (d ? d.push(h) : a && h()), h;
}
function Gu(e, t, n) {
  const s = this.proxy, o = te(e) ? e.includes(".") ? Zl(s, e) : () => s[e] : e.bind(s, s);
  let r;
  L(t) ? r = t : (r = t.handler, n = t);
  const i = is(this), l = Yl(o, r.bind(s), n);
  return i(), l;
}
function Zl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const qu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ae(t)}Modifiers`] || e[`${Pt(t)}Modifiers`];
function Ju(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || re;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [f]
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(zt(Ae(t)) in f)) && N(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${zt(Ae(t))}" prop.`
        );
      else {
        const h = u[t];
        L(h) && (h(...n) || N(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && qu(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => te(u) ? u.trim() : u)), i.number && (o = n.map(Wi))), process.env.NODE_ENV !== "production" && Zc(e, t, o), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[zt(u)] && N(
      `Event "${u}" is emitted in component ${io(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Pt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = zt(t)] || // also try camelCase event handler (#2249)
  s[l = zt(Ae(t))];
  !a && r && (a = s[l = zt(Pt(t))]), a && tt(
    a,
    e,
    6,
    o
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, tt(
      d,
      e,
      6,
      o
    );
  }
}
function Ql(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!L(e)) {
    const a = (d) => {
      const u = Ql(d, t, !0);
      u && (l = !0, pe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (X(e) && s.set(e, null), null) : (A(r) ? r.forEach((a) => i[a] = null) : pe(i, r), X(e) && s.set(e, i), i);
}
function oo(e, t) {
  return !e || !Xn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, Pt(t)) || J(e, t));
}
let jo = !1;
function Hs() {
  jo = !0;
}
function zr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: a,
    render: d,
    renderCache: u,
    props: f,
    data: h,
    setupState: v,
    ctx: T,
    inheritAttrs: E
  } = e, j = Ms(e);
  let F, Y;
  process.env.NODE_ENV !== "production" && (jo = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = o || s, G = process.env.NODE_ENV !== "production" && v.__isScriptSetup ? new Proxy(V, {
        get(B, ae, M) {
          return N(
            `Property '${String(
              ae
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(B, ae, M);
        }
      }) : V;
      F = Je(
        d.call(
          G,
          V,
          u,
          process.env.NODE_ENV !== "production" ? ft(f) : f,
          v,
          h,
          T
        )
      ), Y = l;
    } else {
      const V = t;
      process.env.NODE_ENV !== "production" && l === f && Hs(), F = Je(
        V.length > 1 ? V(
          process.env.NODE_ENV !== "production" ? ft(f) : f,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Hs(), ft(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : V(
          process.env.NODE_ENV !== "production" ? ft(f) : f,
          null
        )
      ), Y = t.props ? l : Yu(l);
    }
  } catch (V) {
    Hn.length = 0, ns(V, e, 1), F = Oe(he);
  }
  let $ = F, ne;
  if (process.env.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && ([$, ne] = Xl(F)), Y && E !== !1) {
    const V = Object.keys(Y), { shapeFlag: G } = $;
    if (V.length) {
      if (G & 7)
        r && V.some(Ts) && (Y = Zu(
          Y,
          r
        )), $ = ht($, Y, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !jo && $.type !== he) {
        const B = Object.keys(l), ae = [], M = [];
        for (let ee = 0, le = B.length; ee < le; ee++) {
          const I = B[ee];
          Xn(I) ? Ts(I) || ae.push(I[2].toLowerCase() + I.slice(3)) : M.push(I);
        }
        M.length && N(
          `Extraneous non-props attributes (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ae.length && N(
          `Extraneous non-emits event listeners (${ae.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Wr($) && N(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), $ = ht($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Wr($) && N(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Kn($, n.transition)), process.env.NODE_ENV !== "production" && ne ? ne($) : F = $, Ms(j), F;
}
const Xl = (e) => {
  const t = e.children, n = e.dynamicChildren, s = ur(t, !1);
  if (s) {
    if (process.env.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return Xl(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Je(s), i];
};
function ur(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Ue(o)) {
      if (o.type !== he || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ur(n.children);
      }
    } else
      return;
  }
  return n;
}
const Yu = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Xn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Zu = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ts(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Wr = (e) => e.shapeFlag & 7 || e.type === he;
function Qu(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || l) && dt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Br(s, i, d) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (i[h] !== s[h] && !oo(d, h))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Br(s, i, d) : !0 : !!i;
  return !1;
}
function Br(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !oo(n, r))
      return !0;
  }
  return !1;
}
function Xu({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ea = (e) => e.__isSuspense;
function ef(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : gl(e);
}
const we = Symbol.for("v-fgt"), rs = Symbol.for("v-txt"), he = Symbol.for("v-cmt"), Ns = Symbol.for("v-stc"), Hn = [];
let ke = null;
function se(e = !1) {
  Hn.push(ke = e ? null : []);
}
function tf() {
  Hn.pop(), ke = Hn[Hn.length - 1] || null;
}
let qn = 1;
function Ur(e, t = !1) {
  qn += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function ta(e) {
  return e.dynamicChildren = qn > 0 ? ke || fn : null, tf(), qn > 0 && ke && ke.push(e), e;
}
function ye(e, t, n, s, o, r) {
  return ta(
    P(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function Be(e, t, n, s, o) {
  return ta(
    Oe(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Ue(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = ws.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const nf = (...e) => sa(
  ...e
), na = ({ key: e }) => e ?? null, Os = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? te(e) || ge(e) || L(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function P(e, t = null, n = null, s = 0, o = null, r = e === we ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && na(t),
    ref: t && Os(t),
    scopeId: wl,
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
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: me
  };
  return l ? (dr(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= te(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && N("VNode created with invalid key (NaN). VNode type:", a.type), qn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ke.push(a), a;
}
const Oe = process.env.NODE_ENV !== "production" ? nf : sa;
function sa(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === $l) && (process.env.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = he), Ue(e)) {
    const l = ht(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && dr(l, n), qn > 0 && !r && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (aa(e) && (e = e.__vccOpts), t) {
    t = sf(t);
    let { class: l, style: a } = t;
    l && !te(l) && (t.class = ve(l)), X(a) && (Is(a) && !A(a) && (a = pe({}, a)), t.style = Zt(a));
  }
  const i = te(e) ? 1 : ea(e) ? 128 : Nl(e) ? 64 : X(e) ? 4 : L(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Is(e) && (e = U(e), N(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), P(
    e,
    t,
    n,
    s,
    o,
    i,
    r,
    !0
  );
}
function sf(e) {
  return e ? Is(e) || zl(e) ? pe({}, e) : e : null;
}
function ht(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, d = t ? ra(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && na(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? A(r) ? r.concat(Os(t)) : [r, Os(t)] : Os(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && A(l) ? l.map(oa) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && ht(e.ssContent),
    ssFallback: e.ssFallback && ht(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Kn(
    u,
    a.clone(u)
  ), u;
}
function oa(e) {
  const t = ht(e);
  return A(e.children) && (t.children = e.children.map(oa)), t;
}
function fr(e = " ", t = 0) {
  return Oe(rs, null, e, t);
}
function yt(e = "", t = !1) {
  return t ? (se(), Be(he, null, e)) : Oe(he, null, e);
}
function Je(e) {
  return e == null || typeof e == "boolean" ? Oe(he) : A(e) ? Oe(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ue(e) ? Tt(e) : Oe(rs, null, String(e));
}
function Tt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ht(e);
}
function dr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (A(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), dr(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !zl(t) ? t._ctx = me : o === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else L(t) ? (t = { default: t, _ctx: me }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [fr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ra(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ve([t.class, s.class]));
      else if (o === "style")
        t.style = Zt([t.style, s.style]);
      else if (Xn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(A(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function it(e, t, n, s = null) {
  tt(e, t, 7, [
    n,
    s
  ]);
}
const of = Ll();
let rf = 0;
function lf(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || of, r = {
    uid: rf++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new oc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Bl(s, o),
    emitsOptions: Ql(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: re,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: re,
    data: re,
    props: re,
    attrs: re,
    slots: re,
    refs: re,
    setupState: re,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = vu(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Ju.bind(null, r), e.ce && e.ce(r), r;
}
let Ne = null;
const At = () => Ne || me;
let js, ko;
{
  const e = ts(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  js = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ne = n
  ), ko = t(
    "__VUE_SSR_SETTERS__",
    (n) => Jn = n
  );
}
const is = (e) => {
  const t = Ne;
  return js(e), e.scope.on(), () => {
    e.scope.off(), js(t);
  };
}, Kr = () => {
  Ne && Ne.scope.off(), js(null);
}, af = /* @__PURE__ */ En("slot,component");
function zo(e, { isNativeTag: t }) {
  (af(e) || t(e)) && N(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ia(e) {
  return e.vnode.shapeFlag & 4;
}
let Jn = !1;
function cf(e, t = !1, n = !1) {
  t && ko(t);
  const { props: s, children: o } = e.vnode, r = ia(e);
  xu(e, s, r, t), Lu(e, o, n);
  const i = r ? uf(e, t) : void 0;
  return t && ko(!1), i;
}
function uf(e, t) {
  var n;
  const s = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (s.name && zo(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        zo(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        El(r[i]);
    }
    s.compilerOptions && ff() && N(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ml), process.env.NODE_ENV !== "production" && mu(e);
  const { setup: o } = s;
  if (o) {
    Et();
    const r = e.setupContext = o.length > 1 ? pf(e) : null, i = is(e), l = Nn(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? ft(e.props) : e.props,
        r
      ]
    ), a = Jo(l);
    if (Nt(), i(), (a || e.sp) && !hn(e) && Tl(e), a) {
      if (l.then(Kr, Kr), t)
        return l.then((d) => {
          Gr(e, d, t);
        }).catch((d) => {
          ns(d, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = s.name) != null ? n : "Anonymous";
        N(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Gr(e, l, t);
  } else
    la(e, t);
}
function Gr(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) ? (process.env.NODE_ENV !== "production" && Ue(t) && N(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = fl(t), process.env.NODE_ENV !== "production" && _u(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && N(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), la(e, n);
}
const ff = () => !0;
function la(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ee);
  {
    const o = is(e);
    Et();
    try {
      bu(e);
    } finally {
      Nt(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !s.render && e.render === Ee && !t && (s.template ? N(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : N("Component is missing template or render function: ", s));
}
const qr = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Hs(), be(e, "get", ""), e[t];
  },
  set() {
    return N("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return N("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return be(e, "get", ""), e[t];
  }
};
function df(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return be(e, "get", "$slots"), t[n];
    }
  });
}
function pf(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && N("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (A(n) ? s = "array" : ge(n) && (s = "ref")), s !== "object" && N(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, qr));
      },
      get slots() {
        return s || (s = df(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, qr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function ro(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fl(Oc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Jt)
        return Jt[n](e);
    },
    has(t, n) {
      return n in t || n in Jt;
    }
  })) : e.proxy;
}
const hf = /(?:^|[-_])(\w)/g, gf = (e) => e.replace(hf, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function pr(e, t = !0) {
  return L(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function io(e, t, n = !1) {
  let s = pr(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? gf(s) : n ? "App" : "Anonymous";
}
function aa(e) {
  return L(e) && "__vccOpts" in e;
}
const Q = (e, t) => {
  const n = Tc(e, t, Jn);
  if (process.env.NODE_ENV !== "production") {
    const s = At();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function vf(e, t, n) {
  const s = arguments.length;
  return s === 2 ? X(t) && !A(t) ? Ue(t) ? Oe(e, null, [t]) : Oe(e, t) : Oe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ue(n) && (n = [n]), Oe(e, t, n));
}
function mf() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(f) {
      return X(f) ? f.__isVue ? ["div", e, "VueInstance"] : ge(f) ? [
        "div",
        {},
        ["span", e, u(f)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in f ? f._value : f),
        ">"
      ] : Gt(f) ? [
        "div",
        {},
        ["span", e, Me(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${wt(f) ? " (readonly)" : ""}`
      ] : wt(f) ? [
        "div",
        {},
        ["span", e, Me(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...r(f.$)
        ];
    }
  };
  function r(f) {
    const h = [];
    f.type.props && f.props && h.push(i("props", U(f.props))), f.setupState !== re && h.push(i("setup", f.setupState)), f.data !== re && h.push(i("data", U(f.data)));
    const v = a(f, "computed");
    v && h.push(i("computed", v));
    const T = a(f, "inject");
    return T && h.push(i("injected", T)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), h;
  }
  function i(f, h) {
    return h = pe({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((v) => [
          "div",
          {},
          ["span", s, v + ": "],
          l(h[v], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, h = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", s, f] : X(f) ? ["object", { object: h ? U(f) : f }] : ["span", n, String(f)];
  }
  function a(f, h) {
    const v = f.type;
    if (L(v))
      return;
    const T = {};
    for (const E in f.ctx)
      d(v, E, h) && (T[E] = f.ctx[E]);
    return T;
  }
  function d(f, h, v) {
    const T = f[v];
    if (A(T) && T.includes(h) || X(T) && h in T || f.extends && d(f.extends, h, v) || f.mixins && f.mixins.some((E) => d(E, h, v)))
      return !0;
  }
  function u(f) {
    return Me(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Jr = "3.5.13", Cn = process.env.NODE_ENV !== "production" ? N : Ee;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Wo;
const Yr = typeof window < "u" && window.trustedTypes;
if (Yr)
  try {
    Wo = /* @__PURE__ */ Yr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Cn(`Error creating trusted types policy: ${e}`);
  }
const ca = Wo ? (e) => Wo.createHTML(e) : (e) => e, _f = "http://www.w3.org/2000/svg", yf = "http://www.w3.org/1998/Math/MathML", mt = typeof document < "u" ? document : null, Zr = mt && /* @__PURE__ */ mt.createElement("template"), bf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? mt.createElementNS(_f, e) : t === "mathml" ? mt.createElementNS(yf, e) : n ? mt.createElement(e, { is: n }) : mt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => mt.createTextNode(e),
  createComment: (e) => mt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => mt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      Zr.innerHTML = ca(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Zr.content;
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
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Dt = "transition", In = "animation", Yn = Symbol("_vtc"), ua = {
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
}, wf = /* @__PURE__ */ pe(
  {},
  Ol,
  ua
), Ef = (e) => (e.displayName = "Transition", e.props = wf, e), hr = /* @__PURE__ */ Ef(
  (e, { slots: t }) => vf(tu, Nf(e), t)
), Ht = (e, t = []) => {
  A(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Qr = (e) => e ? A(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Nf(e) {
  const t = {};
  for (const I in e)
    I in ua || (t[I] = e[I]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = r,
    appearActiveClass: d = i,
    appearToClass: u = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: v = `${n}-leave-to`
  } = e, T = Of(o), E = T && T[0], j = T && T[1], {
    onBeforeEnter: F,
    onEnter: Y,
    onEnterCancelled: $,
    onLeave: ne,
    onLeaveCancelled: V,
    onBeforeAppear: G = F,
    onAppear: B = Y,
    onAppearCancelled: ae = $
  } = t, M = (I, ue, Ce, De) => {
    I._enterCancelled = De, jt(I, ue ? u : l), jt(I, ue ? d : i), Ce && Ce();
  }, ee = (I, ue) => {
    I._isLeaving = !1, jt(I, f), jt(I, v), jt(I, h), ue && ue();
  }, le = (I) => (ue, Ce) => {
    const De = I ? B : Y, _e = () => M(ue, I, Ce);
    Ht(De, [ue, _e]), Xr(() => {
      jt(ue, I ? a : r), vt(ue, I ? u : l), Qr(De) || ei(ue, s, E, _e);
    });
  };
  return pe(t, {
    onBeforeEnter(I) {
      Ht(F, [I]), vt(I, r), vt(I, i);
    },
    onBeforeAppear(I) {
      Ht(G, [I]), vt(I, a), vt(I, d);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(I, ue) {
      I._isLeaving = !0;
      const Ce = () => ee(I, ue);
      vt(I, f), I._enterCancelled ? (vt(I, h), si()) : (si(), vt(I, h)), Xr(() => {
        I._isLeaving && (jt(I, f), vt(I, v), Qr(ne) || ei(I, s, j, Ce));
      }), Ht(ne, [I, Ce]);
    },
    onEnterCancelled(I) {
      M(I, !1, void 0, !0), Ht($, [I]);
    },
    onAppearCancelled(I) {
      M(I, !0, void 0, !0), Ht(ae, [I]);
    },
    onLeaveCancelled(I) {
      ee(I), Ht(V, [I]);
    }
  });
}
function Of(e) {
  if (e == null)
    return null;
  if (X(e))
    return [bo(e.enter), bo(e.leave)];
  {
    const t = bo(e);
    return [t, t];
  }
}
function bo(e) {
  const t = Ja(e);
  return process.env.NODE_ENV !== "production" && Rc(t, "<transition> explicit duration"), t;
}
function vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Yn] || (e[Yn] = /* @__PURE__ */ new Set())).add(t);
}
function jt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Yn];
  n && (n.delete(t), n.size || (e[Yn] = void 0));
}
function Xr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Cf = 0;
function ei(e, t, n, s) {
  const o = e._endId = ++Cf, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = Df(e, t);
  if (!i)
    return s();
  const d = i + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(d, h), r();
  }, h = (v) => {
    v.target === e && ++u >= a && f();
  };
  setTimeout(() => {
    u < a && f();
  }, l + 1), e.addEventListener(d, h);
}
function Df(e, t) {
  const n = window.getComputedStyle(e), s = (T) => (n[T] || "").split(", "), o = s(`${Dt}Delay`), r = s(`${Dt}Duration`), i = ti(o, r), l = s(`${In}Delay`), a = s(`${In}Duration`), d = ti(l, a);
  let u = null, f = 0, h = 0;
  t === Dt ? i > 0 && (u = Dt, f = i, h = r.length) : t === In ? d > 0 && (u = In, f = d, h = a.length) : (f = Math.max(i, d), u = f > 0 ? i > d ? Dt : In : null, h = u ? u === Dt ? r.length : a.length : 0);
  const v = u === Dt && /\b(transform|all)(,|$)/.test(
    s(`${Dt}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: h,
    hasTransform: v
  };
}
function ti(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ni(n) + ni(e[s])));
}
function ni(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function si() {
  return document.body.offsetHeight;
}
function xf(e, t, n) {
  const s = e[Yn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ks = Symbol("_vod"), fa = Symbol("_vsh"), Zn = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[ks] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : $n(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), $n(e, !0), s.enter(e)) : s.leave(e, () => {
      $n(e, !1);
    }) : $n(e, t));
  },
  beforeUnmount(e, { value: t }) {
    $n(e, t);
  }
};
process.env.NODE_ENV !== "production" && (Zn.name = "show");
function $n(e, t) {
  e.style.display = t ? e[ks] : "none", e[fa] = !t;
}
const Sf = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Tf = /(^|;)\s*display\s*:/;
function Vf(e, t, n) {
  const s = e.style, o = te(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (te(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Cs(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Cs(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Cs(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Sf];
      i && (n += ";" + i), s.cssText = n, r = Tf.test(n);
    }
  } else t && e.removeAttribute("style");
  ks in e && (e[ks] = r ? s.display : "", e[fa] && (s.display = "none"));
}
const If = /[^\\];\s*$/, oi = /\s*!important$/;
function Cs(e, t, n) {
  if (A(n))
    n.forEach((s) => Cs(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && If.test(n) && Cn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = $f(e, t);
    oi.test(n) ? e.setProperty(
      Pt(s),
      n.replace(oi, ""),
      "important"
    ) : e[s] = n;
  }
}
const ri = ["Webkit", "Moz", "ms"], wo = {};
function $f(e, t) {
  const n = wo[t];
  if (n)
    return n;
  let s = Ae(t);
  if (s !== "filter" && s in e)
    return wo[t] = s;
  s = Yt(s);
  for (let o = 0; o < ri.length; o++) {
    const r = ri[o] + s;
    if (r in e)
      return wo[t] = r;
  }
  return t;
}
const ii = "http://www.w3.org/1999/xlink";
function li(e, t, n, s, o, r = tc(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ii, t.slice(6, t.length)) : e.setAttributeNS(ii, t, n) : n == null || r && !Bi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Xe(n) ? String(n) : n
  );
}
function ai(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ca(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Bi(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && Cn(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function da(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Pf(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ci = Symbol("_vei");
function Af(e, t, n, s, o = null) {
  const r = e[ci] || (e[ci] = {}), i = r[t];
  if (s && i)
    i.value = process.env.NODE_ENV !== "production" ? fi(s, t) : s;
  else {
    const [l, a] = Mf(t);
    if (s) {
      const d = r[t] = Lf(
        process.env.NODE_ENV !== "production" ? fi(s, t) : s,
        o
      );
      da(e, l, d, a);
    } else i && (Pf(e, l, i, a), r[t] = void 0);
  }
}
const ui = /(?:Once|Passive|Capture)$/;
function Mf(e) {
  let t;
  if (ui.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ui); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pt(e.slice(2)), t];
}
let Eo = 0;
const Rf = /* @__PURE__ */ Promise.resolve(), Ff = () => Eo || (Rf.then(() => Eo = 0), Eo = Date.now());
function Lf(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    tt(
      Hf(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Ff(), n;
}
function fi(e, t) {
  return L(e) || A(e) ? e : (Cn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Ee);
}
function Hf(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, jf = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? xf(e, s, i) : t === "style" ? Vf(e, n, s) : Xn(t) ? Ts(t) || Af(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kf(e, t, s, i)) ? (ai(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && li(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !te(s)) ? ai(e, Ae(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), li(e, t, s, i));
};
function kf(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && di(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return di(t) && te(n) ? !1 : t in e;
}
const pi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return A(t) ? (n) => cn(t, n) : t;
}, No = Symbol("_assign"), hi = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Js(t);
    da(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Wi(zs(i)) : zs(i)
      );
      e[No](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, pn(() => {
        e._assigning = !1;
      });
    }), e[No] = pi(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    gi(e, t);
  },
  beforeUpdate(e, t, n) {
    e[No] = pi(n);
  },
  updated(e, { value: t }) {
    e._assigning || gi(e, t);
  }
};
function gi(e, t) {
  const n = e.multiple, s = A(t);
  if (n && !s && !Js(t)) {
    process.env.NODE_ENV !== "production" && Cn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], l = zs(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((d) => String(d) === String(l)) : i.selected = sc(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (Zs(zs(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function zs(e) {
  return "_value" in e ? e._value : e.value;
}
const zf = ["ctrl", "shift", "alt", "meta"], Wf = {
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
  exact: (e, t) => zf.some((n) => e[`${n}Key`] && !t.includes(n))
}, jn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = Wf[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...r);
  });
}, Bf = /* @__PURE__ */ pe({ patchProp: jf }, bf);
let vi;
function Uf() {
  return vi || (vi = ku(Bf));
}
const Ws = (...e) => {
  Uf().render(...e);
};
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Kf() {
  mf();
}
process.env.NODE_ENV !== "production" && Kf();
function Gf(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function qf(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ds;
const Ke = "__TAURI_TO_IPC_KEY__";
function Jf(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function w(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Yf {
  get rid() {
    return Gf(this, Ds, "f");
  }
  constructor(t) {
    Ds.set(this, void 0), qf(this, Ds, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return w("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ds = /* @__PURE__ */ new WeakMap();
class kn {
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
    return new mn(this.width * t, this.height * t);
  }
  [Ke]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ke]();
  }
}
class mn {
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
    return new kn(this.width / t, this.height / t);
  }
  [Ke]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ke]();
  }
}
class an {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof kn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof mn ? this.size : this.size.toPhysical(t);
  }
  [Ke]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Ke]();
  }
}
class pa {
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
    return new ct(this.x * t, this.y * t);
  }
  [Ke]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ke]();
  }
}
class ct {
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
    return new pa(this.x / t, this.y / t);
  }
  [Ke]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ke]();
  }
}
class ps {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof pa ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof ct ? this.position : this.position.toPhysical(t);
  }
  [Ke]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Ke]();
  }
}
var je;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(je || (je = {}));
async function ha(e, t) {
  await w("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function ga(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return w("plugin:event|listen", {
    event: e,
    target: o,
    handler: Jf(t)
  }).then((r) => async () => ha(e, r));
}
async function Zf(e, t, n) {
  return ga(e, (s) => {
    ha(e, s.id), t(s);
  }, n);
}
async function Qf(e, t) {
  await w("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Xf(e, t, n) {
  await w("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class zn extends Yf {
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
    return w("plugin:image|new", {
      rgba: Bs(t),
      width: n,
      height: s
    }).then((o) => new zn(o));
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
    return w("plugin:image|from_bytes", {
      bytes: Bs(t)
    }).then((n) => new zn(n));
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
    return w("plugin:image|from_path", { path: t }).then((n) => new zn(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return w("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return w("plugin:image|size", { rid: this.rid });
  }
}
function Bs(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof zn ? e.rid : e;
}
var Bo;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Bo || (Bo = {}));
class ed {
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
var mi;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(mi || (mi = {}));
function va() {
  return new ma(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Oo() {
  return w("plugin:window|get_all_windows").then((e) => e.map((t) => new ma(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Co = ["tauri://created", "tauri://error"];
class ma {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || w("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (s = n.parent) === null || s === void 0 ? void 0 : s.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (o) => this.emit("tauri://error", o));
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
    return (n = (await Oo()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return va();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Oo();
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
    for (const t of await Oo())
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
    } : ga(t, n, {
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
    } : Zf(t, n, {
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
    if (Co.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Qf(t, n);
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
    if (Co.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Xf(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Co.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return w("plugin:window|scale_factor", {
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
    return w("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new ct(t));
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
    return w("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new ct(t));
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
    return w("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new mn(t));
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
    return w("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new mn(t));
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
    return w("plugin:window|is_fullscreen", {
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
    return w("plugin:window|is_minimized", {
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
    return w("plugin:window|is_maximized", {
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
    return w("plugin:window|is_focused", {
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
    return w("plugin:window|is_decorated", {
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
    return w("plugin:window|is_resizable", {
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
    return w("plugin:window|is_maximizable", {
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
    return w("plugin:window|is_minimizable", {
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
    return w("plugin:window|is_closable", {
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
    return w("plugin:window|is_visible", {
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
    return w("plugin:window|title", {
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
    return w("plugin:window|theme", {
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
    return w("plugin:window|is_always_on_top", {
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
    return w("plugin:window|center", {
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
    return t && (t === Bo.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), w("plugin:window|request_user_attention", {
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
    return w("plugin:window|set_resizable", {
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
    return w("plugin:window|set_enabled", {
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
    return w("plugin:window|is_enabled", {
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
    return w("plugin:window|set_maximizable", {
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
    return w("plugin:window|set_minimizable", {
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
    return w("plugin:window|set_closable", {
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
    return w("plugin:window|set_title", {
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
    return w("plugin:window|maximize", {
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
    return w("plugin:window|unmaximize", {
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
    return w("plugin:window|toggle_maximize", {
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
    return w("plugin:window|minimize", {
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
    return w("plugin:window|unminimize", {
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
    return w("plugin:window|show", {
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
    return w("plugin:window|hide", {
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
    return w("plugin:window|close", {
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
    return w("plugin:window|destroy", {
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
    return w("plugin:window|set_decorations", {
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
    return w("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return w("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return w("plugin:window|set_effects", {
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
    return w("plugin:window|set_always_on_top", {
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
    return w("plugin:window|set_always_on_bottom", {
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
    return w("plugin:window|set_content_protected", {
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
    return w("plugin:window|set_size", {
      label: this.label,
      value: t instanceof an ? t : new an(t)
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
    return w("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof an ? t : t ? new an(t) : null
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
    return w("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof an ? t : t ? new an(t) : null
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
    return w("plugin:window|set_size_constraints", {
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
    return w("plugin:window|set_position", {
      label: this.label,
      value: t instanceof ps ? t : new ps(t)
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
    return w("plugin:window|set_fullscreen", {
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
    return w("plugin:window|set_focus", {
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
    return w("plugin:window|set_icon", {
      label: this.label,
      value: Bs(t)
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
    return w("plugin:window|set_skip_taskbar", {
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
    return w("plugin:window|set_cursor_grab", {
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
    return w("plugin:window|set_cursor_visible", {
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
    return w("plugin:window|set_cursor_icon", {
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
    return w("plugin:window|set_background_color", { color: t });
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
    return w("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof ps ? t : new ps(t)
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
    return w("plugin:window|set_ignore_cursor_events", {
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
    return w("plugin:window|start_dragging", {
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
    return w("plugin:window|start_resize_dragging", {
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
    return w("plugin:window|set_badge_count", {
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
    return w("plugin:window|set_badge_label", {
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
    return w("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Bs(t) : void 0
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
    return w("plugin:window|set_progress_bar", {
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
    return w("plugin:window|set_visible_on_all_workspaces", {
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
    return w("plugin:window|set_title_bar_style", {
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
    return w("plugin:window|set_theme", {
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
    return this.listen(je.WINDOW_RESIZED, (n) => {
      n.payload = new mn(n.payload), t(n);
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
    return this.listen(je.WINDOW_MOVED, (n) => {
      n.payload = new ct(n.payload), t(n);
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
    return this.listen(je.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new ed(n);
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
    const n = await this.listen(je.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new ct(i.payload.position)
        }
      });
    }), s = await this.listen(je.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new ct(i.payload.position)
        }
      });
    }), o = await this.listen(je.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new ct(i.payload.position)
        }
      });
    }), r = await this.listen(je.DRAG_LEAVE, (i) => {
      t({ ...i, payload: { type: "leave" } });
    });
    return () => {
      n(), o(), s(), r();
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
    const n = await this.listen(je.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(je.WINDOW_BLUR, (o) => {
      t({ ...o, payload: !1 });
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
    return this.listen(je.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(je.WINDOW_THEME_CHANGED, t);
  }
}
var _i;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(_i || (_i = {}));
var yi;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(yi || (yi = {}));
var bi;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(bi || (bi = {}));
function td(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new ct(e.position),
    size: new mn(e.size)
  };
}
async function nd(e, t) {
  return w("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(td);
}
const _a = Symbol(), xs = "el", sd = "is-", kt = (e, t, n, s, o) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), s && (r += `__${s}`), o && (r += `--${o}`), r;
}, ya = Symbol("namespaceContextKey"), od = (e) => {
  const t = e || (At() ? pt(ya, de(xs)) : de(xs));
  return Q(() => x(t) || xs);
}, gr = (e, t) => {
  const n = od(t);
  return {
    namespace: n,
    b: (E = "") => kt(n.value, e, E, "", ""),
    e: (E) => E ? kt(n.value, e, "", E, "") : "",
    m: (E) => E ? kt(n.value, e, "", "", E) : "",
    be: (E, j) => E && j ? kt(n.value, e, E, j, "") : "",
    em: (E, j) => E && j ? kt(n.value, e, "", E, j) : "",
    bm: (E, j) => E && j ? kt(n.value, e, E, "", j) : "",
    bem: (E, j, F) => E && j && F ? kt(n.value, e, E, j, F) : "",
    is: (E, ...j) => {
      const F = j.length >= 1 ? j[0] : !0;
      return E && F ? `${sd}${E}` : "";
    },
    cssVar: (E) => {
      const j = {};
      for (const F in E)
        E[F] && (j[`--${n.value}-${F}`] = E[F]);
      return j;
    },
    cssVarName: (E) => `--${n.value}-${E}`,
    cssVarBlock: (E) => {
      const j = {};
      for (const F in E)
        E[F] && (j[`--${n.value}-${e}-${F}`] = E[F]);
      return j;
    },
    cssVarBlockName: (E) => `--${n.value}-${e}-${E}`
  };
};
var rd = typeof global == "object" && global && global.Object === Object && global, id = typeof self == "object" && self && self.Object === Object && self, vr = rd || id || Function("return this")(), yn = vr.Symbol, ba = Object.prototype, ld = ba.hasOwnProperty, ad = ba.toString, Pn = yn ? yn.toStringTag : void 0;
function cd(e) {
  var t = ld.call(e, Pn), n = e[Pn];
  try {
    e[Pn] = void 0;
    var s = !0;
  } catch {
  }
  var o = ad.call(e);
  return s && (t ? e[Pn] = n : delete e[Pn]), o;
}
var ud = Object.prototype, fd = ud.toString;
function dd(e) {
  return fd.call(e);
}
var pd = "[object Null]", hd = "[object Undefined]", wi = yn ? yn.toStringTag : void 0;
function wa(e) {
  return e == null ? e === void 0 ? hd : pd : wi && wi in Object(e) ? cd(e) : dd(e);
}
function gd(e) {
  return e != null && typeof e == "object";
}
var vd = "[object Symbol]";
function mr(e) {
  return typeof e == "symbol" || gd(e) && wa(e) == vd;
}
function md(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var _r = Array.isArray, Ei = yn ? yn.prototype : void 0, Ni = Ei ? Ei.toString : void 0;
function Ea(e) {
  if (typeof e == "string")
    return e;
  if (_r(e))
    return md(e, Ea) + "";
  if (mr(e))
    return Ni ? Ni.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Na(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var _d = "[object AsyncFunction]", yd = "[object Function]", bd = "[object GeneratorFunction]", wd = "[object Proxy]";
function Ed(e) {
  if (!Na(e))
    return !1;
  var t = wa(e);
  return t == yd || t == bd || t == _d || t == wd;
}
var Do = vr["__core-js_shared__"], Oi = function() {
  var e = /[^.]+$/.exec(Do && Do.keys && Do.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nd(e) {
  return !!Oi && Oi in e;
}
var Od = Function.prototype, Cd = Od.toString;
function Dd(e) {
  if (e != null) {
    try {
      return Cd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xd = /[\\^$.*+?()[\]{}|]/g, Sd = /^\[object .+?Constructor\]$/, Td = Function.prototype, Vd = Object.prototype, Id = Td.toString, $d = Vd.hasOwnProperty, Pd = RegExp(
  "^" + Id.call($d).replace(xd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ad(e) {
  if (!Na(e) || Nd(e))
    return !1;
  var t = Ed(e) ? Pd : Sd;
  return t.test(Dd(e));
}
function Md(e, t) {
  return e?.[t];
}
function Oa(e, t) {
  var n = Md(e, t);
  return Ad(n) ? n : void 0;
}
function Rd(e, t) {
  return e === t || e !== e && t !== t;
}
var Fd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ld = /^\w*$/;
function Hd(e, t) {
  if (_r(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || mr(e) ? !0 : Ld.test(e) || !Fd.test(e) || t != null && e in Object(t);
}
var Qn = Oa(Object, "create");
function jd() {
  this.__data__ = Qn ? Qn(null) : {}, this.size = 0;
}
function kd(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zd = "__lodash_hash_undefined__", Wd = Object.prototype, Bd = Wd.hasOwnProperty;
function Ud(e) {
  var t = this.__data__;
  if (Qn) {
    var n = t[e];
    return n === zd ? void 0 : n;
  }
  return Bd.call(t, e) ? t[e] : void 0;
}
var Kd = Object.prototype, Gd = Kd.hasOwnProperty;
function qd(e) {
  var t = this.__data__;
  return Qn ? t[e] !== void 0 : Gd.call(t, e);
}
var Jd = "__lodash_hash_undefined__";
function Yd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Qn && t === void 0 ? Jd : t, this;
}
function Xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Xt.prototype.clear = jd;
Xt.prototype.delete = kd;
Xt.prototype.get = Ud;
Xt.prototype.has = qd;
Xt.prototype.set = Yd;
function Zd() {
  this.__data__ = [], this.size = 0;
}
function lo(e, t) {
  for (var n = e.length; n--; )
    if (Rd(e[n][0], t))
      return n;
  return -1;
}
var Qd = Array.prototype, Xd = Qd.splice;
function ep(e) {
  var t = this.__data__, n = lo(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Xd.call(t, n, 1), --this.size, !0;
}
function tp(e) {
  var t = this.__data__, n = lo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function np(e) {
  return lo(this.__data__, e) > -1;
}
function sp(e, t) {
  var n = this.__data__, s = lo(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Dn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Dn.prototype.clear = Zd;
Dn.prototype.delete = ep;
Dn.prototype.get = tp;
Dn.prototype.has = np;
Dn.prototype.set = sp;
var op = Oa(vr, "Map");
function rp() {
  this.size = 0, this.__data__ = {
    hash: new Xt(),
    map: new (op || Dn)(),
    string: new Xt()
  };
}
function ip(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ao(e, t) {
  var n = e.__data__;
  return ip(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function lp(e) {
  var t = ao(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ap(e) {
  return ao(this, e).get(e);
}
function cp(e) {
  return ao(this, e).has(e);
}
function up(e, t) {
  var n = ao(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function tn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
tn.prototype.clear = rp;
tn.prototype.delete = lp;
tn.prototype.get = ap;
tn.prototype.has = cp;
tn.prototype.set = up;
var fp = "Expected a function";
function yr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(fp);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], r = n.cache;
    if (r.has(o))
      return r.get(o);
    var i = e.apply(this, s);
    return n.cache = r.set(o, i) || r, i;
  };
  return n.cache = new (yr.Cache || tn)(), n;
}
yr.Cache = tn;
var dp = 500;
function pp(e) {
  var t = yr(e, function(s) {
    return n.size === dp && n.clear(), s;
  }), n = t.cache;
  return t;
}
var hp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gp = /\\(\\)?/g, vp = pp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(hp, function(n, s, o, r) {
    t.push(o ? r.replace(gp, "$1") : s || n);
  }), t;
});
function mp(e) {
  return e == null ? "" : Ea(e);
}
function _p(e, t) {
  return _r(e) ? e : Hd(e, t) ? [e] : vp(mp(e));
}
function yp(e) {
  if (typeof e == "string" || mr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function bp(e, t) {
  t = _p(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[yp(t[n++])];
  return n && n == s ? e : void 0;
}
function wp(e, t, n) {
  var s = e == null ? void 0 : bp(e, t);
  return s === void 0 ? n : s;
}
function Ep(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const Ca = (e) => e === void 0, Ci = (e) => typeof e == "boolean", en = (e) => typeof e == "number", Uo = (e) => typeof Element > "u" ? !1 : e instanceof Element, Np = (e) => te(e) ? !Number.isNaN(Number(e)) : !1;
var Di;
const nn = typeof window < "u", Op = (e) => typeof e == "string", Cp = () => {
};
nn && ((Di = window?.navigator) != null && Di.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function br(e) {
  return typeof e == "function" ? e() : x(e);
}
function Dp(e) {
  return e;
}
function wr(e) {
  return Gi() ? (rc(e), !0) : !1;
}
function xp(e, t = !0) {
  At() ? On(e) : t ? e() : pn(e);
}
function Da(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = de(!1);
  let r = null;
  function i() {
    r && (clearTimeout(r), r = null);
  }
  function l() {
    o.value = !1, i();
  }
  function a(...d) {
    i(), o.value = !0, r = setTimeout(() => {
      o.value = !1, r = null, e(...d);
    }, br(t));
  }
  return s && (o.value = !0, nn && a()), wr(l), {
    isPending: sr(o),
    start: a,
    stop: l
  };
}
function xa(e) {
  var t;
  const n = br(e);
  return (t = n?.$el) != null ? t : n;
}
const Sa = nn ? window : void 0;
function Ta(...e) {
  let t, n, s, o;
  if (Op(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Sa) : [t, n, s, o] = e, !t)
    return Cp;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((u) => u()), r.length = 0;
  }, l = (u, f, h, v) => (u.addEventListener(f, h, v), () => u.removeEventListener(f, h, v)), a = vn(() => [xa(t), br(o)], ([u, f]) => {
    i(), u && r.push(...n.flatMap((h) => s.map((v) => l(u, h, v, f))));
  }, { immediate: !0, flush: "post" }), d = () => {
    a(), i();
  };
  return wr(d), d;
}
function Sp(e, t = !1) {
  const n = de(), s = () => n.value = !!e();
  return s(), xp(s, t), n;
}
const xi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Si = "__vueuse_ssr_handlers__";
xi[Si] = xi[Si] || {};
var Ti = Object.getOwnPropertySymbols, Tp = Object.prototype.hasOwnProperty, Vp = Object.prototype.propertyIsEnumerable, Ip = (e, t) => {
  var n = {};
  for (var s in e)
    Tp.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Ti)
    for (var s of Ti(e))
      t.indexOf(s) < 0 && Vp.call(e, s) && (n[s] = e[s]);
  return n;
};
function $p(e, t, n = {}) {
  const s = n, { window: o = Sa } = s, r = Ip(s, ["window"]);
  let i;
  const l = Sp(() => o && "ResizeObserver" in o), a = () => {
    i && (i.disconnect(), i = void 0);
  }, d = vn(() => xa(e), (f) => {
    a(), l.value && o && f && (i = new ResizeObserver(t), i.observe(f, r));
  }, { immediate: !0, flush: "post" }), u = () => {
    a(), d();
  };
  return wr(u), {
    isSupported: l,
    stop: u
  };
}
var Vi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Vi || (Vi = {}));
var Pp = Object.defineProperty, Ii = Object.getOwnPropertySymbols, Ap = Object.prototype.hasOwnProperty, Mp = Object.prototype.propertyIsEnumerable, $i = (e, t, n) => t in e ? Pp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Rp = (e, t) => {
  for (var n in t || (t = {}))
    Ap.call(t, n) && $i(e, n, t[n]);
  if (Ii)
    for (var n of Ii(t))
      Mp.call(t, n) && $i(e, n, t[n]);
  return e;
};
const Fp = {
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
Rp({
  linear: Dp
}, Fp);
class Lp extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ls(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = te(e) ? new Lp(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Pi = {
  current: 0
}, Ai = de(0), Va = 2e3, Mi = Symbol("elZIndexContextKey"), Ia = Symbol("zIndexContextKey"), Hp = (e) => {
  const t = At() ? pt(Mi, Pi) : Pi, n = e || (At() ? pt(Ia, void 0) : void 0), s = Q(() => {
    const i = x(n);
    return en(i) ? i : Va;
  }), o = Q(() => s.value + Ai.value), r = () => (t.current++, Ai.value = t.current, o.value);
  return !nn && !pt(Mi) && ls("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: r
  };
};
var jp = {
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
const kp = (e) => (t, n) => zp(t, n, x(e)), zp = (e, t, n) => wp(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var r;
  return `${(r = t?.[o]) != null ? r : `{${o}}`}`;
}), Wp = (e) => {
  const t = Q(() => x(e).name), n = ge(e) ? e : de(e);
  return {
    lang: t,
    locale: n,
    t: kp(e)
  };
}, $a = Symbol("localeContextKey"), Bp = (e) => {
  const t = e || pt($a, de());
  return Wp(Q(() => t.value || jp));
}, Pa = "__epPropKey", bt = (e) => e, Up = (e) => X(e) && !!e[Pa], Aa = (e, t) => {
  if (!X(e) || Up(e))
    return e;
  const { values: n, required: s, default: o, type: r, validator: i } = e, a = {
    type: r,
    required: !!s,
    validator: n || i ? (d) => {
      let u = !1, f = [];
      if (n && (f = Array.from(n), J(e, "default") && f.push(o), u || (u = f.includes(d))), i && (u || (u = i(d))), !u && f.length > 0) {
        const h = [...new Set(f)].map((v) => JSON.stringify(v)).join(", ");
        Cn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(d)}.`);
      }
      return u;
    } : void 0,
    [Pa]: !0
  };
  return J(e, "default") && (a.default = o), a;
}, as = (e) => Ep(Object.entries(e).map(([t, n]) => [
  t,
  Aa(n, t)
])), Kp = ["", "default", "small", "large"], bg = Aa({
  type: String,
  values: Kp,
  required: !1
}), Gp = Symbol("size"), qp = Symbol("emptyValuesContextKey"), wg = as({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => L(e) ? !e() : !e
  }
}), Ri = (e) => Object.keys(e), Us = de();
function Ma(e, t = void 0) {
  return At() ? pt(_a, Us) : Us;
}
function Ra(e, t) {
  const n = Ma(), s = gr(e, Q(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || xs;
  })), o = Bp(Q(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), r = Hp(Q(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Va;
  })), i = Q(() => {
    var l;
    return x(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return Jp(Q(() => x(n) || {})), {
    ns: s,
    locale: o,
    zIndex: r,
    size: i
  };
}
const Jp = (e, t, n = !1) => {
  var s;
  const o = !!At(), r = o ? Ma() : void 0, i = (s = void 0) != null ? s : o ? Hl : void 0;
  if (!i) {
    ls("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = Q(() => {
    const a = x(e);
    return r?.value ? Yp(r.value, a) : a;
  });
  return i(_a, l), i($a, Q(() => l.value.locale)), i(ya, Q(() => l.value.namespace)), i(Ia, Q(() => l.value.zIndex)), i(Gp, {
    size: Q(() => l.value.size || "")
  }), i(qp, Q(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Us.value) && (Us.value = l.value), l;
}, Yp = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ri(e), ...Ri(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var co = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
const Zp = "utils/dom/style";
function Ko(e, t = "px") {
  if (!e)
    return "";
  if (en(e) || Np(e))
    return `${e}${t}`;
  if (te(e))
    return e;
  ls(Zp, "binding value must be a string or number");
}
const Fa = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), La = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Qp = as({
  size: {
    type: bt([Number, String])
  },
  color: {
    type: String
  }
}), Xp = /* @__PURE__ */ Fe({
  name: "ElIcon",
  inheritAttrs: !1
}), eh = /* @__PURE__ */ Fe({
  ...Xp,
  props: Qp,
  setup(e) {
    const t = e, n = gr("icon"), s = Q(() => {
      const { size: o, color: r } = t;
      return !o && !r ? {} : {
        fontSize: Ca(o) ? void 0 : Ko(o),
        "--color": r
      };
    });
    return (o, r) => (se(), ye("i", ra({
      class: x(n).b(),
      style: x(s)
    }, o.$attrs), [
      Gn(o.$slots, "default")
    ], 16));
  }
});
var th = /* @__PURE__ */ co(eh, [["__file", "icon.vue"]]);
const Ks = Fa(th);
/*! Element Plus Icons Vue v2.3.1 */
var nh = /* @__PURE__ */ Fe({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (se(), ye("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), sh = nh, oh = /* @__PURE__ */ Fe({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (se(), ye("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ha = oh, rh = /* @__PURE__ */ Fe({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (se(), ye("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), ih = rh, lh = /* @__PURE__ */ Fe({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (se(), ye("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ah = lh, ch = /* @__PURE__ */ Fe({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (se(), ye("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), uh = ch;
const ja = bt([
  String,
  Object,
  Function
]), fh = {
  Close: Ha
}, dh = {
  Close: Ha
}, Gs = {
  success: ah,
  warning: uh,
  error: sh,
  info: ih
}, ph = (e) => e, Ss = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, hh = as({
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
    type: bt([String, Object, Array])
  },
  offset: {
    type: bt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), gh = /* @__PURE__ */ Fe({
  name: "ElBadge"
}), vh = /* @__PURE__ */ Fe({
  ...gh,
  props: hh,
  setup(e, { expose: t }) {
    const n = e, s = gr("badge"), o = Q(() => n.isDot ? "" : en(n.value) && en(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = Q(() => {
      var i, l, a, d, u;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ko(-((l = (i = n.offset) == null ? void 0 : i[0]) != null ? l : 0)),
          marginTop: Ko((d = (a = n.offset) == null ? void 0 : a[1]) != null ? d : 0)
        },
        (u = n.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: o
    }), (i, l) => (se(), ye("div", {
      class: ve(x(s).b())
    }, [
      Gn(i.$slots, "default"),
      Oe(hr, {
        name: `${x(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: $t(() => [
          _n(P("sup", {
            class: ve([
              x(s).e("content"),
              x(s).em("content", i.type),
              x(s).is("fixed", !!i.$slots.default),
              x(s).is("dot", i.isDot),
              x(s).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: Zt(x(r))
          }, [
            Gn(i.$slots, "content", { value: x(o) }, () => [
              fr(Se(x(o)), 1)
            ])
          ], 6), [
            [Zn, !i.hidden && (x(o) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var mh = /* @__PURE__ */ co(vh, [["__file", "badge.vue"]]);
const _h = Fa(mh), at = {}, ka = ["success", "info", "warning", "error"], xe = ph({
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
  appendTo: nn ? document.body : void 0
}), yh = as({
  customClass: {
    type: String,
    default: xe.customClass
  },
  center: {
    type: Boolean,
    default: xe.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: xe.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: xe.duration
  },
  icon: {
    type: ja,
    default: xe.icon
  },
  id: {
    type: String,
    default: xe.id
  },
  message: {
    type: bt([
      String,
      Object,
      Function
    ]),
    default: xe.message
  },
  onClose: {
    type: bt(Function),
    default: xe.onClose
  },
  showClose: {
    type: Boolean,
    default: xe.showClose
  },
  type: {
    type: String,
    values: ka,
    default: xe.type
  },
  plain: {
    type: Boolean,
    default: xe.plain
  },
  offset: {
    type: Number,
    default: xe.offset
  },
  zIndex: {
    type: Number,
    default: xe.zIndex
  },
  grouping: {
    type: Boolean,
    default: xe.grouping
  },
  repeatNum: {
    type: Number,
    default: xe.repeatNum
  }
}), bh = {
  destroy: () => !0
}, Ze = ul([]), wh = (e) => {
  const t = Ze.findIndex((o) => o.id === e), n = Ze[t];
  let s;
  return t > 0 && (s = Ze[t - 1]), { current: n, prev: s };
}, Eh = (e) => {
  const { prev: t } = wh(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Nh = (e, t) => Ze.findIndex((s) => s.id === e) > 0 ? 16 : t, Oh = /* @__PURE__ */ Fe({
  name: "ElMessage"
}), Ch = /* @__PURE__ */ Fe({
  ...Oh,
  props: yh,
  emits: bh,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = dh, { ns: o, zIndex: r } = Ra("message"), { currentZIndex: i, nextZIndex: l } = r, a = de(), d = de(!1), u = de(0);
    let f;
    const h = Q(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = Q(() => {
      const B = n.type;
      return { [o.bm("icon", B)]: B && Gs[B] };
    }), T = Q(() => n.icon || Gs[n.type] || ""), E = Q(() => Eh(n.id)), j = Q(() => Nh(n.id, n.offset) + E.value), F = Q(() => u.value + j.value), Y = Q(() => ({
      top: `${j.value}px`,
      zIndex: i.value
    }));
    function $() {
      n.duration !== 0 && ({ stop: f } = Da(() => {
        V();
      }, n.duration));
    }
    function ne() {
      f?.();
    }
    function V() {
      d.value = !1;
    }
    function G({ code: B }) {
      B === Ss.esc && V();
    }
    return On(() => {
      $(), l(), d.value = !0;
    }), vn(() => n.repeatNum, () => {
      ne(), $();
    }), Ta(document, "keydown", G), $p(a, () => {
      u.value = a.value.getBoundingClientRect().height;
    }), t({
      visible: d,
      bottom: F,
      close: V
    }), (B, ae) => (se(), Be(hr, {
      name: x(o).b("fade"),
      onBeforeLeave: B.onClose,
      onAfterLeave: (M) => B.$emit("destroy"),
      persisted: ""
    }, {
      default: $t(() => [
        _n(P("div", {
          id: B.id,
          ref_key: "messageRef",
          ref: a,
          class: ve([
            x(o).b(),
            { [x(o).m(B.type)]: B.type },
            x(o).is("center", B.center),
            x(o).is("closable", B.showClose),
            x(o).is("plain", B.plain),
            B.customClass
          ]),
          style: Zt(x(Y)),
          role: "alert",
          onMouseenter: ne,
          onMouseleave: $
        }, [
          B.repeatNum > 1 ? (se(), Be(x(_h), {
            key: 0,
            value: B.repeatNum,
            type: x(h),
            class: ve(x(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : yt("v-if", !0),
          x(T) ? (se(), Be(x(Ks), {
            key: 1,
            class: ve([x(o).e("icon"), x(v)])
          }, {
            default: $t(() => [
              (se(), Be(Pl(x(T))))
            ]),
            _: 1
          }, 8, ["class"])) : yt("v-if", !0),
          Gn(B.$slots, "default", {}, () => [
            B.dangerouslyUseHTMLString ? (se(), ye(we, { key: 1 }, [
              yt(" Caution here, message could've been compromised, never use user's input as message "),
              P("p", {
                class: ve(x(o).e("content")),
                innerHTML: B.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (se(), ye("p", {
              key: 0,
              class: ve(x(o).e("content"))
            }, Se(B.message), 3))
          ]),
          B.showClose ? (se(), Be(x(Ks), {
            key: 2,
            class: ve(x(o).e("closeBtn")),
            onClick: jn(V, ["stop"])
          }, {
            default: $t(() => [
              Oe(x(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : yt("v-if", !0)
        ], 46, ["id"]), [
          [Zn, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Dh = /* @__PURE__ */ co(Ch, [["__file", "message.vue"]]);
let xh = 1;
const za = (e) => {
  const t = !e || te(e) || Ue(e) || L(e) ? { message: e } : e, n = {
    ...xe,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (te(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    Uo(s) || (ls("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), s = document.body), n.appendTo = s;
  }
  return Ci(at.grouping) && !n.grouping && (n.grouping = at.grouping), en(at.duration) && n.duration === 3e3 && (n.duration = at.duration), en(at.offset) && n.offset === 16 && (n.offset = at.offset), Ci(at.showClose) && !n.showClose && (n.showClose = at.showClose), n;
}, Sh = (e) => {
  const t = Ze.indexOf(e);
  if (t === -1)
    return;
  Ze.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Th = ({ appendTo: e, ...t }, n) => {
  const s = `message_${xh++}`, o = t.onClose, r = document.createElement("div"), i = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), Sh(u);
    },
    onDestroy: () => {
      Ws(null, r);
    }
  }, l = Oe(Dh, i, L(i.message) || Ue(i.message) ? {
    default: L(i.message) ? i.message : () => i.message
  } : null);
  l.appContext = n || bn._context, Ws(l, r), e.appendChild(r.firstElementChild);
  const a = l.component, u = {
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
  return u;
}, bn = (e = {}, t) => {
  if (!nn)
    return { close: () => {
    } };
  const n = za(e);
  if (n.grouping && Ze.length) {
    const o = Ze.find(({ vnode: r }) => {
      var i;
      return ((i = r.props) == null ? void 0 : i.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (en(at.max) && Ze.length >= at.max)
    return { close: () => {
    } };
  const s = Th(n, t);
  return Ze.push(s), s.handler;
};
ka.forEach((e) => {
  bn[e] = (t = {}, n) => {
    const s = za(t);
    return bn({ ...s, type: e }, n);
  };
});
function Vh(e) {
  for (const t of Ze)
    (!e || e === t.props.type) && t.handler.close();
}
bn.closeAll = Vh;
bn._context = null;
const Ih = La(bn, "$message"), Wa = [
  "success",
  "info",
  "warning",
  "error"
], $h = as({
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
    type: ja
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: bt([
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
    type: bt(Function),
    default: () => {
    }
  },
  onClose: {
    type: bt(Function),
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
    values: [...Wa, ""],
    default: ""
  },
  zIndex: Number
}), Ph = {
  destroy: () => !0
}, Ah = /* @__PURE__ */ Fe({
  name: "ElNotification"
}), Mh = /* @__PURE__ */ Fe({
  ...Ah,
  props: $h,
  emits: Ph,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = Ra("notification"), { nextZIndex: r, currentZIndex: i } = o, { Close: l } = fh, a = de(!1);
    let d;
    const u = Q(() => {
      const $ = n.type;
      return $ && Gs[n.type] ? s.m($) : "";
    }), f = Q(() => n.type && Gs[n.type] || n.icon), h = Q(() => n.position.endsWith("right") ? "right" : "left"), v = Q(() => n.position.startsWith("top") ? "top" : "bottom"), T = Q(() => {
      var $;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: ($ = n.zIndex) != null ? $ : i.value
      };
    });
    function E() {
      n.duration > 0 && ({ stop: d } = Da(() => {
        a.value && F();
      }, n.duration));
    }
    function j() {
      d?.();
    }
    function F() {
      a.value = !1;
    }
    function Y({ code: $ }) {
      $ === Ss.delete || $ === Ss.backspace ? j() : $ === Ss.esc ? a.value && F() : E();
    }
    return On(() => {
      E(), r(), a.value = !0;
    }), Ta(document, "keydown", Y), t({
      visible: a,
      close: F
    }), ($, ne) => (se(), Be(hr, {
      name: x(s).b("fade"),
      onBeforeLeave: $.onClose,
      onAfterLeave: (V) => $.$emit("destroy"),
      persisted: ""
    }, {
      default: $t(() => [
        _n(P("div", {
          id: $.id,
          class: ve([x(s).b(), $.customClass, x(h)]),
          style: Zt(x(T)),
          role: "alert",
          onMouseenter: j,
          onMouseleave: E,
          onClick: $.onClick
        }, [
          x(f) ? (se(), Be(x(Ks), {
            key: 0,
            class: ve([x(s).e("icon"), x(u)])
          }, {
            default: $t(() => [
              (se(), Be(Pl(x(f))))
            ]),
            _: 1
          }, 8, ["class"])) : yt("v-if", !0),
          P("div", {
            class: ve(x(s).e("group"))
          }, [
            P("h2", {
              class: ve(x(s).e("title")),
              textContent: Se($.title)
            }, null, 10, ["textContent"]),
            _n(P("div", {
              class: ve(x(s).e("content")),
              style: Zt($.title ? void 0 : { margin: 0 })
            }, [
              Gn($.$slots, "default", {}, () => [
                $.dangerouslyUseHTMLString ? (se(), ye(we, { key: 1 }, [
                  yt(" Caution here, message could've been compromised, never use user's input as message "),
                  P("p", { innerHTML: $.message }, null, 8, ["innerHTML"])
                ], 2112)) : (se(), ye("p", { key: 0 }, Se($.message), 1))
              ])
            ], 6), [
              [Zn, $.message]
            ]),
            $.showClose ? (se(), Be(x(Ks), {
              key: 0,
              class: ve(x(s).e("closeBtn")),
              onClick: jn(F, ["stop"])
            }, {
              default: $t(() => [
                Oe(x(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : yt("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Zn, a.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Rh = /* @__PURE__ */ co(Mh, [["__file", "notification.vue"]]);
const qs = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Go = 16;
let Fh = 1;
const wn = function(e = {}, t) {
  if (!nn)
    return { close: () => {
    } };
  (te(e) || Ue(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  qs[n].forEach(({ vm: u }) => {
    var f;
    s += (((f = u.el) == null ? void 0 : f.offsetHeight) || 0) + Go;
  }), s += Go;
  const o = `notification_${Fh++}`, r = e.onClose, i = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Lh(o, n, r);
    }
  };
  let l = document.body;
  Uo(e.appendTo) ? l = e.appendTo : te(e.appendTo) && (l = document.querySelector(e.appendTo)), Uo(l) || (ls("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), l = document.body);
  const a = document.createElement("div"), d = Oe(Rh, i, L(i.message) ? i.message : Ue(i.message) ? () => i.message : null);
  return d.appContext = Ca(t) ? wn._context : t, d.props.onDestroy = () => {
    Ws(null, a);
  }, Ws(d, a), qs[n].push({ vm: d }), l.appendChild(a.firstElementChild), {
    close: () => {
      d.component.exposed.visible.value = !1;
    }
  };
};
Wa.forEach((e) => {
  wn[e] = (t = {}, n) => ((te(t) || Ue(t)) && (t = {
    message: t
  }), wn({ ...t, type: e }, n));
});
function Lh(e, t, n) {
  const s = qs[t], o = s.findIndex(({ vm: d }) => {
    var u;
    return ((u = d.component) == null ? void 0 : u.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: r } = s[o];
  if (!r)
    return;
  n?.(r);
  const i = r.el.offsetHeight, l = t.split("-")[0];
  s.splice(o, 1);
  const a = s.length;
  if (!(a < 1))
    for (let d = o; d < a; d++) {
      const { el: u, component: f } = s[d].vm, h = Number.parseInt(u.style[l], 10) - i - Go;
      f.props.offset = h;
    }
}
function Hh() {
  for (const e of Object.values(qs))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
wn.closeAll = Hh;
wn._context = null;
const jh = La(wn, "$notify"), xo = {
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
      duration: o = 3e3,
      showClose: r = !1
    } = e;
    s === "center" ? Ih({
      message: t,
      type: n,
      duration: o,
      showClose: r,
      grouping: !0
    }) : jh({
      message: t,
      type: n,
      position: s,
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
}, kh = () => w("screen_recorder_get_ffmpeg_status"), hs = (e) => w("screen_recorder_set_capture_excluded", { excluded: e }), gs = (e) => w("screen_recorder_set_passthrough_region", { region: e }), zh = () => w("screen_recorder_pick_target_window"), Wh = () => w("screen_recorder_close_window"), Bh = (e, t) => w("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio
}), Uh = () => w("screen_recorder_pause_recording"), Kh = (e, t) => w("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio
}), Gh = () => w("screen_recorder_stop_recording"), qh = () => w("screen_recorder_cancel_recording"), Jh = (e) => w("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), Fi = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
});
function Yh() {
  const e = de("selecting"), t = de(Fi()), n = de(null), s = de(null), o = de(""), r = de(null), i = de(0), l = de(0), a = de(null), d = () => {
    l.value = e.value === "recording" && r.value !== null ? i.value + Date.now() - r.value : i.value;
  }, u = () => {
    a.value !== null && (window.clearInterval(a.value), a.value = null);
  }, f = () => {
    u(), d(), a.value = window.setInterval(() => {
      d();
    }, 250);
  }, h = async () => (n.value = await kh(), n.value), v = async (ne) => {
    o.value = "", s.value = null;
    const V = n.value ?? await h();
    if (!V.available)
      throw new Error(V.message || "FFmpeg unavailable");
    await Bh(ne, t.value), e.value = "recording", i.value = 0, l.value = 0, r.value = Date.now(), f();
  }, T = async () => {
    e.value === "recording" && (d(), i.value = l.value, r.value = null, u(), await Uh(), e.value = "paused");
  }, E = async (ne) => {
    e.value === "paused" && (await Kh(ne, t.value), e.value = "recording", r.value = Date.now(), f());
  }, j = async () => {
    e.value !== "recording" && e.value !== "paused" || (d(), i.value = l.value, r.value = null, u(), await Gh(), e.value = "exporting");
  }, F = async () => (e.value = "exporting", s.value = await Jh(t.value), e.value = "completed", s.value), Y = async () => {
    u(), await qh(), e.value = "selecting", r.value = null, i.value = 0, l.value = 0, s.value = null;
  }, $ = () => {
    e.value = "selecting", r.value = null, i.value = 0, l.value = 0, s.value = null, o.value = "", t.value = Fi();
  };
  return so(() => {
    u();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: l,
    refreshFfmpegStatus: h,
    begin: v,
    pause: T,
    resume: E,
    stop: j,
    exportFile: F,
    cancel: Y,
    reset: $
  };
}
const Zh = { class: "screen-recorder" }, Qh = ["onMousedown"], Xh = { class: "window-title" }, eg = { class: "capture-viewport" }, tg = { class: "capture-frame" }, ng = { class: "control-strip" }, sg = ["disabled"], og = ["disabled"], rg = { class: "dimension" }, ig = ["value"], lg = { class: "dimension" }, ag = ["value"], cg = { class: "time" }, ug = {
  key: 2,
  class: "save-status"
}, fg = ["title"], dg = ["disabled"], pg = {
  key: 0,
  class: "warning"
}, vs = 80, hg = 468, gg = 300, Li = 468, Hi = 260, ji = 38, vg = 56, ms = 8, _s = 1, mg = /* @__PURE__ */ Fe({
  __name: "index",
  setup(e) {
    const t = va(), n = de(null), s = de({ width: 0, height: 0 });
    let o = null, r = null;
    const i = [
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
      result: u,
      elapsedMs: f,
      refreshFfmpegStatus: h,
      begin: v,
      pause: T,
      resume: E,
      stop: j,
      exportFile: F,
      cancel: Y,
      reset: $
    } = Yh(), ne = Q(() => l.value === "recording" || l.value === "paused" || l.value === "exporting"), V = Q(() => {
      const k = Math.floor(f.value / 1e3), R = Math.floor(k / 60).toString().padStart(2, "0"), fe = (k % 60).toString().padStart(2, "0");
      return `${R}:${fe}`;
    }), G = async (k) => {
      try {
        await k();
      } catch (R) {
        xo.msg(R?.message || String(R), "error");
      }
    }, B = (k) => Math.max(2, Math.floor(Math.round(k) / 2) * 2), ae = async () => {
      const k = n.value;
      if (!k)
        throw new Error("录制视口尚未准备好");
      const R = k.getBoundingClientRect(), fe = await t.scaleFactor(), qe = await t.innerPosition(), nt = B(R.width * fe), Rt = B(R.height * fe);
      if (nt < vs || Rt < vs)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: R.left,
        y: R.top,
        width: nt / fe,
        height: Rt / fe,
        screenX: Math.round(qe.x + R.left * fe),
        screenY: Math.round(qe.y + R.top * fe),
        physicalWidth: nt,
        physicalHeight: Rt,
        scale: fe
      };
    }, M = async () => {
      try {
        const k = await ae();
        s.value = {
          width: k.physicalWidth,
          height: k.physicalHeight
        }, await gs({
          x: Math.round(k.x * k.scale),
          y: Math.round(k.y * k.scale),
          width: k.physicalWidth,
          height: k.physicalHeight
        }).catch(() => {
        });
      } catch {
        s.value = { width: 0, height: 0 }, await gs(null).catch(() => {
        });
      }
    }, ee = async (k) => {
      k.button !== 0 || ne.value || await t.startDragging().catch((R) => {
        xo.msg(R?.message || String(R), "error");
      });
    }, le = async (k) => {
      ne.value || await t.startResizeDragging(k).catch((R) => {
        xo.msg(R?.message || String(R), "error");
      });
    }, I = () => G(async () => {
      await hs(!0).catch(() => {
      }), await M(), await v(await ae());
    }), ue = () => G(T), Ce = () => G(async () => {
      await E(await ae());
    }), De = () => G(async () => {
      await j(), await F();
    }), _e = () => {
      $(), l.value = "ready", u.value = null, t.setSize(new kn(hg, gg)), pn(M);
    }, q = async (k) => {
      const fe = (await nd(k.screenX, k.screenY))?.scaleFactor || await t.scaleFactor(), qe = Math.max(
        Li,
        k.physicalWidth / fe + ms * 2 + _s * 2
      ), nt = Math.max(
        Hi,
        k.physicalHeight / fe + ji + vg + ms * 2 + _s * 2
      );
      await t.setPosition(new ct(
        Math.round(k.screenX - (ms + _s) * fe),
        Math.round(k.screenY - (ji + ms + _s) * fe)
      )), await t.setSize(new kn(Math.round(qe), Math.round(nt))), await pn(), await M();
    }, K = () => G(async () => {
      const k = await zh();
      await q(k);
    }), ze = async () => {
      await t.minimize();
    }, sn = async () => {
      try {
        await Y(), await gs(null).catch(() => {
        }), await hs(!1).catch(() => {
        });
      } catch {
      }
      await Wh();
    }, Mt = async () => {
      u.value && await w("open_file_with_default_app", { filePath: u.value.path });
    }, Ct = async () => {
      u.value && await w("show_file_in_folder", { filePath: u.value.path });
    }, Ge = (k) => {
      k.key === "Escape" && (k.preventDefault(), sn());
    };
    return On(async () => {
      l.value = "ready", await t.setMinSize(new kn(Li, Hi)).catch(() => {
      }), await hs(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await h().catch(() => {
      }), await pn(), await M(), n.value && (o = new ResizeObserver(() => {
        M();
      }), o.observe(n.value)), r = await t.onMoved(() => {
        M();
      }).catch(() => null), window.addEventListener("resize", M), window.addEventListener("keydown", Ge);
    }), so(() => {
      o?.disconnect(), r?.(), window.removeEventListener("resize", M), window.removeEventListener("keydown", Ge), gs(null).catch(() => {
      }), hs(!1).catch(() => {
      });
    }), (k, R) => (se(), ye("div", Zh, [
      P(
        "div",
        {
          class: ve(["recorder-shell", { recording: x(l) === "recording", paused: x(l) === "paused" }])
        },
        [
          (se(), ye(
            we,
            null,
            gu(i, (fe) => P("span", {
              key: fe.className,
              class: ve(["resize-zone", fe.className]),
              onMousedown: jn((qe) => le(fe.direction), ["prevent"])
            }, null, 42, Qh)),
            64
            /* STABLE_FRAGMENT */
          )),
          P(
            "header",
            {
              class: "title-bar",
              onMousedown: ee
            },
            [
              P(
                "span",
                Xh,
                Se(k.$t("screenRecorder.title") || "自定义录屏"),
                1
                /* TEXT */
              ),
              P(
                "div",
                {
                  class: "window-actions",
                  onMousedown: R[0] || (R[0] = jn(() => {
                  }, ["stop"]))
                },
                [
                  P("button", {
                    class: "title-button",
                    title: "最小化",
                    onClick: ze
                  }, "_"),
                  P("button", {
                    class: "title-button close",
                    title: "关闭",
                    onClick: sn
                  }, "×")
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            32
            /* NEED_HYDRATION */
          ),
          P("main", eg, [
            R[8] || (R[8] = P(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            R[9] || (R[9] = P(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            R[10] || (R[10] = P(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            R[11] || (R[11] = P(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            P("div", tg, [
              P(
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
              R[4] || (R[4] = P(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              R[5] || (R[5] = P(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              R[6] || (R[6] = P(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              R[7] || (R[7] = P(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          P("footer", ng, [
            P(
              "span",
              {
                class: ve(["status-dot", { active: x(l) === "recording", paused: x(l) === "paused" }])
              },
              null,
              2
              /* CLASS */
            ),
            _n(P("select", {
              "onUpdate:modelValue": R[1] || (R[1] = (fe) => x(a).fps = fe),
              disabled: ne.value
            }, R[12] || (R[12] = [
              P(
                "option",
                { value: 15 },
                "15",
                -1
                /* HOISTED */
              ),
              P(
                "option",
                { value: 24 },
                "24",
                -1
                /* HOISTED */
              ),
              P(
                "option",
                { value: 30 },
                "30",
                -1
                /* HOISTED */
              ),
              P(
                "option",
                { value: 60 },
                "60",
                -1
                /* HOISTED */
              )
            ]), 8, sg), [
              [hi, x(a).fps]
            ]),
            R[15] || (R[15] = P(
              "span",
              { class: "unit" },
              "fps",
              -1
              /* HOISTED */
            )),
            _n(P("select", {
              "onUpdate:modelValue": R[2] || (R[2] = (fe) => x(a).format = fe),
              disabled: ne.value
            }, R[13] || (R[13] = [
              P(
                "option",
                { value: "mp4" },
                "MP4",
                -1
                /* HOISTED */
              ),
              P(
                "option",
                { value: "gif" },
                "GIF",
                -1
                /* HOISTED */
              )
            ]), 8, og), [
              [hi, x(a).format]
            ]),
            P("label", rg, [
              P("input", {
                value: s.value.width,
                readonly: ""
              }, null, 8, ig)
            ]),
            R[16] || (R[16] = P(
              "span",
              { class: "multiply" },
              "×",
              -1
              /* HOISTED */
            )),
            P("label", lg, [
              P("input", {
                value: s.value.height,
                readonly: ""
              }, null, 8, ag)
            ]),
            R[17] || (R[17] = P(
              "span",
              { class: "unit" },
              "px",
              -1
              /* HOISTED */
            )),
            x(l) === "ready" || x(l) === "completed" ? (se(), ye(
              "button",
              {
                key: 0,
                class: "icon-control",
                title: "拖到目标窗口并松开以对齐",
                onMousedown: jn(K, ["prevent"])
              },
              " ◎ ",
              32
              /* NEED_HYDRATION */
            )) : yt("v-if", !0),
            x(l) === "recording" || x(l) === "paused" ? (se(), ye(
              we,
              { key: 1 },
              [
                P(
                  "span",
                  cg,
                  Se(V.value),
                  1
                  /* TEXT */
                ),
                P(
                  "button",
                  {
                    class: "control-button",
                    onClick: R[3] || (R[3] = (fe) => x(l) === "paused" ? Ce() : ue())
                  },
                  Se(x(l) === "paused" ? k.$t("screenRecorder.resume") : k.$t("screenRecorder.pause")),
                  1
                  /* TEXT */
                ),
                P(
                  "button",
                  {
                    class: "control-button danger",
                    onClick: De
                  },
                  Se(k.$t("screenRecorder.stop")),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : x(l) === "exporting" ? (se(), ye(
              "span",
              ug,
              Se(k.$t("screenRecorder.exporting") || "正在导出..."),
              1
              /* TEXT */
            )) : x(l) === "completed" && x(u) ? (se(), ye(
              we,
              { key: 3 },
              [
                P("span", {
                  class: "save-status",
                  title: x(u).path
                }, Se(k.$t("screenRecorder.exportDone") || "已保存"), 9, fg),
                P(
                  "button",
                  {
                    class: "control-button",
                    onClick: Mt
                  },
                  Se(k.$t("screenRecorder.openFile") || "打开"),
                  1
                  /* TEXT */
                ),
                P(
                  "button",
                  {
                    class: "control-button",
                    onClick: Ct
                  },
                  Se(k.$t("screenRecorder.openFolder") || "定位"),
                  1
                  /* TEXT */
                ),
                P(
                  "button",
                  {
                    class: "control-button",
                    onClick: _e
                  },
                  Se(k.$t("screenRecorder.recordAgain") || "重录"),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (se(), ye("button", {
              key: 4,
              class: "record-button",
              disabled: x(d)?.available === !1 || s.value.width < vs || s.value.height < vs,
              onClick: I
            }, [
              R[14] || (R[14] = P(
                "span",
                null,
                null,
                -1
                /* HOISTED */
              )),
              fr(
                " " + Se(k.$t("screenRecorder.start")),
                1
                /* TEXT */
              )
            ], 8, dg))
          ])
        ],
        2
        /* CLASS */
      ),
      x(d) && !x(d).available ? (se(), ye(
        "p",
        pg,
        Se(x(d).message || k.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : yt("v-if", !0)
    ]));
  }
}), _g = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Eg = /* @__PURE__ */ _g(mg, [["__scopeId", "data-v-4939f0a7"]]);
export {
  Eg as default
};
