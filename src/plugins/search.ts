import type { ContentType } from '@/types';
import type { PluginId } from './types';

export interface SearchSourceResult {
  source: string;
  items: ContentType[];
}

export interface SearchSourceProvider {
  pluginId: PluginId;
  source?: string;
  search(query: string): Promise<SearchSourceResult[]>;
}
