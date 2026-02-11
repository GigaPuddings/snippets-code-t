/**
 * OCR Web Worker
 * 在独立线程中处理 OCR 识别，避免阻塞主线程
 */

import type { Worker as TesseractWorker } from 'tesseract.js'

// Worker 消息类型
interface OCRRequest {
  type: 'recognize'
  imageData: ImageData
  language?: string
}

/** OCR 识别结果数据 */
interface OCRResultData {
  text: string
  confidence: number
  blocks: unknown[]
}

interface OCRResponse {
  type: 'success' | 'error'
  data?: OCRResultData
  error?: string
}

// 导入 Tesseract (需要在 worker 中使用)
let tesseractWorker: TesseractWorker | null = null

// 初始化 Tesseract Worker
async function initTesseract() {
  if (tesseractWorker) return tesseractWorker

  try {
    // 动态导入 Tesseract
    const Tesseract = await import('tesseract.js')
    
    tesseractWorker = await Tesseract.createWorker('eng+chi_sim', 1, {
      logger: () => {} // 禁用日志以提升性能
    })

    return tesseractWorker
  } catch (error) {
    throw new Error(`Tesseract 初始化失败: ${error}`)
  }
}

// 处理 OCR 识别请求
async function handleRecognize(imageData: ImageData, _language?: string): Promise<OCRResultData> {
  try {
    const worker = await initTesseract()
    
    // 创建临时 canvas 用于 OCR
    const canvas = new OffscreenCanvas(imageData.width, imageData.height)
    const ctx = canvas.getContext('2d')
    
    if (!ctx) {
      throw new Error('无法获取 OffscreenCanvas 上下文')
    }

    ctx.putImageData(imageData, 0, 0)

    // 执行 OCR 识别
    const result = await worker.recognize(canvas)

    return {
      text: result.data.text,
      confidence: result.data.confidence,
      blocks: result.data.blocks || []
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    throw new Error(`OCR 识别失败: ${errorMessage}`)
  }
}

// 监听主线程消息
self.onmessage = async (event: MessageEvent<OCRRequest>) => {
  const { type, imageData, language } = event.data

  try {
    switch (type) {
      case 'recognize': {
        const result = await handleRecognize(imageData, language)
        const response: OCRResponse = {
          type: 'success',
          data: result
        }
        self.postMessage(response)
        break
      }
      default:
        throw new Error(`未知的消息类型: ${type}`)
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    const response: OCRResponse = {
      type: 'error',
      error: errorMessage
    }
    self.postMessage(response)
  }
}

// 清理资源
self.addEventListener('unload', async () => {
  if (tesseractWorker) {
    await tesseractWorker.terminate()
    tesseractWorker = null
  }
})

export {}
