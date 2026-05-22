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
        <div class="plugins-security-note">
          <Info theme="outline" size="14" />
          <span>{{ t('plugins.securityNotice') }}</span>
        </div>
      </section>

      <section class="plugin-install-dir-panel">
        <div class="plugin-install-dir-main">
          <div class="plugin-install-dir-title">{{ t('plugins.installLocationTitle') }}</div>
          <div class="plugin-install-dir-desc">{{ t('plugins.installLocationDesc') }}</div>
          <input
            v-model="pluginInstallDir"
            class="plugin-install-dir-input"
            readonly
            :placeholder="t('plugins.installLocationDefault')"
          >
        </div>
        <div class="plugin-install-dir-actions">
          <CustomButton size="small" plain :loading="pluginInstallDirLoading" @click="handleChoosePluginInstallDir">
            <FolderOpen theme="outline" size="14" class="button-icon" />
            {{ t('plugins.chooseInstallLocation') }}
          </CustomButton>
          <CustomButton size="small" :loading="savingPluginInstallDir" @click="handleSavePluginInstallDir">
            {{ t('common.save') }}
          </CustomButton>
          <CustomButton size="small" plain :loading="savingPluginInstallDir" @click="handleResetPluginInstallDir">
            {{ t('plugins.resetInstallLocation') }}
          </CustomButton>
        </div>
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
                <span>{{ t('plugins.sizeLabel', { size: formatBytes(item.sizeBytes) }) }}</span>
                <span v-if="item.minAppVersion">
                  {{ t('plugins.minAppVersion', { version: item.minAppVersion }) }}
                </span>
              </div>
              <div v-if="getMarketplaceDependencyNames(item).length" class="plugin-meta">
                <span>{{ t('plugins.dependenciesLabel', { dependencies: getMarketplaceDependencyNames(item).join(', ') }) }}</span>
              </div>
              <div class="plugin-permission-summary">
                <span
                  v-for="label in marketplacePermissionLabels(item)"
                  :key="label"
                  class="plugin-permission-chip"
                  :class="{ 'plugin-permission-chip--risk': isRiskPermissionLabel(label) }"
                >
                  {{ label }}
                </span>
              </div>
              <div v-if="item.tags?.length" class="marketplace-tags">
                <span v-for="tag in item.tags" :key="tag" class="marketplace-tag">{{ tag }}</span>
              </div>
              <div
                v-if="isMarketplaceItemInstalling(item) && installProgress"
                class="plugin-install-progress"
              >
                <div class="plugin-install-progress-text">
                  <span>{{ currentInstallProgressText }}</span>
                  <span>{{ currentInstallProgressSizeText }}</span>
                </div>
                <div
                  class="plugin-install-progress-track"
                  :class="{ 'plugin-install-progress-track--indeterminate': installProgress.progress === undefined }"
                >
                  <div
                    class="plugin-install-progress-bar"
                    :style="{ width: installProgress.progress === undefined ? '35%' : `${Math.round(installProgress.progress)}%` }"
                  />
                </div>
              </div>
            </div>
            <div class="plugin-controls">
              <CustomButton
                v-if="canUpdateMarketplaceItem(item)"
                size="small"
                :title="t('plugins.marketplaceUpdate')"
                :loading="isMarketplaceItemInstalling(item)"
                @click="handleInstallMarketplace(item, true)"
              >
                <Refresh theme="outline" size="14" />
              </CustomButton>
              <CustomButton
                v-if="canInstallMarketplaceItem(item)"
                size="small"
                :title="hasMissingMarketplaceDependencies(item) ? t('plugins.marketplaceInstallDependencies') : t('plugins.marketplaceInstall')"
                :loading="isMarketplaceItemInstalling(item)"
                @click="handleInstallMarketplace(item, false)"
              >
                <Download theme="outline" size="14" />
              </CustomButton>
            </div>
            <div v-if="getMarketplaceResources(item).length" class="marketplace-resource-list">
              <div
                v-for="resource in getMarketplaceResources(item)"
                :key="resource.id"
                class="marketplace-resource-row"
              >
                <div class="marketplace-resource-main">
                  <div class="plugin-title-row">
                    <span class="plugin-name">{{ pluginText(resource.name) }}</span>
                    <span class="plugin-category">{{ t(`plugins.categories.${resource.category}`) }}</span>
                    <span class="plugin-source plugin-source--marketplace">
                      {{ marketplaceStatusText(resource) }}
                    </span>
                  </div>
                  <div class="plugin-description">{{ pluginText(resource.description) }}</div>
                  <div class="plugin-meta">
                    <span>{{ t('plugins.versionLabel', { version: resource.version }) }}</span>
                    <span>{{ t('plugins.sizeLabel', { size: formatBytes(resource.sizeBytes) }) }}</span>
                  </div>
                  <div class="plugin-permission-summary">
                    <span
                      v-for="label in marketplacePermissionLabels(resource)"
                      :key="label"
                      class="plugin-permission-chip"
                      :class="{ 'plugin-permission-chip--risk': isRiskPermissionLabel(label) }"
                    >
                      {{ label }}
                    </span>
                  </div>
                </div>
                <div class="plugin-controls">
                  <CustomButton
                    v-if="canUpdateMarketplaceItem(resource)"
                    size="small"
                    :title="t('plugins.marketplaceUpdate')"
                    :loading="isMarketplaceItemInstalling(resource)"
                    @click="handleInstallMarketplace(resource, true)"
                  >
                    <Refresh theme="outline" size="14" />
                  </CustomButton>
                  <CustomButton
                    v-if="canInstallMarketplaceItem(resource)"
                    size="small"
                    :title="t('plugins.marketplaceInstall')"
                    :loading="isMarketplaceItemInstalling(resource)"
                    @click="handleInstallMarketplace(resource, false)"
                  >
                    <Download theme="outline" size="14" />
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!marketplaceLoading && !filteredMarketplaceItems.length" class="marketplace-empty">
            {{ t('plugins.marketplaceEmpty') }}
          </div>
        </div>
      </section>

      <section
        v-for="plugin in visiblePlugins"
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
          <div class="plugin-permission-summary">
            <span
              v-for="label in installedPluginPermissionLabels(plugin)"
              :key="label"
              class="plugin-permission-chip"
              :class="{ 'plugin-permission-chip--risk': isRiskPermissionLabel(label) }"
            >
              {{ label }}
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
        <div v-if="getInstalledResources(plugin).length" class="installed-resource-list">
          <div
            v-for="resource in getInstalledResources(plugin)"
            :key="resource.id"
            class="installed-resource-row"
          >
            <div class="plugin-main">
              <div class="plugin-title-row">
                <span class="plugin-name">{{ pluginText(resource.manifest.name) }}</span>
                <span class="plugin-category">{{ t(`plugins.categories.${resource.category}`) }}</span>
                <span
                  class="plugin-source"
                  :class="`plugin-source--${resource.source}`"
                >
                  {{ t(`plugins.sources.${resource.source}`) }}
                </span>
              </div>
              <div class="plugin-description">{{ pluginText(resource.manifest.description) }}</div>
              <div class="plugin-meta">
                <span>{{ t('plugins.versionLabel', { version: resource.manifest.version }) }}</span>
              </div>
              <div class="plugin-permission-summary">
                <span
                  v-for="label in installedPluginPermissionLabels(resource)"
                  :key="label"
                  class="plugin-permission-chip"
                  :class="{ 'plugin-permission-chip--risk': isRiskPermissionLabel(label) }"
                >
                  {{ label }}
                </span>
              </div>
              <div v-if="resource.packagePath" class="plugin-path">{{ resource.packagePath }}</div>
            </div>
            <div class="plugin-controls">
              <CustomButton
                v-if="resource.source === 'local'"
                type="danger"
                size="small"
                plain
                :loading="removingPluginId === resource.id"
                @click="handleUninstall(resource.id)"
              >
                <Delete theme="outline" size="14" />
              </CustomButton>
              <CustomSwitch
                :model-value="pluginStore.isEnabled(resource.id)"
                :active-text="t('common.on')"
                :inactive-text="t('common.off')"
                @change="(enabled) => handleToggle(resource.id, Boolean(enabled))"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { getVersion } from '@tauri-apps/api/app';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { open } from '@tauri-apps/plugin-dialog';
