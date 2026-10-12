import { invoke } from '@tauri-apps/api/core';
import type { Ref } from 'vue';
import type { LauncherEntry } from './types';
import { getPrimarySearchHistoryKey } from '@/search/ranking';

export function reconcileLauncherList(
  previous: LauncherEntry[],
  incoming: LauncherEntry[],
  reorder: boolean
): LauncherEntry[] {
  if (reorder) return incoming;
  const next = new Map(incoming.map((item) => [item.id, item]));
  const result: LauncherEntry[] = [];
  for (const item of previous) {
    const updated = next.get(item.id);
    if (updated) {
      result.push(updated);
      next.delete(item.id);
    }
  }
  result.push(...next.values());
  return result;
}

export function createLauncherListRefresh(
  apps: Ref<LauncherEntry[]>,
  bookmarks: Ref<LauncherEntry[]>,
  onError: (kind: 'app' | 'bookmark', error: unknown) => void
): { refresh: (reorder?: boolean) => Promise<boolean>; dispose: () => void } {
  let version = 0;
  let reorderRequested = false;
  let disposed = false;
  return {
    refresh: async (reorder = false): Promise<boolean> => {
      if (disposed) return false;
      reorderRequested ||= reorder === true;
      const request = ++version;
      const results = await Promise.allSettled([
        invoke<LauncherEntry[]>('get_apps'),
        invoke<LauncherEntry[]>('get_bookmarks')
      ]);
      if (disposed || request !== version) return false;
      const kinds = ['app', 'bookmark'] as const;
      const lists = [apps, bookmarks];
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          lists[index].value = reconcileLauncherList(
            lists[index].value,
            result.value,
            reorderRequested
          );
        } else onError(kinds[index], result.reason);
      });
      // Consume this query/navigation request even if one list failed to load.
      // A later icon refresh must not unexpectedly reorder the successful list.
      reorderRequested = false;
      return true;
    },
    dispose: (): void => {
      disposed = true;
      version += 1;
    }
  };
}

export async function launchLauncherEntry(item: LauncherEntry): Promise<void> {
  const source = item.summarize === 'bookmark' ? 'bookmark' : 'app';
  await invoke(
    source === 'app' ? 'open_app_command' : 'open_url',
    source === 'app' ? { appPath: item.content } : { url: item.content }
  );
  const id = getPrimarySearchHistoryKey({
    id: item.id,
    title: item.title,
    content: item.content,
    summarize: source,
    metadata: { source }
  });
  try {
    await invoke('add_search_history', { id });
  } catch (error) {
    console.error('记录启动器使用历史失败:', error);
  }
  // The current view remains in place; queries/navigation apply the new ranking.
}
