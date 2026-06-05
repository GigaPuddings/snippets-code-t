import type { OcrTextBlock, Rect } from './types'

export interface ParagraphBlock {
  text: string
  blocks: OcrTextBlock[]
  bbox: Rect
  translatedText?: string
  isCodeBlock?: boolean
  isStructuredBlock?: boolean
  fontSize?: number
  lineHeight?: number
  angle?: number
}

interface ReflowLine {
  text: string
  blocks: OcrTextBlock[]
  bbox: Rect
  fontSize: number
  lineHeight: number
  centerY: number
  hasTableColumns: boolean
  isCodeLike: boolean
}

interface ReflowLineGroup {
  y: number
  blocks: OcrTextBlock[]
}

interface ReflowOptions {
  mode?: 'multi_para' | 'single_para'
}

interface NormalizedBbox {
  left: number
  top: number
  right: number
  bottom: number
}

interface LayoutUnit {
  bbox: NormalizedBbox
  block: OcrTextBlock
}

interface LayoutCut {
  left: number
  right: number
  startRow: number
  endRow: number
}

interface LayoutNode {
  xLeft: number
  xRight: number
  rowTop: number
  rowBottom: number
  units: LayoutUnit[]
  children: LayoutNode[]
}

const END_PUNCTUATION = /[.!?。！？；;：:][)"'”’】）\]]*$/
const CJK_CHAR = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/
const ASCII_WORD_EDGE = /[A-Za-z0-9]/
const LIST_ITEM_START = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/
const INLINE_LIST_ITEM_START = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g

export function reflowOcrBlocks(blocks: OcrTextBlock[], options: ReflowOptions = {}): ParagraphBlock[] {
  const averageLineHeight = getAverageLineHeight(blocks)
  const cleanBlocks = removeIconNoiseBlocks(blocks, averageLineHeight)
  if (cleanBlocks.length === 0) {
    return []
  }

  if (isLikelyVerticalLayout(cleanBlocks, averageLineHeight)) {
    return buildVerticalParagraphs(cleanBlocks, averageLineHeight)
  }

  const blockGroups = options.mode === 'single_para'
    ? [sortBlocksForSingleColumn(cleanBlocks, averageLineHeight)]
    : getLayoutBlockGroups(cleanBlocks, averageLineHeight)
  return blockGroups.flatMap((group) => reflowBlockGroup(group, averageLineHeight))
}

function reflowBlockGroup(blocks: OcrTextBlock[], averageLineHeight: number): ParagraphBlock[] {
  const lines = buildLines(blocks, averageLineHeight)
  const paragraphs: ParagraphBlock[] = []

  for (const line of lines) {
    const previous = paragraphs[paragraphs.length - 1]
    const shouldMerge = previous
      ? shouldMergeLineIntoParagraph(previous, line, averageLineHeight)
      : false

    if (!previous || !shouldMerge) {
      paragraphs.push(createParagraphFromLine(line))
      continue
    }

    previous.text = joinAcrossLines(previous.text, line.text)
    previous.blocks = [...previous.blocks, ...line.blocks]
    previous.bbox = unionRects(previous.bbox, line.bbox)
    previous.fontSize = weightedAverage(
      previous.fontSize || line.fontSize,
      previous.blocks.length - line.blocks.length,
      line.fontSize,
      line.blocks.length
    )
    previous.lineHeight = weightedAverage(
      previous.lineHeight || line.lineHeight,
      previous.blocks.length - line.blocks.length,
      line.lineHeight,
      line.blocks.length
    )
    previous.isCodeBlock = Boolean(previous.isCodeBlock || line.isCodeLike || line.hasTableColumns)
    previous.isStructuredBlock = Boolean(previous.isStructuredBlock || line.hasTableColumns)
  }

  return splitStructuredParagraphs(paragraphs, averageLineHeight)
}

function getLayoutBlockGroups(blocks: OcrTextBlock[], averageLineHeight: number): OcrTextBlock[][] {
  if (blocks.length <= 1) {
    return [blocks]
  }

  const units = blocks
    .map((block) => ({
      bbox: getBlockBbox(block),
      block
    }))
    .filter((unit) => isValidBbox(unit.bbox))
    .sort(compareUnitsByTop)

  if (units.length <= 1) {
    return [sortBlocksForSingleColumn(blocks, averageLineHeight)]
  }

  if (isLikelySingleColumnFlow(units, averageLineHeight)) {
    return [sortBlocksForSingleColumn(blocks, averageLineHeight)]
  }

  const { cuts, rows } = getLayoutCutsAndRows(units)
  if (cuts.length < 2 || rows.length <= 1) {
    return [sortBlocksForSingleColumn(blocks, averageLineHeight)]
  }

  const root = buildLayoutTree(cuts, rows)
  const nodes = preorderLayoutNodes(root).filter((node) => node.units.length > 0)
  const groups = nodes
    .map((node) => node.units.map((unit) => unit.block))
    .filter((group) => group.length > 0)

  return groups.length > 0 ? groups : [sortBlocksForSingleColumn(blocks, averageLineHeight)]
}

