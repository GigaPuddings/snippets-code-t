import type { Rect } from './types';

export interface StabilizedCandidateUpdate {
  rect: Rect | null;
  changed: boolean;
}

export interface SelectionHierarchyPosition {
  index: number;
  total: number;
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
  private hierarchy: Rect[] = [];
  private hierarchyIndex = 0;

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
    if (
      rect &&
      this.currentRect &&
      !areSelectionRectsEquivalent(this.currentRect, rect) &&
      this.containsRect(rect, this.currentRect)
    ) {
      // The delayed UI Automation pass can only expose a parent container for
      // some applications. Do not replace the smaller visual candidate that
      // was already shown under the same stationary pointer with that parent.
      // Equivalent boundary corrections and smaller child candidates still
      // flow through `commit` below.
      this.isFinalized = true;
      return {
        rect: this.cloneRect(this.currentRect),
        changed: false
      };
    }

    const update = this.commit(rect);
    this.isFinalized = rect !== null;
    return update;
  }

  setHierarchy(rects: Rect[]): StabilizedCandidateUpdate {
    const hierarchy = this.normalizeHierarchy(rects);
    this.hierarchy = hierarchy;
    this.hierarchyIndex = 0;
    this.isFinalized = hierarchy.length > 0;
    return this.commit(hierarchy[0] || null);
  }

  cycleHierarchy(direction: number): StabilizedCandidateUpdate | null {
    if (this.hierarchy.length < 2 || direction === 0) return null;

    const nextIndex = Math.max(
      0,
      Math.min(
        this.hierarchy.length - 1,
        this.hierarchyIndex + Math.sign(direction)
      )
    );
    if (nextIndex === this.hierarchyIndex) {
      return {
        rect: this.cloneRect(this.currentRect),
        changed: false
      };
    }

    this.hierarchyIndex = nextIndex;
    this.isFinalized = true;
    return this.commit(this.hierarchy[this.hierarchyIndex]);
  }

  getHierarchyPosition(): SelectionHierarchyPosition | null {
    if (this.hierarchy.length < 2) return null;
    return {
      index: this.hierarchyIndex,
      total: this.hierarchy.length
    };
  }

  clearHierarchy(): void {
    this.hierarchy = [];
    this.hierarchyIndex = 0;
  }

  reset(): void {
    this.currentRect = null;
    this.isFinalized = false;
    this.clearHierarchy();
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

  private normalizeHierarchy(rects: Rect[]): Rect[] {
    const candidates = rects
      .filter((rect) => rect.width > 0 && rect.height > 0)
      .sort(
        (left, right) => left.width * left.height - right.width * right.height
      )
      .filter(
        (rect, index, sorted) =>
          !sorted
            .slice(0, index)
            .some((candidate) => areSelectionRectsEquivalent(candidate, rect))
      );

    const hierarchy: Rect[] = [];
    for (const candidate of candidates) {
      const child = hierarchy[hierarchy.length - 1];
      if (!child || this.containsRect(candidate, child)) {
        hierarchy.push({ ...candidate });
      }
    }
    return hierarchy;
  }

  private containsRect(container: Rect, candidate: Rect): boolean {
    const tolerance = 2;
    return (
      container.x <= candidate.x + tolerance &&
      container.y <= candidate.y + tolerance &&
      container.x + container.width >=
        candidate.x + candidate.width - tolerance &&
      container.y + container.height >=
        candidate.y + candidate.height - tolerance
    );
  }
}
