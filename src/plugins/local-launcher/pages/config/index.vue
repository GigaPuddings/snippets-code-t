<template>
  <main class="local-container">
    <!-- 头部区域 -->
    <div class="local-header">
      <div class="header-main">
        <!-- Tab 和统计 -->
        <div class="header-left">
          <el-segmented v-model="activeTab" :options="tabs" size="default" />
          <div class="header-stats">
            <span class="stat-text">
              {{ $t('local.total') }}
              <strong>{{ currentList.length }}</strong>
              {{ $t('local.items') }}
            </span>
            <span v-if="searchQuery" class="stat-text">
              / {{ $t('local.showing') }}
              <strong>{{ filteredList.length }}</strong>
              {{ $t('local.items') }}
            </span>
          </div>
        </div>

        <!-- 搜索和操作 -->
        <div class="header-right">
          <div class="search-wrapper">
            <Search
              class="search-icon"
              theme="outline"
              size="16"
              :strokeWidth="3"
            />
            <el-input
              v-model="searchQuery"
              :placeholder="$t('local.search')"
              clearable
              size="default"
              class="search-input"
            />
          </div>
          <el-tooltip
            effect="light"
            :content="isEditMode ? $t('local.done') : $t('local.edit')"
            placement="bottom"
          >
            <el-button
              :type="isEditMode ? 'primary' : 'default'"
              :icon="isEditMode ? Check : Edit"
              size="default"
              @click="toggleEditMode"
              :disabled="currentList.length === 0"
            />
          </el-tooltip>
          <el-tooltip
            effect="light"
            :content="$t('local.add')"
            placement="bottom"
          >
            <el-button
              type="primary"
              :icon="Plus"
              size="default"
              @click="handleAdd"
            />
          </el-tooltip>
        </div>
      </div>

      <div
        v-if="isScanning"
        class="scan-status"
        :class="{ 'is-initial': isInitialIndexing }"
        role="status"
        aria-live="polite"
      >
        <div class="scan-status__summary">
          <span class="scan-status__icon">
            <LoadingIcon theme="outline" size="17" :strokeWidth="3" spin />
          </span>
          <div class="scan-status__copy">
            <span class="scan-status__title">{{ localizedScanStage }}</span>
            <span class="scan-status__hint">
              {{
                isInitialIndexing
                  ? $t('local.firstIndexingHint')
                  : $t('local.backgroundIndexingHint')
              }}
            </span>
          </div>
          <div class="scan-status__metrics">
            <span v-if="scanTotal > 0" class="scan-status__count">
              {{ scanCurrent }} / {{ scanTotal }}
            </span>
            <span class="scan-status__percent">
              {{ scanTotal > 0 ? `${scanPercent}%` : '…' }}
            </span>
          </div>
        </div>
        <div v-if="scanTotal > 0" class="scan-status__track">
          <div
            class="scan-status__bar"
            :style="{ width: `${scanPercent}%` }"
          ></div>
        </div>
      </div>
    </div>

    <!-- 内容区域 -->
    <div ref="localContentRef" class="local-content">
      <div
        v-if="isInitialIndexing"
        class="initial-index-skeleton"
        :aria-label="$t('local.firstIndexingHint')"
      >
        <div
          v-for="index in visibleListItemCount"
          :key="index"
          class="skeleton-row"
        >
          <span class="skeleton-number"></span>
          <span class="skeleton-icon"></span>
          <span class="skeleton-copy">
            <span class="skeleton-title"></span>
            <span class="skeleton-path"></span>
          </span>
        </div>
      </div>

      <el-empty
        v-else-if="filteredList.length === 0"
        :description="
          searchQuery
            ? $t('local.noMatch')
            : $t('local.noData', {
                type:
                  activeTab === 'app' ? $t('local.apps') : $t('local.bookmarks')
              })
        "
      >
        <el-button v-if="!searchQuery" type="primary" @click="handleAdd">
          {{
            $t('local.addItem', {
              type:
                activeTab === 'app' ? $t('local.apps') : $t('local.bookmarks')
            })
          }}
        </el-button>
      </el-empty>

      <RecycleScroller
        v-else
        class="local-list"
        :items="filteredList"
        :item-size="listItemSize"
        :buffer="200"
        key-field="id"
        v-slot="{ item, index }"
      >
        <div class="item-wrapper" :style="{ height: `${listItemSize}px` }">
          <div
            class="local-item"
            :class="{ 'is-editing': isEditMode }"
            @click="!isEditMode && handleItemClick(item)"
          >
            <div class="item-number">{{ index + 1 }}</div>
            <div class="item-content">
              <div class="item-icon">
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  :alt="item.title"
                  class="icon-image"
                />
                <component
                  v-else
                  :is="activeTab === 'app' ? Application : Browser"
                  class="icon-placeholder"
                  theme="outline"
                  size="28"
                  :strokeWidth="3"
                />
              </div>
              <div class="item-info">
                <div class="item-title-row">
                  <span class="item-title">{{ item.title }}</span>
                  <div
                    v-if="item.usage_count > 0"
                    class="usage-indicator"
                    :class="`usage-level-${getUsageLevel(item.usage_count)}`"
                  >
                    <el-tooltip
                      effect="light"
                      :content="
                        $t('local.usedTimes', { count: item.usage_count })
                      "
                      placement="top"
                    >
                      <span class="usage-indicator__count">
                        {{ formatUsageCount(item.usage_count) }}
                      </span>
                    </el-tooltip>
                  </div>
                </div>
                <div class="item-path">
                  <component
                    :is="activeTab === 'app' ? FolderOpen : Link"
                    size="14"
                    :strokeWidth="3"
                  />
                  <span>{{ item.content }}</span>
                </div>
              </div>
            </div>
            <div class="item-actions">
              <el-button
                v-if="!isEditMode"
                type="primary"
                text
                :icon="Edit"
                @click.stop="handleEdit(item)"
              >
                {{ $t('local.edit') }}
              </el-button>
              <el-button
                v-if="isEditMode"
                type="danger"
                text
                :icon="Delete"
                @click.stop="handleDelete(item)"
              >
                {{ $t('local.delete') }}
              </el-button>
            </div>
          </div>
        </div>
      </RecycleScroller>
    </div>

    <EditDialog
      ref="editDialogRef"
      :type="activeTab"
      :edit-data="currentEditData"
      @submit="handleSubmit"
      @delete="handleDeleteFromDialog"
    />

    <!-- 删除确认对话框 -->
    <ConfirmDialog
      v-model="showDeleteDialog"
      :title="$t('local.deleteTitle')"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      type="danger"
      @confirm="confirmDelete"
    >
      <div>
        {{ $t('local.deleteConfirm', { name: deleteTarget?.title || '' }) }}
      </div>
    </ConfirmDialog>
  </main>
