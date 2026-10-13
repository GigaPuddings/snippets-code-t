import { invoke } from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { listen } from '@tauri-apps/api/event';
import {
  isProductSearchAction,
  getSearchResultPluginId
} from '@/search/productActions';

export async function openProductSearchResult(
  item: ContentType
): Promise<void> {
  if (!isProductSearchAction(item.searchAction))
    throw new Error('Invalid search action');
  const requestId = crypto.randomUUID();
  const pluginId = getSearchResultPluginId(item);
  let unlisten: (() => void) | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const completion = new Promise<void>((resolve, reject) => {
    void listen<{ requestId: string; success: boolean; error?: string }>(
      'product-search-navigation-complete',
      ({ payload }) => {
        if (payload.requestId !== requestId) return;
        if (payload.success) resolve();
        else reject(new Error(payload.error || 'Navigation failed'));
      }
    )
      .then(async (stop) => {
        unlisten = stop;
        timer = setTimeout(
          () => reject(new Error('Navigation timed out')),
          18_000
        );
        try {
          await invoke('open_product_search_target', {
            request: {
              requestId,
              pluginId: pluginId ?? null,
              action: item.searchAction
            }
          });
        } catch (error) {
          reject(error);
        }
      })
      .catch(reject);
  });
  try {
    await completion;
    await getCurrentWindow().hide();
  } catch (error) {
    await invoke('cancel_search_navigation', { requestId }).catch(
      () => undefined
    );
    await getCurrentWindow()
      .show()
      .catch(() => undefined);
    await getCurrentWindow()
      .setFocus()
      .catch(() => undefined);
    throw error;
  } finally {
    if (timer) clearTimeout(timer);
    unlisten?.();
  }
}
