import { P as o } from "./runtime-entry-fKLy0EIl.js";
const r = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/dark-mode",
    name: "DarkMode",
    component: o(() => import("./index-vusrrmRq.js"))
  }), e.registerWindowShortcut({
    label: "dark_mode"
  });
};
export {
  r as activate
};
