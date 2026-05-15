import { invoke } from '@tauri-apps/api/core';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';

// ============= 类型定义 =============

/**
 * 用户设置接口
 */
export interface UserSettings {
  /** GitHub Personal Access Token */
  github_token: string | null;
  /** GitHub 用户名 */
  github_username: string | null;
  /** GitHub 仓库名 */
  github_repo: string | null;
  /** 最后同步时间 */
  last_sync_time: string | null;
  /** 退出时自动同步 */
  auto_sync_on_exit: boolean;
  /** 启动时自动恢复 */
  auto_restore_on_start: boolean;
}

/**
 * GitHub 用户信息接口
 */
export interface GitHubUser {
  /** 用户登录名 */
  login: string;
  /** 头像 URL */
  avatar_url: string;
  /** 用户名称 */
  name: string | null;
}

/**
 * 同步状态接口
 */
export interface SyncStatus {
  /** 是否正在同步 */
  is_syncing: boolean;
  /** 最后同步时间 */
  last_sync_time: string | null;
  /** 错误信息 */
  error: string | null;
}

/**
 * 缓存的用户设置状态
 */
type CachedUserSettingsState = {
  value: UserSettings | null;
  inFlight: Promise<UserSettings> | null;
  updatedAt: number;
};

/**
 * 缓存的 GitHub 用户状态
 */
type CachedGitHubUserState = {
  user: GitHubUser | null;
  error: unknown | null;
  inFlight: Promise<GitHubUser> | null;
  updatedAt: number;
};

const userSettingsCache: CachedUserSettingsState = {
  value: null,
  inFlight: null,
  updatedAt: 0
};

const githubUserCache = new Map<string, CachedGitHubUserState>();

const githubUserCacheTtlMs = 6 * 60 * 60 * 1000; // 6 小时
const githubUserErrorCacheTtlMs = 60 * 1000; // 1 分钟

/**
 * 设置 GitHub 用户缓存
 * @param token - GitHub Token
 * @param user - GitHub 用户信息
 */
const setGitHubUserCache = (token: string, user: GitHubUser): void => {
  githubUserCache.set(token, {
    user,
    error: null,
    inFlight: null,
    updatedAt: Date.now()
  });
};

/**
 * 设置 GitHub 用户错误缓存
 * @param token - GitHub Token
 * @param error - 错误信息
 */
const setGitHubUserErrorCache = (token: string, error: unknown): void => {
  githubUserCache.set(token, {
    user: null,
    error,
    inFlight: null,
    updatedAt: Date.now()
  });
};

/**
 * 获取 GitHub 用户信息
 * @param token - GitHub Token
 * @returns GitHub 用户信息
 */
const fetchGitHubUser = async (token: string): Promise<GitHubUser> => {
  try {
    return await invoke<GitHubUser>('verify_github_token', { token });
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'fetchGitHubUser',
      details: { token: '***' }, // 隐藏 token
      timestamp: new Date()
    }, {
      userMessage: 'GitHub Token 验证失败，请检查 Token 是否正确'
    });
    throw error;
  }
};

// ============= API 函数 =============

/**
 * 获取用户设置（带缓存）
 * @param options - 选项
 * @param options.force - 是否强制刷新缓存
 * @returns 用户设置
 * 
 * @example
 * ```typescript
 * const settings = await getUserSettingsCached();
 * const freshSettings = await getUserSettingsCached({ force: true });
 * ```
 */
export async function getUserSettingsCached(options: { force?: boolean } = {}): Promise<UserSettings> {
  const force = options.force === true;

  if (!force && userSettingsCache.value) {
    return userSettingsCache.value;
  }

  if (userSettingsCache.inFlight) {
    return userSettingsCache.inFlight;
  }

  const inFlight = getUserSettings()
    .then((settings) => {
      userSettingsCache.value = settings;
      userSettingsCache.updatedAt = Date.now();
      return settings;
    })
    .finally(() => {
      userSettingsCache.inFlight = null;
    });

  userSettingsCache.inFlight = inFlight;
  return inFlight;
}

/**
 * 获取 GitHub 用户信息（带缓存）
 * @param token - GitHub Token
 * @param options - 选项
 * @param options.force - 是否强制刷新缓存
 * @returns GitHub 用户信息
 * 
 * @example
 * ```typescript
 * const user = await getGitHubUserCached('ghp_xxx');
 * const freshUser = await getGitHubUserCached('ghp_xxx', { force: true });
 * ```
 */
