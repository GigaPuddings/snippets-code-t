import { invoke } from '@tauri-apps/api/core'

export const logger = {
  info: (msg: string, data?: any) => {
    invoke('frontend_log', { 
      level: 'info', 
      message: msg, 
      data: data ? JSON.stringify(data, null, 2) : null 
    }).catch(() => {})
  },
  error: (msg: string, data?: any) => {
    invoke('frontend_log', { 
      level: 'error', 
      message: msg, 
      data: data ? JSON.stringify(data, null, 2) : null 
    }).catch(() => {})
  },
  warn: (msg: string, data?: any) => {
    invoke('frontend_log', { 
      level: 'warn', 
      message: msg, 
      data: data ? JSON.stringify(data, null, 2) : null 
    }).catch(() => {})
  }
}

