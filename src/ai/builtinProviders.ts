import {
  aiProviderRegistry,
  type AiProviderRegistry
} from './providerRegistry';
import { LOCAL_AI_PROVIDER_ID, localAiProvider } from './localAiProvider';

export const ensureBuiltinAiProvidersRegistered = (
  registry: AiProviderRegistry = aiProviderRegistry
): void => {
  if (!registry.get(LOCAL_AI_PROVIDER_ID)) {
    registry.register(localAiProvider);
  }
};
