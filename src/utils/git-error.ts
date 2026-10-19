/**
 * Git 错误处理工具
 * 提供友好的错误消息和解决建议
 */

/**
 * Git 错误类型
 */
export type GitErrorType =
  | 'network'
  | 'auth'
  | 'conflict'
  | 'not_found'
  | 'permission'
  | 'git_not_installed'
  | 'not_a_repo'
  | 'no_remote'
  | 'unknown';

/**
 * Git 错误信息结构
 */
export interface GitErrorInfo {
  type: GitErrorType;
  title: string;
  message: string;
  suggestions: string[];
}

/**
 * 从错误消息中识别错误类型
 */
export function analyzeGitError(
  error: unknown,
  translate: (key: string) => string
): GitErrorInfo {
  const suggestionCounts: Record<GitErrorType, number> = {
    network: 4,
    auth: 4,
    conflict: 3,
    not_found: 4,
    permission: 3,
    git_not_installed: 3,
    not_a_repo: 2,
    no_remote: 3,
    unknown: 4
  };
  const localize = (type: GitErrorType): GitErrorInfo => ({
    type,
    title: translate(`gitErrors.${type}.title`),
    message: translate(`gitErrors.${type}.message`),
    suggestions: Array.from({ length: suggestionCounts[type] }, (_, index) =>
      translate(`gitErrors.${type}.suggestions.${index}`)
    )
  });
  const errorMsg = String(error).toLowerCase();

  // 网络相关错误
  if (
    errorMsg.includes('network') ||
    errorMsg.includes('connection') ||
    errorMsg.includes('tcp') ||
    errorMsg.includes('无法连接') ||
    errorMsg.includes('连接失败') ||
    errorMsg.includes('网络')
  ) {
    return localize('network');
  }

  // 认证相关错误
  if (
    errorMsg.includes('authentication') ||
    errorMsg.includes('auth') ||
    errorMsg.includes('token') ||
    errorMsg.includes('credential') ||
    errorMsg.includes('认证') ||
    errorMsg.includes('密码') ||
    errorMsg.includes('身份验证')
  ) {
    return localize('auth');
  }

  // 冲突相关错误
  if (
    errorMsg.includes('conflict') ||
    errorMsg.includes('冲突') ||
    errorMsg.includes('merge')
  ) {
    return localize('conflict');
  }

  // 权限相关错误
  if (
    errorMsg.includes('permission') ||
    errorMsg.includes('access denied') ||
    errorMsg.includes('访问被拒绝') ||
    errorMsg.includes('权限不足') ||
    errorMsg.includes('权限')
  ) {
    return localize('permission');
  }

  // Git 未安装
  if (
    errorMsg.includes('git is not installed') ||
    errorMsg.includes('git not found') ||
    errorMsg.includes('git 未安装') ||
    errorMsg.includes('找不到 git')
  ) {
    return localize('git_not_installed');
  }

  // 不是 Git 仓库
  if (
    errorMsg.includes('not a git repository') ||
    errorMsg.includes('不是 git 仓库') ||
    errorMsg.includes('不是有效的仓库')
  ) {
    return localize('not_a_repo');
  }

  // 没有远程仓库
  if (
    errorMsg.includes('no remote') ||
    errorMsg.includes('没有远程') ||
    errorMsg.includes('未配置远程')
  ) {
    return localize('no_remote');
  }

  // 仓库不存在错误
  if (
    errorMsg.includes('not found') ||
    errorMsg.includes('repository') ||
    errorMsg.includes('不存在') ||
    errorMsg.includes('仓库') ||
    errorMsg.includes('404')
  ) {
    return localize('not_found');
  }

  // 未知错误
  return localize('unknown');
}

/**
 * 获取错误类型的图标
 */
export function getErrorTypeIcon(type: GitErrorType): string {
  switch (type) {
    case 'network':
      return '🌐';
    case 'auth':
      return '🔐';
    case 'conflict':
      return '⚔️';
    case 'not_found':
      return '🔍';
    case 'permission':
      return '🚫';
    case 'git_not_installed':
      return '📦';
    case 'not_a_repo':
      return '📁';
    case 'no_remote':
      return '☁️';
    default:
      return '❓';
  }
}

/**
 * 获取错误类型的颜色
 */
export function getErrorTypeColor(type: GitErrorType): string {
  switch (type) {
    case 'network':
      return '#e6a23c'; // 警告黄色
    case 'auth':
      return '#f56c6c'; // 错误红色
    case 'conflict':
      return '#e6a23c'; // 警告黄色
    case 'not_found':
      return '#909399'; // 灰色
    case 'permission':
      return '#f56c6c'; // 错误红色
    case 'git_not_installed':
      return '#f56c6c'; // 错误红色
    case 'not_a_repo':
      return '#e6a23c'; // 警告黄色
    case 'no_remote':
      return '#909399'; // 灰色
    default:
      return '#909399'; // 灰色
  }
}
