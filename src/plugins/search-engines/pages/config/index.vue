<template>
  <main class="plugin-config-page ui-icon-scope">
    <!-- 加载中提示 -->
    <div v-if="isScanning" class="scanning-overlay">
      <div class="scanning-content">
        <LoadingIcon class="scanning-icon" theme="outline" size="48" spin />
        <div class="scanning-text">
          {{ scanStage || $t('progress.preparing') }}
        </div>
        <div class="scanning-progress">{{ scanCurrent }}/{{ scanTotal }}</div>
      </div>
    </div>

    <div class="retrieve-container">
      <div class="search-config">
        <header class="plugin-config-header">
          <h1 class="plugin-config-title">{{ $t('retrieve.title') }}</h1>
          <div class="header-actions">
            <el-tooltip
              :content="$t('retrieve.resetDefault')"
              placement="top"
              effect="light"
            >
              <CustomButton
                unstyled
                class="ui-action ui-action--muted"
                :icon="Redo"
                @click="resetEngines"
              >
                {{ $t('common.reset') }}
              </CustomButton>
            </el-tooltip>
            <el-tooltip
              :content="$t('retrieve.addNew')"
              placement="top"
              effect="light"
            >
              <CustomButton :icon="Add" @click="handleAdd">
                {{ $t('common.add') }}
              </CustomButton>
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
                    :aria-label="$t('retrieve.name')"
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
                    :aria-label="$t('retrieve.keyword')"
                    @change="handleInputChange"
                  />

                  <el-input
                    v-model="engine.url"
                    :placeholder="$t('retrieve.urlFormat')"
                    :aria-label="$t('retrieve.urlTemplate')"
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
                    :aria-label="$t('retrieve.preset')"
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
                      <CustomButton
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
                <Info class="shrink-0" theme="outline" size="16" />
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
    <div>
      {{
        $t('retrieve.deleteConfirm', {
          name:
            searchEngines[deleteIndex]?.name ||
            searchEngines[deleteIndex]?.keyword ||
            ''
        })
      }}
    </div>
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
import { ConfirmDialog, CustomButton } from '@/components/UI';

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

  const updatedEngines = searchEngines.value.filter(
    (_, idx) => idx !== deleteIndex.value
  );
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
  @apply absolute inset-0 z-50 flex items-center justify-center;

  background: var(--settings-surface);
  backdrop-filter: blur(4px);

  .scanning-content {
    @apply flex flex-col items-center gap-3 p-6 rounded-ui-lg bg-ui-card;

    .scanning-icon {
      @apply text-ui-muted;
    }

    .scanning-text {
      @apply text-ui font-medium text-ui-main;
    }

    .scanning-progress {
      @apply text-ui-caption text-ui-muted font-mono;
    }
  }
}

.retrieve-container {
  @apply w-full min-h-0 flex-1;

  .search-config {
    @apply h-full flex flex-col min-h-0;

    .header-actions {
      @apply flex items-center gap-2 flex-shrink-0;
    }

    .search-list {
      @apply flex-1 min-h-0;

      :deep(.el-empty) {
        @apply h-full;
      }

      .search-table {
        @apply h-full flex flex-col min-h-0 overflow-hidden;
      }

      .table-scroll {
        @apply flex-1 min-h-0 overflow-auto;
      }

      .table-grid {
        display: grid;
        grid-template-columns:
          minmax(104px, 1fr)
          36px
          minmax(92px, 0.8fr)
          minmax(260px, 2.6fr)
          56px
          minmax(112px, 1fr)
          32px;
        column-gap: 12px;
        align-items: center;
        min-width: 800px;
      }

      .table-header {
        @apply sticky top-0 z-10 rounded-ui bg-ui-card px-3 py-2 text-ui-caption font-medium whitespace-nowrap text-ui-muted;
      }

      .search-item {
        @apply px-3 py-3 border-b transition-colors last:border-b-0;

        border-color: var(--settings-border);

        &:hover {
          background: var(--app-ui-card-soft-bg);
        }

        .icon-wrapper {
          @apply flex items-center justify-center w-8 h-8 justify-self-center overflow-hidden;

          .engine-icon {
            @apply w-7 h-7 object-contain rounded;
          }

          .placeholder-icon {
            @apply text-ui-muted;
          }
        }

        .default-control,
        .delete-control {
          @apply flex items-center justify-center;
        }

        .delete-button {
          @apply px-2;

          :deep(.custom-button__icon) {
            @apply text-lg;
          }
        }
      }

      .url-tip {
        @apply flex items-start flex-none gap-2 mt-3 px-3 py-2.5 rounded-ui bg-ui-card-soft text-ui-caption text-ui-muted;
      }
    }
  }
}
</style>
