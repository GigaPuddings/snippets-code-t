<template>
  <main class="w-full h-full overflow-hidden relative">
    <!-- 加载中提示 -->
    <div v-if="isScanning" class="scanning-overlay">
      <div class="scanning-content">
        <LoadingIcon class="scanning-icon" theme="outline" size="48" :strokeWidth="3" spin />
        <div class="scanning-text">{{ scanStage || $t('progress.preparing') }}</div>
        <div class="scanning-progress">{{ scanCurrent }}/{{ scanTotal }}</div>
      </div>
    </div>

    <div class="retrieve-container">
      <div class="search-config transparent-input">
        <header class="config-title">
          <h1 class="title-text">{{ $t('retrieve.title') }}</h1>
          <div class="header-actions">
            <el-tooltip
              :content="$t('retrieve.resetDefault')"
              placement="top"
              effect="light"
            >
              <el-button :icon="Redo" @click="resetEngines">
                {{ $t('common.reset') }}
              </el-button>
            </el-tooltip>
            <el-tooltip
              :content="$t('retrieve.addNew')"
              placement="top"
              effect="light"
            >
              <el-button type="primary" :icon="Add" @click="handleAdd">
                {{ $t('common.add') }}
              </el-button>
            </el-tooltip>
          </div>
        </header>

        <section class="search-list">
          <el-empty
            v-if="searchEngines.length === 0"
            :description="$t('retrieve.noEngines')"
          />
          <template v-else>
            <div class="search-table">
              <div class="table-scroll">
                <div class="table-grid table-header">
                  <span>{{ $t('retrieve.name') }}</span>
                  <span class="justify-self-center">
                    {{ $t('retrieve.iconColumn') }}
                  </span>
                  <span>{{ $t('retrieve.keyword') }}</span>
                  <span>{{ $t('retrieve.urlTemplate') }}</span>
                  <span class="justify-self-center">
                    {{ $t('retrieve.default') }}
                  </span>
                  <span>{{ $t('retrieve.preset') }}</span>
                  <span class="justify-self-center">
                    {{ $t('retrieve.operation') }}
                  </span>
                </div>

                <div
                  v-for="(engine, index) in searchEngines"
                  :key="engine.id"
                  class="table-grid search-item"
                >
                  <el-input
                    v-model="engine.name"
                    :placeholder="$t('retrieve.name')"
                    @change="handleInputChange"
                  />

                  <div class="icon-wrapper">
                    <el-tooltip
                      :content="$t('retrieve.icon')"
                      placement="top"
                      effect="light"
                    >
                      <Picture
                        v-if="!engine.icon"
                        class="engine-icon placeholder-icon"
                        theme="outline"
                        size="24"
                        :strokeWidth="3"
                        strokeLinejoin="miter"
                        strokeLinecap="butt"
                      />
                      <img
                        v-else
                        class="engine-icon"
                        :src="engine.icon || ''"
                        :alt="engine.name"
                        @error="handleIconError(engine)"
                      />
                    </el-tooltip>
                  </div>

                  <el-input
                    v-model="engine.keyword"
                    :placeholder="$t('retrieve.keyword')"
                    @change="handleInputChange"
                  />

                  <el-input
                    v-model="engine.url"
                    :placeholder="$t('retrieve.urlFormat')"
                    @change="handleUrlChange(engine)"
                  />

                  <div class="default-control">
                    <el-switch
                      v-model="engine.enabled"
                      :aria-label="$t('retrieve.default')"
                      @change="handleSwitch(index)"
                    />
                  </div>

                  <el-select
                    v-model="engine.name"
                    :placeholder="$t('retrieve.defaultConfig')"
                    clearable
                    @change="handleSelect(index, engine.name)"
                  >
                    <el-option
                      v-for="item in defaultSearchEngines"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name"
                    />
                  </el-select>

                  <div class="delete-control">
                    <el-tooltip
                      :content="$t('retrieve.deleteEngine')"
                      placement="top"
                      effect="light"
                    >
                      <el-button
                        class="delete-button"
                        type="danger"
                        text
                        :icon="Delete"
                        :aria-label="$t('retrieve.deleteEngine')"
                        @click="handleDelete(index)"
                      />
                    </el-tooltip>
                  </div>
                </div>
              </div>

              <div class="url-tip">
                <Info theme="outline" size="17" :strokeWidth="3" />
                <span>{{ $t('retrieve.urlFormatTip') }}</span>
              </div>
            </div>
          </template>
        </section>
      </div>
    </div>
  </main>

  <!-- 删除确认对话框 -->
  <ConfirmDialog
    v-model="showDeleteDialog"
    :title="$t('common.warning')"
    :confirm-text="$t('common.confirm')"
    :cancel-text="$t('common.cancel')"
    type="danger"
    @confirm="confirmDelete"
  >
    <div>{{ $t('retrieve.deleteConfirm', { name: searchEngines[deleteIndex]?.name || searchEngines[deleteIndex]?.keyword || '' }) }}</div>
  </ConfirmDialog>
