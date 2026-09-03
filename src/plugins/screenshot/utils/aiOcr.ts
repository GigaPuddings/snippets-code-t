import { getLocalAiConfig, scanLocalAiModels } from '@/api/localAi';
import {
  chatWithAi,
  createSelectionAiContext,
  getAiProviderStatus,
  LOCAL_AI_PROVIDER_ID
} from '@/ai';

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

const AI_OCR_SYSTEM_PROMPT = `你正在执行图片原文转写。像在 AI 聊天中直接阅读图片一样，按视觉阅读顺序从上到下完整读取所有可见文字。
要求：
1. 忠实保留原语言、标点、数字、大小写、标题、段落、列表、代码和表格内容，不翻译、不概括、不解释；
2. 标题、说明文字、每个独立段落和每个列表项之间各空一行，保持图片本身的语义分段；
3. 只输出纯文本原文，不输出 JSON，不添加 Markdown 标题、加粗、代码围栏或“识别结果”等额外说明；
4. 输出前重新检查图片的左、右、上、下区域，确保没有只读取标题、漏掉小字、列表项或末尾内容。`;

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

const listItemPattern = /^\s*(?:[-*+•·]|\d+[.)、）])\s+/;

const stripAiMarkdownDecoration = (text: string): string =>
  text
    .replace(/^\s{0,3}#{1,6}\s+/, '')
    .replace(/^\s*>\s?/, '')
    .replace(/(\*\*|__|~~)(.*?)\1/g, '$2')
    .trim();

const splitPlainTextIntoSections = (text: string): AiOcrSection[] => {
  const normalized = text
    .trim()
    .replace(/^```(?:text|plaintext|markdown)?\s*\n?/i, '')
    .replace(/\n?```\s*$/i, '');
  const rawBlocks = normalized
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
  const sections: AiOcrSection[] = [];

  for (const rawBlock of rawBlocks) {
    const lines = rawBlock
      .split(/\n/)
      .map((line) => line.trim())
      .filter(Boolean);
    if (lines.length === 0) continue;

    if (lines.every((line) => listItemPattern.test(line))) {
      for (const line of lines) {
        sections.push({
          type: 'list',
          text: stripAiMarkdownDecoration(line)
        });
      }
      continue;
    }

    const firstLine = stripAiMarkdownDecoration(lines[0]);
    const firstLineLooksLikeTitle =
      sections.length === 0 &&
      lines.length > 1 &&
      firstLine.length <= 100 &&
      !/[。！？.!?]\s*$/.test(firstLine);
    if (firstLineLooksLikeTitle) {
      sections.push({ type: 'title', text: firstLine });
      const remaining = lines
        .slice(1)
        .map(stripAiMarkdownDecoration)
        .join(' ')
        .trim();
      if (remaining) {
        sections.push({
          type: normalizeSectionKind(undefined, remaining, sections.length),
          text: remaining
        });
      }
      continue;
    }

    const sectionText = lines.map(stripAiMarkdownDecoration).join(' ').trim();
    if (!sectionText) continue;
    sections.push({
      type: normalizeSectionKind(undefined, sectionText, sections.length),
      text: sectionText
    });
  }

  return sections;
};

const extractJsonCandidate = (response: string): string | null => {
  const fenced = response.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim();
  if (
    (fenced?.startsWith('{') && fenced.endsWith('}')) ||
    (fenced?.startsWith('[') && fenced.endsWith(']'))
  ) {
    return fenced;
  }

  const objectStart = response.indexOf('{');
  const objectEnd = response.lastIndexOf('}');
  const arrayStart = response.indexOf('[');
  const arrayEnd = response.lastIndexOf(']');
  if (
    arrayStart >= 0 &&
    arrayEnd > arrayStart &&
    (objectStart < 0 || arrayStart < objectStart)
  ) {
    return response.slice(arrayStart, arrayEnd + 1);
  }
  return objectStart >= 0 && objectEnd > objectStart
    ? response.slice(objectStart, objectEnd + 1)
    : null;
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

  const normalizedSections =
    sections.length > 0
      ? sections
      : splitPlainTextIntoSections(payloadText || normalizedResponse);
  const text =
    normalizedSections.map((section) => section.text).join('\n\n') ||
    payloadText ||
    normalizedResponse;

  return {
    text,
    sections: normalizedSections
  };
};

const countMeaningfulCharacters = (text: string): number =>
  text.replace(/[\s\p{P}\p{S}]/gu, '').length;

export const shouldRetryAiOcrResult = (
  result: Pick<AiOcrResult, 'text' | 'sections'>
): boolean =>
  countMeaningfulCharacters(result.text) < 180 && result.sections.length <= 2;

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

  const recognize = async (retry: boolean) => {
    const response = await chatWithAi(
      {
        messages: [
          { role: 'system', content: AI_OCR_SYSTEM_PROMPT },
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: retry
                  ? `${languageHints[language] || languageHints.auto}。上一次转写可能不完整，请重新独立阅读整张图片，尤其检查标题之后、列表和底部的所有文字。只输出完整原文。`
                  : `${languageHints[language] || languageHints.auto}。请完整转写这张图片中的全部文字，只输出原文。`
              },
              {
                type: 'image_url',
                image_url: { url: imageData }
              }
            ]
          }
        ],
        enableThinking: false,
        context: createSelectionAiContext('Screenshot image OCR request', {
          source: 'screenshot.ocr',
          metadata: {
            language,
            retry
          }
        })
      },
      { providerId: LOCAL_AI_PROVIDER_ID, capability: 'vision' }
    );
    return parseAiOcrResponse(response.content);
  };

  const initialResult = await recognize(false);
  const retryResult = shouldRetryAiOcrResult(initialResult)
    ? await recognize(true)
    : null;
  const parsed =
    retryResult &&
    countMeaningfulCharacters(retryResult.text) >
      countMeaningfulCharacters(initialResult.text)
      ? retryResult
      : initialResult;
  const serviceStatus = await getAiProviderStatus(LOCAL_AI_PROVIDER_ID).catch(
    () => null
  );
  const modelName =
    fileNameFromPath(serviceStatus?.modelPath) ||
    fileNameFromPath(modelScan.selectedModelPath) ||
    'Local Vision';

  return {
    text: parsed.text,
    sections: parsed.sections,
    modelName
  };
};
