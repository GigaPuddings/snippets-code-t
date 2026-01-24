/**
 * Canvas 池化管理器
 * 复用 canvas 对象减少创建销毁开销
 */
export class CanvasPool {
  private static instance: CanvasPool
  private pool: HTMLCanvasElement[] = []
  private maxPoolSize = 5 // 最大池大小
  private inUse = new Set<HTMLCanvasElement>()

  private constructor() {}

  static getInstance(): CanvasPool {
    if (!CanvasPool.instance) {
      CanvasPool.instance = new CanvasPool()
    }
    return CanvasPool.instance
  }

  /**
   * 获取一个 canvas 对象
   * @param width 宽度
   * @param height 高度
   * @returns canvas 对象
   */
  acquire(width: number, height: number): HTMLCanvasElement {
    // 尝试从池中获取合适的 canvas
    const index = this.pool.findIndex(canvas => 
      canvas.width >= width && 
      canvas.height >= height &&
      !this.inUse.has(canvas)
    )

    let canvas: HTMLCanvasElement

    if (index !== -1) {
      // 从池中取出
      canvas = this.pool[index]
      this.pool.splice(index, 1)
    } else {
      // 创建新的 canvas
      canvas = document.createElement('canvas')
    }

    // 设置尺寸
    canvas.width = width
    canvas.height = height

    // 清空内容
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, width, height)
    }

    // 标记为使用中
    this.inUse.add(canvas)

    return canvas
  }

  /**
   * 释放 canvas 对象回池中
   * @param canvas 要释放的 canvas
   */
  release(canvas: HTMLCanvasElement): void {
    if (!this.inUse.has(canvas)) {
      return
    }

    // 从使用中移除
    this.inUse.delete(canvas)

    // 如果池未满，放回池中
    if (this.pool.length < this.maxPoolSize) {
      // 清空内容以释放内存
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      this.pool.push(canvas)
    }
    // 否则让 GC 回收
  }

  /**
   * 清空池
   */
  clear(): void {
    this.pool = []
    this.inUse.clear()
  }

  /**
   * 获取池状态
   */
  getStats(): { poolSize: number; inUse: number } {
    return {
      poolSize: this.pool.length,
      inUse: this.inUse.size
    }
  }
}