function isLikelySingleColumnFlow(units: LayoutUnit[], averageLineHeight: number): boolean {
  if (units.length < 2) {
    return true
  }

  const sortedUnits = [...units].sort(compareUnitsByTop)
  let comparablePairs = 0
  let alignedPairs = 0

  for (let index = 1; index < sortedUnits.length; index += 1) {
    const previous = sortedUnits[index - 1].bbox
    const current = sortedUnits[index].bbox
    const verticalGap = current.top - previous.bottom

    if (verticalGap > averageLineHeight * 2.5) {
      continue
    }

    comparablePairs += 1
    const overlapWidth = Math.min(previous.right, current.right) - Math.max(previous.left, current.left)
    const minWidth = Math.max(Math.min(previous.right - previous.left, current.right - current.left), 1)
    const hasStrongHorizontalOverlap = overlapWidth / minWidth >= 0.45
    const hasNearLeftEdge = Math.abs(previous.left - current.left) <= averageLineHeight * 1.5

    if (hasStrongHorizontalOverlap || hasNearLeftEdge) {
      alignedPairs += 1
    }
  }

  return comparablePairs > 0 && alignedPairs / comparablePairs >= 0.72
}

function getLayoutCutsAndRows(units: LayoutUnit[]): { cuts: LayoutCut[], rows: LayoutUnit[][] } {
  const pageLeft = Math.min(...units.map((unit) => unit.bbox.left)) - 1
  const pageRight = Math.max(...units.map((unit) => unit.bbox.right)) + 1
  const rows: LayoutUnit[][] = []
  const completedCuts: LayoutCut[] = []
  let activeGaps: Array<{ left: number, right: number, startRow: number }> = []
  let unitIndex = 0

  while (unitIndex < units.length) {
    const firstUnit = units[unitIndex]
    const rowBottom = firstUnit.bbox.bottom
    const row: LayoutUnit[] = []

    while (unitIndex < units.length && units[unitIndex].bbox.top <= rowBottom) {
      row.push(units[unitIndex])
      unitIndex += 1
    }

    row.sort((a, b) => a.bbox.left - b.bbox.left || a.bbox.right - b.bbox.right)
    const rowGaps = getRowGaps(row, pageLeft, pageRight, rows.length)
    const { gaps, removedGaps } = updateLayoutGaps(activeGaps, rowGaps)
    const previousRowIndex = rows.length - 1
    for (const gap of removedGaps) {
      completedCuts.push({
        left: gap.left,
        right: gap.right,
        startRow: gap.startRow,
        endRow: previousRowIndex
      })
    }

    activeGaps = gaps
    rows.push(row)
  }

  const lastRowIndex = rows.length - 1
  for (const gap of activeGaps) {
    completedCuts.push({
      left: gap.left,
      right: gap.right,
      startRow: gap.startRow,
      endRow: lastRowIndex
    })
  }

  completedCuts.sort((a, b) => a.left - b.left || a.right - b.right)
  return { cuts: completedCuts, rows }
}

function getRowGaps(
  row: LayoutUnit[],
  pageLeft: number,
  pageRight: number,
  rowIndex: number
): Array<{ left: number, right: number, startRow: number }> {
  const gaps: Array<{ left: number, right: number, startRow: number }> = []
  let searchStart = pageLeft

  for (const unit of row) {
    if (unit.bbox.left > searchStart) {
      gaps.push({ left: searchStart, right: unit.bbox.left, startRow: rowIndex })
    }
    if (unit.bbox.right > searchStart) {
      searchStart = unit.bbox.right
    }
  }

  gaps.push({ left: searchStart, right: pageRight, startRow: rowIndex })
  return gaps
}

function updateLayoutGaps(
  activeGaps: Array<{ left: number, right: number, startRow: number }>,
  rowGaps: Array<{ left: number, right: number, startRow: number }>
): {
  gaps: Array<{ left: number, right: number, startRow: number }>
  removedGaps: Array<{ left: number, right: number, startRow: number }>
} {
  const keepActive = activeGaps.map(() => false)
  const keepRow = rowGaps.map(() => false)
  const nextGaps: Array<{ left: number, right: number, startRow: number }> = []

  for (let activeIndex = 0; activeIndex < activeGaps.length; activeIndex += 1) {
    const active = activeGaps[activeIndex]
    for (let rowIndex = 0; rowIndex < rowGaps.length; rowIndex += 1) {
      const row = rowGaps[rowIndex]
      const left = Math.max(active.left, row.left)
      const right = Math.min(active.right, row.right)
      if (left <= right) {
        nextGaps.push({ left, right, startRow: active.startRow })
        keepActive[activeIndex] = true
        keepRow[rowIndex] = true
      }
    }
  }

  for (let rowIndex = 0; rowIndex < rowGaps.length; rowIndex += 1) {
    if (!keepRow[rowIndex]) {
      nextGaps.push(rowGaps[rowIndex])
    }
  }

  return {
    gaps: nextGaps,
    removedGaps: activeGaps.filter((_, index) => !keepActive[index])
  }
}

