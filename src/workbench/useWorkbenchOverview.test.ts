import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { MarkdownFile } from '@/types';

const mocks = vi.hoisted(() => ({
  getWorkspaceRoot: vi.fn(),
  getCategories: vi.fn(),
  getAllFiles: vi.fn(),
  getAiProviderStatusSnapshots: vi.fn(),
  initialize: vi.fn(),
  loadEnabledPluginEntries: vi.fn(),
  refreshPluginResourceStatus: vi.fn()
}));

vi.mock('vue', async (importOriginal) => ({
  ...(await importOriginal<typeof import('vue')>()),
  onMounted: vi.fn()
}));
vi.mock('vue-i18n', () => ({ useI18n: () => ({ t: (key: string) => key }) }));
vi.mock('vue-router', () => ({ useRouter: () => ({ push: vi.fn() }) }));
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

const file = {
  id: 'note',
  title: 'Note',
  filePath: 'E:/Workspace/note.md',
  modified: '2026-01-01T00:00:00Z',
  categoryId: 1,
  type: 'note'
} as MarkdownFile;

beforeEach(() => {
  vi.resetAllMocks();
  mocks.getWorkspaceRoot.mockResolvedValue('E:/Workspace');
  mocks.getCategories.mockResolvedValue([]);
  mocks.getAllFiles.mockResolvedValue([file]);
  mocks.getAiProviderStatusSnapshots.mockResolvedValue([]);
});

describe('workbench refresh isolation', () => {
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
