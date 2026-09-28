import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-TM4O7NAW.js";
import {
  componentOnReady
} from "./chunk-GMP63GAW.js";
import "./chunk-2CFS6H4A.js";
import {
  readTask,
  writeTask
} from "./chunk-L25EOFJW.js";
import "./chunk-PAXKX5KU.js";

// node_modules/@ionic/core/dist/esm/status-tap-BsTKKfug.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(async () => {
            contentEl.style.setProperty("--overflow", "hidden");
            await scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          });
        });
      }
    });
  });
};
export {
  startStatusTap
};
//# sourceMappingURL=status-tap-BsTKKfug-FN5TTTCV.js.map
