import { afterEach, describe, expect, it } from 'vitest';
import { useConfigQuickSearch } from './useConfigQuickSearch';

describe('useConfigQuickSearch', () => {
  afterEach(() => {
    useConfigQuickSearch().close();
  });

  it('shares visibility across workbench and titlebar consumers', () => {
    const titlebar = useConfigQuickSearch();
    const workbench = useConfigQuickSearch();

    workbench.open();
    expect(titlebar.visible.value).toBe(true);

    titlebar.setVisible(false);
    expect(workbench.visible.value).toBe(false);
  });
});
