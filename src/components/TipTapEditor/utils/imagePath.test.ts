import { describe, expect, it } from 'vitest';
import { localPathFromImageSrc, resolveImageFilePath } from './imagePath';

describe('localPathFromImageSrc', () => {
  it('extracts a Windows path from the Tauri HTTP asset protocol', () => {
    expect(
      localPathFromImageSrc(
        'http://asset.localhost/C%3A/Notes/assets/image%201.png'
      )
    ).toBe('C:\\Notes\\assets\\image 1.png');
  });

  it('extracts a Windows path from the Tauri asset protocol', () => {
    expect(
      localPathFromImageSrc('asset://localhost/D%3A/Workspace/assets/image.png')
    ).toBe('D:\\Workspace\\assets\\image.png');
  });

  it('ignores remote images', () => {
    expect(localPathFromImageSrc('https://example.com/image.png')).toBeNull();
  });
});

describe('resolveImageFilePath', () => {
  it('prefers the rendered local asset path', () => {
    expect(
      resolveImageFilePath(
        'http://asset.localhost/C%3A/Actual/image.png',
        '../assets/image.png',
        'D:\\Workspace'
      )
    ).toBe('C:\\Actual\\image.png');
  });

  it.each([
    ['assets/note/image.png', 'D:\\Workspace\\assets\\note\\image.png'],
    ['../assets/note/image.png', 'D:\\Workspace\\assets\\note\\image.png'],
    ['./assets/note/image.png', 'D:\\Workspace\\assets\\note\\image.png']
  ])('resolves workspace attachment path %s', (relativePath, expected) => {
    expect(resolveImageFilePath('', relativePath, 'D:\\Workspace\\')).toBe(
      expected
    );
  });

  it('keeps an absolute original path', () => {
    expect(
      resolveImageFilePath('', 'E:/Pictures/image.png', 'D:\\Workspace')
    ).toBe('E:\\Pictures\\image.png');
  });

  it('returns null when a relative path has no workspace', () => {
    expect(resolveImageFilePath('', 'assets/image.png', '')).toBeNull();
  });
});
