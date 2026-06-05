import { invoke } from '@tauri-apps/api/core'
import { logger, ocrDiagnosticLogger } from '@/utils/logger'
import { detectLanguage } from '@/utils/text'

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
  text: string
  language: string
  confidence: number
  engine: string
}

async function canvasToDataUrl(canvas: HTMLCanvasElement): Promise<string> {
  return canvas.toDataURL('image/png')
}

function normalizeBlocks(blocks: unknown): OcrTextBlock[] {
  if (!Array.isArray(blocks)) {
    return []
  }

  return blocks
    .map((block) => {
      if (!block || typeof block !== 'object') {
        return null
      }

      const candidate = block as Record<string, unknown>
      const text = typeof candidate.text === 'string' ? candidate.text : ''
      if (!text.trim()) {
        return null
      }

      return {
        text,
        x: Number(candidate.x || 0),
        y: Number(candidate.y || 0),
        width: Number(candidate.width || 0),
        height: Number(candidate.height || 0),
        fontSize: Number(candidate.fontSize || 0),
        lineHeight: Number(candidate.lineHeight || 0),
        angle: Number(candidate.angle || 0),
        confidence: Number(candidate.confidence || 0)
      }
    })
    .filter((block): block is OcrTextBlock => Boolean(block))
}

export async function recognizeFromCanvas(canvas: HTMLCanvasElement): Promise<OcrResult> {
  const startedAt = Date.now()
  const imageData = await canvasToDataUrl(canvas)

  ocrDiagnosticLogger.log('[RapidOCR] recognizeFromCanvas start', {
    width: canvas.width,
    height: canvas.height
  })

  try {
    const rawResult = await invoke<Record<string, unknown>>('recognize_text_from_image', {
      imageData,
      engine: 'rapidocr',
      language: 'auto'
    })

    const blocks = normalizeBlocks(rawResult.blocks)
    const fullText =
      (typeof rawResult.full_text === 'string' && rawResult.full_text) ||
      (typeof rawResult.text === 'string' && rawResult.text) ||
      blocks.map((block) => block.text).join('\n')

    const result: OcrResult = {
      blocks,
      full_text: fullText,
      text: fullText,
      language:
        (typeof rawResult.language === 'string' && rawResult.language) ||
        detectLanguage(fullText),
      confidence: Number(rawResult.confidence || 0),
      engine: typeof rawResult.engine === 'string' ? rawResult.engine : 'rapidocr'
    }

    ocrDiagnosticLogger.log('[RapidOCR] recognizeFromCanvas success', {
      durationMs: Date.now() - startedAt,
      confidence: result.confidence,
      blocks: result.blocks.length,
      textLength: result.full_text.trim().length,
      textPreview: result.full_text.trim().slice(0, 300)
    })

    return result
  } catch (error) {
    logger.error('[OCR] RapidOCR recognizeFromCanvas failed', error)
    ocrDiagnosticLogger.log('[RapidOCR] recognizeFromCanvas failed', {
      durationMs: Date.now() - startedAt,
      error: error instanceof Error ? `${error.name}: ${error.message}` : String(error)
    })
    throw error
  }
}

export async function warmupOcr(): Promise<void> {
  return Promise.resolve()
}

export async function terminateOcr(): Promise<void> {
  return Promise.resolve()
}
