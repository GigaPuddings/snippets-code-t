import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { ref } from 'vue';
import type { ComposerTranslation } from 'vue-i18n';
import type { ContentType } from '@/types/models';
import { useSearchResultState } from './useSearchResultState';

const t = ((key: string) => key) as unknown as ComposerTranslation;

describe('useSearchResultState', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('keeps the local selection in sync when an item is selected by id', () => {
    const results = ref<ContentType[]>([
      { id: 'first', title: 'First', content: 'first content' },
      { id: 'second', title: 'Second', content: 'second content' }
    ]);
    const state = useSearchResultState(results, t);

    expect(state.selectedItemId.value).toBe('first');

    expect(state.selectItemById('second')).toEqual(expect.objectContaining({ id: 'second' }));
    expect(state.selectedItemId.value).toBe('second');
    expect(state.selectedItem.value).toEqual(expect.objectContaining({ id: 'second' }));
  });
});
