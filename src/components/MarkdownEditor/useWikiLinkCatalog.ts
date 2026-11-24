import { onBeforeUnmount, onMounted, shallowRef, watch, type Ref } from 'vue';
import { getAllFiles } from '@/api/markdown';
import { indexWikiLinkTitles } from '@/utils/wikilink-titles';
import type { WikiLinkCatalog } from './wikiLinkCompletion';

export function useWikiLinkCatalog(
  source: Readonly<Ref<string>>
): Ref<WikiLinkCatalog> {
  const catalog = shallowRef<WikiLinkCatalog>({ status: 'loading' });
  let dirty = true;
  let generation = 0;

  function loadIfNeeded(): void {
    if (!dirty || !source.value.includes('[[')) return;
    dirty = false;
    const request = ++generation;
    catalog.value = { status: 'loading' };
    void getAllFiles({ includeContent: false }).then(
      (files) => {
        if (request === generation)
          catalog.value = {
            status: 'ready',
            titles: indexWikiLinkTitles(files)
          };
      },
      () => {
        if (request !== generation) return;
        dirty = true;
        catalog.value = { status: 'error' };
      }
    );
  }

  function invalidate(): void {
    generation++;
    dirty = true;
    catalog.value = { status: 'loading' };
    loadIfNeeded();
  }

  watch(() => source.value.includes('[['), loadIfNeeded);
  onMounted(() => {
    window.addEventListener('refresh-data', invalidate);
    window.addEventListener('refresh-categories', invalidate);
    loadIfNeeded();
  });
  onBeforeUnmount(() => {
    generation++;
    window.removeEventListener('refresh-data', invalidate);
    window.removeEventListener('refresh-categories', invalidate);
  });
  return catalog;
}
