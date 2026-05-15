/**
 * 应用初始化模块
 * 负责应用启动时的各种初始化任务
 * 
 * 架构说明：
 * - App.vue: 只设置基础事件监听器（语言变更）
 * - Config 页面: 设置 Git 相关事件监听器 + Git 初始化
 */

import { invoke } from '@tauri-apps/api/core';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { setLocale, type LocaleType } from '@/i18n';
import { cleanupCache } from '@/api/markdown';
import { logger } from '@/utils/logger';

export { closeWindowByLabel, shouldCloseWindowOnEscape } from '@/utils/window-shortcuts';

/**
 * 基础事件监听器（所有窗口通用）
 */
export interface BaseEventListeners {
  languageChange: UnlistenFn | null;
}

/**
 * 检查是否应该执行初始化（防抖机制）
 */
export async function checkShouldInitialize(): Promise<boolean> {
  try {
    await invoke('register_app_init_request');
    const shouldInitialize = await invoke<boolean>('should_execute_app_init');

    if (!shouldInitialize) {
      logger.warn('[AppInit] ⚠️ 检测到重复挂载或非最后窗口，跳过初始化');
      return false;
    }

    logger.info('[AppInit] ✅ 最后一个窗口挂载，开始初始化');
    return true;
  } catch (error) {
    logger.error('[AppInit] 防抖检查失败', error);
    return false;
  }
}

/**
 * 设置基础事件监听器（所有窗口通用）
 * 只监听语言变更事件
 */
export async function setupBaseEventListeners(): Promise<BaseEventListeners> {
  const currentWindow = getCurrentWindow();
  const windowLabel = currentWindow.label;

  logger.info(`[AppInit] [${windowLabel}] 🎧 设置基础事件监听器...`);

  const listeners: BaseEventListeners = {
    languageChange: null
  };

  // 监听语言变更事件
  listeners.languageChange = await listen<{ language: LocaleType }>('language-changed', (event) => {
    setLocale(event.payload.language);
  });

  logger.info(`[AppInit] [${windowLabel}] ✅ 基础事件监听器设置完成`);

  return listeners;
}

/**
 * 清理缓存
 */
export async function initCleanupCache(): Promise<void> {
  try {
    const removedCount = await cleanupCache();
    if (removedCount > 0) {
      logger.info(`[AppInit] 清理了 ${removedCount} 个已删除文件的元数据`);
    }
  } catch (error) {
    logger.error('[AppInit] 清理缓存失败', error);
  }
}

/**
 * 清理基础事件监听器
 */
export function cleanupBaseEventListeners(listeners: BaseEventListeners): void {
  if (listeners.languageChange) {
    listeners.languageChange();
  }
}
