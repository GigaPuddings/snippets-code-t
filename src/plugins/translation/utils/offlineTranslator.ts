import { convertFileSrc } from '@tauri-apps/api/core';
import { getLocalPluginResourcePath } from '@/api/plugins';
import { logger } from '@/utils/logger';

interface TranslationPipeline {
  (text: string): Promise<unknown>;
  dispose?: () => Promise<void>;
}

interface TransformersModule {
  pipeline: (
    task: string,
    model: string,
    options: Record<string, unknown>
  ) => Promise<TranslationPipeline>;
  env: {
    useBrowserCache: boolean;
    allowRemoteModels: boolean;
    remoteHost?: string;
    remotePathTemplate?: string;
    allowLocalModels?: boolean;
    localModelPath?: string;
    backends?: {
      onnx?: {
        wasm?: {
          wasmPaths?: string | Record<string, string>;
          numThreads?: number;
        };
      };
    };
  };
}

const TRANSFORMERS_RUNTIME_ENTRY = 'resources/transformers/transformers.min.js';
const TRANSFORMERS_RUNTIME_PACKAGES = [
  'translation-offline-runtime',
  'translation'
];
const TRANSFORMERS_REMOTE_HOST = 'https://huggingface.co/';
const TRANSFORMERS_REMOTE_PATH_TEMPLATE = '{model}/resolve/{revision}/';
const DISABLED_LOCAL_MODEL_PATH =
  '/__snippets_code_disabled_transformers_local_models__/';
const TRANSFORMERS_WASM_FILES = [
  'ort-wasm-simd-threaded.wasm',
  'ort-wasm-simd.wasm',
  'ort-wasm-threaded.wasm',
  'ort-wasm.wasm'
];
const TRANSFORMERS_RUNTIME_RESOURCES = [
  TRANSFORMERS_RUNTIME_ENTRY,
  ...TRANSFORMERS_WASM_FILES.map(
    (fileName) => `resources/transformers/${fileName}`
  )
];
let transformersModulePromise: Promise<TransformersModule> | null = null;

export interface OfflineRuntimeCandidate {
  pluginId: string;
  runtimePath: string;
}

/**
 * 只有入口脚本和全部 ONNX WASM 文件都存在时，运行时才算完整安装。
 * 避免生产环境中资源包只下载了一部分，却被界面误判为安装成功。
 */
export async function getOfflineRuntimeCandidates(): Promise<
  OfflineRuntimeCandidate[]
> {
  const candidates: OfflineRuntimeCandidate[] = [];

  for (const pluginId of TRANSFORMERS_RUNTIME_PACKAGES) {
    const resourcePaths = await Promise.all(
      TRANSFORMERS_RUNTIME_RESOURCES.map((relativePath) =>
        getLocalPluginResourcePath(pluginId, relativePath)
      )
    );

    if (
      resourcePaths.every((resourcePath): resourcePath is string =>
        Boolean(resourcePath)
      )
    ) {
      candidates.push({ pluginId, runtimePath: resourcePaths[0] });
    }
  }

  return candidates;
}

const getLastPathSeparator = (
  value: string
): { index: number; length: number } => {
  const lowerValue = value.toLowerCase();
  const separators = [
    { index: value.lastIndexOf('/'), length: 1 },
    { index: value.lastIndexOf('\\'), length: 1 },
    { index: lowerValue.lastIndexOf('%5c'), length: 3 },
    { index: lowerValue.lastIndexOf('%2f'), length: 3 }
  ];

  return separators.reduce(
    (latest, current) => (current.index > latest.index ? current : latest),
    { index: -1, length: 0 }
  );
};

