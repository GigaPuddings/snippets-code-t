import * as tr from "vue";
import { inject as Je, ref as B, shallowRef as Lo, computed as W, watch as Be, onMounted as cn, onUnmounted as Lr, defineComponent as ue, h as ta, createVNode as Q, Text as ko, Fragment as Me, getCurrentInstance as kt, unref as E, readonly as To, getCurrentScope as No, onScopeDispose as Oo, nextTick as it, isRef as Io, warn as Po, provide as Ro, createElementBlock as X, openBlock as j, mergeProps as Mo, renderSlot as Tt, createElementVNode as T, normalizeClass as le, Transition as kr, withCtx as ct, withDirectives as ut, normalizeStyle as Nt, createTextVNode as Ao, toDisplayString as ne, vShow as Tn, shallowReactive as Do, createBlock as ze, createCommentVNode as De, resolveDynamicComponent as na, withModifiers as Lt, isVNode as nn, render as Nn, renderList as xo, vModelSelect as nr } from "vue";
const Bf = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => jf)
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Fo(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ss = typeof window < "u", mt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), $o = (e, t, n) => Wo({ l: e, k: t, s: n }), Wo = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ce = (e) => typeof e == "number" && isFinite(e), Uo = (e) => Tr(e) === "[object Date]", On = (e) => Tr(e) === "[object RegExp]", Fn = (e) => V(e) && Object.keys(e).length === 0, de = Object.assign, zo = Object.create, q = (e = null) => zo(e);
let as;
const bn = () => as || (as = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : q());
function os(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function is(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function jo(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, a) => `${s}="${is(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, a) => `${s}='${is(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Ho = Object.prototype.hasOwnProperty;
function Se(e, t) {
  return Ho.call(e, t);
}
const ae = Array.isArray, re = (e) => typeof e == "function", A = (e) => typeof e == "string", se = (e) => typeof e == "boolean", G = (e) => e !== null && typeof e == "object", Bo = (e) => G(e) && re(e.then) && re(e.catch), ra = Object.prototype.toString, Tr = (e) => ra.call(e), V = (e) => Tr(e) === "[object Object]", Vo = (e) => e == null ? "" : ae(e) || V(e) && e.toString === ra ? JSON.stringify(e, null, 2) : String(e);
function Nr(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const pn = (e) => !G(e) || ae(e);
function Cn(e, t) {
  if (pn(e) || pn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (G(r[a]) && !G(s[a]) && (s[a] = Array.isArray(r[a]) ? [] : q()), pn(s[a]) || pn(r[a]) ? s[a] = r[a] : n.push({ src: r[a], des: s[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Go(e, t, n) {
  return { line: e, column: t, offset: n };
}
function fr(e, t, n) {
  return { start: e, end: t };
}
const Y = {
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
}, Yo = 17;
function $n(e, t, n = {}) {
  const { domain: r, messages: s, args: a } = n, o = e, c = new SyntaxError(String(o));
  return c.code = e, t && (c.location = t), c.domain = r, c;
}
function Ko(e) {
  throw e;
}
const Ie = " ", Xo = "\r", he = `
`, qo = "\u2028", Jo = "\u2029";
function Zo(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const o = (v) => t[v] === Xo && t[v + 1] === he, c = (v) => t[v] === he, d = (v) => t[v] === Jo, p = (v) => t[v] === qo, _ = (v) => o(v) || c(v) || d(v) || p(v), C = () => n, L = () => r, P = () => s, F = () => a, b = (v) => o(v) || d(v) || p(v) ? he : t[v], N = () => b(n), f = () => b(n + a);
  function S() {
    return a = 0, _(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function y() {
    return o(n + a) && a++, a++, t[n + a];
  }
  function g() {
    n = 0, r = 1, s = 1, a = 0;
  }
  function I(v = 0) {
    a = v;
  }
  function R() {
    const v = n + a;
    for (; v !== n; )
      S();
    a = 0;
  }
  return {
    index: C,
    line: L,
    column: P,
    peekOffset: F,
    charAt: b,
    currentChar: N,
    currentPeek: f,
    next: S,
    peek: y,
    reset: g,
    resetPeek: I,
    skipToPeek: R
  };
}
const Ue = void 0, Qo = ".", ls = "'", ei = "tokenizer";
function ti(e, t = {}) {
  const n = t.location !== !1, r = Zo(e), s = () => r.index(), a = () => Go(r.line(), r.column(), r.index()), o = a(), c = s(), d = {
    currentType: 13,
    offset: c,
    startLoc: o,
    endLoc: o,
    lastType: 13,
    lastOffset: c,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, p = () => d, { onError: _ } = t;
  function C(l, u, w, ...M) {
    const J = p();
    if (u.column += w, u.offset += w, _) {
      const U = n ? fr(J.startLoc, u) : null, m = $n(l, U, {
        domain: ei,
        args: M
      });
      _(m);
    }
  }
  function L(l, u, w) {
    l.endLoc = a(), l.currentType = u;
    const M = { type: u };
    return n && (M.loc = fr(l.startLoc, l.endLoc)), w != null && (M.value = w), M;
  }
  const P = (l) => L(
    l,
    13
    /* TokenTypes.EOF */
  );
  function F(l, u) {
    return l.currentChar() === u ? (l.next(), u) : (C(Y.EXPECTED_TOKEN, a(), 0, u), "");
  }
  function b(l) {
    let u = "";
    for (; l.currentPeek() === Ie || l.currentPeek() === he; )
      u += l.currentPeek(), l.peek();
    return u;
  }
  function N(l) {
    const u = b(l);
    return l.skipToPeek(), u;
  }
  function f(l) {
    if (l === Ue)
      return !1;
    const u = l.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u === 95;
  }
  function S(l) {
    if (l === Ue)
      return !1;
    const u = l.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function y(l, u) {
    const { currentType: w } = u;
    if (w !== 2)
      return !1;
    b(l);
    const M = f(l.currentPeek());
    return l.resetPeek(), M;
  }
  function g(l, u) {
    const { currentType: w } = u;
    if (w !== 2)
      return !1;
    b(l);
    const M = l.currentPeek() === "-" ? l.peek() : l.currentPeek(), J = S(M);
    return l.resetPeek(), J;
  }
  function I(l, u) {
    const { currentType: w } = u;
    if (w !== 2)
      return !1;
    b(l);
    const M = l.currentPeek() === ls;
    return l.resetPeek(), M;
  }
  function R(l, u) {
    const { currentType: w } = u;
    if (w !== 7)
      return !1;
    b(l);
    const M = l.currentPeek() === ".";
    return l.resetPeek(), M;
  }
  function v(l, u) {
    const { currentType: w } = u;
    if (w !== 8)
      return !1;
    b(l);
    const M = f(l.currentPeek());
    return l.resetPeek(), M;
  }
  function ee(l, u) {
    const { currentType: w } = u;
    if (!(w === 7 || w === 11))
      return !1;
    b(l);
    const M = l.currentPeek() === ":";
    return l.resetPeek(), M;
  }
  function D(l, u) {
    const { currentType: w } = u;
    if (w !== 9)
      return !1;
    const M = () => {
      const U = l.currentPeek();
      return U === "{" ? f(l.peek()) : U === "@" || U === "|" || U === ":" || U === "." || U === Ie || !U ? !1 : U === he ? (l.peek(), M()) : ie(l, !1);
    }, J = M();
    return l.resetPeek(), J;
  }
  function z(l) {
    b(l);
    const u = l.currentPeek() === "|";
    return l.resetPeek(), u;
  }
  function ie(l, u = !0) {
    const w = (J = !1, U = "") => {
      const m = l.currentPeek();
      return m === "{" || m === "@" || !m ? J : m === "|" ? !(U === Ie || U === he) : m === Ie ? (l.peek(), w(!0, Ie)) : m === he ? (l.peek(), w(!0, he)) : !0;
    }, M = w();
    return u && l.resetPeek(), M;
  }
  function H(l, u) {
    const w = l.currentChar();
    return w === Ue ? Ue : u(w) ? (l.next(), w) : null;
  }
  function xt(l) {
    const u = l.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36;
  }
  function Ft(l) {
    return H(l, xt);
  }
  function $t(l) {
    const u = l.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36 || // $
    u === 45;
  }
  function Wt(l) {
    return H(l, $t);
  }
  function Ut(l) {
    const u = l.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function zt(l) {
    return H(l, Ut);
  }
  function be(l) {
    const u = l.charCodeAt(0);
    return u >= 48 && u <= 57 || // 0-9
    u >= 65 && u <= 70 || // A-F
    u >= 97 && u <= 102;
  }
  function et(l) {
    return H(l, be);
  }
  function vt(l) {
    let u = "", w = "";
    for (; u = zt(l); )
      w += u;
    return w;
  }
  function jt(l) {
    let u = "";
    for (; ; ) {
      const w = l.currentChar();
      if (w === "{" || w === "}" || w === "@" || w === "|" || !w)
        break;
      if (w === Ie || w === he)
        if (ie(l))
          u += w, l.next();
        else {
          if (z(l))
            break;
          u += w, l.next();
        }
      else
        u += w, l.next();
    }
    return u;
  }
  function yt(l) {
    N(l);
    let u = "", w = "";
    for (; u = Wt(l); )
      w += u;
    const M = l.currentChar();
    if (M && M !== "}" && M !== Ue && M !== Ie && M !== he && M !== "　") {
      const J = tt(l);
      return C(Y.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, w + J), w + J;
    }
    return l.currentChar() === Ue && C(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), w;
  }
  function me(l) {
    N(l);
    let u = "";
    return l.currentChar() === "-" ? (l.next(), u += `-${vt(l)}`) : u += vt(l), l.currentChar() === Ue && C(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), u;
  }
  function Ge(l) {
    return l !== ls && l !== he;
  }
  function Ye(l) {
    N(l), F(l, "'");
    let u = "", w = "";
    for (; u = H(l, Ge); )
      u === "\\" ? w += Ht(l) : w += u;
    const M = l.currentChar();
    return M === he || M === Ue ? (C(Y.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), M === he && (l.next(), F(l, "'")), w) : (F(l, "'"), w);
  }
  function Ht(l) {
    const u = l.currentChar();
    switch (u) {
      case "\\":
      case "'":
        return l.next(), `\\${u}`;
      case "u":
        return wt(l, u, 4);
      case "U":
        return wt(l, u, 6);
      default:
        return C(Y.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, u), "";
    }
  }
  function wt(l, u, w) {
    F(l, u);
    let M = "";
    for (let J = 0; J < w; J++) {
      const U = et(l);
      if (!U) {
        C(Y.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${u}${M}${l.currentChar()}`);
        break;
      }
      M += U;
    }
    return `\\${u}${M}`;
  }
  function Bt(l) {
    return l !== "{" && l !== "}" && l !== Ie && l !== he;
  }
  function tt(l) {
    N(l);
    let u = "", w = "";
    for (; u = H(l, Bt); )
      w += u;
    return w;
  }
  function bt(l) {
    let u = "", w = "";
    for (; u = Ft(l); )
      w += u;
    return w;
  }
  function Ct(l) {
    const u = (w) => {
      const M = l.currentChar();
      return M === "{" || M === "@" || M === "|" || M === "(" || M === ")" || !M || M === Ie ? w : (w += M, l.next(), u(w));
    };
    return u("");
  }
  function Ke(l) {
    N(l);
    const u = F(
      l,
      "|"
      /* TokenChars.Pipe */
    );
    return N(l), u;
  }
  function Fe(l, u) {
    let w = null;
    switch (l.currentChar()) {
      case "{":
        return u.braceNest >= 1 && C(Y.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), l.next(), w = L(
          u,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), N(l), u.braceNest++, w;
      case "}":
        return u.braceNest > 0 && u.currentType === 2 && C(Y.EMPTY_PLACEHOLDER, a(), 0), l.next(), w = L(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), u.braceNest--, u.braceNest > 0 && N(l), u.inLinked && u.braceNest === 0 && (u.inLinked = !1), w;
      case "@":
        return u.braceNest > 0 && C(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), w = ke(l, u) || P(u), u.braceNest = 0, w;
      default: {
        let J = !0, U = !0, m = !0;
        if (z(l))
          return u.braceNest > 0 && C(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), w = L(u, 1, Ke(l)), u.braceNest = 0, u.inLinked = !1, w;
        if (u.braceNest > 0 && (u.currentType === 4 || u.currentType === 5 || u.currentType === 6))
          return C(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), u.braceNest = 0, $e(l, u);
        if (J = y(l, u))
          return w = L(u, 4, yt(l)), N(l), w;
        if (U = g(l, u))
          return w = L(u, 5, me(l)), N(l), w;
        if (m = I(l, u))
          return w = L(u, 6, Ye(l)), N(l), w;
        if (!J && !U && !m)
          return w = L(u, 12, tt(l)), C(Y.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, w.value), N(l), w;
        break;
      }
    }
    return w;
  }
  function ke(l, u) {
    const { currentType: w } = u;
    let M = null;
    const J = l.currentChar();
    switch ((w === 7 || w === 8 || w === 11 || w === 9) && (J === he || J === Ie) && C(Y.INVALID_LINKED_FORMAT, a(), 0), J) {
      case "@":
        return l.next(), M = L(
          u,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), u.inLinked = !0, M;
      case ".":
        return N(l), l.next(), L(
          u,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return N(l), l.next(), L(
          u,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return z(l) ? (M = L(u, 1, Ke(l)), u.braceNest = 0, u.inLinked = !1, M) : R(l, u) || ee(l, u) ? (N(l), ke(l, u)) : v(l, u) ? (N(l), L(u, 11, bt(l))) : D(l, u) ? (N(l), J === "{" ? Fe(l, u) || M : L(u, 10, Ct(l))) : (w === 7 && C(Y.INVALID_LINKED_FORMAT, a(), 0), u.braceNest = 0, u.inLinked = !1, $e(l, u));
    }
  }
  function $e(l, u) {
    let w = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (u.braceNest > 0)
      return Fe(l, u) || P(u);
    if (u.inLinked)
      return ke(l, u) || P(u);
    switch (l.currentChar()) {
      case "{":
        return Fe(l, u) || P(u);
      case "}":
        return C(Y.UNBALANCED_CLOSING_BRACE, a(), 0), l.next(), L(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return ke(l, u) || P(u);
      default: {
        if (z(l))
          return w = L(u, 1, Ke(l)), u.braceNest = 0, u.inLinked = !1, w;
        if (ie(l))
          return L(u, 0, jt(l));
        break;
      }
    }
    return w;
  }
  function Vt() {
    const { currentType: l, offset: u, startLoc: w, endLoc: M } = d;
    return d.lastType = l, d.lastOffset = u, d.lastStartLoc = w, d.lastEndLoc = M, d.offset = s(), d.startLoc = a(), r.currentChar() === Ue ? L(
      d,
      13
      /* TokenTypes.EOF */
    ) : $e(r, d);
  }
  return {
    nextToken: Vt,
    currentOffset: s,
    currentPosition: a,
    context: p
  };
}
const ni = "parser", ri = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function si(e, t, n) {
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
function ai(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, S, y, g, ...I) {
    const R = f.currentPosition();
    if (R.offset += g, R.column += g, n) {
      const v = t ? fr(y, R) : null, ee = $n(S, v, {
        domain: ni,
        args: I
      });
      n(ee);
    }
  }
  function s(f, S, y) {
    const g = { type: f };
    return t && (g.start = S, g.end = S, g.loc = { start: y, end: y }), g;
  }
  function a(f, S, y, g) {
    t && (f.end = S, f.loc && (f.loc.end = y));
  }
  function o(f, S) {
    const y = f.context(), g = s(3, y.offset, y.startLoc);
    return g.value = S, a(g, f.currentOffset(), f.currentPosition()), g;
  }
  function c(f, S) {
    const y = f.context(), { lastOffset: g, lastStartLoc: I } = y, R = s(5, g, I);
    return R.index = parseInt(S, 10), f.nextToken(), a(R, f.currentOffset(), f.currentPosition()), R;
  }
  function d(f, S) {
    const y = f.context(), { lastOffset: g, lastStartLoc: I } = y, R = s(4, g, I);
    return R.key = S, f.nextToken(), a(R, f.currentOffset(), f.currentPosition()), R;
  }
  function p(f, S) {
    const y = f.context(), { lastOffset: g, lastStartLoc: I } = y, R = s(9, g, I);
    return R.value = S.replace(ri, si), f.nextToken(), a(R, f.currentOffset(), f.currentPosition()), R;
  }
  function _(f) {
    const S = f.nextToken(), y = f.context(), { lastOffset: g, lastStartLoc: I } = y, R = s(8, g, I);
    return S.type !== 11 ? (r(f, Y.UNEXPECTED_EMPTY_LINKED_MODIFIER, y.lastStartLoc, 0), R.value = "", a(R, g, I), {
      nextConsumeToken: S,
      node: R
    }) : (S.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Pe(S)), R.value = S.value || "", a(R, f.currentOffset(), f.currentPosition()), {
      node: R
    });
  }
  function C(f, S) {
    const y = f.context(), g = s(7, y.offset, y.startLoc);
    return g.value = S, a(g, f.currentOffset(), f.currentPosition()), g;
  }
  function L(f) {
    const S = f.context(), y = s(6, S.offset, S.startLoc);
    let g = f.nextToken();
    if (g.type === 8) {
      const I = _(f);
      y.modifier = I.node, g = I.nextConsumeToken || f.nextToken();
    }
    switch (g.type !== 9 && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pe(g)), g = f.nextToken(), g.type === 2 && (g = f.nextToken()), g.type) {
      case 10:
        g.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pe(g)), y.key = C(f, g.value || "");
        break;
      case 4:
        g.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pe(g)), y.key = d(f, g.value || "");
        break;
      case 5:
        g.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pe(g)), y.key = c(f, g.value || "");
        break;
      case 6:
        g.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pe(g)), y.key = p(f, g.value || "");
        break;
      default: {
        r(f, Y.UNEXPECTED_EMPTY_LINKED_KEY, S.lastStartLoc, 0);
        const I = f.context(), R = s(7, I.offset, I.startLoc);
        return R.value = "", a(R, I.offset, I.startLoc), y.key = R, a(y, I.offset, I.startLoc), {
          nextConsumeToken: g,
          node: y
        };
      }
    }
    return a(y, f.currentOffset(), f.currentPosition()), {
      node: y
    };
  }
  function P(f) {
    const S = f.context(), y = S.currentType === 1 ? f.currentOffset() : S.offset, g = S.currentType === 1 ? S.endLoc : S.startLoc, I = s(2, y, g);
    I.items = [];
    let R = null;
    do {
      const D = R || f.nextToken();
      switch (R = null, D.type) {
        case 0:
          D.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pe(D)), I.items.push(o(f, D.value || ""));
          break;
        case 5:
          D.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pe(D)), I.items.push(c(f, D.value || ""));
          break;
        case 4:
          D.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pe(D)), I.items.push(d(f, D.value || ""));
          break;
        case 6:
          D.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Pe(D)), I.items.push(p(f, D.value || ""));
          break;
        case 7: {
          const z = L(f);
          I.items.push(z.node), R = z.nextConsumeToken || null;
          break;
        }
      }
    } while (S.currentType !== 13 && S.currentType !== 1);
    const v = S.currentType === 1 ? S.lastOffset : f.currentOffset(), ee = S.currentType === 1 ? S.lastEndLoc : f.currentPosition();
    return a(I, v, ee), I;
  }
  function F(f, S, y, g) {
    const I = f.context();
    let R = g.items.length === 0;
    const v = s(1, S, y);
    v.cases = [], v.cases.push(g);
    do {
      const ee = P(f);
      R || (R = ee.items.length === 0), v.cases.push(ee);
    } while (I.currentType !== 13);
    return R && r(f, Y.MUST_HAVE_MESSAGES_IN_PLURAL, y, 0), a(v, f.currentOffset(), f.currentPosition()), v;
  }
  function b(f) {
    const S = f.context(), { offset: y, startLoc: g } = S, I = P(f);
    return S.currentType === 13 ? I : F(f, y, g, I);
  }
  function N(f) {
    const S = ti(f, de({}, e)), y = S.context(), g = s(0, y.offset, y.startLoc);
    return t && g.loc && (g.loc.source = f), g.body = b(S), e.onCacheKey && (g.cacheKey = e.onCacheKey(f)), y.currentType !== 13 && r(S, Y.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, f[y.offset] || ""), a(g, S.currentOffset(), S.currentPosition()), g;
  }
  return { parse: N };
}
function Pe(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function oi(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function cs(e, t) {
  for (let n = 0; n < e.length; n++)
    Or(e[n], t);
}
function Or(e, t) {
  switch (e.type) {
    case 1:
      cs(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      cs(e.items, t);
      break;
    case 6: {
      Or(e.key, t), t.helper(
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
function ii(e, t = {}) {
  const n = oi(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Or(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function li(e) {
  const t = e.body;
  return t.type === 2 ? us(t) : t.cases.forEach((n) => us(n)), e;
}
function us(e) {
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
      e.static = Nr(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function St(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      St(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        St(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        St(n[r]);
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
      St(t.key), t.k = t.key, delete t.key, t.modifier && (St(t.modifier), t.m = t.modifier, delete t.modifier);
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
function ci(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t, a = t.location !== !1, o = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: s,
    indentLevel: 0
  };
  a && e.loc && (o.source = e.loc.source);
  const c = () => o;
  function d(b, N) {
    o.code += b;
  }
  function p(b, N = !0) {
    const f = N ? r : "";
    d(s ? f + "  ".repeat(b) : f);
  }
  function _(b = !0) {
    const N = ++o.indentLevel;
    b && p(N);
  }
  function C(b = !0) {
    const N = --o.indentLevel;
    b && p(N);
  }
  function L() {
    p(o.indentLevel);
  }
  return {
    context: c,
    push: d,
    indent: _,
    deindent: C,
    newline: L,
    helper: (b) => `_${b}`,
    needIndent: () => o.needIndent
  };
}
function ui(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Ot(e, t.key), t.modifier ? (e.push(", "), Ot(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function di(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let a = 0; a < s && (Ot(e, t.items[a]), a !== s - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function fi(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let a = 0; a < s && (Ot(e, t.cases[a]), a !== s - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function hi(e, t) {
  t.body ? Ot(e, t.body) : e.push("null");
}
function Ot(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      hi(e, t);
      break;
    case 1:
      fi(e, t);
      break;
    case 2:
      di(e, t);
      break;
    case 6:
      ui(e, t);
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
const pi = (e, t = {}) => {
  const n = A(t.mode) ? t.mode : "normal", r = A(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], c = ci(e, {
    filename: r,
    breakLineCode: s,
    needIndent: a
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(a), o.length > 0 && (c.push(`const { ${Nr(o.map((_) => `${_}: _${_}`), ", ")} } = ctx`), c.newline()), c.push("return "), Ot(c, e), c.deindent(a), c.push("}"), delete e.helpers;
  const { code: d, map: p } = c.context();
  return {
    ast: e,
    code: d,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function mi(e, t = {}) {
  const n = de({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, c = ai(n).parse(e);
  return r ? (a && li(c), s && St(c), { ast: c, code: "" }) : (ii(c, n), pi(c, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function gi() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (bn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function xe(e) {
  return G(e) && Ir(e) === 0 && (Se(e, "b") || Se(e, "body"));
}
const sa = ["b", "body"];
function _i(e) {
  return Ze(e, sa);
}
const aa = ["c", "cases"];
function vi(e) {
  return Ze(e, aa, []);
}
const oa = ["s", "static"];
function yi(e) {
  return Ze(e, oa);
}
const ia = ["i", "items"];
function wi(e) {
  return Ze(e, ia, []);
}
const la = ["t", "type"];
function Ir(e) {
  return Ze(e, la);
}
const ca = ["v", "value"];
function mn(e, t) {
  const n = Ze(e, ca);
  if (n != null)
    return n;
  throw rn(t);
}
const ua = ["m", "modifier"];
function bi(e) {
  return Ze(e, ua);
}
const da = ["k", "key"];
function Ci(e) {
  const t = Ze(e, da);
  if (t)
    return t;
  throw rn(
    6
    /* NodeTypes.Linked */
  );
}
function Ze(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Se(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const fa = [
  ...sa,
  ...aa,
  ...oa,
  ...ia,
  ...da,
  ...ua,
  ...ca,
  ...la
];
function rn(e) {
  return new Error(`unhandled node type: ${e}`);
}
function rr(e) {
  return (n) => Ei(n, e);
}
function Ei(e, t) {
  const n = _i(t);
  if (n == null)
    throw rn(
      0
      /* NodeTypes.Resource */
    );
  if (Ir(n) === 1) {
    const a = vi(n);
    return e.plural(a.reduce((o, c) => [
      ...o,
      ds(e, c)
    ], []));
  } else
    return ds(e, n);
}
function ds(e, t) {
  const n = yi(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = wi(t).reduce((s, a) => [...s, hr(e, a)], []);
    return e.normalize(r);
  }
}
function hr(e, t) {
  const n = Ir(t);
  switch (n) {
    case 3:
      return mn(t, n);
    case 9:
      return mn(t, n);
    case 4: {
      const r = t;
      if (Se(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Se(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw rn(n);
    }
    case 5: {
      const r = t;
      if (Se(r, "i") && ce(r.i))
        return e.interpolate(e.list(r.i));
      if (Se(r, "index") && ce(r.index))
        return e.interpolate(e.list(r.index));
      throw rn(n);
    }
    case 6: {
      const r = t, s = bi(r), a = Ci(r);
      return e.linked(hr(e, a), s ? hr(e, s) : void 0, e.type);
    }
    case 7:
      return mn(t, n);
    case 8:
      return mn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Si = (e) => e;
let gn = q();
function Li(e, t = {}) {
  let n = !1;
  const r = t.onError || Ko;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...mi(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function ki(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && A(e)) {
    se(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || Si)(e), s = gn[r];
    if (s)
      return s;
    const { ast: a, detectError: o } = Li(e, {
      ...t,
      location: !1,
      jit: !0
    }), c = rr(a);
    return o ? c : gn[r] = c;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = gn[n];
      return r || (gn[n] = rr(e));
    } else
      return rr(e);
  }
}
const je = {
  INVALID_ARGUMENT: Yo,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Ti = 24;
function He(e) {
  return $n(e, null, void 0);
}
function Pr(e, t) {
  return t.locale != null ? fs(t.locale) : fs(e.locale);
}
let sr;
function fs(e) {
  if (A(e))
    return e;
  if (re(e)) {
    if (e.resolvedOnce && sr != null)
      return sr;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Bo(t))
        throw He(je.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return sr = t;
    } else
      throw He(je.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw He(je.NOT_SUPPORT_LOCALE_TYPE);
}
function Ni(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ae(t) ? t : G(t) ? Object.keys(t) : A(t) ? [t] : [n]
  ])];
}
function ha(e, t, n) {
  const r = A(n) ? n : In, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let a = s.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let o = [n];
    for (; ae(o); )
      o = hs(a, o, t);
    const c = ae(t) || !V(t) ? t : t.default ? t.default : null;
    o = A(c) ? [c] : c, ae(o) && hs(a, o, !1), s.__localeChainCache.set(r, a);
  }
  return a;
}
function hs(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && se(r); s++) {
    const a = t[s];
    A(a) && (r = Oi(e, t[s], n));
  }
  return r;
}
function Oi(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = Ii(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function Ii(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (ae(n) || V(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Qe = [];
Qe[
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
Qe[
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
Qe[
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
Qe[
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
Qe[
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
Qe[
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
Qe[
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
const Pi = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ri(e) {
  return Pi.test(e);
}
function Mi(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ai(e) {
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
function Di(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ri(t) ? Mi(t) : "*" + t;
}
function xi(e) {
  const t = [];
  let n = -1, r = 0, s = 0, a, o, c, d, p, _, C;
  const L = [];
  L[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = c : o += c;
  }, L[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, L[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    L[
      0
      /* Actions.APPEND */
    ](), s++;
  }, L[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, L[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, o === void 0 || (o = Di(o), o === !1))
        return !1;
      L[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function P() {
    const F = e[n + 1];
    if (r === 5 && F === "'" || r === 6 && F === '"')
      return n++, c = "\\" + F, L[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && P())) {
      if (d = Ai(a), C = Qe[r], p = C[d] || C.l || 8, p === 8 || (r = p[0], p[1] !== void 0 && (_ = L[p[1]], _ && (c = a, _() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const ps = /* @__PURE__ */ new Map();
function Fi(e, t) {
  return G(e) ? e[t] : null;
}
function $i(e, t) {
  if (!G(e))
    return null;
  let n = ps.get(t);
  if (n || (n = xi(t), n && ps.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, a = 0;
  for (; a < r; ) {
    const o = n[a];
    if (fa.includes(o) && xe(s))
      return null;
    const c = s[o];
    if (c === void 0 || re(s))
      return null;
    s = c, a++;
  }
  return s;
}
const Wi = "11.2.2", Wn = -1, In = "en-US", ms = "", gs = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ui() {
  return {
    upper: (e, t) => t === "text" && A(e) ? e.toUpperCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && A(e) ? e.toLowerCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && A(e) ? gs(e) : t === "vnode" && G(e) && "__v_isVNode" in e ? gs(e.children) : e
  };
}
let pa;
function zi(e) {
  pa = e;
}
let ma;
function ji(e) {
  ma = e;
}
let ga;
function Hi(e) {
  ga = e;
}
let _a = null;
const _s = (e) => {
  _a = e;
}, Bi = () => _a;
let vs = 0;
function Vi(e = {}) {
  const t = re(e.onWarn) ? e.onWarn : Fo, n = A(e.version) ? e.version : Wi, r = A(e.locale) || re(e.locale) ? e.locale : In, s = re(r) ? In : r, a = ae(e.fallbackLocale) || V(e.fallbackLocale) || A(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = V(e.messages) ? e.messages : ar(s), c = V(e.datetimeFormats) ? e.datetimeFormats : ar(s), d = V(e.numberFormats) ? e.numberFormats : ar(s), p = de(q(), e.modifiers, Ui()), _ = e.pluralRules || q(), C = re(e.missing) ? e.missing : null, L = se(e.missingWarn) || On(e.missingWarn) ? e.missingWarn : !0, P = se(e.fallbackWarn) || On(e.fallbackWarn) ? e.fallbackWarn : !0, F = !!e.fallbackFormat, b = !!e.unresolving, N = re(e.postTranslation) ? e.postTranslation : null, f = V(e.processor) ? e.processor : null, S = se(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, g = re(e.messageCompiler) ? e.messageCompiler : pa, I = re(e.messageResolver) ? e.messageResolver : ma || Fi, R = re(e.localeFallbacker) ? e.localeFallbacker : ga || Ni, v = G(e.fallbackContext) ? e.fallbackContext : void 0, ee = e, D = G(ee.__datetimeFormatters) ? ee.__datetimeFormatters : /* @__PURE__ */ new Map(), z = G(ee.__numberFormatters) ? ee.__numberFormatters : /* @__PURE__ */ new Map(), ie = G(ee.__meta) ? ee.__meta : {};
  vs++;
  const H = {
    version: n,
    cid: vs,
    locale: r,
    fallbackLocale: a,
    messages: o,
    modifiers: p,
    pluralRules: _,
    missing: C,
    missingWarn: L,
    fallbackWarn: P,
    fallbackFormat: F,
    unresolving: b,
    postTranslation: N,
    processor: f,
    warnHtmlMessage: S,
    escapeParameter: y,
    messageCompiler: g,
    messageResolver: I,
    localeFallbacker: R,
    fallbackContext: v,
    onWarn: t,
    __meta: ie
  };
  return H.datetimeFormats = c, H.numberFormats = d, H.__datetimeFormatters = D, H.__numberFormatters = z, H;
}
const ar = (e) => ({ [e]: q() });
function Rr(e, t, n, r, s) {
  const { missing: a, onWarn: o } = e;
  if (a !== null) {
    const c = a(e, n, t, s);
    return A(c) ? c : t;
  } else
    return t;
}
function Xt(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Gi(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Yi(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Gi(e, t[r]))
      return !0;
  return !1;
}
function ys(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: c } = e, [d, p, _, C] = pr(...t), L = se(_.missingWarn) ? _.missingWarn : e.missingWarn;
  se(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn;
  const P = !!_.part, F = Pr(e, _), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    F
  );
  if (!A(d) || d === "")
    return new Intl.DateTimeFormat(F, C).format(p);
  let N = {}, f, S = null;
  const y = "datetime format";
  for (let R = 0; R < b.length && (f = b[R], N = n[f] || {}, S = N[d], !V(S)); R++)
    Rr(e, d, f, L, y);
  if (!V(S) || !A(f))
    return r ? Wn : d;
  let g = `${f}__${d}`;
  Fn(C) || (g = `${g}__${JSON.stringify(C)}`);
  let I = c.get(g);
  return I || (I = new Intl.DateTimeFormat(f, de({}, S, C)), c.set(g, I)), P ? I.formatToParts(p) : I.format(p);
}
const va = [
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
function pr(...e) {
  const [t, n, r, s] = e, a = q();
  let o = q(), c;
  if (A(t)) {
    const d = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!d)
      throw He(je.INVALID_ISO_DATE_ARGUMENT);
    const p = d[3] ? d[3].trim().startsWith("T") ? `${d[1].trim()}${d[3].trim()}` : `${d[1].trim()}T${d[3].trim()}` : d[1].trim();
    c = new Date(p);
    try {
      c.toISOString();
    } catch {
      throw He(je.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Uo(t)) {
    if (isNaN(t.getTime()))
      throw He(je.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (ce(t))
    c = t;
  else
    throw He(je.INVALID_ARGUMENT);
  return A(n) ? a.key = n : V(n) && Object.keys(n).forEach((d) => {
    va.includes(d) ? o[d] = n[d] : a[d] = n[d];
  }), A(r) ? a.locale = r : V(r) && (o = r), V(s) && (o = s), [a.key || "", c, a, o];
}
function ws(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function bs(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: c } = e, [d, p, _, C] = mr(...t), L = se(_.missingWarn) ? _.missingWarn : e.missingWarn;
  se(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn;
  const P = !!_.part, F = Pr(e, _), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    F
  );
  if (!A(d) || d === "")
    return new Intl.NumberFormat(F, C).format(p);
  let N = {}, f, S = null;
  const y = "number format";
  for (let R = 0; R < b.length && (f = b[R], N = n[f] || {}, S = N[d], !V(S)); R++)
    Rr(e, d, f, L, y);
  if (!V(S) || !A(f))
    return r ? Wn : d;
  let g = `${f}__${d}`;
  Fn(C) || (g = `${g}__${JSON.stringify(C)}`);
  let I = c.get(g);
  return I || (I = new Intl.NumberFormat(f, de({}, S, C)), c.set(g, I)), P ? I.formatToParts(p) : I.format(p);
}
const ya = [
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
function mr(...e) {
  const [t, n, r, s] = e, a = q();
  let o = q();
  if (!ce(t))
    throw He(je.INVALID_ARGUMENT);
  const c = t;
  return A(n) ? a.key = n : V(n) && Object.keys(n).forEach((d) => {
    ya.includes(d) ? o[d] = n[d] : a[d] = n[d];
  }), A(r) ? a.locale = r : V(r) && (o = r), V(s) && (o = s), [a.key || "", c, a, o];
}
function Cs(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Ki = (e) => e, Xi = (e) => "", qi = "text", Ji = (e) => e.length === 0 ? "" : Nr(e), Zi = Vo;
function Es(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Qi(e) {
  const t = ce(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ce(e.named.count) || ce(e.named.n)) ? ce(e.named.count) ? e.named.count : ce(e.named.n) ? e.named.n : t : t;
}
function el(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function tl(e = {}) {
  const t = e.locale, n = Qi(e), r = G(e.pluralRules) && A(t) && re(e.pluralRules[t]) ? e.pluralRules[t] : Es, s = G(e.pluralRules) && A(t) && re(e.pluralRules[t]) ? Es : void 0, a = (f) => f[r(n, f.length, s)], o = e.list || [], c = (f) => o[f], d = e.named || q();
  ce(e.pluralIndex) && el(n, d);
  const p = (f) => d[f];
  function _(f, S) {
    const y = re(e.messages) ? e.messages(f, !!S) : G(e.messages) ? e.messages[f] : !1;
    return y || (e.parent ? e.parent.message(f) : Xi);
  }
  const C = (f) => e.modifiers ? e.modifiers[f] : Ki, L = V(e.processor) && re(e.processor.normalize) ? e.processor.normalize : Ji, P = V(e.processor) && re(e.processor.interpolate) ? e.processor.interpolate : Zi, F = V(e.processor) && A(e.processor.type) ? e.processor.type : qi, N = {
    list: c,
    named: p,
    plural: a,
    linked: (f, ...S) => {
      const [y, g] = S;
      let I = "text", R = "";
      S.length === 1 ? G(y) ? (R = y.modifier || R, I = y.type || I) : A(y) && (R = y || R) : S.length === 2 && (A(y) && (R = y || R), A(g) && (I = g || I));
      const v = _(f, !0)(N), ee = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        I === "vnode" && ae(v) && R ? v[0] : v
      );
      return R ? C(R)(ee, I) : ee;
    },
    message: _,
    type: F,
    interpolate: P,
    normalize: L,
    values: de(q(), o, d)
  };
  return N;
}
const Ss = () => "", Ve = (e) => re(e);
function Ls(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: o, messages: c } = e, [d, p] = gr(...t), _ = se(p.missingWarn) ? p.missingWarn : e.missingWarn, C = se(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, L = se(p.escapeParameter) ? p.escapeParameter : e.escapeParameter, P = !!p.resolvedMessage, F = A(p.default) || se(p.default) ? se(p.default) ? a ? d : () => d : p.default : n ? a ? d : () => d : null, b = n || F != null && (A(F) || re(F)), N = Pr(e, p);
  L && nl(p);
  let [f, S, y] = P ? [
    d,
    N,
    c[N] || q()
  ] : wa(e, d, N, o, C, _), g = f, I = d;
  if (!P && !(A(g) || xe(g) || Ve(g)) && b && (g = F, I = g), !P && (!(A(g) || xe(g) || Ve(g)) || !A(S)))
    return s ? Wn : d;
  let R = !1;
  const v = () => {
    R = !0;
  }, ee = Ve(g) ? g : ba(e, d, S, g, I, v);
  if (R)
    return g;
  const D = al(e, S, y, p), z = tl(D), ie = rl(e, ee, z);
  let H = r ? r(ie, d) : ie;
  return L && A(H) && (H = jo(H)), H;
}
function nl(e) {
  ae(e.list) ? e.list = e.list.map((t) => A(t) ? os(t) : t) : G(e.named) && Object.keys(e.named).forEach((t) => {
    A(e.named[t]) && (e.named[t] = os(e.named[t]));
  });
}
function wa(e, t, n, r, s, a) {
  const { messages: o, onWarn: c, messageResolver: d, localeFallbacker: p } = e, _ = p(e, r, n);
  let C = q(), L, P = null;
  const F = "translate";
  for (let b = 0; b < _.length && (L = _[b], C = o[L] || q(), (P = d(C, t)) === null && (P = C[t]), !(A(P) || xe(P) || Ve(P))); b++)
    if (!Yi(L, _)) {
      const N = Rr(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        L,
        a,
        F
      );
      N !== t && (P = N);
    }
  return [P, L, C];
}
function ba(e, t, n, r, s, a) {
  const { messageCompiler: o, warnHtmlMessage: c } = e;
  if (Ve(r)) {
    const p = r;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (o == null) {
    const p = () => r;
    return p.locale = n, p.key = t, p;
  }
  const d = o(r, sl(e, n, s, r, c, a));
  return d.locale = n, d.key = t, d.source = r, d;
}
function rl(e, t, n) {
  return t(n);
}
function gr(...e) {
  const [t, n, r] = e, s = q();
  if (!A(t) && !ce(t) && !Ve(t) && !xe(t))
    throw He(je.INVALID_ARGUMENT);
  const a = ce(t) ? String(t) : (Ve(t), t);
  return ce(n) ? s.plural = n : A(n) ? s.default = n : V(n) && !Fn(n) ? s.named = n : ae(n) && (s.list = n), ce(r) ? s.plural = r : A(r) ? s.default = r : V(r) && de(s, r), [a, s];
}
function sl(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw a && a(o), o;
    },
    onCacheKey: (o) => $o(t, n, o)
  };
}
function al(e, t, n, r) {
  const { modifiers: s, pluralRules: a, messageResolver: o, fallbackLocale: c, fallbackWarn: d, missingWarn: p, fallbackContext: _ } = e, L = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (P, F) => {
      let b = o(n, P);
      if (b == null && (_ || F)) {
        const [, , N] = wa(
          _ || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          P,
          t,
          c,
          d,
          p
        );
        b = o(N, P);
      }
      if (A(b) || xe(b)) {
        let N = !1;
        const S = ba(e, P, t, b, P, () => {
          N = !0;
        });
        return N ? Ss : S;
      } else return Ve(b) ? b : Ss;
    }
  };
  return e.processor && (L.processor = e.processor), r.list && (L.list = r.list), r.named && (L.named = r.named), ce(r.plural) && (L.pluralIndex = r.plural), L;
}
gi();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const ol = "11.2.2";
function il() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (bn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (bn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (bn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const It = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ti,
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
function sn(e, ...t) {
  return $n(e, null, void 0);
}
const _r = /* @__PURE__ */ mt("__translateVNode"), vr = /* @__PURE__ */ mt("__datetimeParts"), yr = /* @__PURE__ */ mt("__numberParts"), ll = mt("__setPluralRules"), Ca = /* @__PURE__ */ mt("__injectWithOption"), wr = /* @__PURE__ */ mt("__dispose");
function an(e) {
  if (!G(e) || xe(e))
    return e;
  for (const t in e)
    if (Se(e, t))
      if (!t.includes("."))
        G(e[t]) && an(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, a = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__")
            throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in s || (s[n[o]] = q()), !G(s[n[o]])) {
            a = !0;
            break;
          }
          s = s[n[o]];
        }
        if (a || (xe(s) ? fa.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !xe(s)) {
          const o = s[n[r]];
          G(o) && an(o);
        }
      }
  return e;
}
function Ea(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: a } = t, o = V(n) ? n : ae(r) ? q() : { [e]: q() };
  if (ae(r) && r.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: d, resource: p } = c;
      d ? (o[d] = o[d] || q(), Cn(p, o[d])) : Cn(p, o);
    } else
      A(c) && Cn(JSON.parse(c), o);
  }), s == null && a)
    for (const c in o)
      Se(o, c) && an(o[c]);
  return o;
}
function cl(e) {
  return e.type;
}
function ul(e, t, n) {
  let r = G(t.messages) ? t.messages : q();
  "__i18nGlobal" in n && (r = Ea(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (G(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (G(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function ks(e) {
  return Q(ko, null, e, 0);
}
function Sa() {
  return "currentInstance" in tr ? tr["currentInstance"] : tr.getCurrentInstance();
}
const Ts = () => [], dl = () => !1;
let Ns = 0;
function Os(e) {
  return (t, n, r, s) => e(n, r, Sa() || void 0, s);
}
function fl(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, s = e.flatJson, a = ss ? B : Lo;
  let o = se(e.inheritLocale) ? e.inheritLocale : !0;
  const c = a(
    // prettier-ignore
    t && o ? t.locale.value : A(e.locale) ? e.locale : In
  ), d = a(
    // prettier-ignore
    t && o ? t.fallbackLocale.value : A(e.fallbackLocale) || ae(e.fallbackLocale) || V(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value
  ), p = a(Ea(c.value, e)), _ = a(V(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), C = a(V(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let L = t ? t.missingWarn : se(e.missingWarn) || On(e.missingWarn) ? e.missingWarn : !0, P = t ? t.fallbackWarn : se(e.fallbackWarn) || On(e.fallbackWarn) ? e.fallbackWarn : !0, F = t ? t.fallbackRoot : se(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, N = re(e.missing) ? e.missing : null, f = re(e.missing) ? Os(e.missing) : null, S = re(e.postTranslation) ? e.postTranslation : null, y = t ? t.warnHtmlMessage : se(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, g = !!e.escapeParameter;
  const I = t ? t.modifiers : V(e.modifiers) ? e.modifiers : {};
  let R = e.pluralRules || t && t.pluralRules, v;
  v = (() => {
    r && _s(null);
    const m = {
      version: ol,
      locale: c.value,
      fallbackLocale: d.value,
      messages: p.value,
      modifiers: I,
      pluralRules: R,
      missing: f === null ? void 0 : f,
      missingWarn: L,
      fallbackWarn: P,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: S === null ? void 0 : S,
      warnHtmlMessage: y,
      escapeParameter: g,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    m.datetimeFormats = _.value, m.numberFormats = C.value, m.__datetimeFormatters = V(v) ? v.__datetimeFormatters : void 0, m.__numberFormatters = V(v) ? v.__numberFormatters : void 0;
    const k = Vi(m);
    return r && _s(k), k;
  })(), Xt(v, c.value, d.value);
  function D() {
    return [
      c.value,
      d.value,
      p.value,
      _.value,
      C.value
    ];
  }
  const z = W({
    get: () => c.value,
    set: (m) => {
      v.locale = m, c.value = m;
    }
  }), ie = W({
    get: () => d.value,
    set: (m) => {
      v.fallbackLocale = m, d.value = m, Xt(v, c.value, m);
    }
  }), H = W(() => p.value), xt = /* @__PURE__ */ W(() => _.value), Ft = /* @__PURE__ */ W(() => C.value);
  function $t() {
    return re(S) ? S : null;
  }
  function Wt(m) {
    S = m, v.postTranslation = m;
  }
  function Ut() {
    return N;
  }
  function zt(m) {
    m !== null && (f = Os(m)), N = m, v.missing = f;
  }
  const be = (m, k, K, Z, Ce, nt) => {
    D();
    let Xe;
    try {
      r || (v.fallbackContext = t ? Bi() : void 0), Xe = m(v);
    } finally {
      r || (v.fallbackContext = void 0);
    }
    if (K !== "translate exists" && // for not `te` (e.g `t`)
    ce(Xe) && Xe === Wn || K === "translate exists" && !Xe) {
      const [pe, jr] = k();
      return t && F ? Z(t) : Ce(pe);
    } else {
      if (nt(Xe))
        return Xe;
      throw sn(It.UNEXPECTED_RETURN_TYPE);
    }
  };
  function et(...m) {
    return be((k) => Reflect.apply(Ls, null, [k, ...m]), () => gr(...m), "translate", (k) => Reflect.apply(k.t, k, [...m]), (k) => k, (k) => A(k));
  }
  function vt(...m) {
    const [k, K, Z] = m;
    if (Z && !G(Z))
      throw sn(It.INVALID_ARGUMENT);
    return et(k, K, de({ resolvedMessage: !0 }, Z || {}));
  }
  function jt(...m) {
    return be((k) => Reflect.apply(ys, null, [k, ...m]), () => pr(...m), "datetime format", (k) => Reflect.apply(k.d, k, [...m]), () => ms, (k) => A(k) || ae(k));
  }
  function yt(...m) {
    return be((k) => Reflect.apply(bs, null, [k, ...m]), () => mr(...m), "number format", (k) => Reflect.apply(k.n, k, [...m]), () => ms, (k) => A(k) || ae(k));
  }
  function me(m) {
    return m.map((k) => A(k) || ce(k) || se(k) ? ks(String(k)) : k);
  }
  const Ye = {
    normalize: me,
    interpolate: (m) => m,
    type: "vnode"
  };
  function Ht(...m) {
    return be((k) => {
      let K;
      const Z = k;
      try {
        Z.processor = Ye, K = Reflect.apply(Ls, null, [Z, ...m]);
      } finally {
        Z.processor = null;
      }
      return K;
    }, () => gr(...m), "translate", (k) => k[_r](...m), (k) => [ks(k)], (k) => ae(k));
  }
  function wt(...m) {
    return be((k) => Reflect.apply(bs, null, [k, ...m]), () => mr(...m), "number format", (k) => k[yr](...m), Ts, (k) => A(k) || ae(k));
  }
  function Bt(...m) {
    return be((k) => Reflect.apply(ys, null, [k, ...m]), () => pr(...m), "datetime format", (k) => k[vr](...m), Ts, (k) => A(k) || ae(k));
  }
  function tt(m) {
    R = m, v.pluralRules = R;
  }
  function bt(m, k) {
    return be(() => {
      if (!m)
        return !1;
      const K = A(k) ? k : c.value, Z = Fe(K), Ce = v.messageResolver(Z, m);
      return xe(Ce) || Ve(Ce) || A(Ce);
    }, () => [m], "translate exists", (K) => Reflect.apply(K.te, K, [m, k]), dl, (K) => se(K));
  }
  function Ct(m) {
    let k = null;
    const K = ha(v, d.value, c.value);
    for (let Z = 0; Z < K.length; Z++) {
      const Ce = p.value[K[Z]] || {}, nt = v.messageResolver(Ce, m);
      if (nt != null) {
        k = nt;
        break;
      }
    }
    return k;
  }
  function Ke(m) {
    const k = Ct(m);
    return k ?? (t ? t.tm(m) || {} : {});
  }
  function Fe(m) {
    return p.value[m] || {};
  }
  function ke(m, k) {
    if (s) {
      const K = { [m]: k };
      for (const Z in K)
        Se(K, Z) && an(K[Z]);
      k = K[m];
    }
    p.value[m] = k, v.messages = p.value;
  }
  function $e(m, k) {
    p.value[m] = p.value[m] || {};
    const K = { [m]: k };
    if (s)
      for (const Z in K)
        Se(K, Z) && an(K[Z]);
    k = K[m], Cn(k, p.value[m]), v.messages = p.value;
  }
  function Vt(m) {
    return _.value[m] || {};
  }
  function l(m, k) {
    _.value[m] = k, v.datetimeFormats = _.value, ws(v, m, k);
  }
  function u(m, k) {
    _.value[m] = de(_.value[m] || {}, k), v.datetimeFormats = _.value, ws(v, m, k);
  }
  function w(m) {
    return C.value[m] || {};
  }
  function M(m, k) {
    C.value[m] = k, v.numberFormats = C.value, Cs(v, m, k);
  }
  function J(m, k) {
    C.value[m] = de(C.value[m] || {}, k), v.numberFormats = C.value, Cs(v, m, k);
  }
  Ns++, t && ss && (Be(t.locale, (m) => {
    o && (c.value = m, v.locale = m, Xt(v, c.value, d.value));
  }), Be(t.fallbackLocale, (m) => {
    o && (d.value = m, v.fallbackLocale = m, Xt(v, c.value, d.value));
  }));
  const U = {
    id: Ns,
    locale: z,
    fallbackLocale: ie,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(m) {
      o = m, m && t && (c.value = t.locale.value, d.value = t.fallbackLocale.value, Xt(v, c.value, d.value));
    },
    get availableLocales() {
      return Object.keys(p.value).sort();
    },
    messages: H,
    get modifiers() {
      return I;
    },
    get pluralRules() {
      return R || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return L;
    },
    set missingWarn(m) {
      L = m, v.missingWarn = L;
    },
    get fallbackWarn() {
      return P;
    },
    set fallbackWarn(m) {
      P = m, v.fallbackWarn = P;
    },
    get fallbackRoot() {
      return F;
    },
    set fallbackRoot(m) {
      F = m;
    },
    get fallbackFormat() {
      return b;
    },
    set fallbackFormat(m) {
      b = m, v.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(m) {
      y = m, v.warnHtmlMessage = m;
    },
    get escapeParameter() {
      return g;
    },
    set escapeParameter(m) {
      g = m, v.escapeParameter = m;
    },
    t: et,
    getLocaleMessage: Fe,
    setLocaleMessage: ke,
    mergeLocaleMessage: $e,
    getPostTranslationHandler: $t,
    setPostTranslationHandler: Wt,
    getMissingHandler: Ut,
    setMissingHandler: zt,
    [ll]: tt
  };
  return U.datetimeFormats = xt, U.numberFormats = Ft, U.rt = vt, U.te = bt, U.tm = Ke, U.d = jt, U.n = yt, U.getDateTimeFormat = Vt, U.setDateTimeFormat = l, U.mergeDateTimeFormat = u, U.getNumberFormat = w, U.setNumberFormat = M, U.mergeNumberFormat = J, U[Ca] = n, U[_r] = Ht, U[vr] = Bt, U[yr] = wt, U;
}
const Mr = {
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
function hl({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Me ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, q());
}
function La() {
  return Me;
}
de({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => ce(e) || !isNaN(e)
  }
}, Mr);
function pl(e) {
  return ae(e) && !A(e[0]);
}
function ka(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const o = { part: !0 };
    let c = q();
    e.locale && (o.locale = e.locale), A(e.format) ? o.key = e.format : G(e.format) && (A(e.format.key) && (o.key = e.format.key), c = Object.keys(e.format).reduce((L, P) => n.includes(P) ? de(q(), L, { [P]: e.format[P] }) : L, q()));
    const d = r(e.value, o, c);
    let p = [o.key];
    ae(d) ? p = d.map((L, P) => {
      const F = s[L.type], b = F ? F({ [L.type]: L.value, index: P, parts: d }) : [L.value];
      return pl(b) && (b[0].key = `${L.type}-${P}`), b;
    }) : A(d) && (p = [d]);
    const _ = de(q(), a), C = A(e.tag) || G(e.tag) ? e.tag : La();
    return ta(C, _, p);
  };
}
de({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Mr);
const ml = /* @__PURE__ */ mt("global-vue-i18n");
function Un(e = {}) {
  const t = Sa();
  if (t == null)
    throw sn(It.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw sn(It.NOT_INSTALLED);
  const n = gl(t), r = vl(n), s = cl(t), a = _l(e, s);
  if (a === "global")
    return ul(r, e, s), r;
  if (a === "parent") {
    let d = yl(n, t, e.__useComponent);
    return d == null && (d = r), d;
  }
  const o = n;
  let c = o.__getInstance(t);
  if (c == null) {
    const d = de({}, e);
    "__i18n" in s && (d.__i18n = s.__i18n), r && (d.__root = r), c = fl(d), o.__composerExtend && (c[wr] = o.__composerExtend(c)), bl(o, t, c), o.__setInstance(t, c);
  }
  return c;
}
function gl(e) {
  const t = Je(e.isCE ? ml : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw sn(e.isCE ? It.NOT_INSTALLED_WITH_PROVIDE : It.UNEXPECTED_ERROR);
  return t;
}
function _l(e, t) {
  return Fn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function vl(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function yl(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = wl(t, n);
  for (; a != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = o.__getInstance(a);
      c != null && (r = c.__composer, n && r && !r[Ca] && (r = null));
    }
    if (r != null || s === a)
      break;
    a = a.parent;
  }
  return r;
}
function wl(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function bl(e, t, n) {
  cn(() => {
  }, t), Lr(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[wr];
    s && (s(), delete r[wr]);
  }, t);
}
de({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Mr);
il();
zi(ki);
ji($i);
Hi(ha);
function Cl(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function El(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var En;
const we = "__TAURI_TO_IPC_KEY__";
function Sl(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function O(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Ll {
  get rid() {
    return Cl(this, En, "f");
  }
  constructor(t) {
    En.set(this, void 0), El(this, En, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return O("plugin:resources|close", {
      rid: this.rid
    });
  }
}
En = /* @__PURE__ */ new WeakMap();
class lt {
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
    return new dt(this.width * t, this.height * t);
  }
  [we]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[we]();
  }
}
class dt {
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
    return new lt(this.width / t, this.height / t);
  }
  [we]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[we]();
  }
}
class Et {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof lt ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof dt ? this.size : this.size.toPhysical(t);
  }
  [we]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[we]();
  }
}
class Ta {
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
    return new Ae(this.x * t, this.y * t);
  }
  [we]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[we]();
  }
}
class Ae {
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
    return new Ta(this.x / t, this.y / t);
  }
  [we]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[we]();
  }
}
class _n {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Ta ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Ae ? this.position : this.position.toPhysical(t);
  }
  [we]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[we]();
  }
}
var _e;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(_e || (_e = {}));
async function Na(e, t) {
  await O("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Pn(e, t, n) {
  var r;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return O("plugin:event|listen", {
    event: e,
    target: s,
    handler: Sl(t)
  }).then((a) => async () => Na(e, a));
}
async function kl(e, t, n) {
  return Pn(e, (r) => {
    Na(e, r.id), t(r);
  }, n);
}
async function Tl(e, t) {
  await O("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Nl(e, t, n) {
  await O("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class tn extends Ll {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, r) {
    return O("plugin:image|new", {
      rgba: Rn(t),
      width: n,
      height: r
    }).then((s) => new tn(s));
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
    return O("plugin:image|from_bytes", {
      bytes: Rn(t)
    }).then((n) => new tn(n));
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
    return O("plugin:image|from_path", { path: t }).then((n) => new tn(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return O("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return O("plugin:image|size", { rid: this.rid });
  }
}
function Rn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof tn ? e.rid : e;
}
var br;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(br || (br = {}));
class Ol {
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
var Is;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Is || (Is = {}));
function Oa() {
  return new Ia(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function or() {
  return O("plugin:window|get_all_windows").then((e) => e.map((t) => new Ia(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ir = ["tauri://created", "tauri://error"];
class Ia {
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
    var r;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || O("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (r = n.parent) === null || r === void 0 ? void 0 : r.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (s) => this.emit("tauri://error", s));
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
    return (n = (await or()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Oa();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return or();
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
    for (const t of await or())
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
      const r = this.listeners[t];
      r.splice(r.indexOf(n), 1);
    } : Pn(t, n, {
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
      const r = this.listeners[t];
      r.splice(r.indexOf(n), 1);
    } : kl(t, n, {
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
    if (ir.includes(t)) {
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Tl(t, n);
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
  async emitTo(t, n, r) {
    if (ir.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return Nl(t, n, r);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return ir.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return O("plugin:window|scale_factor", {
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
    return O("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Ae(t));
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
    return O("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Ae(t));
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
    return O("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new dt(t));
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
    return O("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new dt(t));
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
    return O("plugin:window|is_fullscreen", {
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
    return O("plugin:window|is_minimized", {
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
    return O("plugin:window|is_maximized", {
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
    return O("plugin:window|is_focused", {
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
    return O("plugin:window|is_decorated", {
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
    return O("plugin:window|is_resizable", {
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
    return O("plugin:window|is_maximizable", {
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
    return O("plugin:window|is_minimizable", {
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
    return O("plugin:window|is_closable", {
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
    return O("plugin:window|is_visible", {
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
    return O("plugin:window|title", {
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
    return O("plugin:window|theme", {
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
    return O("plugin:window|is_always_on_top", {
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
    return O("plugin:window|center", {
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
    return t && (t === br.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), O("plugin:window|request_user_attention", {
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
    return O("plugin:window|set_resizable", {
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
    return O("plugin:window|set_enabled", {
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
    return O("plugin:window|is_enabled", {
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
    return O("plugin:window|set_maximizable", {
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
    return O("plugin:window|set_minimizable", {
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
    return O("plugin:window|set_closable", {
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
    return O("plugin:window|set_title", {
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
    return O("plugin:window|maximize", {
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
    return O("plugin:window|unmaximize", {
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
    return O("plugin:window|toggle_maximize", {
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
    return O("plugin:window|minimize", {
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
    return O("plugin:window|unminimize", {
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
    return O("plugin:window|show", {
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
    return O("plugin:window|hide", {
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
    return O("plugin:window|close", {
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
    return O("plugin:window|destroy", {
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
    return O("plugin:window|set_decorations", {
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
    return O("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return O("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return O("plugin:window|set_effects", {
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
    return O("plugin:window|set_always_on_top", {
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
    return O("plugin:window|set_always_on_bottom", {
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
    return O("plugin:window|set_content_protected", {
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
    return O("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Et ? t : new Et(t)
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
    return O("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Et ? t : t ? new Et(t) : null
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
    return O("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Et ? t : t ? new Et(t) : null
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
    function n(r) {
      return r ? { Logical: r } : null;
    }
    return O("plugin:window|set_size_constraints", {
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
    return O("plugin:window|set_position", {
      label: this.label,
      value: t instanceof _n ? t : new _n(t)
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
    return O("plugin:window|set_fullscreen", {
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
    return O("plugin:window|set_focus", {
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
    return O("plugin:window|set_icon", {
      label: this.label,
      value: Rn(t)
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
    return O("plugin:window|set_skip_taskbar", {
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
    return O("plugin:window|set_cursor_grab", {
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
    return O("plugin:window|set_cursor_visible", {
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
    return O("plugin:window|set_cursor_icon", {
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
    return O("plugin:window|set_background_color", { color: t });
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
    return O("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof _n ? t : new _n(t)
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
    return O("plugin:window|set_ignore_cursor_events", {
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
    return O("plugin:window|start_dragging", {
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
    return O("plugin:window|start_resize_dragging", {
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
    return O("plugin:window|set_badge_count", {
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
    return O("plugin:window|set_badge_label", {
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
    return O("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Rn(t) : void 0
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
    return O("plugin:window|set_progress_bar", {
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
    return O("plugin:window|set_visible_on_all_workspaces", {
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
    return O("plugin:window|set_title_bar_style", {
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
    return O("plugin:window|set_theme", {
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
    return this.listen(_e.WINDOW_RESIZED, (n) => {
      n.payload = new dt(n.payload), t(n);
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
    return this.listen(_e.WINDOW_MOVED, (n) => {
      n.payload = new Ae(n.payload), t(n);
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
    return this.listen(_e.WINDOW_CLOSE_REQUESTED, async (n) => {
      const r = new Ol(n);
      await t(r), r.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(_e.DRAG_ENTER, (o) => {
      t({
        ...o,
        payload: {
          type: "enter",
          paths: o.payload.paths,
          position: new Ae(o.payload.position)
        }
      });
    }), r = await this.listen(_e.DRAG_OVER, (o) => {
      t({
        ...o,
        payload: {
          type: "over",
          position: new Ae(o.payload.position)
        }
      });
    }), s = await this.listen(_e.DRAG_DROP, (o) => {
      t({
        ...o,
        payload: {
          type: "drop",
          paths: o.payload.paths,
          position: new Ae(o.payload.position)
        }
      });
    }), a = await this.listen(_e.DRAG_LEAVE, (o) => {
      t({ ...o, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), r(), a();
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
    const n = await this.listen(_e.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), r = await this.listen(_e.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
    });
    return () => {
      n(), r();
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
    return this.listen(_e.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(_e.WINDOW_THEME_CHANGED, t);
  }
}
var Ps;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Ps || (Ps = {}));
var Rs;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Rs || (Rs = {}));
var Ms;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Ms || (Ms = {}));
function Il(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Ae(e.position),
    size: new dt(e.size)
  };
}
async function qt(e, t) {
  return O("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Il);
}
var Pl = {
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
function Rl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ml(e, t, n) {
  var r = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], a = t.theme || n.theme;
  switch (a) {
    case "outline":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push("none"), s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone), s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[1] == "string" ? r[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof r[0] == "string" ? r[0] : "currentColor"), s.push(typeof r[1] == "string" ? r[1] : n.colors.multiColor.outFillColor), s.push(typeof r[2] == "string" ? r[2] : n.colors.multiColor.innerStrokeColor), s.push(typeof r[3] == "string" ? r[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: s,
    id: e
  };
}
var Al = Symbol("icon-context");
function zn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var o = Rl(), c = Je(Al, Pl);
      return function() {
        var d = a.size, p = a.strokeWidth, _ = a.strokeLinecap, C = a.strokeLinejoin, L = a.theme, P = a.fill, F = a.spin, b = Ml(o, {
          size: d,
          strokeWidth: p,
          strokeLinecap: _,
          strokeLinejoin: C,
          theme: L,
          fill: P
        }, c), N = [c.prefix + "-icon"];
        return N.push(c.prefix + "-icon-" + e), t && c.rtl && N.push(c.prefix + "-icon-rtl"), F && N.push(c.prefix + "-icon-spin"), Q("span", {
          class: N.join(" ")
        }, [n(b)]);
      };
    }
  };
  return r;
}
const Dl = zn("close-small", !1, function(e) {
  return Q("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Q("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Q("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xl = zn("minus", !1, function(e) {
  return Q("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Q("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fl = zn("mouse", !0, function(e) {
  return Q("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Q("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Q("path", {
    d: "M36 16C36 9.37258 30.6274 4 24 4V16H36Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Q("path", {
    d: "M24 4C17.3726 4 12 9.37258 12 16H24V4Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $l = zn("radar", !1, function(e) {
  return Q("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Q("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Q("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Q("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Q("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), Q("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Pa = Symbol(), Sn = "el", Wl = "is-", at = (e, t, n, r, s) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), s && (a += `--${s}`), a;
}, Ra = Symbol("namespaceContextKey"), Ul = (e) => {
  const t = e || (kt() ? Je(Ra, B(Sn)) : B(Sn));
  return W(() => E(t) || Sn);
}, Ar = (e, t) => {
  const n = Ul(t);
  return {
    namespace: n,
    b: (b = "") => at(n.value, e, b, "", ""),
    e: (b) => b ? at(n.value, e, "", b, "") : "",
    m: (b) => b ? at(n.value, e, "", "", b) : "",
    be: (b, N) => b && N ? at(n.value, e, b, N, "") : "",
    em: (b, N) => b && N ? at(n.value, e, "", b, N) : "",
    bm: (b, N) => b && N ? at(n.value, e, b, "", N) : "",
    bem: (b, N, f) => b && N && f ? at(n.value, e, b, N, f) : "",
    is: (b, ...N) => {
      const f = N.length >= 1 ? N[0] : !0;
      return b && f ? `${Wl}${b}` : "";
    },
    cssVar: (b) => {
      const N = {};
      for (const f in b)
        b[f] && (N[`--${n.value}-${f}`] = b[f]);
      return N;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const N = {};
      for (const f in b)
        b[f] && (N[`--${n.value}-${e}-${f}`] = b[f]);
      return N;
    },
    cssVarBlockName: (b) => `--${n.value}-${e}-${b}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const zl = Object.prototype.hasOwnProperty, As = (e, t) => zl.call(e, t), on = (e) => typeof e == "function", ft = (e) => typeof e == "string", Ma = (e) => e !== null && typeof e == "object";
var jl = typeof global == "object" && global && global.Object === Object && global, Hl = typeof self == "object" && self && self.Object === Object && self, Dr = jl || Hl || Function("return this")(), Pt = Dr.Symbol, Aa = Object.prototype, Bl = Aa.hasOwnProperty, Vl = Aa.toString, Jt = Pt ? Pt.toStringTag : void 0;
function Gl(e) {
  var t = Bl.call(e, Jt), n = e[Jt];
  try {
    e[Jt] = void 0;
    var r = !0;
  } catch {
  }
  var s = Vl.call(e);
  return r && (t ? e[Jt] = n : delete e[Jt]), s;
}
var Yl = Object.prototype, Kl = Yl.toString;
function Xl(e) {
  return Kl.call(e);
}
var ql = "[object Null]", Jl = "[object Undefined]", Ds = Pt ? Pt.toStringTag : void 0;
function Da(e) {
  return e == null ? e === void 0 ? Jl : ql : Ds && Ds in Object(e) ? Gl(e) : Xl(e);
}
function Zl(e) {
  return e != null && typeof e == "object";
}
var Ql = "[object Symbol]";
function xr(e) {
  return typeof e == "symbol" || Zl(e) && Da(e) == Ql;
}
function ec(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var Fr = Array.isArray, xs = Pt ? Pt.prototype : void 0, Fs = xs ? xs.toString : void 0;
function xa(e) {
  if (typeof e == "string")
    return e;
  if (Fr(e))
    return ec(e, xa) + "";
  if (xr(e))
    return Fs ? Fs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Fa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var tc = "[object AsyncFunction]", nc = "[object Function]", rc = "[object GeneratorFunction]", sc = "[object Proxy]";
function ac(e) {
  if (!Fa(e))
    return !1;
  var t = Da(e);
  return t == nc || t == rc || t == tc || t == sc;
}
var lr = Dr["__core-js_shared__"], $s = function() {
  var e = /[^.]+$/.exec(lr && lr.keys && lr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function oc(e) {
  return !!$s && $s in e;
}
var ic = Function.prototype, lc = ic.toString;
function cc(e) {
  if (e != null) {
    try {
      return lc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var uc = /[\\^$.*+?()[\]{}|]/g, dc = /^\[object .+?Constructor\]$/, fc = Function.prototype, hc = Object.prototype, pc = fc.toString, mc = hc.hasOwnProperty, gc = RegExp(
  "^" + pc.call(mc).replace(uc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _c(e) {
  if (!Fa(e) || oc(e))
    return !1;
  var t = ac(e) ? gc : dc;
  return t.test(cc(e));
}
function vc(e, t) {
  return e?.[t];
}
function $a(e, t) {
  var n = vc(e, t);
  return _c(n) ? n : void 0;
}
function yc(e, t) {
  return e === t || e !== e && t !== t;
}
var wc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, bc = /^\w*$/;
function Cc(e, t) {
  if (Fr(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || xr(e) ? !0 : bc.test(e) || !wc.test(e) || t != null && e in Object(t);
}
var ln = $a(Object, "create");
function Ec() {
  this.__data__ = ln ? ln(null) : {}, this.size = 0;
}
function Sc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Lc = "__lodash_hash_undefined__", kc = Object.prototype, Tc = kc.hasOwnProperty;
function Nc(e) {
  var t = this.__data__;
  if (ln) {
    var n = t[e];
    return n === Lc ? void 0 : n;
  }
  return Tc.call(t, e) ? t[e] : void 0;
}
var Oc = Object.prototype, Ic = Oc.hasOwnProperty;
function Pc(e) {
  var t = this.__data__;
  return ln ? t[e] !== void 0 : Ic.call(t, e);
}
var Rc = "__lodash_hash_undefined__";
function Mc(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ln && t === void 0 ? Rc : t, this;
}
function ht(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ht.prototype.clear = Ec;
ht.prototype.delete = Sc;
ht.prototype.get = Nc;
ht.prototype.has = Pc;
ht.prototype.set = Mc;
function Ac() {
  this.__data__ = [], this.size = 0;
}
function jn(e, t) {
  for (var n = e.length; n--; )
    if (yc(e[n][0], t))
      return n;
  return -1;
}
var Dc = Array.prototype, xc = Dc.splice;
function Fc(e) {
  var t = this.__data__, n = jn(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : xc.call(t, n, 1), --this.size, !0;
}
function $c(e) {
  var t = this.__data__, n = jn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Wc(e) {
  return jn(this.__data__, e) > -1;
}
function Uc(e, t) {
  var n = this.__data__, r = jn(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function At(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
At.prototype.clear = Ac;
At.prototype.delete = Fc;
At.prototype.get = $c;
At.prototype.has = Wc;
At.prototype.set = Uc;
var zc = $a(Dr, "Map");
function jc() {
  this.size = 0, this.__data__ = {
    hash: new ht(),
    map: new (zc || At)(),
    string: new ht()
  };
}
function Hc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Hn(e, t) {
  var n = e.__data__;
  return Hc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Bc(e) {
  var t = Hn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Vc(e) {
  return Hn(this, e).get(e);
}
function Gc(e) {
  return Hn(this, e).has(e);
}
function Yc(e, t) {
  var n = Hn(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function gt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
gt.prototype.clear = jc;
gt.prototype.delete = Bc;
gt.prototype.get = Vc;
gt.prototype.has = Gc;
gt.prototype.set = Yc;
var Kc = "Expected a function";
function $r(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Kc);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var o = e.apply(this, r);
    return n.cache = a.set(s, o) || a, o;
  };
  return n.cache = new ($r.Cache || gt)(), n;
}
$r.Cache = gt;
var Xc = 500;
function qc(e) {
  var t = $r(e, function(r) {
    return n.size === Xc && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Jc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zc = /\\(\\)?/g, Qc = qc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Jc, function(n, r, s, a) {
    t.push(s ? a.replace(Zc, "$1") : r || n);
  }), t;
});
function eu(e) {
  return e == null ? "" : xa(e);
}
function tu(e, t) {
  return Fr(e) ? e : Cc(e, t) ? [e] : Qc(eu(e));
}
function nu(e) {
  if (typeof e == "string" || xr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ru(e, t) {
  t = tu(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[nu(t[n++])];
  return n && n == r ? e : void 0;
}
function su(e, t, n) {
  var r = e == null ? void 0 : ru(e, t);
  return r === void 0 ? n : r;
}
function au(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
const Wa = (e) => e === void 0, Ws = (e) => typeof e == "boolean", pt = (e) => typeof e == "number", Cr = (e) => typeof Element > "u" ? !1 : e instanceof Element, ou = (e) => ft(e) ? !Number.isNaN(Number(e)) : !1;
var Us;
const _t = typeof window < "u", iu = (e) => typeof e == "string", lu = () => {
};
_t && ((Us = window?.navigator) != null && Us.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Wr(e) {
  return typeof e == "function" ? e() : E(e);
}
function cu(e) {
  return e;
}
function Ur(e) {
  return No() ? (Oo(e), !0) : !1;
}
function uu(e, t = !0) {
  kt() ? cn(e) : t ? e() : it(e);
}
function Ua(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, s = B(!1);
  let a = null;
  function o() {
    a && (clearTimeout(a), a = null);
  }
  function c() {
    s.value = !1, o();
  }
  function d(...p) {
    o(), s.value = !0, a = setTimeout(() => {
      s.value = !1, a = null, e(...p);
    }, Wr(t));
  }
  return r && (s.value = !0, _t && d()), Ur(c), {
    isPending: To(s),
    start: d,
    stop: c
  };
}
function za(e) {
  var t;
  const n = Wr(e);
  return (t = n?.$el) != null ? t : n;
}
const ja = _t ? window : void 0;
function Ha(...e) {
  let t, n, r, s;
  if (iu(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = ja) : [t, n, r, s] = e, !t)
    return lu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], o = () => {
    a.forEach((_) => _()), a.length = 0;
  }, c = (_, C, L, P) => (_.addEventListener(C, L, P), () => _.removeEventListener(C, L, P)), d = Be(() => [za(t), Wr(s)], ([_, C]) => {
    o(), _ && a.push(...n.flatMap((L) => r.map((P) => c(_, L, P, C))));
  }, { immediate: !0, flush: "post" }), p = () => {
    d(), o();
  };
  return Ur(p), p;
}
function du(e, t = !1) {
  const n = B(), r = () => n.value = !!e();
  return r(), uu(r, t), n;
}
const zs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, js = "__vueuse_ssr_handlers__";
zs[js] = zs[js] || {};
var Hs = Object.getOwnPropertySymbols, fu = Object.prototype.hasOwnProperty, hu = Object.prototype.propertyIsEnumerable, pu = (e, t) => {
  var n = {};
  for (var r in e)
    fu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Hs)
    for (var r of Hs(e))
      t.indexOf(r) < 0 && hu.call(e, r) && (n[r] = e[r]);
  return n;
};
function mu(e, t, n = {}) {
  const r = n, { window: s = ja } = r, a = pu(r, ["window"]);
  let o;
  const c = du(() => s && "ResizeObserver" in s), d = () => {
    o && (o.disconnect(), o = void 0);
  }, p = Be(() => za(e), (C) => {
    d(), c.value && s && C && (o = new ResizeObserver(t), o.observe(C, a));
  }, { immediate: !0, flush: "post" }), _ = () => {
    d(), p();
  };
  return Ur(_), {
    isSupported: c,
    stop: _
  };
}
var Bs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Bs || (Bs = {}));
var gu = Object.defineProperty, Vs = Object.getOwnPropertySymbols, _u = Object.prototype.hasOwnProperty, vu = Object.prototype.propertyIsEnumerable, Gs = (e, t, n) => t in e ? gu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yu = (e, t) => {
  for (var n in t || (t = {}))
    _u.call(t, n) && Gs(e, n, t[n]);
  if (Vs)
    for (var n of Vs(t))
      vu.call(t, n) && Gs(e, n, t[n]);
  return e;
};
const wu = {
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
yu({
  linear: cu
}, wu);
const Ys = {
  current: 0
}, Ks = B(0), Ba = 2e3, Xs = Symbol("elZIndexContextKey"), Va = Symbol("zIndexContextKey"), bu = (e) => {
  const t = kt() ? Je(Xs, Ys) : Ys, n = e || (kt() ? Je(Va, void 0) : void 0), r = W(() => {
    const o = E(n);
    return pt(o) ? o : Ba;
  }), s = W(() => r.value + Ks.value), a = () => (t.current++, Ks.value = t.current, s.value);
  return !_t && Je(Xs), {
    initialZIndex: r,
    currentZIndex: s,
    nextZIndex: a
  };
};
var Cu = {
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
const Eu = (e) => (t, n) => Su(t, n, E(e)), Su = (e, t, n) => su(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
  var a;
  return `${(a = t?.[s]) != null ? a : `{${s}}`}`;
}), Lu = (e) => {
  const t = W(() => E(e).name), n = Io(e) ? e : B(e);
  return {
    lang: t,
    locale: n,
    t: Eu(e)
  };
}, Ga = Symbol("localeContextKey"), ku = (e) => {
  const t = e || Je(Ga, B());
  return Lu(W(() => t.value || Cu));
}, Ya = "__epPropKey", ve = (e) => e, Tu = (e) => Ma(e) && !!e[Ya], Ka = (e, t) => {
  if (!Ma(e) || Tu(e))
    return e;
  const { values: n, required: r, default: s, type: a, validator: o } = e, d = {
    type: a,
    required: !!r,
    validator: n || o ? (p) => {
      let _ = !1, C = [];
      if (n && (C = Array.from(n), As(e, "default") && C.push(s), _ || (_ = C.includes(p))), o && (_ || (_ = o(p))), !_ && C.length > 0) {
        const L = [...new Set(C)].map((P) => JSON.stringify(P)).join(", ");
        Po(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${L}], got value ${JSON.stringify(p)}.`);
      }
      return _;
    } : void 0,
    [Ya]: !0
  };
  return As(e, "default") && (d.default = s), d;
}, Dt = (e) => au(Object.entries(e).map(([t, n]) => [
  t,
  Ka(n, t)
])), Nu = ["", "default", "small", "large"], Ou = Ka({
  type: String,
  values: Nu,
  required: !1
}), Iu = Symbol("size"), Pu = Symbol("emptyValuesContextKey"), Ru = Dt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => on(e) ? !e() : !e
  }
}), qs = (e) => Object.keys(e), Mn = B();
function Xa(e, t = void 0) {
  return kt() ? Je(Pa, Mn) : Mn;
}
function qa(e, t) {
  const n = Xa(), r = Ar(e, W(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.namespace) || Sn;
  })), s = ku(W(() => {
    var c;
    return (c = n.value) == null ? void 0 : c.locale;
  })), a = bu(W(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.zIndex) || Ba;
  })), o = W(() => {
    var c;
    return E(t) || ((c = n.value) == null ? void 0 : c.size) || "";
  });
  return Ja(W(() => E(n) || {})), {
    ns: r,
    locale: s,
    zIndex: a,
    size: o
  };
}
const Ja = (e, t, n = !1) => {
  var r;
  const s = !!kt(), a = s ? Xa() : void 0, o = (r = void 0) != null ? r : s ? Ro : void 0;
  if (!o)
    return;
  const c = W(() => {
    const d = E(e);
    return a?.value ? Mu(a.value, d) : d;
  });
  return o(Pa, c), o(Ga, W(() => c.value.locale)), o(Ra, W(() => c.value.namespace)), o(Va, W(() => c.value.zIndex)), o(Iu, {
    size: W(() => c.value.size || "")
  }), o(Pu, W(() => ({
    emptyValues: c.value.emptyValues,
    valueOnClear: c.value.valueOnClear
  }))), (n || !Mn.value) && (Mn.value = c.value), c;
}, Mu = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...qs(e), ...qs(t)])], r = {};
  for (const s of n)
    r[s] = t[s] !== void 0 ? t[s] : e[s];
  return r;
};
var Bn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
function Er(e, t = "px") {
  if (!e)
    return "";
  if (pt(e) || ou(e))
    return `${e}${t}`;
  if (ft(e))
    return e;
}
const Za = (e, t) => (e.install = (n) => {
  for (const r of [e, ...Object.values({})])
    n.component(r.name, r);
}, e), Qa = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Au = Dt({
  size: {
    type: ve([Number, String])
  },
  color: {
    type: String
  }
}), Du = ue({
  name: "ElIcon",
  inheritAttrs: !1
}), xu = /* @__PURE__ */ ue({
  ...Du,
  props: Au,
  setup(e) {
    const t = e, n = Ar("icon"), r = W(() => {
      const { size: s, color: a } = t;
      return !s && !a ? {} : {
        fontSize: Wa(s) ? void 0 : Er(s),
        "--color": a
      };
    });
    return (s, a) => (j(), X("i", Mo({
      class: E(n).b(),
      style: E(r)
    }, s.$attrs), [
      Tt(s.$slots, "default")
    ], 16));
  }
});
var Fu = /* @__PURE__ */ Bn(xu, [["__file", "icon.vue"]]);
const An = Za(Fu);
/*! Element Plus Icons Vue v2.3.1 */
var $u = /* @__PURE__ */ ue({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Wu = $u, Uu = /* @__PURE__ */ ue({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), eo = Uu, zu = /* @__PURE__ */ ue({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), ju = zu, Hu = /* @__PURE__ */ ue({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Bu = Hu, Vu = /* @__PURE__ */ ue({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Gu = Vu;
const to = ve([
  String,
  Object,
  Function
]), Yu = {
  Close: eo
}, Ku = {
  Close: eo
}, Dn = {
  success: Bu,
  warning: Gu,
  error: Wu,
  info: ju
}, Xu = (e) => e, Ln = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, qu = Dt({
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
    type: ve([String, Object, Array])
  },
  offset: {
    type: ve(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Ju = ue({
  name: "ElBadge"
}), Zu = /* @__PURE__ */ ue({
  ...Ju,
  props: qu,
  setup(e, { expose: t }) {
    const n = e, r = Ar("badge"), s = W(() => n.isDot ? "" : pt(n.value) && pt(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = W(() => {
      var o, c, d, p, _;
      return [
        {
          backgroundColor: n.color,
          marginRight: Er(-((c = (o = n.offset) == null ? void 0 : o[0]) != null ? c : 0)),
          marginTop: Er((p = (d = n.offset) == null ? void 0 : d[1]) != null ? p : 0)
        },
        (_ = n.badgeStyle) != null ? _ : {}
      ];
    });
    return t({
      content: s
    }), (o, c) => (j(), X("div", {
      class: le(E(r).b())
    }, [
      Tt(o.$slots, "default"),
      Q(kr, {
        name: `${E(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ct(() => [
          ut(T("sup", {
            class: le([
              E(r).e("content"),
              E(r).em("content", o.type),
              E(r).is("fixed", !!o.$slots.default),
              E(r).is("dot", o.isDot),
              E(r).is("hide-zero", !o.showZero && n.value === 0),
              o.badgeClass
            ]),
            style: Nt(E(a))
          }, [
            Tt(o.$slots, "content", { value: E(s) }, () => [
              Ao(ne(E(s)), 1)
            ])
          ], 6), [
            [Tn, !o.hidden && (E(s) || o.isDot || o.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Qu = /* @__PURE__ */ Bn(Zu, [["__file", "badge.vue"]]);
const ed = Za(Qu), td = Dt({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ve(Object)
  },
  size: Ou,
  button: {
    type: ve(Object)
  },
  experimentalFeatures: {
    type: ve(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ve(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Ru
}), Ee = {};
ue({
  name: "ElConfigProvider",
  props: td,
  setup(e, { slots: t }) {
    Be(() => e.message, (r) => {
      Object.assign(Ee, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Ja(e);
    return () => Tt(t, "default", { config: n?.value });
  }
});
const no = ["success", "info", "warning", "error"], fe = Xu({
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
  appendTo: _t ? document.body : void 0
}), nd = Dt({
  customClass: {
    type: String,
    default: fe.customClass
  },
  center: {
    type: Boolean,
    default: fe.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: fe.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: fe.duration
  },
  icon: {
    type: to,
    default: fe.icon
  },
  id: {
    type: String,
    default: fe.id
  },
  message: {
    type: ve([
      String,
      Object,
      Function
    ]),
    default: fe.message
  },
  onClose: {
    type: ve(Function),
    default: fe.onClose
  },
  showClose: {
    type: Boolean,
    default: fe.showClose
  },
  type: {
    type: String,
    values: no,
    default: fe.type
  },
  plain: {
    type: Boolean,
    default: fe.plain
  },
  offset: {
    type: Number,
    default: fe.offset
  },
  zIndex: {
    type: Number,
    default: fe.zIndex
  },
  grouping: {
    type: Boolean,
    default: fe.grouping
  },
  repeatNum: {
    type: Number,
    default: fe.repeatNum
  }
}), rd = {
  destroy: () => !0
}, Le = Do([]), sd = (e) => {
  const t = Le.findIndex((s) => s.id === e), n = Le[t];
  let r;
  return t > 0 && (r = Le[t - 1]), { current: n, prev: r };
}, ad = (e) => {
  const { prev: t } = sd(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, od = (e, t) => Le.findIndex((r) => r.id === e) > 0 ? 16 : t, id = ue({
  name: "ElMessage"
}), ld = /* @__PURE__ */ ue({
  ...id,
  props: nd,
  emits: rd,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Ku, { ns: s, zIndex: a } = qa("message"), { currentZIndex: o, nextZIndex: c } = a, d = B(), p = B(!1), _ = B(0);
    let C;
    const L = W(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = W(() => {
      const v = n.type;
      return { [s.bm("icon", v)]: v && Dn[v] };
    }), F = W(() => n.icon || Dn[n.type] || ""), b = W(() => ad(n.id)), N = W(() => od(n.id, n.offset) + b.value), f = W(() => _.value + N.value), S = W(() => ({
      top: `${N.value}px`,
      zIndex: o.value
    }));
    function y() {
      n.duration !== 0 && ({ stop: C } = Ua(() => {
        I();
      }, n.duration));
    }
    function g() {
      C?.();
    }
    function I() {
      p.value = !1;
    }
    function R({ code: v }) {
      v === Ln.esc && I();
    }
    return cn(() => {
      y(), c(), p.value = !0;
    }), Be(() => n.repeatNum, () => {
      g(), y();
    }), Ha(document, "keydown", R), mu(d, () => {
      _.value = d.value.getBoundingClientRect().height;
    }), t({
      visible: p,
      bottom: f,
      close: I
    }), (v, ee) => (j(), ze(kr, {
      name: E(s).b("fade"),
      onBeforeLeave: v.onClose,
      onAfterLeave: (D) => v.$emit("destroy"),
      persisted: ""
    }, {
      default: ct(() => [
        ut(T("div", {
          id: v.id,
          ref_key: "messageRef",
          ref: d,
          class: le([
            E(s).b(),
            { [E(s).m(v.type)]: v.type },
            E(s).is("center", v.center),
            E(s).is("closable", v.showClose),
            E(s).is("plain", v.plain),
            v.customClass
          ]),
          style: Nt(E(S)),
          role: "alert",
          onMouseenter: g,
          onMouseleave: y
        }, [
          v.repeatNum > 1 ? (j(), ze(E(ed), {
            key: 0,
            value: v.repeatNum,
            type: E(L),
            class: le(E(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : De("v-if", !0),
          E(F) ? (j(), ze(E(An), {
            key: 1,
            class: le([E(s).e("icon"), E(P)])
          }, {
            default: ct(() => [
              (j(), ze(na(E(F))))
            ]),
            _: 1
          }, 8, ["class"])) : De("v-if", !0),
          Tt(v.$slots, "default", {}, () => [
            v.dangerouslyUseHTMLString ? (j(), X(Me, { key: 1 }, [
              De(" Caution here, message could've been compromised, never use user's input as message "),
              T("p", {
                class: le(E(s).e("content")),
                innerHTML: v.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (j(), X("p", {
              key: 0,
              class: le(E(s).e("content"))
            }, ne(v.message), 3))
          ]),
          v.showClose ? (j(), ze(E(An), {
            key: 2,
            class: le(E(s).e("closeBtn")),
            onClick: Lt(I, ["stop"])
          }, {
            default: ct(() => [
              Q(E(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : De("v-if", !0)
        ], 46, ["id"]), [
          [Tn, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var cd = /* @__PURE__ */ Bn(ld, [["__file", "message.vue"]]);
let ud = 1;
const ro = (e) => {
  const t = !e || ft(e) || nn(e) || on(e) ? { message: e } : e, n = {
    ...fe,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ft(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    Cr(r) || (r = document.body), n.appendTo = r;
  }
  return Ws(Ee.grouping) && !n.grouping && (n.grouping = Ee.grouping), pt(Ee.duration) && n.duration === 3e3 && (n.duration = Ee.duration), pt(Ee.offset) && n.offset === 16 && (n.offset = Ee.offset), Ws(Ee.showClose) && !n.showClose && (n.showClose = Ee.showClose), n;
}, dd = (e) => {
  const t = Le.indexOf(e);
  if (t === -1)
    return;
  Le.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, fd = ({ appendTo: e, ...t }, n) => {
  const r = `message_${ud++}`, s = t.onClose, a = document.createElement("div"), o = {
    ...t,
    id: r,
    onClose: () => {
      s?.(), dd(_);
    },
    onDestroy: () => {
      Nn(null, a);
    }
  }, c = Q(cd, o, on(o.message) || nn(o.message) ? {
    default: on(o.message) ? o.message : () => o.message
  } : null);
  c.appContext = n || Rt._context, Nn(c, a), e.appendChild(a.firstElementChild);
  const d = c.component, _ = {
    id: r,
    vnode: c,
    vm: d,
    handler: {
      close: () => {
        d.exposed.visible.value = !1;
      }
    },
    props: c.component.props
  };
  return _;
}, Rt = (e = {}, t) => {
  if (!_t)
    return { close: () => {
    } };
  const n = ro(e);
  if (n.grouping && Le.length) {
    const s = Le.find(({ vnode: a }) => {
      var o;
      return ((o = a.props) == null ? void 0 : o.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (pt(Ee.max) && Le.length >= Ee.max)
    return { close: () => {
    } };
  const r = fd(n, t);
  return Le.push(r), r.handler;
};
no.forEach((e) => {
  Rt[e] = (t = {}, n) => {
    const r = ro(t);
    return Rt({ ...r, type: e }, n);
  };
});
function hd(e) {
  for (const t of Le)
    (!e || e === t.props.type) && t.handler.close();
}
Rt.closeAll = hd;
Rt._context = null;
const pd = Qa(Rt, "$message"), so = [
  "success",
  "info",
  "warning",
  "error"
], md = Dt({
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
    type: to
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: ve([
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
    type: ve(Function),
    default: () => {
    }
  },
  onClose: {
    type: ve(Function),
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
    values: [...so, ""],
    default: ""
  },
  zIndex: Number
}), gd = {
  destroy: () => !0
}, _d = ue({
  name: "ElNotification"
}), vd = /* @__PURE__ */ ue({
  ..._d,
  props: md,
  emits: gd,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: s } = qa("notification"), { nextZIndex: a, currentZIndex: o } = s, { Close: c } = Yu, d = B(!1);
    let p;
    const _ = W(() => {
      const y = n.type;
      return y && Dn[n.type] ? r.m(y) : "";
    }), C = W(() => n.type && Dn[n.type] || n.icon), L = W(() => n.position.endsWith("right") ? "right" : "left"), P = W(() => n.position.startsWith("top") ? "top" : "bottom"), F = W(() => {
      var y;
      return {
        [P.value]: `${n.offset}px`,
        zIndex: (y = n.zIndex) != null ? y : o.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: p } = Ua(() => {
        d.value && f();
      }, n.duration));
    }
    function N() {
      p?.();
    }
    function f() {
      d.value = !1;
    }
    function S({ code: y }) {
      y === Ln.delete || y === Ln.backspace ? N() : y === Ln.esc ? d.value && f() : b();
    }
    return cn(() => {
      b(), a(), d.value = !0;
    }), Ha(document, "keydown", S), t({
      visible: d,
      close: f
    }), (y, g) => (j(), ze(kr, {
      name: E(r).b("fade"),
      onBeforeLeave: y.onClose,
      onAfterLeave: (I) => y.$emit("destroy"),
      persisted: ""
    }, {
      default: ct(() => [
        ut(T("div", {
          id: y.id,
          class: le([E(r).b(), y.customClass, E(L)]),
          style: Nt(E(F)),
          role: "alert",
          onMouseenter: N,
          onMouseleave: b,
          onClick: y.onClick
        }, [
          E(C) ? (j(), ze(E(An), {
            key: 0,
            class: le([E(r).e("icon"), E(_)])
          }, {
            default: ct(() => [
              (j(), ze(na(E(C))))
            ]),
            _: 1
          }, 8, ["class"])) : De("v-if", !0),
          T("div", {
            class: le(E(r).e("group"))
          }, [
            T("h2", {
              class: le(E(r).e("title")),
              textContent: ne(y.title)
            }, null, 10, ["textContent"]),
            ut(T("div", {
              class: le(E(r).e("content")),
              style: Nt(y.title ? void 0 : { margin: 0 })
            }, [
              Tt(y.$slots, "default", {}, () => [
                y.dangerouslyUseHTMLString ? (j(), X(Me, { key: 1 }, [
                  De(" Caution here, message could've been compromised, never use user's input as message "),
                  T("p", { innerHTML: y.message }, null, 8, ["innerHTML"])
                ], 2112)) : (j(), X("p", { key: 0 }, ne(y.message), 1))
              ])
            ], 6), [
              [Tn, y.message]
            ]),
            y.showClose ? (j(), ze(E(An), {
              key: 0,
              class: le(E(r).e("closeBtn")),
              onClick: Lt(f, ["stop"])
            }, {
              default: ct(() => [
                Q(E(c))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : De("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Tn, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var yd = /* @__PURE__ */ Bn(vd, [["__file", "notification.vue"]]);
const xn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Sr = 16;
let wd = 1;
const Mt = function(e = {}, t) {
  if (!_t)
    return { close: () => {
    } };
  (ft(e) || nn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  xn[n].forEach(({ vm: _ }) => {
    var C;
    r += (((C = _.el) == null ? void 0 : C.offsetHeight) || 0) + Sr;
  }), r += Sr;
  const s = `notification_${wd++}`, a = e.onClose, o = {
    ...e,
    offset: r,
    id: s,
    onClose: () => {
      bd(s, n, a);
    }
  };
  let c = document.body;
  Cr(e.appendTo) ? c = e.appendTo : ft(e.appendTo) && (c = document.querySelector(e.appendTo)), Cr(c) || (c = document.body);
  const d = document.createElement("div"), p = Q(yd, o, on(o.message) ? o.message : nn(o.message) ? () => o.message : null);
  return p.appContext = Wa(t) ? Mt._context : t, p.props.onDestroy = () => {
    Nn(null, d);
  }, Nn(p, d), xn[n].push({ vm: p }), c.appendChild(d.firstElementChild), {
    close: () => {
      p.component.exposed.visible.value = !1;
    }
  };
};
so.forEach((e) => {
  Mt[e] = (t = {}, n) => ((ft(t) || nn(t)) && (t = {
    message: t
  }), Mt({ ...t, type: e }, n));
});
function bd(e, t, n) {
  const r = xn[t], s = r.findIndex(({ vm: p }) => {
    var _;
    return ((_ = p.component) == null ? void 0 : _.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: a } = r[s];
  if (!a)
    return;
  n?.(a);
  const o = a.el.offsetHeight, c = t.split("-")[0];
  r.splice(s, 1);
  const d = r.length;
  if (!(d < 1))
    for (let p = s; p < d; p++) {
      const { el: _, component: C } = r[p].vm, L = Number.parseInt(_.style[c], 10) - o - Sr;
      C.props.offset = L;
    }
}
function Cd() {
  for (const e of Object.values(xn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Mt.closeAll = Cd;
Mt._context = null;
const Ed = Qa(Mt, "$notify"), cr = {
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
      duration: s = 3e3,
      showClose: a = !1
    } = e;
    r === "center" ? pd({
      message: t,
      type: n,
      duration: s,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Ed({
      message: t,
      type: n,
      position: r,
      duration: s,
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
}, Sd = "snippets-code:developer-mode", ao = "snippets-code:frontend-diagnostics", Ld = 240, Zt = "[REDACTED]", kn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Zt}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Zt}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Zt
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Zt}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Zt}`
), oo = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return kn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return kn(
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
    return kn(String(e));
  }
}, kd = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Td = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(ao) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, zr = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Sd) === "true";
  } catch {
    return !1;
  }
}, Nd = (e, t, n) => {
  if (!zr() || typeof localStorage > "u") return;
  const r = Td();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: kd(),
    message: kn(t),
    data: oo(n)
  });
  try {
    localStorage.setItem(
      ao,
      JSON.stringify(r.slice(-Ld))
    );
  } catch {
  }
}, Od = () => zr(), Id = (e) => e === "error" || zr(), vn = (e, t, n) => {
  Nd(e, t, n), Id(e) && O("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : oo(n)
  }).catch(() => {
  });
}, Qt = {
  info: (e, t, ...n) => {
    vn("info", e, t);
  },
  error: (e, t) => {
    vn("error", e, t);
  },
  warn: (e, t) => {
    vn("warn", e, t);
  },
  debug: (e, t) => {
    Od() && vn("debug", e, t);
  }
}, Pd = "[screen-recorder]", ye = async (e, t) => {
  const n = performance.now();
  try {
    return await O(e, t);
  } catch (r) {
    throw console.error(`${Pd} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: r
    }), r;
  }
}, Rd = () => ye("screen_recorder_get_ffmpeg_status"), ot = (e) => ye("screen_recorder_set_capture_excluded", { excluded: e }), yn = (e) => ye("screen_recorder_set_passthrough_region", { region: e }), wn = (e) => ye("screen_recorder_set_overlay_window_region", { region: e }), Md = () => ye("screen_recorder_pick_target_window"), Ad = () => ye("screen_recorder_close_window"), Dd = (e, t) => ye("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), xd = () => ye("screen_recorder_pause_recording"), Fd = (e, t) => ye("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), $d = () => ye("screen_recorder_stop_recording"), Wd = () => ye("screen_recorder_cancel_recording"), Ud = () => ye("screen_recorder_cancel_export"), zd = (e, t) => ye("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), Js = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0,
  showCursor: !0
});
function jd() {
  const e = B("selecting"), t = B(Js()), n = B(null), r = B(null), s = B(""), a = B(null), o = B(0), c = B(0), d = B(null), p = () => {
    c.value = e.value === "recording" && a.value !== null ? o.value + Date.now() - a.value : o.value;
  }, _ = () => {
    d.value !== null && (window.clearInterval(d.value), d.value = null);
  }, C = () => {
    _(), p(), d.value = window.setInterval(() => {
      p();
    }, 250);
  }, L = async () => (n.value = await Rd(), n.value), P = async (I) => {
    s.value = "", r.value = null;
    const R = n.value ?? await L();
    if (!R.available)
      throw new Error(R.message || "FFmpeg unavailable");
    await Dd(I, t.value), e.value = "recording", o.value = 0, c.value = 0, a.value = Date.now(), C();
  }, F = async () => {
    e.value === "recording" && (p(), o.value = c.value, a.value = null, _(), await xd(), e.value = "paused");
  }, b = async (I) => {
    e.value === "paused" && (await Fd(I, t.value), e.value = "recording", a.value = Date.now(), C());
  }, N = async () => {
    e.value !== "recording" && e.value !== "paused" || (p(), o.value = c.value, a.value = null, _(), await $d(), e.value = "exporting");
  }, f = async () => {
    e.value = "exporting";
    try {
      return r.value = await zd(
        t.value,
        Math.round(c.value)
      ), e.value = "completed", r.value;
    } catch (I) {
      throw e.value = "ready", r.value = null, I;
    }
  }, S = async () => {
    await Ud(), e.value = "ready", r.value = null;
  }, y = async () => {
    _(), await Wd(), e.value = "selecting", a.value = null, o.value = 0, c.value = 0, r.value = null;
  }, g = () => {
    e.value = "selecting", a.value = null, o.value = 0, c.value = 0, r.value = null, s.value = "", t.value = Js();
  };
  return Lr(() => {
    _();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: r,
    errorMessage: s,
    elapsedMs: c,
    refreshFfmpegStatus: L,
    begin: P,
    pause: F,
    resume: b,
    stop: N,
    exportFile: f,
    cancelExport: S,
    cancel: y,
    reset: g
  };
}
const Hd = { class: "screen-recorder" }, Bd = ["onMousedown"], Vd = { class: "window-title" }, Gd = {
  key: 0,
  class: "time"
}, Yd = {
  key: 1,
  class: "save-status"
}, Kd = {
  key: 2,
  class: "save-status"
}, Xd = {
  key: 3,
  class: "save-status"
}, qd = ["title"], Jd = { class: "button-label" }, Zd = ["title"], Qd = { class: "button-label" }, ef = ["disabled", "title"], tf = { class: "record-label" }, nf = { class: "capture-viewport" }, rf = { class: "capture-frame" }, sf = { class: "control-group control-group--tools" }, af = { class: "tool-pill" }, of = ["title", "aria-pressed", "disabled"], lf = ["title", "aria-label", "aria-pressed", "disabled"], cf = { class: "select-field" }, uf = ["disabled"], df = ["disabled"], ff = ["disabled"], hf = { value: "high" }, pf = { value: "standard" }, mf = { value: "small" }, gf = { class: "dimension-group optional-size" }, _f = { class: "dimension" }, vf = ["value"], yf = { class: "dimension" }, wf = ["value"], bf = { class: "control-group control-group--actions" }, Cf = { class: "time" }, Ef = ["title"], Sf = { class: "button-label" }, Lf = ["title"], kf = { class: "button-label" }, Tf = ["title"], Nf = { class: "export-progress__meta" }, Of = { class: "export-progress__track" }, If = ["title"], Pf = ["disabled", "title"], Rf = { class: "record-label" }, Mf = {
  key: 0,
  class: "warning"
}, qe = "[screen-recorder]", Re = 80, ur = 400, en = 240, dr = 260, Zs = 140, Af = 3, Qs = 2, ea = 0, Df = 15, xf = 10, Ff = 2, $f = 8, Wf = /* @__PURE__ */ ue({
  __name: "index",
  setup(e) {
    const t = {
      start: "R",
      pause: "P",
      stop: "S"
    }, { t: n } = Un(), r = Oa(), s = B(null), a = B(null), o = B(null), c = B({ width: 0, height: 0 }), d = B(!1), p = B(!1), _ = B(!1), C = B(0), L = B(!1), P = B(null);
    let F = null, b = null, N = null, f = null, S = null, y = null, g = null, I = null, R = null, v = null;
    const ee = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: D,
      settings: z,
      ffmpegStatus: ie,
      result: H,
      elapsedMs: xt,
      refreshFfmpegStatus: Ft,
      begin: $t,
      pause: Wt,
      resume: Ut,
      stop: zt,
      exportFile: be,
      cancelExport: et,
      cancel: vt,
      reset: jt
    } = jd(), yt = B(!1), me = W(
      () => D.value === "recording" || D.value === "paused" || D.value === "exporting"
    ), Ge = W(
      () => z.value.audio && z.value.format === "mp4"
    ), Ye = W(
      () => Ge.value && D.value === "recording"
    ), Ht = W(() => {
      const i = Ye.value && !L.value ? C.value : 0, h = (x, $) => Math.max(0.18, Math.min(1, x + i * $)).toFixed(3);
      return {
        "--bar-1": h(0.28, 0.64),
        "--bar-2": h(0.42, 0.78),
        "--bar-3": h(0.34, 0.94),
        "--bar-4": h(0.22, 0.72)
      };
    }), wt = W(() => {
      if (z.value.format === "gif")
        return "GIF 不支持音频";
      if (L.value && z.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (H.value?.audioDevice)
        return `已录制音频：${H.value.audioDevice}`;
      if (H.value && !H.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (ie.value?.available && !ie.value.systemAudioAvailable) {
        const i = ie.value.audioDevices?.join("、") || "无";
        return z.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${i}` : "录制音频已关闭";
      }
      return z.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Bt = W(
      () => z.value.showCursor ? String(n("screenRecorder.showCursorOn")) : String(n("screenRecorder.showCursorOff"))
    ), tt = W(
      () => `${n("screenRecorder.start")} (${t.start})`
    ), bt = W(
      () => `${n("screenRecorder.pause")} (${t.pause})`
    ), Ct = W(
      () => `${n("screenRecorder.resume")} (${t.pause})`
    ), Ke = W(
      () => `${n("screenRecorder.stop")} (${t.stop})`
    ), Fe = W(() => _.value), ke = W(() => {
      const i = P.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(i * 100)));
    }), $e = W(() => {
      const i = P.value;
      return i ? i.totalFrames && i.stage === "frames" ? `${i.message}` : i.message || "正在导出..." : "正在导出...";
    }), Vt = W(() => {
      const i = P.value;
      return i?.totalFrames ? `${$e.value} (${i.currentFrame}/${i.totalFrames})` : $e.value;
    }), l = W(() => {
      const i = Math.floor(xt.value / 1e3), h = Math.floor(i / 60).toString().padStart(2, "0"), x = (i % 60).toString().padStart(2, "0");
      return `${h}:${x}`;
    }), u = (i) => i instanceof Error ? i.message : String(i), w = async (i) => {
      try {
        await i();
      } catch (h) {
        console.error(`${qe} action failed`, h), Qt.error(`${qe} action failed`, h), yt.value || cr.msg(u(h), "error");
      }
    }, M = (i) => Math.max(2, Math.floor(Math.round(i) / 2) * 2), J = (i) => Math.max(1, Math.round(i)), U = (i, h, x, $, te) => ({
      ...i,
      x: i.x + (h - i.screenX) / i.scale,
      y: i.y + (x - i.screenY) / i.scale,
      width: $ / i.scale,
      height: te / i.scale,
      screenX: h,
      screenY: x,
      physicalWidth: $,
      physicalHeight: te
    }), m = async (i) => {
      const h = i.screenX + Math.round(i.physicalWidth / 2), x = i.screenY + Math.round(i.physicalHeight / 2), $ = await qt(i.screenX, i.screenY) || await qt(h, x);
      if (!$)
        return U(
          i,
          i.screenX,
          i.screenY,
          M(i.physicalWidth),
          M(i.physicalHeight)
        );
      const te = $.position.x, oe = $.position.y, Te = te + $.size.width, We = oe + $.size.height, ge = i.screenX + i.physicalWidth, hn = i.screenY + i.physicalHeight, rt = Math.max(i.screenX, te), Ne = Math.max(i.screenY, oe), st = Math.min(ge, Te), Oe = Math.min(hn, We), Kt = M(st - rt), rs = M(Oe - Ne);
      if (Kt < Re || rs < Re)
        throw new Error("录制区域超出屏幕边界，请重新选择录制区域");
      return U(
        i,
        rt,
        Ne,
        Kt,
        rs
      );
    }, k = (i, h) => Math.abs(i - h) <= Ff, K = (i, h) => i === h ? !0 : !i || !h ? !1 : k(i.x, h.x) && k(i.y, h.y) && k(i.width, h.width) && k(i.height, h.height), Z = async (i) => {
      K(v, i) || (v = i ? { ...i } : null, await yn(i).catch(() => {
      }));
    }, Ce = async () => {
      const i = s.value;
      if (!i)
        throw new Error("录制视口尚未准备好");
      const h = i.getBoundingClientRect(), x = await r.scaleFactor(), $ = await r.innerPosition(), te = J(h.width * x), oe = J(h.height * x);
      if (te < Re || oe < Re)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: h.left,
        y: h.top,
        width: te / x,
        height: oe / x,
        screenX: Math.round($.x + h.left * x),
        screenY: Math.round($.y + h.top * x),
        physicalWidth: te,
        physicalHeight: oe,
        scale: x
      };
    }, nt = async () => {
      const i = await Ce();
      return m(i);
    }, Xe = async () => {
      try {
        const i = await Ce();
        if ((!k(
          c.value.width,
          i.physicalWidth
        ) || !k(
          c.value.height,
          i.physicalHeight
        )) && (c.value = {
          width: i.physicalWidth,
          height: i.physicalHeight
        }), p.value) {
          const h = a.value?.getBoundingClientRect().height ?? 0, x = o.value?.getBoundingClientRect().height ?? 0;
          await Z({
            x: Math.round(i.x * i.scale),
            y: Math.round((i.y + h) * i.scale),
            width: i.physicalWidth,
            height: Math.max(
              1,
              i.physicalHeight - Math.round((h + x) * i.scale)
            )
          });
          return;
        }
        await Z({
          x: Math.round(i.x * i.scale),
          y: Math.round(i.y * i.scale),
          width: i.physicalWidth,
          height: i.physicalHeight
        });
      } catch {
        (c.value.width !== 0 || c.value.height !== 0) && (c.value = { width: 0, height: 0 }), await Z(null);
      }
    }, pe = async () => I || (I = Xe().finally(() => {
      if (I = null, R) {
        const i = R;
        R = null, Z(i);
      }
    }), I), jr = () => {
      y === null && (y = requestAnimationFrame(() => {
        y = null, pe();
      }));
    }, un = () => {
      d.value || jr();
    }, Hr = () => {
      R = null, v = null;
    }, dn = async () => {
      Hr(), await yn(null).catch(() => {
      }), await wn(null).catch(() => {
      });
    }, Br = () => {
      d.value = !1, p.value = !1, _.value = !1;
    }, Vr = () => {
      window.setTimeout(() => {
        pe();
      }, 120);
    }, Gt = () => new Promise((i) => {
      requestAnimationFrame(() => requestAnimationFrame(() => i()));
    }), io = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await Gt(), document.documentElement.classList.remove("screen-recorder-repaint"), await Gt();
    }, lo = async () => {
      await r.setIgnoreCursorEvents(!0).catch(() => {
      }), await Gt(), await r.setIgnoreCursorEvents(!1).catch(() => {
      }), await pe();
    }, Vn = async () => {
      const [i, h] = await Promise.all([
        r.outerPosition(),
        r.outerSize()
      ]);
      return {
        x: i.x,
        y: i.y,
        width: h.width,
        height: h.height
      };
    }, co = (i) => i ? {
      x: i.position.x,
      y: i.position.y,
      width: i.size.width,
      height: i.size.height
    } : null, Gr = (i) => {
      const h = o.value?.getBoundingClientRect().height ?? 42;
      return Math.max(
        8,
        Math.round((h + $f) * i)
      );
    }, uo = (i, h, x) => h ? i.y + i.height >= h.y + h.height - Gr(x) : !1, Gn = async () => {
      try {
        const i = await Vn(), h = i.x + Math.round(i.width / 2), x = i.y + Math.round(i.height / 2), $ = await qt(h, x) || await qt(i.x, i.y), te = $?.scaleFactor || await r.scaleFactor();
        _.value = uo(
          i,
          co($),
          te
        );
      } catch {
        _.value = !1;
      }
    }, Yt = () => {
      g === null && (g = requestAnimationFrame(() => {
        g = null, Gn();
      }));
    }, Yr = () => {
      Yt(), un();
    }, Yn = async () => {
      if (!p.value) {
        await wn(null).catch(() => {
        });
        return;
      }
      const i = await Vn(), h = await r.scaleFactor(), x = a.value?.getBoundingClientRect().height ?? 0, $ = o.value?.getBoundingClientRect().height ?? 0;
      await wn({
        width: i.width,
        height: i.height,
        topHeight: Math.round(x * h),
        bottomHeight: Math.round($ * h)
      }).catch(() => {
      });
    }, Kr = (i, h) => {
      const x = Math.min(i.width, h.width), $ = Math.min(i.height, h.height), te = h.x + h.width - x, oe = h.y + h.height - $;
      return {
        x: Math.min(Math.max(i.x, h.x), te),
        y: Math.min(Math.max(i.y, h.y), oe),
        width: x,
        height: $
      };
    }, fo = (i, h, x) => {
      if (!h) return !1;
      const $ = Math.max(8, Math.round(8 * x)), te = h.x + h.width, oe = h.y + h.height, Te = i.screenX + i.physicalWidth, We = i.screenY + i.physicalHeight;
      return i.screenX <= h.x + $ && i.screenY <= h.y + $ && Te >= te - $ && We >= oe - $;
    }, ho = (i, h, x) => {
      if (!h) return !1;
      const $ = Math.max(8, Math.round(8 * x));
      return i.screenX <= h.x + $ || i.screenY <= h.y + $ || i.screenX + i.physicalWidth >= h.x + h.width - $ || i.screenY + i.physicalHeight >= h.y + h.height - $;
    }, po = (i, h, x) => h ? i.screenY + i.physicalHeight >= h.y + h.height - Gr(x) : !1, mo = (i, h, x) => {
      if (!x) return i;
      const $ = Math.round(Df * h), te = Math.round(xf * h);
      return {
        ...i,
        physicalWidth: Math.max(Re, i.physicalWidth - $),
        physicalHeight: Math.max(
          Re,
          i.physicalHeight - te
        )
      };
    }, Xr = async (i) => {
      await r.setSize(
        new dt(Math.round(i.width), Math.round(i.height))
      ), await r.setPosition(
        new Ae(Math.round(i.x), Math.round(i.y))
      ), await Gt();
    }, qr = async () => {
      await r.setAlwaysOnTop(!0).catch(() => {
      });
    }, Jr = async () => {
      const [i, h] = await Promise.all([
        Ce(),
        Vn()
      ]);
      return { actualRegion: i, currentFrame: h };
    }, go = async (i, h, x) => {
      const { actualRegion: $, currentFrame: te } = await Jr(), oe = $.screenX - te.x, Te = $.screenY - te.y, We = Math.max(
        0,
        te.width - $.physicalWidth
      ), ge = Math.max(
        0,
        te.height - $.physicalHeight
      );
      return {
        x: i.screenX - oe,
        y: i.screenY - Te,
        width: Math.max(h, i.physicalWidth + We),
        height: Math.max(x, i.physicalHeight + ge)
      };
    }, Zr = async () => {
      f?.(), f = null, C.value = 0;
    }, fn = async () => {
      if (!(!Ge.value || f))
        try {
          f = await Pn(
            "screen_recorder_audio_level",
            (i) => {
              if (!Ye.value) {
                C.value = 0;
                return;
              }
              const h = Math.max(
                0,
                Math.min(1, Number(i.payload?.level ?? 0))
              );
              C.value = C.value * 0.38 + h * 0.62;
            }
          ), L.value = !1;
        } catch (i) {
          console.error(`${qe} audio meter failed`, i), Qt.warn(`${qe} audio meter failed`, i), L.value = !0;
        }
    }, Kn = () => {
      r.setFocus().catch(() => {
      });
    }, _o = async (i) => {
      i.button !== 0 || me.value || (Br(), await r.setMinSize(new lt(ur, en)).catch(() => {
      }), await dn(), await r.startDragging().catch((h) => {
        cr.msg(u(h), "error");
      }), Vr(), Yt());
    }, vo = async (i) => {
      me.value || (Br(), await r.setMinSize(new lt(ur, en)).catch(() => {
      }), await dn(), await r.startResizeDragging(i).catch((h) => {
        cr.msg(u(h), "error");
      }), Vr(), Yt());
    }, Xn = () => w(async () => {
      P.value = null, await fn(), await ot(!0).catch(() => {
      }), await pe(), await $t(await nt());
    }), qn = () => w(async () => {
      await Wt();
    }), Jn = () => w(async () => {
      await Ut(await nt());
    }), Zn = () => w(async () => {
      P.value = {
        stage: "encode",
        message: z.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await zt(), C.value = 0, await ot(!1).catch(() => {
      }), await be(), await pe();
    }), Qr = () => w(async () => {
      await et(), P.value = null, await ot(!1).catch(() => {
      }), await pe();
    }), Qn = () => {
      const i = { ...z.value };
      dn(), jt(), z.value = i, D.value = "ready", H.value = null, P.value = null, ot(!1).catch(() => {
      }), it(pe), fn();
    }, er = (i) => {
      if (D.value !== "exporting") {
        if (i === "start") {
          D.value === "ready" ? Xn() : D.value === "completed" && Qn();
          return;
        }
        if (i === "pause") {
          D.value === "recording" ? qn() : D.value === "paused" && Jn();
          return;
        }
        i === "stop" && (D.value === "recording" || D.value === "paused") && Zn();
      }
    }, yo = async (i) => {
      const h = await qt(i.screenX, i.screenY), x = h?.scaleFactor || await r.scaleFactor(), $ = h ? {
        x: h.position.x,
        y: h.position.y,
        width: h.size.width,
        height: h.size.height
      } : null, te = fo(
        i,
        $,
        x
      ), oe = ho(
        i,
        $,
        x
      );
      _.value = po(
        i,
        $,
        x
      ), d.value = !0, p.value = oe, await it(), await Gt(), await r.setMinSize(
        oe ? new lt(dr, Zs) : new lt(dr, en)
      ).catch(() => {
      });
      const Te = Math.round(dr * x), We = Math.round(
        (oe ? Zs : en) * x
      ), ge = mo(i, x, !te), hn = oe && $ ? {
        x: Math.max($.x, ge.screenX),
        y: Math.max($.y, ge.screenY),
        width: Math.max(
          Te,
          Math.min(ge.physicalWidth, $.width)
        ),
        height: Math.max(
          We,
          Math.min(ge.physicalHeight, $.height)
        )
      } : await go(
        ge,
        Te,
        We
      );
      try {
        if (await Xr(
          $ && oe ? Kr(hn, $) : hn
        ), await qr(), await it(), await Yn(), oe)
          return;
        const rt = async () => {
          const { actualRegion: Ne, currentFrame: st } = await Jr(), Oe = {
            x: ge.screenX - Ne.screenX,
            y: ge.screenY - Ne.screenY,
            width: ge.physicalWidth - Ne.physicalWidth,
            height: ge.physicalHeight - Ne.physicalHeight
          };
          if (Math.abs(Oe.x) <= ea && Math.abs(Oe.y) <= ea && Math.abs(Oe.width) <= Qs && Math.abs(Oe.height) <= Qs)
            return !0;
          const Kt = {
            x: st.x + Oe.x,
            y: st.y + Oe.y,
            width: Math.max(Te, st.width + Oe.width),
            height: Math.max(
              We,
              st.height + Oe.height
            )
          };
          return await Xr(
            $ && oe ? Kr(Kt, $) : Kt
          ), !1;
        };
        for (let Ne = 0; Ne < Af && !await rt(); Ne += 1)
          ;
      } catch (rt) {
        console.error(`${qe} snap correction failed`, rt), Qt.warn(`${qe} snap correction failed`, rt);
      } finally {
        await qr(), await lo(), await Gn(), await pe(), await Yn(), await io(), await r.setFocus().catch(() => {
        });
      }
    }, wo = () => w(async () => {
      await dn();
      const i = await Md();
      await yo(i);
    }), bo = () => {
      me.value || z.value.format === "gif" || (z.value.audio = !z.value.audio);
    }, Co = () => {
      me.value || (z.value.showCursor = !z.value.showCursor);
    }, Eo = async () => {
      await r.minimize();
    }, es = async () => {
      yt.value = !0;
      try {
        D.value === "exporting" ? await et().catch(() => {
        }) : await vt(), await yn(null).catch(() => {
        }), await ot(!1).catch(() => {
        });
      } catch {
      }
      await Ad();
    }, ts = async () => {
      H.value && (await pe(), await O("open_file_with_default_app", { filePath: H.value.path }));
    }, So = async () => {
      H.value && (await pe(), await O("show_file_in_folder", { filePath: H.value.path }));
    }, ns = (i) => {
      if (i.repeat || i.ctrlKey || i.metaKey || i.altKey) return;
      const h = i.key.toLowerCase();
      if (h === "r") {
        i.preventDefault(), i.stopPropagation(), er("start");
        return;
      }
      if (h === "p") {
        i.preventDefault(), i.stopPropagation(), er("pause");
        return;
      }
      if (h === "s") {
        i.preventDefault(), i.stopPropagation(), er("stop");
        return;
      }
      i.key === "Escape" && (i.preventDefault(), es());
    };
    return cn(async () => {
      Qt.info(`${qe} frontend mounted`), D.value = "ready", await r.setMinSize(new lt(ur, en)).catch(() => {
      }), await ot(!1).catch(() => {
      }), await Ft().catch(() => {
      }), await it(), await pe(), await Gn(), await fn(), await it(), S = await Pn(
        "screen_recorder_export_progress",
        (i) => {
          P.value = i.payload;
        }
      ).catch(() => null), await r.emit("screen_recorder_ready"), Qt.info(`${qe} frontend ready emitted`), s.value && (F = new ResizeObserver(() => {
        un();
      }), F.observe(s.value)), b = await r.onMoved(() => {
        Yt(), un();
      }).catch(() => null), N = await r.onResized(() => {
        Yt(), un();
      }).catch(() => null), window.addEventListener("resize", Yr), window.addEventListener("keydown", ns);
    }), Be(Ge, (i) => {
      i ? fn() : Zr();
    }), Be(D, (i) => {
      i !== "recording" && (C.value = 0), i !== "exporting" && (P.value = null);
    }), Be(Fe, async () => {
      await it(), await pe(), await Yn();
    }), Lr(() => {
      F?.disconnect(), b?.(), N?.(), S?.(), window.removeEventListener(
        "resize",
        Yr
      ), window.removeEventListener("keydown", ns), Hr(), g !== null && (cancelAnimationFrame(g), g = null), yn(null).catch(() => {
      }), wn(null).catch(() => {
      }), ot(!1).catch(() => {
      }), Zr();
    }), (i, h) => (j(), X("div", Hd, [
      T(
        "div",
        {
          class: le(["recorder-shell", {
            recording: E(D) === "recording",
            paused: E(D) === "paused",
            "snap-aligned": d.value,
            "snap-fullscreen": p.value
          }])
        },
        [
          (j(), X(
            Me,
            null,
            xo(ee, (x) => T("span", {
              key: x.className,
              class: le(["resize-zone", x.className]),
              onMousedown: Lt(($) => vo(x.direction), ["prevent"])
            }, null, 42, Bd)),
            64
            /* STABLE_FRAGMENT */
          )),
          T(
            "header",
            {
              ref_key: "titleBarRef",
              ref: a,
              class: "title-bar",
              onMouseenter: Kn,
              onMousedown: _o
            },
            [
              T(
                "span",
                Vd,
                ne(i.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              Fe.value ? (j(), X(
                "div",
                {
                  key: 0,
                  class: "top-control-strip",
                  onMouseenter: Kn,
                  onMousedown: h[1] || (h[1] = Lt(() => {
                  }, ["stop"]))
                },
                [
                  E(D) === "recording" || E(D) === "paused" ? (j(), X(
                    "span",
                    Gd,
                    ne(l.value),
                    1
                    /* TEXT */
                  )) : E(D) === "exporting" ? (j(), X(
                    "span",
                    Yd,
                    ne(ke.value) + "% ",
                    1
                    /* TEXT */
                  )) : E(D) === "completed" ? (j(), X(
                    "span",
                    Kd,
                    ne(E(H)?.hasAudio ? "已保存·有声" : "已保存·无声"),
                    1
                    /* TEXT */
                  )) : (j(), X(
                    "span",
                    Xd,
                    ne(c.value.width) + "×" + ne(c.value.height),
                    1
                    /* TEXT */
                  )),
                  E(D) === "recording" || E(D) === "paused" ? (j(), X(
                    Me,
                    { key: 4 },
                    [
                      T("button", {
                        class: "control-button",
                        title: E(D) === "paused" ? Ct.value : bt.value,
                        onClick: h[0] || (h[0] = (x) => E(D) === "paused" ? Jn() : qn())
                      }, [
                        T(
                          "span",
                          Jd,
                          ne(E(D) === "paused" ? i.$t("screenRecorder.resume") : i.$t("screenRecorder.pause")),
                          1
                          /* TEXT */
                        )
                      ], 8, qd),
                      T("button", {
                        class: "control-button danger",
                        title: Ke.value,
                        onClick: Zn
                      }, [
                        T(
                          "span",
                          Qd,
                          ne(i.$t("screenRecorder.stop")),
                          1
                          /* TEXT */
                        )
                      ], 8, Zd)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : E(D) === "exporting" ? (j(), X("button", {
                    key: 5,
                    class: "control-button danger",
                    title: "取消导出",
                    onClick: Qr
                  }, h[7] || (h[7] = [
                    T(
                      "span",
                      { class: "button-label" },
                      "取消",
                      -1
                      /* HOISTED */
                    )
                  ]))) : E(D) === "completed" && E(H) ? (j(), X(
                    Me,
                    { key: 6 },
                    [
                      T("button", {
                        class: "control-button",
                        title: "打开文件",
                        onClick: ts
                      }, h[8] || (h[8] = [
                        T(
                          "span",
                          { class: "button-label" },
                          "打开",
                          -1
                          /* HOISTED */
                        )
                      ])),
                      T("button", {
                        class: "control-button",
                        title: "重新录制",
                        onClick: Qn
                      }, h[9] || (h[9] = [
                        T(
                          "span",
                          { class: "button-label" },
                          "重录",
                          -1
                          /* HOISTED */
                        )
                      ]))
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : (j(), X("button", {
                    key: 7,
                    class: "record-button",
                    disabled: E(ie)?.available === !1 || c.value.width < Re || c.value.height < Re,
                    title: tt.value,
                    onClick: Xn
                  }, [
                    h[10] || (h[10] = T(
                      "span",
                      { class: "record-dot" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    T(
                      "span",
                      tf,
                      ne(i.$t("screenRecorder.start")),
                      1
                      /* TEXT */
                    )
                  ], 8, ef))
                ],
                32
                /* NEED_HYDRATION */
              )) : De("v-if", !0),
              T(
                "div",
                {
                  class: "window-actions",
                  onMousedown: h[2] || (h[2] = Lt(() => {
                  }, ["stop"]))
                },
                [
                  T("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: Eo
                  }, [
                    Q(E(xl), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  T("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: es
                  }, [
                    Q(E(Dl), {
                      class: "title-icon",
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ])
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          T("main", nf, [
            h[15] || (h[15] = T(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            h[16] || (h[16] = T(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            h[17] || (h[17] = T(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            h[18] || (h[18] = T(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            T("div", rf, [
              T(
                "div",
                {
                  ref_key: "captureHoleRef",
                  ref: s,
                  class: "capture-hole"
                },
                null,
                512
                /* NEED_PATCH */
              ),
              h[11] || (h[11] = T(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              h[12] || (h[12] = T(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              h[13] || (h[13] = T(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              h[14] || (h[14] = T(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          T(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: o,
              class: "control-strip",
              onMouseenter: Kn
            },
            [
              T("div", sf, [
                T("div", af, [
                  E(D) === "ready" || E(D) === "completed" ? (j(), X(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Lt(wo, ["prevent"])
                    },
                    [
                      Q(E($l), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : De("v-if", !0),
                  T("button", {
                    class: le(["audio-meter", {
                      active: Ye.value && C.value > 0.03,
                      "audio-on": Ge.value,
                      metering: Ye.value && !L.value,
                      muted: !Ge.value || L.value
                    }]),
                    title: wt.value,
                    "aria-label": "系统声音录制状态",
                    "aria-pressed": E(z).audio && E(z).format === "mp4",
                    disabled: me.value || E(z).format === "gif",
                    onClick: bo
                  }, [
                    T(
                      "span",
                      {
                        class: "audio-bars",
                        style: Nt(Ht.value)
                      },
                      h[19] || (h[19] = [
                        T(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        T(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        T(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        T(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        )
                      ]),
                      4
                      /* STYLE */
                    )
                  ], 10, of),
                  T("button", {
                    class: le(["icon-control cursor-control", { active: E(z).showCursor }]),
                    title: Bt.value,
                    "aria-label": i.$t("screenRecorder.showCursor"),
                    "aria-pressed": E(z).showCursor,
                    disabled: me.value,
                    onClick: Co
                  }, [
                    Q(E(Fl), {
                      theme: "outline",
                      size: "17",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 10, lf)
                ]),
                T("label", cf, [
                  ut(T("select", {
                    "onUpdate:modelValue": h[3] || (h[3] = (x) => E(z).fps = x),
                    disabled: me.value
                  }, h[20] || (h[20] = [
                    T(
                      "option",
                      { value: 15 },
                      "15",
                      -1
                      /* HOISTED */
                    ),
                    T(
                      "option",
                      { value: 24 },
                      "24",
                      -1
                      /* HOISTED */
                    ),
                    T(
                      "option",
                      { value: 30 },
                      "30",
                      -1
                      /* HOISTED */
                    ),
                    T(
                      "option",
                      { value: 60 },
                      "60",
                      -1
                      /* HOISTED */
                    )
                  ]), 8, uf), [
                    [nr, E(z).fps]
                  ]),
                  h[21] || (h[21] = T(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                ut(T("select", {
                  "onUpdate:modelValue": h[4] || (h[4] = (x) => E(z).format = x),
                  class: "format-select optional-format",
                  disabled: me.value
                }, h[22] || (h[22] = [
                  T(
                    "option",
                    { value: "mp4" },
                    "MP4",
                    -1
                    /* HOISTED */
                  ),
                  T(
                    "option",
                    { value: "gif" },
                    "GIF",
                    -1
                    /* HOISTED */
                  )
                ]), 8, df), [
                  [nr, E(z).format]
                ]),
                ut(T("select", {
                  "onUpdate:modelValue": h[5] || (h[5] = (x) => E(z).quality = x),
                  class: "quality-select optional-quality",
                  disabled: me.value
                }, [
                  T(
                    "option",
                    hf,
                    ne(i.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  T(
                    "option",
                    pf,
                    ne(i.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  T(
                    "option",
                    mf,
                    ne(i.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, ff), [
                  [nr, E(z).quality]
                ]),
                T("div", gf, [
                  T("label", _f, [
                    T("input", {
                      value: c.value.width,
                      readonly: ""
                    }, null, 8, vf)
                  ]),
                  h[23] || (h[23] = T(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  T("label", yf, [
                    T("input", {
                      value: c.value.height,
                      readonly: ""
                    }, null, 8, wf)
                  ]),
                  h[24] || (h[24] = T(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              T("div", bf, [
                E(D) === "recording" || E(D) === "paused" ? (j(), X(
                  Me,
                  { key: 0 },
                  [
                    T(
                      "span",
                      Cf,
                      ne(l.value),
                      1
                      /* TEXT */
                    ),
                    T("button", {
                      class: "control-button",
                      title: E(D) === "paused" ? Ct.value : bt.value,
                      onClick: h[6] || (h[6] = (x) => E(D) === "paused" ? Jn() : qn())
                    }, [
                      T(
                        "span",
                        Sf,
                        ne(E(D) === "paused" ? i.$t("screenRecorder.resume") : i.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ], 8, Ef),
                    T("button", {
                      class: "control-button danger",
                      title: Ke.value,
                      onClick: Zn
                    }, [
                      T(
                        "span",
                        kf,
                        ne(i.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ], 8, Lf)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : E(D) === "exporting" ? (j(), X(
                  Me,
                  { key: 1 },
                  [
                    T("div", {
                      class: "export-progress",
                      title: Vt.value
                    }, [
                      T("div", Nf, [
                        T(
                          "span",
                          null,
                          ne($e.value),
                          1
                          /* TEXT */
                        ),
                        T(
                          "strong",
                          null,
                          ne(ke.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      T("div", Of, [
                        T(
                          "span",
                          {
                            style: Nt({ width: `${ke.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Tf),
                    T("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: Qr
                    }, h[25] || (h[25] = [
                      T(
                        "span",
                        { class: "button-label" },
                        "取消",
                        -1
                        /* HOISTED */
                      )
                    ]))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : E(D) === "completed" && E(H) ? (j(), X(
                  Me,
                  { key: 2 },
                  [
                    T("span", {
                      class: "save-status optional-save-status",
                      title: E(H).path
                    }, ne(E(H).hasAudio ? "已保存·有声" : "已保存·无声"), 9, If),
                    T("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: ts
                    }, h[26] || (h[26] = [
                      T(
                        "span",
                        { class: "button-label" },
                        "打开",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    T("button", {
                      class: "control-button",
                      title: "打开所在文件夹",
                      onClick: So
                    }, h[27] || (h[27] = [
                      T(
                        "span",
                        { class: "button-label" },
                        "文件夹",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    T("button", {
                      class: "control-button",
                      title: "重新录制",
                      onClick: Qn
                    }, h[28] || (h[28] = [
                      T(
                        "span",
                        { class: "button-label" },
                        "重录",
                        -1
                        /* HOISTED */
                      )
                    ]))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (j(), X("button", {
                  key: 3,
                  class: "record-button",
                  disabled: E(ie)?.available === !1 || c.value.width < Re || c.value.height < Re,
                  title: tt.value,
                  onClick: Xn
                }, [
                  h[29] || (h[29] = T(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  T(
                    "span",
                    Rf,
                    ne(i.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Pf))
              ])
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      E(ie) && !E(ie).available ? (j(), X(
        "p",
        Mf,
        ne(E(ie).message || i.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : De("v-if", !0)
    ]));
  }
}), Uf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, zf = /* @__PURE__ */ Uf(Wf, [["__scopeId", "data-v-508742f3"]]), jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zf
}, Symbol.toStringTag, { value: "Module" }));
export {
  Bf as activate
};
