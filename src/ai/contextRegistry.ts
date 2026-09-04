import {
  createAiRequestContext,
  mergeAiRequestContexts,
  normalizeAiRequestContext,
  type AiContextItemInput,
  type AiContextOptions
} from './context';
import type {
  AiContextKind,
  AiProviderCapability,
  AiRequestContext
} from './providerRegistry';

export type AiContextOperation = 'chat' | 'translation';

export interface AiContextCollectionRequest {
  kind?: AiContextKind;
  capability?: AiProviderCapability;
  operation?: AiContextOperation;
  providerId?: string;
  input?: Record<string, unknown>;
}

export type AiContextProviderResult =
  | AiRequestContext
  | AiContextItemInput
  | readonly AiContextItemInput[]
  | null
  | undefined;

export interface AiContextProviderRegistration {
  id: string;
  label?: string;
  pluginId?: string;
  kinds: readonly AiContextKind[];
  capabilities?: readonly AiProviderCapability[];
  priority?: number;
  collect(
    request: AiContextCollectionRequest
  ): AiContextProviderResult | Promise<AiContextProviderResult>;
}

export interface AiContextProviderListOptions
  extends AiContextCollectionRequest {
  isPluginEnabled?: (pluginId: string) => boolean;
}

export interface AiContextCollectionOptions
  extends AiContextProviderListOptions,
    AiContextOptions {}

const contextKinds = new Set<AiContextKind>([
  'workspace',
  'selection',
  'search'
]);
const providerCapabilities = new Set<AiProviderCapability>([
  'chat',
  'vision',
  'translation'
]);

const providerKey = (
  provider: Pick<AiContextProviderRegistration, 'id' | 'pluginId'>
): string => `${provider.pluginId ?? 'core'}:${provider.id}`;

const isContextKind = (value: unknown): value is AiContextKind =>
  typeof value === 'string' && contextKinds.has(value as AiContextKind);

const isProviderCapability = (value: unknown): value is AiProviderCapability =>
  typeof value === 'string' &&
  providerCapabilities.has(value as AiProviderCapability);

const isRequestContext = (value: unknown): value is AiRequestContext =>
  typeof value === 'object' &&
  value !== null &&
  Array.isArray((value as AiRequestContext).items);

const isContextItemInput = (value: unknown): value is AiContextItemInput =>
  typeof value === 'object' &&
  value !== null &&
  isContextKind((value as AiContextItemInput).kind) &&
  'content' in value;

const normalizeKinds = (
  providerId: string,
  kinds: readonly AiContextKind[]
): AiContextKind[] => {
  const normalized = Array.from(new Set(kinds));
  if (!normalized.length || normalized.some((kind) => !isContextKind(kind))) {
    throw new Error(`AI context provider ${providerId} 缺少有效 kind`);
  }
  return normalized;
};

const normalizeCapabilities = (
  capabilities: readonly AiProviderCapability[] | undefined
): AiProviderCapability[] | undefined => {
  if (!capabilities) return undefined;

  const normalized = Array.from(new Set(capabilities));
  if (
    !normalized.length ||
    normalized.some((capability) => !isProviderCapability(capability))
  ) {
    throw new Error('AI context provider 缺少有效 capability');
  }
  return normalized;
};

const supportsKind = (
  provider: AiContextProviderRegistration,
  kind?: AiContextKind
): boolean => !kind || provider.kinds.includes(kind);

const supportsCapability = (
  provider: AiContextProviderRegistration,
  capability?: AiProviderCapability
): boolean =>
  !capability ||
  !provider.capabilities ||
  provider.capabilities.includes(capability);

const isProviderEnabled = (
  provider: AiContextProviderRegistration,
  isPluginEnabled?: (pluginId: string) => boolean
): boolean =>
  !provider.pluginId || !isPluginEnabled || isPluginEnabled(provider.pluginId);

const contextOptionsFrom = (
  options: AiContextCollectionOptions
): AiContextOptions => ({
  maxItemLength: options.maxItemLength,
  maxItems: options.maxItems
});

const requestFromOptions = (
  options: AiContextCollectionOptions
): AiContextCollectionRequest => ({
  kind: options.kind,
  capability: options.capability,
  operation: options.operation,
  providerId: options.providerId,
  input: options.input
});

const normalizeProviderResult = (
  provider: AiContextProviderRegistration,
  result: AiContextProviderResult,
  options: AiContextOptions
): AiRequestContext | undefined => {
  if (!result) return undefined;
  if (isRequestContext(result)) {
    return normalizeAiRequestContext(result, options);
  }
  if (Array.isArray(result)) {
    return createAiRequestContext(result, options);
  }
  if (isContextItemInput(result)) {
    return createAiRequestContext([result], options);
  }
  throw new Error(`AI context provider ${provider.id} 返回无效上下文`);
};

export class AiContextProviderRegistry {
  private readonly providers = new Map<string, AiContextProviderRegistration>();

  register(provider: AiContextProviderRegistration): void {
    const id = provider.id.trim();
    if (!id) {
      throw new Error('AI context provider 缺少稳定 id');
    }

    const pluginId = provider.pluginId?.trim() || undefined;

    this.providers.set(providerKey({ id, pluginId }), {
      ...provider,
      id,
      pluginId,
      kinds: normalizeKinds(id, provider.kinds),
      capabilities: normalizeCapabilities(provider.capabilities)
    });
  }

  unregisterPlugin(pluginId: string): void {
    for (const [key, provider] of Array.from(this.providers.entries())) {
      if (provider.pluginId === pluginId) {
        this.providers.delete(key);
      }
    }
  }

  clear(): void {
    this.providers.clear();
  }

  list(
    options: AiContextProviderListOptions = {}
  ): AiContextProviderRegistration[] {
    return Array.from(this.providers.values())
      .filter(
        (provider) =>
          supportsKind(provider, options.kind) &&
          supportsCapability(provider, options.capability) &&
          isProviderEnabled(provider, options.isPluginEnabled)
      )
      .sort((a, b) => {
        const priorityDelta = (b.priority ?? 0) - (a.priority ?? 0);
        if (priorityDelta !== 0) return priorityDelta;
        return providerKey(a).localeCompare(providerKey(b));
      });
  }

  async collect(
    options: AiContextCollectionOptions = {}
  ): Promise<AiRequestContext | undefined> {
    const request = requestFromOptions(options);
    const contextOptions = contextOptionsFrom(options);
    const contexts = await Promise.all(
      this.list(options).map(async (provider) =>
        normalizeProviderResult(
          provider,
          await provider.collect(request),
          contextOptions
        )
      )
    );
    return mergeAiRequestContexts(contexts, contextOptions);
  }
}

export const createAiContextProviderRegistry = (): AiContextProviderRegistry =>
  new AiContextProviderRegistry();

export const aiContextProviderRegistry = createAiContextProviderRegistry();

export const collectAiRequestContext = async (
  options: AiContextCollectionOptions = {},
  registry: AiContextProviderRegistry = aiContextProviderRegistry
): Promise<AiRequestContext | undefined> => registry.collect(options);
