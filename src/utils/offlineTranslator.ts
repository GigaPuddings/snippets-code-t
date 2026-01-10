import { pipeline, TranslationPipeline, env } from '@huggingface/transformers'
import { logger } from './logger'

// 配置 Transformers.js 环境
// 强制使用浏览器缓存，避免重复下载
env.useBrowserCache = true
env.allowRemoteModels = true

// 翻译管道缓存
let translatorEnZh: TranslationPipeline | null = null
let isInitializing = false
let initPromise: Promise<TranslationPipeline> | null = null

// 取消控制
let abortController: AbortController | null = null

// 进度回调
let progressCallback: ((progress: ProgressInfo) => void) | null = null

// 进度信息类型
export interface ProgressInfo {
  status: 'initiate' | 'progress' | 'done'
  progress?: number
  file?: string
}

// 文件下载状态
export interface FileDownloadStatus {
  file: string
  progress: number
  status: 'pending' | 'downloading' | 'done' | 'error'
  size?: string
}

// 模型配置 - 使用更小的模型
const MODEL_EN_ZH = 'Xenova/opus-mt-en-zh'

// 模型文件列表（按下载顺序）
const MODEL_FILES = [
  { name: 'tokenizer_config.json', size: '~1KB' },
  { name: 'config.json', size: '~1KB' },
  { name: 'tokenizer.json', size: '~2MB' },
  { name: 'generation_config.json', size: '~1KB' },
  { name: 'onnx/encoder_model_quantized.onnx', size: '~75MB' },
  { name: 'onnx/decoder_model_merged_quantized.onnx', size: '~220MB' }
]

// 模型加载超时时间（毫秒）
const MODEL_LOAD_TIMEOUT = 300000 // 5分钟，大文件需要更长时间

/**
 * 设置进度回调
 */
export function setProgressCallback(callback: ((progress: ProgressInfo) => void) | null): void {
  progressCallback = callback
}

/**
 * 获取模型文件列表
 */
export function getModelFiles(): typeof MODEL_FILES {
  return MODEL_FILES
}

/**
 * 带超时的 Promise
 */
function withTimeout<T>(promise: Promise<T>, ms: number, message: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => 
      setTimeout(() => reject(new Error(message)), ms)
    )
  ])
}

/**
 * 初始化英译中翻译器
 */
async function getTranslator(): Promise<TranslationPipeline> {
  if (translatorEnZh) return translatorEnZh
  if (initPromise) return initPromise

  isInitializing = true
  logger.info('[离线翻译] 正在加载翻译模型...')

  initPromise = (async () => {
    try {
      // 确保允许使用缓存
      env.useBrowserCache = true
      env.allowRemoteModels = true
      
      let lastLoggedFile = ''
      
      const loadPromise = pipeline('translation', MODEL_EN_ZH, {
        dtype: 'q8',
        device: 'wasm',
        revision: 'main',
        progress_callback: (progress: { status: string; progress?: number; file?: string }) => {
          // 只在文件完成时打印日志，避免过多的进度日志
          if (progress.status === 'done' && progress.file && progress.file !== lastLoggedFile) {
            lastLoggedFile = progress.file
            logger.info(`[离线翻译] 已加载: ${progress.file}`)
          }
          // 调用外部进度回调（用于设置页面显示下载进度）
          if (progressCallback) {
            progressCallback({
              status: progress.status as ProgressInfo['status'],
              progress: progress.progress,
              file: progress.file
            })
          }
        }
      })
      
      const translator = await withTimeout(
        loadPromise,
        MODEL_LOAD_TIMEOUT,
        '模型加载超时，请检查网络连接后重试'
      )
      
      translatorEnZh = translator as TranslationPipeline
      logger.info('[离线翻译] 翻译模型加载完成')
      isInitializing = false
      return translatorEnZh
    } catch (error) {
      isInitializing = false
      initPromise = null
      logger.error('[离线翻译] 模型加载失败:', error)
      throw error
    }
  })()

  return initPromise
}

/**
 * 离线翻译（英译中）
 * @param text 要翻译的英文文本
 * @returns 翻译后的中文文本
 */
export async function translateOffline(text: string): Promise<string> {
  if (!text?.trim()) return text

  // 创建新的取消控制器
  abortController = new AbortController()
  const signal = abortController.signal

  try {
    const translator = await getTranslator()
    
    // 检查是否已取消
    if (signal.aborted) {
      throw new Error('翻译已取消')
    }
    
    // 按段落分割翻译，保持格式
    const paragraphs = text.split('\n')
    const translatedParagraphs: string[] = []

    for (const paragraph of paragraphs) {
      // 每个段落翻译前检查是否取消
      if (signal.aborted) {
        throw new Error('翻译已取消')
      }
      
      const trimmed = paragraph.trim()
      if (!trimmed) {
        translatedParagraphs.push('')
        continue
      }

      // 翻译单个段落
      const result = await translator(trimmed)
      
      // 翻译后再次检查
      if (signal.aborted) {
        throw new Error('翻译已取消')
      }

      // 提取翻译结果
      if (Array.isArray(result) && result.length > 0) {
        const translated = (result[0] as any).translation_text || trimmed
        translatedParagraphs.push(translated)
      } else {
        translatedParagraphs.push(trimmed)
      }
    }

    return translatedParagraphs.join('\n')
  } catch (error) {
    if (error instanceof Error && error.message === '翻译已取消') {
      logger.info('[离线翻译] 翻译已取消')
      throw error
    }
    logger.error('[离线翻译] 翻译失败:', error)
    throw new Error('离线翻译失败，请检查模型是否正确加载')
  } finally {
    abortController = null
  }
}

