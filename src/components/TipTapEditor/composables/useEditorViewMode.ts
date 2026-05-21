import { nextTick, ref, type Ref } from 'vue';

export type EditorViewMode = 'reading' | 'preview' | 'source';

interface UseEditorViewModeOptions {
  sourceContent: Ref<string>;
  enterSourceMode: () => void;
  applySourceContent: () => void;
  setEditorEditable: (editable: boolean) => void;
  isOutlineVisible: () => boolean;
  refreshSourceOutline: () => void;
  refreshEditorOutline: () => void;
  emitViewModeChange: (mode: EditorViewMode) => void;
}

export function useEditorViewMode(options: UseEditorViewModeOptions) {
  const viewMode = ref<EditorViewMode>('preview');

  const refreshOutlineAfterModeChange = (mode: EditorViewMode) => {
    if (!options.isOutlineVisible()) return;

    nextTick(() => {
      if (mode === 'source') {
        options.refreshSourceOutline();
      } else {
        options.refreshEditorOutline();
      }
    });
  };

  const syncSourceContentIfNeeded = (wasSourceMode: boolean) => {
    if (wasSourceMode && options.sourceContent.value) {
      options.applySourceContent();
    }
  };

  const toggleViewMode = (mode: EditorViewMode) => {
    if (mode === viewMode.value) return;

    const wasSourceMode = viewMode.value === 'source';

    if (mode === 'source') {
      options.enterSourceMode();
      viewMode.value = 'source';
      options.emitViewModeChange('source');
      refreshOutlineAfterModeChange('source');
      return;
    }

    syncSourceContentIfNeeded(wasSourceMode);
    options.setEditorEditable(mode === 'preview');
    viewMode.value = mode;
    options.emitViewModeChange(mode);
    refreshOutlineAfterModeChange(mode);
  };

  const handleViewModeCommand = (command: EditorViewMode) => {
    toggleViewMode(command);
  };

  const toggleToReadingMode = () => {
    toggleViewMode('reading');
  };

  const toggleToEditingMode = () => {
    toggleViewMode('preview');
  };

  return {
    viewMode,
    toggleViewMode,
    handleViewModeCommand,
    toggleToReadingMode,
    toggleToEditingMode
  };
}
