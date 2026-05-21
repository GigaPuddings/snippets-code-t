import { nextTick, type Ref } from 'vue';
import { NodeSelection } from '@tiptap/pm/state';

export interface UploadedImageInfo {
  relativePath: string;
}

interface EditorChain {
  focus: () => EditorChain;
  command: (callback: (context: { tr: { split: (pos: number) => void; selection: { from: number } } }) => boolean) => EditorChain;
  insertContent: (content: string) => EditorChain;
  run: () => void;
}

export interface ImageUploadEditor {
  state: {
    selection: { from: number };
    doc: {
      resolve: (pos: number) => {
        parent: {
          type: { name: string };
          textContent: string;
        };
      };
      descendants: (
        callback: (node: { type: { name: string } }, pos: number) => boolean | void
      ) => void;
    };
    tr: {
      setSelection: (selection: unknown) => unknown;
    };
  };
  chain: () => EditorChain;
  view: {
    dispatch: (transaction: unknown) => void;
  };
}

interface UseEditorImageUploadOptions {
  editor: Ref<ImageUploadEditor | null | undefined>;
  workspaceRoot: Ref<string>;
  getCurrentFragmentId: () => number | string | undefined;
  uploadImage?: (file: File, fragmentId: string) => Promise<UploadedImageInfo>;
  convertFileSrc?: (path: string) => Promise<string> | string;
  createNodeSelection?: (doc: ImageUploadEditor['state']['doc'], pos: number) => unknown;
  notifySuccess: (message: string) => void;
  notifyError: (message: string) => void;
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

function findInsertedImagePosition(
  doc: ImageUploadEditor['state']['doc'],
  insertPos: number
) {
  let imagePos = -1;

  doc.descendants((node, pos) => {
    if (node.type.name === 'image' && pos >= insertPos) {
      imagePos = pos;
      return false;
    }

    return true;
  });

  return imagePos;
}

export function useEditorImageUpload(options: UseEditorImageUploadOptions) {
  const uploadImage = options.uploadImage ?? defaultUploadImage;
  const convertFileSrc = options.convertFileSrc ?? defaultConvertFileSrc;
  const createNodeSelection = options.createNodeSelection ?? ((doc, pos) => (
    NodeSelection.create(doc as never, pos)
  ));

  const selectInsertedImage = (insertPos: number) => {
    nextTick(() => {
      const editor = options.editor.value;
      if (!editor) return;

      const { state } = editor;
      const imagePos = findInsertedImagePosition(state.doc, insertPos);
      console.log('[handleImageUpload] 找到图片节点位置:', imagePos);

      if (imagePos >= 0) {
        const nodeSelection = createNodeSelection(state.doc, imagePos);
        editor.view.dispatch(state.tr.setSelection(nodeSelection));
        console.log('[handleImageUpload] ✅ 图片已选中');
      } else {
        console.warn('[handleImageUpload] ⚠️ 未找到图片节点');
      }
    });
  };

  const insertImage = (editor: ImageUploadEditor, imageHtml: string) => {
    const { from } = editor.state.selection;
    const $from = editor.state.doc.resolve(from);
    const isInParagraph = $from.parent.type.name === 'paragraph';
    const paragraphHasContent = $from.parent.textContent.trim().length > 0;

    console.log('[handleImageUpload] 插入位置:', {
      isInParagraph,
      paragraphHasContent,
      parentType: $from.parent.type.name
    });

    const insertPos = editor.state.selection.from;
    console.log('[handleImageUpload] 插入位置:', insertPos);

    if (isInParagraph && paragraphHasContent) {
      console.log('[handleImageUpload] 在非空段落中，先换行');
      editor
        .chain()
        .focus()
        .command(({ tr }) => {
          tr.split(tr.selection.from);
          return true;
        })
        .insertContent(imageHtml)
        .run();
    } else {
      console.log('[handleImageUpload] 直接插入图片');
      editor
        .chain()
        .focus()
        .insertContent(imageHtml)
        .run();
    }

    selectInsertedImage(insertPos);
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
        insertImage(editor, imageHtml);
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
