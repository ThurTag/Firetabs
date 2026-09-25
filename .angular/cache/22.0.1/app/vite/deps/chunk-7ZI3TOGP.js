import {
  NgControl
} from "./chunk-ZX3J6GYM.js";
import {
  c as c2,
  l,
  r,
  r2,
  s as s2,
  t
} from "./chunk-XQ6BNJCC.js";
import {
  b,
  c,
  d as d2,
  m,
  n as n2
} from "./chunk-VCCV2WMW.js";
import {
  i
} from "./chunk-YEAQTUYE.js";
import {
  a as a2,
  c as c3,
  n as n3
} from "./chunk-PJKZWHIL.js";
import {
  Pt,
  a,
  d,
  e,
  n,
  o,
  qt,
  s
} from "./chunk-HN2XONWH.js";
import {
  o as o2
} from "./chunk-FBOO75ZN.js";
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  NavigationCancel,
  NavigationError,
  NavigationStart,
  PRIMARY_OUTLET,
  Router,
  RouterLink,
  UrlSerializer
} from "./chunk-UEBBYO7D.js";
import {
  Location,
  LocationStrategy
} from "./chunk-LNDAI4KS.js";
import {
  ApplicationRef,
  Attribute,
  ChangeDetectorRef,
  ContentChild,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgZone,
  Optional,
  Output,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  createComponent,
  inject,
  reflectComponentType,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵcontentQuery,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-JH4GAL5K.js";
import {
  BehaviorSubject,
  Subject,
  __decorate,
  combineLatest,
  distinctUntilChanged,
  filter,
  fromEvent,
  of,
  switchMap
} from "./chunk-YB2C65QT.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// node_modules/@ionic/angular/dist/common/providers/dom-controller.js
var DomController = class _DomController {
  /**
   * Schedules a task to run during the READ phase of the next frame.
   * This task should only read the DOM, but never modify it.
   */
  read(cb) {
    getQueue().read(cb);
  }
  /**
   * Schedules a task to run during the WRITE phase of the next frame.
   * This task should write the DOM, but never READ it.
   */
  write(cb) {
    getQueue().write(cb);
  }
  /** @nocollapse */
  static ɵfac = function DomController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _DomController,
    factory: _DomController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var getQueue = () => {
  const win = typeof window !== "undefined" ? window : null;
  if (win != null) {
    const Ionic = win.Ionic;
    if (Ionic?.queue) {
      return Ionic.queue;
    }
    return {
      read: (cb) => win.requestAnimationFrame(cb),
      write: (cb) => win.requestAnimationFrame(cb)
    };
  }
  return {
    read: (cb) => cb(),
    write: (cb) => cb()
  };
};

// node_modules/@ionic/core/components/p-hHmYLOfE.js
var t2 = (t5, M4, r7, n8, e3) => h(t5[1], M4[1], r7[1], n8[1], e3).map(((h5) => a3(t5[0], M4[0], r7[0], n8[0], h5)));
var a3 = (t5, a6, h5, M4, r7) => r7 * (3 * a6 * Math.pow(r7 - 1, 2) + r7 * (-3 * h5 * r7 + 3 * h5 + M4 * r7)) - t5 * Math.pow(r7 - 1, 3);
var h = (t5, a6, h5, r7, n8) => M((r7 -= n8) - 3 * (h5 -= n8) + 3 * (a6 -= n8) - (t5 -= n8), 3 * h5 - 6 * a6 + 3 * t5, 3 * a6 - 3 * t5, t5).filter(((t6) => t6 >= 0 && t6 <= 1));
var M = (t5, a6, h5, M4) => {
  if (0 === t5) return ((t6, a7, h6) => {
    const M5 = a7 * a7 - 4 * t6 * h6;
    return M5 < 0 ? [] : [(-a7 + Math.sqrt(M5)) / (2 * t6), (-a7 - Math.sqrt(M5)) / (2 * t6)];
  })(a6, h5, M4);
  const r7 = (3 * (h5 /= t5) - (a6 /= t5) * a6) / 3, n8 = (2 * a6 * a6 * a6 - 9 * a6 * h5 + 27 * (M4 /= t5)) / 27;
  if (0 === r7) return [Math.pow(-n8, 1 / 3)];
  if (0 === n8) return [Math.sqrt(-r7), -Math.sqrt(-r7)];
  const e3 = Math.pow(n8 / 2, 2) + Math.pow(r7 / 3, 3);
  if (0 === e3) return [Math.pow(n8 / 2, 0.5) - a6 / 3];
  if (e3 > 0) return [Math.pow(-n8 / 2 + Math.sqrt(e3), 1 / 3) - Math.pow(n8 / 2 + Math.sqrt(e3), 1 / 3) - a6 / 3];
  const u4 = Math.sqrt(Math.pow(-r7 / 3, 3)), o8 = Math.acos(-n8 / (2 * Math.sqrt(Math.pow(-r7 / 3, 3)))), s5 = 2 * Math.pow(u4, 1 / 3);
  return [s5 * Math.cos(o8 / 3) - a6 / 3, s5 * Math.cos((o8 + 2 * Math.PI) / 3) - a6 / 3, s5 * Math.cos((o8 + 4 * Math.PI) / 3) - a6 / 3];
};

// node_modules/@ionic/core/components/p-2ta4uE9-.js
var a4 = (o8) => c4(o8);
var d3 = (o8, i4) => ("string" == typeof o8 && (i4 = o8, o8 = void 0), a4(o8).includes(i4));
var c4 = (o8 = window) => {
  if (void 0 === o8) return [];
  o8.Ionic = o8.Ionic || {};
  let i4 = o8.Ionic.platforms;
  return null == i4 && (i4 = o8.Ionic.platforms = p(o8), i4.forEach(((i5) => o8.document.documentElement.classList.add(`plt-${i5}`)))), i4;
};
var p = (i4) => {
  const t5 = n.get("platform");
  return Object.keys(g).filter(((o8) => {
    const e3 = t5?.[o8];
    return "function" == typeof e3 ? e3(i4) : g[o8](i4);
  }));
};
var m2 = (o8) => !!b2(o8, /iPad/i) || !(!b2(o8, /Macintosh/i) || !f(o8));
var l2 = (o8) => b2(o8, /android|sink/i);
var f = (o8) => y(o8, "(any-pointer:coarse)");
var u = (o8) => h2(o8) || w(o8);
var h2 = (o8) => !!(o8.cordova || o8.phonegap || o8.PhoneGap);
var w = (o8) => {
  const i4 = o8.Capacitor;
  return !!i4?.isNativePlatform?.();
};
var b2 = (o8, i4) => i4.test(o8.navigator.userAgent);
var y = (o8, i4) => o8.matchMedia?.(i4).matches;
var g = { ipad: m2, iphone: (o8) => b2(o8, /iPhone/i), ios: (o8) => b2(o8, /iPhone|iPod/i) || m2(o8), android: l2, phablet: (o8) => {
  const i4 = o8.innerWidth, t5 = o8.innerHeight, e3 = Math.min(i4, t5), n8 = Math.max(i4, t5);
  return e3 > 390 && e3 < 520 && n8 > 620 && n8 < 800;
}, tablet: (o8) => {
  const i4 = o8.innerWidth, t5 = o8.innerHeight, e3 = Math.min(i4, t5), n8 = Math.max(i4, t5);
  return m2(o8) || ((o9) => l2(o9) && !b2(o9, /mobile/i))(o8) || e3 > 460 && e3 < 820 && n8 > 780 && n8 < 1400;
}, cordova: h2, capacitor: w, electron: (o8) => b2(o8, /electron/i), pwa: (o8) => !(!o8.matchMedia?.("(display-mode: standalone)").matches && !o8.navigator.standalone), mobile: f, mobileweb: (o8) => f(o8) && !u(o8), desktop: (o8) => !f(o8), hybrid: u };
var M2;
var v = (o8) => o8 && qt(o8) || M2;
var P = (n8 = {}) => {
  if ("undefined" == typeof window) return;
  const a6 = window.document, p4 = window, m4 = p4.Ionic = p4.Ionic || {}, l6 = __spreadValues(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, e(p4)), { persistConfig: false }), m4.config), s(p4)), n8);
  n.reset(l6), n.getBoolean("persistConfig") && o(p4, l6), c4(p4), m4.config = n, m4.mode = M2 = n.get("mode", a6.documentElement.getAttribute("mode") || (d3(p4, "ios") ? "ios" : "md")), n.set("mode", M2), a6.documentElement.setAttribute("mode", M2), a6.documentElement.classList.add(M2), n.getBoolean("_testing") && n.set("animated", false);
  const f4 = (o8) => o8.tagName?.startsWith("ION-"), u4 = (o8) => ["ios", "md"].includes(o8);
  Pt(((o8) => {
    for (; o8; ) {
      const i4 = o8.mode || o8.getAttribute("mode");
      if (i4) {
        if (u4(i4)) return i4;
        f4(o8) && a('Invalid ionic mode: "' + i4 + '", expected: "ios" or "md"');
      }
      o8 = o8.parentElement;
    }
    return M2;
  }));
};

// node_modules/@ionic/core/components/p-DBGxvxkE.js
var o3 = (o8) => {
  try {
    if (o8 instanceof h3) return o8.value;
    if (!r3() || "string" != typeof o8 || "" === o8) return o8;
    if (/onload\s*=/i.test(o8)) return a("sanitizeDOMString - Content was discarded because it appears to contain an onload handler:", o8.substring(0, 100)), "";
    const e3 = document.createDocumentFragment(), n8 = document.createElement("div");
    e3.appendChild(n8), n8.innerHTML = o8, y2.forEach(((t5) => {
      const o9 = e3.querySelectorAll(t5);
      for (let t6 = o9.length - 1; t6 >= 0; t6--) {
        const n9 = o9[t6];
        n9.parentNode ? n9.parentNode.removeChild(n9) : e3.removeChild(n9);
        const r7 = i2(n9);
        for (let t7 = 0; t7 < r7.length; t7++) s3(r7[t7], c5);
      }
    }));
    const a6 = i2(e3);
    for (let t5 = 0; t5 < a6.length; t5++) s3(a6[t5], c5);
    const l6 = document.createElement("div");
    l6.appendChild(e3);
    const f4 = l6.querySelector("div");
    return null !== f4 ? f4.innerHTML : l6.innerHTML;
  } catch (t5) {
    return d("sanitizeDOMString", t5), "";
  }
};
var n4 = (t5) => {
  r3() && (y2.forEach(((e3) => {
    const o8 = t5.querySelectorAll(e3);
    for (let t6 = o8.length - 1; t6 >= 0; t6--) o8[t6].remove();
  })), s3(t5, l3, f2));
};
var s3 = (t5, e3, o8 = []) => {
  if (t5.nodeType && 1 !== t5.nodeType) return;
  if ("undefined" != typeof NamedNodeMap && !(t5.attributes instanceof NamedNodeMap)) return void t5.remove();
  t5.removeAttribute("style");
  for (let n9 = t5.attributes.length - 1; n9 >= 0; n9--) {
    const s5 = t5.attributes.item(n9), i4 = s5.name, r7 = i4.toLowerCase();
    if (!d4(r7, e3, o8)) {
      t5.removeAttribute(i4);
      continue;
    }
    const a6 = s5.value;
    if (null == a6) continue;
    const c8 = a6.replace(p2, "").toLowerCase();
    (c8.includes("javascript:") || c8.includes("vbscript:") || u2.includes(r7) && c8.startsWith("data:") && !m3.test(c8)) && t5.removeAttribute(i4);
  }
  const n8 = i2(t5);
  for (let t6 = 0; t6 < n8.length; t6++) s3(n8[t6], e3, o8);
};
var i2 = (t5) => null != t5.children ? t5.children : t5.childNodes;
var r3 = () => {
  const t5 = window, e3 = t5?.Ionic?.config;
  return !e3 || (e3.get ? e3.get("sanitizerEnabled", true) : true === e3.sanitizerEnabled || void 0 === e3.sanitizerEnabled);
};
var a5 = (t5) => {
  const e3 = [];
  t5.tagName in b3 && e3.push(t5);
  for (const o8 of Object.keys(b3)) e3.push(...Array.from(t5.querySelectorAll(o8.toLowerCase())));
  for (const t6 of e3) {
    if (!(t6.tagName in b3)) continue;
    const e4 = b3[t6.tagName];
    for (const o8 of e4) {
      const e5 = t6[o8];
      "string" == typeof e5 && e5.length > 0 && !t6.hasAttribute(o8) && t6.setAttribute(o8, e5);
    }
  }
};
var c5 = ["class", "id", "href", "src", "name", "slot"];
var l3 = ["class", "id", "slot", "name", "title", "alt", "lang", "dir", "role", "type", "value", "disabled", "width", "height", "href", "src", "color", "size", "shape", "fill", "expand", "mode", "theme", "icon", "label", "label-placement", "justify", "inset", "lines", "ios", "md", "xmlns", "viewbox", "preserveaspectratio", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "stroke-opacity", "stroke-dasharray", "fill-rule", "fill-opacity", "clip-rule", "d", "points", "cx", "cy", "r", "rx", "ry", "x", "y", "x1", "y1", "x2", "y2", "transform", "opacity"];
var f2 = ["aria-", "data-"];
var d4 = (t5, e3, o8) => !!e3.includes(t5) || o8.some(((e4) => t5.startsWith(e4)));
var p2 = /[\u0000-\u0020\u007f-\u00a0]/g;
var u2 = ["href", "src"];
var m3 = /^data:image\/(?:png|jpe?g|gif|webp|bmp|avif|x-icon|vnd\.microsoft\.icon)[;,]/;
var y2 = ["script", "style", "iframe", "meta", "link", "object", "embed", "base"];
var b3 = { "ION-ICON": ["icon", "name", "src", "ios", "md"] };
var h3 = class {
  constructor(t5) {
    this.value = t5;
  }
};

