import {
  aiProviderRegistry,
  type AiProvider,
  type AiProviderCapability,
  type AiProviderListOptions,
  type AiProviderRegistry,
  type AiProviderStatus
} from './providerRegistry';
import { ensureBuiltinAiProvidersRegistered } from './builtinProviders';

export interface AiProviderDescriptor {
  id: string;
  label: string;
  pluginId?: string;
  capabilities: readonly AiProviderCapability[];
  priority?: number;
  canStart: boolean;
}

export interface AiProviderStatusSnapshot extends AiProviderDescriptor {
  status: AiProviderStatus;
}

const ensureDefaultRegistry = (registry: AiProviderRegistry): void => {
  if (registry === aiProviderRegistry) {
    ensureBuiltinAiProvidersRegistered(registry);
  }
};

const describeProvider = (provider: AiProvider): AiProviderDescriptor => ({
  id: provider.id,
  label: provider.label,
  pluginId: provider.pluginId,
  capabilities: provider.capabilities,
  priority: provider.priority,
  canStart: Boolean(provider.start)
});

const defaultProviderStatus = (provider: AiProvider): AiProviderStatus => ({
  providerId: provider.id,
  available: true,
  healthy: true
});

const providerErrorStatus = (
  provider: AiProvider,
  error: unknown
): AiProviderStatus => ({
  providerId: provider.id,
  available: false,
  healthy: false,
  lastError: error instanceof Error ? error.message : String(error)
});

const readProviderStatus = async (
  provider: AiProvider
): Promise<AiProviderStatus> => {
  if (!provider.getStatus) {
    return defaultProviderStatus(provider);
  }
  const getStatus = provider.getStatus;

  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      Promise.resolve().then(() => getStatus()),
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => {
          reject(
            new Error(
              `AI provider ${provider.id} status probe timed out after 5000ms`
            )
          );
        }, 5000);
      })
    ]);
  } catch (error) {
    return providerErrorStatus(provider, error);
  } finally {
    clearTimeout(timer);
  }
};

export const listAiProviders = (
  options: AiProviderListOptions = {},
  registry: AiProviderRegistry = aiProviderRegistry
): AiProviderDescriptor[] => {
  ensureDefaultRegistry(registry);
  return registry.list(options).map(describeProvider);
};

export const getAiProviderStatusSnapshots = async (
  options: AiProviderListOptions = {},
  registry: AiProviderRegistry = aiProviderRegistry
): Promise<AiProviderStatusSnapshot[]> => {
  ensureDefaultRegistry(registry);
  return await Promise.all(
    registry.list(options).map(async (provider) => ({
      ...describeProvider(provider),
      status: await readProviderStatus(provider)
    }))
  );
};
