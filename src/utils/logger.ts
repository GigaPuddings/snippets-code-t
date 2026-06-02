import { invoke } from '@tauri-apps/api/core'
import {
  appendFrontendDiagnostic,
  isDeveloperModeEnabled,
  stringifyDiagnosticValue
} from '@/utils/developer-diagnostics'

const shouldWriteDebugLog = (): boolean =>
  import.meta.env.DEV ||
  import.meta.env.VITE_ENABLE_DEBUG_LOG === 'true' ||
  isDeveloperModeEnabled()

const shouldForwardFrontendLog = (
  level: 'debug' | 'info' | 'warn' | 'error'
): boolean => (
  level === 'warn' ||
  level === 'error' ||
  import.meta.env.DEV ||
  import.meta.env.VITE_ENABLE_DEBUG_LOG === 'true' ||
  isDeveloperModeEnabled()
)

const writeLog = (
  level: 'debug' | 'info' | 'warn' | 'error',
  message: string,
  data?: unknown
) => {
  appendFrontendDiagnostic(level, message, data)
  if (!shouldForwardFrontendLog(level)) return
  invoke('frontend_log', {
    level,
    message,
    data: data === undefined ? null : stringifyDiagnosticValue(data)
  }).catch(() => {})
}

export const logger = {
  info: (msg: string, data?: unknown, ..._args: unknown[]) => {
    writeLog('info', msg, data)
  },
  error: (msg: string, data?: unknown) => {
    writeLog('error', msg, data)
  },
  warn: (msg: string, data?: unknown) => {
    writeLog('warn', msg, data)
  },
  debug: (msg: string, data?: unknown) => {
    if (shouldWriteDebugLog()) {
      writeLog('debug', msg, data)
    }
  }
}

export const ocrDiagnosticLogger = {
  log: (message: string, data?: unknown) => {
    invoke('append_ocr_diagnostic_log', {
      message,
      data: data === undefined ? null : stringifyDiagnosticValue(data)
    }).catch(() => {})
  }
}
