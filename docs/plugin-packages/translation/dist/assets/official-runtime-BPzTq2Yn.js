const o = {
  screenshot: () => import("./runtime-entry-ikLJfkjl.js"),
  translation: () => import("../frontend.js"),
  todo: () => import("./runtime-entry-BfY1fMaj.js"),
  "system-theme": () => import("./runtime-entry-CarQxXmH.js"),
  "local-launcher": () => import("./runtime-entry-BDPwGCAG.js"),
  "desktop-files": () => import("./runtime-entry-BDdxHGvY.js"),
  "search-engines": () => import("./runtime-entry-BYnoNuqm.js"),
  "git-sync": () => import("./runtime-entry-CFi2_BLr.js")
}, a = async (t) => {
  const i = o[t.pluginId];
  return i ? (await (await i()).activate(t), !0) : !1;
};
export {
  a as activateOfficialLocalPlugin
};