export const getRuntimeBaseUrl = (runtimeUrl: string): string => {
  const queryIndex = runtimeUrl.search(/[?#]/);
  const cleanUrl =
    queryIndex >= 0 ? runtimeUrl.slice(0, queryIndex) : runtimeUrl;
  const separator = getLastPathSeparator(cleanUrl);
  return separator.index >= 0
    ? cleanUrl.slice(0, separator.index + separator.length)
    : cleanUrl;
};

export const getRuntimeWasmPaths = (
  runtimeUrl: string
): Record<string, string> => {
  const runtimeBaseUrl = getRuntimeBaseUrl(runtimeUrl);
  return Object.fromEntries(
    TRANSFORMERS_WASM_FILES.map((fileName) => [
      fileName,
      `${runtimeBaseUrl}${fileName}`
    ])
  );
};

const configureTransformersEnvironment = (
  env: TransformersModule['env'],
  runtimeUrl?: string
): void => {
  env.useBrowserCache = true;
  env.allowRemoteModels = true;
  env.remoteHost = TRANSFORMERS_REMOTE_HOST;
  env.remotePathTemplate = TRANSFORMERS_REMOTE_PATH_TEMPLATE;
  env.allowLocalModels = false;
  env.localModelPath = DISABLED_LOCAL_MODEL_PATH;

  if (runtimeUrl) {
    env.backends ??= {};
    env.backends.onnx ??= {};
    env.backends.onnx.wasm ??= {};
    env.backends.onnx.wasm.wasmPaths = getRuntimeWasmPaths(runtimeUrl);
    env.backends.onnx.wasm.numThreads = 1;
  }
};

async function loadTransformersModule(): Promise<TransformersModule> {
  if (transformersModulePromise) return transformersModulePromise;

  transformersModulePromise = (async () => {
    const runtimeCandidates = await getOfflineRuntimeCandidates();
    let lastLoadError: unknown = null;

    for (const { pluginId, runtimePath } of runtimeCandidates) {
      const runtimeUrl = convertFileSrc(runtimePath);
      try {
        const module = (await import(
          /* @vite-ignore */ runtimeUrl
        )) as TransformersModule;
        configureTransformersEnvironment(module.env, runtimeUrl);
        logger.info(
          `[离线翻译] 已从插件资源加载 Transformers runtime: ${pluginId}`,
          {
            wasmPaths: module.env.backends?.onnx?.wasm?.wasmPaths,
            numThreads: module.env.backends?.onnx?.wasm?.numThreads,
            remoteHost: module.env.remoteHost,
            remotePathTemplate: module.env.remotePathTemplate,
            allowLocalModels: module.env.allowLocalModels,
            localModelPath: module.env.localModelPath
          }
        );
        return module;
      } catch (error) {
        lastLoadError = error;
        logger.warn(
          `[离线翻译] 无法加载插件运行时，尝试下一个候选包: ${pluginId}`,
          error
        );
      }
    }

    if (lastLoadError) {
      throw lastLoadError;
    }

    throw new Error(
      '离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包'
    );
  })().catch((error) => {
    transformersModulePromise = null;
    throw error;
  });

  return transformersModulePromise;
}

/** 安装完成后仅验证运行时模块，不触发模型下载。 */
export async function verifyOfflineTranslatorRuntime(): Promise<void> {
  await loadTransformersModule();
}

// 翻译管道缓存
let translatorEnZh: TranslationPipeline | null = null;
let isInitializing = false;
let initPromise: Promise<TranslationPipeline> | null = null;
let initializationGeneration = 0;

// 取消控制
let abortController: AbortController | null = null;

// 进度回调
let progressCallback: ((progress: ProgressInfo) => void) | null = null;

// 进度信息类型
export interface ProgressInfo {
  status: 'initiate' | 'progress' | 'done';
  progress?: number;
  file?: string;
}

// 文件下载状态
export interface FileDownloadStatus {
  file: string;
  progress: number;
  status: 'pending' | 'downloading' | 'done' | 'error';
  size?: string;
}

// 模型配置 - 使用更小的模型
const MODEL_EN_ZH = 'Xenova/opus-mt-en-zh';
const MODEL_CACHE_NAME = 'transformers-cache';
const MODEL_URL_PREFIX = `${TRANSFORMERS_REMOTE_HOST}${MODEL_EN_ZH}/resolve/main/`;

// 模型文件列表（按下载顺序）
const MODEL_FILES = [
  { name: 'tokenizer_config.json', size: '~1KB' },
  { name: 'config.json', size: '~1KB' },
  { name: 'tokenizer.json', size: '~6.4MB' },
  { name: 'generation_config.json', size: '~1KB' },
  { name: 'onnx/encoder_model_quantized.onnx', size: '~53MB' },
  { name: 'onnx/decoder_model_merged_quantized.onnx', size: '~60MB' }
];
// Transformers.js treats generation_config.json as optional.
const REQUIRED_MODEL_FILES = MODEL_FILES.filter(
  (file) => file.name !== 'generation_config.json'
);

// 模型加载超时时间（毫秒）
const MODEL_LOAD_TIMEOUT = 300000; // 5分钟，大文件需要更长时间

/**
 * 设置进度回调
 */
export function setProgressCallback(
  callback: ((progress: ProgressInfo) => void) | null
): void {
  progressCallback = callback;
}

/**
 * 获取模型文件列表
 */
export function getModelFiles(): typeof MODEL_FILES {
  return MODEL_FILES;
}

/**
 * 带超时的 Promise
 */
async function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  message: string
): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<T>((_, reject) => {
        timer = setTimeout(() => reject(new Error(message)), ms);
      })
    ]);
  } finally {
    clearTimeout(timer);
  }
}

