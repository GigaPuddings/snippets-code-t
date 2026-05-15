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

const END_PUNCTUATION = /[.!?。！？；;：:][)"'”’】）\]]*$/
const CJK_CHAR = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/
const ASCII_WORD_EDGE = /[A-Za-z0-9]/
const LIST_ITEM_START = /^\s*(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/

export function reflowOcrBlocks(blocks: OcrTextBlock[]): ParagraphBlock[] {
  const averageLineHeight = getAverageLineHeight(blocks)
  const cleanBlocks = removeIconNoiseBlocks(blocks, averageLineHeight)
  if (cleanBlocks.length === 0) {
    return []
  }

  const lines = buildLines(cleanBlocks, averageLineHeight)
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

  return paragraphs
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

  if (hasEndingPunctuation(previousLine.text)) return false
  if (isListItem(nextLine.text)) return false
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

  const leftTolerance = Math.max(averageLineHeight * 1.2, previousLine.lineHeight * 0.9)
  return Math.abs(nextLine.bbox.x - previousLine.bbox.x) <= leftTolerance
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
