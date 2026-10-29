import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useStartupRecovery } from './useStartupRecovery';

const mocks = vi.hoisted(() => ({ invoke: vi.fn(), listen: vi.fn() }));
vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke }));
vi.mock('@tauri-apps/api/event', () => ({ listen: mocks.listen }));

describe('startup recovery', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    mocks.listen.mockResolvedValue(vi.fn());
  });

  it('reads a failure that occurred before the loading page subscribed', async () => {
    mocks.invoke.mockResolvedValue(true);
    const recovery = useStartupRecovery();
    await recovery.start();
    expect(recovery.failed.value).toBe(true);
    expect(mocks.invoke).toHaveBeenCalledWith('get_config_startup_failed');
    recovery.stop();
  });

  it('keeps a failure event arriving during an older status read', async () => {
    let resolve!: (value: boolean) => void;
    mocks.invoke.mockImplementation(() => new Promise((r) => (resolve = r)));
    const recovery = useStartupRecovery();
    const started = recovery.start();
    await vi.waitFor(() => expect(mocks.invoke).toHaveBeenCalled());
    mocks.listen.mock.calls[0][1]({ payload: null });
    resolve(false);
    await started;
    expect(recovery.failed.value).toBe(true);
    recovery.stop();
  });

  it('prevents duplicate retries and preserves recovery after an IPC failure', async () => {
    mocks.invoke.mockResolvedValueOnce(true);
    const recovery = useStartupRecovery();
    await recovery.start();
    let reject!: (reason: Error) => void;
    mocks.invoke.mockImplementationOnce(
      () => new Promise((_, r) => (reject = r))
    );
    const retry = recovery.retry();
    await recovery.retry();
    expect(mocks.invoke).toHaveBeenCalledTimes(2);
    reject(new Error('window could not be created'));
    await retry;
    expect(recovery.failed.value).toBe(true);
    expect(recovery.actionError.value).toBe(true);
    expect(recovery.busy.value).toBe(false);
    mocks.invoke.mockResolvedValueOnce(undefined);
    await recovery.retry();
    expect(recovery.failed.value).toBe(false);
    expect(mocks.invoke).toHaveBeenLastCalledWith('retry_config_startup');
    recovery.stop();
  });

  it('reuses the log command and removes a subscription resolving after unmount', async () => {
    let subscribed!: (cleanup: () => void) => void;
    mocks.listen.mockImplementation(() => new Promise((r) => (subscribed = r)));
    const recovery = useStartupRecovery();
    const started = recovery.start();
    recovery.stop();
    const cleanup = vi.fn();
    subscribed(cleanup);
    await started;
    expect(cleanup).toHaveBeenCalledOnce();
    expect(mocks.invoke).not.toHaveBeenCalled();
    await recovery.openLogs();
    expect(mocks.invoke).toHaveBeenCalledWith('open_developer_log_dir');
  });
});
