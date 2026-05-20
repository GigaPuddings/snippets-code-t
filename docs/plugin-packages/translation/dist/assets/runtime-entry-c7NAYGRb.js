import { P as t } from "./runtime-entry-DtonpMUQ.js";
const n = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: t(() => import("./index-DYrM8Y-z.js"))
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: t(() => import("./index-NchTe4P6.js"))
  });
};
export {
  n as activate
};
