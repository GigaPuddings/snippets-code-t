import { Y as rr, b as q, _ as W, k as ue, D as ar, h as mt, i as Oe, a as Se, u as Kt, d as P, t as Mt, r as sr, f as Xe, w as Ve, Z as no, j as Pe, q as Vt, I as U, g as Tn, $ as ir, a0 as Sn, a1 as lr, a2 as oo, J as ro, a3 as ur, a4 as cr, a5 as fr, a6 as Wt, a7 as dr, n as pr, l as ao, m as so, a8 as vr, c as $t, e as hr, E as bt, a9 as Gt, z as gr, x as mr, N as br, aa as yr, ab as wr, ac as Er, X as _r, M as Tr } from "./useGitStatus-Daud9_Rl.js";
import { I as Sr, c as z, d as $, Q as D, r as k, a as C, Z as ve, t as te, q as K, h as F, v as N, D as Ut, k as et, l as ee, m as p, B as tt, G as io, T as lo, f as J, F as Et, w as V, n as nt, _ as ae, H as uo, $ as Cr, o as me, J as Or, j as ne, p as H, x as Je, C as co, N as Nt, a0 as kr, U as fo, a1 as Ir, y as ke, i as Rr, s as Ar, g as Yt, b as Ye, a2 as Fr, W as Pr, a3 as Mr, a4 as po, a5 as $r, A as qe, e as Nr, a6 as X, a7 as Br, a8 as Lr, L as xr, z as Bt, R as Dr } from "./runtime-entry-B9tN6Kl6.js";
const Cn = Sr("branch", !0, function(e) {
  return z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [z("path", {
    d: "M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M9 44C11.2091 44 13 42.2091 13 40C13 37.7909 11.2091 36 9 36C6.79086 36 5 37.7909 5 40C5 42.2091 6.79086 44 9 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), z("path", {
    d: "M9 12V36V24.0083H36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
});
function Hr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return rr(e) ? e : [e];
}
function zr(e) {
  return e === void 0;
}
const Le = 4, jr = {
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
}, Kr = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), qt = Symbol("scrollbarContextKey"), Vr = q({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Wr = "Thumb", Gr = /* @__PURE__ */ $({
  __name: "thumb",
  props: Vr,
  setup(e) {
    const t = e, n = D(qt), o = ue("scrollbar");
    n || ar(Wr, "can not inject scrollbar context");
    const r = k(), a = k(), s = k({}), i = k(!1);
    let l = !1, u = !1, d = Oe ? document.onselectstart : null;
    const f = C(() => jr[t.vertical ? "vertical" : "horizontal"]), m = C(() => Kr({
      size: t.size,
      move: t.move,
      bar: f.value
    })), h = C(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / a.value[f.value.offset]), c = (T) => {
      var S;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (S = window.getSelection()) == null || S.removeAllRanges(), y(T);
      const I = T.currentTarget;
      I && (s.value[f.value.axis] = I[f.value.offset] - (T[f.value.client] - I.getBoundingClientRect()[f.value.direction]));
    }, v = (T) => {
      if (!a.value || !r.value || !n.wrapElement)
        return;
      const S = Math.abs(T.target.getBoundingClientRect()[f.value.direction] - T[f.value.client]), I = a.value[f.value.offset] / 2, A = (S - I) * 100 * h.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = A * n.wrapElement[f.value.scrollSize] / 100;
    }, y = (T) => {
      T.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", E), d = document.onselectstart, document.onselectstart = () => !1;
    }, g = (T) => {
      if (!r.value || !a.value || l === !1)
        return;
      const S = s.value[f.value.axis];
      if (!S)
        return;
      const I = (r.value.getBoundingClientRect()[f.value.direction] - T[f.value.client]) * -1, A = a.value[f.value.offset] - S, M = (I - A) * 100 * h.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = M * n.wrapElement[f.value.scrollSize] / 100;
    }, E = () => {
      l = !1, s.value[f.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", E), b(), u && (i.value = !1);
    }, R = () => {
      u = !1, i.value = !!t.size;
    }, w = () => {
      u = !0, i.value = l;
    };
    ve(() => {
      b(), document.removeEventListener("mouseup", E);
    });
    const b = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return mt(te(n, "scrollbarElement"), "mousemove", R), mt(te(n, "scrollbarElement"), "mouseleave", w), (T, S) => (F(), K(lo, {
      name: p(o).b("fade"),
      persisted: ""
    }, {
      default: N(() => [
        Ut(et("div", {
          ref_key: "instance",
          ref: r,
          class: ee([p(o).e("bar"), p(o).is(p(f).key)]),
          onMousedown: v
        }, [
          et("div", {
            ref_key: "thumb",
            ref: a,
            class: ee(p(o).e("thumb")),
            style: tt(p(m)),
            onMousedown: c
          }, null, 38)
        ], 34), [
          [io, T.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var On = /* @__PURE__ */ W(Gr, [["__file", "thumb.vue"]]);
const Ur = q({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Yr = /* @__PURE__ */ $({
  __name: "bar",
  props: Ur,
  setup(e, { expose: t }) {
    const n = e, o = D(qt), r = k(0), a = k(0), s = k(""), i = k(""), l = k(1), u = k(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const h = m.offsetHeight - Le, c = m.offsetWidth - Le;
          a.value = m.scrollTop * 100 / h * l.value, r.value = m.scrollLeft * 100 / c * u.value;
        }
      },
      update: () => {
        const m = o?.wrapElement;
        if (!m)
          return;
        const h = m.offsetHeight - Le, c = m.offsetWidth - Le, v = h ** 2 / m.scrollHeight, y = c ** 2 / m.scrollWidth, g = Math.max(v, n.minSize), E = Math.max(y, n.minSize);
        l.value = v / (h - v) / (g / (h - g)), u.value = y / (c - y) / (E / (c - E)), i.value = g + Le < h ? `${g}px` : "", s.value = E + Le < c ? `${E}px` : "";
      }
    }), (m, h) => (F(), J(Et, null, [
      z(On, {
        move: r.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      z(On, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var qr = /* @__PURE__ */ W(Yr, [["__file", "bar.vue"]]);
const Jr = q({
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
    type: P([String, Object, Array]),
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
  ...Kt(["ariaLabel", "ariaOrientation"])
}), Zr = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Se)
}, Lt = "ElScrollbar", Qr = $({
  name: Lt
}), Xr = /* @__PURE__ */ $({
  ...Qr,
  props: Jr,
  emits: Zr,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ue("scrollbar");
    let a, s, i = 0, l = 0;
    const u = k(), d = k(), f = k(), m = k(), h = C(() => {
      const b = {};
      return o.height && (b.height = Mt(o.height)), o.maxHeight && (b.maxHeight = Mt(o.maxHeight)), [o.wrapStyle, b];
    }), c = C(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), v = C(() => [r.e("view"), o.viewClass]), y = () => {
      var b;
      d.value && ((b = m.value) == null || b.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function g(b, T) {
      co(b) ? d.value.scrollTo(b) : Se(b) && Se(T) && d.value.scrollTo(b, T);
    }
    const E = (b) => {
      if (!Se(b)) {
        Xe(Lt, "value must be a number");
        return;
      }
      d.value.scrollTop = b;
    }, R = (b) => {
      if (!Se(b)) {
        Xe(Lt, "value must be a number");
        return;
      }
      d.value.scrollLeft = b;
    }, w = () => {
      var b;
      (b = m.value) == null || b.update();
    };
    return V(() => o.noresize, (b) => {
      b ? (a?.(), s?.()) : ({ stop: a } = sr(f, w), s = mt("resize", w));
    }, { immediate: !0 }), V(() => [o.maxHeight, o.height], () => {
      o.native || nt(() => {
        var b;
        w(), d.value && ((b = m.value) == null || b.handleScroll(d.value));
      });
    }), ae(qt, uo({
      scrollbarElement: u,
      wrapElement: d
    })), Cr(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), me(() => {
      o.native || nt(() => {
        w();
      });
    }), Or(() => w()), t({
      wrapRef: d,
      update: w,
      scrollTo: g,
      setScrollTop: E,
      setScrollLeft: R,
      handleScroll: y
    }), (b, T) => (F(), J("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: ee(p(r).b())
    }, [
      et("div", {
        ref_key: "wrapRef",
        ref: d,
        class: ee(p(c)),
        style: tt(p(h)),
        tabindex: b.tabindex,
        onScroll: y
      }, [
        (F(), K(Je(b.tag), {
          id: b.id,
          ref_key: "resizeRef",
          ref: f,
          class: ee(p(v)),
          style: tt(b.viewStyle),
          role: b.role,
          "aria-label": b.ariaLabel,
          "aria-orientation": b.ariaOrientation
        }, {
          default: N(() => [
            H(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      b.native ? ne("v-if", !0) : (F(), K(qr, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: b.always,
        "min-size": b.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var ea = /* @__PURE__ */ W(Xr, [["__file", "scrollbar.vue"]]);
const ta = Ve(ea), Jt = Symbol("popper"), vo = Symbol("popperContent"), ho = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], go = q({
  role: {
    type: String,
    values: ho,
    default: "tooltip"
  }
}), na = $({
  name: "ElPopper",
  inheritAttrs: !1
}), oa = /* @__PURE__ */ $({
  ...na,
  props: go,
  setup(e, { expose: t }) {
    const n = e, o = k(), r = k(), a = k(), s = k(), i = C(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), ae(Jt, l), (u, d) => H(u.$slots, "default");
  }
});
var ra = /* @__PURE__ */ W(oa, [["__file", "popper.vue"]]);
const mo = q({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), aa = $({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), sa = /* @__PURE__ */ $({
  ...aa,
  props: mo,
  setup(e, { expose: t }) {
    const n = e, o = ue("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: s } = D(vo, void 0);
    return V(() => n.arrowOffset, (i) => {
      r.value = i;
    }), ve(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (F(), J("span", {
      ref_key: "arrowRef",
      ref: a,
      class: ee(p(o).e("arrow")),
      style: tt(p(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var ia = /* @__PURE__ */ W(sa, [["__file", "arrow.vue"]]);
const bo = q({
  virtualRef: {
    type: P(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: P(Function)
  },
  onMouseleave: {
    type: P(Function)
  },
  onClick: {
    type: P(Function)
  },
  onKeydown: {
    type: P(Function)
  },
  onFocus: {
    type: P(Function)
  },
  onBlur: {
    type: P(Function)
  },
  onContextmenu: {
    type: P(Function)
  },
  id: String,
  open: Boolean
}), yo = Symbol("elForwardRef"), la = (e) => {
  ae(yo, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, ua = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), xt = (e) => {
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
}, kt = "ElOnlyChild", wo = $({
  name: kt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = D(yo), a = ua((o = r?.setForwardRef) != null ? o : Nt);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Xe(kt, "requires exact only one valid child."), null;
      const l = Eo(i);
      return l ? Ut(kr(l, n), [[a]]) : (Xe(kt, "no valid child node found"), null);
    };
  }
});
function Eo(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (co(n))
      switch (n.type) {
        case Ir:
          continue;
        case fo:
        case "svg":
          return kn(n);
        case Et:
          return Eo(n.children);
        default:
          return n;
      }
    return kn(n);
  }
  return null;
}
function kn(e) {
  const t = ue("only-child");
  return z("span", {
    class: t.e("content")
  }, [e]);
}
const ca = $({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), fa = /* @__PURE__ */ $({
  ...ca,
  props: bo,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = D(Jt, void 0);
    la(r);
    const a = C(() => i.value ? n.id : void 0), s = C(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = C(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = C(() => i.value ? `${n.open}` : void 0);
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
      V(() => n.virtualRef, (f) => {
        f && (r.value = no(f));
      }, {
        immediate: !0
      }), V(r, (f, m) => {
        u?.(), u = void 0, Pe(f) && (d.forEach((h) => {
          var c;
          const v = n[h];
          v && (f.addEventListener(h.slice(2).toLowerCase(), v), (c = m?.removeEventListener) == null || c.call(m, h.slice(2).toLowerCase(), v));
        }), xt(f) && (u = V([a, s, i, l], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((c, v) => {
            Vt(h[v]) ? f.removeAttribute(c) : f.setAttribute(c, h[v]);
          });
        }, { immediate: !0 }))), Pe(m) && xt(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => m.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), ve(() => {
      if (u?.(), u = void 0, r.value && Pe(r.value)) {
        const f = r.value;
        d.forEach((m) => {
          const h = n[m];
          h && f.removeEventListener(m.slice(2).toLowerCase(), h);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (f, m) => f.virtualTriggering ? ne("v-if", !0) : (F(), K(p(wo), ke({ key: 0 }, f.$attrs, {
      "aria-controls": p(a),
      "aria-describedby": p(s),
      "aria-expanded": p(l),
      "aria-haspopup": p(i)
    }), {
      default: N(() => [
        H(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var da = /* @__PURE__ */ W(fa, [["__file", "trigger.vue"]]);
const It = "focus-trap.focus-after-trapped", Rt = "focus-trap.focus-after-released", pa = "focus-trap.focusout-prevented", In = {
  cancelable: !0,
  bubbles: !1
}, va = {
  cancelable: !0,
  bubbles: !1
}, Rn = "focusAfterTrapped", An = "focusAfterReleased", _o = Symbol("elFocusTrap"), Zt = k(), _t = k(0), Qt = k(0);
let ct = 0;
const To = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Fn = (e, t) => {
  for (const n of e)
    if (!ha(n, t))
      return n;
}, ha = (e, t) => {
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
}, ga = (e) => {
  const t = To(e), n = Fn(t, e), o = Fn(t.reverse(), e);
  return [n, o];
}, ma = (e) => e instanceof HTMLInputElement && "select" in e, Ee = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Pe(e) && !xt(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Qt.value = window.performance.now(), e !== n && ma(e) && t && e.select(), Pe(e) && o && e.removeAttribute("tabindex");
  }
};
function Pn(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const ba = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Pn(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = Pn(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, ya = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Ee(o, t), document.activeElement !== n)
      return;
}, Mn = ba(), wa = () => _t.value > Qt.value, ft = () => {
  Zt.value = "pointer", _t.value = window.performance.now();
}, $n = () => {
  Zt.value = "keyboard", _t.value = window.performance.now();
}, Ea = () => (me(() => {
  ct === 0 && (document.addEventListener("mousedown", ft), document.addEventListener("touchstart", ft), document.addEventListener("keydown", $n)), ct++;
}), ve(() => {
  ct--, ct <= 0 && (document.removeEventListener("mousedown", ft), document.removeEventListener("touchstart", ft), document.removeEventListener("keydown", $n));
}), {
  focusReason: Zt,
  lastUserFocusTimestamp: _t,
  lastAutomatedFocusTimestamp: Qt
}), dt = (e) => new CustomEvent(pa, {
  ...va,
  detail: e
});
let De = [];
const Nn = (e) => {
  e.code === U.esc && De.forEach((t) => t(e));
}, _a = (e) => {
  me(() => {
    De.length === 0 && document.addEventListener("keydown", Nn), Oe && De.push(e);
  }), ve(() => {
    De = De.filter((t) => t !== e), De.length === 0 && Oe && document.removeEventListener("keydown", Nn);
  });
}, Ta = $({
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
    Rn,
    An,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = k();
    let o, r;
    const { focusReason: a } = Ea();
    _a((c) => {
      e.trapped && !s.paused && t("release-requested", c);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (c) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: v, altKey: y, ctrlKey: g, metaKey: E, currentTarget: R, shiftKey: w } = c, { loop: b } = e, T = v === U.tab && !y && !g && !E, S = document.activeElement;
      if (T && S) {
        const I = R, [A, M] = ga(I);
        if (A && M) {
          if (!w && S === M) {
            const B = dt({
              focusReason: a.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (c.preventDefault(), b && Ee(A, !0));
          } else if (w && [A, I].includes(S)) {
            const B = dt({
              focusReason: a.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (c.preventDefault(), b && Ee(M, !0));
          }
        } else if (S === I) {
          const B = dt({
            focusReason: a.value
          });
          t("focusout-prevented", B), B.defaultPrevented || c.preventDefault();
        }
      }
    };
    ae(_o, {
      focusTrapRef: n,
      onKeydown: i
    }), V(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), V([n], ([c], [v]) => {
      c && (c.addEventListener("keydown", i), c.addEventListener("focusin", d), c.addEventListener("focusout", f)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", d), v.removeEventListener("focusout", f));
    });
    const l = (c) => {
      t(Rn, c);
    }, u = (c) => t(An, c), d = (c) => {
      const v = p(n);
      if (!v)
        return;
      const y = c.target, g = c.relatedTarget, E = y && v.contains(y);
      e.trapped || g && v.contains(g) || (o = g), E && t("focusin", c), !s.paused && e.trapped && (E ? r = y : Ee(r, !0));
    }, f = (c) => {
      const v = p(n);
      if (!(s.paused || !v))
        if (e.trapped) {
          const y = c.relatedTarget;
          !Vt(y) && !v.contains(y) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const g = dt({
                focusReason: a.value
              });
              t("focusout-prevented", g), g.defaultPrevented || Ee(r, !0);
            }
          }, 0);
        } else {
          const y = c.target;
          y && v.contains(y) || t("focusout", c);
        }
    };
    async function m() {
      await nt();
      const c = p(n);
      if (c) {
        Mn.push(s);
        const v = c.contains(document.activeElement) ? o : document.activeElement;
        if (o = v, !c.contains(v)) {
          const g = new Event(It, In);
          c.addEventListener(It, l), c.dispatchEvent(g), g.defaultPrevented || nt(() => {
            let E = e.focusStartEl;
            Rr(E) || (Ee(E), document.activeElement !== E && (E = "first")), E === "first" && ya(To(c), !0), (document.activeElement === v || E === "container") && Ee(c);
          });
        }
      }
    }
    function h() {
      const c = p(n);
      if (c) {
        c.removeEventListener(It, l);
        const v = new CustomEvent(Rt, {
          ...In,
          detail: {
            focusReason: a.value
          }
        });
        c.addEventListener(Rt, u), c.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !wa() || c.contains(document.activeElement)) && Ee(o ?? document.body), c.removeEventListener(Rt, u), Mn.remove(s);
      }
    }
    return me(() => {
      e.trapped && m(), V(() => e.trapped, (c) => {
        c ? m() : h();
      });
    }), ve(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function Sa(e, t, n, o, r, a) {
  return H(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Ca = /* @__PURE__ */ W(Ta, [["render", Sa], ["__file", "focus-trap.vue"]]), oe = "top", fe = "bottom", de = "right", re = "left", Xt = "auto", at = [oe, fe, de, re], He = "start", ot = "end", Oa = "clippingParents", So = "viewport", Ue = "popper", ka = "reference", Bn = at.reduce(function(e, t) {
  return e.concat([t + "-" + He, t + "-" + ot]);
}, []), en = [].concat(at, [Xt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + He, t + "-" + ot]);
}, []), Ia = "beforeRead", Ra = "read", Aa = "afterRead", Fa = "beforeMain", Pa = "main", Ma = "afterMain", $a = "beforeWrite", Na = "write", Ba = "afterWrite", La = [Ia, Ra, Aa, Fa, Pa, Ma, $a, Na, Ba];
function ge(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function le(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function $e(e) {
  var t = le(e).Element;
  return e instanceof t || e instanceof Element;
}
function ce(e) {
  var t = le(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function tn(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = le(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function xa(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !ce(a) || !ge(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(s) {
      var i = r[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Da(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !ce(r) || !ge(r) || (Object.assign(r.style, i), Object.keys(a).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Co = { name: "applyStyles", enabled: !0, phase: "write", fn: xa, effect: Da, requires: ["computeStyles"] };
function he(e) {
  return e.split("-")[0];
}
var Me = Math.max, yt = Math.min, ze = Math.round;
function Dt() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Oo() {
  return !/^((?!chrome|android).)*safari/i.test(Dt());
}
function je(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  t && ce(e) && (r = e.offsetWidth > 0 && ze(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ze(o.height) / e.offsetHeight || 1);
  var s = $e(e) ? le(e) : window, i = s.visualViewport, l = !Oo() && n, u = (o.left + (l && i ? i.offsetLeft : 0)) / r, d = (o.top + (l && i ? i.offsetTop : 0)) / a, f = o.width / r, m = o.height / a;
  return { width: f, height: m, top: d, right: u + f, bottom: d + m, left: u, x: u, y: d };
}
function nn(e) {
  var t = je(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function ko(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && tn(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function _e(e) {
  return le(e).getComputedStyle(e);
}
function Ha(e) {
  return ["table", "td", "th"].indexOf(ge(e)) >= 0;
}
function Ie(e) {
  return (($e(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Tt(e) {
  return ge(e) === "html" ? e : e.assignedSlot || e.parentNode || (tn(e) ? e.host : null) || Ie(e);
}
function Ln(e) {
  return !ce(e) || _e(e).position === "fixed" ? null : e.offsetParent;
}
function za(e) {
  var t = /firefox/i.test(Dt()), n = /Trident/i.test(Dt());
  if (n && ce(e)) {
    var o = _e(e);
    if (o.position === "fixed") return null;
  }
  var r = Tt(e);
  for (tn(r) && (r = r.host); ce(r) && ["html", "body"].indexOf(ge(r)) < 0; ) {
    var a = _e(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function st(e) {
  for (var t = le(e), n = Ln(e); n && Ha(n) && _e(n).position === "static"; ) n = Ln(n);
  return n && (ge(n) === "html" || ge(n) === "body" && _e(n).position === "static") ? t : n || za(e) || t;
}
function on(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ze(e, t, n) {
  return Me(e, yt(t, n));
}
function ja(e, t, n) {
  var o = Ze(e, t, n);
  return o > n ? n : o;
}
function Io() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ro(e) {
  return Object.assign({}, Io(), e);
}
function Ao(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Ka = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ro(typeof e != "number" ? e : Ao(e, at));
};
function Va(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = he(n.placement), l = on(i), u = [re, de].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var f = Ka(r.padding, n), m = nn(a), h = l === "y" ? oe : re, c = l === "y" ? fe : de, v = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], y = s[l] - n.rects.reference[l], g = st(a), E = g ? l === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, R = v / 2 - y / 2, w = f[h], b = E - m[d] - f[c], T = E / 2 - m[d] / 2 + R, S = Ze(w, T, b), I = l;
    n.modifiersData[o] = (t = {}, t[I] = S, t.centerOffset = S - T, t);
  }
}
function Wa(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || ko(t.elements.popper, r) && (t.elements.arrow = r));
}
var Ga = { name: "arrow", enabled: !0, phase: "main", fn: Va, effect: Wa, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ke(e) {
  return e.split("-")[1];
}
var Ua = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ya(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: ze(n * r) / r || 0, y: ze(o * r) / r || 0 };
}
function xn(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, m = s.x, h = m === void 0 ? 0 : m, c = s.y, v = c === void 0 ? 0 : c, y = typeof d == "function" ? d({ x: h, y: v }) : { x: h, y: v };
  h = y.x, v = y.y;
  var g = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), R = re, w = oe, b = window;
  if (u) {
    var T = st(n), S = "clientHeight", I = "clientWidth";
    if (T === le(n) && (T = Ie(n), _e(T).position !== "static" && i === "absolute" && (S = "scrollHeight", I = "scrollWidth")), T = T, r === oe || (r === re || r === de) && a === ot) {
      w = fe;
      var A = f && T === b && b.visualViewport ? b.visualViewport.height : T[S];
      v -= A - o.height, v *= l ? 1 : -1;
    }
    if (r === re || (r === oe || r === fe) && a === ot) {
      R = de;
      var M = f && T === b && b.visualViewport ? b.visualViewport.width : T[I];
      h -= M - o.width, h *= l ? 1 : -1;
    }
  }
  var L = Object.assign({ position: i }, u && Ua), B = d === !0 ? Ya({ x: h, y: v }, le(n)) : { x: h, y: v };
  if (h = B.x, v = B.y, l) {
    var x;
    return Object.assign({}, L, (x = {}, x[w] = E ? "0" : "", x[R] = g ? "0" : "", x.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", x));
  }
  return Object.assign({}, L, (t = {}, t[w] = E ? v + "px" : "", t[R] = g ? h + "px" : "", t.transform = "", t));
}
function qa(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: he(t.placement), variation: Ke(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, xn(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, xn(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Fo = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: qa, data: {} }, pt = { passive: !0 };
function Ja(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, s = o.resize, i = s === void 0 ? !0 : s, l = le(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, pt);
  }), i && l.addEventListener("resize", n.update, pt), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, pt);
    }), i && l.removeEventListener("resize", n.update, pt);
  };
}
var Po = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Ja, data: {} }, Za = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Za[t];
  });
}
var Qa = { start: "end", end: "start" };
function Dn(e) {
  return e.replace(/start|end/g, function(t) {
    return Qa[t];
  });
}
function rn(e) {
  var t = le(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function an(e) {
  return je(Ie(e)).left + rn(e).scrollLeft;
}
function Xa(e, t) {
  var n = le(e), o = Ie(e), r = n.visualViewport, a = o.clientWidth, s = o.clientHeight, i = 0, l = 0;
  if (r) {
    a = r.width, s = r.height;
    var u = Oo();
    (u || !u && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return { width: a, height: s, x: i + an(e), y: l };
}
function es(e) {
  var t, n = Ie(e), o = rn(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = Me(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Me(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + an(e), l = -o.scrollTop;
  return _e(r || n).direction === "rtl" && (i += Me(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function sn(e) {
  var t = _e(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Mo(e) {
  return ["html", "body", "#document"].indexOf(ge(e)) >= 0 ? e.ownerDocument.body : ce(e) && sn(e) ? e : Mo(Tt(e));
}
function Qe(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Mo(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = le(o), s = r ? [a].concat(a.visualViewport || [], sn(o) ? o : []) : o, i = t.concat(s);
  return r ? i : i.concat(Qe(Tt(s)));
}
function Ht(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function ts(e, t) {
  var n = je(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Hn(e, t, n) {
  return t === So ? Ht(Xa(e, n)) : $e(t) ? ts(t, n) : Ht(es(Ie(e)));
}
function ns(e) {
  var t = Qe(Tt(e)), n = ["absolute", "fixed"].indexOf(_e(e).position) >= 0, o = n && ce(e) ? st(e) : e;
  return $e(o) ? t.filter(function(r) {
    return $e(r) && ko(r, o) && ge(r) !== "body";
  }) : [];
}
function os(e, t, n, o) {
  var r = t === "clippingParents" ? ns(e) : [].concat(t), a = [].concat(r, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = Hn(e, u, o);
    return l.top = Me(d.top, l.top), l.right = yt(d.right, l.right), l.bottom = yt(d.bottom, l.bottom), l.left = Me(d.left, l.left), l;
  }, Hn(e, s, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function $o(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? he(o) : null, a = o ? Ke(o) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case oe:
      l = { x: s, y: t.y - n.height };
      break;
    case fe:
      l = { x: s, y: t.y + t.height };
      break;
    case de:
      l = { x: t.x + t.width, y: i };
      break;
    case re:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? on(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case He:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case ot:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function rt(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? Oa : i, u = n.rootBoundary, d = u === void 0 ? So : u, f = n.elementContext, m = f === void 0 ? Ue : f, h = n.altBoundary, c = h === void 0 ? !1 : h, v = n.padding, y = v === void 0 ? 0 : v, g = Ro(typeof y != "number" ? y : Ao(y, at)), E = m === Ue ? ka : Ue, R = e.rects.popper, w = e.elements[c ? E : m], b = os($e(w) ? w : w.contextElement || Ie(e.elements.popper), l, d, s), T = je(e.elements.reference), S = $o({ reference: T, element: R, placement: r }), I = Ht(Object.assign({}, R, S)), A = m === Ue ? I : T, M = { top: b.top - A.top + g.top, bottom: A.bottom - b.bottom + g.bottom, left: b.left - A.left + g.left, right: A.right - b.right + g.right }, L = e.modifiersData.offset;
  if (m === Ue && L) {
    var B = L[r];
    Object.keys(M).forEach(function(x) {
      var se = [de, fe].indexOf(x) >= 0 ? 1 : -1, Y = [oe, fe].indexOf(x) >= 0 ? "y" : "x";
      M[x] += B[Y] * se;
    });
  }
  return M;
}
function rs(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? en : l, d = Ke(o), f = d ? i ? Bn : Bn.filter(function(c) {
    return Ke(c) === d;
  }) : at, m = f.filter(function(c) {
    return u.indexOf(c) >= 0;
  });
  m.length === 0 && (m = f);
  var h = m.reduce(function(c, v) {
    return c[v] = rt(e, { placement: v, boundary: r, rootBoundary: a, padding: s })[he(v)], c;
  }, {});
  return Object.keys(h).sort(function(c, v) {
    return h[c] - h[v];
  });
}
function as(e) {
  if (he(e) === Xt) return [];
  var t = gt(e);
  return [Dn(e), t, Dn(t)];
}
function ss(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, m = n.altBoundary, h = n.flipVariations, c = h === void 0 ? !0 : h, v = n.allowedAutoPlacements, y = t.options.placement, g = he(y), E = g === y, R = l || (E || !c ? [gt(y)] : as(y)), w = [y].concat(R).reduce(function(Re, ye) {
      return Re.concat(he(ye) === Xt ? rs(t, { placement: ye, boundary: d, rootBoundary: f, padding: u, flipVariations: c, allowedAutoPlacements: v }) : ye);
    }, []), b = t.rects.reference, T = t.rects.popper, S = /* @__PURE__ */ new Map(), I = !0, A = w[0], M = 0; M < w.length; M++) {
      var L = w[M], B = he(L), x = Ke(L) === He, se = [oe, fe].indexOf(B) >= 0, Y = se ? "width" : "height", O = rt(t, { placement: L, boundary: d, rootBoundary: f, altBoundary: m, padding: u }), _ = se ? x ? de : re : x ? fe : oe;
      b[Y] > T[Y] && (_ = gt(_));
      var j = gt(_), Q = [];
      if (a && Q.push(O[B] <= 0), i && Q.push(O[_] <= 0, O[j] <= 0), Q.every(function(Re) {
        return Re;
      })) {
        A = L, I = !1;
        break;
      }
      S.set(L, Q);
    }
    if (I) for (var be = c ? 3 : 1, Ne = function(Re) {
      var ye = w.find(function(lt) {
        var Ge = S.get(lt);
        if (Ge) return Ge.slice(0, Re).every(function(Be) {
          return Be;
        });
      });
      if (ye) return A = ye, "break";
    }, We = be; We > 0; We--) {
      var it = Ne(We);
      if (it === "break") break;
    }
    t.placement !== A && (t.modifiersData[o]._skip = !0, t.placement = A, t.reset = !0);
  }
}
var is = { name: "flip", enabled: !0, phase: "main", fn: ss, requiresIfExists: ["offset"], data: { _skip: !1 } };
function zn(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function jn(e) {
  return [oe, de, fe, re].some(function(t) {
    return e[t] >= 0;
  });
}
function ls(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, s = rt(t, { elementContext: "reference" }), i = rt(t, { altBoundary: !0 }), l = zn(s, o), u = zn(i, r, a), d = jn(l), f = jn(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var us = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: ls };
function cs(e, t, n) {
  var o = he(e), r = [re, oe].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * r, [re, de].indexOf(o) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function fs(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, s = en.reduce(function(d, f) {
    return d[f] = cs(f, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var ds = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: fs };
function ps(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = $o({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var No = { name: "popperOffsets", enabled: !0, phase: "read", fn: ps, data: {} };
function vs(e) {
  return e === "x" ? "y" : "x";
}
function hs(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, m = n.tether, h = m === void 0 ? !0 : m, c = n.tetherOffset, v = c === void 0 ? 0 : c, y = rt(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: d }), g = he(t.placement), E = Ke(t.placement), R = !E, w = on(g), b = vs(w), T = t.modifiersData.popperOffsets, S = t.rects.reference, I = t.rects.popper, A = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, M = typeof A == "number" ? { mainAxis: A, altAxis: A } : Object.assign({ mainAxis: 0, altAxis: 0 }, A), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = { x: 0, y: 0 };
  if (T) {
    if (a) {
      var x, se = w === "y" ? oe : re, Y = w === "y" ? fe : de, O = w === "y" ? "height" : "width", _ = T[w], j = _ + y[se], Q = _ - y[Y], be = h ? -I[O] / 2 : 0, Ne = E === He ? S[O] : I[O], We = E === He ? -I[O] : -S[O], it = t.elements.arrow, Re = h && it ? nn(it) : { width: 0, height: 0 }, ye = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Io(), lt = ye[se], Ge = ye[Y], Be = Ze(0, S[O], Re[O]), Zo = R ? S[O] / 2 - be - Be - lt - M.mainAxis : Ne - Be - lt - M.mainAxis, Qo = R ? -S[O] / 2 + be + Be + Ge + M.mainAxis : We + Be + Ge + M.mainAxis, Ct = t.elements.arrow && st(t.elements.arrow), Xo = Ct ? w === "y" ? Ct.clientTop || 0 : Ct.clientLeft || 0 : 0, vn = (x = L?.[w]) != null ? x : 0, er = _ + Zo - vn - Xo, tr = _ + Qo - vn, hn = Ze(h ? yt(j, er) : j, _, h ? Me(Q, tr) : Q);
      T[w] = hn, B[w] = hn - _;
    }
    if (i) {
      var gn, nr = w === "x" ? oe : re, or = w === "x" ? fe : de, Ae = T[b], ut = b === "y" ? "height" : "width", mn = Ae + y[nr], bn = Ae - y[or], Ot = [oe, re].indexOf(g) !== -1, yn = (gn = L?.[b]) != null ? gn : 0, wn = Ot ? mn : Ae - S[ut] - I[ut] - yn + M.altAxis, En = Ot ? Ae + S[ut] + I[ut] - yn - M.altAxis : bn, _n = h && Ot ? ja(wn, Ae, En) : Ze(h ? wn : mn, Ae, h ? En : bn);
      T[b] = _n, B[b] = _n - Ae;
    }
    t.modifiersData[o] = B;
  }
}
var gs = { name: "preventOverflow", enabled: !0, phase: "main", fn: hs, requiresIfExists: ["offset"] };
function ms(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function bs(e) {
  return e === le(e) || !ce(e) ? rn(e) : ms(e);
}
function ys(e) {
  var t = e.getBoundingClientRect(), n = ze(t.width) / e.offsetWidth || 1, o = ze(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function ws(e, t, n) {
  n === void 0 && (n = !1);
  var o = ce(t), r = ce(t) && ys(t), a = Ie(t), s = je(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((ge(t) !== "body" || sn(a)) && (i = bs(t)), ce(t) ? (l = je(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = an(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function Es(e) {
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
function _s(e) {
  var t = Es(e);
  return La.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Ts(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Ss(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Kn = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Vn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function ln(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? Kn : r;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Kn, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], f = !1, m = { state: u, setOptions: function(v) {
      var y = typeof v == "function" ? v(u.options) : v;
      c(), u.options = Object.assign({}, a, u.options, y), u.scrollParents = { reference: $e(s) ? Qe(s) : s.contextElement ? Qe(s.contextElement) : [], popper: Qe(i) };
      var g = _s(Ss([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = g.filter(function(E) {
        return E.enabled;
      }), h(), m.update();
    }, forceUpdate: function() {
      if (!f) {
        var v = u.elements, y = v.reference, g = v.popper;
        if (Vn(y, g)) {
          u.rects = { reference: ws(y, st(g), u.options.strategy === "fixed"), popper: nn(g) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(I) {
            return u.modifiersData[I.name] = Object.assign({}, I.data);
          });
          for (var E = 0; E < u.orderedModifiers.length; E++) {
            if (u.reset === !0) {
              u.reset = !1, E = -1;
              continue;
            }
            var R = u.orderedModifiers[E], w = R.fn, b = R.options, T = b === void 0 ? {} : b, S = R.name;
            typeof w == "function" && (u = w({ state: u, options: T, name: S, instance: m }) || u);
          }
        }
      }
    }, update: Ts(function() {
      return new Promise(function(v) {
        m.forceUpdate(), v(u);
      });
    }), destroy: function() {
      c(), f = !0;
    } };
    if (!Vn(s, i)) return m;
    m.setOptions(l).then(function(v) {
      !f && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function h() {
      u.orderedModifiers.forEach(function(v) {
        var y = v.name, g = v.options, E = g === void 0 ? {} : g, R = v.effect;
        if (typeof R == "function") {
          var w = R({ state: u, name: y, instance: m, options: E }), b = function() {
          };
          d.push(w || b);
        }
      });
    }
    function c() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return m;
  };
}
ln();
var Cs = [Po, No, Fo, Co];
ln({ defaultModifiers: Cs });
var Os = [Po, No, Fo, Co, ds, is, gs, Ga, us], ks = ln({ defaultModifiers: Os });
const Is = ["fixed", "absolute"], Rs = q({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: P(Array),
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
    values: en,
    default: "bottom"
  },
  popperOptions: {
    type: P(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Is,
    default: "absolute"
  }
}), Bo = q({
  ...Rs,
  id: String,
  style: {
    type: P([String, Array, Object])
  },
  className: {
    type: P([String, Array, Object])
  },
  effect: {
    type: P(String),
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
    type: P([String, Array, Object])
  },
  popperStyle: {
    type: P([String, Array, Object])
  },
  referenceEl: {
    type: P(Object)
  },
  triggerTargetEl: {
    type: P(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Kt(["ariaLabel"])
}), As = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Fs = (e, t) => {
  const n = k(!1), o = k();
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
}, Ps = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...$s(e), ...t]
  };
  return Ns(a, r?.modifiers), a;
}, Ms = (e) => {
  if (Oe)
    return no(e);
};
function $s(e) {
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
function Ns(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Bs = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = Ls(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, r = C(() => {
    const { onFirstUpdate: l, placement: u, strategy: d, modifiers: f } = p(n);
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
  }), a = Ar(), s = k({
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
  }), i = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return V(r, (l) => {
    const u = p(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), V([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = ks(l, u, p(r)));
  }), ve(() => {
    i();
  }), {
    state: C(() => {
      var l;
      return { ...((l = p(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: C(() => p(s).styles),
    attributes: C(() => p(s).attributes),
    update: () => {
      var l;
      return (l = p(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = p(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: C(() => p(a))
  };
};
function Ls(e) {
  const t = Object.keys(e.elements), n = Tn(t.map((r) => [r, e.styles[r] || {}])), o = Tn(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const xs = 0, Ds = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = D(Jt, void 0), a = k(), s = k(), i = C(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = C(() => {
    var g;
    const E = p(a), R = (g = p(s)) != null ? g : xs;
    return {
      name: "arrow",
      enabled: !zr(E),
      options: {
        element: E,
        padding: R
      }
    };
  }), u = C(() => ({
    onFirstUpdate: () => {
      c();
    },
    ...Ps(e, [
      p(l),
      p(i)
    ])
  })), d = C(() => Ms(e.referenceEl) || p(o)), { attributes: f, state: m, styles: h, update: c, forceUpdate: v, instanceRef: y } = Bs(d, n, u);
  return V(y, (g) => t.value = g), me(() => {
    V(() => {
      var g;
      return (g = p(d)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      c();
    });
  }), {
    attributes: f,
    arrowRef: a,
    contentRef: n,
    instanceRef: y,
    state: m,
    styles: h,
    role: r,
    forceUpdate: v,
    update: c
  };
}, Hs = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = ir(), a = ue("popper"), s = C(() => p(t).popper), i = k(Se(e.zIndex) ? e.zIndex : r()), l = C(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = C(() => [
    { zIndex: p(i) },
    p(n).popper,
    e.popperStyle || {}
  ]), d = C(() => o.value === "dialog" ? "false" : void 0), f = C(() => p(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: f,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Se(e.zIndex) ? e.zIndex : r();
    }
  };
}, zs = $({
  name: "ElPopperContent"
}), js = /* @__PURE__ */ $({
  ...zs,
  props: Bo,
  emits: As,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = Fs(o, n), { attributes: f, arrowRef: m, contentRef: h, styles: c, instanceRef: v, role: y, update: g } = Ds(o), {
      ariaModal: E,
      arrowStyle: R,
      contentAttrs: w,
      contentClass: b,
      contentStyle: T,
      updateZIndex: S
    } = Hs(o, {
      styles: c,
      attributes: f,
      role: y
    }), I = D(Sn, void 0), A = k();
    ae(vo, {
      arrowStyle: R,
      arrowRef: m,
      arrowOffset: A
    }), I && ae(Sn, {
      ...I,
      addInputId: Nt,
      removeInputId: Nt
    });
    let M;
    const L = (x = !0) => {
      g(), x && S();
    }, B = () => {
      L(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return me(() => {
      V(() => o.triggerTargetEl, (x, se) => {
        M?.(), M = void 0;
        const Y = p(x || h.value), O = p(se || h.value);
        Pe(Y) && (M = V([y, () => o.ariaLabel, E, () => o.id], (_) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((j, Q) => {
            Vt(_[Q]) ? Y.removeAttribute(j) : Y.setAttribute(j, _[Q]);
          });
        }, { immediate: !0 })), O !== Y && Pe(O) && ["role", "aria-label", "aria-modal", "id"].forEach((_) => {
          O.removeAttribute(_);
        });
      }, { immediate: !0 }), V(() => o.visible, B, { immediate: !0 });
    }), ve(() => {
      M?.(), M = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: v,
      updatePopper: L,
      contentStyle: T
    }), (x, se) => (F(), J("div", ke({
      ref_key: "contentRef",
      ref: h
    }, p(w), {
      style: p(T),
      class: p(b),
      tabindex: "-1",
      onMouseenter: (Y) => x.$emit("mouseenter", Y),
      onMouseleave: (Y) => x.$emit("mouseleave", Y)
    }), [
      z(p(Ca), {
        trapped: p(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": p(h),
        "focus-start-el": p(r),
        onFocusAfterTrapped: p(i),
        onFocusAfterReleased: p(s),
        onFocusin: p(l),
        onFocusoutPrevented: p(u),
        onReleaseRequested: p(d)
      }, {
        default: N(() => [
          H(x.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Ks = /* @__PURE__ */ W(js, [["__file", "content.vue"]]);
const Vs = Ve(ra), un = Symbol("elTooltip");
function Wn() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return lr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Ws = q({
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
}), Gs = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: a } = Wn(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Wn();
  return {
    onOpen: (d) => {
      a(() => {
        o(d);
        const f = p(n);
        Se(f) && f > 0 && s(() => {
          r(d);
        }, f);
      }, p(e));
    },
    onClose: (d) => {
      i(), a(() => {
        r(d);
      }, p(t));
    }
  };
}, wt = q({
  ...Ws,
  ...Bo,
  appendTo: {
    type: P([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: P(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Kt(["ariaLabel"])
}), cn = q({
  ...bo,
  disabled: Boolean,
  trigger: {
    type: P([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: P(Array),
    default: () => [U.enter, U.numpadEnter, U.space]
  }
}), Us = oo({
  type: P(Boolean),
  default: null
}), Ys = oo({
  type: P(Function)
}), qs = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Us,
    [n]: Ys
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
      const m = Yt(), { emit: h } = m, c = m.props, v = C(() => Ye(c[n])), y = C(() => c[e] === null), g = (S) => {
        s.value !== !0 && (s.value = !0, i && (i.value = S), Ye(d) && d(S));
      }, E = (S) => {
        s.value !== !1 && (s.value = !1, i && (i.value = S), Ye(f) && f(S));
      }, R = (S) => {
        if (c.disabled === !0 || Ye(u) && !u())
          return;
        const I = v.value && Oe;
        I && h(t, !0), (y.value || !I) && g(S);
      }, w = (S) => {
        if (c.disabled === !0 || !Oe)
          return;
        const I = v.value && Oe;
        I && h(t, !1), (y.value || !I) && E(S);
      }, b = (S) => {
        ro(S) && (c.disabled && S ? v.value && h(t, !1) : s.value !== S && (S ? g() : E()));
      }, T = () => {
        s.value ? w() : R();
      };
      return V(() => c[e], b), l && m.appContext.config.globalProperties.$route !== void 0 && V(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && s.value && w();
      }), me(() => {
        b(c[e]);
      }), {
        hide: w,
        show: R,
        toggle: T,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: Js,
  useModelToggleEmits: Zs,
  useModelToggle: Qs
} = qs("visible"), Xs = q({
  ...go,
  ...Js,
  ...wt,
  ...cn,
  ...mo,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), ei = [
  ...Zs,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], ti = (e, t) => Fr(e) ? e.includes(t) : e === t, xe = (e, t, n) => (o) => {
  ti(p(e), t) && n(o);
}, G = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e?.(r);
  if (n === !1 || !a)
    return t?.(r);
}, Gn = (e) => (t) => t.pointerType === "mouse" ? e(t) : void 0, ni = $({
  name: "ElTooltipTrigger"
}), oi = /* @__PURE__ */ $({
  ...ni,
  props: cn,
  setup(e, { expose: t }) {
    const n = e, o = ue("tooltip"), { controlled: r, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = D(un, void 0), d = k(null), f = () => {
      if (p(r) || n.disabled)
        return !0;
    }, m = te(n, "trigger"), h = G(f, xe(m, "hover", i)), c = G(f, xe(m, "hover", l)), v = G(f, xe(m, "click", (w) => {
      w.button === 0 && u(w);
    })), y = G(f, xe(m, "focus", i)), g = G(f, xe(m, "focus", l)), E = G(f, xe(m, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), R = G(f, (w) => {
      const { code: b } = w;
      n.triggerKeys.includes(b) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: d
    }), (w, b) => (F(), K(p(da), {
      id: p(a),
      "virtual-ref": w.virtualRef,
      open: p(s),
      "virtual-triggering": w.virtualTriggering,
      class: ee(p(o).e("trigger")),
      onBlur: p(g),
      onClick: p(v),
      onContextmenu: p(E),
      onFocus: p(y),
      onMouseenter: p(h),
      onMouseleave: p(c),
      onKeydown: p(R)
    }, {
      default: N(() => [
        H(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var ri = /* @__PURE__ */ W(oi, [["__file", "trigger.vue"]]);
const ai = q({
  to: {
    type: P([String, Object]),
    required: !0
  },
  disabled: Boolean
}), si = /* @__PURE__ */ $({
  __name: "teleport",
  props: ai,
  setup(e) {
    return (t, n) => t.disabled ? H(t.$slots, "default", { key: 0 }) : (F(), K(Pr, {
      key: 1,
      to: t.to
    }, [
      H(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var ii = /* @__PURE__ */ W(si, [["__file", "teleport.vue"]]);
const li = Ve(ii), Lo = () => {
  const e = ur(), t = cr(), n = C(() => `${e.value}-popper-container-${t.prefix}`), o = C(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, ui = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, ci = () => {
  const { id: e, selector: t } = Lo();
  return Mr(() => {
    Oe && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && ui(e.value);
  }), {
    id: e,
    selector: t
  };
}, fi = $({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), di = /* @__PURE__ */ $({
  ...fi,
  props: wt,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Lo(), r = ue("tooltip"), a = k();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: d,
      onClose: f,
      onOpen: m,
      onShow: h,
      onHide: c,
      onBeforeShow: v,
      onBeforeHide: y
    } = D(un, void 0), g = C(() => n.transition || `${r.namespace.value}-fade-in-linear`), E = C(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    ve(() => {
      s?.();
    });
    const R = C(() => p(E) ? !0 : p(u)), w = C(() => n.disabled ? !1 : p(u)), b = C(() => n.appendTo || o.value), T = C(() => {
      var _;
      return (_ = n.style) != null ? _ : {};
    }), S = k(!0), I = () => {
      c(), O() && Ee(document.body), S.value = !0;
    }, A = () => {
      if (p(i))
        return !0;
    }, M = G(A, () => {
      n.enterable && p(d) === "hover" && m();
    }), L = G(A, () => {
      p(d) === "hover" && f();
    }), B = () => {
      var _, j;
      (j = (_ = a.value) == null ? void 0 : _.updatePopper) == null || j.call(_), v?.();
    }, x = () => {
      y?.();
    }, se = () => {
      h(), s = fr(C(() => {
        var _;
        return (_ = a.value) == null ? void 0 : _.popperContentRef;
      }), () => {
        if (p(i))
          return;
        p(d) !== "hover" && f();
      });
    }, Y = () => {
      n.virtualTriggering || f();
    }, O = (_) => {
      var j;
      const Q = (j = a.value) == null ? void 0 : j.popperContentRef, be = _?.relatedTarget || document.activeElement;
      return Q?.contains(be);
    };
    return V(() => p(u), (_) => {
      _ ? S.value = !1 : s?.();
    }, {
      flush: "post"
    }), V(() => n.content, () => {
      var _, j;
      (j = (_ = a.value) == null ? void 0 : _.updatePopper) == null || j.call(_);
    }), t({
      contentRef: a,
      isFocusInsideContent: O
    }), (_, j) => (F(), K(p(li), {
      disabled: !_.teleported,
      to: p(b)
    }, {
      default: N(() => [
        z(lo, {
          name: p(g),
          onAfterLeave: I,
          onBeforeEnter: B,
          onAfterEnter: se,
          onBeforeLeave: x
        }, {
          default: N(() => [
            p(R) ? Ut((F(), K(p(Ks), ke({
              key: 0,
              id: p(l),
              ref_key: "contentRef",
              ref: a
            }, _.$attrs, {
              "aria-label": _.ariaLabel,
              "aria-hidden": S.value,
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
              "popper-style": [_.popperStyle, p(T)],
              "reference-el": _.referenceEl,
              "trigger-target-el": _.triggerTargetEl,
              visible: p(w),
              "z-index": _.zIndex,
              onMouseenter: p(M),
              onMouseleave: p(L),
              onBlur: Y,
              onClose: p(f)
            }), {
              default: N(() => [
                H(_.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [io, p(w)]
            ]) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var pi = /* @__PURE__ */ W(di, [["__file", "content.vue"]]);
const vi = $({
  name: "ElTooltip"
}), hi = /* @__PURE__ */ $({
  ...vi,
  props: Xs,
  emits: ei,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    ci();
    const r = Wt(), a = k(), s = k(), i = () => {
      var g;
      const E = p(a);
      E && ((g = E.popperInstanceRef) == null || g.update());
    }, l = k(!1), u = k(), { show: d, hide: f, hasUpdateHandler: m } = Qs({
      indicator: l,
      toggleReason: u
    }), { onOpen: h, onClose: c } = Gs({
      showAfter: te(o, "showAfter"),
      hideAfter: te(o, "hideAfter"),
      autoClose: te(o, "autoClose"),
      open: d,
      close: f
    }), v = C(() => ro(o.visible) && !m.value);
    ae(un, {
      controlled: v,
      id: r,
      open: po(l),
      trigger: te(o, "trigger"),
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
      updatePopper: i
    }), V(() => o.disabled, (g) => {
      g && l.value && (l.value = !1);
    });
    const y = (g) => {
      var E;
      return (E = s.value) == null ? void 0 : E.isFocusInsideContent(g);
    };
    return $r(() => l.value && f()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: y,
      updatePopper: i,
      onOpen: h,
      onClose: c,
      hide: f
    }), (g, E) => (F(), K(p(Vs), {
      ref_key: "popperRef",
      ref: a,
      role: g.role
    }, {
      default: N(() => [
        z(ri, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: N(() => [
            g.$slots.default ? H(g.$slots, "default", { key: 0 }) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        z(pi, {
          ref_key: "contentRef",
          ref: s,
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
            H(g.$slots, "content", {}, () => [
              g.rawContent ? (F(), J("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, ["innerHTML"])) : (F(), J("span", { key: 1 }, qe(g.content), 1))
            ]),
            g.showArrow ? (F(), K(p(ia), {
              key: 0,
              "arrow-offset": g.arrowOffset
            }, null, 8, ["arrow-offset"])) : ne("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var gi = /* @__PURE__ */ W(hi, [["__file", "tooltip.vue"]]);
const mi = Ve(gi), xo = Symbol("buttonGroupContextKey"), bi = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: a = "API" }, s) => {
  V(() => p(s), (i) => {
    i && Xe(n, `[${a}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, yi = (e, t) => {
  bi({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, C(() => e.type === "text"));
  const n = D(xo, void 0), o = dr("button"), { form: r } = pr(), a = ao(C(() => n?.size)), s = so(), i = k(), l = Nr(), u = C(() => e.type || n?.type || ""), d = C(() => {
    var c, v, y;
    return (y = (v = e.autoInsertSpace) != null ? v : (c = o.value) == null ? void 0 : c.autoInsertSpace) != null ? y : !1;
  }), f = C(() => e.tag === "button" ? {
    ariaDisabled: s.value || e.loading,
    disabled: s.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), m = C(() => {
    var c;
    const v = (c = l.default) == null ? void 0 : c.call(l);
    if (d.value && v?.length === 1) {
      const y = v[0];
      if (y?.type === fo) {
        const g = y.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(g.trim());
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
    shouldAddSpace: m,
    handleClick: (c) => {
      if (s.value || e.loading) {
        c.stopPropagation();
        return;
      }
      e.nativeType === "reset" && r?.resetFields(), t("click", c);
    }
  };
}, wi = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Ei = ["button", "submit", "reset"], zt = q({
  size: hr,
  disabled: Boolean,
  type: {
    type: String,
    values: wi,
    default: ""
  },
  icon: {
    type: $t
  },
  nativeType: {
    type: String,
    values: Ei,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: $t,
    default: () => vr
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
    type: P([String, Object]),
    default: "button"
  }
}), _i = {
  click: (e) => e instanceof MouseEvent
};
function Z(e, t) {
  Ti(e) && (e = "100%");
  var n = Si(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function vt(e) {
  return Math.min(1, Math.max(0, e));
}
function Ti(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Si(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Do(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ht(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Fe(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Ci(e, t, n) {
  return {
    r: Z(e, 255) * 255,
    g: Z(t, 255) * 255,
    b: Z(n, 255) * 255
  };
}
function Un(e, t, n) {
  e = Z(e, 255), t = Z(t, 255), n = Z(n, 255);
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
function At(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Oi(e, t, n) {
  var o, r, a;
  if (e = Z(e, 360), t = Z(t, 100), n = Z(n, 100), t === 0)
    r = n, a = n, o = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - s;
    o = At(i, s, e + 1 / 3), r = At(i, s, e), a = At(i, s, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: a * 255 };
}
function Yn(e, t, n) {
  e = Z(e, 255), t = Z(t, 255), n = Z(n, 255);
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
function ki(e, t, n) {
  e = Z(e, 360) * 6, t = Z(t, 100), n = Z(n, 100);
  var o = Math.floor(e), r = e - o, a = n * (1 - t), s = n * (1 - r * t), i = n * (1 - (1 - r) * t), l = o % 6, u = [n, s, a, a, i, n][l], d = [i, n, n, s, a, a][l], f = [a, a, i, n, n, s][l];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function qn(e, t, n, o) {
  var r = [
    Fe(Math.round(e).toString(16)),
    Fe(Math.round(t).toString(16)),
    Fe(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function Ii(e, t, n, o, r) {
  var a = [
    Fe(Math.round(e).toString(16)),
    Fe(Math.round(t).toString(16)),
    Fe(Math.round(n).toString(16)),
    Fe(Ri(o))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Ri(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Jn(e) {
  return ie(e) / 255;
}
function ie(e) {
  return parseInt(e, 16);
}
function Ai(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var jt = {
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
function Fi(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, a = null, s = !1, i = !1;
  return typeof e == "string" && (e = $i(e)), typeof e == "object" && (we(e.r) && we(e.g) && we(e.b) ? (t = Ci(e.r, e.g, e.b), s = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : we(e.h) && we(e.s) && we(e.v) ? (o = ht(e.s), r = ht(e.v), t = ki(e.h, o, r), s = !0, i = "hsv") : we(e.h) && we(e.s) && we(e.l) && (o = ht(e.s), a = ht(e.l), t = Oi(e.h, o, a), s = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Do(n), {
    ok: s,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Pi = "[-\\+]?\\d+%?", Mi = "[-\\+]?\\d*\\.\\d+%?", Ce = "(?:".concat(Mi, ")|(?:").concat(Pi, ")"), Ft = "[\\s|\\(]+(".concat(Ce, ")[,|\\s]+(").concat(Ce, ")[,|\\s]+(").concat(Ce, ")\\s*\\)?"), Pt = "[\\s|\\(]+(".concat(Ce, ")[,|\\s]+(").concat(Ce, ")[,|\\s]+(").concat(Ce, ")[,|\\s]+(").concat(Ce, ")\\s*\\)?"), pe = {
  CSS_UNIT: new RegExp(Ce),
  rgb: new RegExp("rgb" + Ft),
  rgba: new RegExp("rgba" + Pt),
  hsl: new RegExp("hsl" + Ft),
  hsla: new RegExp("hsla" + Pt),
  hsv: new RegExp("hsv" + Ft),
  hsva: new RegExp("hsva" + Pt),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function $i(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (jt[e])
    e = jt[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = pe.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = pe.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = pe.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = pe.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = pe.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = pe.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = pe.hex8.exec(e), n ? {
    r: ie(n[1]),
    g: ie(n[2]),
    b: ie(n[3]),
    a: Jn(n[4]),
    format: t ? "name" : "hex8"
  } : (n = pe.hex6.exec(e), n ? {
    r: ie(n[1]),
    g: ie(n[2]),
    b: ie(n[3]),
    format: t ? "name" : "hex"
  } : (n = pe.hex4.exec(e), n ? {
    r: ie(n[1] + n[1]),
    g: ie(n[2] + n[2]),
    b: ie(n[3] + n[3]),
    a: Jn(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = pe.hex3.exec(e), n ? {
    r: ie(n[1] + n[1]),
    g: ie(n[2] + n[2]),
    b: ie(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function we(e) {
  return !!pe.CSS_UNIT.exec(String(e));
}
var Ni = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Ai(t)), this.originalInput = t;
      var r = Fi(t);
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
      return this.a = Do(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Yn(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Yn(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Un(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Un(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), qn(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Ii(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Z(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Z(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + qn(this.r, this.g, this.b, !1), n = 0, o = Object.entries(jt); n < o.length; n++) {
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
      return n.l += t / 100, n.l = vt(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = vt(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = vt(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = vt(n.s), new e(n);
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
function Te(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Bi(e) {
  const t = so(), n = ue("button");
  return C(() => {
    let o = {}, r = e.color;
    if (r) {
      const a = r.match(/var\((.*?)\)/);
      a && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(a[1]));
      const s = new Ni(r), i = e.dark ? s.tint(20).toString() : Te(s, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? Te(s, 90) : s.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? Te(s, 50) : s.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Te(s, 90) : s.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? Te(s, 50) : s.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? Te(s, 80) : s.tint(80).toString());
      else {
        const l = e.dark ? Te(s, 30) : s.tint(30).toString(), u = s.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
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
          const d = e.dark ? Te(s, 50) : s.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = d, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = d;
        }
      }
    }
    return o;
  });
}
const Li = $({
  name: "ElButton"
}), xi = /* @__PURE__ */ $({
  ...Li,
  props: zt,
  emits: _i,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Bi(o), a = ue("button"), { _ref: s, _size: i, _type: l, _disabled: u, _props: d, shouldAddSpace: f, handleClick: m } = yi(o, n), h = C(() => [
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
    }), (c, v) => (F(), K(Je(c.tag), ke({
      ref_key: "_ref",
      ref: s
    }, p(d), {
      class: p(h),
      style: p(r),
      onClick: p(m)
    }), {
      default: N(() => [
        c.loading ? (F(), J(Et, { key: 0 }, [
          c.$slots.loading ? H(c.$slots, "loading", { key: 0 }) : (F(), K(p(bt), {
            key: 1,
            class: ee(p(a).is("loading"))
          }, {
            default: N(() => [
              (F(), K(Je(c.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : c.icon || c.$slots.icon ? (F(), K(p(bt), { key: 1 }, {
          default: N(() => [
            c.icon ? (F(), K(Je(c.icon), { key: 0 })) : H(c.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : ne("v-if", !0),
        c.$slots.default ? (F(), J("span", {
          key: 2,
          class: ee({ [p(a).em("text", "expand")]: p(f) })
        }, [
          H(c.$slots, "default")
        ], 2)) : ne("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Di = /* @__PURE__ */ W(xi, [["__file", "button.vue"]]);
const Hi = {
  size: zt.size,
  type: zt.type
}, zi = $({
  name: "ElButtonGroup"
}), ji = /* @__PURE__ */ $({
  ...zi,
  props: Hi,
  setup(e) {
    const t = e;
    ae(xo, uo({
      size: te(t, "size"),
      type: te(t, "type")
    }));
    const n = ue("button");
    return (o, r) => (F(), J("div", {
      class: ee(p(n).b("group"))
    }, [
      H(o.$slots, "default")
    ], 2));
  }
});
var Ho = /* @__PURE__ */ W(ji, [["__file", "button-group.vue"]]);
const zo = Ve(Di, {
  ButtonGroup: Ho
});
Gt(Ho);
const jo = (...e) => (t) => {
  e.forEach((n) => {
    Ye(n) ? n(t) : n.value = t;
  });
}, Ki = /* @__PURE__ */ $({
  inheritAttrs: !1
});
function Vi(e, t, n, o, r, a) {
  return H(e.$slots, "default");
}
var Wi = /* @__PURE__ */ W(Ki, [["render", Vi], ["__file", "collection.vue"]]);
const Gi = /* @__PURE__ */ $({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function Ui(e, t, n, o, r, a) {
  return H(e.$slots, "default");
}
var Yi = /* @__PURE__ */ W(Gi, [["render", Ui], ["__file", "collection-item.vue"]]);
const Ko = "data-el-collection-item", Vo = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, o = Symbol(t), r = Symbol(n), a = {
    ...Wi,
    name: t,
    setup() {
      const i = k(), l = /* @__PURE__ */ new Map();
      ae(o, {
        itemMap: l,
        getItems: () => {
          const d = p(i);
          if (!d)
            return [];
          const f = Array.from(d.querySelectorAll(`[${Ko}]`));
          return [...l.values()].sort((h, c) => f.indexOf(h.ref) - f.indexOf(c.ref));
        },
        collectionRef: i
      });
    }
  }, s = {
    ...Yi,
    name: n,
    setup(i, { attrs: l }) {
      const u = k(), d = D(o, void 0);
      ae(r, {
        collectionItemRef: u
      }), me(() => {
        const f = p(u);
        f && d.itemMap.set(f, {
          ref: f,
          ...l
        });
      }), ve(() => {
        const f = p(u);
        d.itemMap.delete(f);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: o,
    COLLECTION_ITEM_INJECTION_KEY: r,
    ElCollection: a,
    ElCollectionItem: s
  };
}, qi = q({
  style: { type: P([String, Array, Object]) },
  currentTabId: {
    type: P(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: P(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
}), {
  ElCollection: Ji,
  ElCollectionItem: Zi,
  COLLECTION_INJECTION_KEY: fn,
  COLLECTION_ITEM_INJECTION_KEY: Qi
} = Vo("RovingFocusGroup"), dn = Symbol("elRovingFocusGroup"), Wo = Symbol("elRovingFocusGroupItem"), Xi = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
}, el = (e, t) => e, tl = (e, t, n) => {
  const o = el(e.code);
  return Xi[o];
}, nl = (e, t) => e.map((n, o) => e[(o + t) % e.length]), pn = (e) => {
  const { activeElement: t } = document;
  for (const n of e)
    if (n === t || (n.focus(), t !== document.activeElement))
      return;
}, Zn = "currentTabIdChange", Qn = "rovingFocusGroup.entryFocus", ol = { bubbles: !1, cancelable: !0 }, rl = $({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: !1,
  props: qi,
  emits: [Zn, "entryFocus"],
  setup(e, { emit: t }) {
    var n;
    const o = k((n = e.currentTabId || e.defaultCurrentTabId) != null ? n : null), r = k(!1), a = k(!1), s = k(), { getItems: i } = D(fn, void 0), l = C(() => [
      {
        outline: "none"
      },
      e.style
    ]), u = (v) => {
      t(Zn, v);
    }, d = () => {
      r.value = !0;
    }, f = G((v) => {
      var y;
      (y = e.onMousedown) == null || y.call(e, v);
    }, () => {
      a.value = !0;
    }), m = G((v) => {
      var y;
      (y = e.onFocus) == null || y.call(e, v);
    }, (v) => {
      const y = !p(a), { target: g, currentTarget: E } = v;
      if (g === E && y && !p(r)) {
        const R = new Event(Qn, ol);
        if (E?.dispatchEvent(R), !R.defaultPrevented) {
          const w = i().filter((A) => A.focusable), b = w.find((A) => A.active), T = w.find((A) => A.id === p(o)), I = [b, T, ...w].filter(Boolean).map((A) => A.ref);
          pn(I);
        }
      }
      a.value = !1;
    }), h = G((v) => {
      var y;
      (y = e.onBlur) == null || y.call(e, v);
    }, () => {
      r.value = !1;
    }), c = (...v) => {
      t("entryFocus", ...v);
    };
    ae(dn, {
      currentTabbedId: po(o),
      loop: te(e, "loop"),
      tabIndex: C(() => p(r) ? -1 : 0),
      rovingFocusGroupRef: s,
      rovingFocusGroupRootStyle: l,
      orientation: te(e, "orientation"),
      dir: te(e, "dir"),
      onItemFocus: u,
      onItemShiftTab: d,
      onBlur: h,
      onFocus: m,
      onMousedown: f
    }), V(() => e.currentTabId, (v) => {
      o.value = v ?? null;
    }), mt(s, Qn, c);
  }
});
function al(e, t, n, o, r, a) {
  return H(e.$slots, "default");
}
var sl = /* @__PURE__ */ W(rl, [["render", al], ["__file", "roving-focus-group-impl.vue"]]);
const il = $({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: Ji,
    ElRovingFocusGroupImpl: sl
  }
});
function ll(e, t, n, o, r, a) {
  const s = X("el-roving-focus-group-impl"), i = X("el-focus-group-collection");
  return F(), K(i, null, {
    default: N(() => [
      z(s, Br(Lr(e.$attrs)), {
        default: N(() => [
          H(e.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var ul = /* @__PURE__ */ W(il, [["render", ll], ["__file", "roving-focus-group.vue"]]);
const cl = q({
  trigger: cn.trigger,
  triggerKeys: {
    type: P(Array),
    default: () => [
      U.enter,
      U.numpadEnter,
      U.space,
      U.down
    ]
  },
  effect: {
    ...wt.effect,
    default: "light"
  },
  type: {
    type: P(String)
  },
  placement: {
    type: P(String),
    default: "bottom"
  },
  popperOptions: {
    type: P(Object),
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
    type: P([Number, String]),
    default: 0
  },
  maxHeight: {
    type: P([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  role: {
    type: String,
    values: ho,
    default: "menu"
  },
  buttonProps: {
    type: P(Object)
  },
  teleported: wt.teleported,
  persistent: {
    type: Boolean,
    default: !0
  }
}), Go = q({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: $t
  }
}), fl = q({
  onKeydown: { type: P(Function) }
}), dl = [
  U.down,
  U.pageDown,
  U.home
], Uo = [U.up, U.pageUp, U.end], pl = [...dl, ...Uo], {
  ElCollection: vl,
  ElCollectionItem: hl,
  COLLECTION_INJECTION_KEY: gl,
  COLLECTION_ITEM_INJECTION_KEY: ml
} = Vo("Dropdown"), St = Symbol("elDropdown"), { ButtonGroup: bl } = zo, yl = $({
  name: "ElDropdown",
  components: {
    ElButton: zo,
    ElButtonGroup: bl,
    ElScrollbar: ta,
    ElDropdownCollection: vl,
    ElTooltip: mi,
    ElRovingFocusGroup: ul,
    ElOnlyChild: wo,
    ElIcon: bt,
    ArrowDown: gr
  },
  props: cl,
  emits: ["visible-change", "click", "command"],
  setup(e, { emit: t }) {
    const n = Yt(), o = ue("dropdown"), { t: r } = mr(), a = k(), s = k(), i = k(), l = k(), u = k(null), d = k(null), f = k(!1), m = C(() => ({
      maxHeight: Mt(e.maxHeight)
    })), h = C(() => [o.m(w.value)]), c = C(() => Hr(e.trigger)), v = Wt().value, y = C(() => e.id || v);
    V([a, c], ([O, _], [j]) => {
      var Q, be, Ne;
      (Q = j?.$el) != null && Q.removeEventListener && j.$el.removeEventListener("pointerenter", T), (be = O?.$el) != null && be.removeEventListener && O.$el.removeEventListener("pointerenter", T), (Ne = O?.$el) != null && Ne.addEventListener && _.includes("hover") && O.$el.addEventListener("pointerenter", T);
    }, { immediate: !0 }), ve(() => {
      var O, _;
      (_ = (O = a.value) == null ? void 0 : O.$el) != null && _.removeEventListener && a.value.$el.removeEventListener("pointerenter", T);
    });
    function g() {
      E();
    }
    function E() {
      var O;
      (O = i.value) == null || O.onClose();
    }
    function R() {
      var O;
      (O = i.value) == null || O.onOpen();
    }
    const w = ao();
    function b(...O) {
      t("command", ...O);
    }
    function T() {
      var O, _;
      (_ = (O = a.value) == null ? void 0 : O.$el) == null || _.focus();
    }
    function S() {
    }
    function I() {
      const O = p(l);
      c.value.includes("hover") && O?.focus(), d.value = null;
    }
    function A(O) {
      d.value = O;
    }
    function M(O) {
      f.value || (O.preventDefault(), O.stopImmediatePropagation());
    }
    function L() {
      t("visible-change", !0);
    }
    function B(O) {
      var _;
      O?.type === "keydown" && ((_ = l.value) == null || _.focus());
    }
    function x() {
      t("visible-change", !1);
    }
    return ae(St, {
      contentRef: l,
      role: C(() => e.role),
      triggerId: y,
      isUsingKeyboard: f,
      onItemEnter: S,
      onItemLeave: I
    }), ae("elDropdown", {
      instance: n,
      dropdownSize: w,
      handleClick: g,
      commandHandler: b,
      trigger: te(e, "trigger"),
      hideOnClick: te(e, "hideOnClick")
    }), {
      t: r,
      ns: o,
      scrollbar: u,
      wrapStyle: m,
      dropdownTriggerKls: h,
      dropdownSize: w,
      triggerId: y,
      currentTabId: d,
      handleCurrentTabIdChange: A,
      handlerMainButtonClick: (O) => {
        t("click", O);
      },
      handleEntryFocus: M,
      handleClose: E,
      handleOpen: R,
      handleBeforeShowTooltip: L,
      handleShowTooltip: B,
      handleBeforeHideTooltip: x,
      onFocusAfterTrapped: (O) => {
        var _, j;
        O.preventDefault(), (j = (_ = l.value) == null ? void 0 : _.focus) == null || j.call(_, {
          preventScroll: !0
        });
      },
      popperRef: i,
      contentRef: l,
      triggeringElementRef: a,
      referenceElementRef: s
    };
  }
});
function wl(e, t, n, o, r, a) {
  var s;
  const i = X("el-dropdown-collection"), l = X("el-roving-focus-group"), u = X("el-scrollbar"), d = X("el-only-child"), f = X("el-tooltip"), m = X("el-button"), h = X("arrow-down"), c = X("el-icon"), v = X("el-button-group");
  return F(), J("div", {
    class: ee([e.ns.b(), e.ns.is("disabled", e.disabled)])
  }, [
    z(f, {
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
      "reference-element": (s = e.referenceElementRef) == null ? void 0 : s.$el,
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
    }, xr({
      content: N(() => [
        z(u, {
          ref: "scrollbar",
          "wrap-style": e.wrapStyle,
          tag: "div",
          "view-class": e.ns.e("list")
        }, {
          default: N(() => [
            z(l, {
              loop: e.loop,
              "current-tab-id": e.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: e.handleCurrentTabIdChange,
              onEntryFocus: e.handleEntryFocus
            }, {
              default: N(() => [
                z(i, null, {
                  default: N(() => [
                    H(e.$slots, "dropdown")
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
          z(d, {
            id: e.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: e.tabindex
          }, {
            default: N(() => [
              H(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      }
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]),
    e.splitButton ? (F(), K(v, { key: 0 }, {
      default: N(() => [
        z(m, ke({ ref: "referenceElementRef" }, e.buttonProps, {
          size: e.dropdownSize,
          type: e.type,
          disabled: e.disabled,
          tabindex: e.tabindex,
          onClick: e.handlerMainButtonClick
        }), {
          default: N(() => [
            H(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        z(m, ke({
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
            z(c, {
              class: ee(e.ns.e("icon"))
            }, {
              default: N(() => [
                z(h)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : ne("v-if", !0)
  ], 2);
}
var El = /* @__PURE__ */ W(yl, [["render", wl], ["__file", "dropdown.vue"]]);
const _l = $({
  components: {
    ElRovingFocusCollectionItem: Zi
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
    const { currentTabbedId: n, loop: o, onItemFocus: r, onItemShiftTab: a } = D(dn, void 0), { getItems: s } = D(fn, void 0), i = Wt(), l = k(), u = G((h) => {
      t("mousedown", h);
    }, (h) => {
      e.focusable ? r(p(i)) : h.preventDefault();
    }), d = G((h) => {
      t("focus", h);
    }, () => {
      r(p(i));
    }), f = G((h) => {
      t("keydown", h);
    }, (h) => {
      const { code: c, shiftKey: v, target: y, currentTarget: g } = h;
      if (c === U.tab && v) {
        a();
        return;
      }
      if (y !== g)
        return;
      const E = tl(h);
      if (E) {
        h.preventDefault();
        let w = s().filter((b) => b.focusable).map((b) => b.ref);
        switch (E) {
          case "last": {
            w.reverse();
            break;
          }
          case "prev":
          case "next": {
            E === "prev" && w.reverse();
            const b = w.indexOf(g);
            w = o.value ? nl(w, b + 1) : w.slice(b + 1);
            break;
          }
        }
        nt(() => {
          pn(w);
        });
      }
    }), m = C(() => n.value === p(i));
    return ae(Wo, {
      rovingFocusGroupItemRef: l,
      tabIndex: C(() => p(m) ? 0 : -1),
      handleMousedown: u,
      handleFocus: d,
      handleKeydown: f
    }), {
      id: i,
      handleKeydown: f,
      handleFocus: d,
      handleMousedown: u
    };
  }
});
function Tl(e, t, n, o, r, a) {
  const s = X("el-roving-focus-collection-item");
  return F(), K(s, {
    id: e.id,
    focusable: e.focusable,
    active: e.active
  }, {
    default: N(() => [
      H(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var Sl = /* @__PURE__ */ W(_l, [["render", Tl], ["__file", "roving-focus-item.vue"]]);
const Cl = $({
  name: "DropdownItemImpl",
  components: {
    ElIcon: bt
  },
  props: Go,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(e, { emit: t }) {
    const n = ue("dropdown"), { role: o } = D(St, void 0), { collectionItemRef: r } = D(ml, void 0), { collectionItemRef: a } = D(Qi, void 0), {
      rovingFocusGroupItemRef: s,
      tabIndex: i,
      handleFocus: l,
      handleKeydown: u,
      handleMousedown: d
    } = D(Wo, void 0), f = jo(r, a, s), m = C(() => o.value === "menu" ? "menuitem" : o.value === "navigation" ? "link" : "button"), h = G((c) => {
      if ([U.enter, U.numpadEnter, U.space].includes(c.code))
        return c.preventDefault(), c.stopImmediatePropagation(), t("clickimpl", c), !0;
    }, u);
    return {
      ns: n,
      itemRef: f,
      dataset: {
        [Ko]: ""
      },
      role: m,
      tabIndex: i,
      handleFocus: l,
      handleKeydown: h,
      handleMousedown: d
    };
  }
});
function Ol(e, t, n, o, r, a) {
  const s = X("el-icon");
  return F(), J(Et, null, [
    e.divided ? (F(), J("li", {
      key: 0,
      role: "separator",
      class: ee(e.ns.bem("menu", "item", "divided"))
    }, null, 2)) : ne("v-if", !0),
    et("li", ke({ ref: e.itemRef }, { ...e.dataset, ...e.$attrs }, {
      "aria-disabled": e.disabled,
      class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)],
      tabindex: e.tabIndex,
      role: e.role,
      onClick: (i) => e.$emit("clickimpl", i),
      onFocus: e.handleFocus,
      onKeydown: Bt(e.handleKeydown, ["self"]),
      onMousedown: e.handleMousedown,
      onPointermove: (i) => e.$emit("pointermove", i),
      onPointerleave: (i) => e.$emit("pointerleave", i)
    }), [
      e.icon ? (F(), K(s, { key: 0 }, {
        default: N(() => [
          (F(), K(Je(e.icon)))
        ]),
        _: 1
      })) : ne("v-if", !0),
      H(e.$slots, "default")
    ], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])
  ], 64);
}
var kl = /* @__PURE__ */ W(Cl, [["render", Ol], ["__file", "dropdown-item-impl.vue"]]);
const Yo = () => {
  const e = D("elDropdown", {}), t = C(() => e?.dropdownSize);
  return {
    elDropdown: e,
    _elDropdownSize: t
  };
}, Il = $({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: hl,
    ElRovingFocusItem: Sl,
    ElDropdownItemImpl: kl
  },
  inheritAttrs: !1,
  props: Go,
  emits: ["pointermove", "pointerleave", "click"],
  setup(e, { emit: t, attrs: n }) {
    const { elDropdown: o } = Yo(), r = Yt(), a = k(null), s = C(() => {
      var h, c;
      return (c = (h = p(a)) == null ? void 0 : h.textContent) != null ? c : "";
    }), { onItemEnter: i, onItemLeave: l } = D(St, void 0), u = G((h) => (t("pointermove", h), h.defaultPrevented), Gn((h) => {
      if (e.disabled) {
        l(h);
        return;
      }
      const c = h.currentTarget;
      c === document.activeElement || c.contains(document.activeElement) || (i(h), h.defaultPrevented || c?.focus());
    })), d = G((h) => (t("pointerleave", h), h.defaultPrevented), Gn(l)), f = G((h) => {
      if (!e.disabled)
        return t("click", h), h.type !== "keydown" && h.defaultPrevented;
    }, (h) => {
      var c, v, y;
      if (e.disabled) {
        h.stopImmediatePropagation();
        return;
      }
      (c = o?.hideOnClick) != null && c.value && ((v = o.handleClick) == null || v.call(o)), (y = o.commandHandler) == null || y.call(o, e.command, r, h);
    }), m = C(() => ({ ...e, ...n }));
    return {
      handleClick: f,
      handlePointerMove: u,
      handlePointerLeave: d,
      textContent: s,
      propsAndAttrs: m
    };
  }
});
function Rl(e, t, n, o, r, a) {
  var s;
  const i = X("el-dropdown-item-impl"), l = X("el-roving-focus-item"), u = X("el-dropdown-collection-item");
  return F(), K(u, {
    disabled: e.disabled,
    "text-value": (s = e.textValue) != null ? s : e.textContent
  }, {
    default: N(() => [
      z(l, {
        focusable: !e.disabled
      }, {
        default: N(() => [
          z(i, ke(e.propsAndAttrs, {
            onPointerleave: e.handlePointerLeave,
            onPointermove: e.handlePointerMove,
            onClickimpl: e.handleClick
          }), {
            default: N(() => [
              H(e.$slots, "default")
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
var qo = /* @__PURE__ */ W(Il, [["render", Rl], ["__file", "dropdown-item.vue"]]);
const Al = $({
  name: "ElDropdownMenu",
  props: fl,
  setup(e) {
    const t = ue("dropdown"), { _elDropdownSize: n } = Yo(), o = n.value, { focusTrapRef: r, onKeydown: a } = D(_o, void 0), { contentRef: s, role: i, triggerId: l } = D(St, void 0), { collectionRef: u, getItems: d } = D(gl, void 0), {
      rovingFocusGroupRef: f,
      rovingFocusGroupRootStyle: m,
      tabIndex: h,
      onBlur: c,
      onFocus: v,
      onMousedown: y
    } = D(dn, void 0), { collectionRef: g } = D(fn, void 0), E = C(() => [t.b("menu"), t.bm("menu", o?.value)]), R = jo(s, u, r, f, g), w = G((T) => {
      var S;
      (S = e.onKeydown) == null || S.call(e, T);
    }, (T) => {
      const { currentTarget: S, code: I, target: A } = T;
      if (S.contains(A), U.tab === I && T.stopImmediatePropagation(), T.preventDefault(), A !== p(s) || !pl.includes(I))
        return;
      const L = d().filter((B) => !B.disabled).map((B) => B.ref);
      Uo.includes(I) && L.reverse(), pn(L);
    });
    return {
      size: o,
      rovingFocusGroupRootStyle: m,
      tabIndex: h,
      dropdownKls: E,
      role: i,
      triggerId: l,
      dropdownListWrapperRef: R,
      handleKeydown: (T) => {
        w(T), a(T);
      },
      onBlur: c,
      onFocus: v,
      onMousedown: y
    };
  }
});
function Fl(e, t, n, o, r, a) {
  return F(), J("ul", {
    ref: e.dropdownListWrapperRef,
    class: ee(e.dropdownKls),
    style: tt(e.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: e.role,
    "aria-labelledby": e.triggerId,
    onBlur: e.onBlur,
    onFocus: e.onFocus,
    onKeydown: Bt(e.handleKeydown, ["self"]),
    onMousedown: Bt(e.onMousedown, ["self"])
  }, [
    H(e.$slots, "default")
  ], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var Jo = /* @__PURE__ */ W(Al, [["render", Fl], ["__file", "dropdown-menu.vue"]]);
Ve(El, {
  DropdownItem: qo,
  DropdownMenu: Jo
});
const Pl = Gt(qo);
Gt(Jo);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var Xn;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Xn || (Xn = {}));
var eo;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(eo || (eo = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var to;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(to || (to = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Ml = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function $l() {
  return D(Ml);
}
const Nl = ["title"], Bl = {
  key: 2,
  class: "git-badge"
}, Ll = {
  key: 3,
  class: "git-time"
}, xl = { class: "ml-2" }, Dl = {
  key: 0,
  class: "git-badge ml-1"
}, Hl = /* @__PURE__ */ $({
  __name: "TitlebarGitStatus",
  props: {
    variant: { default: "inline" }
  },
  setup(e) {
    const t = $l(), {
      syncState: n,
      pendingFilesCount: o,
      formattedLastSyncTime: r,
      refreshStatus: a,
      refreshSettings: s,
      stateDescription: i,
      gitSettings: l
    } = br(), u = C(() => !!l.value?.enabled && n.value !== "error"), d = () => {
      t.push("/config/category/settings?tab=gitSync");
    };
    return me(async () => {
      yr(), wr(a), await s(), await a();
    }), Dr(() => {
      Er();
    }), (f, m) => {
      const h = Pl;
      return u.value && f.variant === "inline" ? (F(), J("div", {
        key: 0,
        class: ee(["git-status-indicator", `git-status-${p(n)}`]),
        title: p(i),
        onClick: d
      }, [
        p(n) === "syncing" ? (F(), K(p(_r), {
          key: 0,
          class: "icon git-sync-icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })) : (F(), K(p(Cn), {
          key: 1,
          class: "icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })),
        p(n) === "has_changes" ? (F(), J(
          "span",
          Bl,
          qe(p(o)),
          1
          /* TEXT */
        )) : ne("v-if", !0),
        p(r) && p(n) !== "syncing" ? (F(), J(
          "span",
          Ll,
          qe(p(r)),
          1
          /* TEXT */
        )) : ne("v-if", !0)
      ], 10, Nl)) : u.value ? (F(), K(h, {
        key: 1,
        onClick: d
      }, {
        default: N(() => [
          z(p(Cn), {
            theme: "outline",
            size: "16",
            strokeWidth: 3,
            class: "align-middle"
          }),
          et(
            "span",
            xl,
            qe(f.$t("titlebar.gitSync")),
            1
            /* TEXT */
          ),
          p(n) === "has_changes" ? (F(), J(
            "span",
            Dl,
            qe(p(o)),
            1
            /* TEXT */
          )) : ne("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })) : ne("v-if", !0);
    };
  }
}), Kl = /* @__PURE__ */ Tr(Hl, [["__scopeId", "data-v-1d1e7036"]]);
export {
  Kl as default
};
