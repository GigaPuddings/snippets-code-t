import { nextTick, ref } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import { useEditorViewMode } from './useEditorViewMode';

const createViewMode = () => {
  const sourceContent = ref('');
  const outlineVisible = ref(false);
  const enterSourceMode = vi.fn();
  const applySourceContent = vi.fn();
  const setEditorEditable = vi.fn();
  const refreshSourceOutline = vi.fn();
  const refreshEditorOutline = vi.fn();
  const emitViewModeChange = vi.fn();

  const viewMode = useEditorViewMode({
    sourceContent,
    enterSourceMode,
    applySourceContent,
    setEditorEditable,
    isOutlineVisible: () => outlineVisible.value,
    refreshSourceOutline,
    refreshEditorOutline,
    emitViewModeChange
  });

  return {
    ...viewMode,
    sourceContent,
    outlineVisible,
    enterSourceMode,
    applySourceContent,
    setEditorEditable,
    refreshSourceOutline,
    refreshEditorOutline,
    emitViewModeChange
  };
};

describe('useEditorViewMode', () => {
  it('switches into source mode without touching editability', () => {
    const mode = createViewMode();

    mode.toggleViewMode('source');

    expect(mode.viewMode.value).toBe('source');
    expect(mode.enterSourceMode).toHaveBeenCalledTimes(1);
    expect(mode.setEditorEditable).not.toHaveBeenCalled();
    expect(mode.emitViewModeChange).toHaveBeenCalledWith('source');
  });

  it('does not emit duplicate changes for the active mode', () => {
    const mode = createViewMode();

    mode.toggleViewMode('preview');

    expect(mode.emitViewModeChange).not.toHaveBeenCalled();
    expect(mode.enterSourceMode).not.toHaveBeenCalled();
  });

  it('applies source content and enables editing when returning to preview', () => {
    const mode = createViewMode();
    mode.sourceContent.value = '# Button';

    mode.toggleViewMode('source');
    mode.toggleViewMode('preview');

    expect(mode.applySourceContent).toHaveBeenCalledTimes(1);
    expect(mode.setEditorEditable).toHaveBeenCalledWith(true);
    expect(mode.viewMode.value).toBe('preview');
  });

  it('applies source content and disables editing when entering reading mode', () => {
    const mode = createViewMode();
    mode.sourceContent.value = '# Button';

    mode.toggleViewMode('source');
    mode.toggleToReadingMode();

    expect(mode.applySourceContent).toHaveBeenCalledTimes(1);
    expect(mode.setEditorEditable).toHaveBeenCalledWith(false);
    expect(mode.viewMode.value).toBe('reading');
  });

  it('refreshes the matching outline after mode changes when outline is visible', async () => {
    const mode = createViewMode();
    mode.outlineVisible.value = true;

    mode.handleViewModeCommand('source');
    await nextTick();
    expect(mode.refreshSourceOutline).toHaveBeenCalledTimes(1);

    mode.sourceContent.value = '# Button';
    mode.handleViewModeCommand('preview');
    await nextTick();
    expect(mode.refreshEditorOutline).toHaveBeenCalledTimes(1);
  });
});
