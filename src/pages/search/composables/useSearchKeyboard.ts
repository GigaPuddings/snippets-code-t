/**
 * 搜索键盘导航 Composable
 * 处理搜索页面的键盘事件和导航逻辑
 */

import { type Ref } from 'vue';

/**
 * 搜索键盘选项接口
 */
export interface SearchKeyboardOptions {
  /** 搜索输入框引用 */
  searchInputRef: Ref<HTMLInputElement | null>;
  /** 结果组件引用 */
  resultRef: Ref<{ enterListMode: () => void; enterTabMode: () => void } | null>;
  /** 是否处于搜索模式 */
  isSearchMode: Ref<boolean>;
  /** 是否可以切换到列表模式 */
  canSwitchToList: Ref<boolean>;
  /** 搜索结果数量 */
  searchResultsLength: number;
  /** 执行搜索的回调函数 */
  handleEnterSearch: () => Promise<void>;
}

/**
 * 搜索键盘导航返回值接口
 */
export interface SearchKeyboardReturn {
  /** 处理键盘按下事件 */
  handleKeyDown: (e: Event) => Promise<void>;
}

/**
 * 搜索键盘导航 Hook
 * 
 * 提供搜索页面的键盘导航功能，包括：
 * - Enter: 执行搜索或进入列表模式
 * - ArrowDown: 进入列表模式
 * - ArrowLeft/Right: 在边界时切换到分类标签
 * - Tab: 切换到分类标签模式
 * - Shift+Tab: 进入列表模式
 * 
 * @param options - 键盘导航选项
 * @returns 键盘事件处理函数
 * 
 * @example
 * ```typescript
 * const { handleKeyDown } = useSearchKeyboard({
 *   searchInputRef,
 *   resultRef,
 *   isSearchMode,
 *   canSwitchToList,
 *   searchResultsLength: searchResults.value.length,
 *   handleEnterSearch
 * });
 * ```
 */
export function useSearchKeyboard(options: SearchKeyboardOptions): SearchKeyboardReturn {
  const {
    searchInputRef,
    resultRef,
    isSearchMode,
    canSwitchToList,
    searchResultsLength,
    handleEnterSearch
  } = options;

  /**
   * 处理键盘按下事件
   * @param e - 键盘事件
   */
  const handleKeyDown = async (e: Event): Promise<void> => {
    if (!(e instanceof KeyboardEvent)) return;
    
    // 只在搜索框模式下处理键盘事件
    if (!isSearchMode.value) return;

    const input = searchInputRef.value;
    if (!input) return;

    switch (e.code) {
      case 'Enter':
        if (!e.isComposing) {
          // 如果没有搜索结果，执行搜索
          if (searchResultsLength === 0) {
            await handleEnterSearch();
          } else {
            // 如果有搜索结果，进入列表模式
            e.preventDefault();
            input.blur(); // 让输入框失焦
            resultRef.value?.enterListMode();
          }
        }
        break;
      
      case 'ArrowDown':
        // 下键进入列表模式
        if (canSwitchToList.value) {
          e.preventDefault();
          input.blur(); // 让输入框失焦
          resultRef.value?.enterListMode();
        }
        break;
      
      case 'ArrowLeft':
      case 'ArrowRight':
        // 当光标在边界时，可以用左右键切换到分类标签
        handleArrowNavigation(e, input);
        break;
      
      case 'Tab':
        handleTabNavigation(e, input);
        break;
    }
  };

  /**
   * 处理左右箭头导航
   * @param e - 键盘事件
   * @param input - 输入框元素
   */
  function handleArrowNavigation(e: KeyboardEvent, input: HTMLInputElement): void {
    const inputValue = input.value || '';
    const atStart = input.selectionStart === 0;
    const atEnd = input.selectionEnd === inputValue.length;
    
    // 边界检测：光标在开头按左键，或在结尾按右键
    if ((e.code === 'ArrowLeft' && atStart) || (e.code === 'ArrowRight' && atEnd)) {
      // 即使没有结果也允许进入分类标签模式（用于切换分类）
      e.preventDefault();
      input.blur(); // 让输入框失焦
      resultRef.value?.enterTabMode();
    }
  }

  /**
   * 处理 Tab 键导航
   * @param e - 键盘事件
   * @param input - 输入框元素
   */
  function handleTabNavigation(e: KeyboardEvent, input: HTMLInputElement): void {
    e.preventDefault();
    // Shift+Tab：如果有结果直接进入列表模式
    if (e.shiftKey && canSwitchToList.value) {
      input.blur(); // 让输入框失焦
      resultRef.value?.enterListMode();
    } else {
      // Tab 键：进入分类标签模式（即使没有结果也可以切换分类）
      input.blur(); // 让输入框失焦
      resultRef.value?.enterTabMode();
    }
  }

  return {
    handleKeyDown
  };
}
