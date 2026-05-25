import { i as _i, w as Ln, l as Tu, a as Ou, b as Iu, c as Ee, d as Au, e as Vr, B as $u, h as Hr, f as Cr, g as Si, j as Pu, k as Ae, m as Ru, t as Mu, n as pe, o as Nu, p as Lu, q as xu, r as we, s as Wr, u as he, v as Ci, x as ku, N as Et, y as Du, z as Bu, A as $e, C as re, D as P, E as y, F as c, G as jr, H as Fu, I as Ei, J as on, K as Ur, L as me, M as Y, O as zu, P as Kr, Q as Ms, R as Ye, S as V, T as F, U as _, V as K, W as Ht, X as O, Y as rt, Z as Gr, _ as Vu, $ as qr, a0 as W, a1 as ke, a2 as M, a3 as G, a4 as H, a5 as xe, a6 as J, a7 as Q, a8 as _e, a9 as ut, aa as Me, ab as Wt, ac as Hu, ad as Wu, ae as ju, af as Ti, ag as Uu, ah as Ku, ai as Gu, aj as qu, ak as at, al as Yu, am as Zu, an as Yr, ao as Xu, ap as Xt, aq as Ju, ar as Xn, as as Qu, at as ec, au as Jn } from "./runtime-entry-ByOWIDDW.js";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Er;
const Ns = typeof window < "u" && window.trustedTypes;
if (Ns)
  try {
    Er = /* @__PURE__ */ Ns.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Ln(`Error creating trusted types policy: ${e}`);
  }
