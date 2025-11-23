import { invoke } from '@tauri-apps/api/core';

// ============= 类型定义 =============

export interface UserSettings {
  github_token: string | null;
  github_username: string | null;
  github_repo: string | null;
  last_sync_time: string | null;
  auto_sync_on_exit: boolean;
  auto_restore_on_start: boolean;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string | null;
}

export interface SyncStatus {
  is_syncing: boolean;
  last_sync_time: string | null;
  error: string | null;
}

// ============= API 函数 =============

/**
 * 获取用户设置
 */
export async function getUserSettings(): Promise<UserSettings> {
  return await invoke<UserSettings>('get_user_settings');
}

/**
 * 保存用户设置
 */
export async function saveUserSettings(settings: UserSettings): Promise<void> {
  await invoke('save_user_settings', { settings });
}

/**
 * 验证 GitHub Token 并获取用户信息
 */
export async function verifyGitHubToken(token: string): Promise<GitHubUser> {
  return await invoke<GitHubUser>('verify_github_token', { token });
}

/**
 * 同步数据到 GitHub
 */
export async function syncToGitHub(): Promise<string> {
  return await invoke<string>('sync_to_github');
}

/**
 * 从 GitHub 恢复数据
 */
export async function restoreFromGitHub(): Promise<string> {
  return await invoke<string>('restore_from_github');
}
