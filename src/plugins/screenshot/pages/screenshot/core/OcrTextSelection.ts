export interface OcrTextSelectionPoint {
  blockIndex: number
  offset: number
}

export interface OcrTextSelectionRange {
  anchor: OcrTextSelectionPoint
  focus: OcrTextSelectionPoint
}

export interface OcrTextSelectionBlock {
  text: string
  separator: string
}

export interface OcrTextSelectionSegment {
  blockIndex: number
  start: number
  end: number
}

export function normalizeOcrTextSelection(
  selection: OcrTextSelectionRange
): { start: OcrTextSelectionPoint, end: OcrTextSelectionPoint } {
  return comparePoints(selection.anchor, selection.focus) <= 0
    ? { start: selection.anchor, end: selection.focus }
    : { start: selection.focus, end: selection.anchor }
}

export function getOcrTextSelectionSegments(
  blocks: OcrTextSelectionBlock[],
  selection: OcrTextSelectionRange | null
): OcrTextSelectionSegment[] {
  if (!selection || blocks.length === 0) {
    return []
  }

  const { start, end } = normalizeOcrTextSelection(selection)
  if (start.blockIndex < 0 || end.blockIndex >= blocks.length) {
    return []
  }

  const segments: OcrTextSelectionSegment[] = []
  for (let blockIndex = start.blockIndex; blockIndex <= end.blockIndex; blockIndex += 1) {
    const textLength = blocks[blockIndex].text.length
    const segmentStart = blockIndex === start.blockIndex
      ? clampOffset(start.offset, textLength)
      : 0
    const segmentEnd = blockIndex === end.blockIndex
      ? clampOffset(end.offset, textLength)
      : textLength
    if (segmentEnd > segmentStart) {
      segments.push({ blockIndex, start: segmentStart, end: segmentEnd })
    }
  }
  return segments
}

export function buildSelectedOcrText(
  blocks: OcrTextSelectionBlock[],
  selection: OcrTextSelectionRange | null
): string {
  const segments = getOcrTextSelectionSegments(blocks, selection)
  return segments
    .map((segment, index) => {
      const block = blocks[segment.blockIndex]
      const selectedText = block.text.slice(segment.start, segment.end)
      const reachesBlockEnd = segment.end === block.text.length
      const hasFollowingSegment = index < segments.length - 1
      return selectedText + (reachesBlockEnd && hasFollowingSegment ? block.separator : '')
    })
    .join('')
}

export function findNearestOcrCharacterOffset(boundaries: number[], target: number): number {
  let nearestOffset = 0
  let nearestDistance = Number.POSITIVE_INFINITY
  for (let offset = 0; offset < boundaries.length; offset += 1) {
    const distance = Math.abs(boundaries[offset] - target)
    if (distance < nearestDistance) {
      nearestOffset = offset
      nearestDistance = distance
    }
  }
  return nearestOffset
}

function comparePoints(left: OcrTextSelectionPoint, right: OcrTextSelectionPoint): number {
  return left.blockIndex - right.blockIndex || left.offset - right.offset
}

function clampOffset(offset: number, textLength: number): number {
  if (!Number.isFinite(offset)) {
    return 0
  }
  return Math.max(0, Math.min(textLength, Math.round(offset)))
}
