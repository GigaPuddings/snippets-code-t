import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@tauri-apps/api/core', () => ({ invoke: vi.fn() }));
vi.mock('@tauri-apps/api/event', () => ({ listen: vi.fn() }));
vi.mock('@tauri-apps/api/window', () => ({
  getCurrentWindow: vi.fn(() => ({ label: 'main' }))
}));
vi.mock('@/api/appConfig', () => ({ getGitSettings: vi.fn() }));
vi.mock('@/utils/modal', () => ({ default: { msg: vi.fn() } }));
vi.mock('@/utils/logger', () => ({
  logger: { info: vi.fn(), error: vi.fn(), debug: vi.fn() }
}));
vi.mock('./api', () => ({
  checkGitRepo: vi.fn(),
  ensureGitignore: vi.fn(),
  gitPull: vi.fn(),
  initGitRepository: vi.fn(),
  pauseAutoSync: vi.fn(),
  startAutoSync: vi.fn()
}));
vi.mock('./useGitStatus', () => ({
  useGitStatus: vi.fn(() => ({
    refreshStatus: vi.fn(),
    refreshSettings: vi.fn(),
    _setLastSyncTime: vi.fn()
  }))
}));

import { listen } from '@tauri-apps/api/event';
import modal from '@/utils/modal';
import {
  clearPendingGitBranchSelection,
  getPendingGitBranchSelection,
  initGitSync,
  setupGitEventListeners,
  cleanupGitEventListeners,
  type InitGitSyncDeps
} from './lifecycle';

beforeEach(() => {
  vi.stubGlobal('window', new EventTarget());
  clearPendingGitBranchSelection();
});
afterEach(() => vi.unstubAllGlobals());

const t = ((key: string) => key) as any;

const configuredSettings = {
  enabled: true,
  auto_sync: false,
  auto_sync_delay: 1,
  pull_on_start: false,
  user_name: 'Codex',
  user_email: 'codex@example.com',
  remote_url: 'https://github.com/example/snippets.git',
  // token 不持久化，恢复时应仍能使用已保存的 credential helper 凭据。
  token: ''
};

const createDeps = (
  overrides: Partial<InitGitSyncDeps> = {}
): InitGitSyncDeps => ({
  getGitSettings: vi.fn(async () => configuredSettings),
  checkGitRepo: vi.fn(async () => true),
  initGitRepository: vi.fn(async () => undefined),
  gitPull: vi.fn(async () => ({
    success: true,
    files_updated: 0,
    has_conflicts: false,
    conflict_files: [],
    message: 'Already up to date'
  })),
  startAutoSync: vi.fn(async () => undefined),
  pauseAutoSync: vi.fn(async () => undefined),
  logger: {
    info: vi.fn(),
    error: vi.fn()
  } as InitGitSyncDeps['logger'],
  ...overrides
});

describe('Git 同步启动恢复', () => {
  it('本地仓库缺失时会重建并拉取，即使关闭了启动时拉取', async () => {
    const deps = createDeps({
      checkGitRepo: vi.fn(async () => false),
      gitPull: vi.fn(async () => ({
        success: true,
        files_updated: 3,
        has_conflicts: false,
        conflict_files: [],
        message: 'recovered'
      }))
    });

    await expect(initGitSync(t, deps)).resolves.toBe(true);

    expect(deps.initGitRepository).toHaveBeenCalledWith(
      configuredSettings.user_name,
      configuredSettings.user_email,
      configuredSettings.remote_url,
      ''
    );
    expect(deps.gitPull).toHaveBeenCalledTimes(1);
  });

  it('已有仓库且关闭启动拉取时不会执行额外拉取', async () => {
    const deps = createDeps();

    await expect(initGitSync(t, deps)).resolves.toBe(false);

    expect(deps.initGitRepository).not.toHaveBeenCalled();
    expect(deps.gitPull).not.toHaveBeenCalled();
  });
});