</template>

<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';

const { t } = useI18n();
import {
  Edit,
  Delete,
  Plus,
  Check,
  Application,
  Browser,
  FolderOpen,
  Link,
  Search,
  Loading as LoadingIcon
} from '@icon-park/vue-next';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import EditDialog from './components/EditDialog.vue';
import { ConfirmDialog } from '@/components/UI';
import { getPrimarySearchHistoryKey } from '@/hooks/searchRanking';

defineOptions({
  name: 'Local',
  keepAlive: true
});

interface AppInfo {
  id: string;
  title: string;
  content: string;
  icon?: string | null;
  summarize: string;
  usage_count: number;
}

interface BookmarkInfo {
  id: string;
  title: string;
  content: string;
  icon?: string | null;
  summarize: string;
  usage_count: number;
}

interface EditSubmitData {
  id?: string;
  title: string;
  content: string;
  icon?: string | null;
}

interface ScanProgressState {
  owner: string;
  task: string;
  stage: string;
  current: number;
  total: number;
  current_item: string;
  completed: boolean;
}

interface ScanProgressPayload {
  owner: string;
  task: string;
  stage: string;
  current: number;
  total: number;
  currentItem?: string;
}

interface ScanCompletePayload {
  owner: string;
}

interface SearchHistoryClearedPayload {
  scope: string;
  count: number;
}

const LOCAL_LAUNCHER_OWNER = 'local-launcher';
const LOCAL_LAUNCHER_TASKS = new Set(['index', 'icons']);

const tabs = computed(() => [
  { label: t('local.apps'), value: 'app' },
  { label: t('local.bookmarks'), value: 'bookmark' }
]);

const activeTab = ref<'app' | 'bookmark'>('app');
const isEditMode = ref(false);
const searchQuery = ref('');
const apps = ref<AppInfo[]>([]);
const bookmarks = ref<BookmarkInfo[]>([]);
const editDialogRef = ref();
const currentEditData = ref<AppInfo | BookmarkInfo | null>(null);
const showDeleteDialog = ref(false);
const deleteTarget = ref<AppInfo | BookmarkInfo | null>(null);
const deleteFromDialog = ref(false);
const localContentRef = ref<HTMLElement | null>(null);
const listItemSize = ref(88);
const visibleListItemCount = 8;

