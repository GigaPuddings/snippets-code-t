<script setup lang="ts">
import CloseSmall from '~icons/lucide/x';
import Computer from '~icons/lucide/monitor';
import Download from '~icons/lucide/download';
import Loading from '~icons/lucide/loader-circle';
import PreviewOpen from '~icons/lucide/eye';
import Refresh from '~icons/lucide/refresh-cw';
import Search from '~icons/lucide/search';
import Info from '~icons/lucide/info';
import { useI18n } from 'vue-i18n';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import type {
  WallpaperProvider,
  WallhavenSource,
  WallhavenWallpaper
} from '../../../api';
import type { DownloadProgress } from '../../../composables/useWallhaven';
import DownloadProgressIndicator from './DownloadProgressIndicator.vue';

type WallhavenWorkingAction = 'setting' | 'downloading';

const props = defineProps<{
  keyword: string;
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
  (event: 'loadMore'): void;
  (event: 'setProvider', value: WallpaperProvider): void;
  (event: 'setSource', value: WallhavenSource): void;
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
  { value: 'general', labelKey: 'wallpaperSwitcher.categories.general' },
  { value: 'anime', labelKey: 'wallpaperSwitcher.categories.anime' },
  { value: 'people', labelKey: 'wallpaperSwitcher.categories.people' },
  { value: 'nature', labelKey: 'wallpaperSwitcher.categories.nature' }
];

const updateKeyword = (event: Event) =>
  emit('update:keyword', (event.target as HTMLInputElement).value);
const workingActionFor = (id: string): WallhavenWorkingAction | undefined =>
  props.workingActions.get(id);

const progressFor = (id: string): DownloadProgress | undefined =>
  props.downloadProgress.get(id);
</script>

<template>
  <div class="wallhaven-view">
    <section class="filters filters--preview-style">
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
      <div class="search-box wallhaven-search">
        <input
          :value="keyword"
          type="text"
          :placeholder="t('wallpaperSwitcher.searchPlaceholder')"
          @input="updateKeyword"
          @keydown.enter="emit('refresh')"
        />
        <Search :width="16" :height="16" class="search-icon" />
        <button
          v-if="keyword"
          type="button"
          class="clear-btn"
          :title="t('wallpaperSwitcher.clear')"
          @click="emit('update:keyword', '')"
        >
          <CloseSmall :width="18" :height="18" />
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
        <span
          :title="
            provider === 'wallhaven'
              ? t('wallpaperSwitcher.autoMatchHint')
              : undefined
          "
        >
          {{
            t(
              provider === 'wallspic'
                ? 'wallpaperSwitcher.screenResolution'
                : 'wallpaperSwitcher.autoMatch',
              { resolution: screenLabel }
            )
          }}
        </span>
        <button
          type="button"
          class="refresh-btn wallhaven-refresh"
          :title="t('wallpaperSwitcher.refresh')"
          @click="emit('refresh')"
        >
          <Refresh :width="14" :height="14" :class="{ spinning: loading }" />
        </button>
      </div>
      <p
        v-if="
          provider === 'wallhaven' && (source === 'hot' || source === 'toplist')
        "
        class="col-span-full m-0 flex items-center gap-1.5 text-[11px] leading-relaxed text-[var(--wallpaper-muted)]"
      >
        <Info class="shrink-0" width="13" height="13" />
        <span>
          {{
            t(
              source === 'hot'
                ? 'wallpaperSwitcher.hotHint'
                : 'wallpaperSwitcher.toplistHint'
            )
          }}
        </span>
        <button
          v-if="source === 'hot'"
          type="button"
          class="shrink-0 border-0 bg-transparent p-0 text-[var(--wallpaper-primary)] underline underline-offset-2 cursor-pointer"
          @click="emit('setSource', 'toplist')"
        >
          {{ t('wallpaperSwitcher.browseMonthlyToplist') }}
        </button>
      </p>
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
        {{
          t(
            category === 'people'
              ? provider === 'wallspic'
                ? 'wallpaperSwitcher.noVerifiedWallspicPeople'
                : 'wallpaperSwitcher.noVerifiedPeople'
              : 'wallpaperSwitcher.noWallpapers'
          )
        }}
        <button
          v-if="provider === 'wallspic' && category === 'people'"
          type="button"
          class="rounded-md border border-[var(--wallpaper-border)] bg-[var(--wallpaper-panel)] px-4 py-2 text-[var(--wallpaper-primary)] hover:bg-[var(--wallpaper-hover)] cursor-pointer"
          @click="emit('setProvider', 'wallhaven')"
        >
          {{ t('wallpaperSwitcher.searchPeopleOnWallhaven') }}
        </button>
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
