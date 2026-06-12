import { computed, nextTick, onMounted, onUnmounted, ref, type Ref } from 'vue';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import {
  downloadWallhavenWallpaper,
  fetchWallhaven,
  saveWallpaperConfig,
  setWallhavenWallpaper,
  type WallhavenSource,
  type WallhavenWallpaper,
  type WallpaperConfig,
} from '../api';

export interface UseWallhavenOptions {
  config: Ref<WallpaperConfig>;
  refreshStatus: () => Promise<void>;
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
  const previewWallpaper = ref<WallhavenWallpaper | null>(null);
  const previewLoading = ref(false);
  const previewLoadFailed = ref(false);
  const workingIds = ref(new Set<string>());
  const loadedThumbIds = ref(new Set<string>());

  const thumbElements = new Map<string, HTMLImageElement>();
  let thumbObserver: IntersectionObserver | null = null;
  let unlistenChanged: UnlistenFn | null = null;
  let unlistenError: UnlistenFn | null = null;
  let wallhavenFetchSeq = 0;

  const wallhavenSourceLabel = computed(() => (wallhavenSource.value === 'hot' ? 'Hot' : 'Toplist'));
  const visibleWallpapers = computed(() => wallpapers.value.slice(0, 8));
  const wallhavenRequestQuery = computed(() => {
    const keyword = wallhavenKeyword.value.trim();
    if (wallhavenCategory.value === 'nature') return keyword ? `${keyword} nature` : 'nature';
    return keyword || null;
  });

  const wallhavenRequestCategory = computed(() => wallhavenCategory.value);

  const formatWallhavenError = (error: unknown): string => {
    const message = String(error).replace(/^Error:\s*/, '');
    if (/unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(message)) {
      return t('wallpaperSwitcher.messages.wallhavenNetworkError');
    }
    return message.length > 120 ? `${message.slice(0, 120)}...` : message;
  };

  const setWorking = (id: string, working: boolean) => {
    const next = new Set(workingIds.value);
    if (working) next.add(id); else next.delete(id);
    workingIds.value = next;
  };

  const markThumbLoaded = (id: string) => {
    const next = new Set(loadedThumbIds.value);
    next.add(id);
    loadedThumbIds.value = next;
  };

  const setThumbRef = (wallpaper: WallhavenWallpaper, element: unknown) => {
    if (!(element instanceof HTMLImageElement)) {
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
    config.value.mode = 'wallhaven';
    await saveWallpaperConfig(config.value);
  };

  const fetchWallhavenData = async (targetPage = wallhavenPage.value) => {
    const fetchSeq = ++wallhavenFetchSeq;
    wallhavenLoading.value = true;
    wallhavenError.value = '';
    wallpapers.value = [];
    resetThumbLoading();
    try {
      await persistWallhavenPrefs();
      const result = await fetchWallhaven({
        source: wallhavenSource.value,
        page: targetPage,
        query: wallhavenRequestQuery.value,
        category: wallhavenRequestCategory.value
      });
      if (fetchSeq !== wallhavenFetchSeq) return;
      wallpapers.value = result.data;
      wallhavenPage.value = result.page;
      wallhavenLastPage.value = Math.max(1, result.lastPage);
      await nextTick();
      for (const image of thumbElements.values()) {
        if (thumbObserver) thumbObserver.observe(image);
      }
    } catch (error) {
      if (fetchSeq !== wallhavenFetchSeq) return;
      wallpapers.value = [];
      wallhavenError.value = formatWallhavenError(error);
      modal.msg(wallhavenError.value, 'error');
    } finally {
      if (fetchSeq === wallhavenFetchSeq) wallhavenLoading.value = false;
    }
  };

  const refreshWallhaven = () => fetchWallhavenData(1);
  const setWallhavenSource = async (next: WallhavenSource) => { wallhavenSource.value = next; await fetchWallhavenData(1); };
  const setWallhavenCategory = async (next: string) => { wallhavenCategory.value = next; await fetchWallhavenData(1); };

  const openWallhavenGrid = async () => {
    wallhavenKeyword.value = '';
    wallhavenCategory.value = config.value.wallhavenCategory || 'general';
    wallhavenSource.value = config.value.wallhavenSource;
    wallhavenPage.value = 1;
    wallhavenError.value = '';
    wallpapers.value = [];
    activeView.value = 'wallhaven';
    await fetchWallhavenData(1);
  };

  const backToSwitcher = async () => {
    activeView.value = 'switcher';
    closePreview();
    await refreshStatus();
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

  const markPreviewLoaded = () => {
    previewLoading.value = false;
  };

  const markPreviewFailed = () => {
    previewLoading.value = false;
    previewLoadFailed.value = true;
  };

  const setWallpaperFromWallhaven = async (wallpaper: WallhavenWallpaper) => {
    setWorking(wallpaper.id, true);
    try {
      modal.msg(t('wallpaperSwitcher.messages.settingWallpaper'), 'info');
      await setWallhavenWallpaper(wallpaper);
      await refreshStatus();
      modal.msg(t('wallpaperSwitcher.messages.wallpaperSet'), 'success');
    } catch (error) {
      modal.msg(String(error), 'error');
    } finally {
      setWorking(wallpaper.id, false);
    }
  };

  const downloadWallpaperFromWallhaven = async (wallpaper: WallhavenWallpaper) => {
    setWorking(wallpaper.id, true);
    try {
      modal.msg(t('wallpaperSwitcher.messages.downloadingWallpaper'), 'info');
      await downloadWallhavenWallpaper(wallpaper);
      await refreshStatus();
      modal.msg(t('wallpaperSwitcher.messages.wallpaperDownloaded'), 'success');
    } catch (error) {
      modal.msg(String(error), 'error');
    } finally {
      setWorking(wallpaper.id, false);
    }
  };

  const prevWallhavenPage = async () => { if (wallhavenPage.value > 1) await fetchWallhavenData(wallhavenPage.value - 1); };
  const nextWallhavenPage = async () => { if (wallhavenPage.value < wallhavenLastPage.value) await fetchWallhavenData(wallhavenPage.value + 1); };

  onMounted(() => {
    thumbObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const image = entry.target as HTMLImageElement;
        const src = image.dataset.src;
        if (src && image.src !== src) image.src = src;
        thumbObserver?.unobserve(image);
      }
    }, { root: null, rootMargin: '120px' });
    unlistenChanged = null;
    unlistenError = null;
  });

  onUnmounted(() => {
    thumbObserver?.disconnect();
    thumbObserver = null;
    unlistenChanged?.();
    unlistenError?.();
  });

  const setupListeners = async () => {
    unlistenChanged = await listen('wallpaper-switcher-changed', refreshStatus);
    unlistenError = await listen<{ message?: string }>('wallpaper-switcher-error', (event) => {
      modal.msg(event.payload?.message || t('wallpaperSwitcher.messages.scheduleSwitchFailed'), 'error');
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
    previewWallpaper,
    previewLoading,
    previewLoadFailed,
    workingIds,
    loadedThumbIds,
    wallhavenSourceLabel,
    visibleWallpapers,
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
    prevWallhavenPage,
    nextWallhavenPage,
    setupListeners,
  };
}
