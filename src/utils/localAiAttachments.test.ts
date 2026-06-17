import { describe, expect, it } from 'vitest';
import { isImageFile, isTextFile } from './localAiAttachments';

describe('localAiAttachments', () => {
  it('recognizes image uploads by extension when the browser omits mime type', () => {
    const file = new File(['image-bytes'], 'clipboard-photo.JPG', {
      type: ''
    });

    expect(isImageFile(file)).toBe(true);
    expect(isTextFile(file)).toBe(false);
  });
});
