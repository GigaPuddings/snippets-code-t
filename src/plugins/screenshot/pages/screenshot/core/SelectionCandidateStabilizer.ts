import type { Rect } from './types';

export interface StabilizedCandidateUpdate {
  rect: Rect | null;
  changed: boolean;
}

export function areSelectionRectsEquivalent(
  left: Rect | null,
  right: Rect | null
): boolean {
  if (!left || !right) return left === right;

  const edgesAreClose =
    Math.abs(left.x - right.x) <= 3 &&
    Math.abs(left.y - right.y) <= 3 &&
    Math.abs(left.width - right.width) <= 6 &&
    Math.abs(left.height - right.height) <= 6;
  if (edgesAreClose) return true;

  const intersectionWidth = Math.max(
    0,
    Math.min(left.x + left.width, right.x + right.width) -
      Math.max(left.x, right.x)
  );
  const intersectionHeight = Math.max(
    0,
    Math.min(left.y + left.height, right.y + right.height) -
      Math.max(left.y, right.y)
  );
  const intersectionArea = intersectionWidth * intersectionHeight;
  const unionArea =
    left.width * left.height + right.width * right.height - intersectionArea;

  return unionArea > 0 && intersectionArea / unionArea >= 0.86;
}

export class SelectionCandidateStabilizer {
  private currentRect: Rect | null = null;
  private isFinalized = false;

  preview(rect: Rect | null): StabilizedCandidateUpdate {
    if (!rect) {
      return {
        rect: this.cloneRect(this.currentRect),
        changed: false
      };
    }
    if (
      this.isFinalized &&
      areSelectionRectsEquivalent(this.currentRect, rect)
    ) {
      return {
        rect: this.cloneRect(this.currentRect),
        changed: false
      };
    }
    if (
      this.currentRect &&
      rect.width * rect.height >
        this.currentRect.width * this.currentRect.height * 2.5
    ) {
      return {
        rect: this.cloneRect(this.currentRect),
        changed: false
      };
    }

    this.isFinalized = false;
    return this.commit(rect);
  }

  finalize(rect: Rect | null): StabilizedCandidateUpdate {
    const update = this.commit(rect);
    this.isFinalized = rect !== null;
    return update;
  }

  reset(): void {
    this.currentRect = null;
    this.isFinalized = false;
  }

  private commit(rect: Rect | null): StabilizedCandidateUpdate {
    const changed = !areSelectionRectsEquivalent(this.currentRect, rect);
    this.currentRect = this.cloneRect(rect);
    return {
      rect: this.cloneRect(this.currentRect),
      changed
    };
  }

  private cloneRect(rect: Rect | null): Rect | null {
    return rect ? { ...rect } : null;
  }
}
