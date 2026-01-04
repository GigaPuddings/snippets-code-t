import { createWorker, Worker, LoggerMessage } from 'tesseract.js'
import { logger } from './logger'

export interface OcrTextBlock {
  text: string
  x: number
  y: number
  width: number
  height: number
  fontSize: number
  lineHeight: number
  angle: number
  confidence: number
}

export interface OcrResult {
  blocks: OcrTextBlock[]
  full_text: string
  language: string
  confidence: number
}

// Worker 单例
let worker: Worker | null = null
let initPromise: Promise<Worker> | null = null

/** 获取或初始化 Tesseract Worker */
async function getWorker(): Promise<Worker> {
  if (worker) return worker
  if (initPromise) return initPromise
  
  initPromise = (async () => {
    logger.debug('[OCR] 初始化 Tesseract Worker...')
    const w = await createWorker('eng+chi_sim', 1, {
      logger: (m: LoggerMessage) => {
        if (m.status === 'recognizing text') {
          logger.debug(`[OCR] 识别进度: ${Math.round(m.progress * 100)}%`)
        }
      }
    })
    logger.info('[OCR] Tesseract Worker 初始化完成')
    worker = w
    return w
  })()
  
  return initPromise
}

/** 从 Tesseract 行数据提取字体信息 */
function extractFontInfo(line: any, defaultConfidence: number): { fontSize: number; lineHeight: number; confidence: number } {
  const bbox = line.bbox
  const rowAttrs = line.rowAttributes
  const bboxHeight = bbox ? bbox.y1 - bbox.y0 : 24
  
  let fontSize = 16
  let lineHeight = bboxHeight
  
  if (rowAttrs) {
    if (rowAttrs.ascenders !== undefined && rowAttrs.descenders !== undefined) {
      fontSize = Math.round(rowAttrs.ascenders + Math.abs(rowAttrs.descenders))
    } else if (rowAttrs.rowHeight !== undefined) {
      fontSize = Math.round(rowAttrs.rowHeight * 0.75)
    }
    if (rowAttrs.rowHeight !== undefined) {
      lineHeight = rowAttrs.rowHeight
    }
  } else {
    fontSize = Math.round(bboxHeight * 0.75)
  }
  
  return {
    fontSize,
    lineHeight,
    confidence: line.confidence || defaultConfidence
  }
}

