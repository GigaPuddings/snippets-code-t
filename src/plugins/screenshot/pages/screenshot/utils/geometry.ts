/**
 * 几何计算工具函数
 * 
 * 提供常用的几何计算功能，包括距离、角度、矩形操作等
 */

import type { Point, Rect } from '../core/types';

/**
 * 计算两点之间的距离
 * 
 * @param p1 - 第一个点
 * @param p2 - 第二个点
 * @returns 两点之间的欧几里得距离
 * 
 * @example
 * ```ts
 * const dist = distance({ x: 0, y: 0 }, { x: 3, y: 4 });
 * console.log(dist); // 5
 * ```
 */
export function distance(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * 计算两点之间的角度（弧度）
 * 
 * @param p1 - 起点
 * @param p2 - 终点
 * @returns 角度（弧度），范围 [-π, π]
 * 
 * @example
 * ```ts
 * const angle = angleBetween({ x: 0, y: 0 }, { x: 1, y: 1 });
 * console.log(angle); // π/4 (45度)
 * ```
 */
export function angleBetween(p1: Point, p2: Point): number {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
}

/**
 * 判断点是否在矩形内
 * 
 * @param point - 要检查的点
 * @param rect - 矩形区域
 * @returns 如果点在矩形内返回 true，否则返回 false
 * 
 * @example
 * ```ts
 * const isInside = isPointInRect(
 *   { x: 5, y: 5 },
 *   { x: 0, y: 0, width: 10, height: 10 }
 * );
 * console.log(isInside); // true
 * ```
 */
export function isPointInRect(point: Point, rect: Rect): boolean {
  return point.x >= rect.x &&
         point.x <= rect.x + rect.width &&
         point.y >= rect.y &&
         point.y <= rect.y + rect.height;
}

/**
 * 计算矩形的中心点
 * 
 * @param rect - 矩形区域
 * @returns 矩形的中心点坐标
 * 
 * @example
 * ```ts
 * const center = getRectCenter({ x: 0, y: 0, width: 10, height: 10 });
 * console.log(center); // { x: 5, y: 5 }
 * ```
 */
export function getRectCenter(rect: Rect): Point {
  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2
  };
}

/**
 * 计算两个矩形的交集
 * 
 * @param rect1 - 第一个矩形
 * @param rect2 - 第二个矩形
 * @returns 交集矩形，如果没有交集返回 null
 * 
 * @example
 * ```ts
 * const intersection = getRectIntersection(
 *   { x: 0, y: 0, width: 10, height: 10 },
 *   { x: 5, y: 5, width: 10, height: 10 }
 * );
 * console.log(intersection); // { x: 5, y: 5, width: 5, height: 5 }
 * ```
 */
export function getRectIntersection(rect1: Rect, rect2: Rect): Rect | null {
  const x = Math.max(rect1.x, rect2.x);
  const y = Math.max(rect1.y, rect2.y);
  const right = Math.min(rect1.x + rect1.width, rect2.x + rect2.width);
  const bottom = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
  
  const width = right - x;
  const height = bottom - y;
  
  if (width <= 0 || height <= 0) {
    return null;
  }
  
  return { x, y, width, height };
}

/**
 * 判断两个矩形是否相交
 * 
 * @param rect1 - 第一个矩形
 * @param rect2 - 第二个矩形
 * @returns 如果相交返回 true，否则返回 false
 * 
 * @example
 * ```ts
 * const overlaps = doRectsOverlap(
 *   { x: 0, y: 0, width: 10, height: 10 },
 *   { x: 5, y: 5, width: 10, height: 10 }
 * );
 * console.log(overlaps); // true
 * ```
 */
export function doRectsOverlap(rect1: Rect, rect2: Rect): boolean {
  return !(rect1.x + rect1.width < rect2.x ||
           rect2.x + rect2.width < rect1.x ||
           rect1.y + rect1.height < rect2.y ||
           rect2.y + rect2.height < rect1.y);
}

/**
 * 规范化矩形（确保宽高为正值）
 * 
 * @param rect - 要规范化的矩形
 * @returns 规范化后的矩形
 * 
 * @example
 * ```ts
 * const normalized = normalizeRect({ x: 10, y: 10, width: -5, height: -5 });
 * console.log(normalized); // { x: 5, y: 5, width: 5, height: 5 }
 * ```
 */
export function normalizeRect(rect: Rect): Rect {
  const x = rect.width < 0 ? rect.x + rect.width : rect.x;
  const y = rect.height < 0 ? rect.y + rect.height : rect.y;
  const width = Math.abs(rect.width);
  const height = Math.abs(rect.height);
  
  return { x, y, width, height };
}

/**
 * 扩展矩形（向外扩展指定的边距）
 * 
 * @param rect - 原始矩形
 * @param margin - 扩展边距
 * @returns 扩展后的矩形
 * 
 * @example
 * ```ts
 * const expanded = expandRect({ x: 5, y: 5, width: 10, height: 10 }, 2);
 * console.log(expanded); // { x: 3, y: 3, width: 14, height: 14 }
 * ```
 */
export function expandRect(rect: Rect, margin: number): Rect {
  return {
    x: rect.x - margin,
    y: rect.y - margin,
    width: rect.width + margin * 2,
    height: rect.height + margin * 2
  };
}

/**
 * 限制点在矩形范围内
 * 
 * @param point - 要限制的点
 * @param bounds - 边界矩形
 * @returns 限制后的点
 * 
 * @example
 * ```ts
 * const clamped = clampPointToRect(
 *   { x: 15, y: 15 },
 *   { x: 0, y: 0, width: 10, height: 10 }
 * );
 * console.log(clamped); // { x: 10, y: 10 }
 * ```
 */
export function clampPointToRect(point: Point, bounds: Rect): Point {
  return {
    x: Math.max(bounds.x, Math.min(point.x, bounds.x + bounds.width)),
    y: Math.max(bounds.y, Math.min(point.y, bounds.y + bounds.height))
  };
}

/**
 * 计算点到矩形边缘的最短距离
 * 
 * @param point - 点坐标
 * @param rect - 矩形区域
 * @returns 最短距离
 * 
 * @example
 * ```ts
 * const dist = distanceToRect(
 *   { x: 15, y: 5 },
 *   { x: 0, y: 0, width: 10, height: 10 }
 * );
 * console.log(dist); // 5
 * ```
 */
export function distanceToRect(point: Point, rect: Rect): number {
  const dx = Math.max(rect.x - point.x, 0, point.x - (rect.x + rect.width));
  const dy = Math.max(rect.y - point.y, 0, point.y - (rect.y + rect.height));
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * 创建从两点定义的矩形
 * 
 * @param p1 - 第一个点（通常是起点）
 * @param p2 - 第二个点（通常是终点）
 * @returns 由两点定义的矩形
 * 
 * @example
 * ```ts
 * const rect = rectFromPoints({ x: 5, y: 5 }, { x: 10, y: 15 });
 * console.log(rect); // { x: 5, y: 5, width: 5, height: 10 }
 * ```
 */
export function rectFromPoints(p1: Point, p2: Point): Rect {
  const x = Math.min(p1.x, p2.x);
  const y = Math.min(p1.y, p2.y);
  const width = Math.abs(p2.x - p1.x);
  const height = Math.abs(p2.y - p1.y);
  
  return { x, y, width, height };
}
