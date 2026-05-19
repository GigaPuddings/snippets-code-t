import { P as t } from "./runtime-entry-CxfepRbR.js";
const n = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: t(() => import("./index-ag36T8Tp.js"))
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: t(() => import("./index-CmO5lKrR.js"))
  });
};
export {
  n as activate
};
