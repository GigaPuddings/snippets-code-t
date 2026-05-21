import { getCurrentWindow } from '@tauri-apps/api/window';
import type { Router } from 'vue-router';
import type { Composer } from 'vue-i18n';
import { readMarkdownFile as defaultReadMarkdownFile } from '@/api/markdown';
import type { MarkdownFile } from '@/types';
import type { MessagePosition } from '@/utils/modal';

type ConfigNavigationEventWindow = {
  listen: <T = unknown>(
    event: string,
    handler: (event: { payload: T }) => void | Promise<void>
  ) => Promise<() => void>;
  onFocusChanged: (
    handler: (event: { payload: boolean }) => void | Promise<void>
  ) => Promise<() => void>;
};

type ConfigNavigationStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

type ModalMsg = (
  message: string,
  type?: 'success' | 'warning' | 'info' | 'error',
  position?: MessagePosition,
  duration?: number
) => void;

export interface ConfigNavigationEventsDeps {
  router: Router;
  t: Composer['t'];
  modalMsg: ModalMsg;
  storage?: ConfigNavigationStorage;
  ttlMs?: number;
  getWindow?: () => ConfigNavigationEventWindow;
  readMarkdownFile?: (filePath: string) => Promise<MarkdownFile>;
}

const DEFAULT_PENDING_NAVIGATION_TTL = 30_000;

const normalizePendingFragmentId = (id: unknown) => String(id ?? '').replace(/^markdown:/i, '');

export function useConfigNavigationEvents(deps: ConfigNavigationEventsDeps) {
  const storage = deps.storage ?? localStorage;
  const ttlMs = deps.ttlMs ?? DEFAULT_PENDING_NAVIGATION_TTL;
  const getWindow = deps.getWindow ?? getCurrentWindow;
  const readMarkdownFile = deps.readMarkdownFile ?? defaultReadMarkdownFile;
  const unlisteners: Array<() => void> = [];

  const routeToFragment = (categoryId: unknown, fragmentId: unknown, query?: Record<string, string>) => {
    const targetPath = `/config/category/contentList/${categoryId}/content/${encodeURIComponent(normalizePendingFragmentId(fragmentId))}`;
    return deps.router.push({
      path: targetPath,
      query
    });
  };

  const isPendingFresh = (timestamp: unknown) => (
    typeof timestamp === 'number' && Date.now() - timestamp < ttlMs
  );

  const checkPendingNavigation = () => {
    const pendingNav = storage.getItem('pendingNavigation');
    if (!pendingNav) return;

    try {
      const { fragmentId, categoryId, timestamp } = JSON.parse(pendingNav);

      if (isPendingFresh(timestamp)) {
        storage.removeItem('pendingNavigation');
        routeToFragment(categoryId, fragmentId);
      } else {
        storage.removeItem('pendingNavigation');
      }
    } catch (err) {
      console.error('Failed to parse pending navigation:', err);
      storage.removeItem('pendingNavigation');
    }
  };

  const checkPendingSnippetOpen = () => {
    const pendingSnippet = storage.getItem('pendingSnippetOpen');
    if (!pendingSnippet) return;

    try {
      const { fragmentId, content, categoryId, timestamp } = JSON.parse(pendingSnippet);

      if (isPendingFresh(timestamp)) {
        storage.removeItem('pendingSnippetOpen');
        routeToFragment(categoryId, fragmentId, content ? { preview: '1' } : undefined);
      } else {
        storage.removeItem('pendingSnippetOpen');
      }
    } catch (err) {
      console.error('Failed to parse pending snippet open:', err);
      storage.removeItem('pendingSnippetOpen');
    }
  };

  const checkPendingNavigationRequests = () => {
    checkPendingNavigation();
    checkPendingSnippetOpen();
  };

  const setup = async () => {
    const currentWindow = getWindow();

    unlisteners.push(await currentWindow.listen('navigate-to-settings', () => {
      deps.router.push('/config/category/settings');
    }));

    unlisteners.push(await currentWindow.listen<{ fragmentId: string; categoryId: string }>('navigate-to-fragment', (event) => {
      const { fragmentId, categoryId } = event.payload;
      routeToFragment(categoryId, fragmentId);
    }));

    unlisteners.push(await currentWindow.listen<{ file_path?: string }>('open-markdown-from-system', async (event) => {
      const filePath = event.payload?.file_path;
      if (!filePath) return;

      try {
        const file = await readMarkdownFile(filePath);
        const fragmentId = file.filePath || filePath;
        routeToFragment(file.categoryId, fragmentId);
      } catch (e: any) {
        deps.modalMsg(`${deps.t('common.failed') || 'Failed'}: ${e?.message || e}`, 'error', 'bottom-right');
      }
    }));

    unlisteners.push(await currentWindow.onFocusChanged(({ payload: focused }) => {
      if (focused) {
        checkPendingNavigation();
      }
    }));

    unlisteners.push(await currentWindow.listen('check-pending-navigation', () => {
      checkPendingNavigationRequests();
    }));
  };

  const cleanup = () => {
    while (unlisteners.length > 0) {
      unlisteners.pop()?.();
    }
  };

  return {
    setup,
    cleanup,
    checkPendingNavigation,
    checkPendingSnippetOpen,
    checkPendingNavigationRequests
  };
}

export type ConfigNavigationEvents = ReturnType<typeof useConfigNavigationEvents>;