/**
 * 初始化英译中翻译器
 */
async function getTranslator(
  localFilesOnly = false
): Promise<TranslationPipeline> {
  if (translatorEnZh) return translatorEnZh;
  if (initPromise) return initPromise;

  isInitializing = true;
  const generation = initializationGeneration;
  logger.info('[离线翻译] 正在加载翻译模型...');

  initPromise = (async () => {
    try {
      // loadTransformersModule 内部已调用 configureTransformersEnvironment(env, runtimeUrl)
      // 完成 wasmPaths 等全部环境配置，此处无需重复调用
      const { pipeline, env } = await loadTransformersModule();
      // v2 requires allowLocalModels=true with local_files_only. Cache lookup
      // runs first; the disabled local path cannot trigger a remote download.
      env.allowLocalModels = localFilesOnly;
      env.allowRemoteModels = !localFilesOnly;

      let lastLoggedFile = '';

      const translator = await pipeline('translation', MODEL_EN_ZH, {
        quantized: true,
        dtype: 'q8',
        device: 'wasm',
        revision: 'main',
        local_files_only: localFilesOnly,
        progress_callback: (progress: {
          status: string;
          progress?: number;
          file?: string;
        }) => {
          // 只在文件完成时打印日志，避免过多的进度日志
          if (
            progress.status === 'done' &&
            progress.file &&
            progress.file !== lastLoggedFile
          ) {
            lastLoggedFile = progress.file;
            logger.info(`[离线翻译] 已加载: ${progress.file}`);
          }
          // 调用外部进度回调（用于设置页面显示下载进度）
          if (progressCallback) {
            progressCallback({
              status: progress.status as ProgressInfo['status'],
              progress: progress.progress,
              file: progress.file
            });
          }
        }
      });

      if (generation !== initializationGeneration) {
        await translator.dispose?.();
        throw new Error('模型加载已取消');
      }
      translatorEnZh = translator;
      logger.info('[离线翻译] 翻译模型加载完成');
      isInitializing = false;
      return translatorEnZh;
    } catch (error) {
      isInitializing = false;
      initPromise = null;
      logger.error('[离线翻译] 模型加载失败:', error);
      throw error;
    }
  })();

  return initPromise;
}

/**
 * 离线翻译（英译中）
 * @param text 要翻译的英文文本
 * @returns 翻译后的中文文本
 */
export async function translateOffline(text: string): Promise<string> {
  if (!text?.trim()) return text;

  // 创建新的取消控制器
  abortController = new AbortController();
  const signal = abortController.signal;

  try {
    const translator = await withTimeout(
      getTranslator(true),
      MODEL_LOAD_TIMEOUT,
      '模型加载超时，当前加载仍在进行，请稍后重试'
    );

    // 检查是否已取消
    if (signal.aborted) {
      throw new Error('翻译已取消');
    }

    // 按段落分割翻译，保持格式
    const paragraphs = text.split('\n');
    const translatedParagraphs: string[] = [];

    for (const paragraph of paragraphs) {
      // 每个段落翻译前检查是否取消
      if (signal.aborted) {
        throw new Error('翻译已取消');
      }

      const trimmed = paragraph.trim();
      if (!trimmed) {
        translatedParagraphs.push('');
        continue;
      }

      // 翻译单个段落
      const result = await translator(trimmed);

      // 翻译后再次检查
      if (signal.aborted) {
        throw new Error('翻译已取消');
      }

      // 提取翻译结果
      if (Array.isArray(result) && result.length > 0) {
        const translated = (result[0] as any).translation_text || trimmed;
        translatedParagraphs.push(translated);
      } else {
        translatedParagraphs.push(trimmed);
      }
    }

    return translatedParagraphs.join('\n');
  } catch (error) {
    if (error instanceof Error && error.message === '翻译已取消') {
      logger.info('[离线翻译] 翻译已取消');
      throw error;
    }
    if (
      error instanceof Error &&
      error.message.includes('离线翻译运行时未安装')
    ) {
      logger.warn('[离线翻译] 运行时资源未安装');
      throw error;
    }
    logger.error('[离线翻译] 翻译失败:', error);
    throw new Error('离线翻译失败，请检查模型是否正确加载');
  } finally {
    abortController = null;
  }
}

