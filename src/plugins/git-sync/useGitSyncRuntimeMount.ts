import type { Ref } from 'vue';
import type {
  GitRuntimeWindow,
  GitSyncRuntimeFacade
} from './useGitSyncRuntimeFacade';

interface UseGitSyncRuntimeMountOptions {
  runtime: GitSyncRuntimeFacade;
  shouldInit: Ref<boolean | null>;
  getAutoSyncWindow?: () => GitRuntimeWindow;
}

export function useGitSyncRuntimeMount({
  runtime,
  shouldInit,
  getAutoSyncWindow
}: UseGitSyncRuntimeMountOptions): void {
  let didSetup = false;

  watch(
    shouldInit,
    async (nextShouldInit) => {
      if (nextShouldInit === null || didSetup) return;
      didSetup = true;
      await runtime.setupAndRestore({
        shouldInit: nextShouldInit,
        autoSyncWindow: getAutoSyncWindow?.()
      });
    },
    { immediate: true }
  );

  onUnmounted(() => {
    void runtime.cleanup();
  });
}
