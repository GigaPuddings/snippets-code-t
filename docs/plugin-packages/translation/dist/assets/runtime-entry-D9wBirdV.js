import { P as t } from "./runtime-entry-BvVGrpa1.js";
const n = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: t(() => import("./index-B84HvYLz.js"))
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: t(() => import("./index-EoJWRW_U.js"))
  });
};
export {
  n as activate
};