/**
 * 取消正在进行的离线翻译
 */
export function cancelOfflineTranslation(): void {
  if (abortController) {
    abortController.abort()
    abortController = null
    logger.info('[离线翻译] 已发送取消信号')
  }
}

/**
 * 检查是否有正在进行的翻译
 */
export function isTranslationInProgress(): boolean {
  return abortController !== null
}

/**
 * 预热翻译器（用于提前加载模型）
 * @throws 如果加载失败会抛出异常
 */
export async function warmupOfflineTranslator(): Promise<void> {
  await getTranslator()
}

/**
 * 检查离线翻译是否可用（内存中已加载）
 */
export function isOfflineTranslatorReady(): boolean {
  return translatorEnZh !== null
}

/**
 * 检查是否正在初始化
 */
export function isOfflineTranslatorInitializing(): boolean {
  return isInitializing
}

/**
 * 获取模型缓存信息
 */
export interface ModelCacheInfo {
  isCached: boolean
  cacheType: 'indexeddb' | 'cache-storage' | 'none'
  cacheName?: string
  estimatedSize?: string
}

/**
 * 检查模型缓存是否存在并获取详细信息
 */
export async function getModelCacheInfo(): Promise<ModelCacheInfo> {
  try {
    // 检查 Cache Storage（Transformers.js 主要使用这个）
    if ('caches' in window) {
      const cacheNames = await caches.keys()
      logger.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(cacheNames)}`)
      
      for (const name of cacheNames) {
        // Transformers.js 使用 'transformers-cache' 或类似名称
        if (name.includes('transformers') || name.includes('huggingface')) {
          const cache = await caches.open(name)
          const keys = await cache.keys()
          logger.info(`[离线翻译] Cache "${name}" 包含 ${keys.length} 个文件`)
          
          // 检查是否有 opus-mt-en-zh 模型文件
          const hasModel = keys.some(req => 
            req.url.includes('opus-mt-en-zh') || 
            req.url.includes('Xenova')
          )
          if (hasModel) {
            // 检查是否包含关键的 onnx 文件
            const hasOnnx = keys.some(req => req.url.includes('.onnx'))
            logger.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${hasOnnx}`)
            if (hasOnnx) {
              return {
                isCached: true,
                cacheType: 'cache-storage',
                cacheName: name,
                estimatedSize: '~300MB'
              }
            }
          }
        }
      }
    }

    // 检查 IndexedDB
    const databases = await indexedDB.databases()
    logger.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(databases.map(d => d.name))}`)
    
    for (const db of databases) {
      if (db.name && (
        db.name.includes('transformers') || 
        db.name.includes('huggingface') ||
        db.name.includes('onnx') ||
        db.name.includes('localforage')
      )) {
        logger.info(`[离线翻译] 找到 IndexedDB 缓存: ${db.name}`)
        return {
          isCached: true,
          cacheType: 'indexeddb',
          cacheName: db.name,
          estimatedSize: '~300MB'
        }
      }
    }

    logger.info('[离线翻译] 未找到模型缓存')
    return { isCached: false, cacheType: 'none' }
  } catch (error) {
    logger.warn('[离线翻译] 检查缓存失败:', error)
    return { isCached: false, cacheType: 'none' }
  }
}

/**
 * 检查模型缓存是否存在（简化版）
 */
export async function isModelCached(): Promise<boolean> {
  const info = await getModelCacheInfo()
  return info.isCached
}

/**
 * 检查离线翻译是否可用（模型已加载到内存）
 * 只有模型已激活才能使用离线翻译
 */
export function canUseOfflineTranslation(): boolean {
  return translatorEnZh !== null
}

/**
 * 释放翻译器资源
 */
export async function disposeOfflineTranslator(): Promise<void> {
  // 清除内存中的翻译器实例
  if (translatorEnZh) {
    try {
      await (translatorEnZh as any).dispose?.()
    } catch (e) {
      // ignore
    }
  }
  
  // 重置所有状态
  translatorEnZh = null
  initPromise = null
  isInitializing = false
  logger.info('[离线翻译] 翻译器已释放')
}

/**
 * 清除模型缓存（IndexedDB 和 Cache Storage）
 */
export async function clearModelCache(): Promise<void> {
  try {
    // 清除 IndexedDB 中的 transformers 缓存
    const databases = await indexedDB.databases()
    for (const db of databases) {
      if (db.name && (db.name.includes('transformers') || db.name.includes('onnx'))) {
        indexedDB.deleteDatabase(db.name)
        logger.info(`[离线翻译] 已删除 IndexedDB: ${db.name}`)
      }
    }

    // 清除 Cache Storage
    if ('caches' in window) {
      const cacheNames = await caches.keys()
      for (const name of cacheNames) {
        if (name.includes('transformers') || name.includes('onnx')) {
          await caches.delete(name)
          logger.info(`[离线翻译] 已删除 Cache: ${name}`)
        }
      }
    }

    logger.info('[离线翻译] 模型缓存已清除')
  } catch (error) {
    logger.error('[离线翻译] 清除缓存失败:', error)
    throw error
  }
}
