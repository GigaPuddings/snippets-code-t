<script setup lang="ts">
import {
  CloseSmall,
  Computer,
  Download,
  Loading,
  PreviewOpen,
  Refresh,
  Search
} from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { WallhavenWallpaper } from '../../../api';
import type { DownloadProgress } from '../../../composables/useWallhaven';

type WallhavenWorkingAction = 'setting' | 'downloading';

const props = defineProps<{
  keyword: string;
  category: string;
  loading: boolean;
  error: string;
  wallpapers: WallhavenWallpaper[];
  loadedThumbIds: Set<string>;
  workingActions: Map<string, WallhavenWorkingAction>;
  downloadProgress: Map<string, DownloadProgress>;
  page: number;
  lastPage: number;
  sourceLabel: string;
  screenLabel: string;
  setThumbRef: (wallpaper: WallhavenWallpaper, element: Element | null) => void;
}>();

const emit = defineEmits<{
  (event: 'update:keyword', value: string): void;
  (event: 'refresh'): void;
  (event: 'setCategory', value: string): void;
  (event: 'openPreview', value: WallhavenWallpaper): void;
  (event: 'markThumbLoaded', value: string): void;
  (event: 'setWallpaper', value: WallhavenWallpaper): void;
  (event: 'downloadWallpaper', value: WallhavenWallpaper): void;
  (event: 'prevPage'): void;
  (event: 'nextPage'): void;
}>();

const { t } = useI18n();

const categories = [
  { value: 'general', labelKey: 'wallpaperSwitcher.categories.general' },
  { value: 'anime', labelKey: 'wallpaperSwitcher.categories.anime' },
  { value: 'people', labelKey: 'wallpaperSwitcher.categories.people' },
  { value: 'nature', labelKey: 'wallpaperSwitcher.categories.nature' }
];

const updateKeyword = (event: Event) =>
  emit('update:keyword', (event.target as HTMLInputElement).value);
const workingActionFor = (id: string): WallhavenWorkingAction | undefined =>
  props.workingActions.get(id);

const progressFor = (id: string): number | null => {
  const p = props.downloadProgress.get(id);
  if (!p || !p.total || p.total <= 0) return null;
  return Math.min(100, Math.round((p.downloaded / p.total) * 100));
};
</script>

<template>
  <div class="wallhaven-view">
    <section class="filters filters--preview-style">
      <div class="search-box wallhaven-search">
        <input
          :value="keyword"
          type="text"
          :placeholder="t('wallpaperSwitcher.searchPlaceholder')"
          @input="updateKeyword"
          @keydown.enter="emit('refresh')"
        />
        <Search :size="16" class="search-icon" />
        <button
          v-if="keyword"
          type="button"
          class="clear-btn"
          :title="t('wallpaperSwitcher.clear')"
          @click="emit('update:keyword', '')"
        >
          <CloseSmall :size="18" />
        </button>
      </div>

      <div
        class="wallhaven-tabs"
        role="tablist"
        :aria-label="t('wallpaperSwitcher.categoryToggle')"
      >
        <button
          v-for="item in categories"
          :key="item.value"
          type="button"
          :class="{ active: category === item.value }"
          :disabled="loading"
          @click="emit('setCategory', item.value)"
        >
          {{ t(item.labelKey) }}
        </button>
      </div>

      <div class="wallhaven-meta">
        <span>
          {{ t('wallpaperSwitcher.autoMatch', { resolution: screenLabel }) }}
        </span>
        <button
          type="button"
          class="refresh-btn wallhaven-refresh"
          :title="t('wallpaperSwitcher.refresh')"
          @click="emit('refresh')"
        >
          <Refresh :size="14" :class="{ spinning: loading }" />
        </button>
      </div>
    </section>

    <section class="grid-wrap">
      <div v-if="loading && wallpapers.length === 0" class="empty-state">
        {{ t('wallpaperSwitcher.loadingWallhaven') }}
      </div>
      <div v-else-if="error" class="empty-state error-state">
        <span>{{ error }}</span>
        <button type="button" @click="emit('refresh')">
          {{ t('wallpaperSwitcher.retry') }}
        </button>
      </div>
      <div v-else-if="wallpapers.length === 0" class="empty-state">
        {{ t('wallpaperSwitcher.noWallpapers') }}
      </div>
      <div v-else class="wallpaper-grid">
        <article
          v-for="wallpaper in wallpapers"
          :key="wallpaper.id"
          class="wallpaper-card"
        >
          <button
            type="button"
            class="thumb"
            @click="emit('openPreview', wallpaper)"
          >
            <div
              v-if="!loadedThumbIds.has(wallpaper.id)"
              class="thumb-skeleton"
            ></div>
            <img
              :ref="
                (element) => setThumbRef(wallpaper, element as Element | null)
              "
              :alt="wallpaper.resolution"
              loading="lazy"
              @load="emit('markThumbLoaded', wallpaper.id)"
            />
            <span>{{ wallpaper.resolution }}</span>
            <div
              v-if="progressFor(wallpaper.id) !== null"
              class="download-ring"
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
          </button>
          <div class="card-actions" @click.stop>
            <button
              type="button"
              :title="t('wallpaperSwitcher.preview')"
              @click="emit('openPreview', wallpaper)"
            >
              <PreviewOpen :size="16" />
              {{ t('wallpaperSwitcher.preview') }}
            </button>
            <button
              type="button"
              :title="t('wallpaperSwitcher.setWallpaper')"
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
              <Computer v-else :size="16" />
              <span>
                {{
                  workingActionFor(wallpaper.id) === 'setting'
                    ? t('wallpaperSwitcher.setting')
                    : t('wallpaperSwitcher.set')
                }}
              </span>
            </button>
            <button
              type="button"
              :title="t('wallpaperSwitcher.download')"
              :class="{
                'is-working': workingActionFor(wallpaper.id) === 'downloading'
              }"
              :disabled="Boolean(workingActionFor(wallpaper.id))"
              :aria-busy="workingActionFor(wallpaper.id) === 'downloading'"
              @click="emit('downloadWallpaper', wallpaper)"
            >
              <Loading
                v-if="workingActionFor(wallpaper.id) === 'downloading'"
                :size="16"
                spin
              />
              <Download v-else :size="16" />
              <span>
                {{
                  workingActionFor(wallpaper.id) === 'downloading'
                    ? t('wallpaperSwitcher.downloading')
                    : t('wallpaperSwitcher.download')
                }}
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>

    <footer class="pager">
      <span>{{ t('wallpaperSwitcher.page', { page }) }}</span>
      <span class="source-note">
        {{ t('wallpaperSwitcher.sourceNote', { source: sourceLabel }) }}
      </span>
      <div class="pager-actions">
        <button
          type="button"
          :disabled="page <= 1 || loading"
          @click="emit('prevPage')"
        >
          {{ t('wallpaperSwitcher.prevPage') }}
        </button>
        <button
          type="button"
          :disabled="page >= lastPage || loading"
          @click="emit('nextPage')"
        >
          {{ t('wallpaperSwitcher.nextPage') }}
        </button>
      </div>
    </footer>
  </div>
</template>
