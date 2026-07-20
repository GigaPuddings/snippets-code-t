import { ref, type Ref } from 'vue';
import { useI18n, type ComposerTranslation } from 'vue-i18n';
import {
  fileToDataUrl,
  fileToText,
  isImageFile,
  isTextFile,
  isUnsupportedKnownFile,
  LOCAL_AI_MAX_ATTACHMENTS,
  LOCAL_AI_MAX_IMAGE_BYTES,
  LOCAL_AI_MAX_TEXT_BYTES,
  type LocalAiAttachment
} from '@/utils/localAiAttachments';
import modal from '@/utils/modal';

interface ChatAttachmentsController {
  attachments: Ref<LocalAiAttachment[]>;
  attachmentStatusText: (attachment: LocalAiAttachment) => string;
  fileInputRef: Ref<HTMLInputElement | null>;
  handleAttachmentDrop: (event: DragEvent) => Promise<void>;
  handleAttachmentInput: (event: Event) => Promise<void>;
  handleComposerPaste: (event: ClipboardEvent) => Promise<void>;
  openAttachmentPicker: () => void;
  removeAttachment: (id: string) => void;
}

const createAttachmentShell = (
  file: File,
  type: LocalAiAttachment['type']
): LocalAiAttachment => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: file.name,
  type,
  mime: file.type || 'application/octet-stream',
  size: file.size,
  status: 'pending'
});

const parseImageAttachment = async (
  file: File,
  t: ComposerTranslation
): Promise<LocalAiAttachment> => {
  const attachment = createAttachmentShell(file, 'image');
  if (file.size > LOCAL_AI_MAX_IMAGE_BYTES) {
    return {
      ...attachment,
      status: 'error',
      error: t('localAi.imageTooLarge')
    };
  }
  try {
    return {
      ...attachment,
      status: 'parsed',
      dataUrl: await fileToDataUrl(file)
    };
  } catch (error) {
    return { ...attachment, status: 'error', error: String(error) };
  }
};

const parseTextAttachment = async (
  file: File,
  t: ComposerTranslation
): Promise<LocalAiAttachment> => {
  const attachment = createAttachmentShell(file, 'text');
  if (file.size > LOCAL_AI_MAX_TEXT_BYTES) {
    return {
      ...attachment,
      status: 'error',
      error: t('localAi.textFileTooLarge')
    };
  }
  try {
    const parsed = await fileToText(file);
    return {
      ...attachment,
      status: 'parsed',
      text: parsed.text,
      error: parsed.truncated ? 'truncated' : undefined
    };
  } catch (error) {
    return { ...attachment, status: 'error', error: String(error) };
  }
};

const parseAttachmentFile = async (
  file: File,
  t: ComposerTranslation
): Promise<LocalAiAttachment> => {
  if (isImageFile(file)) return parseImageAttachment(file, t);
  if (isTextFile(file)) return parseTextAttachment(file, t);

  const attachment = createAttachmentShell(file, 'unsupported');
  return {
    ...attachment,
    status: 'error',
    error: isUnsupportedKnownFile(file)
      ? t('localAi.unsupportedDocument')
      : t('localAi.unsupportedAttachment')
  };
};

const addAttachmentFiles = async (
  attachments: Ref<LocalAiAttachment[]>,
  files: FileList | File[],
  t: ComposerTranslation
): Promise<void> => {
  const incoming = Array.from(files);
  const room = LOCAL_AI_MAX_ATTACHMENTS - attachments.value.length;
  if (room <= 0) {
    modal.msg(t('localAi.attachmentLimit'), 'warning');
    return;
  }
  if (incoming.length > room) {
    modal.msg(t('localAi.attachmentLimit'), 'warning');
  }
  const selected = incoming.slice(0, room);
  const pending = selected.map((file) =>
    createAttachmentShell(
      file,
      isImageFile(file) ? 'image' : isTextFile(file) ? 'text' : 'unsupported'
    )
  );
  attachments.value.push(...pending);

  await Promise.all(
    selected.map(async (file, index) => {
      const parsed = await parseAttachmentFile(file, t);
      const targetIndex = attachments.value.findIndex(
        (attachment) => attachment.id === pending[index].id
      );
      if (targetIndex >= 0) attachments.value[targetIndex] = parsed;
    })
  );
};

export const useChatAttachments = (): ChatAttachmentsController => {
  const { t } = useI18n();
  const attachments = ref<LocalAiAttachment[]>([]);
  const fileInputRef = ref<HTMLInputElement | null>(null);

  return {
    attachments,
    fileInputRef,
    openAttachmentPicker: (): void => fileInputRef.value?.click(),
    handleAttachmentInput: async (event: Event): Promise<void> => {
      const input = event.target as HTMLInputElement;
      if (input.files?.length) {
        await addAttachmentFiles(attachments, input.files, t);
      }
      input.value = '';
    },
    handleAttachmentDrop: async (event: DragEvent): Promise<void> => {
      if (event.dataTransfer?.files.length) {
        await addAttachmentFiles(attachments, event.dataTransfer.files, t);
      }
    },
    handleComposerPaste: async (event: ClipboardEvent): Promise<void> => {
      const files = Array.from(event.clipboardData?.files ?? []);
      const imageFiles = files.filter(isImageFile);
      if (!imageFiles.length) return;
      event.preventDefault();
      await addAttachmentFiles(attachments, imageFiles, t);
    },
    removeAttachment: (id: string): void => {
      attachments.value = attachments.value.filter(
        (attachment) => attachment.id !== id
      );
    },
    attachmentStatusText: (attachment: LocalAiAttachment): string => {
      if (attachment.status === 'pending') {
        return t('localAi.attachmentPending');
      }
      if (attachment.status === 'error') return attachment.error ?? '';
      if (attachment.error === 'truncated') {
        return t('localAi.attachmentTruncated');
      }
      return t('localAi.attachmentParsed');
    }
  };
};
