var fe = Object.defineProperty;
var xe = (o, t, e) => t in o ? fe(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var y = (o, t, e) => xe(o, typeof t != "symbol" ? t + "" : t, e);
import { c as M, d as ne, r as ht, a as ct, w as Zt, b as K, e as _, f as A, F as Tt, g as Rt, u as ft, n as xt, h as bt, i as Ft, o as j, j as ie, k as we, t as Lt, l as me, m as ye, p as pe, v as ve, q as Gt } from "./runtime-entry-B57bt23Q.js";
import { l as P, i as q, W as se, o as mt, d as zt, c as Dt, I as kt, u as ke, T as Se, a as be, P as Me, C as Ce, b as Te, _ as oe, e as Vt } from "./_plugin-vue_export-helper-DYunkD4Z.js";
function rt(o, t) {
  const e = t.x - o.x, n = t.y - o.y;
  return Math.sqrt(e * e + n * n);
}
function qt(o, t) {
  return o.x >= t.x && o.x <= t.x + t.width && o.y >= t.y && o.y <= t.y + t.height;
}
function Xt(o) {
  return {
    x: o.x + o.width / 2,
    y: o.y + o.height / 2
  };
}
function Re(o, t) {
  return {
    x: Math.max(t.x, Math.min(o.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(o.y, t.y + t.height))
  };
}
function pt(o) {
  return o != null && typeof o.x == "number" && typeof o.y == "number" && !isNaN(o.x) && !isNaN(o.y) && isFinite(o.x) && isFinite(o.y);
}
function At(o) {
  return o != null && typeof o.x == "number" && typeof o.y == "number" && typeof o.width == "number" && typeof o.height == "number" && !isNaN(o.x) && !isNaN(o.y) && !isNaN(o.width) && !isNaN(o.height) && isFinite(o.x) && isFinite(o.y) && isFinite(o.width) && isFinite(o.height) && o.width > 0 && o.height > 0;
}
class ze {
  constructor(t, e) {
    y(this, "canvas");
    y(this, "ctx");
    y(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = e;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t) {
    if (!At(t)) {
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
    ].forEach((c) => {
      this.ctx.beginPath(), this.ctx.arc(c.x, c.y, r, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke();
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
    const { mousePosition: n, colorInfo: i, showFormat: s, previewImage: a, zoomFactor: r, isCopied: l } = t, c = 150, u = 190, g = 20;
    let w = n.x + g, p = n.y + g;
    w + c > e.x + e.width && (w = n.x - c - g), p + u > e.y + e.height && (p = n.y - u - g), w < e.x && (w = e.x + g), p < e.y && (p = e.y + g), this.ctx.save(), this.ctx.fillStyle = "rgba(255, 255, 255, 0.9)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.1)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.2)", this.ctx.shadowBlur = 10, this.ctx.beginPath(), this.ctx.roundRect(w, p, c, u, 8), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent";
    const x = 100, v = w + (c - x) / 2, R = p + 15;
    this.ctx.strokeStyle = "#ccc", this.ctx.lineWidth = 1, this.ctx.strokeRect(v, R, x, x);
    const $ = a ? a.width : r, H = x / $;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      v,
      R,
      x,
      x
    ), this.ctx.imageSmoothingEnabled = !0);
    const b = Math.floor($ / 2), L = v + b * H, D = R + b * H;
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      L - 1,
      D - 1,
      H + 2,
      H + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.8)", this.ctx.lineWidth = 1, this.ctx.strokeRect(
      L,
      D,
      H,
      H
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let W = R + x + 25;
    if (i) {
      this.ctx.fillStyle = i.hex, this.ctx.fillRect(w + 15, W - 13, 16, 16), this.ctx.strokeStyle = "#ccc", this.ctx.strokeRect(w + 15, W - 13, 16, 16), this.ctx.fillStyle = "#333";
      const z = s === "hex" ? i.hex : `${i.rgb.r}, ${i.rgb.g}, ${i.rgb.b}`;
      this.ctx.fillText(z, w + 40, W), W += 20;
    }
    this.ctx.fillStyle = "#666", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(n.x)}, Y: ${Math.round(n.y)}`, w + 15, W), W += 20, this.ctx.font = "12px Arial";
    const Y = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#00A000" : "#888", this.ctx.fillText(Y, w + 15, W), this.ctx.restore();
  }
}
class Ae {
  // 物理尺寸
  constructor(t) {
    y(this, "scale");
    y(this, "canvasRect");
    y(this, "canvasSize");
    // 逻辑尺寸
    y(this, "physicalSize");
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
    return pt(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return pt(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, e) {
    return !pt(t) || !At(e) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, e) {
    return !pt(t) || !At(e) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + e.x,
      y: t.y + e.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return At(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!pt(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const e = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return Re(t, e);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!At(t))
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
    return rt(t, e);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, e, n = 0) {
    if (!pt(t) || !At(e))
      return !1;
    if (n === 0)
      return qt(t, e);
    const i = {
      x: e.x - n,
      y: e.y - n,
      width: e.width + n * 2,
      height: e.height + n * 2
    };
    return qt(t, i);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, e, n, i = 8) {
    if (!pt(t) || !pt(e) || !pt(n))
      return !1;
    const s = t.x - e.x, a = t.y - e.y, r = n.x - e.x, l = n.y - e.y, c = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return rt(t, e) <= i;
    const g = c / u;
    let w;
    return g < 0 ? w = e : g > 1 ? w = n : w = {
      x: e.x + g * r,
      y: e.y + g * l
    }, rt(t, w) <= i;
  }
}
var m = /* @__PURE__ */ ((o) => (o.None = "none", o.Drawing = "drawing", o.Moving = "moving", o.ResizingNW = "resizing-nw", o.ResizingNE = "resizing-ne", o.ResizingSW = "resizing-sw", o.ResizingSE = "resizing-se", o.ResizingN = "resizing-n", o.ResizingS = "resizing-s", o.ResizingW = "resizing-w", o.ResizingE = "resizing-e", o.DrawingRect = "drawing-rect", o.DrawingArrow = "drawing-arrow", o.DrawingPen = "drawing-pen", o.EditingAnnotation = "editing-annotation", o.MovingAnnotation = "moving-annotation", o.ResizingAnnotationNW = "resizing-annotation-nw", o.ResizingAnnotationSE = "resizing-annotation-se", o.DrawingText = "drawing-text", o.DrawingMosaic = "drawing-mosaic", o.ColorPicking = "color-picking", o.Pinning = "pinning", o))(m || {}), d = /* @__PURE__ */ ((o) => (o.Select = "select", o.Rectangle = "rectangle", o.Arrow = "arrow", o.Pen = "pen", o.Mosaic = "mosaic", o.Text = "text", o.ColorPicker = "color-picker", o.Ocr = "ocr", o.Pin = "pin", o.Translate = "translate", o))(d || {});
class Pe {
  constructor(t, e) {
    y(this, "coordinateSystem");
    y(this, "canvas");
    y(this, "isDrawing", !1);
    y(this, "currentOperation", m.None);
    y(this, "startPoint", { x: 0, y: 0 });
    y(this, "lastMousePos", { x: 0, y: 0 });
    y(this, "preventDefault", (t) => {
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
    if (e !== d.Select)
      return n ? this.coordinateSystem.isPointInRect(t, n) ? this.getDrawingOperationType(e) : m.None : m.Drawing;
    if (s) {
      if (s.getData().type === d.Mosaic)
        return m.None;
      const a = this.getAnnotationControlPointOperation(t, s);
      return a !== m.None ? a : m.MovingAnnotation;
    }
    return n ? this.getSelectionOperationType(t, n, i.length > 0) : m.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [d.Rectangle]: m.DrawingRect,
      [d.Arrow]: m.DrawingArrow,
      [d.Pen]: m.DrawingPen,
      [d.Text]: m.DrawingText,
      [d.Mosaic]: m.DrawingMosaic,
      [d.ColorPicker]: m.ColorPicking,
      [d.Ocr]: m.None,
      [d.Pin]: m.Pinning,
      [d.Translate]: m.None,
      [d.Select]: m.None
    }[t] || m.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, e, n) {
    const { x: i, y: s, width: a, height: r } = e, l = 12;
    if (n)
      return m.None;
    const c = Xt(e);
    return this.isInHandle(t, { x: i, y: s }, l) ? m.ResizingNW : this.isInHandle(t, { x: i + a, y: s }, l) ? m.ResizingNE : this.isInHandle(t, { x: i, y: s + r }, l) ? m.ResizingSW : this.isInHandle(t, { x: i + a, y: s + r }, l) ? m.ResizingSE : this.isInHandle(t, { x: c.x, y: s }, l) ? m.ResizingN : this.isInHandle(t, { x: c.x, y: s + r }, l) ? m.ResizingS : this.isInHandle(t, { x: i, y: c.y }, l) ? m.ResizingW : this.isInHandle(t, { x: i + a, y: c.y }, l) ? m.ResizingE : this.coordinateSystem.isPointInRect(t, e) ? m.Moving : m.Drawing;
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
    if (!pt(t))
      return m.None;
    const n = e.getData();
    if (n.type === d.Mosaic || n.type === d.Text)
      return m.None;
    if ((n.type === d.Rectangle || n.type === d.Arrow) && n.points.length >= 2) {
      const i = n.points[0], s = n.points[n.points.length - 1], a = 8, r = 6, l = rt(t, i), c = rt(t, s);
      if (l <= a + r)
        return m.ResizingAnnotationNW;
      if (c <= a + r)
        return m.ResizingAnnotationSE;
    }
    return m.None;
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
    this.isDrawing = !1, this.currentOperation = m.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class It {
  constructor(t) {
    y(this, "data");
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
class De extends It {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: d.Rectangle,
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
    }, l = (a.x - s.x) * n, c = (a.y - s.y) * n;
    e.save(), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth * n, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(r.x, r.y, l, c), e.restore();
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
      if (rt(t, i) <= e)
        return n;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class Le extends It {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: d.Arrow,
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
    const l = Math.atan2(s.y - i.y, s.x - i.x), c = 15 * e, u = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l - u),
      r.y - c * Math.sin(l - u)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l + u),
      r.y - c * Math.sin(l + u)
    ), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const n = this.data.points[0], i = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, n, i, e);
  }
  isPointNearLine(t, e, n, i) {
    const s = t.x - e.x, a = t.y - e.y, r = n.x - e.x, l = n.y - e.y, c = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return rt(t, e) <= i;
    const g = c / u;
    let w;
    return g < 0 ? w = e : g > 1 ? w = n : w = {
      x: e.x + g * r,
      y: e.y + g * l
    }, rt(t, w) <= i;
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
      if (rt(t, i) <= e)
        return n;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class We extends It {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: d.Pen,
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
      const e = this.data.points[this.data.points.length - 1], n = rt(t, e);
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
      const l = this.data.points[r], c = l.x * e - n.x, u = l.y * e - n.y;
      t.lineTo(c, u);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? rt(t, this.data.points[0]) <= e : !1;
    for (let n = 0; n < this.data.points.length - 1; n++) {
      const i = this.data.points[n], s = this.data.points[n + 1];
      if (this.isPointNearLine(t, i, s, e))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, e, n, i) {
    const s = t.x - e.x, a = t.y - e.y, r = n.x - e.x, l = n.y - e.y, c = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return rt(t, e) <= i;
    const g = c / u;
    let w;
    return g < 0 ? w = e : g > 1 ? w = n : w = {
      x: e.x + g * r,
      y: e.y + g * l
    }, rt(t, w) <= i;
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
class Ie extends It {
  constructor(t, e, n, i = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: d.Text,
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
    const l = a.measureText(this.data.text).width, c = n.x + 4, u = n.y - 8;
    return t.x >= c - e && t.x <= c + l + e && t.y >= u - e && t.y <= u + i + e;
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
    const u = e.measureText(this.data.text).width;
    e.setLineDash([2, 2]), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.strokeRect(r, l, u, a), e.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: n, offset: i } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * n, r = (s.x + 4) * n - i.x, l = (s.y - 8) * n - i.y;
    e.save(), e.font = `${a}px sans-serif`;
    const u = e.measureText(this.data.text).width;
    e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(r, l, u, a), e.restore();
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
const vt = class vt extends It {
  constructor(t, e, n = 5) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: d.Mosaic,
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
      const e = this.data.points[this.data.points.length - 1], n = rt(t, e);
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
    vt.helperCanvas || (vt.helperCanvas = document.createElement("canvas"), vt.helperCtx = vt.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const s = vt.helperCanvas, a = vt.helperCtx, r = e || 1, l = this.data.mosaicSize || 5, c = Math.max(Math.round(l * r), 2), u = l * 3, g = this.getBounds();
    if (!g) return;
    const w = u, p = Math.floor(g.x - w), x = Math.floor(g.y - w), v = Math.ceil(g.width + w * 2), R = Math.ceil(g.height + w * 2);
    if (v <= 0 || R <= 0) return;
    const $ = Math.floor(p * r - n.x), H = Math.floor(x * r - n.y), b = Math.ceil(v * r), L = Math.ceil(R * r), D = t.canvas.width, W = t.canvas.height, Y = Math.max(0, $), z = Math.max(0, H), N = Math.min(b, D - Y), E = Math.min(L, W - z);
    if (N <= 0 || E <= 0) return;
    let O;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), O = t.getImageData(Y, z, N, E), t.restore();
    } catch {
      return;
    }
    const U = O.data, V = Y % c, ot = z % c;
    for (let X = -ot; X < E; X += c)
      for (let T = -V; T < N; T += c) {
        const B = Math.max(0, T), tt = Math.max(0, X), nt = Math.min(N, T + c), S = Math.min(E, X + c);
        if (B >= nt || tt >= S) continue;
        let J = 0, C = 0, dt = 0, at = 0;
        for (let wt = tt; wt < S; wt++)
          for (let st = B; st < nt; st++) {
            const ut = (wt * N + st) * 4;
            J += U[ut], C += U[ut + 1], dt += U[ut + 2], at++;
          }
        if (at > 0) {
          J = Math.round(J / at), C = Math.round(C / at), dt = Math.round(dt / at);
          for (let wt = tt; wt < S; wt++)
            for (let st = B; st < nt; st++) {
              const ut = (wt * N + st) * 4;
              U[ut] = J, U[ut + 1] = C, U[ut + 2] = dt;
            }
        }
      }
    s.width = N, s.height = E, a.putImageData(O, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, n, Y, z), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), i && (t.beginPath(), t.rect(
      i.x * r - n.x,
      i.y * r - n.y,
      i.width * r,
      i.height * r
    ), t.clip()), t.drawImage(s, Y, z), t.restore();
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
      for (let u = 1; u < this.data.points.length - 1; u++) {
        const g = this.data.points[u], w = this.data.points[u + 1], p = (a(g) + a(w)) / 2, x = (r(g) + r(w)) / 2;
        t.quadraticCurveTo(a(g), r(g), p, x);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, e = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return rt(t, this.data.points[0]) <= (this.data.mosaicSize || 5) / 2 + e;
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
    const s = t.x - e.x, a = t.y - e.y, r = n.x - e.x, l = n.y - e.y, c = s * r + a * l, u = r * r + l * l;
    let g = -1;
    u !== 0 && (g = c / u);
    let w, p;
    g < 0 ? (w = e.x, p = e.y) : g > 1 ? (w = n.x, p = n.y) : (w = e.x + g * r, p = e.y + g * l);
    const x = t.x - w, v = t.y - p;
    return x * x + v * v <= i * i;
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
y(vt, "helperCanvas", null), y(vt, "helperCtx", null);
let Yt = vt;
class Et {
  static createAnnotation(t, e, n, i = {}) {
    switch (t) {
      case d.Rectangle:
        return new De(e, n);
      case d.Arrow:
        return new Le(e, n);
      case d.Pen:
        return new We(e, n);
      case d.Text:
        return new Ie(
          e,
          i.text || "",
          n,
          i.fontSize || 16
        );
      case d.Mosaic:
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
      [d.Rectangle]: "drawing-rect",
      [d.Arrow]: "drawing-arrow",
      [d.Pen]: "drawing-pen",
      [d.Text]: "drawing-text",
      [d.Mosaic]: "drawing-mosaic",
      [d.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== d.Select && t !== d.ColorPicker && t !== d.Ocr && t !== d.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== d.Select && t !== d.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      d.Rectangle,
      d.Arrow,
      d.Pen,
      d.Text
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      d.Rectangle,
      d.Arrow,
      d.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === d.Text;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === d.Mosaic;
  }
}
const Ct = class Ct {
  constructor() {
    y(this, "pool", []);
    y(this, "maxPoolSize", 5);
    // 最大池大小
    y(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return Ct.instance || (Ct.instance = new Ct()), Ct.instance;
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
y(Ct, "instance");
let Ut = Ct;
class Mt {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = import("./ocr-wFb3CFmf.js").then((n) => (this.loadedModules.set(t, n), this.loadingPromises.delete(t), n));
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
    const e = import("./offlineTranslator-tlwTz-jd.js").then((n) => (this.loadedModules.set(t, n), this.loadingPromises.delete(t), n));
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
y(Mt, "loadedModules", /* @__PURE__ */ new Map()), y(Mt, "loadingPromises", /* @__PURE__ */ new Map());
const _e = /[.!?。！？；;：:][)"'”’】）\]]*$/, Kt = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, Ot = /[A-Za-z0-9]/, He = /^\s*(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/;
function Be(o) {
  const t = rn(o), e = Ee(o, t);
  if (e.length === 0)
    return [];
  const n = ae(e, t), i = [];
  for (const s of n) {
    const a = i[i.length - 1], r = a ? Ye(a, s, t) : !1;
    if (!a || !r) {
      i.push(Ue(s));
      continue;
    }
    a.text = je(a.text, s.text), a.blocks = [...a.blocks, ...s.blocks], a.bbox = he(a.bbox, s.bbox), a.fontSize = Qt(
      a.fontSize || s.fontSize,
      a.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), a.lineHeight = Qt(
      a.lineHeight || s.lineHeight,
      a.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), a.isCodeBlock = !!(a.isCodeBlock || s.isCodeLike || s.hasTableColumns), a.isStructuredBlock = !!(a.isStructuredBlock || s.hasTableColumns);
  }
  return i;
}
function Ee(o, t) {
  return o.map((e) => {
    const n = e.text.trim();
    if (!n || Oe(e, t) || Ne(n))
      return null;
    const i = Ve($e(n, e, t));
    return i === e.text ? e : { ...e, text: i };
  }).filter((e) => !!e);
}
function Oe(o, t) {
  const e = o.text.trim();
  if (!/^[cC]$/.test(e))
    return !1;
  const n = t * 1.25;
  return o.width <= n && o.height <= n;
}
function $e(o, t, e) {
  return /^xC$/i.test(o) && t.width <= e * 2.4 ? "X" : o;
}
function Ne(o) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(o.trim());
}
function Ve(o) {
  return o.replace(/^:\s+(?=[A-Z])/, "- ");
}
function ae(o, t) {
  const e = [...o].sort((s, a) => {
    const r = s.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : s.x - a.x;
  }), n = [], i = t * 0.45;
  for (const s of e) {
    const a = n[n.length - 1];
    a && Math.abs(s.y - a.y) < i && !tn(a.blocks, s, t) ? (a.blocks.push(s), a.y = Pt(a.blocks.map((r) => r.y))) : n.push({ y: s.y, blocks: [s] });
  }
  return n.map((s) => Fe(s.blocks, t));
}
function Fe(o, t) {
  const e = [...o].sort((r, l) => r.x - l.x), n = an(e), i = e.reduce((r, l, c) => {
    const u = l.text.trim();
    return c === 0 ? u : Xe(r, u);
  }, ""), s = Pt(e.map((r) => Wt(r.fontSize, t))), a = Pt(e.map((r) => de(r)));
  return {
    text: i,
    blocks: e,
    bbox: n,
    fontSize: s,
    lineHeight: a,
    centerY: n.y + n.height / 2,
    hasTableColumns: en(e, t),
    isCodeLike: Qe(i)
  };
}
function Ye(o, t, e) {
  const n = ae(o.blocks, e), i = n[n.length - 1];
  if (!i || jt(i.text) || le(t.text) || t.isCodeLike || i.isCodeLike || t.hasTableColumns || i.hasTableColumns) return !1;
  const s = t.bbox.y - (i.bbox.y + i.bbox.height);
  if (s < -e * 0.25 || s >= e * 1.8 || Ze(n, s, e) || Ge(i, t, s, e) || qe(i, t, s, e) || Ke(i, t, s, e) || Je(i, t, s, e))
    return !1;
  const a = Math.max(e * 1.2, i.lineHeight * 0.9);
  return Math.abs(t.bbox.x - i.bbox.x) <= a;
}
function Ue(o) {
  return {
    text: o.text,
    blocks: [...o.blocks],
    bbox: { ...o.bbox },
    isCodeBlock: o.isCodeLike || o.hasTableColumns,
    isStructuredBlock: o.hasTableColumns,
    fontSize: o.fontSize,
    lineHeight: o.lineHeight,
    angle: Pt(o.blocks.map((t) => t.angle || 0))
  };
}
function Xe(o, t) {
  return re(o, t);
}
function je(o, t) {
  return re(o, t);
}
function re(o, t) {
  const e = o.trimEnd(), n = t.trimStart();
  if (!e) return n;
  if (!n) return e;
  const i = e.charAt(e.length - 1), s = n.charAt(0), a = e.charAt(e.length - 2);
  return i === "-" && Ot.test(a) && Ot.test(s) ? `${e.slice(0, -1)}${n}` : ln(s) || cn(i) ? `${e}${n}` : Kt.test(i) || Kt.test(s) || te(i) || te(s) ? `${e}${n}` : Ot.test(i) && Ot.test(s) ? `${e} ${n}` : `${e} ${n}`.replace(/\s+/g, " ");
}
function jt(o) {
  return _e.test(o.trim());
}
function le(o) {
  return He.test(o);
}
function Ze(o, t, e) {
  if (o.length < 2 || t <= 0)
    return !1;
  const n = [];
  for (let a = 1; a < o.length; a++) {
    const r = o[a - 1], c = o[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && n.push(c);
  }
  const i = n.length > 0 ? Pt(n) : 0, s = Math.max(i * 2.2, e * 1.15);
  return t > s;
}
function Ge(o, t, e, n) {
  const i = o.text.trim();
  if (!i || jt(i) || le(i) || o.isCodeLike || i.endsWith("-"))
    return !1;
  const s = i.split(/\s+/).filter(Boolean).length, a = o.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(i) && s <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(i) && i.length <= 12 && a, c = r || l;
  return o.fontSize >= t.fontSize * 1.18 && c ? !0 : e > n * 0.7 && c;
}
function qe(o, t, e, n) {
  if (e <= 0)
    return !1;
  const i = Math.max(o.fontSize, t.fontSize), s = Math.max(Math.min(o.fontSize, t.fontSize), 1), a = i / s, r = e / Math.max(s, n * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = o.fontSize >= n * 1.08 && o.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= o.fontSize * 0.78 && e >= Math.max(t.lineHeight * 0.75, n * 0.55);
  return l && c;
}
function Ke(o, t, e, n) {
  if (e < n * 0.45)
    return !1;
  const s = o.text.split(/\s+/).filter(Boolean).length <= 3 && o.bbox.width < t.bbox.width * 0.35, a = Math.abs(o.bbox.x - t.bbox.x) <= n * 0.6;
  return s && a;
}
function Je(o, t, e, n) {
  return e < n * 0.25 || !(Math.abs(o.bbox.x - t.bbox.x) <= n * 0.35) ? !1 : Jt(o.text) && Jt(t.text);
}
function Jt(o) {
  const t = o.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !jt(t);
}
function Qe(o) {
  const t = o.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function tn(o, t, e) {
  const n = [...o].sort((a, r) => a.x - r.x), i = n[n.length - 1], s = t.x - (i.x + i.width);
  return s > e * 0.9 && on(i.text) && ce(t.text) ? !1 : s > e * 3.2;
}
function en(o, t) {
  if (o.length < 2)
    return o.some((i) => nn(i.text));
  const e = [...o].sort((i, s) => i.x - s.x);
  let n = 0;
  for (let i = 1; i < e.length; i++) {
    const s = e[i - 1], a = e[i], r = e[i].x - (s.x + s.width);
    (r > t * 1.8 || r > t * 0.9 && sn(s.text) && ce(a.text)) && (n += 1);
  }
  return n >= 1;
}
function nn(o) {
  const t = o.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function sn(o) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(o.trim());
}
function on(o) {
  const t = o.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function ce(o) {
  const t = o.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function an(o) {
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
function rn(o) {
  return Wt(Pt(o.map((t) => de(t))), 16);
}
function de(o) {
  return Wt(o.lineHeight, Wt(o.height, Wt(o.fontSize, 16) * 1.2));
}
function Qt(o, t, e, n) {
  const i = t + n;
  return i <= 0 ? e : (o * t + e * n) / i;
}
function Wt(o, t) {
  return Number.isFinite(o) && o > 0 ? o : t;
}
function Pt(o) {
  return o.length === 0 ? 0 : o.reduce((t, e) => t + e, 0) / o.length;
}
function ln(o) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(o);
}
function cn(o) {
  return /^[(\[{<"'“‘]$/.test(o);
}
function te(o) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(o);
}
class hn {
  constructor(t, e, n, i) {
    y(this, "canvas");
    y(this, "coordinateSystem");
    y(this, "drawingEngine");
    y(this, "eventHandler");
    // 状态管理
    y(this, "selectionRect", null);
    y(this, "annotations", []);
    y(this, "currentAnnotation", null);
    y(this, "selectedAnnotation", null);
    y(this, "hoveredAnnotation", null);
    // 拖拽状态
    y(this, "draggedAnnotation", null);
    y(this, "dragStartPoint", null);
    y(this, "resizingAnnotation", null);
    y(this, "resizeStartBounds", null);
    y(this, "resizeOperation", null);
    // 编辑状态
    y(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    y(this, "annotationUndoStack", []);
    y(this, "annotationRedoStack", []);
    y(this, "pendingDragSnapshot", null);
    y(this, "pendingResizeSnapshot", null);
    // 工具设置
    y(this, "currentTool", d.Select);
    y(this, "currentStyle", { color: "#ff4444", lineWidth: 3 });
    y(this, "textSize", 16);
    y(this, "mosaicSize", 5);
    y(this, "showGuides", !0);
    // 取色器状态
    y(this, "colorPickerState", {
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
    y(this, "allWindows", []);
    y(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    y(this, "snappedWindow", null);
    y(this, "showSnapPreview", !1);
    // 点击拖拽区分
    y(this, "pendingSnapWindow", null);
    y(this, "dragStartPosition", null);
    y(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    y(this, "throttleTimer", null);
    y(this, "lastThrottledTimestamp", 0);
    y(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    y(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    y(this, "backgroundImage", null);
    // 是否正在加载完整背景图
    y(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    y(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    y(this, "offlineModelActivated", !1);
    // Canvas 池
    y(this, "canvasPool", Ut.getInstance());
    // 回调函数
    y(this, "onStateChange");
    y(this, "onTextInputRequest");
    y(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    y(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    y(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    y(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    y(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    y(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    y(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    y(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = e, this.onTextInputRequest = n, this.onColorPicked = i, this.coordinateSystem = new Ae(t), this.drawingEngine = new ze(t, this.coordinateSystem), this.eventHandler = new Pe(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), Mt.preloadModules();
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
    if (this.annotations = t.annotations.map((e) => Et.fromData(this.cloneAnnotationData(e))).filter((e) => e !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
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
        P.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
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
        const i = await q("get_screenshot_preview");
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
        const i = await q("get_screenshot_background");
        if (i) {
          const s = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              s.onload = null, s.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            s.onload = () => {
              clearTimeout(l), this.backgroundImage = s, this.draw(), a();
            }, s.onerror = (c) => {
              clearTimeout(l), r(c);
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
      P.error("[截图] 创建后备背景失败", t);
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
          const [c, u] = await Promise.all([
            q("get_cached_monitor_info"),
            q("get_cached_window_list")
          ]);
          t = {
            x: c.x,
            y: c.y,
            scale: c.scale,
            isFullscreen: !1
          }, e = u;
          break;
        } catch {
          if (l < n - 1) {
            await new Promise((g) => setTimeout(g, i));
            continue;
          }
          const u = await Promise.all([
            q("get_window_info"),
            q("get_all_windows")
          ]);
          t = u[0], e = u[1];
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
      P.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
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
        const r = await q("get_cached_monitor_info");
        i = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        i = await q("get_window_info");
      }
      let s;
      try {
        const r = await q("get_mouse_position"), l = i?.scale || 1;
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
      P.error("[截图] 初始窗口吸附检测失败", t);
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
      const s = Math.abs(t.x - n.x), a = Math.abs(t.x - (n.x + n.width)), r = Math.abs(t.y - n.y), l = Math.abs(t.y - (n.y + n.height)), c = Math.min(s, a, r, l);
      c <= this.snapThreshold && e.push({ window: n, distance: c });
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
    if (n !== m.None)
      switch (this.eventHandler.setCurrentOperation(n), this.eventHandler.startDrawing(e), n) {
        case m.Drawing:
          !this.selectionRect && this.currentTool === d.Select && (this.dragStartPosition = { ...e }, this.snappedWindow ? this.pendingSnapWindow = this.snappedWindow : (this.selectionRect = {
            x: e.x,
            y: e.y,
            width: 0,
            height: 0
          }, this.onStateChange?.()));
          break;
        case m.DrawingRect:
        case m.DrawingArrow:
        case m.DrawingPen:
        case m.DrawingMosaic:
          this.startAnnotation(e);
          break;
        case m.DrawingText:
          this.startTextInput(e), this.eventHandler.stopDrawing();
          break;
        case m.ColorPicking:
          this.handleColorPicking(e), this.eventHandler.stopDrawing();
          break;
        case m.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case m.EditingAnnotation:
          this.selectAnnotationAtPoint(e), this.selectedAnnotation && this.selectedAnnotation.getData().type === d.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case m.MovingAnnotation:
          this.startAnnotationDrag(e);
          break;
        case m.ResizingAnnotationNW:
        case m.ResizingAnnotationSE:
          this.startAnnotationResize(e, n);
          break;
        case m.Moving:
        case m.ResizingNW:
        case m.ResizingNE:
        case m.ResizingSW:
        case m.ResizingSE:
        case m.ResizingN:
        case m.ResizingS:
        case m.ResizingW:
        case m.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const e = this.coordinateSystem.getCanvasPosition(t), n = this.eventHandler.getDrawingState();
    if (n.isDrawing)
      this.eventHandler.updateMousePosition(e), this.pendingSnapWindow && this.dragStartPosition && !this.selectionRect && rt(e, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapWindow = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(e) : this.draggedAnnotation ? this.updateAnnotationDrag(e) : this.resizingAnnotation ? this.updateAnnotationResize(e) : this.selectionRect && this.currentTool === d.Select && this.updateSelectionRect(e, n), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === d.Select && !this.selectionRect) {
        const i = this.detectNearbyWindow(e);
        i !== this.snappedWindow && (this.snappedWindow = i, this.showSnapPreview = !!i, this.draw());
      }
      this.updateHoverState(e), this.currentTool === d.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(e, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = e, this.draw(), this.throttledUpdateColorPreview(e)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
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
    n?.getData().type === d.Text && (this.clearSelection(), n.updateData({ selected: !0 }), this.selectedAnnotation = n, this.startTextInput(e, n));
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
      case m.Drawing:
        this.selectionRect.width = t.x - e.startPoint.x, this.selectionRect.height = t.y - e.startPoint.y;
        break;
      case m.Moving:
        this.selectionRect.x += i, this.selectionRect.y += s;
        break;
      case m.ResizingNW:
        this.selectionRect.x += i, this.selectionRect.y += s, this.selectionRect.width -= i, this.selectionRect.height -= s;
        break;
      case m.ResizingNE:
        this.selectionRect.y += s, this.selectionRect.width += i, this.selectionRect.height -= s;
        break;
      case m.ResizingSW:
        this.selectionRect.x += i, this.selectionRect.width -= i, this.selectionRect.height += s;
        break;
      case m.ResizingSE:
        this.selectionRect.width += i, this.selectionRect.height += s;
        break;
      case m.ResizingN:
        this.selectionRect.y += s, this.selectionRect.height -= s;
        break;
      case m.ResizingS:
        this.selectionRect.height += s;
        break;
      case m.ResizingW:
        this.selectionRect.x += i, this.selectionRect.width -= i;
        break;
      case m.ResizingE:
        this.selectionRect.width += i;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && e !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === d.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
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
      case m.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, e.points[1]]
        });
        break;
      case m.ResizingAnnotationSE:
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
    if (this.currentTool !== d.Select) {
      this.updateToolCursor();
      return;
    }
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = e && e.getData().type !== d.Mosaic ? e : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== d.Select) {
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
      [m.Moving]: "move",
      [m.ResizingNW]: "nw-resize",
      [m.ResizingNE]: "ne-resize",
      [m.ResizingSW]: "sw-resize",
      [m.ResizingSE]: "se-resize",
      [m.ResizingN]: "n-resize",
      [m.ResizingS]: "s-resize",
      [m.ResizingW]: "w-resize",
      [m.ResizingE]: "e-resize",
      [m.EditingAnnotation]: "pointer",
      [m.MovingAnnotation]: "move",
      [m.ResizingAnnotationNW]: "nw-resize",
      [m.ResizingAnnotationSE]: "se-resize",
      [m.Drawing]: "crosshair"
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
      case d.Pen:
        this.updateCursor(this.createCircleCursor(this.currentStyle.lineWidth, this.currentStyle.color));
        break;
      case d.Mosaic:
        this.updateCursor(this.createCircleCursor(this.mosaicSize * 3, "#666"));
        break;
      case d.ColorPicker:
        this.updateCursor("crosshair");
        break;
      case d.Rectangle:
      case d.Arrow:
      case d.Text:
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
    const r = { x: e, y: n, width: i, height: s }, l = this.sampleRegionColor(r), c = l.brightness < 128;
    let u, g;
    if (c) {
      const v = Math.max(0, Math.round(l.r * 0.1)), R = Math.max(0, Math.round(l.g * 0.1)), $ = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${v}, ${R}, ${$}, 0.95)`, g = "rgba(255, 255, 255, 0.9)";
    } else {
      const v = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), R = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), $ = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${v}, ${R}, ${$}, 0.95)`, g = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(e, n, i, s), t.fillStyle = g, t.textAlign = "left", t.textBaseline = "top";
    const w = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((v) => ({
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
    })), p = w.filter((v) => v.isStructuredBlock), x = w.filter((v) => !v.isStructuredBlock);
    x.length > 0 && this.drawFlowedTranslationBlocks(t, x, e, n, a, i, s);
    for (const v of p)
      this.drawStructuredTranslationBlock(t, v, e, n, a, i, s);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, e, n, i, s, a, r) {
    const l = [...e].filter((b) => (b.translatedText || b.text).trim()).sort((b, L) => {
      const D = b.bbox.y - L.bbox.y;
      return Math.abs(D) > 4 ? D : b.bbox.x - L.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - s * 2), u = s, g = (b, L, D) => l.map((W) => {
      const Y = (W.translatedText || W.text).trim(), z = Math.max(12, Math.min(W.fontSize || 16, 48)), N = Math.max(8, Math.round(z * b)), E = W.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', O = Math.max(
        s,
        Math.min(W.bbox.x + s, a * 0.38)
      ), U = L ? s : O, V = Math.max(48, a - U - u), ot = W.lineHeight || N * 1.35, X = Math.max(
        N * (D ? 1.04 : 1.14),
        Math.min(ot * b, N * (D ? 1.18 : 1.42))
      );
      return t.font = `${N}px ${E}`, {
        text: Y,
        fontSize: N,
        fontFamily: E,
        lineHeight: X,
        paragraphGap: D ? Math.max(1, X * 0.16) : Math.max(3, X * 0.35),
        x: n + U,
        lines: this.wrapTextToLines(t, Y, V)
      };
    }), w = (b) => b.reduce((L, D, W) => {
      const Y = W === b.length - 1 ? 0 : D.paragraphGap;
      return L + D.lines.length * D.lineHeight + Y;
    }, 0);
    let p = g(1, !1, !1), x = w(p);
    if (x > c) {
      const b = Math.max(0.56, c / x);
      p = g(b, !1, !1), x = w(p);
    }
    if (x > c && (p = g(1, !0, !1), x = w(p)), x > c) {
      const b = Math.max(0.38, c / x * 0.96);
      p = g(b, !0, !0), x = w(p);
    }
    if (x > c) {
      const b = Math.max(0.3, c / x * 0.94);
      p = g(b, !0, !0), x = w(p);
    }
    const v = Math.min(...l.map((b) => b.bbox.y)), R = i + Math.max(s, Math.min(v, r - s)), $ = i + r - s;
    let H = R + x > $ ? i + s : R;
    for (const b of p) {
      t.font = `${b.fontSize}px ${b.fontFamily}`;
      for (const L of b.lines)
        t.fillText(L, b.x, H), H += b.lineHeight;
      H += b.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, e, n, i, s, a, r) {
    const l = [...e.blocks].sort((g, w) => g.x - w.x), c = Math.max(12, Math.min(e.fontSize || 14, 32)), u = e.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const g of l) {
      const w = g.translatedText || g.text;
      if (!w.trim()) continue;
      const p = n + g.x + Math.min(4, s), x = i + g.y, v = l.find((b) => b.x > g.x), R = v ? Math.max(g.width, v.x - g.x - 8) : Math.max(g.width, a - g.x - s), $ = this.wrapTextToLines(t, w.trim(), R);
      let H = x;
      for (const b of $) {
        if (H + c > i + r) break;
        t.fillText(b, p, H), H += u;
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
    const s = [], a = /\s/.test(i) ? i.split(/(\s+)/).filter((c) => c.length > 0) : Array.from(i);
    let r = "";
    const l = (c) => {
      let u = "";
      for (const g of Array.from(c)) {
        const w = u + g;
        t.measureText(w).width > n && u !== "" ? (s.push(u), u = g) : u = w;
      }
      r = u;
    };
    for (const c of a) {
      const u = /^\s+$/.test(c), g = u ? " " : c, w = r + g;
      if (t.measureText(w).width <= n) {
        r = w;
        continue;
      }
      r.trim() && (s.push(r.trimEnd()), r = ""), !u && (t.measureText(g).width > n ? l(g) : r = g);
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
    const c = this.backgroundImage.width, u = this.backgroundImage.height, g = this.canvas.width / i, w = this.canvas.height / i, p = c / g, x = u / w, v = t.x * p, R = t.y * x, $ = t.width * p, H = t.height * x;
    try {
      l.drawImage(
        this.backgroundImage,
        v,
        R,
        $,
        H,
        0,
        0,
        s,
        a
      );
    } catch (T) {
      return P.error("[截图] 采样区域绘制失败", T), this.canvasPool.release(r), n;
    }
    let b;
    try {
      b = l.getImageData(0, 0, s, a);
    } catch (T) {
      return P.error("[截图] 获取像素数据失败", T), this.canvasPool.release(r), n;
    }
    const L = b.data, D = Math.ceil(Math.sqrt(e)), W = s / (D + 1), Y = a / (D + 1);
    let z = 0, N = 0, E = 0, O = 0;
    for (let T = 1; T <= D; T++)
      for (let B = 1; B <= D && !(O >= e); B++) {
        const tt = Math.floor(B * W), nt = Math.floor(T * Y);
        if (tt >= 0 && tt < s && nt >= 0 && nt < a) {
          const S = (nt * s + tt) * 4;
          S >= 0 && S + 2 < L.length && (z += L[S], N += L[S + 1], E += L[S + 2], O++);
        }
      }
    if (this.canvasPool.release(r), O === 0)
      return n;
    const U = Math.round(z / O), V = Math.round(N / O), ot = Math.round(E / O), X = this.getBrightness(U, V, ot);
    return {
      r: U,
      g: V,
      b: ot,
      brightness: X
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
      const c = Math.max(0, Math.round(t.r * 0.2)), u = Math.max(0, Math.round(t.g * 0.2)), g = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${c}, ${u}, ${g}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const c = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), u = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), g = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${c}, ${u}, ${g}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
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
    const c = this.backgroundImage.width, u = this.backgroundImage.height, g = this.canvas.width / i, w = this.canvas.height / i, p = c / g, x = u / w, v = t.x * p, R = t.y * x, $ = t.width * p, H = t.height * x;
    try {
      l.drawImage(
        this.backgroundImage,
        v,
        R,
        $,
        H,
        0,
        0,
        s,
        a
      );
    } catch (T) {
      return P.error("[截图] isUniformColor: 采样区域绘制失败", T), this.canvasPool.release(r), !1;
    }
    let b;
    try {
      b = l.getImageData(0, 0, s, a);
    } catch (T) {
      return P.error("[截图] isUniformColor: 获取像素数据失败", T), this.canvasPool.release(r), !1;
    }
    const L = b.data, D = Math.ceil(Math.sqrt(n)), W = s / (D + 1), Y = a / (D + 1), z = [];
    for (let T = 1; T <= D; T++)
      for (let B = 1; B <= D && !(z.length >= n); B++) {
        const tt = Math.floor(B * W), nt = Math.floor(T * Y);
        if (tt >= 0 && tt < s && nt >= 0 && nt < a) {
          const S = (nt * s + tt) * 4;
          S >= 0 && S + 2 < L.length && z.push({
            r: L[S],
            g: L[S + 1],
            b: L[S + 2]
          });
        }
      }
    if (this.canvasPool.release(r), z.length < 2)
      return !1;
    const N = z.reduce((T, B) => T + B.r, 0) / z.length, E = z.reduce((T, B) => T + B.g, 0) / z.length, O = z.reduce((T, B) => T + B.b, 0) / z.length, U = z.reduce((T, B) => T + Math.pow(B.r - N, 2), 0) / z.length, V = z.reduce((T, B) => T + Math.pow(B.g - E, 2), 0) / z.length, ot = z.reduce((T, B) => T + Math.pow(B.b - O, 2), 0) / z.length;
    return (U + V + ot) / 3 < e;
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
    const c = i.font;
    for (; l > 12 && (i.font = `${l}px sans-serif`, !(i.measureText(t).width <= r)); )
      l -= 1;
    return i.font = c, Math.max(l, 12);
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
    this.currentTool = t, this.clearSelection(), this.showGuides = t === d.Select, this.colorPickerState.isActive = t === d.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== d.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== d.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.showSnapPreview = !1, this.pendingSnapWindow = null, this.dragStartPosition = null, t !== d.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === d.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (Et.isDrawingTool(this.currentTool)) {
      if (this.currentTool === d.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = Et.createAnnotation(
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
      case d.Rectangle:
      case d.Arrow:
        e.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case d.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case d.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  // 完成标注创建
  finishAnnotation() {
    if (this.currentAnnotation) {
      const t = this.currentAnnotation.getData();
      t.type === d.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const e = this.currentAnnotation.getData().points;
    if (e.length < 3) return;
    let n = e[0].x, i = e[0].x, s = e[0].y, a = e[0].y;
    e.forEach((p) => {
      n = Math.min(n, p.x), i = Math.max(i, p.x), s = Math.min(s, p.y), a = Math.max(a, p.y);
    });
    const r = i - n, l = a - s;
    let c = 0;
    for (let p = 1; p < e.length; p++)
      c += rt(e[p - 1], e[p]);
    const g = rt(e[0], e[e.length - 1]) / c, w = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (g > 0.85 || w > 5) {
      const p = e[0], x = e[e.length - 1];
      this.currentAnnotation.updateData({ points: [p, x] });
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
    const n = Et.createAnnotation(
      d.Text,
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
      const { x: e, y: n, width: i, height: s } = this.selectionRect, r = (await q("get_window_info"))?.scale || 1, l = await this.cropFromBackground(e, n, i, s);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const c = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await q("copy_to_clipboard", { image: c }) : await q("save_screenshot_to_file", { image: c });
    } catch (e) {
      const n = t === "save" ? "保存" : "复制";
      throw P.error(`[截图] ${n}截图失败`, e), new Error(`${n}截图失败: ${e?.message || e?.toString() || "未知错误"}`);
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
          let J = 0;
          for (; !this.backgroundImage && J < 3e3; )
            await new Promise((C) => setTimeout(C, 100)), J += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, u = Math.max(0, s.padding || 0), g = this.canvas.width / c, w = this.canvas.height / c, p = t - u, x = e - u, v = n + u * 2, R = i + u * 2, $ = Math.max(1, Math.round(v * c)), H = Math.max(1, Math.round(R * c)), b = Math.max(0, p), L = Math.max(0, x), D = Math.min(g, p + v), W = Math.min(w, x + R), Y = Math.max(0, D - b), z = Math.max(0, W - L), N = Math.round(b * c), E = Math.round(L * c), O = Math.min(
          this.canvas.width - N,
          Math.round(Y * c)
        ), U = Math.min(
          this.canvas.height - E,
          Math.round(z * c)
        ), V = Math.round((b - p) * c), ot = Math.round((L - x) * c), X = document.createElement("canvas");
        X.width = $, X.height = H;
        const T = X.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!T)
          throw new Error("无法获取2D绘图上下文");
        T.imageSmoothingEnabled = !1, s.fillColor && (T.fillStyle = s.fillColor, T.fillRect(0, 0, $, H)), O > 0 && U > 0 && T.drawImage(
          this.backgroundImage,
          N,
          E,
          O,
          U,
          V,
          ot,
          O,
          U
        );
        const tt = X.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: tt,
          adjusted_width: $,
          adjusted_height: H,
          logical_x: p,
          logical_y: x,
          logical_width: v,
          logical_height: R
        });
      } catch (c) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${c.message || c}`));
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
      const c = new Image();
      c.onload = () => {
        try {
          if (l.drawImage(c, 0, 0), this.annotations.length > 0 && this.selectionRect) {
            const g = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e, w = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, p = this.drawingEngine.createScreenshotContext(
              l,
              g,
              w
            );
            this.annotations.forEach((x, v) => {
              try {
                x.drawToScreenshot(p);
              } catch (R) {
                P.error(`[截图] 绘制标注 ${v} 失败`, R);
              }
            });
          }
          let u;
          u = r.toDataURL("image/png"), clearTimeout(a), i(u);
        } catch (u) {
          P.error("[截图] 绘制过程出错", u);
          try {
            const g = r.toDataURL("image/png");
            clearTimeout(a), i(g);
          } catch {
            clearTimeout(a), s(new Error(`渲染失败: ${u.message || u}`));
          }
        }
      }, c.onerror = (u) => {
        P.error("[截图] 图像加载失败", u), clearTimeout(a), s(new Error("图像加载失败"));
      }, c.src = `data:image/png;base64,${t.image}`;
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
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === d.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === d.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const e = this.annotations.findIndex((n) => n === t);
    e !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(e, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字标注内容
  updateTextAnnotation(t, e) {
    if (t.getData().type === d.Text) {
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
        const { x: e, y: n, width: i, height: s } = this.selectionRect, a = await q("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + e * r), c = Math.round(a.y + n * r), u = Math.round(i * r), g = Math.round(s * r), w = Math.round(a.x + window.innerWidth * r), p = t === "ocr" ? Math.round(l - Math.max(0, u - u) / 2) : l, x = t === "ocr" ? Math.max(a.x, Math.min(p, w - u)) : l, v = {}, R = await this.cropFromBackground(e, n, i, s, v);
        if (!R?.image)
          throw new Error("Failed to crop from background image");
        const $ = await this.renderWithAnnotations(R, r, "save");
        await q("create_pin_window", {
          mode: t,
          imageData: $,
          x,
          y: c,
          width: u,
          height: g
        }), this.onStateChange?.(), setTimeout(() => {
          new se("screenshot").close();
        }, 100);
      } catch (e) {
        throw P.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, e), e;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const e = await q("get_window_info"), n = e?.scale || 1, i = Math.round(e.x + (this.selectionRect.x + t.x - this.selectionRect.x) * n), s = Math.round(e.y + (this.selectionRect.y + t.y - this.selectionRect.y) * n), a = await q("get_pixel_color", {
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
        P.error("[截图] 获取像素颜色失败", e);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const e = await q("get_window_info"), n = e?.scale || 1, i = this.colorPickerState.zoomFactor, s = Math.floor(i / 2), a = Math.round(e.x + t.x * n), r = Math.round(e.y + t.y * n), l = await q("get_screen_preview", {
          x: a - s,
          y: r - s,
          width: i,
          height: i
        }), c = new Image();
        c.src = `data:image/png;base64,${l.image}`, await c.decode();
        const u = await createImageBitmap(c);
        this.colorPickerState.previewImage = u;
        const w = new OffscreenCanvas(i, i).getContext("2d");
        if (w) {
          w.drawImage(u, 0, 0, i, i);
          const p = w.getImageData(s, s, 1, 1).data, x = { r: p[0], g: p[1], b: p[2] }, v = this.rgbToHex(x.r, x.g, x.b);
          this.colorPickerState.colorInfo = { rgb: x, hex: v, position: t };
        }
        this.draw();
      } catch (e) {
        P.error("[截图] 更新颜色预览失败", e);
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
        const { x: r, y: l, width: c, height: u } = this.selectionRect, g = window.devicePixelRatio || 1, w = c * g, p = u * g, x = this.canvasPool.acquire(w, p), v = x.getContext("2d");
        if (!v)
          throw this.canvasPool.release(x), new Error("无法创建临时canvas");
        const R = r * g, $ = l * g, H = performance.now();
        v.drawImage(
          this.backgroundImage,
          R,
          $,
          w,
          p,
          0,
          0,
          w,
          p
        ), e = Math.round(performance.now() - H);
        const b = performance.now(), { recognizeFromCanvas: L } = await Mt.loadOCR();
        n = Math.round(performance.now() - b);
        const D = performance.now(), W = await L(x);
        i = Math.round(performance.now() - D), this.canvasPool.release(x);
        const Y = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: n,
          ocrRecognitionDurationMs: i,
          confidence: W.confidence,
          rawLineCount: W.blocks.length,
          textLength: W.full_text.trim().length
        };
        P.info("[OCR] 识别耗时统计", Y), mt.log("[OCR] recognition timing", Y);
        const z = W.blocks, N = performance.now(), E = Be(z);
        s = Math.round(performance.now() - N);
        const O = E.map((f) => f.text).join(`

`), U = {
          rawLineCount: z.length,
          paragraphCount: E.length,
          durationMs: s,
          paragraphs: E.map((f, I) => ({
            index: I,
            text: f.text,
            blockCount: f.blocks.length,
            isCodeBlock: !!f.isCodeBlock,
            isStructuredBlock: !!f.isStructuredBlock,
            bbox: f.bbox,
            sourceBlocks: f.blocks.map((lt) => ({
              text: lt.text,
              x: lt.x,
              y: lt.y,
              width: lt.width,
              height: lt.height
            }))
          }))
        };
        if (P.info("[OCR] 版面重组完成", U), mt.log("[OCR] layout reflow complete", U), !O || !O.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const V = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(zt(O));
        const ot = (f) => {
          const I = f.trim();
          return !!(I.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !I.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let X = "";
        const T = zt(O), B = {
          detectedLanguage: T,
          textLength: O.trim().length,
          textPreview: O.trim().slice(0, 500)
        };
        P.info("[OCR] 翻译语言检测完成", B), mt.log("[OCR] translation language detected", B), Dt(T) && (this.translationOverlay.sourceLanguage = T, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(T));
        const tt = V === "offline" ? Mt.loadOfflineTranslator() : null, nt = (f) => f.includes("插件") && f.includes("未启用") ? f.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : f : V === "offline" ? f.includes("未激活") || f.includes("未下载") || f.includes("运行时未安装") ? f : f.includes("超时") ? "模型加载超时，请重试" : f.includes("离线翻译暂仅支持") ? f : "离线翻译失败: " + f.substring(0, 50) : f.includes("timeout") || f.includes("超时") ? "翻译超时，请检查网络连接" : f.includes("network") || f.includes("网络") || f.includes("请求") || f.includes("令牌") ? "翻译失败，请检查网络连接" : f.trim() ? f.slice(0, 80) : "翻译失败，请检查网络连接", S = async () => {
          if (!tt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: f,
            canUseOfflineTranslation: I,
            warmupOfflineTranslator: lt,
            getModelCacheInfo: h
          } = await tt, k = I();
          if (this.offlineModelActivated && !k)
            if ((await h()).isCached)
              await lt();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return f;
        }, J = async (f, I, lt) => {
          if (!f.trim())
            return f;
          if (V === "offline") {
            if (I !== "en" || lt !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await S())(f);
          }
          return await q("translate_text", {
            text: f,
            from: I,
            to: lt,
            engine: V
          });
        }, C = (f) => {
          const I = f.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(I) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(I);
        }, dt = async (f, I, lt) => {
          const h = f.trim();
          if (!h || ot(h))
            return f;
          const k = f.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (k) {
            const [, gt, it, G, St, Bt] = k, $t = zt(it), ue = C(it) || !Dt($t) ? it : await J(it, $t, this.getAutoTargetLanguage($t)), Nt = zt(St), ge = Dt(Nt) && !ot(St) ? await J(St, Nt, this.getAutoTargetLanguage(Nt)) : St;
            return `${gt}${ue}${G}${ge}${Bt}`;
          }
          if (C(h))
            return f;
          const F = zt(h);
          if (!Dt(F))
            return f;
          const Z = this.getAutoTargetLanguage(F), et = await J(h, F, Z), Q = {
            paragraphIndex: I,
            blockIndex: lt,
            sourceLanguage: F,
            targetLanguage: Z,
            sourceText: h,
            translatedText: et.slice(0, 200)
          };
          return P.info("[OCR] 结构化块翻译完成", Q), mt.log("[OCR] structured block translation complete", Q), et;
        }, at = async (f, I) => {
          const lt = performance.now(), h = (et) => ({
            index: I,
            durationMs: Math.round(performance.now() - lt),
            ...et
          }), k = zt(f.text), F = this.getAutoTargetLanguage(k), Z = {
            index: I,
            text: f.text,
            sourceLanguage: k,
            targetLanguage: F,
            engine: V,
            structured: !!f.isStructuredBlock
          };
          if (P.info("[OCR] 段落翻译方向", Z), mt.log("[OCR] paragraph translation direction", Z), !Dt(k)) {
            f.translatedText = f.text;
            const et = h({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), Q = {
              index: I,
              detectedLanguage: k,
              durationMs: et.durationMs,
              text: f.text
            };
            return P.warn("[OCR] 跳过不支持的段落语言", Q), mt.log("[OCR] skip unsupported paragraph language", Q), et;
          }
          try {
            if (f.isStructuredBlock && f.blocks.length > 0) {
              const gt = async (G, St) => {
                const Bt = await dt(G.text, I, St);
                return G.translatedText = Bt, Bt;
              }, it = [];
              if (V === "offline")
                for (let G = 0; G < f.blocks.length; G += 1)
                  it.push(await gt(f.blocks[G], G));
              else
                it.push(
                  ...await Promise.all(
                    f.blocks.map((G, St) => gt(G, St))
                  )
                );
              f.translatedText = it.join(" ");
            } else if (ot(f.text) || f.isCodeBlock) {
              f.translatedText = f.text;
              const gt = f.isCodeBlock ? "code_block" : "command_like_text", it = h({ skipped: !0, cancelled: !1 }), G = {
                index: I,
                reason: gt,
                durationMs: it.durationMs,
                text: f.text
              };
              return P.info("[OCR] 跳过代码段翻译", G), mt.log("[OCR] skip code paragraph translation", G), it;
            } else
              f.translatedText = await J(
                f.text,
                k,
                F
              );
            const et = h({ skipped: !1, cancelled: !1 }), Q = {
              index: I,
              durationMs: et.durationMs,
              sourceLanguage: k,
              targetLanguage: F,
              engine: V,
              structured: !!f.isStructuredBlock,
              sourceLength: f.text.length,
              translatedLength: (f.translatedText || "").length,
              translatedPreview: (f.translatedText || "").slice(0, 300)
            };
            return P.info("[OCR] 段落翻译完成", Q), mt.log("[OCR] paragraph translation complete", Q), et;
          } catch (et) {
            const Q = et instanceof Error ? et.message : String(et);
            if (Q === "翻译已取消")
              return h({ skipped: !1, cancelled: !0 });
            f.translatedText = f.text;
            const gt = nt(Q), it = h({
              skipped: !1,
              cancelled: !1,
              errorMessage: gt
            }), G = {
              index: I,
              durationMs: it.durationMs,
              sourceLanguage: k,
              targetLanguage: F,
              engine: V,
              error: Q,
              structured: !!f.isStructuredBlock,
              text: f.text
            };
            return P.error("[OCR] 段落翻译失败", G), mt.log("[OCR] paragraph translation failed", G), it;
          }
        }, wt = performance.now();
        let st = [];
        if (V === "offline")
          for (let f = 0; f < E.length; f += 1) {
            const I = await at(E[f], f);
            if (st.push(I), I.cancelled)
              return;
            if (I.errorMessage) {
              X = I.errorMessage;
              break;
            }
          }
        else {
          if (st = await Promise.all(
            E.map((f, I) => at(f, I))
          ), st.some((f) => f.cancelled))
            return;
          X = st.find((f) => f.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - wt);
        const ut = {
          durationMs: a,
          engine: V,
          paragraphCount: E.length,
          translatedParagraphCount: st.filter((f) => !f.skipped && !f.errorMessage).length,
          skippedParagraphCount: st.filter((f) => f.skipped).length,
          failedParagraphCount: st.filter((f) => !!f.errorMessage).length
        };
        P.info("[OCR] 翻译耗时统计", ut), mt.log("[OCR] translation timing", ut);
        const _t = E.map((f) => this.toDisplayParagraph(f, g)), Ht = _t.map((f) => this.toLegacyOverlayBlock(f));
        this.translationOverlay.blocks = Ht, this.translationOverlay.paragraphBlocks = _t, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = X || void 0;
        const yt = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: n,
          ocrRecognitionDurationMs: i,
          reflowDurationMs: s,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: z.length,
          paragraphCount: E.length,
          engine: V
        };
        P.info("[OCR] 截图翻译总耗时统计", yt), mt.log("[OCR] pipeline timing", yt), this.draw(), this.onStateChange?.();
      } catch (t) {
        P.error("[OCR] OCR翻译失败:", t);
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
      const { cancelOfflineTranslation: t } = await Mt.loadOfflineTranslator();
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
    Mt.loadOfflineTranslator().then(({ cancelOfflineTranslation: e }) => e()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null), this.annotations.forEach((e) => {
      typeof e.destroy == "function" && e.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
const dn = kt("arrow-left-up", !0, function(o) {
  return M("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M11 11L36.4559 36.4558",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M29 11H11V29",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), un = kt("delete-four", !1, function(o) {
  return M("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M8 11L40 11",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M18 5L30 5",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: o.colors[1],
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), gn = kt("download", !1, function(o) {
  return M("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M6 24.0083V42H42V24",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M33 23L24 32L15 23",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M23.9917 6V32",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), fn = kt("font-size", !0, function(o) {
  return M("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M24 6V42",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M16 42H32",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), xn = kt("mosaic", !0, function(o) {
  return M("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M44 36H36V44H44V36Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M28 36H20V44H28V36Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M12 36H4V44H12V36Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M44 20H36V28H44V20Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M28 20H20V28H28V20Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M12 20H4V28H12V20Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M44 4H36V12H44V4Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M28 4H20V12H28V4Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M12 4H4V12H12V4Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M20 12H12V20H20V12Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M20 28H12V36H20V28Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M36 12H28V20H36V12Z",
    fill: o.colors[0]
  }, null), M("path", {
    d: "M36 28H28V36H36V28Z",
    fill: o.colors[0]
  }, null)]);
}), wn = kt("move-one", !0, function(o) {
  return M("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: o.colors[1],
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), ee = kt("platte", !0, function(o) {
  return M("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: o.colors[1],
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: o.colors[3],
    stroke: o.colors[2],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: o.colors[3],
    stroke: o.colors[2],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: o.colors[3],
    stroke: o.colors[2],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), mn = kt("rectangle-one", !1, function(o) {
  return M("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: o.colors[1],
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth
  }, null)]);
}), yn = kt("return", !0, function(o) {
  return M("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), pn = kt("write", !0, function(o) {
  return M("svg", {
    width: o.size,
    height: o.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: o.colors[1],
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linejoin": o.strokeLinejoin
  }, null), M("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: o.colors[0],
    "stroke-width": o.strokeWidth,
    "stroke-linecap": o.strokeLinecap,
    "stroke-linejoin": o.strokeLinejoin
  }, null)]);
}), vn = { class: "toolbar-panel first-panel" }, kn = { class: "tool-section" }, Sn = ["onClick", "title"], bn = { class: "action-section" }, Mn = ["disabled", "title"], Cn = ["disabled", "title"], Tn = ["title"], Rn = ["title"], zn = ["title"], An = {
  key: 0,
  class: "toolbar-panel second-panel"
}, Pn = { class: "style-section" }, Dn = {
  key: 0,
  class: "style-group"
}, Ln = { class: "line-width-selector" }, Wn = ["onClick", "title"], In = {
  key: 1,
  class: "style-group color-picker-group"
}, _n = ["title"], Hn = {
  key: 0,
  class: "color-picker-panel"
}, Bn = { class: "color-row" }, En = ["onClick", "title"], On = { class: "custom-color-wrapper" }, $n = ["title"], Nn = ["value"], Vn = {
  key: 2,
  class: "style-group"
}, Fn = { class: "text-size-selector" }, Yn = ["onClick", "title"], Un = {
  key: 3,
  class: "style-group"
}, Xn = { class: "mosaic-size-selector" }, jn = ["onClick", "title"], Zn = {
  key: 4,
  class: "style-group"
}, Gn = { class: "translate-engine-selector" }, qn = ["onClick", "title"], Kn = /* @__PURE__ */ ne({
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
  setup(o, { expose: t, emit: e }) {
    const n = ht(!1), i = ht(null), { t: s } = ke(), a = o, r = e, l = ct(() => [
      { type: d.Select, icon: wn, title: s("screenshot.select") },
      { type: d.Rectangle, icon: mn, title: s("screenshot.rectangle") },
      { type: d.Arrow, icon: dn, title: s("screenshot.arrow") },
      { type: d.Pen, icon: pn, title: s("screenshot.pen") },
      { type: d.Mosaic, icon: xn, title: s("screenshot.mosaic") },
      { type: d.Text, icon: fn, title: s("screenshot.text") },
      { type: d.ColorPicker, icon: ee, title: s("screenshot.colorPicker") },
      { type: d.Ocr, icon: Se, title: s("screenshot.ocr") },
      { type: d.Translate, icon: be, title: s("screenshot.translate") },
      { type: d.Pin, icon: Me, title: s("screenshot.pin") }
    ]), c = ct(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: s("translate.bingTranslate"), short: "B" },
      { value: "offline", label: s("translate.offlineTranslate"), short: "离" }
    ]), u = [2, 3, 5, 8], g = ["#ff4444", "#44ff44", "#4444ff"], w = [12, 14, 16, 18, 20, 24], p = [5, 8, 10, 15], x = ct(() => ![d.Select, d.ColorPicker, d.Ocr, d.Pin].includes(a.currentTool)), v = ct(
      () => [d.Rectangle, d.Arrow, d.Pen].includes(a.currentTool)
    ), R = ct(
      () => [d.Rectangle, d.Arrow, d.Pen, d.Text].includes(a.currentTool)
    ), $ = ct(() => a.currentTool === d.Text), H = ct(() => a.currentTool === d.Mosaic), b = ct(() => a.currentTool === d.Translate), L = (S) => r("tool-select", S), D = (S) => r("color-change", S), W = (S) => r("line-width-change", S), Y = (S) => r("text-size-change", S), z = (S) => r("mosaic-size-change", S), N = () => r("undo"), E = () => r("delete"), O = () => r("save"), U = () => r("confirm"), V = () => r("cancel"), ot = (S) => {
      r("translate-engine-change", S);
    }, X = () => {
      n.value = !n.value;
    }, T = (S) => {
      D(S), n.value = !1;
    }, B = () => {
    }, tt = (S) => {
      const J = S.target;
      J.value && D(J.value);
    };
    Zt(() => a.currentTool, () => {
      n.value && (n.value = !1);
    });
    const nt = () => {
      const S = i.value?.getBoundingClientRect();
      return {
        width: S?.width ?? 510,
        height: S?.height ?? 48
      };
    };
    return Zt([
      () => a.currentTool,
      () => n.value
    ], () => {
      Ft(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: nt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: nt
    }), (S, J) => (j(), K(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        _(" 第一个面板：工具选择 + 操作按钮 "),
        A("div", vn, [
          _(" 工具选择区域 "),
          A("div", kn, [
            (j(!0), K(
              Tt,
              null,
              Rt(l.value, (C) => (j(), K("button", {
                key: C.type,
                onClick: (dt) => L(C.type),
                class: bt(["tool-btn", { active: S.currentTool === C.type }]),
                title: C.title
              }, [
                (j(), ie(we(C.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 3
                }))
              ], 10, Sn))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _(" 分隔线 "),
          J[0] || (J[0] = A(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          _(" 操作按钮区域 "),
          A("div", bn, [
            A("button", {
              onClick: N,
              disabled: !S.canUndo,
              class: "action-btn undo",
              title: ft(s)("screenshot.undo")
            }, [
              M(ft(yn), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              })
            ], 8, Mn),
            A("button", {
              onClick: E,
              disabled: !S.canDelete,
              class: "action-btn delete",
              title: ft(s)("screenshot.delete")
            }, [
              M(ft(un), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              })
            ], 8, Cn),
            A("button", {
              onClick: O,
              class: "action-btn save",
              title: ft(s)("screenshot.save")
            }, [
              M(ft(gn), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              })
            ], 8, Tn),
            A("button", {
              onClick: U,
              class: "action-btn confirm",
              title: ft(s)("screenshot.confirm")
            }, [
              M(ft(Ce), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              })
            ], 8, Rn),
            A("button", {
              onClick: V,
              class: "action-btn cancel",
              title: ft(s)("screenshot.cancel")
            }, [
              M(ft(Te), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              })
            ], 8, zn)
          ])
        ]),
        _(" 第二个面板：样式设置区域 "),
        x.value ? (j(), K("div", An, [
          A("div", Pn, [
            _(" 线宽设置 "),
            v.value ? (j(), K("div", Dn, [
              A("div", Ln, [
                (j(), K(
                  Tt,
                  null,
                  Rt(u, (C) => A("button", {
                    key: C,
                    onClick: (dt) => W(C),
                    class: bt(["width-btn", { active: S.currentLineWidth === C }]),
                    title: `${C}px`
                  }, [
                    A(
                      "div",
                      {
                        class: "line-preview",
                        style: xt({ height: `${C}px`, backgroundColor: S.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Wn)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])) : _("v-if", !0),
            _(" 颜色设置 "),
            R.value ? (j(), K("div", In, [
              A("button", {
                onClick: X,
                class: "color-trigger-btn",
                style: xt({ backgroundColor: S.currentColor }),
                title: ft(s)("screenshot.colorPicker")
              }, J[1] || (J[1] = [
                A(
                  "div",
                  { class: "color-trigger-inner" },
                  null,
                  -1
                  /* HOISTED */
                )
              ]), 12, _n),
              _(" 颜色选择器面板 "),
              n.value ? (j(), K("div", Hn, [
                A("div", Bn, [
                  _(" 预设颜色：红、绿、蓝 "),
                  (j(), K(
                    Tt,
                    null,
                    Rt(g, (C) => A("button", {
                      key: C,
                      onClick: (dt) => T(C),
                      class: bt(["color-btn", { active: S.currentColor === C }]),
                      style: xt({ backgroundColor: C }),
                      title: C
                    }, null, 14, En)),
                    64
                    /* STABLE_FRAGMENT */
                  )),
                  _(" 自定义颜色选择器 "),
                  A("div", On, [
                    A("button", {
                      onClick: B,
                      class: bt(["color-btn custom-color-btn", { active: !g.includes(S.currentColor) }]),
                      title: ft(s)("screenshot.customColor")
                    }, [
                      M(ft(ee), {
                        theme: "outline",
                        size: "14",
                        strokeWidth: 3
                      })
                    ], 10, $n),
                    A("input", {
                      ref: "colorInputRef",
                      type: "color",
                      onChange: tt,
                      value: S.currentColor,
                      class: "color-input-hidden"
                    }, null, 40, Nn)
                  ])
                ])
              ])) : _("v-if", !0)
            ])) : _("v-if", !0),
            _(" 文字大小设置 "),
            $.value ? (j(), K("div", Vn, [
              A("div", Fn, [
                (j(), K(
                  Tt,
                  null,
                  Rt(w, (C) => A("button", {
                    key: C,
                    onClick: (dt) => Y(C),
                    class: bt(["size-btn", { active: S.currentTextSize === C }]),
                    title: `${C}px`
                  }, [
                    A(
                      "span",
                      {
                        class: "size-text",
                        style: xt({ fontSize: `${C}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, Yn)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])) : _("v-if", !0),
            _(" 马赛克大小设置 "),
            H.value ? (j(), K("div", Un, [
              A("div", Xn, [
                (j(), K(
                  Tt,
                  null,
                  Rt(p, (C) => A("button", {
                    key: C,
                    onClick: (dt) => z(C),
                    class: bt(["size-btn", { active: S.currentMosaicSize === C }]),
                    title: `${ft(s)("screenshot.brush")} ${C * 3}px`
                  }, [
                    A(
                      "div",
                      {
                        class: "mosaic-preview",
                        style: xt({
                          width: `${Math.min(C * 1.5, 24)}px`,
                          height: `${Math.min(C * 1.5, 24)}px`,
                          backgroundColor: "rgba(100, 100, 100, 0.5)",
                          borderRadius: "50%"
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, jn)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])) : _("v-if", !0),
            _(" 翻译引擎选择 "),
            b.value ? (j(), K("div", Zn, [
              A("div", Gn, [
                (j(!0), K(
                  Tt,
                  null,
                  Rt(c.value, (C) => (j(), K("button", {
                    key: C.value,
                    onClick: (dt) => ot(C.value),
                    class: bt(["engine-btn", { active: S.currentTranslateEngine === C.value }]),
                    title: C.label
                  }, Lt(C.short), 11, qn))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : _("v-if", !0)
          ])
        ])) : _("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Jn = /* @__PURE__ */ oe(Kn, [["__scopeId", "data-v-5f586fc3"]]), Qn = {
  class: "screenshot-container",
  ref: "containerRef"
}, ti = {
  key: 0,
  class: "mask-layers"
}, ei = {
  key: 1,
  class: "mask-full"
}, ni = { class: "size-text" }, ii = {
  key: 4,
  class: "loading-overlay"
}, si = {
  key: 5,
  class: "instructions"
}, oi = { class: "hint" }, ai = /* @__PURE__ */ ne({
  __name: "index",
  setup(o) {
    const t = ht(), e = ht(), n = ht(null), i = ht(null);
    let s = null;
    const a = ht(!0), r = ht(!1), l = ht(""), c = ht({ x: 0, y: 0 }), u = ht(!1), g = ht("bing"), w = ht({ width: 510, height: 48 });
    let p = !1;
    const x = ht({
      selectionRect: null,
      annotations: [],
      currentTool: d.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3 },
      textSize: 16,
      mosaicSize: 5,
      hasSelection: !1,
      hasAnnotations: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), v = ht(), R = ht(), $ = ct(() => x.value.isDrawing), H = ct(() => {
      if (!x.value.selectionRect) return {};
      const { y: h } = x.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${h}px`
      };
    }), b = ct(() => {
      if (!x.value.selectionRect) return {};
      const { y: h, height: k } = x.value.selectionRect;
      return {
        top: `${h + k}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), L = ct(() => {
      if (!x.value.selectionRect) return {};
      const { x: h, y: k, height: F } = x.value.selectionRect;
      return {
        top: `${k}px`,
        left: "0",
        width: `${h}px`,
        height: `${F}px`
      };
    }), D = ct(() => {
      if (!x.value.selectionRect) return {};
      const { x: h, y: k, width: F, height: Z } = x.value.selectionRect;
      return {
        top: `${k}px`,
        left: `${h + F}px`,
        right: "0",
        height: `${Z}px`
      };
    }), W = ct(() => {
      if (!x.value.selectionRect) return {};
      const { x: h, y: k, height: F } = x.value.selectionRect, Z = 8, et = Math.min(w.value.width, Math.max(0, window.innerWidth - Z * 2)), Q = Math.min(w.value.height, Math.max(0, window.innerHeight - Z * 2)), gt = Math.max(Z, window.innerHeight - Q - Z), it = Math.max(Z, window.innerWidth - et - Z);
      let G;
      return k + F + Q + Z <= window.innerHeight ? G = k + F + Z : k - Q - Z >= Z ? G = k - Q - Z : G = k + F - Q - Z, G = Math.min(Math.max(G, Z), gt), {
        left: `${Math.min(Math.max(h, Z), it)}px`,
        top: `${G}px`
      };
    }), Y = ct(() => {
      if (!x.value.selectionRect) return {};
      const { x: h, y: k, width: F, height: Z } = x.value.selectionRect, et = 10;
      let Q = h - et, gt = k - et, it = "translateY(-100%)";
      return Q < 10 && (Q = h + F + et, it = "translateY(-100%)"), gt < 30 && (gt = k + Z + et, it = "translateY(0)"), {
        left: `${Q}px`,
        top: `${gt}px`,
        transform: it
      };
    }), z = ct(() => {
      if (!x.value.selectionRect) return "";
      const { width: h, height: k } = x.value.selectionRect;
      return `${Math.round(h)} × ${Math.round(k)}`;
    }), N = ct(() => {
      const h = x.value.textSize + 20;
      return {
        left: `${c.value.x}px`,
        top: `${c.value.y - h / 2}px`
      };
    }), E = (h) => {
      if (h === d.Pin && x.value.selectionRect) {
        O();
        return;
      }
      if (h === d.Ocr && x.value.selectionRect) {
        U();
        return;
      }
      s?.setTool(h);
    }, O = async () => {
      try {
        await s?.createPinWindow();
      } catch (h) {
        P.error("[截图] 创建贴图失败", h);
      }
    }, U = async () => {
      try {
        await s?.createOcrPinWindow();
      } catch (h) {
        P.error("[截图] 创建文字识别贴图失败", h);
      }
    }, V = (h) => {
      s?.updateStyle({ color: h });
    }, ot = (h) => {
      s?.updateStyle({ lineWidth: h });
    }, X = (h) => {
      s?.updateTextSize(h);
    }, T = (h) => {
      s?.updateMosaicSize(h);
    }, B = (h) => {
      g.value = h, s?.setTranslationEngine(h), s?.executeTranslation();
    }, tt = () => {
      s?.undoAnnotation();
    }, nt = () => {
      s?.redoAnnotation();
    }, S = () => {
      s?.deleteSelectedAnnotation();
    }, J = async () => {
      try {
        await s?.processScreenshot("save"), yt();
      } catch (h) {
        const k = h?.message || h?.toString() || "保存失败";
        if (k.includes("保存已取消") || k.includes("cancelled"))
          return;
        P.error("保存截图时发生错误", k);
      }
    }, C = async () => {
      try {
        await s?.processScreenshot("copy"), yt();
      } catch {
      }
    }, dt = () => {
      yt();
    };
    let at = null;
    const wt = (h, k) => {
      if (k && k.getData().type === "text") {
        const F = k.getData();
        c.value = {
          x: F.points[0].x,
          y: F.points[0].y
        };
      } else
        c.value = h;
      r.value = !0, at = k || null, k && s?.setEditingAnnotation(k), k && k.getData().text ? l.value = k.getData().text : l.value = "", Ft(() => {
        e.value?.focus(), at && e.value?.select();
      });
    }, st = () => {
      l.value.trim() ? at ? s?.updateTextAnnotation(at, l.value) : s?.createTextAnnotation(c.value, l.value) : at && s?.deleteAnnotation(at), ut();
    }, ut = () => {
      r.value = !1, l.value = "", at && s?.clearEditingAnnotation(), at = null;
    }, _t = (h) => {
      navigator.clipboard && navigator.clipboard.writeText(h.hex).catch((k) => {
        P.error("[截图] 复制颜色到剪贴板失败", k);
      });
    }, Ht = (h) => {
      if (h.key === "Meta" || h.key === "Win" || h.altKey && h.key === "Tab" || h.altKey && h.key === "F4") {
        h.preventDefault(), h.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === e.value) {
        if (h.key === "Escape") {
          ut(), h.preventDefault();
          return;
        }
        if (h.key === "Enter") {
          st(), h.preventDefault();
          return;
        }
        if (h.key === "Tab") {
          h.preventDefault();
          return;
        }
        return;
      }
      if (!x.value.selectionRect) {
        if (h.key === "Escape") {
          yt();
          return;
        }
        h.preventDefault(), h.stopPropagation();
        return;
      }
      if (s?.handleKeyDown(h)) {
        h.preventDefault();
        return;
      }
      const k = navigator.platform.toLowerCase().includes("mac");
      if ((k ? h.metaKey : h.ctrlKey) && h.key.toLowerCase() === "z") {
        h.shiftKey ? nt() : tt(), h.preventDefault();
        return;
      }
      if (!k && h.ctrlKey && h.key.toLowerCase() === "y") {
        nt(), h.preventDefault();
        return;
      }
      if (h.key === "Escape") {
        yt();
        return;
      } else if (h.key === "Delete" || h.key === "Backspace") {
        S(), h.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(h.key) || h.preventDefault();
    }, yt = async () => {
      if (!p) {
        p = !0, s?.destroy(), s = null;
        try {
          await q("cleanup_screenshot_resources");
        } catch {
          try {
            await q("clear_screenshot_background");
          } catch (k) {
            P.error("[截图] 清理后台缓存失败", k);
          }
        }
        x.value = {
          selectionRect: null,
          annotations: [],
          currentTool: d.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3 },
          textSize: 16,
          mosaicSize: 5,
          hasSelection: !1,
          hasAnnotations: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, r.value = !1, l.value = "", at = null, u.value = !1, a.value = !0;
        try {
          await q("close_and_destroy_screenshot_window");
        } catch (h) {
          P.error("[截图] 销毁截图窗口失败，回退到 close()", h), await i.value?.close();
        } finally {
          p = !1;
        }
      }
    }, f = () => {
      const h = s?.getState();
      h && (x.value = h);
    }, I = () => {
      const h = n.value?.getToolbarSize?.();
      h && (w.value = h);
    }, lt = (h) => {
      const k = h.detail;
      k && (w.value = k);
    };
    return me(async () => {
      if (t.value) {
        i.value = new se("screenshot"), await i.value.emit("screenshot_ready"), s = new hn(
          t.value,
          f,
          wt,
          _t
        );
        try {
          const h = await q("get_translation_engine");
          h && ["google", "bing", "offline"].includes(h) && (g.value = h, s?.setTranslationEngine(h));
        } catch (h) {
          P.error("[截图] 获取翻译引擎设置失败", h);
        }
        try {
          const h = await q("get_offline_model_activated");
          s?.setOfflineModelActivated(h);
        } catch (h) {
          P.error("[截图] 获取离线模型激活状态失败", h);
        }
        document.addEventListener("keydown", Ht), window.addEventListener("resize", I), window.addEventListener("screenshot-toolbar-resize", lt), R.value = await Vt("background-ready", () => {
          s?.triggerBackgroundReload();
        }), R.value = await Vt("screenshot-close-requested", () => {
          yt();
        }), v.value = await Vt("tauri://blur", () => {
          if (r.value && document.activeElement === e.value)
            return;
          const h = s?.getTranslationState();
          h?.isLoading || h?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== e.value) {
              const k = s?.getTranslationState();
              if (k?.isLoading || k?.isVisible)
                return;
              yt();
            }
          }, 100);
        }), Ft(I);
      }
    }), ye(() => {
      s?.destroy(), s = null, document.removeEventListener("keydown", Ht), window.removeEventListener("resize", I), window.removeEventListener("screenshot-toolbar-resize", lt), v.value?.(), R.value?.(), v.value = void 0, R.value = void 0, i.value = null;
    }), (h, k) => (j(), K(
      "div",
      Qn,
      [
        _(" 遮罩层 "),
        x.value.selectionRect ? (j(), K("div", ti, [
          A(
            "div",
            {
              class: "mask-top",
              style: xt(H.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-bottom",
              style: xt(b.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-left",
              style: xt(L.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-right",
              style: xt(D.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (j(), K("div", ei)),
        _(" 画布 "),
        A(
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
        _(" 尺寸信息 "),
        x.value.selectionRect && a.value ? (j(), K(
          "div",
          {
            key: 2,
            class: "size-info",
            style: xt(Y.value)
          },
          [
            A(
              "span",
              ni,
              Lt(z.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : _("v-if", !0),
        _(" 工具栏 "),
        x.value.selectionRect && !$.value ? (j(), ie(Jn, {
          key: 3,
          ref_key: "toolbarRef",
          ref: n,
          style: xt(W.value),
          class: "toolbar",
          "current-tool": x.value.currentTool,
          "current-color": x.value.currentStyle.color,
          "current-line-width": x.value.currentStyle.lineWidth,
          "current-text-size": x.value.textSize,
          "current-mosaic-size": x.value.mosaicSize,
          "can-undo": x.value.hasAnnotations,
          "can-delete": !!x.value.selectedAnnotation,
          "current-translate-engine": g.value,
          onToolSelect: E,
          onColorChange: V,
          onLineWidthChange: ot,
          onTextSizeChange: X,
          onMosaicSizeChange: T,
          onTranslateEngineChange: B,
          onUndo: tt,
          onDelete: S,
          onSave: J,
          onConfirm: C,
          onCancel: dt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-text-size", "current-mosaic-size", "can-undo", "can-delete", "current-translate-engine"])) : _("v-if", !0),
        _(" 加载提示 - 仅在初始化时显示 "),
        u.value ? (j(), K("div", ii, [
          k[1] || (k[1] = A(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          A(
            "p",
            null,
            Lt(h.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : _("v-if", !0),
        _(" 提示信息 "),
        !x.value.selectionRect && !u.value ? (j(), K("div", si, [
          A(
            "p",
            null,
            Lt(h.$t("screenshotTool.dragToSelect")),
            1
            /* TEXT */
          ),
          A(
            "p",
            oi,
            Lt(h.$t("screenshotTool.pressEscToClose")),
            1
            /* TEXT */
          )
        ])) : _("v-if", !0),
        _(" 文字输入框 "),
        r.value ? (j(), K(
          "div",
          {
            key: 6,
            class: "text-input-container",
            style: xt(N.value)
          },
          [
            pe(A(
              "input",
              {
                ref_key: "textInputRef",
                ref: e,
                "onUpdate:modelValue": k[0] || (k[0] = (F) => l.value = F),
                type: "text",
                class: "text-input",
                style: xt({
                  color: x.value.currentStyle.color,
                  fontSize: x.value.textSize + "px",
                  borderColor: x.value.currentStyle.color
                }),
                onKeydown: [
                  Gt(st, ["enter"]),
                  Gt(ut, ["escape"])
                ],
                onBlur: st,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [ve, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : _("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), hi = /* @__PURE__ */ oe(ai, [["__scopeId", "data-v-40f1d1c6"]]);
export {
  hi as default
};
