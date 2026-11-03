import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { ref, computed } from 'vue';
import { parse } from 'vue/compiler-sfc';
import { describe, expect, it, vi } from 'vitest';

const source = readFileSync(new URL('./index.vue', import.meta.url), 'utf8');
const { descriptor } = parse(source);
const ast = ts.createSourceFile(
  'git-settings.ts',
  descriptor.scriptSetup!.content,
  ts.ScriptTarget.Latest,
  true
);
// Execute the actual settings script with its API/UI dependencies stubbed. This
// exercises the user handlers, including the continuation across both dialogs.
const script = ast.statements
  .filter((item) => !ts.isImportDeclaration(item))
  .map((item) => item.getText(ast))
  .join('\n');
const code = ts.transpileModule(
  `${script}\n;({ handleBranchSelectConfirm, handleBranchOverwriteConfirm, handleBranchChange, pendingBranchPull, pendingUntrackedFiles, branchOverwriteVisible, branchSelectVisible, handleBranchSelectionRequired, handleEnabledChange, gitSettings });`,
  {
    compilerOptions: { target: ts.ScriptTarget.ES2022 }
  }
).outputText;
const selectionError = new Error(
  'The following untracked working tree files would be overwritten by checkout:\n\tdraft.md\nPlease move or remove them before you switch branches.\nAborting'
);
const success = {
  success: true,
  has_conflicts: false,
  files_updated: 0,
  conflict_files: [],
  message: 'up to date'
};

function settings() {
  const switchGitBranch = vi.fn(
    async (_branch: string, _files?: string[]) => undefined
  );
  const gitPull = vi.fn(async () => success);
  const refreshStatus = vi.fn(async () => undefined);
  const removeUntrackedFile = vi.fn();
  const context = {
    ref,
    computed,
    watch: vi.fn(),
    defineOptions: vi.fn(),
    onMounted: vi.fn(),
    onUnmounted: vi.fn(),
    useI18n: () => ({ t: (key: string) => key, locale: ref('en-US') }),
    useGitStatus: () => ({
      syncState: ref('idle'),
      pendingFilesCount: ref(0),
      formattedLastSyncTime: ref(''),
      gitStatus: ref(null),
      refreshStatus,
      refreshSettings: vi.fn()
    }),
    switchGitBranch,
    getGitSettings: vi.fn(async () => ({
      enabled: true,
      auto_sync: true,
      user_name: 'test',
      user_email: 'test@example.invalid',
      remote_url: 'https://example.invalid/notes.git'
    })),
    updateGitSettings: vi.fn(async () => undefined),
    startAutoSync: vi.fn(async () => undefined),
    stopAutoSync: vi.fn(async () => undefined),
    getGitContributionActivity: vi.fn(async () => ({ year: 2026, days: [] })),
    gitPull,
    removeUntrackedFile,
    getPendingGitBranchSelection: vi.fn(() => null),
    clearPendingGitBranchSelection: vi.fn(),
    decodeGitConflictFilePath: (path: string) => path,
    modal: { msg: vi.fn() },
    logger: { info: vi.fn(), error: vi.fn() },
    analyzeGitError: () => ({
      title: 'failure',
      message: 'failure',
      suggestions: [],
      type: 'unknown'
    }),
    getErrorTypeIcon: () => '',
    window: new EventTarget(),
    console,
    Date,
    Intl,
    Set,
    Map
  };
  return { ...context, view: runInNewContext(code, context) as any };
}

describe('settings branch-selection user flow', () => {
  it('restarts automatic sync when Git synchronization is enabled again', async () => {
    const { view, startAutoSync, updateGitSettings } = settings();
    view.gitSettings.value.enabled = true;
    view.gitSettings.value.auto_sync = true;
    await view.handleEnabledChange(true);
    expect(startAutoSync).toHaveBeenCalledOnce();
    expect(updateGitSettings.mock.invocationCallOrder[0]).toBeLessThan(
      startAutoSync.mock.invocationCallOrder[0]
    );
  });

  it('stops automatic sync when Git synchronization is disabled', async () => {
    const { view, stopAutoSync, startAutoSync } = settings();
    view.gitSettings.value.enabled = false;
    await view.handleEnabledChange(false);
    expect(stopAutoSync).toHaveBeenCalledOnce();
    expect(startAutoSync).not.toHaveBeenCalled();
  });

  it('preserves switch-and-pull after overwrite confirmation', async () => {
    const { view, switchGitBranch, gitPull, removeUntrackedFile } = settings();
    switchGitBranch.mockRejectedValueOnce(selectionError);
    await view.handleBranchSelectConfirm('notes');
    expect(view.branchOverwriteVisible.value).toBe(true);
    expect(gitPull).not.toHaveBeenCalled();
    await view.handleBranchOverwriteConfirm();
    expect(switchGitBranch).toHaveBeenLastCalledWith('notes', ['draft.md']);
    expect(removeUntrackedFile).not.toHaveBeenCalled();
    expect(gitPull).toHaveBeenCalledOnce();
    expect(switchGitBranch.mock.invocationCallOrder[1]).toBeLessThan(
      gitPull.mock.invocationCallOrder[0]
    );
    expect(view.branchOverwriteVisible.value).toBe(false);
  });

  it('does not pull on failed confirmation, retaining the continuation for retry', async () => {
    const { view, switchGitBranch, gitPull } = settings();
    switchGitBranch
      .mockRejectedValueOnce(selectionError)
      .mockRejectedValueOnce(new Error('tracked file changed'));
    await view.handleBranchSelectConfirm('notes');
    await view.handleBranchOverwriteConfirm();
    expect(gitPull).not.toHaveBeenCalled();
    expect(view.pendingBranchPull.value).toBe(true);
    expect(view.pendingUntrackedFiles.value).toEqual(['draft.md']);
    await view.handleBranchOverwriteConfirm();
    expect(gitPull).toHaveBeenCalledOnce();
  });

  it('retains direct branch-dropdown behavior without adding a pull continuation', async () => {
    const { view, switchGitBranch, gitPull } = settings();
    switchGitBranch.mockRejectedValueOnce(selectionError);
    await view.handleBranchChange('notes');
    await view.handleBranchOverwriteConfirm();
    expect(switchGitBranch).toHaveBeenLastCalledWith('notes', ['draft.md']);
    expect(gitPull).not.toHaveBeenCalled();
  });

  it('opens the existing picker for the periodic branch-selection event', () => {
    const { view } = settings();
    const event = new CustomEvent('git-branch-selection-required', {
      cancelable: true,
      detail: {
        current_branch: 'main',
        recommended_branch: 'notes',
        available_branches: ['notes'],
        reason: 'missing'
      }
    });
    view.handleBranchSelectionRequired(event);
    expect(event.defaultPrevented).toBe(true);
    expect(view.branchSelectVisible.value).toBe(true);
  });
});
