import { describe, expect, it } from 'vitest';
import { VisualElementDetector } from './VisualElementDetector';

const createPixels = (
  width: number,
  height: number,
  background: [number, number, number]
): Uint8ClampedArray => {
  const pixels = new Uint8ClampedArray(width * height * 4);
  for (let index = 0; index < width * height; index += 1) {
    pixels[index * 4] = background[0];
    pixels[index * 4 + 1] = background[1];
    pixels[index * 4 + 2] = background[2];
    pixels[index * 4 + 3] = 255;
  }
  return pixels;
};

const fillRect = (
  pixels: Uint8ClampedArray,
  canvasWidth: number,
  rect: { x: number; y: number; width: number; height: number },
  color: [number, number, number]
): void => {
  for (let y = rect.y; y < rect.y + rect.height; y += 1) {
    for (let x = rect.x; x < rect.x + rect.width; x += 1) {
      const index = (y * canvasWidth + x) * 4;
      pixels[index] = color[0];
      pixels[index + 1] = color[1];
      pixels[index + 2] = color[2];
      pixels[index + 3] = 255;
    }
  }
};

describe('VisualElementDetector', () => {
  it('detects a contrasting card under the pointer', () => {
    const width = 120;
    const height = 80;
    const pixels = createPixels(width, height, [35, 39, 47]);
    fillRect(
      pixels,
      width,
      { x: 20, y: 15, width: 70, height: 30 },
      [245, 245, 245]
    );
    const detector = new VisualElementDetector(
      pixels,
      width,
      height,
      width,
      height
    );

    expect(
      detector.detect({ x: 50, y: 30 }, { x: 0, y: 0, width, height })
    ).toEqual({ x: 20, y: 15, width: 70, height: 30 });
  });

  it('detects a list row separated by horizontal dividers', () => {
    const width = 120;
    const height = 80;
    const pixels = createPixels(width, height, [250, 250, 250]);
    fillRect(pixels, width, { x: 0, y: 20, width, height: 1 }, [190, 190, 190]);
    fillRect(pixels, width, { x: 0, y: 50, width, height: 1 }, [190, 190, 190]);
    const detector = new VisualElementDetector(
      pixels,
      width,
      height,
      width,
      height
    );

    expect(
      detector.detect({ x: 60, y: 35 }, { x: 0, y: 0, width, height })
    ).toEqual({ x: 0, y: 21, width: 120, height: 29 });
  });
});

describe('VisualElementDetector cache', () => {
  it('reuses the current region while the pointer remains inside it', () => {
    const width = 120;
    const height = 80;
    const background: [number, number, number] = [35, 39, 47];
    const pixels = createPixels(width, height, background);
    const card = { x: 20, y: 15, width: 70, height: 30 };
    fillRect(pixels, width, card, [245, 245, 245]);
    const detector = new VisualElementDetector(
      pixels,
      width,
      height,
      width,
      height
    );

    expect(
      detector.detect({ x: 50, y: 30 }, { x: 0, y: 0, width, height })
    ).toEqual(card);

    fillRect(pixels, width, card, background);
    expect(
      detector.detect({ x: 60, y: 35 }, { x: 0, y: 0, width, height })
    ).toEqual(card);
  });
});
