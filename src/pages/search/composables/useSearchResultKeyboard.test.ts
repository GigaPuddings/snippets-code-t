import { computed, ref } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import { useSearchResultKeyboard } from './useSearchResultKeyboard';

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