// 扫描状态
const isScanning = ref(false);
const scanStage = ref('');
const scanCurrent = ref(0);
const scanTotal = ref(0);
const scanTask = ref('');
let scanEventVersion = 0;
let unlistenProgress: (() => void) | null = null;
let unlistenComplete: (() => void) | null = null;
let unlistenCancelled: (() => void) | null = null;
let unlistenIndexUpdated: (() => void) | null = null;
let unlistenSearchHistoryCleared: (() => void) | null = null;
let listResizeObserver: ResizeObserver | null = null;

const currentList = computed(() => {
  return activeTab.value === 'app' ? apps.value : bookmarks.value;
});

const isInitialIndexing = computed(
  () =>
    isScanning.value && apps.value.length === 0 && bookmarks.value.length === 0
);

const scanPercent = computed(() => {
  if (scanTotal.value <= 0) return 0;
  return Math.min(
    100,
    Math.max(0, Math.round((scanCurrent.value / scanTotal.value) * 100))
  );
});

const localizedScanStage = computed(() => {
  if (scanTask.value === 'icons') return t('progress.loadingIcons');

  const stage = scanStage.value.toLocaleLowerCase();
  if (stage.includes('保存') || stage.includes('saving')) {
    return t('progress.savingToDatabase');
  }
  if (stage.includes('书签') || stage.includes('bookmark')) {
    return t('progress.scanningBookmarks');
  }
  if (stage.includes('应用') || stage.includes('application')) {
    return t('progress.scanningApps');
  }
  if (stage.includes('桌面') || stage.includes('desktop')) {
    return t('progress.scanningDesktopFiles');
  }
  return t('progress.title');
});

// 搜索过滤
const filteredList = computed(() => {
  if (!searchQuery.value.trim()) {
    return currentList.value;
  }

  const query = searchQuery.value.toLowerCase();
  return currentList.value.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
  );
});

// 加载数据
const loadApps = async () => {
  try {
    const result = await invoke<AppInfo[]>('get_apps');
    apps.value = result || [];
  } catch (error) {
    console.error('加载应用失败:', error);
    modal.error(t('local.loadFailed', { type: t('local.apps') }));
  }
};

const loadBookmarks = async () => {
  try {
    const result = await invoke<BookmarkInfo[]>('get_bookmarks');
    bookmarks.value = result || [];
  } catch (error) {
    console.error('加载书签失败:', error);
    modal.error(t('local.loadFailed', { type: t('local.bookmarks') }));
  }
};

const loadData = async () => {
  await Promise.all([loadApps(), loadBookmarks()]);
};

const resetScanState = () => {
  isScanning.value = false;
  scanTask.value = '';
  scanStage.value = '';
  scanCurrent.value = 0;
  scanTotal.value = 0;
};

const isLocalLauncherProgress = (
  payload: Pick<ScanProgressPayload, 'owner' | 'task'>
) =>
  payload.owner === LOCAL_LAUNCHER_OWNER &&
  LOCAL_LAUNCHER_TASKS.has(payload.task);

const applyScanProgress = (payload: ScanProgressPayload) => {
  if (!isLocalLauncherProgress(payload)) return;

  isScanning.value = true;
  scanTask.value = payload.task;
  scanStage.value = payload.stage;
  scanCurrent.value = Math.max(0, payload.current);
  scanTotal.value = Math.max(0, payload.total);
};

// 切换编辑模式
const toggleEditMode = () => {
  isEditMode.value = !isEditMode.value;
};

// 新增
const handleAdd = () => {
  currentEditData.value = null;
  editDialogRef.value?.open();
};

// 编辑
const handleEdit = (item: AppInfo | BookmarkInfo) => {
  currentEditData.value = { ...item };
  editDialogRef.value?.open();
};

