import { computed, nextTick, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import {
  downloadWallhavenWallpaper,
  fetchWallhaven,
  getWallpaperConfig,
  saveWallpaperConfig,
  setWallhavenWallpaper,
  wallpaperSources,
  type WallpaperProvider,
  type WallhavenSource,
  type WallhavenWallpaper,
  type WallpaperConfig
} from '../api';

export interface UseWallhavenOptions {
  config: Ref<WallpaperConfig>;
  refreshStatus: () => Promise<void>;
}

export type WallhavenWorkingAction = 'setting' | 'downloading';

export interface DownloadProgress {
  downloaded: number;
  total: number | null;
  phase: 'preparing' | 'downloading' | 'complete';
}

export function useWallhaven({ config, refreshStatus }: UseWallhavenOptions) {
  const { t } = useI18n();
  const activeView = ref<'switcher' | 'wallhaven'>('switcher');
  const wallpapers = ref<WallhavenWallpaper[]>([]);
  const wallhavenPage = ref(1);
  const wallhavenLastPage = ref(1);
  const wallhavenLoading = ref(false);
  const wallhavenError = ref('');
  const wallhavenKeyword = ref('');
  const wallhavenCategory = ref('general');
  const wallhavenSource = ref<WallhavenSource>('hot');
  const onlineProvider = ref<WallpaperProvider>(
    config.value.onlineProvider || 'wallhaven'
  );
  const feedRevision = ref(0);
  const hasMore = computed(() => wallhavenPage.value < wallhavenLastPage.value);
  const previewWallpaper = ref<WallhavenWallpaper | null>(null);
  const previewLoading = ref(false);
  const previewLoadFailed = ref(false);
  const workingActions = ref(new Map<string, WallhavenWorkingAction>());
  const downloadProgress = ref(new Map<string, DownloadProgress>());
  const loadedThumbIds = ref(new Set<string>());

  const thumbElements = new Map<string, HTMLImageElement>();
  let thumbObserver: IntersectionObserver | null = null;
  let unlistenChanged: UnlistenFn | null = null;
  let unlistenError: UnlistenFn | null = null;
  let unlistenProgress: UnlistenFn | null = null;
  let wallhavenFetchSeq = 0;
  let preferenceWrite: Promise<void> = Promise.resolve();

  const wallhavenSourceLabel = computed(() => {
    const provider =
      onlineProvider.value === 'wallspic' ? 'Wallspic' : 'Wallhaven';
    return `${provider} · ${t(`wallpaperSwitcher.${wallhavenSource.value}`)}`;
  });
  const wallhavenRequestQuery = computed(() => {
    const keyword = wallhavenKeyword.value.trim();
    return keyword || null;
  });

  const wallhavenRequestCategory = computed(() => wallhavenCategory.value);

  const formatWallhavenError = (error: unknown): string => {
    const message = String(error).replace(/^Error:\s*/, '');
    if (
      /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(
        message
      )
    ) {
      return t('wallpaperSwitcher.messages.onlineNetworkError');
    }
    return message.length > 120 ? `${message.slice(0, 120)}...` : message;
  };

  const setWorking = (
    wallpaper: WallhavenWallpaper,
    action: WallhavenWorkingAction | null
  ) => {
    const { id } = wallpaper;
    const next = new Map(workingActions.value);
    if (action) next.set(id, action);
    else next.delete(id);
    workingActions.value = next;

    const nextProgress = new Map(downloadProgress.value);
    if (action) {
      // Show feedback synchronously. Resolving the Wallhaven detail URL can
      // take a few seconds before the first response byte arrives.
      nextProgress.set(id, {
        downloaded: 0,
        total: wallpaper.fileSize ?? null,
        phase: 'preparing'
      });
    } else {
      nextProgress.delete(id);
    }
    downloadProgress.value = nextProgress;
  };

  const markThumbLoaded = (id: string) => {
    const next = new Set(loadedThumbIds.value);
    next.add(id);
    loadedThumbIds.value = next;
  };

  const setThumbRef = (wallpaper: WallhavenWallpaper, element: unknown) => {
    if (!(element instanceof HTMLImageElement)) {
      const previous = thumbElements.get(wallpaper.id);
      if (previous) thumbObserver?.unobserve(previous);
      thumbElements.delete(wallpaper.id);
      return;
    }
    thumbElements.set(wallpaper.id, element);
    if (!thumbObserver) {
      element.src = wallpaper.thumbs.large;
      return;
    }
    element.dataset.src = wallpaper.thumbs.large;
    thumbObserver.observe(element);
  };

  const resetThumbLoading = () => {
    loadedThumbIds.value = new Set();
    thumbElements.clear();
  };

  const persistWallhavenPrefs = async () => {
    config.value.wallhavenQuery = wallhavenKeyword.value.trim() || null;
    config.value.wallhavenCategory = wallhavenCategory.value;
    config.value.wallhavenSource = wallhavenSource.value;
    config.value.onlineProvider = onlineProvider.value;
    config.value.mode = 'wallhaven';
    const snapshot = { ...config.value };
    preferenceWrite = preferenceWrite
      .catch(() => {})
      .then(() => saveWallpaperConfig(snapshot));
    await preferenceWrite;
  };

  const fetchWallhavenData = async (targetPage = 1, append = false) => {
    const fetchSeq = ++wallhavenFetchSeq;
    const params = {
      provider: onlineProvider.value,
      source: wallhavenSource.value,
      page: targetPage,
      query: wallhavenRequestQuery.value,
      category: wallhavenRequestCategory.value
    };
    wallhavenLoading.value = true;
    wallhavenError.value = '';
    if (!append) {
      wallpapers.value = [];
      wallhavenPage.value = 0;
      wallhavenLastPage.value = 1;
      feedRevision.value++;
      resetThumbLoading();
    }
    try {
      if (!append) await persistWallhavenPrefs();
      if (fetchSeq !== wallhavenFetchSeq) return;
      const result = await fetchWallhaven(params);
      if (fetchSeq !== wallhavenFetchSeq) return;
      if (append && result.page <= wallhavenPage.value)
        throw new Error(t('wallpaperSwitcher.repeatedPage'));
      const merged = new Map(
        (append ? wallpapers.value : []).map((item) => [item.id, item])
      );
      for (const wallpaper of result.data) merged.set(wallpaper.id, wallpaper);
      wallpapers.value = [...merged.values()];
      wallhavenPage.value = result.page;
      wallhavenLastPage.value = Math.max(1, result.lastPage);
      await nextTick();
      for (const image of thumbElements.values()) {
        if (thumbObserver) thumbObserver.observe(image);
      }
    } catch (error) {
      if (fetchSeq !== wallhavenFetchSeq) return;
      wallhavenError.value = formatWallhavenError(error);
    } finally {
      if (fetchSeq === wallhavenFetchSeq) wallhavenLoading.value = false;
    }
  };

  const refreshWallhaven = () => fetchWallhavenData(1);
  const setWallhavenSource = async (next: WallhavenSource) => {
    if (!wallpaperSources(onlineProvider.value).includes(next)) return;
    wallhavenSource.value = next;
    await fetchWallhavenData(1);
  };
  const setWallhavenCategory = async (next: string) => {
    wallhavenCategory.value = next;
    await fetchWallhavenData(1);
  };
  const setOnlineProvider = async (provider: WallpaperProvider) => {
    onlineProvider.value = provider;
    if (!wallpaperSources(provider).includes(wallhavenSource.value))
      wallhavenSource.value = 'hot';
    closePreview();
    await fetchWallhavenData(1);
  };

  const openWallhavenGrid = async () => {
    wallhavenKeyword.value = config.value.wallhavenQuery || '';
    onlineProvider.value = config.value.onlineProvider || 'wallhaven';
    wallhavenCategory.value = config.value.wallhavenCategory || 'general';
    wallhavenSource.value = config.value.wallhavenSource;
    if (!wallpaperSources(onlineProvider.value).includes(wallhavenSource.value))
      wallhavenSource.value = 'hot';
    wallhavenPage.value = 1;
    wallhavenError.value = '';
    wallpapers.value = [];
    activeView.value = 'wallhaven';
    await fetchWallhavenData(1);
  };

  const openPreview = (wallpaper: WallhavenWallpaper) => {
    previewWallpaper.value = wallpaper;
    previewLoading.value = true;
    previewLoadFailed.value = false;
  };

  const closePreview = () => {
    previewWallpaper.value = null;
    previewLoading.value = false;
    previewLoadFailed.value = false;
  };

  const backToSwitcher = async () => {
    activeView.value = 'switcher';
    closePreview();
    await refreshStatus();
  };

  const markPreviewLoaded = () => {
    previewLoading.value = false;
  };

  const markPreviewFailed = () => {
    previewLoading.value = false;
    previewLoadFailed.value = true;
  };

  const setWallpaperFromWallhaven = async (wallpaper: WallhavenWallpaper) => {
    if (workingActions.value.has(wallpaper.id)) return;
    setWorking(wallpaper, 'setting');
    try {
      modal.msg(t('wallpaperSwitcher.messages.settingWallpaper'), 'info');
      await setWallhavenWallpaper(wallpaper);
      await refreshStatus();
      modal.msg(t('wallpaperSwitcher.messages.wallpaperSet'), 'success');
    } catch (error) {
      modal.msg(formatWallhavenError(error), 'error');
    } finally {
      setWorking(wallpaper, null);
    }
  };

  const downloadWallpaperFromWallhaven = async (
    wallpaper: WallhavenWallpaper
  ) => {
    if (workingActions.value.has(wallpaper.id)) return;
    setWorking(wallpaper, 'downloading');
    try {
      modal.msg(t('wallpaperSwitcher.messages.downloadingWallpaper'), 'info');
      await downloadWallhavenWallpaper(wallpaper);
      await refreshStatus();
      modal.msg(t('wallpaperSwitcher.messages.wallpaperDownloaded'), 'success');
    } catch (error) {
      modal.msg(formatWallhavenError(error), 'error');
    } finally {
      setWorking(wallpaper, null);
    }
  };

  const loadMoreWallpapers = async () => {
    if (!wallhavenLoading.value && hasMore.value)
      await fetchWallhavenData(
        wallhavenPage.value + 1,
        wallhavenPage.value > 0
      );
  };

  onMounted(() => {
    thumbObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const image = entry.target as HTMLImageElement;
          const src = image.dataset.src;
          if (src && image.src !== src) image.src = src;
          thumbObserver?.unobserve(image);
        }
      },
      { root: null, rootMargin: '120px' }
    );
    unlistenChanged = null;
    unlistenError = null;
  });

  onUnmounted(() => {
    wallhavenFetchSeq++;
    thumbObserver?.disconnect();
    thumbObserver = null;
    unlistenChanged?.();
    unlistenError?.();
    unlistenProgress?.();
  });

  const setupListeners = async () => {
    unlistenChanged = await listen('wallpaper-switcher-changed', async () => {
      const next = await getWallpaperConfig();
      const changed =
        next.onlineProvider !== config.value.onlineProvider ||
        next.wallhavenSource !== config.value.wallhavenSource;
      config.value = next;
      if (changed && activeView.value === 'wallhaven')
        await openWallhavenGrid();
      await refreshStatus();
    });
    unlistenError = await listen<{ message?: string }>(
      'wallpaper-switcher-error',
      (event) => {
        modal.msg(
          event.payload?.message ||
            t('wallpaperSwitcher.messages.scheduleSwitchFailed'),
          'error'
        );
      }
    );
    unlistenProgress = await listen<{
      id: string;
      downloaded: number;
      total: number | null;
      phase?: DownloadProgress['phase'];
    }>('wallpaper-download-progress', (event) => {
      const { id, downloaded, total, phase } = event.payload;
      if (!workingActions.value.has(id)) return;
      const next = new Map(downloadProgress.value);
      next.set(id, {
        downloaded,
        total: total ?? null,
        phase: phase ?? 'downloading'
      });
      downloadProgress.value = next;
    });
  };

  return {
    activeView,
    wallpapers,
    wallhavenPage,
    wallhavenLastPage,
    wallhavenLoading,
    wallhavenError,
    wallhavenKeyword,
    wallhavenCategory,
    wallhavenSource,
    onlineProvider,
    setOnlineProvider,
    feedRevision,
    hasMore,
    previewWallpaper,
    previewLoading,
    previewLoadFailed,
    workingActions,
    downloadProgress,
    loadedThumbIds,
    wallhavenSourceLabel,
    openWallhavenGrid,
    backToSwitcher,
    openPreview,
    closePreview,
    markPreviewLoaded,
    markPreviewFailed,
    markThumbLoaded,
    setThumbRef,
    refreshWallhaven,
    setWallhavenSource,
    setWallhavenCategory,
    setWallpaperFromWallhaven,
    downloadWallpaperFromWallhaven,
    loadMoreWallpapers,
    setupListeners
  };
}
