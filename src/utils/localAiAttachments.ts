export type LocalAiAttachmentKind = 'text' | 'image' | 'unsupported';
export type LocalAiAttachmentStatus = 'pending' | 'parsed' | 'error';

export interface LocalAiAttachment {
  id: string;
  name: string;
  type: LocalAiAttachmentKind;
  mime: string;
  size: number;
  status: LocalAiAttachmentStatus;
  text?: string;
  dataUrl?: string;
  error?: string;
}

const TEXT_EXTENSIONS = new Set([
  'txt',
  'md',
  'json',
  'csv',
  'html',
  'css',
  'js',
  'ts',
  'tsx',
  'vue',
  'rs',
  'py',
  'java',
  'go',
  'yaml',
  'yml',
  'toml',
  'xml',
  'log'
]);

const IMAGE_MIME_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp']);
const IMAGE_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'webp']);
const UNSUPPORTED_EXTENSIONS = new Set([
  'pdf',
  'doc',
  'docx',
  'xls',
  'xlsx',
  'ppt',
  'pptx'
]);

export const LOCAL_AI_MAX_ATTACHMENTS = 5;
export const LOCAL_AI_MAX_TEXT_BYTES = 1024 * 1024;
export const LOCAL_AI_MAX_IMAGE_BYTES = 5 * 1024 * 1024;
export const LOCAL_AI_MAX_TEXT_CHARS = 40000;

const extensionOf = (name: string): string =>
  name.split('.').pop()?.toLowerCase() ?? '';

export const formatFileSize = (size: number): string => {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
};

export const isImageFile = (file: File): boolean =>
  IMAGE_MIME_TYPES.has(file.type) ||
  IMAGE_EXTENSIONS.has(extensionOf(file.name));

export const isTextFile = (file: File): boolean =>
  file.type.startsWith('text/') || TEXT_EXTENSIONS.has(extensionOf(file.name));

export const isUnsupportedKnownFile = (file: File): boolean =>
  UNSUPPORTED_EXTENSIONS.has(extensionOf(file.name));

export const fileToDataUrl = async (file: File): Promise<string> =>
  await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ''));
    reader.onerror = () => reject(reader.error ?? new Error('read failed'));
    reader.readAsDataURL(file);
  });

export const fileToText = async (
  file: File
): Promise<{ text: string; truncated: boolean }> => {
  const raw = await file.text();
  if (raw.length <= LOCAL_AI_MAX_TEXT_CHARS) {
    return { text: raw, truncated: false };
  }
  return {
    text: raw.slice(0, LOCAL_AI_MAX_TEXT_CHARS),
    truncated: true
  };
};

export const buildPromptWithFileAttachments = (
  userText: string,
  attachments: LocalAiAttachment[]
): string => {
  const textAttachments = attachments.filter(
    (attachment) => attachment.type === 'text' && attachment.status === 'parsed'
  );
  if (!textAttachments.length) return userText;

  const sections = textAttachments.map((attachment, index) => {
    const truncated = attachment.error === 'truncated';
    return [
      `--- 文件 ${index + 1}: ${attachment.name} ---`,
      truncated ? '以下文件内容已截断。' : '',
      attachment.text ?? '',
      '--- 文件结束 ---'
    ]
      .filter(Boolean)
      .join('\n');
  });

  return [
    '请基于用户上传的文件内容回答。',
    '',
    '用户原始问题：',
    userText || '请分析用户上传的文件内容。',
    '',
    '用户上传的文件内容：',
    ...sections
  ].join('\n');
};