import { unregister } from '@tauri-apps/plugin-global-shortcut';
import { Delete, Download, FileZip, FolderOpen, Info, Refresh, Search } from '@icon-park/vue-next';
import {
  DEFAULT_PLUGIN_MARKETPLACE_URL,
  fetchPluginMarketplace,
  getPluginInstallDir,
  setPluginInstallDir,
  type PluginInstallProgress,
  type PluginMarketplaceItem
} from '@/api/plugins';
import { getPluginById } from '@/plugins/registry';
import { OFFICIAL_PLUGINS_MODE } from '@/plugins/official-mode';
import type { PluginCapabilities, PluginI18nText, RegisteredPlugin } from '@/plugins/protocol';
import { getHotkeyValue } from '@/plugins/hotkeys';
import type { PluginId } from '@/plugins/types';
import { useConfigurationStore, usePluginStore } from '@/store';
import { CustomButton, CustomSwitch } from '@/components/UI';
import { logger } from '@/utils/logger';
import modal from '@/utils/modal';

defineOptions({
  name: 'PluginsSettings'
});

const { t } = useI18n();
const pluginStore = usePluginStore();
const configurationStore = useConfigurationStore();
const visiblePlugins = computed(() => pluginStore.visiblePlugins);
const installing = ref(false);
const removingPluginId = ref<string | null>(null);
const marketplaceLoading = ref(false);
const marketplaceItems = ref<PluginMarketplaceItem[]>([]);
const marketplaceQuery = ref('');
const installingMarketplaceId = ref<string | null>(null);
const installingPackageId = ref<string | null>(null);
const installProgress = ref<PluginInstallProgress | null>(null);
const installProgressUnlisten = ref<UnlistenFn | null>(null);
const appVersion = ref('');
const pluginInstallDir = ref('');
const pluginInstallDirLoading = ref(false);
const savingPluginInstallDir = ref(false);

