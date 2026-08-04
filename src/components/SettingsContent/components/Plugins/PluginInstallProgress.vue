<template>
  <div
    v-if="progress"
    class="plugin-install-progress"
    :class="{
      'plugin-install-progress--failed': progress.phase === 'failed'
    }"
  >
    <div class="plugin-install-progress-text">
      <span>{{ progressText }}</span>
      <span>{{ progressSizeText }}</span>
    </div>
    <div
      class="plugin-install-progress-track"
      :class="{
        'plugin-install-progress-track--indeterminate':
          progress.phase !== 'failed' && progress.progress === undefined
      }"
    >
      <div
        class="plugin-install-progress-bar"
        :style="{ width: progressBarWidth }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type {
  PluginInstallProgress,
  PluginMarketplaceItem
} from '@/api/plugins';
import { usePluginStore } from '@/store';

const props = defineProps<{
  item: PluginMarketplaceItem;
  marketplaceItems: PluginMarketplaceItem[];
}>();

const { t } = useI18n();
const pluginStore = usePluginStore();

const getMarketplaceItemById = (
  id: string
): PluginMarketplaceItem | undefined =>
  props.marketplaceItems.find((item) => item.id === id);

const getMarketplaceDependencies = (item: PluginMarketplaceItem): string[] =>
  Array.isArray(item.dependencies)
    ? item.dependencies.filter(
        (dependencyId) =>
          typeof dependencyId === 'string' && Boolean(dependencyId.trim())
      )
    : [];

const getOwnProgress = (
  item: PluginMarketplaceItem
): PluginInstallProgress | undefined =>
  item.packageUrl
    ? pluginStore.installProgressByPackageUrl[item.packageUrl]
    : undefined;

const findActiveDependencyProgress = (
  item: PluginMarketplaceItem,
  visited = new Set<string>()
): PluginInstallProgress | undefined => {
  if (visited.has(item.id)) return undefined;
  visited.add(item.id);

  for (const dependencyId of getMarketplaceDependencies(item)) {
    const dependency = getMarketplaceItemById(dependencyId);
    if (!dependency) continue;

    const nestedProgress = findActiveDependencyProgress(dependency, visited);
    if (nestedProgress) return nestedProgress;

    const dependencyProgress = getOwnProgress(dependency);
    if (
      dependencyProgress &&
      dependencyProgress.phase !== 'installed' &&
      dependencyProgress.phase !== 'failed'
    ) {
      return dependencyProgress;
    }
  }

  return undefined;
};

const progress = computed<PluginInstallProgress | undefined>(() => {
  const ownProgress = getOwnProgress(props.item);
  if (ownProgress && ownProgress.phase !== 'installed') return ownProgress;

  return pluginStore.isMarketplaceInstallRequested(props.item.id)
    ? findActiveDependencyProgress(props.item)
    : undefined;
});

const progressItem = computed<PluginMarketplaceItem>(() =>
  progress.value
    ? (props.marketplaceItems.find(
        (item) => item.packageUrl === progress.value?.packageUrl
      ) ?? props.item)
    : props.item
);

const pluginText = (item: PluginMarketplaceItem): string => {
  const translated = t(item.name.i18nKey);
  return translated === item.name.i18nKey ? item.name.fallback : translated;
};

const installPhaseText = (phase: string): string => {
  const key = `plugins.installPhases.${phase}`;
  const translated = t(key);
  return translated === key ? phase : translated;
};

const formatBytes = (value?: number): string => {
  if (!Number.isFinite(value) || !value || value <= 0) return '';

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

const progressText = computed(() => {
  if (!progress.value) return '';
  const percent =
    progress.value.progress === undefined
      ? ''
      : ` ${Math.round(progress.value.progress)}%`;
  return `${installPhaseText(progress.value.phase)} ${pluginText(progressItem.value)}${percent}`;
});

const progressSizeText = computed(() => {
  if (
    !progress.value ||
    (!progress.value.downloadedBytes && !progress.value.totalBytes)
  ) {
    return '';
  }
  const downloaded = formatBytes(progress.value.downloadedBytes);
  return progress.value.totalBytes
    ? `${downloaded} / ${formatBytes(progress.value.totalBytes)}`
    : downloaded;
});

const progressBarWidth = computed(() =>
  progress.value?.phase === 'failed'
    ? '100%'
    : progress.value?.progress === undefined
      ? '35%'
      : `${Math.round(progress.value.progress)}%`
);
</script>

<style scoped lang="scss">
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

.plugin-install-progress--failed {
  .plugin-install-progress-text {
    @apply text-chat-error;
  }

  .plugin-install-progress-bar {
    @apply bg-red-500;
  }
}

@keyframes plugin-progress-indeterminate {
  0% {
    transform: translateX(-110%);
  }

  100% {
    transform: translateX(320%);
  }
}
</style>
