/**
 * 错误消息映射
 * 提供各种错误类型的用户友好消息
 */

import { ErrorType } from './error-handler';

/**
 * 错误消息映射表
 */
export const ERROR_MESSAGES: Record<ErrorType, Record<string, string>> = {
  [ErrorType.API_ERROR]: {
    network: '网络连接失败，请检查网络设置',
    timeout: '请求超时，请稍后重试',
    server: '服务器错误，请稍后重试',
    unauthorized: '未授权，请检查访问权限',
    forbidden: '禁止访问，权限不足',
    notFound: '请求的资源不存在',
    default: 'API 调用失败，请重试'
  },
  [ErrorType.DATABASE_ERROR]: {
    connection: '数据库连接失败',
    query: '数据查询失败',
    save: '数据保存失败，请重试',
    update: '数据更新失败，请重试',
    delete: '数据删除失败，请重试',
    constraint: '数据约束冲突，请检查输入',
    default: '数据库操作失败'
  },
  [ErrorType.TAURI_COMMAND_ERROR]: {
    permission: '权限不足，无法执行操作',
    notFound: '命令未找到',
    invalidArgs: '参数无效',
    execution: '命令执行失败',
    default: '系统命令执行失败'
  },
  [ErrorType.VALIDATION_ERROR]: {
    required: '请填写必填字段',
    format: '数据格式不正确',
    length: '数据长度不符合要求',
    range: '数据超出有效范围',
    duplicate: '数据已存在',
    default: '数据验证失败'
  },
  [ErrorType.UNKNOWN_ERROR]: {
    default: '发生未知错误，请重试'
  }
};

/**
 * 获取错误消息
 * @param type - 错误类型
 * @param key - 错误消息键
 * @returns 错误消息
 */
export function getErrorMessage(type: ErrorType, key = 'default'): string {
  const messages = ERROR_MESSAGES[type];
  return messages[key] || messages.default || '发生未知错误';
}

/**
 * 成功消息
 */
export const SUCCESS_MESSAGES = {
  save: '保存成功',
  update: '更新成功',
  delete: '删除成功',
  create: '创建成功',
  copy: '复制成功',
  sync: '同步成功',
  import: '导入成功',
  export: '导出成功'
};

/**
 * 获取成功消息
 * @param key - 消息键
 * @returns 成功消息
 */
export function getSuccessMessage(key: keyof typeof SUCCESS_MESSAGES): string {
  return SUCCESS_MESSAGES[key] || '操作成功';
}