function buildLayoutTree(cuts: LayoutCut[], rows: LayoutUnit[][]): LayoutNode {
  const rowGaps = rows.map((): Array<{ left: number, right: number }> => [])
  for (const cut of cuts) {
    for (let rowIndex = cut.startRow; rowIndex <= cut.endRow; rowIndex += 1) {
      rowGaps[rowIndex]?.push({ left: cut.left, right: cut.right })
    }
  }

  for (const gaps of rowGaps) {
    gaps.sort((a, b) => a.left - b.left || a.right - b.right)
  }

  const root: LayoutNode = {
    xLeft: cuts[0].left - 1,
    xRight: cuts[cuts.length - 1].right + 1,
    rowTop: -1,
    rowBottom: -1,
    units: [],
    children: []
  }
  const completedNodes: LayoutNode[] = [root]
  let activeNodes: LayoutNode[] = []

  const completeNode = (node: LayoutNode) => {
    const nodeRight = node.xRight - 2
    const candidates = completedNodes.filter((candidate) => {
      return (
        nodeRight >= candidate.xLeft &&
        nodeRight <= candidate.xRight + 0.0001 &&
        candidate.rowBottom < node.rowTop
      )
    })
    const maxRowBottom = Math.max(...candidates.map((candidate) => candidate.rowBottom), root.rowBottom)
    const lowestCandidates = candidates.filter((candidate) => candidate.rowBottom === maxRowBottom)
    const parent = lowestCandidates.length > 0
      ? lowestCandidates.reduce((best, candidate) => (candidate.xRight > best.xRight ? candidate : best))
      : root

    parent.children.push(node)
    completedNodes.push(node)
  }

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const gaps = rowGaps[rowIndex]
    const nextActiveNodes: LayoutNode[] = []

    for (const node of activeNodes) {
      let leftContinues = false
      let rightContinues = false
      let interrupted = false

      for (const gap of gaps) {
        if (almostEqual(gap.right, node.xLeft)) {
          leftContinues = true
        }
        if (almostEqual(gap.left, node.xRight)) {
          rightContinues = true
        }
        if (
          (node.xLeft < gap.left && gap.left < node.xRight) ||
          (node.xLeft < gap.right && gap.right < node.xRight)
        ) {
          interrupted = true
          break
        }
      }

      if (!leftContinues || !rightContinues || interrupted) {
        completeNode(node)
      } else {
        node.rowBottom = rowIndex
        nextActiveNodes.push(node)
      }
    }

    activeNodes = nextActiveNodes
    let unitIndex = 0
    let gapIndex = 0
    const row = rows[rowIndex]

    while (unitIndex < row.length && gaps.length >= 2) {
      const unit = row[unitIndex]
      if (gapIndex + 1 >= gaps.length) {
        gapIndex = Math.max(0, gaps.length - 2)
      }

      const xLeft = gaps[gapIndex].right
      const xRight = gaps[gapIndex + 1].left
      if (unit.bbox.left + 0.0001 > xRight && gapIndex < gaps.length - 2) {
        gapIndex += 1
        continue
      }

      let node = activeNodes.find((item) => almostEqual(item.xLeft, xLeft) && almostEqual(item.xRight, xRight))
      if (!node) {
        node = {
          xLeft,
          xRight,
          rowTop: rowIndex,
          rowBottom: rowIndex,
          units: [],
          children: []
        }
        activeNodes.push(node)
      }

      node.units.push(unit)
      unitIndex += 1
    }
  }

  for (const node of activeNodes) {
    completeNode(node)
  }

  for (const node of completedNodes) {
    node.children.sort((a, b) => a.xLeft - b.xLeft || a.rowTop - b.rowTop)
    node.units.sort(compareUnitsByTop)
  }

  return root
}

function preorderLayoutNodes(root: LayoutNode): LayoutNode[] {
  const stack = [root]
  const result: LayoutNode[] = []

  while (stack.length > 0) {
    const node = stack.pop()
    if (!node) continue
    result.push(node)
    stack.push(...[...node.children].reverse())
  }

  return result
}

function sortBlocksForSingleColumn(blocks: OcrTextBlock[], averageLineHeight: number): OcrTextBlock[] {
  return [...blocks].sort((a, b) => {
    const topDiff = a.y - b.y
    return Math.abs(topDiff) > averageLineHeight * 0.45 ? topDiff : a.x - b.x
  })
}

