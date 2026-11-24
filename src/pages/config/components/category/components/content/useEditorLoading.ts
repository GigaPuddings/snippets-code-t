import { nextTick } from 'vue';

const EDITOR_LOADING_MIN_DURATION = 280;

export function useEditorLoading(state: {
  isEditorReady: boolean;
  isEditorLoading: boolean;
  editorError: string | null;
}) {
  let editorReadyTimer: ReturnType<typeof setTimeout> | null = null;
  let editorReadyFrame: number | null = null;
  let editorLoadingStartedAt = 0;
  let editorLoadingGeneration = 0;

  const cancelEditorReadyTransition = () => {
    if (editorReadyTimer !== null) {
      clearTimeout(editorReadyTimer);
      editorReadyTimer = null;
    }

    if (editorReadyFrame !== null) {
      cancelAnimationFrame(editorReadyFrame);
      editorReadyFrame = null;
    }
  };

  const beginEditorLoading = () => {
    cancelEditorReadyTransition();
    editorLoadingGeneration++;
    editorLoadingStartedAt = Date.now();
    state.isEditorReady = false;
    state.isEditorLoading = true;
  };

  const finishEditorLoading = (generation: number) => {
    if (generation !== editorLoadingGeneration || state.editorError) return;

    const showEditor = () => {
      if (generation !== editorLoadingGeneration) return;
      editorReadyTimer = null;
      state.isEditorReady = true;
      state.isEditorLoading = false;
    };
    const elapsed = Date.now() - editorLoadingStartedAt;
    const remaining = Math.max(0, EDITOR_LOADING_MIN_DURATION - elapsed);

    if (remaining > 0) {
      editorReadyTimer = setTimeout(showEditor, remaining);
    } else {
      showEditor();
    }
  };

  const finishEditorLoadingAfterPaint = () => {
    cancelEditorReadyTransition();
    const generation = editorLoadingGeneration;

    nextTick(() => {
      if (generation !== editorLoadingGeneration) return;
      editorReadyFrame = requestAnimationFrame(() => {
        editorReadyFrame = null;
        finishEditorLoading(generation);
      });
    });
  };

  const failEditorLoading = () => {
    cancelEditorReadyTransition();
    editorLoadingGeneration++;
    state.isEditorReady = false;
    state.isEditorLoading = false;
  };

  return {
    beginEditorLoading,
    finishEditorLoadingAfterPaint,
    failEditorLoading,
    cancelEditorReadyTransition
  };
}
