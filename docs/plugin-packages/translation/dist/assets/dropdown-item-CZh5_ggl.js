import { d as L, g as B, r as C, C as h, Z as U, f as Re, u as O, a0 as fe, k as $, t as V, V as Ne, w as me, ae as I, b as H, o as K, v as _, c as R, j as ke, ay as Be, a as W, e as x, an as Pe, m as Z, n as q, D as ve, l as Ke, q as Le, y as De, ac as ee, F as Me, B as Ae } from "./runtime-entry-CxfepRbR.js";
import { E as ge, c as be } from "./refs-B-JiL9Zl.js";
import { _ as D, b as Q, d as k, b7 as P, b8 as Ge, ak as y, b9 as ze, ba as de, bb as Ye, bc as Ue, a3 as He, v as _e, bd as Je, g as Ve, an as je, u as oe, Z as We, b3 as Ze, a1 as qe, aZ as Qe, b1 as Ie, be as ce, bf as Xe, c as we, w as xe } from "./_plugin-vue_export-helper-Kpx6kpKo.js";
const eo = /* @__PURE__ */ L({
  inheritAttrs: !1
});
function oo(e, n, s, t, d, a) {
  return B(e.$slots, "default");
}
var no = /* @__PURE__ */ D(eo, [["render", oo], ["__file", "collection.vue"]]);
const to = /* @__PURE__ */ L({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function lo(e, n, s, t, d, a) {
  return B(e.$slots, "default");
}
var ro = /* @__PURE__ */ D(to, [["render", lo], ["__file", "collection-item.vue"]]);
const Ee = "data-el-collection-item", Ce = (e) => {
  const n = `El${e}Collection`, s = `${n}Item`, t = Symbol(n), d = Symbol(s), a = {
    ...no,
    name: n,
    setup() {
      const r = C(), u = /* @__PURE__ */ new Map();
      U(t, {
        itemMap: u,
        getItems: () => {
          const m = O(r);
          if (!m)
            return [];
          const f = Array.from(m.querySelectorAll(`[${Ee}]`));
          return [...u.values()].sort((o, i) => f.indexOf(o.ref) - f.indexOf(i.ref));
        },
        collectionRef: r
      });
    }
  }, c = {
    ...ro,
    name: s,
    setup(r, { attrs: u }) {
      const v = C(), m = h(t, void 0);
      U(d, {
        collectionItemRef: v
      }), Re(() => {
        const f = O(v);
        f && m.itemMap.set(f, {
          ref: f,
          ...u
        });
      }), fe(() => {
        const f = O(v);
        m.itemMap.delete(f);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: t,
    COLLECTION_ITEM_INJECTION_KEY: d,
    ElCollection: a,
    ElCollectionItem: c
  };
}, so = Q({
  style: { type: k([String, Array, Object]) },
  currentTabId: {
    type: k(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: k(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
}), {
  ElCollection: ao,
  ElCollectionItem: io,
  COLLECTION_INJECTION_KEY: ne,
  COLLECTION_ITEM_INJECTION_KEY: co
} = Ce("RovingFocusGroup"), te = Symbol("elRovingFocusGroup"), he = Symbol("elRovingFocusGroupItem"), uo = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
}, po = (e, n) => e, fo = (e, n, s) => {
  const t = po(e.code);
  return uo[t];
}, mo = (e, n) => e.map((s, t) => e[(t + n) % e.length]), le = (e) => {
  const { activeElement: n } = document;
  for (const s of e)
    if (s === n || (s.focus(), n !== document.activeElement))
      return;
}, ue = "currentTabIdChange", pe = "rovingFocusGroup.entryFocus", vo = { bubbles: !1, cancelable: !0 }, go = L({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: !1,
  props: so,
  emits: [ue, "entryFocus"],
  setup(e, { emit: n }) {
    var s;
    const t = C((s = e.currentTabId || e.defaultCurrentTabId) != null ? s : null), d = C(!1), a = C(!1), c = C(), { getItems: r } = h(ne, void 0), u = $(() => [
      {
        outline: "none"
      },
      e.style
    ]), v = (p) => {
      n(ue, p);
    }, m = () => {
      d.value = !0;
    }, f = P((p) => {
      var g;
      (g = e.onMousedown) == null || g.call(e, p);
    }, () => {
      a.value = !0;
    }), w = P((p) => {
      var g;
      (g = e.onFocus) == null || g.call(e, p);
    }, (p) => {
      const g = !O(a), { target: M, currentTarget: F } = p;
      if (M === F && g && !O(d)) {
        const A = new Event(pe, vo);
        if (F?.dispatchEvent(A), !A.defaultPrevented) {
          const b = r().filter((S) => S.focusable), N = b.find((S) => S.active), E = b.find((S) => S.id === O(t)), z = [N, E, ...b].filter(Boolean).map((S) => S.ref);
          le(z);
        }
      }
      a.value = !1;
    }), o = P((p) => {
      var g;
      (g = e.onBlur) == null || g.call(e, p);
    }, () => {
      d.value = !1;
    }), i = (...p) => {
      n("entryFocus", ...p);
    };
    U(te, {
      currentTabbedId: Ne(t),
      loop: V(e, "loop"),
      tabIndex: $(() => O(d) ? -1 : 0),
      rovingFocusGroupRef: c,
      rovingFocusGroupRootStyle: u,
      orientation: V(e, "orientation"),
      dir: V(e, "dir"),
      onItemFocus: v,
      onItemShiftTab: m,
      onBlur: o,
      onFocus: w,
      onMousedown: f
    }), me(() => e.currentTabId, (p) => {
      t.value = p ?? null;
    }), Ge(c, pe, i);
  }
});
function bo(e, n, s, t, d, a) {
  return B(e.$slots, "default");
}
var _o = /* @__PURE__ */ D(go, [["render", bo], ["__file", "roving-focus-group-impl.vue"]]);
const Io = L({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: ao,
    ElRovingFocusGroupImpl: _o
  }
});
function wo(e, n, s, t, d, a) {
  const c = I("el-roving-focus-group-impl"), r = I("el-focus-group-collection");
  return K(), H(r, null, {
    default: _(() => [
      R(c, ke(Be(e.$attrs)), {
        default: _(() => [
          B(e.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var Eo = /* @__PURE__ */ D(Io, [["render", wo], ["__file", "roving-focus-group.vue"]]);
const Co = Q({
  trigger: Ue.trigger,
  triggerKeys: {
    type: k(Array),
    default: () => [
      y.enter,
      y.numpadEnter,
      y.space,
      y.down
    ]
  },
  effect: {
    ...de.effect,
    default: "light"
  },
  type: {
    type: k(String)
  },
  placement: {
    type: k(String),
    default: "bottom"
  },
  popperOptions: {
    type: k(Object),
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
    type: k([Number, String]),
    default: 0
  },
  maxHeight: {
    type: k([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  role: {
    type: String,
    values: Ye,
    default: "menu"
  },
  buttonProps: {
    type: k(Object)
  },
  teleported: de.teleported,
  persistent: {
    type: Boolean,
    default: !0
  }
}), ye = Q({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: ze
  }
}), ho = Q({
  onKeydown: { type: k(Function) }
}), yo = [
  y.down,
  y.pageDown,
  y.home
], Te = [y.up, y.pageUp, y.end], To = [...yo, ...Te], {
  ElCollection: $o,
  ElCollectionItem: Oo,
  COLLECTION_INJECTION_KEY: Fo,
  COLLECTION_ITEM_INJECTION_KEY: So
} = Ce("Dropdown"), X = Symbol("elDropdown"), { ButtonGroup: Ro } = ge, No = L({
  name: "ElDropdown",
  components: {
    ElButton: ge,
    ElButtonGroup: Ro,
    ElScrollbar: je,
    ElDropdownCollection: $o,
    ElTooltip: Ve,
    ElRovingFocusGroup: Eo,
    ElOnlyChild: Je,
    ElIcon: _e,
    ArrowDown: He
  },
  props: Co,
  emits: ["visible-change", "click", "command"],
  setup(e, { emit: n }) {
    const s = ve(), t = oe("dropdown"), { t: d } = We(), a = C(), c = C(), r = C(), u = C(), v = C(null), m = C(null), f = C(!1), w = $(() => ({
      maxHeight: Ze(e.maxHeight)
    })), o = $(() => [t.m(b.value)]), i = $(() => Qe(e.trigger)), p = Ie().value, g = $(() => e.id || p);
    me([a, i], ([l, T], [Y]) => {
      var se, ae, ie;
      (se = Y?.$el) != null && se.removeEventListener && Y.$el.removeEventListener("pointerenter", E), (ae = l?.$el) != null && ae.removeEventListener && l.$el.removeEventListener("pointerenter", E), (ie = l?.$el) != null && ie.addEventListener && T.includes("hover") && l.$el.addEventListener("pointerenter", E);
    }, { immediate: !0 }), fe(() => {
      var l, T;
      (T = (l = a.value) == null ? void 0 : l.$el) != null && T.removeEventListener && a.value.$el.removeEventListener("pointerenter", E);
    });
    function M() {
      F();
    }
    function F() {
      var l;
      (l = r.value) == null || l.onClose();
    }
    function A() {
      var l;
      (l = r.value) == null || l.onOpen();
    }
    const b = qe();
    function N(...l) {
      n("command", ...l);
    }
    function E() {
      var l, T;
      (T = (l = a.value) == null ? void 0 : l.$el) == null || T.focus();
    }
    function G() {
    }
    function z() {
      const l = O(u);
      i.value.includes("hover") && l?.focus(), m.value = null;
    }
    function S(l) {
      m.value = l;
    }
    function re(l) {
      f.value || (l.preventDefault(), l.stopImmediatePropagation());
    }
    function j() {
      n("visible-change", !0);
    }
    function J(l) {
      var T;
      l?.type === "keydown" && ((T = u.value) == null || T.focus());
    }
    function Se() {
      n("visible-change", !1);
    }
    return U(X, {
      contentRef: u,
      role: $(() => e.role),
      triggerId: g,
      isUsingKeyboard: f,
      onItemEnter: G,
      onItemLeave: z
    }), U("elDropdown", {
      instance: s,
      dropdownSize: b,
      handleClick: M,
      commandHandler: N,
      trigger: V(e, "trigger"),
      hideOnClick: V(e, "hideOnClick")
    }), {
      t: d,
      ns: t,
      scrollbar: v,
      wrapStyle: w,
      dropdownTriggerKls: o,
      dropdownSize: b,
      triggerId: g,
      currentTabId: m,
      handleCurrentTabIdChange: S,
      handlerMainButtonClick: (l) => {
        n("click", l);
      },
      handleEntryFocus: re,
      handleClose: F,
      handleOpen: A,
      handleBeforeShowTooltip: j,
      handleShowTooltip: J,
      handleBeforeHideTooltip: Se,
      onFocusAfterTrapped: (l) => {
        var T, Y;
        l.preventDefault(), (Y = (T = u.value) == null ? void 0 : T.focus) == null || Y.call(T, {
          preventScroll: !0
        });
      },
      popperRef: r,
      contentRef: u,
      triggeringElementRef: a,
      referenceElementRef: c
    };
  }
});
function ko(e, n, s, t, d, a) {
  var c;
  const r = I("el-dropdown-collection"), u = I("el-roving-focus-group"), v = I("el-scrollbar"), m = I("el-only-child"), f = I("el-tooltip"), w = I("el-button"), o = I("arrow-down"), i = I("el-icon"), p = I("el-button-group");
  return K(), W("div", {
    class: q([e.ns.b(), e.ns.is("disabled", e.disabled)])
  }, [
    R(f, {
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
    }, Pe({
      content: _(() => [
        R(v, {
          ref: "scrollbar",
          "wrap-style": e.wrapStyle,
          tag: "div",
          "view-class": e.ns.e("list")
        }, {
          default: _(() => [
            R(u, {
              loop: e.loop,
              "current-tab-id": e.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: e.handleCurrentTabIdChange,
              onEntryFocus: e.handleEntryFocus
            }, {
              default: _(() => [
                R(r, null, {
                  default: _(() => [
                    B(e.$slots, "dropdown")
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
        fn: _(() => [
          R(m, {
            id: e.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: e.tabindex
          }, {
            default: _(() => [
              B(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      }
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]),
    e.splitButton ? (K(), H(p, { key: 0 }, {
      default: _(() => [
        R(w, Z({ ref: "referenceElementRef" }, e.buttonProps, {
          size: e.dropdownSize,
          type: e.type,
          disabled: e.disabled,
          tabindex: e.tabindex,
          onClick: e.handlerMainButtonClick
        }), {
          default: _(() => [
            B(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        R(w, Z({
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
          default: _(() => [
            R(i, {
              class: q(e.ns.e("icon"))
            }, {
              default: _(() => [
                R(o)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : x("v-if", !0)
  ], 2);
}
var Bo = /* @__PURE__ */ D(No, [["render", ko], ["__file", "dropdown.vue"]]);
const Po = L({
  components: {
    ElRovingFocusCollectionItem: io
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
    const { currentTabbedId: s, loop: t, onItemFocus: d, onItemShiftTab: a } = h(te, void 0), { getItems: c } = h(ne, void 0), r = Ie(), u = C(), v = P((o) => {
      n("mousedown", o);
    }, (o) => {
      e.focusable ? d(O(r)) : o.preventDefault();
    }), m = P((o) => {
      n("focus", o);
    }, () => {
      d(O(r));
    }), f = P((o) => {
      n("keydown", o);
    }, (o) => {
      const { code: i, shiftKey: p, target: g, currentTarget: M } = o;
      if (i === y.tab && p) {
        a();
        return;
      }
      if (g !== M)
        return;
      const F = fo(o);
      if (F) {
        o.preventDefault();
        let b = c().filter((N) => N.focusable).map((N) => N.ref);
        switch (F) {
          case "last": {
            b.reverse();
            break;
          }
          case "prev":
          case "next": {
            F === "prev" && b.reverse();
            const N = b.indexOf(M);
            b = t.value ? mo(b, N + 1) : b.slice(N + 1);
            break;
          }
        }
        Ke(() => {
          le(b);
        });
      }
    }), w = $(() => s.value === O(r));
    return U(he, {
      rovingFocusGroupItemRef: u,
      tabIndex: $(() => O(w) ? 0 : -1),
      handleMousedown: v,
      handleFocus: m,
      handleKeydown: f
    }), {
      id: r,
      handleKeydown: f,
      handleFocus: m,
      handleMousedown: v
    };
  }
});
function Ko(e, n, s, t, d, a) {
  const c = I("el-roving-focus-collection-item");
  return K(), H(c, {
    id: e.id,
    focusable: e.focusable,
    active: e.active
  }, {
    default: _(() => [
      B(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var Lo = /* @__PURE__ */ D(Po, [["render", Ko], ["__file", "roving-focus-item.vue"]]);
const Do = L({
  name: "DropdownItemImpl",
  components: {
    ElIcon: _e
  },
  props: ye,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(e, { emit: n }) {
    const s = oe("dropdown"), { role: t } = h(X, void 0), { collectionItemRef: d } = h(So, void 0), { collectionItemRef: a } = h(co, void 0), {
      rovingFocusGroupItemRef: c,
      tabIndex: r,
      handleFocus: u,
      handleKeydown: v,
      handleMousedown: m
    } = h(he, void 0), f = be(d, a, c), w = $(() => t.value === "menu" ? "menuitem" : t.value === "navigation" ? "link" : "button"), o = P((i) => {
      if ([y.enter, y.numpadEnter, y.space].includes(i.code))
        return i.preventDefault(), i.stopImmediatePropagation(), n("clickimpl", i), !0;
    }, v);
    return {
      ns: s,
      itemRef: f,
      dataset: {
        [Ee]: ""
      },
      role: w,
      tabIndex: r,
      handleFocus: u,
      handleKeydown: o,
      handleMousedown: m
    };
  }
});
function Mo(e, n, s, t, d, a) {
  const c = I("el-icon");
  return K(), W(Me, null, [
    e.divided ? (K(), W("li", {
      key: 0,
      role: "separator",
      class: q(e.ns.bem("menu", "item", "divided"))
    }, null, 2)) : x("v-if", !0),
    Le("li", Z({ ref: e.itemRef }, { ...e.dataset, ...e.$attrs }, {
      "aria-disabled": e.disabled,
      class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)],
      tabindex: e.tabIndex,
      role: e.role,
      onClick: (r) => e.$emit("clickimpl", r),
      onFocus: e.handleFocus,
      onKeydown: ee(e.handleKeydown, ["self"]),
      onMousedown: e.handleMousedown,
      onPointermove: (r) => e.$emit("pointermove", r),
      onPointerleave: (r) => e.$emit("pointerleave", r)
    }), [
      e.icon ? (K(), H(c, { key: 0 }, {
        default: _(() => [
          (K(), H(De(e.icon)))
        ]),
        _: 1
      })) : x("v-if", !0),
      B(e.$slots, "default")
    ], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])
  ], 64);
}
var Ao = /* @__PURE__ */ D(Do, [["render", Mo], ["__file", "dropdown-item-impl.vue"]]);
const $e = () => {
  const e = h("elDropdown", {}), n = $(() => e?.dropdownSize);
  return {
    elDropdown: e,
    _elDropdownSize: n
  };
}, Go = L({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: Oo,
    ElRovingFocusItem: Lo,
    ElDropdownItemImpl: Ao
  },
  inheritAttrs: !1,
  props: ye,
  emits: ["pointermove", "pointerleave", "click"],
  setup(e, { emit: n, attrs: s }) {
    const { elDropdown: t } = $e(), d = ve(), a = C(null), c = $(() => {
      var o, i;
      return (i = (o = O(a)) == null ? void 0 : o.textContent) != null ? i : "";
    }), { onItemEnter: r, onItemLeave: u } = h(X, void 0), v = P((o) => (n("pointermove", o), o.defaultPrevented), ce((o) => {
      if (e.disabled) {
        u(o);
        return;
      }
      const i = o.currentTarget;
      i === document.activeElement || i.contains(document.activeElement) || (r(o), o.defaultPrevented || i?.focus());
    })), m = P((o) => (n("pointerleave", o), o.defaultPrevented), ce(u)), f = P((o) => {
      if (!e.disabled)
        return n("click", o), o.type !== "keydown" && o.defaultPrevented;
    }, (o) => {
      var i, p, g;
      if (e.disabled) {
        o.stopImmediatePropagation();
        return;
      }
      (i = t?.hideOnClick) != null && i.value && ((p = t.handleClick) == null || p.call(t)), (g = t.commandHandler) == null || g.call(t, e.command, d, o);
    }), w = $(() => ({ ...e, ...s }));
    return {
      handleClick: f,
      handlePointerMove: v,
      handlePointerLeave: m,
      textContent: c,
      propsAndAttrs: w
    };
  }
});
function zo(e, n, s, t, d, a) {
  var c;
  const r = I("el-dropdown-item-impl"), u = I("el-roving-focus-item"), v = I("el-dropdown-collection-item");
  return K(), H(v, {
    disabled: e.disabled,
    "text-value": (c = e.textValue) != null ? c : e.textContent
  }, {
    default: _(() => [
      R(u, {
        focusable: !e.disabled
      }, {
        default: _(() => [
          R(r, Z(e.propsAndAttrs, {
            onPointerleave: e.handlePointerLeave,
            onPointermove: e.handlePointerMove,
            onClickimpl: e.handleClick
          }), {
            default: _(() => [
              B(e.$slots, "default")
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
var Oe = /* @__PURE__ */ D(Go, [["render", zo], ["__file", "dropdown-item.vue"]]);
const Yo = L({
  name: "ElDropdownMenu",
  props: ho,
  setup(e) {
    const n = oe("dropdown"), { _elDropdownSize: s } = $e(), t = s.value, { focusTrapRef: d, onKeydown: a } = h(Xe, void 0), { contentRef: c, role: r, triggerId: u } = h(X, void 0), { collectionRef: v, getItems: m } = h(Fo, void 0), {
      rovingFocusGroupRef: f,
      rovingFocusGroupRootStyle: w,
      tabIndex: o,
      onBlur: i,
      onFocus: p,
      onMousedown: g
    } = h(te, void 0), { collectionRef: M } = h(ne, void 0), F = $(() => [n.b("menu"), n.bm("menu", t?.value)]), A = be(c, v, d, f, M), b = P((E) => {
      var G;
      (G = e.onKeydown) == null || G.call(e, E);
    }, (E) => {
      const { currentTarget: G, code: z, target: S } = E;
      if (G.contains(S), y.tab === z && E.stopImmediatePropagation(), E.preventDefault(), S !== O(c) || !To.includes(z))
        return;
      const j = m().filter((J) => !J.disabled).map((J) => J.ref);
      Te.includes(z) && j.reverse(), le(j);
    });
    return {
      size: t,
      rovingFocusGroupRootStyle: w,
      tabIndex: o,
      dropdownKls: F,
      role: r,
      triggerId: u,
      dropdownListWrapperRef: A,
      handleKeydown: (E) => {
        b(E), a(E);
      },
      onBlur: i,
      onFocus: p,
      onMousedown: g
    };
  }
});
function Uo(e, n, s, t, d, a) {
  return K(), W("ul", {
    ref: e.dropdownListWrapperRef,
    class: q(e.dropdownKls),
    style: Ae(e.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: e.role,
    "aria-labelledby": e.triggerId,
    onBlur: e.onBlur,
    onFocus: e.onFocus,
    onKeydown: ee(e.handleKeydown, ["self"]),
    onMousedown: ee(e.onMousedown, ["self"])
  }, [
    B(e.$slots, "default")
  ], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var Fe = /* @__PURE__ */ D(Yo, [["render", Uo], ["__file", "dropdown-menu.vue"]]);
const Zo = xe(Bo, {
  DropdownItem: Oe,
  DropdownMenu: Fe
}), qo = we(Oe), Qo = we(Fe);
export {
  qo as E,
  Zo as a,
  Qo as b
};
