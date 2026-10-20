<script setup lang="ts">
import Computer from '~icons/lucide/monitor';
import Download from '~icons/lucide/download';
import Loading from '~icons/lucide/loader-circle';
import PreviewOpen from '~icons/lucide/eye';
import Refresh from '~icons/lucide/refresh-cw';
import { useI18n } from 'vue-i18n';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import {
  wallpaperSources,
  wallhavenTopRanges,
  wallspicCategories,
  type WallhavenFilters,
  type WallhavenTopRange,
  type WallpaperProvider,
  type WallhavenSource,
  type WallhavenWallpaper
} from '../../../api';
import type { DownloadProgress } from '../../../composables/useWallhaven';
import DownloadProgressIndicator from './DownloadProgressIndicator.vue';

type WallhavenWorkingAction = 'setting' | 'downloading';

const props = defineProps<{
  provider: WallpaperProvider;
  source: WallhavenSource;
  revision: number;
  hasMore: boolean;
  category: string;
  loading: boolean;
  error: string;
  wallpapers: WallhavenWallpaper[];
  loadedThumbIds: Set<string>;
  workingActions: Map<string, WallhavenWorkingAction>;
  downloadProgress: Map<string, DownloadProgress>;
  sourceLabel: string;
  wallhavenFilters: WallhavenFilters;
  setThumbRef: (wallpaper: WallhavenWallpaper, element: Element | null) => void;
}>();

const emit = defineEmits<{
  (event: 'refresh'): void;
  (event: 'setCategory', value: string): void;
  (event: 'openPreview', value: WallhavenWallpaper): void;
  (event: 'markThumbLoaded', value: string): void;
  (event: 'setWallpaper', value: WallhavenWallpaper): void;
  (event: 'downloadWallpaper', value: WallhavenWallpaper): void;
  (event: 'loadMore'): void;
  (event: 'setProvider', value: WallpaperProvider): void;
  (event: 'setSource', value: WallhavenSource): void;
  (event: 'setFilters', value: Partial<WallhavenFilters>): void;
}>();

const { t } = useI18n();
const scrollerRef = ref<{ $el: HTMLElement } | null>(null);
const viewportWidth = ref(900);
const columns = computed(() =>
  Math.min(3, Math.max(1, Math.floor(viewportWidth.value / 260)))
);
const rowHeight = computed(
  () =>
    Math.ceil(
      ((viewportWidth.value - (columns.value - 1) * 12) / columns.value - 2) /
        1.6
    ) + 54
);
const rows = computed(() => {
  const result = [];
  for (let index = 0; index < props.wallpapers.length; index += columns.value) {
    result.push({
      id: props.wallpapers[index].id,
      items: props.wallpapers.slice(index, index + columns.value)
    });
  }
  return result;
});
let resizeObserver: ResizeObserver | null = null;
watch(
  scrollerRef,
  (scroller) => {
    resizeObserver?.disconnect();
    const element = scroller?.$el;
    if (!(element instanceof HTMLElement)) return;
    const measure = () => {
      viewportWidth.value = Math.max(1, element.clientWidth);
    };
    resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(element);
    measure();
  },
  { flush: 'post' }
);
onUnmounted(() => resizeObserver?.disconnect());
const onScroll = (event: Event) => {
  const element = event.target as HTMLElement;
  if (
    element.scrollTop + element.clientHeight >= element.scrollHeight - 350 &&
    props.hasMore &&
    !props.loading &&
    !props.error
  )
    emit('loadMore');
};

const categories = [
  { index: 0, labelKey: 'wallpaperSwitcher.categories.general' },
  { index: 1, labelKey: 'wallpaperSwitcher.categories.anime' },
  { index: 2, labelKey: 'wallpaperSwitcher.categories.people' }
];
const toggleCategory = (index: number) => {
  const bits = props.wallhavenFilters.categories.split('');
  bits[index] = bits[index] === '1' ? '0' : '1';
  if (bits.includes('1')) emit('setFilters', { categories: bits.join('') });
};
const filterSelectClass =
  'h-8 min-w-0 rounded-md border border-[var(--wallpaper-border)] bg-[var(--wallpaper-panel)] px-2 text-[var(--wallpaper-text)]';

const workingActionFor = (id: string): WallhavenWorkingAction | undefined =>
  props.workingActions.get(id);

const progressFor = (id: string): DownloadProgress | undefined =>
  props.downloadProgress.get(id);
</script>

