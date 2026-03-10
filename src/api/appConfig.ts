/**
 * 应用配置 API
 * 管理 .snippets-code/app.json 配置文件
 */

import { invoke } from '@tauri-apps/api/core';
import type { AppConfig, GitSettings } from '@/types/models';

/**
 * 获取应用配置
 * @returns 应用配置
 */
export async function getAppConfig(): Promise<AppConfig> {
  try {
    return await invoke<AppConfig>('get_app_config');
  } catch (error) {
    throw new Error(`获取应用配置失败: ${error}`);
  }
}

/**
 * 更新应用配置
 * @param config 新的应用配置
 */
export async function updateAppConfig(config: AppConfig): Promise<void> {
  try {
    await invoke('update_app_config', { config });
  } catch (error) {
    throw new Error(`更新应用配置失败: ${error}`);
  }
}

/**
 * 获取 Git 设置
 * @returns Git 设置
 */
export async function getGitSettings(): Promise<GitSettings> {
  try {
    return await invoke<GitSettings>('get_git_settings_command');
  } catch (error) {
    throw new Error(`获取 Git 设置失败: ${error}`);
  }
}

/**
 * 更新 Git 设置
 * @param settings 新的 Git 设置
 */
export async function updateGitSettings(settings: GitSettings): Promise<void> {
  try {
    await invoke('update_git_settings_command', { settings });
  } catch (error) {
    throw new Error(`更新 Git 设置失败: ${error}`);
  }
}

/**
 * 更新主题设置
 * @param theme 主题名称
 */
export async function updateThemeConfig(theme: string): Promise<void> {
  try {
    await invoke('update_theme_config', { theme });
  } catch (error) {
    throw new Error(`更新主题设置失败: ${error}`);
  }
}

/**
 * 更新语言设置
 * @param language 语言代码
 */
export async function updateLanguageConfig(language: string): Promise<void> {
  try {
    await invoke('update_language_config', { language });
  } catch (error) {
    throw new Error(`更新语言设置失败: ${error}`);
  }
}
