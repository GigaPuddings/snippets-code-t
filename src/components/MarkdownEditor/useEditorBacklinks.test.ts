import { nextTick, ref } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import { useEditorBacklinks } from './useEditorBacklinks';

const createBacklinks = (
  overrides: {
    title?: string;
    fragmentId?: number | string;
    getBacklinkStats?: (
      title: string,
      fragmentId?: number | string
    ) => Promise<{ count: number }>;
  } = {}
) => {
  const currentTitle = ref(overrides.title ?? 'Button Patterns');
  const currentFragmentId = ref<number | string | undefined>(
    overrides.fragmentId ?? 1
  );
  const getBacklinkStats =
    overrides.getBacklinkStats ?? vi.fn(async () => ({ count: 3 }));
  const emitNavigate = vi.fn();

  const backlinks = useEditorBacklinks({
    currentTitle,
    currentFragmentId,
    getBacklinkStats,
    emitNavigate
  });

  return {
    ...backlinks,
    currentTitle,
    currentFragmentId,
    getBacklinkStats,
    emitNavigate
  };
};

describe('useEditorBacklinks', () => {
  it('loads backlink count for the current title', async () => {
    const backlinks = createBacklinks();

    await nextTick();
    await nextTick();

    expect(backlinks.getBacklinkStats).toHaveBeenCalledWith(
      'Button Patterns',
      1
    );
    expect(backlinks.backlinkCount.value).toBe(3);
  });

  it('resets count when there is no current title', async () => {
    const backlinks = createBacklinks({ title: '' });

    await backlinks.updateBacklinkCount();

    expect(backlinks.getBacklinkStats).not.toHaveBeenCalled();
    expect(backlinks.backlinkCount.value).toBe(0);
  });

  it('toggles and closes the backlink panel', () => {
    const backlinks = createBacklinks();

    backlinks.toggleBacklinks();
    expect(backlinks.showBacklinks.value).toBe(true);

    backlinks.closeBacklinks();
    expect(backlinks.showBacklinks.value).toBe(false);
  });

  it.each(['resolve', 'reject'] as const)(
    'ignores an older request that finishes with %s after navigating',
    async (finish) => {
      const pending: Array<{
        resolve: (value: { count: number }) => void;
        reject: (error: Error) => void;
      }> = [];
      const backlinks = createBacklinks({
        getBacklinkStats: () =>
          new Promise((resolve, reject) => pending.push({ resolve, reject }))
      });
      backlinks.currentTitle.value = 'Next note';
      await nextTick();
      pending[1].resolve({ count: 7 });
      await nextTick();
      if (finish === 'resolve') pending[0].resolve({ count: 99 });
      else pending[0].reject(new Error('old request failed'));
      await nextTick();
      expect(backlinks.backlinkCount.value).toBe(7);
    }
  );

  it('refreshes when opening a different file with the same title', async () => {
    const backlinks = createBacklinks();
    await nextTick();
    backlinks.currentFragmentId.value = 'other-folder/Button Patterns.md';
    await nextTick();
    expect(backlinks.getBacklinkStats).toHaveBeenLastCalledWith(
      'Button Patterns',
      'other-folder/Button Patterns.md'
    );
  });

  it('forwards backlink navigation events', () => {
    const backlinks = createBacklinks();

    backlinks.handleBacklinkNavigate(42, 'useDialog');

    expect(backlinks.emitNavigate).toHaveBeenCalledWith(42, 'useDialog');
  });

  it('sets count to zero when stats loading fails', async () => {
    const backlinks = createBacklinks({
      getBacklinkStats: vi.fn(async () => {
        throw new Error('load failed');
      })
    });

    await backlinks.updateBacklinkCount();

    expect(backlinks.backlinkCount.value).toBe(0);
  });
});