</template>

<script setup lang="ts">
import {
  Add,
  Redo,
  Delete,
  Info,
  Picture,
  Loading as LoadingIcon
} from '@icon-park/vue-next';
import { uuid } from '@/utils';
import { invoke } from '@tauri-apps/api/core';
import { emit, listen } from '@tauri-apps/api/event';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import { ConfirmDialog } from '@/components/UI';

const { t } = useI18n();
const searchEngines = ref<SearchEngineConfig[]>([]);
const defaultSearchEngines = ref<SearchEngineConfig[]>([]);
const showDeleteDialog = ref(false);
const deleteIndex = ref<number>(-1);
// 节流函数，防止频繁保存
const saveThrottleTimer = ref<number | null>(null);

// 扫描状态
const isScanning = ref(false);
const scanStage = ref('');
const scanCurrent = ref(0);
const scanTotal = ref(0);
let unlistenProgress: (() => void) | null = null;
let unlistenComplete: (() => void) | null = null;

// 创建一个响应式的图标映射
const engineIconMap = reactive(new Map<string, string>());

// 获取图标的函数
const engineIcon = async (engine: SearchEngineConfig) => {
  if (engine.icon) {
    return engine.icon;
  }

  if (engine.url) {
    if (engineIconMap.has(engine.url)) {
      return engineIconMap.get(engine.url)!;
    }

    try {
      const url = new URL(engine.url);
      const hostname = url.hostname;
      const icon: string = await invoke('fetch_favicon', { url: hostname });
      engineIconMap.set(engine.url, icon);
      engine.icon = icon;
      return icon;
    } catch (error) {
      console.error('获取图标失败:', error);
      return '';
    }
  }
  return '';
};

// 初始化所有搜索引擎的图标
const initializeIcons = async () => {
  for (const engine of searchEngines.value) {
    if (engine.url && !engine.icon) {
      await engineIcon(engine);
    }
  }
};

// 处理URL变化时的图标刷新
const handleUrlChange = async (engine: SearchEngineConfig) => {
  if (engine.url) {
    engine.icon = ''; // 清除旧图标
    engineIconMap.delete(engine.url); // 清除旧缓存
    await engineIcon(engine); // 重新获取图标
  } else {
    engine.icon = '';
  }
  // 自动保存更改
  saveChangesThrottled();
};

// 处理普通输入框变化
const handleInputChange = () => {
  saveChangesThrottled();
};

// 使用节流函数保存更改，避免频繁保存
const saveChangesThrottled = () => {
  if (saveThrottleTimer.value !== null) {
    clearTimeout(saveThrottleTimer.value);
  }

  saveThrottleTimer.value = window.setTimeout(() => {
    saveAll(false);
    saveThrottleTimer.value = null;
  }, 1000);
};

// 组件挂载时初始化图标
onMounted(async () => {
  // 先检查扫描状态
  await checkScanStatus();
  // 设置事件监听
  await setupScanListeners();
  
  try {
    searchEngines.value = await invoke('get_search_engines');
    defaultSearchEngines.value = await invoke('get_default_engines');
    await initializeIcons();
  } catch (error) {
    console.error('获取搜索引擎配置失败:', error);
    // 只有在非扫描状态下才显示错误
    if (!isScanning.value) {
      modal.msg(t('retrieve.loadFailed'), 'error');
    }
  }
});

onUnmounted(() => {
  if (unlistenProgress) unlistenProgress();
  if (unlistenComplete) unlistenComplete();
});

// 检查扫描状态
const checkScanStatus = async () => {
  try {
    const state = await invoke<{
      stage: string;
      current: number;
      total: number;
      completed: boolean;
    }>('get_scan_progress_state');
    
    if (!state.completed && state.stage) {
      isScanning.value = true;
      scanStage.value = state.stage;
      scanCurrent.value = state.current;
      scanTotal.value = state.total;
    } else {
      isScanning.value = false;
    }
  } catch (error) {
    console.error('获取扫描状态失败:', error);
  }
};

