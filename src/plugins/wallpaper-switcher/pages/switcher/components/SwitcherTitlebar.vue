<script setup lang="ts">
import { Back, CloseSmall, Picture, PictureAlbum } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { WallhavenSource } from '../../../api';
import WallhavenSourceTabs from './WallhavenSourceTabs.vue';

defineProps<{
  activeView: 'switcher' | 'wallhaven';
  wallhavenSource: WallhavenSource;
  wallhavenLoading: boolean;
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
      <Picture :size="18" />
      <span>{{ t('wallpaperSwitcher.title') }}</span>
    </div>
    <div v-else class="title">
      <button
        type="button"
        class="flat-icon"
        :title="t('wallpaperSwitcher.back')"
        @click="emit('back')"
      >
        <Back :size="20" />
      </button>
      <span>{{ t('wallpaperSwitcher.wallhavenTitle') }}</span>
    </div>
    <div v-if="activeView === 'switcher'" class="window-actions">
      <button
        type="button"
        class="icon-btn online-entry-btn"
        :title="t('wallpaperSwitcher.openWallhaven')"
        @click="emit('openWallhaven')"
      >
        <PictureAlbum :size="18" />
      </button>
      <button
        type="button"
        class="icon-btn"
        :title="t('wallpaperSwitcher.close')"
        @click="emit('close')"
      >
        <CloseSmall :size="20" />
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
        <CloseSmall :size="20" />
      </button>
    </div>
  </header>
</template>
