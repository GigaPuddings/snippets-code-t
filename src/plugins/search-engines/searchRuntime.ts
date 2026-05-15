import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import type { ContentType, SearchEngine } from '@/types';
import type { usePluginStore } from '@/store';

type PluginStore = ReturnType<typeof usePluginStore>;

export const loadSearchEngines = async (pluginStore: PluginStore): Promise<SearchEngine[]> => {
  if (!pluginStore.isEnabled('search-engines')) {
    return [];
  }

  const engines = await invoke<SearchEngine[]>('get_search_engines');
  return Array.isArray(engines) ? engines : [];
};

export const listenSearchEngineUpdates = async (onUpdate: (engines: SearchEngine[]) => void): Promise<void> => {
  await listen('search-engines-updated', (event: { payload: unknown }) => {
    if (Array.isArray(event.payload)) {
      onUpdate(event.payload as SearchEngine[]);
    }
  });
};

export const findSearchEngine = (
  engines: SearchEngine[],
  text: string,
  forceSearch = false
): { engine: SearchEngine; query: string } | null => {
  const parts = text.trim().split(/\s+/);
  if (!((parts.length >= 2 || forceSearch) && parts.length > 0)) {
    return null;
  }

  const keyword = parts[0];
  const query = parts.slice(1).join(' ');
  const engine = engines.find((item) => item.name === keyword)
    ?? engines.find((item) => item.keyword === keyword);

  return engine ? { engine, query } : null;
};

export const createEngineShortcutResult = (
  engine: SearchEngine,
  query: string
): ContentType => ({
  id: `search-${engine.id}`,
  title: `使用 ${engine.name} 搜索: ${query}`,
  content: engine.url.replace('%s', encodeURIComponent(query || '')),
  summarize: 'search',
  icon: engine.icon
});

export const openSearchEngine = async (engine: SearchEngine, query: string): Promise<void> => {
  const searchUrl = engine.url.replace('%s', encodeURIComponent(query || ''));
  await invoke('open_url', { url: searchUrl });
  await invoke('show_hide_window_command', { label: 'search' });
};

export const getDefaultSearchEngine = (
  pluginStore: PluginStore,
  engines: SearchEngine[]
): SearchEngine | undefined => (
  pluginStore.isEnabled('search-engines')
    ? engines.find((engine) => engine.enabled)
    : undefined
);

export const createDefaultSearchResult = (
  engine: SearchEngine,
  query: string
): ContentType => ({
  id: 'default-search',
  title: `使用 ${engine.name} 搜索: ${query}`,
  content: engine.url.replace('%s', encodeURIComponent(query)),
  summarize: 'search',
  icon: engine.icon
});