/** 从 Canvas 执行 OCR 识别 */
export async function recognizeFromCanvas(canvas: HTMLCanvasElement): Promise<OcrResult> {
  const w = await getWorker()
  
  logger.info('[OCR] 开始 Tesseract OCR 识别...')
  const startTime = Date.now()
  
  const result = await w.recognize(canvas, {}, {
    blocks: true,
    layoutBlocks: true,
    text: true,
  })
  
  logger.info(`[OCR] 识别完成，耗时: ${Date.now() - startTime}ms`)
  
  const data = result.data as any
  const blocks: OcrTextBlock[] = []
  
  // 收集所有 lines: data.blocks[].paragraphs[].lines[]
  const allLines: any[] = []
  for (const block of data.blocks || []) {
    for (const para of block.paragraphs || []) {
      allLines.push(...(para.lines || []))
    }
  }
  
  logger.debug(`[OCR] 原始数据: blocks=${data.blocks?.length || 0}, lines=${allLines.length}`)
  
  // 从 lines 提取文本块
  if (allLines.length > 0) {
    logger.debug('[OCR] 使用 lines 数据提取文本块')
    for (const line of allLines) {
      const rawText = line.text?.trim()
      if (!rawText) continue
      
      const bbox = line.bbox
      const fontInfo = extractFontInfo(line, data.confidence || 0)
      
      // 清理乱码字符
      const text = cleanOcrText(rawText, fontInfo.confidence)
      if (!text) continue
      
      if (bbox?.x0 !== undefined) {
        blocks.push({
          text,
          x: bbox.x0,
          y: bbox.y0,
          width: bbox.x1 - bbox.x0,
          height: bbox.y1 - bbox.y0,
          fontSize: fontInfo.fontSize,
          lineHeight: fontInfo.lineHeight,
          angle: 0,
          confidence: fontInfo.confidence
        })
      } else {
        // bbox 无效，使用估算位置
        blocks.push({
          text,
          x: 0,
          y: blocks.length * 30,
          width: text.length * 12,
          height: 24,
          fontSize: 16,
          lineHeight: 24,
          angle: 0,
          confidence: fontInfo.confidence
        })
      }
    }
  }
  
  // 回退方案：从纯文本分行
  if (blocks.length === 0 && data.text?.trim()) {
    logger.debug('[OCR] 使用 text 分行回退方案')
    const lines = data.text.split('\n').filter((l: string) => l.trim())
    const overallConfidence = data.confidence || 0
    for (const line of lines) {
      const rawText = line.trim()
      // 清理乱码字符
      const text = cleanOcrText(rawText, overallConfidence)
      if (!text) continue
      
      blocks.push({
        text,
        x: 0,
        y: blocks.length * 30,
        width: text.length * 12,
        height: 24,
        fontSize: 16,
        lineHeight: 24,
        angle: 0,
        confidence: overallConfidence
      })
    }
  }
  
  const fullText = data.text || ''
  const language = detectLanguage(fullText)
  
  logger.info(`[OCR] 识别到 ${blocks.length} 个文本块, 语言: ${language}, 置信度: ${(data.confidence || 0).toFixed(1)}%`)
  
  return { blocks, full_text: fullText, language, confidence: data.confidence || 0 }
}

/** 清理 OCR 识别文本中的乱码 */
function cleanOcrText(text: string, confidence: number): string {
  // 智能检测第一个有效单词，过滤掉它之前的乱码
  // 有效单词定义：
  // - 英文：至少2个连续字母组成的单词
  // - 中文：至少2个连续的中文字符
  
  // 匹配第一个有效单词的位置
  const firstValidWordMatch = text.match(/[a-zA-Z]{2,}|[\u4e00-\u9fa5]{2,}/)
  
  if (firstValidWordMatch && firstValidWordMatch.index !== undefined) {
    const startIndex = firstValidWordMatch.index
    
    // 如果有效单词不在开头，检查前面的内容是否是乱码
    if (startIndex > 0) {
      const prefix = text.substring(0, startIndex)
      
      // 判断前缀是否为乱码：
      // - 不包含有意义的内容（没有连续2个以上的字母或中文）
      // - 置信度 <= 90% 时放宽限制，或者前缀很短（<=5字符）时直接移除
      const hasValidContent = /[a-zA-Z]{2,}|[\u4e00-\u9fa5]{2,}/.test(prefix)
      
      if (!hasValidContent) {
        // 前缀没有有效内容
        // 条件：置信度低 或 前缀很短（明显是乱码）
        if (confidence <= 90 || prefix.trim().length <= 5) {
          return text.substring(startIndex).trim()
        }
      }
    }
  }
  
  return text.trim()
}

/** 检测文本语言 */
function detectLanguage(text: string): string {
  const chineseChars = text.match(/[\u4e00-\u9fa5]/g)?.length || 0
  const englishChars = text.match(/[a-zA-Z]/g)?.length || 0
  const total = chineseChars + englishChars
  
  if (total === 0) return 'unknown'
  return chineseChars / total > 0.3 ? 'chi_sim' : 'eng'
}

/** 预热 Worker */
export async function warmupOcr(): Promise<void> {
  await getWorker()
}

/** 销毁 Worker */
export async function terminateOcr(): Promise<void> {
  if (worker) {
    await worker.terminate()
    worker = null
    initPromise = null
    logger.info('[OCR] Tesseract Worker 已销毁')
  }
}
