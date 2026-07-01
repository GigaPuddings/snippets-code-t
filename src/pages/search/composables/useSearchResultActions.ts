import { invoke } from '@tauri-apps/api/core';
import { logger } from '@/utils/logger';
import { getPrimarySearchHistoryKey } from '@/hooks/searchRanking';
import { getSearchResultLaunchPath } from './useSearchResultPaths';
import { modal } from '@/utils/modal';

interface UseSearchResultActionsOptions {
  onClearSearch: () => void;
  clipboard?: Pick<Clipboard, 'writeText'>;
  copySuccessMessage?: string;
  copyFailedMessage?: string;
}

export function canCopySearchResultSnippet(item: ContentType): boolean {
  return item.type === 'code' && !['app', 'bookmark', 'search', 'file', 'tool'].includes(item.summarize ?? '');
}

export function useSearchResultActions(options: UseSearchResultActionsOptions) {
  const clipboard = options.clipboard ?? navigator.clipboard;

  async function showHideWindow(): Promise<void> {
    await invoke('show_hide_window_command', {
      label: 'search',
      context: 'selectItem'
    });
  }

  async function closeSearchWindow(): Promise<void> {
    await showHideWindow();
  }

  async function runAfterClosingSearchWindow(
    action: () => Promise<void> | void
  ): Promise<void> {
    await closeSearchWindow();
    await action();
  }

  async function openAppItem(item: ContentType) {
    await runAfterClosingSearchWindow(() =>
      invoke('open_app_command', { appPath: getSearchResultLaunchPath(item) })
    );
  }

  async function openExternalItem(item: ContentType) {
    await runAfterClosingSearchWindow(() =>
      invoke('open_url', { url: item.content })
    );
  }

  async function openFileItem(item: ContentType) {
    await runAfterClosingSearchWindow(() =>
      invoke('open_file_with_default_app', { filePath: getSearchResultLaunchPath(item) })
    );
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
      await invoke('insert_text_to_last_window', { text: item.content });
    } catch (error) {
      logger.error('[代码片段] 插入文本失败:', error);
      alert('文本复制或粘贴失败，请重试');
    }
  }

  async function copySnippetToClipboard(item: ContentType): Promise<boolean> {
    if (!canCopySearchResultSnippet(item)) {
      return false;
    }

    try {
      await clipboard.writeText(item.content);
      if (options.copySuccessMessage) {
        modal.success(options.copySuccessMessage);
      }
      return true;
    } catch (err) {
      logger.error('[代码片段] 复制失败:', err);
      if (options.copyFailedMessage) {
        modal.error(options.copyFailedMessage);
      }
      return false;
    }
  }

  function getItemPrimaryAction(item: ContentType) {
    if (item.summarize === 'app') return () => openAppItem(item);
    if (item.summarize === 'bookmark' || item.summarize === 'search')
      return () => openExternalItem(item);
    if (item.summarize === 'file') return () => openFileItem(item);
    if (item.summarize === 'tool') return () => copyToolResult(item);
    if (item.type === 'note') return () => openNoteItem(item);
    return () => copyAndInsertSnippet(item);
  }

  async function copyToolResult(item: ContentType) {
    await clipboard.writeText(item.content);
    if (options.copySuccessMessage) {
      modal.success(options.copySuccessMessage);
    }
    await closeSearchWindow();
  }

  async function runPrimaryAction(item: ContentType) {
    try {
      await invoke('add_search_history', { id: getPrimarySearchHistoryKey(item) });
    } catch (error) {
      logger.error('[搜索窗口] Failed to add search history:', error);
    }

    options.onClearSearch();
    await getItemPrimaryAction(item)();
  }

  return {
    showHideWindow,
    runPrimaryAction,
    canCopySnippet: canCopySearchResultSnippet,
    copySnippetToClipboard
  };
}