<template>
  <div class="wallhaven-view">
    <section class="filters flex flex-wrap items-center gap-2">
      <select
        class="h-8 rounded-md border border-[var(--wallpaper-border)] bg-[var(--wallpaper-panel)] px-2 text-[var(--wallpaper-text)]"
        :value="provider"
        :aria-label="t('wallpaperSwitcher.provider')"
        @change="
          emit(
            'setProvider',
            ($event.target as HTMLSelectElement).value as WallpaperProvider
          )
        "
      >
        <option value="wallspic">Wallspic</option>
        <option value="wallhaven">Wallhaven</option>
      </select>
      <select
        :class="filterSelectClass"
        :value="source"
        :aria-label="t('wallpaperSwitcher.sortBy')"
        @change="
          emit(
            'setSource',
            ($event.target as HTMLSelectElement).value as WallhavenSource
          )
        "
      >
        <option
          v-for="value in wallpaperSources(provider)"
          :key="value"
          :value="value"
        >
          {{ t(`wallpaperSwitcher.${value}`) }}
        </option>
      </select>
      <template v-if="provider === 'wallhaven'">
        <select
          v-if="source === 'toplist'"
          :class="filterSelectClass"
          :value="wallhavenFilters.topRange"
          :aria-label="t('wallpaperSwitcher.topRange')"
          @change="
            emit('setFilters', {
              topRange: ($event.target as HTMLSelectElement)
                .value as WallhavenTopRange
            })
          "
        >
          <option
            v-for="value in wallhavenTopRanges"
            :key="value"
            :value="value"
          >
            {{ t(`wallpaperSwitcher.topRanges.${value}`) }}
          </option>
        </select>
        <div
          class="wallhaven-tabs"
          role="group"
          :aria-label="t('wallpaperSwitcher.categoryToggle')"
        >
          <button
            v-for="item in categories"
            :key="item.index"
            type="button"
            :class="{
              active: wallhavenFilters.categories[item.index] === '1'
            }"
            :aria-pressed="wallhavenFilters.categories[item.index] === '1'"
            @click="toggleCategory(item.index)"
          >
            {{ t(item.labelKey) }}
          </button>
        </div>
        <label
          v-if="wallhavenFilters.categories === '001'"
          class="flex h-8 cursor-pointer items-center gap-1.5 whitespace-nowrap text-xs text-[var(--wallpaper-text)]"
        >
          <input
            type="checkbox"
            :checked="wallhavenFilters.asianWomen"
            @change="
              emit('setFilters', {
                asianWomen: ($event.target as HTMLInputElement).checked
              })
            "
          />
          {{ t('wallpaperSwitcher.asianWomen') }}
        </label>
      </template>
      <select
        v-else
        :class="filterSelectClass"
        :value="category"
        :aria-label="t('wallpaperSwitcher.categoryToggle')"
        @change="
          emit('setCategory', ($event.target as HTMLSelectElement).value)
        "
      >
        <option v-for="value in wallspicCategories" :key="value" :value="value">
          {{ t(`wallpaperSwitcher.wallspicCategories.${value}`) }}
        </option>
      </select>
      <button
        type="button"
        class="refresh-btn wallhaven-refresh ml-auto"
        :title="t('wallpaperSwitcher.refresh')"
        @click="emit('refresh')"
      >
        <Refresh :width="14" :height="14" :class="{ spinning: loading }" />
      </button>
    </section>

    <section class="grid-wrap">
      <div v-if="loading && wallpapers.length === 0" class="empty-state">
        {{ t('wallpaperSwitcher.loadingWallhaven') }}
      </div>
      <div
        v-else-if="error && wallpapers.length === 0"
        class="empty-state error-state"
      >
        <span>{{ error }}</span>
        <button type="button" @click="emit('loadMore')">
          {{ t('wallpaperSwitcher.retry') }}
        </button>
      </div>
      <div v-else-if="wallpapers.length === 0" class="empty-state">
        {{ t('wallpaperSwitcher.noWallpapers') }}
      </div>
      <RecycleScroller
        v-else
        :key="revision"
        ref="scrollerRef"
        class="h-full overflow-y-auto"
        :items="rows"
        :item-size="rowHeight"
        :buffer="350"
        key-field="id"
        @scroll.passive="onScroll"
      >
        <template #default="{ item }">
          <div
            class="wallpaper-grid"
            :style="{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              height: `${rowHeight}px`,
              paddingBottom: '12px'
            }"
          >
            <article
              v-for="wallpaper in item.items"
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
                    (element) =>
                      setThumbRef(wallpaper, element as Element | null)
                  "
                  :alt="wallpaper.resolution"
                  loading="lazy"
                  @load="emit('markThumbLoaded', wallpaper.id)"
                />
                <span>{{ wallpaper.resolution }}</span>
                <DownloadProgressIndicator
                  v-if="progressFor(wallpaper.id)"
                  :progress="progressFor(wallpaper.id)!"
                />
              </button>
              <div class="card-actions" @click.stop>
                <button
                  type="button"
                  :title="t('wallpaperSwitcher.preview')"
                  @click="emit('openPreview', wallpaper)"
                >
                  <PreviewOpen :width="16" :height="16" />
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
                    :width="16"
                    :height="16"
                    class="animate-spin"
                  />
                  <Computer v-else :width="16" :height="16" />
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
                    'is-working':
                      workingActionFor(wallpaper.id) === 'downloading'
                  }"
                  :disabled="Boolean(workingActionFor(wallpaper.id))"
                  :aria-busy="workingActionFor(wallpaper.id) === 'downloading'"
                  @click="emit('downloadWallpaper', wallpaper)"
                >
                  <Loading
                    v-if="workingActionFor(wallpaper.id) === 'downloading'"
                    :width="16"
                    :height="16"
                    class="animate-spin"
                  />
                  <Download v-else :width="16" :height="16" />
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
        </template>
      </RecycleScroller>
    </section>

    <footer class="pager">
      <span>
        {{ t('wallpaperSwitcher.loadedCount', { count: wallpapers.length }) }}
      </span>
      <span class="source-note">
        {{ t('wallpaperSwitcher.sourceNote', { source: sourceLabel }) }}
      </span>
      <div class="pager-actions">
        <span
          v-if="error"
          role="alert"
          class="max-w-[35vw] truncate"
          :title="error"
        >
          {{ error }}
        </span>
        <button
          v-if="hasMore || error"
          type="button"
          :disabled="loading"
          :aria-busy="loading || undefined"
          @click="emit('loadMore')"
        >
          <Loading v-if="loading" class="animate-spin" width="14" height="14" />
          {{
            loading
              ? t('common.loading')
              : error
                ? t('wallpaperSwitcher.retry')
                : t('wallpaperSwitcher.loadMore')
          }}
        </button>
        <span v-else>{{ t('wallpaperSwitcher.allLoaded') }}</span>
      </div>
    </footer>
  </div>
</template>