// 点击项目（非编辑模式）
const handleItemClick = async (item: AppInfo | BookmarkInfo) => {
  try {
    // 记录使用历史：与快速搜索窗口使用同一套稳定 key（app:path:* / bookmark:url:*），
    // 保证两侧的使用次数统计写入同一条记录
    const source = activeTab.value === 'app' ? 'app' : 'bookmark';
    const historyKey = getPrimarySearchHistoryKey({
      id: item.id,
      title: item.title,
      content: item.content,
      summarize: source,
      metadata: { source }
    });
    await invoke('add_search_history', { id: historyKey });

    // 打开应用或书签
    if (activeTab.value === 'app') {
      await invoke('open_app_command', { appPath: item.content });
    } else {
      await invoke('open_url', { url: item.content });
    }

    // 重新加载数据以更新排序
    await loadData();
  } catch (error) {
    console.error(
      `打开${activeTab.value === 'app' ? '应用' : '书签'}失败:`,
      error
    );
    modal.error(
      t('local.openFailed', {
        type: activeTab.value === 'app' ? t('local.apps') : t('local.bookmarks')
      })
    );
  }
};

// 提交（新增或编辑）
const handleSubmit = async (data: EditSubmitData) => {
  try {
    if (data.id) {
      // 编辑
      if (activeTab.value === 'app') {
        await invoke('update_app', {
          id: data.id,
          title: data.title,
          content: data.content,
          icon: data.icon || null
        });
        modal.success(t('local.updateSuccess', { type: t('local.apps') }));
      } else {
        await invoke('update_bookmark', {
          id: data.id,
          title: data.title,
          content: data.content,
          icon: data.icon || null
        });
        modal.success(t('local.updateSuccess', { type: t('local.bookmarks') }));
      }
    } else {
      // 新增
      if (activeTab.value === 'app') {
        await invoke('add_app', {
          title: data.title,
          content: data.content,
          icon: data.icon || null
        });
        modal.success(t('local.addSuccess', { type: t('local.apps') }));
      } else {
        await invoke('add_bookmark', {
          title: data.title,
          content: data.content,
          icon: data.icon || null
        });
        modal.success(t('local.addSuccess', { type: t('local.bookmarks') }));
      }
    }
    await loadData();
  } catch (error) {
    console.error('操作失败:', error);
    modal.error(t('local.operationFailed'));
  }
};

// 删除
const handleDelete = (item: AppInfo | BookmarkInfo) => {
  deleteTarget.value = item;
  deleteFromDialog.value = false;
  showDeleteDialog.value = true;
};

// Delete from dialog
const handleDeleteFromDialog = (id: string) => {
  const item =
    activeTab.value === 'app'
      ? apps.value.find((a) => a.id === id)
      : bookmarks.value.find((b) => b.id === id);

  if (item) {
    deleteTarget.value = item;
    deleteFromDialog.value = true;
    showDeleteDialog.value = true;
  }
};

const confirmDelete = async () => {
  if (!deleteTarget.value) return;

  try {
    if (activeTab.value === 'app') {
      await invoke('delete_app', { id: deleteTarget.value.id });
      modal.success(t('local.deleteSuccess', { type: t('local.apps') }));
    } else {
      await invoke('delete_bookmark', { id: deleteTarget.value.id });
      modal.success(t('local.deleteSuccess', { type: t('local.bookmarks') }));
    }
    await loadData();
    showDeleteDialog.value = false;
    deleteTarget.value = null;
  } catch (error) {
    console.error('Delete failed:', error);
    modal.error(t('local.deleteFailed'));
  }
};

// 根据使用次数获取等级（1-4）
const getUsageLevel = (count: number) => {
  if (count >= 50) return 4; // 经常使用：红色
  if (count >= 20) return 3; // 很常用：橙色
  if (count >= 5) return 2; // 常用：绿色
  return 1; // 偶尔使用：蓝色
};

// 使用次数徽标文案（超出两位数时收敛显示）
const formatUsageCount = (count: number) => (count > 99 ? '99+' : `${count}`);

// 检查扫描状态
const checkScanStatus = async () => {
  const versionBeforeHydration = scanEventVersion;
  try {
    const state = await invoke<ScanProgressState>('get_scan_progress_state');

    // 监听建立后若已收到更新事件，不再用较旧的快照覆盖实时状态。
    if (versionBeforeHydration !== scanEventVersion) return;

    if (!state.completed && state.stage && isLocalLauncherProgress(state)) {
      applyScanProgress(state);
    } else if (!state.owner || state.owner === LOCAL_LAUNCHER_OWNER) {
      resetScanState();
    }
  } catch (error) {
    console.error('获取扫描状态失败:', error);
  }
};

