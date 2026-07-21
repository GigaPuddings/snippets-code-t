import { invoke } from '@tauri-apps/api/core';
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
import { logger } from '@/utils/logger';

export interface ConfigContentNavigationPayload {
  fragmentId: string | number;
  categoryId?: string | number;
  preview?: boolean;
}

interface OpenConfigContentOptions {
  item: ContentType;
  preview?: boolean;
  closeSearchWindow: () => Promise<void>;
}

const storePendingNavigation = (
  item: ContentType,
  preview: boolean
): void => {
  const timestamp = Date.now();
  if (preview) {
    localStorage.setItem(
      'pendingSnippetOpen',
      JSON.stringify({
        fragmentId: item.id,
        content: item.content,
        categoryId: item.category_id,
        timestamp
      })
    );
    return;
  }

  localStorage.setItem(
    'pendingNavigation',
    JSON.stringify({
      fragmentId: item.id,
      categoryId: item.category_id,
      timestamp
    })
  );
};

const clearPendingNavigation = (): void => {
  localStorage.removeItem('pendingNavigation');
  localStorage.removeItem('pendingSnippetOpen');
};

export async function openSearchResultInConfig({
  item,
  preview = false,
  closeSearchWindow
}: OpenConfigContentOptions): Promise<void> {
  storePendingNavigation(item, preview);

  try {
    await closeSearchWindow();
    const configWindow = await WebviewWindow.getByLabel('config');

    if (!configWindow) {
      await invoke('hotkey_config_command');
      return;
    }

    await configWindow.show();
    await configWindow.setFocus();
    await configWindow.emit('navigate-to-config-content', {
        fragmentId: item.id,
        categoryId: item.category_id,
        preview
      } satisfies ConfigContentNavigationPayload);
  } catch (error) {
    clearPendingNavigation();
    logger.error('[搜索窗口] Failed to open config content:', error);
    throw error;
  }
}
