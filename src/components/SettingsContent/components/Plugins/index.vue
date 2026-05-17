<template>
  <div class="settings-panel">
    <div class="panel-header plugins-header">
      <h3 class="panel-title">{{ t('plugins.title') }}</h3>
      <div class="plugins-actions">
        <CustomButton size="small" :loading="installing" @click="handleInstall">
          <FolderOpen theme="outline" size="14" class="button-icon" />
          {{ t('plugins.installLocal') }}
        </CustomButton>
        <CustomButton size="small" :loading="installing" @click="handleInstallZip">
          <FileZip theme="outline" size="14" class="button-icon" />
          {{ t('plugins.installZip') }}
        </CustomButton>
        <CustomButton size="small" plain @click="handleRefresh">
          <Refresh theme="outline" size="14" class="button-icon" />
          {{ t('plugins.refresh') }}
        </CustomButton>
      </div>
    </div>

    <main class="panel-content">
      <section class="plugins-intro">
        <div class="plugins-intro-title">{{ t('plugins.builtinTitle') }}</div>
        <div class="plugins-intro-desc">{{ t('plugins.builtinDesc') }}</div>
      </section>

      <section class="marketplace-panel">
        <div class="marketplace-toolbar">
          <div class="marketplace-search">
            <Search theme="outline" size="15" />
            <input
              v-model="marketplaceQuery"
              class="marketplace-input"
              :placeholder="t('plugins.marketplaceSearchPlaceholder')"
            >
          </div>
          <CustomButton size="small" plain :loading="marketplaceLoading" @click="handleRefreshMarketplace">
            <Refresh theme="outline" size="14" class="button-icon" />
            {{ t('plugins.marketplaceRefresh') }}
          </CustomButton>
        </div>

        <div class="marketplace-list">
          <div
            v-for="item in filteredMarketplaceItems"
            :key="item.id"
            class="marketplace-row"
          >
            <div class="marketplace-main">
              <div class="plugin-title-row">
                <span class="plugin-name">{{ pluginText(item.name) }}</span>
                <span class="plugin-category">{{ t(`plugins.categories.${item.category}`) }}</span>
                <span class="plugin-source plugin-source--marketplace">
                  {{ marketplaceStatusText(item) }}
                </span>
              </div>
              <div class="plugin-description">{{ pluginText(item.description) }}</div>
              <div class="plugin-meta">
                <span>{{ t('plugins.versionLabel', { version: item.version }) }}</span>
                <span v-if="item.minAppVersion">
                  {{ t('plugins.minAppVersion', { version: item.minAppVersion }) }}
                </span>
              </div>
              <div v-if="item.tags?.length" class="marketplace-tags">
                <span v-for="tag in item.tags" :key="tag" class="marketplace-tag">{{ tag }}</span>
              </div>
            </div>
            <div class="plugin-controls">
              <CustomButton
                v-if="canUpdateMarketplaceItem(item)"
                size="small"
                :title="t('plugins.marketplaceUpdate')"
                :loading="installingMarketplaceId === item.id"
                @click="handleInstallMarketplace(item, true)"
              >
                <Refresh theme="outline" size="14" />
              </CustomButton>
              <CustomButton
                v-if="canInstallMarketplaceItem(item)"
                size="small"
                :title="t('plugins.marketplaceInstall')"
                :loading="installingMarketplaceId === item.id"
                @click="handleInstallMarketplace(item, false)"
              >
                <Download theme="outline" size="14" />
              </CustomButton>
            </div>
          </div>
          <div v-if="!marketplaceLoading && !filteredMarketplaceItems.length" class="marketplace-empty">
            {{ t('plugins.marketplaceEmpty') }}
          </div>
        </div>
      </section>

      <section
        v-for="plugin in plugins"
        :key="plugin.id"
        class="plugin-row"
      >
        <div class="plugin-main">
          <div class="plugin-title-row">
            <span class="plugin-name">{{ pluginText(plugin.manifest.name) }}</span>
            <span class="plugin-category">{{ t(`plugins.categories.${plugin.category}`) }}</span>
            <span
              class="plugin-source"
              :class="`plugin-source--${plugin.source}`"
            >
              {{ t(`plugins.sources.${plugin.source}`) }}
            </span>
          </div>
          <div class="plugin-description">{{ pluginText(plugin.manifest.description) }}</div>
          <div class="plugin-meta">
            <span>{{ t('plugins.versionLabel', { version: plugin.manifest.version }) }}</span>
            <span v-if="plugin.manifest.minAppVersion">
              {{ t('plugins.minAppVersion', { version: plugin.manifest.minAppVersion }) }}
            </span>
          </div>
          <div v-if="plugin.resourceHintKey" class="plugin-resource">
            {{ t(plugin.resourceHintKey) }}
          </div>
          <div
            v-if="plugin.resourceHintKey && pluginStore.resourceStatusByPluginId[plugin.id]"
            class="plugin-resource-status"
            :class="{
              'plugin-resource-status--ready': pluginStore.resourceStatusByPluginId[plugin.id]?.available,
              'plugin-resource-status--missing': !pluginStore.resourceStatusByPluginId[plugin.id]?.available
            }"
          >
            {{
              pluginStore.resourceStatusByPluginId[plugin.id]?.available
                ? t('plugins.resourceReady')
                : t('plugins.resourceMissing')
            }}
            <span
              v-if="pluginStore.resourceStatusByPluginId[plugin.id]?.source"
              class="plugin-resource-source"
            >
              {{ pluginStore.resourceStatusByPluginId[plugin.id]?.source }}
            </span>
          </div>
          <div v-if="plugin.packagePath" class="plugin-path">{{ plugin.packagePath }}</div>
        </div>
        <div class="plugin-controls">
          <CustomButton
            v-if="plugin.source === 'local'"
            type="danger"
            size="small"
            plain
            :loading="removingPluginId === plugin.id"
            @click="handleUninstall(plugin.id)"
          >
            <Delete theme="outline" size="14" />
          </CustomButton>
          <CustomSwitch
            :model-value="pluginStore.isEnabled(plugin.id)"
            :active-text="t('common.on')"
            :inactive-text="t('common.off')"
            @change="(enabled) => handleToggle(plugin.id, Boolean(enabled))"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { getVersion } from '@tauri-apps/api/app';
