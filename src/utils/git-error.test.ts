import { afterEach, describe, expect, it } from 'vitest';
import i18n from '@/i18n';
import { analyzeGitError, type GitErrorType } from './git-error';

const originalLocale = i18n.global.locale.value;
afterEach(() => {
  i18n.global.locale.value = originalLocale;
});

describe('localized Git errors', () => {
  const cases: [string, GitErrorType, string][] = [
    ['network connection failed', 'network', 'Network Connection Failed'],
    ['authentication failed', 'auth', 'Authentication Failed'],
    ['merge conflict', 'conflict', 'Merge Conflict'],
    ['repository not found', 'not_found', 'Repository Not Found'],
    ['permission denied', 'permission', 'Permission Denied'],
    ['git not found', 'git_not_installed', 'Git Not Installed'],
    ['not a git repository', 'not_a_repo', 'Not a Git Repository'],
    ['没有远程仓库', 'no_remote', 'No Remote Configured'],
    ['unclassified failure', 'unknown', 'Unknown Error']
  ];

  it.each(cases)('classifies and translates %s', (error, type, title) => {
    i18n.global.locale.value = 'en-US';
    const result = analyzeGitError(new Error(error), i18n.global.t);
    expect(result.type).toBe(type);
    expect(result.title).toBe(title);
    expect(result.message).not.toMatch(/[\u4e00-\u9fff]/);
    expect(result.suggestions.length).toBeGreaterThan(0);
    expect(result.suggestions.join(' ')).not.toMatch(/[\u4e00-\u9fff]/);
  });

  it('uses the current language on every call and recognizes localized errors', () => {
    i18n.global.locale.value = 'en-US';
    expect(analyzeGitError('权限不足', i18n.global.t).title).toBe(
      'Permission Denied'
    );
    i18n.global.locale.value = 'zh-CN';
    expect(analyzeGitError('不是 git 仓库', i18n.global.t).title).toBe(
      '不是 Git 仓库'
    );
    expect(analyzeGitError('git 未安装', i18n.global.t).title).toBe(
      'Git 未安装'
    );
  });
});
