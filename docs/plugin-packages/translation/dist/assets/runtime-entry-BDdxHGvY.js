import { i } from "./type-guards-B1MgC0AW.js";
const a = (e) => {
  e.registerSearchProvider({
    source: "desktop-files",
    async search(s) {
      const r = await e.api.invoke("search_desktop_files", { query: s });
      return [
        {
          source: "file",
          items: Array.isArray(r) ? r.filter(i) : []
        }
      ];
    }
  });
};
export {
  a as activate
};
