import type { useConfigurationStore } from '@/store';

type ConfigurationStore = ReturnType<typeof useConfigurationStore>;

export type HotkeyName =
  | 'search'
  | 'config'
  | 'translate'
  | 'selection_translate'
  | 'screenshot'
  | 'dark_mode';

const hotkeyAccessors: Record<HotkeyName, {
  get: (store: ConfigurationStore) => string;
  set: (store: ConfigurationStore, value: string) => void;
}> = {
  search: {
    get: (store) => store.searchHotkey,
    set: (store, value) => { store.searchHotkey = value; }
  },
  config: {
    get: (store) => store.configHotkey,
    set: (store, value) => { store.configHotkey = value; }
  },
  translate: {
    get: (store) => store.translateHotkey,
    set: (store, value) => { store.translateHotkey = value; }
  },
  selection_translate: {
    get: (store) => store.selectionTranslateHotkey,
    set: (store, value) => { store.selectionTranslateHotkey = value; }
  },
  screenshot: {
    get: (store) => store.screenshotHotkey,
    set: (store, value) => { store.screenshotHotkey = value; }
  },
  dark_mode: {
    get: (store) => store.darkModeHotkey,
    set: (store, value) => { store.darkModeHotkey = value; }
  }
};

export const isHotkeyName = (value: string): value is HotkeyName => (
  value in hotkeyAccessors
);

export const getHotkeyValue = (store: ConfigurationStore, hotkeyName: string): string => (
  isHotkeyName(hotkeyName) ? hotkeyAccessors[hotkeyName].get(store) : ''
);

export const setHotkeyValue = (
  store: ConfigurationStore,
  hotkeyName: string,
  value: string
): void => {
  if (isHotkeyName(hotkeyName)) {
    hotkeyAccessors[hotkeyName].set(store, value);
  }
};