function buildVerticalParagraphs(blocks: OcrTextBlock[], averageLineHeight: number): ParagraphBlock[] {
  const averageBlockWidth = positiveNumber(average(blocks.map((block) => block.width)), averageLineHeight * 0.5)
  const sameColumnThreshold = Math.max(averageBlockWidth * 1.4, averageLineHeight * 0.28)
  const sortedBlocks = [...blocks].sort((a, b) => {
    const xDiff = (b.x + b.width / 2) - (a.x + a.width / 2)
    return Math.abs(xDiff) > averageLineHeight * 0.65 ? xDiff : a.y - b.y
  })
  const columns: OcrTextBlock[][] = []

  for (const block of sortedBlocks) {
    const centerX = block.x + block.width / 2
    const currentColumn = columns[columns.length - 1]
    const columnCenterX = currentColumn
      ? average(currentColumn.map((item) => item.x + item.width / 2))
      : 0

    if (currentColumn && Math.abs(centerX - columnCenterX) <= sameColumnThreshold) {
      currentColumn.push(block)
    } else {
      columns.push([block])
    }
  }

  return columns.map((column) => {
    const columnBlocks = [...column].sort((a, b) => a.y - b.y)
    const text = columnBlocks.reduce((result, block, index) => {
      const blockText = block.text.trim()
      return index === 0 ? blockText : joinText(result, blockText)
    }, '')
    const bbox = unionBlockRects(columnBlocks)
    const fontSize = average(columnBlocks.map((block) => positiveNumber(block.fontSize, averageLineHeight)))
    const lineHeight = average(columnBlocks.map((block) => getBlockLineHeight(block)))

    return {
      text,
      blocks: columnBlocks,
      bbox,
      isCodeBlock: false,
      isStructuredBlock: false,
      fontSize,
      lineHeight,
      angle: average(columnBlocks.map((block) => block.angle || 0))
    }
  })
}

function isLikelyVerticalLayout(blocks: OcrTextBlock[], averageLineHeight: number): boolean {
  if (blocks.length < 2) {
    return false
  }

  const verticalBlocks = blocks.filter((block) => {
    const width = Math.max(block.width, 1)
    return block.height > width * 1.35 && block.height > Math.max(18, averageLineHeight * 0.35)
  })

  return verticalBlocks.length >= Math.max(2, Math.ceil(blocks.length * 0.56))
}

function getBlockBbox(block: OcrTextBlock): NormalizedBbox {
  return {
    left: block.x,
    top: block.y,
    right: block.x + block.width,
    bottom: block.y + block.height
  }
}

function isValidBbox(bbox: NormalizedBbox): boolean {
  return (
    Number.isFinite(bbox.left) &&
    Number.isFinite(bbox.top) &&
    Number.isFinite(bbox.right) &&
    Number.isFinite(bbox.bottom) &&
    bbox.right >= bbox.left &&
    bbox.bottom >= bbox.top
  )
}

function compareUnitsByTop(a: LayoutUnit, b: LayoutUnit): number {
  return a.bbox.top - b.bbox.top || a.bbox.left - b.bbox.left
}

function almostEqual(a: number, b: number): boolean {
  return Math.abs(a - b) <= 0.0001
}

function removeIconNoiseBlocks(blocks: OcrTextBlock[], averageLineHeight: number): OcrTextBlock[] {
  return blocks
    .map((block) => {
      const text = block.text.trim()
      if (!text || isStandaloneExternalLinkIconNoise(block, averageLineHeight) || isLanguageIconNoise(text)) {
        return null
      }

      const normalizedText = normalizeOcrMarkerText(normalizeIconJoinedText(text, block, averageLineHeight))
      return normalizedText === block.text ? block : { ...block, text: normalizedText }
    })
    .filter((block): block is OcrTextBlock => Boolean(block))
}

function isStandaloneExternalLinkIconNoise(block: OcrTextBlock, averageLineHeight: number): boolean {
  const text = block.text.trim()
  if (!/^[cC]$/.test(text)) {
    return false
  }

  const maxIconSize = averageLineHeight * 1.25
  return block.width <= maxIconSize && block.height <= maxIconSize
}

function normalizeIconJoinedText(text: string, block: OcrTextBlock, averageLineHeight: number): string {
  if (/^xC$/i.test(text) && block.width <= averageLineHeight * 2.4) {
    return 'X'
  }

  return text
}

function isLanguageIconNoise(text: string): boolean {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(text.trim())
}

function normalizeOcrMarkerText(text: string): string {
  return text.replace(/^:\s+(?=[A-Z])/, '- ')
}

