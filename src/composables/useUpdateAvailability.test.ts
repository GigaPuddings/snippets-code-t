import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  invoke: vi.fn(),
  listen: vi.fn(),
  updateHandler: undefined as
    | ((event: { payload: boolean }) => void)
    | undefined
}));

vi.mock('@tauri-apps/api/core', () => ({
  invoke: mocks.invoke
}));

vi.mock('@tauri-apps/api/event', () => ({
  listen: mocks.listen
}));

describe('useUpdateAvailability', () => {
  beforeEach(() => {
    vi.resetModules();
    mocks.invoke.mockReset();
    mocks.listen.mockReset();
    mocks.updateHandler = undefined;
    mocks.listen.mockImplementation(
      async (
        eventName: string,
        handler: (event: { payload: boolean }) => void
      ) => {
        expect(eventName).toBe('update-available');
        mocks.updateHandler = handler;
        return vi.fn();
      }
    );
  });

  it('shares update availability and chooses the matching update command', async () => {
    mocks.invoke.mockImplementation(async (command: string) => {
      if (command === 'get_update_status') return false;
      return undefined;
    });

    const { useUpdateAvailability } = await import('./useUpdateAvailability');
    const first = useUpdateAvailability();
    const second = useUpdateAvailability();
    await vi.waitFor(() => {
      expect(mocks.listen).toHaveBeenCalledOnce();
      expect(mocks.invoke).toHaveBeenCalledWith('get_update_status');
    });

    await first.checkForUpdates();
    expect(mocks.invoke).toHaveBeenLastCalledWith('check_update_manually');

    mocks.updateHandler?.({ payload: true });
    expect(first.hasUpdate.value).toBe(true);
    expect(second.hasUpdate.value).toBe(true);

    await second.checkForUpdates();
    expect(mocks.invoke).toHaveBeenLastCalledWith('hotkey_update_command');
  });
});
