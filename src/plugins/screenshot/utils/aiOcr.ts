import {
  chatWithLocalAi,
  getLocalAiConfig,
  getLocalAiStatus,
  scanLocalAiModels
} from '@/api/localAi';

export type AiOcrSectionKind =
  | 'title'
  | 'paragraph'
  | 'list'
  | 'code'
  | 'table';

export interface AiOcrSection {
  type: AiOcrSectionKind;
  text: string;
}

export interface AiOcrResult {
  text: string;
  sections: AiOcrSection[];
  modelName: string;
}

const AI_OCR_SYSTEM_PROMPT = `你是高精度图片文字识别引擎。逐字读取图片，保留原语言、标点、数字、换行、列表和代码，不要翻译、总结或解释。
仅返回合法 JSON，结构必须为：
{"text":"完整文字","sections":[{"type":"title|paragraph|list|code|table","text":"原文分块"}]}
sections 必须覆盖完整文字。`;

const languageHints: Record<string, string> = {
  auto: '自动判断图片文字语言',
  zh: '优先按简体中文识别',
  'zh-tw': '优先按繁体中文识别',
  en: '优先按英文识别',
  ja: '优先按日文识别',
  ko: '优先按韩文识别'
};

const sectionKinds = new Set<AiOcrSectionKind>([
  'title',
  'paragraph',
  'list',
  'code',
  'table'
]);

const normalizeSectionKind = (
  value: unknown,
  text: string,
  index: number
): AiOcrSectionKind => {
  if (
    typeof value === 'string' &&
    sectionKinds.has(value as AiOcrSectionKind)
  ) {
    return value as AiOcrSectionKind;
  }
  if (index === 0 && text.length <= 80 && !/[。！？.!?]\s*$/.test(text)) {
    return 'title';
  }
  if (/^\s*(?:[-*+•·]|\d+[.)、）])\s+/m.test(text)) {
    return 'list';
  }
  return 'paragraph';
};

const splitPlainTextIntoSections = (text: string): AiOcrSection[] =>
  text
    .split(/\n{2,}/)
    .map((section) => section.trim())
    .filter(Boolean)
    .map((section, index) => ({
      type: normalizeSectionKind(undefined, section, index),
      text: section
    }));

const extractJsonCandidate = (response: string): string | null => {
  const fenced = response.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim();
  if (fenced?.startsWith('{') && fenced.endsWith('}')) {
    return fenced;
  }

  const start = response.indexOf('{');
  const end = response.lastIndexOf('}');
  return start >= 0 && end > start ? response.slice(start, end + 1) : null;
};

export const parseAiOcrResponse = (
  response: string
): Omit<AiOcrResult, 'modelName'> => {
  const normalizedResponse = response.trim();
  if (!normalizedResponse) {
    throw new Error('AI_OCR_EMPTY_RESPONSE');
  }

  const jsonCandidate = extractJsonCandidate(normalizedResponse);
  let payload: Record<string, unknown> | null = null;
  if (jsonCandidate) {
    try {
      payload = JSON.parse(jsonCandidate) as Record<string, unknown>;
    } catch {
      payload = null;
    }
  }

  const payloadText =
    typeof payload?.text === 'string' ? payload.text.trim() : '';
  const rawSections = Array.isArray(payload?.sections) ? payload.sections : [];
  const sections = rawSections
    .map<AiOcrSection | null>((section, index) => {
      if (!section || typeof section !== 'object') return null;
      const candidate = section as Record<string, unknown>;
      const text =
        typeof candidate.text === 'string' ? candidate.text.trim() : '';
      if (!text) return null;
      return {
        type: normalizeSectionKind(candidate.type, text, index),
        text
      };
    })
    .filter((section): section is AiOcrSection => Boolean(section));

  const text =
    payloadText ||
    sections.map((section) => section.text).join('\n\n') ||
    normalizedResponse;
  const normalizedSections =
    sections.length > 0 ? sections : splitPlainTextIntoSections(text);

  return {
    text,
    sections: normalizedSections
  };
};

const fileNameFromPath = (path: string | null | undefined): string => {
  if (!path) return '';
  return path.split(/[\\/]/).filter(Boolean).pop() || '';
};

export const recognizeImageWithLocalAi = async (
  imageData: string,
  language: string
): Promise<AiOcrResult> => {
  const config = await getLocalAiConfig();
  const modelScan = await scanLocalAiModels(config);
  if (!modelScan.selectedMmprojPath) {
    throw new Error('AI_OCR_VISION_MODEL_UNAVAILABLE');
  }

  const response = await chatWithLocalAi({
    messages: [
      { role: 'system', content: AI_OCR_SYSTEM_PROMPT },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `${languageHints[language] || languageHints.auto}。现在识别这张图片。`
          },
          {
            type: 'image_url',
            image_url: { url: imageData }
          }
        ]
      }
    ],
    temperature: 0,
    enableThinking: false,
    maxTokens: 4096
  });
  const parsed = parseAiOcrResponse(response.content);
  const serviceStatus = await getLocalAiStatus().catch(() => null);

  return {
    ...parsed,
    modelName:
      fileNameFromPath(serviceStatus?.modelPath) ||
      fileNameFromPath(modelScan.selectedModelPath) ||
      'Local Vision'
  };
};
