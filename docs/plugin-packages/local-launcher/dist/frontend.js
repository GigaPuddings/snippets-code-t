function a(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}
function i(r) {
  if (!a(r)) return !1;
  const t = r;
  return (typeof t.id == "number" || typeof t.id == "string") && typeof t.title == "string" && typeof t.content == "string";
}
const n = (r) => {
  r.registerRoute({
    target: "config",
    path: "local",
    name: "Local",
    component: () => import("./assets/index-srSamYjD.js")
  }), r.registerSearchProvider({
    source: "local-launcher",
    async search(t) {
      const e = [], s = await r.api.invoke("search_apps", { query: t });
      Array.isArray(s) && e.push({
        source: "app",
        items: s.filter(i)
      });
      const o = await r.api.invoke("search_bookmarks", { query: t });
      return Array.isArray(o) && e.push({
        source: "bookmark",
        items: o.filter(i).slice(0, 10)
      }), e;
    }
  });
};
export {
  n as activate
};
