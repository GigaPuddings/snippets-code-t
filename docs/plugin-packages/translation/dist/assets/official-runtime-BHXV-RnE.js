const o = {
  screenshot: () => import("./runtime-entry-D9wBirdV.js"),
  translation: () => import("../frontend.js"),
  todo: () => import("./runtime-entry-CqN01sQP.js"),
  "system-theme": () => import("./runtime-entry-BRDVBjVa.js"),
  "local-launcher": () => import("./runtime-entry-Dh-TlF-w.js"),
  "desktop-files": () => import("./runtime-entry-BDdxHGvY.js"),
  "search-engines": () => import("./runtime-entry-BXdhVtT4.js"),
  "git-sync": () => import("./runtime-entry-B94q4k1y.js")
}, a = async (t) => {
  const i = o[t.pluginId];
  return i ? (await (await i()).activate(t), !0) : !1;
};
export {
  a as activateOfficialLocalPlugin
};
