<template>
  <main class="local-container">
    <!-- 头部区域 -->
    <div class="local-header">
      <div class="header-main">
        <!-- Tab 和统计 -->
        <div class="header-left">
          <el-segmented v-model="activeTab" :options="tabs" size="default" />
          <div class="header-stats">
            <span class="stat-text">共 <strong>{{ currentList.length }}</strong> 项</span>
            <span v-if="searchQuery" class="stat-text">/ 显示 <strong>{{ filteredList.length }}</strong> 项</span>
          </div>
        </div>
        
        <!-- 搜索和操作 -->
        <div class="header-right">
          <div class="search-wrapper">
            <Search class="search-icon" theme="outline" size="16" :strokeWidth="3" />
            <el-input
              v-model="searchQuery"
              placeholder="搜索..."
              clearable
              size="default"
              class="search-input"
            />
          </div>
          <el-tooltip
            :content="isEditMode ? '完成' : '编辑'"
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
          <el-tooltip content="新增" placement="bottom">
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
    <div class="local-content">
      <el-empty
        v-if="filteredList.length === 0"
        :description="searchQuery ? '没有找到匹配的结果' : `暂无${activeTab === 'app' ? '应用' : '书签'}数据`"
      >
        <el-button v-if="!searchQuery" type="primary" @click="handleAdd">
          添加{{ activeTab === 'app' ? '应用' : '书签' }}
        </el-button>
      </el-empty>

      <RecycleScroller
        v-else
        class="local-list"
        :items="filteredList"
        :item-size="96"
        :buffer="200"
        key-field="id"
        v-slot="{ item, index }"
      >
        <div class="item-wrapper">
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
                    :title="`使用 ${item.usage_count} 次`"
                  ></div>
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
              编辑
            </el-button>
            <el-button
              v-if="isEditMode"
              type="danger"
              text
              :icon="Delete"
              @click.stop="handleDelete(item)"
            >
              删除
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
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { invoke } from '@tauri-apps/api/core';
import { ElMessage, ElMessageBox } from 'element-plus';
import {
  Edit,
  Delete,
  Plus,
  Check,
  Application,
  Browser,
  FolderOpen,
  Link,
  Search
} from '@icon-park/vue-next';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import EditDialog from './components/EditDialog.vue';

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

const tabs = [
  { label: '本地应用', value: 'app' },
  { label: '浏览器书签', value: 'bookmark' }
];

const activeTab = ref<'app' | 'bookmark'>('app');
const isEditMode = ref(false);
const searchQuery = ref('');
const apps = ref<AppInfo[]>([]);
const bookmarks = ref<BookmarkInfo[]>([]);
const editDialogRef = ref();
const currentEditData = ref<AppInfo | BookmarkInfo | null>(null);

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
    ElMessage.error('加载应用失败');
  }
};

const loadBookmarks = async () => {
  try {
    const result = await invoke<BookmarkInfo[]>('get_bookmarks');
    bookmarks.value = result || [];
  } catch (error) {
    console.error('加载书签失败:', error);
    ElMessage.error('加载书签失败');
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
    ElMessage.error(`打开${activeTab.value === 'app' ? '应用' : '书签'}失败`);
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
        ElMessage.success('应用更新成功');
      } else {
        await invoke('update_bookmark', {
          id: data.id,
          title: data.title,
          content: data.content,
          icon: data.icon || null
        });
        ElMessage.success('书签更新成功');
      }
    } else {
      // 新增
      if (activeTab.value === 'app') {
        await invoke('add_app', {
          title: data.title,
          content: data.content,
          icon: data.icon || null
        });
        ElMessage.success('应用添加成功');
      } else {
        await invoke('add_bookmark', {
          title: data.title,
          content: data.content,
          icon: data.icon || null
        });
        ElMessage.success('书签添加成功');
      }
    }
    await loadData();
  } catch (error) {
    console.error('操作失败:', error);
    ElMessage.error('操作失败');
  }
};

