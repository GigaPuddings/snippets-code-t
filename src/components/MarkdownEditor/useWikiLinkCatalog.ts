import {
  computed,
  onBeforeUnmount,
  onMounted,
  shallowRef,
  watch,
  type Ref
} from 'vue';
import { getAllFiles } from '@/api/markdown';
import { indexWikiLinkTitles } from '@/utils/wikilink-titles';
import type { WikiLinkCatalog } from './wikiLinkCompletion';

export function useWikiLinkCatalog(
  source: Readonly<Ref<string>>,
  workspace: Readonly<Ref<string>>,
  sourcePath: Readonly<Ref<string>>
): Ref<WikiLinkCatalog> {
  const catalog = shallowRef<
    | Omit<Extract<WikiLinkCatalog, { status: 'ready' }>, 'exists'>
    | { status: 'loading' | 'error' }
  >({ status: 'loading' });
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
            titles: indexWikiLinkTitles(files, workspace.value)
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
  watch(workspace, invalidate);
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
  return computed(() => {
    const current = catalog.value;
    const path = sourcePath.value;
    if (current.status !== 'ready') return current;
    return {
      ...current,
      exists: (raw: string) => {
        const target = current.titles.resolve(raw, path);
        return !!target && target !== 'ambiguous';
      }
    };
  });
}
