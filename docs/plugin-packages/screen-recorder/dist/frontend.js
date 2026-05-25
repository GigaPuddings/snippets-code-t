const r = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => import("./assets/index-XQcaZYUR.js")
  });
};
export {
  r as activate
};
