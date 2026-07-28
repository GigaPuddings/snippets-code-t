<template>
  <section class="rounded-lg border border-panel bg-panel px-4 pb-2">
    <div class="border-b border-panel py-3">
      <h4 class="text-sm font-semibold text-panel">
        {{ t('dataManager.cleanupTitle') }}
      </h4>
      <p class="mt-1 text-xs leading-5 text-content">
        {{ t('dataManager.cleanupDesc') }}
      </p>
    </div>

    <ActionRow
      :title="t('dataManager.searchHistory')"
      :description="t('dataManager.searchHistoryDesc')"
      :loading="historyLoading"
      @action="emit('clearHistory')"
    />
    <ActionRow
      :title="t('dataManager.iconCache')"
      :description="t('dataManager.iconCacheDesc')"
      :loading="iconCacheLoading"
      @action="emit('clearIconCache')"
    />
    <ActionRow
      v-if="wallpaperCacheAvailable"
      :title="t('dataManager.wallpaperCache')"
      :description="
        t('dataManager.wallpaperCacheDesc', { size: wallpaperCacheSizeLabel })
      "
      :loading="wallpaperCacheLoading"
      :secondary-label="t('dataManager.openDirectory')"
      :secondary-loading="wallpaperCacheOpening"
      @action="emit('clearWallpaperCache')"
      @secondary="emit('openWallpaperCache')"
    />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ActionRow from './components/ActionRow.vue';

defineProps<{
  historyLoading: boolean;
  iconCacheLoading: boolean;
  wallpaperCacheAvailable: boolean;
  wallpaperCacheLoading: boolean;
  wallpaperCacheOpening: boolean;
  wallpaperCacheSizeLabel: string;
}>();

const emit = defineEmits<{
  clearHistory: [];
  clearIconCache: [];
  clearWallpaperCache: [];
  openWallpaperCache: [];
}>();

const { t } = useI18n();
</script>
