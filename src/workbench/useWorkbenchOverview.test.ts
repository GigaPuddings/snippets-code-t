import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { MarkdownFile } from '@/types';

const mocks = vi.hoisted(() => ({
  getWorkspaceRoot: vi.fn(),
  getCategories: vi.fn(),
  getAllFiles: vi.fn(),
  getAiProviderStatusSnapshots: vi.fn(),
  initialize: vi.fn(),
  loadEnabledPluginEntries: vi.fn(),
  refreshPluginResourceStatus: vi.fn(),
  openNewLocalAiChat: vi.fn(),
  push: vi.fn(),
  error: vi.fn()
}));

vi.mock('vue', async (importOriginal) => ({
  ...(await importOriginal<typeof import('vue')>()),
  onMounted: vi.fn()
}));
vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string, params?: Record<string, unknown>) =>
      params ? `${key}:${JSON.stringify(params)}` : key
  })
}));
vi.mock('vue-router', async (importOriginal) => ({
  ...(await importOriginal<typeof import('vue-router')>()),
  useRouter: () => ({ push: mocks.push })
}));
vi.mock('@/api/localAi', () => ({
  openNewLocalAiChat: mocks.openNewLocalAiChat
}));
vi.mock('@/utils/modal', () => ({ default: { error: mocks.error } }));
vi.mock('@/api/markdown', () => mocks);
vi.mock('@/ai', () => ({
  getAiProviderStatusSnapshots: mocks.getAiProviderStatusSnapshots,
  AI_PROVIDER_CAPABILITIES: ['chat']
}));
vi.mock('@/plugins/search-providers', () => ({
  getSearchSourceRuntimeStates: () => []
}));
vi.mock('@/store', () => ({
  usePluginStore: () => ({
    ...mocks,
    plugins: [],
    isEnabled: () => false,
    isInstalled: () => false,
    resourceStatusByPluginId: {}
  })
}));

import { useWorkbenchOverview } from './useWorkbenchOverview';

const file: MarkdownFile = {
  id: 'note',
  title: 'Note',
  content: '',
  filePath: 'E:/Workspace/note.md',
  created: '2026-01-01T00:00:00Z',
  modified: '2026-01-01T00:00:00Z',
  categoryId: 1,
  categoryName: 'Notes',
  type: 'note',
  tags: [],
  favorite: false
};

beforeEach(() => {
  vi.resetAllMocks();
  mocks.getWorkspaceRoot.mockResolvedValue('E:/Workspace');
  mocks.getCategories.mockResolvedValue([]);
  mocks.getAllFiles.mockResolvedValue([file]);
  mocks.getAiProviderStatusSnapshots.mockResolvedValue([]);
  mocks.openNewLocalAiChat.mockResolvedValue(undefined);
});

describe('workbench refresh isolation', () => {
  it('starts new AI conversations from both the quick card and the capability action', async () => {
    const controller = useWorkbenchOverview();
    controller.navigateTo('/config/local-ai/chat');
    controller.navigateTo({ label: 'Chat', path: '/config/local-ai/chat' });
    await Promise.resolve();
    expect(mocks.openNewLocalAiChat).toHaveBeenCalledTimes(2);
    expect(mocks.push).not.toHaveBeenCalled();
  });

  it('keeps ordinary navigation and query parameters intact', () => {
    const controller = useWorkbenchOverview();
    controller.navigateTo('/config/category/contentList?create=note');
    controller.navigateTo({
      label: 'AI settings',
      path: '/config/category/settings',
      query: { tab: 'ai' }
    });
    expect(mocks.push).toHaveBeenNthCalledWith(
      1,
      '/config/category/contentList?create=note'
    );
    expect(mocks.push).toHaveBeenNthCalledWith(2, {
      path: '/config/category/settings',
      query: { tab: 'ai' }
    });
    expect(mocks.openNewLocalAiChat).not.toHaveBeenCalled();
  });

  it('reports AI navigation failures without switching to a stale conversation', async () => {
    mocks.openNewLocalAiChat.mockRejectedValueOnce(
      new Error('Plugin is disabled')
    );
    useWorkbenchOverview().navigateTo('/config/local-ai/chat');
    await Promise.resolve();
    expect(mocks.error).toHaveBeenCalledWith('Error: Plugin is disabled');
    expect(mocks.push).not.toHaveBeenCalled();
  });

  it('loads metadata only while preserving counts, favorites, and recent routes', async () => {
    mocks.getAllFiles.mockResolvedValue([
      file,
      {
        ...file,
        id: 'snippet',
        title: 'Snippet',
        filePath: 'E:/Workspace/snippet.md',
        modified: '2026-02-01T00:00:00Z',
        type: 'code',
        favorite: true
      }
    ]);
    const controller = useWorkbenchOverview();

    await controller.refresh();

    expect(mocks.getAllFiles).toHaveBeenCalledWith({ includeContent: false });
    expect(
      controller.metrics.value.find((metric) => metric.id === 'content')
    ).toMatchObject({
      value: 2,
      meta: 'settings.workbench.metrics.contentMeta:{"snippets":1,"notes":1}'
    });
    expect(controller.layers.value[0].stats).toContainEqual({
      label: 'settings.workbench.stats.favorites',
      value: 1
    });
    expect(controller.recentItems.value).toMatchObject([
      {
        title: 'Snippet',
        type: 'code',
        path: '/config/category/contentList/1/content/E%3A%2FWorkspace%2Fsnippet.md'
      },
      {
        title: 'Note',
        type: 'note',
        path: '/config/category/contentList/1/content/E%3A%2FWorkspace%2Fnote.md'
      }
    ]);
  });

  it.each([
    'initialize',
    'loadEnabledPluginEntries',
    'refreshPluginResourceStatus'
  ] as const)(
    'keeps workspace usable when %s fails and permits a retry',
    async (method) => {
      mocks[method].mockRejectedValueOnce(new Error('plugin failure'));
      const controller = useWorkbenchOverview();
      await expect(controller.refresh()).resolves.toBeUndefined();
      expect(controller.recentItems.value).toHaveLength(1);
      expect(controller.loadError.value).toContain('plugin failure');
      expect(controller.loading.value).toBe(false);
      await controller.refresh();
      expect(controller.loadError.value).toBe('');
    }
  );

  it('clears old workspace content when a new root cannot be loaded', async () => {
    const controller = useWorkbenchOverview();
    await controller.refresh();
    mocks.getWorkspaceRoot.mockResolvedValue('E:/Other');
    mocks.getAllFiles.mockRejectedValue(new Error('unreadable directory'));
    await controller.refresh();
    expect(controller.workspaceRoot.value).toBe('E:/Other');
    expect(controller.recentItems.value).toEqual([]);
    expect(controller.loadError.value).toContain('unreadable directory');
    expect(mocks.getAiProviderStatusSnapshots).toHaveBeenCalledTimes(2);
  });

  it('coalesces concurrent refreshes until the pending refresh settles', async () => {
    let resolve!: (root: string) => void;
    mocks.getWorkspaceRoot.mockReturnValue(
      new Promise<string>((done) => {
        resolve = done;
      })
    );
    const controller = useWorkbenchOverview();
    const first = controller.refresh();
    const second = controller.refresh();
    expect(second).toBe(first);
    expect(controller.loading.value).toBe(true);
    resolve('E:/Workspace');
    await first;
    expect(mocks.getAllFiles).toHaveBeenCalledTimes(1);
    expect(controller.loading.value).toBe(false);
  });
});
