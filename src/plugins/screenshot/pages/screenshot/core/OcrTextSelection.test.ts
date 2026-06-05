import { describe, expect, it } from 'vitest'
import {
  buildSelectedOcrText,
  findNearestOcrCharacterOffset,
  getOcrTextSelectionSegments,
  type OcrTextSelectionBlock,
  type OcrTextSelectionRange
} from './OcrTextSelection'

const blocks: OcrTextSelectionBlock[] = [
  { text: 'Hello world', separator: ' ' },
  { text: '第二行文字', separator: '\n' },
  { text: 'Final line', separator: '' }
]

describe('OcrTextSelection', () => {
  it('selects part of one OCR block', () => {
    const selection: OcrTextSelectionRange = {
      anchor: { blockIndex: 0, offset: 6 },
      focus: { blockIndex: 0, offset: 11 }
    }

    expect(buildSelectedOcrText(blocks, selection)).toBe('world')
  })

  it('selects across OCR blocks with their separators', () => {
    const selection: OcrTextSelectionRange = {
      anchor: { blockIndex: 0, offset: 6 },
      focus: { blockIndex: 2, offset: 5 }
    }

    expect(buildSelectedOcrText(blocks, selection)).toBe('world 第二行文字\nFinal')
  })

  it('normalizes reverse drag direction', () => {
    const selection: OcrTextSelectionRange = {
      anchor: { blockIndex: 2, offset: 5 },
      focus: { blockIndex: 0, offset: 6 }
    }

    expect(buildSelectedOcrText(blocks, selection)).toBe('world 第二行文字\nFinal')
  })

  it('returns only non-empty visual segments', () => {
    const selection: OcrTextSelectionRange = {
      anchor: { blockIndex: 0, offset: 11 },
      focus: { blockIndex: 2, offset: 0 }
    }

    expect(getOcrTextSelectionSegments(blocks, selection)).toEqual([
      { blockIndex: 1, start: 0, end: 5 }
    ])
  })

  it('maps a horizontal pointer position to the nearest character boundary', () => {
    const boundaries = [0, 8, 17, 25, 40]

    expect(findNearestOcrCharacterOffset(boundaries, 2)).toBe(0)
    expect(findNearestOcrCharacterOffset(boundaries, 13)).toBe(2)
    expect(findNearestOcrCharacterOffset(boundaries, 39)).toBe(4)
  })
})
