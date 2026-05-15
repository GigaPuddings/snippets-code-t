import { invoke } from '@tauri-apps/api/core';

/**
 * Git 配置
 */
export interface GitConfig {
  user_name: string;
  user_email: string;
  remote_url: string;
  token: string;
}

/**
 * Pull 结果
 */
export interface PullResult {
  success: boolean;
  files_updated: number;
  has_conflicts: boolean;
  conflict_files: string[];
  message: string;
  untracked_files?: string[];
  last_sync_time?: string;
}

/**
 * Push 结果
 */
export interface PushResult {
  success: boolean;
  files_pushed: number;
  commit_hash: string;
  message: string;
}

/**
 * Git 状态
 */
export interface GitStatus {
  is_repo: boolean;
  has_remote: boolean;
  has_changes: boolean;
  changed_files: string[];
  branch: string;
}

/**
 * 系统 Git 配置
 */
export interface SystemGitConfig {
  global_user_name: string | null;
  global_user_email: string | null;
  local_user_name: string | null;
  local_user_email: string | null;
  remote_url: string | null;
}

/**
 * 冲突解决策略
 */
export enum ConflictStrategy {
  KeepLocal = 'KeepLocal',
  KeepRemote = 'KeepRemote',
}

/**
 * 冲突文件内容
 */
export interface ConflictFileContent {
  file_path: string;
  remote_content: string;
  local_content: string;
  base_content: string | null;
}

/**
 * 检查 Git 是否安装
 */
export async function checkGitInstalled(): Promise<boolean> {
  try {
    return await invoke<boolean>('check_git_installed_command');
  } catch (error) {
    throw new Error(`检查 Git 安装失败: ${error}`);
  }
}

/**
 * 检查是否是 Git 仓库
 */
export async function checkGitRepo(): Promise<boolean> {
  try {
    return await invoke<boolean>('check_git_repo_command');
  } catch (error) {
    throw new Error(`检查 Git 仓库失败: ${error}`);
  }
}

/**
 * 获取 Git 状态
 */
export async function getGitStatus(): Promise<GitStatus> {
  try {
    return await invoke<GitStatus>('get_git_status_command');
  } catch (error) {
    throw new Error(`获取 Git 状态失败: ${error}`);
  }
}

/**
 * 获取系统 Git 配置（会调用系统 git config，生产环境可能触发终端闪退）
 */
export async function getSystemGitConfig(): Promise<SystemGitConfig> {
  try {
    return await invoke<SystemGitConfig>('get_system_git_config_command');
  } catch (error) {
    throw new Error(`获取系统 Git 配置失败: ${error}`);
  }
}

/**
 * 仅从工作区 .git/config 检测 Git 配置（不调用系统 git，避免生产环境终端闪退）
 */
export async function getWorkspaceGitConfig(): Promise<SystemGitConfig> {
  try {
    return await invoke<SystemGitConfig>('get_workspace_git_config_command');
  } catch (error) {
    throw new Error(`获取工作区 Git 配置失败: ${error}`);
  }
}

/**
 * 配置 Git
 */
export async function configureGit(config: GitConfig): Promise<void> {
  try {
    await invoke('configure_git_command', { config });
  } catch (error) {
    throw new Error(`配置 Git 失败: ${error}`);
  }
}

/**
 * 测试 Git 连接（验证 Token 和远程仓库是否可用）
 */
export async function testGitConnection(remoteUrl: string, token: string): Promise<void> {
  try {
    await invoke('test_git_connection_command', { remoteUrl, token });
  } catch (error) {
    throw new Error(`连接测试失败: ${error}`);
  }
}

/**
 * 初始化 Git 仓库并配置远程（保存 Git 配置后自动调用）
 */
export async function initGitRepository(
  userName: string,
  userEmail: string,
  remoteUrl: string,
  token: string
): Promise<void> {
  try {
    await invoke('init_git_repository_command', { userName, userEmail, remoteUrl, token });
  } catch (error) {
    throw new Error(`Git 仓库初始化失败: ${error}`);
  }
}

/**
 * 执行 git pull
 */
export async function gitPull(): Promise<PullResult> {
  try {
    return await invoke<PullResult>('git_pull_command');
  } catch (error) {
    throw new Error(`Git pull 失败: ${error}`);
  }
}

