import { afterEach, describe, expect, it, vi } from 'vitest';
import { ref } from 'vue';
import { useSearchKeyboard } from './useSearchKeyboard';

class TestKeyboardEvent {
  readonly isComposing = false;
  readonly shiftKey = false;
  readonly preventDefault = vi.fn();
  readonly stopPropagation = vi.fn();

  constructor(readonly code: string) {}
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('useSearchKeyboard', () => {
  const createHarness = (canSwitchToList = true) => {
    vi.stubGlobal('KeyboardEvent', TestKeyboardEvent);
    const input = { blur: vi.fn() } as unknown as HTMLInputElement;
    const result = {
      enterListMode: vi.fn(),
      enterTabMode: vi.fn()
    };
    const keyboard = useSearchKeyboard({
      searchInputRef: ref(input),
      resultRef: ref(result),
      isSearchMode: ref(true),
      canSwitchToList: ref(canSwitchToList),
      searchResultsLength: ref(canSwitchToList ? 3 : 0),
      handleEnterSearch: vi.fn(async () => undefined)
    });

    return { input, result, keyboard };
  };

  it('enters the list at the last result on the first ArrowUp', async () => {
    const { input, result, keyboard } = createHarness();
    const event = new TestKeyboardEvent('ArrowUp');

    await keyboard.handleKeyDown(event as unknown as KeyboardEvent);

    expect(result.enterListMode).toHaveBeenCalledExactlyOnceWith(true);
    expect(input.blur).toHaveBeenCalledOnce();
    expect(event.preventDefault).toHaveBeenCalledOnce();
    expect(event.stopPropagation).toHaveBeenCalledOnce();
  });

  it('enters the list once on ArrowDown without advancing the same key again', async () => {
    const { result, keyboard } = createHarness();
    const event = new TestKeyboardEvent('ArrowDown');

    await keyboard.handleKeyDown(event as unknown as KeyboardEvent);

    expect(result.enterListMode).toHaveBeenCalledExactlyOnceWith();
    expect(event.stopPropagation).toHaveBeenCalledOnce();
  });

  it('leaves ArrowUp to the input when no results are available', async () => {
    const { input, result, keyboard } = createHarness(false);
    const event = new TestKeyboardEvent('ArrowUp');

    await keyboard.handleKeyDown(event as unknown as KeyboardEvent);

    expect(result.enterListMode).not.toHaveBeenCalled();
    expect(input.blur).not.toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
