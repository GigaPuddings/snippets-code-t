/**
 * File Watcher Hook
 * 监听文件系统变化并触发 UI 更新
 */

import { onMounted, onUnmounted } from 'vue';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';

/**
 * 文件变化事件类型
 */
export interface FileChangeEvent {
  /** 事件类型 */
  type: 'created' | 'modified' | 'deleted';
  /** 文件路径 */
  path: string;
  /** 文件元数据（仅在 created 和 modified 时存在） */
  metadata?: {
    id: string;
    title: string;
    tags: string[];
    created: string;
    modified: string;
    type: 'snippet' | 'note';
    language?: string;
    favorite: boolean;
  };
}

/**
 * 冲突事件
 */
export interface ConflictEvent {
  /** 文件路径 */
  path: string;
  /** 外部版本内容 */
  externalContent: string;
  /** 应用版本内容 */
  appContent: string;
}

/**
 * 文件监听器 Hook
 * @param options 配置选项
 */
export function useFileWatcher(options: {
  /** 文件创建回调 */
  onFileCreated?: (event: FileChangeEvent) => void;
  /** 文件修改回调 */
  onFileModified?: (event: FileChangeEvent) => void;
  /** 文件删除回调 */
  onFileDeleted?: (event: FileChangeEvent) => void;
  /** 冲突回调 */
  onConflict?: (event: ConflictEvent) => void;
}) {
  let unlistenCreated: UnlistenFn | null = null;
  let unlistenModified: UnlistenFn | null = null;
  let unlistenDeleted: UnlistenFn | null = null;
  let unlistenConflict: UnlistenFn | null = null;

  onMounted(async () => {
    try {
      // 监听文件创建事件
      if (options.onFileCreated) {
        unlistenCreated = await listen<FileChangeEvent>('file-created', (event) => {
          options.onFileCreated?.(event.payload);
        });
      }

      // 监听文件修改事件
      if (options.onFileModified) {
        unlistenModified = await listen<FileChangeEvent>('file-modified', (event) => {
          options.onFileModified?.(event.payload);
        });
      }

      // 监听文件删除事件
      if (options.onFileDeleted) {
        unlistenDeleted = await listen<FileChangeEvent>('file-deleted', (event) => {
          options.onFileDeleted?.(event.payload);
        });
      }

      // 监听冲突事件
      if (options.onConflict) {
        unlistenConflict = await listen<ConflictEvent>('file-conflict', (event) => {
          options.onConflict?.(event.payload);
        });
      }
    } catch (error) {
      console.error('Failed to set up file watcher:', error);
    }
  });

  onUnmounted(() => {
    // 清理事件监听器
    unlistenCreated?.();
    unlistenModified?.();
    unlistenDeleted?.();
    unlistenConflict?.();
  });
}
