<script setup lang="ts">
import {
  Computer,
  Delete,
  FolderOpen,
  Lightning,
  Picture,
  Pin,
  Refresh,
  Save,
  Search,
  Time
} from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type {
  WallpaperConfig,
  WallpaperMode,
  WallhavenSource
} from '../../../api';
import WallhavenSourceTabs from './WallhavenSourceTabs.vue';

const props = defineProps<{
  config: WallpaperConfig;
  loading: boolean;
  previewSrc: string;
  currentWallpaperName: string;
  sourceLabel: string;
  resolutionLabel: string;
  nextSwitchLabel: string;
  folderCountLabel: string;
  cacheSizeLabel: string;
  switching: boolean;
  clearingCache: boolean;
  openingCache: boolean;
  saving: boolean;
}>();

const emit = defineEmits<{
  (event: 'updateConfig', value: WallpaperConfig): void;
  (event: 'chooseImage'): void;
  (event: 'chooseFolder'): void;
  (event: 'scanFolder'): void;
  (event: 'openWallhavenGrid'): void;
  (event: 'switchNow'): void;
  (event: 'setCurrentAsFixed'): void;
  (event: 'clearCache'): void;
  (event: 'openCacheDir'): void;
  (event: 'persistConfig'): void;
}>();

const { t } = useI18n();

const patchConfig = (patch: Partial<WallpaperConfig>) => {
  emit('updateConfig', { ...props.config, ...patch });
};

const setMode = (mode: WallpaperMode) => patchConfig({ mode });
const setSource = (wallhavenSource: WallhavenSource) =>
  patchConfig({ wallhavenSource });
const updateFixedPath = (event: Event) =>
  patchConfig({ fixedImagePath: (event.target as HTMLInputElement).value });
const updateFolderPath = (event: Event) =>
  patchConfig({ folderPath: (event.target as HTMLInputElement).value });
const updateScheduleEnabled = (event: Event) =>
  patchConfig({ scheduleEnabled: (event.target as HTMLInputElement).checked });
const updateInterval = (event: Event) =>
  patchConfig({
    intervalMinutes: Number((event.target as HTMLInputElement).value)
  });
const updateAutoRestore = (event: Event) =>
  patchConfig({ autoRestore: (event.target as HTMLInputElement).checked });
</script>

