<script setup lang="ts">
import Back from '~icons/lucide/arrow-left';
import CloseSmall from '~icons/lucide/x';
import Picture from '~icons/lucide/image';
import PictureAlbum from '~icons/lucide/images';
import { useI18n } from 'vue-i18n';
import type { WallhavenSource } from '../../../api';
import WallhavenSourceTabs from './WallhavenSourceTabs.vue';

defineProps<{
  activeView: 'switcher' | 'wallhaven';
  wallhavenSource: WallhavenSource;
  wallhavenLoading: boolean;
  scheduleEnabled: boolean;
  schedulerRunning: boolean;
}>();

const emit = defineEmits<{
  (event: 'back'): void;
  (event: 'close'): void;
  (event: 'openWallhaven'): void;
  (event: 'setWallhavenSource', value: WallhavenSource): void;
}>();

const { t } = useI18n();
</script>

<template>
  <header class="titlebar" data-tauri-drag-region>
    <div v-if="activeView === 'switcher'" class="title">
      <span class="title-icon"><Picture :width="18" :height="18" /></span>
      <span class="title-copy">
        <strong>{{ t('wallpaperSwitcher.title') }}</strong>
        <small>{{ t('wallpaperSwitcher.titleSubtitle') }}</small>
      </span>
      <span
        class="title-status"
        :class="{ active: scheduleEnabled && schedulerRunning }"
      >
        <span></span>
        {{
          scheduleEnabled && schedulerRunning
            ? t('wallpaperSwitcher.scheduleRunning')
            : t('wallpaperSwitcher.schedulePaused')
        }}
      </span>
    </div>
    <div v-else class="title">
      <button
        type="button"
        class="flat-icon"
        :title="t('wallpaperSwitcher.back')"
        @click="emit('back')"
      >
        <Back :width="20" :height="20" />
      </button>
      <span>{{ t('wallpaperSwitcher.wallhavenTitle') }}</span>
    </div>
    <div v-if="activeView === 'switcher'" class="window-actions">
      <button
        type="button"
        class="online-entry-btn"
        :title="t('wallpaperSwitcher.openWallhaven')"
        @click="emit('openWallhaven')"
      >
        <PictureAlbum :width="18" :height="18" />
        <span>{{ t('wallpaperSwitcher.browseOnline') }}</span>
      </button>
      <button
        type="button"
        class="icon-btn"
        :title="t('wallpaperSwitcher.close')"
        @click="emit('close')"
      >
        <CloseSmall :width="20" :height="20" />
      </button>
    </div>
    <div v-else class="window-actions">
      <div
        class="source-toggle"
        role="tablist"
        :aria-label="t('wallpaperSwitcher.sourceToggle')"
      >
        <WallhavenSourceTabs
          :model-value="wallhavenSource"
          :disabled="wallhavenLoading"
          @update:model-value="emit('setWallhavenSource', $event)"
        />
      </div>
      <button
        type="button"
        class="icon-btn"
        :title="t('wallpaperSwitcher.close')"
        @click="emit('close')"
      >
        <CloseSmall :width="20" :height="20" />
      </button>
    </div>
  </header>
</template>
