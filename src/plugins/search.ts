import type { ContentType } from '@/types';
import type { PluginId } from './types';

export type SearchSourceProviderPhase = 'preflight' | 'results' | 'append';

export type SearchSourceResultIntent = 'engine-shortcut' | 'results';

export interface SearchSourceResult {
  source: string;
  items: ContentType[];
  intent?: SearchSourceResultIntent;
  exclusive?: boolean;
}

export interface SearchSourceProvider {
  pluginId: PluginId;
  source: string;
  phase?: SearchSourceProviderPhase;
  search(query: string): Promise<SearchSourceResult[]>;
}