// node_modules/@ionic/core/components/p-DWCzVL3Y.js
var s4 = false;

// node_modules/@ionic/core/components/p-byZM6qHV.js
var n5 = (n8, o8) => null !== o8.closest(n8);
var o4 = (n8, o8) => "string" == typeof n8 && n8.length > 0 ? __spreadValues({ "ion-color": true, [`ion-color-${n8}`]: true }, o8) : o8;
var r4 = (n8) => {
  const o8 = {};
  return ((n9) => void 0 !== n9 ? (Array.isArray(n9) ? n9 : n9.split(" ")).filter(((n10) => null != n10)).map(((n10) => n10.trim())).filter(((n10) => "" !== n10)) : [])(n8).forEach(((n9) => o8[n9] = true)), o8;
};
var t3 = /^[a-z][a-z0-9+\-.]*:/;
var l4 = async (n8, o8, r7, l6) => {
  if (null != n8 && "#" !== n8[0] && !t3.test(n8)) {
    const t5 = document.querySelector("ion-router");
    if (t5) return null != o8 && o8.preventDefault(), t5.push(n8, r7, l6);
  }
  return false;
};

// node_modules/@ionic/core/components/p-CMT0YmOj.js
var o5 = (t5) => r().duration(t5 ? 400 : 300);
var i3 = (t5) => {
  let e3, n8;
  const r7 = t5.width + 8, i4 = r(), u4 = r();
  t5.isEndSide ? (e3 = r7 + "px", n8 = "0px") : (e3 = -r7 + "px", n8 = "0px"), i4.addElement(t5.menuInnerEl).fromTo("transform", `translateX(${e3})`, `translateX(${n8})`);
  const c8 = "ios" === v(t5), p4 = c8 ? 0.2 : 0.25;
  return u4.addElement(t5.backdropEl).fromTo("opacity", 0.01, p4), o5(c8).addAnimation([i4, u4]);
};
var u3 = (t5) => {
  let e3, n8;
  const r7 = v(t5), i4 = t5.width;
  t5.isEndSide ? (e3 = -i4 + "px", n8 = i4 + "px") : (e3 = i4 + "px", n8 = -i4 + "px");
  const u4 = r().addElement(t5.menuInnerEl).fromTo("transform", `translateX(${n8})`, "translateX(0px)"), c8 = r().addElement(t5.contentEl).fromTo("transform", "translateX(0px)", `translateX(${e3})`), p4 = r().addElement(t5.backdropEl).fromTo("opacity", 0.01, 0.32);
  return o5("ios" === r7).addAnimation([u4, c8, p4]);
};
var c6 = (t5) => {
  const e3 = v(t5), n8 = t5.width * (t5.isEndSide ? -1 : 1) + "px", r7 = r().addElement(t5.contentEl).fromTo("transform", "translateX(0px)", `translateX(${n8})`);
  return o5("ios" === e3).addAnimation(r7);
};
var p3 = (() => {
  const s5 = /* @__PURE__ */ new Map(), a6 = [], o8 = async (t5, e3 = false) => {
    if (await d5(), "start" === t5 || "end" === t5) {
      const r7 = a6.filter(((e4) => e4.side === t5 && !e4.disabled));
      if (r7.length >= 1) return r7.length > 1 && e3 && a(`menuController queried for a menu on the "${t5}" side, but ${r7.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, r7.map(((t6) => t6.el))), r7[0].el;
      const s6 = a6.filter(((e4) => e4.side === t5));
      if (s6.length >= 1) return s6.length > 1 && e3 && a(`menuController queried for a menu on the "${t5}" side, but ${s6.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, s6.map(((t6) => t6.el))), s6[0].el;
    } else if (null != t5) return w3(((e4) => e4.menuId === t5));
    return w3(((t6) => !t6.disabled)) || (a6.length > 0 ? a6[0].el : void 0);
  }, p4 = async () => (await d5(), f4()), m4 = (t5, e3) => {
    s5.set(t5, e3);
  }, f4 = () => w3(((t5) => t5._isOpen)), l6 = () => a6.some(((t5) => t5.isAnimating)), w3 = (t5) => {
    const e3 = a6.find(t5);
    if (void 0 !== e3) return e3.el;
  }, d5 = () => Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(((t5) => new Promise(((e3) => n2(t5, e3))))));
  return m4("reveal", c6), m4("push", u3), m4("overlay", i3), o2?.addEventListener("ionBackButton", ((t5) => {
    const n8 = f4();
    n8 && t5.detail.register(c3, (() => n8.close()));
  })), { registerAnimation: m4, get: o8, getMenus: async () => (await d5(), a6.map(((t5) => t5.el))), getOpen: p4, isEnabled: async (t5) => {
    const e3 = await o8(t5);
    return !!e3 && !e3.disabled;
  }, swipeGesture: async (t5, e3) => {
    const n8 = await o8(e3);
    return n8 && (n8.swipeGesture = t5), n8;
  }, isAnimating: async () => (await d5(), l6()), isOpen: async (t5) => {
    if (null != t5) {
      const e3 = await o8(t5);
      return void 0 !== e3 && e3.isOpen();
    }
    return void 0 !== await p4();
  }, enable: async (t5, e3) => {
    const n8 = await o8(e3);
    return n8 && (n8.disabled = !t5), n8;
  }, toggle: async (t5) => {
    const e3 = await o8(t5, true);
    return !!e3 && e3.toggle();
  }, close: async (t5) => {
    const e3 = await (void 0 !== t5 ? o8(t5, true) : p4());
    return void 0 !== e3 && e3.close();
  }, open: async (t5) => {
    const e3 = await o8(t5, true);
    return !!e3 && e3.open();
  }, _getOpenSync: f4, _createAnimation: (t5, e3) => {
    const n8 = s5.get(t5);
    if (!n8) throw new Error("animation not registered");
    return n8(e3);
  }, _register: (t5) => {
    a6.indexOf(t5) < 0 && a6.push(t5);
  }, _unregister: (t5) => {
    const e3 = a6.indexOf(t5);
    e3 > -1 && a6.splice(e3, 1);
  }, _setOpen: async (t5, e3, n8, r7) => {
    if (l6()) return false;
    if (e3) {
      const e4 = await p4();
      e4 && t5.el !== e4 && await e4.setOpen(false, false);
    }
    return t5._setOpen(e3, n8, r7);
  } };
})();

// node_modules/@ionic/core/components/p-CaY8IRMT.js
var t4 = async (t5, o8, r7, n8, i4, s5) => {
  if (t5) return t5.attachViewToDom(o8, r7, i4, n8);
  if (!(s5 || "string" == typeof r7 || r7 instanceof HTMLElement)) throw new Error("framework delegate is missing");
  const a6 = "string" == typeof r7 ? o8.ownerDocument?.createElement(r7) : r7;
  return n8 && n8.forEach(((e3) => a6.classList.add(e3))), i4 && Object.assign(a6, i4), o8.appendChild(a6), await new Promise(((t6) => n2(a6, t6))), a6;
};
var o6 = (e3, t5) => {
  if (t5) {
    if (e3) return e3.removeViewFromDom(t5.parentElement, t5);
    t5.remove();
  }
  return Promise.resolve();
};
var r5 = () => {
  let t5, o8;
  return { attachViewToDom: async (r7, n8, i4 = {}, s5 = []) => {
    let a6;
    if (t5 = r7, n8) {
      const o9 = "string" == typeof n8 ? t5.ownerDocument?.createElement(n8) : n8;
      s5.forEach(((e3) => o9.classList.add(e3))), Object.assign(o9, i4), t5.appendChild(o9), a6 = o9, await new Promise(((t6) => n2(o9, t6)));
    } else if (t5.children.length > 0 && ("ION-MODAL" === t5.tagName || "ION-POPOVER" === t5.tagName) && !(a6 = t5.children[0]).classList.contains("ion-delegate-host")) {
      const e3 = t5.ownerDocument?.createElement("div");
      e3.classList.add("ion-delegate-host"), s5.forEach(((t6) => e3.classList.add(t6))), e3.append(...t5.children), t5.appendChild(e3), a6 = e3;
    }
    const c8 = document.querySelector("ion-app") || document.body;
    return o8 = document.createComment("ionic teleport"), t5.parentNode.insertBefore(o8, t5), c8.appendChild(t5), a6 ?? t5;
  }, removeViewFromDom: () => (t5 && o8 && (o8.parentNode.insertBefore(t5, o8), o8.remove()), Promise.resolve()) };
};

