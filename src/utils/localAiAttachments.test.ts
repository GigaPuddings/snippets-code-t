import { describe, expect, it } from 'vitest';
import {
  cloneLocalAiAttachments,
  isImageFile,
  isTextFile,
  type LocalAiAttachment
} from './localAiAttachments';

describe('localAiAttachments', () => {
  it('recognizes image uploads by extension when the browser omits mime type', () => {
    const file = new File(['image-bytes'], 'clipboard-photo.JPG', {
      type: ''
    });

    expect(isImageFile(file)).toBe(true);
    expect(isTextFile(file)).toBe(false);
  });

  it('clones persisted attachments before restoring them into the composer', () => {
    const source: LocalAiAttachment[] = [
      {
        id: 'image-1',
        name: 'screen.png',
        type: 'image',
        mime: 'image/png',
        size: 128,
        status: 'parsed',
        dataUrl: 'data:image/png;base64,AAAA'
      }
    ];

    const cloned = cloneLocalAiAttachments(source);
    cloned[0].name = 'changed.png';

    expect(cloned).toEqual([
      expect.objectContaining({ id: 'image-1', name: 'changed.png' })
    ]);
    expect(source[0].name).toBe('screen.png');
  });
});
