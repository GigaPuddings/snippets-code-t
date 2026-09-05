import type { PluginCategory, PluginId } from './types';
import type {
  LocalPluginPackage,
  PluginI18nText,
  PluginNativeHostSecurity,
  PluginPackageManifest,
  PluginPackageSignature,
  PluginPublisherDescriptor,
  PluginStorageContract,
  RegisteredPlugin
} from './protocol';

export const createRegisteredPlugin = (
  manifest: PluginPackageManifest,
  source: RegisteredPlugin['source'],
  packagePath?: string,
  installedAt?: string
): RegisteredPlugin => ({
  id: manifest.id,
  source,
  packagePath,
  installedAt,
  manifest,
  nameKey: manifest.name.i18nKey,
  descriptionKey: manifest.description.i18nKey,
  category: manifest.category,
  enabledByDefault: manifest.enabledByDefault,
  routeNames: manifest.capabilities?.routeNames,
  settingsTabs: manifest.capabilities?.settingsTabs,
  hotkeys: manifest.capabilities?.hotkeys,
  searchSources: manifest.capabilities?.searchSources,
  aiProviders: manifest.capabilities?.aiProviders,
  aiContextProviders: manifest.capabilities?.aiContextProviders,
  resourceHintKey: manifest.resources?.hintKey,
  resourceFor: manifest.resourceFor
});

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const readManifestInput = (
  value: unknown
): { manifest: unknown; packagePath?: string; installedAt?: string } => {
  if (isObject(value) && 'manifest' in value && isObject(value.manifest)) {
    return {
      manifest: value.manifest,
      packagePath:
        typeof value.packagePath === 'string' ? value.packagePath : undefined,
      installedAt:
        typeof value.installedAt === 'string' ? value.installedAt : undefined
    };
  }

  return { manifest: value };
};

const isPluginCategory = (value: unknown): value is PluginCategory =>
  typeof value === 'string' &&
  ['capture', 'automation', 'search', 'sync', 'editor', 'appearance'].includes(
    value
  );

const isNonNegativeInteger = (value: unknown): value is number =>
  typeof value === 'number' && Number.isInteger(value) && value >= 0;

const normalizeRequiredString = (value: unknown): string | null =>
  typeof value === 'string' && value.trim() ? value : null;

const normalizePluginI18nText = (value: unknown): PluginI18nText | null => {
  if (!isObject(value)) return null;
  if (typeof value.i18nKey !== 'string' || typeof value.fallback !== 'string') {
    return null;
  }

  return {
    i18nKey: value.i18nKey,
    fallback: value.fallback
  };
};

export const normalizePluginStorageContract = (
  value: unknown
): PluginStorageContract | null => {
  if (!isObject(value)) return null;

  if (!isNonNegativeInteger(value.schemaVersion)) return null;
  if (!isNonNegativeInteger(value.indexSchemaVersion)) return null;
  if (!isNonNegativeInteger(value.extractorVersion)) return null;

  return {
    schemaVersion: value.schemaVersion,
    indexSchemaVersion: value.indexSchemaVersion,
    extractorVersion: value.extractorVersion
  };
};

const normalizePluginPackageSignature = (
  value: unknown
): PluginPackageSignature | null => {
  if (!isObject(value)) return null;
  if (typeof value.algorithm !== 'string' || !value.algorithm.trim())
    return null;
  if (typeof value.value !== 'string' || !value.value.trim()) return null;
  if (value.keyId !== undefined && typeof value.keyId !== 'string') return null;

  return {
    algorithm: value.algorithm,
    value: value.value,
    keyId: value.keyId
  };
};

const normalizePluginPublisherDescriptor = (
  value: unknown
): PluginPublisherDescriptor | null => {
  if (!isObject(value)) return null;
  if (typeof value.id !== 'string' || !value.id.trim()) return null;
  if (value.name !== undefined && typeof value.name !== 'string') return null;
  if (value.trusted !== undefined && typeof value.trusted !== 'boolean')
    return null;
  if (value.publicKeyId !== undefined && typeof value.publicKeyId !== 'string')
    return null;

  return {
    id: value.id,
    name: value.name,
    trusted: value.trusted,
    publicKeyId: value.publicKeyId
  };
};

const normalizePluginNativeHostSecurity = (
  value: unknown
): PluginNativeHostSecurity | null => {
  if (!isObject(value)) return null;

  let signature: PluginPackageSignature | undefined;
  if (value.signature !== undefined) {
    const normalizedSignature = normalizePluginPackageSignature(
      value.signature
    );
    if (!normalizedSignature) return null;
    signature = normalizedSignature;
  }

  return { signature };
};

const normalizeOptionalField = <Value>(
  value: unknown,
  normalize: (fieldValue: unknown) => Value | null
): Value | null | undefined => {
  if (value === undefined) return undefined;
  return normalize(value);
};

type PluginManifestBaseFields = Pick<
  PluginPackageManifest,
  | 'schemaVersion'
  | 'id'
  | 'version'
  | 'kind'
  | 'name'
  | 'description'
  | 'category'
  | 'enabledByDefault'
>;

