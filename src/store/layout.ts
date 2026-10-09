import { defineStore } from 'pinia';

/** 工作区侧栏折叠状态与窗口宽度自适应 */
const WIDTH_THRESHOLD_CATEGORY = 960; // 低于此宽度时自动折叠分类面板
export const CATEGORY_PANEL_DEFAULT_WIDTH = 292;
export const CATEGORY_PANEL_MIN_WIDTH = 240;
export const CATEGORY_PANEL_MAX_WIDTH = 480;

const normalizeCategoryPanelWidth = (width: number): number =>
  Number.isFinite(width)
    ? Math.min(
        CATEGORY_PANEL_MAX_WIDTH,
        Math.max(CATEGORY_PANEL_MIN_WIDTH, Math.round(width))
      )
    : CATEGORY_PANEL_DEFAULT_WIDTH;

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    /** 用户偏好：分类面板是否折叠。 */
    categoryPanelCollapsed: false,
    /** 用户调整后的侧栏宽度；窗口临时变窄不覆盖此偏好。 */
    categoryPanelWidth: CATEGORY_PANEL_DEFAULT_WIDTH,
    /** 窄窗口中显式展开，离开窄窗口后恢复自动布局；不持久化。 */
    categoryPanelNarrowExpanded: false,
    /** 当前窗口宽度（由 resize 监听更新，用于自动折叠） */
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1200
  }),
  getters: {
    /** 兼容旧配置缺少宽度或持久化值无效的情况。 */
    effectiveCategoryPanelWidth(state): number {
      return normalizeCategoryPanelWidth(state.categoryPanelWidth);
    },
    /** 窄窗口默认折叠，允许通过顶部按钮显式展开。 */
    effectiveCategoryCollapsed(state): boolean {
      return (
        state.categoryPanelCollapsed ||
        (state.windowWidth < WIDTH_THRESHOLD_CATEGORY &&
          !state.categoryPanelNarrowExpanded)
      );
    }
  },
  actions: {
    setCategoryPanelWidth(width: number | string) {
      this.categoryPanelWidth = normalizeCategoryPanelWidth(Number(width));
    },
    setWindowWidth(width: number) {
      this.windowWidth = width;
      if (width >= WIDTH_THRESHOLD_CATEGORY) {
        this.categoryPanelNarrowExpanded = false;
      }
    },
    toggleCategoryPanel() {
      const shouldExpand = this.effectiveCategoryCollapsed;
      this.categoryPanelCollapsed = !shouldExpand;
      this.categoryPanelNarrowExpanded =
        shouldExpand && this.windowWidth < WIDTH_THRESHOLD_CATEGORY;
    }
  },
  persist: {
    pick: ['categoryPanelCollapsed', 'categoryPanelWidth']
  }
});
