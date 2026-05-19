const o = {
  screenshot: () => import("./runtime-entry-Cgqw91D3.js"),
  translation: () => import("../frontend.js"),
  todo: () => import("./runtime-entry-wsE0Node.js"),
  "system-theme": () => import("./runtime-entry-C2_GHrsH.js"),
  "local-launcher": () => import("./runtime-entry-BNfu5kz7.js"),
  "desktop-files": () => import("./runtime-entry-BDdxHGvY.js"),
  "search-engines": () => import("./runtime-entry-DUSY8zVb.js"),
  "git-sync": () => import("./runtime-entry-PBDAWuZe.js")
}, a = async (t) => {
  const i = o[t.pluginId];
  return i ? (await (await i()).activate(t), !0) : !1;
};
export {
  a as activateOfficialLocalPlugin
};
