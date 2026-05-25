import type { useConfigurationStore } from '@/store';

type ConfigurationStore = ReturnType<typeof useConfigurationStore>;

export type HotkeyName =
  | 'search'
  | 'config'
  | 'translate'
  | 'selection_translate'
  | 'screenshot'
  | 'screen_recorder'
  | 'dark_mode';

export interface HotkeySettingDefinition {
  name: HotkeyName;
  labelKey: string;
  descriptionKey: string;
  pluginId?: string;
}

const hotkeyDefinitions: Record<HotkeyName, HotkeySettingDefinition & {
  get: (store: ConfigurationStore) => string;
  set: (store: ConfigurationStore, value: string) => void;
}> = {
  search: {
    name: 'search',
    labelKey: 'shortcut.searchHotkey',
    descriptionKey: 'shortcut.searchHotkeyDesc',
    get: (store) => store.searchHotkey,
    set: (store, value) => { store.searchHotkey = value; }
  },
  config: {
    name: 'config',
    labelKey: 'shortcut.configHotkey',
    descriptionKey: 'shortcut.configHotkeyDesc',
    get: (store) => store.configHotkey,
    set: (store, value) => { store.configHotkey = value; }
  },
  translate: {
    name: 'translate',
    pluginId: 'translation',
    labelKey: 'shortcut.translateHotkey',
    descriptionKey: 'shortcut.translateHotkeyDesc',
    get: (store) => store.translateHotkey,
    set: (store, value) => { store.translateHotkey = value; }
  },
  selection_translate: {
    name: 'selection_translate',
    pluginId: 'translation',
    labelKey: 'shortcut.selectionTranslateHotkey',
    descriptionKey: 'shortcut.selectionTranslateHotkeyDesc',
    get: (store) => store.selectionTranslateHotkey,
    set: (store, value) => { store.selectionTranslateHotkey = value; }
  },
  screenshot: {
    name: 'screenshot',
    pluginId: 'screenshot',
    labelKey: 'shortcut.screenshotHotkey',
    descriptionKey: 'shortcut.screenshotHotkeyDesc',
    get: (store) => store.screenshotHotkey,
    set: (store, value) => { store.screenshotHotkey = value; }
  },
  screen_recorder: {
    name: 'screen_recorder',
    pluginId: 'screen-recorder',
    labelKey: 'shortcut.screenRecorderHotkey',
    descriptionKey: 'shortcut.screenRecorderHotkeyDesc',
    get: (store) => store.screenRecorderHotkey,
    set: (store, value) => { store.screenRecorderHotkey = value; }
  },
  dark_mode: {
    name: 'dark_mode',
    pluginId: 'system-theme',
    labelKey: 'shortcut.darkModeHotkey',
    descriptionKey: 'shortcut.darkModeHotkeyDesc',
    get: (store) => store.darkModeHotkey,
    set: (store, value) => { store.darkModeHotkey = value; }
  }
};

export const hotkeySettingDefinitions: HotkeySettingDefinition[] = [
  hotkeyDefinitions.search,
  hotkeyDefinitions.config,
  hotkeyDefinitions.translate,
  hotkeyDefinitions.selection_translate,
  hotkeyDefinitions.screenshot,
  hotkeyDefinitions.screen_recorder,
  hotkeyDefinitions.dark_mode
].map(({ name, labelKey, descriptionKey, pluginId }) => ({ name, labelKey, descriptionKey, pluginId }));

export const isHotkeyName = (value: string): value is HotkeyName => (
  value in hotkeyDefinitions
);

export const getHotkeyValue = (store: ConfigurationStore, hotkeyName: string): string => (
  isHotkeyName(hotkeyName) ? hotkeyDefinitions[hotkeyName].get(store) : ''
);

export const setHotkeyValue = (
  store: ConfigurationStore,
  hotkeyName: string,
  value: string
): void => {
  if (isHotkeyName(hotkeyName)) {
    hotkeyDefinitions[hotkeyName].set(store, value);
  }
};
