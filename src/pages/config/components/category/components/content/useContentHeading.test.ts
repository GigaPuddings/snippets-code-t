import { effectScope, nextTick, ref } from 'vue';
import { describe, expect, it } from 'vitest';
import { useContentHeading } from './useContentHeading';

function setup(enabledValue = true) {
  const scope = effectScope();
  const enabled = ref(enabledValue);
  const documentKey = ref('workspace-a/note.md');
  const heading = scope.run(() => useContentHeading(enabled, documentKey))!;
  return { scope, enabled, documentKey, ...heading };
}

describe('content title context', () => {
  it('shows only a heading received while enabled', () => {
    const state = setup(false);
    state.setHeading('Section');
    expect(state.showHeading.value).toBe(false);
    expect(state.heading.value).toBeNull();
    state.enabled.value = true;
    state.setHeading('Section');
    expect(state.showHeading.value).toBe(true);
    state.setHeading(null);
    expect(state.showHeading.value).toBe(false);
    state.scope.stop();
  });

  it('keeps filename editing active while scroll events change the context', () => {
    const state = setup();
    state.setHeading('First');
    state.titleFocused.value = true;
    state.setHeading('Second');
    expect(state.showHeading.value).toBe(false);
    expect(state.heading.value).toBe('Second');
    state.titleFocused.value = false;
    expect(state.showHeading.value).toBe(true);
    state.scope.stop();
  });

  it('clears stale context immediately on disable and document navigation', async () => {
    const state = setup();
    state.setHeading('Old');
    state.documentKey.value = 'workspace-b/note.md';
    expect(state.showHeading.value).toBe(false);
    state.setHeading('New');
    state.enabled.value = false;
    expect(state.heading.value).toBeNull();
    state.enabled.value = true;
    await nextTick();
    expect(state.showHeading.value).toBe(false);
    state.scope.stop();
  });

  it('ignores empty titles and resets the view context without changing focus', () => {
    const state = setup();
    state.setHeading('  ');
    expect(state.showHeading.value).toBe(false);
    state.titleFocused.value = true;
    state.setHeading('Title');
    state.clearHeading();
    expect(state.heading.value).toBeNull();
    expect(state.titleFocused.value).toBe(true);
    state.scope.stop();
  });
});