function buildLines(blocks: OcrTextBlock[], averageLineHeight: number): ReflowLine[] {
  const sortedBlocks = [...blocks].sort((a, b) => {
    const yDiff = a.y - b.y
    return Math.abs(yDiff) > averageLineHeight * 0.45 ? yDiff : a.x - b.x
  })

  const lineGroups: ReflowLineGroup[] = []
  const sameLineThreshold = averageLineHeight * 0.45

  for (const block of sortedBlocks) {
    const currentLine = lineGroups[lineGroups.length - 1]
    if (
      currentLine &&
      Math.abs(block.y - currentLine.y) < sameLineThreshold &&
      !hasLargeSameLineGap(currentLine.blocks, block, averageLineHeight)
    ) {
      currentLine.blocks.push(block)
      currentLine.y = average(currentLine.blocks.map((item) => item.y))
    } else {
      lineGroups.push({ y: block.y, blocks: [block] })
    }
  }

  return lineGroups.map((lineGroup) => createLine(lineGroup.blocks, averageLineHeight))
}

function createLine(blocks: OcrTextBlock[], averageLineHeight: number): ReflowLine {
  const sortedBlocks = [...blocks].sort((a, b) => a.x - b.x)
  const bbox = unionBlockRects(sortedBlocks)
  const text = sortedBlocks.reduce((result, block, index) => {
    const blockText = block.text.trim()
    if (index === 0) return blockText
    return joinInlineText(result, blockText)
  }, '')

  const fontSize = average(sortedBlocks.map((block) => positiveNumber(block.fontSize, averageLineHeight)))
  const lineHeight = average(sortedBlocks.map((block) => getBlockLineHeight(block)))

  return {
    text,
    blocks: sortedBlocks,
    bbox,
    fontSize,
    lineHeight,
    centerY: bbox.y + bbox.height / 2,
    hasTableColumns: hasTableLikeColumns(sortedBlocks, averageLineHeight),
    isCodeLike: isLikelyCodeLine(text)
  }
}

function shouldMergeLineIntoParagraph(
  paragraph: ParagraphBlock,
  nextLine: ReflowLine,
  averageLineHeight: number
): boolean {
  const paragraphLines = buildLines(paragraph.blocks, averageLineHeight)
  const previousLine = paragraphLines[paragraphLines.length - 1]
  if (!previousLine) return false

  const previousIsListItem = isListItem(previousLine.text)
  if (hasEndingPunctuation(previousLine.text)) return false
  if (isListItem(nextLine.text)) return false
  if (previousIsListItem && !isLikelyListItemContinuation(previousLine, nextLine, averageLineHeight)) {
    return false
  }
  if (nextLine.isCodeLike || previousLine.isCodeLike) return false
  if (nextLine.hasTableColumns || previousLine.hasTableColumns) return false
  const lineGap = nextLine.bbox.y - (previousLine.bbox.y + previousLine.bbox.height)
  if (lineGap < -averageLineHeight * 0.25 || lineGap >= averageLineHeight * 1.8) {
    return false
  }

  if (hasBlankParagraphGap(paragraphLines, lineGap, averageLineHeight)) {
    return false
  }

  if (isLikelyTitleLine(previousLine, nextLine, lineGap, averageLineHeight)) {
    return false
  }

  if (hasVisualHierarchyBreak(previousLine, nextLine, lineGap, averageLineHeight)) {
    return false
  }

  if (hasParagraphRestartAfterShortLine(previousLine, nextLine, lineGap, averageLineHeight)) {
    return false
  }

  if (hasVerticalMenuItemBreak(previousLine, nextLine, lineGap, averageLineHeight)) {
    return false
  }

  if (previousIsListItem) {
    return true
  }

  const leftTolerance = Math.max(averageLineHeight * 1.2, previousLine.lineHeight * 0.9)
  return Math.abs(nextLine.bbox.x - previousLine.bbox.x) <= leftTolerance
}

function isLikelyListItemContinuation(
  previousLine: ReflowLine,
  nextLine: ReflowLine,
  averageLineHeight: number
): boolean {
  if (isLikelyShortHeadingText(nextLine.text)) {
    return false
  }

  const continuationIndent = nextLine.bbox.x - previousLine.bbox.x
  const minContinuationIndent = Math.max(averageLineHeight * 0.8, previousLine.lineHeight * 0.65)
  return continuationIndent >= minContinuationIndent
}

function createParagraphFromLine(line: ReflowLine): ParagraphBlock {
  return {
    text: line.text,
    blocks: [...line.blocks],
    bbox: { ...line.bbox },
    isCodeBlock: line.isCodeLike || line.hasTableColumns,
    isStructuredBlock: line.hasTableColumns,
    fontSize: line.fontSize,
    lineHeight: line.lineHeight,
    angle: average(line.blocks.map((block) => block.angle || 0))
  }
}

function joinInlineText(left: string, right: string): string {
  return joinText(left, right)
}

function joinAcrossLines(left: string, right: string): string {
  return joinText(left, right)
}

