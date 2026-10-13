import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { ref } from 'vue';
import type { ComposerTranslation } from 'vue-i18n';
import type { ContentType } from '@/types/models';
import type { RegisteredPlugin } from '@/plugins/protocol';
import { usePluginStore } from '@/store';
import { useSearchResultTabs } from './useSearchResultTabs';

const t = ((key: string) => key) as unknown as ComposerTranslation;

const createResult = (
  id: string,
  source: string,
  summarize: ContentType['summarize']
): ContentType => ({
  id,
  title: id,
  content: id,
  summarize,
  metadata: { source }
});

const createPlugin = (
  id: 'local-launcher' | 'desktop-files',
  label: string
): RegisteredPlugin => ({
  id,
  source: 'local',
  manifest: {
    schemaVersion: 1,
    id,
    version: '1.0.0',
    kind: 'local',
    name: { i18nKey: `plugins.${id}.name`, fallback: label },
    description: { i18nKey: `plugins.${id}.description`, fallback: label },
    category: 'search',
    enabledByDefault: true
  },
  nameKey: `plugins.${id}.name`,
  descriptionKey: `plugins.${id}.description`,
  category: 'search',
  enabledByDefault: true
});

describe('useSearchResultTabs plugin lifecycle', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('removes disabled local-launcher results from every tab immediately', () => {
    const pluginStore = usePluginStore();
    pluginStore.installedPlugins = [
      createPlugin('local-launcher', 'Local launcher')
    ];
    pluginStore.enabled['local-launcher'] = true;

    const results = ref<ContentType[]>([
      createResult('app', 'app', 'app'),
      createResult('bookmark', 'bookmark', 'bookmark'),
      createResult('note', 'workspace', 'text')
    ]);
    const resultTabs = useSearchResultTabs(results, t);

    expect(resultTabs.getTabCount('text')).toBe(3);
    expect(resultTabs.tabs.value.map((tab) => tab.value)).toContain('app');
    expect(resultTabs.tabs.value.map((tab) => tab.value)).toContain('bookmark');

    pluginStore.enabled['local-launcher'] = false;

    expect(resultTabs.getTabCount('text')).toBe(1);
    expect(resultTabs.getTabResults('text')[0].id).toBe('note');
    expect(resultTabs.tabs.value.map((tab) => tab.value)).not.toContain('app');
    expect(resultTabs.tabs.value.map((tab) => tab.value)).not.toContain(
      'bookmark'
    );
  });

  it('does not remove results owned by another enabled plugin', () => {
    const pluginStore = usePluginStore();
    pluginStore.installedPlugins = [
      createPlugin('desktop-files', 'Desktop files')
    ];
    pluginStore.enabled['local-launcher'] = false;
    pluginStore.enabled['desktop-files'] = true;

    const results = ref<ContentType[]>([createResult('file', 'file', 'file')]);
    const resultTabs = useSearchResultTabs(results, t);

    expect(resultTabs.getTabCount('text')).toBe(1);
    expect(resultTabs.getTabCount('file')).toBe(1);
    expect(resultTabs.tabs.value.map((tab) => tab.value)).toContain('file');
  });
  it('puts launcher categories first and reuses functions and settings in More', () => {
    const pluginStore = usePluginStore();
    pluginStore.installedPlugins = [
      createPlugin('local-launcher', 'Local launcher')
    ];
    pluginStore.enabled['local-launcher'] = true;
    const resultTabs = useSearchResultTabs(
      [
        createResult('app', 'app', 'app'),
        createResult('bookmark', 'bookmark', 'bookmark'),
        { id: 'note', title: 'Note', content: '', type: 'note' },
        createResult('page', 'core', 'navigation'),
        createResult('settings', 'core', 'settings')
      ],
      t
    );
    expect(resultTabs.primaryTabs.value.map((tab) => tab.value)).toEqual([
      'text',
      'app',
      'bookmark',
      'content'
    ]);
    expect(resultTabs.moreTabs.value.map((tab) => tab.value)).toEqual([
      'navigation',
      'settings',
      'code',
      'note'
    ]);
    expect(resultTabs.tabs.value.map((tab) => tab.value)).toEqual([
      ...resultTabs.primaryTabs.value.map((tab) => tab.value),
      ...resultTabs.moreTabs.value.map((tab) => tab.value)
    ]);
    expect(resultTabs.getTabCount('app')).toBe(1);
    expect(resultTabs.getTabCount('bookmark')).toBe(1);
    expect(resultTabs.getTabCount('content')).toBe(1);
    expect(resultTabs.getTabCount('navigation')).toBe(1);
    expect(resultTabs.getTabCount('settings')).toBe(1);
    pluginStore.enabled['local-launcher'] = false;
    expect(resultTabs.primaryTabs.value.map((tab) => tab.value)).toEqual([
      'text',
      'content'
    ]);
    expect(resultTabs.getTabCount('text')).toBe(3);
  });
});
