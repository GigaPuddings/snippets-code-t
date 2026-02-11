/**
 * API 相关类型定义
 */

/**
 * API 响应通用接口
 * @template T - 响应数据类型
 */
export interface ApiResponse<T> {
  /** 请求是否成功 */
  success: boolean;
  /** 响应数据 */
  data?: T;
  /** 错误信息 */
  error?: ApiError;
}

/**
 * API 错误信息接口
 */
export interface ApiError {
  /** 错误代码 */
  code: string;
  /** 错误消息 */
  message: string;
  /** 错误详情 */
  details?: unknown;
}

/**
 * GitHub API 响应类型
 */
export interface GitHubApiResponse {
  /** 仓库名称 */
  name: string;
  /** 仓库描述 */
  description?: string;
  /** 仓库 URL */
  html_url: string;
  /** 创建时间 */
  created_at: string;
  /** 更新时间 */
  updated_at: string;
}

/**
 * 翻译 API 响应类型
 */
export interface TranslationApiResponse {
  /** 翻译结果 */
  translatedText: string;
  /** 源语言 */
  sourceLanguage?: string;
  /** 目标语言 */
  targetLanguage: string;
}
