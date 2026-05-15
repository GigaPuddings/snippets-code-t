/**
 * 懒加载模块管理器
 * 延迟加载非关键功能模块
 */
export class LazyLoader {
  private static loadedModules = new Map<string, any>()
  private static loadingPromises = new Map<string, Promise<any>>()

  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const moduleKey = 'ocr'
    
    if (this.loadedModules.has(moduleKey)) {
      return this.loadedModules.get(moduleKey)
    }

    if (this.loadingPromises.has(moduleKey)) {
      return this.loadingPromises.get(moduleKey)
    }

    const loadPromise = import('@/utils/ocr').then(module => {
      this.loadedModules.set(moduleKey, module)
      this.loadingPromises.delete(moduleKey)
      return module
    })

    this.loadingPromises.set(moduleKey, loadPromise)
    return loadPromise
  }

  /**
   * 懒加载离线翻译模块
   */
  static async loadOfflineTranslator() {
    const moduleKey = 'offlineTranslator'
    
    if (this.loadedModules.has(moduleKey)) {
      return this.loadedModules.get(moduleKey)
    }

    if (this.loadingPromises.has(moduleKey)) {
      return this.loadingPromises.get(moduleKey)
    }

    const loadPromise = import('@/utils/offlineTranslator').then(module => {
      this.loadedModules.set(moduleKey, module)
      this.loadingPromises.delete(moduleKey)
      return module
    })

    this.loadingPromises.set(moduleKey, loadPromise)
    return loadPromise
  }

  /**
   * 预加载模块（在空闲时）
   */
  static preloadModules() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // 在浏览器空闲时预加载
        this.loadOCR().catch(() => {})
        this.loadOfflineTranslator().catch(() => {})
      }, { timeout: 2000 })
    } else {
      // 降级方案：延迟加载
      setTimeout(() => {
        this.loadOCR().catch(() => {})
        this.loadOfflineTranslator().catch(() => {})
      }, 1000)
    }
  }

  /**
   * 清除已加载的模块
   */
  static clear() {
    this.loadedModules.clear()
    this.loadingPromises.clear()
  }

  /**
   * 获取加载状态
   */
  static getLoadStatus() {
    return {
      loaded: Array.from(this.loadedModules.keys()),
      loading: Array.from(this.loadingPromises.keys())
    }
  }
}
