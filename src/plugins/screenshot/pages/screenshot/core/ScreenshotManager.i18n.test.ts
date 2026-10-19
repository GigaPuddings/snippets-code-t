import { afterEach, describe, expect, it, vi } from 'vitest';
import i18n from '@/i18n';
import { ScreenshotManager } from './ScreenshotManager';

vi.mock('@/ai', () => ({
  chatWithAi: vi.fn(),
  getAiProviderStatus: vi.fn(),
  startAiProvider: vi.fn(),
  LOCAL_AI_PROVIDER_ID: 'local-ai'
}));

const originalLocale = i18n.global.locale.value;
afterEach(() => {
  i18n.global.locale.value = originalLocale;
});

describe('screenshot canvas locale', () => {
  it('draws progress text using the current language', () => {
    const context = {
      save: vi.fn(),
      restore: vi.fn(),
      fillRect: vi.fn(),
      fillText: vi.fn()
    };
    const overlay = { isLoading: true, engine: 'offline', loadingStage: '' };
    const manager = Object.assign(Object.create(ScreenshotManager.prototype), {
      canvas: { getContext: () => context },
      selectionRect: { x: 0, y: 0, width: 400, height: 200 },
      translationOverlay: overlay
    }) as { drawTranslationOverlay: () => void };
    i18n.global.locale.value = 'en-US';
    manager.drawTranslationOverlay();
    expect(context.fillText).toHaveBeenLastCalledWith(
      'Recognizing and translating...',
      200,
      100
    );
    overlay.engine = 'local-ai';
    overlay.loadingStage = 'starting-service';
    manager.drawTranslationOverlay();
    expect(context.fillText).toHaveBeenLastCalledWith(
      'Starting the AI model service...',
      200,
      100
    );
    overlay.loadingStage = 'translating';
    manager.drawTranslationOverlay();
    expect(context.fillText).toHaveBeenLastCalledWith(
      'Translating the image with AI...',
      200,
      100
    );
    i18n.global.locale.value = 'zh-CN';
    manager.drawTranslationOverlay();
    expect(context.fillText).toHaveBeenLastCalledWith(
      '正在由 AI 识图翻译...',
      200,
      100
    );
  });

  it('localizes OCR errors while retaining unrecognized diagnostic details', () => {
    const manager = Object.create(ScreenshotManager.prototype) as {
      getOcrTranslationErrorMessage: (message: string) => string;
    };
    i18n.global.locale.value = 'en-US';
    expect(
      manager.getOcrTranslationErrorMessage('OCR_RECOGNITION_LOW_QUALITY')
    ).toContain('OCR quality is too low');
    expect(
      manager.getOcrTranslationErrorMessage('RAPIDOCR_UNAVAILABLE')
    ).toContain('RapidOCR is not configured');
    expect(manager.getOcrTranslationErrorMessage('')).toBe(
      'OCR translation failed'
    );
    expect(manager.getOcrTranslationErrorMessage('Provider diagnostic')).toBe(
      'Provider diagnostic'
    );
  });
});
