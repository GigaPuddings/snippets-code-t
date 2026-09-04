import type {
  SearchSourceProvider,
  SearchSourceProviderPhase
} from '@/plugins/search';
import {
  DEFAULT_SEARCH_PROVIDER_TIMEOUT_MS,
  getUniversalSearchSourceDescriptor,
  getUniversalSearchSourcePriority,
  type UniversalSearchDomain
} from './sourceCatalog';

export type SearchSourceHealth = 'idle' | 'searching' | 'healthy' | 'failed';

export interface SearchSourceRuntimeState {
  key: string;
  pluginId: string;
  source: string;
  phase: SearchSourceProviderPhase;
  domain?: UniversalSearchDomain;
  priority: number;
  timeoutMs?: number;
  health: SearchSourceHealth;
  lastSearchedAt?: number;
  lastSuccessfulAt?: number;
  lastFailedAt?: number;
  lastDurationMs?: number;
  lastError?: string;
}

export interface SearchSourceRegistration extends SearchSourceProvider {
  domain?: UniversalSearchDomain;
  priority?: number;
  timeoutMs?: number;
}

const providerKey = (pluginId: string, source: string): string =>
  `${pluginId}:${source}`;

const toErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

export class SearchSourceRegistry {
  private readonly providers = new Map<string, SearchSourceRegistration>();
  private readonly states = new Map<string, SearchSourceRuntimeState>();

  register(provider: SearchSourceRegistration): void {
    const source = provider.source.trim();
    if (!source) {
      throw new Error(`搜索源 ${provider.pluginId} 缺少 source`);
    }

    const key = providerKey(String(provider.pluginId), source);
    const descriptor = getUniversalSearchSourceDescriptor(source);
    const phase = provider.phase ?? 'results';
    const priority =
      provider.priority ??
      descriptor?.priority ??
      getUniversalSearchSourcePriority(source);
    const domain = provider.domain ?? descriptor?.domain;
    const timeoutMs =
      provider.timeoutMs ??
      descriptor?.timeoutMs ??
      DEFAULT_SEARCH_PROVIDER_TIMEOUT_MS;
    this.providers.set(key, {
      ...provider,
      source,
      phase,
      domain,
      priority,
      timeoutMs
    });
    this.states.set(key, {
      ...this.states.get(key),
      key,
      pluginId: String(provider.pluginId),
      source,
      phase,
      domain,
      priority,
      timeoutMs,
      health: this.states.get(key)?.health ?? 'idle'
    });
  }

  unregisterPlugin(pluginId: string): void {
    for (const key of Array.from(this.providers.keys())) {
      if (key.startsWith(`${pluginId}:`)) {
        this.providers.delete(key);
        this.states.delete(key);
      }
    }
  }

  clear(): void {
    this.providers.clear();
    this.states.clear();
  }

  list(): SearchSourceRegistration[] {
    return Array.from(this.providers.values()).sort((a, b) => {
      const priorityDelta = (b.priority ?? 0) - (a.priority ?? 0);
      if (priorityDelta !== 0) return priorityDelta;

      return `${a.pluginId}:${a.source}`.localeCompare(
        `${b.pluginId}:${b.source}`
      );
    });
  }

  listEnabled(
    isPluginEnabled: (pluginId: string) => boolean
  ): SearchSourceRegistration[] {
    return this.list().filter((provider) =>
      isPluginEnabled(String(provider.pluginId))
    );
  }

  markSearching(
    provider: SearchSourceRegistration,
    startedAt = Date.now()
  ): void {
    this.patchState(provider, {
      health: 'searching',
      lastSearchedAt: startedAt,
      lastError: undefined
    });
  }

  markSuccess(
    provider: SearchSourceRegistration,
    startedAt: number,
    completedAt = Date.now()
  ): void {
    this.patchState(provider, {
      health: 'healthy',
      lastSuccessfulAt: completedAt,
      lastDurationMs: completedAt - startedAt,
      lastError: undefined
    });
  }

  markFailure(
    provider: SearchSourceRegistration,
    error: unknown,
    startedAt: number,
    completedAt = Date.now()
  ): void {
    this.patchState(provider, {
      health: 'failed',
      lastFailedAt: completedAt,
      lastDurationMs: completedAt - startedAt,
      lastError: toErrorMessage(error)
    });
  }

  getState(
    pluginId: string,
    source: string
  ): SearchSourceRuntimeState | undefined {
    return this.states.get(providerKey(pluginId, source));
  }

  getStates(): SearchSourceRuntimeState[] {
    return Array.from(this.states.values()).sort((a, b) => {
      const priorityDelta = b.priority - a.priority;
      if (priorityDelta !== 0) return priorityDelta;

      return a.key.localeCompare(b.key);
    });
  }

  private patchState(
    provider: SearchSourceRegistration,
    patch: Partial<SearchSourceRuntimeState>
  ): void {
    const source = provider.source.trim();
    const key = providerKey(String(provider.pluginId), source);
    const previous = this.states.get(key);
    const descriptor = getUniversalSearchSourceDescriptor(source);
    const phase = provider.phase ?? 'results';
    const priority =
      provider.priority ??
      descriptor?.priority ??
      getUniversalSearchSourcePriority(source);
    const timeoutMs =
      provider.timeoutMs ??
      descriptor?.timeoutMs ??
      DEFAULT_SEARCH_PROVIDER_TIMEOUT_MS;

    this.states.set(key, {
      ...previous,
      ...patch,
      key,
      pluginId: String(provider.pluginId),
      source,
      phase,
      domain: provider.domain ?? descriptor?.domain,
      priority,
      timeoutMs,
      health: patch.health ?? previous?.health ?? 'idle'
    });
  }
}

export const createSearchSourceRegistry = (): SearchSourceRegistry =>
  new SearchSourceRegistry();
