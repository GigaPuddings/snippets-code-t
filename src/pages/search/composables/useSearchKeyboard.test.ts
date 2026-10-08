import { afterEach, describe, expect, it, vi } from 'vitest';
import { ref } from 'vue';
import { useSearchKeyboard } from './useSearchKeyboard';

class TestKeyboardEvent {
  readonly shiftKey = false;
  readonly preventDefault = vi.fn();
  readonly stopPropagation = vi.fn();

  constructor(
    readonly code: string,
    readonly isComposing = false,
    readonly repeat = false
  ) {}
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
      enterTabMode: vi.fn(),
      runSelectedPrimaryAction: vi.fn(async () => undefined)
    };
    const handleEnterSearch = vi.fn(async () => undefined);
    const keyboard = useSearchKeyboard({
      searchInputRef: ref(input),
      resultRef: ref(result),
      isSearchMode: ref(true),
      canSwitchToList: ref(canSwitchToList),
      searchResultsLength: ref(canSwitchToList ? 3 : 0),
      handleEnterSearch
    });

    return { input, result, keyboard, handleEnterSearch };
  };

  it.each(['Enter', 'NumpadEnter'])(
    'runs the selected result with one %s while the search input is focused',
    async (code) => {
      const { input, result, keyboard, handleEnterSearch } = createHarness();
      const event = new TestKeyboardEvent(code);

      await keyboard.handleKeyDown(event as unknown as KeyboardEvent);

      expect(result.runSelectedPrimaryAction).toHaveBeenCalledOnce();
      expect(result.enterListMode).not.toHaveBeenCalled();
      expect(input.blur).not.toHaveBeenCalled();
      expect(handleEnterSearch).not.toHaveBeenCalled();
      expect(event.preventDefault).toHaveBeenCalledOnce();
      expect(event.stopPropagation).toHaveBeenCalledOnce();
    }
  );

  it('keeps the search fallback when no result is available', async () => {
    const { result, keyboard, handleEnterSearch } = createHarness(false);
    const event = new TestKeyboardEvent('Enter');

    await keyboard.handleKeyDown(event as unknown as KeyboardEvent);

    expect(handleEnterSearch).toHaveBeenCalledOnce();
    expect(result.runSelectedPrimaryAction).not.toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalledOnce();
  });

  it('does not open a result when Enter confirms an IME composition', async () => {
    const { result, keyboard, handleEnterSearch } = createHarness();
    const event = new TestKeyboardEvent('Enter', true);

    await keyboard.handleKeyDown(event as unknown as KeyboardEvent);

    expect(result.runSelectedPrimaryAction).not.toHaveBeenCalled();
    expect(result.enterListMode).not.toHaveBeenCalled();
    expect(handleEnterSearch).not.toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('does not repeatedly run the result while Enter is held', async () => {
    const { result, keyboard, handleEnterSearch } = createHarness();
    const event = new TestKeyboardEvent('Enter', false, true);

    await keyboard.handleKeyDown(event as unknown as KeyboardEvent);

    expect(result.runSelectedPrimaryAction).not.toHaveBeenCalled();
    expect(result.enterListMode).not.toHaveBeenCalled();
    expect(handleEnterSearch).not.toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalledOnce();
  });

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
