import { invoke } from '@tauri-apps/api/core'

// 调试模式控制（开发环境默认开启；生产环境默认关闭，可通过 VITE_ENABLE_DEBUG_LOG=true 打开）
const DEBUG_MODE = import.meta.env.DEV || import.meta.env.VITE_ENABLE_DEBUG_LOG === 'true'

export const logger = {
  info: (msg: string, data?: unknown, ..._args: unknown[]) => {
    invoke('frontend_log', { 
      level: 'info', 
      message: msg, 
      data: data ? JSON.stringify(data, null, 2) : null 
    }).catch(() => {})
  },
  error: (msg: string, data?: unknown) => {
    invoke('frontend_log', { 
      level: 'error', 
      message: msg, 
      data: data ? JSON.stringify(data, null, 2) : null 
    }).catch(() => {})
  },
  warn: (msg: string, data?: unknown) => {
    invoke('frontend_log', { 
      level: 'warn', 
      message: msg, 
      data: data ? JSON.stringify(data, null, 2) : null 
    }).catch(() => {})
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (msg: string, data?: unknown) => {
    if (DEBUG_MODE) {
      invoke('frontend_log', { 
        level: 'info', 
        message: `[DEBUG] ${msg}`, 
        data: data ? JSON.stringify(data, null, 2) : null 
      }).catch(() => {})
    }
  }
}

export const ocrDiagnosticLogger = {
  log: (message: string, data?: unknown) => {
    invoke('append_ocr_diagnostic_log', {
      message,
      data: data === undefined ? null : stringifyLogData(data)
    }).catch(() => {})
  }
}

function stringifyLogData(data: unknown): string {
  if (data instanceof Error) {
    return `${data.name}: ${data.message}\n${data.stack || ''}`.trim()
  }

  if (typeof data === 'string') {
    return data
  }

  try {
    return JSON.stringify(data, null, 2)
  } catch {
    return String(data)
  }
}

