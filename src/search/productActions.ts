/** Serializable actions only; search results never supply executable commands. */
export type ProductSearchAction =
  | {
      kind: 'page';
      routeName: string;
      params?: Record<string, string>;
      query?: Record<string, string>;
    }
  | { kind: 'settings'; tabId: string }
  | { kind: 'new-chat' }
  | { kind: 'conversation'; conversationId: string };

export interface ProductSearchNavigationRequest {
  requestId: string;
  pluginId?: string | null;
  action: ProductSearchAction;
}

const isStringRecord = (value: unknown): value is Record<string, string> =>
  value === undefined ||
  (typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.entries(value).length <= 16 &&
    Object.entries(value).every(
      ([key, item]) =>
        /^[a-zA-Z][\w-]{0,63}$/.test(key) &&
        typeof item === 'string' &&
        item.length <= 512
    ));

export const isProductSearchAction = (
  value: unknown
): value is ProductSearchAction => {
  if (typeof value !== 'object' || value === null || Array.isArray(value))
    return false;
  const action = value as Record<string, unknown>;
  const validId = (id: unknown) =>
    typeof id === 'string' &&
    id.length > 0 &&
    id.length <= 256 &&
    !/[\u0000-\u001f]/.test(id);
  if (action.kind === 'page')
    return (
      validId(action.routeName) &&
      isStringRecord(action.params) &&
      isStringRecord(action.query)
    );
  if (action.kind === 'settings') return validId(action.tabId);
  if (action.kind === 'conversation') return validId(action.conversationId);
  return action.kind === 'new-chat';
};

export const getSearchResultPluginId = (item: {
  metadata?: Record<string, unknown> | null;
}): string | undefined =>
  typeof item.metadata?.plugin_id === 'string'
    ? item.metadata.plugin_id
    : undefined;
