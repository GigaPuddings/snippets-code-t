/**
 * 验证工具函数
 * 
 * 提供类型守卫和数据验证功能
 */

import type { Point, Rect, AnnotationData, ColorInfo } from '../core/types';

/**
 * 判断是否为有效的点
 * 
 * @param point - 要检查的点
 * @returns 类型守卫，如果是有效的点返回 true
 * 
 * @example
 * ```ts
 * const point: Point | null = getPoint();
 * if (isValidPoint(point)) {
 *   // TypeScript 知道 point 是 Point 类型
 *   console.log(point.x, point.y);
 * }
 * ```
 */
export function isValidPoint(point: Point | null | undefined): point is Point {
  return point !== null &&
         point !== undefined &&
         typeof point.x === 'number' &&
         typeof point.y === 'number' &&
         !isNaN(point.x) &&
         !isNaN(point.y) &&
         isFinite(point.x) &&
         isFinite(point.y);
}

/**
 * 判断是否为有效的矩形
 * 
 * @param rect - 要检查的矩形
 * @returns 类型守卫，如果是有效的矩形返回 true
 * 
 * @example
 * ```ts
 * const rect: Rect | null = getRect();
 * if (isValidRect(rect)) {
 *   // TypeScript 知道 rect 是 Rect 类型
 *   console.log(rect.width, rect.height);
 * }
 * ```
 */
export function isValidRect(rect: Rect | null | undefined): rect is Rect {
  return rect !== null &&
         rect !== undefined &&
         typeof rect.x === 'number' &&
         typeof rect.y === 'number' &&
         typeof rect.width === 'number' &&
         typeof rect.height === 'number' &&
         !isNaN(rect.x) &&
         !isNaN(rect.y) &&
         !isNaN(rect.width) &&
         !isNaN(rect.height) &&
         isFinite(rect.x) &&
         isFinite(rect.y) &&
         isFinite(rect.width) &&
         isFinite(rect.height) &&
         rect.width > 0 &&
         rect.height > 0;
}

/**
 * 判断矩形是否有效且非空
 * 
 * @param rect - 要检查的矩形
 * @param minSize - 最小尺寸（默认为 1）
 * @returns 如果矩形有效且大于最小尺寸返回 true
 * 
 * @example
 * ```ts
 * if (isNonEmptyRect(rect, 10)) {
 *   // 矩形宽高都大于 10
 *   console.log('Valid selection');
 * }
 * ```
 */
export function isNonEmptyRect(rect: Rect | null | undefined, minSize: number = 1): boolean {
  return isValidRect(rect) &&
         rect.width >= minSize &&
         rect.height >= minSize;
}

/**
 * 判断是否为有效的颜色信息
 * 
 * @param colorInfo - 要检查的颜色信息
 * @returns 类型守卫，如果是有效的颜色信息返回 true
 * 
 * @example
 * ```ts
 * const color: ColorInfo | undefined = getColor();
 * if (isValidColorInfo(color)) {
 *   console.log(color.hex);
 * }
 * ```
 */
export function isValidColorInfo(colorInfo: ColorInfo | null | undefined): colorInfo is ColorInfo {
  if (!colorInfo) return false;
  
  const { rgb, hex, position } = colorInfo;
  
  return typeof rgb === 'object' &&
         typeof rgb.r === 'number' &&
         typeof rgb.g === 'number' &&
         typeof rgb.b === 'number' &&
         rgb.r >= 0 && rgb.r <= 255 &&
         rgb.g >= 0 && rgb.g <= 255 &&
         rgb.b >= 0 && rgb.b <= 255 &&
         typeof hex === 'string' &&
         /^#[0-9A-Fa-f]{6}$/.test(hex) &&
         isValidPoint(position);
}

/**
 * 判断是否为有效的标注数据
 * 
 * @param annotation - 要检查的标注数据
 * @returns 类型守卫，如果是有效的标注数据返回 true
 * 
 * @example
 * ```ts
 * const annotation: AnnotationData | null = getAnnotation();
 * if (isValidAnnotation(annotation)) {
 *   console.log(annotation.id, annotation.type);
 * }
 * ```
 */
