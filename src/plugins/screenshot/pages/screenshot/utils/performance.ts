/**
 * 性能优化工具函数
 * 
 * 提供节流、防抖、对象池等性能优化功能
 */

import type { Point } from '../core/types';

/**
 * 节流函数
 * 
 * 限制函数在指定时间内只能执行一次
 * 
 * @param fn - 要节流的函数
 * @param delay - 延迟时间（毫秒）
 * @returns 节流后的函数
 * 
 * @example
 * ```ts
 * const handleScroll = throttle(() => {
 *   console.log('Scrolling...');
 * }, 100);
 * 
 * window.addEventListener('scroll', handleScroll);
 * ```
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: number | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;
    
    if (timeSinceLastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    } else {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        lastCall = Date.now();
        fn.apply(this, args);
      }, delay - timeSinceLastCall);
    }
  };
}

/**
 * 防抖函数
 * 
 * 延迟执行函数，如果在延迟期间再次调用，则重新计时
 * 
 * @param fn - 要防抖的函数
 * @param delay - 延迟时间（毫秒）
 * @returns 防抖后的函数
 * 
 * @example
 * ```ts
 * const handleInput = debounce((value: string) => {
 *   console.log('Input:', value);
 * }, 300);
 * 
 * input.addEventListener('input', (e) => {
 *   handleInput(e.target.value);
 * });
 * ```
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: number | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = window.setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * 使用 requestAnimationFrame 的节流函数
 * 
 * 确保函数在每一帧最多执行一次
 * 
 * @param fn - 要节流的函数
 * @returns 节流后的函数
 * 
 * @example
 * ```ts
 * const handleMouseMove = rafThrottle((e: MouseEvent) => {
 *   console.log('Mouse position:', e.clientX, e.clientY);
 * });
 * 
 * canvas.addEventListener('mousemove', handleMouseMove);
 * ```
 */
export function rafThrottle<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null;
  let latestArgs: Parameters<T> | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    latestArgs = args;
    
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        if (latestArgs !== null) {
          fn.apply(this, latestArgs);
          latestArgs = null;
        }
        rafId = null;
      });
    }
  };
}

/**
 * 对象池类
 * 
 * 用于复用对象，减少 GC 压力
 * 
 * @example
 * ```ts
 * const pointPool = new ObjectPool<Point>(
 *   () => ({ x: 0, y: 0 }),
 *   (point) => { point.x = 0; point.y = 0; }
 * );
 * 
 * const point = pointPool.acquire();
 * point.x = 10;
 * point.y = 20;
 * // 使用完后释放
 * pointPool.release(point);
 * ```
 */
export class ObjectPool<T> {
  private pool: T[] = [];
  private createFn: () => T;
  private resetFn?: (obj: T) => void;
  private maxSize: number;
  
  /**
   * 创建对象池
   * 
   * @param createFn - 创建新对象的函数
   * @param resetFn - 重置对象的函数（可选）
   * @param maxSize - 池的最大大小（默认 100）
   */
  constructor(
    createFn: () => T,
    resetFn?: (obj: T) => void,
    maxSize: number = 100
  ) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.maxSize = maxSize;
  }
  
  /**
   * 从池中获取对象
   * 
   * @returns 对象实例
   */
  acquire(): T {
    if (this.pool.length > 0) {
      return this.pool.pop()!;
    }
    return this.createFn();
  }
  
  /**
   * 将对象释放回池中
   * 
   * @param obj - 要释放的对象
   */
  release(obj: T): void {
    if (this.pool.length < this.maxSize) {
      if (this.resetFn) {
        this.resetFn(obj);
      }
      this.pool.push(obj);
    }
  }
  
  /**
   * 清空对象池
   */
  clear(): void {
    this.pool = [];
  }
  
  /**
   * 获取池中对象数量
   */
  get size(): number {
    return this.pool.length;
  }
}

/**
 * 批处理函数
 * 
 * 将多次调用合并为一次批量处理
 * 
 * @param fn - 批处理函数
 * @param delay - 延迟时间（毫秒）
 * @returns 批处理包装函数
 * 
 * @example
 * ```ts
 * const batchUpdate = batch((items: string[]) => {
 *   console.log('Updating items:', items);
 * }, 100);
 * 
 * batchUpdate('item1');
 * batchUpdate('item2');
 * batchUpdate('item3');
 * // 100ms 后一次性处理: ['item1', 'item2', 'item3']
 * ```
 */
export function batch<T>(
  fn: (items: T[]) => void,
  delay: number
): (item: T) => void {
  let items: T[] = [];
  let timeoutId: number | null = null;
  
  return function(item: T) {
    items.push(item);
    
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = window.setTimeout(() => {
      fn(items);
      items = [];
      timeoutId = null;
    }, delay);
  };
}

/**
 * 缓存函数结果
 * 
 * 使用 LRU 缓存策略缓存函数结果
 * 
 * @param fn - 要缓存的函数
 * @param maxSize - 缓存最大大小（默认 100）
 * @returns 带缓存的函数
 * 
 * @example
 * ```ts
 * const expensiveCalculation = memoize((x: number, y: number) => {
 *   console.log('Calculating...');
 *   return x * y;
 * });
 * 
 * console.log(expensiveCalculation(2, 3)); // Calculating... 6
 * console.log(expensiveCalculation(2, 3)); // 6 (从缓存读取)
 * ```
 */
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  maxSize: number = 100
): T {
  const cache = new Map<string, ReturnType<T>>();
  const keys: string[] = [];
  
  return function(this: any, ...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    
    const result = fn.apply(this, args);
    
    cache.set(key, result);
    keys.push(key);
    
    // LRU: 如果超过最大大小，删除最旧的
    if (keys.length > maxSize) {
      const oldestKey = keys.shift()!;
      cache.delete(oldestKey);
    }
    
    return result;
  } as T;
}

/**
 * 测量函数执行时间
 * 
 * @param fn - 要测量的函数
 * @param label - 标签（用于日志）
 * @returns 包装后的函数
 * 
 * @example
 * ```ts
 * const slowFunction = measureTime(() => {
 *   // 耗时操作
 *   for (let i = 0; i < 1000000; i++) {}
 * }, 'Slow Function');
 * 
 * slowFunction(); // 控制台输出: Slow Function: 10.5ms
 * ```
 */
export function measureTime<T extends (...args: any[]) => any>(
  fn: T,
  label: string
): T {
  return function(this: any, ...args: Parameters<T>): ReturnType<T> {
    const start = performance.now();
    const result = fn.apply(this, args);
    const end = performance.now();
    console.log(`${label}: ${(end - start).toFixed(2)}ms`);
    return result;
  } as T;
}

/**
 * 创建点对象池
 * 
 * 预配置的点对象池，用于减少 Point 对象的创建和销毁
 * 
 * @returns Point 对象池实例
 * 
 * @example
 * ```ts
 * const pool = createPointPool();
 * const point = pool.acquire();
 * point.x = 10;
 * point.y = 20;
 * // 使用完后释放
 * pool.release(point);
 * ```
 */
export function createPointPool(): ObjectPool<Point> {
  return new ObjectPool<Point>(
    () => ({ x: 0, y: 0 }),
    (point) => {
      point.x = 0;
      point.y = 0;
    },
    200 // 点对象使用频繁，设置较大的池大小
  );
}
