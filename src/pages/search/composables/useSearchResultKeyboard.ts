import { onMounted, onUnmounted, type ComputedRef, type Ref } from 'vue';

interface UseSearchResultKeyboardOptions {
  tabs: ComputedRef<Array<{ value: SummarizeType }>>;
  activeTabIndex: ComputedRef<number>;
  filteredResults: ComputedRef<ContentType[]>;
  visibleShortcutItems: ComputedRef<ContentType[]>;
  isSearchMode: ComputedRef<boolean>;
  isListMode: ComputedRef<boolean>;
  isTabMode: ComputedRef<boolean>;
  selectedId: Ref<string | number | undefined>;
  switchTab: (tab: SummarizeType) => void;
  setMode: (mode: 'SEARCH' | 'TAB' | 'LIST') => void;
  ensureItemVisible: (index: number) => void;
  emitSelectionChangeById: (id: string | number) => void;
  runPrimaryAction: (item: ContentType) => Promise<void>;
  showHideWindow: () => Promise<void>;
  backToSearch: () => void;
  primaryAction: (item: ContentType) => void;
}

const preventKey = (event: KeyboardEvent) => {
  event.preventDefault();
  event.stopPropagation();
};

const getShortcutIndex = (event: KeyboardEvent) => {
  if (!/^Digit[1-5]$/.test(event.code) && !/^Numpad[1-5]$/.test(event.code)) {
    return -1;
  }

  return Number(event.code.replace('Digit', '').replace('Numpad', '')) - 1;
};

export function useSearchResultKeyboard(options: UseSearchResultKeyboardOptions) {
  const selectAndRunShortcutItem = (index: number) => {
    const item = options.visibleShortcutItems.value[index];
    if (!item) return false;

    options.selectedId.value = item.id;
    void options.runPrimaryAction(item);
    return true;
  };

  const handleResultTabSwitch = (direction: 1 | -1) => {
    const tabs = options.tabs.value;
    if (tabs.length === 0) return;

    const currentIndex = options.activeTabIndex.value >= 0 ? options.activeTabIndex.value : 0;
    const newIndex = (currentIndex + direction + tabs.length) % tabs.length;
    options.switchTab(tabs[newIndex].value);
  };

  const handleListModeKeys = (event: KeyboardEvent) => {
    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      preventKey(event);
      handleResultTabSwitch(event.code === 'ArrowRight' ? 1 : -1);
      return;
    }

    const results = options.filteredResults.value;
    if (results.length === 0) return;

    const index = results.findIndex((item) => item.id === options.selectedId.value);
    let nextIndex = index;

    switch (event.code) {
      case 'ArrowDown':
        preventKey(event);
        nextIndex = (index + 1) % results.length;
        options.selectedId.value = results[nextIndex].id;
        options.emitSelectionChangeById(options.selectedId.value);
        options.ensureItemVisible(nextIndex);
        break;
      case 'ArrowUp':
        preventKey(event);
        nextIndex = (index - 1 + results.length) % results.length;
        options.selectedId.value = results[nextIndex].id;
        options.emitSelectionChangeById(options.selectedId.value);
        options.ensureItemVisible(nextIndex);
        break;
      case 'Enter':
        preventKey(event);
        if (results[index]) {
          const item = results[index];
          options.selectedId.value = item.id;
          options.primaryAction(item);
        }
        break;
      case 'Space':
        preventKey(event);
        break;
    }
  };

  const handleTabModeKeys = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowRight':
        preventKey(event);
        handleResultTabSwitch(1);
        break;
      case 'ArrowLeft':
        preventKey(event);
        handleResultTabSwitch(-1);
        break;
      case 'ArrowDown':
        preventKey(event);
        if (options.filteredResults.value.length > 0) {
          options.setMode('LIST');
        }
        break;
      case 'ArrowUp':
        preventKey(event);
        options.backToSearch();
        break;
      case 'Enter':
        preventKey(event);
        if (options.filteredResults.value.length > 0) {
          options.setMode('LIST');
        }
        break;
    }
  };

  const handleKeyEvent = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement | null;
    const isPreviewPanel = Boolean(target?.closest?.('.preview-panel'));
    if (isPreviewPanel && event.code !== 'Enter') {
      return;
    }

    if (event.code === 'Escape') {
      preventKey(event);
      void options.showHideWindow();
      return;
    }

    if (options.isSearchMode.value) {
      if (event.code === 'Tab') {
        preventKey(event);
        options.setMode('TAB');
      }
      if (event.code !== 'Enter') return;
    }

    const shortcutIndex = getShortcutIndex(event);
    if (shortcutIndex >= 0) {
      preventKey(event);
      selectAndRunShortcutItem(shortcutIndex);
      return;
    }

    if (event.code === 'Tab' && !event.shiftKey) {
      preventKey(event);
      if (options.isTabMode.value || options.isListMode.value) {
        options.backToSearch();
      }
      return;
    }

    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      preventKey(event);
      handleResultTabSwitch(event.code === 'ArrowRight' ? 1 : -1);
      return;
    }

    if (event.altKey && !event.ctrlKey && !event.metaKey) {
      if (shortcutIndex >= 0 && shortcutIndex < options.visibleShortcutItems.value.length) {
        preventKey(event);
        selectAndRunShortcutItem(shortcutIndex);
        return;
      }
    }

    if (options.isListMode.value) {
      handleListModeKeys(event);
      return;
    }

    if (options.isTabMode.value) {
      handleTabModeKeys(event);
    }
  };

  onMounted(() => {
    document.addEventListener('keydown', handleKeyEvent);
  });

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyEvent);
  });

  return {
    handleKeyEvent,
    handleResultTabSwitch,
    handleListModeKeys,
    handleTabModeKeys
  };
}