<template>
  <div class="content" :class="{ dimmed: loading }">
    <section class="top-panel">
      <div class="preview">
        <img
          v-if="previewSrc"
          :src="previewSrc"
          :alt="t('wallpaperSwitcher.currentPreviewAlt')"
        />
        <div v-else class="preview-empty">
          <Picture :size="42" />
          <span>{{ t('wallpaperSwitcher.noCurrentWallpaper') }}</span>
        </div>
      </div>
      <div class="status-panel">
        <div class="status-copy">
          <div class="wallpaper-name">
            <span>{{ t('wallpaperSwitcher.currentWallpaper') }}</span>
            <strong>{{ currentWallpaperName }}</strong>
          </div>
          <div class="status-list">
            <div class="status-row">
              <FolderOpen :size="16" />
              <span>{{ t('wallpaperSwitcher.source') }}</span>
              <strong>{{ sourceLabel }}</strong>
            </div>
            <div class="status-row">
              <Computer :size="16" />
              <span>{{ t('wallpaperSwitcher.resolution') }}</span>
              <strong>{{ resolutionLabel }}</strong>
            </div>
            <div class="status-row">
              <Time :size="16" />
              <span>{{ t('wallpaperSwitcher.nextSwitch') }}</span>
              <strong>{{ nextSwitchLabel }}</strong>
            </div>
          </div>
        </div>
        <div class="status-actions">
          <button
            type="button"
            class="primary-btn"
            :disabled="switching"
            @click="emit('switchNow')"
          >
            <Lightning theme="outline" :size="14" />
            {{
              switching
                ? t('wallpaperSwitcher.switching')
                : t('wallpaperSwitcher.switchNow')
            }}
          </button>
          <button
            type="button"
            class="secondary-btn"
            @click="emit('setCurrentAsFixed')"
          >
            <Pin theme="outline" :size="14" />
            {{ t('wallpaperSwitcher.setFixed') }}
          </button>
        </div>
      </div>
    </section>

    <section class="card settings-card">
      <div class="form-row mode-row">
        <span class="row-label">{{ t('wallpaperSwitcher.mode') }}</span>
        <div class="segmented three">
          <button
            type="button"
            :class="{ active: config.mode === 'fixed' }"
            @click="setMode('fixed')"
          >
            {{ t('wallpaperSwitcher.fixedImage') }}
          </button>
          <button
            type="button"
            :class="{ active: config.mode === 'folder' }"
            @click="setMode('folder')"
          >
            {{ t('wallpaperSwitcher.localFolder') }}
          </button>
          <button
            type="button"
            :class="{ active: config.mode === 'wallhaven' }"
            @click="setMode('wallhaven')"
          >
            {{ t('wallpaperSwitcher.wallhavenOnline') }}
          </button>
        </div>
      </div>

      <div class="form-row fixed-row">
        <span class="row-label">{{ t('wallpaperSwitcher.fixedImage') }}</span>
        <input
          :value="config.fixedImagePath"
          class="path-input"
          :placeholder="t('wallpaperSwitcher.placeholders.fixedImage')"
          spellcheck="false"
          @input="updateFixedPath"
        />
        <button type="button" class="tool-btn" @click="emit('chooseImage')">
          <Picture :size="16" />
          {{ t('wallpaperSwitcher.selectImage') }}
        </button>
      </div>

      <div class="form-row folder-row">
        <span class="row-label">{{ t('wallpaperSwitcher.localFolder') }}</span>
        <input
          :value="config.folderPath"
          class="path-input"
          :placeholder="t('wallpaperSwitcher.placeholders.folder')"
          spellcheck="false"
          @input="updateFolderPath"
        />
        <button type="button" class="tool-btn" @click="emit('chooseFolder')">
          <FolderOpen :size="16" />
          {{ t('wallpaperSwitcher.select') }}
        </button>
        <button type="button" class="tool-btn" @click="emit('scanFolder')">
          <Refresh :size="16" />
          {{ t('wallpaperSwitcher.scan') }}
        </button>
      </div>
      <div class="hint-row folder-hint-row">
        <span>{{ folderCountLabel }}</span>
        <span>{{ t('wallpaperSwitcher.folderCreateTimeHint') }}</span>
      </div>

      <div class="form-row wallhaven-row">
        <span class="row-label">Wallhaven</span>
        <span class="sub-label">{{ t('wallpaperSwitcher.sourceShort') }}</span>
        <div class="segmented source">
          <WallhavenSourceTabs
            tab-class="button"
            :model-value="config.wallhavenSource"
            @update:model-value="setSource"
          />
        </div>
        <button
          type="button"
          class="tool-btn grid-open"
          @click="emit('openWallhavenGrid')"
        >
          <Search :size="16" />
          {{ t('wallpaperSwitcher.openOnlineGrid') }}
        </button>
      </div>
    </section>

    <section class="card rules-card">
      <div class="rules-line">
        <span class="row-label">{{ t('wallpaperSwitcher.switchRules') }}</span>
        <label class="switch-label">
          {{ t('wallpaperSwitcher.enableSchedule') }}
          <input
            :checked="config.scheduleEnabled"
            type="checkbox"
            @change="updateScheduleEnabled"
          />
          <span class="switch-control"></span>
        </label>
        <label class="number-label">
          {{ t('wallpaperSwitcher.every') }}
          <input
            :value="config.intervalMinutes"
            type="number"
            min="1"
            max="1440"
            @input="updateInterval"
          />
          {{ t('wallpaperSwitcher.minutes') }}
        </label>
        <label class="checkbox-label">
          <input
            :checked="config.autoRestore"
            type="checkbox"
            @change="updateAutoRestore"
          />
          {{ t('wallpaperSwitcher.autoRestore') }}
        </label>
      </div>
    </section>

    <footer class="footer-card">
      <div class="cache-info">
        <strong>{{ t('wallpaperSwitcher.cache') }}</strong>
        <span>{{ t('wallpaperSwitcher.wallhavenCache') }}</span>
        <span>{{ cacheSizeLabel }}</span>
      </div>
      <div class="footer-actions">
        <button
          type="button"
          class="secondary-btn"
          :disabled="clearingCache"
          @click="emit('clearCache')"
        >
          <Delete :size="16" />
          {{
            clearingCache
              ? t('wallpaperSwitcher.clearing')
              : t('wallpaperSwitcher.clearCache')
          }}
        </button>
        <button
          type="button"
          class="secondary-btn"
          :disabled="openingCache"
          @click="emit('openCacheDir')"
        >
          <FolderOpen :size="16" />
          {{
            openingCache
              ? t('wallpaperSwitcher.opening')
              : t('wallpaperSwitcher.openCache')
          }}
        </button>
        <button
          type="button"
          class="primary-btn"
          :disabled="saving"
          @click="emit('persistConfig')"
        >
          <Save :size="17" />
          {{
            saving
              ? t('wallpaperSwitcher.saving')
              : t('wallpaperSwitcher.saveSettings')
          }}
        </button>
      </div>
    </footer>
  </div>
</template>
