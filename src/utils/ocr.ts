import { createWorker, Worker, LoggerMessage } from 'tesseract.js'
import { logger } from './logger'

export interface OcrTextBlock {
  text: string
  x: number
  y: number
  width: number
  height: number
  angle: number
  confidence: number
}

export interface OcrResult {
  blocks: OcrTextBlock[]
  full_text: string
  language: string
  confidence: number
}

// Worker 实例缓存
let worker: Worker | null = null
let isInitializing = false
let initPromise: Promise<Worker> | null = null

/**
 * 初始化 Tesseract Worker
 */
async function getWorker(): Promise<Worker> {
  if (worker) {
    return worker
  }
  
  if (isInitializing && initPromise) {
    return initPromise
  }
  
  isInitializing = true
  initPromise = (async () => {
    logger.info('[OCR] 初始化 Tesseract Worker...')
    
    const newWorker = await createWorker('eng+chi_sim', 1, {
      logger: (m: LoggerMessage) => {
        if (m.status === 'recognizing text') {
          logger.info(`[OCR] 识别进度: ${Math.round(m.progress * 100)}%`)
        }
      }
    })
    
    logger.info('[OCR] Tesseract Worker 初始化完成')
    worker = newWorker
    isInitializing = false
    return newWorker
  })()
  
  return initPromise
}

/**
 * 执行 OCR 识别
 * @param imageSource 图像源（可以是 base64、URL、Canvas、ImageData 等）
 */
export async function recognizeText(imageSource: string | HTMLCanvasElement | ImageData): Promise<OcrResult> {
  const w = await getWorker()
  
  logger.info('[OCR] 开始 Tesseract OCR 识别...')
  const startTime = Date.now()
  
  const result = await w.recognize(imageSource)
  
  const elapsed = Date.now() - startTime
  logger.info(`[OCR] 识别完成，耗时: ${elapsed}ms`)
  
  // 解析识别结果
  const blocks: OcrTextBlock[] = []
  const data = result.data as any
  
  // Tesseract.js 返回的数据结构中，lines/paragraphs/words 可能为 undefined
  // 直接使用 data.text 按行分割创建块
  if (data.text && data.text.trim()) {
    const textLines = data.text.split('\n').filter((line: string) => line.trim())
    
    for (const lineText of textLines) {
      const trimmedText = lineText.trim()
      if (!trimmedText) continue
      
      // 位置信息由后端 Windows OCR 提供，这里只需要文字内容
      blocks.push({
        text: trimmedText,
        x: 0,
        y: blocks.length * 30,
        width: trimmedText.length * 8,
        height: 24,
        angle: 0,
        confidence: data.confidence || 0
      })
    }
  }
  
  // 检测语言（基于识别结果中的字符）
  const fullText = data.text || ''
  const language = detectLanguage(fullText)
  
  logger.info(`[OCR] 识别到 ${blocks.length} 行文本`)
  logger.info(`[OCR] 检测语言: ${language}`)
  logger.info(`[OCR] 平均置信度: ${(data.confidence || 0).toFixed(1)}%`)
  
  return {
    blocks,
    full_text: fullText,
    language,
    confidence: data.confidence || 0
  }
}

/**
 * 从 Canvas 执行 OCR 识别
 */
export async function recognizeFromCanvas(canvas: HTMLCanvasElement): Promise<OcrResult> {
  return recognizeText(canvas)
}

/**
 * 从 Base64 图像执行 OCR 识别
 */
export async function recognizeFromBase64(base64: string): Promise<OcrResult> {
  // 确保有正确的 data URL 前缀
  const dataUrl = base64.startsWith('data:') ? base64 : `data:image/png;base64,${base64}`
  return recognizeText(dataUrl)
}

/**
 * 检测文本语言
 */
function detectLanguage(text: string): string {
  // 统计中文字符数量
  const chineseChars = text.match(/[\u4e00-\u9fa5]/g)?.length || 0
  // 统计英文字符数量
  const englishChars = text.match(/[a-zA-Z]/g)?.length || 0
  
  const totalChars = chineseChars + englishChars
  if (totalChars === 0) return 'unknown'
  
  const chineseRatio = chineseChars / totalChars
  
  if (chineseRatio > 0.3) {
    return 'chi_sim' // 中文
  }
  return 'eng' // 英文
}

/**
 * 预热 Worker（可选，用于提前加载）
 */
export async function warmupOcr(): Promise<void> {
  await getWorker()
}

/**
 * 销毁 Worker（释放资源）
 */
export async function terminateOcr(): Promise<void> {
  if (worker) {
    await worker.terminate()
    worker = null
    logger.info('[OCR] Tesseract Worker 已销毁')
  }
}
