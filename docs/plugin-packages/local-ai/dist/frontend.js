import * as yr from "vue";
import { inject as he, createVNode as V, defineAsyncComponent as Uu, ref as x, shallowRef as fn, computed as k, watch as se, onMounted as Pe, onUnmounted as Qo, defineComponent as Z, h as Nl, Text as Rl, Fragment as qe, createElementBlock as U, openBlock as P, normalizeClass as B, createCommentVNode as q, renderSlot as ae, createElementVNode as b, getCurrentInstance as Qe, unref as l, watchEffect as $l, readonly as Xr, getCurrentScope as Hu, onScopeDispose as Ku, nextTick as Le, isRef as ao, warn as Gu, provide as xt, mergeProps as Dn, toRef as Gt, useAttrs as Yu, useSlots as qu, normalizeStyle as je, createBlock as te, withCtx as X, resolveDynamicComponent as Je, withModifiers as Te, toDisplayString as D, onBeforeUnmount as zt, Transition as Yn, withDirectives as xe, vShow as tn, reactive as Sn, onActivated as Xu, onUpdated as Ml, cloneVNode as Zu, Comment as Ju, Teleport as Qu, onBeforeMount as ec, onDeactivated as tc, createTextVNode as Ze, withKeys as gt, createSlots as nc, toRaw as oc, toRefs as Zr, resolveComponent as _n, resolveDirective as rc, toHandlerKey as ac, renderList as En, vModelText as so, shallowReactive as sc, isVNode as lo, render as jo } from "vue";
var lc = {
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
function ic() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function uc(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], r = [], a = t.theme || n.theme;
  switch (a) {
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
var cc = Symbol("icon-context");
function vn(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = ic(), i = he(cc, lc);
      return function() {
        var u = a.size, c = a.strokeWidth, f = a.strokeLinecap, p = a.strokeLinejoin, v = a.theme, h = a.fill, m = a.spin, g = uc(s, {
          size: u,
          strokeWidth: c,
          strokeLinecap: f,
          strokeLinejoin: p,
          theme: v,
          fill: h
        }, i), E = [i.prefix + "-icon"];
        return E.push(i.prefix + "-icon-" + e), t && i.rtl && E.push(i.prefix + "-icon-rtl"), m && E.push(i.prefix + "-icon-spin"), V("span", {
          class: E.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const dc = vn("add", !1, function(e) {
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
}), fc = vn("back", !0, function(e) {
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
}), pc = vn("delete", !1, function(e) {
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
}), mc = vn("message", !0, function(e) {
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
}), vc = vn("send", !0, function(e) {
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
}), Fl = vn("setting-two", !1, function(e) {
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
}), Hw = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => j_)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: Fl,
    component: Uu(() => Promise.resolve().then(() => Ww))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function gc(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ha = typeof window < "u", An = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), hc = (e, t, n) => yc({ l: e, k: t, s: n }), yc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), De = (e) => typeof e == "number" && isFinite(e), bc = (e) => Jr(e) === "[object Date]", zo = (e) => Jr(e) === "[object RegExp]", er = (e) => fe(e) && Object.keys(e).length === 0, ze = Object.assign, _c = Object.create, _e = (e = null) => _c(e);
let Ka;
const Fo = () => Ka || (Ka = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : _e());
function Ga(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ya(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function wc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (o, r, a) => `${r}="${Ya(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (o, r, a) => `${r}='${Ya(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((o) => {
    e = e.replace(o, "$1javascript&#58;");
  }), e;
}
const Ec = Object.prototype.hasOwnProperty;
function Et(e, t) {
  return Ec.call(e, t);
}
const Ie = Array.isArray, Oe = (e) => typeof e == "function", Q = (e) => typeof e == "string", ke = (e) => typeof e == "boolean", pe = (e) => e !== null && typeof e == "object", Cc = (e) => pe(e) && Oe(e.then) && Oe(e.catch), Dl = Object.prototype.toString, Jr = (e) => Dl.call(e), fe = (e) => Jr(e) === "[object Object]", Sc = (e) => e == null ? "" : Ie(e) || fe(e) && e.toString === Dl ? JSON.stringify(e, null, 2) : String(e);
function Qr(e, t = "") {
  return e.reduce((n, o, r) => r === 0 ? n + o : n + t + o, "");
}
const Ao = (e) => !pe(e) || Ie(e);
function Do(e, t) {
  if (Ao(e) || Ao(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: r } = n.pop();
    Object.keys(o).forEach((a) => {
      a !== "__proto__" && (pe(o[a]) && !pe(r[a]) && (r[a] = Array.isArray(o[a]) ? [] : _e()), Ao(r[a]) || Ao(o[a]) ? r[a] = o[a] : n.push({ src: o[a], des: r[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Tc(e, t, n) {
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
}, Oc = 17;
function tr(e, t, n = {}) {
  const { domain: o, messages: r, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = o, i;
}
function Ac(e) {
  throw e;
}
const kt = " ", Lc = "\r", Ye = `
`, kc = "\u2028", Ic = "\u2029";
function Pc(e) {
  const t = e;
  let n = 0, o = 1, r = 1, a = 0;
  const s = (O) => t[O] === Lc && t[O + 1] === Ye, i = (O) => t[O] === Ye, u = (O) => t[O] === Ic, c = (O) => t[O] === kc, f = (O) => s(O) || i(O) || u(O) || c(O), p = () => n, v = () => o, h = () => r, m = () => a, g = (O) => s(O) || u(O) || c(O) ? Ye : t[O], E = () => g(n), d = () => g(n + a);
  function C() {
    return a = 0, f(n) && (o++, r = 0), s(n) && n++, n++, r++, t[n];
  }
  function L() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function S() {
    n = 0, o = 1, r = 1, a = 0;
  }
  function y(O = 0) {
    a = O;
  }
  function A() {
    const O = n + a;
    for (; O !== n; )
      C();
    a = 0;
  }
  return {
    index: p,
    line: v,
    column: h,
    peekOffset: m,
    charAt: g,
    currentChar: E,
    currentPeek: d,
    next: C,
    peek: L,
    reset: S,
    resetPeek: y,
    skipToPeek: A
  };
}
const Ut = void 0, Nc = ".", qa = "'", Rc = "tokenizer";
function $c(e, t = {}) {
  const n = t.location !== !1, o = Pc(e), r = () => o.index(), a = () => Tc(o.line(), o.column(), o.index()), s = a(), i = r(), u = {
    currentType: 13,
    offset: i,
    startLoc: s,
    endLoc: s,
    lastType: 13,
    lastOffset: i,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => u, { onError: f } = t;
  function p(w, T, F, ...G) {
    const de = c();
    if (T.column += F, T.offset += F, f) {
      const oe = n ? Ir(de.startLoc, T) : null, _ = tr(w, oe, {
        domain: Rc,
        args: G
      });
      f(_);
    }
  }
  function v(w, T, F) {
    w.endLoc = a(), w.currentType = T;
    const G = { type: T };
    return n && (G.loc = Ir(w.startLoc, w.endLoc)), F != null && (G.value = F), G;
  }
  const h = (w) => v(
    w,
    13
    /* TokenTypes.EOF */
  );
  function m(w, T) {
    return w.currentChar() === T ? (w.next(), T) : (p(ve.EXPECTED_TOKEN, a(), 0, T), "");
  }
  function g(w) {
    let T = "";
    for (; w.currentPeek() === kt || w.currentPeek() === Ye; )
      T += w.currentPeek(), w.peek();
    return T;
  }
  function E(w) {
    const T = g(w);
    return w.skipToPeek(), T;
  }
  function d(w) {
    if (w === Ut)
      return !1;
    const T = w.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T === 95;
  }
  function C(w) {
    if (w === Ut)
      return !1;
    const T = w.charCodeAt(0);
    return T >= 48 && T <= 57;
  }
  function L(w, T) {
    const { currentType: F } = T;
    if (F !== 2)
      return !1;
    g(w);
    const G = d(w.currentPeek());
    return w.resetPeek(), G;
  }
  function S(w, T) {
    const { currentType: F } = T;
    if (F !== 2)
      return !1;
    g(w);
    const G = w.currentPeek() === "-" ? w.peek() : w.currentPeek(), de = C(G);
    return w.resetPeek(), de;
  }
  function y(w, T) {
    const { currentType: F } = T;
    if (F !== 2)
      return !1;
    g(w);
    const G = w.currentPeek() === qa;
    return w.resetPeek(), G;
  }
  function A(w, T) {
    const { currentType: F } = T;
    if (F !== 7)
      return !1;
    g(w);
    const G = w.currentPeek() === ".";
    return w.resetPeek(), G;
  }
  function O(w, T) {
    const { currentType: F } = T;
    if (F !== 8)
      return !1;
    g(w);
    const G = d(w.currentPeek());
    return w.resetPeek(), G;
  }
  function z(w, T) {
    const { currentType: F } = T;
    if (!(F === 7 || F === 11))
      return !1;
    g(w);
    const G = w.currentPeek() === ":";
    return w.resetPeek(), G;
  }
  function W(w, T) {
    const { currentType: F } = T;
    if (F !== 9)
      return !1;
    const G = () => {
      const oe = w.currentPeek();
      return oe === "{" ? d(w.peek()) : oe === "@" || oe === "|" || oe === ":" || oe === "." || oe === kt || !oe ? !1 : oe === Ye ? (w.peek(), G()) : ne(w, !1);
    }, de = G();
    return w.resetPeek(), de;
  }
  function ee(w) {
    g(w);
    const T = w.currentPeek() === "|";
    return w.resetPeek(), T;
  }
  function ne(w, T = !0) {
    const F = (de = !1, oe = "") => {
      const _ = w.currentPeek();
      return _ === "{" || _ === "@" || !_ ? de : _ === "|" ? !(oe === kt || oe === Ye) : _ === kt ? (w.peek(), F(!0, kt)) : _ === Ye ? (w.peek(), F(!0, Ye)) : !0;
    }, G = F();
    return T && w.resetPeek(), G;
  }
  function J(w, T) {
    const F = w.currentChar();
    return F === Ut ? Ut : T(F) ? (w.next(), F) : null;
  }
  function le(w) {
    const T = w.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T >= 48 && T <= 57 || // 0-9
    T === 95 || // _
    T === 36;
  }
  function ye(w) {
    return J(w, le);
  }
  function N(w) {
    const T = w.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T >= 48 && T <= 57 || // 0-9
    T === 95 || // _
    T === 36 || // $
    T === 45;
  }
  function $(w) {
    return J(w, N);
  }
  function I(w) {
    const T = w.charCodeAt(0);
    return T >= 48 && T <= 57;
  }
  function H(w) {
    return J(w, I);
  }
  function j(w) {
    const T = w.charCodeAt(0);
    return T >= 48 && T <= 57 || // 0-9
    T >= 65 && T <= 70 || // A-F
    T >= 97 && T <= 102;
  }
  function ie(w) {
    return J(w, j);
  }
  function Y(w) {
    let T = "", F = "";
    for (; T = H(w); )
      F += T;
    return F;
  }
  function Me(w) {
    let T = "";
    for (; ; ) {
      const F = w.currentChar();
      if (F === "{" || F === "}" || F === "@" || F === "|" || !F)
        break;
      if (F === kt || F === Ye)
        if (ne(w))
          T += F, w.next();
        else {
          if (ee(w))
            break;
          T += F, w.next();
        }
      else
        T += F, w.next();
    }
    return T;
  }
  function we(w) {
    E(w);
    let T = "", F = "";
    for (; T = $(w); )
      F += T;
    const G = w.currentChar();
    if (G && G !== "}" && G !== Ut && G !== kt && G !== Ye && G !== "　") {
      const de = pt(w);
      return p(ve.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, F + de), F + de;
    }
    return w.currentChar() === Ut && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), F;
  }
  function We(w) {
    E(w);
    let T = "";
    return w.currentChar() === "-" ? (w.next(), T += `-${Y(w)}`) : T += Y(w), w.currentChar() === Ut && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), T;
  }
  function Be(w) {
    return w !== qa && w !== Ye;
  }
  function Ue(w) {
    E(w), m(w, "'");
    let T = "", F = "";
    for (; T = J(w, Be); )
      T === "\\" ? F += He(w) : F += T;
    const G = w.currentChar();
    return G === Ye || G === Ut ? (p(ve.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), G === Ye && (w.next(), m(w, "'")), F) : (m(w, "'"), F);
  }
  function He(w) {
    const T = w.currentChar();
    switch (T) {
      case "\\":
      case "'":
        return w.next(), `\\${T}`;
      case "u":
        return be(w, T, 4);
      case "U":
        return be(w, T, 6);
      default:
        return p(ve.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, T), "";
    }
  }
  function be(w, T, F) {
    m(w, T);
    let G = "";
    for (let de = 0; de < F; de++) {
      const oe = ie(w);
      if (!oe) {
        p(ve.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${T}${G}${w.currentChar()}`);
        break;
      }
      G += oe;
    }
    return `\\${T}${G}`;
  }
  function rt(w) {
    return w !== "{" && w !== "}" && w !== kt && w !== Ye;
  }
  function pt(w) {
    E(w);
    let T = "", F = "";
    for (; T = J(w, rt); )
      F += T;
    return F;
  }
  function at(w) {
    let T = "", F = "";
    for (; T = ye(w); )
      F += T;
    return F;
  }
  function _t(w) {
    const T = (F) => {
      const G = w.currentChar();
      return G === "{" || G === "@" || G === "|" || G === "(" || G === ")" || !G || G === kt ? F : (F += G, w.next(), T(F));
    };
    return T("");
  }
  function st(w) {
    E(w);
    const T = m(
      w,
      "|"
      /* TokenChars.Pipe */
    );
    return E(w), T;
  }
  function lt(w, T) {
    let F = null;
    switch (w.currentChar()) {
      case "{":
        return T.braceNest >= 1 && p(ve.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), w.next(), F = v(
          T,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(w), T.braceNest++, F;
      case "}":
        return T.braceNest > 0 && T.currentType === 2 && p(ve.EMPTY_PLACEHOLDER, a(), 0), w.next(), F = v(
          T,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), T.braceNest--, T.braceNest > 0 && E(w), T.inLinked && T.braceNest === 0 && (T.inLinked = !1), F;
      case "@":
        return T.braceNest > 0 && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), F = it(w, T) || h(T), T.braceNest = 0, F;
      default: {
        let de = !0, oe = !0, _ = !0;
        if (ee(w))
          return T.braceNest > 0 && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), F = v(T, 1, st(w)), T.braceNest = 0, T.inLinked = !1, F;
        if (T.braceNest > 0 && (T.currentType === 4 || T.currentType === 5 || T.currentType === 6))
          return p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), T.braceNest = 0, mt(w, T);
        if (de = L(w, T))
          return F = v(T, 4, we(w)), E(w), F;
        if (oe = S(w, T))
          return F = v(T, 5, We(w)), E(w), F;
        if (_ = y(w, T))
          return F = v(T, 6, Ue(w)), E(w), F;
        if (!de && !oe && !_)
          return F = v(T, 12, pt(w)), p(ve.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, F.value), E(w), F;
        break;
      }
    }
    return F;
  }
  function it(w, T) {
    const { currentType: F } = T;
    let G = null;
    const de = w.currentChar();
    switch ((F === 7 || F === 8 || F === 11 || F === 9) && (de === Ye || de === kt) && p(ve.INVALID_LINKED_FORMAT, a(), 0), de) {
      case "@":
        return w.next(), G = v(
          T,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), T.inLinked = !0, G;
      case ".":
        return E(w), w.next(), v(
          T,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(w), w.next(), v(
          T,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ee(w) ? (G = v(T, 1, st(w)), T.braceNest = 0, T.inLinked = !1, G) : A(w, T) || z(w, T) ? (E(w), it(w, T)) : O(w, T) ? (E(w), v(T, 11, at(w))) : W(w, T) ? (E(w), de === "{" ? lt(w, T) || G : v(T, 10, _t(w))) : (F === 7 && p(ve.INVALID_LINKED_FORMAT, a(), 0), T.braceNest = 0, T.inLinked = !1, mt(w, T));
    }
  }
  function mt(w, T) {
    let F = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (T.braceNest > 0)
      return lt(w, T) || h(T);
    if (T.inLinked)
      return it(w, T) || h(T);
    switch (w.currentChar()) {
      case "{":
        return lt(w, T) || h(T);
      case "}":
        return p(ve.UNBALANCED_CLOSING_BRACE, a(), 0), w.next(), v(
          T,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return it(w, T) || h(T);
      default: {
        if (ee(w))
          return F = v(T, 1, st(w)), T.braceNest = 0, T.inLinked = !1, F;
        if (ne(w))
          return v(T, 0, Me(w));
        break;
      }
    }
    return F;
  }
  function Lt() {
    const { currentType: w, offset: T, startLoc: F, endLoc: G } = u;
    return u.lastType = w, u.lastOffset = T, u.lastStartLoc = F, u.lastEndLoc = G, u.offset = r(), u.startLoc = a(), o.currentChar() === Ut ? v(
      u,
      13
      /* TokenTypes.EOF */
    ) : mt(o, u);
  }
  return {
    nextToken: Lt,
    currentOffset: r,
    currentPosition: a,
    context: c
  };
}
const Mc = "parser", Fc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Dc(e, t, n) {
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
function Vc(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(d, C, L, S, ...y) {
    const A = d.currentPosition();
    if (A.offset += S, A.column += S, n) {
      const O = t ? Ir(L, A) : null, z = tr(C, O, {
        domain: Mc,
        args: y
      });
      n(z);
    }
  }
  function r(d, C, L) {
    const S = { type: d };
    return t && (S.start = C, S.end = C, S.loc = { start: L, end: L }), S;
  }
  function a(d, C, L, S) {
    t && (d.end = C, d.loc && (d.loc.end = L));
  }
  function s(d, C) {
    const L = d.context(), S = r(3, L.offset, L.startLoc);
    return S.value = C, a(S, d.currentOffset(), d.currentPosition()), S;
  }
  function i(d, C) {
    const L = d.context(), { lastOffset: S, lastStartLoc: y } = L, A = r(5, S, y);
    return A.index = parseInt(C, 10), d.nextToken(), a(A, d.currentOffset(), d.currentPosition()), A;
  }
  function u(d, C) {
    const L = d.context(), { lastOffset: S, lastStartLoc: y } = L, A = r(4, S, y);
    return A.key = C, d.nextToken(), a(A, d.currentOffset(), d.currentPosition()), A;
  }
  function c(d, C) {
    const L = d.context(), { lastOffset: S, lastStartLoc: y } = L, A = r(9, S, y);
    return A.value = C.replace(Fc, Dc), d.nextToken(), a(A, d.currentOffset(), d.currentPosition()), A;
  }
  function f(d) {
    const C = d.nextToken(), L = d.context(), { lastOffset: S, lastStartLoc: y } = L, A = r(8, S, y);
    return C.type !== 11 ? (o(d, ve.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), A.value = "", a(A, S, y), {
      nextConsumeToken: C,
      node: A
    }) : (C.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, It(C)), A.value = C.value || "", a(A, d.currentOffset(), d.currentPosition()), {
      node: A
    });
  }
  function p(d, C) {
    const L = d.context(), S = r(7, L.offset, L.startLoc);
    return S.value = C, a(S, d.currentOffset(), d.currentPosition()), S;
  }
  function v(d) {
    const C = d.context(), L = r(6, C.offset, C.startLoc);
    let S = d.nextToken();
    if (S.type === 8) {
      const y = f(d);
      L.modifier = y.node, S = y.nextConsumeToken || d.nextToken();
    }
    switch (S.type !== 9 && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(S)), S = d.nextToken(), S.type === 2 && (S = d.nextToken()), S.type) {
      case 10:
        S.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(S)), L.key = p(d, S.value || "");
        break;
      case 4:
        S.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(S)), L.key = u(d, S.value || "");
        break;
      case 5:
        S.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(S)), L.key = i(d, S.value || "");
        break;
      case 6:
        S.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(S)), L.key = c(d, S.value || "");
        break;
      default: {
        o(d, ve.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const y = d.context(), A = r(7, y.offset, y.startLoc);
        return A.value = "", a(A, y.offset, y.startLoc), L.key = A, a(L, y.offset, y.startLoc), {
          nextConsumeToken: S,
          node: L
        };
      }
    }
    return a(L, d.currentOffset(), d.currentPosition()), {
      node: L
    };
  }
  function h(d) {
    const C = d.context(), L = C.currentType === 1 ? d.currentOffset() : C.offset, S = C.currentType === 1 ? C.endLoc : C.startLoc, y = r(2, L, S);
    y.items = [];
    let A = null;
    do {
      const W = A || d.nextToken();
      switch (A = null, W.type) {
        case 0:
          W.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(W)), y.items.push(s(d, W.value || ""));
          break;
        case 5:
          W.value == null && o(d, ve.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, It(W)), y.items.push(i(d, W.value || ""));
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
    return a(y, O, z), y;
  }
  function m(d, C, L, S) {
    const y = d.context();
    let A = S.items.length === 0;
    const O = r(1, C, L);
    O.cases = [], O.cases.push(S);
    do {
      const z = h(d);
      A || (A = z.items.length === 0), O.cases.push(z);
    } while (y.currentType !== 13);
    return A && o(d, ve.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function g(d) {
    const C = d.context(), { offset: L, startLoc: S } = C, y = h(d);
    return C.currentType === 13 ? y : m(d, L, S, y);
  }
  function E(d) {
    const C = $c(d, ze({}, e)), L = C.context(), S = r(0, L.offset, L.startLoc);
    return t && S.loc && (S.loc.source = d), S.body = g(C), e.onCacheKey && (S.cacheKey = e.onCacheKey(d)), L.currentType !== 13 && o(C, ve.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, d[L.offset] || ""), a(S, C.currentOffset(), C.currentPosition()), S;
  }
  return { parse: E };
}
function It(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function xc(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
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
function Bc(e, t = {}) {
  const n = xc(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ea(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function jc(e) {
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
function zc(e, t) {
  const { filename: n, breakLineCode: o, needIndent: r } = t, a = t.location !== !1, s = {
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
  a && e.loc && (s.source = e.loc.source);
  const i = () => s;
  function u(g, E) {
    s.code += g;
  }
  function c(g, E = !0) {
    const d = E ? o : "";
    u(r ? d + "  ".repeat(g) : d);
  }
  function f(g = !0) {
    const E = ++s.indentLevel;
    g && c(E);
  }
  function p(g = !0) {
    const E = --s.indentLevel;
    g && c(E);
  }
  function v() {
    c(s.indentLevel);
  }
  return {
    context: i,
    push: u,
    indent: f,
    deindent: p,
    newline: v,
    helper: (g) => `_${g}`,
    needIndent: () => s.needIndent
  };
}
function Wc(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Vn(e, t.key), t.modifier ? (e.push(", "), Vn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Uc(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(o());
  const r = t.items.length;
  for (let a = 0; a < r && (Vn(e, t.items[a]), a !== r - 1); a++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function Hc(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(o());
    const r = t.cases.length;
    for (let a = 0; a < r && (Vn(e, t.cases[a]), a !== r - 1); a++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function Kc(e, t) {
  t.body ? Vn(e, t.body) : e.push("null");
}
function Vn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Kc(e, t);
      break;
    case 1:
      Hc(e, t);
      break;
    case 2:
      Uc(e, t);
      break;
    case 6:
      Wc(e, t);
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
const Gc = (e, t = {}) => {
  const n = Q(t.mode) ? t.mode : "normal", o = Q(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = zc(e, {
    filename: o,
    breakLineCode: r,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${Qr(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), i.newline()), i.push("return "), Vn(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: u, map: c } = i.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Yc(e, t = {}) {
  const n = ze({}, t), o = !!n.jit, r = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Vc(n).parse(e);
  return o ? (a && jc(i), r && $n(i), { ast: i, code: "" }) : (Bc(i, n), Gc(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function qc() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Fo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ft(e) {
  return pe(e) && ta(e) === 0 && (Et(e, "b") || Et(e, "body"));
}
const Vl = ["b", "body"];
function Xc(e) {
  return gn(e, Vl);
}
const xl = ["c", "cases"];
function Zc(e) {
  return gn(e, xl, []);
}
const Bl = ["s", "static"];
function Jc(e) {
  return gn(e, Bl);
}
const jl = ["i", "items"];
function Qc(e) {
  return gn(e, jl, []);
}
const zl = ["t", "type"];
function ta(e) {
  return gn(e, zl);
}
const Wl = ["v", "value"];
function Lo(e, t) {
  const n = gn(e, Wl);
  if (n != null)
    return n;
  throw io(t);
}
const Ul = ["m", "modifier"];
function ed(e) {
  return gn(e, Ul);
}
const Hl = ["k", "key"];
function td(e) {
  const t = gn(e, Hl);
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
const Kl = [
  ...Vl,
  ...xl,
  ...Bl,
  ...jl,
  ...Hl,
  ...Ul,
  ...Wl,
  ...zl
];
function io(e) {
  return new Error(`unhandled node type: ${e}`);
}
function _r(e) {
  return (n) => nd(n, e);
}
function nd(e, t) {
  const n = Xc(t);
  if (n == null)
    throw io(
      0
      /* NodeTypes.Resource */
    );
  if (ta(n) === 1) {
    const a = Zc(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Ja(e, i)
    ], []));
  } else
    return Ja(e, n);
}
function Ja(e, t) {
  const n = Jc(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = Qc(t).reduce((r, a) => [...r, Pr(e, a)], []);
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
      const o = t, r = ed(o), a = td(o);
      return e.linked(Pr(e, a), r ? Pr(e, r) : void 0, e.type);
    }
    case 7:
      return Lo(t, n);
    case 8:
      return Lo(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const od = (e) => e;
let ko = _e();
function rd(e, t = {}) {
  let n = !1;
  const o = t.onError || Ac;
  return t.onError = (r) => {
    n = !0, o(r);
  }, { ...Yc(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function ad(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Q(e)) {
    ke(t.warnHtmlMessage) && t.warnHtmlMessage;
    const o = (t.onCacheKey || od)(e), r = ko[o];
    if (r)
      return r;
    const { ast: a, detectError: s } = rd(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = _r(a);
    return s ? i : ko[o] = i;
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
  INVALID_ARGUMENT: Oc,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, sd = 24;
function qt(e) {
  return tr(e, null, void 0);
}
function na(e, t) {
  return t.locale != null ? Qa(t.locale) : Qa(e.locale);
}
let wr;
function Qa(e) {
  if (Q(e))
    return e;
  if (Oe(e)) {
    if (e.resolvedOnce && wr != null)
      return wr;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Cc(t))
        throw qt(Yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return wr = t;
    } else
      throw qt(Yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw qt(Yt.NOT_SUPPORT_LOCALE_TYPE);
}
function ld(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ie(t) ? t : pe(t) ? Object.keys(t) : Q(t) ? [t] : [n]
  ])];
}
function Gl(e, t, n) {
  const o = Q(n) ? n : Wo, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let a = r.__localeChainCache.get(o);
  if (!a) {
    a = [];
    let s = [n];
    for (; Ie(s); )
      s = es(a, s, t);
    const i = Ie(t) || !fe(t) ? t : t.default ? t.default : null;
    s = Q(i) ? [i] : i, Ie(s) && es(a, s, !1), r.__localeChainCache.set(o, a);
  }
  return a;
}
function es(e, t, n) {
  let o = !0;
  for (let r = 0; r < t.length && ke(o); r++) {
    const a = t[r];
    Q(a) && (o = id(e, t[r], n));
  }
  return o;
}
function id(e, t, n) {
  let o;
  const r = t.split("-");
  do {
    const a = r.join("-");
    o = ud(e, a, n), r.splice(-1, 1);
  } while (r.length && o === !0);
  return o;
}
function ud(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (Ie(n) || fe(n)) && n[r] && (o = n[r]);
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
const cd = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function dd(e) {
  return cd.test(e);
}
function fd(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function pd(e) {
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
function md(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : dd(t) ? fd(t) : "*" + t;
}
function vd(e) {
  const t = [];
  let n = -1, o = 0, r = 0, a, s, i, u, c, f, p;
  const v = [];
  v[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
  }, v[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
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
      if (r = 0, s === void 0 || (s = md(s), s === !1))
        return !1;
      v[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function h() {
    const m = e[n + 1];
    if (o === 5 && m === "'" || o === 6 && m === '"')
      return n++, i = "\\" + m, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; o !== null; )
    if (n++, a = e[n], !(a === "\\" && h())) {
      if (u = pd(a), p = hn[o], c = p[u] || p.l || 8, c === 8 || (o = c[0], c[1] !== void 0 && (f = v[c[1]], f && (i = a, f() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const ts = /* @__PURE__ */ new Map();
function gd(e, t) {
  return pe(e) ? e[t] : null;
}
function hd(e, t) {
  if (!pe(e))
    return null;
  let n = ts.get(t);
  if (n || (n = vd(t), n && ts.set(t, n)), !n)
    return null;
  const o = n.length;
  let r = e, a = 0;
  for (; a < o; ) {
    const s = n[a];
    if (Kl.includes(s) && Ft(r))
      return null;
    const i = r[s];
    if (i === void 0 || Oe(r))
      return null;
    r = i, a++;
  }
  return r;
}
const yd = "11.2.2", nr = -1, Wo = "en-US", ns = "", os = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function bd() {
  return {
    upper: (e, t) => t === "text" && Q(e) ? e.toUpperCase() : t === "vnode" && pe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Q(e) ? e.toLowerCase() : t === "vnode" && pe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Q(e) ? os(e) : t === "vnode" && pe(e) && "__v_isVNode" in e ? os(e.children) : e
  };
}
let Yl;
function _d(e) {
  Yl = e;
}
let ql;
function wd(e) {
  ql = e;
}
let Xl;
function Ed(e) {
  Xl = e;
}
let Zl = null;
const rs = (e) => {
  Zl = e;
}, Cd = () => Zl;
let as = 0;
function Sd(e = {}) {
  const t = Oe(e.onWarn) ? e.onWarn : gc, n = Q(e.version) ? e.version : yd, o = Q(e.locale) || Oe(e.locale) ? e.locale : Wo, r = Oe(o) ? Wo : o, a = Ie(e.fallbackLocale) || fe(e.fallbackLocale) || Q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, s = fe(e.messages) ? e.messages : Er(r), i = fe(e.datetimeFormats) ? e.datetimeFormats : Er(r), u = fe(e.numberFormats) ? e.numberFormats : Er(r), c = ze(_e(), e.modifiers, bd()), f = e.pluralRules || _e(), p = Oe(e.missing) ? e.missing : null, v = ke(e.missingWarn) || zo(e.missingWarn) ? e.missingWarn : !0, h = ke(e.fallbackWarn) || zo(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, g = !!e.unresolving, E = Oe(e.postTranslation) ? e.postTranslation : null, d = fe(e.processor) ? e.processor : null, C = ke(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, S = Oe(e.messageCompiler) ? e.messageCompiler : Yl, y = Oe(e.messageResolver) ? e.messageResolver : ql || gd, A = Oe(e.localeFallbacker) ? e.localeFallbacker : Xl || ld, O = pe(e.fallbackContext) ? e.fallbackContext : void 0, z = e, W = pe(z.__datetimeFormatters) ? z.__datetimeFormatters : /* @__PURE__ */ new Map(), ee = pe(z.__numberFormatters) ? z.__numberFormatters : /* @__PURE__ */ new Map(), ne = pe(z.__meta) ? z.__meta : {};
  as++;
  const J = {
    version: n,
    cid: as,
    locale: o,
    fallbackLocale: a,
    messages: s,
    modifiers: c,
    pluralRules: f,
    missing: p,
    missingWarn: v,
    fallbackWarn: h,
    fallbackFormat: m,
    unresolving: g,
    postTranslation: E,
    processor: d,
    warnHtmlMessage: C,
    escapeParameter: L,
    messageCompiler: S,
    messageResolver: y,
    localeFallbacker: A,
    fallbackContext: O,
    onWarn: t,
    __meta: ne
  };
  return J.datetimeFormats = i, J.numberFormats = u, J.__datetimeFormatters = W, J.__numberFormatters = ee, J;
}
const Er = (e) => ({ [e]: _e() });
function oa(e, t, n, o, r) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, r);
    return Q(i) ? i : t;
  } else
    return t;
}
function Zn(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Td(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Od(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if (Td(e, t[o]))
      return !0;
  return !1;
}
function ss(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: r, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [u, c, f, p] = Nr(...t), v = ke(f.missingWarn) ? f.missingWarn : e.missingWarn;
  ke(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const h = !!f.part, m = na(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    m
  );
  if (!Q(u) || u === "")
    return new Intl.DateTimeFormat(m, p).format(c);
  let E = {}, d, C = null;
  const L = "datetime format";
  for (let A = 0; A < g.length && (d = g[A], E = n[d] || {}, C = E[u], !fe(C)); A++)
    oa(e, u, d, v, L);
  if (!fe(C) || !Q(d))
    return o ? nr : u;
  let S = `${d}__${u}`;
  er(p) || (S = `${S}__${JSON.stringify(p)}`);
  let y = i.get(S);
  return y || (y = new Intl.DateTimeFormat(d, ze({}, C, p)), i.set(S, y)), h ? y.formatToParts(c) : y.format(c);
}
const Jl = [
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
  const [t, n, o, r] = e, a = _e();
  let s = _e(), i;
  if (Q(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw qt(Yt.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw qt(Yt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (bc(t)) {
    if (isNaN(t.getTime()))
      throw qt(Yt.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (De(t))
    i = t;
  else
    throw qt(Yt.INVALID_ARGUMENT);
  return Q(n) ? a.key = n : fe(n) && Object.keys(n).forEach((u) => {
    Jl.includes(u) ? s[u] = n[u] : a[u] = n[u];
  }), Q(o) ? a.locale = o : fe(o) && (s = o), fe(r) && (s = r), [a.key || "", i, a, s];
}
function ls(e, t, n) {
  const o = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    o.__datetimeFormatters.has(a) && o.__datetimeFormatters.delete(a);
  }
}
function is(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: r, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [u, c, f, p] = Rr(...t), v = ke(f.missingWarn) ? f.missingWarn : e.missingWarn;
  ke(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const h = !!f.part, m = na(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    m
  );
  if (!Q(u) || u === "")
    return new Intl.NumberFormat(m, p).format(c);
  let E = {}, d, C = null;
  const L = "number format";
  for (let A = 0; A < g.length && (d = g[A], E = n[d] || {}, C = E[u], !fe(C)); A++)
    oa(e, u, d, v, L);
  if (!fe(C) || !Q(d))
    return o ? nr : u;
  let S = `${d}__${u}`;
  er(p) || (S = `${S}__${JSON.stringify(p)}`);
  let y = i.get(S);
  return y || (y = new Intl.NumberFormat(d, ze({}, C, p)), i.set(S, y)), h ? y.formatToParts(c) : y.format(c);
}
const Ql = [
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
  const [t, n, o, r] = e, a = _e();
  let s = _e();
  if (!De(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const i = t;
  return Q(n) ? a.key = n : fe(n) && Object.keys(n).forEach((u) => {
    Ql.includes(u) ? s[u] = n[u] : a[u] = n[u];
  }), Q(o) ? a.locale = o : fe(o) && (s = o), fe(r) && (s = r), [a.key || "", i, a, s];
}
function us(e, t, n) {
  const o = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    o.__numberFormatters.has(a) && o.__numberFormatters.delete(a);
  }
}
const Ad = (e) => e, Ld = (e) => "", kd = "text", Id = (e) => e.length === 0 ? "" : Qr(e), Pd = Sc;
function cs(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Nd(e) {
  const t = De(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (De(e.named.count) || De(e.named.n)) ? De(e.named.count) ? e.named.count : De(e.named.n) ? e.named.n : t : t;
}
function Rd(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function $d(e = {}) {
  const t = e.locale, n = Nd(e), o = pe(e.pluralRules) && Q(t) && Oe(e.pluralRules[t]) ? e.pluralRules[t] : cs, r = pe(e.pluralRules) && Q(t) && Oe(e.pluralRules[t]) ? cs : void 0, a = (d) => d[o(n, d.length, r)], s = e.list || [], i = (d) => s[d], u = e.named || _e();
  De(e.pluralIndex) && Rd(n, u);
  const c = (d) => u[d];
  function f(d, C) {
    const L = Oe(e.messages) ? e.messages(d, !!C) : pe(e.messages) ? e.messages[d] : !1;
    return L || (e.parent ? e.parent.message(d) : Ld);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : Ad, v = fe(e.processor) && Oe(e.processor.normalize) ? e.processor.normalize : Id, h = fe(e.processor) && Oe(e.processor.interpolate) ? e.processor.interpolate : Pd, m = fe(e.processor) && Q(e.processor.type) ? e.processor.type : kd, E = {
    list: i,
    named: c,
    plural: a,
    linked: (d, ...C) => {
      const [L, S] = C;
      let y = "text", A = "";
      C.length === 1 ? pe(L) ? (A = L.modifier || A, y = L.type || y) : Q(L) && (A = L || A) : C.length === 2 && (Q(L) && (A = L || A), Q(S) && (y = S || y));
      const O = f(d, !0)(E), z = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        y === "vnode" && Ie(O) && A ? O[0] : O
      );
      return A ? p(A)(z, y) : z;
    },
    message: f,
    type: m,
    interpolate: h,
    normalize: v,
    values: ze(_e(), s, u)
  };
  return E;
}
const ds = () => "", Zt = (e) => Oe(e);
function fs(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: r, messageCompiler: a, fallbackLocale: s, messages: i } = e, [u, c] = $r(...t), f = ke(c.missingWarn) ? c.missingWarn : e.missingWarn, p = ke(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, v = ke(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, h = !!c.resolvedMessage, m = Q(c.default) || ke(c.default) ? ke(c.default) ? a ? u : () => u : c.default : n ? a ? u : () => u : null, g = n || m != null && (Q(m) || Oe(m)), E = na(e, c);
  v && Md(c);
  let [d, C, L] = h ? [
    u,
    E,
    i[E] || _e()
  ] : ei(e, u, E, s, p, f), S = d, y = u;
  if (!h && !(Q(S) || Ft(S) || Zt(S)) && g && (S = m, y = S), !h && (!(Q(S) || Ft(S) || Zt(S)) || !Q(C)))
    return r ? nr : u;
  let A = !1;
  const O = () => {
    A = !0;
  }, z = Zt(S) ? S : ti(e, u, C, S, y, O);
  if (A)
    return S;
  const W = Vd(e, C, L, c), ee = $d(W), ne = Fd(e, z, ee);
  let J = o ? o(ne, u) : ne;
  return v && Q(J) && (J = wc(J)), J;
}
function Md(e) {
  Ie(e.list) ? e.list = e.list.map((t) => Q(t) ? Ga(t) : t) : pe(e.named) && Object.keys(e.named).forEach((t) => {
    Q(e.named[t]) && (e.named[t] = Ga(e.named[t]));
  });
}
function ei(e, t, n, o, r, a) {
  const { messages: s, onWarn: i, messageResolver: u, localeFallbacker: c } = e, f = c(e, o, n);
  let p = _e(), v, h = null;
  const m = "translate";
  for (let g = 0; g < f.length && (v = f[g], p = s[v] || _e(), (h = u(p, t)) === null && (h = p[t]), !(Q(h) || Ft(h) || Zt(h))); g++)
    if (!Od(v, f)) {
      const E = oa(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        v,
        a,
        m
      );
      E !== t && (h = E);
    }
  return [h, v, p];
}
function ti(e, t, n, o, r, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (Zt(o)) {
    const c = o;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (s == null) {
    const c = () => o;
    return c.locale = n, c.key = t, c;
  }
  const u = s(o, Dd(e, n, r, o, i, a));
  return u.locale = n, u.key = t, u.source = o, u;
}
function Fd(e, t, n) {
  return t(n);
}
function $r(...e) {
  const [t, n, o] = e, r = _e();
  if (!Q(t) && !De(t) && !Zt(t) && !Ft(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const a = De(t) ? String(t) : (Zt(t), t);
  return De(n) ? r.plural = n : Q(n) ? r.default = n : fe(n) && !er(n) ? r.named = n : Ie(n) && (r.list = n), De(o) ? r.plural = o : Q(o) ? r.default = o : fe(o) && ze(r, o), [a, r];
}
function Dd(e, t, n, o, r, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => hc(t, n, s)
  };
}
function Vd(e, t, n, o) {
  const { modifiers: r, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: u, missingWarn: c, fallbackContext: f } = e, v = {
    locale: t,
    modifiers: r,
    pluralRules: a,
    messages: (h, m) => {
      let g = s(n, h);
      if (g == null && (f || m)) {
        const [, , E] = ei(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          h,
          t,
          i,
          u,
          c
        );
        g = s(E, h);
      }
      if (Q(g) || Ft(g)) {
        let E = !1;
        const C = ti(e, h, t, g, h, () => {
          E = !0;
        });
        return E ? ds : C;
      } else return Zt(g) ? g : ds;
    }
  };
  return e.processor && (v.processor = e.processor), o.list && (v.list = o.list), o.named && (v.named = o.named), De(o.plural) && (v.pluralIndex = o.plural), v;
}
qc();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const xd = "11.2.2";
function Bd() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Fo().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Fo().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Fo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const xn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: sd,
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
const Mr = /* @__PURE__ */ An("__translateVNode"), Fr = /* @__PURE__ */ An("__datetimeParts"), Dr = /* @__PURE__ */ An("__numberParts"), jd = An("__setPluralRules"), ni = /* @__PURE__ */ An("__injectWithOption"), Vr = /* @__PURE__ */ An("__dispose");
function co(e) {
  if (!pe(e) || Ft(e))
    return e;
  for (const t in e)
    if (Et(e, t))
      if (!t.includes("."))
        pe(e[t]) && co(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let r = e, a = !1;
        for (let s = 0; s < o; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in r || (r[n[s]] = _e()), !pe(r[n[s]])) {
            a = !0;
            break;
          }
          r = r[n[s]];
        }
        if (a || (Ft(r) ? Kl.includes(n[o]) || delete e[t] : (r[n[o]] = e[t], delete e[t])), !Ft(r)) {
          const s = r[n[o]];
          pe(s) && co(s);
        }
      }
  return e;
}
function oi(e, t) {
  const { messages: n, __i18n: o, messageResolver: r, flatJson: a } = t, s = fe(n) ? n : Ie(o) ? _e() : { [e]: _e() };
  if (Ie(o) && o.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: u, resource: c } = i;
      u ? (s[u] = s[u] || _e(), Do(c, s[u])) : Do(c, s);
    } else
      Q(i) && Do(JSON.parse(i), s);
  }), r == null && a)
    for (const i in s)
      Et(s, i) && co(s[i]);
  return s;
}
function zd(e) {
  return e.type;
}
function Wd(e, t, n) {
  let o = pe(t.messages) ? t.messages : _e();
  "__i18nGlobal" in n && (o = oi(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(o);
  r.length && r.forEach((a) => {
    e.mergeLocaleMessage(a, o[a]);
  });
  {
    if (pe(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (pe(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function ps(e) {
  return V(Rl, null, e, 0);
}
function ri() {
  return "currentInstance" in yr ? yr["currentInstance"] : yr.getCurrentInstance();
}
const ms = () => [], Ud = () => !1;
let vs = 0;
function gs(e) {
  return (t, n, o, r) => e(n, o, ri() || void 0, r);
}
function Hd(e = {}) {
  const { __root: t, __injectWithOption: n } = e, o = t === void 0, r = e.flatJson, a = Ha ? x : fn;
  let s = ke(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : Q(e.locale) ? e.locale : Wo
  ), u = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : Q(e.fallbackLocale) || Ie(e.fallbackLocale) || fe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), c = a(oi(i.value, e)), f = a(fe(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(fe(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let v = t ? t.missingWarn : ke(e.missingWarn) || zo(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : ke(e.fallbackWarn) || zo(e.fallbackWarn) ? e.fallbackWarn : !0, m = t ? t.fallbackRoot : ke(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, E = Oe(e.missing) ? e.missing : null, d = Oe(e.missing) ? gs(e.missing) : null, C = Oe(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : ke(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter;
  const y = t ? t.modifiers : fe(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    o && rs(null);
    const _ = {
      version: xd,
      locale: i.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: y,
      pluralRules: A,
      missing: d === null ? void 0 : d,
      missingWarn: v,
      fallbackWarn: h,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: L,
      escapeParameter: S,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    _.datetimeFormats = f.value, _.numberFormats = p.value, _.__datetimeFormatters = fe(O) ? O.__datetimeFormatters : void 0, _.__numberFormatters = fe(O) ? O.__numberFormatters : void 0;
    const M = Sd(_);
    return o && rs(M), M;
  })(), Zn(O, i.value, u.value);
  function W() {
    return [
      i.value,
      u.value,
      c.value,
      f.value,
      p.value
    ];
  }
  const ee = k({
    get: () => i.value,
    set: (_) => {
      O.locale = _, i.value = _;
    }
  }), ne = k({
    get: () => u.value,
    set: (_) => {
      O.fallbackLocale = _, u.value = _, Zn(O, i.value, _);
    }
  }), J = k(() => c.value), le = /* @__PURE__ */ k(() => f.value), ye = /* @__PURE__ */ k(() => p.value);
  function N() {
    return Oe(C) ? C : null;
  }
  function $(_) {
    C = _, O.postTranslation = _;
  }
  function I() {
    return E;
  }
  function H(_) {
    _ !== null && (d = gs(_)), E = _, O.missing = d;
  }
  const j = (_, M, ue, me, Ke, bn) => {
    W();
    let vt;
    try {
      o || (O.fallbackContext = t ? Cd() : void 0), vt = _(O);
    } finally {
      o || (O.fallbackContext = void 0);
    }
    if (ue !== "translate exists" && // for not `te` (e.g `t`)
    De(vt) && vt === nr || ue === "translate exists" && !vt) {
      const [hr, Va] = M();
      return t && m ? me(t) : Ke(hr);
    } else {
      if (bn(vt))
        return vt;
      throw uo(xn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ie(..._) {
    return j((M) => Reflect.apply(fs, null, [M, ..._]), () => $r(..._), "translate", (M) => Reflect.apply(M.t, M, [..._]), (M) => M, (M) => Q(M));
  }
  function Y(..._) {
    const [M, ue, me] = _;
    if (me && !pe(me))
      throw uo(xn.INVALID_ARGUMENT);
    return ie(M, ue, ze({ resolvedMessage: !0 }, me || {}));
  }
  function Me(..._) {
    return j((M) => Reflect.apply(ss, null, [M, ..._]), () => Nr(..._), "datetime format", (M) => Reflect.apply(M.d, M, [..._]), () => ns, (M) => Q(M) || Ie(M));
  }
  function we(..._) {
    return j((M) => Reflect.apply(is, null, [M, ..._]), () => Rr(..._), "number format", (M) => Reflect.apply(M.n, M, [..._]), () => ns, (M) => Q(M) || Ie(M));
  }
  function We(_) {
    return _.map((M) => Q(M) || De(M) || ke(M) ? ps(String(M)) : M);
  }
  const Ue = {
    normalize: We,
    interpolate: (_) => _,
    type: "vnode"
  };
  function He(..._) {
    return j((M) => {
      let ue;
      const me = M;
      try {
        me.processor = Ue, ue = Reflect.apply(fs, null, [me, ..._]);
      } finally {
        me.processor = null;
      }
      return ue;
    }, () => $r(..._), "translate", (M) => M[Mr](..._), (M) => [ps(M)], (M) => Ie(M));
  }
  function be(..._) {
    return j((M) => Reflect.apply(is, null, [M, ..._]), () => Rr(..._), "number format", (M) => M[Dr](..._), ms, (M) => Q(M) || Ie(M));
  }
  function rt(..._) {
    return j((M) => Reflect.apply(ss, null, [M, ..._]), () => Nr(..._), "datetime format", (M) => M[Fr](..._), ms, (M) => Q(M) || Ie(M));
  }
  function pt(_) {
    A = _, O.pluralRules = A;
  }
  function at(_, M) {
    return j(() => {
      if (!_)
        return !1;
      const ue = Q(M) ? M : i.value, me = lt(ue), Ke = O.messageResolver(me, _);
      return Ft(Ke) || Zt(Ke) || Q(Ke);
    }, () => [_], "translate exists", (ue) => Reflect.apply(ue.te, ue, [_, M]), Ud, (ue) => ke(ue));
  }
  function _t(_) {
    let M = null;
    const ue = Gl(O, u.value, i.value);
    for (let me = 0; me < ue.length; me++) {
      const Ke = c.value[ue[me]] || {}, bn = O.messageResolver(Ke, _);
      if (bn != null) {
        M = bn;
        break;
      }
    }
    return M;
  }
  function st(_) {
    const M = _t(_);
    return M ?? (t ? t.tm(_) || {} : {});
  }
  function lt(_) {
    return c.value[_] || {};
  }
  function it(_, M) {
    if (r) {
      const ue = { [_]: M };
      for (const me in ue)
        Et(ue, me) && co(ue[me]);
      M = ue[_];
    }
    c.value[_] = M, O.messages = c.value;
  }
  function mt(_, M) {
    c.value[_] = c.value[_] || {};
    const ue = { [_]: M };
    if (r)
      for (const me in ue)
        Et(ue, me) && co(ue[me]);
    M = ue[_], Do(M, c.value[_]), O.messages = c.value;
  }
  function Lt(_) {
    return f.value[_] || {};
  }
  function w(_, M) {
    f.value[_] = M, O.datetimeFormats = f.value, ls(O, _, M);
  }
  function T(_, M) {
    f.value[_] = ze(f.value[_] || {}, M), O.datetimeFormats = f.value, ls(O, _, M);
  }
  function F(_) {
    return p.value[_] || {};
  }
  function G(_, M) {
    p.value[_] = M, O.numberFormats = p.value, us(O, _, M);
  }
  function de(_, M) {
    p.value[_] = ze(p.value[_] || {}, M), O.numberFormats = p.value, us(O, _, M);
  }
  vs++, t && Ha && (se(t.locale, (_) => {
    s && (i.value = _, O.locale = _, Zn(O, i.value, u.value));
  }), se(t.fallbackLocale, (_) => {
    s && (u.value = _, O.fallbackLocale = _, Zn(O, i.value, u.value));
  }));
  const oe = {
    id: vs,
    locale: ee,
    fallbackLocale: ne,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(_) {
      s = _, _ && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, Zn(O, i.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: J,
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
      return m;
    },
    set fallbackRoot(_) {
      m = _;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(_) {
      g = _, O.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(_) {
      L = _, O.warnHtmlMessage = _;
    },
    get escapeParameter() {
      return S;
    },
    set escapeParameter(_) {
      S = _, O.escapeParameter = _;
    },
    t: ie,
    getLocaleMessage: lt,
    setLocaleMessage: it,
    mergeLocaleMessage: mt,
    getPostTranslationHandler: N,
    setPostTranslationHandler: $,
    getMissingHandler: I,
    setMissingHandler: H,
    [jd]: pt
  };
  return oe.datetimeFormats = le, oe.numberFormats = ye, oe.rt = Y, oe.te = at, oe.tm = st, oe.d = Me, oe.n = we, oe.getDateTimeFormat = Lt, oe.setDateTimeFormat = w, oe.mergeDateTimeFormat = T, oe.getNumberFormat = F, oe.setNumberFormat = G, oe.mergeNumberFormat = de, oe[ni] = n, oe[Mr] = He, oe[Fr] = rt, oe[Dr] = be, oe;
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
function Kd({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, r) => [
    ...o,
    // prettier-ignore
    ...r.type === qe ? r.children : [r]
  ], []) : t.reduce((n, o) => {
    const r = e[o];
    return r && (n[o] = r()), n;
  }, _e());
}
function ai() {
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
function Gd(e) {
  return Ie(e) && !Q(e[0]);
}
function si(e, t, n, o) {
  const { slots: r, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = _e();
    e.locale && (s.locale = e.locale), Q(e.format) ? s.key = e.format : pe(e.format) && (Q(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((v, h) => n.includes(h) ? ze(_e(), v, { [h]: e.format[h] }) : v, _e()));
    const u = o(e.value, s, i);
    let c = [s.key];
    Ie(u) ? c = u.map((v, h) => {
      const m = r[v.type], g = m ? m({ [v.type]: v.value, index: h, parts: u }) : [v.value];
      return Gd(g) && (g[0].key = `${v.type}-${h}`), g;
    }) : Q(u) && (c = [u]);
    const f = ze(_e(), a), p = Q(e.tag) || pe(e.tag) ? e.tag : ai();
    return Nl(p, f, c);
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
const Yd = /* @__PURE__ */ An("global-vue-i18n");
function ho(e = {}) {
  const t = ri();
  if (t == null)
    throw uo(xn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw uo(xn.NOT_INSTALLED);
  const n = qd(t), o = Zd(n), r = zd(t), a = Xd(e, r);
  if (a === "global")
    return Wd(o, e, r), o;
  if (a === "parent") {
    let u = Jd(n, t, e.__useComponent);
    return u == null && (u = o), u;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const u = ze({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), o && (u.__root = o), i = Hd(u), s.__composerExtend && (i[Vr] = s.__composerExtend(i)), ef(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function qd(e) {
  const t = he(e.isCE ? Yd : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw uo(e.isCE ? xn.NOT_INSTALLED_WITH_PROVIDE : xn.UNEXPECTED_ERROR);
  return t;
}
function Xd(e, t) {
  return er(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Zd(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Jd(e, t, n = !1) {
  let o = null;
  const r = t.root;
  let a = Qd(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      o = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (o = i.__composer, n && o && !o[ni] && (o = null));
    }
    if (o != null || r === a)
      break;
    a = a.parent;
  }
  return o;
}
function Qd(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ef(e, t, n) {
  Pe(() => {
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
Bd();
_d(ad);
wd(hd);
Ed(Gl);
const tf = ["disabled"], nf = {
  key: 0,
  class: "custom-button__loading"
}, of = /* @__PURE__ */ Z({
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
      class: B([
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
      e.loading ? (P(), U("div", nf, o[1] || (o[1] = [
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
      ]))) : q("v-if", !0),
      ae(n.$slots, "default", {}, void 0, !0)
    ], 10, tf));
  }
}), aa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ct = /* @__PURE__ */ aa(of, [["__scopeId", "data-v-9497085f"]]), li = Symbol(), Vo = "el", rf = "is-", wn = (e, t, n, o, r) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), r && (a += `--${r}`), a;
}, ii = Symbol("namespaceContextKey"), sa = (e) => {
  const t = e || (Qe() ? he(ii, x(Vo)) : x(Vo));
  return k(() => l(t) || Vo);
}, $e = (e, t) => {
  const n = sa(t);
  return {
    namespace: n,
    b: (g = "") => wn(n.value, e, g, "", ""),
    e: (g) => g ? wn(n.value, e, "", g, "") : "",
    m: (g) => g ? wn(n.value, e, "", "", g) : "",
    be: (g, E) => g && E ? wn(n.value, e, g, E, "") : "",
    em: (g, E) => g && E ? wn(n.value, e, "", g, E) : "",
    bm: (g, E) => g && E ? wn(n.value, e, g, "", E) : "",
    bem: (g, E, d) => g && E && d ? wn(n.value, e, g, E, d) : "",
    is: (g, ...E) => {
      const d = E.length >= 1 ? E[0] : !0;
      return g && d ? `${rf}${g}` : "";
    },
    cssVar: (g) => {
      const E = {};
      for (const d in g)
        g[d] && (E[`--${n.value}-${d}`] = g[d]);
      return E;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const E = {};
      for (const d in g)
        g[d] && (E[`--${n.value}-${e}-${d}`] = g[d]);
      return E;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const fo = () => {
}, af = Object.prototype.hasOwnProperty, hs = (e, t) => af.call(e, t), Rt = Array.isArray, Ae = (e) => typeof e == "function", Xe = (e) => typeof e == "string", dt = (e) => e !== null && typeof e == "object", ys = (e) => (dt(e) || Ae(e)) && Ae(e.then) && Ae(e.catch), sf = Object.prototype.toString, lf = (e) => sf.call(e), uf = (e) => lf(e) === "[object Object]";
var ui = typeof global == "object" && global && global.Object === Object && global, cf = typeof self == "object" && self && self.Object === Object && self, Wt = ui || cf || Function("return this")(), Bt = Wt.Symbol, ci = Object.prototype, df = ci.hasOwnProperty, ff = ci.toString, Jn = Bt ? Bt.toStringTag : void 0;
function pf(e) {
  var t = df.call(e, Jn), n = e[Jn];
  try {
    e[Jn] = void 0;
    var o = !0;
  } catch {
  }
  var r = ff.call(e);
  return o && (t ? e[Jn] = n : delete e[Jn]), r;
}
var mf = Object.prototype, vf = mf.toString;
function gf(e) {
  return vf.call(e);
}
var hf = "[object Null]", yf = "[object Undefined]", bs = Bt ? Bt.toStringTag : void 0;
function qn(e) {
  return e == null ? e === void 0 ? yf : hf : bs && bs in Object(e) ? pf(e) : gf(e);
}
function Bn(e) {
  return e != null && typeof e == "object";
}
var bf = "[object Symbol]";
function or(e) {
  return typeof e == "symbol" || Bn(e) && qn(e) == bf;
}
function _f(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Ot = Array.isArray, _s = Bt ? Bt.prototype : void 0, ws = _s ? _s.toString : void 0;
function di(e) {
  if (typeof e == "string")
    return e;
  if (Ot(e))
    return _f(e, di) + "";
  if (or(e))
    return ws ? ws.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var wf = /\s/;
function Ef(e) {
  for (var t = e.length; t-- && wf.test(e.charAt(t)); )
    ;
  return t;
}
var Cf = /^\s+/;
function Sf(e) {
  return e && e.slice(0, Ef(e) + 1).replace(Cf, "");
}
function mn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Es = NaN, Tf = /^[-+]0x[0-9a-f]+$/i, Of = /^0b[01]+$/i, Af = /^0o[0-7]+$/i, Lf = parseInt;
function Cs(e) {
  if (typeof e == "number")
    return e;
  if (or(e))
    return Es;
  if (mn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = mn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Sf(e);
  var n = Of.test(e);
  return n || Af.test(e) ? Lf(e.slice(2), n ? 2 : 8) : Tf.test(e) ? Es : +e;
}
function fi(e) {
  return e;
}
var kf = "[object AsyncFunction]", If = "[object Function]", Pf = "[object GeneratorFunction]", Nf = "[object Proxy]";
function pi(e) {
  if (!mn(e))
    return !1;
  var t = qn(e);
  return t == If || t == Pf || t == kf || t == Nf;
}
var Cr = Wt["__core-js_shared__"], Ss = function() {
  var e = /[^.]+$/.exec(Cr && Cr.keys && Cr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rf(e) {
  return !!Ss && Ss in e;
}
var $f = Function.prototype, Mf = $f.toString;
function Ln(e) {
  if (e != null) {
    try {
      return Mf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ff = /[\\^$.*+?()[\]{}|]/g, Df = /^\[object .+?Constructor\]$/, Vf = Function.prototype, xf = Object.prototype, Bf = Vf.toString, jf = xf.hasOwnProperty, zf = RegExp(
  "^" + Bf.call(jf).replace(Ff, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wf(e) {
  if (!mn(e) || Rf(e))
    return !1;
  var t = pi(e) ? zf : Df;
  return t.test(Ln(e));
}
function Uf(e, t) {
  return e?.[t];
}
function kn(e, t) {
  var n = Uf(e, t);
  return Wf(n) ? n : void 0;
}
var xr = kn(Wt, "WeakMap");
function Hf(e, t, n) {
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
var Kf = 800, Gf = 16, Yf = Date.now;
function qf(e) {
  var t = 0, n = 0;
  return function() {
    var o = Yf(), r = Gf - (o - n);
    if (n = o, r > 0) {
      if (++t >= Kf)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Xf(e) {
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
}(), Zf = Uo ? function(e, t) {
  return Uo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Xf(t),
    writable: !0
  });
} : fi, Jf = qf(Zf);
function Qf(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var ep = 9007199254740991, tp = /^(?:0|[1-9]\d*)$/;
function la(e, t) {
  var n = typeof e;
  return t = t ?? ep, !!t && (n == "number" || n != "symbol" && tp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function np(e, t, n) {
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
var op = Object.prototype, rp = op.hasOwnProperty;
function ap(e, t, n) {
  var o = e[t];
  (!(rp.call(e, t) && ia(o, n)) || n === void 0 && !(t in e)) && np(e, t, n);
}
var Ts = Math.max;
function sp(e, t, n) {
  return t = Ts(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = Ts(o.length - t, 0), s = Array(a); ++r < a; )
      s[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(s), Hf(e, this, i);
  };
}
var lp = 9007199254740991;
function ua(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lp;
}
function ip(e) {
  return e != null && ua(e.length) && !pi(e);
}
var up = Object.prototype;
function cp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || up;
  return e === n;
}
function dp(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var fp = "[object Arguments]";
function Os(e) {
  return Bn(e) && qn(e) == fp;
}
var mi = Object.prototype, pp = mi.hasOwnProperty, mp = mi.propertyIsEnumerable, ca = Os(/* @__PURE__ */ function() {
  return arguments;
}()) ? Os : function(e) {
  return Bn(e) && pp.call(e, "callee") && !mp.call(e, "callee");
};
function vp() {
  return !1;
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, As = vi && typeof module == "object" && module && !module.nodeType && module, gp = As && As.exports === vi, Ls = gp ? Wt.Buffer : void 0, hp = Ls ? Ls.isBuffer : void 0, Br = hp || vp, yp = "[object Arguments]", bp = "[object Array]", _p = "[object Boolean]", wp = "[object Date]", Ep = "[object Error]", Cp = "[object Function]", Sp = "[object Map]", Tp = "[object Number]", Op = "[object Object]", Ap = "[object RegExp]", Lp = "[object Set]", kp = "[object String]", Ip = "[object WeakMap]", Pp = "[object ArrayBuffer]", Np = "[object DataView]", Rp = "[object Float32Array]", $p = "[object Float64Array]", Mp = "[object Int8Array]", Fp = "[object Int16Array]", Dp = "[object Int32Array]", Vp = "[object Uint8Array]", xp = "[object Uint8ClampedArray]", Bp = "[object Uint16Array]", jp = "[object Uint32Array]", Ee = {};
Ee[Rp] = Ee[$p] = Ee[Mp] = Ee[Fp] = Ee[Dp] = Ee[Vp] = Ee[xp] = Ee[Bp] = Ee[jp] = !0;
Ee[yp] = Ee[bp] = Ee[Pp] = Ee[_p] = Ee[Np] = Ee[wp] = Ee[Ep] = Ee[Cp] = Ee[Sp] = Ee[Tp] = Ee[Op] = Ee[Ap] = Ee[Lp] = Ee[kp] = Ee[Ip] = !1;
function zp(e) {
  return Bn(e) && ua(e.length) && !!Ee[qn(e)];
}
function Wp(e) {
  return function(t) {
    return e(t);
  };
}
var gi = typeof exports == "object" && exports && !exports.nodeType && exports, to = gi && typeof module == "object" && module && !module.nodeType && module, Up = to && to.exports === gi, Sr = Up && ui.process, ks = function() {
  try {
    var e = to && to.require && to.require("util").types;
    return e || Sr && Sr.binding && Sr.binding("util");
  } catch {
  }
}(), Is = ks && ks.isTypedArray, hi = Is ? Wp(Is) : zp, Hp = Object.prototype, Kp = Hp.hasOwnProperty;
function Gp(e, t) {
  var n = Ot(e), o = !n && ca(e), r = !n && !o && Br(e), a = !n && !o && !r && hi(e), s = n || o || r || a, i = s ? dp(e.length, String) : [], u = i.length;
  for (var c in e)
    Kp.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    la(c, u))) && i.push(c);
  return i;
}
function Yp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var qp = Yp(Object.keys, Object), Xp = Object.prototype, Zp = Xp.hasOwnProperty;
function Jp(e) {
  if (!cp(e))
    return qp(e);
  var t = [];
  for (var n in Object(e))
    Zp.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function yi(e) {
  return ip(e) ? Gp(e) : Jp(e);
}
var Qp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, em = /^\w*$/;
function da(e, t) {
  if (Ot(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || or(e) ? !0 : em.test(e) || !Qp.test(e) || t != null && e in Object(t);
}
var po = kn(Object, "create");
function tm() {
  this.__data__ = po ? po(null) : {}, this.size = 0;
}
function nm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var om = "__lodash_hash_undefined__", rm = Object.prototype, am = rm.hasOwnProperty;
function sm(e) {
  var t = this.__data__;
  if (po) {
    var n = t[e];
    return n === om ? void 0 : n;
  }
  return am.call(t, e) ? t[e] : void 0;
}
var lm = Object.prototype, im = lm.hasOwnProperty;
function um(e) {
  var t = this.__data__;
  return po ? t[e] !== void 0 : im.call(t, e);
}
var cm = "__lodash_hash_undefined__";
function dm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = po && t === void 0 ? cm : t, this;
}
function Tn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Tn.prototype.clear = tm;
Tn.prototype.delete = nm;
Tn.prototype.get = sm;
Tn.prototype.has = um;
Tn.prototype.set = dm;
function fm() {
  this.__data__ = [], this.size = 0;
}
function rr(e, t) {
  for (var n = e.length; n--; )
    if (ia(e[n][0], t))
      return n;
  return -1;
}
var pm = Array.prototype, mm = pm.splice;
function vm(e) {
  var t = this.__data__, n = rr(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : mm.call(t, n, 1), --this.size, !0;
}
function gm(e) {
  var t = this.__data__, n = rr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function hm(e) {
  return rr(this.__data__, e) > -1;
}
function ym(e, t) {
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
rn.prototype.clear = fm;
rn.prototype.delete = vm;
rn.prototype.get = gm;
rn.prototype.has = hm;
rn.prototype.set = ym;
var mo = kn(Wt, "Map");
function bm() {
  this.size = 0, this.__data__ = {
    hash: new Tn(),
    map: new (mo || rn)(),
    string: new Tn()
  };
}
function _m(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ar(e, t) {
  var n = e.__data__;
  return _m(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function wm(e) {
  var t = ar(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Em(e) {
  return ar(this, e).get(e);
}
function Cm(e) {
  return ar(this, e).has(e);
}
function Sm(e, t) {
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
an.prototype.clear = bm;
an.prototype.delete = wm;
an.prototype.get = Em;
an.prototype.has = Cm;
an.prototype.set = Sm;
var Tm = "Expected a function";
function fa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Tm);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var s = e.apply(this, o);
    return n.cache = a.set(r, s) || a, s;
  };
  return n.cache = new (fa.Cache || an)(), n;
}
fa.Cache = an;
var Om = 500;
function Am(e) {
  var t = fa(e, function(o) {
    return n.size === Om && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Lm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, km = /\\(\\)?/g, Im = Am(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Lm, function(n, o, r, a) {
    t.push(r ? a.replace(km, "$1") : o || n);
  }), t;
});
function Pm(e) {
  return e == null ? "" : di(e);
}
function sr(e, t) {
  return Ot(e) ? e : da(e, t) ? [e] : Im(Pm(e));
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
function bi(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Ps = Bt ? Bt.isConcatSpreadable : void 0;
function Nm(e) {
  return Ot(e) || ca(e) || !!(Ps && e && e[Ps]);
}
function Rm(e, t, n, o, r) {
  var a = -1, s = e.length;
  for (n || (n = Nm), r || (r = []); ++a < s; ) {
    var i = e[a];
    n(i) ? bi(r, i) : r[r.length] = i;
  }
  return r;
}
function $m(e) {
  var t = e == null ? 0 : e.length;
  return t ? Rm(e) : [];
}
function Mm(e) {
  return Jf(sp(e, void 0, $m), e + "");
}
function cn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Ot(e) ? e : [e];
}
function Fm() {
  this.__data__ = new rn(), this.size = 0;
}
function Dm(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Vm(e) {
  return this.__data__.get(e);
}
function xm(e) {
  return this.__data__.has(e);
}
var Bm = 200;
function jm(e, t) {
  var n = this.__data__;
  if (n instanceof rn) {
    var o = n.__data__;
    if (!mo || o.length < Bm - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new an(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Jt(e) {
  var t = this.__data__ = new rn(e);
  this.size = t.size;
}
Jt.prototype.clear = Fm;
Jt.prototype.delete = Dm;
Jt.prototype.get = Vm;
Jt.prototype.has = xm;
Jt.prototype.set = jm;
function zm(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, a = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (a[r++] = s);
  }
  return a;
}
function Wm() {
  return [];
}
var Um = Object.prototype, Hm = Um.propertyIsEnumerable, Ns = Object.getOwnPropertySymbols, Km = Ns ? function(e) {
  return e == null ? [] : (e = Object(e), zm(Ns(e), function(t) {
    return Hm.call(e, t);
  }));
} : Wm;
function Gm(e, t, n) {
  var o = t(e);
  return Ot(e) ? o : bi(o, n(e));
}
function Rs(e) {
  return Gm(e, yi, Km);
}
var jr = kn(Wt, "DataView"), zr = kn(Wt, "Promise"), Wr = kn(Wt, "Set"), $s = "[object Map]", Ym = "[object Object]", Ms = "[object Promise]", Fs = "[object Set]", Ds = "[object WeakMap]", Vs = "[object DataView]", qm = Ln(jr), Xm = Ln(mo), Zm = Ln(zr), Jm = Ln(Wr), Qm = Ln(xr), un = qn;
(jr && un(new jr(new ArrayBuffer(1))) != Vs || mo && un(new mo()) != $s || zr && un(zr.resolve()) != Ms || Wr && un(new Wr()) != Fs || xr && un(new xr()) != Ds) && (un = function(e) {
  var t = qn(e), n = t == Ym ? e.constructor : void 0, o = n ? Ln(n) : "";
  if (o)
    switch (o) {
      case qm:
        return Vs;
      case Xm:
        return $s;
      case Zm:
        return Ms;
      case Jm:
        return Fs;
      case Qm:
        return Ds;
    }
  return t;
});
var xs = Wt.Uint8Array, ev = "__lodash_hash_undefined__";
function tv(e) {
  return this.__data__.set(e, ev), this;
}
function nv(e) {
  return this.__data__.has(e);
}
function Ho(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new an(); ++t < n; )
    this.add(e[t]);
}
Ho.prototype.add = Ho.prototype.push = tv;
Ho.prototype.has = nv;
function ov(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function rv(e, t) {
  return e.has(t);
}
var av = 1, sv = 2;
function _i(e, t, n, o, r, a) {
  var s = n & av, i = e.length, u = t.length;
  if (i != u && !(s && u > i))
    return !1;
  var c = a.get(e), f = a.get(t);
  if (c && f)
    return c == t && f == e;
  var p = -1, v = !0, h = n & sv ? new Ho() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var m = e[p], g = t[p];
    if (o)
      var E = s ? o(g, m, p, t, e, a) : o(m, g, p, e, t, a);
    if (E !== void 0) {
      if (E)
        continue;
      v = !1;
      break;
    }
    if (h) {
      if (!ov(t, function(d, C) {
        if (!rv(h, C) && (m === d || r(m, d, n, o, a)))
          return h.push(C);
      })) {
        v = !1;
        break;
      }
    } else if (!(m === g || r(m, g, n, o, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
function lv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function iv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var uv = 1, cv = 2, dv = "[object Boolean]", fv = "[object Date]", pv = "[object Error]", mv = "[object Map]", vv = "[object Number]", gv = "[object RegExp]", hv = "[object Set]", yv = "[object String]", bv = "[object Symbol]", _v = "[object ArrayBuffer]", wv = "[object DataView]", Bs = Bt ? Bt.prototype : void 0, Tr = Bs ? Bs.valueOf : void 0;
function Ev(e, t, n, o, r, a, s) {
  switch (n) {
    case wv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case _v:
      return !(e.byteLength != t.byteLength || !a(new xs(e), new xs(t)));
    case dv:
    case fv:
    case vv:
      return ia(+e, +t);
    case pv:
      return e.name == t.name && e.message == t.message;
    case gv:
    case yv:
      return e == t + "";
    case mv:
      var i = lv;
    case hv:
      var u = o & uv;
      if (i || (i = iv), e.size != t.size && !u)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      o |= cv, s.set(e, t);
      var f = _i(i(e), i(t), o, r, a, s);
      return s.delete(e), f;
    case bv:
      if (Tr)
        return Tr.call(e) == Tr.call(t);
  }
  return !1;
}
var Cv = 1, Sv = Object.prototype, Tv = Sv.hasOwnProperty;
function Ov(e, t, n, o, r, a) {
  var s = n & Cv, i = Rs(e), u = i.length, c = Rs(t), f = c.length;
  if (u != f && !s)
    return !1;
  for (var p = u; p--; ) {
    var v = i[p];
    if (!(s ? v in t : Tv.call(t, v)))
      return !1;
  }
  var h = a.get(e), m = a.get(t);
  if (h && m)
    return h == t && m == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var E = s; ++p < u; ) {
    v = i[p];
    var d = e[v], C = t[v];
    if (o)
      var L = s ? o(C, d, v, t, e, a) : o(d, C, v, e, t, a);
    if (!(L === void 0 ? d === C || r(d, C, n, o, a) : L)) {
      g = !1;
      break;
    }
    E || (E = v == "constructor");
  }
  if (g && !E) {
    var S = e.constructor, y = t.constructor;
    S != y && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof y == "function" && y instanceof y) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var Av = 1, js = "[object Arguments]", zs = "[object Array]", Io = "[object Object]", Lv = Object.prototype, Ws = Lv.hasOwnProperty;
function kv(e, t, n, o, r, a) {
  var s = Ot(e), i = Ot(t), u = s ? zs : un(e), c = i ? zs : un(t);
  u = u == js ? Io : u, c = c == js ? Io : c;
  var f = u == Io, p = c == Io, v = u == c;
  if (v && Br(e)) {
    if (!Br(t))
      return !1;
    s = !0, f = !1;
  }
  if (v && !f)
    return a || (a = new Jt()), s || hi(e) ? _i(e, t, n, o, r, a) : Ev(e, t, u, n, o, r, a);
  if (!(n & Av)) {
    var h = f && Ws.call(e, "__wrapped__"), m = p && Ws.call(t, "__wrapped__");
    if (h || m) {
      var g = h ? e.value() : e, E = m ? t.value() : t;
      return a || (a = new Jt()), r(g, E, n, o, a);
    }
  }
  return v ? (a || (a = new Jt()), Ov(e, t, n, o, r, a)) : !1;
}
function lr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Bn(e) && !Bn(t) ? e !== e && t !== t : kv(e, t, n, o, lr, r);
}
var Iv = 1, Pv = 2;
function Nv(e, t, n, o) {
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
    var i = s[0], u = e[i], c = s[1];
    if (s[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var f = new Jt(), p;
      if (!(p === void 0 ? lr(c, u, Iv | Pv, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function wi(e) {
  return e === e && !mn(e);
}
function Rv(e) {
  for (var t = yi(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, wi(r)];
  }
  return t;
}
function Ei(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function $v(e) {
  var t = Rv(e);
  return t.length == 1 && t[0][2] ? Ei(t[0][0], t[0][1]) : function(n) {
    return n === e || Nv(n, e, t);
  };
}
function Mv(e, t) {
  return e != null && t in Object(e);
}
function Fv(e, t, n) {
  t = sr(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var s = yo(t[o]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && ua(r) && la(s, r) && (Ot(e) || ca(e)));
}
function Ci(e, t) {
  return e != null && Fv(e, t, Mv);
}
var Dv = 1, Vv = 2;
function xv(e, t) {
  return da(e) && wi(t) ? Ei(yo(e), t) : function(n) {
    var o = dn(n, e);
    return o === void 0 && o === t ? Ci(n, e) : lr(t, o, Dv | Vv);
  };
}
function Bv(e) {
  return function(t) {
    return t?.[e];
  };
}
function jv(e) {
  return function(t) {
    return pa(t, e);
  };
}
function zv(e) {
  return da(e) ? Bv(yo(e)) : jv(e);
}
function Wv(e) {
  return typeof e == "function" ? e : e == null ? fi : typeof e == "object" ? Ot(e) ? xv(e[0], e[1]) : $v(e) : zv(e);
}
var Or = function() {
  return Wt.Date.now();
}, Uv = "Expected a function", Hv = Math.max, Kv = Math.min;
function Gv(e, t, n) {
  var o, r, a, s, i, u, c = 0, f = !1, p = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Uv);
  t = Cs(t) || 0, mn(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? Hv(Cs(n.maxWait) || 0, t) : a, v = "trailing" in n ? !!n.trailing : v);
  function h(A) {
    var O = o, z = r;
    return o = r = void 0, c = A, s = e.apply(z, O), s;
  }
  function m(A) {
    return c = A, i = setTimeout(d, t), f ? h(A) : s;
  }
  function g(A) {
    var O = A - u, z = A - c, W = t - O;
    return p ? Kv(W, a - z) : W;
  }
  function E(A) {
    var O = A - u, z = A - c;
    return u === void 0 || O >= t || O < 0 || p && z >= a;
  }
  function d() {
    var A = Or();
    if (E(A))
      return C(A);
    i = setTimeout(d, g(A));
  }
  function C(A) {
    return i = void 0, v && o ? h(A) : (o = r = void 0, s);
  }
  function L() {
    i !== void 0 && clearTimeout(i), c = 0, o = u = r = i = void 0;
  }
  function S() {
    return i === void 0 ? s : C(Or());
  }
  function y() {
    var A = Or(), O = E(A);
    if (o = arguments, r = this, u = A, O) {
      if (i === void 0)
        return m(u);
      if (p)
        return clearTimeout(i), i = setTimeout(d, t), h(u);
    }
    return i === void 0 && (i = setTimeout(d, t)), s;
  }
  return y.cancel = L, y.flush = S, y;
}
function Yv(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Qf(e, Wv(t), r);
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
function qv(e) {
  return e === void 0;
}
function Xv(e, t, n, o) {
  if (!mn(e))
    return e;
  t = sr(t, e);
  for (var r = -1, a = t.length, s = a - 1, i = e; i != null && ++r < a; ) {
    var u = yo(t[r]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (r != s) {
      var f = i[u];
      c = void 0, c === void 0 && (c = mn(f) ? f : la(t[r + 1]) ? [] : {});
    }
    ap(i, u, c), i = i[u];
  }
  return e;
}
function Zv(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var s = t[o], i = pa(e, s);
    n(i, s) && Xv(a, sr(s, e), i);
  }
  return a;
}
function Jv(e, t) {
  return Zv(e, t, function(n, o) {
    return Ci(e, o);
  });
}
var Qv = Mm(function(e, t) {
  return e == null ? {} : Jv(e, t);
});
const $t = (e) => e === void 0, pn = (e) => typeof e == "boolean", ge = (e) => typeof e == "number", St = (e) => typeof Element > "u" ? !1 : e instanceof Element, eg = (e) => Xe(e) ? !Number.isNaN(Number(e)) : !1;
var tg = Object.defineProperty, ng = Object.defineProperties, og = Object.getOwnPropertyDescriptors, Us = Object.getOwnPropertySymbols, rg = Object.prototype.hasOwnProperty, ag = Object.prototype.propertyIsEnumerable, Hs = (e, t, n) => t in e ? tg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sg = (e, t) => {
  for (var n in t || (t = {}))
    rg.call(t, n) && Hs(e, n, t[n]);
  if (Us)
    for (var n of Us(t))
      ag.call(t, n) && Hs(e, n, t[n]);
  return e;
}, lg = (e, t) => ng(e, og(t));
function ig(e, t) {
  var n;
  const o = fn();
  return $l(() => {
    o.value = e();
  }, lg(sg({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Xr(o);
}
var Ks;
const Re = typeof window < "u", ug = (e) => typeof e == "string", Si = () => {
}, Ur = Re && ((Ks = window?.navigator) == null ? void 0 : Ks.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ma(e) {
  return typeof e == "function" ? e() : l(e);
}
function cg(e) {
  return e;
}
function bo(e) {
  return Hu() ? (Ku(e), !0) : !1;
}
function dg(e, t = !0) {
  Qe() ? Pe(e) : t ? e() : Le(e);
}
function Ti(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = x(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    r.value = !1, s();
  }
  function u(...c) {
    s(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...c);
    }, ma(t));
  }
  return o && (r.value = !0, Re && u()), bo(i), {
    isPending: Xr(r),
    start: u,
    stop: i
  };
}
function Xt(e) {
  var t;
  const n = ma(e);
  return (t = n?.$el) != null ? t : n;
}
const ir = Re ? window : void 0;
function Tt(...e) {
  let t, n, o, r;
  if (ug(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = ir) : [t, n, o, r] = e, !t)
    return Si;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, p, v, h) => (f.addEventListener(p, v, h), () => f.removeEventListener(p, v, h)), u = se(() => [Xt(t), ma(r)], ([f, p]) => {
    s(), f && a.push(...n.flatMap((v) => o.map((h) => i(f, v, h, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return bo(c), c;
}
let Gs = !1;
function fg(e, t, n = {}) {
  const { window: o = ir, ignore: r = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  Ur && !Gs && (Gs = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", Si)));
  let i = !0;
  const u = (v) => r.some((h) => {
    if (typeof h == "string")
      return Array.from(o.document.querySelectorAll(h)).some((m) => m === v.target || v.composedPath().includes(m));
    {
      const m = Xt(h);
      return m && (v.target === m || v.composedPath().includes(m));
    }
  }), f = [
    Tt(o, "click", (v) => {
      const h = Xt(e);
      if (!(!h || h === v.target || v.composedPath().includes(h))) {
        if (v.detail === 0 && (i = !u(v)), !i) {
          i = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: a }),
    Tt(o, "pointerdown", (v) => {
      const h = Xt(e);
      h && (i = !v.composedPath().includes(h) && !u(v));
    }, { passive: !0 }),
    s && Tt(o, "blur", (v) => {
      var h;
      const m = Xt(e);
      ((h = o.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !m?.contains(o.document.activeElement) && t(v);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
function Oi(e, t = !1) {
  const n = x(), o = () => n.value = !!e();
  return o(), dg(o, t), n;
}
const Ys = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qs = "__vueuse_ssr_handlers__";
Ys[qs] = Ys[qs] || {};
var Xs = Object.getOwnPropertySymbols, pg = Object.prototype.hasOwnProperty, mg = Object.prototype.propertyIsEnumerable, vg = (e, t) => {
  var n = {};
  for (var o in e)
    pg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Xs)
    for (var o of Xs(e))
      t.indexOf(o) < 0 && mg.call(e, o) && (n[o] = e[o]);
  return n;
};
function Nt(e, t, n = {}) {
  const o = n, { window: r = ir } = o, a = vg(o, ["window"]);
  let s;
  const i = Oi(() => r && "ResizeObserver" in r), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = se(() => Xt(e), (p) => {
    u(), i.value && r && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), c();
  };
  return bo(f), {
    isSupported: i,
    stop: f
  };
}
var Zs = Object.getOwnPropertySymbols, gg = Object.prototype.hasOwnProperty, hg = Object.prototype.propertyIsEnumerable, yg = (e, t) => {
  var n = {};
  for (var o in e)
    gg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Zs)
    for (var o of Zs(e))
      t.indexOf(o) < 0 && hg.call(e, o) && (n[o] = e[o]);
  return n;
};
function bg(e, t, n = {}) {
  const o = n, { window: r = ir } = o, a = yg(o, ["window"]);
  let s;
  const i = Oi(() => r && "MutationObserver" in r), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = se(() => Xt(e), (p) => {
    u(), i.value && r && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), f = () => {
    u(), c();
  };
  return bo(f), {
    isSupported: i,
    stop: f
  };
}
var Js;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Js || (Js = {}));
var _g = Object.defineProperty, Qs = Object.getOwnPropertySymbols, wg = Object.prototype.hasOwnProperty, Eg = Object.prototype.propertyIsEnumerable, el = (e, t, n) => t in e ? _g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cg = (e, t) => {
  for (var n in t || (t = {}))
    wg.call(t, n) && el(e, n, t[n]);
  if (Qs)
    for (var n of Qs(t))
      Eg.call(t, n) && el(e, n, t[n]);
  return e;
};
const Sg = {
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
Cg({
  linear: cg
}, Sg);
class Tg extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function va(e, t) {
  throw new Tg(`[${e}] ${t}`);
}
const tl = {
  current: 0
}, nl = x(0), Ai = 2e3, ol = Symbol("elZIndexContextKey"), Li = Symbol("zIndexContextKey"), ki = (e) => {
  const t = Qe() ? he(ol, tl) : tl, n = e || (Qe() ? he(Li, void 0) : void 0), o = k(() => {
    const s = l(n);
    return ge(s) ? s : Ai;
  }), r = k(() => o.value + nl.value), a = () => (t.current++, nl.value = t.current, r.value);
  return !Re && he(ol), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: a
  };
};
var Og = {
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
const Ag = (e) => (t, n) => Lg(t, n, l(e)), Lg = (e, t, n) => dn(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t?.[r]) != null ? a : `{${r}}`}`;
}), kg = (e) => {
  const t = k(() => l(e).name), n = ao(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: Ag(e)
  };
}, Ii = Symbol("localeContextKey"), ga = (e) => {
  const t = e || he(Ii, x());
  return kg(k(() => t.value || Og));
}, Pi = "__epPropKey", re = (e) => e, Ig = (e) => dt(e) && !!e[Pi], ur = (e, t) => {
  if (!dt(e) || Ig(e))
    return e;
  const { values: n, required: o, default: r, type: a, validator: s } = e, u = {
    type: a,
    required: !!o,
    validator: n || s ? (c) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), hs(e, "default") && p.push(r), f || (f = p.includes(c))), s && (f || (f = s(c))), !f && p.length > 0) {
        const v = [...new Set(p)].map((h) => JSON.stringify(h)).join(", ");
        Gu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(c)}.`);
      }
      return f;
    } : void 0,
    [Pi]: !0
  };
  return hs(e, "default") && (u.default = r), u;
}, Ce = (e) => Ko(Object.entries(e).map(([t, n]) => [
  t,
  ur(n, t)
])), ha = ["", "default", "small", "large"], cr = ur({
  type: String,
  values: ha,
  required: !1
}), Ni = Symbol("size"), Pg = () => {
  const e = he(Ni, {});
  return k(() => l(e.size) || "");
}, Ri = Symbol("emptyValuesContextKey"), Ng = ["", void 0, null], Rg = void 0, $i = Ce({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ae(e) ? !e() : !e
  }
}), $g = (e, t) => {
  const n = Qe() ? he(Ri, x({})) : x({}), o = k(() => e.emptyValues || n.value.emptyValues || Ng), r = k(() => Ae(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ae(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Rg), a = (s) => o.value.includes(s);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: a
  };
}, rl = (e) => Object.keys(e), Go = x();
function Mi(e, t = void 0) {
  return Qe() ? he(li, Go) : Go;
}
function Fi(e, t) {
  const n = Mi(), o = $e(e, k(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Vo;
  })), r = ga(k(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = ki(k(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Ai;
  })), s = k(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Di(k(() => l(n) || {})), {
    ns: o,
    locale: r,
    zIndex: a,
    size: s
  };
}
const Di = (e, t, n = !1) => {
  var o;
  const r = !!Qe(), a = r ? Mi() : void 0, s = (o = void 0) != null ? o : r ? xt : void 0;
  if (!s)
    return;
  const i = k(() => {
    const u = l(e);
    return a?.value ? Mg(a.value, u) : u;
  });
  return s(li, i), s(Ii, k(() => i.value.locale)), s(ii, k(() => i.value.namespace)), s(Li, k(() => i.value.zIndex)), s(Ni, {
    size: k(() => i.value.size || "")
  }), s(Ri, k(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Go.value) && (Go.value = i.value), i;
}, Mg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...rl(e), ...rl(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, Ve = "update:modelValue", nn = "change", en = "input";
var Se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
function jn(e, t = "px") {
  if (!e)
    return "";
  if (ge(e) || eg(e))
    return `${e}${t}`;
  if (Xe(e))
    return e;
}
function Fg(e, t) {
  if (!Re)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), a = r + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
  r < s ? e.scrollTop = r : a > i && (e.scrollTop = a - e.clientHeight);
}
const At = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Vi = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), xi = (e) => (e.install = fo, e), Dg = Ce({
  size: {
    type: re([Number, String])
  },
  color: {
    type: String
  }
}), Vg = Z({
  name: "ElIcon",
  inheritAttrs: !1
}), xg = /* @__PURE__ */ Z({
  ...Vg,
  props: Dg,
  setup(e) {
    const t = e, n = $e("icon"), o = k(() => {
      const { size: r, color: a } = t;
      return !r && !a ? {} : {
        fontSize: $t(r) ? void 0 : jn(r),
        "--color": a
      };
    });
    return (r, a) => (P(), U("i", Dn({
      class: l(n).b(),
      style: l(o)
    }, r.$attrs), [
      ae(r.$slots, "default")
    ], 16));
  }
});
var Bg = /* @__PURE__ */ Se(xg, [["__file", "icon.vue"]]);
const Ne = At(Bg);
/*! Element Plus Icons Vue v2.3.1 */
var jg = /* @__PURE__ */ Z({
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
}), Bi = jg, zg = /* @__PURE__ */ Z({
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
}), Wg = zg, Ug = /* @__PURE__ */ Z({
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
}), Hg = Ug, Kg = /* @__PURE__ */ Z({
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
}), Gg = Kg, Yg = /* @__PURE__ */ Z({
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
}), ya = Yg, qg = /* @__PURE__ */ Z({
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
}), Yo = qg, Xg = /* @__PURE__ */ Z({
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
}), Zg = Xg, Jg = /* @__PURE__ */ Z({
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
}), Qg = Jg, eh = /* @__PURE__ */ Z({
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
}), ji = eh, th = /* @__PURE__ */ Z({
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
}), nh = th, oh = /* @__PURE__ */ Z({
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
}), rh = oh, ah = /* @__PURE__ */ Z({
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
}), sh = ah, lh = /* @__PURE__ */ Z({
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
}), ih = lh, uh = /* @__PURE__ */ Z({
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
}), ch = uh;
const Mt = re([
  String,
  Object,
  Function
]), dh = {
  Close: Yo
}, fh = {
  Close: Yo
}, qo = {
  success: sh,
  warning: ch,
  error: Gg,
  info: Qg
}, zi = {
  validating: ji,
  success: Hg,
  error: ya
}, Wi = () => Re && /firefox/i.test(window.navigator.userAgent);
let et;
const ph = {
  height: "0",
  visibility: "hidden",
  overflow: Wi() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, mh = [
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
function vh(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: mh.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function al(e, t = 1, n) {
  var o;
  et || (et = document.createElement("textarea"), document.body.appendChild(et));
  const { paddingSize: r, borderSize: a, boxSizing: s, contextStyle: i } = vh(e);
  i.forEach(([p, v]) => et?.style.setProperty(p, v)), Object.entries(ph).forEach(([p, v]) => et?.style.setProperty(p, v, "important")), et.value = e.value || e.placeholder || "";
  let u = et.scrollHeight;
  const c = {};
  s === "border-box" ? u = u + a : s === "content-box" && (u = u - r), et.value = "";
  const f = et.scrollHeight - r;
  if (ge(t)) {
    let p = f * t;
    s === "border-box" && (p = p + r + a), u = Math.max(p, u), c.minHeight = `${p}px`;
  }
  if (ge(n)) {
    let p = f * n;
    s === "border-box" && (p = p + r + a), u = Math.min(p, u);
  }
  return c.height = `${u}px`, (o = et.parentNode) == null || o.removeChild(et), et = void 0, c;
}
const Ui = (e) => e, gh = Ce({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), In = (e) => Qv(gh, e), hh = Ce({
  id: {
    type: String,
    default: void 0
  },
  size: cr,
  disabled: Boolean,
  modelValue: {
    type: re([
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
    type: re([Boolean, Object]),
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
    type: re([Object, Array, String]),
    default: () => Ui({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...In(["ariaLabel"])
}), yh = {
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
}, bh = ["class", "style"], _h = /^on[A-Z]/, wh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = k(() => (n?.value || []).concat(bh)), r = Qe();
  return r ? k(() => {
    var a;
    return Ko(Object.entries((a = r.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !o.value.includes(s) && !(t && _h.test(s))));
  }) : k(() => ({}));
}, ba = Symbol("formContextKey"), Xo = Symbol("formItemContextKey"), sl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Eh = Symbol("elIdInjection"), Hi = () => Qe() ? he(Eh, sl) : sl, dr = (e) => {
  const t = Hi(), n = sa();
  return ig(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
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
  n || (n = x(!1)), o || (o = x(!1));
  const r = x();
  let a;
  const s = k(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return Pe(() => {
    a = se([Gt(e, "id"), n], ([i, u]) => {
      const c = i ?? (u ? void 0 : dr().value);
      c !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !u && c && t.addInputId(c)), r.value = c);
    }, { immediate: !0 });
  }), Qo(() => {
    a && a(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
}, Ki = (e) => {
  const t = Qe();
  return k(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, _o = (e, t = {}) => {
  const n = x(void 0), o = t.prop ? n : Ki("size"), r = t.global ? n : Pg(), a = t.form ? { size: void 0 } : he(ba, void 0), s = t.formItem ? { size: void 0 } : he(Xo, void 0);
  return k(() => o.value || l(e) || s?.size || a?.size || r.value || "");
}, wa = (e) => {
  const t = Ki("disabled"), n = he(ba, void 0);
  return k(() => t.value || l(e) || n?.disabled || !1);
};
function Gi(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const a = Qe(), { emit: s } = a, i = fn(), u = x(!1), c = (v) => {
    Ae(t) && t(v) || u.value || (u.value = !0, s("focus", v), n?.());
  }, f = (v) => {
    var h;
    Ae(o) && o(v) || v.relatedTarget && ((h = i.value) != null && h.contains(v.relatedTarget)) || (u.value = !1, s("blur", v), r?.());
  }, p = () => {
    var v, h;
    (v = i.value) != null && v.contains(document.activeElement) && i.value !== document.activeElement || (h = e.value) == null || h.focus();
  };
  return se(i, (v) => {
    v && v.setAttribute("tabindex", "-1");
  }), Tt(i, "focus", c, !0), Tt(i, "blur", f, !0), Tt(i, "click", p, !0), {
    isFocused: u,
    wrapperRef: i,
    handleFocus: c,
    handleBlur: f
  };
}
const Ch = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Yi({
  afterComposition: e,
  emit: t
}) {
  const n = x(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var u;
    t?.("compositionupdate", i);
    const c = (u = i.target) == null ? void 0 : u.value, f = c[c.length - 1] || "";
    n.value = !Ch(f);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Le(() => e(i)));
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
function Sh(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: a, value: s } = e.value;
    if (r == null || a == null)
      return;
    const i = s.slice(0, Math.max(0, r)), u = s.slice(Math.max(0, a));
    t = {
      selectionStart: r,
      selectionEnd: a,
      value: s,
      beforeTxt: i,
      afterTxt: u
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: i } = t;
    if (a == null || s == null || i == null)
      return;
    let u = r.length;
    if (r.endsWith(s))
      u = r.length - s.length;
    else if (r.startsWith(a))
      u = a.length;
    else {
      const c = a[i - 1], f = r.indexOf(c, i - 1);
      f !== -1 && (u = f + 1);
    }
    e.value.setSelectionRange(u, u);
  }
  return [n, o];
}
const Th = "ElInput", Oh = Z({
  name: Th,
  inheritAttrs: !1
}), Ah = /* @__PURE__ */ Z({
  ...Oh,
  props: hh,
  emits: yh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Yu(), a = wh(), s = qu(), i = k(() => [
      o.type === "textarea" ? g.b() : m.b(),
      m.m(v.value),
      m.is("disabled", h.value),
      m.is("exceed", Me.value),
      {
        [m.b("group")]: s.prepend || s.append,
        [m.m("prefix")]: s.prefix || o.prefixIcon,
        [m.m("suffix")]: s.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [m.bm("suffix", "password-clear")]: H.value && j.value,
        [m.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), u = k(() => [
      m.e("wrapper"),
      m.is("focus", z.value)
    ]), { form: c, formItem: f } = fr(), { inputId: p } = _a(o, {
      formItemContext: f
    }), v = _o(), h = wa(), m = $e("input"), g = $e("textarea"), E = fn(), d = fn(), C = x(!1), L = x(!1), S = x(), y = fn(o.inputStyle), A = k(() => E.value || d.value), { wrapperRef: O, isFocused: z, handleFocus: W, handleBlur: ee } = Gi(A, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var _;
        o.validateEvent && ((_ = f?.validate) == null || _.call(f, "blur").catch((M) => void 0));
      }
    }), ne = k(() => {
      var _;
      return (_ = c?.statusIcon) != null ? _ : !1;
    }), J = k(() => f?.validateState || ""), le = k(() => J.value && zi[J.value]), ye = k(() => L.value ? ih : Zg), N = k(() => [
      r.style
    ]), $ = k(() => [
      o.inputStyle,
      y.value,
      { resize: o.resize }
    ]), I = k(() => Qt(o.modelValue) ? "" : String(o.modelValue)), H = k(() => o.clearable && !h.value && !o.readonly && !!I.value && (z.value || C.value)), j = k(() => o.showPassword && !h.value && !!I.value && (!!I.value || z.value)), ie = k(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !h.value && !o.readonly && !o.showPassword), Y = k(() => I.value.length), Me = k(() => !!ie.value && Y.value > Number(o.maxlength)), we = k(() => !!s.suffix || !!o.suffixIcon || H.value || o.showPassword || ie.value || !!J.value && ne.value), [We, Be] = Sh(E);
    Nt(d, (_) => {
      if (be(), !ie.value || o.resize !== "both")
        return;
      const M = _[0], { width: ue } = M.contentRect;
      S.value = {
        right: `calc(100% - ${ue + 15 + 6}px)`
      };
    });
    const Ue = () => {
      const { type: _, autosize: M } = o;
      if (!(!Re || _ !== "textarea" || !d.value))
        if (M) {
          const ue = dt(M) ? M.minRows : void 0, me = dt(M) ? M.maxRows : void 0, Ke = al(d.value, ue, me);
          y.value = {
            overflowY: "hidden",
            ...Ke
          }, Le(() => {
            d.value.offsetHeight, y.value = Ke;
          });
        } else
          y.value = {
            minHeight: al(d.value).minHeight
          };
    }, be = ((_) => {
      let M = !1;
      return () => {
        var ue;
        if (M || !o.autosize)
          return;
        ((ue = d.value) == null ? void 0 : ue.offsetParent) === null || (_(), M = !0);
      };
    })(Ue), rt = () => {
      const _ = A.value, M = o.formatter ? o.formatter(I.value) : I.value;
      !_ || _.value === M || (_.value = M);
    }, pt = async (_) => {
      We();
      let { value: M } = _.target;
      if (o.formatter && o.parser && (M = o.parser(M)), !_t.value) {
        if (M === I.value) {
          rt();
          return;
        }
        n(Ve, M), n(en, M), await Le(), rt(), Be();
      }
    }, at = (_) => {
      let { value: M } = _.target;
      o.formatter && o.parser && (M = o.parser(M)), n(nn, M);
    }, {
      isComposing: _t,
      handleCompositionStart: st,
      handleCompositionUpdate: lt,
      handleCompositionEnd: it
    } = Yi({ emit: n, afterComposition: pt }), mt = () => {
      We(), L.value = !L.value, setTimeout(Be);
    }, Lt = () => {
      var _;
      return (_ = A.value) == null ? void 0 : _.focus();
    }, w = () => {
      var _;
      return (_ = A.value) == null ? void 0 : _.blur();
    }, T = (_) => {
      C.value = !1, n("mouseleave", _);
    }, F = (_) => {
      C.value = !0, n("mouseenter", _);
    }, G = (_) => {
      n("keydown", _);
    }, de = () => {
      var _;
      (_ = A.value) == null || _.select();
    }, oe = () => {
      n(Ve, ""), n(nn, ""), n("clear"), n(en, "");
    };
    return se(() => o.modelValue, () => {
      var _;
      Le(() => Ue()), o.validateEvent && ((_ = f?.validate) == null || _.call(f, "change").catch((M) => void 0));
    }), se(I, () => rt()), se(() => o.type, async () => {
      await Le(), rt(), Ue();
    }), Pe(() => {
      !o.formatter && o.parser, rt(), Le(Ue);
    }), t({
      input: E,
      textarea: d,
      ref: A,
      textareaStyle: $,
      autosize: Gt(o, "autosize"),
      isComposing: _t,
      focus: Lt,
      blur: w,
      select: de,
      clear: oe,
      resizeTextarea: Ue
    }), (_, M) => (P(), U("div", {
      class: B([
        l(i),
        {
          [l(m).bm("group", "append")]: _.$slots.append,
          [l(m).bm("group", "prepend")]: _.$slots.prepend
        }
      ]),
      style: je(l(N)),
      onMouseenter: F,
      onMouseleave: T
    }, [
      q(" input "),
      _.type !== "textarea" ? (P(), U(qe, { key: 0 }, [
        q(" prepend slot "),
        _.$slots.prepend ? (P(), U("div", {
          key: 0,
          class: B(l(m).be("group", "prepend"))
        }, [
          ae(_.$slots, "prepend")
        ], 2)) : q("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: B(l(u))
        }, [
          q(" prefix slot "),
          _.$slots.prefix || _.prefixIcon ? (P(), U("span", {
            key: 0,
            class: B(l(m).e("prefix"))
          }, [
            b("span", {
              class: B(l(m).e("prefix-inner"))
            }, [
              ae(_.$slots, "prefix"),
              _.prefixIcon ? (P(), te(l(Ne), {
                key: 0,
                class: B(l(m).e("icon"))
              }, {
                default: X(() => [
                  (P(), te(Je(_.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 2)) : q("v-if", !0),
          b("input", Dn({
            id: l(p),
            ref_key: "input",
            ref: E,
            class: l(m).e("inner")
          }, l(a), {
            minlength: _.minlength,
            maxlength: _.maxlength,
            type: _.showPassword ? L.value ? "text" : "password" : _.type,
            disabled: l(h),
            readonly: _.readonly,
            autocomplete: _.autocomplete,
            tabindex: _.tabindex,
            "aria-label": _.ariaLabel,
            placeholder: _.placeholder,
            style: _.inputStyle,
            form: _.form,
            autofocus: _.autofocus,
            role: _.containerRole,
            onCompositionstart: l(st),
            onCompositionupdate: l(lt),
            onCompositionend: l(it),
            onInput: pt,
            onChange: at,
            onKeydown: G
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          q(" suffix slot "),
          l(we) ? (P(), U("span", {
            key: 1,
            class: B(l(m).e("suffix"))
          }, [
            b("span", {
              class: B(l(m).e("suffix-inner"))
            }, [
              !l(H) || !l(j) || !l(ie) ? (P(), U(qe, { key: 0 }, [
                ae(_.$slots, "suffix"),
                _.suffixIcon ? (P(), te(l(Ne), {
                  key: 0,
                  class: B(l(m).e("icon"))
                }, {
                  default: X(() => [
                    (P(), te(Je(_.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : q("v-if", !0)
              ], 64)) : q("v-if", !0),
              l(H) ? (P(), te(l(Ne), {
                key: 1,
                class: B([l(m).e("icon"), l(m).e("clear")]),
                onMousedown: Te(l(fo), ["prevent"]),
                onClick: oe
              }, {
                default: X(() => [
                  V(l(ya))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : q("v-if", !0),
              l(j) ? (P(), te(l(Ne), {
                key: 2,
                class: B([l(m).e("icon"), l(m).e("password")]),
                onClick: mt
              }, {
                default: X(() => [
                  (P(), te(Je(l(ye))))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0),
              l(ie) ? (P(), U("span", {
                key: 3,
                class: B(l(m).e("count"))
              }, [
                b("span", {
                  class: B(l(m).e("count-inner"))
                }, D(l(Y)) + " / " + D(_.maxlength), 3)
              ], 2)) : q("v-if", !0),
              l(J) && l(le) && l(ne) ? (P(), te(l(Ne), {
                key: 4,
                class: B([
                  l(m).e("icon"),
                  l(m).e("validateIcon"),
                  l(m).is("loading", l(J) === "validating")
                ])
              }, {
                default: X(() => [
                  (P(), te(Je(l(le))))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 2)) : q("v-if", !0)
        ], 2),
        q(" append slot "),
        _.$slots.append ? (P(), U("div", {
          key: 1,
          class: B(l(m).be("group", "append"))
        }, [
          ae(_.$slots, "append")
        ], 2)) : q("v-if", !0)
      ], 64)) : (P(), U(qe, { key: 1 }, [
        q(" textarea "),
        b("textarea", Dn({
          id: l(p),
          ref_key: "textarea",
          ref: d,
          class: [l(g).e("inner"), l(m).is("focus", l(z))]
        }, l(a), {
          minlength: _.minlength,
          maxlength: _.maxlength,
          tabindex: _.tabindex,
          disabled: l(h),
          readonly: _.readonly,
          autocomplete: _.autocomplete,
          style: l($),
          "aria-label": _.ariaLabel,
          placeholder: _.placeholder,
          form: _.form,
          autofocus: _.autofocus,
          rows: _.rows,
          role: _.containerRole,
          onCompositionstart: l(st),
          onCompositionupdate: l(lt),
          onCompositionend: l(it),
          onInput: pt,
          onFocus: l(W),
          onBlur: l(ee),
          onChange: at,
          onKeydown: G
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(ie) ? (P(), U("span", {
          key: 0,
          style: je(S.value),
          class: B(l(m).e("count"))
        }, D(l(Y)) + " / " + D(_.maxlength), 7)) : q("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Lh = /* @__PURE__ */ Se(Ah, [["__file", "input.vue"]]);
const kh = At(Lh), Nn = 4, Ih = {
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
}, Ph = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Ea = Symbol("scrollbarContextKey"), Nh = Ce({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Rh = "Thumb", $h = /* @__PURE__ */ Z({
  __name: "thumb",
  props: Nh,
  setup(e) {
    const t = e, n = he(Ea), o = $e("scrollbar");
    n || va(Rh, "can not inject scrollbar context");
    const r = x(), a = x(), s = x({}), i = x(!1);
    let u = !1, c = !1, f = Re ? document.onselectstart : null;
    const p = k(() => Ih[t.vertical ? "vertical" : "horizontal"]), v = k(() => Ph({
      size: t.size,
      move: t.move,
      bar: p.value
    })), h = k(() => r.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), m = (A) => {
      var O;
      if (A.stopPropagation(), A.ctrlKey || [1, 2].includes(A.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), E(A);
      const z = A.currentTarget;
      z && (s.value[p.value.axis] = z[p.value.offset] - (A[p.value.client] - z.getBoundingClientRect()[p.value.direction]));
    }, g = (A) => {
      if (!a.value || !r.value || !n.wrapElement)
        return;
      const O = Math.abs(A.target.getBoundingClientRect()[p.value.direction] - A[p.value.client]), z = a.value[p.value.offset] / 2, W = (O - z) * 100 * h.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = W * n.wrapElement[p.value.scrollSize] / 100;
    }, E = (A) => {
      A.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", C), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (A) => {
      if (!r.value || !a.value || u === !1)
        return;
      const O = s.value[p.value.axis];
      if (!O)
        return;
      const z = (r.value.getBoundingClientRect()[p.value.direction] - A[p.value.client]) * -1, W = a.value[p.value.offset] - O, ee = (z - W) * 100 * h.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = ee * n.wrapElement[p.value.scrollSize] / 100;
    }, C = () => {
      u = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", C), y(), c && (i.value = !1);
    }, L = () => {
      c = !1, i.value = !!t.size;
    }, S = () => {
      c = !0, i.value = u;
    };
    zt(() => {
      y(), document.removeEventListener("mouseup", C);
    });
    const y = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Tt(Gt(n, "scrollbarElement"), "mousemove", L), Tt(Gt(n, "scrollbarElement"), "mouseleave", S), (A, O) => (P(), te(Yn, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: X(() => [
        xe(b("div", {
          ref_key: "instance",
          ref: r,
          class: B([l(o).e("bar"), l(o).is(l(p).key)]),
          onMousedown: g
        }, [
          b("div", {
            ref_key: "thumb",
            ref: a,
            class: B(l(o).e("thumb")),
            style: je(l(v)),
            onMousedown: m
          }, null, 38)
        ], 34), [
          [tn, A.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ll = /* @__PURE__ */ Se($h, [["__file", "thumb.vue"]]);
const Mh = Ce({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Fh = /* @__PURE__ */ Z({
  __name: "bar",
  props: Mh,
  setup(e, { expose: t }) {
    const n = e, o = he(Ea), r = x(0), a = x(0), s = x(""), i = x(""), u = x(1), c = x(1);
    return t({
      handleScroll: (v) => {
        if (v) {
          const h = v.offsetHeight - Nn, m = v.offsetWidth - Nn;
          a.value = v.scrollTop * 100 / h * u.value, r.value = v.scrollLeft * 100 / m * c.value;
        }
      },
      update: () => {
        const v = o?.wrapElement;
        if (!v)
          return;
        const h = v.offsetHeight - Nn, m = v.offsetWidth - Nn, g = h ** 2 / v.scrollHeight, E = m ** 2 / v.scrollWidth, d = Math.max(g, n.minSize), C = Math.max(E, n.minSize);
        u.value = g / (h - g) / (d / (h - d)), c.value = E / (m - E) / (C / (m - C)), i.value = d + Nn < h ? `${d}px` : "", s.value = C + Nn < m ? `${C}px` : "";
      }
    }), (v, h) => (P(), U(qe, null, [
      V(ll, {
        move: r.value,
        ratio: c.value,
        size: s.value,
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      V(ll, {
        move: a.value,
        ratio: u.value,
        size: i.value,
        vertical: "",
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Dh = /* @__PURE__ */ Se(Fh, [["__file", "bar.vue"]]);
const Vh = Ce({
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
    type: re([String, Object, Array]),
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
}), xh = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ge)
}, Bh = "ElScrollbar", jh = Z({
  name: Bh
}), zh = /* @__PURE__ */ Z({
  ...jh,
  props: Vh,
  emits: xh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = $e("scrollbar");
    let a, s, i = 0, u = 0;
    const c = x(), f = x(), p = x(), v = x(), h = k(() => {
      const y = {};
      return o.height && (y.height = jn(o.height)), o.maxHeight && (y.maxHeight = jn(o.maxHeight)), [o.wrapStyle, y];
    }), m = k(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), g = k(() => [r.e("view"), o.viewClass]), E = () => {
      var y;
      f.value && ((y = v.value) == null || y.handleScroll(f.value), i = f.value.scrollTop, u = f.value.scrollLeft, n("scroll", {
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
    }, S = () => {
      var y;
      (y = v.value) == null || y.update();
    };
    return se(() => o.noresize, (y) => {
      y ? (a?.(), s?.()) : ({ stop: a } = Nt(p, S), s = Tt("resize", S));
    }, { immediate: !0 }), se(() => [o.maxHeight, o.height], () => {
      o.native || Le(() => {
        var y;
        S(), f.value && ((y = v.value) == null || y.handleScroll(f.value));
      });
    }), xt(Ea, Sn({
      scrollbarElement: c,
      wrapElement: f
    })), Xu(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = u);
    }), Pe(() => {
      o.native || Le(() => {
        S();
      });
    }), Ml(() => S()), t({
      wrapRef: f,
      update: S,
      scrollTo: d,
      setScrollTop: C,
      setScrollLeft: L,
      handleScroll: E
    }), (y, A) => (P(), U("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: B(l(r).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: f,
        class: B(l(m)),
        style: je(l(h)),
        tabindex: y.tabindex,
        onScroll: E
      }, [
        (P(), te(Je(y.tag), {
          id: y.id,
          ref_key: "resizeRef",
          ref: p,
          class: B(l(g)),
          style: je(y.viewStyle),
          role: y.role,
          "aria-label": y.ariaLabel,
          "aria-orientation": y.ariaOrientation
        }, {
          default: X(() => [
            ae(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      y.native ? q("v-if", !0) : (P(), te(Dh, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        always: y.always,
        "min-size": y.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Wh = /* @__PURE__ */ Se(zh, [["__file", "scrollbar.vue"]]);
const Uh = At(Wh), Ca = Symbol("popper"), qi = Symbol("popperContent"), Hh = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Xi = Ce({
  role: {
    type: String,
    values: Hh,
    default: "tooltip"
  }
}), Kh = Z({
  name: "ElPopper",
  inheritAttrs: !1
}), Gh = /* @__PURE__ */ Z({
  ...Kh,
  props: Xi,
  setup(e, { expose: t }) {
    const n = e, o = x(), r = x(), a = x(), s = x(), i = k(() => n.role), u = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(u), xt(Ca, u), (c, f) => ae(c.$slots, "default");
  }
});
var Yh = /* @__PURE__ */ Se(Gh, [["__file", "popper.vue"]]);
const Zi = Ce({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), qh = Z({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Xh = /* @__PURE__ */ Z({
  ...qh,
  props: Zi,
  setup(e, { expose: t }) {
    const n = e, o = $e("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: s } = he(qi, void 0);
    return se(() => n.arrowOffset, (i) => {
      r.value = i;
    }), zt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, u) => (P(), U("span", {
      ref_key: "arrowRef",
      ref: a,
      class: B(l(o).e("arrow")),
      style: je(l(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Zh = /* @__PURE__ */ Se(Xh, [["__file", "arrow.vue"]]);
const Ji = Ce({
  virtualRef: {
    type: re(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: re(Function)
  },
  onMouseleave: {
    type: re(Function)
  },
  onClick: {
    type: re(Function)
  },
  onKeydown: {
    type: re(Function)
  },
  onFocus: {
    type: re(Function)
  },
  onBlur: {
    type: re(Function)
  },
  onContextmenu: {
    type: re(Function)
  },
  id: String,
  open: Boolean
}), Qi = Symbol("elForwardRef"), Jh = (e) => {
  xt(Qi, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Qh = (e) => ({
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
}, e0 = "ElOnlyChild", t0 = Z({
  name: e0,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = he(Qi), a = Qh((o = r?.setForwardRef) != null ? o : fo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const u = eu(i);
      return u ? xe(Zu(u, n), [[a]]) : null;
    };
  }
});
function eu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (dt(n))
      switch (n.type) {
        case Ju:
          continue;
        case Rl:
        case "svg":
          return il(n);
        case qe:
          return eu(n.children);
        default:
          return n;
      }
    return il(n);
  }
  return null;
}
function il(e) {
  const t = $e("only-child");
  return V("span", {
    class: t.e("content")
  }, [e]);
}
const n0 = Z({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), o0 = /* @__PURE__ */ Z({
  ...n0,
  props: Ji,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = he(Ca, void 0);
    Jh(r);
    const a = k(() => i.value ? n.id : void 0), s = k(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = k(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), u = k(() => i.value ? `${n.open}` : void 0);
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
    return Pe(() => {
      se(() => n.virtualRef, (p) => {
        p && (r.value = Xt(p));
      }, {
        immediate: !0
      }), se(r, (p, v) => {
        c?.(), c = void 0, St(p) && (f.forEach((h) => {
          var m;
          const g = n[h];
          g && (p.addEventListener(h.slice(2).toLowerCase(), g), (m = v?.removeEventListener) == null || m.call(v, h.slice(2).toLowerCase(), g));
        }), Hr(p) && (c = se([a, s, i, u], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((m, g) => {
            Qt(h[g]) ? p.removeAttribute(m) : p.setAttribute(m, h[g]);
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
    }), (p, v) => p.virtualTriggering ? q("v-if", !0) : (P(), te(l(t0), Dn({ key: 0 }, p.$attrs, {
      "aria-controls": l(a),
      "aria-describedby": l(s),
      "aria-expanded": l(u),
      "aria-haspopup": l(i)
    }), {
      default: X(() => [
        ae(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var r0 = /* @__PURE__ */ Se(o0, [["__file", "trigger.vue"]]);
const Ar = "focus-trap.focus-after-trapped", Lr = "focus-trap.focus-after-released", a0 = "focus-trap.focusout-prevented", ul = {
  cancelable: !0,
  bubbles: !1
}, s0 = {
  cancelable: !0,
  bubbles: !1
}, cl = "focusAfterTrapped", dl = "focusAfterReleased", l0 = Symbol("elFocusTrap"), Sa = x(), pr = x(0), Ta = x(0);
let Po = 0;
const tu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, fl = (e, t) => {
  for (const n of e)
    if (!i0(n, t))
      return n;
}, i0 = (e, t) => {
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
}, u0 = (e) => {
  const t = tu(e), n = fl(t, e), o = fl(t.reverse(), e);
  return [n, o];
}, c0 = (e) => e instanceof HTMLInputElement && "select" in e, Ht = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    St(e) && !Hr(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Ta.value = window.performance.now(), e !== n && c0(e) && t && e.select(), St(e) && o && e.removeAttribute("tabindex");
  }
};
function pl(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const d0 = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = pl(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = pl(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, f0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Ht(o, t), document.activeElement !== n)
      return;
}, ml = d0(), p0 = () => pr.value > Ta.value, No = () => {
  Sa.value = "pointer", pr.value = window.performance.now();
}, vl = () => {
  Sa.value = "keyboard", pr.value = window.performance.now();
}, m0 = () => (Pe(() => {
  Po === 0 && (document.addEventListener("mousedown", No), document.addEventListener("touchstart", No), document.addEventListener("keydown", vl)), Po++;
}), zt(() => {
  Po--, Po <= 0 && (document.removeEventListener("mousedown", No), document.removeEventListener("touchstart", No), document.removeEventListener("keydown", vl));
}), {
  focusReason: Sa,
  lastUserFocusTimestamp: pr,
  lastAutomatedFocusTimestamp: Ta
}), Ro = (e) => new CustomEvent(a0, {
  ...s0,
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
const gl = (e) => {
  e.code === Dt.esc && Mn.forEach((t) => t(e));
}, v0 = (e) => {
  Pe(() => {
    Mn.length === 0 && document.addEventListener("keydown", gl), Re && Mn.push(e);
  }), zt(() => {
    Mn = Mn.filter((t) => t !== e), Mn.length === 0 && Re && document.removeEventListener("keydown", gl);
  });
}, g0 = Z({
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
    cl,
    dl,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let o, r;
    const { focusReason: a } = m0();
    v0((m) => {
      e.trapped && !s.paused && t("release-requested", m);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (m) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: g, altKey: E, ctrlKey: d, metaKey: C, currentTarget: L, shiftKey: S } = m, { loop: y } = e, A = g === Dt.tab && !E && !d && !C, O = document.activeElement;
      if (A && O) {
        const z = L, [W, ee] = u0(z);
        if (W && ee) {
          if (!S && O === ee) {
            const J = Ro({
              focusReason: a.value
            });
            t("focusout-prevented", J), J.defaultPrevented || (m.preventDefault(), y && Ht(W, !0));
          } else if (S && [W, z].includes(O)) {
            const J = Ro({
              focusReason: a.value
            });
            t("focusout-prevented", J), J.defaultPrevented || (m.preventDefault(), y && Ht(ee, !0));
          }
        } else if (O === z) {
          const J = Ro({
            focusReason: a.value
          });
          t("focusout-prevented", J), J.defaultPrevented || m.preventDefault();
        }
      }
    };
    xt(l0, {
      focusTrapRef: n,
      onKeydown: i
    }), se(() => e.focusTrapEl, (m) => {
      m && (n.value = m);
    }, { immediate: !0 }), se([n], ([m], [g]) => {
      m && (m.addEventListener("keydown", i), m.addEventListener("focusin", f), m.addEventListener("focusout", p)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", f), g.removeEventListener("focusout", p));
    });
    const u = (m) => {
      t(cl, m);
    }, c = (m) => t(dl, m), f = (m) => {
      const g = l(n);
      if (!g)
        return;
      const E = m.target, d = m.relatedTarget, C = E && g.contains(E);
      e.trapped || d && g.contains(d) || (o = d), C && t("focusin", m), !s.paused && e.trapped && (C ? r = E : Ht(r, !0));
    }, p = (m) => {
      const g = l(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const E = m.relatedTarget;
          !Qt(E) && !g.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = Ro({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Ht(r, !0);
            }
          }, 0);
        } else {
          const E = m.target;
          E && g.contains(E) || t("focusout", m);
        }
    };
    async function v() {
      await Le();
      const m = l(n);
      if (m) {
        ml.push(s);
        const g = m.contains(document.activeElement) ? o : document.activeElement;
        if (o = g, !m.contains(g)) {
          const d = new Event(Ar, ul);
          m.addEventListener(Ar, u), m.dispatchEvent(d), d.defaultPrevented || Le(() => {
            let C = e.focusStartEl;
            Xe(C) || (Ht(C), document.activeElement !== C && (C = "first")), C === "first" && f0(tu(m), !0), (document.activeElement === g || C === "container") && Ht(m);
          });
        }
      }
    }
    function h() {
      const m = l(n);
      if (m) {
        m.removeEventListener(Ar, u);
        const g = new CustomEvent(Lr, {
          ...ul,
          detail: {
            focusReason: a.value
          }
        });
        m.addEventListener(Lr, c), m.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !p0() || m.contains(document.activeElement)) && Ht(o ?? document.body), m.removeEventListener(Lr, c), ml.remove(s);
      }
    }
    return Pe(() => {
      e.trapped && v(), se(() => e.trapped, (m) => {
        m ? v() : h();
      });
    }), zt(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function h0(e, t, n, o, r, a) {
  return ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var y0 = /* @__PURE__ */ Se(g0, [["render", h0], ["__file", "focus-trap.vue"]]), tt = "top", yt = "bottom", bt = "right", nt = "left", Oa = "auto", wo = [tt, yt, bt, nt], zn = "start", vo = "end", b0 = "clippingParents", nu = "viewport", Qn = "popper", _0 = "reference", hl = wo.reduce(function(e, t) {
  return e.concat([t + "-" + zn, t + "-" + vo]);
}, []), mr = [].concat(wo, [Oa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + zn, t + "-" + vo]);
}, []), w0 = "beforeRead", E0 = "read", C0 = "afterRead", S0 = "beforeMain", T0 = "main", O0 = "afterMain", A0 = "beforeWrite", L0 = "write", k0 = "afterWrite", I0 = [w0, E0, C0, S0, T0, O0, A0, L0, k0];
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
function ht(e) {
  var t = ft(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Aa(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ft(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function P0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !ht(a) || !jt(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(s) {
      var i = r[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function N0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = s.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !ht(r) || !jt(r) || (Object.assign(r.style, i), Object.keys(a).forEach(function(u) {
        r.removeAttribute(u);
      }));
    });
  };
}
var ou = { name: "applyStyles", enabled: !0, phase: "write", fn: P0, effect: N0, requires: ["computeStyles"] };
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
function ru() {
  return !/^((?!chrome|android).)*safari/i.test(Kr());
}
function Un(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  t && ht(e) && (r = e.offsetWidth > 0 && Wn(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Wn(o.height) / e.offsetHeight || 1);
  var s = On(e) ? ft(e) : window, i = s.visualViewport, u = !ru() && n, c = (o.left + (u && i ? i.offsetLeft : 0)) / r, f = (o.top + (u && i ? i.offsetTop : 0)) / a, p = o.width / r, v = o.height / a;
  return { width: p, height: v, top: f, right: c + p, bottom: f + v, left: c, x: c, y: f };
}
function La(e) {
  var t = Un(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function au(e, t) {
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
function R0(e) {
  return ["table", "td", "th"].indexOf(jt(e)) >= 0;
}
function yn(e) {
  return ((On(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function vr(e) {
  return jt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Aa(e) ? e.host : null) || yn(e);
}
function yl(e) {
  return !ht(e) || on(e).position === "fixed" ? null : e.offsetParent;
}
function $0(e) {
  var t = /firefox/i.test(Kr()), n = /Trident/i.test(Kr());
  if (n && ht(e)) {
    var o = on(e);
    if (o.position === "fixed") return null;
  }
  var r = vr(e);
  for (Aa(r) && (r = r.host); ht(r) && ["html", "body"].indexOf(jt(r)) < 0; ) {
    var a = on(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function Eo(e) {
  for (var t = ft(e), n = yl(e); n && R0(n) && on(n).position === "static"; ) n = yl(n);
  return n && (jt(n) === "html" || jt(n) === "body" && on(n).position === "static") ? t : n || $0(e) || t;
}
function ka(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function oo(e, t, n) {
  return Cn(e, Zo(t, n));
}
function M0(e, t, n) {
  var o = oo(e, t, n);
  return o > n ? n : o;
}
function su() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function lu(e) {
  return Object.assign({}, su(), e);
}
function iu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var F0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, lu(typeof e != "number" ? e : iu(e, wo));
};
function D0(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Vt(n.placement), u = ka(i), c = [nt, bt].indexOf(i) >= 0, f = c ? "height" : "width";
  if (!(!a || !s)) {
    var p = F0(r.padding, n), v = La(a), h = u === "y" ? tt : nt, m = u === "y" ? yt : bt, g = n.rects.reference[f] + n.rects.reference[u] - s[u] - n.rects.popper[f], E = s[u] - n.rects.reference[u], d = Eo(a), C = d ? u === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, L = g / 2 - E / 2, S = p[h], y = C - v[f] - p[m], A = C / 2 - v[f] / 2 + L, O = oo(S, A, y), z = u;
    n.modifiersData[o] = (t = {}, t[z] = O, t.centerOffset = O - A, t);
  }
}
function V0(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || au(t.elements.popper, r) && (t.elements.arrow = r));
}
var x0 = { name: "arrow", enabled: !0, phase: "main", fn: D0, effect: V0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Hn(e) {
  return e.split("-")[1];
}
var B0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function j0(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Wn(n * r) / r || 0, y: Wn(o * r) / r || 0 };
}
function bl(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, s = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, p = e.isFixed, v = s.x, h = v === void 0 ? 0 : v, m = s.y, g = m === void 0 ? 0 : m, E = typeof f == "function" ? f({ x: h, y: g }) : { x: h, y: g };
  h = E.x, g = E.y;
  var d = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), L = nt, S = tt, y = window;
  if (c) {
    var A = Eo(n), O = "clientHeight", z = "clientWidth";
    if (A === ft(n) && (A = yn(n), on(A).position !== "static" && i === "absolute" && (O = "scrollHeight", z = "scrollWidth")), A = A, r === tt || (r === nt || r === bt) && a === vo) {
      S = yt;
      var W = p && A === y && y.visualViewport ? y.visualViewport.height : A[O];
      g -= W - o.height, g *= u ? 1 : -1;
    }
    if (r === nt || (r === tt || r === yt) && a === vo) {
      L = bt;
      var ee = p && A === y && y.visualViewport ? y.visualViewport.width : A[z];
      h -= ee - o.width, h *= u ? 1 : -1;
    }
  }
  var ne = Object.assign({ position: i }, c && B0), J = f === !0 ? j0({ x: h, y: g }, ft(n)) : { x: h, y: g };
  if (h = J.x, g = J.y, u) {
    var le;
    return Object.assign({}, ne, (le = {}, le[S] = C ? "0" : "", le[L] = d ? "0" : "", le.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", le));
  }
  return Object.assign({}, ne, (t = {}, t[S] = C ? g + "px" : "", t[L] = d ? h + "px" : "", t.transform = "", t));
}
function z0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, u = i === void 0 ? !0 : i, c = { placement: Vt(t.placement), variation: Hn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bl(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bl(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var uu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: z0, data: {} }, $o = { passive: !0 };
function W0(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, s = o.resize, i = s === void 0 ? !0 : s, u = ft(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, $o);
  }), i && u.addEventListener("resize", n.update, $o), function() {
    a && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, $o);
    }), i && u.removeEventListener("resize", n.update, $o);
  };
}
var cu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: W0, data: {} }, U0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return U0[t];
  });
}
var H0 = { start: "end", end: "start" };
function _l(e) {
  return e.replace(/start|end/g, function(t) {
    return H0[t];
  });
}
function Ia(e) {
  var t = ft(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Pa(e) {
  return Un(yn(e)).left + Ia(e).scrollLeft;
}
function K0(e, t) {
  var n = ft(e), o = yn(e), r = n.visualViewport, a = o.clientWidth, s = o.clientHeight, i = 0, u = 0;
  if (r) {
    a = r.width, s = r.height;
    var c = ru();
    (c || !c && t === "fixed") && (i = r.offsetLeft, u = r.offsetTop);
  }
  return { width: a, height: s, x: i + Pa(e), y: u };
}
function G0(e) {
  var t, n = yn(e), o = Ia(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = Cn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Cn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + Pa(e), u = -o.scrollTop;
  return on(r || n).direction === "rtl" && (i += Cn(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: s, x: i, y: u };
}
function Na(e) {
  var t = on(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function du(e) {
  return ["html", "body", "#document"].indexOf(jt(e)) >= 0 ? e.ownerDocument.body : ht(e) && Na(e) ? e : du(vr(e));
}
function ro(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = du(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ft(o), s = r ? [a].concat(a.visualViewport || [], Na(o) ? o : []) : o, i = t.concat(s);
  return r ? i : i.concat(ro(vr(s)));
}
function Gr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Y0(e, t) {
  var n = Un(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function wl(e, t, n) {
  return t === nu ? Gr(K0(e, n)) : On(t) ? Y0(t, n) : Gr(G0(yn(e)));
}
function q0(e) {
  var t = ro(vr(e)), n = ["absolute", "fixed"].indexOf(on(e).position) >= 0, o = n && ht(e) ? Eo(e) : e;
  return On(o) ? t.filter(function(r) {
    return On(r) && au(r, o) && jt(r) !== "body";
  }) : [];
}
function X0(e, t, n, o) {
  var r = t === "clippingParents" ? q0(e) : [].concat(t), a = [].concat(r, [n]), s = a[0], i = a.reduce(function(u, c) {
    var f = wl(e, c, o);
    return u.top = Cn(f.top, u.top), u.right = Zo(f.right, u.right), u.bottom = Zo(f.bottom, u.bottom), u.left = Cn(f.left, u.left), u;
  }, wl(e, s, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function fu(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Vt(o) : null, a = o ? Hn(o) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
  switch (r) {
    case tt:
      u = { x: s, y: t.y - n.height };
      break;
    case yt:
      u = { x: s, y: t.y + t.height };
      break;
    case bt:
      u = { x: t.x + t.width, y: i };
      break;
    case nt:
      u = { x: t.x - n.width, y: i };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = r ? ka(r) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (a) {
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
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, u = i === void 0 ? b0 : i, c = n.rootBoundary, f = c === void 0 ? nu : c, p = n.elementContext, v = p === void 0 ? Qn : p, h = n.altBoundary, m = h === void 0 ? !1 : h, g = n.padding, E = g === void 0 ? 0 : g, d = lu(typeof E != "number" ? E : iu(E, wo)), C = v === Qn ? _0 : Qn, L = e.rects.popper, S = e.elements[m ? C : v], y = X0(On(S) ? S : S.contextElement || yn(e.elements.popper), u, f, s), A = Un(e.elements.reference), O = fu({ reference: A, element: L, placement: r }), z = Gr(Object.assign({}, L, O)), W = v === Qn ? z : A, ee = { top: y.top - W.top + d.top, bottom: W.bottom - y.bottom + d.bottom, left: y.left - W.left + d.left, right: W.right - y.right + d.right }, ne = e.modifiersData.offset;
  if (v === Qn && ne) {
    var J = ne[r];
    Object.keys(ee).forEach(function(le) {
      var ye = [bt, yt].indexOf(le) >= 0 ? 1 : -1, N = [tt, yt].indexOf(le) >= 0 ? "y" : "x";
      ee[le] += J[N] * ye;
    });
  }
  return ee;
}
function Z0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? mr : u, f = Hn(o), p = f ? i ? hl : hl.filter(function(m) {
    return Hn(m) === f;
  }) : wo, v = p.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  v.length === 0 && (v = p);
  var h = v.reduce(function(m, g) {
    return m[g] = go(e, { placement: g, boundary: r, rootBoundary: a, padding: s })[Vt(g)], m;
  }, {});
  return Object.keys(h).sort(function(m, g) {
    return h[m] - h[g];
  });
}
function J0(e) {
  if (Vt(e) === Oa) return [];
  var t = xo(e);
  return [_l(e), t, _l(t)];
}
function Q0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !0 : s, u = n.fallbackPlacements, c = n.padding, f = n.boundary, p = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, g = n.allowedAutoPlacements, E = t.options.placement, d = Vt(E), C = d === E, L = u || (C || !m ? [xo(E)] : J0(E)), S = [E].concat(L).reduce(function(We, Be) {
      return We.concat(Vt(Be) === Oa ? Z0(t, { placement: Be, boundary: f, rootBoundary: p, padding: c, flipVariations: m, allowedAutoPlacements: g }) : Be);
    }, []), y = t.rects.reference, A = t.rects.popper, O = /* @__PURE__ */ new Map(), z = !0, W = S[0], ee = 0; ee < S.length; ee++) {
      var ne = S[ee], J = Vt(ne), le = Hn(ne) === zn, ye = [tt, yt].indexOf(J) >= 0, N = ye ? "width" : "height", $ = go(t, { placement: ne, boundary: f, rootBoundary: p, altBoundary: v, padding: c }), I = ye ? le ? bt : nt : le ? yt : tt;
      y[N] > A[N] && (I = xo(I));
      var H = xo(I), j = [];
      if (a && j.push($[J] <= 0), i && j.push($[I] <= 0, $[H] <= 0), j.every(function(We) {
        return We;
      })) {
        W = ne, z = !1;
        break;
      }
      O.set(ne, j);
    }
    if (z) for (var ie = m ? 3 : 1, Y = function(We) {
      var Be = S.find(function(Ue) {
        var He = O.get(Ue);
        if (He) return He.slice(0, We).every(function(be) {
          return be;
        });
      });
      if (Be) return W = Be, "break";
    }, Me = ie; Me > 0; Me--) {
      var we = Y(Me);
      if (we === "break") break;
    }
    t.placement !== W && (t.modifiersData[o]._skip = !0, t.placement = W, t.reset = !0);
  }
}
var ey = { name: "flip", enabled: !0, phase: "main", fn: Q0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function El(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Cl(e) {
  return [tt, bt, yt, nt].some(function(t) {
    return e[t] >= 0;
  });
}
function ty(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, s = go(t, { elementContext: "reference" }), i = go(t, { altBoundary: !0 }), u = El(s, o), c = El(i, r, a), f = Cl(u), p = Cl(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var ny = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: ty };
function oy(e, t, n) {
  var o = Vt(e), r = [nt, tt].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * r, [nt, bt].indexOf(o) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function ry(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, s = mr.reduce(function(f, p) {
    return f[p] = oy(p, t.rects, a), f;
  }, {}), i = s[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = s;
}
var ay = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ry };
function sy(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = fu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var pu = { name: "popperOffsets", enabled: !0, phase: "read", fn: sy, data: {} };
function ly(e) {
  return e === "x" ? "y" : "x";
}
function iy(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !1 : s, u = n.boundary, c = n.rootBoundary, f = n.altBoundary, p = n.padding, v = n.tether, h = v === void 0 ? !0 : v, m = n.tetherOffset, g = m === void 0 ? 0 : m, E = go(t, { boundary: u, rootBoundary: c, padding: p, altBoundary: f }), d = Vt(t.placement), C = Hn(t.placement), L = !C, S = ka(d), y = ly(S), A = t.modifiersData.popperOffsets, O = t.rects.reference, z = t.rects.popper, W = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, ee = typeof W == "number" ? { mainAxis: W, altAxis: W } : Object.assign({ mainAxis: 0, altAxis: 0 }, W), ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = { x: 0, y: 0 };
  if (A) {
    if (a) {
      var le, ye = S === "y" ? tt : nt, N = S === "y" ? yt : bt, $ = S === "y" ? "height" : "width", I = A[S], H = I + E[ye], j = I - E[N], ie = h ? -z[$] / 2 : 0, Y = C === zn ? O[$] : z[$], Me = C === zn ? -z[$] : -O[$], we = t.elements.arrow, We = h && we ? La(we) : { width: 0, height: 0 }, Be = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : su(), Ue = Be[ye], He = Be[N], be = oo(0, O[$], We[$]), rt = L ? O[$] / 2 - ie - be - Ue - ee.mainAxis : Y - be - Ue - ee.mainAxis, pt = L ? -O[$] / 2 + ie + be + He + ee.mainAxis : Me + be + He + ee.mainAxis, at = t.elements.arrow && Eo(t.elements.arrow), _t = at ? S === "y" ? at.clientTop || 0 : at.clientLeft || 0 : 0, st = (le = ne?.[S]) != null ? le : 0, lt = I + rt - st - _t, it = I + pt - st, mt = oo(h ? Zo(H, lt) : H, I, h ? Cn(j, it) : j);
      A[S] = mt, J[S] = mt - I;
    }
    if (i) {
      var Lt, w = S === "x" ? tt : nt, T = S === "x" ? yt : bt, F = A[y], G = y === "y" ? "height" : "width", de = F + E[w], oe = F - E[T], _ = [tt, nt].indexOf(d) !== -1, M = (Lt = ne?.[y]) != null ? Lt : 0, ue = _ ? de : F - O[G] - z[G] - M + ee.altAxis, me = _ ? F + O[G] + z[G] - M - ee.altAxis : oe, Ke = h && _ ? M0(ue, F, me) : oo(h ? ue : de, F, h ? me : oe);
      A[y] = Ke, J[y] = Ke - F;
    }
    t.modifiersData[o] = J;
  }
}
var uy = { name: "preventOverflow", enabled: !0, phase: "main", fn: iy, requiresIfExists: ["offset"] };
function cy(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function dy(e) {
  return e === ft(e) || !ht(e) ? Ia(e) : cy(e);
}
function fy(e) {
  var t = e.getBoundingClientRect(), n = Wn(t.width) / e.offsetWidth || 1, o = Wn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function py(e, t, n) {
  n === void 0 && (n = !1);
  var o = ht(t), r = ht(t) && fy(t), a = yn(t), s = Un(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (o || !o && !n) && ((jt(t) !== "body" || Na(a)) && (i = dy(t)), ht(t) ? (u = Un(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Pa(a))), { x: s.left + i.scrollLeft - u.x, y: s.top + i.scrollTop - u.y, width: s.width, height: s.height };
}
function my(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var u = t.get(i);
        u && r(u);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function vy(e) {
  var t = my(e);
  return I0.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function gy(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function hy(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Sl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Tl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ra(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? Sl : r;
  return function(s, i, u) {
    u === void 0 && (u = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Sl, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, f = [], p = !1, v = { state: c, setOptions: function(g) {
      var E = typeof g == "function" ? g(c.options) : g;
      m(), c.options = Object.assign({}, a, c.options, E), c.scrollParents = { reference: On(s) ? ro(s) : s.contextElement ? ro(s.contextElement) : [], popper: ro(i) };
      var d = vy(hy([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = d.filter(function(C) {
        return C.enabled;
      }), h(), v.update();
    }, forceUpdate: function() {
      if (!p) {
        var g = c.elements, E = g.reference, d = g.popper;
        if (Tl(E, d)) {
          c.rects = { reference: py(E, Eo(d), c.options.strategy === "fixed"), popper: La(d) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(z) {
            return c.modifiersData[z.name] = Object.assign({}, z.data);
          });
          for (var C = 0; C < c.orderedModifiers.length; C++) {
            if (c.reset === !0) {
              c.reset = !1, C = -1;
              continue;
            }
            var L = c.orderedModifiers[C], S = L.fn, y = L.options, A = y === void 0 ? {} : y, O = L.name;
            typeof S == "function" && (c = S({ state: c, options: A, name: O, instance: v }) || c);
          }
        }
      }
    }, update: gy(function() {
      return new Promise(function(g) {
        v.forceUpdate(), g(c);
      });
    }), destroy: function() {
      m(), p = !0;
    } };
    if (!Tl(s, i)) return v;
    v.setOptions(u).then(function(g) {
      !p && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      c.orderedModifiers.forEach(function(g) {
        var E = g.name, d = g.options, C = d === void 0 ? {} : d, L = g.effect;
        if (typeof L == "function") {
          var S = L({ state: c, name: E, instance: v, options: C }), y = function() {
          };
          f.push(S || y);
        }
      });
    }
    function m() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return v;
  };
}
Ra();
var yy = [cu, pu, uu, ou];
Ra({ defaultModifiers: yy });
var by = [cu, pu, uu, ou, ay, ey, uy, x0, ny], _y = Ra({ defaultModifiers: by });
const wy = ["fixed", "absolute"], Ey = Ce({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: re(Array),
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
    type: re(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: wy,
    default: "absolute"
  }
}), mu = Ce({
  ...Ey,
  id: String,
  style: {
    type: re([String, Array, Object])
  },
  className: {
    type: re([String, Array, Object])
  },
  effect: {
    type: re(String),
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
    type: re([String, Array, Object])
  },
  popperStyle: {
    type: re([String, Array, Object])
  },
  referenceEl: {
    type: re(Object)
  },
  triggerTargetEl: {
    type: re(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...In(["ariaLabel"])
}), Cy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Sy = (e, t) => {
  const n = x(!1), o = x();
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
}, Ty = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Ay(e), ...t]
  };
  return Ly(a, r?.modifiers), a;
}, Oy = (e) => {
  if (Re)
    return Xt(e);
};
function Ay(e) {
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
function Ly(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const ky = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = Iy(u);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, r = k(() => {
    const { onFirstUpdate: u, placement: c, strategy: f, modifiers: p } = l(n);
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
  }), a = fn(), s = x({
    styles: {
      popper: {
        position: l(r).strategy,
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
  return se(r, (u) => {
    const c = l(a);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), se([e, t], ([u, c]) => {
    i(), !(!u || !c) && (a.value = _y(u, c, l(r)));
  }), zt(() => {
    i();
  }), {
    state: k(() => {
      var u;
      return { ...((u = l(a)) == null ? void 0 : u.state) || {} };
    }),
    styles: k(() => l(s).styles),
    attributes: k(() => l(s).attributes),
    update: () => {
      var u;
      return (u = l(a)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = l(a)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: k(() => l(a))
  };
};
function Iy(e) {
  const t = Object.keys(e.elements), n = Ko(t.map((r) => [r, e.styles[r] || {}])), o = Ko(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const Py = 0, Ny = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = he(Ca, void 0), a = x(), s = x(), i = k(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = k(() => {
    var d;
    const C = l(a), L = (d = l(s)) != null ? d : Py;
    return {
      name: "arrow",
      enabled: !qv(C),
      options: {
        element: C,
        padding: L
      }
    };
  }), c = k(() => ({
    onFirstUpdate: () => {
      m();
    },
    ...Ty(e, [
      l(u),
      l(i)
    ])
  })), f = k(() => Oy(e.referenceEl) || l(o)), { attributes: p, state: v, styles: h, update: m, forceUpdate: g, instanceRef: E } = ky(f, n, c);
  return se(E, (d) => t.value = d), Pe(() => {
    se(() => {
      var d;
      return (d = l(f)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      m();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: E,
    state: v,
    styles: h,
    role: r,
    forceUpdate: g,
    update: m
  };
}, Ry = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = ki(), a = $e("popper"), s = k(() => l(t).popper), i = x(ge(e.zIndex) ? e.zIndex : r()), u = k(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = k(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), f = k(() => o.value === "dialog" ? "false" : void 0), p = k(() => l(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: u,
    contentStyle: c,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = ge(e.zIndex) ? e.zIndex : r();
    }
  };
}, $y = Z({
  name: "ElPopperContent"
}), My = /* @__PURE__ */ Z({
  ...$y,
  props: mu,
  emits: Cy,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: f
    } = Sy(o, n), { attributes: p, arrowRef: v, contentRef: h, styles: m, instanceRef: g, role: E, update: d } = Ny(o), {
      ariaModal: C,
      arrowStyle: L,
      contentAttrs: S,
      contentClass: y,
      contentStyle: A,
      updateZIndex: O
    } = Ry(o, {
      styles: m,
      attributes: p,
      role: E
    }), z = he(Xo, void 0), W = x();
    xt(qi, {
      arrowStyle: L,
      arrowRef: v,
      arrowOffset: W
    }), z && xt(Xo, {
      ...z,
      addInputId: fo,
      removeInputId: fo
    });
    let ee;
    const ne = (le = !0) => {
      d(), le && O();
    }, J = () => {
      ne(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return Pe(() => {
      se(() => o.triggerTargetEl, (le, ye) => {
        ee?.(), ee = void 0;
        const N = l(le || h.value), $ = l(ye || h.value);
        St(N) && (ee = se([E, () => o.ariaLabel, C, () => o.id], (I) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, j) => {
            Qt(I[j]) ? N.removeAttribute(H) : N.setAttribute(H, I[j]);
          });
        }, { immediate: !0 })), $ !== N && St($) && ["role", "aria-label", "aria-modal", "id"].forEach((I) => {
          $.removeAttribute(I);
        });
      }, { immediate: !0 }), se(() => o.visible, J, { immediate: !0 });
    }), zt(() => {
      ee?.(), ee = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: g,
      updatePopper: ne,
      contentStyle: A
    }), (le, ye) => (P(), U("div", Dn({
      ref_key: "contentRef",
      ref: h
    }, l(S), {
      style: l(A),
      class: l(y),
      tabindex: "-1",
      onMouseenter: (N) => le.$emit("mouseenter", N),
      onMouseleave: (N) => le.$emit("mouseleave", N)
    }), [
      V(l(y0), {
        trapped: l(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(h),
        "focus-start-el": l(r),
        onFocusAfterTrapped: l(i),
        onFocusAfterReleased: l(s),
        onFocusin: l(u),
        onFocusoutPrevented: l(c),
        onReleaseRequested: l(f)
      }, {
        default: X(() => [
          ae(le.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Fy = /* @__PURE__ */ Se(My, [["__file", "content.vue"]]);
const Dy = At(Yh), $a = Symbol("elTooltip");
function Ol() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return bo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Vy = Ce({
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
}), xy = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: a } = Ol(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Ol();
  return {
    onOpen: (f) => {
      a(() => {
        o(f);
        const p = l(n);
        ge(p) && p > 0 && s(() => {
          r(f);
        }, p);
      }, l(e));
    },
    onClose: (f) => {
      i(), a(() => {
        r(f);
      }, l(t));
    }
  };
}, Ma = Ce({
  ...Vy,
  ...mu,
  appendTo: {
    type: re([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: re(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...In(["ariaLabel"])
}), vu = Ce({
  ...Ji,
  disabled: Boolean,
  trigger: {
    type: re([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: re(Array),
    default: () => [Dt.enter, Dt.numpadEnter, Dt.space]
  }
}), By = ur({
  type: re(Boolean),
  default: null
}), jy = ur({
  type: re(Function)
}), zy = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: By,
    [n]: jy
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: f,
      onHide: p
    }) => {
      const v = Qe(), { emit: h } = v, m = v.props, g = k(() => Ae(m[n])), E = k(() => m[e] === null), d = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), Ae(f) && f(O));
      }, C = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), Ae(p) && p(O));
      }, L = (O) => {
        if (m.disabled === !0 || Ae(c) && !c())
          return;
        const z = g.value && Re;
        z && h(t, !0), (E.value || !z) && d(O);
      }, S = (O) => {
        if (m.disabled === !0 || !Re)
          return;
        const z = g.value && Re;
        z && h(t, !1), (E.value || !z) && C(O);
      }, y = (O) => {
        pn(O) && (m.disabled && O ? g.value && h(t, !1) : s.value !== O && (O ? d() : C()));
      }, A = () => {
        s.value ? S() : L();
      };
      return se(() => m[e], y), u && v.appContext.config.globalProperties.$route !== void 0 && se(() => ({
        ...v.proxy.$route
      }), () => {
        u.value && s.value && S();
      }), Pe(() => {
        y(m[e]);
      }), {
        hide: S,
        show: L,
        toggle: A,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: Wy,
  useModelToggleEmits: Uy,
  useModelToggle: Hy
} = zy("visible"), Ky = Ce({
  ...Xi,
  ...Wy,
  ...Ma,
  ...vu,
  ...Zi,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Gy = [
  ...Uy,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Yy = (e, t) => Rt(e) ? e.includes(t) : e === t, Rn = (e, t, n) => (o) => {
  Yy(l(e), t) && n(o);
}, Kt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e?.(r);
  if (n === !1 || !a)
    return t?.(r);
}, qy = Z({
  name: "ElTooltipTrigger"
}), Xy = /* @__PURE__ */ Z({
  ...qy,
  props: vu,
  setup(e, { expose: t }) {
    const n = e, o = $e("tooltip"), { controlled: r, id: a, open: s, onOpen: i, onClose: u, onToggle: c } = he($a, void 0), f = x(null), p = () => {
      if (l(r) || n.disabled)
        return !0;
    }, v = Gt(n, "trigger"), h = Kt(p, Rn(v, "hover", i)), m = Kt(p, Rn(v, "hover", u)), g = Kt(p, Rn(v, "click", (S) => {
      S.button === 0 && c(S);
    })), E = Kt(p, Rn(v, "focus", i)), d = Kt(p, Rn(v, "focus", u)), C = Kt(p, Rn(v, "contextmenu", (S) => {
      S.preventDefault(), c(S);
    })), L = Kt(p, (S) => {
      const { code: y } = S;
      n.triggerKeys.includes(y) && (S.preventDefault(), c(S));
    });
    return t({
      triggerRef: f
    }), (S, y) => (P(), te(l(r0), {
      id: l(a),
      "virtual-ref": S.virtualRef,
      open: l(s),
      "virtual-triggering": S.virtualTriggering,
      class: B(l(o).e("trigger")),
      onBlur: l(d),
      onClick: l(g),
      onContextmenu: l(C),
      onFocus: l(E),
      onMouseenter: l(h),
      onMouseleave: l(m),
      onKeydown: l(L)
    }, {
      default: X(() => [
        ae(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Zy = /* @__PURE__ */ Se(Xy, [["__file", "trigger.vue"]]);
const Jy = Ce({
  to: {
    type: re([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Qy = /* @__PURE__ */ Z({
  __name: "teleport",
  props: Jy,
  setup(e) {
    return (t, n) => t.disabled ? ae(t.$slots, "default", { key: 0 }) : (P(), te(Qu, {
      key: 1,
      to: t.to
    }, [
      ae(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var eb = /* @__PURE__ */ Se(Qy, [["__file", "teleport.vue"]]);
const tb = At(eb), gu = () => {
  const e = sa(), t = Hi(), n = k(() => `${e.value}-popper-container-${t.prefix}`), o = k(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, nb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, ob = () => {
  const { id: e, selector: t } = gu();
  return ec(() => {
    Re && (document.body.querySelector(t.value) || nb(e.value));
  }), {
    id: e,
    selector: t
  };
}, rb = Z({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ab = /* @__PURE__ */ Z({
  ...rb,
  props: Ma,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = gu(), r = $e("tooltip"), a = x();
    let s;
    const {
      controlled: i,
      id: u,
      open: c,
      trigger: f,
      onClose: p,
      onOpen: v,
      onShow: h,
      onHide: m,
      onBeforeShow: g,
      onBeforeHide: E
    } = he($a, void 0), d = k(() => n.transition || `${r.namespace.value}-fade-in-linear`), C = k(() => n.persistent);
    zt(() => {
      s?.();
    });
    const L = k(() => l(C) ? !0 : l(c)), S = k(() => n.disabled ? !1 : l(c)), y = k(() => n.appendTo || o.value), A = k(() => {
      var I;
      return (I = n.style) != null ? I : {};
    }), O = x(!0), z = () => {
      m(), $() && Ht(document.body), O.value = !0;
    }, W = () => {
      if (l(i))
        return !0;
    }, ee = Kt(W, () => {
      n.enterable && l(f) === "hover" && v();
    }), ne = Kt(W, () => {
      l(f) === "hover" && p();
    }), J = () => {
      var I, H;
      (H = (I = a.value) == null ? void 0 : I.updatePopper) == null || H.call(I), g?.();
    }, le = () => {
      E?.();
    }, ye = () => {
      h(), s = fg(k(() => {
        var I;
        return (I = a.value) == null ? void 0 : I.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(f) !== "hover" && p();
      });
    }, N = () => {
      n.virtualTriggering || p();
    }, $ = (I) => {
      var H;
      const j = (H = a.value) == null ? void 0 : H.popperContentRef, ie = I?.relatedTarget || document.activeElement;
      return j?.contains(ie);
    };
    return se(() => l(c), (I) => {
      I ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), se(() => n.content, () => {
      var I, H;
      (H = (I = a.value) == null ? void 0 : I.updatePopper) == null || H.call(I);
    }), t({
      contentRef: a,
      isFocusInsideContent: $
    }), (I, H) => (P(), te(l(tb), {
      disabled: !I.teleported,
      to: l(y)
    }, {
      default: X(() => [
        V(Yn, {
          name: l(d),
          onAfterLeave: z,
          onBeforeEnter: J,
          onAfterEnter: ye,
          onBeforeLeave: le
        }, {
          default: X(() => [
            l(L) ? xe((P(), te(l(Fy), Dn({
              key: 0,
              id: l(u),
              ref_key: "contentRef",
              ref: a
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
              "popper-style": [I.popperStyle, l(A)],
              "reference-el": I.referenceEl,
              "trigger-target-el": I.triggerTargetEl,
              visible: l(S),
              "z-index": I.zIndex,
              onMouseenter: l(ee),
              onMouseleave: l(ne),
              onBlur: N,
              onClose: l(p)
            }), {
              default: X(() => [
                ae(I.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [tn, l(S)]
            ]) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var sb = /* @__PURE__ */ Se(ab, [["__file", "content.vue"]]);
const lb = Z({
  name: "ElTooltip"
}), ib = /* @__PURE__ */ Z({
  ...lb,
  props: Ky,
  emits: Gy,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    ob();
    const r = dr(), a = x(), s = x(), i = () => {
      var d;
      const C = l(a);
      C && ((d = C.popperInstanceRef) == null || d.update());
    }, u = x(!1), c = x(), { show: f, hide: p, hasUpdateHandler: v } = Hy({
      indicator: u,
      toggleReason: c
    }), { onOpen: h, onClose: m } = xy({
      showAfter: Gt(o, "showAfter"),
      hideAfter: Gt(o, "hideAfter"),
      autoClose: Gt(o, "autoClose"),
      open: f,
      close: p
    }), g = k(() => pn(o.visible) && !v.value);
    xt($a, {
      controlled: g,
      id: r,
      open: Xr(u),
      trigger: Gt(o, "trigger"),
      onOpen: (d) => {
        h(d);
      },
      onClose: (d) => {
        m(d);
      },
      onToggle: (d) => {
        l(u) ? m(d) : h(d);
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
      updatePopper: i
    }), se(() => o.disabled, (d) => {
      d && u.value && (u.value = !1);
    });
    const E = (d) => {
      var C;
      return (C = s.value) == null ? void 0 : C.isFocusInsideContent(d);
    };
    return tc(() => u.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: i,
      onOpen: h,
      onClose: m,
      hide: p
    }), (d, C) => (P(), te(l(Dy), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: X(() => [
        V(Zy, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: X(() => [
            d.$slots.default ? ae(d.$slots, "default", { key: 0 }) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        V(sb, {
          ref_key: "contentRef",
          ref: s,
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
          default: X(() => [
            ae(d.$slots, "content", {}, () => [
              d.rawContent ? (P(), U("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (P(), U("span", { key: 1 }, D(d.content), 1))
            ]),
            d.showArrow ? (P(), te(l(Zh), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var ub = /* @__PURE__ */ Se(ib, [["__file", "tooltip.vue"]]);
const cb = At(ub), db = Ce({
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
    type: re([String, Object, Array])
  },
  offset: {
    type: re(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), fb = Z({
  name: "ElBadge"
}), pb = /* @__PURE__ */ Z({
  ...fb,
  props: db,
  setup(e, { expose: t }) {
    const n = e, o = $e("badge"), r = k(() => n.isDot ? "" : ge(n.value) && ge(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = k(() => {
      var s, i, u, c, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: jn(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: jn((c = (u = n.offset) == null ? void 0 : u[1]) != null ? c : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: r
    }), (s, i) => (P(), U("div", {
      class: B(l(o).b())
    }, [
      ae(s.$slots, "default"),
      V(Yn, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: X(() => [
          xe(b("sup", {
            class: B([
              l(o).e("content"),
              l(o).em("content", s.type),
              l(o).is("fixed", !!s.$slots.default),
              l(o).is("dot", s.isDot),
              l(o).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: je(l(a))
          }, [
            ae(s.$slots, "content", { value: l(r) }, () => [
              Ze(D(l(r)), 1)
            ])
          ], 6), [
            [tn, !s.hidden && (l(r) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var mb = /* @__PURE__ */ Se(pb, [["__file", "badge.vue"]]);
const vb = At(mb), gb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Yr = Ce({
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
}), hb = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, yb = Z({
  name: "ElTag"
}), bb = /* @__PURE__ */ Z({
  ...yb,
  props: Yr,
  emits: hb,
  setup(e, { emit: t }) {
    const n = e, o = _o(), r = $e("tag"), a = k(() => {
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
    }), s = (c) => {
      t("close", c);
    }, i = (c) => {
      t("click", c);
    }, u = (c) => {
      var f, p, v;
      (v = (p = (f = c?.component) == null ? void 0 : f.subTree) == null ? void 0 : p.component) != null && v.bum && (c.component.subTree.component.bum = null);
    };
    return (c, f) => c.disableTransitions ? (P(), U("span", {
      key: 0,
      class: B(l(a)),
      style: je({ backgroundColor: c.color }),
      onClick: i
    }, [
      b("span", {
        class: B(l(r).e("content"))
      }, [
        ae(c.$slots, "default")
      ], 2),
      c.closable ? (P(), te(l(Ne), {
        key: 0,
        class: B(l(r).e("close")),
        onClick: Te(s, ["stop"])
      }, {
        default: X(() => [
          V(l(Yo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : q("v-if", !0)
    ], 6)) : (P(), te(Yn, {
      key: 1,
      name: `${l(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: u
    }, {
      default: X(() => [
        b("span", {
          class: B(l(a)),
          style: je({ backgroundColor: c.color }),
          onClick: i
        }, [
          b("span", {
            class: B(l(r).e("content"))
          }, [
            ae(c.$slots, "default")
          ], 2),
          c.closable ? (P(), te(l(Ne), {
            key: 0,
            class: B(l(r).e("close")),
            onClick: Te(s, ["stop"])
          }, {
            default: X(() => [
              V(l(Yo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : q("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var _b = /* @__PURE__ */ Se(bb, [["__file", "tag.vue"]]);
const wb = At(_b), ln = /* @__PURE__ */ new Map();
if (Re) {
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
function Al(e, t) {
  let n = [];
  return Rt(t.arg) ? n = t.arg : St(t.arg) && n.push(t.arg), function(o, r) {
    const a = t.instance.popperRef, s = o.target, i = r?.target, u = !t || !t.instance, c = !s || !i, f = e.contains(s) || e.contains(i), p = e === s, v = n.length && n.some((m) => m?.contains(s)) || n.length && n.includes(i), h = a && (a.contains(s) || a.contains(i));
    u || c || f || p || v || h || t.value(o, r);
  };
}
const Eb = {
  beforeMount(e, t) {
    ln.has(e) || ln.set(e, []), ln.get(e).push({
      documentHandler: Al(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ln.has(e) || ln.set(e, []);
    const n = ln.get(e), o = n.findIndex((a) => a.bindingFn === t.oldValue), r = {
      documentHandler: Al(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    ln.delete(e);
  }
}, Cb = Ce({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: re(Object)
  },
  size: cr,
  button: {
    type: re(Object)
  },
  experimentalFeatures: {
    type: re(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: re(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...$i
}), wt = {};
Z({
  name: "ElConfigProvider",
  props: Cb,
  setup(e, { slots: t }) {
    se(() => e.message, (o) => {
      Object.assign(wt, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Di(e);
    return () => ae(t, "default", { config: n?.value });
  }
});
const Sb = 100, Tb = 600, Ll = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = Sb, delay: r = Tb } = Ae(n) ? {} : n;
    let a, s;
    const i = () => Ae(n) ? n() : n.handler(), u = () => {
      s && (clearTimeout(s), s = void 0), a && (clearInterval(a), a = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (u(), i(), document.addEventListener("mouseup", () => u(), {
        once: !0
      }), s = setTimeout(() => {
        a = setInterval(() => {
          i();
        }, o);
      }, r));
    });
  }
}, Ob = Ce({
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
}), Ab = {
  [nn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [en]: (e) => ge(e) || Qt(e),
  [Ve]: (e) => ge(e) || Qt(e)
}, Lb = Z({
  name: "ElInputNumber"
}), kb = /* @__PURE__ */ Z({
  ...Lb,
  props: Ob,
  emits: Ab,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = ga(), a = $e("input-number"), s = x(), i = Sn({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: u } = fr(), c = k(() => ge(o.modelValue) && o.modelValue <= o.min), f = k(() => ge(o.modelValue) && o.modelValue >= o.max), p = k(() => {
      const N = d(o.step);
      return $t(o.precision) ? Math.max(d(o.modelValue), N) : (N > o.precision, o.precision);
    }), v = k(() => o.controls && o.controlsPosition === "right"), h = _o(), m = wa(), g = k(() => {
      if (i.userInput !== null)
        return i.userInput;
      let N = i.currentValue;
      if (Qt(N))
        return "";
      if (ge(N)) {
        if (Number.isNaN(N))
          return "";
        $t(o.precision) || (N = N.toFixed(o.precision));
      }
      return N;
    }), E = (N, $) => {
      if ($t($) && ($ = p.value), $ === 0)
        return Math.round(N);
      let I = String(N);
      const H = I.indexOf(".");
      if (H === -1 || !I.replace(".", "").split("")[H + $])
        return N;
      const Y = I.length;
      return I.charAt(Y - 1) === "5" && (I = `${I.slice(0, Math.max(0, Y - 1))}6`), Number.parseFloat(Number(I).toFixed($));
    }, d = (N) => {
      if (Qt(N))
        return 0;
      const $ = N.toString(), I = $.indexOf(".");
      let H = 0;
      return I !== -1 && (H = $.length - I - 1), H;
    }, C = (N, $ = 1) => ge(N) ? E(N + o.step * $) : i.currentValue, L = () => {
      if (o.readonly || m.value || f.value)
        return;
      const N = Number(g.value) || 0, $ = C(N);
      A($), n(en, i.currentValue), le();
    }, S = () => {
      if (o.readonly || m.value || c.value)
        return;
      const N = Number(g.value) || 0, $ = C(N, -1);
      A($), n(en, i.currentValue), le();
    }, y = (N, $) => {
      const { max: I, min: H, step: j, precision: ie, stepStrictly: Y, valueOnClear: Me } = o;
      I < H && va("InputNumber", "min should not be greater than max.");
      let we = Number(N);
      if (Qt(N) || Number.isNaN(we))
        return null;
      if (N === "") {
        if (Me === null)
          return null;
        we = Xe(Me) ? { min: H, max: I }[Me] : Me;
      }
      return Y && (we = E(Math.round(we / j) * j, ie), we !== N && $ && n(Ve, we)), $t(ie) || (we = E(we, ie)), (we > I || we < H) && (we = we > I ? I : H, $ && n(Ve, we)), we;
    }, A = (N, $ = !0) => {
      var I;
      const H = i.currentValue, j = y(N);
      if (!$) {
        n(Ve, j);
        return;
      }
      H === j && N || (i.userInput = null, n(Ve, j), H !== j && n(nn, j, H), o.validateEvent && ((I = u?.validate) == null || I.call(u, "change").catch((ie) => void 0)), i.currentValue = j);
    }, O = (N) => {
      i.userInput = N;
      const $ = N === "" ? null : Number(N);
      n(en, $), A($, !1);
    }, z = (N) => {
      const $ = N !== "" ? Number(N) : "";
      (ge($) && !Number.isNaN($) || N === "") && A($), le(), i.userInput = null;
    }, W = () => {
      var N, $;
      ($ = (N = s.value) == null ? void 0 : N.focus) == null || $.call(N);
    }, ee = () => {
      var N, $;
      ($ = (N = s.value) == null ? void 0 : N.blur) == null || $.call(N);
    }, ne = (N) => {
      n("focus", N);
    }, J = (N) => {
      var $, I;
      i.userInput = null, Wi() && i.currentValue === null && (($ = s.value) != null && $.input) && (s.value.input.value = ""), n("blur", N), o.validateEvent && ((I = u?.validate) == null || I.call(u, "blur").catch((H) => void 0));
    }, le = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, ye = (N) => {
      document.activeElement === N.target && N.preventDefault();
    };
    return se(() => o.modelValue, (N, $) => {
      const I = y(N, !0);
      i.userInput === null && I !== $ && (i.currentValue = I);
    }, { immediate: !0 }), Pe(() => {
      var N;
      const { min: $, max: I, modelValue: H } = o, j = (N = s.value) == null ? void 0 : N.input;
      if (j.setAttribute("role", "spinbutton"), Number.isFinite(I) ? j.setAttribute("aria-valuemax", String(I)) : j.removeAttribute("aria-valuemax"), Number.isFinite($) ? j.setAttribute("aria-valuemin", String($)) : j.removeAttribute("aria-valuemin"), j.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), j.setAttribute("aria-disabled", String(m.value)), !ge(H) && H != null) {
        let ie = Number(H);
        Number.isNaN(ie) && (ie = null), n(Ve, ie);
      }
      j.addEventListener("wheel", ye, { passive: !1 });
    }), Ml(() => {
      var N, $;
      const I = (N = s.value) == null ? void 0 : N.input;
      I?.setAttribute("aria-valuenow", `${($ = i.currentValue) != null ? $ : ""}`);
    }), t({
      focus: W,
      blur: ee
    }), (N, $) => (P(), U("div", {
      class: B([
        l(a).b(),
        l(a).m(l(h)),
        l(a).is("disabled", l(m)),
        l(a).is("without-controls", !N.controls),
        l(a).is("controls-right", l(v))
      ]),
      onDragstart: Te(() => {
      }, ["prevent"])
    }, [
      N.controls ? xe((P(), U("span", {
        key: 0,
        role: "button",
        "aria-label": l(r)("el.inputNumber.decrease"),
        class: B([l(a).e("decrease"), l(a).is("disabled", l(c))]),
        onKeydown: gt(S, ["enter"])
      }, [
        ae(N.$slots, "decrease-icon", {}, () => [
          V(l(Ne), null, {
            default: X(() => [
              l(v) ? (P(), te(l(Bi), { key: 0 })) : (P(), te(l(nh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(Ll), S]
      ]) : q("v-if", !0),
      N.controls ? xe((P(), U("span", {
        key: 1,
        role: "button",
        "aria-label": l(r)("el.inputNumber.increase"),
        class: B([l(a).e("increase"), l(a).is("disabled", l(f))]),
        onKeydown: gt(L, ["enter"])
      }, [
        ae(N.$slots, "increase-icon", {}, () => [
          V(l(Ne), null, {
            default: X(() => [
              l(v) ? (P(), te(l(Wg), { key: 0 })) : (P(), te(l(rh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(Ll), L]
      ]) : q("v-if", !0),
      V(l(kh), {
        id: N.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: N.step,
        "model-value": l(g),
        placeholder: N.placeholder,
        readonly: N.readonly,
        disabled: l(m),
        size: l(h),
        max: N.max,
        min: N.min,
        name: N.name,
        "aria-label": N.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          gt(Te(L, ["prevent"]), ["up"]),
          gt(Te(S, ["prevent"]), ["down"])
        ],
        onBlur: J,
        onFocus: ne,
        onInput: O,
        onChange: z
      }, nc({
        _: 2
      }, [
        N.$slots.prefix ? {
          name: "prefix",
          fn: X(() => [
            ae(N.$slots, "prefix")
          ])
        } : void 0,
        N.$slots.suffix ? {
          name: "suffix",
          fn: X(() => [
            ae(N.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Ib = /* @__PURE__ */ Se(kb, [["__file", "input-number.vue"]]);
const Pb = At(Ib);
function Nb() {
  const e = fn(), t = x(0), n = 11, o = k(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return Nt(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const hu = Symbol("ElSelectGroup"), gr = Symbol("ElSelect");
function Rb(e, t) {
  const n = he(gr), o = he(hu, { disabled: !1 }), r = k(() => f(cn(n.props.modelValue), e.value)), a = k(() => {
    var h;
    if (n.props.multiple) {
      const m = cn((h = n.props.modelValue) != null ? h : []);
      return !r.value && m.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = k(() => e.label || (dt(e.value) ? "" : e.value)), i = k(() => e.value || e.label || ""), u = k(() => e.disabled || t.groupDisabled || a.value), c = Qe(), f = (h = [], m) => {
    if (dt(e.value)) {
      const g = n.props.valueKey;
      return h && h.some((E) => oc(dn(E, g)) === dn(m, g));
    } else
      return h && h.includes(m);
  }, p = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, v = (h) => {
    const m = new RegExp(gb(h), "i");
    t.visible = m.test(s.value) || e.created;
  };
  return se(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), se(() => e.value, (h, m) => {
    const { remote: g, valueKey: E } = n.props;
    if ((g ? h !== m : !no(h, m)) && (n.onOptionDestroy(m, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !g) {
      if (E && dt(h) && dt(m) && h[E] === m[E])
        return;
      n.setSelected();
    }
  }), se(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: r,
    isDisabled: u,
    hoverItem: p,
    updateOption: v
  };
}
const $b = Z({
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
    const t = $e("select"), n = dr(), o = k(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(i)),
      t.is("selected", l(s)),
      t.is("hovering", l(v))
    ]), r = Sn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: u,
      hoverItem: c,
      updateOption: f
    } = Rb(e, r), { visible: p, hover: v } = Zr(r), h = Qe().proxy;
    u.onOptionCreate(h), zt(() => {
      const g = h.value, { selected: E } = u.states, d = E.some((C) => C.value === h.value);
      Le(() => {
        u.states.cachedOptions.get(g) === h && !d && u.states.cachedOptions.delete(g);
      }), u.onOptionDestroy(g, h);
    });
    function m() {
      i.value || u.handleOptionSelect(h);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: u,
      hoverItem: c,
      updateOption: f,
      visible: p,
      hover: v,
      selectOptionClick: m,
      states: r
    };
  }
});
function Mb(e, t, n, o, r, a) {
  return xe((P(), U("li", {
    id: e.id,
    class: B(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Te(e.selectOptionClick, ["stop"])
  }, [
    ae(e.$slots, "default", {}, () => [
      b("span", null, D(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [tn, e.visible]
  ]);
}
var Fa = /* @__PURE__ */ Se($b, [["render", Mb], ["__file", "option.vue"]]);
const Fb = Z({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = he(gr), t = $e("select"), n = k(() => e.props.popperClass), o = k(() => e.props.multiple), r = k(() => e.props.fitInputWidth), a = x("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return Pe(() => {
      s(), Nt(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function Db(e, t, n, o, r, a) {
  return P(), U("div", {
    class: B([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: je({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (P(), U("div", {
      key: 0,
      class: B(e.ns.be("dropdown", "header"))
    }, [
      ae(e.$slots, "header")
    ], 2)) : q("v-if", !0),
    ae(e.$slots, "default"),
    e.$slots.footer ? (P(), U("div", {
      key: 1,
      class: B(e.ns.be("dropdown", "footer"))
    }, [
      ae(e.$slots, "footer")
    ], 2)) : q("v-if", !0)
  ], 6);
}
var Vb = /* @__PURE__ */ Se(Fb, [["render", Db], ["__file", "select-dropdown.vue"]]);
const xb = (e, t) => {
  const { t: n } = ga(), o = dr(), r = $e("select"), a = $e("input"), s = Sn({
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
  }), i = x(null), u = x(null), c = x(null), f = x(null), p = x(null), v = x(null), h = x(null), m = x(null), g = x(null), E = x(null), d = x(null), {
    isComposing: C,
    handleCompositionStart: L,
    handleCompositionUpdate: S,
    handleCompositionEnd: y
  } = Yi({
    afterComposition: (R) => Ke(R)
  }), { wrapperRef: A, isFocused: O, handleBlur: z } = Gi(p, {
    beforeFocus() {
      return $.value;
    },
    afterFocus() {
      e.automaticDropdown && !W.value && (W.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(R) {
      var K, ce;
      return ((K = c.value) == null ? void 0 : K.isFocusInsideContent(R)) || ((ce = f.value) == null ? void 0 : ce.isFocusInsideContent(R));
    },
    afterBlur() {
      W.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), W = x(!1), ee = x(), { form: ne, formItem: J } = fr(), { inputId: le } = _a(e, {
    formItemContext: J
  }), { valueOnClear: ye, isEmptyValue: N } = $g(e), $ = k(() => e.disabled || ne?.disabled), I = k(() => Rt(e.modelValue) ? e.modelValue.length > 0 : !N(e.modelValue)), H = k(() => {
    var R;
    return (R = ne?.statusIcon) != null ? R : !1;
  }), j = k(() => e.clearable && !$.value && s.inputHovering && I.value), ie = k(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Y = k(() => r.is("reverse", ie.value && W.value)), Me = k(() => J?.validateState || ""), we = k(() => zi[Me.value]), We = k(() => e.remote ? 300 : 0), Be = k(() => e.remote && !s.inputValue && s.options.size === 0), Ue = k(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && He.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), He = k(() => be.value.filter((R) => R.visible).length), be = k(() => {
    const R = Array.from(s.options.values()), K = [];
    return s.optionValues.forEach((ce) => {
      const Fe = R.findIndex((ut) => ut.value === ce);
      Fe > -1 && K.push(R[Fe]);
    }), K.length >= R.length ? K : R;
  }), rt = k(() => Array.from(s.cachedOptions.values())), pt = k(() => {
    const R = be.value.filter((K) => !K.created).some((K) => K.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !R;
  }), at = () => {
    e.filterable && Ae(e.filterMethod) || e.filterable && e.remote && Ae(e.remoteMethod) || be.value.forEach((R) => {
      var K;
      (K = R.updateOption) == null || K.call(R, s.inputValue);
    });
  }, _t = _o(), st = k(() => ["small"].includes(_t.value) ? "small" : "default"), lt = k({
    get() {
      return W.value && !Be.value;
    },
    set(R) {
      W.value = R;
    }
  }), it = k(() => {
    if (e.multiple && !$t(e.modelValue))
      return cn(e.modelValue).length === 0 && !s.inputValue;
    const R = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $t(R) ? !s.inputValue : !0;
  }), mt = k(() => {
    var R;
    const K = (R = e.placeholder) != null ? R : n("el.select.placeholder");
    return e.multiple || !I.value ? K : s.selectedLabel;
  }), Lt = k(() => Ur ? null : "mouseenter");
  se(() => e.modelValue, (R, K) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", w("")), F(), !no(R, K) && e.validateEvent && J?.validate("change").catch((ce) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), se(() => W.value, (R) => {
    R ? w(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", R);
  }), se(() => s.options.entries(), () => {
    Re && (F(), e.defaultFirstOption && (e.filterable || e.remote) && He.value && T());
  }, {
    flush: "post"
  }), se([() => s.hoveringIndex, be], ([R]) => {
    ge(R) && R > -1 ? ee.value = be.value[R] || {} : ee.value = {}, be.value.forEach((K) => {
      K.hover = ee.value === K;
    });
  }), $l(() => {
    s.isBeforeHide || at();
  });
  const w = (R) => {
    s.previousQuery === R || C.value || (s.previousQuery = R, e.filterable && Ae(e.filterMethod) ? e.filterMethod(R) : e.filterable && e.remote && Ae(e.remoteMethod) && e.remoteMethod(R), e.defaultFirstOption && (e.filterable || e.remote) && He.value ? Le(T) : Le(de));
  }, T = () => {
    const R = be.value.filter((ut) => ut.visible && !ut.disabled && !ut.states.groupDisabled), K = R.find((ut) => ut.created), ce = R[0], Fe = be.value.map((ut) => ut.value);
    s.hoveringIndex = ja(Fe, K || ce);
  }, F = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const K = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue, ce = G(K);
      s.selectedLabel = ce.currentLabel, s.selected = [ce];
      return;
    }
    const R = [];
    $t(e.modelValue) || cn(e.modelValue).forEach((K) => {
      R.push(G(K));
    }), s.selected = R;
  }, G = (R) => {
    let K;
    const ce = uf(R);
    for (let Pn = s.cachedOptions.size - 1; Pn >= 0; Pn--) {
      const sn = rt.value[Pn];
      if (ce ? dn(sn.value, e.valueKey) === dn(R, e.valueKey) : sn.value === R) {
        K = {
          value: R,
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
    const Fe = ce ? R.label : R ?? "";
    return {
      value: R,
      currentLabel: Fe
    };
  }, de = () => {
    s.hoveringIndex = be.value.findIndex((R) => s.selected.some((K) => To(K) === To(R)));
  }, oe = () => {
    s.selectionWidth = u.value.getBoundingClientRect().width;
  }, _ = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, M = () => {
    var R, K;
    (K = (R = c.value) == null ? void 0 : R.updatePopper) == null || K.call(R);
  }, ue = () => {
    var R, K;
    (K = (R = f.value) == null ? void 0 : R.updatePopper) == null || K.call(R);
  }, me = () => {
    s.inputValue.length > 0 && !W.value && (W.value = !0), w(s.inputValue);
  }, Ke = (R) => {
    if (s.inputValue = R.target.value, e.remote)
      bn();
    else
      return me();
  }, bn = Gv(() => {
    me();
  }, We.value), vt = (R) => {
    no(e.modelValue, R) || t(nn, R);
  }, hr = (R) => Yv(R, (K) => {
    const ce = s.cachedOptions.get(K);
    return ce && !ce.disabled && !ce.states.groupDisabled;
  }), Va = (R) => {
    if (e.multiple && R.code !== Dt.delete && R.target.value.length <= 0) {
      const K = cn(e.modelValue).slice(), ce = hr(K);
      if (ce < 0)
        return;
      const Fe = K[ce];
      K.splice(ce, 1), t(Ve, K), vt(K), t("remove-tag", Fe);
    }
  }, Ou = (R, K) => {
    const ce = s.selected.indexOf(K);
    if (ce > -1 && !$.value) {
      const Fe = cn(e.modelValue).slice();
      Fe.splice(ce, 1), t(Ve, Fe), vt(Fe), t("remove-tag", K.value);
    }
    R.stopPropagation(), So();
  }, xa = (R) => {
    R.stopPropagation();
    const K = e.multiple ? [] : ye.value;
    if (e.multiple)
      for (const ce of s.selected)
        ce.isDisabled && K.push(ce.value);
    t(Ve, K), vt(K), s.hoveringIndex = -1, W.value = !1, t("clear"), So();
  }, Ba = (R) => {
    var K;
    if (e.multiple) {
      const ce = cn((K = e.modelValue) != null ? K : []).slice(), Fe = ja(ce, R);
      Fe > -1 ? ce.splice(Fe, 1) : (e.multipleLimit <= 0 || ce.length < e.multipleLimit) && ce.push(R.value), t(Ve, ce), vt(ce), R.created && w(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Ve, R.value), vt(R.value), W.value = !1;
    So(), !W.value && Le(() => {
      Co(R);
    });
  }, ja = (R = [], K) => $t(K) ? -1 : dt(K.value) ? R.findIndex((ce) => no(dn(ce, e.valueKey), To(K))) : R.indexOf(K.value), Co = (R) => {
    var K, ce, Fe, ut, Pn;
    const sn = Rt(R) ? R[0] : R;
    let Oo = null;
    if (sn?.value) {
      const Xn = be.value.filter((Wu) => Wu.value === sn.value);
      Xn.length > 0 && (Oo = Xn[0].$el);
    }
    if (c.value && Oo) {
      const Xn = (ut = (Fe = (ce = (K = c.value) == null ? void 0 : K.popperRef) == null ? void 0 : ce.contentRef) == null ? void 0 : Fe.querySelector) == null ? void 0 : ut.call(Fe, `.${r.be("dropdown", "wrap")}`);
      Xn && Fg(Xn, Oo);
    }
    (Pn = d.value) == null || Pn.handleScroll();
  }, Au = (R) => {
    s.options.set(R.value, R), s.cachedOptions.set(R.value, R);
  }, Lu = (R, K) => {
    s.options.get(R) === K && s.options.delete(R);
  }, ku = k(() => {
    var R, K;
    return (K = (R = c.value) == null ? void 0 : R.popperRef) == null ? void 0 : K.contentRef;
  }), Iu = () => {
    s.isBeforeHide = !1, Le(() => {
      var R;
      (R = d.value) == null || R.update(), Co(s.selected);
    });
  }, So = () => {
    var R;
    (R = p.value) == null || R.focus();
  }, Pu = () => {
    var R;
    if (W.value) {
      W.value = !1, Le(() => {
        var K;
        return (K = p.value) == null ? void 0 : K.blur();
      });
      return;
    }
    (R = p.value) == null || R.blur();
  }, Nu = (R) => {
    xa(R);
  }, Ru = (R) => {
    if (W.value = !1, O.value) {
      const K = new FocusEvent("focus", R);
      Le(() => z(K));
    }
  }, $u = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : W.value = !1;
  }, za = () => {
    $.value || (Ur && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : W.value = !W.value);
  }, Mu = () => {
    if (!W.value)
      za();
    else {
      const R = be.value[s.hoveringIndex];
      R && !R.isDisabled && Ba(R);
    }
  }, To = (R) => dt(R.value) ? dn(R.value, e.valueKey) : R.value, Fu = k(() => be.value.filter((R) => R.visible).every((R) => R.isDisabled)), Du = k(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Vu = k(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Wa = (R) => {
    if (!W.value) {
      W.value = !0;
      return;
    }
    if (!(s.options.size === 0 || He.value === 0 || C.value) && !Fu.value) {
      R === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : R === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const K = be.value[s.hoveringIndex];
      (K.isDisabled || !K.visible) && Wa(R), Le(() => Co(ee.value));
    }
  }, xu = () => {
    if (!u.value)
      return 0;
    const R = window.getComputedStyle(u.value);
    return Number.parseFloat(R.gap || "6px");
  }, Bu = k(() => {
    const R = xu();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - R : s.selectionWidth}px` };
  }), ju = k(() => ({ maxWidth: `${s.selectionWidth}px` })), zu = (R) => {
    t("popup-scroll", R);
  };
  return Nt(u, oe), Nt(m, M), Nt(A, M), Nt(g, ue), Nt(E, _), Pe(() => {
    F();
  }), {
    inputId: le,
    contentId: o,
    nsSelect: r,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: W,
    optionsArray: be,
    hoverOption: ee,
    selectSize: _t,
    filteredOptionsCount: He,
    updateTooltip: M,
    updateTagTooltip: ue,
    debouncedOnInputChange: bn,
    onInput: Ke,
    deletePrevTag: Va,
    deleteTag: Ou,
    deleteSelected: xa,
    handleOptionSelect: Ba,
    scrollToOption: Co,
    hasModelValue: I,
    shouldShowPlaceholder: it,
    currentPlaceholder: mt,
    mouseEnterEventName: Lt,
    needStatusIcon: H,
    showClose: j,
    iconComponent: ie,
    iconReverse: Y,
    validateState: Me,
    validateIcon: we,
    showNewOption: pt,
    updateOptions: at,
    collapseTagSize: st,
    setSelected: F,
    selectDisabled: $,
    emptyText: Ue,
    handleCompositionStart: L,
    handleCompositionUpdate: S,
    handleCompositionEnd: y,
    onOptionCreate: Au,
    onOptionDestroy: Lu,
    handleMenuEnter: Iu,
    focus: So,
    blur: Pu,
    handleClearClick: Nu,
    handleClickOutside: Ru,
    handleEsc: $u,
    toggleMenu: za,
    selectOption: Mu,
    getValueKey: To,
    navigateOptions: Wa,
    dropdownMenuVisible: lt,
    showTagList: Du,
    collapseTagList: Vu,
    popupScroll: zu,
    tagStyle: Bu,
    collapseTagStyle: ju,
    popperRef: ku,
    inputRef: p,
    tooltipRef: c,
    tagTooltipRef: f,
    prefixRef: v,
    suffixRef: h,
    selectRef: i,
    wrapperRef: A,
    selectionRef: u,
    scrollbarRef: d,
    menuRef: m,
    tagMenuRef: g,
    collapseItemRef: E
  };
};
var Bb = Z({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = he(gr);
    let o = [];
    return () => {
      var r, a;
      const s = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function u(c) {
        Rt(c) && c.forEach((f) => {
          var p, v, h, m;
          const g = (p = f?.type || {}) == null ? void 0 : p.name;
          g === "ElOptionGroup" ? u(!Xe(f.children) && !Rt(f.children) && Ae((v = f.children) == null ? void 0 : v.default) ? (h = f.children) == null ? void 0 : h.default() : f.children) : g === "ElOption" ? i.push((m = f.props) == null ? void 0 : m.value) : Rt(f.children) && u(f.children);
        });
      }
      return s.length && u((a = s[0]) == null ? void 0 : a.children), no(i, o) || (o = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const jb = Ce({
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
    type: re(String),
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
    type: re(Object),
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
    default: Bi
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
    type: re(String),
    values: mr,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: re(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...$i,
  ...In(["ariaLabel"])
}), kl = "ElSelect", zb = Z({
  name: kl,
  componentName: kl,
  components: {
    ElSelectMenu: Vb,
    ElOption: Fa,
    ElOptions: Bb,
    ElTag: wb,
    ElScrollbar: Uh,
    ElTooltip: cb,
    ElIcon: Ne
  },
  directives: { ClickOutside: Eb },
  props: jb,
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
    }), r = xb(o, t), { calculatorRef: a, inputStyle: s } = Nb();
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
    const i = k(() => e.multiple ? r.states.selected.map((u) => u.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function Wb(e, t, n, o, r, a) {
  const s = _n("el-tag"), i = _n("el-tooltip"), u = _n("el-icon"), c = _n("el-option"), f = _n("el-options"), p = _n("el-scrollbar"), v = _n("el-select-menu"), h = rc("click-outside");
  return xe((P(), U("div", {
    ref: "selectRef",
    class: B([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [ac(e.mouseEnterEventName)]: (m) => e.states.inputHovering = !0,
    onMouseleave: (m) => e.states.inputHovering = !1
  }, [
    V(i, {
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
      onHide: (m) => e.states.isBeforeHide = !1
    }, {
      default: X(() => {
        var m;
        return [
          b("div", {
            ref: "wrapperRef",
            class: B([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Te(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (P(), U("div", {
              key: 0,
              ref: "prefixRef",
              class: B(e.nsSelect.e("prefix"))
            }, [
              ae(e.$slots, "prefix")
            ], 2)) : q("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: B([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ae(e.$slots, "tag", { key: 0 }, () => [
                (P(!0), U(qe, null, En(e.showTagList, (g) => (P(), U("div", {
                  key: e.getValueKey(g),
                  class: B(e.nsSelect.e("selected-item"))
                }, [
                  V(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: je(e.tagStyle),
                    onClose: (E) => e.deleteTag(E, g)
                  }, {
                    default: X(() => [
                      b("span", {
                        class: B(e.nsSelect.e("tags-text"))
                      }, [
                        ae(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          Ze(D(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (P(), te(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: X(() => [
                    b("div", {
                      ref: "collapseItemRef",
                      class: B(e.nsSelect.e("selected-item"))
                    }, [
                      V(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: je(e.collapseTagStyle)
                      }, {
                        default: X(() => [
                          b("span", {
                            class: B(e.nsSelect.e("tags-text"))
                          }, " + " + D(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: X(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: B(e.nsSelect.e("selection"))
                    }, [
                      (P(!0), U(qe, null, En(e.collapseTagList, (g) => (P(), U("div", {
                        key: e.getValueKey(g),
                        class: B(e.nsSelect.e("selected-item"))
                      }, [
                        V(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (E) => e.deleteTag(E, g)
                        }, {
                          default: X(() => [
                            b("span", {
                              class: B(e.nsSelect.e("tags-text"))
                            }, [
                              ae(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                Ze(D(g.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : q("v-if", !0)
              ]) : q("v-if", !0),
              b("div", {
                class: B([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                xe(b("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: B([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: je(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((m = e.hoverOption) == null ? void 0 : m.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    gt(Te((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    gt(Te((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    gt(Te(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    gt(Te(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    gt(Te(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Te(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [so, e.states.inputValue]
                ]),
                e.filterable ? (P(), U("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: B(e.nsSelect.e("input-calculator")),
                  textContent: D(e.states.inputValue)
                }, null, 10, ["textContent"])) : q("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (P(), U("div", {
                key: 1,
                class: B([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? ae(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  b("span", null, D(e.currentPlaceholder), 1)
                ]) : (P(), U("span", { key: 1 }, D(e.currentPlaceholder), 1))
              ], 2)) : q("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: B(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (P(), te(u, {
                key: 0,
                class: B([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: X(() => [
                  (P(), te(Je(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0),
              e.showClose && e.clearIcon ? (P(), te(u, {
                key: 1,
                class: B([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: X(() => [
                  (P(), te(Je(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : q("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (P(), te(u, {
                key: 2,
                class: B([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: X(() => [
                  (P(), te(Je(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: X(() => [
        V(v, { ref: "menuRef" }, {
          default: X(() => [
            e.$slots.header ? (P(), U("div", {
              key: 0,
              class: B(e.nsSelect.be("dropdown", "header")),
              onClick: Te(() => {
              }, ["stop"])
            }, [
              ae(e.$slots, "header")
            ], 10, ["onClick"])) : q("v-if", !0),
            xe(V(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: B([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: X(() => [
                e.showNewOption ? (P(), te(c, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : q("v-if", !0),
                V(f, null, {
                  default: X(() => [
                    ae(e.$slots, "default")
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
              class: B(e.nsSelect.be("dropdown", "loading"))
            }, [
              ae(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (P(), U("div", {
              key: 2,
              class: B(e.nsSelect.be("dropdown", "empty"))
            }, [
              ae(e.$slots, "empty", {}, () => [
                b("span", null, D(e.emptyText), 1)
              ])
            ], 2)) : q("v-if", !0),
            e.$slots.footer ? (P(), U("div", {
              key: 3,
              class: B(e.nsSelect.be("dropdown", "footer")),
              onClick: Te(() => {
              }, ["stop"])
            }, [
              ae(e.$slots, "footer")
            ], 10, ["onClick"])) : q("v-if", !0)
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
var Ub = /* @__PURE__ */ Se(zb, [["render", Wb], ["__file", "select.vue"]]);
const Hb = Z({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = $e("select"), n = x(null), o = Qe(), r = x([]);
    xt(hu, Sn({
      ...Zr(e)
    }));
    const a = k(() => r.value.some((c) => c.visible === !0)), s = (c) => {
      var f, p;
      return ((f = c.type) == null ? void 0 : f.name) === "ElOption" && !!((p = c.component) != null && p.proxy);
    }, i = (c) => {
      const f = cn(c), p = [];
      return f.forEach((v) => {
        var h, m;
        s(v) ? p.push(v.component.proxy) : (h = v.children) != null && h.length ? p.push(...i(v.children)) : (m = v.component) != null && m.subTree && p.push(...i(v.component.subTree));
      }), p;
    }, u = () => {
      r.value = i(o.subTree);
    };
    return Pe(() => {
      u();
    }), bg(n, u, {
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
function Kb(e, t, n, o, r, a) {
  return xe((P(), U("ul", {
    ref: "groupRef",
    class: B(e.ns.be("group", "wrap"))
  }, [
    b("li", {
      class: B(e.ns.be("group", "title"))
    }, D(e.label), 3),
    b("li", null, [
      b("ul", {
        class: B(e.ns.b("group"))
      }, [
        ae(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [tn, e.visible]
  ]);
}
var yu = /* @__PURE__ */ Se(Hb, [["render", Kb], ["__file", "option-group.vue"]]);
const Gb = At(Ub, {
  Option: Fa,
  OptionGroup: yu
}), Yb = xi(Fa);
xi(yu);
const qb = (e) => ["", ...ha].includes(e), Xb = Ce({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: qb
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
    type: re(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...In(["ariaLabel"])
}), Zb = {
  [Ve]: (e) => pn(e) || Xe(e) || ge(e),
  [nn]: (e) => pn(e) || Xe(e) || ge(e),
  [en]: (e) => pn(e) || Xe(e) || ge(e)
}, bu = "ElSwitch", Jb = Z({
  name: bu
}), Qb = /* @__PURE__ */ Z({
  ...Jb,
  props: Xb,
  emits: Zb,
  setup(e, { expose: t, emit: n }) {
    const o = e, { formItem: r } = fr(), a = _o(), s = $e("switch"), { inputId: i } = _a(o, {
      formItemContext: r
    }), u = wa(k(() => o.loading)), c = x(o.modelValue !== !1), f = x(), p = x(), v = k(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", u.value),
      s.is("checked", d.value)
    ]), h = k(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !d.value)
    ]), m = k(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", d.value)
    ]), g = k(() => ({
      width: jn(o.width)
    }));
    se(() => o.modelValue, () => {
      c.value = !0;
    });
    const E = k(() => c.value ? o.modelValue : !1), d = k(() => E.value === o.activeValue);
    [o.activeValue, o.inactiveValue].includes(E.value) || (n(Ve, o.inactiveValue), n(nn, o.inactiveValue), n(en, o.inactiveValue)), se(d, (y) => {
      var A;
      f.value.checked = y, o.validateEvent && ((A = r?.validate) == null || A.call(r, "change").catch((O) => void 0));
    });
    const C = () => {
      const y = d.value ? o.inactiveValue : o.activeValue;
      n(Ve, y), n(nn, y), n(en, y), Le(() => {
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
        ys(A),
        pn(A)
      ].includes(!0) || va(bu, "beforeChange must return type `Promise<boolean>` or `boolean`"), ys(A) ? A.then((z) => {
        z && C();
      }).catch((z) => {
      }) : A && C();
    }, S = () => {
      var y, A;
      (A = (y = f.value) == null ? void 0 : y.focus) == null || A.call(y);
    };
    return Pe(() => {
      f.value.checked = d.value;
    }), t({
      focus: S,
      checked: d
    }), (y, A) => (P(), U("div", {
      class: B(l(v)),
      onClick: Te(L, ["prevent"])
    }, [
      b("input", {
        id: l(i),
        ref_key: "input",
        ref: f,
        class: B(l(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": l(d),
        "aria-disabled": l(u),
        "aria-label": y.ariaLabel,
        name: y.name,
        "true-value": y.activeValue,
        "false-value": y.inactiveValue,
        disabled: l(u),
        tabindex: y.tabindex,
        onChange: C,
        onKeydown: gt(L, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !y.inlinePrompt && (y.inactiveIcon || y.inactiveText) ? (P(), U("span", {
        key: 0,
        class: B(l(h))
      }, [
        y.inactiveIcon ? (P(), te(l(Ne), { key: 0 }, {
          default: X(() => [
            (P(), te(Je(y.inactiveIcon)))
          ]),
          _: 1
        })) : q("v-if", !0),
        !y.inactiveIcon && y.inactiveText ? (P(), U("span", {
          key: 1,
          "aria-hidden": l(d)
        }, D(y.inactiveText), 9, ["aria-hidden"])) : q("v-if", !0)
      ], 2)) : q("v-if", !0),
      b("span", {
        ref_key: "core",
        ref: p,
        class: B(l(s).e("core")),
        style: je(l(g))
      }, [
        y.inlinePrompt ? (P(), U("div", {
          key: 0,
          class: B(l(s).e("inner"))
        }, [
          y.activeIcon || y.inactiveIcon ? (P(), te(l(Ne), {
            key: 0,
            class: B(l(s).is("icon"))
          }, {
            default: X(() => [
              (P(), te(Je(l(d) ? y.activeIcon : y.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : y.activeText || y.inactiveText ? (P(), U("span", {
            key: 1,
            class: B(l(s).is("text")),
            "aria-hidden": !l(d)
          }, D(l(d) ? y.activeText : y.inactiveText), 11, ["aria-hidden"])) : q("v-if", !0)
        ], 2)) : q("v-if", !0),
        b("div", {
          class: B(l(s).e("action"))
        }, [
          y.loading ? (P(), te(l(Ne), {
            key: 0,
            class: B(l(s).is("loading"))
          }, {
            default: X(() => [
              V(l(ji))
            ]),
            _: 1
          }, 8, ["class"])) : l(d) ? ae(y.$slots, "active-action", { key: 1 }, () => [
            y.activeActionIcon ? (P(), te(l(Ne), { key: 0 }, {
              default: X(() => [
                (P(), te(Je(y.activeActionIcon)))
              ]),
              _: 1
            })) : q("v-if", !0)
          ]) : l(d) ? q("v-if", !0) : ae(y.$slots, "inactive-action", { key: 2 }, () => [
            y.inactiveActionIcon ? (P(), te(l(Ne), { key: 0 }, {
              default: X(() => [
                (P(), te(Je(y.inactiveActionIcon)))
              ]),
              _: 1
            })) : q("v-if", !0)
          ])
        ], 2)
      ], 6),
      !y.inlinePrompt && (y.activeIcon || y.activeText) ? (P(), U("span", {
        key: 1,
        class: B(l(m))
      }, [
        y.activeIcon ? (P(), te(l(Ne), { key: 0 }, {
          default: X(() => [
            (P(), te(Je(y.activeIcon)))
          ]),
          _: 1
        })) : q("v-if", !0),
        !y.activeIcon && y.activeText ? (P(), U("span", {
          key: 1,
          "aria-hidden": !l(d)
        }, D(y.activeText), 9, ["aria-hidden"])) : q("v-if", !0)
      ], 2)) : q("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var e1 = /* @__PURE__ */ Se(Qb, [["__file", "switch.vue"]]);
const t1 = At(e1), _u = ["success", "info", "warning", "error"], Ge = Ui({
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
  appendTo: Re ? document.body : void 0
}), n1 = Ce({
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
    type: re([
      String,
      Object,
      Function
    ]),
    default: Ge.message
  },
  onClose: {
    type: re(Function),
    default: Ge.onClose
  },
  showClose: {
    type: Boolean,
    default: Ge.showClose
  },
  type: {
    type: String,
    values: _u,
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
}), o1 = {
  destroy: () => !0
}, Ct = sc([]), r1 = (e) => {
  const t = Ct.findIndex((r) => r.id === e), n = Ct[t];
  let o;
  return t > 0 && (o = Ct[t - 1]), { current: n, prev: o };
}, a1 = (e) => {
  const { prev: t } = r1(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, s1 = (e, t) => Ct.findIndex((o) => o.id === e) > 0 ? 16 : t, l1 = Z({
  name: "ElMessage"
}), i1 = /* @__PURE__ */ Z({
  ...l1,
  props: n1,
  emits: o1,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = fh, { ns: r, zIndex: a } = Fi("message"), { currentZIndex: s, nextZIndex: i } = a, u = x(), c = x(!1), f = x(0);
    let p;
    const v = k(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), h = k(() => {
      const O = n.type;
      return { [r.bm("icon", O)]: O && qo[O] };
    }), m = k(() => n.icon || qo[n.type] || ""), g = k(() => a1(n.id)), E = k(() => s1(n.id, n.offset) + g.value), d = k(() => f.value + E.value), C = k(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: p } = Ti(() => {
        y();
      }, n.duration));
    }
    function S() {
      p?.();
    }
    function y() {
      c.value = !1;
    }
    function A({ code: O }) {
      O === Dt.esc && y();
    }
    return Pe(() => {
      L(), i(), c.value = !0;
    }), se(() => n.repeatNum, () => {
      S(), L();
    }), Tt(document, "keydown", A), Nt(u, () => {
      f.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: d,
      close: y
    }), (O, z) => (P(), te(Yn, {
      name: l(r).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (W) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        xe(b("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: u,
          class: B([
            l(r).b(),
            { [l(r).m(O.type)]: O.type },
            l(r).is("center", O.center),
            l(r).is("closable", O.showClose),
            l(r).is("plain", O.plain),
            O.customClass
          ]),
          style: je(l(C)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: L
        }, [
          O.repeatNum > 1 ? (P(), te(l(vb), {
            key: 0,
            value: O.repeatNum,
            type: l(v),
            class: B(l(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : q("v-if", !0),
          l(m) ? (P(), te(l(Ne), {
            key: 1,
            class: B([l(r).e("icon"), l(h)])
          }, {
            default: X(() => [
              (P(), te(Je(l(m))))
            ]),
            _: 1
          }, 8, ["class"])) : q("v-if", !0),
          ae(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (P(), U(qe, { key: 1 }, [
              q(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: B(l(r).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (P(), U("p", {
              key: 0,
              class: B(l(r).e("content"))
            }, D(O.message), 3))
          ]),
          O.showClose ? (P(), te(l(Ne), {
            key: 2,
            class: B(l(r).e("closeBtn")),
            onClick: Te(y, ["stop"])
          }, {
            default: X(() => [
              V(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : q("v-if", !0)
        ], 46, ["id"]), [
          [tn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var u1 = /* @__PURE__ */ Se(i1, [["__file", "message.vue"]]);
let c1 = 1;
const wu = (e) => {
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
  return pn(wt.grouping) && !n.grouping && (n.grouping = wt.grouping), ge(wt.duration) && n.duration === 3e3 && (n.duration = wt.duration), ge(wt.offset) && n.offset === 16 && (n.offset = wt.offset), pn(wt.showClose) && !n.showClose && (n.showClose = wt.showClose), n;
}, d1 = (e) => {
  const t = Ct.indexOf(e);
  if (t === -1)
    return;
  Ct.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, f1 = ({ appendTo: e, ...t }, n) => {
  const o = `message_${c1++}`, r = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), d1(f);
    },
    onDestroy: () => {
      jo(null, a);
    }
  }, i = V(u1, s, Ae(s.message) || lo(s.message) ? {
    default: Ae(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Kn._context, jo(i, a), e.appendChild(a.firstElementChild);
  const u = i.component, f = {
    id: o,
    vnode: i,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return f;
}, Kn = (e = {}, t) => {
  if (!Re)
    return { close: () => {
    } };
  const n = wu(e);
  if (n.grouping && Ct.length) {
    const r = Ct.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (ge(wt.max) && Ct.length >= wt.max)
    return { close: () => {
    } };
  const o = f1(n, t);
  return Ct.push(o), o.handler;
};
_u.forEach((e) => {
  Kn[e] = (t = {}, n) => {
    const o = wu(t);
    return Kn({ ...o, type: e }, n);
  };
});
function p1(e) {
  for (const t of Ct)
    (!e || e === t.props.type) && t.handler.close();
}
Kn.closeAll = p1;
Kn._context = null;
const m1 = Vi(Kn, "$message"), Eu = [
  "success",
  "info",
  "warning",
  "error"
], v1 = Ce({
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
    type: re([
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
    type: re(Function),
    default: () => {
    }
  },
  onClose: {
    type: re(Function),
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
    values: [...Eu, ""],
    default: ""
  },
  zIndex: Number
}), g1 = {
  destroy: () => !0
}, h1 = Z({
  name: "ElNotification"
}), y1 = /* @__PURE__ */ Z({
  ...h1,
  props: v1,
  emits: g1,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = Fi("notification"), { nextZIndex: a, currentZIndex: s } = r, { Close: i } = dh, u = x(!1);
    let c;
    const f = k(() => {
      const L = n.type;
      return L && qo[n.type] ? o.m(L) : "";
    }), p = k(() => n.type && qo[n.type] || n.icon), v = k(() => n.position.endsWith("right") ? "right" : "left"), h = k(() => n.position.startsWith("top") ? "top" : "bottom"), m = k(() => {
      var L;
      return {
        [h.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: c } = Ti(() => {
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
      L === Dt.delete || L === Dt.backspace ? E() : L === Dt.esc ? u.value && d() : g();
    }
    return Pe(() => {
      g(), a(), u.value = !0;
    }), Tt(document, "keydown", C), t({
      visible: u,
      close: d
    }), (L, S) => (P(), te(Yn, {
      name: l(o).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (y) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        xe(b("div", {
          id: L.id,
          class: B([l(o).b(), L.customClass, l(v)]),
          style: je(l(m)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: g,
          onClick: L.onClick
        }, [
          l(p) ? (P(), te(l(Ne), {
            key: 0,
            class: B([l(o).e("icon"), l(f)])
          }, {
            default: X(() => [
              (P(), te(Je(l(p))))
            ]),
            _: 1
          }, 8, ["class"])) : q("v-if", !0),
          b("div", {
            class: B(l(o).e("group"))
          }, [
            b("h2", {
              class: B(l(o).e("title")),
              textContent: D(L.title)
            }, null, 10, ["textContent"]),
            xe(b("div", {
              class: B(l(o).e("content")),
              style: je(L.title ? void 0 : { margin: 0 })
            }, [
              ae(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (P(), U(qe, { key: 1 }, [
                  q(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (P(), U("p", { key: 0 }, D(L.message), 1))
              ])
            ], 6), [
              [tn, L.message]
            ]),
            L.showClose ? (P(), te(l(Ne), {
              key: 0,
              class: B(l(o).e("closeBtn")),
              onClick: Te(d, ["stop"])
            }, {
              default: X(() => [
                V(l(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : q("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [tn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var b1 = /* @__PURE__ */ Se(y1, [["__file", "notification.vue"]]);
const Jo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, qr = 16;
let _1 = 1;
const Gn = function(e = {}, t) {
  if (!Re)
    return { close: () => {
    } };
  (Xe(e) || lo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Jo[n].forEach(({ vm: f }) => {
    var p;
    o += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + qr;
  }), o += qr;
  const r = `notification_${_1++}`, a = e.onClose, s = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      w1(r, n, a);
    }
  };
  let i = document.body;
  St(e.appendTo) ? i = e.appendTo : Xe(e.appendTo) && (i = document.querySelector(e.appendTo)), St(i) || (i = document.body);
  const u = document.createElement("div"), c = V(b1, s, Ae(s.message) ? s.message : lo(s.message) ? () => s.message : null);
  return c.appContext = $t(t) ? Gn._context : t, c.props.onDestroy = () => {
    jo(null, u);
  }, jo(c, u), Jo[n].push({ vm: c }), i.appendChild(u.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Eu.forEach((e) => {
  Gn[e] = (t = {}, n) => ((Xe(t) || lo(t)) && (t = {
    message: t
  }), Gn({ ...t, type: e }, n));
});
function w1(e, t, n) {
  const o = Jo[t], r = o.findIndex(({ vm: c }) => {
    var f;
    return ((f = c.component) == null ? void 0 : f.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: a } = o[r];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, i = t.split("-")[0];
  o.splice(r, 1);
  const u = o.length;
  if (!(u < 1))
    for (let c = r; c < u; c++) {
      const { el: f, component: p } = o[c].vm, v = Number.parseInt(f.style[i], 10) - s - qr;
      p.props.offset = v;
    }
}
function E1() {
  for (const e of Object.values(Jo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Gn.closeAll = E1;
Gn._context = null;
const C1 = Vi(Gn, "$notify"), Pt = {
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
    o === "center" ? m1({
      message: t,
      type: n,
      duration: r,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : C1({
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
var Il;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Il || (Il = {}));
const S1 = "snippets-code:developer-mode", Cu = "snippets-code:frontend-diagnostics", T1 = 240, eo = "[REDACTED]", Bo = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${eo}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${eo}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  eo
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${eo}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${eo}`
), Su = (e) => {
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
}, O1 = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, A1 = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Cu) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Da = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(S1) === "true";
  } catch {
    return !1;
  }
}, L1 = (e, t, n) => {
  if (!Da() || typeof localStorage > "u") return;
  const o = A1();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: O1(),
    message: Bo(t),
    data: Su(n)
  });
  try {
    localStorage.setItem(
      Cu,
      JSON.stringify(o.slice(-T1))
    );
  } catch {
  }
}, k1 = () => Da(), I1 = (e) => e === "warn" || e === "error" || !1 || !1 || Da(), Mo = (e, t, n) => {
  L1(e, t, n), I1(e) && ot("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Su(n)
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
    k1() && Mo("debug", e, t);
  }
};
async function P1() {
  return await ot("local_ai_get_config");
}
async function kr(e) {
  return await ot("local_ai_save_config", { config: e });
}
async function N1(e) {
  return await ot("local_ai_scan_models", {
    config: e ?? null
  });
}
async function R1() {
  return await ot("local_ai_get_runtime_status");
}
async function Tu() {
  return await ot("local_ai_get_status");
}
async function $1(e) {
  return await ot("local_ai_start_service", {
    config: e ?? null
  });
}
async function M1() {
  return await ot("local_ai_restart_service");
}
async function F1() {
  await ot("local_ai_stop_service");
}
async function D1(e) {
  return await ot("local_ai_chat", { request: e });
}
async function V1() {
  return await ot("local_ai_get_chat_histories");
}
async function x1(e) {
  return await ot("local_ai_save_chat_history", { history: e });
}
async function B1(e) {
  return await ot("local_ai_delete_chat_history", { historyId: e });
}
const j1 = { class: "local-ai-chat-shell" }, z1 = { class: "chat-sidebar panel-card" }, W1 = { class: "sidebar-header" }, U1 = { class: "sidebar-title-block" }, H1 = { class: "sidebar-actions" }, K1 = { class: "sidebar-search" }, G1 = ["placeholder"], Y1 = { class: "sidebar-section" }, q1 = { class: "section-title" }, X1 = ["onClick"], Z1 = { class: "sidebar-section recent-section" }, J1 = { class: "section-title" }, Q1 = {
  key: 0,
  class: "chat-list"
}, e_ = ["onClick", "onKeydown"], t_ = { class: "chat-item-copy" }, n_ = { class: "chat-item-title" }, o_ = { class: "chat-item-meta" }, r_ = ["title", "onClick"], a_ = {
  key: 1,
  class: "sidebar-empty"
}, s_ = { class: "chat-panel panel-card" }, l_ = { class: "chat-topbar" }, i_ = { class: "chat-topbar-main" }, u_ = { class: "chat-title-row" }, c_ = { class: "chat-subtitle" }, d_ = { class: "chat-topbar-actions" }, f_ = { class: "chat-status-row" }, p_ = { class: "info-chip" }, m_ = { class: "info-chip" }, v_ = { class: "info-chip" }, g_ = {
  key: 0,
  class: "empty-state"
}, h_ = { class: "empty-card" }, y_ = { class: "empty-title" }, b_ = { class: "empty-desc" }, __ = { class: "message-avatar" }, w_ = { key: 1 }, E_ = { class: "message-body" }, C_ = { class: "message-head" }, S_ = { class: "message-role" }, T_ = {
  key: 0,
  class: "message-mini-meta"
}, O_ = { class: "message-bubble" }, A_ = {
  key: 1,
  class: "message-row message-row--assistant"
}, L_ = { class: "message-avatar" }, k_ = { class: "message-body" }, I_ = { class: "message-head" }, P_ = { class: "message-role" }, N_ = { class: "message-mini-meta" }, R_ = { class: "message-bubble loading-text" }, $_ = ["placeholder", "onKeydown"], M_ = { class: "input-toolbar" }, F_ = { class: "input-toolbar-left" }, D_ = ["disabled"], V_ = { class: "input-toolbar-right" }, x_ = /* @__PURE__ */ Z({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = ho(), n = x(""), o = x([]), r = x(""), a = x(""), s = x(!1), i = x(!1), u = x(null), c = x(null);
    let f = null;
    const p = k(() => [
      { key: "summary", text: t("localAi.quickPromptSummary") },
      { key: "translate", text: t("localAi.quickPromptTranslate") },
      { key: "code", text: t("localAi.quickPromptCode") }
    ]), v = k(() => !!a.value.trim() && !s.value), h = k(() => u.value?.healthy ? t("localAi.serviceHealthy") : u.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), m = k(() => o.value.find((I) => I.id === r.value) ?? null), g = k(() => m.value?.messages ?? []), E = k(() => {
      const I = n.value.trim().toLowerCase();
      return o.value.filter((H) => !I || H.title.toLowerCase().includes(I) || H.messages.some((j) => j.content.toLowerCase().includes(I))).slice().sort((H, j) => j.updatedAt.localeCompare(H.updatedAt));
    }), d = () => t("localAi.now"), C = () => {
      const I = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: I,
        updatedAt: I,
        updatedAtLabel: d(),
        messages: []
      };
    }, L = async () => {
      await Le();
      const I = c.value;
      I && (I.scrollTop = I.scrollHeight);
    }, S = async () => {
      i.value = !0;
      try {
        u.value = await Tu();
      } catch (I) {
        Fn.warn("[LocalAI] refresh chat status failed", I);
      } finally {
        i.value = !1;
      }
    }, y = async () => {
      try {
        const I = await V1();
        o.value = I.map((H) => ({
          id: H.id,
          title: H.title,
          createdAt: H.createdAt,
          updatedAt: H.updatedAt,
          updatedAtLabel: new Date(H.updatedAt).toLocaleString(),
          messages: H.turns.map((j) => ({
            id: j.id,
            role: j.role,
            content: j.content
          }))
        })), !r.value && o.value[0] && (r.value = o.value[0].id);
      } catch (I) {
        Fn.warn("[LocalAI] refresh histories failed", I);
      }
    }, A = async () => {
      await Promise.all([S(), y()]);
    }, O = async () => {
      const I = m.value;
      I && await x1({
        id: I.id,
        title: I.title,
        createdAt: I.createdAt,
        updatedAt: I.updatedAt,
        turns: I.messages.map((H) => ({
          id: H.id,
          role: H.role,
          content: H.content,
          createdAt: I.updatedAt
        }))
      });
    }, z = () => {
      const I = C();
      o.value.unshift(I), r.value = I.id, a.value = "";
    }, W = () => {
      m.value || z();
    }, ee = (I) => {
      W(), a.value = I;
    }, ne = (I) => {
      r.value = I, L();
    }, J = async (I) => {
      o.value = o.value.filter((H) => H.id !== I), await B1(I), r.value === I && (r.value = o.value[0]?.id ?? "");
    }, le = () => g.value.map((I) => ({
      role: I.role,
      content: I.content
    })), ye = async () => {
      const I = a.value.trim();
      if (!(!I || s.value)) {
        W(), m.value?.messages.push({ id: `${Date.now()}-user`, role: "user", content: I }), a.value = "", s.value = !0, await L();
        try {
          const H = await D1({ messages: le() });
          m.value?.messages.push({ id: `${Date.now()}-assistant`, role: "assistant", content: H.content }), m.value && (m.value.title = m.value.title === t("localAi.newChatTitle") ? I.slice(0, 28) : m.value.title, m.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), m.value.updatedAtLabel = new Date(m.value.updatedAt).toLocaleString(), await O()), await S();
        } catch (H) {
          Pt.msg(`${t("localAi.chatFailed")}: ${H}`, "error"), m.value?.messages.push({ id: `${Date.now()}-assistant-error`, role: "assistant", content: String(H) });
        } finally {
          s.value = !1, await L();
        }
      }
    }, N = async () => {
      m.value && (m.value.messages = [], m.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), m.value.updatedAtLabel = new Date(m.value.updatedAt).toLocaleString()), await O();
    }, $ = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    };
    return Pe(async () => {
      await A(), f = setInterval(() => {
        S().catch((I) => Fn.warn("[LocalAI] status timer failed", I));
      }, 8e3);
    }), Qo(() => {
      f && clearInterval(f);
    }), (I, H) => (P(), U("main", j1, [
      b("aside", z1, [
        b("header", W1, [
          b("div", U1, [
            b(
              "h2",
              null,
              D(l(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            b(
              "p",
              null,
              D(l(t)("localAi.chatSubtitle")),
              1
              /* TEXT */
            )
          ]),
          b("div", H1, [
            V(l(ct), {
              class: "icon-action-btn",
              size: "small",
              plain: "",
              title: l(t)("localAi.newChat"),
              onClick: z
            }, {
              default: X(() => [
                V(l(dc), {
                  theme: "outline",
                  size: "16"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["title"]),
            V(l(ct), {
              class: "icon-action-btn",
              size: "small",
              plain: "",
              loading: l(i),
              title: l(t)("plugins.refresh"),
              onClick: A
            }, {
              default: X(() => [
                V(l(Ua), {
                  theme: "outline",
                  size: "16"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading", "title"])
          ])
        ]),
        b("div", K1, [
          xe(b("input", {
            "onUpdate:modelValue": H[0] || (H[0] = (j) => ao(n) ? n.value = j : null),
            class: "search-input",
            placeholder: l(t)("localAi.searchHistory")
          }, null, 8, G1), [
            [so, l(n)]
          ])
        ]),
        b("section", Y1, [
          b(
            "div",
            q1,
            D(l(t)("common.quickStart")),
            1
            /* TEXT */
          ),
          (P(!0), U(
            qe,
            null,
            En(l(p), (j) => (P(), U("button", {
              key: j.key,
              class: "quick-prompt",
              type: "button",
              onClick: (ie) => ee(j.text)
            }, [
              V(l(mc), {
                theme: "outline",
                size: "15"
              }),
              b(
                "span",
                null,
                D(j.text),
                1
                /* TEXT */
              )
            ], 8, X1))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        b("section", Z1, [
          b(
            "div",
            J1,
            D(l(t)("localAi.recent")),
            1
            /* TEXT */
          ),
          l(E).length ? (P(), U("div", Q1, [
            (P(!0), U(
              qe,
              null,
              En(l(E), (j) => (P(), U("div", {
                key: j.id,
                class: B(["chat-list-item", l(r) === j.id ? "active" : ""]),
                role: "button",
                tabindex: "0",
                onClick: (ie) => ne(j.id),
                onKeydown: gt(Te((ie) => ne(j.id), ["prevent"]), ["enter"])
              }, [
                b("div", t_, [
                  b(
                    "div",
                    n_,
                    D(j.title),
                    1
                    /* TEXT */
                  ),
                  b(
                    "div",
                    o_,
                    D(j.updatedAtLabel),
                    1
                    /* TEXT */
                  )
                ]),
                b("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: l(t)("common.delete"),
                  onClick: Te((ie) => J(j.id), ["stop"])
                }, [
                  V(l(pc), {
                    theme: "outline",
                    size: "14"
                  })
                ], 8, r_)
              ], 42, e_))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (P(), U(
            "div",
            a_,
            D(l(t)("common.empty")),
            1
            /* TEXT */
          ))
        ])
      ]),
      b("section", s_, [
        b("header", l_, [
          b("div", i_, [
            b("div", u_, [
              b(
                "h3",
                null,
                D(l(m)?.title ?? l(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              b(
                "span",
                {
                  class: B(["status-pill", l(u)?.healthy ? "ready" : l(u)?.running ? "pending" : "stopped"])
                },
                D(l(h)),
                3
                /* TEXT, CLASS */
              )
            ]),
            b("div", c_, [
              b(
                "span",
                null,
                D(l(u)?.baseUrl ?? l(t)("localAi.serviceNotStarted")),
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
                D(l(t)("localAi.onDemandHint")),
                1
                /* TEXT */
              )
            ])
          ]),
          b("div", d_, [
            V(l(ct), {
              size: "small",
              plain: "",
              onClick: $
            }, {
              default: X(() => [
                V(l(fc), {
                  theme: "outline",
                  size: "15"
                }),
                Ze(
                  " " + D(l(t)("localAi.backToSettings")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            V(l(ct), {
              size: "small",
              plain: "",
              onClick: A
            }, {
              default: X(() => [
                V(l(Ua), {
                  theme: "outline",
                  size: "15"
                }),
                Ze(
                  " " + D(l(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        b("div", f_, [
          b(
            "span",
            p_,
            D(l(t)("localAi.serviceControl")) + ": " + D(l(h)),
            1
            /* TEXT */
          ),
          b(
            "span",
            m_,
            D(l(t)("localAi.modelRuntime")),
            1
            /* TEXT */
          ),
          b(
            "span",
            v_,
            D(l(t)("localAi.generation")) + ": " + D(l(t)("localAi.temperature")) + " / " + D(l(t)("localAi.maxTokens")),
            1
            /* TEXT */
          )
        ]),
        b(
          "div",
          {
            ref_key: "messageListRef",
            ref: c,
            class: "message-list"
          },
          [
            l(g).length ? q("v-if", !0) : (P(), U("div", g_, [
              b("div", h_, [
                V(l(br), {
                  theme: "outline",
                  size: "34"
                }),
                b("div", null, [
                  b(
                    "div",
                    y_,
                    D(l(t)("localAi.chatEmpty")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "div",
                    b_,
                    D(l(t)("localAi.chatPlaceholder")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])),
            (P(!0), U(
              qe,
              null,
              En(l(g), (j) => (P(), U(
                "article",
                {
                  key: j.id,
                  class: B(["message-row", `message-row--${j.role}`])
                },
                [
                  b("div", __, [
                    j.role === "assistant" ? (P(), te(l(br), {
                      key: 0,
                      theme: "outline",
                      size: "16"
                    })) : (P(), U(
                      "span",
                      w_,
                      D(l(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  b("div", E_, [
                    b("div", C_, [
                      b(
                        "span",
                        S_,
                        D(j.role === "user" ? l(t)("localAi.you") : l(t)("localAi.assistant")),
                        1
                        /* TEXT */
                      ),
                      j.role === "assistant" ? (P(), U("span", T_, "llama.cpp")) : q("v-if", !0)
                    ]),
                    b(
                      "div",
                      O_,
                      D(j.content),
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
            l(s) ? (P(), U("article", A_, [
              b("div", L_, [
                V(l(br), {
                  theme: "outline",
                  size: "16"
                })
              ]),
              b("div", k_, [
                b("div", I_, [
                  b(
                    "span",
                    P_,
                    D(l(t)("localAi.assistant")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "span",
                    N_,
                    D(l(t)("localAi.thinking")),
                    1
                    /* TEXT */
                  )
                ]),
                b(
                  "div",
                  R_,
                  D(l(t)("localAi.thinking")),
                  1
                  /* TEXT */
                )
              ])
            ])) : q("v-if", !0)
          ],
          512
          /* NEED_PATCH */
        ),
        b(
          "form",
          {
            class: "chat-input-card",
            onSubmit: Te(ye, ["prevent"])
          },
          [
            xe(b("textarea", {
              "onUpdate:modelValue": H[1] || (H[1] = (j) => ao(a) ? a.value = j : null),
              class: "chat-input",
              rows: "4",
              placeholder: l(t)("localAi.chatPlaceholder"),
              onKeydown: gt(Te(ye, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, $_), [
              [so, l(a)]
            ]),
            b("div", M_, [
              b("div", F_, [
                b("button", {
                  class: "tool-chip",
                  type: "button",
                  onClick: $
                }, [
                  V(l(Fl), {
                    theme: "outline",
                    size: "14"
                  }),
                  Ze(
                    " " + D(l(t)("localAi.settings")),
                    1
                    /* TEXT */
                  )
                ]),
                b("button", {
                  class: "tool-chip",
                  type: "button",
                  disabled: l(s) || !l(g).length,
                  onClick: N
                }, D(l(t)("common.clear")), 9, D_)
              ]),
              b("div", V_, [
                H[3] || (H[3] = b(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                V(l(ct), {
                  type: "primary",
                  size: "small",
                  class: "send-btn",
                  loading: l(s),
                  disabled: !l(v),
                  onClick: ye
                }, {
                  default: X(() => [
                    V(l(vc), {
                      theme: "outline",
                      size: "15"
                    }),
                    Ze(
                      " " + D(l(t)("localAi.send")),
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
}), B_ = /* @__PURE__ */ aa(x_, [["__scopeId", "data-v-60ff0837"]]), j_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B_
}, Symbol.toStringTag, { value: "Module" }));
async function Pl(e = {}) {
  return typeof e == "object" && Object.freeze(e), await ot("plugin:dialog|open", { options: e });
}
const z_ = { class: "settings-panel local-ai-settings-shell" }, W_ = { class: "local-ai-hero panel-card" }, U_ = { class: "panel-title" }, H_ = { class: "hero-desc" }, K_ = { class: "header-actions" }, G_ = {
  key: 0,
  class: "settings-grid"
}, Y_ = { class: "summary-panel panel-card" }, q_ = { class: "status-strip" }, X_ = { class: "summary-card" }, Z_ = { class: "summary-card__title" }, J_ = { class: "summary-card__desc" }, Q_ = { class: "service-controls" }, ew = { class: "service-url" }, tw = { class: "summary-card" }, nw = { class: "summary-card__title" }, ow = { class: "summary-card__desc" }, rw = { class: "summary-meta" }, aw = { class: "form-panel panel-card" }, sw = { class: "settings-section" }, lw = { class: "settings-section__header" }, iw = { class: "field-stack" }, uw = { class: "field-row" }, cw = { class: "path-control" }, dw = { class: "field-row" }, fw = { class: "field-row" }, pw = { class: "field-row" }, mw = { class: "path-control" }, vw = ["placeholder"], gw = { class: "settings-section grid-two" }, hw = { class: "settings-section__header" }, yw = { class: "param-grid" }, bw = { class: "number-field" }, _w = { class: "number-field" }, ww = { class: "number-field" }, Ew = { class: "number-field" }, Cw = { class: "number-field" }, Sw = { class: "number-field" }, Tw = { class: "settings-section grid-two" }, Ow = { class: "settings-section__header" }, Aw = { class: "switch-grid" }, Lw = { class: "settings-section grid-two" }, kw = { class: "settings-section__header" }, Iw = { class: "switch-grid switch-grid--two" }, Pw = { class: "number-field" }, Nw = { class: "number-field" }, Rw = { class: "settings-section grid-two" }, $w = { class: "settings-section__header" }, Mw = { class: "param-grid param-grid--three" }, Fw = { class: "number-field" }, Dw = { class: "number-field" }, Vw = { class: "number-field" }, xw = { class: "settings-footer" }, Bw = ["title"], jw = /* @__PURE__ */ Z({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = ho(), n = x(null), o = x(null), r = x(null), a = x(null), s = x(!1), i = x(!1), u = x(!1), c = x(!1), f = x(!1);
    let p = null;
    const v = k(() => !!a.value?.selectedModelPath), h = k({ get: () => n.value?.modelPath ?? "", set: (N) => {
      n.value && (n.value.modelPath = N || void 0);
    } }), m = k({ get: () => n.value?.mmprojPath ?? "", set: (N) => {
      n.value && (n.value.mmprojPath = N || void 0);
    } }), g = k(() => o.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), E = k(() => v.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")), d = k(() => r.value?.healthy ? t("localAi.serviceHealthy") : r.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), C = (N) => N.split(/[\\/]+/).pop() ?? N, L = async () => {
      s.value = !0;
      try {
        n.value = await P1(), await Promise.all([S(), A(), y()]);
      } catch (N) {
        Fn.error("[LocalAI] refresh settings failed", N), Pt.msg(`${t("localAi.refreshFailed")}: ${N}`, "error");
      } finally {
        s.value = !1;
      }
    }, S = async () => {
      o.value = await R1();
    }, y = async () => {
      r.value = await Tu();
    }, A = async () => {
      n.value && (a.value = await N1(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, O = async () => {
      if (n.value)
        try {
          await kr(n.value);
        } catch (N) {
          Fn.warn("[LocalAI] autosave failed", N);
        }
    }, z = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await kr(n.value), await Promise.all([S(), A(), y()]), Pt.msg(t("localAi.configSaved"));
        } catch (N) {
          Pt.msg(`${t("localAi.configSaveFailed")}: ${N}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, W = async () => {
      const N = await Pl({ directory: !0, multiple: !1, title: t("localAi.chooseModelDir") });
      !N || Array.isArray(N) || !n.value || (n.value.modelDir = N, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await A());
    }, ee = async () => {
      const N = await Pl({ multiple: !1, title: t("localAi.chooseRuntime"), filters: [{ name: "llama-server", extensions: ["exe"] }] });
      !N || Array.isArray(N) || !n.value || (n.value.runtimePath = N, await O(), await S());
    }, ne = async () => {
      if (n.value) {
        u.value = !0;
        try {
          await kr(n.value), r.value = await $1(n.value), Pt.msg(t("localAi.serviceStarted"));
        } catch (N) {
          Pt.msg(`${t("localAi.serviceStartFailed")}: ${N}`, "error");
        } finally {
          u.value = !1;
        }
      }
    }, J = async () => {
      c.value = !0;
      try {
        await z(), r.value = await M1(), Pt.msg(t("localAi.serviceRestarted"));
      } catch (N) {
        Pt.msg(`${t("localAi.serviceRestartFailed")}: ${N}`, "error");
      } finally {
        c.value = !1;
      }
    }, le = async () => {
      f.value = !0;
      try {
        await F1(), await y(), Pt.msg(t("localAi.serviceStoppedMsg"));
      } catch (N) {
        Pt.msg(`${t("localAi.serviceStopFailed")}: ${N}`, "error");
      } finally {
        f.value = !1;
      }
    }, ye = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return Pe(async () => {
      await L(), p = setInterval(() => {
        y().catch((N) => Fn.warn("[LocalAI] status refresh failed", N));
      }, 5e3);
    }), Qo(() => {
      p && clearInterval(p);
    }), (N, $) => {
      const I = Yb, H = Gb, j = Pb, ie = t1;
      return P(), U("div", z_, [
        b("header", W_, [
          b("div", null, [
            b(
              "h3",
              U_,
              D(l(t)("localAi.title")),
              1
              /* TEXT */
            ),
            b(
              "p",
              H_,
              D(l(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          b("div", K_, [
            V(l(ct), {
              size: "small",
              plain: "",
              onClick: ye
            }, {
              default: X(() => [
                Ze(
                  D(l(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            V(l(ct), {
              size: "small",
              loading: l(s),
              onClick: L
            }, {
              default: X(() => [
                Ze(
                  D(l(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        l(n) ? (P(), U("main", G_, [
          b("aside", Y_, [
            b("div", q_, [
              b(
                "div",
                {
                  class: B(["status-item", { ready: l(o)?.available }])
                },
                [
                  $[20] || ($[20] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(l(g)),
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
                  class: B(["status-item", { ready: l(v) }])
                },
                [
                  $[21] || ($[21] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(l(E)),
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
                  class: B(["status-item", { ready: l(r)?.healthy }])
                },
                [
                  $[22] || ($[22] = b(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    null,
                    D(l(d)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            b("section", X_, [
              b(
                "div",
                Z_,
                D(l(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              b(
                "div",
                J_,
                D(l(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              b("div", Q_, [
                V(l(ct), {
                  type: "primary",
                  size: "small",
                  loading: l(u),
                  disabled: l(r)?.running,
                  onClick: ne
                }, {
                  default: X(() => [
                    Ze(
                      D(l(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                V(l(ct), {
                  size: "small",
                  loading: l(c),
                  disabled: !l(r)?.running,
                  onClick: J
                }, {
                  default: X(() => [
                    Ze(
                      D(l(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                V(l(ct), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: l(f),
                  disabled: !l(r)?.running,
                  onClick: le
                }, {
                  default: X(() => [
                    Ze(
                      D(l(t)("localAi.stopService")),
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
                ew,
                D(l(r)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            b("section", tw, [
              b(
                "div",
                nw,
                D(l(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              b(
                "div",
                ow,
                D(l(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              b("div", rw, [
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(l(o)?.available ? l(t)("common.yes") : l(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(l(v) ? l(t)("common.yes") : l(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", null, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "b",
                    null,
                    D(l(r)?.healthy ? l(t)("common.yes") : l(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          b("section", aw, [
            b("div", sw, [
              b("div", lw, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(l(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(l(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", iw, [
                b("label", uw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  b("div", cw, [
                    xe(b(
                      "input",
                      {
                        "onUpdate:modelValue": $[0] || ($[0] = (Y) => l(n).modelDir = Y),
                        class: "text-input",
                        onChange: A
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [so, l(n).modelDir]
                    ]),
                    V(l(ct), {
                      size: "small",
                      plain: "",
                      onClick: W
                    }, {
                      default: X(() => [
                        Ze(
                          D(l(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                b("label", dw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  V(H, {
                    modelValue: l(h),
                    "onUpdate:modelValue": $[1] || ($[1] = (Y) => ao(h) ? h.value = Y : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: X(() => [
                      (P(!0), U(
                        qe,
                        null,
                        En(l(a)?.mainModels ?? [], (Y) => (P(), te(I, {
                          key: Y,
                          label: C(Y),
                          value: Y
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                b("label", fw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  V(H, {
                    modelValue: l(m),
                    "onUpdate:modelValue": $[2] || ($[2] = (Y) => ao(m) ? m.value = Y : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: X(() => [
                      (P(!0), U(
                        qe,
                        null,
                        En(l(a)?.mmprojModels ?? [], (Y) => (P(), te(I, {
                          key: Y,
                          label: C(Y),
                          value: Y
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                b("label", pw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  b("div", mw, [
                    xe(b("input", {
                      "onUpdate:modelValue": $[3] || ($[3] = (Y) => l(n).runtimePath = Y),
                      class: "text-input",
                      placeholder: l(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, vw), [
                      [so, l(n).runtimePath]
                    ]),
                    V(l(ct), {
                      size: "small",
                      plain: "",
                      onClick: ee
                    }, {
                      default: X(() => [
                        Ze(
                          D(l(t)("common.browse")),
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
            b("div", gw, [
              b("div", hw, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(l(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(l(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", yw, [
                b("label", bw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).ctxSize,
                    "onUpdate:modelValue": $[4] || ($[4] = (Y) => l(n).ctxSize = Y),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", _w, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).gpuLayers,
                    "onUpdate:modelValue": $[5] || ($[5] = (Y) => l(n).gpuLayers = Y),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", ww, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).threads,
                    "onUpdate:modelValue": $[6] || ($[6] = (Y) => l(n).threads = Y),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Ew, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).batchSize,
                    "onUpdate:modelValue": $[7] || ($[7] = (Y) => l(n).batchSize = Y),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Cw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).ubatchSize,
                    "onUpdate:modelValue": $[8] || ($[8] = (Y) => l(n).ubatchSize = Y),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Sw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).mainGpu,
                    "onUpdate:modelValue": $[9] || ($[9] = (Y) => l(n).mainGpu = Y),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", Tw, [
              b("div", Ow, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(l(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(l(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", Aw, [
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  V(ie, {
                    modelValue: l(n).flashAttn,
                    "onUpdate:modelValue": $[10] || ($[10] = (Y) => l(n).flashAttn = Y)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  V(ie, {
                    modelValue: l(n).kvOffload,
                    "onUpdate:modelValue": $[11] || ($[11] = (Y) => l(n).kvOffload = Y)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  V(ie, {
                    modelValue: l(n).mmap,
                    "onUpdate:modelValue": $[12] || ($[12] = (Y) => l(n).mmap = Y)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", Lw, [
              b("div", kw, [
                b("div", null, [
                  b(
                    "h4",
                    null,
                    D(l(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(l(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", Iw, [
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  V(ie, {
                    modelValue: l(n).autoStartOnRequest,
                    "onUpdate:modelValue": $[13] || ($[13] = (Y) => l(n).autoStartOnRequest = Y)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", null, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  V(ie, {
                    modelValue: l(n).keepAlive,
                    "onUpdate:modelValue": $[14] || ($[14] = (Y) => l(n).keepAlive = Y)
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Pw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": $[15] || ($[15] = (Y) => l(n).idleTimeoutMinutes = Y),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Nw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).requestTimeoutSecs,
                    "onUpdate:modelValue": $[16] || ($[16] = (Y) => l(n).requestTimeoutSecs = Y),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
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
                    D(l(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  b(
                    "p",
                    null,
                    D(l(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              b("div", Mw, [
                b("label", Fw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).temperature,
                    "onUpdate:modelValue": $[17] || ($[17] = (Y) => l(n).temperature = Y),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Dw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).maxTokens,
                    "onUpdate:modelValue": $[18] || ($[18] = (Y) => l(n).maxTokens = Y),
                    min: 64,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                b("label", Vw, [
                  b(
                    "span",
                    null,
                    D(l(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  V(j, {
                    modelValue: l(n).port,
                    "onUpdate:modelValue": $[19] || ($[19] = (Y) => l(n).port = Y),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            b("div", xw, [
              V(l(ct), {
                type: "primary",
                loading: l(i),
                onClick: z
              }, {
                default: X(() => [
                  Ze(
                    D(l(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              l(r)?.commandLine ? (P(), U("span", {
                key: 0,
                class: "command-line",
                title: l(r).commandLine
              }, D(l(r).commandLine), 9, Bw)) : q("v-if", !0)
            ])
          ])
        ])) : q("v-if", !0)
      ]);
    };
  }
}), zw = /* @__PURE__ */ aa(jw, [["__scopeId", "data-v-4e0ae2c1"]]), Ww = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zw
}, Symbol.toStringTag, { value: "Module" }));
export {
  Hw as activate,
  Hw as default
};
