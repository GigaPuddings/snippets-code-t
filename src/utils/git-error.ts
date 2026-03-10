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
export function analyzeGitError(error: unknown): GitErrorInfo {
  const errorMsg = String(error).toLowerCase();
  
  // 网络相关错误
  if (errorMsg.includes('network') || 
      errorMsg.includes('connection') ||
      errorMsg.includes('tcp') ||
      errorMsg.includes('无法连接') ||
      errorMsg.includes('连接失败') ||
      errorMsg.includes('网络')) {
    return {
      type: 'network',
      title: '网络连接失败',
      message: '无法连接到远程仓库，请检查网络连接',
      suggestions: [
        '检查网络连接是否正常',
        '确认是否需要代理才能访问 GitHub',
        '尝试使用 SSH 方式连接',
        '检查防火墙是否阻止了 Git 连接'
      ]
    };
  }
  
  // 认证相关错误
  if (errorMsg.includes('authentication') || 
      errorMsg.includes('auth') ||
      errorMsg.includes('token') ||
      errorMsg.includes('credential') ||
      errorMsg.includes('认证') ||
      errorMsg.includes('权限') ||
      errorMsg.includes('token') ||
      errorMsg.includes('密码') ||
      errorMsg.includes('身份验证')) {
    return {
      type: 'auth',
      title: '认证失败',
      message: 'Git 认证失败，请检查 Token 是否正确',
      suggestions: [
        '确认 GitHub Personal Access Token 是否有效',
        '检查 Token 是否具有 repo 权限',
        '确认 Token 是否已过期',
        '尝试重新生成 Token 并更新设置'
      ]
    };
  }
  
  // 冲突相关错误
  if (errorMsg.includes('conflict') ||
      errorMsg.includes('冲突') ||
      errorMsg.includes('merge')) {
    return {
      type: 'conflict',
      title: '合并冲突',
      message: '本地与远程存在冲突，需要手动解决',
      suggestions: [
        '点击"手动合并"逐个解决冲突',
        '或选择"强制拉取"以远程为准',
        '或选择"强制推送"以本地为准'
      ]
    };
  }
  
  // 仓库不存在错误
  if (errorMsg.includes('not found') ||
      errorMsg.includes('repository') ||
      errorMsg.includes('不存在') ||
      errorMsg.includes('仓库') ||
      errorMsg.includes('404')) {
    return {
      type: 'not_found',
      title: '仓库不存在',
      message: '远程仓库不存在或已被删除',
      suggestions: [
        '确认远程仓库 URL 是否正确',
        '检查仓库是否已被删除或重命名',
        '可以在 GitHub 上确认仓库是否存在',
        '如需重新创建仓库，请重新配置'
      ]
    };
  }
  
  // 权限相关错误
  if (errorMsg.includes('permission') ||
      errorMsg.includes('access denied') ||
      errorMsg.includes('访问被拒绝') ||
      errorMsg.includes('权限不足')) {
    return {
      type: 'permission',
      title: '权限不足',
      message: '没有足够的权限访问或推送到此仓库',
      suggestions: [
        '确认 Token 具有仓库的写入权限',
        '检查是否被邀请加入仓库',
        '确认仓库是否是私有仓库'
      ]
    };
  }
  
  // Git 未安装
  if (errorMsg.includes('git is not installed') ||
      errorMsg.includes('git not found') ||
      errorMsg.includes('git 未安装') ||
      errorMsg.includes('找不到 git')) {
    return {
      type: 'git_not_installed',
      title: 'Git 未安装',
      message: '系统未安装 Git，请先安装 Git',
      suggestions: [
        '下载并安装 Git: https://git-scm.com',
        '安装完成后重启应用程序',
        '确认 git 命令可以在终端中运行'
      ]
    };
  }
  
  // 不是 Git 仓库
  if (errorMsg.includes('not a git repository') ||
      errorMsg.includes('不是 git 仓库') ||
      errorMsg.includes('不是有效的仓库')) {
    return {
      type: 'not_a_repo',
      title: '不是 Git 仓库',
      message: '当前目录不是 Git 仓库',
      suggestions: [
        '需要先初始化 Git 仓库',
        '或重新配置指向已有的 Git 仓库'
      ]
    };
  }
  
  // 没有远程仓库
  if (errorMsg.includes('no remote') ||
      errorMsg.includes('没有远程') ||
      errorMsg.includes('未配置远程')) {
    return {
      type: 'no_remote',
      title: '未配置远程仓库',
      message: '未配置远程仓库地址',
      suggestions: [
        '在设置中配置远程仓库 URL',
        '确认 GitHub 仓库已创建',
        '使用 HTTPS 或 SSH 方式添加远程仓库'
      ]
    };
  }
  
  // 未知错误
  return {
    type: 'unknown',
    title: '未知错误',
    message: '发生了未知错误，请查看详细日志',
    suggestions: [
      '尝试重启应用程序',
      '检查 Git 设置是否正确',
      '查看控制台日志获取更多信息',
      '如问题持续，请提交问题反馈'
    ]
  };
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
