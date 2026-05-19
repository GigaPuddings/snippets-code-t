import { P as t } from "./runtime-entry-fKLy0EIl.js";
import { i } from "./type-guards-B1MgC0AW.js";
const n = (r) => {
  r.registerRoute({
    target: "config",
    path: "local",
    name: "Local",
    component: t(() => import("./index-IArVIa_p.js"))
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
  n as activate
};
