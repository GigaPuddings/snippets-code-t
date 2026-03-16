<template>
  <div class="settings-container">
    <!-- 左侧导航 -->
    <div class="settings-sidebar">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        :class="['settings-menu-item', { active: activeTab === item.id }]"
        @click="switchTab(item.id)"
      >
        <component
          :is="item.icon"
          class="mr-2"
          theme="outline"
          size="18"
          :strokeWidth="3"
        />
        <span class="text-sm">{{ item.label }}</span>
      </div>
    </div>

    <!-- 右侧内容区 -->
    <div class="settings-content">
      <component 
        v-for="tab in loadedTabs" 
        :key="tab"
        :is="componentMap[tab]" 
        v-show="activeTab === tab"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { Data, EnterTheKeyboard, SettingTwo, Translate, FolderOpen, Github } from '@icon-park/vue-next';
import { invoke } from '@tauri-apps/api/core';
import General from './components/General/index.vue';
import Shortcut from './components/Shortcut/index.vue';
import Manger from './components/Manger/index.vue';
import Translation from './components/Translation/index.vue';
import Attachment from './components/Attachment/index.vue';
import GitSync from './components/GitSync/index.vue';
import { getGitStatus } from '@/api/git';
import { getGitSettings } from '@/api/appConfig';

defineOptions({
  name: 'SettingsContent'
});

const { t } = useI18n();
const route = useRoute();

/** 是否显示 Git 同步 tab：工作区有效、已是仓库、已配置远程、且必要字段（用户名、邮箱、远程 URL）已在个人中心配置 */
const canShowGitSyncTab = ref(false);

const allMenuItems = [
  { id: 'general', label: () => t('settings.general'), icon: SettingTwo },
  { id: 'shortcut', label: () => t('shortcut.title'), icon: EnterTheKeyboard },
  { id: 'data', label: () => t('dataManager.title'), icon: Data },
  { id: 'attachment', label: () => t('settings.attachment.menu'), icon: FolderOpen },
  { id: 'gitSync', label: () => t('settings.gitSync.menu'), icon: Github },
  { id: 'translation', label: () => t('translation.title'), icon: Translate }
];

const menuItems = computed(() => {
  const items = canShowGitSyncTab.value
    ? allMenuItems
    : allMenuItems.filter((item) => item.id !== 'gitSync');
  return items.map((item) => ({ id: item.id, label: item.label(), icon: item.icon }));
});

const activeTab = ref('general');
const loadedTabs = ref<string[]>(['general']); // 已加载的 tab

// 组件映射
const componentMap: Record<string, any> = {
  general: General,
  shortcut: Shortcut,
  data: Manger,
  attachment: Attachment,
  gitSync: GitSync,
  translation: Translation
};

async function refreshCanShowGitSyncTab() {
  try {
    const root = await invoke<string | null>('get_workspace_root_path');
    if (!root) {
      canShowGitSyncTab.value = false;
      return;
    }
    const [status, settings] = await Promise.all([getGitStatus(), getGitSettings()]);
    const hasRequiredFields =
      !!settings.user_name?.trim() &&
      !!settings.user_email?.trim() &&
      !!settings.remote_url?.trim() &&
      !!settings.token?.trim();
    canShowGitSyncTab.value =
      status.is_repo && status.has_remote && hasRequiredFields;
  } catch {
    canShowGitSyncTab.value = false;
  }
}

// 切换 tab
const switchTab = (tabId: string) => {
  if (tabId === 'gitSync' && !canShowGitSyncTab.value) return;
  activeTab.value = tabId;
  if (!loadedTabs.value.includes(tabId)) {
    loadedTabs.value.push(tabId);
  }
};

// 监听路由 query 参数变化（进入设置页或切到 gitSync 时先刷新 Tab 显示条件，避免从个人中心保存后不显示）
watch(() => route.query.tab, (newTab) => {
  if (newTab && typeof newTab === 'string') {
    if (newTab === 'gitSync') {
      refreshCanShowGitSyncTab().then(() => switchTab(newTab));
    } else {
      switchTab(newTab);
    }
  }
}, { immediate: true });

onMounted(async () => {
  await refreshCanShowGitSyncTab();
  const tabFromQuery = route.query.tab;
  if (tabFromQuery && typeof tabFromQuery === 'string') {
    if (tabFromQuery === 'gitSync' && !canShowGitSyncTab.value) {
      activeTab.value = 'general';
    } else {
      switchTab(tabFromQuery);
    }
  }
});
</script>

<style scoped lang="scss">
.settings-container {
  @apply flex h-full w-full border border-panel rounded-md overflow-hidden;
}

.settings-sidebar {
  @apply w-44 border-r border-panel py-4 overflow-y-auto bg-panel px-2;
}

.settings-menu-item {
  @apply flex items-center py-1.5 px-2 my-1.5 last:mb-0 text-panel rounded-md hover:bg-hover dark:hover:bg-hover dark:text-panel cursor-pointer transition-colors;

  &.active {
    @apply bg-active text-active hover:bg-active dark:bg-active dark:hover:bg-active;
  }
}

.settings-content {
  @apply bg-panel flex-1 overflow-hidden p-4;
}
</style>