const isExternalOfficialPluginMode = OFFICIAL_PLUGINS_MODE === 'external';

onMounted(async () => {
  pluginStore.initialize();
  loadPluginInstallDir();
  refreshMarketplace(false);
  try {
    installProgressUnlisten.value = await listen<PluginInstallProgress>(
      'plugin-install-progress',
      (event) => {
        installProgress.value = event.payload;
        logger.info('[PluginSettings] install progress', event.payload);
      }
    );
  } catch (error) {
    logger.warn('[PluginSettings] 监听插件安装进度失败', error);
  }
  getVersion()
    .then((version) => {
      appVersion.value = version;
    })
    .catch(() => {
      appVersion.value = '';
    });
});

onUnmounted(() => {
  installProgressUnlisten.value?.();
  installProgressUnlisten.value = null;
});

const pluginText = (text: PluginI18nText): string => {
  const translated = t(text.i18nKey);
  return translated === text.i18nKey ? text.fallback : translated;
};

const filteredMarketplaceItems = computed(() => {
  const query = marketplaceQuery.value.trim().toLowerCase();
  const topLevelItems = marketplaceItems.value.filter((item) => !item.resourceFor);
  if (!query) return topLevelItems;

  return topLevelItems.filter((item) => {
    const resources = getMarketplaceResources(item);
    const haystack = [
      item.id,
      item.name.fallback,
      item.description.fallback,
      item.category,
      item.builtinPluginId,
      item.resourceFor,
      ...(item.tags ?? []),
      ...resources.flatMap((resource) => [
        resource.id,
        resource.name.fallback,
        resource.description.fallback,
        ...(resource.tags ?? [])
      ])
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

const getMarketplaceItemById = (id: string): PluginMarketplaceItem | undefined => (
  marketplaceItems.value.find((item) => item.id === id)
);

const getMarketplaceResources = (item: PluginMarketplaceItem): PluginMarketplaceItem[] => (
  marketplaceItems.value.filter((resource) => resource.resourceFor === item.id)
);

const getInstalledResources = (plugin: RegisteredPlugin): RegisteredPlugin[] => (
  pluginStore.resourcesForPlugin(plugin.id)
);

const capabilityLabelMap: Record<keyof PluginCapabilities, string> = {
  routeNames: 'plugins.permissionCapabilities.routes',
  settingsTabs: 'plugins.permissionCapabilities.settings',
  hotkeys: 'plugins.permissionCapabilities.hotkeys',
  searchSources: 'plugins.permissionCapabilities.search',
  titlebarActions: 'plugins.permissionCapabilities.titlebar',
  trayItems: 'plugins.permissionCapabilities.tray',
  windows: 'plugins.permissionCapabilities.windows'
};
const capabilityKeys = Object.keys(capabilityLabelMap) as Array<keyof PluginCapabilities>;

const permissionLabel = (permission: string): string => {
  if (permission.startsWith('backend:')) return t('plugins.permissionBackend', { permission });
  if (permission.startsWith('command:')) return t('plugins.permissionCommand', { permission });
  return permission;
};

const capabilityLabels = (capabilities?: PluginCapabilities): string[] => {
  if (!capabilities) return [];

  return capabilityKeys
    .filter((key) => {
      const value = capabilities[key];
      return Array.isArray(value) ? value.length > 0 : Boolean(value);
    })
    .map((key) => t(capabilityLabelMap[key]));
};

const marketplacePermissionLabels = (item: PluginMarketplaceItem): string[] => {
  const manifest = item.manifest;
  const labels = [
    ...capabilityLabels(manifest?.capabilities),
    ...(manifest?.permissions ?? []).map(permissionLabel)
  ];

  if (item.resourceFor || manifest?.resourceFor || manifest?.resources) {
    labels.push(t('plugins.permissionResource'));
  }

  return labels.length ? labels : [t('plugins.permissionNone')];
};

const installedPluginPermissionLabels = (plugin: RegisteredPlugin): string[] => {
  const labels = [
    ...capabilityLabels(plugin.manifest.capabilities),
    ...(plugin.manifest.permissions ?? []).map(permissionLabel)
  ];

  if (plugin.resourceFor || plugin.manifest.resourceFor || plugin.manifest.resources) {
    labels.push(t('plugins.permissionResource'));
  }

  return labels.length ? labels : [t('plugins.permissionNone')];
};

const isRiskPermissionLabel = (label: string): boolean => (
  label.includes('backend:')
  || label.includes('command:')
  || label === t('plugins.permissionCapabilities.windows')
);

const getMarketplaceDependencies = (item: PluginMarketplaceItem): string[] => (
  Array.isArray(item.dependencies)
    ? item.dependencies.filter((dependencyId) => typeof dependencyId === 'string' && dependencyId.trim())
    : []
);

const getMarketplaceDependencyNames = (item: PluginMarketplaceItem): string[] => (
  getMarketplaceDependencies(item)
    .map((dependencyId) => getMarketplaceItemById(dependencyId))
    .filter((dependency): dependency is PluginMarketplaceItem => Boolean(dependency))
    .map((dependency) => pluginText(dependency.name))
);

const formatBytes = (value?: number | null): string => {
  if (!Number.isFinite(value) || !value || value <= 0) {
    return t('plugins.sizeUnknown');
  }

  const units = ['B', 'KB', 'MB', 'GB'];
  let size = value;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }

  const precision = unitIndex === 0 || size >= 10 ? 0 : 1;
  return `${size.toFixed(precision)} ${units[unitIndex]}`;
};

const marketplaceItemByPackageUrl = computed(() => {
  const byUrl = new Map<string, PluginMarketplaceItem>();
  for (const item of marketplaceItems.value) {
    if (item.packageUrl) {
      byUrl.set(item.packageUrl, item);
    }
  }
  return byUrl;
});

const currentInstallingItem = computed(() => {
  if (!installProgress.value?.packageUrl) return null;
  return marketplaceItemByPackageUrl.value.get(installProgress.value.packageUrl) ?? null;
});

const installPhaseText = (phase: string): string => {
  const key = `plugins.installPhases.${phase}`;
  const translated = t(key);
  return translated === key ? phase : translated;
};

const currentInstallProgressText = computed(() => {
  if (!installProgress.value) return '';
  const itemName = currentInstallingItem.value
    ? pluginText(currentInstallingItem.value.name)
    : t('plugins.installingPlugin');
  const phase = installPhaseText(installProgress.value.phase);
  const percent = installProgress.value.progress === undefined
    ? ''
    : ` ${Math.round(installProgress.value.progress)}%`;
  return `${phase} ${itemName}${percent}`;
});

const currentInstallProgressSizeText = computed(() => {
  if (!installProgress.value) return '';
  const downloaded = formatBytes(installProgress.value.downloadedBytes);
  return installProgress.value.totalBytes
    ? `${downloaded} / ${formatBytes(installProgress.value.totalBytes)}`
    : downloaded;
});

const isMarketplaceItemInstalling = (item: PluginMarketplaceItem): boolean => (
  installingMarketplaceId.value === item.id
  || installingPackageId.value === item.id
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
  if (isMarketplaceItemInstalled(item) && hasMissingMarketplaceDependencies(item)) {
    return t('plugins.marketplaceDependencyMissing');
  }
  if (installedPlugin?.source === 'local') return t('plugins.marketplaceInstalled');
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

const canInstallMarketplaceItem = (item: PluginMarketplaceItem): boolean => {
  if (!item.packageUrl || !isCompatibleWithApp(item)) return false;
  if (item.status === 'included' && !isExternalOfficialPluginMode) return false;

  const installedPlugin = getInstalledMarketplacePlugin(item);
  if (!installedPlugin) return true;
  if (installedPlugin.source === 'local' && compareVersions(item.version, installedPlugin.manifest.version) > 0) {
    return false;
  }
  return hasMissingMarketplaceDependencies(item);
};

const canUpdateMarketplaceItem = (item: PluginMarketplaceItem): boolean => {
  const installedPlugin = getInstalledMarketplacePlugin(item);
  return Boolean(item.packageUrl)
    && isCompatibleWithApp(item)
    && installedPlugin?.source === 'local'
    && compareVersions(item.version, installedPlugin.manifest.version) > 0;
};

const shouldInstallMarketplaceItem = (item: PluginMarketplaceItem): boolean => (
  pluginStore.shouldInstallMarketplaceItem(item)
);

const hasMissingMarketplaceDependencies = (item: PluginMarketplaceItem): boolean => (
  getMarketplaceDependencies(item).some((dependencyId) => {
    const dependency = getMarketplaceItemById(dependencyId);
    return !dependency || shouldInstallMarketplaceItem(dependency);
  })
);

const refreshMarketplace = async (notify = true) => {
  marketplaceLoading.value = true;
  try {
    const marketplace = await fetchPluginMarketplace(DEFAULT_PLUGIN_MARKETPLACE_URL);
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

const loadPluginInstallDir = async () => {
  pluginInstallDirLoading.value = true;
  try {
    pluginInstallDir.value = await getPluginInstallDir();
  } catch (error) {
    logger.warn('[PluginSettings] load plugin install dir failed', error);
  } finally {
    pluginInstallDirLoading.value = false;
  }
};

const handleChoosePluginInstallDir = async () => {
  const selected = await open({
    directory: true,
    multiple: false,
    title: t('plugins.selectInstallLocation')
  });
  if (!selected || Array.isArray(selected)) return;
  pluginInstallDir.value = selected;
};

const handleSavePluginInstallDir = async () => {
  savingPluginInstallDir.value = true;
  try {
    await setPluginInstallDir(pluginInstallDir.value.trim() || null);
    pluginInstallDir.value = await getPluginInstallDir();
    await pluginStore.refreshInstalledPlugins();
    modal.msg(t('plugins.installLocationSaved'));
  } catch (error) {
    modal.msg(`${t('plugins.installLocationSaveFailed')}: ${error}`, 'error');
  } finally {
    savingPluginInstallDir.value = false;
  }
};

const handleResetPluginInstallDir = async () => {
  savingPluginInstallDir.value = true;
  try {
    await setPluginInstallDir(null);
    pluginInstallDir.value = await getPluginInstallDir();
    await pluginStore.refreshInstalledPlugins();
    modal.msg(t('plugins.installLocationReset'));
  } catch (error) {
    modal.msg(`${t('plugins.installLocationSaveFailed')}: ${error}`, 'error');
  } finally {
    savingPluginInstallDir.value = false;
  }
};

const handleInstallMarketplace = async (item: PluginMarketplaceItem, update = false) => {
  if (!item.packageUrl) return;

  installingMarketplaceId.value = item.id;
  installingPackageId.value = item.id;
  installProgress.value = null;
  try {
    logger.info('[PluginSettings] marketplace install start', {
      pluginId: item.id,
      update,
      dependencies: getMarketplaceDependencies(item)
    });
    await pluginStore.installMarketplaceItemWithDependencies(
      item,
      marketplaceItems.value,
      {
        isCompatible: isCompatibleWithApp,
        formatCircularDependencyError: (packageItem) =>
          `Circular plugin dependency: ${packageItem.id}`,
        formatMissingDependencyError: (dependencyId) =>
          t('plugins.dependencyMissing', { id: dependencyId }),
        formatIncompatibleDependencyError: (dependency) =>
          t('plugins.dependencyIncompatible', {
            plugin: pluginText(dependency.name)
          }),
        onInstallingPackage: (packageItem) => {
          installingPackageId.value = packageItem.id;
          installProgress.value = null;
          logger.info('[PluginSettings] marketplace install package start', {
            pluginId: packageItem.id,
            packageUrl: packageItem.packageUrl,
            packageSubdir: packageItem.packageSubdir,
            dependencies: getMarketplaceDependencies(packageItem)
          });
        }
      }
    );
    logger.info('[PluginSettings] marketplace install complete', {
      pluginId: item.id,
      update
    });
    modal.msg(update ? t('plugins.updateSuccess') : t('plugins.installSuccess'));
  } catch (error) {
    logger.error('[PluginSettings] marketplace install failed', { pluginId: item.id, update, error });
    modal.msg(`${update ? t('plugins.updateFailed') : t('plugins.installFailed')}: ${error}`, 'error');
  } finally {
    installingMarketplaceId.value = null;
    installingPackageId.value = null;
    installProgress.value = null;
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
    logger.info('[PluginSettings] install local directory start', { selected });
    await pluginStore.installFromPath(selected);
    logger.info('[PluginSettings] install local directory complete', { selected });
    modal.msg(t('plugins.installSuccess'));
  } catch (error) {
    logger.error('[PluginSettings] install local directory failed', { selected, error });
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
    logger.info('[PluginSettings] install zip start', { selected });
    await pluginStore.installFromPath(selected);
    logger.info('[PluginSettings] install zip complete', { selected });
    modal.msg(t('plugins.installSuccess'));
  } catch (error) {
    logger.error('[PluginSettings] install zip failed', { selected, error });
    modal.msg(`${t('plugins.installFailed')}: ${error}`, 'error');
  } finally {
    installing.value = false;
  }
};

const handleUninstall = async (pluginId: PluginId | string) => {
  removingPluginId.value = String(pluginId);
  try {
    logger.info('[PluginSettings] uninstall start', { pluginId });
    await pluginStore.uninstall(pluginId);
    logger.info('[PluginSettings] uninstall complete', { pluginId });
    modal.msg(t('plugins.uninstallSuccess'));
  } catch (error) {
    logger.error('[PluginSettings] uninstall failed', { pluginId, error });
    modal.msg(`${t('plugins.uninstallFailed')}: ${error}`, 'error');
  } finally {
    removingPluginId.value = null;
  }
};

const handleToggle = async (pluginId: PluginId | string, enabled: boolean) => {
  try {
    logger.info('[PluginSettings] toggle start', { pluginId, enabled });
    await pluginStore.setEnabled(pluginId, enabled);
    if (!enabled) {
      await unregisterPluginHotkeys(pluginId);
    }
    logger.info('[PluginSettings] toggle complete', { pluginId, enabled });
    modal.msg(enabled ? t('plugins.enabled') : t('plugins.disabled'));
  } catch (error) {
    logger.error('[PluginSettings] toggle failed', { pluginId, enabled, error });
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

.plugins-security-note {
  @apply mt-2 flex items-start gap-1.5 rounded border border-yellow-200 bg-yellow-50 px-2 py-1.5 text-xs leading-5 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-200;
}

.plugin-row {
  @apply grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 border-b border-panel last:border-b-0;
}

.plugin-install-dir-panel {
  @apply mb-4 flex items-end justify-between gap-3 border-b border-panel pb-4;
}

.plugin-install-dir-main {
  @apply min-w-0 flex-1;
}

.plugin-install-dir-title {
  @apply mb-1 text-sm font-medium text-panel;
}

.plugin-install-dir-desc {
  @apply mb-2 text-xs leading-5 text-panel-text-secondary;
}

.plugin-install-dir-input {
  @apply w-full rounded border border-panel bg-hover px-2 py-1.5 text-xs text-panel outline-none;
}

.plugin-install-dir-actions {
  @apply flex shrink-0 items-center gap-2;
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
  @apply grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded border border-panel px-3 py-2;
}

.marketplace-main {
  @apply min-w-0 flex-1;
}

.marketplace-resource-list,
.installed-resource-list {
  @apply col-span-2 mt-1 flex flex-col gap-2 border-t border-panel pt-2;
}

.marketplace-resource-row,
.installed-resource-row {
  @apply flex items-center justify-between gap-4 rounded bg-hover px-3 py-2;
}

.marketplace-resource-main {
  @apply min-w-0 flex-1;
}

.marketplace-tags {
  @apply mt-1 flex flex-wrap gap-1;
}

.plugin-meta {
  @apply mt-1 flex flex-wrap items-center gap-2 text-xs text-panel-text-secondary;
}

.plugin-permission-summary {
  @apply mt-1 flex flex-wrap gap-1;
}

.plugin-permission-chip {
  @apply rounded border border-panel bg-hover px-1.5 py-0.5 text-xs text-panel-text-secondary;

  &--risk {
    @apply border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-200;
  }
}

.marketplace-tag {
  @apply rounded bg-hover px-1.5 py-0.5 text-xs text-panel-text-secondary;
}

.marketplace-empty {
  @apply py-3 text-center text-xs text-panel-text-secondary;
}

.plugin-install-progress {
  @apply mt-2 max-w-md;
}

.plugin-install-progress-text {
  @apply mb-1 flex items-center justify-between gap-3 text-xs text-panel-text-secondary;
}

.plugin-install-progress-track {
  @apply h-1.5 overflow-hidden rounded bg-hover;
}

.plugin-install-progress-track--indeterminate .plugin-install-progress-bar {
  animation: plugin-progress-indeterminate 1.1s ease-in-out infinite;
}

.plugin-install-progress-bar {
  @apply h-full rounded bg-primary transition-all duration-200;
}

@keyframes plugin-progress-indeterminate {
  0% {
    transform: translateX(-110%);
  }

  100% {
    transform: translateX(320%);
  }
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
