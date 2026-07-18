import type { Ref } from 'vue';
import type { Transaction } from '@tiptap/pm/state';
import { setTextSelectionAfterUploadedImage } from '../utils/imageCursor';

export interface UploadedImageInfo {
  relativePath: string;
}

interface EditorChain {
  focus: () => EditorChain;
  command: (callback: (context: { tr: Transaction }) => boolean) => EditorChain;
  insertContent: (content: string) => EditorChain;
  splitBlock: () => EditorChain;
  run: () => void;
}

export interface ImageUploadEditor {
  state: {
    selection: { from: number };
    doc: {
      resolve: (pos: number) => {
        parent: {
          type: { name: string };
          content: { size: number };
        };
      };
    };
  };
  chain: () => EditorChain;
}

interface UseEditorImageUploadOptions {
  editor: Ref<ImageUploadEditor | null | undefined>;
  workspaceRoot: Ref<string>;
  getCurrentFragmentId: () => number | string | undefined;
  uploadImage?: (file: File, fragmentId: string) => Promise<UploadedImageInfo>;
  convertFileSrc?: (path: string) => Promise<string> | string;
  notifySuccess: (message: string) => void;
  notifyError: (message: string) => void;
}

interface UseEditorImageUploadResult {
  handleImageUpload: (file: File) => Promise<void>;
}

async function defaultConvertFileSrc(path: string) {
  const { convertFileSrc } = await import('@tauri-apps/api/core');
  return convertFileSrc(path);
}

async function defaultUploadImage(file: File, fragmentId: string) {
  const { uploadImage } = await import('@/plugins/attachments/image-upload');
  return uploadImage(file, fragmentId);
}

function toWorkspaceImagePath(workspaceRoot: string, relativePath: string) {
  return `${workspaceRoot}\\${relativePath.replace('../', '').replace(/\//g, '\\')}`;
}

function createImageHtml(src: string, alt: string, relativePath: string) {
  return `<img src="${src}" alt="${alt}" data-original-path="${relativePath}" />`;
}

export function useEditorImageUpload(
  options: UseEditorImageUploadOptions
): UseEditorImageUploadResult {
  const uploadImage = options.uploadImage ?? defaultUploadImage;
  const convertFileSrc = options.convertFileSrc ?? defaultConvertFileSrc;

  const insertImage = (
    editor: ImageUploadEditor,
    imageHtml: string,
    originalPath: string
  ) => {
    const { from } = editor.state.selection;
    const $from = editor.state.doc.resolve(from);
    const isInParagraph = $from.parent.type.name === 'paragraph';
    const paragraphHasContent = $from.parent.content.size > 0;

    console.log('[handleImageUpload] 插入位置:', {
      isInParagraph,
      paragraphHasContent,
      parentType: $from.parent.type.name
    });

    if (isInParagraph && paragraphHasContent) {
      console.log('[handleImageUpload] 在非空段落中，先换行');
      editor
        .chain()
        .focus()
        .splitBlock()
        .insertContent(imageHtml)
        .splitBlock()
        .command(({ tr }) =>
          setTextSelectionAfterUploadedImage(tr, originalPath)
        )
        .run();
    } else {
      console.log('[handleImageUpload] 直接插入图片');
      editor
        .chain()
        .focus()
        .insertContent(imageHtml)
        .splitBlock()
        .command(({ tr }) =>
          setTextSelectionAfterUploadedImage(tr, originalPath)
        )
        .run();
    }
  };

  const handleImageUpload = async (file: File) => {
    console.log('[handleImageUpload] 开始上传图片:', file.name);

    const currentFragmentId = options.getCurrentFragmentId();
    if (!currentFragmentId) {
      console.error('[handleImageUpload] 未找到当前笔记 ID');
      options.notifyError('无法上传图片：未找到当前笔记');
      return;
    }

    console.log('[handleImageUpload] 当前笔记 ID:', currentFragmentId);

    try {
      console.log('[handleImageUpload] 调用 uploadImage');
      const attachmentInfo = await uploadImage(file, String(currentFragmentId));
      console.log('[handleImageUpload] 上传成功, attachmentInfo:', attachmentInfo);

      const absolutePath = toWorkspaceImagePath(options.workspaceRoot.value, attachmentInfo.relativePath);
      console.log('[handleImageUpload] 绝对路径:', absolutePath);

      const tauriUrl = await convertFileSrc(absolutePath);
      console.log('[handleImageUpload] Tauri URL:', tauriUrl);

      const editor = options.editor.value;
      if (editor) {
        console.log('[handleImageUpload] 编辑器存在，准备插入图片');
        const imageHtml = createImageHtml(tauriUrl, file.name, attachmentInfo.relativePath);
        console.log('[handleImageUpload] 图片 HTML:', imageHtml);
        insertImage(editor, imageHtml, attachmentInfo.relativePath);
        console.log('[handleImageUpload] 图片插入完成');
      } else {
        console.error('[handleImageUpload] 编辑器不存在');
      }

      options.notifySuccess('图片上传成功');
    } catch (error) {
      console.error('图片上传失败:', error);
      options.notifyError(`图片上传失败: ${error instanceof Error ? error.message : '未知错误'}`);
    }
  };

  return {
    handleImageUpload
  };
}