describe('Git startup pull recovery', () => {
  it('keeps a network failure retryable without globally pausing the worker', async () => {
    const deps = createDeps({
      getGitSettings: vi.fn(async () => ({
        ...configuredSettings,
        auto_sync: true,
        pull_on_start: true
      })),
      gitPull: vi.fn(async () => {
        throw new Error('network timeout');
      })
    });
    await initGitSync(t, deps);
    expect(deps.startAutoSync).toHaveBeenCalledOnce();
    expect(deps.pauseAutoSync).not.toHaveBeenCalled();
  });

  it('keeps branch selection retryable and exposes it through the existing UI event', async () => {
    const selection = {
      current_branch: 'main',
      recommended_branch: 'notes',
      available_branches: ['notes'],
      reason: 'main_missing'
    };
    const event = vi.fn();
    window.addEventListener('git-branch-selection-required', event);
    const deps = createDeps({
      getGitSettings: vi.fn(async () => ({
        ...configuredSettings,
        auto_sync: true,
        pull_on_start: true
      })),
      gitPull: vi.fn(async () => ({
        success: false,
        files_updated: 0,
        has_conflicts: false,
        conflict_files: [],
        message: 'choose branch',
        branch_selection: selection
      }))
    });
    await initGitSync(t, deps);
    expect(deps.pauseAutoSync).not.toHaveBeenCalled();
    expect(event).toHaveBeenCalledOnce();
    expect(getPendingGitBranchSelection()).toEqual(selection);
  });

  it('still pauses for real startup conflicts', async () => {
    const deps = createDeps({
      getGitSettings: vi.fn(async () => ({
        ...configuredSettings,
        auto_sync: true,
        pull_on_start: true
      })),
      gitPull: vi.fn(async () => ({
        success: false,
        files_updated: 0,
        has_conflicts: true,
        conflict_files: ['note.md'],
        message: 'conflict'
      }))
    });
    await initGitSync(t, deps);
    expect(deps.pauseAutoSync).toHaveBeenCalledOnce();
  });
});

describe('periodic branch-selection event', () => {
  it('releases every registered listener when the plugin stops', async () => {
    const active = new Set<string>();
    vi.mocked(listen).mockImplementation(async (name) => {
      active.add(name);
      return () => {
        active.delete(name);
      };
    });
    const listeners = await setupGitEventListeners(t);
    expect(active.has('workspace-root-changed')).toBe(true);
    cleanupGitEventListeners(listeners);
    expect([...active]).toEqual([]);
  });

  it('notifies while settings are closed, dedupes retries, and cleans its listener', async () => {
    const handlers = new Map<string, (event: any) => unknown>();
    const unlisten = vi.fn();
    vi.mocked(listen).mockImplementation(async (name, handler) => {
      handlers.set(name, handler as any);
      return unlisten;
    });
    vi.mocked(modal.msg).mockClear();
    const listeners = await setupGitEventListeners(t);
    const selection = {
      current_branch: 'main',
      recommended_branch: 'notes',
      available_branches: ['notes'],
      reason: 'main_missing'
    };
    handlers.get('git-branch-selection-required')!({ payload: selection });
    handlers.get('git-branch-selection-required')!({ payload: selection });
    expect(modal.msg).toHaveBeenCalledTimes(1);
    expect(modal.msg).toHaveBeenCalledWith(
      'settings.gitSync.branch.selectMessage',
      'warning',
      'top-right',
      6000
    );
    expect(getPendingGitBranchSelection()).toEqual(selection);
    handlers.get('workspace-root-changed')!({ payload: {} });
    expect(getPendingGitBranchSelection()).toBeNull();
    cleanupGitEventListeners(listeners);
    expect(unlisten).toHaveBeenCalled();
  });

  it('delivers to the open settings picker without an extra toast', async () => {
    const handlers = new Map<string, (event: any) => unknown>();
    vi.mocked(listen).mockImplementation(async (name, handler) => {
      handlers.set(name, handler as any);
      return vi.fn<() => void>();
    });
    vi.mocked(modal.msg).mockClear();
    const openPicker = vi.fn((event: Event) => event.preventDefault());
    window.addEventListener('git-branch-selection-required', openPicker);
    await setupGitEventListeners(t);
    handlers.get('git-branch-selection-required')!({
      payload: {
        current_branch: '',
        recommended_branch: 'notes',
        available_branches: ['notes'],
        reason: 'detached'
      }
    });
    expect(openPicker).toHaveBeenCalledOnce();
    expect(modal.msg).not.toHaveBeenCalled();
  });
});
