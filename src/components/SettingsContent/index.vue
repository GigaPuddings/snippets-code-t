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
        <span class="settings-menu-label" :title="item.label">
          {{ item.label }}
        </span>
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
import {
  pluginSettingsComponents,
  pluginSettingsMenuItems,
  type PluginSettingsMenuItem
} from '@/plugins/settings';
import { usePluginStore } from '@/store';
import { defineAsyncComponent } from 'vue';

defineOptions({
  name: 'SettingsContent'
});

const { t } = useI18n();
const route = useRoute();
const pluginStore = usePluginStore();

/** Git 插件启用后即显示设置入口；必要配置在个人中心完成，不能再把入口藏起来。 */
const canShowGitSyncTab = ref(false);

const coreMenuItems: PluginSettingsMenuItem[] = [
  { id: 'general', labelKey: 'settings.general', icon: SettingTwo },
  { id: 'ai', labelKey: 'settings.ai.menu', icon: SettingTwo },
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
const General = defineAsyncComponent(
  () => import('./components/General/index.vue')
);
const Shortcut = defineAsyncComponent(
  () => import('./components/Shortcut/index.vue')
);
const Manger = defineAsyncComponent(
  () => import('./components/Manger/index.vue')
);
const Plugins = defineAsyncComponent(
  () => import('./components/Plugins/index.vue')
);
const Ai = defineAsyncComponent(() => import('./components/Ai/index.vue'));
const Developer = defineAsyncComponent(
  () => import('./components/Developer/index.vue')
);

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
    ai: Ai,
    developer: Developer,
    ...pluginSettingsComponents
  };
});

async function refreshCanShowGitSyncTab() {
  canShowGitSyncTab.value = pluginStore.isEnabled('git-sync');
}

// 插件在当前设置页安装、启用或禁用后，立即同步 Git Tab 可见性。
watch(
  () => pluginStore.runtimeRevision,
  () => {
    void refreshCanShowGitSyncTab();
  }
);

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
  @apply w-52 border-r border-panel py-4 overflow-y-auto bg-panel px-2;

  flex: 0 0 13rem;
}

.settings-menu-item {
  @apply flex items-center min-w-0 py-1.5 px-2 my-1.5 last:mb-0 text-panel rounded-md hover:bg-hover dark:hover:bg-hover dark:text-panel cursor-pointer transition-colors;

  position: relative;
  border: 1px solid transparent;

  &.active {
    color: var(--categories-text-color);
    background-color: var(--search-result-active);
    border-color: var(--search-result-active-border);

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

.settings-menu-label {
  min-width: 0;
  overflow: hidden;
  font-size: 0.875rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.settings-content {
  @apply bg-panel flex-1 overflow-hidden p-4;
}
</style>