/**
 * 执行 git push
 */
export async function gitPush(message?: string): Promise<PushResult> {
  try {
    return await invoke<PushResult>('git_push_command', { message });
  } catch (error) {
    throw new Error(`Git push 失败: ${error}`);
  }
}

/**
 * 启动自动同步
 */
export async function startAutoSync(): Promise<void> {
  try {
    await invoke('start_auto_sync_command');
  } catch (error) {
    throw new Error(`启动自动同步失败: ${error}`);
  }
}

/**
 * 停止自动同步
 */
export async function stopAutoSync(): Promise<void> {
  try {
    await invoke('stop_auto_sync_command');
  } catch (error) {
    throw new Error(`停止自动同步失败: ${error}`);
  }
}

/**
 * 通知文件编辑（触发自动同步计时器）
 */
export async function notifyFileEdit(): Promise<void> {
  try {
    await invoke('notify_file_edit_command');
  } catch (error) {
    // 静默失败，不影响用户操作
    console.debug('通知文件编辑失败:', error);
  }
}

/**
 * 获取自动同步状态
 * @returns 是否正在运行
 */
export async function getAutoSyncStatus(): Promise<boolean> {
  try {
    return await invoke<boolean>('get_auto_sync_status_command');
  } catch (error) {
    console.error('获取自动同步状态失败:', error);
    return false;
  }
}

/**
 * 暂停自动同步（用于冲突处理）
 */
export async function pauseAutoSync(): Promise<void> {
  try {
    await invoke('pause_auto_sync_command');
  } catch (error) {
    throw new Error(`暂停自动同步失败: ${error}`);
  }
}

/**
 * 恢复自动同步（冲突解决后）
 */
export async function resumeAutoSync(): Promise<void> {
  try {
    await invoke('resume_auto_sync_command');
  } catch (error) {
    throw new Error(`恢复自动同步失败: ${error}`);
  }
}

/**
 * 解决冲突
 */
export async function resolveConflict(
  filePath: string,
  strategy: ConflictStrategy
): Promise<void> {
  try {
    await invoke('resolve_conflict_command', {
      filePath,
      strategy,
    });
  } catch (error) {
    throw new Error(`解决冲突失败: ${error}`);
  }
}

/**
 * 获取冲突文件内容
 */
export async function getConflictFileContent(
  filePath: string
): Promise<ConflictFileContent> {
  try {
    return await invoke<ConflictFileContent>('get_conflict_file_content', {
      filePath,
    });
  } catch (error) {
    throw new Error(`获取冲突文件内容失败: ${error}`);
  }
}

/**
 * 强制推送（覆盖远程）
 */
export async function forcePush(message?: string): Promise<PushResult> {
  try {
    return await invoke<PushResult>('force_push_command', { message });
  } catch (error) {
    throw new Error(`强制推送失败: ${error}`);
  }
}

/**
 * 强制拉取（覆盖本地）
 */
export async function forcePull(): Promise<PullResult> {
  try {
    return await invoke<PullResult>('force_pull_command');
  } catch (error) {
    throw new Error(`强制拉取失败: ${error}`);
  }
}

/**
 * 冲突解决结果
 */
export interface ResolveConflictsResult {
  success: boolean;
  resolved_count: number;
}

/**
 * 批量解决冲突
 */
export async function resolveConflictsBatch(
  resolutions: Array<[string, ConflictStrategy]>
): Promise<ResolveConflictsResult> {
  try {
    return await invoke<ResolveConflictsResult>('resolve_conflicts_batch', { resolutions });
  } catch (error) {
    throw new Error(`批量解决冲突失败: ${error}`);
  }
}

/**
 * 检查 .gitignore
 */
export async function checkGitignore(): Promise<void> {
  try {
    await invoke('check_gitignore_command');
  } catch (error) {
    throw new Error(`检查 .gitignore 失败: ${error}`);
  }
}

/**
 * 确保工作区存在 .gitignore，不存在则用默认内容创建
 * @returns 是否新建了文件（true=新建，false=已存在）
 */
export async function ensureGitignore(): Promise<boolean> {
  try {
    return await invoke<boolean>('ensure_gitignore_command');
  } catch (error) {
    throw new Error(`确保 .gitignore 失败: ${error}`);
  }
}
