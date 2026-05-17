import type { PluginCategory, PluginId } from './types';

export type PluginManifestSchemaVersion = 1;
export type PluginPackageKind = 'builtin' | 'local';
export type PluginSourceKind = 'builtin' | 'local';
export type PluginBackendKind = 'native-host' | 'wasm' | 'script';

export interface PluginI18nText {
  i18nKey: string;
  fallback: string;
}

export interface PluginCapabilities {
  routeNames?: string[];
  settingsTabs?: string[];
  hotkeys?: string[];
  searchSources?: string[];
  titlebarActions?: string[];
  trayItems?: string[];
  windows?: string[];
}

export interface PluginResourceDescriptor {
  hintKey?: string;
  bundled?: boolean;
  sizeBytes?: number;
}

export interface PluginPackageEntry {
  frontend?: string;
  backend?: string;
  backendKind?: PluginBackendKind;
  styles?: string[];
}

export interface PluginPackageManifest {
  schemaVersion: PluginManifestSchemaVersion;
  id: PluginId;
  version: string;
  kind: PluginPackageKind;
  name: PluginI18nText;
  description: PluginI18nText;
  category: PluginCategory;
  enabledByDefault: boolean;
  capabilities?: PluginCapabilities;
  resources?: PluginResourceDescriptor;
  entry?: PluginPackageEntry;
  permissions?: string[];
  dependencies?: string[];
  compatibleAppVersion?: string;
  minAppVersion?: string;
  repository?: string;
  releaseUrl?: string;
}

export interface LocalPluginPackage {
  manifest: PluginPackageManifest;
  packagePath: string;
}

export interface RegisteredPlugin {
  id: PluginId;
  source: PluginSourceKind;
  packagePath?: string;
  manifest: PluginPackageManifest;
  nameKey: string;
  descriptionKey: string;
  category: PluginCategory;
  enabledByDefault: boolean;
  routeNames?: string[];
  settingsTabs?: string[];
  hotkeys?: string[];
  searchSources?: string[];
  resourceHintKey?: string;
}
