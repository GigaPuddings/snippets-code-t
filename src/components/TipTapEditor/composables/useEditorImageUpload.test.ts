import { ref } from 'vue';
import type { Transaction } from '@tiptap/pm/state';
import { describe, expect, it, vi } from 'vitest';
import {
  type ImageUploadEditor,
  useEditorImageUpload
} from './useEditorImageUpload';

const createFile = () => new File(['image'], 'button.png', { type: 'image/png' });

const createEditor = (options: {
  parentType?: string;
  textContent?: string;
} = {}) => {
  const insertedContent: string[] = [];

  const chain = {
    focus: vi.fn(() => chain),
    command: vi.fn((_callback: (context: { tr: Transaction }) => boolean) => chain),
    insertContent: vi.fn((content: string) => {
      insertedContent.push(content);
      return chain;
    }),
    splitBlock: vi.fn(() => chain),
    run: vi.fn()
  };

  const editor: ImageUploadEditor = {
    state: {
      selection: { from: 5 },
      doc: {
        resolve: vi.fn(() => ({
          parent: {
            type: { name: options.parentType ?? 'paragraph' },
            content: { size: options.textContent?.length ?? 0 }
          }
        }))
      }
    },
    chain: vi.fn(() => chain)
  };

  return {
    editor,
    chain,
    insertedContent
  };
};

const createUploader = (options: {
  editor?: ImageUploadEditor | null;
  fragmentId?: number | string;
  uploadImage?: (file: File, fragmentId: string) => Promise<{ relativePath: string }>;
  convertFileSrc?: (path: string) => string | Promise<string>;
} = {}) => {
  const editor = ref<ImageUploadEditor | null | undefined>(options.editor);
  const workspaceRoot = ref('E:\\Workspace');
  const notifySuccess = vi.fn();
  const notifyError = vi.fn();
  const uploadImage = options.uploadImage ?? vi.fn(async () => ({ relativePath: '../assets/button.png' }));
  const convertFileSrc = options.convertFileSrc ?? vi.fn((path: string) => `asset://${path}`);

  const uploader = useEditorImageUpload({
    editor,
    workspaceRoot,
    getCurrentFragmentId: () => (
      Object.prototype.hasOwnProperty.call(options, 'fragmentId') ? options.fragmentId : 7
    ),
    uploadImage,
    convertFileSrc,
    notifySuccess,
    notifyError
  });

  return {
    ...uploader,
    editor,
    uploadImage,
    convertFileSrc,
    notifySuccess,
    notifyError
  };
};

describe('useEditorImageUpload', () => {
  it('uploads and inserts an image into an empty paragraph', async () => {
    const editorMock = createEditor();
    const uploader = createUploader({ editor: editorMock.editor });

    await uploader.handleImageUpload(createFile());

    expect(uploader.uploadImage).toHaveBeenCalledWith(expect.any(File), '7');
    expect(uploader.convertFileSrc).toHaveBeenCalledWith('E:\\Workspace\\assets\\button.png');
    expect(editorMock.chain.insertContent).toHaveBeenCalledWith(
      '<img src="asset://E:\\Workspace\\assets\\button.png" alt="button.png" data-original-path="../assets/button.png" />'
    );
    expect(editorMock.chain.splitBlock).toHaveBeenCalledTimes(1);
    expect(editorMock.chain.insertContent.mock.invocationCallOrder[0])
      .toBeLessThan(editorMock.chain.splitBlock.mock.invocationCallOrder[0]);
    expect(editorMock.chain.command).toHaveBeenCalledTimes(1);
    expect(uploader.notifySuccess).toHaveBeenCalledWith('图片上传成功');
  });

  it('splits a non-empty paragraph before inserting an image', async () => {
    const editorMock = createEditor({ textContent: 'text before image' });
    const uploader = createUploader({ editor: editorMock.editor });

    await uploader.handleImageUpload(createFile());

    expect(editorMock.chain.insertContent).toHaveBeenCalledTimes(1);
    expect(editorMock.chain.splitBlock).toHaveBeenCalledTimes(2);
    expect(editorMock.chain.command).toHaveBeenCalledTimes(1);
  });

  it('shows an error when there is no current fragment id', async () => {
    const editorMock = createEditor();
    const uploader = createUploader({ editor: editorMock.editor, fragmentId: undefined });

    await uploader.handleImageUpload(createFile());

    expect(uploader.uploadImage).not.toHaveBeenCalled();
    expect(uploader.notifyError).toHaveBeenCalledWith('无法上传图片：未找到当前笔记');
  });

  it('shows an upload error when the upload fails', async () => {
    const editorMock = createEditor();
    const uploader = createUploader({
      editor: editorMock.editor,
      uploadImage: vi.fn(async () => {
        throw new Error('disk full');
      })
    });

    await uploader.handleImageUpload(createFile());

    expect(uploader.notifyError).toHaveBeenCalledWith('图片上传失败: disk full');
  });
});
