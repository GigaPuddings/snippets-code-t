import { computed, ref } from 'vue';
import type { Composer } from 'vue-i18n';

export interface GitRepoNotFoundInfo {
  remoteUrl: string;
  operation: string;
}

export function useGitRepoNotFoundDialog(t: Composer['t']) {
  const visible = ref(false);
  const info = ref<GitRepoNotFoundInfo>({
    remoteUrl: '',
    operation: ''
  });

  const message = computed(() => t('settings.gitSync.repoNotFoundMessage', {
    url: info.value.remoteUrl,
    operation: info.value.operation
  }));

  const open = (nextInfo: GitRepoNotFoundInfo) => {
    info.value = nextInfo;
    visible.value = true;
  };

  const close = () => {
    visible.value = false;
  };

  const reset = () => {
    info.value = {
      remoteUrl: '',
      operation: ''
    };
  };

  const ignore = () => {
    close();
    reset();
  };

  return {
    visible,
    info,
    message,
    open,
    close,
    reset,
    ignore
  };
}
