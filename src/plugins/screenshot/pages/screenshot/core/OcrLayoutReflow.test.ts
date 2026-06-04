import { describe, expect, it } from 'vitest'
import { reflowOcrBlocks } from './OcrLayoutReflow'
import type { OcrTextBlock } from './types'

function block(
  text: string,
  x: number,
  y: number,
  width = 80,
  height = 20
): OcrTextBlock {
  return {
    text,
    x,
    y,
    width,
    height,
    fontSize: 14,
    lineHeight: height,
    angle: 0
  }
}

function texts(blocks: OcrTextBlock[]): string[] {
  return reflowOcrBlocks(blocks).map((paragraph) => paragraph.text)
}

describe('OcrLayoutReflow', () => {
  it('orders multi-column text by layout region before row position', () => {
    const result = texts([
      block('Left 1.', 0, 0),
      block('Right 1.', 220, 0),
      block('Left 2.', 0, 30),
      block('Right 2.', 220, 30)
    ])

    expect(result).toEqual(['Left 1.', 'Left 2.', 'Right 1.', 'Right 2.'])
  })

  it('joins English natural paragraph lines with word spacing', () => {
    const result = texts([
      block('This line continues', 0, 0, 160),
      block('on the next line.', 0, 26, 150)
    ])

    expect(result).toEqual(['This line continues on the next line.'])
  })

  it('joins CJK natural paragraph lines without inserting spaces', () => {
    const result = texts([
      block('这是一段', 0, 0, 80),
      block('连续文字。', 0, 26, 90)
    ])

    expect(result).toEqual(['这是一段连续文字。'])
  })

  it('keeps code-like lines as separate records', () => {
    const result = texts([
      block('const value = 1', 0, 0, 140),
      block('return value', 0, 26, 120)
    ])

    expect(result).toEqual(['const value = 1', 'return value'])
  })

  it('orders vertical layout from right column to left column', () => {
    const result = texts([
      block('右一', 120, 0, 22, 70),
      block('右二', 120, 86, 22, 70),
      block('左一', 70, 0, 22, 70)
    ])

    expect(result).toEqual(['右一右二', '左一'])
  })
})
