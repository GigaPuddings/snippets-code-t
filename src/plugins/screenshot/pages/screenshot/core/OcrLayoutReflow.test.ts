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

  it('keeps adjacent list items as separate records', () => {
    const result = texts([
      block('• GitHub https://github.com/hiroi-sora/Umi-OCR/releases/latest', 0, 0, 420),
      block('• Source Forge https://sourceforge.net/projects/umi-ocr', 0, 26, 360),
      block('• Lanzou https://hiroi-sora.lanzoul.com/s/umi-ocr', 0, 52, 350)
    ])

    expect(result).toEqual([
      '• GitHub https://github.com/hiroi-sora/Umi-OCR/releases/latest',
      '• Source Forge https://sourceforge.net/projects/umi-ocr',
      '• Lanzou https://hiroi-sora.lanzoul.com/s/umi-ocr'
    ])
  })

  it('keeps a list item separate from the following title', () => {
    const result = texts([
      block('· Scoop Installer (Click to expand)', 0, 0, 260),
      block('Getting Started', 0, 26, 140)
    ])

    expect(result).toEqual(['· Scoop Installer (Click to expand)', 'Getting Started'])
  })

  it('keeps wrapped continuation text inside the same list item', () => {
    const result = texts([
      block('• The software release package is available in .7z compressed', 0, 0, 420),
      block('format or as a self-extracting .7z.exe package.', 28, 26, 320)
    ])

    expect(result).toEqual([
      '• The software release package is available in .7z compressed format or as a self-extracting .7z.exe package.'
    ])
  })

  it('splits OCR-collapsed inline list markers into records', () => {
    const result = texts([
      block(
        '• GitHub https://github.com/hiroi-sora/Umi-OCR/releases/latest • Source Forge https://sourceforge.net/projects/umi-ocr • Lanzou https://hiroi-sora.lanzoul.com/s/umi-ocr',
        0,
        0,
        720,
        72
      )
    ])

    expect(result).toEqual([
      '• GitHub https://github.com/hiroi-sora/Umi-OCR/releases/latest',
      '• Source Forge https://sourceforge.net/projects/umi-ocr',
      '• Lanzou https://hiroi-sora.lanzoul.com/s/umi-ocr'
    ])
  })

  it('keeps solid-circle list markers as separate records', () => {
    const result = texts([
      block('● GitHub https://github.com/hiroi-sora/Umi-OCR/releases/latest', 0, 0, 420),
      block('● Source Forge https://sourceforge.net/projects/umi-ocr', 0, 26, 360),
      block('● Lanzou https://hiroi-sora.lanzoul.com/s/umi-ocr', 0, 52, 350)
    ])

    expect(result).toEqual([
      '● GitHub https://github.com/hiroi-sora/Umi-OCR/releases/latest',
      '● Source Forge https://sourceforge.net/projects/umi-ocr',
      '● Lanzou https://hiroi-sora.lanzoul.com/s/umi-ocr'
    ])
  })

  it('keeps an arrow-dot list item separate from the following title', () => {
    const result = texts([
      block('→· Scoop Installer (Click to expand)', 0, 0, 280),
      block('Getting Started', 0, 26, 140)
    ])

    expect(result).toEqual(['→· Scoop Installer (Click to expand)', 'Getting Started'])
  })

  it('splits the collapsed download-list reproduction into distinct records', () => {
    const result = texts([
      block(
        '● GitHub https://github.com/hiroi-sora/Umi-OCR/releases/latest ● Source Forge https://sourceforge.net/projects/umi-ocr ● Lanzou https://hiroi-sora.lanzoul.com/s/umi-ocr →· Scoop Installer (Click to expand) Getting Started',
        0,
        0,
        920,
        90
      )
    ])

    expect(result).toEqual([
      '● GitHub https://github.com/hiroi-sora/Umi-OCR/releases/latest',
      '● Source Forge https://sourceforge.net/projects/umi-ocr',
      '● Lanzou https://hiroi-sora.lanzoul.com/s/umi-ocr',
      '→· Scoop Installer (Click to expand)',
      'Getting Started'
    ])
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