const normalizePluginManifestBaseFields = (
  value: Record<string, unknown>
): PluginManifestBaseFields | null => {
  if (value.schemaVersion !== 1) return null;

  const id = normalizeRequiredString(value.id);
  if (!id) return null;

  const version = normalizeRequiredString(value.version);
  if (!version) return null;

  if (value.kind !== 'local') return null;

  const name = normalizePluginI18nText(value.name);
  if (!name) return null;

  const description = normalizePluginI18nText(value.description);
  if (!description) return null;

  if (!isPluginCategory(value.category)) return null;
  if (typeof value.enabledByDefault !== 'boolean') return null;

  return {
    schemaVersion: 1,
    id: id as PluginId,
    version,
    kind: value.kind,
    name,
    description,
    category: value.category,
    enabledByDefault: value.enabledByDefault
  };
};

type PluginManifestOptionalContracts = Pick<
  PluginPackageManifest,
  'storage' | 'signature' | 'publisher' | 'nativeHost'
>;

const normalizeOptionalPluginContracts = (
  value: Record<string, unknown>
): PluginManifestOptionalContracts | null => {
  const storage = normalizeOptionalField(
    value.storage,
    normalizePluginStorageContract
  );
  if (storage === null) return null;

  const signature = normalizeOptionalField(
    value.signature,
    normalizePluginPackageSignature
  );
  if (signature === null) return null;

  const publisher = normalizeOptionalField(
    value.publisher,
    normalizePluginPublisherDescriptor
  );
  if (publisher === null) return null;

  const nativeHost = normalizeOptionalField(
    value.nativeHost,
    normalizePluginNativeHostSecurity
  );
  if (nativeHost === null) return null;

  return { storage, signature, publisher, nativeHost };
};

const normalizeStringArray = (value: unknown): string[] | undefined =>
  Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string')
    : undefined;

const readOptionalString = (value: unknown): string | undefined =>
  typeof value === 'string' ? value : undefined;

export const normalizePluginPackageManifest = (
  value: unknown
): PluginPackageManifest | null => {
  if (!isObject(value)) return null;

  const baseFields = normalizePluginManifestBaseFields(value);
  if (!baseFields) return null;

  const optionalContracts = normalizeOptionalPluginContracts(value);
  if (!optionalContracts) return null;

  return {
    ...baseFields,
    capabilities: isObject(value.capabilities)
      ? (value.capabilities as PluginPackageManifest['capabilities'])
      : undefined,
    resources: isObject(value.resources)
      ? (value.resources as PluginPackageManifest['resources'])
      : undefined,
    entry: isObject(value.entry)
      ? (value.entry as PluginPackageManifest['entry'])
      : undefined,
    ...optionalContracts,
    permissions: normalizeStringArray(value.permissions),
    dependencies: normalizeStringArray(value.dependencies),
    resourceFor: readOptionalString(value.resourceFor),
    compatibleAppVersion: readOptionalString(value.compatibleAppVersion),
    minAppVersion: readOptionalString(value.minAppVersion),
    repository: readOptionalString(value.repository),
    releaseUrl: readOptionalString(value.releaseUrl)
  };
};

const installTimeValue = (plugin: RegisteredPlugin): number => {
  const timestamp = plugin.installedAt ? Date.parse(plugin.installedAt) : NaN;
  return Number.isFinite(timestamp) ? timestamp : 0;
};

const compareLocalPluginsByInstallTime = (
  left: RegisteredPlugin,
  right: RegisteredPlugin
): number => {
  const timeDiff = installTimeValue(right) - installTimeValue(left);
  if (timeDiff !== 0) return timeDiff;
  return String(left.id).localeCompare(String(right.id));
};

export const loadLocalPluginPackages = (
  manifests: unknown[]
): LocalPluginPackage[] =>
  manifests
    .map((value): LocalPluginPackage | null => {
      const { manifest, packagePath, installedAt } = readManifestInput(value);
      const normalized = normalizePluginPackageManifest(manifest);
      if (!normalized) return null;

      const pluginPackage: LocalPluginPackage = {
        manifest: normalized,
        packagePath: packagePath ?? ''
      };
      if (installedAt) {
        pluginPackage.installedAt = installedAt;
      }
      return pluginPackage;
    })
    .filter(
      (pluginPackage): pluginPackage is LocalPluginPackage =>
        pluginPackage !== null
    );

export const loadLocalPluginManifests = (
  manifests: unknown[]
): PluginPackageManifest[] =>
  loadLocalPluginPackages(manifests).map(
    (pluginPackage) => pluginPackage.manifest
  );

export const loadPluginRegistry = (
  localManifests: unknown[] = []
): RegisteredPlugin[] => {
  const localPlugins = loadLocalPluginPackages(localManifests)
    .map((pluginPackage) =>
      createRegisteredPlugin(
        pluginPackage.manifest,
        'local',
        pluginPackage.packagePath || undefined,
        pluginPackage.installedAt
      )
    )
    .sort(compareLocalPluginsByInstallTime);

  const registered = [...localPlugins];

  const byId = new Map<PluginId, RegisteredPlugin>();
  for (const plugin of registered) {
    if (!byId.has(plugin.id)) {
      byId.set(plugin.id, plugin);
    }
  }

  return Array.from(byId.values());
};
