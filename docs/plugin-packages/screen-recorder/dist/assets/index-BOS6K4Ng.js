import { i as Pn, w as _e, l as Es, a as Ts, b as Ns, c as ae, d as Os, e as Tt, B as Is, h as xs, f as Ds, g as Nt, j as Ps, t as As, k as Ms, n as Oe, m as $s, o as zs, p as Ls, q as B, r as An, s as oe, u as Mn, v as Rs, x as $n, N as Ws, y as Fs, z as Bs, A as ge, C as fe, D as O, E as _, F as c, G as ks, H as Hs, I as js, J as lt, K as Ot, L as Vs, M as Wt, O as Us, P as L, Q as x, R as S, S as Ae, T as Gs, U as f, V as Re, W as se, X as me, Y as Xe, Z as D, _ as zn, $ as z, a0 as Ks, a1 as J, a2 as Y, a3 as Ln, a4 as Ie, a5 as Me, a6 as Rn, a7 as qs } from "./runtime-entry-C3iqwe3n.js";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _t;
const Ft = typeof window < "u" && window.trustedTypes;
if (Ft)
  try {
    _t = /* @__PURE__ */ Ft.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && _e(`Error creating trusted types policy: ${e}`);
  }
const Wn = _t ? (e) => _t.createHTML(e) : (e) => e, Zs = "http://www.w3.org/2000/svg", Js = "http://www.w3.org/1998/Math/MathML", Z = typeof document < "u" ? document : null, Bt = Z && /* @__PURE__ */ Z.createElement("template"), Ys = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Z.createElementNS(Zs, e) : t === "mathml" ? Z.createElementNS(Js, e) : n ? Z.createElement(e, { is: n }) : Z.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Z.createTextNode(e),
  createComment: (e) => Z.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Z.querySelector(e),
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
      Bt.innerHTML = Wn(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Bt.content;
      if (s === "svg" || s === "mathml") {
        const u = a.firstChild;
        for (; u.firstChild; )
          a.appendChild(u.firstChild);
        a.removeChild(u);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, X = "transition", Ee = "animation", $e = Symbol("_vtc"), Fn = {
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
}, Qs = /* @__PURE__ */ Tt(
  {},
  Is,
  Fn
), Xs = (e) => (e.displayName = "Transition", e.props = Qs, e), It = /* @__PURE__ */ Xs(
  (e, { slots: t }) => xs(Ds, eo(e), t)
), ee = (e, t = []) => {
  ae(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, kt = (e) => e ? ae(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function eo(e) {
  const t = {};
  for (const g in e)
    g in Fn || (t[g] = e[g]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: u = r,
    appearActiveClass: p = i,
    appearToClass: d = a,
    leaveFromClass: y = `${n}-leave-from`,
    leaveActiveClass: C = `${n}-leave-active`,
    leaveToClass: I = `${n}-leave-to`
  } = e, P = to(o), m = P && P[0], b = P && P[1], {
    onBeforeEnter: T,
    onEnter: j,
    onEnterCancelled: w,
    onLeave: M,
    onLeaveCancelled: F,
    onBeforeAppear: G = T,
    onAppear: E = j,
    onAppearCancelled: ue = w
  } = t, R = (g, $, K, de) => {
    g._enterCancelled = de, te(g, $ ? d : a), te(g, $ ? p : i), K && K();
  }, Be = (g, $) => {
    g._isLeaving = !1, te(g, y), te(g, I), te(g, C), $ && $();
  }, ke = (g) => ($, K) => {
    const de = g ? E : j, He = () => R($, g, K);
    ee(de, [$, He]), Ht(() => {
      te($, g ? u : r), q($, g ? d : a), kt(de) || jt($, s, m, He);
    });
  };
  return Tt(t, {
    onBeforeEnter(g) {
      ee(T, [g]), q(g, r), q(g, i);
    },
    onBeforeAppear(g) {
      ee(G, [g]), q(g, u), q(g, p);
    },
    onEnter: ke(!1),
    onAppear: ke(!0),
    onLeave(g, $) {
      g._isLeaving = !0;
      const K = () => Be(g, $);
      q(g, y), g._enterCancelled ? (q(g, C), Gt()) : (Gt(), q(g, C)), Ht(() => {
        g._isLeaving && (te(g, y), q(g, I), kt(M) || jt(g, s, b, K));
      }), ee(M, [g, K]);
    },
    onEnterCancelled(g) {
      R(g, !1, void 0, !0), ee(w, [g]);
    },
    onAppearCancelled(g) {
      R(g, !0, void 0, !0), ee(ue, [g]);
    },
    onLeaveCancelled(g) {
      Be(g), ee(F, [g]);
    }
  });
}
function to(e) {
  if (e == null)
    return null;
  if (Nt(e))
    return [ft(e.enter), ft(e.leave)];
  {
    const t = ft(e);
    return [t, t];
  }
}
function ft(e) {
  const t = As(e);
  return process.env.NODE_ENV !== "production" && Ps(t, "<transition> explicit duration"), t;
}
function q(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[$e] || (e[$e] = /* @__PURE__ */ new Set())).add(t);
}
function te(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[$e];
  n && (n.delete(t), n.size || (e[$e] = void 0));
}
function Ht(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let no = 0;
function jt(e, t, n, s) {
  const o = e._endId = ++no, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: a, propCount: u } = so(e, t);
  if (!i)
    return s();
  const p = i + "end";
  let d = 0;
  const y = () => {
    e.removeEventListener(p, C), r();
  }, C = (I) => {
    I.target === e && ++d >= u && y();
  };
  setTimeout(() => {
    d < u && y();
  }, a + 1), e.addEventListener(p, C);
}
function so(e, t) {
  const n = window.getComputedStyle(e), s = (P) => (n[P] || "").split(", "), o = s(`${X}Delay`), r = s(`${X}Duration`), i = Vt(o, r), a = s(`${Ee}Delay`), u = s(`${Ee}Duration`), p = Vt(a, u);
  let d = null, y = 0, C = 0;
  t === X ? i > 0 && (d = X, y = i, C = r.length) : t === Ee ? p > 0 && (d = Ee, y = p, C = u.length) : (y = Math.max(i, p), d = y > 0 ? i > p ? X : Ee : null, C = d ? d === X ? r.length : u.length : 0);
  const I = d === X && /\b(transform|all)(,|$)/.test(
    s(`${X}Property`).toString()
  );
  return {
    type: d,
    timeout: y,
    propCount: C,
    hasTransform: I
  };
}
function Vt(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Ut(n) + Ut(e[s])));
}
function Ut(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Gt() {
  return document.body.offsetHeight;
}
function oo(e, t, n) {
  const s = e[$e];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const et = Symbol("_vod"), Bn = Symbol("_vsh"), ze = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[et] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Te(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Te(e, !0), s.enter(e)) : s.leave(e, () => {
      Te(e, !1);
    }) : Te(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Te(e, t);
  }
};
process.env.NODE_ENV !== "production" && (ze.name = "show");
function Te(e, t) {
  e.style.display = t ? e[et] : "none", e[Bn] = !t;
}
const io = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), ro = /(^|;)\s*display\s*:/;
function ao(e, t, n) {
  const s = e.style, o = B(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (B(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Ze(s, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Ze(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Ze(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[io];
      i && (n += ";" + i), s.cssText = n, r = ro.test(n);
    }
  } else t && e.removeAttribute("style");
  et in e && (e[et] = r ? s.display : "", e[Bn] && (s.display = "none"));
}
const lo = /[^\\];\s*$/, Kt = /\s*!important$/;
function Ze(e, t, n) {
  if (ae(n))
    n.forEach((s) => Ze(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && lo.test(n) && _e(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = co(e, t);
    Kt.test(n) ? e.setProperty(
      $n(s),
      n.replace(Kt, ""),
      "important"
    ) : e[s] = n;
  }
}
const qt = ["Webkit", "Moz", "ms"], ht = {};
function co(e, t) {
  const n = ht[t];
  if (n)
    return n;
  let s = An(t);
  if (s !== "filter" && s in e)
    return ht[t] = s;
  s = Fs(s);
  for (let o = 0; o < qt.length; o++) {
    const r = qt[o] + s;
    if (r in e)
      return ht[t] = r;
  }
  return t;
}
const Zt = "http://www.w3.org/1999/xlink";
function Jt(e, t, n, s, o, r = Ls(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Zt, t.slice(6, t.length)) : e.setAttributeNS(Zt, t, n) : n == null || r && !Mn(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Rs(n) ? String(n) : n
  );
}
function Yt(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Wn(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const a = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Mn(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !i && _e(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(o || t);
}
function kn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function uo(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Qt = Symbol("_vei");
function po(e, t, n, s, o = null) {
  const r = e[Qt] || (e[Qt] = {}), i = r[t];
  if (s && i)
    i.value = process.env.NODE_ENV !== "production" ? en(s, t) : s;
  else {
    const [a, u] = fo(t);
    if (s) {
      const p = r[t] = mo(
        process.env.NODE_ENV !== "production" ? en(s, t) : s,
        o
      );
      kn(e, a, p, u);
    } else i && (uo(e, a, i, u), r[t] = void 0);
  }
}
const Xt = /(?:Once|Passive|Capture)$/;
function fo(e) {
  let t;
  if (Xt.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Xt); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : $n(e.slice(2)), t];
}
let gt = 0;
const ho = /* @__PURE__ */ Promise.resolve(), go = () => gt || (ho.then(() => gt = 0), gt = Date.now());
function mo(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Bs(
      vo(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = go(), n;
}
function en(e, t) {
  return oe(e) || ae(e) ? e : (_e(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Ws);
}
function vo(e, t) {
  if (ae(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yo = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? oo(e, s, i) : t === "style" ? ao(e, n, s) : $s(t) ? zs(t) || po(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wo(e, t, s, i)) ? (Yt(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Jt(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !B(s)) ? Yt(e, An(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Jt(e, t, s, i));
};
function wo(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && tn(t) && oe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return tn(t) && B(n) ? !1 : t in e;
}
const nn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ae(t) ? (n) => Ns(t, n) : t;
}, mt = Symbol("_assign"), sn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Pn(t);
    kn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Ms(tt(i)) : tt(i)
      );
      e[mt](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, Oe(() => {
        e._assigning = !1;
      });
    }), e[mt] = nn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    on(e, t);
  },
  beforeUpdate(e, t, n) {
    e[mt] = nn(n);
  },
  updated(e, { value: t }) {
    e._assigning || on(e, t);
  }
};
function on(e, t) {
  const n = e.multiple, s = ae(t);
  if (n && !s && !Pn(t)) {
    process.env.NODE_ENV !== "production" && _e(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], a = tt(i);
    if (n)
      if (s) {
        const u = typeof a;
        u === "string" || u === "number" ? i.selected = t.some((p) => String(p) === String(a)) : i.selected = Es(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (Ts(tt(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function tt(e) {
  return "_value" in e ? e._value : e.value;
}
const _o = ["ctrl", "shift", "alt", "meta"], bo = {
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
  exact: (e, t) => _o.some((n) => e[`${n}Key`] && !t.includes(n))
}, xe = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const a = bo[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...r);
  });
}, Co = /* @__PURE__ */ Tt({ patchProp: yo }, Ys);
let rn;
function So() {
  return rn || (rn = Os(Co));
}
const nt = (...e) => {
  So().render(...e);
};
function Eo(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function To(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Je;
const k = "__TAURI_TO_IPC_KEY__";
function No(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function l(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Oo {
  get rid() {
    return Eo(this, Je, "f");
  }
  constructor(t) {
    Je.set(this, void 0), To(this, Je, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return l("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Je = /* @__PURE__ */ new WeakMap();
class De {
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
    return new he(this.width * t, this.height * t);
  }
  [k]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[k]();
  }
}
class he {
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
    return new De(this.width / t, this.height / t);
  }
  [k]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[k]();
  }
}
class pe {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof De ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof he ? this.size : this.size.toPhysical(t);
  }
  [k]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[k]();
  }
}
class Hn {
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
    return new U(this.x * t, this.y * t);
  }
  [k]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[k]();
  }
}
class U {
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
    return new Hn(this.x / t, this.y / t);
  }
  [k]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[k]();
  }
}
class je {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Hn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof U ? this.position : this.position.toPhysical(t);
  }
  [k]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[k]();
  }
}
var W;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(W || (W = {}));
async function jn(e, t) {
  await l("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Vn(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return l("plugin:event|listen", {
    event: e,
    target: o,
    handler: No(t)
  }).then((r) => async () => jn(e, r));
}
async function Io(e, t, n) {
  return Vn(e, (s) => {
    jn(e, s.id), t(s);
  }, n);
}
async function xo(e, t) {
  await l("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Do(e, t, n) {
  await l("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Pe extends Oo {
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
    return l("plugin:image|new", {
      rgba: st(t),
      width: n,
      height: s
    }).then((o) => new Pe(o));
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
    return l("plugin:image|from_bytes", {
      bytes: st(t)
    }).then((n) => new Pe(n));
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
    return l("plugin:image|from_path", { path: t }).then((n) => new Pe(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return l("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return l("plugin:image|size", { rid: this.rid });
  }
}
function st(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Pe ? e.rid : e;
}
var bt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(bt || (bt = {}));
class Po {
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
var an;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(an || (an = {}));
function Un() {
  return new Gn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function vt() {
  return l("plugin:window|get_all_windows").then((e) => e.map((t) => new Gn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const yt = ["tauri://created", "tauri://error"];
class Gn {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || l("plugin:window|create", {
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
    return (n = (await vt()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Un();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return vt();
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
    for (const t of await vt())
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
    } : Vn(t, n, {
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
    } : Io(t, n, {
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
    if (yt.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return xo(t, n);
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
    if (yt.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Do(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return yt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return l("plugin:window|scale_factor", {
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
    return l("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new U(t));
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
    return l("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new U(t));
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
    return l("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new he(t));
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
    return l("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new he(t));
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
    return l("plugin:window|is_fullscreen", {
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
    return l("plugin:window|is_minimized", {
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
    return l("plugin:window|is_maximized", {
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
    return l("plugin:window|is_focused", {
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
    return l("plugin:window|is_decorated", {
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
    return l("plugin:window|is_resizable", {
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
    return l("plugin:window|is_maximizable", {
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
    return l("plugin:window|is_minimizable", {
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
    return l("plugin:window|is_closable", {
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
    return l("plugin:window|is_visible", {
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
    return l("plugin:window|title", {
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
    return l("plugin:window|theme", {
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
    return l("plugin:window|is_always_on_top", {
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
    return l("plugin:window|center", {
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
    return t && (t === bt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), l("plugin:window|request_user_attention", {
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
    return l("plugin:window|set_resizable", {
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
    return l("plugin:window|set_enabled", {
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
    return l("plugin:window|is_enabled", {
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
    return l("plugin:window|set_maximizable", {
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
    return l("plugin:window|set_minimizable", {
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
    return l("plugin:window|set_closable", {
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
    return l("plugin:window|set_title", {
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
    return l("plugin:window|maximize", {
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
    return l("plugin:window|unmaximize", {
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
    return l("plugin:window|toggle_maximize", {
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
    return l("plugin:window|minimize", {
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
    return l("plugin:window|unminimize", {
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
    return l("plugin:window|show", {
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
    return l("plugin:window|hide", {
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
    return l("plugin:window|close", {
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
    return l("plugin:window|destroy", {
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
    return l("plugin:window|set_decorations", {
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
    return l("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return l("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return l("plugin:window|set_effects", {
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
    return l("plugin:window|set_always_on_top", {
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
    return l("plugin:window|set_always_on_bottom", {
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
    return l("plugin:window|set_content_protected", {
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
    return l("plugin:window|set_size", {
      label: this.label,
      value: t instanceof pe ? t : new pe(t)
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
    return l("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof pe ? t : t ? new pe(t) : null
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
    return l("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof pe ? t : t ? new pe(t) : null
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
    return l("plugin:window|set_size_constraints", {
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
    return l("plugin:window|set_position", {
      label: this.label,
      value: t instanceof je ? t : new je(t)
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
    return l("plugin:window|set_fullscreen", {
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
    return l("plugin:window|set_focus", {
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
    return l("plugin:window|set_icon", {
      label: this.label,
      value: st(t)
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
    return l("plugin:window|set_skip_taskbar", {
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
    return l("plugin:window|set_cursor_grab", {
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
    return l("plugin:window|set_cursor_visible", {
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
    return l("plugin:window|set_cursor_icon", {
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
    return l("plugin:window|set_background_color", { color: t });
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
    return l("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof je ? t : new je(t)
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
    return l("plugin:window|set_ignore_cursor_events", {
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
    return l("plugin:window|start_dragging", {
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
    return l("plugin:window|start_resize_dragging", {
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
    return l("plugin:window|set_badge_count", {
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
    return l("plugin:window|set_badge_label", {
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
    return l("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? st(t) : void 0
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
    return l("plugin:window|set_progress_bar", {
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
    return l("plugin:window|set_visible_on_all_workspaces", {
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
    return l("plugin:window|set_title_bar_style", {
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
    return l("plugin:window|set_theme", {
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
    return this.listen(W.WINDOW_RESIZED, (n) => {
      n.payload = new he(n.payload), t(n);
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
    return this.listen(W.WINDOW_MOVED, (n) => {
      n.payload = new U(n.payload), t(n);
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
    return this.listen(W.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new Po(n);
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
    const n = await this.listen(W.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new U(i.payload.position)
        }
      });
    }), s = await this.listen(W.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new U(i.payload.position)
        }
      });
    }), o = await this.listen(W.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new U(i.payload.position)
        }
      });
    }), r = await this.listen(W.DRAG_LEAVE, (i) => {
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
    const n = await this.listen(W.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(W.WINDOW_BLUR, (o) => {
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
    return this.listen(W.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(W.WINDOW_THEME_CHANGED, t);
  }
}
var ln;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ln || (ln = {}));
var cn;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(cn || (cn = {}));
var un;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(un || (un = {}));
function Ao(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new U(e.position),
    size: new he(e.size)
  };
}
async function Mo(e, t) {
  return l("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Ao);
}
const Kn = Symbol(), Ye = "el", $o = "is-", ne = (e, t, n, s, o) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), s && (r += `__${s}`), o && (r += `--${o}`), r;
}, qn = Symbol("namespaceContextKey"), zo = (e) => {
  const t = e || (ge() ? fe(qn, O(Ye)) : O(Ye));
  return _(() => c(t) || Ye);
}, xt = (e, t) => {
  const n = zo(t);
  return {
    namespace: n,
    b: (m = "") => ne(n.value, e, m, "", ""),
    e: (m) => m ? ne(n.value, e, "", m, "") : "",
    m: (m) => m ? ne(n.value, e, "", "", m) : "",
    be: (m, b) => m && b ? ne(n.value, e, m, b, "") : "",
    em: (m, b) => m && b ? ne(n.value, e, "", m, b) : "",
    bm: (m, b) => m && b ? ne(n.value, e, m, "", b) : "",
    bem: (m, b, T) => m && b && T ? ne(n.value, e, m, b, T) : "",
    is: (m, ...b) => {
      const T = b.length >= 1 ? b[0] : !0;
      return m && T ? `${$o}${m}` : "";
    },
    cssVar: (m) => {
      const b = {};
      for (const T in m)
        m[T] && (b[`--${n.value}-${T}`] = m[T]);
      return b;
    },
    cssVarName: (m) => `--${n.value}-${m}`,
    cssVarBlock: (m) => {
      const b = {};
      for (const T in m)
        m[T] && (b[`--${n.value}-${e}-${T}`] = m[T]);
      return b;
    },
    cssVarBlockName: (m) => `--${n.value}-${e}-${m}`
  };
};
var Lo = typeof global == "object" && global && global.Object === Object && global, Ro = typeof self == "object" && self && self.Object === Object && self, Dt = Lo || Ro || Function("return this")(), ve = Dt.Symbol, Zn = Object.prototype, Wo = Zn.hasOwnProperty, Fo = Zn.toString, Ne = ve ? ve.toStringTag : void 0;
function Bo(e) {
  var t = Wo.call(e, Ne), n = e[Ne];
  try {
    e[Ne] = void 0;
    var s = !0;
  } catch {
  }
  var o = Fo.call(e);
  return s && (t ? e[Ne] = n : delete e[Ne]), o;
}
var ko = Object.prototype, Ho = ko.toString;
function jo(e) {
  return Ho.call(e);
}
var Vo = "[object Null]", Uo = "[object Undefined]", dn = ve ? ve.toStringTag : void 0;
function Jn(e) {
  return e == null ? e === void 0 ? Uo : Vo : dn && dn in Object(e) ? Bo(e) : jo(e);
}
function Go(e) {
  return e != null && typeof e == "object";
}
var Ko = "[object Symbol]";
function Pt(e) {
  return typeof e == "symbol" || Go(e) && Jn(e) == Ko;
}
function qo(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var At = Array.isArray, pn = ve ? ve.prototype : void 0, fn = pn ? pn.toString : void 0;
function Yn(e) {
  if (typeof e == "string")
    return e;
  if (At(e))
    return qo(e, Yn) + "";
  if (Pt(e))
    return fn ? fn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Qn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zo = "[object AsyncFunction]", Jo = "[object Function]", Yo = "[object GeneratorFunction]", Qo = "[object Proxy]";
function Xo(e) {
  if (!Qn(e))
    return !1;
  var t = Jn(e);
  return t == Jo || t == Yo || t == Zo || t == Qo;
}
var wt = Dt["__core-js_shared__"], hn = function() {
  var e = /[^.]+$/.exec(wt && wt.keys && wt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ei(e) {
  return !!hn && hn in e;
}
var ti = Function.prototype, ni = ti.toString;
function si(e) {
  if (e != null) {
    try {
      return ni.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var oi = /[\\^$.*+?()[\]{}|]/g, ii = /^\[object .+?Constructor\]$/, ri = Function.prototype, ai = Object.prototype, li = ri.toString, ci = ai.hasOwnProperty, ui = RegExp(
  "^" + li.call(ci).replace(oi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function di(e) {
  if (!Qn(e) || ei(e))
    return !1;
  var t = Xo(e) ? ui : ii;
  return t.test(si(e));
}
function pi(e, t) {
  return e?.[t];
}
function Xn(e, t) {
  var n = pi(e, t);
  return di(n) ? n : void 0;
}
function fi(e, t) {
  return e === t || e !== e && t !== t;
}
var hi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gi = /^\w*$/;
function mi(e, t) {
  if (At(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Pt(e) ? !0 : gi.test(e) || !hi.test(e) || t != null && e in Object(t);
}
var Le = Xn(Object, "create");
function vi() {
  this.__data__ = Le ? Le(null) : {}, this.size = 0;
}
function yi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var wi = "__lodash_hash_undefined__", _i = Object.prototype, bi = _i.hasOwnProperty;
function Ci(e) {
  var t = this.__data__;
  if (Le) {
    var n = t[e];
    return n === wi ? void 0 : n;
  }
  return bi.call(t, e) ? t[e] : void 0;
}
var Si = Object.prototype, Ei = Si.hasOwnProperty;
function Ti(e) {
  var t = this.__data__;
  return Le ? t[e] !== void 0 : Ei.call(t, e);
}
var Ni = "__lodash_hash_undefined__";
function Oi(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Le && t === void 0 ? Ni : t, this;
}
function ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ie.prototype.clear = vi;
ie.prototype.delete = yi;
ie.prototype.get = Ci;
ie.prototype.has = Ti;
ie.prototype.set = Oi;
function Ii() {
  this.__data__ = [], this.size = 0;
}
function ct(e, t) {
  for (var n = e.length; n--; )
    if (fi(e[n][0], t))
      return n;
  return -1;
}
var xi = Array.prototype, Di = xi.splice;
function Pi(e) {
  var t = this.__data__, n = ct(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Di.call(t, n, 1), --this.size, !0;
}
function Ai(e) {
  var t = this.__data__, n = ct(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Mi(e) {
  return ct(this.__data__, e) > -1;
}
function $i(e, t) {
  var n = this.__data__, s = ct(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
be.prototype.clear = Ii;
be.prototype.delete = Pi;
be.prototype.get = Ai;
be.prototype.has = Mi;
be.prototype.set = $i;
var zi = Xn(Dt, "Map");
function Li() {
  this.size = 0, this.__data__ = {
    hash: new ie(),
    map: new (zi || be)(),
    string: new ie()
  };
}
function Ri(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ut(e, t) {
  var n = e.__data__;
  return Ri(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Wi(e) {
  var t = ut(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Fi(e) {
  return ut(this, e).get(e);
}
function Bi(e) {
  return ut(this, e).has(e);
}
function ki(e, t) {
  var n = ut(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function le(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
le.prototype.clear = Li;
le.prototype.delete = Wi;
le.prototype.get = Fi;
le.prototype.has = Bi;
le.prototype.set = ki;
var Hi = "Expected a function";
function Mt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Hi);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], r = n.cache;
    if (r.has(o))
      return r.get(o);
    var i = e.apply(this, s);
    return n.cache = r.set(o, i) || r, i;
  };
  return n.cache = new (Mt.Cache || le)(), n;
}
Mt.Cache = le;
var ji = 500;
function Vi(e) {
  var t = Mt(e, function(s) {
    return n.size === ji && n.clear(), s;
  }), n = t.cache;
  return t;
}
var Ui = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Gi = /\\(\\)?/g, Ki = Vi(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ui, function(n, s, o, r) {
    t.push(o ? r.replace(Gi, "$1") : s || n);
  }), t;
});
function qi(e) {
  return e == null ? "" : Yn(e);
}
function Zi(e, t) {
  return At(e) ? e : mi(e, t) ? [e] : Ki(qi(e));
}
function Ji(e) {
  if (typeof e == "string" || Pt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Yi(e, t) {
  t = Zi(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[Ji(t[n++])];
  return n && n == s ? e : void 0;
}
function Qi(e, t, n) {
  var s = e == null ? void 0 : Yi(e, t);
  return s === void 0 ? n : s;
}
function Xi(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const es = (e) => e === void 0, gn = (e) => typeof e == "boolean", re = (e) => typeof e == "number", Ct = (e) => typeof Element > "u" ? !1 : e instanceof Element, er = (e) => B(e) ? !Number.isNaN(Number(e)) : !1;
var mn;
const ce = typeof window < "u", tr = (e) => typeof e == "string", nr = () => {
};
ce && ((mn = window?.navigator) != null && mn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function $t(e) {
  return typeof e == "function" ? e() : c(e);
}
function sr(e) {
  return e;
}
function zt(e) {
  return Hs() ? (js(e), !0) : !1;
}
function or(e, t = !0) {
  ge() ? lt(e) : t ? e() : Oe(e);
}
function ts(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = O(!1);
  let r = null;
  function i() {
    r && (clearTimeout(r), r = null);
  }
  function a() {
    o.value = !1, i();
  }
  function u(...p) {
    i(), o.value = !0, r = setTimeout(() => {
      o.value = !1, r = null, e(...p);
    }, $t(t));
  }
  return s && (o.value = !0, ce && u()), zt(a), {
    isPending: ks(o),
    start: u,
    stop: a
  };
}
function ns(e) {
  var t;
  const n = $t(e);
  return (t = n?.$el) != null ? t : n;
}
const ss = ce ? window : void 0;
function os(...e) {
  let t, n, s, o;
  if (tr(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = ss) : [t, n, s, o] = e, !t)
    return nr;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((d) => d()), r.length = 0;
  }, a = (d, y, C, I) => (d.addEventListener(y, C, I), () => d.removeEventListener(y, C, I)), u = Ot(() => [ns(t), $t(o)], ([d, y]) => {
    i(), d && r.push(...n.flatMap((C) => s.map((I) => a(d, C, I, y))));
  }, { immediate: !0, flush: "post" }), p = () => {
    u(), i();
  };
  return zt(p), p;
}
function ir(e, t = !1) {
  const n = O(), s = () => n.value = !!e();
  return s(), or(s, t), n;
}
const vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yn = "__vueuse_ssr_handlers__";
vn[yn] = vn[yn] || {};
var wn = Object.getOwnPropertySymbols, rr = Object.prototype.hasOwnProperty, ar = Object.prototype.propertyIsEnumerable, lr = (e, t) => {
  var n = {};
  for (var s in e)
    rr.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && wn)
    for (var s of wn(e))
      t.indexOf(s) < 0 && ar.call(e, s) && (n[s] = e[s]);
  return n;
};
function cr(e, t, n = {}) {
  const s = n, { window: o = ss } = s, r = lr(s, ["window"]);
  let i;
  const a = ir(() => o && "ResizeObserver" in o), u = () => {
    i && (i.disconnect(), i = void 0);
  }, p = Ot(() => ns(e), (y) => {
    u(), a.value && o && y && (i = new ResizeObserver(t), i.observe(y, r));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), p();
  };
  return zt(d), {
    isSupported: a,
    stop: d
  };
}
var _n;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(_n || (_n = {}));
var ur = Object.defineProperty, bn = Object.getOwnPropertySymbols, dr = Object.prototype.hasOwnProperty, pr = Object.prototype.propertyIsEnumerable, Cn = (e, t, n) => t in e ? ur(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fr = (e, t) => {
  for (var n in t || (t = {}))
    dr.call(t, n) && Cn(e, n, t[n]);
  if (bn)
    for (var n of bn(t))
      pr.call(t, n) && Cn(e, n, t[n]);
  return e;
};
const hr = {
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
fr({
  linear: sr
}, hr);
class gr extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function We(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = B(e) ? new gr(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Sn = {
  current: 0
}, En = O(0), is = 2e3, Tn = Symbol("elZIndexContextKey"), rs = Symbol("zIndexContextKey"), mr = (e) => {
  const t = ge() ? fe(Tn, Sn) : Sn, n = e || (ge() ? fe(rs, void 0) : void 0), s = _(() => {
    const i = c(n);
    return re(i) ? i : is;
  }), o = _(() => s.value + En.value), r = () => (t.current++, En.value = t.current, o.value);
  return !ce && !fe(Tn) && We("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: r
  };
};
var vr = {
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
const yr = (e) => (t, n) => wr(t, n, c(e)), wr = (e, t, n) => Qi(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var r;
  return `${(r = t?.[o]) != null ? r : `{${o}}`}`;
}), _r = (e) => {
  const t = _(() => c(e).name), n = Vs(e) ? e : O(e);
  return {
    lang: t,
    locale: n,
    t: yr(e)
  };
}, as = Symbol("localeContextKey"), br = (e) => {
  const t = e || fe(as, O());
  return _r(_(() => t.value || vr));
}, ls = "__epPropKey", Q = (e) => e, Cr = (e) => Nt(e) && !!e[ls], cs = (e, t) => {
  if (!Nt(e) || Cr(e))
    return e;
  const { values: n, required: s, default: o, type: r, validator: i } = e, u = {
    type: r,
    required: !!s,
    validator: n || i ? (p) => {
      let d = !1, y = [];
      if (n && (y = Array.from(n), Wt(e, "default") && y.push(o), d || (d = y.includes(p))), i && (d || (d = i(p))), !d && y.length > 0) {
        const C = [...new Set(y)].map((I) => JSON.stringify(I)).join(", ");
        _e(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${C}], got value ${JSON.stringify(p)}.`);
      }
      return d;
    } : void 0,
    [ls]: !0
  };
  return Wt(e, "default") && (u.default = o), u;
}, Fe = (e) => Xi(Object.entries(e).map(([t, n]) => [
  t,
  cs(n, t)
])), Sr = ["", "default", "small", "large"], Qa = cs({
  type: String,
  values: Sr,
  required: !1
}), Er = Symbol("size"), Tr = Symbol("emptyValuesContextKey"), Xa = Fe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => oe(e) ? !e() : !e
  }
}), Nn = (e) => Object.keys(e), ot = O();
function us(e, t = void 0) {
  return ge() ? fe(Kn, ot) : ot;
}
function ds(e, t) {
  const n = us(), s = xt(e, _(() => {
    var a;
    return ((a = n.value) == null ? void 0 : a.namespace) || Ye;
  })), o = br(_(() => {
    var a;
    return (a = n.value) == null ? void 0 : a.locale;
  })), r = mr(_(() => {
    var a;
    return ((a = n.value) == null ? void 0 : a.zIndex) || is;
  })), i = _(() => {
    var a;
    return c(t) || ((a = n.value) == null ? void 0 : a.size) || "";
  });
  return Nr(_(() => c(n) || {})), {
    ns: s,
    locale: o,
    zIndex: r,
    size: i
  };
}
const Nr = (e, t, n = !1) => {
  var s;
  const o = !!ge(), r = o ? us() : void 0, i = (s = void 0) != null ? s : o ? Us : void 0;
  if (!i) {
    We("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const a = _(() => {
    const u = c(e);
    return r?.value ? Or(r.value, u) : u;
  });
  return i(Kn, a), i(as, _(() => a.value.locale)), i(qn, _(() => a.value.namespace)), i(rs, _(() => a.value.zIndex)), i(Er, {
    size: _(() => a.value.size || "")
  }), i(Tr, _(() => ({
    emptyValues: a.value.emptyValues,
    valueOnClear: a.value.valueOnClear
  }))), (n || !ot.value) && (ot.value = a.value), a;
}, Or = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Nn(e), ...Nn(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var dt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
const Ir = "utils/dom/style";
function St(e, t = "px") {
  if (!e)
    return "";
  if (re(e) || er(e))
    return `${e}${t}`;
  if (B(e))
    return e;
  We(Ir, "binding value must be a string or number");
}
const ps = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), fs = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), xr = Fe({
  size: {
    type: Q([Number, String])
  },
  color: {
    type: String
  }
}), Dr = L({
  name: "ElIcon",
  inheritAttrs: !1
}), Pr = /* @__PURE__ */ L({
  ...Dr,
  props: xr,
  setup(e) {
    const t = e, n = xt("icon"), s = _(() => {
      const { size: o, color: r } = t;
      return !o && !r ? {} : {
        fontSize: es(o) ? void 0 : St(o),
        "--color": r
      };
    });
    return (o, r) => (S(), x("i", Gs({
      class: c(n).b(),
      style: c(s)
    }, o.$attrs), [
      Ae(o.$slots, "default")
    ], 16));
  }
});
var Ar = /* @__PURE__ */ dt(Pr, [["__file", "icon.vue"]]);
const it = ps(Ar);
/*! Element Plus Icons Vue v2.3.1 */
var Mr = /* @__PURE__ */ L({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (S(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), $r = Mr, zr = /* @__PURE__ */ L({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (S(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), hs = zr, Lr = /* @__PURE__ */ L({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (S(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Rr = Lr, Wr = /* @__PURE__ */ L({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (S(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Fr = Wr, Br = /* @__PURE__ */ L({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (S(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      f("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), kr = Br;
const gs = Q([
  String,
  Object,
  Function
]), Hr = {
  Close: hs
}, jr = {
  Close: hs
}, rt = {
  success: Fr,
  warning: kr,
  error: $r,
  info: Rr
}, Vr = (e) => e, Qe = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ur = Fe({
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
    type: Q([String, Object, Array])
  },
  offset: {
    type: Q(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Gr = L({
  name: "ElBadge"
}), Kr = /* @__PURE__ */ L({
  ...Gr,
  props: Ur,
  setup(e, { expose: t }) {
    const n = e, s = xt("badge"), o = _(() => n.isDot ? "" : re(n.value) && re(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = _(() => {
      var i, a, u, p, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: St(-((a = (i = n.offset) == null ? void 0 : i[0]) != null ? a : 0)),
          marginTop: St((p = (u = n.offset) == null ? void 0 : u[1]) != null ? p : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (i, a) => (S(), x("div", {
      class: D(c(s).b())
    }, [
      Ae(i.$slots, "default"),
      Re(It, {
        name: `${c(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: se(() => [
          me(f("sup", {
            class: D([
              c(s).e("content"),
              c(s).em("content", i.type),
              c(s).is("fixed", !!i.$slots.default),
              c(s).is("dot", i.isDot),
              c(s).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: Xe(c(r))
          }, [
            Ae(i.$slots, "content", { value: c(o) }, () => [
              zn(z(c(o)), 1)
            ])
          ], 6), [
            [ze, !i.hidden && (c(o) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var qr = /* @__PURE__ */ dt(Kr, [["__file", "badge.vue"]]);
const Zr = ps(qr), V = {}, ms = ["success", "info", "warning", "error"], A = Vr({
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
  appendTo: ce ? document.body : void 0
}), Jr = Fe({
  customClass: {
    type: String,
    default: A.customClass
  },
  center: {
    type: Boolean,
    default: A.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: A.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: A.duration
  },
  icon: {
    type: gs,
    default: A.icon
  },
  id: {
    type: String,
    default: A.id
  },
  message: {
    type: Q([
      String,
      Object,
      Function
    ]),
    default: A.message
  },
  onClose: {
    type: Q(Function),
    default: A.onClose
  },
  showClose: {
    type: Boolean,
    default: A.showClose
  },
  type: {
    type: String,
    values: ms,
    default: A.type
  },
  plain: {
    type: Boolean,
    default: A.plain
  },
  offset: {
    type: Number,
    default: A.offset
  },
  zIndex: {
    type: Number,
    default: A.zIndex
  },
  grouping: {
    type: Boolean,
    default: A.grouping
  },
  repeatNum: {
    type: Number,
    default: A.repeatNum
  }
}), Yr = {
  destroy: () => !0
}, H = Ks([]), Qr = (e) => {
  const t = H.findIndex((o) => o.id === e), n = H[t];
  let s;
  return t > 0 && (s = H[t - 1]), { current: n, prev: s };
}, Xr = (e) => {
  const { prev: t } = Qr(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, ea = (e, t) => H.findIndex((s) => s.id === e) > 0 ? 16 : t, ta = L({
  name: "ElMessage"
}), na = /* @__PURE__ */ L({
  ...ta,
  props: Jr,
  emits: Yr,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = jr, { ns: o, zIndex: r } = ds("message"), { currentZIndex: i, nextZIndex: a } = r, u = O(), p = O(!1), d = O(0);
    let y;
    const C = _(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), I = _(() => {
      const E = n.type;
      return { [o.bm("icon", E)]: E && rt[E] };
    }), P = _(() => n.icon || rt[n.type] || ""), m = _(() => Xr(n.id)), b = _(() => ea(n.id, n.offset) + m.value), T = _(() => d.value + b.value), j = _(() => ({
      top: `${b.value}px`,
      zIndex: i.value
    }));
    function w() {
      n.duration !== 0 && ({ stop: y } = ts(() => {
        F();
      }, n.duration));
    }
    function M() {
      y?.();
    }
    function F() {
      p.value = !1;
    }
    function G({ code: E }) {
      E === Qe.esc && F();
    }
    return lt(() => {
      w(), a(), p.value = !0;
    }), Ot(() => n.repeatNum, () => {
      M(), w();
    }), os(document, "keydown", G), cr(u, () => {
      d.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: p,
      bottom: T,
      close: F
    }), (E, ue) => (S(), J(It, {
      name: c(o).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (R) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: se(() => [
        me(f("div", {
          id: E.id,
          ref_key: "messageRef",
          ref: u,
          class: D([
            c(o).b(),
            { [c(o).m(E.type)]: E.type },
            c(o).is("center", E.center),
            c(o).is("closable", E.showClose),
            c(o).is("plain", E.plain),
            E.customClass
          ]),
          style: Xe(c(j)),
          role: "alert",
          onMouseenter: M,
          onMouseleave: w
        }, [
          E.repeatNum > 1 ? (S(), J(c(Zr), {
            key: 0,
            value: E.repeatNum,
            type: c(C),
            class: D(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Y("v-if", !0),
          c(P) ? (S(), J(c(it), {
            key: 1,
            class: D([c(o).e("icon"), c(I)])
          }, {
            default: se(() => [
              (S(), J(Ln(c(P))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          Ae(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (S(), x(Ie, { key: 1 }, [
              Y(" Caution here, message could've been compromised, never use user's input as message "),
              f("p", {
                class: D(c(o).e("content")),
                innerHTML: E.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), x("p", {
              key: 0,
              class: D(c(o).e("content"))
            }, z(E.message), 3))
          ]),
          E.showClose ? (S(), J(c(it), {
            key: 2,
            class: D(c(o).e("closeBtn")),
            onClick: xe(F, ["stop"])
          }, {
            default: se(() => [
              Re(c(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 46, ["id"]), [
          [ze, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var sa = /* @__PURE__ */ dt(na, [["__file", "message.vue"]]);
let oa = 1;
const vs = (e) => {
  const t = !e || B(e) || Me(e) || oe(e) ? { message: e } : e, n = {
    ...A,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (B(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    Ct(s) || (We("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), s = document.body), n.appendTo = s;
  }
  return gn(V.grouping) && !n.grouping && (n.grouping = V.grouping), re(V.duration) && n.duration === 3e3 && (n.duration = V.duration), re(V.offset) && n.offset === 16 && (n.offset = V.offset), gn(V.showClose) && !n.showClose && (n.showClose = V.showClose), n;
}, ia = (e) => {
  const t = H.indexOf(e);
  if (t === -1)
    return;
  H.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ra = ({ appendTo: e, ...t }, n) => {
  const s = `message_${oa++}`, o = t.onClose, r = document.createElement("div"), i = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), ia(d);
    },
    onDestroy: () => {
      nt(null, r);
    }
  }, a = Re(sa, i, oe(i.message) || Me(i.message) ? {
    default: oe(i.message) ? i.message : () => i.message
  } : null);
  a.appContext = n || ye._context, nt(a, r), e.appendChild(r.firstElementChild);
  const u = a.component, d = {
    id: s,
    vnode: a,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: a.component.props
  };
  return d;
}, ye = (e = {}, t) => {
  if (!ce)
    return { close: () => {
    } };
  const n = vs(e);
  if (n.grouping && H.length) {
    const o = H.find(({ vnode: r }) => {
      var i;
      return ((i = r.props) == null ? void 0 : i.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (re(V.max) && H.length >= V.max)
    return { close: () => {
    } };
  const s = ra(n, t);
  return H.push(s), s.handler;
};
ms.forEach((e) => {
  ye[e] = (t = {}, n) => {
    const s = vs(t);
    return ye({ ...s, type: e }, n);
  };
});
function aa(e) {
  for (const t of H)
    (!e || e === t.props.type) && t.handler.close();
}
ye.closeAll = aa;
ye._context = null;
const la = fs(ye, "$message"), ys = [
  "success",
  "info",
  "warning",
  "error"
], ca = Fe({
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
    type: gs
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Q([
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
    type: Q(Function),
    default: () => {
    }
  },
  onClose: {
    type: Q(Function),
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
    values: [...ys, ""],
    default: ""
  },
  zIndex: Number
}), ua = {
  destroy: () => !0
}, da = L({
  name: "ElNotification"
}), pa = /* @__PURE__ */ L({
  ...da,
  props: ca,
  emits: ua,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = ds("notification"), { nextZIndex: r, currentZIndex: i } = o, { Close: a } = Hr, u = O(!1);
    let p;
    const d = _(() => {
      const w = n.type;
      return w && rt[n.type] ? s.m(w) : "";
    }), y = _(() => n.type && rt[n.type] || n.icon), C = _(() => n.position.endsWith("right") ? "right" : "left"), I = _(() => n.position.startsWith("top") ? "top" : "bottom"), P = _(() => {
      var w;
      return {
        [I.value]: `${n.offset}px`,
        zIndex: (w = n.zIndex) != null ? w : i.value
      };
    });
    function m() {
      n.duration > 0 && ({ stop: p } = ts(() => {
        u.value && T();
      }, n.duration));
    }
    function b() {
      p?.();
    }
    function T() {
      u.value = !1;
    }
    function j({ code: w }) {
      w === Qe.delete || w === Qe.backspace ? b() : w === Qe.esc ? u.value && T() : m();
    }
    return lt(() => {
      m(), r(), u.value = !0;
    }), os(document, "keydown", j), t({
      visible: u,
      close: T
    }), (w, M) => (S(), J(It, {
      name: c(s).b("fade"),
      onBeforeLeave: w.onClose,
      onAfterLeave: (F) => w.$emit("destroy"),
      persisted: ""
    }, {
      default: se(() => [
        me(f("div", {
          id: w.id,
          class: D([c(s).b(), w.customClass, c(C)]),
          style: Xe(c(P)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: m,
          onClick: w.onClick
        }, [
          c(y) ? (S(), J(c(it), {
            key: 0,
            class: D([c(s).e("icon"), c(d)])
          }, {
            default: se(() => [
              (S(), J(Ln(c(y))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          f("div", {
            class: D(c(s).e("group"))
          }, [
            f("h2", {
              class: D(c(s).e("title")),
              textContent: z(w.title)
            }, null, 10, ["textContent"]),
            me(f("div", {
              class: D(c(s).e("content")),
              style: Xe(w.title ? void 0 : { margin: 0 })
            }, [
              Ae(w.$slots, "default", {}, () => [
                w.dangerouslyUseHTMLString ? (S(), x(Ie, { key: 1 }, [
                  Y(" Caution here, message could've been compromised, never use user's input as message "),
                  f("p", { innerHTML: w.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), x("p", { key: 0 }, z(w.message), 1))
              ])
            ], 6), [
              [ze, w.message]
            ]),
            w.showClose ? (S(), J(c(it), {
              key: 0,
              class: D(c(s).e("closeBtn")),
              onClick: xe(T, ["stop"])
            }, {
              default: se(() => [
                Re(c(a))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Y("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [ze, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var fa = /* @__PURE__ */ dt(pa, [["__file", "notification.vue"]]);
const at = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Et = 16;
let ha = 1;
const we = function(e = {}, t) {
  if (!ce)
    return { close: () => {
    } };
  (B(e) || Me(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  at[n].forEach(({ vm: d }) => {
    var y;
    s += (((y = d.el) == null ? void 0 : y.offsetHeight) || 0) + Et;
  }), s += Et;
  const o = `notification_${ha++}`, r = e.onClose, i = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      ga(o, n, r);
    }
  };
  let a = document.body;
  Ct(e.appendTo) ? a = e.appendTo : B(e.appendTo) && (a = document.querySelector(e.appendTo)), Ct(a) || (We("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), a = document.body);
  const u = document.createElement("div"), p = Re(fa, i, oe(i.message) ? i.message : Me(i.message) ? () => i.message : null);
  return p.appContext = es(t) ? we._context : t, p.props.onDestroy = () => {
    nt(null, u);
  }, nt(p, u), at[n].push({ vm: p }), a.appendChild(u.firstElementChild), {
    close: () => {
      p.component.exposed.visible.value = !1;
    }
  };
};
ys.forEach((e) => {
  we[e] = (t = {}, n) => ((B(t) || Me(t)) && (t = {
    message: t
  }), we({ ...t, type: e }, n));
});
function ga(e, t, n) {
  const s = at[t], o = s.findIndex(({ vm: p }) => {
    var d;
    return ((d = p.component) == null ? void 0 : d.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: r } = s[o];
  if (!r)
    return;
  n?.(r);
  const i = r.el.offsetHeight, a = t.split("-")[0];
  s.splice(o, 1);
  const u = s.length;
  if (!(u < 1))
    for (let p = o; p < u; p++) {
      const { el: d, component: y } = s[p].vm, C = Number.parseInt(d.style[a], 10) - i - Et;
      y.props.offset = C;
    }
}
function ma() {
  for (const e of Object.values(at))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
we.closeAll = ma;
we._context = null;
const va = fs(we, "$notify"), ya = {
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
    s === "center" ? la({
      message: t,
      type: n,
      duration: o,
      showClose: r,
      grouping: !0
    }) : va({
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
}, wa = () => l("screen_recorder_get_ffmpeg_status"), Ve = (e) => l("screen_recorder_set_capture_excluded", { excluded: e }), Ue = (e) => l("screen_recorder_set_passthrough_region", { region: e }), _a = () => l("screen_recorder_pick_target_window"), ba = () => l("screen_recorder_close_window"), Ca = (e, t) => l("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio
}), Sa = () => l("screen_recorder_pause_recording"), Ea = (e, t) => l("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio
}), Ta = () => l("screen_recorder_stop_recording"), Na = () => l("screen_recorder_cancel_recording"), Oa = (e) => l("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), On = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
});
function Ia() {
  const e = O("selecting"), t = O(On()), n = O(null), s = O(null), o = O(""), r = O(null), i = O(0), a = O(0), u = O(null), p = () => {
    a.value = e.value === "recording" && r.value !== null ? i.value + Date.now() - r.value : i.value;
  }, d = () => {
    u.value !== null && (window.clearInterval(u.value), u.value = null);
  }, y = () => {
    d(), p(), u.value = window.setInterval(() => {
      p();
    }, 250);
  }, C = async () => (n.value = await wa(), n.value), I = async (M) => {
    o.value = "", s.value = null;
    const F = n.value ?? await C();
    if (!F.available)
      throw new Error(F.message || "FFmpeg unavailable");
    await Ca(M, t.value), e.value = "recording", i.value = 0, a.value = 0, r.value = Date.now(), y();
  }, P = async () => {
    e.value === "recording" && (p(), i.value = a.value, r.value = null, d(), await Sa(), e.value = "paused");
  }, m = async (M) => {
    e.value === "paused" && (await Ea(M, t.value), e.value = "recording", r.value = Date.now(), y());
  }, b = async () => {
    e.value !== "recording" && e.value !== "paused" || (p(), i.value = a.value, r.value = null, d(), await Ta(), e.value = "exporting");
  }, T = async () => (e.value = "exporting", s.value = await Oa(t.value), e.value = "completed", s.value), j = async () => {
    d(), await Na(), e.value = "selecting", r.value = null, i.value = 0, a.value = 0, s.value = null;
  }, w = () => {
    e.value = "selecting", r.value = null, i.value = 0, a.value = 0, s.value = null, o.value = "", t.value = On();
  };
  return Rn(() => {
    d();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: a,
    refreshFfmpegStatus: C,
    begin: I,
    pause: P,
    resume: m,
    stop: b,
    exportFile: T,
    cancel: j,
    reset: w
  };
}
const xa = { class: "screen-recorder" }, Da = ["onMousedown"], Pa = { class: "window-title" }, Aa = { class: "capture-viewport" }, Ma = { class: "capture-frame" }, $a = { class: "control-strip" }, za = ["disabled"], La = ["disabled"], Ra = { class: "dimension" }, Wa = ["value"], Fa = { class: "dimension" }, Ba = ["value"], ka = { class: "time" }, Ha = {
  key: 2,
  class: "save-status"
}, ja = ["title"], Va = ["disabled"], Ua = {
  key: 0,
  class: "warning"
}, Ge = 80, Ga = 468, Ka = 300, In = 360, xn = 260, Dn = 38, qa = 56, Ke = 8, qe = 1, Za = /* @__PURE__ */ L({
  __name: "index",
  setup(e) {
    const t = Un(), n = O(null), s = O({ width: 0, height: 0 });
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
      status: a,
      settings: u,
      ffmpegStatus: p,
      result: d,
      elapsedMs: y,
      refreshFfmpegStatus: C,
      begin: I,
      pause: P,
      resume: m,
      stop: b,
      exportFile: T,
      cancel: j,
      reset: w
    } = Ia(), M = _(() => a.value === "recording" || a.value === "paused" || a.value === "exporting"), F = _(() => {
      const v = Math.floor(y.value / 1e3), h = Math.floor(v / 60).toString().padStart(2, "0"), N = (v % 60).toString().padStart(2, "0");
      return `${h}:${N}`;
    }), G = async (v) => {
      try {
        await v();
      } catch (h) {
        ya.msg(h?.message || String(h), "error");
      }
    }, E = (v) => Math.max(2, Math.floor(Math.round(v) / 2) * 2), ue = async () => {
      const v = n.value;
      if (!v)
        throw new Error("录制视口尚未准备好");
      const h = v.getBoundingClientRect(), N = await t.scaleFactor(), Ce = await t.innerPosition(), Se = E(h.width * N), pt = E(h.height * N);
      if (Se < Ge || pt < Ge)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: h.left,
        y: h.top,
        width: Se / N,
        height: pt / N,
        screenX: Math.round(Ce.x + h.left * N),
        screenY: Math.round(Ce.y + h.top * N),
        physicalWidth: Se,
        physicalHeight: pt,
        scale: N
      };
    }, R = async () => {
      try {
        const v = await ue();
        s.value = {
          width: v.physicalWidth,
          height: v.physicalHeight
        }, await Ue({
          x: Math.round(v.x * v.scale),
          y: Math.round(v.y * v.scale),
          width: v.physicalWidth,
          height: v.physicalHeight
        }).catch(() => {
        });
      } catch {
        s.value = { width: 0, height: 0 }, await Ue(null).catch(() => {
        });
      }
    }, Be = async (v) => {
      v.button !== 0 || M.value || await t.startDragging();
    }, ke = async (v) => {
      M.value || await t.startResizeDragging(v);
    }, g = () => G(async () => {
      await Ve(!0).catch(() => {
      }), await R(), await I(await ue());
    }), $ = () => G(P), K = () => G(async () => {
      await m(await ue());
    }), de = () => G(async () => {
      await b(), await T();
    }), He = () => {
      w(), a.value = "ready", d.value = null, t.setSize(new De(Ga, Ka)), Oe(R);
    }, ws = async (v) => {
      const N = (await Mo(v.screenX, v.screenY))?.scaleFactor || await t.scaleFactor(), Ce = Math.max(
        In,
        v.physicalWidth / N + Ke * 2 + qe * 2
      ), Se = Math.max(
        xn,
        v.physicalHeight / N + Dn + qa + Ke * 2 + qe * 2
      );
      await t.setPosition(new U(
        Math.round(v.screenX - (Ke + qe) * N),
        Math.round(v.screenY - (Dn + Ke + qe) * N)
      )), await t.setSize(new De(Math.round(Ce), Math.round(Se))), await Oe(), await R();
    }, _s = () => G(async () => {
      const v = await _a();
      await ws(v);
    }), bs = async () => {
      await t.minimize();
    }, Lt = async () => {
      try {
        await j(), await Ue(null).catch(() => {
        }), await Ve(!1).catch(() => {
        });
      } catch {
      }
      await ba();
    }, Cs = async () => {
      d.value && await l("open_file_with_default_app", { filePath: d.value.path });
    }, Ss = async () => {
      d.value && await l("show_file_in_folder", { filePath: d.value.path });
    }, Rt = (v) => {
      v.key === "Escape" && (v.preventDefault(), Lt());
    };
    return lt(async () => {
      a.value = "ready", await t.setMinSize(new De(In, xn)).catch(() => {
      }), await Ve(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await C().catch(() => {
      }), await Oe(), await R(), n.value && (o = new ResizeObserver(() => {
        R();
      }), o.observe(n.value)), r = await t.onMoved(() => {
        R();
      }).catch(() => null), window.addEventListener("resize", R), window.addEventListener("keydown", Rt);
    }), Rn(() => {
      o?.disconnect(), r?.(), window.removeEventListener("resize", R), window.removeEventListener("keydown", Rt), Ue(null).catch(() => {
      }), Ve(!1).catch(() => {
      });
    }), (v, h) => (S(), x("div", xa, [
      f(
        "div",
        {
          class: D(["recorder-shell", { recording: c(a) === "recording", paused: c(a) === "paused" }])
        },
        [
          (S(), x(
            Ie,
            null,
            qs(i, (N) => f("span", {
              key: N.className,
              class: D(["resize-zone", N.className]),
              onMousedown: xe((Ce) => ke(N.direction), ["prevent"])
            }, null, 42, Da)),
            64
            /* STABLE_FRAGMENT */
          )),
          f(
            "header",
            {
              class: "title-bar",
              onMousedown: Be
            },
            [
              f(
                "span",
                Pa,
                z(v.$t("screenRecorder.title") || "自定义录屏"),
                1
                /* TEXT */
              ),
              f(
                "div",
                {
                  class: "window-actions",
                  onMousedown: h[0] || (h[0] = xe(() => {
                  }, ["stop"]))
                },
                [
                  f("button", {
                    class: "title-button",
                    title: "最小化",
                    onClick: bs
                  }, "_"),
                  f("button", {
                    class: "title-button close",
                    title: "关闭",
                    onClick: Lt
                  }, "×")
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            32
            /* NEED_HYDRATION */
          ),
          f("main", Aa, [
            h[8] || (h[8] = f(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            h[9] || (h[9] = f(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            h[10] || (h[10] = f(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            h[11] || (h[11] = f(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            f("div", Ma, [
              f(
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
              h[4] || (h[4] = f(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              h[5] || (h[5] = f(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              h[6] || (h[6] = f(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              h[7] || (h[7] = f(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          f("footer", $a, [
            f(
              "span",
              {
                class: D(["status-dot", { active: c(a) === "recording", paused: c(a) === "paused" }])
              },
              null,
              2
              /* CLASS */
            ),
            me(f("select", {
              "onUpdate:modelValue": h[1] || (h[1] = (N) => c(u).fps = N),
              disabled: M.value
            }, h[12] || (h[12] = [
              f(
                "option",
                { value: 15 },
                "15",
                -1
                /* HOISTED */
              ),
              f(
                "option",
                { value: 24 },
                "24",
                -1
                /* HOISTED */
              ),
              f(
                "option",
                { value: 30 },
                "30",
                -1
                /* HOISTED */
              ),
              f(
                "option",
                { value: 60 },
                "60",
                -1
                /* HOISTED */
              )
            ]), 8, za), [
              [sn, c(u).fps]
            ]),
            h[15] || (h[15] = f(
              "span",
              { class: "unit" },
              "fps",
              -1
              /* HOISTED */
            )),
            me(f("select", {
              "onUpdate:modelValue": h[2] || (h[2] = (N) => c(u).format = N),
              disabled: M.value
            }, h[13] || (h[13] = [
              f(
                "option",
                { value: "mp4" },
                "MP4",
                -1
                /* HOISTED */
              ),
              f(
                "option",
                { value: "gif" },
                "GIF",
                -1
                /* HOISTED */
              )
            ]), 8, La), [
              [sn, c(u).format]
            ]),
            f("label", Ra, [
              f("input", {
                value: s.value.width,
                readonly: ""
              }, null, 8, Wa)
            ]),
            h[16] || (h[16] = f(
              "span",
              { class: "multiply" },
              "×",
              -1
              /* HOISTED */
            )),
            f("label", Fa, [
              f("input", {
                value: s.value.height,
                readonly: ""
              }, null, 8, Ba)
            ]),
            h[17] || (h[17] = f(
              "span",
              { class: "unit" },
              "px",
              -1
              /* HOISTED */
            )),
            c(a) === "ready" || c(a) === "completed" ? (S(), x(
              "button",
              {
                key: 0,
                class: "icon-control",
                title: "拖到目标窗口并松开以对齐",
                onMousedown: xe(_s, ["prevent"])
              },
              " ◎ ",
              32
              /* NEED_HYDRATION */
            )) : Y("v-if", !0),
            c(a) === "recording" || c(a) === "paused" ? (S(), x(
              Ie,
              { key: 1 },
              [
                f(
                  "span",
                  ka,
                  z(F.value),
                  1
                  /* TEXT */
                ),
                f(
                  "button",
                  {
                    class: "control-button",
                    onClick: h[3] || (h[3] = (N) => c(a) === "paused" ? K() : $())
                  },
                  z(c(a) === "paused" ? v.$t("screenRecorder.resume") : v.$t("screenRecorder.pause")),
                  1
                  /* TEXT */
                ),
                f(
                  "button",
                  {
                    class: "control-button danger",
                    onClick: de
                  },
                  z(v.$t("screenRecorder.stop")),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : c(a) === "exporting" ? (S(), x(
              "span",
              Ha,
              z(v.$t("screenRecorder.exporting") || "正在导出..."),
              1
              /* TEXT */
            )) : c(a) === "completed" && c(d) ? (S(), x(
              Ie,
              { key: 3 },
              [
                f("span", {
                  class: "save-status",
                  title: c(d).path
                }, z(v.$t("screenRecorder.exportDone") || "已保存"), 9, ja),
                f(
                  "button",
                  {
                    class: "control-button",
                    onClick: Cs
                  },
                  z(v.$t("screenRecorder.openFile") || "打开"),
                  1
                  /* TEXT */
                ),
                f(
                  "button",
                  {
                    class: "control-button",
                    onClick: Ss
                  },
                  z(v.$t("screenRecorder.openFolder") || "定位"),
                  1
                  /* TEXT */
                ),
                f(
                  "button",
                  {
                    class: "control-button",
                    onClick: He
                  },
                  z(v.$t("screenRecorder.recordAgain") || "重录"),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (S(), x("button", {
              key: 4,
              class: "record-button",
              disabled: c(p)?.available === !1 || s.value.width < Ge || s.value.height < Ge,
              onClick: g
            }, [
              h[14] || (h[14] = f(
                "span",
                null,
                null,
                -1
                /* HOISTED */
              )),
              zn(
                " " + z(v.$t("screenRecorder.start")),
                1
                /* TEXT */
              )
            ], 8, Va))
          ])
        ],
        2
        /* CLASS */
      ),
      c(p) && !c(p).available ? (S(), x(
        "p",
        Ua,
        z(c(p).message || v.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : Y("v-if", !0)
    ]));
  }
}), Ja = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, el = /* @__PURE__ */ Ja(Za, [["__scopeId", "data-v-bfd1bbaf"]]);
export {
  el as default
};