import { open } from '@tauri-apps/plugin-dialog';
import { unregister } from '@tauri-apps/plugin-global-shortcut';
import { Delete, Download, FileZip, FolderOpen, Refresh, Search } from '@icon-park/vue-next';
import {
  fetchPluginMarketplace,
  type PluginMarketplaceItem
} from '@/api/plugins';
import { getPluginById } from '@/plugins/registry';
import { OFFICIAL_PLUGINS_MODE } from '@/plugins/official-mode';
import type { PluginI18nText, RegisteredPlugin } from '@/plugins/protocol';
import { getHotkeyValue } from '@/plugins/hotkeys';
import type { PluginId } from '@/plugins/types';
import { useConfigurationStore, usePluginStore } from '@/store';
import { CustomButton, CustomSwitch } from '@/components/UI';
import modal from '@/utils/modal';

defineOptions({
  name: 'PluginsSettings'
});

const { t } = useI18n();
const pluginStore = usePluginStore();
const configurationStore = useConfigurationStore();
const plugins = computed(() => pluginStore.plugins);
const installing = ref(false);
const removingPluginId = ref<string | null>(null);
const marketplaceLoading = ref(false);
const marketplaceItems = ref<PluginMarketplaceItem[]>([]);
const marketplaceQuery = ref('');
const installingMarketplaceId = ref<string | null>(null);
const appVersion = ref('');

const DEFAULT_MARKETPLACE_URL = 'https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/codex/plugin-system-refactor/docs/plugin-marketplace/marketplace.json';
const isExternalOfficialPluginMode = OFFICIAL_PLUGINS_MODE === 'external';

onMounted(() => {
  pluginStore.initialize();
  refreshMarketplace(false);
  getVersion()
    .then((version) => {
      appVersion.value = version;
    })
    .catch(() => {
      appVersion.value = '';
    });
});

const pluginText = (text: PluginI18nText): string => {
  const translated = t(text.i18nKey);
  return translated === text.i18nKey ? text.fallback : translated;
};

