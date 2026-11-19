import { watch, type Ref } from 'vue';
import { useConfigQuickSearch } from '@/composables/useConfigQuickSearch';

/** Consume only after the destination document and its lazy editor are ready. */
export function useContentSearchNavigation(
  path: Readonly<Ref<string>>,
  ready: Readonly<Ref<boolean>>,
  editor: Readonly<Ref<{ openSearch: (text: string) => void } | null>>
): void {
  const { pendingContentSearch, clearContentSearch } = useConfigQuickSearch();
  watch(
    [pendingContentSearch, path, ready, editor],
    ([request, currentPath, isReady, currentEditor]) => {
      if (
        !request ||
        request.path !== currentPath ||
        !isReady ||
        !currentEditor
      )
        return;
      clearContentSearch();
      currentEditor.openSearch(request.text);
    },
    { flush: 'post', immediate: true }
  );
}