/**
 * 取消正在进行的离线翻译
 */
export function cancelOfflineTranslation(): void {
  if (abortController) {
    abortController.abort();
    abortController = null;
    logger.info('[离线翻译] 已发送取消信号');
  }
}

/**
 * 检查是否有正在进行的翻译
 */
export function isTranslationInProgress(): boolean {
  return abortController !== null;
}

/**
 * 预热翻译器（用于提前加载模型）
 * @throws 如果加载失败会抛出异常
 */
export async function warmupOfflineTranslator(
  options: { localFilesOnly?: boolean } = {}
): Promise<void> {
  // A caller timeout must not release the lock on the actual pipeline task:
  // Transformers.js v2 cannot abort it, so retries must reuse that task.
  await withTimeout(
    getTranslator(options.localFilesOnly),
    MODEL_LOAD_TIMEOUT,
    '模型加载超时，当前下载或加载仍在进行，请稍后重试'
  );
}

/**
 * 检查离线翻译是否可用（内存中已加载）
 */
export function isOfflineTranslatorReady(): boolean {
  return translatorEnZh !== null;
}

/**
 * 检查是否正在初始化
 */
export function isOfflineTranslatorInitializing(): boolean {
  return isInitializing;
}

/**
 * 获取模型缓存信息
 */
export interface ModelCacheInfo {
  isCached: boolean;
  cacheType: 'indexeddb' | 'cache-storage' | 'none';
  cacheName?: string;
  estimatedSize?: string;
}

/**
 * 检查模型缓存是否存在并获取详细信息
 */
export async function getModelCacheInfo(): Promise<ModelCacheInfo> {
  try {
    if (typeof caches === 'undefined')
      return { isCached: false, cacheType: 'none' };
    if (!(await caches.keys()).includes(MODEL_CACHE_NAME)) {
      return { isCached: false, cacheType: 'none' };
    }
    const cache = await caches.open(MODEL_CACHE_NAME);
    const responses = await Promise.all(
      REQUIRED_MODEL_FILES.map((file) =>
        cache.match(`${MODEL_URL_PREFIX}${file.name}`)
      )
    );
    // A database name, an unrelated model or a single ONNX file is insufficient.
    const complete = responses.every(
      (response) =>
        response?.status === 200 &&
        response.headers.get('content-length') !== '0'
    );
    return complete
      ? {
          isCached: true,
          cacheType: 'cache-storage',
          cacheName: MODEL_CACHE_NAME,
          estimatedSize: '~120MB'
        }
      : { isCached: false, cacheType: 'none' };
  } catch (error) {
    logger.warn('[离线翻译] 检查缓存失败:', error);
    return { isCached: false, cacheType: 'none' };
  }
}

/**
 * 检查模型缓存是否存在（简化版）
 */
export async function isModelCached(): Promise<boolean> {
  const info = await getModelCacheInfo();
  return info.isCached;
}

/**
 * 检查离线翻译是否可用（模型已加载到内存）
 * 只有模型已激活才能使用离线翻译
 */
export function canUseOfflineTranslation(): boolean {
  return translatorEnZh !== null;
}

/**
 * 释放翻译器资源
 */
export async function disposeOfflineTranslator(): Promise<void> {
  initializationGeneration += 1;
  // 清除内存中的翻译器实例
  if (translatorEnZh) {
    try {
      await translatorEnZh.dispose?.();
    } catch (e) {
      // ignore
    }
  }

  // 重置所有状态
  translatorEnZh = null;
  // Pending initialization owns its lock until the underlying runtime settles.
  if (!isInitializing) initPromise = null;
  logger.info('[离线翻译] 翻译器已释放');
}

/**
 * 清除当前翻译模型缓存，保留其他模型和数据库。
 */
export async function clearModelCache(): Promise<void> {
  try {
    if (typeof caches !== 'undefined') {
      const cacheNames = await caches.keys();
      for (const name of cacheNames) {
        if (name.includes('transformers') || name.includes('huggingface')) {
          const cache = await caches.open(name);
          for (const request of await cache.keys()) {
            const url = new URL(request.url);
            if (
              url.origin === new URL(TRANSFORMERS_REMOTE_HOST).origin &&
              url.pathname.startsWith(`/${MODEL_EN_ZH}/resolve/`)
            ) {
              await cache.delete(request);
            }
          }
        }
      }
    }

    logger.info('[离线翻译] 模型缓存已清除');
  } catch (error) {
    logger.error('[离线翻译] 清除缓存失败:', error);
    throw error;
  }
}
