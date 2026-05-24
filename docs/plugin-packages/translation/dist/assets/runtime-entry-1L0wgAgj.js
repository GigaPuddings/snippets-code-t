import { P as o } from "./runtime-entry-C62Reu10.js";
const r = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/dark-mode",
    name: "DarkMode",
    component: o(() => import("./index-DIOAs-Nx.js"))
  }), e.registerWindowShortcut({
    label: "dark_mode"
  });
};
export {
  r as activate
};
