import { invoke as tauriInvoke } from '@tauri-apps/api/core';
import { logger as defaultLogger } from '@/utils/logger';
import {
  ConflictStrategy,
  forcePull as forceGitPull,
  forcePush as forceGitPush,
  removeUntrackedFile as removeGitUntrackedFile,
  resolveConflictsBatch as resolveGitConflictsBatch,
  resumeAutoSync as resumeGitAutoSync,
  type ResolveConflictsResult
} from './api';

type GitConflictResolutionLogger = {
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};

export interface GitConflictResolutionDeps {
  forcePush?: typeof forceGitPush;
  forcePull?: typeof forceGitPull;
  removeUntrackedFile?: typeof removeGitUntrackedFile;
  resumeAutoSync?: typeof resumeGitAutoSync;
  resolveConflictsBatch?: typeof resolveGitConflictsBatch;
  writeConflictFile?: (filePath: string, content: string) => Promise<void>;
  logger?: GitConflictResolutionLogger;
}

export interface ManualMergeInput {
  files: string[];
  selections: Record<number, 'remote' | 'local'>;
  editedContents: Record<number, string>;
}

const writeConflictFileWithInvoke = async (filePath: string, content: string): Promise<void> => {
  await tauriInvoke('write_conflict_file', {
    filePath,
    content
  });
};

const resolveDeps = (deps: GitConflictResolutionDeps = {}) => ({
  forcePush: deps.forcePush ?? forceGitPush,
  forcePull: deps.forcePull ?? forceGitPull,
  removeUntrackedFile: deps.removeUntrackedFile ?? removeGitUntrackedFile,
  resumeAutoSync: deps.resumeAutoSync ?? resumeGitAutoSync,
  resolveConflictsBatch: deps.resolveConflictsBatch ?? resolveGitConflictsBatch,
  writeConflictFile: deps.writeConflictFile ?? writeConflictFileWithInvoke,
  logger: deps.logger ?? defaultLogger
});

export async function resumeAutoSyncAfterConflict(
  deps: GitConflictResolutionDeps = {}
): Promise<boolean> {
  const { resumeAutoSync, logger } = resolveDeps(deps);

  try {
    await resumeAutoSync();
    logger.info('[GitSync] 冲突已解决，已恢复自动同步');
    return true;
  } catch (error) {
    logger.error('[GitSync] 恢复自动同步失败:', error);
    return false;
  }
}

export async function resolveConflictWithForcePush(
  deps: GitConflictResolutionDeps = {}
): Promise<void> {
  const { forcePush } = resolveDeps(deps);

  await forcePush();
  await resumeAutoSyncAfterConflict(deps);
}

export async function resolveConflictWithForcePull(
  untrackedFiles: string[],
  deps: GitConflictResolutionDeps = {}
): Promise<void> {
  const { forcePull, removeUntrackedFile, logger } = resolveDeps(deps);

  for (const file of untrackedFiles) {
    try {
      await removeUntrackedFile(file);
      logger.info('[GitSync] 已删除未跟踪文件:', file);
    } catch (error) {
      logger.warn(`[GitSync] 删除未跟踪文件失败: ${file} ${error}`);
    }
  }

  await forcePull();
  await resumeAutoSyncAfterConflict(deps);
}

export async function completeManualMerge(
  input: ManualMergeInput,
  deps: GitConflictResolutionDeps = {}
): Promise<ResolveConflictsResult> {
  const { files, selections, editedContents } = input;
  const { resolveConflictsBatch, writeConflictFile, logger } = resolveDeps(deps);

  for (const [indexStr, content] of Object.entries(editedContents)) {
    const index = Number.parseInt(indexStr, 10);
    if (selections[index] === 'local' && content) {
      const filePath = files[index];
      if (!filePath) continue;

      logger.info('[GitSync] 保存编辑后的本地内容:', filePath);
      await writeConflictFile(filePath, content);
      logger.info('[GitSync] 已保存编辑后的内容到:', filePath);
    }
  }

  const resolutions: Parameters<typeof resolveConflictsBatch>[0] = files.map((file, index) => [
    file,
    selections[index] === 'remote' ? ConflictStrategy.KeepRemote : ConflictStrategy.KeepLocal
  ]);

  const result = await resolveConflictsBatch(resolutions);
  logger.info(`[GitSync] 手动合并成功，已解决 ${result.resolved_count} 个冲突`);
  return result;
}
