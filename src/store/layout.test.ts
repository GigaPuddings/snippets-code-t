import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useLayoutStore } from './layout';

describe('workspace sidebar layout', () => {
  beforeEach(() => setActivePinia(createPinia()));

  it('lets the user reopen and close the automatically collapsed narrow sidebar', () => {
    const layout = useLayoutStore();
    layout.setWindowWidth(920);
    expect(layout.effectiveCategoryCollapsed).toBe(true);
    layout.toggleCategoryPanel();
    expect(layout.effectiveCategoryCollapsed).toBe(false);
    layout.toggleCategoryPanel();
    expect(layout.effectiveCategoryCollapsed).toBe(true);
  });

  it('resumes automatic collapse after leaving the narrow viewport', () => {
    const layout = useLayoutStore();
    layout.setWindowWidth(920);
    layout.toggleCategoryPanel();
    layout.setWindowWidth(1180);
    expect(layout.effectiveCategoryCollapsed).toBe(false);
    layout.setWindowWidth(920);
    expect(layout.effectiveCategoryCollapsed).toBe(true);
  });

  it('preserves an explicit collapsed preference across resize', () => {
    const layout = useLayoutStore();
    layout.setWindowWidth(1180);
    layout.toggleCategoryPanel();
    layout.setWindowWidth(920);
    layout.setWindowWidth(1180);
    expect(layout.effectiveCategoryCollapsed).toBe(true);
    layout.toggleCategoryPanel();
    expect(layout.effectiveCategoryCollapsed).toBe(false);
  });
});