// 监听扫描事件
const setupScanListeners = async () => {
  [
    unlistenProgress,
    unlistenComplete,
    unlistenCancelled,
    unlistenIndexUpdated,
    unlistenSearchHistoryCleared
  ] = await Promise.all([
    listen<ScanProgressPayload>('scan-progress', (event) => {
      if (!isLocalLauncherProgress(event.payload)) return;
      scanEventVersion += 1;
      applyScanProgress(event.payload);
    }),
    listen<ScanCompletePayload>('scan-complete', async (event) => {
      if (event.payload.owner !== LOCAL_LAUNCHER_OWNER) return;
      scanEventVersion += 1;
      resetScanState();
      await loadData();
    }),
    listen<ScanCompletePayload>('scan-cancelled', (event) => {
      if (event.payload.owner !== LOCAL_LAUNCHER_OWNER) return;
      scanEventVersion += 1;
      resetScanState();
    }),
    listen('local-launcher-index-updated', async () => {
      await loadData();
    }),
    listen<SearchHistoryClearedPayload>(
      'search-history-cleared',
      async (event) => {
        if (!['all', 'apps', 'bookmarks'].includes(event.payload.scope)) return;
        await loadData();
      }
    )
  ]);
};

const updateListItemSize = () => {
  const contentHeight = localContentRef.value?.clientHeight ?? 0;
  if (contentHeight <= 0) return;

  listItemSize.value = Math.max(64, contentHeight / visibleListItemCount);
};

const setupListResizeObserver = async () => {
  await nextTick();
  updateListItemSize();

  if (!localContentRef.value || typeof ResizeObserver === 'undefined') return;

  listResizeObserver = new ResizeObserver(updateListItemSize);
  listResizeObserver.observe(localContentRef.value);
};

onMounted(async () => {
  await setupListResizeObserver();
  // 先监听再恢复快照，避免页面挂载期间漏掉完成或取消事件。
  await setupScanListeners();
  await checkScanStatus();
  // 加载数据
  await loadData();
});

onUnmounted(() => {
  if (unlistenProgress) unlistenProgress();
  if (unlistenComplete) unlistenComplete();
  if (unlistenCancelled) unlistenCancelled();
  if (unlistenIndexUpdated) unlistenIndexUpdated();
  if (unlistenSearchHistoryCleared) unlistenSearchHistoryCleared();
  listResizeObserver?.disconnect();
  listResizeObserver = null;
});
</script>

