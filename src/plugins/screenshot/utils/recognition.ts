import i18n from '@/i18n';
import { usePluginStore } from '@/store/plugins';
import { recognizeImageWithLocalAi, type AiOcrResult } from './aiOcr';
import { recognizeFromImageData, type OcrTextBlock } from './ocr';

export const requireScreenshotPlugin = async (
  id: 'translation' | 'local-ai'
): Promise<void> => {
  const plugins = usePluginStore();
  await plugins.initialize();
  if (!plugins.isEnabled(id))
    throw new Error(`OPTIONAL_PLUGIN_UNAVAILABLE:${id}`);
};

export const screenshotCapabilityError = (message: string): string | null => {
  const id = message.match(
    /OPTIONAL_PLUGIN_UNAVAILABLE:(translation|local-ai)/
  )?.[1];
  if (!id) return null;
  const plugin = i18n.global.t(
    id === 'translation' ? 'plugins.translation.name' : 'plugins.localAi.name'
  );
  // Runtime packages remain usable with older hosts whose catalogs lack this key.
  return i18n.global.te('plugins.optionalCapabilityUnavailable')
    ? i18n.global.t('plugins.optionalCapabilityUnavailable', { plugin })
    : `Install and enable ${plugin} in Settings → Plugins to use this action.`;
};

export interface ScreenshotRecognitionResult extends AiOcrResult {
  engine: 'ai' | 'rapidocr';
}

export const recognizeScreenshotText = async (
  image: string,
  language: string,
  onBlocks?: (blocks: OcrTextBlock[]) => void
): Promise<ScreenshotRecognitionResult> => {
  // Both engines are optional. Preserve text recognition when only one is usable.
  const rapidOcr = recognizeFromImageData(image, language)
    .then((result) => {
      onBlocks?.(result.blocks);
      return result;
    })
    .catch(() => null);
  try {
    await requireScreenshotPlugin('local-ai');
    const result = await recognizeImageWithLocalAi(image, language);
    if (!result.text.trim()) throw new Error('AI_OCR_EMPTY_RESPONSE');
    return { ...result, engine: 'ai' };
  } catch (error) {
    const fallback = await rapidOcr;
    if (fallback?.text.trim()) {
      return {
        text: fallback.text,
        sections: [],
        modelName: '',
        engine: 'rapidocr'
      };
    }
    const message = error instanceof Error ? error.message : String(error);
    if (screenshotCapabilityError(message)) {
      throw new Error(
        i18n.global.te('plugins.screenshot.ocrInstallHint')
          ? i18n.global.t('plugins.screenshot.ocrInstallHint')
          : 'Install RapidOCR or install and enable Local AI with a vision model in Settings → Plugins.'
      );
    }
    if (message.includes('AI_OCR_VISION_MODEL_UNAVAILABLE')) {
      throw new Error(i18n.global.t('screenshotTool.visionModelRequired'));
    }
    throw error;
  }
};
