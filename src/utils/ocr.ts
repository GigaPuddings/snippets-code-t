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

/** 图像预处理：增强对比度和反色处理 */
function preprocessCanvas(canvas: HTMLCanvasElement): HTMLCanvasElement {
  const ctx = canvas.getContext('2d')
  if (!ctx) return canvas
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data
  
  // 1. 转换为灰度
  const grayValues: number[] = []
  for (let i = 0; i < data.length; i += 4) {
    const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
    grayValues.push(gray)
    data[i] = data[i + 1] = data[i + 2] = gray
  }
  
  // 2. 计算平均亮度，判断是否为深色背景
  const avgBrightness = grayValues.reduce((a, b) => a + b, 0) / grayValues.length
  const isDarkBackground = avgBrightness < 128
  
  logger.debug(`[OCR] 图像预处理: 平均亮度=${avgBrightness.toFixed(1)}, 深色背景=${isDarkBackground}`)
  
  // 3. 如果是深色背景，反转颜色（让文字变黑，背景变白）
  if (isDarkBackground) {
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]
      data[i + 1] = 255 - data[i + 1]
      data[i + 2] = 255 - data[i + 2]
    }
  }
  
  // 4. 增强对比度（使用更激进的 S 曲线）
  for (let i = 0; i < data.length; i += 4) {
    const value = data[i]
    // 使用更强的 S 曲线增强对比度
    const normalized = value / 255
    const enhanced = normalized < 0.5 
      ? Math.pow(normalized * 2, 2) * 0.5 
      : 1 - Math.pow((1 - normalized) * 2, 2) * 0.5
    data[i] = data[i + 1] = data[i + 2] = Math.round(enhanced * 255)
  }
  
  // 5. 自适应二值化（Otsu's method）
  let histogram = new Array(256).fill(0)
  for (let i = 0; i < data.length; i += 4) {
    histogram[data[i]]++
  }
  
  const total = canvas.width * canvas.height
  let sum = 0
  for (let i = 0; i < 256; i++) {
    sum += i * histogram[i]
  }
  
  let sumB = 0
  let wB = 0
  let wF = 0
  let maxVariance = 0
  let threshold = 128
  
  for (let i = 0; i < 256; i++) {
    wB += histogram[i]
    if (wB === 0) continue
    
    wF = total - wB
    if (wF === 0) break
    
    sumB += i * histogram[i]
    const mB = sumB / wB
    const mF = (sum - sumB) / wF
    const variance = wB * wF * (mB - mF) * (mB - mF)
    
    if (variance > maxVariance) {
      maxVariance = variance
      threshold = i
    }
  }
  
  logger.debug(`[OCR] 二值化阈值: ${threshold}`)
  
  // 应用二值化
  for (let i = 0; i < data.length; i += 4) {
    const value = data[i] > threshold ? 255 : 0
    data[i] = data[i + 1] = data[i + 2] = value
  }
  
  ctx.putImageData(imageData, 0, 0)
  return canvas
}

/** 从 Canvas 执行 OCR 识别 */
export async function recognizeFromCanvas(canvas: HTMLCanvasElement): Promise<OcrResult> {
  const w = await getWorker()
  
  logger.info('[OCR] 开始 Tesseract OCR 识别...')
  const startTime = Date.now()
  
  // 预处理图像：增强对比度和二值化
  const processedCanvas = document.createElement('canvas')
  processedCanvas.width = canvas.width
  processedCanvas.height = canvas.height
  const ctx = processedCanvas.getContext('2d')
  
  if (!ctx) {
    logger.warn('[OCR] 无法获取 canvas context，使用原始图像')
    // 回退到原始 canvas
    const result = await w.recognize(canvas, {}, {
      blocks: true,
      layoutBlocks: true,
      text: true,
    })
    return processResult(result, startTime)
  }
  
  // 复制并预处理图像
  ctx.drawImage(canvas, 0, 0)
  preprocessCanvas(processedCanvas)
  
  const result = await w.recognize(processedCanvas, {}, {
    blocks: true,
    layoutBlocks: true,
    text: true,
  })
  
  return processResult(result, startTime)
}

/** 处理 OCR 识别结果 */
function processResult(result: any, startTime: number): OcrResult {
  
  logger.info(`[OCR] 识别完成，耗时: ${Date.now() - startTime}ms`)
  
  const data = result.data as any
  const blocks: OcrTextBlock[] = []
  const CONFIDENCE_THRESHOLD = 85 // 置信度阈值：低于85%的文字块将被过滤
  
  // 收集所有 lines: data.blocks[].paragraphs[].lines[]
  const allLines: any[] = []
  for (const block of data.blocks || []) {
    for (const para of block.paragraphs || []) {
      allLines.push(...(para.lines || []))
    }
  }
  
  logger.debug(`[OCR] 原始数据: blocks=${data.blocks?.length || 0}, lines=${allLines.length}`)
  
  let filteredCount = 0
  
  // 从 lines 提取文本块
  if (allLines.length > 0) {
    logger.debug('[OCR] 使用 lines 数据提取文本块')
    for (const line of allLines) {
      const rawText = line.text?.trim()
      if (!rawText) continue
      
      const bbox = line.bbox
      const fontInfo = extractFontInfo(line, data.confidence || 0)
      
      // 过滤低置信度文字块
      if (fontInfo.confidence < CONFIDENCE_THRESHOLD) {
        filteredCount++
        logger.debug(`[OCR] 过滤低置信度文字块 (${fontInfo.confidence.toFixed(1)}%): "${rawText.substring(0, 20)}${rawText.length > 20 ? '...' : ''}"`)
        continue
      }
      
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
    
    // 如果整体置信度太低，直接跳过
    if (overallConfidence < CONFIDENCE_THRESHOLD) {
      logger.debug(`[OCR] 整体置信度过低 (${overallConfidence.toFixed(1)}%)，跳过回退方案`)
    } else {
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
  }
  
  // 重新计算完整文本（仅包含高置信度的文字块）
  const fullText = blocks.map(b => b.text).join('\n')
  const language = detectLanguage(fullText)
  
  if (filteredCount > 0) {
    logger.info(`[OCR] 识别到 ${blocks.length} 个有效文本块 (过滤了 ${filteredCount} 个低置信度块), 语言: ${language}, 平均置信度: ${(data.confidence || 0).toFixed(1)}%`)
  } else {
    logger.info(`[OCR] 识别到 ${blocks.length} 个文本块, 语言: ${language}, 置信度: ${(data.confidence || 0).toFixed(1)}%`)
  }
  
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
