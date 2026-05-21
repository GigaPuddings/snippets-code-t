import type { Composer } from 'vue-i18n';
import { useGitConflictConfirm } from './useGitConflictConfirm';
import { useGitConflictDialogs } from './useGitConflictDialogs';
import type { GitConflictDialogsDeps } from './useGitConflictDialogs';
import { useGitRepoNotFoundDialog } from './useGitRepoNotFoundDialog';

export interface GitRuntimeStateDeps extends GitConflictDialogsDeps {
  t: Composer['t'];
}

export function useGitRuntimeState(deps: GitRuntimeStateDeps) {
  const dialogs = useGitConflictDialogs({
    storage: deps.storage,
    logger: deps.logger
  });
  const confirm = useGitConflictConfirm(deps.t);
  const repoNotFound = useGitRepoNotFoundDialog(deps.t);

  return {
    dialogs,
    confirm,
    repoNotFound
  };
}
