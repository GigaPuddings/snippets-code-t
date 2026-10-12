import { beforeEach, expect, it, vi } from 'vitest';
import { ref } from 'vue';
import type { LauncherEntry } from './types';

const mocks = vi.hoisted(() => ({ invoke: vi.fn() }));
vi.mock('@tauri-apps/api/core', () => ({ invoke: mocks.invoke }));
import {
  createLauncherListRefresh,
  launchLauncherEntry,
  reconcileLauncherList
} from './listRefresh';

const app = (id: string, usage_count = 0): LauncherEntry => ({
  id,
  title: id,
  content: `C:/Apps/${id}.exe`,
  summarize: 'app',
  usage_count
});
beforeEach(() => {
  mocks.invoke.mockReset();
});

it('keeps row positions for live changes, removes missing entries, and appends discoveries', () => {
  const previous = [app('a'), app('b'), app('deleted')];
  const incoming = [app('b', 10), app('new'), app('a', 2)];
  expect(
    reconcileLauncherList(previous, incoming, false).map((item) => item.id)
  ).toEqual(['a', 'b', 'new']);
  expect(reconcileLauncherList(previous, incoming, false)[1].usage_count).toBe(
    10
  );
  expect(
    reconcileLauncherList(previous, incoming, true).map((item) => item.id)
  ).toEqual(['b', 'new', 'a']);
});
it('does not lose a requested query ranking when a later background refresh wins the request race', async () => {
  const apps = ref([app('a'), app('b')]);
  const bookmarks = ref<LauncherEntry[]>([]);
  const error = vi.fn();
  const controller = createLauncherListRefresh(apps, bookmarks, error);
  let resolveOld!: (value: LauncherEntry[]) => void;
  mocks.invoke
    .mockReturnValueOnce(
      new Promise<LauncherEntry[]>((resolve) => {
        resolveOld = resolve;
      })
    )
    .mockResolvedValueOnce([])
    .mockResolvedValueOnce([app('b', 10), app('a')])
    .mockResolvedValueOnce([]);
  const queryRefresh = controller.refresh(true);
  await controller.refresh(false);
  resolveOld([app('a'), app('b')]);
  await queryRefresh;
  expect(apps.value.map((item) => item.id)).toEqual(['b', 'a']);
  mocks.invoke
    .mockResolvedValueOnce([app('a', 20), app('b', 10)])
    .mockResolvedValueOnce([]);
  await controller.refresh(false);
  expect(apps.value.map((item) => item.id)).toEqual(['b', 'a']);
  controller.dispose();
  expect(await controller.refresh(true)).toBe(false);
});
it('consumes an explicit ranking request after a partial load failure', async () => {
  const apps = ref([app('a'), app('b')]);
  const bookmarks = ref<LauncherEntry[]>([]);
  const onError = vi.fn();
  const controller = createLauncherListRefresh(apps, bookmarks, onError);
  mocks.invoke
    .mockResolvedValueOnce([app('b', 10), app('a')])
    .mockRejectedValueOnce('bookmarks unavailable');
  await controller.refresh(true);
  expect(apps.value.map((item) => item.id)).toEqual(['b', 'a']);
  expect(onError).toHaveBeenCalledWith('bookmark', 'bookmarks unavailable');
  mocks.invoke
    .mockResolvedValueOnce([app('a', 20), app('b', 10)])
    .mockResolvedValueOnce([]);
  await controller.refresh(false);
  expect(apps.value.map((item) => item.id)).toEqual(['b', 'a']);
});
it('launches before recording usage, performs no list reload, and records no failed launch', async () => {
  mocks.invoke.mockResolvedValue(undefined);
  await launchLauncherEntry(app('a'));
  expect(mocks.invoke.mock.calls.map(([name]) => name)).toEqual([
    'open_app_command',
    'add_search_history'
  ]);
  expect(mocks.invoke).toHaveBeenLastCalledWith('add_search_history', {
    id: 'app:path:c:/apps/a.exe'
  });
  mocks.invoke.mockReset().mockRejectedValueOnce('missing target');
  await expect(launchLauncherEntry(app('missing'))).rejects.toBe(
    'missing target'
  );
  expect(mocks.invoke).toHaveBeenCalledTimes(1);
});
