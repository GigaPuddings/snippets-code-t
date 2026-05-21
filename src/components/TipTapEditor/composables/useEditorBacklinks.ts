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

  const toggleBacklinks = () => {
    showBacklinks.value = !showBacklinks.value;
  };

  const closeBacklinks = () => {
    showBacklinks.value = false;
  };

  const handleBacklinkNavigate = (fragmentId: number | string, searchTitle: string) => {
    options.emitNavigate(fragmentId, searchTitle);
  };

  const updateBacklinkCount = async () => {
    if (!options.currentTitle.value) {
      backlinkCount.value = 0;
      return;
    }

    try {
      const getStats = options.getBacklinkStats ?? loadBacklinkStats;
      const stats = await getStats(
        options.currentTitle.value,
        options.currentFragmentId.value
      );
      backlinkCount.value = stats.count;
    } catch (error) {
      console.error('Failed to update backlink count:', error);
      backlinkCount.value = 0;
    }
  };

  watch(() => options.currentTitle.value, () => {
    updateBacklinkCount();
  }, { immediate: true });

  return {
    showBacklinks,
    backlinkCount,
    toggleBacklinks,
    closeBacklinks,
    handleBacklinkNavigate,
    updateBacklinkCount
  };
}