// 删除
const handleDelete = async (item: AppInfo | BookmarkInfo) => {
  try {
    await ElMessageBox.confirm(
      `确定要删除"${item.title}"吗？`,
      '删除确认',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    );

    if (activeTab.value === 'app') {
      await invoke('delete_app', { id: item.id });
      ElMessage.success('应用删除成功');
    } else {
      await invoke('delete_bookmark', { id: item.id });
      ElMessage.success('书签删除成功');
    }
    await loadData();
  } catch (error) {
    if (error !== 'cancel') {
      console.error('删除失败:', error);
      ElMessage.error('删除失败');
    }
  }
};

// 从对话框删除
const handleDeleteFromDialog = async (id: string) => {
  try {
    await ElMessageBox.confirm(
      '确定要删除吗？',
      '删除确认',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    );

    if (activeTab.value === 'app') {
      await invoke('delete_app', { id });
      ElMessage.success('应用删除成功');
    } else {
      await invoke('delete_bookmark', { id });
      ElMessage.success('书签删除成功');
    }
    await loadData();
  } catch (error) {
    if (error !== 'cancel') {
      console.error('删除失败:', error);
      ElMessage.error('删除失败');
    }
  }
};

// 根据使用次数获取等级（1-4）
const getUsageLevel = (count: number) => {
  if (count >= 50) return 4;    // 经常使用：红色
  if (count >= 20) return 3;    // 很常用：橙色
  if (count >= 5) return 2;     // 常用：绿色
  return 1;                      // 偶尔使用：蓝色
};

onMounted(() => {
  loadData();
});
</script>

<style scoped lang="scss">
.local-container {
  @apply w-full h-full flex flex-col overflow-hidden p-6 pt-2;

  .local-header {
    @apply mb-3;

    .header-main {
      @apply flex items-center justify-between gap-4 p-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700;

      .header-left {
        @apply flex items-center gap-4;

        .el-segmented {
          --el-segmented-item-selected-bg-color: var(--el-color-primary);
          --el-border-radius-base: 8px;
        }

        .header-stats {
          @apply flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400;

          .stat-text {
            @apply flex items-center gap-1;

            strong {
              @apply text-gray-900 dark:text-white font-semibold;
            }
          }
        }
      }

      .header-right {
        @apply flex items-center gap-2;

        .search-wrapper {
          @apply relative;
          width: 240px;

          .search-icon {
            @apply absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none z-10;
          }

          .search-input {
            @apply w-full;

            :deep(.el-input__wrapper) {
              padding-left: 32px;
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
        @apply pb-3;
      }

      .local-item {
        @apply flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-panel hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 cursor-pointer transition-all duration-200;
        
        &.is-editing {
          @apply cursor-default hover:shadow-none hover:border-gray-200 dark:hover:border-neutral-700;
        }

        &:hover:not(.is-editing) {
          transform: translateY(-2px);
        }

        .item-number {
          @apply flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-bold;
        }

        .item-content {
          @apply flex items-center gap-4 flex-1 overflow-hidden;

          .item-icon {
            @apply flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-700 shadow-sm;

            .icon-image {
              @apply w-11 h-11 object-contain;
            }

            .icon-placeholder {
              @apply text-gray-400 dark:text-gray-500;
            }
          }

          .item-info {
            @apply flex-1 overflow-hidden;

            .item-title-row {
              @apply flex items-center gap-2 mb-1;

              .item-title {
                @apply text-base font-semibold text-gray-900 dark:text-white truncate;
              }

              .usage-indicator {
                @apply flex-shrink-0 w-2 h-2 rounded-full;
                
                &.usage-level-1 {
                  @apply bg-blue-500;
                  box-shadow: 0 0 4px rgba(59, 130, 246, 0.5);
                }
                
                &.usage-level-2 {
                  @apply bg-green-500;
                  box-shadow: 0 0 4px rgba(34, 197, 94, 0.5);
                }
                
                &.usage-level-3 {
                  @apply bg-orange-500;
                  box-shadow: 0 0 4px rgba(249, 115, 22, 0.5);
                }
                
                &.usage-level-4 {
                  @apply bg-red-500;
                  box-shadow: 0 0 4px rgba(239, 68, 68, 0.5);
                  animation: pulse-dot 2s ease-in-out infinite;
                }
              }
            }

            .item-path {
              @apply flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 truncate;

              span {
                @apply truncate;
              }
            }
          }
        }

        .item-actions {
          @apply flex-shrink-0;
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
