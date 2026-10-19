import { ref, watch, type Ref } from 'vue';

export interface BacklinkStats {
  count: number;
}

interface UseEditorBacklinksOptions {
  currentTitle: Ref<string>;
  currentFragmentId: Ref<number | string | undefined>;
  getBacklinkStats?: (
    title: string,
    fragmentId?: number | string
  ) => Promise<BacklinkStats>;
  emitNavigate: (fragmentId: number | string, searchTitle: string) => void;
}

async function loadBacklinkStats(title: string, fragmentId?: number | string) {
  const { getBacklinkStats } = await import('@/utils/wikilink-updater');
  return getBacklinkStats(title, fragmentId);
}

export function useEditorBacklinks(options: UseEditorBacklinksOptions) {
  const showBacklinks = ref(false);
  const backlinkCount = ref(0);
  let latestRequest = 0;

  const toggleBacklinks = () => {
    showBacklinks.value = !showBacklinks.value;
  };

  const closeBacklinks = () => {
    showBacklinks.value = false;
  };

  const handleBacklinkNavigate = (
    fragmentId: number | string,
    searchTitle: string
  ) => {
    options.emitNavigate(fragmentId, searchTitle);
  };

  const updateBacklinkCount = async () => {
    const request = ++latestRequest;
    const title = options.currentTitle.value;
    const fragmentId = options.currentFragmentId.value;
    const isCurrent = () =>
      request === latestRequest &&
      title === options.currentTitle.value &&
      fragmentId === options.currentFragmentId.value;
    backlinkCount.value = 0;
    if (!title) return;

    try {
      const getStats = options.getBacklinkStats ?? loadBacklinkStats;
      const stats = await getStats(title, fragmentId);
      if (isCurrent()) backlinkCount.value = stats.count;
    } catch (error) {
      if (!isCurrent()) return;
      console.error('Failed to update backlink count:', error);
      backlinkCount.value = 0;
    }
  };

  watch(
    [options.currentTitle, options.currentFragmentId],
    () => {
      updateBacklinkCount();
    },
    { immediate: true }
  );

  return {
    showBacklinks,
    backlinkCount,
    toggleBacklinks,
    closeBacklinks,
    handleBacklinkNavigate,
    updateBacklinkCount
  };
}
