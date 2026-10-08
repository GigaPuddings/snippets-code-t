import { describe, expect, it } from 'vitest';
import { formatReleaseDate } from './format-release-date';

describe('update release date', () => {
  it.each([
    '2026-10-08T03:56:40Z',
    '2026-10-08T03:56:40.012345678+00:00',
    '2026-10-08T11:56:40+08:00',
    '2026-10-08 3:56:40.0 +00:00:00',
    '2026-10-08 3:56:40.012345678 +00:00:00',
    '2026-10-08 11:56:40.012345678 +08:00:00'
  ])('shows the same release instant for %s', (value) => {
    expect(formatReleaseDate(value)).toBe('2026-10-08 11:56:40');
  });

  it('converts negative offsets across the date boundary', () => {
    expect(formatReleaseDate('2026-10-07 23:56:40.0 -05:00:00')).toBe(
      '2026-10-08 12:56:40'
    );
  });

  it.each([undefined, null, '', ' ', 'Invalid Date', 'not-a-date'])(
    'omits missing or invalid release dates (%s)',
    (value) => {
      expect(formatReleaseDate(value)).toBe('');
    }
  );
});
