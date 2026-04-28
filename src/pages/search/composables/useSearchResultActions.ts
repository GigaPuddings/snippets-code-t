import { invoke } from '@tauri-apps/api/core';
import { processTemplate } from '@/utils/templateParser';
import { logger } from '@/utils/logger';
import { getRawSearchResultId } from './useSearchResultDisplay';

interface UseSearchResultActionsOptions {
  onClearSearch: () => void;
}

export function useSearchResultActions(options: UseSearchResultActionsOptions) {
  async function showHideWindow(): Promise<void> {
    await invoke('show_hide_window_command', {
      label: 'search',
      context: 'selectItem'
    });
  }

  async function closeSearchWindow(): Promise<void> {
    await showHideWindow();
  }

  async function runAfterClosingSearchWindow(action: () => Promise<void> | void): Promise<void> {
    await closeSearchWindow();
    await action();
  }

  async function openAppItem(item: ContentType) {
    await runAfterClosingSearchWindow(() => invoke('open_app_command', { appPath: item.content }));
  }

  async function openExternalItem(item: ContentType) {
    await runAfterClosingSearchWindow(() => invoke('open_url', { url: item.content }));
  }

  async function openNoteItem(item: ContentType) {
    try {
      const navigationData = {
        fragmentId: item.id,
        categoryId: item.category_id,
        timestamp: Date.now()
      };
      localStorage.setItem('pendingNavigation', JSON.stringify(navigationData));

      await closeSearchWindow();

      const { WebviewWindow } = await import('@tauri-apps/api/webviewWindow');
      const configWindow = await WebviewWindow.getByLabel('config');

      if (configWindow) {
        await configWindow.show();
        await configWindow.setFocus();
        await configWindow.emit('check-pending-navigation', {});
      } else {
        await invoke('hotkey_config_command');
      }
    } catch (err) {
      logger.error('[搜索窗口] Failed to open config window:', err);
      localStorage.removeItem('pendingNavigation');
    }
  }

  async function copyAndInsertSnippet(item: ContentType) {
    try {
      const result = await processTemplate(item.content);
      await navigator.clipboard.writeText(result.content);
    } catch (err) {
      logger.error('[代码片段] 复制失败:', err);
      return;
    }

    await closeSearchWindow();

    setTimeout(async () => {
      try {
        await invoke('insert_text_to_last_window', { text: item.content });
      } catch (error) {
        logger.error('[代码片段] 插入文本失败:', error);
        alert('文本已复制到剪贴板，请手动粘贴 (Ctrl+V)');
      }
    }, 300);
  }

  function getItemPrimaryAction(item: ContentType) {
    if (item.summarize === 'app') return () => openAppItem(item);
    if (item.summarize === 'bookmark' || item.summarize === 'search' || item.summarize === 'file') return () => openExternalItem(item);
    if (item.type === 'note') return () => openNoteItem(item);
    return () => copyAndInsertSnippet(item);
  }

  async function runPrimaryAction(item: ContentType) {
    invoke('add_search_history', { id: getRawSearchResultId(item) });
    options.onClearSearch();
    await getItemPrimaryAction(item)();
  }

  return {
    showHideWindow,
    runPrimaryAction
  };
}
