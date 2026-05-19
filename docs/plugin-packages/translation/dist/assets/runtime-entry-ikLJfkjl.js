import { P as t } from "./runtime-entry-kBP_wtmk.js";
const n = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: t(() => import("./index-DlETQVtZ.js"))
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: t(() => import("./index-BLB3aICC.js"))
  });
};
export {
  n as activate
};
