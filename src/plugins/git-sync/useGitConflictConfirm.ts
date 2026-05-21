import { ref } from 'vue';
import type { Composer } from 'vue-i18n';

export type GitConflictConfirmResult = 'primary' | 'secondary' | 'close';

export interface GitConflictConfirmOptions {
  title: string;
  message: string;
  primaryText: string;
  secondaryText: string;
  type: 'info' | 'warning' | 'danger';
}

const defaultOptions: GitConflictConfirmOptions = {
  title: '',
  message: '',
  primaryText: '',
  secondaryText: '',
  type: 'info'
};

export function useGitConflictConfirm(t: Composer['t']) {
  const visible = ref(false);
  const options = ref<GitConflictConfirmOptions>({ ...defaultOptions });
  let resolveConfirm: ((value: GitConflictConfirmResult) => void) | null = null;

  const showConfirm = (nextOptions: GitConflictConfirmOptions) => {
    options.value = {
      ...options.value,
      ...nextOptions
    };
    visible.value = true;

    return new Promise<GitConflictConfirmResult>((resolve) => {
      resolveConfirm = resolve;
    });
  };

  const handleResult = (result: GitConflictConfirmResult) => {
    visible.value = false;
    if (resolveConfirm) {
      resolveConfirm(result);
      resolveConfirm = null;
    }
  };

  const confirmForcePush = async (): Promise<boolean> => {
    const result = await showConfirm({
      title: t('settings.gitSync.confirmForcePush'),
      message: t('settings.gitSync.confirmForcePushMessage'),
      primaryText: t('common.confirm'),
      secondaryText: t('common.cancel'),
      type: 'warning'
    });

    return result === 'primary';
  };

  const confirmForcePull = async (): Promise<boolean> => {
    const result = await showConfirm({
      title: t('settings.gitSync.confirmForcePull'),
      message: t('settings.gitSync.confirmForcePullMessage'),
      primaryText: t('common.confirm'),
      secondaryText: t('common.cancel'),
      type: 'warning'
    });

    return result === 'primary';
  };

  const confirmCancelConflict = async (): Promise<GitConflictConfirmResult> => showConfirm({
    title: t('settings.gitSync.cancelConflictTitle'),
    message: t('settings.gitSync.cancelConflictMessage'),
    primaryText: t('settings.gitSync.handleLater'),
    secondaryText: t('settings.gitSync.resumeSync'),
    type: 'warning'
  });

  return {
    visible,
    options,
    handleResult,
    confirmForcePush,
    confirmForcePull,
    confirmCancelConflict
  };
}
