import type {
  SearchSourceProviderPhase,
  SearchSourceResult
} from '@/plugins/search';
import type { SearchEngine } from '@/types';
import {
  createDefaultSearchResult,
  createEngineShortcutResult,
  findSearchEngine
} from './searchRuntime';

export interface SearchEngineProviderRuntime {
  loadSearchEngines(): Promise<SearchEngine[]>;
}

export interface SearchEngineSearchProviderRegistration {
  source: string;
  phase: SearchSourceProviderPhase;
  search(query: string): Promise<SearchSourceResult[]>;
}

const loadConfiguredSearchEngines = async (
  runtime: SearchEngineProviderRuntime
): Promise<SearchEngine[]> => {
  const engines = await runtime.loadSearchEngines();
  return Array.isArray(engines) ? engines : [];
};

export const createSearchEngineShortcutProvider = (
  runtime: SearchEngineProviderRuntime
): SearchEngineSearchProviderRegistration => ({
  source: 'engine-shortcut',
  phase: 'preflight',
  async search(text) {
    const match = findSearchEngine(
      await loadConfiguredSearchEngines(runtime),
      text,
      false
    );
    if (!match) return [];

    return [
      {
        source: 'engine-shortcut',
        intent: 'engine-shortcut',
        exclusive: true,
        items: [createEngineShortcutResult(match.engine, match.query)]
      }
    ];
  }
});

export const createSearchEngineDefaultProvider = (
  runtime: SearchEngineProviderRuntime
): SearchEngineSearchProviderRegistration => ({
  source: 'default-search',
  phase: 'append',
  async search(text) {
    const query = text.trim().toLowerCase();
    if (!query) return [];

    const defaultEngine = (await loadConfiguredSearchEngines(runtime)).find(
      (engine) => engine.enabled
    );
    if (!defaultEngine) return [];

    return [
      {
        source: 'default-search',
        items: [createDefaultSearchResult(defaultEngine, query)]
      }
    ];
  }
});
