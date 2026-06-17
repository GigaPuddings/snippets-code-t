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
        :key="componentKey(tab)"
        :is="componentMap[tab]"
        v-show="activeTab === tab"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { Data, EnterTheKeyboard, SettingTwo } from '@icon-park/vue-next';
import { invoke } from '@tauri-apps/api/core';
import General from './components/General/index.vue';
import Shortcut from './components/Shortcut/index.vue';
import Manger from './components/Manger/index.vue';
import Plugins from './components/Plugins/index.vue';
import Developer from './components/Developer/index.vue';
import { getGitSettings } from '@/api/appConfig';
import {
  pluginSettingsComponents,
  pluginSettingsMenuItems,
  type PluginSettingsMenuItem
} from '@/plugins/settings';
import { usePluginStore } from '@/store';

defineOptions({
  name: 'SettingsContent'
});

const { t } = useI18n();
const route = useRoute();
const pluginStore = usePluginStore();

/** 是否显示 Git 同步 tab：工作区有效、已是仓库、已配置远程、且必要字段（用户名、邮箱、远程 URL）已在个人中心配置 */
const canShowGitSyncTab = ref(false);

const coreMenuItems: PluginSettingsMenuItem[] = [
  { id: 'general', labelKey: 'settings.general', icon: SettingTwo },
  { id: 'plugins', labelKey: 'plugins.title', icon: Data },
  { id: 'shortcut', labelKey: 'shortcut.title', icon: EnterTheKeyboard },
  { id: 'data', labelKey: 'dataManager.title', icon: Data },
  { id: 'developer', labelKey: 'settings.developer.menu', icon: SettingTwo }
];

const menuItems = computed(() => {
  pluginStore.runtimeRevision;

  const allMenuItems = [...coreMenuItems, ...pluginSettingsMenuItems];

  return allMenuItems
    .filter((item) => {
      if (item.id === 'gitSync' && !canShowGitSyncTab.value) {
        return false;
      }

      const plugin = item.pluginId
        ? pluginStore.plugins.find(
            (candidate) => candidate.id === item.pluginId
          )
        : pluginStore.plugins.find((candidate) =>
            candidate.settingsTabs?.includes(item.id)
          );
      if (item.pluginId) {
        return !!plugin && pluginStore.isEnabled(plugin.id);
      }
      return !plugin || pluginStore.isEnabled(plugin.id);
    })
    .map((item) => {
      const translated = t(item.labelKey);
      return {
        id: item.id,
        label:
          translated === item.labelKey
            ? (item.label ?? translated)
            : translated,
        icon: item.icon
      };
    });
});

const activeTab = ref('general');
const loadedTabs = ref<string[]>(['general']); // 已加载的 tab

const getSettingsTabPluginId = (tabId: string): string | null => {
  const item = pluginSettingsMenuItems.find(
    (candidate) => candidate.id === tabId
  );
  if (item?.pluginId) return item.pluginId;
  const plugin = pluginStore.plugins.find((candidate) =>
    candidate.settingsTabs?.includes(tabId)
  );
  return plugin ? String(plugin.id) : null;
};

const componentKey = (tabId: string): string => {
  const pluginId = getSettingsTabPluginId(tabId);
  return pluginId
    ? `${tabId}:${pluginId}:${pluginStore.runtimeRevision}`
    : tabId;
};

// 组件映射
const componentMap = computed<Record<string, any>>(() => {
  pluginStore.runtimeRevision;

  return {
    general: General,
    shortcut: Shortcut,
    data: Manger,
    plugins: Plugins,
    developer: Developer,
    ...pluginSettingsComponents
  };
});

async function refreshCanShowGitSyncTab() {
  try {
    if (!pluginStore.isEnabled('git-sync')) {
      canShowGitSyncTab.value = false;
      return;
    }

    const root = await invoke<string | null>('get_workspace_root_path');
    if (!root) {
      canShowGitSyncTab.value = false;
      return;
    }
    const { getGitStatus } = await import('@/api/gitSync');
    const [status, settings] = await Promise.all([
      getGitStatus(),
      getGitSettings()
    ]);
    const hasRequiredFields =
      !!settings.user_name?.trim() &&
      !!settings.user_email?.trim() &&
      !!settings.remote_url?.trim();
    canShowGitSyncTab.value =
      status.is_repo && status.has_remote && hasRequiredFields;
  } catch {
    canShowGitSyncTab.value = false;
  }
}

// 切换 tab
const switchTab = (tabId: string) => {
  if (tabId === 'gitSync' && !canShowGitSyncTab.value) return;
  const item = pluginSettingsMenuItems.find(
    (candidate) => candidate.id === tabId
  );
  const plugin = item?.pluginId
    ? pluginStore.plugins.find((candidate) => candidate.id === item.pluginId)
    : pluginStore.plugins.find((candidate) =>
        candidate.settingsTabs?.includes(tabId)
      );
  if (item?.pluginId && !plugin) {
    activeTab.value = 'plugins';
    if (!loadedTabs.value.includes('plugins')) {
      loadedTabs.value.push('plugins');
    }
    return;
  }
  if (plugin && !pluginStore.isEnabled(plugin.id)) {
    activeTab.value = 'plugins';
    if (!loadedTabs.value.includes('plugins')) {
      loadedTabs.value.push('plugins');
    }
    return;
  }
  activeTab.value = tabId;
  if (!loadedTabs.value.includes(tabId)) {
    loadedTabs.value.push(tabId);
  }
};

watch(
  () => [
    pluginStore.runtimeRevision,
    menuItems.value.map((item) => item.id).join('|')
  ],
  () => {
    const availableTabs = new Set(menuItems.value.map((item) => item.id));
    loadedTabs.value = loadedTabs.value.filter((tab) => availableTabs.has(tab));
    if (!loadedTabs.value.includes('general')) {
      loadedTabs.value.unshift('general');
    }
    if (!availableTabs.has(activeTab.value)) {
      activeTab.value = availableTabs.has('plugins') ? 'plugins' : 'general';
      if (!loadedTabs.value.includes(activeTab.value)) {
        loadedTabs.value.push(activeTab.value);
      }
    }
  }
);

// 监听路由 query 参数变化（进入设置页或切到 gitSync 时先刷新 Tab 显示条件，避免从个人中心保存后不显示）
watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab && typeof newTab === 'string') {
      if (newTab === 'gitSync') {
        refreshCanShowGitSyncTab().then(() => switchTab(newTab));
      } else {
        switchTab(newTab);
      }
    }
  },
  { immediate: true }
);

onMounted(async () => {
  await pluginStore.initialize();
  await pluginStore.loadEnabledPluginEntries();
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
  position: relative;
  border: 1px solid transparent;

  &.active {
    background-color: var(--search-result-active);
    border-color: var(--search-result-active-border);
    color: var(--categories-text-color);

    &::before {
      position: absolute;
      top: 7px;
      bottom: 7px;
      left: 0;
      width: 3px;
      pointer-events: none;
      content: '';
      background: var(--search-result-accent);
      border-radius: 0 999px 999px 0;
    }
  }
}

.settings-content {
  @apply bg-panel flex-1 overflow-hidden p-4;
}
</style>
