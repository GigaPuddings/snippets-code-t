import { computed, effectScope, nextTick, ref, type EffectScope } from 'vue';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useSearchResultKeyboard } from './useSearchResultKeyboard';
import { useSearchResultPagination } from './useSearchResultPagination';

vi.mock('vue', async (importOriginal) => ({
  ...(await importOriginal<typeof import('vue')>()),
  onMounted: vi.fn(),
  onUnmounted: vi.fn()
}));

const scopes: EffectScope[] = [];
afterEach(() => scopes.splice(0).forEach((scope) => scope.stop()));

const createItem = (id: number): ContentType =>
  ({ id, title: `Result ${id}` }) as ContentType;

const createHarness = (): {
  keyboard: ReturnType<typeof useSearchResultKeyboard>;
  togglePreview: () => void;
} => {
  const firstItem = createItem(1);
  const togglePreview = vi.fn();
  const keyboard = useSearchResultKeyboard({
    tabs: computed(() => [{ value: 'text' as SummarizeType }]),
    activeTabIndex: computed(() => 0),
    filteredResults: computed(() => [firstItem]),
    visibleShortcutItems: computed(() => [firstItem]),
    isSearchMode: computed(() => false),
    isListMode: computed(() => true),
    isTabMode: computed(() => false),
    selectedId: ref(firstItem.id),
    switchTab: vi.fn(),
    setMode: vi.fn(),
    ensureItemVisible: vi.fn(),
    emitSelectionChangeById: vi.fn(),
    runPrimaryAction: vi.fn(async () => undefined),
    showHideWindow: vi.fn(async () => undefined),
    backToSearch: vi.fn(),
    primaryAction: vi.fn(),
    togglePreview
  });

  return { keyboard, togglePreview };
};

describe('useSearchResultKeyboard', () => {
  it('toggles the selected result preview with Space in list mode', () => {
    const { keyboard, togglePreview } = createHarness();
    const event = {
      code: 'Space',
      repeat: false,
      preventDefault: vi.fn(),
      stopPropagation: vi.fn()
    } as unknown as KeyboardEvent;

    keyboard.handleListModeKeys(event);

    expect(event.preventDefault).toHaveBeenCalledOnce();
    expect(event.stopPropagation).toHaveBeenCalledOnce();
    expect(togglePreview).toHaveBeenCalledOnce();
  });

  it('does not repeatedly toggle the preview while Space is held', () => {
    const { keyboard, togglePreview } = createHarness();
    const event = {
      code: 'Space',
      repeat: true,
      preventDefault: vi.fn(),
      stopPropagation: vi.fn()
    } as unknown as KeyboardEvent;

    keyboard.handleListModeKeys(event);

    expect(event.preventDefault).toHaveBeenCalledOnce();
    expect(togglePreview).not.toHaveBeenCalled();
  });
});

function pageHarness(count = 14) {
  const scope = effectScope();
  scopes.push(scope);
  return scope.run(() => {
    const items = Array.from({ length: count }, (_, id) => createItem(id));
    const selectedId = ref<string | number | undefined>(0);
    const searchMode = ref(false);
    const selected = vi.fn((id: string | number) => {
      selectedId.value = id;
    });
    const run = vi.fn(async () => undefined);
    const paging = useSearchResultPagination(
      () => items,
      selectedId,
      (item) => {
        selectedId.value = item?.id;
      }
    );
    const keyboard = useSearchResultKeyboard({
      tabs: computed(() => [{ value: 'text' as SummarizeType }]),
      activeTabIndex: computed(() => 0),
      filteredResults: computed(() => items),
      visibleShortcutItems: paging.pageItems,
      isSearchMode: computed(() => searchMode.value),
      isListMode: computed(() => !searchMode.value),
      isTabMode: computed(() => false),
      selectedId,
      switchTab: vi.fn(),
      setMode: vi.fn(),
      ensureItemVisible: paging.ensureItemVisible,
      emitSelectionChangeById: selected,
      runPrimaryAction: run,
      showHideWindow: vi.fn(async () => undefined),
      backToSearch: vi.fn(),
      primaryAction: run,
      togglePreview: vi.fn(),
      changePage: paging.changePage
    });
    return { paging, keyboard, selectedId, selected, run, searchMode };
  })!;
}

function key(code: string, fields = {}): KeyboardEvent {
  return {
    code,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    repeat: false,
    isComposing: false,
    defaultPrevented: false,
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
    target: null,
    ...fields
  } as unknown as KeyboardEvent;
}

describe('paged result keyboard interaction', () => {
  it('moves across the sixth row boundary and wraps the final result to the first', async () => {
    const state = pageHarness();
    state.selectedId.value = 5;
    await nextTick();
    state.keyboard.handleKeyEvent(key('ArrowDown'));
    expect(state.selectedId.value).toBe(6);
    expect(state.paging.page.value.index).toBe(1);
    state.keyboard.handleKeyEvent(key('ArrowUp'));
    expect(state.selectedId.value).toBe(5);
    expect(state.paging.page.value.index).toBe(0);
    state.selectedId.value = 13;
    await nextTick();
    state.keyboard.handleKeyEvent(key('ArrowDown'));
    expect(state.selectedId.value).toBe(0);
    expect(state.paging.page.value.index).toBe(0);
  });

  it('binds Alt shortcuts to the current page and ignores unavailable, composing and repeated actions', () => {
    const state = pageHarness();
    state.paging.changePage(1);
    state.keyboard.handleKeyEvent(key('Digit2', { altKey: true }));
    expect(state.run).toHaveBeenCalledExactlyOnceWith(
      expect.objectContaining({ id: 7 })
    );
    expect(state.selected).toHaveBeenCalledWith(7);
    state.run.mockClear();
    state.keyboard.handleKeyEvent(key('Digit7', { altKey: true }));
    state.keyboard.handleKeyEvent(
      key('Digit2', { altKey: true, isComposing: true })
    );
    state.keyboard.handleKeyEvent(
      key('Digit2', { altKey: true, repeat: true })
    );
    state.searchMode.value = true;
    state.keyboard.handleKeyEvent(key('Digit2'));
    expect(state.run).not.toHaveBeenCalled();
  });

  it('pages with PageDown and PageUp from the input without taking over the preview', () => {
    const state = pageHarness();
    state.searchMode.value = true;
    state.keyboard.handleKeyEvent(key('PageDown'));
    expect(state.paging.page.value.index).toBe(1);
    expect(state.selectedId.value).toBe(6);
    state.keyboard.handleKeyEvent(key('PageUp'));
    expect(state.paging.page.value.index).toBe(0);
    state.keyboard.handleKeyEvent(
      key('PageDown', { target: { closest: () => ({}) } })
    );
    expect(state.paging.page.value.index).toBe(0);
    expect(state.run).not.toHaveBeenCalled();
  });
});
