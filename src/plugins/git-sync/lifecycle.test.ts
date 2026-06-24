import { describe, expect, it, vi } from 'vitest';

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

import { initGitSync, type InitGitSyncDeps } from './lifecycle';

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

const createDeps = (overrides: Partial<InitGitSyncDeps> = {}): InitGitSyncDeps => ({
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
