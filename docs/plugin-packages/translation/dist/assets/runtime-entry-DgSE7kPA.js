import { i } from "./type-guards-B1MgC0AW.js";
const c = (r) => {
  r.registerRoute({
    target: "config",
    path: "local",
    name: "Local",
    component: () => import("./index-CdK4soqV.js")
  }), r.registerSearchProvider({
    source: "local-launcher",
    async search(s) {
      const a = [], e = await r.api.invoke("search_apps", { query: s });
      Array.isArray(e) && a.push({
        source: "app",
        items: e.filter(i)
      });
      const o = await r.api.invoke("search_bookmarks", { query: s });
      return Array.isArray(o) && a.push({
        source: "bookmark",
        items: o.filter(i).slice(0, 10)
      }), a;
    }
  });
};
export {
  c as activate
};
