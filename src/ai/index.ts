export {
  aiProviderRegistry,
  createAiProviderRegistry,
  AiProviderRegistry
} from './providerRegistry';
export type {
  AiChatRequest,
  AiChatResponse,
  AiContentPart,
  AiContextItem,
  AiContextKind,
  AiMessage,
  AiProvider,
  AiProviderCapability,
  AiProviderListOptions,
  AiProviderStatus,
  AiRequestContext,
  AiTranslateRequest,
  AiTranslateResponse
} from './providerRegistry';
export { LOCAL_AI_PROVIDER_ID, localAiProvider } from './localAiProvider';
export { ensureBuiltinAiProvidersRegistered } from './builtinProviders';
export {
  ensureBuiltinAiContextProvidersRegistered,
  SEARCH_AI_CONTEXT_PROVIDER_ID,
  SELECTION_AI_CONTEXT_PROVIDER_ID,
  WORKSPACE_AI_CONTEXT_PROVIDER_ID
} from './builtinContextProviders';
export type { BuiltinAiContextProviderRuntime } from './builtinContextProviders';
export {
  getAiProviderStatusSnapshots,
  listAiProviders
} from './providerStatus';
export type {
  AiProviderDescriptor,
  AiProviderStatusSnapshot
} from './providerStatus';
export {
  AI_CONTEXT_ITEM_MAX_LENGTH,
  AI_CONTEXT_MAX_ITEMS,
  createAiContextItem,
  createAiRequestContext,
  createSearchAiContext,
  createSelectionAiContext,
  createWorkspaceAiContext,
  formatAiRequestContext,
  mergeAiRequestContexts,
  normalizeAiRequestContext,
  withAiRequestContext
} from './context';
export type { AiContextItemInput, AiContextOptions } from './context';
export {
  aiContextProviderRegistry,
  collectAiRequestContext,
  createAiContextProviderRegistry,
  AiContextProviderRegistry
} from './contextRegistry';
export type {
  AiContextCollectionOptions,
  AiContextCollectionRequest,
  AiContextOperation,
  AiContextProviderListOptions,
  AiContextProviderRegistration,
  AiContextProviderResult
} from './contextRegistry';
export type {
  AiContextCollectionControl,
  AiContextCollectionProviderOptions
} from './requestContext';
export {
  getAiProviderStatus,
  startAiProvider,
  chatWithAi,
  translateWithAi
} from './service';
export type { AiProviderRequestOptions } from './service';
export {
  AI_PROVIDER_CAPABILITIES,
  AI_PROVIDER_PREFERENCES_CONFIG_KEY,
  getAiProviderPreferences,
  isAiProviderCapability,
  normalizeAiProviderPreferences,
  saveAiProviderPreferences,
  setAiProviderPreference
} from './preferences';
export type { AiProviderPreferenceMap } from './preferences';
