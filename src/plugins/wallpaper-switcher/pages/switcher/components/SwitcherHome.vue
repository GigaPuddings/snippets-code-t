<script setup lang="ts">
import {
  CheckSmall,
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
  FolderSort,
  WallpaperConfig,
  WallpaperMode,
  WallpaperOrder,
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

const modeOptions: Array<{
  value: WallpaperMode;
  labelKey: string;
  captionKey: string;
}> = [
  {
    value: 'folder',
    labelKey: 'wallpaperSwitcher.localFolder',
    captionKey: 'wallpaperSwitcher.localFolderCaption'
  },
  {
    value: 'wallhaven',
    labelKey: 'wallpaperSwitcher.wallhavenOnline',
    captionKey: 'wallpaperSwitcher.wallhavenCaption'
  },
  {
    value: 'fixed',
    labelKey: 'wallpaperSwitcher.fixedImage',
    captionKey: 'wallpaperSwitcher.fixedImageCaption'
  }
];

const folderSortOptions: Array<{ value: FolderSort; labelKey: string }> = [
  {
    value: 'createdAscending',
    labelKey: 'wallpaperSwitcher.folderSort.createdAscending'
  },
  {
    value: 'fileNameAscending',
    labelKey: 'wallpaperSwitcher.folderSort.fileNameAscending'
  },
  {
    value: 'modifiedDescending',
    labelKey: 'wallpaperSwitcher.folderSort.modifiedDescending'
  }
];

const patchConfig = (patch: Partial<WallpaperConfig>): void => {
  emit('updateConfig', { ...props.config, ...patch });
};

const setMode = (mode: WallpaperMode): void => patchConfig({ mode });
const setSource = (wallhavenSource: WallhavenSource): void =>
  patchConfig({ wallhavenSource });
const setOrder = (order: WallpaperOrder): void => patchConfig({ order });
const updateFolderSort = (event: Event): void =>
  patchConfig({
    folderSort: (event.target as HTMLSelectElement).value as FolderSort
  });
const updateScheduleEnabled = (event: Event): void =>
  patchConfig({ scheduleEnabled: (event.target as HTMLInputElement).checked });
const updateInterval = (event: Event): void =>
  patchConfig({
    intervalMinutes: Math.min(
      1440,
      Math.max(1, Number((event.target as HTMLInputElement).value) || 1)
    )
  });
const updateAutoRestore = (event: Event): void =>
  patchConfig({ autoRestore: (event.target as HTMLInputElement).checked });
</script>

<template>
  <div class="switcher-home" :class="{ 'is-loading': loading }">
    <section class="workspace-grid">
      <article class="wallpaper-stage">
        <div class="stage-media">
          <img
            v-if="previewSrc"
            :src="previewSrc"
            :alt="t('wallpaperSwitcher.currentPreviewAlt')"
          />
          <div v-else class="stage-empty">
            <Picture :size="40" />
            <span>{{ t('wallpaperSwitcher.noCurrentWallpaper') }}</span>
          </div>
        </div>

        <div class="stage-overlay"></div>
        <div class="stage-topline">
          <span class="eyebrow-pill">
            <span class="live-dot"></span>
            {{ t('wallpaperSwitcher.currentDesktop') }}
          </span>
          <span class="source-pill">{{ sourceLabel }}</span>
        </div>

        <div class="stage-content">
          <div class="stage-copy">
            <p>{{ t('wallpaperSwitcher.currentWallpaper') }}</p>
            <h1 :title="currentWallpaperName">{{ currentWallpaperName }}</h1>
            <div class="stage-meta">
              <span>
                <Computer :size="15" />
                {{ resolutionLabel }}
              </span>
              <span>
                <Time :size="15" />
                {{ nextSwitchLabel }}
              </span>
            </div>
          </div>

          <div class="stage-actions">
            <button
              type="button"
              class="stage-btn stage-btn-primary"
              :disabled="switching"
              @click="emit('switchNow')"
            >
              <Refresh v-if="switching" :size="16" class="spinning" />
              <Lightning v-else :size="16" />
              {{
                switching
                  ? t('wallpaperSwitcher.switching')
                  : t('wallpaperSwitcher.switchNow')
              }}
            </button>
            <button
              type="button"
              class="stage-btn stage-btn-ghost"
              @click="emit('setCurrentAsFixed')"
            >
              <Pin :size="16" />
              {{ t('wallpaperSwitcher.setFixed') }}
            </button>
          </div>
        </div>
      </article>

      <aside class="source-workspace">
        <header class="section-heading">
          <div>
            <span class="section-kicker">
              {{ t('wallpaperSwitcher.stepOne') }}
            </span>
            <h2>{{ t('wallpaperSwitcher.chooseSource') }}</h2>
          </div>
          <span class="ready-state">
            <CheckSmall :size="14" />
            {{ t('wallpaperSwitcher.ready') }}
          </span>
        </header>

        <div class="mode-picker" role="tablist">
          <button
            v-for="option in modeOptions"
            :key="option.value"
            type="button"
            :class="{ active: config.mode === option.value }"
            role="tab"
            :aria-selected="config.mode === option.value"
            @click="setMode(option.value)"
          >
            <FolderOpen v-if="option.value === 'folder'" :size="18" />
            <Search v-else-if="option.value === 'wallhaven'" :size="18" />
            <Picture v-else :size="18" />
            <span>
              <strong>{{ t(option.labelKey) }}</strong>
              <small>{{ t(option.captionKey) }}</small>
            </span>
          </button>
        </div>

        <div class="source-detail">
          <template v-if="config.mode === 'folder'">
            <div class="detail-title">
              <div>
                <span>{{ t('wallpaperSwitcher.localLibrary') }}</span>
                <strong>{{ folderCountLabel }}</strong>
              </div>
              <button
                type="button"
                class="text-action"
                @click="emit('scanFolder')"
              >
                <Refresh :size="14" />
                {{ t('wallpaperSwitcher.scan') }}
              </button>
            </div>
            <label
              v-if="config.order === 'sequential'"
              class="folder-sort-picker"
            >
              <span>{{ t('wallpaperSwitcher.folderSortLabel') }}</span>
              <select :value="config.folderSort" @change="updateFolderSort">
                <option
                  v-for="option in folderSortOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ t(option.labelKey) }}
                </option>
              </select>
            </label>
            <button
              type="button"
              class="path-picker"
              :title="config.folderPath || ''"
              @click="emit('chooseFolder')"
            >
              <span class="path-icon"><FolderOpen :size="18" /></span>
              <span class="path-copy">
                <small>{{ t('wallpaperSwitcher.folderPath') }}</small>
                <strong>
                  {{
                    config.folderPath ||
                    t('wallpaperSwitcher.placeholders.selectFolder')
                  }}
                </strong>
              </span>
              <span class="path-cta">{{ t('wallpaperSwitcher.change') }}</span>
            </button>
          </template>

          <template v-else-if="config.mode === 'wallhaven'">
            <div class="detail-title">
              <div>
                <span>Wallhaven</span>
                <strong>{{ t('wallpaperSwitcher.onlineSourceHint') }}</strong>
              </div>
            </div>
            <div class="online-source-tabs" role="tablist">
              <WallhavenSourceTabs
                tab-class="button"
                :model-value="config.wallhavenSource"
                @update:model-value="setSource"
              />
            </div>
            <button
              type="button"
              class="browse-online-btn"
              @click="emit('openWallhavenGrid')"
            >
              <Picture :size="18" />
              <span>
                <strong>{{ t('wallpaperSwitcher.browseOnline') }}</strong>
                <small>{{ t('wallpaperSwitcher.browseOnlineHint') }}</small>
              </span>
              <span aria-hidden="true">→</span>
            </button>
          </template>

          <template v-else>
            <div class="detail-title">
              <div>
                <span>{{ t('wallpaperSwitcher.fixedImage') }}</span>
                <strong>{{ t('wallpaperSwitcher.fixedModeHint') }}</strong>
              </div>
            </div>
            <button
              type="button"
              class="path-picker"
              :title="config.fixedImagePath || ''"
              @click="emit('chooseImage')"
            >
              <span class="path-icon"><Picture :size="18" /></span>
              <span class="path-copy">
                <small>{{ t('wallpaperSwitcher.imagePath') }}</small>
                <strong>
                  {{
                    config.fixedImagePath ||
                    t('wallpaperSwitcher.placeholders.selectImage')
                  }}
                </strong>
              </span>
              <span class="path-cta">{{ t('wallpaperSwitcher.change') }}</span>
            </button>
          </template>
        </div>
      </aside>
    </section>

    <section class="automation-card">
      <div class="automation-intro">
        <span class="automation-icon"><Time :size="20" /></span>
        <div>
          <span class="section-kicker">
            {{ t('wallpaperSwitcher.stepTwo') }}
          </span>
          <h2>{{ t('wallpaperSwitcher.automationTitle') }}</h2>
          <p>{{ t('wallpaperSwitcher.automationHint') }}</p>
        </div>
      </div>

      <label class="schedule-toggle">
        <span>
          <strong>{{ t('wallpaperSwitcher.enableSchedule') }}</strong>
        </span>
        <input
          :checked="config.scheduleEnabled"
          type="checkbox"
          @change="updateScheduleEnabled"
        />
        <span class="switch-control" aria-hidden="true"></span>
      </label>

      <label class="compact-control">
        <span>{{ t('wallpaperSwitcher.interval') }}</span>
        <span class="number-input">
          <input
            :value="config.intervalMinutes"
            type="number"
            min="1"
            max="1440"
            @input="updateInterval"
          />
          <small>{{ t('wallpaperSwitcher.minutes') }}</small>
        </span>
      </label>

      <div class="compact-control order-control">
        <span>{{ t('wallpaperSwitcher.rotationOrder') }}</span>
        <div class="mini-segmented">
          <button
            type="button"
            :class="{ active: config.order === 'sequential' }"
            @click="setOrder('sequential')"
          >
            {{ t('wallpaperSwitcher.sequential') }}
          </button>
          <button
            type="button"
            :class="{ active: config.order === 'random' }"
            @click="setOrder('random')"
          >
            {{ t('wallpaperSwitcher.random') }}
          </button>
        </div>
      </div>

      <label class="restore-check">
        <input
          :checked="config.autoRestore"
          type="checkbox"
          @change="updateAutoRestore"
        />
        <span>
          <strong>{{ t('wallpaperSwitcher.autoRestoreShort') }}</strong>
          <small>{{ t('wallpaperSwitcher.autoRestoreHint') }}</small>
        </span>
      </label>
    </section>

    <footer class="utility-bar">
      <div class="tray-callout">
        <Lightning :size="17" />
        <span>
          <strong>{{ t('wallpaperSwitcher.trayQuickSwitch') }}</strong>
          <small>{{ t('wallpaperSwitcher.trayQuickSwitchHint') }}</small>
        </span>
      </div>

      <div class="cache-summary">
        <span>{{ t('wallpaperSwitcher.cache') }}</span>
        <strong>{{ cacheSizeLabel }}</strong>
      </div>

      <div class="utility-actions">
        <button
          type="button"
          class="utility-btn"
          :disabled="clearingCache"
          :title="t('wallpaperSwitcher.clearCache')"
          @click="emit('clearCache')"
        >
          <Delete :size="16" />
        </button>
        <button
          type="button"
          class="utility-btn"
          :disabled="openingCache"
          :title="t('wallpaperSwitcher.openCache')"
          @click="emit('openCacheDir')"
        >
          <FolderOpen :size="16" />
        </button>
        <button
          type="button"
          class="save-btn"
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
