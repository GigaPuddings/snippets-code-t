import { ElMessage } from 'element-plus';
import i18n from '@/i18n';

const t = i18n.global.t;

/**
 * Error types for better categorization
 */
export enum ErrorType {
  API = 'api',
  EDITOR = 'editor',
  SAVE = 'save',
  LOAD = 'load',
  CONVERSION = 'conversion',
  VALIDATION = 'validation',
  NETWORK = 'network',
  UNKNOWN = 'unknown'
}

/**
 * Custom error class with type information
 */
export class AppError extends Error {
  type: ErrorType;
  originalError?: Error;
  
  constructor(message: string, type: ErrorType = ErrorType.UNKNOWN, originalError?: Error) {
    super(message);
    this.name = 'AppError';
    this.type = type;
    this.originalError = originalError;
  }
}

/**
 * Parse error message from various error types
 */
function parseErrorMessage(error: any): string {
  if (typeof error === 'string') {
    return error;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  if (error && typeof error === 'object') {
    if (error.message) {
      return error.message;
    }
    if (error.error) {
      return parseErrorMessage(error.error);
    }
  }
  
  return String(error);
}

/**
 * Determine error type from error message
 */
function determineErrorType(errorMessage: string): ErrorType {
  const lowerMessage = errorMessage.toLowerCase();
  
  if (lowerMessage.includes('invalid fragment type') || 
      lowerMessage.includes('invalid format') ||
      lowerMessage.includes('invalid json')) {
    return ErrorType.VALIDATION;
  }
  
  if (lowerMessage.includes('network') || 
      lowerMessage.includes('connection') ||
      lowerMessage.includes('timeout')) {
    return ErrorType.NETWORK;
  }
  
  if (lowerMessage.includes('editor')) {
    return ErrorType.EDITOR;
  }
  
  if (lowerMessage.includes('save')) {
    return ErrorType.SAVE;
  }
  
  if (lowerMessage.includes('load')) {
    return ErrorType.LOAD;
  }
  
  if (lowerMessage.includes('convert')) {
    return ErrorType.CONVERSION;
  }
  
  return ErrorType.UNKNOWN;
}

/**
 * Get user-friendly error message based on error type
 */
function getUserFriendlyMessage(error: AppError): string {
  const errorMessage = error.message;
  
  // Check for specific error patterns
  if (errorMessage.includes('Invalid fragment type')) {
    return t('errors.invalidFragmentType');
  }
  
  if (errorMessage.includes('Invalid format')) {
    return t('errors.invalidFormat');
  }
  
  if (errorMessage.includes('Invalid JSON')) {
    return t('errors.invalidMetadata');
  }
  
  // Use error type to determine message
  switch (error.type) {
    case ErrorType.EDITOR:
      return t('errors.editorLoadFailed');
    case ErrorType.SAVE:
      return t('errors.saveFailedRetry');
    case ErrorType.LOAD:
      return t('errors.loadFailedRetry');
    case ErrorType.CONVERSION:
      return t('errors.conversionFailed');
    case ErrorType.VALIDATION:
      return t('errors.validationFailed');
    case ErrorType.NETWORK:
      return t('errors.networkError');
    default:
      return t('errors.unknownError');
  }
}

/**
 * Handle API errors with user-friendly messages
 */
export function handleApiError(error: any, context?: string): AppError {
  const errorMessage = parseErrorMessage(error);
  const errorType = determineErrorType(errorMessage);
  const appError = new AppError(errorMessage, errorType, error instanceof Error ? error : undefined);
  
  // Log detailed error to console for debugging
  console.error(`[API Error]${context ? ` ${context}:` : ''}`, {
    message: errorMessage,
    type: errorType,
    originalError: error,
    stack: appError.stack
  });
  
  // Show user-friendly message
  const userMessage = getUserFriendlyMessage(appError);
  ElMessage.error(userMessage);
  
  return appError;
}

/**
 * Handle editor errors
 */
export function handleEditorError(error: any, context?: string): AppError {
  const errorMessage = parseErrorMessage(error);
  const appError = new AppError(errorMessage, ErrorType.EDITOR, error instanceof Error ? error : undefined);
  
  console.error(`[Editor Error]${context ? ` ${context}:` : ''}`, {
    message: errorMessage,
    originalError: error,
    stack: appError.stack
  });
  
  ElMessage.error(t('errors.editorLoadFailed'));
  
  return appError;
}

/**
 * Handle save errors
 */
export function handleSaveError(error: any, context?: string): AppError {
  const errorMessage = parseErrorMessage(error);
  const appError = new AppError(errorMessage, ErrorType.SAVE, error instanceof Error ? error : undefined);
  
  console.error(`[Save Error]${context ? ` ${context}:` : ''}`, {
    message: errorMessage,
    originalError: error,
    stack: appError.stack
  });
  
  ElMessage.error(t('errors.saveFailedRetry'));
  
  return appError;
}

/**
 * Handle load errors
 */
export function handleLoadError(error: any, context?: string): AppError {
  const errorMessage = parseErrorMessage(error);
  const appError = new AppError(errorMessage, ErrorType.LOAD, error instanceof Error ? error : undefined);
  
  console.error(`[Load Error]${context ? ` ${context}:` : ''}`, {
    message: errorMessage,
    originalError: error,
    stack: appError.stack
  });
  
  ElMessage.error(t('errors.loadFailedRetry'));
  
  return appError;
}

/**
 * Handle conversion errors
 */
export function handleConversionError(error: any, context?: string): AppError {
  const errorMessage = parseErrorMessage(error);
  const appError = new AppError(errorMessage, ErrorType.CONVERSION, error instanceof Error ? error : undefined);
  
  console.error(`[Conversion Error]${context ? ` ${context}:` : ''}`, {
    message: errorMessage,
    originalError: error,
    stack: appError.stack
  });
  
  ElMessage.error(t('errors.conversionFailed'));
  
  return appError;
}

/**
 * Wrap async operations with error handling
 */
export async function withErrorHandling<T>(
  operation: () => Promise<T>,
  errorHandler: (error: any, context?: string) => AppError = handleApiError,
  context?: string
): Promise<T | null> {
  try {
    return await operation();
  } catch (error) {
    errorHandler(error, context);
    return null;
  }
}

/**
 * Validate fragment data before saving
 */
export function validateFragmentData(data: {
  title?: string;
  content?: string;
  type?: string;
  format?: string;
}): { valid: boolean; error?: string } {
  if (data.title !== undefined && data.title.trim() === '') {
    return { valid: false, error: t('errors.emptyTitle') };
  }
  
  if (data.type && !['code', 'note'].includes(data.type)) {
    return { valid: false, error: t('errors.invalidFragmentType') };
  }
  
  if (data.format && !['plain', 'markdown', 'html'].includes(data.format)) {
    return { valid: false, error: t('errors.invalidFormat') };
  }
  
  return { valid: true };
}
