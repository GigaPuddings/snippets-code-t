import { describe, expect, it } from 'vitest';
import type { WallhavenFilters } from '../api';
import {
  filtersForWallhavenSelection,
  getWallhavenSelection,
  selectWallhavenType
} from './wallhavenSelection';

const initial: WallhavenFilters = {
  categories: '110',
  nature: true,
  asianWomen: false,
  topRange: '1M'
};

describe('Wallhaven type selection', () => {
  it.each([0, 1, 2])(
    'plain click selects native type %i alone and clears Nature',
    (index) => {
      const patch = selectWallhavenType(initial, index);
      const expected = ['1000', '0100', '0010'][index];
      expect(patch).toMatchObject({
        selection: expected,
        categories: expected.slice(0, 3),
        nature: false
      });
      expect(getWallhavenSelection({ ...initial, ...patch })).toBe(expected);
    }
  );

  it('selects Nature alone without highlighting its implicit General and Anime scope', () => {
    const patch = selectWallhavenType({ ...initial, nature: false }, 3);
    expect(patch).toMatchObject({
      categories: '110',
      nature: true,
      selection: '0001'
    });
    expect(getWallhavenSelection({ ...initial, ...patch })).toBe('0001');
  });

  it('supports explicit additive combinations and removing one of several types', () => {
    let filters = { ...initial };
    for (const index of [0, 1, 2]) {
      filters = { ...filters, ...selectWallhavenType(filters, index, true) };
    }
    expect(filters).toMatchObject({
      selection: '1111',
      categories: '111',
      nature: true,
      asianWomen: false
    });
    filters = { ...filters, ...selectWallhavenType(filters, 3, true) };
    expect(filters).toMatchObject({
      selection: '1110',
      categories: '111',
      nature: false
    });
    filters = { ...filters, ...selectWallhavenType(filters, 0, true) };
    expect(filters).toMatchObject({
      selection: '0110',
      categories: '011',
      nature: false
    });
  });

  it('plain click on an item already in a multi-selection reduces it to one', () => {
    expect(
      selectWallhavenType(
        { ...initial, selection: '1001', categories: '100' },
        0
      )
    ).toMatchObject({ selection: '1000', nature: false });
    expect(
      selectWallhavenType({ ...initial, selection: '1101' }, 3)
    ).toMatchObject({ selection: '0001', nature: true });
  });

  it('keeps at least one item and avoids reloading an unchanged single selection', () => {
    const filters = {
      ...initial,
      nature: false,
      categories: '010',
      selection: '0100'
    };
    expect(selectWallhavenType(filters, 1, true)).toBeNull();
    expect(selectWallhavenType(filters, 1)).toBeNull();
    expect(selectWallhavenType(initial, 3, true)).toBeNull();
  });

  it('distinguishes explicit combinations from older Nature presets with the same search scope', () => {
    expect(getWallhavenSelection(initial)).toBe('0001');
    expect(getWallhavenSelection({ ...initial, selection: '1101' })).toBe(
      '1101'
    );
    expect(getWallhavenSelection({ ...initial, selection: '1000' })).toBe(
      '0001'
    );
    expect(
      getWallhavenSelection({
        ...initial,
        nature: false,
        categories: '001',
        selection: '1101'
      })
    ).toBe('0010');
  });

  it('clears the People-only preset for mixed or Nature selections', () => {
    const filters = {
      ...initial,
      categories: '001',
      nature: false,
      asianWomen: true
    };
    expect(selectWallhavenType(filters, 0, true)?.asianWomen).toBe(false);
    expect(selectWallhavenType(filters, 3, true)?.asianWomen).toBe(false);
  });

  it.each(['0000', '100', '11111', 'abcd'])(
    'rejects invalid selection %s',
    (value) => {
      expect(filtersForWallhavenSelection(initial, value)).toBeNull();
    }
  );
});
