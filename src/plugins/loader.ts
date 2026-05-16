import { attachmentsPlugin } from './attachments/manifest';
import { desktopFilesPlugin } from './desktop-files/manifest';
import { gitSyncPlugin } from './git-sync/manifest';
import { localLauncherPlugin } from './local-launcher/manifest';
import { screenshotPlugin } from './screenshot/manifest';
import { searchEnginesPlugin } from './search-engines/manifest';
import { systemThemePlugin } from './system-theme/manifest';
import { todoPlugin } from './todo/manifest';
import { translationPlugin } from './translation/manifest';
import type { PluginCategory, PluginId, BuiltinPlugin } from './types';
import type { PluginPackageManifest, RegisteredPlugin } from './protocol';

export const BUILTIN_PLUGIN_PACKAGES: BuiltinPlugin[] = [
  translationPlugin,
  screenshotPlugin,
  todoPlugin,
  systemThemePlugin,
  localLauncherPlugin,
  desktopFilesPlugin,
  searchEnginesPlugin,
  gitSyncPlugin,
  attachmentsPlugin
];

const DEFAULT_PLUGIN_VERSION = '1.0.0';

const fallbackName = (id: PluginId): string => String(id);

export const createBuiltinPackageManifest = (plugin: BuiltinPlugin): PluginPackageManifest => ({
  schemaVersion: 1,
  id: plugin.id,
  version: plugin.version ?? DEFAULT_PLUGIN_VERSION,
  kind: 'builtin',
  name: {
    i18nKey: plugin.nameKey,
    fallback: plugin.fallbackName ?? fallbackName(plugin.id)
  },
  description: {
    i18nKey: plugin.descriptionKey,
    fallback: plugin.fallbackDescription ?? ''
  },
  category: plugin.category,
  enabledByDefault: plugin.enabledByDefault,
  capabilities: {
    routeNames: plugin.routeNames,
    settingsTabs: plugin.settingsTabs,
    hotkeys: plugin.hotkeys,
    searchSources: plugin.searchSources
  },
  resources: plugin.resourceHintKey
    ? {
        hintKey: plugin.resourceHintKey,
        bundled: true
      }
    : undefined
});

export const createRegisteredPlugin = (
  manifest: PluginPackageManifest,
  source: RegisteredPlugin['source'],
  packagePath?: string
): RegisteredPlugin => ({
  id: manifest.id,
  source,
  packagePath,
  manifest,
  nameKey: manifest.name.i18nKey,
  descriptionKey: manifest.description.i18nKey,
  category: manifest.category,
  enabledByDefault: manifest.enabledByDefault,
  routeNames: manifest.capabilities?.routeNames,
  settingsTabs: manifest.capabilities?.settingsTabs,
  hotkeys: manifest.capabilities?.hotkeys,
  searchSources: manifest.capabilities?.searchSources,
  resourceHintKey: manifest.resources?.hintKey
});

const isObject = (value: unknown): value is Record<string, unknown> => (
  typeof value === 'object' && value !== null
);

const isPluginCategory = (value: unknown): value is PluginCategory => (
  typeof value === 'string'
  && ['capture', 'automation', 'search', 'sync', 'editor', 'appearance'].includes(value)
);

export const normalizePluginPackageManifest = (
  value: unknown
): PluginPackageManifest | null => {
  if (!isObject(value)) return null;
  if (value.schemaVersion !== 1) return null;
  if (typeof value.id !== 'string' || !value.id.trim()) return null;
  if (typeof value.version !== 'string' || !value.version.trim()) return null;
  if (value.kind !== 'builtin' && value.kind !== 'local') return null;
  if (!isObject(value.name) || typeof value.name.i18nKey !== 'string' || typeof value.name.fallback !== 'string') return null;
  if (!isObject(value.description) || typeof value.description.i18nKey !== 'string' || typeof value.description.fallback !== 'string') return null;
  if (!isPluginCategory(value.category)) return null;
  if (typeof value.enabledByDefault !== 'boolean') return null;

  const name = {
    i18nKey: value.name.i18nKey,
    fallback: value.name.fallback
  };
  const description = {
    i18nKey: value.description.i18nKey,
    fallback: value.description.fallback
  };

  return {
    schemaVersion: 1,
    id: value.id as PluginId,
    version: value.version,
    kind: value.kind,
    name,
    description,
    category: value.category,
    enabledByDefault: value.enabledByDefault,
    capabilities: isObject(value.capabilities) ? value.capabilities as PluginPackageManifest['capabilities'] : undefined,
    resources: isObject(value.resources) ? value.resources as PluginPackageManifest['resources'] : undefined,
    entry: isObject(value.entry) ? value.entry as PluginPackageManifest['entry'] : undefined,
    permissions: Array.isArray(value.permissions) ? value.permissions.filter((item): item is string => typeof item === 'string') : undefined,
    compatibleAppVersion: typeof value.compatibleAppVersion === 'string' ? value.compatibleAppVersion : undefined
  };
};

export const loadBuiltinPluginManifests = (): PluginPackageManifest[] => (
  BUILTIN_PLUGIN_PACKAGES.map(createBuiltinPackageManifest)
);

export const loadLocalPluginManifests = (
  manifests: unknown[]
): PluginPackageManifest[] => (
  manifests
    .map((manifest) => normalizePluginPackageManifest(manifest))
    .filter((manifest): manifest is PluginPackageManifest => manifest !== null)
);

export const loadPluginRegistry = (
  localManifests: unknown[] = []
): RegisteredPlugin[] => {
  const registered = [
    ...loadBuiltinPluginManifests().map((manifest) => createRegisteredPlugin(manifest, 'builtin')),
    ...loadLocalPluginManifests(localManifests).map((manifest) => createRegisteredPlugin(manifest, 'local'))
  ];

  const byId = new Map<PluginId, RegisteredPlugin>();
  for (const plugin of registered) {
    if (!byId.has(plugin.id)) {
      byId.set(plugin.id, plugin);
    }
  }

  return Array.from(byId.values());
};
