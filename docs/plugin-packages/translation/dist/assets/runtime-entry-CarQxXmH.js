import { P as o } from "./runtime-entry-kBP_wtmk.js";
const r = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/dark-mode",
    name: "DarkMode",
    component: o(() => import("./index-BCRBZDZY.js"))
  }), e.registerWindowShortcut({
    label: "dark_mode"
  });
};
export {
  r as activate
};
