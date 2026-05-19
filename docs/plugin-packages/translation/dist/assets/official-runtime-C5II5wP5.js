const o = {
  screenshot: () => import("./runtime-entry-DYfBv2ns.js"),
  translation: () => import("../frontend.js"),
  todo: () => import("./runtime-entry-CcTnT0mR.js"),
  "system-theme": () => import("./runtime-entry-CAo5asOe.js"),
  "local-launcher": () => import("./runtime-entry-CC4LacG6.js"),
  "desktop-files": () => import("./runtime-entry-BDdxHGvY.js"),
  "search-engines": () => import("./runtime-entry-O5BzJYD4.js"),
  "git-sync": () => import("./runtime-entry-YNI3Fvsv.js")
}, a = async (t) => {
  const i = o[t.pluginId];
  return i ? (await (await i()).activate(t), !0) : !1;
};
export {
  a as activateOfficialLocalPlugin
};
