<script setup lang="ts">
import { CloseSmall, Loading } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { WallhavenWallpaper } from '../../../api';

type WallhavenWorkingAction = 'setting' | 'downloading';

const props = defineProps<{
  wallpaper: WallhavenWallpaper | null;
  loading: boolean;
  loadFailed: boolean;
  workingActions: Map<string, WallhavenWorkingAction>;
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
