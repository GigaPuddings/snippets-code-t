import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  CATEGORY_PANEL_DEFAULT_WIDTH,
  CATEGORY_PANEL_MAX_WIDTH,
  CATEGORY_PANEL_MIN_WIDTH,
  useLayoutStore
} from './layout';

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

  it('retains the chosen width across collapse and viewport changes', () => {
    const layout = useLayoutStore();
    layout.setCategoryPanelWidth(372);
    layout.setWindowWidth(1180);
    layout.toggleCategoryPanel();
    layout.setWindowWidth(920);
    layout.setWindowWidth(1180);
    layout.toggleCategoryPanel();
    expect(layout.effectiveCategoryPanelWidth).toBe(372);
  });

  it('limits stored widths and falls back for invalid persisted values', () => {
    const layout = useLayoutStore();
    layout.setCategoryPanelWidth(12);
    expect(layout.categoryPanelWidth).toBe(CATEGORY_PANEL_MIN_WIDTH);
    layout.setCategoryPanelWidth(2000);
    expect(layout.categoryPanelWidth).toBe(CATEGORY_PANEL_MAX_WIDTH);
    layout.setCategoryPanelWidth(NaN);
    expect(layout.categoryPanelWidth).toBe(CATEGORY_PANEL_DEFAULT_WIDTH);
    layout.$patch({ categoryPanelWidth: undefined });
    expect(layout.effectiveCategoryPanelWidth).toBe(
      CATEGORY_PANEL_DEFAULT_WIDTH
    );
  });
});
