var ue = Object.defineProperty;
var ge = (o, t, e) => t in o ? ue(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var m = (o, t, e) => ge(o, typeof t != "symbol" ? t + "" : t, e);
import { I as Mt, c as C, d as ne, r as ft, k as rt, ao as fe, w as xe, a as Z, o as X, e as I, q as P, F as zt, h as Dt, n as Tt, b as ie, y as we, u as ht, B as xt, s as _t, f as me, p as ye, a1 as pe, ah as ve, ag as Gt, l as ke } from "./runtime-entry-kBP_wtmk.js";
import { W as se } from "./window-h1PtEsc6.js";
import { l as z, f as j, a8 as pt, e as Se, k as oe, h as Ft } from "./_plugin-vue_export-helper-Bux2Si-R.js";
import { a as Wt, c as Ht, P as be } from "./text-kwBABufh.js";
import { W as Me } from "./Write-CfAEI1nW.js";
import { T as Ce } from "./TextRecognition-Cf9PKRns.js";
import { C as Te } from "./Check-fT5vLouT.js";
import { C as Re } from "./Close-BvnWwxIX.js";
const Ae = Mt("arrow-left-up", !0, function(o) {
  return C("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [C("path", {
    d: "M11 11L36.4559 36.4558",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M29 11H11V29",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), Pe = Mt("delete-four", !1, function(o) {
  return C("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [C("path", {
    d: "M8 11L40 11",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M18 5L30 5",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: o.colors[1],
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), ze = Mt("download", !1, function(o) {
  return C("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [C("path", {
    d: "M6 24.0083V42H42V24",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M33 23L24 32L15 23",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M23.9917 6V32",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), De = Mt("font-size", !0, function(o) {
  return C("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [C("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M24 6V42",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M16 42H32",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), We = Mt("mosaic", !0, function(o) {
  return C("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [C("path", {
    d: "M44 36H36V44H44V36Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M28 36H20V44H28V36Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M12 36H4V44H12V36Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M44 20H36V28H44V20Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M28 20H20V28H28V20Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M12 20H4V28H12V20Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M44 4H36V12H44V4Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M28 4H20V12H28V4Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M12 4H4V12H12V4Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M20 12H12V20H20V12Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M20 28H12V36H20V28Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M36 12H28V20H36V12Z",
    fill: o.colors[0]
  }, null), C("path", {
    d: "M36 28H28V36H36V28Z",
    fill: o.colors[0]
  }, null)]);
}), Le = Mt("move-one", !0, function(o) {
  return C("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [C("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: o.colors[1],
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), qt = Mt("platte", !0, function(o) {
  return C("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [C("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: o.colors[1],
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: o.colors[3],
    stroke: o.colors[2],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: o.colors[3],
    stroke: o.colors[2],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: o.colors[3],
    stroke: o.colors[2],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), Ie = Mt("rectangle-one", !1, function(o) {
  return C("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [C("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: o.colors[1],
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth
  }, null)]);
}), He = Mt("return", !0, function(o) {
  return C("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [C("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), C("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
});
function ot(o, t) {
  const e = t.x - o.x, n = t.y - o.y;
  return Math.sqrt(e * e + n * n);
}
function Kt(o, t) {
  return o.x >= t.x && o.x <= t.x + t.width && o.y >= t.y && o.y <= t.y + t.height;
}
function Xt(o) {
  return {
    x: o.x + o.width / 2,
    y: o.y + o.height / 2
  };
}
function _e(o, t) {
  return {
    x: Math.max(t.x, Math.min(o.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(o.y, t.y + t.height))
  };
}
function kt(o) {
  return o != null && typeof o.x == "number" && typeof o.y == "number" && !isNaN(o.x) && !isNaN(o.y) && isFinite(o.x) && isFinite(o.y);
}
function Lt(o) {
  return o != null && typeof o.x == "number" && typeof o.y == "number" && typeof o.width == "number" && typeof o.height == "number" && !isNaN(o.x) && !isNaN(o.y) && !isNaN(o.width) && !isNaN(o.height) && isFinite(o.x) && isFinite(o.y) && isFinite(o.width) && isFinite(o.height) && o.width > 0 && o.height > 0;
}
class Be {
  constructor(t, e) {
    m(this, "canvas");
    m(this, "ctx");
    m(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = e;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t) {
    if (!Lt(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const e = this.canvas.width / (window.devicePixelRatio || 1), n = this.canvas.height / (window.devicePixelRatio || 1), i = Math.round(t.x), s = Math.round(t.y), a = Math.round(t.width), r = Math.round(t.height);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, e, n), this.ctx.moveTo(i, s), this.ctx.lineTo(i, s + r), this.ctx.lineTo(i + a, s + r), this.ctx.lineTo(i + a, s), this.ctx.closePath(), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, e = !0) {
    const { x: n, y: i, width: s, height: a } = t;
    this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2, this.ctx.setLineDash([6, 6]), this.ctx.strokeRect(n, i, s, a), e && (this.drawGuides(t), this.drawHandles(t));
  }
  // 绘制辅助线
  drawGuides(t) {
    const { x: e, y: n, width: i, height: s } = t;
    this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 1, this.ctx.setLineDash([4, 4]);
    const a = i / 3, r = s / 3;
    this.ctx.beginPath(), this.ctx.moveTo(e + a, n), this.ctx.lineTo(e + a, n + s), this.ctx.moveTo(e + a * 2, n), this.ctx.lineTo(e + a * 2, n + s), this.ctx.moveTo(e, n + r), this.ctx.lineTo(e + i, n + r), this.ctx.moveTo(e, n + r * 2), this.ctx.lineTo(e + i, n + r * 2), this.ctx.stroke();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: e, y: n, width: i, height: s } = t, a = Xt(t);
    this.ctx.setLineDash([]), this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2;
    const r = 4;
    [
      { x: e, y: n },
      // 左上
      { x: e + i, y: n },
      // 右上
      { x: e, y: n + s },
      // 左下
      { x: e + i, y: n + s },
      // 右下
      { x: a.x, y: n },
      // 上中
      { x: a.x, y: n + s },
      // 下中
      { x: e, y: a.y },
      // 左中
      { x: e + i, y: a.y }
      // 右中
    ].forEach((h) => {
      this.ctx.beginPath(), this.ctx.arc(h.x, h.y, r, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke();
    });
  }
  // 绘制标注列表
  drawAnnotations(t, e) {
    const n = this.createDrawingContext(e);
    t.forEach((i) => {
      const s = i.getData();
      s.hovered && i.drawHover(n), i.draw(n), s.selected && (i.drawSelection(n), (s.type === "rectangle" || s.type === "arrow") && this.drawAnnotationHandles(i));
    });
  }
  // 绘制当前正在创建的标注
  drawCurrentAnnotation(t, e) {
    const n = this.createDrawingContext(e);
    t.draw(n);
  }
  // 创建绘制上下文
  createDrawingContext(t) {
    return {
      ctx: this.ctx,
      scale: 1,
      offset: { x: 0, y: 0 },
      bounds: t || { x: 0, y: 0, width: this.canvas.width, height: this.canvas.height }
    };
  }
  // 为截图创建绘制上下文
  createScreenshotContext(t, e, n) {
    return {
      ctx: t,
      scale: e,
      offset: { x: n.x * e, y: n.y * e },
      bounds: n
    };
  }
  // 获取坐标转换器
  getCoordinateTransform() {
    return this.coordinateTransform;
  }
  // 获取画布
  getCanvas() {
    return this.canvas;
  }
  // 获取上下文
  getContext() {
    return this.ctx;
  }
  // 绘制标注控制点
  drawAnnotationHandles(t) {
    const e = t.getData();
    if (e.type !== "mosaic" && e.type !== "text" && (e.type === "rectangle" || e.type === "arrow") && e.points.length >= 2) {
      const n = e.points[0], i = e.points[e.points.length - 1], s = 4;
      this.ctx.save(), this.ctx.setLineDash([]), this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.arc(n.x, n.y, s, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.beginPath(), this.ctx.arc(i.x, i.y, s, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.restore();
    }
  }
  // 绘制取色器
  drawColorPicker(t, e) {
    if (!t.isActive || !t.isVisible) return;
    const { mousePosition: n, colorInfo: i, showFormat: s, previewImage: a, zoomFactor: r, isCopied: l } = t, h = 150, g = 190, x = 20;
    let d = n.x + x, y = n.y + x;
    d + h > e.x + e.width && (d = n.x - h - x), y + g > e.y + e.height && (y = n.y - g - x), d < e.x && (d = e.x + x), y < e.y && (y = e.y + x), this.ctx.save(), this.ctx.fillStyle = "rgba(255, 255, 255, 0.9)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.1)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.2)", this.ctx.shadowBlur = 10, this.ctx.beginPath(), this.ctx.roundRect(d, y, h, g, 8), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent";
    const p = 100, v = d + (h - p) / 2, R = y + 15;
    this.ctx.strokeStyle = "#ccc", this.ctx.lineWidth = 1, this.ctx.strokeRect(v, R, p, p);
    const E = a ? a.width : r, H = p / E;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      v,
      R,
      p,
      p
    ), this.ctx.imageSmoothingEnabled = !0);
    const b = Math.floor(E / 2), D = v + b * H, W = R + b * H;
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      D - 1,
      W - 1,
      H + 2,
      H + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.8)", this.ctx.lineWidth = 1, this.ctx.strokeRect(
      D,
      W,
      H,
      H
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let L = R + p + 25;
    if (i) {
      this.ctx.fillStyle = i.hex, this.ctx.fillRect(d + 15, L - 13, 16, 16), this.ctx.strokeStyle = "#ccc", this.ctx.strokeRect(d + 15, L - 13, 16, 16), this.ctx.fillStyle = "#333";
      const A = s === "hex" ? i.hex : `${i.rgb.r}, ${i.rgb.g}, ${i.rgb.b}`;
      this.ctx.fillText(A, d + 40, L), L += 20;
    }
    this.ctx.fillStyle = "#666", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(n.x)}, Y: ${Math.round(n.y)}`, d + 15, L), L += 20, this.ctx.font = "12px Arial";
    const F = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#00A000" : "#888", this.ctx.fillText(F, d + 15, L), this.ctx.restore();
  }
}
class Ee {
  // 物理尺寸
  constructor(t) {
    m(this, "scale");
    m(this, "canvasRect");
    m(this, "canvasSize");
    // 逻辑尺寸
    m(this, "physicalSize");
    this.canvasRect = t.getBoundingClientRect(), this.canvasSize = {
      width: this.canvasRect.width,
      height: this.canvasRect.height
    }, this.physicalSize = {
      width: t.width,
      height: t.height
    }, this.scale = this.calculateScale();
  }
  // 更新画布矩形信息
  updateCanvasRect(t) {
    this.canvasRect = t.getBoundingClientRect(), this.canvasSize = {
      width: this.canvasRect.width,
      height: this.canvasRect.height
    }, this.physicalSize = {
      width: t.width,
      height: t.height
    }, this.scale = this.calculateScale();
  }
  // 计算缩放比例（DPI）
  calculateScale() {
    return this.physicalSize.width / this.canvasRect.width;
  }
  // 从鼠标事件获取画布坐标
  getCanvasPosition(t) {
    return {
      x: t.clientX - this.canvasRect.left,
      y: t.clientY - this.canvasRect.top
    };
  }
  // 逻辑像素转物理像素
  logicalToPhysical(t) {
    return kt(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return kt(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, e) {
    return !kt(t) || !Lt(e) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, e) {
    return !kt(t) || !Lt(e) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + e.x,
      y: t.y + e.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Lt(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!kt(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const e = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return _e(t, e);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Lt(t))
      return console.warn("Invalid rect in clampRectToCanvas:", t), { x: 0, y: 0, width: 0, height: 0 };
    const e = Math.max(0, t.x), n = Math.max(0, t.y), i = Math.min(this.canvasSize.width - e, t.width), s = Math.min(this.canvasSize.height - n, t.height);
    return { x: e, y: n, width: i, height: s };
  }
  // 获取画布尺寸
  getCanvasSize() {
    return { ...this.canvasSize };
  }
  // 获取缩放比例
  getScale() {
    return this.scale;
  }
  // 计算两点间距离（使用工具函数）
  distance(t, e) {
    return ot(t, e);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, e, n = 0) {
    if (!kt(t) || !Lt(e))
      return !1;
    if (n === 0)
      return Kt(t, e);
    const i = {
      x: e.x - n,
      y: e.y - n,
      width: e.width + n * 2,
      height: e.height + n * 2
    };
    return Kt(t, i);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, e, n, i = 8) {
    if (!kt(t) || !kt(e) || !kt(n))
      return !1;
    const s = t.x - e.x, a = t.y - e.y, r = n.x - e.x, l = n.y - e.y, h = s * r + a * l, g = r * r + l * l;
    if (g === 0)
      return ot(t, e) <= i;
    const x = h / g;
    let d;
    return x < 0 ? d = e : x > 1 ? d = n : d = {
      x: e.x + x * r,
      y: e.y + x * l
    }, ot(t, d) <= i;
  }
}
var w = /* @__PURE__ */ ((o) => (o.None = "none", o.Drawing = "drawing", o.Moving = "moving", o.ResizingNW = "resizing-nw", o.ResizingNE = "resizing-ne", o.ResizingSW = "resizing-sw", o.ResizingSE = "resizing-se", o.ResizingN = "resizing-n", o.ResizingS = "resizing-s", o.ResizingW = "resizing-w", o.ResizingE = "resizing-e", o.DrawingRect = "drawing-rect", o.DrawingArrow = "drawing-arrow", o.DrawingPen = "drawing-pen", o.EditingAnnotation = "editing-annotation", o.MovingAnnotation = "moving-annotation", o.ResizingAnnotationNW = "resizing-annotation-nw", o.ResizingAnnotationSE = "resizing-annotation-se", o.DrawingText = "drawing-text", o.DrawingMosaic = "drawing-mosaic", o.ColorPicking = "color-picking", o.Pinning = "pinning", o))(w || {}), u = /* @__PURE__ */ ((o) => (o.Select = "select", o.Rectangle = "rectangle", o.Arrow = "arrow", o.Pen = "pen", o.Mosaic = "mosaic", o.Text = "text", o.ColorPicker = "color-picker", o.Ocr = "ocr", o.Pin = "pin", o.Translate = "translate", o))(u || {});
class Oe {
  constructor(t, e) {
    m(this, "coordinateSystem");
    m(this, "canvas");
    m(this, "isDrawing", !1);
    m(this, "currentOperation", w.None);
    m(this, "startPoint", { x: 0, y: 0 });
    m(this, "lastMousePos", { x: 0, y: 0 });
    m(this, "preventDefault", (t) => {
      t.preventDefault();
    });
    this.canvas = t, this.coordinateSystem = e, this.bindEvents();
  }
  bindEvents() {
    this.canvas.addEventListener("contextmenu", this.preventDefault), this.canvas.addEventListener("dragstart", this.preventDefault), this.canvas.addEventListener("selectstart", this.preventDefault);
  }
  unbind() {
    this.canvas.removeEventListener("contextmenu", this.preventDefault), this.canvas.removeEventListener("dragstart", this.preventDefault), this.canvas.removeEventListener("selectstart", this.preventDefault);
  }
  getOperationType(t, e, n, i) {
    const s = this.getAnnotationAtPoint(t, i);
    if (e !== u.Select)
      return n ? this.coordinateSystem.isPointInRect(t, n) ? this.getDrawingOperationType(e) : w.None : w.Drawing;
    if (s) {
      if (s.getData().type === u.Mosaic)
        return w.None;
      const a = this.getAnnotationControlPointOperation(t, s);
      return a !== w.None ? a : w.MovingAnnotation;
    }
    return n ? this.getSelectionOperationType(t, n, i.length > 0) : w.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [u.Rectangle]: w.DrawingRect,
      [u.Arrow]: w.DrawingArrow,
      [u.Pen]: w.DrawingPen,
      [u.Text]: w.DrawingText,
      [u.Mosaic]: w.DrawingMosaic,
      [u.ColorPicker]: w.ColorPicking,
      [u.Ocr]: w.None,
      [u.Pin]: w.Pinning,
      [u.Translate]: w.None,
      [u.Select]: w.None
    }[t] || w.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, e, n) {
    const { x: i, y: s, width: a, height: r } = e, l = 12;
    if (n)
      return w.None;
    const h = Xt(e);
    return this.isInHandle(t, { x: i, y: s }, l) ? w.ResizingNW : this.isInHandle(t, { x: i + a, y: s }, l) ? w.ResizingNE : this.isInHandle(t, { x: i, y: s + r }, l) ? w.ResizingSW : this.isInHandle(t, { x: i + a, y: s + r }, l) ? w.ResizingSE : this.isInHandle(t, { x: h.x, y: s }, l) ? w.ResizingN : this.isInHandle(t, { x: h.x, y: s + r }, l) ? w.ResizingS : this.isInHandle(t, { x: i, y: h.y }, l) ? w.ResizingW : this.isInHandle(t, { x: i + a, y: h.y }, l) ? w.ResizingE : this.coordinateSystem.isPointInRect(t, e) ? w.Moving : w.Drawing;
  }
  // 检查是否在控制点范围内
  isInHandle(t, e, n) {
    return Math.abs(t.x - e.x) <= n && Math.abs(t.y - e.y) <= n;
  }
  // 获取指定位置的标注
  getAnnotationAtPoint(t, e) {
    for (let n = e.length - 1; n >= 0; n--) {
      const i = e[n];
      if (i.hitTest(t))
        return i;
    }
    return null;
  }
  // 获取标注控制点操作类型
  getAnnotationControlPointOperation(t, e) {
    if (!kt(t))
      return w.None;
    const n = e.getData();
    if (n.type === u.Mosaic || n.type === u.Text)
      return w.None;
    if ((n.type === u.Rectangle || n.type === u.Arrow) && n.points.length >= 2) {
      const i = n.points[0], s = n.points[n.points.length - 1], a = 8, r = 6, l = ot(t, i), h = ot(t, s);
      if (l <= a + r)
        return w.ResizingAnnotationNW;
      if (h <= a + r)
        return w.ResizingAnnotationSE;
    }
    return w.None;
  }
  // 获取绘制状态
  getDrawingState() {
    return {
      isDrawing: this.isDrawing,
      currentOperation: this.currentOperation,
      startPoint: this.startPoint,
      lastMousePos: this.lastMousePos
    };
  }
  // 设置操作类型
  setCurrentOperation(t) {
    this.currentOperation = t;
  }
  // 开始绘制操作
  startDrawing(t) {
    this.isDrawing = !0, this.startPoint = t, this.lastMousePos = t;
  }
  // 结束绘制操作
  stopDrawing() {
    this.isDrawing = !1, this.currentOperation = w.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class Et {
  constructor(t) {
    m(this, "data");
    this.data = t;
  }
  // 获取标注数据
  getData() {
    return this.data;
  }
  // 更新标注数据
  updateData(t) {
    this.data = { ...this.data, ...t };
  }
  // 添加点
  addPoint(t) {
    this.data.points.push(t);
  }
  // 更新最后一个点
  updateLastPoint(t) {
    this.data.points.length > 0 && (this.data.points[this.data.points.length - 1] = t);
  }
  // 移动标注
  move(t, e) {
    this.data.points.forEach((n) => {
      n.x += t, n.y += e;
    });
  }
  // 检查是否有效
  isValid() {
    return this.data.points.length >= this.getMinPoints();
  }
  // 生成唯一ID
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
}
class $e extends Et {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: u.Rectangle,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, n = this.data.points[0], i = this.data.points[this.data.points.length - 1], s = i.x - n.x, a = i.y - n.y;
    e.save(), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(n.x, n.y, s, a), e.restore();
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: n, offset: i } = t, s = this.data.points[0], a = this.data.points[this.data.points.length - 1], r = {
      x: s.x * n - i.x,
      y: s.y * n - i.y
    }, l = (a.x - s.x) * n, h = (a.y - s.y) * n;
    e.save(), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth * n, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(r.x, r.y, l, h), e.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const n = this.data.points[0], i = this.data.points[this.data.points.length - 1], s = Math.min(n.x, i.x), a = Math.max(n.x, i.x), r = Math.min(n.y, i.y), l = Math.max(n.y, i.y);
    return t.x >= s - e && t.x <= a + e && t.y >= r - e && t.y <= l + e;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], n = Math.min(t.x, e.x), i = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: n,
      y: s,
      width: i - n,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, n = 6;
    e.save(), e.fillStyle = "#3b82f6", e.strokeStyle = "#ffffff", e.lineWidth = 1, this.data.points.forEach((i) => {
      e.fillRect(i.x - n / 2, i.y - n / 2, n, n), e.strokeRect(i.x - n / 2, i.y - n / 2, n, n);
    }), e.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, n = this.data.points[0], i = this.data.points[this.data.points.length - 1], s = i.x - n.x, a = i.y - n.y;
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(n.x, n.y, s, a), e.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, e = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let n = 0; n < this.data.points.length; n++) {
      const i = this.data.points[n];
      if (ot(t, i) <= e)
        return n;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class Ne extends Et {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: u.Arrow,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    this.drawArrow(e, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: n, offset: i } = t;
    this.drawArrow(e, n, i);
  }
  drawArrow(t, e, n) {
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1], a = {
      x: i.x * e - n.x,
      y: i.y * e - n.y
    }, r = {
      x: s.x * e - n.x,
      y: s.y * e - n.y
    };
    t.save(), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(a.x, a.y), t.lineTo(r.x, r.y), t.stroke();
    const l = Math.atan2(s.y - i.y, s.x - i.x), h = 15 * e, g = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l - g),
      r.y - h * Math.sin(l - g)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l + g),
      r.y - h * Math.sin(l + g)
    ), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const n = this.data.points[0], i = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, n, i, e);
  }
  isPointNearLine(t, e, n, i) {
    const s = t.x - e.x, a = t.y - e.y, r = n.x - e.x, l = n.y - e.y, h = s * r + a * l, g = r * r + l * l;
    if (g === 0)
      return ot(t, e) <= i;
    const x = h / g;
    let d;
    return x < 0 ? d = e : x > 1 ? d = n : d = {
      x: e.x + x * r,
      y: e.y + x * l
    }, ot(t, d) <= i;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], n = Math.min(t.x, e.x), i = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: n,
      y: s,
      width: i - n,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, n = 6;
    e.save(), e.fillStyle = "#3b82f6", e.strokeStyle = "#ffffff", e.lineWidth = 1, this.data.points.forEach((i) => {
      e.fillRect(i.x - n / 2, i.y - n / 2, n, n), e.strokeRect(i.x - n / 2, i.y - n / 2, n, n);
    }), e.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, n = this.data.points[0], i = this.data.points[this.data.points.length - 1];
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.moveTo(n.x, n.y), e.lineTo(i.x, i.y), e.stroke(), e.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, e = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let n = 0; n < this.data.points.length; n++) {
      const i = this.data.points[n];
      if (ot(t, i) <= e)
        return n;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class Ve extends Et {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: u.Pen,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  // 智能添加点（带插值）
  addPoint(t) {
    if (this.data.points.length > 0) {
      const e = this.data.points[this.data.points.length - 1], n = ot(t, e);
      if (n > 5) {
        const i = Math.ceil(n / 3);
        for (let s = 1; s < i; s++) {
          const a = s / i, r = e.x + (t.x - e.x) * a, l = e.y + (t.y - e.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    this.drawPath(e, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: n, offset: i } = t;
    this.drawPath(e, n, i);
  }
  drawPath(t, e, n) {
    t.save(), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath();
    const i = this.data.points[0], s = i.x * e - n.x, a = i.y * e - n.y;
    t.moveTo(s, a);
    for (let r = 1; r < this.data.points.length; r++) {
      const l = this.data.points[r], h = l.x * e - n.x, g = l.y * e - n.y;
      t.lineTo(h, g);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? ot(t, this.data.points[0]) <= e : !1;
    for (let n = 0; n < this.data.points.length - 1; n++) {
      const i = this.data.points[n], s = this.data.points[n + 1];
      if (this.isPointNearLine(t, i, s, e))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, e, n, i) {
    const s = t.x - e.x, a = t.y - e.y, r = n.x - e.x, l = n.y - e.y, h = s * r + a * l, g = r * r + l * l;
    if (g === 0)
      return ot(t, e) <= i;
    const x = h / g;
    let d;
    return x < 0 ? d = e : x > 1 ? d = n : d = {
      x: e.x + x * r,
      y: e.y + x * l
    }, ot(t, d) <= i;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, e = this.data.points[0].x, n = this.data.points[0].y, i = this.data.points[0].y;
    return this.data.points.forEach((s) => {
      t = Math.min(t, s.x), e = Math.max(e, s.x), n = Math.min(n, s.y), i = Math.max(i, s.y);
    }), {
      x: t,
      y: n,
      width: e - t,
      height: i - n
    };
  }
  drawSelection(t) {
    const e = this.getBounds();
    if (!e) return;
    const { ctx: n } = t;
    n.save(), n.setLineDash([2, 2]), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.strokeRect(e.x, e.y, e.width, e.height), n.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.lineCap = "round", e.lineJoin = "round", e.beginPath(), e.moveTo(this.data.points[0].x, this.data.points[0].y);
    for (let n = 1; n < this.data.points.length; n++)
      e.lineTo(this.data.points[n].x, this.data.points[n].y);
    e.stroke(), e.restore();
  }
}
class Fe extends Et {
  constructor(t, e, n, i = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: u.Text,
      points: [t],
      style: n,
      text: e,
      fontSize: i
    });
  }
  getMinPoints() {
    return 1;
  }
  // 更新文字内容
  updateText(t) {
    this.data.text = t;
  }
  // 更新字体大小
  updateFontSize(t) {
    this.data.fontSize = t;
  }
  draw(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e } = t;
    this.drawText(e, 1, { x: 0, y: 0 }, t.bounds);
  }
  drawToScreenshot(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: n, offset: i, bounds: s } = t;
    this.drawText(e, n, i, s);
  }
  drawText(t, e, n, i) {
    const s = (this.data.fontSize || 16) * e, a = this.data.points[0];
    t.save(), t.font = `${s}px sans-serif`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = (a.x + 4) * e - n.x, l = (a.y - 8) * e - n.y;
    t.fillText(this.data.text, r, l), t.restore();
  }
  hitTest(t, e = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const n = this.data.points[0], i = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${i}px sans-serif`;
    const l = a.measureText(this.data.text).width, h = n.x + 4, g = n.y - 8;
    return t.x >= h - e && t.x <= h + l + e && t.y >= g - e && t.y <= g + i + e;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], e = this.data.fontSize || 16, i = document.createElement("canvas").getContext("2d");
    if (!i) return null;
    i.font = `${e}px sans-serif`;
    const a = i.measureText(this.data.text).width, r = t.x + 4, l = t.y - 8;
    return {
      x: r,
      y: l,
      width: a,
      height: e
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: n, offset: i } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * n, r = (s.x + 4) * n - i.x, l = (s.y - 8) * n - i.y;
    e.save(), e.font = `${a}px sans-serif`;
    const g = e.measureText(this.data.text).width;
    e.setLineDash([2, 2]), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.strokeRect(r, l, g, a), e.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: n, offset: i } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * n, r = (s.x + 4) * n - i.x, l = (s.y - 8) * n - i.y;
    e.save(), e.font = `${a}px sans-serif`;
    const g = e.measureText(this.data.text).width;
    e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(r, l, g, a), e.restore();
  }
  // 获取文字内容
  getText() {
    return this.data.text || "";
  }
  // 获取字体大小
  getFontSize() {
    return this.data.fontSize || 16;
  }
  // 检查是否为空文字
  isEmpty() {
    return !this.data.text || this.data.text.trim().length === 0;
  }
  // 重写isValid方法
  isValid() {
    return this.data.points.length >= this.getMinPoints() && !this.isEmpty();
  }
}
const St = class St extends Et {
  constructor(t, e, n = 5) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: u.Mosaic,
      points: [t],
      style: e,
      mosaicSize: n,
      mosaicColor: "transparent"
      // 真实马赛克不需要颜色，颜色源自底图
    });
  }
  getMinPoints() {
    return 1;
  }
  addPoint(t) {
    if (this.data.points.length > 0) {
      const e = this.data.points[this.data.points.length - 1], n = ot(t, e);
      if (n > 2) {
        const i = Math.ceil(n / 2);
        for (let s = 1; s < i; s++) {
          const a = s / i, r = e.x + (t.x - e.x) * a, l = e.y + (t.y - e.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length === 0) return;
    const { ctx: e, bounds: n } = t;
    this.renderRealMosaic(e, window.devicePixelRatio || 1, { x: 0, y: 0 }, n);
  }
  drawToScreenshot(t) {
    if (this.data.points.length === 0) return;
    const { ctx: e, scale: n, offset: i, bounds: s } = t;
    this.renderRealMosaic(e, n, i, s);
  }
  /**
   * 核心渲染逻辑：真实像素化马赛克
   * 使用 ImageData 直接操作像素，避免坐标转换问题
   */
  renderRealMosaic(t, e, n, i) {
    St.helperCanvas || (St.helperCanvas = document.createElement("canvas"), St.helperCtx = St.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const s = St.helperCanvas, a = St.helperCtx, r = e || 1, l = this.data.mosaicSize || 5, h = Math.max(Math.round(l * r), 2), g = l * 3, x = this.getBounds();
    if (!x) return;
    const d = g, y = Math.floor(x.x - d), p = Math.floor(x.y - d), v = Math.ceil(x.width + d * 2), R = Math.ceil(x.height + d * 2);
    if (v <= 0 || R <= 0) return;
    const E = Math.floor(y * r - n.x), H = Math.floor(p * r - n.y), b = Math.ceil(v * r), D = Math.ceil(R * r), W = t.canvas.width, L = t.canvas.height, F = Math.max(0, E), A = Math.max(0, H), O = Math.min(b, W - F), _ = Math.min(D, L - A);
    if (O <= 0 || _ <= 0) return;
    let B;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), B = t.getImageData(F, A, O, _), t.restore();
    } catch {
      return;
    }
    const Y = B.data, N = F % h, it = A % h;
    for (let U = -it; U < _; U += h)
      for (let M = -N; M < O; M += h) {
        const k = Math.max(0, M), $ = Math.max(0, U), S = Math.min(O, M + h), V = Math.min(_, U + h);
        if (k >= S || $ >= V) continue;
        let lt = 0, et = 0, Ct = 0, wt = 0;
        for (let dt = $; dt < V; dt++)
          for (let at = k; at < S; at++) {
            const ut = (dt * O + at) * 4;
            lt += Y[ut], et += Y[ut + 1], Ct += Y[ut + 2], wt++;
          }
        if (wt > 0) {
          lt = Math.round(lt / wt), et = Math.round(et / wt), Ct = Math.round(Ct / wt);
          for (let dt = $; dt < V; dt++)
            for (let at = k; at < S; at++) {
              const ut = (dt * O + at) * 4;
              Y[ut] = lt, Y[ut + 1] = et, Y[ut + 2] = Ct;
            }
        }
      }
    s.width = O, s.height = _, a.putImageData(B, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = g * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, n, F, A), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), i && (t.beginPath(), t.rect(
      i.x * r - n.x,
      i.y * r - n.y,
      i.width * r,
      i.height * r
    ), t.clip()), t.drawImage(s, F, A), t.restore();
  }
  // 在物理坐标系中绘制路径
  drawPathPhysical(t, e, n, i, s) {
    if (this.data.points.length < 1) return;
    t.beginPath();
    const a = (l) => l.x * e - n.x - i, r = (l) => l.y * e - n.y - s;
    if (this.data.points.length === 1) {
      const l = this.data.points[0];
      t.arc(a(l), r(l), t.lineWidth / 2, 0, Math.PI * 2), t.fill();
    } else {
      const l = this.data.points[0];
      t.moveTo(a(l), r(l));
      for (let g = 1; g < this.data.points.length - 1; g++) {
        const x = this.data.points[g], d = this.data.points[g + 1], y = (a(x) + a(d)) / 2, p = (r(x) + r(d)) / 2;
        t.quadraticCurveTo(a(x), r(x), y, p);
      }
      const h = this.data.points[this.data.points.length - 1];
      t.lineTo(a(h), r(h)), t.stroke();
    }
  }
  hitTest(t, e = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return ot(t, this.data.points[0]) <= (this.data.mosaicSize || 5) / 2 + e;
    for (let n = 0; n < this.data.points.length - 1; n++) {
      const i = this.data.points[n], s = this.data.points[n + 1];
      if (this.isPointNearLine(t, i, s, (this.data.mosaicSize || 5) / 2 + e))
        return !0;
    }
    return !1;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, e = this.data.points[0].x, n = this.data.points[0].y, i = this.data.points[0].y;
    for (const s of this.data.points)
      t = Math.min(t, s.x), e = Math.max(e, s.x), n = Math.min(n, s.y), i = Math.max(i, s.y);
    return {
      x: t,
      y: n,
      width: e - t,
      height: i - n
    };
  }
  isPointNearLine(t, e, n, i) {
    const s = t.x - e.x, a = t.y - e.y, r = n.x - e.x, l = n.y - e.y, h = s * r + a * l, g = r * r + l * l;
    let x = -1;
    g !== 0 && (x = h / g);
    let d, y;
    x < 0 ? (d = e.x, y = e.y) : x > 1 ? (d = n.x, y = n.y) : (d = e.x + x * r, y = e.y + x * l);
    const p = t.x - d, v = t.y - y;
    return p * p + v * v <= i * i;
  }
  drawSelection(t) {
  }
  drawHover(t) {
  }
  updateMosaicSize(t) {
    this.data.mosaicSize = t;
  }
  getMosaicSize() {
    return this.data.mosaicSize || 5;
  }
};
// 缓存离屏 Canvas 以减少 GC 压力（静态复用）
m(St, "helperCanvas", null), m(St, "helperCtx", null);
let Yt = St;
class Ot {
  static createAnnotation(t, e, n, i = {}) {
    switch (t) {
      case u.Rectangle:
        return new $e(e, n);
      case u.Arrow:
        return new Ne(e, n);
      case u.Pen:
        return new Ve(e, n);
      case u.Text:
        return new Fe(
          e,
          i.text || "",
          n,
          i.fontSize || 16
        );
      case u.Mosaic:
        return new Yt(
          e,
          n,
          i.mosaicSize || 5
        );
      default:
        return null;
    }
  }
  // 从数据恢复标注
  static fromData(t) {
    const { type: e, points: n, style: i } = t;
    if (!n || n.length === 0) return null;
    const s = n[0], a = this.createAnnotation(e, s, i, {
      text: t.text,
      fontSize: t.fontSize,
      mosaicSize: t.mosaicSize
    });
    if (a) {
      for (let r = 1; r < n.length; r++)
        a.addPoint(n[r]);
      a.updateData({
        id: t.id,
        selected: t.selected,
        hovered: t.hovered
      });
    }
    return a;
  }
  // 获取工具对应的操作类型
  static getOperationType(t) {
    return {
      [u.Rectangle]: "drawing-rect",
      [u.Arrow]: "drawing-arrow",
      [u.Pen]: "drawing-pen",
      [u.Text]: "drawing-text",
      [u.Mosaic]: "drawing-mosaic",
      [u.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== u.Select && t !== u.ColorPicker && t !== u.Ocr && t !== u.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== u.Select && t !== u.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      u.Rectangle,
      u.Arrow,
      u.Pen,
      u.Text
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      u.Rectangle,
      u.Arrow,
      u.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === u.Text;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === u.Mosaic;
  }
}
const At = class At {
  constructor() {
    m(this, "pool", []);
    m(this, "maxPoolSize", 5);
    // 最大池大小
    m(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return At.instance || (At.instance = new At()), At.instance;
  }
  /**
   * 获取一个 canvas 对象
   * @param width 宽度
   * @param height 高度
   * @returns canvas 对象
   */
  acquire(t, e) {
    const n = this.pool.findIndex(
      (a) => a.width >= t && a.height >= e && !this.inUse.has(a)
    );
    let i;
    n !== -1 ? (i = this.pool[n], this.pool.splice(n, 1)) : i = document.createElement("canvas"), i.width = t, i.height = e;
    const s = i.getContext("2d");
    return s && s.clearRect(0, 0, t, e), this.inUse.add(i), i;
  }
  /**
   * 释放 canvas 对象回池中
   * @param canvas 要释放的 canvas
   */
  release(t) {
    if (this.inUse.has(t) && (this.inUse.delete(t), this.pool.length < this.maxPoolSize)) {
      const e = t.getContext("2d");
      e && e.clearRect(0, 0, t.width, t.height), this.pool.push(t);
    }
  }
  /**
   * 清空池
   */
  clear() {
    this.pool = [], this.inUse.clear();
  }
  /**
   * 获取池状态
   */
  getStats() {
    return {
      poolSize: this.pool.length,
      inUse: this.inUse.size
    };
  }
};
m(At, "instance");
let Ut = At;
class Rt {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = import("./ocr-CckeanMH.js").then((n) => (this.loadedModules.set(t, n), this.loadingPromises.delete(t), n));
    return this.loadingPromises.set(t, e), e;
  }
  /**
   * 懒加载离线翻译模块
   */
  static async loadOfflineTranslator() {
    const t = "offlineTranslator";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = import("./_plugin-vue_export-helper-Bux2Si-R.js").then((n) => n.bz).then((n) => (this.loadedModules.set(t, n), this.loadingPromises.delete(t), n));
    return this.loadingPromises.set(t, e), e;
  }
  /**
   * 预加载模块（在空闲时）
   */
  static preloadModules() {
    "requestIdleCallback" in window ? requestIdleCallback(() => {
      this.loadOCR().catch(() => {
      }), this.loadOfflineTranslator().catch(() => {
      });
    }, { timeout: 2e3 }) : setTimeout(() => {
      this.loadOCR().catch(() => {
      }), this.loadOfflineTranslator().catch(() => {
      });
    }, 1e3);
  }
  /**
   * 清除已加载的模块
   */
  static clear() {
    this.loadedModules.clear(), this.loadingPromises.clear();
  }
  /**
   * 获取加载状态
   */
  static getLoadStatus() {
    return {
      loaded: Array.from(this.loadedModules.keys()),
      loading: Array.from(this.loadingPromises.keys())
    };
  }
}
m(Rt, "loadedModules", /* @__PURE__ */ new Map()), m(Rt, "loadingPromises", /* @__PURE__ */ new Map());
const Ye = /[.!?。！？；;：:][)"'”’】）\]]*$/, Jt = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, $t = /[A-Za-z0-9]/, Ue = /^\s*(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/;
function Xe(o) {
  const t = wn(o), e = je(o, t);
  if (e.length === 0)
    return [];
  const n = ae(e, t), i = [];
  for (const s of n) {
    const a = i[i.length - 1], r = a ? Qe(a, s, t) : !1;
    if (!a || !r) {
      i.push(tn(s));
      continue;
    }
    a.text = nn(a.text, s.text), a.blocks = [...a.blocks, ...s.blocks], a.bbox = he(a.bbox, s.bbox), a.fontSize = te(
      a.fontSize || s.fontSize,
      a.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), a.lineHeight = te(
      a.lineHeight || s.lineHeight,
      a.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), a.isCodeBlock = !!(a.isCodeBlock || s.isCodeLike || s.hasTableColumns), a.isStructuredBlock = !!(a.isStructuredBlock || s.hasTableColumns);
  }
  return i;
}
function je(o, t) {
  return o.map((e) => {
    const n = e.text.trim();
    if (!n || Ze(e, t) || qe(n))
      return null;
    const i = Ke(Ge(n, e, t));
    return i === e.text ? e : { ...e, text: i };
  }).filter((e) => !!e);
}
function Ze(o, t) {
  const e = o.text.trim();
  if (!/^[cC]$/.test(e))
    return !1;
  const n = t * 1.25;
  return o.width <= n && o.height <= n;
}
function Ge(o, t, e) {
  return /^xC$/i.test(o) && t.width <= e * 2.4 ? "X" : o;
}
function qe(o) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(o.trim());
}
function Ke(o) {
  return o.replace(/^:\s+(?=[A-Z])/, "- ");
}
function ae(o, t) {
  const e = [...o].sort((s, a) => {
    const r = s.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : s.x - a.x;
  }), n = [], i = t * 0.45;
  for (const s of e) {
    const a = n[n.length - 1];
    a && Math.abs(s.y - a.y) < i && !hn(a.blocks, s, t) ? (a.blocks.push(s), a.y = It(a.blocks.map((r) => r.y))) : n.push({ y: s.y, blocks: [s] });
  }
  return n.map((s) => Je(s.blocks, t));
}
function Je(o, t) {
  const e = [...o].sort((r, l) => r.x - l.x), n = xn(e), i = e.reduce((r, l, h) => {
    const g = l.text.trim();
    return h === 0 ? g : en(r, g);
  }, ""), s = It(e.map((r) => Bt(r.fontSize, t))), a = It(e.map((r) => de(r)));
  return {
    text: i,
    blocks: e,
    bbox: n,
    fontSize: s,
    lineHeight: a,
    centerY: n.y + n.height / 2,
    hasTableColumns: dn(e, t),
    isCodeLike: cn(i)
  };
}
function Qe(o, t, e) {
  const n = ae(o.blocks, e), i = n[n.length - 1];
  if (!i || jt(i.text) || le(t.text) || t.isCodeLike || i.isCodeLike || t.hasTableColumns || i.hasTableColumns) return !1;
  const s = t.bbox.y - (i.bbox.y + i.bbox.height);
  if (s < -e * 0.25 || s >= e * 1.8 || sn(n, s, e) || on(i, t, s, e) || an(i, t, s, e) || rn(i, t, s, e) || ln(i, t, s, e))
    return !1;
  const a = Math.max(e * 1.2, i.lineHeight * 0.9);
  return Math.abs(t.bbox.x - i.bbox.x) <= a;
}
function tn(o) {
  return {
    text: o.text,
    blocks: [...o.blocks],
    bbox: { ...o.bbox },
    isCodeBlock: o.isCodeLike || o.hasTableColumns,
    isStructuredBlock: o.hasTableColumns,
    fontSize: o.fontSize,
    lineHeight: o.lineHeight,
    angle: It(o.blocks.map((t) => t.angle || 0))
  };
}
function en(o, t) {
  return re(o, t);
}
function nn(o, t) {
  return re(o, t);
}
function re(o, t) {
  const e = o.trimEnd(), n = t.trimStart();
  if (!e) return n;
  if (!n) return e;
  const i = e.charAt(e.length - 1), s = n.charAt(0), a = e.charAt(e.length - 2);
  return i === "-" && $t.test(a) && $t.test(s) ? `${e.slice(0, -1)}${n}` : mn(s) || yn(i) ? `${e}${n}` : Jt.test(i) || Jt.test(s) || ee(i) || ee(s) ? `${e}${n}` : $t.test(i) && $t.test(s) ? `${e} ${n}` : `${e} ${n}`.replace(/\s+/g, " ");
}
function jt(o) {
  return Ye.test(o.trim());
}
function le(o) {
  return Ue.test(o);
}
function sn(o, t, e) {
  if (o.length < 2 || t <= 0)
    return !1;
  const n = [];
  for (let a = 1; a < o.length; a++) {
    const r = o[a - 1], h = o[a].bbox.y - (r.bbox.y + r.bbox.height);
    h > 0 && n.push(h);
  }
  const i = n.length > 0 ? It(n) : 0, s = Math.max(i * 2.2, e * 1.15);
  return t > s;
}
function on(o, t, e, n) {
  const i = o.text.trim();
  if (!i || jt(i) || le(i) || o.isCodeLike || i.endsWith("-"))
    return !1;
  const s = i.split(/\s+/).filter(Boolean).length, a = o.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(i) && s <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(i) && i.length <= 12 && a, h = r || l;
  return o.fontSize >= t.fontSize * 1.18 && h ? !0 : e > n * 0.7 && h;
}
function an(o, t, e, n) {
  if (e <= 0)
    return !1;
  const i = Math.max(o.fontSize, t.fontSize), s = Math.max(Math.min(o.fontSize, t.fontSize), 1), a = i / s, r = e / Math.max(s, n * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = o.fontSize >= n * 1.08 && o.bbox.width >= t.bbox.width * 0.82, h = t.fontSize <= o.fontSize * 0.78 && e >= Math.max(t.lineHeight * 0.75, n * 0.55);
  return l && h;
}
function rn(o, t, e, n) {
  if (e < n * 0.45)
    return !1;
  const s = o.text.split(/\s+/).filter(Boolean).length <= 3 && o.bbox.width < t.bbox.width * 0.35, a = Math.abs(o.bbox.x - t.bbox.x) <= n * 0.6;
  return s && a;
}
function ln(o, t, e, n) {
  return e < n * 0.25 || !(Math.abs(o.bbox.x - t.bbox.x) <= n * 0.35) ? !1 : Qt(o.text) && Qt(t.text);
}
function Qt(o) {
  const t = o.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !jt(t);
}
function cn(o) {
  const t = o.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function hn(o, t, e) {
  const n = [...o].sort((a, r) => a.x - r.x), i = n[n.length - 1], s = t.x - (i.x + i.width);
  return s > e * 0.9 && fn(i.text) && ce(t.text) ? !1 : s > e * 3.2;
}
function dn(o, t) {
  if (o.length < 2)
    return o.some((i) => un(i.text));
  const e = [...o].sort((i, s) => i.x - s.x);
  let n = 0;
  for (let i = 1; i < e.length; i++) {
    const s = e[i - 1], a = e[i], r = e[i].x - (s.x + s.width);
    (r > t * 1.8 || r > t * 0.9 && gn(s.text) && ce(a.text)) && (n += 1);
  }
  return n >= 1;
}
function un(o) {
  const t = o.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function gn(o) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(o.trim());
}
function fn(o) {
  const t = o.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function ce(o) {
  const t = o.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function xn(o) {
  const t = o.map((e) => ({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }));
  return t.reduce((e, n) => he(e, n), t[0]);
}
function he(o, t) {
  const e = Math.min(o.x, t.x), n = Math.min(o.y, t.y), i = Math.max(o.x + o.width, t.x + t.width), s = Math.max(o.y + o.height, t.y + t.height);
  return {
    x: e,
    y: n,
    width: i - e,
    height: s - n
  };
}
function wn(o) {
  return Bt(It(o.map((t) => de(t))), 16);
}
function de(o) {
  return Bt(o.lineHeight, Bt(o.height, Bt(o.fontSize, 16) * 1.2));
}
function te(o, t, e, n) {
  const i = t + n;
  return i <= 0 ? e : (o * t + e * n) / i;
}
function Bt(o, t) {
  return Number.isFinite(o) && o > 0 ? o : t;
}
function It(o) {
  return o.length === 0 ? 0 : o.reduce((t, e) => t + e, 0) / o.length;
}
function mn(o) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(o);
}
function yn(o) {
  return /^[(\[{<"'“‘]$/.test(o);
}
function ee(o) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(o);
}
class pn {
  constructor(t, e, n, i) {
    m(this, "canvas");
    m(this, "coordinateSystem");
    m(this, "drawingEngine");
    m(this, "eventHandler");
    // 状态管理
    m(this, "selectionRect", null);
    m(this, "annotations", []);
    m(this, "currentAnnotation", null);
    m(this, "selectedAnnotation", null);
    m(this, "hoveredAnnotation", null);
    // 拖拽状态
    m(this, "draggedAnnotation", null);
    m(this, "dragStartPoint", null);
    m(this, "resizingAnnotation", null);
    m(this, "resizeStartBounds", null);
    m(this, "resizeOperation", null);
    // 编辑状态
    m(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    m(this, "annotationUndoStack", []);
    m(this, "annotationRedoStack", []);
    m(this, "pendingDragSnapshot", null);
    m(this, "pendingResizeSnapshot", null);
    // 工具设置
    m(this, "currentTool", u.Select);
    m(this, "currentStyle", { color: "#ff4444", lineWidth: 3 });
    m(this, "textSize", 16);
    m(this, "mosaicSize", 5);
    m(this, "showGuides", !0);
    // 取色器状态
    m(this, "colorPickerState", {
      isActive: !1,
      isVisible: !1,
      // 默认不可见
      mousePosition: { x: 0, y: 0 },
      showFormat: "hex",
      zoomFactor: 40,
      // 放大倍数，平衡精确度和预览范围
      isCopied: !1
    });
    // 窗口吸附相关
    m(this, "allWindows", []);
    m(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    m(this, "snappedWindow", null);
    m(this, "showSnapPreview", !1);
    // 点击拖拽区分
    m(this, "pendingSnapWindow", null);
    m(this, "dragStartPosition", null);
    m(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    m(this, "throttleTimer", null);
    m(this, "lastThrottledTimestamp", 0);
    m(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    m(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    m(this, "backgroundImage", null);
    // 是否正在加载完整背景图
    m(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    m(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    m(this, "offlineModelActivated", !1);
    // Canvas 池
    m(this, "canvasPool", Ut.getInstance());
    // 回调函数
    m(this, "onStateChange");
    m(this, "onTextInputRequest");
    m(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    m(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    m(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    m(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    m(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    m(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    m(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    m(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = e, this.onTextInputRequest = n, this.onColorPicked = i, this.coordinateSystem = new Ee(t), this.drawingEngine = new Be(t, this.coordinateSystem), this.eventHandler = new Oe(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), Rt.preloadModules();
  }
  // 公开方法：触发背景图重新加载（响应 preview-ready 事件）
  triggerBackgroundReload() {
    this.backgroundReloadPending || (this.backgroundReloadPending = !0, this.isLoadingBackground = !1, this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null), this.loadScreenBackground().finally(() => {
      this.backgroundReloadPending = !1;
    }));
  }
  cloneAnnotationData(t) {
    return {
      ...t,
      points: t.points.map((e) => ({ ...e })),
      style: { ...t.style },
      selected: !1,
      hovered: !1
    };
  }
  createHistorySnapshot() {
    return {
      annotations: this.annotations.map((t) => this.cloneAnnotationData(t.getData())),
      selectedAnnotationId: this.selectedAnnotation?.getData().id || null
    };
  }
  pushAnnotationHistory() {
    this.annotationUndoStack.push(this.createHistorySnapshot()), this.annotationRedoStack = [];
  }
  restoreHistorySnapshot(t) {
    if (this.annotations = t.annotations.map((e) => Ot.fromData(this.cloneAnnotationData(e))).filter((e) => e !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
      const e = this.annotations.find((n) => n.getData().id === t.selectedAnnotationId);
      e && (e.updateData({ selected: !0 }), this.selectedAnnotation = e);
    }
    this.draw(), this.onStateChange?.();
  }
  // 初始化画布
  initCanvas() {
    const t = this.canvas.parentElement;
    if (!t) return;
    const e = t.clientWidth, n = t.clientHeight, i = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(e * i), this.canvas.height = Math.round(n * i), this.canvas.style.width = e + "px", this.canvas.style.height = n + "px";
    const s = this.canvas.getContext("2d");
    s && s.scale(i, i), this.drawPendingState(), this.coordinateSystem.updateCanvasRect(this.canvas);
  }
  // 绘制等待状态（背景图加载前的中间状态）
  drawPendingState() {
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = "rgba(0, 0, 0, 0.6)", t.fillRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
  // 加载预捕获的屏幕背景图像
  async loadScreenBackground() {
    if (!this.isLoadingBackground) {
      this.isLoadingBackground = !0;
      try {
        this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null), await this.loadPreviewImage(), await this.loadFullBackgroundImage();
      } catch (t) {
        z.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
      } finally {
        this.isLoadingBackground = !1;
      }
    }
  }
  // 加载预览图（等待但不显示）
  // 注意：预览图只用于等待，不作为背景显示（避免模糊）
  async loadPreviewImage() {
    let n = 0;
    for (; n < 5e3; )
      try {
        const i = await j("get_screenshot_preview");
        if (i && i.trim().length > 0)
          return;
        await new Promise((s) => setTimeout(s, 100)), n += 100;
      } catch (i) {
        const s = i?.toString() || "";
        if (s.includes("No screenshot preview available") || s.includes("being captured") || s.includes("Preview load timeout")) {
          await new Promise((a) => setTimeout(a, 100)), n += 100;
          continue;
        }
        break;
      }
  }
  // 加载完整背景图（高质量PNG）
  async loadFullBackgroundImage() {
    let n = 0;
    for (; n < 5e3; )
      try {
        const i = await j("get_screenshot_background");
        if (i) {
          const s = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              s.onload = null, s.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            s.onload = () => {
              clearTimeout(l), this.backgroundImage = s, this.draw(), a();
            }, s.onerror = (h) => {
              clearTimeout(l), r(h);
            }, s.src = `data:image/png;base64,${i}`;
          });
          return;
        }
      } catch (i) {
        if (i?.toString().includes("No screenshot background available") || i?.toString().includes("being captured")) {
          await new Promise((s) => setTimeout(s, 100)), n += 100;
          continue;
        }
        throw i;
      }
    this.createFallbackBackground();
  }
  // 创建后备背景（当背景图加载失败时使用）
  createFallbackBackground() {
    try {
      const t = new Image();
      t.width = 1, t.height = 1;
      const e = document.createElement("canvas");
      e.width = 1, e.height = 1;
      const n = e.getContext("2d");
      n && (n.fillStyle = "rgba(0, 0, 0, 0.3)", n.fillRect(0, 0, 1, 1), t.src = e.toDataURL()), t.onload = () => {
        this.backgroundImage = t, this.draw();
      };
    } catch (t) {
      z.error("[截图] 创建后备背景失败", t);
    }
  }
  // 绘制背景图像（支持预览图和完整图）
  drawBackground() {
    const t = this.canvas.getContext("2d");
    t && this.backgroundImage && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.imageSmoothingEnabled = !1, t.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
  // 加载所有窗口信息（使用预缓存数据 + 重试机制）
  async loadAllWindows() {
    try {
      let t = { x: 0, y: 0, scale: 1, isFullscreen: !1 }, e = [];
      const n = 10, i = 50;
      await new Promise((l) => setTimeout(l, 100));
      for (let l = 0; l < n; l++)
        try {
          const [h, g] = await Promise.all([
            j("get_cached_monitor_info"),
            j("get_cached_window_list")
          ]);
          t = {
            x: h.x,
            y: h.y,
            scale: h.scale,
            isFullscreen: !1
          }, e = g;
          break;
        } catch {
          if (l < n - 1) {
            await new Promise((x) => setTimeout(x, i));
            continue;
          }
          const g = await Promise.all([
            j("get_window_info"),
            j("get_all_windows")
          ]);
          t = g[0], e = g[1];
        }
      const s = t?.scale || 1, a = window.innerWidth, r = window.innerHeight;
      this.allWindows = e.filter((l) => this.isValidWindow(l)).map((l) => ({
        ...l,
        x: Math.round(l.x / s),
        y: Math.round(l.y / s),
        width: Math.round(l.width / s),
        height: Math.round(l.height / s)
      })).filter(
        (l) => l.x >= -l.width && l.y >= -l.height && l.x < a + l.width && l.y < r + l.height
      );
    } catch (t) {
      z.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
    }
  }
  // 检测初始窗口吸附（在窗口打开时立即调用）
  async detectInitialWindowSnap() {
    try {
      let n = 0;
      for (; this.allWindows.length === 0 && n < 500; )
        await new Promise((r) => setTimeout(r, 50)), n += 50;
      if (this.allWindows.length === 0)
        return;
      let i;
      try {
        const r = await j("get_cached_monitor_info");
        i = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        i = await j("get_window_info");
      }
      let s;
      try {
        const r = await j("get_mouse_position"), l = i?.scale || 1;
        s = {
          x: Math.round((r.x - i.x) / l),
          y: Math.round((r.y - i.y) / l)
        };
      } catch {
        s = {
          x: Math.round(this.canvas.width / (window.devicePixelRatio || 1) / 2),
          y: Math.round(this.canvas.height / (window.devicePixelRatio || 1) / 2)
        };
      }
      const a = this.detectNearbyWindow(s);
      a && (this.snappedWindow = a, this.showSnapPreview = !0, this.draw());
    } catch (t) {
      z.error("[截图] 初始窗口吸附检测失败", t);
    }
  }
  // 检查窗口是否有效
  isValidWindow(t) {
    if (!t.title || t.width < 100 || t.height < 100 || t.title.includes("screenshot") || t.title.includes("截图") || t.title.includes("Screenshot"))
      return !1;
    const e = [
      "Program Manager",
      "Desktop Window Manager",
      "Windows Security",
      "Task Manager",
      "Settings",
      "Microsoft Store",
      "Calculator",
      "Windows Input Experience",
      "Microsoft Text Input Application",
      "Windows Shell Experience Host",
      "Action Center",
      "Volume Control",
      "Network Connections",
      "Cortana",
      "Search",
      "Start",
      "Taskbar",
      "System Tray",
      "Notification Area",
      "Clock",
      "Volume",
      "Network",
      "Battery",
      "Power",
      "Language Bar",
      "Input Method Editor",
      "Windows PowerShell",
      "Command Prompt",
      "cmd.exe",
      "powershell.exe"
    ];
    for (const i of e)
      if (t.title === i || t.title.startsWith(i))
        return !1;
    return !(t.title.startsWith("NVIDIA") || t.title.startsWith("Intel") || t.title.startsWith("AMD") || t.title.startsWith("Realtek") || t.title.includes("Driver") || t.title.includes("Graphics") || t.title.includes("Background Task Host") || t.title.includes("Runtime Broker") || t.title.includes("Service Host") || t.title.includes("Windows Modules Installer") || t.title.includes("System Interrupts") || t.title.includes("Registry") || t.title.includes("dwm.exe") || t.title.includes("explorer.exe") || t.title.includes("winlogon.exe") || t.title.trim().replace(/[^\w\s\u4e00-\u9fa5]/g, "").length < 2);
  }
  detectNearbyWindow(t) {
    if (this.allWindows.length === 0) return null;
    const e = [];
    for (const n of this.allWindows) {
      if (t.x >= n.x && t.x <= n.x + n.width && t.y >= n.y && t.y <= n.y + n.height) {
        e.push({ window: n, distance: 0 });
        continue;
      }
      const s = Math.abs(t.x - n.x), a = Math.abs(t.x - (n.x + n.width)), r = Math.abs(t.y - n.y), l = Math.abs(t.y - (n.y + n.height)), h = Math.min(s, a, r, l);
      h <= this.snapThreshold && e.push({ window: n, distance: h });
    }
    return e.length === 0 ? null : e.reduce((n, i) => i.window.display_order < n.window.display_order ? i : i.window.display_order > n.window.display_order ? n : i.distance < n.distance ? i : i.distance > n.distance ? n : i.window.is_fullscreen && !n.window.is_fullscreen ? i : n).window;
  }
  // 绑定鼠标事件
  bindMouseEvents() {
    this.canvas.addEventListener("mousedown", this.mouseDownHandler), this.canvas.addEventListener("mousemove", this.mouseMoveHandler), this.canvas.addEventListener("mouseup", this.mouseUpHandler), this.canvas.addEventListener("dblclick", this.doubleClickHandler), window.addEventListener("keydown", this.keyDownHandler), window.addEventListener("keyup", this.keyUpHandler);
  }
  // 鼠标按下处理
  handleMouseDown(t) {
    t.preventDefault(), t.stopPropagation();
    const e = this.coordinateSystem.getCanvasPosition(t), n = this.eventHandler.getOperationType(
      e,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (n !== w.None)
      switch (this.eventHandler.setCurrentOperation(n), this.eventHandler.startDrawing(e), n) {
        case w.Drawing:
          !this.selectionRect && this.currentTool === u.Select && (this.dragStartPosition = { ...e }, this.snappedWindow ? this.pendingSnapWindow = this.snappedWindow : (this.selectionRect = {
            x: e.x,
            y: e.y,
            width: 0,
            height: 0
          }, this.onStateChange?.()));
          break;
        case w.DrawingRect:
        case w.DrawingArrow:
        case w.DrawingPen:
        case w.DrawingMosaic:
          this.startAnnotation(e);
          break;
        case w.DrawingText:
          this.startTextInput(e), this.eventHandler.stopDrawing();
          break;
        case w.ColorPicking:
          this.handleColorPicking(e), this.eventHandler.stopDrawing();
          break;
        case w.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case w.EditingAnnotation:
          this.selectAnnotationAtPoint(e), this.selectedAnnotation && this.selectedAnnotation.getData().type === u.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case w.MovingAnnotation:
          this.startAnnotationDrag(e);
          break;
        case w.ResizingAnnotationNW:
        case w.ResizingAnnotationSE:
          this.startAnnotationResize(e, n);
          break;
        case w.Moving:
        case w.ResizingNW:
        case w.ResizingNE:
        case w.ResizingSW:
        case w.ResizingSE:
        case w.ResizingN:
        case w.ResizingS:
        case w.ResizingW:
        case w.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const e = this.coordinateSystem.getCanvasPosition(t), n = this.eventHandler.getDrawingState();
    if (n.isDrawing)
      this.eventHandler.updateMousePosition(e), this.pendingSnapWindow && this.dragStartPosition && !this.selectionRect && ot(e, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapWindow = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(e) : this.draggedAnnotation ? this.updateAnnotationDrag(e) : this.resizingAnnotation ? this.updateAnnotationResize(e) : this.selectionRect && this.currentTool === u.Select && this.updateSelectionRect(e, n), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === u.Select && !this.selectionRect) {
        const i = this.detectNearbyWindow(e);
        i !== this.snappedWindow && (this.snappedWindow = i, this.showSnapPreview = !!i, this.draw());
      }
      this.updateHoverState(e), this.currentTool === u.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(e, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = e, this.draw(), this.throttledUpdateColorPreview(e)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
    }
  }
  // 鼠标抬起处理
  handleMouseUp(t) {
    this.eventHandler.getDrawingState().isDrawing && (this.eventHandler.stopDrawing(), this.pendingSnapWindow && !this.selectionRect && (this.selectionRect = {
      x: this.pendingSnapWindow.x,
      y: this.pendingSnapWindow.y,
      width: this.pendingSnapWindow.width,
      height: this.pendingSnapWindow.height
    }), this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.showSnapPreview = !1, this.finishAnnotation(), this.finishAnnotationDrag(), this.finishAnnotationResize(), this.selectionRect && (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10) ? this.selectionRect = null : this.selectionRect && (this.selectionRect.width < 0 && (this.selectionRect.x += this.selectionRect.width, this.selectionRect.width = Math.abs(this.selectionRect.width)), this.selectionRect.height < 0 && (this.selectionRect.y += this.selectionRect.height, this.selectionRect.height = Math.abs(this.selectionRect.height))), this.draw(), this.onStateChange?.());
  }
  // 双击处理
  handleDoubleClick(t) {
    const e = this.coordinateSystem.getCanvasPosition(t), n = this.eventHandler.getAnnotationAtPoint(e, this.annotations);
    n?.getData().type === u.Text && (this.clearSelection(), n.updateData({ selected: !0 }), this.selectedAnnotation = n, this.startTextInput(e, n));
  }
  // 键盘按下处理（内部）
  handleKeyDownInternal(t) {
    t.key === "Shift" && (this.isShiftPressed = !0);
  }
  // 键盘抬起处理
  handleKeyUp(t) {
    t.key === "Shift" && (this.isShiftPressed = !1);
  }
  // 更新选择框
  updateSelectionRect(t, e) {
    if (!this.selectionRect) return;
    const n = e.currentOperation, i = t.x - e.lastMousePos.x, s = t.y - e.lastMousePos.y;
    switch (n) {
      case w.Drawing:
        this.selectionRect.width = t.x - e.startPoint.x, this.selectionRect.height = t.y - e.startPoint.y;
        break;
      case w.Moving:
        this.selectionRect.x += i, this.selectionRect.y += s;
        break;
      case w.ResizingNW:
        this.selectionRect.x += i, this.selectionRect.y += s, this.selectionRect.width -= i, this.selectionRect.height -= s;
        break;
      case w.ResizingNE:
        this.selectionRect.y += s, this.selectionRect.width += i, this.selectionRect.height -= s;
        break;
      case w.ResizingSW:
        this.selectionRect.x += i, this.selectionRect.width -= i, this.selectionRect.height += s;
        break;
      case w.ResizingSE:
        this.selectionRect.width += i, this.selectionRect.height += s;
        break;
      case w.ResizingN:
        this.selectionRect.y += s, this.selectionRect.height -= s;
        break;
      case w.ResizingS:
        this.selectionRect.height += s;
        break;
      case w.ResizingW:
        this.selectionRect.x += i, this.selectionRect.width -= i;
        break;
      case w.ResizingE:
        this.selectionRect.width += i;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && e !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === u.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
  }
  // 开始标注拖拽
  startAnnotationDrag(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && (this.draggedAnnotation = e, this.dragStartPoint = t, this.pendingDragSnapshot = this.createHistorySnapshot(), this.selectedAnnotation !== e && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 })));
  }
  // 更新标注拖拽
  updateAnnotationDrag(t) {
    if (!this.draggedAnnotation || !this.dragStartPoint) return;
    const e = t.x - this.dragStartPoint.x, n = t.y - this.dragStartPoint.y;
    this.draggedAnnotation.move(e, n), this.constrainAnnotationToBounds(this.draggedAnnotation), this.dragStartPoint = t;
  }
  // 完成标注拖拽
  finishAnnotationDrag() {
    if (this.draggedAnnotation) {
      if (this.pendingDragSnapshot) {
        const t = this.draggedAnnotation.getData(), e = this.pendingDragSnapshot.annotations.find((i) => i.id === t.id);
        (e ? JSON.stringify(e.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingDragSnapshot), this.annotationRedoStack = []), this.pendingDragSnapshot = null;
      }
      this.draggedAnnotation = null, this.dragStartPoint = null;
    }
  }
  // 开始标注缩放
  startAnnotationResize(t, e) {
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    if (n) {
      this.resizingAnnotation = n, this.resizeOperation = e, this.pendingResizeSnapshot = this.createHistorySnapshot();
      const i = n.getBounds();
      i && (this.resizeStartBounds = { ...i }), this.selectedAnnotation !== n && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = n, this.selectedAnnotation.updateData({ selected: !0 }));
    }
  }
  // 更新标注缩放
  updateAnnotationResize(t) {
    if (!this.resizingAnnotation || !this.resizeStartBounds || !this.resizeOperation) return;
    const e = this.resizingAnnotation.getData();
    if (e.points.length < 2) return;
    const n = e.points[0];
    switch (this.resizeOperation) {
      case w.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, e.points[1]]
        });
        break;
      case w.ResizingAnnotationSE:
        this.resizingAnnotation.updateData({
          points: [n, t]
        });
        break;
    }
    this.constrainAnnotationToBounds(this.resizingAnnotation);
  }
  // 完成标注缩放
  finishAnnotationResize() {
    if (this.resizingAnnotation) {
      if (this.pendingResizeSnapshot) {
        const t = this.resizingAnnotation.getData(), e = this.pendingResizeSnapshot.annotations.find((i) => i.id === t.id);
        (e ? JSON.stringify(e.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingResizeSnapshot), this.annotationRedoStack = []), this.pendingResizeSnapshot = null;
      }
      this.resizingAnnotation = null, this.resizeStartBounds = null, this.resizeOperation = null;
    }
  }
  // 边界约束：确保标注不超出选择框
  constrainAnnotationToBounds(t) {
    if (!this.selectionRect || !t.getBounds()) return;
    const n = t.getData();
    if (n.points.length < 1) return;
    const i = this.selectionRect;
    let s = !1, a = [...n.points];
    if (n.points.length >= 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        l.x < i.x ? (a[r] = { ...l, x: i.x }, s = !0) : l.x > i.x + i.width && (a[r] = { ...l, x: i.x + i.width }, s = !0), l.y < i.y ? (a[r] = { ...l, y: i.y }, s = !0) : l.y > i.y + i.height && (a[r] = { ...l, y: i.y + i.height }, s = !0);
      }
    if (n.points.length > 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        (l.x < i.x || l.x > i.x + i.width || l.y < i.y || l.y > i.y + i.height) && (a.splice(r, 1), r--, s = !0);
      }
    s && t.updateData({ points: a });
  }
  // 更新悬停状态
  updateHoverState(t) {
    if (this.currentTool !== u.Select) {
      this.updateToolCursor();
      return;
    }
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = e && e.getData().type !== u.Mosaic ? e : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== u.Select) {
      this.updateCursor("crosshair");
      return;
    }
    if (!this.selectionRect) {
      this.updateCursor("crosshair");
      return;
    }
    const e = this.eventHandler.getOperationType(
      t,
      this.currentTool,
      this.selectionRect,
      this.annotations
    ), i = {
      [w.Moving]: "move",
      [w.ResizingNW]: "nw-resize",
      [w.ResizingNE]: "ne-resize",
      [w.ResizingSW]: "sw-resize",
      [w.ResizingSE]: "se-resize",
      [w.ResizingN]: "n-resize",
      [w.ResizingS]: "s-resize",
      [w.ResizingW]: "w-resize",
      [w.ResizingE]: "e-resize",
      [w.EditingAnnotation]: "pointer",
      [w.MovingAnnotation]: "move",
      [w.ResizingAnnotationNW]: "nw-resize",
      [w.ResizingAnnotationSE]: "se-resize",
      [w.Drawing]: "crosshair"
    }[e] || "default";
    this.updateCursor(i);
  }
  // 更新画布cursor样式
  updateCursor(t) {
    this.canvas.style.cursor !== t && (this.canvas.style.cursor = t);
  }
  // 根据当前工具更新光标样式
  updateToolCursor() {
    switch (this.currentTool) {
      case u.Pen:
        this.updateCursor(this.createCircleCursor(this.currentStyle.lineWidth, this.currentStyle.color));
        break;
      case u.Mosaic:
        this.updateCursor(this.createCircleCursor(this.mosaicSize * 3, "#666"));
        break;
      case u.ColorPicker:
        this.updateCursor("crosshair");
        break;
      case u.Rectangle:
      case u.Arrow:
      case u.Text:
        this.updateCursor("crosshair");
        break;
      default:
        this.updateCursor("default");
    }
  }
  // 创建圆形光标（用于画笔和马赛克）
  createCircleCursor(t, e = "#666") {
    const n = Math.max(t / 2, 2), i = n * 2 + 4, s = i / 2, a = `
      <svg width="${i}" height="${i}" xmlns="http://www.w3.org/2000/svg">
        <!-- 外圈：显示工具大小 -->
        <circle cx="${s}" cy="${s}" r="${n}" 
                fill="none" stroke="${e}" stroke-width="1.5" opacity="0.8"/>
        <!-- 中心点：精确定位 -->
        <circle cx="${s}" cy="${s}" r="1" fill="${e}" opacity="0.9"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(a)}') ${s} ${s}, crosshair`;
  }
  // 绘制所有内容
  draw() {
    if (this.drawingEngine.clear(), !this.backgroundImage) {
      this.drawPendingState();
      return;
    }
    if (this.drawBackground(), this.selectionRect && this.drawingEngine.drawMask(this.selectionRect), this.showSnapPreview && this.snappedWindow && !this.selectionRect && this.drawSnapPreview(), this.annotations.length > 0) {
      const t = this.editingAnnotation ? this.annotations.filter((e) => e.getData().id !== this.editingAnnotation.getData().id) : this.annotations;
      this.drawingEngine.drawAnnotations(t, this.selectionRect || void 0);
    }
    this.currentAnnotation && this.drawingEngine.drawCurrentAnnotation(this.currentAnnotation, this.selectionRect || void 0), this.selectionRect && this.drawingEngine.drawSelectionBox(this.selectionRect, this.showGuides), this.colorPickerState.isActive && this.selectionRect && this.drawingEngine.drawColorPicker(this.colorPickerState, this.selectionRect), this.translationOverlay.isVisible && this.selectionRect && this.drawTranslationOverlay();
  }
  // 绘制翻译覆盖层（智能排版）
  drawTranslationOverlay() {
    if (!this.selectionRect) return;
    const t = this.canvas.getContext("2d");
    if (!t) return;
    t.save();
    const { x: e, y: n, width: i, height: s } = this.selectionRect, a = 8;
    if (this.translationOverlay.isLoading) {
      const v = e + i / 2, R = n + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(e, n, i, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle", t.fillText("正在识别翻译...", v, R), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const v = e + i / 2, R = n + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(e, n, i, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, v, R), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: e, y: n, width: i, height: s }, l = this.sampleRegionColor(r), h = l.brightness < 128;
    let g, x;
    if (h) {
      const v = Math.max(0, Math.round(l.r * 0.1)), R = Math.max(0, Math.round(l.g * 0.1)), E = Math.max(0, Math.round(l.b * 0.1));
      g = `rgba(${v}, ${R}, ${E}, 0.95)`, x = "rgba(255, 255, 255, 0.9)";
    } else {
      const v = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), R = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), E = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      g = `rgba(${v}, ${R}, ${E}, 0.95)`, x = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = g, t.fillRect(e, n, i, s), t.fillStyle = x, t.textAlign = "left", t.textBaseline = "top";
    const d = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((v) => ({
      text: v.text,
      translatedText: v.translatedText,
      blocks: [v],
      bbox: {
        x: v.x,
        y: v.y,
        width: v.width,
        height: v.height
      },
      isCodeBlock: v.isCodeBlock,
      isStructuredBlock: !1,
      fontSize: v.fontSize,
      lineHeight: v.lineHeight,
      angle: v.angle
    })), y = d.filter((v) => v.isStructuredBlock), p = d.filter((v) => !v.isStructuredBlock);
    p.length > 0 && this.drawFlowedTranslationBlocks(t, p, e, n, a, i, s);
    for (const v of y)
      this.drawStructuredTranslationBlock(t, v, e, n, a, i, s);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, e, n, i, s, a, r) {
    const l = [...e].filter((b) => (b.translatedText || b.text).trim()).sort((b, D) => {
      const W = b.bbox.y - D.bbox.y;
      return Math.abs(W) > 4 ? W : b.bbox.x - D.bbox.x;
    });
    if (l.length === 0)
      return;
    const h = Math.max(24, r - s * 2), g = s, x = (b, D, W) => l.map((L) => {
      const F = (L.translatedText || L.text).trim(), A = Math.max(12, Math.min(L.fontSize || 16, 48)), O = Math.max(8, Math.round(A * b)), _ = L.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', B = Math.max(
        s,
        Math.min(L.bbox.x + s, a * 0.38)
      ), Y = D ? s : B, N = Math.max(48, a - Y - g), it = L.lineHeight || O * 1.35, U = Math.max(
        O * (W ? 1.04 : 1.14),
        Math.min(it * b, O * (W ? 1.18 : 1.42))
      );
      return t.font = `${O}px ${_}`, {
        text: F,
        fontSize: O,
        fontFamily: _,
        lineHeight: U,
        paragraphGap: W ? Math.max(1, U * 0.16) : Math.max(3, U * 0.35),
        x: n + Y,
        lines: this.wrapTextToLines(t, F, N)
      };
    }), d = (b) => b.reduce((D, W, L) => {
      const F = L === b.length - 1 ? 0 : W.paragraphGap;
      return D + W.lines.length * W.lineHeight + F;
    }, 0);
    let y = x(1, !1, !1), p = d(y);
    if (p > h) {
      const b = Math.max(0.56, h / p);
      y = x(b, !1, !1), p = d(y);
    }
    if (p > h && (y = x(1, !0, !1), p = d(y)), p > h) {
      const b = Math.max(0.38, h / p * 0.96);
      y = x(b, !0, !0), p = d(y);
    }
    if (p > h) {
      const b = Math.max(0.3, h / p * 0.94);
      y = x(b, !0, !0), p = d(y);
    }
    const v = Math.min(...l.map((b) => b.bbox.y)), R = i + Math.max(s, Math.min(v, r - s)), E = i + r - s;
    let H = R + p > E ? i + s : R;
    for (const b of y) {
      t.font = `${b.fontSize}px ${b.fontFamily}`;
      for (const D of b.lines)
        t.fillText(D, b.x, H), H += b.lineHeight;
      H += b.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, e, n, i, s, a, r) {
    const l = [...e.blocks].sort((x, d) => x.x - d.x), h = Math.max(12, Math.min(e.fontSize || 14, 32)), g = e.lineHeight || h * 1.35;
    t.font = `${h}px "Consolas", "Monaco", monospace`;
    for (const x of l) {
      const d = x.translatedText || x.text;
      if (!d.trim()) continue;
      const y = n + x.x + Math.min(4, s), p = i + x.y, v = l.find((b) => b.x > x.x), R = v ? Math.max(x.width, v.x - x.x - 8) : Math.max(x.width, a - x.x - s), E = this.wrapTextToLines(t, d.trim(), R);
      let H = p;
      for (const b of E) {
        if (H + h > i + r) break;
        t.fillText(b, y, H), H += g;
      }
    }
  }
  /**
   * 将文字按宽度换行，返回行数组
   */
  wrapTextToLines(t, e, n) {
    const i = e.replace(/\s+/g, " ").trim();
    if (!i)
      return [];
    const s = [], a = /\s/.test(i) ? i.split(/(\s+)/).filter((h) => h.length > 0) : Array.from(i);
    let r = "";
    const l = (h) => {
      let g = "";
      for (const x of Array.from(h)) {
        const d = g + x;
        t.measureText(d).width > n && g !== "" ? (s.push(g), g = x) : g = d;
      }
      r = g;
    };
    for (const h of a) {
      const g = /^\s+$/.test(h), x = g ? " " : h, d = r + x;
      if (t.measureText(d).width <= n) {
        r = d;
        continue;
      }
      r.trim() && (s.push(r.trimEnd()), r = ""), !g && (t.measureText(x).width > n ? l(x) : r = x);
    }
    return r.trim() && s.push(r.trimEnd()), s;
  }
  /**
   * 从背景图像采样指定区域的平均颜色
   * @param rect 采样区域（相对于canvas的坐标）
   * @param sampleSize 采样点数量（默认16）
   * @returns 采样得到的颜色信息，包含RGB值和亮度值
   */
  sampleRegionColor(t, e = 16) {
    const n = { r: 255, g: 255, b: 255, brightness: 255 };
    if (!this.backgroundImage)
      return n;
    const i = window.devicePixelRatio || 1, s = Math.round(t.width * i), a = Math.round(t.height * i), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), n;
    const h = this.backgroundImage.width, g = this.backgroundImage.height, x = this.canvas.width / i, d = this.canvas.height / i, y = h / x, p = g / d, v = t.x * y, R = t.y * p, E = t.width * y, H = t.height * p;
    try {
      l.drawImage(
        this.backgroundImage,
        v,
        R,
        E,
        H,
        0,
        0,
        s,
        a
      );
    } catch (M) {
      return z.error("[截图] 采样区域绘制失败", M), this.canvasPool.release(r), n;
    }
    let b;
    try {
      b = l.getImageData(0, 0, s, a);
    } catch (M) {
      return z.error("[截图] 获取像素数据失败", M), this.canvasPool.release(r), n;
    }
    const D = b.data, W = Math.ceil(Math.sqrt(e)), L = s / (W + 1), F = a / (W + 1);
    let A = 0, O = 0, _ = 0, B = 0;
    for (let M = 1; M <= W; M++)
      for (let k = 1; k <= W && !(B >= e); k++) {
        const $ = Math.floor(k * L), S = Math.floor(M * F);
        if ($ >= 0 && $ < s && S >= 0 && S < a) {
          const V = (S * s + $) * 4;
          V >= 0 && V + 2 < D.length && (A += D[V], O += D[V + 1], _ += D[V + 2], B++);
        }
      }
    if (this.canvasPool.release(r), B === 0)
      return n;
    const Y = Math.round(A / B), N = Math.round(O / B), it = Math.round(_ / B), U = this.getBrightness(Y, N, it);
    return {
      r: Y,
      g: N,
      b: it,
      brightness: U
    };
  }
  /**
   * 计算颜色的亮度值
   * 使用标准公式: brightness = 0.299*R + 0.587*G + 0.114*B
   * @param r 红色分量 (0-255)
   * @param g 绿色分量 (0-255)
   * @param b 蓝色分量 (0-255)
   * @returns 亮度值 (0-255)
   */
  getBrightness(t, e, n) {
    const i = Math.max(0, Math.min(255, t)), s = Math.max(0, Math.min(255, e)), a = Math.max(0, Math.min(255, n));
    return Math.round(0.299 * i + 0.587 * s + 0.114 * a);
  }
  /**
   * 根据采样颜色计算覆盖层样式
   * 深色背景（亮度 < 128）：使用深色半透明背景 + 浅色文字
   * 浅色背景（亮度 >= 128）：使用浅色半透明背景 + 深色文字
   * @param sampledColor 采样得到的背景颜色
   * @returns 覆盖层样式
   */
  calculateOverlayStyle(t) {
    const { brightness: e } = t, n = e < 128, i = e / 255, a = 0.85 + Math.abs(i - 0.5) * 2 * 0.1;
    let r, l;
    if (n) {
      const h = Math.max(0, Math.round(t.r * 0.2)), g = Math.max(0, Math.round(t.g * 0.2)), x = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${h}, ${g}, ${x}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const h = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), g = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), x = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${h}, ${g}, ${x}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
    }
    return {
      backgroundColor: r,
      textColor: l,
      borderRadius: 3,
      // 轻微圆角（2-4px范围内）
      padding: 4
      // 内边距
    };
  }
  /**
   * 检测指定区域是否为纯色（颜色方差小于阈值）
   * 通过计算采样点的颜色方差来判断区域是否为纯色
   * @param rect 检测区域（相对于canvas的坐标）
   * @param threshold 方差阈值，默认100，方差小于此值认为是纯色
   * @param sampleSize 采样点数量，默认16
   * @returns 是否为纯色区域
   */
  isUniformColor(t, e = 100, n = 16) {
    if (!this.backgroundImage)
      return !1;
    const i = window.devicePixelRatio || 1, s = Math.round(t.width * i), a = Math.round(t.height * i), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), !1;
    const h = this.backgroundImage.width, g = this.backgroundImage.height, x = this.canvas.width / i, d = this.canvas.height / i, y = h / x, p = g / d, v = t.x * y, R = t.y * p, E = t.width * y, H = t.height * p;
    try {
      l.drawImage(
        this.backgroundImage,
        v,
        R,
        E,
        H,
        0,
        0,
        s,
        a
      );
    } catch (M) {
      return z.error("[截图] isUniformColor: 采样区域绘制失败", M), this.canvasPool.release(r), !1;
    }
    let b;
    try {
      b = l.getImageData(0, 0, s, a);
    } catch (M) {
      return z.error("[截图] isUniformColor: 获取像素数据失败", M), this.canvasPool.release(r), !1;
    }
    const D = b.data, W = Math.ceil(Math.sqrt(n)), L = s / (W + 1), F = a / (W + 1), A = [];
    for (let M = 1; M <= W; M++)
      for (let k = 1; k <= W && !(A.length >= n); k++) {
        const $ = Math.floor(k * L), S = Math.floor(M * F);
        if ($ >= 0 && $ < s && S >= 0 && S < a) {
          const V = (S * s + $) * 4;
          V >= 0 && V + 2 < D.length && A.push({
            r: D[V],
            g: D[V + 1],
            b: D[V + 2]
          });
        }
      }
    if (this.canvasPool.release(r), A.length < 2)
      return !1;
    const O = A.reduce((M, k) => M + k.r, 0) / A.length, _ = A.reduce((M, k) => M + k.g, 0) / A.length, B = A.reduce((M, k) => M + k.b, 0) / A.length, Y = A.reduce((M, k) => M + Math.pow(k.r - O, 2), 0) / A.length, N = A.reduce((M, k) => M + Math.pow(k.g - _, 2), 0) / A.length, it = A.reduce((M, k) => M + Math.pow(k.b - B, 2), 0) / A.length;
    return (Y + N + it) / 3 < e;
  }
  /**
   * 根据OCR块高度估算合适的字体大小
   * 基础公式: fontSize = blockHeight * 0.8
   * 边界约束: fontSize = clamp(fontSize, 12, blockHeight * 0.85)
   * @param blockHeight OCR块的高度
   * @returns 估算的字体大小
   */
  estimateFontSize(t) {
    if (t <= 0)
      return 12;
    const e = t * 0.8, n = t * 0.85, s = Math.max(12, Math.min(e, n));
    return Math.round(s);
  }
  /**
   * 根据文字内容和块宽度调整字体大小
   * 测量文字宽度，如果超出块宽度则缩小字体
   * 最小字体不低于12px
   * @param text 文字内容
   * @param blockWidth 块宽度
   * @param initialFontSize 初始字体大小
   * @param ctx Canvas上下文（用于测量文字宽度）
   * @returns 调整后的字体大小
   */
  fitTextToWidth(t, e, n, i) {
    if (!t || t.length === 0)
      return n;
    if (e <= 0 || n <= 12)
      return 12;
    const r = e - 4 * 2;
    if (r <= 0)
      return 12;
    let l = n;
    const h = i.font;
    for (; l > 12 && (i.font = `${l}px sans-serif`, !(i.measureText(t).width <= r)); )
      l -= 1;
    return i.font = h, Math.max(l, 12);
  }
  // 绘制窗口吸附预览
  drawSnapPreview() {
    if (!this.snappedWindow) return;
    const t = this.canvas.getContext("2d");
    if (t) {
      if (t.save(), t.strokeStyle = "#00a8ff", t.lineWidth = 2, t.setLineDash([5, 5]), t.fillStyle = "rgba(0, 168, 255, 0.1)", t.fillRect(
        this.snappedWindow.x,
        this.snappedWindow.y,
        this.snappedWindow.width,
        this.snappedWindow.height
      ), t.strokeRect(
        this.snappedWindow.x,
        this.snappedWindow.y,
        this.snappedWindow.width,
        this.snappedWindow.height
      ), this.snappedWindow.title) {
        t.setLineDash([]), t.font = "12px sans-serif", t.fillStyle = "#00a8ff", t.textAlign = "center", t.textBaseline = "bottom";
        const n = Xt(this.snappedWindow).x, i = this.snappedWindow.y - 5, s = t.measureText(this.snappedWindow.title), a = 4;
        t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(
          n - s.width / 2 - a,
          i - 12 - a,
          s.width + a * 2,
          16
        ), t.fillStyle = "#00a8ff", t.fillText(this.snappedWindow.title, n, i);
      }
      t.restore();
    }
  }
  // 设置工具
  setTool(t) {
    this.currentTool = t, this.clearSelection(), this.showGuides = t === u.Select, this.colorPickerState.isActive = t === u.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== u.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== u.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.showSnapPreview = !1, this.pendingSnapWindow = null, this.dragStartPosition = null, t !== u.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === u.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (Ot.isDrawingTool(this.currentTool)) {
      if (this.currentTool === u.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = Ot.createAnnotation(
        this.currentTool,
        t,
        this.currentStyle,
        {
          fontSize: this.textSize,
          mosaicSize: this.mosaicSize
        }
      );
    }
  }
  // 更新当前标注
  updateCurrentAnnotation(t) {
    if (!this.currentAnnotation)
      return;
    const e = this.currentAnnotation.getData();
    switch (e.type) {
      case u.Rectangle:
      case u.Arrow:
        e.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case u.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case u.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  // 完成标注创建
  finishAnnotation() {
    if (this.currentAnnotation) {
      const t = this.currentAnnotation.getData();
      t.type === u.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const e = this.currentAnnotation.getData().points;
    if (e.length < 3) return;
    let n = e[0].x, i = e[0].x, s = e[0].y, a = e[0].y;
    e.forEach((y) => {
      n = Math.min(n, y.x), i = Math.max(i, y.x), s = Math.min(s, y.y), a = Math.max(a, y.y);
    });
    const r = i - n, l = a - s;
    let h = 0;
    for (let y = 1; y < e.length; y++)
      h += ot(e[y - 1], e[y]);
    const x = ot(e[0], e[e.length - 1]) / h, d = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (x > 0.85 || d > 5) {
      const y = e[0], p = e[e.length - 1];
      this.currentAnnotation.updateData({ points: [y, p] });
      return;
    }
  }
  // 撤销最后一个操作（标注或翻译）
  undoAnnotation() {
    if (this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0) {
      this.clearTranslationOverlay();
      return;
    }
    if (this.annotationUndoStack.length === 0)
      return;
    this.annotationRedoStack.push(this.createHistorySnapshot());
    const t = this.annotationUndoStack.pop();
    t && this.restoreHistorySnapshot(t);
  }
  // 恢复最后一次撤销的操作
  redoAnnotation() {
    if (this.annotationRedoStack.length === 0)
      return;
    this.annotationUndoStack.push(this.createHistorySnapshot());
    const t = this.annotationRedoStack.pop();
    t && this.restoreHistorySnapshot(t);
  }
  // 删除选中的标注
  deleteSelectedAnnotation() {
    if (this.selectedAnnotation) {
      const t = this.annotations.findIndex((e) => e.getData().id === this.selectedAnnotation.getData().id);
      t !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(t, 1), this.selectedAnnotation = null, this.draw(), this.onStateChange?.());
    }
  }
  // 清除所有选中状态
  clearSelection() {
    this.annotations.forEach((t) => {
      t.updateData({ selected: !1, hovered: !1 });
    }), this.selectedAnnotation = null, this.hoveredAnnotation = null;
  }
  // 创建文字标注
  createTextAnnotation(t, e) {
    if (!e.trim()) return;
    const n = Ot.createAnnotation(
      u.Text,
      t,
      this.currentStyle,
      {
        text: e.trim(),
        fontSize: this.textSize
      }
    );
    n && n.isValid() && (this.pushAnnotationHistory(), this.annotations.push(n), this.draw(), this.onStateChange?.());
  }
  // 开始文字输入
  startTextInput(t, e) {
    this.onTextInputRequest?.(t, e);
  }
  // 截图并处理标注
  async processScreenshot(t) {
    if (!this.selectionRect)
      throw new Error("没有选择区域");
    try {
      const { x: e, y: n, width: i, height: s } = this.selectionRect, r = (await j("get_window_info"))?.scale || 1, l = await this.cropFromBackground(e, n, i, s);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const h = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await j("copy_to_clipboard", { image: h }) : await j("save_screenshot_to_file", { image: h });
    } catch (e) {
      const n = t === "save" ? "保存" : "复制";
      throw z.error(`[截图] ${n}截图失败`, e), new Error(`${n}截图失败: ${e?.message || e?.toString() || "未知错误"}`);
    }
  }
  // 从背景图像裁剪指定区域
  async cropFromBackground(t, e, n, i, s = {}) {
    return new Promise(async (a, r) => {
      const l = setTimeout(() => {
        r(new Error("裁剪背景图像超时"));
      }, 1e4);
      try {
        if (!this.backgroundImage) {
          let lt = 0;
          for (; !this.backgroundImage && lt < 3e3; )
            await new Promise((et) => setTimeout(et, 100)), lt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const h = window.devicePixelRatio || 1, g = Math.max(0, s.padding || 0), x = this.canvas.width / h, d = this.canvas.height / h, y = t - g, p = e - g, v = n + g * 2, R = i + g * 2, E = Math.max(1, Math.round(v * h)), H = Math.max(1, Math.round(R * h)), b = Math.max(0, y), D = Math.max(0, p), W = Math.min(x, y + v), L = Math.min(d, p + R), F = Math.max(0, W - b), A = Math.max(0, L - D), O = Math.round(b * h), _ = Math.round(D * h), B = Math.min(
          this.canvas.width - O,
          Math.round(F * h)
        ), Y = Math.min(
          this.canvas.height - _,
          Math.round(A * h)
        ), N = Math.round((b - y) * h), it = Math.round((D - p) * h), U = document.createElement("canvas");
        U.width = E, U.height = H;
        const M = U.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!M)
          throw new Error("无法获取2D绘图上下文");
        M.imageSmoothingEnabled = !1, s.fillColor && (M.fillStyle = s.fillColor, M.fillRect(0, 0, E, H)), B > 0 && Y > 0 && M.drawImage(
          this.backgroundImage,
          O,
          _,
          B,
          Y,
          N,
          it,
          B,
          Y
        );
        const $ = U.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: $,
          adjusted_width: E,
          adjusted_height: H,
          logical_x: y,
          logical_y: p,
          logical_width: v,
          logical_height: R
        });
      } catch (h) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${h.message || h}`));
      }
    });
  }
  // 渲染带标注的图像
  async renderWithAnnotations(t, e, n) {
    return new Promise((i, s) => {
      const a = setTimeout(() => {
        s(new Error("渲染标注超时"));
      }, 15e3), r = document.createElement("canvas");
      r.width = t.adjusted_width, r.height = t.adjusted_height;
      const l = r.getContext("2d", {
        alpha: !0,
        desynchronized: !1,
        willReadFrequently: !1
      });
      if (!l) {
        clearTimeout(a), s(new Error("无法获取2D绘图上下文"));
        return;
      }
      l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high";
      const h = new Image();
      h.onload = () => {
        try {
          if (l.drawImage(h, 0, 0), this.annotations.length > 0 && this.selectionRect) {
            const x = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e, d = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, y = this.drawingEngine.createScreenshotContext(
              l,
              x,
              d
            );
            this.annotations.forEach((p, v) => {
              try {
                p.drawToScreenshot(y);
              } catch (R) {
                z.error(`[截图] 绘制标注 ${v} 失败`, R);
              }
            });
          }
          let g;
          g = r.toDataURL("image/png"), clearTimeout(a), i(g);
        } catch (g) {
          z.error("[截图] 绘制过程出错", g);
          try {
            const x = r.toDataURL("image/png");
            clearTimeout(a), i(x);
          } catch {
            clearTimeout(a), s(new Error(`渲染失败: ${g.message || g}`));
          }
        }
      }, h.onerror = (g) => {
        z.error("[截图] 图像加载失败", g), clearTimeout(a), s(new Error("图像加载失败"));
      }, h.src = `data:image/png;base64,${t.image}`;
    });
  }
  // 获取当前状态
  getState() {
    return {
      selectionRect: this.selectionRect,
      annotations: this.annotations.map((t) => t.getData()),
      currentTool: this.currentTool,
      currentStyle: this.currentStyle,
      textSize: this.textSize,
      mosaicSize: this.mosaicSize,
      hasSelection: !!this.selectionRect,
      // 有标注或有翻译覆盖层时都可以撤销
      hasAnnotations: this.annotations.length > 0 || this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0,
      selectedAnnotation: this.selectedAnnotation?.getData() || null,
      isDrawing: this.eventHandler.getDrawingState().isDrawing
    };
  }
  // 获取绘制状态
  getDrawingState() {
    return this.eventHandler.getDrawingState().isDrawing;
  }
  // 更新样式
  updateStyle(t) {
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === u.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === u.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const e = this.annotations.findIndex((n) => n === t);
    e !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(e, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字标注内容
  updateTextAnnotation(t, e) {
    if (t.getData().type === u.Text) {
      if (t.getData().text === e) {
        this.clearEditingAnnotation();
        return;
      }
      this.pushAnnotationHistory(), t.updateData({ text: e }), this.clearEditingAnnotation(), this.draw(), this.onStateChange?.();
    }
  }
  // 设置正在编辑的文字注释
  setEditingAnnotation(t) {
    this.editingAnnotation = t, this.draw();
  }
  // 清除编辑状态
  clearEditingAnnotation() {
    this.editingAnnotation = null, this.draw();
  }
  async createPinWindow() {
    return this.createPinLikeWindow("pin");
  }
  async createOcrPinWindow() {
    return this.createPinLikeWindow("ocr");
  }
  // 创建贴图/文字识别复用窗口
  async createPinLikeWindow(t) {
    if (this.selectionRect)
      try {
        const { x: e, y: n, width: i, height: s } = this.selectionRect, a = await j("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + e * r), h = Math.round(a.y + n * r), g = Math.round(i * r), x = Math.round(s * r), d = Math.round(a.x + window.innerWidth * r), y = t === "ocr" ? Math.round(l - Math.max(0, g - g) / 2) : l, p = t === "ocr" ? Math.max(a.x, Math.min(y, d - g)) : l, v = {}, R = await this.cropFromBackground(e, n, i, s, v);
        if (!R?.image)
          throw new Error("Failed to crop from background image");
        const E = await this.renderWithAnnotations(R, r, "save");
        await j("create_pin_window", {
          mode: t,
          imageData: E,
          x: p,
          y: h,
          width: g,
          height: x
        }), this.onStateChange?.(), setTimeout(() => {
          new se("screenshot").close();
        }, 100);
      } catch (e) {
        throw z.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, e), e;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const e = await j("get_window_info"), n = e?.scale || 1, i = Math.round(e.x + (this.selectionRect.x + t.x - this.selectionRect.x) * n), s = Math.round(e.y + (this.selectionRect.y + t.y - this.selectionRect.y) * n), a = await j("get_pixel_color", {
          x: i,
          y: s
        }), r = this.rgbToHex(a.r, a.g, a.b), l = {
          rgb: a,
          hex: r,
          position: t
        };
        this.onColorPicked?.(l), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3);
      } catch (e) {
        z.error("[截图] 获取像素颜色失败", e);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const e = await j("get_window_info"), n = e?.scale || 1, i = this.colorPickerState.zoomFactor, s = Math.floor(i / 2), a = Math.round(e.x + t.x * n), r = Math.round(e.y + t.y * n), l = await j("get_screen_preview", {
          x: a - s,
          y: r - s,
          width: i,
          height: i
        }), h = new Image();
        h.src = `data:image/png;base64,${l.image}`, await h.decode();
        const g = await createImageBitmap(h);
        this.colorPickerState.previewImage = g;
        const d = new OffscreenCanvas(i, i).getContext("2d");
        if (d) {
          d.drawImage(g, 0, 0, i, i);
          const y = d.getImageData(s, s, 1, 1).data, p = { r: y[0], g: y[1], b: y[2] }, v = this.rgbToHex(p.r, p.g, p.b);
          this.colorPickerState.colorInfo = { rgb: p, hex: v, position: t };
        }
        this.draw();
      } catch (e) {
        z.error("[截图] 更新颜色预览失败", e);
      }
  }
  // 节流版本的颜色预览更新
  throttledUpdateColorPreview(t) {
    const e = Date.now();
    e - this.lastThrottledTimestamp < this.throttleInterval || (this.lastThrottledTimestamp = e, this.throttleTimer && cancelAnimationFrame(this.throttleTimer), this.throttleTimer = requestAnimationFrame(() => {
      this.updateColorPreview(t), this.throttleTimer = null;
    }));
  }
  // RGB 转 HEX
  rgbToHex(t, e, n) {
    const i = (s) => {
      const a = Math.max(0, Math.min(255, Math.round(s))).toString(16);
      return a.length === 1 ? "0" + a : a;
    };
    return `#${i(t)}${i(e)}${i(n)}`.toUpperCase();
  }
  // ==================== OCR翻译功能 ====================
  // 执行OCR识别和翻译
  async performOcrTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage))
      try {
        const t = performance.now();
        let e = 0, n = 0, i = 0, s = 0, a = 0;
        const { x: r, y: l, width: h, height: g } = this.selectionRect, x = window.devicePixelRatio || 1, d = h * x, y = g * x, p = this.canvasPool.acquire(d, y), v = p.getContext("2d");
        if (!v)
          throw this.canvasPool.release(p), new Error("无法创建临时canvas");
        const R = r * x, E = l * x, H = performance.now();
        v.drawImage(
          this.backgroundImage,
          R,
          E,
          d,
          y,
          0,
          0,
          d,
          y
        ), e = Math.round(performance.now() - H);
        const b = performance.now(), { recognizeFromCanvas: D } = await Rt.loadOCR();
        n = Math.round(performance.now() - b);
        const W = performance.now(), L = await D(p);
        i = Math.round(performance.now() - W), this.canvasPool.release(p);
        const F = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: n,
          ocrRecognitionDurationMs: i,
          confidence: L.confidence,
          rawLineCount: L.blocks.length,
          textLength: L.full_text.trim().length
        };
        z.info("[OCR] 识别耗时统计", F), pt.log("[OCR] recognition timing", F);
        const A = L.blocks, O = performance.now(), _ = Xe(A);
        s = Math.round(performance.now() - O);
        const B = _.map((c) => c.text).join(`

`), Y = {
          rawLineCount: A.length,
          paragraphCount: _.length,
          durationMs: s,
          paragraphs: _.map((c, T) => ({
            index: T,
            text: c.text,
            blockCount: c.blocks.length,
            isCodeBlock: !!c.isCodeBlock,
            isStructuredBlock: !!c.isStructuredBlock,
            bbox: c.bbox,
            sourceBlocks: c.blocks.map((J) => ({
              text: J.text,
              x: J.x,
              y: J.y,
              width: J.width,
              height: J.height
            }))
          }))
        };
        if (z.info("[OCR] 版面重组完成", Y), pt.log("[OCR] layout reflow complete", Y), !B || !B.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const N = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Wt(B));
        const it = (c) => {
          const T = c.trim();
          return !!(T.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !T.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let U = "";
        const M = Wt(B), k = {
          detectedLanguage: M,
          textLength: B.trim().length,
          textPreview: B.trim().slice(0, 500)
        };
        z.info("[OCR] 翻译语言检测完成", k), pt.log("[OCR] translation language detected", k), Ht(M) && (this.translationOverlay.sourceLanguage = M, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(M));
        const $ = N === "offline" ? Rt.loadOfflineTranslator() : null, S = (c) => c.includes("插件") && c.includes("未启用") ? c.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : c : N === "offline" ? c.includes("未激活") || c.includes("未下载") || c.includes("运行时未安装") ? c : c.includes("超时") ? "模型加载超时，请重试" : c.includes("离线翻译暂仅支持") ? c : "离线翻译失败: " + c.substring(0, 50) : c.includes("timeout") || c.includes("超时") ? "翻译超时，请检查网络连接" : c.includes("network") || c.includes("网络") || c.includes("请求") || c.includes("令牌") ? "翻译失败，请检查网络连接" : c.trim() ? c.slice(0, 80) : "翻译失败，请检查网络连接", V = async () => {
          if (!$)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: c,
            canUseOfflineTranslation: T,
            warmupOfflineTranslator: J,
            getModelCacheInfo: G
          } = await $, st = T();
          if (this.offlineModelActivated && !st)
            if ((await G()).isCached)
              await J();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return c;
        }, lt = async (c, T, J) => {
          if (!c.trim())
            return c;
          if (N === "offline") {
            if (T !== "en" || J !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await V())(c);
          }
          return await j("translate_text", {
            text: c,
            from: T,
            to: J,
            engine: N
          });
        }, et = (c) => {
          const T = c.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(T) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(T);
        }, Ct = async (c, T, J) => {
          const G = c.trim();
          if (!G || it(G))
            return c;
          const st = c.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (st) {
            const [, gt, Q, K, tt, yt] = st, bt = Wt(Q), Vt = et(Q) || !Ht(bt) ? Q : await lt(Q, bt, this.getAutoTargetLanguage(bt)), Pt = Wt(tt), Zt = Ht(Pt) && !it(tt) ? await lt(tt, Pt, this.getAutoTargetLanguage(Pt)) : tt;
            return `${gt}${Vt}${K}${Zt}${yt}`;
          }
          if (et(G))
            return c;
          const q = Wt(G);
          if (!Ht(q))
            return c;
          const mt = this.getAutoTargetLanguage(q), nt = await lt(G, q, mt), ct = {
            paragraphIndex: T,
            blockIndex: J,
            sourceLanguage: q,
            targetLanguage: mt,
            sourceText: G,
            translatedText: nt.slice(0, 200)
          };
          return z.info("[OCR] 结构化块翻译完成", ct), pt.log("[OCR] structured block translation complete", ct), nt;
        }, wt = async (c, T) => {
          const J = performance.now(), G = (nt) => ({
            index: T,
            durationMs: Math.round(performance.now() - J),
            ...nt
          }), st = Wt(c.text), q = this.getAutoTargetLanguage(st), mt = {
            index: T,
            text: c.text,
            sourceLanguage: st,
            targetLanguage: q,
            engine: N,
            structured: !!c.isStructuredBlock
          };
          if (z.info("[OCR] 段落翻译方向", mt), pt.log("[OCR] paragraph translation direction", mt), !Ht(st)) {
            c.translatedText = c.text;
            const nt = G({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), ct = {
              index: T,
              detectedLanguage: st,
              durationMs: nt.durationMs,
              text: c.text
            };
            return z.warn("[OCR] 跳过不支持的段落语言", ct), pt.log("[OCR] skip unsupported paragraph language", ct), nt;
          }
          try {
            if (c.isStructuredBlock && c.blocks.length > 0) {
              const gt = async (K, tt) => {
                const yt = await Ct(K.text, T, tt);
                return K.translatedText = yt, yt;
              }, Q = [];
              if (N === "offline")
                for (let K = 0; K < c.blocks.length; K += 1)
                  Q.push(await gt(c.blocks[K], K));
              else
                Q.push(
                  ...await Promise.all(
                    c.blocks.map((K, tt) => gt(K, tt))
                  )
                );
              c.translatedText = Q.join(" ");
            } else if (it(c.text) || c.isCodeBlock) {
              c.translatedText = c.text;
              const gt = c.isCodeBlock ? "code_block" : "command_like_text", Q = G({ skipped: !0, cancelled: !1 }), K = {
                index: T,
                reason: gt,
                durationMs: Q.durationMs,
                text: c.text
              };
              return z.info("[OCR] 跳过代码段翻译", K), pt.log("[OCR] skip code paragraph translation", K), Q;
            } else
              c.translatedText = await lt(
                c.text,
                st,
                q
              );
            const nt = G({ skipped: !1, cancelled: !1 }), ct = {
              index: T,
              durationMs: nt.durationMs,
              sourceLanguage: st,
              targetLanguage: q,
              engine: N,
              structured: !!c.isStructuredBlock,
              sourceLength: c.text.length,
              translatedLength: (c.translatedText || "").length,
              translatedPreview: (c.translatedText || "").slice(0, 300)
            };
            return z.info("[OCR] 段落翻译完成", ct), pt.log("[OCR] paragraph translation complete", ct), nt;
          } catch (nt) {
            const ct = nt instanceof Error ? nt.message : String(nt);
            if (ct === "翻译已取消")
              return G({ skipped: !1, cancelled: !0 });
            c.translatedText = c.text;
            const gt = S(ct), Q = G({
              skipped: !1,
              cancelled: !1,
              errorMessage: gt
            }), K = {
              index: T,
              durationMs: Q.durationMs,
              sourceLanguage: st,
              targetLanguage: q,
              engine: N,
              error: ct,
              structured: !!c.isStructuredBlock,
              text: c.text
            };
            return z.error("[OCR] 段落翻译失败", K), pt.log("[OCR] paragraph translation failed", K), Q;
          }
        }, dt = performance.now();
        let at = [];
        if (N === "offline")
          for (let c = 0; c < _.length; c += 1) {
            const T = await wt(_[c], c);
            if (at.push(T), T.cancelled)
              return;
            if (T.errorMessage) {
              U = T.errorMessage;
              break;
            }
          }
        else {
          if (at = await Promise.all(
            _.map((c, T) => wt(c, T))
          ), at.some((c) => c.cancelled))
            return;
          U = at.find((c) => c.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - dt);
        const ut = {
          durationMs: a,
          engine: N,
          paragraphCount: _.length,
          translatedParagraphCount: at.filter((c) => !c.skipped && !c.errorMessage).length,
          skippedParagraphCount: at.filter((c) => c.skipped).length,
          failedParagraphCount: at.filter((c) => !!c.errorMessage).length
        };
        z.info("[OCR] 翻译耗时统计", ut), pt.log("[OCR] translation timing", ut);
        const vt = _.map((c) => this.toDisplayParagraph(c, x)), Nt = vt.map((c) => this.toLegacyOverlayBlock(c));
        this.translationOverlay.blocks = Nt, this.translationOverlay.paragraphBlocks = vt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = U || void 0;
        const f = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: n,
          ocrRecognitionDurationMs: i,
          reflowDurationMs: s,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: A.length,
          paragraphCount: _.length,
          engine: N
        };
        z.info("[OCR] 截图翻译总耗时统计", f), pt.log("[OCR] pipeline timing", f), this.draw(), this.onStateChange?.();
      } catch (t) {
        z.error("[OCR] OCR翻译失败:", t);
        const e = t instanceof Error ? t.message : String(t);
        this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(e), this.draw(), this.onStateChange?.();
      }
  }
  getOcrTranslationErrorMessage(t) {
    return t.includes("OCR_RECOGNITION_LOW_QUALITY") ? "OCR识别质量过低，请重新选择更清晰或方向正确的文本区域" : t.includes("RAPIDOCR_UNAVAILABLE") ? "RapidOCR 未配置，无法识别截图文字" : t ? t.slice(0, 80) : "OCR翻译失败";
  }
  getAutoTargetLanguage(t) {
    return t === "zh" ? "en" : "zh";
  }
  toDisplayParagraph(t, e) {
    return {
      ...t,
      blocks: t.blocks.map((n) => ({
        ...n,
        x: n.x / e,
        y: n.y / e,
        width: n.width / e,
        height: n.height / e,
        fontSize: n.fontSize / e,
        lineHeight: n.lineHeight / e
      })),
      bbox: {
        x: t.bbox.x / e,
        y: t.bbox.y / e,
        width: t.bbox.width / e,
        height: t.bbox.height / e
      },
      fontSize: t.fontSize ? t.fontSize / e : void 0,
      lineHeight: t.lineHeight ? t.lineHeight / e : void 0
    };
  }
  toLegacyOverlayBlock(t) {
    return {
      text: t.text,
      x: t.bbox.x,
      y: t.bbox.y,
      width: t.bbox.width,
      height: t.bbox.height,
      fontSize: t.fontSize || 16,
      lineHeight: t.lineHeight || (t.fontSize || 16) * 1.4,
      angle: t.angle || 0,
      translatedText: t.translatedText || t.text,
      isCodeBlock: t.isCodeBlock
    };
  }
  // 清除翻译覆盖层
  async clearTranslationOverlay() {
    try {
      const { cancelOfflineTranslation: t } = await Rt.loadOfflineTranslator();
      t();
    } catch {
    }
    this.translationOverlay = {
      blocks: [],
      paragraphBlocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: this.translationOverlay.engine
      // 保留用户选择的引擎
    }, this.draw(), this.onStateChange?.();
  }
  // 获取翻译状态
  getTranslationState() {
    return this.translationOverlay;
  }
  // 设置翻译引擎
  setTranslationEngine(t) {
    this.translationOverlay.engine = t, this.onStateChange?.();
  }
  // 设置离线模型激活状态
  setOfflineModelActivated(t) {
    this.offlineModelActivated = t;
  }
  // 处理键盘事件
  handleKeyDown(t) {
    if (!this.colorPickerState.isActive) return !1;
    switch (t.key.toLowerCase()) {
      case "q":
        return this.colorPickerState.colorInfo && (this.onColorPicked?.(this.colorPickerState.colorInfo), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3)), !0;
      case "shift":
        return this.colorPickerState.showFormat = this.colorPickerState.showFormat === "hex" ? "rgb" : "hex", this.draw(), !0;
      default:
        return !1;
    }
  }
  // 销毁
  destroy() {
    Rt.loadOfflineTranslator().then(({ cancelOfflineTranslation: e }) => e()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null), this.annotations.forEach((e) => {
      typeof e.destroy == "function" && e.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
const vn = { class: "toolbar-container" }, kn = { class: "toolbar-panel first-panel" }, Sn = { class: "tool-section" }, bn = ["onClick", "title"], Mn = { class: "action-section" }, Cn = ["disabled", "title"], Tn = ["disabled", "title"], Rn = ["title"], An = ["title"], Pn = ["title"], zn = {
  key: 0,
  class: "toolbar-panel second-panel"
}, Dn = { class: "style-section" }, Wn = {
  key: 0,
  class: "style-group"
}, Ln = { class: "line-width-selector" }, In = ["onClick", "title"], Hn = {
  key: 1,
  class: "style-group color-picker-group"
}, _n = ["title"], Bn = {
  key: 0,
  class: "color-picker-panel"
}, En = { class: "color-row" }, On = ["onClick", "title"], $n = { class: "custom-color-wrapper" }, Nn = ["title"], Vn = ["value"], Fn = {
  key: 2,
  class: "style-group"
}, Yn = { class: "text-size-selector" }, Un = ["onClick", "title"], Xn = {
  key: 3,
  class: "style-group"
}, jn = { class: "mosaic-size-selector" }, Zn = ["onClick", "title"], Gn = {
  key: 4,
  class: "style-group"
}, qn = { class: "translate-engine-selector" }, Kn = ["onClick", "title"], Jn = /* @__PURE__ */ ne({
  __name: "ToolbarSection",
  props: {
    currentTool: {},
    currentColor: {},
    currentLineWidth: {},
    currentTextSize: {},
    currentMosaicSize: {},
    canUndo: { type: Boolean },
    canDelete: { type: Boolean },
    currentTranslateEngine: { default: "bing" }
  },
  emits: ["tool-select", "color-change", "line-width-change", "text-size-change", "mosaic-size-change", "translate-engine-change", "undo", "delete", "save", "confirm", "cancel"],
  setup(o, { emit: t }) {
    const e = ft(!1), { t: n } = Se(), i = o, s = t, a = rt(() => [
      { type: u.Select, icon: Le, title: n("screenshot.select") },
      { type: u.Rectangle, icon: Ie, title: n("screenshot.rectangle") },
      { type: u.Arrow, icon: Ae, title: n("screenshot.arrow") },
      { type: u.Pen, icon: Me, title: n("screenshot.pen") },
      { type: u.Mosaic, icon: We, title: n("screenshot.mosaic") },
      { type: u.Text, icon: De, title: n("screenshot.text") },
      { type: u.ColorPicker, icon: qt, title: n("screenshot.colorPicker") },
      { type: u.Ocr, icon: Ce, title: n("screenshot.ocr") },
      { type: u.Translate, icon: fe, title: n("screenshot.translate") },
      { type: u.Pin, icon: be, title: n("screenshot.pin") }
    ]), r = rt(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: n("translate.bingTranslate"), short: "B" },
      { value: "offline", label: n("translate.offlineTranslate"), short: "离" }
    ]), l = [2, 3, 5, 8], h = ["#ff4444", "#44ff44", "#4444ff"], g = [12, 14, 16, 18, 20, 24], x = [5, 8, 10, 15], d = rt(() => ![u.Select, u.ColorPicker, u.Ocr, u.Pin].includes(i.currentTool)), y = rt(
      () => [u.Rectangle, u.Arrow, u.Pen].includes(i.currentTool)
    ), p = rt(
      () => [u.Rectangle, u.Arrow, u.Pen, u.Text].includes(i.currentTool)
    ), v = rt(() => i.currentTool === u.Text), R = rt(() => i.currentTool === u.Mosaic), E = rt(() => i.currentTool === u.Translate), H = (k) => s("tool-select", k), b = (k) => s("color-change", k), D = (k) => s("line-width-change", k), W = (k) => s("text-size-change", k), L = (k) => s("mosaic-size-change", k), F = () => s("undo"), A = () => s("delete"), O = () => s("save"), _ = () => s("confirm"), B = () => s("cancel"), Y = (k) => {
      s("translate-engine-change", k);
    }, N = () => {
      e.value = !e.value;
    }, it = (k) => {
      b(k), e.value = !1;
    }, U = () => {
    }, M = (k) => {
      const $ = k.target;
      $.value && b($.value);
    };
    return xe(() => i.currentTool, () => {
      e.value && (e.value = !1);
    }), (k, $) => (X(), Z("div", vn, [
      I(" 第一个面板：工具选择 + 操作按钮 "),
      P("div", kn, [
        I(" 工具选择区域 "),
        P("div", Sn, [
          (X(!0), Z(
            zt,
            null,
            Dt(a.value, (S) => (X(), Z("button", {
              key: S.type,
              onClick: (V) => H(S.type),
              class: Tt(["tool-btn", { active: k.currentTool === S.type }]),
              title: S.title
            }, [
              (X(), ie(we(S.icon), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              }))
            ], 10, bn))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        I(" 分隔线 "),
        $[0] || ($[0] = P(
          "div",
          { class: "toolbar-divider" },
          null,
          -1
          /* HOISTED */
        )),
        I(" 操作按钮区域 "),
        P("div", Mn, [
          P("button", {
            onClick: F,
            disabled: !k.canUndo,
            class: "action-btn undo",
            title: ht(n)("screenshot.undo")
          }, [
            C(ht(He), {
              theme: "outline",
              size: "18",
              strokeWidth: 3
            })
          ], 8, Cn),
          P("button", {
            onClick: A,
            disabled: !k.canDelete,
            class: "action-btn delete",
            title: ht(n)("screenshot.delete")
          }, [
            C(ht(Pe), {
              theme: "outline",
              size: "18",
              strokeWidth: 3
            })
          ], 8, Tn),
          P("button", {
            onClick: O,
            class: "action-btn save",
            title: ht(n)("screenshot.save")
          }, [
            C(ht(ze), {
              theme: "outline",
              size: "18",
              strokeWidth: 3
            })
          ], 8, Rn),
          P("button", {
            onClick: _,
            class: "action-btn confirm",
            title: ht(n)("screenshot.confirm")
          }, [
            C(ht(Te), {
              theme: "outline",
              size: "18",
              strokeWidth: 3
            })
          ], 8, An),
          P("button", {
            onClick: B,
            class: "action-btn cancel",
            title: ht(n)("screenshot.cancel")
          }, [
            C(ht(Re), {
              theme: "outline",
              size: "18",
              strokeWidth: 3
            })
          ], 8, Pn)
        ])
      ]),
      I(" 第二个面板：样式设置区域 "),
      d.value ? (X(), Z("div", zn, [
        P("div", Dn, [
          I(" 线宽设置 "),
          y.value ? (X(), Z("div", Wn, [
            P("div", Ln, [
              (X(), Z(
                zt,
                null,
                Dt(l, (S) => P("button", {
                  key: S,
                  onClick: (V) => D(S),
                  class: Tt(["width-btn", { active: k.currentLineWidth === S }]),
                  title: `${S}px`
                }, [
                  P(
                    "div",
                    {
                      class: "line-preview",
                      style: xt({ height: `${S}px`, backgroundColor: k.currentColor })
                    },
                    null,
                    4
                    /* STYLE */
                  )
                ], 10, In)),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])) : I("v-if", !0),
          I(" 颜色设置 "),
          p.value ? (X(), Z("div", Hn, [
            P("button", {
              onClick: N,
              class: "color-trigger-btn",
              style: xt({ backgroundColor: k.currentColor }),
              title: ht(n)("screenshot.colorPicker")
            }, $[1] || ($[1] = [
              P(
                "div",
                { class: "color-trigger-inner" },
                null,
                -1
                /* HOISTED */
              )
            ]), 12, _n),
            I(" 颜色选择器面板 "),
            e.value ? (X(), Z("div", Bn, [
              P("div", En, [
                I(" 预设颜色：红、绿、蓝 "),
                (X(), Z(
                  zt,
                  null,
                  Dt(h, (S) => P("button", {
                    key: S,
                    onClick: (V) => it(S),
                    class: Tt(["color-btn", { active: k.currentColor === S }]),
                    style: xt({ backgroundColor: S }),
                    title: S
                  }, null, 14, On)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                I(" 自定义颜色选择器 "),
                P("div", $n, [
                  P("button", {
                    onClick: U,
                    class: Tt(["color-btn custom-color-btn", { active: !h.includes(k.currentColor) }]),
                    title: ht(n)("screenshot.customColor")
                  }, [
                    C(ht(qt), {
                      theme: "outline",
                      size: "14",
                      strokeWidth: 3
                    })
                  ], 10, Nn),
                  P("input", {
                    ref: "colorInputRef",
                    type: "color",
                    onChange: M,
                    value: k.currentColor,
                    class: "color-input-hidden"
                  }, null, 40, Vn)
                ])
              ])
            ])) : I("v-if", !0)
          ])) : I("v-if", !0),
          I(" 文字大小设置 "),
          v.value ? (X(), Z("div", Fn, [
            P("div", Yn, [
              (X(), Z(
                zt,
                null,
                Dt(g, (S) => P("button", {
                  key: S,
                  onClick: (V) => W(S),
                  class: Tt(["size-btn", { active: k.currentTextSize === S }]),
                  title: `${S}px`
                }, [
                  P(
                    "span",
                    {
                      class: "size-text",
                      style: xt({ fontSize: `${S}px` })
                    },
                    "A",
                    4
                    /* STYLE */
                  )
                ], 10, Un)),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])) : I("v-if", !0),
          I(" 马赛克大小设置 "),
          R.value ? (X(), Z("div", Xn, [
            P("div", jn, [
              (X(), Z(
                zt,
                null,
                Dt(x, (S) => P("button", {
                  key: S,
                  onClick: (V) => L(S),
                  class: Tt(["size-btn", { active: k.currentMosaicSize === S }]),
                  title: `${ht(n)("screenshot.brush")} ${S * 3}px`
                }, [
                  P(
                    "div",
                    {
                      class: "mosaic-preview",
                      style: xt({
                        width: `${Math.min(S * 1.5, 24)}px`,
                        height: `${Math.min(S * 1.5, 24)}px`,
                        backgroundColor: "rgba(100, 100, 100, 0.5)",
                        borderRadius: "50%"
                      })
                    },
                    null,
                    4
                    /* STYLE */
                  )
                ], 10, Zn)),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])) : I("v-if", !0),
          I(" 翻译引擎选择 "),
          E.value ? (X(), Z("div", Gn, [
            P("div", qn, [
              (X(!0), Z(
                zt,
                null,
                Dt(r.value, (S) => (X(), Z("button", {
                  key: S.value,
                  onClick: (V) => Y(S.value),
                  class: Tt(["engine-btn", { active: k.currentTranslateEngine === S.value }]),
                  title: S.label
                }, _t(S.short), 11, Kn))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])) : I("v-if", !0)
        ])
      ])) : I("v-if", !0)
    ]));
  }
}), Qn = /* @__PURE__ */ oe(Jn, [["__scopeId", "data-v-66fc8e90"]]), ti = {
  class: "screenshot-container",
  ref: "containerRef"
}, ei = {
  key: 0,
  class: "mask-layers"
}, ni = {
  key: 1,
  class: "mask-full"
}, ii = { class: "size-text" }, si = {
  key: 4,
  class: "loading-overlay"
}, oi = {
  key: 5,
  class: "instructions"
}, ai = { class: "hint" }, ri = /* @__PURE__ */ ne({
  __name: "index",
  setup(o) {
    const t = ft(), e = ft(), n = ft(null);
    let i = null;
    const s = ft(!0), a = ft(!1), r = ft(""), l = ft({ x: 0, y: 0 }), h = ft(!1), g = ft("bing");
    let x = !1;
    const d = ft({
      selectionRect: null,
      annotations: [],
      currentTool: u.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3 },
      textSize: 16,
      mosaicSize: 5,
      hasSelection: !1,
      hasAnnotations: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), y = ft(), p = ft(), v = rt(() => d.value.isDrawing), R = rt(() => {
      if (!d.value.selectionRect) return {};
      const { y: f } = d.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${f}px`
      };
    }), E = rt(() => {
      if (!d.value.selectionRect) return {};
      const { y: f, height: c } = d.value.selectionRect;
      return {
        top: `${f + c}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), H = rt(() => {
      if (!d.value.selectionRect) return {};
      const { x: f, y: c, height: T } = d.value.selectionRect;
      return {
        top: `${c}px`,
        left: "0",
        width: `${f}px`,
        height: `${T}px`
      };
    }), b = rt(() => {
      if (!d.value.selectionRect) return {};
      const { x: f, y: c, width: T, height: J } = d.value.selectionRect;
      return {
        top: `${c}px`,
        left: `${f + T}px`,
        right: "0",
        height: `${J}px`
      };
    }), D = rt(() => {
      if (!d.value.selectionRect) return {};
      const { x: f, y: c, height: T } = d.value.selectionRect, J = 48, G = 48, st = 8, q = 10, mt = ![u.Select, u.ColorPicker, u.Ocr, u.Pin].includes(d.value.currentTool), nt = mt ? J + G + st : J, ct = 510;
      let gt = 0;
      mt && (d.value.currentTool === u.Text ? gt = 380 : d.value.currentTool === u.Mosaic ? gt = 250 : gt = 320);
      const Q = Math.max(ct, gt);
      let K;
      c + T + nt + q < window.innerHeight ? K = c + T + q : c - nt - q > 0 ? K = c - nt - q : K = Math.max(c + T - nt - q, c + 10);
      let tt;
      const yt = q, bt = window.innerWidth - q, Vt = bt - yt;
      if (Q > Vt)
        tt = yt;
      else {
        tt = f;
        const Pt = 5;
        tt + Q > bt - Pt && (tt = bt - Q - Pt), tt < yt && (tt = yt), tt + Q > bt && (tt = bt - Q, tt < yt && (tt = yt));
      }
      return {
        left: `${tt}px`,
        top: `${K}px`
      };
    }), W = rt(() => {
      if (!d.value.selectionRect) return {};
      const { x: f, y: c, width: T, height: J } = d.value.selectionRect, G = 10;
      let st = f - G, q = c - G, mt = "translateY(-100%)";
      return st < 10 && (st = f + T + G, mt = "translateY(-100%)"), q < 30 && (q = c + J + G, mt = "translateY(0)"), {
        left: `${st}px`,
        top: `${q}px`,
        transform: mt
      };
    }), L = rt(() => {
      if (!d.value.selectionRect) return "";
      const { width: f, height: c } = d.value.selectionRect;
      return `${Math.round(f)} × ${Math.round(c)}`;
    }), F = rt(() => {
      const f = d.value.textSize + 20;
      return {
        left: `${l.value.x}px`,
        top: `${l.value.y - f / 2}px`
      };
    }), A = (f) => {
      if (f === u.Pin && d.value.selectionRect) {
        O();
        return;
      }
      if (f === u.Ocr && d.value.selectionRect) {
        _();
        return;
      }
      i?.setTool(f);
    }, O = async () => {
      try {
        await i?.createPinWindow();
      } catch (f) {
        z.error("[截图] 创建贴图失败", f);
      }
    }, _ = async () => {
      try {
        await i?.createOcrPinWindow();
      } catch (f) {
        z.error("[截图] 创建文字识别贴图失败", f);
      }
    }, B = (f) => {
      i?.updateStyle({ color: f });
    }, Y = (f) => {
      i?.updateStyle({ lineWidth: f });
    }, N = (f) => {
      i?.updateTextSize(f);
    }, it = (f) => {
      i?.updateMosaicSize(f);
    }, U = (f) => {
      g.value = f, i?.setTranslationEngine(f), i?.executeTranslation();
    }, M = () => {
      i?.undoAnnotation();
    }, k = () => {
      i?.redoAnnotation();
    }, $ = () => {
      i?.deleteSelectedAnnotation();
    }, S = async () => {
      try {
        await i?.processScreenshot("save"), vt();
      } catch (f) {
        const c = f?.message || f?.toString() || "保存失败";
        if (c.includes("保存已取消") || c.includes("cancelled"))
          return;
        z.error("保存截图时发生错误", c);
      }
    }, V = async () => {
      try {
        await i?.processScreenshot("copy"), vt();
      } catch {
      }
    }, lt = () => {
      vt();
    };
    let et = null;
    const Ct = (f, c) => {
      if (c && c.getData().type === "text") {
        const T = c.getData();
        l.value = {
          x: T.points[0].x,
          y: T.points[0].y
        };
      } else
        l.value = f;
      a.value = !0, et = c || null, c && i?.setEditingAnnotation(c), c && c.getData().text ? r.value = c.getData().text : r.value = "", ke(() => {
        e.value?.focus(), et && e.value?.select();
      });
    }, wt = () => {
      r.value.trim() ? et ? i?.updateTextAnnotation(et, r.value) : i?.createTextAnnotation(l.value, r.value) : et && i?.deleteAnnotation(et), dt();
    }, dt = () => {
      a.value = !1, r.value = "", et && i?.clearEditingAnnotation(), et = null;
    }, at = (f) => {
      navigator.clipboard && navigator.clipboard.writeText(f.hex).catch((c) => {
        z.error("[截图] 复制颜色到剪贴板失败", c);
      });
    }, ut = (f) => {
      if (f.key === "Meta" || f.key === "Win" || f.altKey && f.key === "Tab" || f.altKey && f.key === "F4") {
        f.preventDefault(), f.stopPropagation();
        return;
      }
      if (a.value && document.activeElement === e.value) {
        if (f.key === "Escape") {
          dt(), f.preventDefault();
          return;
        }
        if (f.key === "Enter") {
          wt(), f.preventDefault();
          return;
        }
        if (f.key === "Tab") {
          f.preventDefault();
          return;
        }
        return;
      }
      if (!d.value.selectionRect) {
        if (f.key === "Escape") {
          vt();
          return;
        }
        f.preventDefault(), f.stopPropagation();
        return;
      }
      if (i?.handleKeyDown(f)) {
        f.preventDefault();
        return;
      }
      const c = navigator.platform.toLowerCase().includes("mac");
      if ((c ? f.metaKey : f.ctrlKey) && f.key.toLowerCase() === "z") {
        f.shiftKey ? k() : M(), f.preventDefault();
        return;
      }
      if (!c && f.ctrlKey && f.key.toLowerCase() === "y") {
        k(), f.preventDefault();
        return;
      }
      if (f.key === "Escape") {
        vt();
        return;
      } else if (f.key === "Delete" || f.key === "Backspace") {
        $(), f.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(f.key) || f.preventDefault();
    }, vt = async () => {
      if (!x) {
        x = !0, i?.destroy(), i = null;
        try {
          await j("cleanup_screenshot_resources");
        } catch {
          try {
            await j("clear_screenshot_background");
          } catch (c) {
            z.error("[截图] 清理后台缓存失败", c);
          }
        }
        d.value = {
          selectionRect: null,
          annotations: [],
          currentTool: u.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3 },
          textSize: 16,
          mosaicSize: 5,
          hasSelection: !1,
          hasAnnotations: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, a.value = !1, r.value = "", et = null, h.value = !1, s.value = !0;
        try {
          await j("close_and_destroy_screenshot_window");
        } catch (f) {
          z.error("[截图] 销毁截图窗口失败，回退到 close()", f), await n.value?.close();
        } finally {
          x = !1;
        }
      }
    }, Nt = () => {
      const f = i?.getState();
      f && (d.value = f);
    };
    return me(async () => {
      if (t.value) {
        n.value = new se("screenshot"), await n.value.emit("screenshot_ready"), i = new pn(
          t.value,
          Nt,
          Ct,
          at
        );
        try {
          const f = await j("get_translation_engine");
          f && ["google", "bing", "offline"].includes(f) && (g.value = f, i?.setTranslationEngine(f));
        } catch (f) {
          z.error("[截图] 获取翻译引擎设置失败", f);
        }
        try {
          const f = await j("get_offline_model_activated");
          i?.setOfflineModelActivated(f);
        } catch (f) {
          z.error("[截图] 获取离线模型激活状态失败", f);
        }
        document.addEventListener("keydown", ut), p.value = await Ft("background-ready", () => {
          i?.triggerBackgroundReload();
        }), p.value = await Ft("screenshot-close-requested", () => {
          vt();
        }), y.value = await Ft("tauri://blur", () => {
          if (a.value && document.activeElement === e.value)
            return;
          const f = i?.getTranslationState();
          f?.isLoading || f?.isVisible || setTimeout(() => {
            if (!a.value || document.activeElement !== e.value) {
              const c = i?.getTranslationState();
              if (c?.isLoading || c?.isVisible)
                return;
              vt();
            }
          }, 100);
        });
      }
    }), ye(() => {
      i?.destroy(), i = null, document.removeEventListener("keydown", ut), y.value?.(), p.value?.(), y.value = void 0, p.value = void 0, n.value = null;
    }), (f, c) => (X(), Z(
      "div",
      ti,
      [
        I(" 遮罩层 "),
        d.value.selectionRect ? (X(), Z("div", ei, [
          P(
            "div",
            {
              class: "mask-top",
              style: xt(R.value)
            },
            null,
            4
            /* STYLE */
          ),
          P(
            "div",
            {
              class: "mask-bottom",
              style: xt(E.value)
            },
            null,
            4
            /* STYLE */
          ),
          P(
            "div",
            {
              class: "mask-left",
              style: xt(H.value)
            },
            null,
            4
            /* STYLE */
          ),
          P(
            "div",
            {
              class: "mask-right",
              style: xt(b.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (X(), Z("div", ni)),
        I(" 画布 "),
        P(
          "canvas",
          {
            ref_key: "canvasRef",
            ref: t,
            class: "drawing-canvas"
          },
          null,
          512
          /* NEED_PATCH */
        ),
        I(" 尺寸信息 "),
        d.value.selectionRect && s.value ? (X(), Z(
          "div",
          {
            key: 2,
            class: "size-info",
            style: xt(W.value)
          },
          [
            P(
              "span",
              ii,
              _t(L.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : I("v-if", !0),
        I(" 工具栏 "),
        d.value.selectionRect && !v.value ? (X(), ie(Qn, {
          key: 3,
          style: xt(D.value),
          class: "toolbar",
          "current-tool": d.value.currentTool,
          "current-color": d.value.currentStyle.color,
          "current-line-width": d.value.currentStyle.lineWidth,
          "current-text-size": d.value.textSize,
          "current-mosaic-size": d.value.mosaicSize,
          "can-undo": d.value.hasAnnotations,
          "can-delete": !!d.value.selectedAnnotation,
          "current-translate-engine": g.value,
          onToolSelect: A,
          onColorChange: B,
          onLineWidthChange: Y,
          onTextSizeChange: N,
          onMosaicSizeChange: it,
          onTranslateEngineChange: U,
          onUndo: M,
          onDelete: $,
          onSave: S,
          onConfirm: V,
          onCancel: lt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-text-size", "current-mosaic-size", "can-undo", "can-delete", "current-translate-engine"])) : I("v-if", !0),
        I(" 加载提示 - 仅在初始化时显示 "),
        h.value ? (X(), Z("div", si, [
          c[1] || (c[1] = P(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          P(
            "p",
            null,
            _t(f.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : I("v-if", !0),
        I(" 提示信息 "),
        !d.value.selectionRect && !h.value ? (X(), Z("div", oi, [
          P(
            "p",
            null,
            _t(f.$t("screenshotTool.dragToSelect")),
            1
            /* TEXT */
          ),
          P(
            "p",
            ai,
            _t(f.$t("screenshotTool.pressEscToClose")),
            1
            /* TEXT */
          )
        ])) : I("v-if", !0),
        I(" 文字输入框 "),
        a.value ? (X(), Z(
          "div",
          {
            key: 6,
            class: "text-input-container",
            style: xt(F.value)
          },
          [
            pe(P(
              "input",
              {
                ref_key: "textInputRef",
                ref: e,
                "onUpdate:modelValue": c[0] || (c[0] = (T) => r.value = T),
                type: "text",
                class: "text-input",
                style: xt({
                  color: d.value.currentStyle.color,
                  fontSize: d.value.textSize + "px",
                  borderColor: d.value.currentStyle.color
                }),
                onKeydown: [
                  Gt(wt, ["enter"]),
                  Gt(dt, ["escape"])
                ],
                onBlur: wt,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [ve, r.value]
            ])
          ],
          4
          /* STYLE */
        )) : I("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), mi = /* @__PURE__ */ oe(ri, [["__scopeId", "data-v-cba0f9c3"]]);
export {
  mi as default
};