// 监听扫描事件
const setupScanListeners = async () => {
  unlistenProgress = await listen('scan-progress', (event: any) => {
    isScanning.value = true;
    scanStage.value = event.payload.stage;
    scanCurrent.value = event.payload.current;
    scanTotal.value = event.payload.total;
  });
  
  unlistenComplete = await listen('scan-complete', async () => {
    isScanning.value = false;
    // 扫描完成后重新加载数据
    try {
      searchEngines.value = await invoke('get_search_engines');
      defaultSearchEngines.value = await invoke('get_default_engines');
      await initializeIcons();
    } catch (error) {
      console.error('重新加载搜索引擎配置失败:', error);
    }
  });
};

// 更新搜索引擎配置
const updateSearchEngines = async (engines: SearchEngineConfig[]) => {
  try {
    await invoke('update_search_engines', { engines });
    // 通知所有窗口更新搜索引擎配置
    searchEngines.value = engines;
    await emit('search-engines-updated', engines);
    return true;
  } catch (error) {
    console.error('更新搜索引擎配置失败:', error);
    modal.msg(t('retrieve.updateFailed'), 'error');
    return false;
  }
};

// 保存所有搜索引擎配置
const saveAll = async (showMessage = true) => {
  // 验证所有搜索引擎配置是否有效
  const invalidEngines = searchEngines.value.filter(
    (engine) => !engine.name || !engine.keyword || !engine.url
  );

  if (invalidEngines.length > 0) {
    if (showMessage) {
      modal.msg(t('retrieve.invalidConfig'), 'warning');
    }
    return false;
  }

  const success = await updateSearchEngines([...searchEngines.value]);
  if (success && showMessage) {
    modal.msg(t('retrieve.configUpdated'));
  }
  return success;
};

// 重置为默认搜索引擎
const resetEngines = async () => {
  try {
    const defaultEngines = (await invoke(
      'get_default_engines'
    )) as SearchEngineConfig[];
    if (defaultEngines && defaultEngines.length > 0) {
      defaultEngines[0].enabled = true;
    }
    const success = await updateSearchEngines(defaultEngines);
    if (success) {
      modal.msg(t('retrieve.resetSuccess'));
    }
  } catch (error) {
    console.error('重置搜索引擎失败:', error);
    modal.msg(t('retrieve.resetFailed'), 'error');
  }
};

const handleAdd = async () => {
  const newEngine: SearchEngineConfig = {
    id: uuid(),
    keyword: '',
    name: '',
    icon: '',
    url: '',
    enabled: false
  };
  searchEngines.value.push(newEngine);
  modal.msg(t('retrieve.addSuccess'), 'info');
};

const handleDelete = (index: number) => {
  deleteIndex.value = index;
  showDeleteDialog.value = true;
};

const confirmDelete = async () => {
  if (deleteIndex.value === -1) return;
  
  const updatedEngines = searchEngines.value.filter((_, idx) => idx !== deleteIndex.value);
  searchEngines.value = updatedEngines;

  // 如果删除的是默认搜索引擎，且还有其他引擎，则将第一个设为默认
  if (
    searchEngines.value.length > 0 &&
    !searchEngines.value.some((e) => e.enabled)
  ) {
    searchEngines.value[0].enabled = true;
  }

  const success = await saveAll(false);
  if (success) {
    modal.msg(t('retrieve.deleteSuccess'), 'info');
  }
  showDeleteDialog.value = false;
  deleteIndex.value = -1;
};

// 只允许一个引擎为默认
const handleSwitch = async (index: number) => {
  searchEngines.value = searchEngines.value.map((engine, idx) => ({
    ...engine,
    enabled: idx === index ? engine.enabled : false
  }));

  // 自动保存更改
  const success = await saveAll(false);
  if (success) {
    modal.msg(t('retrieve.defaultUpdated'));
  }
};

// 选中的引擎，赋值给当前引擎
const handleSelect = async (index: number, name: string) => {
  const engine = defaultSearchEngines.value.find(
    (engine) => engine.name === name
  );

  if (engine) {
    searchEngines.value[index] = {
      ...engine,
      enabled: searchEngines.value[index].enabled
    };
    // 重新获取图标
    await engineIcon(searchEngines.value[index]);

    // 自动保存更改
    saveChangesThrottled();
  }
};

