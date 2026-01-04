<template>
  <div class="settings-panel">
    <h3 class="panel-title">{{ $t('translation.title') }}</h3>
    <main class="summarize-container">
    <!-- 默认翻译引擎 -->
    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('translation.defaultEngine') }}</div>
        <div class="summarize-label-desc">{{ $t('translation.defaultEngineDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <el-select class="summarize-input !w-36" v-model="defaultEngine" @change="saveDefaultEngine">
          <el-option
            v-for="item in engineOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </section>

    <!-- 离线翻译模型 -->
    <section class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('translation.offlineModel') }}</div>
        <div class="summarize-label-desc">{{ $t('translation.offlineModelDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <div class="flex items-center gap-3">
          <span class="text-sm font-medium" :class="modelStatusClass">{{ modelStatusText }}</span>
          <CustomButton
            v-if="!modelCached && !isLoading"
            type="primary"
            size="small"
            @click="loadModel"
          >
            {{ $t('translation.loadModel') }}
          </CustomButton>
          <CustomButton
            v-if="modelCached && !modelLoaded && !backendActivated && !isLoading"
            type="primary"
            size="small"
            @click="activateModel"
          >
            {{ $t('translation.activateModel') }}
          </CustomButton>
          <CustomButton
            v-if="modelCached && !isLoading"
            type="default"
            size="small"
            @click="deleteModel"
            :loading="isDeleting"
          >
            {{ $t('translation.deleteModel') }}
          </CustomButton>
        </div>
      </div>
    </section>
    
    <!-- 多文件下载进度（独立区块） -->
    <section v-if="isLoading" class="summarize-section">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('translation.downloadProgress') }}</div>
        <div class="summarize-label-desc">{{ $t('translation.downloadProgressDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper flex-col !items-start">
        <div class="w-full space-y-2">
          <div 
            v-for="file in fileStatuses" 
            :key="file.file"
            class="flex items-center gap-3 py-1"
          >
            <span class="w-5 text-center">
              <span v-if="file.status === 'done'" class="text-green-500 text-base">✓</span>
              <span v-else-if="file.status === 'error'" class="text-red-500 text-base">✗</span>
              <span v-else-if="file.status === 'downloading'" class="text-yellow-500 text-base">↓</span>
              <span v-else class="text-gray-400 text-base">○</span>
            </span>
            <span class="w-64 truncate text-sm text-gray-600 dark:text-gray-400" :title="file.file">
              {{ file.file }}
            </span>
            <span class="w-16 text-right text-xs text-gray-500">{{ file.size }}</span>
            <div class="w-24">
              <el-progress 
                v-if="file.status === 'downloading'"
                :percentage="file.progress" 
                :stroke-width="6"
                :show-text="true"
                :text-inside="false"
              />
              <span v-else-if="file.status === 'done'" class="text-green-500 text-xs">{{ $t('translation.completed') }}</span>
              <span v-else-if="file.status === 'error'" class="text-red-500 text-xs">{{ $t('translation.failed') }}</span>
              <span v-else class="text-gray-400 text-xs">{{ $t('translation.waiting') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 模型信息（仅在已缓存或已加载时显示） -->
    <section class="summarize-section !mt-2" v-if="showModelInfo && !isLoading">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('translation.modelInfo') }}</div>
        <div class="summarize-label-desc">{{ $t('translation.modelInfoDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <div class="model-info-card">
          <div class="info-row">
            <div class="info-item">
              <span class="info-label">{{ $t('translation.modelName') }}</span>
              <span class="info-value">Xenova/opus-mt-en-zh</span>
            </div>
            <div class="info-item">
              <span class="info-label">{{ $t('translation.modelSize') }}</span>
              <span class="info-value">{{ modelCacheInfo.estimatedSize || '~300MB' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">{{ $t('translation.supportLang') }}</span>
              <span class="info-value">{{ $t('translation.enToZh') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 使用说明 -->
    <section class="summarize-section !mt-2">
      <div class="summarize-label">
        <div class="summarize-label-title">{{ $t('translation.usage') }}</div>
        <div class="summarize-label-desc">{{ $t('translation.usageDesc') }}</div>
      </div>
      <div class="summarize-input-wrapper">
        <div class="usage-tips">
          <div class="tip-item">
            <span class="tip-icon">•</span>
            <span class="tip-text">{{ $t('translation.usageTip1') }}</span>
          </div>
          <div class="tip-item">
            <span class="tip-icon">•</span>
            <span class="tip-text">{{ $t('translation.usageTip2') }}</span>
          </div>
          <div class="tip-item">
            <span class="tip-icon">•</span>
            <span class="tip-text">{{ $t('translation.usageTip3') }}</span>
          </div>
          <div class="tip-item">
            <span class="tip-icon">•</span>
            <span class="tip-text">{{ $t('translation.usageTip4') }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { invoke } from '@tauri-apps/api/core'
import { CustomButton } from '@/components/UI'
import modal from '@/utils/modal'
import {
  isOfflineTranslatorReady,
  isOfflineTranslatorInitializing,
  warmupOfflineTranslator,
  disposeOfflineTranslator,
  setProgressCallback,
  clearModelCache,
  getModelCacheInfo,
  getModelFiles,
  type ModelCacheInfo,
  type FileDownloadStatus
} from '@/utils/offlineTranslator'
import { logger } from '@/utils/logger'

defineOptions({
  name: 'Translation'
})

const { t } = useI18n()

// 状态
const defaultEngine = ref<'google' | 'bing' | 'offline'>('bing')
const modelLoaded = ref(false)  // 内存中是否已加载
const backendActivated = ref(false)  // 后端激活状态（用户是否启用了离线翻译）
const modelCacheInfo = ref<ModelCacheInfo>({ isCached: false, cacheType: 'none' })
const isLoading = ref(false)
const isDeleting = ref(false)

// 文件下载状态列表
const fileStatuses = ref<FileDownloadStatus[]>([])

// 模型是否已缓存（通过前端检测本地缓存）
const modelCached = computed(() => modelCacheInfo.value.isCached)

// 翻译引擎选项
const engineOptions = computed(() => [
  { value: 'google', label: t('translation.google') },
  { value: 'bing', label: t('translation.bing') },
  { value: 'offline', label: t('translation.offline') }
])

// 模型状态文本
const modelStatusText = computed(() => {
  if (isLoading.value) return t('translation.modelLoading')
  if (modelLoaded.value) return t('translation.modelReady')  // 内存已加载
  if (modelCached.value && backendActivated.value) return t('translation.modelActivated')  // 已激活（懒加载）
  if (modelCached.value) return t('translation.modelCached')  // 已缓存（未激活）
  return t('translation.modelNotLoaded')
})

// 模型状态样式
const modelStatusClass = computed(() => {
  if (isLoading.value) return 'text-yellow-500'
  if (modelLoaded.value) return 'text-green-500'
  if (modelCached.value && backendActivated.value) return 'text-green-500'  // 已激活
  if (modelCached.value) return 'text-blue-500'  // 已缓存
  return 'text-gray-500'
})

// 显示模型信息（已缓存或已加载）
const showModelInfo = computed(() => modelLoaded.value || modelCached.value)

// 初始化文件状态列表
const initFileStatuses = () => {
  const files = getModelFiles()
  fileStatuses.value = files.map(f => ({
    file: f.name,
    progress: 0,
    status: 'pending' as const,
    size: f.size
  }))
}

// 更新文件状态
const updateFileStatus = (fileName: string, progress: number, status: FileDownloadStatus['status']) => {
  const file = fileStatuses.value.find(f => fileName.includes(f.file) || f.file.includes(fileName))
  if (file) {
    file.progress = progress
    file.status = status
  }
}

// 保存默认引擎到后端
const saveDefaultEngine = async (value: string) => {
  try {
    await invoke('set_translation_engine', { engine: value })
    modal.msg(t('translation.engineSaved'))
  } catch (error) {
    logger.info('Failed to save translation engine:', error)
    modal.msg(t('translation.engineSaveFailed'), 'error')
  }
}

// 加载模型（下载）
const loadModel = async () => {
  logger.info('[翻译设置] 开始下载离线模型...')
  isLoading.value = true
  initFileStatuses()

  // 设置进度回调
  setProgressCallback((progress) => {
    const fileName = progress.file || ''
    if (progress.status === 'initiate') {
      updateFileStatus(fileName, 0, 'downloading')
    } else if (progress.status === 'progress' && progress.progress !== undefined) {
      updateFileStatus(fileName, Math.round(progress.progress), 'downloading')
    } else if (progress.status === 'done') {
      updateFileStatus(fileName, 100, 'done')
    }
  })

  try {
    await warmupOfflineTranslator()
    // 标记所有文件为完成
    fileStatuses.value.forEach(f => {
      if (f.status !== 'done') f.status = 'done'
      f.progress = 100
    })
    modelLoaded.value = true
    backendActivated.value = true
    modelCacheInfo.value = await getModelCacheInfo()
    // 下载完成后自动激活（因为 Transformers.js 下载和加载是一体的）
    logger.info('[翻译设置] 模型下载并加载成功，更新后端激活状态为 true')
    await invoke('set_offline_model_activated', { activated: true })
    modal.msg(t('translation.modelLoadSuccess'))
  } catch (error) {
    logger.error('[翻译设置] 模型下载失败:', error)
    // 标记未完成的文件为错误
    fileStatuses.value.forEach(f => {
      if (f.status === 'downloading' || f.status === 'pending') {
        f.status = 'error'
      }
    })
    modelLoaded.value = false
    modal.msg(t('translation.modelLoadFailed'), 'error')
  } finally {
    isLoading.value = false
    setProgressCallback(null)
    // 最终检查真实状态
    modelLoaded.value = isOfflineTranslatorReady()
    modelCacheInfo.value = await getModelCacheInfo()
    logger.info(`[翻译设置] 最终状态 - 内存加载: ${modelLoaded.value}, 缓存存在: ${modelCacheInfo.value.isCached}`)
  }
}

// 激活模型（从缓存加载到内存）
const activateModel = async () => {
  logger.info('[翻译设置] 开始激活离线模型...')
  isLoading.value = true

  try {
    await warmupOfflineTranslator()
    modelLoaded.value = true
    backendActivated.value = true
    logger.info('[翻译设置] 模型激活成功，更新后端激活状态为 true')
    await invoke('set_offline_model_activated', { activated: true })
    modal.msg(t('translation.modelLoadSuccess'))
  } catch (error) {
    logger.error('[翻译设置] 模型激活失败:', error)
    modelLoaded.value = false
    modal.msg(t('translation.modelLoadFailed'), 'error')
  } finally {
    isLoading.value = false
    modelLoaded.value = isOfflineTranslatorReady()
    logger.info(`[翻译设置] 激活后状态 - 内存加载: ${modelLoaded.value}`)
  }
}

// 删除模型
const deleteModel = async () => {
  logger.info('[翻译设置] 开始删除离线模型...')
  isDeleting.value = true
  try {
    await disposeOfflineTranslator()
    await clearModelCache()
    modelLoaded.value = false
    backendActivated.value = false
    modelCacheInfo.value = { isCached: false, cacheType: 'none' }
    // 更新后端激活状态
    logger.info('[翻译设置] 模型删除成功，更新后端激活状态为 false')
    await invoke('set_offline_model_activated', { activated: false })
    modal.msg(t('translation.modelDeleted'))
  } catch (error) {
    logger.error('[翻译设置] 模型删除失败:', error)
    modal.msg(t('translation.modelDeleteFailed'), 'error')
  } finally {
    isDeleting.value = false
    modelLoaded.value = isOfflineTranslatorReady()
    modelCacheInfo.value = await getModelCacheInfo()
    logger.info(`[翻译设置] 删除后状态 - 内存加载: ${modelLoaded.value}, 缓存存在: ${modelCacheInfo.value.isCached}`)
  }
}

// 初始化
onMounted(async () => {
  logger.info('[翻译设置] 页面初始化...')
  
  // 从后端读取默认引擎设置
  try {
    const saved = await invoke<string>('get_translation_engine')
    logger.info(`[翻译设置] 从后端获取翻译引擎: ${saved}`)
    if (saved && ['google', 'bing', 'offline'].includes(saved)) {
      defaultEngine.value = saved as 'google' | 'bing' | 'offline'
    }
  } catch (error) {
    logger.error('[翻译设置] 获取翻译引擎失败:', error)
  }

  // 检查前端实际状态
  const memoryLoaded = isOfflineTranslatorReady()
  const initializing = isOfflineTranslatorInitializing()
  modelCacheInfo.value = await getModelCacheInfo()
  logger.info(`[翻译设置] 前端状态 - 内存加载: ${memoryLoaded}, 正在初始化: ${initializing}, 缓存存在: ${modelCacheInfo.value.isCached}`)

  modelLoaded.value = memoryLoaded
  isLoading.value = initializing

  // 获取后端激活状态
  try {
    const activated = await invoke<boolean>('get_offline_model_activated')
    logger.info(`[翻译设置] 后端激活状态: ${activated}`)
    backendActivated.value = activated
    
    // 后端已激活但缓存不存在 → 重置后端状态（模型被手动删除了）
    if (activated && !modelCacheInfo.value.isCached) {
      logger.info('[翻译设置] 后端已激活但缓存不存在，重置后端状态')
      await invoke('set_offline_model_activated', { activated: false })
      backendActivated.value = false
    }
    
    // 内存已加载但后端未标记 → 同步后端状态
    if (!activated && memoryLoaded) {
      logger.info('[翻译设置] 内存已加载但后端未标记，同步后端状态为 true')
      await invoke('set_offline_model_activated', { activated: true })
      backendActivated.value = true
    }
  } catch (error) {
    logger.error('[翻译设置] 处理激活状态失败:', error)
  }
})
</script>

<style scoped lang="scss">
.settings-panel {
  @apply flex flex-col;
}

.panel-title {
  @apply text-base font-bold mb-4 pb-2 border-b border-panel;
}

.model-info-card {
  @apply space-y-3;
  
  .info-row {
    @apply flex gap-16 justify-end items-center;
    
    .info-item {
      @apply flex flex-col gap-1;
      
      .info-label {
        @apply text-xs text-gray-500 dark:text-gray-400;
      }
      
      .info-value {
        @apply text-sm font-medium text-gray-700 dark:text-gray-300;
      }
    }
  }
}

.usage-tips {
  @apply space-y-2.5;
  
  .tip-item {
    @apply flex items-start gap-2;
    
    .tip-icon {
      @apply text-blue-500 dark:text-blue-400 text-lg leading-none mt-0.5 shrink-0;
    }
    
    .tip-text {
      @apply text-sm text-gray-600 dark:text-gray-400 leading-relaxed;
    }
  }
}
</style>
