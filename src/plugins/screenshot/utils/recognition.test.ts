import { beforeEach, describe, expect, it, vi } from 'vitest';
import i18n from '@/i18n';

const mocks = vi.hoisted(() => ({
  initialize: vi.fn(),
  isEnabled: vi.fn(),
  recognizeFromImageData: vi.fn(),
  recognizeImageWithLocalAi: vi.fn()
}));
vi.mock('@/store/plugins', () => ({ usePluginStore: () => mocks }));
vi.mock('./ocr', () => ({
  recognizeFromImageData: mocks.recognizeFromImageData
}));
vi.mock('./aiOcr', () => ({
  recognizeImageWithLocalAi: mocks.recognizeImageWithLocalAi
}));

import {
  recognizeScreenshotText,
  requireScreenshotPlugin,
  screenshotCapabilityError
} from './recognition';

describe('optional screenshot capabilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    i18n.global.locale.value = 'en-US';
    mocks.initialize.mockResolvedValue(undefined);
    mocks.isEnabled.mockReturnValue(false);
    mocks.recognizeFromImageData.mockResolvedValue({
      text: 'OCR text',
      blocks: []
    });
  });

  it('uses RapidOCR text without invoking a missing or disabled Local AI plugin', async () => {
    const onBlocks = vi.fn();
    const result = await recognizeScreenshotText('image', 'auto', onBlocks);
    expect(result).toMatchObject({ text: 'OCR text', engine: 'rapidocr' });
    expect(mocks.recognizeImageWithLocalAi).not.toHaveBeenCalled();
    expect(onBlocks).toHaveBeenCalledWith([]);
  });

  it('keeps AI OCR available when the optional RapidOCR resource is absent', async () => {
    mocks.isEnabled.mockReturnValue(true);
    mocks.recognizeFromImageData.mockRejectedValue(
      new Error('RAPIDOCR_UNAVAILABLE')
    );
    mocks.recognizeImageWithLocalAi.mockResolvedValue({
      text: 'AI text',
      sections: [],
      modelName: 'vision'
    });
    await expect(
      recognizeScreenshotText('image', 'auto')
    ).resolves.toMatchObject({ text: 'AI text', engine: 'ai' });
  });

  it('retains working OCR when an installed AI model fails', async () => {
    mocks.isEnabled.mockReturnValue(true);
    mocks.recognizeImageWithLocalAi.mockRejectedValue(
      new Error('model unavailable')
    );
    await expect(
      recognizeScreenshotText('image', 'auto')
    ).resolves.toMatchObject({ text: 'OCR text', engine: 'rapidocr' });
  });

  it('gives an installation path when neither OCR capability is available', async () => {
    mocks.recognizeFromImageData.mockRejectedValue(
      new Error('RAPIDOCR_UNAVAILABLE')
    );
    await expect(recognizeScreenshotText('image', 'auto')).rejects.toThrow(
      'Settings → Plugins'
    );
  });

  it('blocks missing or disabled translation with localized actionable guidance', async () => {
    await expect(requireScreenshotPlugin('translation')).rejects.toThrow(
      'OPTIONAL_PLUGIN_UNAVAILABLE:translation'
    );
    expect(
      screenshotCapabilityError('OPTIONAL_PLUGIN_UNAVAILABLE:translation')
    ).toContain('Translation');
    expect(
      screenshotCapabilityError('OPTIONAL_PLUGIN_UNAVAILABLE:translation')
    ).toContain('Settings → Plugins');
  });
});
