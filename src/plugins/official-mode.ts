export const OFFICIAL_PLUGINS_MODE = import.meta.env.VITE_OFFICIAL_PLUGINS_MODE === 'external'
  ? 'external'
  : 'bundled';

export const isBundledOfficialPluginsMode = OFFICIAL_PLUGINS_MODE === 'bundled';

