const o = {
  screenshot: () => import("./runtime-entry-DRy3a5qW.js"),
  translation: () => import("../frontend.js"),
  todo: () => import("./runtime-entry-B-tUIlPh.js"),
  "system-theme": () => import("./runtime-entry-ChY1AFxL.js"),
  "local-launcher": () => import("./runtime-entry-DC7BJAVk.js"),
  "desktop-files": () => import("./runtime-entry-BDdxHGvY.js"),
  "search-engines": () => import("./runtime-entry-BT1XcEcm.js"),
  "git-sync": () => import("./runtime-entry-BZZt4Y7a.js")
}, a = async (t) => {
  const i = o[t.pluginId];
  return i ? (await (await i()).activate(t), !0) : !1;
};
export {
  a as activateOfficialLocalPlugin
};
