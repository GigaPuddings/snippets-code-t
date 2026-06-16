import * as ho from "vue";
import { inject as he, createVNode as X, defineAsyncComponent as Wu, ref as D, shallowRef as dn, computed as L, watch as se, onMounted as Ne, onUnmounted as Zr, defineComponent as Y, h as kl, Text as Rl, Fragment as et, createElementBlock as W, openBlock as k, normalizeClass as x, createCommentVNode as K, renderSlot as ae, createElementVNode as E, getCurrentInstance as Je, unref as i, watchEffect as $l, readonly as Yo, getCurrentScope as ju, onScopeDispose as Hu, nextTick as Ae, isRef as Dr, warn as Ku, provide as xt, mergeProps as $n, toRef as Gt, useAttrs as Gu, useSlots as Yu, normalizeStyle as Be, createBlock as ee, withCtx as G, resolveDynamicComponent as Ze, withModifiers as Ie, toDisplayString as V, onBeforeUnmount as zt, Transition as Hn, withDirectives as Ue, vShow as tn, reactive as En, onActivated as qu, onUpdated as Ml, cloneVNode as Xu, Comment as Zu, Teleport as Ju, onBeforeMount as Qu, onDeactivated as ec, createTextVNode as Xe, withKeys as _t, createSlots as tc, toRaw as nc, toRefs as qo, resolveComponent as bn, resolveDirective as rc, toHandlerKey as oc, renderList as rr, vModelText as Vr, shallowReactive as ac, isVNode as or, render as xr } from "vue";
var sc = {
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
function lc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function ic(e, t, n) {
  var r = typeof t.fill == "string" ? [t.fill] : t.fill || [], o = [], a = t.theme || n.theme;
  switch (a) {
    case "outline":
      o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push("none"), o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push("none");
      break;
    case "filled":
      o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push("#FFF"), o.push("#FFF");
      break;
    case "two-tone":
      o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone), o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      o.push(typeof r[0] == "string" ? r[0] : "currentColor"), o.push(typeof r[1] == "string" ? r[1] : n.colors.multiColor.outFillColor), o.push(typeof r[2] == "string" ? r[2] : n.colors.multiColor.innerStrokeColor), o.push(typeof r[3] == "string" ? r[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: o,
    id: e
  };
}
var uc = Symbol("icon-context");
function cc(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = lc(), l = he(uc, sc);
      return function() {
        var u = a.size, c = a.strokeWidth, d = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, h = a.fill, v = a.spin, g = ic(s, {
          size: u,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: p,
          theme: m,
          fill: h
        }, l), S = [l.prefix + "-icon"];
        return S.push(l.prefix + "-icon-" + e), v && S.push(l.prefix + "-icon-spin"), X("span", {
          class: S.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const fc = cc("setting-two", !1, function(e) {
  return X("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [X("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), X("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hw = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => p1)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: fc,
    component: Wu(() => Promise.resolve().then(() => vw))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function dc(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const za = typeof window < "u", Tn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), pc = (e, t, n) => mc({ l: e, k: t, s: n }), mc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), De = (e) => typeof e == "number" && isFinite(e), vc = (e) => Xo(e) === "[object Date]", Br = (e) => Xo(e) === "[object RegExp]", Jr = (e) => de(e) && Object.keys(e).length === 0, ze = Object.assign, gc = Object.create, be = (e = null) => gc(e);
let Wa;
const kr = () => Wa || (Wa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : be());
function ja(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ha(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function hc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${Ha(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${Ha(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const yc = Object.prototype.hasOwnProperty;
function wt(e, t) {
  return yc.call(e, t);
}
const Pe = Array.isArray, Te = (e) => typeof e == "function", Z = (e) => typeof e == "string", Le = (e) => typeof e == "boolean", pe = (e) => e !== null && typeof e == "object", bc = (e) => pe(e) && Te(e.then) && Te(e.catch), Fl = Object.prototype.toString, Xo = (e) => Fl.call(e), de = (e) => Xo(e) === "[object Object]", _c = (e) => e == null ? "" : Pe(e) || de(e) && e.toString === Fl ? JSON.stringify(e, null, 2) : String(e);
function Zo(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Sr = (e) => !pe(e) || Pe(e);
function Rr(e, t) {
  if (Sr(e) || Sr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (pe(r[a]) && !pe(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : be()), Sr(o[a]) || Sr(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function wc(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ao(e, t, n) {
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
}, Ec = 17;
function Qr(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, l = new SyntaxError(String(s));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function Sc(e) {
  throw e;
}
const Lt = " ", Cc = "\r", Ye = `
`, Tc = "\u2028", Oc = "\u2029";
function Ic(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (O) => t[O] === Cc && t[O + 1] === Ye, l = (O) => t[O] === Ye, u = (O) => t[O] === Oc, c = (O) => t[O] === Tc, d = (O) => s(O) || l(O) || u(O) || c(O), p = () => n, m = () => r, h = () => o, v = () => a, g = (O) => s(O) || u(O) || c(O) ? Ye : t[O], S = () => g(n), f = () => g(n + a);
  function w() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function A() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function T() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function y(O = 0) {
    a = O;
  }
  function I() {
    const O = n + a;
    for (; O !== n; )
      w();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: h,
    peekOffset: v,
    charAt: g,
    currentChar: S,
    currentPeek: f,
    next: w,
    peek: A,
    reset: T,
    resetPeek: y,
    skipToPeek: I
  };
}
const jt = void 0, Ac = ".", Ka = "'", Lc = "tokenizer";
function Pc(e, t = {}) {
  const n = t.location !== !1, r = Ic(e), o = () => r.index(), a = () => wc(r.line(), r.column(), r.index()), s = a(), l = o(), u = {
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
  }, c = () => u, { onError: d } = t;
  function p(_, C, M, ...j) {
    const fe = c();
    if (C.column += M, C.offset += M, d) {
      const ne = n ? Ao(fe.startLoc, C) : null, b = Qr(_, ne, {
        domain: Lc,
        args: j
      });
      d(b);
    }
  }
  function m(_, C, M) {
    _.endLoc = a(), _.currentType = C;
    const j = { type: C };
    return n && (j.loc = Ao(_.startLoc, _.endLoc)), M != null && (j.value = M), j;
  }
  const h = (_) => m(
    _,
    13
    /* TokenTypes.EOF */
  );
  function v(_, C) {
    return _.currentChar() === C ? (_.next(), C) : (p(ve.EXPECTED_TOKEN, a(), 0, C), "");
  }
  function g(_) {
    let C = "";
    for (; _.currentPeek() === Lt || _.currentPeek() === Ye; )
      C += _.currentPeek(), _.peek();
    return C;
  }
  function S(_) {
    const C = g(_);
    return _.skipToPeek(), C;
  }
  function f(_) {
    if (_ === jt)
      return !1;
    const C = _.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C === 95;
  }
  function w(_) {
    if (_ === jt)
      return !1;
    const C = _.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function A(_, C) {
    const { currentType: M } = C;
    if (M !== 2)
      return !1;
    g(_);
    const j = f(_.currentPeek());
    return _.resetPeek(), j;
  }
  function T(_, C) {
    const { currentType: M } = C;
    if (M !== 2)
      return !1;
    g(_);
    const j = _.currentPeek() === "-" ? _.peek() : _.currentPeek(), fe = w(j);
    return _.resetPeek(), fe;
  }
  function y(_, C) {
    const { currentType: M } = C;
    if (M !== 2)
      return !1;
    g(_);
    const j = _.currentPeek() === Ka;
    return _.resetPeek(), j;
  }
  function I(_, C) {
    const { currentType: M } = C;
    if (M !== 7)
      return !1;
    g(_);
    const j = _.currentPeek() === ".";
    return _.resetPeek(), j;
  }
  function O(_, C) {
    const { currentType: M } = C;
    if (M !== 8)
      return !1;
    g(_);
    const j = f(_.currentPeek());
    return _.resetPeek(), j;
  }
  function B(_, C) {
    const { currentType: M } = C;
    if (!(M === 7 || M === 11))
      return !1;
    g(_);
    const j = _.currentPeek() === ":";
    return _.resetPeek(), j;
  }
  function U(_, C) {
    const { currentType: M } = C;
    if (M !== 9)
      return !1;
    const j = () => {
      const ne = _.currentPeek();
      return ne === "{" ? f(_.peek()) : ne === "@" || ne === "|" || ne === ":" || ne === "." || ne === Lt || !ne ? !1 : ne === Ye ? (_.peek(), j()) : oe(_, !1);
    }, fe = j();
    return _.resetPeek(), fe;
  }
  function Q(_) {
    g(_);
    const C = _.currentPeek() === "|";
    return _.resetPeek(), C;
  }
  function oe(_, C = !0) {
    const M = (fe = !1, ne = "") => {
      const b = _.currentPeek();
      return b === "{" || b === "@" || !b ? fe : b === "|" ? !(ne === Lt || ne === Ye) : b === Lt ? (_.peek(), M(!0, Lt)) : b === Ye ? (_.peek(), M(!0, Ye)) : !0;
    }, j = M();
    return C && _.resetPeek(), j;
  }
  function J(_, C) {
    const M = _.currentChar();
    return M === jt ? jt : C(M) ? (_.next(), M) : null;
  }
  function le(_) {
    const C = _.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36;
  }
  function Se(_) {
    return J(_, le);
  }
  function P(_) {
    const C = _.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36 || // $
    C === 45;
  }
  function R(_) {
    return J(_, P);
  }
  function F(_) {
    const C = _.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function te(_) {
    return J(_, F);
  }
  function q(_) {
    const C = _.charCodeAt(0);
    return C >= 48 && C <= 57 || // 0-9
    C >= 65 && C <= 70 || // A-F
    C >= 97 && C <= 102;
  }
  function ce(_) {
    return J(_, q);
  }
  function H(_) {
    let C = "", M = "";
    for (; C = te(_); )
      M += C;
    return M;
  }
  function Me(_) {
    let C = "";
    for (; ; ) {
      const M = _.currentChar();
      if (M === "{" || M === "}" || M === "@" || M === "|" || !M)
        break;
      if (M === Lt || M === Ye)
        if (oe(_))
          C += M, _.next();
        else {
          if (Q(_))
            break;
          C += M, _.next();
        }
      else
        C += M, _.next();
    }
    return C;
  }
  function _e(_) {
    S(_);
    let C = "", M = "";
    for (; C = R(_); )
      M += C;
    const j = _.currentChar();
    if (j && j !== "}" && j !== jt && j !== Lt && j !== Ye && j !== "　") {
      const fe = ft(_);
      return p(ve.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, M + fe), M + fe;
    }
    return _.currentChar() === jt && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), M;
  }
  function We(_) {
    S(_);
    let C = "";
    return _.currentChar() === "-" ? (_.next(), C += `-${H(_)}`) : C += H(_), _.currentChar() === jt && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), C;
  }
  function xe(_) {
    return _ !== Ka && _ !== Ye;
  }
  function je(_) {
    S(_), v(_, "'");
    let C = "", M = "";
    for (; C = J(_, xe); )
      C === "\\" ? M += He(_) : M += C;
    const j = _.currentChar();
    return j === Ye || j === jt ? (p(ve.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), j === Ye && (_.next(), v(_, "'")), M) : (v(_, "'"), M);
  }
  function He(_) {
    const C = _.currentChar();
    switch (C) {
      case "\\":
      case "'":
        return _.next(), `\\${C}`;
      case "u":
        return ye(_, C, 4);
      case "U":
        return ye(_, C, 6);
      default:
        return p(ve.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, C), "";
    }
  }
  function ye(_, C, M) {
    v(_, C);
    let j = "";
    for (let fe = 0; fe < M; fe++) {
      const ne = ce(_);
      if (!ne) {
        p(ve.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${C}${j}${_.currentChar()}`);
        break;
      }
      j += ne;
    }
    return `\\${C}${j}`;
  }
  function rt(_) {
    return _ !== "{" && _ !== "}" && _ !== Lt && _ !== Ye;
  }
  function ft(_) {
    S(_);
    let C = "", M = "";
    for (; C = J(_, rt); )
      M += C;
    return M;
  }
  function ot(_) {
    let C = "", M = "";
    for (; C = Se(_); )
      M += C;
    return M;
  }
  function yt(_) {
    const C = (M) => {
      const j = _.currentChar();
      return j === "{" || j === "@" || j === "|" || j === "(" || j === ")" || !j || j === Lt ? M : (M += j, _.next(), C(M));
    };
    return C("");
  }
  function at(_) {
    S(_);
    const C = v(
      _,
      "|"
      /* TokenChars.Pipe */
    );
    return S(_), C;
  }
  function st(_, C) {
    let M = null;
    switch (_.currentChar()) {
      case "{":
        return C.braceNest >= 1 && p(ve.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), _.next(), M = m(
          C,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), S(_), C.braceNest++, M;
      case "}":
        return C.braceNest > 0 && C.currentType === 2 && p(ve.EMPTY_PLACEHOLDER, a(), 0), _.next(), M = m(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), C.braceNest--, C.braceNest > 0 && S(_), C.inLinked && C.braceNest === 0 && (C.inLinked = !1), M;
      case "@":
        return C.braceNest > 0 && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), M = lt(_, C) || h(C), C.braceNest = 0, M;
      default: {
        let fe = !0, ne = !0, b = !0;
        if (Q(_))
          return C.braceNest > 0 && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), M = m(C, 1, at(_)), C.braceNest = 0, C.inLinked = !1, M;
        if (C.braceNest > 0 && (C.currentType === 4 || C.currentType === 5 || C.currentType === 6))
          return p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), C.braceNest = 0, dt(_, C);
        if (fe = A(_, C))
          return M = m(C, 4, _e(_)), S(_), M;
        if (ne = T(_, C))
          return M = m(C, 5, We(_)), S(_), M;
        if (b = y(_, C))
          return M = m(C, 6, je(_)), S(_), M;
        if (!fe && !ne && !b)
          return M = m(C, 12, ft(_)), p(ve.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, M.value), S(_), M;
        break;
      }
    }
    return M;
  }
  function lt(_, C) {
    const { currentType: M } = C;
    let j = null;
    const fe = _.currentChar();
    switch ((M === 7 || M === 8 || M === 11 || M === 9) && (fe === Ye || fe === Lt) && p(ve.INVALID_LINKED_FORMAT, a(), 0), fe) {
      case "@":
        return _.next(), j = m(
          C,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), C.inLinked = !0, j;
      case ".":
        return S(_), _.next(), m(
          C,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return S(_), _.next(), m(
          C,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Q(_) ? (j = m(C, 1, at(_)), C.braceNest = 0, C.inLinked = !1, j) : I(_, C) || B(_, C) ? (S(_), lt(_, C)) : O(_, C) ? (S(_), m(C, 11, ot(_))) : U(_, C) ? (S(_), fe === "{" ? st(_, C) || j : m(C, 10, yt(_))) : (M === 7 && p(ve.INVALID_LINKED_FORMAT, a(), 0), C.braceNest = 0, C.inLinked = !1, dt(_, C));
    }
  }
  function dt(_, C) {
    let M = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (C.braceNest > 0)
      return st(_, C) || h(C);
    if (C.inLinked)
      return lt(_, C) || h(C);
    switch (_.currentChar()) {
      case "{":
        return st(_, C) || h(C);
      case "}":
        return p(ve.UNBALANCED_CLOSING_BRACE, a(), 0), _.next(), m(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return lt(_, C) || h(C);
      default: {
        if (Q(_))
          return M = m(C, 1, at(_)), C.braceNest = 0, C.inLinked = !1, M;
        if (oe(_))
          return m(C, 0, Me(_));
        break;
      }
    }
    return M;
  }
  function At() {
    const { currentType: _, offset: C, startLoc: M, endLoc: j } = u;
    return u.lastType = _, u.lastOffset = C, u.lastStartLoc = M, u.lastEndLoc = j, u.offset = o(), u.startLoc = a(), r.currentChar() === jt ? m(
      u,
      13
      /* TokenTypes.EOF */
    ) : dt(r, u);
  }
  return {
    nextToken: At,
    currentOffset: o,
    currentPosition: a,
    context: c
  };
}
const Nc = "parser", kc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Rc(e, t, n) {
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
function $c(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, w, A, T, ...y) {
    const I = f.currentPosition();
    if (I.offset += T, I.column += T, n) {
      const O = t ? Ao(A, I) : null, B = Qr(w, O, {
        domain: Nc,
        args: y
      });
      n(B);
    }
  }
  function o(f, w, A) {
    const T = { type: f };
    return t && (T.start = w, T.end = w, T.loc = { start: A, end: A }), T;
  }
  function a(f, w, A, T) {
    t && (f.end = w, f.loc && (f.loc.end = A));
  }
  function s(f, w) {
    const A = f.context(), T = o(3, A.offset, A.startLoc);
    return T.value = w, a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function l(f, w) {
    const A = f.context(), { lastOffset: T, lastStartLoc: y } = A, I = o(5, T, y);
    return I.index = parseInt(w, 10), f.nextToken(), a(I, f.currentOffset(), f.currentPosition()), I;
  }
  function u(f, w) {
    const A = f.context(), { lastOffset: T, lastStartLoc: y } = A, I = o(4, T, y);
    return I.key = w, f.nextToken(), a(I, f.currentOffset(), f.currentPosition()), I;
  }
  function c(f, w) {
    const A = f.context(), { lastOffset: T, lastStartLoc: y } = A, I = o(9, T, y);
    return I.value = w.replace(kc, Rc), f.nextToken(), a(I, f.currentOffset(), f.currentPosition()), I;
  }
  function d(f) {
    const w = f.nextToken(), A = f.context(), { lastOffset: T, lastStartLoc: y } = A, I = o(8, T, y);
    return w.type !== 11 ? (r(f, ve.UNEXPECTED_EMPTY_LINKED_MODIFIER, A.lastStartLoc, 0), I.value = "", a(I, T, y), {
      nextConsumeToken: w,
      node: I
    }) : (w.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Pt(w)), I.value = w.value || "", a(I, f.currentOffset(), f.currentPosition()), {
      node: I
    });
  }
  function p(f, w) {
    const A = f.context(), T = o(7, A.offset, A.startLoc);
    return T.value = w, a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function m(f) {
    const w = f.context(), A = o(6, w.offset, w.startLoc);
    let T = f.nextToken();
    if (T.type === 8) {
      const y = d(f);
      A.modifier = y.node, T = y.nextConsumeToken || f.nextToken();
    }
    switch (T.type !== 9 && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(T)), T = f.nextToken(), T.type === 2 && (T = f.nextToken()), T.type) {
      case 10:
        T.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(T)), A.key = p(f, T.value || "");
        break;
      case 4:
        T.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(T)), A.key = u(f, T.value || "");
        break;
      case 5:
        T.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(T)), A.key = l(f, T.value || "");
        break;
      case 6:
        T.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(T)), A.key = c(f, T.value || "");
        break;
      default: {
        r(f, ve.UNEXPECTED_EMPTY_LINKED_KEY, w.lastStartLoc, 0);
        const y = f.context(), I = o(7, y.offset, y.startLoc);
        return I.value = "", a(I, y.offset, y.startLoc), A.key = I, a(A, y.offset, y.startLoc), {
          nextConsumeToken: T,
          node: A
        };
      }
    }
    return a(A, f.currentOffset(), f.currentPosition()), {
      node: A
    };
  }
  function h(f) {
    const w = f.context(), A = w.currentType === 1 ? f.currentOffset() : w.offset, T = w.currentType === 1 ? w.endLoc : w.startLoc, y = o(2, A, T);
    y.items = [];
    let I = null;
    do {
      const U = I || f.nextToken();
      switch (I = null, U.type) {
        case 0:
          U.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(U)), y.items.push(s(f, U.value || ""));
          break;
        case 5:
          U.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(U)), y.items.push(l(f, U.value || ""));
          break;
        case 4:
          U.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(U)), y.items.push(u(f, U.value || ""));
          break;
        case 6:
          U.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(U)), y.items.push(c(f, U.value || ""));
          break;
        case 7: {
          const Q = m(f);
          y.items.push(Q.node), I = Q.nextConsumeToken || null;
          break;
        }
      }
    } while (w.currentType !== 13 && w.currentType !== 1);
    const O = w.currentType === 1 ? w.lastOffset : f.currentOffset(), B = w.currentType === 1 ? w.lastEndLoc : f.currentPosition();
    return a(y, O, B), y;
  }
  function v(f, w, A, T) {
    const y = f.context();
    let I = T.items.length === 0;
    const O = o(1, w, A);
    O.cases = [], O.cases.push(T);
    do {
      const B = h(f);
      I || (I = B.items.length === 0), O.cases.push(B);
    } while (y.currentType !== 13);
    return I && r(f, ve.MUST_HAVE_MESSAGES_IN_PLURAL, A, 0), a(O, f.currentOffset(), f.currentPosition()), O;
  }
  function g(f) {
    const w = f.context(), { offset: A, startLoc: T } = w, y = h(f);
    return w.currentType === 13 ? y : v(f, A, T, y);
  }
  function S(f) {
    const w = Pc(f, ze({}, e)), A = w.context(), T = o(0, A.offset, A.startLoc);
    return t && T.loc && (T.loc.source = f), T.body = g(w), e.onCacheKey && (T.cacheKey = e.onCacheKey(f)), A.currentType !== 13 && r(w, ve.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, f[A.offset] || ""), a(T, w.currentOffset(), w.currentPosition()), T;
  }
  return { parse: S };
}
function Pt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Mc(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Ga(e, t) {
  for (let n = 0; n < e.length; n++)
    Jo(e[n], t);
}
function Jo(e, t) {
  switch (e.type) {
    case 1:
      Ga(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Ga(e.items, t);
      break;
    case 6: {
      Jo(e.key, t), t.helper(
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
function Fc(e, t = {}) {
  const n = Mc(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Jo(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Dc(e) {
  const t = e.body;
  return t.type === 2 ? Ya(t) : t.cases.forEach((n) => Ya(n)), e;
}
function Ya(e) {
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
      e.static = Zo(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function kn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      kn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        kn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        kn(n[r]);
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
      kn(t.key), t.k = t.key, delete t.key, t.modifier && (kn(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Vc(e, t) {
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
  function u(g, S) {
    s.code += g;
  }
  function c(g, S = !0) {
    const f = S ? r : "";
    u(o ? f + "  ".repeat(g) : f);
  }
  function d(g = !0) {
    const S = ++s.indentLevel;
    g && c(S);
  }
  function p(g = !0) {
    const S = --s.indentLevel;
    g && c(S);
  }
  function m() {
    c(s.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: d,
    deindent: p,
    newline: m,
    helper: (g) => `_${g}`,
    needIndent: () => s.needIndent
  };
}
function xc(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Mn(e, t.key), t.modifier ? (e.push(", "), Mn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Bc(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (Mn(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Uc(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (Mn(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function zc(e, t) {
  t.body ? Mn(e, t.body) : e.push("null");
}
function Mn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      zc(e, t);
      break;
    case 1:
      Uc(e, t);
      break;
    case 2:
      Bc(e, t);
      break;
    case 6:
      xc(e, t);
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
const Wc = (e, t = {}) => {
  const n = Z(t.mode) ? t.mode : "normal", r = Z(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], l = Vc(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), s.length > 0 && (l.push(`const { ${Zo(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), Mn(l, e), l.deindent(a), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function jc(e, t = {}) {
  const n = ze({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, l = $c(n).parse(e);
  return r ? (a && Dc(l), o && kn(l), { ast: l, code: "" }) : (Fc(l, n), Wc(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Hc() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (kr().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ft(e) {
  return pe(e) && Qo(e) === 0 && (wt(e, "b") || wt(e, "body"));
}
const Dl = ["b", "body"];
function Kc(e) {
  return vn(e, Dl);
}
const Vl = ["c", "cases"];
function Gc(e) {
  return vn(e, Vl, []);
}
const xl = ["s", "static"];
function Yc(e) {
  return vn(e, xl);
}
const Bl = ["i", "items"];
function qc(e) {
  return vn(e, Bl, []);
}
const Ul = ["t", "type"];
function Qo(e) {
  return vn(e, Ul);
}
const zl = ["v", "value"];
function Cr(e, t) {
  const n = vn(e, zl);
  if (n != null)
    return n;
  throw ar(t);
}
const Wl = ["m", "modifier"];
function Xc(e) {
  return vn(e, Wl);
}
const jl = ["k", "key"];
function Zc(e) {
  const t = vn(e, jl);
  if (t)
    return t;
  throw ar(
    6
    /* NodeTypes.Linked */
  );
}
function vn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (wt(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Hl = [
  ...Dl,
  ...Vl,
  ...xl,
  ...Bl,
  ...jl,
  ...Wl,
  ...zl,
  ...Ul
];
function ar(e) {
  return new Error(`unhandled node type: ${e}`);
}
function yo(e) {
  return (n) => Jc(n, e);
}
function Jc(e, t) {
  const n = Kc(t);
  if (n == null)
    throw ar(
      0
      /* NodeTypes.Resource */
    );
  if (Qo(n) === 1) {
    const a = Gc(n);
    return e.plural(a.reduce((s, l) => [
      ...s,
      qa(e, l)
    ], []));
  } else
    return qa(e, n);
}
function qa(e, t) {
  const n = Yc(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = qc(t).reduce((o, a) => [...o, Lo(e, a)], []);
    return e.normalize(r);
  }
}
function Lo(e, t) {
  const n = Qo(t);
  switch (n) {
    case 3:
      return Cr(t, n);
    case 9:
      return Cr(t, n);
    case 4: {
      const r = t;
      if (wt(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (wt(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw ar(n);
    }
    case 5: {
      const r = t;
      if (wt(r, "i") && De(r.i))
        return e.interpolate(e.list(r.i));
      if (wt(r, "index") && De(r.index))
        return e.interpolate(e.list(r.index));
      throw ar(n);
    }
    case 6: {
      const r = t, o = Xc(r), a = Zc(r);
      return e.linked(Lo(e, a), o ? Lo(e, o) : void 0, e.type);
    }
    case 7:
      return Cr(t, n);
    case 8:
      return Cr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Qc = (e) => e;
let Tr = be();
function ef(e, t = {}) {
  let n = !1;
  const r = t.onError || Sc;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...jc(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function tf(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Z(e)) {
    Le(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || Qc)(e), o = Tr[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = ef(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = yo(a);
    return s ? l : Tr[r] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Tr[n];
      return r || (Tr[n] = yo(e));
    } else
      return yo(e);
  }
}
const Yt = {
  INVALID_ARGUMENT: Ec,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, nf = 24;
function qt(e) {
  return Qr(e, null, void 0);
}
function ea(e, t) {
  return t.locale != null ? Xa(t.locale) : Xa(e.locale);
}
let bo;
function Xa(e) {
  if (Z(e))
    return e;
  if (Te(e)) {
    if (e.resolvedOnce && bo != null)
      return bo;
    if (e.constructor.name === "Function") {
      const t = e();
      if (bc(t))
        throw qt(Yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return bo = t;
    } else
      throw qt(Yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw qt(Yt.NOT_SUPPORT_LOCALE_TYPE);
}
function rf(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Pe(t) ? t : pe(t) ? Object.keys(t) : Z(t) ? [t] : [n]
  ])];
}
function Kl(e, t, n) {
  const r = Z(n) ? n : Ur, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; Pe(s); )
      s = Za(a, s, t);
    const l = Pe(t) || !de(t) ? t : t.default ? t.default : null;
    s = Z(l) ? [l] : l, Pe(s) && Za(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Za(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Le(r); o++) {
    const a = t[o];
    Z(a) && (r = of(e, t[o], n));
  }
  return r;
}
function of(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = af(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function af(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Pe(n) || de(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const gn = [];
gn[
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
gn[
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
gn[
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
gn[
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
gn[
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
gn[
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
gn[
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
const sf = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function lf(e) {
  return sf.test(e);
}
function uf(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function cf(e) {
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
function ff(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : lf(t) ? uf(t) : "*" + t;
}
function df(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, l, u, c, d, p;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = l : s += l;
  }, m[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, m[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    m[
      0
      /* Actions.APPEND */
    ](), o++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, r = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, s === void 0 || (s = ff(s), s === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function h() {
    const v = e[n + 1];
    if (r === 5 && v === "'" || r === 6 && v === '"')
      return n++, l = "\\" + v, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && h())) {
      if (u = cf(a), p = gn[r], c = p[u] || p.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (d = m[c[1]], d && (l = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ja = /* @__PURE__ */ new Map();
function pf(e, t) {
  return pe(e) ? e[t] : null;
}
function mf(e, t) {
  if (!pe(e))
    return null;
  let n = Ja.get(t);
  if (n || (n = df(t), n && Ja.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Hl.includes(s) && Ft(o))
      return null;
    const l = o[s];
    if (l === void 0 || Te(o))
      return null;
    o = l, a++;
  }
  return o;
}
const vf = "11.2.2", eo = -1, Ur = "en-US", Qa = "", es = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function gf() {
  return {
    upper: (e, t) => t === "text" && Z(e) ? e.toUpperCase() : t === "vnode" && pe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Z(e) ? e.toLowerCase() : t === "vnode" && pe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Z(e) ? es(e) : t === "vnode" && pe(e) && "__v_isVNode" in e ? es(e.children) : e
  };
}
let Gl;
function hf(e) {
  Gl = e;
}
let Yl;
function yf(e) {
  Yl = e;
}
let ql;
function bf(e) {
  ql = e;
}
let Xl = null;
const ts = (e) => {
  Xl = e;
}, _f = () => Xl;
let ns = 0;
function wf(e = {}) {
  const t = Te(e.onWarn) ? e.onWarn : dc, n = Z(e.version) ? e.version : vf, r = Z(e.locale) || Te(e.locale) ? e.locale : Ur, o = Te(r) ? Ur : r, a = Pe(e.fallbackLocale) || de(e.fallbackLocale) || Z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = de(e.messages) ? e.messages : _o(o), l = de(e.datetimeFormats) ? e.datetimeFormats : _o(o), u = de(e.numberFormats) ? e.numberFormats : _o(o), c = ze(be(), e.modifiers, gf()), d = e.pluralRules || be(), p = Te(e.missing) ? e.missing : null, m = Le(e.missingWarn) || Br(e.missingWarn) ? e.missingWarn : !0, h = Le(e.fallbackWarn) || Br(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, g = !!e.unresolving, S = Te(e.postTranslation) ? e.postTranslation : null, f = de(e.processor) ? e.processor : null, w = Le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, A = !!e.escapeParameter, T = Te(e.messageCompiler) ? e.messageCompiler : Gl, y = Te(e.messageResolver) ? e.messageResolver : Yl || pf, I = Te(e.localeFallbacker) ? e.localeFallbacker : ql || rf, O = pe(e.fallbackContext) ? e.fallbackContext : void 0, B = e, U = pe(B.__datetimeFormatters) ? B.__datetimeFormatters : /* @__PURE__ */ new Map(), Q = pe(B.__numberFormatters) ? B.__numberFormatters : /* @__PURE__ */ new Map(), oe = pe(B.__meta) ? B.__meta : {};
  ns++;
  const J = {
    version: n,
    cid: ns,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: c,
    pluralRules: d,
    missing: p,
    missingWarn: m,
    fallbackWarn: h,
    fallbackFormat: v,
    unresolving: g,
    postTranslation: S,
    processor: f,
    warnHtmlMessage: w,
    escapeParameter: A,
    messageCompiler: T,
    messageResolver: y,
    localeFallbacker: I,
    fallbackContext: O,
    onWarn: t,
    __meta: oe
  };
  return J.datetimeFormats = l, J.numberFormats = u, J.__datetimeFormatters = U, J.__numberFormatters = Q, J;
}
const _o = (e) => ({ [e]: be() });
function ta(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const l = a(e, n, t, o);
    return Z(l) ? l : t;
  } else
    return t;
}
function Yn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Ef(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Sf(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Ef(e, t[r]))
      return !0;
  return !1;
}
function rs(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: l } = e, [u, c, d, p] = Po(...t), m = Le(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Le(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const h = !!d.part, v = ea(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!Z(u) || u === "")
    return new Intl.DateTimeFormat(v, p).format(c);
  let S = {}, f, w = null;
  const A = "datetime format";
  for (let I = 0; I < g.length && (f = g[I], S = n[f] || {}, w = S[u], !de(w)); I++)
    ta(e, u, f, m, A);
  if (!de(w) || !Z(f))
    return r ? eo : u;
  let T = `${f}__${u}`;
  Jr(p) || (T = `${T}__${JSON.stringify(p)}`);
  let y = l.get(T);
  return y || (y = new Intl.DateTimeFormat(f, ze({}, w, p)), l.set(T, y)), h ? y.formatToParts(c) : y.format(c);
}
const Zl = [
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
function Po(...e) {
  const [t, n, r, o] = e, a = be();
  let s = be(), l;
  if (Z(t)) {
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
  } else if (vc(t)) {
    if (isNaN(t.getTime()))
      throw qt(Yt.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (De(t))
    l = t;
  else
    throw qt(Yt.INVALID_ARGUMENT);
  return Z(n) ? a.key = n : de(n) && Object.keys(n).forEach((u) => {
    Zl.includes(u) ? s[u] = n[u] : a[u] = n[u];
  }), Z(r) ? a.locale = r : de(r) && (s = r), de(o) && (s = o), [a.key || "", l, a, s];
}
function os(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function as(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: l } = e, [u, c, d, p] = No(...t), m = Le(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Le(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const h = !!d.part, v = ea(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!Z(u) || u === "")
    return new Intl.NumberFormat(v, p).format(c);
  let S = {}, f, w = null;
  const A = "number format";
  for (let I = 0; I < g.length && (f = g[I], S = n[f] || {}, w = S[u], !de(w)); I++)
    ta(e, u, f, m, A);
  if (!de(w) || !Z(f))
    return r ? eo : u;
  let T = `${f}__${u}`;
  Jr(p) || (T = `${T}__${JSON.stringify(p)}`);
  let y = l.get(T);
  return y || (y = new Intl.NumberFormat(f, ze({}, w, p)), l.set(T, y)), h ? y.formatToParts(c) : y.format(c);
}
const Jl = [
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
function No(...e) {
  const [t, n, r, o] = e, a = be();
  let s = be();
  if (!De(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const l = t;
  return Z(n) ? a.key = n : de(n) && Object.keys(n).forEach((u) => {
    Jl.includes(u) ? s[u] = n[u] : a[u] = n[u];
  }), Z(r) ? a.locale = r : de(r) && (s = r), de(o) && (s = o), [a.key || "", l, a, s];
}
function ss(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Cf = (e) => e, Tf = (e) => "", Of = "text", If = (e) => e.length === 0 ? "" : Zo(e), Af = _c;
function ls(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Lf(e) {
  const t = De(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (De(e.named.count) || De(e.named.n)) ? De(e.named.count) ? e.named.count : De(e.named.n) ? e.named.n : t : t;
}
function Pf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Nf(e = {}) {
  const t = e.locale, n = Lf(e), r = pe(e.pluralRules) && Z(t) && Te(e.pluralRules[t]) ? e.pluralRules[t] : ls, o = pe(e.pluralRules) && Z(t) && Te(e.pluralRules[t]) ? ls : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], l = (f) => s[f], u = e.named || be();
  De(e.pluralIndex) && Pf(n, u);
  const c = (f) => u[f];
  function d(f, w) {
    const A = Te(e.messages) ? e.messages(f, !!w) : pe(e.messages) ? e.messages[f] : !1;
    return A || (e.parent ? e.parent.message(f) : Tf);
  }
  const p = (f) => e.modifiers ? e.modifiers[f] : Cf, m = de(e.processor) && Te(e.processor.normalize) ? e.processor.normalize : If, h = de(e.processor) && Te(e.processor.interpolate) ? e.processor.interpolate : Af, v = de(e.processor) && Z(e.processor.type) ? e.processor.type : Of, S = {
    list: l,
    named: c,
    plural: a,
    linked: (f, ...w) => {
      const [A, T] = w;
      let y = "text", I = "";
      w.length === 1 ? pe(A) ? (I = A.modifier || I, y = A.type || y) : Z(A) && (I = A || I) : w.length === 2 && (Z(A) && (I = A || I), Z(T) && (y = T || y));
      const O = d(f, !0)(S), B = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        y === "vnode" && Pe(O) && I ? O[0] : O
      );
      return I ? p(I)(B, y) : B;
    },
    message: d,
    type: v,
    interpolate: h,
    normalize: m,
    values: ze(be(), s, u)
  };
  return S;
}
const is = () => "", Zt = (e) => Te(e);
function us(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: l } = e, [u, c] = ko(...t), d = Le(c.missingWarn) ? c.missingWarn : e.missingWarn, p = Le(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, m = Le(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, h = !!c.resolvedMessage, v = Z(c.default) || Le(c.default) ? Le(c.default) ? a ? u : () => u : c.default : n ? a ? u : () => u : null, g = n || v != null && (Z(v) || Te(v)), S = ea(e, c);
  m && kf(c);
  let [f, w, A] = h ? [
    u,
    S,
    l[S] || be()
  ] : Ql(e, u, S, s, p, d), T = f, y = u;
  if (!h && !(Z(T) || Ft(T) || Zt(T)) && g && (T = v, y = T), !h && (!(Z(T) || Ft(T) || Zt(T)) || !Z(w)))
    return o ? eo : u;
  let I = !1;
  const O = () => {
    I = !0;
  }, B = Zt(T) ? T : ei(e, u, w, T, y, O);
  if (I)
    return T;
  const U = Mf(e, w, A, c), Q = Nf(U), oe = Rf(e, B, Q);
  let J = r ? r(oe, u) : oe;
  return m && Z(J) && (J = hc(J)), J;
}
function kf(e) {
  Pe(e.list) ? e.list = e.list.map((t) => Z(t) ? ja(t) : t) : pe(e.named) && Object.keys(e.named).forEach((t) => {
    Z(e.named[t]) && (e.named[t] = ja(e.named[t]));
  });
}
function Ql(e, t, n, r, o, a) {
  const { messages: s, onWarn: l, messageResolver: u, localeFallbacker: c } = e, d = c(e, r, n);
  let p = be(), m, h = null;
  const v = "translate";
  for (let g = 0; g < d.length && (m = d[g], p = s[m] || be(), (h = u(p, t)) === null && (h = p[t]), !(Z(h) || Ft(h) || Zt(h))); g++)
    if (!Sf(m, d)) {
      const S = ta(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        v
      );
      S !== t && (h = S);
    }
  return [h, m, p];
}
function ei(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: l } = e;
  if (Zt(r)) {
    const c = r;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (s == null) {
    const c = () => r;
    return c.locale = n, c.key = t, c;
  }
  const u = s(r, $f(e, n, o, r, l, a));
  return u.locale = n, u.key = t, u.source = r, u;
}
function Rf(e, t, n) {
  return t(n);
}
function ko(...e) {
  const [t, n, r] = e, o = be();
  if (!Z(t) && !De(t) && !Zt(t) && !Ft(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const a = De(t) ? String(t) : (Zt(t), t);
  return De(n) ? o.plural = n : Z(n) ? o.default = n : de(n) && !Jr(n) ? o.named = n : Pe(n) && (o.list = n), De(r) ? o.plural = r : Z(r) ? o.default = r : de(r) && ze(o, r), [a, o];
}
function $f(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => pc(t, n, s)
  };
}
function Mf(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: l, fallbackWarn: u, missingWarn: c, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (h, v) => {
      let g = s(n, h);
      if (g == null && (d || v)) {
        const [, , S] = Ql(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          h,
          t,
          l,
          u,
          c
        );
        g = s(S, h);
      }
      if (Z(g) || Ft(g)) {
        let S = !1;
        const w = ei(e, h, t, g, h, () => {
          S = !0;
        });
        return S ? is : w;
      } else return Zt(g) ? g : is;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), De(r.plural) && (m.pluralIndex = r.plural), m;
}
Hc();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ff = "11.2.2";
function Df() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (kr().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (kr().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (kr().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Fn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: nf,
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
function sr(e, ...t) {
  return Qr(e, null, void 0);
}
const Ro = /* @__PURE__ */ Tn("__translateVNode"), $o = /* @__PURE__ */ Tn("__datetimeParts"), Mo = /* @__PURE__ */ Tn("__numberParts"), Vf = Tn("__setPluralRules"), ti = /* @__PURE__ */ Tn("__injectWithOption"), Fo = /* @__PURE__ */ Tn("__dispose");
function lr(e) {
  if (!pe(e) || Ft(e))
    return e;
  for (const t in e)
    if (wt(e, t))
      if (!t.includes("."))
        pe(e[t]) && lr(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = be()), !pe(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Ft(o) ? Hl.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Ft(o)) {
          const s = o[n[r]];
          pe(s) && lr(s);
        }
      }
  return e;
}
function ni(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = de(n) ? n : Pe(r) ? be() : { [e]: be() };
  if (Pe(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: u, resource: c } = l;
      u ? (s[u] = s[u] || be(), Rr(c, s[u])) : Rr(c, s);
    } else
      Z(l) && Rr(JSON.parse(l), s);
  }), o == null && a)
    for (const l in s)
      wt(s, l) && lr(s[l]);
  return s;
}
function xf(e) {
  return e.type;
}
function Bf(e, t, n) {
  let r = pe(t.messages) ? t.messages : be();
  "__i18nGlobal" in n && (r = ni(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
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
function cs(e) {
  return X(Rl, null, e, 0);
}
function ri() {
  return "currentInstance" in ho ? ho["currentInstance"] : ho.getCurrentInstance();
}
const fs = () => [], Uf = () => !1;
let ds = 0;
function ps(e) {
  return (t, n, r, o) => e(n, r, ri() || void 0, o);
}
function zf(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = za ? D : dn;
  let s = Le(e.inheritLocale) ? e.inheritLocale : !0;
  const l = a(
    // prettier-ignore
    t && s ? t.locale.value : Z(e.locale) ? e.locale : Ur
  ), u = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : Z(e.fallbackLocale) || Pe(e.fallbackLocale) || de(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), c = a(ni(l.value, e)), d = a(de(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), p = a(de(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let m = t ? t.missingWarn : Le(e.missingWarn) || Br(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : Le(e.fallbackWarn) || Br(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : Le(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, S = Te(e.missing) ? e.missing : null, f = Te(e.missing) ? ps(e.missing) : null, w = Te(e.postTranslation) ? e.postTranslation : null, A = t ? t.warnHtmlMessage : Le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const y = t ? t.modifiers : de(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    r && ts(null);
    const b = {
      version: Ff,
      locale: l.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: y,
      pluralRules: I,
      missing: f === null ? void 0 : f,
      missingWarn: m,
      fallbackWarn: h,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: w === null ? void 0 : w,
      warnHtmlMessage: A,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    b.datetimeFormats = d.value, b.numberFormats = p.value, b.__datetimeFormatters = de(O) ? O.__datetimeFormatters : void 0, b.__numberFormatters = de(O) ? O.__numberFormatters : void 0;
    const $ = wf(b);
    return r && ts($), $;
  })(), Yn(O, l.value, u.value);
  function U() {
    return [
      l.value,
      u.value,
      c.value,
      d.value,
      p.value
    ];
  }
  const Q = L({
    get: () => l.value,
    set: (b) => {
      O.locale = b, l.value = b;
    }
  }), oe = L({
    get: () => u.value,
    set: (b) => {
      O.fallbackLocale = b, u.value = b, Yn(O, l.value, b);
    }
  }), J = L(() => c.value), le = /* @__PURE__ */ L(() => d.value), Se = /* @__PURE__ */ L(() => p.value);
  function P() {
    return Te(w) ? w : null;
  }
  function R(b) {
    w = b, O.postTranslation = b;
  }
  function F() {
    return S;
  }
  function te(b) {
    b !== null && (f = ps(b)), S = b, O.missing = f;
  }
  const q = (b, $, ie, me, Ke, yn) => {
    U();
    let pt;
    try {
      r || (O.fallbackContext = t ? _f() : void 0), pt = b(O);
    } finally {
      r || (O.fallbackContext = void 0);
    }
    if (ie !== "translate exists" && // for not `te` (e.g `t`)
    De(pt) && pt === eo || ie === "translate exists" && !pt) {
      const [go, Fa] = $();
      return t && v ? me(t) : Ke(go);
    } else {
      if (yn(pt))
        return pt;
      throw sr(Fn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ce(...b) {
    return q(($) => Reflect.apply(us, null, [$, ...b]), () => ko(...b), "translate", ($) => Reflect.apply($.t, $, [...b]), ($) => $, ($) => Z($));
  }
  function H(...b) {
    const [$, ie, me] = b;
    if (me && !pe(me))
      throw sr(Fn.INVALID_ARGUMENT);
    return ce($, ie, ze({ resolvedMessage: !0 }, me || {}));
  }
  function Me(...b) {
    return q(($) => Reflect.apply(rs, null, [$, ...b]), () => Po(...b), "datetime format", ($) => Reflect.apply($.d, $, [...b]), () => Qa, ($) => Z($) || Pe($));
  }
  function _e(...b) {
    return q(($) => Reflect.apply(as, null, [$, ...b]), () => No(...b), "number format", ($) => Reflect.apply($.n, $, [...b]), () => Qa, ($) => Z($) || Pe($));
  }
  function We(b) {
    return b.map(($) => Z($) || De($) || Le($) ? cs(String($)) : $);
  }
  const je = {
    normalize: We,
    interpolate: (b) => b,
    type: "vnode"
  };
  function He(...b) {
    return q(($) => {
      let ie;
      const me = $;
      try {
        me.processor = je, ie = Reflect.apply(us, null, [me, ...b]);
      } finally {
        me.processor = null;
      }
      return ie;
    }, () => ko(...b), "translate", ($) => $[Ro](...b), ($) => [cs($)], ($) => Pe($));
  }
  function ye(...b) {
    return q(($) => Reflect.apply(as, null, [$, ...b]), () => No(...b), "number format", ($) => $[Mo](...b), fs, ($) => Z($) || Pe($));
  }
  function rt(...b) {
    return q(($) => Reflect.apply(rs, null, [$, ...b]), () => Po(...b), "datetime format", ($) => $[$o](...b), fs, ($) => Z($) || Pe($));
  }
  function ft(b) {
    I = b, O.pluralRules = I;
  }
  function ot(b, $) {
    return q(() => {
      if (!b)
        return !1;
      const ie = Z($) ? $ : l.value, me = st(ie), Ke = O.messageResolver(me, b);
      return Ft(Ke) || Zt(Ke) || Z(Ke);
    }, () => [b], "translate exists", (ie) => Reflect.apply(ie.te, ie, [b, $]), Uf, (ie) => Le(ie));
  }
  function yt(b) {
    let $ = null;
    const ie = Kl(O, u.value, l.value);
    for (let me = 0; me < ie.length; me++) {
      const Ke = c.value[ie[me]] || {}, yn = O.messageResolver(Ke, b);
      if (yn != null) {
        $ = yn;
        break;
      }
    }
    return $;
  }
  function at(b) {
    const $ = yt(b);
    return $ ?? (t ? t.tm(b) || {} : {});
  }
  function st(b) {
    return c.value[b] || {};
  }
  function lt(b, $) {
    if (o) {
      const ie = { [b]: $ };
      for (const me in ie)
        wt(ie, me) && lr(ie[me]);
      $ = ie[b];
    }
    c.value[b] = $, O.messages = c.value;
  }
  function dt(b, $) {
    c.value[b] = c.value[b] || {};
    const ie = { [b]: $ };
    if (o)
      for (const me in ie)
        wt(ie, me) && lr(ie[me]);
    $ = ie[b], Rr($, c.value[b]), O.messages = c.value;
  }
  function At(b) {
    return d.value[b] || {};
  }
  function _(b, $) {
    d.value[b] = $, O.datetimeFormats = d.value, os(O, b, $);
  }
  function C(b, $) {
    d.value[b] = ze(d.value[b] || {}, $), O.datetimeFormats = d.value, os(O, b, $);
  }
  function M(b) {
    return p.value[b] || {};
  }
  function j(b, $) {
    p.value[b] = $, O.numberFormats = p.value, ss(O, b, $);
  }
  function fe(b, $) {
    p.value[b] = ze(p.value[b] || {}, $), O.numberFormats = p.value, ss(O, b, $);
  }
  ds++, t && za && (se(t.locale, (b) => {
    s && (l.value = b, O.locale = b, Yn(O, l.value, u.value));
  }), se(t.fallbackLocale, (b) => {
    s && (u.value = b, O.fallbackLocale = b, Yn(O, l.value, u.value));
  }));
  const ne = {
    id: ds,
    locale: Q,
    fallbackLocale: oe,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(b) {
      s = b, b && t && (l.value = t.locale.value, u.value = t.fallbackLocale.value, Yn(O, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: J,
    get modifiers() {
      return y;
    },
    get pluralRules() {
      return I || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(b) {
      m = b, O.missingWarn = m;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(b) {
      h = b, O.fallbackWarn = h;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(b) {
      v = b;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(b) {
      g = b, O.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return A;
    },
    set warnHtmlMessage(b) {
      A = b, O.warnHtmlMessage = b;
    },
    get escapeParameter() {
      return T;
    },
    set escapeParameter(b) {
      T = b, O.escapeParameter = b;
    },
    t: ce,
    getLocaleMessage: st,
    setLocaleMessage: lt,
    mergeLocaleMessage: dt,
    getPostTranslationHandler: P,
    setPostTranslationHandler: R,
    getMissingHandler: F,
    setMissingHandler: te,
    [Vf]: ft
  };
  return ne.datetimeFormats = le, ne.numberFormats = Se, ne.rt = H, ne.te = ot, ne.tm = at, ne.d = Me, ne.n = _e, ne.getDateTimeFormat = At, ne.setDateTimeFormat = _, ne.mergeDateTimeFormat = C, ne.getNumberFormat = M, ne.setNumberFormat = j, ne.mergeNumberFormat = fe, ne[ti] = n, ne[Ro] = He, ne[$o] = rt, ne[Mo] = ye, ne;
}
const na = {
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
function Wf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === et ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, be());
}
function oi() {
  return et;
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
}, na);
function jf(e) {
  return Pe(e) && !Z(e[0]);
}
function ai(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let l = be();
    e.locale && (s.locale = e.locale), Z(e.format) ? s.key = e.format : pe(e.format) && (Z(e.format.key) && (s.key = e.format.key), l = Object.keys(e.format).reduce((m, h) => n.includes(h) ? ze(be(), m, { [h]: e.format[h] }) : m, be()));
    const u = r(e.value, s, l);
    let c = [s.key];
    Pe(u) ? c = u.map((m, h) => {
      const v = o[m.type], g = v ? v({ [m.type]: m.value, index: h, parts: u }) : [m.value];
      return jf(g) && (g[0].key = `${m.type}-${h}`), g;
    }) : Z(u) && (c = [u]);
    const d = ze(be(), a), p = Z(e.tag) || pe(e.tag) ? e.tag : oi();
    return kl(p, d, c);
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
}, na);
const Hf = /* @__PURE__ */ Tn("global-vue-i18n");
function pr(e = {}) {
  const t = ri();
  if (t == null)
    throw sr(Fn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw sr(Fn.NOT_INSTALLED);
  const n = Kf(t), r = Yf(n), o = xf(t), a = Gf(e, o);
  if (a === "global")
    return Bf(r, e, o), r;
  if (a === "parent") {
    let u = qf(n, t, e.__useComponent);
    return u == null && (u = r), u;
  }
  const s = n;
  let l = s.__getInstance(t);
  if (l == null) {
    const u = ze({}, e);
    "__i18n" in o && (u.__i18n = o.__i18n), r && (u.__root = r), l = zf(u), s.__composerExtend && (l[Fo] = s.__composerExtend(l)), Zf(s, t, l), s.__setInstance(t, l);
  }
  return l;
}
function Kf(e) {
  const t = he(e.isCE ? Hf : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw sr(e.isCE ? Fn.NOT_INSTALLED_WITH_PROVIDE : Fn.UNEXPECTED_ERROR);
  return t;
}
function Gf(e, t) {
  return Jr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Yf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function qf(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = Xf(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = s.__getInstance(a);
      l != null && (r = l.__composer, n && r && !r[ti] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function Xf(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Zf(e, t, n) {
  Ne(() => {
  }, t), Zr(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Fo];
    o && (o(), delete r[Fo]);
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
}, na);
Df();
hf(tf);
yf(mf);
bf(Kl);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var ms;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ms || (ms = {}));
var vs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(vs || (vs = {}));
var gs;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(gs || (gs = {}));
const Jf = Symbol("");
function Qf() {
  return he(Jf);
}
const ed = ["disabled"], td = {
  key: 0,
  class: "custom-button__loading"
}, nd = /* @__PURE__ */ Y({
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
    return (n, r) => (k(), W("button", {
      class: x([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: r[0] || (r[0] = (o) => n.$emit("click", o))
    }, [
      e.loading ? (k(), W("div", td, r[1] || (r[1] = [
        E(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            E("circle", {
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
      ]))) : K("v-if", !0),
      ae(n.$slots, "default", {}, void 0, !0)
    ], 10, ed));
  }
}), ra = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, mt = /* @__PURE__ */ ra(nd, [["__scopeId", "data-v-9497085f"]]), si = Symbol(), $r = "el", rd = "is-", _n = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, li = Symbol("namespaceContextKey"), oa = (e) => {
  const t = e || (Je() ? he(li, D($r)) : D($r));
  return L(() => i(t) || $r);
}, $e = (e, t) => {
  const n = oa(t);
  return {
    namespace: n,
    b: (g = "") => _n(n.value, e, g, "", ""),
    e: (g) => g ? _n(n.value, e, "", g, "") : "",
    m: (g) => g ? _n(n.value, e, "", "", g) : "",
    be: (g, S) => g && S ? _n(n.value, e, g, S, "") : "",
    em: (g, S) => g && S ? _n(n.value, e, "", g, S) : "",
    bm: (g, S) => g && S ? _n(n.value, e, g, "", S) : "",
    bem: (g, S, f) => g && S && f ? _n(n.value, e, g, S, f) : "",
    is: (g, ...S) => {
      const f = S.length >= 1 ? S[0] : !0;
      return g && f ? `${rd}${g}` : "";
    },
    cssVar: (g) => {
      const S = {};
      for (const f in g)
        g[f] && (S[`--${n.value}-${f}`] = g[f]);
      return S;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const S = {};
      for (const f in g)
        g[f] && (S[`--${n.value}-${e}-${f}`] = g[f]);
      return S;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ir = () => {
}, od = Object.prototype.hasOwnProperty, hs = (e, t) => od.call(e, t), Rt = Array.isArray, Oe = (e) => typeof e == "function", qe = (e) => typeof e == "string", ut = (e) => e !== null && typeof e == "object", ys = (e) => (ut(e) || Oe(e)) && Oe(e.then) && Oe(e.catch), ad = Object.prototype.toString, sd = (e) => ad.call(e), ld = (e) => sd(e) === "[object Object]";
var ii = typeof global == "object" && global && global.Object === Object && global, id = typeof self == "object" && self && self.Object === Object && self, Wt = ii || id || Function("return this")(), Bt = Wt.Symbol, ui = Object.prototype, ud = ui.hasOwnProperty, cd = ui.toString, qn = Bt ? Bt.toStringTag : void 0;
function fd(e) {
  var t = ud.call(e, qn), n = e[qn];
  try {
    e[qn] = void 0;
    var r = !0;
  } catch {
  }
  var o = cd.call(e);
  return r && (t ? e[qn] = n : delete e[qn]), o;
}
var dd = Object.prototype, pd = dd.toString;
function md(e) {
  return pd.call(e);
}
var vd = "[object Null]", gd = "[object Undefined]", bs = Bt ? Bt.toStringTag : void 0;
function Kn(e) {
  return e == null ? e === void 0 ? gd : vd : bs && bs in Object(e) ? fd(e) : md(e);
}
function Dn(e) {
  return e != null && typeof e == "object";
}
var hd = "[object Symbol]";
function to(e) {
  return typeof e == "symbol" || Dn(e) && Kn(e) == hd;
}
function yd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Tt = Array.isArray, _s = Bt ? Bt.prototype : void 0, ws = _s ? _s.toString : void 0;
function ci(e) {
  if (typeof e == "string")
    return e;
  if (Tt(e))
    return yd(e, ci) + "";
  if (to(e))
    return ws ? ws.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var bd = /\s/;
function _d(e) {
  for (var t = e.length; t-- && bd.test(e.charAt(t)); )
    ;
  return t;
}
var wd = /^\s+/;
function Ed(e) {
  return e && e.slice(0, _d(e) + 1).replace(wd, "");
}
function mn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Es = NaN, Sd = /^[-+]0x[0-9a-f]+$/i, Cd = /^0b[01]+$/i, Td = /^0o[0-7]+$/i, Od = parseInt;
function Ss(e) {
  if (typeof e == "number")
    return e;
  if (to(e))
    return Es;
  if (mn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = mn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ed(e);
  var n = Cd.test(e);
  return n || Td.test(e) ? Od(e.slice(2), n ? 2 : 8) : Sd.test(e) ? Es : +e;
}
function fi(e) {
  return e;
}
var Id = "[object AsyncFunction]", Ad = "[object Function]", Ld = "[object GeneratorFunction]", Pd = "[object Proxy]";
function di(e) {
  if (!mn(e))
    return !1;
  var t = Kn(e);
  return t == Ad || t == Ld || t == Id || t == Pd;
}
var wo = Wt["__core-js_shared__"], Cs = function() {
  var e = /[^.]+$/.exec(wo && wo.keys && wo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nd(e) {
  return !!Cs && Cs in e;
}
var kd = Function.prototype, Rd = kd.toString;
function On(e) {
  if (e != null) {
    try {
      return Rd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var $d = /[\\^$.*+?()[\]{}|]/g, Md = /^\[object .+?Constructor\]$/, Fd = Function.prototype, Dd = Object.prototype, Vd = Fd.toString, xd = Dd.hasOwnProperty, Bd = RegExp(
  "^" + Vd.call(xd).replace($d, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ud(e) {
  if (!mn(e) || Nd(e))
    return !1;
  var t = di(e) ? Bd : Md;
  return t.test(On(e));
}
function zd(e, t) {
  return e?.[t];
}
function In(e, t) {
  var n = zd(e, t);
  return Ud(n) ? n : void 0;
}
var Do = In(Wt, "WeakMap");
function Wd(e, t, n) {
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
var jd = 800, Hd = 16, Kd = Date.now;
function Gd(e) {
  var t = 0, n = 0;
  return function() {
    var r = Kd(), o = Hd - (r - n);
    if (n = r, o > 0) {
      if (++t >= jd)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Yd(e) {
  return function() {
    return e;
  };
}
var zr = function() {
  try {
    var e = In(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), qd = zr ? function(e, t) {
  return zr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Yd(t),
    writable: !0
  });
} : fi, Xd = Gd(qd);
function Zd(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Jd = 9007199254740991, Qd = /^(?:0|[1-9]\d*)$/;
function aa(e, t) {
  var n = typeof e;
  return t = t ?? Jd, !!t && (n == "number" || n != "symbol" && Qd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ep(e, t, n) {
  t == "__proto__" && zr ? zr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function sa(e, t) {
  return e === t || e !== e && t !== t;
}
var tp = Object.prototype, np = tp.hasOwnProperty;
function rp(e, t, n) {
  var r = e[t];
  (!(np.call(e, t) && sa(r, n)) || n === void 0 && !(t in e)) && ep(e, t, n);
}
var Ts = Math.max;
function op(e, t, n) {
  return t = Ts(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Ts(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(s), Wd(e, this, l);
  };
}
var ap = 9007199254740991;
function la(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ap;
}
function sp(e) {
  return e != null && la(e.length) && !di(e);
}
var lp = Object.prototype;
function ip(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || lp;
  return e === n;
}
function up(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var cp = "[object Arguments]";
function Os(e) {
  return Dn(e) && Kn(e) == cp;
}
var pi = Object.prototype, fp = pi.hasOwnProperty, dp = pi.propertyIsEnumerable, ia = Os(/* @__PURE__ */ function() {
  return arguments;
}()) ? Os : function(e) {
  return Dn(e) && fp.call(e, "callee") && !dp.call(e, "callee");
};
function pp() {
  return !1;
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, Is = mi && typeof module == "object" && module && !module.nodeType && module, mp = Is && Is.exports === mi, As = mp ? Wt.Buffer : void 0, vp = As ? As.isBuffer : void 0, Vo = vp || pp, gp = "[object Arguments]", hp = "[object Array]", yp = "[object Boolean]", bp = "[object Date]", _p = "[object Error]", wp = "[object Function]", Ep = "[object Map]", Sp = "[object Number]", Cp = "[object Object]", Tp = "[object RegExp]", Op = "[object Set]", Ip = "[object String]", Ap = "[object WeakMap]", Lp = "[object ArrayBuffer]", Pp = "[object DataView]", Np = "[object Float32Array]", kp = "[object Float64Array]", Rp = "[object Int8Array]", $p = "[object Int16Array]", Mp = "[object Int32Array]", Fp = "[object Uint8Array]", Dp = "[object Uint8ClampedArray]", Vp = "[object Uint16Array]", xp = "[object Uint32Array]", we = {};
we[Np] = we[kp] = we[Rp] = we[$p] = we[Mp] = we[Fp] = we[Dp] = we[Vp] = we[xp] = !0;
we[gp] = we[hp] = we[Lp] = we[yp] = we[Pp] = we[bp] = we[_p] = we[wp] = we[Ep] = we[Sp] = we[Cp] = we[Tp] = we[Op] = we[Ip] = we[Ap] = !1;
function Bp(e) {
  return Dn(e) && la(e.length) && !!we[Kn(e)];
}
function Up(e) {
  return function(t) {
    return e(t);
  };
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, Jn = vi && typeof module == "object" && module && !module.nodeType && module, zp = Jn && Jn.exports === vi, Eo = zp && ii.process, Ls = function() {
  try {
    var e = Jn && Jn.require && Jn.require("util").types;
    return e || Eo && Eo.binding && Eo.binding("util");
  } catch {
  }
}(), Ps = Ls && Ls.isTypedArray, gi = Ps ? Up(Ps) : Bp, Wp = Object.prototype, jp = Wp.hasOwnProperty;
function Hp(e, t) {
  var n = Tt(e), r = !n && ia(e), o = !n && !r && Vo(e), a = !n && !r && !o && gi(e), s = n || r || o || a, l = s ? up(e.length, String) : [], u = l.length;
  for (var c in e)
    jp.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    aa(c, u))) && l.push(c);
  return l;
}
function Kp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Gp = Kp(Object.keys, Object), Yp = Object.prototype, qp = Yp.hasOwnProperty;
function Xp(e) {
  if (!ip(e))
    return Gp(e);
  var t = [];
  for (var n in Object(e))
    qp.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function hi(e) {
  return sp(e) ? Hp(e) : Xp(e);
}
var Zp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jp = /^\w*$/;
function ua(e, t) {
  if (Tt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || to(e) ? !0 : Jp.test(e) || !Zp.test(e) || t != null && e in Object(t);
}
var ur = In(Object, "create");
function Qp() {
  this.__data__ = ur ? ur(null) : {}, this.size = 0;
}
function em(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tm = "__lodash_hash_undefined__", nm = Object.prototype, rm = nm.hasOwnProperty;
function om(e) {
  var t = this.__data__;
  if (ur) {
    var n = t[e];
    return n === tm ? void 0 : n;
  }
  return rm.call(t, e) ? t[e] : void 0;
}
var am = Object.prototype, sm = am.hasOwnProperty;
function lm(e) {
  var t = this.__data__;
  return ur ? t[e] !== void 0 : sm.call(t, e);
}
var im = "__lodash_hash_undefined__";
function um(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ur && t === void 0 ? im : t, this;
}
function Sn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Sn.prototype.clear = Qp;
Sn.prototype.delete = em;
Sn.prototype.get = om;
Sn.prototype.has = lm;
Sn.prototype.set = um;
function cm() {
  this.__data__ = [], this.size = 0;
}
function no(e, t) {
  for (var n = e.length; n--; )
    if (sa(e[n][0], t))
      return n;
  return -1;
}
var fm = Array.prototype, dm = fm.splice;
function pm(e) {
  var t = this.__data__, n = no(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : dm.call(t, n, 1), --this.size, !0;
}
function mm(e) {
  var t = this.__data__, n = no(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function vm(e) {
  return no(this.__data__, e) > -1;
}
function gm(e, t) {
  var n = this.__data__, r = no(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function on(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
on.prototype.clear = cm;
on.prototype.delete = pm;
on.prototype.get = mm;
on.prototype.has = vm;
on.prototype.set = gm;
var cr = In(Wt, "Map");
function hm() {
  this.size = 0, this.__data__ = {
    hash: new Sn(),
    map: new (cr || on)(),
    string: new Sn()
  };
}
function ym(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ro(e, t) {
  var n = e.__data__;
  return ym(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function bm(e) {
  var t = ro(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _m(e) {
  return ro(this, e).get(e);
}
function wm(e) {
  return ro(this, e).has(e);
}
function Em(e, t) {
  var n = ro(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function an(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
an.prototype.clear = hm;
an.prototype.delete = bm;
an.prototype.get = _m;
an.prototype.has = wm;
an.prototype.set = Em;
var Sm = "Expected a function";
function ca(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Sm);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (ca.Cache || an)(), n;
}
ca.Cache = an;
var Cm = 500;
function Tm(e) {
  var t = ca(e, function(r) {
    return n.size === Cm && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Om = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Im = /\\(\\)?/g, Am = Tm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Om, function(n, r, o, a) {
    t.push(o ? a.replace(Im, "$1") : r || n);
  }), t;
});
function Lm(e) {
  return e == null ? "" : ci(e);
}
function oo(e, t) {
  return Tt(e) ? e : ua(e, t) ? [e] : Am(Lm(e));
}
function mr(e) {
  if (typeof e == "string" || to(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function fa(e, t) {
  t = oo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[mr(t[n++])];
  return n && n == r ? e : void 0;
}
function fn(e, t, n) {
  var r = e == null ? void 0 : fa(e, t);
  return r === void 0 ? n : r;
}
function yi(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ns = Bt ? Bt.isConcatSpreadable : void 0;
function Pm(e) {
  return Tt(e) || ia(e) || !!(Ns && e && e[Ns]);
}
function Nm(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Pm), o || (o = []); ++a < s; ) {
    var l = e[a];
    n(l) ? yi(o, l) : o[o.length] = l;
  }
  return o;
}
function km(e) {
  var t = e == null ? 0 : e.length;
  return t ? Nm(e) : [];
}
function Rm(e) {
  return Xd(op(e, void 0, km), e + "");
}
function cn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Tt(e) ? e : [e];
}
function $m() {
  this.__data__ = new on(), this.size = 0;
}
function Mm(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Fm(e) {
  return this.__data__.get(e);
}
function Dm(e) {
  return this.__data__.has(e);
}
var Vm = 200;
function xm(e, t) {
  var n = this.__data__;
  if (n instanceof on) {
    var r = n.__data__;
    if (!cr || r.length < Vm - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new an(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Jt(e) {
  var t = this.__data__ = new on(e);
  this.size = t.size;
}
Jt.prototype.clear = $m;
Jt.prototype.delete = Mm;
Jt.prototype.get = Fm;
Jt.prototype.has = Dm;
Jt.prototype.set = xm;
function Bm(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function Um() {
  return [];
}
var zm = Object.prototype, Wm = zm.propertyIsEnumerable, ks = Object.getOwnPropertySymbols, jm = ks ? function(e) {
  return e == null ? [] : (e = Object(e), Bm(ks(e), function(t) {
    return Wm.call(e, t);
  }));
} : Um;
function Hm(e, t, n) {
  var r = t(e);
  return Tt(e) ? r : yi(r, n(e));
}
function Rs(e) {
  return Hm(e, hi, jm);
}
var xo = In(Wt, "DataView"), Bo = In(Wt, "Promise"), Uo = In(Wt, "Set"), $s = "[object Map]", Km = "[object Object]", Ms = "[object Promise]", Fs = "[object Set]", Ds = "[object WeakMap]", Vs = "[object DataView]", Gm = On(xo), Ym = On(cr), qm = On(Bo), Xm = On(Uo), Zm = On(Do), un = Kn;
(xo && un(new xo(new ArrayBuffer(1))) != Vs || cr && un(new cr()) != $s || Bo && un(Bo.resolve()) != Ms || Uo && un(new Uo()) != Fs || Do && un(new Do()) != Ds) && (un = function(e) {
  var t = Kn(e), n = t == Km ? e.constructor : void 0, r = n ? On(n) : "";
  if (r)
    switch (r) {
      case Gm:
        return Vs;
      case Ym:
        return $s;
      case qm:
        return Ms;
      case Xm:
        return Fs;
      case Zm:
        return Ds;
    }
  return t;
});
var xs = Wt.Uint8Array, Jm = "__lodash_hash_undefined__";
function Qm(e) {
  return this.__data__.set(e, Jm), this;
}
function ev(e) {
  return this.__data__.has(e);
}
function Wr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new an(); ++t < n; )
    this.add(e[t]);
}
Wr.prototype.add = Wr.prototype.push = Qm;
Wr.prototype.has = ev;
function tv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function nv(e, t) {
  return e.has(t);
}
var rv = 1, ov = 2;
function bi(e, t, n, r, o, a) {
  var s = n & rv, l = e.length, u = t.length;
  if (l != u && !(s && u > l))
    return !1;
  var c = a.get(e), d = a.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, m = !0, h = n & ov ? new Wr() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < l; ) {
    var v = e[p], g = t[p];
    if (r)
      var S = s ? r(g, v, p, t, e, a) : r(v, g, p, e, t, a);
    if (S !== void 0) {
      if (S)
        continue;
      m = !1;
      break;
    }
    if (h) {
      if (!tv(t, function(f, w) {
        if (!nv(h, w) && (v === f || o(v, f, n, r, a)))
          return h.push(w);
      })) {
        m = !1;
        break;
      }
    } else if (!(v === g || o(v, g, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function av(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function sv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var lv = 1, iv = 2, uv = "[object Boolean]", cv = "[object Date]", fv = "[object Error]", dv = "[object Map]", pv = "[object Number]", mv = "[object RegExp]", vv = "[object Set]", gv = "[object String]", hv = "[object Symbol]", yv = "[object ArrayBuffer]", bv = "[object DataView]", Bs = Bt ? Bt.prototype : void 0, So = Bs ? Bs.valueOf : void 0;
function _v(e, t, n, r, o, a, s) {
  switch (n) {
    case bv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case yv:
      return !(e.byteLength != t.byteLength || !a(new xs(e), new xs(t)));
    case uv:
    case cv:
    case pv:
      return sa(+e, +t);
    case fv:
      return e.name == t.name && e.message == t.message;
    case mv:
    case gv:
      return e == t + "";
    case dv:
      var l = av;
    case vv:
      var u = r & lv;
      if (l || (l = sv), e.size != t.size && !u)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      r |= iv, s.set(e, t);
      var d = bi(l(e), l(t), r, o, a, s);
      return s.delete(e), d;
    case hv:
      if (So)
        return So.call(e) == So.call(t);
  }
  return !1;
}
var wv = 1, Ev = Object.prototype, Sv = Ev.hasOwnProperty;
function Cv(e, t, n, r, o, a) {
  var s = n & wv, l = Rs(e), u = l.length, c = Rs(t), d = c.length;
  if (u != d && !s)
    return !1;
  for (var p = u; p--; ) {
    var m = l[p];
    if (!(s ? m in t : Sv.call(t, m)))
      return !1;
  }
  var h = a.get(e), v = a.get(t);
  if (h && v)
    return h == t && v == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var S = s; ++p < u; ) {
    m = l[p];
    var f = e[m], w = t[m];
    if (r)
      var A = s ? r(w, f, m, t, e, a) : r(f, w, m, e, t, a);
    if (!(A === void 0 ? f === w || o(f, w, n, r, a) : A)) {
      g = !1;
      break;
    }
    S || (S = m == "constructor");
  }
  if (g && !S) {
    var T = e.constructor, y = t.constructor;
    T != y && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof y == "function" && y instanceof y) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var Tv = 1, Us = "[object Arguments]", zs = "[object Array]", Or = "[object Object]", Ov = Object.prototype, Ws = Ov.hasOwnProperty;
function Iv(e, t, n, r, o, a) {
  var s = Tt(e), l = Tt(t), u = s ? zs : un(e), c = l ? zs : un(t);
  u = u == Us ? Or : u, c = c == Us ? Or : c;
  var d = u == Or, p = c == Or, m = u == c;
  if (m && Vo(e)) {
    if (!Vo(t))
      return !1;
    s = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new Jt()), s || gi(e) ? bi(e, t, n, r, o, a) : _v(e, t, u, n, r, o, a);
  if (!(n & Tv)) {
    var h = d && Ws.call(e, "__wrapped__"), v = p && Ws.call(t, "__wrapped__");
    if (h || v) {
      var g = h ? e.value() : e, S = v ? t.value() : t;
      return a || (a = new Jt()), o(g, S, n, r, a);
    }
  }
  return m ? (a || (a = new Jt()), Cv(e, t, n, r, o, a)) : !1;
}
function ao(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Dn(e) && !Dn(t) ? e !== e && t !== t : Iv(e, t, n, r, ao, o);
}
var Av = 1, Lv = 2;
function Pv(e, t, n, r) {
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
    var l = s[0], u = e[l], c = s[1];
    if (s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var d = new Jt(), p;
      if (!(p === void 0 ? ao(c, u, Av | Lv, r, d) : p))
        return !1;
    }
  }
  return !0;
}
function _i(e) {
  return e === e && !mn(e);
}
function Nv(e) {
  for (var t = hi(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, _i(o)];
  }
  return t;
}
function wi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function kv(e) {
  var t = Nv(e);
  return t.length == 1 && t[0][2] ? wi(t[0][0], t[0][1]) : function(n) {
    return n === e || Pv(n, e, t);
  };
}
function Rv(e, t) {
  return e != null && t in Object(e);
}
function $v(e, t, n) {
  t = oo(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = mr(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && la(o) && aa(s, o) && (Tt(e) || ia(e)));
}
function Ei(e, t) {
  return e != null && $v(e, t, Rv);
}
var Mv = 1, Fv = 2;
function Dv(e, t) {
  return ua(e) && _i(t) ? wi(mr(e), t) : function(n) {
    var r = fn(n, e);
    return r === void 0 && r === t ? Ei(n, e) : ao(t, r, Mv | Fv);
  };
}
function Vv(e) {
  return function(t) {
    return t?.[e];
  };
}
function xv(e) {
  return function(t) {
    return fa(t, e);
  };
}
function Bv(e) {
  return ua(e) ? Vv(mr(e)) : xv(e);
}
function Uv(e) {
  return typeof e == "function" ? e : e == null ? fi : typeof e == "object" ? Tt(e) ? Dv(e[0], e[1]) : kv(e) : Bv(e);
}
var Co = function() {
  return Wt.Date.now();
}, zv = "Expected a function", Wv = Math.max, jv = Math.min;
function Hv(e, t, n) {
  var r, o, a, s, l, u, c = 0, d = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(zv);
  t = Ss(t) || 0, mn(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? Wv(Ss(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function h(I) {
    var O = r, B = o;
    return r = o = void 0, c = I, s = e.apply(B, O), s;
  }
  function v(I) {
    return c = I, l = setTimeout(f, t), d ? h(I) : s;
  }
  function g(I) {
    var O = I - u, B = I - c, U = t - O;
    return p ? jv(U, a - B) : U;
  }
  function S(I) {
    var O = I - u, B = I - c;
    return u === void 0 || O >= t || O < 0 || p && B >= a;
  }
  function f() {
    var I = Co();
    if (S(I))
      return w(I);
    l = setTimeout(f, g(I));
  }
  function w(I) {
    return l = void 0, m && r ? h(I) : (r = o = void 0, s);
  }
  function A() {
    l !== void 0 && clearTimeout(l), c = 0, r = u = o = l = void 0;
  }
  function T() {
    return l === void 0 ? s : w(Co());
  }
  function y() {
    var I = Co(), O = S(I);
    if (r = arguments, o = this, u = I, O) {
      if (l === void 0)
        return v(u);
      if (p)
        return clearTimeout(l), l = setTimeout(f, t), h(u);
    }
    return l === void 0 && (l = setTimeout(f, t)), s;
  }
  return y.cancel = A, y.flush = T, y;
}
function Kv(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Zd(e, Uv(t), o);
}
function jr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Qn(e, t) {
  return ao(e, t);
}
function Qt(e) {
  return e == null;
}
function Gv(e) {
  return e === void 0;
}
function Yv(e, t, n, r) {
  if (!mn(e))
    return e;
  t = oo(t, e);
  for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
    var u = mr(t[o]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (o != s) {
      var d = l[u];
      c = void 0, c === void 0 && (c = mn(d) ? d : aa(t[o + 1]) ? [] : {});
    }
    rp(l, u, c), l = l[u];
  }
  return e;
}
function qv(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], l = fa(e, s);
    n(l, s) && Yv(a, oo(s, e), l);
  }
  return a;
}
function Xv(e, t) {
  return qv(e, t, function(n, r) {
    return Ei(e, r);
  });
}
var Zv = Rm(function(e, t) {
  return e == null ? {} : Xv(e, t);
});
const $t = (e) => e === void 0, pn = (e) => typeof e == "boolean", ge = (e) => typeof e == "number", St = (e) => typeof Element > "u" ? !1 : e instanceof Element, Jv = (e) => qe(e) ? !Number.isNaN(Number(e)) : !1;
var Qv = Object.defineProperty, eg = Object.defineProperties, tg = Object.getOwnPropertyDescriptors, js = Object.getOwnPropertySymbols, ng = Object.prototype.hasOwnProperty, rg = Object.prototype.propertyIsEnumerable, Hs = (e, t, n) => t in e ? Qv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, og = (e, t) => {
  for (var n in t || (t = {}))
    ng.call(t, n) && Hs(e, n, t[n]);
  if (js)
    for (var n of js(t))
      rg.call(t, n) && Hs(e, n, t[n]);
  return e;
}, ag = (e, t) => eg(e, tg(t));
function sg(e, t) {
  var n;
  const r = dn();
  return $l(() => {
    r.value = e();
  }, ag(og({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Yo(r);
}
var Ks;
const Re = typeof window < "u", lg = (e) => typeof e == "string", Si = () => {
}, zo = Re && ((Ks = window?.navigator) == null ? void 0 : Ks.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function da(e) {
  return typeof e == "function" ? e() : i(e);
}
function ig(e) {
  return e;
}
function vr(e) {
  return ju() ? (Hu(e), !0) : !1;
}
function ug(e, t = !0) {
  Je() ? Ne(e) : t ? e() : Ae(e);
}
function Ci(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = D(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function l() {
    o.value = !1, s();
  }
  function u(...c) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...c);
    }, da(t));
  }
  return r && (o.value = !0, Re && u()), vr(l), {
    isPending: Yo(o),
    start: u,
    stop: l
  };
}
function Xt(e) {
  var t;
  const n = da(e);
  return (t = n?.$el) != null ? t : n;
}
const so = Re ? window : void 0;
function Ct(...e) {
  let t, n, r, o;
  if (lg(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = so) : [t, n, r, o] = e, !t)
    return Si;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, l = (d, p, m, h) => (d.addEventListener(p, m, h), () => d.removeEventListener(p, m, h)), u = se(() => [Xt(t), da(o)], ([d, p]) => {
    s(), d && a.push(...n.flatMap((m) => r.map((h) => l(d, m, h, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return vr(c), c;
}
let Gs = !1;
function cg(e, t, n = {}) {
  const { window: r = so, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  zo && !Gs && (Gs = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Si)));
  let l = !0;
  const u = (m) => o.some((h) => {
    if (typeof h == "string")
      return Array.from(r.document.querySelectorAll(h)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = Xt(h);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), d = [
    Ct(r, "click", (m) => {
      const h = Xt(e);
      if (!(!h || h === m.target || m.composedPath().includes(h))) {
        if (m.detail === 0 && (l = !u(m)), !l) {
          l = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    Ct(r, "pointerdown", (m) => {
      const h = Xt(e);
      h && (l = !m.composedPath().includes(h) && !u(m));
    }, { passive: !0 }),
    s && Ct(r, "blur", (m) => {
      var h;
      const v = Xt(e);
      ((h = r.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !v?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => d.forEach((m) => m());
}
function Ti(e, t = !1) {
  const n = D(), r = () => n.value = !!e();
  return r(), ug(r, t), n;
}
const Ys = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qs = "__vueuse_ssr_handlers__";
Ys[qs] = Ys[qs] || {};
var Xs = Object.getOwnPropertySymbols, fg = Object.prototype.hasOwnProperty, dg = Object.prototype.propertyIsEnumerable, pg = (e, t) => {
  var n = {};
  for (var r in e)
    fg.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Xs)
    for (var r of Xs(e))
      t.indexOf(r) < 0 && dg.call(e, r) && (n[r] = e[r]);
  return n;
};
function kt(e, t, n = {}) {
  const r = n, { window: o = so } = r, a = pg(r, ["window"]);
  let s;
  const l = Ti(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = se(() => Xt(e), (p) => {
    u(), l.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), c();
  };
  return vr(d), {
    isSupported: l,
    stop: d
  };
}
var Zs = Object.getOwnPropertySymbols, mg = Object.prototype.hasOwnProperty, vg = Object.prototype.propertyIsEnumerable, gg = (e, t) => {
  var n = {};
  for (var r in e)
    mg.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Zs)
    for (var r of Zs(e))
      t.indexOf(r) < 0 && vg.call(e, r) && (n[r] = e[r]);
  return n;
};
function hg(e, t, n = {}) {
  const r = n, { window: o = so } = r, a = gg(r, ["window"]);
  let s;
  const l = Ti(() => o && "MutationObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = se(() => Xt(e), (p) => {
    u(), l.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), d = () => {
    u(), c();
  };
  return vr(d), {
    isSupported: l,
    stop: d
  };
}
var Js;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Js || (Js = {}));
var yg = Object.defineProperty, Qs = Object.getOwnPropertySymbols, bg = Object.prototype.hasOwnProperty, _g = Object.prototype.propertyIsEnumerable, el = (e, t, n) => t in e ? yg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wg = (e, t) => {
  for (var n in t || (t = {}))
    bg.call(t, n) && el(e, n, t[n]);
  if (Qs)
    for (var n of Qs(t))
      _g.call(t, n) && el(e, n, t[n]);
  return e;
};
const Eg = {
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
wg({
  linear: ig
}, Eg);
class Sg extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function pa(e, t) {
  throw new Sg(`[${e}] ${t}`);
}
const tl = {
  current: 0
}, nl = D(0), Oi = 2e3, rl = Symbol("elZIndexContextKey"), Ii = Symbol("zIndexContextKey"), Ai = (e) => {
  const t = Je() ? he(rl, tl) : tl, n = e || (Je() ? he(Ii, void 0) : void 0), r = L(() => {
    const s = i(n);
    return ge(s) ? s : Oi;
  }), o = L(() => r.value + nl.value), a = () => (t.current++, nl.value = t.current, o.value);
  return !Re && he(rl), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var Cg = {
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
const Tg = (e) => (t, n) => Og(t, n, i(e)), Og = (e, t, n) => fn(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Ig = (e) => {
  const t = L(() => i(e).name), n = Dr(e) ? e : D(e);
  return {
    lang: t,
    locale: n,
    t: Tg(e)
  };
}, Li = Symbol("localeContextKey"), ma = (e) => {
  const t = e || he(Li, D());
  return Ig(L(() => t.value || Cg));
}, Pi = "__epPropKey", re = (e) => e, Ag = (e) => ut(e) && !!e[Pi], lo = (e, t) => {
  if (!ut(e) || Ag(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, u = {
    type: a,
    required: !!r,
    validator: n || s ? (c) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), hs(e, "default") && p.push(o), d || (d = p.includes(c))), s && (d || (d = s(c))), !d && p.length > 0) {
        const m = [...new Set(p)].map((h) => JSON.stringify(h)).join(", ");
        Ku(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Pi]: !0
  };
  return hs(e, "default") && (u.default = o), u;
}, Ee = (e) => jr(Object.entries(e).map(([t, n]) => [
  t,
  lo(n, t)
])), va = ["", "default", "small", "large"], io = lo({
  type: String,
  values: va,
  required: !1
}), Ni = Symbol("size"), Lg = () => {
  const e = he(Ni, {});
  return L(() => i(e.size) || "");
}, ki = Symbol("emptyValuesContextKey"), Pg = ["", void 0, null], Ng = void 0, Ri = Ee({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Oe(e) ? !e() : !e
  }
}), kg = (e, t) => {
  const n = Je() ? he(ki, D({})) : D({}), r = L(() => e.emptyValues || n.value.emptyValues || Pg), o = L(() => Oe(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Oe(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Ng), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, ol = (e) => Object.keys(e), Hr = D();
function $i(e, t = void 0) {
  return Je() ? he(si, Hr) : Hr;
}
function Mi(e, t) {
  const n = $i(), r = $e(e, L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || $r;
  })), o = ma(L(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), a = Ai(L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Oi;
  })), s = L(() => {
    var l;
    return i(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return Fi(L(() => i(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Fi = (e, t, n = !1) => {
  var r;
  const o = !!Je(), a = o ? $i() : void 0, s = (r = void 0) != null ? r : o ? xt : void 0;
  if (!s)
    return;
  const l = L(() => {
    const u = i(e);
    return a?.value ? Rg(a.value, u) : u;
  });
  return s(si, l), s(Li, L(() => l.value.locale)), s(li, L(() => l.value.namespace)), s(Ii, L(() => l.value.zIndex)), s(Ni, {
    size: L(() => l.value.size || "")
  }), s(ki, L(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Hr.value) && (Hr.value = l.value), l;
}, Rg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...ol(e), ...ol(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Ve = "update:modelValue", nn = "change", en = "input";
var Ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Vn(e, t = "px") {
  if (!e)
    return "";
  if (ge(e) || Jv(e))
    return `${e}${t}`;
  if (qe(e))
    return e;
}
function $g(e, t) {
  if (!Re)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const o = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), a = o + t.offsetHeight, s = e.scrollTop, l = s + e.clientHeight;
  o < s ? e.scrollTop = o : a > l && (e.scrollTop = a - e.clientHeight);
}
const Ot = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Di = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Vi = (e) => (e.install = ir, e), Mg = Ee({
  size: {
    type: re([Number, String])
  },
  color: {
    type: String
  }
}), Fg = Y({
  name: "ElIcon",
  inheritAttrs: !1
}), Dg = /* @__PURE__ */ Y({
  ...Fg,
  props: Mg,
  setup(e) {
    const t = e, n = $e("icon"), r = L(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: $t(o) ? void 0 : Vn(o),
        "--color": a
      };
    });
    return (o, a) => (k(), W("i", $n({
      class: i(n).b(),
      style: i(r)
    }, o.$attrs), [
      ae(o.$slots, "default")
    ], 16));
  }
});
var Vg = /* @__PURE__ */ Ce(Dg, [["__file", "icon.vue"]]);
const ke = Ot(Vg);
/*! Element Plus Icons Vue v2.3.1 */
var xg = /* @__PURE__ */ Y({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), xi = xg, Bg = /* @__PURE__ */ Y({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Ug = Bg, zg = /* @__PURE__ */ Y({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      E("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Wg = zg, jg = /* @__PURE__ */ Y({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Hg = jg, Kg = /* @__PURE__ */ Y({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      E("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), ga = Kg, Gg = /* @__PURE__ */ Y({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Kr = Gg, Yg = /* @__PURE__ */ Y({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      E("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), qg = Yg, Xg = /* @__PURE__ */ Y({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Zg = Xg, Jg = /* @__PURE__ */ Y({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Bi = Jg, Qg = /* @__PURE__ */ Y({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), eh = Qg, th = /* @__PURE__ */ Y({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), nh = th, rh = /* @__PURE__ */ Y({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), oh = rh, ah = /* @__PURE__ */ Y({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), sh = ah, lh = /* @__PURE__ */ Y({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ih = lh;
const Mt = re([
  String,
  Object,
  Function
]), uh = {
  Close: Kr
}, ch = {
  Close: Kr
}, Gr = {
  success: oh,
  warning: ih,
  error: Hg,
  info: Zg
}, Ui = {
  validating: Bi,
  success: Wg,
  error: ga
}, zi = () => Re && /firefox/i.test(window.navigator.userAgent);
let Qe;
const fh = {
  height: "0",
  visibility: "hidden",
  overflow: zi() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, dh = [
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
function ph(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: dh.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function al(e, t = 1, n) {
  var r;
  Qe || (Qe = document.createElement("textarea"), document.body.appendChild(Qe));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: l } = ph(e);
  l.forEach(([p, m]) => Qe?.style.setProperty(p, m)), Object.entries(fh).forEach(([p, m]) => Qe?.style.setProperty(p, m, "important")), Qe.value = e.value || e.placeholder || "";
  let u = Qe.scrollHeight;
  const c = {};
  s === "border-box" ? u = u + a : s === "content-box" && (u = u - o), Qe.value = "";
  const d = Qe.scrollHeight - o;
  if (ge(t)) {
    let p = d * t;
    s === "border-box" && (p = p + o + a), u = Math.max(p, u), c.minHeight = `${p}px`;
  }
  if (ge(n)) {
    let p = d * n;
    s === "border-box" && (p = p + o + a), u = Math.min(p, u);
  }
  return c.height = `${u}px`, (r = Qe.parentNode) == null || r.removeChild(Qe), Qe = void 0, c;
}
const Wi = (e) => e, mh = Ee({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), An = (e) => Zv(mh, e), vh = Ee({
  id: {
    type: String,
    default: void 0
  },
  size: io,
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
    default: () => Wi({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...An(["ariaLabel"])
}), gh = {
  [Ve]: (e) => qe(e),
  input: (e) => qe(e),
  change: (e) => qe(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, hh = ["class", "style"], yh = /^on[A-Z]/, bh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = L(() => (n?.value || []).concat(hh)), o = Je();
  return o ? L(() => {
    var a;
    return jr(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && yh.test(s))));
  }) : L(() => ({}));
}, ha = Symbol("formContextKey"), Yr = Symbol("formItemContextKey"), sl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, _h = Symbol("elIdInjection"), ji = () => Je() ? he(_h, sl) : sl, uo = (e) => {
  const t = ji(), n = oa();
  return sg(() => i(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, co = () => {
  const e = he(ha, void 0), t = he(Yr, void 0);
  return {
    form: e,
    formItem: t
  };
}, ya = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = D(!1)), r || (r = D(!1));
  const o = D();
  let a;
  const s = L(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return Ne(() => {
    a = se([Gt(e, "id"), n], ([l, u]) => {
      const c = l ?? (u ? void 0 : uo().value);
      c !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !u && c && t.addInputId(c)), o.value = c);
    }, { immediate: !0 });
  }), Zr(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, Hi = (e) => {
  const t = Je();
  return L(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, gr = (e, t = {}) => {
  const n = D(void 0), r = t.prop ? n : Hi("size"), o = t.global ? n : Lg(), a = t.form ? { size: void 0 } : he(ha, void 0), s = t.formItem ? { size: void 0 } : he(Yr, void 0);
  return L(() => r.value || i(e) || s?.size || a?.size || o.value || "");
}, ba = (e) => {
  const t = Hi("disabled"), n = he(ha, void 0);
  return L(() => t.value || i(e) || n?.disabled || !1);
};
function Ki(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Je(), { emit: s } = a, l = dn(), u = D(!1), c = (m) => {
    Oe(t) && t(m) || u.value || (u.value = !0, s("focus", m), n?.());
  }, d = (m) => {
    var h;
    Oe(r) && r(m) || m.relatedTarget && ((h = l.value) != null && h.contains(m.relatedTarget)) || (u.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, h;
    (m = l.value) != null && m.contains(document.activeElement) && l.value !== document.activeElement || (h = e.value) == null || h.focus();
  };
  return se(l, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), Ct(l, "focus", c, !0), Ct(l, "blur", d, !0), Ct(l, "click", p, !0), {
    isFocused: u,
    wrapperRef: l,
    handleFocus: c,
    handleBlur: d
  };
}
const wh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Gi({
  afterComposition: e,
  emit: t
}) {
  const n = D(!1), r = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, o = (l) => {
    var u;
    t?.("compositionupdate", l);
    const c = (u = l.target) == null ? void 0 : u.value, d = c[c.length - 1] || "";
    n.value = !wh(d);
  }, a = (l) => {
    t?.("compositionend", l), n.value && (n.value = !1, Ae(() => e(l)));
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
function Eh(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: o, selectionEnd: a, value: s } = e.value;
    if (o == null || a == null)
      return;
    const l = s.slice(0, Math.max(0, o)), u = s.slice(Math.max(0, a));
    t = {
      selectionStart: o,
      selectionEnd: a,
      value: s,
      beforeTxt: l,
      afterTxt: u
    };
  }
  function r() {
    if (e.value == null || t == null)
      return;
    const { value: o } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: l } = t;
    if (a == null || s == null || l == null)
      return;
    let u = o.length;
    if (o.endsWith(s))
      u = o.length - s.length;
    else if (o.startsWith(a))
      u = a.length;
    else {
      const c = a[l - 1], d = o.indexOf(c, l - 1);
      d !== -1 && (u = d + 1);
    }
    e.value.setSelectionRange(u, u);
  }
  return [n, r];
}
const Sh = "ElInput", Ch = Y({
  name: Sh,
  inheritAttrs: !1
}), Th = /* @__PURE__ */ Y({
  ...Ch,
  props: vh,
  emits: gh,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Gu(), a = bh(), s = Yu(), l = L(() => [
      r.type === "textarea" ? g.b() : v.b(),
      v.m(m.value),
      v.is("disabled", h.value),
      v.is("exceed", Me.value),
      {
        [v.b("group")]: s.prepend || s.append,
        [v.m("prefix")]: s.prefix || r.prefixIcon,
        [v.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [v.bm("suffix", "password-clear")]: te.value && q.value,
        [v.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), u = L(() => [
      v.e("wrapper"),
      v.is("focus", B.value)
    ]), { form: c, formItem: d } = co(), { inputId: p } = ya(r, {
      formItemContext: d
    }), m = gr(), h = ba(), v = $e("input"), g = $e("textarea"), S = dn(), f = dn(), w = D(!1), A = D(!1), T = D(), y = dn(r.inputStyle), I = L(() => S.value || f.value), { wrapperRef: O, isFocused: B, handleFocus: U, handleBlur: Q } = Ki(I, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var b;
        r.validateEvent && ((b = d?.validate) == null || b.call(d, "blur").catch(($) => void 0));
      }
    }), oe = L(() => {
      var b;
      return (b = c?.statusIcon) != null ? b : !1;
    }), J = L(() => d?.validateState || ""), le = L(() => J.value && Ui[J.value]), Se = L(() => A.value ? sh : qg), P = L(() => [
      o.style
    ]), R = L(() => [
      r.inputStyle,
      y.value,
      { resize: r.resize }
    ]), F = L(() => Qt(r.modelValue) ? "" : String(r.modelValue)), te = L(() => r.clearable && !h.value && !r.readonly && !!F.value && (B.value || w.value)), q = L(() => r.showPassword && !h.value && !!F.value && (!!F.value || B.value)), ce = L(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !h.value && !r.readonly && !r.showPassword), H = L(() => F.value.length), Me = L(() => !!ce.value && H.value > Number(r.maxlength)), _e = L(() => !!s.suffix || !!r.suffixIcon || te.value || r.showPassword || ce.value || !!J.value && oe.value), [We, xe] = Eh(S);
    kt(f, (b) => {
      if (ye(), !ce.value || r.resize !== "both")
        return;
      const $ = b[0], { width: ie } = $.contentRect;
      T.value = {
        right: `calc(100% - ${ie + 15 + 6}px)`
      };
    });
    const je = () => {
      const { type: b, autosize: $ } = r;
      if (!(!Re || b !== "textarea" || !f.value))
        if ($) {
          const ie = ut($) ? $.minRows : void 0, me = ut($) ? $.maxRows : void 0, Ke = al(f.value, ie, me);
          y.value = {
            overflowY: "hidden",
            ...Ke
          }, Ae(() => {
            f.value.offsetHeight, y.value = Ke;
          });
        } else
          y.value = {
            minHeight: al(f.value).minHeight
          };
    }, ye = ((b) => {
      let $ = !1;
      return () => {
        var ie;
        if ($ || !r.autosize)
          return;
        ((ie = f.value) == null ? void 0 : ie.offsetParent) === null || (b(), $ = !0);
      };
    })(je), rt = () => {
      const b = I.value, $ = r.formatter ? r.formatter(F.value) : F.value;
      !b || b.value === $ || (b.value = $);
    }, ft = async (b) => {
      We();
      let { value: $ } = b.target;
      if (r.formatter && r.parser && ($ = r.parser($)), !yt.value) {
        if ($ === F.value) {
          rt();
          return;
        }
        n(Ve, $), n(en, $), await Ae(), rt(), xe();
      }
    }, ot = (b) => {
      let { value: $ } = b.target;
      r.formatter && r.parser && ($ = r.parser($)), n(nn, $);
    }, {
      isComposing: yt,
      handleCompositionStart: at,
      handleCompositionUpdate: st,
      handleCompositionEnd: lt
    } = Gi({ emit: n, afterComposition: ft }), dt = () => {
      We(), A.value = !A.value, setTimeout(xe);
    }, At = () => {
      var b;
      return (b = I.value) == null ? void 0 : b.focus();
    }, _ = () => {
      var b;
      return (b = I.value) == null ? void 0 : b.blur();
    }, C = (b) => {
      w.value = !1, n("mouseleave", b);
    }, M = (b) => {
      w.value = !0, n("mouseenter", b);
    }, j = (b) => {
      n("keydown", b);
    }, fe = () => {
      var b;
      (b = I.value) == null || b.select();
    }, ne = () => {
      n(Ve, ""), n(nn, ""), n("clear"), n(en, "");
    };
    return se(() => r.modelValue, () => {
      var b;
      Ae(() => je()), r.validateEvent && ((b = d?.validate) == null || b.call(d, "change").catch(($) => void 0));
    }), se(F, () => rt()), se(() => r.type, async () => {
      await Ae(), rt(), je();
    }), Ne(() => {
      !r.formatter && r.parser, rt(), Ae(je);
    }), t({
      input: S,
      textarea: f,
      ref: I,
      textareaStyle: R,
      autosize: Gt(r, "autosize"),
      isComposing: yt,
      focus: At,
      blur: _,
      select: fe,
      clear: ne,
      resizeTextarea: je
    }), (b, $) => (k(), W("div", {
      class: x([
        i(l),
        {
          [i(v).bm("group", "append")]: b.$slots.append,
          [i(v).bm("group", "prepend")]: b.$slots.prepend
        }
      ]),
      style: Be(i(P)),
      onMouseenter: M,
      onMouseleave: C
    }, [
      K(" input "),
      b.type !== "textarea" ? (k(), W(et, { key: 0 }, [
        K(" prepend slot "),
        b.$slots.prepend ? (k(), W("div", {
          key: 0,
          class: x(i(v).be("group", "prepend"))
        }, [
          ae(b.$slots, "prepend")
        ], 2)) : K("v-if", !0),
        E("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: x(i(u))
        }, [
          K(" prefix slot "),
          b.$slots.prefix || b.prefixIcon ? (k(), W("span", {
            key: 0,
            class: x(i(v).e("prefix"))
          }, [
            E("span", {
              class: x(i(v).e("prefix-inner"))
            }, [
              ae(b.$slots, "prefix"),
              b.prefixIcon ? (k(), ee(i(ke), {
                key: 0,
                class: x(i(v).e("icon"))
              }, {
                default: G(() => [
                  (k(), ee(Ze(b.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : K("v-if", !0)
            ], 2)
          ], 2)) : K("v-if", !0),
          E("input", $n({
            id: i(p),
            ref_key: "input",
            ref: S,
            class: i(v).e("inner")
          }, i(a), {
            minlength: b.minlength,
            maxlength: b.maxlength,
            type: b.showPassword ? A.value ? "text" : "password" : b.type,
            disabled: i(h),
            readonly: b.readonly,
            autocomplete: b.autocomplete,
            tabindex: b.tabindex,
            "aria-label": b.ariaLabel,
            placeholder: b.placeholder,
            style: b.inputStyle,
            form: b.form,
            autofocus: b.autofocus,
            role: b.containerRole,
            onCompositionstart: i(at),
            onCompositionupdate: i(st),
            onCompositionend: i(lt),
            onInput: ft,
            onChange: ot,
            onKeydown: j
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          K(" suffix slot "),
          i(_e) ? (k(), W("span", {
            key: 1,
            class: x(i(v).e("suffix"))
          }, [
            E("span", {
              class: x(i(v).e("suffix-inner"))
            }, [
              !i(te) || !i(q) || !i(ce) ? (k(), W(et, { key: 0 }, [
                ae(b.$slots, "suffix"),
                b.suffixIcon ? (k(), ee(i(ke), {
                  key: 0,
                  class: x(i(v).e("icon"))
                }, {
                  default: G(() => [
                    (k(), ee(Ze(b.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : K("v-if", !0)
              ], 64)) : K("v-if", !0),
              i(te) ? (k(), ee(i(ke), {
                key: 1,
                class: x([i(v).e("icon"), i(v).e("clear")]),
                onMousedown: Ie(i(ir), ["prevent"]),
                onClick: ne
              }, {
                default: G(() => [
                  X(i(ga))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : K("v-if", !0),
              i(q) ? (k(), ee(i(ke), {
                key: 2,
                class: x([i(v).e("icon"), i(v).e("password")]),
                onClick: dt
              }, {
                default: G(() => [
                  (k(), ee(Ze(i(Se))))
                ]),
                _: 1
              }, 8, ["class"])) : K("v-if", !0),
              i(ce) ? (k(), W("span", {
                key: 3,
                class: x(i(v).e("count"))
              }, [
                E("span", {
                  class: x(i(v).e("count-inner"))
                }, V(i(H)) + " / " + V(b.maxlength), 3)
              ], 2)) : K("v-if", !0),
              i(J) && i(le) && i(oe) ? (k(), ee(i(ke), {
                key: 4,
                class: x([
                  i(v).e("icon"),
                  i(v).e("validateIcon"),
                  i(v).is("loading", i(J) === "validating")
                ])
              }, {
                default: G(() => [
                  (k(), ee(Ze(i(le))))
                ]),
                _: 1
              }, 8, ["class"])) : K("v-if", !0)
            ], 2)
          ], 2)) : K("v-if", !0)
        ], 2),
        K(" append slot "),
        b.$slots.append ? (k(), W("div", {
          key: 1,
          class: x(i(v).be("group", "append"))
        }, [
          ae(b.$slots, "append")
        ], 2)) : K("v-if", !0)
      ], 64)) : (k(), W(et, { key: 1 }, [
        K(" textarea "),
        E("textarea", $n({
          id: i(p),
          ref_key: "textarea",
          ref: f,
          class: [i(g).e("inner"), i(v).is("focus", i(B))]
        }, i(a), {
          minlength: b.minlength,
          maxlength: b.maxlength,
          tabindex: b.tabindex,
          disabled: i(h),
          readonly: b.readonly,
          autocomplete: b.autocomplete,
          style: i(R),
          "aria-label": b.ariaLabel,
          placeholder: b.placeholder,
          form: b.form,
          autofocus: b.autofocus,
          rows: b.rows,
          role: b.containerRole,
          onCompositionstart: i(at),
          onCompositionupdate: i(st),
          onCompositionend: i(lt),
          onInput: ft,
          onFocus: i(U),
          onBlur: i(Q),
          onChange: ot,
          onKeydown: j
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        i(ce) ? (k(), W("span", {
          key: 0,
          style: Be(T.value),
          class: x(i(v).e("count"))
        }, V(i(H)) + " / " + V(b.maxlength), 7)) : K("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Oh = /* @__PURE__ */ Ce(Th, [["__file", "input.vue"]]);
const Ih = Ot(Oh), Pn = 4, Ah = {
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
}, Lh = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), _a = Symbol("scrollbarContextKey"), Ph = Ee({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Nh = "Thumb", kh = /* @__PURE__ */ Y({
  __name: "thumb",
  props: Ph,
  setup(e) {
    const t = e, n = he(_a), r = $e("scrollbar");
    n || pa(Nh, "can not inject scrollbar context");
    const o = D(), a = D(), s = D({}), l = D(!1);
    let u = !1, c = !1, d = Re ? document.onselectstart : null;
    const p = L(() => Ah[t.vertical ? "vertical" : "horizontal"]), m = L(() => Lh({
      size: t.size,
      move: t.move,
      bar: p.value
    })), h = L(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), v = (I) => {
      var O;
      if (I.stopPropagation(), I.ctrlKey || [1, 2].includes(I.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), S(I);
      const B = I.currentTarget;
      B && (s.value[p.value.axis] = B[p.value.offset] - (I[p.value.client] - B.getBoundingClientRect()[p.value.direction]));
    }, g = (I) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(I.target.getBoundingClientRect()[p.value.direction] - I[p.value.client]), B = a.value[p.value.offset] / 2, U = (O - B) * 100 * h.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = U * n.wrapElement[p.value.scrollSize] / 100;
    }, S = (I) => {
      I.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", w), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (I) => {
      if (!o.value || !a.value || u === !1)
        return;
      const O = s.value[p.value.axis];
      if (!O)
        return;
      const B = (o.value.getBoundingClientRect()[p.value.direction] - I[p.value.client]) * -1, U = a.value[p.value.offset] - O, Q = (B - U) * 100 * h.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = Q * n.wrapElement[p.value.scrollSize] / 100;
    }, w = () => {
      u = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", w), y(), c && (l.value = !1);
    }, A = () => {
      c = !1, l.value = !!t.size;
    }, T = () => {
      c = !0, l.value = u;
    };
    zt(() => {
      y(), document.removeEventListener("mouseup", w);
    });
    const y = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Ct(Gt(n, "scrollbarElement"), "mousemove", A), Ct(Gt(n, "scrollbarElement"), "mouseleave", T), (I, O) => (k(), ee(Hn, {
      name: i(r).b("fade"),
      persisted: ""
    }, {
      default: G(() => [
        Ue(E("div", {
          ref_key: "instance",
          ref: o,
          class: x([i(r).e("bar"), i(r).is(i(p).key)]),
          onMousedown: g
        }, [
          E("div", {
            ref_key: "thumb",
            ref: a,
            class: x(i(r).e("thumb")),
            style: Be(i(m)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [tn, I.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ll = /* @__PURE__ */ Ce(kh, [["__file", "thumb.vue"]]);
const Rh = Ee({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), $h = /* @__PURE__ */ Y({
  __name: "bar",
  props: Rh,
  setup(e, { expose: t }) {
    const n = e, r = he(_a), o = D(0), a = D(0), s = D(""), l = D(""), u = D(1), c = D(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const h = m.offsetHeight - Pn, v = m.offsetWidth - Pn;
          a.value = m.scrollTop * 100 / h * u.value, o.value = m.scrollLeft * 100 / v * c.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const h = m.offsetHeight - Pn, v = m.offsetWidth - Pn, g = h ** 2 / m.scrollHeight, S = v ** 2 / m.scrollWidth, f = Math.max(g, n.minSize), w = Math.max(S, n.minSize);
        u.value = g / (h - g) / (f / (h - f)), c.value = S / (v - S) / (w / (v - w)), l.value = f + Pn < h ? `${f}px` : "", s.value = w + Pn < v ? `${w}px` : "";
      }
    }), (m, h) => (k(), W(et, null, [
      X(ll, {
        move: o.value,
        ratio: c.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      X(ll, {
        move: a.value,
        ratio: u.value,
        size: l.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Mh = /* @__PURE__ */ Ce($h, [["__file", "bar.vue"]]);
const Fh = Ee({
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
  ...An(["ariaLabel", "ariaOrientation"])
}), Dh = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ge)
}, Vh = "ElScrollbar", xh = Y({
  name: Vh
}), Bh = /* @__PURE__ */ Y({
  ...xh,
  props: Fh,
  emits: Dh,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = $e("scrollbar");
    let a, s, l = 0, u = 0;
    const c = D(), d = D(), p = D(), m = D(), h = L(() => {
      const y = {};
      return r.height && (y.height = Vn(r.height)), r.maxHeight && (y.maxHeight = Vn(r.maxHeight)), [r.wrapStyle, y];
    }), v = L(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = L(() => [o.e("view"), r.viewClass]), S = () => {
      var y;
      d.value && ((y = m.value) == null || y.handleScroll(d.value), l = d.value.scrollTop, u = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function f(y, I) {
      ut(y) ? d.value.scrollTo(y) : ge(y) && ge(I) && d.value.scrollTo(y, I);
    }
    const w = (y) => {
      ge(y) && (d.value.scrollTop = y);
    }, A = (y) => {
      ge(y) && (d.value.scrollLeft = y);
    }, T = () => {
      var y;
      (y = m.value) == null || y.update();
    };
    return se(() => r.noresize, (y) => {
      y ? (a?.(), s?.()) : ({ stop: a } = kt(p, T), s = Ct("resize", T));
    }, { immediate: !0 }), se(() => [r.maxHeight, r.height], () => {
      r.native || Ae(() => {
        var y;
        T(), d.value && ((y = m.value) == null || y.handleScroll(d.value));
      });
    }), xt(_a, En({
      scrollbarElement: c,
      wrapElement: d
    })), qu(() => {
      d.value && (d.value.scrollTop = l, d.value.scrollLeft = u);
    }), Ne(() => {
      r.native || Ae(() => {
        T();
      });
    }), Ml(() => T()), t({
      wrapRef: d,
      update: T,
      scrollTo: f,
      setScrollTop: w,
      setScrollLeft: A,
      handleScroll: S
    }), (y, I) => (k(), W("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: x(i(o).b())
    }, [
      E("div", {
        ref_key: "wrapRef",
        ref: d,
        class: x(i(v)),
        style: Be(i(h)),
        tabindex: y.tabindex,
        onScroll: S
      }, [
        (k(), ee(Ze(y.tag), {
          id: y.id,
          ref_key: "resizeRef",
          ref: p,
          class: x(i(g)),
          style: Be(y.viewStyle),
          role: y.role,
          "aria-label": y.ariaLabel,
          "aria-orientation": y.ariaOrientation
        }, {
          default: G(() => [
            ae(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      y.native ? K("v-if", !0) : (k(), ee(Mh, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: y.always,
        "min-size": y.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Uh = /* @__PURE__ */ Ce(Bh, [["__file", "scrollbar.vue"]]);
const zh = Ot(Uh), wa = Symbol("popper"), Yi = Symbol("popperContent"), Wh = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], qi = Ee({
  role: {
    type: String,
    values: Wh,
    default: "tooltip"
  }
}), jh = Y({
  name: "ElPopper",
  inheritAttrs: !1
}), Hh = /* @__PURE__ */ Y({
  ...jh,
  props: qi,
  setup(e, { expose: t }) {
    const n = e, r = D(), o = D(), a = D(), s = D(), l = L(() => n.role), u = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: l
    };
    return t(u), xt(wa, u), (c, d) => ae(c.$slots, "default");
  }
});
var Kh = /* @__PURE__ */ Ce(Hh, [["__file", "popper.vue"]]);
const Xi = Ee({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Gh = Y({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Yh = /* @__PURE__ */ Y({
  ...Gh,
  props: Xi,
  setup(e, { expose: t }) {
    const n = e, r = $e("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = he(Yi, void 0);
    return se(() => n.arrowOffset, (l) => {
      o.value = l;
    }), zt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (l, u) => (k(), W("span", {
      ref_key: "arrowRef",
      ref: a,
      class: x(i(r).e("arrow")),
      style: Be(i(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var qh = /* @__PURE__ */ Ce(Yh, [["__file", "arrow.vue"]]);
const Zi = Ee({
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
}), Ji = Symbol("elForwardRef"), Xh = (e) => {
  xt(Ji, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Zh = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Wo = (e) => {
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
}, Jh = "ElOnlyChild", Qh = Y({
  name: Jh,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = he(Ji), a = Zh((r = o?.setForwardRef) != null ? r : ir);
    return () => {
      var s;
      const l = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!l || l.length > 1)
        return null;
      const u = Qi(l);
      return u ? Ue(Xu(u, n), [[a]]) : null;
    };
  }
});
function Qi(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (ut(n))
      switch (n.type) {
        case Zu:
          continue;
        case Rl:
        case "svg":
          return il(n);
        case et:
          return Qi(n.children);
        default:
          return n;
      }
    return il(n);
  }
  return null;
}
function il(e) {
  const t = $e("only-child");
  return X("span", {
    class: t.e("content")
  }, [e]);
}
const e0 = Y({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), t0 = /* @__PURE__ */ Y({
  ...e0,
  props: Zi,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = he(wa, void 0);
    Xh(o);
    const a = L(() => l.value ? n.id : void 0), s = L(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = L(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), u = L(() => l.value ? `${n.open}` : void 0);
    let c;
    const d = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return Ne(() => {
      se(() => n.virtualRef, (p) => {
        p && (o.value = Xt(p));
      }, {
        immediate: !0
      }), se(o, (p, m) => {
        c?.(), c = void 0, St(p) && (d.forEach((h) => {
          var v;
          const g = n[h];
          g && (p.addEventListener(h.slice(2).toLowerCase(), g), (v = m?.removeEventListener) == null || v.call(m, h.slice(2).toLowerCase(), g));
        }), Wo(p) && (c = se([a, s, l, u], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, g) => {
            Qt(h[g]) ? p.removeAttribute(v) : p.setAttribute(v, h[g]);
          });
        }, { immediate: !0 }))), St(m) && Wo(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => m.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), zt(() => {
      if (c?.(), c = void 0, o.value && St(o.value)) {
        const p = o.value;
        d.forEach((m) => {
          const h = n[m];
          h && p.removeEventListener(m.slice(2).toLowerCase(), h);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? K("v-if", !0) : (k(), ee(i(Qh), $n({ key: 0 }, p.$attrs, {
      "aria-controls": i(a),
      "aria-describedby": i(s),
      "aria-expanded": i(u),
      "aria-haspopup": i(l)
    }), {
      default: G(() => [
        ae(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var n0 = /* @__PURE__ */ Ce(t0, [["__file", "trigger.vue"]]);
const To = "focus-trap.focus-after-trapped", Oo = "focus-trap.focus-after-released", r0 = "focus-trap.focusout-prevented", ul = {
  cancelable: !0,
  bubbles: !1
}, o0 = {
  cancelable: !0,
  bubbles: !1
}, cl = "focusAfterTrapped", fl = "focusAfterReleased", a0 = Symbol("elFocusTrap"), Ea = D(), fo = D(0), Sa = D(0);
let Ir = 0;
const eu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, dl = (e, t) => {
  for (const n of e)
    if (!s0(n, t))
      return n;
}, s0 = (e, t) => {
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
}, l0 = (e) => {
  const t = eu(e), n = dl(t, e), r = dl(t.reverse(), e);
  return [n, r];
}, i0 = (e) => e instanceof HTMLInputElement && "select" in e, Ht = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    St(e) && !Wo(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), Sa.value = window.performance.now(), e !== n && i0(e) && t && e.select(), St(e) && r && e.removeAttribute("tabindex");
  }
};
function pl(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const u0 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = pl(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = pl(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, c0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Ht(r, t), document.activeElement !== n)
      return;
}, ml = u0(), f0 = () => fo.value > Sa.value, Ar = () => {
  Ea.value = "pointer", fo.value = window.performance.now();
}, vl = () => {
  Ea.value = "keyboard", fo.value = window.performance.now();
}, d0 = () => (Ne(() => {
  Ir === 0 && (document.addEventListener("mousedown", Ar), document.addEventListener("touchstart", Ar), document.addEventListener("keydown", vl)), Ir++;
}), zt(() => {
  Ir--, Ir <= 0 && (document.removeEventListener("mousedown", Ar), document.removeEventListener("touchstart", Ar), document.removeEventListener("keydown", vl));
}), {
  focusReason: Ea,
  lastUserFocusTimestamp: fo,
  lastAutomatedFocusTimestamp: Sa
}), Lr = (e) => new CustomEvent(r0, {
  ...o0,
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
let Rn = [];
const gl = (e) => {
  e.code === Dt.esc && Rn.forEach((t) => t(e));
}, p0 = (e) => {
  Ne(() => {
    Rn.length === 0 && document.addEventListener("keydown", gl), Re && Rn.push(e);
  }), zt(() => {
    Rn = Rn.filter((t) => t !== e), Rn.length === 0 && Re && document.removeEventListener("keydown", gl);
  });
}, m0 = Y({
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
    fl,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = D();
    let r, o;
    const { focusReason: a } = d0();
    p0((v) => {
      e.trapped && !s.paused && t("release-requested", v);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (v) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: g, altKey: S, ctrlKey: f, metaKey: w, currentTarget: A, shiftKey: T } = v, { loop: y } = e, I = g === Dt.tab && !S && !f && !w, O = document.activeElement;
      if (I && O) {
        const B = A, [U, Q] = l0(B);
        if (U && Q) {
          if (!T && O === Q) {
            const J = Lr({
              focusReason: a.value
            });
            t("focusout-prevented", J), J.defaultPrevented || (v.preventDefault(), y && Ht(U, !0));
          } else if (T && [U, B].includes(O)) {
            const J = Lr({
              focusReason: a.value
            });
            t("focusout-prevented", J), J.defaultPrevented || (v.preventDefault(), y && Ht(Q, !0));
          }
        } else if (O === B) {
          const J = Lr({
            focusReason: a.value
          });
          t("focusout-prevented", J), J.defaultPrevented || v.preventDefault();
        }
      }
    };
    xt(a0, {
      focusTrapRef: n,
      onKeydown: l
    }), se(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), se([n], ([v], [g]) => {
      v && (v.addEventListener("keydown", l), v.addEventListener("focusin", d), v.addEventListener("focusout", p)), g && (g.removeEventListener("keydown", l), g.removeEventListener("focusin", d), g.removeEventListener("focusout", p));
    });
    const u = (v) => {
      t(cl, v);
    }, c = (v) => t(fl, v), d = (v) => {
      const g = i(n);
      if (!g)
        return;
      const S = v.target, f = v.relatedTarget, w = S && g.contains(S);
      e.trapped || f && g.contains(f) || (r = f), w && t("focusin", v), !s.paused && e.trapped && (w ? o = S : Ht(o, !0));
    }, p = (v) => {
      const g = i(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const S = v.relatedTarget;
          !Qt(S) && !g.contains(S) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = Lr({
                focusReason: a.value
              });
              t("focusout-prevented", f), f.defaultPrevented || Ht(o, !0);
            }
          }, 0);
        } else {
          const S = v.target;
          S && g.contains(S) || t("focusout", v);
        }
    };
    async function m() {
      await Ae();
      const v = i(n);
      if (v) {
        ml.push(s);
        const g = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !v.contains(g)) {
          const f = new Event(To, ul);
          v.addEventListener(To, u), v.dispatchEvent(f), f.defaultPrevented || Ae(() => {
            let w = e.focusStartEl;
            qe(w) || (Ht(w), document.activeElement !== w && (w = "first")), w === "first" && c0(eu(v), !0), (document.activeElement === g || w === "container") && Ht(v);
          });
        }
      }
    }
    function h() {
      const v = i(n);
      if (v) {
        v.removeEventListener(To, u);
        const g = new CustomEvent(Oo, {
          ...ul,
          detail: {
            focusReason: a.value
          }
        });
        v.addEventListener(Oo, c), v.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !f0() || v.contains(document.activeElement)) && Ht(r ?? document.body), v.removeEventListener(Oo, c), ml.remove(s);
      }
    }
    return Ne(() => {
      e.trapped && m(), se(() => e.trapped, (v) => {
        v ? m() : h();
      });
    }), zt(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function v0(e, t, n, r, o, a) {
  return ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var g0 = /* @__PURE__ */ Ce(m0, [["render", v0], ["__file", "focus-trap.vue"]]), tt = "top", gt = "bottom", ht = "right", nt = "left", Ca = "auto", hr = [tt, gt, ht, nt], xn = "start", fr = "end", h0 = "clippingParents", tu = "viewport", Xn = "popper", y0 = "reference", hl = hr.reduce(function(e, t) {
  return e.concat([t + "-" + xn, t + "-" + fr]);
}, []), po = [].concat(hr, [Ca]).reduce(function(e, t) {
  return e.concat([t, t + "-" + xn, t + "-" + fr]);
}, []), b0 = "beforeRead", _0 = "read", w0 = "afterRead", E0 = "beforeMain", S0 = "main", C0 = "afterMain", T0 = "beforeWrite", O0 = "write", I0 = "afterWrite", A0 = [b0, _0, w0, E0, S0, C0, T0, O0, I0];
function Ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ct(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Cn(e) {
  var t = ct(e).Element;
  return e instanceof t || e instanceof Element;
}
function vt(e) {
  var t = ct(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ta(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ct(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function L0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !vt(a) || !Ut(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function P0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !vt(o) || !Ut(o) || (Object.assign(o.style, l), Object.keys(a).forEach(function(u) {
        o.removeAttribute(u);
      }));
    });
  };
}
var nu = { name: "applyStyles", enabled: !0, phase: "write", fn: L0, effect: P0, requires: ["computeStyles"] };
function Vt(e) {
  return e.split("-")[0];
}
var wn = Math.max, qr = Math.min, Bn = Math.round;
function jo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ru() {
  return !/^((?!chrome|android).)*safari/i.test(jo());
}
function Un(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && vt(e) && (o = e.offsetWidth > 0 && Bn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Bn(r.height) / e.offsetHeight || 1);
  var s = Cn(e) ? ct(e) : window, l = s.visualViewport, u = !ru() && n, c = (r.left + (u && l ? l.offsetLeft : 0)) / o, d = (r.top + (u && l ? l.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: d, right: c + p, bottom: d + m, left: c, x: c, y: d };
}
function Oa(e) {
  var t = Un(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function ou(e, t) {
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
function rn(e) {
  return ct(e).getComputedStyle(e);
}
function N0(e) {
  return ["table", "td", "th"].indexOf(Ut(e)) >= 0;
}
function hn(e) {
  return ((Cn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function mo(e) {
  return Ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ta(e) ? e.host : null) || hn(e);
}
function yl(e) {
  return !vt(e) || rn(e).position === "fixed" ? null : e.offsetParent;
}
function k0(e) {
  var t = /firefox/i.test(jo()), n = /Trident/i.test(jo());
  if (n && vt(e)) {
    var r = rn(e);
    if (r.position === "fixed") return null;
  }
  var o = mo(e);
  for (Ta(o) && (o = o.host); vt(o) && ["html", "body"].indexOf(Ut(o)) < 0; ) {
    var a = rn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function yr(e) {
  for (var t = ct(e), n = yl(e); n && N0(n) && rn(n).position === "static"; ) n = yl(n);
  return n && (Ut(n) === "html" || Ut(n) === "body" && rn(n).position === "static") ? t : n || k0(e) || t;
}
function Ia(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function er(e, t, n) {
  return wn(e, qr(t, n));
}
function R0(e, t, n) {
  var r = er(e, t, n);
  return r > n ? n : r;
}
function au() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function su(e) {
  return Object.assign({}, au(), e);
}
function lu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var $0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, su(typeof e != "number" ? e : lu(e, hr));
};
function M0(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Vt(n.placement), u = Ia(l), c = [nt, ht].indexOf(l) >= 0, d = c ? "height" : "width";
  if (!(!a || !s)) {
    var p = $0(o.padding, n), m = Oa(a), h = u === "y" ? tt : nt, v = u === "y" ? gt : ht, g = n.rects.reference[d] + n.rects.reference[u] - s[u] - n.rects.popper[d], S = s[u] - n.rects.reference[u], f = yr(a), w = f ? u === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, A = g / 2 - S / 2, T = p[h], y = w - m[d] - p[v], I = w / 2 - m[d] / 2 + A, O = er(T, I, y), B = u;
    n.modifiersData[r] = (t = {}, t[B] = O, t.centerOffset = O - I, t);
  }
}
function F0(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ou(t.elements.popper, o) && (t.elements.arrow = o));
}
var D0 = { name: "arrow", enabled: !0, phase: "main", fn: M0, effect: F0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function zn(e) {
  return e.split("-")[1];
}
var V0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function x0(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Bn(n * o) / o || 0, y: Bn(r * o) / o || 0 };
}
function bl(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, l = e.position, u = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = s.x, h = m === void 0 ? 0 : m, v = s.y, g = v === void 0 ? 0 : v, S = typeof d == "function" ? d({ x: h, y: g }) : { x: h, y: g };
  h = S.x, g = S.y;
  var f = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), A = nt, T = tt, y = window;
  if (c) {
    var I = yr(n), O = "clientHeight", B = "clientWidth";
    if (I === ct(n) && (I = hn(n), rn(I).position !== "static" && l === "absolute" && (O = "scrollHeight", B = "scrollWidth")), I = I, o === tt || (o === nt || o === ht) && a === fr) {
      T = gt;
      var U = p && I === y && y.visualViewport ? y.visualViewport.height : I[O];
      g -= U - r.height, g *= u ? 1 : -1;
    }
    if (o === nt || (o === tt || o === gt) && a === fr) {
      A = ht;
      var Q = p && I === y && y.visualViewport ? y.visualViewport.width : I[B];
      h -= Q - r.width, h *= u ? 1 : -1;
    }
  }
  var oe = Object.assign({ position: l }, c && V0), J = d === !0 ? x0({ x: h, y: g }, ct(n)) : { x: h, y: g };
  if (h = J.x, g = J.y, u) {
    var le;
    return Object.assign({}, oe, (le = {}, le[T] = w ? "0" : "", le[A] = f ? "0" : "", le.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", le));
  }
  return Object.assign({}, oe, (t = {}, t[T] = w ? g + "px" : "", t[A] = f ? h + "px" : "", t.transform = "", t));
}
function B0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, u = l === void 0 ? !0 : l, c = { placement: Vt(t.placement), variation: zn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bl(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bl(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var iu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: B0, data: {} }, Pr = { passive: !0 };
function U0(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, u = ct(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Pr);
  }), l && u.addEventListener("resize", n.update, Pr), function() {
    a && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Pr);
    }), l && u.removeEventListener("resize", n.update, Pr);
  };
}
var uu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: U0, data: {} }, z0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Mr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return z0[t];
  });
}
var W0 = { start: "end", end: "start" };
function _l(e) {
  return e.replace(/start|end/g, function(t) {
    return W0[t];
  });
}
function Aa(e) {
  var t = ct(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function La(e) {
  return Un(hn(e)).left + Aa(e).scrollLeft;
}
function j0(e, t) {
  var n = ct(e), r = hn(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    var c = ru();
    (c || !c && t === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
  }
  return { width: a, height: s, x: l + La(e), y: u };
}
function H0(e) {
  var t, n = hn(e), r = Aa(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = wn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = wn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + La(e), u = -r.scrollTop;
  return rn(o || n).direction === "rtl" && (l += wn(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: l, y: u };
}
function Pa(e) {
  var t = rn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function cu(e) {
  return ["html", "body", "#document"].indexOf(Ut(e)) >= 0 ? e.ownerDocument.body : vt(e) && Pa(e) ? e : cu(mo(e));
}
function tr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = cu(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ct(r), s = o ? [a].concat(a.visualViewport || [], Pa(r) ? r : []) : r, l = t.concat(s);
  return o ? l : l.concat(tr(mo(s)));
}
function Ho(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function K0(e, t) {
  var n = Un(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function wl(e, t, n) {
  return t === tu ? Ho(j0(e, n)) : Cn(t) ? K0(t, n) : Ho(H0(hn(e)));
}
function G0(e) {
  var t = tr(mo(e)), n = ["absolute", "fixed"].indexOf(rn(e).position) >= 0, r = n && vt(e) ? yr(e) : e;
  return Cn(r) ? t.filter(function(o) {
    return Cn(o) && ou(o, r) && Ut(o) !== "body";
  }) : [];
}
function Y0(e, t, n, r) {
  var o = t === "clippingParents" ? G0(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], l = a.reduce(function(u, c) {
    var d = wl(e, c, r);
    return u.top = wn(d.top, u.top), u.right = qr(d.right, u.right), u.bottom = qr(d.bottom, u.bottom), u.left = wn(d.left, u.left), u;
  }, wl(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function fu(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Vt(r) : null, a = r ? zn(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, u;
  switch (o) {
    case tt:
      u = { x: s, y: t.y - n.height };
      break;
    case gt:
      u = { x: s, y: t.y + t.height };
      break;
    case ht:
      u = { x: t.x + t.width, y: l };
      break;
    case nt:
      u = { x: t.x - n.width, y: l };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = o ? Ia(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (a) {
      case xn:
        u[c] = u[c] - (t[d] / 2 - n[d] / 2);
        break;
      case fr:
        u[c] = u[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return u;
}
function dr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, u = l === void 0 ? h0 : l, c = n.rootBoundary, d = c === void 0 ? tu : c, p = n.elementContext, m = p === void 0 ? Xn : p, h = n.altBoundary, v = h === void 0 ? !1 : h, g = n.padding, S = g === void 0 ? 0 : g, f = su(typeof S != "number" ? S : lu(S, hr)), w = m === Xn ? y0 : Xn, A = e.rects.popper, T = e.elements[v ? w : m], y = Y0(Cn(T) ? T : T.contextElement || hn(e.elements.popper), u, d, s), I = Un(e.elements.reference), O = fu({ reference: I, element: A, placement: o }), B = Ho(Object.assign({}, A, O)), U = m === Xn ? B : I, Q = { top: y.top - U.top + f.top, bottom: U.bottom - y.bottom + f.bottom, left: y.left - U.left + f.left, right: U.right - y.right + f.right }, oe = e.modifiersData.offset;
  if (m === Xn && oe) {
    var J = oe[o];
    Object.keys(Q).forEach(function(le) {
      var Se = [ht, gt].indexOf(le) >= 0 ? 1 : -1, P = [tt, gt].indexOf(le) >= 0 ? "y" : "x";
      Q[le] += J[P] * Se;
    });
  }
  return Q;
}
function q0(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? po : u, d = zn(r), p = d ? l ? hl : hl.filter(function(v) {
    return zn(v) === d;
  }) : hr, m = p.filter(function(v) {
    return c.indexOf(v) >= 0;
  });
  m.length === 0 && (m = p);
  var h = m.reduce(function(v, g) {
    return v[g] = dr(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[Vt(g)], v;
  }, {});
  return Object.keys(h).sort(function(v, g) {
    return h[v] - h[g];
  });
}
function X0(e) {
  if (Vt(e) === Ca) return [];
  var t = Mr(e);
  return [_l(e), t, _l(t)];
}
function Z0(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, u = n.fallbackPlacements, c = n.padding, d = n.boundary, p = n.rootBoundary, m = n.altBoundary, h = n.flipVariations, v = h === void 0 ? !0 : h, g = n.allowedAutoPlacements, S = t.options.placement, f = Vt(S), w = f === S, A = u || (w || !v ? [Mr(S)] : X0(S)), T = [S].concat(A).reduce(function(We, xe) {
      return We.concat(Vt(xe) === Ca ? q0(t, { placement: xe, boundary: d, rootBoundary: p, padding: c, flipVariations: v, allowedAutoPlacements: g }) : xe);
    }, []), y = t.rects.reference, I = t.rects.popper, O = /* @__PURE__ */ new Map(), B = !0, U = T[0], Q = 0; Q < T.length; Q++) {
      var oe = T[Q], J = Vt(oe), le = zn(oe) === xn, Se = [tt, gt].indexOf(J) >= 0, P = Se ? "width" : "height", R = dr(t, { placement: oe, boundary: d, rootBoundary: p, altBoundary: m, padding: c }), F = Se ? le ? ht : nt : le ? gt : tt;
      y[P] > I[P] && (F = Mr(F));
      var te = Mr(F), q = [];
      if (a && q.push(R[J] <= 0), l && q.push(R[F] <= 0, R[te] <= 0), q.every(function(We) {
        return We;
      })) {
        U = oe, B = !1;
        break;
      }
      O.set(oe, q);
    }
    if (B) for (var ce = v ? 3 : 1, H = function(We) {
      var xe = T.find(function(je) {
        var He = O.get(je);
        if (He) return He.slice(0, We).every(function(ye) {
          return ye;
        });
      });
      if (xe) return U = xe, "break";
    }, Me = ce; Me > 0; Me--) {
      var _e = H(Me);
      if (_e === "break") break;
    }
    t.placement !== U && (t.modifiersData[r]._skip = !0, t.placement = U, t.reset = !0);
  }
}
var J0 = { name: "flip", enabled: !0, phase: "main", fn: Z0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function El(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Sl(e) {
  return [tt, ht, gt, nt].some(function(t) {
    return e[t] >= 0;
  });
}
function Q0(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = dr(t, { elementContext: "reference" }), l = dr(t, { altBoundary: !0 }), u = El(s, r), c = El(l, o, a), d = Sl(u), p = Sl(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var ey = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Q0 };
function ty(e, t, n) {
  var r = Vt(e), o = [nt, tt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * o, [nt, ht].indexOf(r) >= 0 ? { x: l, y: s } : { x: s, y: l };
}
function ny(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = po.reduce(function(d, p) {
    return d[p] = ty(p, t.rects, a), d;
  }, {}), l = s[t.placement], u = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
var ry = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ny };
function oy(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = fu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var du = { name: "popperOffsets", enabled: !0, phase: "read", fn: oy, data: {} };
function ay(e) {
  return e === "x" ? "y" : "x";
}
function sy(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, u = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.padding, m = n.tether, h = m === void 0 ? !0 : m, v = n.tetherOffset, g = v === void 0 ? 0 : v, S = dr(t, { boundary: u, rootBoundary: c, padding: p, altBoundary: d }), f = Vt(t.placement), w = zn(t.placement), A = !w, T = Ia(f), y = ay(T), I = t.modifiersData.popperOffsets, O = t.rects.reference, B = t.rects.popper, U = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, Q = typeof U == "number" ? { mainAxis: U, altAxis: U } : Object.assign({ mainAxis: 0, altAxis: 0 }, U), oe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = { x: 0, y: 0 };
  if (I) {
    if (a) {
      var le, Se = T === "y" ? tt : nt, P = T === "y" ? gt : ht, R = T === "y" ? "height" : "width", F = I[T], te = F + S[Se], q = F - S[P], ce = h ? -B[R] / 2 : 0, H = w === xn ? O[R] : B[R], Me = w === xn ? -B[R] : -O[R], _e = t.elements.arrow, We = h && _e ? Oa(_e) : { width: 0, height: 0 }, xe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : au(), je = xe[Se], He = xe[P], ye = er(0, O[R], We[R]), rt = A ? O[R] / 2 - ce - ye - je - Q.mainAxis : H - ye - je - Q.mainAxis, ft = A ? -O[R] / 2 + ce + ye + He + Q.mainAxis : Me + ye + He + Q.mainAxis, ot = t.elements.arrow && yr(t.elements.arrow), yt = ot ? T === "y" ? ot.clientTop || 0 : ot.clientLeft || 0 : 0, at = (le = oe?.[T]) != null ? le : 0, st = F + rt - at - yt, lt = F + ft - at, dt = er(h ? qr(te, st) : te, F, h ? wn(q, lt) : q);
      I[T] = dt, J[T] = dt - F;
    }
    if (l) {
      var At, _ = T === "x" ? tt : nt, C = T === "x" ? gt : ht, M = I[y], j = y === "y" ? "height" : "width", fe = M + S[_], ne = M - S[C], b = [tt, nt].indexOf(f) !== -1, $ = (At = oe?.[y]) != null ? At : 0, ie = b ? fe : M - O[j] - B[j] - $ + Q.altAxis, me = b ? M + O[j] + B[j] - $ - Q.altAxis : ne, Ke = h && b ? R0(ie, M, me) : er(h ? ie : fe, M, h ? me : ne);
      I[y] = Ke, J[y] = Ke - M;
    }
    t.modifiersData[r] = J;
  }
}
var ly = { name: "preventOverflow", enabled: !0, phase: "main", fn: sy, requiresIfExists: ["offset"] };
function iy(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function uy(e) {
  return e === ct(e) || !vt(e) ? Aa(e) : iy(e);
}
function cy(e) {
  var t = e.getBoundingClientRect(), n = Bn(t.width) / e.offsetWidth || 1, r = Bn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function fy(e, t, n) {
  n === void 0 && (n = !1);
  var r = vt(t), o = vt(t) && cy(t), a = hn(t), s = Un(e, o, n), l = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (r || !r && !n) && ((Ut(t) !== "body" || Pa(a)) && (l = uy(t)), vt(t) ? (u = Un(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = La(a))), { x: s.left + l.scrollLeft - u.x, y: s.top + l.scrollTop - u.y, width: s.width, height: s.height };
}
function dy(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var u = t.get(l);
        u && o(u);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function py(e) {
  var t = dy(e);
  return A0.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function my(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function vy(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Cl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Tl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Na(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Cl : o;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Cl, a), modifiersData: {}, elements: { reference: s, popper: l }, attributes: {}, styles: {} }, d = [], p = !1, m = { state: c, setOptions: function(g) {
      var S = typeof g == "function" ? g(c.options) : g;
      v(), c.options = Object.assign({}, a, c.options, S), c.scrollParents = { reference: Cn(s) ? tr(s) : s.contextElement ? tr(s.contextElement) : [], popper: tr(l) };
      var f = py(vy([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = f.filter(function(w) {
        return w.enabled;
      }), h(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var g = c.elements, S = g.reference, f = g.popper;
        if (Tl(S, f)) {
          c.rects = { reference: fy(S, yr(f), c.options.strategy === "fixed"), popper: Oa(f) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(B) {
            return c.modifiersData[B.name] = Object.assign({}, B.data);
          });
          for (var w = 0; w < c.orderedModifiers.length; w++) {
            if (c.reset === !0) {
              c.reset = !1, w = -1;
              continue;
            }
            var A = c.orderedModifiers[w], T = A.fn, y = A.options, I = y === void 0 ? {} : y, O = A.name;
            typeof T == "function" && (c = T({ state: c, options: I, name: O, instance: m }) || c);
          }
        }
      }
    }, update: my(function() {
      return new Promise(function(g) {
        m.forceUpdate(), g(c);
      });
    }), destroy: function() {
      v(), p = !0;
    } };
    if (!Tl(s, l)) return m;
    m.setOptions(u).then(function(g) {
      !p && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      c.orderedModifiers.forEach(function(g) {
        var S = g.name, f = g.options, w = f === void 0 ? {} : f, A = g.effect;
        if (typeof A == "function") {
          var T = A({ state: c, name: S, instance: m, options: w }), y = function() {
          };
          d.push(T || y);
        }
      });
    }
    function v() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return m;
  };
}
Na();
var gy = [uu, du, iu, nu];
Na({ defaultModifiers: gy });
var hy = [uu, du, iu, nu, ry, J0, ly, D0, ey], yy = Na({ defaultModifiers: hy });
const by = ["fixed", "absolute"], _y = Ee({
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
    values: po,
    default: "bottom"
  },
  popperOptions: {
    type: re(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: by,
    default: "absolute"
  }
}), pu = Ee({
  ..._y,
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
  ...An(["ariaLabel"])
}), wy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Ey = (e, t) => {
  const n = D(!1), r = D();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var d;
      ((d = c.detail) == null ? void 0 : d.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (r.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, Sy = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Ty(e), ...t]
  };
  return Oy(a, o?.modifiers), a;
}, Cy = (e) => {
  if (Re)
    return Xt(e);
};
function Ty(e) {
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
function Oy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Iy = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = Ay(u);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, o = L(() => {
    const { onFirstUpdate: u, placement: c, strategy: d, modifiers: p } = i(n);
    return {
      onFirstUpdate: u,
      placement: c || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = dn(), s = D({
    styles: {
      popper: {
        position: i(o).strategy,
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
  return se(o, (u) => {
    const c = i(a);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), se([e, t], ([u, c]) => {
    l(), !(!u || !c) && (a.value = yy(u, c, i(o)));
  }), zt(() => {
    l();
  }), {
    state: L(() => {
      var u;
      return { ...((u = i(a)) == null ? void 0 : u.state) || {} };
    }),
    styles: L(() => i(s).styles),
    attributes: L(() => i(s).attributes),
    update: () => {
      var u;
      return (u = i(a)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = i(a)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: L(() => i(a))
  };
};
function Ay(e) {
  const t = Object.keys(e.elements), n = jr(t.map((o) => [o, e.styles[o] || {}])), r = jr(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const Ly = 0, Py = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = he(wa, void 0), a = D(), s = D(), l = L(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = L(() => {
    var f;
    const w = i(a), A = (f = i(s)) != null ? f : Ly;
    return {
      name: "arrow",
      enabled: !Gv(w),
      options: {
        element: w,
        padding: A
      }
    };
  }), c = L(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...Sy(e, [
      i(u),
      i(l)
    ])
  })), d = L(() => Cy(e.referenceEl) || i(r)), { attributes: p, state: m, styles: h, update: v, forceUpdate: g, instanceRef: S } = Iy(d, n, c);
  return se(S, (f) => t.value = f), Ne(() => {
    se(() => {
      var f;
      return (f = i(d)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: S,
    state: m,
    styles: h,
    role: o,
    forceUpdate: g,
    update: v
  };
}, Ny = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Ai(), a = $e("popper"), s = L(() => i(t).popper), l = D(ge(e.zIndex) ? e.zIndex : o()), u = L(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = L(() => [
    { zIndex: i(l) },
    i(n).popper,
    e.popperStyle || {}
  ]), d = L(() => r.value === "dialog" ? "false" : void 0), p = L(() => i(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: u,
    contentStyle: c,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = ge(e.zIndex) ? e.zIndex : o();
    }
  };
}, ky = Y({
  name: "ElPopperContent"
}), Ry = /* @__PURE__ */ Y({
  ...ky,
  props: pu,
  emits: wy,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: l,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = Ey(r, n), { attributes: p, arrowRef: m, contentRef: h, styles: v, instanceRef: g, role: S, update: f } = Py(r), {
      ariaModal: w,
      arrowStyle: A,
      contentAttrs: T,
      contentClass: y,
      contentStyle: I,
      updateZIndex: O
    } = Ny(r, {
      styles: v,
      attributes: p,
      role: S
    }), B = he(Yr, void 0), U = D();
    xt(Yi, {
      arrowStyle: A,
      arrowRef: m,
      arrowOffset: U
    }), B && xt(Yr, {
      ...B,
      addInputId: ir,
      removeInputId: ir
    });
    let Q;
    const oe = (le = !0) => {
      f(), le && O();
    }, J = () => {
      oe(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return Ne(() => {
      se(() => r.triggerTargetEl, (le, Se) => {
        Q?.(), Q = void 0;
        const P = i(le || h.value), R = i(Se || h.value);
        St(P) && (Q = se([S, () => r.ariaLabel, w, () => r.id], (F) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((te, q) => {
            Qt(F[q]) ? P.removeAttribute(te) : P.setAttribute(te, F[q]);
          });
        }, { immediate: !0 })), R !== P && St(R) && ["role", "aria-label", "aria-modal", "id"].forEach((F) => {
          R.removeAttribute(F);
        });
      }, { immediate: !0 }), se(() => r.visible, J, { immediate: !0 });
    }), zt(() => {
      Q?.(), Q = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: g,
      updatePopper: oe,
      contentStyle: I
    }), (le, Se) => (k(), W("div", $n({
      ref_key: "contentRef",
      ref: h
    }, i(T), {
      style: i(I),
      class: i(y),
      tabindex: "-1",
      onMouseenter: (P) => le.$emit("mouseenter", P),
      onMouseleave: (P) => le.$emit("mouseleave", P)
    }), [
      X(i(g0), {
        trapped: i(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": i(h),
        "focus-start-el": i(o),
        onFocusAfterTrapped: i(l),
        onFocusAfterReleased: i(s),
        onFocusin: i(u),
        onFocusoutPrevented: i(c),
        onReleaseRequested: i(d)
      }, {
        default: G(() => [
          ae(le.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var $y = /* @__PURE__ */ Ce(Ry, [["__file", "content.vue"]]);
const My = Ot(Kh), ka = Symbol("elTooltip");
function Ol() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return vr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Fy = Ee({
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
}), Dy = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Ol(), {
    registerTimeout: s,
    cancelTimeout: l
  } = Ol();
  return {
    onOpen: (d) => {
      a(() => {
        r(d);
        const p = i(n);
        ge(p) && p > 0 && s(() => {
          o(d);
        }, p);
      }, i(e));
    },
    onClose: (d) => {
      l(), a(() => {
        o(d);
      }, i(t));
    }
  };
}, Ra = Ee({
  ...Fy,
  ...pu,
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
  ...An(["ariaLabel"])
}), mu = Ee({
  ...Zi,
  disabled: Boolean,
  trigger: {
    type: re([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: re(Array),
    default: () => [Dt.enter, Dt.numpadEnter, Dt.space]
  }
}), Vy = lo({
  type: re(Boolean),
  default: null
}), xy = lo({
  type: re(Function)
}), By = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Vy,
    [n]: xy
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: l,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: d,
      onHide: p
    }) => {
      const m = Je(), { emit: h } = m, v = m.props, g = L(() => Oe(v[n])), S = L(() => v[e] === null), f = (O) => {
        s.value !== !0 && (s.value = !0, l && (l.value = O), Oe(d) && d(O));
      }, w = (O) => {
        s.value !== !1 && (s.value = !1, l && (l.value = O), Oe(p) && p(O));
      }, A = (O) => {
        if (v.disabled === !0 || Oe(c) && !c())
          return;
        const B = g.value && Re;
        B && h(t, !0), (S.value || !B) && f(O);
      }, T = (O) => {
        if (v.disabled === !0 || !Re)
          return;
        const B = g.value && Re;
        B && h(t, !1), (S.value || !B) && w(O);
      }, y = (O) => {
        pn(O) && (v.disabled && O ? g.value && h(t, !1) : s.value !== O && (O ? f() : w()));
      }, I = () => {
        s.value ? T() : A();
      };
      return se(() => v[e], y), u && m.appContext.config.globalProperties.$route !== void 0 && se(() => ({
        ...m.proxy.$route
      }), () => {
        u.value && s.value && T();
      }), Ne(() => {
        y(v[e]);
      }), {
        hide: T,
        show: A,
        toggle: I,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: Uy,
  useModelToggleEmits: zy,
  useModelToggle: Wy
} = By("visible"), jy = Ee({
  ...qi,
  ...Uy,
  ...Ra,
  ...mu,
  ...Xi,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Hy = [
  ...zy,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Ky = (e, t) => Rt(e) ? e.includes(t) : e === t, Nn = (e, t, n) => (r) => {
  Ky(i(e), t) && n(r);
}, Kt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, Gy = Y({
  name: "ElTooltipTrigger"
}), Yy = /* @__PURE__ */ Y({
  ...Gy,
  props: mu,
  setup(e, { expose: t }) {
    const n = e, r = $e("tooltip"), { controlled: o, id: a, open: s, onOpen: l, onClose: u, onToggle: c } = he(ka, void 0), d = D(null), p = () => {
      if (i(o) || n.disabled)
        return !0;
    }, m = Gt(n, "trigger"), h = Kt(p, Nn(m, "hover", l)), v = Kt(p, Nn(m, "hover", u)), g = Kt(p, Nn(m, "click", (T) => {
      T.button === 0 && c(T);
    })), S = Kt(p, Nn(m, "focus", l)), f = Kt(p, Nn(m, "focus", u)), w = Kt(p, Nn(m, "contextmenu", (T) => {
      T.preventDefault(), c(T);
    })), A = Kt(p, (T) => {
      const { code: y } = T;
      n.triggerKeys.includes(y) && (T.preventDefault(), c(T));
    });
    return t({
      triggerRef: d
    }), (T, y) => (k(), ee(i(n0), {
      id: i(a),
      "virtual-ref": T.virtualRef,
      open: i(s),
      "virtual-triggering": T.virtualTriggering,
      class: x(i(r).e("trigger")),
      onBlur: i(f),
      onClick: i(g),
      onContextmenu: i(w),
      onFocus: i(S),
      onMouseenter: i(h),
      onMouseleave: i(v),
      onKeydown: i(A)
    }, {
      default: G(() => [
        ae(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var qy = /* @__PURE__ */ Ce(Yy, [["__file", "trigger.vue"]]);
const Xy = Ee({
  to: {
    type: re([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Zy = /* @__PURE__ */ Y({
  __name: "teleport",
  props: Xy,
  setup(e) {
    return (t, n) => t.disabled ? ae(t.$slots, "default", { key: 0 }) : (k(), ee(Ju, {
      key: 1,
      to: t.to
    }, [
      ae(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Jy = /* @__PURE__ */ Ce(Zy, [["__file", "teleport.vue"]]);
const Qy = Ot(Jy), vu = () => {
  const e = oa(), t = ji(), n = L(() => `${e.value}-popper-container-${t.prefix}`), r = L(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, eb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, tb = () => {
  const { id: e, selector: t } = vu();
  return Qu(() => {
    Re && (document.body.querySelector(t.value) || eb(e.value));
  }), {
    id: e,
    selector: t
  };
}, nb = Y({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), rb = /* @__PURE__ */ Y({
  ...nb,
  props: Ra,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = vu(), o = $e("tooltip"), a = D();
    let s;
    const {
      controlled: l,
      id: u,
      open: c,
      trigger: d,
      onClose: p,
      onOpen: m,
      onShow: h,
      onHide: v,
      onBeforeShow: g,
      onBeforeHide: S
    } = he(ka, void 0), f = L(() => n.transition || `${o.namespace.value}-fade-in-linear`), w = L(() => n.persistent);
    zt(() => {
      s?.();
    });
    const A = L(() => i(w) ? !0 : i(c)), T = L(() => n.disabled ? !1 : i(c)), y = L(() => n.appendTo || r.value), I = L(() => {
      var F;
      return (F = n.style) != null ? F : {};
    }), O = D(!0), B = () => {
      v(), R() && Ht(document.body), O.value = !0;
    }, U = () => {
      if (i(l))
        return !0;
    }, Q = Kt(U, () => {
      n.enterable && i(d) === "hover" && m();
    }), oe = Kt(U, () => {
      i(d) === "hover" && p();
    }), J = () => {
      var F, te;
      (te = (F = a.value) == null ? void 0 : F.updatePopper) == null || te.call(F), g?.();
    }, le = () => {
      S?.();
    }, Se = () => {
      h(), s = cg(L(() => {
        var F;
        return (F = a.value) == null ? void 0 : F.popperContentRef;
      }), () => {
        if (i(l))
          return;
        i(d) !== "hover" && p();
      });
    }, P = () => {
      n.virtualTriggering || p();
    }, R = (F) => {
      var te;
      const q = (te = a.value) == null ? void 0 : te.popperContentRef, ce = F?.relatedTarget || document.activeElement;
      return q?.contains(ce);
    };
    return se(() => i(c), (F) => {
      F ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), se(() => n.content, () => {
      var F, te;
      (te = (F = a.value) == null ? void 0 : F.updatePopper) == null || te.call(F);
    }), t({
      contentRef: a,
      isFocusInsideContent: R
    }), (F, te) => (k(), ee(i(Qy), {
      disabled: !F.teleported,
      to: i(y)
    }, {
      default: G(() => [
        X(Hn, {
          name: i(f),
          onAfterLeave: B,
          onBeforeEnter: J,
          onAfterEnter: Se,
          onBeforeLeave: le
        }, {
          default: G(() => [
            i(A) ? Ue((k(), ee(i($y), $n({
              key: 0,
              id: i(u),
              ref_key: "contentRef",
              ref: a
            }, F.$attrs, {
              "aria-label": F.ariaLabel,
              "aria-hidden": O.value,
              "boundaries-padding": F.boundariesPadding,
              "fallback-placements": F.fallbackPlacements,
              "gpu-acceleration": F.gpuAcceleration,
              offset: F.offset,
              placement: F.placement,
              "popper-options": F.popperOptions,
              strategy: F.strategy,
              effect: F.effect,
              enterable: F.enterable,
              pure: F.pure,
              "popper-class": F.popperClass,
              "popper-style": [F.popperStyle, i(I)],
              "reference-el": F.referenceEl,
              "trigger-target-el": F.triggerTargetEl,
              visible: i(T),
              "z-index": F.zIndex,
              onMouseenter: i(Q),
              onMouseleave: i(oe),
              onBlur: P,
              onClose: i(p)
            }), {
              default: G(() => [
                ae(F.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [tn, i(T)]
            ]) : K("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var ob = /* @__PURE__ */ Ce(rb, [["__file", "content.vue"]]);
const ab = Y({
  name: "ElTooltip"
}), sb = /* @__PURE__ */ Y({
  ...ab,
  props: jy,
  emits: Hy,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    tb();
    const o = uo(), a = D(), s = D(), l = () => {
      var f;
      const w = i(a);
      w && ((f = w.popperInstanceRef) == null || f.update());
    }, u = D(!1), c = D(), { show: d, hide: p, hasUpdateHandler: m } = Wy({
      indicator: u,
      toggleReason: c
    }), { onOpen: h, onClose: v } = Dy({
      showAfter: Gt(r, "showAfter"),
      hideAfter: Gt(r, "hideAfter"),
      autoClose: Gt(r, "autoClose"),
      open: d,
      close: p
    }), g = L(() => pn(r.visible) && !m.value);
    xt(ka, {
      controlled: g,
      id: o,
      open: Yo(u),
      trigger: Gt(r, "trigger"),
      onOpen: (f) => {
        h(f);
      },
      onClose: (f) => {
        v(f);
      },
      onToggle: (f) => {
        i(u) ? v(f) : h(f);
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
    }), se(() => r.disabled, (f) => {
      f && u.value && (u.value = !1);
    });
    const S = (f) => {
      var w;
      return (w = s.value) == null ? void 0 : w.isFocusInsideContent(f);
    };
    return ec(() => u.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: S,
      updatePopper: l,
      onOpen: h,
      onClose: v,
      hide: p
    }), (f, w) => (k(), ee(i(My), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: G(() => [
        X(qy, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: G(() => [
            f.$slots.default ? ae(f.$slots, "default", { key: 0 }) : K("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        X(ob, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": f.ariaLabel,
          "boundaries-padding": f.boundariesPadding,
          content: f.content,
          disabled: f.disabled,
          effect: f.effect,
          enterable: f.enterable,
          "fallback-placements": f.fallbackPlacements,
          "hide-after": f.hideAfter,
          "gpu-acceleration": f.gpuAcceleration,
          offset: f.offset,
          persistent: f.persistent,
          "popper-class": f.popperClass,
          "popper-style": f.popperStyle,
          placement: f.placement,
          "popper-options": f.popperOptions,
          pure: f.pure,
          "raw-content": f.rawContent,
          "reference-el": f.referenceEl,
          "trigger-target-el": f.triggerTargetEl,
          "show-after": f.showAfter,
          strategy: f.strategy,
          teleported: f.teleported,
          transition: f.transition,
          "virtual-triggering": f.virtualTriggering,
          "z-index": f.zIndex,
          "append-to": f.appendTo
        }, {
          default: G(() => [
            ae(f.$slots, "content", {}, () => [
              f.rawContent ? (k(), W("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, ["innerHTML"])) : (k(), W("span", { key: 1 }, V(f.content), 1))
            ]),
            f.showArrow ? (k(), ee(i(qh), {
              key: 0,
              "arrow-offset": f.arrowOffset
            }, null, 8, ["arrow-offset"])) : K("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var lb = /* @__PURE__ */ Ce(sb, [["__file", "tooltip.vue"]]);
const ib = Ot(lb), ub = Ee({
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
}), cb = Y({
  name: "ElBadge"
}), fb = /* @__PURE__ */ Y({
  ...cb,
  props: ub,
  setup(e, { expose: t }) {
    const n = e, r = $e("badge"), o = L(() => n.isDot ? "" : ge(n.value) && ge(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = L(() => {
      var s, l, u, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Vn(-((l = (s = n.offset) == null ? void 0 : s[0]) != null ? l : 0)),
          marginTop: Vn((c = (u = n.offset) == null ? void 0 : u[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (s, l) => (k(), W("div", {
      class: x(i(r).b())
    }, [
      ae(s.$slots, "default"),
      X(Hn, {
        name: `${i(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: G(() => [
          Ue(E("sup", {
            class: x([
              i(r).e("content"),
              i(r).em("content", s.type),
              i(r).is("fixed", !!s.$slots.default),
              i(r).is("dot", s.isDot),
              i(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Be(i(a))
          }, [
            ae(s.$slots, "content", { value: i(o) }, () => [
              Xe(V(i(o)), 1)
            ])
          ], 6), [
            [tn, !s.hidden && (i(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var db = /* @__PURE__ */ Ce(fb, [["__file", "badge.vue"]]);
const pb = Ot(db), mb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ko = Ee({
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
    values: va
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), vb = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, gb = Y({
  name: "ElTag"
}), hb = /* @__PURE__ */ Y({
  ...gb,
  props: Ko,
  emits: vb,
  setup(e, { emit: t }) {
    const n = e, r = gr(), o = $e("tag"), a = L(() => {
      const { type: c, hit: d, effect: p, closable: m, round: h } = n;
      return [
        o.b(),
        o.is("closable", m),
        o.m(c || "primary"),
        o.m(r.value),
        o.m(p),
        o.is("hit", d),
        o.is("round", h)
      ];
    }), s = (c) => {
      t("close", c);
    }, l = (c) => {
      t("click", c);
    }, u = (c) => {
      var d, p, m;
      (m = (p = (d = c?.component) == null ? void 0 : d.subTree) == null ? void 0 : p.component) != null && m.bum && (c.component.subTree.component.bum = null);
    };
    return (c, d) => c.disableTransitions ? (k(), W("span", {
      key: 0,
      class: x(i(a)),
      style: Be({ backgroundColor: c.color }),
      onClick: l
    }, [
      E("span", {
        class: x(i(o).e("content"))
      }, [
        ae(c.$slots, "default")
      ], 2),
      c.closable ? (k(), ee(i(ke), {
        key: 0,
        class: x(i(o).e("close")),
        onClick: Ie(s, ["stop"])
      }, {
        default: G(() => [
          X(i(Kr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : K("v-if", !0)
    ], 6)) : (k(), ee(Hn, {
      key: 1,
      name: `${i(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: u
    }, {
      default: G(() => [
        E("span", {
          class: x(i(a)),
          style: Be({ backgroundColor: c.color }),
          onClick: l
        }, [
          E("span", {
            class: x(i(o).e("content"))
          }, [
            ae(c.$slots, "default")
          ], 2),
          c.closable ? (k(), ee(i(ke), {
            key: 0,
            class: x(i(o).e("close")),
            onClick: Ie(s, ["stop"])
          }, {
            default: G(() => [
              X(i(Kr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : K("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var yb = /* @__PURE__ */ Ce(hb, [["__file", "tag.vue"]]);
const bb = Ot(yb), ln = /* @__PURE__ */ new Map();
if (Re) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of ln.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function Il(e, t) {
  let n = [];
  return Rt(t.arg) ? n = t.arg : St(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, l = o?.target, u = !t || !t.instance, c = !s || !l, d = e.contains(s) || e.contains(l), p = e === s, m = n.length && n.some((v) => v?.contains(s)) || n.length && n.includes(l), h = a && (a.contains(s) || a.contains(l));
    u || c || d || p || m || h || t.value(r, o);
  };
}
const _b = {
  beforeMount(e, t) {
    ln.has(e) || ln.set(e, []), ln.get(e).push({
      documentHandler: Il(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    ln.has(e) || ln.set(e, []);
    const n = ln.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Il(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    ln.delete(e);
  }
}, wb = Ee({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: re(Object)
  },
  size: io,
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
  ...Ri
}), bt = {};
Y({
  name: "ElConfigProvider",
  props: wb,
  setup(e, { slots: t }) {
    se(() => e.message, (r) => {
      Object.assign(bt, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Fi(e);
    return () => ae(t, "default", { config: n?.value });
  }
});
const Eb = 100, Sb = 600, Al = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Eb, delay: o = Sb } = Oe(n) ? {} : n;
    let a, s;
    const l = () => Oe(n) ? n() : n.handler(), u = () => {
      s && (clearTimeout(s), s = void 0), a && (clearInterval(a), a = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (u(), l(), document.addEventListener("mouseup", () => u(), {
        once: !0
      }), s = setTimeout(() => {
        a = setInterval(() => {
          l();
        }, r);
      }, o));
    });
  }
}, Cb = Ee({
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
  size: io,
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
  ...An(["ariaLabel"])
}), Tb = {
  [nn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [en]: (e) => ge(e) || Qt(e),
  [Ve]: (e) => ge(e) || Qt(e)
}, Ob = Y({
  name: "ElInputNumber"
}), Ib = /* @__PURE__ */ Y({
  ...Ob,
  props: Cb,
  emits: Tb,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = ma(), a = $e("input-number"), s = D(), l = En({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: u } = co(), c = L(() => ge(r.modelValue) && r.modelValue <= r.min), d = L(() => ge(r.modelValue) && r.modelValue >= r.max), p = L(() => {
      const P = f(r.step);
      return $t(r.precision) ? Math.max(f(r.modelValue), P) : (P > r.precision, r.precision);
    }), m = L(() => r.controls && r.controlsPosition === "right"), h = gr(), v = ba(), g = L(() => {
      if (l.userInput !== null)
        return l.userInput;
      let P = l.currentValue;
      if (Qt(P))
        return "";
      if (ge(P)) {
        if (Number.isNaN(P))
          return "";
        $t(r.precision) || (P = P.toFixed(r.precision));
      }
      return P;
    }), S = (P, R) => {
      if ($t(R) && (R = p.value), R === 0)
        return Math.round(P);
      let F = String(P);
      const te = F.indexOf(".");
      if (te === -1 || !F.replace(".", "").split("")[te + R])
        return P;
      const H = F.length;
      return F.charAt(H - 1) === "5" && (F = `${F.slice(0, Math.max(0, H - 1))}6`), Number.parseFloat(Number(F).toFixed(R));
    }, f = (P) => {
      if (Qt(P))
        return 0;
      const R = P.toString(), F = R.indexOf(".");
      let te = 0;
      return F !== -1 && (te = R.length - F - 1), te;
    }, w = (P, R = 1) => ge(P) ? S(P + r.step * R) : l.currentValue, A = () => {
      if (r.readonly || v.value || d.value)
        return;
      const P = Number(g.value) || 0, R = w(P);
      I(R), n(en, l.currentValue), le();
    }, T = () => {
      if (r.readonly || v.value || c.value)
        return;
      const P = Number(g.value) || 0, R = w(P, -1);
      I(R), n(en, l.currentValue), le();
    }, y = (P, R) => {
      const { max: F, min: te, step: q, precision: ce, stepStrictly: H, valueOnClear: Me } = r;
      F < te && pa("InputNumber", "min should not be greater than max.");
      let _e = Number(P);
      if (Qt(P) || Number.isNaN(_e))
        return null;
      if (P === "") {
        if (Me === null)
          return null;
        _e = qe(Me) ? { min: te, max: F }[Me] : Me;
      }
      return H && (_e = S(Math.round(_e / q) * q, ce), _e !== P && R && n(Ve, _e)), $t(ce) || (_e = S(_e, ce)), (_e > F || _e < te) && (_e = _e > F ? F : te, R && n(Ve, _e)), _e;
    }, I = (P, R = !0) => {
      var F;
      const te = l.currentValue, q = y(P);
      if (!R) {
        n(Ve, q);
        return;
      }
      te === q && P || (l.userInput = null, n(Ve, q), te !== q && n(nn, q, te), r.validateEvent && ((F = u?.validate) == null || F.call(u, "change").catch((ce) => void 0)), l.currentValue = q);
    }, O = (P) => {
      l.userInput = P;
      const R = P === "" ? null : Number(P);
      n(en, R), I(R, !1);
    }, B = (P) => {
      const R = P !== "" ? Number(P) : "";
      (ge(R) && !Number.isNaN(R) || P === "") && I(R), le(), l.userInput = null;
    }, U = () => {
      var P, R;
      (R = (P = s.value) == null ? void 0 : P.focus) == null || R.call(P);
    }, Q = () => {
      var P, R;
      (R = (P = s.value) == null ? void 0 : P.blur) == null || R.call(P);
    }, oe = (P) => {
      n("focus", P);
    }, J = (P) => {
      var R, F;
      l.userInput = null, zi() && l.currentValue === null && ((R = s.value) != null && R.input) && (s.value.input.value = ""), n("blur", P), r.validateEvent && ((F = u?.validate) == null || F.call(u, "blur").catch((te) => void 0));
    }, le = () => {
      l.currentValue !== r.modelValue && (l.currentValue = r.modelValue);
    }, Se = (P) => {
      document.activeElement === P.target && P.preventDefault();
    };
    return se(() => r.modelValue, (P, R) => {
      const F = y(P, !0);
      l.userInput === null && F !== R && (l.currentValue = F);
    }, { immediate: !0 }), Ne(() => {
      var P;
      const { min: R, max: F, modelValue: te } = r, q = (P = s.value) == null ? void 0 : P.input;
      if (q.setAttribute("role", "spinbutton"), Number.isFinite(F) ? q.setAttribute("aria-valuemax", String(F)) : q.removeAttribute("aria-valuemax"), Number.isFinite(R) ? q.setAttribute("aria-valuemin", String(R)) : q.removeAttribute("aria-valuemin"), q.setAttribute("aria-valuenow", l.currentValue || l.currentValue === 0 ? String(l.currentValue) : ""), q.setAttribute("aria-disabled", String(v.value)), !ge(te) && te != null) {
        let ce = Number(te);
        Number.isNaN(ce) && (ce = null), n(Ve, ce);
      }
      q.addEventListener("wheel", Se, { passive: !1 });
    }), Ml(() => {
      var P, R;
      const F = (P = s.value) == null ? void 0 : P.input;
      F?.setAttribute("aria-valuenow", `${(R = l.currentValue) != null ? R : ""}`);
    }), t({
      focus: U,
      blur: Q
    }), (P, R) => (k(), W("div", {
      class: x([
        i(a).b(),
        i(a).m(i(h)),
        i(a).is("disabled", i(v)),
        i(a).is("without-controls", !P.controls),
        i(a).is("controls-right", i(m))
      ]),
      onDragstart: Ie(() => {
      }, ["prevent"])
    }, [
      P.controls ? Ue((k(), W("span", {
        key: 0,
        role: "button",
        "aria-label": i(o)("el.inputNumber.decrease"),
        class: x([i(a).e("decrease"), i(a).is("disabled", i(c))]),
        onKeydown: _t(T, ["enter"])
      }, [
        ae(P.$slots, "decrease-icon", {}, () => [
          X(i(ke), null, {
            default: G(() => [
              i(m) ? (k(), ee(i(xi), { key: 0 })) : (k(), ee(i(eh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [i(Al), T]
      ]) : K("v-if", !0),
      P.controls ? Ue((k(), W("span", {
        key: 1,
        role: "button",
        "aria-label": i(o)("el.inputNumber.increase"),
        class: x([i(a).e("increase"), i(a).is("disabled", i(d))]),
        onKeydown: _t(A, ["enter"])
      }, [
        ae(P.$slots, "increase-icon", {}, () => [
          X(i(ke), null, {
            default: G(() => [
              i(m) ? (k(), ee(i(Ug), { key: 0 })) : (k(), ee(i(nh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [i(Al), A]
      ]) : K("v-if", !0),
      X(i(Ih), {
        id: P.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: P.step,
        "model-value": i(g),
        placeholder: P.placeholder,
        readonly: P.readonly,
        disabled: i(v),
        size: i(h),
        max: P.max,
        min: P.min,
        name: P.name,
        "aria-label": P.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          _t(Ie(A, ["prevent"]), ["up"]),
          _t(Ie(T, ["prevent"]), ["down"])
        ],
        onBlur: J,
        onFocus: oe,
        onInput: O,
        onChange: B
      }, tc({
        _: 2
      }, [
        P.$slots.prefix ? {
          name: "prefix",
          fn: G(() => [
            ae(P.$slots, "prefix")
          ])
        } : void 0,
        P.$slots.suffix ? {
          name: "suffix",
          fn: G(() => [
            ae(P.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Ab = /* @__PURE__ */ Ce(Ib, [["__file", "input-number.vue"]]);
const Lb = Ot(Ab);
function Pb() {
  const e = dn(), t = D(0), n = 11, r = L(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return kt(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const gu = Symbol("ElSelectGroup"), vo = Symbol("ElSelect");
function Nb(e, t) {
  const n = he(vo), r = he(gu, { disabled: !1 }), o = L(() => d(cn(n.props.modelValue), e.value)), a = L(() => {
    var h;
    if (n.props.multiple) {
      const v = cn((h = n.props.modelValue) != null ? h : []);
      return !o.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = L(() => e.label || (ut(e.value) ? "" : e.value)), l = L(() => e.value || e.label || ""), u = L(() => e.disabled || t.groupDisabled || a.value), c = Je(), d = (h = [], v) => {
    if (ut(e.value)) {
      const g = n.props.valueKey;
      return h && h.some((S) => nc(fn(S, g)) === fn(v, g));
    } else
      return h && h.includes(v);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, m = (h) => {
    const v = new RegExp(mb(h), "i");
    t.visible = v.test(s.value) || e.created;
  };
  return se(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), se(() => e.value, (h, v) => {
    const { remote: g, valueKey: S } = n.props;
    if ((g ? h !== v : !Qn(h, v)) && (n.onOptionDestroy(v, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !g) {
      if (S && ut(h) && ut(v) && h[S] === v[S])
        return;
      n.setSelected();
    }
  }), se(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: l,
    itemSelected: o,
    isDisabled: u,
    hoverItem: p,
    updateOption: m
  };
}
const kb = Y({
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
    const t = $e("select"), n = uo(), r = L(() => [
      t.be("dropdown", "item"),
      t.is("disabled", i(l)),
      t.is("selected", i(s)),
      t.is("hovering", i(m))
    ]), o = En({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: l,
      select: u,
      hoverItem: c,
      updateOption: d
    } = Nb(e, o), { visible: p, hover: m } = qo(o), h = Je().proxy;
    u.onOptionCreate(h), zt(() => {
      const g = h.value, { selected: S } = u.states, f = S.some((w) => w.value === h.value);
      Ae(() => {
        u.states.cachedOptions.get(g) === h && !f && u.states.cachedOptions.delete(g);
      }), u.onOptionDestroy(g, h);
    });
    function v() {
      l.value || u.handleOptionSelect(h);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: a,
      itemSelected: s,
      isDisabled: l,
      select: u,
      hoverItem: c,
      updateOption: d,
      visible: p,
      hover: m,
      selectOptionClick: v,
      states: o
    };
  }
});
function Rb(e, t, n, r, o, a) {
  return Ue((k(), W("li", {
    id: e.id,
    class: x(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ie(e.selectOptionClick, ["stop"])
  }, [
    ae(e.$slots, "default", {}, () => [
      E("span", null, V(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [tn, e.visible]
  ]);
}
var $a = /* @__PURE__ */ Ce(kb, [["render", Rb], ["__file", "option.vue"]]);
const $b = Y({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = he(vo), t = $e("select"), n = L(() => e.props.popperClass), r = L(() => e.props.multiple), o = L(() => e.props.fitInputWidth), a = D("");
    function s() {
      var l;
      a.value = `${(l = e.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return Ne(() => {
      s(), kt(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function Mb(e, t, n, r, o, a) {
  return k(), W("div", {
    class: x([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Be({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (k(), W("div", {
      key: 0,
      class: x(e.ns.be("dropdown", "header"))
    }, [
      ae(e.$slots, "header")
    ], 2)) : K("v-if", !0),
    ae(e.$slots, "default"),
    e.$slots.footer ? (k(), W("div", {
      key: 1,
      class: x(e.ns.be("dropdown", "footer"))
    }, [
      ae(e.$slots, "footer")
    ], 2)) : K("v-if", !0)
  ], 6);
}
var Fb = /* @__PURE__ */ Ce($b, [["render", Mb], ["__file", "select-dropdown.vue"]]);
const Db = (e, t) => {
  const { t: n } = ma(), r = uo(), o = $e("select"), a = $e("input"), s = En({
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
  }), l = D(null), u = D(null), c = D(null), d = D(null), p = D(null), m = D(null), h = D(null), v = D(null), g = D(null), S = D(null), f = D(null), {
    isComposing: w,
    handleCompositionStart: A,
    handleCompositionUpdate: T,
    handleCompositionEnd: y
  } = Gi({
    afterComposition: (N) => Ke(N)
  }), { wrapperRef: I, isFocused: O, handleBlur: B } = Ki(p, {
    beforeFocus() {
      return R.value;
    },
    afterFocus() {
      e.automaticDropdown && !U.value && (U.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(N) {
      var z, ue;
      return ((z = c.value) == null ? void 0 : z.isFocusInsideContent(N)) || ((ue = d.value) == null ? void 0 : ue.isFocusInsideContent(N));
    },
    afterBlur() {
      U.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), U = D(!1), Q = D(), { form: oe, formItem: J } = co(), { inputId: le } = ya(e, {
    formItemContext: J
  }), { valueOnClear: Se, isEmptyValue: P } = kg(e), R = L(() => e.disabled || oe?.disabled), F = L(() => Rt(e.modelValue) ? e.modelValue.length > 0 : !P(e.modelValue)), te = L(() => {
    var N;
    return (N = oe?.statusIcon) != null ? N : !1;
  }), q = L(() => e.clearable && !R.value && s.inputHovering && F.value), ce = L(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), H = L(() => o.is("reverse", ce.value && U.value)), Me = L(() => J?.validateState || ""), _e = L(() => Ui[Me.value]), We = L(() => e.remote ? 300 : 0), xe = L(() => e.remote && !s.inputValue && s.options.size === 0), je = L(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && He.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), He = L(() => ye.value.filter((N) => N.visible).length), ye = L(() => {
    const N = Array.from(s.options.values()), z = [];
    return s.optionValues.forEach((ue) => {
      const Fe = N.findIndex((it) => it.value === ue);
      Fe > -1 && z.push(N[Fe]);
    }), z.length >= N.length ? z : N;
  }), rt = L(() => Array.from(s.cachedOptions.values())), ft = L(() => {
    const N = ye.value.filter((z) => !z.created).some((z) => z.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !N;
  }), ot = () => {
    e.filterable && Oe(e.filterMethod) || e.filterable && e.remote && Oe(e.remoteMethod) || ye.value.forEach((N) => {
      var z;
      (z = N.updateOption) == null || z.call(N, s.inputValue);
    });
  }, yt = gr(), at = L(() => ["small"].includes(yt.value) ? "small" : "default"), st = L({
    get() {
      return U.value && !xe.value;
    },
    set(N) {
      U.value = N;
    }
  }), lt = L(() => {
    if (e.multiple && !$t(e.modelValue))
      return cn(e.modelValue).length === 0 && !s.inputValue;
    const N = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $t(N) ? !s.inputValue : !0;
  }), dt = L(() => {
    var N;
    const z = (N = e.placeholder) != null ? N : n("el.select.placeholder");
    return e.multiple || !F.value ? z : s.selectedLabel;
  }), At = L(() => zo ? null : "mouseenter");
  se(() => e.modelValue, (N, z) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", _("")), M(), !Qn(N, z) && e.validateEvent && J?.validate("change").catch((ue) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), se(() => U.value, (N) => {
    N ? _(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", N);
  }), se(() => s.options.entries(), () => {
    Re && (M(), e.defaultFirstOption && (e.filterable || e.remote) && He.value && C());
  }, {
    flush: "post"
  }), se([() => s.hoveringIndex, ye], ([N]) => {
    ge(N) && N > -1 ? Q.value = ye.value[N] || {} : Q.value = {}, ye.value.forEach((z) => {
      z.hover = Q.value === z;
    });
  }), $l(() => {
    s.isBeforeHide || ot();
  });
  const _ = (N) => {
    s.previousQuery === N || w.value || (s.previousQuery = N, e.filterable && Oe(e.filterMethod) ? e.filterMethod(N) : e.filterable && e.remote && Oe(e.remoteMethod) && e.remoteMethod(N), e.defaultFirstOption && (e.filterable || e.remote) && He.value ? Ae(C) : Ae(fe));
  }, C = () => {
    const N = ye.value.filter((it) => it.visible && !it.disabled && !it.states.groupDisabled), z = N.find((it) => it.created), ue = N[0], Fe = ye.value.map((it) => it.value);
    s.hoveringIndex = xa(Fe, z || ue);
  }, M = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const z = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue, ue = j(z);
      s.selectedLabel = ue.currentLabel, s.selected = [ue];
      return;
    }
    const N = [];
    $t(e.modelValue) || cn(e.modelValue).forEach((z) => {
      N.push(j(z));
    }), s.selected = N;
  }, j = (N) => {
    let z;
    const ue = ld(N);
    for (let Ln = s.cachedOptions.size - 1; Ln >= 0; Ln--) {
      const sn = rt.value[Ln];
      if (ue ? fn(sn.value, e.valueKey) === fn(N, e.valueKey) : sn.value === N) {
        z = {
          value: N,
          currentLabel: sn.currentLabel,
          get isDisabled() {
            return sn.isDisabled;
          }
        };
        break;
      }
    }
    if (z)
      return z;
    const Fe = ue ? N.label : N ?? "";
    return {
      value: N,
      currentLabel: Fe
    };
  }, fe = () => {
    s.hoveringIndex = ye.value.findIndex((N) => s.selected.some((z) => wr(z) === wr(N)));
  }, ne = () => {
    s.selectionWidth = u.value.getBoundingClientRect().width;
  }, b = () => {
    s.collapseItemWidth = S.value.getBoundingClientRect().width;
  }, $ = () => {
    var N, z;
    (z = (N = c.value) == null ? void 0 : N.updatePopper) == null || z.call(N);
  }, ie = () => {
    var N, z;
    (z = (N = d.value) == null ? void 0 : N.updatePopper) == null || z.call(N);
  }, me = () => {
    s.inputValue.length > 0 && !U.value && (U.value = !0), _(s.inputValue);
  }, Ke = (N) => {
    if (s.inputValue = N.target.value, e.remote)
      yn();
    else
      return me();
  }, yn = Hv(() => {
    me();
  }, We.value), pt = (N) => {
    Qn(e.modelValue, N) || t(nn, N);
  }, go = (N) => Kv(N, (z) => {
    const ue = s.cachedOptions.get(z);
    return ue && !ue.disabled && !ue.states.groupDisabled;
  }), Fa = (N) => {
    if (e.multiple && N.code !== Dt.delete && N.target.value.length <= 0) {
      const z = cn(e.modelValue).slice(), ue = go(z);
      if (ue < 0)
        return;
      const Fe = z[ue];
      z.splice(ue, 1), t(Ve, z), pt(z), t("remove-tag", Fe);
    }
  }, Tu = (N, z) => {
    const ue = s.selected.indexOf(z);
    if (ue > -1 && !R.value) {
      const Fe = cn(e.modelValue).slice();
      Fe.splice(ue, 1), t(Ve, Fe), pt(Fe), t("remove-tag", z.value);
    }
    N.stopPropagation(), _r();
  }, Da = (N) => {
    N.stopPropagation();
    const z = e.multiple ? [] : Se.value;
    if (e.multiple)
      for (const ue of s.selected)
        ue.isDisabled && z.push(ue.value);
    t(Ve, z), pt(z), s.hoveringIndex = -1, U.value = !1, t("clear"), _r();
  }, Va = (N) => {
    var z;
    if (e.multiple) {
      const ue = cn((z = e.modelValue) != null ? z : []).slice(), Fe = xa(ue, N);
      Fe > -1 ? ue.splice(Fe, 1) : (e.multipleLimit <= 0 || ue.length < e.multipleLimit) && ue.push(N.value), t(Ve, ue), pt(ue), N.created && _(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Ve, N.value), pt(N.value), U.value = !1;
    _r(), !U.value && Ae(() => {
      br(N);
    });
  }, xa = (N = [], z) => $t(z) ? -1 : ut(z.value) ? N.findIndex((ue) => Qn(fn(ue, e.valueKey), wr(z))) : N.indexOf(z.value), br = (N) => {
    var z, ue, Fe, it, Ln;
    const sn = Rt(N) ? N[0] : N;
    let Er = null;
    if (sn?.value) {
      const Gn = ye.value.filter((zu) => zu.value === sn.value);
      Gn.length > 0 && (Er = Gn[0].$el);
    }
    if (c.value && Er) {
      const Gn = (it = (Fe = (ue = (z = c.value) == null ? void 0 : z.popperRef) == null ? void 0 : ue.contentRef) == null ? void 0 : Fe.querySelector) == null ? void 0 : it.call(Fe, `.${o.be("dropdown", "wrap")}`);
      Gn && $g(Gn, Er);
    }
    (Ln = f.value) == null || Ln.handleScroll();
  }, Ou = (N) => {
    s.options.set(N.value, N), s.cachedOptions.set(N.value, N);
  }, Iu = (N, z) => {
    s.options.get(N) === z && s.options.delete(N);
  }, Au = L(() => {
    var N, z;
    return (z = (N = c.value) == null ? void 0 : N.popperRef) == null ? void 0 : z.contentRef;
  }), Lu = () => {
    s.isBeforeHide = !1, Ae(() => {
      var N;
      (N = f.value) == null || N.update(), br(s.selected);
    });
  }, _r = () => {
    var N;
    (N = p.value) == null || N.focus();
  }, Pu = () => {
    var N;
    if (U.value) {
      U.value = !1, Ae(() => {
        var z;
        return (z = p.value) == null ? void 0 : z.blur();
      });
      return;
    }
    (N = p.value) == null || N.blur();
  }, Nu = (N) => {
    Da(N);
  }, ku = (N) => {
    if (U.value = !1, O.value) {
      const z = new FocusEvent("focus", N);
      Ae(() => B(z));
    }
  }, Ru = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : U.value = !1;
  }, Ba = () => {
    R.value || (zo && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : U.value = !U.value);
  }, $u = () => {
    if (!U.value)
      Ba();
    else {
      const N = ye.value[s.hoveringIndex];
      N && !N.isDisabled && Va(N);
    }
  }, wr = (N) => ut(N.value) ? fn(N.value, e.valueKey) : N.value, Mu = L(() => ye.value.filter((N) => N.visible).every((N) => N.isDisabled)), Fu = L(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Du = L(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Ua = (N) => {
    if (!U.value) {
      U.value = !0;
      return;
    }
    if (!(s.options.size === 0 || He.value === 0 || w.value) && !Mu.value) {
      N === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : N === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const z = ye.value[s.hoveringIndex];
      (z.isDisabled || !z.visible) && Ua(N), Ae(() => br(Q.value));
    }
  }, Vu = () => {
    if (!u.value)
      return 0;
    const N = window.getComputedStyle(u.value);
    return Number.parseFloat(N.gap || "6px");
  }, xu = L(() => {
    const N = Vu();
    return { maxWidth: `${S.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - N : s.selectionWidth}px` };
  }), Bu = L(() => ({ maxWidth: `${s.selectionWidth}px` })), Uu = (N) => {
    t("popup-scroll", N);
  };
  return kt(u, ne), kt(v, $), kt(I, $), kt(g, ie), kt(S, b), Ne(() => {
    M();
  }), {
    inputId: le,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: U,
    optionsArray: ye,
    hoverOption: Q,
    selectSize: yt,
    filteredOptionsCount: He,
    updateTooltip: $,
    updateTagTooltip: ie,
    debouncedOnInputChange: yn,
    onInput: Ke,
    deletePrevTag: Fa,
    deleteTag: Tu,
    deleteSelected: Da,
    handleOptionSelect: Va,
    scrollToOption: br,
    hasModelValue: F,
    shouldShowPlaceholder: lt,
    currentPlaceholder: dt,
    mouseEnterEventName: At,
    needStatusIcon: te,
    showClose: q,
    iconComponent: ce,
    iconReverse: H,
    validateState: Me,
    validateIcon: _e,
    showNewOption: ft,
    updateOptions: ot,
    collapseTagSize: at,
    setSelected: M,
    selectDisabled: R,
    emptyText: je,
    handleCompositionStart: A,
    handleCompositionUpdate: T,
    handleCompositionEnd: y,
    onOptionCreate: Ou,
    onOptionDestroy: Iu,
    handleMenuEnter: Lu,
    focus: _r,
    blur: Pu,
    handleClearClick: Nu,
    handleClickOutside: ku,
    handleEsc: Ru,
    toggleMenu: Ba,
    selectOption: $u,
    getValueKey: wr,
    navigateOptions: Ua,
    dropdownMenuVisible: st,
    showTagList: Fu,
    collapseTagList: Du,
    popupScroll: Uu,
    tagStyle: xu,
    collapseTagStyle: Bu,
    popperRef: Au,
    inputRef: p,
    tooltipRef: c,
    tagTooltipRef: d,
    prefixRef: m,
    suffixRef: h,
    selectRef: l,
    wrapperRef: I,
    selectionRef: u,
    scrollbarRef: f,
    menuRef: v,
    tagMenuRef: g,
    collapseItemRef: S
  };
};
var Vb = Y({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = he(vo);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function u(c) {
        Rt(c) && c.forEach((d) => {
          var p, m, h, v;
          const g = (p = d?.type || {}) == null ? void 0 : p.name;
          g === "ElOptionGroup" ? u(!qe(d.children) && !Rt(d.children) && Oe((m = d.children) == null ? void 0 : m.default) ? (h = d.children) == null ? void 0 : h.default() : d.children) : g === "ElOption" ? l.push((v = d.props) == null ? void 0 : v.value) : Rt(d.children) && u(d.children);
        });
      }
      return s.length && u((a = s[0]) == null ? void 0 : a.children), Qn(l, r) || (r = l, n && (n.states.optionValues = l)), s;
    };
  }
});
const xb = Ee({
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
  size: io,
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
  teleported: Ra.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Mt,
    default: ga
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Mt,
    default: xi
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
    type: re(String),
    values: po,
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
  ...Ri,
  ...An(["ariaLabel"])
}), Ll = "ElSelect", Bb = Y({
  name: Ll,
  componentName: Ll,
  components: {
    ElSelectMenu: Fb,
    ElOption: $a,
    ElOptions: Vb,
    ElTag: bb,
    ElScrollbar: zh,
    ElTooltip: ib,
    ElIcon: ke
  },
  directives: { ClickOutside: _b },
  props: xb,
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
    const n = L(() => {
      const { modelValue: u, multiple: c } = e, d = c ? [] : void 0;
      return Rt(u) ? c ? u : d : c ? d : u;
    }), r = En({
      ...qo(e),
      modelValue: n
    }), o = Db(r, t), { calculatorRef: a, inputStyle: s } = Pb();
    xt(vo, En({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const l = L(() => e.multiple ? o.states.selected.map((u) => u.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: l,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function Ub(e, t, n, r, o, a) {
  const s = bn("el-tag"), l = bn("el-tooltip"), u = bn("el-icon"), c = bn("el-option"), d = bn("el-options"), p = bn("el-scrollbar"), m = bn("el-select-menu"), h = rc("click-outside");
  return Ue((k(), W("div", {
    ref: "selectRef",
    class: x([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [oc(e.mouseEnterEventName)]: (v) => e.states.inputHovering = !0,
    onMouseleave: (v) => e.states.inputHovering = !1
  }, [
    X(l, {
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
      onHide: (v) => e.states.isBeforeHide = !1
    }, {
      default: G(() => {
        var v;
        return [
          E("div", {
            ref: "wrapperRef",
            class: x([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ie(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (k(), W("div", {
              key: 0,
              ref: "prefixRef",
              class: x(e.nsSelect.e("prefix"))
            }, [
              ae(e.$slots, "prefix")
            ], 2)) : K("v-if", !0),
            E("div", {
              ref: "selectionRef",
              class: x([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ae(e.$slots, "tag", { key: 0 }, () => [
                (k(!0), W(et, null, rr(e.showTagList, (g) => (k(), W("div", {
                  key: e.getValueKey(g),
                  class: x(e.nsSelect.e("selected-item"))
                }, [
                  X(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Be(e.tagStyle),
                    onClose: (S) => e.deleteTag(S, g)
                  }, {
                    default: G(() => [
                      E("span", {
                        class: x(e.nsSelect.e("tags-text"))
                      }, [
                        ae(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          Xe(V(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (k(), ee(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: G(() => [
                    E("div", {
                      ref: "collapseItemRef",
                      class: x(e.nsSelect.e("selected-item"))
                    }, [
                      X(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Be(e.collapseTagStyle)
                      }, {
                        default: G(() => [
                          E("span", {
                            class: x(e.nsSelect.e("tags-text"))
                          }, " + " + V(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: G(() => [
                    E("div", {
                      ref: "tagMenuRef",
                      class: x(e.nsSelect.e("selection"))
                    }, [
                      (k(!0), W(et, null, rr(e.collapseTagList, (g) => (k(), W("div", {
                        key: e.getValueKey(g),
                        class: x(e.nsSelect.e("selected-item"))
                      }, [
                        X(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (S) => e.deleteTag(S, g)
                        }, {
                          default: G(() => [
                            E("span", {
                              class: x(e.nsSelect.e("tags-text"))
                            }, [
                              ae(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                Xe(V(g.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : K("v-if", !0)
              ]) : K("v-if", !0),
              E("div", {
                class: x([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Ue(E("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: x([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Be(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((v = e.hoverOption) == null ? void 0 : v.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    _t(Ie((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    _t(Ie((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    _t(Ie(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    _t(Ie(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    _t(Ie(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ie(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Vr, e.states.inputValue]
                ]),
                e.filterable ? (k(), W("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: x(e.nsSelect.e("input-calculator")),
                  textContent: V(e.states.inputValue)
                }, null, 10, ["textContent"])) : K("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (k(), W("div", {
                key: 1,
                class: x([
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
                  E("span", null, V(e.currentPlaceholder), 1)
                ]) : (k(), W("span", { key: 1 }, V(e.currentPlaceholder), 1))
              ], 2)) : K("v-if", !0)
            ], 2),
            E("div", {
              ref: "suffixRef",
              class: x(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (k(), ee(u, {
                key: 0,
                class: x([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: G(() => [
                  (k(), ee(Ze(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : K("v-if", !0),
              e.showClose && e.clearIcon ? (k(), ee(u, {
                key: 1,
                class: x([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: G(() => [
                  (k(), ee(Ze(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : K("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (k(), ee(u, {
                key: 2,
                class: x([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: G(() => [
                  (k(), ee(Ze(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : K("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: G(() => [
        X(m, { ref: "menuRef" }, {
          default: G(() => [
            e.$slots.header ? (k(), W("div", {
              key: 0,
              class: x(e.nsSelect.be("dropdown", "header")),
              onClick: Ie(() => {
              }, ["stop"])
            }, [
              ae(e.$slots, "header")
            ], 10, ["onClick"])) : K("v-if", !0),
            Ue(X(p, {
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
              default: G(() => [
                e.showNewOption ? (k(), ee(c, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : K("v-if", !0),
                X(d, null, {
                  default: G(() => [
                    ae(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [tn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (k(), W("div", {
              key: 1,
              class: x(e.nsSelect.be("dropdown", "loading"))
            }, [
              ae(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (k(), W("div", {
              key: 2,
              class: x(e.nsSelect.be("dropdown", "empty"))
            }, [
              ae(e.$slots, "empty", {}, () => [
                E("span", null, V(e.emptyText), 1)
              ])
            ], 2)) : K("v-if", !0),
            e.$slots.footer ? (k(), W("div", {
              key: 3,
              class: x(e.nsSelect.be("dropdown", "footer")),
              onClick: Ie(() => {
              }, ["stop"])
            }, [
              ae(e.$slots, "footer")
            ], 10, ["onClick"])) : K("v-if", !0)
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
var zb = /* @__PURE__ */ Ce(Bb, [["render", Ub], ["__file", "select.vue"]]);
const Wb = Y({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = $e("select"), n = D(null), r = Je(), o = D([]);
    xt(gu, En({
      ...qo(e)
    }));
    const a = L(() => o.value.some((c) => c.visible === !0)), s = (c) => {
      var d, p;
      return ((d = c.type) == null ? void 0 : d.name) === "ElOption" && !!((p = c.component) != null && p.proxy);
    }, l = (c) => {
      const d = cn(c), p = [];
      return d.forEach((m) => {
        var h, v;
        s(m) ? p.push(m.component.proxy) : (h = m.children) != null && h.length ? p.push(...l(m.children)) : (v = m.component) != null && v.subTree && p.push(...l(m.component.subTree));
      }), p;
    }, u = () => {
      o.value = l(r.subTree);
    };
    return Ne(() => {
      u();
    }), hg(n, u, {
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
function jb(e, t, n, r, o, a) {
  return Ue((k(), W("ul", {
    ref: "groupRef",
    class: x(e.ns.be("group", "wrap"))
  }, [
    E("li", {
      class: x(e.ns.be("group", "title"))
    }, V(e.label), 3),
    E("li", null, [
      E("ul", {
        class: x(e.ns.b("group"))
      }, [
        ae(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [tn, e.visible]
  ]);
}
var hu = /* @__PURE__ */ Ce(Wb, [["render", jb], ["__file", "option-group.vue"]]);
const Hb = Ot(zb, {
  Option: $a,
  OptionGroup: hu
}), Kb = Vi($a);
Vi(hu);
const Gb = (e) => ["", ...va].includes(e), Yb = Ee({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: Gb
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
  ...An(["ariaLabel"])
}), qb = {
  [Ve]: (e) => pn(e) || qe(e) || ge(e),
  [nn]: (e) => pn(e) || qe(e) || ge(e),
  [en]: (e) => pn(e) || qe(e) || ge(e)
}, yu = "ElSwitch", Xb = Y({
  name: yu
}), Zb = /* @__PURE__ */ Y({
  ...Xb,
  props: Yb,
  emits: qb,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = co(), a = gr(), s = $e("switch"), { inputId: l } = ya(r, {
      formItemContext: o
    }), u = ba(L(() => r.loading)), c = D(r.modelValue !== !1), d = D(), p = D(), m = L(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", u.value),
      s.is("checked", f.value)
    ]), h = L(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !f.value)
    ]), v = L(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", f.value)
    ]), g = L(() => ({
      width: Vn(r.width)
    }));
    se(() => r.modelValue, () => {
      c.value = !0;
    });
    const S = L(() => c.value ? r.modelValue : !1), f = L(() => S.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(S.value) || (n(Ve, r.inactiveValue), n(nn, r.inactiveValue), n(en, r.inactiveValue)), se(f, (y) => {
      var I;
      d.value.checked = y, r.validateEvent && ((I = o?.validate) == null || I.call(o, "change").catch((O) => void 0));
    });
    const w = () => {
      const y = f.value ? r.inactiveValue : r.activeValue;
      n(Ve, y), n(nn, y), n(en, y), Ae(() => {
        d.value.checked = f.value;
      });
    }, A = () => {
      if (u.value)
        return;
      const { beforeChange: y } = r;
      if (!y) {
        w();
        return;
      }
      const I = y();
      [
        ys(I),
        pn(I)
      ].includes(!0) || pa(yu, "beforeChange must return type `Promise<boolean>` or `boolean`"), ys(I) ? I.then((B) => {
        B && w();
      }).catch((B) => {
      }) : I && w();
    }, T = () => {
      var y, I;
      (I = (y = d.value) == null ? void 0 : y.focus) == null || I.call(y);
    };
    return Ne(() => {
      d.value.checked = f.value;
    }), t({
      focus: T,
      checked: f
    }), (y, I) => (k(), W("div", {
      class: x(i(m)),
      onClick: Ie(A, ["prevent"])
    }, [
      E("input", {
        id: i(l),
        ref_key: "input",
        ref: d,
        class: x(i(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": i(f),
        "aria-disabled": i(u),
        "aria-label": y.ariaLabel,
        name: y.name,
        "true-value": y.activeValue,
        "false-value": y.inactiveValue,
        disabled: i(u),
        tabindex: y.tabindex,
        onChange: w,
        onKeydown: _t(A, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !y.inlinePrompt && (y.inactiveIcon || y.inactiveText) ? (k(), W("span", {
        key: 0,
        class: x(i(h))
      }, [
        y.inactiveIcon ? (k(), ee(i(ke), { key: 0 }, {
          default: G(() => [
            (k(), ee(Ze(y.inactiveIcon)))
          ]),
          _: 1
        })) : K("v-if", !0),
        !y.inactiveIcon && y.inactiveText ? (k(), W("span", {
          key: 1,
          "aria-hidden": i(f)
        }, V(y.inactiveText), 9, ["aria-hidden"])) : K("v-if", !0)
      ], 2)) : K("v-if", !0),
      E("span", {
        ref_key: "core",
        ref: p,
        class: x(i(s).e("core")),
        style: Be(i(g))
      }, [
        y.inlinePrompt ? (k(), W("div", {
          key: 0,
          class: x(i(s).e("inner"))
        }, [
          y.activeIcon || y.inactiveIcon ? (k(), ee(i(ke), {
            key: 0,
            class: x(i(s).is("icon"))
          }, {
            default: G(() => [
              (k(), ee(Ze(i(f) ? y.activeIcon : y.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : y.activeText || y.inactiveText ? (k(), W("span", {
            key: 1,
            class: x(i(s).is("text")),
            "aria-hidden": !i(f)
          }, V(i(f) ? y.activeText : y.inactiveText), 11, ["aria-hidden"])) : K("v-if", !0)
        ], 2)) : K("v-if", !0),
        E("div", {
          class: x(i(s).e("action"))
        }, [
          y.loading ? (k(), ee(i(ke), {
            key: 0,
            class: x(i(s).is("loading"))
          }, {
            default: G(() => [
              X(i(Bi))
            ]),
            _: 1
          }, 8, ["class"])) : i(f) ? ae(y.$slots, "active-action", { key: 1 }, () => [
            y.activeActionIcon ? (k(), ee(i(ke), { key: 0 }, {
              default: G(() => [
                (k(), ee(Ze(y.activeActionIcon)))
              ]),
              _: 1
            })) : K("v-if", !0)
          ]) : i(f) ? K("v-if", !0) : ae(y.$slots, "inactive-action", { key: 2 }, () => [
            y.inactiveActionIcon ? (k(), ee(i(ke), { key: 0 }, {
              default: G(() => [
                (k(), ee(Ze(y.inactiveActionIcon)))
              ]),
              _: 1
            })) : K("v-if", !0)
          ])
        ], 2)
      ], 6),
      !y.inlinePrompt && (y.activeIcon || y.activeText) ? (k(), W("span", {
        key: 1,
        class: x(i(v))
      }, [
        y.activeIcon ? (k(), ee(i(ke), { key: 0 }, {
          default: G(() => [
            (k(), ee(Ze(y.activeIcon)))
          ]),
          _: 1
        })) : K("v-if", !0),
        !y.activeIcon && y.activeText ? (k(), W("span", {
          key: 1,
          "aria-hidden": !i(f)
        }, V(y.activeText), 9, ["aria-hidden"])) : K("v-if", !0)
      ], 2)) : K("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var Jb = /* @__PURE__ */ Ce(Zb, [["__file", "switch.vue"]]);
const Qb = Ot(Jb), bu = ["success", "info", "warning", "error"], Ge = Wi({
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
}), e_ = Ee({
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
    values: bu,
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
}), t_ = {
  destroy: () => !0
}, Et = ac([]), n_ = (e) => {
  const t = Et.findIndex((o) => o.id === e), n = Et[t];
  let r;
  return t > 0 && (r = Et[t - 1]), { current: n, prev: r };
}, r_ = (e) => {
  const { prev: t } = n_(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, o_ = (e, t) => Et.findIndex((r) => r.id === e) > 0 ? 16 : t, a_ = Y({
  name: "ElMessage"
}), s_ = /* @__PURE__ */ Y({
  ...a_,
  props: e_,
  emits: t_,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = ch, { ns: o, zIndex: a } = Mi("message"), { currentZIndex: s, nextZIndex: l } = a, u = D(), c = D(!1), d = D(0);
    let p;
    const m = L(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), h = L(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && Gr[O] };
    }), v = L(() => n.icon || Gr[n.type] || ""), g = L(() => r_(n.id)), S = L(() => o_(n.id, n.offset) + g.value), f = L(() => d.value + S.value), w = L(() => ({
      top: `${S.value}px`,
      zIndex: s.value
    }));
    function A() {
      n.duration !== 0 && ({ stop: p } = Ci(() => {
        y();
      }, n.duration));
    }
    function T() {
      p?.();
    }
    function y() {
      c.value = !1;
    }
    function I({ code: O }) {
      O === Dt.esc && y();
    }
    return Ne(() => {
      A(), l(), c.value = !0;
    }), se(() => n.repeatNum, () => {
      T(), A();
    }), Ct(document, "keydown", I), kt(u, () => {
      d.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: f,
      close: y
    }), (O, B) => (k(), ee(Hn, {
      name: i(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (U) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: G(() => [
        Ue(E("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: u,
          class: x([
            i(o).b(),
            { [i(o).m(O.type)]: O.type },
            i(o).is("center", O.center),
            i(o).is("closable", O.showClose),
            i(o).is("plain", O.plain),
            O.customClass
          ]),
          style: Be(i(w)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: A
        }, [
          O.repeatNum > 1 ? (k(), ee(i(pb), {
            key: 0,
            value: O.repeatNum,
            type: i(m),
            class: x(i(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : K("v-if", !0),
          i(v) ? (k(), ee(i(ke), {
            key: 1,
            class: x([i(o).e("icon"), i(h)])
          }, {
            default: G(() => [
              (k(), ee(Ze(i(v))))
            ]),
            _: 1
          }, 8, ["class"])) : K("v-if", !0),
          ae(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (k(), W(et, { key: 1 }, [
              K(" Caution here, message could've been compromised, never use user's input as message "),
              E("p", {
                class: x(i(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), W("p", {
              key: 0,
              class: x(i(o).e("content"))
            }, V(O.message), 3))
          ]),
          O.showClose ? (k(), ee(i(ke), {
            key: 2,
            class: x(i(o).e("closeBtn")),
            onClick: Ie(y, ["stop"])
          }, {
            default: G(() => [
              X(i(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : K("v-if", !0)
        ], 46, ["id"]), [
          [tn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var l_ = /* @__PURE__ */ Ce(s_, [["__file", "message.vue"]]);
let i_ = 1;
const _u = (e) => {
  const t = !e || qe(e) || or(e) || Oe(e) ? { message: e } : e, n = {
    ...Ge,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (qe(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    St(r) || (r = document.body), n.appendTo = r;
  }
  return pn(bt.grouping) && !n.grouping && (n.grouping = bt.grouping), ge(bt.duration) && n.duration === 3e3 && (n.duration = bt.duration), ge(bt.offset) && n.offset === 16 && (n.offset = bt.offset), pn(bt.showClose) && !n.showClose && (n.showClose = bt.showClose), n;
}, u_ = (e) => {
  const t = Et.indexOf(e);
  if (t === -1)
    return;
  Et.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, c_ = ({ appendTo: e, ...t }, n) => {
  const r = `message_${i_++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), u_(d);
    },
    onDestroy: () => {
      xr(null, a);
    }
  }, l = X(l_, s, Oe(s.message) || or(s.message) ? {
    default: Oe(s.message) ? s.message : () => s.message
  } : null);
  l.appContext = n || Wn._context, xr(l, a), e.appendChild(a.firstElementChild);
  const u = l.component, d = {
    id: r,
    vnode: l,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return d;
}, Wn = (e = {}, t) => {
  if (!Re)
    return { close: () => {
    } };
  const n = _u(e);
  if (n.grouping && Et.length) {
    const o = Et.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (ge(bt.max) && Et.length >= bt.max)
    return { close: () => {
    } };
  const r = c_(n, t);
  return Et.push(r), r.handler;
};
bu.forEach((e) => {
  Wn[e] = (t = {}, n) => {
    const r = _u(t);
    return Wn({ ...r, type: e }, n);
  };
});
function f_(e) {
  for (const t of Et)
    (!e || e === t.props.type) && t.handler.close();
}
Wn.closeAll = f_;
Wn._context = null;
const d_ = Di(Wn, "$message"), wu = [
  "success",
  "info",
  "warning",
  "error"
], p_ = Ee({
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
    values: [...wu, ""],
    default: ""
  },
  zIndex: Number
}), m_ = {
  destroy: () => !0
}, v_ = Y({
  name: "ElNotification"
}), g_ = /* @__PURE__ */ Y({
  ...v_,
  props: p_,
  emits: m_,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Mi("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: l } = uh, u = D(!1);
    let c;
    const d = L(() => {
      const A = n.type;
      return A && Gr[n.type] ? r.m(A) : "";
    }), p = L(() => n.type && Gr[n.type] || n.icon), m = L(() => n.position.endsWith("right") ? "right" : "left"), h = L(() => n.position.startsWith("top") ? "top" : "bottom"), v = L(() => {
      var A;
      return {
        [h.value]: `${n.offset}px`,
        zIndex: (A = n.zIndex) != null ? A : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: c } = Ci(() => {
        u.value && f();
      }, n.duration));
    }
    function S() {
      c?.();
    }
    function f() {
      u.value = !1;
    }
    function w({ code: A }) {
      A === Dt.delete || A === Dt.backspace ? S() : A === Dt.esc ? u.value && f() : g();
    }
    return Ne(() => {
      g(), a(), u.value = !0;
    }), Ct(document, "keydown", w), t({
      visible: u,
      close: f
    }), (A, T) => (k(), ee(Hn, {
      name: i(r).b("fade"),
      onBeforeLeave: A.onClose,
      onAfterLeave: (y) => A.$emit("destroy"),
      persisted: ""
    }, {
      default: G(() => [
        Ue(E("div", {
          id: A.id,
          class: x([i(r).b(), A.customClass, i(m)]),
          style: Be(i(v)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: g,
          onClick: A.onClick
        }, [
          i(p) ? (k(), ee(i(ke), {
            key: 0,
            class: x([i(r).e("icon"), i(d)])
          }, {
            default: G(() => [
              (k(), ee(Ze(i(p))))
            ]),
            _: 1
          }, 8, ["class"])) : K("v-if", !0),
          E("div", {
            class: x(i(r).e("group"))
          }, [
            E("h2", {
              class: x(i(r).e("title")),
              textContent: V(A.title)
            }, null, 10, ["textContent"]),
            Ue(E("div", {
              class: x(i(r).e("content")),
              style: Be(A.title ? void 0 : { margin: 0 })
            }, [
              ae(A.$slots, "default", {}, () => [
                A.dangerouslyUseHTMLString ? (k(), W(et, { key: 1 }, [
                  K(" Caution here, message could've been compromised, never use user's input as message "),
                  E("p", { innerHTML: A.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), W("p", { key: 0 }, V(A.message), 1))
              ])
            ], 6), [
              [tn, A.message]
            ]),
            A.showClose ? (k(), ee(i(ke), {
              key: 0,
              class: x(i(r).e("closeBtn")),
              onClick: Ie(f, ["stop"])
            }, {
              default: G(() => [
                X(i(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : K("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [tn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var h_ = /* @__PURE__ */ Ce(g_, [["__file", "notification.vue"]]);
const Xr = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Go = 16;
let y_ = 1;
const jn = function(e = {}, t) {
  if (!Re)
    return { close: () => {
    } };
  (qe(e) || or(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Xr[n].forEach(({ vm: d }) => {
    var p;
    r += (((p = d.el) == null ? void 0 : p.offsetHeight) || 0) + Go;
  }), r += Go;
  const o = `notification_${y_++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      b_(o, n, a);
    }
  };
  let l = document.body;
  St(e.appendTo) ? l = e.appendTo : qe(e.appendTo) && (l = document.querySelector(e.appendTo)), St(l) || (l = document.body);
  const u = document.createElement("div"), c = X(h_, s, Oe(s.message) ? s.message : or(s.message) ? () => s.message : null);
  return c.appContext = $t(t) ? jn._context : t, c.props.onDestroy = () => {
    xr(null, u);
  }, xr(c, u), Xr[n].push({ vm: c }), l.appendChild(u.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
wu.forEach((e) => {
  jn[e] = (t = {}, n) => ((qe(t) || or(t)) && (t = {
    message: t
  }), jn({ ...t, type: e }, n));
});
function b_(e, t, n) {
  const r = Xr[t], o = r.findIndex(({ vm: c }) => {
    var d;
    return ((d = c.component) == null ? void 0 : d.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: a } = r[o];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, l = t.split("-")[0];
  r.splice(o, 1);
  const u = r.length;
  if (!(u < 1))
    for (let c = o; c < u; c++) {
      const { el: d, component: p } = r[c].vm, m = Number.parseInt(d.style[l], 10) - s - Go;
      p.props.offset = m;
    }
}
function __() {
  for (const e of Object.values(Xr))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
jn.closeAll = __;
jn._context = null;
const w_ = Di(jn, "$notify"), Nt = {
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
    r === "center" ? d_({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : w_({
      message: t,
      type: n,
      position: r,
      duration: o,
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
async function It(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Pl;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Pl || (Pl = {}));
const E_ = "snippets-code:developer-mode", Eu = "snippets-code:frontend-diagnostics", S_ = 240, Zn = "[REDACTED]", Fr = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Zn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Zn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Zn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Zn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Zn}`
), Su = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Fr(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Fr(
      JSON.stringify(
        e,
        (n, r) => {
          if (r instanceof Error)
            return {
              name: r.name,
              message: r.message,
              stack: r.stack,
              cause: r.cause
            };
          if (typeof r == "bigint") return r.toString();
          if (typeof r == "object" && r !== null) {
            if (t.has(r)) return "[Circular]";
            t.add(r);
          }
          return r;
        },
        2
      )
    );
  } catch {
    return Fr(String(e));
  }
}, C_ = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, T_ = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Eu) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Ma = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(E_) === "true";
  } catch {
    return !1;
  }
}, O_ = (e, t, n) => {
  if (!Ma() || typeof localStorage > "u") return;
  const r = T_();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: C_(),
    message: Fr(t),
    data: Su(n)
  });
  try {
    localStorage.setItem(
      Eu,
      JSON.stringify(r.slice(-S_))
    );
  } catch {
  }
}, I_ = () => Ma(), A_ = (e) => e === "warn" || e === "error" || !1 || !1 || Ma(), Nr = (e, t, n) => {
  O_(e, t, n), A_(e) && It("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Su(n)
  }).catch(() => {
  });
}, nr = {
  info: (e, t, ...n) => {
    Nr("info", e, t);
  },
  error: (e, t) => {
    Nr("error", e, t);
  },
  warn: (e, t) => {
    Nr("warn", e, t);
  },
  debug: (e, t) => {
    I_() && Nr("debug", e, t);
  }
};
async function L_() {
  return await It("local_ai_get_config");
}
async function Io(e) {
  return await It("local_ai_save_config", { config: e });
}
async function P_(e) {
  return await It("local_ai_scan_models", {
    config: e ?? null
  });
}
async function N_() {
  return await It("local_ai_get_runtime_status");
}
async function Cu() {
  return await It("local_ai_get_status");
}
async function k_(e) {
  return await It("local_ai_start_service", {
    config: e ?? null
  });
}
async function R_() {
  return await It("local_ai_restart_service");
}
async function $_() {
  await It("local_ai_stop_service");
}
async function M_(e) {
  return await It("local_ai_chat", { request: e });
}
const F_ = { class: "local-ai-chat-shell" }, D_ = { class: "local-ai-hero panel-card" }, V_ = { class: "hero-main" }, x_ = { class: "hero-title-row" }, B_ = { class: "hero-desc" }, U_ = { class: "hero-actions" }, z_ = { class: "chat-panel panel-card" }, W_ = { class: "chat-status-row" }, j_ = { class: "chat-status-item" }, H_ = { class: "chat-status-label" }, K_ = { class: "chat-status-value" }, G_ = { class: "chat-status-item" }, Y_ = { class: "chat-status-label" }, q_ = { class: "chat-status-value" }, X_ = { class: "chat-status-item" }, Z_ = { class: "chat-status-label" }, J_ = { class: "chat-status-value" }, Q_ = {
  key: 0,
  class: "empty-state"
}, e1 = { class: "empty-card" }, t1 = { class: "empty-title" }, n1 = { class: "empty-desc" }, r1 = { class: "message-meta" }, o1 = { class: "message-bubble" }, a1 = {
  key: 1,
  class: "message-row message-row--assistant"
}, s1 = { class: "message-meta" }, l1 = { class: "message-bubble loading-text" }, i1 = ["placeholder", "onKeydown"], u1 = { class: "input-actions" }, c1 = { class: "input-buttons" }, f1 = /* @__PURE__ */ Y({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = pr(), n = Qf(), r = D([]), o = D(""), a = D(!1), s = D(!1), l = D(null), u = D(null);
    let c = null;
    const d = L(() => l.value?.healthy ? t("localAi.serviceHealthy") : l.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), p = async () => {
      await Ae();
      const f = u.value;
      f && (f.scrollTop = f.scrollHeight);
    }, m = async () => {
      s.value = !0;
      try {
        l.value = await Cu();
      } catch (f) {
        nr.warn("[LocalAI] refresh chat status failed", f);
      } finally {
        s.value = !1;
      }
    }, h = () => r.value.map((f) => ({
      role: f.role,
      content: f.content
    })), v = async () => {
      const f = o.value.trim();
      if (!(!f || a.value)) {
        r.value.push({
          id: `${Date.now()}-user`,
          role: "user",
          content: f
        }), o.value = "", a.value = !0, await p();
        try {
          const w = await M_({ messages: h() });
          r.value.push({
            id: `${Date.now()}-assistant`,
            role: "assistant",
            content: w.content
          }), await m();
        } catch (w) {
          Nt.msg(`${t("localAi.chatFailed")}: ${w}`, "error"), r.value.push({
            id: `${Date.now()}-assistant-error`,
            role: "assistant",
            content: String(w)
          });
        } finally {
          a.value = !1, await p();
        }
      }
    }, g = () => {
      r.value = [];
    }, S = () => {
      n.push("/config/local-ai/settings");
    };
    return Ne(async () => {
      await m(), c = setInterval(() => {
        m().catch((f) => nr.warn("[LocalAI] status timer failed", f));
      }, 8e3);
    }), Zr(() => {
      c && clearInterval(c);
    }), (f, w) => (k(), W("main", F_, [
      E("header", D_, [
        E("div", V_, [
          E("div", x_, [
            E(
              "h2",
              null,
              V(i(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            E(
              "span",
              {
                class: x(["status-pill", i(l)?.healthy ? "ready" : ""])
              },
              V(i(d)),
              3
              /* TEXT, CLASS */
            )
          ]),
          E(
            "p",
            B_,
            V(i(t)("localAi.chatEmpty")),
            1
            /* TEXT */
          )
        ]),
        E("div", U_, [
          X(i(mt), {
            size: "small",
            plain: "",
            onClick: S
          }, {
            default: G(() => [
              Xe(
                V(i(t)("localAi.settings")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          X(i(mt), {
            size: "small",
            plain: "",
            loading: i(s),
            onClick: m
          }, {
            default: G(() => [
              Xe(
                V(i(t)("plugins.refresh")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ])
      ]),
      E("section", z_, [
        E("div", W_, [
          E("div", j_, [
            E(
              "span",
              H_,
              V(i(t)("localAi.serviceControl")),
              1
              /* TEXT */
            ),
            E(
              "span",
              K_,
              V(i(d)),
              1
              /* TEXT */
            )
          ]),
          E("div", G_, [
            E(
              "span",
              Y_,
              V(i(t)("localAi.modelRuntime")),
              1
              /* TEXT */
            ),
            E(
              "span",
              q_,
              V(i(l)?.baseUrl ?? "127.0.0.1"),
              1
              /* TEXT */
            )
          ]),
          E("div", X_, [
            E(
              "span",
              Z_,
              V(i(t)("localAi.generation")),
              1
              /* TEXT */
            ),
            E(
              "span",
              J_,
              V(i(t)("localAi.generationDesc")),
              1
              /* TEXT */
            )
          ])
        ]),
        E(
          "div",
          {
            ref_key: "messageListRef",
            ref: u,
            class: "message-list"
          },
          [
            i(r).length ? K("v-if", !0) : (k(), W("div", Q_, [
              E("div", e1, [
                E(
                  "div",
                  t1,
                  V(i(t)("localAi.chatEmpty")),
                  1
                  /* TEXT */
                ),
                E(
                  "div",
                  n1,
                  V(i(t)("localAi.chatPlaceholder")),
                  1
                  /* TEXT */
                )
              ])
            ])),
            (k(!0), W(
              et,
              null,
              rr(i(r), (A) => (k(), W(
                "article",
                {
                  key: A.id,
                  class: x(["message-row", `message-row--${A.role}`])
                },
                [
                  E(
                    "div",
                    r1,
                    V(A.role === "user" ? i(t)("localAi.you") : i(t)("localAi.assistant")),
                    1
                    /* TEXT */
                  ),
                  E(
                    "div",
                    o1,
                    V(A.content),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ))),
              128
              /* KEYED_FRAGMENT */
            )),
            i(a) ? (k(), W("article", a1, [
              E(
                "div",
                s1,
                V(i(t)("localAi.assistant")),
                1
                /* TEXT */
              ),
              E(
                "div",
                l1,
                V(i(t)("localAi.thinking")),
                1
                /* TEXT */
              )
            ])) : K("v-if", !0)
          ],
          512
          /* NEED_PATCH */
        ),
        E(
          "form",
          {
            class: "chat-input-card",
            onSubmit: Ie(v, ["prevent"])
          },
          [
            Ue(E("textarea", {
              "onUpdate:modelValue": w[0] || (w[0] = (A) => Dr(o) ? o.value = A : null),
              class: "chat-input",
              rows: "4",
              placeholder: i(t)("localAi.chatPlaceholder"),
              onKeydown: _t(Ie(v, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, i1), [
              [Vr, i(o)]
            ]),
            E("div", u1, [
              w[1] || (w[1] = E(
                "div",
                { class: "input-hint" },
                "Ctrl + Enter",
                -1
                /* HOISTED */
              )),
              E("div", c1, [
                X(i(mt), {
                  size: "small",
                  plain: "",
                  disabled: i(a) || !i(r).length,
                  onClick: g
                }, {
                  default: G(() => [
                    Xe(
                      V(i(t)("common.clear")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                X(i(mt), {
                  type: "primary",
                  size: "small",
                  loading: i(a),
                  disabled: !i(o).trim(),
                  onClick: v
                }, {
                  default: G(() => [
                    Xe(
                      V(i(t)("localAi.send")),
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
}), d1 = /* @__PURE__ */ ra(f1, [["__scopeId", "data-v-919c5ebe"]]), p1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: d1
}, Symbol.toStringTag, { value: "Module" }));
async function Nl(e = {}) {
  return typeof e == "object" && Object.freeze(e), await It("plugin:dialog|open", { options: e });
}
const m1 = { class: "settings-panel local-ai-settings-shell" }, v1 = { class: "local-ai-hero panel-card" }, g1 = { class: "panel-title" }, h1 = { class: "hero-desc" }, y1 = { class: "header-actions" }, b1 = {
  key: 0,
  class: "settings-grid"
}, _1 = { class: "summary-panel panel-card" }, w1 = { class: "status-strip" }, E1 = { class: "summary-card" }, S1 = { class: "summary-card__title" }, C1 = { class: "summary-card__desc" }, T1 = { class: "service-controls" }, O1 = { class: "service-url" }, I1 = { class: "summary-card" }, A1 = { class: "summary-card__title" }, L1 = { class: "summary-card__desc" }, P1 = { class: "summary-meta" }, N1 = { class: "form-panel panel-card" }, k1 = { class: "settings-section" }, R1 = { class: "settings-section__header" }, $1 = { class: "field-stack" }, M1 = { class: "field-row" }, F1 = { class: "path-control" }, D1 = { class: "field-row" }, V1 = { class: "field-row" }, x1 = { class: "field-row" }, B1 = { class: "path-control" }, U1 = ["placeholder"], z1 = { class: "settings-section grid-two" }, W1 = { class: "settings-section__header" }, j1 = { class: "param-grid" }, H1 = { class: "number-field" }, K1 = { class: "number-field" }, G1 = { class: "number-field" }, Y1 = { class: "number-field" }, q1 = { class: "number-field" }, X1 = { class: "number-field" }, Z1 = { class: "settings-section grid-two" }, J1 = { class: "settings-section__header" }, Q1 = { class: "switch-grid" }, ew = { class: "settings-section grid-two" }, tw = { class: "settings-section__header" }, nw = { class: "switch-grid switch-grid--two" }, rw = { class: "number-field" }, ow = { class: "number-field" }, aw = { class: "settings-section grid-two" }, sw = { class: "settings-section__header" }, lw = { class: "param-grid param-grid--three" }, iw = { class: "number-field" }, uw = { class: "number-field" }, cw = { class: "number-field" }, fw = { class: "settings-footer" }, dw = ["title"], pw = /* @__PURE__ */ Y({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = pr(), n = D(null), r = D(null), o = D(null), a = D(null), s = D(!1), l = D(!1), u = D(!1), c = D(!1), d = D(!1);
    let p = null;
    const m = L(() => !!a.value?.selectedModelPath), h = L({ get: () => n.value?.modelPath ?? "", set: (P) => {
      n.value && (n.value.modelPath = P || void 0);
    } }), v = L({ get: () => n.value?.mmprojPath ?? "", set: (P) => {
      n.value && (n.value.mmprojPath = P || void 0);
    } }), g = L(() => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), S = L(() => m.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")), f = L(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), w = (P) => P.split(/[\\/]+/).pop() ?? P, A = async () => {
      s.value = !0;
      try {
        n.value = await L_(), await Promise.all([T(), I(), y()]);
      } catch (P) {
        nr.error("[LocalAI] refresh settings failed", P), Nt.msg(`${t("localAi.refreshFailed")}: ${P}`, "error");
      } finally {
        s.value = !1;
      }
    }, T = async () => {
      r.value = await N_();
    }, y = async () => {
      o.value = await Cu();
    }, I = async () => {
      n.value && (a.value = await P_(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, O = async () => {
      if (n.value)
        try {
          await Io(n.value);
        } catch (P) {
          nr.warn("[LocalAI] autosave failed", P);
        }
    }, B = async () => {
      if (n.value) {
        l.value = !0;
        try {
          n.value = await Io(n.value), await Promise.all([T(), I(), y()]), Nt.msg(t("localAi.configSaved"));
        } catch (P) {
          Nt.msg(`${t("localAi.configSaveFailed")}: ${P}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, U = async () => {
      const P = await Nl({ directory: !0, multiple: !1, title: t("localAi.chooseModelDir") });
      !P || Array.isArray(P) || !n.value || (n.value.modelDir = P, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await I());
    }, Q = async () => {
      const P = await Nl({ multiple: !1, title: t("localAi.chooseRuntime"), filters: [{ name: "llama-server", extensions: ["exe"] }] });
      !P || Array.isArray(P) || !n.value || (n.value.runtimePath = P, await O(), await T());
    }, oe = async () => {
      if (n.value) {
        u.value = !0;
        try {
          await Io(n.value), o.value = await k_(n.value), Nt.msg(t("localAi.serviceStarted"));
        } catch (P) {
          Nt.msg(`${t("localAi.serviceStartFailed")}: ${P}`, "error");
        } finally {
          u.value = !1;
        }
      }
    }, J = async () => {
      c.value = !0;
      try {
        await B(), o.value = await R_(), Nt.msg(t("localAi.serviceRestarted"));
      } catch (P) {
        Nt.msg(`${t("localAi.serviceRestartFailed")}: ${P}`, "error");
      } finally {
        c.value = !1;
      }
    }, le = async () => {
      d.value = !0;
      try {
        await $_(), await y(), Nt.msg(t("localAi.serviceStoppedMsg"));
      } catch (P) {
        Nt.msg(`${t("localAi.serviceStopFailed")}: ${P}`, "error");
      } finally {
        d.value = !1;
      }
    }, Se = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return Ne(async () => {
      await A(), p = setInterval(() => {
        y().catch((P) => nr.warn("[LocalAI] status refresh failed", P));
      }, 5e3);
    }), Zr(() => {
      p && clearInterval(p);
    }), (P, R) => {
      const F = Kb, te = Hb, q = Lb, ce = Qb;
      return k(), W("div", m1, [
        E("header", v1, [
          E("div", null, [
            E(
              "h3",
              g1,
              V(i(t)("localAi.title")),
              1
              /* TEXT */
            ),
            E(
              "p",
              h1,
              V(i(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          E("div", y1, [
            X(i(mt), {
              size: "small",
              plain: "",
              onClick: Se
            }, {
              default: G(() => [
                Xe(
                  V(i(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            X(i(mt), {
              size: "small",
              loading: i(s),
              onClick: A
            }, {
              default: G(() => [
                Xe(
                  V(i(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        i(n) ? (k(), W("main", b1, [
          E("aside", _1, [
            E("div", w1, [
              E(
                "div",
                {
                  class: x(["status-item", { ready: i(r)?.available }])
                },
                [
                  R[20] || (R[20] = E(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  E(
                    "span",
                    null,
                    V(i(g)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              E(
                "div",
                {
                  class: x(["status-item", { ready: i(m) }])
                },
                [
                  R[21] || (R[21] = E(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  E(
                    "span",
                    null,
                    V(i(S)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              E(
                "div",
                {
                  class: x(["status-item", { ready: i(o)?.healthy }])
                },
                [
                  R[22] || (R[22] = E(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  E(
                    "span",
                    null,
                    V(i(f)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            E("section", E1, [
              E(
                "div",
                S1,
                V(i(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              E(
                "div",
                C1,
                V(i(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              E("div", T1, [
                X(i(mt), {
                  type: "primary",
                  size: "small",
                  loading: i(u),
                  disabled: i(o)?.running,
                  onClick: oe
                }, {
                  default: G(() => [
                    Xe(
                      V(i(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                X(i(mt), {
                  size: "small",
                  loading: i(c),
                  disabled: !i(o)?.running,
                  onClick: J
                }, {
                  default: G(() => [
                    Xe(
                      V(i(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                X(i(mt), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: i(d),
                  disabled: !i(o)?.running,
                  onClick: le
                }, {
                  default: G(() => [
                    Xe(
                      V(i(t)("localAi.stopService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ]),
              E(
                "div",
                O1,
                V(i(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            E("section", I1, [
              E(
                "div",
                A1,
                V(i(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              E(
                "div",
                L1,
                V(i(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              E("div", P1, [
                E("div", null, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  E(
                    "b",
                    null,
                    V(i(r)?.available ? i(t)("common.yes") : i(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                E("div", null, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  E(
                    "b",
                    null,
                    V(i(m) ? i(t)("common.yes") : i(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                E("div", null, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  E(
                    "b",
                    null,
                    V(i(o)?.healthy ? i(t)("common.yes") : i(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          E("section", N1, [
            E("div", k1, [
              E("div", R1, [
                E("div", null, [
                  E(
                    "h4",
                    null,
                    V(i(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  E(
                    "p",
                    null,
                    V(i(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              E("div", $1, [
                E("label", M1, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  E("div", F1, [
                    Ue(E(
                      "input",
                      {
                        "onUpdate:modelValue": R[0] || (R[0] = (H) => i(n).modelDir = H),
                        class: "text-input",
                        onChange: I
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [Vr, i(n).modelDir]
                    ]),
                    X(i(mt), {
                      size: "small",
                      plain: "",
                      onClick: U
                    }, {
                      default: G(() => [
                        Xe(
                          V(i(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                E("label", D1, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  X(te, {
                    modelValue: i(h),
                    "onUpdate:modelValue": R[1] || (R[1] = (H) => Dr(h) ? h.value = H : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: G(() => [
                      (k(!0), W(
                        et,
                        null,
                        rr(i(a)?.mainModels ?? [], (H) => (k(), ee(F, {
                          key: H,
                          label: w(H),
                          value: H
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                E("label", V1, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  X(te, {
                    modelValue: i(v),
                    "onUpdate:modelValue": R[2] || (R[2] = (H) => Dr(v) ? v.value = H : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: G(() => [
                      (k(!0), W(
                        et,
                        null,
                        rr(i(a)?.mmprojModels ?? [], (H) => (k(), ee(F, {
                          key: H,
                          label: w(H),
                          value: H
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                E("label", x1, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  E("div", B1, [
                    Ue(E("input", {
                      "onUpdate:modelValue": R[3] || (R[3] = (H) => i(n).runtimePath = H),
                      class: "text-input",
                      placeholder: i(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, U1), [
                      [Vr, i(n).runtimePath]
                    ]),
                    X(i(mt), {
                      size: "small",
                      plain: "",
                      onClick: Q
                    }, {
                      default: G(() => [
                        Xe(
                          V(i(t)("common.browse")),
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
            E("div", z1, [
              E("div", W1, [
                E("div", null, [
                  E(
                    "h4",
                    null,
                    V(i(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  E(
                    "p",
                    null,
                    V(i(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              E("div", j1, [
                E("label", H1, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).ctxSize,
                    "onUpdate:modelValue": R[4] || (R[4] = (H) => i(n).ctxSize = H),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                E("label", K1, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).gpuLayers,
                    "onUpdate:modelValue": R[5] || (R[5] = (H) => i(n).gpuLayers = H),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                E("label", G1, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).threads,
                    "onUpdate:modelValue": R[6] || (R[6] = (H) => i(n).threads = H),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                E("label", Y1, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).batchSize,
                    "onUpdate:modelValue": R[7] || (R[7] = (H) => i(n).batchSize = H),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                E("label", q1, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).ubatchSize,
                    "onUpdate:modelValue": R[8] || (R[8] = (H) => i(n).ubatchSize = H),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                E("label", X1, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).mainGpu,
                    "onUpdate:modelValue": R[9] || (R[9] = (H) => i(n).mainGpu = H),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            E("div", Z1, [
              E("div", J1, [
                E("div", null, [
                  E(
                    "h4",
                    null,
                    V(i(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  E(
                    "p",
                    null,
                    V(i(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              E("div", Q1, [
                E("label", null, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  X(ce, {
                    modelValue: i(n).flashAttn,
                    "onUpdate:modelValue": R[10] || (R[10] = (H) => i(n).flashAttn = H)
                  }, null, 8, ["modelValue"])
                ]),
                E("label", null, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  X(ce, {
                    modelValue: i(n).kvOffload,
                    "onUpdate:modelValue": R[11] || (R[11] = (H) => i(n).kvOffload = H)
                  }, null, 8, ["modelValue"])
                ]),
                E("label", null, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  X(ce, {
                    modelValue: i(n).mmap,
                    "onUpdate:modelValue": R[12] || (R[12] = (H) => i(n).mmap = H)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            E("div", ew, [
              E("div", tw, [
                E("div", null, [
                  E(
                    "h4",
                    null,
                    V(i(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  E(
                    "p",
                    null,
                    V(i(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              E("div", nw, [
                E("label", null, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  X(ce, {
                    modelValue: i(n).autoStartOnRequest,
                    "onUpdate:modelValue": R[13] || (R[13] = (H) => i(n).autoStartOnRequest = H)
                  }, null, 8, ["modelValue"])
                ]),
                E("label", null, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  X(ce, {
                    modelValue: i(n).keepAlive,
                    "onUpdate:modelValue": R[14] || (R[14] = (H) => i(n).keepAlive = H)
                  }, null, 8, ["modelValue"])
                ]),
                E("label", rw, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": R[15] || (R[15] = (H) => i(n).idleTimeoutMinutes = H),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                E("label", ow, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).requestTimeoutSecs,
                    "onUpdate:modelValue": R[16] || (R[16] = (H) => i(n).requestTimeoutSecs = H),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            E("div", aw, [
              E("div", sw, [
                E("div", null, [
                  E(
                    "h4",
                    null,
                    V(i(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  E(
                    "p",
                    null,
                    V(i(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              E("div", lw, [
                E("label", iw, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).temperature,
                    "onUpdate:modelValue": R[17] || (R[17] = (H) => i(n).temperature = H),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                E("label", uw, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).maxTokens,
                    "onUpdate:modelValue": R[18] || (R[18] = (H) => i(n).maxTokens = H),
                    min: 64,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                E("label", cw, [
                  E(
                    "span",
                    null,
                    V(i(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  X(q, {
                    modelValue: i(n).port,
                    "onUpdate:modelValue": R[19] || (R[19] = (H) => i(n).port = H),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            E("div", fw, [
              X(i(mt), {
                type: "primary",
                loading: i(l),
                onClick: B
              }, {
                default: G(() => [
                  Xe(
                    V(i(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              i(o)?.commandLine ? (k(), W("span", {
                key: 0,
                class: "command-line",
                title: i(o).commandLine
              }, V(i(o).commandLine), 9, dw)) : K("v-if", !0)
            ])
          ])
        ])) : K("v-if", !0)
      ]);
    };
  }
}), mw = /* @__PURE__ */ ra(pw, [["__scopeId", "data-v-be517e6a"]]), vw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mw
}, Symbol.toStringTag, { value: "Module" }));
export {
  hw as activate,
  hw as default
};
