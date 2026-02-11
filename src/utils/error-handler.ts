/**
 * 统一错误处理系统
 * 提供集中式的错误捕获、日志记录和用户提示
 */

import { ElMessage } from 'element-plus';

/**
 * 错误类型枚举
 */
export enum ErrorType {
  /** API 错误 */
  API_ERROR = 'API_ERROR',
  /** 数据库错误 */
  DATABASE_ERROR = 'DATABASE_ERROR',
  /** Tauri 命令错误 */
  TAURI_COMMAND_ERROR = 'TAURI_COMMAND_ERROR',
  /** 验证错误 */
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  /** 未知错误 */
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

/**
 * 错误上下文接口
 */
export interface ErrorContext {
  /** 错误类型 */
  type: ErrorType;
  /** 操作名称 */
  operation: string;
  /** 错误详情 */
  details?: unknown;
  /** 时间戳 */
  timestamp: Date;
}

/**
 * 错误处理选项接口
 */
export interface ErrorHandlerOptions {
  /** 是否显示通知 */
  showNotification?: boolean;
  /** 是否记录到控制台 */
  logToConsole?: boolean;
  /** 是否记录到文件 */
  logToFile?: boolean;
  /** 自定义用户消息 */
  userMessage?: string;
  /** 通知持续时间（毫秒） */
  duration?: number;
}

/**
 * 错误处理器类
 */
export class ErrorHandler {
  /**
   * 处理错误的主方法
   * @param error - 错误对象
   * @param context - 错误上下文
   * @param options - 错误处理选项
   */
  static handle(
    error: Error | unknown,
    context: ErrorContext,
    options: ErrorHandlerOptions = {}
  ): void {
    const {
      showNotification = true,
      logToConsole = true,
      logToFile = false,
      userMessage,
      duration = 3000
    } = options;

    // 记录错误日志
    if (logToConsole) {
      this.log(error, context);
    }

    // TODO: 实现文件日志记录
    if (logToFile) {
      // 将来可以实现写入日志文件
    }

    // 显示用户友好的错误消息
    if (showNotification) {
      const message = userMessage || this.getUserMessage(error, context);
      
      if (context.type === ErrorType.VALIDATION_ERROR) {
        ElMessage.warning({
          message,
          duration
        });
      } else {
        ElMessage.error({
          message,
          duration
        });
      }
    }
  }

  /**
   * 包装异步函数，自动处理错误
   * @param fn - 要包装的异步函数
   * @param context - 错误上下文（部分）
   * @returns 包装后的函数
   * 
   * @example
   * ```typescript
   * const fetchData = ErrorHandler.wrapAsync(
   *   async () => {
   *     return await invoke('get_data');
   *   },
   *   {
   *     type: ErrorType.API_ERROR,
   *     operation: 'fetchData'
   *   }
   * );
   * 
   * const data = await fetchData();
   * ```
   */
  static wrapAsync<T, Args extends unknown[]>(
    fn: (...args: Args) => Promise<T>,
    context: Partial<ErrorContext>
  ): (...args: Args) => Promise<T | undefined> {
    return async (...args: Args): Promise<T | undefined> => {
      try {
        return await fn(...args);
      } catch (error) {
        this.handle(error, {
          type: context.type || ErrorType.UNKNOWN_ERROR,
          operation: context.operation || 'unknown',
          details: context.details,
          timestamp: new Date()
        });
        return undefined;
      }
    };
  }

  /**
   * 获取用户友好的错误消息
   * @param error - 错误对象
   * @param context - 错误上下文
   * @returns 用户友好的错误消息
   */
  static getUserMessage(error: Error | unknown, context: ErrorContext): string {
    // 如果是 Error 对象，尝试从 message 中提取信息
    if (error instanceof Error) {
      // 检查是否是网络错误
      if (error.message.includes('fetch') || error.message.includes('network')) {
        return '网络连接失败，请检查网络设置';
      }
      
      // 检查是否是超时错误
      if (error.message.includes('timeout')) {
        return '请求超时，请稍后重试';
      }
    }

    // 根据错误类型返回默认消息
    switch (context.type) {
      case ErrorType.API_ERROR:
        return 'API 调用失败，请重试';
      case ErrorType.DATABASE_ERROR:
        return '数据库操作失败，请重试';
      case ErrorType.TAURI_COMMAND_ERROR:
        return '系统命令执行失败';
      case ErrorType.VALIDATION_ERROR:
        return '数据验证失败，请检查输入';
      default:
        return '发生未知错误，请重试';
    }
  }

