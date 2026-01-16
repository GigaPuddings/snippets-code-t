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
        <div class="config-title">
          <h1 class="title-text">{{ $t('retrieve.title') }}</h1>
          <div class="flex gap-4">
            <el-tooltip
              :content="$t('retrieve.resetDefault')"
              placement="top"
              effect="light"
            >
              <Redo
                class="add-btn"
                theme="outline"
                size="22"
                :strokeWidth="3"
                @click="resetEngines"
              />
            </el-tooltip>
            <el-tooltip
              :content="$t('retrieve.addNew')"
              placement="top"
              effect="light"
            >
              <Add
                class="add-btn"
                theme="outline"
                size="22"
                :strokeWidth="3"
                @click="handleAdd"
              />
            </el-tooltip>
          </div>
        </div>

        <div class="search-list">
          <el-empty
            v-if="searchEngines.length === 0"
            :description="$t('retrieve.noEngines')"
          />
          <div
            v-for="(engine, index) in searchEngines"
            :key="engine.id"
            class="search-item"
            :class="{ 'default-engine': engine.enabled }"
          >
            <div class="item-left">
              <el-input
                v-model="engine.name"
                class="keyword-input"
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
                    class="engine-icon"
                    theme="outline"
                    size="26"
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
                class="engine-input"
                :placeholder="$t('retrieve.keyword')"
                @change="handleInputChange"
              />
            </div>

            <div class="item-center">
              <el-input
                v-model="engine.url"
                :placeholder="$t('retrieve.urlFormat')"
                class="url-input"
                @change="handleUrlChange(engine)"
              />
            </div>

            <div class="item-right">
              <el-switch
                v-model="engine.enabled"
                class="enable-switch"
                inline-prompt
                :active-text="$t('retrieve.default')"
                :inactive-text="$t('retrieve.off')"
                active-color="#4b94f8"
                inactive-color="#dddddd"
                @change="handleSwitch(index)"
              />
              <el-select
                class="engine-select"
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
              <el-tooltip :content="$t('retrieve.deleteEngine')" placement="top" effect="light">
                <Reduce
                  class="delete-icon"
                  theme="outline"
                  size="22"
                  :strokeWidth="3"
                  strokeLinejoin="miter"
                  strokeLinecap="butt"
                  @click="handleDelete(index)"
                />
              </el-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Add, Redo, Reduce, Picture, Loading as LoadingIcon } from '@icon-park/vue-next';
import { uuid } from '@/utils';
import { invoke } from '@tauri-apps/api/core';
import { emit, listen } from '@tauri-apps/api/event';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';

const { t } = useI18n();
const searchEngines = ref<SearchEngineConfig[]>([]);
const defaultSearchEngines = ref<SearchEngineConfig[]>([]);
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

const handleDelete = async (index: number) => {
  const engine = searchEngines.value[index];
  
  try {
    await ElMessageBox.confirm(
      t('retrieve.deleteConfirm', { name: engine.name || engine.keyword }),
      t('common.warning'),
      {
        confirmButtonText: t('common.confirm'),
        cancelButtonText: t('common.cancel'),
        type: 'warning'
      }
    );
    
    const updatedEngines = searchEngines.value.filter((_, idx) => idx !== index);
    searchEngines.value = updatedEngines;

    // 如果删除的是默认搜索引擎，且还有其他引擎，则将第一个设为默认
    if (
      searchEngines.value.length > 0 &&
      !searchEngines.value.some((e) => e.enabled)
    ) {
      searchEngines.value[0].enabled = true;
    }

    // 自动保存更改
    const success = await saveAll(false);
    if (success) {
      modal.msg(t('retrieve.deleteSuccess'));
    }
  } catch (error) {
    // 用户取消，不做任何操作
  }
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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  
  .dark & {
    background: rgba(30, 30, 30, 0.9);
  }
  
  .scanning-content {
    @apply flex flex-col items-center gap-4 p-8 rounded-2xl;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    
    .dark & {
      background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
    }
    
    .scanning-icon {
      @apply text-blue-500;
    }
    
    .scanning-text {
      @apply text-base font-medium text-gray-700 dark:text-gray-200;
    }
    
    .scanning-progress {
      @apply text-sm text-gray-500 dark:text-gray-400 font-mono;
    }
  }
}

.retrieve-container {
  @apply relative w-full h-full overflow-hidden rounded-md border dark:border-panel;

  .search-config {
    @apply h-full bg-panel py-2 px-4 flex flex-col;

    .config-title {
      @apply flex items-center justify-between mt-1 mb-2 px-2;

      .title-text {
        @apply text-xl font-medium text-primary;
      }

      .add-btn {
        @apply cursor-pointer text-primary transition-colors;
      }
    }

    .search-list {
      @apply flex-grow overflow-y-auto rounded-md;

      .search-item {
        @apply flex items-center justify-between px-6 py-4 mb-2 last:mb-0 bg-content rounded-lg shadow-sm hover:shadow transition-all;

        &.default-engine {
          @apply border-l-4 border-panel;
        }

        :deep(.el-input__wrapper) {
          @apply border border-panel !bg-panel dark:!bg-content rounded-md shadow-none;

          &:hover {
            @apply border-panel;
          }

          &.is-focus {
            @apply border-panel shadow-sm;
          }
        }

        &.is-editing {
          @apply bg-gray-50;
        }

        .item-left {
          @apply flex items-center;

          .icon-wrapper {
            @apply flex items-center justify-center w-10 h-10 mx-3 bg-panel rounded-full overflow-hidden;

            .engine-icon {
              @apply w-6 h-6 object-contain rounded-md;
            }
          }

          .engine-name {
            @apply text-sm;
          }

          .keyword-input {
            @apply w-[100px] shrink-0;
          }

          .engine-input {
            @apply shrink-0 w-[140px];
          }
        }

        .item-center {
          @apply flex-1 mx-4;
        }

        .item-right {
          @apply flex items-center gap-4;

          .engine-select {
            @apply w-[140px];

            :deep(.el-select__wrapper) {
              @apply border border-panel rounded-md !bg-panel dark:!bg-content;

              &:hover {
                @apply border-panel;
              }
            }
          }

          .delete-icon {
            @apply cursor-pointer text-red-500 hover:text-red-600 transition-colors;
          }
        }
      }
    }
  }
}
</style>
