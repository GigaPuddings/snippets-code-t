import { invoke } from '@tauri-apps/api/core';

export interface GitStatus {
  is_repo: boolean;
  has_remote: boolean;
  has_changes: boolean;
  changed_files: string[];
  branch: string;
  main_branch: string;
  available_branches: string[];
  has_other_branches: boolean;
}

export async function getGitStatus(): Promise<GitStatus> {
  try {
    return await invoke<GitStatus>('get_git_status_command');
  } catch (error) {
    throw new Error(`获取 Git 状态失败: ${error}`);
  }
}

export async function initGitRepository(
  userName: string,
  userEmail: string,
  remoteUrl: string,
  token: string
): Promise<void> {
  try {
    await invoke('init_git_repository_command', {
      userName,
      userEmail,
      remoteUrl,
      token
    });
  } catch (error) {
    throw new Error(`Git 仓库初始化失败: ${error}`);
  }
}

export async function notifyFileEdit(): Promise<void> {
  try {
    await invoke('notify_file_edit_command');
  } catch (error) {
    console.debug('通知文件编辑失败:', error);
  }
}
