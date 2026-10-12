import { beforeEach, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({ invoke: vi.fn() }));
vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke }));
vi.mock('vue', async (original) => ({
  ...(await original<typeof import('vue')>()),
  onMounted: vi.fn(),
  onActivated: vi.fn(),
  onUnmounted: vi.fn()
}));
import { useReminderSound } from './useReminderSound';

beforeEach(() => mocks.invoke.mockReset());

it('persists mute before changing the displayed setting and prevents previews while muted', async () => {
  const sound = useReminderSound();
  mocks.invoke.mockResolvedValueOnce(true);
  await sound.load();
  mocks.invoke.mockResolvedValueOnce(undefined);
  await sound.change(false);
  expect(mocks.invoke).toHaveBeenLastCalledWith('set_todo_sound_enabled', {
    enabled: false
  });
  expect(sound.enabled.value).toBe(false);
  mocks.invoke.mockClear();
  await sound.preview();
  expect(mocks.invoke).not.toHaveBeenCalled();
});

it('retains the saved setting on write failure and supports retry', async () => {
  const sound = useReminderSound();
  mocks.invoke.mockResolvedValueOnce(true);
  await sound.load();
  mocks.invoke.mockRejectedValueOnce('disk full');
  await sound.change(false);
  expect(sound.enabled.value).toBe(true);
  expect(sound.error.value).toBe('disk full');
  expect(sound.busy.value).toBe(false);
  mocks.invoke.mockResolvedValueOnce(undefined);
  await sound.change(false);
  expect(sound.enabled.value).toBe(false);
  expect(sound.error.value).toBe('');
});

it('blocks sound actions until settings are available from the host', async () => {
  const sound = useReminderSound();
  mocks.invoke.mockRejectedValueOnce('unknown command');
  await sound.load();
  await sound.change(false);
  await sound.preview();
  expect(sound.ready.value).toBe(false);
  expect(mocks.invoke).toHaveBeenCalledTimes(1);
});