function joinText(left: string, right: string): string {
  const trimmedLeft = left.trimEnd()
  const trimmedRight = right.trimStart()
  if (!trimmedLeft) return trimmedRight
  if (!trimmedRight) return trimmedLeft

  const last = trimmedLeft.charAt(trimmedLeft.length - 1)
  const next = trimmedRight.charAt(0)
  const beforeHyphen = trimmedLeft.charAt(trimmedLeft.length - 2)

  if (last === '-' && ASCII_WORD_EDGE.test(beforeHyphen) && ASCII_WORD_EDGE.test(next)) {
    return `${trimmedLeft.slice(0, -1)}${trimmedRight}`
  }

  if (isClosingPunctuation(next) || isOpeningPunctuation(last)) {
    return `${trimmedLeft}${trimmedRight}`
  }

  if (CJK_CHAR.test(last) || CJK_CHAR.test(next) || isCjkPunctuation(last) || isCjkPunctuation(next)) {
    return `${trimmedLeft}${trimmedRight}`
  }

  if (ASCII_WORD_EDGE.test(last) && ASCII_WORD_EDGE.test(next)) {
    return `${trimmedLeft} ${trimmedRight}`
  }

  return `${trimmedLeft} ${trimmedRight}`.replace(/\s+/g, ' ')
}

function hasEndingPunctuation(text: string): boolean {
  return END_PUNCTUATION.test(text.trim())
}

function isListItem(text: string): boolean {
  return LIST_ITEM_START.test(text)
}

function splitStructuredParagraphs(
  paragraphs: ParagraphBlock[],
  averageLineHeight: number
): ParagraphBlock[] {
  return paragraphs.flatMap((paragraph) => splitStructuredParagraph(paragraph, averageLineHeight))
}

function splitStructuredParagraph(
  paragraph: ParagraphBlock,
  averageLineHeight: number
): ParagraphBlock[] {
  const segments = getStructuredTextSegments(paragraph.text)
  if (segments.length <= 1) {
    return [paragraph]
  }

  const sourceLines = buildLines(paragraph.blocks, averageLineHeight)
  const canUseSourceLineGeometry = sourceLines.length === segments.length

  return segments.map((text, index) => {
    const sourceLine = canUseSourceLineGeometry ? sourceLines[index] : null
    const bbox = sourceLine?.bbox || splitRectVertically(paragraph.bbox, index, segments.length)
    const blocks = sourceLine?.blocks || [createSyntheticBlockFromParagraph(paragraph, text, bbox, index)]

    return {
      ...paragraph,
      text,
      blocks,
      bbox,
      isCodeBlock: Boolean(blocks.some((block) => isLikelyCodeLine(block.text))),
      isStructuredBlock: paragraph.isStructuredBlock,
      fontSize: average(blocks.map((block) => positiveNumber(block.fontSize, paragraph.fontSize || averageLineHeight))),
      lineHeight: average(blocks.map((block) => getBlockLineHeight(block))),
      angle: average(blocks.map((block) => block.angle || 0))
    }
  })
}

function getStructuredTextSegments(text: string): string[] {
  const hardLines = text
    .split(/\r?\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
  if (hardLines.length > 1) {
    return hardLines.flatMap(getStructuredTextSegments)
  }

  const inlineListItems = splitInlineListItems(text)
  if (inlineListItems.length > 1) {
    return inlineListItems.flatMap(splitListItemHeadingTail)
  }

  return splitListItemHeadingTail(text)
}

function splitInlineListItems(text: string): string[] {
  const trimmed = text.trim()
  const starts: number[] = []
  INLINE_LIST_ITEM_START.lastIndex = 0

  for (const match of trimmed.matchAll(INLINE_LIST_ITEM_START)) {
    const marker = match[0]
    const index = match.index ?? 0
    starts.push(index + (marker.startsWith(' ') ? 1 : 0))
  }

  if (starts.length <= 1) {
    return [trimmed]
  }

  return starts
    .map((start, index) => {
      const end = starts[index + 1] ?? trimmed.length
      return trimmed.slice(start, end).trim()
    })
    .filter(Boolean)
}

function splitListItemHeadingTail(text: string): string[] {
  const trimmed = text.trim()
  if (!isListItem(trimmed)) {
    return [trimmed]
  }

  const match = trimmed.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/)
  if (!match || !isLikelyShortHeadingText(match[2])) {
    return [trimmed]
  }

  return [match[1].trim(), match[2].trim()]
}

function splitRectVertically(rect: Rect, index: number, total: number): Rect {
  const height = rect.height / Math.max(total, 1)
  return {
    x: rect.x,
    y: rect.y + height * index,
    width: rect.width,
    height
  }
}

