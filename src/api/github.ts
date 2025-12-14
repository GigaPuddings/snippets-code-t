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

type CachedUserSettingsState = {
  value: UserSettings | null;
  inFlight: Promise<UserSettings> | null;
  updatedAt: number;
};

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

const githubUserCacheTtlMs = 6 * 60 * 60 * 1000;
const githubUserErrorCacheTtlMs = 60 * 1000;

const setGitHubUserCache = (token: string, user: GitHubUser) => {
  githubUserCache.set(token, {
    user,
    error: null,
    inFlight: null,
    updatedAt: Date.now()
  });
};

const setGitHubUserErrorCache = (token: string, error: unknown) => {
  githubUserCache.set(token, {
    user: null,
    error,
    inFlight: null,
    updatedAt: Date.now()
  });
};

const fetchGitHubUser = async (token: string): Promise<GitHubUser> => {
  return await invoke<GitHubUser>('verify_github_token', { token });
};

// ============= API 函数 =============

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

export async function getGitHubUserCached(
  token: string,
  options: { force?: boolean } = {}
): Promise<GitHubUser> {
  if (!token) {
    throw new Error('GitHub token is required');
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
 */
export async function getUserSettings(): Promise<UserSettings> {
  return await invoke<UserSettings>('get_user_settings');
}

/**
 * 保存用户设置
 */
export async function saveUserSettings(settings: UserSettings): Promise<void> {
  await invoke('save_user_settings', { settings });

  const prevToken = userSettingsCache.value?.github_token ?? null;
  const nextToken = settings.github_token ?? null;

  userSettingsCache.value = settings;
  userSettingsCache.updatedAt = Date.now();

  if (prevToken !== nextToken) {
    if (prevToken) {
      githubUserCache.delete(prevToken);
    }
  }
}

/**
 * 验证 GitHub Token 并获取用户信息
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
