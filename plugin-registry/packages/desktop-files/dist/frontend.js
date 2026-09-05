function s(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function i(t) {
  if (!s(t)) return !1;
  const e = t;
  return (typeof e.id == "number" || typeof e.id == "string") && typeof e.title == "string" && typeof e.content == "string";
}
const n = (t) => {
  t.search.registerProvider({
    source: "desktop-files",
    async search(e) {
      const r = await t.api.invoke(
        "search_desktop_files",
        { query: e }
      );
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
  n as activate
};
