<script setup lang="ts">
import CheckSmall from '~icons/lucide/check';
import Computer from '~icons/lucide/monitor';
import Delete from '~icons/lucide/trash-2';
import FolderOpen from '~icons/lucide/folder-open';
import Lightning from '~icons/lucide/zap';
import Picture from '~icons/lucide/image';
import Pin from '~icons/lucide/pin';
import Refresh from '~icons/lucide/refresh-cw';
import Save from '~icons/lucide/save';
import Search from '~icons/lucide/search';
import Time from '~icons/lucide/clock';
import { useI18n } from 'vue-i18n';
import type {
  FolderSort,
  WallpaperConfig,
  WallpaperMode,
  WallpaperOrder,
  WallpaperProvider,
  WallhavenSource
} from '../../../api';
import { wallpaperSources } from '../../../api';

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

const { t, locale } = useI18n();

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

const onlineProviders: Array<{ value: WallpaperProvider; label: string }> = [
  { value: 'wallhaven', label: 'Wallhaven' },
  { value: 'wallspic', label: 'Wallspic' }
];
const homeOnlineSources: WallhavenSource[] = [
  'hot',
  'toplist',
  'favorites',
  'latest'
];
const availableOnlineSources = computed(() =>
  homeOnlineSources.filter((source) =>
    wallpaperSources(props.config.onlineProvider).includes(source)
  )
);

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
const setOnlineProvider = (provider: WallpaperProvider): void => {
  const source =
    homeOnlineSources.includes(props.config.wallhavenSource) &&
    wallpaperSources(provider).includes(props.config.wallhavenSource)
      ? props.config.wallhavenSource
      : 'hot';
  patchConfig({ onlineProvider: provider, wallhavenSource: source });
};
const setOnlineSource = (source: WallhavenSource): void => {
  if (availableOnlineSources.value.includes(source))
    patchConfig({ wallhavenSource: source });
};
const onlineSourceLabel = (source: WallhavenSource): string =>
  t(
    source === 'favorites' && locale.value === 'en-US'
      ? 'wallpaperSwitcher.favoritesWithLabel'
      : `wallpaperSwitcher.${source}`
  );
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
            <Picture :width="40" :height="40" />
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
                <Computer :width="15" :height="15" />
                {{ resolutionLabel }}
              </span>
              <span>
                <Time :width="15" :height="15" />
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
              <Refresh
                v-if="switching"
                :width="16"
                :height="16"
                class="spinning"
              />
              <Lightning v-else :width="16" :height="16" />
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
              <Pin :width="16" :height="16" />
              {{ t('wallpaperSwitcher.setFixed') }}
            </button>
          </div>
        </div>
      </article>

      <aside class="source-workspace">
        <header class="section-heading">
          <div>
            <h2>{{ t('wallpaperSwitcher.chooseSource') }}</h2>
          </div>
          <span class="ready-state">
            <CheckSmall :width="14" :height="14" />
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
            <FolderOpen
              v-if="option.value === 'folder'"
              :width="18"
              :height="18"
            />
            <Search
              v-else-if="option.value === 'wallhaven'"
              :width="18"
              :height="18"
            />
            <Picture v-else :width="18" :height="18" />
            <span>
              <strong>{{ t(option.labelKey) }}</strong>
              <small>{{ t(option.captionKey) }}</small>
            </span>
          </button>
        </div>

        <div
          class="source-detail"
          :class="{ 'source-detail--online': config.mode === 'wallhaven' }"
        >
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
                <Refresh :width="14" :height="14" />
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
              <span class="path-icon">
                <FolderOpen :width="18" :height="18" />
              </span>
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
                <span>
                  {{
                    config.onlineProvider === 'wallspic'
                      ? 'Wallspic'
                      : 'Wallhaven'
                  }}
                </span>
                <strong>{{ t('wallpaperSwitcher.onlineSourceHint') }}</strong>
              </div>
              <span class="online-source-tag">
                {{ onlineSourceLabel(config.wallhavenSource) }}
              </span>
            </div>
            <div
              class="online-provider-picker"
              role="group"
              :aria-label="t('wallpaperSwitcher.provider')"
            >
              <button
                v-for="provider in onlineProviders"
                :key="provider.value"
                type="button"
                :class="{ active: config.onlineProvider === provider.value }"
                :aria-pressed="config.onlineProvider === provider.value"
                @click="setOnlineProvider(provider.value)"
              >
                {{ provider.label }}
              </button>
            </div>
            <div
              class="online-source-picker"
              role="group"
              :aria-label="t('wallpaperSwitcher.sortBy')"
            >
              <button
                v-for="source in availableOnlineSources"
                :key="source"
                type="button"
                :class="{ active: config.wallhavenSource === source }"
                :aria-pressed="config.wallhavenSource === source"
                @click="setOnlineSource(source)"
              >
                {{ onlineSourceLabel(source) }}
              </button>
            </div>
            <button
              type="button"
              class="browse-online-btn"
              @click="emit('openWallhavenGrid')"
            >
              <Picture :width="18" :height="18" />
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
              <span class="path-icon">
                <Picture :width="18" :height="18" />
              </span>
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
        <span class="automation-icon"><Time :width="20" :height="20" /></span>
        <div>
          <h2>{{ t('wallpaperSwitcher.automationTitle') }}</h2>
          <p>{{ t('wallpaperSwitcher.automationHint') }}</p>
        </div>
      </div>

      <div class="automation-controls">
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
      </div>
    </section>

    <footer class="utility-bar">
      <div class="tray-callout">
        <Lightning :width="17" :height="17" />
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
          <Delete :width="16" :height="16" />
        </button>
        <button
          type="button"
          class="utility-btn"
          :disabled="openingCache"
          :title="t('wallpaperSwitcher.openCache')"
          @click="emit('openCacheDir')"
        >
          <FolderOpen :width="16" :height="16" />
        </button>
        <button
          type="button"
          class="save-btn"
          :disabled="saving"
          @click="emit('persistConfig')"
        >
          <Save :width="17" :height="17" />
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