<style scoped lang="scss">
.local-container {
  @apply w-full h-full flex flex-col overflow-hidden p-4 pt-2 relative text-panel;

  .local-header {
    @apply mb-2;

    .header-main {
      @apply flex items-center justify-between gap-3 px-3 py-2 rounded-md bg-panel border border-panel;

      .header-left {
        @apply flex items-center gap-3 min-w-0;

        .el-segmented {
          --el-segmented-item-selected-bg-color: var(--search-result-active);
          --el-segmented-item-selected-color: var(--categories-text-color);
          --el-segmented-bg-color: var(--search-card-bg);
          --el-border-radius-base: 6px;
        }

        .header-stats {
          @apply flex items-center gap-2 text-xs text-panel-text-secondary whitespace-nowrap;

          .stat-text {
            @apply flex items-center gap-1;

            strong {
              @apply text-panel font-semibold;
            }
          }
        }
      }

      .header-right {
        @apply flex items-center gap-2 min-w-0;

        .search-wrapper {
          @apply relative;

          width: 260px;

          .search-icon {
            @apply absolute left-2.5 top-1/2 transform -translate-y-1/2 text-panel-text-secondary pointer-events-none z-10;
          }

          .search-input {
            @apply w-full;

            :deep(.el-input__wrapper) {
              @apply rounded-md border border-panel shadow-none;

              padding-left: 32px;
              background: var(--search-input-bg);

              &:hover,
              &.is-focus {
                border-color: var(--search-result-active-border);
              }
            }
          }
        }
      }
    }

    .scan-status {
      @apply mt-2 overflow-hidden rounded-md border border-panel bg-panel px-3 py-2;

      &.is-initial {
        background: var(--search-card-bg);
      }

      .scan-status__summary {
        @apply flex min-w-0 items-center gap-2.5;
      }

      .scan-status__icon {
        @apply flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-blue-500;

        background: var(--search-result-active);
      }

      .scan-status__copy {
        @apply flex min-w-0 flex-1 flex-col;
      }

      .scan-status__title {
        @apply truncate text-xs font-semibold text-panel;
      }

      .scan-status__hint {
        @apply truncate text-[11px] text-panel-text-secondary;
      }

      .scan-status__metrics {
        @apply flex flex-shrink-0 items-center gap-2 font-mono text-[11px];
      }

      .scan-status__count {
        @apply text-panel-text-secondary;
      }

      .scan-status__percent {
        @apply min-w-[34px] text-right font-semibold text-blue-500;
      }

      .scan-status__track {
        @apply mt-2 h-1 overflow-hidden rounded-full;

        background: var(--search-input-bg);
      }

      .scan-status__bar {
        @apply h-full rounded-full bg-blue-500 transition-[width] duration-300 ease-out;
      }
    }
  }

  .local-content {
    @apply flex-1 overflow-hidden;

    .initial-index-skeleton {
      @apply flex h-full flex-col gap-1 overflow-hidden;

      .skeleton-row {
        @apply flex min-h-[64px] flex-1 items-center gap-3 rounded-md border border-panel bg-panel px-3 py-2;
      }

      .skeleton-number,
      .skeleton-icon,
      .skeleton-title,
      .skeleton-path {
        @apply animate-pulse rounded;

        background: var(--search-card-bg);
      }

      .skeleton-number {
        @apply h-6 w-6 flex-shrink-0;
      }

      .skeleton-icon {
        @apply h-[38px] w-[38px] flex-shrink-0 rounded-md;
      }

      .skeleton-copy {
        @apply flex min-w-0 flex-1 flex-col gap-2;
      }

      .skeleton-title {
        @apply h-3.5 w-2/5;
      }

      .skeleton-path {
        @apply h-2.5 w-3/5;
      }
    }

    .local-list {
      @apply h-full;

      :deep(.vue-recycle-scroller__item-wrapper) {
        @apply pr-2;
      }

      .item-wrapper {
        @apply pb-1 box-border;
      }

      .local-item {
        @apply flex items-center gap-3 px-3 py-2 rounded-md border border-panel bg-panel cursor-pointer transition-colors duration-150 h-full min-h-0;

        &.is-editing {
          @apply cursor-default;
        }

        &:hover:not(.is-editing) {
          background: var(--search-result-active);
          border-color: var(--search-result-active-border);
        }

        .item-number {
          @apply flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-md text-xs font-bold;

          color: var(--search-result-accent);
          background: var(--search-card-bg);
        }

        .item-content {
          @apply flex items-center gap-3 flex-1 overflow-hidden;

          .item-icon {
            @apply flex-shrink-0 w-[38px] h-[38px] flex items-center justify-center rounded-md bg-content border border-panel;

            .icon-image {
              @apply w-[30px] h-[30px] object-contain;
            }

            .icon-placeholder {
              @apply text-panel-text-secondary;
            }
          }

          .item-info {
            @apply flex-1 overflow-hidden;

            .item-title-row {
              @apply flex items-center gap-2 mb-0.5;

              .item-title {
                @apply text-sm font-semibold text-panel truncate;
              }

              .usage-indicator {
                @apply inline-flex flex-shrink-0 items-center justify-center rounded-full px-1.5 h-[18px] min-w-[18px];

                .usage-indicator__count {
                  @apply block text-[10px] font-semibold leading-none font-mono;
                }

                &.usage-level-1 {
                  @apply text-blue-600 bg-blue-500/10 dark:text-blue-300;

                  .usage-indicator__count {
                    @apply text-blue-600 dark:text-blue-300;
                  }
                }

                &.usage-level-2 {
                  @apply text-green-600 bg-green-500/10 dark:text-green-300;

                  .usage-indicator__count {
                    @apply text-green-600 dark:text-green-300;
                  }
                }

                &.usage-level-3 {
                  @apply text-orange-600 bg-orange-500/10 dark:text-orange-300;

                  .usage-indicator__count {
                    @apply text-orange-600 dark:text-orange-300;
                  }
                }

                &.usage-level-4 {
                  @apply text-red-600 bg-red-500/10 dark:text-red-300;

                  .usage-indicator__count {
                    @apply text-red-600 dark:text-red-300;
                  }
                }
              }
            }

            .item-path {
              @apply flex items-center gap-1 text-xs text-panel-text-secondary truncate;

              span {
                @apply truncate;
              }
            }
          }
        }

        .item-actions {
          @apply flex-shrink-0 flex items-center;
        }
      }
    }
  }
}
</style>