function createSyntheticBlockFromParagraph(
  paragraph: ParagraphBlock,
  text: string,
  bbox: Rect,
  index: number
): OcrTextBlock {
  const source = paragraph.blocks[Math.min(index, Math.max(paragraph.blocks.length - 1, 0))]
  return {
    ...(source || {
      fontSize: paragraph.fontSize || bbox.height,
      lineHeight: paragraph.lineHeight || bbox.height,
      angle: paragraph.angle || 0
    }),
    text,
    x: bbox.x,
    y: bbox.y,
    width: bbox.width,
    height: bbox.height,
    fontSize: source?.fontSize || paragraph.fontSize || bbox.height,
    lineHeight: source?.lineHeight || paragraph.lineHeight || bbox.height,
    angle: source?.angle || paragraph.angle || 0
  }
}

function isLikelyShortHeadingText(text: string): boolean {
  const trimmed = text.trim()
  if (!trimmed || hasEndingPunctuation(trimmed) || isListItem(trimmed)) {
    return false
  }

  const words = trimmed.split(/\s+/).filter(Boolean)
  return words.length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(trimmed)
}

function hasBlankParagraphGap(lines: ReflowLine[], nextLineGap: number, averageLineHeight: number): boolean {
  if (lines.length < 2 || nextLineGap <= 0) {
    return false
  }

  const previousGaps: number[] = []
  for (let i = 1; i < lines.length; i++) {
    const previous = lines[i - 1]
    const current = lines[i]
    const gap = current.bbox.y - (previous.bbox.y + previous.bbox.height)
    if (gap > 0) {
      previousGaps.push(gap)
    }
  }

  const normalGap = previousGaps.length > 0 ? average(previousGaps) : 0
  const blankGapThreshold = Math.max(normalGap * 2.2, averageLineHeight * 1.15)
  return nextLineGap > blankGapThreshold
}

function isLikelyTitleLine(
  line: ReflowLine,
  nextLine: ReflowLine,
  lineGap: number,
  averageLineHeight: number
): boolean {
  const text = line.text.trim()
  if (!text || hasEndingPunctuation(text) || isListItem(text) || line.isCodeLike) {
    return false
  }

  if (text.endsWith('-')) {
    return false
  }

  const wordCount = text.split(/\s+/).filter(Boolean).length
  const isMuchShorterThanNext = line.bbox.width < nextLine.bbox.width * 0.72
  const isEnglishTitle = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(text) && wordCount <= 8 && isMuchShorterThanNext
  const isShortCjkTitle = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(text) && text.length <= 12 && isMuchShorterThanNext
  const isTitleLikeText = isEnglishTitle || isShortCjkTitle

  if (line.fontSize >= nextLine.fontSize * 1.18 && isTitleLikeText) {
    return true
  }

  const hasParagraphLikeGap = lineGap > averageLineHeight * 0.7

  return hasParagraphLikeGap && isTitleLikeText
}

function hasVisualHierarchyBreak(
  line: ReflowLine,
  nextLine: ReflowLine,
  lineGap: number,
  averageLineHeight: number
): boolean {
  if (lineGap <= 0) {
    return false
  }

  const largerFont = Math.max(line.fontSize, nextLine.fontSize)
  const smallerFont = Math.max(Math.min(line.fontSize, nextLine.fontSize), 1)
  const fontRatio = largerFont / smallerFont
  const relativeGap = lineGap / Math.max(smallerFont, averageLineHeight * 0.6, 1)

  if (fontRatio >= 1.45 && relativeGap >= 0.65) {
    return true
  }

  const previousLooksLikeDisplayText =
    line.fontSize >= averageLineHeight * 1.08 &&
    line.bbox.width >= nextLine.bbox.width * 0.82
  const nextLooksLikeBodyText =
    nextLine.fontSize <= line.fontSize * 0.78 &&
    lineGap >= Math.max(nextLine.lineHeight * 0.75, averageLineHeight * 0.55)

  return previousLooksLikeDisplayText && nextLooksLikeBodyText
}

function hasParagraphRestartAfterShortLine(
  line: ReflowLine,
  nextLine: ReflowLine,
  lineGap: number,
  averageLineHeight: number
): boolean {
  if (lineGap < averageLineHeight * 0.45) {
    return false
  }

  const wordCount = line.text.split(/\s+/).filter(Boolean).length
  const isShortTail = wordCount <= 3 && line.bbox.width < nextLine.bbox.width * 0.35
  const hasSimilarIndent = Math.abs(line.bbox.x - nextLine.bbox.x) <= averageLineHeight * 0.6

  return isShortTail && hasSimilarIndent
}

function hasVerticalMenuItemBreak(
  line: ReflowLine,
  nextLine: ReflowLine,
  lineGap: number,
  averageLineHeight: number
): boolean {
  if (lineGap < averageLineHeight * 0.25) {
    return false
  }

  const leftAligned = Math.abs(line.bbox.x - nextLine.bbox.x) <= averageLineHeight * 0.35
  if (!leftAligned) {
    return false
  }

  return isShortMenuText(line.text) && isShortMenuText(nextLine.text)
}