const Oi = Er ? (e) => Er.createHTML(e) : (e) => e, tc = "http://www.w3.org/2000/svg", nc = "http://www.w3.org/1998/Math/MathML", wt = typeof document < "u" ? document : null, Ls = wt && /* @__PURE__ */ wt.createElement("template"), oc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? wt.createElementNS(tc, e) : t === "mathml" ? wt.createElementNS(nc, e) : n ? wt.createElement(e, { is: n }) : wt.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => wt.createTextNode(e),
  createComment: (e) => wt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => wt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, a) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === a || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === a || !(r = r.nextSibling)); )
        ;
    else {
      Ls.innerHTML = Oi(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Ls.content;
      if (o === "svg" || o === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Lt = "transition", Fn = "animation", Qn = Symbol("_vtc"), Ii = {
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
}, rc = /* @__PURE__ */ Vr(
  {},
  $u,
  Ii
), sc = (e) => (e.displayName = "Transition", e.props = rc, e), cn = /* @__PURE__ */ sc(
  (e, { slots: t }) => Si(Pu, ac(e), t)
), Jt = (e, t = []) => {
  Ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, xs = (e) => e ? Ee(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ac(e) {
  const t = {};
  for (const R in e)
    R in Ii || (t[R] = e[R]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: a = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: i = `${n}-enter-to`,
    appearFromClass: l = a,
    appearActiveClass: u = s,
    appearToClass: d = i,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: v = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, p = ic(r), h = p && p[0], b = p && p[1], {
    onBeforeEnter: m,
    onEnter: E,
    onEnterCancelled: A,
    onLeave: $,
    onLeaveCancelled: S,
    onBeforeAppear: I = m,
    onAppear: T = E,
    onAppearCancelled: D = A
  } = t, C = (R, j, se, Z) => {
    R._enterCancelled = Z, Qt(R, j ? d : i), Qt(R, j ? u : s), se && se();
  }, z = (R, j) => {
    R._isLeaving = !1, Qt(R, f), Qt(R, g), Qt(R, v), j && j();
  }, x = (R) => (j, se) => {
    const Z = R ? T : E, X = () => C(j, R, se);
    Jt(Z, [j, X]), ks(() => {
      Qt(j, R ? l : a), bt(j, R ? d : i), xs(Z) || Ds(j, o, h, X);
    });
  };
  return Vr(t, {
    onBeforeEnter(R) {
      Jt(m, [R]), bt(R, a), bt(R, s);
    },
    onBeforeAppear(R) {
      Jt(I, [R]), bt(R, l), bt(R, u);
    },
    onEnter: x(!1),
    onAppear: x(!0),
    onLeave(R, j) {
      R._isLeaving = !0;
      const se = () => z(R, j);
      bt(R, f), R._enterCancelled ? (bt(R, v), zs()) : (zs(), bt(R, v)), ks(() => {
        R._isLeaving && (Qt(R, f), bt(R, g), xs($) || Ds(R, o, b, se));
      }), Jt($, [R, se]);
    },
    onEnterCancelled(R) {
      C(R, !1, void 0, !0), Jt(A, [R]);
    },
    onAppearCancelled(R) {
      C(R, !0, void 0, !0), Jt(D, [R]);
    },
    onLeaveCancelled(R) {
      z(R), Jt(S, [R]);
    }
  });
}
function ic(e) {
  if (e == null)
    return null;
  if (Ae(e))
    return [lr(e.enter), lr(e.leave)];
  {
    const t = lr(e);
    return [t, t];
  }
}
function lr(e) {
  const t = Mu(e);
  return process.env.NODE_ENV !== "production" && Ru(t, "<transition> explicit duration"), t;
}
function bt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Qn] || (e[Qn] = /* @__PURE__ */ new Set())).add(t);
}
function Qt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Qn];
  n && (n.delete(t), n.size || (e[Qn] = void 0));
}
function ks(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let lc = 0;
function Ds(e, t, n, o) {
  const r = e._endId = ++lc, a = () => {
    r === e._endId && o();
  };
  if (n != null)
    return setTimeout(a, n);
  const { type: s, timeout: i, propCount: l } = uc(e, t);
  if (!s)
    return o();
  const u = s + "end";
  let d = 0;
  const f = () => {
    e.removeEventListener(u, v), a();
  }, v = (g) => {
    g.target === e && ++d >= l && f();
  };
  setTimeout(() => {
    d < l && f();
  }, i + 1), e.addEventListener(u, v);
}
function uc(e, t) {
  const n = window.getComputedStyle(e), o = (p) => (n[p] || "").split(", "), r = o(`${Lt}Delay`), a = o(`${Lt}Duration`), s = Bs(r, a), i = o(`${Fn}Delay`), l = o(`${Fn}Duration`), u = Bs(i, l);
  let d = null, f = 0, v = 0;
  t === Lt ? s > 0 && (d = Lt, f = s, v = a.length) : t === Fn ? u > 0 && (d = Fn, f = u, v = l.length) : (f = Math.max(s, u), d = f > 0 ? s > u ? Lt : Fn : null, v = d ? d === Lt ? a.length : l.length : 0);
  const g = d === Lt && /\b(transform|all)(,|$)/.test(
    o(`${Lt}Property`).toString()
  );
  return {
    type: d,
    timeout: f,
    propCount: v,
    hasTransform: g
  };
}
function Bs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Fs(n) + Fs(e[o])));
}
function Fs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function zs() {
  return document.body.offsetHeight;
}
function cc(e, t, n) {
  const o = e[Qn];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Po = Symbol("_vod"), Ai = Symbol("_vsh"), it = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Po] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : zn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), zn(e, !0), o.enter(e)) : o.leave(e, () => {
      zn(e, !1);
    }) : zn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    zn(e, t);
  }
};
process.env.NODE_ENV !== "production" && (it.name = "show");
function zn(e, t) {
  e.style.display = t ? e[Po] : "none", e[Ai] = !t;
}
const dc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), fc = /(^|;)\s*display\s*:/;
function pc(e, t, n) {
  const o = e.style, r = we(n);
  let a = !1;
  if (n && !r) {
    if (t)
      if (we(t))
        for (const s of t.split(";")) {
          const i = s.slice(0, s.indexOf(":")).trim();
          n[i] == null && Oo(o, i, "");
        }
      else
        for (const s in t)
          n[s] == null && Oo(o, s, "");
    for (const s in n)
      s === "display" && (a = !0), Oo(o, s, n[s]);
  } else if (r) {
    if (t !== n) {
      const s = o[dc];
      s && (n += ";" + s), o.cssText = n, a = fc.test(n);
    }
  } else t && e.removeAttribute("style");
  Po in e && (e[Po] = a ? o.display : "", e[Ai] && (o.display = "none"));
}
const vc = /[^\\];\s*$/, Vs = /\s*!important$/;
function Oo(e, t, n) {
  if (Ee(n))
    n.forEach((o) => Oo(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && vc.test(n) && Ln(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = hc(e, t);
    Vs.test(n) ? e.setProperty(
      Hr(o),
      n.replace(Vs, ""),
      "important"
    ) : e[o] = n;
  }
}
const Hs = ["Webkit", "Moz", "ms"], ur = {};
function hc(e, t) {
  const n = ur[t];
  if (n)
    return n;
  let o = Wr(t);
  if (o !== "filter" && o in e)
    return ur[t] = o;
  o = Du(o);
  for (let r = 0; r < Hs.length; r++) {
    const a = Hs[r] + o;
    if (a in e)
      return ur[t] = a;
  }
  return t;
}
const Ws = "http://www.w3.org/1999/xlink";
function js(e, t, n, o, r, a = xu(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ws, t.slice(6, t.length)) : e.setAttributeNS(Ws, t, n) : n == null || a && !Ci(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : ku(n) ? String(n) : n
  );
}
function Us(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Oi(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const i = a === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (i !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = Ci(n) : n == null && i === "string" ? (n = "", s = !0) : i === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (i) {
    process.env.NODE_ENV !== "production" && !s && Ln(
      `Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`,
      i
    );
  }
  s && e.removeAttribute(r || t);
}
function tn(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function gc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Ks = Symbol("_vei");
function mc(e, t, n, o, r = null) {
  const a = e[Ks] || (e[Ks] = {}), s = a[t];
  if (o && s)
    s.value = process.env.NODE_ENV !== "production" ? qs(o, t) : o;
  else {
    const [i, l] = bc(t);
    if (o) {
      const u = a[t] = _c(
        process.env.NODE_ENV !== "production" ? qs(o, t) : o,
        r
      );
      tn(e, i, u, l);
    } else s && (gc(e, i, s, l), a[t] = void 0);
  }
}
const Gs = /(?:Once|Passive|Capture)$/;
function bc(e) {
  let t;
  if (Gs.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Gs); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Hr(e.slice(2)), t];
}
let cr = 0;
const yc = /* @__PURE__ */ Promise.resolve(), wc = () => cr || (yc.then(() => cr = 0), cr = Date.now());
function _c(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Bu(
      Sc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = wc(), n;
}
function qs(e, t) {
  return he(e) || Ee(e) ? e : (Ln(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Et);
}
function Sc(e, t) {
  if (Ee(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const Ys = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Cc = (e, t, n, o, r, a) => {
  const s = r === "svg";
  t === "class" ? cc(e, o, s) : t === "style" ? pc(e, n, o) : Nu(t) ? Lu(t) || mc(e, t, n, o, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ec(e, t, o, s)) ? (Us(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && js(e, t, o, s, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !we(o)) ? Us(e, Wr(t), o, a, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), js(e, t, o, s));
};
function Ec(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ys(t) && he(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ys(t) && we(n) ? !1 : t in e;
}
const Ro = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ee(t) ? (n) => Iu(t, n) : t;
};
function Tc(e) {
  e.target.composing = !0;
}
function Zs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Tn = Symbol("_assign"), Oc = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[Tn] = Ro(r);
    const a = o || r.props && r.props.type === "number";
    tn(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let i = e.value;
      n && (i = i.trim()), a && (i = Cr(i)), e[Tn](i);
    }), n && tn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (tn(e, "compositionstart", Tc), tn(e, "compositionend", Zs), tn(e, "change", Zs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: a } }, s) {
    if (e[Tn] = Ro(s), e.composing) return;
    const i = (a || e.type === "number") && !/^0\d/.test(e.value) ? Cr(e.value) : e.value, l = t ?? "";
    i !== l && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === l) || (e.value = l));
  }
}, Xs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = _i(t);
    tn(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? Cr(Mo(s)) : Mo(s)
      );
      e[Tn](
        e.multiple ? r ? new Set(a) : a : a[0]
      ), e._assigning = !0, pe(() => {
        e._assigning = !1;
      });
    }), e[Tn] = Ro(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Js(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Tn] = Ro(n);
  },
  updated(e, { value: t }) {
    e._assigning || Js(e, t);
  }
};
function Js(e, t) {
  const n = e.multiple, o = Ee(t);
  if (n && !o && !_i(t)) {
    process.env.NODE_ENV !== "production" && Ln(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, a = e.options.length; r < a; r++) {
    const s = e.options[r], i = Mo(s);
    if (n)
      if (o) {
        const l = typeof i;
        l === "string" || l === "number" ? s.selected = t.some((u) => String(u) === String(i)) : s.selected = Tu(t, i) > -1;
      } else
        s.selected = t.has(i);
    else if (Ou(Mo(s), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Mo(e) {
  return "_value" in e ? e._value : e.value;
}
const Ic = ["ctrl", "shift", "alt", "meta"], Ac = {
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
  exact: (e, t) => Ic.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ce = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...a) => {
    for (let s = 0; s < t.length; s++) {
      const i = Ac[t[s]];
      if (i && i(r, t)) return;
    }
    return e(r, ...a);
  });
}, $c = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Vn = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const a = Hr(r.key);
    if (t.some(
      (s) => s === a || $c[s] === a
    ))
      return e(r);
  });
}, Pc = /* @__PURE__ */ Vr({ patchProp: Cc }, oc);
let Qs;
function Rc() {
  return Qs || (Qs = Au(Pc));
}
const No = (...e) => {
  Rc().render(...e);
};
function Mc(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Nc(e, t, n, o, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Io;
const Ze = "__TAURI_TO_IPC_KEY__";
function Lc(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function N(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class xc {
  get rid() {
    return Mc(this, Io, "f");
  }
  constructor(t) {
    Io.set(this, void 0), Nc(this, Io, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return N("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Io = /* @__PURE__ */ new WeakMap();
class Lo {
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
    return new jn(this.width * t, this.height * t);
  }
  [Ze]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ze]();
  }
}
class jn {
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
    return new Lo(this.width / t, this.height / t);
  }
  [Ze]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ze]();
  }
}
class wn {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Lo ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof jn ? this.size : this.size.toPhysical(t);
  }
  [Ze]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Ze]();
  }
}
class $i {
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
    return new Dt(this.x * t, this.y * t);
  }
  [Ze]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ze]();
  }
}
class Dt {
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
    return new $i(this.x / t, this.y / t);
  }
  [Ze]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ze]();
  }
}
class ho {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof $i ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Dt ? this.position : this.position.toPhysical(t);
  }
  [Ze]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Ze]();
  }
}
var He;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(He || (He = {}));
async function Pi(e, t) {
  await N("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ri(e, t, n) {
  var o;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return N("plugin:event|listen", {
    event: e,
    target: r,
    handler: Lc(t)
  }).then((a) => async () => Pi(e, a));
}
async function kc(e, t, n) {
  return Ri(e, (o) => {
    Pi(e, o.id), t(o);
  }, n);
}
async function Dc(e, t) {
  await N("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Bc(e, t, n) {
  await N("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Un extends xc {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, o) {
    return N("plugin:image|new", {
      rgba: xo(t),
      width: n,
      height: o
    }).then((r) => new Un(r));
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
    return N("plugin:image|from_bytes", {
      bytes: xo(t)
    }).then((n) => new Un(n));
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
    return N("plugin:image|from_path", { path: t }).then((n) => new Un(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return N("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return N("plugin:image|size", { rid: this.rid });
  }
}
function xo(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Un ? e.rid : e;
}
var Tr;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Tr || (Tr = {}));
class Fc {
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
var ea;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ea || (ea = {}));
function Mi() {
  return new Ni(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function dr() {
  return N("plugin:window|get_all_windows").then((e) => e.map((t) => new Ni(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const fr = ["tauri://created", "tauri://error"];
class Ni {
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
    var o;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || N("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
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
    return (n = (await dr()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Mi();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return dr();
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
    for (const t of await dr())
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
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : Ri(t, n, {
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
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : kc(t, n, {
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
    if (fr.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Dc(t, n);
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
  async emitTo(t, n, o) {
    if (fr.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Bc(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return fr.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return N("plugin:window|scale_factor", {
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
    return N("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Dt(t));
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
    return N("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Dt(t));
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
    return N("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new jn(t));
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
    return N("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new jn(t));
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
    return N("plugin:window|is_fullscreen", {
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
    return N("plugin:window|is_minimized", {
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
    return N("plugin:window|is_maximized", {
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
    return N("plugin:window|is_focused", {
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
    return N("plugin:window|is_decorated", {
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
    return N("plugin:window|is_resizable", {
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
    return N("plugin:window|is_maximizable", {
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
    return N("plugin:window|is_minimizable", {
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
    return N("plugin:window|is_closable", {
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
    return N("plugin:window|is_visible", {
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
    return N("plugin:window|title", {
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
    return N("plugin:window|theme", {
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
    return N("plugin:window|is_always_on_top", {
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
    return N("plugin:window|center", {
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
    return t && (t === Tr.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), N("plugin:window|request_user_attention", {
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
    return N("plugin:window|set_resizable", {
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
    return N("plugin:window|set_enabled", {
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
    return N("plugin:window|is_enabled", {
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
    return N("plugin:window|set_maximizable", {
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
    return N("plugin:window|set_minimizable", {
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
    return N("plugin:window|set_closable", {
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
    return N("plugin:window|set_title", {
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
    return N("plugin:window|maximize", {
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
    return N("plugin:window|unmaximize", {
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
    return N("plugin:window|toggle_maximize", {
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
    return N("plugin:window|minimize", {
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
    return N("plugin:window|unminimize", {
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
    return N("plugin:window|show", {
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
    return N("plugin:window|hide", {
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
    return N("plugin:window|close", {
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
    return N("plugin:window|destroy", {
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
    return N("plugin:window|set_decorations", {
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
    return N("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return N("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return N("plugin:window|set_effects", {
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
    return N("plugin:window|set_always_on_top", {
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
    return N("plugin:window|set_always_on_bottom", {
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
    return N("plugin:window|set_content_protected", {
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
    return N("plugin:window|set_size", {
      label: this.label,
      value: t instanceof wn ? t : new wn(t)
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
    return N("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof wn ? t : t ? new wn(t) : null
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
    return N("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof wn ? t : t ? new wn(t) : null
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
    function n(o) {
      return o ? { Logical: o } : null;
    }
    return N("plugin:window|set_size_constraints", {
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
    return N("plugin:window|set_position", {
      label: this.label,
      value: t instanceof ho ? t : new ho(t)
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
    return N("plugin:window|set_fullscreen", {
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
    return N("plugin:window|set_focus", {
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
    return N("plugin:window|set_icon", {
      label: this.label,
      value: xo(t)
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
    return N("plugin:window|set_skip_taskbar", {
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
    return N("plugin:window|set_cursor_grab", {
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
    return N("plugin:window|set_cursor_visible", {
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
    return N("plugin:window|set_cursor_icon", {
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
    return N("plugin:window|set_background_color", { color: t });
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
    return N("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof ho ? t : new ho(t)
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
    return N("plugin:window|set_ignore_cursor_events", {
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
    return N("plugin:window|start_dragging", {
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
    return N("plugin:window|start_resize_dragging", {
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
    return N("plugin:window|set_badge_count", {
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
    return N("plugin:window|set_badge_label", {
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
    return N("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? xo(t) : void 0
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
    return N("plugin:window|set_progress_bar", {
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
    return N("plugin:window|set_visible_on_all_workspaces", {
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
    return N("plugin:window|set_title_bar_style", {
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
    return N("plugin:window|set_theme", {
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
    return this.listen(He.WINDOW_RESIZED, (n) => {
      n.payload = new jn(n.payload), t(n);
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
    return this.listen(He.WINDOW_MOVED, (n) => {
      n.payload = new Dt(n.payload), t(n);
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
    return this.listen(He.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new Fc(n);
      await t(o), o.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(He.DRAG_ENTER, (s) => {
      t({
        ...s,
        payload: {
          type: "enter",
          paths: s.payload.paths,
          position: new Dt(s.payload.position)
        }
      });
    }), o = await this.listen(He.DRAG_OVER, (s) => {
      t({
        ...s,
        payload: {
          type: "over",
          position: new Dt(s.payload.position)
        }
      });
    }), r = await this.listen(He.DRAG_DROP, (s) => {
      t({
        ...s,
        payload: {
          type: "drop",
          paths: s.payload.paths,
          position: new Dt(s.payload.position)
        }
      });
    }), a = await this.listen(He.DRAG_LEAVE, (s) => {
      t({ ...s, payload: { type: "leave" } });
    });
    return () => {
      n(), r(), o(), a();
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
    const n = await this.listen(He.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), o = await this.listen(He.WINDOW_BLUR, (r) => {
      t({ ...r, payload: !1 });
    });
    return () => {
      n(), o();
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
    return this.listen(He.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(He.WINDOW_THEME_CHANGED, t);
  }
}
var ta;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ta || (ta = {}));
var na;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(na || (na = {}));
var oa;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(oa || (oa = {}));
const Li = Symbol(), Kn = "el", zc = "is-", en = (e, t, n, o, r) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), r && (a += `--${r}`), a;
}, xi = Symbol("namespaceContextKey"), Zr = (e) => {
  const t = e || ($e() ? re(xi, P(Kn)) : P(Kn));
  return y(() => c(t) || Kn);
}, fe = (e, t) => {
  const n = Zr(t);
  return {
    namespace: n,
    b: (h = "") => en(n.value, e, h, "", ""),
    e: (h) => h ? en(n.value, e, "", h, "") : "",
    m: (h) => h ? en(n.value, e, "", "", h) : "",
    be: (h, b) => h && b ? en(n.value, e, h, b, "") : "",
    em: (h, b) => h && b ? en(n.value, e, "", h, b) : "",
    bm: (h, b) => h && b ? en(n.value, e, h, "", b) : "",
    bem: (h, b, m) => h && b && m ? en(n.value, e, h, b, m) : "",
    is: (h, ...b) => {
      const m = b.length >= 1 ? b[0] : !0;
      return h && m ? `${zc}${h}` : "";
    },
    cssVar: (h) => {
      const b = {};
      for (const m in h)
        h[m] && (b[`--${n.value}-${m}`] = h[m]);
      return b;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const b = {};
      for (const m in h)
        h[m] && (b[`--${n.value}-${e}-${m}`] = h[m]);
      return b;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
var ki = typeof global == "object" && global && global.Object === Object && global, Vc = typeof self == "object" && self && self.Object === Object && self, gt = ki || Vc || Function("return this")(), vt = gt.Symbol, Di = Object.prototype, Hc = Di.hasOwnProperty, Wc = Di.toString, Hn = vt ? vt.toStringTag : void 0;
function jc(e) {
  var t = Hc.call(e, Hn), n = e[Hn];
  try {
    e[Hn] = void 0;
    var o = !0;
  } catch {
  }
  var r = Wc.call(e);
  return o && (t ? e[Hn] = n : delete e[Hn]), r;
}
var Uc = Object.prototype, Kc = Uc.toString;
function Gc(e) {
  return Kc.call(e);
}
var qc = "[object Null]", Yc = "[object Undefined]", ra = vt ? vt.toStringTag : void 0;
function xn(e) {
  return e == null ? e === void 0 ? Yc : qc : ra && ra in Object(e) ? jc(e) : Gc(e);
}
function On(e) {
  return e != null && typeof e == "object";
}
var Zc = "[object Symbol]";
function Ko(e) {
  return typeof e == "symbol" || On(e) && xn(e) == Zc;
}
function Xc(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var lt = Array.isArray, sa = vt ? vt.prototype : void 0, aa = sa ? sa.toString : void 0;
function Bi(e) {
  if (typeof e == "string")
    return e;
  if (lt(e))
    return Xc(e, Bi) + "";
  if (Ko(e))
    return aa ? aa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Jc = /\s/;
function Qc(e) {
  for (var t = e.length; t-- && Jc.test(e.charAt(t)); )
    ;
  return t;
}
var ed = /^\s+/;
function td(e) {
  return e && e.slice(0, Qc(e) + 1).replace(ed, "");
}
function jt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ia = NaN, nd = /^[-+]0x[0-9a-f]+$/i, od = /^0b[01]+$/i, rd = /^0o[0-7]+$/i, sd = parseInt;
function la(e) {
  if (typeof e == "number")
    return e;
  if (Ko(e))
    return ia;
  if (jt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = jt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = td(e);
  var n = od.test(e);
  return n || rd.test(e) ? sd(e.slice(2), n ? 2 : 8) : nd.test(e) ? ia : +e;
}
function Fi(e) {
  return e;
}
var ad = "[object AsyncFunction]", id = "[object Function]", ld = "[object GeneratorFunction]", ud = "[object Proxy]";
function zi(e) {
  if (!jt(e))
    return !1;
  var t = xn(e);
  return t == id || t == ld || t == ad || t == ud;
}
var pr = gt["__core-js_shared__"], ua = function() {
  var e = /[^.]+$/.exec(pr && pr.keys && pr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function cd(e) {
  return !!ua && ua in e;
}
var dd = Function.prototype, fd = dd.toString;
function dn(e) {
  if (e != null) {
    try {
      return fd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var pd = /[\\^$.*+?()[\]{}|]/g, vd = /^\[object .+?Constructor\]$/, hd = Function.prototype, gd = Object.prototype, md = hd.toString, bd = gd.hasOwnProperty, yd = RegExp(
  "^" + md.call(bd).replace(pd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wd(e) {
  if (!jt(e) || cd(e))
    return !1;
  var t = zi(e) ? yd : vd;
  return t.test(dn(e));
}
function _d(e, t) {
  return e?.[t];
}
function fn(e, t) {
  var n = _d(e, t);
  return wd(n) ? n : void 0;
}
var Or = fn(gt, "WeakMap");
function Sd(e, t, n) {
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
var Cd = 800, Ed = 16, Td = Date.now;
function Od(e) {
  var t = 0, n = 0;
  return function() {
    var o = Td(), r = Ed - (o - n);
    if (n = o, r > 0) {
      if (++t >= Cd)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Id(e) {
  return function() {
    return e;
  };
}
var ko = function() {
  try {
    var e = fn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ad = ko ? function(e, t) {
  return ko(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Id(t),
    writable: !0
  });
} : Fi, $d = Od(Ad);
function Pd(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Rd = 9007199254740991, Md = /^(?:0|[1-9]\d*)$/;
function Xr(e, t) {
  var n = typeof e;
  return t = t ?? Rd, !!t && (n == "number" || n != "symbol" && Md.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Nd(e, t, n) {
  t == "__proto__" && ko ? ko(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Jr(e, t) {
  return e === t || e !== e && t !== t;
}
var Ld = Object.prototype, xd = Ld.hasOwnProperty;
function kd(e, t, n) {
  var o = e[t];
  (!(xd.call(e, t) && Jr(o, n)) || n === void 0 && !(t in e)) && Nd(e, t, n);
}
var ca = Math.max;
function Dd(e, t, n) {
  return t = ca(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = ca(o.length - t, 0), s = Array(a); ++r < a; )
      s[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(s), Sd(e, this, i);
  };
}
var Bd = 9007199254740991;
function Qr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Bd;
}
function Fd(e) {
  return e != null && Qr(e.length) && !zi(e);
}
var zd = Object.prototype;
function Vd(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || zd;
  return e === n;
}
function Hd(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Wd = "[object Arguments]";
function da(e) {
  return On(e) && xn(e) == Wd;
}
var Vi = Object.prototype, jd = Vi.hasOwnProperty, Ud = Vi.propertyIsEnumerable, es = da(/* @__PURE__ */ function() {
  return arguments;
}()) ? da : function(e) {
  return On(e) && jd.call(e, "callee") && !Ud.call(e, "callee");
};
function Kd() {
  return !1;
}
var Hi = typeof exports == "object" && exports && !exports.nodeType && exports, fa = Hi && typeof module == "object" && module && !module.nodeType && module, Gd = fa && fa.exports === Hi, pa = Gd ? gt.Buffer : void 0, qd = pa ? pa.isBuffer : void 0, Ir = qd || Kd, Yd = "[object Arguments]", Zd = "[object Array]", Xd = "[object Boolean]", Jd = "[object Date]", Qd = "[object Error]", ef = "[object Function]", tf = "[object Map]", nf = "[object Number]", of = "[object Object]", rf = "[object RegExp]", sf = "[object Set]", af = "[object String]", lf = "[object WeakMap]", uf = "[object ArrayBuffer]", cf = "[object DataView]", df = "[object Float32Array]", ff = "[object Float64Array]", pf = "[object Int8Array]", vf = "[object Int16Array]", hf = "[object Int32Array]", gf = "[object Uint8Array]", mf = "[object Uint8ClampedArray]", bf = "[object Uint16Array]", yf = "[object Uint32Array]", ce = {};
ce[df] = ce[ff] = ce[pf] = ce[vf] = ce[hf] = ce[gf] = ce[mf] = ce[bf] = ce[yf] = !0;
ce[Yd] = ce[Zd] = ce[uf] = ce[Xd] = ce[cf] = ce[Jd] = ce[Qd] = ce[ef] = ce[tf] = ce[nf] = ce[of] = ce[rf] = ce[sf] = ce[af] = ce[lf] = !1;
function wf(e) {
  return On(e) && Qr(e.length) && !!ce[xn(e)];
}
function _f(e) {
  return function(t) {
    return e(t);
  };
}
var Wi = typeof exports == "object" && exports && !exports.nodeType && exports, Gn = Wi && typeof module == "object" && module && !module.nodeType && module, Sf = Gn && Gn.exports === Wi, vr = Sf && ki.process, va = function() {
  try {
    var e = Gn && Gn.require && Gn.require("util").types;
    return e || vr && vr.binding && vr.binding("util");
  } catch {
  }
}(), ha = va && va.isTypedArray, ji = ha ? _f(ha) : wf, Cf = Object.prototype, Ef = Cf.hasOwnProperty;
function Tf(e, t) {
  var n = lt(e), o = !n && es(e), r = !n && !o && Ir(e), a = !n && !o && !r && ji(e), s = n || o || r || a, i = s ? Hd(e.length, String) : [], l = i.length;
  for (var u in e)
    Ef.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Xr(u, l))) && i.push(u);
  return i;
}
function Of(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var If = Of(Object.keys, Object), Af = Object.prototype, $f = Af.hasOwnProperty;
function Pf(e) {
  if (!Vd(e))
    return If(e);
  var t = [];
  for (var n in Object(e))
    $f.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ui(e) {
  return Fd(e) ? Tf(e) : Pf(e);
}
var Rf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mf = /^\w*$/;
function ts(e, t) {
  if (lt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ko(e) ? !0 : Mf.test(e) || !Rf.test(e) || t != null && e in Object(t);
}
var eo = fn(Object, "create");
function Nf() {
  this.__data__ = eo ? eo(null) : {}, this.size = 0;
}
function Lf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var xf = "__lodash_hash_undefined__", kf = Object.prototype, Df = kf.hasOwnProperty;
function Bf(e) {
  var t = this.__data__;
  if (eo) {
    var n = t[e];
    return n === xf ? void 0 : n;
  }
  return Df.call(t, e) ? t[e] : void 0;
}
var Ff = Object.prototype, zf = Ff.hasOwnProperty;
function Vf(e) {
  var t = this.__data__;
  return eo ? t[e] !== void 0 : zf.call(t, e);
}
var Hf = "__lodash_hash_undefined__";
function Wf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = eo && t === void 0 ? Hf : t, this;
}
function sn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
sn.prototype.clear = Nf;
sn.prototype.delete = Lf;
sn.prototype.get = Bf;
sn.prototype.has = Vf;
sn.prototype.set = Wf;
function jf() {
  this.__data__ = [], this.size = 0;
}
function Go(e, t) {
  for (var n = e.length; n--; )
    if (Jr(e[n][0], t))
      return n;
  return -1;
}
var Uf = Array.prototype, Kf = Uf.splice;
function Gf(e) {
  var t = this.__data__, n = Go(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Kf.call(t, n, 1), --this.size, !0;
}
function qf(e) {
  var t = this.__data__, n = Go(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Yf(e) {
  return Go(this.__data__, e) > -1;
}
function Zf(e, t) {
  var n = this.__data__, o = Go(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function At(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
At.prototype.clear = jf;
At.prototype.delete = Gf;
At.prototype.get = qf;
At.prototype.has = Yf;
At.prototype.set = Zf;
var to = fn(gt, "Map");
function Xf() {
  this.size = 0, this.__data__ = {
    hash: new sn(),
    map: new (to || At)(),
    string: new sn()
  };
}
function Jf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qo(e, t) {
  var n = e.__data__;
  return Jf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Qf(e) {
  var t = qo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ep(e) {
  return qo(this, e).get(e);
}
function tp(e) {
  return qo(this, e).has(e);
}
function np(e, t) {
  var n = qo(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function $t(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
$t.prototype.clear = Xf;
$t.prototype.delete = Qf;
$t.prototype.get = ep;
$t.prototype.has = tp;
$t.prototype.set = np;
var op = "Expected a function";
function ns(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(op);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var s = e.apply(this, o);
    return n.cache = a.set(r, s) || a, s;
  };
  return n.cache = new (ns.Cache || $t)(), n;
}
ns.Cache = $t;
var rp = 500;
function sp(e) {
  var t = ns(e, function(o) {
    return n.size === rp && n.clear(), o;
  }), n = t.cache;
  return t;
}
var ap = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ip = /\\(\\)?/g, lp = sp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ap, function(n, o, r, a) {
    t.push(r ? a.replace(ip, "$1") : o || n);
  }), t;
});
function up(e) {
  return e == null ? "" : Bi(e);
}
function Yo(e, t) {
  return lt(e) ? e : ts(e, t) ? [e] : lp(up(e));
}
function ro(e) {
  if (typeof e == "string" || Ko(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function os(e, t) {
  t = Yo(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ro(t[n++])];
  return n && n == o ? e : void 0;
}
function zt(e, t, n) {
  var o = e == null ? void 0 : os(e, t);
  return o === void 0 ? n : o;
}
function Ki(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var ga = vt ? vt.isConcatSpreadable : void 0;
function cp(e) {
  return lt(e) || es(e) || !!(ga && e && e[ga]);
}
function dp(e, t, n, o, r) {
  var a = -1, s = e.length;
  for (n || (n = cp), r || (r = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Ki(r, i) : r[r.length] = i;
  }
  return r;
}
function fp(e) {
  var t = e == null ? 0 : e.length;
  return t ? dp(e) : [];
}
function pp(e) {
  return $d(Dd(e, void 0, fp), e + "");
}
function Ft() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return lt(e) ? e : [e];
}
function vp() {
  this.__data__ = new At(), this.size = 0;
}
function hp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function gp(e) {
  return this.__data__.get(e);
}
function mp(e) {
  return this.__data__.has(e);
}
var bp = 200;
function yp(e, t) {
  var n = this.__data__;
  if (n instanceof At) {
    var o = n.__data__;
    if (!to || o.length < bp - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new $t(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Tt(e) {
  var t = this.__data__ = new At(e);
  this.size = t.size;
}
Tt.prototype.clear = vp;
Tt.prototype.delete = hp;
Tt.prototype.get = gp;
Tt.prototype.has = mp;
Tt.prototype.set = yp;
function wp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, a = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (a[r++] = s);
  }
  return a;
}
function _p() {
  return [];
}
var Sp = Object.prototype, Cp = Sp.propertyIsEnumerable, ma = Object.getOwnPropertySymbols, Ep = ma ? function(e) {
  return e == null ? [] : (e = Object(e), wp(ma(e), function(t) {
    return Cp.call(e, t);
  }));
} : _p;
function Tp(e, t, n) {
  var o = t(e);
  return lt(e) ? o : Ki(o, n(e));
}
function ba(e) {
  return Tp(e, Ui, Ep);
}
var Ar = fn(gt, "DataView"), $r = fn(gt, "Promise"), Pr = fn(gt, "Set"), ya = "[object Map]", Op = "[object Object]", wa = "[object Promise]", _a = "[object Set]", Sa = "[object WeakMap]", Ca = "[object DataView]", Ip = dn(Ar), Ap = dn(to), $p = dn($r), Pp = dn(Pr), Rp = dn(Or), Bt = xn;
(Ar && Bt(new Ar(new ArrayBuffer(1))) != Ca || to && Bt(new to()) != ya || $r && Bt($r.resolve()) != wa || Pr && Bt(new Pr()) != _a || Or && Bt(new Or()) != Sa) && (Bt = function(e) {
  var t = xn(e), n = t == Op ? e.constructor : void 0, o = n ? dn(n) : "";
  if (o)
    switch (o) {
      case Ip:
        return Ca;
      case Ap:
        return ya;
      case $p:
        return wa;
      case Pp:
        return _a;
      case Rp:
        return Sa;
    }
  return t;
});
var Ea = gt.Uint8Array, Mp = "__lodash_hash_undefined__";
function Np(e) {
  return this.__data__.set(e, Mp), this;
}
function Lp(e) {
  return this.__data__.has(e);
}
function Do(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new $t(); ++t < n; )
    this.add(e[t]);
}
Do.prototype.add = Do.prototype.push = Np;
Do.prototype.has = Lp;
function xp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function kp(e, t) {
  return e.has(t);
}
var Dp = 1, Bp = 2;
function Gi(e, t, n, o, r, a) {
  var s = n & Dp, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, v = !0, g = n & Bp ? new Do() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < i; ) {
    var p = e[f], h = t[f];
    if (o)
      var b = s ? o(h, p, f, t, e, a) : o(p, h, f, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!xp(t, function(m, E) {
        if (!kp(g, E) && (p === m || r(p, m, n, o, a)))
          return g.push(E);
      })) {
        v = !1;
        break;
      }
    } else if (!(p === h || r(p, h, n, o, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
function Fp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function zp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Vp = 1, Hp = 2, Wp = "[object Boolean]", jp = "[object Date]", Up = "[object Error]", Kp = "[object Map]", Gp = "[object Number]", qp = "[object RegExp]", Yp = "[object Set]", Zp = "[object String]", Xp = "[object Symbol]", Jp = "[object ArrayBuffer]", Qp = "[object DataView]", Ta = vt ? vt.prototype : void 0, hr = Ta ? Ta.valueOf : void 0;
function ev(e, t, n, o, r, a, s) {
  switch (n) {
    case Qp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Jp:
      return !(e.byteLength != t.byteLength || !a(new Ea(e), new Ea(t)));
    case Wp:
    case jp:
    case Gp:
      return Jr(+e, +t);
    case Up:
      return e.name == t.name && e.message == t.message;
    case qp:
    case Zp:
      return e == t + "";
    case Kp:
      var i = Fp;
    case Yp:
      var l = o & Vp;
      if (i || (i = zp), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      o |= Hp, s.set(e, t);
      var d = Gi(i(e), i(t), o, r, a, s);
      return s.delete(e), d;
    case Xp:
      if (hr)
        return hr.call(e) == hr.call(t);
  }
  return !1;
}
var tv = 1, nv = Object.prototype, ov = nv.hasOwnProperty;
function rv(e, t, n, o, r, a) {
  var s = n & tv, i = ba(e), l = i.length, u = ba(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var f = l; f--; ) {
    var v = i[f];
    if (!(s ? v in t : ov.call(t, v)))
      return !1;
  }
  var g = a.get(e), p = a.get(t);
  if (g && p)
    return g == t && p == e;
  var h = !0;
  a.set(e, t), a.set(t, e);
  for (var b = s; ++f < l; ) {
    v = i[f];
    var m = e[v], E = t[v];
    if (o)
      var A = s ? o(E, m, v, t, e, a) : o(m, E, v, e, t, a);
    if (!(A === void 0 ? m === E || r(m, E, n, o, a) : A)) {
      h = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (h && !b) {
    var $ = e.constructor, S = t.constructor;
    $ != S && "constructor" in e && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof S == "function" && S instanceof S) && (h = !1);
  }
  return a.delete(e), a.delete(t), h;
}
var sv = 1, Oa = "[object Arguments]", Ia = "[object Array]", go = "[object Object]", av = Object.prototype, Aa = av.hasOwnProperty;
function iv(e, t, n, o, r, a) {
  var s = lt(e), i = lt(t), l = s ? Ia : Bt(e), u = i ? Ia : Bt(t);
  l = l == Oa ? go : l, u = u == Oa ? go : u;
  var d = l == go, f = u == go, v = l == u;
  if (v && Ir(e)) {
    if (!Ir(t))
      return !1;
    s = !0, d = !1;
  }
  if (v && !d)
    return a || (a = new Tt()), s || ji(e) ? Gi(e, t, n, o, r, a) : ev(e, t, l, n, o, r, a);
  if (!(n & sv)) {
    var g = d && Aa.call(e, "__wrapped__"), p = f && Aa.call(t, "__wrapped__");
    if (g || p) {
      var h = g ? e.value() : e, b = p ? t.value() : t;
      return a || (a = new Tt()), r(h, b, n, o, a);
    }
  }
  return v ? (a || (a = new Tt()), rv(e, t, n, o, r, a)) : !1;
}
function Zo(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !On(e) && !On(t) ? e !== e && t !== t : iv(e, t, n, o, Zo, r);
}
var lv = 1, uv = 2;
function cv(e, t, n, o) {
  var r = n.length, a = r;
  if (e == null)
    return !a;
  for (e = Object(e); r--; ) {
    var s = n[r];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++r < a; ) {
    s = n[r];
    var i = s[0], l = e[i], u = s[1];
    if (s[2]) {
      if (l === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Tt(), f;
      if (!(f === void 0 ? Zo(u, l, lv | uv, o, d) : f))
        return !1;
    }
  }
  return !0;
}
function qi(e) {
  return e === e && !jt(e);
}
function dv(e) {
  for (var t = Ui(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, qi(r)];
  }
  return t;
}
function Yi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function fv(e) {
  var t = dv(e);
  return t.length == 1 && t[0][2] ? Yi(t[0][0], t[0][1]) : function(n) {
    return n === e || cv(n, e, t);
  };
}
function pv(e, t) {
  return e != null && t in Object(e);
}
function vv(e, t, n) {
  t = Yo(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var s = ro(t[o]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && Qr(r) && Xr(s, r) && (lt(e) || es(e)));
}
function Zi(e, t) {
  return e != null && vv(e, t, pv);
}
var hv = 1, gv = 2;
function mv(e, t) {
  return ts(e) && qi(t) ? Yi(ro(e), t) : function(n) {
    var o = zt(n, e);
    return o === void 0 && o === t ? Zi(n, e) : Zo(t, o, hv | gv);
  };
}
function bv(e) {
  return function(t) {
    return t?.[e];
  };
}
function yv(e) {
  return function(t) {
    return os(t, e);
  };
}
function wv(e) {
  return ts(e) ? bv(ro(e)) : yv(e);
}
function _v(e) {
  return typeof e == "function" ? e : e == null ? Fi : typeof e == "object" ? lt(e) ? mv(e[0], e[1]) : fv(e) : wv(e);
}
var gr = function() {
  return gt.Date.now();
}, Sv = "Expected a function", Cv = Math.max, Ev = Math.min;
function Tv(e, t, n) {
  var o, r, a, s, i, l, u = 0, d = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Sv);
  t = la(t) || 0, jt(n) && (d = !!n.leading, f = "maxWait" in n, a = f ? Cv(la(n.maxWait) || 0, t) : a, v = "trailing" in n ? !!n.trailing : v);
  function g(I) {
    var T = o, D = r;
    return o = r = void 0, u = I, s = e.apply(D, T), s;
  }
  function p(I) {
    return u = I, i = setTimeout(m, t), d ? g(I) : s;
  }
  function h(I) {
    var T = I - l, D = I - u, C = t - T;
    return f ? Ev(C, a - D) : C;
  }
  function b(I) {
    var T = I - l, D = I - u;
    return l === void 0 || T >= t || T < 0 || f && D >= a;
  }
  function m() {
    var I = gr();
    if (b(I))
      return E(I);
    i = setTimeout(m, h(I));
  }
  function E(I) {
    return i = void 0, v && o ? g(I) : (o = r = void 0, s);
  }
  function A() {
    i !== void 0 && clearTimeout(i), u = 0, o = l = r = i = void 0;
  }
  function $() {
    return i === void 0 ? s : E(gr());
  }
  function S() {
    var I = gr(), T = b(I);
    if (o = arguments, r = this, l = I, T) {
      if (i === void 0)
        return p(l);
      if (f)
        return clearTimeout(i), i = setTimeout(m, t), g(l);
    }
    return i === void 0 && (i = setTimeout(m, t)), s;
  }
  return S.cancel = A, S.flush = $, S;
}
function Ov(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Pd(e, _v(t), r);
}
function Bo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function qn(e, t) {
  return Zo(e, t);
}
function Xo(e) {
  return e == null;
}
function Xi(e) {
  return e === void 0;
}
function Iv(e, t, n, o) {
  if (!jt(e))
    return e;
  t = Yo(t, e);
  for (var r = -1, a = t.length, s = a - 1, i = e; i != null && ++r < a; ) {
    var l = ro(t[r]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (r != s) {
      var d = i[l];
      u = void 0, u === void 0 && (u = jt(d) ? d : Xr(t[r + 1]) ? [] : {});
    }
    kd(i, l, u), i = i[l];
  }
  return e;
}
function Av(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var s = t[o], i = os(e, s);
    n(i, s) && Iv(a, Yo(s, e), i);
  }
  return a;
}
function $v(e, t) {
  return Av(e, t, function(n, o) {
    return Zi(e, o);
  });
}
var Pv = pp(function(e, t) {
  return e == null ? {} : $v(e, t);
});
const En = (e) => e === void 0, an = (e) => typeof e == "boolean", ge = (e) => typeof e == "number", Ge = (e) => typeof Element > "u" ? !1 : e instanceof Element, Rv = (e) => we(e) ? !Number.isNaN(Number(e)) : !1;
var Mv = Object.defineProperty, Nv = Object.defineProperties, Lv = Object.getOwnPropertyDescriptors, $a = Object.getOwnPropertySymbols, xv = Object.prototype.hasOwnProperty, kv = Object.prototype.propertyIsEnumerable, Pa = (e, t, n) => t in e ? Mv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Dv = (e, t) => {
  for (var n in t || (t = {}))
    xv.call(t, n) && Pa(e, n, t[n]);
  if ($a)
    for (var n of $a(t))
      kv.call(t, n) && Pa(e, n, t[n]);
  return e;
}, Bv = (e, t) => Nv(e, Lv(t));
function Fv(e, t) {
  var n;
  const o = on();
  return Ur(() => {
    o.value = e();
  }, Bv(Dv({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), jr(o);
}
var Ra;
const de = typeof window < "u", Ma = (e) => typeof e == "function", zv = (e) => typeof e == "string", Ji = () => {
}, Rr = de && ((Ra = window?.navigator) == null ? void 0 : Ra.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rs(e) {
  return typeof e == "function" ? e() : c(e);
}
function Vv(e) {
  return e;
}
function Hv(e, t) {
  let n, o, r;
  const a = P(!0), s = () => {
    a.value = !0, r();
  };
  Y(e, s, { flush: "sync" });
  const i = Ma(t) ? t : t.get, l = Ma(t) ? void 0 : t.set, u = zu((d, f) => (o = d, r = f, {
    get() {
      return a.value && (n = i(), a.value = !1), o(), n;
    },
    set(v) {
      l?.(v);
    }
  }));
  return Object.isExtensible(u) && (u.trigger = s), u;
}
function so(e) {
  return Fu() ? (Ei(e), !0) : !1;
}
function Wv(e, t = !0) {
  $e() ? me(e) : t ? e() : pe(e);
}
function Fo(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = P(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    r.value = !1, s();
  }
  function l(...u) {
    s(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...u);
    }, rs(t));
  }
  return o && (r.value = !0, de && l()), so(i), {
    isPending: jr(r),
    start: l,
    stop: i
  };
}
function Ct(e) {
  var t;
  const n = rs(e);
  return (t = n?.$el) != null ? t : n;
}
const ao = de ? window : void 0;
function Pe(...e) {
  let t, n, o, r;
  if (zv(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = ao) : [t, n, o, r] = e, !t)
    return Ji;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, f, v, g) => (d.addEventListener(f, v, g), () => d.removeEventListener(f, v, g)), l = Y(() => [Ct(t), rs(r)], ([d, f]) => {
    s(), d && a.push(...n.flatMap((v) => o.map((g) => i(d, v, g, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return so(u), u;
}
let Na = !1;
function jv(e, t, n = {}) {
  const { window: o = ao, ignore: r = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  Rr && !Na && (Na = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", Ji)));
  let i = !0;
  const l = (v) => r.some((g) => {
    if (typeof g == "string")
      return Array.from(o.document.querySelectorAll(g)).some((p) => p === v.target || v.composedPath().includes(p));
    {
      const p = Ct(g);
      return p && (v.target === p || v.composedPath().includes(p));
    }
  }), d = [
    Pe(o, "click", (v) => {
      const g = Ct(e);
      if (!(!g || g === v.target || v.composedPath().includes(g))) {
        if (v.detail === 0 && (i = !l(v)), !i) {
          i = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: a }),
    Pe(o, "pointerdown", (v) => {
      const g = Ct(e);
      g && (i = !v.composedPath().includes(g) && !l(v));
    }, { passive: !0 }),
    s && Pe(o, "blur", (v) => {
      var g;
      const p = Ct(e);
      ((g = o.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !p?.contains(o.document.activeElement) && t(v);
    })
  ].filter(Boolean);
  return () => d.forEach((v) => v());
}
function Uv(e = {}) {
  var t;
  const { window: n = ao } = e, o = (t = e.document) != null ? t : n?.document, r = Hv(() => null, () => o?.activeElement);
  return n && (Pe(n, "blur", (a) => {
    a.relatedTarget === null && r.trigger();
  }, !0), Pe(n, "focus", r.trigger, !0)), r;
}
function Qi(e, t = !1) {
  const n = P(), o = () => n.value = !!e();
  return o(), Wv(o, t), n;
}
const La = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xa = "__vueuse_ssr_handlers__";
La[xa] = La[xa] || {};
var ka = Object.getOwnPropertySymbols, Kv = Object.prototype.hasOwnProperty, Gv = Object.prototype.propertyIsEnumerable, qv = (e, t) => {
  var n = {};
  for (var o in e)
    Kv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ka)
    for (var o of ka(e))
      t.indexOf(o) < 0 && Gv.call(e, o) && (n[o] = e[o]);
  return n;
};
function ot(e, t, n = {}) {
  const o = n, { window: r = ao } = o, a = qv(o, ["window"]);
  let s;
  const i = Qi(() => r && "ResizeObserver" in r), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Y(() => Ct(e), (f) => {
    l(), i.value && r && f && (s = new ResizeObserver(t), s.observe(f, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return so(d), {
    isSupported: i,
    stop: d
  };
}
var Da = Object.getOwnPropertySymbols, Yv = Object.prototype.hasOwnProperty, Zv = Object.prototype.propertyIsEnumerable, Xv = (e, t) => {
  var n = {};
  for (var o in e)
    Yv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Da)
    for (var o of Da(e))
      t.indexOf(o) < 0 && Zv.call(e, o) && (n[o] = e[o]);
  return n;
};
function Jv(e, t, n = {}) {
  const o = n, { window: r = ao } = o, a = Xv(o, ["window"]);
  let s;
  const i = Qi(() => r && "MutationObserver" in r), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Y(() => Ct(e), (f) => {
    l(), i.value && r && f && (s = new MutationObserver(t), s.observe(f, a));
  }, { immediate: !0 }), d = () => {
    l(), u();
  };
  return so(d), {
    isSupported: i,
    stop: d
  };
}
var Ba;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ba || (Ba = {}));
var Qv = Object.defineProperty, Fa = Object.getOwnPropertySymbols, eh = Object.prototype.hasOwnProperty, th = Object.prototype.propertyIsEnumerable, za = (e, t, n) => t in e ? Qv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nh = (e, t) => {
  for (var n in t || (t = {}))
    eh.call(t, n) && za(e, n, t[n]);
  if (Fa)
    for (var n of Fa(t))
      th.call(t, n) && za(e, n, t[n]);
  return e;
};
const oh = {
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
nh({
  linear: Vv
}, oh);
class el extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function tl(e, t) {
  throw new el(`[${e}] ${t}`);
}
function Se(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = we(e) ? new el(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Va = {
  current: 0
}, Ha = P(0), nl = 2e3, Wa = Symbol("elZIndexContextKey"), ol = Symbol("zIndexContextKey"), ss = (e) => {
  const t = $e() ? re(Wa, Va) : Va, n = e || ($e() ? re(ol, void 0) : void 0), o = y(() => {
    const s = c(n);
    return ge(s) ? s : nl;
  }), r = y(() => o.value + Ha.value), a = () => (t.current++, Ha.value = t.current, r.value);
  return !de && !re(Wa) && Se("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: a
  };
};
var rh = {
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
const sh = (e) => (t, n) => ah(t, n, c(e)), ah = (e, t, n) => zt(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t?.[r]) != null ? a : `{${r}}`}`;
}), ih = (e) => {
  const t = y(() => c(e).name), n = Kr(e) ? e : P(e);
  return {
    lang: t,
    locale: n,
    t: sh(e)
  };
}, rl = Symbol("localeContextKey"), as = (e) => {
  const t = e || re(rl, P());
  return ih(y(() => t.value || rh));
}, sl = "__epPropKey", q = (e) => e, lh = (e) => Ae(e) && !!e[sl], Jo = (e, t) => {
  if (!Ae(e) || lh(e))
    return e;
  const { values: n, required: o, default: r, type: a, validator: s } = e, l = {
    type: a,
    required: !!o,
    validator: n || s ? (u) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), Ms(e, "default") && f.push(r), d || (d = f.includes(u))), s && (d || (d = s(u))), !d && f.length > 0) {
        const v = [...new Set(f)].map((g) => JSON.stringify(g)).join(", ");
        Ln(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [sl]: !0
  };
  return Ms(e, "default") && (l.default = r), l;
}, ie = (e) => Bo(Object.entries(e).map(([t, n]) => [
  t,
  Jo(n, t)
])), al = ["", "default", "small", "large"], Qo = Jo({
  type: String,
  values: al,
  required: !1
}), il = Symbol("size"), uh = () => {
  const e = re(il, {});
  return y(() => c(e.size) || "");
}, ll = Symbol("emptyValuesContextKey"), ch = "use-empty-values", dh = ["", void 0, null], fh = void 0, ph = ie({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => he(e) ? !e() : !e
  }
}), vh = (e, t) => {
  const n = $e() ? re(ll, P({})) : P({}), o = y(() => e.emptyValues || n.value.emptyValues || dh), r = y(() => he(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : he(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : fh), a = (s) => o.value.includes(s);
  return o.value.includes(r.value) || Se(ch, "value-on-clear should be a value of empty-values"), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: a
  };
}, ja = (e) => Object.keys(e), zo = P();
function er(e, t = void 0) {
  const n = $e() ? re(Li, zo) : zo;
  return e ? y(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function ul(e, t) {
  const n = er(), o = fe(e, y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Kn;
  })), r = as(y(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = ss(y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || nl;
  })), s = y(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return hh(y(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: a,
    size: s
  };
}
const hh = (e, t, n = !1) => {
  var o;
  const r = !!$e(), a = r ? er() : void 0, s = (o = void 0) != null ? o : r ? Ye : void 0;
  if (!s) {
    Se("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = y(() => {
    const l = c(e);
    return a?.value ? gh(a.value, l) : l;
  });
  return s(Li, i), s(rl, y(() => i.value.locale)), s(xi, y(() => i.value.namespace)), s(ol, y(() => i.value.zIndex)), s(il, {
    size: y(() => i.value.size || "")
  }), s(ll, y(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !zo.value) && (zo.value = i.value), i;
}, gh = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...ja(e), ...ja(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, We = "update:modelValue", In = "change", Ua = "input";
var le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const mh = "utils/dom/style", cl = (e = "") => e.split(" ").filter((t) => !!t.trim()), Ka = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, bh = (e, t) => {
  !e || !t.trim() || e.classList.add(...cl(t));
}, yh = (e, t) => {
  !e || !t.trim() || e.classList.remove(...cl(t));
}, wh = (e, t) => {
  var n;
  if (!de || !e)
    return "";
  let o = Wr(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const a = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return a ? a[o] : "";
  } catch {
    return e.style[o];
  }
};
function Ut(e, t = "px") {
  if (!e)
    return "";
  if (ge(e) || Rv(e))
    return `${e}${t}`;
  if (we(e))
    return e;
  Se(mh, "binding value must be a string or number");
}
let mo;
const _h = (e) => {
  var t;
  if (!de)
    return 0;
  if (mo !== void 0)
    return mo;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const a = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), mo = o - a, mo;
};
function Sh(e, t) {
  if (!de)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), a = r + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
  r < s ? e.scrollTop = r : a > i && (e.scrollTop = a - e.clientHeight);
}
const Qe = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, dl = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), is = (e) => (e.install = Et, e), Ch = ie({
  size: {
    type: q([Number, String])
  },
  color: {
    type: String
  }
}), Eh = V({
  name: "ElIcon",
  inheritAttrs: !1
}), Th = /* @__PURE__ */ V({
  ...Eh,
  props: Ch,
  setup(e) {
    const t = e, n = fe("icon"), o = y(() => {
      const { size: r, color: a } = t;
      return !r && !a ? {} : {
        fontSize: En(r) ? void 0 : Ut(r),
        "--color": a
      };
    });
    return (r, a) => (_(), F("i", Ht({
      class: c(n).b(),
      style: c(o)
    }, r.$attrs), [
      K(r.$slots, "default")
    ], 16));
  }
});
var Oh = /* @__PURE__ */ le(Th, [["__file", "icon.vue"]]);
const Re = Qe(Oh);
/*! Element Plus Icons Vue v2.3.1 */
var Ih = /* @__PURE__ */ V({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ah = Ih, $h = /* @__PURE__ */ V({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      O("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Ph = $h, Rh = /* @__PURE__ */ V({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Mh = Rh, Nh = /* @__PURE__ */ V({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      O("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), ls = Nh, Lh = /* @__PURE__ */ V({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Vo = Lh, xh = /* @__PURE__ */ V({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      O("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), kh = xh, Dh = /* @__PURE__ */ V({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Bh = Dh, Fh = /* @__PURE__ */ V({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), fl = Fh, zh = /* @__PURE__ */ V({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Vh = zh, Hh = /* @__PURE__ */ V({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Wh = Hh, jh = /* @__PURE__ */ V({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (_(), F("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Uh = jh;
const Ot = q([
  String,
  Object,
  Function
]), pl = {
  Close: Vo
}, Kh = {
  Close: Vo
}, Ho = {
  success: Vh,
  warning: Uh,
  error: Mh,
  info: Bh
}, vl = {
  validating: fl,
  success: Ph,
  error: ls
}, Gh = () => de && /firefox/i.test(window.navigator.userAgent);
let Le;
const qh = {
  height: "0",
  visibility: "hidden",
  overflow: Gh() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Yh = [
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
function Zh(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Yh.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Ga(e, t = 1, n) {
  var o;
  Le || (Le = document.createElement("textarea"), document.body.appendChild(Le));
  const { paddingSize: r, borderSize: a, boxSizing: s, contextStyle: i } = Zh(e);
  i.forEach(([f, v]) => Le?.style.setProperty(f, v)), Object.entries(qh).forEach(([f, v]) => Le?.style.setProperty(f, v, "important")), Le.value = e.value || e.placeholder || "";
  let l = Le.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - r), Le.value = "";
  const d = Le.scrollHeight - r;
  if (ge(t)) {
    let f = d * t;
    s === "border-box" && (f = f + r + a), l = Math.max(f, l), u.minHeight = `${f}px`;
  }
  if (ge(n)) {
    let f = d * n;
    s === "border-box" && (f = f + r + a), l = Math.min(f, l);
  }
  return u.height = `${l}px`, (o = Le.parentNode) == null || o.removeChild(Le), Le = void 0, u;
}
const hl = (e) => e, Xh = ie({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), kn = (e) => Pv(Xh, e), Jh = ie({
  id: {
    type: String,
    default: void 0
  },
  size: Qo,
  disabled: Boolean,
  modelValue: {
    type: q([
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
    type: q([Boolean, Object]),
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
    type: Ot
  },
  prefixIcon: {
    type: Ot
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
    type: q([Object, Array, String]),
    default: () => hl({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...kn(["ariaLabel"])
}), Qh = {
  [We]: (e) => we(e),
  input: (e) => we(e),
  change: (e) => we(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, eg = ["class", "style"], tg = /^on[A-Z]/, ng = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = y(() => (n?.value || []).concat(eg)), r = $e();
  return r ? y(() => {
    var a;
    return Bo(Object.entries((a = r.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !o.value.includes(s) && !(t && tg.test(s))));
  }) : (Se("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), y(() => ({})));
}, us = Symbol("formContextKey"), Wo = Symbol("formItemContextKey"), Mr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, og = Symbol("elIdInjection"), gl = () => $e() ? re(og, Mr) : Mr, ln = (e) => {
  const t = gl();
  !de && t === Mr && Se("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Zr();
  return Fv(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, tr = () => {
  const e = re(us, void 0), t = re(Wo, void 0);
  return {
    form: e,
    formItem: t
  };
}, cs = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = P(!1)), o || (o = P(!1));
  const r = P();
  let a;
  const s = y(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return me(() => {
    a = Y([rt(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : ln().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !l && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Gr(() => {
    a && a(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
}, ml = (e) => {
  const t = $e();
  return y(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, io = (e, t = {}) => {
  const n = P(void 0), o = t.prop ? n : ml("size"), r = t.global ? n : uh(), a = t.form ? { size: void 0 } : re(us, void 0), s = t.formItem ? { size: void 0 } : re(Wo, void 0);
  return y(() => o.value || c(e) || s?.size || a?.size || r.value || "");
}, nr = (e) => {
  const t = ml("disabled"), n = re(us, void 0);
  return y(() => t.value || c(e) || n?.disabled || !1);
};
function bl(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const a = $e(), { emit: s } = a, i = on(), l = P(!1), u = (v) => {
    he(t) && t(v) || l.value || (l.value = !0, s("focus", v), n?.());
  }, d = (v) => {
    var g;
    he(o) && o(v) || v.relatedTarget && ((g = i.value) != null && g.contains(v.relatedTarget)) || (l.value = !1, s("blur", v), r?.());
  }, f = () => {
    var v, g;
    (v = i.value) != null && v.contains(document.activeElement) && i.value !== document.activeElement || (g = e.value) == null || g.focus();
  };
  return Y(i, (v) => {
    v && v.setAttribute("tabindex", "-1");
  }), Pe(i, "focus", u, !0), Pe(i, "blur", d, !0), Pe(i, "click", f, !0), process.env.NODE_ENV === "test" && me(() => {
    const v = Ge(e.value) ? e.value : document.querySelector("input,textarea");
    v && (Pe(v, "focus", u, !0), Pe(v, "blur", d, !0));
  }), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const rg = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function yl({
  afterComposition: e,
  emit: t
}) {
  const n = P(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, d = u[u.length - 1] || "";
    n.value = !rg(d);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, pe(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? a(i) : r(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: a
  };
}
function sg(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: a, value: s } = e.value;
    if (r == null || a == null)
      return;
    const i = s.slice(0, Math.max(0, r)), l = s.slice(Math.max(0, a));
    t = {
      selectionStart: r,
      selectionEnd: a,
      value: s,
      beforeTxt: i,
      afterTxt: l
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: i } = t;
    if (a == null || s == null || i == null)
      return;
    let l = r.length;
    if (r.endsWith(s))
      l = r.length - s.length;
    else if (r.startsWith(a))
      l = a.length;
    else {
      const u = a[i - 1], d = r.indexOf(u, i - 1);
      d !== -1 && (l = d + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, o];
}
const wl = "ElInput", ag = V({
  name: wl,
  inheritAttrs: !1
}), ig = /* @__PURE__ */ V({
  ...ag,
  props: Jh,
  emits: Qh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Vu(), a = ng(), s = qr(), i = y(() => [
      o.type === "textarea" ? h.b() : p.b(),
      p.m(v.value),
      p.is("disabled", g.value),
      p.is("exceed", Ue.value),
      {
        [p.b("group")]: s.prepend || s.append,
        [p.m("prefix")]: s.prefix || o.prefixIcon,
        [p.m("suffix")]: s.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [p.bm("suffix", "password-clear")]: ue.value && ve.value,
        [p.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), l = y(() => [
      p.e("wrapper"),
      p.is("focus", D.value)
    ]), { form: u, formItem: d } = tr(), { inputId: f } = cs(o, {
      formItemContext: d
    }), v = io(), g = nr(), p = fe("input"), h = fe("textarea"), b = on(), m = on(), E = P(!1), A = P(!1), $ = P(), S = on(o.inputStyle), I = y(() => b.value || m.value), { wrapperRef: T, isFocused: D, handleFocus: C, handleBlur: z } = bl(I, {
      beforeFocus() {
        return g.value;
      },
      afterBlur() {
        var L;
        o.validateEvent && ((L = d?.validate) == null || L.call(d, "blur").catch((oe) => Se(oe)));
      }
    }), x = y(() => {
      var L;
      return (L = u?.statusIcon) != null ? L : !1;
    }), R = y(() => d?.validateState || ""), j = y(() => R.value && vl[R.value]), se = y(() => A.value ? Wh : kh), Z = y(() => [
      r.style
    ]), X = y(() => [
      o.inputStyle,
      S.value,
      { resize: o.resize }
    ]), B = y(() => Xo(o.modelValue) ? "" : String(o.modelValue)), ue = y(() => o.clearable && !g.value && !o.readonly && !!B.value && (D.value || E.value)), ve = y(() => o.showPassword && !g.value && !!B.value && (!!B.value || D.value)), be = y(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !g.value && !o.readonly && !o.showPassword), et = y(() => B.value.length), Ue = y(() => !!be.value && et.value > Number(o.maxlength)), tt = y(() => !!s.suffix || !!o.suffixIcon || ue.value || o.showPassword || be.value || !!R.value && x.value), [ee, U] = sg(b);
    ot(m, (L) => {
      if (ae(), !be.value || o.resize !== "both")
        return;
      const oe = L[0], { width: Ke } = oe.contentRect;
      $.value = {
        right: `calc(100% - ${Ke + 15 + 6}px)`
      };
    });
    const ne = () => {
      const { type: L, autosize: oe } = o;
      if (!(!de || L !== "textarea" || !m.value))
        if (oe) {
          const Ke = Ae(oe) ? oe.minRows : void 0, Rt = Ae(oe) ? oe.maxRows : void 0, Mt = Ga(m.value, Ke, Rt);
          S.value = {
            overflowY: "hidden",
            ...Mt
          }, pe(() => {
            m.value.offsetHeight, S.value = Mt;
          });
        } else
          S.value = {
            minHeight: Ga(m.value).minHeight
          };
    }, ae = ((L) => {
      let oe = !1;
      return () => {
        var Ke;
        if (oe || !o.autosize)
          return;
        ((Ke = m.value) == null ? void 0 : Ke.offsetParent) === null || (L(), oe = !0);
      };
    })(ne), Fe = () => {
      const L = I.value, oe = o.formatter ? o.formatter(B.value) : B.value;
      !L || L.value === oe || (L.value = oe);
    }, Gt = async (L) => {
      ee();
      let { value: oe } = L.target;
      if (o.formatter && o.parser && (oe = o.parser(oe)), !qt.value) {
        if (oe === B.value) {
          Fe();
          return;
        }
        n(We, oe), n(Ua, oe), await pe(), Fe(), U();
      }
    }, mt = (L) => {
      let { value: oe } = L.target;
      o.formatter && o.parser && (oe = o.parser(oe)), n(In, oe);
    }, {
      isComposing: qt,
      handleCompositionStart: Yt,
      handleCompositionUpdate: pn,
      handleCompositionEnd: vn
    } = yl({ emit: n, afterComposition: Gt }), hn = () => {
      ee(), A.value = !A.value, setTimeout(U);
    }, gn = () => {
      var L;
      return (L = I.value) == null ? void 0 : L.focus();
    }, Pt = () => {
      var L;
      return (L = I.value) == null ? void 0 : L.blur();
    }, mn = (L) => {
      E.value = !1, n("mouseleave", L);
    }, Ne = (L) => {
      E.value = !0, n("mouseenter", L);
    }, ct = (L) => {
      n("keydown", L);
    }, bn = () => {
      var L;
      (L = I.value) == null || L.select();
    }, Zt = () => {
      n(We, ""), n(In, ""), n("clear"), n(Ua, "");
    };
    return Y(() => o.modelValue, () => {
      var L;
      pe(() => ne()), o.validateEvent && ((L = d?.validate) == null || L.call(d, "change").catch((oe) => Se(oe)));
    }), Y(B, () => Fe()), Y(() => o.type, async () => {
      await pe(), Fe(), ne();
    }), me(() => {
      !o.formatter && o.parser && Se(wl, "If you set the parser, you also need to set the formatter."), Fe(), pe(ne);
    }), t({
      input: b,
      textarea: m,
      ref: I,
      textareaStyle: X,
      autosize: rt(o, "autosize"),
      isComposing: qt,
      focus: gn,
      blur: Pt,
      select: bn,
      clear: Zt,
      resizeTextarea: ne
    }), (L, oe) => (_(), F("div", {
      class: M([
        c(i),
        {
          [c(p).bm("group", "append")]: L.$slots.append,
          [c(p).bm("group", "prepend")]: L.$slots.prepend
        }
      ]),
      style: _e(c(Z)),
      onMouseenter: Ne,
      onMouseleave: mn
    }, [
      W(" input "),
      L.type !== "textarea" ? (_(), F(ke, { key: 0 }, [
        W(" prepend slot "),
        L.$slots.prepend ? (_(), F("div", {
          key: 0,
          class: M(c(p).be("group", "prepend"))
        }, [
          K(L.$slots, "prepend")
        ], 2)) : W("v-if", !0),
        O("div", {
          ref_key: "wrapperRef",
          ref: T,
          class: M(c(l))
        }, [
          W(" prefix slot "),
          L.$slots.prefix || L.prefixIcon ? (_(), F("span", {
            key: 0,
            class: M(c(p).e("prefix"))
          }, [
            O("span", {
              class: M(c(p).e("prefix-inner"))
            }, [
              K(L.$slots, "prefix"),
              L.prefixIcon ? (_(), G(c(Re), {
                key: 0,
                class: M(c(p).e("icon"))
              }, {
                default: H(() => [
                  (_(), G(xe(L.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 2)) : W("v-if", !0),
          O("input", Ht({
            id: c(f),
            ref_key: "input",
            ref: b,
            class: c(p).e("inner")
          }, c(a), {
            minlength: L.minlength,
            maxlength: L.maxlength,
            type: L.showPassword ? A.value ? "text" : "password" : L.type,
            disabled: c(g),
            readonly: L.readonly,
            autocomplete: L.autocomplete,
            tabindex: L.tabindex,
            "aria-label": L.ariaLabel,
            placeholder: L.placeholder,
            style: L.inputStyle,
            form: L.form,
            autofocus: L.autofocus,
            role: L.containerRole,
            onCompositionstart: c(Yt),
            onCompositionupdate: c(pn),
            onCompositionend: c(vn),
            onInput: Gt,
            onChange: mt,
            onKeydown: ct
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          W(" suffix slot "),
          c(tt) ? (_(), F("span", {
            key: 1,
            class: M(c(p).e("suffix"))
          }, [
            O("span", {
              class: M(c(p).e("suffix-inner"))
            }, [
              !c(ue) || !c(ve) || !c(be) ? (_(), F(ke, { key: 0 }, [
                K(L.$slots, "suffix"),
                L.suffixIcon ? (_(), G(c(Re), {
                  key: 0,
                  class: M(c(p).e("icon"))
                }, {
                  default: H(() => [
                    (_(), G(xe(L.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : W("v-if", !0)
              ], 64)) : W("v-if", !0),
              c(ue) ? (_(), G(c(Re), {
                key: 1,
                class: M([c(p).e("icon"), c(p).e("clear")]),
                onMousedown: Ce(c(Et), ["prevent"]),
                onClick: Zt
              }, {
                default: H(() => [
                  J(c(ls))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : W("v-if", !0),
              c(ve) ? (_(), G(c(Re), {
                key: 2,
                class: M([c(p).e("icon"), c(p).e("password")]),
                onClick: hn
              }, {
                default: H(() => [
                  (_(), G(xe(c(se))))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0),
              c(be) ? (_(), F("span", {
                key: 3,
                class: M(c(p).e("count"))
              }, [
                O("span", {
                  class: M(c(p).e("count-inner"))
                }, Q(c(et)) + " / " + Q(L.maxlength), 3)
              ], 2)) : W("v-if", !0),
              c(R) && c(j) && c(x) ? (_(), G(c(Re), {
                key: 4,
                class: M([
                  c(p).e("icon"),
                  c(p).e("validateIcon"),
                  c(p).is("loading", c(R) === "validating")
                ])
              }, {
                default: H(() => [
                  (_(), G(xe(c(j))))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 2)) : W("v-if", !0)
        ], 2),
        W(" append slot "),
        L.$slots.append ? (_(), F("div", {
          key: 1,
          class: M(c(p).be("group", "append"))
        }, [
          K(L.$slots, "append")
        ], 2)) : W("v-if", !0)
      ], 64)) : (_(), F(ke, { key: 1 }, [
        W(" textarea "),
        O("textarea", Ht({
          id: c(f),
          ref_key: "textarea",
          ref: m,
          class: [c(h).e("inner"), c(p).is("focus", c(D))]
        }, c(a), {
          minlength: L.minlength,
          maxlength: L.maxlength,
          tabindex: L.tabindex,
          disabled: c(g),
          readonly: L.readonly,
          autocomplete: L.autocomplete,
          style: c(X),
          "aria-label": L.ariaLabel,
          placeholder: L.placeholder,
          form: L.form,
          autofocus: L.autofocus,
          rows: L.rows,
          role: L.containerRole,
          onCompositionstart: c(Yt),
          onCompositionupdate: c(pn),
          onCompositionend: c(vn),
          onInput: Gt,
          onFocus: c(C),
          onBlur: c(z),
          onChange: mt,
          onKeydown: ct
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(be) ? (_(), F("span", {
          key: 0,
          style: _e($.value),
          class: M(c(p).e("count"))
        }, Q(c(et)) + " / " + Q(L.maxlength), 7)) : W("v-if", !0)
      ], 64))
    ], 38));
  }
});
var lg = /* @__PURE__ */ le(ig, [["__file", "input.vue"]]);
const ug = Qe(lg), _n = 4, cg = {
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
}, dg = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ds = Symbol("scrollbarContextKey"), fg = ie({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), pg = "Thumb", vg = /* @__PURE__ */ V({
  __name: "thumb",
  props: fg,
  setup(e) {
    const t = e, n = re(ds), o = fe("scrollbar");
    n || tl(pg, "can not inject scrollbar context");
    const r = P(), a = P(), s = P({}), i = P(!1);
    let l = !1, u = !1, d = de ? document.onselectstart : null;
    const f = y(() => cg[t.vertical ? "vertical" : "horizontal"]), v = y(() => dg({
      size: t.size,
      move: t.move,
      bar: f.value
    })), g = y(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / a.value[f.value.offset]), p = (I) => {
      var T;
      if (I.stopPropagation(), I.ctrlKey || [1, 2].includes(I.button))
        return;
      (T = window.getSelection()) == null || T.removeAllRanges(), b(I);
      const D = I.currentTarget;
      D && (s.value[f.value.axis] = D[f.value.offset] - (I[f.value.client] - D.getBoundingClientRect()[f.value.direction]));
    }, h = (I) => {
      if (!a.value || !r.value || !n.wrapElement)
        return;
      const T = Math.abs(I.target.getBoundingClientRect()[f.value.direction] - I[f.value.client]), D = a.value[f.value.offset] / 2, C = (T - D) * 100 * g.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = C * n.wrapElement[f.value.scrollSize] / 100;
    }, b = (I) => {
      I.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", E), d = document.onselectstart, document.onselectstart = () => !1;
    }, m = (I) => {
      if (!r.value || !a.value || l === !1)
        return;
      const T = s.value[f.value.axis];
      if (!T)
        return;
      const D = (r.value.getBoundingClientRect()[f.value.direction] - I[f.value.client]) * -1, C = a.value[f.value.offset] - T, z = (D - C) * 100 * g.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = z * n.wrapElement[f.value.scrollSize] / 100;
    }, E = () => {
      l = !1, s.value[f.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", E), S(), u && (i.value = !1);
    }, A = () => {
      u = !1, i.value = !!t.size;
    }, $ = () => {
      u = !0, i.value = l;
    };
    ut(() => {
      S(), document.removeEventListener("mouseup", E);
    });
    const S = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Pe(rt(n, "scrollbarElement"), "mousemove", A), Pe(rt(n, "scrollbarElement"), "mouseleave", $), (I, T) => (_(), G(cn, {
      name: c(o).b("fade"),
      persisted: ""
    }, {
      default: H(() => [
        Me(O("div", {
          ref_key: "instance",
          ref: r,
          class: M([c(o).e("bar"), c(o).is(c(f).key)]),
          onMousedown: h
        }, [
          O("div", {
            ref_key: "thumb",
            ref: a,
            class: M(c(o).e("thumb")),
            style: _e(c(v)),
            onMousedown: p
          }, null, 38)
        ], 34), [
          [it, I.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var qa = /* @__PURE__ */ le(vg, [["__file", "thumb.vue"]]);
const hg = ie({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), gg = /* @__PURE__ */ V({
  __name: "bar",
  props: hg,
  setup(e, { expose: t }) {
    const n = e, o = re(ds), r = P(0), a = P(0), s = P(""), i = P(""), l = P(1), u = P(1);
    return t({
      handleScroll: (v) => {
        if (v) {
          const g = v.offsetHeight - _n, p = v.offsetWidth - _n;
          a.value = v.scrollTop * 100 / g * l.value, r.value = v.scrollLeft * 100 / p * u.value;
        }
      },
      update: () => {
        const v = o?.wrapElement;
        if (!v)
          return;
        const g = v.offsetHeight - _n, p = v.offsetWidth - _n, h = g ** 2 / v.scrollHeight, b = p ** 2 / v.scrollWidth, m = Math.max(h, n.minSize), E = Math.max(b, n.minSize);
        l.value = h / (g - h) / (m / (g - m)), u.value = b / (p - b) / (E / (p - E)), i.value = m + _n < g ? `${m}px` : "", s.value = E + _n < p ? `${E}px` : "";
      }
    }), (v, g) => (_(), F(ke, null, [
      J(qa, {
        move: r.value,
        ratio: u.value,
        size: s.value,
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      J(qa, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var mg = /* @__PURE__ */ le(gg, [["__file", "bar.vue"]]);
const bg = ie({
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
  ...kn(["ariaLabel", "ariaOrientation"])
}), yg = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ge)
}, Nr = "ElScrollbar", wg = V({
  name: Nr
}), _g = /* @__PURE__ */ V({
  ...wg,
  props: bg,
  emits: yg,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = fe("scrollbar");
    let a, s, i = 0, l = 0;
    const u = P(), d = P(), f = P(), v = P(), g = y(() => {
      const S = {};
      return o.height && (S.height = Ut(o.height)), o.maxHeight && (S.maxHeight = Ut(o.maxHeight)), [o.wrapStyle, S];
    }), p = y(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), h = y(() => [r.e("view"), o.viewClass]), b = () => {
      var S;
      d.value && ((S = v.value) == null || S.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function m(S, I) {
      Ae(S) ? d.value.scrollTo(S) : ge(S) && ge(I) && d.value.scrollTo(S, I);
    }
    const E = (S) => {
      if (!ge(S)) {
        Se(Nr, "value must be a number");
        return;
      }
      d.value.scrollTop = S;
    }, A = (S) => {
      if (!ge(S)) {
        Se(Nr, "value must be a number");
        return;
      }
      d.value.scrollLeft = S;
    }, $ = () => {
      var S;
      (S = v.value) == null || S.update();
    };
    return Y(() => o.noresize, (S) => {
      S ? (a?.(), s?.()) : ({ stop: a } = ot(f, $), s = Pe("resize", $));
    }, { immediate: !0 }), Y(() => [o.maxHeight, o.height], () => {
      o.native || pe(() => {
        var S;
        $(), d.value && ((S = v.value) == null || S.handleScroll(d.value));
      });
    }), Ye(ds, Wt({
      scrollbarElement: u,
      wrapElement: d
    })), Hu(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), me(() => {
      o.native || pe(() => {
        $();
      });
    }), Wu(() => $()), t({
      wrapRef: d,
      update: $,
      scrollTo: m,
      setScrollTop: E,
      setScrollLeft: A,
      handleScroll: b
    }), (S, I) => (_(), F("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: M(c(r).b())
    }, [
      O("div", {
        ref_key: "wrapRef",
        ref: d,
        class: M(c(p)),
        style: _e(c(g)),
        tabindex: S.tabindex,
        onScroll: b
      }, [
        (_(), G(xe(S.tag), {
          id: S.id,
          ref_key: "resizeRef",
          ref: f,
          class: M(c(h)),
          style: _e(S.viewStyle),
          role: S.role,
          "aria-label": S.ariaLabel,
          "aria-orientation": S.ariaOrientation
        }, {
          default: H(() => [
            K(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      S.native ? W("v-if", !0) : (_(), G(mg, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        always: S.always,
        "min-size": S.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Sg = /* @__PURE__ */ le(_g, [["__file", "scrollbar.vue"]]);
const Cg = Qe(Sg), fs = Symbol("popper"), _l = Symbol("popperContent"), Eg = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Sl = ie({
  role: {
    type: String,
    values: Eg,
    default: "tooltip"
  }
}), Tg = V({
  name: "ElPopper",
  inheritAttrs: !1
}), Og = /* @__PURE__ */ V({
  ...Tg,
  props: Sl,
  setup(e, { expose: t }) {
    const n = e, o = P(), r = P(), a = P(), s = P(), i = y(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Ye(fs, l), (u, d) => K(u.$slots, "default");
  }
});
var Ig = /* @__PURE__ */ le(Og, [["__file", "popper.vue"]]);
const Cl = ie({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Ag = V({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), $g = /* @__PURE__ */ V({
  ...Ag,
  props: Cl,
  setup(e, { expose: t }) {
    const n = e, o = fe("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: s } = re(_l, void 0);
    return Y(() => n.arrowOffset, (i) => {
      r.value = i;
    }), ut(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (_(), F("span", {
      ref_key: "arrowRef",
      ref: a,
      class: M(c(o).e("arrow")),
      style: _e(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Pg = /* @__PURE__ */ le($g, [["__file", "arrow.vue"]]);
const El = ie({
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
}), Tl = Symbol("elForwardRef"), Rg = (e) => {
  Ye(Tl, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Mg = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Lr = (e) => {
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
}, mr = "ElOnlyChild", Ng = V({
  name: mr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = re(Tl), a = Mg((o = r?.setForwardRef) != null ? o : Et);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Se(mr, "requires exact only one valid child."), null;
      const l = Ol(i);
      return l ? Me(ju(l, n), [[a]]) : (Se(mr, "no valid child node found"), null);
    };
  }
});
function Ol(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Ae(n))
      switch (n.type) {
        case Uu:
          continue;
        case Ti:
        case "svg":
          return Ya(n);
        case ke:
          return Ol(n.children);
        default:
          return n;
      }
    return Ya(n);
  }
  return null;
}
function Ya(e) {
  const t = fe("only-child");
  return J("span", {
    class: t.e("content")
  }, [e]);
}
const Lg = V({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), xg = /* @__PURE__ */ V({
  ...Lg,
  props: El,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = re(fs, void 0);
    Rg(r);
    const a = y(() => i.value ? n.id : void 0), s = y(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = y(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = y(() => i.value ? `${n.open}` : void 0);
    let u;
    const d = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return me(() => {
      Y(() => n.virtualRef, (f) => {
        f && (r.value = Ct(f));
      }, {
        immediate: !0
      }), Y(r, (f, v) => {
        u?.(), u = void 0, Ge(f) && (d.forEach((g) => {
          var p;
          const h = n[g];
          h && (f.addEventListener(g.slice(2).toLowerCase(), h), (p = v?.removeEventListener) == null || p.call(v, g.slice(2).toLowerCase(), h));
        }), Lr(f) && (u = Y([a, s, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((p, h) => {
            Xo(g[h]) ? f.removeAttribute(p) : f.setAttribute(p, g[h]);
          });
        }, { immediate: !0 }))), Ge(v) && Lr(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => v.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), ut(() => {
      if (u?.(), u = void 0, r.value && Ge(r.value)) {
        const f = r.value;
        d.forEach((v) => {
          const g = n[v];
          g && f.removeEventListener(v.slice(2).toLowerCase(), g);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (f, v) => f.virtualTriggering ? W("v-if", !0) : (_(), G(c(Ng), Ht({ key: 0 }, f.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: H(() => [
        K(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var kg = /* @__PURE__ */ le(xg, [["__file", "trigger.vue"]]);
const br = "focus-trap.focus-after-trapped", yr = "focus-trap.focus-after-released", Dg = "focus-trap.focusout-prevented", Za = {
  cancelable: !0,
  bubbles: !1
}, Bg = {
  cancelable: !0,
  bubbles: !1
}, Xa = "focusAfterTrapped", Ja = "focusAfterReleased", Il = Symbol("elFocusTrap"), ps = P(), or = P(0), vs = P(0);
let bo = 0;
const Al = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Qa = (e, t) => {
  for (const n of e)
    if (!Fg(n, t))
      return n;
}, Fg = (e, t) => {
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
}, zg = (e) => {
  const t = Al(e), n = Qa(t, e), o = Qa(t.reverse(), e);
  return [n, o];
}, Vg = (e) => e instanceof HTMLInputElement && "select" in e, _t = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Ge(e) && !Lr(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), vs.value = window.performance.now(), e !== n && Vg(e) && t && e.select(), Ge(e) && o && e.removeAttribute("tabindex");
  }
};
function ei(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Hg = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = ei(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = ei(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, Wg = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (_t(o, t), document.activeElement !== n)
      return;
}, ti = Hg(), jg = () => or.value > vs.value, yo = () => {
  ps.value = "pointer", or.value = window.performance.now();
}, ni = () => {
  ps.value = "keyboard", or.value = window.performance.now();
}, Ug = () => (me(() => {
  bo === 0 && (document.addEventListener("mousedown", yo), document.addEventListener("touchstart", yo), document.addEventListener("keydown", ni)), bo++;
}), ut(() => {
  bo--, bo <= 0 && (document.removeEventListener("mousedown", yo), document.removeEventListener("touchstart", yo), document.removeEventListener("keydown", ni));
}), {
  focusReason: ps,
  lastUserFocusTimestamp: or,
  lastAutomatedFocusTimestamp: vs
}), wo = (e) => new CustomEvent(Dg, {
  ...Bg,
  detail: e
}), ft = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Cn = [];
const oi = (e) => {
  e.code === ft.esc && Cn.forEach((t) => t(e));
}, Kg = (e) => {
  me(() => {
    Cn.length === 0 && document.addEventListener("keydown", oi), de && Cn.push(e);
  }), ut(() => {
    Cn = Cn.filter((t) => t !== e), Cn.length === 0 && de && document.removeEventListener("keydown", oi);
  });
}, Gg = V({
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
    Xa,
    Ja,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = P();
    let o, r;
    const { focusReason: a } = Ug();
    Kg((p) => {
      e.trapped && !s.paused && t("release-requested", p);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (p) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: h, altKey: b, ctrlKey: m, metaKey: E, currentTarget: A, shiftKey: $ } = p, { loop: S } = e, I = h === ft.tab && !b && !m && !E, T = document.activeElement;
      if (I && T) {
        const D = A, [C, z] = zg(D);
        if (C && z) {
          if (!$ && T === z) {
            const R = wo({
              focusReason: a.value
            });
            t("focusout-prevented", R), R.defaultPrevented || (p.preventDefault(), S && _t(C, !0));
          } else if ($ && [C, D].includes(T)) {
            const R = wo({
              focusReason: a.value
            });
            t("focusout-prevented", R), R.defaultPrevented || (p.preventDefault(), S && _t(z, !0));
          }
        } else if (T === D) {
          const R = wo({
            focusReason: a.value
          });
          t("focusout-prevented", R), R.defaultPrevented || p.preventDefault();
        }
      }
    };
    Ye(Il, {
      focusTrapRef: n,
      onKeydown: i
    }), Y(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), Y([n], ([p], [h]) => {
      p && (p.addEventListener("keydown", i), p.addEventListener("focusin", d), p.addEventListener("focusout", f)), h && (h.removeEventListener("keydown", i), h.removeEventListener("focusin", d), h.removeEventListener("focusout", f));
    });
    const l = (p) => {
      t(Xa, p);
    }, u = (p) => t(Ja, p), d = (p) => {
      const h = c(n);
      if (!h)
        return;
      const b = p.target, m = p.relatedTarget, E = b && h.contains(b);
      e.trapped || m && h.contains(m) || (o = m), E && t("focusin", p), !s.paused && e.trapped && (E ? r = b : _t(r, !0));
    }, f = (p) => {
      const h = c(n);
      if (!(s.paused || !h))
        if (e.trapped) {
          const b = p.relatedTarget;
          !Xo(b) && !h.contains(b) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const m = wo({
                focusReason: a.value
              });
              t("focusout-prevented", m), m.defaultPrevented || _t(r, !0);
            }
          }, 0);
        } else {
          const b = p.target;
          b && h.contains(b) || t("focusout", p);
        }
    };
    async function v() {
      await pe();
      const p = c(n);
      if (p) {
        ti.push(s);
        const h = p.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !p.contains(h)) {
          const m = new Event(br, Za);
          p.addEventListener(br, l), p.dispatchEvent(m), m.defaultPrevented || pe(() => {
            let E = e.focusStartEl;
            we(E) || (_t(E), document.activeElement !== E && (E = "first")), E === "first" && Wg(Al(p), !0), (document.activeElement === h || E === "container") && _t(p);
          });
        }
      }
    }
    function g() {
      const p = c(n);
      if (p) {
        p.removeEventListener(br, l);
        const h = new CustomEvent(yr, {
          ...Za,
          detail: {
            focusReason: a.value
          }
        });
        p.addEventListener(yr, u), p.dispatchEvent(h), !h.defaultPrevented && (a.value == "keyboard" || !jg() || p.contains(document.activeElement)) && _t(o ?? document.body), p.removeEventListener(yr, u), ti.remove(s);
      }
    }
    return me(() => {
      e.trapped && v(), Y(() => e.trapped, (p) => {
        p ? v() : g();
      });
    }), ut(() => {
      e.trapped && g(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function qg(e, t, n, o, r, a) {
  return K(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var $l = /* @__PURE__ */ le(Gg, [["render", qg], ["__file", "focus-trap.vue"]]), De = "top", Xe = "bottom", Je = "right", Be = "left", hs = "auto", lo = [De, Xe, Je, Be], An = "start", no = "end", Yg = "clippingParents", Pl = "viewport", Wn = "popper", Zg = "reference", ri = lo.reduce(function(e, t) {
  return e.concat([t + "-" + An, t + "-" + no]);
}, []), rr = [].concat(lo, [hs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + An, t + "-" + no]);
}, []), Xg = "beforeRead", Jg = "read", Qg = "afterRead", em = "beforeMain", tm = "main", nm = "afterMain", om = "beforeWrite", rm = "write", sm = "afterWrite", am = [Xg, Jg, Qg, em, tm, nm, om, rm, sm];
function ht(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function je(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function un(e) {
  var t = je(e).Element;
  return e instanceof t || e instanceof Element;
}
function qe(e) {
  var t = je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function im(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !qe(a) || !ht(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(s) {
      var i = r[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function lm(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !qe(r) || !ht(r) || (Object.assign(r.style, i), Object.keys(a).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Rl = { name: "applyStyles", enabled: !0, phase: "write", fn: im, effect: lm, requires: ["computeStyles"] };
function pt(e) {
  return e.split("-")[0];
}
var rn = Math.max, jo = Math.min, $n = Math.round;
function xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ml() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function Pn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  t && qe(e) && (r = e.offsetWidth > 0 && $n(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && $n(o.height) / e.offsetHeight || 1);
  var s = un(e) ? je(e) : window, i = s.visualViewport, l = !Ml() && n, u = (o.left + (l && i ? i.offsetLeft : 0)) / r, d = (o.top + (l && i ? i.offsetTop : 0)) / a, f = o.width / r, v = o.height / a;
  return { width: f, height: v, top: d, right: u + f, bottom: d + v, left: u, x: u, y: d };
}
function ms(e) {
  var t = Pn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Nl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && gs(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function It(e) {
  return je(e).getComputedStyle(e);
}
function um(e) {
  return ["table", "td", "th"].indexOf(ht(e)) >= 0;
}
function Kt(e) {
  return ((un(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function sr(e) {
  return ht(e) === "html" ? e : e.assignedSlot || e.parentNode || (gs(e) ? e.host : null) || Kt(e);
}
function si(e) {
  return !qe(e) || It(e).position === "fixed" ? null : e.offsetParent;
}
function cm(e) {
  var t = /firefox/i.test(xr()), n = /Trident/i.test(xr());
  if (n && qe(e)) {
    var o = It(e);
    if (o.position === "fixed") return null;
  }
  var r = sr(e);
  for (gs(r) && (r = r.host); qe(r) && ["html", "body"].indexOf(ht(r)) < 0; ) {
    var a = It(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function uo(e) {
  for (var t = je(e), n = si(e); n && um(n) && It(n).position === "static"; ) n = si(n);
  return n && (ht(n) === "html" || ht(n) === "body" && It(n).position === "static") ? t : n || cm(e) || t;
}
function bs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Yn(e, t, n) {
  return rn(e, jo(t, n));
}
function dm(e, t, n) {
  var o = Yn(e, t, n);
  return o > n ? n : o;
}
function Ll() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function xl(e) {
  return Object.assign({}, Ll(), e);
}
function kl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var fm = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, xl(typeof e != "number" ? e : kl(e, lo));
};
function pm(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = pt(n.placement), l = bs(i), u = [Be, Je].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var f = fm(r.padding, n), v = ms(a), g = l === "y" ? De : Be, p = l === "y" ? Xe : Je, h = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], b = s[l] - n.rects.reference[l], m = uo(a), E = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, A = h / 2 - b / 2, $ = f[g], S = E - v[d] - f[p], I = E / 2 - v[d] / 2 + A, T = Yn($, I, S), D = l;
    n.modifiersData[o] = (t = {}, t[D] = T, t.centerOffset = T - I, t);
  }
}
function vm(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Nl(t.elements.popper, r) && (t.elements.arrow = r));
}
var hm = { name: "arrow", enabled: !0, phase: "main", fn: pm, effect: vm, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Rn(e) {
  return e.split("-")[1];
}
var gm = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function mm(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: $n(n * r) / r || 0, y: $n(o * r) / r || 0 };
}
function ai(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, v = s.x, g = v === void 0 ? 0 : v, p = s.y, h = p === void 0 ? 0 : p, b = typeof d == "function" ? d({ x: g, y: h }) : { x: g, y: h };
  g = b.x, h = b.y;
  var m = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), A = Be, $ = De, S = window;
  if (u) {
    var I = uo(n), T = "clientHeight", D = "clientWidth";
    if (I === je(n) && (I = Kt(n), It(I).position !== "static" && i === "absolute" && (T = "scrollHeight", D = "scrollWidth")), I = I, r === De || (r === Be || r === Je) && a === no) {
      $ = Xe;
      var C = f && I === S && S.visualViewport ? S.visualViewport.height : I[T];
      h -= C - o.height, h *= l ? 1 : -1;
    }
    if (r === Be || (r === De || r === Xe) && a === no) {
      A = Je;
      var z = f && I === S && S.visualViewport ? S.visualViewport.width : I[D];
      g -= z - o.width, g *= l ? 1 : -1;
    }
  }
  var x = Object.assign({ position: i }, u && gm), R = d === !0 ? mm({ x: g, y: h }, je(n)) : { x: g, y: h };
  if (g = R.x, h = R.y, l) {
    var j;
    return Object.assign({}, x, (j = {}, j[$] = E ? "0" : "", j[A] = m ? "0" : "", j.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + h + "px)" : "translate3d(" + g + "px, " + h + "px, 0)", j));
  }
  return Object.assign({}, x, (t = {}, t[$] = E ? h + "px" : "", t[A] = m ? g + "px" : "", t.transform = "", t));
}
function bm(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: pt(t.placement), variation: Rn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ai(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ai(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Dl = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: bm, data: {} }, _o = { passive: !0 };
function ym(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, s = o.resize, i = s === void 0 ? !0 : s, l = je(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, _o);
  }), i && l.addEventListener("resize", n.update, _o), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, _o);
    }), i && l.removeEventListener("resize", n.update, _o);
  };
}
var Bl = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ym, data: {} }, wm = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ao(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return wm[t];
  });
}
var _m = { start: "end", end: "start" };
function ii(e) {
  return e.replace(/start|end/g, function(t) {
    return _m[t];
  });
}
function ys(e) {
  var t = je(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function ws(e) {
  return Pn(Kt(e)).left + ys(e).scrollLeft;
}
function Sm(e, t) {
  var n = je(e), o = Kt(e), r = n.visualViewport, a = o.clientWidth, s = o.clientHeight, i = 0, l = 0;
  if (r) {
    a = r.width, s = r.height;
    var u = Ml();
    (u || !u && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return { width: a, height: s, x: i + ws(e), y: l };
}
function Cm(e) {
  var t, n = Kt(e), o = ys(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = rn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = rn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + ws(e), l = -o.scrollTop;
  return It(r || n).direction === "rtl" && (i += rn(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function _s(e) {
  var t = It(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Fl(e) {
  return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : qe(e) && _s(e) ? e : Fl(sr(e));
}
function Zn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Fl(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = je(o), s = r ? [a].concat(a.visualViewport || [], _s(o) ? o : []) : o, i = t.concat(s);
  return r ? i : i.concat(Zn(sr(s)));
}
function kr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Em(e, t) {
  var n = Pn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function li(e, t, n) {
  return t === Pl ? kr(Sm(e, n)) : un(t) ? Em(t, n) : kr(Cm(Kt(e)));
}
function Tm(e) {
  var t = Zn(sr(e)), n = ["absolute", "fixed"].indexOf(It(e).position) >= 0, o = n && qe(e) ? uo(e) : e;
  return un(o) ? t.filter(function(r) {
    return un(r) && Nl(r, o) && ht(r) !== "body";
  }) : [];
}
function Om(e, t, n, o) {
  var r = t === "clippingParents" ? Tm(e) : [].concat(t), a = [].concat(r, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = li(e, u, o);
    return l.top = rn(d.top, l.top), l.right = jo(d.right, l.right), l.bottom = jo(d.bottom, l.bottom), l.left = rn(d.left, l.left), l;
  }, li(e, s, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function zl(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? pt(o) : null, a = o ? Rn(o) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case De:
      l = { x: s, y: t.y - n.height };
      break;
    case Xe:
      l = { x: s, y: t.y + t.height };
      break;
    case Je:
      l = { x: t.x + t.width, y: i };
      break;
    case Be:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? bs(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case An:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case no:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function oo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? Yg : i, u = n.rootBoundary, d = u === void 0 ? Pl : u, f = n.elementContext, v = f === void 0 ? Wn : f, g = n.altBoundary, p = g === void 0 ? !1 : g, h = n.padding, b = h === void 0 ? 0 : h, m = xl(typeof b != "number" ? b : kl(b, lo)), E = v === Wn ? Zg : Wn, A = e.rects.popper, $ = e.elements[p ? E : v], S = Om(un($) ? $ : $.contextElement || Kt(e.elements.popper), l, d, s), I = Pn(e.elements.reference), T = zl({ reference: I, element: A, placement: r }), D = kr(Object.assign({}, A, T)), C = v === Wn ? D : I, z = { top: S.top - C.top + m.top, bottom: C.bottom - S.bottom + m.bottom, left: S.left - C.left + m.left, right: C.right - S.right + m.right }, x = e.modifiersData.offset;
  if (v === Wn && x) {
    var R = x[r];
    Object.keys(z).forEach(function(j) {
      var se = [Je, Xe].indexOf(j) >= 0 ? 1 : -1, Z = [De, Xe].indexOf(j) >= 0 ? "y" : "x";
      z[j] += R[Z] * se;
    });
  }
  return z;
}
function Im(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? rr : l, d = Rn(o), f = d ? i ? ri : ri.filter(function(p) {
    return Rn(p) === d;
  }) : lo, v = f.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  v.length === 0 && (v = f);
  var g = v.reduce(function(p, h) {
    return p[h] = oo(e, { placement: h, boundary: r, rootBoundary: a, padding: s })[pt(h)], p;
  }, {});
  return Object.keys(g).sort(function(p, h) {
    return g[p] - g[h];
  });
}
function Am(e) {
  if (pt(e) === hs) return [];
  var t = Ao(e);
  return [ii(e), t, ii(t)];
}
function $m(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, p = g === void 0 ? !0 : g, h = n.allowedAutoPlacements, b = t.options.placement, m = pt(b), E = m === b, A = l || (E || !p ? [Ao(b)] : Am(b)), $ = [b].concat(A).reduce(function(ee, U) {
      return ee.concat(pt(U) === hs ? Im(t, { placement: U, boundary: d, rootBoundary: f, padding: u, flipVariations: p, allowedAutoPlacements: h }) : U);
    }, []), S = t.rects.reference, I = t.rects.popper, T = /* @__PURE__ */ new Map(), D = !0, C = $[0], z = 0; z < $.length; z++) {
      var x = $[z], R = pt(x), j = Rn(x) === An, se = [De, Xe].indexOf(R) >= 0, Z = se ? "width" : "height", X = oo(t, { placement: x, boundary: d, rootBoundary: f, altBoundary: v, padding: u }), B = se ? j ? Je : Be : j ? Xe : De;
      S[Z] > I[Z] && (B = Ao(B));
      var ue = Ao(B), ve = [];
      if (a && ve.push(X[R] <= 0), i && ve.push(X[B] <= 0, X[ue] <= 0), ve.every(function(ee) {
        return ee;
      })) {
        C = x, D = !1;
        break;
      }
      T.set(x, ve);
    }
    if (D) for (var be = p ? 3 : 1, et = function(ee) {
      var U = $.find(function(ne) {
        var Oe = T.get(ne);
        if (Oe) return Oe.slice(0, ee).every(function(ae) {
          return ae;
        });
      });
      if (U) return C = U, "break";
    }, Ue = be; Ue > 0; Ue--) {
      var tt = et(Ue);
      if (tt === "break") break;
    }
    t.placement !== C && (t.modifiersData[o]._skip = !0, t.placement = C, t.reset = !0);
  }
}
var Pm = { name: "flip", enabled: !0, phase: "main", fn: $m, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ui(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function ci(e) {
  return [De, Je, Xe, Be].some(function(t) {
    return e[t] >= 0;
  });
}
function Rm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, s = oo(t, { elementContext: "reference" }), i = oo(t, { altBoundary: !0 }), l = ui(s, o), u = ui(i, r, a), d = ci(l), f = ci(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var Mm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Rm };
function Nm(e, t, n) {
  var o = pt(e), r = [Be, De].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * r, [Be, Je].indexOf(o) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Lm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, s = rr.reduce(function(d, f) {
    return d[f] = Nm(f, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var xm = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Lm };
function km(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = zl({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Vl = { name: "popperOffsets", enabled: !0, phase: "read", fn: km, data: {} };
function Dm(e) {
  return e === "x" ? "y" : "x";
}
function Bm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, v = n.tether, g = v === void 0 ? !0 : v, p = n.tetherOffset, h = p === void 0 ? 0 : p, b = oo(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: d }), m = pt(t.placement), E = Rn(t.placement), A = !E, $ = bs(m), S = Dm($), I = t.modifiersData.popperOffsets, T = t.rects.reference, D = t.rects.popper, C = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, z = typeof C == "number" ? { mainAxis: C, altAxis: C } : Object.assign({ mainAxis: 0, altAxis: 0 }, C), x = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, R = { x: 0, y: 0 };
  if (I) {
    if (a) {
      var j, se = $ === "y" ? De : Be, Z = $ === "y" ? Xe : Je, X = $ === "y" ? "height" : "width", B = I[$], ue = B + b[se], ve = B - b[Z], be = g ? -D[X] / 2 : 0, et = E === An ? T[X] : D[X], Ue = E === An ? -D[X] : -T[X], tt = t.elements.arrow, ee = g && tt ? ms(tt) : { width: 0, height: 0 }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ll(), ne = U[se], Oe = U[Z], ae = Yn(0, T[X], ee[X]), Fe = A ? T[X] / 2 - be - ae - ne - z.mainAxis : et - ae - ne - z.mainAxis, Gt = A ? -T[X] / 2 + be + ae + Oe + z.mainAxis : Ue + ae + Oe + z.mainAxis, mt = t.elements.arrow && uo(t.elements.arrow), qt = mt ? $ === "y" ? mt.clientTop || 0 : mt.clientLeft || 0 : 0, Yt = (j = x?.[$]) != null ? j : 0, pn = B + Fe - Yt - qt, vn = B + Gt - Yt, hn = Yn(g ? jo(ue, pn) : ue, B, g ? rn(ve, vn) : ve);
      I[$] = hn, R[$] = hn - B;
    }
    if (i) {
      var gn, Pt = $ === "x" ? De : Be, mn = $ === "x" ? Xe : Je, Ne = I[S], ct = S === "y" ? "height" : "width", bn = Ne + b[Pt], Zt = Ne - b[mn], L = [De, Be].indexOf(m) !== -1, oe = (gn = x?.[S]) != null ? gn : 0, Ke = L ? bn : Ne - T[ct] - D[ct] - oe + z.altAxis, Rt = L ? Ne + T[ct] + D[ct] - oe - z.altAxis : Zt, Mt = g && L ? dm(Ke, Ne, Rt) : Yn(g ? Ke : bn, Ne, g ? Rt : Zt);
      I[S] = Mt, R[S] = Mt - Ne;
    }
    t.modifiersData[o] = R;
  }
}
var Fm = { name: "preventOverflow", enabled: !0, phase: "main", fn: Bm, requiresIfExists: ["offset"] };
function zm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Vm(e) {
  return e === je(e) || !qe(e) ? ys(e) : zm(e);
}
function Hm(e) {
  var t = e.getBoundingClientRect(), n = $n(t.width) / e.offsetWidth || 1, o = $n(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Wm(e, t, n) {
  n === void 0 && (n = !1);
  var o = qe(t), r = qe(t) && Hm(t), a = Kt(t), s = Pn(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((ht(t) !== "body" || _s(a)) && (i = Vm(t)), qe(t) ? (l = Pn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = ws(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function jm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && r(l);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function Um(e) {
  var t = jm(e);
  return am.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Km(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Gm(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var di = { placement: "bottom", modifiers: [], strategy: "absolute" };
function fi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ss(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? di : r;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, di, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], f = !1, v = { state: u, setOptions: function(h) {
      var b = typeof h == "function" ? h(u.options) : h;
      p(), u.options = Object.assign({}, a, u.options, b), u.scrollParents = { reference: un(s) ? Zn(s) : s.contextElement ? Zn(s.contextElement) : [], popper: Zn(i) };
      var m = Um(Gm([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(E) {
        return E.enabled;
      }), g(), v.update();
    }, forceUpdate: function() {
      if (!f) {
        var h = u.elements, b = h.reference, m = h.popper;
        if (fi(b, m)) {
          u.rects = { reference: Wm(b, uo(m), u.options.strategy === "fixed"), popper: ms(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(D) {
            return u.modifiersData[D.name] = Object.assign({}, D.data);
          });
          for (var E = 0; E < u.orderedModifiers.length; E++) {
            if (u.reset === !0) {
              u.reset = !1, E = -1;
              continue;
            }
            var A = u.orderedModifiers[E], $ = A.fn, S = A.options, I = S === void 0 ? {} : S, T = A.name;
            typeof $ == "function" && (u = $({ state: u, options: I, name: T, instance: v }) || u);
          }
        }
      }
    }, update: Km(function() {
      return new Promise(function(h) {
        v.forceUpdate(), h(u);
      });
    }), destroy: function() {
      p(), f = !0;
    } };
    if (!fi(s, i)) return v;
    v.setOptions(l).then(function(h) {
      !f && l.onFirstUpdate && l.onFirstUpdate(h);
    });
    function g() {
      u.orderedModifiers.forEach(function(h) {
        var b = h.name, m = h.options, E = m === void 0 ? {} : m, A = h.effect;
        if (typeof A == "function") {
          var $ = A({ state: u, name: b, instance: v, options: E }), S = function() {
          };
          d.push($ || S);
        }
      });
    }
    function p() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return v;
  };
}
Ss();
var qm = [Bl, Vl, Dl, Rl];
Ss({ defaultModifiers: qm });
var Ym = [Bl, Vl, Dl, Rl, xm, Pm, Fm, hm, Mm], Zm = Ss({ defaultModifiers: Ym });
const Xm = ["fixed", "absolute"], Jm = ie({
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
    values: rr,
    default: "bottom"
  },
  popperOptions: {
    type: q(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Xm,
    default: "absolute"
  }
}), Hl = ie({
  ...Jm,
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
  ...kn(["ariaLabel"])
}), Qm = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, eb = (e, t) => {
  const n = P(!1), o = P();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var d;
      ((d = u.detail) == null ? void 0 : d.focusReason) !== "pointer" && (o.value = "first", t("blur"));
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
}, tb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...ob(e), ...t]
  };
  return rb(a, r?.modifiers), a;
}, nb = (e) => {
  if (de)
    return Ct(e);
};
function ob(e) {
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
function rb(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const sb = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = ab(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, r = y(() => {
    const { onFirstUpdate: l, placement: u, strategy: d, modifiers: f } = c(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...f || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = on(), s = P({
    styles: {
      popper: {
        position: c(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return Y(r, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Y([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = Zm(l, u, c(r)));
  }), ut(() => {
    i();
  }), {
    state: y(() => {
      var l;
      return { ...((l = c(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: y(() => c(s).styles),
    attributes: y(() => c(s).attributes),
    update: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: y(() => c(a))
  };
};
function ab(e) {
  const t = Object.keys(e.elements), n = Bo(t.map((r) => [r, e.styles[r] || {}])), o = Bo(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const ib = 0, lb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = re(fs, void 0), a = P(), s = P(), i = y(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = y(() => {
    var m;
    const E = c(a), A = (m = c(s)) != null ? m : ib;
    return {
      name: "arrow",
      enabled: !Xi(E),
      options: {
        element: E,
        padding: A
      }
    };
  }), u = y(() => ({
    onFirstUpdate: () => {
      p();
    },
    ...tb(e, [
      c(l),
      c(i)
    ])
  })), d = y(() => nb(e.referenceEl) || c(o)), { attributes: f, state: v, styles: g, update: p, forceUpdate: h, instanceRef: b } = sb(d, n, u);
  return Y(b, (m) => t.value = m), me(() => {
    Y(() => {
      var m;
      return (m = c(d)) == null ? void 0 : m.getBoundingClientRect();
    }, () => {
      p();
    });
  }), {
    attributes: f,
    arrowRef: a,
    contentRef: n,
    instanceRef: b,
    state: v,
    styles: g,
    role: r,
    forceUpdate: h,
    update: p
  };
}, ub = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = ss(), a = fe("popper"), s = y(() => c(t).popper), i = P(ge(e.zIndex) ? e.zIndex : r()), l = y(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = y(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), d = y(() => o.value === "dialog" ? "false" : void 0), f = y(() => c(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: f,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = ge(e.zIndex) ? e.zIndex : r();
    }
  };
}, cb = V({
  name: "ElPopperContent"
}), db = /* @__PURE__ */ V({
  ...cb,
  props: Hl,
  emits: Qm,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = eb(o, n), { attributes: f, arrowRef: v, contentRef: g, styles: p, instanceRef: h, role: b, update: m } = lb(o), {
      ariaModal: E,
      arrowStyle: A,
      contentAttrs: $,
      contentClass: S,
      contentStyle: I,
      updateZIndex: T
    } = ub(o, {
      styles: p,
      attributes: f,
      role: b
    }), D = re(Wo, void 0), C = P();
    Ye(_l, {
      arrowStyle: A,
      arrowRef: v,
      arrowOffset: C
    }), D && Ye(Wo, {
      ...D,
      addInputId: Et,
      removeInputId: Et
    });
    let z;
    const x = (j = !0) => {
      m(), j && T();
    }, R = () => {
      x(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return me(() => {
      Y(() => o.triggerTargetEl, (j, se) => {
        z?.(), z = void 0;
        const Z = c(j || g.value), X = c(se || g.value);
        Ge(Z) && (z = Y([b, () => o.ariaLabel, E, () => o.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ue, ve) => {
            Xo(B[ve]) ? Z.removeAttribute(ue) : Z.setAttribute(ue, B[ve]);
          });
        }, { immediate: !0 })), X !== Z && Ge(X) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          X.removeAttribute(B);
        });
      }, { immediate: !0 }), Y(() => o.visible, R, { immediate: !0 });
    }), ut(() => {
      z?.(), z = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: h,
      updatePopper: x,
      contentStyle: I
    }), (j, se) => (_(), F("div", Ht({
      ref_key: "contentRef",
      ref: g
    }, c($), {
      style: c(I),
      class: c(S),
      tabindex: "-1",
      onMouseenter: (Z) => j.$emit("mouseenter", Z),
      onMouseleave: (Z) => j.$emit("mouseleave", Z)
    }), [
      J(c($l), {
        trapped: c(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(g),
        "focus-start-el": c(r),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(s),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(d)
      }, {
        default: H(() => [
          K(j.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var fb = /* @__PURE__ */ le(db, [["__file", "content.vue"]]);
const pb = Qe(Ig), Cs = Symbol("elTooltip");
function pi() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return so(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const vb = ie({
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
}), hb = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: a } = pi(), {
    registerTimeout: s,
    cancelTimeout: i
  } = pi();
  return {
    onOpen: (d) => {
      a(() => {
        o(d);
        const f = c(n);
        ge(f) && f > 0 && s(() => {
          r(d);
        }, f);
      }, c(e));
    },
    onClose: (d) => {
      i(), a(() => {
        r(d);
      }, c(t));
    }
  };
}, Es = ie({
  ...vb,
  ...Hl,
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
  ...kn(["ariaLabel"])
}), Wl = ie({
  ...El,
  disabled: Boolean,
  trigger: {
    type: q([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: q(Array),
    default: () => [ft.enter, ft.numpadEnter, ft.space]
  }
}), gb = Jo({
  type: q(Boolean),
  default: null
}), mb = Jo({
  type: q(Function)
}), bb = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: gb,
    [n]: mb
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: d,
      onHide: f
    }) => {
      const v = $e(), { emit: g } = v, p = v.props, h = y(() => he(p[n])), b = y(() => p[e] === null), m = (T) => {
        s.value !== !0 && (s.value = !0, i && (i.value = T), he(d) && d(T));
      }, E = (T) => {
        s.value !== !1 && (s.value = !1, i && (i.value = T), he(f) && f(T));
      }, A = (T) => {
        if (p.disabled === !0 || he(u) && !u())
          return;
        const D = h.value && de;
        D && g(t, !0), (b.value || !D) && m(T);
      }, $ = (T) => {
        if (p.disabled === !0 || !de)
          return;
        const D = h.value && de;
        D && g(t, !1), (b.value || !D) && E(T);
      }, S = (T) => {
        an(T) && (p.disabled && T ? h.value && g(t, !1) : s.value !== T && (T ? m() : E()));
      }, I = () => {
        s.value ? $() : A();
      };
      return Y(() => p[e], S), l && v.appContext.config.globalProperties.$route !== void 0 && Y(() => ({
        ...v.proxy.$route
      }), () => {
        l.value && s.value && $();
      }), me(() => {
        S(p[e]);
      }), {
        hide: $,
        show: A,
        toggle: I,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: yb,
  useModelToggleEmits: wb,
  useModelToggle: _b
} = bb("visible"), Sb = ie({
  ...Sl,
  ...yb,
  ...Es,
  ...Wl,
  ...Cl,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Cb = [
  ...wb,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Eb = (e, t) => Ee(e) ? e.includes(t) : e === t, Sn = (e, t, n) => (o) => {
  Eb(c(e), t) && n(o);
}, St = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e?.(r);
  if (n === !1 || !a)
    return t?.(r);
}, Tb = V({
  name: "ElTooltipTrigger"
}), Ob = /* @__PURE__ */ V({
  ...Tb,
  props: Wl,
  setup(e, { expose: t }) {
    const n = e, o = fe("tooltip"), { controlled: r, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = re(Cs, void 0), d = P(null), f = () => {
      if (c(r) || n.disabled)
        return !0;
    }, v = rt(n, "trigger"), g = St(f, Sn(v, "hover", i)), p = St(f, Sn(v, "hover", l)), h = St(f, Sn(v, "click", ($) => {
      $.button === 0 && u($);
    })), b = St(f, Sn(v, "focus", i)), m = St(f, Sn(v, "focus", l)), E = St(f, Sn(v, "contextmenu", ($) => {
      $.preventDefault(), u($);
    })), A = St(f, ($) => {
      const { code: S } = $;
      n.triggerKeys.includes(S) && ($.preventDefault(), u($));
    });
    return t({
      triggerRef: d
    }), ($, S) => (_(), G(c(kg), {
      id: c(a),
      "virtual-ref": $.virtualRef,
      open: c(s),
      "virtual-triggering": $.virtualTriggering,
      class: M(c(o).e("trigger")),
      onBlur: c(m),
      onClick: c(h),
      onContextmenu: c(E),
      onFocus: c(b),
      onMouseenter: c(g),
      onMouseleave: c(p),
      onKeydown: c(A)
    }, {
      default: H(() => [
        K($.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Ib = /* @__PURE__ */ le(Ob, [["__file", "trigger.vue"]]);
const Ab = ie({
  to: {
    type: q([String, Object]),
    required: !0
  },
  disabled: Boolean
}), $b = /* @__PURE__ */ V({
  __name: "teleport",
  props: Ab,
  setup(e) {
    return (t, n) => t.disabled ? K(t.$slots, "default", { key: 0 }) : (_(), G(Ku, {
      key: 1,
      to: t.to
    }, [
      K(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Pb = /* @__PURE__ */ le($b, [["__file", "teleport.vue"]]);
const jl = Qe(Pb), Ul = () => {
  const e = Zr(), t = gl(), n = y(() => `${e.value}-popper-container-${t.prefix}`), o = y(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Rb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Mb = () => {
  const { id: e, selector: t } = Ul();
  return Gu(() => {
    de && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && Rb(e.value);
  }), {
    id: e,
    selector: t
  };
}, Nb = V({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Lb = /* @__PURE__ */ V({
  ...Nb,
  props: Es,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Ul(), r = fe("tooltip"), a = P();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: d,
      onClose: f,
      onOpen: v,
      onShow: g,
      onHide: p,
      onBeforeShow: h,
      onBeforeHide: b
    } = re(Cs, void 0), m = y(() => n.transition || `${r.namespace.value}-fade-in-linear`), E = y(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    ut(() => {
      s?.();
    });
    const A = y(() => c(E) ? !0 : c(u)), $ = y(() => n.disabled ? !1 : c(u)), S = y(() => n.appendTo || o.value), I = y(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), T = P(!0), D = () => {
      p(), X() && _t(document.body), T.value = !0;
    }, C = () => {
      if (c(i))
        return !0;
    }, z = St(C, () => {
      n.enterable && c(d) === "hover" && v();
    }), x = St(C, () => {
      c(d) === "hover" && f();
    }), R = () => {
      var B, ue;
      (ue = (B = a.value) == null ? void 0 : B.updatePopper) == null || ue.call(B), h?.();
    }, j = () => {
      b?.();
    }, se = () => {
      g(), s = jv(y(() => {
        var B;
        return (B = a.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && f();
      });
    }, Z = () => {
      n.virtualTriggering || f();
    }, X = (B) => {
      var ue;
      const ve = (ue = a.value) == null ? void 0 : ue.popperContentRef, be = B?.relatedTarget || document.activeElement;
      return ve?.contains(be);
    };
    return Y(() => c(u), (B) => {
      B ? T.value = !1 : s?.();
    }, {
      flush: "post"
    }), Y(() => n.content, () => {
      var B, ue;
      (ue = (B = a.value) == null ? void 0 : B.updatePopper) == null || ue.call(B);
    }), t({
      contentRef: a,
      isFocusInsideContent: X
    }), (B, ue) => (_(), G(c(jl), {
      disabled: !B.teleported,
      to: c(S)
    }, {
      default: H(() => [
        J(cn, {
          name: c(m),
          onAfterLeave: D,
          onBeforeEnter: R,
          onAfterEnter: se,
          onBeforeLeave: j
        }, {
          default: H(() => [
            c(A) ? Me((_(), G(c(fb), Ht({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, B.$attrs, {
              "aria-label": B.ariaLabel,
              "aria-hidden": T.value,
              "boundaries-padding": B.boundariesPadding,
              "fallback-placements": B.fallbackPlacements,
              "gpu-acceleration": B.gpuAcceleration,
              offset: B.offset,
              placement: B.placement,
              "popper-options": B.popperOptions,
              strategy: B.strategy,
              effect: B.effect,
              enterable: B.enterable,
              pure: B.pure,
              "popper-class": B.popperClass,
              "popper-style": [B.popperStyle, c(I)],
              "reference-el": B.referenceEl,
              "trigger-target-el": B.triggerTargetEl,
              visible: c($),
              "z-index": B.zIndex,
              onMouseenter: c(z),
              onMouseleave: c(x),
              onBlur: Z,
              onClose: c(f)
            }), {
              default: H(() => [
                K(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [it, c($)]
            ]) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var xb = /* @__PURE__ */ le(Lb, [["__file", "content.vue"]]);
const kb = V({
  name: "ElTooltip"
}), Db = /* @__PURE__ */ V({
  ...kb,
  props: Sb,
  emits: Cb,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Mb();
    const r = ln(), a = P(), s = P(), i = () => {
      var m;
      const E = c(a);
      E && ((m = E.popperInstanceRef) == null || m.update());
    }, l = P(!1), u = P(), { show: d, hide: f, hasUpdateHandler: v } = _b({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: p } = hb({
      showAfter: rt(o, "showAfter"),
      hideAfter: rt(o, "hideAfter"),
      autoClose: rt(o, "autoClose"),
      open: d,
      close: f
    }), h = y(() => an(o.visible) && !v.value);
    Ye(Cs, {
      controlled: h,
      id: r,
      open: jr(l),
      trigger: rt(o, "trigger"),
      onOpen: (m) => {
        g(m);
      },
      onClose: (m) => {
        p(m);
      },
      onToggle: (m) => {
        c(l) ? p(m) : g(m);
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
      updatePopper: i
    }), Y(() => o.disabled, (m) => {
      m && l.value && (l.value = !1);
    });
    const b = (m) => {
      var E;
      return (E = s.value) == null ? void 0 : E.isFocusInsideContent(m);
    };
    return qu(() => l.value && f()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: b,
      updatePopper: i,
      onOpen: g,
      onClose: p,
      hide: f
    }), (m, E) => (_(), G(c(pb), {
      ref_key: "popperRef",
      ref: a,
      role: m.role
    }, {
      default: H(() => [
        J(Ib, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: H(() => [
            m.$slots.default ? K(m.$slots, "default", { key: 0 }) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        J(xb, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": m.ariaLabel,
          "boundaries-padding": m.boundariesPadding,
          content: m.content,
          disabled: m.disabled,
          effect: m.effect,
          enterable: m.enterable,
          "fallback-placements": m.fallbackPlacements,
          "hide-after": m.hideAfter,
          "gpu-acceleration": m.gpuAcceleration,
          offset: m.offset,
          persistent: m.persistent,
          "popper-class": m.popperClass,
          "popper-style": m.popperStyle,
          placement: m.placement,
          "popper-options": m.popperOptions,
          pure: m.pure,
          "raw-content": m.rawContent,
          "reference-el": m.referenceEl,
          "trigger-target-el": m.triggerTargetEl,
          "show-after": m.showAfter,
          strategy: m.strategy,
          teleported: m.teleported,
          transition: m.transition,
          "virtual-triggering": m.virtualTriggering,
          "z-index": m.zIndex,
          "append-to": m.appendTo
        }, {
          default: H(() => [
            K(m.$slots, "content", {}, () => [
              m.rawContent ? (_(), F("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, ["innerHTML"])) : (_(), F("span", { key: 1 }, Q(m.content), 1))
            ]),
            m.showArrow ? (_(), G(c(Pg), {
              key: 0,
              "arrow-offset": m.arrowOffset
            }, null, 8, ["arrow-offset"])) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Bb = /* @__PURE__ */ le(Db, [["__file", "tooltip.vue"]]);
const Fb = Qe(Bb), zb = ie({
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
}), Vb = V({
  name: "ElBadge"
}), Hb = /* @__PURE__ */ V({
  ...Vb,
  props: zb,
  setup(e, { expose: t }) {
    const n = e, o = fe("badge"), r = y(() => n.isDot ? "" : ge(n.value) && ge(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = y(() => {
      var s, i, l, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ut(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Ut((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: r
    }), (s, i) => (_(), F("div", {
      class: M(c(o).b())
    }, [
      K(s.$slots, "default"),
      J(cn, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: H(() => [
          Me(O("sup", {
            class: M([
              c(o).e("content"),
              c(o).em("content", s.type),
              c(o).is("fixed", !!s.$slots.default),
              c(o).is("dot", s.isDot),
              c(o).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: _e(c(a))
          }, [
            K(s.$slots, "content", { value: c(r) }, () => [
              at(Q(c(r)), 1)
            ])
          ], 6), [
            [it, !s.hidden && (c(r) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Wb = /* @__PURE__ */ le(Hb, [["__file", "badge.vue"]]);
const jb = Qe(Wb), Kl = Symbol("buttonGroupContextKey"), Gl = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: a = "API" }, s) => {
  Y(() => c(s), (i) => {
    i && Se(n, `[${a}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, Ub = (e, t) => {
  Gl({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, y(() => e.type === "text"));
  const n = re(Kl, void 0), o = er("button"), { form: r } = tr(), a = io(y(() => n?.size)), s = nr(), i = P(), l = qr(), u = y(() => e.type || n?.type || ""), d = y(() => {
    var p, h, b;
    return (b = (h = e.autoInsertSpace) != null ? h : (p = o.value) == null ? void 0 : p.autoInsertSpace) != null ? b : !1;
  }), f = y(() => e.tag === "button" ? {
    ariaDisabled: s.value || e.loading,
    disabled: s.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), v = y(() => {
    var p;
    const h = (p = l.default) == null ? void 0 : p.call(l);
    if (d.value && h?.length === 1) {
      const b = h[0];
      if (b?.type === Ti) {
        const m = b.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(m.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: a,
    _type: u,
    _ref: i,
    _props: f,
    shouldAddSpace: v,
    handleClick: (p) => {
      if (s.value || e.loading) {
        p.stopPropagation();
        return;
      }
      e.nativeType === "reset" && r?.resetFields(), t("click", p);
    }
  };
}, Kb = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Gb = ["button", "submit", "reset"], Dr = ie({
  size: Qo,
  disabled: Boolean,
  type: {
    type: String,
    values: Kb,
    default: ""
  },
  icon: {
    type: Ot
  },
  nativeType: {
    type: String,
    values: Gb,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Ot,
    default: () => fl
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
    type: q([String, Object]),
    default: "button"
  }
}), qb = {
  click: (e) => e instanceof MouseEvent
};
function Te(e, t) {
  Yb(e) && (e = "100%");
  var n = Zb(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function So(e) {
  return Math.min(1, Math.max(0, e));
}
function Yb(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Zb(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ql(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Co(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function nn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Xb(e, t, n) {
  return {
    r: Te(e, 255) * 255,
    g: Te(t, 255) * 255,
    b: Te(n, 255) * 255
  };
}
function vi(e, t, n) {
  e = Te(e, 255), t = Te(t, 255), n = Te(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, s = 0, i = (o + r) / 2;
  if (o === r)
    s = 0, a = 0;
  else {
    var l = o - r;
    switch (s = i > 0.5 ? l / (2 - o - r) : l / (o + r), o) {
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
  return { h: a, s, l: i };
}
function wr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Jb(e, t, n) {
  var o, r, a;
  if (e = Te(e, 360), t = Te(t, 100), n = Te(n, 100), t === 0)
    r = n, a = n, o = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - s;
    o = wr(i, s, e + 1 / 3), r = wr(i, s, e), a = wr(i, s, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: a * 255 };
}
function hi(e, t, n) {
  e = Te(e, 255), t = Te(t, 255), n = Te(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, s = o, i = o - r, l = o === 0 ? 0 : i / o;
  if (o === r)
    a = 0;
  else {
    switch (o) {
      case e:
        a = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / i + 2;
        break;
      case n:
        a = (e - t) / i + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: l, v: s };
}
function Qb(e, t, n) {
  e = Te(e, 360) * 6, t = Te(t, 100), n = Te(n, 100);
  var o = Math.floor(e), r = e - o, a = n * (1 - t), s = n * (1 - r * t), i = n * (1 - (1 - r) * t), l = o % 6, u = [n, s, a, a, i, n][l], d = [i, n, n, s, a, a][l], f = [a, a, i, n, n, s][l];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function gi(e, t, n, o) {
  var r = [
    nn(Math.round(e).toString(16)),
    nn(Math.round(t).toString(16)),
    nn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function e0(e, t, n, o, r) {
  var a = [
    nn(Math.round(e).toString(16)),
    nn(Math.round(t).toString(16)),
    nn(Math.round(n).toString(16)),
    nn(t0(o))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function t0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function mi(e) {
  return Ve(e) / 255;
}
function Ve(e) {
  return parseInt(e, 16);
}
function n0(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Br = {
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
function o0(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, a = null, s = !1, i = !1;
  return typeof e == "string" && (e = a0(e)), typeof e == "object" && (yt(e.r) && yt(e.g) && yt(e.b) ? (t = Xb(e.r, e.g, e.b), s = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : yt(e.h) && yt(e.s) && yt(e.v) ? (o = Co(e.s), r = Co(e.v), t = Qb(e.h, o, r), s = !0, i = "hsv") : yt(e.h) && yt(e.s) && yt(e.l) && (o = Co(e.s), a = Co(e.l), t = Jb(e.h, o, a), s = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = ql(n), {
    ok: s,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var r0 = "[-\\+]?\\d+%?", s0 = "[-\\+]?\\d*\\.\\d+%?", Vt = "(?:".concat(s0, ")|(?:").concat(r0, ")"), _r = "[\\s|\\(]+(".concat(Vt, ")[,|\\s]+(").concat(Vt, ")[,|\\s]+(").concat(Vt, ")\\s*\\)?"), Sr = "[\\s|\\(]+(".concat(Vt, ")[,|\\s]+(").concat(Vt, ")[,|\\s]+(").concat(Vt, ")[,|\\s]+(").concat(Vt, ")\\s*\\)?"), nt = {
  CSS_UNIT: new RegExp(Vt),
  rgb: new RegExp("rgb" + _r),
  rgba: new RegExp("rgba" + Sr),
  hsl: new RegExp("hsl" + _r),
  hsla: new RegExp("hsla" + Sr),
  hsv: new RegExp("hsv" + _r),
  hsva: new RegExp("hsva" + Sr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function a0(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Br[e])
    e = Br[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = nt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = nt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = nt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = nt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = nt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = nt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = nt.hex8.exec(e), n ? {
    r: Ve(n[1]),
    g: Ve(n[2]),
    b: Ve(n[3]),
    a: mi(n[4]),
    format: t ? "name" : "hex8"
  } : (n = nt.hex6.exec(e), n ? {
    r: Ve(n[1]),
    g: Ve(n[2]),
    b: Ve(n[3]),
    format: t ? "name" : "hex"
  } : (n = nt.hex4.exec(e), n ? {
    r: Ve(n[1] + n[1]),
    g: Ve(n[2] + n[2]),
    b: Ve(n[3] + n[3]),
    a: mi(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = nt.hex3.exec(e), n ? {
    r: Ve(n[1] + n[1]),
    g: Ve(n[2] + n[2]),
    b: Ve(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function yt(e) {
  return !!nt.CSS_UNIT.exec(String(e));
}
var i0 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = n0(t)), this.originalInput = t;
      var r = o0(t);
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
      var t = this.toRgb(), n, o, r, a = t.r / 255, s = t.g / 255, i = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = ql(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = hi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = hi(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = vi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = vi(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), gi(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), e0(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Te(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Te(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + gi(this.r, this.g, this.b, !1), n = 0, o = Object.entries(Br); n < o.length; n++) {
        var r = o[n], a = r[0], s = r[1];
        if (t === s)
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
      return n.l += t / 100, n.l = So(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = So(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = So(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = So(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), a = n / 100, s = {
        r: (r.r - o.r) * a + o.r,
        g: (r.g - o.g) * a + o.g,
        b: (r.b - o.b) * a + o.b,
        a: (r.a - o.a) * a + o.a
      };
      return new e(s);
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
      for (var n = this.toHsv(), o = n.h, r = n.s, a = n.v, s = [], i = 1 / t; t--; )
        s.push(new e({ h: o, s: r, v: a })), a = (a + i) % 1;
      return s;
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
      for (var n = this.toHsl(), o = n.h, r = [this], a = 360 / t, s = 1; s < t; s++)
        r.push(new e({ h: (o + s * a) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function xt(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function l0(e) {
  const t = nr(), n = fe("button");
  return y(() => {
    let o = {}, r = e.color;
    if (r) {
      const a = r.match(/var\((.*?)\)/);
      a && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(a[1]));
      const s = new i0(r), i = e.dark ? s.tint(20).toString() : xt(s, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? xt(s, 90) : s.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? xt(s, 50) : s.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? xt(s, 90) : s.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? xt(s, 50) : s.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? xt(s, 80) : s.tint(80).toString());
      else {
        const l = e.dark ? xt(s, 30) : s.tint(30).toString(), u = s.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": u,
          "border-color": r,
          "hover-bg-color": l,
          "hover-text-color": u,
          "hover-border-color": l,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const d = e.dark ? xt(s, 50) : s.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = d, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = d;
        }
      }
    }
    return o;
  });
}
const u0 = V({
  name: "ElButton"
}), c0 = /* @__PURE__ */ V({
  ...u0,
  props: Dr,
  emits: qb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = l0(o), a = fe("button"), { _ref: s, _size: i, _type: l, _disabled: u, _props: d, shouldAddSpace: f, handleClick: v } = Ub(o, n), g = y(() => [
      a.b(),
      a.m(l.value),
      a.m(i.value),
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
      ref: s,
      size: i,
      type: l,
      disabled: u,
      shouldAddSpace: f
    }), (p, h) => (_(), G(xe(p.tag), Ht({
      ref_key: "_ref",
      ref: s
    }, c(d), {
      class: c(g),
      style: c(r),
      onClick: c(v)
    }), {
      default: H(() => [
        p.loading ? (_(), F(ke, { key: 0 }, [
          p.$slots.loading ? K(p.$slots, "loading", { key: 0 }) : (_(), G(c(Re), {
            key: 1,
            class: M(c(a).is("loading"))
          }, {
            default: H(() => [
              (_(), G(xe(p.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : p.icon || p.$slots.icon ? (_(), G(c(Re), { key: 1 }, {
          default: H(() => [
            p.icon ? (_(), G(xe(p.icon), { key: 0 })) : K(p.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : W("v-if", !0),
        p.$slots.default ? (_(), F("span", {
          key: 2,
          class: M({ [c(a).em("text", "expand")]: c(f) })
        }, [
          K(p.$slots, "default")
        ], 2)) : W("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var d0 = /* @__PURE__ */ le(c0, [["__file", "button.vue"]]);
const f0 = {
  size: Dr.size,
  type: Dr.type
}, p0 = V({
  name: "ElButtonGroup"
}), v0 = /* @__PURE__ */ V({
  ...p0,
  props: f0,
  setup(e) {
    const t = e;
    Ye(Kl, Wt({
      size: rt(t, "size"),
      type: rt(t, "type")
    }));
    const n = fe("button");
    return (o, r) => (_(), F("div", {
      class: M(c(n).b("group"))
    }, [
      K(o.$slots, "default")
    ], 2));
  }
});
var Yl = /* @__PURE__ */ le(v0, [["__file", "button-group.vue"]]);
const Zl = Qe(d0, {
  ButtonGroup: Yl
});
is(Yl);
var $o = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))($o || {});
const h0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Fr = ie({
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
    values: al
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), g0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, m0 = V({
  name: "ElTag"
}), b0 = /* @__PURE__ */ V({
  ...m0,
  props: Fr,
  emits: g0,
  setup(e, { emit: t }) {
    const n = e, o = io(), r = fe("tag"), a = y(() => {
      const { type: u, hit: d, effect: f, closable: v, round: g } = n;
      return [
        r.b(),
        r.is("closable", v),
        r.m(u || "primary"),
        r.m(o.value),
        r.m(f),
        r.is("hit", d),
        r.is("round", g)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var d, f, v;
      (v = (f = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : f.component) != null && v.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (_(), F("span", {
      key: 0,
      class: M(c(a)),
      style: _e({ backgroundColor: u.color }),
      onClick: i
    }, [
      O("span", {
        class: M(c(r).e("content"))
      }, [
        K(u.$slots, "default")
      ], 2),
      u.closable ? (_(), G(c(Re), {
        key: 0,
        class: M(c(r).e("close")),
        onClick: Ce(s, ["stop"])
      }, {
        default: H(() => [
          J(c(Vo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : W("v-if", !0)
    ], 6)) : (_(), G(cn, {
      key: 1,
      name: `${c(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: H(() => [
        O("span", {
          class: M(c(a)),
          style: _e({ backgroundColor: u.color }),
          onClick: i
        }, [
          O("span", {
            class: M(c(r).e("content"))
          }, [
            K(u.$slots, "default")
          ], 2),
          u.closable ? (_(), G(c(Re), {
            key: 0,
            class: M(c(r).e("close")),
            onClick: Ce(s, ["stop"])
          }, {
            default: H(() => [
              J(c(Vo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : W("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var y0 = /* @__PURE__ */ le(b0, [["__file", "tag.vue"]]);
const w0 = Qe(y0), kt = /* @__PURE__ */ new Map();
if (de) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of kt.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function bi(e, t) {
  let n = [];
  return Ee(t.arg) ? n = t.arg : Ge(t.arg) && n.push(t.arg), function(o, r) {
    const a = t.instance.popperRef, s = o.target, i = r?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), f = e === s, v = n.length && n.some((p) => p?.contains(s)) || n.length && n.includes(i), g = a && (a.contains(s) || a.contains(i));
    l || u || d || f || v || g || t.value(o, r);
  };
}
const _0 = {
  beforeMount(e, t) {
    kt.has(e) || kt.set(e, []), kt.get(e).push({
      documentHandler: bi(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    kt.has(e) || kt.set(e, []);
    const n = kt.get(e), o = n.findIndex((a) => a.bindingFn === t.oldValue), r = {
      documentHandler: bi(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    kt.delete(e);
  }
}, dt = {}, Xl = (e) => {
  if (!e)
    return { onClick: Et, onMousedown: Et, onMouseup: Et };
  let t = !1, n = !1;
  return { onClick: (s) => {
    t && n && e(s), t = n = !1;
  }, onMousedown: (s) => {
    t = s.target === s.currentTarget;
  }, onMouseup: (s) => {
    n = s.target === s.currentTarget;
  } };
}, S0 = ie({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: q([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: q([String, Number])
  }
}), C0 = {
  click: (e) => e instanceof MouseEvent
}, E0 = "overlay";
var T0 = V({
  name: "ElOverlay",
  props: S0,
  emits: C0,
  setup(e, { slots: t, emit: n }) {
    const o = fe(E0), r = (l) => {
      n("click", l);
    }, { onClick: a, onMousedown: s, onMouseup: i } = Xl(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? J("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: a,
      onMousedown: s,
      onMouseup: i
    }, [K(t, "default")], $o.STYLE | $o.CLASS | $o.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Si("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [K(t, "default")]);
  }
});
const O0 = T0, Jl = Symbol("dialogInjectionKey"), Ql = ie({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: Ot
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
}), I0 = {
  close: () => !0
}, A0 = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const a = (u) => {
    const d = u.clientX, f = u.clientY, { offsetX: v, offsetY: g } = r, p = e.value.getBoundingClientRect(), h = p.left, b = p.top, m = p.width, E = p.height, A = document.documentElement.clientWidth, $ = document.documentElement.clientHeight, S = -h + v, I = -b + g, T = A - h - m + v, D = $ - b - E + g, C = (x) => {
      let R = v + x.clientX - d, j = g + x.clientY - f;
      o?.value || (R = Math.min(Math.max(R, S), T), j = Math.min(Math.max(j, I), D)), r = {
        offsetX: R,
        offsetY: j
      }, e.value && (e.value.style.transform = `translate(${Ut(R)}, ${Ut(j)})`);
    }, z = () => {
      document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", z);
    };
    document.addEventListener("mousemove", C), document.addEventListener("mouseup", z);
  }, s = () => {
    t.value && e.value && t.value.addEventListener("mousedown", a);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", a);
  }, l = () => {
    r = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return me(() => {
    Ur(() => {
      n.value ? s() : i();
    });
  }), ut(() => {
    i();
  }), {
    resetPosition: l
  };
}, $0 = (...e) => (t) => {
  e.forEach((n) => {
    he(n) ? n(t) : n.value = t;
  });
}, P0 = V({ name: "ElDialogContent" }), R0 = /* @__PURE__ */ V({
  ...P0,
  props: Ql,
  emits: I0,
  setup(e, { expose: t }) {
    const n = e, { t: o } = as(), { Close: r } = pl, { dialogRef: a, headerRef: s, bodyId: i, ns: l, style: u } = re(Jl), { focusTrapRef: d } = re(Il), f = y(() => [
      l.b(),
      l.is("fullscreen", n.fullscreen),
      l.is("draggable", n.draggable),
      l.is("align-center", n.alignCenter),
      { [l.m("center")]: n.center }
    ]), v = $0(d, a), g = y(() => n.draggable), p = y(() => n.overflow), { resetPosition: h } = A0(a, s, g, p);
    return t({
      resetPosition: h
    }), (b, m) => (_(), F("div", {
      ref: c(v),
      class: M(c(f)),
      style: _e(c(u)),
      tabindex: "-1"
    }, [
      O("header", {
        ref_key: "headerRef",
        ref: s,
        class: M([c(l).e("header"), b.headerClass, { "show-close": b.showClose }])
      }, [
        K(b.$slots, "header", {}, () => [
          O("span", {
            role: "heading",
            "aria-level": b.ariaLevel,
            class: M(c(l).e("title"))
          }, Q(b.title), 11, ["aria-level"])
        ]),
        b.showClose ? (_(), F("button", {
          key: 0,
          "aria-label": c(o)("el.dialog.close"),
          class: M(c(l).e("headerbtn")),
          type: "button",
          onClick: (E) => b.$emit("close")
        }, [
          J(c(Re), {
            class: M(c(l).e("close"))
          }, {
            default: H(() => [
              (_(), G(xe(b.closeIcon || c(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : W("v-if", !0)
      ], 2),
      O("div", {
        id: c(i),
        class: M([c(l).e("body"), b.bodyClass])
      }, [
        K(b.$slots, "default")
      ], 10, ["id"]),
      b.$slots.footer ? (_(), F("footer", {
        key: 0,
        class: M([c(l).e("footer"), b.footerClass])
      }, [
        K(b.$slots, "footer")
      ], 2)) : W("v-if", !0)
    ], 6));
  }
});
var M0 = /* @__PURE__ */ le(R0, [["__file", "dialog-content.vue"]]);
const N0 = ie({
  ...Ql,
  appendToBody: Boolean,
  appendTo: {
    type: q([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: q(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), L0 = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [We]: (e) => an(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, x0 = (e, t = {}) => {
  Kr(e) || tl("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || fe("popup"), o = y(() => n.bm("parent", "hidden"));
  if (!de || Ka(document.body, o.value))
    return;
  let r = 0, a = !1, s = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || a && document && (document.body.style.width = s, yh(document.body, o.value));
    }, 200);
  };
  Y(e, (l) => {
    if (!l) {
      i();
      return;
    }
    a = !Ka(document.body, o.value), a && (s = document.body.style.width, bh(document.body, o.value)), r = _h(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, d = wh(document.body, "overflowY");
    r > 0 && (u || d === "scroll") && a && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Ei(() => i());
}, k0 = (e, t) => {
  var n;
  const r = $e().emit, { nextZIndex: a } = ss();
  let s = "";
  const i = ln(), l = ln(), u = P(!1), d = P(!1), f = P(!1), v = P((n = e.zIndex) != null ? n : a());
  let g, p;
  const h = er("namespace", Kn), b = y(() => {
    const Z = {}, X = `--${h.value}-dialog`;
    return e.fullscreen || (e.top && (Z[`${X}-margin-top`] = e.top), e.width && (Z[`${X}-width`] = Ut(e.width))), Z;
  }), m = y(() => e.alignCenter ? { display: "flex" } : {});
  function E() {
    r("opened");
  }
  function A() {
    r("closed"), r(We, !1), e.destroyOnClose && (f.value = !1);
  }
  function $() {
    r("close");
  }
  function S() {
    p?.(), g?.(), e.openDelay && e.openDelay > 0 ? { stop: g } = Fo(() => C(), e.openDelay) : C();
  }
  function I() {
    g?.(), p?.(), e.closeDelay && e.closeDelay > 0 ? { stop: p } = Fo(() => z(), e.closeDelay) : z();
  }
  function T() {
    function Z(X) {
      X || (d.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose(Z) : I();
  }
  function D() {
    e.closeOnClickModal && T();
  }
  function C() {
    de && (u.value = !0);
  }
  function z() {
    u.value = !1;
  }
  function x() {
    r("openAutoFocus");
  }
  function R() {
    r("closeAutoFocus");
  }
  function j(Z) {
    var X;
    ((X = Z.detail) == null ? void 0 : X.focusReason) === "pointer" && Z.preventDefault();
  }
  e.lockScroll && x0(u);
  function se() {
    e.closeOnPressEscape && T();
  }
  return Y(() => e.modelValue, (Z) => {
    Z ? (d.value = !1, S(), f.value = !0, v.value = Xi(e.zIndex) ? a() : v.value++, pe(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && I();
  }), Y(() => e.fullscreen, (Z) => {
    t.value && (Z ? (s = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = s);
  }), me(() => {
    e.modelValue && (u.value = !0, f.value = !0, S());
  }), {
    afterEnter: E,
    afterLeave: A,
    beforeLeave: $,
    handleClose: T,
    onModalClick: D,
    close: I,
    doClose: z,
    onOpenAutoFocus: x,
    onCloseAutoFocus: R,
    onCloseRequested: se,
    onFocusoutPrevented: j,
    titleId: i,
    bodyId: l,
    closed: d,
    style: b,
    overlayDialogStyle: m,
    rendered: f,
    visible: u,
    zIndex: v
  };
}, D0 = V({
  name: "ElDialog",
  inheritAttrs: !1
}), B0 = /* @__PURE__ */ V({
  ...D0,
  props: N0,
  emits: L0,
  setup(e, { expose: t }) {
    const n = e, o = qr();
    Gl({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, y(() => !!o.title));
    const r = fe("dialog"), a = P(), s = P(), i = P(), {
      visible: l,
      titleId: u,
      bodyId: d,
      style: f,
      overlayDialogStyle: v,
      rendered: g,
      zIndex: p,
      afterEnter: h,
      afterLeave: b,
      beforeLeave: m,
      handleClose: E,
      onModalClick: A,
      onOpenAutoFocus: $,
      onCloseAutoFocus: S,
      onCloseRequested: I,
      onFocusoutPrevented: T
    } = k0(n, a);
    Ye(Jl, {
      dialogRef: a,
      headerRef: s,
      bodyId: d,
      ns: r,
      rendered: g,
      style: f
    });
    const D = Xl(A), C = y(() => n.draggable && !n.fullscreen);
    return t({
      visible: l,
      dialogContentRef: i,
      resetPosition: () => {
        var x;
        (x = i.value) == null || x.resetPosition();
      }
    }), (x, R) => (_(), G(c(jl), {
      to: x.appendTo,
      disabled: x.appendTo !== "body" ? !1 : !x.appendToBody
    }, {
      default: H(() => [
        J(cn, {
          name: "dialog-fade",
          onAfterEnter: c(h),
          onAfterLeave: c(b),
          onBeforeLeave: c(m),
          persisted: ""
        }, {
          default: H(() => [
            Me(J(c(O0), {
              "custom-mask-event": "",
              mask: x.modal,
              "overlay-class": x.modalClass,
              "z-index": c(p)
            }, {
              default: H(() => [
                O("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": x.title || void 0,
                  "aria-labelledby": x.title ? void 0 : c(u),
                  "aria-describedby": c(d),
                  class: M(`${c(r).namespace.value}-overlay-dialog`),
                  style: _e(c(v)),
                  onClick: c(D).onClick,
                  onMousedown: c(D).onMousedown,
                  onMouseup: c(D).onMouseup
                }, [
                  J(c($l), {
                    loop: "",
                    trapped: c(l),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: c($),
                    onFocusAfterReleased: c(S),
                    onFocusoutPrevented: c(T),
                    onReleaseRequested: c(I)
                  }, {
                    default: H(() => [
                      c(g) ? (_(), G(M0, Ht({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: i
                      }, x.$attrs, {
                        center: x.center,
                        "align-center": x.alignCenter,
                        "close-icon": x.closeIcon,
                        draggable: c(C),
                        overflow: x.overflow,
                        fullscreen: x.fullscreen,
                        "header-class": x.headerClass,
                        "body-class": x.bodyClass,
                        "footer-class": x.footerClass,
                        "show-close": x.showClose,
                        title: x.title,
                        "aria-level": x.headerAriaLevel,
                        onClose: c(E)
                      }), Yu({
                        header: H(() => [
                          x.$slots.title ? K(x.$slots, "title", { key: 1 }) : K(x.$slots, "header", {
                            key: 0,
                            close: c(E),
                            titleId: c(u),
                            titleClass: c(r).e("title")
                          })
                        ]),
                        default: H(() => [
                          K(x.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        x.$slots.footer ? {
                          name: "footer",
                          fn: H(() => [
                            K(x.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : W("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [it, c(l)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var F0 = /* @__PURE__ */ le(B0, [["__file", "dialog.vue"]]);
const z0 = Qe(F0);
function V0() {
  const e = on(), t = P(0), n = 11, o = y(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return ot(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const eu = Symbol("ElSelectGroup"), ar = Symbol("ElSelect");
function H0(e, t) {
  const n = re(ar), o = re(eu, { disabled: !1 }), r = y(() => d(Ft(n.props.modelValue), e.value)), a = y(() => {
    var g;
    if (n.props.multiple) {
      const p = Ft((g = n.props.modelValue) != null ? g : []);
      return !r.value && p.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = y(() => e.label || (Ae(e.value) ? "" : e.value)), i = y(() => e.value || e.label || ""), l = y(() => e.disabled || t.groupDisabled || a.value), u = $e(), d = (g = [], p) => {
    if (Ae(e.value)) {
      const h = n.props.valueKey;
      return g && g.some((b) => Zu(zt(b, h)) === zt(p, h));
    } else
      return g && g.includes(p);
  }, f = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, v = (g) => {
    const p = new RegExp(h0(g), "i");
    t.visible = p.test(s.value) || e.created;
  };
  return Y(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Y(() => e.value, (g, p) => {
    const { remote: h, valueKey: b } = n.props;
    if ((h ? g !== p : !qn(g, p)) && (n.onOptionDestroy(p, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !h) {
      if (b && Ae(g) && Ae(p) && g[b] === p[b])
        return;
      n.setSelected();
    }
  }), Y(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: r,
    isDisabled: l,
    hoverItem: f,
    updateOption: v
  };
}
const W0 = V({
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
    const t = fe("select"), n = ln(), o = y(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(v))
    ]), r = Wt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: d
    } = H0(e, r), { visible: f, hover: v } = Yr(r), g = $e().proxy;
    l.onOptionCreate(g), ut(() => {
      const h = g.value, { selected: b } = l.states, m = b.some((E) => E.value === g.value);
      pe(() => {
        l.states.cachedOptions.get(h) === g && !m && l.states.cachedOptions.delete(h);
      }), l.onOptionDestroy(h, g);
    });
    function p() {
      i.value || l.handleOptionSelect(g);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: d,
      visible: f,
      hover: v,
      selectOptionClick: p,
      states: r
    };
  }
});
function j0(e, t, n, o, r, a) {
  return Me((_(), F("li", {
    id: e.id,
    class: M(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ce(e.selectOptionClick, ["stop"])
  }, [
    K(e.$slots, "default", {}, () => [
      O("span", null, Q(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [it, e.visible]
  ]);
}
var Ts = /* @__PURE__ */ le(W0, [["render", j0], ["__file", "option.vue"]]);
const U0 = V({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = re(ar), t = fe("select"), n = y(() => e.props.popperClass), o = y(() => e.props.multiple), r = y(() => e.props.fitInputWidth), a = P("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return me(() => {
      s(), ot(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function K0(e, t, n, o, r, a) {
  return _(), F("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: _e({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (_(), F("div", {
      key: 0,
      class: M(e.ns.be("dropdown", "header"))
    }, [
      K(e.$slots, "header")
    ], 2)) : W("v-if", !0),
    K(e.$slots, "default"),
    e.$slots.footer ? (_(), F("div", {
      key: 1,
      class: M(e.ns.be("dropdown", "footer"))
    }, [
      K(e.$slots, "footer")
    ], 2)) : W("v-if", !0)
  ], 6);
}
var G0 = /* @__PURE__ */ le(U0, [["render", K0], ["__file", "select-dropdown.vue"]]);
const q0 = (e, t) => {
  const { t: n } = as(), o = ln(), r = fe("select"), a = fe("input"), s = Wt({
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
  }), i = P(null), l = P(null), u = P(null), d = P(null), f = P(null), v = P(null), g = P(null), p = P(null), h = P(null), b = P(null), m = P(null), {
    isComposing: E,
    handleCompositionStart: A,
    handleCompositionUpdate: $,
    handleCompositionEnd: S
  } = yl({
    afterComposition: (w) => Mt(w)
  }), { wrapperRef: I, isFocused: T, handleBlur: D } = bl(f, {
    beforeFocus() {
      return X.value;
    },
    afterFocus() {
      e.automaticDropdown && !C.value && (C.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(w) {
      var k, te;
      return ((k = u.value) == null ? void 0 : k.isFocusInsideContent(w)) || ((te = d.value) == null ? void 0 : te.isFocusInsideContent(w));
    },
    afterBlur() {
      C.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), C = P(!1), z = P(), { form: x, formItem: R } = tr(), { inputId: j } = cs(e, {
    formItemContext: R
  }), { valueOnClear: se, isEmptyValue: Z } = vh(e), X = y(() => e.disabled || x?.disabled), B = y(() => Ee(e.modelValue) ? e.modelValue.length > 0 : !Z(e.modelValue)), ue = y(() => {
    var w;
    return (w = x?.statusIcon) != null ? w : !1;
  }), ve = y(() => e.clearable && !X.value && s.inputHovering && B.value), be = y(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), et = y(() => r.is("reverse", be.value && C.value)), Ue = y(() => R?.validateState || ""), tt = y(() => vl[Ue.value]), ee = y(() => e.remote ? 300 : 0), U = y(() => e.remote && !s.inputValue && s.options.size === 0), ne = y(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Oe.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Oe = y(() => ae.value.filter((w) => w.visible).length), ae = y(() => {
    const w = Array.from(s.options.values()), k = [];
    return s.optionValues.forEach((te) => {
      const ye = w.findIndex((ze) => ze.value === te);
      ye > -1 && k.push(w[ye]);
    }), k.length >= w.length ? k : w;
  }), Fe = y(() => Array.from(s.cachedOptions.values())), Gt = y(() => {
    const w = ae.value.filter((k) => !k.created).some((k) => k.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !w;
  }), mt = () => {
    e.filterable && he(e.filterMethod) || e.filterable && e.remote && he(e.remoteMethod) || ae.value.forEach((w) => {
      var k;
      (k = w.updateOption) == null || k.call(w, s.inputValue);
    });
  }, qt = io(), Yt = y(() => ["small"].includes(qt.value) ? "small" : "default"), pn = y({
    get() {
      return C.value && !U.value;
    },
    set(w) {
      C.value = w;
    }
  }), vn = y(() => {
    if (e.multiple && !En(e.modelValue))
      return Ft(e.modelValue).length === 0 && !s.inputValue;
    const w = Ee(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || En(w) ? !s.inputValue : !0;
  }), hn = y(() => {
    var w;
    const k = (w = e.placeholder) != null ? w : n("el.select.placeholder");
    return e.multiple || !B.value ? k : s.selectedLabel;
  }), gn = y(() => Rr ? null : "mouseenter");
  Y(() => e.modelValue, (w, k) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", Pt("")), Ne(), !qn(w, k) && e.validateEvent && R?.validate("change").catch((te) => Se(te));
  }, {
    flush: "post",
    deep: !0
  }), Y(() => C.value, (w) => {
    w ? Pt(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", w);
  }), Y(() => s.options.entries(), () => {
    de && (Ne(), e.defaultFirstOption && (e.filterable || e.remote) && Oe.value && mn());
  }, {
    flush: "post"
  }), Y([() => s.hoveringIndex, ae], ([w]) => {
    ge(w) && w > -1 ? z.value = ae.value[w] || {} : z.value = {}, ae.value.forEach((k) => {
      k.hover = z.value === k;
    });
  }), Ur(() => {
    s.isBeforeHide || mt();
  });
  const Pt = (w) => {
    s.previousQuery === w || E.value || (s.previousQuery = w, e.filterable && he(e.filterMethod) ? e.filterMethod(w) : e.filterable && e.remote && he(e.remoteMethod) && e.remoteMethod(w), e.defaultFirstOption && (e.filterable || e.remote) && Oe.value ? pe(mn) : pe(bn));
  }, mn = () => {
    const w = ae.value.filter((ze) => ze.visible && !ze.disabled && !ze.states.groupDisabled), k = w.find((ze) => ze.created), te = w[0], ye = ae.value.map((ze) => ze.value);
    s.hoveringIndex = $s(ye, k || te);
  }, Ne = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const k = Ee(e.modelValue) ? e.modelValue[0] : e.modelValue, te = ct(k);
      s.selectedLabel = te.currentLabel, s.selected = [te];
      return;
    }
    const w = [];
    En(e.modelValue) || Ft(e.modelValue).forEach((k) => {
      w.push(ct(k));
    }), s.selected = w;
  }, ct = (w) => {
    let k;
    const te = Xu(w);
    for (let yn = s.cachedOptions.size - 1; yn >= 0; yn--) {
      const Nt = Fe.value[yn];
      if (te ? zt(Nt.value, e.valueKey) === zt(w, e.valueKey) : Nt.value === w) {
        k = {
          value: w,
          currentLabel: Nt.currentLabel,
          get isDisabled() {
            return Nt.isDisabled;
          }
        };
        break;
      }
    }
    if (k)
      return k;
    const ye = te ? w.label : w ?? "";
    return {
      value: w,
      currentLabel: ye
    };
  }, bn = () => {
    s.hoveringIndex = ae.value.findIndex((w) => s.selected.some((k) => po(k) === po(w)));
  }, Zt = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, L = () => {
    s.collapseItemWidth = b.value.getBoundingClientRect().width;
  }, oe = () => {
    var w, k;
    (k = (w = u.value) == null ? void 0 : w.updatePopper) == null || k.call(w);
  }, Ke = () => {
    var w, k;
    (k = (w = d.value) == null ? void 0 : w.updatePopper) == null || k.call(w);
  }, Rt = () => {
    s.inputValue.length > 0 && !C.value && (C.value = !0), Pt(s.inputValue);
  }, Mt = (w) => {
    if (s.inputValue = w.target.value, e.remote)
      Os();
    else
      return Rt();
  }, Os = Tv(() => {
    Rt();
  }, ee.value), Dn = (w) => {
    qn(e.modelValue, w) || t(In, w);
  }, su = (w) => Ov(w, (k) => {
    const te = s.cachedOptions.get(k);
    return te && !te.disabled && !te.states.groupDisabled;
  }), au = (w) => {
    if (e.multiple && w.code !== ft.delete && w.target.value.length <= 0) {
      const k = Ft(e.modelValue).slice(), te = su(k);
      if (te < 0)
        return;
      const ye = k[te];
      k.splice(te, 1), t(We, k), Dn(k), t("remove-tag", ye);
    }
  }, iu = (w, k) => {
    const te = s.selected.indexOf(k);
    if (te > -1 && !X.value) {
      const ye = Ft(e.modelValue).slice();
      ye.splice(te, 1), t(We, ye), Dn(ye), t("remove-tag", k.value);
    }
    w.stopPropagation(), fo();
  }, Is = (w) => {
    w.stopPropagation();
    const k = e.multiple ? [] : se.value;
    if (e.multiple)
      for (const te of s.selected)
        te.isDisabled && k.push(te.value);
    t(We, k), Dn(k), s.hoveringIndex = -1, C.value = !1, t("clear"), fo();
  }, As = (w) => {
    var k;
    if (e.multiple) {
      const te = Ft((k = e.modelValue) != null ? k : []).slice(), ye = $s(te, w);
      ye > -1 ? te.splice(ye, 1) : (e.multipleLimit <= 0 || te.length < e.multipleLimit) && te.push(w.value), t(We, te), Dn(te), w.created && Pt(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(We, w.value), Dn(w.value), C.value = !1;
    fo(), !C.value && pe(() => {
      co(w);
    });
  }, $s = (w = [], k) => En(k) ? -1 : Ae(k.value) ? w.findIndex((te) => qn(zt(te, e.valueKey), po(k))) : w.indexOf(k.value), co = (w) => {
    var k, te, ye, ze, yn;
    const Nt = Ee(w) ? w[0] : w;
    let vo = null;
    if (Nt?.value) {
      const Bn = ae.value.filter((Eu) => Eu.value === Nt.value);
      Bn.length > 0 && (vo = Bn[0].$el);
    }
    if (u.value && vo) {
      const Bn = (ze = (ye = (te = (k = u.value) == null ? void 0 : k.popperRef) == null ? void 0 : te.contentRef) == null ? void 0 : ye.querySelector) == null ? void 0 : ze.call(ye, `.${r.be("dropdown", "wrap")}`);
      Bn && Sh(Bn, vo);
    }
    (yn = m.value) == null || yn.handleScroll();
  }, lu = (w) => {
    s.options.set(w.value, w), s.cachedOptions.set(w.value, w);
  }, uu = (w, k) => {
    s.options.get(w) === k && s.options.delete(w);
  }, cu = y(() => {
    var w, k;
    return (k = (w = u.value) == null ? void 0 : w.popperRef) == null ? void 0 : k.contentRef;
  }), du = () => {
    s.isBeforeHide = !1, pe(() => {
      var w;
      (w = m.value) == null || w.update(), co(s.selected);
    });
  }, fo = () => {
    var w;
    (w = f.value) == null || w.focus();
  }, fu = () => {
    var w;
    if (C.value) {
      C.value = !1, pe(() => {
        var k;
        return (k = f.value) == null ? void 0 : k.blur();
      });
      return;
    }
    (w = f.value) == null || w.blur();
  }, pu = (w) => {
    Is(w);
  }, vu = (w) => {
    if (C.value = !1, T.value) {
      const k = new FocusEvent("focus", w);
      pe(() => D(k));
    }
  }, hu = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : C.value = !1;
  }, Ps = () => {
    X.value || (Rr && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : C.value = !C.value);
  }, gu = () => {
    if (!C.value)
      Ps();
    else {
      const w = ae.value[s.hoveringIndex];
      w && !w.isDisabled && As(w);
    }
  }, po = (w) => Ae(w.value) ? zt(w.value, e.valueKey) : w.value, mu = y(() => ae.value.filter((w) => w.visible).every((w) => w.isDisabled)), bu = y(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), yu = y(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Rs = (w) => {
    if (!C.value) {
      C.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Oe.value === 0 || E.value) && !mu.value) {
      w === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : w === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const k = ae.value[s.hoveringIndex];
      (k.isDisabled || !k.visible) && Rs(w), pe(() => co(z.value));
    }
  }, wu = () => {
    if (!l.value)
      return 0;
    const w = window.getComputedStyle(l.value);
    return Number.parseFloat(w.gap || "6px");
  }, _u = y(() => {
    const w = wu();
    return { maxWidth: `${b.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - w : s.selectionWidth}px` };
  }), Su = y(() => ({ maxWidth: `${s.selectionWidth}px` })), Cu = (w) => {
    t("popup-scroll", w);
  };
  return ot(l, Zt), ot(p, oe), ot(I, oe), ot(h, Ke), ot(b, L), me(() => {
    Ne();
  }), {
    inputId: j,
    contentId: o,
    nsSelect: r,
    nsInput: a,
    states: s,
    isFocused: T,
    expanded: C,
    optionsArray: ae,
    hoverOption: z,
    selectSize: qt,
    filteredOptionsCount: Oe,
    updateTooltip: oe,
    updateTagTooltip: Ke,
    debouncedOnInputChange: Os,
    onInput: Mt,
    deletePrevTag: au,
    deleteTag: iu,
    deleteSelected: Is,
    handleOptionSelect: As,
    scrollToOption: co,
    hasModelValue: B,
    shouldShowPlaceholder: vn,
    currentPlaceholder: hn,
    mouseEnterEventName: gn,
    needStatusIcon: ue,
    showClose: ve,
    iconComponent: be,
    iconReverse: et,
    validateState: Ue,
    validateIcon: tt,
    showNewOption: Gt,
    updateOptions: mt,
    collapseTagSize: Yt,
    setSelected: Ne,
    selectDisabled: X,
    emptyText: ne,
    handleCompositionStart: A,
    handleCompositionUpdate: $,
    handleCompositionEnd: S,
    onOptionCreate: lu,
    onOptionDestroy: uu,
    handleMenuEnter: du,
    focus: fo,
    blur: fu,
    handleClearClick: pu,
    handleClickOutside: vu,
    handleEsc: hu,
    toggleMenu: Ps,
    selectOption: gu,
    getValueKey: po,
    navigateOptions: Rs,
    dropdownMenuVisible: pn,
    showTagList: bu,
    collapseTagList: yu,
    popupScroll: Cu,
    tagStyle: _u,
    collapseTagStyle: Su,
    popperRef: cu,
    inputRef: f,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: v,
    suffixRef: g,
    selectRef: i,
    wrapperRef: I,
    selectionRef: l,
    scrollbarRef: m,
    menuRef: p,
    tagMenuRef: h,
    collapseItemRef: b
  };
};
var Y0 = V({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = re(ar);
    let o = [];
    return () => {
      var r, a;
      const s = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function l(u) {
        Ee(u) && u.forEach((d) => {
          var f, v, g, p;
          const h = (f = d?.type || {}) == null ? void 0 : f.name;
          h === "ElOptionGroup" ? l(!we(d.children) && !Ee(d.children) && he((v = d.children) == null ? void 0 : v.default) ? (g = d.children) == null ? void 0 : g.default() : d.children) : h === "ElOption" ? i.push((p = d.props) == null ? void 0 : p.value) : Ee(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), qn(i, o) || (o = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const Z0 = ie({
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
  size: Qo,
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
  teleported: Es.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Ot,
    default: ls
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Ot,
    default: Ah
  },
  tagType: { ...Fr.type, default: "info" },
  tagEffect: { ...Fr.effect, default: "light" },
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
    values: rr,
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
  ...ph,
  ...kn(["ariaLabel"])
}), yi = "ElSelect", X0 = V({
  name: yi,
  componentName: yi,
  components: {
    ElSelectMenu: G0,
    ElOption: Ts,
    ElOptions: Y0,
    ElTag: w0,
    ElScrollbar: Cg,
    ElTooltip: Fb,
    ElIcon: Re
  },
  directives: { ClickOutside: _0 },
  props: Z0,
  emits: [
    We,
    In,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = y(() => {
      const { modelValue: l, multiple: u } = e, d = u ? [] : void 0;
      return Ee(l) ? u ? l : d : u ? d : l;
    }), o = Wt({
      ...Yr(e),
      modelValue: n
    }), r = q0(o, t), { calculatorRef: a, inputStyle: s } = V0();
    Ye(ar, Wt({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const i = y(() => e.multiple ? r.states.selected.map((l) => l.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function J0(e, t, n, o, r, a) {
  const s = Xt("el-tag"), i = Xt("el-tooltip"), l = Xt("el-icon"), u = Xt("el-option"), d = Xt("el-options"), f = Xt("el-scrollbar"), v = Xt("el-select-menu"), g = Ju("click-outside");
  return Me((_(), F("div", {
    ref: "selectRef",
    class: M([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Qu(e.mouseEnterEventName)]: (p) => e.states.inputHovering = !0,
    onMouseleave: (p) => e.states.inputHovering = !1
  }, [
    J(i, {
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
      onHide: (p) => e.states.isBeforeHide = !1
    }, {
      default: H(() => {
        var p;
        return [
          O("div", {
            ref: "wrapperRef",
            class: M([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ce(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (_(), F("div", {
              key: 0,
              ref: "prefixRef",
              class: M(e.nsSelect.e("prefix"))
            }, [
              K(e.$slots, "prefix")
            ], 2)) : W("v-if", !0),
            O("div", {
              ref: "selectionRef",
              class: M([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? K(e.$slots, "tag", { key: 0 }, () => [
                (_(!0), F(ke, null, Xn(e.showTagList, (h) => (_(), F("div", {
                  key: e.getValueKey(h),
                  class: M(e.nsSelect.e("selected-item"))
                }, [
                  J(s, {
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: _e(e.tagStyle),
                    onClose: (b) => e.deleteTag(b, h)
                  }, {
                    default: H(() => [
                      O("span", {
                        class: M(e.nsSelect.e("tags-text"))
                      }, [
                        K(e.$slots, "label", {
                          label: h.currentLabel,
                          value: h.value
                        }, () => [
                          at(Q(h.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (_(), G(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: H(() => [
                    O("div", {
                      ref: "collapseItemRef",
                      class: M(e.nsSelect.e("selected-item"))
                    }, [
                      J(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: _e(e.collapseTagStyle)
                      }, {
                        default: H(() => [
                          O("span", {
                            class: M(e.nsSelect.e("tags-text"))
                          }, " + " + Q(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: H(() => [
                    O("div", {
                      ref: "tagMenuRef",
                      class: M(e.nsSelect.e("selection"))
                    }, [
                      (_(!0), F(ke, null, Xn(e.collapseTagList, (h) => (_(), F("div", {
                        key: e.getValueKey(h),
                        class: M(e.nsSelect.e("selected-item"))
                      }, [
                        J(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !h.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (b) => e.deleteTag(b, h)
                        }, {
                          default: H(() => [
                            O("span", {
                              class: M(e.nsSelect.e("tags-text"))
                            }, [
                              K(e.$slots, "label", {
                                label: h.currentLabel,
                                value: h.value
                              }, () => [
                                at(Q(h.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : W("v-if", !0)
              ]) : W("v-if", !0),
              O("div", {
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Me(O("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (h) => e.states.inputValue = h,
                  type: "text",
                  name: e.name,
                  class: M([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: _e(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((p = e.hoverOption) == null ? void 0 : p.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    Vn(Ce((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Vn(Ce((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Vn(Ce(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Vn(Ce(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Vn(Ce(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ce(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Oc, e.states.inputValue]
                ]),
                e.filterable ? (_(), F("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: M(e.nsSelect.e("input-calculator")),
                  textContent: Q(e.states.inputValue)
                }, null, 10, ["textContent"])) : W("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (_(), F("div", {
                key: 1,
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? K(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  O("span", null, Q(e.currentPlaceholder), 1)
                ]) : (_(), F("span", { key: 1 }, Q(e.currentPlaceholder), 1))
              ], 2)) : W("v-if", !0)
            ], 2),
            O("div", {
              ref: "suffixRef",
              class: M(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (_(), G(l, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: H(() => [
                  (_(), G(xe(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0),
              e.showClose && e.clearIcon ? (_(), G(l, {
                key: 1,
                class: M([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: H(() => [
                  (_(), G(xe(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : W("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (_(), G(l, {
                key: 2,
                class: M([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: H(() => [
                  (_(), G(xe(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: H(() => [
        J(v, { ref: "menuRef" }, {
          default: H(() => [
            e.$slots.header ? (_(), F("div", {
              key: 0,
              class: M(e.nsSelect.be("dropdown", "header")),
              onClick: Ce(() => {
              }, ["stop"])
            }, [
              K(e.$slots, "header")
            ], 10, ["onClick"])) : W("v-if", !0),
            Me(J(f, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: H(() => [
                e.showNewOption ? (_(), G(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : W("v-if", !0),
                J(d, null, {
                  default: H(() => [
                    K(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [it, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (_(), F("div", {
              key: 1,
              class: M(e.nsSelect.be("dropdown", "loading"))
            }, [
              K(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (_(), F("div", {
              key: 2,
              class: M(e.nsSelect.be("dropdown", "empty"))
            }, [
              K(e.$slots, "empty", {}, () => [
                O("span", null, Q(e.emptyText), 1)
              ])
            ], 2)) : W("v-if", !0),
            e.$slots.footer ? (_(), F("div", {
              key: 3,
              class: M(e.nsSelect.be("dropdown", "footer")),
              onClick: Ce(() => {
              }, ["stop"])
            }, [
              K(e.$slots, "footer")
            ], 10, ["onClick"])) : W("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [g, e.handleClickOutside, e.popperRef]
  ]);
}
var Q0 = /* @__PURE__ */ le(X0, [["render", J0], ["__file", "select.vue"]]);
const ey = V({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = fe("select"), n = P(null), o = $e(), r = P([]);
    Ye(eu, Wt({
      ...Yr(e)
    }));
    const a = y(() => r.value.some((u) => u.visible === !0)), s = (u) => {
      var d, f;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((f = u.component) != null && f.proxy);
    }, i = (u) => {
      const d = Ft(u), f = [];
      return d.forEach((v) => {
        var g, p;
        s(v) ? f.push(v.component.proxy) : (g = v.children) != null && g.length ? f.push(...i(v.children)) : (p = v.component) != null && p.subTree && f.push(...i(v.component.subTree));
      }), f;
    }, l = () => {
      r.value = i(o.subTree);
    };
    return me(() => {
      l();
    }), Jv(n, l, {
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
function ty(e, t, n, o, r, a) {
  return Me((_(), F("ul", {
    ref: "groupRef",
    class: M(e.ns.be("group", "wrap"))
  }, [
    O("li", {
      class: M(e.ns.be("group", "title"))
    }, Q(e.label), 3),
    O("li", null, [
      O("ul", {
        class: M(e.ns.b("group"))
      }, [
        K(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [it, e.visible]
  ]);
}
var tu = /* @__PURE__ */ le(ey, [["render", ty], ["__file", "option-group.vue"]]);
const ny = Qe(Q0, {
  Option: Ts,
  OptionGroup: tu
}), oy = is(Ts);
is(tu);
const ry = ie({
  direction: {
    type: q(String),
    default: "horizontal"
  },
  options: {
    type: q(Array),
    default: () => []
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  block: Boolean,
  size: Qo,
  disabled: Boolean,
  validateEvent: {
    type: Boolean,
    default: !0
  },
  id: String,
  name: String,
  ...kn(["ariaLabel"])
}), sy = {
  [We]: (e) => we(e) || ge(e) || an(e),
  [In]: (e) => we(e) || ge(e) || an(e)
}, ay = V({
  name: "ElSegmented"
}), iy = /* @__PURE__ */ V({
  ...ay,
  props: ry,
  emits: sy,
  setup(e, { emit: t }) {
    const n = e, o = fe("segmented"), r = ln(), a = io(), s = nr(), { formItem: i } = tr(), { inputId: l, isLabeledByFormItem: u } = cs(n, {
      formItemContext: i
    }), d = P(null), f = Uv(), v = Wt({
      isInit: !1,
      width: 0,
      height: 0,
      translateX: 0,
      translateY: 0,
      focusVisible: !1
    }), g = (C) => {
      const z = p(C);
      t(We, z), t(In, z);
    }, p = (C) => Ae(C) ? C.value : C, h = (C) => Ae(C) ? C.label : C, b = (C) => !!(s.value || Ae(C) && C.disabled), m = (C) => n.modelValue === p(C), E = (C) => n.options.find((z) => p(z) === C), A = (C) => [
      o.e("item"),
      o.is("selected", m(C)),
      o.is("disabled", b(C))
    ], $ = () => {
      if (!d.value)
        return;
      const C = d.value.querySelector(".is-selected"), z = d.value.querySelector(".is-selected input");
      if (!C || !z) {
        v.width = 0, v.height = 0, v.translateX = 0, v.translateY = 0, v.focusVisible = !1;
        return;
      }
      const x = C.getBoundingClientRect();
      v.isInit = !0, n.direction === "vertical" ? (v.height = x.height, v.translateY = C.offsetTop) : (v.width = x.width, v.translateX = C.offsetLeft);
      try {
        v.focusVisible = z.matches(":focus-visible");
      } catch {
      }
    }, S = y(() => [
      o.b(),
      o.m(a.value),
      o.is("block", n.block)
    ]), I = y(() => ({
      width: n.direction === "vertical" ? "100%" : `${v.width}px`,
      height: n.direction === "vertical" ? `${v.height}px` : "100%",
      transform: n.direction === "vertical" ? `translateY(${v.translateY}px)` : `translateX(${v.translateX}px)`,
      display: v.isInit ? "block" : "none"
    })), T = y(() => [
      o.e("item-selected"),
      o.is("disabled", b(E(n.modelValue))),
      o.is("focus-visible", v.focusVisible)
    ]), D = y(() => n.name || r.value);
    return ot(d, $), Y(f, $), Y(() => n.modelValue, () => {
      var C;
      $(), n.validateEvent && ((C = i?.validate) == null || C.call(i, "change").catch((z) => Se(z)));
    }, {
      flush: "post"
    }), (C, z) => C.options.length ? (_(), F("div", {
      key: 0,
      id: c(l),
      ref_key: "segmentedRef",
      ref: d,
      class: M(c(S)),
      role: "radiogroup",
      "aria-label": c(u) ? void 0 : C.ariaLabel || "segmented",
      "aria-labelledby": c(u) ? c(i).labelId : void 0
    }, [
      O("div", {
        class: M([c(o).e("group"), c(o).m(n.direction)])
      }, [
        O("div", {
          style: _e(c(I)),
          class: M(c(T))
        }, null, 6),
        (_(!0), F(ke, null, Xn(C.options, (x, R) => (_(), F("label", {
          key: R,
          class: M(A(x))
        }, [
          O("input", {
            class: M(c(o).e("item-input")),
            type: "radio",
            name: c(D),
            disabled: b(x),
            checked: m(x),
            onChange: (j) => g(x)
          }, null, 42, ["name", "disabled", "checked", "onChange"]),
          O("div", {
            class: M(c(o).e("item-label"))
          }, [
            K(C.$slots, "default", { item: x }, () => [
              at(Q(h(x)), 1)
            ])
          ], 2)
        ], 2))), 128))
      ], 2)
    ], 10, ["id", "aria-label", "aria-labelledby"])) : W("v-if", !0);
  }
});
var ly = /* @__PURE__ */ le(iy, [["__file", "segmented.vue"]]);
const uy = Qe(ly), nu = ["success", "info", "warning", "error"], Ie = hl({
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
  appendTo: de ? document.body : void 0
}), cy = ie({
  customClass: {
    type: String,
    default: Ie.customClass
  },
  center: {
    type: Boolean,
    default: Ie.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ie.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ie.duration
  },
  icon: {
    type: Ot,
    default: Ie.icon
  },
  id: {
    type: String,
    default: Ie.id
  },
  message: {
    type: q([
      String,
      Object,
      Function
    ]),
    default: Ie.message
  },
  onClose: {
    type: q(Function),
    default: Ie.onClose
  },
  showClose: {
    type: Boolean,
    default: Ie.showClose
  },
  type: {
    type: String,
    values: nu,
    default: Ie.type
  },
  plain: {
    type: Boolean,
    default: Ie.plain
  },
  offset: {
    type: Number,
    default: Ie.offset
  },
  zIndex: {
    type: Number,
    default: Ie.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ie.grouping
  },
  repeatNum: {
    type: Number,
    default: Ie.repeatNum
  }
}), dy = {
  destroy: () => !0
}, st = ec([]), fy = (e) => {
  const t = st.findIndex((r) => r.id === e), n = st[t];
  let o;
  return t > 0 && (o = st[t - 1]), { current: n, prev: o };
}, py = (e) => {
  const { prev: t } = fy(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, vy = (e, t) => st.findIndex((o) => o.id === e) > 0 ? 16 : t, hy = V({
  name: "ElMessage"
}), gy = /* @__PURE__ */ V({
  ...hy,
  props: cy,
  emits: dy,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Kh, { ns: r, zIndex: a } = ul("message"), { currentZIndex: s, nextZIndex: i } = a, l = P(), u = P(!1), d = P(0);
    let f;
    const v = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = y(() => {
      const T = n.type;
      return { [r.bm("icon", T)]: T && Ho[T] };
    }), p = y(() => n.icon || Ho[n.type] || ""), h = y(() => py(n.id)), b = y(() => vy(n.id, n.offset) + h.value), m = y(() => d.value + b.value), E = y(() => ({
      top: `${b.value}px`,
      zIndex: s.value
    }));
    function A() {
      n.duration !== 0 && ({ stop: f } = Fo(() => {
        S();
      }, n.duration));
    }
    function $() {
      f?.();
    }
    function S() {
      u.value = !1;
    }
    function I({ code: T }) {
      T === ft.esc && S();
    }
    return me(() => {
      A(), i(), u.value = !0;
    }), Y(() => n.repeatNum, () => {
      $(), A();
    }), Pe(document, "keydown", I), ot(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: m,
      close: S
    }), (T, D) => (_(), G(cn, {
      name: c(r).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (C) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: H(() => [
        Me(O("div", {
          id: T.id,
          ref_key: "messageRef",
          ref: l,
          class: M([
            c(r).b(),
            { [c(r).m(T.type)]: T.type },
            c(r).is("center", T.center),
            c(r).is("closable", T.showClose),
            c(r).is("plain", T.plain),
            T.customClass
          ]),
          style: _e(c(E)),
          role: "alert",
          onMouseenter: $,
          onMouseleave: A
        }, [
          T.repeatNum > 1 ? (_(), G(c(jb), {
            key: 0,
            value: T.repeatNum,
            type: c(v),
            class: M(c(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : W("v-if", !0),
          c(p) ? (_(), G(c(Re), {
            key: 1,
            class: M([c(r).e("icon"), c(g)])
          }, {
            default: H(() => [
              (_(), G(xe(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : W("v-if", !0),
          K(T.$slots, "default", {}, () => [
            T.dangerouslyUseHTMLString ? (_(), F(ke, { key: 1 }, [
              W(" Caution here, message could've been compromised, never use user's input as message "),
              O("p", {
                class: M(c(r).e("content")),
                innerHTML: T.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), F("p", {
              key: 0,
              class: M(c(r).e("content"))
            }, Q(T.message), 3))
          ]),
          T.showClose ? (_(), G(c(Re), {
            key: 2,
            class: M(c(r).e("closeBtn")),
            onClick: Ce(S, ["stop"])
          }, {
            default: H(() => [
              J(c(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : W("v-if", !0)
        ], 46, ["id"]), [
          [it, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var my = /* @__PURE__ */ le(gy, [["__file", "message.vue"]]);
let by = 1;
const ou = (e) => {
  const t = !e || we(e) || Jn(e) || he(e) ? { message: e } : e, n = {
    ...Ie,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (we(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Ge(o) || (Se("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), o = document.body), n.appendTo = o;
  }
  return an(dt.grouping) && !n.grouping && (n.grouping = dt.grouping), ge(dt.duration) && n.duration === 3e3 && (n.duration = dt.duration), ge(dt.offset) && n.offset === 16 && (n.offset = dt.offset), an(dt.showClose) && !n.showClose && (n.showClose = dt.showClose), n;
}, yy = (e) => {
  const t = st.indexOf(e);
  if (t === -1)
    return;
  st.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, wy = ({ appendTo: e, ...t }, n) => {
  const o = `message_${by++}`, r = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), yy(d);
    },
    onDestroy: () => {
      No(null, a);
    }
  }, i = J(my, s, he(s.message) || Jn(s.message) ? {
    default: he(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Mn._context, No(i, a), e.appendChild(a.firstElementChild);
  const l = i.component, d = {
    id: o,
    vnode: i,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return d;
}, Mn = (e = {}, t) => {
  if (!de)
    return { close: () => {
    } };
  const n = ou(e);
  if (n.grouping && st.length) {
    const r = st.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (ge(dt.max) && st.length >= dt.max)
    return { close: () => {
    } };
  const o = wy(n, t);
  return st.push(o), o.handler;
};
nu.forEach((e) => {
  Mn[e] = (t = {}, n) => {
    const o = ou(t);
    return Mn({ ...o, type: e }, n);
  };
});
function _y(e) {
  for (const t of st)
    (!e || e === t.props.type) && t.handler.close();
}
Mn.closeAll = _y;
Mn._context = null;
const Sy = dl(Mn, "$message"), ru = [
  "success",
  "info",
  "warning",
  "error"
], Cy = ie({
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
    type: Ot
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
    values: [...ru, ""],
    default: ""
  },
  zIndex: Number
}), Ey = {
  destroy: () => !0
}, Ty = V({
  name: "ElNotification"
}), Oy = /* @__PURE__ */ V({
  ...Ty,
  props: Cy,
  emits: Ey,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = ul("notification"), { nextZIndex: a, currentZIndex: s } = r, { Close: i } = pl, l = P(!1);
    let u;
    const d = y(() => {
      const A = n.type;
      return A && Ho[n.type] ? o.m(A) : "";
    }), f = y(() => n.type && Ho[n.type] || n.icon), v = y(() => n.position.endsWith("right") ? "right" : "left"), g = y(() => n.position.startsWith("top") ? "top" : "bottom"), p = y(() => {
      var A;
      return {
        [g.value]: `${n.offset}px`,
        zIndex: (A = n.zIndex) != null ? A : s.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: u } = Fo(() => {
        l.value && m();
      }, n.duration));
    }
    function b() {
      u?.();
    }
    function m() {
      l.value = !1;
    }
    function E({ code: A }) {
      A === ft.delete || A === ft.backspace ? b() : A === ft.esc ? l.value && m() : h();
    }
    return me(() => {
      h(), a(), l.value = !0;
    }), Pe(document, "keydown", E), t({
      visible: l,
      close: m
    }), (A, $) => (_(), G(cn, {
      name: c(o).b("fade"),
      onBeforeLeave: A.onClose,
      onAfterLeave: (S) => A.$emit("destroy"),
      persisted: ""
    }, {
      default: H(() => [
        Me(O("div", {
          id: A.id,
          class: M([c(o).b(), A.customClass, c(v)]),
          style: _e(c(p)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: h,
          onClick: A.onClick
        }, [
          c(f) ? (_(), G(c(Re), {
            key: 0,
            class: M([c(o).e("icon"), c(d)])
          }, {
            default: H(() => [
              (_(), G(xe(c(f))))
            ]),
            _: 1
          }, 8, ["class"])) : W("v-if", !0),
          O("div", {
            class: M(c(o).e("group"))
          }, [
            O("h2", {
              class: M(c(o).e("title")),
              textContent: Q(A.title)
            }, null, 10, ["textContent"]),
            Me(O("div", {
              class: M(c(o).e("content")),
              style: _e(A.title ? void 0 : { margin: 0 })
            }, [
              K(A.$slots, "default", {}, () => [
                A.dangerouslyUseHTMLString ? (_(), F(ke, { key: 1 }, [
                  W(" Caution here, message could've been compromised, never use user's input as message "),
                  O("p", { innerHTML: A.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), F("p", { key: 0 }, Q(A.message), 1))
              ])
            ], 6), [
              [it, A.message]
            ]),
            A.showClose ? (_(), G(c(Re), {
              key: 0,
              class: M(c(o).e("closeBtn")),
              onClick: Ce(m, ["stop"])
            }, {
              default: H(() => [
                J(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : W("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [it, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Iy = /* @__PURE__ */ le(Oy, [["__file", "notification.vue"]]);
const Uo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, zr = 16;
let Ay = 1;
const Nn = function(e = {}, t) {
  if (!de)
    return { close: () => {
    } };
  (we(e) || Jn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Uo[n].forEach(({ vm: d }) => {
    var f;
    o += (((f = d.el) == null ? void 0 : f.offsetHeight) || 0) + zr;
  }), o += zr;
  const r = `notification_${Ay++}`, a = e.onClose, s = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      $y(r, n, a);
    }
  };
  let i = document.body;
  Ge(e.appendTo) ? i = e.appendTo : we(e.appendTo) && (i = document.querySelector(e.appendTo)), Ge(i) || (Se("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), i = document.body);
  const l = document.createElement("div"), u = J(Iy, s, he(s.message) ? s.message : Jn(s.message) ? () => s.message : null);
  return u.appContext = En(t) ? Nn._context : t, u.props.onDestroy = () => {
    No(null, l);
  }, No(u, l), Uo[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
ru.forEach((e) => {
  Nn[e] = (t = {}, n) => ((we(t) || Jn(t)) && (t = {
    message: t
  }), Nn({ ...t, type: e }, n));
});
function $y(e, t, n) {
  const o = Uo[t], r = o.findIndex(({ vm: u }) => {
    var d;
    return ((d = u.component) == null ? void 0 : d.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: a } = o[r];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, i = t.split("-")[0];
  o.splice(r, 1);
  const l = o.length;
  if (!(l < 1))
    for (let u = r; u < l; u++) {
      const { el: d, component: f } = o[u].vm, v = Number.parseInt(d.style[i], 10) - s - zr;
      f.props.offset = v;
    }
}
function Py() {
  for (const e of Object.values(Uo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Nn.closeAll = Py;
Nn._context = null;
const Ry = dl(Nn, "$notify"), My = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", o) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: o
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
      position: o = "center",
      duration: r = 3e3,
      showClose: a = !1
    } = e;
    o === "center" ? Sy({
      message: t,
      type: n,
      duration: r,
      showClose: a,
      grouping: !0
    }) : Ry({
      message: t,
      type: n,
      position: o,
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
};
async function Ny(e = {}) {
  return typeof e == "object" && Object.freeze(e), await N("plugin:dialog|save", { options: e });
}
const Ly = { class: "export-form" }, xy = { class: "path-row" }, ky = /* @__PURE__ */ V({
  __name: "ExportSettingsDialog",
  props: {
    modelValue: { type: Boolean },
    settings: {}
  },
  emits: ["update:modelValue", "update:settings", "export", "cancel"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = [
      { label: "MP4", value: "mp4" },
      { label: "GIF", value: "gif" }
    ], a = [15, 24, 30, 60], s = (f, v) => {
      o("update:settings", {
        ...n.settings,
        [f]: v
      });
    }, i = (f) => {
      s("format", f === "gif" ? "gif" : "mp4");
    }, l = (f) => {
      const v = Number(f);
      s("fps", [15, 24, 30, 60].includes(v) ? v : 30);
    }, u = (f) => {
      const v = String(f);
      s(
        "quality",
        ["high", "standard", "small"].includes(v) ? v : "standard"
      );
    }, d = async () => {
      const f = n.settings.format, v = await Ny({
        title: "保存录屏",
        defaultPath: `recording.${f}`,
        filters: [
          { name: f.toUpperCase(), extensions: [f] }
        ]
      });
      v && s("savePath", v);
    };
    return (f, v) => {
      const g = uy, p = oy, h = ny, b = ug, m = Zl, E = z0;
      return _(), G(E, {
        "model-value": f.modelValue,
        title: f.$t("screenRecorder.exportSettings"),
        width: "420px",
        "append-to-body": "",
        "onUpdate:modelValue": v[2] || (v[2] = (A) => f.$emit("update:modelValue", A))
      }, {
        footer: H(() => [
          J(m, {
            onClick: v[0] || (v[0] = (A) => f.$emit("cancel"))
          }, {
            default: H(() => [
              at(
                Q(f.$t("common.cancel")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          J(m, {
            type: "primary",
            disabled: !f.settings.savePath,
            onClick: v[1] || (v[1] = (A) => f.$emit("export"))
          }, {
            default: H(() => [
              at(
                Q(f.$t("screenRecorder.export")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ]),
        default: H(() => [
          O("div", Ly, [
            O("label", null, [
              O(
                "span",
                null,
                Q(f.$t("screenRecorder.format")),
                1
                /* TEXT */
              ),
              J(g, {
                "model-value": f.settings.format,
                options: r,
                "onUpdate:modelValue": i
              }, null, 8, ["model-value"])
            ]),
            O("label", null, [
              O(
                "span",
                null,
                Q(f.$t("screenRecorder.fps")),
                1
                /* TEXT */
              ),
              J(h, {
                "model-value": f.settings.fps,
                "onUpdate:modelValue": l
              }, {
                default: H(() => [
                  (_(), F(
                    ke,
                    null,
                    Xn(a, (A) => J(p, {
                      key: A,
                      label: `${A} FPS`,
                      value: A
                    }, null, 8, ["label", "value"])),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model-value"])
            ]),
            O("label", null, [
              O(
                "span",
                null,
                Q(f.$t("screenRecorder.quality")),
                1
                /* TEXT */
              ),
              J(h, {
                "model-value": f.settings.quality,
                "onUpdate:modelValue": u
              }, {
                default: H(() => [
                  J(p, {
                    label: f.$t("screenRecorder.qualityHigh"),
                    value: "high"
                  }, null, 8, ["label"]),
                  J(p, {
                    label: f.$t("screenRecorder.qualityStandard"),
                    value: "standard"
                  }, null, 8, ["label"]),
                  J(p, {
                    label: f.$t("screenRecorder.qualitySmall"),
                    value: "small"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model-value"])
            ]),
            O("label", null, [
              O(
                "span",
                null,
                Q(f.$t("screenRecorder.savePath")),
                1
                /* TEXT */
              ),
              O("div", xy, [
                J(b, {
                  "model-value": f.settings.savePath,
                  readonly: ""
                }, null, 8, ["model-value"]),
                J(m, { onClick: d }, {
                  default: H(() => [
                    at(
                      Q(f.$t("common.browse")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "title"]);
    };
  }
}), ir = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Dy = /* @__PURE__ */ ir(ky, [["__scopeId", "data-v-11026f25"]]), By = {}, Fy = { class: "export-progress" };
function zy(e, t) {
  return _(), F("div", Fy, [
    t[0] || (t[0] = O(
      "div",
      { class: "spinner" },
      null,
      -1
      /* HOISTED */
    )),
    O(
      "div",
      null,
      Q(e.$t("screenRecorder.exporting")),
      1
      /* TEXT */
    )
  ]);
}
const Vy = /* @__PURE__ */ ir(By, [["render", zy], ["__scopeId", "data-v-92ef9ccc"]]), Hy = { class: "recording-result" }, Wy = { class: "actions" }, jy = /* @__PURE__ */ V({
  __name: "RecordingResult",
  props: {
    result: {}
  },
  emits: ["open", "reveal", "recordAgain"],
  setup(e) {
    const t = e, n = y(() => {
      const o = t.result.sizeBytes / 1024 / 1024;
      return o >= 1 ? `${o.toFixed(2)} MB` : `${(t.result.sizeBytes / 1024).toFixed(1)} KB`;
    });
    return (o, r) => {
      const a = Zl;
      return _(), F("div", Hy, [
        O(
          "h3",
          null,
          Q(o.$t("screenRecorder.exportDone")),
          1
          /* TEXT */
        ),
        O(
          "p",
          null,
          Q(o.result.width) + " × " + Q(o.result.height) + " · " + Q(n.value),
          1
          /* TEXT */
        ),
        O("div", Wy, [
          J(a, {
            type: "primary",
            onClick: r[0] || (r[0] = (s) => o.$emit("open"))
          }, {
            default: H(() => [
              at(
                Q(o.$t("screenRecorder.openFile")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          J(a, {
            onClick: r[1] || (r[1] = (s) => o.$emit("reveal"))
          }, {
            default: H(() => [
              at(
                Q(o.$t("screenRecorder.openFolder")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          J(a, {
            onClick: r[2] || (r[2] = (s) => o.$emit("recordAgain"))
          }, {
            default: H(() => [
              at(
                Q(o.$t("screenRecorder.recordAgain")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]);
    };
  }
}), Uy = /* @__PURE__ */ ir(jy, [["__scopeId", "data-v-2c0d75b1"]]), Ky = () => N("screen_recorder_get_ffmpeg_status"), Eo = (e) => N("screen_recorder_set_capture_excluded", { excluded: e }), Gy = () => N("screen_recorder_close_window"), qy = (e, t) => N("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality
}), Yy = () => N("screen_recorder_pause_recording"), Zy = (e, t) => N("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality
}), Xy = () => N("screen_recorder_stop_recording"), Jy = () => N("screen_recorder_cancel_recording"), Qy = (e) => N("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), wi = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: ""
});
function ew() {
  const e = P("selecting"), t = P(wi()), n = P(null), o = P(null), r = P(""), a = P(null), s = P(0), i = P(null), l = y(() => e.value !== "recording" || a.value === null ? s.value : s.value + Date.now() - a.value), u = () => {
    i.value !== null && (window.clearInterval(i.value), i.value = null);
  }, d = () => {
    u(), i.value = window.setInterval(() => {
      s.value = l.value, a.value = Date.now();
    }, 500);
  }, f = async () => (n.value = await Ky(), n.value), v = async (A) => {
    r.value = "", o.value = null;
    const $ = n.value ?? await f();
    if (!$.available)
      throw new Error($.message || "FFmpeg unavailable");
    await qy(A, t.value), e.value = "recording", s.value = 0, a.value = Date.now(), d();
  }, g = async () => {
    e.value === "recording" && (s.value = l.value, a.value = null, u(), await Yy(), e.value = "paused");
  }, p = async (A) => {
    e.value === "paused" && (await Zy(A, t.value), e.value = "recording", a.value = Date.now(), d());
  }, h = async () => {
    e.value !== "recording" && e.value !== "paused" || (s.value = l.value, a.value = null, u(), await Xy(), e.value = "exporting");
  }, b = async () => (e.value = "exporting", o.value = await Qy(t.value), e.value = "completed", o.value), m = async () => {
    u(), await Jy(), e.value = "selecting", a.value = null, s.value = 0, o.value = null;
  }, E = () => {
    e.value = "selecting", a.value = null, s.value = 0, o.value = null, r.value = "", t.value = wi();
  };
  return Gr(() => {
    u();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: o,
    errorMessage: r,
    elapsedMs: l,
    refreshFfmpegStatus: f,
    begin: v,
    pause: g,
    resume: p,
    stop: h,
    exportFile: b,
    cancel: m,
    reset: E
  };
}
const tw = { class: "screen-recorder" }, nw = ["onMousedown"], ow = { class: "window-title" }, rw = ["title"], sw = { class: "capture-viewport" }, aw = { class: "control-strip" }, iw = ["disabled"], lw = ["disabled"], uw = { class: "dimension" }, cw = ["value"], dw = { class: "dimension" }, fw = ["value"], pw = { class: "time" }, vw = ["disabled"], hw = {
  key: 0,
  class: "warning"
}, To = 80, gw = 720, mw = 430, bw = /* @__PURE__ */ V({
  __name: "index",
  setup(e) {
    const t = Mi(), n = P(null), o = P({ width: 0, height: 0 }), r = P(!1);
    let a = null;
    const s = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: i,
      settings: l,
      ffmpegStatus: u,
      result: d,
      elapsedMs: f,
      refreshFfmpegStatus: v,
      begin: g,
      pause: p,
      resume: h,
      stop: b,
      exportFile: m,
      cancel: E,
      reset: A
    } = ew(), $ = y(() => i.value === "recording" || i.value === "paused" || i.value === "exporting"), S = y(() => {
      const ee = Math.floor(f.value / 1e3), U = Math.floor(ee / 60).toString().padStart(2, "0"), ne = (ee % 60).toString().padStart(2, "0");
      return `${U}:${ne}`;
    }), I = async (ee) => {
      try {
        await ee();
      } catch (U) {
        My.msg(U?.message || String(U), "error");
      }
    }, T = (ee) => Math.max(2, Math.floor(Math.round(ee) / 2) * 2), D = async () => {
      const ee = n.value;
      if (!ee)
        throw new Error("录制视口尚未准备好");
      const U = ee.getBoundingClientRect(), ne = await t.scaleFactor(), Oe = await t.innerPosition(), ae = T(U.width * ne), Fe = T(U.height * ne);
      if (ae < To || Fe < To)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: U.left,
        y: U.top,
        width: ae / ne,
        height: Fe / ne,
        screenX: Math.round(Oe.x + U.left * ne),
        screenY: Math.round(Oe.y + U.top * ne),
        physicalWidth: ae,
        physicalHeight: Fe,
        scale: ne
      };
    }, C = async () => {
      try {
        const ee = await D();
        o.value = {
          width: ee.physicalWidth,
          height: ee.physicalHeight
        };
      } catch {
        o.value = { width: 0, height: 0 };
      }
    }, z = async (ee) => {
      ee.button !== 0 || $.value || await t.startDragging();
    }, x = async (ee) => {
      $.value || await t.startResizeDragging(ee);
    }, R = () => I(async () => {
      await Eo(!0).catch(() => {
      }), await C(), await g(await D());
    }), j = () => I(p), se = () => I(async () => {
      await h(await D());
    }), Z = () => I(async () => {
      await b(), r.value = !0;
    }), X = () => I(async () => {
      r.value = !1, await m();
    }), B = () => I(async () => {
      r.value = !1, await E(), A(), i.value = "ready", await C();
    }), ue = () => {
      A(), i.value = "ready", t.setSize(new Lo(gw, mw)), pe(C);
    }, ve = async () => {
      await t.minimize();
    }, be = async () => {
      try {
        await E(), await Eo(!1).catch(() => {
        });
      } catch {
      }
      await Gy();
    }, et = async () => {
      d.value && await N("open_file_with_default_app", { filePath: d.value.path });
    }, Ue = async () => {
      d.value && await N("show_file_in_folder", { filePath: d.value.path });
    }, tt = (ee) => {
      ee.key === "Escape" && (ee.preventDefault(), be());
    };
    return me(async () => {
      i.value = "ready", await t.setMinSize(new Lo(360, 260)).catch(() => {
      }), await Eo(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await v().catch(() => {
      }), await pe(), await C(), n.value && (a = new ResizeObserver(() => {
        C();
      }), a.observe(n.value)), window.addEventListener("resize", C), window.addEventListener("keydown", tt);
    }), Gr(() => {
      a?.disconnect(), window.removeEventListener("resize", C), window.removeEventListener("keydown", tt), Eo(!1).catch(() => {
      });
    }), (ee, U) => (_(), F("div", tw, [
      O(
        "div",
        {
          class: M(["recorder-shell", { recording: c(i) === "recording", paused: c(i) === "paused" }])
        },
        [
          (_(), F(
            ke,
            null,
            Xn(s, (ne) => O("span", {
              key: ne.className,
              class: M(["resize-zone", ne.className]),
              onMousedown: Ce((Oe) => x(ne.direction), ["prevent"])
            }, null, 42, nw)),
            64
            /* STABLE_FRAGMENT */
          )),
          O(
            "header",
            {
              class: "title-bar",
              onMousedown: z
            },
            [
              O(
                "span",
                ow,
                Q(ee.$t("screenRecorder.title") || "自定义录屏"),
                1
                /* TEXT */
              ),
              O(
                "div",
                {
                  class: "window-actions",
                  onMousedown: U[0] || (U[0] = Ce(() => {
                  }, ["stop"]))
                },
                [
                  O("button", {
                    class: "title-button",
                    title: ee.$t("common.minimize") || "最小化",
                    onClick: ve
                  }, "_", 8, rw),
                  O("button", {
                    class: "title-button close",
                    title: "关闭",
                    onClick: be
                  }, "×")
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            32
            /* NEED_HYDRATION */
          ),
          O("main", sw, [
            O(
              "div",
              {
                ref_key: "captureFrameRef",
                ref: n,
                class: "capture-frame"
              },
              U[6] || (U[6] = [
                O(
                  "span",
                  { class: "viewport-border top" },
                  null,
                  -1
                  /* HOISTED */
                ),
                O(
                  "span",
                  { class: "viewport-border right" },
                  null,
                  -1
                  /* HOISTED */
                ),
                O(
                  "span",
                  { class: "viewport-border bottom" },
                  null,
                  -1
                  /* HOISTED */
                ),
                O(
                  "span",
                  { class: "viewport-border left" },
                  null,
                  -1
                  /* HOISTED */
                )
              ]),
              512
              /* NEED_PATCH */
            )
          ]),
          O("footer", aw, [
            O(
              "span",
              {
                class: M(["status-dot", { active: c(i) === "recording", paused: c(i) === "paused" }])
              },
              null,
              2
              /* CLASS */
            ),
            Me(O("select", {
              "onUpdate:modelValue": U[1] || (U[1] = (ne) => c(l).fps = ne),
              disabled: $.value
            }, U[7] || (U[7] = [
              O(
                "option",
                { value: 15 },
                "15",
                -1
                /* HOISTED */
              ),
              O(
                "option",
                { value: 24 },
                "24",
                -1
                /* HOISTED */
              ),
              O(
                "option",
                { value: 30 },
                "30",
                -1
                /* HOISTED */
              ),
              O(
                "option",
                { value: 60 },
                "60",
                -1
                /* HOISTED */
              )
            ]), 8, iw), [
              [Xs, c(l).fps]
            ]),
            U[10] || (U[10] = O(
              "span",
              { class: "unit" },
              "fps",
              -1
              /* HOISTED */
            )),
            Me(O("select", {
              "onUpdate:modelValue": U[2] || (U[2] = (ne) => c(l).format = ne),
              disabled: $.value
            }, U[8] || (U[8] = [
              O(
                "option",
                { value: "mp4" },
                "MP4",
                -1
                /* HOISTED */
              ),
              O(
                "option",
                { value: "gif" },
                "GIF",
                -1
                /* HOISTED */
              )
            ]), 8, lw), [
              [Xs, c(l).format]
            ]),
            O("label", uw, [
              O("input", {
                value: o.value.width,
                readonly: ""
              }, null, 8, cw)
            ]),
            U[11] || (U[11] = O(
              "span",
              { class: "multiply" },
              "×",
              -1
              /* HOISTED */
            )),
            O("label", dw, [
              O("input", {
                value: o.value.height,
                readonly: ""
              }, null, 8, fw)
            ]),
            U[12] || (U[12] = O(
              "span",
              { class: "unit" },
              "px",
              -1
              /* HOISTED */
            )),
            c(i) === "recording" || c(i) === "paused" ? (_(), F(
              ke,
              { key: 0 },
              [
                O(
                  "span",
                  pw,
                  Q(S.value),
                  1
                  /* TEXT */
                ),
                O(
                  "button",
                  {
                    class: "control-button",
                    onClick: U[3] || (U[3] = (ne) => c(i) === "paused" ? se() : j())
                  },
                  Q(c(i) === "paused" ? ee.$t("screenRecorder.resume") : ee.$t("screenRecorder.pause")),
                  1
                  /* TEXT */
                ),
                O(
                  "button",
                  {
                    class: "control-button danger",
                    onClick: Z
                  },
                  Q(ee.$t("screenRecorder.stop")),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (_(), F("button", {
              key: 1,
              class: "record-button",
              disabled: c(u)?.available === !1 || o.value.width < To || o.value.height < To,
              onClick: R
            }, [
              U[9] || (U[9] = O(
                "span",
                null,
                null,
                -1
                /* HOISTED */
              )),
              at(
                " " + Q(ee.$t("screenRecorder.start")),
                1
                /* TEXT */
              )
            ], 8, vw))
          ])
        ],
        2
        /* CLASS */
      ),
      c(u) && !c(u).available ? (_(), F(
        "p",
        hw,
        Q(c(u).message || ee.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : W("v-if", !0),
      J(Dy, {
        modelValue: r.value,
        "onUpdate:modelValue": U[4] || (U[4] = (ne) => r.value = ne),
        settings: c(l),
        "onUpdate:settings": U[5] || (U[5] = (ne) => Kr(l) ? l.value = ne : null),
        onExport: X,
        onCancel: B
      }, null, 8, ["modelValue", "settings"]),
      c(i) === "exporting" && !r.value ? (_(), G(Vy, { key: 1 })) : W("v-if", !0),
      c(i) === "completed" && c(d) ? (_(), G(Uy, {
        key: 2,
        result: c(d),
        onOpen: et,
        onReveal: Ue,
        onRecordAgain: ue
      }, null, 8, ["result"])) : W("v-if", !0)
    ]));
  }
}), ww = /* @__PURE__ */ ir(bw, [["__scopeId", "data-v-011f628c"]]);
export {
  ww as default
};
