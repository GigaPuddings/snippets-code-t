import type { PluginCategory, PluginId } from './types';

export type PluginManifestSchemaVersion = 1;
export type PluginPackageKind = 'local';
export type PluginSourceKind = 'local';
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
  aiProviders?: string[];
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

export interface PluginStorageContract {
  schemaVersion: number;
  indexSchemaVersion: number;
  extractorVersion: number;
}

export interface PluginPackageSignature {
  algorithm: 'minisign' | string;
  value: string;
  keyId?: string;
}

export interface PluginPublisherDescriptor {
  id: string;
  name?: string;
  trusted?: boolean;
  publicKeyId?: string;
}

export interface PluginNativeHostSecurity {
  signature?: PluginPackageSignature;
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
  storage?: PluginStorageContract;
  signature?: PluginPackageSignature;
  publisher?: PluginPublisherDescriptor;
  nativeHost?: PluginNativeHostSecurity;
  permissions?: string[];
  dependencies?: string[];
  resourceFor?: string;
  compatibleAppVersion?: string;
  minAppVersion?: string;
  repository?: string;
  releaseUrl?: string;
}

export interface LocalPluginPackage {
  manifest: PluginPackageManifest;
  packagePath: string;
  installedAt?: string;
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
  aiProviders?: string[];
  resourceHintKey?: string;
  resourceFor?: string;
  installedAt?: string;
}
