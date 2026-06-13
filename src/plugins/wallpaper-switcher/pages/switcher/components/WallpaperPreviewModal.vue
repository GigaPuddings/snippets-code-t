<script setup lang="ts">
import { CloseSmall } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { WallhavenWallpaper } from '../../../api';

defineProps<{
  wallpaper: WallhavenWallpaper | null;
  loading: boolean;
  loadFailed: boolean;
  workingIds: Set<string>;
}>();

const emit = defineEmits<{
  (event: 'close'): void;
  (event: 'loaded'): void;
  (event: 'failed'): void;
  (event: 'download', value: WallhavenWallpaper): void;
  (event: 'setWallpaper', value: WallhavenWallpaper): void;
}>();

const { t } = useI18n();
</script>

<template>
  <div v-if="wallpaper" class="preview-modal" @click.self="emit('close')">
    <div class="preview-dialog">
      <header>
        <strong>{{ wallpaper.resolution }}</strong>
        <button type="button" class="flat-icon" @click="emit('close')">
          <CloseSmall :size="23" />
        </button>
      </header>
      <div class="preview-image-wrap">
        <div v-if="loading" class="preview-skeleton">
          <span>{{ t('wallpaperSwitcher.loadingPreview') }}</span>
        </div>
        <div v-if="loadFailed" class="preview-error">
          {{ t('wallpaperSwitcher.previewLoadFailed') }}
        </div>
        <img
          :class="{ ready: !loading && !loadFailed }"
          :src="wallpaper.path"
          :alt="t('wallpaperSwitcher.wallpaperPreviewAlt')"
          @load="emit('loaded')"
          @error="emit('failed')"
        />
      </div>
      <footer>
        <button
          type="button"
          class="secondary-btn"
          :disabled="workingIds.has(wallpaper.id)"
          @click="emit('download', wallpaper)"
        >
          {{ t('wallpaperSwitcher.downloadCache') }}
        </button>
        <button
          type="button"
          class="primary-btn"
          :disabled="workingIds.has(wallpaper.id)"
          @click="emit('setWallpaper', wallpaper)"
        >
          {{
            workingIds.has(wallpaper.id)
              ? t('wallpaperSwitcher.setting')
              : t('wallpaperSwitcher.setWallpaper')
          }}
        </button>
      </footer>
    </div>
  </div>
</template>
