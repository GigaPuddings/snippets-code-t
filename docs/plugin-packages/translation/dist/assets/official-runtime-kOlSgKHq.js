const i = {
  screenshot: () => import("./runtime-entry-x1bX0blp.js"),
  translation: () => import("../frontend.js"),
  todo: () => import("./runtime-entry-jIpg4jYT.js"),
  "system-theme": () => import("./runtime-entry-BzZELyZh.js"),
  "local-launcher": () => import("./runtime-entry-DYTSIwIj.js"),
  "desktop-files": () => import("./runtime-entry-BDdxHGvY.js"),
  "quick-tools": () => import("./runtime-entry-CsV5OgZ6.js"),
  "search-engines": () => import("./runtime-entry-BmmGOoFZ.js"),
  "git-sync": () => import("./runtime-entry-DUQ5A4_l.js")
}, r = async (t) => {
  const o = i[t.pluginId];
  return o ? (await (await o()).activate(t), !0) : !1;
};
export {
  r as activateOfficialLocalPlugin
};