export async function getGitHubUserCached(
  token: string,
  options: { force?: boolean } = {}
): Promise<GitHubUser> {
  if (!token) {
    const error = new Error('GitHub token is required');
    ErrorHandler.handle(error, {
      type: ErrorType.VALIDATION_ERROR,
      operation: 'getGitHubUserCached',
      timestamp: new Date()
    }, {
      userMessage: '请先配置 GitHub Token'
    });
    throw error;
  }

  const force = options.force === true;
  const now = Date.now();
  const cached = githubUserCache.get(token);

  if (!force && cached?.user && now - cached.updatedAt < githubUserCacheTtlMs) {
    return cached.user;
  }

  if (!force && cached?.error && now - cached.updatedAt < githubUserErrorCacheTtlMs) {
    throw cached.error;
  }

  if (cached?.inFlight) {
    return cached.inFlight;
  }

  const inFlight = fetchGitHubUser(token)
    .then((user) => {
      setGitHubUserCache(token, user);
      return user;
    })
    .catch((error) => {
      setGitHubUserErrorCache(token, error);
      throw error;
    });

  githubUserCache.set(token, {
    user: cached?.user ?? null,
    error: cached?.error ?? null,
    inFlight,
    updatedAt: cached?.updatedAt ?? 0
  });

  return inFlight;
}

/**
 * 获取用户设置
 * @returns 用户设置
 * 
 * @example
 * ```typescript
 * const settings = await getUserSettings();
 * ```
 */
export async function getUserSettings(): Promise<UserSettings> {
  try {
    return await invoke<UserSettings>('get_user_settings');
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.DATABASE_ERROR,
      operation: 'getUserSettings',
      timestamp: new Date()
    }, {
      userMessage: '获取用户设置失败'
    });
    throw error;
  }
}

/**
 * 保存用户设置
 * @param settings - 用户设置
 * 
 * @example
 * ```typescript
 * await saveUserSettings({
 *   github_token: 'ghp_xxx',
 *   github_username: 'username',
 *   github_repo: 'repo',
 *   last_sync_time: null,
 *   auto_sync_on_exit: true,
 *   auto_restore_on_start: false
 * });
 * ```
 */
export async function saveUserSettings(settings: UserSettings): Promise<void> {
  try {
    await invoke('save_user_settings', { settings });

    const prevToken = userSettingsCache.value?.github_token ?? null;
    const nextToken = settings.github_token ?? null;

    userSettingsCache.value = settings;
    userSettingsCache.updatedAt = Date.now();

    // 清除旧 token 的缓存
    if (prevToken !== nextToken && prevToken) {
      githubUserCache.delete(prevToken);
    }

    ErrorHandler.success('设置保存成功');
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.DATABASE_ERROR,
      operation: 'saveUserSettings',
      details: { settings: { ...settings, github_token: '***' } }, // 隐藏 token
      timestamp: new Date()
    }, {
      userMessage: '保存设置失败，请重试'
    });
    throw error;
  }
}

/**
 * 验证 GitHub Token 并获取用户信息
 * @param token - GitHub Token
 * @returns GitHub 用户信息
 * 
 * @example
 * ```typescript
 * const user = await verifyGitHubToken('ghp_xxx');
 * console.log(user.login, user.name);
 * ```
 */
export async function verifyGitHubToken(token: string): Promise<GitHubUser> {
  try {
    const user = await fetchGitHubUser(token);
    setGitHubUserCache(token, user);
    return user;
  } catch (error) {
    setGitHubUserErrorCache(token, error);
    throw error;
  }
}

/**
 * 同步数据到 GitHub
 * @returns 同步结果消息
 * 
 * @example
 * ```typescript
 * const message = await syncToGitHub();
 * console.log(message); // "同步成功"
 * ```
 */
export async function syncToGitHub(): Promise<string> {
  try {
    const result = await invoke<string>('sync_to_github');
    ErrorHandler.success('数据已同步到 GitHub');
    return result;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'syncToGitHub',
      timestamp: new Date()
    }, {
      userMessage: '同步到 GitHub 失败，请检查网络连接和 Token 权限'
    });
    throw error;
  }
}

/**
 * 从 GitHub 恢复数据
 * @returns 恢复结果消息
 * 
 * @example
 * ```typescript
 * const message = await restoreFromGitHub();
 * console.log(message); // "恢复成功"
 * ```
 */
export async function restoreFromGitHub(): Promise<string> {
  try {
    const result = await invoke<string>('restore_from_github');
    ErrorHandler.success('数据已从 GitHub 恢复');
    return result;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'restoreFromGitHub',
      timestamp: new Date()
    }, {
      userMessage: '从 GitHub 恢复失败，请检查网络连接和仓库配置'
    });
    throw error;
  }
}
