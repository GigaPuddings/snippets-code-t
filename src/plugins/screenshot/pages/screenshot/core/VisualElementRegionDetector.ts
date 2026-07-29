import type { Point, Rect } from './types';

interface Color {
  r: number;
  g: number;
  b: number;
}

interface PixelBounds {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

const COLOR_DISTANCE_THRESHOLD = 34;

export class VisualElementRegionDetector {
  constructor(
    private readonly pixels: Uint8ClampedArray,
    private readonly sampleWidth: number,
    private readonly sampleHeight: number
  ) {}

  detect(point: Point, bounds: Rect): Rect | null {
    const baseColor = this.getDominantNearbyColor(point, bounds);
    const start = this.findMatchingStart(point, bounds, baseColor);
    if (!start) return null;

    const pixelBounds = this.getPixelBounds(bounds);
    return pixelBounds
      ? this.floodFillRegion(start, pixelBounds, baseColor)
      : null;
  }

  private floodFillRegion(
    start: Point,
    bounds: PixelBounds,
    baseColor: Color
  ): Rect | null {
    const { left, top, right, bottom, width, height } = bounds;
    const visited = new Uint8Array(width * height);
    const queueX = new Int32Array(width * height);
    const queueY = new Int32Array(width * height);
    let head = 0;
    let tail = 1;
    let minX = start.x;
    let maxX = start.x;
    let minY = start.y;
    let maxY = start.y;

    queueX[0] = start.x;
    queueY[0] = start.y;
    visited[(start.y - top) * width + start.x - left] = 1;

    while (head < tail) {
      const x = queueX[head];
      const y = queueY[head];
      head += 1;
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);

      tail = this.enqueueNeighbors(
        x,
        y,
        left,
        top,
        right,
        bottom,
        width,
        baseColor,
        visited,
        queueX,
        queueY,
        tail
      );
      if (tail > width * height * 0.94) return null;
    }

    const regionWidth = maxX - minX + 1;
    const regionHeight = maxY - minY + 1;
    const fillRatio = tail / Math.max(1, regionWidth * regionHeight);
    return fillRatio >= 0.24
      ? { x: minX, y: minY, width: regionWidth, height: regionHeight }
      : null;
  }

  private getPixelBounds(bounds: Rect): PixelBounds | null {
    const left = Math.max(0, Math.floor(bounds.x));
    const top = Math.max(0, Math.floor(bounds.y));
    const right = Math.min(
      this.sampleWidth,
      Math.ceil(bounds.x + bounds.width)
    );
    const bottom = Math.min(
      this.sampleHeight,
      Math.ceil(bounds.y + bounds.height)
    );
    const width = right - left;
    const height = bottom - top;
    return width > 0 && height > 0
      ? { left, top, right, bottom, width, height }
      : null;
  }

  private enqueueNeighbors(
    x: number,
    y: number,
    left: number,
    top: number,
    right: number,
    bottom: number,
    cropWidth: number,
    color: Color,
    visited: Uint8Array,
    queueX: Int32Array,
    queueY: Int32Array,
    initialTail: number
  ): number {
    let tail = initialTail;
    const neighbors = [
      { x: x - 1, y },
      { x: x + 1, y },
      { x, y: y - 1 },
      { x, y: y + 1 }
    ];

    for (const neighbor of neighbors) {
      if (
        neighbor.x < left ||
        neighbor.x >= right ||
        neighbor.y < top ||
        neighbor.y >= bottom
      ) {
        continue;
      }
      const visitedIndex = (neighbor.y - top) * cropWidth + neighbor.x - left;
      if (visited[visitedIndex]) continue;
      visited[visitedIndex] = 1;
      if (!this.isColorNear(this.getColor(neighbor.x, neighbor.y), color)) {
        continue;
      }
      queueX[tail] = neighbor.x;
      queueY[tail] = neighbor.y;
      tail += 1;
    }

    return tail;
  }

  private getDominantNearbyColor(point: Point, bounds: Rect): Color {
    const buckets = new Map<
      string,
      { count: number; r: number; g: number; b: number }
    >();
    for (let offsetY = -4; offsetY <= 4; offsetY += 2) {
      for (let offsetX = -4; offsetX <= 4; offsetX += 2) {
        const x = Math.round(point.x + offsetX);
        const y = Math.round(point.y + offsetY);
        if (!this.contains(bounds, { x, y })) continue;
        const color = this.getColor(x, y);
        const key = `${color.r >> 4},${color.g >> 4},${color.b >> 4}`;
        const bucket = buckets.get(key) || { count: 0, r: 0, g: 0, b: 0 };
        bucket.count += 1;
        bucket.r += color.r;
        bucket.g += color.g;
        bucket.b += color.b;
        buckets.set(key, bucket);
      }
    }

    const dominant = [...buckets.values()].reduce(
      (best, current) => (current.count > best.count ? current : best),
      { count: 1, r: 255, g: 255, b: 255 }
    );
    return {
      r: dominant.r / dominant.count,
      g: dominant.g / dominant.count,
      b: dominant.b / dominant.count
    };
  }

  private findMatchingStart(
    point: Point,
    bounds: Rect,
    color: Color
  ): Point | null {
    for (let radius = 0; radius <= 6; radius += 1) {
      for (let y = point.y - radius; y <= point.y + radius; y += 1) {
        for (let x = point.x - radius; x <= point.x + radius; x += 1) {
          const candidate = { x: Math.round(x), y: Math.round(y) };
          if (
            this.contains(bounds, candidate) &&
            this.isColorNear(this.getColor(candidate.x, candidate.y), color)
          ) {
            return candidate;
          }
        }
      }
    }
    return null;
  }

  private isColorNear(left: Color, right: Color): boolean {
    const deltaR = left.r - right.r;
    const deltaG = left.g - right.g;
    const deltaB = left.b - right.b;
    return (
      deltaR * deltaR + deltaG * deltaG + deltaB * deltaB <=
      COLOR_DISTANCE_THRESHOLD * COLOR_DISTANCE_THRESHOLD
    );
  }

  private getColor(x: number, y: number): Color {
    const clampedX = Math.max(0, Math.min(this.sampleWidth - 1, x));
    const clampedY = Math.max(0, Math.min(this.sampleHeight - 1, y));
    const index = (clampedY * this.sampleWidth + clampedX) * 4;
    return {
      r: this.pixels[index],
      g: this.pixels[index + 1],
      b: this.pixels[index + 2]
    };
  }

  private contains(rect: Rect, point: Point): boolean {
    return (
      point.x >= rect.x &&
      point.x < rect.x + rect.width &&
      point.y >= rect.y &&
      point.y < rect.y + rect.height
    );
  }
}
