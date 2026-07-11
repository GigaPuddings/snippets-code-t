<template>
  <main class="local-container">
    <!-- 加载中提示 -->
    <div v-if="isScanning" class="scanning-overlay">
      <div class="scanning-content">
        <LoadingIcon class="scanning-icon" theme="outline" size="48" :strokeWidth="3" spin />
        <div class="scanning-text">{{ scanStage || $t('progress.preparing') }}</div>
        <div class="scanning-progress">{{ scanCurrent }}/{{ scanTotal }}</div>
      </div>
    </div>

    <!-- 头部区域 -->
    <div class="local-header">
      <div class="header-main">
        <!-- Tab 和统计 -->
        <div class="header-left">
          <el-segmented v-model="activeTab" :options="tabs" size="default" />
          <div class="header-stats">
            <span class="stat-text">{{ $t('local.total') }} <strong>{{ currentList.length }}</strong> {{ $t('local.items') }}</span>
            <span v-if="searchQuery" class="stat-text">/ {{ $t('local.showing') }} <strong>{{ filteredList.length }}</strong> {{ $t('local.items') }}</span>
          </div>
        </div>
        
        <!-- 搜索和操作 -->
        <div class="header-right">
          <div class="search-wrapper">
            <Search class="search-icon" theme="outline" size="16" :strokeWidth="3" />
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
          <el-tooltip effect="light" :content="$t('local.add')" placement="bottom">
            <el-button
              type="primary"
              :icon="Plus"
              size="default"
              @click="handleAdd"
            />
          </el-tooltip>
        </div>
      </div>
    </div>

    <!-- 内容区域 -->
    <div ref="localContentRef" class="local-content">
      <el-empty
        v-if="filteredList.length === 0"
        :description="searchQuery ? $t('local.noMatch') : $t('local.noData', { type: activeTab === 'app' ? $t('local.apps') : $t('local.bookmarks') })"
      >
        <el-button v-if="!searchQuery" type="primary" @click="handleAdd">
          {{ $t('local.addItem', { type: activeTab === 'app' ? $t('local.apps') : $t('local.bookmarks') }) }}
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
                      :content="$t('local.usedTimes', { count: item.usage_count })"
                      placement="top"
                    >
                      <span class="usage-indicator__dot"></span>
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
      <div>{{ $t('local.deleteConfirm', { name: deleteTarget?.title || '' }) }}</div>
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
let unlistenProgress: (() => void) | null = null;
let unlistenComplete: (() => void) | null = null;
let listResizeObserver: ResizeObserver | null = null;

const currentList = computed(() => {
  return activeTab.value === 'app' ? apps.value : bookmarks.value;
});

// 搜索过滤
const filteredList = computed(() => {
  if (!searchQuery.value.trim()) {
    return currentList.value;
  }
  
  const query = searchQuery.value.toLowerCase();
  return currentList.value.filter(item => 
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
    // 记录使用历史
    await invoke('add_search_history', { id: item.id });
    
    // 打开应用或书签
    if (activeTab.value === 'app') {
      await invoke('open_app_command', { appPath: item.content });
    } else {
      await invoke('open_url', { url: item.content });
    }
    
    // 重新加载数据以更新排序
    await loadData();
  } catch (error) {
    console.error(`打开${activeTab.value === 'app' ? '应用' : '书签'}失败:`, error);
    modal.error(t('local.openFailed', { type: activeTab.value === 'app' ? t('local.apps') : t('local.bookmarks') }));
  }
};

// 提交（新增或编辑）
const handleSubmit = async (data: any) => {
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
  const item = activeTab.value === 'app' 
    ? apps.value.find(a => a.id === id)
    : bookmarks.value.find(b => b.id === id);
  
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
  if (count >= 50) return 4;    // 经常使用：红色
  if (count >= 20) return 3;    // 很常用：橙色
  if (count >= 5) return 2;     // 常用：绿色
  return 1;                      // 偶尔使用：蓝色
};

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
    await loadData();
  });
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
  // 先检查扫描状态
  await checkScanStatus();
  // 设置事件监听
  await setupScanListeners();
  // 加载数据
  await loadData();
});

onUnmounted(() => {
  if (unlistenProgress) unlistenProgress();
  if (unlistenComplete) unlistenComplete();
  listResizeObserver?.disconnect();
  listResizeObserver = null;
});
</script>

<style scoped lang="scss">
.local-container {
  @apply w-full h-full flex flex-col overflow-hidden p-4 pt-2 relative text-panel;

  .scanning-overlay {
    @apply absolute inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-[rgba(30,30,30,0.9)];
    backdrop-filter: blur(4px);
    
    .scanning-content {
      @apply flex flex-col items-center gap-3 p-6 rounded-lg border border-panel;
      background: var(--search-bg);
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.14);
      
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
  }

  .local-content {
    @apply flex-1 overflow-hidden;

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
                @apply inline-flex flex-shrink-0 w-4 h-4 items-center justify-center rounded;

                .usage-indicator__dot {
                  @apply block w-2 h-2 rounded-full;
                }

                &.usage-level-1 {
                  .usage-indicator__dot {
                    @apply bg-blue-500;
                  }
                }

                &.usage-level-2 {
                  .usage-indicator__dot {
                    @apply bg-green-500;
                  }
                }

                &.usage-level-3 {
                  .usage-indicator__dot {
                    @apply bg-orange-500;
                  }
                }

                &.usage-level-4 {
                  .usage-indicator__dot {
                    @apply bg-red-500;
                    animation: pulse-dot 2s ease-in-out infinite;
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

// 脉动动画（仅用于最高等级）
@keyframes pulse-dot {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}
</style>
