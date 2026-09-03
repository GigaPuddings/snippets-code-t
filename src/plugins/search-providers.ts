import {
  createSearchSourceRegistry,
  type SearchSourceRegistration,
  type SearchSourceRuntimeState
} from '@/search/sourceRegistry';

export const searchSourceRegistry = createSearchSourceRegistry();

export const registerSearchSourceProvider = (
  provider: SearchSourceRegistration
): void => {
  searchSourceRegistry.register(provider);
};

export const unregisterSearchSourceProvidersForPlugin = (
  pluginId: string
): void => {
  searchSourceRegistry.unregisterPlugin(pluginId);
};

export const getSearchSourceProviders = (): SearchSourceRegistration[] =>
  searchSourceRegistry.list();

export const getEnabledSearchSourceProviders = (
  isPluginEnabled: (pluginId: string) => boolean
): SearchSourceRegistration[] =>
  searchSourceRegistry.listEnabled(isPluginEnabled);

export const getSearchSourceRuntimeStates = (): SearchSourceRuntimeState[] =>
  searchSourceRegistry.getStates();
