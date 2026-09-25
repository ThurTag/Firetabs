// node_modules/@ionic/core/dist/esm/dir-Dojwmvde.js
var isRTL = (hostEl) => {
  for (let el = hostEl; el; el = el.parentElement) {
    const dir = el.getAttribute("dir")?.toLowerCase();
    if (dir === "rtl") {
      return true;
    }
    if (dir === "ltr") {
      return false;
    }
  }
  return document?.dir?.toLowerCase() === "rtl";
};

export {
  isRTL
};
//# sourceMappingURL=chunk-YIRVZL7S.js.map
