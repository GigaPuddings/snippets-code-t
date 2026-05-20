const o = {
  screenshot: () => import("./runtime-entry-c7NAYGRb.js"),
  translation: () => import("../frontend.js"),
  todo: () => import("./runtime-entry-4V2pPHzx.js"),
  "system-theme": () => import("./runtime-entry-D4ngJwP4.js"),
  "local-launcher": () => import("./runtime-entry-CZt1CAAp.js"),
  "desktop-files": () => import("./runtime-entry-BDdxHGvY.js"),
  "search-engines": () => import("./runtime-entry-B29NCYmW.js"),
  "git-sync": () => import("./runtime-entry-Djs3beZ8.js")
}, a = async (t) => {
  const i = o[t.pluginId];
  return i ? (await (await i()).activate(t), !0) : !1;
};
export {
  a as activateOfficialLocalPlugin
};
