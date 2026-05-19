import { I as l, c as h } from "./runtime-entry-BlsNyzIU.js";
const C = l("pushpin", !1, function(n) {
  return h("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
});
function L(n) {
  return n.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}
function g(n) {
  if (!n) return "unknown";
  const s = n.match(/[\u4e00-\u9fa5]/g), a = s ? s.length : 0, c = n.match(/[\u3040-\u30ff]/g), o = c ? c.length : 0, u = n.match(/[\uac00-\ud7af]/g), e = u ? u.length : 0, i = n.match(/[a-zA-Z]/g), t = i ? i.length : 0, r = a + o + e + t;
  return r === 0 ? "unknown" : o >= 3 && o > t && o / r >= 0.2 ? "ja" : e >= 3 && e > a && e > t && e / r >= 0.2 ? "ko" : a > t ? "zh" : t > a ? "en" : "unknown";
}
function d(n) {
  return n === "zh" || n === "en";
}
function j(n) {
  return g(n);
}
export {
  C as P,
  j as a,
  d as c,
  g as d,
  L as p
};