export function isValidAnnotation(annotation: AnnotationData | null | undefined): annotation is AnnotationData {
  if (!annotation) return false;
  
  return typeof annotation.id === 'string' &&
         annotation.id.length > 0 &&
         typeof annotation.type === 'string' &&
         Array.isArray(annotation.points) &&
         annotation.points.length > 0 &&
         annotation.points.every(isValidPoint) &&
         typeof annotation.style === 'object' &&
         typeof annotation.style.color === 'string' &&
         typeof annotation.style.lineWidth === 'number' &&
         annotation.style.lineWidth > 0;
}

/**
 * 验证颜色字符串格式
 * 
 * @param color - 要验证的颜色字符串
 * @returns 如果是有效的颜色格式返回 true
 * 
 * @example
 * ```ts
 * console.log(isValidColor('#ff0000')); // true
 * console.log(isValidColor('rgb(255, 0, 0)')); // true
 * console.log(isValidColor('invalid')); // false
 * ```
 */
export function isValidColor(color: string): boolean {
  // 支持 hex 格式
  if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
    return true;
  }
  
  // 支持 rgb 格式
  if (/^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/.test(color)) {
    const match = color.match(/\d+/g);
    if (match) {
      return match.every(n => {
        const num = parseInt(n, 10);
        return num >= 0 && num <= 255;
      });
    }
  }
  
  // 支持 rgba 格式
  if (/^rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*[\d.]+\s*\)$/.test(color)) {
    const match = color.match(/[\d.]+/g);
    if (match && match.length === 4) {
      const [r, g, b, a] = match.map(n => parseFloat(n));
      return r >= 0 && r <= 255 &&
             g >= 0 && g <= 255 &&
             b >= 0 && b <= 255 &&
             a >= 0 && a <= 1;
    }
  }
  
  return false;
}

/**
 * 验证数字是否在指定范围内
 * 
 * @param value - 要验证的数字
 * @param min - 最小值（包含）
 * @param max - 最大值（包含）
 * @returns 如果数字在范围内返回 true
 * 
 * @example
 * ```ts
 * console.log(isInRange(5, 0, 10)); // true
 * console.log(isInRange(15, 0, 10)); // false
 * ```
 */
export function isInRange(value: number, min: number, max: number): boolean {
  return typeof value === 'number' &&
         !isNaN(value) &&
         isFinite(value) &&
         value >= min &&
         value <= max;
}

/**
 * 限制数字在指定范围内
 * 
 * @param value - 要限制的数字
 * @param min - 最小值
 * @param max - 最大值
 * @returns 限制后的数字
 * 
 * @example
 * ```ts
 * console.log(clamp(15, 0, 10)); // 10
 * console.log(clamp(-5, 0, 10)); // 0
 * console.log(clamp(5, 0, 10)); // 5
 * ```
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max));
}

/**
 * 验证 Canvas 上下文是否有效
 * 
 * @param ctx - 要验证的 Canvas 上下文
 * @returns 类型守卫，如果是有效的上下文返回 true
 * 
 * @example
 * ```ts
 * const ctx = canvas.getContext('2d');
 * if (isValidCanvasContext(ctx)) {
 *   ctx.fillRect(0, 0, 100, 100);
 * }
 * ```
 */
export function isValidCanvasContext(
  ctx: CanvasRenderingContext2D | null | undefined
): ctx is CanvasRenderingContext2D {
  return ctx !== null &&
         ctx !== undefined &&
         typeof ctx.fillRect === 'function' &&
         typeof ctx.strokeRect === 'function';
}

/**
 * 验证图像是否已加载
 * 
 * @param image - 要验证的图像
 * @returns 如果图像已加载返回 true
 * 
 * @example
 * ```ts
 * const img = new Image();
 * img.src = 'image.png';
 * img.onload = () => {
 *   if (isImageLoaded(img)) {
 *     console.log('Image loaded:', img.width, img.height);
 *   }
 * };
 * ```
 */
export function isImageLoaded(image: HTMLImageElement | null | undefined): boolean {
  return image !== null &&
         image !== undefined &&
         image.complete &&
         image.naturalWidth > 0 &&
         image.naturalHeight > 0;
}
