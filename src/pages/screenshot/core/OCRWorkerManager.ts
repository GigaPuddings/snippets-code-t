/**
 * OCR Worker 管理器
 * 管理 Web Worker 的创建、通信和销毁
 */
export class OCRWorkerManager {
  private static instance: OCRWorkerManager
  private worker: Worker | null = null
  private isInitialized = false
  private pendingRequests = new Map<number, {
    resolve: (value: any) => void
    reject: (reason: any) => void
  }>()
  private requestId = 0

  private constructor() {}

  static getInstance(): OCRWorkerManager {
    if (!OCRWorkerManager.instance) {
      OCRWorkerManager.instance = new OCRWorkerManager()
    }
    return OCRWorkerManager.instance
  }

  /**
   * 初始化 Worker
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return

    try {
      // 创建 Worker
      this.worker = new Worker(
        new URL('../../../workers/ocr.worker.ts', import.meta.url),
        { type: 'module' }
      )

      // 监听 Worker 消息
      this.worker.onmessage = (event) => {
        this.handleWorkerMessage(event)
      }

      // 监听 Worker 错误
      this.worker.onerror = (error) => {
        console.error('[OCR Worker] 错误:', error)
        this.rejectAllPending(new Error('Worker 发生错误'))
      }

      this.isInitialized = true
    } catch (error) {
      throw new Error(`Worker 初始化失败: ${error}`)
    }
  }

  /**
   * 处理 Worker 消息
   */
  private handleWorkerMessage(event: MessageEvent) {
    const { type, data, error, requestId } = event.data

    const pending = this.pendingRequests.get(requestId)
    if (!pending) return

    this.pendingRequests.delete(requestId)

    if (type === 'success') {
      pending.resolve(data)
    } else if (type === 'error') {
      pending.reject(new Error(error))
    }
  }

  /**
   * 执行 OCR 识别
   * @param imageData 图像数据
   * @param language 语言代码
   * @returns OCR 结果
   */
  async recognize(imageData: ImageData, language?: string): Promise<any> {
    if (!this.isInitialized) {
      await this.initialize()
    }

    if (!this.worker) {
      throw new Error('Worker 未初始化')
    }

    return new Promise((resolve, reject) => {
      const id = this.requestId++
      
      this.pendingRequests.set(id, { resolve, reject })

      // 发送消息到 Worker
      this.worker!.postMessage({
        type: 'recognize',
        imageData,
        language,
        requestId: id
      })

      // 设置超时
      setTimeout(() => {
        if (this.pendingRequests.has(id)) {
          this.pendingRequests.delete(id)
          reject(new Error('OCR 识别超时'))
        }
      }, 30000) // 30秒超时
    })
  }

  /**
   * 拒绝所有待处理的请求
   */
  private rejectAllPending(error: Error) {
    this.pendingRequests.forEach(({ reject }) => {
      reject(error)
    })
    this.pendingRequests.clear()
  }

  /**
   * 销毁 Worker
   */
  destroy() {
    if (this.worker) {
      this.rejectAllPending(new Error('Worker 已销毁'))
      this.worker.terminate()
      this.worker = null
      this.isInitialized = false
    }
  }

  /**
   * 获取状态
   */
  getStatus() {
    return {
      isInitialized: this.isInitialized,
      pendingRequests: this.pendingRequests.size
    }
  }
}
