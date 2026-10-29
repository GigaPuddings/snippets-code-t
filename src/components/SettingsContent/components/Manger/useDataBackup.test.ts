import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useDataBackup } from './useDataBackup';
const mocks = vi.hoisted(() => ({
  open: vi.fn(),
  invoke: vi.fn(),
  msg: vi.fn(),
  dirname: vi.fn()
}));
vi.mock('@tauri-apps/plugin-dialog', () => ({ open: mocks.open }));
vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke }));
vi.mock('@tauri-apps/api/path', () => ({ dirname: mocks.dirname }));
vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string, values?: Record<string, string>) =>
      values ? `${key} ${JSON.stringify(values)}` : key
  })
}));
vi.mock('@/utils/modal', () => ({ default: { msg: mocks.msg } }));

const restored = {
  root: 'C:/recovered',
  workspace: 'C:/recovered/workspace',
  appData: 'C:/recovered/app-data',
  recovery: 'C:/recovered/recovery'
};
describe('isolated data recovery controls', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    mocks.dirname.mockResolvedValue('C:/');
  });
  it('restores into a new child of the selected parent without activating it', async () => {
    mocks.open
      .mockResolvedValueOnce('C:/backup')
      .mockResolvedValueOnce('C:/safe');
    mocks.invoke.mockResolvedValueOnce(restored);
    const controller = useDataBackup();
    await controller.restoreBackup();
    expect(mocks.open).toHaveBeenNthCalledWith(2, {
      title: 'dataManager.recoveryParent',
      directory: true,
      multiple: false,
      defaultPath: 'C:/'
    });
    expect(mocks.invoke).toHaveBeenCalledTimes(1);
    expect(mocks.invoke).toHaveBeenCalledWith('restore_full_backup', {
      source: 'C:/backup',
      destination: expect.stringMatching(/^C:\/safe\/snippets-recovered-/)
    });
    expect(controller.restoredLocation.value).toEqual(restored);
    expect(controller.backupBusy.value).toBe(false);
  });
  it('allows retry after a failed restore and never activates on failure', async () => {
    mocks.open
      .mockResolvedValueOnce('C:/backup')
      .mockResolvedValueOnce('C:/safe');
    mocks.invoke.mockRejectedValueOnce(new Error('corrupt backup'));
    const controller = useDataBackup();
    await controller.restoreBackup();
    expect(controller.backupBusy.value).toBe(false);
    expect(controller.restoredLocation.value).toBeNull();
    expect(mocks.msg).toHaveBeenCalledWith(
      expect.stringContaining('corrupt backup'),
      'error'
    );
  });
  it('activates only through the explicit confirmation handler', async () => {
    const controller = useDataBackup();
    controller.restoredLocation.value = restored;
    expect(mocks.invoke).not.toHaveBeenCalled();
    await controller.activateRecovery();
    expect(mocks.invoke).toHaveBeenCalledWith('activate_restored_backup', {
      root: restored.root
    });
  });

  it('explains the conflicting directories instead of displaying a backend error code', async () => {
    mocks.open
      .mockResolvedValueOnce('C:/backup')
      .mockResolvedValueOnce('C:/backup');
    mocks.invoke.mockRejectedValueOnce(
      'BACKUP_DESTINATION_OVERLAP: {"destination":"C:/backup/new-recovery","protectedPath":"C:/backup"}'
    );
    const controller = useDataBackup();
    await controller.restoreBackup();
    expect(mocks.msg).toHaveBeenCalledWith(
      expect.stringContaining('dataManager.backupDestinationOverlap'),
      'error'
    );
    expect(mocks.msg.mock.calls[0][0]).toContain('C:/backup/new-recovery');
    expect(mocks.msg.mock.calls[0][0]).not.toContain(
      'BACKUP_DESTINATION_OVERLAP:'
    );
    expect(controller.restoredLocation.value).toBeNull();
    expect(controller.backupBusy.value).toBe(false);
  });
});
