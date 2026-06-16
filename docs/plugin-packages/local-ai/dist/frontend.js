import * as yr from "vue";
import { inject as he, createVNode as V, defineAsyncComponent as Yu, ref as B, shallowRef as fn, computed as k, watch as le, onMounted as Ne, onUnmounted as Qo, defineComponent as J, h as Ml, Text as Fl, Fragment as qe, createElementBlock as U, openBlock as P, normalizeClass as j, createCommentVNode as X, renderSlot as se, createElementVNode as b, getCurrentInstance as Qe, unref as i, watchEffect as Dl, readonly as Xr, getCurrentScope as qu, onScopeDispose as Xu, nextTick as ke, isRef as ao, warn as Zu, provide as xt, mergeProps as Dn, toRef as Gt, useAttrs as Ju, useSlots as Qu, normalizeStyle as je, createBlock as ne, withCtx as Z, resolveDynamicComponent as Je, withModifiers as Le, toDisplayString as D, onBeforeUnmount as zt, Transition as Yn, withDirectives as xe, vShow as tn, reactive as Sn, onActivated as ec, onUpdated as Vl, cloneVNode as tc, Comment as nc, Teleport as oc, onBeforeMount as rc, onDeactivated as ac, createTextVNode as Ze, withKeys as wt, createSlots as sc, toRaw as lc, toRefs as Zr, resolveComponent as _n, resolveDirective as ic, toHandlerKey as uc, renderList as En, vModelText as so, shallowReactive as cc, isVNode as lo, render as jo } from "vue";
var dc = {
  size: "1em",
  strokeWidth: 4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  rtl: !1,
  theme: "outline",
  colors: {
    outline: {
      fill: "#333",
      background: "transparent"
    },
    filled: {
      fill: "#333",
      background: "#FFF"
    },
    twoTone: {
      fill: "#333",
      twoTone: "#2F88FF"
    },
    multiColor: {
      outStrokeColor: "#333",
      outFillColor: "#2F88FF",
      innerStrokeColor: "#FFF",
      innerFillColor: "#43CCF8"
    }
  },
  prefix: "i"
};
function fc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function pc(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], r = [], s = t.theme || n.theme;
  switch (s) {
    case "outline":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push("none"), r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push("none");
      break;
    case "filled":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push("#FFF"), r.push("#FFF");
      break;
    case "two-tone":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      r.push(typeof o[0] == "string" ? o[0] : "currentColor"), r.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), r.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), r.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: r,
    id: e
  };
}
var mc = Symbol("icon-context");
function vn(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = fc(), l = he(mc, dc);
      return function() {
        var u = s.size, c = s.strokeWidth, f = s.strokeLinecap, p = s.strokeLinejoin, v = s.theme, h = s.fill, g = s.spin, m = pc(a, {
          size: u,
          strokeWidth: c,
          strokeLinecap: f,
          strokeLinejoin: p,
          theme: v,
          fill: h
        }, l), E = [l.prefix + "-icon"];
        return E.push(l.prefix + "-icon-" + e), t && l.rtl && E.push(l.prefix + "-icon-rtl"), g && E.push(l.prefix + "-icon-spin"), V("span", {
          class: E.join(" ")
        }, [n(m)]);
      };
    }
  };
  return o;
}
const vc = vn("add", !1, function(e) {
  return V("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [V("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M24 16V32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M16 24L32 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gc = vn("back", !0, function(e) {
  return V("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [V("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hc = vn("delete", !1, function(e) {
  return V("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [V("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yc = vn("message", !0, function(e) {
  return V("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [V("path", {
    d: "M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M14 18L32 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M14 26H32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M14 34H24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ua = vn("refresh", !0, function(e) {
  return V("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [V("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), br = vn("robot", !0, function(e) {
  return V("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [V("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), V("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), V("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), V("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), bc = vn("send", !0, function(e) {
  return V("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [V("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xl = vn("setting-two", !1, function(e) {
  return V("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [V("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), V("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Xw = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => K_)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: xl,
    component: Yu(() => Promise.resolve().then(() => Yw))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function _c(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ha = typeof window < "u", An = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), wc = (e, t, n) => Ec({ l: e, k: t, s: n }), Ec = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), De = (e) => typeof e == "number" && isFinite(e), Cc = (e) => Jr(e) === "[object Date]", zo = (e) => Jr(e) === "[object RegExp]", er = (e) => fe(e) && Object.keys(e).length === 0, ze = Object.assign, Sc = Object.create, _e = (e = null) => Sc(e);
let Ka;
const Fo = () => Ka || (Ka = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : _e());
function Ga(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ya(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Tc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (o, r, s) => `${r}="${Ya(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (o, r, s) => `${r}='${Ya(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((o) => {
    e = e.replace(o, "$1javascript&#58;");
  }), e;
}
const Oc = Object.prototype.hasOwnProperty;
function Et(e, t) {
  return Oc.call(e, t);
}
const Pe = Array.isArray, Oe = (e) => typeof e == "function", te = (e) => typeof e == "string", Ie = (e) => typeof e == "boolean", pe = (e) => e !== null && typeof e == "object", Ac = (e) => pe(e) && Oe(e.then) && Oe(e.catch), Bl = Object.prototype.toString, Jr = (e) => Bl.call(e), fe = (e) => Jr(e) === "[object Object]", Lc = (e) => e == null ? "" : Pe(e) || fe(e) && e.toString === Bl ? JSON.stringify(e, null, 2) : String(e);
function Qr(e, t = "") {
  return e.reduce((n, o, r) => r === 0 ? n + o : n + t + o, "");
}
const Ao = (e) => !pe(e) || Pe(e);
function Do(e, t) {
  if (Ao(e) || Ao(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: r } = n.pop();
    Object.keys(o).forEach((s) => {
      s !== "__proto__" && (pe(o[s]) && !pe(r[s]) && (r[s] = Array.isArray(o[s]) ? [] : _e()), Ao(r[s]) || Ao(o[s]) ? r[s] = o[s] : n.push({ src: o[s], des: r[s] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function kc(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ir(e, t, n) {
  return { start: e, end: t };
}
const ve = {
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
  UNEXPECTED_LEXICAL_ANALYSIS: 14
}, Ic = 17;
function tr(e, t, n = {}) {
  const { domain: o, messages: r, args: s } = n, a = e, l = new SyntaxError(String(a));
  return l.code = e, t && (l.location = t), l.domain = o, l;
}
function Pc(e) {
  throw e;
}
const kt = " ", Nc = "\r", Ye = `
`, Rc = "\u2028", $c = "\u2029";
function Mc(e) {
  const t = e;
  let n = 0, o = 1, r = 1, s = 0;
  const a = (O) => t[O] === Nc && t[O + 1] === Ye, l = (O) => t[O] === Ye, u = (O) => t[O] === $c, c = (O) => t[O] === Rc, f = (O) => a(O) || l(O) || u(O) || c(O), p = () => n, v = () => o, h = () => r, g = () => s, m = (O) => a(O) || u(O) || c(O) ? Ye : t[O], E = () => m(n), d = () => m(n + s);
  function C() {
    return s = 0, f(n) && (o++, r = 0), a(n) && n++, n++, r++, t[n];
  }
  function L() {
    return a(n + s) && s++, s++, t[n + s];
  }
  function T() {
    n = 0, o = 1, r = 1, s = 0;
  }
  function y(O = 0) {
    s = O;
  }
  function A() {
    const O = n + s;
    for (; O !== n; )
      C();
    s = 0;
  }
  return {
    index: p,
    line: v,
    column: h,
    peekOffset: g,
    charAt: m,
    currentChar: E,
    currentPeek: d,
    next: C,
    peek: L,
    reset: T,
    resetPeek: y,
    skipToPeek: A
  };
}
const Ut = void 0, Fc = ".", qa = "'", Dc = "tokenizer";
function Vc(e, t = {}) {
  const n = t.location !== !1, o = Mc(e), r = () => o.index(), s = () => kc(o.line(), o.column(), o.index()), a = s(), l = r(), u = {
    currentType: 13,
    offset: l,
    startLoc: a,
    endLoc: a,
    lastType: 13,
    lastOffset: l,
    lastStartLoc: a,
    lastEndLoc: a,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => u, { onError: f } = t;
  function p(w, S, $, ...Y) {
    const de = c();
    if (S.column += $, S.offset += $, f) {
      const re = n ? Ir(de.startLoc, S) : null, _ = tr(w, re, {
        domain: Dc,
        args: Y
      });
      f(_);
    }
  }
  function v(w, S, $) {
    w.endLoc = s(), w.currentType = S;
    const Y = { type: S };
    return n && (Y.loc = Ir(w.startLoc, w.endLoc)), $ != null && (Y.value = $), Y;
  }
  const h = (w) => v(
    w,
    13
    /* TokenTypes.EOF */
  );
  function g(w, S) {
    return w.currentChar() === S ? (w.next(), S) : (p(ve.EXPECTED_TOKEN, s(), 0, S), "");
  }
  function m(w) {
    let S = "";
    for (; w.currentPeek() === kt || w.currentPeek() === Ye; )
      S += w.currentPeek(), w.peek();
    return S;
  }
  function E(w) {
    const S = m(w);
    return w.skipToPeek(), S;
  }
  function d(w) {
    if (w === Ut)
      return !1;
    const S = w.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S === 95;
  }
  function C(w) {
    if (w === Ut)
      return !1;
    const S = w.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function L(w, S) {
    const { currentType: $ } = S;
    if ($ !== 2)
      return !1;
    m(w);
    const Y = d(w.currentPeek());
    return w.resetPeek(), Y;
  }
  function T(w, S) {
    const { currentType: $ } = S;
    if ($ !== 2)
      return !1;
    m(w);
    const Y = w.currentPeek() === "-" ? w.peek() : w.currentPeek(), de = C(Y);
    return w.resetPeek(), de;
  }
  function y(w, S) {
    const { currentType: $ } = S;
    if ($ !== 2)
      return !1;
    m(w);
    const Y = w.currentPeek() === qa;
    return w.resetPeek(), Y;
  }
  function A(w, S) {
    const { currentType: $ } = S;
    if ($ !== 7)
      return !1;
    m(w);
    const Y = w.currentPeek() === ".";
    return w.resetPeek(), Y;
  }
  function O(w, S) {
    const { currentType: $ } = S;
    if ($ !== 8)
      return !1;
    m(w);
    const Y = d(w.currentPeek());
    return w.resetPeek(), Y;
  }
  function z(w, S) {
    const { currentType: $ } = S;
    if (!($ === 7 || $ === 11))
      return !1;
    m(w);
    const Y = w.currentPeek() === ":";
    return w.resetPeek(), Y;
  }
  function W(w, S) {
    const { currentType: $ } = S;
    if ($ !== 9)
      return !1;
    const Y = () => {
      const re = w.currentPeek();
      return re === "{" ? d(w.peek()) : re === "@" || re === "|" || re === ":" || re === "." || re === kt || !re ? !1 : re === Ye ? (w.peek(), Y()) : oe(w, !1);
    }, de = Y();
    return w.resetPeek(), de;
  }
  function ee(w) {
    m(w);
    const S = w.currentPeek() === "|";
    return w.resetPeek(), S;
  }
  function oe(w, S = !0) {
    const $ = (de = !1, re = "") => {
      const _ = w.currentPeek();
      return _ === "{" || _ === "@" || !_ ? de : _ === "|" ? !(re === kt || re === Ye) : _ === kt ? (w.peek(), $(!0, kt)) : _ === Ye ? (w.peek(), $(!0, Ye)) : !0;
    }, Y = $();
    return S && w.resetPeek(), Y;
  }
  function Q(w, S) {
    const $ = w.currentChar();
    return $ === Ut ? Ut : S($) ? (w.next(), $) : null;
  }
  function ie(w) {
    const S = w.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36;
  }
  function Ee(w) {
    return Q(w, ie);
  }
  function M(w) {
    const S = w.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36 || // $
    S === 45;
  }
  function F(w) {
    return Q(w, M);
  }
  function I(w) {
    const S = w.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function x(w) {
    return Q(w, I);
  }
  function H(w) {
    const S = w.charCodeAt(0);
    return S >= 48 && S <= 57 || // 0-9
    S >= 65 && S <= 70 || // A-F
    S >= 97 && S <= 102;
  }
  function G(w) {
    return Q(w, H);
  }
  function ye(w) {
    let S = "", $ = "";
    for (; S = x(w); )
      $ += S;
    return $;
  }
  function q(w) {
    let S = "";
    for (; ; ) {
      const $ = w.currentChar();
      if ($ === "{" || $ === "}" || $ === "@" || $ === "|" || !$)
        break;
      if ($ === kt || $ === Ye)
        if (oe(w))
          S += $, w.next();
        else {
          if (ee(w))
            break;
          S += $, w.next();
        }
      else
        S += $, w.next();
    }
    return S;
  }
  function we(w) {
    E(w);
    let S = "", $ = "";
    for (; S = F(w); )
      $ += S;
    const Y = w.currentChar();
    if (Y && Y !== "}" && Y !== Ut && Y !== kt && Y !== Ye && Y !== "　") {
      const de = pt(w);
      return p(ve.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, $ + de), $ + de;
    }
    return w.currentChar() === Ut && p(ve.UNTERMINATED_CLOSING_BRACE, s(), 0), $;
  }
  function We(w) {
    E(w);
    let S = "";
    return w.currentChar() === "-" ? (w.next(), S += `-${ye(w)}`) : S += ye(w), w.currentChar() === Ut && p(ve.UNTERMINATED_CLOSING_BRACE, s(), 0), S;
  }
  function Be(w) {
    return w !== qa && w !== Ye;
  }
  function Ue(w) {
    E(w), g(w, "'");
    let S = "", $ = "";
    for (; S = Q(w, Be); )
      S === "\\" ? $ += He(w) : $ += S;
    const Y = w.currentChar();
    return Y === Ye || Y === Ut ? (p(ve.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), Y === Ye && (w.next(), g(w, "'")), $) : (g(w, "'"), $);
  }
  function He(w) {
    const S = w.currentChar();
    switch (S) {
      case "\\":
      case "'":
        return w.next(), `\\${S}`;
      case "u":
        return be(w, S, 4);
      case "U":
        return be(w, S, 6);
      default:
        return p(ve.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, S), "";
    }
  }
  function be(w, S, $) {
    g(w, S);
    let Y = "";
    for (let de = 0; de < $; de++) {
      const re = G(w);
      if (!re) {
        p(ve.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${S}${Y}${w.currentChar()}`);
        break;
      }
      Y += re;
    }
    return `\\${S}${Y}`;
  }
  function rt(w) {
    return w !== "{" && w !== "}" && w !== kt && w !== Ye;
  }
  function pt(w) {
    E(w);
    let S = "", $ = "";
    for (; S = Q(w, rt); )
      $ += S;
    return $;
  }
  function at(w) {
    let S = "", $ = "";
    for (; S = Ee(w); )
      $ += S;
    return $;
  }
  function bt(w) {
    const S = ($) => {
      const Y = w.currentChar();
      return Y === "{" || Y === "@" || Y === "|" || Y === "(" || Y === ")" || !Y || Y === kt ? $ : ($ += Y, w.next(), S($));
    };
    return S("");
  }
  function st(w) {
    E(w);
    const S = g(
      w,
      "|"
      /* TokenChars.Pipe */
    );
    return E(w), S;
  }
  function lt(w, S) {
    let $ = null;
    switch (w.currentChar()) {
      case "{":
        return S.braceNest >= 1 && p(ve.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), w.next(), $ = v(
          S,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(w), S.braceNest++, $;
      case "}":
        return S.braceNest > 0 && S.currentType === 2 && p(ve.EMPTY_PLACEHOLDER, s(), 0), w.next(), $ = v(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), S.braceNest--, S.braceNest > 0 && E(w), S.inLinked && S.braceNest === 0 && (S.inLinked = !1), $;
      case "@":
        return S.braceNest > 0 && p(ve.UNTERMINATED_CLOSING_BRACE, s(), 0), $ = it(w, S) || h(S), S.braceNest = 0, $;
      default: {
        let de = !0, re = !0, _ = !0;
        if (ee(w))
          return S.braceNest > 0 && p(ve.UNTERMINATED_CLOSING_BRACE, s(), 0), $ = v(S, 1, st(w)), S.braceNest = 0, S.inLinked = !1, $;
        if (S.braceNest > 0 && (S.currentType === 4 || S.currentType === 5 || S.currentType === 6))
          return p(ve.UNTERMINATED_CLOSING_BRACE, s(), 0), S.braceNest = 0, mt(w, S);
        if (de = L(w, S))
          return $ = v(S, 4, we(w)), E(w), $;
        if (re = T(w, S))
          return $ = v(S, 5, We(w)), E(w), $;
        if (_ = y(w, S))
          return $ = v(S, 6, Ue(w)), E(w), $;
        if (!de && !re && !_)
          return $ = v(S, 12, pt(w)), p(ve.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, $.value), E(w), $;
        break;
      }
    }
    return $;
  }
  function it(w, S) {
    const { currentType: $ } = S;
    let Y = null;
    const de = w.currentChar();
    switch (($ === 7 || $ === 8 || $ === 11 || $ === 9) && (de === Ye || de === kt) && p(ve.INVALID_LINKED_FORMAT, s(), 0), de) {
      case "@":
        return w.next(), Y = v(
          S,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), S.inLinked = !0, Y;
      case ".":
        return E(w), w.next(), v(
          S,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(w), w.next(), v(
          S,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ee(w) ? (Y = v(S, 1, st(w)), S.braceNest = 0, S.inLinked = !1, Y) : A(w, S) || z(w, S) ? (E(w), it(w, S)) : O(w, S) ? (E(w), v(S, 11, at(w))) : W(w, S) ? (E(w), de === "{" ? lt(w, S) || Y : v(S, 10, bt(w))) : ($ === 7 && p(ve.INVALID_LINKED_FORMAT, s(), 0), S.braceNest = 0, S.inLinked = !1, mt(w, S));
    }
  }
  function mt(w, S) {
    let $ = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (S.braceNest > 0)
      return lt(w, S) || h(S);
    if (S.inLinked)
      return it(w, S) || h(S);
    switch (w.currentChar()) {
      case "{":
        return lt(w, S) || h(S);
      case "}":
        return p(ve.UNBALANCED_CLOSING_BRACE, s(), 0), w.next(), v(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return it(w, S) || h(S);
      default: {
        if (ee(w))
          return $ = v(S, 1, st(w)), S.braceNest = 0, S.inLinked = !1, $;
        if (oe(w))
          return v(S, 0, q(w));
        break;
      }
    }
    return $;
  }
  function Lt() {
    const { currentType: w, offset: S, startLoc: $, endLoc: Y } = u;
    return u.lastType = w, u.lastOffset = S, u.lastStartLoc = $, u.lastEndLoc = Y, u.offset = r(), u.startLoc = s(), o.currentChar() === Ut ? v(
      u,
      13
      /* TokenTypes.EOF */
    ) : mt(o, u);
  }
  return {
    nextToken: Lt,
    currentOffset: r,
    currentPosition: s,
    context: c
  };
}
const xc = "parser", Bc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function jc(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const o = parseInt(t || n, 16);
      return o <= 55295 || o >= 57344 ? String.fromCodePoint(o) : "�";
    }
  }
}
function zc(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(d, C, L, T, ...y) {
    const A = d.currentPosition();
    if (A.offset += T, A.column += T, n) {
      const O = t ? Ir(L, A) : null, z = tr(C, O, {
        domain: xc,
        args: y
      });
      n(z);
    }
  }
  function r(d, C, L) {
    const T = { type: d };
    return t && (T.start = C, T.end = C, T.loc = { start: L, end: L }), T;
  }
  function s(d, C, L, T) {
    t && (d.end = C, d.loc && (d.loc.end = L));
  }
  function a(d, C) {
    const L = d.context(), T = r(3, L.offset, L.startLoc);
    return T.value = C, s(T, d.currentOffset(), d.currentPosition()), T;
  }
  function l(d, C) {
    const L = d.context(), { lastOffset: T, lastStartLoc: y } = L, A = r(5, T, y);
    return A.index = parseInt(C, 10), d.nextToken(), s(A, d.currentOffset(), d.currentPosition()), A;
  }
  function u(d, C) {
    const L = d.context(), { lastOffset: T, lastStartLoc: y } = L, A = r(4, T, y);
    return A.key = C, d.nextToken(), s(A, d.currentOffset(), d.currentPosition()), A;
  }
  function c(d, C) {
    const L = d.context(), { lastOffset: T, lastStartLoc: y } = L, A = r(9, T, y);
    return A.value = C.replace(Bc, jc), d.nextToken(), s(A, d.currentOffset(), d.currentPosition()), A;
  }
  function f(d) {
    const C = d.nextToken(), L = d.context(), { lastOffset: T, lastStartLoc: y } = L, A = r(8, T, y);
    return C.type !== 11 ? (o(d, ve.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), A.value = "", s(A, T, y), {
      nextConsumeToken: C,
      node: A
    }) : (C.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, It(C)), A.value = C.value || "", s(A, d.currentOffset(), d.currentPosition()), {
      node: A
    });
  }
  function p(d, C) {
    const L = d.context(), T = r(7, L.offset, L.startLoc);
    return T.value = C, s(T, d.currentOffset(), d.currentPosition()), T;
  }
  function v(d) {
    const C = d.context(), L = r(6, C.offset, C.startLoc);
    let T = d.nextToken();
    if (T.type === 8) {
      const y = f(d);
      L.modifier = y.node, T = y.nextConsumeToken || d.nextToken();
    }
    switch (T.type !== 9 && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(T)), T = d.nextToken(), T.type === 2 && (T = d.nextToken()), T.type) {
      case 10:
        T.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(T)), L.key = p(d, T.value || "");
        break;
      case 4:
        T.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(T)), L.key = u(d, T.value || "");
        break;
      case 5:
        T.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(T)), L.key = l(d, T.value || "");
        break;
      case 6:
        T.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(T)), L.key = c(d, T.value || "");
        break;
      default: {
        o(d, ve.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const y = d.context(), A = r(7, y.offset, y.startLoc);
        return A.value = "", s(A, y.offset, y.startLoc), L.key = A, s(L, y.offset, y.startLoc), {
          nextConsumeToken: T,
          node: L
        };
      }
    }
    return s(L, d.currentOffset(), d.currentPosition()), {
      node: L
    };
  }
  function h(d) {
    const C = d.context(), L = C.currentType === 1 ? d.currentOffset() : C.offset, T = C.currentType === 1 ? C.endLoc : C.startLoc, y = r(2, L, T);
    y.items = [];
    let A = null;
    do {
      const W = A || d.nextToken();
      switch (A = null, W.type) {
        case 0:
          W.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(W)), y.items.push(a(d, W.value || ""));
          break;
        case 5:
          W.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(W)), y.items.push(l(d, W.value || ""));
          break;
        case 4:
          W.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(W)), y.items.push(u(d, W.value || ""));
          break;
        case 6:
          W.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(W)), y.items.push(c(d, W.value || ""));
          break;
        case 7: {
          const ee = v(d);
          y.items.push(ee.node), A = ee.nextConsumeToken || null;
          break;
        }
      }
    } while (C.currentType !== 13 && C.currentType !== 1);
    const O = C.currentType === 1 ? C.lastOffset : d.currentOffset(), z = C.currentType === 1 ? C.lastEndLoc : d.currentPosition();
    return s(y, O, z), y;
  }
  function g(d, C, L, T) {
    const y = d.context();
    let A = T.items.length === 0;
    const O = r(1, C, L);
    O.cases = [], O.cases.push(T);
    do {
      const z = h(d);
      A || (A = z.items.length === 0), O.cases.push(z);
    } while (y.currentType !== 13);
    return A && o(d, ve.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), s(O, d.currentOffset(), d.currentPosition()), O;
  }
  function m(d) {
    const C = d.context(), { offset: L, startLoc: T } = C, y = h(d);
    return C.currentType === 13 ? y : g(d, L, T, y);
  }
  function E(d) {
    const C = Vc(d, ze({}, e)), L = C.context(), T = r(0, L.offset, L.startLoc);
    return t && T.loc && (T.loc.source = d), T.body = m(C), e.onCacheKey && (T.cacheKey = e.onCacheKey(d)), L.currentType !== 13 && o(C, ve.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, d[L.offset] || ""), s(T, C.currentOffset(), C.currentPosition()), T;
  }
  return { parse: E };
}
function It(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Wc(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Xa(e, t) {
  for (let n = 0; n < e.length; n++)
    ea(e[n], t);
}
function ea(e, t) {
  switch (e.type) {
    case 1:
      Xa(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Xa(e.items, t);
      break;
    case 6: {
      ea(e.key, t), t.helper(
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
function Uc(e, t = {}) {
  const n = Wc(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ea(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function Hc(e) {
  const t = e.body;
  return t.type === 2 ? Za(t) : t.cases.forEach((n) => Za(n)), e;
}
function Za(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const o = e.items[n];
      if (!(o.type === 3 || o.type === 9) || o.value == null)
        break;
      t.push(o.value);
    }
    if (t.length === e.items.length) {
      e.static = Qr(t);
      for (let n = 0; n < e.items.length; n++) {
        const o = e.items[n];
        (o.type === 3 || o.type === 9) && delete o.value;
      }
    }
  }
}
function $n(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      $n(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let o = 0; o < n.length; o++)
        $n(n[o]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let o = 0; o < n.length; o++)
        $n(n[o]);
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
      $n(t.key), t.k = t.key, delete t.key, t.modifier && ($n(t.modifier), t.m = t.modifier, delete t.modifier);
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
  }
  delete e.type;
}
function Kc(e, t) {
  const { filename: n, breakLineCode: o, needIndent: r } = t, s = t.location !== !1, a = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: o,
    needIndent: r,
    indentLevel: 0
  };
  s && e.loc && (a.source = e.loc.source);
  const l = () => a;
  function u(m, E) {
    a.code += m;
  }
  function c(m, E = !0) {
    const d = E ? o : "";
    u(r ? d + "  ".repeat(m) : d);
  }
  function f(m = !0) {
    const E = ++a.indentLevel;
    m && c(E);
  }
  function p(m = !0) {
    const E = --a.indentLevel;
    m && c(E);
  }
  function v() {
    c(a.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: f,
    deindent: p,
    newline: v,
    helper: (m) => `_${m}`,
    needIndent: () => a.needIndent
  };
}
function Gc(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Vn(e, t.key), t.modifier ? (e.push(", "), Vn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Yc(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(o());
  const r = t.items.length;
  for (let s = 0; s < r && (Vn(e, t.items[s]), s !== r - 1); s++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function qc(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(o());
    const r = t.cases.length;
    for (let s = 0; s < r && (Vn(e, t.cases[s]), s !== r - 1); s++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function Xc(e, t) {
  t.body ? Vn(e, t.body) : e.push("null");
}
function Vn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Xc(e, t);
      break;
    case 1:
      qc(e, t);
      break;
    case 2:
      Yc(e, t);
      break;
    case 6:
      Gc(e, t);
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
  }
}
const Zc = (e, t = {}) => {
  const n = te(t.mode) ? t.mode : "normal", o = te(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], l = Kc(e, {
    filename: o,
    breakLineCode: r,
    needIndent: s
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(s), a.length > 0 && (l.push(`const { ${Qr(a.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), Vn(l, e), l.deindent(s), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Jc(e, t = {}) {
  const n = ze({}, t), o = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, l = zc(n).parse(e);
  return o ? (s && Hc(l), r && $n(l), { ast: l, code: "" }) : (Uc(l, n), Zc(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Qc() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Fo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ft(e) {
  return pe(e) && ta(e) === 0 && (Et(e, "b") || Et(e, "body"));
}
const jl = ["b", "body"];
function ed(e) {
  return gn(e, jl);
}
const zl = ["c", "cases"];
function td(e) {
  return gn(e, zl, []);
}
const Wl = ["s", "static"];
function nd(e) {
  return gn(e, Wl);
}
const Ul = ["i", "items"];
function od(e) {
  return gn(e, Ul, []);
}
const Hl = ["t", "type"];
function ta(e) {
  return gn(e, Hl);
}
const Kl = ["v", "value"];
function Lo(e, t) {
  const n = gn(e, Kl);
  if (n != null)
    return n;
  throw io(t);
}
const Gl = ["m", "modifier"];
function rd(e) {
  return gn(e, Gl);
}
const Yl = ["k", "key"];
function ad(e) {
  const t = gn(e, Yl);
  if (t)
    return t;
  throw io(
    6
    /* NodeTypes.Linked */
  );
}
function gn(e, t, n) {
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (Et(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const ql = [
  ...jl,
  ...zl,
  ...Wl,
  ...Ul,
  ...Yl,
  ...Gl,
  ...Kl,
  ...Hl
];
function io(e) {
  return new Error(`unhandled node type: ${e}`);
}
function _r(e) {
  return (n) => sd(n, e);
}
function sd(e, t) {
  const n = ed(t);
  if (n == null)
    throw io(
      0
      /* NodeTypes.Resource */
    );
  if (ta(n) === 1) {
    const s = td(n);
    return e.plural(s.reduce((a, l) => [
      ...a,
      Ja(e, l)
    ], []));
  } else
    return Ja(e, n);
}
function Ja(e, t) {
  const n = nd(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = od(t).reduce((r, s) => [...r, Pr(e, s)], []);
    return e.normalize(o);
  }
}
function Pr(e, t) {
  const n = ta(t);
  switch (n) {
    case 3:
      return Lo(t, n);
    case 9:
      return Lo(t, n);
    case 4: {
      const o = t;
      if (Et(o, "k") && o.k)
        return e.interpolate(e.named(o.k));
      if (Et(o, "key") && o.key)
        return e.interpolate(e.named(o.key));
      throw io(n);
    }
    case 5: {
      const o = t;
      if (Et(o, "i") && De(o.i))
        return e.interpolate(e.list(o.i));
      if (Et(o, "index") && De(o.index))
        return e.interpolate(e.list(o.index));
      throw io(n);
    }
    case 6: {
      const o = t, r = rd(o), s = ad(o);
      return e.linked(Pr(e, s), r ? Pr(e, r) : void 0, e.type);
    }
    case 7:
      return Lo(t, n);
    case 8:
      return Lo(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ld = (e) => e;
let ko = _e();
function id(e, t = {}) {
  let n = !1;
  const o = t.onError || Pc;
  return t.onError = (r) => {
    n = !0, o(r);
  }, { ...Jc(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function ud(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && te(e)) {
    Ie(t.warnHtmlMessage) && t.warnHtmlMessage;
    const o = (t.onCacheKey || ld)(e), r = ko[o];
    if (r)
      return r;
    const { ast: s, detectError: a } = id(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = _r(s);
    return a ? l : ko[o] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const o = ko[n];
      return o || (ko[n] = _r(e));
    } else
      return _r(e);
  }
}
const Yt = {
  INVALID_ARGUMENT: Ic,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, cd = 24;
function qt(e) {
  return tr(e, null, void 0);
}
function na(e, t) {
  return t.locale != null ? Qa(t.locale) : Qa(e.locale);
}
let wr;
function Qa(e) {
  if (te(e))
    return e;
  if (Oe(e)) {
    if (e.resolvedOnce && wr != null)
      return wr;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Ac(t))
        throw qt(Yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return wr = t;
    } else
      throw qt(Yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw qt(Yt.NOT_SUPPORT_LOCALE_TYPE);
}
function dd(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Pe(t) ? t : pe(t) ? Object.keys(t) : te(t) ? [t] : [n]
  ])];
}
function Xl(e, t, n) {
  const o = te(n) ? n : Wo, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(o);
  if (!s) {
    s = [];
    let a = [n];
    for (; Pe(a); )
      a = es(s, a, t);
    const l = Pe(t) || !fe(t) ? t : t.default ? t.default : null;
    a = te(l) ? [l] : l, Pe(a) && es(s, a, !1), r.__localeChainCache.set(o, s);
  }
  return s;
}
function es(e, t, n) {
  let o = !0;
  for (let r = 0; r < t.length && Ie(o); r++) {
    const s = t[r];
    te(s) && (o = fd(e, t[r], n));
  }
  return o;
}
function fd(e, t, n) {
  let o;
  const r = t.split("-");
  do {
    const s = r.join("-");
    o = pd(e, s, n), r.splice(-1, 1);
  } while (r.length && o === !0);
  return o;
}
function pd(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (Pe(n) || fe(n)) && n[r] && (o = n[r]);
  }
  return o;
}
const hn = [];
hn[
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
hn[
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
hn[
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
hn[
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
hn[
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
hn[
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
hn[
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
const md = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function vd(e) {
  return md.test(e);
}
function gd(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function hd(e) {
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
function yd(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : vd(t) ? gd(t) : "*" + t;
}
function bd(e) {
  const t = [];
  let n = -1, o = 0, r = 0, s, a, l, u, c, f, p;
  const v = [];
  v[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = l : a += l;
  }, v[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, v[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    v[
      0
      /* Actions.APPEND */
    ](), r++;
  }, v[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, o = 4, v[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, a === void 0 || (a = yd(a), a === !1))
        return !1;
      v[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function h() {
    const g = e[n + 1];
    if (o === 5 && g === "'" || o === 6 && g === '"')
      return n++, l = "\\" + g, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; o !== null; )
    if (n++, s = e[n], !(s === "\\" && h())) {
      if (u = hd(s), p = hn[o], c = p[u] || p.l || 8, c === 8 || (o = c[0], c[1] !== void 0 && (f = v[c[1]], f && (l = s, f() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const ts = /* @__PURE__ */ new Map();
function _d(e, t) {
  return pe(e) ? e[t] : null;
}
function wd(e, t) {
  if (!pe(e))
    return null;
  let n = ts.get(t);
  if (n || (n = bd(t), n && ts.set(t, n)), !n)
    return null;
  const o = n.length;
  let r = e, s = 0;
  for (; s < o; ) {
    const a = n[s];
    if (ql.includes(a) && Ft(r))
      return null;
    const l = r[a];
    if (l === void 0 || Oe(r))
      return null;
    r = l, s++;
  }
  return r;
}
const Ed = "11.2.2", nr = -1, Wo = "en-US", ns = "", os = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Cd() {
  return {
    upper: (e, t) => t === "text" && te(e) ? e.toUpperCase() : t === "vnode" && pe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && te(e) ? e.toLowerCase() : t === "vnode" && pe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && te(e) ? os(e) : t === "vnode" && pe(e) && "__v_isVNode" in e ? os(e.children) : e
  };
}
let Zl;
function Sd(e) {
  Zl = e;
}
let Jl;
function Td(e) {
  Jl = e;
}
let Ql;
function Od(e) {
  Ql = e;
}
let ei = null;
const rs = (e) => {
  ei = e;
}, Ad = () => ei;
let as = 0;
function Ld(e = {}) {
  const t = Oe(e.onWarn) ? e.onWarn : _c, n = te(e.version) ? e.version : Ed, o = te(e.locale) || Oe(e.locale) ? e.locale : Wo, r = Oe(o) ? Wo : o, s = Pe(e.fallbackLocale) || fe(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, a = fe(e.messages) ? e.messages : Er(r), l = fe(e.datetimeFormats) ? e.datetimeFormats : Er(r), u = fe(e.numberFormats) ? e.numberFormats : Er(r), c = ze(_e(), e.modifiers, Cd()), f = e.pluralRules || _e(), p = Oe(e.missing) ? e.missing : null, v = Ie(e.missingWarn) || zo(e.missingWarn) ? e.missingWarn : !0, h = Ie(e.fallbackWarn) || zo(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, m = !!e.unresolving, E = Oe(e.postTranslation) ? e.postTranslation : null, d = fe(e.processor) ? e.processor : null, C = Ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, T = Oe(e.messageCompiler) ? e.messageCompiler : Zl, y = Oe(e.messageResolver) ? e.messageResolver : Jl || _d, A = Oe(e.localeFallbacker) ? e.localeFallbacker : Ql || dd, O = pe(e.fallbackContext) ? e.fallbackContext : void 0, z = e, W = pe(z.__datetimeFormatters) ? z.__datetimeFormatters : /* @__PURE__ */ new Map(), ee = pe(z.__numberFormatters) ? z.__numberFormatters : /* @__PURE__ */ new Map(), oe = pe(z.__meta) ? z.__meta : {};
  as++;
  const Q = {
    version: n,
    cid: as,
    locale: o,
    fallbackLocale: s,
    messages: a,
    modifiers: c,
    pluralRules: f,
    missing: p,
    missingWarn: v,
    fallbackWarn: h,
    fallbackFormat: g,
    unresolving: m,
    postTranslation: E,
    processor: d,
    warnHtmlMessage: C,
    escapeParameter: L,
    messageCompiler: T,
    messageResolver: y,
    localeFallbacker: A,
    fallbackContext: O,
    onWarn: t,
    __meta: oe
  };
  return Q.datetimeFormats = l, Q.numberFormats = u, Q.__datetimeFormatters = W, Q.__numberFormatters = ee, Q;
}
const Er = (e) => ({ [e]: _e() });
function oa(e, t, n, o, r) {
  const { missing: s, onWarn: a } = e;
  if (s !== null) {
    const l = s(e, n, t, r);
    return te(l) ? l : t;
  } else
    return t;
}
function Zn(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function kd(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Id(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if (kd(e, t[o]))
      return !0;
  return !1;
}
function ss(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: a } = e, { __datetimeFormatters: l } = e, [u, c, f, p] = Nr(...t), v = Ie(f.missingWarn) ? f.missingWarn : e.missingWarn;
  Ie(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const h = !!f.part, g = na(e, f), m = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    g
  );
  if (!te(u) || u === "")
    return new Intl.DateTimeFormat(g, p).format(c);
  let E = {}, d, C = null;
  const L = "datetime format";
  for (let A = 0; A < m.length && (d = m[A], E = n[d] || {}, C = E[u], !fe(C)); A++)
    oa(e, u, d, v, L);
  if (!fe(C) || !te(d))
    return o ? nr : u;
  let T = `${d}__${u}`;
  er(p) || (T = `${T}__${JSON.stringify(p)}`);
  let y = l.get(T);
  return y || (y = new Intl.DateTimeFormat(d, ze({}, C, p)), l.set(T, y)), h ? y.formatToParts(c) : y.format(c);
}
const ti = [
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
function Nr(...e) {
  const [t, n, o, r] = e, s = _e();
  let a = _e(), l;
  if (te(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw qt(Yt.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    l = new Date(c);
    try {
      l.toISOString();
    } catch {
      throw qt(Yt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Cc(t)) {
    if (isNaN(t.getTime()))
      throw qt(Yt.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (De(t))
    l = t;
  else
    throw qt(Yt.INVALID_ARGUMENT);
  return te(n) ? s.key = n : fe(n) && Object.keys(n).forEach((u) => {
    ti.includes(u) ? a[u] = n[u] : s[u] = n[u];
  }), te(o) ? s.locale = o : fe(o) && (a = o), fe(r) && (a = r), [s.key || "", l, s, a];
}
function ls(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__datetimeFormatters.has(s) && o.__datetimeFormatters.delete(s);
  }
}
function is(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: a } = e, { __numberFormatters: l } = e, [u, c, f, p] = Rr(...t), v = Ie(f.missingWarn) ? f.missingWarn : e.missingWarn;
  Ie(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const h = !!f.part, g = na(e, f), m = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    g
  );
  if (!te(u) || u === "")
    return new Intl.NumberFormat(g, p).format(c);
  let E = {}, d, C = null;
  const L = "number format";
  for (let A = 0; A < m.length && (d = m[A], E = n[d] || {}, C = E[u], !fe(C)); A++)
    oa(e, u, d, v, L);
  if (!fe(C) || !te(d))
    return o ? nr : u;
  let T = `${d}__${u}`;
  er(p) || (T = `${T}__${JSON.stringify(p)}`);
  let y = l.get(T);
  return y || (y = new Intl.NumberFormat(d, ze({}, C, p)), l.set(T, y)), h ? y.formatToParts(c) : y.format(c);
}
const ni = [
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
function Rr(...e) {
  const [t, n, o, r] = e, s = _e();
  let a = _e();
  if (!De(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const l = t;
  return te(n) ? s.key = n : fe(n) && Object.keys(n).forEach((u) => {
    ni.includes(u) ? a[u] = n[u] : s[u] = n[u];
  }), te(o) ? s.locale = o : fe(o) && (a = o), fe(r) && (a = r), [s.key || "", l, s, a];
}
function us(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__numberFormatters.has(s) && o.__numberFormatters.delete(s);
  }
}
const Pd = (e) => e, Nd = (e) => "", Rd = "text", $d = (e) => e.length === 0 ? "" : Qr(e), Md = Lc;
function cs(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Fd(e) {
  const t = De(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (De(e.named.count) || De(e.named.n)) ? De(e.named.count) ? e.named.count : De(e.named.n) ? e.named.n : t : t;
}
function Dd(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Vd(e = {}) {
  const t = e.locale, n = Fd(e), o = pe(e.pluralRules) && te(t) && Oe(e.pluralRules[t]) ? e.pluralRules[t] : cs, r = pe(e.pluralRules) && te(t) && Oe(e.pluralRules[t]) ? cs : void 0, s = (d) => d[o(n, d.length, r)], a = e.list || [], l = (d) => a[d], u = e.named || _e();
  De(e.pluralIndex) && Dd(n, u);
  const c = (d) => u[d];
  function f(d, C) {
    const L = Oe(e.messages) ? e.messages(d, !!C) : pe(e.messages) ? e.messages[d] : !1;
    return L || (e.parent ? e.parent.message(d) : Nd);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : Pd, v = fe(e.processor) && Oe(e.processor.normalize) ? e.processor.normalize : $d, h = fe(e.processor) && Oe(e.processor.interpolate) ? e.processor.interpolate : Md, g = fe(e.processor) && te(e.processor.type) ? e.processor.type : Rd, E = {
    list: l,
    named: c,
    plural: s,
    linked: (d, ...C) => {
      const [L, T] = C;
      let y = "text", A = "";
      C.length === 1 ? pe(L) ? (A = L.modifier || A, y = L.type || y) : te(L) && (A = L || A) : C.length === 2 && (te(L) && (A = L || A), te(T) && (y = T || y));
      const O = f(d, !0)(E), z = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        y === "vnode" && Pe(O) && A ? O[0] : O
      );
      return A ? p(A)(z, y) : z;
    },
    message: f,
    type: g,
    interpolate: h,
    normalize: v,
    values: ze(_e(), a, u)
  };
  return E;
}
const ds = () => "", Zt = (e) => Oe(e);
function fs(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: r, messageCompiler: s, fallbackLocale: a, messages: l } = e, [u, c] = $r(...t), f = Ie(c.missingWarn) ? c.missingWarn : e.missingWarn, p = Ie(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, v = Ie(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, h = !!c.resolvedMessage, g = te(c.default) || Ie(c.default) ? Ie(c.default) ? s ? u : () => u : c.default : n ? s ? u : () => u : null, m = n || g != null && (te(g) || Oe(g)), E = na(e, c);
  v && xd(c);
  let [d, C, L] = h ? [
    u,
    E,
    l[E] || _e()
  ] : oi(e, u, E, a, p, f), T = d, y = u;
  if (!h && !(te(T) || Ft(T) || Zt(T)) && m && (T = g, y = T), !h && (!(te(T) || Ft(T) || Zt(T)) || !te(C)))
    return r ? nr : u;
  let A = !1;
  const O = () => {
    A = !0;
  }, z = Zt(T) ? T : ri(e, u, C, T, y, O);
  if (A)
    return T;
  const W = zd(e, C, L, c), ee = Vd(W), oe = Bd(e, z, ee);
  let Q = o ? o(oe, u) : oe;
  return v && te(Q) && (Q = Tc(Q)), Q;
}
function xd(e) {
  Pe(e.list) ? e.list = e.list.map((t) => te(t) ? Ga(t) : t) : pe(e.named) && Object.keys(e.named).forEach((t) => {
    te(e.named[t]) && (e.named[t] = Ga(e.named[t]));
  });
}
function oi(e, t, n, o, r, s) {
  const { messages: a, onWarn: l, messageResolver: u, localeFallbacker: c } = e, f = c(e, o, n);
  let p = _e(), v, h = null;
  const g = "translate";
  for (let m = 0; m < f.length && (v = f[m], p = a[v] || _e(), (h = u(p, t)) === null && (h = p[t]), !(te(h) || Ft(h) || Zt(h))); m++)
    if (!Id(v, f)) {
      const E = oa(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        v,
        s,
        g
      );
      E !== t && (h = E);
    }
  return [h, v, p];
}
function ri(e, t, n, o, r, s) {
  const { messageCompiler: a, warnHtmlMessage: l } = e;
  if (Zt(o)) {
    const c = o;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (a == null) {
    const c = () => o;
    return c.locale = n, c.key = t, c;
  }
  const u = a(o, jd(e, n, r, o, l, s));
  return u.locale = n, u.key = t, u.source = o, u;
}
function Bd(e, t, n) {
  return t(n);
}
function $r(...e) {
  const [t, n, o] = e, r = _e();
  if (!te(t) && !De(t) && !Zt(t) && !Ft(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const s = De(t) ? String(t) : (Zt(t), t);
  return De(n) ? r.plural = n : te(n) ? r.default = n : fe(n) && !er(n) ? r.named = n : Pe(n) && (r.list = n), De(o) ? r.plural = o : te(o) ? r.default = o : fe(o) && ze(r, o), [s, r];
}
function jd(e, t, n, o, r, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (a) => {
      throw s && s(a), a;
    },
    onCacheKey: (a) => wc(t, n, a)
  };
}
function zd(e, t, n, o) {
  const { modifiers: r, pluralRules: s, messageResolver: a, fallbackLocale: l, fallbackWarn: u, missingWarn: c, fallbackContext: f } = e, v = {
    locale: t,
    modifiers: r,
    pluralRules: s,
    messages: (h, g) => {
      let m = a(n, h);
      if (m == null && (f || g)) {
        const [, , E] = oi(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          h,
          t,
          l,
          u,
          c
        );
        m = a(E, h);
      }
      if (te(m) || Ft(m)) {
        let E = !1;
        const C = ri(e, h, t, m, h, () => {
          E = !0;
        });
        return E ? ds : C;
      } else return Zt(m) ? m : ds;
    }
  };
  return e.processor && (v.processor = e.processor), o.list && (v.list = o.list), o.named && (v.named = o.named), De(o.plural) && (v.pluralIndex = o.plural), v;
}
Qc();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Wd = "11.2.2";
function Ud() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Fo().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Fo().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Fo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const xn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: cd,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32
};
function uo(e, ...t) {
  return tr(e, null, void 0);
}
const Mr = /* @__PURE__ */ An("__translateVNode"), Fr = /* @__PURE__ */ An("__datetimeParts"), Dr = /* @__PURE__ */ An("__numberParts"), Hd = An("__setPluralRules"), ai = /* @__PURE__ */ An("__injectWithOption"), Vr = /* @__PURE__ */ An("__dispose");
function co(e) {
  if (!pe(e) || Ft(e))
    return e;
  for (const t in e)
    if (Et(e, t))
      if (!t.includes("."))
        pe(e[t]) && co(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let r = e, s = !1;
        for (let a = 0; a < o; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in r || (r[n[a]] = _e()), !pe(r[n[a]])) {
            s = !0;
            break;
          }
          r = r[n[a]];
        }
        if (s || (Ft(r) ? ql.includes(n[o]) || delete e[t] : (r[n[o]] = e[t], delete e[t])), !Ft(r)) {
          const a = r[n[o]];
          pe(a) && co(a);
        }
      }
  return e;
}
function si(e, t) {
  const { messages: n, __i18n: o, messageResolver: r, flatJson: s } = t, a = fe(n) ? n : Pe(o) ? _e() : { [e]: _e() };
  if (Pe(o) && o.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: u, resource: c } = l;
      u ? (a[u] = a[u] || _e(), Do(c, a[u])) : Do(c, a);
    } else
      te(l) && Do(JSON.parse(l), a);
  }), r == null && s)
    for (const l in a)
      Et(a, l) && co(a[l]);
  return a;
}
function Kd(e) {
  return e.type;
}
function Gd(e, t, n) {
  let o = pe(t.messages) ? t.messages : _e();
  "__i18nGlobal" in n && (o = si(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(o);
  r.length && r.forEach((s) => {
    e.mergeLocaleMessage(s, o[s]);
  });
  {
    if (pe(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (pe(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function ps(e) {
  return V(Fl, null, e, 0);
}
function li() {
  return "currentInstance" in yr ? yr["currentInstance"] : yr.getCurrentInstance();
}
const ms = () => [], Yd = () => !1;
let vs = 0;
function gs(e) {
  return (t, n, o, r) => e(n, o, li() || void 0, r);
}
function qd(e = {}) {
  const { __root: t, __injectWithOption: n } = e, o = t === void 0, r = e.flatJson, s = Ha ? B : fn;
  let a = Ie(e.inheritLocale) ? e.inheritLocale : !0;
  const l = s(
    // prettier-ignore
    t && a ? t.locale.value : te(e.locale) ? e.locale : Wo
  ), u = s(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : te(e.fallbackLocale) || Pe(e.fallbackLocale) || fe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), c = s(si(l.value, e)), f = s(fe(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), p = s(fe(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let v = t ? t.missingWarn : Ie(e.missingWarn) || zo(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : Ie(e.fallbackWarn) || zo(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : Ie(e.fallbackRoot) ? e.fallbackRoot : !0, m = !!e.fallbackFormat, E = Oe(e.missing) ? e.missing : null, d = Oe(e.missing) ? gs(e.missing) : null, C = Oe(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : Ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const y = t ? t.modifiers : fe(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    o && rs(null);
    const _ = {
      version: Wd,
      locale: l.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: y,
      pluralRules: A,
      missing: d === null ? void 0 : d,
      missingWarn: v,
      fallbackWarn: h,
      fallbackFormat: m,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: L,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    _.datetimeFormats = f.value, _.numberFormats = p.value, _.__datetimeFormatters = fe(O) ? O.__datetimeFormatters : void 0, _.__numberFormatters = fe(O) ? O.__numberFormatters : void 0;
    const R = Ld(_);
    return o && rs(R), R;
  })(), Zn(O, l.value, u.value);
  function W() {
    return [
      l.value,
      u.value,
      c.value,
      f.value,
      p.value
    ];
  }
  const ee = k({
    get: () => l.value,
    set: (_) => {
      O.locale = _, l.value = _;
    }
  }), oe = k({
    get: () => u.value,
    set: (_) => {
      O.fallbackLocale = _, u.value = _, Zn(O, l.value, _);
    }
  }), Q = k(() => c.value), ie = /* @__PURE__ */ k(() => f.value), Ee = /* @__PURE__ */ k(() => p.value);
  function M() {
    return Oe(C) ? C : null;
  }
  function F(_) {
    C = _, O.postTranslation = _;
  }
  function I() {
    return E;
  }
  function x(_) {
    _ !== null && (d = gs(_)), E = _, O.missing = d;
  }
  const H = (_, R, ue, me, Ke, bn) => {
    W();
    let vt;
    try {
      o || (O.fallbackContext = t ? Ad() : void 0), vt = _(O);
    } finally {
      o || (O.fallbackContext = void 0);
    }
    if (ue !== "translate exists" && // for not `te` (e.g `t`)
    De(vt) && vt === nr || ue === "translate exists" && !vt) {
      const [hr, Va] = R();
      return t && g ? me(t) : Ke(hr);
    } else {
      if (bn(vt))
        return vt;
      throw uo(xn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function G(..._) {
    return H((R) => Reflect.apply(fs, null, [R, ..._]), () => $r(..._), "translate", (R) => Reflect.apply(R.t, R, [..._]), (R) => R, (R) => te(R));
  }
  function ye(..._) {
    const [R, ue, me] = _;
    if (me && !pe(me))
      throw uo(xn.INVALID_ARGUMENT);
    return G(R, ue, ze({ resolvedMessage: !0 }, me || {}));
  }
  function q(..._) {
    return H((R) => Reflect.apply(ss, null, [R, ..._]), () => Nr(..._), "datetime format", (R) => Reflect.apply(R.d, R, [..._]), () => ns, (R) => te(R) || Pe(R));
  }
  function we(..._) {
    return H((R) => Reflect.apply(is, null, [R, ..._]), () => Rr(..._), "number format", (R) => Reflect.apply(R.n, R, [..._]), () => ns, (R) => te(R) || Pe(R));
  }
  function We(_) {
    return _.map((R) => te(R) || De(R) || Ie(R) ? ps(String(R)) : R);
  }
  const Ue = {
    normalize: We,
    interpolate: (_) => _,
    type: "vnode"
  };
  function He(..._) {
    return H((R) => {
      let ue;
      const me = R;
      try {
        me.processor = Ue, ue = Reflect.apply(fs, null, [me, ..._]);
      } finally {
        me.processor = null;
      }
      return ue;
    }, () => $r(..._), "translate", (R) => R[Mr](..._), (R) => [ps(R)], (R) => Pe(R));
  }
  function be(..._) {
    return H((R) => Reflect.apply(is, null, [R, ..._]), () => Rr(..._), "number format", (R) => R[Dr](..._), ms, (R) => te(R) || Pe(R));
  }
  function rt(..._) {
    return H((R) => Reflect.apply(ss, null, [R, ..._]), () => Nr(..._), "datetime format", (R) => R[Fr](..._), ms, (R) => te(R) || Pe(R));
  }
  function pt(_) {
    A = _, O.pluralRules = A;
  }
  function at(_, R) {
    return H(() => {
      if (!_)
        return !1;
      const ue = te(R) ? R : l.value, me = lt(ue), Ke = O.messageResolver(me, _);
      return Ft(Ke) || Zt(Ke) || te(Ke);
    }, () => [_], "translate exists", (ue) => Reflect.apply(ue.te, ue, [_, R]), Yd, (ue) => Ie(ue));
  }
  function bt(_) {
    let R = null;
    const ue = Xl(O, u.value, l.value);
    for (let me = 0; me < ue.length; me++) {
      const Ke = c.value[ue[me]] || {}, bn = O.messageResolver(Ke, _);
      if (bn != null) {
        R = bn;
        break;
      }
    }
    return R;
  }
  function st(_) {
    const R = bt(_);
    return R ?? (t ? t.tm(_) || {} : {});
  }
  function lt(_) {
    return c.value[_] || {};
  }
  function it(_, R) {
    if (r) {
      const ue = { [_]: R };
      for (const me in ue)
        Et(ue, me) && co(ue[me]);
      R = ue[_];
    }
    c.value[_] = R, O.messages = c.value;
  }
  function mt(_, R) {
    c.value[_] = c.value[_] || {};
    const ue = { [_]: R };
    if (r)
      for (const me in ue)
        Et(ue, me) && co(ue[me]);
    R = ue[_], Do(R, c.value[_]), O.messages = c.value;
  }
  function Lt(_) {
    return f.value[_] || {};
  }
  function w(_, R) {
    f.value[_] = R, O.datetimeFormats = f.value, ls(O, _, R);
  }
  function S(_, R) {
    f.value[_] = ze(f.value[_] || {}, R), O.datetimeFormats = f.value, ls(O, _, R);
  }
  function $(_) {
    return p.value[_] || {};
  }
  function Y(_, R) {
    p.value[_] = R, O.numberFormats = p.value, us(O, _, R);
  }
  function de(_, R) {
    p.value[_] = ze(p.value[_] || {}, R), O.numberFormats = p.value, us(O, _, R);
  }
  vs++, t && Ha && (le(t.locale, (_) => {
    a && (l.value = _, O.locale = _, Zn(O, l.value, u.value));
  }), le(t.fallbackLocale, (_) => {
    a && (u.value = _, O.fallbackLocale = _, Zn(O, l.value, u.value));
  }));
  const re = {
    id: vs,
    locale: ee,
    fallbackLocale: oe,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(_) {
      a = _, _ && t && (l.value = t.locale.value, u.value = t.fallbackLocale.value, Zn(O, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: Q,
    get modifiers() {
      return y;
    },
    get pluralRules() {
      return A || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return v;
    },
    set missingWarn(_) {
      v = _, O.missingWarn = v;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(_) {
      h = _, O.fallbackWarn = h;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(_) {
      g = _;
    },
    get fallbackFormat() {
      return m;
    },
    set fallbackFormat(_) {
      m = _, O.fallbackFormat = m;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(_) {
      L = _, O.warnHtmlMessage = _;
    },
    get escapeParameter() {
      return T;
    },
    set escapeParameter(_) {
      T = _, O.escapeParameter = _;
    },
    t: G,
    getLocaleMessage: lt,
    setLocaleMessage: it,
    mergeLocaleMessage: mt,
    getPostTranslationHandler: M,
    setPostTranslationHandler: F,
    getMissingHandler: I,
    setMissingHandler: x,
    [Hd]: pt
  };
  return re.datetimeFormats = ie, re.numberFormats = Ee, re.rt = ye, re.te = at, re.tm = st, re.d = q, re.n = we, re.getDateTimeFormat = Lt, re.setDateTimeFormat = w, re.mergeDateTimeFormat = S, re.getNumberFormat = $, re.setNumberFormat = Y, re.mergeNumberFormat = de, re[ai] = n, re[Mr] = He, re[Fr] = rt, re[Dr] = be, re;
}
const ra = {
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
function Xd({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, r) => [
    ...o,
    // prettier-ignore
    ...r.type === qe ? r.children : [r]
  ], []) : t.reduce((n, o) => {
    const r = e[o];
    return r && (n[o] = r()), n;
  }, _e());
}
function ii() {
  return qe;
}
ze({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => De(e) || !isNaN(e)
  }
}, ra);
function Zd(e) {
  return Pe(e) && !te(e[0]);
}
function ui(e, t, n, o) {
  const { slots: r, attrs: s } = t;
  return () => {
    const a = { part: !0 };
    let l = _e();
    e.locale && (a.locale = e.locale), te(e.format) ? a.key = e.format : pe(e.format) && (te(e.format.key) && (a.key = e.format.key), l = Object.keys(e.format).reduce((v, h) => n.includes(h) ? ze(_e(), v, { [h]: e.format[h] }) : v, _e()));
    const u = o(e.value, a, l);
    let c = [a.key];
    Pe(u) ? c = u.map((v, h) => {
      const g = r[v.type], m = g ? g({ [v.type]: v.value, index: h, parts: u }) : [v.value];
      return Zd(m) && (m[0].key = `${v.type}-${h}`), m;
    }) : te(u) && (c = [u]);
    const f = ze(_e(), s), p = te(e.tag) || pe(e.tag) ? e.tag : ii();
    return Ml(p, f, c);
  };
}
ze({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ra);
const Jd = /* @__PURE__ */ An("global-vue-i18n");
function ho(e = {}) {
  const t = li();
  if (t == null)
    throw uo(xn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw uo(xn.NOT_INSTALLED);
  const n = Qd(t), o = tf(n), r = Kd(t), s = ef(e, r);
  if (s === "global")
    return Gd(o, e, r), o;
  if (s === "parent") {
    let u = nf(n, t, e.__useComponent);
    return u == null && (u = o), u;
  }
  const a = n;
  let l = a.__getInstance(t);
  if (l == null) {
    const u = ze({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), o && (u.__root = o), l = qd(u), a.__composerExtend && (l[Vr] = a.__composerExtend(l)), rf(a, t, l), a.__setInstance(t, l);
  }
  return l;
}
function Qd(e) {
  const t = he(e.isCE ? Jd : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw uo(e.isCE ? xn.NOT_INSTALLED_WITH_PROVIDE : xn.UNEXPECTED_ERROR);
  return t;
}
function ef(e, t) {
  return er(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function tf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function nf(e, t, n = !1) {
  let o = null;
  const r = t.root;
  let s = of(t, n);
  for (; s != null; ) {
    const a = e;
    if (e.mode === "composition")
      o = a.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = a.__getInstance(s);
      l != null && (o = l.__composer, n && o && !o[ai] && (o = null));
    }
    if (o != null || r === s)
      break;
    s = s.parent;
  }
  return o;
}
function of(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function rf(e, t, n) {
  Ne(() => {
  }, t), Qo(() => {
    const o = n;
    e.__deleteInstance(t);
    const r = o[Vr];
    r && (r(), delete o[Vr]);
  }, t);
}
ze({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ra);
Ud();
Sd(ud);
Td(wd);
Od(Xl);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var hs;
(function(e) {
  e.pop = "pop", e.push = "push";
})(hs || (hs = {}));
var ys;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ys || (ys = {}));
var bs;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(bs || (bs = {}));
const af = Symbol("");
function ci() {
  return he(af);
}
const sf = ["disabled"], lf = {
  key: 0,
  class: "custom-button__loading"
}, uf = /* @__PURE__ */ J({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "success", "danger", "warning", "text"].includes(e)
    },
    size: {
      type: String,
      default: "",
      validator: (e) => ["", "small", "large"].includes(e)
    },
    circle: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    plain: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e) {
    const t = e;
    return (n, o) => (P(), U("button", {
      class: j([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: o[0] || (o[0] = (r) => n.$emit("click", r))
    }, [
      e.loading ? (P(), U("div", lf, o[1] || (o[1] = [
        b(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            b("circle", {
              class: "path",
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
              "stroke-width": "5"
            })
          ],
          -1
          /* HOISTED */
        )
      ]))) : X("v-if", !0),
      se(n.$slots, "default", {}, void 0, !0)
    ], 10, sf));
  }
}), aa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ct = /* @__PURE__ */ aa(uf, [["__scopeId", "data-v-9497085f"]]), di = Symbol(), Vo = "el", cf = "is-", wn = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, fi = Symbol("namespaceContextKey"), sa = (e) => {
  const t = e || (Qe() ? he(fi, B(Vo)) : B(Vo));
  return k(() => i(t) || Vo);
}, Me = (e, t) => {
  const n = sa(t);
  return {
    namespace: n,
    b: (m = "") => wn(n.value, e, m, "", ""),
    e: (m) => m ? wn(n.value, e, "", m, "") : "",
    m: (m) => m ? wn(n.value, e, "", "", m) : "",
    be: (m, E) => m && E ? wn(n.value, e, m, E, "") : "",
    em: (m, E) => m && E ? wn(n.value, e, "", m, E) : "",
    bm: (m, E) => m && E ? wn(n.value, e, m, "", E) : "",
    bem: (m, E, d) => m && E && d ? wn(n.value, e, m, E, d) : "",
    is: (m, ...E) => {
      const d = E.length >= 1 ? E[0] : !0;
      return m && d ? `${cf}${m}` : "";
    },
    cssVar: (m) => {
      const E = {};
      for (const d in m)
        m[d] && (E[`--${n.value}-${d}`] = m[d]);
      return E;
    },
    cssVarName: (m) => `--${n.value}-${m}`,
    cssVarBlock: (m) => {
      const E = {};
      for (const d in m)
        m[d] && (E[`--${n.value}-${e}-${d}`] = m[d]);
      return E;
    },
    cssVarBlockName: (m) => `--${n.value}-${e}-${m}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const fo = () => {
}, df = Object.prototype.hasOwnProperty, _s = (e, t) => df.call(e, t), Rt = Array.isArray, Ae = (e) => typeof e == "function", Xe = (e) => typeof e == "string", dt = (e) => e !== null && typeof e == "object", ws = (e) => (dt(e) || Ae(e)) && Ae(e.then) && Ae(e.catch), ff = Object.prototype.toString, pf = (e) => ff.call(e), mf = (e) => pf(e) === "[object Object]";
var pi = typeof global == "object" && global && global.Object === Object && global, vf = typeof self == "object" && self && self.Object === Object && self, Wt = pi || vf || Function("return this")(), Bt = Wt.Symbol, mi = Object.prototype, gf = mi.hasOwnProperty, hf = mi.toString, Jn = Bt ? Bt.toStringTag : void 0;
function yf(e) {
  var t = gf.call(e, Jn), n = e[Jn];
  try {
    e[Jn] = void 0;
    var o = !0;
  } catch {
  }
  var r = hf.call(e);
  return o && (t ? e[Jn] = n : delete e[Jn]), r;
}
var bf = Object.prototype, _f = bf.toString;
function wf(e) {
  return _f.call(e);
}
var Ef = "[object Null]", Cf = "[object Undefined]", Es = Bt ? Bt.toStringTag : void 0;
function qn(e) {
  return e == null ? e === void 0 ? Cf : Ef : Es && Es in Object(e) ? yf(e) : wf(e);
}
function Bn(e) {
  return e != null && typeof e == "object";
}
var Sf = "[object Symbol]";
function or(e) {
  return typeof e == "symbol" || Bn(e) && qn(e) == Sf;
}
function Tf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Ot = Array.isArray, Cs = Bt ? Bt.prototype : void 0, Ss = Cs ? Cs.toString : void 0;
function vi(e) {
  if (typeof e == "string")
    return e;
  if (Ot(e))
    return Tf(e, vi) + "";
  if (or(e))
    return Ss ? Ss.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Of = /\s/;
function Af(e) {
  for (var t = e.length; t-- && Of.test(e.charAt(t)); )
    ;
  return t;
}
var Lf = /^\s+/;
function kf(e) {
  return e && e.slice(0, Af(e) + 1).replace(Lf, "");
}
function mn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ts = NaN, If = /^[-+]0x[0-9a-f]+$/i, Pf = /^0b[01]+$/i, Nf = /^0o[0-7]+$/i, Rf = parseInt;
function Os(e) {
  if (typeof e == "number")
    return e;
  if (or(e))
    return Ts;
  if (mn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = mn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = kf(e);
  var n = Pf.test(e);
  return n || Nf.test(e) ? Rf(e.slice(2), n ? 2 : 8) : If.test(e) ? Ts : +e;
}
function gi(e) {
  return e;
}
var $f = "[object AsyncFunction]", Mf = "[object Function]", Ff = "[object GeneratorFunction]", Df = "[object Proxy]";
function hi(e) {
  if (!mn(e))
    return !1;
  var t = qn(e);
  return t == Mf || t == Ff || t == $f || t == Df;
}
var Cr = Wt["__core-js_shared__"], As = function() {
  var e = /[^.]+$/.exec(Cr && Cr.keys && Cr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Vf(e) {
  return !!As && As in e;
}
var xf = Function.prototype, Bf = xf.toString;
function Ln(e) {
  if (e != null) {
    try {
      return Bf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jf = /[\\^$.*+?()[\]{}|]/g, zf = /^\[object .+?Constructor\]$/, Wf = Function.prototype, Uf = Object.prototype, Hf = Wf.toString, Kf = Uf.hasOwnProperty, Gf = RegExp(
  "^" + Hf.call(Kf).replace(jf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yf(e) {
  if (!mn(e) || Vf(e))
    return !1;
  var t = hi(e) ? Gf : zf;
  return t.test(Ln(e));
}
function qf(e, t) {
  return e?.[t];
}
function kn(e, t) {
  var n = qf(e, t);
  return Yf(n) ? n : void 0;
}
var xr = kn(Wt, "WeakMap");
function Xf(e, t, n) {
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
var Zf = 800, Jf = 16, Qf = Date.now;
function ep(e) {
  var t = 0, n = 0;
  return function() {
    var o = Qf(), r = Jf - (o - n);
    if (n = o, r > 0) {
      if (++t >= Zf)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function tp(e) {
  return function() {
    return e;
  };
}
var Uo = function() {
  try {
    var e = kn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), np = Uo ? function(e, t) {
  return Uo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: tp(t),
    writable: !0
  });
} : gi, op = ep(np);
function rp(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var ap = 9007199254740991, sp = /^(?:0|[1-9]\d*)$/;
function la(e, t) {
  var n = typeof e;
  return t = t ?? ap, !!t && (n == "number" || n != "symbol" && sp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function lp(e, t, n) {
  t == "__proto__" && Uo ? Uo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ia(e, t) {
  return e === t || e !== e && t !== t;
}
var ip = Object.prototype, up = ip.hasOwnProperty;
function cp(e, t, n) {
  var o = e[t];
  (!(up.call(e, t) && ia(o, n)) || n === void 0 && !(t in e)) && lp(e, t, n);
}
var Ls = Math.max;
function dp(e, t, n) {
  return t = Ls(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, s = Ls(o.length - t, 0), a = Array(s); ++r < s; )
      a[r] = o[t + r];
    r = -1;
    for (var l = Array(t + 1); ++r < t; )
      l[r] = o[r];
    return l[t] = n(a), Xf(e, this, l);
  };
}
var fp = 9007199254740991;
function ua(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fp;
}
function pp(e) {
  return e != null && ua(e.length) && !hi(e);
}
var mp = Object.prototype;
function vp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || mp;
  return e === n;
}
function gp(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var hp = "[object Arguments]";
function ks(e) {
  return Bn(e) && qn(e) == hp;
}
var yi = Object.prototype, yp = yi.hasOwnProperty, bp = yi.propertyIsEnumerable, ca = ks(/* @__PURE__ */ function() {
  return arguments;
}()) ? ks : function(e) {
  return Bn(e) && yp.call(e, "callee") && !bp.call(e, "callee");
};
function _p() {
  return !1;
}
var bi = typeof exports == "object" && exports && !exports.nodeType && exports, Is = bi && typeof module == "object" && module && !module.nodeType && module, wp = Is && Is.exports === bi, Ps = wp ? Wt.Buffer : void 0, Ep = Ps ? Ps.isBuffer : void 0, Br = Ep || _p, Cp = "[object Arguments]", Sp = "[object Array]", Tp = "[object Boolean]", Op = "[object Date]", Ap = "[object Error]", Lp = "[object Function]", kp = "[object Map]", Ip = "[object Number]", Pp = "[object Object]", Np = "[object RegExp]", Rp = "[object Set]", $p = "[object String]", Mp = "[object WeakMap]", Fp = "[object ArrayBuffer]", Dp = "[object DataView]", Vp = "[object Float32Array]", xp = "[object Float64Array]", Bp = "[object Int8Array]", jp = "[object Int16Array]", zp = "[object Int32Array]", Wp = "[object Uint8Array]", Up = "[object Uint8ClampedArray]", Hp = "[object Uint16Array]", Kp = "[object Uint32Array]", Ce = {};
Ce[Vp] = Ce[xp] = Ce[Bp] = Ce[jp] = Ce[zp] = Ce[Wp] = Ce[Up] = Ce[Hp] = Ce[Kp] = !0;
Ce[Cp] = Ce[Sp] = Ce[Fp] = Ce[Tp] = Ce[Dp] = Ce[Op] = Ce[Ap] = Ce[Lp] = Ce[kp] = Ce[Ip] = Ce[Pp] = Ce[Np] = Ce[Rp] = Ce[$p] = Ce[Mp] = !1;
function Gp(e) {
  return Bn(e) && ua(e.length) && !!Ce[qn(e)];
}
function Yp(e) {
  return function(t) {
    return e(t);
  };
}
var _i = typeof exports == "object" && exports && !exports.nodeType && exports, to = _i && typeof module == "object" && module && !module.nodeType && module, qp = to && to.exports === _i, Sr = qp && pi.process, Ns = function() {
  try {
    var e = to && to.require && to.require("util").types;
    return e || Sr && Sr.binding && Sr.binding("util");
  } catch {
  }
}(), Rs = Ns && Ns.isTypedArray, wi = Rs ? Yp(Rs) : Gp, Xp = Object.prototype, Zp = Xp.hasOwnProperty;
function Jp(e, t) {
  var n = Ot(e), o = !n && ca(e), r = !n && !o && Br(e), s = !n && !o && !r && wi(e), a = n || o || r || s, l = a ? gp(e.length, String) : [], u = l.length;
  for (var c in e)
    Zp.call(e, c) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    la(c, u))) && l.push(c);
  return l;
}
function Qp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var em = Qp(Object.keys, Object), tm = Object.prototype, nm = tm.hasOwnProperty;
function om(e) {
  if (!vp(e))
    return em(e);
  var t = [];
  for (var n in Object(e))
    nm.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ei(e) {
  return pp(e) ? Jp(e) : om(e);
}
var rm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, am = /^\w*$/;
function da(e, t) {
  if (Ot(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || or(e) ? !0 : am.test(e) || !rm.test(e) || t != null && e in Object(t);
}
var po = kn(Object, "create");
function sm() {
  this.__data__ = po ? po(null) : {}, this.size = 0;
}
function lm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var im = "__lodash_hash_undefined__", um = Object.prototype, cm = um.hasOwnProperty;
function dm(e) {
  var t = this.__data__;
  if (po) {
    var n = t[e];
    return n === im ? void 0 : n;
  }
  return cm.call(t, e) ? t[e] : void 0;
}
var fm = Object.prototype, pm = fm.hasOwnProperty;
function mm(e) {
  var t = this.__data__;
  return po ? t[e] !== void 0 : pm.call(t, e);
}
var vm = "__lodash_hash_undefined__";
function gm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = po && t === void 0 ? vm : t, this;
}
function Tn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Tn.prototype.clear = sm;
Tn.prototype.delete = lm;
Tn.prototype.get = dm;
Tn.prototype.has = mm;
Tn.prototype.set = gm;
function hm() {
  this.__data__ = [], this.size = 0;
}
function rr(e, t) {
  for (var n = e.length; n--; )
    if (ia(e[n][0], t))
      return n;
  return -1;
}
var ym = Array.prototype, bm = ym.splice;
function _m(e) {
  var t = this.__data__, n = rr(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : bm.call(t, n, 1), --this.size, !0;
}
function wm(e) {
  var t = this.__data__, n = rr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Em(e) {
  return rr(this.__data__, e) > -1;
}
function Cm(e, t) {
  var n = this.__data__, o = rr(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
rn.prototype.clear = hm;
rn.prototype.delete = _m;
rn.prototype.get = wm;
rn.prototype.has = Em;
rn.prototype.set = Cm;
var mo = kn(Wt, "Map");
function Sm() {
  this.size = 0, this.__data__ = {
    hash: new Tn(),
    map: new (mo || rn)(),
    string: new Tn()
  };
}
function Tm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ar(e, t) {
  var n = e.__data__;
  return Tm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Om(e) {
  var t = ar(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Am(e) {
  return ar(this, e).get(e);
}
function Lm(e) {
  return ar(this, e).has(e);
}
function km(e, t) {
  var n = ar(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function an(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
an.prototype.clear = Sm;
an.prototype.delete = Om;
an.prototype.get = Am;
an.prototype.has = Lm;
an.prototype.set = km;
var Im = "Expected a function";
function fa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Im);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var a = e.apply(this, o);
    return n.cache = s.set(r, a) || s, a;
  };
  return n.cache = new (fa.Cache || an)(), n;
}
fa.Cache = an;
var Pm = 500;
function Nm(e) {
  var t = fa(e, function(o) {
    return n.size === Pm && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Rm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $m = /\\(\\)?/g, Mm = Nm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Rm, function(n, o, r, s) {
    t.push(r ? s.replace($m, "$1") : o || n);
  }), t;
});
function Fm(e) {
  return e == null ? "" : vi(e);
}
function sr(e, t) {
  return Ot(e) ? e : da(e, t) ? [e] : Mm(Fm(e));
}
function yo(e) {
  if (typeof e == "string" || or(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function pa(e, t) {
  t = sr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[yo(t[n++])];
  return n && n == o ? e : void 0;
}
function dn(e, t, n) {
  var o = e == null ? void 0 : pa(e, t);
  return o === void 0 ? n : o;
}
function Ci(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var $s = Bt ? Bt.isConcatSpreadable : void 0;
function Dm(e) {
  return Ot(e) || ca(e) || !!($s && e && e[$s]);
}
function Vm(e, t, n, o, r) {
  var s = -1, a = e.length;
  for (n || (n = Dm), r || (r = []); ++s < a; ) {
    var l = e[s];
    n(l) ? Ci(r, l) : r[r.length] = l;
  }
  return r;
}
function xm(e) {
  var t = e == null ? 0 : e.length;
  return t ? Vm(e) : [];
}
function Bm(e) {
  return op(dp(e, void 0, xm), e + "");
}
function cn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Ot(e) ? e : [e];
}
function jm() {
  this.__data__ = new rn(), this.size = 0;
}
function zm(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Wm(e) {
  return this.__data__.get(e);
}
function Um(e) {
  return this.__data__.has(e);
}
var Hm = 200;
function Km(e, t) {
  var n = this.__data__;
  if (n instanceof rn) {
    var o = n.__data__;
    if (!mo || o.length < Hm - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new an(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Jt(e) {
  var t = this.__data__ = new rn(e);
  this.size = t.size;
}
Jt.prototype.clear = jm;
Jt.prototype.delete = zm;
Jt.prototype.get = Wm;
Jt.prototype.has = Um;
Jt.prototype.set = Km;
function Gm(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (s[r++] = a);
  }
  return s;
}
function Ym() {
  return [];
}
var qm = Object.prototype, Xm = qm.propertyIsEnumerable, Ms = Object.getOwnPropertySymbols, Zm = Ms ? function(e) {
  return e == null ? [] : (e = Object(e), Gm(Ms(e), function(t) {
    return Xm.call(e, t);
  }));
} : Ym;
function Jm(e, t, n) {
  var o = t(e);
  return Ot(e) ? o : Ci(o, n(e));
}
function Fs(e) {
  return Jm(e, Ei, Zm);
}
var jr = kn(Wt, "DataView"), zr = kn(Wt, "Promise"), Wr = kn(Wt, "Set"), Ds = "[object Map]", Qm = "[object Object]", Vs = "[object Promise]", xs = "[object Set]", Bs = "[object WeakMap]", js = "[object DataView]", ev = Ln(jr), tv = Ln(mo), nv = Ln(zr), ov = Ln(Wr), rv = Ln(xr), un = qn;
(jr && un(new jr(new ArrayBuffer(1))) != js || mo && un(new mo()) != Ds || zr && un(zr.resolve()) != Vs || Wr && un(new Wr()) != xs || xr && un(new xr()) != Bs) && (un = function(e) {
  var t = qn(e), n = t == Qm ? e.constructor : void 0, o = n ? Ln(n) : "";
  if (o)
    switch (o) {
      case ev:
        return js;
      case tv:
        return Ds;
      case nv:
        return Vs;
      case ov:
        return xs;
      case rv:
        return Bs;
    }
  return t;
});
var zs = Wt.Uint8Array, av = "__lodash_hash_undefined__";
function sv(e) {
  return this.__data__.set(e, av), this;
}
function lv(e) {
  return this.__data__.has(e);
}
function Ho(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new an(); ++t < n; )
    this.add(e[t]);
}
Ho.prototype.add = Ho.prototype.push = sv;
Ho.prototype.has = lv;
function iv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function uv(e, t) {
  return e.has(t);
}
var cv = 1, dv = 2;
function Si(e, t, n, o, r, s) {
  var a = n & cv, l = e.length, u = t.length;
  if (l != u && !(a && u > l))
    return !1;
  var c = s.get(e), f = s.get(t);
  if (c && f)
    return c == t && f == e;
  var p = -1, v = !0, h = n & dv ? new Ho() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < l; ) {
    var g = e[p], m = t[p];
    if (o)
      var E = a ? o(m, g, p, t, e, s) : o(g, m, p, e, t, s);
    if (E !== void 0) {
      if (E)
        continue;
      v = !1;
      break;
    }
    if (h) {
      if (!iv(t, function(d, C) {
        if (!uv(h, C) && (g === d || r(g, d, n, o, s)))
          return h.push(C);
      })) {
        v = !1;
        break;
      }
    } else if (!(g === m || r(g, m, n, o, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
function fv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function pv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var mv = 1, vv = 2, gv = "[object Boolean]", hv = "[object Date]", yv = "[object Error]", bv = "[object Map]", _v = "[object Number]", wv = "[object RegExp]", Ev = "[object Set]", Cv = "[object String]", Sv = "[object Symbol]", Tv = "[object ArrayBuffer]", Ov = "[object DataView]", Ws = Bt ? Bt.prototype : void 0, Tr = Ws ? Ws.valueOf : void 0;
function Av(e, t, n, o, r, s, a) {
  switch (n) {
    case Ov:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Tv:
      return !(e.byteLength != t.byteLength || !s(new zs(e), new zs(t)));
    case gv:
    case hv:
    case _v:
      return ia(+e, +t);
    case yv:
      return e.name == t.name && e.message == t.message;
    case wv:
    case Cv:
      return e == t + "";
    case bv:
      var l = fv;
    case Ev:
      var u = o & mv;
      if (l || (l = pv), e.size != t.size && !u)
        return !1;
      var c = a.get(e);
      if (c)
        return c == t;
      o |= vv, a.set(e, t);
      var f = Si(l(e), l(t), o, r, s, a);
      return a.delete(e), f;
    case Sv:
      if (Tr)
        return Tr.call(e) == Tr.call(t);
  }
  return !1;
}
var Lv = 1, kv = Object.prototype, Iv = kv.hasOwnProperty;
function Pv(e, t, n, o, r, s) {
  var a = n & Lv, l = Fs(e), u = l.length, c = Fs(t), f = c.length;
  if (u != f && !a)
    return !1;
  for (var p = u; p--; ) {
    var v = l[p];
    if (!(a ? v in t : Iv.call(t, v)))
      return !1;
  }
  var h = s.get(e), g = s.get(t);
  if (h && g)
    return h == t && g == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var E = a; ++p < u; ) {
    v = l[p];
    var d = e[v], C = t[v];
    if (o)
      var L = a ? o(C, d, v, t, e, s) : o(d, C, v, e, t, s);
    if (!(L === void 0 ? d === C || r(d, C, n, o, s) : L)) {
      m = !1;
      break;
    }
    E || (E = v == "constructor");
  }
  if (m && !E) {
    var T = e.constructor, y = t.constructor;
    T != y && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof y == "function" && y instanceof y) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var Nv = 1, Us = "[object Arguments]", Hs = "[object Array]", Io = "[object Object]", Rv = Object.prototype, Ks = Rv.hasOwnProperty;
function $v(e, t, n, o, r, s) {
  var a = Ot(e), l = Ot(t), u = a ? Hs : un(e), c = l ? Hs : un(t);
  u = u == Us ? Io : u, c = c == Us ? Io : c;
  var f = u == Io, p = c == Io, v = u == c;
  if (v && Br(e)) {
    if (!Br(t))
      return !1;
    a = !0, f = !1;
  }
  if (v && !f)
    return s || (s = new Jt()), a || wi(e) ? Si(e, t, n, o, r, s) : Av(e, t, u, n, o, r, s);
  if (!(n & Nv)) {
    var h = f && Ks.call(e, "__wrapped__"), g = p && Ks.call(t, "__wrapped__");
    if (h || g) {
      var m = h ? e.value() : e, E = g ? t.value() : t;
      return s || (s = new Jt()), r(m, E, n, o, s);
    }
  }
  return v ? (s || (s = new Jt()), Pv(e, t, n, o, r, s)) : !1;
}
function lr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Bn(e) && !Bn(t) ? e !== e && t !== t : $v(e, t, n, o, lr, r);
}
var Mv = 1, Fv = 2;
function Dv(e, t, n, o) {
  var r = n.length, s = r;
  if (e == null)
    return !s;
  for (e = Object(e); r--; ) {
    var a = n[r];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++r < s; ) {
    a = n[r];
    var l = a[0], u = e[l], c = a[1];
    if (a[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var f = new Jt(), p;
      if (!(p === void 0 ? lr(c, u, Mv | Fv, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function Ti(e) {
  return e === e && !mn(e);
}
function Vv(e) {
  for (var t = Ei(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Ti(r)];
  }
  return t;
}
function Oi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function xv(e) {
  var t = Vv(e);
  return t.length == 1 && t[0][2] ? Oi(t[0][0], t[0][1]) : function(n) {
    return n === e || Dv(n, e, t);
  };
}
function Bv(e, t) {
  return e != null && t in Object(e);
}
function jv(e, t, n) {
  t = sr(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var a = yo(t[o]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && ua(r) && la(a, r) && (Ot(e) || ca(e)));
}
function Ai(e, t) {
  return e != null && jv(e, t, Bv);
}
var zv = 1, Wv = 2;
function Uv(e, t) {
  return da(e) && Ti(t) ? Oi(yo(e), t) : function(n) {
    var o = dn(n, e);
    return o === void 0 && o === t ? Ai(n, e) : lr(t, o, zv | Wv);
  };
}
function Hv(e) {
  return function(t) {
    return t?.[e];
  };
}
function Kv(e) {
  return function(t) {
    return pa(t, e);
  };
}
function Gv(e) {
  return da(e) ? Hv(yo(e)) : Kv(e);
}
function Yv(e) {
  return typeof e == "function" ? e : e == null ? gi : typeof e == "object" ? Ot(e) ? Uv(e[0], e[1]) : xv(e) : Gv(e);
}
var Or = function() {
  return Wt.Date.now();
}, qv = "Expected a function", Xv = Math.max, Zv = Math.min;
function Jv(e, t, n) {
  var o, r, s, a, l, u, c = 0, f = !1, p = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(qv);
  t = Os(t) || 0, mn(n) && (f = !!n.leading, p = "maxWait" in n, s = p ? Xv(Os(n.maxWait) || 0, t) : s, v = "trailing" in n ? !!n.trailing : v);
  function h(A) {
    var O = o, z = r;
    return o = r = void 0, c = A, a = e.apply(z, O), a;
  }
  function g(A) {
    return c = A, l = setTimeout(d, t), f ? h(A) : a;
  }
  function m(A) {
    var O = A - u, z = A - c, W = t - O;
    return p ? Zv(W, s - z) : W;
  }
  function E(A) {
    var O = A - u, z = A - c;
    return u === void 0 || O >= t || O < 0 || p && z >= s;
  }
  function d() {
    var A = Or();
    if (E(A))
      return C(A);
    l = setTimeout(d, m(A));
  }
  function C(A) {
    return l = void 0, v && o ? h(A) : (o = r = void 0, a);
  }
  function L() {
    l !== void 0 && clearTimeout(l), c = 0, o = u = r = l = void 0;
  }
  function T() {
    return l === void 0 ? a : C(Or());
  }
  function y() {
    var A = Or(), O = E(A);
    if (o = arguments, r = this, u = A, O) {
      if (l === void 0)
        return g(u);
      if (p)
        return clearTimeout(l), l = setTimeout(d, t), h(u);
    }
    return l === void 0 && (l = setTimeout(d, t)), a;
  }
  return y.cancel = L, y.flush = T, y;
}
function Qv(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return rp(e, Yv(t), r);
}
function Ko(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function no(e, t) {
  return lr(e, t);
}
function Qt(e) {
  return e == null;
}
function eg(e) {
  return e === void 0;
}
function tg(e, t, n, o) {
  if (!mn(e))
    return e;
  t = sr(t, e);
  for (var r = -1, s = t.length, a = s - 1, l = e; l != null && ++r < s; ) {
    var u = yo(t[r]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (r != a) {
      var f = l[u];
      c = void 0, c === void 0 && (c = mn(f) ? f : la(t[r + 1]) ? [] : {});
    }
    cp(l, u, c), l = l[u];
  }
  return e;
}
function ng(e, t, n) {
  for (var o = -1, r = t.length, s = {}; ++o < r; ) {
    var a = t[o], l = pa(e, a);
    n(l, a) && tg(s, sr(a, e), l);
  }
  return s;
}
function og(e, t) {
  return ng(e, t, function(n, o) {
    return Ai(e, o);
  });
}
var rg = Bm(function(e, t) {
  return e == null ? {} : og(e, t);
});
const $t = (e) => e === void 0, pn = (e) => typeof e == "boolean", ge = (e) => typeof e == "number", St = (e) => typeof Element > "u" ? !1 : e instanceof Element, ag = (e) => Xe(e) ? !Number.isNaN(Number(e)) : !1;
var sg = Object.defineProperty, lg = Object.defineProperties, ig = Object.getOwnPropertyDescriptors, Gs = Object.getOwnPropertySymbols, ug = Object.prototype.hasOwnProperty, cg = Object.prototype.propertyIsEnumerable, Ys = (e, t, n) => t in e ? sg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dg = (e, t) => {
  for (var n in t || (t = {}))
    ug.call(t, n) && Ys(e, n, t[n]);
  if (Gs)
    for (var n of Gs(t))
      cg.call(t, n) && Ys(e, n, t[n]);
  return e;
}, fg = (e, t) => lg(e, ig(t));
function pg(e, t) {
  var n;
  const o = fn();
  return Dl(() => {
    o.value = e();
  }, fg(dg({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Xr(o);
}
var qs;
const $e = typeof window < "u", mg = (e) => typeof e == "string", Li = () => {
}, Ur = $e && ((qs = window?.navigator) == null ? void 0 : qs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ma(e) {
  return typeof e == "function" ? e() : i(e);
}
function vg(e) {
  return e;
}
function bo(e) {
  return qu() ? (Xu(e), !0) : !1;
}
function gg(e, t = !0) {
  Qe() ? Ne(e) : t ? e() : ke(e);
}
function ki(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = B(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function l() {
    r.value = !1, a();
  }
  function u(...c) {
    a(), r.value = !0, s = setTimeout(() => {
      r.value = !1, s = null, e(...c);
    }, ma(t));
  }
  return o && (r.value = !0, $e && u()), bo(l), {
    isPending: Xr(r),
    start: u,
    stop: l
  };
}
function Xt(e) {
  var t;
  const n = ma(e);
  return (t = n?.$el) != null ? t : n;
}
const ir = $e ? window : void 0;
function Tt(...e) {
  let t, n, o, r;
  if (mg(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = ir) : [t, n, o, r] = e, !t)
    return Li;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((f) => f()), s.length = 0;
  }, l = (f, p, v, h) => (f.addEventListener(p, v, h), () => f.removeEventListener(p, v, h)), u = le(() => [Xt(t), ma(r)], ([f, p]) => {
    a(), f && s.push(...n.flatMap((v) => o.map((h) => l(f, v, h, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), a();
  };
  return bo(c), c;
}
let Xs = !1;
function hg(e, t, n = {}) {
  const { window: o = ir, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  Ur && !Xs && (Xs = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", Li)));
  let l = !0;
  const u = (v) => r.some((h) => {
    if (typeof h == "string")
      return Array.from(o.document.querySelectorAll(h)).some((g) => g === v.target || v.composedPath().includes(g));
    {
      const g = Xt(h);
      return g && (v.target === g || v.composedPath().includes(g));
    }
  }), f = [
    Tt(o, "click", (v) => {
      const h = Xt(e);
      if (!(!h || h === v.target || v.composedPath().includes(h))) {
        if (v.detail === 0 && (l = !u(v)), !l) {
          l = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: s }),
    Tt(o, "pointerdown", (v) => {
      const h = Xt(e);
      h && (l = !v.composedPath().includes(h) && !u(v));
    }, { passive: !0 }),
    a && Tt(o, "blur", (v) => {
      var h;
      const g = Xt(e);
      ((h = o.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !g?.contains(o.document.activeElement) && t(v);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
function Ii(e, t = !1) {
  const n = B(), o = () => n.value = !!e();
  return o(), gg(o, t), n;
}
const Zs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Js = "__vueuse_ssr_handlers__";
Zs[Js] = Zs[Js] || {};
var Qs = Object.getOwnPropertySymbols, yg = Object.prototype.hasOwnProperty, bg = Object.prototype.propertyIsEnumerable, _g = (e, t) => {
  var n = {};
  for (var o in e)
    yg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Qs)
    for (var o of Qs(e))
      t.indexOf(o) < 0 && bg.call(e, o) && (n[o] = e[o]);
  return n;
};
function Nt(e, t, n = {}) {
  const o = n, { window: r = ir } = o, s = _g(o, ["window"]);
  let a;
  const l = Ii(() => r && "ResizeObserver" in r), u = () => {
    a && (a.disconnect(), a = void 0);
  }, c = le(() => Xt(e), (p) => {
    u(), l.value && r && p && (a = new ResizeObserver(t), a.observe(p, s));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), c();
  };
  return bo(f), {
    isSupported: l,
    stop: f
  };
}
var el = Object.getOwnPropertySymbols, wg = Object.prototype.hasOwnProperty, Eg = Object.prototype.propertyIsEnumerable, Cg = (e, t) => {
  var n = {};
  for (var o in e)
    wg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && el)
    for (var o of el(e))
      t.indexOf(o) < 0 && Eg.call(e, o) && (n[o] = e[o]);
  return n;
};
function Sg(e, t, n = {}) {
  const o = n, { window: r = ir } = o, s = Cg(o, ["window"]);
  let a;
  const l = Ii(() => r && "MutationObserver" in r), u = () => {
    a && (a.disconnect(), a = void 0);
  }, c = le(() => Xt(e), (p) => {
    u(), l.value && r && p && (a = new MutationObserver(t), a.observe(p, s));
  }, { immediate: !0 }), f = () => {
    u(), c();
  };
  return bo(f), {
    isSupported: l,
    stop: f
  };
}
var tl;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(tl || (tl = {}));
var Tg = Object.defineProperty, nl = Object.getOwnPropertySymbols, Og = Object.prototype.hasOwnProperty, Ag = Object.prototype.propertyIsEnumerable, ol = (e, t, n) => t in e ? Tg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Lg = (e, t) => {
  for (var n in t || (t = {}))
    Og.call(t, n) && ol(e, n, t[n]);
  if (nl)
    for (var n of nl(t))
      Ag.call(t, n) && ol(e, n, t[n]);
  return e;
};
const kg = {
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
Lg({
  linear: vg
}, kg);
class Ig extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function va(e, t) {
  throw new Ig(`[${e}] ${t}`);
}
const rl = {
  current: 0
}, al = B(0), Pi = 2e3, sl = Symbol("elZIndexContextKey"), Ni = Symbol("zIndexContextKey"), Ri = (e) => {
  const t = Qe() ? he(sl, rl) : rl, n = e || (Qe() ? he(Ni, void 0) : void 0), o = k(() => {
    const a = i(n);
    return ge(a) ? a : Pi;
  }), r = k(() => o.value + al.value), s = () => (t.current++, al.value = t.current, r.value);
  return !$e && he(sl), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var Pg = {
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
const Ng = (e) => (t, n) => Rg(t, n, i(e)), Rg = (e, t, n) => dn(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t?.[r]) != null ? s : `{${r}}`}`;
}), $g = (e) => {
  const t = k(() => i(e).name), n = ao(e) ? e : B(e);
  return {
    lang: t,
    locale: n,
    t: Ng(e)
  };
}, $i = Symbol("localeContextKey"), ga = (e) => {
  const t = e || he($i, B());
  return $g(k(() => t.value || Pg));
}, Mi = "__epPropKey", ae = (e) => e, Mg = (e) => dt(e) && !!e[Mi], ur = (e, t) => {
  if (!dt(e) || Mg(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, u = {
    type: s,
    required: !!o,
    validator: n || a ? (c) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), _s(e, "default") && p.push(r), f || (f = p.includes(c))), a && (f || (f = a(c))), !f && p.length > 0) {
        const v = [...new Set(p)].map((h) => JSON.stringify(h)).join(", ");
        Zu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(c)}.`);
      }
      return f;
    } : void 0,
    [Mi]: !0
  };
  return _s(e, "default") && (u.default = r), u;
}, Se = (e) => Ko(Object.entries(e).map(([t, n]) => [
  t,
  ur(n, t)
])), ha = ["", "default", "small", "large"], cr = ur({
  type: String,
  values: ha,
  required: !1
}), Fi = Symbol("size"), Fg = () => {
  const e = he(Fi, {});
  return k(() => i(e.size) || "");
}, Di = Symbol("emptyValuesContextKey"), Dg = ["", void 0, null], Vg = void 0, Vi = Se({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ae(e) ? !e() : !e
  }
}), xg = (e, t) => {
  const n = Qe() ? he(Di, B({})) : B({}), o = k(() => e.emptyValues || n.value.emptyValues || Dg), r = k(() => Ae(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ae(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Vg), s = (a) => o.value.includes(a);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: s
  };
}, ll = (e) => Object.keys(e), Go = B();
function xi(e, t = void 0) {
  return Qe() ? he(di, Go) : Go;
}
function Bi(e, t) {
  const n = xi(), o = Me(e, k(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Vo;
  })), r = ga(k(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), s = Ri(k(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Pi;
  })), a = k(() => {
    var l;
    return i(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return ji(k(() => i(n) || {})), {
    ns: o,
    locale: r,
    zIndex: s,
    size: a
  };
}
const ji = (e, t, n = !1) => {
  var o;
  const r = !!Qe(), s = r ? xi() : void 0, a = (o = void 0) != null ? o : r ? xt : void 0;
  if (!a)
    return;
  const l = k(() => {
    const u = i(e);
    return s?.value ? Bg(s.value, u) : u;
  });
  return a(di, l), a($i, k(() => l.value.locale)), a(fi, k(() => l.value.namespace)), a(Ni, k(() => l.value.zIndex)), a(Fi, {
    size: k(() => l.value.size || "")
  }), a(Di, k(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Go.value) && (Go.value = l.value), l;
}, Bg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...ll(e), ...ll(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, Ve = "update:modelValue", nn = "change", en = "input";
var Te = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
function jn(e, t = "px") {
  if (!e)
    return "";
  if (ge(e) || ag(e))
    return `${e}${t}`;
  if (Xe(e))
    return e;
}
function jg(e, t) {
  if (!$e)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), s = r + t.offsetHeight, a = e.scrollTop, l = a + e.clientHeight;
  r < a ? e.scrollTop = r : s > l && (e.scrollTop = s - e.clientHeight);
}
const At = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, zi = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Wi = (e) => (e.install = fo, e), zg = Se({
  size: {
    type: ae([Number, String])
  },
  color: {
    type: String
  }
}), Wg = J({
  name: "ElIcon",
  inheritAttrs: !1
}), Ug = /* @__PURE__ */ J({
  ...Wg,
  props: zg,
  setup(e) {
    const t = e, n = Me("icon"), o = k(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: $t(r) ? void 0 : jn(r),
        "--color": s
      };
    });
    return (r, s) => (P(), U("i", Dn({
      class: i(n).b(),
      style: i(o)
    }, r.$attrs), [
      se(r.$slots, "default")
    ], 16));
  }
});
var Hg = /* @__PURE__ */ Te(Ug, [["__file", "icon.vue"]]);
const Re = At(Hg);
/*! Element Plus Icons Vue v2.3.1 */
var Kg = /* @__PURE__ */ J({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ui = Kg, Gg = /* @__PURE__ */ J({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Yg = Gg, qg = /* @__PURE__ */ J({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      b("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Xg = qg, Zg = /* @__PURE__ */ J({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Jg = Zg, Qg = /* @__PURE__ */ J({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      b("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), ya = Qg, eh = /* @__PURE__ */ J({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Yo = eh, th = /* @__PURE__ */ J({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      b("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), nh = th, oh = /* @__PURE__ */ J({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), rh = oh, ah = /* @__PURE__ */ J({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Hi = ah, sh = /* @__PURE__ */ J({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), lh = sh, ih = /* @__PURE__ */ J({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), uh = ih, ch = /* @__PURE__ */ J({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), dh = ch, fh = /* @__PURE__ */ J({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), ph = fh, mh = /* @__PURE__ */ J({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (P(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), vh = mh;
const Mt = ae([
  String,
  Object,
  Function
]), gh = {
  Close: Yo
}, hh = {
  Close: Yo
}, qo = {
  success: dh,
  warning: vh,
  error: Jg,
  info: rh
}, Ki = {
  validating: Hi,
  success: Xg,
  error: ya
}, Gi = () => $e && /firefox/i.test(window.navigator.userAgent);
let et;
const yh = {
  height: "0",
  visibility: "hidden",
  overflow: Gi() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, bh = [
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
function _h(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: bh.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function il(e, t = 1, n) {
  var o;
  et || (et = document.createElement("textarea"), document.body.appendChild(et));
  const { paddingSize: r, borderSize: s, boxSizing: a, contextStyle: l } = _h(e);
  l.forEach(([p, v]) => et?.style.setProperty(p, v)), Object.entries(yh).forEach(([p, v]) => et?.style.setProperty(p, v, "important")), et.value = e.value || e.placeholder || "";
  let u = et.scrollHeight;
  const c = {};
  a === "border-box" ? u = u + s : a === "content-box" && (u = u - r), et.value = "";
  const f = et.scrollHeight - r;
  if (ge(t)) {
    let p = f * t;
    a === "border-box" && (p = p + r + s), u = Math.max(p, u), c.minHeight = `${p}px`;
  }
  if (ge(n)) {
    let p = f * n;
    a === "border-box" && (p = p + r + s), u = Math.min(p, u);
  }
  return c.height = `${u}px`, (o = et.parentNode) == null || o.removeChild(et), et = void 0, c;
}
const Yi = (e) => e, wh = Se({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), In = (e) => rg(wh, e), Eh = Se({
  id: {
    type: String,
    default: void 0
  },
  size: cr,
  disabled: Boolean,
  modelValue: {
    type: ae([
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
    type: ae([Boolean, Object]),
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
    type: Mt
  },
  prefixIcon: {
    type: Mt
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
    type: ae([Object, Array, String]),
    default: () => Yi({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...In(["ariaLabel"])
}), Ch = {
  [Ve]: (e) => Xe(e),
  input: (e) => Xe(e),
  change: (e) => Xe(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Sh = ["class", "style"], Th = /^on[A-Z]/, Oh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = k(() => (n?.value || []).concat(Sh)), r = Qe();
  return r ? k(() => {
    var s;
    return Ko(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([a]) => !o.value.includes(a) && !(t && Th.test(a))));
  }) : k(() => ({}));
}, ba = Symbol("formContextKey"), Xo = Symbol("formItemContextKey"), ul = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Ah = Symbol("elIdInjection"), qi = () => Qe() ? he(Ah, ul) : ul, dr = (e) => {
  const t = qi(), n = sa();
  return pg(() => i(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, fr = () => {
  const e = he(ba, void 0), t = he(Xo, void 0);
  return {
    form: e,
    formItem: t
  };
}, _a = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = B(!1)), o || (o = B(!1));
  const r = B();
  let s;
  const a = k(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return Ne(() => {
    s = le([Gt(e, "id"), n], ([l, u]) => {
      const c = l ?? (u ? void 0 : dr().value);
      c !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !u && c && t.addInputId(c)), r.value = c);
    }, { immediate: !0 });
  }), Qo(() => {
    s && s(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
}, Xi = (e) => {
  const t = Qe();
  return k(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, _o = (e, t = {}) => {
  const n = B(void 0), o = t.prop ? n : Xi("size"), r = t.global ? n : Fg(), s = t.form ? { size: void 0 } : he(ba, void 0), a = t.formItem ? { size: void 0 } : he(Xo, void 0);
  return k(() => o.value || i(e) || a?.size || s?.size || r.value || "");
}, wa = (e) => {
  const t = Xi("disabled"), n = he(ba, void 0);
  return k(() => t.value || i(e) || n?.disabled || !1);
};
function Zi(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const s = Qe(), { emit: a } = s, l = fn(), u = B(!1), c = (v) => {
    Ae(t) && t(v) || u.value || (u.value = !0, a("focus", v), n?.());
  }, f = (v) => {
    var h;
    Ae(o) && o(v) || v.relatedTarget && ((h = l.value) != null && h.contains(v.relatedTarget)) || (u.value = !1, a("blur", v), r?.());
  }, p = () => {
    var v, h;
    (v = l.value) != null && v.contains(document.activeElement) && l.value !== document.activeElement || (h = e.value) == null || h.focus();
  };
  return le(l, (v) => {
    v && v.setAttribute("tabindex", "-1");
  }), Tt(l, "focus", c, !0), Tt(l, "blur", f, !0), Tt(l, "click", p, !0), {
    isFocused: u,
    wrapperRef: l,
    handleFocus: c,
    handleBlur: f
  };
}
const Lh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Ji({
  afterComposition: e,
  emit: t
}) {
  const n = B(!1), o = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, r = (l) => {
    var u;
    t?.("compositionupdate", l);
    const c = (u = l.target) == null ? void 0 : u.value, f = c[c.length - 1] || "";
    n.value = !Lh(f);
  }, s = (l) => {
    t?.("compositionend", l), n.value && (n.value = !1, ke(() => e(l)));
  };
  return {
    isComposing: n,
    handleComposition: (l) => {
      l.type === "compositionend" ? s(l) : r(l);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: s
  };
}
function kh(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: s, value: a } = e.value;
    if (r == null || s == null)
      return;
    const l = a.slice(0, Math.max(0, r)), u = a.slice(Math.max(0, s));
    t = {
      selectionStart: r,
      selectionEnd: s,
      value: a,
      beforeTxt: l,
      afterTxt: u
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: s, afterTxt: a, selectionStart: l } = t;
    if (s == null || a == null || l == null)
      return;
    let u = r.length;
    if (r.endsWith(a))
      u = r.length - a.length;
    else if (r.startsWith(s))
      u = s.length;
    else {
      const c = s[l - 1], f = r.indexOf(c, l - 1);
      f !== -1 && (u = f + 1);
    }
    e.value.setSelectionRange(u, u);
  }
  return [n, o];
}
const Ih = "ElInput", Ph = J({
  name: Ih,
  inheritAttrs: !1
}), Nh = /* @__PURE__ */ J({
  ...Ph,
  props: Eh,
  emits: Ch,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Ju(), s = Oh(), a = Qu(), l = k(() => [
      o.type === "textarea" ? m.b() : g.b(),
      g.m(v.value),
      g.is("disabled", h.value),
      g.is("exceed", q.value),
      {
        [g.b("group")]: a.prepend || a.append,
        [g.m("prefix")]: a.prefix || o.prefixIcon,
        [g.m("suffix")]: a.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [g.bm("suffix", "password-clear")]: x.value && H.value,
        [g.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), u = k(() => [
      g.e("wrapper"),
      g.is("focus", z.value)
    ]), { form: c, formItem: f } = fr(), { inputId: p } = _a(o, {
      formItemContext: f
    }), v = _o(), h = wa(), g = Me("input"), m = Me("textarea"), E = fn(), d = fn(), C = B(!1), L = B(!1), T = B(), y = fn(o.inputStyle), A = k(() => E.value || d.value), { wrapperRef: O, isFocused: z, handleFocus: W, handleBlur: ee } = Zi(A, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var _;
        o.validateEvent && ((_ = f?.validate) == null || _.call(f, "blur").catch((R) => void 0));
      }
    }), oe = k(() => {
      var _;
      return (_ = c?.statusIcon) != null ? _ : !1;
    }), Q = k(() => f?.validateState || ""), ie = k(() => Q.value && Ki[Q.value]), Ee = k(() => L.value ? ph : nh), M = k(() => [
      r.style
    ]), F = k(() => [
      o.inputStyle,
      y.value,
      { resize: o.resize }
    ]), I = k(() => Qt(o.modelValue) ? "" : String(o.modelValue)), x = k(() => o.clearable && !h.value && !o.readonly && !!I.value && (z.value || C.value)), H = k(() => o.showPassword && !h.value && !!I.value && (!!I.value || z.value)), G = k(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !h.value && !o.readonly && !o.showPassword), ye = k(() => I.value.length), q = k(() => !!G.value && ye.value > Number(o.maxlength)), we = k(() => !!a.suffix || !!o.suffixIcon || x.value || o.showPassword || G.value || !!Q.value && oe.value), [We, Be] = kh(E);
    Nt(d, (_) => {
      if (be(), !G.value || o.resize !== "both")
        return;
      const R = _[0], { width: ue } = R.contentRect;
      T.value = {
        right: `calc(100% - ${ue + 15 + 6}px)`
      };
    });
    const Ue = () => {
      const { type: _, autosize: R } = o;
      if (!(!$e || _ !== "textarea" || !d.value))
        if (R) {
          const ue = dt(R) ? R.minRows : void 0, me = dt(R) ? R.maxRows : void 0, Ke = il(d.value, ue, me);
          y.value = {
            overflowY: "hidden",
            ...Ke
          }, ke(() => {
            d.value.offsetHeight, y.value = Ke;
          });
        } else
          y.value = {
            minHeight: il(d.value).minHeight
          };
    }, be = ((_) => {
      let R = !1;
      return () => {
        var ue;
        if (R || !o.autosize)
          return;
        ((ue = d.value) == null ? void 0 : ue.offsetParent) === null || (_(), R = !0);
      };
    })(Ue), rt = () => {
      const _ = A.value, R = o.formatter ? o.formatter(I.value) : I.value;
      !_ || _.value === R || (_.value = R);
    }, pt = async (_) => {
      We();
      let { value: R } = _.target;
      if (o.formatter && o.parser && (R = o.parser(R)), !bt.value) {
        if (R === I.value) {
          rt();
          return;
        }
        n(Ve, R), n(en, R), await ke(), rt(), Be();
      }
    }, at = (_) => {
      let { value: R } = _.target;
      o.formatter && o.parser && (R = o.parser(R)), n(nn, R);
    }, {
      isComposing: bt,
      handleCompositionStart: st,
      handleCompositionUpdate: lt,
      handleCompositionEnd: it
    } = Ji({ emit: n, afterComposition: pt }), mt = () => {
      We(), L.value = !L.value, setTimeout(Be);
    }, Lt = () => {
      var _;
      return (_ = A.value) == null ? void 0 : _.focus();
    }, w = () => {
      var _;
      return (_ = A.value) == null ? void 0 : _.blur();
    }, S = (_) => {
      C.value = !1, n("mouseleave", _);
    }, $ = (_) => {
      C.value = !0, n("mouseenter", _);
    }, Y = (_) => {
      n("keydown", _);
    }, de = () => {
      var _;
      (_ = A.value) == null || _.select();
    }, re = () => {
      n(Ve, ""), n(nn, ""), n("clear"), n(en, "");
    };
    return le(() => o.modelValue, () => {
      var _;
      ke(() => Ue()), o.validateEvent && ((_ = f?.validate) == null || _.call(f, "change").catch((R) => void 0));
    }), le(I, () => rt()), le(() => o.type, async () => {
      await ke(), rt(), Ue();
    }), Ne(() => {
      !o.formatter && o.parser, rt(), ke(Ue);
    }), t({
      input: E,
      textarea: d,
      ref: A,
      textareaStyle: F,
      autosize: Gt(o, "autosize"),
      isComposing: bt,
      focus: Lt,
      blur: w,
      select: de,
      clear: re,
      resizeTextarea: Ue
    }), (_, R) => (P(), U("div", {
      class: j([
        i(l),
        {
          [i(g).bm("group", "append")]: _.$slots.append,
          [i(g).bm("group", "prepend")]: _.$slots.prepend
        }
      ]),
      style: je(i(M)),
      onMouseenter: $,
      onMouseleave: S
    }, [
      X(" input "),
      _.type !== "textarea" ? (P(), U(qe, { key: 0 }, [
        X(" prepend slot "),
        _.$slots.prepend ? (P(), U("div", {
          key: 0,
          class: j(i(g).be("group", "prepend"))
        }, [
          se(_.$slots, "prepend")
        ], 2)) : X("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: j(i(u))
        }, [
          X(" prefix slot "),
          _.$slots.prefix || _.prefixIcon ? (P(), U("span", {
            key: 0,
            class: j(i(g).e("prefix"))
          }, [
            b("span", {
              class: j(i(g).e("prefix-inner"))
            }, [
              se(_.$slots, "prefix"),
              _.prefixIcon ? (P(), ne(i(Re), {
                key: 0,
                class: j(i(g).e("icon"))
              }, {
                default: Z(() => [
                  (P(), ne(Je(_.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0)
            ], 2)
          ], 2)) : X("v-if", !0),
          b("input", Dn({
            id: i(p),
            ref_key: "input",
            ref: E,
            class: i(g).e("inner")
          }, i(s), {
            minlength: _.minlength,
            maxlength: _.maxlength,
            type: _.showPassword ? L.value ? "text" : "password" : _.type,
            disabled: i(h),
            readonly: _.readonly,
            autocomplete: _.autocomplete,
            tabindex: _.tabindex,
            "aria-label": _.ariaLabel,
            placeholder: _.placeholder,
            style: _.inputStyle,
            form: _.form,
            autofocus: _.autofocus,
            role: _.containerRole,
            onCompositionstart: i(st),
            onCompositionupdate: i(lt),
            onCompositionend: i(it),
            onInput: pt,
            onChange: at,
            onKeydown: Y
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          X(" suffix slot "),
          i(we) ? (P(), U("span", {
            key: 1,
            class: j(i(g).e("suffix"))
          }, [
            b("span", {
              class: j(i(g).e("suffix-inner"))
            }, [
              !i(x) || !i(H) || !i(G) ? (P(), U(qe, { key: 0 }, [
                se(_.$slots, "suffix"),
                _.suffixIcon ? (P(), ne(i(Re), {
                  key: 0,
                  class: j(i(g).e("icon"))
                }, {
                  default: Z(() => [
                    (P(), ne(Je(_.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : X("v-if", !0)
              ], 64)) : X("v-if", !0),
              i(x) ? (P(), ne(i(Re), {
                key: 1,
                class: j([i(g).e("icon"), i(g).e("clear")]),
                onMousedown: Le(i(fo), ["prevent"]),
                onClick: re
              }, {
                default: Z(() => [
                  V(i(ya))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : X("v-if", !0),
              i(H) ? (P(), ne(i(Re), {
                key: 2,
                class: j([i(g).e("icon"), i(g).e("password")]),
                onClick: mt
              }, {
                default: Z(() => [
                  (P(), ne(Je(i(Ee))))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0),
              i(G) ? (P(), U("span", {
                key: 3,
                class: j(i(g).e("count"))
              }, [
                b("span", {
                  class: j(i(g).e("count-inner"))
                }, D(i(ye)) + " / " + D(_.maxlength), 3)
              ], 2)) : X("v-if", !0),
              i(Q) && i(ie) && i(oe) ? (P(), ne(i(Re), {
                key: 4,
                class: j([
                  i(g).e("icon"),
                  i(g).e("validateIcon"),
                  i(g).is("loading", i(Q) === "validating")
                ])
              }, {
                default: Z(() => [
                  (P(), ne(Je(i(ie))))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0)
            ], 2)
          ], 2)) : X("v-if", !0)
        ], 2),
        X(" append slot "),
        _.$slots.append ? (P(), U("div", {
          key: 1,
          class: j(i(g).be("group", "append"))
        }, [
          se(_.$slots, "append")
        ], 2)) : X("v-if", !0)
      ], 64)) : (P(), U(qe, { key: 1 }, [
        X(" textarea "),
        b("textarea", Dn({
          id: i(p),
          ref_key: "textarea",
          ref: d,
          class: [i(m).e("inner"), i(g).is("focus", i(z))]
        }, i(s), {
          minlength: _.minlength,
          maxlength: _.maxlength,
          tabindex: _.tabindex,
          disabled: i(h),
          readonly: _.readonly,
          autocomplete: _.autocomplete,
          style: i(F),
          "aria-label": _.ariaLabel,
          placeholder: _.placeholder,
          form: _.form,
          autofocus: _.autofocus,
          rows: _.rows,
          role: _.containerRole,
          onCompositionstart: i(st),
          onCompositionupdate: i(lt),
          onCompositionend: i(it),
          onInput: pt,
          onFocus: i(W),
          onBlur: i(ee),
          onChange: at,
          onKeydown: Y
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        i(G) ? (P(), U("span", {
          key: 0,
          style: je(T.value),
          class: j(i(g).e("count"))
        }, D(i(ye)) + " / " + D(_.maxlength), 7)) : X("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Rh = /* @__PURE__ */ Te(Nh, [["__file", "input.vue"]]);
const $h = At(Rh), Nn = 4, Mh = {
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
}, Fh = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ea = Symbol("scrollbarContextKey"), Dh = Se({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Vh = "Thumb", xh = /* @__PURE__ */ J({
  __name: "thumb",
  props: Dh,
  setup(e) {
    const t = e, n = he(Ea), o = Me("scrollbar");
    n || va(Vh, "can not inject scrollbar context");
    const r = B(), s = B(), a = B({}), l = B(!1);
    let u = !1, c = !1, f = $e ? document.onselectstart : null;
    const p = k(() => Mh[t.vertical ? "vertical" : "horizontal"]), v = k(() => Fh({
      size: t.size,
      move: t.move,
      bar: p.value
    })), h = k(() => r.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / s.value[p.value.offset]), g = (A) => {
      var O;
      if (A.stopPropagation(), A.ctrlKey || [1, 2].includes(A.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), E(A);
      const z = A.currentTarget;
      z && (a.value[p.value.axis] = z[p.value.offset] - (A[p.value.client] - z.getBoundingClientRect()[p.value.direction]));
    }, m = (A) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const O = Math.abs(A.target.getBoundingClientRect()[p.value.direction] - A[p.value.client]), z = s.value[p.value.offset] / 2, W = (O - z) * 100 * h.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = W * n.wrapElement[p.value.scrollSize] / 100;
    }, E = (A) => {
      A.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", C), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (A) => {
      if (!r.value || !s.value || u === !1)
        return;
      const O = a.value[p.value.axis];
      if (!O)
        return;
      const z = (r.value.getBoundingClientRect()[p.value.direction] - A[p.value.client]) * -1, W = s.value[p.value.offset] - O, ee = (z - W) * 100 * h.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = ee * n.wrapElement[p.value.scrollSize] / 100;
    }, C = () => {
      u = !1, a.value[p.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", C), y(), c && (l.value = !1);
    }, L = () => {
      c = !1, l.value = !!t.size;
    }, T = () => {
      c = !0, l.value = u;
    };
    zt(() => {
      y(), document.removeEventListener("mouseup", C);
    });
    const y = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Tt(Gt(n, "scrollbarElement"), "mousemove", L), Tt(Gt(n, "scrollbarElement"), "mouseleave", T), (A, O) => (P(), ne(Yn, {
      name: i(o).b("fade"),
      persisted: ""
    }, {
      default: Z(() => [
        xe(b("div", {
          ref_key: "instance",
          ref: r,
          class: j([i(o).e("bar"), i(o).is(i(p).key)]),
          onMousedown: m
        }, [
          b("div", {
            ref_key: "thumb",
            ref: s,
            class: j(i(o).e("thumb")),
            style: je(i(v)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [tn, A.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var cl = /* @__PURE__ */ Te(xh, [["__file", "thumb.vue"]]);
const Bh = Se({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), jh = /* @__PURE__ */ J({
  __name: "bar",
  props: Bh,
  setup(e, { expose: t }) {
    const n = e, o = he(Ea), r = B(0), s = B(0), a = B(""), l = B(""), u = B(1), c = B(1);
    return t({
      handleScroll: (v) => {
        if (v) {
          const h = v.offsetHeight - Nn, g = v.offsetWidth - Nn;
          s.value = v.scrollTop * 100 / h * u.value, r.value = v.scrollLeft * 100 / g * c.value;
        }
      },
      update: () => {
        const v = o?.wrapElement;
        if (!v)
          return;
        const h = v.offsetHeight - Nn, g = v.offsetWidth - Nn, m = h ** 2 / v.scrollHeight, E = g ** 2 / v.scrollWidth, d = Math.max(m, n.minSize), C = Math.max(E, n.minSize);
        u.value = m / (h - m) / (d / (h - d)), c.value = E / (g - E) / (C / (g - C)), l.value = d + Nn < h ? `${d}px` : "", a.value = C + Nn < g ? `${C}px` : "";
      }
    }), (v, h) => (P(), U(qe, null, [
      V(cl, {
        move: r.value,
        ratio: c.value,
        size: a.value,
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      V(cl, {
        move: s.value,
        ratio: u.value,
        size: l.value,
        vertical: "",
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var zh = /* @__PURE__ */ Te(jh, [["__file", "bar.vue"]]);
const Wh = Se({
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
    type: ae([String, Object, Array]),
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
  ...In(["ariaLabel", "ariaOrientation"])
}), Uh = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ge)
}, Hh = "ElScrollbar", Kh = J({
  name: Hh
}), Gh = /* @__PURE__ */ J({
  ...Kh,
  props: Wh,
  emits: Uh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Me("scrollbar");
    let s, a, l = 0, u = 0;
    const c = B(), f = B(), p = B(), v = B(), h = k(() => {
      const y = {};
      return o.height && (y.height = jn(o.height)), o.maxHeight && (y.maxHeight = jn(o.maxHeight)), [o.wrapStyle, y];
    }), g = k(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), m = k(() => [r.e("view"), o.viewClass]), E = () => {
      var y;
      f.value && ((y = v.value) == null || y.handleScroll(f.value), l = f.value.scrollTop, u = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function d(y, A) {
      dt(y) ? f.value.scrollTo(y) : ge(y) && ge(A) && f.value.scrollTo(y, A);
    }
    const C = (y) => {
      ge(y) && (f.value.scrollTop = y);
    }, L = (y) => {
      ge(y) && (f.value.scrollLeft = y);
    }, T = () => {
      var y;
      (y = v.value) == null || y.update();
    };
    return le(() => o.noresize, (y) => {
      y ? (s?.(), a?.()) : ({ stop: s } = Nt(p, T), a = Tt("resize", T));
    }, { immediate: !0 }), le(() => [o.maxHeight, o.height], () => {
      o.native || ke(() => {
        var y;
        T(), f.value && ((y = v.value) == null || y.handleScroll(f.value));
      });
    }), xt(Ea, Sn({
      scrollbarElement: c,
      wrapElement: f
    })), ec(() => {
      f.value && (f.value.scrollTop = l, f.value.scrollLeft = u);
    }), Ne(() => {
      o.native || ke(() => {
        T();
      });
    }), Vl(() => T()), t({
      wrapRef: f,
      update: T,
      scrollTo: d,
      setScrollTop: C,
      setScrollLeft: L,
      handleScroll: E
    }), (y, A) => (P(), U("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: j(i(r).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: f,
        class: j(i(g)),
        style: je(i(h)),
        tabindex: y.tabindex,
        onScroll: E
      }, [
        (P(), ne(Je(y.tag), {
          id: y.id,
          ref_key: "resizeRef",
          ref: p,
          class: j(i(m)),
          style: je(y.viewStyle),
          role: y.role,
          "aria-label": y.ariaLabel,
          "aria-orientation": y.ariaOrientation
        }, {
          default: Z(() => [
            se(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      y.native ? X("v-if", !0) : (P(), ne(zh, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        always: y.always,
        "min-size": y.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Yh = /* @__PURE__ */ Te(Gh, [["__file", "scrollbar.vue"]]);
const qh = At(Yh), Ca = Symbol("popper"), Qi = Symbol("popperContent"), Xh = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], eu = Se({
  role: {
    type: String,
    values: Xh,
    default: "tooltip"
  }
}), Zh = J({
  name: "ElPopper",
  inheritAttrs: !1
}), Jh = /* @__PURE__ */ J({
  ...Zh,
  props: eu,
  setup(e, { expose: t }) {
    const n = e, o = B(), r = B(), s = B(), a = B(), l = k(() => n.role), u = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: l
    };
    return t(u), xt(Ca, u), (c, f) => se(c.$slots, "default");
  }
});
var Qh = /* @__PURE__ */ Te(Jh, [["__file", "popper.vue"]]);
const tu = Se({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), e0 = J({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), t0 = /* @__PURE__ */ J({
  ...e0,
  props: tu,
  setup(e, { expose: t }) {
    const n = e, o = Me("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = he(Qi, void 0);
    return le(() => n.arrowOffset, (l) => {
      r.value = l;
    }), zt(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (l, u) => (P(), U("span", {
      ref_key: "arrowRef",
      ref: s,
      class: j(i(o).e("arrow")),
      style: je(i(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var n0 = /* @__PURE__ */ Te(t0, [["__file", "arrow.vue"]]);
const nu = Se({
  virtualRef: {
    type: ae(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: ae(Function)
  },
  onMouseleave: {
    type: ae(Function)
  },
  onClick: {
    type: ae(Function)
  },
  onKeydown: {
    type: ae(Function)
  },
  onFocus: {
    type: ae(Function)
  },
  onBlur: {
    type: ae(Function)
  },
  onContextmenu: {
    type: ae(Function)
  },
  id: String,
  open: Boolean
}), ou = Symbol("elForwardRef"), o0 = (e) => {
  xt(ou, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, r0 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Hr = (e) => {
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
}, a0 = "ElOnlyChild", s0 = J({
  name: a0,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = he(ou), s = r0((o = r?.setForwardRef) != null ? o : fo);
    return () => {
      var a;
      const l = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!l || l.length > 1)
        return null;
      const u = ru(l);
      return u ? xe(tc(u, n), [[s]]) : null;
    };
  }
});
function ru(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (dt(n))
      switch (n.type) {
        case nc:
          continue;
        case Fl:
        case "svg":
          return dl(n);
        case qe:
          return ru(n.children);
        default:
          return n;
      }
    return dl(n);
  }
  return null;
}
function dl(e) {
  const t = Me("only-child");
  return V("span", {
    class: t.e("content")
  }, [e]);
}
const l0 = J({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), i0 = /* @__PURE__ */ J({
  ...l0,
  props: nu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = he(Ca, void 0);
    o0(r);
    const s = k(() => l.value ? n.id : void 0), a = k(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = k(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), u = k(() => l.value ? `${n.open}` : void 0);
    let c;
    const f = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return Ne(() => {
      le(() => n.virtualRef, (p) => {
        p && (r.value = Xt(p));
      }, {
        immediate: !0
      }), le(r, (p, v) => {
        c?.(), c = void 0, St(p) && (f.forEach((h) => {
          var g;
          const m = n[h];
          m && (p.addEventListener(h.slice(2).toLowerCase(), m), (g = v?.removeEventListener) == null || g.call(v, h.slice(2).toLowerCase(), m));
        }), Hr(p) && (c = le([s, a, l, u], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, m) => {
            Qt(h[m]) ? p.removeAttribute(g) : p.setAttribute(g, h[m]);
          });
        }, { immediate: !0 }))), St(v) && Hr(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => v.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), zt(() => {
      if (c?.(), c = void 0, r.value && St(r.value)) {
        const p = r.value;
        f.forEach((v) => {
          const h = n[v];
          h && p.removeEventListener(v.slice(2).toLowerCase(), h);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (p, v) => p.virtualTriggering ? X("v-if", !0) : (P(), ne(i(s0), Dn({ key: 0 }, p.$attrs, {
      "aria-controls": i(s),
      "aria-describedby": i(a),
      "aria-expanded": i(u),
      "aria-haspopup": i(l)
    }), {
      default: Z(() => [
        se(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var u0 = /* @__PURE__ */ Te(i0, [["__file", "trigger.vue"]]);
const Ar = "focus-trap.focus-after-trapped", Lr = "focus-trap.focus-after-released", c0 = "focus-trap.focusout-prevented", fl = {
  cancelable: !0,
  bubbles: !1
}, d0 = {
  cancelable: !0,
  bubbles: !1
}, pl = "focusAfterTrapped", ml = "focusAfterReleased", f0 = Symbol("elFocusTrap"), Sa = B(), pr = B(0), Ta = B(0);
let Po = 0;
const au = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, vl = (e, t) => {
  for (const n of e)
    if (!p0(n, t))
      return n;
}, p0 = (e, t) => {
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
}, m0 = (e) => {
  const t = au(e), n = vl(t, e), o = vl(t.reverse(), e);
  return [n, o];
}, v0 = (e) => e instanceof HTMLInputElement && "select" in e, Ht = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    St(e) && !Hr(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Ta.value = window.performance.now(), e !== n && v0(e) && t && e.select(), St(e) && o && e.removeAttribute("tabindex");
  }
};
function gl(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const g0 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = gl(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = gl(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, h0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Ht(o, t), document.activeElement !== n)
      return;
}, hl = g0(), y0 = () => pr.value > Ta.value, No = () => {
  Sa.value = "pointer", pr.value = window.performance.now();
}, yl = () => {
  Sa.value = "keyboard", pr.value = window.performance.now();
}, b0 = () => (Ne(() => {
  Po === 0 && (document.addEventListener("mousedown", No), document.addEventListener("touchstart", No), document.addEventListener("keydown", yl)), Po++;
}), zt(() => {
  Po--, Po <= 0 && (document.removeEventListener("mousedown", No), document.removeEventListener("touchstart", No), document.removeEventListener("keydown", yl));
}), {
  focusReason: Sa,
  lastUserFocusTimestamp: pr,
  lastAutomatedFocusTimestamp: Ta
}), Ro = (e) => new CustomEvent(c0, {
  ...d0,
  detail: e
}), Dt = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Mn = [];
const bl = (e) => {
  e.code === Dt.esc && Mn.forEach((t) => t(e));
}, _0 = (e) => {
  Ne(() => {
    Mn.length === 0 && document.addEventListener("keydown", bl), $e && Mn.push(e);
  }), zt(() => {
    Mn = Mn.filter((t) => t !== e), Mn.length === 0 && $e && document.removeEventListener("keydown", bl);
  });
}, w0 = J({
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
    pl,
    ml,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = B();
    let o, r;
    const { focusReason: s } = b0();
    _0((g) => {
      e.trapped && !a.paused && t("release-requested", g);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (g) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { code: m, altKey: E, ctrlKey: d, metaKey: C, currentTarget: L, shiftKey: T } = g, { loop: y } = e, A = m === Dt.tab && !E && !d && !C, O = document.activeElement;
      if (A && O) {
        const z = L, [W, ee] = m0(z);
        if (W && ee) {
          if (!T && O === ee) {
            const Q = Ro({
              focusReason: s.value
            });
            t("focusout-prevented", Q), Q.defaultPrevented || (g.preventDefault(), y && Ht(W, !0));
          } else if (T && [W, z].includes(O)) {
            const Q = Ro({
              focusReason: s.value
            });
            t("focusout-prevented", Q), Q.defaultPrevented || (g.preventDefault(), y && Ht(ee, !0));
          }
        } else if (O === z) {
          const Q = Ro({
            focusReason: s.value
          });
          t("focusout-prevented", Q), Q.defaultPrevented || g.preventDefault();
        }
      }
    };
    xt(f0, {
      focusTrapRef: n,
      onKeydown: l
    }), le(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), le([n], ([g], [m]) => {
      g && (g.addEventListener("keydown", l), g.addEventListener("focusin", f), g.addEventListener("focusout", p)), m && (m.removeEventListener("keydown", l), m.removeEventListener("focusin", f), m.removeEventListener("focusout", p));
    });
    const u = (g) => {
      t(pl, g);
    }, c = (g) => t(ml, g), f = (g) => {
      const m = i(n);
      if (!m)
        return;
      const E = g.target, d = g.relatedTarget, C = E && m.contains(E);
      e.trapped || d && m.contains(d) || (o = d), C && t("focusin", g), !a.paused && e.trapped && (C ? r = E : Ht(r, !0));
    }, p = (g) => {
      const m = i(n);
      if (!(a.paused || !m))
        if (e.trapped) {
          const E = g.relatedTarget;
          !Qt(E) && !m.contains(E) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const d = Ro({
                focusReason: s.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Ht(r, !0);
            }
          }, 0);
        } else {
          const E = g.target;
          E && m.contains(E) || t("focusout", g);
        }
    };
    async function v() {
      await ke();
      const g = i(n);
      if (g) {
        hl.push(a);
        const m = g.contains(document.activeElement) ? o : document.activeElement;
        if (o = m, !g.contains(m)) {
          const d = new Event(Ar, fl);
          g.addEventListener(Ar, u), g.dispatchEvent(d), d.defaultPrevented || ke(() => {
            let C = e.focusStartEl;
            Xe(C) || (Ht(C), document.activeElement !== C && (C = "first")), C === "first" && h0(au(g), !0), (document.activeElement === m || C === "container") && Ht(g);
          });
        }
      }
    }
    function h() {
      const g = i(n);
      if (g) {
        g.removeEventListener(Ar, u);
        const m = new CustomEvent(Lr, {
          ...fl,
          detail: {
            focusReason: s.value
          }
        });
        g.addEventListener(Lr, c), g.dispatchEvent(m), !m.defaultPrevented && (s.value == "keyboard" || !y0() || g.contains(document.activeElement)) && Ht(o ?? document.body), g.removeEventListener(Lr, c), hl.remove(a);
      }
    }
    return Ne(() => {
      e.trapped && v(), le(() => e.trapped, (g) => {
        g ? v() : h();
      });
    }), zt(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function E0(e, t, n, o, r, s) {
  return se(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var C0 = /* @__PURE__ */ Te(w0, [["render", E0], ["__file", "focus-trap.vue"]]), tt = "top", ht = "bottom", yt = "right", nt = "left", Oa = "auto", wo = [tt, ht, yt, nt], zn = "start", vo = "end", S0 = "clippingParents", su = "viewport", Qn = "popper", T0 = "reference", _l = wo.reduce(function(e, t) {
  return e.concat([t + "-" + zn, t + "-" + vo]);
}, []), mr = [].concat(wo, [Oa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + zn, t + "-" + vo]);
}, []), O0 = "beforeRead", A0 = "read", L0 = "afterRead", k0 = "beforeMain", I0 = "main", P0 = "afterMain", N0 = "beforeWrite", R0 = "write", $0 = "afterWrite", M0 = [O0, A0, L0, k0, I0, P0, N0, R0, $0];
function jt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ft(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function On(e) {
  var t = ft(e).Element;
  return e instanceof t || e instanceof Element;
}
function gt(e) {
  var t = ft(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Aa(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ft(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function F0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !gt(s) || !jt(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var l = r[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function D0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = a.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !gt(r) || !jt(r) || (Object.assign(r.style, l), Object.keys(s).forEach(function(u) {
        r.removeAttribute(u);
      }));
    });
  };
}
var lu = { name: "applyStyles", enabled: !0, phase: "write", fn: F0, effect: D0, requires: ["computeStyles"] };
function Vt(e) {
  return e.split("-")[0];
}
var Cn = Math.max, Zo = Math.min, Wn = Math.round;
function Kr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function iu() {
  return !/^((?!chrome|android).)*safari/i.test(Kr());
}
function Un(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && gt(e) && (r = e.offsetWidth > 0 && Wn(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Wn(o.height) / e.offsetHeight || 1);
  var a = On(e) ? ft(e) : window, l = a.visualViewport, u = !iu() && n, c = (o.left + (u && l ? l.offsetLeft : 0)) / r, f = (o.top + (u && l ? l.offsetTop : 0)) / s, p = o.width / r, v = o.height / s;
  return { width: p, height: v, top: f, right: c + p, bottom: f + v, left: c, x: c, y: f };
}
function La(e) {
  var t = Un(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function uu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Aa(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function on(e) {
  return ft(e).getComputedStyle(e);
}
function V0(e) {
  return ["table", "td", "th"].indexOf(jt(e)) >= 0;
}
function yn(e) {
  return ((On(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function vr(e) {
  return jt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Aa(e) ? e.host : null) || yn(e);
}
function wl(e) {
  return !gt(e) || on(e).position === "fixed" ? null : e.offsetParent;
}
function x0(e) {
  var t = /firefox/i.test(Kr()), n = /Trident/i.test(Kr());
  if (n && gt(e)) {
    var o = on(e);
    if (o.position === "fixed") return null;
  }
  var r = vr(e);
  for (Aa(r) && (r = r.host); gt(r) && ["html", "body"].indexOf(jt(r)) < 0; ) {
    var s = on(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function Eo(e) {
  for (var t = ft(e), n = wl(e); n && V0(n) && on(n).position === "static"; ) n = wl(n);
  return n && (jt(n) === "html" || jt(n) === "body" && on(n).position === "static") ? t : n || x0(e) || t;
}
function ka(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function oo(e, t, n) {
  return Cn(e, Zo(t, n));
}
function B0(e, t, n) {
  var o = oo(e, t, n);
  return o > n ? n : o;
}
function cu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function du(e) {
  return Object.assign({}, cu(), e);
}
function fu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var j0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, du(typeof e != "number" ? e : fu(e, wo));
};
function z0(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, l = Vt(n.placement), u = ka(l), c = [nt, yt].indexOf(l) >= 0, f = c ? "height" : "width";
  if (!(!s || !a)) {
    var p = j0(r.padding, n), v = La(s), h = u === "y" ? tt : nt, g = u === "y" ? ht : yt, m = n.rects.reference[f] + n.rects.reference[u] - a[u] - n.rects.popper[f], E = a[u] - n.rects.reference[u], d = Eo(s), C = d ? u === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, L = m / 2 - E / 2, T = p[h], y = C - v[f] - p[g], A = C / 2 - v[f] / 2 + L, O = oo(T, A, y), z = u;
    n.modifiersData[o] = (t = {}, t[z] = O, t.centerOffset = O - A, t);
  }
}
function W0(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || uu(t.elements.popper, r) && (t.elements.arrow = r));
}
var U0 = { name: "arrow", enabled: !0, phase: "main", fn: z0, effect: W0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Hn(e) {
  return e.split("-")[1];
}
var H0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function K0(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Wn(n * r) / r || 0, y: Wn(o * r) / r || 0 };
}
function El(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, l = e.position, u = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, p = e.isFixed, v = a.x, h = v === void 0 ? 0 : v, g = a.y, m = g === void 0 ? 0 : g, E = typeof f == "function" ? f({ x: h, y: m }) : { x: h, y: m };
  h = E.x, m = E.y;
  var d = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), L = nt, T = tt, y = window;
  if (c) {
    var A = Eo(n), O = "clientHeight", z = "clientWidth";
    if (A === ft(n) && (A = yn(n), on(A).position !== "static" && l === "absolute" && (O = "scrollHeight", z = "scrollWidth")), A = A, r === tt || (r === nt || r === yt) && s === vo) {
      T = ht;
      var W = p && A === y && y.visualViewport ? y.visualViewport.height : A[O];
      m -= W - o.height, m *= u ? 1 : -1;
    }
    if (r === nt || (r === tt || r === ht) && s === vo) {
      L = yt;
      var ee = p && A === y && y.visualViewport ? y.visualViewport.width : A[z];
      h -= ee - o.width, h *= u ? 1 : -1;
    }
  }
  var oe = Object.assign({ position: l }, c && H0), Q = f === !0 ? K0({ x: h, y: m }, ft(n)) : { x: h, y: m };
  if (h = Q.x, m = Q.y, u) {
    var ie;
    return Object.assign({}, oe, (ie = {}, ie[T] = C ? "0" : "", ie[L] = d ? "0" : "", ie.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", ie));
  }
  return Object.assign({}, oe, (t = {}, t[T] = C ? m + "px" : "", t[L] = d ? h + "px" : "", t.transform = "", t));
}
function G0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, l = n.roundOffsets, u = l === void 0 ? !0 : l, c = { placement: Vt(t.placement), variation: Hn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, El(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, El(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var pu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: G0, data: {} }, $o = { passive: !0 };
function Y0(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, l = a === void 0 ? !0 : a, u = ft(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, $o);
  }), l && u.addEventListener("resize", n.update, $o), function() {
    s && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, $o);
    }), l && u.removeEventListener("resize", n.update, $o);
  };
}
var mu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Y0, data: {} }, q0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return q0[t];
  });
}
var X0 = { start: "end", end: "start" };
function Cl(e) {
  return e.replace(/start|end/g, function(t) {
    return X0[t];
  });
}
function Ia(e) {
  var t = ft(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Pa(e) {
  return Un(yn(e)).left + Ia(e).scrollLeft;
}
function Z0(e, t) {
  var n = ft(e), o = yn(e), r = n.visualViewport, s = o.clientWidth, a = o.clientHeight, l = 0, u = 0;
  if (r) {
    s = r.width, a = r.height;
    var c = iu();
    (c || !c && t === "fixed") && (l = r.offsetLeft, u = r.offsetTop);
  }
  return { width: s, height: a, x: l + Pa(e), y: u };
}
function J0(e) {
  var t, n = yn(e), o = Ia(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = Cn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Cn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + Pa(e), u = -o.scrollTop;
  return on(r || n).direction === "rtl" && (l += Cn(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: l, y: u };
}
function Na(e) {
  var t = on(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function vu(e) {
  return ["html", "body", "#document"].indexOf(jt(e)) >= 0 ? e.ownerDocument.body : gt(e) && Na(e) ? e : vu(vr(e));
}
function ro(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = vu(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = ft(o), a = r ? [s].concat(s.visualViewport || [], Na(o) ? o : []) : o, l = t.concat(a);
  return r ? l : l.concat(ro(vr(a)));
}
function Gr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Q0(e, t) {
  var n = Un(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Sl(e, t, n) {
  return t === su ? Gr(Z0(e, n)) : On(t) ? Q0(t, n) : Gr(J0(yn(e)));
}
function ey(e) {
  var t = ro(vr(e)), n = ["absolute", "fixed"].indexOf(on(e).position) >= 0, o = n && gt(e) ? Eo(e) : e;
  return On(o) ? t.filter(function(r) {
    return On(r) && uu(r, o) && jt(r) !== "body";
  }) : [];
}
function ty(e, t, n, o) {
  var r = t === "clippingParents" ? ey(e) : [].concat(t), s = [].concat(r, [n]), a = s[0], l = s.reduce(function(u, c) {
    var f = Sl(e, c, o);
    return u.top = Cn(f.top, u.top), u.right = Zo(f.right, u.right), u.bottom = Zo(f.bottom, u.bottom), u.left = Cn(f.left, u.left), u;
  }, Sl(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function gu(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Vt(o) : null, s = o ? Hn(o) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, u;
  switch (r) {
    case tt:
      u = { x: a, y: t.y - n.height };
      break;
    case ht:
      u = { x: a, y: t.y + t.height };
      break;
    case yt:
      u = { x: t.x + t.width, y: l };
      break;
    case nt:
      u = { x: t.x - n.width, y: l };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = r ? ka(r) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (s) {
      case zn:
        u[c] = u[c] - (t[f] / 2 - n[f] / 2);
        break;
      case vo:
        u[c] = u[c] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return u;
}
function go(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, a = s === void 0 ? e.strategy : s, l = n.boundary, u = l === void 0 ? S0 : l, c = n.rootBoundary, f = c === void 0 ? su : c, p = n.elementContext, v = p === void 0 ? Qn : p, h = n.altBoundary, g = h === void 0 ? !1 : h, m = n.padding, E = m === void 0 ? 0 : m, d = du(typeof E != "number" ? E : fu(E, wo)), C = v === Qn ? T0 : Qn, L = e.rects.popper, T = e.elements[g ? C : v], y = ty(On(T) ? T : T.contextElement || yn(e.elements.popper), u, f, a), A = Un(e.elements.reference), O = gu({ reference: A, element: L, placement: r }), z = Gr(Object.assign({}, L, O)), W = v === Qn ? z : A, ee = { top: y.top - W.top + d.top, bottom: W.bottom - y.bottom + d.bottom, left: y.left - W.left + d.left, right: W.right - y.right + d.right }, oe = e.modifiersData.offset;
  if (v === Qn && oe) {
    var Q = oe[r];
    Object.keys(ee).forEach(function(ie) {
      var Ee = [yt, ht].indexOf(ie) >= 0 ? 1 : -1, M = [tt, ht].indexOf(ie) >= 0 ? "y" : "x";
      ee[ie] += Q[M] * Ee;
    });
  }
  return ee;
}
function ny(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, l = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? mr : u, f = Hn(o), p = f ? l ? _l : _l.filter(function(g) {
    return Hn(g) === f;
  }) : wo, v = p.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  v.length === 0 && (v = p);
  var h = v.reduce(function(g, m) {
    return g[m] = go(e, { placement: m, boundary: r, rootBoundary: s, padding: a })[Vt(m)], g;
  }, {});
  return Object.keys(h).sort(function(g, m) {
    return h[g] - h[m];
  });
}
function oy(e) {
  if (Vt(e) === Oa) return [];
  var t = xo(e);
  return [Cl(e), t, Cl(t)];
}
function ry(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, l = a === void 0 ? !0 : a, u = n.fallbackPlacements, c = n.padding, f = n.boundary, p = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, g = h === void 0 ? !0 : h, m = n.allowedAutoPlacements, E = t.options.placement, d = Vt(E), C = d === E, L = u || (C || !g ? [xo(E)] : oy(E)), T = [E].concat(L).reduce(function(We, Be) {
      return We.concat(Vt(Be) === Oa ? ny(t, { placement: Be, boundary: f, rootBoundary: p, padding: c, flipVariations: g, allowedAutoPlacements: m }) : Be);
    }, []), y = t.rects.reference, A = t.rects.popper, O = /* @__PURE__ */ new Map(), z = !0, W = T[0], ee = 0; ee < T.length; ee++) {
      var oe = T[ee], Q = Vt(oe), ie = Hn(oe) === zn, Ee = [tt, ht].indexOf(Q) >= 0, M = Ee ? "width" : "height", F = go(t, { placement: oe, boundary: f, rootBoundary: p, altBoundary: v, padding: c }), I = Ee ? ie ? yt : nt : ie ? ht : tt;
      y[M] > A[M] && (I = xo(I));
      var x = xo(I), H = [];
      if (s && H.push(F[Q] <= 0), l && H.push(F[I] <= 0, F[x] <= 0), H.every(function(We) {
        return We;
      })) {
        W = oe, z = !1;
        break;
      }
      O.set(oe, H);
    }
    if (z) for (var G = g ? 3 : 1, ye = function(We) {
      var Be = T.find(function(Ue) {
        var He = O.get(Ue);
        if (He) return He.slice(0, We).every(function(be) {
          return be;
        });
      });
      if (Be) return W = Be, "break";
    }, q = G; q > 0; q--) {
      var we = ye(q);
      if (we === "break") break;
    }
    t.placement !== W && (t.modifiersData[o]._skip = !0, t.placement = W, t.reset = !0);
  }
}
var ay = { name: "flip", enabled: !0, phase: "main", fn: ry, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Tl(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ol(e) {
  return [tt, yt, ht, nt].some(function(t) {
    return e[t] >= 0;
  });
}
function sy(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = go(t, { elementContext: "reference" }), l = go(t, { altBoundary: !0 }), u = Tl(a, o), c = Tl(l, r, s), f = Ol(u), p = Ol(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var ly = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: sy };
function iy(e, t, n) {
  var o = Vt(e), r = [nt, tt].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * r, [nt, yt].indexOf(o) >= 0 ? { x: l, y: a } : { x: a, y: l };
}
function uy(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = mr.reduce(function(f, p) {
    return f[p] = iy(p, t.rects, s), f;
  }, {}), l = a[t.placement], u = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = a;
}
var cy = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: uy };
function dy(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = gu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var hu = { name: "popperOffsets", enabled: !0, phase: "read", fn: dy, data: {} };
function fy(e) {
  return e === "x" ? "y" : "x";
}
function py(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, l = a === void 0 ? !1 : a, u = n.boundary, c = n.rootBoundary, f = n.altBoundary, p = n.padding, v = n.tether, h = v === void 0 ? !0 : v, g = n.tetherOffset, m = g === void 0 ? 0 : g, E = go(t, { boundary: u, rootBoundary: c, padding: p, altBoundary: f }), d = Vt(t.placement), C = Hn(t.placement), L = !C, T = ka(d), y = fy(T), A = t.modifiersData.popperOffsets, O = t.rects.reference, z = t.rects.popper, W = typeof m == "function" ? m(Object.assign({}, t.rects, { placement: t.placement })) : m, ee = typeof W == "number" ? { mainAxis: W, altAxis: W } : Object.assign({ mainAxis: 0, altAxis: 0 }, W), oe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Q = { x: 0, y: 0 };
  if (A) {
    if (s) {
      var ie, Ee = T === "y" ? tt : nt, M = T === "y" ? ht : yt, F = T === "y" ? "height" : "width", I = A[T], x = I + E[Ee], H = I - E[M], G = h ? -z[F] / 2 : 0, ye = C === zn ? O[F] : z[F], q = C === zn ? -z[F] : -O[F], we = t.elements.arrow, We = h && we ? La(we) : { width: 0, height: 0 }, Be = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cu(), Ue = Be[Ee], He = Be[M], be = oo(0, O[F], We[F]), rt = L ? O[F] / 2 - G - be - Ue - ee.mainAxis : ye - be - Ue - ee.mainAxis, pt = L ? -O[F] / 2 + G + be + He + ee.mainAxis : q + be + He + ee.mainAxis, at = t.elements.arrow && Eo(t.elements.arrow), bt = at ? T === "y" ? at.clientTop || 0 : at.clientLeft || 0 : 0, st = (ie = oe?.[T]) != null ? ie : 0, lt = I + rt - st - bt, it = I + pt - st, mt = oo(h ? Zo(x, lt) : x, I, h ? Cn(H, it) : H);
      A[T] = mt, Q[T] = mt - I;
    }
    if (l) {
      var Lt, w = T === "x" ? tt : nt, S = T === "x" ? ht : yt, $ = A[y], Y = y === "y" ? "height" : "width", de = $ + E[w], re = $ - E[S], _ = [tt, nt].indexOf(d) !== -1, R = (Lt = oe?.[y]) != null ? Lt : 0, ue = _ ? de : $ - O[Y] - z[Y] - R + ee.altAxis, me = _ ? $ + O[Y] + z[Y] - R - ee.altAxis : re, Ke = h && _ ? B0(ue, $, me) : oo(h ? ue : de, $, h ? me : re);
      A[y] = Ke, Q[y] = Ke - $;
    }
    t.modifiersData[o] = Q;
  }
}
var my = { name: "preventOverflow", enabled: !0, phase: "main", fn: py, requiresIfExists: ["offset"] };
function vy(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function gy(e) {
  return e === ft(e) || !gt(e) ? Ia(e) : vy(e);
}
function hy(e) {
  var t = e.getBoundingClientRect(), n = Wn(t.width) / e.offsetWidth || 1, o = Wn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function yy(e, t, n) {
  n === void 0 && (n = !1);
  var o = gt(t), r = gt(t) && hy(t), s = yn(t), a = Un(e, r, n), l = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (o || !o && !n) && ((jt(t) !== "body" || Na(s)) && (l = gy(t)), gt(t) ? (u = Un(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : s && (u.x = Pa(s))), { x: a.left + l.scrollLeft - u.x, y: a.top + l.scrollTop - u.y, width: a.width, height: a.height };
}
function by(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var u = t.get(l);
        u && r(u);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function _y(e) {
  var t = by(e);
  return M0.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function wy(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Ey(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Al = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ll() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ra(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? Al : r;
  return function(a, l, u) {
    u === void 0 && (u = s);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Al, s), modifiersData: {}, elements: { reference: a, popper: l }, attributes: {}, styles: {} }, f = [], p = !1, v = { state: c, setOptions: function(m) {
      var E = typeof m == "function" ? m(c.options) : m;
      g(), c.options = Object.assign({}, s, c.options, E), c.scrollParents = { reference: On(a) ? ro(a) : a.contextElement ? ro(a.contextElement) : [], popper: ro(l) };
      var d = _y(Ey([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = d.filter(function(C) {
        return C.enabled;
      }), h(), v.update();
    }, forceUpdate: function() {
      if (!p) {
        var m = c.elements, E = m.reference, d = m.popper;
        if (Ll(E, d)) {
          c.rects = { reference: yy(E, Eo(d), c.options.strategy === "fixed"), popper: La(d) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(z) {
            return c.modifiersData[z.name] = Object.assign({}, z.data);
          });
          for (var C = 0; C < c.orderedModifiers.length; C++) {
            if (c.reset === !0) {
              c.reset = !1, C = -1;
              continue;
            }
            var L = c.orderedModifiers[C], T = L.fn, y = L.options, A = y === void 0 ? {} : y, O = L.name;
            typeof T == "function" && (c = T({ state: c, options: A, name: O, instance: v }) || c);
          }
        }
      }
    }, update: wy(function() {
      return new Promise(function(m) {
        v.forceUpdate(), m(c);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!Ll(a, l)) return v;
    v.setOptions(u).then(function(m) {
      !p && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function h() {
      c.orderedModifiers.forEach(function(m) {
        var E = m.name, d = m.options, C = d === void 0 ? {} : d, L = m.effect;
        if (typeof L == "function") {
          var T = L({ state: c, name: E, instance: v, options: C }), y = function() {
          };
          f.push(T || y);
        }
      });
    }
    function g() {
      f.forEach(function(m) {
        return m();
      }), f = [];
    }
    return v;
  };
}
Ra();
var Cy = [mu, hu, pu, lu];
Ra({ defaultModifiers: Cy });
var Sy = [mu, hu, pu, lu, cy, ay, my, U0, ly], Ty = Ra({ defaultModifiers: Sy });
const Oy = ["fixed", "absolute"], Ay = Se({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: ae(Array),
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
    values: mr,
    default: "bottom"
  },
  popperOptions: {
    type: ae(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Oy,
    default: "absolute"
  }
}), yu = Se({
  ...Ay,
  id: String,
  style: {
    type: ae([String, Array, Object])
  },
  className: {
    type: ae([String, Array, Object])
  },
  effect: {
    type: ae(String),
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
    type: ae([String, Array, Object])
  },
  popperStyle: {
    type: ae([String, Array, Object])
  },
  referenceEl: {
    type: ae(Object)
  },
  triggerTargetEl: {
    type: ae(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...In(["ariaLabel"])
}), Ly = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, ky = (e, t) => {
  const n = B(!1), o = B();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var f;
      ((f = c.detail) == null ? void 0 : f.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (o.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, Iy = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Ny(e), ...t]
  };
  return Ry(s, r?.modifiers), s;
}, Py = (e) => {
  if ($e)
    return Xt(e);
};
function Ny(e) {
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
function Ry(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const $y = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = My(u);
      Object.assign(a.value, c);
    },
    requires: ["computeStyles"]
  }, r = k(() => {
    const { onFirstUpdate: u, placement: c, strategy: f, modifiers: p } = i(n);
    return {
      onFirstUpdate: u,
      placement: c || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...p || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = fn(), a = B({
    styles: {
      popper: {
        position: i(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), l = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return le(r, (u) => {
    const c = i(s);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), le([e, t], ([u, c]) => {
    l(), !(!u || !c) && (s.value = Ty(u, c, i(r)));
  }), zt(() => {
    l();
  }), {
    state: k(() => {
      var u;
      return { ...((u = i(s)) == null ? void 0 : u.state) || {} };
    }),
    styles: k(() => i(a).styles),
    attributes: k(() => i(a).attributes),
    update: () => {
      var u;
      return (u = i(s)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = i(s)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: k(() => i(s))
  };
};
function My(e) {
  const t = Object.keys(e.elements), n = Ko(t.map((r) => [r, e.styles[r] || {}])), o = Ko(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const Fy = 0, Dy = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = he(Ca, void 0), s = B(), a = B(), l = k(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = k(() => {
    var d;
    const C = i(s), L = (d = i(a)) != null ? d : Fy;
    return {
      name: "arrow",
      enabled: !eg(C),
      options: {
        element: C,
        padding: L
      }
    };
  }), c = k(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...Iy(e, [
      i(u),
      i(l)
    ])
  })), f = k(() => Py(e.referenceEl) || i(o)), { attributes: p, state: v, styles: h, update: g, forceUpdate: m, instanceRef: E } = $y(f, n, c);
  return le(E, (d) => t.value = d), Ne(() => {
    le(() => {
      var d;
      return (d = i(f)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: p,
    arrowRef: s,
    contentRef: n,
    instanceRef: E,
    state: v,
    styles: h,
    role: r,
    forceUpdate: m,
    update: g
  };
}, Vy = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Ri(), s = Me("popper"), a = k(() => i(t).popper), l = B(ge(e.zIndex) ? e.zIndex : r()), u = k(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), c = k(() => [
    { zIndex: i(l) },
    i(n).popper,
    e.popperStyle || {}
  ]), f = k(() => o.value === "dialog" ? "false" : void 0), p = k(() => i(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: a,
    contentClass: u,
    contentStyle: c,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = ge(e.zIndex) ? e.zIndex : r();
    }
  };
}, xy = J({
  name: "ElPopperContent"
}), By = /* @__PURE__ */ J({
  ...xy,
  props: yu,
  emits: Ly,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: l,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: f
    } = ky(o, n), { attributes: p, arrowRef: v, contentRef: h, styles: g, instanceRef: m, role: E, update: d } = Dy(o), {
      ariaModal: C,
      arrowStyle: L,
      contentAttrs: T,
      contentClass: y,
      contentStyle: A,
      updateZIndex: O
    } = Vy(o, {
      styles: g,
      attributes: p,
      role: E
    }), z = he(Xo, void 0), W = B();
    xt(Qi, {
      arrowStyle: L,
      arrowRef: v,
      arrowOffset: W
    }), z && xt(Xo, {
      ...z,
      addInputId: fo,
      removeInputId: fo
    });
    let ee;
    const oe = (ie = !0) => {
      d(), ie && O();
    }, Q = () => {
      oe(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return Ne(() => {
      le(() => o.triggerTargetEl, (ie, Ee) => {
        ee?.(), ee = void 0;
        const M = i(ie || h.value), F = i(Ee || h.value);
        St(M) && (ee = le([E, () => o.ariaLabel, C, () => o.id], (I) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((x, H) => {
            Qt(I[H]) ? M.removeAttribute(x) : M.setAttribute(x, I[H]);
          });
        }, { immediate: !0 })), F !== M && St(F) && ["role", "aria-label", "aria-modal", "id"].forEach((I) => {
          F.removeAttribute(I);
        });
      }, { immediate: !0 }), le(() => o.visible, Q, { immediate: !0 });
    }), zt(() => {
      ee?.(), ee = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: m,
      updatePopper: oe,
      contentStyle: A
    }), (ie, Ee) => (P(), U("div", Dn({
      ref_key: "contentRef",
      ref: h
    }, i(T), {
      style: i(A),
      class: i(y),
      tabindex: "-1",
      onMouseenter: (M) => ie.$emit("mouseenter", M),
      onMouseleave: (M) => ie.$emit("mouseleave", M)
    }), [
      V(i(C0), {
        trapped: i(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": i(h),
        "focus-start-el": i(r),
        onFocusAfterTrapped: i(l),
        onFocusAfterReleased: i(a),
        onFocusin: i(u),
        onFocusoutPrevented: i(c),
        onReleaseRequested: i(f)
      }, {
        default: Z(() => [
          se(ie.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var jy = /* @__PURE__ */ Te(By, [["__file", "content.vue"]]);
const zy = At(Qh), $a = Symbol("elTooltip");
function kl() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return bo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Wy = Se({
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
}), Uy = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = kl(), {
    registerTimeout: a,
    cancelTimeout: l
  } = kl();
  return {
    onOpen: (f) => {
      s(() => {
        o(f);
        const p = i(n);
        ge(p) && p > 0 && a(() => {
          r(f);
        }, p);
      }, i(e));
    },
    onClose: (f) => {
      l(), s(() => {
        r(f);
      }, i(t));
    }
  };
}, Ma = Se({
  ...Wy,
  ...yu,
  appendTo: {
    type: ae([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: ae(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...In(["ariaLabel"])
}), bu = Se({
  ...nu,
  disabled: Boolean,
  trigger: {
    type: ae([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ae(Array),
    default: () => [Dt.enter, Dt.numpadEnter, Dt.space]
  }
}), Hy = ur({
  type: ae(Boolean),
  default: null
}), Ky = ur({
  type: ae(Function)
}), Gy = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Hy,
    [n]: Ky
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: l,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: f,
      onHide: p
    }) => {
      const v = Qe(), { emit: h } = v, g = v.props, m = k(() => Ae(g[n])), E = k(() => g[e] === null), d = (O) => {
        a.value !== !0 && (a.value = !0, l && (l.value = O), Ae(f) && f(O));
      }, C = (O) => {
        a.value !== !1 && (a.value = !1, l && (l.value = O), Ae(p) && p(O));
      }, L = (O) => {
        if (g.disabled === !0 || Ae(c) && !c())
          return;
        const z = m.value && $e;
        z && h(t, !0), (E.value || !z) && d(O);
      }, T = (O) => {
        if (g.disabled === !0 || !$e)
          return;
        const z = m.value && $e;
        z && h(t, !1), (E.value || !z) && C(O);
      }, y = (O) => {
        pn(O) && (g.disabled && O ? m.value && h(t, !1) : a.value !== O && (O ? d() : C()));
      }, A = () => {
        a.value ? T() : L();
      };
      return le(() => g[e], y), u && v.appContext.config.globalProperties.$route !== void 0 && le(() => ({
        ...v.proxy.$route
      }), () => {
        u.value && a.value && T();
      }), Ne(() => {
        y(g[e]);
      }), {
        hide: T,
        show: L,
        toggle: A,
        hasUpdateHandler: m
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: Yy,
  useModelToggleEmits: qy,
  useModelToggle: Xy
} = Gy("visible"), Zy = Se({
  ...eu,
  ...Yy,
  ...Ma,
  ...bu,
  ...tu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Jy = [
  ...qy,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Qy = (e, t) => Rt(e) ? e.includes(t) : e === t, Rn = (e, t, n) => (o) => {
  Qy(i(e), t) && n(o);
}, Kt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e?.(r);
  if (n === !1 || !s)
    return t?.(r);
}, eb = J({
  name: "ElTooltipTrigger"
}), tb = /* @__PURE__ */ J({
  ...eb,
  props: bu,
  setup(e, { expose: t }) {
    const n = e, o = Me("tooltip"), { controlled: r, id: s, open: a, onOpen: l, onClose: u, onToggle: c } = he($a, void 0), f = B(null), p = () => {
      if (i(r) || n.disabled)
        return !0;
    }, v = Gt(n, "trigger"), h = Kt(p, Rn(v, "hover", l)), g = Kt(p, Rn(v, "hover", u)), m = Kt(p, Rn(v, "click", (T) => {
      T.button === 0 && c(T);
    })), E = Kt(p, Rn(v, "focus", l)), d = Kt(p, Rn(v, "focus", u)), C = Kt(p, Rn(v, "contextmenu", (T) => {
      T.preventDefault(), c(T);
    })), L = Kt(p, (T) => {
      const { code: y } = T;
      n.triggerKeys.includes(y) && (T.preventDefault(), c(T));
    });
    return t({
      triggerRef: f
    }), (T, y) => (P(), ne(i(u0), {
      id: i(s),
      "virtual-ref": T.virtualRef,
      open: i(a),
      "virtual-triggering": T.virtualTriggering,
      class: j(i(o).e("trigger")),
      onBlur: i(d),
      onClick: i(m),
      onContextmenu: i(C),
      onFocus: i(E),
      onMouseenter: i(h),
      onMouseleave: i(g),
      onKeydown: i(L)
    }, {
      default: Z(() => [
        se(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var nb = /* @__PURE__ */ Te(tb, [["__file", "trigger.vue"]]);
const ob = Se({
  to: {
    type: ae([String, Object]),
    required: !0
  },
  disabled: Boolean
}), rb = /* @__PURE__ */ J({
  __name: "teleport",
  props: ob,
  setup(e) {
    return (t, n) => t.disabled ? se(t.$slots, "default", { key: 0 }) : (P(), ne(oc, {
      key: 1,
      to: t.to
    }, [
      se(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var ab = /* @__PURE__ */ Te(rb, [["__file", "teleport.vue"]]);
const sb = At(ab), _u = () => {
  const e = sa(), t = qi(), n = k(() => `${e.value}-popper-container-${t.prefix}`), o = k(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, lb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, ib = () => {
  const { id: e, selector: t } = _u();
  return rc(() => {
    $e && (document.body.querySelector(t.value) || lb(e.value));
  }), {
    id: e,
    selector: t
  };
}, ub = J({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), cb = /* @__PURE__ */ J({
  ...ub,
  props: Ma,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = _u(), r = Me("tooltip"), s = B();
    let a;
    const {
      controlled: l,
      id: u,
      open: c,
      trigger: f,
      onClose: p,
      onOpen: v,
      onShow: h,
      onHide: g,
      onBeforeShow: m,
      onBeforeHide: E
    } = he($a, void 0), d = k(() => n.transition || `${r.namespace.value}-fade-in-linear`), C = k(() => n.persistent);
    zt(() => {
      a?.();
    });
    const L = k(() => i(C) ? !0 : i(c)), T = k(() => n.disabled ? !1 : i(c)), y = k(() => n.appendTo || o.value), A = k(() => {
      var I;
      return (I = n.style) != null ? I : {};
    }), O = B(!0), z = () => {
      g(), F() && Ht(document.body), O.value = !0;
    }, W = () => {
      if (i(l))
        return !0;
    }, ee = Kt(W, () => {
      n.enterable && i(f) === "hover" && v();
    }), oe = Kt(W, () => {
      i(f) === "hover" && p();
    }), Q = () => {
      var I, x;
      (x = (I = s.value) == null ? void 0 : I.updatePopper) == null || x.call(I), m?.();
    }, ie = () => {
      E?.();
    }, Ee = () => {
      h(), a = hg(k(() => {
        var I;
        return (I = s.value) == null ? void 0 : I.popperContentRef;
      }), () => {
        if (i(l))
          return;
        i(f) !== "hover" && p();
      });
    }, M = () => {
      n.virtualTriggering || p();
    }, F = (I) => {
      var x;
      const H = (x = s.value) == null ? void 0 : x.popperContentRef, G = I?.relatedTarget || document.activeElement;
      return H?.contains(G);
    };
    return le(() => i(c), (I) => {
      I ? O.value = !1 : a?.();
    }, {
      flush: "post"
    }), le(() => n.content, () => {
      var I, x;
      (x = (I = s.value) == null ? void 0 : I.updatePopper) == null || x.call(I);
    }), t({
      contentRef: s,
      isFocusInsideContent: F
    }), (I, x) => (P(), ne(i(sb), {
      disabled: !I.teleported,
      to: i(y)
    }, {
      default: Z(() => [
        V(Yn, {
          name: i(d),
          onAfterLeave: z,
          onBeforeEnter: Q,
          onAfterEnter: Ee,
          onBeforeLeave: ie
        }, {
          default: Z(() => [
            i(L) ? xe((P(), ne(i(jy), Dn({
              key: 0,
              id: i(u),
              ref_key: "contentRef",
              ref: s
            }, I.$attrs, {
              "aria-label": I.ariaLabel,
              "aria-hidden": O.value,
              "boundaries-padding": I.boundariesPadding,
              "fallback-placements": I.fallbackPlacements,
              "gpu-acceleration": I.gpuAcceleration,
              offset: I.offset,
              placement: I.placement,
              "popper-options": I.popperOptions,
              strategy: I.strategy,
              effect: I.effect,
              enterable: I.enterable,
              pure: I.pure,
              "popper-class": I.popperClass,
              "popper-style": [I.popperStyle, i(A)],
              "reference-el": I.referenceEl,
              "trigger-target-el": I.triggerTargetEl,
              visible: i(T),
              "z-index": I.zIndex,
              onMouseenter: i(ee),
              onMouseleave: i(oe),
              onBlur: M,
              onClose: i(p)
            }), {
              default: Z(() => [
                se(I.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [tn, i(T)]
            ]) : X("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var db = /* @__PURE__ */ Te(cb, [["__file", "content.vue"]]);
const fb = J({
  name: "ElTooltip"
}), pb = /* @__PURE__ */ J({
  ...fb,
  props: Zy,
  emits: Jy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    ib();
    const r = dr(), s = B(), a = B(), l = () => {
      var d;
      const C = i(s);
      C && ((d = C.popperInstanceRef) == null || d.update());
    }, u = B(!1), c = B(), { show: f, hide: p, hasUpdateHandler: v } = Xy({
      indicator: u,
      toggleReason: c
    }), { onOpen: h, onClose: g } = Uy({
      showAfter: Gt(o, "showAfter"),
      hideAfter: Gt(o, "hideAfter"),
      autoClose: Gt(o, "autoClose"),
      open: f,
      close: p
    }), m = k(() => pn(o.visible) && !v.value);
    xt($a, {
      controlled: m,
      id: r,
      open: Xr(u),
      trigger: Gt(o, "trigger"),
      onOpen: (d) => {
        h(d);
      },
      onClose: (d) => {
        g(d);
      },
      onToggle: (d) => {
        i(u) ? g(d) : h(d);
      },
      onShow: () => {
        n("show", c.value);
      },
      onHide: () => {
        n("hide", c.value);
      },
      onBeforeShow: () => {
        n("before-show", c.value);
      },
      onBeforeHide: () => {
        n("before-hide", c.value);
      },
      updatePopper: l
    }), le(() => o.disabled, (d) => {
      d && u.value && (u.value = !1);
    });
    const E = (d) => {
      var C;
      return (C = a.value) == null ? void 0 : C.isFocusInsideContent(d);
    };
    return ac(() => u.value && p()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: E,
      updatePopper: l,
      onOpen: h,
      onClose: g,
      hide: p
    }), (d, C) => (P(), ne(i(zy), {
      ref_key: "popperRef",
      ref: s,
      role: d.role
    }, {
      default: Z(() => [
        V(nb, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: Z(() => [
            d.$slots.default ? se(d.$slots, "default", { key: 0 }) : X("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        V(db, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": d.ariaLabel,
          "boundaries-padding": d.boundariesPadding,
          content: d.content,
          disabled: d.disabled,
          effect: d.effect,
          enterable: d.enterable,
          "fallback-placements": d.fallbackPlacements,
          "hide-after": d.hideAfter,
          "gpu-acceleration": d.gpuAcceleration,
          offset: d.offset,
          persistent: d.persistent,
          "popper-class": d.popperClass,
          "popper-style": d.popperStyle,
          placement: d.placement,
          "popper-options": d.popperOptions,
          pure: d.pure,
          "raw-content": d.rawContent,
          "reference-el": d.referenceEl,
          "trigger-target-el": d.triggerTargetEl,
          "show-after": d.showAfter,
          strategy: d.strategy,
          teleported: d.teleported,
          transition: d.transition,
          "virtual-triggering": d.virtualTriggering,
          "z-index": d.zIndex,
          "append-to": d.appendTo
        }, {
          default: Z(() => [
            se(d.$slots, "content", {}, () => [
              d.rawContent ? (P(), U("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (P(), U("span", { key: 1 }, D(d.content), 1))
            ]),
            d.showArrow ? (P(), ne(i(n0), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : X("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var mb = /* @__PURE__ */ Te(pb, [["__file", "tooltip.vue"]]);
const vb = At(mb), gb = Se({
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
    type: ae([String, Object, Array])
  },
  offset: {
    type: ae(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), hb = J({
  name: "ElBadge"
}), yb = /* @__PURE__ */ J({
  ...hb,
  props: gb,
  setup(e, { expose: t }) {
    const n = e, o = Me("badge"), r = k(() => n.isDot ? "" : ge(n.value) && ge(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = k(() => {
      var a, l, u, c, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: jn(-((l = (a = n.offset) == null ? void 0 : a[0]) != null ? l : 0)),
          marginTop: jn((c = (u = n.offset) == null ? void 0 : u[1]) != null ? c : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: r
    }), (a, l) => (P(), U("div", {
      class: j(i(o).b())
    }, [
      se(a.$slots, "default"),
      V(Yn, {
        name: `${i(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Z(() => [
          xe(b("sup", {
            class: j([
              i(o).e("content"),
              i(o).em("content", a.type),
              i(o).is("fixed", !!a.$slots.default),
              i(o).is("dot", a.isDot),
              i(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: je(i(s))
          }, [
            se(a.$slots, "content", { value: i(r) }, () => [
              Ze(D(i(r)), 1)
            ])
          ], 6), [
            [tn, !a.hidden && (i(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var bb = /* @__PURE__ */ Te(yb, [["__file", "badge.vue"]]);
const _b = At(bb), wb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Yr = Se({
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
    values: ha
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Eb = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Cb = J({
  name: "ElTag"
}), Sb = /* @__PURE__ */ J({
  ...Cb,
  props: Yr,
  emits: Eb,
  setup(e, { emit: t }) {
    const n = e, o = _o(), r = Me("tag"), s = k(() => {
      const { type: c, hit: f, effect: p, closable: v, round: h } = n;
      return [
        r.b(),
        r.is("closable", v),
        r.m(c || "primary"),
        r.m(o.value),
        r.m(p),
        r.is("hit", f),
        r.is("round", h)
      ];
    }), a = (c) => {
      t("close", c);
    }, l = (c) => {
      t("click", c);
    }, u = (c) => {
      var f, p, v;
      (v = (p = (f = c?.component) == null ? void 0 : f.subTree) == null ? void 0 : p.component) != null && v.bum && (c.component.subTree.component.bum = null);
    };
    return (c, f) => c.disableTransitions ? (P(), U("span", {
      key: 0,
      class: j(i(s)),
      style: je({ backgroundColor: c.color }),
      onClick: l
    }, [
      b("span", {
        class: j(i(r).e("content"))
      }, [
        se(c.$slots, "default")
      ], 2),
      c.closable ? (P(), ne(i(Re), {
        key: 0,
        class: j(i(r).e("close")),
        onClick: Le(a, ["stop"])
      }, {
        default: Z(() => [
          V(i(Yo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : X("v-if", !0)
    ], 6)) : (P(), ne(Yn, {
      key: 1,
      name: `${i(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: u
    }, {
      default: Z(() => [
        b("span", {
          class: j(i(s)),
          style: je({ backgroundColor: c.color }),
          onClick: l
        }, [
          b("span", {
            class: j(i(r).e("content"))
          }, [
            se(c.$slots, "default")
          ], 2),
          c.closable ? (P(), ne(i(Re), {
            key: 0,
            class: j(i(r).e("close")),
            onClick: Le(a, ["stop"])
          }, {
            default: Z(() => [
              V(i(Yo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : X("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Tb = /* @__PURE__ */ Te(Sb, [["__file", "tag.vue"]]);
const Ob = At(Tb), ln = /* @__PURE__ */ new Map();
if ($e) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of ln.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function Il(e, t) {
  let n = [];
  return Rt(t.arg) ? n = t.arg : St(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, a = o.target, l = r?.target, u = !t || !t.instance, c = !a || !l, f = e.contains(a) || e.contains(l), p = e === a, v = n.length && n.some((g) => g?.contains(a)) || n.length && n.includes(l), h = s && (s.contains(a) || s.contains(l));
    u || c || f || p || v || h || t.value(o, r);
  };
}
const Ab = {
  beforeMount(e, t) {
    ln.has(e) || ln.set(e, []), ln.get(e).push({
      documentHandler: Il(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ln.has(e) || ln.set(e, []);
    const n = ln.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: Il(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    ln.delete(e);
  }
}, Lb = Se({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ae(Object)
  },
  size: cr,
  button: {
    type: ae(Object)
  },
  experimentalFeatures: {
    type: ae(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ae(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Vi
}), _t = {};
J({
  name: "ElConfigProvider",
  props: Lb,
  setup(e, { slots: t }) {
    le(() => e.message, (o) => {
      Object.assign(_t, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ji(e);
    return () => se(t, "default", { config: n?.value });
  }
});
const kb = 100, Ib = 600, Pl = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = kb, delay: r = Ib } = Ae(n) ? {} : n;
    let s, a;
    const l = () => Ae(n) ? n() : n.handler(), u = () => {
      a && (clearTimeout(a), a = void 0), s && (clearInterval(s), s = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (u(), l(), document.addEventListener("mouseup", () => u(), {
        once: !0
      }), a = setTimeout(() => {
        s = setInterval(() => {
          l();
        }, o);
      }, r));
    });
  }
}, Pb = Se({
  id: {
    type: String,
    default: void 0
  },
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: Boolean,
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY
  },
  modelValue: Number,
  readonly: Boolean,
  disabled: Boolean,
  size: cr,
  controls: {
    type: Boolean,
    default: !0
  },
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  valueOnClear: {
    type: [String, Number, null],
    validator: (e) => e === null || ge(e) || ["min", "max"].includes(e),
    default: null
  },
  name: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (e) => e >= 0 && e === Number.parseInt(`${e}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...In(["ariaLabel"])
}), Nb = {
  [nn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [en]: (e) => ge(e) || Qt(e),
  [Ve]: (e) => ge(e) || Qt(e)
}, Rb = J({
  name: "ElInputNumber"
}), $b = /* @__PURE__ */ J({
  ...Rb,
  props: Pb,
  emits: Nb,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = ga(), s = Me("input-number"), a = B(), l = Sn({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: u } = fr(), c = k(() => ge(o.modelValue) && o.modelValue <= o.min), f = k(() => ge(o.modelValue) && o.modelValue >= o.max), p = k(() => {
      const M = d(o.step);
      return $t(o.precision) ? Math.max(d(o.modelValue), M) : (M > o.precision, o.precision);
    }), v = k(() => o.controls && o.controlsPosition === "right"), h = _o(), g = wa(), m = k(() => {
      if (l.userInput !== null)
        return l.userInput;
      let M = l.currentValue;
      if (Qt(M))
        return "";
      if (ge(M)) {
        if (Number.isNaN(M))
          return "";
        $t(o.precision) || (M = M.toFixed(o.precision));
      }
      return M;
    }), E = (M, F) => {
      if ($t(F) && (F = p.value), F === 0)
        return Math.round(M);
      let I = String(M);
      const x = I.indexOf(".");
      if (x === -1 || !I.replace(".", "").split("")[x + F])
        return M;
      const ye = I.length;
      return I.charAt(ye - 1) === "5" && (I = `${I.slice(0, Math.max(0, ye - 1))}6`), Number.parseFloat(Number(I).toFixed(F));
    }, d = (M) => {
      if (Qt(M))
        return 0;
      const F = M.toString(), I = F.indexOf(".");
      let x = 0;
      return I !== -1 && (x = F.length - I - 1), x;
    }, C = (M, F = 1) => ge(M) ? E(M + o.step * F) : l.currentValue, L = () => {
      if (o.readonly || g.value || f.value)
        return;
      const M = Number(m.value) || 0, F = C(M);
      A(F), n(en, l.currentValue), ie();
    }, T = () => {
      if (o.readonly || g.value || c.value)
        return;
      const M = Number(m.value) || 0, F = C(M, -1);
      A(F), n(en, l.currentValue), ie();
    }, y = (M, F) => {
      const { max: I, min: x, step: H, precision: G, stepStrictly: ye, valueOnClear: q } = o;
      I < x && va("InputNumber", "min should not be greater than max.");
      let we = Number(M);
      if (Qt(M) || Number.isNaN(we))
        return null;
      if (M === "") {
        if (q === null)
          return null;
        we = Xe(q) ? { min: x, max: I }[q] : q;
      }
      return ye && (we = E(Math.round(we / H) * H, G), we !== M && F && n(Ve, we)), $t(G) || (we = E(we, G)), (we > I || we < x) && (we = we > I ? I : x, F && n(Ve, we)), we;
    }, A = (M, F = !0) => {
      var I;
      const x = l.currentValue, H = y(M);
      if (!F) {
        n(Ve, H);
        return;
      }
      x === H && M || (l.userInput = null, n(Ve, H), x !== H && n(nn, H, x), o.validateEvent && ((I = u?.validate) == null || I.call(u, "change").catch((G) => void 0)), l.currentValue = H);
    }, O = (M) => {
      l.userInput = M;
      const F = M === "" ? null : Number(M);
      n(en, F), A(F, !1);
    }, z = (M) => {
      const F = M !== "" ? Number(M) : "";
      (ge(F) && !Number.isNaN(F) || M === "") && A(F), ie(), l.userInput = null;
    }, W = () => {
      var M, F;
      (F = (M = a.value) == null ? void 0 : M.focus) == null || F.call(M);
    }, ee = () => {
      var M, F;
      (F = (M = a.value) == null ? void 0 : M.blur) == null || F.call(M);
    }, oe = (M) => {
      n("focus", M);
    }, Q = (M) => {
      var F, I;
      l.userInput = null, Gi() && l.currentValue === null && ((F = a.value) != null && F.input) && (a.value.input.value = ""), n("blur", M), o.validateEvent && ((I = u?.validate) == null || I.call(u, "blur").catch((x) => void 0));
    }, ie = () => {
      l.currentValue !== o.modelValue && (l.currentValue = o.modelValue);
    }, Ee = (M) => {
      document.activeElement === M.target && M.preventDefault();
    };
    return le(() => o.modelValue, (M, F) => {
      const I = y(M, !0);
      l.userInput === null && I !== F && (l.currentValue = I);
    }, { immediate: !0 }), Ne(() => {
      var M;
      const { min: F, max: I, modelValue: x } = o, H = (M = a.value) == null ? void 0 : M.input;
      if (H.setAttribute("role", "spinbutton"), Number.isFinite(I) ? H.setAttribute("aria-valuemax", String(I)) : H.removeAttribute("aria-valuemax"), Number.isFinite(F) ? H.setAttribute("aria-valuemin", String(F)) : H.removeAttribute("aria-valuemin"), H.setAttribute("aria-valuenow", l.currentValue || l.currentValue === 0 ? String(l.currentValue) : ""), H.setAttribute("aria-disabled", String(g.value)), !ge(x) && x != null) {
        let G = Number(x);
        Number.isNaN(G) && (G = null), n(Ve, G);
      }
      H.addEventListener("wheel", Ee, { passive: !1 });
    }), Vl(() => {
      var M, F;
      const I = (M = a.value) == null ? void 0 : M.input;
      I?.setAttribute("aria-valuenow", `${(F = l.currentValue) != null ? F : ""}`);
    }), t({
      focus: W,
      blur: ee
    }), (M, F) => (P(), U("div", {
      class: j([
        i(s).b(),
        i(s).m(i(h)),
        i(s).is("disabled", i(g)),
        i(s).is("without-controls", !M.controls),
        i(s).is("controls-right", i(v))
      ]),
      onDragstart: Le(() => {
      }, ["prevent"])
    }, [
      M.controls ? xe((P(), U("span", {
        key: 0,
        role: "button",
        "aria-label": i(r)("el.inputNumber.decrease"),
        class: j([i(s).e("decrease"), i(s).is("disabled", i(c))]),
        onKeydown: wt(T, ["enter"])
      }, [
        se(M.$slots, "decrease-icon", {}, () => [
          V(i(Re), null, {
            default: Z(() => [
              i(v) ? (P(), ne(i(Ui), { key: 0 })) : (P(), ne(i(lh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [i(Pl), T]
      ]) : X("v-if", !0),
      M.controls ? xe((P(), U("span", {
        key: 1,
        role: "button",
        "aria-label": i(r)("el.inputNumber.increase"),
        class: j([i(s).e("increase"), i(s).is("disabled", i(f))]),
        onKeydown: wt(L, ["enter"])
      }, [
        se(M.$slots, "increase-icon", {}, () => [
          V(i(Re), null, {
            default: Z(() => [
              i(v) ? (P(), ne(i(Yg), { key: 0 })) : (P(), ne(i(uh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [i(Pl), L]
      ]) : X("v-if", !0),
      V(i($h), {
        id: M.id,
        ref_key: "input",
        ref: a,
        type: "number",
        step: M.step,
        "model-value": i(m),
        placeholder: M.placeholder,
        readonly: M.readonly,
        disabled: i(g),
        size: i(h),
        max: M.max,
        min: M.min,
        name: M.name,
        "aria-label": M.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          wt(Le(L, ["prevent"]), ["up"]),
          wt(Le(T, ["prevent"]), ["down"])
        ],
        onBlur: Q,
        onFocus: oe,
        onInput: O,
        onChange: z
      }, sc({
        _: 2
      }, [
        M.$slots.prefix ? {
          name: "prefix",
          fn: Z(() => [
            se(M.$slots, "prefix")
          ])
        } : void 0,
        M.$slots.suffix ? {
          name: "suffix",
          fn: Z(() => [
            se(M.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Mb = /* @__PURE__ */ Te($b, [["__file", "input-number.vue"]]);
const Fb = At(Mb);
function Db() {
  const e = fn(), t = B(0), n = 11, o = k(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Nt(e, () => {
    var s, a;
    t.value = (a = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? a : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const wu = Symbol("ElSelectGroup"), gr = Symbol("ElSelect");
function Vb(e, t) {
  const n = he(gr), o = he(wu, { disabled: !1 }), r = k(() => f(cn(n.props.modelValue), e.value)), s = k(() => {
    var h;
    if (n.props.multiple) {
      const g = cn((h = n.props.modelValue) != null ? h : []);
      return !r.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = k(() => e.label || (dt(e.value) ? "" : e.value)), l = k(() => e.value || e.label || ""), u = k(() => e.disabled || t.groupDisabled || s.value), c = Qe(), f = (h = [], g) => {
    if (dt(e.value)) {
      const m = n.props.valueKey;
      return h && h.some((E) => lc(dn(E, m)) === dn(g, m));
    } else
      return h && h.includes(g);
  }, p = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, v = (h) => {
    const g = new RegExp(wb(h), "i");
    t.visible = g.test(a.value) || e.created;
  };
  return le(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), le(() => e.value, (h, g) => {
    const { remote: m, valueKey: E } = n.props;
    if ((m ? h !== g : !no(h, g)) && (n.onOptionDestroy(g, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !m) {
      if (E && dt(h) && dt(g) && h[E] === g[E])
        return;
      n.setSelected();
    }
  }), le(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: l,
    itemSelected: r,
    isDisabled: u,
    hoverItem: p,
    updateOption: v
  };
}
const xb = J({
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
    const t = Me("select"), n = dr(), o = k(() => [
      t.be("dropdown", "item"),
      t.is("disabled", i(l)),
      t.is("selected", i(a)),
      t.is("hovering", i(v))
    ]), r = Sn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: s,
      itemSelected: a,
      isDisabled: l,
      select: u,
      hoverItem: c,
      updateOption: f
    } = Vb(e, r), { visible: p, hover: v } = Zr(r), h = Qe().proxy;
    u.onOptionCreate(h), zt(() => {
      const m = h.value, { selected: E } = u.states, d = E.some((C) => C.value === h.value);
      ke(() => {
        u.states.cachedOptions.get(m) === h && !d && u.states.cachedOptions.delete(m);
      }), u.onOptionDestroy(m, h);
    });
    function g() {
      l.value || u.handleOptionSelect(h);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: s,
      itemSelected: a,
      isDisabled: l,
      select: u,
      hoverItem: c,
      updateOption: f,
      visible: p,
      hover: v,
      selectOptionClick: g,
      states: r
    };
  }
});
function Bb(e, t, n, o, r, s) {
  return xe((P(), U("li", {
    id: e.id,
    class: j(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Le(e.selectOptionClick, ["stop"])
  }, [
    se(e.$slots, "default", {}, () => [
      b("span", null, D(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [tn, e.visible]
  ]);
}
var Fa = /* @__PURE__ */ Te(xb, [["render", Bb], ["__file", "option.vue"]]);
const jb = J({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = he(gr), t = Me("select"), n = k(() => e.props.popperClass), o = k(() => e.props.multiple), r = k(() => e.props.fitInputWidth), s = B("");
    function a() {
      var l;
      s.value = `${(l = e.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return Ne(() => {
      a(), Nt(e.selectRef, a);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function zb(e, t, n, o, r, s) {
  return P(), U("div", {
    class: j([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: je({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (P(), U("div", {
      key: 0,
      class: j(e.ns.be("dropdown", "header"))
    }, [
      se(e.$slots, "header")
    ], 2)) : X("v-if", !0),
    se(e.$slots, "default"),
    e.$slots.footer ? (P(), U("div", {
      key: 1,
      class: j(e.ns.be("dropdown", "footer"))
    }, [
      se(e.$slots, "footer")
    ], 2)) : X("v-if", !0)
  ], 6);
}
var Wb = /* @__PURE__ */ Te(jb, [["render", zb], ["__file", "select-dropdown.vue"]]);
const Ub = (e, t) => {
  const { t: n } = ga(), o = dr(), r = Me("select"), s = Me("input"), a = Sn({
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
  }), l = B(null), u = B(null), c = B(null), f = B(null), p = B(null), v = B(null), h = B(null), g = B(null), m = B(null), E = B(null), d = B(null), {
    isComposing: C,
    handleCompositionStart: L,
    handleCompositionUpdate: T,
    handleCompositionEnd: y
  } = Ji({
    afterComposition: (N) => Ke(N)
  }), { wrapperRef: A, isFocused: O, handleBlur: z } = Zi(p, {
    beforeFocus() {
      return F.value;
    },
    afterFocus() {
      e.automaticDropdown && !W.value && (W.value = !0, a.menuVisibleOnFocus = !0);
    },
    beforeBlur(N) {
      var K, ce;
      return ((K = c.value) == null ? void 0 : K.isFocusInsideContent(N)) || ((ce = f.value) == null ? void 0 : ce.isFocusInsideContent(N));
    },
    afterBlur() {
      W.value = !1, a.menuVisibleOnFocus = !1;
    }
  }), W = B(!1), ee = B(), { form: oe, formItem: Q } = fr(), { inputId: ie } = _a(e, {
    formItemContext: Q
  }), { valueOnClear: Ee, isEmptyValue: M } = xg(e), F = k(() => e.disabled || oe?.disabled), I = k(() => Rt(e.modelValue) ? e.modelValue.length > 0 : !M(e.modelValue)), x = k(() => {
    var N;
    return (N = oe?.statusIcon) != null ? N : !1;
  }), H = k(() => e.clearable && !F.value && a.inputHovering && I.value), G = k(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), ye = k(() => r.is("reverse", G.value && W.value)), q = k(() => Q?.validateState || ""), we = k(() => Ki[q.value]), We = k(() => e.remote ? 300 : 0), Be = k(() => e.remote && !a.inputValue && a.options.size === 0), Ue = k(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && He.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), He = k(() => be.value.filter((N) => N.visible).length), be = k(() => {
    const N = Array.from(a.options.values()), K = [];
    return a.optionValues.forEach((ce) => {
      const Fe = N.findIndex((ut) => ut.value === ce);
      Fe > -1 && K.push(N[Fe]);
    }), K.length >= N.length ? K : N;
  }), rt = k(() => Array.from(a.cachedOptions.values())), pt = k(() => {
    const N = be.value.filter((K) => !K.created).some((K) => K.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !N;
  }), at = () => {
    e.filterable && Ae(e.filterMethod) || e.filterable && e.remote && Ae(e.remoteMethod) || be.value.forEach((N) => {
      var K;
      (K = N.updateOption) == null || K.call(N, a.inputValue);
    });
  }, bt = _o(), st = k(() => ["small"].includes(bt.value) ? "small" : "default"), lt = k({
    get() {
      return W.value && !Be.value;
    },
    set(N) {
      W.value = N;
    }
  }), it = k(() => {
    if (e.multiple && !$t(e.modelValue))
      return cn(e.modelValue).length === 0 && !a.inputValue;
    const N = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $t(N) ? !a.inputValue : !0;
  }), mt = k(() => {
    var N;
    const K = (N = e.placeholder) != null ? N : n("el.select.placeholder");
    return e.multiple || !I.value ? K : a.selectedLabel;
  }), Lt = k(() => Ur ? null : "mouseenter");
  le(() => e.modelValue, (N, K) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", w("")), $(), !no(N, K) && e.validateEvent && Q?.validate("change").catch((ce) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), le(() => W.value, (N) => {
    N ? w(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", N);
  }), le(() => a.options.entries(), () => {
    $e && ($(), e.defaultFirstOption && (e.filterable || e.remote) && He.value && S());
  }, {
    flush: "post"
  }), le([() => a.hoveringIndex, be], ([N]) => {
    ge(N) && N > -1 ? ee.value = be.value[N] || {} : ee.value = {}, be.value.forEach((K) => {
      K.hover = ee.value === K;
    });
  }), Dl(() => {
    a.isBeforeHide || at();
  });
  const w = (N) => {
    a.previousQuery === N || C.value || (a.previousQuery = N, e.filterable && Ae(e.filterMethod) ? e.filterMethod(N) : e.filterable && e.remote && Ae(e.remoteMethod) && e.remoteMethod(N), e.defaultFirstOption && (e.filterable || e.remote) && He.value ? ke(S) : ke(de));
  }, S = () => {
    const N = be.value.filter((ut) => ut.visible && !ut.disabled && !ut.states.groupDisabled), K = N.find((ut) => ut.created), ce = N[0], Fe = be.value.map((ut) => ut.value);
    a.hoveringIndex = ja(Fe, K || ce);
  }, $ = () => {
    if (e.multiple)
      a.selectedLabel = "";
    else {
      const K = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue, ce = Y(K);
      a.selectedLabel = ce.currentLabel, a.selected = [ce];
      return;
    }
    const N = [];
    $t(e.modelValue) || cn(e.modelValue).forEach((K) => {
      N.push(Y(K));
    }), a.selected = N;
  }, Y = (N) => {
    let K;
    const ce = mf(N);
    for (let Pn = a.cachedOptions.size - 1; Pn >= 0; Pn--) {
      const sn = rt.value[Pn];
      if (ce ? dn(sn.value, e.valueKey) === dn(N, e.valueKey) : sn.value === N) {
        K = {
          value: N,
          currentLabel: sn.currentLabel,
          get isDisabled() {
            return sn.isDisabled;
          }
        };
        break;
      }
    }
    if (K)
      return K;
    const Fe = ce ? N.label : N ?? "";
    return {
      value: N,
      currentLabel: Fe
    };
  }, de = () => {
    a.hoveringIndex = be.value.findIndex((N) => a.selected.some((K) => To(K) === To(N)));
  }, re = () => {
    a.selectionWidth = u.value.getBoundingClientRect().width;
  }, _ = () => {
    a.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, R = () => {
    var N, K;
    (K = (N = c.value) == null ? void 0 : N.updatePopper) == null || K.call(N);
  }, ue = () => {
    var N, K;
    (K = (N = f.value) == null ? void 0 : N.updatePopper) == null || K.call(N);
  }, me = () => {
    a.inputValue.length > 0 && !W.value && (W.value = !0), w(a.inputValue);
  }, Ke = (N) => {
    if (a.inputValue = N.target.value, e.remote)
      bn();
    else
      return me();
  }, bn = Jv(() => {
    me();
  }, We.value), vt = (N) => {
    no(e.modelValue, N) || t(nn, N);
  }, hr = (N) => Qv(N, (K) => {
    const ce = a.cachedOptions.get(K);
    return ce && !ce.disabled && !ce.states.groupDisabled;
  }), Va = (N) => {
    if (e.multiple && N.code !== Dt.delete && N.target.value.length <= 0) {
      const K = cn(e.modelValue).slice(), ce = hr(K);
      if (ce < 0)
        return;
      const Fe = K[ce];
      K.splice(ce, 1), t(Ve, K), vt(K), t("remove-tag", Fe);
    }
  }, Iu = (N, K) => {
    const ce = a.selected.indexOf(K);
    if (ce > -1 && !F.value) {
      const Fe = cn(e.modelValue).slice();
      Fe.splice(ce, 1), t(Ve, Fe), vt(Fe), t("remove-tag", K.value);
    }
    N.stopPropagation(), So();
  }, xa = (N) => {
    N.stopPropagation();
    const K = e.multiple ? [] : Ee.value;
    if (e.multiple)
      for (const ce of a.selected)
        ce.isDisabled && K.push(ce.value);
    t(Ve, K), vt(K), a.hoveringIndex = -1, W.value = !1, t("clear"), So();
  }, Ba = (N) => {
    var K;
    if (e.multiple) {
      const ce = cn((K = e.modelValue) != null ? K : []).slice(), Fe = ja(ce, N);
      Fe > -1 ? ce.splice(Fe, 1) : (e.multipleLimit <= 0 || ce.length < e.multipleLimit) && ce.push(N.value), t(Ve, ce), vt(ce), N.created && w(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(Ve, N.value), vt(N.value), W.value = !1;
    So(), !W.value && ke(() => {
      Co(N);
    });
  }, ja = (N = [], K) => $t(K) ? -1 : dt(K.value) ? N.findIndex((ce) => no(dn(ce, e.valueKey), To(K))) : N.indexOf(K.value), Co = (N) => {
    var K, ce, Fe, ut, Pn;
    const sn = Rt(N) ? N[0] : N;
    let Oo = null;
    if (sn?.value) {
      const Xn = be.value.filter((Gu) => Gu.value === sn.value);
      Xn.length > 0 && (Oo = Xn[0].$el);
    }
    if (c.value && Oo) {
      const Xn = (ut = (Fe = (ce = (K = c.value) == null ? void 0 : K.popperRef) == null ? void 0 : ce.contentRef) == null ? void 0 : Fe.querySelector) == null ? void 0 : ut.call(Fe, `.${r.be("dropdown", "wrap")}`);
      Xn && jg(Xn, Oo);
    }
    (Pn = d.value) == null || Pn.handleScroll();
  }, Pu = (N) => {
    a.options.set(N.value, N), a.cachedOptions.set(N.value, N);
  }, Nu = (N, K) => {
    a.options.get(N) === K && a.options.delete(N);
  }, Ru = k(() => {
    var N, K;
    return (K = (N = c.value) == null ? void 0 : N.popperRef) == null ? void 0 : K.contentRef;
  }), $u = () => {
    a.isBeforeHide = !1, ke(() => {
      var N;
      (N = d.value) == null || N.update(), Co(a.selected);
    });
  }, So = () => {
    var N;
    (N = p.value) == null || N.focus();
  }, Mu = () => {
    var N;
    if (W.value) {
      W.value = !1, ke(() => {
        var K;
        return (K = p.value) == null ? void 0 : K.blur();
      });
      return;
    }
    (N = p.value) == null || N.blur();
  }, Fu = (N) => {
    xa(N);
  }, Du = (N) => {
    if (W.value = !1, O.value) {
      const K = new FocusEvent("focus", N);
      ke(() => z(K));
    }
  }, Vu = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : W.value = !1;
  }, za = () => {
    F.value || (Ur && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : W.value = !W.value);
  }, xu = () => {
    if (!W.value)
      za();
    else {
      const N = be.value[a.hoveringIndex];
      N && !N.isDisabled && Ba(N);
    }
  }, To = (N) => dt(N.value) ? dn(N.value, e.valueKey) : N.value, Bu = k(() => be.value.filter((N) => N.visible).every((N) => N.isDisabled)), ju = k(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), zu = k(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), Wa = (N) => {
    if (!W.value) {
      W.value = !0;
      return;
    }
    if (!(a.options.size === 0 || He.value === 0 || C.value) && !Bu.value) {
      N === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : N === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const K = be.value[a.hoveringIndex];
      (K.isDisabled || !K.visible) && Wa(N), ke(() => Co(ee.value));
    }
  }, Wu = () => {
    if (!u.value)
      return 0;
    const N = window.getComputedStyle(u.value);
    return Number.parseFloat(N.gap || "6px");
  }, Uu = k(() => {
    const N = Wu();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - N : a.selectionWidth}px` };
  }), Hu = k(() => ({ maxWidth: `${a.selectionWidth}px` })), Ku = (N) => {
    t("popup-scroll", N);
  };
  return Nt(u, re), Nt(g, R), Nt(A, R), Nt(m, ue), Nt(E, _), Ne(() => {
    $();
  }), {
    inputId: ie,
    contentId: o,
    nsSelect: r,
    nsInput: s,
    states: a,
    isFocused: O,
    expanded: W,
    optionsArray: be,
    hoverOption: ee,
    selectSize: bt,
    filteredOptionsCount: He,
    updateTooltip: R,
    updateTagTooltip: ue,
    debouncedOnInputChange: bn,
    onInput: Ke,
    deletePrevTag: Va,
    deleteTag: Iu,
    deleteSelected: xa,
    handleOptionSelect: Ba,
    scrollToOption: Co,
    hasModelValue: I,
    shouldShowPlaceholder: it,
    currentPlaceholder: mt,
    mouseEnterEventName: Lt,
    needStatusIcon: x,
    showClose: H,
    iconComponent: G,
    iconReverse: ye,
    validateState: q,
    validateIcon: we,
    showNewOption: pt,
    updateOptions: at,
    collapseTagSize: st,
    setSelected: $,
    selectDisabled: F,
    emptyText: Ue,
    handleCompositionStart: L,
    handleCompositionUpdate: T,
    handleCompositionEnd: y,
    onOptionCreate: Pu,
    onOptionDestroy: Nu,
    handleMenuEnter: $u,
    focus: So,
    blur: Mu,
    handleClearClick: Fu,
    handleClickOutside: Du,
    handleEsc: Vu,
    toggleMenu: za,
    selectOption: xu,
    getValueKey: To,
    navigateOptions: Wa,
    dropdownMenuVisible: lt,
    showTagList: ju,
    collapseTagList: zu,
    popupScroll: Ku,
    tagStyle: Uu,
    collapseTagStyle: Hu,
    popperRef: Ru,
    inputRef: p,
    tooltipRef: c,
    tagTooltipRef: f,
    prefixRef: v,
    suffixRef: h,
    selectRef: l,
    wrapperRef: A,
    selectionRef: u,
    scrollbarRef: d,
    menuRef: g,
    tagMenuRef: m,
    collapseItemRef: E
  };
};
var Hb = J({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = he(gr);
    let o = [];
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), l = [];
      function u(c) {
        Rt(c) && c.forEach((f) => {
          var p, v, h, g;
          const m = (p = f?.type || {}) == null ? void 0 : p.name;
          m === "ElOptionGroup" ? u(!Xe(f.children) && !Rt(f.children) && Ae((v = f.children) == null ? void 0 : v.default) ? (h = f.children) == null ? void 0 : h.default() : f.children) : m === "ElOption" ? l.push((g = f.props) == null ? void 0 : g.value) : Rt(f.children) && u(f.children);
        });
      }
      return a.length && u((s = a[0]) == null ? void 0 : s.children), no(l, o) || (o = l, n && (n.states.optionValues = l)), a;
    };
  }
});
const Kb = Se({
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
  size: cr,
  effect: {
    type: ae(String),
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
    type: ae(Object),
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
  teleported: Ma.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Mt,
    default: ya
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Mt,
    default: Ui
  },
  tagType: { ...Yr.type, default: "info" },
  tagEffect: { ...Yr.effect, default: "light" },
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
    type: ae(String),
    values: mr,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: ae(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Vi,
  ...In(["ariaLabel"])
}), Nl = "ElSelect", Gb = J({
  name: Nl,
  componentName: Nl,
  components: {
    ElSelectMenu: Wb,
    ElOption: Fa,
    ElOptions: Hb,
    ElTag: Ob,
    ElScrollbar: qh,
    ElTooltip: vb,
    ElIcon: Re
  },
  directives: { ClickOutside: Ab },
  props: Kb,
  emits: [
    Ve,
    nn,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = k(() => {
      const { modelValue: u, multiple: c } = e, f = c ? [] : void 0;
      return Rt(u) ? c ? u : f : c ? f : u;
    }), o = Sn({
      ...Zr(e),
      modelValue: n
    }), r = Ub(o, t), { calculatorRef: s, inputStyle: a } = Db();
    xt(gr, Sn({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const l = k(() => e.multiple ? r.states.selected.map((u) => u.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: l,
      calculatorRef: s,
      inputStyle: a
    };
  }
});
function Yb(e, t, n, o, r, s) {
  const a = _n("el-tag"), l = _n("el-tooltip"), u = _n("el-icon"), c = _n("el-option"), f = _n("el-options"), p = _n("el-scrollbar"), v = _n("el-select-menu"), h = ic("click-outside");
  return xe((P(), U("div", {
    ref: "selectRef",
    class: j([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [uc(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
    onMouseleave: (g) => e.states.inputHovering = !1
  }, [
    V(l, {
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
      default: Z(() => {
        var g;
        return [
          b("div", {
            ref: "wrapperRef",
            class: j([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Le(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (P(), U("div", {
              key: 0,
              ref: "prefixRef",
              class: j(e.nsSelect.e("prefix"))
            }, [
              se(e.$slots, "prefix")
            ], 2)) : X("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: j([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? se(e.$slots, "tag", { key: 0 }, () => [
                (P(!0), U(qe, null, En(e.showTagList, (m) => (P(), U("div", {
                  key: e.getValueKey(m),
                  class: j(e.nsSelect.e("selected-item"))
                }, [
                  V(a, {
                    closable: !e.selectDisabled && !m.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: je(e.tagStyle),
                    onClose: (E) => e.deleteTag(E, m)
                  }, {
                    default: Z(() => [
                      b("span", {
                        class: j(e.nsSelect.e("tags-text"))
                      }, [
                        se(e.$slots, "label", {
                          label: m.currentLabel,
                          value: m.value
                        }, () => [
                          Ze(D(m.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (P(), ne(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: Z(() => [
                    b("div", {
                      ref: "collapseItemRef",
                      class: j(e.nsSelect.e("selected-item"))
                    }, [
                      V(a, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: je(e.collapseTagStyle)
                      }, {
                        default: Z(() => [
                          b("span", {
                            class: j(e.nsSelect.e("tags-text"))
                          }, " + " + D(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: Z(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: j(e.nsSelect.e("selection"))
                    }, [
                      (P(!0), U(qe, null, En(e.collapseTagList, (m) => (P(), U("div", {
                        key: e.getValueKey(m),
                        class: j(e.nsSelect.e("selected-item"))
                      }, [
                        V(a, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !m.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (E) => e.deleteTag(E, m)
                        }, {
                          default: Z(() => [
                            b("span", {
                              class: j(e.nsSelect.e("tags-text"))
                            }, [
                              se(e.$slots, "label", {
                                label: m.currentLabel,
                                value: m.value
                              }, () => [
                                Ze(D(m.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : X("v-if", !0)
              ]) : X("v-if", !0),
              b("div", {
                class: j([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                xe(b("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (m) => e.states.inputValue = m,
                  type: "text",
                  name: e.name,
                  class: j([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: je(e.inputStyle),
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
                    wt(Le((m) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    wt(Le((m) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    wt(Le(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    wt(Le(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    wt(Le(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Le(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [so, e.states.inputValue]
                ]),
                e.filterable ? (P(), U("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: j(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : X("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (P(), U("div", {
                key: 1,
                class: j([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? se(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  b("span", null, D(e.currentPlaceholder), 1)
                ]) : (P(), U("span", { key: 1 }, D(e.currentPlaceholder), 1))
              ], 2)) : X("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: j(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (P(), ne(u, {
                key: 0,
                class: j([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: Z(() => [
                  (P(), ne(Je(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0),
              e.showClose && e.clearIcon ? (P(), ne(u, {
                key: 1,
                class: j([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: Z(() => [
                  (P(), ne(Je(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : X("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (P(), ne(u, {
                key: 2,
                class: j([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: Z(() => [
                  (P(), ne(Je(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: Z(() => [
        V(v, { ref: "menuRef" }, {
          default: Z(() => [
            e.$slots.header ? (P(), U("div", {
              key: 0,
              class: j(e.nsSelect.be("dropdown", "header")),
              onClick: Le(() => {
              }, ["stop"])
            }, [
              se(e.$slots, "header")
            ], 10, ["onClick"])) : X("v-if", !0),
            xe(V(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: j([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: Z(() => [
                e.showNewOption ? (P(), ne(c, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : X("v-if", !0),
                V(f, null, {
                  default: Z(() => [
                    se(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [tn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (P(), U("div", {
              key: 1,
              class: j(e.nsSelect.be("dropdown", "loading"))
            }, [
              se(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (P(), U("div", {
              key: 2,
              class: j(e.nsSelect.be("dropdown", "empty"))
            }, [
              se(e.$slots, "empty", {}, () => [
                b("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : X("v-if", !0),
            e.$slots.footer ? (P(), U("div", {
              key: 3,
              class: j(e.nsSelect.be("dropdown", "footer")),
              onClick: Le(() => {
              }, ["stop"])
            }, [
              se(e.$slots, "footer")
            ], 10, ["onClick"])) : X("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [h, e.handleClickOutside, e.popperRef]
  ]);
}
var qb = /* @__PURE__ */ Te(Gb, [["render", Yb], ["__file", "select.vue"]]);
const Xb = J({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Me("select"), n = B(null), o = Qe(), r = B([]);
    xt(wu, Sn({
      ...Zr(e)
    }));
    const s = k(() => r.value.some((c) => c.visible === !0)), a = (c) => {
      var f, p;
      return ((f = c.type) == null ? void 0 : f.name) === "ElOption" && !!((p = c.component) != null && p.proxy);
    }, l = (c) => {
      const f = cn(c), p = [];
      return f.forEach((v) => {
        var h, g;
        a(v) ? p.push(v.component.proxy) : (h = v.children) != null && h.length ? p.push(...l(v.children)) : (g = v.component) != null && g.subTree && p.push(...l(v.component.subTree));
      }), p;
    }, u = () => {
      r.value = l(o.subTree);
    };
    return Ne(() => {
      u();
    }), Sg(n, u, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: s,
      ns: t
    };
  }
});
function Zb(e, t, n, o, r, s) {
  return xe((P(), U("ul", {
    ref: "groupRef",
    class: j(e.ns.be("group", "wrap"))
  }, [
    b("li", {
      class: j(e.ns.be("group", "title"))
    }, D(e.label), 3),
    b("li", null, [
      b("ul", {
        class: j(e.ns.b("group"))
      }, [
        se(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [tn, e.visible]
  ]);
}
var Eu = /* @__PURE__ */ Te(Xb, [["render", Zb], ["__file", "option-group.vue"]]);
const Jb = At(qb, {
  Option: Fa,
  OptionGroup: Eu
}), Qb = Wi(Fa);
Wi(Eu);
const e1 = (e) => ["", ...ha].includes(e), t1 = Se({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: e1
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: Mt
  },
  activeActionIcon: {
    type: Mt
  },
  activeIcon: {
    type: Mt
  },
  inactiveIcon: {
    type: Mt
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: !0
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  beforeChange: {
    type: ae(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...In(["ariaLabel"])
}), n1 = {
  [Ve]: (e) => pn(e) || Xe(e) || ge(e),
  [nn]: (e) => pn(e) || Xe(e) || ge(e),
  [en]: (e) => pn(e) || Xe(e) || ge(e)
}, Cu = "ElSwitch", o1 = J({
  name: Cu
}), r1 = /* @__PURE__ */ J({
  ...o1,
  props: t1,
  emits: n1,
  setup(e, { expose: t, emit: n }) {
    const o = e, { formItem: r } = fr(), s = _o(), a = Me("switch"), { inputId: l } = _a(o, {
      formItemContext: r
    }), u = wa(k(() => o.loading)), c = B(o.modelValue !== !1), f = B(), p = B(), v = k(() => [
      a.b(),
      a.m(s.value),
      a.is("disabled", u.value),
      a.is("checked", d.value)
    ]), h = k(() => [
      a.e("label"),
      a.em("label", "left"),
      a.is("active", !d.value)
    ]), g = k(() => [
      a.e("label"),
      a.em("label", "right"),
      a.is("active", d.value)
    ]), m = k(() => ({
      width: jn(o.width)
    }));
    le(() => o.modelValue, () => {
      c.value = !0;
    });
    const E = k(() => c.value ? o.modelValue : !1), d = k(() => E.value === o.activeValue);
    [o.activeValue, o.inactiveValue].includes(E.value) || (n(Ve, o.inactiveValue), n(nn, o.inactiveValue), n(en, o.inactiveValue)), le(d, (y) => {
      var A;
      f.value.checked = y, o.validateEvent && ((A = r?.validate) == null || A.call(r, "change").catch((O) => void 0));
    });
    const C = () => {
      const y = d.value ? o.inactiveValue : o.activeValue;
      n(Ve, y), n(nn, y), n(en, y), ke(() => {
        f.value.checked = d.value;
      });
    }, L = () => {
      if (u.value)
        return;
      const { beforeChange: y } = o;
      if (!y) {
        C();
        return;
      }
      const A = y();
      [
        ws(A),
        pn(A)
      ].includes(!0) || va(Cu, "beforeChange must return type `Promise<boolean>` or `boolean`"), ws(A) ? A.then((z) => {
        z && C();
      }).catch((z) => {
      }) : A && C();
    }, T = () => {
      var y, A;
      (A = (y = f.value) == null ? void 0 : y.focus) == null || A.call(y);
    };
    return Ne(() => {
      f.value.checked = d.value;
    }), t({
      focus: T,
      checked: d
    }), (y, A) => (P(), U("div", {
      class: j(i(v)),
      onClick: Le(L, ["prevent"])
    }, [
      b("input", {
        id: i(l),
        ref_key: "input",
        ref: f,
        class: j(i(a).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": i(d),
        "aria-disabled": i(u),
        "aria-label": y.ariaLabel,
        name: y.name,
        "true-value": y.activeValue,
        "false-value": y.inactiveValue,
        disabled: i(u),
        tabindex: y.tabindex,
        onChange: C,
        onKeydown: wt(L, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !y.inlinePrompt && (y.inactiveIcon || y.inactiveText) ? (P(), U("span", {
        key: 0,
        class: j(i(h))
      }, [
        y.inactiveIcon ? (P(), ne(i(Re), { key: 0 }, {
          default: Z(() => [
            (P(), ne(Je(y.inactiveIcon)))
          ]),
          _: 1
        })) : X("v-if", !0),
        !y.inactiveIcon && y.inactiveText ? (P(), U("span", {
          key: 1,
          "aria-hidden": i(d)
        }, D(y.inactiveText), 9, ["aria-hidden"])) : X("v-if", !0)
      ], 2)) : X("v-if", !0),
      b("span", {
        ref_key: "core",
        ref: p,
        class: j(i(a).e("core")),
        style: je(i(m))
      }, [
        y.inlinePrompt ? (P(), U("div", {
          key: 0,
          class: j(i(a).e("inner"))
        }, [
          y.activeIcon || y.inactiveIcon ? (P(), ne(i(Re), {
            key: 0,
            class: j(i(a).is("icon"))
          }, {
            default: Z(() => [
              (P(), ne(Je(i(d) ? y.activeIcon : y.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : y.activeText || y.inactiveText ? (P(), U("span", {
            key: 1,
            class: j(i(a).is("text")),
            "aria-hidden": !i(d)
          }, D(i(d) ? y.activeText : y.inactiveText), 11, ["aria-hidden"])) : X("v-if", !0)
        ], 2)) : X("v-if", !0),
        b("div", {
          class: j(i(a).e("action"))
        }, [
          y.loading ? (P(), ne(i(Re), {
            key: 0,
            class: j(i(a).is("loading"))
          }, {
            default: Z(() => [
              V(i(Hi))
            ]),
            _: 1
          }, 8, ["class"])) : i(d) ? se(y.$slots, "active-action", { key: 1 }, () => [
            y.activeActionIcon ? (P(), ne(i(Re), { key: 0 }, {
              default: Z(() => [
                (P(), ne(Je(y.activeActionIcon)))
              ]),
              _: 1
            })) : X("v-if", !0)
          ]) : i(d) ? X("v-if", !0) : se(y.$slots, "inactive-action", { key: 2 }, () => [
            y.inactiveActionIcon ? (P(), ne(i(Re), { key: 0 }, {
              default: Z(() => [
                (P(), ne(Je(y.inactiveActionIcon)))
              ]),
              _: 1
            })) : X("v-if", !0)
          ])
        ], 2)
      ], 6),
      !y.inlinePrompt && (y.activeIcon || y.activeText) ? (P(), U("span", {
        key: 1,
        class: j(i(g))
      }, [
        y.activeIcon ? (P(), ne(i(Re), { key: 0 }, {
          default: Z(() => [
            (P(), ne(Je(y.activeIcon)))
          ]),
          _: 1
        })) : X("v-if", !0),
        !y.activeIcon && y.activeText ? (P(), U("span", {
          key: 1,
          "aria-hidden": !i(d)
        }, D(y.activeText), 9, ["aria-hidden"])) : X("v-if", !0)
      ], 2)) : X("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var a1 = /* @__PURE__ */ Te(r1, [["__file", "switch.vue"]]);
const s1 = At(a1), Su = ["success", "info", "warning", "error"], Ge = Yi({
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
  appendTo: $e ? document.body : void 0
}), l1 = Se({
  customClass: {
    type: String,
    default: Ge.customClass
  },
  center: {
    type: Boolean,
    default: Ge.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ge.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ge.duration
  },
  icon: {
    type: Mt,
    default: Ge.icon
  },
  id: {
    type: String,
    default: Ge.id
  },
  message: {
    type: ae([
      String,
      Object,
      Function
    ]),
    default: Ge.message
  },
  onClose: {
    type: ae(Function),
    default: Ge.onClose
  },
  showClose: {
    type: Boolean,
    default: Ge.showClose
  },
  type: {
    type: String,
    values: Su,
    default: Ge.type
  },
  plain: {
    type: Boolean,
    default: Ge.plain
  },
  offset: {
    type: Number,
    default: Ge.offset
  },
  zIndex: {
    type: Number,
    default: Ge.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ge.grouping
  },
  repeatNum: {
    type: Number,
    default: Ge.repeatNum
  }
}), i1 = {
  destroy: () => !0
}, Ct = cc([]), u1 = (e) => {
  const t = Ct.findIndex((r) => r.id === e), n = Ct[t];
  let o;
  return t > 0 && (o = Ct[t - 1]), { current: n, prev: o };
}, c1 = (e) => {
  const { prev: t } = u1(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, d1 = (e, t) => Ct.findIndex((o) => o.id === e) > 0 ? 16 : t, f1 = J({
  name: "ElMessage"
}), p1 = /* @__PURE__ */ J({
  ...f1,
  props: l1,
  emits: i1,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = hh, { ns: r, zIndex: s } = Bi("message"), { currentZIndex: a, nextZIndex: l } = s, u = B(), c = B(!1), f = B(0);
    let p;
    const v = k(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), h = k(() => {
      const O = n.type;
      return { [r.bm("icon", O)]: O && qo[O] };
    }), g = k(() => n.icon || qo[n.type] || ""), m = k(() => c1(n.id)), E = k(() => d1(n.id, n.offset) + m.value), d = k(() => f.value + E.value), C = k(() => ({
      top: `${E.value}px`,
      zIndex: a.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: p } = ki(() => {
        y();
      }, n.duration));
    }
    function T() {
      p?.();
    }
    function y() {
      c.value = !1;
    }
    function A({ code: O }) {
      O === Dt.esc && y();
    }
    return Ne(() => {
      L(), l(), c.value = !0;
    }), le(() => n.repeatNum, () => {
      T(), L();
    }), Tt(document, "keydown", A), Nt(u, () => {
      f.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: d,
      close: y
    }), (O, z) => (P(), ne(Yn, {
      name: i(r).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (W) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: Z(() => [
        xe(b("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: u,
          class: j([
            i(r).b(),
            { [i(r).m(O.type)]: O.type },
            i(r).is("center", O.center),
            i(r).is("closable", O.showClose),
            i(r).is("plain", O.plain),
            O.customClass
          ]),
          style: je(i(C)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: L
        }, [
          O.repeatNum > 1 ? (P(), ne(i(_b), {
            key: 0,
            value: O.repeatNum,
            type: i(v),
            class: j(i(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : X("v-if", !0),
          i(g) ? (P(), ne(i(Re), {
            key: 1,
            class: j([i(r).e("icon"), i(h)])
          }, {
            default: Z(() => [
              (P(), ne(Je(i(g))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          se(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (P(), U(qe, { key: 1 }, [
              X(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: j(i(r).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (P(), U("p", {
              key: 0,
              class: j(i(r).e("content"))
            }, D(O.message), 3))
          ]),
          O.showClose ? (P(), ne(i(Re), {
            key: 2,
            class: j(i(r).e("closeBtn")),
            onClick: Le(y, ["stop"])
          }, {
            default: Z(() => [
              V(i(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : X("v-if", !0)
        ], 46, ["id"]), [
          [tn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var m1 = /* @__PURE__ */ Te(p1, [["__file", "message.vue"]]);
let v1 = 1;
const Tu = (e) => {
  const t = !e || Xe(e) || lo(e) || Ae(e) ? { message: e } : e, n = {
    ...Ge,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Xe(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    St(o) || (o = document.body), n.appendTo = o;
  }
  return pn(_t.grouping) && !n.grouping && (n.grouping = _t.grouping), ge(_t.duration) && n.duration === 3e3 && (n.duration = _t.duration), ge(_t.offset) && n.offset === 16 && (n.offset = _t.offset), pn(_t.showClose) && !n.showClose && (n.showClose = _t.showClose), n;
}, g1 = (e) => {
  const t = Ct.indexOf(e);
  if (t === -1)
    return;
  Ct.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, h1 = ({ appendTo: e, ...t }, n) => {
  const o = `message_${v1++}`, r = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), g1(f);
    },
    onDestroy: () => {
      jo(null, s);
    }
  }, l = V(m1, a, Ae(a.message) || lo(a.message) ? {
    default: Ae(a.message) ? a.message : () => a.message
  } : null);
  l.appContext = n || Kn._context, jo(l, s), e.appendChild(s.firstElementChild);
  const u = l.component, f = {
    id: o,
    vnode: l,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return f;
}, Kn = (e = {}, t) => {
  if (!$e)
    return { close: () => {
    } };
  const n = Tu(e);
  if (n.grouping && Ct.length) {
    const r = Ct.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (ge(_t.max) && Ct.length >= _t.max)
    return { close: () => {
    } };
  const o = h1(n, t);
  return Ct.push(o), o.handler;
};
Su.forEach((e) => {
  Kn[e] = (t = {}, n) => {
    const o = Tu(t);
    return Kn({ ...o, type: e }, n);
  };
});
function y1(e) {
  for (const t of Ct)
    (!e || e === t.props.type) && t.handler.close();
}
Kn.closeAll = y1;
Kn._context = null;
const b1 = zi(Kn, "$message"), Ou = [
  "success",
  "info",
  "warning",
  "error"
], _1 = Se({
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
    type: Mt
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: ae([
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
    type: ae(Function),
    default: () => {
    }
  },
  onClose: {
    type: ae(Function),
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
    values: [...Ou, ""],
    default: ""
  },
  zIndex: Number
}), w1 = {
  destroy: () => !0
}, E1 = J({
  name: "ElNotification"
}), C1 = /* @__PURE__ */ J({
  ...E1,
  props: _1,
  emits: w1,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = Bi("notification"), { nextZIndex: s, currentZIndex: a } = r, { Close: l } = gh, u = B(!1);
    let c;
    const f = k(() => {
      const L = n.type;
      return L && qo[n.type] ? o.m(L) : "";
    }), p = k(() => n.type && qo[n.type] || n.icon), v = k(() => n.position.endsWith("right") ? "right" : "left"), h = k(() => n.position.startsWith("top") ? "top" : "bottom"), g = k(() => {
      var L;
      return {
        [h.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : a.value
      };
    });
    function m() {
      n.duration > 0 && ({ stop: c } = ki(() => {
        u.value && d();
      }, n.duration));
    }
    function E() {
      c?.();
    }
    function d() {
      u.value = !1;
    }
    function C({ code: L }) {
      L === Dt.delete || L === Dt.backspace ? E() : L === Dt.esc ? u.value && d() : m();
    }
    return Ne(() => {
      m(), s(), u.value = !0;
    }), Tt(document, "keydown", C), t({
      visible: u,
      close: d
    }), (L, T) => (P(), ne(Yn, {
      name: i(o).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (y) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: Z(() => [
        xe(b("div", {
          id: L.id,
          class: j([i(o).b(), L.customClass, i(v)]),
          style: je(i(g)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: m,
          onClick: L.onClick
        }, [
          i(p) ? (P(), ne(i(Re), {
            key: 0,
            class: j([i(o).e("icon"), i(f)])
          }, {
            default: Z(() => [
              (P(), ne(Je(i(p))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          b("div", {
            class: j(i(o).e("group"))
          }, [
            b("h2", {
              class: j(i(o).e("title")),
              textContent: D(L.title)
            }, null, 10, ["textContent"]),
            xe(b("div", {
              class: j(i(o).e("content")),
              style: je(L.title ? void 0 : { margin: 0 })
            }, [
              se(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (P(), U(qe, { key: 1 }, [
                  X(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (P(), U("p", { key: 0 }, D(L.message), 1))
              ])
            ], 6), [
              [tn, L.message]
            ]),
            L.showClose ? (P(), ne(i(Re), {
              key: 0,
              class: j(i(o).e("closeBtn")),
              onClick: Le(d, ["stop"])
            }, {
              default: Z(() => [
                V(i(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : X("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [tn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var S1 = /* @__PURE__ */ Te(C1, [["__file", "notification.vue"]]);
const Jo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, qr = 16;
let T1 = 1;
const Gn = function(e = {}, t) {
  if (!$e)
    return { close: () => {
    } };
  (Xe(e) || lo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Jo[n].forEach(({ vm: f }) => {
    var p;
    o += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + qr;
  }), o += qr;
  const r = `notification_${T1++}`, s = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      O1(r, n, s);
    }
  };
  let l = document.body;
  St(e.appendTo) ? l = e.appendTo : Xe(e.appendTo) && (l = document.querySelector(e.appendTo)), St(l) || (l = document.body);
  const u = document.createElement("div"), c = V(S1, a, Ae(a.message) ? a.message : lo(a.message) ? () => a.message : null);
  return c.appContext = $t(t) ? Gn._context : t, c.props.onDestroy = () => {
    jo(null, u);
  }, jo(c, u), Jo[n].push({ vm: c }), l.appendChild(u.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Ou.forEach((e) => {
  Gn[e] = (t = {}, n) => ((Xe(t) || lo(t)) && (t = {
    message: t
  }), Gn({ ...t, type: e }, n));
});
function O1(e, t, n) {
  const o = Jo[t], r = o.findIndex(({ vm: c }) => {
    var f;
    return ((f = c.component) == null ? void 0 : f.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: s } = o[r];
  if (!s)
    return;
  n?.(s);
  const a = s.el.offsetHeight, l = t.split("-")[0];
  o.splice(r, 1);
  const u = o.length;
  if (!(u < 1))
    for (let c = r; c < u; c++) {
      const { el: f, component: p } = o[c].vm, v = Number.parseInt(f.style[l], 10) - a - qr;
      p.props.offset = v;
    }
}
function A1() {
  for (const e of Object.values(Jo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Gn.closeAll = A1;
Gn._context = null;
const L1 = zi(Gn, "$notify"), Pt = {
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
      showClose: s = !1
    } = e;
    o === "center" ? b1({
      message: t,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : L1({
      message: t,
      type: n,
      position: o,
      duration: r,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: `app-toast app-toast--corner app-toast--${n}`
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
async function ot(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Rl;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Rl || (Rl = {}));
const k1 = "snippets-code:developer-mode", Au = "snippets-code:frontend-diagnostics", I1 = 240, eo = "[REDACTED]", Bo = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${eo}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${eo}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  eo
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${eo}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${eo}`
), Lu = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Bo(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Bo(
      JSON.stringify(
        e,
        (n, o) => {
          if (o instanceof Error)
            return {
              name: o.name,
              message: o.message,
              stack: o.stack,
              cause: o.cause
            };
          if (typeof o == "bigint") return o.toString();
          if (typeof o == "object" && o !== null) {
            if (t.has(o)) return "[Circular]";
            t.add(o);
          }
          return o;
        },
        2
      )
    );
  } catch {
    return Bo(String(e));
  }
}, P1 = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, N1 = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Au) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Da = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(k1) === "true";
  } catch {
    return !1;
  }
}, R1 = (e, t, n) => {
  if (!Da() || typeof localStorage > "u") return;
  const o = N1();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: P1(),
    message: Bo(t),
    data: Lu(n)
  });
  try {
    localStorage.setItem(
      Au,
      JSON.stringify(o.slice(-I1))
    );
  } catch {
  }
}, $1 = () => Da(), M1 = (e) => e === "warn" || e === "error" || !1 || !1 || Da(), Mo = (e, t, n) => {
  R1(e, t, n), M1(e) && ot("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Lu(n)
  }).catch(() => {
  });
}, Fn = {
  info: (e, t, ...n) => {
    Mo("info", e, t);
  },
  error: (e, t) => {
    Mo("error", e, t);
  },
  warn: (e, t) => {
    Mo("warn", e, t);
  },
  debug: (e, t) => {
    $1() && Mo("debug", e, t);
  }
};
async function F1() {
  return await ot("local_ai_get_config");
}
async function kr(e) {
  return await ot("local_ai_save_config", { config: e });
}
async function D1(e) {
  return await ot("local_ai_scan_models", {
    config: e ?? null
  });
}
async function V1() {
  return await ot("local_ai_get_runtime_status");
}
async function ku() {
  return await ot("local_ai_get_status");
}
async function x1(e) {
  return await ot("local_ai_start_service", {
    config: e ?? null
  });
}
async function B1() {
  return await ot("local_ai_restart_service");
}
async function j1() {
  await ot("local_ai_stop_service");
}
async function z1(e) {
  return await ot("local_ai_chat", { request: e });
}
async function W1() {
  return await ot("local_ai_get_chat_histories");
}
async function U1(e) {
  return await ot("local_ai_save_chat_history", { history: e });
}
async function H1(e) {
  return await ot("local_ai_delete_chat_history", { historyId: e });
}
const K1 = { class: "local-ai-chat-shell" }, G1 = { class: "chat-sidebar panel-card" }, Y1 = { class: "sidebar-header" }, q1 = { class: "sidebar-title-block" }, X1 = { class: "sidebar-actions" }, Z1 = { class: "sidebar-search" }, J1 = ["placeholder"], Q1 = { class: "sidebar-section" }, e_ = { class: "section-title" }, t_ = ["onClick"], n_ = { class: "sidebar-section recent-section" }, o_ = { class: "section-title" }, r_ = {
  key: 0,
  class: "chat-list"
}, a_ = ["onClick"], s_ = { class: "chat-item-copy" }, l_ = { class: "chat-item-title" }, i_ = { class: "chat-item-meta" }, u_ = ["title", "onClick"], c_ = {
  key: 1,
  class: "sidebar-empty"
}, d_ = { class: "chat-panel panel-card" }, f_ = { class: "chat-topbar" }, p_ = { class: "chat-topbar-main" }, m_ = { class: "chat-title-row" }, v_ = { class: "chat-subtitle" }, g_ = { class: "chat-topbar-actions" }, h_ = { class: "chat-status-row" }, y_ = { class: "info-chip" }, b_ = { class: "info-chip" }, __ = { class: "info-chip" }, w_ = {
  key: 0,
  class: "empty-state"
}, E_ = { class: "empty-card" }, C_ = { class: "empty-title" }, S_ = { class: "empty-desc" }, T_ = { class: "message-avatar" }, O_ = { key: 1 }, A_ = { class: "message-body" }, L_ = { class: "message-head" }, k_ = { class: "message-role" }, I_ = {
  key: 0,
  class: "message-mini-meta"
}, P_ = { class: "message-bubble" }, N_ = {
  key: 1,
  class: "message-row message-row--assistant"
}, R_ = { class: "message-avatar" }, $_ = { class: "message-body" }, M_ = { class: "message-head" }, F_ = { class: "message-role" }, D_ = { class: "message-mini-meta" }, V_ = { class: "message-bubble loading-text" }, x_ = ["placeholder", "onKeydown"], B_ = { class: "input-toolbar" }, j_ = { class: "input-toolbar-left" }, z_ = ["disabled"], W_ = { class: "input-toolbar-right" }, U_ = /* @__PURE__ */ J({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = ho(), n = ci(), o = B(""), r = B([]), s = B(""), a = B(""), l = B(!1), u = B(!1), c = B(null), f = B(null);
    let p = null;
    const v = k(() => [
      { key: "summary", text: t("localAi.quickPromptSummary") },
      { key: "translate", text: t("localAi.quickPromptTranslate") },
      { key: "code", text: t("localAi.quickPromptCode") }
    ]), h = k(() => !!a.value.trim() && !l.value), g = k(() => c.value?.healthy ? t("localAi.serviceHealthy") : c.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), m = k(() => r.value.find((x) => x.id === s.value) ?? null), E = k(() => m.value?.messages ?? []), d = k(() => {
      const x = o.value.trim().toLowerCase();
      return r.value.filter((H) => !x || H.title.toLowerCase().includes(x) || H.messages.some((G) => G.content.toLowerCase().includes(x))).slice().sort((H, G) => G.updatedAt.localeCompare(H.updatedAt));
    }), C = () => t("localAi.now"), L = () => {
      const x = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: x,
        updatedAt: x,
        updatedAtLabel: C(),
        messages: []
      };
    }, T = async () => {
      await ke();
      const x = f.value;
      x && (x.scrollTop = x.scrollHeight);
    }, y = async () => {
      u.value = !0;
      try {
        c.value = await ku();
      } catch (x) {
        Fn.warn("[LocalAI] refresh chat status failed", x);
      } finally {
        u.value = !1;
      }
    }, A = async () => {
      try {
        const x = await W1();
        r.value = x.map((H) => ({
          id: H.id,
          title: H.title,
          createdAt: H.createdAt,
          updatedAt: H.updatedAt,
          updatedAtLabel: new Date(H.updatedAt).toLocaleString(),
          messages: H.turns.map((G) => ({
            id: G.id,
            role: G.role,
            content: G.content
          }))
        })), !s.value && r.value[0] && (s.value = r.value[0].id);
      } catch (x) {
        Fn.warn("[LocalAI] refresh histories failed", x);
      }
    }, O = async () => {
      await Promise.all([y(), A()]);
    }, z = async () => {
      const x = m.value;
      x && await U1({
        id: x.id,
        title: x.title,
        createdAt: x.createdAt,
        updatedAt: x.updatedAt,
        turns: x.messages.map((H) => ({
          id: H.id,
          role: H.role,
          content: H.content,
          createdAt: x.updatedAt
        }))
      });
    }, W = () => {
      const x = L();
      r.value.unshift(x), s.value = x.id, a.value = "";
    }, ee = () => {
      m.value || W();
    }, oe = (x) => {
      ee(), a.value = x;
    }, Q = (x) => {
      s.value = x, T();
    }, ie = async (x) => {
      r.value = r.value.filter((H) => H.id !== x), await H1(x), s.value === x && (s.value = r.value[0]?.id ?? "");
    }, Ee = () => E.value.map((x) => ({
      role: x.role,
      content: x.content
    })), M = async () => {
      const x = a.value.trim();
      if (!(!x || l.value)) {
        ee(), m.value?.messages.push({ id: `${Date.now()}-user`, role: "user", content: x }), a.value = "", l.value = !0, await T();
        try {
          const H = await z1({ messages: Ee() });
          m.value?.messages.push({ id: `${Date.now()}-assistant`, role: "assistant", content: H.content }), m.value && (m.value.title = m.value.title === t("localAi.newChatTitle") ? x.slice(0, 28) : m.value.title, m.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), m.value.updatedAtLabel = new Date(m.value.updatedAt).toLocaleString(), await z()), await y();
        } catch (H) {
          Pt.msg(`${t("localAi.chatFailed")}: ${H}`, "error"), m.value?.messages.push({ id: `${Date.now()}-assistant-error`, role: "assistant", content: String(H) });
        } finally {
          l.value = !1, await T();
        }
      }
    }, F = async () => {
      m.value && (m.value.messages = [], m.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), m.value.updatedAtLabel = new Date(m.value.updatedAt).toLocaleString()), await z();
    }, I = () => {
      n.push({ path: "/config/category/settings", query: { tab: "localAi" } });
    };
    return Ne(async () => {
      await O(), p = setInterval(() => {
        y().catch((x) => Fn.warn("[LocalAI] status timer failed", x));
      }, 8e3);
    }), Qo(() => {
      p && clearInterval(p);
    }), (x, H) => (P(), U("main", K1, [
      b("aside", G1, [
        b("header", Y1, [
          b("div", q1, [
            b(
              "h2",
              null,
              D(i(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            b(
              "p",
              null,
              D(i(t)("localAi.chatSubtitle")),
              1
              /* TEXT */
            )
          ]),
          b("div", X1, [
            V(i(ct), {
              class: "icon-action-btn",
              size: "small",
              plain: "",
              title: i(t)("localAi.newChat"),
              onClick: W
            }, {
              default: Z(() => [
                V(i(vc), {
                  theme: "outline",
                  size: "16"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["title"]),
            V(i(ct), {
              class: "icon-action-btn",
              size: "small",
              plain: "",
              loading: i(u),
              title: i(t)("plugins.refresh"),
              onClick: O
            }, {
              default: Z(() => [
                V(i(Ua), {
                  theme: "outline",
                  size: "16"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading", "title"])
          ])
        ]),
        b("div", Z1, [
          xe(b("input", {
            "onUpdate:modelValue": H[0] || (H[0] = (G) => ao(o) ? o.value = G : null),
            class: "search-input",
            placeholder: i(t)("localAi.searchHistory")
          }, null, 8, J1), [
            [so, i(o)]
          ])
        ]),
        b("section", Q1, [
          b(
            "div",
            e_,
            D(i(t)("common.quickStart")),
            1
            /* TEXT */
          ),
          (P(!0), U(
            qe,
            null,
            En(i(v), (G) => (P(), U("button", {
              key: G.key,
              class: "quick-prompt",
              type: "button",
              onClick: (ye) => oe(G.text)
            }, [
              V(i(yc), {
                theme: "outline",
                size: "15"
              }),
              b(
                "span",
                null,
                D(G.text),
                1
                /* TEXT */
              )
            ], 8, t_))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        b("section", n_, [
          b(
            "div",
            o_,
            D(i(t)("localAi.recent")),
            1
            /* TEXT */
          ),
          i(d).length ? (P(), U("div", r_, [
            (P(!0), U(
              qe,
              null,
              En(i(d), (G) => (P(), U("button", {
                key: G.id,
                type: "button",
                class: j(["chat-list-item", i(s) === G.id ? "active" : ""]),
                onClick: (ye) => Q(G.id)
              }, [
                b("div", s_, [
                  b(
                    "div",
                    l_,
                    D(G.title),
                    1
                    /* TEXT */
                  ),
                  b(
                    "div",
                    i_,
                    D(G.updatedAtLabel),
                    1
                    /* TEXT */
                  )
                ]),
                b("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: i(t)("common.delete"),
                  onClick: Le((ye) => ie(G.id), ["stop"])
                }, [
                  V(i(hc), {
                    theme: "outline",
                    size: "14"
                  })
                ], 8, u_)
              ], 10, a_))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (P(), U(
            "div",
            c_,
            D(i(t)("common.empty")),
            1
            /* TEXT */
          ))
        ])
      ]),
      b("section", d_, [
        b("header", f_, [
          b("div", p_, [
            b("div", m_, [
              b(
                "h3",
                null,
                D(i(m)?.title ?? i(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              b(
                "span",
                {
                  class: j(["status-pill", i(c)?.healthy ? "ready" : i(c)?.running ? "pending" : "stopped"])
                },
                D(i(g)),
                3
                /* TEXT, CLASS */
              )
            ]),
            b("div", v_, [
              b(
                "span",
                null,
                D(i(c)?.baseUrl ?? i(t)("localAi.serviceNotStarted")),
                1
                /* TEXT */
              ),
              H[2] || (H[2] = b(
                "span",
                { class: "meta-separator" },
                "/",
                -1
                /* HOISTED */
              )),
              b(
                "span",
                null,
                D(i(t)("localAi.onDemandHint")),
                1
                /* TEXT */
              )
            ])
          ]),
          b("div", g_, [
            V(i(ct), {
              size: "small",
              plain: "",
              onClick: I
            }, {
              default: Z(() => [
                V(i(gc), {
                  theme: "outline",
                  size: "15"
                }),
                Ze(
                  " " + D(i(t)("localAi.backToSettings")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            V(i(ct), {
              size: "small",
              plain: "",
              onClick: O
            }, {
              default: Z(() => [
                V(i(Ua), {
                  theme: "outline",
                  size: "15"
                }),
                Ze(
                  " " + D(i(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        b("div", h_, [
          b(
            "span",
            y_,
            D(i(t)("localAi.serviceControl")) + ": " + D(i(g)),
            1
            /* TEXT */
          ),
          b(
            "span",
            b_,
            D(i(t)("localAi.modelRuntime")),
            1
            /* TEXT */
          ),
          b(
            "span",
            __,
            D(i(t)("localAi.generation")) + ": " + D(i(t)("localAi.temperature")) + " / " + D(i(t)("localAi.maxTokens")),
            1
            /* TEXT */
          )
        ]),
        b(
          "div",
          {
            ref_key: "messageListRef",
            ref: f,
            class: "message-list"
          },
          [
            i(E).length ? X("v-if", !0) : (P(), U("div", w_, [
              b("div", E_, [
                V(i(br), {
                  theme: "outline",
                  size: "34"
                }),
                b("div", null, [
                  b(
                    "div",
                    C_,
                    D(i(t)("localAi.chatEmpty")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "div",
                    S_,
                    D(i(t)("localAi.chatPlaceholder")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])),
            (P(!0), U(
              qe,
              null,
              En(i(E), (G) => (P(), U(
                "article",
                {
                  key: G.id,
                  class: j(["message-row", `message-row--${G.role}`])
                },
                [
                  b("div", T_, [
                    G.role === "assistant" ? (P(), ne(i(br), {
                      key: 0,
                      theme: "outline",
                      size: "16"
                    })) : (P(), U(
                      "span",
                      O_,
                      D(i(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  b("div", A_, [
                    b("div", L_, [
                      b(
                        "span",
                        k_,
                        D(G.role === "user" ? i(t)("localAi.you") : i(t)("localAi.assistant")),
                        1
                        /* TEXT */
                      ),
                      G.role === "assistant" ? (P(), U("span", I_, "llama.cpp")) : X("v-if", !0)
                    ]),
                    b(
                      "div",
                      P_,
                      D(G.content),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              ))),
              128
              /* KEYED_FRAGMENT */
            )),
            i(l) ? (P(), U("article", N_, [
              b("div", R_, [
                V(i(br), {
                  theme: "outline",
                  size: "16"
                })
              ]),
              b("div", $_, [
                b("div", M_, [
                  b(
                    "span",
                    F_,
                    D(i(t)("localAi.assistant")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "span",
                    D_,
                    D(i(t)("localAi.thinking")),
                    1
                    /* TEXT */
                  )
                ]),
                b(
                  "div",
                  V_,
                  D(i(t)("localAi.thinking")),
                  1
                  /* TEXT */
                )
              ])
            ])) : X("v-if", !0)
          ],
          512
          /* NEED_PATCH */
        ),
        b(
          "form",
          {
            class: "chat-input-card",
            onSubmit: Le(M, ["prevent"])
          },
          [
            xe(b("textarea", {
              "onUpdate:modelValue": H[1] || (H[1] = (G) => ao(a) ? a.value = G : null),
              class: "chat-input",
              rows: "4",
              placeholder: i(t)("localAi.chatPlaceholder"),
              onKeydown: wt(Le(M, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, x_), [
              [so, i(a)]
            ]),
            b("div", B_, [
              b("div", j_, [
                b("button", {
                  class: "tool-chip",
                  type: "button",
                  onClick: I
                }, [
                  V(i(xl), {
                    theme: "outline",
                    size: "14"
                  }),
                  Ze(
                    " " + D(i(t)("localAi.settings")),
                    1
                    /* TEXT */
                  )
                ]),
                b("button", {
                  class: "tool-chip",
                  type: "button",
                  disabled: i(l) || !i(E).length,
                  onClick: F
                }, D(i(t)("common.clear")), 9, z_)
              ]),
              b("div", W_, [
                H[3] || (H[3] = b(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                V(i(ct), {
                  type: "primary",
                  size: "small",
                  class: "send-btn",
                  loading: i(l),
                  disabled: !i(h),
                  onClick: M
                }, {
                  default: Z(() => [
                    V(i(bc), {
                      theme: "outline",
                      size: "15"
                    }),
                    Ze(
                      " " + D(i(t)("localAi.send")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]));
  }
}), H_ = /* @__PURE__ */ aa(U_, [["__scopeId", "data-v-efba82bb"]]), K_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: H_
}, Symbol.toStringTag, { value: "Module" }));
async function $l(e = {}) {
  return typeof e == "object" && Object.freeze(e), await ot("plugin:dialog|open", { options: e });
}
const G_ = { class: "settings-panel local-ai-settings-shell" }, Y_ = { class: "local-ai-hero panel-card" }, q_ = { class: "panel-title" }, X_ = { class: "hero-desc" }, Z_ = { class: "header-actions" }, J_ = {
  key: 0,
  class: "settings-grid"
}, Q_ = { class: "summary-panel panel-card" }, ew = { class: "status-strip" }, tw = { class: "summary-card" }, nw = { class: "summary-card__title" }, ow = { class: "summary-card__desc" }, rw = { class: "service-controls" }, aw = { class: "service-url" }, sw = { class: "summary-card" }, lw = { class: "summary-card__title" }, iw = { class: "summary-card__desc" }, uw = { class: "summary-meta" }, cw = { class: "form-panel panel-card" }, dw = { class: "settings-section" }, fw = { class: "settings-section__header" }, pw = { class: "field-stack" }, mw = { class: "field-row" }, vw = { class: "path-control" }, gw = { class: "field-row" }, hw = { class: "field-row" }, yw = { class: "field-row" }, bw = { class: "path-control" }, _w = ["placeholder"], ww = { class: "settings-section grid-two" }, Ew = { class: "settings-section__header" }, Cw = { class: "param-grid" }, Sw = { class: "number-field" }, Tw = { class: "number-field" }, Ow = { class: "number-field" }, Aw = { class: "number-field" }, Lw = { class: "number-field" }, kw = { class: "number-field" }, Iw = { class: "settings-section grid-two" }, Pw = { class: "settings-section__header" }, Nw = { class: "switch-grid" }, Rw = { class: "settings-section grid-two" }, $w = { class: "settings-section__header" }, Mw = { class: "switch-grid switch-grid--two" }, Fw = { class: "number-field" }, Dw = { class: "number-field" }, Vw = { class: "settings-section grid-two" }, xw = { class: "settings-section__header" }, Bw = { class: "param-grid param-grid--three" }, jw = { class: "number-field" }, zw = { class: "number-field" }, Ww = { class: "number-field" }, Uw = { class: "settings-footer" }, Hw = ["title"], Kw = /* @__PURE__ */ J({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = ho(), n = ci(), o = B(null), r = B(null), s = B(null), a = B(null), l = B(!1), u = B(!1), c = B(!1), f = B(!1), p = B(!1);
    let v = null;
    const h = k(() => !!a.value?.selectedModelPath), g = k({ get: () => o.value?.modelPath ?? "", set: (F) => {
      o.value && (o.value.modelPath = F || void 0);
    } }), m = k({ get: () => o.value?.mmprojPath ?? "", set: (F) => {
      o.value && (o.value.mmprojPath = F || void 0);
    } }), E = k(() => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), d = k(() => h.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")), C = k(() => s.value?.healthy ? t("localAi.serviceHealthy") : s.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), L = (F) => F.split(/[\\/]+/).pop() ?? F, T = async () => {
      l.value = !0;
      try {
        o.value = await F1(), await Promise.all([y(), O(), A()]);
      } catch (F) {
        Fn.error("[LocalAI] refresh settings failed", F), Pt.msg(`${t("localAi.refreshFailed")}: ${F}`, "error");
      } finally {
        l.value = !1;
      }
    }, y = async () => {
      r.value = await V1();
    }, A = async () => {
      s.value = await ku();
    }, O = async () => {
      o.value && (a.value = await D1(o.value), !o.value.modelPath && a.value.selectedModelPath && (o.value.modelPath = a.value.selectedModelPath), !o.value.mmprojPath && a.value.selectedMmprojPath && (o.value.mmprojPath = a.value.selectedMmprojPath));
    }, z = async () => {
      if (o.value)
        try {
          await kr(o.value);
        } catch (F) {
          Fn.warn("[LocalAI] autosave failed", F);
        }
    }, W = async () => {
      if (o.value) {
        u.value = !0;
        try {
          o.value = await kr(o.value), await Promise.all([y(), O(), A()]), Pt.msg(t("localAi.configSaved"));
        } catch (F) {
          Pt.msg(`${t("localAi.configSaveFailed")}: ${F}`, "error");
        } finally {
          u.value = !1;
        }
      }
    }, ee = async () => {
      const F = await $l({ directory: !0, multiple: !1, title: t("localAi.chooseModelDir") });
      !F || Array.isArray(F) || !o.value || (o.value.modelDir = F, o.value.modelPath = void 0, o.value.mmprojPath = void 0, await O());
    }, oe = async () => {
      const F = await $l({ multiple: !1, title: t("localAi.chooseRuntime"), filters: [{ name: "llama-server", extensions: ["exe"] }] });
      !F || Array.isArray(F) || !o.value || (o.value.runtimePath = F, await z(), await y());
    }, Q = async () => {
      if (o.value) {
        c.value = !0;
        try {
          await kr(o.value), s.value = await x1(o.value), Pt.msg(t("localAi.serviceStarted"));
        } catch (F) {
          Pt.msg(`${t("localAi.serviceStartFailed")}: ${F}`, "error");
        } finally {
          c.value = !1;
        }
      }
    }, ie = async () => {
      f.value = !0;
      try {
        await W(), s.value = await B1(), Pt.msg(t("localAi.serviceRestarted"));
      } catch (F) {
        Pt.msg(`${t("localAi.serviceRestartFailed")}: ${F}`, "error");
      } finally {
        f.value = !1;
      }
    }, Ee = async () => {
      p.value = !0;
      try {
        await j1(), await A(), Pt.msg(t("localAi.serviceStoppedMsg"));
      } catch (F) {
        Pt.msg(`${t("localAi.serviceStopFailed")}: ${F}`, "error");
      } finally {
        p.value = !1;
      }
    }, M = () => {
      n.push("/local-ai/chat");
    };
    return Ne(async () => {
      await T(), v = setInterval(() => {
        A().catch((F) => Fn.warn("[LocalAI] status refresh failed", F));
      }, 5e3);
    }), Qo(() => {
      v && clearInterval(v);
    }), (F, I) => {
      const x = Qb, H = Jb, G = Fb, ye = s1;
      return P(), U("div", G_, [
        b("header", Y_, [
          b("div", null, [
            b(
              "h3",
              q_,
              D(i(t)("localAi.title")),
              1
              /* TEXT */
            ),
            b(
              "p",
              X_,
              D(i(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          b("div", Z_, [
            V(i(ct), {
              size: "small",
              plain: "",
              onClick: M
            }, {
              default: Z(() => [
                Ze(
                  D(i(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            V(i(ct), {
              size: "small",
              loading: i(l),
              onClick: T
            }, {
              default: Z(() => [
                Ze(
                  D(i(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        i(o) ? (P(), U("main", J_, [
          b("aside", Q_, [
            b("div", ew, [
              b(
                "div",
                {
                  class: j(["status-item", { ready: i(r)?.available }])
                },
                [
                  I[20] || (I[20] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(i(E)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              b(
                "div",
                {
                  class: j(["status-item", { ready: i(h) }])
                },
                [
                  I[21] || (I[21] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(i(d)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              b(
                "div",
                {
                  class: j(["status-item", { ready: i(s)?.healthy }])
                },
                [
                  I[22] || (I[22] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(i(C)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            b("section", tw, [
              b(
                "div",
                nw,
                D(i(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              b(
                "div",
                ow,
                D(i(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              b("div", rw, [
                V(i(ct), {
                  type: "primary",
                  size: "small",
                  loading: i(c),
                  disabled: i(s)?.running,
                  onClick: Q
                }, {
                  default: Z(() => [
                    Ze(
                      D(i(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                V(i(ct), {
                  size: "small",
                  loading: i(f),
                  disabled: !i(s)?.running,
                  onClick: ie
                }, {
                  default: Z(() => [
                    Ze(
                      D(i(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                V(i(ct), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: i(p),
                  disabled: !i(s)?.running,
                  onClick: Ee
                }, {
                  default: Z(() => [
                    Ze(
                      D(i(t)("localAi.stopService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ]),
              b(
                "div",
                aw,
                D(i(s)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            b("section", sw, [
              b(
                "div",
                lw,
                D(i(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              b(
                "div",
                iw,
                D(i(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              b("div", uw, [
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(i(r)?.available ? i(t)("common.yes") : i(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(i(h) ? i(t)("common.yes") : i(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(i(s)?.healthy ? i(t)("common.yes") : i(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          b("section", cw, [
            b("div", dw, [
              b("div", fw, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(i(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(i(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", pw, [
                b("label", mw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  b("div", vw, [
                    xe(b(
                      "input",
                      {
                        "onUpdate:modelValue": I[0] || (I[0] = (q) => i(o).modelDir = q),
                        class: "text-input",
                        onChange: O
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [so, i(o).modelDir]
                    ]),
                    V(i(ct), {
                      size: "small",
                      plain: "",
                      onClick: ee
                    }, {
                      default: Z(() => [
                        Ze(
                          D(i(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                b("label", gw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  V(H, {
                    modelValue: i(g),
                    "onUpdate:modelValue": I[1] || (I[1] = (q) => ao(g) ? g.value = q : null),
                    class: "field-select",
                    clearable: "",
                    onChange: z
                  }, {
                    default: Z(() => [
                      (P(!0), U(
                        qe,
                        null,
                        En(i(a)?.mainModels ?? [], (q) => (P(), ne(x, {
                          key: q,
                          label: L(q),
                          value: q
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                b("label", hw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  V(H, {
                    modelValue: i(m),
                    "onUpdate:modelValue": I[2] || (I[2] = (q) => ao(m) ? m.value = q : null),
                    class: "field-select",
                    clearable: "",
                    onChange: z
                  }, {
                    default: Z(() => [
                      (P(!0), U(
                        qe,
                        null,
                        En(i(a)?.mmprojModels ?? [], (q) => (P(), ne(x, {
                          key: q,
                          label: L(q),
                          value: q
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                b("label", yw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  b("div", bw, [
                    xe(b("input", {
                      "onUpdate:modelValue": I[3] || (I[3] = (q) => i(o).runtimePath = q),
                      class: "text-input",
                      placeholder: i(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, _w), [
                      [so, i(o).runtimePath]
                    ]),
                    V(i(ct), {
                      size: "small",
                      plain: "",
                      onClick: oe
                    }, {
                      default: Z(() => [
                        Ze(
                          D(i(t)("common.browse")),
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
            b("div", ww, [
              b("div", Ew, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(i(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(i(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", Cw, [
                b("label", Sw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).ctxSize,
                    "onUpdate:modelValue": I[4] || (I[4] = (q) => i(o).ctxSize = q),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Tw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).gpuLayers,
                    "onUpdate:modelValue": I[5] || (I[5] = (q) => i(o).gpuLayers = q),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Ow, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).threads,
                    "onUpdate:modelValue": I[6] || (I[6] = (q) => i(o).threads = q),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Aw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).batchSize,
                    "onUpdate:modelValue": I[7] || (I[7] = (q) => i(o).batchSize = q),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Lw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).ubatchSize,
                    "onUpdate:modelValue": I[8] || (I[8] = (q) => i(o).ubatchSize = q),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", kw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).mainGpu,
                    "onUpdate:modelValue": I[9] || (I[9] = (q) => i(o).mainGpu = q),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", Iw, [
              b("div", Pw, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(i(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(i(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", Nw, [
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  V(ye, {
                    modelValue: i(o).flashAttn,
                    "onUpdate:modelValue": I[10] || (I[10] = (q) => i(o).flashAttn = q)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  V(ye, {
                    modelValue: i(o).kvOffload,
                    "onUpdate:modelValue": I[11] || (I[11] = (q) => i(o).kvOffload = q)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  V(ye, {
                    modelValue: i(o).mmap,
                    "onUpdate:modelValue": I[12] || (I[12] = (q) => i(o).mmap = q)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", Rw, [
              b("div", $w, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(i(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(i(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", Mw, [
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  V(ye, {
                    modelValue: i(o).autoStartOnRequest,
                    "onUpdate:modelValue": I[13] || (I[13] = (q) => i(o).autoStartOnRequest = q)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  V(ye, {
                    modelValue: i(o).keepAlive,
                    "onUpdate:modelValue": I[14] || (I[14] = (q) => i(o).keepAlive = q)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Fw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).idleTimeoutMinutes,
                    "onUpdate:modelValue": I[15] || (I[15] = (q) => i(o).idleTimeoutMinutes = q),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Dw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).requestTimeoutSecs,
                    "onUpdate:modelValue": I[16] || (I[16] = (q) => i(o).requestTimeoutSecs = q),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", Vw, [
              b("div", xw, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(i(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(i(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", Bw, [
                b("label", jw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).temperature,
                    "onUpdate:modelValue": I[17] || (I[17] = (q) => i(o).temperature = q),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", zw, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).maxTokens,
                    "onUpdate:modelValue": I[18] || (I[18] = (q) => i(o).maxTokens = q),
                    min: 64,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Ww, [
                  b(
                    "span",
                    null,
                    D(i(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  V(G, {
                    modelValue: i(o).port,
                    "onUpdate:modelValue": I[19] || (I[19] = (q) => i(o).port = q),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", Uw, [
              V(i(ct), {
                type: "primary",
                loading: i(u),
                onClick: W
              }, {
                default: Z(() => [
                  Ze(
                    D(i(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              i(s)?.commandLine ? (P(), U("span", {
                key: 0,
                class: "command-line",
                title: i(s).commandLine
              }, D(i(s).commandLine), 9, Hw)) : X("v-if", !0)
            ])
          ])
        ])) : X("v-if", !0)
      ]);
    };
  }
}), Gw = /* @__PURE__ */ aa(Kw, [["__scopeId", "data-v-42c854ba"]]), Yw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gw
}, Symbol.toStringTag, { value: "Module" }));
export {
  Xw as activate,
  Xw as default
};
