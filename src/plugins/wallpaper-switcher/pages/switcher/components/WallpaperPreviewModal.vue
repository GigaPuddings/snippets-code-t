<script setup lang="ts">
import { CloseSmall, Loading } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { WallhavenWallpaper } from '../../../api';
import type { DownloadProgress } from '../../../composables/useWallhaven';

type WallhavenWorkingAction = 'setting' | 'downloading';

const props = defineProps<{
  wallpaper: WallhavenWallpaper | null;
  loading: boolean;
  loadFailed: boolean;
  workingActions: Map<string, WallhavenWorkingAction>;
  downloadProgress: Map<string, DownloadProgress>;
}>();

const emit = defineEmits<{
  (event: 'close'): void;
  (event: 'loaded'): void;
  (event: 'failed'): void;
  (event: 'download', value: WallhavenWallpaper): void;
  (event: 'setWallpaper', value: WallhavenWallpaper): void;
}>();

const { t } = useI18n();
const workingActionFor = (id: string): WallhavenWorkingAction | undefined =>
  props.workingActions.get(id);

const progressFor = (id: string): number | null => {
  const p = props.downloadProgress.get(id);
  if (!p || !p.total || p.total <= 0) return null;
  return Math.min(100, Math.round((p.downloaded / p.total) * 100));
};
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
        <div
          v-if="wallpaper && progressFor(wallpaper.id) !== null"
          class="download-ring preview-download-ring"
        >
          <svg viewBox="0 0 48 48" class="ring-svg">
            <circle
              class="ring-track"
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke-width="4"
            />
            <circle
              class="ring-fill"
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke-width="4"
              stroke-linecap="round"
              :stroke-dasharray="125.66"
              :stroke-dashoffset="125.66 * (1 - (progressFor(wallpaper.id) ?? 0) / 100)"
              transform="rotate(-90 24 24)"
            />
          </svg>
          <span class="ring-text">{{ progressFor(wallpaper.id) }}%</span>
        </div>
      </div>
      <footer>
        <button
          type="button"
          class="secondary-btn"
          :class="{
            'is-working': workingActionFor(wallpaper.id) === 'downloading'
          }"
          :disabled="Boolean(workingActionFor(wallpaper.id))"
          :aria-busy="workingActionFor(wallpaper.id) === 'downloading'"
          @click="emit('download', wallpaper)"
        >
          <Loading
            v-if="workingActionFor(wallpaper.id) === 'downloading'"
            :size="16"
            spin
          />
          {{
            workingActionFor(wallpaper.id) === 'downloading'
              ? t('wallpaperSwitcher.downloading')
              : t('wallpaperSwitcher.downloadCache')
          }}
        </button>
        <button
          type="button"
          class="primary-btn"
          :class="{
            'is-working': workingActionFor(wallpaper.id) === 'setting'
          }"
          :disabled="Boolean(workingActionFor(wallpaper.id))"
          :aria-busy="workingActionFor(wallpaper.id) === 'setting'"
          @click="emit('setWallpaper', wallpaper)"
        >
          <Loading
            v-if="workingActionFor(wallpaper.id) === 'setting'"
            :size="16"
            spin
          />
          {{
            workingActionFor(wallpaper.id) === 'setting'
              ? t('wallpaperSwitcher.setting')
              : t('wallpaperSwitcher.setWallpaper')
          }}
        </button>
      </footer>
    </div>
  </div>
</template>
