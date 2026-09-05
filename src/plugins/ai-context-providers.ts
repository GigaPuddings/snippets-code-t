import {
  aiContextProviderRegistry,
  type AiContextCollectionRequest,
  type AiContextKind,
  type AiContextProviderResult,
  type AiProviderCapability
} from '@/ai';

export interface RuntimeAiContextProviderRegistration {
  id: string;
  label?: string;
  kinds: readonly AiContextKind[];
  capabilities?: readonly AiProviderCapability[];
  priority?: number;
  collect(
    request: AiContextCollectionRequest
  ): AiContextProviderResult | Promise<AiContextProviderResult>;
}

export const registerPluginAiContextProvider = (
  pluginId: string,
  provider: RuntimeAiContextProviderRegistration
): void => {
  aiContextProviderRegistry.register({
    ...provider,
    pluginId
  });
};

export const unregisterAiContextProvidersForPlugin = (
  pluginId: string
): void => {
  aiContextProviderRegistry.unregisterPlugin(pluginId);
};
