import { P as t } from "./runtime-entry-yPFnsQUl.js";
const n = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: t(() => import("./index-C3xx_KA1.js"))
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: t(() => import("./index-B58w-jz9.js"))
  });
};
export {
  n as activate
};
