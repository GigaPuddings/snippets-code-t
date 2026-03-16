import { ref } from 'vue';

/**
 * 防抖事件处理工具
 * 用于防止短时间内多次触发同一事件导致重复处理
 */

interface DebouncedEventOptions {
  /** 防抖延迟时间（毫秒） */
  delay?: number;
  /** 是否立即执行（不等待延迟） */
  immediate?: boolean;
}

interface PendingEvent {
  resolve: () => void;
  timestamp: number;
}

/**
 * 创建防抖事件处理器
 * @returns 防抖事件处理函数
 */
export function createDebouncedHandler() {
  /** 待处理的事件队列 */
  const pendingEvents = ref<PendingEvent[]>([]);
  
  /** 正在处理的标志 */
  const isProcessing = ref(false);
  
  /** 防抖延迟（毫秒） */
  let delay = 300;
  
  /** 定时器 ID */
  let timer: ReturnType<typeof setTimeout> | null = null;
  
  /**
   * 设置防抖选项
   */
  const setOptions = (options: DebouncedEventOptions) => {
    if (options.delay !== undefined) {
      delay = options.delay;
    }
  };
  
  /**
   * 处理事件
   * @param handler 要执行的异步处理函数
   * @returns Promise
   */
  const handle = async <T>(handler: () => Promise<T>): Promise<T | undefined> => {
    // 如果正在处理，将事件加入队列
    if (isProcessing.value) {
      return new Promise((resolve) => {
        pendingEvents.value.push({
          resolve: resolve as () => void,
          timestamp: Date.now(),
        });
      });
    }
    
    isProcessing.value = true;
    
    try {
      const result = await handler();
      
      // 处理队列中的下一个事件
      processQueue();
      
      return result;
    } catch (error) {
      isProcessing.value = false;
      processQueue();
      throw error;
    }
  };
  
  /**
   * 处理队列中的下一个事件
   */
  const processQueue = () => {
    if (pendingEvents.value.length === 0) {
      isProcessing.value = false;
      return;
    }
    
    // 清空队列
    const queue = [...pendingEvents.value];
    pendingEvents.value = [];
    
    // 延迟处理队列中的事件
    if (timer) {
      clearTimeout(timer);
    }
    
    timer = setTimeout(() => {
      // 触发队列中所有事件的 resolve，让它们重新执行
      queue.forEach((event) => {
        event.resolve();
      });
    }, delay);
  };
  
  return {
    setOptions,
    handle,
    /** 当前是否正在处理 */
    isProcessing: () => isProcessing.value,
    /** 队列中待处理的事件数量 */
    pendingCount: () => pendingEvents.value.length,
  };
}

/**
 * 全局单例的事件处理器
 */
const globalHandlers = new Map<string, ReturnType<typeof createDebouncedHandler>>();

/**
 * 获取或创建指定事件类型的防抖处理器
 * @param eventType 事件类型标识
 * @param delay 防抖延迟时间
 */
export function getDebouncedHandler(eventType: string, delay = 300) {
  if (!globalHandlers.has(eventType)) {
    const handler = createDebouncedHandler();
    handler.setOptions({ delay });
    globalHandlers.set(eventType, handler);
  }
  return globalHandlers.get(eventType)!;
}

/**
 * 清除指定事件类型的处理器
 * @param eventType 事件类型标识
 */
export function clearDebouncedHandler(eventType: string) {
  globalHandlers.delete(eventType);
}

/**
 * 清除所有防抖处理器
 */
export function clearAllDebouncedHandlers() {
  globalHandlers.clear();
}
