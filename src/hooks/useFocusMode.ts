import { ref, computed } from 'vue';

/**
 * 焦点模式类型
 * SEARCH: 焦点在搜索框，左右键移动光标，下键进入列表
 * LIST: 焦点在结果列表，上下键导航列表，左右键切换分类
 * TAB: 焦点在分类标签，左右键切换分类，下键进入列表
 */
export type FocusMode = 'SEARCH' | 'LIST' | 'TAB';

// 全局单例状态，确保所有组件共享同一个状态
const currentMode = ref<FocusMode>('SEARCH');
const canSwitchToList = ref(false); // 是否可以切换到列表（有搜索结果）

// 调试模式：设置为 true 可以在控制台看到焦点模式切换
const DEBUG_MODE = false;

export function useFocusMode() {
  // 切换焦点模式
  const setMode = (mode: FocusMode) => {
    const oldMode = currentMode.value;
    currentMode.value = mode;
    if (DEBUG_MODE && oldMode !== mode) {
      console.log(`[FocusMode] ${oldMode} → ${mode}`);
    }
  };

  // 设置是否可以切换到列表
  const setCanSwitchToList = (can: boolean) => {
    canSwitchToList.value = can;
  };

  // 判断是否在搜索框模式
  const isSearchMode = computed(() => currentMode.value === 'SEARCH');

  // 判断是否在列表模式
  const isListMode = computed(() => currentMode.value === 'LIST');

  // 判断是否在分类标签模式
  const isTabMode = computed(() => currentMode.value === 'TAB');

  // 重置到搜索框模式
  const resetToSearch = () => {
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
