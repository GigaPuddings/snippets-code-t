import { invoke } from '@tauri-apps/api/core';
import { openNewLocalAiChat } from '@/api/localAi';
import { getCurrentWindow } from '@tauri-apps/api/window';
import type { RouteLocationRaw, Router } from 'vue-router';
import {
  getConfigSettingsTarget,
  navigateConfigRoute
} from '@/utils/config-navigation';
import { usePluginStore } from '@/store';
import { getVisibleSettingsMenuItems } from '@/plugins/settings';
import { installRuntimePluginRoutes } from '@/plugins/runtime';
import { getSearchSourceProviders } from '@/plugins/search-providers';
import { configNavigationTabs } from '@/plugins/navigation';
import type { ProductSearchNavigationRequest } from '@/search/productActions';
import { isProductSearchAction } from '@/search/productActions';

/** Config alone consumes the backend queue, including after a cold WebView mount. */
export function useProductSearchNavigation(router: Router) {
  const pluginStore = usePluginStore();
  const unlisteners: Array<() => void> = [];
  let processing = false;
  const navigate = async (target: RouteLocationRaw): Promise<void> => {
    await navigateConfigRoute(router, target);
  };
  const drain = async (): Promise<void> => {
    if (processing) return;
    processing = true;
    let request: ProductSearchNavigationRequest | null = null;
    try {
      request = await invoke<ProductSearchNavigationRequest | null>(
        'get_pending_search_navigation'
      );
      if (!request) return;
      if (!isProductSearchAction(request.action))
        throw new Error('Invalid search target');
      await pluginStore.initialize();
      if (request.pluginId) {
        if (!pluginStore.isEnabled(request.pluginId))
          throw new Error('Plugin is disabled');
        const action = request.action;
        const routeName =
          action.kind === 'page' ? action.routeName : 'LocalAiChat';
        const alreadyRegistered =
          action.kind === 'settings'
            ? getVisibleSettingsMenuItems(pluginStore.plugins, (id) =>
                pluginStore.isEnabled(id)
              ).some(
                (item) =>
                  item.id === action.tabId &&
                  item.pluginId === request?.pluginId
              )
            : router.hasRoute(routeName);
        if (!alreadyRegistered) {
          await pluginStore.loadEnabledPluginEntry(request.pluginId);
          installRuntimePluginRoutes(router);
        }
      }
      const action = request.action;
      if (action.kind === 'new-chat' || action.kind === 'conversation') {
        // Previous Local AI packages already handle the native new-chat queue.
        if (
          action.kind === 'new-chat' &&
          !getSearchSourceProviders().some(
            (provider) =>
              provider.pluginId === 'local-ai' &&
              provider.source === 'local-ai-conversations'
          )
        ) {
          await openNewLocalAiChat();
          await invoke('finish_search_navigation', {
            requestId: request.requestId,
            success: true,
            error: null
          });
          return;
        }
        await navigate({
          name: 'LocalAiChat',
          query: { searchRequest: request.requestId }
        });
        // The plugin acknowledges after its histories are ready (or queues during generation).
        return;
      }
      if (action.kind === 'settings') {
        const tab = getVisibleSettingsMenuItems(pluginStore.plugins, (id) =>
          pluginStore.isEnabled(id)
        ).find(
          (item) =>
            item.id === action.tabId &&
            item.pluginId === (request?.pluginId ?? undefined)
        );
        if (!tab || tab.pluginId !== (request.pluginId ?? undefined))
          throw new Error('Settings target is unavailable');
        await navigate(getConfigSettingsTarget(action.tabId));
      } else {
        if (!router.hasRoute(action.routeName))
          throw new Error('Route is unavailable');
        const corePath = !request.pluginId
          ? (configNavigationTabs.find(
              (tab) => !tab.pluginId && tab.routeName === action.routeName
            )?.path ??
            (action.routeName === 'User'
              ? '/config/category/contentList/user'
              : undefined))
          : undefined;
        const target = corePath
          ? router.resolve(corePath)
          : router.resolve({
              name: action.routeName,
              params: action.params,
              query: action.query
            });
        const owner = target.matched
          .map((record) => record.meta.pluginId)
          .find(Boolean);
        if (
          !target.path.startsWith('/config/') ||
          owner !== (request.pluginId ?? undefined)
        )
          throw new Error('Route does not belong to the search source');
        await navigate(target);
      }
      await invoke('finish_search_navigation', {
        requestId: request.requestId,
        success: true,
        error: null
      });
    } catch (error) {
      if (request)
        await invoke('finish_search_navigation', {
          requestId: request.requestId,
          success: false,
          error: String(error)
        });
    } finally {
      processing = false;
    }
  };
  const setup = async (): Promise<void> => {
    const window = getCurrentWindow();
    unlisteners.push(await window.listen('product-search-navigation', drain));
    unlisteners.push(
      await window.onFocusChanged(({ payload }) => {
        if (payload) void drain();
      })
    );
    await drain();
  };
  return {
    setup,
    cleanup: () => unlisteners.splice(0).forEach((stop) => stop())
  };
}
