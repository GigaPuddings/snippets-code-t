import { ref, computed, type Ref, type ComputedRef } from 'vue';

/**
 * 焦点模式类型
 * - SEARCH: 焦点在搜索框，左右键移动光标，下键进入列表
 * - LIST: 焦点在结果列表，上下键导航列表，左右键切换分类
 * - TAB: 焦点在分类标签，左右键切换分类，下键进入列表
 */
export type FocusMode = 'SEARCH' | 'LIST' | 'TAB';

/**
 * 焦点模式返回值接口
 */
export interface UseFocusModeReturn {
  /** 当前焦点模式 */
  currentMode: Ref<FocusMode>;
  /** 是否可以切换到列表模式 */
  canSwitchToList: Ref<boolean>;
  /** 设置焦点模式 */
  setMode: (mode: FocusMode) => void;
  /** 设置是否可以切换到列表 */
  setCanSwitchToList: (can: boolean) => void;
  /** 是否在搜索框模式 */
  isSearchMode: ComputedRef<boolean>;
  /** 是否在列表模式 */
  isListMode: ComputedRef<boolean>;
  /** 是否在分类标签模式 */
  isTabMode: ComputedRef<boolean>;
  /** 重置到搜索框模式 */
  resetToSearch: () => void;
}

// 全局单例状态，确保所有组件共享同一个状态
const currentMode = ref<FocusMode>('SEARCH');
const canSwitchToList = ref(false); // 是否可以切换到列表（有搜索结果）

// 调试模式：设置为 true 可以在控制台看到焦点模式切换
const DEBUG_MODE = false;

/**
 * 焦点模式管理组合式函数
 * 管理搜索界面的焦点状态（搜索框、列表、分类标签）
 * 
 * @returns 焦点模式相关的状态和方法
 * 
 * @example
 * ```typescript
 * const { currentMode, setMode, isSearchMode, isListMode } = useFocusMode();
 * 
 * // 切换到列表模式
 * setMode('LIST');
 * 
 * // 检查当前模式
 * if (isSearchMode.value) {
 *   console.log('当前在搜索框模式');
 * }
 * ```
 */
export function useFocusMode(): UseFocusModeReturn {
  /**
   * 切换焦点模式
   * @param mode - 目标焦点模式
   */
  const setMode = (mode: FocusMode): void => {
    const oldMode = currentMode.value;
    currentMode.value = mode;
    if (DEBUG_MODE && oldMode !== mode) {
      console.log(`[FocusMode] ${oldMode} → ${mode}`);
    }
  };

  /**
   * 设置是否可以切换到列表
   * @param can - 是否可以切换
   */
  const setCanSwitchToList = (can: boolean): void => {
    canSwitchToList.value = can;
  };

  // 判断是否在搜索框模式
  const isSearchMode = computed(() => currentMode.value === 'SEARCH');

  // 判断是否在列表模式
  const isListMode = computed(() => currentMode.value === 'LIST');

  // 判断是否在分类标签模式
  const isTabMode = computed(() => currentMode.value === 'TAB');

  /**
   * 重置到搜索框模式
   */
  const resetToSearch = (): void => {
    currentMode.value = 'SEARCH';
  };

  return {
    currentMode,
    canSwitchToList,
    setMode,
    setCanSwitchToList,
    isSearchMode,
    isListMode,
    isTabMode,
    resetToSearch
  };
}
