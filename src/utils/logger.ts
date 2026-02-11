import { invoke } from '@tauri-apps/api/core'

// 调试模式控制（可以通过环境变量或配置控制）
const DEBUG_MODE = import.meta.env.DEV || false

export const logger = {
  info: (msg: string, data?: unknown) => {
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