// node_modules/@ionic/core/components/p-DftucGJR.js
var f3 = '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])';
var h4 = (n8, e3) => {
  const o8 = n8.querySelector(f3);
  b4(o8, e3 ?? n8);
};
var v2 = (n8, e3) => {
  const o8 = Array.from(n8.querySelectorAll(f3));
  b4(o8.length > 0 ? o8[o8.length - 1] : null, e3 ?? n8);
};
var b4 = (n8, o8) => {
  let t5 = n8;
  const i4 = n8?.shadowRoot;
  if (i4 && (t5 = i4.querySelector(f3) || n8), t5) {
    const n9 = t5.closest("ion-radio-group");
    n9 ? n9.setFocus() : b(t5);
  } else o8.focus();
};
var w2 = 0;
var y3 = 0;
var g2 = /* @__PURE__ */ new WeakMap();
var x = (n8) => "ION-TOAST" !== n8.tagName && false !== n8.focusTrap && ((n9) => false !== n9.showBackdrop && !((n9.backdropBreakpoint ?? 0) > 0))(n8);
var k = (n8) => ({ create: (e3) => E(n8, e3), dismiss: (e3, o8, t5) => M3(document, e3, o8, n8, t5), getTop: async () => F(document, n8) });
var j = k("ion-alert");
var T = k("ion-action-sheet");
var O = k("ion-loading");
var C = k("ion-modal");
var A = k("ion-popover");
var B = k("ion-toast");
var D = (n8) => {
  "undefined" != typeof document && S(document);
  const e3 = w2++;
  n8.overlayIndex = e3;
};
var I = (n8) => (n8.hasAttribute("id") || (n8.id = "ion-overlay-" + ++y3), n8.id);
var E = (n8, e3) => "undefined" != typeof window && void 0 !== window.customElements ? window.customElements.whenDefined(n8).then((() => {
  const t5 = document.createElement(n8);
  return t5.classList.add("overlay-hidden"), Object.assign(t5, __spreadProps(__spreadValues({}, e3), { hasController: true })), J(document).appendChild(t5), new Promise(((n9) => n2(t5, n9)));
})) : Promise.resolve();
var P2 = (n8, o8) => {
  let t5 = n8;
  const i4 = n8?.shadowRoot;
  i4 && (t5 = i4.querySelector(f3) || n8), t5 ? b(t5) : o8.focus();
};
var S = (n8) => {
  0 === w2 && (w2 = 1, n8.addEventListener("focus", ((e3) => {
    ((n9, e4) => {
      const o8 = F(e4, "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-popover"), i4 = n9.target;
      o8 && i4 && (o8.classList.contains(dn) || (o8.shadowRoot ? (() => {
        if (o8.contains(i4)) o8.lastFocus = i4;
        else if ("ION-TOAST" === i4.tagName) P2(o8.lastFocus, o8);
        else {
          const n10 = o8.lastFocus;
          h4(o8), n10 === e4.activeElement && v2(o8), o8.lastFocus = e4.activeElement;
        }
      })() : (() => {
        if (o8 === i4) o8.lastFocus = void 0;
        else if ("ION-TOAST" === i4.tagName) P2(o8.lastFocus, o8);
        else {
          const n10 = m(o8);
          if (!n10.contains(i4)) return;
          const a6 = n10.querySelector(".ion-overlay-wrapper");
          if (!a6) return;
          if (a6.contains(i4) || i4 === n10.querySelector("ion-backdrop")) o8.lastFocus = i4;
          else {
            const n11 = o8.lastFocus;
            h4(a6, o8), n11 === e4.activeElement && v2(a6, o8), o8.lastFocus = e4.activeElement;
          }
        }
      })()));
    })(e3, n8);
  }), true), n8.addEventListener("ionBackButton", ((e3) => {
    const o8 = F(n8);
    o8?.backdropDismiss && e3.detail.register(a2, (() => {
      o8.dismiss(void 0, en);
    }));
  })), n3() || n8.addEventListener("keydown", ((e3) => {
    if ("Escape" === e3.key) {
      const e4 = F(n8);
      e4?.backdropDismiss && e4.dismiss(void 0, en);
    }
  })));
};
var M3 = (n8, e3, o8, t5, i4) => {
  const a6 = F(n8, t5, i4);
  return a6 ? a6.dismiss(e3, o8) : Promise.reject("overlay does not exist");
};
var N = (n8, e3) => ((n9, e4) => (void 0 === e4 && (e4 = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-popover,ion-toast"), Array.from(n9.querySelectorAll(e4)).filter(((n10) => n10.overlayIndex > 0))))(n8, e3).filter(((n9) => !n9.classList.contains("overlay-hidden")));
var F = (n8, e3, o8) => {
  const t5 = N(n8, e3);
  return (void 0 === o8 ? t5 : t5.filter(((n9) => n9.id === o8))).slice(-1)[0];
};
var G = () => J(document).querySelector("ion-router-outlet, #ion-view-container-root");
var Z = (n8 = false) => {
  const e3 = G();
  e3 && (n8 ? e3.setAttribute("aria-hidden", "true") : e3.removeAttribute("aria-hidden"));
};
var $ = () => {
  "undefined" != typeof document && (N(document).some(((n8) => x(n8))) || (Z(false), document.body.classList.remove(i)));
};
var _ = (n8) => {
  G()?.contains(n8) || Z(true), document.body.classList.add(i);
};
var q = (n8) => {
  if ("undefined" == typeof document) return;
  const e3 = n8;
  x(e3) && _(e3);
};
var z = async (n8, e3, o8, i4, a6) => {
  if (n8.presented) return;
  "ION-TOAST" !== n8.el.tagName && L(n8.el);
  const s5 = n8.el, d5 = x(s5);
  n8.presented = true, n8.willPresent.emit(), d5 && _(s5), n8.willPresentShorthand?.emit();
  const c8 = v(n8), l6 = n8.enterAnimation ? n8.enterAnimation : n.get(e3, "ios" === c8 ? o8 : i4);
  if (await R(n8, l6, n8.el, a6) && (n8.didPresent.emit(), n8.didPresentShorthand?.emit()), n8.keyboardClose && (null === document.activeElement || !n8.el.contains(document.activeElement))) {
    const e4 = m(n8.el).querySelector('[role="dialog"][tabindex]') ?? n8.el;
    try {
      e4.focus({ preventScroll: true });
    } catch {
      e4.focus();
    }
  }
  n8.el.removeAttribute("aria-hidden"), n8.el.removeAttribute("inert");
};
var L = async (n8) => {
  let e3 = document.activeElement;
  if (!e3) return;
  e3.blur();
  const o8 = e3?.shadowRoot;
  o8 && (e3 = o8.querySelector(f3) || e3), await n8.onDidDismiss(), null !== document.activeElement && document.activeElement !== document.body || e3.focus();
};
var V = async (e3, o8, t5, i4, a6, s5, d5) => {
  if (!e3.presented) return false;
  const l6 = (void 0 !== o2 ? N(o2) : []).filter(((n8) => x(n8))), m4 = e3.el;
  x(m4) && 1 === l6.length && l6[0].id === m4.id && (Z(false), document.body.classList.remove(i)), e3.presented = false;
  try {
    e3.el.style.setProperty("pointer-events", "none"), e3.willDismiss.emit({ data: o8, role: t5 }), e3.willDismissShorthand?.emit({ data: o8, role: t5 });
    const n8 = v(e3), c8 = e3.leaveAnimation ? e3.leaveAnimation : n.get(i4, "ios" === n8 ? a6 : s5);
    t5 !== on && await R(e3, c8, e3.el, d5), e3.didDismiss.emit({ data: o8, role: t5 }), e3.didDismissShorthand?.emit({ data: o8, role: t5 }), (g2.get(e3) || []).forEach(((n9) => n9.destroy())), g2.delete(e3), e3.el.classList.add("overlay-hidden"), e3.el.style.removeProperty("pointer-events"), void 0 !== e3.el.lastFocus && (e3.el.lastFocus = void 0);
  } catch (n8) {
    d(`[${e3.el.tagName.toLowerCase()}] - `, n8);
  }
  return e3.el.remove(), true;
};
var J = (n8) => n8.querySelector("ion-app") || n8.body;
var R = async (n8, e3, o8, t5) => {
  o8.classList.remove("overlay-hidden");
  const i4 = e3(n8.el, t5);
  n8.animated && n.getBoolean("animated", true) || i4.duration(0), n8.keyboardClose && i4.beforeAddWrite((() => {
    const n9 = o8.ownerDocument.activeElement;
    n9?.matches("input,ion-input, ion-textarea") && n9.blur();
  }));
  const a6 = g2.get(n8) || [];
  return g2.set(n8, [...a6, i4]), await i4.play(), true;
};
var W = (n8, e3) => {
  let o8;
  const t5 = new Promise(((n9) => o8 = n9));
  return Y(n8, e3, ((n9) => {
    o8(n9.detail);
  })), t5;
};
var Y = (n8, e3, o8) => {
  const t5 = (i4) => {
    c(n8, e3, t5), o8(i4);
  };
  d2(n8, e3, t5);
};
var H = (n8) => "cancel" === n8 || n8 === en;
var K = (n8) => n8();
var Q = (n8, e3) => {
  if ("function" == typeof n8) return n.get("_zoneGate", K)((() => {
    try {
      return n8(e3);
    } catch (n9) {
      throw n9;
    }
  }));
};
var U = ["", "100%", "100vw", "100vh", "100dvw", "100dvh", "100svw", "100svh"];
var X = ["auto", "fit-content", "min-content", "max-content"];
var nn = (n8) => {
  const e3 = n8.trim().toLowerCase();
  return U.includes(e3) ? "fullscreen" : X.some(((n9) => e3.endsWith(n9))) ? "content" : "definite";
};
var en = "backdrop";
var on = "gesture";
var tn = 39;
var an = (n8) => {
  let e3, o8 = false;
  const t5 = r5(), i4 = (i5 = false) => {
    if (e3 && !i5) return { delegate: e3, inline: o8 };
    const { el: a6, hasController: s5, delegate: d5 } = n8;
    return o8 = null !== a6.parentNode && !s5, e3 = o8 ? d5 || t5 : d5, { inline: o8, delegate: e3 };
  };
  return { attachViewToDom: async (e4) => {
    const { delegate: o9 } = i4(true);
    if (o9) return await o9.attachViewToDom(n8.el, e4);
    const { hasController: t6 } = n8;
    if (t6 && void 0 !== e4) throw new Error("framework delegate is missing");
    return null;
  }, removeViewFromDom: () => {
    const { delegate: e4 } = i4();
    e4 && void 0 !== n8.el && e4.removeViewFromDom(n8.el.parentElement, n8.el);
  } };
};
var sn = () => {
  let n8;
  const e3 = () => {
    n8 && (n8(), n8 = void 0);
  };
  return { addClickListener: (o8, t5) => {
    e3();
    const i4 = void 0 !== t5 ? document.getElementById(t5) : null;
    i4 ? n8 = ((n9, e4) => {
      const o9 = () => {
        e4.present();
      };
      return n9.addEventListener("click", o9), () => {
        n9.removeEventListener("click", o9);
      };
    })(i4, o8) : a(`[${o8.tagName.toLowerCase()}] - A trigger element with the ID "${t5}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, o8);
  }, removeClickListener: e3 };
};
var dn = "ion-disable-focus-trap";

// node_modules/@ionic/core/components/index.js
var e2 = (e3) => {
  const { swiper: o8, extendParams: s5 } = e3, t5 = { effect: void 0, direction: "horizontal", initialSlide: 0, loop: false, parallax: false, slidesPerView: 1, spaceBetween: 0, speed: 300, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, touchEventsTarget: "container", freeMode: false, freeModeMomentum: true, freeModeMomentumRatio: 1, freeModeMomentumBounce: true, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: false, freeModeMinimumVelocity: 0.02, autoHeight: false, setWrapperSize: false, zoom: { maxRatio: 3, minRatio: 1, toggle: false }, touchRatio: 1, touchAngle: 45, simulateTouch: true, touchStartPreventDefault: false, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, threshold: 0, touchMoveStopPropagation: true, touchReleaseOnEdges: false, iOSEdgeSwipeDetection: false, iOSEdgeSwipeThreshold: 20, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, watchSlidesVisibility: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, loopAdditionalSlides: 0, noSwiping: true, runCallbacksOnInit: true, coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }, flipEffect: { slideShadows: true, limitRotation: true }, cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 }, fadeEffect: { crossFade: false }, a11y: { prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide" } };
  o8.pagination && (t5.pagination = { type: "bullets", clickable: false, hideOnClick: false }), o8.scrollbar && (t5.scrollbar = { hide: true }), s5(t5);
};

// node_modules/@ionic/angular/dist/common/providers/platform.js
var Platform = class _Platform {
  doc;
  _readyPromise;
  win;
  /**
   * @hidden
   */
  backButton = new Subject();
  /**
   * The keyboardDidShow event emits when the
   * on-screen keyboard is presented.
   */
  keyboardDidShow = new Subject();
  /**
   * The keyboardDidHide event emits when the
   * on-screen keyboard is hidden.
   */
  keyboardDidHide = new Subject();
  /**
   * The pause event emits when the native platform puts the application
   * into the background, typically when the user switches to a different
   * application. This event would emit when a Cordova app is put into
   * the background, however, it would not fire on a standard web browser.
   */
  pause = new Subject();
  /**
   * The resume event emits when the native platform pulls the application
   * out from the background. This event would emit when a Cordova app comes
   * out from the background, however, it would not fire on a standard web browser.
   */
  resume = new Subject();
  /**
   * The resize event emits when the browser window has changed dimensions. This
   * could be from a browser window being physically resized, or from a device
   * changing orientation.
   */
  resize = new Subject();
  constructor(doc, zone) {
    this.doc = doc;
    zone.run(() => {
      this.win = doc.defaultView;
      this.backButton.subscribeWithPriority = function(priority, callback) {
        return this.subscribe((ev) => {
          return ev.register(priority, (processNextHandler) => zone.run(() => callback(processNextHandler)));
        });
      };
      proxyEvent(this.pause, doc, "pause", zone);
      proxyEvent(this.resume, doc, "resume", zone);
      proxyEvent(this.backButton, doc, "ionBackButton", zone);
      proxyEvent(this.resize, this.win, "resize", zone);
      proxyEvent(this.keyboardDidShow, this.win, "ionKeyboardDidShow", zone);
      proxyEvent(this.keyboardDidHide, this.win, "ionKeyboardDidHide", zone);
      let readyResolve;
      this._readyPromise = new Promise((res) => {
        readyResolve = res;
      });
      if (this.win?.["cordova"]) {
        doc.addEventListener("deviceready", () => {
          readyResolve("cordova");
        }, {
          once: true
        });
      } else {
        readyResolve("dom");
      }
    });
  }
  /**
   * @returns returns true/false based on platform.
   * @description
   * Depending on the platform the user is on, `is(platformName)` will
   * return `true` or `false`. Note that the same app can return `true`
   * for more than one platform name. For example, an app running from
   * an iPad would return `true` for the platform names: `mobile`,
   * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
   * from Cordova then `cordova` would be true, and if it was running
   * from a web browser on the iPad then `mobileweb` would be `true`.
   *
   * ```
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyPage {
   *   constructor(public platform: Platform) {
   *     if (this.platform.is('ios')) {
   *       // This will only print when on iOS
   *       console.log('I am an iOS device!');
   *     }
   *   }
   * }
   * ```
   *
   * | Platform Name   | Description                        |
   * |-----------------|------------------------------------|
   * | android         | on a device running Android.       |
   * | capacitor       | on a device running Capacitor.     |
   * | cordova         | on a device running Cordova.       |
   * | ios             | on a device running iOS.           |
   * | ipad            | on an iPad device.                 |
   * | iphone          | on an iPhone device.               |
   * | phablet         | on a phablet device.               |
   * | tablet          | on a tablet device.                |
   * | electron        | in Electron on a desktop device.   |
   * | pwa             | as a PWA app.                      |
   * | mobile          | on a mobile device.                |
   * | mobileweb       | on a mobile device in a browser.   |
   * | desktop         | on a desktop device.               |
   * | hybrid          | is a cordova or capacitor app.     |
   *
   */
  is(platformName) {
    return d3(this.win, platformName);
  }
  /**
   * @returns the array of platforms
   * @description
   * Depending on what device you are on, `platforms` can return multiple values.
   * Each possible value is a hierarchy of platforms. For example, on an iPhone,
   * it would return `mobile`, `ios`, and `iphone`.
   *
   * ```
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyPage {
   *   constructor(public platform: Platform) {
   *     // This will print an array of the current platforms
   *     console.log(this.platform.platforms());
   *   }
   * }
   * ```
   */
  platforms() {
    return a4(this.win);
  }
  /**
   * Returns a promise when the platform is ready and native functionality
   * can be called. If the app is running from within a web browser, then
   * the promise will resolve when the DOM is ready. When the app is running
   * from an application engine such as Cordova, then the promise will
   * resolve when Cordova triggers the `deviceready` event.
   *
   * The resolved value is the `readySource`, which states which platform
   * ready was used. For example, when Cordova is ready, the resolved ready
   * source is `cordova`. The default ready source value will be `dom`. The
   * `readySource` is useful if different logic should run depending on the
   * platform the app is running from. For example, only Cordova can execute
   * the status bar plugin, so the web should not run status bar plugin logic.
   *
   * ```
   * import { Component } from '@angular/core';
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyApp {
   *   constructor(public platform: Platform) {
   *     this.platform.ready().then((readySource) => {
   *       console.log('Platform ready from', readySource);
   *       // Platform now ready, execute any required native code
   *     });
   *   }
   * }
   * ```
   */
  ready() {
    return this._readyPromise;
  }
  /**
   * Returns if this app is using right-to-left language direction or not.
   * We recommend the app's `index.html` file already has the correct `dir`
   * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
   * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
   */
  get isRTL() {
    return this.doc.dir === "rtl";
  }
  /**
   * Get the query string parameter
   */
  getQueryParam(key) {
    return readQueryParam(this.win.location.href, key);
  }
  /**
   * Returns `true` if the app is in landscape mode.
   */
  isLandscape() {
    return !this.isPortrait();
  }
  /**
   * Returns `true` if the app is in portrait mode.
   */
  isPortrait() {
    return this.win.matchMedia?.("(orientation: portrait)").matches;
  }
  testUserAgent(expression) {
    const nav = this.win.navigator;
    return !!(nav?.userAgent && nav.userAgent.indexOf(expression) >= 0);
  }
  /**
   * Get the current url.
   */
  url() {
    return this.win.location.href;
  }
  /**
   * Gets the width of the platform's viewport using `window.innerWidth`.
   */
  width() {
    return this.win.innerWidth;
  }
  /**
   * Gets the height of the platform's viewport using `window.innerHeight`.
   */
  height() {
    return this.win.innerHeight;
  }
  /** @nocollapse */
  static ɵfac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)(ɵɵinject(DOCUMENT), ɵɵinject(NgZone));
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _Platform,
    factory: _Platform.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }], null);
})();
var readQueryParam = (url, key) => {
  key = key.replace(/[[\]\\]/g, "\\$&");
  const regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
  const results = regex.exec(url);
  return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : null;
};
var proxyEvent = (emitter, el, eventName, zone) => {
  if (el) {
    el.addEventListener(eventName, (ev) => {
      zone.run(() => {
        const value = ev != null ? ev.detail : void 0;
        emitter.next(value);
      });
    });
  }
};

// node_modules/@ionic/angular/dist/common/providers/nav-controller.js
var NavController = class _NavController {
  location;
  serializer;
  router;
  topOutlet;
  direction = DEFAULT_DIRECTION;
  animated = DEFAULT_ANIMATED;
  animationBuilder;
  guessDirection = "forward";
  guessAnimation;
  lastNavId = -1;
  constructor(platform, location, serializer, router) {
    this.location = location;
    this.serializer = serializer;
    this.router = router;
    if (router) {
      router.events.subscribe((ev) => {
        if (ev instanceof NavigationStart) {
          const id = ev.restoredState ? ev.restoredState.navigationId : ev.id;
          this.guessDirection = this.guessAnimation = id < this.lastNavId ? "back" : "forward";
          this.lastNavId = this.guessDirection === "forward" ? ev.id : id;
        }
        if (ev instanceof NavigationCancel || ev instanceof NavigationError) {
          this.direction = DEFAULT_DIRECTION;
          this.animated = DEFAULT_ANIMATED;
          this.animationBuilder = void 0;
        }
      });
    }
    platform.backButton.subscribeWithPriority(0, (processNextHandler) => {
      this.pop();
      processNextHandler();
    });
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling `this.router.navigateByUrl()`, but it's explicit about the **direction** of the transition.
   *
   * Going **forward** means that a new page is going to be pushed to the stack of the outlet (ion-router-outlet),
   * and that it will show a "forward" animation by default.
   *
   * Navigating forward can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="forward">Link</a>
   * ```
   */
  navigateForward(url, options = {}) {
    this.setDirection("forward", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling:
   *
   * ```ts
   * this.navController.setDirection('back');
   * this.router.navigateByUrl(path);
   * ```
   *
   * Going **back** means that all the pages in the stack until the navigated page is found will be popped,
   * and that it will show a "back" animation by default.
   *
   * Navigating back can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="back">Link</a>
   * ```
   */
  navigateBack(url, options = {}) {
    this.setDirection("back", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling:
   *
   * ```ts
   * this.navController.setDirection('root');
   * this.router.navigateByUrl(path);
   * ```
   *
   * Going **root** means that all existing pages in the stack will be removed,
   * and the navigated page will become the single page in the stack.
   *
   * Navigating root can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="root">Link</a>
   * ```
   */
  navigateRoot(url, options = {}) {
    this.setDirection("root", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * Same as [Location](https://angular.io/api/common/Location)'s back() method.
   * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation
   * by default.
   */
  back(options = {
    animated: true,
    animationDirection: "back"
  }) {
    this.setDirection("back", options.animated, options.animationDirection, options.animation);
    return this.location.back();
  }
  /**
   * This methods goes back in the context of Ionic's stack navigation.
   *
   * It recursively finds the top active `ion-router-outlet` and calls `pop()`.
   * This is the recommended way to go back when you are using `ion-router-outlet`.
   *
   * Resolves to `true` if it was able to pop.
   */
  async pop() {
    let outlet = this.topOutlet;
    while (outlet) {
      if (await outlet.pop()) {
        return true;
      } else {
        outlet = outlet.parentOutlet;
      }
    }
    return false;
  }
  /**
   * This methods specifies the direction of the next navigation performed by the Angular router.
   *
   * `setDirection()` does not trigger any transition, it just sets some flags to be consumed by `ion-router-outlet`.
   *
   * It's recommended to use `navigateForward()`, `navigateBack()` and `navigateRoot()` instead of `setDirection()`.
   */
  setDirection(direction, animated, animationDirection, animationBuilder) {
    this.direction = direction;
    this.animated = getAnimation(direction, animated, animationDirection);
    this.animationBuilder = animationBuilder;
  }
  /**
   * @internal
   */
  setTopOutlet(outlet) {
    this.topOutlet = outlet;
  }
  /**
   * @internal
   */
  consumeTransition() {
    let direction = "root";
    let animation;
    const animationBuilder = this.animationBuilder;
    if (this.direction === "auto") {
      direction = this.guessDirection;
      animation = this.guessAnimation;
    } else {
      animation = this.animated;
      direction = this.direction;
    }
    this.direction = DEFAULT_DIRECTION;
    this.animated = DEFAULT_ANIMATED;
    this.animationBuilder = void 0;
    return {
      direction,
      animation,
      animationBuilder
    };
  }
  navigate(url, options) {
    if (Array.isArray(url)) {
      return this.router.navigate(url, options);
    } else {
      const urlTree = this.serializer.parse(url.toString());
      if (options.queryParams !== void 0) {
        urlTree.queryParams = __spreadValues({}, options.queryParams);
      }
      if (options.fragment !== void 0) {
        urlTree.fragment = options.fragment;
      }
      return this.router.navigateByUrl(urlTree, options);
    }
  }
  /** @nocollapse */
  static ɵfac = function NavController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavController)(ɵɵinject(Platform), ɵɵinject(Location), ɵɵinject(UrlSerializer), ɵɵinject(Router, 8));
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _NavController,
    factory: _NavController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: Location
  }, {
    type: UrlSerializer
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var getAnimation = (direction, animated, animationDirection) => {
  if (animated === false) {
    return void 0;
  }
  if (animationDirection !== void 0) {
    return animationDirection;
  }
  if (direction === "forward" || direction === "back") {
    return direction;
  } else if (direction === "root" && animated === true) {
    return "forward";
  }
  return void 0;
};
var DEFAULT_DIRECTION = "auto";
var DEFAULT_ANIMATED = void 0;

// node_modules/@ionic/angular/dist/common/providers/config.js
var Config = class _Config {
  get(key, fallback) {
    const c8 = getConfig();
    if (c8) {
      return c8.get(key, fallback);
    }
    return null;
  }
  getBoolean(key, fallback) {
    const c8 = getConfig();
    if (c8) {
      return c8.getBoolean(key, fallback);
    }
    return false;
  }
  getNumber(key, fallback) {
    const c8 = getConfig();
    if (c8) {
      return c8.getNumber(key, fallback);
    }
    return 0;
  }
  /** @nocollapse */
  static ɵfac = function Config_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Config)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _Config,
    factory: _Config.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Config, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfigToken = new InjectionToken("USERCONFIG");
var getConfig = () => {
  if (typeof window !== "undefined") {
    const Ionic = window.Ionic;
    if (Ionic?.config) {
      return Ionic.config;
    }
  }
  return null;
};

// node_modules/@ionic/angular/dist/common/directives/navigation/nav-params.js
var NavParams = class {
  data;
  constructor(data = {}) {
    this.data = data;
    console.warn(`[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.`);
  }
  /**
   * Get the value of a nav-parameter for the current view
   *
   * ```ts
   * import { NavParams } from 'ionic-angular';
   *
   * export class MyClass{
   *  constructor(public navParams: NavParams){
   *    // userParams is an object we have in our nav-parameters
   *    this.navParams.get('userParams');
   *  }
   * }
   * ```
   *
   * @param param Which param you want to look up
   */
  get(param) {
    return this.data[param];
  }
};

// node_modules/@ionic/angular/dist/common/providers/angular-delegate.js
var IonModalToken = new InjectionToken("IonModalToken");
var AngularDelegate = class _AngularDelegate {
  zone = inject(NgZone);
  applicationRef = inject(ApplicationRef);
  config = inject(ConfigToken);
  create(environmentInjector, injector, elementReferenceKey, customInjector) {
    return new AngularFrameworkDelegate(environmentInjector, injector, this.applicationRef, this.zone, elementReferenceKey, this.config.useSetInputAPI ?? false, customInjector);
  }
  /** @nocollapse */
  static ɵfac = function AngularDelegate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngularDelegate)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _AngularDelegate,
    factory: _AngularDelegate.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularDelegate, [{
    type: Injectable
  }], null, null);
})();
var AngularFrameworkDelegate = class {
  environmentInjector;
  injector;
  applicationRef;
  zone;
  elementReferenceKey;
  enableSignalsSupport;
  customInjector;
  elRefMap = /* @__PURE__ */ new WeakMap();
  elEventsMap = /* @__PURE__ */ new WeakMap();
  constructor(environmentInjector, injector, applicationRef, zone, elementReferenceKey, enableSignalsSupport, customInjector) {
    this.environmentInjector = environmentInjector;
    this.injector = injector;
    this.applicationRef = applicationRef;
    this.zone = zone;
    this.elementReferenceKey = elementReferenceKey;
    this.enableSignalsSupport = enableSignalsSupport;
    this.customInjector = customInjector;
  }
  attachViewToDom(container, component, params, cssClasses) {
    return this.zone.run(() => {
      return new Promise((resolve) => {
        const componentProps = __spreadValues({}, params);
        if (this.elementReferenceKey !== void 0) {
          componentProps[this.elementReferenceKey] = container;
        }
        const el = attachView(this.zone, this.environmentInjector, this.injector, this.applicationRef, this.elRefMap, this.elEventsMap, container, component, componentProps, cssClasses, this.elementReferenceKey, this.enableSignalsSupport, this.customInjector);
        resolve(el);
      });
    });
  }
  removeViewFromDom(_container, component) {
    return this.zone.run(() => {
      return new Promise((resolve) => {
        const componentRef = this.elRefMap.get(component);
        if (componentRef) {
          componentRef.destroy();
          this.elRefMap.delete(component);
          const unbindEvents = this.elEventsMap.get(component);
          if (unbindEvents) {
            unbindEvents();
            this.elEventsMap.delete(component);
          }
        }
        resolve();
      });
    });
  }
};
var attachView = (zone, environmentInjector, injector, applicationRef, elRefMap, elEventsMap, container, component, params, cssClasses, elementReferenceKey, enableSignalsSupport, customInjector) => {
  const providers = getProviders(params);
  if (container.tagName.toLowerCase() === "ion-modal") {
    providers.push({
      provide: IonModalToken,
      useValue: container
    });
  }
  const childInjector = Injector.create({
    providers,
    parent: customInjector ?? injector
  });
  const componentRef = createComponent(component, {
    environmentInjector,
    elementInjector: childInjector
  });
  const instance = componentRef.instance;
  const hostElement = componentRef.location.nativeElement;
  if (params) {
    if (elementReferenceKey && instance[elementReferenceKey] !== void 0) {
      console.error(`[Ionic Error]: ${elementReferenceKey} is a reserved property when using ${container.tagName.toLowerCase()}. Rename or remove the "${elementReferenceKey}" property from ${component.name}.`);
    }
    if (enableSignalsSupport === true && componentRef.setInput !== void 0) {
      const _a = params, {
        modal,
        popover
      } = _a, otherParams = __objRest(_a, [
        "modal",
        "popover"
      ]);
      for (const key in otherParams) {
        componentRef.setInput(key, otherParams[key]);
      }
      if (modal !== void 0) {
        Object.assign(instance, {
          modal
        });
      }
      if (popover !== void 0) {
        Object.assign(instance, {
          popover
        });
      }
    } else {
      Object.assign(instance, params);
    }
  }
  if (cssClasses) {
    for (const cssClass of cssClasses) {
      hostElement.classList.add(cssClass);
    }
  }
  const unbindEvents = bindLifecycleEvents(zone, componentRef.changeDetectorRef, instance, hostElement);
  container.appendChild(hostElement);
  applicationRef.attachView(componentRef.hostView);
  componentRef.changeDetectorRef.detectChanges();
  elRefMap.set(hostElement, componentRef);
  elEventsMap.set(hostElement, unbindEvents);
  return hostElement;
};
var LIFECYCLES = [r2, t, s2, c2, l];
var bindLifecycleEvents = (zone, changeDetectorRef, instance, element) => {
  return zone.run(() => {
    const unregisters = LIFECYCLES.filter((eventName) => typeof instance[eventName] === "function").map((eventName) => {
      const handler = (ev) => {
        instance[eventName](ev.detail);
        changeDetectorRef.markForCheck();
      };
      element.addEventListener(eventName, handler);
      return () => element.removeEventListener(eventName, handler);
    });
    return () => unregisters.forEach((fn) => fn());
  });
};
var NavParamsToken = new InjectionToken("NavParamsToken");
var getProviders = (params) => {
  return [{
    provide: NavParamsToken,
    useValue: params
  }, {
    provide: NavParams,
    useFactory: provideNavParamsInjectable,
    deps: [NavParamsToken]
  }];
};
var provideNavParamsInjectable = (params) => {
  return new NavParams(params);
};

// node_modules/@ionic/angular/dist/common/utils/routing.js
var IonicRouteStrategy = class {
  /**
   * Whether the given route should detach for later reuse.
   */
  shouldDetach(_route) {
    return false;
  }
  /**
   * Returns `false`, meaning the route (and its subtree) is never reattached
   */
  shouldAttach(_route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(_route, _detachedTree) {
    return;
  }
  /**
   * Returns `null` because this strategy does not store routes for later re-use.
   */
  retrieve(_route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and
   * current route config are identical and all route parameters are identical.
   */
  shouldReuseRoute(future, curr) {
    if (future.routeConfig !== curr.routeConfig) {
      return false;
    }
    const futureParams = future.params;
    const currentParams = curr.params;
    const keysA = Object.keys(futureParams);
    const keysB = Object.keys(currentParams);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (const key of keysA) {
      if (currentParams[key] !== futureParams[key]) {
        return false;
      }
    }
    return true;
  }
};

// node_modules/@ionic/angular/dist/common/providers/menu-controller.js
var MenuController = class {
  menuController;
  constructor(menuController) {
    this.menuController = menuController;
  }
  /**
   * Programmatically open the Menu.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu is fully opened
   */
  open(menuId) {
    return this.menuController.open(menuId);
  }
  /**
   * Programmatically close the Menu. If no `menuId` is given as the first
   * argument then it'll close any menu which is open. If a `menuId`
   * is given then it'll close that exact menu.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu is fully closed
   */
  close(menuId) {
    return this.menuController.close(menuId);
  }
  /**
   * Toggle the menu. If it's closed, it will open, and if opened, it
   * will close.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu has been toggled
   */
  toggle(menuId) {
    return this.menuController.toggle(menuId);
  }
  /**
   * Used to enable or disable a menu. For example, there could be multiple
   * left menus, but only one of them should be able to be opened at the same
   * time. If there are multiple menus on the same side, then enabling one menu
   * will also automatically disable all the others that are on the same side.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu, which is useful for chaining.
   */
  enable(shouldEnable, menuId) {
    return this.menuController.enable(shouldEnable, menuId);
  }
  /**
   * Used to enable or disable the ability to swipe open the menu.
   * @param shouldEnable  True if it should be swipe-able, false if not.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu, which is useful for chaining.
   */
  swipeGesture(shouldEnable, menuId) {
    return this.menuController.swipeGesture(shouldEnable, menuId);
  }
  /**
   * @param [menuId] Optionally get the menu by its id, or side.
   * @return Returns true if the specified menu is currently open, otherwise false.
   * If the menuId is not specified, it returns true if ANY menu is currenly open.
   */
  isOpen(menuId) {
    return this.menuController.isOpen(menuId);
  }
  /**
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns true if the menu is currently enabled, otherwise false.
   */
  isEnabled(menuId) {
    return this.menuController.isEnabled(menuId);
  }
  /**
   * Used to get a menu instance. If a `menuId` is not provided then it'll
   * return the first menu found. If a `menuId` is `left` or `right`, then
   * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
   * provided, then it'll try to find the menu using the menu's `id`
   * property. If a menu is not found then it'll return `null`.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu if found, otherwise `null`.
   */
  get(menuId) {
    return this.menuController.get(menuId);
  }
  /**
   * @return Returns the instance of the menu already opened, otherwise `null`.
   */
  getOpen() {
    return this.menuController.getOpen();
  }
  /**
   * @return Returns an array of all menu instances.
   */
  getMenus() {
    return this.menuController.getMenus();
  }
  registerAnimation(name, animation) {
    return this.menuController.registerAnimation(name, animation);
  }
  isAnimating() {
    return this.menuController.isAnimating();
  }
  _getOpenSync() {
    return this.menuController._getOpenSync();
  }
  _createAnimation(type, menuCmp) {
    return this.menuController._createAnimation(type, menuCmp);
  }
  _register(menu) {
    return this.menuController._register(menu);
  }
  _unregister(menu) {
    return this.menuController._unregister(menu);
  }
  _setOpen(menu, shouldOpen, animated) {
    return this.menuController._setOpen(menu, shouldOpen, animated);
  }
};

// node_modules/@ionic/angular/dist/common/utils/proxy.js
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      }
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs = (instance, el, events) => {
  events.forEach((eventName) => instance[eventName] = fromEvent(el, eventName));
};
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const { defineCustomElementFn, inputs, methods } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}

// node_modules/@ionic/angular/dist/common/overlays/modal.js
var MODAL_INPUTS = ["animated", "keepContentsMounted", "backdropBreakpoint", "backdropDismiss", "breakpoints", "canDismiss", "cssClass", "enterAnimation", "expandToScroll", "event", "focusTrap", "handle", "handleBehavior", "initialBreakpoint", "isOpen", "keyboardClose", "leaveAnimation", "mode", "presentingElement", "showBackdrop", "translucent", "trigger"];
var MODAL_METHODS = ["present", "dismiss", "onDidDismiss", "onWillDismiss", "setCurrentBreakpoint", "getCurrentBreakpoint"];
var IonModal = class IonModal2 {
  z;
  // TODO(FW-2827): type
  template;
  isCmpOpen = false;
  el;
  constructor(c8, r7, z2) {
    this.z = z2;
    this.el = r7.nativeElement;
    this.el.addEventListener("ionMount", () => {
      this.isCmpOpen = true;
      c8.detectChanges();
    });
    this.el.addEventListener("didDismiss", () => {
      this.isCmpOpen = false;
      c8.detectChanges();
    });
    proxyOutputs(this, this.el, ["ionModalDidPresent", "ionModalWillPresent", "ionModalWillDismiss", "ionModalDidDismiss", "ionBreakpointDidChange", "didPresent", "willPresent", "willDismiss", "didDismiss", "ionDragStart", "ionDragMove", "ionDragEnd"]);
  }
  /** @nocollapse */
  static ɵfac = function IonModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonModal2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonModal2,
    selectors: [["ion-modal"]],
    contentQueries: function IonModal_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      }
    },
    inputs: {
      animated: "animated",
      keepContentsMounted: "keepContentsMounted",
      backdropBreakpoint: "backdropBreakpoint",
      backdropDismiss: "backdropDismiss",
      breakpoints: "breakpoints",
      canDismiss: "canDismiss",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      expandToScroll: "expandToScroll",
      event: "event",
      focusTrap: "focusTrap",
      handle: "handle",
      handleBehavior: "handleBehavior",
      initialBreakpoint: "initialBreakpoint",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      presentingElement: "presentingElement",
      showBackdrop: "showBackdrop",
      translucent: "translucent",
      trigger: "trigger"
    }
  });
};
IonModal = __decorate([
  ProxyCmp({
    inputs: MODAL_INPUTS,
    methods: MODAL_METHODS
  })
  /**
   * @Component extends from @Directive
   * so by defining the inputs here we
   * do not need to re-define them for the
   * lazy loaded popover.
   */
], IonModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal, [{
    type: Directive,
    args: [{
      selector: "ion-modal",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: MODAL_INPUTS
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    template: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/overlays/popover.js
var POPOVER_INPUTS = ["alignment", "animated", "arrow", "keepContentsMounted", "backdropDismiss", "cssClass", "dismissOnSelect", "enterAnimation", "event", "focusTrap", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "translucent", "trigger", "triggerAction", "reference", "size", "side"];
var POPOVER_METHODS = ["present", "dismiss", "onDidDismiss", "onWillDismiss"];
var IonPopover = class IonPopover2 {
  z;
  // TODO(FW-2827): type
  template;
  isCmpOpen = false;
  el;
  constructor(c8, r7, z2) {
    this.z = z2;
    this.el = r7.nativeElement;
    this.el.addEventListener("ionMount", () => {
      this.isCmpOpen = true;
      c8.detectChanges();
    });
    this.el.addEventListener("didDismiss", () => {
      this.isCmpOpen = false;
      c8.detectChanges();
    });
    proxyOutputs(this, this.el, ["ionPopoverDidPresent", "ionPopoverWillPresent", "ionPopoverWillDismiss", "ionPopoverDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static ɵfac = function IonPopover_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPopover2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonPopover2,
    selectors: [["ion-popover"]],
    contentQueries: function IonPopover_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      }
    },
    inputs: {
      alignment: "alignment",
      animated: "animated",
      arrow: "arrow",
      keepContentsMounted: "keepContentsMounted",
      backdropDismiss: "backdropDismiss",
      cssClass: "cssClass",
      dismissOnSelect: "dismissOnSelect",
      enterAnimation: "enterAnimation",
      event: "event",
      focusTrap: "focusTrap",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      showBackdrop: "showBackdrop",
      translucent: "translucent",
      trigger: "trigger",
      triggerAction: "triggerAction",
      reference: "reference",
      size: "size",
      side: "side"
    }
  });
};
IonPopover = __decorate([
  ProxyCmp({
    inputs: POPOVER_INPUTS,
    methods: POPOVER_METHODS
  })
  /**
   * @Component extends from @Directive
   * so by defining the inputs here we
   * do not need to re-define them for the
   * lazy loaded popover.
   */
], IonPopover);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover, [{
    type: Directive,
    args: [{
      selector: "ion-popover",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: POPOVER_INPUTS
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    template: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/stack-utils.js
var insertView = (views, view, direction) => {
  if (direction === "root") {
    return setRoot(views, view);
  } else if (direction === "forward") {
    return setForward(views, view);
  } else {
    return setBack(views, view);
  }
};
var setRoot = (views, view) => {
  views = views.filter((v3) => v3.stackId !== view.stackId);
  views.push(view);
  return views;
};
var setForward = (views, view) => {
  const index = views.indexOf(view);
  if (index >= 0) {
    views = views.filter((v3) => v3.stackId !== view.stackId || v3.id <= view.id);
  } else {
    views.push(view);
  }
  return views;
};
var setBack = (views, view) => {
  const index = views.indexOf(view);
  if (index >= 0) {
    return views.filter((v3) => v3.stackId !== view.stackId || v3.id <= view.id);
  } else {
    return setRoot(views, view);
  }
};
var getUrl = (router, activatedRoute) => {
  const urlTree = router.createUrlTree(["."], { relativeTo: activatedRoute });
  return router.serializeUrl(urlTree);
};
var isTabSwitch = (enteringView, leavingView) => {
  if (!leavingView) {
    return true;
  }
  return enteringView.stackId !== leavingView.stackId;
};
var computeStackId = (prefixUrl, url) => {
  if (!prefixUrl) {
    return void 0;
  }
  const segments = toSegments(url);
  for (let i4 = 0; i4 < segments.length; i4++) {
    if (i4 >= prefixUrl.length) {
      return segments[i4];
    }
    if (segments[i4] !== prefixUrl[i4]) {
      return void 0;
    }
  }
  return void 0;
};
var toSegments = (path) => {
  return path.split("/").map((s5) => s5.trim()).filter((s5) => s5 !== "");
};
var destroyView = (view) => {
  if (view) {
    view.ref.destroy();
    view.unlistenEvents();
  }
};

// node_modules/@ionic/angular/dist/common/directives/navigation/stack-controller.js
var StackController = class {
  containerEl;
  router;
  navCtrl;
  zone;
  location;
  views = [];
  runningTask;
  skipTransition = false;
  tabsPrefix;
  activeView;
  nextId = 0;
  constructor(tabsPrefix, containerEl, router, navCtrl, zone, location) {
    this.containerEl = containerEl;
    this.router = router;
    this.navCtrl = navCtrl;
    this.zone = zone;
    this.location = location;
    this.tabsPrefix = tabsPrefix !== void 0 ? toSegments(tabsPrefix) : void 0;
  }
  createView(ref, activatedRoute) {
    const url = getUrl(this.router, activatedRoute);
    const element = ref?.location?.nativeElement;
    const unlistenEvents = bindLifecycleEvents(this.zone, ref.changeDetectorRef, ref.instance, element);
    return {
      id: this.nextId++,
      stackId: computeStackId(this.tabsPrefix, url),
      unlistenEvents,
      element,
      ref,
      url
    };
  }
  getExistingView(activatedRoute) {
    const activatedUrlKey = getUrl(this.router, activatedRoute);
    const view = this.views.find((vw) => vw.url === activatedUrlKey);
    if (view) {
      view.ref.changeDetectorRef.reattach();
    }
    return view;
  }
  setActive(enteringView) {
    const consumeResult = this.navCtrl.consumeTransition();
    let { direction, animation, animationBuilder } = consumeResult;
    const leavingView = this.activeView;
    const tabSwitch = isTabSwitch(enteringView, leavingView);
    if (tabSwitch) {
      direction = "back";
      animation = void 0;
    }
    const viewsSnapshot = this.views.slice();
    let currentNavigation;
    const router = this.router;
    if (router.getCurrentNavigation) {
      currentNavigation = router.getCurrentNavigation();
    } else if (router.navigations?.value) {
      currentNavigation = router.navigations.value;
    }
    if (currentNavigation?.extras?.replaceUrl) {
      if (this.views.length > 0) {
        this.views.splice(-1, 1);
      }
    }
    const reused = this.views.includes(enteringView);
    const views = this.insertView(enteringView, direction);
    if (!reused) {
      enteringView.ref.changeDetectorRef.detectChanges();
    }
    const customAnimation = enteringView.animationBuilder;
    if (animationBuilder === void 0 && direction === "back" && !tabSwitch && customAnimation !== void 0) {
      animationBuilder = customAnimation;
    }
    if (leavingView) {
      leavingView.animationBuilder = animationBuilder;
    }
    return this.zone.runOutsideAngular(() => {
      return this.wait(() => {
        if (leavingView) {
          leavingView.ref.changeDetectorRef.detach();
        }
        enteringView.ref.changeDetectorRef.reattach();
        return this.transition(enteringView, leavingView, animation, this.canGoBack(1), false, animationBuilder).then(() => cleanupAsync(enteringView, views, viewsSnapshot, this.location, this.zone)).then(() => ({
          enteringView,
          direction,
          animation,
          tabSwitch
        }));
      });
    });
  }
  canGoBack(deep, stackId = this.getActiveStackId()) {
    return this.getStack(stackId).length > deep;
  }
  pop(deep, stackId = this.getActiveStackId()) {
    return this.zone.run(() => {
      const views = this.getStack(stackId);
      if (views.length <= deep) {
        return Promise.resolve(false);
      }
      const view = views[views.length - deep - 1];
      let url = view.url;
      const viewSavedData = view.savedData;
      if (viewSavedData) {
        const primaryOutlet = viewSavedData.get("primary");
        if (primaryOutlet?.route?._routerState?.snapshot.url) {
          url = primaryOutlet.route._routerState.snapshot.url;
        }
      }
      const { animationBuilder } = this.navCtrl.consumeTransition();
      return this.navCtrl.navigateBack(url, __spreadProps(__spreadValues({}, view.savedExtras), { animation: animationBuilder })).then(() => true);
    });
  }
  startBackTransition() {
    const leavingView = this.activeView;
    if (leavingView) {
      const views = this.getStack(leavingView.stackId);
      const enteringView = views[views.length - 2];
      const customAnimation = enteringView.animationBuilder;
      return this.wait(() => {
        return this.transition(
          enteringView,
          // entering view
          leavingView,
          // leaving view
          "back",
          this.canGoBack(2),
          true,
          customAnimation
        );
      });
    }
    return Promise.resolve();
  }
  endBackTransition(shouldComplete) {
    if (shouldComplete) {
      this.skipTransition = true;
      this.pop(1);
    } else if (this.activeView) {
      cleanup(this.activeView, this.views, this.views, this.location, this.zone);
    }
  }
  getLastUrl(stackId) {
    const views = this.getStack(stackId);
    return views.length > 0 ? views[views.length - 1] : void 0;
  }
  /**
   * @internal
   */
  getRootUrl(stackId) {
    const views = this.getStack(stackId);
    return views.length > 0 ? views[0] : void 0;
  }
  getActiveStackId() {
    return this.activeView ? this.activeView.stackId : void 0;
  }
  /**
   * @internal
   */
  getActiveView() {
    return this.activeView;
  }
  hasRunningTask() {
    return this.runningTask !== void 0;
  }
  destroy() {
    this.containerEl = void 0;
    this.views.forEach(destroyView);
    this.activeView = void 0;
    this.views = [];
  }
  getStack(stackId) {
    return this.views.filter((v3) => v3.stackId === stackId);
  }
  insertView(enteringView, direction) {
    this.activeView = enteringView;
    this.views = insertView(this.views, enteringView, direction);
    return this.views.slice();
  }
  transition(enteringView, leavingView, direction, showGoBack, progressAnimation, animationBuilder) {
    if (this.skipTransition) {
      this.skipTransition = false;
      return Promise.resolve(false);
    }
    if (leavingView === enteringView) {
      return Promise.resolve(false);
    }
    const enteringEl = enteringView ? enteringView.element : void 0;
    const leavingEl = leavingView ? leavingView.element : void 0;
    const containerEl = this.containerEl;
    if (enteringEl && enteringEl !== leavingEl) {
      enteringEl.classList.add("ion-page");
      enteringEl.classList.add("ion-page-invisible");
      if (containerEl?.commit) {
        return containerEl.commit(enteringEl, leavingEl, {
          duration: direction === void 0 ? 0 : void 0,
          direction,
          showGoBack,
          progressAnimation,
          animationBuilder
        });
      }
    }
    return Promise.resolve(false);
  }
  async wait(task) {
    if (this.runningTask !== void 0) {
      await this.runningTask;
      this.runningTask = void 0;
    }
    const promise = this.runningTask = task();
    promise.finally(() => this.runningTask = void 0);
    return promise;
  }
};
var cleanupAsync = (activeRoute, views, viewsSnapshot, location, zone) => {
  if (typeof requestAnimationFrame === "function") {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        cleanup(activeRoute, views, viewsSnapshot, location, zone);
        resolve();
      });
    });
  }
  return Promise.resolve();
};
var cleanup = (activeRoute, views, viewsSnapshot, location, zone) => {
  zone.run(() => viewsSnapshot.filter((view) => !views.includes(view)).forEach(destroyView));
  views.forEach((view) => {
    const locationWithoutParams = location.path().split("?")[0];
    const locationWithoutFragment = locationWithoutParams.split("#")[0];
    if (view !== activeRoute && view.url !== locationWithoutFragment) {
      const element = view.element;
      element.setAttribute("aria-hidden", "true");
      element.classList.add("ion-page-hidden");
      view.ref.changeDetectorRef.detach();
    }
  });
};

// node_modules/@ionic/angular/dist/common/directives/navigation/router-outlet.js
var IonRouterOutlet = class _IonRouterOutlet {
  parentOutlet;
  nativeEl;
  activatedView = null;
  tabsPrefix;
  _swipeGesture;
  stackCtrl;
  // Maintain map of activated route proxies for each component instance
  proxyMap = /* @__PURE__ */ new WeakMap();
  // Keep the latest activated route in a subject for the proxy routes to switch map to
  currentActivatedRoute$ = new BehaviorSubject(null);
  activated = null;
  /** @internal */
  get activatedComponentRef() {
    return this.activated;
  }
  _activatedRoute = null;
  /**
   * The name of the outlet
   */
  name = PRIMARY_OUTLET;
  /** @internal */
  stackWillChange = new EventEmitter();
  /** @internal */
  stackDidChange = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-rename
  activateEvents = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-rename
  deactivateEvents = new EventEmitter();
  parentContexts = inject(ChildrenOutletContexts);
  location = inject(ViewContainerRef);
  environmentInjector = inject(EnvironmentInjector);
  inputBinder = inject(INPUT_BINDER, {
    optional: true
  });
  /** @nodoc */
  supportsBindingToComponentInputs = true;
  // Ionic providers
  config = inject(Config);
  navCtrl = inject(NavController);
  set animation(animation) {
    this.nativeEl.animation = animation;
  }
  set animated(animated) {
    this.nativeEl.animated = animated;
  }
  set swipeGesture(swipe) {
    this._swipeGesture = swipe;
    this.nativeEl.swipeHandler = swipe ? {
      canStart: () => this.stackCtrl.canGoBack(1) && !this.stackCtrl.hasRunningTask(),
      onStart: () => this.stackCtrl.startBackTransition(),
      onEnd: (shouldContinue) => this.stackCtrl.endBackTransition(shouldContinue)
    } : void 0;
    this.nativeEl.swipeGesture = swipe;
  }
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    this.parentOutlet = parentOutlet;
    this.nativeEl = elementRef.nativeElement;
    this.name = name || PRIMARY_OUTLET;
    this.tabsPrefix = tabs === "true" ? getUrl(router, activatedRoute) : void 0;
    this.stackCtrl = new StackController(this.tabsPrefix, this.nativeEl, router, this.navCtrl, zone, commonLocation);
    this.parentContexts.onChildOutletCreated(this.name, this);
  }
  ngOnDestroy() {
    this.stackCtrl.destroy();
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  getContext() {
    return this.parentContexts.getContext(this.name);
  }
  ngOnInit() {
    this.initializeOutletWithName();
  }
  // Note: Ionic deviates from the Angular Router implementation here
  initializeOutletWithName() {
    if (!this.activated) {
      const context = this.getContext();
      if (context?.route) {
        this.activateWith(context.route, context.injector);
      }
    }
    new Promise((resolve) => n2(this.nativeEl, resolve)).then(() => {
      if (this._swipeGesture === void 0) {
        this.swipeGesture = this.config.getBoolean("swipeBackEnabled", this.nativeEl.mode === "ios");
      }
    });
  }
  get isActivated() {
    return !!this.activated;
  }
  get component() {
    if (!this.activated) {
      throw new Error("Outlet is not activated");
    }
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated) {
      throw new Error("Outlet is not activated");
    }
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to detach the subtree
   */
  detach() {
    throw new Error("incompatible reuse strategy");
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attach(_ref, _activatedRoute) {
    throw new Error("incompatible reuse strategy");
  }
  deactivate() {
    if (this.activated) {
      if (this.activatedView) {
        const context = this.getContext();
        this.activatedView.savedData = new Map(context.children["contexts"]);
        const primaryOutlet = this.activatedView.savedData.get("primary");
        if (primaryOutlet && context.route) {
          primaryOutlet.route = __spreadValues({}, context.route);
        }
        this.activatedView.savedExtras = {};
        if (context.route) {
          const contextSnapshot = context.route.snapshot;
          this.activatedView.savedExtras.queryParams = contextSnapshot.queryParams;
          this.activatedView.savedExtras.fragment = contextSnapshot.fragment;
        }
      }
      const c8 = this.component;
      this.activatedView = null;
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c8);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new Error("Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    let cmpRef;
    let enteringView = this.stackCtrl.getExistingView(activatedRoute);
    if (enteringView) {
      cmpRef = this.activated = enteringView.ref;
      const saved = enteringView.savedData;
      if (saved) {
        const context = this.getContext();
        context.children["contexts"] = saved;
      }
      this.updateActivatedRouteProxy(cmpRef.instance, activatedRoute);
    } else {
      const snapshot = activatedRoute._futureSnapshot;
      const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
      const component$ = new BehaviorSubject(null);
      const activatedRouteProxy = this.createActivatedRouteProxy(component$, activatedRoute);
      const injector = new OutletInjector(activatedRouteProxy, childContexts, this.location.injector);
      const component = snapshot.routeConfig.component ?? snapshot.component;
      cmpRef = this.activated = this.outletContent.createComponent(component, {
        index: this.outletContent.length,
        injector,
        environmentInjector: environmentInjector ?? this.environmentInjector
      });
      component$.next(cmpRef.instance);
      enteringView = this.stackCtrl.createView(this.activated, activatedRoute);
      this.proxyMap.set(cmpRef.instance, activatedRouteProxy);
      this.currentActivatedRoute$.next({
        component: cmpRef.instance,
        activatedRoute
      });
    }
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activatedView = enteringView;
    this.navCtrl.setTopOutlet(this);
    const leavingView = this.stackCtrl.getActiveView();
    this.stackWillChange.emit({
      enteringView,
      tabSwitch: isTabSwitch(enteringView, leavingView)
    });
    this.stackCtrl.setActive(enteringView).then((data) => {
      this.activateEvents.emit(cmpRef.instance);
      this.stackDidChange.emit(data);
    });
  }
  /**
   * Returns `true` if there are pages in the stack to go back.
   */
  canGoBack(deep = 1, stackId) {
    return this.stackCtrl.canGoBack(deep, stackId);
  }
  /**
   * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
   */
  pop(deep = 1, stackId) {
    return this.stackCtrl.pop(deep, stackId);
  }
  /**
   * Returns the URL of the active page of each stack.
   */
  getLastUrl(stackId) {
    const active = this.stackCtrl.getLastUrl(stackId);
    return active ? active.url : void 0;
  }
  /**
   * Returns the RouteView of the active page of each stack.
   * @internal
   */
  getLastRouteView(stackId) {
    return this.stackCtrl.getLastUrl(stackId);
  }
  /**
   * Returns the root view in the tab stack.
   * @internal
   */
  getRootView(stackId) {
    return this.stackCtrl.getRootUrl(stackId);
  }
  /**
   * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
   */
  getActiveStackId() {
    return this.stackCtrl.getActiveStackId();
  }
  /**
   * Since the activated route can change over the life time of a component in an ion router outlet, we create
   * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
   */
  createActivatedRouteProxy(component$, activatedRoute) {
    const proxy = new ActivatedRoute();
    proxy._futureSnapshot = activatedRoute._futureSnapshot;
    proxy._routerState = activatedRoute._routerState;
    proxy.snapshot = activatedRoute.snapshot;
    proxy.outlet = activatedRoute.outlet;
    proxy.component = activatedRoute.component;
    proxy._paramMap = this.proxyObservable(component$, "paramMap");
    proxy._queryParamMap = this.proxyObservable(component$, "queryParamMap");
    proxy.url = this.proxyObservable(component$, "url");
    proxy.params = this.proxyObservable(component$, "params");
    proxy.queryParams = this.proxyObservable(component$, "queryParams");
    proxy.fragment = this.proxyObservable(component$, "fragment");
    proxy.data = this.proxyObservable(component$, "data");
    return proxy;
  }
  /**
   * Create a wrapped observable that will switch to the latest activated route matched by the given component
   */
  proxyObservable(component$, path) {
    return component$.pipe(
      // First wait until the component instance is pushed
      filter((component) => !!component),
      switchMap((component) => this.currentActivatedRoute$.pipe(filter((current) => current !== null && current.component === component), switchMap((current) => current && current.activatedRoute[path]), distinctUntilChanged()))
    );
  }
  /**
   * Updates the activated route proxy for the given component to the new incoming router state
   */
  updateActivatedRouteProxy(component, activatedRoute) {
    const proxy = this.proxyMap.get(component);
    if (!proxy) {
      throw new Error(`Could not find activated route proxy for view`);
    }
    proxy._futureSnapshot = activatedRoute._futureSnapshot;
    proxy._routerState = activatedRoute._routerState;
    proxy.snapshot = activatedRoute.snapshot;
    proxy.outlet = activatedRoute.outlet;
    proxy.component = activatedRoute.component;
    this.currentActivatedRoute$.next({
      component,
      activatedRoute
    });
  }
  /** @nocollapse */
  static ɵfac = function IonRouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonRouterOutlet)(ɵɵinjectAttribute("name"), ɵɵinjectAttribute("tabs"), ɵɵdirectiveInject(Location), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(_IonRouterOutlet, 12));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _IonRouterOutlet,
    selectors: [["ion-router-outlet"]],
    inputs: {
      animated: "animated",
      animation: "animation",
      mode: "mode",
      swipeGesture: "swipeGesture",
      name: "name"
    },
    outputs: {
      stackWillChange: "stackWillChange",
      stackDidChange: "stackDidChange",
      activateEvents: "activate",
      deactivateEvents: "deactivate"
    },
    exportAs: ["outlet"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet, [{
    type: Directive,
    args: [{
      selector: "ion-router-outlet",
      exportAs: "outlet",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "animation", "mode", "swipeGesture"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["name"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Attribute,
      args: ["tabs"]
    }]
  }, {
    type: Location
  }, {
    type: ElementRef
  }, {
    type: Router
  }, {
    type: NgZone
  }, {
    type: ActivatedRoute
  }, {
    type: IonRouterOutlet,
    decorators: [{
      type: SkipSelf
    }, {
      type: Optional
    }]
  }], {
    name: [{
      type: Input
    }],
    stackWillChange: [{
      type: Output
    }],
    stackDidChange: [{
      type: Output
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }]
  });
})();
var OutletInjector = class {
  route;
  childContexts;
  parent;
  constructor(route, childContexts, parent) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken("");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  outletDataSubscriptions = /* @__PURE__ */ new Map();
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  /** @nocollapse */
  static ɵfac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoutedComponentInputBinder)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _RoutedComponentInputBinder,
    factory: _RoutedComponentInputBinder.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
var provideComponentInputBinding = () => {
  return {
    provide: INPUT_BINDER,
    useFactory: componentInputBindingFactory,
    deps: [Router]
  };
};
function componentInputBindingFactory(router) {
  if (router?.componentInputBindingEnabled) {
    return new RoutedComponentInputBinder();
  }
  return null;
}

// node_modules/@ionic/angular/dist/common/utils/util.js
var raf = (h5) => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(h5);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(h5);
  }
  return setTimeout(h5);
};

// node_modules/@ionic/angular/dist/common/directives/control-value-accessors/value-accessor.js
var ValueAccessor = class _ValueAccessor {
  injector;
  elementRef;
  onChange = () => {
  };
  onTouched = () => {
  };
  lastValue;
  statusChanges;
  constructor(injector, elementRef) {
    this.injector = injector;
    this.elementRef = elementRef;
  }
  writeValue(value) {
    this.elementRef.nativeElement.value = this.lastValue = value;
    setIonicClasses(this.elementRef);
  }
  /**
   * Notifies the ControlValueAccessor of a change in the value of the control.
   *
   * This is called by each of the ValueAccessor directives when we want to update
   * the status and validity of the form control. For example with text components this
   * is called when the ionInput event is fired. For select components this is called
   * when the ionChange event is fired.
   *
   * This also updates the Ionic form status classes on the element.
   *
   * @param el The component element.
   * @param value The new value of the control.
   */
  handleValueChange(el, value) {
    if (el === this.elementRef.nativeElement) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
      }
      setIonicClasses(this.elementRef);
    }
  }
  _handleBlurEvent(el) {
    if (el === this.elementRef.nativeElement) {
      this.onTouched();
      setIonicClasses(this.elementRef);
    } else if (el.closest("ion-radio-group") === this.elementRef.nativeElement) {
      this.onTouched();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.elementRef.nativeElement.disabled = isDisabled;
  }
  ngOnDestroy() {
    if (this.statusChanges) {
      this.statusChanges.unsubscribe();
    }
  }
  ngAfterViewInit() {
    let ngControl;
    try {
      ngControl = this.injector.get(NgControl);
    } catch {
    }
    if (!ngControl) {
      return;
    }
    if (ngControl.statusChanges) {
      this.statusChanges = ngControl.statusChanges.subscribe(() => setIonicClasses(this.elementRef));
    }
    const formControl = ngControl.control;
    if (formControl) {
      const methodsToPatch = ["markAsTouched", "markAllAsTouched", "markAsUntouched", "markAsDirty", "markAsPristine"];
      methodsToPatch.forEach((method) => {
        if (typeof formControl[method] !== "undefined") {
          const oldFn = formControl[method].bind(formControl);
          formControl[method] = (...params) => {
            oldFn(...params);
            setIonicClasses(this.elementRef);
          };
        }
      });
    }
  }
  /** @nocollapse */
  static ɵfac = function ValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValueAccessor)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _ValueAccessor,
    hostBindings: function ValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionBlur", function ValueAccessor_ionBlur_HostBindingHandler($event) {
          return ctx._handleBlurEvent($event.target);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAccessor, [{
    type: Directive
  }], () => [{
    type: Injector
  }, {
    type: ElementRef
  }], {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["ionBlur", ["$event.target"]]
    }]
  });
})();
var setIonicClasses = (element) => {
  raf(() => {
    const input = element.nativeElement;
    const hasValue = input.value != null && input.value.toString().length > 0;
    const classes = getClasses(input);
    setClasses(input, classes);
    const item = input.closest("ion-item");
    if (item) {
      if (hasValue) {
        setClasses(item, [...classes, "item-has-value"]);
      } else {
        setClasses(item, classes);
      }
    }
  });
};
var getClasses = (element) => {
  const classList = element.classList;
  const classes = [];
  for (let i4 = 0; i4 < classList.length; i4++) {
    const item = classList.item(i4);
    if (item !== null && startsWith(item, "ng-")) {
      classes.push(`ion-${item.substring(3)}`);
    }
  }
  return classes;
};
var setClasses = (element, classes) => {
  const classList = element.classList;
  classList.remove("ion-valid", "ion-invalid", "ion-touched", "ion-untouched", "ion-dirty", "ion-pristine");
  classList.add(...classes);
};
var startsWith = (input, search) => {
  return input.substring(0, search.length) === search;
};

// node_modules/@ionic/angular/dist/common/directives/navigation/back-button.js
var BACK_BUTTON_INPUTS = ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"];
var IonBackButton = class IonBackButton2 {
  routerOutlet;
  navCtrl;
  config;
  r;
  z;
  el;
  constructor(routerOutlet, navCtrl, config, r7, z2, c8) {
    this.routerOutlet = routerOutlet;
    this.navCtrl = navCtrl;
    this.config = config;
    this.r = r7;
    this.z = z2;
    c8.detach();
    this.el = this.r.nativeElement;
  }
  /**
   * @internal
   */
  onClick(ev) {
    const defaultHref = this.defaultHref || this.config.get("backButtonDefaultHref");
    if (this.routerOutlet?.canGoBack()) {
      this.navCtrl.setDirection("back", void 0, void 0, this.routerAnimation);
      this.routerOutlet.pop();
      ev.preventDefault();
    } else if (defaultHref != null) {
      this.navCtrl.navigateBack(defaultHref, {
        animation: this.routerAnimation
      });
      ev.preventDefault();
    }
  }
  /** @nocollapse */
  static ɵfac = function IonBackButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBackButton2)(ɵɵdirectiveInject(IonRouterOutlet, 8), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(Config), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonBackButton2,
    hostBindings: function IonBackButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function IonBackButton_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      color: "color",
      defaultHref: "defaultHref",
      disabled: "disabled",
      icon: "icon",
      mode: "mode",
      routerAnimation: "routerAnimation",
      text: "text",
      type: "type"
    }
  });
};
IonBackButton = __decorate([ProxyCmp({
  inputs: BACK_BUTTON_INPUTS
})], IonBackButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: BACK_BUTTON_INPUTS
    }]
  }], () => [{
    type: IonRouterOutlet,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NavController
  }, {
    type: Config
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/nav.js
var NAV_INPUTS = ["animated", "animation", "root", "rootParams", "swipeGesture"];
var NAV_METHODS = ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"];
var IonNav = class IonNav2 {
  z;
  el;
  constructor(ref, environmentInjector, injector, angularDelegate, z2, c8) {
    this.z = z2;
    c8.detach();
    this.el = ref.nativeElement;
    ref.nativeElement.delegate = angularDelegate.create(environmentInjector, injector);
    proxyOutputs(this, this.el, ["ionNavDidChange", "ionNavWillChange"]);
  }
  /** @nocollapse */
  static ɵfac = function IonNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNav2)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(EnvironmentInjector), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(AngularDelegate), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonNav2,
    inputs: {
      animated: "animated",
      animation: "animation",
      root: "root",
      rootParams: "rootParams",
      swipeGesture: "swipeGesture"
    }
  });
};
IonNav = __decorate([ProxyCmp({
  inputs: NAV_INPUTS,
  methods: NAV_METHODS
})], IonNav);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: NAV_INPUTS
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: EnvironmentInjector
  }, {
    type: Injector
  }, {
    type: AngularDelegate
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], null);
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/router-link-delegate.js
var RouterLinkDelegateDirective = class _RouterLinkDelegateDirective {
  locationStrategy;
  navCtrl;
  elementRef;
  router;
  routerLink;
  routerDirection = "forward";
  routerAnimation;
  constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
    this.locationStrategy = locationStrategy;
    this.navCtrl = navCtrl;
    this.elementRef = elementRef;
    this.router = router;
    this.routerLink = routerLink;
  }
  ngOnInit() {
    this.updateTargetUrlAndHref();
    this.updateTabindex();
    this.elementRef.nativeElement.addEventListener("click", this.onCaptureClick, {
      capture: true
    });
  }
  ngOnChanges() {
    this.updateTargetUrlAndHref();
  }
  ngOnDestroy() {
    this.elementRef.nativeElement.removeEventListener("click", this.onCaptureClick, {
      capture: true
    });
  }
  onCaptureClick = (ev) => {
    if (this.opensNatively(ev)) {
      ev.stopImmediatePropagation();
    }
  };
  /**
   * True when the browser should handle the click natively instead of routing
   * in-app: a modifier was held (ctrl/meta/shift/alt), or the host targets
   * something other than `_self`. This mirrors the modifier set Angular's own
   * `RouterLink` guards on, so an Ionic `routerLink` behaves like a plain anchor
   * for new-tab, new-window, and download intents.
   */
  opensNatively(ev) {
    if (ev instanceof MouseEvent && (ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey)) {
      return true;
    }
    const target = this.elementRef.nativeElement.target;
    return target != null && target !== "" && target !== "_self";
  }
  /**
   * The `tabindex` is set to `0` by default on the host element when
   * the `routerLink` directive is used. This causes issues with Ionic
   * components that wrap an `a` or `button` element, such as `ion-item`.
   * See issue https://github.com/angular/angular/issues/28345
   *
   * This method removes the `tabindex` attribute from the host element
   * to allow the Ionic component to manage the focus state correctly.
   */
  updateTabindex() {
    const ionicComponents = ["ION-BACK-BUTTON", "ION-BREADCRUMB", "ION-BUTTON", "ION-CARD", "ION-FAB-BUTTON", "ION-ITEM", "ION-ITEM-OPTION", "ION-MENU-BUTTON", "ION-SEGMENT-BUTTON", "ION-TAB-BUTTON"];
    const hostElement = this.elementRef.nativeElement;
    if (ionicComponents.includes(hostElement.tagName)) {
      if (hostElement.getAttribute("tabindex") === "0") {
        hostElement.removeAttribute("tabindex");
      }
    }
  }
  updateTargetUrlAndHref() {
    if (this.routerLink?.urlTree) {
      const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
      this.elementRef.nativeElement.href = href;
    }
  }
  /**
   * @internal
   */
  onClick(ev) {
    this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
    ev.preventDefault();
  }
  /** @nocollapse */
  static ɵfac = function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkDelegateDirective)(ɵɵdirectiveInject(LocationStrategy), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(RouterLink, 8));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkDelegateDirective,
    selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
    hostBindings: function RouterLinkDelegateDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RouterLinkDelegateDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      routerDirection: "routerDirection",
      routerAnimation: "routerAnimation"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective, [{
    type: Directive,
    args: [{
      selector: ":not(a):not(area)[routerLink]"
    }]
  }], () => [{
    type: LocationStrategy
  }, {
    type: NavController
  }, {
    type: ElementRef
  }, {
    type: Router
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    routerDirection: [{
      type: Input
    }],
    routerAnimation: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var RouterLinkWithHrefDelegateDirective = class _RouterLinkWithHrefDelegateDirective {
  locationStrategy;
  navCtrl;
  elementRef;
  router;
  routerLink;
  routerDirection = "forward";
  routerAnimation;
  constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
    this.locationStrategy = locationStrategy;
    this.navCtrl = navCtrl;
    this.elementRef = elementRef;
    this.router = router;
    this.routerLink = routerLink;
  }
  ngOnInit() {
    this.updateTargetUrlAndHref();
  }
  ngOnChanges() {
    this.updateTargetUrlAndHref();
  }
  updateTargetUrlAndHref() {
    if (this.routerLink?.urlTree) {
      const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
      this.elementRef.nativeElement.href = href;
    }
  }
  /**
   * @internal
   */
  onClick() {
    this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
  }
  /** @nocollapse */
  static ɵfac = function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkWithHrefDelegateDirective)(ɵɵdirectiveInject(LocationStrategy), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(RouterLink, 8));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkWithHrefDelegateDirective,
    selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
    hostBindings: function RouterLinkWithHrefDelegateDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RouterLinkWithHrefDelegateDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      routerDirection: "routerDirection",
      routerAnimation: "routerAnimation"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective, [{
    type: Directive,
    args: [{
      selector: "a[routerLink],area[routerLink]"
    }]
  }], () => [{
    type: LocationStrategy
  }, {
    type: NavController
  }, {
    type: ElementRef
  }, {
    type: Router
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    routerDirection: [{
      type: Input
    }],
    routerAnimation: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/tabs.js
var _c0 = ["tabsInner"];
var parseHrefExtras = (href) => {
  if (!href) {
    return void 0;
  }
  const hashIndex = href.indexOf("#");
  const fragment = hashIndex >= 0 && hashIndex < href.length - 1 ? href.slice(hashIndex + 1) : void 0;
  const beforeHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const queryIndex = beforeHash.indexOf("?");
  const search = queryIndex >= 0 ? beforeHash.slice(queryIndex + 1) : "";
  let queryParams;
  if (search) {
    const params = new URLSearchParams(search);
    queryParams = {};
    for (const key of new Set(params.keys())) {
      const all = params.getAll(key);
      queryParams[key] = all.length > 1 ? all : all[0];
    }
  }
  if (!queryParams && fragment === void 0) {
    return void 0;
  }
  const extras = {};
  if (queryParams) extras.queryParams = queryParams;
  if (fragment !== void 0) extras.fragment = fragment;
  return extras;
};
var IonTabs = class _IonTabs {
  navCtrl;
  tabsInner;
  /**
   * Emitted before the tab view is changed.
   */
  ionTabsWillChange = new EventEmitter();
  /**
   * Emitted after the tab view is changed.
   */
  ionTabsDidChange = new EventEmitter();
  tabBarSlot = "bottom";
  hasTab = false;
  selectedTab;
  leavingTab;
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
  }
  ngAfterViewInit() {
    const firstTab = this.tabs.length > 0 ? this.tabs.first : void 0;
    if (firstTab) {
      this.hasTab = true;
      this.setActiveTab(firstTab.tab);
      this.tabSwitch();
    }
  }
  ngAfterContentInit() {
    this.detectSlotChanges();
  }
  ngAfterContentChecked() {
    this.detectSlotChanges();
  }
  /**
   * @internal
   */
  onStackWillChange({
    enteringView,
    tabSwitch
  }) {
    const stackId = enteringView.stackId;
    if (tabSwitch && stackId !== void 0) {
      this.ionTabsWillChange.emit({
        tab: stackId
      });
    }
  }
  /**
   * @internal
   */
  onStackDidChange({
    enteringView,
    tabSwitch
  }) {
    const stackId = enteringView.stackId;
    if (tabSwitch && stackId !== void 0) {
      if (this.tabBar) {
        this.tabBar.selectedTab = stackId;
      }
      this.ionTabsDidChange.emit({
        tab: stackId
      });
    }
  }
  /**
   * Host listener for the `ionTabButtonClick` event. Angular 22 enabled stricter
   * host-binding type checking, which types `$event` as the DOM `Event`. That is
   * not assignable to `select`'s public `string | CustomEvent` parameter, so this
   * thin wrapper narrows the event before forwarding to keep `select`'s public
   * signature intact.
   */
  onTabButtonClick(ev) {
    return this.select(ev);
  }
  /**
   * When a tab button is clicked, there are several scenarios:
   * 1. If the selected tab is currently active (the tab button has been clicked
   *    again), then it should go to the root view for that tab.
   *
   *   a. Get the saved root view from the router outlet. If the saved root view
   *      matches the tabRootUrl, set the route view to this view including the
   *      navigation extras. Any `queryParams` or `fragment` declared on the tab
   *      button's `href` are also forwarded.
   *   b. If the saved root view from the router outlet does not match, navigate
   *      to the tabRootUrl, forwarding any `queryParams`/`fragment` declared on
   *      the tab button's `href`.
   *
   * 2. If the current tab tab is not currently selected, get the last route
   *    view from the router outlet.
   *
   *   a. If the last route view exists, navigate to that view including any
   *      navigation extras.
   *   b. If the last route view doesn't exist, then navigate to the default
   *      tabRootUrl, forwarding any `queryParams`/`fragment` declared on the
   *      tab button's `href`.
   */
  select(tabOrEvent) {
    const isTabString = typeof tabOrEvent === "string";
    const tab = isTabString ? tabOrEvent : tabOrEvent.detail.tab;
    const href = isTabString ? void 0 : tabOrEvent.detail.href;
    if (this.hasTab) {
      this.setActiveTab(tab);
      this.tabSwitch();
      return;
    }
    const alreadySelected = this.outlet.getActiveStackId() === tab;
    const tabRootUrl = `${this.outlet.tabsPrefix}/${tab}`;
    const hrefExtras = parseHrefExtras(href);
    if (!isTabString) {
      tabOrEvent.stopPropagation();
    }
    if (alreadySelected) {
      const activeStackId = this.outlet.getActiveStackId();
      const activeView = this.outlet.getLastRouteView(activeStackId);
      if (activeView?.url === tabRootUrl) {
        return;
      }
      const rootView = this.outlet.getRootView(tab);
      const navigationExtras = rootView && tabRootUrl === rootView.url && rootView.savedExtras;
      return this.navCtrl.navigateRoot(tabRootUrl, __spreadProps(__spreadValues(__spreadValues({}, navigationExtras), hrefExtras), {
        animated: true,
        animationDirection: "back"
      }));
    } else {
      const lastRoute = this.outlet.getLastRouteView(tab);
      const url = lastRoute?.url || tabRootUrl;
      const navigationExtras = lastRoute?.savedExtras ?? (url === tabRootUrl ? hrefExtras : void 0);
      return this.navCtrl.navigateRoot(url, __spreadProps(__spreadValues({}, navigationExtras), {
        animated: true,
        animationDirection: "back"
      }));
    }
  }
  setActiveTab(tab) {
    const tabs = this.tabs;
    const selectedTab = tabs.find((t5) => t5.tab === tab);
    if (!selectedTab) {
      console.error(`[Ionic Error]: Tab with id: "${tab}" does not exist`);
      return;
    }
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({
      tab
    });
    selectedTab.el.active = true;
  }
  tabSwitch() {
    const {
      selectedTab,
      leavingTab
    } = this;
    if (this.tabBar && selectedTab) {
      this.tabBar.selectedTab = selectedTab.tab;
    }
    if (leavingTab?.tab !== selectedTab?.tab) {
      if (leavingTab?.el) {
        leavingTab.el.active = false;
      }
    }
    if (selectedTab) {
      this.ionTabsDidChange.emit({
        tab: selectedTab.tab
      });
    }
  }
  getSelected() {
    if (this.hasTab) {
      return this.selectedTab?.tab;
    }
    return this.outlet.getActiveStackId();
  }
  /**
   * Detects changes to the slot attribute of the tab bar.
   *
   * If the slot attribute has changed, then the tab bar
   * should be relocated to the new slot position.
   */
  detectSlotChanges() {
    this.tabBars.forEach((tabBar) => {
      const currentSlot = tabBar.el.getAttribute("slot");
      if (currentSlot !== this.tabBarSlot) {
        this.tabBarSlot = currentSlot;
        this.relocateTabBar();
      }
    });
  }
  /**
   * Relocates the tab bar to the new slot position.
   */
  relocateTabBar() {
    const tabBar = this.tabBar.el;
    if (this.tabBarSlot === "top") {
      this.tabsInner.nativeElement.before(tabBar);
    } else {
      this.tabsInner.nativeElement.after(tabBar);
    }
  }
  /** @nocollapse */
  static ɵfac = function IonTabs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonTabs)(ɵɵdirectiveInject(NavController));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _IonTabs,
    selectors: [["ion-tabs"]],
    viewQuery: function IonTabs_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabsInner = _t.first);
      }
    },
    hostBindings: function IonTabs_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionTabButtonClick", function IonTabs_ionTabButtonClick_HostBindingHandler($event) {
          return ctx.onTabButtonClick($event);
        });
      }
    },
    outputs: {
      ionTabsWillChange: "ionTabsWillChange",
      ionTabsDidChange: "ionTabsDidChange"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs, [{
    type: Directive,
    args: [{
      selector: "ion-tabs"
    }]
  }], () => [{
    type: NavController
  }], {
    tabsInner: [{
      type: ViewChild,
      args: ["tabsInner", {
        read: ElementRef,
        static: true
      }]
    }],
    ionTabsWillChange: [{
      type: Output
    }],
    ionTabsDidChange: [{
      type: Output
    }],
    onTabButtonClick: [{
      type: HostListener,
      args: ["ionTabButtonClick", ["$event"]]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/utils/overlay.js
var OverlayBaseController = class {
  ctrl;
  constructor(ctrl) {
    this.ctrl = ctrl;
  }
  /**
   * Creates a new overlay
   */
  create(opts) {
    return this.ctrl.create(opts || {});
  }
  /**
   * When `id` is not provided, it dismisses the top overlay.
   */
  dismiss(data, role, id) {
    return this.ctrl.dismiss(data, role, id);
  }
  /**
   * Returns the top overlay.
   */
  getTop() {
    return this.ctrl.getTop();
  }
};

export {
  DomController,
  MenuController,
  t2 as t,
  a4 as a,
  d3 as d,
  v,
  P,
  o3 as o,
  n4 as n,
  a5 as a2,
  y2 as y,
  h3 as h,
  s4 as s,
  n5 as n2,
  o4 as o2,
  r4 as r,
  l4 as l,
  p3 as p,
  t4 as t2,
  o6 as o3,
  r5 as r2,
  h4 as h2,
  v2,
  j,
  T,
  O,
  C,
  A,
  B,
  D,
  I,
  F,
  $,
  q,
  z,
  V,
  W,
  H,
  Q,
  nn,
  en,
  on,
  tn,
  an,
  sn,
  dn,
  e2 as e,
  Platform,
  NavController,
  Config,
  ConfigToken,
  NavParams,
  IonModalToken,
  AngularDelegate,
  ProxyCmp,
  IonModal,
  IonPopover,
  IonRouterOutlet,
  provideComponentInputBinding,
  raf,
  ValueAccessor,
  setIonicClasses,
  IonBackButton,
  IonNav,
  RouterLinkDelegateDirective,
  RouterLinkWithHrefDelegateDirective,
  IonTabs,
  OverlayBaseController,
  IonicRouteStrategy
};
//# sourceMappingURL=chunk-7ZI3TOGP.js.map
