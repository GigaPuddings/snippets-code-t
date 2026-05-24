import { _ as M, y as x, A as L, aR as B, F as Ke, B as Me, at as de, aS as Ae, aq as S, aT as Ge, aj as ze, T as be, aU as Ve, au as Ye, av as je, aD as he, H as ne, $ as Ue, X as We, I as He, an as Je, aa as we, a0 as Ie, aV as ue, a2 as Ze, ax as Ee, W as qe, aE as Qe, aW as Xe, aX as xe, aY as eo, aQ as oo, aC as no } from "./useGitStatus-CNStG48p.js";
import { I as to, c as h, d as P, p as D, r as $, M as C, Q as W, o as ye, m as f, L as Ce, a as k, t as J, a9 as lo, w as Te, Z as y, q as K, h as I, v as b, aa as ro, ab as so, f as G, j, R as io, y as X, l as Z, g as $e, n as ao, k as ke, x as co, z as oe, F as uo, B as po, a6 as fo, A as Q } from "./runtime-entry-tQyhiVLl.js";
const pe = to("branch", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M9 44C11.2091 44 13 42.2091 13 40C13 37.7909 11.2091 36 9 36C6.79086 36 5 37.7909 5 40C5 42.2091 6.79086 44 9 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M9 12V36V24.0083H36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), mo = /* @__PURE__ */ P({
  inheritAttrs: !1
});
function vo(e, n, l, t, a, i) {
  return D(e.$slots, "default");
}
var go = /* @__PURE__ */ M(mo, [["render", vo], ["__file", "collection.vue"]]);
const _o = /* @__PURE__ */ P({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function bo(e, n, l, t, a, i) {
  return D(e.$slots, "default");
}
var ho = /* @__PURE__ */ M(_o, [["render", bo], ["__file", "collection-item.vue"]]);
const Se = "data-el-collection-item", Oe = (e) => {
  const n = `El${e}Collection`, l = `${n}Item`, t = Symbol(n), a = Symbol(l), i = {
    ...go,
    name: n,
    setup() {
      const s = $(), u = /* @__PURE__ */ new Map();
      W(t, {
        itemMap: u,
        getItems: () => {
          const m = f(s);
          if (!m)
            return [];
          const p = Array.from(m.querySelectorAll(`[${Se}]`));
          return [...u.values()].sort((o, d) => p.indexOf(o.ref) - p.indexOf(d.ref));
        },
        collectionRef: s
      });
    }
  }, c = {
    ...ho,
    name: l,
    setup(s, { attrs: u }) {
      const g = $(), m = C(t, void 0);
      W(a, {
        collectionItemRef: g
      }), ye(() => {
        const p = f(g);
        p && m.itemMap.set(p, {
          ref: p,
          ...u
        });
      }), Ce(() => {
        const p = f(g);
        m.itemMap.delete(p);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: t,
    COLLECTION_ITEM_INJECTION_KEY: a,
    ElCollection: i,
    ElCollectionItem: c
  };
}, wo = x({
  style: { type: L([String, Array, Object]) },
  currentTabId: {
    type: L(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: L(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
}), {
  ElCollection: Io,
  ElCollectionItem: Eo,
  COLLECTION_INJECTION_KEY: te,
  COLLECTION_ITEM_INJECTION_KEY: yo
} = Oe("RovingFocusGroup"), le = Symbol("elRovingFocusGroup"), Ne = Symbol("elRovingFocusGroupItem"), Co = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
}, To = (e, n) => e, $o = (e, n, l) => {
  const t = To(e.code);
  return Co[t];
}, ko = (e, n) => e.map((l, t) => e[(t + n) % e.length]), re = (e) => {
  const { activeElement: n } = document;
  for (const l of e)
    if (l === n || (l.focus(), n !== document.activeElement))
      return;
}, fe = "currentTabIdChange", me = "rovingFocusGroup.entryFocus", So = { bubbles: !1, cancelable: !0 }, Oo = P({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: !1,
  props: wo,
  emits: [fe, "entryFocus"],
  setup(e, { emit: n }) {
    var l;
    const t = $((l = e.currentTabId || e.defaultCurrentTabId) != null ? l : null), a = $(!1), i = $(!1), c = $(), { getItems: s } = C(te, void 0), u = k(() => [
      {
        outline: "none"
      },
      e.style
    ]), g = (v) => {
      n(fe, v);
    }, m = () => {
      a.value = !0;
    }, p = B((v) => {
      var _;
      (_ = e.onMousedown) == null || _.call(e, v);
    }, () => {
      i.value = !0;
    }), E = B((v) => {
      var _;
      (_ = e.onFocus) == null || _.call(e, v);
    }, (v) => {
      const _ = !f(i), { target: A, currentTarget: N } = v;
      if (A === N && _ && !f(a)) {
        const z = new Event(me, So);
        if (N?.dispatchEvent(z), !z.defaultPrevented) {
          const w = s().filter((R) => R.focusable), F = w.find((R) => R.active), T = w.find((R) => R.id === f(t)), Y = [F, T, ...w].filter(Boolean).map((R) => R.ref);
          re(Y);
        }
      }
      i.value = !1;
    }), o = B((v) => {
      var _;
      (_ = e.onBlur) == null || _.call(e, v);
    }, () => {
      a.value = !1;
    }), d = (...v) => {
      n("entryFocus", ...v);
    };
    W(le, {
      currentTabbedId: lo(t),
      loop: J(e, "loop"),
      tabIndex: k(() => f(a) ? -1 : 0),
      rovingFocusGroupRef: c,
      rovingFocusGroupRootStyle: u,
      orientation: J(e, "orientation"),
      dir: J(e, "dir"),
      onItemFocus: g,
      onItemShiftTab: m,
      onBlur: o,
      onFocus: E,
      onMousedown: p
    }), Te(() => e.currentTabId, (v) => {
      t.value = v ?? null;
    }), Ke(c, me, d);
  }
});
function No(e, n, l, t, a, i) {
  return D(e.$slots, "default");
}
var Ro = /* @__PURE__ */ M(Oo, [["render", No], ["__file", "roving-focus-group-impl.vue"]]);
const Fo = P({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: Io,
    ElRovingFocusGroupImpl: Ro
  }
});
function Lo(e, n, l, t, a, i) {
  const c = y("el-roving-focus-group-impl"), s = y("el-focus-group-collection");
  return I(), K(s, null, {
    default: b(() => [
      h(c, ro(so(e.$attrs)), {
        default: b(() => [
          D(e.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var Bo = /* @__PURE__ */ M(Fo, [["render", Lo], ["__file", "roving-focus-group.vue"]]);
const Do = x({
  trigger: Ge.trigger,
  triggerKeys: {
    type: L(Array),
    default: () => [
      S.enter,
      S.numpadEnter,
      S.space,
      S.down
    ]
  },
  effect: {
    ...de.effect,
    default: "light"
  },
  type: {
    type: L(String)
  },
  placement: {
    type: L(String),
    default: "bottom"
  },
  popperOptions: {
    type: L(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: L([Number, String]),
    default: 0
  },
  maxHeight: {
    type: L([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  role: {
    type: String,
    values: Ae,
    default: "menu"
  },
  buttonProps: {
    type: L(Object)
  },
  teleported: de.teleported,
  persistent: {
    type: Boolean,
    default: !0
  }
}), Re = x({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: Me
  }
}), Po = x({
  onKeydown: { type: L(Function) }
}), Ko = [
  S.down,
  S.pageDown,
  S.home
], Fe = [S.up, S.pageUp, S.end], Mo = [...Ko, ...Fe], {
  ElCollection: Ao,
  ElCollectionItem: Go,
  COLLECTION_INJECTION_KEY: zo,
  COLLECTION_ITEM_INJECTION_KEY: Vo
} = Oe("Dropdown"), ee = Symbol("elDropdown"), { ButtonGroup: Yo } = he, jo = P({
  name: "ElDropdown",
  components: {
    ElButton: he,
    ElButtonGroup: Yo,
    ElScrollbar: je,
    ElDropdownCollection: Ao,
    ElTooltip: Ye,
    ElRovingFocusGroup: Bo,
    ElOnlyChild: Ve,
    ElIcon: be,
    ArrowDown: ze
  },
  props: Do,
  emits: ["visible-change", "click", "command"],
  setup(e, { emit: n }) {
    const l = $e(), t = ne("dropdown"), { t: a } = Ue(), i = $(), c = $(), s = $(), u = $(), g = $(null), m = $(null), p = $(!1), E = k(() => ({
      maxHeight: We(e.maxHeight)
    })), o = k(() => [t.m(w.value)]), d = k(() => Je(e.trigger)), v = we().value, _ = k(() => e.id || v);
    Te([i, d], ([r, O], [U]) => {
      var ie, ae, ce;
      (ie = U?.$el) != null && ie.removeEventListener && U.$el.removeEventListener("pointerenter", T), (ae = r?.$el) != null && ae.removeEventListener && r.$el.removeEventListener("pointerenter", T), (ce = r?.$el) != null && ce.addEventListener && O.includes("hover") && r.$el.addEventListener("pointerenter", T);
    }, { immediate: !0 }), Ce(() => {
      var r, O;
      (O = (r = i.value) == null ? void 0 : r.$el) != null && O.removeEventListener && i.value.$el.removeEventListener("pointerenter", T);
    });
    function A() {
      N();
    }
    function N() {
      var r;
      (r = s.value) == null || r.onClose();
    }
    function z() {
      var r;
      (r = s.value) == null || r.onOpen();
    }
    const w = He();
    function F(...r) {
      n("command", ...r);
    }
    function T() {
      var r, O;
      (O = (r = i.value) == null ? void 0 : r.$el) == null || O.focus();
    }
    function V() {
    }
    function Y() {
      const r = f(u);
      d.value.includes("hover") && r?.focus(), m.value = null;
    }
    function R(r) {
      m.value = r;
    }
    function se(r) {
      p.value || (r.preventDefault(), r.stopImmediatePropagation());
    }
    function q() {
      n("visible-change", !0);
    }
    function H(r) {
      var O;
      r?.type === "keydown" && ((O = u.value) == null || O.focus());
    }
    function Pe() {
      n("visible-change", !1);
    }
    return W(ee, {
      contentRef: u,
      role: k(() => e.role),
      triggerId: _,
      isUsingKeyboard: p,
      onItemEnter: V,
      onItemLeave: Y
    }), W("elDropdown", {
      instance: l,
      dropdownSize: w,
      handleClick: A,
      commandHandler: F,
      trigger: J(e, "trigger"),
      hideOnClick: J(e, "hideOnClick")
    }), {
      t: a,
      ns: t,
      scrollbar: g,
      wrapStyle: E,
      dropdownTriggerKls: o,
      dropdownSize: w,
      triggerId: _,
      currentTabId: m,
      handleCurrentTabIdChange: R,
      handlerMainButtonClick: (r) => {
        n("click", r);
      },
      handleEntryFocus: se,
      handleClose: N,
      handleOpen: z,
      handleBeforeShowTooltip: q,
      handleShowTooltip: H,
      handleBeforeHideTooltip: Pe,
      onFocusAfterTrapped: (r) => {
        var O, U;
        r.preventDefault(), (U = (O = u.value) == null ? void 0 : O.focus) == null || U.call(O, {
          preventScroll: !0
        });
      },
      popperRef: s,
      contentRef: u,
      triggeringElementRef: i,
      referenceElementRef: c
    };
  }
});
function Uo(e, n, l, t, a, i) {
  var c;
  const s = y("el-dropdown-collection"), u = y("el-roving-focus-group"), g = y("el-scrollbar"), m = y("el-only-child"), p = y("el-tooltip"), E = y("el-button"), o = y("arrow-down"), d = y("el-icon"), v = y("el-button-group");
  return I(), G("div", {
    class: Z([e.ns.b(), e.ns.is("disabled", e.disabled)])
  }, [
    h(p, {
      ref: "popperRef",
      role: e.role,
      effect: e.effect,
      "fallback-placements": ["bottom", "top"],
      "popper-options": e.popperOptions,
      "gpu-acceleration": !1,
      "hide-after": e.trigger === "hover" ? e.hideTimeout : 0,
      "manual-mode": !0,
      placement: e.placement,
      "popper-class": [e.ns.e("popper"), e.popperClass],
      "reference-element": (c = e.referenceElementRef) == null ? void 0 : c.$el,
      trigger: e.trigger,
      "trigger-keys": e.triggerKeys,
      "trigger-target-el": e.contentRef,
      "show-after": e.trigger === "hover" ? e.showTimeout : 0,
      "stop-popper-mouse-event": !1,
      "virtual-ref": e.triggeringElementRef,
      "virtual-triggering": e.splitButton,
      disabled: e.disabled,
      transition: `${e.ns.namespace.value}-zoom-in-top`,
      teleported: e.teleported,
      pure: "",
      persistent: e.persistent,
      onBeforeShow: e.handleBeforeShowTooltip,
      onShow: e.handleShowTooltip,
      onBeforeHide: e.handleBeforeHideTooltip
    }, io({
      content: b(() => [
        h(g, {
          ref: "scrollbar",
          "wrap-style": e.wrapStyle,
          tag: "div",
          "view-class": e.ns.e("list")
        }, {
          default: b(() => [
            h(u, {
              loop: e.loop,
              "current-tab-id": e.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: e.handleCurrentTabIdChange,
              onEntryFocus: e.handleEntryFocus
            }, {
              default: b(() => [
                h(s, null, {
                  default: b(() => [
                    D(e.$slots, "dropdown")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])
          ]),
          _: 3
        }, 8, ["wrap-style", "view-class"])
      ]),
      _: 2
    }, [
      e.splitButton ? void 0 : {
        name: "default",
        fn: b(() => [
          h(m, {
            id: e.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: e.tabindex
          }, {
            default: b(() => [
              D(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      }
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]),
    e.splitButton ? (I(), K(v, { key: 0 }, {
      default: b(() => [
        h(E, X({ ref: "referenceElementRef" }, e.buttonProps, {
          size: e.dropdownSize,
          type: e.type,
          disabled: e.disabled,
          tabindex: e.tabindex,
          onClick: e.handlerMainButtonClick
        }), {
          default: b(() => [
            D(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        h(E, X({
          id: e.triggerId,
          ref: "triggeringElementRef"
        }, e.buttonProps, {
          role: "button",
          size: e.dropdownSize,
          type: e.type,
          class: e.ns.e("caret-button"),
          disabled: e.disabled,
          tabindex: e.tabindex,
          "aria-label": e.t("el.dropdown.toggleDropdown")
        }), {
          default: b(() => [
            h(d, {
              class: Z(e.ns.e("icon"))
            }, {
              default: b(() => [
                h(o)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : j("v-if", !0)
  ], 2);
}
var Wo = /* @__PURE__ */ M(jo, [["render", Uo], ["__file", "dropdown.vue"]]);
const Ho = P({
  components: {
    ElRovingFocusCollectionItem: Eo
  },
  props: {
    focusable: {
      type: Boolean,
      default: !0
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["mousedown", "focus", "keydown"],
  setup(e, { emit: n }) {
    const { currentTabbedId: l, loop: t, onItemFocus: a, onItemShiftTab: i } = C(le, void 0), { getItems: c } = C(te, void 0), s = we(), u = $(), g = B((o) => {
      n("mousedown", o);
    }, (o) => {
      e.focusable ? a(f(s)) : o.preventDefault();
    }), m = B((o) => {
      n("focus", o);
    }, () => {
      a(f(s));
    }), p = B((o) => {
      n("keydown", o);
    }, (o) => {
      const { code: d, shiftKey: v, target: _, currentTarget: A } = o;
      if (d === S.tab && v) {
        i();
        return;
      }
      if (_ !== A)
        return;
      const N = $o(o);
      if (N) {
        o.preventDefault();
        let w = c().filter((F) => F.focusable).map((F) => F.ref);
        switch (N) {
          case "last": {
            w.reverse();
            break;
          }
          case "prev":
          case "next": {
            N === "prev" && w.reverse();
            const F = w.indexOf(A);
            w = t.value ? ko(w, F + 1) : w.slice(F + 1);
            break;
          }
        }
        ao(() => {
          re(w);
        });
      }
    }), E = k(() => l.value === f(s));
    return W(Ne, {
      rovingFocusGroupItemRef: u,
      tabIndex: k(() => f(E) ? 0 : -1),
      handleMousedown: g,
      handleFocus: m,
      handleKeydown: p
    }), {
      id: s,
      handleKeydown: p,
      handleFocus: m,
      handleMousedown: g
    };
  }
});
function Jo(e, n, l, t, a, i) {
  const c = y("el-roving-focus-collection-item");
  return I(), K(c, {
    id: e.id,
    focusable: e.focusable,
    active: e.active
  }, {
    default: b(() => [
      D(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var Zo = /* @__PURE__ */ M(Ho, [["render", Jo], ["__file", "roving-focus-item.vue"]]);
const qo = P({
  name: "DropdownItemImpl",
  components: {
    ElIcon: be
  },
  props: Re,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(e, { emit: n }) {
    const l = ne("dropdown"), { role: t } = C(ee, void 0), { collectionItemRef: a } = C(Vo, void 0), { collectionItemRef: i } = C(yo, void 0), {
      rovingFocusGroupItemRef: c,
      tabIndex: s,
      handleFocus: u,
      handleKeydown: g,
      handleMousedown: m
    } = C(Ne, void 0), p = Ie(a, i, c), E = k(() => t.value === "menu" ? "menuitem" : t.value === "navigation" ? "link" : "button"), o = B((d) => {
      if ([S.enter, S.numpadEnter, S.space].includes(d.code))
        return d.preventDefault(), d.stopImmediatePropagation(), n("clickimpl", d), !0;
    }, g);
    return {
      ns: l,
      itemRef: p,
      dataset: {
        [Se]: ""
      },
      role: E,
      tabIndex: s,
      handleFocus: u,
      handleKeydown: o,
      handleMousedown: m
    };
  }
});
function Qo(e, n, l, t, a, i) {
  const c = y("el-icon");
  return I(), G(uo, null, [
    e.divided ? (I(), G("li", {
      key: 0,
      role: "separator",
      class: Z(e.ns.bem("menu", "item", "divided"))
    }, null, 2)) : j("v-if", !0),
    ke("li", X({ ref: e.itemRef }, { ...e.dataset, ...e.$attrs }, {
      "aria-disabled": e.disabled,
      class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)],
      tabindex: e.tabIndex,
      role: e.role,
      onClick: (s) => e.$emit("clickimpl", s),
      onFocus: e.handleFocus,
      onKeydown: oe(e.handleKeydown, ["self"]),
      onMousedown: e.handleMousedown,
      onPointermove: (s) => e.$emit("pointermove", s),
      onPointerleave: (s) => e.$emit("pointerleave", s)
    }), [
      e.icon ? (I(), K(c, { key: 0 }, {
        default: b(() => [
          (I(), K(co(e.icon)))
        ]),
        _: 1
      })) : j("v-if", !0),
      D(e.$slots, "default")
    ], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])
  ], 64);
}
var Xo = /* @__PURE__ */ M(qo, [["render", Qo], ["__file", "dropdown-item-impl.vue"]]);
const Le = () => {
  const e = C("elDropdown", {}), n = k(() => e?.dropdownSize);
  return {
    elDropdown: e,
    _elDropdownSize: n
  };
}, xo = P({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: Go,
    ElRovingFocusItem: Zo,
    ElDropdownItemImpl: Xo
  },
  inheritAttrs: !1,
  props: Re,
  emits: ["pointermove", "pointerleave", "click"],
  setup(e, { emit: n, attrs: l }) {
    const { elDropdown: t } = Le(), a = $e(), i = $(null), c = k(() => {
      var o, d;
      return (d = (o = f(i)) == null ? void 0 : o.textContent) != null ? d : "";
    }), { onItemEnter: s, onItemLeave: u } = C(ee, void 0), g = B((o) => (n("pointermove", o), o.defaultPrevented), ue((o) => {
      if (e.disabled) {
        u(o);
        return;
      }
      const d = o.currentTarget;
      d === document.activeElement || d.contains(document.activeElement) || (s(o), o.defaultPrevented || d?.focus());
    })), m = B((o) => (n("pointerleave", o), o.defaultPrevented), ue(u)), p = B((o) => {
      if (!e.disabled)
        return n("click", o), o.type !== "keydown" && o.defaultPrevented;
    }, (o) => {
      var d, v, _;
      if (e.disabled) {
        o.stopImmediatePropagation();
        return;
      }
      (d = t?.hideOnClick) != null && d.value && ((v = t.handleClick) == null || v.call(t)), (_ = t.commandHandler) == null || _.call(t, e.command, a, o);
    }), E = k(() => ({ ...e, ...l }));
    return {
      handleClick: p,
      handlePointerMove: g,
      handlePointerLeave: m,
      textContent: c,
      propsAndAttrs: E
    };
  }
});
function en(e, n, l, t, a, i) {
  var c;
  const s = y("el-dropdown-item-impl"), u = y("el-roving-focus-item"), g = y("el-dropdown-collection-item");
  return I(), K(g, {
    disabled: e.disabled,
    "text-value": (c = e.textValue) != null ? c : e.textContent
  }, {
    default: b(() => [
      h(u, {
        focusable: !e.disabled
      }, {
        default: b(() => [
          h(s, X(e.propsAndAttrs, {
            onPointerleave: e.handlePointerLeave,
            onPointermove: e.handlePointerMove,
            onClickimpl: e.handleClick
          }), {
            default: b(() => [
              D(e.$slots, "default")
            ]),
            _: 3
          }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])
        ]),
        _: 3
      }, 8, ["focusable"])
    ]),
    _: 3
  }, 8, ["disabled", "text-value"]);
}
var Be = /* @__PURE__ */ M(xo, [["render", en], ["__file", "dropdown-item.vue"]]);
const on = P({
  name: "ElDropdownMenu",
  props: Po,
  setup(e) {
    const n = ne("dropdown"), { _elDropdownSize: l } = Le(), t = l.value, { focusTrapRef: a, onKeydown: i } = C(Ze, void 0), { contentRef: c, role: s, triggerId: u } = C(ee, void 0), { collectionRef: g, getItems: m } = C(zo, void 0), {
      rovingFocusGroupRef: p,
      rovingFocusGroupRootStyle: E,
      tabIndex: o,
      onBlur: d,
      onFocus: v,
      onMousedown: _
    } = C(le, void 0), { collectionRef: A } = C(te, void 0), N = k(() => [n.b("menu"), n.bm("menu", t?.value)]), z = Ie(c, g, a, p, A), w = B((T) => {
      var V;
      (V = e.onKeydown) == null || V.call(e, T);
    }, (T) => {
      const { currentTarget: V, code: Y, target: R } = T;
      if (V.contains(R), S.tab === Y && T.stopImmediatePropagation(), T.preventDefault(), R !== f(c) || !Mo.includes(Y))
        return;
      const q = m().filter((H) => !H.disabled).map((H) => H.ref);
      Fe.includes(Y) && q.reverse(), re(q);
    });
    return {
      size: t,
      rovingFocusGroupRootStyle: E,
      tabIndex: o,
      dropdownKls: N,
      role: s,
      triggerId: u,
      dropdownListWrapperRef: z,
      handleKeydown: (T) => {
        w(T), i(T);
      },
      onBlur: d,
      onFocus: v,
      onMousedown: _
    };
  }
});
function nn(e, n, l, t, a, i) {
  return I(), G("ul", {
    ref: e.dropdownListWrapperRef,
    class: Z(e.dropdownKls),
    style: po(e.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: e.role,
    "aria-labelledby": e.triggerId,
    onBlur: e.onBlur,
    onFocus: e.onFocus,
    onKeydown: oe(e.handleKeydown, ["self"]),
    onMousedown: oe(e.onMousedown, ["self"])
  }, [
    D(e.$slots, "default")
  ], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var De = /* @__PURE__ */ M(on, [["render", nn], ["__file", "dropdown-menu.vue"]]);
qe(Wo, {
  DropdownItem: Be,
  DropdownMenu: De
});
const tn = Ee(Be);
Ee(De);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var ve;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ve || (ve = {}));
var ge;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ge || (ge = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var _e;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(_e || (_e = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const ln = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function rn() {
  return C(ln);
}
const sn = ["title"], an = {
  key: 2,
  class: "git-badge"
}, cn = {
  key: 3,
  class: "git-time"
}, dn = { class: "ml-2" }, un = {
  key: 0,
  class: "git-badge ml-1"
}, pn = /* @__PURE__ */ P({
  __name: "TitlebarGitStatus",
  props: {
    variant: { default: "inline" }
  },
  setup(e) {
    const n = rn(), {
      syncState: l,
      pendingFilesCount: t,
      formattedLastSyncTime: a,
      refreshStatus: i,
      refreshSettings: c,
      stateDescription: s,
      gitSettings: u
    } = Qe(), g = k(() => !!u.value?.enabled && l.value !== "error"), m = () => {
      n.push("/config/category/settings?tab=gitSync");
    };
    return ye(async () => {
      Xe(), xe(i), await c(), await i();
    }), fo(() => {
      eo();
    }), (p, E) => {
      const o = tn;
      return g.value && p.variant === "inline" ? (I(), G("div", {
        key: 0,
        class: Z(["git-status-indicator", `git-status-${f(l)}`]),
        title: f(s),
        onClick: m
      }, [
        f(l) === "syncing" ? (I(), K(f(oo), {
          key: 0,
          class: "icon git-sync-icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })) : (I(), K(f(pe), {
          key: 1,
          class: "icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })),
        f(l) === "has_changes" ? (I(), G(
          "span",
          an,
          Q(f(t)),
          1
          /* TEXT */
        )) : j("v-if", !0),
        f(a) && f(l) !== "syncing" ? (I(), G(
          "span",
          cn,
          Q(f(a)),
          1
          /* TEXT */
        )) : j("v-if", !0)
      ], 10, sn)) : g.value ? (I(), K(o, {
        key: 1,
        onClick: m
      }, {
        default: b(() => [
          h(f(pe), {
            theme: "outline",
            size: "16",
            strokeWidth: 3,
            class: "align-middle"
          }),
          ke(
            "span",
            dn,
            Q(p.$t("titlebar.gitSync")),
            1
            /* TEXT */
          ),
          f(l) === "has_changes" ? (I(), G(
            "span",
            un,
            Q(f(t)),
            1
            /* TEXT */
          )) : j("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })) : j("v-if", !0);
    };
  }
}), _n = /* @__PURE__ */ no(pn, [["__scopeId", "data-v-c2d8aaac"]]);
export {
  _n as default
};