  /**
   * 记录错误日志
   * @param error - 错误对象
   * @param context - 错误上下文
   */
  static log(error: Error | unknown, context: ErrorContext): void {
    console.group(`[${context.type}] ${context.operation}`);
    console.error('Error:', error);
    console.log('Context:', {
      operation: context.operation,
      type: context.type,
      timestamp: context.timestamp.toISOString(),
      details: context.details
    });
    console.groupEnd();
  }

  /**
   * 显示成功消息
   * @param message - 成功消息
   * @param duration - 持续时间（毫秒）
   */
  static success(message: string, duration = 2000): void {
    ElMessage.success({
      message,
      duration
    });
  }

  /**
   * 显示警告消息
   * @param message - 警告消息
   * @param duration - 持续时间（毫秒）
   */
  static warning(message: string, duration = 3000): void {
    ElMessage.warning({
      message,
      duration
    });
  }

  /**
   * 显示信息消息
   * @param message - 信息消息
   * @param duration - 持续时间（毫秒）
   */
  static info(message: string, duration = 2000): void {
    ElMessage.info({
      message,
      duration
    });
  }
}

// ============================================================================
// 便捷函数 - 为特定场景提供简化的错误处理
// ============================================================================

/**
 * 处理 API 错误
 * 
 * 用于处理 API 调用过程中发生的错误，自动显示错误提示并记录日志
 * 
 * @param error - 错误对象
 * @param context - 上下文描述（可选），用于标识错误发生的位置
 * 
 * @example
 * ```typescript
 * try {
 *   const data = await invoke('get_data');
 * } catch (error) {
 *   handleApiError(error, '获取数据');
 * }
 * ```
 */
export function handleApiError(error: unknown, context?: string): void {
  ErrorHandler.handle(error, {
    type: ErrorType.API_ERROR,
    operation: context || 'API 调用',
    timestamp: new Date()
  });
}

/**
 * 处理编辑器错误
 * 
 * 用于处理编辑器加载或操作过程中发生的错误
 * 
 * @param error - 错误对象
 * @param context - 上下文描述（可选），用于标识错误发生的位置
 * 
 * @example
 * ```typescript
 * try {
 *   await loadEditor();
 * } catch (error) {
 *   handleEditorError(error, 'TipTap 编辑器加载');
 * }
 * ```
 */
export function handleEditorError(error: unknown, context?: string): void {
  ErrorHandler.handle(error, {
    type: ErrorType.UNKNOWN_ERROR,
    operation: context || '编辑器操作',
    timestamp: new Date()
  }, {
    userMessage: '编辑器加载失败，请刷新页面重试'
  });
}

/**
 * 处理保存错误
 * 
 * 用于处理数据保存过程中发生的错误
 * 
 * @param error - 错误对象
 * @param context - 上下文描述（可选），用于标识错误发生的位置
 * 
 * @example
 * ```typescript
 * try {
 *   await saveFragment(data);
 * } catch (error) {
 *   handleSaveError(error, '保存片段');
 * }
 * ```
 */
export function handleSaveError(error: unknown, context?: string): void {
  ErrorHandler.handle(error, {
    type: ErrorType.DATABASE_ERROR,
    operation: context || '保存操作',
    timestamp: new Date()
  }, {
    userMessage: '保存失败，请重试'
  });
}

/**
 * 处理加载错误
 * 
 * 用于处理数据加载过程中发生的错误
 * 
 * @param error - 错误对象
 * @param context - 上下文描述（可选），用于标识错误发生的位置
 * 
 * @example
 * ```typescript
 * try {
 *   const fragment = await getFragmentContent(id);
 * } catch (error) {
 *   handleLoadError(error, '加载片段内容');
 * }
 * ```
 */
export function handleLoadError(error: unknown, context?: string): void {
  ErrorHandler.handle(error, {
    type: ErrorType.DATABASE_ERROR,
    operation: context || '加载操作',
    timestamp: new Date()
  }, {
    userMessage: '加载失败，请重试'
  });
}

/**
 * 处理转换错误
 * 
 * 用于处理格式转换过程中发生的错误（如 Markdown 转 HTML）
 * 
 * @param error - 错误对象
 * @param context - 上下文描述（可选），用于标识错误发生的位置
 * 
 * @example
 * ```typescript
 * try {
 *   const html = markdownToHtml(markdown);
 * } catch (error) {
 *   handleConversionError(error, 'Markdown 转 HTML');
 * }
 * ```
 */
export function handleConversionError(error: unknown, context?: string): void {
  ErrorHandler.handle(error, {
    type: ErrorType.UNKNOWN_ERROR,
    operation: context || '转换操作',
    timestamp: new Date()
  }, {
    userMessage: '格式转换失败'
  });
}