function isShortMenuText(text: string): boolean {
  const trimmed = text.trim()
  const words = trimmed.split(/\s+/).filter(Boolean)
  return words.length <= 3 && trimmed.length <= 32 && !hasEndingPunctuation(trimmed)
}

function isLikelyCodeLine(text: string): boolean {
  const trimmed = text.trim()
  if (!trimmed) return false

  if (/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(trimmed)) return true
  if (/^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(trimmed)) return true
  if (/^[{}()[\];,]+$/.test(trimmed)) return true
  if (/^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(trimmed)) return true
  if (/[{};]/.test(trimmed) && /[=()]/.test(trimmed)) return true
  if (/^<\/?[A-Za-z][^>]*>$/.test(trimmed)) return true
  if (/^[\w.-]+\([^)]*\)\s*[{;]?$/.test(trimmed)) return true

  return false
}

function hasLargeSameLineGap(
  currentLineBlocks: OcrTextBlock[],
  block: OcrTextBlock,
  averageLineHeight: number
): boolean {
  const sortedBlocks = [...currentLineBlocks].sort((a, b) => a.x - b.x)
  const rightMost = sortedBlocks[sortedBlocks.length - 1]
  const gap = block.x - (rightMost.x + rightMost.width)

  if (
    gap > averageLineHeight * 0.9 &&
    isStructuredTableKeyLike(rightMost.text) &&
    startsLikeTableDescription(block.text)
  ) {
    return false
  }

  return gap > averageLineHeight * 3.2
}

function hasTableLikeColumns(blocks: OcrTextBlock[], averageLineHeight: number): boolean {
  if (blocks.length < 2) {
    return blocks.some((block) => hasInlineTableColumns(block.text))
  }

  const sortedBlocks = [...blocks].sort((a, b) => a.x - b.x)
  let largeGaps = 0
  for (let i = 1; i < sortedBlocks.length; i++) {
    const previous = sortedBlocks[i - 1]
    const current = sortedBlocks[i]
    const gap = sortedBlocks[i].x - (previous.x + previous.width)
    if (
      gap > averageLineHeight * 1.8 ||
      (gap > averageLineHeight * 0.9 && isTableKeyLike(previous.text) && startsLikeTableDescription(current.text))
    ) {
      largeGaps += 1
    }
  }

  return largeGaps >= 1
}

function hasInlineTableColumns(text: string): boolean {
  const trimmed = text.trim()
  return (
    /\S\s{3,}\S/.test(trimmed) &&
    (
      /^Option\s{2,}Description\b/i.test(trimmed) ||
      /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(trimmed)
    )
  )
}

function isTableKeyLike(text: string): boolean {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(text.trim())
}

function isStructuredTableKeyLike(text: string): boolean {
  const trimmed = text.trim()
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(trimmed) || /[_-]/.test(trimmed)
}

function startsLikeTableDescription(text: string): boolean {
  const trimmed = text.trim()
  return /^[A-Z]/.test(trimmed) && trimmed.length > 6
}

function unionBlockRects(blocks: OcrTextBlock[]): Rect {
  const rects = blocks.map((block) => ({
    x: block.x,
    y: block.y,
    width: block.width,
    height: block.height
  }))
  return rects.reduce((result, rect) => unionRects(result, rect), rects[0])
}

function unionRects(a: Rect, b: Rect): Rect {
  const left = Math.min(a.x, b.x)
  const top = Math.min(a.y, b.y)
  const right = Math.max(a.x + a.width, b.x + b.width)
  const bottom = Math.max(a.y + a.height, b.y + b.height)

  return {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top
  }
}

function getAverageLineHeight(blocks: OcrTextBlock[]): number {
  return positiveNumber(average(blocks.map((block) => getBlockLineHeight(block))), 16)
}

function getBlockLineHeight(block: OcrTextBlock): number {
  return positiveNumber(block.lineHeight, positiveNumber(block.height, positiveNumber(block.fontSize, 16) * 1.2))
}

function weightedAverage(left: number, leftWeight: number, right: number, rightWeight: number): number {
  const totalWeight = leftWeight + rightWeight
  if (totalWeight <= 0) return right
  return (left * leftWeight + right * rightWeight) / totalWeight
}

function positiveNumber(value: number, fallback: number): number {
  return Number.isFinite(value) && value > 0 ? value : fallback
}

function average(values: number[]): number {
  if (values.length === 0) return 0
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

function isClosingPunctuation(char: string): boolean {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(char)
}

function isOpeningPunctuation(char: string): boolean {
  return /^[(\[{<"'“‘]$/.test(char)
}

function isCjkPunctuation(char: string): boolean {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(char)
}
