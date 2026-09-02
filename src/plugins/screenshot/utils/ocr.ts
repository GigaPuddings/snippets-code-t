import { invoke } from '@tauri-apps/api/core';
import { logger, ocrDiagnosticLogger } from '@/utils/logger';
import { detectLanguage } from '@/utils/text';

export interface OcrTextBlock {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
  lineHeight: number;
  angle: number;
  confidence: number;
}

export interface OcrResult {
  blocks: OcrTextBlock[];
  full_text: string;
  text: string;
  language: string;
  confidence: number;
  engine: string;
}

interface OcrTextBlockRow {
  centerY: number;
  blocks: OcrTextBlock[];
}

/**
 * Sort OCR blocks into the same visual reading order as the image.
 * OCR engines may return portions of one line out of order, which makes
 * browser text ranges skip content when the overlay is dragged across them.
 */
export function sortOcrTextBlocksByReadingOrder(
  blocks: OcrTextBlock[]
): OcrTextBlock[] {
  if (blocks.length <= 1) return [...blocks];

  const heights = blocks
    .map((block) => Math.max(block.height, block.lineHeight, block.fontSize, 1))
    .sort((left, right) => left - right);
  const medianHeight = heights[Math.floor(heights.length / 2)];
  const rowTolerance = Math.max(4, medianHeight * 0.6);
  const rows: OcrTextBlockRow[] = [];

  const blocksByVerticalCenter = [...blocks].sort((left, right) => {
    const leftCenter = left.y + Math.max(left.height, 1) / 2;
    const rightCenter = right.y + Math.max(right.height, 1) / 2;
    return leftCenter - rightCenter || left.x - right.x;
  });

  for (const block of blocksByVerticalCenter) {
    const centerY = block.y + Math.max(block.height, 1) / 2;
    const row = rows[rows.length - 1];
    if (row && Math.abs(row.centerY - centerY) <= rowTolerance) {
      const count = row.blocks.length;
      row.blocks.push(block);
      row.centerY = (row.centerY * count + centerY) / (count + 1);
      continue;
    }

    rows.push({ centerY, blocks: [block] });
  }

  return rows.flatMap((row) =>
    row.blocks.sort((left, right) => left.x - right.x || left.y - right.y)
  );
}

async function canvasToDataUrl(canvas: HTMLCanvasElement): Promise<string> {
  return canvas.toDataURL('image/png');
}

/**
 * 直接从 base64 图片数据调用 RapidOCR，返回带 bbox 的文字块。
 * 用于 Pin 窗口的透明文字选择层（参考 Umi-OCR 的实现方式）。
 */
export async function recognizeFromImageData(
  imageData: string,
  language: string = 'auto'
): Promise<OcrResult> {
  const startedAt = Date.now();

  ocrDiagnosticLogger.log('[RapidOCR] recognizeFromImageData start', {
    imageDataLength: imageData.length,
    language
  });

  try {
    const rawResult = await invoke<Record<string, unknown>>(
      'recognize_text_from_image',
      {
        imageData,
        engine: 'rapidocr',
        language
      }
    );

    const blocks = normalizeBlocks(rawResult.blocks);
    const fullText =
      (typeof rawResult.full_text === 'string' && rawResult.full_text) ||
      (typeof rawResult.text === 'string' && rawResult.text) ||
      blocks.map((block) => block.text).join('\n');

    const result: OcrResult = {
      blocks,
      full_text: fullText,
      text: fullText,
      language:
        (typeof rawResult.language === 'string' && rawResult.language) ||
        detectLanguage(fullText),
      confidence: Number(rawResult.confidence || 0),
      engine:
        typeof rawResult.engine === 'string' ? rawResult.engine : 'rapidocr'
    };

    ocrDiagnosticLogger.log('[RapidOCR] recognizeFromImageData success', {
      durationMs: Date.now() - startedAt,
      confidence: result.confidence,
      blocks: result.blocks.length,
      textLength: result.full_text.trim().length,
      textPreview: result.full_text.trim().slice(0, 300)
    });

    return result;
  } catch (error) {
    logger.error('[OCR] RapidOCR recognizeFromImageData failed', error);
    ocrDiagnosticLogger.log('[RapidOCR] recognizeFromImageData failed', {
      durationMs: Date.now() - startedAt,
      error:
        error instanceof Error
          ? `${error.name}: ${error.message}`
          : String(error)
    });
    throw error;
  }
}

function normalizeBlocks(blocks: unknown): OcrTextBlock[] {
  if (!Array.isArray(blocks)) {
    return [];
  }

  return blocks
    .map((block) => {
      if (!block || typeof block !== 'object') {
        return null;
      }

      const candidate = block as Record<string, unknown>;
      const text = typeof candidate.text === 'string' ? candidate.text : '';
      if (!text.trim()) {
        return null;
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
      };
    })
    .filter((block): block is OcrTextBlock => Boolean(block));
}

export async function recognizeFromCanvas(
  canvas: HTMLCanvasElement
): Promise<OcrResult> {
  const startedAt = Date.now();
  const imageData = await canvasToDataUrl(canvas);

  ocrDiagnosticLogger.log('[RapidOCR] recognizeFromCanvas start', {
    width: canvas.width,
    height: canvas.height
  });

  try {
    const rawResult = await invoke<Record<string, unknown>>(
      'recognize_text_from_image',
      {
        imageData,
        engine: 'rapidocr',
        language: 'auto'
      }
    );

    const blocks = normalizeBlocks(rawResult.blocks);
    const fullText =
      (typeof rawResult.full_text === 'string' && rawResult.full_text) ||
      (typeof rawResult.text === 'string' && rawResult.text) ||
      blocks.map((block) => block.text).join('\n');

    const result: OcrResult = {
      blocks,
      full_text: fullText,
      text: fullText,
      language:
        (typeof rawResult.language === 'string' && rawResult.language) ||
        detectLanguage(fullText),
      confidence: Number(rawResult.confidence || 0),
      engine:
        typeof rawResult.engine === 'string' ? rawResult.engine : 'rapidocr'
    };

    ocrDiagnosticLogger.log('[RapidOCR] recognizeFromCanvas success', {
      durationMs: Date.now() - startedAt,
      confidence: result.confidence,
      blocks: result.blocks.length,
      textLength: result.full_text.trim().length,
      textPreview: result.full_text.trim().slice(0, 300)
    });

    return result;
  } catch (error) {
    logger.error('[OCR] RapidOCR recognizeFromCanvas failed', error);
    ocrDiagnosticLogger.log('[RapidOCR] recognizeFromCanvas failed', {
      durationMs: Date.now() - startedAt,
      error:
        error instanceof Error
          ? `${error.name}: ${error.message}`
          : String(error)
    });
    throw error;
  }
}

export async function warmupOcr(): Promise<void> {
  return Promise.resolve();
}

export async function terminateOcr(): Promise<void> {
  return Promise.resolve();
}
