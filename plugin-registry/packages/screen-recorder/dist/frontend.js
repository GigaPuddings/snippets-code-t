import * as Zn from "vue";
import { inject as Xe, ref as B, shallowRef as Co, computed as $, watch as We, onMounted as an, onUnmounted as Er, defineComponent as ce, h as Zs, createVNode as Z, Text as Eo, Fragment as Ne, getCurrentInstance as St, unref as E, readonly as So, getCurrentScope as Lo, onScopeDispose as ko, nextTick as st, isRef as To, warn as No, provide as Oo, createElementBlock as X, openBlock as j, mergeProps as Io, renderSlot as Lt, createElementVNode as k, normalizeClass as ie, Transition as Sr, withCtx as ot, withDirectives as it, normalizeStyle as kt, createTextVNode as Po, toDisplayString as te, vShow as En, shallowReactive as Ro, createBlock as xe, createCommentVNode as Ie, resolveDynamicComponent as Qs, withModifiers as Et, isVNode as Qt, render as Sn, renderList as Ao, vModelSelect as Qn } from "vue";
const zf = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Wf)
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Mo(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ts = typeof window < "u", ft = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Do = (e, t, n) => xo({ l: e, k: t, s: n }), xo = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), le = (e) => typeof e == "number" && isFinite(e), Fo = (e) => Lr(e) === "[object Date]", Ln = (e) => Lr(e) === "[object RegExp]", An = (e) => G(e) && Object.keys(e).length === 0, fe = Object.assign, $o = Object.create, q = (e = null) => $o(e);
let ns;
const _n = () => ns || (ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : q());
function rs(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ss(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Wo(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, a) => `${s}="${ss(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, a) => `${s}='${ss(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Uo = Object.prototype.hasOwnProperty;
function Ee(e, t) {
  return Uo.call(e, t);
}
const se = Array.isArray, ne = (e) => typeof e == "function", M = (e) => typeof e == "string", re = (e) => typeof e == "boolean", K = (e) => e !== null && typeof e == "object", zo = (e) => K(e) && ne(e.then) && ne(e.catch), ea = Object.prototype.toString, Lr = (e) => ea.call(e), G = (e) => Lr(e) === "[object Object]", jo = (e) => e == null ? "" : se(e) || G(e) && e.toString === ea ? JSON.stringify(e, null, 2) : String(e);
function kr(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const un = (e) => !K(e) || se(e);
function vn(e, t) {
  if (un(e) || un(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (K(r[a]) && !K(s[a]) && (s[a] = Array.isArray(r[a]) ? [] : q()), un(s[a]) || un(r[a]) ? s[a] = r[a] : n.push({ src: r[a], des: s[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ho(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ur(e, t, n) {
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
}, Bo = 17;
function Mn(e, t, n = {}) {
  const { domain: r, messages: s, args: a } = n, o = e, l = new SyntaxError(String(o));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function Vo(e) {
  throw e;
}
const ke = " ", Go = "\r", pe = `
`, Ko = "\u2028", Yo = "\u2029";
function Xo(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const o = (v) => t[v] === Go && t[v + 1] === pe, l = (v) => t[v] === pe, d = (v) => t[v] === Yo, p = (v) => t[v] === Ko, _ = (v) => o(v) || l(v) || d(v) || p(v), C = () => n, L = () => r, P = () => s, x = () => a, b = (v) => o(v) || d(v) || p(v) ? pe : t[v], N = () => b(n), f = () => b(n + a);
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
    peekOffset: x,
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
const De = void 0, qo = ".", as = "'", Jo = "tokenizer";
function Zo(e, t = {}) {
  const n = t.location !== !1, r = Xo(e), s = () => r.index(), a = () => Ho(r.line(), r.column(), r.index()), o = a(), l = s(), d = {
    currentType: 13,
    offset: l,
    startLoc: o,
    endLoc: o,
    lastType: 13,
    lastOffset: l,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, p = () => d, { onError: _ } = t;
  function C(i, u, w, ...A) {
    const J = p();
    if (u.column += w, u.offset += w, _) {
      const W = n ? ur(J.startLoc, u) : null, m = Mn(i, W, {
        domain: Jo,
        args: A
      });
      _(m);
    }
  }
  function L(i, u, w) {
    i.endLoc = a(), i.currentType = u;
    const A = { type: u };
    return n && (A.loc = ur(i.startLoc, i.endLoc)), w != null && (A.value = w), A;
  }
  const P = (i) => L(
    i,
    13
    /* TokenTypes.EOF */
  );
  function x(i, u) {
    return i.currentChar() === u ? (i.next(), u) : (C(Y.EXPECTED_TOKEN, a(), 0, u), "");
  }
  function b(i) {
    let u = "";
    for (; i.currentPeek() === ke || i.currentPeek() === pe; )
      u += i.currentPeek(), i.peek();
    return u;
  }
  function N(i) {
    const u = b(i);
    return i.skipToPeek(), u;
  }
  function f(i) {
    if (i === De)
      return !1;
    const u = i.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u === 95;
  }
  function S(i) {
    if (i === De)
      return !1;
    const u = i.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function y(i, u) {
    const { currentType: w } = u;
    if (w !== 2)
      return !1;
    b(i);
    const A = f(i.currentPeek());
    return i.resetPeek(), A;
  }
  function g(i, u) {
    const { currentType: w } = u;
    if (w !== 2)
      return !1;
    b(i);
    const A = i.currentPeek() === "-" ? i.peek() : i.currentPeek(), J = S(A);
    return i.resetPeek(), J;
  }
  function I(i, u) {
    const { currentType: w } = u;
    if (w !== 2)
      return !1;
    b(i);
    const A = i.currentPeek() === as;
    return i.resetPeek(), A;
  }
  function R(i, u) {
    const { currentType: w } = u;
    if (w !== 7)
      return !1;
    b(i);
    const A = i.currentPeek() === ".";
    return i.resetPeek(), A;
  }
  function v(i, u) {
    const { currentType: w } = u;
    if (w !== 8)
      return !1;
    b(i);
    const A = f(i.currentPeek());
    return i.resetPeek(), A;
  }
  function Q(i, u) {
    const { currentType: w } = u;
    if (!(w === 7 || w === 11))
      return !1;
    b(i);
    const A = i.currentPeek() === ":";
    return i.resetPeek(), A;
  }
  function D(i, u) {
    const { currentType: w } = u;
    if (w !== 9)
      return !1;
    const A = () => {
      const W = i.currentPeek();
      return W === "{" ? f(i.peek()) : W === "@" || W === "|" || W === ":" || W === "." || W === ke || !W ? !1 : W === pe ? (i.peek(), A()) : ae(i, !1);
    }, J = A();
    return i.resetPeek(), J;
  }
  function z(i) {
    b(i);
    const u = i.currentPeek() === "|";
    return i.resetPeek(), u;
  }
  function ae(i, u = !0) {
    const w = (J = !1, W = "") => {
      const m = i.currentPeek();
      return m === "{" || m === "@" || !m ? J : m === "|" ? !(W === ke || W === pe) : m === ke ? (i.peek(), w(!0, ke)) : m === pe ? (i.peek(), w(!0, pe)) : !0;
    }, A = w();
    return u && i.resetPeek(), A;
  }
  function H(i, u) {
    const w = i.currentChar();
    return w === De ? De : u(w) ? (i.next(), w) : null;
  }
  function Mt(i) {
    const u = i.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36;
  }
  function Dt(i) {
    return H(i, Mt);
  }
  function xt(i) {
    const u = i.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36 || // $
    u === 45;
  }
  function Ft(i) {
    return H(i, xt);
  }
  function $t(i) {
    const u = i.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function Wt(i) {
    return H(i, $t);
  }
  function we(i) {
    const u = i.charCodeAt(0);
    return u >= 48 && u <= 57 || // 0-9
    u >= 65 && u <= 70 || // A-F
    u >= 97 && u <= 102;
  }
  function Ze(i) {
    return H(i, we);
  }
  function mt(i) {
    let u = "", w = "";
    for (; u = Wt(i); )
      w += u;
    return w;
  }
  function Ut(i) {
    let u = "";
    for (; ; ) {
      const w = i.currentChar();
      if (w === "{" || w === "}" || w === "@" || w === "|" || !w)
        break;
      if (w === ke || w === pe)
        if (ae(i))
          u += w, i.next();
        else {
          if (z(i))
            break;
          u += w, i.next();
        }
      else
        u += w, i.next();
    }
    return u;
  }
  function gt(i) {
    N(i);
    let u = "", w = "";
    for (; u = Ft(i); )
      w += u;
    const A = i.currentChar();
    if (A && A !== "}" && A !== De && A !== ke && A !== pe && A !== "　") {
      const J = Qe(i);
      return C(Y.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, w + J), w + J;
    }
    return i.currentChar() === De && C(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), w;
  }
  function me(i) {
    N(i);
    let u = "";
    return i.currentChar() === "-" ? (i.next(), u += `-${mt(i)}`) : u += mt(i), i.currentChar() === De && C(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), u;
  }
  function ze(i) {
    return i !== as && i !== pe;
  }
  function je(i) {
    N(i), x(i, "'");
    let u = "", w = "";
    for (; u = H(i, ze); )
      u === "\\" ? w += zt(i) : w += u;
    const A = i.currentChar();
    return A === pe || A === De ? (C(Y.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), A === pe && (i.next(), x(i, "'")), w) : (x(i, "'"), w);
  }
  function zt(i) {
    const u = i.currentChar();
    switch (u) {
      case "\\":
      case "'":
        return i.next(), `\\${u}`;
      case "u":
        return _t(i, u, 4);
      case "U":
        return _t(i, u, 6);
      default:
        return C(Y.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, u), "";
    }
  }
  function _t(i, u, w) {
    x(i, u);
    let A = "";
    for (let J = 0; J < w; J++) {
      const W = Ze(i);
      if (!W) {
        C(Y.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${u}${A}${i.currentChar()}`);
        break;
      }
      A += W;
    }
    return `\\${u}${A}`;
  }
  function jt(i) {
    return i !== "{" && i !== "}" && i !== ke && i !== pe;
  }
  function Qe(i) {
    N(i);
    let u = "", w = "";
    for (; u = H(i, jt); )
      w += u;
    return w;
  }
  function vt(i) {
    let u = "", w = "";
    for (; u = Dt(i); )
      w += u;
    return w;
  }
  function yt(i) {
    const u = (w) => {
      const A = i.currentChar();
      return A === "{" || A === "@" || A === "|" || A === "(" || A === ")" || !A || A === ke ? w : (w += A, i.next(), u(w));
    };
    return u("");
  }
  function He(i) {
    N(i);
    const u = x(
      i,
      "|"
      /* TokenChars.Pipe */
    );
    return N(i), u;
  }
  function Re(i, u) {
    let w = null;
    switch (i.currentChar()) {
      case "{":
        return u.braceNest >= 1 && C(Y.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), i.next(), w = L(
          u,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), N(i), u.braceNest++, w;
      case "}":
        return u.braceNest > 0 && u.currentType === 2 && C(Y.EMPTY_PLACEHOLDER, a(), 0), i.next(), w = L(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), u.braceNest--, u.braceNest > 0 && N(i), u.inLinked && u.braceNest === 0 && (u.inLinked = !1), w;
      case "@":
        return u.braceNest > 0 && C(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), w = Le(i, u) || P(u), u.braceNest = 0, w;
      default: {
        let J = !0, W = !0, m = !0;
        if (z(i))
          return u.braceNest > 0 && C(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), w = L(u, 1, He(i)), u.braceNest = 0, u.inLinked = !1, w;
        if (u.braceNest > 0 && (u.currentType === 4 || u.currentType === 5 || u.currentType === 6))
          return C(Y.UNTERMINATED_CLOSING_BRACE, a(), 0), u.braceNest = 0, Ae(i, u);
        if (J = y(i, u))
          return w = L(u, 4, gt(i)), N(i), w;
        if (W = g(i, u))
          return w = L(u, 5, me(i)), N(i), w;
        if (m = I(i, u))
          return w = L(u, 6, je(i)), N(i), w;
        if (!J && !W && !m)
          return w = L(u, 12, Qe(i)), C(Y.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, w.value), N(i), w;
        break;
      }
    }
    return w;
  }
  function Le(i, u) {
    const { currentType: w } = u;
    let A = null;
    const J = i.currentChar();
    switch ((w === 7 || w === 8 || w === 11 || w === 9) && (J === pe || J === ke) && C(Y.INVALID_LINKED_FORMAT, a(), 0), J) {
      case "@":
        return i.next(), A = L(
          u,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), u.inLinked = !0, A;
      case ".":
        return N(i), i.next(), L(
          u,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return N(i), i.next(), L(
          u,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return z(i) ? (A = L(u, 1, He(i)), u.braceNest = 0, u.inLinked = !1, A) : R(i, u) || Q(i, u) ? (N(i), Le(i, u)) : v(i, u) ? (N(i), L(u, 11, vt(i))) : D(i, u) ? (N(i), J === "{" ? Re(i, u) || A : L(u, 10, yt(i))) : (w === 7 && C(Y.INVALID_LINKED_FORMAT, a(), 0), u.braceNest = 0, u.inLinked = !1, Ae(i, u));
    }
  }
  function Ae(i, u) {
    let w = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (u.braceNest > 0)
      return Re(i, u) || P(u);
    if (u.inLinked)
      return Le(i, u) || P(u);
    switch (i.currentChar()) {
      case "{":
        return Re(i, u) || P(u);
      case "}":
        return C(Y.UNBALANCED_CLOSING_BRACE, a(), 0), i.next(), L(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Le(i, u) || P(u);
      default: {
        if (z(i))
          return w = L(u, 1, He(i)), u.braceNest = 0, u.inLinked = !1, w;
        if (ae(i))
          return L(u, 0, Ut(i));
        break;
      }
    }
    return w;
  }
  function Ht() {
    const { currentType: i, offset: u, startLoc: w, endLoc: A } = d;
    return d.lastType = i, d.lastOffset = u, d.lastStartLoc = w, d.lastEndLoc = A, d.offset = s(), d.startLoc = a(), r.currentChar() === De ? L(
      d,
      13
      /* TokenTypes.EOF */
    ) : Ae(r, d);
  }
  return {
    nextToken: Ht,
    currentOffset: s,
    currentPosition: a,
    context: p
  };
}
const Qo = "parser", ei = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ti(e, t, n) {
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
function ni(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, S, y, g, ...I) {
    const R = f.currentPosition();
    if (R.offset += g, R.column += g, n) {
      const v = t ? ur(y, R) : null, Q = Mn(S, v, {
        domain: Qo,
        args: I
      });
      n(Q);
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
  function l(f, S) {
    const y = f.context(), { lastOffset: g, lastStartLoc: I } = y, R = s(5, g, I);
    return R.index = parseInt(S, 10), f.nextToken(), a(R, f.currentOffset(), f.currentPosition()), R;
  }
  function d(f, S) {
    const y = f.context(), { lastOffset: g, lastStartLoc: I } = y, R = s(4, g, I);
    return R.key = S, f.nextToken(), a(R, f.currentOffset(), f.currentPosition()), R;
  }
  function p(f, S) {
    const y = f.context(), { lastOffset: g, lastStartLoc: I } = y, R = s(9, g, I);
    return R.value = S.replace(ei, ti), f.nextToken(), a(R, f.currentOffset(), f.currentPosition()), R;
  }
  function _(f) {
    const S = f.nextToken(), y = f.context(), { lastOffset: g, lastStartLoc: I } = y, R = s(8, g, I);
    return S.type !== 11 ? (r(f, Y.UNEXPECTED_EMPTY_LINKED_MODIFIER, y.lastStartLoc, 0), R.value = "", a(R, g, I), {
      nextConsumeToken: S,
      node: R
    }) : (S.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Te(S)), R.value = S.value || "", a(R, f.currentOffset(), f.currentPosition()), {
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
    switch (g.type !== 9 && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Te(g)), g = f.nextToken(), g.type === 2 && (g = f.nextToken()), g.type) {
      case 10:
        g.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Te(g)), y.key = C(f, g.value || "");
        break;
      case 4:
        g.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Te(g)), y.key = d(f, g.value || "");
        break;
      case 5:
        g.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Te(g)), y.key = l(f, g.value || "");
        break;
      case 6:
        g.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Te(g)), y.key = p(f, g.value || "");
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
          D.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Te(D)), I.items.push(o(f, D.value || ""));
          break;
        case 5:
          D.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Te(D)), I.items.push(l(f, D.value || ""));
          break;
        case 4:
          D.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Te(D)), I.items.push(d(f, D.value || ""));
          break;
        case 6:
          D.value == null && r(f, Y.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, Te(D)), I.items.push(p(f, D.value || ""));
          break;
        case 7: {
          const z = L(f);
          I.items.push(z.node), R = z.nextConsumeToken || null;
          break;
        }
      }
    } while (S.currentType !== 13 && S.currentType !== 1);
    const v = S.currentType === 1 ? S.lastOffset : f.currentOffset(), Q = S.currentType === 1 ? S.lastEndLoc : f.currentPosition();
    return a(I, v, Q), I;
  }
  function x(f, S, y, g) {
    const I = f.context();
    let R = g.items.length === 0;
    const v = s(1, S, y);
    v.cases = [], v.cases.push(g);
    do {
      const Q = P(f);
      R || (R = Q.items.length === 0), v.cases.push(Q);
    } while (I.currentType !== 13);
    return R && r(f, Y.MUST_HAVE_MESSAGES_IN_PLURAL, y, 0), a(v, f.currentOffset(), f.currentPosition()), v;
  }
  function b(f) {
    const S = f.context(), { offset: y, startLoc: g } = S, I = P(f);
    return S.currentType === 13 ? I : x(f, y, g, I);
  }
  function N(f) {
    const S = Zo(f, fe({}, e)), y = S.context(), g = s(0, y.offset, y.startLoc);
    return t && g.loc && (g.loc.source = f), g.body = b(S), e.onCacheKey && (g.cacheKey = e.onCacheKey(f)), y.currentType !== 13 && r(S, Y.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, f[y.offset] || ""), a(g, S.currentOffset(), S.currentPosition()), g;
  }
  return { parse: N };
}
function Te(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ri(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function os(e, t) {
  for (let n = 0; n < e.length; n++)
    Tr(e[n], t);
}
function Tr(e, t) {
  switch (e.type) {
    case 1:
      os(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      os(e.items, t);
      break;
    case 6: {
      Tr(e.key, t), t.helper(
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
function si(e, t = {}) {
  const n = ri(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Tr(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function ai(e) {
  const t = e.body;
  return t.type === 2 ? is(t) : t.cases.forEach((n) => is(n)), e;
}
function is(e) {
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
      e.static = kr(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Ct(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Ct(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Ct(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Ct(n[r]);
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
      Ct(t.key), t.k = t.key, delete t.key, t.modifier && (Ct(t.modifier), t.m = t.modifier, delete t.modifier);
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
function oi(e, t) {
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
  const l = () => o;
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
    context: l,
    push: d,
    indent: _,
    deindent: C,
    newline: L,
    helper: (b) => `_${b}`,
    needIndent: () => o.needIndent
  };
}
function ii(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Tt(e, t.key), t.modifier ? (e.push(", "), Tt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function li(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let a = 0; a < s && (Tt(e, t.items[a]), a !== s - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function ci(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let a = 0; a < s && (Tt(e, t.cases[a]), a !== s - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function ui(e, t) {
  t.body ? Tt(e, t.body) : e.push("null");
}
function Tt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ui(e, t);
      break;
    case 1:
      ci(e, t);
      break;
    case 2:
      li(e, t);
      break;
    case 6:
      ii(e, t);
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
const di = (e, t = {}) => {
  const n = M(t.mode) ? t.mode : "normal", r = M(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], l = oi(e, {
    filename: r,
    breakLineCode: s,
    needIndent: a
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), o.length > 0 && (l.push(`const { ${kr(o.map((_) => `${_}: _${_}`), ", ")} } = ctx`), l.newline()), l.push("return "), Tt(l, e), l.deindent(a), l.push("}"), delete e.helpers;
  const { code: d, map: p } = l.context();
  return {
    ast: e,
    code: d,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function fi(e, t = {}) {
  const n = fe({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, l = ni(n).parse(e);
  return r ? (a && ai(l), s && Ct(l), { ast: l, code: "" }) : (si(l, n), di(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function hi() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (_n().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Pe(e) {
  return K(e) && Nr(e) === 0 && (Ee(e, "b") || Ee(e, "body"));
}
const ta = ["b", "body"];
function pi(e) {
  return qe(e, ta);
}
const na = ["c", "cases"];
function mi(e) {
  return qe(e, na, []);
}
const ra = ["s", "static"];
function gi(e) {
  return qe(e, ra);
}
const sa = ["i", "items"];
function _i(e) {
  return qe(e, sa, []);
}
const aa = ["t", "type"];
function Nr(e) {
  return qe(e, aa);
}
const oa = ["v", "value"];
function dn(e, t) {
  const n = qe(e, oa);
  if (n != null)
    return n;
  throw en(t);
}
const ia = ["m", "modifier"];
function vi(e) {
  return qe(e, ia);
}
const la = ["k", "key"];
function yi(e) {
  const t = qe(e, la);
  if (t)
    return t;
  throw en(
    6
    /* NodeTypes.Linked */
  );
}
function qe(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Ee(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const ca = [
  ...ta,
  ...na,
  ...ra,
  ...sa,
  ...la,
  ...ia,
  ...oa,
  ...aa
];
function en(e) {
  return new Error(`unhandled node type: ${e}`);
}
function er(e) {
  return (n) => wi(n, e);
}
function wi(e, t) {
  const n = pi(t);
  if (n == null)
    throw en(
      0
      /* NodeTypes.Resource */
    );
  if (Nr(n) === 1) {
    const a = mi(n);
    return e.plural(a.reduce((o, l) => [
      ...o,
      ls(e, l)
    ], []));
  } else
    return ls(e, n);
}
function ls(e, t) {
  const n = gi(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = _i(t).reduce((s, a) => [...s, dr(e, a)], []);
    return e.normalize(r);
  }
}
function dr(e, t) {
  const n = Nr(t);
  switch (n) {
    case 3:
      return dn(t, n);
    case 9:
      return dn(t, n);
    case 4: {
      const r = t;
      if (Ee(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Ee(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw en(n);
    }
    case 5: {
      const r = t;
      if (Ee(r, "i") && le(r.i))
        return e.interpolate(e.list(r.i));
      if (Ee(r, "index") && le(r.index))
        return e.interpolate(e.list(r.index));
      throw en(n);
    }
    case 6: {
      const r = t, s = vi(r), a = yi(r);
      return e.linked(dr(e, a), s ? dr(e, s) : void 0, e.type);
    }
    case 7:
      return dn(t, n);
    case 8:
      return dn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const bi = (e) => e;
let fn = q();
function Ci(e, t = {}) {
  let n = !1;
  const r = t.onError || Vo;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...fi(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Ei(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && M(e)) {
    re(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || bi)(e), s = fn[r];
    if (s)
      return s;
    const { ast: a, detectError: o } = Ci(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = er(a);
    return o ? l : fn[r] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = fn[n];
      return r || (fn[n] = er(e));
    } else
      return er(e);
  }
}
const Fe = {
  INVALID_ARGUMENT: Bo,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Si = 24;
function $e(e) {
  return Mn(e, null, void 0);
}
function Or(e, t) {
  return t.locale != null ? cs(t.locale) : cs(e.locale);
}
let tr;
function cs(e) {
  if (M(e))
    return e;
  if (ne(e)) {
    if (e.resolvedOnce && tr != null)
      return tr;
    if (e.constructor.name === "Function") {
      const t = e();
      if (zo(t))
        throw $e(Fe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return tr = t;
    } else
      throw $e(Fe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw $e(Fe.NOT_SUPPORT_LOCALE_TYPE);
}
function Li(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...se(t) ? t : K(t) ? Object.keys(t) : M(t) ? [t] : [n]
  ])];
}
function ua(e, t, n) {
  const r = M(n) ? n : kn, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let a = s.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let o = [n];
    for (; se(o); )
      o = us(a, o, t);
    const l = se(t) || !G(t) ? t : t.default ? t.default : null;
    o = M(l) ? [l] : l, se(o) && us(a, o, !1), s.__localeChainCache.set(r, a);
  }
  return a;
}
function us(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && re(r); s++) {
    const a = t[s];
    M(a) && (r = ki(e, t[s], n));
  }
  return r;
}
function ki(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = Ti(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function Ti(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (se(n) || G(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Je = [];
Je[
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
Je[
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
Je[
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
Je[
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
Je[
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
Je[
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
Je[
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
const Ni = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Oi(e) {
  return Ni.test(e);
}
function Ii(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Pi(e) {
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
function Ri(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Oi(t) ? Ii(t) : "*" + t;
}
function Ai(e) {
  const t = [];
  let n = -1, r = 0, s = 0, a, o, l, d, p, _, C;
  const L = [];
  L[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = l : o += l;
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
      if (s = 0, o === void 0 || (o = Ri(o), o === !1))
        return !1;
      L[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function P() {
    const x = e[n + 1];
    if (r === 5 && x === "'" || r === 6 && x === '"')
      return n++, l = "\\" + x, L[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && P())) {
      if (d = Pi(a), C = Je[r], p = C[d] || C.l || 8, p === 8 || (r = p[0], p[1] !== void 0 && (_ = L[p[1]], _ && (l = a, _() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const ds = /* @__PURE__ */ new Map();
function Mi(e, t) {
  return K(e) ? e[t] : null;
}
function Di(e, t) {
  if (!K(e))
    return null;
  let n = ds.get(t);
  if (n || (n = Ai(t), n && ds.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, a = 0;
  for (; a < r; ) {
    const o = n[a];
    if (ca.includes(o) && Pe(s))
      return null;
    const l = s[o];
    if (l === void 0 || ne(s))
      return null;
    s = l, a++;
  }
  return s;
}
const xi = "11.2.2", Dn = -1, kn = "en-US", fs = "", hs = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Fi() {
  return {
    upper: (e, t) => t === "text" && M(e) ? e.toUpperCase() : t === "vnode" && K(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && M(e) ? e.toLowerCase() : t === "vnode" && K(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && M(e) ? hs(e) : t === "vnode" && K(e) && "__v_isVNode" in e ? hs(e.children) : e
  };
}
let da;
function $i(e) {
  da = e;
}
let fa;
function Wi(e) {
  fa = e;
}
let ha;
function Ui(e) {
  ha = e;
}
let pa = null;
const ps = (e) => {
  pa = e;
}, zi = () => pa;
let ms = 0;
function ji(e = {}) {
  const t = ne(e.onWarn) ? e.onWarn : Mo, n = M(e.version) ? e.version : xi, r = M(e.locale) || ne(e.locale) ? e.locale : kn, s = ne(r) ? kn : r, a = se(e.fallbackLocale) || G(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = G(e.messages) ? e.messages : nr(s), l = G(e.datetimeFormats) ? e.datetimeFormats : nr(s), d = G(e.numberFormats) ? e.numberFormats : nr(s), p = fe(q(), e.modifiers, Fi()), _ = e.pluralRules || q(), C = ne(e.missing) ? e.missing : null, L = re(e.missingWarn) || Ln(e.missingWarn) ? e.missingWarn : !0, P = re(e.fallbackWarn) || Ln(e.fallbackWarn) ? e.fallbackWarn : !0, x = !!e.fallbackFormat, b = !!e.unresolving, N = ne(e.postTranslation) ? e.postTranslation : null, f = G(e.processor) ? e.processor : null, S = re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, g = ne(e.messageCompiler) ? e.messageCompiler : da, I = ne(e.messageResolver) ? e.messageResolver : fa || Mi, R = ne(e.localeFallbacker) ? e.localeFallbacker : ha || Li, v = K(e.fallbackContext) ? e.fallbackContext : void 0, Q = e, D = K(Q.__datetimeFormatters) ? Q.__datetimeFormatters : /* @__PURE__ */ new Map(), z = K(Q.__numberFormatters) ? Q.__numberFormatters : /* @__PURE__ */ new Map(), ae = K(Q.__meta) ? Q.__meta : {};
  ms++;
  const H = {
    version: n,
    cid: ms,
    locale: r,
    fallbackLocale: a,
    messages: o,
    modifiers: p,
    pluralRules: _,
    missing: C,
    missingWarn: L,
    fallbackWarn: P,
    fallbackFormat: x,
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
    __meta: ae
  };
  return H.datetimeFormats = l, H.numberFormats = d, H.__datetimeFormatters = D, H.__numberFormatters = z, H;
}
const nr = (e) => ({ [e]: q() });
function Ir(e, t, n, r, s) {
  const { missing: a, onWarn: o } = e;
  if (a !== null) {
    const l = a(e, n, t, s);
    return M(l) ? l : t;
  } else
    return t;
}
function Kt(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Hi(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Bi(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Hi(e, t[r]))
      return !0;
  return !1;
}
function gs(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: l } = e, [d, p, _, C] = fr(...t), L = re(_.missingWarn) ? _.missingWarn : e.missingWarn;
  re(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn;
  const P = !!_.part, x = Or(e, _), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    x
  );
  if (!M(d) || d === "")
    return new Intl.DateTimeFormat(x, C).format(p);
  let N = {}, f, S = null;
  const y = "datetime format";
  for (let R = 0; R < b.length && (f = b[R], N = n[f] || {}, S = N[d], !G(S)); R++)
    Ir(e, d, f, L, y);
  if (!G(S) || !M(f))
    return r ? Dn : d;
  let g = `${f}__${d}`;
  An(C) || (g = `${g}__${JSON.stringify(C)}`);
  let I = l.get(g);
  return I || (I = new Intl.DateTimeFormat(f, fe({}, S, C)), l.set(g, I)), P ? I.formatToParts(p) : I.format(p);
}
const ma = [
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
function fr(...e) {
  const [t, n, r, s] = e, a = q();
  let o = q(), l;
  if (M(t)) {
    const d = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!d)
      throw $e(Fe.INVALID_ISO_DATE_ARGUMENT);
    const p = d[3] ? d[3].trim().startsWith("T") ? `${d[1].trim()}${d[3].trim()}` : `${d[1].trim()}T${d[3].trim()}` : d[1].trim();
    l = new Date(p);
    try {
      l.toISOString();
    } catch {
      throw $e(Fe.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Fo(t)) {
    if (isNaN(t.getTime()))
      throw $e(Fe.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (le(t))
    l = t;
  else
    throw $e(Fe.INVALID_ARGUMENT);
  return M(n) ? a.key = n : G(n) && Object.keys(n).forEach((d) => {
    ma.includes(d) ? o[d] = n[d] : a[d] = n[d];
  }), M(r) ? a.locale = r : G(r) && (o = r), G(s) && (o = s), [a.key || "", l, a, o];
}
function _s(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function vs(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: l } = e, [d, p, _, C] = hr(...t), L = re(_.missingWarn) ? _.missingWarn : e.missingWarn;
  re(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn;
  const P = !!_.part, x = Or(e, _), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    x
  );
  if (!M(d) || d === "")
    return new Intl.NumberFormat(x, C).format(p);
  let N = {}, f, S = null;
  const y = "number format";
  for (let R = 0; R < b.length && (f = b[R], N = n[f] || {}, S = N[d], !G(S)); R++)
    Ir(e, d, f, L, y);
  if (!G(S) || !M(f))
    return r ? Dn : d;
  let g = `${f}__${d}`;
  An(C) || (g = `${g}__${JSON.stringify(C)}`);
  let I = l.get(g);
  return I || (I = new Intl.NumberFormat(f, fe({}, S, C)), l.set(g, I)), P ? I.formatToParts(p) : I.format(p);
}
const ga = [
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
function hr(...e) {
  const [t, n, r, s] = e, a = q();
  let o = q();
  if (!le(t))
    throw $e(Fe.INVALID_ARGUMENT);
  const l = t;
  return M(n) ? a.key = n : G(n) && Object.keys(n).forEach((d) => {
    ga.includes(d) ? o[d] = n[d] : a[d] = n[d];
  }), M(r) ? a.locale = r : G(r) && (o = r), G(s) && (o = s), [a.key || "", l, a, o];
}
function ys(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Vi = (e) => e, Gi = (e) => "", Ki = "text", Yi = (e) => e.length === 0 ? "" : kr(e), Xi = jo;
function ws(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function qi(e) {
  const t = le(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (le(e.named.count) || le(e.named.n)) ? le(e.named.count) ? e.named.count : le(e.named.n) ? e.named.n : t : t;
}
function Ji(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Zi(e = {}) {
  const t = e.locale, n = qi(e), r = K(e.pluralRules) && M(t) && ne(e.pluralRules[t]) ? e.pluralRules[t] : ws, s = K(e.pluralRules) && M(t) && ne(e.pluralRules[t]) ? ws : void 0, a = (f) => f[r(n, f.length, s)], o = e.list || [], l = (f) => o[f], d = e.named || q();
  le(e.pluralIndex) && Ji(n, d);
  const p = (f) => d[f];
  function _(f, S) {
    const y = ne(e.messages) ? e.messages(f, !!S) : K(e.messages) ? e.messages[f] : !1;
    return y || (e.parent ? e.parent.message(f) : Gi);
  }
  const C = (f) => e.modifiers ? e.modifiers[f] : Vi, L = G(e.processor) && ne(e.processor.normalize) ? e.processor.normalize : Yi, P = G(e.processor) && ne(e.processor.interpolate) ? e.processor.interpolate : Xi, x = G(e.processor) && M(e.processor.type) ? e.processor.type : Ki, N = {
    list: l,
    named: p,
    plural: a,
    linked: (f, ...S) => {
      const [y, g] = S;
      let I = "text", R = "";
      S.length === 1 ? K(y) ? (R = y.modifier || R, I = y.type || I) : M(y) && (R = y || R) : S.length === 2 && (M(y) && (R = y || R), M(g) && (I = g || I));
      const v = _(f, !0)(N), Q = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        I === "vnode" && se(v) && R ? v[0] : v
      );
      return R ? C(R)(Q, I) : Q;
    },
    message: _,
    type: x,
    interpolate: P,
    normalize: L,
    values: fe(q(), o, d)
  };
  return N;
}
const bs = () => "", Ue = (e) => ne(e);
function Cs(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: o, messages: l } = e, [d, p] = pr(...t), _ = re(p.missingWarn) ? p.missingWarn : e.missingWarn, C = re(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, L = re(p.escapeParameter) ? p.escapeParameter : e.escapeParameter, P = !!p.resolvedMessage, x = M(p.default) || re(p.default) ? re(p.default) ? a ? d : () => d : p.default : n ? a ? d : () => d : null, b = n || x != null && (M(x) || ne(x)), N = Or(e, p);
  L && Qi(p);
  let [f, S, y] = P ? [
    d,
    N,
    l[N] || q()
  ] : _a(e, d, N, o, C, _), g = f, I = d;
  if (!P && !(M(g) || Pe(g) || Ue(g)) && b && (g = x, I = g), !P && (!(M(g) || Pe(g) || Ue(g)) || !M(S)))
    return s ? Dn : d;
  let R = !1;
  const v = () => {
    R = !0;
  }, Q = Ue(g) ? g : va(e, d, S, g, I, v);
  if (R)
    return g;
  const D = nl(e, S, y, p), z = Zi(D), ae = el(e, Q, z);
  let H = r ? r(ae, d) : ae;
  return L && M(H) && (H = Wo(H)), H;
}
function Qi(e) {
  se(e.list) ? e.list = e.list.map((t) => M(t) ? rs(t) : t) : K(e.named) && Object.keys(e.named).forEach((t) => {
    M(e.named[t]) && (e.named[t] = rs(e.named[t]));
  });
}
function _a(e, t, n, r, s, a) {
  const { messages: o, onWarn: l, messageResolver: d, localeFallbacker: p } = e, _ = p(e, r, n);
  let C = q(), L, P = null;
  const x = "translate";
  for (let b = 0; b < _.length && (L = _[b], C = o[L] || q(), (P = d(C, t)) === null && (P = C[t]), !(M(P) || Pe(P) || Ue(P))); b++)
    if (!Bi(L, _)) {
      const N = Ir(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        L,
        a,
        x
      );
      N !== t && (P = N);
    }
  return [P, L, C];
}
function va(e, t, n, r, s, a) {
  const { messageCompiler: o, warnHtmlMessage: l } = e;
  if (Ue(r)) {
    const p = r;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (o == null) {
    const p = () => r;
    return p.locale = n, p.key = t, p;
  }
  const d = o(r, tl(e, n, s, r, l, a));
  return d.locale = n, d.key = t, d.source = r, d;
}
function el(e, t, n) {
  return t(n);
}
function pr(...e) {
  const [t, n, r] = e, s = q();
  if (!M(t) && !le(t) && !Ue(t) && !Pe(t))
    throw $e(Fe.INVALID_ARGUMENT);
  const a = le(t) ? String(t) : (Ue(t), t);
  return le(n) ? s.plural = n : M(n) ? s.default = n : G(n) && !An(n) ? s.named = n : se(n) && (s.list = n), le(r) ? s.plural = r : M(r) ? s.default = r : G(r) && fe(s, r), [a, s];
}
function tl(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw a && a(o), o;
    },
    onCacheKey: (o) => Do(t, n, o)
  };
}
function nl(e, t, n, r) {
  const { modifiers: s, pluralRules: a, messageResolver: o, fallbackLocale: l, fallbackWarn: d, missingWarn: p, fallbackContext: _ } = e, L = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (P, x) => {
      let b = o(n, P);
      if (b == null && (_ || x)) {
        const [, , N] = _a(
          _ || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          P,
          t,
          l,
          d,
          p
        );
        b = o(N, P);
      }
      if (M(b) || Pe(b)) {
        let N = !1;
        const S = va(e, P, t, b, P, () => {
          N = !0;
        });
        return N ? bs : S;
      } else return Ue(b) ? b : bs;
    }
  };
  return e.processor && (L.processor = e.processor), r.list && (L.list = r.list), r.named && (L.named = r.named), le(r.plural) && (L.pluralIndex = r.plural), L;
}
hi();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const rl = "11.2.2";
function sl() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (_n().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (_n().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (_n().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Nt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Si,
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
function tn(e, ...t) {
  return Mn(e, null, void 0);
}
const mr = /* @__PURE__ */ ft("__translateVNode"), gr = /* @__PURE__ */ ft("__datetimeParts"), _r = /* @__PURE__ */ ft("__numberParts"), al = ft("__setPluralRules"), ya = /* @__PURE__ */ ft("__injectWithOption"), vr = /* @__PURE__ */ ft("__dispose");
function nn(e) {
  if (!K(e) || Pe(e))
    return e;
  for (const t in e)
    if (Ee(e, t))
      if (!t.includes("."))
        K(e[t]) && nn(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, a = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__")
            throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in s || (s[n[o]] = q()), !K(s[n[o]])) {
            a = !0;
            break;
          }
          s = s[n[o]];
        }
        if (a || (Pe(s) ? ca.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !Pe(s)) {
          const o = s[n[r]];
          K(o) && nn(o);
        }
      }
  return e;
}
function wa(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: a } = t, o = G(n) ? n : se(r) ? q() : { [e]: q() };
  if (se(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: d, resource: p } = l;
      d ? (o[d] = o[d] || q(), vn(p, o[d])) : vn(p, o);
    } else
      M(l) && vn(JSON.parse(l), o);
  }), s == null && a)
    for (const l in o)
      Ee(o, l) && nn(o[l]);
  return o;
}
function ol(e) {
  return e.type;
}
function il(e, t, n) {
  let r = K(t.messages) ? t.messages : q();
  "__i18nGlobal" in n && (r = wa(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (K(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (K(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function Es(e) {
  return Z(Eo, null, e, 0);
}
function ba() {
  return "currentInstance" in Zn ? Zn["currentInstance"] : Zn.getCurrentInstance();
}
const Ss = () => [], ll = () => !1;
let Ls = 0;
function ks(e) {
  return (t, n, r, s) => e(n, r, ba() || void 0, s);
}
function cl(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, s = e.flatJson, a = ts ? B : Co;
  let o = re(e.inheritLocale) ? e.inheritLocale : !0;
  const l = a(
    // prettier-ignore
    t && o ? t.locale.value : M(e.locale) ? e.locale : kn
  ), d = a(
    // prettier-ignore
    t && o ? t.fallbackLocale.value : M(e.fallbackLocale) || se(e.fallbackLocale) || G(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), p = a(wa(l.value, e)), _ = a(G(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), C = a(G(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let L = t ? t.missingWarn : re(e.missingWarn) || Ln(e.missingWarn) ? e.missingWarn : !0, P = t ? t.fallbackWarn : re(e.fallbackWarn) || Ln(e.fallbackWarn) ? e.fallbackWarn : !0, x = t ? t.fallbackRoot : re(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, N = ne(e.missing) ? e.missing : null, f = ne(e.missing) ? ks(e.missing) : null, S = ne(e.postTranslation) ? e.postTranslation : null, y = t ? t.warnHtmlMessage : re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, g = !!e.escapeParameter;
  const I = t ? t.modifiers : G(e.modifiers) ? e.modifiers : {};
  let R = e.pluralRules || t && t.pluralRules, v;
  v = (() => {
    r && ps(null);
    const m = {
      version: rl,
      locale: l.value,
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
    m.datetimeFormats = _.value, m.numberFormats = C.value, m.__datetimeFormatters = G(v) ? v.__datetimeFormatters : void 0, m.__numberFormatters = G(v) ? v.__numberFormatters : void 0;
    const T = ji(m);
    return r && ps(T), T;
  })(), Kt(v, l.value, d.value);
  function D() {
    return [
      l.value,
      d.value,
      p.value,
      _.value,
      C.value
    ];
  }
  const z = $({
    get: () => l.value,
    set: (m) => {
      v.locale = m, l.value = m;
    }
  }), ae = $({
    get: () => d.value,
    set: (m) => {
      v.fallbackLocale = m, d.value = m, Kt(v, l.value, m);
    }
  }), H = $(() => p.value), Mt = /* @__PURE__ */ $(() => _.value), Dt = /* @__PURE__ */ $(() => C.value);
  function xt() {
    return ne(S) ? S : null;
  }
  function Ft(m) {
    S = m, v.postTranslation = m;
  }
  function $t() {
    return N;
  }
  function Wt(m) {
    m !== null && (f = ks(m)), N = m, v.missing = f;
  }
  const we = (m, T, V, ee, Me, ue) => {
    D();
    let Be;
    try {
      r || (v.fallbackContext = t ? zi() : void 0), Be = m(v);
    } finally {
      r || (v.fallbackContext = void 0);
    }
    if (V !== "translate exists" && // for not `te` (e.g `t`)
    le(Be) && Be === Dn || V === "translate exists" && !Be) {
      const [wt, zn] = T();
      return t && x ? ee(t) : Me(wt);
    } else {
      if (ue(Be))
        return Be;
      throw tn(Nt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ze(...m) {
    return we((T) => Reflect.apply(Cs, null, [T, ...m]), () => pr(...m), "translate", (T) => Reflect.apply(T.t, T, [...m]), (T) => T, (T) => M(T));
  }
  function mt(...m) {
    const [T, V, ee] = m;
    if (ee && !K(ee))
      throw tn(Nt.INVALID_ARGUMENT);
    return Ze(T, V, fe({ resolvedMessage: !0 }, ee || {}));
  }
  function Ut(...m) {
    return we((T) => Reflect.apply(gs, null, [T, ...m]), () => fr(...m), "datetime format", (T) => Reflect.apply(T.d, T, [...m]), () => fs, (T) => M(T) || se(T));
  }
  function gt(...m) {
    return we((T) => Reflect.apply(vs, null, [T, ...m]), () => hr(...m), "number format", (T) => Reflect.apply(T.n, T, [...m]), () => fs, (T) => M(T) || se(T));
  }
  function me(m) {
    return m.map((T) => M(T) || le(T) || re(T) ? Es(String(T)) : T);
  }
  const je = {
    normalize: me,
    interpolate: (m) => m,
    type: "vnode"
  };
  function zt(...m) {
    return we((T) => {
      let V;
      const ee = T;
      try {
        ee.processor = je, V = Reflect.apply(Cs, null, [ee, ...m]);
      } finally {
        ee.processor = null;
      }
      return V;
    }, () => pr(...m), "translate", (T) => T[mr](...m), (T) => [Es(T)], (T) => se(T));
  }
  function _t(...m) {
    return we((T) => Reflect.apply(vs, null, [T, ...m]), () => hr(...m), "number format", (T) => T[_r](...m), Ss, (T) => M(T) || se(T));
  }
  function jt(...m) {
    return we((T) => Reflect.apply(gs, null, [T, ...m]), () => fr(...m), "datetime format", (T) => T[gr](...m), Ss, (T) => M(T) || se(T));
  }
  function Qe(m) {
    R = m, v.pluralRules = R;
  }
  function vt(m, T) {
    return we(() => {
      if (!m)
        return !1;
      const V = M(T) ? T : l.value, ee = Re(V), Me = v.messageResolver(ee, m);
      return Pe(Me) || Ue(Me) || M(Me);
    }, () => [m], "translate exists", (V) => Reflect.apply(V.te, V, [m, T]), ll, (V) => re(V));
  }
  function yt(m) {
    let T = null;
    const V = ua(v, d.value, l.value);
    for (let ee = 0; ee < V.length; ee++) {
      const Me = p.value[V[ee]] || {}, ue = v.messageResolver(Me, m);
      if (ue != null) {
        T = ue;
        break;
      }
    }
    return T;
  }
  function He(m) {
    const T = yt(m);
    return T ?? (t ? t.tm(m) || {} : {});
  }
  function Re(m) {
    return p.value[m] || {};
  }
  function Le(m, T) {
    if (s) {
      const V = { [m]: T };
      for (const ee in V)
        Ee(V, ee) && nn(V[ee]);
      T = V[m];
    }
    p.value[m] = T, v.messages = p.value;
  }
  function Ae(m, T) {
    p.value[m] = p.value[m] || {};
    const V = { [m]: T };
    if (s)
      for (const ee in V)
        Ee(V, ee) && nn(V[ee]);
    T = V[m], vn(T, p.value[m]), v.messages = p.value;
  }
  function Ht(m) {
    return _.value[m] || {};
  }
  function i(m, T) {
    _.value[m] = T, v.datetimeFormats = _.value, _s(v, m, T);
  }
  function u(m, T) {
    _.value[m] = fe(_.value[m] || {}, T), v.datetimeFormats = _.value, _s(v, m, T);
  }
  function w(m) {
    return C.value[m] || {};
  }
  function A(m, T) {
    C.value[m] = T, v.numberFormats = C.value, ys(v, m, T);
  }
  function J(m, T) {
    C.value[m] = fe(C.value[m] || {}, T), v.numberFormats = C.value, ys(v, m, T);
  }
  Ls++, t && ts && (We(t.locale, (m) => {
    o && (l.value = m, v.locale = m, Kt(v, l.value, d.value));
  }), We(t.fallbackLocale, (m) => {
    o && (d.value = m, v.fallbackLocale = m, Kt(v, l.value, d.value));
  }));
  const W = {
    id: Ls,
    locale: z,
    fallbackLocale: ae,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(m) {
      o = m, m && t && (l.value = t.locale.value, d.value = t.fallbackLocale.value, Kt(v, l.value, d.value));
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
      return x;
    },
    set fallbackRoot(m) {
      x = m;
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
    t: Ze,
    getLocaleMessage: Re,
    setLocaleMessage: Le,
    mergeLocaleMessage: Ae,
    getPostTranslationHandler: xt,
    setPostTranslationHandler: Ft,
    getMissingHandler: $t,
    setMissingHandler: Wt,
    [al]: Qe
  };
  return W.datetimeFormats = Mt, W.numberFormats = Dt, W.rt = mt, W.te = vt, W.tm = He, W.d = Ut, W.n = gt, W.getDateTimeFormat = Ht, W.setDateTimeFormat = i, W.mergeDateTimeFormat = u, W.getNumberFormat = w, W.setNumberFormat = A, W.mergeNumberFormat = J, W[ya] = n, W[mr] = zt, W[gr] = jt, W[_r] = _t, W;
}
const Pr = {
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
function ul({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Ne ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, q());
}
function Ca() {
  return Ne;
}
fe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => le(e) || !isNaN(e)
  }
}, Pr);
function dl(e) {
  return se(e) && !M(e[0]);
}
function Ea(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const o = { part: !0 };
    let l = q();
    e.locale && (o.locale = e.locale), M(e.format) ? o.key = e.format : K(e.format) && (M(e.format.key) && (o.key = e.format.key), l = Object.keys(e.format).reduce((L, P) => n.includes(P) ? fe(q(), L, { [P]: e.format[P] }) : L, q()));
    const d = r(e.value, o, l);
    let p = [o.key];
    se(d) ? p = d.map((L, P) => {
      const x = s[L.type], b = x ? x({ [L.type]: L.value, index: P, parts: d }) : [L.value];
      return dl(b) && (b[0].key = `${L.type}-${P}`), b;
    }) : M(d) && (p = [d]);
    const _ = fe(q(), a), C = M(e.tag) || K(e.tag) ? e.tag : Ca();
    return Zs(C, _, p);
  };
}
fe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Pr);
const fl = /* @__PURE__ */ ft("global-vue-i18n");
function xn(e = {}) {
  const t = ba();
  if (t == null)
    throw tn(Nt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw tn(Nt.NOT_INSTALLED);
  const n = hl(t), r = ml(n), s = ol(t), a = pl(e, s);
  if (a === "global")
    return il(r, e, s), r;
  if (a === "parent") {
    let d = gl(n, t, e.__useComponent);
    return d == null && (d = r), d;
  }
  const o = n;
  let l = o.__getInstance(t);
  if (l == null) {
    const d = fe({}, e);
    "__i18n" in s && (d.__i18n = s.__i18n), r && (d.__root = r), l = cl(d), o.__composerExtend && (l[vr] = o.__composerExtend(l)), vl(o, t, l), o.__setInstance(t, l);
  }
  return l;
}
function hl(e) {
  const t = Xe(e.isCE ? fl : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw tn(e.isCE ? Nt.NOT_INSTALLED_WITH_PROVIDE : Nt.UNEXPECTED_ERROR);
  return t;
}
function pl(e, t) {
  return An(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function ml(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function gl(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = _l(t, n);
  for (; a != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = o.__getInstance(a);
      l != null && (r = l.__composer, n && r && !r[ya] && (r = null));
    }
    if (r != null || s === a)
      break;
    a = a.parent;
  }
  return r;
}
function _l(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function vl(e, t, n) {
  an(() => {
  }, t), Er(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[vr];
    s && (s(), delete r[vr]);
  }, t);
}
fe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Pr);
sl();
$i(Ei);
Wi(Di);
Ui(ua);
function yl(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function wl(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var yn;
const ye = "__TAURI_TO_IPC_KEY__";
function bl(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function O(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Cl {
  get rid() {
    return yl(this, yn, "f");
  }
  constructor(t) {
    yn.set(this, void 0), wl(this, yn, t);
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
yn = /* @__PURE__ */ new WeakMap();
class at {
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
    return new lt(this.width * t, this.height * t);
  }
  [ye]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ye]();
  }
}
class lt {
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
    return new at(this.width / t, this.height / t);
  }
  [ye]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ye]();
  }
}
class bt {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof at ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof lt ? this.size : this.size.toPhysical(t);
  }
  [ye]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[ye]();
  }
}
class Sa {
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
    return new Oe(this.x * t, this.y * t);
  }
  [ye]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ye]();
  }
}
class Oe {
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
    return new Sa(this.x / t, this.y / t);
  }
  [ye]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ye]();
  }
}
class hn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Sa ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Oe ? this.position : this.position.toPhysical(t);
  }
  [ye]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[ye]();
  }
}
var ge;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ge || (ge = {}));
async function La(e, t) {
  await O("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Tn(e, t, n) {
  var r;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return O("plugin:event|listen", {
    event: e,
    target: s,
    handler: bl(t)
  }).then((a) => async () => La(e, a));
}
async function El(e, t, n) {
  return Tn(e, (r) => {
    La(e, r.id), t(r);
  }, n);
}
async function Sl(e, t) {
  await O("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Ll(e, t, n) {
  await O("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Zt extends Cl {
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
      rgba: Nn(t),
      width: n,
      height: r
    }).then((s) => new Zt(s));
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
      bytes: Nn(t)
    }).then((n) => new Zt(n));
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
    return O("plugin:image|from_path", { path: t }).then((n) => new Zt(n));
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
function Nn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Zt ? e.rid : e;
}
var yr;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(yr || (yr = {}));
class kl {
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
var Ts;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ts || (Ts = {}));
function ka() {
  return new Ta(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function rr() {
  return O("plugin:window|get_all_windows").then((e) => e.map((t) => new Ta(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const sr = ["tauri://created", "tauri://error"];
class Ta {
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
    return (n = (await rr()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return ka();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return rr();
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
    for (const t of await rr())
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
    } : Tn(t, n, {
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
    } : El(t, n, {
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
    if (sr.includes(t)) {
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Sl(t, n);
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
    if (sr.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return Ll(t, n, r);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return sr.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new Oe(t));
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
    }).then((t) => new Oe(t));
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
    }).then((t) => new lt(t));
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
    }).then((t) => new lt(t));
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
    return t && (t === yr.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), O("plugin:window|request_user_attention", {
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
      value: t instanceof bt ? t : new bt(t)
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
      value: t instanceof bt ? t : t ? new bt(t) : null
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
      value: t instanceof bt ? t : t ? new bt(t) : null
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
      value: t instanceof hn ? t : new hn(t)
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
      value: Nn(t)
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
      value: t instanceof hn ? t : new hn(t)
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
      value: t ? Nn(t) : void 0
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
    return this.listen(ge.WINDOW_RESIZED, (n) => {
      n.payload = new lt(n.payload), t(n);
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
    return this.listen(ge.WINDOW_MOVED, (n) => {
      n.payload = new Oe(n.payload), t(n);
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
    return this.listen(ge.WINDOW_CLOSE_REQUESTED, async (n) => {
      const r = new kl(n);
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
    const n = await this.listen(ge.DRAG_ENTER, (o) => {
      t({
        ...o,
        payload: {
          type: "enter",
          paths: o.payload.paths,
          position: new Oe(o.payload.position)
        }
      });
    }), r = await this.listen(ge.DRAG_OVER, (o) => {
      t({
        ...o,
        payload: {
          type: "over",
          position: new Oe(o.payload.position)
        }
      });
    }), s = await this.listen(ge.DRAG_DROP, (o) => {
      t({
        ...o,
        payload: {
          type: "drop",
          paths: o.payload.paths,
          position: new Oe(o.payload.position)
        }
      });
    }), a = await this.listen(ge.DRAG_LEAVE, (o) => {
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
    const n = await this.listen(ge.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), r = await this.listen(ge.WINDOW_BLUR, (s) => {
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
    return this.listen(ge.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(ge.WINDOW_THEME_CHANGED, t);
  }
}
var Ns;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Ns || (Ns = {}));
var Os;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Os || (Os = {}));
var Is;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Is || (Is = {}));
function Tl(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Oe(e.position),
    size: new lt(e.size)
  };
}
async function ar(e, t) {
  return O("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Tl);
}
var Nl = {
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
function Ol() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Il(e, t, n) {
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
var Pl = Symbol("icon-context");
function Fn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var o = Ol(), l = Xe(Pl, Nl);
      return function() {
        var d = a.size, p = a.strokeWidth, _ = a.strokeLinecap, C = a.strokeLinejoin, L = a.theme, P = a.fill, x = a.spin, b = Il(o, {
          size: d,
          strokeWidth: p,
          strokeLinecap: _,
          strokeLinejoin: C,
          theme: L,
          fill: P
        }, l), N = [l.prefix + "-icon"];
        return N.push(l.prefix + "-icon-" + e), t && l.rtl && N.push(l.prefix + "-icon-rtl"), x && N.push(l.prefix + "-icon-spin"), Z("span", {
          class: N.join(" ")
        }, [n(b)]);
      };
    }
  };
  return r;
}
const Rl = Fn("close-small", !1, function(e) {
  return Z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Z("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Al = Fn("minus", !1, function(e) {
  return Z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ml = Fn("mouse", !0, function(e) {
  return Z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Z("path", {
    d: "M36 16C36 9.37258 30.6274 4 24 4V16H36Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Z("path", {
    d: "M24 4C17.3726 4 12 9.37258 12 16H24V4Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Dl = Fn("radar", !1, function(e) {
  return Z("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Z("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Z("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), Z("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), Z("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Na = Symbol(), wn = "el", xl = "is-", nt = (e, t, n, r, s) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), s && (a += `--${s}`), a;
}, Oa = Symbol("namespaceContextKey"), Fl = (e) => {
  const t = e || (St() ? Xe(Oa, B(wn)) : B(wn));
  return $(() => E(t) || wn);
}, Rr = (e, t) => {
  const n = Fl(t);
  return {
    namespace: n,
    b: (b = "") => nt(n.value, e, b, "", ""),
    e: (b) => b ? nt(n.value, e, "", b, "") : "",
    m: (b) => b ? nt(n.value, e, "", "", b) : "",
    be: (b, N) => b && N ? nt(n.value, e, b, N, "") : "",
    em: (b, N) => b && N ? nt(n.value, e, "", b, N) : "",
    bm: (b, N) => b && N ? nt(n.value, e, b, "", N) : "",
    bem: (b, N, f) => b && N && f ? nt(n.value, e, b, N, f) : "",
    is: (b, ...N) => {
      const f = N.length >= 1 ? N[0] : !0;
      return b && f ? `${xl}${b}` : "";
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
const $l = Object.prototype.hasOwnProperty, Ps = (e, t) => $l.call(e, t), rn = (e) => typeof e == "function", ct = (e) => typeof e == "string", Ia = (e) => e !== null && typeof e == "object";
var Wl = typeof global == "object" && global && global.Object === Object && global, Ul = typeof self == "object" && self && self.Object === Object && self, Ar = Wl || Ul || Function("return this")(), Ot = Ar.Symbol, Pa = Object.prototype, zl = Pa.hasOwnProperty, jl = Pa.toString, Yt = Ot ? Ot.toStringTag : void 0;
function Hl(e) {
  var t = zl.call(e, Yt), n = e[Yt];
  try {
    e[Yt] = void 0;
    var r = !0;
  } catch {
  }
  var s = jl.call(e);
  return r && (t ? e[Yt] = n : delete e[Yt]), s;
}
var Bl = Object.prototype, Vl = Bl.toString;
function Gl(e) {
  return Vl.call(e);
}
var Kl = "[object Null]", Yl = "[object Undefined]", Rs = Ot ? Ot.toStringTag : void 0;
function Ra(e) {
  return e == null ? e === void 0 ? Yl : Kl : Rs && Rs in Object(e) ? Hl(e) : Gl(e);
}
function Xl(e) {
  return e != null && typeof e == "object";
}
var ql = "[object Symbol]";
function Mr(e) {
  return typeof e == "symbol" || Xl(e) && Ra(e) == ql;
}
function Jl(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var Dr = Array.isArray, As = Ot ? Ot.prototype : void 0, Ms = As ? As.toString : void 0;
function Aa(e) {
  if (typeof e == "string")
    return e;
  if (Dr(e))
    return Jl(e, Aa) + "";
  if (Mr(e))
    return Ms ? Ms.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ma(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zl = "[object AsyncFunction]", Ql = "[object Function]", ec = "[object GeneratorFunction]", tc = "[object Proxy]";
function nc(e) {
  if (!Ma(e))
    return !1;
  var t = Ra(e);
  return t == Ql || t == ec || t == Zl || t == tc;
}
var or = Ar["__core-js_shared__"], Ds = function() {
  var e = /[^.]+$/.exec(or && or.keys && or.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function rc(e) {
  return !!Ds && Ds in e;
}
var sc = Function.prototype, ac = sc.toString;
function oc(e) {
  if (e != null) {
    try {
      return ac.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ic = /[\\^$.*+?()[\]{}|]/g, lc = /^\[object .+?Constructor\]$/, cc = Function.prototype, uc = Object.prototype, dc = cc.toString, fc = uc.hasOwnProperty, hc = RegExp(
  "^" + dc.call(fc).replace(ic, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pc(e) {
  if (!Ma(e) || rc(e))
    return !1;
  var t = nc(e) ? hc : lc;
  return t.test(oc(e));
}
function mc(e, t) {
  return e?.[t];
}
function Da(e, t) {
  var n = mc(e, t);
  return pc(n) ? n : void 0;
}
function gc(e, t) {
  return e === t || e !== e && t !== t;
}
var _c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vc = /^\w*$/;
function yc(e, t) {
  if (Dr(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Mr(e) ? !0 : vc.test(e) || !_c.test(e) || t != null && e in Object(t);
}
var sn = Da(Object, "create");
function wc() {
  this.__data__ = sn ? sn(null) : {}, this.size = 0;
}
function bc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Cc = "__lodash_hash_undefined__", Ec = Object.prototype, Sc = Ec.hasOwnProperty;
function Lc(e) {
  var t = this.__data__;
  if (sn) {
    var n = t[e];
    return n === Cc ? void 0 : n;
  }
  return Sc.call(t, e) ? t[e] : void 0;
}
var kc = Object.prototype, Tc = kc.hasOwnProperty;
function Nc(e) {
  var t = this.__data__;
  return sn ? t[e] !== void 0 : Tc.call(t, e);
}
var Oc = "__lodash_hash_undefined__";
function Ic(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = sn && t === void 0 ? Oc : t, this;
}
function ut(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ut.prototype.clear = wc;
ut.prototype.delete = bc;
ut.prototype.get = Lc;
ut.prototype.has = Nc;
ut.prototype.set = Ic;
function Pc() {
  this.__data__ = [], this.size = 0;
}
function $n(e, t) {
  for (var n = e.length; n--; )
    if (gc(e[n][0], t))
      return n;
  return -1;
}
var Rc = Array.prototype, Ac = Rc.splice;
function Mc(e) {
  var t = this.__data__, n = $n(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Ac.call(t, n, 1), --this.size, !0;
}
function Dc(e) {
  var t = this.__data__, n = $n(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function xc(e) {
  return $n(this.__data__, e) > -1;
}
function Fc(e, t) {
  var n = this.__data__, r = $n(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Rt.prototype.clear = Pc;
Rt.prototype.delete = Mc;
Rt.prototype.get = Dc;
Rt.prototype.has = xc;
Rt.prototype.set = Fc;
var $c = Da(Ar, "Map");
function Wc() {
  this.size = 0, this.__data__ = {
    hash: new ut(),
    map: new ($c || Rt)(),
    string: new ut()
  };
}
function Uc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Wn(e, t) {
  var n = e.__data__;
  return Uc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function zc(e) {
  var t = Wn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function jc(e) {
  return Wn(this, e).get(e);
}
function Hc(e) {
  return Wn(this, e).has(e);
}
function Bc(e, t) {
  var n = Wn(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ht(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ht.prototype.clear = Wc;
ht.prototype.delete = zc;
ht.prototype.get = jc;
ht.prototype.has = Hc;
ht.prototype.set = Bc;
var Vc = "Expected a function";
function xr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Vc);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var o = e.apply(this, r);
    return n.cache = a.set(s, o) || a, o;
  };
  return n.cache = new (xr.Cache || ht)(), n;
}
xr.Cache = ht;
var Gc = 500;
function Kc(e) {
  var t = xr(e, function(r) {
    return n.size === Gc && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Yc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xc = /\\(\\)?/g, qc = Kc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Yc, function(n, r, s, a) {
    t.push(s ? a.replace(Xc, "$1") : r || n);
  }), t;
});
function Jc(e) {
  return e == null ? "" : Aa(e);
}
function Zc(e, t) {
  return Dr(e) ? e : yc(e, t) ? [e] : qc(Jc(e));
}
function Qc(e) {
  if (typeof e == "string" || Mr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function eu(e, t) {
  t = Zc(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Qc(t[n++])];
  return n && n == r ? e : void 0;
}
function tu(e, t, n) {
  var r = e == null ? void 0 : eu(e, t);
  return r === void 0 ? n : r;
}
function nu(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
const xa = (e) => e === void 0, xs = (e) => typeof e == "boolean", dt = (e) => typeof e == "number", wr = (e) => typeof Element > "u" ? !1 : e instanceof Element, ru = (e) => ct(e) ? !Number.isNaN(Number(e)) : !1;
var Fs;
const pt = typeof window < "u", su = (e) => typeof e == "string", au = () => {
};
pt && ((Fs = window?.navigator) != null && Fs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Fr(e) {
  return typeof e == "function" ? e() : E(e);
}
function ou(e) {
  return e;
}
function $r(e) {
  return Lo() ? (ko(e), !0) : !1;
}
function iu(e, t = !0) {
  St() ? an(e) : t ? e() : st(e);
}
function Fa(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, s = B(!1);
  let a = null;
  function o() {
    a && (clearTimeout(a), a = null);
  }
  function l() {
    s.value = !1, o();
  }
  function d(...p) {
    o(), s.value = !0, a = setTimeout(() => {
      s.value = !1, a = null, e(...p);
    }, Fr(t));
  }
  return r && (s.value = !0, pt && d()), $r(l), {
    isPending: So(s),
    start: d,
    stop: l
  };
}
function $a(e) {
  var t;
  const n = Fr(e);
  return (t = n?.$el) != null ? t : n;
}
const Wa = pt ? window : void 0;
function Ua(...e) {
  let t, n, r, s;
  if (su(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = Wa) : [t, n, r, s] = e, !t)
    return au;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], o = () => {
    a.forEach((_) => _()), a.length = 0;
  }, l = (_, C, L, P) => (_.addEventListener(C, L, P), () => _.removeEventListener(C, L, P)), d = We(() => [$a(t), Fr(s)], ([_, C]) => {
    o(), _ && a.push(...n.flatMap((L) => r.map((P) => l(_, L, P, C))));
  }, { immediate: !0, flush: "post" }), p = () => {
    d(), o();
  };
  return $r(p), p;
}
function lu(e, t = !1) {
  const n = B(), r = () => n.value = !!e();
  return r(), iu(r, t), n;
}
const $s = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ws = "__vueuse_ssr_handlers__";
$s[Ws] = $s[Ws] || {};
var Us = Object.getOwnPropertySymbols, cu = Object.prototype.hasOwnProperty, uu = Object.prototype.propertyIsEnumerable, du = (e, t) => {
  var n = {};
  for (var r in e)
    cu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Us)
    for (var r of Us(e))
      t.indexOf(r) < 0 && uu.call(e, r) && (n[r] = e[r]);
  return n;
};
function fu(e, t, n = {}) {
  const r = n, { window: s = Wa } = r, a = du(r, ["window"]);
  let o;
  const l = lu(() => s && "ResizeObserver" in s), d = () => {
    o && (o.disconnect(), o = void 0);
  }, p = We(() => $a(e), (C) => {
    d(), l.value && s && C && (o = new ResizeObserver(t), o.observe(C, a));
  }, { immediate: !0, flush: "post" }), _ = () => {
    d(), p();
  };
  return $r(_), {
    isSupported: l,
    stop: _
  };
}
var zs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(zs || (zs = {}));
var hu = Object.defineProperty, js = Object.getOwnPropertySymbols, pu = Object.prototype.hasOwnProperty, mu = Object.prototype.propertyIsEnumerable, Hs = (e, t, n) => t in e ? hu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, gu = (e, t) => {
  for (var n in t || (t = {}))
    pu.call(t, n) && Hs(e, n, t[n]);
  if (js)
    for (var n of js(t))
      mu.call(t, n) && Hs(e, n, t[n]);
  return e;
};
const _u = {
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
gu({
  linear: ou
}, _u);
const Bs = {
  current: 0
}, Vs = B(0), za = 2e3, Gs = Symbol("elZIndexContextKey"), ja = Symbol("zIndexContextKey"), vu = (e) => {
  const t = St() ? Xe(Gs, Bs) : Bs, n = e || (St() ? Xe(ja, void 0) : void 0), r = $(() => {
    const o = E(n);
    return dt(o) ? o : za;
  }), s = $(() => r.value + Vs.value), a = () => (t.current++, Vs.value = t.current, s.value);
  return !pt && Xe(Gs), {
    initialZIndex: r,
    currentZIndex: s,
    nextZIndex: a
  };
};
var yu = {
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
const wu = (e) => (t, n) => bu(t, n, E(e)), bu = (e, t, n) => tu(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
  var a;
  return `${(a = t?.[s]) != null ? a : `{${s}}`}`;
}), Cu = (e) => {
  const t = $(() => E(e).name), n = To(e) ? e : B(e);
  return {
    lang: t,
    locale: n,
    t: wu(e)
  };
}, Ha = Symbol("localeContextKey"), Eu = (e) => {
  const t = e || Xe(Ha, B());
  return Cu($(() => t.value || yu));
}, Ba = "__epPropKey", _e = (e) => e, Su = (e) => Ia(e) && !!e[Ba], Va = (e, t) => {
  if (!Ia(e) || Su(e))
    return e;
  const { values: n, required: r, default: s, type: a, validator: o } = e, d = {
    type: a,
    required: !!r,
    validator: n || o ? (p) => {
      let _ = !1, C = [];
      if (n && (C = Array.from(n), Ps(e, "default") && C.push(s), _ || (_ = C.includes(p))), o && (_ || (_ = o(p))), !_ && C.length > 0) {
        const L = [...new Set(C)].map((P) => JSON.stringify(P)).join(", ");
        No(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${L}], got value ${JSON.stringify(p)}.`);
      }
      return _;
    } : void 0,
    [Ba]: !0
  };
  return Ps(e, "default") && (d.default = s), d;
}, At = (e) => nu(Object.entries(e).map(([t, n]) => [
  t,
  Va(n, t)
])), Lu = ["", "default", "small", "large"], ku = Va({
  type: String,
  values: Lu,
  required: !1
}), Tu = Symbol("size"), Nu = Symbol("emptyValuesContextKey"), Ou = At({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => rn(e) ? !e() : !e
  }
}), Ks = (e) => Object.keys(e), On = B();
function Ga(e, t = void 0) {
  return St() ? Xe(Na, On) : On;
}
function Ka(e, t) {
  const n = Ga(), r = Rr(e, $(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || wn;
  })), s = Eu($(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), a = vu($(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || za;
  })), o = $(() => {
    var l;
    return E(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return Ya($(() => E(n) || {})), {
    ns: r,
    locale: s,
    zIndex: a,
    size: o
  };
}
const Ya = (e, t, n = !1) => {
  var r;
  const s = !!St(), a = s ? Ga() : void 0, o = (r = void 0) != null ? r : s ? Oo : void 0;
  if (!o)
    return;
  const l = $(() => {
    const d = E(e);
    return a?.value ? Iu(a.value, d) : d;
  });
  return o(Na, l), o(Ha, $(() => l.value.locale)), o(Oa, $(() => l.value.namespace)), o(ja, $(() => l.value.zIndex)), o(Tu, {
    size: $(() => l.value.size || "")
  }), o(Nu, $(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !On.value) && (On.value = l.value), l;
}, Iu = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ks(e), ...Ks(t)])], r = {};
  for (const s of n)
    r[s] = t[s] !== void 0 ? t[s] : e[s];
  return r;
};
var Un = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
function br(e, t = "px") {
  if (!e)
    return "";
  if (dt(e) || ru(e))
    return `${e}${t}`;
  if (ct(e))
    return e;
}
const Xa = (e, t) => (e.install = (n) => {
  for (const r of [e, ...Object.values({})])
    n.component(r.name, r);
}, e), qa = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Pu = At({
  size: {
    type: _e([Number, String])
  },
  color: {
    type: String
  }
}), Ru = ce({
  name: "ElIcon",
  inheritAttrs: !1
}), Au = /* @__PURE__ */ ce({
  ...Ru,
  props: Pu,
  setup(e) {
    const t = e, n = Rr("icon"), r = $(() => {
      const { size: s, color: a } = t;
      return !s && !a ? {} : {
        fontSize: xa(s) ? void 0 : br(s),
        "--color": a
      };
    });
    return (s, a) => (j(), X("i", Io({
      class: E(n).b(),
      style: E(r)
    }, s.$attrs), [
      Lt(s.$slots, "default")
    ], 16));
  }
});
var Mu = /* @__PURE__ */ Un(Au, [["__file", "icon.vue"]]);
const In = Xa(Mu);
/*! Element Plus Icons Vue v2.3.1 */
var Du = /* @__PURE__ */ ce({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), xu = Du, Fu = /* @__PURE__ */ ce({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ja = Fu, $u = /* @__PURE__ */ ce({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Wu = $u, Uu = /* @__PURE__ */ ce({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), zu = Uu, ju = /* @__PURE__ */ ce({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (j(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Hu = ju;
const Za = _e([
  String,
  Object,
  Function
]), Bu = {
  Close: Ja
}, Vu = {
  Close: Ja
}, Pn = {
  success: zu,
  warning: Hu,
  error: xu,
  info: Wu
}, Gu = (e) => e, bn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ku = At({
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
    type: _e([String, Object, Array])
  },
  offset: {
    type: _e(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Yu = ce({
  name: "ElBadge"
}), Xu = /* @__PURE__ */ ce({
  ...Yu,
  props: Ku,
  setup(e, { expose: t }) {
    const n = e, r = Rr("badge"), s = $(() => n.isDot ? "" : dt(n.value) && dt(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = $(() => {
      var o, l, d, p, _;
      return [
        {
          backgroundColor: n.color,
          marginRight: br(-((l = (o = n.offset) == null ? void 0 : o[0]) != null ? l : 0)),
          marginTop: br((p = (d = n.offset) == null ? void 0 : d[1]) != null ? p : 0)
        },
        (_ = n.badgeStyle) != null ? _ : {}
      ];
    });
    return t({
      content: s
    }), (o, l) => (j(), X("div", {
      class: ie(E(r).b())
    }, [
      Lt(o.$slots, "default"),
      Z(Sr, {
        name: `${E(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ot(() => [
          it(k("sup", {
            class: ie([
              E(r).e("content"),
              E(r).em("content", o.type),
              E(r).is("fixed", !!o.$slots.default),
              E(r).is("dot", o.isDot),
              E(r).is("hide-zero", !o.showZero && n.value === 0),
              o.badgeClass
            ]),
            style: kt(E(a))
          }, [
            Lt(o.$slots, "content", { value: E(s) }, () => [
              Po(te(E(s)), 1)
            ])
          ], 6), [
            [En, !o.hidden && (E(s) || o.isDot || o.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var qu = /* @__PURE__ */ Un(Xu, [["__file", "badge.vue"]]);
const Ju = Xa(qu), Zu = At({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: _e(Object)
  },
  size: ku,
  button: {
    type: _e(Object)
  },
  experimentalFeatures: {
    type: _e(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: _e(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Ou
}), Ce = {};
ce({
  name: "ElConfigProvider",
  props: Zu,
  setup(e, { slots: t }) {
    We(() => e.message, (r) => {
      Object.assign(Ce, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Ya(e);
    return () => Lt(t, "default", { config: n?.value });
  }
});
const Qa = ["success", "info", "warning", "error"], he = Gu({
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
  appendTo: pt ? document.body : void 0
}), Qu = At({
  customClass: {
    type: String,
    default: he.customClass
  },
  center: {
    type: Boolean,
    default: he.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: he.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: he.duration
  },
  icon: {
    type: Za,
    default: he.icon
  },
  id: {
    type: String,
    default: he.id
  },
  message: {
    type: _e([
      String,
      Object,
      Function
    ]),
    default: he.message
  },
  onClose: {
    type: _e(Function),
    default: he.onClose
  },
  showClose: {
    type: Boolean,
    default: he.showClose
  },
  type: {
    type: String,
    values: Qa,
    default: he.type
  },
  plain: {
    type: Boolean,
    default: he.plain
  },
  offset: {
    type: Number,
    default: he.offset
  },
  zIndex: {
    type: Number,
    default: he.zIndex
  },
  grouping: {
    type: Boolean,
    default: he.grouping
  },
  repeatNum: {
    type: Number,
    default: he.repeatNum
  }
}), ed = {
  destroy: () => !0
}, Se = Ro([]), td = (e) => {
  const t = Se.findIndex((s) => s.id === e), n = Se[t];
  let r;
  return t > 0 && (r = Se[t - 1]), { current: n, prev: r };
}, nd = (e) => {
  const { prev: t } = td(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, rd = (e, t) => Se.findIndex((r) => r.id === e) > 0 ? 16 : t, sd = ce({
  name: "ElMessage"
}), ad = /* @__PURE__ */ ce({
  ...sd,
  props: Qu,
  emits: ed,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Vu, { ns: s, zIndex: a } = Ka("message"), { currentZIndex: o, nextZIndex: l } = a, d = B(), p = B(!1), _ = B(0);
    let C;
    const L = $(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = $(() => {
      const v = n.type;
      return { [s.bm("icon", v)]: v && Pn[v] };
    }), x = $(() => n.icon || Pn[n.type] || ""), b = $(() => nd(n.id)), N = $(() => rd(n.id, n.offset) + b.value), f = $(() => _.value + N.value), S = $(() => ({
      top: `${N.value}px`,
      zIndex: o.value
    }));
    function y() {
      n.duration !== 0 && ({ stop: C } = Fa(() => {
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
      v === bn.esc && I();
    }
    return an(() => {
      y(), l(), p.value = !0;
    }), We(() => n.repeatNum, () => {
      g(), y();
    }), Ua(document, "keydown", R), fu(d, () => {
      _.value = d.value.getBoundingClientRect().height;
    }), t({
      visible: p,
      bottom: f,
      close: I
    }), (v, Q) => (j(), xe(Sr, {
      name: E(s).b("fade"),
      onBeforeLeave: v.onClose,
      onAfterLeave: (D) => v.$emit("destroy"),
      persisted: ""
    }, {
      default: ot(() => [
        it(k("div", {
          id: v.id,
          ref_key: "messageRef",
          ref: d,
          class: ie([
            E(s).b(),
            { [E(s).m(v.type)]: v.type },
            E(s).is("center", v.center),
            E(s).is("closable", v.showClose),
            E(s).is("plain", v.plain),
            v.customClass
          ]),
          style: kt(E(S)),
          role: "alert",
          onMouseenter: g,
          onMouseleave: y
        }, [
          v.repeatNum > 1 ? (j(), xe(E(Ju), {
            key: 0,
            value: v.repeatNum,
            type: E(L),
            class: ie(E(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Ie("v-if", !0),
          E(x) ? (j(), xe(E(In), {
            key: 1,
            class: ie([E(s).e("icon"), E(P)])
          }, {
            default: ot(() => [
              (j(), xe(Qs(E(x))))
            ]),
            _: 1
          }, 8, ["class"])) : Ie("v-if", !0),
          Lt(v.$slots, "default", {}, () => [
            v.dangerouslyUseHTMLString ? (j(), X(Ne, { key: 1 }, [
              Ie(" Caution here, message could've been compromised, never use user's input as message "),
              k("p", {
                class: ie(E(s).e("content")),
                innerHTML: v.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (j(), X("p", {
              key: 0,
              class: ie(E(s).e("content"))
            }, te(v.message), 3))
          ]),
          v.showClose ? (j(), xe(E(In), {
            key: 2,
            class: ie(E(s).e("closeBtn")),
            onClick: Et(I, ["stop"])
          }, {
            default: ot(() => [
              Z(E(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Ie("v-if", !0)
        ], 46, ["id"]), [
          [En, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var od = /* @__PURE__ */ Un(ad, [["__file", "message.vue"]]);
let id = 1;
const eo = (e) => {
  const t = !e || ct(e) || Qt(e) || rn(e) ? { message: e } : e, n = {
    ...he,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ct(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    wr(r) || (r = document.body), n.appendTo = r;
  }
  return xs(Ce.grouping) && !n.grouping && (n.grouping = Ce.grouping), dt(Ce.duration) && n.duration === 3e3 && (n.duration = Ce.duration), dt(Ce.offset) && n.offset === 16 && (n.offset = Ce.offset), xs(Ce.showClose) && !n.showClose && (n.showClose = Ce.showClose), n;
}, ld = (e) => {
  const t = Se.indexOf(e);
  if (t === -1)
    return;
  Se.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, cd = ({ appendTo: e, ...t }, n) => {
  const r = `message_${id++}`, s = t.onClose, a = document.createElement("div"), o = {
    ...t,
    id: r,
    onClose: () => {
      s?.(), ld(_);
    },
    onDestroy: () => {
      Sn(null, a);
    }
  }, l = Z(od, o, rn(o.message) || Qt(o.message) ? {
    default: rn(o.message) ? o.message : () => o.message
  } : null);
  l.appContext = n || It._context, Sn(l, a), e.appendChild(a.firstElementChild);
  const d = l.component, _ = {
    id: r,
    vnode: l,
    vm: d,
    handler: {
      close: () => {
        d.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return _;
}, It = (e = {}, t) => {
  if (!pt)
    return { close: () => {
    } };
  const n = eo(e);
  if (n.grouping && Se.length) {
    const s = Se.find(({ vnode: a }) => {
      var o;
      return ((o = a.props) == null ? void 0 : o.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (dt(Ce.max) && Se.length >= Ce.max)
    return { close: () => {
    } };
  const r = cd(n, t);
  return Se.push(r), r.handler;
};
Qa.forEach((e) => {
  It[e] = (t = {}, n) => {
    const r = eo(t);
    return It({ ...r, type: e }, n);
  };
});
function ud(e) {
  for (const t of Se)
    (!e || e === t.props.type) && t.handler.close();
}
It.closeAll = ud;
It._context = null;
const dd = qa(It, "$message"), to = [
  "success",
  "info",
  "warning",
  "error"
], fd = At({
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
    type: Za
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: _e([
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
    type: _e(Function),
    default: () => {
    }
  },
  onClose: {
    type: _e(Function),
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
    values: [...to, ""],
    default: ""
  },
  zIndex: Number
}), hd = {
  destroy: () => !0
}, pd = ce({
  name: "ElNotification"
}), md = /* @__PURE__ */ ce({
  ...pd,
  props: fd,
  emits: hd,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: s } = Ka("notification"), { nextZIndex: a, currentZIndex: o } = s, { Close: l } = Bu, d = B(!1);
    let p;
    const _ = $(() => {
      const y = n.type;
      return y && Pn[n.type] ? r.m(y) : "";
    }), C = $(() => n.type && Pn[n.type] || n.icon), L = $(() => n.position.endsWith("right") ? "right" : "left"), P = $(() => n.position.startsWith("top") ? "top" : "bottom"), x = $(() => {
      var y;
      return {
        [P.value]: `${n.offset}px`,
        zIndex: (y = n.zIndex) != null ? y : o.value
      };
    });
    function b() {
      n.duration > 0 && ({ stop: p } = Fa(() => {
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
      y === bn.delete || y === bn.backspace ? N() : y === bn.esc ? d.value && f() : b();
    }
    return an(() => {
      b(), a(), d.value = !0;
    }), Ua(document, "keydown", S), t({
      visible: d,
      close: f
    }), (y, g) => (j(), xe(Sr, {
      name: E(r).b("fade"),
      onBeforeLeave: y.onClose,
      onAfterLeave: (I) => y.$emit("destroy"),
      persisted: ""
    }, {
      default: ot(() => [
        it(k("div", {
          id: y.id,
          class: ie([E(r).b(), y.customClass, E(L)]),
          style: kt(E(x)),
          role: "alert",
          onMouseenter: N,
          onMouseleave: b,
          onClick: y.onClick
        }, [
          E(C) ? (j(), xe(E(In), {
            key: 0,
            class: ie([E(r).e("icon"), E(_)])
          }, {
            default: ot(() => [
              (j(), xe(Qs(E(C))))
            ]),
            _: 1
          }, 8, ["class"])) : Ie("v-if", !0),
          k("div", {
            class: ie(E(r).e("group"))
          }, [
            k("h2", {
              class: ie(E(r).e("title")),
              textContent: te(y.title)
            }, null, 10, ["textContent"]),
            it(k("div", {
              class: ie(E(r).e("content")),
              style: kt(y.title ? void 0 : { margin: 0 })
            }, [
              Lt(y.$slots, "default", {}, () => [
                y.dangerouslyUseHTMLString ? (j(), X(Ne, { key: 1 }, [
                  Ie(" Caution here, message could've been compromised, never use user's input as message "),
                  k("p", { innerHTML: y.message }, null, 8, ["innerHTML"])
                ], 2112)) : (j(), X("p", { key: 0 }, te(y.message), 1))
              ])
            ], 6), [
              [En, y.message]
            ]),
            y.showClose ? (j(), xe(E(In), {
              key: 0,
              class: ie(E(r).e("closeBtn")),
              onClick: Et(f, ["stop"])
            }, {
              default: ot(() => [
                Z(E(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Ie("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [En, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var gd = /* @__PURE__ */ Un(md, [["__file", "notification.vue"]]);
const Rn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Cr = 16;
let _d = 1;
const Pt = function(e = {}, t) {
  if (!pt)
    return { close: () => {
    } };
  (ct(e) || Qt(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Rn[n].forEach(({ vm: _ }) => {
    var C;
    r += (((C = _.el) == null ? void 0 : C.offsetHeight) || 0) + Cr;
  }), r += Cr;
  const s = `notification_${_d++}`, a = e.onClose, o = {
    ...e,
    offset: r,
    id: s,
    onClose: () => {
      vd(s, n, a);
    }
  };
  let l = document.body;
  wr(e.appendTo) ? l = e.appendTo : ct(e.appendTo) && (l = document.querySelector(e.appendTo)), wr(l) || (l = document.body);
  const d = document.createElement("div"), p = Z(gd, o, rn(o.message) ? o.message : Qt(o.message) ? () => o.message : null);
  return p.appContext = xa(t) ? Pt._context : t, p.props.onDestroy = () => {
    Sn(null, d);
  }, Sn(p, d), Rn[n].push({ vm: p }), l.appendChild(d.firstElementChild), {
    close: () => {
      p.component.exposed.visible.value = !1;
    }
  };
};
to.forEach((e) => {
  Pt[e] = (t = {}, n) => ((ct(t) || Qt(t)) && (t = {
    message: t
  }), Pt({ ...t, type: e }, n));
});
function vd(e, t, n) {
  const r = Rn[t], s = r.findIndex(({ vm: p }) => {
    var _;
    return ((_ = p.component) == null ? void 0 : _.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: a } = r[s];
  if (!a)
    return;
  n?.(a);
  const o = a.el.offsetHeight, l = t.split("-")[0];
  r.splice(s, 1);
  const d = r.length;
  if (!(d < 1))
    for (let p = s; p < d; p++) {
      const { el: _, component: C } = r[p].vm, L = Number.parseInt(_.style[l], 10) - o - Cr;
      C.props.offset = L;
    }
}
function yd() {
  for (const e of Object.values(Rn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Pt.closeAll = yd;
Pt._context = null;
const wd = qa(Pt, "$notify"), ir = {
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
    r === "center" ? dd({
      message: t,
      type: n,
      duration: s,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : wd({
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
}, bd = "snippets-code:developer-mode", no = "snippets-code:frontend-diagnostics", Cd = 240, Xt = "[REDACTED]", Cn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Xt}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Xt}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Xt
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Xt}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Xt}`
), ro = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Cn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Cn(
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
    return Cn(String(e));
  }
}, Ed = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Sd = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(no) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Wr = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(bd) === "true";
  } catch {
    return !1;
  }
}, Ld = (e, t, n) => {
  if (!Wr() || typeof localStorage > "u") return;
  const r = Sd();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Ed(),
    message: Cn(t),
    data: ro(n)
  });
  try {
    localStorage.setItem(
      no,
      JSON.stringify(r.slice(-Cd))
    );
  } catch {
  }
}, kd = () => Wr(), Td = (e) => e === "error" || Wr(), pn = (e, t, n) => {
  Ld(e, t, n), Td(e) && O("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : ro(n)
  }).catch(() => {
  });
}, qt = {
  info: (e, t, ...n) => {
    pn("info", e, t);
  },
  error: (e, t) => {
    pn("error", e, t);
  },
  warn: (e, t) => {
    pn("warn", e, t);
  },
  debug: (e, t) => {
    kd() && pn("debug", e, t);
  }
}, Nd = "[screen-recorder]", ve = async (e, t) => {
  const n = performance.now();
  try {
    return await O(e, t);
  } catch (r) {
    throw console.error(`${Nd} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: r
    }), r;
  }
}, Od = () => ve("screen_recorder_get_ffmpeg_status"), rt = (e) => ve("screen_recorder_set_capture_excluded", { excluded: e }), mn = (e) => ve("screen_recorder_set_passthrough_region", { region: e }), gn = (e) => ve("screen_recorder_set_overlay_window_region", { region: e }), Id = () => ve("screen_recorder_pick_target_window"), Pd = () => ve("screen_recorder_close_window"), Rd = (e, t) => ve("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), Ad = () => ve("screen_recorder_pause_recording"), Md = (e, t) => ve("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), Dd = () => ve("screen_recorder_stop_recording"), xd = () => ve("screen_recorder_cancel_recording"), Fd = () => ve("screen_recorder_cancel_export"), $d = (e, t) => ve("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), Ys = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0,
  showCursor: !0
});
function Wd() {
  const e = B("selecting"), t = B(Ys()), n = B(null), r = B(null), s = B(""), a = B(null), o = B(0), l = B(0), d = B(null), p = () => {
    l.value = e.value === "recording" && a.value !== null ? o.value + Date.now() - a.value : o.value;
  }, _ = () => {
    d.value !== null && (window.clearInterval(d.value), d.value = null);
  }, C = () => {
    _(), p(), d.value = window.setInterval(() => {
      p();
    }, 250);
  }, L = async () => (n.value = await Od(), n.value), P = async (I) => {
    s.value = "", r.value = null;
    const R = n.value ?? await L();
    if (!R.available)
      throw new Error(R.message || "FFmpeg unavailable");
    await Rd(I, t.value), e.value = "recording", o.value = 0, l.value = 0, a.value = Date.now(), C();
  }, x = async () => {
    e.value === "recording" && (p(), o.value = l.value, a.value = null, _(), await Ad(), e.value = "paused");
  }, b = async (I) => {
    e.value === "paused" && (await Md(I, t.value), e.value = "recording", a.value = Date.now(), C());
  }, N = async () => {
    e.value !== "recording" && e.value !== "paused" || (p(), o.value = l.value, a.value = null, _(), await Dd(), e.value = "exporting");
  }, f = async () => {
    e.value = "exporting";
    try {
      return r.value = await $d(
        t.value,
        Math.round(l.value)
      ), e.value = "completed", r.value;
    } catch (I) {
      throw e.value = "ready", r.value = null, I;
    }
  }, S = async () => {
    await Fd(), e.value = "ready", r.value = null;
  }, y = async () => {
    _(), await xd(), e.value = "selecting", a.value = null, o.value = 0, l.value = 0, r.value = null;
  }, g = () => {
    e.value = "selecting", a.value = null, o.value = 0, l.value = 0, r.value = null, s.value = "", t.value = Ys();
  };
  return Er(() => {
    _();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: r,
    errorMessage: s,
    elapsedMs: l,
    refreshFfmpegStatus: L,
    begin: P,
    pause: x,
    resume: b,
    stop: N,
    exportFile: f,
    cancelExport: S,
    cancel: y,
    reset: g
  };
}
const Ud = { class: "screen-recorder" }, zd = ["onMousedown"], jd = { class: "window-title" }, Hd = {
  key: 0,
  class: "time"
}, Bd = {
  key: 1,
  class: "save-status"
}, Vd = {
  key: 2,
  class: "save-status"
}, Gd = {
  key: 3,
  class: "save-status"
}, Kd = ["title"], Yd = { class: "button-label" }, Xd = ["title"], qd = { class: "button-label" }, Jd = ["disabled", "title"], Zd = { class: "record-label" }, Qd = { class: "capture-viewport" }, ef = { class: "capture-frame" }, tf = { class: "control-group control-group--tools" }, nf = { class: "tool-pill" }, rf = ["title", "aria-pressed", "disabled"], sf = ["title", "aria-label", "aria-pressed", "disabled"], af = { class: "select-field" }, of = ["disabled"], lf = ["disabled"], cf = ["disabled"], uf = { value: "high" }, df = { value: "standard" }, ff = { value: "small" }, hf = { class: "dimension-group optional-size" }, pf = { class: "dimension" }, mf = ["value"], gf = { class: "dimension" }, _f = ["value"], vf = { class: "control-group control-group--actions" }, yf = { class: "time" }, wf = ["title"], bf = { class: "button-label" }, Cf = ["title"], Ef = { class: "button-label" }, Sf = ["title"], Lf = { class: "export-progress__meta" }, kf = { class: "export-progress__track" }, Tf = ["title"], Nf = ["disabled", "title"], Of = { class: "record-label" }, If = {
  key: 0,
  class: "warning"
}, Ke = "[screen-recorder]", Ye = 80, lr = 400, Jt = 240, cr = 260, Xs = 140, Pf = 3, qs = 2, Js = 0, Rf = 15, Af = 10, Mf = 2, Df = 8, xf = /* @__PURE__ */ ce({
  __name: "index",
  setup(e) {
    const t = {
      start: "R",
      pause: "P",
      stop: "S"
    }, { t: n } = xn(), r = ka(), s = B(null), a = B(null), o = B(null), l = B({ width: 0, height: 0 }), d = B(!1), p = B(!1), _ = B(!1), C = B(0), L = B(!1), P = B(null);
    let x = null, b = null, N = null, f = null, S = null, y = null, g = null, I = null, R = null, v = null;
    const Q = [
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
      ffmpegStatus: ae,
      result: H,
      elapsedMs: Mt,
      refreshFfmpegStatus: Dt,
      begin: xt,
      pause: Ft,
      resume: $t,
      stop: Wt,
      exportFile: we,
      cancelExport: Ze,
      cancel: mt,
      reset: Ut
    } = Wd(), gt = B(!1), me = $(
      () => D.value === "recording" || D.value === "paused" || D.value === "exporting"
    ), ze = $(
      () => z.value.audio && z.value.format === "mp4"
    ), je = $(
      () => ze.value && D.value === "recording"
    ), zt = $(() => {
      const c = je.value && !L.value ? C.value : 0, h = (F, U) => Math.max(0.18, Math.min(1, F + c * U)).toFixed(3);
      return {
        "--bar-1": h(0.28, 0.64),
        "--bar-2": h(0.42, 0.78),
        "--bar-3": h(0.34, 0.94),
        "--bar-4": h(0.22, 0.72)
      };
    }), _t = $(() => {
      if (z.value.format === "gif")
        return "GIF 不支持音频";
      if (L.value && z.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (H.value?.audioDevice)
        return `已录制音频：${H.value.audioDevice}`;
      if (H.value && !H.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (ae.value?.available && !ae.value.systemAudioAvailable) {
        const c = ae.value.audioDevices?.join("、") || "无";
        return z.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${c}` : "录制音频已关闭";
      }
      return z.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), jt = $(
      () => z.value.showCursor ? String(n("screenRecorder.showCursorOn")) : String(n("screenRecorder.showCursorOff"))
    ), Qe = $(
      () => `${n("screenRecorder.start")} (${t.start})`
    ), vt = $(
      () => `${n("screenRecorder.pause")} (${t.pause})`
    ), yt = $(
      () => `${n("screenRecorder.resume")} (${t.pause})`
    ), He = $(
      () => `${n("screenRecorder.stop")} (${t.stop})`
    ), Re = $(() => _.value), Le = $(() => {
      const c = P.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(c * 100)));
    }), Ae = $(() => {
      const c = P.value;
      return c ? c.totalFrames && c.stage === "frames" ? `${c.message}` : c.message || "正在导出..." : "正在导出...";
    }), Ht = $(() => {
      const c = P.value;
      return c?.totalFrames ? `${Ae.value} (${c.currentFrame}/${c.totalFrames})` : Ae.value;
    }), i = $(() => {
      const c = Math.floor(Mt.value / 1e3), h = Math.floor(c / 60).toString().padStart(2, "0"), F = (c % 60).toString().padStart(2, "0");
      return `${h}:${F}`;
    }), u = (c) => c instanceof Error ? c.message : String(c), w = async (c) => {
      try {
        await c();
      } catch (h) {
        console.error(`${Ke} action failed`, h), qt.error(`${Ke} action failed`, h), gt.value || ir.msg(u(h), "error");
      }
    }, A = (c) => Math.max(2, Math.floor(Math.round(c) / 2) * 2), J = (c) => Math.max(1, Math.round(c)), W = (c, h) => Math.abs(c - h) <= Mf, m = (c, h) => c === h ? !0 : !c || !h ? !1 : W(c.x, h.x) && W(c.y, h.y) && W(c.width, h.width) && W(c.height, h.height), T = async (c) => {
      m(v, c) || (v = c ? { ...c } : null, await mn(c).catch(() => {
      }));
    }, V = async () => {
      const c = s.value;
      if (!c)
        throw new Error("录制视口尚未准备好");
      const h = c.getBoundingClientRect(), F = await r.scaleFactor(), U = await r.innerPosition(), oe = J(h.width * F), de = J(h.height * F);
      if (oe < Ye || de < Ye)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: h.left,
        y: h.top,
        width: oe / F,
        height: de / F,
        screenX: Math.round(U.x + h.left * F),
        screenY: Math.round(U.y + h.top * F),
        physicalWidth: oe,
        physicalHeight: de,
        scale: F
      };
    }, ee = async () => {
      const c = await V(), h = A(c.physicalWidth), F = A(c.physicalHeight);
      return {
        ...c,
        width: h / c.scale,
        height: F / c.scale,
        physicalWidth: h,
        physicalHeight: F
      };
    }, Me = async () => {
      try {
        const c = await V();
        if ((!W(
          l.value.width,
          c.physicalWidth
        ) || !W(
          l.value.height,
          c.physicalHeight
        )) && (l.value = {
          width: c.physicalWidth,
          height: c.physicalHeight
        }), p.value) {
          const h = a.value?.getBoundingClientRect().height ?? 0, F = o.value?.getBoundingClientRect().height ?? 0;
          await T({
            x: Math.round(c.x * c.scale),
            y: Math.round((c.y + h) * c.scale),
            width: c.physicalWidth,
            height: Math.max(
              1,
              c.physicalHeight - Math.round((h + F) * c.scale)
            )
          });
          return;
        }
        await T({
          x: Math.round(c.x * c.scale),
          y: Math.round(c.y * c.scale),
          width: c.physicalWidth,
          height: c.physicalHeight
        });
      } catch {
        (l.value.width !== 0 || l.value.height !== 0) && (l.value = { width: 0, height: 0 }), await T(null);
      }
    }, ue = async () => I || (I = Me().finally(() => {
      if (I = null, R) {
        const c = R;
        R = null, T(c);
      }
    }), I), Be = () => {
      y === null && (y = requestAnimationFrame(() => {
        y = null, ue();
      }));
    }, wt = () => {
      d.value || Be();
    }, zn = () => {
      R = null, v = null;
    }, on = async () => {
      zn(), await mn(null).catch(() => {
      }), await gn(null).catch(() => {
      });
    }, Ur = () => {
      d.value = !1, p.value = !1, _.value = !1;
    }, zr = () => {
      window.setTimeout(() => {
        ue();
      }, 120);
    }, Bt = () => new Promise((c) => {
      requestAnimationFrame(() => requestAnimationFrame(() => c()));
    }), so = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await Bt(), document.documentElement.classList.remove("screen-recorder-repaint"), await Bt();
    }, ao = async () => {
      await r.setIgnoreCursorEvents(!0).catch(() => {
      }), await Bt(), await r.setIgnoreCursorEvents(!1).catch(() => {
      }), await ue();
    }, jn = async () => {
      const [c, h] = await Promise.all([
        r.outerPosition(),
        r.outerSize()
      ]);
      return {
        x: c.x,
        y: c.y,
        width: h.width,
        height: h.height
      };
    }, oo = (c) => c ? {
      x: c.position.x,
      y: c.position.y,
      width: c.size.width,
      height: c.size.height
    } : null, jr = (c) => {
      const h = o.value?.getBoundingClientRect().height ?? 42;
      return Math.max(
        8,
        Math.round((h + Df) * c)
      );
    }, io = (c, h, F) => h ? c.y + c.height >= h.y + h.height - jr(F) : !1, Hn = async () => {
      try {
        const c = await jn(), h = c.x + Math.round(c.width / 2), F = c.y + Math.round(c.height / 2), U = await ar(h, F) || await ar(c.x, c.y), oe = U?.scaleFactor || await r.scaleFactor();
        _.value = io(
          c,
          oo(U),
          oe
        );
      } catch {
        _.value = !1;
      }
    }, Vt = () => {
      g === null && (g = requestAnimationFrame(() => {
        g = null, Hn();
      }));
    }, Hr = () => {
      Vt(), wt();
    }, Bn = async () => {
      if (!p.value) {
        await gn(null).catch(() => {
        });
        return;
      }
      const c = await jn(), h = await r.scaleFactor(), F = a.value?.getBoundingClientRect().height ?? 0, U = o.value?.getBoundingClientRect().height ?? 0;
      await gn({
        width: c.width,
        height: c.height,
        topHeight: Math.round(F * h),
        bottomHeight: Math.round(U * h)
      }).catch(() => {
      });
    }, Br = (c, h) => {
      const F = Math.min(c.width, h.width), U = Math.min(c.height, h.height), oe = h.x + h.width - F, de = h.y + h.height - U;
      return {
        x: Math.min(Math.max(c.x, h.x), oe),
        y: Math.min(Math.max(c.y, h.y), de),
        width: F,
        height: U
      };
    }, lo = (c, h, F) => {
      if (!h) return !1;
      const U = Math.max(8, Math.round(8 * F)), oe = h.x + h.width, de = h.y + h.height, Ve = c.screenX + c.physicalWidth, et = c.screenY + c.physicalHeight;
      return c.screenX <= h.x + U && c.screenY <= h.y + U && Ve >= oe - U && et >= de - U;
    }, co = (c, h, F) => {
      if (!h) return !1;
      const U = Math.max(8, Math.round(8 * F));
      return c.screenX <= h.x + U || c.screenY <= h.y + U || c.screenX + c.physicalWidth >= h.x + h.width - U || c.screenY + c.physicalHeight >= h.y + h.height - U;
    }, uo = (c, h, F) => h ? c.screenY + c.physicalHeight >= h.y + h.height - jr(F) : !1, fo = (c, h, F) => {
      if (!F) return c;
      const U = Math.round(Rf * h), oe = Math.round(Af * h);
      return {
        ...c,
        physicalWidth: Math.max(Ye, c.physicalWidth - U),
        physicalHeight: Math.max(
          Ye,
          c.physicalHeight - oe
        )
      };
    }, Vr = async (c) => {
      await r.setSize(
        new lt(Math.round(c.width), Math.round(c.height))
      ), await r.setPosition(
        new Oe(Math.round(c.x), Math.round(c.y))
      ), await Bt();
    }, Gr = async () => {
      await r.setAlwaysOnTop(!0).catch(() => {
      });
    }, Kr = async () => {
      const [c, h] = await Promise.all([
        V(),
        jn()
      ]);
      return { actualRegion: c, currentFrame: h };
    }, ho = async (c, h, F) => {
      const { actualRegion: U, currentFrame: oe } = await Kr(), de = U.screenX - oe.x, Ve = U.screenY - oe.y, et = Math.max(
        0,
        oe.width - U.physicalWidth
      ), be = Math.max(
        0,
        oe.height - U.physicalHeight
      );
      return {
        x: c.screenX - de,
        y: c.screenY - Ve,
        width: Math.max(h, c.physicalWidth + et),
        height: Math.max(F, c.physicalHeight + be)
      };
    }, Yr = async () => {
      f?.(), f = null, C.value = 0;
    }, ln = async () => {
      if (!(!ze.value || f))
        try {
          f = await Tn(
            "screen_recorder_audio_level",
            (c) => {
              if (!je.value) {
                C.value = 0;
                return;
              }
              const h = Math.max(
                0,
                Math.min(1, Number(c.payload?.level ?? 0))
              );
              C.value = C.value * 0.38 + h * 0.62;
            }
          ), L.value = !1;
        } catch (c) {
          console.error(`${Ke} audio meter failed`, c), qt.warn(`${Ke} audio meter failed`, c), L.value = !0;
        }
    }, Vn = () => {
      r.setFocus().catch(() => {
      });
    }, po = async (c) => {
      c.button !== 0 || me.value || (Ur(), await r.setMinSize(new at(lr, Jt)).catch(() => {
      }), await on(), await r.startDragging().catch((h) => {
        ir.msg(u(h), "error");
      }), zr(), Vt());
    }, mo = async (c) => {
      me.value || (Ur(), await r.setMinSize(new at(lr, Jt)).catch(() => {
      }), await on(), await r.startResizeDragging(c).catch((h) => {
        ir.msg(u(h), "error");
      }), zr(), Vt());
    }, Gn = () => w(async () => {
      P.value = null, await ln(), await rt(!0).catch(() => {
      }), await ue(), await xt(await ee());
    }), Kn = () => w(async () => {
      await Ft();
    }), Yn = () => w(async () => {
      await $t(await ee());
    }), Xn = () => w(async () => {
      P.value = {
        stage: "encode",
        message: z.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await Wt(), C.value = 0, await rt(!1).catch(() => {
      }), await we(), await ue();
    }), Xr = () => w(async () => {
      await Ze(), P.value = null, await rt(!1).catch(() => {
      }), await ue();
    }), qn = () => {
      const c = { ...z.value };
      on(), Ut(), z.value = c, D.value = "ready", H.value = null, P.value = null, rt(!1).catch(() => {
      }), st(ue), ln();
    }, Jn = (c) => {
      if (D.value !== "exporting") {
        if (c === "start") {
          D.value === "ready" ? Gn() : D.value === "completed" && qn();
          return;
        }
        if (c === "pause") {
          D.value === "recording" ? Kn() : D.value === "paused" && Yn();
          return;
        }
        c === "stop" && (D.value === "recording" || D.value === "paused") && Xn();
      }
    }, go = async (c) => {
      const h = await ar(c.screenX, c.screenY), F = h?.scaleFactor || await r.scaleFactor(), U = h ? {
        x: h.position.x,
        y: h.position.y,
        width: h.size.width,
        height: h.size.height
      } : null, oe = lo(
        c,
        U,
        F
      ), de = co(
        c,
        U,
        F
      );
      _.value = uo(
        c,
        U,
        F
      ), d.value = !0, p.value = de, await st(), await Bt(), await r.setMinSize(
        de ? new at(cr, Xs) : new at(cr, Jt)
      ).catch(() => {
      });
      const Ve = Math.round(cr * F), et = Math.round(
        (de ? Xs : Jt) * F
      ), be = fo(c, F, !oe), Qr = de && U ? {
        x: Math.max(U.x, be.screenX),
        y: Math.max(U.y, be.screenY),
        width: Math.max(
          Ve,
          Math.min(be.physicalWidth, U.width)
        ),
        height: Math.max(
          et,
          Math.min(be.physicalHeight, U.height)
        )
      } : await ho(
        be,
        Ve,
        et
      );
      try {
        if (await Vr(
          U && de ? Br(Qr, U) : Qr
        ), await Gr(), await st(), await Bn(), de)
          return;
        const cn = async () => {
          const { actualRegion: tt, currentFrame: Gt } = await Kr(), Ge = {
            x: be.screenX - tt.screenX,
            y: be.screenY - tt.screenY,
            width: be.physicalWidth - tt.physicalWidth,
            height: be.physicalHeight - tt.physicalHeight
          };
          if (Math.abs(Ge.x) <= Js && Math.abs(Ge.y) <= Js && Math.abs(Ge.width) <= qs && Math.abs(Ge.height) <= qs)
            return !0;
          const es = {
            x: Gt.x + Ge.x,
            y: Gt.y + Ge.y,
            width: Math.max(Ve, Gt.width + Ge.width),
            height: Math.max(
              et,
              Gt.height + Ge.height
            )
          };
          return await Vr(
            U && de ? Br(es, U) : es
          ), !1;
        };
        for (let tt = 0; tt < Pf && !await cn(); tt += 1)
          ;
      } catch (cn) {
        console.error(`${Ke} snap correction failed`, cn), qt.warn(`${Ke} snap correction failed`, cn);
      } finally {
        await Gr(), await ao(), await Hn(), await ue(), await Bn(), await so(), await r.setFocus().catch(() => {
        });
      }
    }, _o = () => w(async () => {
      await on();
      const c = await Id();
      await go(c);
    }), vo = () => {
      me.value || z.value.format === "gif" || (z.value.audio = !z.value.audio);
    }, yo = () => {
      me.value || (z.value.showCursor = !z.value.showCursor);
    }, wo = async () => {
      await r.minimize();
    }, qr = async () => {
      gt.value = !0;
      try {
        D.value === "exporting" ? await Ze().catch(() => {
        }) : await mt(), await mn(null).catch(() => {
        }), await rt(!1).catch(() => {
        });
      } catch {
      }
      await Pd();
    }, Jr = async () => {
      H.value && (await ue(), await O("open_file_with_default_app", { filePath: H.value.path }));
    }, bo = async () => {
      H.value && (await ue(), await O("show_file_in_folder", { filePath: H.value.path }));
    }, Zr = (c) => {
      if (c.repeat || c.ctrlKey || c.metaKey || c.altKey) return;
      const h = c.key.toLowerCase();
      if (h === "r") {
        c.preventDefault(), c.stopPropagation(), Jn("start");
        return;
      }
      if (h === "p") {
        c.preventDefault(), c.stopPropagation(), Jn("pause");
        return;
      }
      if (h === "s") {
        c.preventDefault(), c.stopPropagation(), Jn("stop");
        return;
      }
      c.key === "Escape" && (c.preventDefault(), qr());
    };
    return an(async () => {
      qt.info(`${Ke} frontend mounted`), D.value = "ready", await r.setMinSize(new at(lr, Jt)).catch(() => {
      }), await rt(!1).catch(() => {
      }), await Dt().catch(() => {
      }), await st(), await ue(), await Hn(), await ln(), await st(), S = await Tn(
        "screen_recorder_export_progress",
        (c) => {
          P.value = c.payload;
        }
      ).catch(() => null), await r.emit("screen_recorder_ready"), qt.info(`${Ke} frontend ready emitted`), s.value && (x = new ResizeObserver(() => {
        wt();
      }), x.observe(s.value)), b = await r.onMoved(() => {
        Vt(), wt();
      }).catch(() => null), N = await r.onResized(() => {
        Vt(), wt();
      }).catch(() => null), window.addEventListener("resize", Hr), window.addEventListener("keydown", Zr);
    }), We(ze, (c) => {
      c ? ln() : Yr();
    }), We(D, (c) => {
      c !== "recording" && (C.value = 0), c !== "exporting" && (P.value = null);
    }), We(Re, async () => {
      await st(), await ue(), await Bn();
    }), Er(() => {
      x?.disconnect(), b?.(), N?.(), S?.(), window.removeEventListener(
        "resize",
        Hr
      ), window.removeEventListener("keydown", Zr), zn(), g !== null && (cancelAnimationFrame(g), g = null), mn(null).catch(() => {
      }), gn(null).catch(() => {
      }), rt(!1).catch(() => {
      }), Yr();
    }), (c, h) => (j(), X("div", Ud, [
      k(
        "div",
        {
          class: ie(["recorder-shell", {
            recording: E(D) === "recording",
            paused: E(D) === "paused",
            "snap-aligned": d.value,
            "snap-fullscreen": p.value
          }])
        },
        [
          (j(), X(
            Ne,
            null,
            Ao(Q, (F) => k("span", {
              key: F.className,
              class: ie(["resize-zone", F.className]),
              onMousedown: Et((U) => mo(F.direction), ["prevent"])
            }, null, 42, zd)),
            64
            /* STABLE_FRAGMENT */
          )),
          k(
            "header",
            {
              ref_key: "titleBarRef",
              ref: a,
              class: "title-bar",
              onMouseenter: Vn,
              onMousedown: po
            },
            [
              k(
                "span",
                jd,
                te(c.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              Re.value ? (j(), X(
                "div",
                {
                  key: 0,
                  class: "top-control-strip",
                  onMouseenter: Vn,
                  onMousedown: h[1] || (h[1] = Et(() => {
                  }, ["stop"]))
                },
                [
                  E(D) === "recording" || E(D) === "paused" ? (j(), X(
                    "span",
                    Hd,
                    te(i.value),
                    1
                    /* TEXT */
                  )) : E(D) === "exporting" ? (j(), X(
                    "span",
                    Bd,
                    te(Le.value) + "% ",
                    1
                    /* TEXT */
                  )) : E(D) === "completed" ? (j(), X(
                    "span",
                    Vd,
                    te(E(H)?.hasAudio ? "已保存·有声" : "已保存·无声"),
                    1
                    /* TEXT */
                  )) : (j(), X(
                    "span",
                    Gd,
                    te(l.value.width) + "×" + te(l.value.height),
                    1
                    /* TEXT */
                  )),
                  E(D) === "recording" || E(D) === "paused" ? (j(), X(
                    Ne,
                    { key: 4 },
                    [
                      k("button", {
                        class: "control-button",
                        title: E(D) === "paused" ? yt.value : vt.value,
                        onClick: h[0] || (h[0] = (F) => E(D) === "paused" ? Yn() : Kn())
                      }, [
                        k(
                          "span",
                          Yd,
                          te(E(D) === "paused" ? c.$t("screenRecorder.resume") : c.$t("screenRecorder.pause")),
                          1
                          /* TEXT */
                        )
                      ], 8, Kd),
                      k("button", {
                        class: "control-button danger",
                        title: He.value,
                        onClick: Xn
                      }, [
                        k(
                          "span",
                          qd,
                          te(c.$t("screenRecorder.stop")),
                          1
                          /* TEXT */
                        )
                      ], 8, Xd)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : E(D) === "exporting" ? (j(), X("button", {
                    key: 5,
                    class: "control-button danger",
                    title: "取消导出",
                    onClick: Xr
                  }, h[7] || (h[7] = [
                    k(
                      "span",
                      { class: "button-label" },
                      "取消",
                      -1
                      /* HOISTED */
                    )
                  ]))) : E(D) === "completed" && E(H) ? (j(), X(
                    Ne,
                    { key: 6 },
                    [
                      k("button", {
                        class: "control-button",
                        title: "打开文件",
                        onClick: Jr
                      }, h[8] || (h[8] = [
                        k(
                          "span",
                          { class: "button-label" },
                          "打开",
                          -1
                          /* HOISTED */
                        )
                      ])),
                      k("button", {
                        class: "control-button",
                        title: "重新录制",
                        onClick: qn
                      }, h[9] || (h[9] = [
                        k(
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
                    disabled: E(ae)?.available === !1 || l.value.width < Ye || l.value.height < Ye,
                    title: Qe.value,
                    onClick: Gn
                  }, [
                    h[10] || (h[10] = k(
                      "span",
                      { class: "record-dot" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    k(
                      "span",
                      Zd,
                      te(c.$t("screenRecorder.start")),
                      1
                      /* TEXT */
                    )
                  ], 8, Jd))
                ],
                32
                /* NEED_HYDRATION */
              )) : Ie("v-if", !0),
              k(
                "div",
                {
                  class: "window-actions",
                  onMousedown: h[2] || (h[2] = Et(() => {
                  }, ["stop"]))
                },
                [
                  k("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: wo
                  }, [
                    Z(E(Al), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  k("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: qr
                  }, [
                    Z(E(Rl), {
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
          k("main", Qd, [
            h[15] || (h[15] = k(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            h[16] || (h[16] = k(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            h[17] || (h[17] = k(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            h[18] || (h[18] = k(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            k("div", ef, [
              k(
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
              h[11] || (h[11] = k(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              h[12] || (h[12] = k(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              h[13] || (h[13] = k(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              h[14] || (h[14] = k(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          k(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: o,
              class: "control-strip",
              onMouseenter: Vn
            },
            [
              k("div", tf, [
                k("div", nf, [
                  E(D) === "ready" || E(D) === "completed" ? (j(), X(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Et(_o, ["prevent"])
                    },
                    [
                      Z(E(Dl), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : Ie("v-if", !0),
                  k("button", {
                    class: ie(["audio-meter", {
                      active: je.value && C.value > 0.03,
                      "audio-on": ze.value,
                      metering: je.value && !L.value,
                      muted: !ze.value || L.value
                    }]),
                    title: _t.value,
                    "aria-label": "系统声音录制状态",
                    "aria-pressed": E(z).audio && E(z).format === "mp4",
                    disabled: me.value || E(z).format === "gif",
                    onClick: vo
                  }, [
                    k(
                      "span",
                      {
                        class: "audio-bars",
                        style: kt(zt.value)
                      },
                      h[19] || (h[19] = [
                        k(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        k(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        k(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        k(
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
                  ], 10, rf),
                  k("button", {
                    class: ie(["icon-control cursor-control", { active: E(z).showCursor }]),
                    title: jt.value,
                    "aria-label": c.$t("screenRecorder.showCursor"),
                    "aria-pressed": E(z).showCursor,
                    disabled: me.value,
                    onClick: yo
                  }, [
                    Z(E(Ml), {
                      theme: "outline",
                      size: "17",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 10, sf)
                ]),
                k("label", af, [
                  it(k("select", {
                    "onUpdate:modelValue": h[3] || (h[3] = (F) => E(z).fps = F),
                    disabled: me.value
                  }, h[20] || (h[20] = [
                    k(
                      "option",
                      { value: 15 },
                      "15",
                      -1
                      /* HOISTED */
                    ),
                    k(
                      "option",
                      { value: 24 },
                      "24",
                      -1
                      /* HOISTED */
                    ),
                    k(
                      "option",
                      { value: 30 },
                      "30",
                      -1
                      /* HOISTED */
                    ),
                    k(
                      "option",
                      { value: 60 },
                      "60",
                      -1
                      /* HOISTED */
                    )
                  ]), 8, of), [
                    [Qn, E(z).fps]
                  ]),
                  h[21] || (h[21] = k(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                it(k("select", {
                  "onUpdate:modelValue": h[4] || (h[4] = (F) => E(z).format = F),
                  class: "format-select optional-format",
                  disabled: me.value
                }, h[22] || (h[22] = [
                  k(
                    "option",
                    { value: "mp4" },
                    "MP4",
                    -1
                    /* HOISTED */
                  ),
                  k(
                    "option",
                    { value: "gif" },
                    "GIF",
                    -1
                    /* HOISTED */
                  )
                ]), 8, lf), [
                  [Qn, E(z).format]
                ]),
                it(k("select", {
                  "onUpdate:modelValue": h[5] || (h[5] = (F) => E(z).quality = F),
                  class: "quality-select optional-quality",
                  disabled: me.value
                }, [
                  k(
                    "option",
                    uf,
                    te(c.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  k(
                    "option",
                    df,
                    te(c.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  k(
                    "option",
                    ff,
                    te(c.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, cf), [
                  [Qn, E(z).quality]
                ]),
                k("div", hf, [
                  k("label", pf, [
                    k("input", {
                      value: l.value.width,
                      readonly: ""
                    }, null, 8, mf)
                  ]),
                  h[23] || (h[23] = k(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  k("label", gf, [
                    k("input", {
                      value: l.value.height,
                      readonly: ""
                    }, null, 8, _f)
                  ]),
                  h[24] || (h[24] = k(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              k("div", vf, [
                E(D) === "recording" || E(D) === "paused" ? (j(), X(
                  Ne,
                  { key: 0 },
                  [
                    k(
                      "span",
                      yf,
                      te(i.value),
                      1
                      /* TEXT */
                    ),
                    k("button", {
                      class: "control-button",
                      title: E(D) === "paused" ? yt.value : vt.value,
                      onClick: h[6] || (h[6] = (F) => E(D) === "paused" ? Yn() : Kn())
                    }, [
                      k(
                        "span",
                        bf,
                        te(E(D) === "paused" ? c.$t("screenRecorder.resume") : c.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ], 8, wf),
                    k("button", {
                      class: "control-button danger",
                      title: He.value,
                      onClick: Xn
                    }, [
                      k(
                        "span",
                        Ef,
                        te(c.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ], 8, Cf)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : E(D) === "exporting" ? (j(), X(
                  Ne,
                  { key: 1 },
                  [
                    k("div", {
                      class: "export-progress",
                      title: Ht.value
                    }, [
                      k("div", Lf, [
                        k(
                          "span",
                          null,
                          te(Ae.value),
                          1
                          /* TEXT */
                        ),
                        k(
                          "strong",
                          null,
                          te(Le.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      k("div", kf, [
                        k(
                          "span",
                          {
                            style: kt({ width: `${Le.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Sf),
                    k("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: Xr
                    }, h[25] || (h[25] = [
                      k(
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
                  Ne,
                  { key: 2 },
                  [
                    k("span", {
                      class: "save-status optional-save-status",
                      title: E(H).path
                    }, te(E(H).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Tf),
                    k("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: Jr
                    }, h[26] || (h[26] = [
                      k(
                        "span",
                        { class: "button-label" },
                        "打开",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    k("button", {
                      class: "control-button",
                      title: "打开所在文件夹",
                      onClick: bo
                    }, h[27] || (h[27] = [
                      k(
                        "span",
                        { class: "button-label" },
                        "文件夹",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    k("button", {
                      class: "control-button",
                      title: "重新录制",
                      onClick: qn
                    }, h[28] || (h[28] = [
                      k(
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
                  disabled: E(ae)?.available === !1 || l.value.width < Ye || l.value.height < Ye,
                  title: Qe.value,
                  onClick: Gn
                }, [
                  h[29] || (h[29] = k(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  k(
                    "span",
                    Of,
                    te(c.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Nf))
              ])
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      E(ae) && !E(ae).available ? (j(), X(
        "p",
        If,
        te(E(ae).message || c.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : Ie("v-if", !0)
    ]));
  }
}), Ff = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, $f = /* @__PURE__ */ Ff(xf, [["__scopeId", "data-v-707a7229"]]), Wf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $f
}, Symbol.toStringTag, { value: "Module" }));
export {
  zf as activate
};
