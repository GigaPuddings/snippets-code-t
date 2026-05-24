const i = {
  screenshot: () => import("./runtime-entry-CQLIF6Ce.js"),
  translation: () => import("../frontend.js"),
  todo: () => import("./runtime-entry-C5qZePTu.js"),
  "system-theme": () => import("./runtime-entry-1L0wgAgj.js"),
  "local-launcher": () => import("./runtime-entry-DgSE7kPA.js"),
  "desktop-files": () => import("./runtime-entry-BDdxHGvY.js"),
  "quick-tools": () => import("./runtime-entry-CsV5OgZ6.js"),
  "search-engines": () => import("./runtime-entry-B8lLQduK.js"),
  "git-sync": () => import("./runtime-entry-BOUKxa5f.js")
}, r = async (t) => {
  const o = i[t.pluginId];
  return o ? (await (await o()).activate(t), !0) : !1;
};
export {
  r as activateOfficialLocalPlugin
};
