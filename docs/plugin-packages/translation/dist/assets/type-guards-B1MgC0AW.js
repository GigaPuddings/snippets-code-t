function e(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function r(t) {
  if (!e(t)) return !1;
  const n = t;
  return (typeof n.id == "number" || typeof n.id == "string") && typeof n.title == "string" && typeof n.content == "string";
}
export {
  r as i
};
