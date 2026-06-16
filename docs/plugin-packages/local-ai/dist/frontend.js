import * as ho from "vue";
import { inject as he, createVNode as q, defineAsyncComponent as ju, ref as D, shallowRef as dn, computed as L, watch as le, onMounted as ke, onUnmounted as Zr, defineComponent as Y, h as kl, Text as Rl, Fragment as et, createElementBlock as W, openBlock as k, normalizeClass as V, createCommentVNode as K, renderSlot as ae, createElementVNode as A, getCurrentInstance as Je, unref as u, watchEffect as $l, readonly as Yo, getCurrentScope as Hu, onScopeDispose as Ku, nextTick as Le, isRef as Dr, warn as Gu, provide as xt, mergeProps as $n, toRef as Gt, useAttrs as Yu, useSlots as qu, normalizeStyle as Be, createBlock as Q, withCtx as G, resolveDynamicComponent as Ze, withModifiers as Ae, toDisplayString as U, onBeforeUnmount as Ut, Transition as Hn, withDirectives as ze, vShow as tn, reactive as En, onActivated as Xu, onUpdated as Ml, cloneVNode as Zu, Comment as Ju, Teleport as Qu, onBeforeMount as ec, onDeactivated as tc, createTextVNode as Xe, withKeys as _t, createSlots as nc, toRaw as rc, toRefs as qo, resolveComponent as yn, resolveDirective as oc, toHandlerKey as ac, renderList as rr, vModelText as Vr, shallowReactive as sc, isVNode as or, render as xr } from "vue";
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
var cc = Symbol("icon-context");
function fc(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = ic(), l = he(cc, lc);
      return function() {
        var i = a.size, c = a.strokeWidth, d = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, h = a.fill, v = a.spin, g = uc(s, {
          size: i,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: p,
          theme: m,
          fill: h
        }, l), E = [l.prefix + "-icon"];
        return E.push(l.prefix + "-icon-" + e), v && E.push(l.prefix + "-icon-spin"), q("span", {
          class: E.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const dc = fc("setting-two", !1, function(e) {
  return q("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [q("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), q("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ow = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => X_)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: dc,
    component: ju(() => Promise.resolve().then(() => nw))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function pc(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ua = typeof window < "u", Tn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), mc = (e, t, n) => vc({ l: e, k: t, s: n }), vc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), De = (e) => typeof e == "number" && isFinite(e), gc = (e) => Xo(e) === "[object Date]", Br = (e) => Xo(e) === "[object RegExp]", Jr = (e) => de(e) && Object.keys(e).length === 0, Ue = Object.assign, hc = Object.create, ye = (e = null) => hc(e);
let Wa;
const kr = () => Wa || (Wa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ye());
function ja(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ha(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function bc(e) {
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
const Ne = Array.isArray, Oe = (e) => typeof e == "function", X = (e) => typeof e == "string", Pe = (e) => typeof e == "boolean", pe = (e) => e !== null && typeof e == "object", _c = (e) => pe(e) && Oe(e.then) && Oe(e.catch), Fl = Object.prototype.toString, Xo = (e) => Fl.call(e), de = (e) => Xo(e) === "[object Object]", wc = (e) => e == null ? "" : Ne(e) || de(e) && e.toString === Fl ? JSON.stringify(e, null, 2) : String(e);
function Zo(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Sr = (e) => !pe(e) || Ne(e);
function Rr(e, t) {
  if (Sr(e) || Sr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (pe(r[a]) && !pe(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : ye()), Sr(o[a]) || Sr(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ec(e, t, n) {
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
}, Sc = 17;
function Qr(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, l = new SyntaxError(String(s));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function Cc(e) {
  throw e;
}
const Lt = " ", Tc = "\r", Ye = `
`, Oc = "\u2028", Ic = "\u2029";
function Ac(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (T) => t[T] === Tc && t[T + 1] === Ye, l = (T) => t[T] === Ye, i = (T) => t[T] === Ic, c = (T) => t[T] === Oc, d = (T) => s(T) || l(T) || i(T) || c(T), p = () => n, m = () => r, h = () => o, v = () => a, g = (T) => s(T) || i(T) || c(T) ? Ye : t[T], E = () => g(n), f = () => g(n + a);
  function w() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function I() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function C() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function b(T = 0) {
    a = T;
  }
  function O() {
    const T = n + a;
    for (; T !== n; )
      w();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: h,
    peekOffset: v,
    charAt: g,
    currentChar: E,
    currentPeek: f,
    next: w,
    peek: I,
    reset: C,
    resetPeek: b,
    skipToPeek: O
  };
}
const jt = void 0, Lc = ".", Ka = "'", Pc = "tokenizer";
function Nc(e, t = {}) {
  const n = t.location !== !1, r = Ac(e), o = () => r.index(), a = () => Ec(r.line(), r.column(), r.index()), s = a(), l = o(), i = {
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
  }, c = () => i, { onError: d } = t;
  function p(_, S, $, ...j) {
    const fe = c();
    if (S.column += $, S.offset += $, d) {
      const ne = n ? Ao(fe.startLoc, S) : null, y = Qr(_, ne, {
        domain: Pc,
        args: j
      });
      d(y);
    }
  }
  function m(_, S, $) {
    _.endLoc = a(), _.currentType = S;
    const j = { type: S };
    return n && (j.loc = Ao(_.startLoc, _.endLoc)), $ != null && (j.value = $), j;
  }
  const h = (_) => m(
    _,
    13
    /* TokenTypes.EOF */
  );
  function v(_, S) {
    return _.currentChar() === S ? (_.next(), S) : (p(ve.EXPECTED_TOKEN, a(), 0, S), "");
  }
  function g(_) {
    let S = "";
    for (; _.currentPeek() === Lt || _.currentPeek() === Ye; )
      S += _.currentPeek(), _.peek();
    return S;
  }
  function E(_) {
    const S = g(_);
    return _.skipToPeek(), S;
  }
  function f(_) {
    if (_ === jt)
      return !1;
    const S = _.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S === 95;
  }
  function w(_) {
    if (_ === jt)
      return !1;
    const S = _.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function I(_, S) {
    const { currentType: $ } = S;
    if ($ !== 2)
      return !1;
    g(_);
    const j = f(_.currentPeek());
    return _.resetPeek(), j;
  }
  function C(_, S) {
    const { currentType: $ } = S;
    if ($ !== 2)
      return !1;
    g(_);
    const j = _.currentPeek() === "-" ? _.peek() : _.currentPeek(), fe = w(j);
    return _.resetPeek(), fe;
  }
  function b(_, S) {
    const { currentType: $ } = S;
    if ($ !== 2)
      return !1;
    g(_);
    const j = _.currentPeek() === Ka;
    return _.resetPeek(), j;
  }
  function O(_, S) {
    const { currentType: $ } = S;
    if ($ !== 7)
      return !1;
    g(_);
    const j = _.currentPeek() === ".";
    return _.resetPeek(), j;
  }
  function T(_, S) {
    const { currentType: $ } = S;
    if ($ !== 8)
      return !1;
    g(_);
    const j = f(_.currentPeek());
    return _.resetPeek(), j;
  }
  function x(_, S) {
    const { currentType: $ } = S;
    if (!($ === 7 || $ === 11))
      return !1;
    g(_);
    const j = _.currentPeek() === ":";
    return _.resetPeek(), j;
  }
  function B(_, S) {
    const { currentType: $ } = S;
    if ($ !== 9)
      return !1;
    const j = () => {
      const ne = _.currentPeek();
      return ne === "{" ? f(_.peek()) : ne === "@" || ne === "|" || ne === ":" || ne === "." || ne === Lt || !ne ? !1 : ne === Ye ? (_.peek(), j()) : oe(_, !1);
    }, fe = j();
    return _.resetPeek(), fe;
  }
  function J(_) {
    g(_);
    const S = _.currentPeek() === "|";
    return _.resetPeek(), S;
  }
  function oe(_, S = !0) {
    const $ = (fe = !1, ne = "") => {
      const y = _.currentPeek();
      return y === "{" || y === "@" || !y ? fe : y === "|" ? !(ne === Lt || ne === Ye) : y === Lt ? (_.peek(), $(!0, Lt)) : y === Ye ? (_.peek(), $(!0, Ye)) : !0;
    }, j = $();
    return S && _.resetPeek(), j;
  }
  function Z(_, S) {
    const $ = _.currentChar();
    return $ === jt ? jt : S($) ? (_.next(), $) : null;
  }
  function ie(_) {
    const S = _.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36;
  }
  function Ce(_) {
    return Z(_, ie);
  }
  function M(_) {
    const S = _.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36 || // $
    S === 45;
  }
  function F(_) {
    return Z(_, M);
  }
  function P(_) {
    const S = _.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function te(_) {
    return Z(_, P);
  }
  function ee(_) {
    const S = _.charCodeAt(0);
    return S >= 48 && S <= 57 || // 0-9
    S >= 65 && S <= 70 || // A-F
    S >= 97 && S <= 102;
  }
  function se(_) {
    return Z(_, ee);
  }
  function we(_) {
    let S = "", $ = "";
    for (; S = te(_); )
      $ += S;
    return $;
  }
  function H(_) {
    let S = "";
    for (; ; ) {
      const $ = _.currentChar();
      if ($ === "{" || $ === "}" || $ === "@" || $ === "|" || !$)
        break;
      if ($ === Lt || $ === Ye)
        if (oe(_))
          S += $, _.next();
        else {
          if (J(_))
            break;
          S += $, _.next();
        }
      else
        S += $, _.next();
    }
    return S;
  }
  function _e(_) {
    E(_);
    let S = "", $ = "";
    for (; S = F(_); )
      $ += S;
    const j = _.currentChar();
    if (j && j !== "}" && j !== jt && j !== Lt && j !== Ye && j !== "　") {
      const fe = ft(_);
      return p(ve.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, $ + fe), $ + fe;
    }
    return _.currentChar() === jt && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), $;
  }
  function We(_) {
    E(_);
    let S = "";
    return _.currentChar() === "-" ? (_.next(), S += `-${we(_)}`) : S += we(_), _.currentChar() === jt && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), S;
  }
  function xe(_) {
    return _ !== Ka && _ !== Ye;
  }
  function je(_) {
    E(_), v(_, "'");
    let S = "", $ = "";
    for (; S = Z(_, xe); )
      S === "\\" ? $ += He(_) : $ += S;
    const j = _.currentChar();
    return j === Ye || j === jt ? (p(ve.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), j === Ye && (_.next(), v(_, "'")), $) : (v(_, "'"), $);
  }
  function He(_) {
    const S = _.currentChar();
    switch (S) {
      case "\\":
      case "'":
        return _.next(), `\\${S}`;
      case "u":
        return be(_, S, 4);
      case "U":
        return be(_, S, 6);
      default:
        return p(ve.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, S), "";
    }
  }
  function be(_, S, $) {
    v(_, S);
    let j = "";
    for (let fe = 0; fe < $; fe++) {
      const ne = se(_);
      if (!ne) {
        p(ve.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${S}${j}${_.currentChar()}`);
        break;
      }
      j += ne;
    }
    return `\\${S}${j}`;
  }
  function rt(_) {
    return _ !== "{" && _ !== "}" && _ !== Lt && _ !== Ye;
  }
  function ft(_) {
    E(_);
    let S = "", $ = "";
    for (; S = Z(_, rt); )
      $ += S;
    return $;
  }
  function ot(_) {
    let S = "", $ = "";
    for (; S = Ce(_); )
      $ += S;
    return $;
  }
  function bt(_) {
    const S = ($) => {
      const j = _.currentChar();
      return j === "{" || j === "@" || j === "|" || j === "(" || j === ")" || !j || j === Lt ? $ : ($ += j, _.next(), S($));
    };
    return S("");
  }
  function at(_) {
    E(_);
    const S = v(
      _,
      "|"
      /* TokenChars.Pipe */
    );
    return E(_), S;
  }
  function st(_, S) {
    let $ = null;
    switch (_.currentChar()) {
      case "{":
        return S.braceNest >= 1 && p(ve.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), _.next(), $ = m(
          S,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(_), S.braceNest++, $;
      case "}":
        return S.braceNest > 0 && S.currentType === 2 && p(ve.EMPTY_PLACEHOLDER, a(), 0), _.next(), $ = m(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), S.braceNest--, S.braceNest > 0 && E(_), S.inLinked && S.braceNest === 0 && (S.inLinked = !1), $;
      case "@":
        return S.braceNest > 0 && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), $ = lt(_, S) || h(S), S.braceNest = 0, $;
      default: {
        let fe = !0, ne = !0, y = !0;
        if (J(_))
          return S.braceNest > 0 && p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), $ = m(S, 1, at(_)), S.braceNest = 0, S.inLinked = !1, $;
        if (S.braceNest > 0 && (S.currentType === 4 || S.currentType === 5 || S.currentType === 6))
          return p(ve.UNTERMINATED_CLOSING_BRACE, a(), 0), S.braceNest = 0, dt(_, S);
        if (fe = I(_, S))
          return $ = m(S, 4, _e(_)), E(_), $;
        if (ne = C(_, S))
          return $ = m(S, 5, We(_)), E(_), $;
        if (y = b(_, S))
          return $ = m(S, 6, je(_)), E(_), $;
        if (!fe && !ne && !y)
          return $ = m(S, 12, ft(_)), p(ve.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, $.value), E(_), $;
        break;
      }
    }
    return $;
  }
  function lt(_, S) {
    const { currentType: $ } = S;
    let j = null;
    const fe = _.currentChar();
    switch (($ === 7 || $ === 8 || $ === 11 || $ === 9) && (fe === Ye || fe === Lt) && p(ve.INVALID_LINKED_FORMAT, a(), 0), fe) {
      case "@":
        return _.next(), j = m(
          S,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), S.inLinked = !0, j;
      case ".":
        return E(_), _.next(), m(
          S,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(_), _.next(), m(
          S,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return J(_) ? (j = m(S, 1, at(_)), S.braceNest = 0, S.inLinked = !1, j) : O(_, S) || x(_, S) ? (E(_), lt(_, S)) : T(_, S) ? (E(_), m(S, 11, ot(_))) : B(_, S) ? (E(_), fe === "{" ? st(_, S) || j : m(S, 10, bt(_))) : ($ === 7 && p(ve.INVALID_LINKED_FORMAT, a(), 0), S.braceNest = 0, S.inLinked = !1, dt(_, S));
    }
  }
  function dt(_, S) {
    let $ = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (S.braceNest > 0)
      return st(_, S) || h(S);
    if (S.inLinked)
      return lt(_, S) || h(S);
    switch (_.currentChar()) {
      case "{":
        return st(_, S) || h(S);
      case "}":
        return p(ve.UNBALANCED_CLOSING_BRACE, a(), 0), _.next(), m(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return lt(_, S) || h(S);
      default: {
        if (J(_))
          return $ = m(S, 1, at(_)), S.braceNest = 0, S.inLinked = !1, $;
        if (oe(_))
          return m(S, 0, H(_));
        break;
      }
    }
    return $;
  }
  function At() {
    const { currentType: _, offset: S, startLoc: $, endLoc: j } = i;
    return i.lastType = _, i.lastOffset = S, i.lastStartLoc = $, i.lastEndLoc = j, i.offset = o(), i.startLoc = a(), r.currentChar() === jt ? m(
      i,
      13
      /* TokenTypes.EOF */
    ) : dt(r, i);
  }
  return {
    nextToken: At,
    currentOffset: o,
    currentPosition: a,
    context: c
  };
}
const kc = "parser", Rc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function $c(e, t, n) {
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
function Mc(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, w, I, C, ...b) {
    const O = f.currentPosition();
    if (O.offset += C, O.column += C, n) {
      const T = t ? Ao(I, O) : null, x = Qr(w, T, {
        domain: kc,
        args: b
      });
      n(x);
    }
  }
  function o(f, w, I) {
    const C = { type: f };
    return t && (C.start = w, C.end = w, C.loc = { start: I, end: I }), C;
  }
  function a(f, w, I, C) {
    t && (f.end = w, f.loc && (f.loc.end = I));
  }
  function s(f, w) {
    const I = f.context(), C = o(3, I.offset, I.startLoc);
    return C.value = w, a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function l(f, w) {
    const I = f.context(), { lastOffset: C, lastStartLoc: b } = I, O = o(5, C, b);
    return O.index = parseInt(w, 10), f.nextToken(), a(O, f.currentOffset(), f.currentPosition()), O;
  }
  function i(f, w) {
    const I = f.context(), { lastOffset: C, lastStartLoc: b } = I, O = o(4, C, b);
    return O.key = w, f.nextToken(), a(O, f.currentOffset(), f.currentPosition()), O;
  }
  function c(f, w) {
    const I = f.context(), { lastOffset: C, lastStartLoc: b } = I, O = o(9, C, b);
    return O.value = w.replace(Rc, $c), f.nextToken(), a(O, f.currentOffset(), f.currentPosition()), O;
  }
  function d(f) {
    const w = f.nextToken(), I = f.context(), { lastOffset: C, lastStartLoc: b } = I, O = o(8, C, b);
    return w.type !== 11 ? (r(f, ve.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), O.value = "", a(O, C, b), {
      nextConsumeToken: w,
      node: O
    }) : (w.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Pt(w)), O.value = w.value || "", a(O, f.currentOffset(), f.currentPosition()), {
      node: O
    });
  }
  function p(f, w) {
    const I = f.context(), C = o(7, I.offset, I.startLoc);
    return C.value = w, a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function m(f) {
    const w = f.context(), I = o(6, w.offset, w.startLoc);
    let C = f.nextToken();
    if (C.type === 8) {
      const b = d(f);
      I.modifier = b.node, C = b.nextConsumeToken || f.nextToken();
    }
    switch (C.type !== 9 && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(C)), C = f.nextToken(), C.type === 2 && (C = f.nextToken()), C.type) {
      case 10:
        C.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(C)), I.key = p(f, C.value || "");
        break;
      case 4:
        C.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(C)), I.key = i(f, C.value || "");
        break;
      case 5:
        C.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(C)), I.key = l(f, C.value || "");
        break;
      case 6:
        C.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(C)), I.key = c(f, C.value || "");
        break;
      default: {
        r(f, ve.UNEXPECTED_EMPTY_LINKED_KEY, w.lastStartLoc, 0);
        const b = f.context(), O = o(7, b.offset, b.startLoc);
        return O.value = "", a(O, b.offset, b.startLoc), I.key = O, a(I, b.offset, b.startLoc), {
          nextConsumeToken: C,
          node: I
        };
      }
    }
    return a(I, f.currentOffset(), f.currentPosition()), {
      node: I
    };
  }
  function h(f) {
    const w = f.context(), I = w.currentType === 1 ? f.currentOffset() : w.offset, C = w.currentType === 1 ? w.endLoc : w.startLoc, b = o(2, I, C);
    b.items = [];
    let O = null;
    do {
      const B = O || f.nextToken();
      switch (O = null, B.type) {
        case 0:
          B.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(B)), b.items.push(s(f, B.value || ""));
          break;
        case 5:
          B.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(B)), b.items.push(l(f, B.value || ""));
          break;
        case 4:
          B.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(B)), b.items.push(i(f, B.value || ""));
          break;
        case 6:
          B.value == null && r(f, ve.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Pt(B)), b.items.push(c(f, B.value || ""));
          break;
        case 7: {
          const J = m(f);
          b.items.push(J.node), O = J.nextConsumeToken || null;
          break;
        }
      }
    } while (w.currentType !== 13 && w.currentType !== 1);
    const T = w.currentType === 1 ? w.lastOffset : f.currentOffset(), x = w.currentType === 1 ? w.lastEndLoc : f.currentPosition();
    return a(b, T, x), b;
  }
  function v(f, w, I, C) {
    const b = f.context();
    let O = C.items.length === 0;
    const T = o(1, w, I);
    T.cases = [], T.cases.push(C);
    do {
      const x = h(f);
      O || (O = x.items.length === 0), T.cases.push(x);
    } while (b.currentType !== 13);
    return O && r(f, ve.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), a(T, f.currentOffset(), f.currentPosition()), T;
  }
  function g(f) {
    const w = f.context(), { offset: I, startLoc: C } = w, b = h(f);
    return w.currentType === 13 ? b : v(f, I, C, b);
  }
  function E(f) {
    const w = Nc(f, Ue({}, e)), I = w.context(), C = o(0, I.offset, I.startLoc);
    return t && C.loc && (C.loc.source = f), C.body = g(w), e.onCacheKey && (C.cacheKey = e.onCacheKey(f)), I.currentType !== 13 && r(w, ve.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, f[I.offset] || ""), a(C, w.currentOffset(), w.currentPosition()), C;
  }
  return { parse: E };
}
function Pt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Fc(e, t = {}) {
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
function Dc(e, t = {}) {
  const n = Fc(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Jo(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Vc(e) {
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
function xc(e, t) {
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
  function i(g, E) {
    s.code += g;
  }
  function c(g, E = !0) {
    const f = E ? r : "";
    i(o ? f + "  ".repeat(g) : f);
  }
  function d(g = !0) {
    const E = ++s.indentLevel;
    g && c(E);
  }
  function p(g = !0) {
    const E = --s.indentLevel;
    g && c(E);
  }
  function m() {
    c(s.indentLevel);
  }
  return {
    context: l,
    push: i,
    indent: d,
    deindent: p,
    newline: m,
    helper: (g) => `_${g}`,
    needIndent: () => s.needIndent
  };
}
function Bc(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Mn(e, t.key), t.modifier ? (e.push(", "), Mn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function zc(e, t) {
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
function Wc(e, t) {
  t.body ? Mn(e, t.body) : e.push("null");
}
function Mn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Wc(e, t);
      break;
    case 1:
      Uc(e, t);
      break;
    case 2:
      zc(e, t);
      break;
    case 6:
      Bc(e, t);
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
const jc = (e, t = {}) => {
  const n = X(t.mode) ? t.mode : "normal", r = X(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], l = xc(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), s.length > 0 && (l.push(`const { ${Zo(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), Mn(l, e), l.deindent(a), l.push("}"), delete e.helpers;
  const { code: i, map: c } = l.context();
  return {
    ast: e,
    code: i,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Hc(e, t = {}) {
  const n = Ue({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, l = Mc(n).parse(e);
  return r ? (a && Vc(l), o && kn(l), { ast: l, code: "" }) : (Dc(l, n), jc(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Kc() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (kr().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ft(e) {
  return pe(e) && Qo(e) === 0 && (wt(e, "b") || wt(e, "body"));
}
const Dl = ["b", "body"];
function Gc(e) {
  return vn(e, Dl);
}
const Vl = ["c", "cases"];
function Yc(e) {
  return vn(e, Vl, []);
}
const xl = ["s", "static"];
function qc(e) {
  return vn(e, xl);
}
const Bl = ["i", "items"];
function Xc(e) {
  return vn(e, Bl, []);
}
const zl = ["t", "type"];
function Qo(e) {
  return vn(e, zl);
}
const Ul = ["v", "value"];
function Cr(e, t) {
  const n = vn(e, Ul);
  if (n != null)
    return n;
  throw ar(t);
}
const Wl = ["m", "modifier"];
function Zc(e) {
  return vn(e, Wl);
}
const jl = ["k", "key"];
function Jc(e) {
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
  ...Ul,
  ...zl
];
function ar(e) {
  return new Error(`unhandled node type: ${e}`);
}
function bo(e) {
  return (n) => Qc(n, e);
}
function Qc(e, t) {
  const n = Gc(t);
  if (n == null)
    throw ar(
      0
      /* NodeTypes.Resource */
    );
  if (Qo(n) === 1) {
    const a = Yc(n);
    return e.plural(a.reduce((s, l) => [
      ...s,
      qa(e, l)
    ], []));
  } else
    return qa(e, n);
}
function qa(e, t) {
  const n = qc(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Xc(t).reduce((o, a) => [...o, Lo(e, a)], []);
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
      const r = t, o = Zc(r), a = Jc(r);
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
const ef = (e) => e;
let Tr = ye();
function tf(e, t = {}) {
  let n = !1;
  const r = t.onError || Cc;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Hc(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function nf(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && X(e)) {
    Pe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || ef)(e), o = Tr[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = tf(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = bo(a);
    return s ? l : Tr[r] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Tr[n];
      return r || (Tr[n] = bo(e));
    } else
      return bo(e);
  }
}
const Yt = {
  INVALID_ARGUMENT: Sc,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, rf = 24;
function qt(e) {
  return Qr(e, null, void 0);
}
function ea(e, t) {
  return t.locale != null ? Xa(t.locale) : Xa(e.locale);
}
let yo;
function Xa(e) {
  if (X(e))
    return e;
  if (Oe(e)) {
    if (e.resolvedOnce && yo != null)
      return yo;
    if (e.constructor.name === "Function") {
      const t = e();
      if (_c(t))
        throw qt(Yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return yo = t;
    } else
      throw qt(Yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw qt(Yt.NOT_SUPPORT_LOCALE_TYPE);
}
function of(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ne(t) ? t : pe(t) ? Object.keys(t) : X(t) ? [t] : [n]
  ])];
}
function Kl(e, t, n) {
  const r = X(n) ? n : zr, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; Ne(s); )
      s = Za(a, s, t);
    const l = Ne(t) || !de(t) ? t : t.default ? t.default : null;
    s = X(l) ? [l] : l, Ne(s) && Za(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Za(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Pe(r); o++) {
    const a = t[o];
    X(a) && (r = af(e, t[o], n));
  }
  return r;
}
function af(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = sf(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function sf(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Ne(n) || de(n)) && n[o] && (r = n[o]);
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
const lf = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function uf(e) {
  return lf.test(e);
}
function cf(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function ff(e) {
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
function df(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : uf(t) ? cf(t) : "*" + t;
}
function pf(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, l, i, c, d, p;
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
      if (o = 0, s === void 0 || (s = df(s), s === !1))
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
      if (i = ff(a), p = gn[r], c = p[i] || p.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (d = m[c[1]], d && (l = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ja = /* @__PURE__ */ new Map();
function mf(e, t) {
  return pe(e) ? e[t] : null;
}
function vf(e, t) {
  if (!pe(e))
    return null;
  let n = Ja.get(t);
  if (n || (n = pf(t), n && Ja.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Hl.includes(s) && Ft(o))
      return null;
    const l = o[s];
    if (l === void 0 || Oe(o))
      return null;
    o = l, a++;
  }
  return o;
}
const gf = "11.2.2", eo = -1, zr = "en-US", Qa = "", es = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function hf() {
  return {
    upper: (e, t) => t === "text" && X(e) ? e.toUpperCase() : t === "vnode" && pe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && X(e) ? e.toLowerCase() : t === "vnode" && pe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && X(e) ? es(e) : t === "vnode" && pe(e) && "__v_isVNode" in e ? es(e.children) : e
  };
}
let Gl;
function bf(e) {
  Gl = e;
}
let Yl;
function yf(e) {
  Yl = e;
}
let ql;
function _f(e) {
  ql = e;
}
let Xl = null;
const ts = (e) => {
  Xl = e;
}, wf = () => Xl;
let ns = 0;
function Ef(e = {}) {
  const t = Oe(e.onWarn) ? e.onWarn : pc, n = X(e.version) ? e.version : gf, r = X(e.locale) || Oe(e.locale) ? e.locale : zr, o = Oe(r) ? zr : r, a = Ne(e.fallbackLocale) || de(e.fallbackLocale) || X(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = de(e.messages) ? e.messages : _o(o), l = de(e.datetimeFormats) ? e.datetimeFormats : _o(o), i = de(e.numberFormats) ? e.numberFormats : _o(o), c = Ue(ye(), e.modifiers, hf()), d = e.pluralRules || ye(), p = Oe(e.missing) ? e.missing : null, m = Pe(e.missingWarn) || Br(e.missingWarn) ? e.missingWarn : !0, h = Pe(e.fallbackWarn) || Br(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, g = !!e.unresolving, E = Oe(e.postTranslation) ? e.postTranslation : null, f = de(e.processor) ? e.processor : null, w = Pe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter, C = Oe(e.messageCompiler) ? e.messageCompiler : Gl, b = Oe(e.messageResolver) ? e.messageResolver : Yl || mf, O = Oe(e.localeFallbacker) ? e.localeFallbacker : ql || of, T = pe(e.fallbackContext) ? e.fallbackContext : void 0, x = e, B = pe(x.__datetimeFormatters) ? x.__datetimeFormatters : /* @__PURE__ */ new Map(), J = pe(x.__numberFormatters) ? x.__numberFormatters : /* @__PURE__ */ new Map(), oe = pe(x.__meta) ? x.__meta : {};
  ns++;
  const Z = {
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
    postTranslation: E,
    processor: f,
    warnHtmlMessage: w,
    escapeParameter: I,
    messageCompiler: C,
    messageResolver: b,
    localeFallbacker: O,
    fallbackContext: T,
    onWarn: t,
    __meta: oe
  };
  return Z.datetimeFormats = l, Z.numberFormats = i, Z.__datetimeFormatters = B, Z.__numberFormatters = J, Z;
}
const _o = (e) => ({ [e]: ye() });
function ta(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const l = a(e, n, t, o);
    return X(l) ? l : t;
  } else
    return t;
}
function Yn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Sf(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Cf(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Sf(e, t[r]))
      return !0;
  return !1;
}
function rs(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: l } = e, [i, c, d, p] = Po(...t), m = Pe(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Pe(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const h = !!d.part, v = ea(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!X(i) || i === "")
    return new Intl.DateTimeFormat(v, p).format(c);
  let E = {}, f, w = null;
  const I = "datetime format";
  for (let O = 0; O < g.length && (f = g[O], E = n[f] || {}, w = E[i], !de(w)); O++)
    ta(e, i, f, m, I);
  if (!de(w) || !X(f))
    return r ? eo : i;
  let C = `${f}__${i}`;
  Jr(p) || (C = `${C}__${JSON.stringify(p)}`);
  let b = l.get(C);
  return b || (b = new Intl.DateTimeFormat(f, Ue({}, w, p)), l.set(C, b)), h ? b.formatToParts(c) : b.format(c);
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
  const [t, n, r, o] = e, a = ye();
  let s = ye(), l;
  if (X(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw qt(Yt.INVALID_ISO_DATE_ARGUMENT);
    const c = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    l = new Date(c);
    try {
      l.toISOString();
    } catch {
      throw qt(Yt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (gc(t)) {
    if (isNaN(t.getTime()))
      throw qt(Yt.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (De(t))
    l = t;
  else
    throw qt(Yt.INVALID_ARGUMENT);
  return X(n) ? a.key = n : de(n) && Object.keys(n).forEach((i) => {
    Zl.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), X(r) ? a.locale = r : de(r) && (s = r), de(o) && (s = o), [a.key || "", l, a, s];
}
function os(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function as(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: l } = e, [i, c, d, p] = No(...t), m = Pe(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Pe(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const h = !!d.part, v = ea(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!X(i) || i === "")
    return new Intl.NumberFormat(v, p).format(c);
  let E = {}, f, w = null;
  const I = "number format";
  for (let O = 0; O < g.length && (f = g[O], E = n[f] || {}, w = E[i], !de(w)); O++)
    ta(e, i, f, m, I);
  if (!de(w) || !X(f))
    return r ? eo : i;
  let C = `${f}__${i}`;
  Jr(p) || (C = `${C}__${JSON.stringify(p)}`);
  let b = l.get(C);
  return b || (b = new Intl.NumberFormat(f, Ue({}, w, p)), l.set(C, b)), h ? b.formatToParts(c) : b.format(c);
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
  const [t, n, r, o] = e, a = ye();
  let s = ye();
  if (!De(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const l = t;
  return X(n) ? a.key = n : de(n) && Object.keys(n).forEach((i) => {
    Jl.includes(i) ? s[i] = n[i] : a[i] = n[i];
  }), X(r) ? a.locale = r : de(r) && (s = r), de(o) && (s = o), [a.key || "", l, a, s];
}
function ss(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Tf = (e) => e, Of = (e) => "", If = "text", Af = (e) => e.length === 0 ? "" : Zo(e), Lf = wc;
function ls(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Pf(e) {
  const t = De(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (De(e.named.count) || De(e.named.n)) ? De(e.named.count) ? e.named.count : De(e.named.n) ? e.named.n : t : t;
}
function Nf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function kf(e = {}) {
  const t = e.locale, n = Pf(e), r = pe(e.pluralRules) && X(t) && Oe(e.pluralRules[t]) ? e.pluralRules[t] : ls, o = pe(e.pluralRules) && X(t) && Oe(e.pluralRules[t]) ? ls : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], l = (f) => s[f], i = e.named || ye();
  De(e.pluralIndex) && Nf(n, i);
  const c = (f) => i[f];
  function d(f, w) {
    const I = Oe(e.messages) ? e.messages(f, !!w) : pe(e.messages) ? e.messages[f] : !1;
    return I || (e.parent ? e.parent.message(f) : Of);
  }
  const p = (f) => e.modifiers ? e.modifiers[f] : Tf, m = de(e.processor) && Oe(e.processor.normalize) ? e.processor.normalize : Af, h = de(e.processor) && Oe(e.processor.interpolate) ? e.processor.interpolate : Lf, v = de(e.processor) && X(e.processor.type) ? e.processor.type : If, E = {
    list: l,
    named: c,
    plural: a,
    linked: (f, ...w) => {
      const [I, C] = w;
      let b = "text", O = "";
      w.length === 1 ? pe(I) ? (O = I.modifier || O, b = I.type || b) : X(I) && (O = I || O) : w.length === 2 && (X(I) && (O = I || O), X(C) && (b = C || b));
      const T = d(f, !0)(E), x = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        b === "vnode" && Ne(T) && O ? T[0] : T
      );
      return O ? p(O)(x, b) : x;
    },
    message: d,
    type: v,
    interpolate: h,
    normalize: m,
    values: Ue(ye(), s, i)
  };
  return E;
}
const is = () => "", Zt = (e) => Oe(e);
function us(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: l } = e, [i, c] = ko(...t), d = Pe(c.missingWarn) ? c.missingWarn : e.missingWarn, p = Pe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, m = Pe(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, h = !!c.resolvedMessage, v = X(c.default) || Pe(c.default) ? Pe(c.default) ? a ? i : () => i : c.default : n ? a ? i : () => i : null, g = n || v != null && (X(v) || Oe(v)), E = ea(e, c);
  m && Rf(c);
  let [f, w, I] = h ? [
    i,
    E,
    l[E] || ye()
  ] : Ql(e, i, E, s, p, d), C = f, b = i;
  if (!h && !(X(C) || Ft(C) || Zt(C)) && g && (C = v, b = C), !h && (!(X(C) || Ft(C) || Zt(C)) || !X(w)))
    return o ? eo : i;
  let O = !1;
  const T = () => {
    O = !0;
  }, x = Zt(C) ? C : ei(e, i, w, C, b, T);
  if (O)
    return C;
  const B = Ff(e, w, I, c), J = kf(B), oe = $f(e, x, J);
  let Z = r ? r(oe, i) : oe;
  return m && X(Z) && (Z = bc(Z)), Z;
}
function Rf(e) {
  Ne(e.list) ? e.list = e.list.map((t) => X(t) ? ja(t) : t) : pe(e.named) && Object.keys(e.named).forEach((t) => {
    X(e.named[t]) && (e.named[t] = ja(e.named[t]));
  });
}
function Ql(e, t, n, r, o, a) {
  const { messages: s, onWarn: l, messageResolver: i, localeFallbacker: c } = e, d = c(e, r, n);
  let p = ye(), m, h = null;
  const v = "translate";
  for (let g = 0; g < d.length && (m = d[g], p = s[m] || ye(), (h = i(p, t)) === null && (h = p[t]), !(X(h) || Ft(h) || Zt(h))); g++)
    if (!Cf(m, d)) {
      const E = ta(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        v
      );
      E !== t && (h = E);
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
  const i = s(r, Mf(e, n, o, r, l, a));
  return i.locale = n, i.key = t, i.source = r, i;
}
function $f(e, t, n) {
  return t(n);
}
function ko(...e) {
  const [t, n, r] = e, o = ye();
  if (!X(t) && !De(t) && !Zt(t) && !Ft(t))
    throw qt(Yt.INVALID_ARGUMENT);
  const a = De(t) ? String(t) : (Zt(t), t);
  return De(n) ? o.plural = n : X(n) ? o.default = n : de(n) && !Jr(n) ? o.named = n : Ne(n) && (o.list = n), De(r) ? o.plural = r : X(r) ? o.default = r : de(r) && Ue(o, r), [a, o];
}
function Mf(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => mc(t, n, s)
  };
}
function Ff(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: l, fallbackWarn: i, missingWarn: c, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (h, v) => {
      let g = s(n, h);
      if (g == null && (d || v)) {
        const [, , E] = Ql(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          h,
          t,
          l,
          i,
          c
        );
        g = s(E, h);
      }
      if (X(g) || Ft(g)) {
        let E = !1;
        const w = ei(e, h, t, g, h, () => {
          E = !0;
        });
        return E ? is : w;
      } else return Zt(g) ? g : is;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), De(r.plural) && (m.pluralIndex = r.plural), m;
}
Kc();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Df = "11.2.2";
function Vf() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (kr().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (kr().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (kr().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Fn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: rf,
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
const Ro = /* @__PURE__ */ Tn("__translateVNode"), $o = /* @__PURE__ */ Tn("__datetimeParts"), Mo = /* @__PURE__ */ Tn("__numberParts"), xf = Tn("__setPluralRules"), ti = /* @__PURE__ */ Tn("__injectWithOption"), Fo = /* @__PURE__ */ Tn("__dispose");
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
          if (n[s] in o || (o[n[s]] = ye()), !pe(o[n[s]])) {
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
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = de(n) ? n : Ne(r) ? ye() : { [e]: ye() };
  if (Ne(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: i, resource: c } = l;
      i ? (s[i] = s[i] || ye(), Rr(c, s[i])) : Rr(c, s);
    } else
      X(l) && Rr(JSON.parse(l), s);
  }), o == null && a)
    for (const l in s)
      wt(s, l) && lr(s[l]);
  return s;
}
function Bf(e) {
  return e.type;
}
function zf(e, t, n) {
  let r = pe(t.messages) ? t.messages : ye();
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
  return q(Rl, null, e, 0);
}
function ri() {
  return "currentInstance" in ho ? ho["currentInstance"] : ho.getCurrentInstance();
}
const fs = () => [], Uf = () => !1;
let ds = 0;
function ps(e) {
  return (t, n, r, o) => e(n, r, ri() || void 0, o);
}
function Wf(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Ua ? D : dn;
  let s = Pe(e.inheritLocale) ? e.inheritLocale : !0;
  const l = a(
    // prettier-ignore
    t && s ? t.locale.value : X(e.locale) ? e.locale : zr
  ), i = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : X(e.fallbackLocale) || Ne(e.fallbackLocale) || de(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), c = a(ni(l.value, e)), d = a(de(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), p = a(de(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let m = t ? t.missingWarn : Pe(e.missingWarn) || Br(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : Pe(e.fallbackWarn) || Br(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : Pe(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, E = Oe(e.missing) ? e.missing : null, f = Oe(e.missing) ? ps(e.missing) : null, w = Oe(e.postTranslation) ? e.postTranslation : null, I = t ? t.warnHtmlMessage : Pe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter;
  const b = t ? t.modifiers : de(e.modifiers) ? e.modifiers : {};
  let O = e.pluralRules || t && t.pluralRules, T;
  T = (() => {
    r && ts(null);
    const y = {
      version: Df,
      locale: l.value,
      fallbackLocale: i.value,
      messages: c.value,
      modifiers: b,
      pluralRules: O,
      missing: f === null ? void 0 : f,
      missingWarn: m,
      fallbackWarn: h,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: w === null ? void 0 : w,
      warnHtmlMessage: I,
      escapeParameter: C,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    y.datetimeFormats = d.value, y.numberFormats = p.value, y.__datetimeFormatters = de(T) ? T.__datetimeFormatters : void 0, y.__numberFormatters = de(T) ? T.__numberFormatters : void 0;
    const R = Ef(y);
    return r && ts(R), R;
  })(), Yn(T, l.value, i.value);
  function B() {
    return [
      l.value,
      i.value,
      c.value,
      d.value,
      p.value
    ];
  }
  const J = L({
    get: () => l.value,
    set: (y) => {
      T.locale = y, l.value = y;
    }
  }), oe = L({
    get: () => i.value,
    set: (y) => {
      T.fallbackLocale = y, i.value = y, Yn(T, l.value, y);
    }
  }), Z = L(() => c.value), ie = /* @__PURE__ */ L(() => d.value), Ce = /* @__PURE__ */ L(() => p.value);
  function M() {
    return Oe(w) ? w : null;
  }
  function F(y) {
    w = y, T.postTranslation = y;
  }
  function P() {
    return E;
  }
  function te(y) {
    y !== null && (f = ps(y)), E = y, T.missing = f;
  }
  const ee = (y, R, ue, me, Ke, bn) => {
    B();
    let pt;
    try {
      r || (T.fallbackContext = t ? wf() : void 0), pt = y(T);
    } finally {
      r || (T.fallbackContext = void 0);
    }
    if (ue !== "translate exists" && // for not `te` (e.g `t`)
    De(pt) && pt === eo || ue === "translate exists" && !pt) {
      const [go, Fa] = R();
      return t && v ? me(t) : Ke(go);
    } else {
      if (bn(pt))
        return pt;
      throw sr(Fn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function se(...y) {
    return ee((R) => Reflect.apply(us, null, [R, ...y]), () => ko(...y), "translate", (R) => Reflect.apply(R.t, R, [...y]), (R) => R, (R) => X(R));
  }
  function we(...y) {
    const [R, ue, me] = y;
    if (me && !pe(me))
      throw sr(Fn.INVALID_ARGUMENT);
    return se(R, ue, Ue({ resolvedMessage: !0 }, me || {}));
  }
  function H(...y) {
    return ee((R) => Reflect.apply(rs, null, [R, ...y]), () => Po(...y), "datetime format", (R) => Reflect.apply(R.d, R, [...y]), () => Qa, (R) => X(R) || Ne(R));
  }
  function _e(...y) {
    return ee((R) => Reflect.apply(as, null, [R, ...y]), () => No(...y), "number format", (R) => Reflect.apply(R.n, R, [...y]), () => Qa, (R) => X(R) || Ne(R));
  }
  function We(y) {
    return y.map((R) => X(R) || De(R) || Pe(R) ? cs(String(R)) : R);
  }
  const je = {
    normalize: We,
    interpolate: (y) => y,
    type: "vnode"
  };
  function He(...y) {
    return ee((R) => {
      let ue;
      const me = R;
      try {
        me.processor = je, ue = Reflect.apply(us, null, [me, ...y]);
      } finally {
        me.processor = null;
      }
      return ue;
    }, () => ko(...y), "translate", (R) => R[Ro](...y), (R) => [cs(R)], (R) => Ne(R));
  }
  function be(...y) {
    return ee((R) => Reflect.apply(as, null, [R, ...y]), () => No(...y), "number format", (R) => R[Mo](...y), fs, (R) => X(R) || Ne(R));
  }
  function rt(...y) {
    return ee((R) => Reflect.apply(rs, null, [R, ...y]), () => Po(...y), "datetime format", (R) => R[$o](...y), fs, (R) => X(R) || Ne(R));
  }
  function ft(y) {
    O = y, T.pluralRules = O;
  }
  function ot(y, R) {
    return ee(() => {
      if (!y)
        return !1;
      const ue = X(R) ? R : l.value, me = st(ue), Ke = T.messageResolver(me, y);
      return Ft(Ke) || Zt(Ke) || X(Ke);
    }, () => [y], "translate exists", (ue) => Reflect.apply(ue.te, ue, [y, R]), Uf, (ue) => Pe(ue));
  }
  function bt(y) {
    let R = null;
    const ue = Kl(T, i.value, l.value);
    for (let me = 0; me < ue.length; me++) {
      const Ke = c.value[ue[me]] || {}, bn = T.messageResolver(Ke, y);
      if (bn != null) {
        R = bn;
        break;
      }
    }
    return R;
  }
  function at(y) {
    const R = bt(y);
    return R ?? (t ? t.tm(y) || {} : {});
  }
  function st(y) {
    return c.value[y] || {};
  }
  function lt(y, R) {
    if (o) {
      const ue = { [y]: R };
      for (const me in ue)
        wt(ue, me) && lr(ue[me]);
      R = ue[y];
    }
    c.value[y] = R, T.messages = c.value;
  }
  function dt(y, R) {
    c.value[y] = c.value[y] || {};
    const ue = { [y]: R };
    if (o)
      for (const me in ue)
        wt(ue, me) && lr(ue[me]);
    R = ue[y], Rr(R, c.value[y]), T.messages = c.value;
  }
  function At(y) {
    return d.value[y] || {};
  }
  function _(y, R) {
    d.value[y] = R, T.datetimeFormats = d.value, os(T, y, R);
  }
  function S(y, R) {
    d.value[y] = Ue(d.value[y] || {}, R), T.datetimeFormats = d.value, os(T, y, R);
  }
  function $(y) {
    return p.value[y] || {};
  }
  function j(y, R) {
    p.value[y] = R, T.numberFormats = p.value, ss(T, y, R);
  }
  function fe(y, R) {
    p.value[y] = Ue(p.value[y] || {}, R), T.numberFormats = p.value, ss(T, y, R);
  }
  ds++, t && Ua && (le(t.locale, (y) => {
    s && (l.value = y, T.locale = y, Yn(T, l.value, i.value));
  }), le(t.fallbackLocale, (y) => {
    s && (i.value = y, T.fallbackLocale = y, Yn(T, l.value, i.value));
  }));
  const ne = {
    id: ds,
    locale: J,
    fallbackLocale: oe,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(y) {
      s = y, y && t && (l.value = t.locale.value, i.value = t.fallbackLocale.value, Yn(T, l.value, i.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: Z,
    get modifiers() {
      return b;
    },
    get pluralRules() {
      return O || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(y) {
      m = y, T.missingWarn = m;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(y) {
      h = y, T.fallbackWarn = h;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(y) {
      v = y;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(y) {
      g = y, T.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return I;
    },
    set warnHtmlMessage(y) {
      I = y, T.warnHtmlMessage = y;
    },
    get escapeParameter() {
      return C;
    },
    set escapeParameter(y) {
      C = y, T.escapeParameter = y;
    },
    t: se,
    getLocaleMessage: st,
    setLocaleMessage: lt,
    mergeLocaleMessage: dt,
    getPostTranslationHandler: M,
    setPostTranslationHandler: F,
    getMissingHandler: P,
    setMissingHandler: te,
    [xf]: ft
  };
  return ne.datetimeFormats = ie, ne.numberFormats = Ce, ne.rt = we, ne.te = ot, ne.tm = at, ne.d = H, ne.n = _e, ne.getDateTimeFormat = At, ne.setDateTimeFormat = _, ne.mergeDateTimeFormat = S, ne.getNumberFormat = $, ne.setNumberFormat = j, ne.mergeNumberFormat = fe, ne[ti] = n, ne[Ro] = He, ne[$o] = rt, ne[Mo] = be, ne;
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
function jf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === et ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, ye());
}
function oi() {
  return et;
}
Ue({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => De(e) || !isNaN(e)
  }
}, na);
function Hf(e) {
  return Ne(e) && !X(e[0]);
}
function ai(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let l = ye();
    e.locale && (s.locale = e.locale), X(e.format) ? s.key = e.format : pe(e.format) && (X(e.format.key) && (s.key = e.format.key), l = Object.keys(e.format).reduce((m, h) => n.includes(h) ? Ue(ye(), m, { [h]: e.format[h] }) : m, ye()));
    const i = r(e.value, s, l);
    let c = [s.key];
    Ne(i) ? c = i.map((m, h) => {
      const v = o[m.type], g = v ? v({ [m.type]: m.value, index: h, parts: i }) : [m.value];
      return Hf(g) && (g[0].key = `${m.type}-${h}`), g;
    }) : X(i) && (c = [i]);
    const d = Ue(ye(), a), p = X(e.tag) || pe(e.tag) ? e.tag : oi();
    return kl(p, d, c);
  };
}
Ue({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, na);
const Kf = /* @__PURE__ */ Tn("global-vue-i18n");
function pr(e = {}) {
  const t = ri();
  if (t == null)
    throw sr(Fn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw sr(Fn.NOT_INSTALLED);
  const n = Gf(t), r = qf(n), o = Bf(t), a = Yf(e, o);
  if (a === "global")
    return zf(r, e, o), r;
  if (a === "parent") {
    let i = Xf(n, t, e.__useComponent);
    return i == null && (i = r), i;
  }
  const s = n;
  let l = s.__getInstance(t);
  if (l == null) {
    const i = Ue({}, e);
    "__i18n" in o && (i.__i18n = o.__i18n), r && (i.__root = r), l = Wf(i), s.__composerExtend && (l[Fo] = s.__composerExtend(l)), Jf(s, t, l), s.__setInstance(t, l);
  }
  return l;
}
function Gf(e) {
  const t = he(e.isCE ? Kf : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw sr(e.isCE ? Fn.NOT_INSTALLED_WITH_PROVIDE : Fn.UNEXPECTED_ERROR);
  return t;
}
function Yf(e, t) {
  return Jr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function qf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Xf(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = Zf(t, n);
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
function Zf(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Jf(e, t, n) {
  ke(() => {
  }, t), Zr(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Fo];
    o && (o(), delete r[Fo]);
  }, t);
}
Ue({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, na);
Vf();
bf(nf);
yf(vf);
_f(Kl);
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
const Qf = Symbol("");
function si() {
  return he(Qf);
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
      class: V([
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
        A(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            A("circle", {
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
}, mt = /* @__PURE__ */ ra(nd, [["__scopeId", "data-v-9497085f"]]), li = Symbol(), $r = "el", rd = "is-", _n = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, ii = Symbol("namespaceContextKey"), oa = (e) => {
  const t = e || (Je() ? he(ii, D($r)) : D($r));
  return L(() => u(t) || $r);
}, Me = (e, t) => {
  const n = oa(t);
  return {
    namespace: n,
    b: (g = "") => _n(n.value, e, g, "", ""),
    e: (g) => g ? _n(n.value, e, "", g, "") : "",
    m: (g) => g ? _n(n.value, e, "", "", g) : "",
    be: (g, E) => g && E ? _n(n.value, e, g, E, "") : "",
    em: (g, E) => g && E ? _n(n.value, e, "", g, E) : "",
    bm: (g, E) => g && E ? _n(n.value, e, g, "", E) : "",
    bem: (g, E, f) => g && E && f ? _n(n.value, e, g, E, f) : "",
    is: (g, ...E) => {
      const f = E.length >= 1 ? E[0] : !0;
      return g && f ? `${rd}${g}` : "";
    },
    cssVar: (g) => {
      const E = {};
      for (const f in g)
        g[f] && (E[`--${n.value}-${f}`] = g[f]);
      return E;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const E = {};
      for (const f in g)
        g[f] && (E[`--${n.value}-${e}-${f}`] = g[f]);
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
const ir = () => {
}, od = Object.prototype.hasOwnProperty, hs = (e, t) => od.call(e, t), Rt = Array.isArray, Ie = (e) => typeof e == "function", qe = (e) => typeof e == "string", ut = (e) => e !== null && typeof e == "object", bs = (e) => (ut(e) || Ie(e)) && Ie(e.then) && Ie(e.catch), ad = Object.prototype.toString, sd = (e) => ad.call(e), ld = (e) => sd(e) === "[object Object]";
var ui = typeof global == "object" && global && global.Object === Object && global, id = typeof self == "object" && self && self.Object === Object && self, Wt = ui || id || Function("return this")(), Bt = Wt.Symbol, ci = Object.prototype, ud = ci.hasOwnProperty, cd = ci.toString, qn = Bt ? Bt.toStringTag : void 0;
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
var vd = "[object Null]", gd = "[object Undefined]", ys = Bt ? Bt.toStringTag : void 0;
function Kn(e) {
  return e == null ? e === void 0 ? gd : vd : ys && ys in Object(e) ? fd(e) : md(e);
}
function Dn(e) {
  return e != null && typeof e == "object";
}
var hd = "[object Symbol]";
function to(e) {
  return typeof e == "symbol" || Dn(e) && Kn(e) == hd;
}
function bd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Tt = Array.isArray, _s = Bt ? Bt.prototype : void 0, ws = _s ? _s.toString : void 0;
function fi(e) {
  if (typeof e == "string")
    return e;
  if (Tt(e))
    return bd(e, fi) + "";
  if (to(e))
    return ws ? ws.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var yd = /\s/;
function _d(e) {
  for (var t = e.length; t-- && yd.test(e.charAt(t)); )
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
function di(e) {
  return e;
}
var Id = "[object AsyncFunction]", Ad = "[object Function]", Ld = "[object GeneratorFunction]", Pd = "[object Proxy]";
function pi(e) {
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
function zd(e) {
  if (!mn(e) || Nd(e))
    return !1;
  var t = pi(e) ? Bd : Md;
  return t.test(On(e));
}
function Ud(e, t) {
  return e?.[t];
}
function In(e, t) {
  var n = Ud(e, t);
  return zd(n) ? n : void 0;
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
var Ur = function() {
  try {
    var e = In(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), qd = Ur ? function(e, t) {
  return Ur(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Yd(t),
    writable: !0
  });
} : di, Xd = Gd(qd);
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
  t == "__proto__" && Ur ? Ur(e, t, {
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
  return e != null && la(e.length) && !pi(e);
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
var mi = Object.prototype, fp = mi.hasOwnProperty, dp = mi.propertyIsEnumerable, ia = Os(/* @__PURE__ */ function() {
  return arguments;
}()) ? Os : function(e) {
  return Dn(e) && fp.call(e, "callee") && !dp.call(e, "callee");
};
function pp() {
  return !1;
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, Is = vi && typeof module == "object" && module && !module.nodeType && module, mp = Is && Is.exports === vi, As = mp ? Wt.Buffer : void 0, vp = As ? As.isBuffer : void 0, Vo = vp || pp, gp = "[object Arguments]", hp = "[object Array]", bp = "[object Boolean]", yp = "[object Date]", _p = "[object Error]", wp = "[object Function]", Ep = "[object Map]", Sp = "[object Number]", Cp = "[object Object]", Tp = "[object RegExp]", Op = "[object Set]", Ip = "[object String]", Ap = "[object WeakMap]", Lp = "[object ArrayBuffer]", Pp = "[object DataView]", Np = "[object Float32Array]", kp = "[object Float64Array]", Rp = "[object Int8Array]", $p = "[object Int16Array]", Mp = "[object Int32Array]", Fp = "[object Uint8Array]", Dp = "[object Uint8ClampedArray]", Vp = "[object Uint16Array]", xp = "[object Uint32Array]", Ee = {};
Ee[Np] = Ee[kp] = Ee[Rp] = Ee[$p] = Ee[Mp] = Ee[Fp] = Ee[Dp] = Ee[Vp] = Ee[xp] = !0;
Ee[gp] = Ee[hp] = Ee[Lp] = Ee[bp] = Ee[Pp] = Ee[yp] = Ee[_p] = Ee[wp] = Ee[Ep] = Ee[Sp] = Ee[Cp] = Ee[Tp] = Ee[Op] = Ee[Ip] = Ee[Ap] = !1;
function Bp(e) {
  return Dn(e) && la(e.length) && !!Ee[Kn(e)];
}
function zp(e) {
  return function(t) {
    return e(t);
  };
}
var gi = typeof exports == "object" && exports && !exports.nodeType && exports, Jn = gi && typeof module == "object" && module && !module.nodeType && module, Up = Jn && Jn.exports === gi, Eo = Up && ui.process, Ls = function() {
  try {
    var e = Jn && Jn.require && Jn.require("util").types;
    return e || Eo && Eo.binding && Eo.binding("util");
  } catch {
  }
}(), Ps = Ls && Ls.isTypedArray, hi = Ps ? zp(Ps) : Bp, Wp = Object.prototype, jp = Wp.hasOwnProperty;
function Hp(e, t) {
  var n = Tt(e), r = !n && ia(e), o = !n && !r && Vo(e), a = !n && !r && !o && hi(e), s = n || r || o || a, l = s ? up(e.length, String) : [], i = l.length;
  for (var c in e)
    jp.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    aa(c, i))) && l.push(c);
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
function bi(e) {
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
function bm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ro(e, t) {
  var n = e.__data__;
  return bm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ym(e) {
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
an.prototype.delete = ym;
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
  return e == null ? "" : fi(e);
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
function zm() {
  return [];
}
var Um = Object.prototype, Wm = Um.propertyIsEnumerable, ks = Object.getOwnPropertySymbols, jm = ks ? function(e) {
  return e == null ? [] : (e = Object(e), Bm(ks(e), function(t) {
    return Wm.call(e, t);
  }));
} : zm;
function Hm(e, t, n) {
  var r = t(e);
  return Tt(e) ? r : yi(r, n(e));
}
function Rs(e) {
  return Hm(e, bi, jm);
}
var xo = In(Wt, "DataView"), Bo = In(Wt, "Promise"), zo = In(Wt, "Set"), $s = "[object Map]", Km = "[object Object]", Ms = "[object Promise]", Fs = "[object Set]", Ds = "[object WeakMap]", Vs = "[object DataView]", Gm = On(xo), Ym = On(cr), qm = On(Bo), Xm = On(zo), Zm = On(Do), un = Kn;
(xo && un(new xo(new ArrayBuffer(1))) != Vs || cr && un(new cr()) != $s || Bo && un(Bo.resolve()) != Ms || zo && un(new zo()) != Fs || Do && un(new Do()) != Ds) && (un = function(e) {
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
function _i(e, t, n, r, o, a) {
  var s = n & rv, l = e.length, i = t.length;
  if (l != i && !(s && i > l))
    return !1;
  var c = a.get(e), d = a.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, m = !0, h = n & ov ? new Wr() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < l; ) {
    var v = e[p], g = t[p];
    if (r)
      var E = s ? r(g, v, p, t, e, a) : r(v, g, p, e, t, a);
    if (E !== void 0) {
      if (E)
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
var lv = 1, iv = 2, uv = "[object Boolean]", cv = "[object Date]", fv = "[object Error]", dv = "[object Map]", pv = "[object Number]", mv = "[object RegExp]", vv = "[object Set]", gv = "[object String]", hv = "[object Symbol]", bv = "[object ArrayBuffer]", yv = "[object DataView]", Bs = Bt ? Bt.prototype : void 0, So = Bs ? Bs.valueOf : void 0;
function _v(e, t, n, r, o, a, s) {
  switch (n) {
    case yv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case bv:
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
      var i = r & lv;
      if (l || (l = sv), e.size != t.size && !i)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      r |= iv, s.set(e, t);
      var d = _i(l(e), l(t), r, o, a, s);
      return s.delete(e), d;
    case hv:
      if (So)
        return So.call(e) == So.call(t);
  }
  return !1;
}
var wv = 1, Ev = Object.prototype, Sv = Ev.hasOwnProperty;
function Cv(e, t, n, r, o, a) {
  var s = n & wv, l = Rs(e), i = l.length, c = Rs(t), d = c.length;
  if (i != d && !s)
    return !1;
  for (var p = i; p--; ) {
    var m = l[p];
    if (!(s ? m in t : Sv.call(t, m)))
      return !1;
  }
  var h = a.get(e), v = a.get(t);
  if (h && v)
    return h == t && v == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var E = s; ++p < i; ) {
    m = l[p];
    var f = e[m], w = t[m];
    if (r)
      var I = s ? r(w, f, m, t, e, a) : r(f, w, m, e, t, a);
    if (!(I === void 0 ? f === w || o(f, w, n, r, a) : I)) {
      g = !1;
      break;
    }
    E || (E = m == "constructor");
  }
  if (g && !E) {
    var C = e.constructor, b = t.constructor;
    C != b && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof b == "function" && b instanceof b) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var Tv = 1, zs = "[object Arguments]", Us = "[object Array]", Or = "[object Object]", Ov = Object.prototype, Ws = Ov.hasOwnProperty;
function Iv(e, t, n, r, o, a) {
  var s = Tt(e), l = Tt(t), i = s ? Us : un(e), c = l ? Us : un(t);
  i = i == zs ? Or : i, c = c == zs ? Or : c;
  var d = i == Or, p = c == Or, m = i == c;
  if (m && Vo(e)) {
    if (!Vo(t))
      return !1;
    s = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new Jt()), s || hi(e) ? _i(e, t, n, r, o, a) : _v(e, t, i, n, r, o, a);
  if (!(n & Tv)) {
    var h = d && Ws.call(e, "__wrapped__"), v = p && Ws.call(t, "__wrapped__");
    if (h || v) {
      var g = h ? e.value() : e, E = v ? t.value() : t;
      return a || (a = new Jt()), o(g, E, n, r, a);
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
    var l = s[0], i = e[l], c = s[1];
    if (s[2]) {
      if (i === void 0 && !(l in e))
        return !1;
    } else {
      var d = new Jt(), p;
      if (!(p === void 0 ? ao(c, i, Av | Lv, r, d) : p))
        return !1;
    }
  }
  return !0;
}
function wi(e) {
  return e === e && !mn(e);
}
function Nv(e) {
  for (var t = bi(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, wi(o)];
  }
  return t;
}
function Ei(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function kv(e) {
  var t = Nv(e);
  return t.length == 1 && t[0][2] ? Ei(t[0][0], t[0][1]) : function(n) {
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
function Si(e, t) {
  return e != null && $v(e, t, Rv);
}
var Mv = 1, Fv = 2;
function Dv(e, t) {
  return ua(e) && wi(t) ? Ei(mr(e), t) : function(n) {
    var r = fn(n, e);
    return r === void 0 && r === t ? Si(n, e) : ao(t, r, Mv | Fv);
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
function zv(e) {
  return typeof e == "function" ? e : e == null ? di : typeof e == "object" ? Tt(e) ? Dv(e[0], e[1]) : kv(e) : Bv(e);
}
var Co = function() {
  return Wt.Date.now();
}, Uv = "Expected a function", Wv = Math.max, jv = Math.min;
function Hv(e, t, n) {
  var r, o, a, s, l, i, c = 0, d = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Uv);
  t = Ss(t) || 0, mn(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? Wv(Ss(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function h(O) {
    var T = r, x = o;
    return r = o = void 0, c = O, s = e.apply(x, T), s;
  }
  function v(O) {
    return c = O, l = setTimeout(f, t), d ? h(O) : s;
  }
  function g(O) {
    var T = O - i, x = O - c, B = t - T;
    return p ? jv(B, a - x) : B;
  }
  function E(O) {
    var T = O - i, x = O - c;
    return i === void 0 || T >= t || T < 0 || p && x >= a;
  }
  function f() {
    var O = Co();
    if (E(O))
      return w(O);
    l = setTimeout(f, g(O));
  }
  function w(O) {
    return l = void 0, m && r ? h(O) : (r = o = void 0, s);
  }
  function I() {
    l !== void 0 && clearTimeout(l), c = 0, r = i = o = l = void 0;
  }
  function C() {
    return l === void 0 ? s : w(Co());
  }
  function b() {
    var O = Co(), T = E(O);
    if (r = arguments, o = this, i = O, T) {
      if (l === void 0)
        return v(i);
      if (p)
        return clearTimeout(l), l = setTimeout(f, t), h(i);
    }
    return l === void 0 && (l = setTimeout(f, t)), s;
  }
  return b.cancel = I, b.flush = C, b;
}
function Kv(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Zd(e, zv(t), o);
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
    var i = mr(t[o]), c = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (o != s) {
      var d = l[i];
      c = void 0, c === void 0 && (c = mn(d) ? d : aa(t[o + 1]) ? [] : {});
    }
    rp(l, i, c), l = l[i];
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
    return Si(e, r);
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
const $e = typeof window < "u", lg = (e) => typeof e == "string", Ci = () => {
}, Uo = $e && ((Ks = window?.navigator) == null ? void 0 : Ks.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function da(e) {
  return typeof e == "function" ? e() : u(e);
}
function ig(e) {
  return e;
}
function vr(e) {
  return Hu() ? (Ku(e), !0) : !1;
}
function ug(e, t = !0) {
  Je() ? ke(e) : t ? e() : Le(e);
}
function Ti(e, t, n = {}) {
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
  function i(...c) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...c);
    }, da(t));
  }
  return r && (o.value = !0, $e && i()), vr(l), {
    isPending: Yo(o),
    start: i,
    stop: l
  };
}
function Xt(e) {
  var t;
  const n = da(e);
  return (t = n?.$el) != null ? t : n;
}
const so = $e ? window : void 0;
function Ct(...e) {
  let t, n, r, o;
  if (lg(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = so) : [t, n, r, o] = e, !t)
    return Ci;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, l = (d, p, m, h) => (d.addEventListener(p, m, h), () => d.removeEventListener(p, m, h)), i = le(() => [Xt(t), da(o)], ([d, p]) => {
    s(), d && a.push(...n.flatMap((m) => r.map((h) => l(d, m, h, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), s();
  };
  return vr(c), c;
}
let Gs = !1;
function cg(e, t, n = {}) {
  const { window: r = so, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Uo && !Gs && (Gs = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Ci)));
  let l = !0;
  const i = (m) => o.some((h) => {
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
        if (m.detail === 0 && (l = !i(m)), !l) {
          l = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    Ct(r, "pointerdown", (m) => {
      const h = Xt(e);
      h && (l = !m.composedPath().includes(h) && !i(m));
    }, { passive: !0 }),
    s && Ct(r, "blur", (m) => {
      var h;
      const v = Xt(e);
      ((h = r.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !v?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => d.forEach((m) => m());
}
function Oi(e, t = !1) {
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
  const l = Oi(() => o && "ResizeObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, c = le(() => Xt(e), (p) => {
    i(), l.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), c();
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
  const l = Oi(() => o && "MutationObserver" in o), i = () => {
    s && (s.disconnect(), s = void 0);
  }, c = le(() => Xt(e), (p) => {
    i(), l.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), d = () => {
    i(), c();
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
var bg = Object.defineProperty, Qs = Object.getOwnPropertySymbols, yg = Object.prototype.hasOwnProperty, _g = Object.prototype.propertyIsEnumerable, el = (e, t, n) => t in e ? bg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wg = (e, t) => {
  for (var n in t || (t = {}))
    yg.call(t, n) && el(e, n, t[n]);
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
}, nl = D(0), Ii = 2e3, rl = Symbol("elZIndexContextKey"), Ai = Symbol("zIndexContextKey"), Li = (e) => {
  const t = Je() ? he(rl, tl) : tl, n = e || (Je() ? he(Ai, void 0) : void 0), r = L(() => {
    const s = u(n);
    return ge(s) ? s : Ii;
  }), o = L(() => r.value + nl.value), a = () => (t.current++, nl.value = t.current, o.value);
  return !$e && he(rl), {
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
const Tg = (e) => (t, n) => Og(t, n, u(e)), Og = (e, t, n) => fn(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Ig = (e) => {
  const t = L(() => u(e).name), n = Dr(e) ? e : D(e);
  return {
    lang: t,
    locale: n,
    t: Tg(e)
  };
}, Pi = Symbol("localeContextKey"), ma = (e) => {
  const t = e || he(Pi, D());
  return Ig(L(() => t.value || Cg));
}, Ni = "__epPropKey", re = (e) => e, Ag = (e) => ut(e) && !!e[Ni], lo = (e, t) => {
  if (!ut(e) || Ag(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, i = {
    type: a,
    required: !!r,
    validator: n || s ? (c) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), hs(e, "default") && p.push(o), d || (d = p.includes(c))), s && (d || (d = s(c))), !d && p.length > 0) {
        const m = [...new Set(p)].map((h) => JSON.stringify(h)).join(", ");
        Gu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Ni]: !0
  };
  return hs(e, "default") && (i.default = o), i;
}, Se = (e) => jr(Object.entries(e).map(([t, n]) => [
  t,
  lo(n, t)
])), va = ["", "default", "small", "large"], io = lo({
  type: String,
  values: va,
  required: !1
}), ki = Symbol("size"), Lg = () => {
  const e = he(ki, {});
  return L(() => u(e.size) || "");
}, Ri = Symbol("emptyValuesContextKey"), Pg = ["", void 0, null], Ng = void 0, $i = Se({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ie(e) ? !e() : !e
  }
}), kg = (e, t) => {
  const n = Je() ? he(Ri, D({})) : D({}), r = L(() => e.emptyValues || n.value.emptyValues || Pg), o = L(() => Ie(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ie(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Ng), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, ol = (e) => Object.keys(e), Hr = D();
function Mi(e, t = void 0) {
  return Je() ? he(li, Hr) : Hr;
}
function Fi(e, t) {
  const n = Mi(), r = Me(e, L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || $r;
  })), o = ma(L(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), a = Li(L(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Ii;
  })), s = L(() => {
    var l;
    return u(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return Di(L(() => u(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Di = (e, t, n = !1) => {
  var r;
  const o = !!Je(), a = o ? Mi() : void 0, s = (r = void 0) != null ? r : o ? xt : void 0;
  if (!s)
    return;
  const l = L(() => {
    const i = u(e);
    return a?.value ? Rg(a.value, i) : i;
  });
  return s(li, l), s(Pi, L(() => l.value.locale)), s(ii, L(() => l.value.namespace)), s(Ai, L(() => l.value.zIndex)), s(ki, {
    size: L(() => l.value.size || "")
  }), s(Ri, L(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Hr.value) && (Hr.value = l.value), l;
}, Rg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...ol(e), ...ol(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Ve = "update:modelValue", nn = "change", en = "input";
var Te = (e, t) => {
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
  if (!$e)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const o = t.offsetTop + n.reduce((i, c) => i + c.offsetTop, 0), a = o + t.offsetHeight, s = e.scrollTop, l = s + e.clientHeight;
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
}, Vi = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), xi = (e) => (e.install = ir, e), Mg = Se({
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
    const t = e, n = Me("icon"), r = L(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: $t(o) ? void 0 : Vn(o),
        "--color": a
      };
    });
    return (o, a) => (k(), W("i", $n({
      class: u(n).b(),
      style: u(r)
    }, o.$attrs), [
      ae(o.$slots, "default")
    ], 16));
  }
});
var Vg = /* @__PURE__ */ Te(Dg, [["__file", "icon.vue"]]);
const Re = Ot(Vg);
/*! Element Plus Icons Vue v2.3.1 */
var xg = /* @__PURE__ */ Y({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Bi = xg, Bg = /* @__PURE__ */ Y({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), zg = Bg, Ug = /* @__PURE__ */ Y({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      A("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Wg = Ug, jg = /* @__PURE__ */ Y({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
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
      A("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      A("path", {
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
      A("path", {
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
      A("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      A("path", {
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
      A("path", {
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
      A("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), zi = Jg, Qg = /* @__PURE__ */ Y({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (k(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
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
      A("path", {
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
      A("path", {
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
      A("path", {
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
      A("path", {
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
  validating: zi,
  success: Wg,
  error: ga
}, Wi = () => $e && /firefox/i.test(window.navigator.userAgent);
let Qe;
const fh = {
  height: "0",
  visibility: "hidden",
  overflow: Wi() ? "" : "hidden",
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
  let i = Qe.scrollHeight;
  const c = {};
  s === "border-box" ? i = i + a : s === "content-box" && (i = i - o), Qe.value = "";
  const d = Qe.scrollHeight - o;
  if (ge(t)) {
    let p = d * t;
    s === "border-box" && (p = p + o + a), i = Math.max(p, i), c.minHeight = `${p}px`;
  }
  if (ge(n)) {
    let p = d * n;
    s === "border-box" && (p = p + o + a), i = Math.min(p, i);
  }
  return c.height = `${i}px`, (r = Qe.parentNode) == null || r.removeChild(Qe), Qe = void 0, c;
}
const ji = (e) => e, mh = Se({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), An = (e) => Zv(mh, e), vh = Se({
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
    default: () => ji({})
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
}, hh = ["class", "style"], bh = /^on[A-Z]/, yh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = L(() => (n?.value || []).concat(hh)), o = Je();
  return o ? L(() => {
    var a;
    return jr(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && bh.test(s))));
  }) : L(() => ({}));
}, ha = Symbol("formContextKey"), Yr = Symbol("formItemContextKey"), sl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, _h = Symbol("elIdInjection"), Hi = () => Je() ? he(_h, sl) : sl, uo = (e) => {
  const t = Hi(), n = oa();
  return sg(() => u(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, co = () => {
  const e = he(ha, void 0), t = he(Yr, void 0);
  return {
    form: e,
    formItem: t
  };
}, ba = (e, {
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
  return ke(() => {
    a = le([Gt(e, "id"), n], ([l, i]) => {
      const c = l ?? (i ? void 0 : uo().value);
      c !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !i && c && t.addInputId(c)), o.value = c);
    }, { immediate: !0 });
  }), Zr(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, Ki = (e) => {
  const t = Je();
  return L(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, gr = (e, t = {}) => {
  const n = D(void 0), r = t.prop ? n : Ki("size"), o = t.global ? n : Lg(), a = t.form ? { size: void 0 } : he(ha, void 0), s = t.formItem ? { size: void 0 } : he(Yr, void 0);
  return L(() => r.value || u(e) || s?.size || a?.size || o.value || "");
}, ya = (e) => {
  const t = Ki("disabled"), n = he(ha, void 0);
  return L(() => t.value || u(e) || n?.disabled || !1);
};
function Gi(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Je(), { emit: s } = a, l = dn(), i = D(!1), c = (m) => {
    Ie(t) && t(m) || i.value || (i.value = !0, s("focus", m), n?.());
  }, d = (m) => {
    var h;
    Ie(r) && r(m) || m.relatedTarget && ((h = l.value) != null && h.contains(m.relatedTarget)) || (i.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, h;
    (m = l.value) != null && m.contains(document.activeElement) && l.value !== document.activeElement || (h = e.value) == null || h.focus();
  };
  return le(l, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), Ct(l, "focus", c, !0), Ct(l, "blur", d, !0), Ct(l, "click", p, !0), {
    isFocused: i,
    wrapperRef: l,
    handleFocus: c,
    handleBlur: d
  };
}
const wh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Yi({
  afterComposition: e,
  emit: t
}) {
  const n = D(!1), r = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, o = (l) => {
    var i;
    t?.("compositionupdate", l);
    const c = (i = l.target) == null ? void 0 : i.value, d = c[c.length - 1] || "";
    n.value = !wh(d);
  }, a = (l) => {
    t?.("compositionend", l), n.value && (n.value = !1, Le(() => e(l)));
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
    const l = s.slice(0, Math.max(0, o)), i = s.slice(Math.max(0, a));
    t = {
      selectionStart: o,
      selectionEnd: a,
      value: s,
      beforeTxt: l,
      afterTxt: i
    };
  }
  function r() {
    if (e.value == null || t == null)
      return;
    const { value: o } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: l } = t;
    if (a == null || s == null || l == null)
      return;
    let i = o.length;
    if (o.endsWith(s))
      i = o.length - s.length;
    else if (o.startsWith(a))
      i = a.length;
    else {
      const c = a[l - 1], d = o.indexOf(c, l - 1);
      d !== -1 && (i = d + 1);
    }
    e.value.setSelectionRange(i, i);
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
    const r = e, o = Yu(), a = yh(), s = qu(), l = L(() => [
      r.type === "textarea" ? g.b() : v.b(),
      v.m(m.value),
      v.is("disabled", h.value),
      v.is("exceed", H.value),
      {
        [v.b("group")]: s.prepend || s.append,
        [v.m("prefix")]: s.prefix || r.prefixIcon,
        [v.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [v.bm("suffix", "password-clear")]: te.value && ee.value,
        [v.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), i = L(() => [
      v.e("wrapper"),
      v.is("focus", x.value)
    ]), { form: c, formItem: d } = co(), { inputId: p } = ba(r, {
      formItemContext: d
    }), m = gr(), h = ya(), v = Me("input"), g = Me("textarea"), E = dn(), f = dn(), w = D(!1), I = D(!1), C = D(), b = dn(r.inputStyle), O = L(() => E.value || f.value), { wrapperRef: T, isFocused: x, handleFocus: B, handleBlur: J } = Gi(O, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var y;
        r.validateEvent && ((y = d?.validate) == null || y.call(d, "blur").catch((R) => void 0));
      }
    }), oe = L(() => {
      var y;
      return (y = c?.statusIcon) != null ? y : !1;
    }), Z = L(() => d?.validateState || ""), ie = L(() => Z.value && Ui[Z.value]), Ce = L(() => I.value ? sh : qg), M = L(() => [
      o.style
    ]), F = L(() => [
      r.inputStyle,
      b.value,
      { resize: r.resize }
    ]), P = L(() => Qt(r.modelValue) ? "" : String(r.modelValue)), te = L(() => r.clearable && !h.value && !r.readonly && !!P.value && (x.value || w.value)), ee = L(() => r.showPassword && !h.value && !!P.value && (!!P.value || x.value)), se = L(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !h.value && !r.readonly && !r.showPassword), we = L(() => P.value.length), H = L(() => !!se.value && we.value > Number(r.maxlength)), _e = L(() => !!s.suffix || !!r.suffixIcon || te.value || r.showPassword || se.value || !!Z.value && oe.value), [We, xe] = Eh(E);
    kt(f, (y) => {
      if (be(), !se.value || r.resize !== "both")
        return;
      const R = y[0], { width: ue } = R.contentRect;
      C.value = {
        right: `calc(100% - ${ue + 15 + 6}px)`
      };
    });
    const je = () => {
      const { type: y, autosize: R } = r;
      if (!(!$e || y !== "textarea" || !f.value))
        if (R) {
          const ue = ut(R) ? R.minRows : void 0, me = ut(R) ? R.maxRows : void 0, Ke = al(f.value, ue, me);
          b.value = {
            overflowY: "hidden",
            ...Ke
          }, Le(() => {
            f.value.offsetHeight, b.value = Ke;
          });
        } else
          b.value = {
            minHeight: al(f.value).minHeight
          };
    }, be = ((y) => {
      let R = !1;
      return () => {
        var ue;
        if (R || !r.autosize)
          return;
        ((ue = f.value) == null ? void 0 : ue.offsetParent) === null || (y(), R = !0);
      };
    })(je), rt = () => {
      const y = O.value, R = r.formatter ? r.formatter(P.value) : P.value;
      !y || y.value === R || (y.value = R);
    }, ft = async (y) => {
      We();
      let { value: R } = y.target;
      if (r.formatter && r.parser && (R = r.parser(R)), !bt.value) {
        if (R === P.value) {
          rt();
          return;
        }
        n(Ve, R), n(en, R), await Le(), rt(), xe();
      }
    }, ot = (y) => {
      let { value: R } = y.target;
      r.formatter && r.parser && (R = r.parser(R)), n(nn, R);
    }, {
      isComposing: bt,
      handleCompositionStart: at,
      handleCompositionUpdate: st,
      handleCompositionEnd: lt
    } = Yi({ emit: n, afterComposition: ft }), dt = () => {
      We(), I.value = !I.value, setTimeout(xe);
    }, At = () => {
      var y;
      return (y = O.value) == null ? void 0 : y.focus();
    }, _ = () => {
      var y;
      return (y = O.value) == null ? void 0 : y.blur();
    }, S = (y) => {
      w.value = !1, n("mouseleave", y);
    }, $ = (y) => {
      w.value = !0, n("mouseenter", y);
    }, j = (y) => {
      n("keydown", y);
    }, fe = () => {
      var y;
      (y = O.value) == null || y.select();
    }, ne = () => {
      n(Ve, ""), n(nn, ""), n("clear"), n(en, "");
    };
    return le(() => r.modelValue, () => {
      var y;
      Le(() => je()), r.validateEvent && ((y = d?.validate) == null || y.call(d, "change").catch((R) => void 0));
    }), le(P, () => rt()), le(() => r.type, async () => {
      await Le(), rt(), je();
    }), ke(() => {
      !r.formatter && r.parser, rt(), Le(je);
    }), t({
      input: E,
      textarea: f,
      ref: O,
      textareaStyle: F,
      autosize: Gt(r, "autosize"),
      isComposing: bt,
      focus: At,
      blur: _,
      select: fe,
      clear: ne,
      resizeTextarea: je
    }), (y, R) => (k(), W("div", {
      class: V([
        u(l),
        {
          [u(v).bm("group", "append")]: y.$slots.append,
          [u(v).bm("group", "prepend")]: y.$slots.prepend
        }
      ]),
      style: Be(u(M)),
      onMouseenter: $,
      onMouseleave: S
    }, [
      K(" input "),
      y.type !== "textarea" ? (k(), W(et, { key: 0 }, [
        K(" prepend slot "),
        y.$slots.prepend ? (k(), W("div", {
          key: 0,
          class: V(u(v).be("group", "prepend"))
        }, [
          ae(y.$slots, "prepend")
        ], 2)) : K("v-if", !0),
        A("div", {
          ref_key: "wrapperRef",
          ref: T,
          class: V(u(i))
        }, [
          K(" prefix slot "),
          y.$slots.prefix || y.prefixIcon ? (k(), W("span", {
            key: 0,
            class: V(u(v).e("prefix"))
          }, [
            A("span", {
              class: V(u(v).e("prefix-inner"))
            }, [
              ae(y.$slots, "prefix"),
              y.prefixIcon ? (k(), Q(u(Re), {
                key: 0,
                class: V(u(v).e("icon"))
              }, {
                default: G(() => [
                  (k(), Q(Ze(y.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : K("v-if", !0)
            ], 2)
          ], 2)) : K("v-if", !0),
          A("input", $n({
            id: u(p),
            ref_key: "input",
            ref: E,
            class: u(v).e("inner")
          }, u(a), {
            minlength: y.minlength,
            maxlength: y.maxlength,
            type: y.showPassword ? I.value ? "text" : "password" : y.type,
            disabled: u(h),
            readonly: y.readonly,
            autocomplete: y.autocomplete,
            tabindex: y.tabindex,
            "aria-label": y.ariaLabel,
            placeholder: y.placeholder,
            style: y.inputStyle,
            form: y.form,
            autofocus: y.autofocus,
            role: y.containerRole,
            onCompositionstart: u(at),
            onCompositionupdate: u(st),
            onCompositionend: u(lt),
            onInput: ft,
            onChange: ot,
            onKeydown: j
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          K(" suffix slot "),
          u(_e) ? (k(), W("span", {
            key: 1,
            class: V(u(v).e("suffix"))
          }, [
            A("span", {
              class: V(u(v).e("suffix-inner"))
            }, [
              !u(te) || !u(ee) || !u(se) ? (k(), W(et, { key: 0 }, [
                ae(y.$slots, "suffix"),
                y.suffixIcon ? (k(), Q(u(Re), {
                  key: 0,
                  class: V(u(v).e("icon"))
                }, {
                  default: G(() => [
                    (k(), Q(Ze(y.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : K("v-if", !0)
              ], 64)) : K("v-if", !0),
              u(te) ? (k(), Q(u(Re), {
                key: 1,
                class: V([u(v).e("icon"), u(v).e("clear")]),
                onMousedown: Ae(u(ir), ["prevent"]),
                onClick: ne
              }, {
                default: G(() => [
                  q(u(ga))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : K("v-if", !0),
              u(ee) ? (k(), Q(u(Re), {
                key: 2,
                class: V([u(v).e("icon"), u(v).e("password")]),
                onClick: dt
              }, {
                default: G(() => [
                  (k(), Q(Ze(u(Ce))))
                ]),
                _: 1
              }, 8, ["class"])) : K("v-if", !0),
              u(se) ? (k(), W("span", {
                key: 3,
                class: V(u(v).e("count"))
              }, [
                A("span", {
                  class: V(u(v).e("count-inner"))
                }, U(u(we)) + " / " + U(y.maxlength), 3)
              ], 2)) : K("v-if", !0),
              u(Z) && u(ie) && u(oe) ? (k(), Q(u(Re), {
                key: 4,
                class: V([
                  u(v).e("icon"),
                  u(v).e("validateIcon"),
                  u(v).is("loading", u(Z) === "validating")
                ])
              }, {
                default: G(() => [
                  (k(), Q(Ze(u(ie))))
                ]),
                _: 1
              }, 8, ["class"])) : K("v-if", !0)
            ], 2)
          ], 2)) : K("v-if", !0)
        ], 2),
        K(" append slot "),
        y.$slots.append ? (k(), W("div", {
          key: 1,
          class: V(u(v).be("group", "append"))
        }, [
          ae(y.$slots, "append")
        ], 2)) : K("v-if", !0)
      ], 64)) : (k(), W(et, { key: 1 }, [
        K(" textarea "),
        A("textarea", $n({
          id: u(p),
          ref_key: "textarea",
          ref: f,
          class: [u(g).e("inner"), u(v).is("focus", u(x))]
        }, u(a), {
          minlength: y.minlength,
          maxlength: y.maxlength,
          tabindex: y.tabindex,
          disabled: u(h),
          readonly: y.readonly,
          autocomplete: y.autocomplete,
          style: u(F),
          "aria-label": y.ariaLabel,
          placeholder: y.placeholder,
          form: y.form,
          autofocus: y.autofocus,
          rows: y.rows,
          role: y.containerRole,
          onCompositionstart: u(at),
          onCompositionupdate: u(st),
          onCompositionend: u(lt),
          onInput: ft,
          onFocus: u(B),
          onBlur: u(J),
          onChange: ot,
          onKeydown: j
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        u(se) ? (k(), W("span", {
          key: 0,
          style: Be(C.value),
          class: V(u(v).e("count"))
        }, U(u(we)) + " / " + U(y.maxlength), 7)) : K("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Oh = /* @__PURE__ */ Te(Th, [["__file", "input.vue"]]);
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
}), _a = Symbol("scrollbarContextKey"), Ph = Se({
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
    const t = e, n = he(_a), r = Me("scrollbar");
    n || pa(Nh, "can not inject scrollbar context");
    const o = D(), a = D(), s = D({}), l = D(!1);
    let i = !1, c = !1, d = $e ? document.onselectstart : null;
    const p = L(() => Ah[t.vertical ? "vertical" : "horizontal"]), m = L(() => Lh({
      size: t.size,
      move: t.move,
      bar: p.value
    })), h = L(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), v = (O) => {
      var T;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (T = window.getSelection()) == null || T.removeAllRanges(), E(O);
      const x = O.currentTarget;
      x && (s.value[p.value.axis] = x[p.value.offset] - (O[p.value.client] - x.getBoundingClientRect()[p.value.direction]));
    }, g = (O) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const T = Math.abs(O.target.getBoundingClientRect()[p.value.direction] - O[p.value.client]), x = a.value[p.value.offset] / 2, B = (T - x) * 100 * h.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = B * n.wrapElement[p.value.scrollSize] / 100;
    }, E = (O) => {
      O.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", w), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (O) => {
      if (!o.value || !a.value || i === !1)
        return;
      const T = s.value[p.value.axis];
      if (!T)
        return;
      const x = (o.value.getBoundingClientRect()[p.value.direction] - O[p.value.client]) * -1, B = a.value[p.value.offset] - T, J = (x - B) * 100 * h.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = J * n.wrapElement[p.value.scrollSize] / 100;
    }, w = () => {
      i = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", w), b(), c && (l.value = !1);
    }, I = () => {
      c = !1, l.value = !!t.size;
    }, C = () => {
      c = !0, l.value = i;
    };
    Ut(() => {
      b(), document.removeEventListener("mouseup", w);
    });
    const b = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Ct(Gt(n, "scrollbarElement"), "mousemove", I), Ct(Gt(n, "scrollbarElement"), "mouseleave", C), (O, T) => (k(), Q(Hn, {
      name: u(r).b("fade"),
      persisted: ""
    }, {
      default: G(() => [
        ze(A("div", {
          ref_key: "instance",
          ref: o,
          class: V([u(r).e("bar"), u(r).is(u(p).key)]),
          onMousedown: g
        }, [
          A("div", {
            ref_key: "thumb",
            ref: a,
            class: V(u(r).e("thumb")),
            style: Be(u(m)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [tn, O.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ll = /* @__PURE__ */ Te(kh, [["__file", "thumb.vue"]]);
const Rh = Se({
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
    const n = e, r = he(_a), o = D(0), a = D(0), s = D(""), l = D(""), i = D(1), c = D(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const h = m.offsetHeight - Pn, v = m.offsetWidth - Pn;
          a.value = m.scrollTop * 100 / h * i.value, o.value = m.scrollLeft * 100 / v * c.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const h = m.offsetHeight - Pn, v = m.offsetWidth - Pn, g = h ** 2 / m.scrollHeight, E = v ** 2 / m.scrollWidth, f = Math.max(g, n.minSize), w = Math.max(E, n.minSize);
        i.value = g / (h - g) / (f / (h - f)), c.value = E / (v - E) / (w / (v - w)), l.value = f + Pn < h ? `${f}px` : "", s.value = w + Pn < v ? `${w}px` : "";
      }
    }), (m, h) => (k(), W(et, null, [
      q(ll, {
        move: o.value,
        ratio: c.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      q(ll, {
        move: a.value,
        ratio: i.value,
        size: l.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Mh = /* @__PURE__ */ Te($h, [["__file", "bar.vue"]]);
const Fh = Se({
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
    const r = e, o = Me("scrollbar");
    let a, s, l = 0, i = 0;
    const c = D(), d = D(), p = D(), m = D(), h = L(() => {
      const b = {};
      return r.height && (b.height = Vn(r.height)), r.maxHeight && (b.maxHeight = Vn(r.maxHeight)), [r.wrapStyle, b];
    }), v = L(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = L(() => [o.e("view"), r.viewClass]), E = () => {
      var b;
      d.value && ((b = m.value) == null || b.handleScroll(d.value), l = d.value.scrollTop, i = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function f(b, O) {
      ut(b) ? d.value.scrollTo(b) : ge(b) && ge(O) && d.value.scrollTo(b, O);
    }
    const w = (b) => {
      ge(b) && (d.value.scrollTop = b);
    }, I = (b) => {
      ge(b) && (d.value.scrollLeft = b);
    }, C = () => {
      var b;
      (b = m.value) == null || b.update();
    };
    return le(() => r.noresize, (b) => {
      b ? (a?.(), s?.()) : ({ stop: a } = kt(p, C), s = Ct("resize", C));
    }, { immediate: !0 }), le(() => [r.maxHeight, r.height], () => {
      r.native || Le(() => {
        var b;
        C(), d.value && ((b = m.value) == null || b.handleScroll(d.value));
      });
    }), xt(_a, En({
      scrollbarElement: c,
      wrapElement: d
    })), Xu(() => {
      d.value && (d.value.scrollTop = l, d.value.scrollLeft = i);
    }), ke(() => {
      r.native || Le(() => {
        C();
      });
    }), Ml(() => C()), t({
      wrapRef: d,
      update: C,
      scrollTo: f,
      setScrollTop: w,
      setScrollLeft: I,
      handleScroll: E
    }), (b, O) => (k(), W("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: V(u(o).b())
    }, [
      A("div", {
        ref_key: "wrapRef",
        ref: d,
        class: V(u(v)),
        style: Be(u(h)),
        tabindex: b.tabindex,
        onScroll: E
      }, [
        (k(), Q(Ze(b.tag), {
          id: b.id,
          ref_key: "resizeRef",
          ref: p,
          class: V(u(g)),
          style: Be(b.viewStyle),
          role: b.role,
          "aria-label": b.ariaLabel,
          "aria-orientation": b.ariaOrientation
        }, {
          default: G(() => [
            ae(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      b.native ? K("v-if", !0) : (k(), Q(Mh, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: b.always,
        "min-size": b.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var zh = /* @__PURE__ */ Te(Bh, [["__file", "scrollbar.vue"]]);
const Uh = Ot(zh), wa = Symbol("popper"), qi = Symbol("popperContent"), Wh = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Xi = Se({
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
  props: Xi,
  setup(e, { expose: t }) {
    const n = e, r = D(), o = D(), a = D(), s = D(), l = L(() => n.role), i = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: l
    };
    return t(i), xt(wa, i), (c, d) => ae(c.$slots, "default");
  }
});
var Kh = /* @__PURE__ */ Te(Hh, [["__file", "popper.vue"]]);
const Zi = Se({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Gh = Y({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Yh = /* @__PURE__ */ Y({
  ...Gh,
  props: Zi,
  setup(e, { expose: t }) {
    const n = e, r = Me("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = he(qi, void 0);
    return le(() => n.arrowOffset, (l) => {
      o.value = l;
    }), Ut(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (l, i) => (k(), W("span", {
      ref_key: "arrowRef",
      ref: a,
      class: V(u(r).e("arrow")),
      style: Be(u(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var qh = /* @__PURE__ */ Te(Yh, [["__file", "arrow.vue"]]);
const Ji = Se({
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
}), Qi = Symbol("elForwardRef"), Xh = (e) => {
  xt(Qi, {
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
    const o = he(Qi), a = Zh((r = o?.setForwardRef) != null ? r : ir);
    return () => {
      var s;
      const l = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!l || l.length > 1)
        return null;
      const i = eu(l);
      return i ? ze(Zu(i, n), [[a]]) : null;
    };
  }
});
function eu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (ut(n))
      switch (n.type) {
        case Ju:
          continue;
        case Rl:
        case "svg":
          return il(n);
        case et:
          return eu(n.children);
        default:
          return n;
      }
    return il(n);
  }
  return null;
}
function il(e) {
  const t = Me("only-child");
  return q("span", {
    class: t.e("content")
  }, [e]);
}
const e0 = Y({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), t0 = /* @__PURE__ */ Y({
  ...e0,
  props: Ji,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = he(wa, void 0);
    Xh(o);
    const a = L(() => l.value ? n.id : void 0), s = L(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = L(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), i = L(() => l.value ? `${n.open}` : void 0);
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
    return ke(() => {
      le(() => n.virtualRef, (p) => {
        p && (o.value = Xt(p));
      }, {
        immediate: !0
      }), le(o, (p, m) => {
        c?.(), c = void 0, St(p) && (d.forEach((h) => {
          var v;
          const g = n[h];
          g && (p.addEventListener(h.slice(2).toLowerCase(), g), (v = m?.removeEventListener) == null || v.call(m, h.slice(2).toLowerCase(), g));
        }), Wo(p) && (c = le([a, s, l, i], (h) => {
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
    }), Ut(() => {
      if (c?.(), c = void 0, o.value && St(o.value)) {
        const p = o.value;
        d.forEach((m) => {
          const h = n[m];
          h && p.removeEventListener(m.slice(2).toLowerCase(), h);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? K("v-if", !0) : (k(), Q(u(Qh), $n({ key: 0 }, p.$attrs, {
      "aria-controls": u(a),
      "aria-describedby": u(s),
      "aria-expanded": u(i),
      "aria-haspopup": u(l)
    }), {
      default: G(() => [
        ae(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var n0 = /* @__PURE__ */ Te(t0, [["__file", "trigger.vue"]]);
const To = "focus-trap.focus-after-trapped", Oo = "focus-trap.focus-after-released", r0 = "focus-trap.focusout-prevented", ul = {
  cancelable: !0,
  bubbles: !1
}, o0 = {
  cancelable: !0,
  bubbles: !1
}, cl = "focusAfterTrapped", fl = "focusAfterReleased", a0 = Symbol("elFocusTrap"), Ea = D(), fo = D(0), Sa = D(0);
let Ir = 0;
const tu = (e) => {
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
  const t = tu(e), n = dl(t, e), r = dl(t.reverse(), e);
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
}, d0 = () => (ke(() => {
  Ir === 0 && (document.addEventListener("mousedown", Ar), document.addEventListener("touchstart", Ar), document.addEventListener("keydown", vl)), Ir++;
}), Ut(() => {
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
  ke(() => {
    Rn.length === 0 && document.addEventListener("keydown", gl), $e && Rn.push(e);
  }), Ut(() => {
    Rn = Rn.filter((t) => t !== e), Rn.length === 0 && $e && document.removeEventListener("keydown", gl);
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
      const { code: g, altKey: E, ctrlKey: f, metaKey: w, currentTarget: I, shiftKey: C } = v, { loop: b } = e, O = g === Dt.tab && !E && !f && !w, T = document.activeElement;
      if (O && T) {
        const x = I, [B, J] = l0(x);
        if (B && J) {
          if (!C && T === J) {
            const Z = Lr({
              focusReason: a.value
            });
            t("focusout-prevented", Z), Z.defaultPrevented || (v.preventDefault(), b && Ht(B, !0));
          } else if (C && [B, x].includes(T)) {
            const Z = Lr({
              focusReason: a.value
            });
            t("focusout-prevented", Z), Z.defaultPrevented || (v.preventDefault(), b && Ht(J, !0));
          }
        } else if (T === x) {
          const Z = Lr({
            focusReason: a.value
          });
          t("focusout-prevented", Z), Z.defaultPrevented || v.preventDefault();
        }
      }
    };
    xt(a0, {
      focusTrapRef: n,
      onKeydown: l
    }), le(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), le([n], ([v], [g]) => {
      v && (v.addEventListener("keydown", l), v.addEventListener("focusin", d), v.addEventListener("focusout", p)), g && (g.removeEventListener("keydown", l), g.removeEventListener("focusin", d), g.removeEventListener("focusout", p));
    });
    const i = (v) => {
      t(cl, v);
    }, c = (v) => t(fl, v), d = (v) => {
      const g = u(n);
      if (!g)
        return;
      const E = v.target, f = v.relatedTarget, w = E && g.contains(E);
      e.trapped || f && g.contains(f) || (r = f), w && t("focusin", v), !s.paused && e.trapped && (w ? o = E : Ht(o, !0));
    }, p = (v) => {
      const g = u(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const E = v.relatedTarget;
          !Qt(E) && !g.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = Lr({
                focusReason: a.value
              });
              t("focusout-prevented", f), f.defaultPrevented || Ht(o, !0);
            }
          }, 0);
        } else {
          const E = v.target;
          E && g.contains(E) || t("focusout", v);
        }
    };
    async function m() {
      await Le();
      const v = u(n);
      if (v) {
        ml.push(s);
        const g = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !v.contains(g)) {
          const f = new Event(To, ul);
          v.addEventListener(To, i), v.dispatchEvent(f), f.defaultPrevented || Le(() => {
            let w = e.focusStartEl;
            qe(w) || (Ht(w), document.activeElement !== w && (w = "first")), w === "first" && c0(tu(v), !0), (document.activeElement === g || w === "container") && Ht(v);
          });
        }
      }
    }
    function h() {
      const v = u(n);
      if (v) {
        v.removeEventListener(To, i);
        const g = new CustomEvent(Oo, {
          ...ul,
          detail: {
            focusReason: a.value
          }
        });
        v.addEventListener(Oo, c), v.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !f0() || v.contains(document.activeElement)) && Ht(r ?? document.body), v.removeEventListener(Oo, c), ml.remove(s);
      }
    }
    return ke(() => {
      e.trapped && m(), le(() => e.trapped, (v) => {
        v ? m() : h();
      });
    }), Ut(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function v0(e, t, n, r, o, a) {
  return ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var g0 = /* @__PURE__ */ Te(m0, [["render", v0], ["__file", "focus-trap.vue"]]), tt = "top", gt = "bottom", ht = "right", nt = "left", Ca = "auto", hr = [tt, gt, ht, nt], xn = "start", fr = "end", h0 = "clippingParents", nu = "viewport", Xn = "popper", b0 = "reference", hl = hr.reduce(function(e, t) {
  return e.concat([t + "-" + xn, t + "-" + fr]);
}, []), po = [].concat(hr, [Ca]).reduce(function(e, t) {
  return e.concat([t, t + "-" + xn, t + "-" + fr]);
}, []), y0 = "beforeRead", _0 = "read", w0 = "afterRead", E0 = "beforeMain", S0 = "main", C0 = "afterMain", T0 = "beforeWrite", O0 = "write", I0 = "afterWrite", A0 = [y0, _0, w0, E0, S0, C0, T0, O0, I0];
function zt(e) {
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
    !vt(a) || !zt(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function P0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(i, c) {
        return i[c] = "", i;
      }, {});
      !vt(o) || !zt(o) || (Object.assign(o.style, l), Object.keys(a).forEach(function(i) {
        o.removeAttribute(i);
      }));
    });
  };
}
var ru = { name: "applyStyles", enabled: !0, phase: "write", fn: L0, effect: P0, requires: ["computeStyles"] };
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
function ou() {
  return !/^((?!chrome|android).)*safari/i.test(jo());
}
function zn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && vt(e) && (o = e.offsetWidth > 0 && Bn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Bn(r.height) / e.offsetHeight || 1);
  var s = Cn(e) ? ct(e) : window, l = s.visualViewport, i = !ou() && n, c = (r.left + (i && l ? l.offsetLeft : 0)) / o, d = (r.top + (i && l ? l.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: d, right: c + p, bottom: d + m, left: c, x: c, y: d };
}
function Oa(e) {
  var t = zn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function au(e, t) {
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
  return ["table", "td", "th"].indexOf(zt(e)) >= 0;
}
function hn(e) {
  return ((Cn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function mo(e) {
  return zt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ta(e) ? e.host : null) || hn(e);
}
function bl(e) {
  return !vt(e) || rn(e).position === "fixed" ? null : e.offsetParent;
}
function k0(e) {
  var t = /firefox/i.test(jo()), n = /Trident/i.test(jo());
  if (n && vt(e)) {
    var r = rn(e);
    if (r.position === "fixed") return null;
  }
  var o = mo(e);
  for (Ta(o) && (o = o.host); vt(o) && ["html", "body"].indexOf(zt(o)) < 0; ) {
    var a = rn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function br(e) {
  for (var t = ct(e), n = bl(e); n && N0(n) && rn(n).position === "static"; ) n = bl(n);
  return n && (zt(n) === "html" || zt(n) === "body" && rn(n).position === "static") ? t : n || k0(e) || t;
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
function su() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function lu(e) {
  return Object.assign({}, su(), e);
}
function iu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var $0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, lu(typeof e != "number" ? e : iu(e, hr));
};
function M0(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Vt(n.placement), i = Ia(l), c = [nt, ht].indexOf(l) >= 0, d = c ? "height" : "width";
  if (!(!a || !s)) {
    var p = $0(o.padding, n), m = Oa(a), h = i === "y" ? tt : nt, v = i === "y" ? gt : ht, g = n.rects.reference[d] + n.rects.reference[i] - s[i] - n.rects.popper[d], E = s[i] - n.rects.reference[i], f = br(a), w = f ? i === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, I = g / 2 - E / 2, C = p[h], b = w - m[d] - p[v], O = w / 2 - m[d] / 2 + I, T = er(C, O, b), x = i;
    n.modifiersData[r] = (t = {}, t[x] = T, t.centerOffset = T - O, t);
  }
}
function F0(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || au(t.elements.popper, o) && (t.elements.arrow = o));
}
var D0 = { name: "arrow", enabled: !0, phase: "main", fn: M0, effect: F0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Un(e) {
  return e.split("-")[1];
}
var V0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function x0(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Bn(n * o) / o || 0, y: Bn(r * o) / o || 0 };
}
function yl(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, l = e.position, i = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = s.x, h = m === void 0 ? 0 : m, v = s.y, g = v === void 0 ? 0 : v, E = typeof d == "function" ? d({ x: h, y: g }) : { x: h, y: g };
  h = E.x, g = E.y;
  var f = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), I = nt, C = tt, b = window;
  if (c) {
    var O = br(n), T = "clientHeight", x = "clientWidth";
    if (O === ct(n) && (O = hn(n), rn(O).position !== "static" && l === "absolute" && (T = "scrollHeight", x = "scrollWidth")), O = O, o === tt || (o === nt || o === ht) && a === fr) {
      C = gt;
      var B = p && O === b && b.visualViewport ? b.visualViewport.height : O[T];
      g -= B - r.height, g *= i ? 1 : -1;
    }
    if (o === nt || (o === tt || o === gt) && a === fr) {
      I = ht;
      var J = p && O === b && b.visualViewport ? b.visualViewport.width : O[x];
      h -= J - r.width, h *= i ? 1 : -1;
    }
  }
  var oe = Object.assign({ position: l }, c && V0), Z = d === !0 ? x0({ x: h, y: g }, ct(n)) : { x: h, y: g };
  if (h = Z.x, g = Z.y, i) {
    var ie;
    return Object.assign({}, oe, (ie = {}, ie[C] = w ? "0" : "", ie[I] = f ? "0" : "", ie.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", ie));
  }
  return Object.assign({}, oe, (t = {}, t[C] = w ? g + "px" : "", t[I] = f ? h + "px" : "", t.transform = "", t));
}
function B0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, i = l === void 0 ? !0 : l, c = { placement: Vt(t.placement), variation: Un(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, yl(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, yl(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var uu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: B0, data: {} }, Pr = { passive: !0 };
function z0(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, i = ct(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Pr);
  }), l && i.addEventListener("resize", n.update, Pr), function() {
    a && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Pr);
    }), l && i.removeEventListener("resize", n.update, Pr);
  };
}
var cu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: z0, data: {} }, U0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Mr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return U0[t];
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
  return zn(hn(e)).left + Aa(e).scrollLeft;
}
function j0(e, t) {
  var n = ct(e), r = hn(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, l = 0, i = 0;
  if (o) {
    a = o.width, s = o.height;
    var c = ou();
    (c || !c && t === "fixed") && (l = o.offsetLeft, i = o.offsetTop);
  }
  return { width: a, height: s, x: l + La(e), y: i };
}
function H0(e) {
  var t, n = hn(e), r = Aa(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = wn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = wn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + La(e), i = -r.scrollTop;
  return rn(o || n).direction === "rtl" && (l += wn(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: l, y: i };
}
function Pa(e) {
  var t = rn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function fu(e) {
  return ["html", "body", "#document"].indexOf(zt(e)) >= 0 ? e.ownerDocument.body : vt(e) && Pa(e) ? e : fu(mo(e));
}
function tr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = fu(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ct(r), s = o ? [a].concat(a.visualViewport || [], Pa(r) ? r : []) : r, l = t.concat(s);
  return o ? l : l.concat(tr(mo(s)));
}
function Ho(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function K0(e, t) {
  var n = zn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function wl(e, t, n) {
  return t === nu ? Ho(j0(e, n)) : Cn(t) ? K0(t, n) : Ho(H0(hn(e)));
}
function G0(e) {
  var t = tr(mo(e)), n = ["absolute", "fixed"].indexOf(rn(e).position) >= 0, r = n && vt(e) ? br(e) : e;
  return Cn(r) ? t.filter(function(o) {
    return Cn(o) && au(o, r) && zt(o) !== "body";
  }) : [];
}
function Y0(e, t, n, r) {
  var o = t === "clippingParents" ? G0(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], l = a.reduce(function(i, c) {
    var d = wl(e, c, r);
    return i.top = wn(d.top, i.top), i.right = qr(d.right, i.right), i.bottom = qr(d.bottom, i.bottom), i.left = wn(d.left, i.left), i;
  }, wl(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function du(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Vt(r) : null, a = r ? Un(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, i;
  switch (o) {
    case tt:
      i = { x: s, y: t.y - n.height };
      break;
    case gt:
      i = { x: s, y: t.y + t.height };
      break;
    case ht:
      i = { x: t.x + t.width, y: l };
      break;
    case nt:
      i = { x: t.x - n.width, y: l };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var c = o ? Ia(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (a) {
      case xn:
        i[c] = i[c] - (t[d] / 2 - n[d] / 2);
        break;
      case fr:
        i[c] = i[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function dr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, i = l === void 0 ? h0 : l, c = n.rootBoundary, d = c === void 0 ? nu : c, p = n.elementContext, m = p === void 0 ? Xn : p, h = n.altBoundary, v = h === void 0 ? !1 : h, g = n.padding, E = g === void 0 ? 0 : g, f = lu(typeof E != "number" ? E : iu(E, hr)), w = m === Xn ? b0 : Xn, I = e.rects.popper, C = e.elements[v ? w : m], b = Y0(Cn(C) ? C : C.contextElement || hn(e.elements.popper), i, d, s), O = zn(e.elements.reference), T = du({ reference: O, element: I, placement: o }), x = Ho(Object.assign({}, I, T)), B = m === Xn ? x : O, J = { top: b.top - B.top + f.top, bottom: B.bottom - b.bottom + f.bottom, left: b.left - B.left + f.left, right: B.right - b.right + f.right }, oe = e.modifiersData.offset;
  if (m === Xn && oe) {
    var Z = oe[o];
    Object.keys(J).forEach(function(ie) {
      var Ce = [ht, gt].indexOf(ie) >= 0 ? 1 : -1, M = [tt, gt].indexOf(ie) >= 0 ? "y" : "x";
      J[ie] += Z[M] * Ce;
    });
  }
  return J;
}
function q0(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, i = n.allowedAutoPlacements, c = i === void 0 ? po : i, d = Un(r), p = d ? l ? hl : hl.filter(function(v) {
    return Un(v) === d;
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
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, i = n.fallbackPlacements, c = n.padding, d = n.boundary, p = n.rootBoundary, m = n.altBoundary, h = n.flipVariations, v = h === void 0 ? !0 : h, g = n.allowedAutoPlacements, E = t.options.placement, f = Vt(E), w = f === E, I = i || (w || !v ? [Mr(E)] : X0(E)), C = [E].concat(I).reduce(function(We, xe) {
      return We.concat(Vt(xe) === Ca ? q0(t, { placement: xe, boundary: d, rootBoundary: p, padding: c, flipVariations: v, allowedAutoPlacements: g }) : xe);
    }, []), b = t.rects.reference, O = t.rects.popper, T = /* @__PURE__ */ new Map(), x = !0, B = C[0], J = 0; J < C.length; J++) {
      var oe = C[J], Z = Vt(oe), ie = Un(oe) === xn, Ce = [tt, gt].indexOf(Z) >= 0, M = Ce ? "width" : "height", F = dr(t, { placement: oe, boundary: d, rootBoundary: p, altBoundary: m, padding: c }), P = Ce ? ie ? ht : nt : ie ? gt : tt;
      b[M] > O[M] && (P = Mr(P));
      var te = Mr(P), ee = [];
      if (a && ee.push(F[Z] <= 0), l && ee.push(F[P] <= 0, F[te] <= 0), ee.every(function(We) {
        return We;
      })) {
        B = oe, x = !1;
        break;
      }
      T.set(oe, ee);
    }
    if (x) for (var se = v ? 3 : 1, we = function(We) {
      var xe = C.find(function(je) {
        var He = T.get(je);
        if (He) return He.slice(0, We).every(function(be) {
          return be;
        });
      });
      if (xe) return B = xe, "break";
    }, H = se; H > 0; H--) {
      var _e = we(H);
      if (_e === "break") break;
    }
    t.placement !== B && (t.modifiersData[r]._skip = !0, t.placement = B, t.reset = !0);
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
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = dr(t, { elementContext: "reference" }), l = dr(t, { altBoundary: !0 }), i = El(s, r), c = El(l, o, a), d = Sl(i), p = Sl(c);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var eb = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Q0 };
function tb(e, t, n) {
  var r = Vt(e), o = [nt, tt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * o, [nt, ht].indexOf(r) >= 0 ? { x: l, y: s } : { x: s, y: l };
}
function nb(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = po.reduce(function(d, p) {
    return d[p] = tb(p, t.rects, a), d;
  }, {}), l = s[t.placement], i = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
var rb = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: nb };
function ob(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = du({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var pu = { name: "popperOffsets", enabled: !0, phase: "read", fn: ob, data: {} };
function ab(e) {
  return e === "x" ? "y" : "x";
}
function sb(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, i = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.padding, m = n.tether, h = m === void 0 ? !0 : m, v = n.tetherOffset, g = v === void 0 ? 0 : v, E = dr(t, { boundary: i, rootBoundary: c, padding: p, altBoundary: d }), f = Vt(t.placement), w = Un(t.placement), I = !w, C = Ia(f), b = ab(C), O = t.modifiersData.popperOffsets, T = t.rects.reference, x = t.rects.popper, B = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, J = typeof B == "number" ? { mainAxis: B, altAxis: B } : Object.assign({ mainAxis: 0, altAxis: 0 }, B), oe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Z = { x: 0, y: 0 };
  if (O) {
    if (a) {
      var ie, Ce = C === "y" ? tt : nt, M = C === "y" ? gt : ht, F = C === "y" ? "height" : "width", P = O[C], te = P + E[Ce], ee = P - E[M], se = h ? -x[F] / 2 : 0, we = w === xn ? T[F] : x[F], H = w === xn ? -x[F] : -T[F], _e = t.elements.arrow, We = h && _e ? Oa(_e) : { width: 0, height: 0 }, xe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : su(), je = xe[Ce], He = xe[M], be = er(0, T[F], We[F]), rt = I ? T[F] / 2 - se - be - je - J.mainAxis : we - be - je - J.mainAxis, ft = I ? -T[F] / 2 + se + be + He + J.mainAxis : H + be + He + J.mainAxis, ot = t.elements.arrow && br(t.elements.arrow), bt = ot ? C === "y" ? ot.clientTop || 0 : ot.clientLeft || 0 : 0, at = (ie = oe?.[C]) != null ? ie : 0, st = P + rt - at - bt, lt = P + ft - at, dt = er(h ? qr(te, st) : te, P, h ? wn(ee, lt) : ee);
      O[C] = dt, Z[C] = dt - P;
    }
    if (l) {
      var At, _ = C === "x" ? tt : nt, S = C === "x" ? gt : ht, $ = O[b], j = b === "y" ? "height" : "width", fe = $ + E[_], ne = $ - E[S], y = [tt, nt].indexOf(f) !== -1, R = (At = oe?.[b]) != null ? At : 0, ue = y ? fe : $ - T[j] - x[j] - R + J.altAxis, me = y ? $ + T[j] + x[j] - R - J.altAxis : ne, Ke = h && y ? R0(ue, $, me) : er(h ? ue : fe, $, h ? me : ne);
      O[b] = Ke, Z[b] = Ke - $;
    }
    t.modifiersData[r] = Z;
  }
}
var lb = { name: "preventOverflow", enabled: !0, phase: "main", fn: sb, requiresIfExists: ["offset"] };
function ib(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ub(e) {
  return e === ct(e) || !vt(e) ? Aa(e) : ib(e);
}
function cb(e) {
  var t = e.getBoundingClientRect(), n = Bn(t.width) / e.offsetWidth || 1, r = Bn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function fb(e, t, n) {
  n === void 0 && (n = !1);
  var r = vt(t), o = vt(t) && cb(t), a = hn(t), s = zn(e, o, n), l = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (r || !r && !n) && ((zt(t) !== "body" || Pa(a)) && (l = ub(t)), vt(t) ? (i = zn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : a && (i.x = La(a))), { x: s.left + l.scrollLeft - i.x, y: s.top + l.scrollTop - i.y, width: s.width, height: s.height };
}
function db(e) {
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
function pb(e) {
  var t = db(e);
  return A0.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function mb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function vb(e) {
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
  return function(s, l, i) {
    i === void 0 && (i = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Cl, a), modifiersData: {}, elements: { reference: s, popper: l }, attributes: {}, styles: {} }, d = [], p = !1, m = { state: c, setOptions: function(g) {
      var E = typeof g == "function" ? g(c.options) : g;
      v(), c.options = Object.assign({}, a, c.options, E), c.scrollParents = { reference: Cn(s) ? tr(s) : s.contextElement ? tr(s.contextElement) : [], popper: tr(l) };
      var f = pb(vb([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = f.filter(function(w) {
        return w.enabled;
      }), h(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var g = c.elements, E = g.reference, f = g.popper;
        if (Tl(E, f)) {
          c.rects = { reference: fb(E, br(f), c.options.strategy === "fixed"), popper: Oa(f) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(x) {
            return c.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var w = 0; w < c.orderedModifiers.length; w++) {
            if (c.reset === !0) {
              c.reset = !1, w = -1;
              continue;
            }
            var I = c.orderedModifiers[w], C = I.fn, b = I.options, O = b === void 0 ? {} : b, T = I.name;
            typeof C == "function" && (c = C({ state: c, options: O, name: T, instance: m }) || c);
          }
        }
      }
    }, update: mb(function() {
      return new Promise(function(g) {
        m.forceUpdate(), g(c);
      });
    }), destroy: function() {
      v(), p = !0;
    } };
    if (!Tl(s, l)) return m;
    m.setOptions(i).then(function(g) {
      !p && i.onFirstUpdate && i.onFirstUpdate(g);
    });
    function h() {
      c.orderedModifiers.forEach(function(g) {
        var E = g.name, f = g.options, w = f === void 0 ? {} : f, I = g.effect;
        if (typeof I == "function") {
          var C = I({ state: c, name: E, instance: m, options: w }), b = function() {
          };
          d.push(C || b);
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
var gb = [cu, pu, uu, ru];
Na({ defaultModifiers: gb });
var hb = [cu, pu, uu, ru, rb, J0, lb, D0, eb], bb = Na({ defaultModifiers: hb });
const yb = ["fixed", "absolute"], _b = Se({
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
    values: yb,
    default: "absolute"
  }
}), mu = Se({
  ..._b,
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
}), wb = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Eb = (e, t) => {
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
}, Sb = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Tb(e), ...t]
  };
  return Ob(a, o?.modifiers), a;
}, Cb = (e) => {
  if ($e)
    return Xt(e);
};
function Tb(e) {
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
function Ob(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Ib = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const c = Ab(i);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, o = L(() => {
    const { onFirstUpdate: i, placement: c, strategy: d, modifiers: p } = u(n);
    return {
      onFirstUpdate: i,
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
        position: u(o).strategy,
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
  return le(o, (i) => {
    const c = u(a);
    c && c.setOptions(i);
  }, {
    deep: !0
  }), le([e, t], ([i, c]) => {
    l(), !(!i || !c) && (a.value = bb(i, c, u(o)));
  }), Ut(() => {
    l();
  }), {
    state: L(() => {
      var i;
      return { ...((i = u(a)) == null ? void 0 : i.state) || {} };
    }),
    styles: L(() => u(s).styles),
    attributes: L(() => u(s).attributes),
    update: () => {
      var i;
      return (i = u(a)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = u(a)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: L(() => u(a))
  };
};
function Ab(e) {
  const t = Object.keys(e.elements), n = jr(t.map((o) => [o, e.styles[o] || {}])), r = jr(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const Lb = 0, Pb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = he(wa, void 0), a = D(), s = D(), l = L(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = L(() => {
    var f;
    const w = u(a), I = (f = u(s)) != null ? f : Lb;
    return {
      name: "arrow",
      enabled: !Gv(w),
      options: {
        element: w,
        padding: I
      }
    };
  }), c = L(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...Sb(e, [
      u(i),
      u(l)
    ])
  })), d = L(() => Cb(e.referenceEl) || u(r)), { attributes: p, state: m, styles: h, update: v, forceUpdate: g, instanceRef: E } = Ib(d, n, c);
  return le(E, (f) => t.value = f), ke(() => {
    le(() => {
      var f;
      return (f = u(d)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: E,
    state: m,
    styles: h,
    role: o,
    forceUpdate: g,
    update: v
  };
}, Nb = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Li(), a = Me("popper"), s = L(() => u(t).popper), l = D(ge(e.zIndex) ? e.zIndex : o()), i = L(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = L(() => [
    { zIndex: u(l) },
    u(n).popper,
    e.popperStyle || {}
  ]), d = L(() => r.value === "dialog" ? "false" : void 0), p = L(() => u(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: i,
    contentStyle: c,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = ge(e.zIndex) ? e.zIndex : o();
    }
  };
}, kb = Y({
  name: "ElPopperContent"
}), Rb = /* @__PURE__ */ Y({
  ...kb,
  props: mu,
  emits: wb,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: l,
      onFocusInTrap: i,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = Eb(r, n), { attributes: p, arrowRef: m, contentRef: h, styles: v, instanceRef: g, role: E, update: f } = Pb(r), {
      ariaModal: w,
      arrowStyle: I,
      contentAttrs: C,
      contentClass: b,
      contentStyle: O,
      updateZIndex: T
    } = Nb(r, {
      styles: v,
      attributes: p,
      role: E
    }), x = he(Yr, void 0), B = D();
    xt(qi, {
      arrowStyle: I,
      arrowRef: m,
      arrowOffset: B
    }), x && xt(Yr, {
      ...x,
      addInputId: ir,
      removeInputId: ir
    });
    let J;
    const oe = (ie = !0) => {
      f(), ie && T();
    }, Z = () => {
      oe(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return ke(() => {
      le(() => r.triggerTargetEl, (ie, Ce) => {
        J?.(), J = void 0;
        const M = u(ie || h.value), F = u(Ce || h.value);
        St(M) && (J = le([E, () => r.ariaLabel, w, () => r.id], (P) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((te, ee) => {
            Qt(P[ee]) ? M.removeAttribute(te) : M.setAttribute(te, P[ee]);
          });
        }, { immediate: !0 })), F !== M && St(F) && ["role", "aria-label", "aria-modal", "id"].forEach((P) => {
          F.removeAttribute(P);
        });
      }, { immediate: !0 }), le(() => r.visible, Z, { immediate: !0 });
    }), Ut(() => {
      J?.(), J = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: g,
      updatePopper: oe,
      contentStyle: O
    }), (ie, Ce) => (k(), W("div", $n({
      ref_key: "contentRef",
      ref: h
    }, u(C), {
      style: u(O),
      class: u(b),
      tabindex: "-1",
      onMouseenter: (M) => ie.$emit("mouseenter", M),
      onMouseleave: (M) => ie.$emit("mouseleave", M)
    }), [
      q(u(g0), {
        trapped: u(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": u(h),
        "focus-start-el": u(o),
        onFocusAfterTrapped: u(l),
        onFocusAfterReleased: u(s),
        onFocusin: u(i),
        onFocusoutPrevented: u(c),
        onReleaseRequested: u(d)
      }, {
        default: G(() => [
          ae(ie.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var $b = /* @__PURE__ */ Te(Rb, [["__file", "content.vue"]]);
const Mb = Ot(Kh), ka = Symbol("elTooltip");
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
const Fb = Se({
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
}), Db = ({
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
        const p = u(n);
        ge(p) && p > 0 && s(() => {
          o(d);
        }, p);
      }, u(e));
    },
    onClose: (d) => {
      l(), a(() => {
        o(d);
      }, u(t));
    }
  };
}, Ra = Se({
  ...Fb,
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
  ...An(["ariaLabel"])
}), vu = Se({
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
}), Vb = lo({
  type: re(Boolean),
  default: null
}), xb = lo({
  type: re(Function)
}), Bb = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Vb,
    [n]: xb
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: l,
      shouldHideWhenRouteChanges: i,
      shouldProceed: c,
      onShow: d,
      onHide: p
    }) => {
      const m = Je(), { emit: h } = m, v = m.props, g = L(() => Ie(v[n])), E = L(() => v[e] === null), f = (T) => {
        s.value !== !0 && (s.value = !0, l && (l.value = T), Ie(d) && d(T));
      }, w = (T) => {
        s.value !== !1 && (s.value = !1, l && (l.value = T), Ie(p) && p(T));
      }, I = (T) => {
        if (v.disabled === !0 || Ie(c) && !c())
          return;
        const x = g.value && $e;
        x && h(t, !0), (E.value || !x) && f(T);
      }, C = (T) => {
        if (v.disabled === !0 || !$e)
          return;
        const x = g.value && $e;
        x && h(t, !1), (E.value || !x) && w(T);
      }, b = (T) => {
        pn(T) && (v.disabled && T ? g.value && h(t, !1) : s.value !== T && (T ? f() : w()));
      }, O = () => {
        s.value ? C() : I();
      };
      return le(() => v[e], b), i && m.appContext.config.globalProperties.$route !== void 0 && le(() => ({
        ...m.proxy.$route
      }), () => {
        i.value && s.value && C();
      }), ke(() => {
        b(v[e]);
      }), {
        hide: C,
        show: I,
        toggle: O,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: zb,
  useModelToggleEmits: Ub,
  useModelToggle: Wb
} = Bb("visible"), jb = Se({
  ...Xi,
  ...zb,
  ...Ra,
  ...vu,
  ...Zi,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Hb = [
  ...Ub,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Kb = (e, t) => Rt(e) ? e.includes(t) : e === t, Nn = (e, t, n) => (r) => {
  Kb(u(e), t) && n(r);
}, Kt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, Gb = Y({
  name: "ElTooltipTrigger"
}), Yb = /* @__PURE__ */ Y({
  ...Gb,
  props: vu,
  setup(e, { expose: t }) {
    const n = e, r = Me("tooltip"), { controlled: o, id: a, open: s, onOpen: l, onClose: i, onToggle: c } = he(ka, void 0), d = D(null), p = () => {
      if (u(o) || n.disabled)
        return !0;
    }, m = Gt(n, "trigger"), h = Kt(p, Nn(m, "hover", l)), v = Kt(p, Nn(m, "hover", i)), g = Kt(p, Nn(m, "click", (C) => {
      C.button === 0 && c(C);
    })), E = Kt(p, Nn(m, "focus", l)), f = Kt(p, Nn(m, "focus", i)), w = Kt(p, Nn(m, "contextmenu", (C) => {
      C.preventDefault(), c(C);
    })), I = Kt(p, (C) => {
      const { code: b } = C;
      n.triggerKeys.includes(b) && (C.preventDefault(), c(C));
    });
    return t({
      triggerRef: d
    }), (C, b) => (k(), Q(u(n0), {
      id: u(a),
      "virtual-ref": C.virtualRef,
      open: u(s),
      "virtual-triggering": C.virtualTriggering,
      class: V(u(r).e("trigger")),
      onBlur: u(f),
      onClick: u(g),
      onContextmenu: u(w),
      onFocus: u(E),
      onMouseenter: u(h),
      onMouseleave: u(v),
      onKeydown: u(I)
    }, {
      default: G(() => [
        ae(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var qb = /* @__PURE__ */ Te(Yb, [["__file", "trigger.vue"]]);
const Xb = Se({
  to: {
    type: re([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Zb = /* @__PURE__ */ Y({
  __name: "teleport",
  props: Xb,
  setup(e) {
    return (t, n) => t.disabled ? ae(t.$slots, "default", { key: 0 }) : (k(), Q(Qu, {
      key: 1,
      to: t.to
    }, [
      ae(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Jb = /* @__PURE__ */ Te(Zb, [["__file", "teleport.vue"]]);
const Qb = Ot(Jb), gu = () => {
  const e = oa(), t = Hi(), n = L(() => `${e.value}-popper-container-${t.prefix}`), r = L(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, ey = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, ty = () => {
  const { id: e, selector: t } = gu();
  return ec(() => {
    $e && (document.body.querySelector(t.value) || ey(e.value));
  }), {
    id: e,
    selector: t
  };
}, ny = Y({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ry = /* @__PURE__ */ Y({
  ...ny,
  props: Ra,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = gu(), o = Me("tooltip"), a = D();
    let s;
    const {
      controlled: l,
      id: i,
      open: c,
      trigger: d,
      onClose: p,
      onOpen: m,
      onShow: h,
      onHide: v,
      onBeforeShow: g,
      onBeforeHide: E
    } = he(ka, void 0), f = L(() => n.transition || `${o.namespace.value}-fade-in-linear`), w = L(() => n.persistent);
    Ut(() => {
      s?.();
    });
    const I = L(() => u(w) ? !0 : u(c)), C = L(() => n.disabled ? !1 : u(c)), b = L(() => n.appendTo || r.value), O = L(() => {
      var P;
      return (P = n.style) != null ? P : {};
    }), T = D(!0), x = () => {
      v(), F() && Ht(document.body), T.value = !0;
    }, B = () => {
      if (u(l))
        return !0;
    }, J = Kt(B, () => {
      n.enterable && u(d) === "hover" && m();
    }), oe = Kt(B, () => {
      u(d) === "hover" && p();
    }), Z = () => {
      var P, te;
      (te = (P = a.value) == null ? void 0 : P.updatePopper) == null || te.call(P), g?.();
    }, ie = () => {
      E?.();
    }, Ce = () => {
      h(), s = cg(L(() => {
        var P;
        return (P = a.value) == null ? void 0 : P.popperContentRef;
      }), () => {
        if (u(l))
          return;
        u(d) !== "hover" && p();
      });
    }, M = () => {
      n.virtualTriggering || p();
    }, F = (P) => {
      var te;
      const ee = (te = a.value) == null ? void 0 : te.popperContentRef, se = P?.relatedTarget || document.activeElement;
      return ee?.contains(se);
    };
    return le(() => u(c), (P) => {
      P ? T.value = !1 : s?.();
    }, {
      flush: "post"
    }), le(() => n.content, () => {
      var P, te;
      (te = (P = a.value) == null ? void 0 : P.updatePopper) == null || te.call(P);
    }), t({
      contentRef: a,
      isFocusInsideContent: F
    }), (P, te) => (k(), Q(u(Qb), {
      disabled: !P.teleported,
      to: u(b)
    }, {
      default: G(() => [
        q(Hn, {
          name: u(f),
          onAfterLeave: x,
          onBeforeEnter: Z,
          onAfterEnter: Ce,
          onBeforeLeave: ie
        }, {
          default: G(() => [
            u(I) ? ze((k(), Q(u($b), $n({
              key: 0,
              id: u(i),
              ref_key: "contentRef",
              ref: a
            }, P.$attrs, {
              "aria-label": P.ariaLabel,
              "aria-hidden": T.value,
              "boundaries-padding": P.boundariesPadding,
              "fallback-placements": P.fallbackPlacements,
              "gpu-acceleration": P.gpuAcceleration,
              offset: P.offset,
              placement: P.placement,
              "popper-options": P.popperOptions,
              strategy: P.strategy,
              effect: P.effect,
              enterable: P.enterable,
              pure: P.pure,
              "popper-class": P.popperClass,
              "popper-style": [P.popperStyle, u(O)],
              "reference-el": P.referenceEl,
              "trigger-target-el": P.triggerTargetEl,
              visible: u(C),
              "z-index": P.zIndex,
              onMouseenter: u(J),
              onMouseleave: u(oe),
              onBlur: M,
              onClose: u(p)
            }), {
              default: G(() => [
                ae(P.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [tn, u(C)]
            ]) : K("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var oy = /* @__PURE__ */ Te(ry, [["__file", "content.vue"]]);
const ay = Y({
  name: "ElTooltip"
}), sy = /* @__PURE__ */ Y({
  ...ay,
  props: jb,
  emits: Hb,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    ty();
    const o = uo(), a = D(), s = D(), l = () => {
      var f;
      const w = u(a);
      w && ((f = w.popperInstanceRef) == null || f.update());
    }, i = D(!1), c = D(), { show: d, hide: p, hasUpdateHandler: m } = Wb({
      indicator: i,
      toggleReason: c
    }), { onOpen: h, onClose: v } = Db({
      showAfter: Gt(r, "showAfter"),
      hideAfter: Gt(r, "hideAfter"),
      autoClose: Gt(r, "autoClose"),
      open: d,
      close: p
    }), g = L(() => pn(r.visible) && !m.value);
    xt(ka, {
      controlled: g,
      id: o,
      open: Yo(i),
      trigger: Gt(r, "trigger"),
      onOpen: (f) => {
        h(f);
      },
      onClose: (f) => {
        v(f);
      },
      onToggle: (f) => {
        u(i) ? v(f) : h(f);
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
    }), le(() => r.disabled, (f) => {
      f && i.value && (i.value = !1);
    });
    const E = (f) => {
      var w;
      return (w = s.value) == null ? void 0 : w.isFocusInsideContent(f);
    };
    return tc(() => i.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: l,
      onOpen: h,
      onClose: v,
      hide: p
    }), (f, w) => (k(), Q(u(Mb), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: G(() => [
        q(qb, {
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
        q(oy, {
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
              }, null, 8, ["innerHTML"])) : (k(), W("span", { key: 1 }, U(f.content), 1))
            ]),
            f.showArrow ? (k(), Q(u(qh), {
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
var ly = /* @__PURE__ */ Te(sy, [["__file", "tooltip.vue"]]);
const iy = Ot(ly), uy = Se({
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
}), cy = Y({
  name: "ElBadge"
}), fy = /* @__PURE__ */ Y({
  ...cy,
  props: uy,
  setup(e, { expose: t }) {
    const n = e, r = Me("badge"), o = L(() => n.isDot ? "" : ge(n.value) && ge(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = L(() => {
      var s, l, i, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Vn(-((l = (s = n.offset) == null ? void 0 : s[0]) != null ? l : 0)),
          marginTop: Vn((c = (i = n.offset) == null ? void 0 : i[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (s, l) => (k(), W("div", {
      class: V(u(r).b())
    }, [
      ae(s.$slots, "default"),
      q(Hn, {
        name: `${u(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: G(() => [
          ze(A("sup", {
            class: V([
              u(r).e("content"),
              u(r).em("content", s.type),
              u(r).is("fixed", !!s.$slots.default),
              u(r).is("dot", s.isDot),
              u(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Be(u(a))
          }, [
            ae(s.$slots, "content", { value: u(o) }, () => [
              Xe(U(u(o)), 1)
            ])
          ], 6), [
            [tn, !s.hidden && (u(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var dy = /* @__PURE__ */ Te(fy, [["__file", "badge.vue"]]);
const py = Ot(dy), my = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ko = Se({
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
}), vy = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, gy = Y({
  name: "ElTag"
}), hy = /* @__PURE__ */ Y({
  ...gy,
  props: Ko,
  emits: vy,
  setup(e, { emit: t }) {
    const n = e, r = gr(), o = Me("tag"), a = L(() => {
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
    }, i = (c) => {
      var d, p, m;
      (m = (p = (d = c?.component) == null ? void 0 : d.subTree) == null ? void 0 : p.component) != null && m.bum && (c.component.subTree.component.bum = null);
    };
    return (c, d) => c.disableTransitions ? (k(), W("span", {
      key: 0,
      class: V(u(a)),
      style: Be({ backgroundColor: c.color }),
      onClick: l
    }, [
      A("span", {
        class: V(u(o).e("content"))
      }, [
        ae(c.$slots, "default")
      ], 2),
      c.closable ? (k(), Q(u(Re), {
        key: 0,
        class: V(u(o).e("close")),
        onClick: Ae(s, ["stop"])
      }, {
        default: G(() => [
          q(u(Kr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : K("v-if", !0)
    ], 6)) : (k(), Q(Hn, {
      key: 1,
      name: `${u(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: i
    }, {
      default: G(() => [
        A("span", {
          class: V(u(a)),
          style: Be({ backgroundColor: c.color }),
          onClick: l
        }, [
          A("span", {
            class: V(u(o).e("content"))
          }, [
            ae(c.$slots, "default")
          ], 2),
          c.closable ? (k(), Q(u(Re), {
            key: 0,
            class: V(u(o).e("close")),
            onClick: Ae(s, ["stop"])
          }, {
            default: G(() => [
              q(u(Kr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : K("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var by = /* @__PURE__ */ Te(hy, [["__file", "tag.vue"]]);
const yy = Ot(by), ln = /* @__PURE__ */ new Map();
if ($e) {
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
    const a = t.instance.popperRef, s = r.target, l = o?.target, i = !t || !t.instance, c = !s || !l, d = e.contains(s) || e.contains(l), p = e === s, m = n.length && n.some((v) => v?.contains(s)) || n.length && n.includes(l), h = a && (a.contains(s) || a.contains(l));
    i || c || d || p || m || h || t.value(r, o);
  };
}
const _y = {
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
}, wy = Se({
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
  ...$i
}), yt = {};
Y({
  name: "ElConfigProvider",
  props: wy,
  setup(e, { slots: t }) {
    le(() => e.message, (r) => {
      Object.assign(yt, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Di(e);
    return () => ae(t, "default", { config: n?.value });
  }
});
const Ey = 100, Sy = 600, Al = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Ey, delay: o = Sy } = Ie(n) ? {} : n;
    let a, s;
    const l = () => Ie(n) ? n() : n.handler(), i = () => {
      s && (clearTimeout(s), s = void 0), a && (clearInterval(a), a = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (i(), l(), document.addEventListener("mouseup", () => i(), {
        once: !0
      }), s = setTimeout(() => {
        a = setInterval(() => {
          l();
        }, r);
      }, o));
    });
  }
}, Cy = Se({
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
}), Ty = {
  [nn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [en]: (e) => ge(e) || Qt(e),
  [Ve]: (e) => ge(e) || Qt(e)
}, Oy = Y({
  name: "ElInputNumber"
}), Iy = /* @__PURE__ */ Y({
  ...Oy,
  props: Cy,
  emits: Ty,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = ma(), a = Me("input-number"), s = D(), l = En({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: i } = co(), c = L(() => ge(r.modelValue) && r.modelValue <= r.min), d = L(() => ge(r.modelValue) && r.modelValue >= r.max), p = L(() => {
      const M = f(r.step);
      return $t(r.precision) ? Math.max(f(r.modelValue), M) : (M > r.precision, r.precision);
    }), m = L(() => r.controls && r.controlsPosition === "right"), h = gr(), v = ya(), g = L(() => {
      if (l.userInput !== null)
        return l.userInput;
      let M = l.currentValue;
      if (Qt(M))
        return "";
      if (ge(M)) {
        if (Number.isNaN(M))
          return "";
        $t(r.precision) || (M = M.toFixed(r.precision));
      }
      return M;
    }), E = (M, F) => {
      if ($t(F) && (F = p.value), F === 0)
        return Math.round(M);
      let P = String(M);
      const te = P.indexOf(".");
      if (te === -1 || !P.replace(".", "").split("")[te + F])
        return M;
      const we = P.length;
      return P.charAt(we - 1) === "5" && (P = `${P.slice(0, Math.max(0, we - 1))}6`), Number.parseFloat(Number(P).toFixed(F));
    }, f = (M) => {
      if (Qt(M))
        return 0;
      const F = M.toString(), P = F.indexOf(".");
      let te = 0;
      return P !== -1 && (te = F.length - P - 1), te;
    }, w = (M, F = 1) => ge(M) ? E(M + r.step * F) : l.currentValue, I = () => {
      if (r.readonly || v.value || d.value)
        return;
      const M = Number(g.value) || 0, F = w(M);
      O(F), n(en, l.currentValue), ie();
    }, C = () => {
      if (r.readonly || v.value || c.value)
        return;
      const M = Number(g.value) || 0, F = w(M, -1);
      O(F), n(en, l.currentValue), ie();
    }, b = (M, F) => {
      const { max: P, min: te, step: ee, precision: se, stepStrictly: we, valueOnClear: H } = r;
      P < te && pa("InputNumber", "min should not be greater than max.");
      let _e = Number(M);
      if (Qt(M) || Number.isNaN(_e))
        return null;
      if (M === "") {
        if (H === null)
          return null;
        _e = qe(H) ? { min: te, max: P }[H] : H;
      }
      return we && (_e = E(Math.round(_e / ee) * ee, se), _e !== M && F && n(Ve, _e)), $t(se) || (_e = E(_e, se)), (_e > P || _e < te) && (_e = _e > P ? P : te, F && n(Ve, _e)), _e;
    }, O = (M, F = !0) => {
      var P;
      const te = l.currentValue, ee = b(M);
      if (!F) {
        n(Ve, ee);
        return;
      }
      te === ee && M || (l.userInput = null, n(Ve, ee), te !== ee && n(nn, ee, te), r.validateEvent && ((P = i?.validate) == null || P.call(i, "change").catch((se) => void 0)), l.currentValue = ee);
    }, T = (M) => {
      l.userInput = M;
      const F = M === "" ? null : Number(M);
      n(en, F), O(F, !1);
    }, x = (M) => {
      const F = M !== "" ? Number(M) : "";
      (ge(F) && !Number.isNaN(F) || M === "") && O(F), ie(), l.userInput = null;
    }, B = () => {
      var M, F;
      (F = (M = s.value) == null ? void 0 : M.focus) == null || F.call(M);
    }, J = () => {
      var M, F;
      (F = (M = s.value) == null ? void 0 : M.blur) == null || F.call(M);
    }, oe = (M) => {
      n("focus", M);
    }, Z = (M) => {
      var F, P;
      l.userInput = null, Wi() && l.currentValue === null && ((F = s.value) != null && F.input) && (s.value.input.value = ""), n("blur", M), r.validateEvent && ((P = i?.validate) == null || P.call(i, "blur").catch((te) => void 0));
    }, ie = () => {
      l.currentValue !== r.modelValue && (l.currentValue = r.modelValue);
    }, Ce = (M) => {
      document.activeElement === M.target && M.preventDefault();
    };
    return le(() => r.modelValue, (M, F) => {
      const P = b(M, !0);
      l.userInput === null && P !== F && (l.currentValue = P);
    }, { immediate: !0 }), ke(() => {
      var M;
      const { min: F, max: P, modelValue: te } = r, ee = (M = s.value) == null ? void 0 : M.input;
      if (ee.setAttribute("role", "spinbutton"), Number.isFinite(P) ? ee.setAttribute("aria-valuemax", String(P)) : ee.removeAttribute("aria-valuemax"), Number.isFinite(F) ? ee.setAttribute("aria-valuemin", String(F)) : ee.removeAttribute("aria-valuemin"), ee.setAttribute("aria-valuenow", l.currentValue || l.currentValue === 0 ? String(l.currentValue) : ""), ee.setAttribute("aria-disabled", String(v.value)), !ge(te) && te != null) {
        let se = Number(te);
        Number.isNaN(se) && (se = null), n(Ve, se);
      }
      ee.addEventListener("wheel", Ce, { passive: !1 });
    }), Ml(() => {
      var M, F;
      const P = (M = s.value) == null ? void 0 : M.input;
      P?.setAttribute("aria-valuenow", `${(F = l.currentValue) != null ? F : ""}`);
    }), t({
      focus: B,
      blur: J
    }), (M, F) => (k(), W("div", {
      class: V([
        u(a).b(),
        u(a).m(u(h)),
        u(a).is("disabled", u(v)),
        u(a).is("without-controls", !M.controls),
        u(a).is("controls-right", u(m))
      ]),
      onDragstart: Ae(() => {
      }, ["prevent"])
    }, [
      M.controls ? ze((k(), W("span", {
        key: 0,
        role: "button",
        "aria-label": u(o)("el.inputNumber.decrease"),
        class: V([u(a).e("decrease"), u(a).is("disabled", u(c))]),
        onKeydown: _t(C, ["enter"])
      }, [
        ae(M.$slots, "decrease-icon", {}, () => [
          q(u(Re), null, {
            default: G(() => [
              u(m) ? (k(), Q(u(Bi), { key: 0 })) : (k(), Q(u(eh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [u(Al), C]
      ]) : K("v-if", !0),
      M.controls ? ze((k(), W("span", {
        key: 1,
        role: "button",
        "aria-label": u(o)("el.inputNumber.increase"),
        class: V([u(a).e("increase"), u(a).is("disabled", u(d))]),
        onKeydown: _t(I, ["enter"])
      }, [
        ae(M.$slots, "increase-icon", {}, () => [
          q(u(Re), null, {
            default: G(() => [
              u(m) ? (k(), Q(u(zg), { key: 0 })) : (k(), Q(u(nh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [u(Al), I]
      ]) : K("v-if", !0),
      q(u(Ih), {
        id: M.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: M.step,
        "model-value": u(g),
        placeholder: M.placeholder,
        readonly: M.readonly,
        disabled: u(v),
        size: u(h),
        max: M.max,
        min: M.min,
        name: M.name,
        "aria-label": M.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          _t(Ae(I, ["prevent"]), ["up"]),
          _t(Ae(C, ["prevent"]), ["down"])
        ],
        onBlur: Z,
        onFocus: oe,
        onInput: T,
        onChange: x
      }, nc({
        _: 2
      }, [
        M.$slots.prefix ? {
          name: "prefix",
          fn: G(() => [
            ae(M.$slots, "prefix")
          ])
        } : void 0,
        M.$slots.suffix ? {
          name: "suffix",
          fn: G(() => [
            ae(M.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Ay = /* @__PURE__ */ Te(Iy, [["__file", "input-number.vue"]]);
const Ly = Ot(Ay);
function Py() {
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
const hu = Symbol("ElSelectGroup"), vo = Symbol("ElSelect");
function Ny(e, t) {
  const n = he(vo), r = he(hu, { disabled: !1 }), o = L(() => d(cn(n.props.modelValue), e.value)), a = L(() => {
    var h;
    if (n.props.multiple) {
      const v = cn((h = n.props.modelValue) != null ? h : []);
      return !o.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = L(() => e.label || (ut(e.value) ? "" : e.value)), l = L(() => e.value || e.label || ""), i = L(() => e.disabled || t.groupDisabled || a.value), c = Je(), d = (h = [], v) => {
    if (ut(e.value)) {
      const g = n.props.valueKey;
      return h && h.some((E) => rc(fn(E, g)) === fn(v, g));
    } else
      return h && h.includes(v);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, m = (h) => {
    const v = new RegExp(my(h), "i");
    t.visible = v.test(s.value) || e.created;
  };
  return le(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), le(() => e.value, (h, v) => {
    const { remote: g, valueKey: E } = n.props;
    if ((g ? h !== v : !Qn(h, v)) && (n.onOptionDestroy(v, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !g) {
      if (E && ut(h) && ut(v) && h[E] === v[E])
        return;
      n.setSelected();
    }
  }), le(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: l,
    itemSelected: o,
    isDisabled: i,
    hoverItem: p,
    updateOption: m
  };
}
const ky = Y({
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
    const t = Me("select"), n = uo(), r = L(() => [
      t.be("dropdown", "item"),
      t.is("disabled", u(l)),
      t.is("selected", u(s)),
      t.is("hovering", u(m))
    ]), o = En({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: l,
      select: i,
      hoverItem: c,
      updateOption: d
    } = Ny(e, o), { visible: p, hover: m } = qo(o), h = Je().proxy;
    i.onOptionCreate(h), Ut(() => {
      const g = h.value, { selected: E } = i.states, f = E.some((w) => w.value === h.value);
      Le(() => {
        i.states.cachedOptions.get(g) === h && !f && i.states.cachedOptions.delete(g);
      }), i.onOptionDestroy(g, h);
    });
    function v() {
      l.value || i.handleOptionSelect(h);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: a,
      itemSelected: s,
      isDisabled: l,
      select: i,
      hoverItem: c,
      updateOption: d,
      visible: p,
      hover: m,
      selectOptionClick: v,
      states: o
    };
  }
});
function Ry(e, t, n, r, o, a) {
  return ze((k(), W("li", {
    id: e.id,
    class: V(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ae(e.selectOptionClick, ["stop"])
  }, [
    ae(e.$slots, "default", {}, () => [
      A("span", null, U(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [tn, e.visible]
  ]);
}
var $a = /* @__PURE__ */ Te(ky, [["render", Ry], ["__file", "option.vue"]]);
const $y = Y({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = he(vo), t = Me("select"), n = L(() => e.props.popperClass), r = L(() => e.props.multiple), o = L(() => e.props.fitInputWidth), a = D("");
    function s() {
      var l;
      a.value = `${(l = e.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return ke(() => {
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
function My(e, t, n, r, o, a) {
  return k(), W("div", {
    class: V([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Be({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (k(), W("div", {
      key: 0,
      class: V(e.ns.be("dropdown", "header"))
    }, [
      ae(e.$slots, "header")
    ], 2)) : K("v-if", !0),
    ae(e.$slots, "default"),
    e.$slots.footer ? (k(), W("div", {
      key: 1,
      class: V(e.ns.be("dropdown", "footer"))
    }, [
      ae(e.$slots, "footer")
    ], 2)) : K("v-if", !0)
  ], 6);
}
var Fy = /* @__PURE__ */ Te($y, [["render", My], ["__file", "select-dropdown.vue"]]);
const Dy = (e, t) => {
  const { t: n } = ma(), r = uo(), o = Me("select"), a = Me("input"), s = En({
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
  }), l = D(null), i = D(null), c = D(null), d = D(null), p = D(null), m = D(null), h = D(null), v = D(null), g = D(null), E = D(null), f = D(null), {
    isComposing: w,
    handleCompositionStart: I,
    handleCompositionUpdate: C,
    handleCompositionEnd: b
  } = Yi({
    afterComposition: (N) => Ke(N)
  }), { wrapperRef: O, isFocused: T, handleBlur: x } = Gi(p, {
    beforeFocus() {
      return F.value;
    },
    afterFocus() {
      e.automaticDropdown && !B.value && (B.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(N) {
      var z, ce;
      return ((z = c.value) == null ? void 0 : z.isFocusInsideContent(N)) || ((ce = d.value) == null ? void 0 : ce.isFocusInsideContent(N));
    },
    afterBlur() {
      B.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), B = D(!1), J = D(), { form: oe, formItem: Z } = co(), { inputId: ie } = ba(e, {
    formItemContext: Z
  }), { valueOnClear: Ce, isEmptyValue: M } = kg(e), F = L(() => e.disabled || oe?.disabled), P = L(() => Rt(e.modelValue) ? e.modelValue.length > 0 : !M(e.modelValue)), te = L(() => {
    var N;
    return (N = oe?.statusIcon) != null ? N : !1;
  }), ee = L(() => e.clearable && !F.value && s.inputHovering && P.value), se = L(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), we = L(() => o.is("reverse", se.value && B.value)), H = L(() => Z?.validateState || ""), _e = L(() => Ui[H.value]), We = L(() => e.remote ? 300 : 0), xe = L(() => e.remote && !s.inputValue && s.options.size === 0), je = L(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && He.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), He = L(() => be.value.filter((N) => N.visible).length), be = L(() => {
    const N = Array.from(s.options.values()), z = [];
    return s.optionValues.forEach((ce) => {
      const Fe = N.findIndex((it) => it.value === ce);
      Fe > -1 && z.push(N[Fe]);
    }), z.length >= N.length ? z : N;
  }), rt = L(() => Array.from(s.cachedOptions.values())), ft = L(() => {
    const N = be.value.filter((z) => !z.created).some((z) => z.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !N;
  }), ot = () => {
    e.filterable && Ie(e.filterMethod) || e.filterable && e.remote && Ie(e.remoteMethod) || be.value.forEach((N) => {
      var z;
      (z = N.updateOption) == null || z.call(N, s.inputValue);
    });
  }, bt = gr(), at = L(() => ["small"].includes(bt.value) ? "small" : "default"), st = L({
    get() {
      return B.value && !xe.value;
    },
    set(N) {
      B.value = N;
    }
  }), lt = L(() => {
    if (e.multiple && !$t(e.modelValue))
      return cn(e.modelValue).length === 0 && !s.inputValue;
    const N = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || $t(N) ? !s.inputValue : !0;
  }), dt = L(() => {
    var N;
    const z = (N = e.placeholder) != null ? N : n("el.select.placeholder");
    return e.multiple || !P.value ? z : s.selectedLabel;
  }), At = L(() => Uo ? null : "mouseenter");
  le(() => e.modelValue, (N, z) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", _("")), $(), !Qn(N, z) && e.validateEvent && Z?.validate("change").catch((ce) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), le(() => B.value, (N) => {
    N ? _(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", N);
  }), le(() => s.options.entries(), () => {
    $e && ($(), e.defaultFirstOption && (e.filterable || e.remote) && He.value && S());
  }, {
    flush: "post"
  }), le([() => s.hoveringIndex, be], ([N]) => {
    ge(N) && N > -1 ? J.value = be.value[N] || {} : J.value = {}, be.value.forEach((z) => {
      z.hover = J.value === z;
    });
  }), $l(() => {
    s.isBeforeHide || ot();
  });
  const _ = (N) => {
    s.previousQuery === N || w.value || (s.previousQuery = N, e.filterable && Ie(e.filterMethod) ? e.filterMethod(N) : e.filterable && e.remote && Ie(e.remoteMethod) && e.remoteMethod(N), e.defaultFirstOption && (e.filterable || e.remote) && He.value ? Le(S) : Le(fe));
  }, S = () => {
    const N = be.value.filter((it) => it.visible && !it.disabled && !it.states.groupDisabled), z = N.find((it) => it.created), ce = N[0], Fe = be.value.map((it) => it.value);
    s.hoveringIndex = xa(Fe, z || ce);
  }, $ = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const z = Rt(e.modelValue) ? e.modelValue[0] : e.modelValue, ce = j(z);
      s.selectedLabel = ce.currentLabel, s.selected = [ce];
      return;
    }
    const N = [];
    $t(e.modelValue) || cn(e.modelValue).forEach((z) => {
      N.push(j(z));
    }), s.selected = N;
  }, j = (N) => {
    let z;
    const ce = ld(N);
    for (let Ln = s.cachedOptions.size - 1; Ln >= 0; Ln--) {
      const sn = rt.value[Ln];
      if (ce ? fn(sn.value, e.valueKey) === fn(N, e.valueKey) : sn.value === N) {
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
    const Fe = ce ? N.label : N ?? "";
    return {
      value: N,
      currentLabel: Fe
    };
  }, fe = () => {
    s.hoveringIndex = be.value.findIndex((N) => s.selected.some((z) => wr(z) === wr(N)));
  }, ne = () => {
    s.selectionWidth = i.value.getBoundingClientRect().width;
  }, y = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, R = () => {
    var N, z;
    (z = (N = c.value) == null ? void 0 : N.updatePopper) == null || z.call(N);
  }, ue = () => {
    var N, z;
    (z = (N = d.value) == null ? void 0 : N.updatePopper) == null || z.call(N);
  }, me = () => {
    s.inputValue.length > 0 && !B.value && (B.value = !0), _(s.inputValue);
  }, Ke = (N) => {
    if (s.inputValue = N.target.value, e.remote)
      bn();
    else
      return me();
  }, bn = Hv(() => {
    me();
  }, We.value), pt = (N) => {
    Qn(e.modelValue, N) || t(nn, N);
  }, go = (N) => Kv(N, (z) => {
    const ce = s.cachedOptions.get(z);
    return ce && !ce.disabled && !ce.states.groupDisabled;
  }), Fa = (N) => {
    if (e.multiple && N.code !== Dt.delete && N.target.value.length <= 0) {
      const z = cn(e.modelValue).slice(), ce = go(z);
      if (ce < 0)
        return;
      const Fe = z[ce];
      z.splice(ce, 1), t(Ve, z), pt(z), t("remove-tag", Fe);
    }
  }, Ou = (N, z) => {
    const ce = s.selected.indexOf(z);
    if (ce > -1 && !F.value) {
      const Fe = cn(e.modelValue).slice();
      Fe.splice(ce, 1), t(Ve, Fe), pt(Fe), t("remove-tag", z.value);
    }
    N.stopPropagation(), _r();
  }, Da = (N) => {
    N.stopPropagation();
    const z = e.multiple ? [] : Ce.value;
    if (e.multiple)
      for (const ce of s.selected)
        ce.isDisabled && z.push(ce.value);
    t(Ve, z), pt(z), s.hoveringIndex = -1, B.value = !1, t("clear"), _r();
  }, Va = (N) => {
    var z;
    if (e.multiple) {
      const ce = cn((z = e.modelValue) != null ? z : []).slice(), Fe = xa(ce, N);
      Fe > -1 ? ce.splice(Fe, 1) : (e.multipleLimit <= 0 || ce.length < e.multipleLimit) && ce.push(N.value), t(Ve, ce), pt(ce), N.created && _(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Ve, N.value), pt(N.value), B.value = !1;
    _r(), !B.value && Le(() => {
      yr(N);
    });
  }, xa = (N = [], z) => $t(z) ? -1 : ut(z.value) ? N.findIndex((ce) => Qn(fn(ce, e.valueKey), wr(z))) : N.indexOf(z.value), yr = (N) => {
    var z, ce, Fe, it, Ln;
    const sn = Rt(N) ? N[0] : N;
    let Er = null;
    if (sn?.value) {
      const Gn = be.value.filter((Wu) => Wu.value === sn.value);
      Gn.length > 0 && (Er = Gn[0].$el);
    }
    if (c.value && Er) {
      const Gn = (it = (Fe = (ce = (z = c.value) == null ? void 0 : z.popperRef) == null ? void 0 : ce.contentRef) == null ? void 0 : Fe.querySelector) == null ? void 0 : it.call(Fe, `.${o.be("dropdown", "wrap")}`);
      Gn && $g(Gn, Er);
    }
    (Ln = f.value) == null || Ln.handleScroll();
  }, Iu = (N) => {
    s.options.set(N.value, N), s.cachedOptions.set(N.value, N);
  }, Au = (N, z) => {
    s.options.get(N) === z && s.options.delete(N);
  }, Lu = L(() => {
    var N, z;
    return (z = (N = c.value) == null ? void 0 : N.popperRef) == null ? void 0 : z.contentRef;
  }), Pu = () => {
    s.isBeforeHide = !1, Le(() => {
      var N;
      (N = f.value) == null || N.update(), yr(s.selected);
    });
  }, _r = () => {
    var N;
    (N = p.value) == null || N.focus();
  }, Nu = () => {
    var N;
    if (B.value) {
      B.value = !1, Le(() => {
        var z;
        return (z = p.value) == null ? void 0 : z.blur();
      });
      return;
    }
    (N = p.value) == null || N.blur();
  }, ku = (N) => {
    Da(N);
  }, Ru = (N) => {
    if (B.value = !1, T.value) {
      const z = new FocusEvent("focus", N);
      Le(() => x(z));
    }
  }, $u = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : B.value = !1;
  }, Ba = () => {
    F.value || (Uo && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : B.value = !B.value);
  }, Mu = () => {
    if (!B.value)
      Ba();
    else {
      const N = be.value[s.hoveringIndex];
      N && !N.isDisabled && Va(N);
    }
  }, wr = (N) => ut(N.value) ? fn(N.value, e.valueKey) : N.value, Fu = L(() => be.value.filter((N) => N.visible).every((N) => N.isDisabled)), Du = L(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Vu = L(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), za = (N) => {
    if (!B.value) {
      B.value = !0;
      return;
    }
    if (!(s.options.size === 0 || He.value === 0 || w.value) && !Fu.value) {
      N === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : N === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const z = be.value[s.hoveringIndex];
      (z.isDisabled || !z.visible) && za(N), Le(() => yr(J.value));
    }
  }, xu = () => {
    if (!i.value)
      return 0;
    const N = window.getComputedStyle(i.value);
    return Number.parseFloat(N.gap || "6px");
  }, Bu = L(() => {
    const N = xu();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - N : s.selectionWidth}px` };
  }), zu = L(() => ({ maxWidth: `${s.selectionWidth}px` })), Uu = (N) => {
    t("popup-scroll", N);
  };
  return kt(i, ne), kt(v, R), kt(O, R), kt(g, ue), kt(E, y), ke(() => {
    $();
  }), {
    inputId: ie,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: T,
    expanded: B,
    optionsArray: be,
    hoverOption: J,
    selectSize: bt,
    filteredOptionsCount: He,
    updateTooltip: R,
    updateTagTooltip: ue,
    debouncedOnInputChange: bn,
    onInput: Ke,
    deletePrevTag: Fa,
    deleteTag: Ou,
    deleteSelected: Da,
    handleOptionSelect: Va,
    scrollToOption: yr,
    hasModelValue: P,
    shouldShowPlaceholder: lt,
    currentPlaceholder: dt,
    mouseEnterEventName: At,
    needStatusIcon: te,
    showClose: ee,
    iconComponent: se,
    iconReverse: we,
    validateState: H,
    validateIcon: _e,
    showNewOption: ft,
    updateOptions: ot,
    collapseTagSize: at,
    setSelected: $,
    selectDisabled: F,
    emptyText: je,
    handleCompositionStart: I,
    handleCompositionUpdate: C,
    handleCompositionEnd: b,
    onOptionCreate: Iu,
    onOptionDestroy: Au,
    handleMenuEnter: Pu,
    focus: _r,
    blur: Nu,
    handleClearClick: ku,
    handleClickOutside: Ru,
    handleEsc: $u,
    toggleMenu: Ba,
    selectOption: Mu,
    getValueKey: wr,
    navigateOptions: za,
    dropdownMenuVisible: st,
    showTagList: Du,
    collapseTagList: Vu,
    popupScroll: Uu,
    tagStyle: Bu,
    collapseTagStyle: zu,
    popperRef: Lu,
    inputRef: p,
    tooltipRef: c,
    tagTooltipRef: d,
    prefixRef: m,
    suffixRef: h,
    selectRef: l,
    wrapperRef: O,
    selectionRef: i,
    scrollbarRef: f,
    menuRef: v,
    tagMenuRef: g,
    collapseItemRef: E
  };
};
var Vy = Y({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = he(vo);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function i(c) {
        Rt(c) && c.forEach((d) => {
          var p, m, h, v;
          const g = (p = d?.type || {}) == null ? void 0 : p.name;
          g === "ElOptionGroup" ? i(!qe(d.children) && !Rt(d.children) && Ie((m = d.children) == null ? void 0 : m.default) ? (h = d.children) == null ? void 0 : h.default() : d.children) : g === "ElOption" ? l.push((v = d.props) == null ? void 0 : v.value) : Rt(d.children) && i(d.children);
        });
      }
      return s.length && i((a = s[0]) == null ? void 0 : a.children), Qn(l, r) || (r = l, n && (n.states.optionValues = l)), s;
    };
  }
});
const xy = Se({
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
    default: Bi
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
  ...$i,
  ...An(["ariaLabel"])
}), Ll = "ElSelect", By = Y({
  name: Ll,
  componentName: Ll,
  components: {
    ElSelectMenu: Fy,
    ElOption: $a,
    ElOptions: Vy,
    ElTag: yy,
    ElScrollbar: Uh,
    ElTooltip: iy,
    ElIcon: Re
  },
  directives: { ClickOutside: _y },
  props: xy,
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
      const { modelValue: i, multiple: c } = e, d = c ? [] : void 0;
      return Rt(i) ? c ? i : d : c ? d : i;
    }), r = En({
      ...qo(e),
      modelValue: n
    }), o = Dy(r, t), { calculatorRef: a, inputStyle: s } = Py();
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
function zy(e, t, n, r, o, a) {
  const s = yn("el-tag"), l = yn("el-tooltip"), i = yn("el-icon"), c = yn("el-option"), d = yn("el-options"), p = yn("el-scrollbar"), m = yn("el-select-menu"), h = oc("click-outside");
  return ze((k(), W("div", {
    ref: "selectRef",
    class: V([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [ac(e.mouseEnterEventName)]: (v) => e.states.inputHovering = !0,
    onMouseleave: (v) => e.states.inputHovering = !1
  }, [
    q(l, {
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
          A("div", {
            ref: "wrapperRef",
            class: V([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ae(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (k(), W("div", {
              key: 0,
              ref: "prefixRef",
              class: V(e.nsSelect.e("prefix"))
            }, [
              ae(e.$slots, "prefix")
            ], 2)) : K("v-if", !0),
            A("div", {
              ref: "selectionRef",
              class: V([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ae(e.$slots, "tag", { key: 0 }, () => [
                (k(!0), W(et, null, rr(e.showTagList, (g) => (k(), W("div", {
                  key: e.getValueKey(g),
                  class: V(e.nsSelect.e("selected-item"))
                }, [
                  q(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Be(e.tagStyle),
                    onClose: (E) => e.deleteTag(E, g)
                  }, {
                    default: G(() => [
                      A("span", {
                        class: V(e.nsSelect.e("tags-text"))
                      }, [
                        ae(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          Xe(U(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (k(), Q(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: G(() => [
                    A("div", {
                      ref: "collapseItemRef",
                      class: V(e.nsSelect.e("selected-item"))
                    }, [
                      q(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Be(e.collapseTagStyle)
                      }, {
                        default: G(() => [
                          A("span", {
                            class: V(e.nsSelect.e("tags-text"))
                          }, " + " + U(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: G(() => [
                    A("div", {
                      ref: "tagMenuRef",
                      class: V(e.nsSelect.e("selection"))
                    }, [
                      (k(!0), W(et, null, rr(e.collapseTagList, (g) => (k(), W("div", {
                        key: e.getValueKey(g),
                        class: V(e.nsSelect.e("selected-item"))
                      }, [
                        q(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (E) => e.deleteTag(E, g)
                        }, {
                          default: G(() => [
                            A("span", {
                              class: V(e.nsSelect.e("tags-text"))
                            }, [
                              ae(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                Xe(U(g.currentLabel), 1)
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
              A("div", {
                class: V([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                ze(A("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: V([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
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
                    _t(Ae((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    _t(Ae((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    _t(Ae(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    _t(Ae(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    _t(Ae(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ae(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Vr, e.states.inputValue]
                ]),
                e.filterable ? (k(), W("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: V(e.nsSelect.e("input-calculator")),
                  textContent: U(e.states.inputValue)
                }, null, 10, ["textContent"])) : K("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (k(), W("div", {
                key: 1,
                class: V([
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
                  A("span", null, U(e.currentPlaceholder), 1)
                ]) : (k(), W("span", { key: 1 }, U(e.currentPlaceholder), 1))
              ], 2)) : K("v-if", !0)
            ], 2),
            A("div", {
              ref: "suffixRef",
              class: V(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (k(), Q(i, {
                key: 0,
                class: V([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: G(() => [
                  (k(), Q(Ze(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : K("v-if", !0),
              e.showClose && e.clearIcon ? (k(), Q(i, {
                key: 1,
                class: V([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: G(() => [
                  (k(), Q(Ze(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : K("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (k(), Q(i, {
                key: 2,
                class: V([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: G(() => [
                  (k(), Q(Ze(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : K("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: G(() => [
        q(m, { ref: "menuRef" }, {
          default: G(() => [
            e.$slots.header ? (k(), W("div", {
              key: 0,
              class: V(e.nsSelect.be("dropdown", "header")),
              onClick: Ae(() => {
              }, ["stop"])
            }, [
              ae(e.$slots, "header")
            ], 10, ["onClick"])) : K("v-if", !0),
            ze(q(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: V([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: G(() => [
                e.showNewOption ? (k(), Q(c, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : K("v-if", !0),
                q(d, null, {
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
              class: V(e.nsSelect.be("dropdown", "loading"))
            }, [
              ae(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (k(), W("div", {
              key: 2,
              class: V(e.nsSelect.be("dropdown", "empty"))
            }, [
              ae(e.$slots, "empty", {}, () => [
                A("span", null, U(e.emptyText), 1)
              ])
            ], 2)) : K("v-if", !0),
            e.$slots.footer ? (k(), W("div", {
              key: 3,
              class: V(e.nsSelect.be("dropdown", "footer")),
              onClick: Ae(() => {
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
var Uy = /* @__PURE__ */ Te(By, [["render", zy], ["__file", "select.vue"]]);
const Wy = Y({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Me("select"), n = D(null), r = Je(), o = D([]);
    xt(hu, En({
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
    }, i = () => {
      o.value = l(r.subTree);
    };
    return ke(() => {
      i();
    }), hg(n, i, {
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
function jy(e, t, n, r, o, a) {
  return ze((k(), W("ul", {
    ref: "groupRef",
    class: V(e.ns.be("group", "wrap"))
  }, [
    A("li", {
      class: V(e.ns.be("group", "title"))
    }, U(e.label), 3),
    A("li", null, [
      A("ul", {
        class: V(e.ns.b("group"))
      }, [
        ae(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [tn, e.visible]
  ]);
}
var bu = /* @__PURE__ */ Te(Wy, [["render", jy], ["__file", "option-group.vue"]]);
const Hy = Ot(Uy, {
  Option: $a,
  OptionGroup: bu
}), Ky = xi($a);
xi(bu);
const Gy = (e) => ["", ...va].includes(e), Yy = Se({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: Gy
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
}), qy = {
  [Ve]: (e) => pn(e) || qe(e) || ge(e),
  [nn]: (e) => pn(e) || qe(e) || ge(e),
  [en]: (e) => pn(e) || qe(e) || ge(e)
}, yu = "ElSwitch", Xy = Y({
  name: yu
}), Zy = /* @__PURE__ */ Y({
  ...Xy,
  props: Yy,
  emits: qy,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = co(), a = gr(), s = Me("switch"), { inputId: l } = ba(r, {
      formItemContext: o
    }), i = ya(L(() => r.loading)), c = D(r.modelValue !== !1), d = D(), p = D(), m = L(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", i.value),
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
    le(() => r.modelValue, () => {
      c.value = !0;
    });
    const E = L(() => c.value ? r.modelValue : !1), f = L(() => E.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(E.value) || (n(Ve, r.inactiveValue), n(nn, r.inactiveValue), n(en, r.inactiveValue)), le(f, (b) => {
      var O;
      d.value.checked = b, r.validateEvent && ((O = o?.validate) == null || O.call(o, "change").catch((T) => void 0));
    });
    const w = () => {
      const b = f.value ? r.inactiveValue : r.activeValue;
      n(Ve, b), n(nn, b), n(en, b), Le(() => {
        d.value.checked = f.value;
      });
    }, I = () => {
      if (i.value)
        return;
      const { beforeChange: b } = r;
      if (!b) {
        w();
        return;
      }
      const O = b();
      [
        bs(O),
        pn(O)
      ].includes(!0) || pa(yu, "beforeChange must return type `Promise<boolean>` or `boolean`"), bs(O) ? O.then((x) => {
        x && w();
      }).catch((x) => {
      }) : O && w();
    }, C = () => {
      var b, O;
      (O = (b = d.value) == null ? void 0 : b.focus) == null || O.call(b);
    };
    return ke(() => {
      d.value.checked = f.value;
    }), t({
      focus: C,
      checked: f
    }), (b, O) => (k(), W("div", {
      class: V(u(m)),
      onClick: Ae(I, ["prevent"])
    }, [
      A("input", {
        id: u(l),
        ref_key: "input",
        ref: d,
        class: V(u(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": u(f),
        "aria-disabled": u(i),
        "aria-label": b.ariaLabel,
        name: b.name,
        "true-value": b.activeValue,
        "false-value": b.inactiveValue,
        disabled: u(i),
        tabindex: b.tabindex,
        onChange: w,
        onKeydown: _t(I, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !b.inlinePrompt && (b.inactiveIcon || b.inactiveText) ? (k(), W("span", {
        key: 0,
        class: V(u(h))
      }, [
        b.inactiveIcon ? (k(), Q(u(Re), { key: 0 }, {
          default: G(() => [
            (k(), Q(Ze(b.inactiveIcon)))
          ]),
          _: 1
        })) : K("v-if", !0),
        !b.inactiveIcon && b.inactiveText ? (k(), W("span", {
          key: 1,
          "aria-hidden": u(f)
        }, U(b.inactiveText), 9, ["aria-hidden"])) : K("v-if", !0)
      ], 2)) : K("v-if", !0),
      A("span", {
        ref_key: "core",
        ref: p,
        class: V(u(s).e("core")),
        style: Be(u(g))
      }, [
        b.inlinePrompt ? (k(), W("div", {
          key: 0,
          class: V(u(s).e("inner"))
        }, [
          b.activeIcon || b.inactiveIcon ? (k(), Q(u(Re), {
            key: 0,
            class: V(u(s).is("icon"))
          }, {
            default: G(() => [
              (k(), Q(Ze(u(f) ? b.activeIcon : b.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : b.activeText || b.inactiveText ? (k(), W("span", {
            key: 1,
            class: V(u(s).is("text")),
            "aria-hidden": !u(f)
          }, U(u(f) ? b.activeText : b.inactiveText), 11, ["aria-hidden"])) : K("v-if", !0)
        ], 2)) : K("v-if", !0),
        A("div", {
          class: V(u(s).e("action"))
        }, [
          b.loading ? (k(), Q(u(Re), {
            key: 0,
            class: V(u(s).is("loading"))
          }, {
            default: G(() => [
              q(u(zi))
            ]),
            _: 1
          }, 8, ["class"])) : u(f) ? ae(b.$slots, "active-action", { key: 1 }, () => [
            b.activeActionIcon ? (k(), Q(u(Re), { key: 0 }, {
              default: G(() => [
                (k(), Q(Ze(b.activeActionIcon)))
              ]),
              _: 1
            })) : K("v-if", !0)
          ]) : u(f) ? K("v-if", !0) : ae(b.$slots, "inactive-action", { key: 2 }, () => [
            b.inactiveActionIcon ? (k(), Q(u(Re), { key: 0 }, {
              default: G(() => [
                (k(), Q(Ze(b.inactiveActionIcon)))
              ]),
              _: 1
            })) : K("v-if", !0)
          ])
        ], 2)
      ], 6),
      !b.inlinePrompt && (b.activeIcon || b.activeText) ? (k(), W("span", {
        key: 1,
        class: V(u(v))
      }, [
        b.activeIcon ? (k(), Q(u(Re), { key: 0 }, {
          default: G(() => [
            (k(), Q(Ze(b.activeIcon)))
          ]),
          _: 1
        })) : K("v-if", !0),
        !b.activeIcon && b.activeText ? (k(), W("span", {
          key: 1,
          "aria-hidden": !u(f)
        }, U(b.activeText), 9, ["aria-hidden"])) : K("v-if", !0)
      ], 2)) : K("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var Jy = /* @__PURE__ */ Te(Zy, [["__file", "switch.vue"]]);
const Qy = Ot(Jy), _u = ["success", "info", "warning", "error"], Ge = ji({
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
}), e_ = Se({
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
}), t_ = {
  destroy: () => !0
}, Et = sc([]), n_ = (e) => {
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
    const n = e, { Close: r } = ch, { ns: o, zIndex: a } = Fi("message"), { currentZIndex: s, nextZIndex: l } = a, i = D(), c = D(!1), d = D(0);
    let p;
    const m = L(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), h = L(() => {
      const T = n.type;
      return { [o.bm("icon", T)]: T && Gr[T] };
    }), v = L(() => n.icon || Gr[n.type] || ""), g = L(() => r_(n.id)), E = L(() => o_(n.id, n.offset) + g.value), f = L(() => d.value + E.value), w = L(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function I() {
      n.duration !== 0 && ({ stop: p } = Ti(() => {
        b();
      }, n.duration));
    }
    function C() {
      p?.();
    }
    function b() {
      c.value = !1;
    }
    function O({ code: T }) {
      T === Dt.esc && b();
    }
    return ke(() => {
      I(), l(), c.value = !0;
    }), le(() => n.repeatNum, () => {
      C(), I();
    }), Ct(document, "keydown", O), kt(i, () => {
      d.value = i.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: f,
      close: b
    }), (T, x) => (k(), Q(Hn, {
      name: u(o).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (B) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: G(() => [
        ze(A("div", {
          id: T.id,
          ref_key: "messageRef",
          ref: i,
          class: V([
            u(o).b(),
            { [u(o).m(T.type)]: T.type },
            u(o).is("center", T.center),
            u(o).is("closable", T.showClose),
            u(o).is("plain", T.plain),
            T.customClass
          ]),
          style: Be(u(w)),
          role: "alert",
          onMouseenter: C,
          onMouseleave: I
        }, [
          T.repeatNum > 1 ? (k(), Q(u(py), {
            key: 0,
            value: T.repeatNum,
            type: u(m),
            class: V(u(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : K("v-if", !0),
          u(v) ? (k(), Q(u(Re), {
            key: 1,
            class: V([u(o).e("icon"), u(h)])
          }, {
            default: G(() => [
              (k(), Q(Ze(u(v))))
            ]),
            _: 1
          }, 8, ["class"])) : K("v-if", !0),
          ae(T.$slots, "default", {}, () => [
            T.dangerouslyUseHTMLString ? (k(), W(et, { key: 1 }, [
              K(" Caution here, message could've been compromised, never use user's input as message "),
              A("p", {
                class: V(u(o).e("content")),
                innerHTML: T.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), W("p", {
              key: 0,
              class: V(u(o).e("content"))
            }, U(T.message), 3))
          ]),
          T.showClose ? (k(), Q(u(Re), {
            key: 2,
            class: V(u(o).e("closeBtn")),
            onClick: Ae(b, ["stop"])
          }, {
            default: G(() => [
              q(u(r))
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
var l_ = /* @__PURE__ */ Te(s_, [["__file", "message.vue"]]);
let i_ = 1;
const wu = (e) => {
  const t = !e || qe(e) || or(e) || Ie(e) ? { message: e } : e, n = {
    ...Ge,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (qe(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    St(r) || (r = document.body), n.appendTo = r;
  }
  return pn(yt.grouping) && !n.grouping && (n.grouping = yt.grouping), ge(yt.duration) && n.duration === 3e3 && (n.duration = yt.duration), ge(yt.offset) && n.offset === 16 && (n.offset = yt.offset), pn(yt.showClose) && !n.showClose && (n.showClose = yt.showClose), n;
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
  }, l = q(l_, s, Ie(s.message) || or(s.message) ? {
    default: Ie(s.message) ? s.message : () => s.message
  } : null);
  l.appContext = n || Wn._context, xr(l, a), e.appendChild(a.firstElementChild);
  const i = l.component, d = {
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
  return d;
}, Wn = (e = {}, t) => {
  if (!$e)
    return { close: () => {
    } };
  const n = wu(e);
  if (n.grouping && Et.length) {
    const o = Et.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (ge(yt.max) && Et.length >= yt.max)
    return { close: () => {
    } };
  const r = c_(n, t);
  return Et.push(r), r.handler;
};
_u.forEach((e) => {
  Wn[e] = (t = {}, n) => {
    const r = wu(t);
    return Wn({ ...r, type: e }, n);
  };
});
function f_(e) {
  for (const t of Et)
    (!e || e === t.props.type) && t.handler.close();
}
Wn.closeAll = f_;
Wn._context = null;
const d_ = Vi(Wn, "$message"), Eu = [
  "success",
  "info",
  "warning",
  "error"
], p_ = Se({
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
}), m_ = {
  destroy: () => !0
}, v_ = Y({
  name: "ElNotification"
}), g_ = /* @__PURE__ */ Y({
  ...v_,
  props: p_,
  emits: m_,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Fi("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: l } = uh, i = D(!1);
    let c;
    const d = L(() => {
      const I = n.type;
      return I && Gr[n.type] ? r.m(I) : "";
    }), p = L(() => n.type && Gr[n.type] || n.icon), m = L(() => n.position.endsWith("right") ? "right" : "left"), h = L(() => n.position.startsWith("top") ? "top" : "bottom"), v = L(() => {
      var I;
      return {
        [h.value]: `${n.offset}px`,
        zIndex: (I = n.zIndex) != null ? I : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: c } = Ti(() => {
        i.value && f();
      }, n.duration));
    }
    function E() {
      c?.();
    }
    function f() {
      i.value = !1;
    }
    function w({ code: I }) {
      I === Dt.delete || I === Dt.backspace ? E() : I === Dt.esc ? i.value && f() : g();
    }
    return ke(() => {
      g(), a(), i.value = !0;
    }), Ct(document, "keydown", w), t({
      visible: i,
      close: f
    }), (I, C) => (k(), Q(Hn, {
      name: u(r).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: (b) => I.$emit("destroy"),
      persisted: ""
    }, {
      default: G(() => [
        ze(A("div", {
          id: I.id,
          class: V([u(r).b(), I.customClass, u(m)]),
          style: Be(u(v)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: g,
          onClick: I.onClick
        }, [
          u(p) ? (k(), Q(u(Re), {
            key: 0,
            class: V([u(r).e("icon"), u(d)])
          }, {
            default: G(() => [
              (k(), Q(Ze(u(p))))
            ]),
            _: 1
          }, 8, ["class"])) : K("v-if", !0),
          A("div", {
            class: V(u(r).e("group"))
          }, [
            A("h2", {
              class: V(u(r).e("title")),
              textContent: U(I.title)
            }, null, 10, ["textContent"]),
            ze(A("div", {
              class: V(u(r).e("content")),
              style: Be(I.title ? void 0 : { margin: 0 })
            }, [
              ae(I.$slots, "default", {}, () => [
                I.dangerouslyUseHTMLString ? (k(), W(et, { key: 1 }, [
                  K(" Caution here, message could've been compromised, never use user's input as message "),
                  A("p", { innerHTML: I.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), W("p", { key: 0 }, U(I.message), 1))
              ])
            ], 6), [
              [tn, I.message]
            ]),
            I.showClose ? (k(), Q(u(Re), {
              key: 0,
              class: V(u(r).e("closeBtn")),
              onClick: Ae(f, ["stop"])
            }, {
              default: G(() => [
                q(u(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : K("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [tn, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var h_ = /* @__PURE__ */ Te(g_, [["__file", "notification.vue"]]);
const Xr = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Go = 16;
let b_ = 1;
const jn = function(e = {}, t) {
  if (!$e)
    return { close: () => {
    } };
  (qe(e) || or(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Xr[n].forEach(({ vm: d }) => {
    var p;
    r += (((p = d.el) == null ? void 0 : p.offsetHeight) || 0) + Go;
  }), r += Go;
  const o = `notification_${b_++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      y_(o, n, a);
    }
  };
  let l = document.body;
  St(e.appendTo) ? l = e.appendTo : qe(e.appendTo) && (l = document.querySelector(e.appendTo)), St(l) || (l = document.body);
  const i = document.createElement("div"), c = q(h_, s, Ie(s.message) ? s.message : or(s.message) ? () => s.message : null);
  return c.appContext = $t(t) ? jn._context : t, c.props.onDestroy = () => {
    xr(null, i);
  }, xr(c, i), Xr[n].push({ vm: c }), l.appendChild(i.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Eu.forEach((e) => {
  jn[e] = (t = {}, n) => ((qe(t) || or(t)) && (t = {
    message: t
  }), jn({ ...t, type: e }, n));
});
function y_(e, t, n) {
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
  const i = r.length;
  if (!(i < 1))
    for (let c = o; c < i; c++) {
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
const w_ = Vi(jn, "$notify"), Nt = {
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
const E_ = "snippets-code:developer-mode", Su = "snippets-code:frontend-diagnostics", S_ = 240, Zn = "[REDACTED]", Fr = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Zn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Zn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Zn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Zn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Zn}`
), Cu = (e) => {
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
    const e = JSON.parse(localStorage.getItem(Su) || "[]");
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
    data: Cu(n)
  });
  try {
    localStorage.setItem(
      Su,
      JSON.stringify(r.slice(-S_))
    );
  } catch {
  }
}, I_ = () => Ma(), A_ = (e) => e === "warn" || e === "error" || !1 || !1 || Ma(), Nr = (e, t, n) => {
  O_(e, t, n), A_(e) && It("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Cu(n)
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
async function Tu() {
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
const F_ = { class: "local-ai-chat" }, D_ = { class: "chat-header" }, V_ = { class: "chat-title" }, x_ = { class: "chat-actions" }, B_ = {
  key: 0,
  class: "empty-state"
}, z_ = { class: "message-meta" }, U_ = { class: "message-bubble" }, W_ = {
  key: 1,
  class: "message-row message-row--assistant"
}, j_ = { class: "message-meta" }, H_ = { class: "message-bubble loading-text" }, K_ = ["placeholder", "onKeydown"], G_ = { class: "input-actions" }, Y_ = /* @__PURE__ */ Y({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = pr(), n = si(), r = D([]), o = D(""), a = D(!1), s = D(!1), l = D(null), i = D(null);
    let c = null;
    const d = L(() => l.value?.healthy ? t("localAi.serviceHealthy") : l.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), p = async () => {
      await Le();
      const f = i.value;
      f && (f.scrollTop = f.scrollHeight);
    }, m = async () => {
      s.value = !0;
      try {
        l.value = await Tu();
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
      if (!f || a.value) return;
      const w = {
        id: `${Date.now()}-user`,
        role: "user",
        content: f
      };
      r.value.push(w), o.value = "", a.value = !0, await p();
      try {
        const I = await M_({
          messages: h()
        });
        r.value.push({
          id: `${Date.now()}-assistant`,
          role: "assistant",
          content: I.content
        }), await m();
      } catch (I) {
        Nt.msg(`${t("localAi.chatFailed")}: ${I}`, "error"), r.value.push({
          id: `${Date.now()}-assistant-error`,
          role: "assistant",
          content: String(I)
        });
      } finally {
        a.value = !1, await p();
      }
    }, g = () => {
      r.value = [];
    }, E = () => {
      n.push({
        path: "/config/category/settings",
        query: { tab: "localAi" }
      });
    };
    return ke(async () => {
      await m(), c = setInterval(() => {
        m().catch((f) => nr.warn("[LocalAI] status timer failed", f));
      }, 8e3);
    }), Zr(() => {
      c && (clearInterval(c), c = null);
    }), (f, w) => (k(), W("main", F_, [
      A("header", D_, [
        A("div", V_, [
          A(
            "h2",
            null,
            U(u(t)("localAi.chatTitle")),
            1
            /* TEXT */
          ),
          A(
            "span",
            {
              class: V(["status-pill", u(l)?.healthy ? "ready" : ""])
            },
            U(u(d)),
            3
            /* TEXT, CLASS */
          )
        ]),
        A("div", x_, [
          q(u(mt), {
            size: "small",
            plain: "",
            onClick: E
          }, {
            default: G(() => [
              Xe(
                U(u(t)("localAi.settings")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          q(u(mt), {
            size: "small",
            plain: "",
            loading: u(s),
            onClick: m
          }, {
            default: G(() => [
              Xe(
                U(u(t)("plugins.refresh")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ])
      ]),
      A(
        "section",
        {
          ref_key: "messageListRef",
          ref: i,
          class: "message-list"
        },
        [
          u(r).length ? K("v-if", !0) : (k(), W(
            "div",
            B_,
            U(u(t)("localAi.chatEmpty")),
            1
            /* TEXT */
          )),
          (k(!0), W(
            et,
            null,
            rr(u(r), (I) => (k(), W(
              "article",
              {
                key: I.id,
                class: V(["message-row", `message-row--${I.role}`])
              },
              [
                A(
                  "div",
                  z_,
                  U(I.role === "user" ? u(t)("localAi.you") : u(t)("localAi.assistant")),
                  1
                  /* TEXT */
                ),
                A(
                  "div",
                  U_,
                  U(I.content),
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
          u(a) ? (k(), W("article", W_, [
            A(
              "div",
              j_,
              U(u(t)("localAi.assistant")),
              1
              /* TEXT */
            ),
            A(
              "div",
              H_,
              U(u(t)("localAi.thinking")),
              1
              /* TEXT */
            )
          ])) : K("v-if", !0)
        ],
        512
        /* NEED_PATCH */
      ),
      A(
        "form",
        {
          class: "chat-input-bar",
          onSubmit: Ae(v, ["prevent"])
        },
        [
          ze(A("textarea", {
            "onUpdate:modelValue": w[0] || (w[0] = (I) => Dr(o) ? o.value = I : null),
            class: "chat-input",
            rows: "3",
            placeholder: u(t)("localAi.chatPlaceholder"),
            onKeydown: _t(Ae(v, ["ctrl", "prevent"]), ["enter"])
          }, null, 40, K_), [
            [Vr, u(o)]
          ]),
          A("div", G_, [
            q(u(mt), {
              size: "small",
              plain: "",
              disabled: u(a) || !u(r).length,
              onClick: g
            }, {
              default: G(() => [
                Xe(
                  U(u(t)("common.clear")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"]),
            q(u(mt), {
              type: "primary",
              size: "small",
              loading: u(a),
              disabled: !u(o).trim(),
              onClick: v
            }, {
              default: G(() => [
                Xe(
                  U(u(t)("localAi.send")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading", "disabled"])
          ])
        ],
        32
        /* NEED_HYDRATION */
      )
    ]));
  }
}), q_ = /* @__PURE__ */ ra(Y_, [["__scopeId", "data-v-609fc266"]]), X_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: q_
}, Symbol.toStringTag, { value: "Module" }));
async function Nl(e = {}) {
  return typeof e == "object" && Object.freeze(e), await It("plugin:dialog|open", { options: e });
}
const Z_ = { class: "settings-panel local-ai-settings" }, J_ = { class: "panel-header local-ai-header" }, Q_ = { class: "panel-title" }, e1 = { class: "header-actions" }, t1 = {
  key: 0,
  class: "panel-content"
}, n1 = { class: "status-strip" }, r1 = { class: "summarize-section" }, o1 = { class: "summarize-label" }, a1 = { class: "summarize-label-title" }, s1 = { class: "summarize-label-desc" }, l1 = { class: "summarize-input-wrapper local-ai-fields" }, i1 = { class: "field-row" }, u1 = { class: "path-control" }, c1 = { class: "field-row" }, f1 = { class: "field-row" }, d1 = { class: "field-row" }, p1 = { class: "path-control" }, m1 = ["placeholder"], v1 = { class: "summarize-section" }, g1 = { class: "summarize-label" }, h1 = { class: "summarize-label-title" }, b1 = { class: "summarize-label-desc" }, y1 = { class: "summarize-input-wrapper service-controls" }, _1 = { class: "service-url" }, w1 = { class: "summarize-section" }, E1 = { class: "summarize-label" }, S1 = { class: "summarize-label-title" }, C1 = { class: "summarize-label-desc" }, T1 = { class: "summarize-input-wrapper param-grid" }, O1 = { class: "number-field" }, I1 = { class: "number-field" }, A1 = { class: "number-field" }, L1 = { class: "number-field" }, P1 = { class: "number-field" }, N1 = { class: "number-field" }, k1 = { class: "summarize-section" }, R1 = { class: "summarize-label" }, $1 = { class: "summarize-label-title" }, M1 = { class: "summarize-label-desc" }, F1 = { class: "summarize-input-wrapper switch-list" }, D1 = { class: "summarize-section" }, V1 = { class: "summarize-label" }, x1 = { class: "summarize-label-title" }, B1 = { class: "summarize-label-desc" }, z1 = { class: "summarize-input-wrapper lifecycle-grid" }, U1 = { class: "number-field" }, W1 = { class: "number-field" }, j1 = { class: "summarize-section" }, H1 = { class: "summarize-label" }, K1 = { class: "summarize-label-title" }, G1 = { class: "summarize-label-desc" }, Y1 = { class: "summarize-input-wrapper param-grid" }, q1 = { class: "number-field" }, X1 = { class: "number-field" }, Z1 = { class: "number-field" }, J1 = { class: "settings-footer" }, Q1 = ["title"], ew = /* @__PURE__ */ Y({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = pr(), n = si(), r = D(null), o = D(null), a = D(null), s = D(null), l = D(!1), i = D(!1), c = D(!1), d = D(!1), p = D(!1);
    let m = null;
    const h = L(() => !!s.value?.selectedModelPath), v = L({
      get: () => r.value?.modelPath ?? "",
      set: (F) => {
        r.value && (r.value.modelPath = F || void 0);
      }
    }), g = L({
      get: () => r.value?.mmprojPath ?? "",
      set: (F) => {
        r.value && (r.value.mmprojPath = F || void 0);
      }
    }), E = L(() => o.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), f = L(() => h.value ? t("localAi.modelReady") : s.value?.message ?? t("localAi.modelMissing")), w = L(() => a.value?.healthy ? t("localAi.serviceHealthy") : a.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), I = (F) => F.split(/[\\/]+/).pop() ?? F, C = async () => {
      l.value = !0;
      try {
        r.value = await L_(), await Promise.all([b(), T(), O()]);
      } catch (F) {
        nr.error("[LocalAI] refresh settings failed", F), Nt.msg(`${t("localAi.refreshFailed")}: ${F}`, "error");
      } finally {
        l.value = !1;
      }
    }, b = async () => {
      o.value = await N_();
    }, O = async () => {
      a.value = await Tu();
    }, T = async () => {
      r.value && (s.value = await P_(r.value), !r.value.modelPath && s.value.selectedModelPath && (r.value.modelPath = s.value.selectedModelPath), !r.value.mmprojPath && s.value.selectedMmprojPath && (r.value.mmprojPath = s.value.selectedMmprojPath));
    }, x = async () => {
      if (r.value)
        try {
          await Io(r.value);
        } catch (F) {
          nr.warn("[LocalAI] autosave failed", F);
        }
    }, B = async () => {
      if (r.value) {
        i.value = !0;
        try {
          r.value = await Io(r.value), await Promise.all([b(), T(), O()]), Nt.msg(t("localAi.configSaved"));
        } catch (F) {
          Nt.msg(`${t("localAi.configSaveFailed")}: ${F}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, J = async () => {
      const F = await Nl({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !F || Array.isArray(F) || !r.value || (r.value.modelDir = F, r.value.modelPath = void 0, r.value.mmprojPath = void 0, await T());
    }, oe = async () => {
      const F = await Nl({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !F || Array.isArray(F) || !r.value || (r.value.runtimePath = F, await x(), await b());
    }, Z = async () => {
      if (r.value) {
        c.value = !0;
        try {
          await Io(r.value), a.value = await k_(r.value), Nt.msg(t("localAi.serviceStarted"));
        } catch (F) {
          Nt.msg(`${t("localAi.serviceStartFailed")}: ${F}`, "error");
        } finally {
          c.value = !1;
        }
      }
    }, ie = async () => {
      d.value = !0;
      try {
        await B(), a.value = await R_(), Nt.msg(t("localAi.serviceRestarted"));
      } catch (F) {
        Nt.msg(`${t("localAi.serviceRestartFailed")}: ${F}`, "error");
      } finally {
        d.value = !1;
      }
    }, Ce = async () => {
      p.value = !0;
      try {
        await $_(), await O(), Nt.msg(t("localAi.serviceStoppedMsg"));
      } catch (F) {
        Nt.msg(`${t("localAi.serviceStopFailed")}: ${F}`, "error");
      } finally {
        p.value = !1;
      }
    }, M = () => {
      n.push("/local-ai/chat");
    };
    return ke(async () => {
      await C(), m = setInterval(() => {
        O().catch((F) => nr.warn("[LocalAI] status refresh failed", F));
      }, 5e3);
    }), Zr(() => {
      m && (clearInterval(m), m = null);
    }), (F, P) => {
      const te = Ky, ee = Hy, se = Ly, we = Qy;
      return k(), W("div", Z_, [
        A("div", J_, [
          A(
            "h3",
            Q_,
            U(u(t)("localAi.title")),
            1
            /* TEXT */
          ),
          A("div", e1, [
            q(u(mt), {
              size: "small",
              plain: "",
              onClick: M
            }, {
              default: G(() => [
                Xe(
                  U(u(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            q(u(mt), {
              size: "small",
              loading: u(l),
              onClick: C
            }, {
              default: G(() => [
                Xe(
                  U(u(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        u(r) ? (k(), W("main", t1, [
          A("section", n1, [
            A(
              "div",
              {
                class: V(["status-item", { ready: u(o)?.available }])
              },
              [
                P[20] || (P[20] = A(
                  "span",
                  { class: "status-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                A(
                  "span",
                  null,
                  U(u(E)),
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            ),
            A(
              "div",
              {
                class: V(["status-item", { ready: u(h) }])
              },
              [
                P[21] || (P[21] = A(
                  "span",
                  { class: "status-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                A(
                  "span",
                  null,
                  U(u(f)),
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            ),
            A(
              "div",
              {
                class: V(["status-item", { ready: u(a)?.healthy }])
              },
              [
                P[22] || (P[22] = A(
                  "span",
                  { class: "status-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                A(
                  "span",
                  null,
                  U(u(w)),
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            )
          ]),
          A("section", r1, [
            A("div", o1, [
              A(
                "div",
                a1,
                U(u(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              A(
                "div",
                s1,
                U(u(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              )
            ]),
            A("div", l1, [
              A("label", i1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.modelDir")),
                  1
                  /* TEXT */
                ),
                A("div", u1, [
                  ze(A(
                    "input",
                    {
                      "onUpdate:modelValue": P[0] || (P[0] = (H) => u(r).modelDir = H),
                      class: "text-input",
                      onChange: T
                    },
                    null,
                    544
                    /* NEED_HYDRATION, NEED_PATCH */
                  ), [
                    [Vr, u(r).modelDir]
                  ]),
                  q(u(mt), {
                    size: "small",
                    plain: "",
                    onClick: J
                  }, {
                    default: G(() => [
                      Xe(
                        U(u(t)("common.browse")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ]),
              A("label", c1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.mainModel")),
                  1
                  /* TEXT */
                ),
                q(ee, {
                  modelValue: u(v),
                  "onUpdate:modelValue": P[1] || (P[1] = (H) => Dr(v) ? v.value = H : null),
                  class: "field-select",
                  clearable: "",
                  onChange: x
                }, {
                  default: G(() => [
                    (k(!0), W(
                      et,
                      null,
                      rr(u(s)?.mainModels ?? [], (H) => (k(), Q(te, {
                        key: H,
                        label: I(H),
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
              A("label", f1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.mmprojModel")),
                  1
                  /* TEXT */
                ),
                q(ee, {
                  modelValue: u(g),
                  "onUpdate:modelValue": P[2] || (P[2] = (H) => Dr(g) ? g.value = H : null),
                  class: "field-select",
                  clearable: "",
                  onChange: x
                }, {
                  default: G(() => [
                    (k(!0), W(
                      et,
                      null,
                      rr(u(s)?.mmprojModels ?? [], (H) => (k(), Q(te, {
                        key: H,
                        label: I(H),
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
              A("label", d1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.runtimePath")),
                  1
                  /* TEXT */
                ),
                A("div", p1, [
                  ze(A("input", {
                    "onUpdate:modelValue": P[3] || (P[3] = (H) => u(r).runtimePath = H),
                    class: "text-input",
                    placeholder: u(t)("localAi.runtimePathPlaceholder")
                  }, null, 8, m1), [
                    [Vr, u(r).runtimePath]
                  ]),
                  q(u(mt), {
                    size: "small",
                    plain: "",
                    onClick: oe
                  }, {
                    default: G(() => [
                      Xe(
                        U(u(t)("common.browse")),
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
          A("section", v1, [
            A("div", g1, [
              A(
                "div",
                h1,
                U(u(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              A(
                "div",
                b1,
                U(u(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              )
            ]),
            A("div", y1, [
              q(u(mt), {
                type: "primary",
                size: "small",
                loading: u(c),
                disabled: u(a)?.running,
                onClick: Z
              }, {
                default: G(() => [
                  Xe(
                    U(u(t)("localAi.startService")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading", "disabled"]),
              q(u(mt), {
                size: "small",
                loading: u(d),
                disabled: !u(a)?.running,
                onClick: ie
              }, {
                default: G(() => [
                  Xe(
                    U(u(t)("localAi.restartService")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading", "disabled"]),
              q(u(mt), {
                type: "danger",
                size: "small",
                plain: "",
                loading: u(p),
                disabled: !u(a)?.running,
                onClick: Ce
              }, {
                default: G(() => [
                  Xe(
                    U(u(t)("localAi.stopService")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading", "disabled"]),
              A(
                "span",
                _1,
                U(u(a)?.baseUrl),
                1
                /* TEXT */
              )
            ])
          ]),
          A("section", w1, [
            A("div", E1, [
              A(
                "div",
                S1,
                U(u(t)("localAi.inferenceParams")),
                1
                /* TEXT */
              ),
              A(
                "div",
                C1,
                U(u(t)("localAi.inferenceParamsDesc")),
                1
                /* TEXT */
              )
            ]),
            A("div", T1, [
              A("label", O1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.ctxSize")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).ctxSize,
                  "onUpdate:modelValue": P[4] || (P[4] = (H) => u(r).ctxSize = H),
                  min: 512,
                  max: 65536,
                  step: 512,
                  size: "small"
                }, null, 8, ["modelValue"])
              ]),
              A("label", I1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.gpuLayers")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).gpuLayers,
                  "onUpdate:modelValue": P[5] || (P[5] = (H) => u(r).gpuLayers = H),
                  min: 0,
                  max: 999,
                  step: 1,
                  size: "small"
                }, null, 8, ["modelValue"])
              ]),
              A("label", A1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.threads")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).threads,
                  "onUpdate:modelValue": P[6] || (P[6] = (H) => u(r).threads = H),
                  min: 1,
                  max: 64,
                  step: 1,
                  size: "small"
                }, null, 8, ["modelValue"])
              ]),
              A("label", L1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.batchSize")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).batchSize,
                  "onUpdate:modelValue": P[7] || (P[7] = (H) => u(r).batchSize = H),
                  min: 32,
                  max: 4096,
                  step: 32,
                  size: "small"
                }, null, 8, ["modelValue"])
              ]),
              A("label", P1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.ubatchSize")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).ubatchSize,
                  "onUpdate:modelValue": P[8] || (P[8] = (H) => u(r).ubatchSize = H),
                  min: 16,
                  max: 2048,
                  step: 16,
                  size: "small"
                }, null, 8, ["modelValue"])
              ]),
              A("label", N1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.mainGpu")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).mainGpu,
                  "onUpdate:modelValue": P[9] || (P[9] = (H) => u(r).mainGpu = H),
                  min: 0,
                  max: 8,
                  step: 1,
                  size: "small"
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          A("section", k1, [
            A("div", R1, [
              A(
                "div",
                $1,
                U(u(t)("localAi.acceleration")),
                1
                /* TEXT */
              ),
              A(
                "div",
                M1,
                U(u(t)("localAi.accelerationDesc")),
                1
                /* TEXT */
              )
            ]),
            A("div", F1, [
              A("label", null, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.flashAttn")),
                  1
                  /* TEXT */
                ),
                q(we, {
                  modelValue: u(r).flashAttn,
                  "onUpdate:modelValue": P[10] || (P[10] = (H) => u(r).flashAttn = H)
                }, null, 8, ["modelValue"])
              ]),
              A("label", null, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.kvOffload")),
                  1
                  /* TEXT */
                ),
                q(we, {
                  modelValue: u(r).kvOffload,
                  "onUpdate:modelValue": P[11] || (P[11] = (H) => u(r).kvOffload = H)
                }, null, 8, ["modelValue"])
              ]),
              A("label", null, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.mmap")),
                  1
                  /* TEXT */
                ),
                q(we, {
                  modelValue: u(r).mmap,
                  "onUpdate:modelValue": P[12] || (P[12] = (H) => u(r).mmap = H)
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          A("section", D1, [
            A("div", V1, [
              A(
                "div",
                x1,
                U(u(t)("localAi.lifecycle")),
                1
                /* TEXT */
              ),
              A(
                "div",
                B1,
                U(u(t)("localAi.lifecycleDesc")),
                1
                /* TEXT */
              )
            ]),
            A("div", z1, [
              A("label", null, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.autoStart")),
                  1
                  /* TEXT */
                ),
                q(we, {
                  modelValue: u(r).autoStartOnRequest,
                  "onUpdate:modelValue": P[13] || (P[13] = (H) => u(r).autoStartOnRequest = H)
                }, null, 8, ["modelValue"])
              ]),
              A("label", null, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.keepAlive")),
                  1
                  /* TEXT */
                ),
                q(we, {
                  modelValue: u(r).keepAlive,
                  "onUpdate:modelValue": P[14] || (P[14] = (H) => u(r).keepAlive = H)
                }, null, 8, ["modelValue"])
              ]),
              A("label", U1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.idleTimeout")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).idleTimeoutMinutes,
                  "onUpdate:modelValue": P[15] || (P[15] = (H) => u(r).idleTimeoutMinutes = H),
                  min: 0,
                  max: 240,
                  step: 1,
                  size: "small"
                }, null, 8, ["modelValue"])
              ]),
              A("label", W1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.requestTimeout")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).requestTimeoutSecs,
                  "onUpdate:modelValue": P[16] || (P[16] = (H) => u(r).requestTimeoutSecs = H),
                  min: 30,
                  max: 3600,
                  step: 30,
                  size: "small"
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          A("section", j1, [
            A("div", H1, [
              A(
                "div",
                K1,
                U(u(t)("localAi.generation")),
                1
                /* TEXT */
              ),
              A(
                "div",
                G1,
                U(u(t)("localAi.generationDesc")),
                1
                /* TEXT */
              )
            ]),
            A("div", Y1, [
              A("label", q1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.temperature")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).temperature,
                  "onUpdate:modelValue": P[17] || (P[17] = (H) => u(r).temperature = H),
                  min: 0,
                  max: 2,
                  step: 0.1,
                  precision: 1,
                  size: "small"
                }, null, 8, ["modelValue"])
              ]),
              A("label", X1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.maxTokens")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).maxTokens,
                  "onUpdate:modelValue": P[18] || (P[18] = (H) => u(r).maxTokens = H),
                  min: 64,
                  max: 8192,
                  step: 64,
                  size: "small"
                }, null, 8, ["modelValue"])
              ]),
              A("label", Z1, [
                A(
                  "span",
                  null,
                  U(u(t)("localAi.port")),
                  1
                  /* TEXT */
                ),
                q(se, {
                  modelValue: u(r).port,
                  "onUpdate:modelValue": P[19] || (P[19] = (H) => u(r).port = H),
                  min: 1024,
                  max: 65535,
                  step: 1,
                  size: "small"
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          A("div", J1, [
            q(u(mt), {
              type: "primary",
              loading: u(i),
              onClick: B
            }, {
              default: G(() => [
                Xe(
                  U(u(t)("common.save")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"]),
            u(a)?.commandLine ? (k(), W("span", {
              key: 0,
              class: "command-line",
              title: u(a).commandLine
            }, U(u(a).commandLine), 9, Q1)) : K("v-if", !0)
          ])
        ])) : K("v-if", !0)
      ]);
    };
  }
}), tw = /* @__PURE__ */ ra(ew, [["__scopeId", "data-v-ee94d529"]]), nw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tw
}, Symbol.toStringTag, { value: "Module" }));
export {
  ow as activate,
  ow as default
};
