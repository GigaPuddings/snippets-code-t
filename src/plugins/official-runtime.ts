import type { PluginFrontendRuntimeContext } from './runtime';

interface OfficialRuntimeModule {
  activate: (context: PluginFrontendRuntimeContext) => void | Promise<void>;
}

const officialRuntimeLoaders: Record<string, () => Promise<OfficialRuntimeModule>> = {
  screenshot: () => import('./screenshot/runtime-entry'),
  translation: () => import('./translation/runtime-entry'),
  todo: () => import('./todo/runtime-entry'),
  'system-theme': () => import('./system-theme/runtime-entry'),
  'local-launcher': () => import('./local-launcher/runtime-entry'),
  'desktop-files': () => import('./desktop-files/runtime-entry'),
  'quick-tools': () => import('./quick-tools/runtime-entry'),
  'screen-recorder': () => import('./screen-recorder/runtime-entry'),
  'search-engines': () => import('./search-engines/runtime-entry'),
  'git-sync': () => import('./git-sync/runtime-entry')
};

export const activateOfficialLocalPlugin = async (
  context: PluginFrontendRuntimeContext
): Promise<boolean> => {
  const loader = officialRuntimeLoaders[context.pluginId];
  if (!loader) return false;

  const module = await loader();
  await module.activate(context);
  return true;
};