const filteredMarketplaceItems = computed(() => {
  const query = marketplaceQuery.value.trim().toLowerCase();
  if (!query) return marketplaceItems.value;

  return marketplaceItems.value.filter((item) => {
    const haystack = [
      item.id,
      item.name.fallback,
      item.description.fallback,
      item.category,
      item.builtinPluginId,
      item.resourceFor,
      ...(item.tags ?? [])
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return haystack.includes(query);
  });
});

const isMarketplaceItemInstalled = (item: PluginMarketplaceItem): boolean => (
  pluginStore.plugins.some((plugin) => plugin.id === item.id)
);

const getInstalledMarketplacePlugin = (item: PluginMarketplaceItem): RegisteredPlugin | undefined => (
  pluginStore.plugins.find((plugin) => plugin.id === item.id)
);

const versionParts = (version: string): number[] => (
  version
    .replace(/^v/i, '')
    .split('.')
    .map((part) => Number.parseInt(part, 10))
    .map((part) => (Number.isFinite(part) ? part : 0))
);

const compareVersions = (left: string, right: string): number => {
  const leftParts = versionParts(left);
  const rightParts = versionParts(right);
  const length = Math.max(leftParts.length, rightParts.length);
  for (let index = 0; index < length; index += 1) {
    const diff = (leftParts[index] ?? 0) - (rightParts[index] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
};

const isCompatibleWithApp = (item: PluginMarketplaceItem): boolean => (
  !item.minAppVersion
  || !appVersion.value
  || compareVersions(appVersion.value, item.minAppVersion) >= 0
);

const marketplaceStatusText = (item: PluginMarketplaceItem): string => {
  if (!isCompatibleWithApp(item)) return t('plugins.marketplaceIncompatible');
  const installedPlugin = getInstalledMarketplacePlugin(item);
  if (installedPlugin?.source === 'local' && compareVersions(item.version, installedPlugin.manifest.version) > 0) {
    return t('plugins.marketplaceUpdateAvailable');
  }
  if (
    item.status === 'included'
    && isExternalOfficialPluginMode
    && !isMarketplaceItemInstalled(item)
    && item.packageUrl
  ) {
    return t('plugins.marketplaceAvailable');
  }
  if (item.status === 'included') return t('plugins.marketplaceIncluded');
  if (item.status === 'planned') return t('plugins.marketplacePlanned');
  if (isMarketplaceItemInstalled(item)) return t('plugins.marketplaceInstalled');
  return t('plugins.marketplaceAvailable');
};

const canInstallMarketplaceItem = (item: PluginMarketplaceItem): boolean => (
  Boolean(item.packageUrl)
  && isCompatibleWithApp(item)
  && !isMarketplaceItemInstalled(item)
  && (item.status !== 'included' || isExternalOfficialPluginMode)
);

const canUpdateMarketplaceItem = (item: PluginMarketplaceItem): boolean => {
  const installedPlugin = getInstalledMarketplacePlugin(item);
  return Boolean(item.packageUrl)
    && isCompatibleWithApp(item)
    && installedPlugin?.source === 'local'
    && compareVersions(item.version, installedPlugin.manifest.version) > 0;
};

const refreshMarketplace = async (notify = true) => {
  marketplaceLoading.value = true;
  try {
    const marketplace = await fetchPluginMarketplace(DEFAULT_MARKETPLACE_URL);
    marketplaceItems.value = Array.isArray(marketplace.plugins) ? marketplace.plugins : [];
    if (notify) modal.msg(t('plugins.marketplaceRefreshed'));
  } catch (error) {
    if (notify) modal.msg(`${t('plugins.marketplaceRefreshFailed')}: ${error}`, 'error');
  } finally {
    marketplaceLoading.value = false;
  }
};

const handleRefreshMarketplace = async () => {
  await refreshMarketplace(true);
};

const handleInstallMarketplace = async (item: PluginMarketplaceItem, update = false) => {
  if (!item.packageUrl) return;

  installingMarketplaceId.value = item.id;
  try {
    await pluginStore.installFromUrl(item.packageUrl, true, item.packageSubdir);
    modal.msg(update ? t('plugins.updateSuccess') : t('plugins.installSuccess'));
  } catch (error) {
    modal.msg(`${update ? t('plugins.updateFailed') : t('plugins.installFailed')}: ${error}`, 'error');
  } finally {
    installingMarketplaceId.value = null;
  }
};

const handleRefresh = async () => {
  try {
    await pluginStore.refreshInstalledPlugins();
    await refreshMarketplace(false);
    modal.msg(t('plugins.refreshed'));
  } catch (error) {
    modal.msg(`${t('plugins.refreshFailed')}: ${error}`, 'error');
  }
};

const handleInstall = async () => {
  const selected = await open({
    directory: true,
    multiple: false,
    title: t('plugins.selectPluginDirectory')
  });
  if (!selected || Array.isArray(selected)) return;

  installing.value = true;
  try {
    await pluginStore.installFromPath(selected);
    modal.msg(t('plugins.installSuccess'));
  } catch (error) {
    modal.msg(`${t('plugins.installFailed')}: ${error}`, 'error');
  } finally {
    installing.value = false;
  }
};

const handleInstallZip = async () => {
  const selected = await open({
    multiple: false,
    title: t('plugins.selectPluginZip'),
    filters: [
      {
        name: 'Plugin Package',
        extensions: ['zip']
      }
    ]
  });
  if (!selected || Array.isArray(selected)) return;

  installing.value = true;
  try {
    await pluginStore.installFromPath(selected);
    modal.msg(t('plugins.installSuccess'));
  } catch (error) {
    modal.msg(`${t('plugins.installFailed')}: ${error}`, 'error');
  } finally {
    installing.value = false;
  }
};

const handleUninstall = async (pluginId: PluginId | string) => {
  removingPluginId.value = String(pluginId);
  try {
    await pluginStore.uninstall(pluginId);
    modal.msg(t('plugins.uninstallSuccess'));
  } catch (error) {
    modal.msg(`${t('plugins.uninstallFailed')}: ${error}`, 'error');
  } finally {
    removingPluginId.value = null;
  }
};

const handleToggle = async (pluginId: PluginId | string, enabled: boolean) => {
  try {
    await pluginStore.setEnabled(pluginId, enabled);
    if (!enabled) {
      await unregisterPluginHotkeys(pluginId);
    }
    modal.msg(enabled ? t('plugins.enabled') : t('plugins.disabled'));
  } catch (error) {
    modal.msg(`${t('plugins.saveFailed')}: ${error}`, 'error');
  }
};

const unregisterPluginHotkeys = async (pluginId: PluginId | string): Promise<void> => {
  const plugin = getPluginById(pluginId as PluginId)
    ?? pluginStore.plugins.find((item: RegisteredPlugin) => item.id === pluginId);
  if (!plugin?.hotkeys?.length) return;

  await Promise.all(
    plugin.hotkeys
      .map((hotkeyName) => getHotkeyValue(configurationStore, hotkeyName))
      .filter(Boolean)
      .map((shortcut) => unregister(shortcut).catch(() => undefined))
  );
};
</script>

<style scoped lang="scss">
.plugins-intro {
  @apply mb-4 pb-4 border-b border-panel;
}

.plugins-header {
  @apply flex items-center justify-between gap-3;
}

.plugins-actions {
  @apply flex items-center gap-2;
}

.button-icon {
  @apply mr-1;
}

.plugins-intro-title {
  @apply text-panel font-medium text-sm mb-1;
}

.plugins-intro-desc {
  @apply text-panel-text-secondary text-xs leading-5;
}

.plugin-row {
  @apply flex items-center justify-between gap-4 py-3 border-b border-panel last:border-b-0;
}

.marketplace-panel {
  @apply mb-4 border-b border-panel pb-4;
}

.marketplace-toolbar {
  @apply flex items-center justify-between gap-3 mb-3;
}

.marketplace-search {
  @apply flex min-w-0 flex-1 items-center gap-2 rounded border border-panel bg-hover px-2 py-1.5 text-panel-text-secondary;
}

.marketplace-input {
  @apply min-w-0 flex-1 bg-transparent text-xs text-panel outline-none;
}

.marketplace-list {
  @apply flex flex-col gap-2;
}

.marketplace-row {
  @apply flex items-center justify-between gap-4 rounded border border-panel px-3 py-2;
}

.marketplace-main {
  @apply min-w-0 flex-1;
}

.marketplace-tags {
  @apply mt-1 flex flex-wrap gap-1;
}

.plugin-meta {
  @apply mt-1 flex flex-wrap items-center gap-2 text-xs text-panel-text-secondary;
}

.marketplace-tag {
  @apply rounded bg-hover px-1.5 py-0.5 text-xs text-panel-text-secondary;
}

.marketplace-empty {
  @apply py-3 text-center text-xs text-panel-text-secondary;
}

.plugin-main {
  @apply min-w-0 flex-1;
}

.plugin-title-row {
  @apply flex items-center gap-2 mb-1;
}

.plugin-name {
  @apply text-panel font-medium text-sm;
}

.plugin-category {
  @apply text-xs text-panel-text-secondary bg-hover rounded px-1.5 py-0.5;
}

.plugin-source {
  @apply text-xs rounded px-1.5 py-0.5;

  &--builtin {
    @apply text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-950;
  }

  &--local {
    @apply text-green-600 bg-green-50 dark:text-green-300 dark:bg-green-950;
  }

  &--marketplace {
    @apply text-violet-600 bg-violet-50 dark:text-violet-300 dark:bg-violet-950;
  }
}

.plugin-description {
  @apply text-panel-text-secondary text-xs leading-5;
}

.plugin-resource {
  @apply mt-1 text-xs text-amber-600 dark:text-amber-400 leading-5;
}

.plugin-resource-status {
  @apply mt-1 inline-flex max-w-full items-center gap-2 rounded px-1.5 py-0.5 text-xs leading-5;

  &--ready {
    @apply bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300;
  }

  &--missing {
    @apply bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300;
  }
}

.plugin-resource-source {
  @apply truncate text-panel-text-secondary;
}

.plugin-path {
  @apply mt-1 text-xs text-panel-text-secondary truncate;
}

.plugin-controls {
  @apply flex items-center gap-2 shrink-0;
}
</style>
