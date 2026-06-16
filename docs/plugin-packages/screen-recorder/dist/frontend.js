import * as Wn from "vue";
import { inject as Ve, ref as j, shallowRef as oo, computed as x, watch as Ge, onMounted as nn, onUnmounted as cr, defineComponent as ae, h as Ws, createVNode as q, Text as io, Fragment as Be, getCurrentInstance as Et, unref as N, readonly as lo, getCurrentScope as co, onScopeDispose as uo, nextTick as bt, isRef as fo, warn as ho, provide as po, createElementBlock as ne, openBlock as K, mergeProps as mo, renderSlot as St, createElementVNode as I, normalizeClass as re, Transition as ur, withCtx as at, withDirectives as ot, normalizeStyle as Lt, createTextVNode as go, toDisplayString as de, vShow as wn, shallowReactive as _o, createBlock as Re, createCommentVNode as Me, resolveDynamicComponent as Us, withModifiers as Yt, isVNode as qt, render as bn, renderList as vo, vModelSelect as Un } from "vue";
const gf = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => pf)
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function yo(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const jr = typeof window < "u", dt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), wo = (e, t, n) => bo({ l: e, k: t, s: n }), bo = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), se = (e) => typeof e == "number" && isFinite(e), Co = (e) => dr(e) === "[object Date]", Cn = (e) => dr(e) === "[object RegExp]", On = (e) => H(e) && Object.keys(e).length === 0, ie = Object.assign, Eo = Object.create, Y = (e = null) => Eo(e);
let Hr;
const pn = () => Hr || (Hr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Y());
function Br(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Vr(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function So(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, a) => `${s}="${Vr(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, a) => `${s}='${Vr(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Lo = Object.prototype.hasOwnProperty;
function Se(e, t) {
  return Lo.call(e, t);
}
const te = Array.isArray, Z = (e) => typeof e == "function", M = (e) => typeof e == "string", ee = (e) => typeof e == "boolean", B = (e) => e !== null && typeof e == "object", ko = (e) => B(e) && Z(e.then) && Z(e.catch), zs = Object.prototype.toString, dr = (e) => zs.call(e), H = (e) => dr(e) === "[object Object]", To = (e) => e == null ? "" : te(e) || H(e) && e.toString === zs ? JSON.stringify(e, null, 2) : String(e);
function fr(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const on = (e) => !B(e) || te(e);
function mn(e, t) {
  if (on(e) || on(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (B(r[a]) && !B(s[a]) && (s[a] = Array.isArray(r[a]) ? [] : Y()), on(s[a]) || on(r[a]) ? s[a] = r[a] : n.push({ src: r[a], des: s[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function No(e, t, n) {
  return { line: e, column: t, offset: n };
}
function qn(e, t, n) {
  return { start: e, end: t };
}
const G = {
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
}, Io = 17;
function Pn(e, t, n = {}) {
  const { domain: r, messages: s, args: a } = n, o = e, l = new SyntaxError(String(o));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function Oo(e) {
  throw e;
}
const ke = " ", Po = "\r", ue = `
`, Ao = "\u2028", Ro = "\u2029";
function Mo(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const o = (g) => t[g] === Po && t[g + 1] === ue, l = (g) => t[g] === ue, u = (g) => t[g] === Ro, m = (g) => t[g] === Ao, _ = (g) => o(g) || l(g) || u(g) || m(g), E = () => n, S = () => r, A = () => s, D = () => a, w = (g) => o(g) || u(g) || m(g) ? ue : t[g], k = () => w(n), f = () => w(n + a);
  function b() {
    return a = 0, _(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function v() {
    return o(n + a) && a++, a++, t[n + a];
  }
  function y() {
    n = 0, r = 1, s = 1, a = 0;
  }
  function P(g = 0) {
    a = g;
  }
  function L() {
    const g = n + a;
    for (; g !== n; )
      b();
    a = 0;
  }
  return {
    index: E,
    line: S,
    column: A,
    peekOffset: D,
    charAt: w,
    currentChar: k,
    currentPeek: f,
    next: b,
    peek: v,
    reset: y,
    resetPeek: P,
    skipToPeek: L
  };
}
const Ae = void 0, Do = ".", Gr = "'", xo = "tokenizer";
function Fo(e, t = {}) {
  const n = t.location !== !1, r = Mo(e), s = () => r.index(), a = () => No(r.line(), r.column(), r.index()), o = a(), l = s(), u = {
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
  }, m = () => u, { onError: _ } = t;
  function E(i, c, C, ...R) {
    const X = m();
    if (c.column += C, c.offset += C, _) {
      const $ = n ? qn(X.startLoc, c) : null, h = Pn(i, $, {
        domain: xo,
        args: R
      });
      _(h);
    }
  }
  function S(i, c, C) {
    i.endLoc = a(), i.currentType = c;
    const R = { type: c };
    return n && (R.loc = qn(i.startLoc, i.endLoc)), C != null && (R.value = C), R;
  }
  const A = (i) => S(
    i,
    13
    /* TokenTypes.EOF */
  );
  function D(i, c) {
    return i.currentChar() === c ? (i.next(), c) : (E(G.EXPECTED_TOKEN, a(), 0, c), "");
  }
  function w(i) {
    let c = "";
    for (; i.currentPeek() === ke || i.currentPeek() === ue; )
      c += i.currentPeek(), i.peek();
    return c;
  }
  function k(i) {
    const c = w(i);
    return i.skipToPeek(), c;
  }
  function f(i) {
    if (i === Ae)
      return !1;
    const c = i.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c === 95;
  }
  function b(i) {
    if (i === Ae)
      return !1;
    const c = i.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function v(i, c) {
    const { currentType: C } = c;
    if (C !== 2)
      return !1;
    w(i);
    const R = f(i.currentPeek());
    return i.resetPeek(), R;
  }
  function y(i, c) {
    const { currentType: C } = c;
    if (C !== 2)
      return !1;
    w(i);
    const R = i.currentPeek() === "-" ? i.peek() : i.currentPeek(), X = b(R);
    return i.resetPeek(), X;
  }
  function P(i, c) {
    const { currentType: C } = c;
    if (C !== 2)
      return !1;
    w(i);
    const R = i.currentPeek() === Gr;
    return i.resetPeek(), R;
  }
  function L(i, c) {
    const { currentType: C } = c;
    if (C !== 7)
      return !1;
    w(i);
    const R = i.currentPeek() === ".";
    return i.resetPeek(), R;
  }
  function g(i, c) {
    const { currentType: C } = c;
    if (C !== 8)
      return !1;
    w(i);
    const R = f(i.currentPeek());
    return i.resetPeek(), R;
  }
  function V(i, c) {
    const { currentType: C } = c;
    if (!(C === 7 || C === 11))
      return !1;
    w(i);
    const R = i.currentPeek() === ":";
    return i.resetPeek(), R;
  }
  function U(i, c) {
    const { currentType: C } = c;
    if (C !== 9)
      return !1;
    const R = () => {
      const $ = i.currentPeek();
      return $ === "{" ? f(i.peek()) : $ === "@" || $ === "|" || $ === ":" || $ === "." || $ === ke || !$ ? !1 : $ === ue ? (i.peek(), R()) : ve(i, !1);
    }, X = R();
    return i.resetPeek(), X;
  }
  function fe(i) {
    w(i);
    const c = i.currentPeek() === "|";
    return i.resetPeek(), c;
  }
  function ve(i, c = !0) {
    const C = (X = !1, $ = "") => {
      const h = i.currentPeek();
      return h === "{" || h === "@" || !h ? X : h === "|" ? !($ === ke || $ === ue) : h === ke ? (i.peek(), C(!0, ke)) : h === ue ? (i.peek(), C(!0, ue)) : !0;
    }, R = C();
    return c && i.resetPeek(), R;
  }
  function Q(i, c) {
    const C = i.currentChar();
    return C === Ae ? Ae : c(C) ? (i.next(), C) : null;
  }
  function Rt(i) {
    const c = i.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c >= 48 && c <= 57 || // 0-9
    c === 95 || // _
    c === 36;
  }
  function Mt(i) {
    return Q(i, Rt);
  }
  function Dt(i) {
    const c = i.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c >= 48 && c <= 57 || // 0-9
    c === 95 || // _
    c === 36 || // $
    c === 45;
  }
  function xt(i) {
    return Q(i, Dt);
  }
  function pt(i) {
    const c = i.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function Ft(i) {
    return Q(i, pt);
  }
  function be(i) {
    const c = i.charCodeAt(0);
    return c >= 48 && c <= 57 || // 0-9
    c >= 65 && c <= 70 || // A-F
    c >= 97 && c <= 102;
  }
  function Xe(i) {
    return Q(i, be);
  }
  function he(i) {
    let c = "", C = "";
    for (; c = Ft(i); )
      C += c;
    return C;
  }
  function Oe(i) {
    let c = "";
    for (; ; ) {
      const C = i.currentChar();
      if (C === "{" || C === "}" || C === "@" || C === "|" || !C)
        break;
      if (C === ke || C === ue)
        if (ve(i))
          c += C, i.next();
        else {
          if (fe(i))
            break;
          c += C, i.next();
        }
      else
        c += C, i.next();
    }
    return c;
  }
  function $e(i) {
    k(i);
    let c = "", C = "";
    for (; c = xt(i); )
      C += c;
    const R = i.currentChar();
    if (R && R !== "}" && R !== Ae && R !== ke && R !== ue && R !== "　") {
      const X = gt(i);
      return E(G.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, C + X), C + X;
    }
    return i.currentChar() === Ae && E(G.UNTERMINATED_CLOSING_BRACE, a(), 0), C;
  }
  function $t(i) {
    k(i);
    let c = "";
    return i.currentChar() === "-" ? (i.next(), c += `-${he(i)}`) : c += he(i), i.currentChar() === Ae && E(G.UNTERMINATED_CLOSING_BRACE, a(), 0), c;
  }
  function rn(i) {
    return i !== Gr && i !== ue;
  }
  function Wt(i) {
    k(i), D(i, "'");
    let c = "", C = "";
    for (; c = Q(i, rn); )
      c === "\\" ? C += Ut(i) : C += c;
    const R = i.currentChar();
    return R === ue || R === Ae ? (E(G.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), R === ue && (i.next(), D(i, "'")), C) : (D(i, "'"), C);
  }
  function Ut(i) {
    const c = i.currentChar();
    switch (c) {
      case "\\":
      case "'":
        return i.next(), `\\${c}`;
      case "u":
        return mt(i, c, 4);
      case "U":
        return mt(i, c, 6);
      default:
        return E(G.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, c), "";
    }
  }
  function mt(i, c, C) {
    D(i, c);
    let R = "";
    for (let X = 0; X < C; X++) {
      const $ = Xe(i);
      if (!$) {
        E(G.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${c}${R}${i.currentChar()}`);
        break;
      }
      R += $;
    }
    return `\\${c}${R}`;
  }
  function zt(i) {
    return i !== "{" && i !== "}" && i !== ke && i !== ue;
  }
  function gt(i) {
    k(i);
    let c = "", C = "";
    for (; c = Q(i, zt); )
      C += c;
    return C;
  }
  function _t(i) {
    let c = "", C = "";
    for (; c = Mt(i); )
      C += c;
    return C;
  }
  function qe(i) {
    const c = (C) => {
      const R = i.currentChar();
      return R === "{" || R === "@" || R === "|" || R === "(" || R === ")" || !R || R === ke ? C : (C += R, i.next(), c(C));
    };
    return c("");
  }
  function Je(i) {
    k(i);
    const c = D(
      i,
      "|"
      /* TokenChars.Pipe */
    );
    return k(i), c;
  }
  function We(i, c) {
    let C = null;
    switch (i.currentChar()) {
      case "{":
        return c.braceNest >= 1 && E(G.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), i.next(), C = S(
          c,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), k(i), c.braceNest++, C;
      case "}":
        return c.braceNest > 0 && c.currentType === 2 && E(G.EMPTY_PLACEHOLDER, a(), 0), i.next(), C = S(
          c,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), c.braceNest--, c.braceNest > 0 && k(i), c.inLinked && c.braceNest === 0 && (c.inLinked = !1), C;
      case "@":
        return c.braceNest > 0 && E(G.UNTERMINATED_CLOSING_BRACE, a(), 0), C = pe(i, c) || A(c), c.braceNest = 0, C;
      default: {
        let X = !0, $ = !0, h = !0;
        if (fe(i))
          return c.braceNest > 0 && E(G.UNTERMINATED_CLOSING_BRACE, a(), 0), C = S(c, 1, Je(i)), c.braceNest = 0, c.inLinked = !1, C;
        if (c.braceNest > 0 && (c.currentType === 4 || c.currentType === 5 || c.currentType === 6))
          return E(G.UNTERMINATED_CLOSING_BRACE, a(), 0), c.braceNest = 0, Ue(i, c);
        if (X = v(i, c))
          return C = S(c, 4, $e(i)), k(i), C;
        if ($ = y(i, c))
          return C = S(c, 5, $t(i)), k(i), C;
        if (h = P(i, c))
          return C = S(c, 6, Wt(i)), k(i), C;
        if (!X && !$ && !h)
          return C = S(c, 12, gt(i)), E(G.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, C.value), k(i), C;
        break;
      }
    }
    return C;
  }
  function pe(i, c) {
    const { currentType: C } = c;
    let R = null;
    const X = i.currentChar();
    switch ((C === 7 || C === 8 || C === 11 || C === 9) && (X === ue || X === ke) && E(G.INVALID_LINKED_FORMAT, a(), 0), X) {
      case "@":
        return i.next(), R = S(
          c,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), c.inLinked = !0, R;
      case ".":
        return k(i), i.next(), S(
          c,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return k(i), i.next(), S(
          c,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return fe(i) ? (R = S(c, 1, Je(i)), c.braceNest = 0, c.inLinked = !1, R) : L(i, c) || V(i, c) ? (k(i), pe(i, c)) : g(i, c) ? (k(i), S(c, 11, _t(i))) : U(i, c) ? (k(i), X === "{" ? We(i, c) || R : S(c, 10, qe(i))) : (C === 7 && E(G.INVALID_LINKED_FORMAT, a(), 0), c.braceNest = 0, c.inLinked = !1, Ue(i, c));
    }
  }
  function Ue(i, c) {
    let C = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (c.braceNest > 0)
      return We(i, c) || A(c);
    if (c.inLinked)
      return pe(i, c) || A(c);
    switch (i.currentChar()) {
      case "{":
        return We(i, c) || A(c);
      case "}":
        return E(G.UNBALANCED_CLOSING_BRACE, a(), 0), i.next(), S(
          c,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return pe(i, c) || A(c);
      default: {
        if (fe(i))
          return C = S(c, 1, Je(i)), c.braceNest = 0, c.inLinked = !1, C;
        if (ve(i))
          return S(c, 0, Oe(i));
        break;
      }
    }
    return C;
  }
  function vt() {
    const { currentType: i, offset: c, startLoc: C, endLoc: R } = u;
    return u.lastType = i, u.lastOffset = c, u.lastStartLoc = C, u.lastEndLoc = R, u.offset = s(), u.startLoc = a(), r.currentChar() === Ae ? S(
      u,
      13
      /* TokenTypes.EOF */
    ) : Ue(r, u);
  }
  return {
    nextToken: vt,
    currentOffset: s,
    currentPosition: a,
    context: m
  };
}
const $o = "parser", Wo = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Uo(e, t, n) {
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
function zo(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, b, v, y, ...P) {
    const L = f.currentPosition();
    if (L.offset += y, L.column += y, n) {
      const g = t ? qn(v, L) : null, V = Pn(b, g, {
        domain: $o,
        args: P
      });
      n(V);
    }
  }
  function s(f, b, v) {
    const y = { type: f };
    return t && (y.start = b, y.end = b, y.loc = { start: v, end: v }), y;
  }
  function a(f, b, v, y) {
    t && (f.end = b, f.loc && (f.loc.end = v));
  }
  function o(f, b) {
    const v = f.context(), y = s(3, v.offset, v.startLoc);
    return y.value = b, a(y, f.currentOffset(), f.currentPosition()), y;
  }
  function l(f, b) {
    const v = f.context(), { lastOffset: y, lastStartLoc: P } = v, L = s(5, y, P);
    return L.index = parseInt(b, 10), f.nextToken(), a(L, f.currentOffset(), f.currentPosition()), L;
  }
  function u(f, b) {
    const v = f.context(), { lastOffset: y, lastStartLoc: P } = v, L = s(4, y, P);
    return L.key = b, f.nextToken(), a(L, f.currentOffset(), f.currentPosition()), L;
  }
  function m(f, b) {
    const v = f.context(), { lastOffset: y, lastStartLoc: P } = v, L = s(9, y, P);
    return L.value = b.replace(Wo, Uo), f.nextToken(), a(L, f.currentOffset(), f.currentPosition()), L;
  }
  function _(f) {
    const b = f.nextToken(), v = f.context(), { lastOffset: y, lastStartLoc: P } = v, L = s(8, y, P);
    return b.type !== 11 ? (r(f, G.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0), L.value = "", a(L, y, P), {
      nextConsumeToken: b,
      node: L
    }) : (b.value == null && r(f, G.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Te(b)), L.value = b.value || "", a(L, f.currentOffset(), f.currentPosition()), {
      node: L
    });
  }
  function E(f, b) {
    const v = f.context(), y = s(7, v.offset, v.startLoc);
    return y.value = b, a(y, f.currentOffset(), f.currentPosition()), y;
  }
  function S(f) {
    const b = f.context(), v = s(6, b.offset, b.startLoc);
    let y = f.nextToken();
    if (y.type === 8) {
      const P = _(f);
      v.modifier = P.node, y = P.nextConsumeToken || f.nextToken();
    }
    switch (y.type !== 9 && r(f, G.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Te(y)), y = f.nextToken(), y.type === 2 && (y = f.nextToken()), y.type) {
      case 10:
        y.value == null && r(f, G.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Te(y)), v.key = E(f, y.value || "");
        break;
      case 4:
        y.value == null && r(f, G.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Te(y)), v.key = u(f, y.value || "");
        break;
      case 5:
        y.value == null && r(f, G.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Te(y)), v.key = l(f, y.value || "");
        break;
      case 6:
        y.value == null && r(f, G.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Te(y)), v.key = m(f, y.value || "");
        break;
      default: {
        r(f, G.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const P = f.context(), L = s(7, P.offset, P.startLoc);
        return L.value = "", a(L, P.offset, P.startLoc), v.key = L, a(v, P.offset, P.startLoc), {
          nextConsumeToken: y,
          node: v
        };
      }
    }
    return a(v, f.currentOffset(), f.currentPosition()), {
      node: v
    };
  }
  function A(f) {
    const b = f.context(), v = b.currentType === 1 ? f.currentOffset() : b.offset, y = b.currentType === 1 ? b.endLoc : b.startLoc, P = s(2, v, y);
    P.items = [];
    let L = null;
    do {
      const U = L || f.nextToken();
      switch (L = null, U.type) {
        case 0:
          U.value == null && r(f, G.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Te(U)), P.items.push(o(f, U.value || ""));
          break;
        case 5:
          U.value == null && r(f, G.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Te(U)), P.items.push(l(f, U.value || ""));
          break;
        case 4:
          U.value == null && r(f, G.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Te(U)), P.items.push(u(f, U.value || ""));
          break;
        case 6:
          U.value == null && r(f, G.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Te(U)), P.items.push(m(f, U.value || ""));
          break;
        case 7: {
          const fe = S(f);
          P.items.push(fe.node), L = fe.nextConsumeToken || null;
          break;
        }
      }
    } while (b.currentType !== 13 && b.currentType !== 1);
    const g = b.currentType === 1 ? b.lastOffset : f.currentOffset(), V = b.currentType === 1 ? b.lastEndLoc : f.currentPosition();
    return a(P, g, V), P;
  }
  function D(f, b, v, y) {
    const P = f.context();
    let L = y.items.length === 0;
    const g = s(1, b, v);
    g.cases = [], g.cases.push(y);
    do {
      const V = A(f);
      L || (L = V.items.length === 0), g.cases.push(V);
    } while (P.currentType !== 13);
    return L && r(f, G.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0), a(g, f.currentOffset(), f.currentPosition()), g;
  }
  function w(f) {
    const b = f.context(), { offset: v, startLoc: y } = b, P = A(f);
    return b.currentType === 13 ? P : D(f, v, y, P);
  }
  function k(f) {
    const b = Fo(f, ie({}, e)), v = b.context(), y = s(0, v.offset, v.startLoc);
    return t && y.loc && (y.loc.source = f), y.body = w(b), e.onCacheKey && (y.cacheKey = e.onCacheKey(f)), v.currentType !== 13 && r(b, G.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, f[v.offset] || ""), a(y, b.currentOffset(), b.currentPosition()), y;
  }
  return { parse: k };
}
function Te(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function jo(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Kr(e, t) {
  for (let n = 0; n < e.length; n++)
    hr(e[n], t);
}
function hr(e, t) {
  switch (e.type) {
    case 1:
      Kr(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Kr(e.items, t);
      break;
    case 6: {
      hr(e.key, t), t.helper(
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
function Ho(e, t = {}) {
  const n = jo(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && hr(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Bo(e) {
  const t = e.body;
  return t.type === 2 ? Yr(t) : t.cases.forEach((n) => Yr(n)), e;
}
function Yr(e) {
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
      e.static = fr(t);
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
function Vo(e, t) {
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
  function u(w, k) {
    o.code += w;
  }
  function m(w, k = !0) {
    const f = k ? r : "";
    u(s ? f + "  ".repeat(w) : f);
  }
  function _(w = !0) {
    const k = ++o.indentLevel;
    w && m(k);
  }
  function E(w = !0) {
    const k = --o.indentLevel;
    w && m(k);
  }
  function S() {
    m(o.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: _,
    deindent: E,
    newline: S,
    helper: (w) => `_${w}`,
    needIndent: () => o.needIndent
  };
}
function Go(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), kt(e, t.key), t.modifier ? (e.push(", "), kt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Ko(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let a = 0; a < s && (kt(e, t.items[a]), a !== s - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Yo(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let a = 0; a < s && (kt(e, t.cases[a]), a !== s - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Xo(e, t) {
  t.body ? kt(e, t.body) : e.push("null");
}
function kt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Xo(e, t);
      break;
    case 1:
      Yo(e, t);
      break;
    case 2:
      Ko(e, t);
      break;
    case 6:
      Go(e, t);
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
const qo = (e, t = {}) => {
  const n = M(t.mode) ? t.mode : "normal", r = M(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], l = Vo(e, {
    filename: r,
    breakLineCode: s,
    needIndent: a
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), o.length > 0 && (l.push(`const { ${fr(o.map((_) => `${_}: _${_}`), ", ")} } = ctx`), l.newline()), l.push("return "), kt(l, e), l.deindent(a), l.push("}"), delete e.helpers;
  const { code: u, map: m } = l.context();
  return {
    ast: e,
    code: u,
    map: m ? m.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Jo(e, t = {}) {
  const n = ie({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, l = zo(n).parse(e);
  return r ? (a && Bo(l), s && Ct(l), { ast: l, code: "" }) : (Ho(l, n), qo(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Zo() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (pn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ie(e) {
  return B(e) && pr(e) === 0 && (Se(e, "b") || Se(e, "body"));
}
const js = ["b", "body"];
function Qo(e) {
  return Ke(e, js);
}
const Hs = ["c", "cases"];
function ei(e) {
  return Ke(e, Hs, []);
}
const Bs = ["s", "static"];
function ti(e) {
  return Ke(e, Bs);
}
const Vs = ["i", "items"];
function ni(e) {
  return Ke(e, Vs, []);
}
const Gs = ["t", "type"];
function pr(e) {
  return Ke(e, Gs);
}
const Ks = ["v", "value"];
function ln(e, t) {
  const n = Ke(e, Ks);
  if (n != null)
    return n;
  throw Jt(t);
}
const Ys = ["m", "modifier"];
function ri(e) {
  return Ke(e, Ys);
}
const Xs = ["k", "key"];
function si(e) {
  const t = Ke(e, Xs);
  if (t)
    return t;
  throw Jt(
    6
    /* NodeTypes.Linked */
  );
}
function Ke(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (Se(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const qs = [
  ...js,
  ...Hs,
  ...Bs,
  ...Vs,
  ...Xs,
  ...Ys,
  ...Ks,
  ...Gs
];
function Jt(e) {
  return new Error(`unhandled node type: ${e}`);
}
function zn(e) {
  return (n) => ai(n, e);
}
function ai(e, t) {
  const n = Qo(t);
  if (n == null)
    throw Jt(
      0
      /* NodeTypes.Resource */
    );
  if (pr(n) === 1) {
    const a = ei(n);
    return e.plural(a.reduce((o, l) => [
      ...o,
      Xr(e, l)
    ], []));
  } else
    return Xr(e, n);
}
function Xr(e, t) {
  const n = ti(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = ni(t).reduce((s, a) => [...s, Jn(e, a)], []);
    return e.normalize(r);
  }
}
function Jn(e, t) {
  const n = pr(t);
  switch (n) {
    case 3:
      return ln(t, n);
    case 9:
      return ln(t, n);
    case 4: {
      const r = t;
      if (Se(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (Se(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Jt(n);
    }
    case 5: {
      const r = t;
      if (Se(r, "i") && se(r.i))
        return e.interpolate(e.list(r.i));
      if (Se(r, "index") && se(r.index))
        return e.interpolate(e.list(r.index));
      throw Jt(n);
    }
    case 6: {
      const r = t, s = ri(r), a = si(r);
      return e.linked(Jn(e, a), s ? Jn(e, s) : void 0, e.type);
    }
    case 7:
      return ln(t, n);
    case 8:
      return ln(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const oi = (e) => e;
let cn = Y();
function ii(e, t = {}) {
  let n = !1;
  const r = t.onError || Oo;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...Jo(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function li(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && M(e)) {
    ee(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || oi)(e), s = cn[r];
    if (s)
      return s;
    const { ast: a, detectError: o } = ii(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = zn(a);
    return o ? l : cn[r] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = cn[n];
      return r || (cn[n] = zn(e));
    } else
      return zn(e);
  }
}
const De = {
  INVALID_ARGUMENT: Io,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ci = 24;
function xe(e) {
  return Pn(e, null, void 0);
}
function mr(e, t) {
  return t.locale != null ? qr(t.locale) : qr(e.locale);
}
let jn;
function qr(e) {
  if (M(e))
    return e;
  if (Z(e)) {
    if (e.resolvedOnce && jn != null)
      return jn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (ko(t))
        throw xe(De.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return jn = t;
    } else
      throw xe(De.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw xe(De.NOT_SUPPORT_LOCALE_TYPE);
}
function ui(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...te(t) ? t : B(t) ? Object.keys(t) : M(t) ? [t] : [n]
  ])];
}
function Js(e, t, n) {
  const r = M(n) ? n : En, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let a = s.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let o = [n];
    for (; te(o); )
      o = Jr(a, o, t);
    const l = te(t) || !H(t) ? t : t.default ? t.default : null;
    o = M(l) ? [l] : l, te(o) && Jr(a, o, !1), s.__localeChainCache.set(r, a);
  }
  return a;
}
function Jr(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && ee(r); s++) {
    const a = t[s];
    M(a) && (r = di(e, t[s], n));
  }
  return r;
}
function di(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = fi(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function fi(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (te(n) || H(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Ye = [];
Ye[
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
Ye[
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
Ye[
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
Ye[
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
Ye[
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
Ye[
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
Ye[
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
const hi = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function pi(e) {
  return hi.test(e);
}
function mi(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function gi(e) {
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
function _i(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : pi(t) ? mi(t) : "*" + t;
}
function vi(e) {
  const t = [];
  let n = -1, r = 0, s = 0, a, o, l, u, m, _, E;
  const S = [];
  S[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = l : o += l;
  }, S[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, S[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    S[
      0
      /* Actions.APPEND */
    ](), s++;
  }, S[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, S[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, o === void 0 || (o = _i(o), o === !1))
        return !1;
      S[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function A() {
    const D = e[n + 1];
    if (r === 5 && D === "'" || r === 6 && D === '"')
      return n++, l = "\\" + D, S[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && A())) {
      if (u = gi(a), E = Ye[r], m = E[u] || E.l || 8, m === 8 || (r = m[0], m[1] !== void 0 && (_ = S[m[1]], _ && (l = a, _() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Zr = /* @__PURE__ */ new Map();
function yi(e, t) {
  return B(e) ? e[t] : null;
}
function wi(e, t) {
  if (!B(e))
    return null;
  let n = Zr.get(t);
  if (n || (n = vi(t), n && Zr.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, a = 0;
  for (; a < r; ) {
    const o = n[a];
    if (qs.includes(o) && Ie(s))
      return null;
    const l = s[o];
    if (l === void 0 || Z(s))
      return null;
    s = l, a++;
  }
  return s;
}
const bi = "11.2.2", An = -1, En = "en-US", Qr = "", es = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ci() {
  return {
    upper: (e, t) => t === "text" && M(e) ? e.toUpperCase() : t === "vnode" && B(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && M(e) ? e.toLowerCase() : t === "vnode" && B(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && M(e) ? es(e) : t === "vnode" && B(e) && "__v_isVNode" in e ? es(e.children) : e
  };
}
let Zs;
function Ei(e) {
  Zs = e;
}
let Qs;
function Si(e) {
  Qs = e;
}
let ea;
function Li(e) {
  ea = e;
}
let ta = null;
const ts = (e) => {
  ta = e;
}, ki = () => ta;
let ns = 0;
function Ti(e = {}) {
  const t = Z(e.onWarn) ? e.onWarn : yo, n = M(e.version) ? e.version : bi, r = M(e.locale) || Z(e.locale) ? e.locale : En, s = Z(r) ? En : r, a = te(e.fallbackLocale) || H(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = H(e.messages) ? e.messages : Hn(s), l = H(e.datetimeFormats) ? e.datetimeFormats : Hn(s), u = H(e.numberFormats) ? e.numberFormats : Hn(s), m = ie(Y(), e.modifiers, Ci()), _ = e.pluralRules || Y(), E = Z(e.missing) ? e.missing : null, S = ee(e.missingWarn) || Cn(e.missingWarn) ? e.missingWarn : !0, A = ee(e.fallbackWarn) || Cn(e.fallbackWarn) ? e.fallbackWarn : !0, D = !!e.fallbackFormat, w = !!e.unresolving, k = Z(e.postTranslation) ? e.postTranslation : null, f = H(e.processor) ? e.processor : null, b = ee(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter, y = Z(e.messageCompiler) ? e.messageCompiler : Zs, P = Z(e.messageResolver) ? e.messageResolver : Qs || yi, L = Z(e.localeFallbacker) ? e.localeFallbacker : ea || ui, g = B(e.fallbackContext) ? e.fallbackContext : void 0, V = e, U = B(V.__datetimeFormatters) ? V.__datetimeFormatters : /* @__PURE__ */ new Map(), fe = B(V.__numberFormatters) ? V.__numberFormatters : /* @__PURE__ */ new Map(), ve = B(V.__meta) ? V.__meta : {};
  ns++;
  const Q = {
    version: n,
    cid: ns,
    locale: r,
    fallbackLocale: a,
    messages: o,
    modifiers: m,
    pluralRules: _,
    missing: E,
    missingWarn: S,
    fallbackWarn: A,
    fallbackFormat: D,
    unresolving: w,
    postTranslation: k,
    processor: f,
    warnHtmlMessage: b,
    escapeParameter: v,
    messageCompiler: y,
    messageResolver: P,
    localeFallbacker: L,
    fallbackContext: g,
    onWarn: t,
    __meta: ve
  };
  return Q.datetimeFormats = l, Q.numberFormats = u, Q.__datetimeFormatters = U, Q.__numberFormatters = fe, Q;
}
const Hn = (e) => ({ [e]: Y() });
function gr(e, t, n, r, s) {
  const { missing: a, onWarn: o } = e;
  if (a !== null) {
    const l = a(e, n, t, s);
    return M(l) ? l : t;
  } else
    return t;
}
function Ht(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Ni(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Ii(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Ni(e, t[r]))
      return !0;
  return !1;
}
function rs(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: l } = e, [u, m, _, E] = Zn(...t), S = ee(_.missingWarn) ? _.missingWarn : e.missingWarn;
  ee(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn;
  const A = !!_.part, D = mr(e, _), w = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    D
  );
  if (!M(u) || u === "")
    return new Intl.DateTimeFormat(D, E).format(m);
  let k = {}, f, b = null;
  const v = "datetime format";
  for (let L = 0; L < w.length && (f = w[L], k = n[f] || {}, b = k[u], !H(b)); L++)
    gr(e, u, f, S, v);
  if (!H(b) || !M(f))
    return r ? An : u;
  let y = `${f}__${u}`;
  On(E) || (y = `${y}__${JSON.stringify(E)}`);
  let P = l.get(y);
  return P || (P = new Intl.DateTimeFormat(f, ie({}, b, E)), l.set(y, P)), A ? P.formatToParts(m) : P.format(m);
}
const na = [
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
function Zn(...e) {
  const [t, n, r, s] = e, a = Y();
  let o = Y(), l;
  if (M(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw xe(De.INVALID_ISO_DATE_ARGUMENT);
    const m = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    l = new Date(m);
    try {
      l.toISOString();
    } catch {
      throw xe(De.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Co(t)) {
    if (isNaN(t.getTime()))
      throw xe(De.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (se(t))
    l = t;
  else
    throw xe(De.INVALID_ARGUMENT);
  return M(n) ? a.key = n : H(n) && Object.keys(n).forEach((u) => {
    na.includes(u) ? o[u] = n[u] : a[u] = n[u];
  }), M(r) ? a.locale = r : H(r) && (o = r), H(s) && (o = s), [a.key || "", l, a, o];
}
function ss(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function as(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: l } = e, [u, m, _, E] = Qn(...t), S = ee(_.missingWarn) ? _.missingWarn : e.missingWarn;
  ee(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn;
  const A = !!_.part, D = mr(e, _), w = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    D
  );
  if (!M(u) || u === "")
    return new Intl.NumberFormat(D, E).format(m);
  let k = {}, f, b = null;
  const v = "number format";
  for (let L = 0; L < w.length && (f = w[L], k = n[f] || {}, b = k[u], !H(b)); L++)
    gr(e, u, f, S, v);
  if (!H(b) || !M(f))
    return r ? An : u;
  let y = `${f}__${u}`;
  On(E) || (y = `${y}__${JSON.stringify(E)}`);
  let P = l.get(y);
  return P || (P = new Intl.NumberFormat(f, ie({}, b, E)), l.set(y, P)), A ? P.formatToParts(m) : P.format(m);
}
const ra = [
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
function Qn(...e) {
  const [t, n, r, s] = e, a = Y();
  let o = Y();
  if (!se(t))
    throw xe(De.INVALID_ARGUMENT);
  const l = t;
  return M(n) ? a.key = n : H(n) && Object.keys(n).forEach((u) => {
    ra.includes(u) ? o[u] = n[u] : a[u] = n[u];
  }), M(r) ? a.locale = r : H(r) && (o = r), H(s) && (o = s), [a.key || "", l, a, o];
}
function os(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Oi = (e) => e, Pi = (e) => "", Ai = "text", Ri = (e) => e.length === 0 ? "" : fr(e), Mi = To;
function is(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Di(e) {
  const t = se(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (se(e.named.count) || se(e.named.n)) ? se(e.named.count) ? e.named.count : se(e.named.n) ? e.named.n : t : t;
}
function xi(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Fi(e = {}) {
  const t = e.locale, n = Di(e), r = B(e.pluralRules) && M(t) && Z(e.pluralRules[t]) ? e.pluralRules[t] : is, s = B(e.pluralRules) && M(t) && Z(e.pluralRules[t]) ? is : void 0, a = (f) => f[r(n, f.length, s)], o = e.list || [], l = (f) => o[f], u = e.named || Y();
  se(e.pluralIndex) && xi(n, u);
  const m = (f) => u[f];
  function _(f, b) {
    const v = Z(e.messages) ? e.messages(f, !!b) : B(e.messages) ? e.messages[f] : !1;
    return v || (e.parent ? e.parent.message(f) : Pi);
  }
  const E = (f) => e.modifiers ? e.modifiers[f] : Oi, S = H(e.processor) && Z(e.processor.normalize) ? e.processor.normalize : Ri, A = H(e.processor) && Z(e.processor.interpolate) ? e.processor.interpolate : Mi, D = H(e.processor) && M(e.processor.type) ? e.processor.type : Ai, k = {
    list: l,
    named: m,
    plural: a,
    linked: (f, ...b) => {
      const [v, y] = b;
      let P = "text", L = "";
      b.length === 1 ? B(v) ? (L = v.modifier || L, P = v.type || P) : M(v) && (L = v || L) : b.length === 2 && (M(v) && (L = v || L), M(y) && (P = y || P));
      const g = _(f, !0)(k), V = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && te(g) && L ? g[0] : g
      );
      return L ? E(L)(V, P) : V;
    },
    message: _,
    type: D,
    interpolate: A,
    normalize: S,
    values: ie(Y(), o, u)
  };
  return k;
}
const ls = () => "", Fe = (e) => Z(e);
function cs(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: o, messages: l } = e, [u, m] = er(...t), _ = ee(m.missingWarn) ? m.missingWarn : e.missingWarn, E = ee(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, S = ee(m.escapeParameter) ? m.escapeParameter : e.escapeParameter, A = !!m.resolvedMessage, D = M(m.default) || ee(m.default) ? ee(m.default) ? a ? u : () => u : m.default : n ? a ? u : () => u : null, w = n || D != null && (M(D) || Z(D)), k = mr(e, m);
  S && $i(m);
  let [f, b, v] = A ? [
    u,
    k,
    l[k] || Y()
  ] : sa(e, u, k, o, E, _), y = f, P = u;
  if (!A && !(M(y) || Ie(y) || Fe(y)) && w && (y = D, P = y), !A && (!(M(y) || Ie(y) || Fe(y)) || !M(b)))
    return s ? An : u;
  let L = !1;
  const g = () => {
    L = !0;
  }, V = Fe(y) ? y : aa(e, u, b, y, P, g);
  if (L)
    return y;
  const U = zi(e, b, v, m), fe = Fi(U), ve = Wi(e, V, fe);
  let Q = r ? r(ve, u) : ve;
  return S && M(Q) && (Q = So(Q)), Q;
}
function $i(e) {
  te(e.list) ? e.list = e.list.map((t) => M(t) ? Br(t) : t) : B(e.named) && Object.keys(e.named).forEach((t) => {
    M(e.named[t]) && (e.named[t] = Br(e.named[t]));
  });
}
function sa(e, t, n, r, s, a) {
  const { messages: o, onWarn: l, messageResolver: u, localeFallbacker: m } = e, _ = m(e, r, n);
  let E = Y(), S, A = null;
  const D = "translate";
  for (let w = 0; w < _.length && (S = _[w], E = o[S] || Y(), (A = u(E, t)) === null && (A = E[t]), !(M(A) || Ie(A) || Fe(A))); w++)
    if (!Ii(S, _)) {
      const k = gr(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        S,
        a,
        D
      );
      k !== t && (A = k);
    }
  return [A, S, E];
}
function aa(e, t, n, r, s, a) {
  const { messageCompiler: o, warnHtmlMessage: l } = e;
  if (Fe(r)) {
    const m = r;
    return m.locale = m.locale || n, m.key = m.key || t, m;
  }
  if (o == null) {
    const m = () => r;
    return m.locale = n, m.key = t, m;
  }
  const u = o(r, Ui(e, n, s, r, l, a));
  return u.locale = n, u.key = t, u.source = r, u;
}
function Wi(e, t, n) {
  return t(n);
}
function er(...e) {
  const [t, n, r] = e, s = Y();
  if (!M(t) && !se(t) && !Fe(t) && !Ie(t))
    throw xe(De.INVALID_ARGUMENT);
  const a = se(t) ? String(t) : (Fe(t), t);
  return se(n) ? s.plural = n : M(n) ? s.default = n : H(n) && !On(n) ? s.named = n : te(n) && (s.list = n), se(r) ? s.plural = r : M(r) ? s.default = r : H(r) && ie(s, r), [a, s];
}
function Ui(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw a && a(o), o;
    },
    onCacheKey: (o) => wo(t, n, o)
  };
}
function zi(e, t, n, r) {
  const { modifiers: s, pluralRules: a, messageResolver: o, fallbackLocale: l, fallbackWarn: u, missingWarn: m, fallbackContext: _ } = e, S = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (A, D) => {
      let w = o(n, A);
      if (w == null && (_ || D)) {
        const [, , k] = sa(
          _ || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          A,
          t,
          l,
          u,
          m
        );
        w = o(k, A);
      }
      if (M(w) || Ie(w)) {
        let k = !1;
        const b = aa(e, A, t, w, A, () => {
          k = !0;
        });
        return k ? ls : b;
      } else return Fe(w) ? w : ls;
    }
  };
  return e.processor && (S.processor = e.processor), r.list && (S.list = r.list), r.named && (S.named = r.named), se(r.plural) && (S.pluralIndex = r.plural), S;
}
Zo();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const ji = "11.2.2";
function Hi() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (pn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (pn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (pn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Tt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ci,
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
function Zt(e, ...t) {
  return Pn(e, null, void 0);
}
const tr = /* @__PURE__ */ dt("__translateVNode"), nr = /* @__PURE__ */ dt("__datetimeParts"), rr = /* @__PURE__ */ dt("__numberParts"), Bi = dt("__setPluralRules"), oa = /* @__PURE__ */ dt("__injectWithOption"), sr = /* @__PURE__ */ dt("__dispose");
function Qt(e) {
  if (!B(e) || Ie(e))
    return e;
  for (const t in e)
    if (Se(e, t))
      if (!t.includes("."))
        B(e[t]) && Qt(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, a = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__")
            throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in s || (s[n[o]] = Y()), !B(s[n[o]])) {
            a = !0;
            break;
          }
          s = s[n[o]];
        }
        if (a || (Ie(s) ? qs.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !Ie(s)) {
          const o = s[n[r]];
          B(o) && Qt(o);
        }
      }
  return e;
}
function ia(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: a } = t, o = H(n) ? n : te(r) ? Y() : { [e]: Y() };
  if (te(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: u, resource: m } = l;
      u ? (o[u] = o[u] || Y(), mn(m, o[u])) : mn(m, o);
    } else
      M(l) && mn(JSON.parse(l), o);
  }), s == null && a)
    for (const l in o)
      Se(o, l) && Qt(o[l]);
  return o;
}
function Vi(e) {
  return e.type;
}
function Gi(e, t, n) {
  let r = B(t.messages) ? t.messages : Y();
  "__i18nGlobal" in n && (r = ia(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (B(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (B(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function us(e) {
  return q(io, null, e, 0);
}
function la() {
  return "currentInstance" in Wn ? Wn["currentInstance"] : Wn.getCurrentInstance();
}
const ds = () => [], Ki = () => !1;
let fs = 0;
function hs(e) {
  return (t, n, r, s) => e(n, r, la() || void 0, s);
}
function Yi(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, s = e.flatJson, a = jr ? j : oo;
  let o = ee(e.inheritLocale) ? e.inheritLocale : !0;
  const l = a(
    // prettier-ignore
    t && o ? t.locale.value : M(e.locale) ? e.locale : En
  ), u = a(
    // prettier-ignore
    t && o ? t.fallbackLocale.value : M(e.fallbackLocale) || te(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), m = a(ia(l.value, e)), _ = a(H(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), E = a(H(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let S = t ? t.missingWarn : ee(e.missingWarn) || Cn(e.missingWarn) ? e.missingWarn : !0, A = t ? t.fallbackWarn : ee(e.fallbackWarn) || Cn(e.fallbackWarn) ? e.fallbackWarn : !0, D = t ? t.fallbackRoot : ee(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat, k = Z(e.missing) ? e.missing : null, f = Z(e.missing) ? hs(e.missing) : null, b = Z(e.postTranslation) ? e.postTranslation : null, v = t ? t.warnHtmlMessage : ee(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter;
  const P = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {};
  let L = e.pluralRules || t && t.pluralRules, g;
  g = (() => {
    r && ts(null);
    const h = {
      version: ji,
      locale: l.value,
      fallbackLocale: u.value,
      messages: m.value,
      modifiers: P,
      pluralRules: L,
      missing: f === null ? void 0 : f,
      missingWarn: S,
      fallbackWarn: A,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: v,
      escapeParameter: y,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    h.datetimeFormats = _.value, h.numberFormats = E.value, h.__datetimeFormatters = H(g) ? g.__datetimeFormatters : void 0, h.__numberFormatters = H(g) ? g.__numberFormatters : void 0;
    const T = Ti(h);
    return r && ts(T), T;
  })(), Ht(g, l.value, u.value);
  function U() {
    return [
      l.value,
      u.value,
      m.value,
      _.value,
      E.value
    ];
  }
  const fe = x({
    get: () => l.value,
    set: (h) => {
      g.locale = h, l.value = h;
    }
  }), ve = x({
    get: () => u.value,
    set: (h) => {
      g.fallbackLocale = h, u.value = h, Ht(g, l.value, h);
    }
  }), Q = x(() => m.value), Rt = /* @__PURE__ */ x(() => _.value), Mt = /* @__PURE__ */ x(() => E.value);
  function Dt() {
    return Z(b) ? b : null;
  }
  function xt(h) {
    b = h, g.postTranslation = h;
  }
  function pt() {
    return k;
  }
  function Ft(h) {
    h !== null && (f = hs(h)), k = h, g.missing = f;
  }
  const be = (h, T, z, J, ye, Ze) => {
    U();
    let Pe;
    try {
      r || (g.fallbackContext = t ? ki() : void 0), Pe = h(g);
    } finally {
      r || (g.fallbackContext = void 0);
    }
    if (z !== "translate exists" && // for not `te` (e.g `t`)
    se(Pe) && Pe === An || z === "translate exists" && !Pe) {
      const [Qe, kr] = T();
      return t && D ? J(t) : ye(Qe);
    } else {
      if (Ze(Pe))
        return Pe;
      throw Zt(Tt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Xe(...h) {
    return be((T) => Reflect.apply(cs, null, [T, ...h]), () => er(...h), "translate", (T) => Reflect.apply(T.t, T, [...h]), (T) => T, (T) => M(T));
  }
  function he(...h) {
    const [T, z, J] = h;
    if (J && !B(J))
      throw Zt(Tt.INVALID_ARGUMENT);
    return Xe(T, z, ie({ resolvedMessage: !0 }, J || {}));
  }
  function Oe(...h) {
    return be((T) => Reflect.apply(rs, null, [T, ...h]), () => Zn(...h), "datetime format", (T) => Reflect.apply(T.d, T, [...h]), () => Qr, (T) => M(T) || te(T));
  }
  function $e(...h) {
    return be((T) => Reflect.apply(as, null, [T, ...h]), () => Qn(...h), "number format", (T) => Reflect.apply(T.n, T, [...h]), () => Qr, (T) => M(T) || te(T));
  }
  function $t(h) {
    return h.map((T) => M(T) || se(T) || ee(T) ? us(String(T)) : T);
  }
  const Wt = {
    normalize: $t,
    interpolate: (h) => h,
    type: "vnode"
  };
  function Ut(...h) {
    return be((T) => {
      let z;
      const J = T;
      try {
        J.processor = Wt, z = Reflect.apply(cs, null, [J, ...h]);
      } finally {
        J.processor = null;
      }
      return z;
    }, () => er(...h), "translate", (T) => T[tr](...h), (T) => [us(T)], (T) => te(T));
  }
  function mt(...h) {
    return be((T) => Reflect.apply(as, null, [T, ...h]), () => Qn(...h), "number format", (T) => T[rr](...h), ds, (T) => M(T) || te(T));
  }
  function zt(...h) {
    return be((T) => Reflect.apply(rs, null, [T, ...h]), () => Zn(...h), "datetime format", (T) => T[nr](...h), ds, (T) => M(T) || te(T));
  }
  function gt(h) {
    L = h, g.pluralRules = L;
  }
  function _t(h, T) {
    return be(() => {
      if (!h)
        return !1;
      const z = M(T) ? T : l.value, J = We(z), ye = g.messageResolver(J, h);
      return Ie(ye) || Fe(ye) || M(ye);
    }, () => [h], "translate exists", (z) => Reflect.apply(z.te, z, [h, T]), Ki, (z) => ee(z));
  }
  function qe(h) {
    let T = null;
    const z = Js(g, u.value, l.value);
    for (let J = 0; J < z.length; J++) {
      const ye = m.value[z[J]] || {}, Ze = g.messageResolver(ye, h);
      if (Ze != null) {
        T = Ze;
        break;
      }
    }
    return T;
  }
  function Je(h) {
    const T = qe(h);
    return T ?? (t ? t.tm(h) || {} : {});
  }
  function We(h) {
    return m.value[h] || {};
  }
  function pe(h, T) {
    if (s) {
      const z = { [h]: T };
      for (const J in z)
        Se(z, J) && Qt(z[J]);
      T = z[h];
    }
    m.value[h] = T, g.messages = m.value;
  }
  function Ue(h, T) {
    m.value[h] = m.value[h] || {};
    const z = { [h]: T };
    if (s)
      for (const J in z)
        Se(z, J) && Qt(z[J]);
    T = z[h], mn(T, m.value[h]), g.messages = m.value;
  }
  function vt(h) {
    return _.value[h] || {};
  }
  function i(h, T) {
    _.value[h] = T, g.datetimeFormats = _.value, ss(g, h, T);
  }
  function c(h, T) {
    _.value[h] = ie(_.value[h] || {}, T), g.datetimeFormats = _.value, ss(g, h, T);
  }
  function C(h) {
    return E.value[h] || {};
  }
  function R(h, T) {
    E.value[h] = T, g.numberFormats = E.value, os(g, h, T);
  }
  function X(h, T) {
    E.value[h] = ie(E.value[h] || {}, T), g.numberFormats = E.value, os(g, h, T);
  }
  fs++, t && jr && (Ge(t.locale, (h) => {
    o && (l.value = h, g.locale = h, Ht(g, l.value, u.value));
  }), Ge(t.fallbackLocale, (h) => {
    o && (u.value = h, g.fallbackLocale = h, Ht(g, l.value, u.value));
  }));
  const $ = {
    id: fs,
    locale: fe,
    fallbackLocale: ve,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(h) {
      o = h, h && t && (l.value = t.locale.value, u.value = t.fallbackLocale.value, Ht(g, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(m.value).sort();
    },
    messages: Q,
    get modifiers() {
      return P;
    },
    get pluralRules() {
      return L || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return S;
    },
    set missingWarn(h) {
      S = h, g.missingWarn = S;
    },
    get fallbackWarn() {
      return A;
    },
    set fallbackWarn(h) {
      A = h, g.fallbackWarn = A;
    },
    get fallbackRoot() {
      return D;
    },
    set fallbackRoot(h) {
      D = h;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(h) {
      w = h, g.fallbackFormat = w;
    },
    get warnHtmlMessage() {
      return v;
    },
    set warnHtmlMessage(h) {
      v = h, g.warnHtmlMessage = h;
    },
    get escapeParameter() {
      return y;
    },
    set escapeParameter(h) {
      y = h, g.escapeParameter = h;
    },
    t: Xe,
    getLocaleMessage: We,
    setLocaleMessage: pe,
    mergeLocaleMessage: Ue,
    getPostTranslationHandler: Dt,
    setPostTranslationHandler: xt,
    getMissingHandler: pt,
    setMissingHandler: Ft,
    [Bi]: gt
  };
  return $.datetimeFormats = Rt, $.numberFormats = Mt, $.rt = he, $.te = _t, $.tm = Je, $.d = Oe, $.n = $e, $.getDateTimeFormat = vt, $.setDateTimeFormat = i, $.mergeDateTimeFormat = c, $.getNumberFormat = C, $.setNumberFormat = R, $.mergeNumberFormat = X, $[oa] = n, $[tr] = Ut, $[nr] = zt, $[rr] = mt, $;
}
const _r = {
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
function Xi({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Be ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, Y());
}
function ca() {
  return Be;
}
ie({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => se(e) || !isNaN(e)
  }
}, _r);
function qi(e) {
  return te(e) && !M(e[0]);
}
function ua(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const o = { part: !0 };
    let l = Y();
    e.locale && (o.locale = e.locale), M(e.format) ? o.key = e.format : B(e.format) && (M(e.format.key) && (o.key = e.format.key), l = Object.keys(e.format).reduce((S, A) => n.includes(A) ? ie(Y(), S, { [A]: e.format[A] }) : S, Y()));
    const u = r(e.value, o, l);
    let m = [o.key];
    te(u) ? m = u.map((S, A) => {
      const D = s[S.type], w = D ? D({ [S.type]: S.value, index: A, parts: u }) : [S.value];
      return qi(w) && (w[0].key = `${S.type}-${A}`), w;
    }) : M(u) && (m = [u]);
    const _ = ie(Y(), a), E = M(e.tag) || B(e.tag) ? e.tag : ca();
    return Ws(E, _, m);
  };
}
ie({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, _r);
const Ji = /* @__PURE__ */ dt("global-vue-i18n");
function Rn(e = {}) {
  const t = la();
  if (t == null)
    throw Zt(Tt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Zt(Tt.NOT_INSTALLED);
  const n = Zi(t), r = el(n), s = Vi(t), a = Qi(e, s);
  if (a === "global")
    return Gi(r, e, s), r;
  if (a === "parent") {
    let u = tl(n, t, e.__useComponent);
    return u == null && (u = r), u;
  }
  const o = n;
  let l = o.__getInstance(t);
  if (l == null) {
    const u = ie({}, e);
    "__i18n" in s && (u.__i18n = s.__i18n), r && (u.__root = r), l = Yi(u), o.__composerExtend && (l[sr] = o.__composerExtend(l)), rl(o, t, l), o.__setInstance(t, l);
  }
  return l;
}
function Zi(e) {
  const t = Ve(e.isCE ? Ji : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Zt(e.isCE ? Tt.NOT_INSTALLED_WITH_PROVIDE : Tt.UNEXPECTED_ERROR);
  return t;
}
function Qi(e, t) {
  return On(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function el(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function tl(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = nl(t, n);
  for (; a != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = o.__getInstance(a);
      l != null && (r = l.__composer, n && r && !r[oa] && (r = null));
    }
    if (r != null || s === a)
      break;
    a = a.parent;
  }
  return r;
}
function nl(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function rl(e, t, n) {
  nn(() => {
  }, t), cr(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[sr];
    s && (s(), delete r[sr]);
  }, t);
}
ie({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, _r);
Hi();
Ei(li);
Si(wi);
Li(Js);
function sl(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function al(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var gn;
const we = "__TAURI_TO_IPC_KEY__";
function ol(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function O(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class il {
  get rid() {
    return sl(this, gn, "f");
  }
  constructor(t) {
    gn.set(this, void 0), al(this, gn, t);
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
gn = /* @__PURE__ */ new WeakMap();
class st {
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
    return new it(this.width * t, this.height * t);
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
class it {
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
    return new st(this.width / t, this.height / t);
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
class yt {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof st ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof it ? this.size : this.size.toPhysical(t);
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
class da {
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
    return new Ne(this.x * t, this.y * t);
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
class Ne {
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
    return new da(this.x / t, this.y / t);
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
class un {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof da ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Ne ? this.position : this.position.toPhysical(t);
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
var me;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(me || (me = {}));
async function fa(e, t) {
  await O("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Sn(e, t, n) {
  var r;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return O("plugin:event|listen", {
    event: e,
    target: s,
    handler: ol(t)
  }).then((a) => async () => fa(e, a));
}
async function ll(e, t, n) {
  return Sn(e, (r) => {
    fa(e, r.id), t(r);
  }, n);
}
async function cl(e, t) {
  await O("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function ul(e, t, n) {
  await O("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Xt extends il {
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
      rgba: Ln(t),
      width: n,
      height: r
    }).then((s) => new Xt(s));
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
      bytes: Ln(t)
    }).then((n) => new Xt(n));
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
    return O("plugin:image|from_path", { path: t }).then((n) => new Xt(n));
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
function Ln(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Xt ? e.rid : e;
}
var ar;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(ar || (ar = {}));
class dl {
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
var ps;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ps || (ps = {}));
function ha() {
  return new pa(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Bn() {
  return O("plugin:window|get_all_windows").then((e) => e.map((t) => new pa(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Vn = ["tauri://created", "tauri://error"];
class pa {
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
    return (n = (await Bn()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return ha();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Bn();
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
    for (const t of await Bn())
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
    } : Sn(t, n, {
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
    } : ll(t, n, {
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
    if (Vn.includes(t)) {
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return cl(t, n);
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
    if (Vn.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return ul(t, n, r);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Vn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new Ne(t));
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
    }).then((t) => new Ne(t));
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
    }).then((t) => new it(t));
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
    }).then((t) => new it(t));
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
    return t && (t === ar.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), O("plugin:window|request_user_attention", {
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
      value: t instanceof yt ? t : new yt(t)
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
      value: t instanceof yt ? t : t ? new yt(t) : null
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
      value: t instanceof yt ? t : t ? new yt(t) : null
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
      value: t instanceof un ? t : new un(t)
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
      value: Ln(t)
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
      value: t instanceof un ? t : new un(t)
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
      value: t ? Ln(t) : void 0
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
    return this.listen(me.WINDOW_RESIZED, (n) => {
      n.payload = new it(n.payload), t(n);
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
    return this.listen(me.WINDOW_MOVED, (n) => {
      n.payload = new Ne(n.payload), t(n);
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
    return this.listen(me.WINDOW_CLOSE_REQUESTED, async (n) => {
      const r = new dl(n);
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
    const n = await this.listen(me.DRAG_ENTER, (o) => {
      t({
        ...o,
        payload: {
          type: "enter",
          paths: o.payload.paths,
          position: new Ne(o.payload.position)
        }
      });
    }), r = await this.listen(me.DRAG_OVER, (o) => {
      t({
        ...o,
        payload: {
          type: "over",
          position: new Ne(o.payload.position)
        }
      });
    }), s = await this.listen(me.DRAG_DROP, (o) => {
      t({
        ...o,
        payload: {
          type: "drop",
          paths: o.payload.paths,
          position: new Ne(o.payload.position)
        }
      });
    }), a = await this.listen(me.DRAG_LEAVE, (o) => {
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
    const n = await this.listen(me.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), r = await this.listen(me.WINDOW_BLUR, (s) => {
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
    return this.listen(me.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(me.WINDOW_THEME_CHANGED, t);
  }
}
var ms;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ms || (ms = {}));
var gs;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(gs || (gs = {}));
var _s;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(_s || (_s = {}));
function fl(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Ne(e.position),
    size: new it(e.size)
  };
}
async function hl(e, t) {
  return O("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(fl);
}
var pl = {
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
function ml() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function gl(e, t, n) {
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
var _l = Symbol("icon-context");
function Mn(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var o = ml(), l = Ve(_l, pl);
      return function() {
        var u = a.size, m = a.strokeWidth, _ = a.strokeLinecap, E = a.strokeLinejoin, S = a.theme, A = a.fill, D = a.spin, w = gl(o, {
          size: u,
          strokeWidth: m,
          strokeLinecap: _,
          strokeLinejoin: E,
          theme: S,
          fill: A
        }, l), k = [l.prefix + "-icon"];
        return k.push(l.prefix + "-icon-" + e), t && l.rtl && k.push(l.prefix + "-icon-rtl"), D && k.push(l.prefix + "-icon-spin"), q("span", {
          class: k.join(" ")
        }, [n(w)]);
      };
    }
  };
  return r;
}
const vl = Mn("close-small", !1, function(e) {
  return q("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [q("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), q("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yl = Mn("minus", !1, function(e) {
  return q("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [q("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wl = Mn("mouse", !0, function(e) {
  return q("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [q("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), q("path", {
    d: "M36 16C36 9.37258 30.6274 4 24 4V16H36Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), q("path", {
    d: "M24 4C17.3726 4 12 9.37258 12 16H24V4Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), bl = Mn("radar", !1, function(e) {
  return q("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [q("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), q("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), q("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), q("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), q("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ma = Symbol(), _n = "el", Cl = "is-", nt = (e, t, n, r, s) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), s && (a += `--${s}`), a;
}, ga = Symbol("namespaceContextKey"), El = (e) => {
  const t = e || (Et() ? Ve(ga, j(_n)) : j(_n));
  return x(() => N(t) || _n);
}, vr = (e, t) => {
  const n = El(t);
  return {
    namespace: n,
    b: (w = "") => nt(n.value, e, w, "", ""),
    e: (w) => w ? nt(n.value, e, "", w, "") : "",
    m: (w) => w ? nt(n.value, e, "", "", w) : "",
    be: (w, k) => w && k ? nt(n.value, e, w, k, "") : "",
    em: (w, k) => w && k ? nt(n.value, e, "", w, k) : "",
    bm: (w, k) => w && k ? nt(n.value, e, w, "", k) : "",
    bem: (w, k, f) => w && k && f ? nt(n.value, e, w, k, f) : "",
    is: (w, ...k) => {
      const f = k.length >= 1 ? k[0] : !0;
      return w && f ? `${Cl}${w}` : "";
    },
    cssVar: (w) => {
      const k = {};
      for (const f in w)
        w[f] && (k[`--${n.value}-${f}`] = w[f]);
      return k;
    },
    cssVarName: (w) => `--${n.value}-${w}`,
    cssVarBlock: (w) => {
      const k = {};
      for (const f in w)
        w[f] && (k[`--${n.value}-${e}-${f}`] = w[f]);
      return k;
    },
    cssVarBlockName: (w) => `--${n.value}-${e}-${w}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Sl = Object.prototype.hasOwnProperty, vs = (e, t) => Sl.call(e, t), en = (e) => typeof e == "function", lt = (e) => typeof e == "string", _a = (e) => e !== null && typeof e == "object";
var Ll = typeof global == "object" && global && global.Object === Object && global, kl = typeof self == "object" && self && self.Object === Object && self, yr = Ll || kl || Function("return this")(), Nt = yr.Symbol, va = Object.prototype, Tl = va.hasOwnProperty, Nl = va.toString, Bt = Nt ? Nt.toStringTag : void 0;
function Il(e) {
  var t = Tl.call(e, Bt), n = e[Bt];
  try {
    e[Bt] = void 0;
    var r = !0;
  } catch {
  }
  var s = Nl.call(e);
  return r && (t ? e[Bt] = n : delete e[Bt]), s;
}
var Ol = Object.prototype, Pl = Ol.toString;
function Al(e) {
  return Pl.call(e);
}
var Rl = "[object Null]", Ml = "[object Undefined]", ys = Nt ? Nt.toStringTag : void 0;
function ya(e) {
  return e == null ? e === void 0 ? Ml : Rl : ys && ys in Object(e) ? Il(e) : Al(e);
}
function Dl(e) {
  return e != null && typeof e == "object";
}
var xl = "[object Symbol]";
function wr(e) {
  return typeof e == "symbol" || Dl(e) && ya(e) == xl;
}
function Fl(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var br = Array.isArray, ws = Nt ? Nt.prototype : void 0, bs = ws ? ws.toString : void 0;
function wa(e) {
  if (typeof e == "string")
    return e;
  if (br(e))
    return Fl(e, wa) + "";
  if (wr(e))
    return bs ? bs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ba(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var $l = "[object AsyncFunction]", Wl = "[object Function]", Ul = "[object GeneratorFunction]", zl = "[object Proxy]";
function jl(e) {
  if (!ba(e))
    return !1;
  var t = ya(e);
  return t == Wl || t == Ul || t == $l || t == zl;
}
var Gn = yr["__core-js_shared__"], Cs = function() {
  var e = /[^.]+$/.exec(Gn && Gn.keys && Gn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Hl(e) {
  return !!Cs && Cs in e;
}
var Bl = Function.prototype, Vl = Bl.toString;
function Gl(e) {
  if (e != null) {
    try {
      return Vl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Kl = /[\\^$.*+?()[\]{}|]/g, Yl = /^\[object .+?Constructor\]$/, Xl = Function.prototype, ql = Object.prototype, Jl = Xl.toString, Zl = ql.hasOwnProperty, Ql = RegExp(
  "^" + Jl.call(Zl).replace(Kl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ec(e) {
  if (!ba(e) || Hl(e))
    return !1;
  var t = jl(e) ? Ql : Yl;
  return t.test(Gl(e));
}
function tc(e, t) {
  return e?.[t];
}
function Ca(e, t) {
  var n = tc(e, t);
  return ec(n) ? n : void 0;
}
function nc(e, t) {
  return e === t || e !== e && t !== t;
}
var rc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sc = /^\w*$/;
function ac(e, t) {
  if (br(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || wr(e) ? !0 : sc.test(e) || !rc.test(e) || t != null && e in Object(t);
}
var tn = Ca(Object, "create");
function oc() {
  this.__data__ = tn ? tn(null) : {}, this.size = 0;
}
function ic(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var lc = "__lodash_hash_undefined__", cc = Object.prototype, uc = cc.hasOwnProperty;
function dc(e) {
  var t = this.__data__;
  if (tn) {
    var n = t[e];
    return n === lc ? void 0 : n;
  }
  return uc.call(t, e) ? t[e] : void 0;
}
var fc = Object.prototype, hc = fc.hasOwnProperty;
function pc(e) {
  var t = this.__data__;
  return tn ? t[e] !== void 0 : hc.call(t, e);
}
var mc = "__lodash_hash_undefined__";
function gc(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = tn && t === void 0 ? mc : t, this;
}
function ct(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ct.prototype.clear = oc;
ct.prototype.delete = ic;
ct.prototype.get = dc;
ct.prototype.has = pc;
ct.prototype.set = gc;
function _c() {
  this.__data__ = [], this.size = 0;
}
function Dn(e, t) {
  for (var n = e.length; n--; )
    if (nc(e[n][0], t))
      return n;
  return -1;
}
var vc = Array.prototype, yc = vc.splice;
function wc(e) {
  var t = this.__data__, n = Dn(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : yc.call(t, n, 1), --this.size, !0;
}
function bc(e) {
  var t = this.__data__, n = Dn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Cc(e) {
  return Dn(this.__data__, e) > -1;
}
function Ec(e, t) {
  var n = this.__data__, r = Dn(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Pt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Pt.prototype.clear = _c;
Pt.prototype.delete = wc;
Pt.prototype.get = bc;
Pt.prototype.has = Cc;
Pt.prototype.set = Ec;
var Sc = Ca(yr, "Map");
function Lc() {
  this.size = 0, this.__data__ = {
    hash: new ct(),
    map: new (Sc || Pt)(),
    string: new ct()
  };
}
function kc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function xn(e, t) {
  var n = e.__data__;
  return kc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Tc(e) {
  var t = xn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Nc(e) {
  return xn(this, e).get(e);
}
function Ic(e) {
  return xn(this, e).has(e);
}
function Oc(e, t) {
  var n = xn(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ft(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ft.prototype.clear = Lc;
ft.prototype.delete = Tc;
ft.prototype.get = Nc;
ft.prototype.has = Ic;
ft.prototype.set = Oc;
var Pc = "Expected a function";
function Cr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Pc);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var o = e.apply(this, r);
    return n.cache = a.set(s, o) || a, o;
  };
  return n.cache = new (Cr.Cache || ft)(), n;
}
Cr.Cache = ft;
var Ac = 500;
function Rc(e) {
  var t = Cr(e, function(r) {
    return n.size === Ac && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Mc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dc = /\\(\\)?/g, xc = Rc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Mc, function(n, r, s, a) {
    t.push(s ? a.replace(Dc, "$1") : r || n);
  }), t;
});
function Fc(e) {
  return e == null ? "" : wa(e);
}
function $c(e, t) {
  return br(e) ? e : ac(e, t) ? [e] : xc(Fc(e));
}
function Wc(e) {
  if (typeof e == "string" || wr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Uc(e, t) {
  t = $c(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Wc(t[n++])];
  return n && n == r ? e : void 0;
}
function zc(e, t, n) {
  var r = e == null ? void 0 : Uc(e, t);
  return r === void 0 ? n : r;
}
function jc(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
const Ea = (e) => e === void 0, Es = (e) => typeof e == "boolean", ut = (e) => typeof e == "number", or = (e) => typeof Element > "u" ? !1 : e instanceof Element, Hc = (e) => lt(e) ? !Number.isNaN(Number(e)) : !1;
var Ss;
const ht = typeof window < "u", Bc = (e) => typeof e == "string", Vc = () => {
};
ht && ((Ss = window?.navigator) != null && Ss.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Er(e) {
  return typeof e == "function" ? e() : N(e);
}
function Gc(e) {
  return e;
}
function Sr(e) {
  return co() ? (uo(e), !0) : !1;
}
function Kc(e, t = !0) {
  Et() ? nn(e) : t ? e() : bt(e);
}
function Sa(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, s = j(!1);
  let a = null;
  function o() {
    a && (clearTimeout(a), a = null);
  }
  function l() {
    s.value = !1, o();
  }
  function u(...m) {
    o(), s.value = !0, a = setTimeout(() => {
      s.value = !1, a = null, e(...m);
    }, Er(t));
  }
  return r && (s.value = !0, ht && u()), Sr(l), {
    isPending: lo(s),
    start: u,
    stop: l
  };
}
function La(e) {
  var t;
  const n = Er(e);
  return (t = n?.$el) != null ? t : n;
}
const ka = ht ? window : void 0;
function Ta(...e) {
  let t, n, r, s;
  if (Bc(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = ka) : [t, n, r, s] = e, !t)
    return Vc;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], o = () => {
    a.forEach((_) => _()), a.length = 0;
  }, l = (_, E, S, A) => (_.addEventListener(E, S, A), () => _.removeEventListener(E, S, A)), u = Ge(() => [La(t), Er(s)], ([_, E]) => {
    o(), _ && a.push(...n.flatMap((S) => r.map((A) => l(_, S, A, E))));
  }, { immediate: !0, flush: "post" }), m = () => {
    u(), o();
  };
  return Sr(m), m;
}
function Yc(e, t = !1) {
  const n = j(), r = () => n.value = !!e();
  return r(), Kc(r, t), n;
}
const Ls = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ks = "__vueuse_ssr_handlers__";
Ls[ks] = Ls[ks] || {};
var Ts = Object.getOwnPropertySymbols, Xc = Object.prototype.hasOwnProperty, qc = Object.prototype.propertyIsEnumerable, Jc = (e, t) => {
  var n = {};
  for (var r in e)
    Xc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ts)
    for (var r of Ts(e))
      t.indexOf(r) < 0 && qc.call(e, r) && (n[r] = e[r]);
  return n;
};
function Zc(e, t, n = {}) {
  const r = n, { window: s = ka } = r, a = Jc(r, ["window"]);
  let o;
  const l = Yc(() => s && "ResizeObserver" in s), u = () => {
    o && (o.disconnect(), o = void 0);
  }, m = Ge(() => La(e), (E) => {
    u(), l.value && s && E && (o = new ResizeObserver(t), o.observe(E, a));
  }, { immediate: !0, flush: "post" }), _ = () => {
    u(), m();
  };
  return Sr(_), {
    isSupported: l,
    stop: _
  };
}
var Ns;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ns || (Ns = {}));
var Qc = Object.defineProperty, Is = Object.getOwnPropertySymbols, eu = Object.prototype.hasOwnProperty, tu = Object.prototype.propertyIsEnumerable, Os = (e, t, n) => t in e ? Qc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nu = (e, t) => {
  for (var n in t || (t = {}))
    eu.call(t, n) && Os(e, n, t[n]);
  if (Is)
    for (var n of Is(t))
      tu.call(t, n) && Os(e, n, t[n]);
  return e;
};
const ru = {
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
nu({
  linear: Gc
}, ru);
const Ps = {
  current: 0
}, As = j(0), Na = 2e3, Rs = Symbol("elZIndexContextKey"), Ia = Symbol("zIndexContextKey"), su = (e) => {
  const t = Et() ? Ve(Rs, Ps) : Ps, n = e || (Et() ? Ve(Ia, void 0) : void 0), r = x(() => {
    const o = N(n);
    return ut(o) ? o : Na;
  }), s = x(() => r.value + As.value), a = () => (t.current++, As.value = t.current, s.value);
  return !ht && Ve(Rs), {
    initialZIndex: r,
    currentZIndex: s,
    nextZIndex: a
  };
};
var au = {
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
const ou = (e) => (t, n) => iu(t, n, N(e)), iu = (e, t, n) => zc(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
  var a;
  return `${(a = t?.[s]) != null ? a : `{${s}}`}`;
}), lu = (e) => {
  const t = x(() => N(e).name), n = fo(e) ? e : j(e);
  return {
    lang: t,
    locale: n,
    t: ou(e)
  };
}, Oa = Symbol("localeContextKey"), cu = (e) => {
  const t = e || Ve(Oa, j());
  return lu(x(() => t.value || au));
}, Pa = "__epPropKey", ge = (e) => e, uu = (e) => _a(e) && !!e[Pa], Aa = (e, t) => {
  if (!_a(e) || uu(e))
    return e;
  const { values: n, required: r, default: s, type: a, validator: o } = e, u = {
    type: a,
    required: !!r,
    validator: n || o ? (m) => {
      let _ = !1, E = [];
      if (n && (E = Array.from(n), vs(e, "default") && E.push(s), _ || (_ = E.includes(m))), o && (_ || (_ = o(m))), !_ && E.length > 0) {
        const S = [...new Set(E)].map((A) => JSON.stringify(A)).join(", ");
        ho(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${S}], got value ${JSON.stringify(m)}.`);
      }
      return _;
    } : void 0,
    [Pa]: !0
  };
  return vs(e, "default") && (u.default = s), u;
}, At = (e) => jc(Object.entries(e).map(([t, n]) => [
  t,
  Aa(n, t)
])), du = ["", "default", "small", "large"], fu = Aa({
  type: String,
  values: du,
  required: !1
}), hu = Symbol("size"), pu = Symbol("emptyValuesContextKey"), mu = At({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => en(e) ? !e() : !e
  }
}), Ms = (e) => Object.keys(e), kn = j();
function Ra(e, t = void 0) {
  return Et() ? Ve(ma, kn) : kn;
}
function Ma(e, t) {
  const n = Ra(), r = vr(e, x(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || _n;
  })), s = cu(x(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), a = su(x(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Na;
  })), o = x(() => {
    var l;
    return N(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return Da(x(() => N(n) || {})), {
    ns: r,
    locale: s,
    zIndex: a,
    size: o
  };
}
const Da = (e, t, n = !1) => {
  var r;
  const s = !!Et(), a = s ? Ra() : void 0, o = (r = void 0) != null ? r : s ? po : void 0;
  if (!o)
    return;
  const l = x(() => {
    const u = N(e);
    return a?.value ? gu(a.value, u) : u;
  });
  return o(ma, l), o(Oa, x(() => l.value.locale)), o(ga, x(() => l.value.namespace)), o(Ia, x(() => l.value.zIndex)), o(hu, {
    size: x(() => l.value.size || "")
  }), o(pu, x(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !kn.value) && (kn.value = l.value), l;
}, gu = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ms(e), ...Ms(t)])], r = {};
  for (const s of n)
    r[s] = t[s] !== void 0 ? t[s] : e[s];
  return r;
};
var Fn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
function ir(e, t = "px") {
  if (!e)
    return "";
  if (ut(e) || Hc(e))
    return `${e}${t}`;
  if (lt(e))
    return e;
}
const xa = (e, t) => (e.install = (n) => {
  for (const r of [e, ...Object.values({})])
    n.component(r.name, r);
}, e), Fa = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), _u = At({
  size: {
    type: ge([Number, String])
  },
  color: {
    type: String
  }
}), vu = ae({
  name: "ElIcon",
  inheritAttrs: !1
}), yu = /* @__PURE__ */ ae({
  ...vu,
  props: _u,
  setup(e) {
    const t = e, n = vr("icon"), r = x(() => {
      const { size: s, color: a } = t;
      return !s && !a ? {} : {
        fontSize: Ea(s) ? void 0 : ir(s),
        "--color": a
      };
    });
    return (s, a) => (K(), ne("i", mo({
      class: N(n).b(),
      style: N(r)
    }, s.$attrs), [
      St(s.$slots, "default")
    ], 16));
  }
});
var wu = /* @__PURE__ */ Fn(yu, [["__file", "icon.vue"]]);
const Tn = xa(wu);
/*! Element Plus Icons Vue v2.3.1 */
var bu = /* @__PURE__ */ ae({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (K(), ne("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Cu = bu, Eu = /* @__PURE__ */ ae({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (K(), ne("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), $a = Eu, Su = /* @__PURE__ */ ae({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (K(), ne("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Lu = Su, ku = /* @__PURE__ */ ae({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (K(), ne("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Tu = ku, Nu = /* @__PURE__ */ ae({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (K(), ne("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Iu = Nu;
const Wa = ge([
  String,
  Object,
  Function
]), Ou = {
  Close: $a
}, Pu = {
  Close: $a
}, Nn = {
  success: Tu,
  warning: Iu,
  error: Cu,
  info: Lu
}, Au = (e) => e, vn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ru = At({
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
    type: ge([String, Object, Array])
  },
  offset: {
    type: ge(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Mu = ae({
  name: "ElBadge"
}), Du = /* @__PURE__ */ ae({
  ...Mu,
  props: Ru,
  setup(e, { expose: t }) {
    const n = e, r = vr("badge"), s = x(() => n.isDot ? "" : ut(n.value) && ut(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = x(() => {
      var o, l, u, m, _;
      return [
        {
          backgroundColor: n.color,
          marginRight: ir(-((l = (o = n.offset) == null ? void 0 : o[0]) != null ? l : 0)),
          marginTop: ir((m = (u = n.offset) == null ? void 0 : u[1]) != null ? m : 0)
        },
        (_ = n.badgeStyle) != null ? _ : {}
      ];
    });
    return t({
      content: s
    }), (o, l) => (K(), ne("div", {
      class: re(N(r).b())
    }, [
      St(o.$slots, "default"),
      q(ur, {
        name: `${N(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: at(() => [
          ot(I("sup", {
            class: re([
              N(r).e("content"),
              N(r).em("content", o.type),
              N(r).is("fixed", !!o.$slots.default),
              N(r).is("dot", o.isDot),
              N(r).is("hide-zero", !o.showZero && n.value === 0),
              o.badgeClass
            ]),
            style: Lt(N(a))
          }, [
            St(o.$slots, "content", { value: N(s) }, () => [
              go(de(N(s)), 1)
            ])
          ], 6), [
            [wn, !o.hidden && (N(s) || o.isDot || o.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var xu = /* @__PURE__ */ Fn(Du, [["__file", "badge.vue"]]);
const Fu = xa(xu), $u = At({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ge(Object)
  },
  size: fu,
  button: {
    type: ge(Object)
  },
  experimentalFeatures: {
    type: ge(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ge(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...mu
}), Ee = {};
ae({
  name: "ElConfigProvider",
  props: $u,
  setup(e, { slots: t }) {
    Ge(() => e.message, (r) => {
      Object.assign(Ee, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Da(e);
    return () => St(t, "default", { config: n?.value });
  }
});
const Ua = ["success", "info", "warning", "error"], ce = Au({
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
  appendTo: ht ? document.body : void 0
}), Wu = At({
  customClass: {
    type: String,
    default: ce.customClass
  },
  center: {
    type: Boolean,
    default: ce.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: ce.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: ce.duration
  },
  icon: {
    type: Wa,
    default: ce.icon
  },
  id: {
    type: String,
    default: ce.id
  },
  message: {
    type: ge([
      String,
      Object,
      Function
    ]),
    default: ce.message
  },
  onClose: {
    type: ge(Function),
    default: ce.onClose
  },
  showClose: {
    type: Boolean,
    default: ce.showClose
  },
  type: {
    type: String,
    values: Ua,
    default: ce.type
  },
  plain: {
    type: Boolean,
    default: ce.plain
  },
  offset: {
    type: Number,
    default: ce.offset
  },
  zIndex: {
    type: Number,
    default: ce.zIndex
  },
  grouping: {
    type: Boolean,
    default: ce.grouping
  },
  repeatNum: {
    type: Number,
    default: ce.repeatNum
  }
}), Uu = {
  destroy: () => !0
}, Le = _o([]), zu = (e) => {
  const t = Le.findIndex((s) => s.id === e), n = Le[t];
  let r;
  return t > 0 && (r = Le[t - 1]), { current: n, prev: r };
}, ju = (e) => {
  const { prev: t } = zu(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Hu = (e, t) => Le.findIndex((r) => r.id === e) > 0 ? 16 : t, Bu = ae({
  name: "ElMessage"
}), Vu = /* @__PURE__ */ ae({
  ...Bu,
  props: Wu,
  emits: Uu,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = Pu, { ns: s, zIndex: a } = Ma("message"), { currentZIndex: o, nextZIndex: l } = a, u = j(), m = j(!1), _ = j(0);
    let E;
    const S = x(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), A = x(() => {
      const g = n.type;
      return { [s.bm("icon", g)]: g && Nn[g] };
    }), D = x(() => n.icon || Nn[n.type] || ""), w = x(() => ju(n.id)), k = x(() => Hu(n.id, n.offset) + w.value), f = x(() => _.value + k.value), b = x(() => ({
      top: `${k.value}px`,
      zIndex: o.value
    }));
    function v() {
      n.duration !== 0 && ({ stop: E } = Sa(() => {
        P();
      }, n.duration));
    }
    function y() {
      E?.();
    }
    function P() {
      m.value = !1;
    }
    function L({ code: g }) {
      g === vn.esc && P();
    }
    return nn(() => {
      v(), l(), m.value = !0;
    }), Ge(() => n.repeatNum, () => {
      y(), v();
    }), Ta(document, "keydown", L), Zc(u, () => {
      _.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: m,
      bottom: f,
      close: P
    }), (g, V) => (K(), Re(ur, {
      name: N(s).b("fade"),
      onBeforeLeave: g.onClose,
      onAfterLeave: (U) => g.$emit("destroy"),
      persisted: ""
    }, {
      default: at(() => [
        ot(I("div", {
          id: g.id,
          ref_key: "messageRef",
          ref: u,
          class: re([
            N(s).b(),
            { [N(s).m(g.type)]: g.type },
            N(s).is("center", g.center),
            N(s).is("closable", g.showClose),
            N(s).is("plain", g.plain),
            g.customClass
          ]),
          style: Lt(N(b)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: v
        }, [
          g.repeatNum > 1 ? (K(), Re(N(Fu), {
            key: 0,
            value: g.repeatNum,
            type: N(S),
            class: re(N(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Me("v-if", !0),
          N(D) ? (K(), Re(N(Tn), {
            key: 1,
            class: re([N(s).e("icon"), N(A)])
          }, {
            default: at(() => [
              (K(), Re(Us(N(D))))
            ]),
            _: 1
          }, 8, ["class"])) : Me("v-if", !0),
          St(g.$slots, "default", {}, () => [
            g.dangerouslyUseHTMLString ? (K(), ne(Be, { key: 1 }, [
              Me(" Caution here, message could've been compromised, never use user's input as message "),
              I("p", {
                class: re(N(s).e("content")),
                innerHTML: g.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (K(), ne("p", {
              key: 0,
              class: re(N(s).e("content"))
            }, de(g.message), 3))
          ]),
          g.showClose ? (K(), Re(N(Tn), {
            key: 2,
            class: re(N(s).e("closeBtn")),
            onClick: Yt(P, ["stop"])
          }, {
            default: at(() => [
              q(N(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Me("v-if", !0)
        ], 46, ["id"]), [
          [wn, m.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Gu = /* @__PURE__ */ Fn(Vu, [["__file", "message.vue"]]);
let Ku = 1;
const za = (e) => {
  const t = !e || lt(e) || qt(e) || en(e) ? { message: e } : e, n = {
    ...ce,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (lt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    or(r) || (r = document.body), n.appendTo = r;
  }
  return Es(Ee.grouping) && !n.grouping && (n.grouping = Ee.grouping), ut(Ee.duration) && n.duration === 3e3 && (n.duration = Ee.duration), ut(Ee.offset) && n.offset === 16 && (n.offset = Ee.offset), Es(Ee.showClose) && !n.showClose && (n.showClose = Ee.showClose), n;
}, Yu = (e) => {
  const t = Le.indexOf(e);
  if (t === -1)
    return;
  Le.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Xu = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Ku++}`, s = t.onClose, a = document.createElement("div"), o = {
    ...t,
    id: r,
    onClose: () => {
      s?.(), Yu(_);
    },
    onDestroy: () => {
      bn(null, a);
    }
  }, l = q(Gu, o, en(o.message) || qt(o.message) ? {
    default: en(o.message) ? o.message : () => o.message
  } : null);
  l.appContext = n || It._context, bn(l, a), e.appendChild(a.firstElementChild);
  const u = l.component, _ = {
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
  return _;
}, It = (e = {}, t) => {
  if (!ht)
    return { close: () => {
    } };
  const n = za(e);
  if (n.grouping && Le.length) {
    const s = Le.find(({ vnode: a }) => {
      var o;
      return ((o = a.props) == null ? void 0 : o.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (ut(Ee.max) && Le.length >= Ee.max)
    return { close: () => {
    } };
  const r = Xu(n, t);
  return Le.push(r), r.handler;
};
Ua.forEach((e) => {
  It[e] = (t = {}, n) => {
    const r = za(t);
    return It({ ...r, type: e }, n);
  };
});
function qu(e) {
  for (const t of Le)
    (!e || e === t.props.type) && t.handler.close();
}
It.closeAll = qu;
It._context = null;
const Ju = Fa(It, "$message"), ja = [
  "success",
  "info",
  "warning",
  "error"
], Zu = At({
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
    type: Wa
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: ge([
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
    type: ge(Function),
    default: () => {
    }
  },
  onClose: {
    type: ge(Function),
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
    values: [...ja, ""],
    default: ""
  },
  zIndex: Number
}), Qu = {
  destroy: () => !0
}, ed = ae({
  name: "ElNotification"
}), td = /* @__PURE__ */ ae({
  ...ed,
  props: Zu,
  emits: Qu,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: s } = Ma("notification"), { nextZIndex: a, currentZIndex: o } = s, { Close: l } = Ou, u = j(!1);
    let m;
    const _ = x(() => {
      const v = n.type;
      return v && Nn[n.type] ? r.m(v) : "";
    }), E = x(() => n.type && Nn[n.type] || n.icon), S = x(() => n.position.endsWith("right") ? "right" : "left"), A = x(() => n.position.startsWith("top") ? "top" : "bottom"), D = x(() => {
      var v;
      return {
        [A.value]: `${n.offset}px`,
        zIndex: (v = n.zIndex) != null ? v : o.value
      };
    });
    function w() {
      n.duration > 0 && ({ stop: m } = Sa(() => {
        u.value && f();
      }, n.duration));
    }
    function k() {
      m?.();
    }
    function f() {
      u.value = !1;
    }
    function b({ code: v }) {
      v === vn.delete || v === vn.backspace ? k() : v === vn.esc ? u.value && f() : w();
    }
    return nn(() => {
      w(), a(), u.value = !0;
    }), Ta(document, "keydown", b), t({
      visible: u,
      close: f
    }), (v, y) => (K(), Re(ur, {
      name: N(r).b("fade"),
      onBeforeLeave: v.onClose,
      onAfterLeave: (P) => v.$emit("destroy"),
      persisted: ""
    }, {
      default: at(() => [
        ot(I("div", {
          id: v.id,
          class: re([N(r).b(), v.customClass, N(S)]),
          style: Lt(N(D)),
          role: "alert",
          onMouseenter: k,
          onMouseleave: w,
          onClick: v.onClick
        }, [
          N(E) ? (K(), Re(N(Tn), {
            key: 0,
            class: re([N(r).e("icon"), N(_)])
          }, {
            default: at(() => [
              (K(), Re(Us(N(E))))
            ]),
            _: 1
          }, 8, ["class"])) : Me("v-if", !0),
          I("div", {
            class: re(N(r).e("group"))
          }, [
            I("h2", {
              class: re(N(r).e("title")),
              textContent: de(v.title)
            }, null, 10, ["textContent"]),
            ot(I("div", {
              class: re(N(r).e("content")),
              style: Lt(v.title ? void 0 : { margin: 0 })
            }, [
              St(v.$slots, "default", {}, () => [
                v.dangerouslyUseHTMLString ? (K(), ne(Be, { key: 1 }, [
                  Me(" Caution here, message could've been compromised, never use user's input as message "),
                  I("p", { innerHTML: v.message }, null, 8, ["innerHTML"])
                ], 2112)) : (K(), ne("p", { key: 0 }, de(v.message), 1))
              ])
            ], 6), [
              [wn, v.message]
            ]),
            v.showClose ? (K(), Re(N(Tn), {
              key: 0,
              class: re(N(r).e("closeBtn")),
              onClick: Yt(f, ["stop"])
            }, {
              default: at(() => [
                q(N(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Me("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [wn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var nd = /* @__PURE__ */ Fn(td, [["__file", "notification.vue"]]);
const In = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, lr = 16;
let rd = 1;
const Ot = function(e = {}, t) {
  if (!ht)
    return { close: () => {
    } };
  (lt(e) || qt(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  In[n].forEach(({ vm: _ }) => {
    var E;
    r += (((E = _.el) == null ? void 0 : E.offsetHeight) || 0) + lr;
  }), r += lr;
  const s = `notification_${rd++}`, a = e.onClose, o = {
    ...e,
    offset: r,
    id: s,
    onClose: () => {
      sd(s, n, a);
    }
  };
  let l = document.body;
  or(e.appendTo) ? l = e.appendTo : lt(e.appendTo) && (l = document.querySelector(e.appendTo)), or(l) || (l = document.body);
  const u = document.createElement("div"), m = q(nd, o, en(o.message) ? o.message : qt(o.message) ? () => o.message : null);
  return m.appContext = Ea(t) ? Ot._context : t, m.props.onDestroy = () => {
    bn(null, u);
  }, bn(m, u), In[n].push({ vm: m }), l.appendChild(u.firstElementChild), {
    close: () => {
      m.component.exposed.visible.value = !1;
    }
  };
};
ja.forEach((e) => {
  Ot[e] = (t = {}, n) => ((lt(t) || qt(t)) && (t = {
    message: t
  }), Ot({ ...t, type: e }, n));
});
function sd(e, t, n) {
  const r = In[t], s = r.findIndex(({ vm: m }) => {
    var _;
    return ((_ = m.component) == null ? void 0 : _.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: a } = r[s];
  if (!a)
    return;
  n?.(a);
  const o = a.el.offsetHeight, l = t.split("-")[0];
  r.splice(s, 1);
  const u = r.length;
  if (!(u < 1))
    for (let m = s; m < u; m++) {
      const { el: _, component: E } = r[m].vm, S = Number.parseInt(_.style[l], 10) - o - lr;
      E.props.offset = S;
    }
}
function ad() {
  for (const e of Object.values(In))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ot.closeAll = ad;
Ot._context = null;
const od = Fa(Ot, "$notify"), Kn = {
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
    r === "center" ? Ju({
      message: t,
      type: n,
      duration: s,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : od({
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
}, id = "snippets-code:developer-mode", Ha = "snippets-code:frontend-diagnostics", ld = 240, Vt = "[REDACTED]", yn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Vt}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Vt}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Vt
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Vt}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Vt}`
), Ba = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return yn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return yn(
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
    return yn(String(e));
  }
}, cd = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, ud = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Ha) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Lr = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(id) === "true";
  } catch {
    return !1;
  }
}, dd = (e, t, n) => {
  if (!Lr() || typeof localStorage > "u") return;
  const r = ud();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: cd(),
    message: yn(t),
    data: Ba(n)
  });
  try {
    localStorage.setItem(
      Ha,
      JSON.stringify(r.slice(-ld))
    );
  } catch {
  }
}, fd = () => Lr(), hd = (e) => e === "warn" || e === "error" || !1 || !1 || Lr(), dn = (e, t, n) => {
  dd(e, t, n), hd(e) && O("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Ba(n)
  }).catch(() => {
  });
}, Gt = {
  info: (e, t, ...n) => {
    dn("info", e, t);
  },
  error: (e, t) => {
    dn("error", e, t);
  },
  warn: (e, t) => {
    dn("warn", e, t);
  },
  debug: (e, t) => {
    fd() && dn("debug", e, t);
  }
}, pd = "[screen-recorder]", _e = async (e, t) => {
  const n = performance.now();
  try {
    return await O(e, t);
  } catch (r) {
    throw console.error(`${pd} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: r
    }), r;
  }
}, md = () => _e("screen_recorder_get_ffmpeg_status"), rt = (e) => _e("screen_recorder_set_capture_excluded", { excluded: e }), fn = (e) => _e("screen_recorder_set_passthrough_region", { region: e }), hn = (e) => _e("screen_recorder_set_overlay_window_region", { region: e }), gd = () => _e("screen_recorder_pick_target_window"), _d = () => _e("screen_recorder_close_window"), vd = (e, t) => _e("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), yd = () => _e("screen_recorder_pause_recording"), wd = (e, t) => _e("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), bd = () => _e("screen_recorder_stop_recording"), Cd = () => _e("screen_recorder_cancel_recording"), Ed = () => _e("screen_recorder_cancel_export"), Sd = (e, t) => _e("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), Ds = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0,
  showCursor: !0
});
function Ld() {
  const e = j("selecting"), t = j(Ds()), n = j(null), r = j(null), s = j(""), a = j(null), o = j(0), l = j(0), u = j(null), m = () => {
    l.value = e.value === "recording" && a.value !== null ? o.value + Date.now() - a.value : o.value;
  }, _ = () => {
    u.value !== null && (window.clearInterval(u.value), u.value = null);
  }, E = () => {
    _(), m(), u.value = window.setInterval(() => {
      m();
    }, 250);
  }, S = async () => (n.value = await md(), n.value), A = async (P) => {
    s.value = "", r.value = null;
    const L = n.value ?? await S();
    if (!L.available)
      throw new Error(L.message || "FFmpeg unavailable");
    await vd(P, t.value), e.value = "recording", o.value = 0, l.value = 0, a.value = Date.now(), E();
  }, D = async () => {
    e.value === "recording" && (m(), o.value = l.value, a.value = null, _(), await yd(), e.value = "paused");
  }, w = async (P) => {
    e.value === "paused" && (await wd(P, t.value), e.value = "recording", a.value = Date.now(), E());
  }, k = async () => {
    e.value !== "recording" && e.value !== "paused" || (m(), o.value = l.value, a.value = null, _(), await bd(), e.value = "exporting");
  }, f = async () => {
    e.value = "exporting";
    try {
      return r.value = await Sd(
        t.value,
        Math.round(l.value)
      ), e.value = "completed", r.value;
    } catch (P) {
      throw e.value = "ready", r.value = null, P;
    }
  }, b = async () => {
    await Ed(), e.value = "ready", r.value = null;
  }, v = async () => {
    _(), await Cd(), e.value = "selecting", a.value = null, o.value = 0, l.value = 0, r.value = null;
  }, y = () => {
    e.value = "selecting", a.value = null, o.value = 0, l.value = 0, r.value = null, s.value = "", t.value = Ds();
  };
  return cr(() => {
    _();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: r,
    errorMessage: s,
    elapsedMs: l,
    refreshFfmpegStatus: S,
    begin: A,
    pause: D,
    resume: w,
    stop: k,
    exportFile: f,
    cancelExport: b,
    cancel: v,
    reset: y
  };
}
const kd = { class: "screen-recorder" }, Td = ["onMousedown"], Nd = { class: "window-title" }, Id = { class: "capture-viewport" }, Od = { class: "capture-frame" }, Pd = { class: "control-group control-group--tools" }, Ad = { class: "tool-pill" }, Rd = ["title", "aria-pressed", "disabled"], Md = ["title", "aria-label", "aria-pressed", "disabled"], Dd = { class: "select-field" }, xd = ["disabled"], Fd = ["disabled"], $d = ["disabled"], Wd = { value: "high" }, Ud = { value: "standard" }, zd = { value: "small" }, jd = { class: "dimension-group optional-size" }, Hd = { class: "dimension" }, Bd = ["value"], Vd = { class: "dimension" }, Gd = ["value"], Kd = { class: "control-group control-group--actions" }, Yd = { class: "time" }, Xd = ["title"], qd = { class: "button-label" }, Jd = ["title"], Zd = { class: "button-label" }, Qd = ["title"], ef = { class: "export-progress__meta" }, tf = { class: "export-progress__track" }, nf = ["title"], rf = ["disabled", "title"], sf = { class: "record-label" }, af = {
  key: 0,
  class: "warning"
}, He = "[screen-recorder]", wt = 80, Yn = 400, Kt = 240, Xn = 260, xs = 140, of = 3, Fs = 2, $s = 0, lf = 15, cf = 10, uf = 2, df = /* @__PURE__ */ ae({
  __name: "index",
  setup(e) {
    const t = {
      start: "R",
      pause: "P",
      stop: "S"
    }, { t: n } = Rn(), r = ha(), s = j(null), a = j(null), o = j(null), l = j({ width: 0, height: 0 }), u = j(!1), m = j(!1), _ = j(0), E = j(!1), S = j(null);
    let A = null, D = null, w = null, k = null, f = null, b = null, v = null, y = null;
    const P = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: L,
      settings: g,
      ffmpegStatus: V,
      result: U,
      elapsedMs: fe,
      refreshFfmpegStatus: ve,
      begin: Q,
      pause: Rt,
      resume: Mt,
      stop: Dt,
      exportFile: xt,
      cancelExport: pt,
      cancel: Ft,
      reset: be
    } = Ld(), Xe = j(!1), he = x(
      () => L.value === "recording" || L.value === "paused" || L.value === "exporting"
    ), Oe = x(
      () => g.value.audio && g.value.format === "mp4"
    ), $e = x(
      () => Oe.value && L.value === "recording"
    ), $t = x(() => {
      const d = $e.value && !E.value ? _.value : 0, p = (F, W) => Math.max(0.18, Math.min(1, F + d * W)).toFixed(3);
      return {
        "--bar-1": p(0.28, 0.64),
        "--bar-2": p(0.42, 0.78),
        "--bar-3": p(0.34, 0.94),
        "--bar-4": p(0.22, 0.72)
      };
    }), rn = x(() => {
      if (g.value.format === "gif")
        return "GIF 不支持音频";
      if (E.value && g.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (U.value?.audioDevice)
        return `已录制音频：${U.value.audioDevice}`;
      if (U.value && !U.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (V.value?.available && !V.value.systemAudioAvailable) {
        const d = V.value.audioDevices?.join("、") || "无";
        return g.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${d}` : "录制音频已关闭";
      }
      return g.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Wt = x(
      () => g.value.showCursor ? String(n("screenRecorder.showCursorOn")) : String(n("screenRecorder.showCursorOff"))
    ), Ut = x(
      () => `${n("screenRecorder.start")} (${t.start})`
    ), mt = x(
      () => `${n("screenRecorder.pause")} (${t.pause})`
    ), zt = x(
      () => `${n("screenRecorder.resume")} (${t.pause})`
    ), gt = x(
      () => `${n("screenRecorder.stop")} (${t.stop})`
    ), _t = x(() => {
      const d = S.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(d * 100)));
    }), qe = x(() => {
      const d = S.value;
      return d ? d.totalFrames && d.stage === "frames" ? `${d.message}` : d.message || "正在导出..." : "正在导出...";
    }), Je = x(() => {
      const d = S.value;
      return d?.totalFrames ? `${qe.value} (${d.currentFrame}/${d.totalFrames})` : qe.value;
    }), We = x(() => {
      const d = Math.floor(fe.value / 1e3), p = Math.floor(d / 60).toString().padStart(2, "0"), F = (d % 60).toString().padStart(2, "0");
      return `${p}:${F}`;
    }), pe = async (d) => {
      try {
        await d();
      } catch (p) {
        console.error(`${He} action failed`, p), Gt.error(`${He} action failed`, p), Xe.value || Kn.msg(p?.message || String(p), "error");
      }
    }, Ue = (d) => Math.max(2, Math.floor(Math.round(d) / 2) * 2), vt = (d) => Math.max(1, Math.round(d)), i = (d, p) => Math.abs(d - p) <= uf, c = (d, p) => d === p ? !0 : !d || !p ? !1 : i(d.x, p.x) && i(d.y, p.y) && i(d.width, p.width) && i(d.height, p.height), C = async (d) => {
      c(y, d) || (y = d ? { ...d } : null, await fn(d).catch(() => {
      }));
    }, R = async () => {
      const d = s.value;
      if (!d)
        throw new Error("录制视口尚未准备好");
      const p = d.getBoundingClientRect(), F = await r.scaleFactor(), W = await r.innerPosition(), le = vt(p.width * F), oe = vt(p.height * F);
      if (le < wt || oe < wt)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: p.left,
        y: p.top,
        width: le / F,
        height: oe / F,
        screenX: Math.round(W.x + p.left * F),
        screenY: Math.round(W.y + p.top * F),
        physicalWidth: le,
        physicalHeight: oe,
        scale: F
      };
    }, X = async () => {
      const d = await R(), p = Ue(d.physicalWidth), F = Ue(d.physicalHeight);
      return {
        ...d,
        width: p / d.scale,
        height: F / d.scale,
        physicalWidth: p,
        physicalHeight: F
      };
    }, $ = async () => {
      try {
        const d = await R();
        if ((!i(
          l.value.width,
          d.physicalWidth
        ) || !i(
          l.value.height,
          d.physicalHeight
        )) && (l.value = {
          width: d.physicalWidth,
          height: d.physicalHeight
        }), m.value) {
          const p = a.value?.getBoundingClientRect().height ?? 0, F = o.value?.getBoundingClientRect().height ?? 0;
          await C({
            x: Math.round(d.x * d.scale),
            y: Math.round((d.y + p) * d.scale),
            width: d.physicalWidth,
            height: Math.max(
              1,
              d.physicalHeight - Math.round((p + F) * d.scale)
            )
          });
          return;
        }
        await C({
          x: Math.round(d.x * d.scale),
          y: Math.round(d.y * d.scale),
          width: d.physicalWidth,
          height: d.physicalHeight
        });
      } catch {
        (l.value.width !== 0 || l.value.height !== 0) && (l.value = { width: 0, height: 0 }), await C(null);
      }
    }, h = async () => b || (b = $().finally(() => {
      if (b = null, v) {
        const d = v;
        v = null, C(d);
      }
    }), b), T = () => {
      f === null && (f = requestAnimationFrame(() => {
        f = null, h();
      }));
    }, z = () => {
      u.value || T();
    }, J = () => {
      v = null, y = null;
    }, ye = async () => {
      J(), await fn(null).catch(() => {
      }), await hn(null).catch(() => {
      });
    }, Ze = () => {
      u.value = !1, m.value = !1;
    }, Pe = () => {
      window.setTimeout(() => {
        h();
      }, 120);
    }, Qe = () => new Promise((d) => {
      requestAnimationFrame(() => requestAnimationFrame(() => d()));
    }), kr = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await Qe(), document.documentElement.classList.remove("screen-recorder-repaint"), await Qe();
    }, Va = async () => {
      await r.setIgnoreCursorEvents(!0).catch(() => {
      }), await Qe(), await r.setIgnoreCursorEvents(!1).catch(() => {
      }), await h();
    }, Tr = async () => {
      const [d, p] = await Promise.all([
        r.outerPosition(),
        r.outerSize()
      ]);
      return {
        x: d.x,
        y: d.y,
        width: p.width,
        height: p.height
      };
    }, Nr = async () => {
      if (!m.value) {
        await hn(null).catch(() => {
        });
        return;
      }
      const d = await Tr(), p = await r.scaleFactor(), F = a.value?.getBoundingClientRect().height ?? 0, W = o.value?.getBoundingClientRect().height ?? 0;
      await hn({
        width: d.width,
        height: d.height,
        topHeight: Math.round(F * p),
        bottomHeight: Math.round(W * p)
      }).catch(() => {
      });
    }, Ir = (d, p) => {
      const F = Math.min(d.width, p.width), W = Math.min(d.height, p.height), le = p.x + p.width - F, oe = p.y + p.height - W;
      return {
        x: Math.min(Math.max(d.x, p.x), le),
        y: Math.min(Math.max(d.y, p.y), oe),
        width: F,
        height: W
      };
    }, Ga = (d, p, F) => {
      if (!p) return !1;
      const W = Math.max(8, Math.round(8 * F)), le = p.x + p.width, oe = p.y + p.height, ze = d.screenX + d.physicalWidth, et = d.screenY + d.physicalHeight;
      return d.screenX <= p.x + W && d.screenY <= p.y + W && ze >= le - W && et >= oe - W;
    }, Ka = (d, p, F) => {
      if (!p) return !1;
      const W = Math.max(8, Math.round(8 * F));
      return d.screenX <= p.x + W || d.screenY <= p.y + W || d.screenX + d.physicalWidth >= p.x + p.width - W || d.screenY + d.physicalHeight >= p.y + p.height - W;
    }, Ya = (d, p, F) => {
      if (!F) return d;
      const W = Math.round(lf * p), le = Math.round(cf * p);
      return {
        ...d,
        physicalWidth: Math.max(wt, d.physicalWidth - W),
        physicalHeight: Math.max(
          wt,
          d.physicalHeight - le
        )
      };
    }, Or = async (d) => {
      await r.setSize(
        new it(Math.round(d.width), Math.round(d.height))
      ), await r.setPosition(
        new Ne(Math.round(d.x), Math.round(d.y))
      ), await Qe();
    }, Pr = async () => {
      const [d, p] = await Promise.all([
        R(),
        Tr()
      ]);
      return { actualRegion: d, currentFrame: p };
    }, Xa = async (d, p, F) => {
      const { actualRegion: W, currentFrame: le } = await Pr(), oe = W.screenX - le.x, ze = W.screenY - le.y, et = Math.max(
        0,
        le.width - W.physicalWidth
      ), Ce = Math.max(
        0,
        le.height - W.physicalHeight
      );
      return {
        x: d.screenX - oe,
        y: d.screenY - ze,
        width: Math.max(p, d.physicalWidth + et),
        height: Math.max(F, d.physicalHeight + Ce)
      };
    }, Ar = async () => {
      w?.(), w = null, _.value = 0;
    }, sn = async () => {
      if (!(!Oe.value || w))
        try {
          w = await Sn(
            "screen_recorder_audio_level",
            (d) => {
              if (!$e.value) {
                _.value = 0;
                return;
              }
              const p = Math.max(
                0,
                Math.min(1, Number(d.payload?.level ?? 0))
              );
              _.value = _.value * 0.38 + p * 0.62;
            }
          ), E.value = !1;
        } catch (d) {
          console.error(`${He} audio meter failed`, d), Gt.warn(`${He} audio meter failed`, d), E.value = !0;
        }
    }, qa = async (d) => {
      d.button !== 0 || he.value || (Ze(), await r.setMinSize(new st(Yn, Kt)).catch(() => {
      }), await ye(), await r.startDragging().catch((p) => {
        Kn.msg(p?.message || String(p), "error");
      }), Pe());
    }, Ja = async (d) => {
      he.value || (Ze(), await r.setMinSize(new st(Yn, Kt)).catch(() => {
      }), await ye(), await r.startResizeDragging(d).catch((p) => {
        Kn.msg(p?.message || String(p), "error");
      }), Pe());
    }, Rr = () => pe(async () => {
      S.value = null, await sn(), await rt(!0).catch(() => {
      }), await h(), await Q(await X());
    }), Mr = () => pe(async () => {
      await Rt();
    }), Dr = () => pe(async () => {
      await Mt(await X());
    }), xr = () => pe(async () => {
      S.value = {
        stage: "encode",
        message: g.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await Dt(), _.value = 0, await rt(!1).catch(() => {
      }), await xt(), await h();
    }), Za = () => pe(async () => {
      await pt(), S.value = null, await rt(!1).catch(() => {
      }), await h();
    }), Fr = () => {
      const d = { ...g.value };
      ye(), be(), g.value = d, L.value = "ready", U.value = null, S.value = null, rt(!1).catch(() => {
      }), bt(h), sn();
    }, $n = (d) => {
      if (L.value !== "exporting") {
        if (d === "start") {
          L.value === "ready" ? Rr() : L.value === "completed" && Fr();
          return;
        }
        if (d === "pause") {
          L.value === "recording" ? Mr() : L.value === "paused" && Dr();
          return;
        }
        d === "stop" && (L.value === "recording" || L.value === "paused") && xr();
      }
    }, Qa = async (d) => {
      const p = await hl(d.screenX, d.screenY), F = p?.scaleFactor || await r.scaleFactor(), W = p ? {
        x: p.position.x,
        y: p.position.y,
        width: p.size.width,
        height: p.size.height
      } : null, le = Ga(
        d,
        W,
        F
      ), oe = Ka(
        d,
        W,
        F
      );
      u.value = !0, m.value = oe, await bt(), await Qe(), await r.setMinSize(
        oe ? new st(Xn, xs) : new st(Xn, Kt)
      ).catch(() => {
      });
      const ze = Math.round(Xn * F), et = Math.round(
        (oe ? xs : Kt) * F
      ), Ce = Ya(d, F, !le), Ur = oe && W ? {
        x: Math.max(W.x, Ce.screenX),
        y: Math.max(W.y, Ce.screenY),
        width: Math.max(
          ze,
          Math.min(Ce.physicalWidth, W.width)
        ),
        height: Math.max(
          et,
          Math.min(Ce.physicalHeight, W.height)
        )
      } : await Xa(
        Ce,
        ze,
        et
      );
      try {
        if (await Or(
          W && oe ? Ir(Ur, W) : Ur
        ), await bt(), await Nr(), oe)
          return;
        const an = async () => {
          const { actualRegion: tt, currentFrame: jt } = await Pr(), je = {
            x: Ce.screenX - tt.screenX,
            y: Ce.screenY - tt.screenY,
            width: Ce.physicalWidth - tt.physicalWidth,
            height: Ce.physicalHeight - tt.physicalHeight
          };
          if (Math.abs(je.x) <= $s && Math.abs(je.y) <= $s && Math.abs(je.width) <= Fs && Math.abs(je.height) <= Fs)
            return !0;
          const zr = {
            x: jt.x + je.x,
            y: jt.y + je.y,
            width: Math.max(ze, jt.width + je.width),
            height: Math.max(
              et,
              jt.height + je.height
            )
          };
          return await Or(
            W && oe ? Ir(zr, W) : zr
          ), !1;
        };
        for (let tt = 0; tt < of && !await an(); tt += 1)
          ;
      } catch (an) {
        console.error(`${He} snap correction failed`, an), Gt.warn(`${He} snap correction failed`, an);
      } finally {
        await Va(), await h(), await Nr(), await kr(), await r.setFocus().catch(() => {
        });
      }
    }, eo = () => pe(async () => {
      await ye();
      const d = await gd();
      await Qa(d);
    }), to = () => {
      he.value || g.value.format === "gif" || (g.value.audio = !g.value.audio);
    }, no = () => {
      he.value || (g.value.showCursor = !g.value.showCursor);
    }, ro = async () => {
      await r.minimize();
    }, $r = async () => {
      Xe.value = !0;
      try {
        L.value === "exporting" ? await pt().catch(() => {
        }) : await Ft(), await fn(null).catch(() => {
        }), await rt(!1).catch(() => {
        });
      } catch {
      }
      await _d();
    }, so = async () => {
      U.value && (await h(), await O("open_file_with_default_app", { filePath: U.value.path }));
    }, ao = async () => {
      U.value && (await h(), await O("show_file_in_folder", { filePath: U.value.path }));
    }, Wr = (d) => {
      if (d.repeat || d.ctrlKey || d.metaKey || d.altKey) return;
      const p = d.key.toLowerCase();
      if (p === "r") {
        d.preventDefault(), d.stopPropagation(), $n("start");
        return;
      }
      if (p === "p") {
        d.preventDefault(), d.stopPropagation(), $n("pause");
        return;
      }
      if (p === "s") {
        d.preventDefault(), d.stopPropagation(), $n("stop");
        return;
      }
      d.key === "Escape" && (d.preventDefault(), $r());
    };
    return nn(async () => {
      Gt.info(`${He} frontend mounted`), L.value = "ready", await r.setMinSize(new st(Yn, Kt)).catch(() => {
      }), await rt(!1).catch(() => {
      }), await ve().catch(() => {
      }), await bt(), await h(), await sn(), await bt(), await r.emit("screen_recorder_ready"), Gt.info(`${He} frontend ready emitted`), k = await Sn(
        "screen_recorder_export_progress",
        (d) => {
          S.value = d.payload;
        }
      ).catch(() => null), s.value && (A = new ResizeObserver(() => {
        z();
      }), A.observe(s.value)), D = await r.onMoved(() => {
        z();
      }).catch(() => null), window.addEventListener(
        "resize",
        z
      ), window.addEventListener("keydown", Wr);
    }), Ge(Oe, (d) => {
      d ? sn() : Ar();
    }), Ge(L, (d) => {
      d !== "recording" && (_.value = 0), d !== "exporting" && (S.value = null);
    }), cr(() => {
      A?.disconnect(), D?.(), k?.(), window.removeEventListener(
        "resize",
        z
      ), window.removeEventListener("keydown", Wr), J(), fn(null).catch(() => {
      }), hn(null).catch(() => {
      }), rt(!1).catch(() => {
      }), Ar();
    }), (d, p) => (K(), ne("div", kd, [
      I(
        "div",
        {
          class: re(["recorder-shell", {
            recording: N(L) === "recording",
            paused: N(L) === "paused",
            "snap-aligned": u.value,
            "snap-fullscreen": m.value
          }])
        },
        [
          (K(), ne(
            Be,
            null,
            vo(P, (F) => I("span", {
              key: F.className,
              class: re(["resize-zone", F.className]),
              onMousedown: Yt((W) => Ja(F.direction), ["prevent"])
            }, null, 42, Td)),
            64
            /* STABLE_FRAGMENT */
          )),
          I(
            "header",
            {
              ref_key: "titleBarRef",
              ref: a,
              class: "title-bar",
              onMousedown: qa
            },
            [
              I(
                "span",
                Nd,
                de(d.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              I(
                "div",
                {
                  class: "window-actions",
                  onMousedown: p[0] || (p[0] = Yt(() => {
                  }, ["stop"]))
                },
                [
                  I("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: ro
                  }, [
                    q(N(yl), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  I("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: $r
                  }, [
                    q(N(vl), {
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
          I("main", Id, [
            p[9] || (p[9] = I(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            p[10] || (p[10] = I(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            p[11] || (p[11] = I(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            p[12] || (p[12] = I(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            I("div", Od, [
              I(
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
              p[5] || (p[5] = I(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              p[6] || (p[6] = I(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              p[7] || (p[7] = I(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              p[8] || (p[8] = I(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          I(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: o,
              class: "control-strip"
            },
            [
              I("div", Pd, [
                I("div", Ad, [
                  N(L) === "ready" || N(L) === "completed" ? (K(), ne(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Yt(eo, ["prevent"])
                    },
                    [
                      q(N(bl), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : Me("v-if", !0),
                  I("button", {
                    class: re(["audio-meter", {
                      active: $e.value && _.value > 0.03,
                      "audio-on": Oe.value,
                      metering: $e.value && !E.value,
                      muted: !Oe.value || E.value
                    }]),
                    title: rn.value,
                    "aria-label": "系统声音录制状态",
                    "aria-pressed": N(g).audio && N(g).format === "mp4",
                    disabled: he.value || N(g).format === "gif",
                    onClick: to
                  }, [
                    I(
                      "span",
                      {
                        class: "audio-bars",
                        style: Lt($t.value)
                      },
                      p[13] || (p[13] = [
                        I(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        I(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        I(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        I(
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
                  ], 10, Rd),
                  I("button", {
                    class: re(["icon-control cursor-control", { active: N(g).showCursor }]),
                    title: Wt.value,
                    "aria-label": d.$t("screenRecorder.showCursor"),
                    "aria-pressed": N(g).showCursor,
                    disabled: he.value,
                    onClick: no
                  }, [
                    q(N(wl), {
                      theme: "outline",
                      size: "17",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 10, Md)
                ]),
                I("label", Dd, [
                  ot(I("select", {
                    "onUpdate:modelValue": p[1] || (p[1] = (F) => N(g).fps = F),
                    disabled: he.value
                  }, p[14] || (p[14] = [
                    I(
                      "option",
                      { value: 15 },
                      "15",
                      -1
                      /* HOISTED */
                    ),
                    I(
                      "option",
                      { value: 24 },
                      "24",
                      -1
                      /* HOISTED */
                    ),
                    I(
                      "option",
                      { value: 30 },
                      "30",
                      -1
                      /* HOISTED */
                    ),
                    I(
                      "option",
                      { value: 60 },
                      "60",
                      -1
                      /* HOISTED */
                    )
                  ]), 8, xd), [
                    [Un, N(g).fps]
                  ]),
                  p[15] || (p[15] = I(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                ot(I("select", {
                  "onUpdate:modelValue": p[2] || (p[2] = (F) => N(g).format = F),
                  class: "format-select optional-format",
                  disabled: he.value
                }, p[16] || (p[16] = [
                  I(
                    "option",
                    { value: "mp4" },
                    "MP4",
                    -1
                    /* HOISTED */
                  ),
                  I(
                    "option",
                    { value: "gif" },
                    "GIF",
                    -1
                    /* HOISTED */
                  )
                ]), 8, Fd), [
                  [Un, N(g).format]
                ]),
                ot(I("select", {
                  "onUpdate:modelValue": p[3] || (p[3] = (F) => N(g).quality = F),
                  class: "quality-select optional-quality",
                  disabled: he.value
                }, [
                  I(
                    "option",
                    Wd,
                    de(d.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  I(
                    "option",
                    Ud,
                    de(d.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  I(
                    "option",
                    zd,
                    de(d.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, $d), [
                  [Un, N(g).quality]
                ]),
                I("div", jd, [
                  I("label", Hd, [
                    I("input", {
                      value: l.value.width,
                      readonly: ""
                    }, null, 8, Bd)
                  ]),
                  p[17] || (p[17] = I(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  I("label", Vd, [
                    I("input", {
                      value: l.value.height,
                      readonly: ""
                    }, null, 8, Gd)
                  ]),
                  p[18] || (p[18] = I(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              I("div", Kd, [
                N(L) === "recording" || N(L) === "paused" ? (K(), ne(
                  Be,
                  { key: 0 },
                  [
                    I(
                      "span",
                      Yd,
                      de(We.value),
                      1
                      /* TEXT */
                    ),
                    I("button", {
                      class: "control-button",
                      title: N(L) === "paused" ? zt.value : mt.value,
                      onClick: p[4] || (p[4] = (F) => N(L) === "paused" ? Dr() : Mr())
                    }, [
                      I(
                        "span",
                        qd,
                        de(N(L) === "paused" ? d.$t("screenRecorder.resume") : d.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ], 8, Xd),
                    I("button", {
                      class: "control-button danger",
                      title: gt.value,
                      onClick: xr
                    }, [
                      I(
                        "span",
                        Zd,
                        de(d.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ], 8, Jd)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : N(L) === "exporting" ? (K(), ne(
                  Be,
                  { key: 1 },
                  [
                    I("div", {
                      class: "export-progress",
                      title: Je.value
                    }, [
                      I("div", ef, [
                        I(
                          "span",
                          null,
                          de(qe.value),
                          1
                          /* TEXT */
                        ),
                        I(
                          "strong",
                          null,
                          de(_t.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      I("div", tf, [
                        I(
                          "span",
                          {
                            style: Lt({ width: `${_t.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Qd),
                    I("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: Za
                    }, p[19] || (p[19] = [
                      I(
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
                )) : N(L) === "completed" && N(U) ? (K(), ne(
                  Be,
                  { key: 2 },
                  [
                    I("span", {
                      class: "save-status optional-save-status",
                      title: N(U).path
                    }, de(N(U).hasAudio ? "已保存·有声" : "已保存·无声"), 9, nf),
                    I("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: so
                    }, p[20] || (p[20] = [
                      I(
                        "span",
                        { class: "button-label" },
                        "打开",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    I("button", {
                      class: "control-button",
                      title: "打开所在文件夹",
                      onClick: ao
                    }, p[21] || (p[21] = [
                      I(
                        "span",
                        { class: "button-label" },
                        "文件夹",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    I("button", {
                      class: "control-button",
                      title: "重新录制",
                      onClick: Fr
                    }, p[22] || (p[22] = [
                      I(
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
                )) : (K(), ne("button", {
                  key: 3,
                  class: "record-button",
                  disabled: N(V)?.available === !1 || l.value.width < wt || l.value.height < wt,
                  title: Ut.value,
                  onClick: Rr
                }, [
                  p[23] || (p[23] = I(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  I(
                    "span",
                    sf,
                    de(d.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, rf))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      N(V) && !N(V).available ? (K(), ne(
        "p",
        af,
        de(N(V).message || d.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : Me("v-if", !0)
    ]));
  }
}), ff = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, hf = /* @__PURE__ */ ff(df, [["__scopeId", "data-v-b3ad9fb8"]]), pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hf
}, Symbol.toStringTag, { value: "Module" }));
export {
  gf as activate
};