// 修改图标加载失败的处理逻辑
const handleIconError = async (engine: SearchEngineConfig) => {
  if (!engine.url) {
    engine.icon = '';
    return;
  }

  try {
    const url = new URL(engine.url);
    const hostname = url.hostname;
    const icon: string = await invoke('fetch_favicon', { url: hostname });

    if (icon && icon.length > 0) {
      engine.icon = icon;
    } else {
      engine.icon = undefined;
    }
  } catch (error) {
    console.error('获取图标失败:', error);
    engine.icon = undefined;
  }
};
</script>

<style scoped lang="scss">
.scanning-overlay {
  @apply absolute inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-[rgba(30,30,30,0.9)];

  backdrop-filter: blur(4px);
  
  .scanning-content {
    @apply flex flex-col items-center gap-3 p-6 rounded-lg border border-panel;

    background: var(--search-bg-color);
    box-shadow: 0 12px 30px rgb(15 23 42 / 14%);
    
    .scanning-icon {
      @apply text-blue-500;
    }
    
    .scanning-text {
      @apply text-base font-medium text-panel;
    }

    .scanning-progress {
      @apply text-sm text-panel-text-secondary font-mono;
    }
  }
}

.retrieve-container {
  @apply relative w-full h-full overflow-hidden p-4 pt-2 text-panel;

  .search-config {
    @apply h-full flex flex-col min-h-0;

    .config-title {
      @apply flex items-center justify-between gap-4 mb-2 px-4 py-2.5 rounded-md border border-panel;

      background: var(--search-card-bg);

      .title-text {
        @apply text-base font-semibold text-panel;
      }

      .header-actions {
        @apply flex items-center gap-2 flex-shrink-0;
      }
    }

    .search-list {
      @apply flex-1 min-h-0;

      :deep(.el-empty) {
        @apply h-full bg-panel border border-panel rounded-md;
      }

      .search-table {
        @apply h-full flex flex-col min-h-0 overflow-hidden border border-panel rounded-md;

        background: var(--search-card-bg);
      }

      .table-scroll {
        @apply flex-1 min-h-0 overflow-auto;
      }

      .table-grid {
        display: grid;
        grid-template-columns:
          minmax(132px, 1.1fr)
          84px
          minmax(128px, 0.9fr)
          minmax(280px, 2.55fr)
          76px
          minmax(138px, 1.05fr)
          52px;
        column-gap: 16px;
        align-items: center;
        min-width: 1020px;
      }

      .table-header {
        @apply sticky top-0 z-10 px-4 py-2.5 text-xs font-semibold whitespace-nowrap text-panel-text-secondary border-b border-panel;

        background: var(--search-card-bg);
      }

      .search-item {
        @apply px-4 py-3 border-b border-panel transition-colors last:border-b-0;

        background: var(--search-card-bg);

        &:hover {
          background: var(--search-result-hover);
        }

        :deep(.el-input__wrapper) {
          @apply border border-panel rounded-md shadow-none;

          min-height: 36px;
          background: var(--search-input-bg);

          &:hover {
            border-color: var(--search-result-active-border);
          }

          &.is-focus {
            border-color: var(--search-result-active-border);
            box-shadow: 0 0 0 1px var(--search-result-active-border);
          }
        }

        :deep(.el-select__wrapper) {
          @apply border border-panel rounded-md shadow-none;

          min-height: 36px;
          background: var(--search-input-bg);

          &:hover,
          &.is-focused {
            border-color: var(--search-result-active-border);
          }
        }

        .icon-wrapper {
          @apply flex items-center justify-center w-8 h-8 justify-self-center overflow-hidden;

          .engine-icon {
            @apply w-7 h-7 object-contain rounded;
          }

          .placeholder-icon {
            @apply text-panel-text-secondary;
          }
        }

        .default-control,
        .delete-control {
          @apply flex items-center justify-center;
        }

        .delete-button {
          @apply px-2;

          :deep(.el-icon) {
            @apply text-lg;
          }
        }
      }

      .url-tip {
        @apply flex items-center flex-none gap-2 mx-4 my-3 px-4 py-2.5 rounded-md text-xs text-panel-text-secondary;

        background: var(--search-soft-bg);
      }
    }
  }
}

@media (width <= 768px) {
  .retrieve-container {
    @apply p-3;

    .search-config {
      .config-title {
        @apply px-4 py-3;

        .title-text {
          @apply text-base;
        }
      }

      .search-list {
        .table-grid {
          column-gap: 16px;
        }
      }
    }
  }
}
</style>
