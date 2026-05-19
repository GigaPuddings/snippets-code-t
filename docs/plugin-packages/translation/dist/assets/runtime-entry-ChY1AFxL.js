import { P as o } from "./runtime-entry-BlsNyzIU.js";
const r = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/dark-mode",
    name: "DarkMode",
    component: o(() => import("./index-DUuEU-v-.js"))
  }), e.registerWindowShortcut({
    label: "dark_mode"
  });
};
export {
  r as activate
};
