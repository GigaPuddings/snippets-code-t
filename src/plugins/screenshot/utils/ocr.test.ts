import { describe, expect, it } from 'vitest';
import { sortOcrTextBlocksByReadingOrder, type OcrTextBlock } from './ocr';

const block = (
  text: string,
  x: number,
  y: number,
  width: number,
  height: number
): OcrTextBlock => ({
  text,
  x,
  y,
  width,
  height,
  fontSize: 14,
  lineHeight: height,
  angle: 0,
  confidence: 99
});

describe('OCR overlay reading order', () => {
  it('orders fragments from one visual line left to right', () => {
    // RapidOCR returns the final fragment first for this line in the reported bug.
    const input = [
      block('shouldRefresh callback', 533, 301, 258, 28),
      block('custom-status-codes -- statusCodes', 87, 303, 411, 26),
      block('+', 498, 310, 26, 15),
      block(
        'on-retry-callback -- onRetry config mutation before retry',
        84,
        346,
        646,
        28
      )
    ];

    const sorted = sortOcrTextBlocksByReadingOrder(input);

    expect(sorted.map((item) => item.text)).toEqual([
      'custom-status-codes -- statusCodes',
      '+',
      'shouldRefresh callback',
      'on-retry-callback -- onRetry config mutation before retry'
    ]);
    expect(input[0].text).toBe('shouldRefresh callback');
  });
});
