import { P as t } from "./runtime-entry-BlsNyzIU.js";
const n = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: t(() => import("./index-CstYnud3.js"))
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: t(() => import("./index-CwjrepUN.js"))
  });
};
export {
  n as activate
};
