import type { SearchSourceProvider } from '../search';
import type { PluginFrontendRuntimeContext } from '../runtime';

interface ChatSearchHit {
  conversationId: string;
  title: string;
  updatedAt: string;
  excerpt: string;
  score: number;
}

export const createChatSearchProvider = (
  api: Pick<PluginFrontendRuntimeContext['api'], 'invoke'>
): Omit<SearchSourceProvider, 'pluginId'> => ({
  source: 'local-ai-conversations',
  async search(query, options) {
    const hits = await api.invoke<ChatSearchHit[]>(
      'local_ai_search_chat_histories',
      { query, deepSearch: options?.deepSearch ?? false, limit: 20 }
    );
    return [
      {
        source: 'local-ai-conversations',
        items: hits.map((hit) => ({
          id: hit.conversationId,
          title: hit.title,
          content: hit.excerpt,
          updated_at: hit.updatedAt,
          summarize: 'conversation' as const,
          score: hit.score,
          searchAction: {
            kind: 'conversation' as const,
            conversationId: hit.conversationId
          }
        }))
      }
    ];
  }
});
