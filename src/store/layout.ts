import { defineStore } from 'pinia';

/** 左侧分类面板、片段列表面板折叠状态与窗口宽度自适应 */
const WIDTH_THRESHOLD_CATEGORY = 960; // 低于此宽度时自动折叠分类面板
const WIDTH_THRESHOLD_CONTENT_LIST = 768; // 低于此宽度时自动折叠片段列表面板

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    /** 用户偏好：分类面板是否折叠（仅窗口足够宽时生效） */
    categoryPanelCollapsed: false,
    /** 用户偏好：片段列表面板是否折叠（仅窗口足够宽时生效） */
    contentListPanelCollapsed: false,
    /** 当前窗口宽度（由 resize 监听更新，用于自动折叠） */
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1200
  }),
  getters: {
    /** 实际是否折叠分类面板：用户偏好 或 窗口过窄时强制折叠 */
    effectiveCategoryCollapsed(state): boolean {
      return state.categoryPanelCollapsed || state.windowWidth < WIDTH_THRESHOLD_CATEGORY;
    },
    /** 实际是否折叠片段列表面板：用户偏好 或 窗口过窄时强制折叠 */
    effectiveContentListCollapsed(state): boolean {
      return state.contentListPanelCollapsed || state.windowWidth < WIDTH_THRESHOLD_CONTENT_LIST;
    },
    /** 窗口是否足够宽以显示分类面板折叠按钮（点击后可实际展开） */
    isWideEnoughForCategoryPanel(state): boolean {
      return state.windowWidth >= WIDTH_THRESHOLD_CATEGORY;
    },
    /** 窗口是否足够宽以显示片段列表面板折叠按钮 */
    isWideEnoughForContentListPanel(state): boolean {
      return state.windowWidth >= WIDTH_THRESHOLD_CONTENT_LIST;
    }
  },
  actions: {
    setWindowWidth(width: number) {
      this.windowWidth = width;
    },
    toggleCategoryPanel() {
      this.categoryPanelCollapsed = !this.categoryPanelCollapsed;
    },
    toggleContentListPanel() {
      this.contentListPanelCollapsed = !this.contentListPanelCollapsed;
    }
  },
  persist: {
    pick: ['categoryPanelCollapsed', 'contentListPanelCollapsed']
  }
});
