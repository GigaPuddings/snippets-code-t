import { afterEach, describe, expect, it, vi } from 'vitest';
import { copyImageToClipboard } from './imageClipboard';

afterEach(() => vi.unstubAllGlobals());

describe('image clipboard', () => {
  function setup() {
    const png = new Blob(['png'], { type: 'image/png' });
    const decode = vi.fn().mockResolvedValue(undefined);
    const drawImage = vi.fn();
    const canvas = {
      width: 0,
      height: 0,
      getContext: () => ({ drawImage }),
      toBlob: (done: (blob: Blob | null) => void) => done(png)
    };
    vi.stubGlobal(
      'Image',
      class {
        naturalWidth = 800;
        naturalHeight = 600;
        width = 200;
        height = 150;
        decode = decode;
      }
    );
    vi.stubGlobal('document', { createElement: () => canvas });
    vi.stubGlobal(
      'ClipboardItem',
      class {
        constructor(readonly data: Record<string, Promise<Blob>>) {}
      }
    );
    const write = vi.fn(async (items) => {
      await items[0].data['image/png'];
    });
    vi.stubGlobal('navigator', { clipboard: { write } });
    return { canvas, png, decode, write, drawImage };
  }

  it('copies original pixels and starts the clipboard write before image decoding finishes', async () => {
    const { canvas, write, drawImage, png } = setup();
    const pending = copyImageToClipboard('asset://localhost/image.png');
    expect(write).toHaveBeenCalledOnce();
    await pending;
    expect([canvas.width, canvas.height]).toEqual([800, 600]);
    expect(drawImage).toHaveBeenCalledOnce();
    await expect(write.mock.calls[0][0][0].data['image/png']).resolves.toBe(
      png
    );
  });

  it('reports an unreadable image without writing fallback text', async () => {
    const { decode, drawImage } = setup();
    decode.mockRejectedValue(new Error('Image unavailable'));
    await expect(copyImageToClipboard('missing.png')).rejects.toThrow(
      'Image unavailable'
    );
    expect(drawImage).not.toHaveBeenCalled();
  });

  it('reports a failed PNG conversion', async () => {
    const { canvas } = setup();
    canvas.toBlob = (done) => done(null);
    await expect(copyImageToClipboard('image.png')).rejects.toThrow(
      'Image encoding failed'
    );
  });

  it('reports missing clipboard support as a rejected operation', async () => {
    vi.stubGlobal('navigator', {});
    await expect(copyImageToClipboard('image.png')).rejects.toThrow(
      'Image clipboard unavailable'
    );
  });
});
