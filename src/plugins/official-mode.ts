export const OFFICIAL_PLUGINS_MODE =
  import.meta.env.VITE_OFFICIAL_PLUGINS_MODE === 'bundled'
    ? 'bundled'
    : 'external';

export const isBundledOfficialPluginsMode = OFFICIAL_PLUGINS_MODE === 'bundled';
