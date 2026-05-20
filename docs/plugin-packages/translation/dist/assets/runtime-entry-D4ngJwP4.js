import { P as o } from "./runtime-entry-DtonpMUQ.js";
const r = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/dark-mode",
    name: "DarkMode",
    component: o(() => import("./index-2Y3GTf61.js"))
  }), e.registerWindowShortcut({
    label: "dark_mode"
  });
};
export {
  r as activate
};
