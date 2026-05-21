import { describe, expect, it, vi } from 'vitest';
import {
  startAutoSyncForVisibleWindow,
  stopAutoSyncForHiddenWindow,
  type GitAutoSyncLifecycleDeps
} from './autoSyncLifecycle';

const createDeps = (
  overrides: GitAutoSyncLifecycleDeps = {}
): Required<GitAutoSyncLifecycleDeps> => ({
  isPluginEnabled: vi.fn(() => true),
  getGitSettings: vi.fn(async () => ({
    enabled: true,
    auto_sync: true,
    user_name: '',
    user_email: '',
    token: '',
    remote_url: '',
    branch: '',
    pull_on_start: false,
    sync_interval: 0,
    auto_sync_delay: 0
  })),
  getAutoSyncStatus: vi.fn(async () => false),
  startAutoSync: vi.fn(async () => undefined),
  stopAutoSync: vi.fn(async () => undefined),
  logger: {
    info: vi.fn(),
    error: vi.fn()
  },
  ...overrides
});

describe('git auto sync lifecycle', () => {
  it('does not start when plugin is disabled', async () => {
    const deps = createDeps({
      isPluginEnabled: vi.fn(() => false)
    });

    await expect(startAutoSyncForVisibleWindow(deps)).resolves.toBe(false);

    expect(deps.getGitSettings).not.toHaveBeenCalled();
    expect(deps.startAutoSync).not.toHaveBeenCalled();
  });

  it('starts auto sync for a visible window when settings allow it', async () => {
    const deps = createDeps();

    await expect(startAutoSyncForVisibleWindow(deps)).resolves.toBe(true);

    expect(deps.getAutoSyncStatus).toHaveBeenCalled();
    expect(deps.startAutoSync).toHaveBeenCalled();
  });

  it('does not start auto sync when it is already running', async () => {
    const deps = createDeps({
      getAutoSyncStatus: vi.fn(async () => true)
    });

    await expect(startAutoSyncForVisibleWindow(deps)).resolves.toBe(false);

    expect(deps.startAutoSync).not.toHaveBeenCalled();
  });

  it('does not start auto sync when setting is disabled', async () => {
    const deps = createDeps({
      getGitSettings: vi.fn(async () => ({
        enabled: true,
        auto_sync: false,
        user_name: '',
        user_email: '',
        token: '',
        remote_url: '',
        branch: '',
        pull_on_start: false,
        sync_interval: 0,
        auto_sync_delay: 0
      }))
    });

    await expect(startAutoSyncForVisibleWindow(deps)).resolves.toBe(false);

    expect(deps.getAutoSyncStatus).not.toHaveBeenCalled();
    expect(deps.startAutoSync).not.toHaveBeenCalled();
  });

  it('stops auto sync for a hidden window when it is running', async () => {
    const deps = createDeps({
      getAutoSyncStatus: vi.fn(async () => true)
    });

    await expect(stopAutoSyncForHiddenWindow(deps)).resolves.toBe(true);

    expect(deps.stopAutoSync).toHaveBeenCalled();
  });

  it('does not stop auto sync when it is not running', async () => {
    const deps = createDeps();

    await expect(stopAutoSyncForHiddenWindow(deps)).resolves.toBe(false);

    expect(deps.stopAutoSync).not.toHaveBeenCalled();
  });
});
