import { afterEach, describe, expect, it, vi } from 'vitest';
import i18n from '@/i18n';
import modal from './modal';
import {
  ErrorHandler,
  ErrorType,
  handleEditorError,
  handleLoadError,
  handleSaveError,
  handleConversionError
} from './error-handler';

vi.mock('./modal', () => ({
  default: { error: vi.fn(), warning: vi.fn() }
}));
const originalLocale = i18n.global.locale.value;
afterEach(() => {
  i18n.global.locale.value = originalLocale;
  vi.restoreAllMocks();
  vi.clearAllMocks();
});
const context = {
  type: ErrorType.API_ERROR,
  operation: 'test',
  timestamp: new Date()
};

describe('error notification language', () => {
  it('follows locale changes without reloading the module', () => {
    i18n.global.locale.value = 'en-US';
    expect(ErrorHandler.getUserMessage(new Error('network'), context)).toBe(
      i18n.global.t('errors.networkError')
    );
    i18n.global.locale.value = 'zh-CN';
    expect(ErrorHandler.getUserMessage(new Error('network'), context)).toBe(
      i18n.global.t('errors.networkError')
    );
  });

  it.each(['zh-CN', 'en-US'] as const)(
    'localizes classified and fallback errors in %s',
    (locale) => {
      i18n.global.locale.value = locale;
      for (const message of ['timeout', '拒绝访问', 'EACCES', 'readonly']) {
        const result = ErrorHandler.getUserMessage(new Error(message), context);
        expect(result).not.toContain('errors.');
        if (locale === 'en-US') expect(result).not.toMatch(/[\u4e00-\u9fff]/);
      }
      for (const type of Object.values(ErrorType)) {
        const result = ErrorHandler.getUserMessage(null, { ...context, type });
        expect(result).not.toContain('errors.');
        expect(result.length).toBeGreaterThan(0);
      }
    }
  );

  it('localizes editor and persistence helpers while preserving custom messages', () => {
    i18n.global.locale.value = 'en-US';
    vi.spyOn(ErrorHandler, 'log').mockImplementation(() => undefined);
    const error = new Error('failure');
    for (const [handle, key] of [
      [handleEditorError, 'errors.editorInitFailed'],
      [handleSaveError, 'errors.saveFailedRetry'],
      [handleLoadError, 'errors.loadFailedRetry'],
      [handleConversionError, 'errors.conversionFailed']
    ] as const) {
      handle(error);
      expect(modal.error).toHaveBeenLastCalledWith(i18n.global.t(key));
    }
    handleSaveError(new Error('Access denied'));
    expect(modal.error).toHaveBeenLastCalledWith(
      i18n.global.t('errors.workspaceNotWritable')
    );
    ErrorHandler.handle(error, context, { userMessage: 'Custom message' });
    expect(modal.error).toHaveBeenLastCalledWith('Custom message');
  });
});
