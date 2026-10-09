<template>
  <div class="settings-container">
    <!-- 左侧导航 -->
    <aside
      v-show="!layoutStore.categoryPanelCollapsed"
      class="settings-sidebar"
    >
      <h1
        class="mb-4 truncate px-2 text-ui-title font-semibold text-[var(--workspace-nav-heading)]"
      >
        {{ t('titlebar.settings') }}
      </h1>
      <nav
        class="min-h-0 flex-1 overflow-y-auto"
        :aria-label="t('titlebar.settings')"
      >
        <section v-for="group in menuGroups" :key="group.id" class="mb-7">
          <h2 class="mb-2 px-2 text-ui text-[var(--workspace-nav-muted)]">
            {{ group.label }}
          </h2>
          <button
            v-for="item in group.items"
            :key="item.id"
            type="button"
            :class="[
              'ui-menu-item mb-ui-row-gap w-full px-2 text-left',
              {
                active: activeTab === item.id,
                'font-medium': activeTab === item.id
              }
            ]"
            :aria-current="activeTab === item.id ? 'page' : undefined"
            @click="switchTab(item.id)"
          >
            <component
              :is="item.icon"
              class="shrink-0"
              width="18"
              height="18"
            />
            <span class="settings-menu-label" :title="item.label">
              {{ item.label }}
            </span>
          </button>
        </section>
        <p
          v-if="!menuGroups.length"
          class="px-2 text-ui-caption text-[var(--workspace-nav-muted)]"
        >
          {{ t('common.empty') }}
        </p>
      </nav>
    </aside>

    <!-- 右侧内容区 -->
    <div ref="settingsContentRef" class="settings-content">
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
import Data from '~icons/lucide/database';
import EnterTheKeyboard from '~icons/lucide/keyboard';
import SettingTwo from '~icons/lucide/settings';
import Brain from '~icons/lucide/brain';
import Puzzle from '~icons/lucide/puzzle';
import Terminal from '~icons/lucide/square-terminal';
import WorkbenchIcon from '~icons/lucide/layout-dashboard';
import {
  pluginSettingsComponents,
  pluginSettingsMenuItems,
  type PluginSettingsMenuItem
} from '@/plugins/settings';
import { useLayoutStore, usePluginStore } from '@/store';
import { defineAsyncComponent } from 'vue';

defineOptions({
  name: 'SettingsContent'
});

const { t } = useI18n();
const route = useRoute();
const pluginStore = usePluginStore();
const layoutStore = useLayoutStore();

/** Git 插件启用后即显示设置入口；必要配置在个人中心完成，不能再把入口藏起来。 */
const canShowGitSyncTab = computed(() => pluginStore.isEnabled('git-sync'));

const coreMenuItems: PluginSettingsMenuItem[] = [
  { id: 'workbench', labelKey: 'settings.workbench.menu', icon: WorkbenchIcon },
  { id: 'general', labelKey: 'settings.general', icon: SettingTwo },
  { id: 'ai', labelKey: 'settings.ai.menu', icon: Brain },
  { id: 'plugins', labelKey: 'plugins.title', icon: Puzzle },
  { id: 'shortcut', labelKey: 'shortcut.title', icon: EnterTheKeyboard },
  { id: 'data', labelKey: 'dataManager.title', icon: Data },
  { id: 'developer', labelKey: 'settings.developer.menu', icon: Terminal }
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
const settingsContentRef = ref<HTMLElement>();
watch(activeTab, async () => {
  await nextTick();
  settingsContentRef.value?.scrollTo({ top: 0 });
});
const menuGroups = computed(() => {
  const visibleItems = menuItems.value;
  const coreIds = new Set(coreMenuItems.map((item) => item.id));
  return [
    {
      id: 'application',
      label: t('settings.applicationSettings'),
      items: visibleItems.filter((item) => coreIds.has(item.id))
    },
    {
      id: 'extensions',
      label: t('settings.extensionSettings'),
      items: visibleItems.filter((item) => !coreIds.has(item.id))
    }
  ].filter((group) => group.items.length);
});
const loadedTabs = ref<string[]>(['general']); // 已加载的 tab
const WorkbenchOverview = defineAsyncComponent(
  () => import('./components/Workbench/index.vue')
);
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
    workbench: WorkbenchOverview,
    general: General,
    shortcut: Shortcut,
    data: Manger,
    plugins: Plugins,
    ai: Ai,
    developer: Developer,
    ...pluginSettingsComponents
  };
});

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

// 路由入口与菜单点击共用插件启用状态检查。
watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab && typeof newTab === 'string') {
      switchTab(newTab);
    }
  },
  { immediate: true }
);

onMounted(async () => {
  await pluginStore.initialize();
  await pluginStore.loadEnabledPluginEntries();
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
  @apply flex h-full w-full overflow-hidden font-ui text-ui;
}

.settings-sidebar {
  @apply flex w-[var(--workspace-sidebar-width)] min-h-0 flex-col border-r py-4 bg-[var(--workspace-nav-bg)] px-2;

  flex: 0 0 var(--workspace-sidebar-width);
  border-color: var(--settings-divider);
}

.settings-menu-label {
  min-width: 0;
  overflow: hidden;
  font-size: var(--app-ui-font-size);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.settings-content {
  @apply min-w-0 flex-1 overflow-y-auto bg-[var(--settings-surface)] px-6 pb-6 pt-8;

  --categories-panel-bg: var(--settings-surface);
  --categories-content-bg: var(--settings-surface);
  --categories-text-color: var(--workspace-nav-heading);
  --categories-info-text-color: var(--settings-muted);
  --categories-border-color: var(--settings-border);
  --categories-panel-bg-hover: var(--workspace-nav-selected);
  --panel-text: var(--workspace-nav-heading);
  --panel-text-secondary: var(--settings-muted);
  --el-text-color-primary: var(--workspace-nav-heading);
  --el-text-color-regular: var(--workspace-nav-text);
  --el-text-color-secondary: var(--settings-muted);
  --el-border-color: var(--settings-border);
  --el-border-color-light: var(--settings-border);
  --el-fill-color-blank: var(--settings-surface);
  --el-bg-color: var(--settings-surface);
  --el-component-size: var(--settings-control-height);

  color: var(--workspace-nav-heading);
}

@media (width <= 960px) {
  .settings-sidebar {
    @apply w-[220px];

    flex-basis: 220px;
  }

  .settings-content {
    @apply px-5;
  }
}

@media (height <= 760px) {
  .settings-content {
    @apply pt-6;
  }
}
</style>
