import type { Point, Rect } from './types';
import { VisualElementRegionDetector } from './VisualElementRegionDetector';

const MAX_SAMPLE_WIDTH = 960;
const MAX_SAMPLE_HEIGHT = 640;

export class VisualElementDetector {
  private readonly regionDetector: VisualElementRegionDetector;
  private lastDetection: {
    point: Point;
    bounds: Rect;
    result: Rect | null;
  } | null = null;

  constructor(
    pixels: Uint8ClampedArray,
    private readonly sampleWidth: number,
    private readonly sampleHeight: number,
    private readonly logicalWidth: number,
    private readonly logicalHeight: number
  ) {
    this.regionDetector = new VisualElementRegionDetector(
      pixels,
      sampleWidth,
      sampleHeight
    );
  }

  static fromImage(
    image: CanvasImageSource,
    logicalWidth: number,
    logicalHeight: number
  ): VisualElementDetector | null {
    if (logicalWidth <= 0 || logicalHeight <= 0) return null;

    const scale = Math.min(
      1,
      MAX_SAMPLE_WIDTH / logicalWidth,
      MAX_SAMPLE_HEIGHT / logicalHeight
    );
    const sampleWidth = Math.max(1, Math.round(logicalWidth * scale));
    const sampleHeight = Math.max(1, Math.round(logicalHeight * scale));
    const canvas = document.createElement('canvas');
    canvas.width = sampleWidth;
    canvas.height = sampleHeight;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;

    ctx.drawImage(image, 0, 0, sampleWidth, sampleHeight);
    const imageData = ctx.getImageData(0, 0, sampleWidth, sampleHeight);
    return new VisualElementDetector(
      imageData.data,
      sampleWidth,
      sampleHeight,
      logicalWidth,
      logicalHeight
    );
  }

  detect(point: Point, bounds: Rect): Rect | null {
    const cached = this.getCachedDetection(point, bounds);
    if (cached !== undefined) return cached;

    const sampleBounds = this.toSampleRect(bounds);
    const samplePoint = this.toSamplePoint(point);
    if (!this.containsSamplePoint(sampleBounds, samplePoint)) {
      this.cacheDetection(point, bounds, null);
      return null;
    }

    const colorRegion = this.regionDetector.detect(samplePoint, sampleBounds);
    if (!colorRegion) {
      this.cacheDetection(point, bounds, null);
      return null;
    }

    const logicalRect = this.toLogicalRect(colorRegion);
    const result = this.isUsefulCandidate(logicalRect, bounds, point)
      ? logicalRect
      : null;
    this.cacheDetection(point, bounds, result);
    return result;
  }

  private getCachedDetection(
    point: Point,
    bounds: Rect
  ): Rect | null | undefined {
    const cached = this.lastDetection;
    if (!cached || !this.isSameRect(cached.bounds, bounds)) return undefined;

    if (cached.result && this.containsLogicalPoint(cached.result, point)) {
      return { ...cached.result };
    }

    if (
      !cached.result &&
      Math.hypot(point.x - cached.point.x, point.y - cached.point.y) < 14
    ) {
      return null;
    }

    return undefined;
  }

  private cacheDetection(
    point: Point,
    bounds: Rect,
    result: Rect | null
  ): void {
    this.lastDetection = {
      point: { ...point },
      bounds: { ...bounds },
      result: result ? { ...result } : null
    };
  }

  private isSameRect(left: Rect, right: Rect): boolean {
    return (
      left.x === right.x &&
      left.y === right.y &&
      left.width === right.width &&
      left.height === right.height
    );
  }

  private containsLogicalPoint(rect: Rect, point: Point): boolean {
    return (
      point.x >= rect.x &&
      point.x <= rect.x + rect.width &&
      point.y >= rect.y &&
      point.y <= rect.y + rect.height
    );
  }

  private containsSamplePoint(rect: Rect, point: Point): boolean {
    return (
      point.x >= rect.x &&
      point.x < rect.x + rect.width &&
      point.y >= rect.y &&
      point.y < rect.y + rect.height
    );
  }

  private isUsefulCandidate(
    candidate: Rect,
    bounds: Rect,
    point: Point
  ): boolean {
    const candidateArea = candidate.width * candidate.height;
    const boundsArea = bounds.width * bounds.height;
    return (
      candidate.width >= 18 &&
      candidate.height >= 14 &&
      candidateArea >= 320 &&
      candidateArea < boundsArea * 0.45 &&
      this.containsLogicalPoint(candidate, point)
    );
  }

  private toSamplePoint(point: Point): Point {
    return {
      x: Math.round((point.x * this.sampleWidth) / this.logicalWidth),
      y: Math.round((point.y * this.sampleHeight) / this.logicalHeight)
    };
  }

  private toSampleRect(rect: Rect): Rect {
    return {
      x: Math.floor((rect.x * this.sampleWidth) / this.logicalWidth),
      y: Math.floor((rect.y * this.sampleHeight) / this.logicalHeight),
      width: Math.ceil((rect.width * this.sampleWidth) / this.logicalWidth),
      height: Math.ceil((rect.height * this.sampleHeight) / this.logicalHeight)
    };
  }

  private toLogicalRect(rect: Rect): Rect {
    const scaleX = this.logicalWidth / this.sampleWidth;
    const scaleY = this.logicalHeight / this.sampleHeight;
    return {
      x: Math.round(rect.x * scaleX),
      y: Math.round(rect.y * scaleY),
      width: Math.round(rect.width * scaleX),
      height: Math.round(rect.height * scaleY)
    };
  }
}
