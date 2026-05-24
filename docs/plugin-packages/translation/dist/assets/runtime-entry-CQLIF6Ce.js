import { P as t } from "./runtime-entry-C62Reu10.js";
const n = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: t(() => import("./index-B9bfg-TL.js"))
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: t(() => import("./index-DVTEqXxo.js"))
  });
};
export {
  n as activate
};
